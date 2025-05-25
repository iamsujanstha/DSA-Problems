function printStepsOfMovingDisc(disc, source, helper, destination) {
  if (disc === 0) return;
  printStepsOfMovingDisc(disc - 1, source, destination, helper)
  console.log(`Move disc no. ${disc} from ${source} to ${destination}`)
  printStepsOfMovingDisc(disc - 1, helper, source, destination)
}

printStepsOfMovingDisc(3, 'A', 'B', 'C')