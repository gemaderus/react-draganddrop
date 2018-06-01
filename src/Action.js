import React, { Component } from 'react';
import './action.css';
import StyleConfig from './styleConfig';

class Action extends Component {
  // updatedComponent = (event) => {
  //   let value = event.target.value;
  // }

  onChange = (attr, value) => {
    console.log(attr, value)
    const {onStyleChange} = this.props
    onStyleChange(attr, value)
  }

  handleSubmit = (event) => {
    event.preventDefault();
  }

  render() {
    const config = StyleConfig[this.props.type]
    const attributes = Object.keys(config)

    const renderFormElement = attr => {
      const options = config[attr]

      if (options.type === 'select') {
        return <select key={attr} onChange={e => {
          const value = e.target.value
          this.onChange(attr, value)
        }}>
          {options.values.map(v => <option key={v.value || v} value={v.value || v}>{v.label || v}</option>)}
        </select>
      }

      return null
    }

    return (
      <form onSubmit={this.handleSubmit} className='formConfig'>

      {attributes.map(attr => {
        return renderFormElement(attr)
      })}

      </form>
    )
  }
}

export default Action;