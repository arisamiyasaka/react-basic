import React from 'react'

/* From CodePen by sundaycrafts
コンポーネント自身がデータを保持・更新するにはstateを使います。
stateは React.Component を extends した時のみもつことができることを理解して下さい。

class Clock extends React.Component {
  constructor (props) {
    super(props)
    this.state = {time: new Date()}
  }

  render () {
    return (
      <h1>{this.state.time.toLocaleTimeString()}.</h1>
    )
  }
}

*/

/** MEMO: state vs props
stateはコンポーネント自身が自由に変更できるプロパティ、propsは親コンポーネントからしか変更できないプロパティです。
親コンポーネントから子コンポーネントのpropsを変更する方法は後述します。
*/

/** Work

stateを ReactDOM.render() からprops経由で渡すようにして下さい。

*/

class Clock extends React.Component {
  constructor(props) {
    super(props)
    // this.state = {time: new Date()}
  }

  render() {
    return (
      <h1>{this.props.time}.</h1>
    )
  }
}

export default Clock
