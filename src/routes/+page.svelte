<script>
    import Pomodoro from './components/pomodoro/pomodoro.component.svelte';
    import Timesheet from './components/timesheet/timesheet.component.svelte';
</script>

<section id="content">
    <div class="timesheet">
        <Timesheet/>
    </div>
    <div class="pomodoro">
        <Pomodoro/>
    </div>
</section>

<style>
    #content {
        height: 100%;
        width: 100vw;
        display: flex;
        flex-direction: row;
        justify-content: space-around;
    }

    .timesheet {
        width: 45vw;
    }

    .pomodoro {
        width: 45vw;
    }
</style>
