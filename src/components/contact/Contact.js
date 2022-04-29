import React,{useRef} from 'react'
import emailjs from '@emailjs/browser';
export default function Contact(props){
    
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_8a5yclb', 'template_81omd2m', form.current, 'XcO_O16hUDtl0HP-v')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
    };

    return(
        <div className='contact'>   
            
            <form ref={form} onSubmit={sendEmail}>
                <label>Name<input type="text" name="user_name" /></label>
                
                <label>Email<input type="email" name="user_email" /></label>
                
                <label>Message<textarea name="message" /></label>
                
                <input type="submit" value="Send" />
            </form>
        </div>
    )
}