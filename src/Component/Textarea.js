import React from 'react'

export default function Textarea(props) {
    return (
        <div>

                    <h1> {props.heading} </h1>

                    <p><label htmlFor="Text">Textbox:</label></p>

                    <textarea id="Text" name="Text" rows="10" cols="150">
                   Text here...
                    </textarea>

                    <div>
                         <button className='btn btn-primary'> Convert to upper case </button>
                    </div>
        </div>
    )
}
