const Animals = [
  { name: 'Dorminhoco', age: 1, type: 'Dog' },
  { name: 'Soneca', age: 2, type: 'Dog' },
  { name: 'Preguiça', age: 5, type: 'Cat' },
];

const findAnimalByName = (name) => (
  // Adicione o código aqui.
  new Promise((resolve, reject) => {
    setTimeout(() => {
      const Animal = Animals.find((animal) => animal.name === name);
      if (Animal) {
        return resolve(Animal);
      };

      return reject('Nenhum animal com esse nome!');
    }, 100);
  })
);

const getAnimal = (name) => (
  // Adicione o código aqui.
  findAnimalByName(name).then(animal => animal)
);
// ---------------------

describe('Testando promise - findAnimalByName', () => {
  describe('Quando existe o animal com o nome procurado', () => {
    test('Retorne o objeto do animal', () => {
      expect.assertions(1);
      return getAnimal('Dorminhoco').then(animal => {
        expect(animal).toEqual({ name: 'Dorminhoco', age: 1, type: 'Dog' });
      });
    });
  });

  describe('Quando não existe o animal com o nome procurado', () => {
    test('Retorna um erro', () => {
      expect.assertions(1);
      return getAnimal('Bob').catch(error =>
        expect(error).toEqual('Nenhum animal com esse nome!')
      );
    });
  });
});

describe('Testando promise - findAnimalByName (asynch/await)', () => {
  describe('Quando existe o animal com o nome procurado', () => {
    test('Retorne o objeto do animal', async () => {
      expect.assertions(1);
      const animal = await getAnimal('Dorminhoco');
      expect(animal).toEqual({ name: 'Dorminhoco', age: 1, type: 'Dog' })
    });
  });

  describe('Quando não existe o animal com o nome procurado', () => {
    test('Retorna um erro', async () => {
      expect.assertions(1);
      try {
        await getAnimal('Bob')
      } catch (error) {
        expect(error).toBe('Nenhum animal com esse nome!')
      }
    });
  });
});