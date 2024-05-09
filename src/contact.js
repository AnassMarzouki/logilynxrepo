import TextField from '@mui/material/TextField';

export default function Contact () {
    return (
        <div className="contactus-container">
            <div className="lynx-img">

            </div>

            <div className="contact-form">
                <form name="contact" method="POST" data-netlify="true">
                    <label>Full name</label>
                    <input type="text"></input>

                    <TextField id="outlined-basic" label="Name" variant="outlined" type="text" required/>
                    <TextField id="outlined-basic" label="Email" variant="outlined" type="email" required/>
                    <button type="submit">Submit</button>

                </form>
            </div>
        </div>
    )
}