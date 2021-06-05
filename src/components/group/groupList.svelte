<script>
    import NameForm from '../input/nameForm.svelte'
    import Group from './group.svelte'
    import { groupStore } from '../../stores/groupStore'

    let groups = []

    groupStore.subscribe(data => groups = data)
</script>

<div class="parentContainer">
    {#each groups as group}
        <Group {...group}></Group>
    {/each}
    <NameForm></NameForm>
    <button class="newGroup">+</button>
</div>

<style>
    .parentContainer {
        width: 100%;
        display: flex;
        flex-direction: column;
    }

    .newGroup:hover{cursor: pointer;}
    .newGroup {
        width: 70px;
        height: 70px;
        border-radius: 100%;
        border: none;
        justify-self: flex-end;
        align-self: flex-end;
        margin: auto;
        margin-top: 100%;
    }
</style>