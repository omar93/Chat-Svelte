import firebase from 'firebase/app'
import "firebase/firestore"
import { messageStore } from '../stores/messageStore'

const db = firebase.firestore()

export default class dbhandler {
    
    async getMessages() {
        let messages = []
        let MessagesRef = db.collection('groups').doc('group1').collection('messages')
        await MessagesRef.orderBy('date').get().then(snapshot => {
            snapshot.forEach(doc => {
                messages = [...messages, doc.data()]
            })
        })
        console.log(messages)
        return messages
    }
    addNewMessage(userID, message,name) {
        let messageRef = db.collection('groups').doc('group1').collection('messages')
        messageRef.add({
            userID,
            message,
            name,
            created: firebase.firestore.Timestamp.fromDate(new Date())
        })
    }

}