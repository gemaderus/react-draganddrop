import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { DropTarget } from 'react-dnd'
import ItemTypes from './ItemTypes'

const style = {
  height: '12rem',
  width: '12rem',
  marginRight: '1.5rem',
  marginBottom: '1.5rem',
  color: 'white',
  padding: '1rem',
  textAlign: 'center',
  fontSize: '1rem',
  lineHeight: 'normal',
  float: 'left',
}

const boxTarget = {
  drop({ allowedDropEffect }) {
    return {
      name: `${allowedDropEffect} Dustbin`,
      allowedDropEffect,
    }
  },
}

// @DropTarget(ItemTypes.BOX, boxTarget, (connect, monitor) => ({
//   connectDropTarget: connect.dropTarget(),
//   isOver: monitor.isOver(),
//   canDrop: monitor.canDrop(),
// }))

/**
 * Specifies which props to inject into your component.
 */
// function collect(connect, monitor) {
//   return {
//     // Call this function inside render()
//     // to let React DnD handle the drag events:
//     connectDragSource: connect.dragSource(),
//     // You can ask the monitor about the current drag state:
//     isDragging: monitor.isDragging()
//   };
// }

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
  static propTypes = {
    connectDropTarget: PropTypes.func.isRequired,
    isOver: PropTypes.bool.isRequired,
    canDrop: PropTypes.bool.isRequired,
    allowedDropEffect: PropTypes.string.isRequired,
  }

  render() {
    const { canDrop, isOver, allowedDropEffect, connectDropTarget } = this.props
    const isActive = canDrop && isOver

    let backgroundColor = '#222'
    if (isActive) {
      backgroundColor = 'darkgreen'
    } else if (canDrop) {
      backgroundColor = 'darkkhaki'
    }

    return connectDropTarget(
      <div style={{ ...style, backgroundColor }}>
        {`Works with ${allowedDropEffect} drop effect`}
        <br />
        <br />
        {isActive ? 'Release to drop' : 'Drag a box here'}
      </div>,
    )
  }
}

export default DropTarget(ItemTypes.BOX, boxTarget, collect)(Dustbin);
