import React, { useRef } from "react"
import Popup from "./components/popup";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc } from "firebase/firestore";
import TextField from '@mui/material/TextField';
import contactimage from "./contact.png"



// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBOwuv5ehR_BbnZOny04KxvdvWg-aWA85g",
  authDomain: "logilynx-db.firebaseapp.com",
  projectId: "logilynx-db",
  storageBucket: "logilynx-db.appspot.com",
  messagingSenderId: "591850159988",
  appId: "1:591850159988:web:d583d9f5252918fdb83621"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app)
const collectionRef = collection(db, 'formMessages')

export default function Contact () {
    const [msgDone, setMsgDone] = React.useState(false)
    const emailInput = useRef()
    const nameInput = useRef()
    const messageInput = useRef()
    const currentDate = new Date()

    function clearFields () {
        nameInput.current.value = ''
        emailInput.current.value = ''
        messageInput.current.value = ''
    }
    function handleSubmit (event) {
        event.preventDefault()
        const data = {name: nameInput.current.value, 
                    email: emailInput.current.value, 
                    message:messageInput.current.value,
                date: currentDate}

        addDoc(collectionRef, data)
        .then( (docRef) => {
            console.log("message sent successfully")
            setMsgDone(true)
            clearFields()
        })
        .catch((error) => {
            console.error ('error', error)
        })
        
        
    }

    return (
        <div className="contactus-container contact-us-mobile">
            <div className="lynx-img">
                <img src={contactimage} alt=""></img>
            </div>

            <div className="contact-form contact-form-mobile">
            <form onSubmit={handleSubmit}>
                <TextField id="outlined-basic" label="Full Name" variant="outlined" type="text" required inputRef={nameInput}/>
                <TextField id="outlined-basic" label="Email" variant="outlined" type="email" required inputRef={emailInput}/>
                <TextField id="outlined-basic" label="Message" variant="outlined" type="text" required multiline inputRef={messageInput}/>
                
                <div className="form-btns form-btns-mobile">
                    <button className="btn-submit btn-submit-mobile" type="submit">Submit</button>
                    <button onClick={clearFields} className="btn-reset btn-reset-mobile" type="reset">Reset</button>
                </div>

            </form>


            </div>
            {msgDone ? <Popup /> : null}
        </div>
    )
}