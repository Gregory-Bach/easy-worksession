<script lang="ts">
    import {pomodoroStatus, pomodoroTimeToGo} from "../../../stores/store";
    import Title from "../title.component.svelte";
    import Buzzer from "./buzzer.component.svelte";
    import CompletionIndicator from "./completion-indicator.component.svelte";
    import Action from "../shared/fast-action.svelte";

    let interval: any = null;

    let state = "pending";

    pomodoroStatus.subscribe((status) => {
        state = status;
    });

    pomodoroTimeToGo.subscribe((time) => {
        if (time < 1) {
            clearInterval(interval);
            interval = null;
            pomodoroStatus.set('pending');
        } else if (time < 300) {
            pomodoroStatus.set('resting');
        } else if (time < 600) {
            pomodoroStatus.set('ending');
        }
    });

    const timerButtons = [
        {label: "Blitz", duration: 15},
        {label: "Classic", duration: 25},
        {label: "Deep", duration: 55},
    ]

    function buzzerClicked(timer: { label: string, duration: number }) {
        if (!interval) {
            pomodoroTimeToGo.set((timer.duration + 5) * 60);
            interval = setInterval(() =>
                pomodoroTimeToGo.update((value) => value - 1), 1000);
            pomodoroStatus.set("running");
        }
    }

    function actionClicked(action: 'pause' | 'stop') {
        if (!interval) return;

        switch (action) {
            case "pause":
                pause();
                break;
            case "stop":
                stop();
                break;
            default:
                console.error("Unknown action", action);
        }
    }

    function pause() {
        console.error('NOT IMPLEMENTED YET!');
    }

    function stop() {
        clearInterval(interval);
        interval = null;
        pomodoroStatus.set('pending');
        pomodoroTimeToGo.set(0);
    }
</script>

<section id="content">
    <Title title="POMODORO"/>

    <div class="buzzers">
        {#each timerButtons as timer}
            <Buzzer on:click={() => buzzerClicked(timer)} {timer}></Buzzer>
        {/each}
    </div>

    <section class="actions">
        <Action action="pause" on:click={() => actionClicked('pause')}></Action>
        <Action action="stop" on:click={() => actionClicked('stop')}></Action>
    </section>

    <CompletionIndicator {state}></CompletionIndicator>
</section>

<style>
    #content {
        width: 100%;
        padding: 1rem;
        display: flex;
        flex-direction: column;
        gap: 1rem;
        align-items: center;
        justify-content: space-between;
    }

    .buzzers {
        width: 100%;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-evenly;
        gap: 1rem;

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

</style>