import React, { useState } from 'react'


export default function TextForm(props) {
    const handleUpClick = () => {
        let newText = text.toUpperCase()
        setText(newText);
        props.alert("Converted to Uppercase!", "success")
    }

    const handleLowerClick = () => {
        let newText = text.toLowerCase()
        setText(newText);
        props.alert("Converted to Lowercase!", "success")
    }

    const handleClearClick = () => {
        let newText = ''
        setText(newText);
        props.alert("Textbox clear!", "success")
    }

    const handleTitleCaseClick = () => {
        let newText = text.toLowerCase().split(" ").reduce((s, c) =>
            s + "" + (c.charAt(0).toUpperCase() + c.slice(1) + " "), '');
        setText(newText);
        props.alert("Converted to Titlecase!", "success");
    }

    const handleCapitalizeClick = () => {
        let newText = text.toLowerCase().split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
        setText(newText);
        props.alert("Converted to Titlecase!", "success");
    }

    const handleCopyClick = () => {
        const element = document.querySelector('#myBox');
        console.log(element)
        element.select();
        element.setSelectionRange(0, 99999);
        document.execCommand('copy');
        props.alert("Text Copied!", "success");
    }

    const handleOnChange = (event) => {
        setText(event.target.value)
    }
    const handleOnChange1 = (event) => {
        setText(event.target.value)
    }
    

    const HandleReverseString = () => {
        let newText = text.split("").reverse().join("");
        setText(newText);
        props.alert("Text Reversed !", "success");
    }

    const DashAddedInalphabets = () => {
        let newText = text.split("").join("-");
        setText(newText);
        props.alert("Line Added In Characters!", "success");
    }

    const DashAddedInWords = () => {
        let newText = text.split(" ").join("-");
        setText(newText);
        props.alert("Line Added In Words!", "success");
    }

    const handleRemoveExtraSpaceClick = () => {
        var regexPattern = /\s+/g;
        let newText = text.replace(regexPattern, " ");
        // let newText = text.split("").reverse().join("");
        setText(newText);
        props.alert("Extra Space Removed !", "success");
    }

    const handleRemoveSpaceClick = () => {
        let newText = text.split(" ").join("")
        setText(newText);
        props.alert("All Space Removed !", "success");
    }

    const downloadTxtFile = () => {
        let newText = text
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
        props.alert("Text Downloaded!", "success");
    }

    // const googleTranslateElementInit = () => {
    //     new window.google.translate.TranslateElement({ pageLanguage: 'en' }, 'google_translate_element');
    // }

    const [text, setText] = useState('');
    return (
        <>
            <div className="container" style={{ color: props.mode === 'info' ? 'white' : '#06234d' }}>
                <div className="mb-3">
                    <h2 className="text-center">{props.heading}</h2>
                    <textarea className="form-control" placeholder="Enter Text Here"
                        onChange={handleOnChange1} rows="10"
                        style={{
                            backgroundColor: props.mode === 'info' ? '#7b99c5' : 'white',
                            color: props.mode === 'info' ? 'white' : '#06234d'
                        }}></textarea>

                </div>
                <button className={`btn btn-${props.mode === 'info' ? 'info' : 'primary'}`} type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                    Convert to <span><i className="fa fa-caret-down" aria-hidden="true"></i></span>
                </button>
                <button className={`btn btn-${props.mode === 'info' ? 'info' : 'primary'} mx-2`} type="button"
                    data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false"
                    aria-controls="flush-collapseTwo">
                    Analyze <span><i className="fa fa-caret-down" aria-hidden="true"></i></span>
                </button>
                <button className={`btn btn-${props.mode === 'info' ? 'info' : 'primary'} mx-2`} id="downloadBtn" onClick={downloadTxtFile} value="download">Download Text</button>
                <button className={`btn btn-${props.mode === 'info' ? 'info' : 'primary'} mx-1`} onClick={handleCopyClick}>Copy</button>
                <button className={`btn btn-${props.mode === 'info' ? 'info' : 'primary'} mx-2`} onClick={handleClearClick}>Clear</button>
                <div id="flush-collapseOne" className="accordion-collapse collapse">
                    <div className="accordion-body">
                        <button className={`btn btn-${props.mode === 'info' ? 'info' : 'primary'} my-2`} onClick={handleUpClick}>Uppercase</button>
                        <button className={`btn btn-${props.mode === 'info' ? 'info' : 'primary'} mx-2`} onClick={handleLowerClick}>Lowercase</button>
                        <button className={`btn btn-${props.mode === 'info' ? 'info' : 'primary'} mx-2`} onClick={handleTitleCaseClick}>Titlecase</button>
                        <button className={`btn btn-${props.mode === 'info' ? 'info' : 'primary'} mx-2`} onClick={handleCapitalizeClick}>Capitalize</button>
                        <button className={`btn btn-${props.mode === 'info' ? 'info' : 'primary'} mx-2`} onClick={HandleReverseString}>Inverse Case</button>
                    </div>
                </div>
                <div id="flush-collapseTwo" className="accordion-collapse collapse">
                    <div className="accordion-body my-2">
                        <button className={`btn btn-${props.mode === 'info' ? 'info' : 'primary'}`} onClick={handleRemoveExtraSpaceClick}>Extra Space</button>
                        <button className={`btn btn-${props.mode === 'info' ? 'info' : 'primary'} mx-2`} onClick={handleRemoveSpaceClick}>Remove Space</button>
                        <button className={`btn btn-${props.mode === 'info' ? 'info' : 'primary'} mx-2`} onClick={DashAddedInWords}>Add Line in Words</button>
                        <button className={`btn btn-${props.mode === 'info' ? 'info' : 'primary'} mx-2`} onClick={DashAddedInalphabets}>Add Line in Characters</button>
                    </div>
                </div>
            </div>
            <div className="container my-4" style={{ color: props.mode === 'info' ? 'white' : '#06234d' }}>
                <h3><b>Text Summary</b></h3>
                <p>{text.length > 0 ? text.split(" ").length : 0} words {text.length} characters</p>
                <p>{text.length > 0 ? 0.008 * text.split(" ").length : 0} Minutes read</p>
                <h4 className="text-center"><b>Preview</b></h4>
                <textarea className="form-control" id="myBox" placeholder="Enter Text Here"
                    value={text.length > 0 ? text : "Enter something to preview here"}
                    onChange={handleOnChange} rows="10" readOnly
                    style={{
                        backgroundColor: props.mode === 'info' ? '#7b99c5' : '#c2c8d1',
                        color: props.mode === 'info' ? 'white' : '#06234d',
                    }}></textarea>
                {/* <div id="google_translate_element"></div> */}
            </div>
        </>
    )
}
