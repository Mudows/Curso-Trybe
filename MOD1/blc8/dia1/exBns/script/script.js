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
const display = document.getElementById('display');

// Calcula o dano infligido pelo Dragão.
const dragonDamage = () =>
  Math.round(Math.random() * (dragon.strength - 15) + 15);

// Calcula o dano infligido pelo Guerreiro.
const warMinDmg = warrior.strength;
const warMaxDmg = warMinDmg * warrior.weaponDmg;

const warriorDamage = () =>
  Math.round(Math.random() * (warMaxDmg - warMinDmg) + warMinDmg);

// Calcula o dano infligido pelo Mago e a quantidade de mana gasta.
const magMinDmg = mage.intelligence;
const magMaxDmg = magMinDmg * 2;
let currMana = mage.mana;

const mageDamage = () =>
  Math.round(Math.random() * (magMaxDmg - magMinDmg) + magMinDmg);

const warTurn = (warriorDamage) => {
  warrior.damage = warriorDamage();
  dragon.healthPoints -= warrior.damage;
};

const magTurn = (mageDamage) => {
  if (mage.mana > 15) {
    mage.damage = mageDamage();
    dragon.healthPoints -= mage.damage;
    mage.mana -= 15;
    return;
  }
  mage.damage = 'Sem mana para atacar.';
  return 0;
};

const dragTurn = (dragonDamage) => {
  dragon.damage = dragonDamage();
  warrior.healthPoints -= dragon.damage;
  mage.healthPoints -= dragon.damage;
};

const turnResult = () => {
  if (warrior.healthPoints <= 0) delete battleMembers.warrior;
  if (mage.healthPoints <= 0) delete battleMembers.mage;
  if (dragon.healthPoints <= 0) delete battleMembers.dragon;
  console.log(battleMembers);
  display.innerHTML = `${Object.entries(battleMembers)}`;
};

document.getElementById('turn').addEventListener('click', () => {
  const gameActions = {
    // Crie as HOFs neste objeto.
    warTurn: warTurn(warriorDamage),
    magTurn: magTurn(mageDamage),
    dragTurn: dragTurn(dragonDamage),
    turnResult: turnResult(),
  };
});
