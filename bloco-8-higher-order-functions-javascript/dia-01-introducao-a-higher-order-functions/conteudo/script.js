const wakeUp = () => `Acordando!!`;
const breakfast = () => `Bora tomar café!!`;
const goToSleep = () => `Partiu dormir!!`;
// Ao chamar a função doingThings:
const doingThings = (func) => func();
console.log(doingThings(wakeUp));
console.log(doingThings(breakfast));
console.log(doingThings(goToSleep));

// Ela deve retornar o valor do respectivo parâmetro, neste caso:
// Acordando!!