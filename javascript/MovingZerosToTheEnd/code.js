function moveZeros(arr) {
  const zerosAreLast = (lhs, rhs) => {
    if (lhs === 0) return 1
    if (rhs === 0) return -1
    return 0
  }

  return arr.sort(zerosAreLast)
}

export {
  moveZeros
}
