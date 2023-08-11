<script lang="ts">
    import * as dayjs from 'dayjs';
    import Title from '../title.component.svelte';
    import Action from "../shared/fast-action.svelte";
    import TimerDisplay from "./timer-display.component.svelte";
    import TimesheetSummary from "./timesheet-summary.component.svelte";
    import TimesheetWorksessions from "./timesheet-worksessions.component.svelte";
    import {timesheetEllapsedTime, launchNewWorkSession} from "../../../stores/store";

    let timer = 0;
    let interval = null;
    let workSessions: any[] = [];
    let currentWorkSessionName = '';


    function stop() {
        endTimer();
    }

    const start = () => {

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
        return dayjs(date).format('HH:mm');
    }


    launchNewWorkSession.subscribe((value) => {
        console.debug('launchNewWorkSession', value);
        currentWorkSessionName = value;
        // start();
    });

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

    <!--    <section class="worksession-list">-->
    <!--        {#each [...workSessions].reverse() as workSession}-->

    <!--            <div>-->
    <!--                <button on:click={() => startFromExisting(workSession.label)}-->
    <!--                        class:active={!workSession.end}-->
    <!--                >{workSession.label}-->
    <!--                    | {formatDateToHoursAndMinutes(workSession.start)}-->
    <!--                    => {formatDateToHoursAndMinutes(workSession.end)}-->
    <!--                    {#if (workSession.end) }-->
    <!--                        &nbsp;({dayjs(workSession.end).diff(workSession.start, 'm')} mn)-->
    <!--                    {/if}-->
    <!--                </button>-->
    <!--            </div>-->

    <!--        {/each}-->
    <!--    </section>-->

    <TimesheetWorksessions {workSessions}/>

    <TimesheetSummary {workSessions}/>
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

    /*.worksession-list {*/
    /*    color: #838383;*/
    /*    font-size: 1.2rem;*/
    /*    display: flex;*/
    /*    gap: 0.25rem;*/
    /*    flex-direction: column;*/
    /*    justify-content: flex-start;*/
    /*    align-items: flex-start;*/
    /*}*/

    /*button {*/
    /*    border: none;*/
    /*    background-color: transparent;*/
    /*    color: #838383;*/
    /*    font-size: 1.2rem;*/
    /*    border-radius: 8px;*/
    /*    cursor: pointer;*/
    /*}*/

</style>
