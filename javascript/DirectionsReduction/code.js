function dirReduc(directions) {
  const lastOf = (directions) => directions.length > 0 ? directions[directions.length - 1] : ''

  const reducedDirs = []

  directions
    .map(dir => dir.toUpperCase())
    .forEach(dir => {
      if (lastOf(reducedDirs) == oppositeOf(dir)) {
        reducedDirs.pop()
      } else {
        reducedDirs.push(dir)
      }
    })

    return reducedDirs
}

function oppositeOf(dir) {
  if (dir === 'WEST') return 'EAST'
  if (dir === 'EAST') return 'WEST'
  if (dir === 'NORTH') return 'SOUTH'
  if (dir === 'SOUTH') return 'NORTH'
  throw new Error('Invalid direction passed to oppositeOf()')
}

export {
  dirReduc
}
