import React from 'react'

export default function DragPage() {
  /* 
  可拖拽元素：
    draggable属性可用于任何元素节点，但是图片（<img>）和链接（<a>）不加这个属性，就可以拖拉。对于它们，用到这个属性的时候，往往是将其设为false，防止拖拉这两种元素。
      注意，一旦某个元素节点的draggable属性设为true，就无法再用鼠标选中该节点内部的文字或子节点了。
    ondrag：拖拉过程中，在被拖拉的节点上持续触发
    ondragstart事件：当拖拽元素开始被拖拽的时候触发的事件
    ondragend事件：当拖曳元素进入目标元素的时候触发的事件
  目标元素：
    ondrop事件：被拖拽的元素在目标元素上同时鼠标放开触发的事件.
              注意:
              必须阻止某一 DOM 元素对 dragover 的默认行为，才会触发ondrop事件
              如果当前节点不允许drop，即使在该节点上方松开鼠标键，也不会触发该事件。
              如果用户按下 ESC 键，取消这个操作，也不会触发该事件。
              该事件的监听函数负责取出拖拉数据，并进行相关处理。
    ondragenter 事件：当拖曳元素进入目标元素的时候触发的事件，
    ondragover 事件：拖拽元素在目标元素上移动的时候触发的事件
    dragleave 事件：被拖拽元素离开目标元素内触发。

    关于拖拉事件，有以下几个注意点。

    1、拖拉过程只触发以上这些拖拉事件，尽管鼠标在移动，但是鼠标事件不会触发。
    2、将文件从操作系统拖拉进浏览器，不会触发dragstart和dragend事件。
    3、dragenter和dragover事件的监听函数，用来取出拖拉的数据（即允许放下被拖拉的元素）。
      由于网页的大部分区域不适合作为放下拖拉元素的目标节点，所以这两个事件的默认设置为当前节点不允许接受被拖拉的元素。
      如果想要在目标节点上放下的数据，首先必须阻止这两个事件的默认行为。
  */
  return (
    <div>
      <div 
        style={{width: '100px', height: '100px',border: '1px solid black'}}
        onDrop={(e) => {
          console.log('drop e===', e.dataTransfer)
          e.preventDefault()
        }}
        onDragEnter={(e) => {
          console.log('drag enter===', e.dataTransfer)
        }}
        onDragOver={(e) => {
          e.preventDefault()
          console.log('drag over===')
        }}
        onDragLeave={(e) => {
          console.log('drag leave===')
        }}
        >
        
        目标区域
      </div>
      <div 
        draggable="true" 
        onDragStart={(e) => {
          console.log('start e===', e.dataTransfer)
        }}
        onDragEnd={(e) => {
          console.log('end e===', e.dataTransfer)
        }}
        onDrag={(e) => {
          console.log('onDrag',e.target)
        }}
      >
        可拖拽元素
        </div> 
    </div>
  )
}
