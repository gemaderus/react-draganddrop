import React, { Component } from 'react'
import { DragDropContextProvider } from 'react-dnd'
import HTML5Backend from 'react-dnd-html5-backend'
import Dustbin from './Dustbin'
import Box from './Box'

import Header from './Header'

const Catalog = {
  header: Header
}

export default class Container extends Component {
  state = {
    components: []
  }

  onDropComponent = (component) => {
    this.setState(state => {
      return {
        ...state,
        components: state.components.concat([component])
      }
    })
  }

  render() {
    const {components} = this.state

    return (
      <DragDropContextProvider backend={HTML5Backend}>
        <div>
          <div>
            <Dustbin allowedDropEffect="any">
              {components.map((c, index) => {
                const Component = Catalog[c]
                return <Component key={`${c}${index}`}/>
              }
              )}
            </Dustbin>

            {/*<Dustbin allowedDropEffect="copy" />
            <Dustbin allowedDropEffect="move" />*/}
          </div>
          <div style={{ display: 'flex' }}>
            <Box key="Header" name="header" onDropComponent={this.onDropComponent}/>
            <Box key="Sidebar" name="Sidebar" onDropComponent={this.onDropComponent}/>
            <Box key="Hero" name="Hero" onDropComponent={this.onDropComponent}/>
          </div>
        </div>
      </DragDropContextProvider>
    )
  }
}