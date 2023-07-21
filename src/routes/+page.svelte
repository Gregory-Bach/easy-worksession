<script>
    import Title from './components/title.component.svelte';
    import Pomodoro from './components/pomodoro/pomodoro.component.svelte';
    import Timesheet from './components/timesheet.component.svelte';
</script>

<Title/>

<section id="content">
    <Timesheet/>
    <Pomodoro/>
</section>

<style>
    #content {
        display: flex;
        flex-direction: row;
        justify-content: space-evenly;
    }
</style>
