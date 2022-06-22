const offset = ele => {
  let result = {
    top: 0,
    left: 0
  }
  /*
  * nodeType 属性返回以数字值返回指定节点的节点类型。
  * 如果节点是元素节点，则 nodeType 属性将返回 1。
  * 如果节点是属性节点，则 nodeType 属性将返回 2。
  * 如果节点 node.nodeType 类型不是 Element(1)，则跳出；
  * 如果相关节点的 position 属性为 static，则不计入计算，进入下一个节点（其父节点）的递归。
  * 如果相关属性的 display 属性为 none，则应该直接返回 0 作为结果。
  */
  const getOffset = (node, init) => {
    if (node.nodeType !== 1) {
      return
    }

    position = window.getComputedStyle(node)['position']

    if (typeof(init) === 'undefined' && position === 'static') {
      getOffset(node.parentNode)
      return
    }

    result.top = node.offsetTop + result.top - node.scrollTop
    result.left = node.offsetLeft + result.left - node.scrollLeft

    if (position === 'fixed') {
      return
    }

    getOffset(node.parentNode)
  }

  // 当前 DOM 节点的 display === 'none' 时, 直接返回 {top: 0, left: 0}
  if (window.getComputedStyle(ele)['display'] === 'none') {
    return result
  }

  let position

  getOffset(ele, true)

  return result

}



const offset = ele => {
  let result = {
    top: 0,
    left: 0
  }
  // 当前为 IE11以下, 直接返回 {top: 0,left: 0}
  if (!ele.getClientRects().length) {
    return result
  }

  // 当前 DOM 节点的 display === 'none' 时,直接返回 {top: 0,left: 0}
  if (window.getComputedStyle(ele)['display'] === 'none') {
    return result
  }

  result = ele.getBoundingClientRect()
  // 得到ele所在文档的HTML节点
  let document = ele.ownerDocument.documentElement

  return {
    //docElement.clientTop 一个元素顶部边框的宽度（以像素表示）。不包括顶部外边距或内边距。clientTop 是只读的
    top: result.top + window.pageYOffset - document.clientTop,
    left: result.left + window.pageXOffset - document.clientLeft

  }
}
