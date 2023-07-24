<script lang="ts">
    function pause() {
        console.debug('pause');
    }
    function stop() {
        console.debug('stop');
    }

</script>

<div>
    <button on:click={pause}>PAUSE</button>
    <button on:click={stop}>STOP</button>
</div>

<style>
    button {
        background-color: #838383;
        border: none;
        color: white;
        height: 10vw;
        width: 10vw;
        border-radius: 1rem;
        font-size: 1.5rem;
        font-weight: 700;
    }
</style>