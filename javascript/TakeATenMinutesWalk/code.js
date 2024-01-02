function isValidWalk(walk) {
  const distanceNorth = walk.filter((step => step === 'n')).length
  const distanceWest = walk.filter((step => step === 'w')).length
  const distanceEast = walk.filter((step => step === 'e')).length
  const distanceSouth = walk.filter((step => step === 's')).length

  return (walk.length === 10) && (distanceNorth - distanceSouth === 0) && (distanceWest - distanceEast === 0)
}

export {
  isValidWalk
}
