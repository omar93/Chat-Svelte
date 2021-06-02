<script>
	import MessageList from './components/messages/messageList.svelte'
	import Form from './components/input/form.svelte'
	import List from './components/other/list.svelte'
</script>

<div class="grandParent">
	<div class="listContainer">
		<List></List>
	</div>
	<div class="messageContainer">
		<MessageList></MessageList>
	</div>
	<div class="formContainer">
		<Form></Form>
	</div>
</div>

<style>
	.grandParent {
		display: grid;
		width: 100%;
		height: 100%;
		grid-template-columns: 200px 1fr;
		grid-template-rows: 1fr 50px;
		grid-template-areas: 
		'list main'
		'list form';
	}
	.listContainer {
		grid-area: list;
		border-right: 1px solid #272626e5;
	}
	.messageContainer {
		grid-area: main;
		overflow: scroll;
		overflow-x: hidden;
		-ms-overflow-style: none;
		scrollbar-width: none;
	}

	.messageContainer::-webkit-scrollbar {
    	display: none;
	}
	.messageContainer {
		grid-area: main;
	}
	.formContainer {
		grid-area: form;
		border-top: black 1px solid;
	}
</style>