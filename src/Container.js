import React, { Component } from 'react'
import { DragDropContextProvider } from 'react-dnd'
import HTML5Backend from 'react-dnd-html5-backend'
import Dustbin from './Dustbin'
import Box from './Box'
import Header from './Header'
import Hero from './Hero'
import Footer from './Footer'
import Action from './Action'

const Catalog = {
  header: Header,
  hero: Hero,
  footer: Footer
}

export default class Container extends Component {
  state = {
    components: [],
    current: null,
    type: null,
    styles: null
  }

  onDropComponent = (component) => {
    this.setState(state => {
      return {
        ...state,
        components: state.components.concat([component])
      }
    })
  }

  // handleDelete = (component) => {

  //   this.setState(state => {
  //     return {
  //       ...state,
  //       components: state.components.splice([component])
  //     }
  //   })
  // }

  onStyleChange = (attr, value) => {
    const {styles} = this.state
    const newStyle = {
      ...styles,
      [attr]: value
    }

    this.setState(state => {
      return {
        ...state,
        styles: newStyle
      }
    })
  }

  handleClick = (type, index) => {
    this.setState({ type, current: index });
    console.log(type, index);
  }

  render() {

    const {components, type, current, styles} = this.state

    return (
      <DragDropContextProvider backend={HTML5Backend}>
        <div style={{ display: 'flex', padding: '1rem'}}>
          <div>
            <Box key="Header" name="header" onDropComponent={this.onDropComponent} />
            <Box key="Hero" name="hero" onDropComponent={this.onDropComponent} />
            <Box key="Footer" name="footer" onDropComponent={this.onDropComponent} />
          </div>
          <div style={{ flex: 1, display: 'flex', justifyContent: 'center', 'position': 'relative' }}>
            <Dustbin allowedDropEffect="any">
              {components.map((c, index) => {
                const Component = Catalog[c]
                const styleProps = (type === c && index === current) ? styles : null
                return <Component key={`${c}${index}`} onClick={e => {
                  e.preventDefault()
                  this.handleClick(c, index)
                }} style={styleProps} />
              }
              )}

              { type ? <Action type={type} onStyleChange={this.onStyleChange} /> : null }

            </Dustbin>
          </div>
        </div>
      </DragDropContextProvider>
    )
  }
}