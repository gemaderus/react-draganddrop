import React, { Component } from 'react'
import { DragDropContextProvider } from 'react-dnd'
import HTML5Backend from 'react-dnd-html5-backend'
import Dustbin from './Dustbin'
import Box from './Box'
import Header from './Header'
import Hero from './Hero'
import Footer from './Footer'

const Catalog = {
  header: Header,
  hero: Hero,
  footer: Footer
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
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <div>
            <Box key="Header" name="header" onDropComponent={this.onDropComponent} />
            <Box key="Hero" name="hero" onDropComponent={this.onDropComponent} />
            <Box key="Footer" name="footer" onDropComponent={this.onDropComponent} />
          </div>
          <div style={{ width: '70%' }}>
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
        </div>
      </DragDropContextProvider>
    )
  }
}