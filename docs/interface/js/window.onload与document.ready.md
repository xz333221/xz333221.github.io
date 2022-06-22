# window.onload与document.ready的区别

### 区别一：提供者

- window.onload 事件是一个JavaScript内置的事件；
- document.ready 事件是 jQuery 提供的一个事件。

### 区别二：执行顺序

- document.ready 事件会在 DOM （不包括图片等内容）加载完成后被触发；
- window.onload 事件会等所有内容（包括图片等）加载完成后才会被触发，因此它比 document.ready 事件稍晚一些。
