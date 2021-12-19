function filterApiData(apiData, mandatoryKeys) {
  // Add you solution here
  // Datentyp filtern

  let filterArr = apiData.filter(function (itemsKey) {
    let arr = Object.keys(itemsKey);
    let check = true;
    for (let i = 0; i < mandatoryKeys.length; i++) {
      if (!arr.includes(mandatoryKeys[i])) {
        check = false;
      }
      console.log(mandatoryKeys[i]);
    }

    if (check === true) {
      return true;
    }
    console.log(arr);
  });
  return filterArr;
}
