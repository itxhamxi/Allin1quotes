import React from 'react'


function Mainarea() {
    
    function copyText() {
        var text=document.getElementById('quote');
        
        document.execCommand("copy");
      }
    return (
        <div className="container-fluid main-content " >
            <div className="container">
            <div className="row">
                <div className="col-md-4">
                   <div className="box">
                       <p id="quote">“I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best.”</p>
                      <button type="button" class="btn btn-outline-success">Copy</button>
                   </div>
                </div>
                <div className="col-md-4">
                <div className="box">
                       <p id="quote">“I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best.”</p>
                      <button onClick={copyText()} type="button" class="btn btn-outline-success">Copy</button>
                   </div>
                </div>
                <div className="col-md-4">
                <div className="box">
                       <p id="quote">“I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best.”</p>
                      <button type="button" class="btn btn-outline-success">Copy</button>
                   </div>
                </div>

            </div>
            <div className="row">
                <div className="col-md-4">
                   <div className="box">
                       <p id="quote">“I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best.”</p>
                      <button type="button" class="btn btn-outline-success">Copy</button>
                   </div>
                </div>
                <div className="col-md-4">
                <div className="box">
                       <p id="quote">“I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best.”</p>
                      <button onClick={copyText()} type="button" class="btn btn-outline-success">Copy</button>
                   </div>
                </div>
                <div className="col-md-4">
                <div className="box">
                       <p id="quote">“I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best.”</p>
                      <button type="button" class="btn btn-outline-success">Copy</button>
                   </div>
                </div>

            </div>
            <div className="row">
                <div className="col-md-4">
                   <div className="box">
                       <p id="quote">“I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best.”</p>
                      <button type="button" class="btn btn-outline-success">Copy</button>
                   </div>
                </div>
                <div className="col-md-4">
                <div className="box">
                       <p id="quote">“I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best.”</p>
                      <button onClick={copyText()} type="button" class="btn btn-outline-success">Copy</button>
                   </div>
                </div>
                <div className="col-md-4">
                <div className="box">
                       <p id="quote">“I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best.”</p>
                      <button type="button" class="btn btn-outline-success">Copy</button>
                   </div>
                </div>

            </div>
            
            </div>
        </div>
    )
}

export default Mainarea
