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

const dragonBtn = document.getElementById('dragon');
const warBtn = document.getElementById('warrior');
const magBtn = document.getElementById('mage');
const display = document.getElementById('display');

// Calcula o dano infligido pelo Dragão.
const dragonDamage = () =>
  display.textContent = Math.round(Math.random() * (dragon.strength - 15) + 15);

dragonBtn.addEventListener('click', dragonDamage);

// Calcula o dano infligido pelo Guerreiro.
const warMinDmg = warrior.strength;
const warMaxDmg = warMinDmg * warrior.weaponDmg;

const warriorDamage = () =>
display.textContent = Math.round(Math.random() * (warMaxDmg - warMinDmg) + warMinDmg);

warBtn.addEventListener('click', warriorDamage);

// Calcula o dano infligido pelo Mago e a quantidade de mana gasta.
const magMinDmg = mage.intelligence;
const magMaxDmg = magMinDmg * 2;
let currMana = mage.mana;
const magAtkResult = {
  dano: 0,
  mana: `${currMana}`,
};

function mageDamage() {
    const mageAtk = `Dano: ${magAtkResult.dano} / Mana: ${magAtkResult.mana}`;
  if (currMana < 15) {
    magAtkResult.dano = `Sem mana suficiente.`;
    display.textContent = mageAtk;
    return;
  }

  magAtkResult.dano = Math.round(
    Math.random() * (magMaxDmg - magMinDmg) + magMinDmg
  );
  currMana -= 15;
  magAtkResult.mana = `${currMana} (-15)`;
  display.textContent = mageAtk;
}

magBtn.addEventListener('click', mageDamage);
