import * as React from 'react'
import { defineMessages } from 'react-intl'
import { useMount } from 'react-use'


defineMessages({
  foo: {
    id: 'foo',
    defaultMessage: 'foo',
    description: 'bar',
  },
})

type PropsType = {}

const Hello: React.FC<PropsType> = () => {
  useMount(() => {

  })
  return <div>

  </div>
}

export default Hello
