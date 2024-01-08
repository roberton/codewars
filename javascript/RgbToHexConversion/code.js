function rgb(r, g, b) {
  const formatHex = (num) => Math.min(Math.max(num, 0), 255).toString(16).padStart(2, '0').toUpperCase()
  return [r, g, b].map(num => formatHex(num)).join('')
}

export {
  rgb
}
