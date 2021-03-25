import { zeroLeft } from './zero-left'

export function secondsToMinutes(seconds: number): string {
  const minutos = zeroLeft(seconds / 60)
  const segundos = zeroLeft(seconds % 60)

  return `${minutos}:${segundos}`
}
