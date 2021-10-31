import Bus from './bus.js'

var websocketConnectdCount = 0


export function newWebsocket() {
  if(window.onbeforeunload) window.onbeforeunload()
  var websocket =  null
  // 判断当前环境是否支持Websocket
  if (window.WebSocket) {
    if (!websocket) {
      const ws = 'wss://adl.seafishery.com/api/socket/web-socket'
      websocket = new WebSocket(ws)
      Bus.websocket = websocket
    } else {
      console.log('not support websocket')
    }

    // 连接成功建立得回调方法
    websocket.onopen = function(e) {
      console.log('connected successfully')
    }

    // 连接发生错误 会继续尝试发生新得连接 5次
    websocket.onerror = function() {
      console.log('onerror连接发生错误')
      websocketConnectdCount++
      if (websocketConnectdCount <= 5) {
        newWebsocket()
      }
    }

    // 连接到消息得回调方法
    websocket.onmessage = function(e) {
      console.log( '收到消息',)
      var message = e
      if (message) {
        Bus.$emit('message', message)
      }
      
    }

    // 监听窗口事件 窗口关闭 主动断开连接
    window.onbeforeunload = function() {
      websocket.close()
    }
    window.onsetmessage = function(e) {
        websocket.send(e) // 将消息传给服务端
    }
  }
}
