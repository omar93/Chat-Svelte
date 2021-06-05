<script>
    import { idStore } from '../../stores/idStore'
    export let message = 'Default message', name = 'User', userID = 33
    let isFromMe
    idStore.subscribe(data => data === userID ? isFromMe = true : false)
</script>

<div class="{isFromMe ? 'me' : 'them'} messageContainer">
    {#if !isFromMe}
        <img class="picture" src="./img/profile.png" alt="Profile">
    {/if}
    <div class="{isFromMe ? 'meRadius' : 'themRadius'} message-profile">
        {#if !isFromMe}
            <span class="name">{name}</span>
        {/if}
        <p class="message">{message}</p>
        <span class="time">18:14</span>
    </div>
</div>

<style>
    .messageContainer {
        max-width: 100%;
        display: flex;
        margin-top: 5px;
    }
    .me {
        justify-content: flex-end;
        margin-right: 25%;
        
    }
    .meRadius {border-top-left-radius: 1em;}
    
    .them {
        justify-content: flex-start;
        margin-left: 25%;
        
    }
    .themRadius {border-top-right-radius: 1em;}

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
        border-bottom-right-radius: 1em;
        border-bottom-left-radius: 1em;
        padding: 0.5em;
    }
    .message {
        max-width: 400px;
        height: auto;
        word-wrap: break-word;
    }
    .time {
        align-self: flex-end;
    }

    @media screen and (max-width: 992px) {
        .me {
        justify-content: flex-end;
        margin-right: 1%;
        
    }
    .meRadius {border-top-left-radius: 1em;}
    
    .them {
        justify-content: flex-start;
        margin-left: 1%;
        
    }

    .message {
        max-width: 150px;
        height: auto;
        word-wrap: break-word;
    }
}
</style>