import React, { useState } from 'react'

import { UseInterval } from '../hooks/use-interval'
import { Button } from './button'
import { Timer } from './timer'
interface Props {
  defaultPomodoroTime: number
}

export function PomodoroTimer(props: Props): JSX.Element {
  const [mainTime, setMainTime] = useState(props.defaultPomodoroTime)

  UseInterval(() => {
    setMainTime(mainTime - 1)
  }, 1000)

  return (
    <div className="pomodoro">
      <h2>You are: working</h2>
      <Button text="Testando"></Button>
      <Timer mainTime={mainTime} />
    </div>
  )
}
