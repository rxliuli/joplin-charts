import Graphin, { Utils } from '@antv/graphin/dist'
import * as React from 'react'
import '@antv/graphin/dist/index.css'

type PropsType = {}

const data = Utils.mock(20).random().graphin()

console.log('data: ', data)

const Hello: React.FC<PropsType> = () => {
  return (
    <div
      style={{
        overflow: 'hidden',
        height: '100vh',
      }}
    >
      <Graphin
        data={data}
        layout={{ name: 'force' }}
        options={{
          height: window.document.documentElement.clientHeight,
        }}
      />
    </div>
  )
}

export default Hello
