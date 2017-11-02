import React from 'react'

/* From CodePen by sundaycrafts
class Clock extends React.Component {
  constructor (props) {
    super(props)
  }

  render () {
    return (
      <h1>{this.props.time}.</h1>
    )
  }
}

ReactDOM.render(
  <Clock time={(new Date()).toLocaleTimeString()} />,
  document.getElementById('root')
)
*/

/** Work

1 Clockコンポーネントのconstructorメソッドを削除したうえで、同じ表示になるようにして下さい

*/

class Clock extends React.Component {
  render() {
    return (
      <h1>{this.props.time}.</h1>
    )
  }
}

export default Clock
