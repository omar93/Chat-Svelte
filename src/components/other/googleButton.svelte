<script>
    import firebase from 'firebase/app'
	import 'firebase/auth'

    const handleSignin = () => {
        firebase.auth().signInWithPopup(new firebase.auth.GoogleAuthProvider())
        .then()
        .catch(error => console.error(error))
    }

    const handleSignout = () => {
        firebase.auth().signOut()
        .then()
        .catch(error => console.error(error))
    }
    
</script>

<div class="buttonContainer" on:click={handleSignin}>
    Google Signin
</div>
<div class="buttonContainer" on:click={handleSignout}>
    Logout
</div>

<style>
    div {
        border: 1px solid black;
    }
</style>