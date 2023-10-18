import React, { useState } from 'react'


export default function TextForm(props) {
    const handleUpClick = () => {
        console.log('uppercase was clicked');
        let newText = text.toUpperCase()
        setText(newText)
    }

    const handleOnChange = (event) => {
        console.log('uppercase was clicked')
        setText(event.target.value)
    }

    const [text, setText] = useState('Enter Text Here');
    // setText = 'abcd'
    return (
        <div>
            <div className="mb-3">
                <h1>{props.heading}</h1>
                <textarea className="form-control" id="myBox" placeholder={text} value={text}
                    onChange={handleOnChange} rows="10"></textarea>
            </div>
            <button className="btn btn primary" onClick={handleUpClick}>Convert To UpperCase</button>
        </div>
    )
}
