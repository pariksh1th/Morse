import React, { useState } from 'react'
import FlexItem from './FlexItem'
import codes from './codes'


export default function App() {


  var [massage, setMassage] = useState("")
  var [code, setCode] = useState("")
  var word_chars = massage.split("")

  function traslate() {

    var morseCode = ""
    for (let ch in word_chars) {
      morseCode += codes[ch] + " "
    }
    setCode(morseCode)
  }


  return (
    <div className='app'>
      <h1>Morse Coder</h1>

      <div className='flex-box'>
        <FlexItem key="1" h3="massage" translate={traslate} set={setMassage} val={massage} placehold="Enter the massage here......." />
        <FlexItem key="2" h3="code" id="code-box" translate={traslate} val={code} set={setCode} placehold="Copy code........" />

        <button className='copy-btn normal' >Copy</button>
      </div></div>
  )
}
