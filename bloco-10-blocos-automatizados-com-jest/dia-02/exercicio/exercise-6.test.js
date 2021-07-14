const Animals = [
  { name: 'Dorminhoco', age: 1, type: 'Dog' },
  { name: 'Soneca', age: 2, type: 'Dog' },
  { name: 'Preguiça', age: 5, type: 'Cat' },
];

const findAnimalByName = (age) => (
  // Adicione o código aqui.
  new Promise((resolve, reject) => {
    setTimeout(() => {
      const AnimalsByAge = Animals.filter((animal) => animal.age === age);
      if (AnimalsByAge[0]) {
        return resolve(AnimalsByAge);
      };

      return reject('Nenhum animal com essa idade!');
    }, 100);
  })
);

const getAnimal = (age) => (
  // Adicione o código aqui.
  findAnimalByName(age).then(animal => animal)
);
// ---------------------

describe('Testando promise - findAnimalByName', () => {
  describe('Quando existe o animal com a idade procurada', () => {
    test('Retorne o array dos animais', () => {
      expect.assertions(1);
      return expect(getAnimal(1)).resolves.toEqual([{ name: 'Dorminhoco', age: 1, type: 'Dog' }])
    });
  });

  describe('Quando não existe o animal com a idade procurada', () => {
    test('Retorna um erro', () => {
      expect.assertions(1);
      return expect(getAnimal(3)).rejects.toBe('Nenhum animal com essa idade!');
    });
  });
});