<script lang="ts">
    import Title from '../title.component.svelte';
    import Action from "../shared/fast-action.svelte";

    function actionClicked(action: string) {
        console.log("action clicked", action);
    }

    // const timerDisplay = document.getElementById('timerDisplay');
    // const workSessionList = document.getElementById('workSessionList');
    // const workSessionName = document.getElementById('workSessionName');

    let timer = 0;
    let timerInterval = null;
    const workSessions = [];
    let currentWorkSession = null;

    // function start(timerDisplay: any, workSessions: any[], timer: number, timerInterval: any, workSessionName: any) {
    //
    //     try {
    //         timerDisplay.innerHTML = 'CLICK START';
    //
    //
    //         document.getElementById('startButton').addEventListener('click', () => {
    //             if (timerInterval) {
    //                 return;
    //             }
    //
    //             startTimer();
    //             workSessionList.innerHTML = getLIElementsForWorkSessions(workSessions);
    //         });
    //
    //         document.getElementById('endButton').addEventListener('click', function () {
    //             endTimer();
    //             workSessionList.innerHTML = getLIElementsForWorkSessions(workSessions);
    //         });
    //     } catch (e) {
    //         console.log('timerDisplay not found');
    //     }
    // }

    function startTimer(workSessions: any[], timer: number, timerDisplay: any, timerInterval: any, workSessionName: any) {
        workSessions.push({
            start: new Date(),
            end: null,
            label: workSessionName.value ? workSessionName.value : 'Work Session',
        });

        workSessionName.value = null;

        timerInterval = setInterval(function () {
            timer++;
            timerDisplay.innerHTML = timer.toString();
        }, 1000);

        console.log('START was clicked');
        return {
            workSessions,
            timer,
            timerDisplay,
            timerInterval,
            workSessionName,
        };
    }


    function endTimer(workSessions: any[], timer: number, timerDisplay: any, timerInterval: any) {
        workSessions[workSessions.length - 1].end = new Date();
        clearInterval(timerInterval);
        timerInterval = null;
        console.log('END was clicked', workSessions);
        return {
            workSessions,
            timer,
            timerDisplay,
            timerInterval,
        };
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
            <Action action="start" on:click={() => actionClicked('start')}></Action>
            <Action action="stop" on:click={() => actionClicked('stop')}></Action>
        </section>


        <input id="workSessionName" aria-label=""/>

        <div id="timerDisplay"></div>

        <section>
            <ul id="workSessionList"></ul>
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
