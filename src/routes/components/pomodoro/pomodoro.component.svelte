<script>
    import Title from "../title.component.svelte";
    import Buzzer from "./buzzer.component.svelte";
    import CompletionIndicator from "./completion-indicator.component.svelte";
    import Actions from "./pomodoro-fast-actions.svelte";

    let timerButtons = [
        {label: "15"},
        {label: "25"},
        {label: "55"},
    ]

    function buzzerClicked(timer) {
        console.log("buzzer clicked", timer);
    }
</script>

<section id="content">
    <Title title="POMODORO"/>

    <div class="pomodoro-buttons">
        {#each timerButtons as timer}
            <Buzzer on:click={() => buzzerClicked(timer)} {timer}></Buzzer>
        {/each}
    </div>

    <Actions></Actions>

        <CompletionIndicator state="running"></CompletionIndicator>
</section>

<style>
    #content {
        padding: 1rem;
        display: flex;
        flex-direction: column;
        gap: 1rem;
        align-items: center;
        justify-content: space-between;
        width: 50vw;
    }

    .pomodoro-buttons {
        width: 100%;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-evenly;

    }

    .completion-indicator {
        /*justify-content: flex-end;*/
    }


</style>