function dirReduc(initialDirections) {
  let length
  let directions = initialDirections
  do {
    length = directions.length
    directions = dirReducHelper(directions)
  } while (directions.length !== length)
  return directions
}

function dirReducHelper(directions) {
  const [first, next, ...rest] = directions
  if (!first || !next) {
    return directions
  }
  if (
    (first === 'NORTH' && next === 'SOUTH') ||
    (first === 'SOUTH' && next === 'NORTH') ||
    (first === 'EAST' && next === 'WEST') ||
    (first === 'WEST' && next === 'EAST')
  ) {
    return dirReducHelper(rest)
  }
  return [first, ...dirReducHelper([next, ...rest])]
}

