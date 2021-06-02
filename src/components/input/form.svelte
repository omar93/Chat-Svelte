<script>
    import { messageStore } from '../../stores/messageStore'
    import { nameStore } from '../../stores/nameStore'

    let message, name
    let messages = []

    messageStore.subscribe(data => messages = data)
    nameStore.subscribe(data => name = data)

    const handleSubmit = e => {
        e.preventDefault()
        messages = [...messages, {'name':name, 'message': message}]
        messageStore.set(messages)
        message = ''
    }

</script>

<div class="formContainer">
    <form on:submit={handleSubmit}>
        <input type="text" placeholder="New message" bind:value={message}>
    </form>
</div>



<style>
    form {
        width: 99%;
        margin: auto;
    }
    input[type=text] {
        height: 47px;
        width: 100%;
        border: none;
        top: 0;
    }
    input[type=text]:focus {
        outline-width: 0;
    }
</style>