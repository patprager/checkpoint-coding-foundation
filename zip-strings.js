function zipStrings(strA, strB) {
  // Add you solution here
  // 1. zerlegen der "Strings" in einzelne ""-Strings — String.split()
  // --> string.split wird als Array [] ausgegeben
  // 2. Leerzeichen hinter jedem Buchstaben mit einer Zahl ersetzen
  // --> for-Schleife zum filtern der Leerzeichen & if-else für Leerzeichen ist true,
  // einsetzen einer Zahl
  // 3. beide Arrays in eins bringen und zusammenfügen .concat()
  // --> Zusammenfügen als Reißverschlussverfahren
  // strA = Buchstaben, strB = Zahlen

  let arrLetter = strA.split(" ");
  let arrNumber = strB.split("");

  for (let i = 0; i < arrLetter.length; i++) {
    if (arrLetter === " ") {
      " " === true;
      let stringZip = arrLetter.concat(arrNumber);
    } else {
      "" === false;
    }
  }

  console.log(stringZip);
}
