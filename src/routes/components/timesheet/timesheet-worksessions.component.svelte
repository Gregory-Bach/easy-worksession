<script lang="ts">
    import * as dayjs from 'dayjs';
    import {launchNewWorkSession} from "../../../stores/store";

    export let workSessions: any[] = [];

    function startWorkSessionFromExisting(label: string) {
        launchNewWorkSession.set(label);
    }

</script>

<section>
    <table>
        {#each [...workSessions].reverse() as workSession}
            <tr>
                <td on:click={() => startWorkSessionFromExisting(workSession.label)}>
                    <div class:active={!workSession.end}>{workSession.label}</div>
                </td>
                <td>
                    <div class:active={!workSession.end}>{dayjs(workSession.start).format("HH:mm")}</div>
                </td>
                <td>{workSession.end ? dayjs(workSession.end).format('HH:mm') : '⏱️'}</td>
                <td class="duration">
                    {#if (workSession.end) }
                        {dayjs(workSession.end).diff(workSession.start, 'm')} min
                    {/if}
                </td>
            </tr>
        {/each}
    </table>
</section>


<style>
    section {
        width: 100%;
    }

    table {
        margin: 1rem;
        padding: 0.2rem;
        color: #838383;
        border-radius: 0.5rem;
        background-color: #efefef;
        width: 100%;
        border: 1px solid #dcdcdc;
    }

    td {
        border-radius: 0.3rem;
        background-color: white;
        font-family: "Droid Sans Mono", monospace;
        font-size: clamp(0.5rem, 1.5vw, 1rem);
        padding: 0.5rem;
        border: 1px solid #dcdcdc;
    }

    .duration {
        text-align: right;
    }

    .active {
        color: rgba(49, 113, 243, 0.72);
        font-weight: bold;
        -webkit-animation: breathing 7s ease-out infinite normal;
    }

    @-webkit-keyframes breathing {
        0% {
            -webkit-transform: scale(0.95);
            transform: scale(0.95);
        }

        25% {
            -webkit-transform: scale(1);
            transform: scale(1);
        }

        60% {
            -webkit-transform: scale(0.97);
            transform: scale(0.97);
        }

        100% {
            -webkit-transform: scale(0.95);
            transform: scale(0.95);
        }
    }

    @keyframes breathing {
        0% {
            -webkit-transform: scale(0.95);
            -ms-transform: scale(0.95);
            transform: scale(0.95);
        }

        25% {
            -webkit-transform: scale(1);
            -ms-transform: scale(1);
            transform: scale(1);
        }

        60% {
            -webkit-transform: scale(0.97);
            -ms-transform: scale(0.97);
            transform: scale(0.97);
        }

        100% {
            -webkit-transform: scale(0.95);
            -ms-transform: scale(0.95);
            transform: scale(0.95);
        }
    }
</style>
