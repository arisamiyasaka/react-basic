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

2 Clockコンポーネントを、関数形式に書き変えて下さい

*/

const Clock = ({ time }) => <h1>{time}.</h1>

export default Clock
