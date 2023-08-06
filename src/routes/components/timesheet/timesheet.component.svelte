<script lang="ts">
    import Title from '../title.component.svelte';
    import Action from "../shared/fast-action.svelte";
    import TimerDisplay from "./timer-display.component.svelte";
    import {timesheetEllapsedTime} from "../../../stores/store";

    let timer = 0;
    let interval = null;
    let workSessions: any[] = [];
    let currentWorkSessionName!: string;


    function stop() {
        endTimer();
    }

    function start() {

        if (interval) {
            endTimer();
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
    }

    function startFromExisting(label: string) {
        currentWorkSessionName = label;
        start();
    }


    function endTimer() {
        workSessions[workSessions.length - 1].end = new Date();
        clearInterval(interval);
        interval = null;
        timesheetEllapsedTime.set(0);
        console.log('END was clicked', workSessions);
    }

    function formatDateToHoursAndMinutes(date: Date) {
        if (!date) {
            return '⏱️';
        }
        return `${date.getHours()}:${date.getMinutes()}`;
    }
</script>

<Title title="TIMESHEET"/>

<div class="content">
    <section class="actions">
        <Action action="start" on:click={start}></Action>
        <Action action="stop" on:click={stop}></Action>
    </section>

    <form on:submit|preventDefault={start}>
        <input id="workSessionName" aria-label="Enter your worksession name here" bind:value={currentWorkSessionName}/>
    </form>

    <section>
        <TimerDisplay/>
    </section>

    <section class="worksession-list">
        {#each [...workSessions].reverse() as workSession}

            <div>
                <button on:click={() => startFromExisting(workSession.label)}
                        class:active={!workSession.end}
                >{workSession.label}
                    - {formatDateToHoursAndMinutes(workSession.start)}
                    - {formatDateToHoursAndMinutes(workSession.end)}</button>
            </div>

        {/each}
    </section>
</div>

<style>
    .content {
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: center;
        height: 100%;
        gap: 16px;
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

    form {
        width: 100%;
        display: flex;
        justify-content: center;
    }

    input {
        margin: 1rem 15%;
        width: 70%;
        padding: 8px;
        border-radius: 8px;
        border: 1px solid #ccc;
    }

    .worksession-list {
        color: #838383;
        font-size: 1.2rem;
        display: flex;
        gap: 0.25rem;
        flex-direction: column;
        justify-content: flex-start;
        align-items: flex-start;
    }

    button {
        border: none;
        background-color: transparent;
        color: #838383;
        font-size: 1.2rem;
        border-radius: 8px;
        cursor: pointer;
    }

    .active {
        background-color: #6ed9b5;
        color: white;
        -webkit-animation: breathing 7s ease-out infinite normal;
    }

    @-webkit-keyframes breathing {
        0% {
            -webkit-transform: scale(0.95);
            transform: scale(0.95);
        }

        25% {
            -webkit-transform: scale(1);
            transform: scale(1);
        }

        60% {
            -webkit-transform: scale(0.95);
            transform: scale(0.95);
        }

        100% {
            -webkit-transform: scale(0.95);
            transform: scale(0.95);
        }
    }

    @keyframes breathing {
        0% {
            -webkit-transform: scale(0.95);
            -ms-transform: scale(0.95);
            transform: scale(0.95);
        }

        25% {
            -webkit-transform: scale(1);
            -ms-transform: scale(1);
            transform: scale(1);
        }

        60% {
            -webkit-transform: scale(0.95);
            -ms-transform: scale(0.95);
            transform: scale(0.95);
        }

        100% {
            -webkit-transform: scale(0.95);
            -ms-transform: scale(0.95);
            transform: scale(0.95);
        }
    }

</style>
