<script lang="ts">
    export let timer;
</script>



<div class="buzzer" on:click role="button">{timer.label}</div>

<style>
    .buzzer {
        width: 15vw;
        height: 15vw;
        border-radius: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: aquamarine;
        font-size: clamp(0.5rem, 2vw, 4rem);
        cursor: pointer;
    }
</style>