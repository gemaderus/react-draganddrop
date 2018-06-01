import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { DropTarget } from 'react-dnd'
import ItemTypes from './ItemTypes'

const style = {
  minHeight: '90vh',
  color: 'white',
  fontSize: '1rem',
  lineHeight: 'normal',
  backgroundColor: '#885DF4',
  width: '50%'
}

const boxTarget = {
  drop({ allowedDropEffect }) {
    return {
      name: `${allowedDropEffect} Dustbin`,
      allowedDropEffect,
    }
  },
}

function collect(connect, monitor) {
  return {
    // Call this function inside render()
    // to let React DnD handle the drag events:
    connectDropTarget: connect.dropTarget(),
    // You can ask the monitor about the current drag state:
    isOver: monitor.isOver(),
    isOverCurrent: monitor.isOver({ shallow: true }),
    canDrop: monitor.canDrop(),
    itemType: monitor.getItemType()
  };
}

class Dustbin extends Component {
  state = {
    components: []
  }

  static propTypes = {
    connectDropTarget: PropTypes.func.isRequired,
    isOver: PropTypes.bool.isRequired,
    canDrop: PropTypes.bool.isRequired,
    allowedDropEffect: PropTypes.string.isRequired,
  }

  render() {
    const { canDrop, isOver, allowedDropEffect, connectDropTarget, children } = this.props
    const isActive = canDrop && isOver

    // let backgroundColor = '#222'
    // if (isActive) {
    //   backgroundColor = 'darkgreen'
    // } else if (canDrop) {
    //   backgroundColor = 'darkkhaki'
    // }

    return connectDropTarget(
      <div style={{ ...style}}>
        {/* {isActive ? 'Release to drop' : 'Drag a box here'} */}
        {children}
      </div>,
    )
  }
}

export default DropTarget(ItemTypes.BOX, boxTarget, collect)(Dustbin);
