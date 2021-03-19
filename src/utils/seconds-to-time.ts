export function secondsToTime(seconds: number): string {
  const zeroLeft = (n: number) => Math.floor(n).toString().padStart(2, '0')
  const minutos = zeroLeft(seconds / 60)
  const segundos = zeroLeft(seconds % 60)

  return `${minutos}:${segundos}s`
}
