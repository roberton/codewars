function pickPeaks(arr) {
  const pos = []
  const peaks = []

  let ascending = false
  let ascentStarted = 0
  arr.forEach((element, index) => {
    const previousElement = index > 0 ? arr[index - 1] : 100
    if (ascending && element < previousElement) {
      pos.push(index - 1)
      peaks.push(arr[index - 1])
      ascending = false
    } else if (ascending && element > previousElement) {
      // do nothing
    } else if (ascending && element == previousElement) {
      ascending = false
      pos.push(index - 1)
      peaks.push(arr[index - 1])
      // ascentStarted = index - 1
    } else if (!ascending && element < previousElement) {
      // do nothing
    } else if (!ascending && element >= previousElement) {
      ascending = true
      ascentStarted = index - 1
    }
  })
  return { pos, peaks }
}

export {
  pickPeaks
}
