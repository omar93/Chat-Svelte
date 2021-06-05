<script>
import Message from './message.svelte'
import { messageStore } from '../../stores/messageStore'
import dbhandler from '../../firebase/firebaseDB'

let messages = []
const db = new dbhandler()

messageStore.subscribe(data => {
    const newData = data.map(index => {
        return { name:index.name, message: index.message, userID: index.userID, photoUrl: index.photoUrl }
    })
    messages = newData
    console.log(messages)
})
</script>

<div class="listContainer">
    {#each messages as message}
        <Message {...message}></Message>
    {/each}
</div>

<style>
    .listContainer {
        width: 100%;
        height: 100%;
    }
</style>