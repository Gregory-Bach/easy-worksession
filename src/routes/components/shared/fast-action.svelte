<script lang="ts">
    export let action = 'stop';
</script>

<div on:click role="button">
    {action.toUpperCase()}
</div>

<style>
    div {
        background-color: #838383;
        border: none;
        color: white;
        height: 10vw;
        width: 10vw;
        border-radius: 2.5vw;
        font-size: clamp(0.5rem, 2vw, 4rem);
        font-weight: 700;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
    }
</style>