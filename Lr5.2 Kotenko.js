function runOperations() {
  let log = "";

  let styles = ["Jazz", "Blues"];
  log += "1. " + JSON.stringify(styles) + "\n";

  styles.push("Rock-n-Roll");
  log += "2. " + JSON.stringify(styles) + "\n";

  let middleIndex = Math.floor(styles.length / 2);
  styles[middleIndex] = "Classics";
  log += "3. " + JSON.stringify(styles) + "\n";

  let first = styles.shift();
  log += "4. " + JSON.stringify(styles) + "\n";

  styles.unshift("Rap", "Reggae");
  log += "5. " + JSON.stringify(styles) + "\n";

  return log;
}