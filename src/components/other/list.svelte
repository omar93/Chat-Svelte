<script>
    import NameForm from '../input/nameForm.svelte'
</script>

<div class="parentContainer">
    <div class="listContainer">
        <p>tja 1</p>
    </div>
    <div class="listContainer">
        <p>tja 2</p>
    </div>
    <div class="listContainer">
        <p>tja 3</p>
    </div>
    <NameForm></NameForm>
</div>

<style>
    .listContainer {
        display: flex;
        border: 1px solid burlywood;
        width: 100%;
        justify-content: center;
        align-items: center;
    }
</style>