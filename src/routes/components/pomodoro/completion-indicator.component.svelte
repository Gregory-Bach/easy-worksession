<script lang="ts">

    export let state: string;

</script>

<div id="completion-indicator" class="completion-indicator {state  || 'pending'}">

</div>

<style>
    .completion-indicator {
        height: 40vh;
        width: 90%;
        border-radius: 1rem;
        padding: 1rem;
    }

    .pending {
        background-color: #f6f6f6;
    }

    .running {
        background-color: rgba(48, 116, 255, 0.72);
        -webkit-animation: breathing 9s ease-out infinite normal;
    }

    .ending {
        background-color: orange;
        -webkit-animation: breathing 6s ease-out infinite normal;
    }

    .resting {
        background-color: palegreen;
        -webkit-animation: breathing 10s ease-out infinite normal;
    }


    @-webkit-keyframes breathing {
        0% {
            -webkit-transform: scale(0.97);
            transform: scale(0.97);
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
            -webkit-transform: scale(0.97);
            transform: scale(0.97);
        }
    }

    @keyframes breathing {
        0% {
            -webkit-transform: scale(0.97);
            -ms-transform: scale(0.97);
            transform: scale(0.97);
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
            -webkit-transform: scale(0.97);
            -ms-transform: scale(0.97);
            transform: scale(0.97);
        }
    }
</style>