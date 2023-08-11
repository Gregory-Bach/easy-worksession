<script lang="ts">
    import {beforeUpdate} from "svelte";
    import * as dayjs from 'dayjs';

    export let workSessions: any[] = [];
    let workSessionList: any[] = [];

    beforeUpdate(() => {
        workSessionList = getWorkSessionList(workSessions);
    });

    function getWorkSessionList(_workSessions: any[]) {
        let test = {};

        _workSessions.forEach((workSession) => {
            if (workSession.end) {
                if (test[workSession.label]) {
                    test[workSession.label].duration += dayjs(workSession.end).diff(workSession.start, 's');
                } else {
                    test[workSession.label] = {label: workSession.label};
                    test[workSession.label].duration = dayjs(workSession.end).diff(workSession.start, 's');
                }
            }
        });

        let workSessionSummaryList = Object.values(test);
        console.debug('TEST >>>', workSessionSummaryList);
        return workSessionSummaryList.sort((a, b) => a.label.localeCompare(b.label));
    }

</script>

{#if workSessionList?.length}
    <section>
        <h6>SUMMARY</h6>
        <table>
            {#each workSessionList as workSession}
                <tr>
                    <td>{workSession.label}</td>
                    <td class="duration">{workSession.duration} min</td>
                </tr>
            {/each}
        </table>
    </section>
{/if}


<style>
    section {
        width: 100%;
        text-align: center;
    }

    h6 {
        color: #6ed9b5;
    }

    table {
        text-align: left;
        margin: 0.25rem 1rem;
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
        padding: 0.5rem;
        border: 1px solid #dcdcdc;
    }

    .duration {
        text-align: right;
    }
</style>
