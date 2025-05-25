function findWaysToMoveDisc(disc) {
  if (disc === 0 || disc === 1) return 1;

  return findWaysToMoveDisc(disc - 1) + 1 + findWaysToMoveDisc(disc - 1)
}

console.log(findWaysToMoveDisc(3))