<script lang="ts">
    export let timer;
</script>

<div class="buzzer" on:click role="button">{timer.label?.toUpperCase()}</div>

<style>
    .buzzer {
        width: 13vw;
        height: 13vw;
        border-radius: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: #6ed9b5;
        color: white;
        font-size: clamp(0.5rem, 2vw, 4rem);
        font-family: "Arial Black", monospace;
        cursor: pointer;
    }
</style>