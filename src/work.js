import React, { Component } from 'react'

/* From CodePen by sundaycrafts
コンポーネントは、その内部にさらに子コンポーネントをもつことができることを理解して下さい。

const Root = () => (
  <div>
    <h1>Hello React.</h1>
    <Clock />
  </div>
)

const Clock = () => <h1>{(new Date()).toLocaleTimeString()}.</h1>

*/

/** Work
2. Clockコンポーネントが1秒ごとに時刻を更新するようにして下さい。
*/

class Root extends Component {
  constructor(props) {
    super(props)
    this.state = { time: (new Date()).toLocaleTimeString(), active: true }
  }

  componentDidMount() {
    this.timeId = setInterval(() => this.tick(), 1000)
  }

  componentWillMount() {
    clearInterval(this.timeId)
  }

  tick() {
    this.setState(({ active }) => ({ time: (new Date()).toLocaleTimeString(), active: !active }))
  }

  render() {
    const { time, active } = this.state

    return (
      < div >
        <h1>Hello React.</h1>
        <Clock time={time} color={active} />
      </div >
    )
  }
}

const Clock = ({ time, color }) => <h1 style={{ color: color ? "black" : "grey" }}>{time}.</h1>

export default Root
