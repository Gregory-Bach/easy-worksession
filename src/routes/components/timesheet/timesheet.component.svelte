<script lang="ts">
    import Title from '../title.component.svelte';

    // const timerDisplay = document.getElementById('timerDisplay');
    // const workSessionList = document.getElementById('workSessionList');
    // const workSessionName = document.getElementById('workSessionName');
    //
    // let timer = 0;
    // let timerInterval = null;
    // const workSessions = [];
    // let currentWorkSession = null;
    //
    // try {
    //     timerDisplay.innerHTML = 'CLICK START';
    //
    //
    //     document.getElementById('startButton').addEventListener('click', () => {
    //         if (timerInterval) {
    //             return;
    //         }
    //
    //         startTimer();
    //         workSessionList.innerHTML = getLIElementsForWorkSessions(workSessions);
    //     });
    //
    //     document.getElementById('endButton').addEventListener('click', function () {
    //         endTimer();
    //         workSessionList.innerHTML = getLIElementsForWorkSessions(workSessions);
    //     });
    // } catch (e) {
    //     console.log('timerDisplay not found');
    // }
    //
    // function startTimer() {
    //     workSessions.push({
    //         start: new Date(),
    //         end: null,
    //         label: workSessionName.value ? workSessionName.value : 'Work Session',
    //     });
    //
    //     workSessionName.value = null;
    //
    //     timerInterval = setInterval(function () {
    //         timer++;
    //         timerDisplay.innerHTML = timer.toString();
    //     }, 1000);
    //
    //     console.log('START was clicked');
    // }
    //
    // function endTimer() {
    //     workSessions[workSessions.length - 1].end = new Date();
    //     clearInterval(timerInterval);
    //     timerInterval = null;
    //     console.log('END was clicked', workSessions);
    // }
    //
    // function getLIElementsForWorkSessions(_workSessions) {
    //     const reversedWorkSessions = [..._workSessions].reverse();
    //     return reversedWorkSessions.map(function (workSession) {
    //         return `<li>${workSession.label} - ${formatDateToHoursAndMinutes(workSession.start)} - ${formatDateToHoursAndMinutes(workSession.end)}</li>`;
    //     }).join('');
    // }
    //
    // function formatDateToHoursAndMinutes(date) {
    //     if (!date) {
    //         return '⏱️';
    //     }
    //
    //     return `${date.getHours()}:${date.getMinutes()}`;
    // }

</script>

<section id="content">
    <Title title="TIMESHEET"/>

    <div>
        <p>Work Sessions Recorder</p>
        <section id="buzzers">
            <button id="startButton" class="buzzer start">START</button>
            <button id="endButton" class="buzzer end">END</button>
        </section>

        <input id="workSessionName" aria-label=""/>

        <div id="timerDisplay"></div>

        <section>
            <ul id="workSessionList"></ul>
        </section>

    </div>
</section>

<style>
    #content {
        width: 50vw;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: center;
        height: 100%;
        gap: 16px;
    }

    .buzzer {
        height: 100px;
        width: 100px;
        border-radius: 16px;
        padding: 8px;
        margin: 4px;
    }

    .start:hover {
        background-color: #a6e186;
        cursor: pointer;
    }

    .end:hover {
        background-color: #e18686;
        cursor: pointer;
    }

    #timerDisplay {
        font-size: 48px;
        font-weight: bold;
        margin: 8px;
    }

    #buzzers {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: space-evenly;
    }

</style>
