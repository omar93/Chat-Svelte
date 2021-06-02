<script>
    import { nameStore } from '../../stores/nameStore'

    let name

    const handleSubmit = e => {
        e.preventDefault()
        nameStore.set(name)
        name = ''
    }

    nameStore.subscribe(data => name = data)
</script>

<form on:submit={handleSubmit}>
    <input type="text" bind:value={name} placeholder="{name}">
</form>

<style>
</style>