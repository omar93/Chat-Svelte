<script>
	// Firebase
	import firebase from 'firebase/app'
	import './firebase/firebaseInit'
	import 'firebase/auth'

	// Components
	import MessageList from './components/messages/messageList.svelte'
	import Form from './components/input/form.svelte'
	import List from './components/group/groupList.svelte'
	import Modal from './components/other/modal.svelte'
	import GoogleButton from './components/other/googleButton.svelte'

	// Stores
	import { idStore } from './stores/idStore'
	import { messageStore } from './stores/messageStore'
	
	firebase.auth().onAuthStateChanged(async Currentuser => {
		if (Currentuser) {
			idStore.set(Currentuser.uid)
			messageStore.set([])
			console.log('store updated från FIRESTORE')
			let messages = []
			firebase.firestore().collection('groups').doc('group1').collection('messages')
			.orderBy('created').onSnapshot(snapshot => {
				snapshot.forEach(doc => {
					messages = [...messages, doc.data()]
				})
				messageStore.set(messages)
			})
		} else {
			console.log('You are offline, no syncing availabe')
		}
    })

	let showModal = false
</script>

<Modal bind:showModal>
<GoogleButton></GoogleButton>
</Modal>
<div class="grandParent">
	<div class="listContainer">
		<List></List>
		<button on:click={(() => showModal = true)}>ShowModal</button>
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
		grid-template-columns: 250px 1fr;
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
		width: 100%;
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

	@media screen and (max-width: 992px) {
	.grandParent {
		display: grid;
		width: 100%;
		height: 100%;
		grid-template-columns: 1fr;
		grid-template-rows: 1fr 50px;
		grid-template-areas: 
		'main'
		'form';
	}
	.listContainer {display: none;}
}
</style>