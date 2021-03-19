import React, { useState } from 'react'

import { UseInterval } from '../hooks/use-interval'
import { Button } from './button'
import { Timer } from './timer'

interface Props {
  pomodoroTime: number
  shorResTime: number
  longRestTime: number
  cycles: number
}

export function PomodoroTimer(props: Props): JSX.Element {
  const [mainTime, setMainTime] = useState(props.pomodoroTime)

  UseInterval(() => {
    setMainTime(mainTime - 1)
  }, 1000)

  return (
    <div className="pomodoro">
      <h2>You are: working</h2>
      <Timer mainTime={mainTime} />
      <div className="controls">
        <Button text="Testando"></Button>
        <Button text="Testando"></Button>
        <Button text="Testando"></Button>
      </div>

      <div className="details">
        <p>
          TesTando: Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </p>
        <p>
          TesTando: Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </p>
        <p>
          TesTando: Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </p>
        <p>
          TesTando: Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </p>
      </div>
    </div>
  )
}
