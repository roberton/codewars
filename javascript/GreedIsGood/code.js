function score(dice) {
  let totalScore = 0

  const [score, spareDice] = checkForTriplet(dice, 1)
  totalScore += score

  const [score2, spareDice2] = checkForTriplet(spareDice, 6)
  totalScore += score2
  const [score3, spareDice3] = checkForTriplet(spareDice2, 5)
  totalScore += score3
  const [score4, spareDice4] = checkForTriplet(spareDice3, 4)
  totalScore += score4
  const [score5, spareDice5] = checkForTriplet(spareDice4, 3)
  totalScore += score5
  const [score6, spareDice6] = checkForTriplet(spareDice5, 2)
  totalScore += score6

  const [score7, spareDice7] = checkForSingle(spareDice6, 1)
  totalScore += score7
  const [score8, spareDice8] = checkForSingle(spareDice7, 5)
  totalScore += score8

  return totalScore
}

function checkForTriplet(dice, number) {
  const diceWithNumber = dice.filter(d => d === number)
  const spareDice = dice.filter(d => d !== number)

  if (diceWithNumber.length >= 3) {
    const score = (number === 1) ? 1000 : number * 100

    // Hack!
    if (diceWithNumber.length > 3) spareDice.push(number)
    if (diceWithNumber.length > 4) spareDice.push(number)

    return [score, spareDice]
  }
  return [0, dice]
}

function checkForSingle(dice, number) {
  const spareDice = dice.filter(d => d !== number)

  const scoreForNumber = number === 1 ? 100 : 50
  const numDiceFound = dice.length - spareDice.length

  return [scoreForNumber * numDiceFound, spareDice]
}

export {
  score
}
