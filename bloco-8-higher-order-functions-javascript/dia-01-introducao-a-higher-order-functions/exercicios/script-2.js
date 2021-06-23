const betChecker = (myNumber, prizeNumber) => (myNumber === prizeNumber) ? `Lucky day, you won!`: `Try Again!`;

const prizeDraw = (betNumber, betCheck) => {
  const numberGenerator = Math.floor(Math.random() * 6);
  return betCheck(betNumber, numberGenerator);
}
console.log(prizeDraw(1, betChecker));
