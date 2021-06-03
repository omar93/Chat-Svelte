<script>
    export let groupName = 'swag', inviteID = '123abc'
</script>

<div class="groupContainer">

    <div class="imgContainer">
        <img class="img" src="./img/avengers.jpg" alt="group">
    </div>

    <div class="textContainer">
        <span class="name">{groupName}</span>
        <div class="inviteContainer">
            <span class="invite">{inviteID}</span>
            <img class="copy" src="./img/copy.png" alt="copy">
        </div>
    </div>

</div>

<style>
    .groupContainer {
        border: 1px solid black;
        display: grid;
        height: 100px;
        widows: 100%;
        grid-template-columns: 60px 1fr;
        grid-template-areas: 
        'img text';
        background-image: url("../img/grass.jpg");
    }

    .imgContainer {
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .img{
        width: 50px;
        height: 50px;
        border-radius: 100%;
    }

    .textContainer {
        grid-area: text;
        display: grid;
        margin-top: 10%;
        width: 100%;
        grid-template-rows: 1fr 1fr;
        grid-template-areas: 
        'name'
        'inviteContainer';
    }

    .name {grid-area: name;}

    .inviteContainer {
        grid-area: inviteContainer;
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    .copy {
        width: 30px;
        height: 30px;
    }

    .copy:hover {
        cursor: pointer;
    }
</style>