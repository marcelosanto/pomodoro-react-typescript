import { zeroLeft } from './zero-left'

export function secondsToTime(seconds: number): string {
  const hours = zeroLeft(seconds / 3600)
  const minutos = zeroLeft(seconds / 60)
  const segundos = zeroLeft(seconds % 60)

  return `${hours}:${minutos}:${segundos}`
}
