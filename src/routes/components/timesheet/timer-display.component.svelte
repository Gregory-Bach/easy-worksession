<script lang="ts">
    import {timesheetEllapsedTime} from "../../../stores/store.js";
</script>

<div class="timerDisplay">{Math.floor($timesheetEllapsedTime / 60)} mn {$timesheetEllapsedTime % 60 || 0 } s
</div>

<style>
    .timerDisplay {
        width: 100%;
        font-size: 2rem;
        font-weight: bold;
        color: #6ed9b5;
    }
</style>
