<script>
import Message from './message.svelte'
import { messageStore } from '../../stores/messageStore'

let messages = []

messageStore.subscribe(data => messages = data)
</script>

<div class="listContainer">
    {#each messages as message}
        <Message {...message}></Message>
    {/each}
</div>

<style>
    .listContainer {
        width: 100%;
        height: 100%;;
    }
</style>