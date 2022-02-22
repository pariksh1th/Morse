import React, { useState } from 'react'
import FlexItem from './FlexItem'
import codes from './codes'


export default function App(props) {


  var [massage, setMassage] = useState("")
  var [code, setCode] = useState("")
  var word_chars = Array.from(massage)

  function copyFunction() {
    /* Get the text field */
    var copyText = code

    /* Select the text field */

    /* Copy the text inside the text field */
    navigator.clipboard.writeText(copyText);

    /* Alert the copied text */
    alert("Copied the text: " + copyText);
  }

  function traslate() {
    var morseCode = ""
    for (let ch in word_chars) {
      console.log(word_chars)
      if (ch in codes) {
        morseCode += codes[ch] + " "
      }
    }
    // var morseCode = word_chars.reduce(function (acu, char) {
    //   return acu += codes[char]
    // })

    console.log("mor " + morseCode)
    setCode(morseCode)
  }


  return (
    <div className='app'>
      <h1>Morse Coder</h1>

      <div className='flex-box'>
        <FlexItem key="1" h3="massage" translate={traslate} set={setMassage} val={massage} placehold="Enter the massage here......." />
        <FlexItem key="2" h3="code" id="code-box" translate={traslate} val={code} set={setCode} placehold="Copy code........" />

        <button className='copy-btn normal' onClick={() => {
          copyFunction()
        }} >Copy</button>
      </div></div>
  )
}
