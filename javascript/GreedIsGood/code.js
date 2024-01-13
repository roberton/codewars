function score(dice) {
  let totalScore = 0
  let spareDice = dice
  const tripletScores = [
    {die: 1, score: 1000},
    {die: 6, score: 600},
    {die: 5, score: 500},
    {die: 4, score: 400},
    {die: 3, score: 300},
    {die: 2, score: 200},
  ]
  const singleScores = [
    {die: 1, score: 100},
    {die: 1, score: 100},
    {die: 5, score: 50},
    {die: 5, score: 50},
  ]

  tripletScores.forEach(scoreInfo => {
    let found
    [found, spareDice] = checkForTriplet(spareDice, scoreInfo.die)
    if (found) { totalScore += scoreInfo.score }
  })

  singleScores.forEach(scoreInfo => {
    let found
    [found, spareDice] = checkForSingle(spareDice, scoreInfo.die)
    if (found) { totalScore += scoreInfo.score }
  })

  return totalScore
}

function checkForTriplet(dice, number) {
  const diceWithNumber = dice.filter(d => d === number)
  const spareDice = dice.filter(d => d !== number)

  if (diceWithNumber.length >= 3) {
    // Hack!
    if (diceWithNumber.length > 3) spareDice.push(number)
    if (diceWithNumber.length > 4) spareDice.push(number)

    return [true, spareDice]
  }
  return [false, dice]
}

function checkForSingle(dice, number) {
  const spareDice = dice.filter(d => d !== number)
  const numDiceFound = dice.length - spareDice.length

  // Hack!
  if (numDiceFound > 1) spareDice.push(number)

  return [numDiceFound !== 0, spareDice]
}

export {
  score
}
