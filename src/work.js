import React from 'react'

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
1. 現在時刻を ReactDOM.render() から渡すようにして、最終的にClockコンポーネントで描画するようにして下さい。
*/

const Root = (props) => (
  <div>
    <h1>Hello React.</h1>
    <Clock time={props.time} />
  </div>
)

const Clock = ({ time }) => <h1>{time}.</h1>

export default Root
