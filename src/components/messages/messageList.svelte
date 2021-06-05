<script>
import Message from './message.svelte'
import { messageStore } from '../../stores/messageStore'
import dbhandler from '../../firebase/firebaseDB'

let messages = []
const db = new dbhandler()

messageStore.subscribe(data => {
    console.log('store updated från list')
    console.log(data)
    const newData = data.map(index => {
        return { name:index.message, message: index.message, userID: index.userID }
    })
    messages = newData
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