import React, { Component } from 'react'
import { DragDropContextProvider } from 'react-dnd'
import HTML5Backend from 'react-dnd-html5-backend'
import Dustbin from './Dustbin'
import Box from './Box'

export default class Container extends Component {
  render() {
    return (
      <DragDropContextProvider backend={HTML5Backend}>
        <div>
          <div>
            <Dustbin allowedDropEffect="any" />
            {/*<Dustbin allowedDropEffect="copy" />
            <Dustbin allowedDropEffect="move" />*/}
          </div>
          <div style={{ display: 'flex' }}>
            <Box name="Header" />
            <Box name="Sidebar" />
            <Box name="Hero" />
          </div>
        </div>
      </DragDropContextProvider>
    )
  }
}