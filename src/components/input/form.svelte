<script>
    import { nameStore } from '../../stores/nameStore'
    import { idStore } from '../../stores/idStore'
    import dbHandler from '../../firebase/firebaseDB'

    let message,user,name
    let messages = []
    let db = new dbHandler()

    nameStore.subscribe(data => name = data)
    idStore.subscribe(data => user = data)

    const handleSubmit = e => {
        e.preventDefault()
        db.addNewMessage(user,message,name)
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