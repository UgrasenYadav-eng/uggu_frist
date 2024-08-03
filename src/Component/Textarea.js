import React, {useState} from 'react'


export default function Textarea(props) {
    const handleUpClick=()=> {
        console.log ("Upper Case was click + Text");
        setText("You have ckicked on handleUpClick")
        
    }

    const handleOnChange=()=> {
        console.log ("onChange");
        setText(event.target.value)
       
    }

   const [Text, setText]= useState('Enter text here'); 
// text = "new text";  wrong way to set the text.
//setText("new text")
    
    return (
    
        <div>

                    <h1> {props.heading}  </h1>

                    

                    <textarea id="Text" className="Text" rows="10" cols="150" value={Text} onChange={handleOnChange}>
                   
                    </textarea>

                    <div>
                         <button className='btn btn-primary' onClick={handleUpClick}> Convert to upper case </button>
                    </div>
        </div>
    )
}
