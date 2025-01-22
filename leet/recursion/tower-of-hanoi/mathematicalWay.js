function mathematicalWay(disc) {
  if (disc === 0 || disc === 1) return disc;

  return 2 ** disc - 1;
}

console.log(mathematicalWay(1))