import React from 'react'

const Clock = () => <h1>{(new Date()).toLocaleTimeString()}.</h1>
const Greet = () => <h1>OK Google</h1>

export { Clock, Greet }

/** Work
自分自身で自由にコンポーネントを作成して、DOMにレンダリングして下さい。
*/
