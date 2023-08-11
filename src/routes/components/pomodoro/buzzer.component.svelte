<script lang="ts">
    export let timer: { label: string, duration: number };
</script>

<div class="buzzer" on:click role="button">
    <div class="duration">&nbsp;</div>
    <div class="label">{timer.label?.toUpperCase()}</div>
    <div class="duration">{timer.duration} + 5</div>
</div>

<style>
    .buzzer {
        width: 13vw;
        height: 13vw;
        border-radius: 50%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        background-color: #6ed9b5;
        color: white;
        cursor: pointer;
    }

    .label {
        font-size: clamp(0.5rem, 2vw, 4rem);
        font-family: "Arial Black", monospace;
    }

    .duration {
        font-size: clamp(0.25rem, 1vw, 2rem);
        font-family: "Arial", monospace;
    }
</style>