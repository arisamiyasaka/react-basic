import React from 'react'

/* From CodePen by sundaycrafts
Reactコンポーネントには「DOMにレンダリングされた瞬間」や「DOMから取り除かれた瞬間」
という、特定のタイミングで呼び出されるメソッドがあり、それを「Lifecycle method」と呼びます。
componentDidMount() と componentWillUnMount() はそれぞれコンポーネントがDOMにレンダリングされた時、
DOMから取り除かれた時に呼び出されるLifecycle methodであることを理解して下さい。

class Clock extends React.Component {
  constructor (props) {
    super(props)
    this.state = {time: new Date()}
  }

  componentDidMount () {
    this.timerID = setInterval(() => this.tick(), 1000)
  }

  componentWillUnMount () {
    clearInterval(this.timerID)
  }

  tick () {
    this.setState({time: new Date()})
  }

  render () {
    return (
      <h1 style={{color: 'grey'}}>{this.state.time.toLocaleTimeString()}.</h1>
    )
  }
}

*/


/** Work
1秒毎に色が black <-> grey と変わるようにして下さい
*/

class Clock extends React.Component {
  constructor(props) {
    super(props)
    this.state = { time: new Date(), active: true }
  }

  componentDidMount() {
    this.timerID = setInterval(() => this.tick(), 1000)
  }

  componentWillUnMount() {
    clearInterval(this.timerID)
  }

  tick() {
    this.setState({ time: new Date(), active: !this.state.active })
  }

  render() {
    return (
      <h1 style={{ color: this.state.active ? 'grey' : 'black' }}>{this.state.time.toLocaleTimeString()}.</h1>
    )
  }
}

export default Clock
