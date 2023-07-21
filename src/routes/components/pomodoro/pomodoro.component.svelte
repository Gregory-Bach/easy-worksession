<script>
    import Title from "../title.component.svelte";
</script>

<section id="content">
    <Title title="POMODORO"/>

    <div id="pomodoro-buttons">
        <div>Hello</div>
        <div>Greg</div>
        <div>!</div>
    </div>
</section>

<style>
    #content {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: flex-start;
        width: 50vw;
    }

    #pomodoro-buttons {
        width: 100%;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-evenly;

    }
</style>