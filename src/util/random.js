function getRandom(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export function oneInNChances(numChances) {
  return getRandom(1, numChances) == 1;
}

export function shuffleList(theList) {
  // Lifted from https://www.frankmitchell.org/2015/01/fisher-yates/
  let loopIndex = 0,
    randomIndex = 0,
    temp = null;

  for (loopIndex = theList.length - 1; loopIndex > 0; loopIndex -= 1) {
    randomIndex = Math.floor(Math.random() * (loopIndex + 1));
    temp = theList[loopIndex];
    theList[loopIndex] = theList[randomIndex];
    theList[randomIndex] = temp;
  }

  return theList;
}
