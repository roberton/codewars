function cakes(recipe, available) {
  const maxForEachIngredient = Object.keys(recipe)
    .map(ingredient => Math.floor(available[ingredient] / recipe[ingredient]))
    .map(max => Number.isNaN(max) ? 0 : max)

  return Math.min(...maxForEachIngredient)
}

export {
  cakes
}
