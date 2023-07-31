<script>
    import Title from './components/title.component.svelte';
    import Pomodoro from './components/pomodoro/pomodoro.component.svelte';
    import Timesheet from './components/timesheet/timesheet.component.svelte';
</script>

<section id="content">
    <Timesheet/>
    <Pomodoro/>
</section>

<style>
    #content {
        height: 100%;
        display: flex;
        flex-direction: row;
        justify-content: space-evenly;
    }
</style>
