import React, {useState} from 'react'


export default function Textarea(props) {
    
        const handleSentenceClick = () => {
            console.log("Sentence Case was clicked + text");
            let newtext = text.toLowerCase().split('. ').map(sentence => {
                return sentence.charAt(0).toUpperCase() + sentence.slice(1);
            }).join('. ');
            setText(newtext);
        };
        const handleUpClick=()=> {
        console.log ("Upper Case was click + text");
            let newtext = text.toUpperCase();
        setText(newtext);
        
    };
    const handleloClick=()=> {
        console.log ("Upper Case was click + text");
            let newtext = text.toLowerCase();
        setText(newtext);
        
    };
    const handleAlternatingClick = () => {
        console.log("Alternating Case was clicked + text");
        let newtext = text.split('').map((char, index) => {
            return index % 2 === 0 ? char.toUpperCase() : char.toLowerCase();
        }).join('');
        setText(newtext);
    };

    const handleInversrClick = () => {
        console.log("Inverse Case was clicked + text");
        let newtext = text.split('').map(char => {
            if (char === char.toUpperCase()) {
                return char.toLowerCase();
            } else {
                return char.toUpperCase();
            }
        }).join('');
        setText(newtext);
    };
    //ok

    const handleCapitalizeClick = () => {
        console.log("Capitalize Case was clicked + text");
        let newtext = text.toLowerCase().split(' ').map(word => {
            return word.charAt(0).toUpperCase() + word.slice(1);
        }).join(' ');
        setText(newtext);
    };

    const handleclearClick=()=> {
        console.log ("Clear was clicked + text");
        setText("");        
    }
    const handlecopyClick=()=> {
        console.log ("Copy was clicked + text");
        navigator.clipboard.writeText(text);        
    }
    //Paste
    const handlePasteClick=()=> {
        console.log ("Paste was clicked + text");
        navigator.clipboard.writeText(text);        
    }

    const handleOnChange=(event)=> {
        //console.log ("onChange");
        setText(event.target.value)
       
    }

   const [text, setText]= useState('Enter text'); 
// text = "new text";  wrong way to set the text.
//settext("new text")
    
    return (
    <>
        
                    <h1 mx-5> {props.heading} </h1>

                    

                    <textarea id="text" className="text" rows="10" cols="150" value={text} onChange={handleOnChange}>
                   
                    </textarea>

                    <div>
                            <button className='btn btn-primary mx-2 my-2' onClick={handleSentenceClick} > Sentance Case </button>

                            <button className='btn btn-primary mx-2' onClick={handleUpClick} my-2> Upper case </button>
                    
                            <button className='btn btn-primary mx-2' onClick={handleloClick}> Lower case </button>

                            <button className='btn btn-primary mx-2' onClick={handleCapitalizeClick}> Capitalized case </button>
                    
                            <button className='btn btn-primary mx-2' onClick={handleAlternatingClick}> aLtErNaTiNg case </button>

                            <button className='btn btn-primary mx-2' onClick={handleInversrClick}> Inverse case </button>
                    
                            <button className='btn btn-primary mx-2' onClick={handleclearClick}> Clear </button>
                            
                            <button className='btn btn-primary mx-2' onClick={handlecopyClick}> Copy </button>

                            <button className='btn btn-primary mx-2' onClick={handlePasteClick}> Paste </button>
                        
                    </div>
                    <p></p><p></p>
        <div className='container My-5'>
            <h1> Summary of the text </h1>
            <p> Number of character {text.length} and you can read this in- {0.0075 * text.length} minutes </p> 
            <p> Number of words {text.split(" ").length}</p>
            <p> Number of sentance 23     </p>
            <p> Number of lines 6         </p>

            <h3> Preview</h3>
            <p> {text.slice(" ")} </p>
            <div></div>
            <div></div>
            <p>.</p>
            <div></div>
            <p>***^***^***^***^***^***^***^***^***^***^***^***^***^***^***^***^***^***^***^***^***^***^***^***^***^***^***^***^***^***^***^***^***^***^***^***</p>
            <div></div>
        </div>
    </>
    )
}
