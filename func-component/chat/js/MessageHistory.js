'use strict';

function MessageHistory(props) {
  return (
    <ul>
      {props.list.map((message) => (
        (message.type === "message") ? Message({from: message.from, message: message}) :
        (message.type === "response") ? Response({from: message.from, message: message}) :
        Typing({from: message.from, message: message})
      ))}
    </ul>
  )
}
