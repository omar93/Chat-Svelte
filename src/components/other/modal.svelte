<script>
    export let showModal = true
</script>

{#if showModal}
    <div class="modelContainer" on:click|self={() => showModal = false}>
        <div class="signinContainer">
            <slot></slot>
        </div>
    </div>
{/if}

<style>
    .modelContainer {
        position: absolute;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.479);
    }
    .signinContainer {
        width: 50%;
        height: 50%;
        margin: auto;
        margin-top: 10%;
        border-radius: 1em;
        padding: 1em;
        background-color: white;
    }
</style>