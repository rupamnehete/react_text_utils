import React, { useState } from 'react'


export default function TextForm(props) {
    const handleUpClick = () => {
        let newText = text.toUpperCase()
        setText(newText)
    }

    const handleLowerClick = () => {
        let newText = text.toLowerCase()
        setText(newText)
    }

    const handleClearClick = () => {
        let newText = ''
        setText(newText)
    }

    const handleTitleCaseClick = () => {
        let newText = text.toLowerCase().split(" ").reduce((s, c) =>
            s + "" + (c.charAt(0).toUpperCase() + c.slice(1) + " "), '');
        setText(newText)
    }

    const handleCopyClick = () => {
        const element = document.querySelector('#myBox');
        console.log(element)
        element.select();
        element.setSelectionRange(0, 99999);
        document.execCommand('copy');
        alert('Text copied')
    }

    const handleOnChange = (event) => {
        setText(event.target.value)
    }


    const HandleReverseString = () => {
        let newText = text.split("").reverse().join("");
        setText(newText)
    }

    const downloadTxtFile = () => {
        let newText = text.toLowerCase()
        setText(newText)
        console.log('newText', newText);
        // text content
        const texts = [newText];
        console.log('texts', texts);
        // file object
        const file = new Blob(texts, { type: 'text/plain' });
        // anchor link
        const element = document.createElement("a");
        element.href = URL.createObjectURL(file);
        element.download = "TextUtils_" + Date.now() + ".txt";
        // simulate link click
        document.body.appendChild(element); // Required for this to work in FireFox
        element.click();
    }

    const googleTranslateElementInit = () => {
        new window.google.translate.TranslateElement({ pageLanguage: 'en' }, 'google_translate_element');
    }

    const [text, setText] = useState('');
    // setText = 'abcd'
    return (
        <>
            <div className="container" style={{ color: props.mode === 'dark' ? 'white' : '#06234d' }}>
                <div className="mb-3">
                    <h1>{props.heading}</h1>
                    <textarea className="form-control" id="myBox" placeholder="Enter Text Here" value={text}
                        onChange={handleOnChange} rows="10"
                        style={{
                            backgroundColor: props.mode === 'dark' ? '#7b99c5' : 'white',
                            color: props.mode === 'dark' ? 'white' : '#06234d'
                        }}></textarea>
                </div>
                <button className="btn btn-primary" onClick={handleUpClick}>Convert To UpperCase</button>
                <button className="btn btn-primary mx-2" onClick={handleLowerClick}>Convert To LowerCase</button>
                <button className="btn btn-primary mx-2" onClick={handleTitleCaseClick}>Convert To TitleCase</button>
                <button className="btn btn-primary mx-2" onClick={handleClearClick}>Clear</button>
                <button className="btn btn-primary mx-2" onClick={handleCopyClick}>Copy</button>
                <button className="btn btn-primary mx-2" id="downloadBtn" onClick={downloadTxtFile} value="download">Download</button>
                <button className="btn btn-primary mx-2" onClick={HandleReverseString} value="download">Inverse Case</button>
                <button className="btn btn-primary mx-2" onClick={googleTranslateElementInit} value="download">Translate</button>
            </div>
            <div className="container my-3" style={{ color: props.mode === 'dark' ? 'white' : '#06234d' }}>
                <h3>Your Text Summary</h3>
                <p>{text.split(" ").length} words {text.length} characters</p>
                <p>{0.008 * text.split(" ").length} Minutes read</p>
                <h2>Preview</h2>
                <p>{text.length > 0 ? text : "Enter something in above textbox to preview here"}</p>
                <div id="google_translate_element"></div>
            </div>
        </>
    )
}
