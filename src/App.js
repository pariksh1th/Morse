import React, { Component } from 'react'
import FlexItem from './FlexItem'

export class App extends Component {
  render() {
    return (
      <div className='app'>
        <h1>Morse Coder</h1>

        <div className='flex-box'>
          <FlexItem h3="massage" placer="Enter the massage here......." />
          <FlexItem h3="code" placer="Copy code......." />
          <button className='copy-btn normal'>Copy</button>
        </div></div>
    )
  }
}

export default App