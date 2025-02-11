export const luhnCheck = (cardNo) => {
  const nDigits = cardNo.length;

  let nSum = 0;
  let isSecond = false;
  for (let i = nDigits - 1; i >= 0; i -= 1) {
    let d = cardNo[i].charCodeAt() - '0'.charCodeAt();

    if (isSecond === true) d *= 2;

    nSum += parseInt(d / 10, 10);
    nSum += d % 10;

    isSecond = !isSecond;
  }
  return (nSum % 10 === 0);
};

export function getTypeCardByNumber(value) {
  const firstNumb = value.substr(0, 1);
  const twoNumb = value.substr(0, 2);
  let result = '';

  //  Мир: 2
  if (firstNumb === '2') { result = 'mir'; }
  // VISA: 4
  if (firstNumb === '4') { result = 'visa'; }
  // MasterCard: 5
  if (firstNumb === '5') { result = 'master'; }

  // Amex: 34 || 37
  if (twoNumb === '34' || twoNumb === '37') { result = 'amex'; }

  // Discover:  6011, 644–649 или 65
  if (value.substr(0, 4) === '6011' || value.substr(0, 7) === '644–649' || twoNumb === '65') { result = 'discover'; }

  // JSB: 3528, 3539, 3545, 3532, 3589

  if (value.substr(0, 4) === '3528'
      || value.substr(0, 4) === '3539'
      || value.substr(0, 4) === '3545'
      || value.substr(0, 4) === '3532'
      || value.substr(0, 4) === '3589'
  ) { result = 'jcb'; }

  // Dinners club 300–305, 36, 38 или 39
  if (value.substr(0, 7) === '300–305' || twoNumb === '36' || twoNumb === '38' || twoNumb === '39') { result = 'diners_club'; }

  return result;
}
