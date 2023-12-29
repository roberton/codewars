function digitalRoot(n) {
  const digits = n.toString().split('')
  if (digits.length === 1) {
    return n
  }

  const sum = digits.reduce(
    (acc, cur) => acc + parseInt(cur, 10),
    0)

  return digitalRoot(sum)
}

export {
  digitalRoot
}
