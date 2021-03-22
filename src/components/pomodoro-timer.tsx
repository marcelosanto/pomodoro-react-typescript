import React, { useEffect, useState } from 'react'

import { UseInterval } from '../hooks/use-interval'
import { Button } from './button'
import { Timer } from './timer'

// eslint-disable-next-line @typescript-eslint/no-var-requires
const bellStart = require('../sounds/bell-start.mp3')
// eslint-disable-next-line @typescript-eslint/no-var-requires
const bellFinish = require('../sounds/bell-finish.mp3')

const audioStartWorking = new Audio(bellStart)
const audioStopWorking = new Audio(bellFinish)

interface Props {
  pomodoroTime: number
  shortResTime: number
  longRestTime: number
  cycles: number
}

export function PomodoroTimer(props: Props): JSX.Element {
  const [mainTime, setMainTime] = useState(props.pomodoroTime)
  const [timeCounting, setTimeCounting] = useState(false)
  const [working, setWorking] = useState(false)
  const [resting, setResting] = useState(false)

  useEffect(() => {
    if (working) document.body.classList.add('working')
    if (resting) document.body.classList.remove('working')
  }, [working])

  UseInterval(
    () => {
      setMainTime(mainTime - 1)
    },
    timeCounting ? 1000 : null,
  )

  const configureWork = () => {
    setTimeCounting(true)
    setWorking(true)
    setResting(false)
    setMainTime(props.pomodoroTime)
    audioStartWorking.play()
  }

  const configureResting = (Long: boolean) => {
    setTimeCounting(true)
    setWorking(false)
    setResting(true)

    Long ? setMainTime(props.longRestTime) : setMainTime(props.shortResTime)

    audioStopWorking.play()
  }

  return (
    <div className="pomodoro">
      <h2>You are: {timeCounting ? 'Working' : 'Paused'}</h2>
      <Timer mainTime={mainTime} />
      <div className="controls">
        <Button text="Work" onClick={() => configureWork()}></Button>
        <Button text="Rest" onClick={() => configureResting(false)}></Button>
        <Button
          className={!working && !resting ? 'hidden' : ''}
          text={timeCounting ? 'Pause' : 'Play'}
          onClick={() => setTimeCounting(!timeCounting)}
        ></Button>
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
