<script lang="ts">
    import Title from '../title.component.svelte';
    import Action from "../shared/fast-action.svelte";
    import {timesheetEllapsedTime} from "../../../stores/store";


    // const timerDisplay = document.getElementById('timerDisplay');
    // const workSessionList = document.getElementById('workSessionList');
    // const workSessionName = document.getElementById('workSessionName');

    let timer = 0;
    let interval = null;
    let workSessions: any[] = [];
    let currentWorkSessionName!: string;

    function start() {
        startWorksession(timerDisplay, workSessions, timer, workSessionName);
    }

    function stop() {
        console.error('STOP action is not implemented yet');
        endTimer();
    }

    function startWorksession(timerDisplay: any, workSessions: any[], timerInterval: any, workSessionName: any) {

        if (timerInterval) {
            return;
        }

        startTimer();
    }

    function startTimer() {
        workSessions = [...workSessions, {
            start: new Date(),
            end: null,
            label: currentWorkSessionName ? currentWorkSessionName : 'Work Session',
        }];

        currentWorkSessionName = '';

        interval = setInterval(() => {
            timesheetEllapsedTime.update(n => n + 1);
        }, 1000);

        console.debug('START was clicked', workSessions);
    }


    function endTimer() {
        workSessions[workSessions.length - 1].end = new Date();
        clearInterval(interval);
        interval = null;
        console.log('END was clicked', workSessions);
    }

    function getLIElementsForWorkSessions(_workSessions: any[]) {
        const reversedWorkSessions = [..._workSessions].reverse();
        return reversedWorkSessions.map(function (workSession) {
            return `<li>${workSession.label} - ${formatDateToHoursAndMinutes(workSession.start)} - ${formatDateToHoursAndMinutes(workSession.end)}</li>`;
        }).join('');
    }

    function formatDateToHoursAndMinutes(date: Date) {
        if (!date) {
            return '⏱️';
        }

        return `${date.getHours()}:${date.getMinutes()}`;
    }

</script>

<section id="content">
    <Title title="TIMESHEET"/>

    <div>
        <section class="actions">
            <Action action="start" on:click={start}></Action>
            <Action action="stop" on:click={stop}></Action>
        </section>


        <input id="workSessionName" aria-label="Enter your worksession name here" bind:value={currentWorkSessionName}/>

        <div id="timerDisplay">{Math.floor($timesheetEllapsedTime / 60)} min {$timesheetEllapsedTime % 60 || 0 } sec
        </div>

        <section>
            <ul id="workSessionList">
                {#each [...workSessions].reverse() as workSession}
                    <li>{workSession.label} - {formatDateToHoursAndMinutes(workSession.start)}
                        - {formatDateToHoursAndMinutes(workSession.end)}</li>
                {/each}
            </ul>
        </section>

    </div>
</section>

<style>
    #content {
        width: 50vw;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: center;
        height: 100%;
        gap: 16px;
    }

    #timerDisplay {
        font-size: 48px;
        font-weight: bold;
        margin: 8px;
    }

    .actions {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        gap: 2.5vw;
        width: 100%;
        padding: 8px;
    }

    input {
        margin: 1rem 15%;
        width: 70%;
        padding: 8px;
        border-radius: 8px;
        border: 1px solid #ccc;
    }

</style>
