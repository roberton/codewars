function humanReadable(timeInSeconds) {
  const formatNumber = (num) => num.toString().padStart(2, '0')

  const seconds = timeInSeconds % 60
  const minutes = Math.floor(timeInSeconds / 60) % 60
  const hours = Math.floor(timeInSeconds / 3600)
  return `${formatNumber(hours)}:${formatNumber(minutes)}:${formatNumber(seconds)}`
}

export {
  humanReadable
}
