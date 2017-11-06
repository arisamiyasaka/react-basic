import React, { Component } from 'react'

/* From CodePen by sundaycrafts
React.render() 同様、コンポーネント自身も、どのような種類の
コンポーネントでも子にもつことができることを確認してください。

const Root = () => (
  <div>
    <h1>Hello React.</h1>
    <Clock />
  </div>
)

class Clock extends React.Component {
  constructor(props) {
    super(props)
    this.state = { time: new Date() }
  }

  componentDidMount() {
    this.timerID = setInterval(() => this.tick(), 1000)
  }

  componentWillUnMount() {
    clearInterval(this.timerID)
  }

  tick() {
    this.setState({ time: new Date() })
  }

  render() {
    return (
      <h1>{this.state.time.toLocaleTimeString()}.</h1>
    )
  }
}
*/


/** Work
Rootコンポーネントの <h1> エレメントの文字色が、3秒おきに変わるようにして下さい。
*/

const Root = () => (
  <div>
    <h1>Hello React.</h1>
    <Clock />
  </div>
)

class Clock extends React.Component {
  constructor(props) {
    super(props)
    this.state = { time: new Date(), active: true }
  }

  componentDidMount() {
    this.timerID = setInterval(() => this.tick(), 1000)
    this.tackID = setInterval(() => this.tack(), 3000)
  }

  componentWillUnMount() {
    clearInterval(this.timerID)
    clearInterval(this.tackID)
  }

  tick() {
    this.setState({ time: new Date() })
  }

  tack() {
    this.setState(({ active }) => ({ active: !active }))
  }

  render() {
    const { time, active } = this.state
    return (
      <h1 style={{ color: active ? "black" : "gray" }}>{time.toLocaleTimeString()}.</h1>
    )
  }
}


export default Root
