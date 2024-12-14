function funck(isLeagel: () => void) {
  setTimeout(isLeagel, 5000);
}
funck(function () {
  console.log(`hi! there`);
});
