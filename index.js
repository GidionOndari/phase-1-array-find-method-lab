// code your solution here
function superbowlWin(record) {
  // record is an array like: [{ year: "2015", result: "W" }, ...]
  const winObj = record.find(season => season.result === "W");
  return winObj ? winObj.year : undefined;
}

/* ── quick manual check ── */
if (require.main === module) {
  const record = [
  { year: "2015", result: "W"},
  { year: "2014", result: "N/A"},
  { year: "2013", result: "L"},
  ];
  console.log(superbowlWin(testRecord)); // -> "2015"
}
