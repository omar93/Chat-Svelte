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
</div>

<style>
    .parentContainer {
        width: 100%;
        display: flex;
        flex-direction: column;
    }
</style>