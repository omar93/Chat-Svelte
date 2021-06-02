<script>
    export let message = 'Default message', name = 'User'
</script>

<div class="messageContainer">
    <img class="picture" src="./img/profile.png" alt="Profile">
    <div class="message-profile">
        <span class="name">{name}</span>
        <p class="message">{message}</p>
        <span class="time">18:14</span>
    </div>
</div>

<style>
    .messageContainer {
        max-width: 500px;
        display: flex;
        justify-content: flex-start;
        
    }
    .picture {
        grid-area: img;
        width: 50px;
        height: 50px;
        border-radius: 100%;
    }
    .message-profile {
        display: flex;
        flex-direction: column;
        border: 1px solid black;
        border-top-right-radius: 1em;
        border-bottom-right-radius: 1em;
        border-bottom-left-radius: 1em;
        padding: 0.5em;
    }
    .message {
        max-width: 430px;
        height: auto;
        word-wrap: break-word;
    }
    .time {
        align-self: flex-end;
    }
</style>