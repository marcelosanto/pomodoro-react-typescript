import { useEffect, useRef } from 'react'

export function UseInterval<C extends CallableFunction>(
  callback: C,
  delay: number | null,
): void {
  const savedCallback = useRef<C>()

  useEffect(() => {
    savedCallback.current = callback
  }, [callback])

  useEffect(() => {
    function tick() {
      if (savedCallback.current) savedCallback.current()
    }
<<<<<<< HEAD

=======
>>>>>>> 915f421567c9b018e03df5eceedd4fa34d6d50ec
    if (delay !== null) {
      const id = setInterval(tick, delay)
      return () => clearInterval(id)
    }
  }, [delay])
}
