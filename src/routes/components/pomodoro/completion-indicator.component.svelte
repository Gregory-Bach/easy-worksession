<script lang="ts">

export let state: string;

</script>

<div id="completion-indicator" class="completion-indicator {state  || 'pending'}">

</div>

<style>
    .completion-indicator {
        height: 40vh;
        width: 100%;
        border-radius: 1rem;
    }

    .pending {
        background-color: #f6f6f6;
    }

    .running {
        background-color: rgba(48, 116, 255, 0.72);
    }

    .ending {
        background-color: orange;
    }

    .resting {
        background-color: palegreen;
    }
</style>