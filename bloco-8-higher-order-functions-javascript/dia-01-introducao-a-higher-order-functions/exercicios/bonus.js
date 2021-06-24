const mage = {
  healthPoints: 130,
  intelligence: 45,
  mana: 125,
  damage: undefined,
};

const warrior = {
  healthPoints: 200,
  strength: 30,
  weaponDmg: 2,
  damage: undefined,
};

const dragon = {
  healthPoints: 350,
  strength: 50,
  damage: undefined,
};

const battleMembers = { mage, warrior, dragon };

const dragonDamage = () => {
  const minDmg = 15;
  const {strength} = dragon;
  const dmg = Math.floor(Math.random() * (strength - minDmg) + minDmg);
  return dmg;
};

const warriorDamage = () => {
  const {strength} = warrior;
  const {weaponDmg} = warrior
  const dmg = Math.floor(Math.random() * ((strength * weaponDmg) - strength) + strength);
  return dmg;
};

const mageDamage = () => {
  const {mana} = mage;
  const damage = () => {
    const {intelligence} = mage;
    const maxDmg = intelligence * 2;
    const dmg = Math.floor(Math.random() * (maxDmg - intelligence) + intelligence);
    return dmg;
  };
  if (mana > 15) {
    return { damage: damage(), manaCost: 15};
  }
  return {damage: 'Not enough mana...', manaCost: 0};
};
// Parte 2 =================================================================

const gameActions = {
  warriorTurn: (warriorAction) => {
    const warriorAttack = warriorAction();
    warrior.damage = warriorAttack;
    dragon.healthPoints -= warriorAttack;
  },
  mageTurn: (mageAction) => {
    const mageAttack = mageAction();
    mage.damage = mageAttack;
    dragon.healthPoints -= mageAttack;
  },
  dragonTurn: (dragonAction) => {
    const dragonAttack = dragonAction();
    dragon.damage = dragonAttack;
    warrior.healthPoints -= dragonAttack;
    mage.healthPoints -= dragonAttack;
  },
  battleMembersReturn: () => battleMembers,
};
gameActions.warriorTurn(warriorDamage);
gameActions.mageTurn(mageDamage);
gameActions.dragonTurn(dragonDamage);
console.log(gameActions.battleMembersReturn());