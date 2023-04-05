// Je gaat functies schrijven die we kunnen hergebruiken om sommige emailadressen te checken. Nu zul je gaan merken hoe handig functies kunnen zijn!
// Je zult hier methoden van het String Object voor nodig hebben, dus pak de paragraaf op EdHub over het String Object er even bij.

/* Opdracht  1 */
// Schrijf een functie genaamd getEmailDomain, die een emailadres verwacht en de domeinnaam teruggeeft. Een domeinnaam is hetgeen dat na het @ in het adres staat
// ---- Verwachte uitkomsten:
// getEmailDomain("n.eeken@novi-education.nl") geeft novi-education.nl
// getEmailDomain("t.mellink@novi.nl") geeft novi.nl
// getEmailDomain("a.wiersma@outlook.com") geeft outlook.com

const getEmailDomain = (email) => email.slice(email.indexOf('@') + 1, email.length);

const domainName1 = getEmailDomain('adegroot@gmail.com');
console.log(domainName1);

/* Opdracht  2 */
// Schrijf een functie genaamd typeOfEmail, die een emailadres verwacht. De functie checkt of het emailadres een novi domein heeft (medewerker), een novi-education domein (student), of extern domein (zoals gmail of outlook)
// ---- Verwachte uitkomsten:
// typeOfEmail("n.eeken@novi-education.nl") geeft "Student"
// typeOfEmail("t.mellink@novi.nl") geeft geeft "Medewerker"
// typeOfEmail("novi.nlaapjesk@outlook.com") geeft geeft "Extern" <-- deze moet het ook doen!
// typeOfEmail("a.wiersma@outlook.com") geeft "Extern"

const typeOfEmail = (email) =>
  email.slice(email.indexOf('@') + 1, email.length);

const domain = typeOfEmail('amdegroot@gmail.com');

if (domain === 'novi-education.nl') {
  console.log('Student');
} else if (domain === 'novi.nl') {
  console.log('Medewerker');
} else {
  console.log('Extern');
}

/* Opdracht  3 */
// Schrijf een functie genaamd checkEmailValidity, die een emailadres verwacht en checkt of het emailadres valide is. De functie returned true of false, afhankelijk van de uitkomst.
// Een emailadres is valide wanneer:
// * Er een @ in voorkomt
// * Er géén , in voorkomt
// * Er géén . in voorkomt als allerlaatste karakter (dus hotmail.com is valide, net als outlook.nl, maar outlooknl. niet)
// ---- Verwachte uitkomsten:
// checkEmailValidity("n.eeken@novi.nl") geeft true - want @ en punt op de juiste plek
// checkEmailValidity("tessmellink@novi.nl") geeft true - want @ en punt op de juiste plek
// checkEmailValidity("n.eekenanovi.nl") geeft false - want geen @
// checkEmailValidity("n.eeken@novinl.") geeft false - want de punt mag niet als laatst
// checkEmailValidity("tessmellink@novi,nl") geeft false - want er staat een komma in

const checkEmailValidity = (email) => {
  const containsApenstaart = email.includes('@');
  const containsComma = email.includes(',');
  const lastChar = email.lastIndexOf('.');
  const emailLength = email.length - 1;
  const dotAtLastChar = emailLength !== lastChar;

  return containsApenstaart && !containsComma && dotAtLastChar;
};

const checkAddress1 = checkEmailValidity('n.eeken@novi.nl');
const checkAddress2 = checkEmailValidity('tessmellink@novi.nl');
const checkAddress3 = checkEmailValidity('n.eekenanovi.nl');
const checkAddress4 = checkEmailValidity('n.eeken@novinl.');
const checkAddress5 = checkEmailValidity('tessmellink@novi,nl');

console.log(
  checkAddress1,
  checkAddress2,
  checkAddress3,
  checkAddress4,
  checkAddress5
);
