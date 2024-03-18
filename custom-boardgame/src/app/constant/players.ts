import {RoleEnum} from "../enum/./role.enum";
import {HeroModel} from "../model/hero.model";
import {AffiliationEnum} from "../enum/affiliation.enum";
import {SideEnum} from "../enum/side.enum";
import {AttackRangeEnum} from "../enum/attackRange.enum";
import {HeroTypeEnum} from "../enum/hero-type.enum";
import {NumberOfDiceEnum} from "../enum/number-of-dice.enum";
import {ThrowsEnum} from "../enum/throws.enum";

export const Players: HeroModel[] = [
  {
    "id": "17_6Kmol4HJh3bW_RyOBFmVkqI894KRTW",
    "heroType": HeroTypeEnum.ZOMBIE,
    "name": "Iceman",
    "affiliation": AffiliationEnum.XMEN,
    "side": SideEnum.HERO,
    "attackRange": AttackRangeEnum.RANGE_0_1,
    "role": [ RoleEnum.DMG, RoleEnum.SPEED, RoleEnum.CC ],
    "numberOfDice": NumberOfDiceEnum.DICE_2,
    "throws": ThrowsEnum.THROWS_3
  },
  {
    "id": "1UXLi5AVp2QuqdbQR82zyX6s5uHm8vOwc",
    "heroType": HeroTypeEnum.ZOMBIE,
    "name": "Cíclope",
    "affiliation": AffiliationEnum.XMEN,
    "side": SideEnum.HERO,
    "attackRange": AttackRangeEnum.RANGE_0_1,
    "role": [ RoleEnum.DMG,RoleEnum.UTILITY ],
    "numberOfDice": NumberOfDiceEnum.DICE_2,
    "throws": ThrowsEnum.THROWS_3
  },
  {
    "id": "1QBwWSy6u1c8GkkWBKSjpbzVW2MA9rvyZ",
    "heroType": HeroTypeEnum.ZOMBIE,
    "name": "Dark Phoenix",
    "affiliation": AffiliationEnum.XMEN,
    "side": SideEnum.ANTIHERO,
    "attackRange": AttackRangeEnum.RANGE_0_1,
    "role": [ RoleEnum.DMG, RoleEnum.UTILITY ],
    "numberOfDice": NumberOfDiceEnum.DICE_2,
    "throws": ThrowsEnum.THROWS_3
  },
  {
    "id": "1sHMmpL1aN3DfpkECWlHbSs65vG5OAOmM",
    "heroType": HeroTypeEnum.ZOMBIE,
    "name": "Sabertooth",
    "affiliation": AffiliationEnum.XMEN,
    "side": SideEnum.VILLAIN,
    "attackRange": AttackRangeEnum.RANGE_0,
    "role": [ RoleEnum.DMG ],
    "numberOfDice": NumberOfDiceEnum.DICE_3,
    "throws": ThrowsEnum.THROWS_4
  },
  {
    "id": "1wlyaW5i4Vb202lv-ZWlhg2NIJAXKX-kJ",
    "heroType": HeroTypeEnum.SURVIVOR,
    "name": "Storm",
    "affiliation": AffiliationEnum.XMEN,
    "side": SideEnum.HERO,
    "attackRange": AttackRangeEnum.RANGE_0_1,
    "role": [ RoleEnum.DMG, RoleEnum.UTILITY ],
    "numberOfDice": NumberOfDiceEnum.DICE_2,
    "throws": ThrowsEnum.THROWS_3
  },
  {
    "id": "1TflW7sVCFVGGktNr3VcDInENdMQiwh0Y",
    "heroType": HeroTypeEnum.SURVIVOR,
    "name": "Magneto",
    "affiliation": AffiliationEnum.XMEN,
    "side": SideEnum.ANTIHERO,
    "attackRange": AttackRangeEnum.RANGE_0_1,
    "role": [ RoleEnum.DMG, RoleEnum.UTILITY ],
    "numberOfDice": NumberOfDiceEnum.DICE_3,
    "throws": ThrowsEnum.THROWS_4
  },
  {
    "id": "10YDTE2-KNV3WEg0J4GWb0jsNtt3S5Zyq",
    "heroType": HeroTypeEnum.SURVIVOR,
    "name": "Wolverine",
    "affiliation": AffiliationEnum.XMEN,
    "side": SideEnum.ANTIHERO,
    "attackRange": AttackRangeEnum.RANGE_0,
    "role": [ RoleEnum.DMG, RoleEnum.TANK ],
    "numberOfDice": NumberOfDiceEnum.DICE_3,
    "throws": ThrowsEnum.THROWS_4
  },
  {
    "id": "1zmDLBgIZ6sIAre3PxSUS6JuPIFMS-65C",
    "heroType": HeroTypeEnum.SURVIVOR,
    "name": "Mystique",
    "affiliation": AffiliationEnum.XMEN,
    "side": SideEnum.ANTIHERO,
    "attackRange": AttackRangeEnum.RANGE_0_1,
    "role": [ RoleEnum.DMG, RoleEnum.UTILITY ],
    "numberOfDice": NumberOfDiceEnum.DICE_3,
    "throws": ThrowsEnum.THROWS_4
  },
  {
    "id": "1_IxQO7_8dOu29BK0ruHJasEojJblAKd_",
    "heroType": HeroTypeEnum.SURVIVOR,
    "name": "Colossus",
    "affiliation": AffiliationEnum.XMEN,
    "side": SideEnum.HERO,
    "attackRange": AttackRangeEnum.RANGE_0,
    "role": [ RoleEnum.DMG, RoleEnum.TANK ],
    "numberOfDice": NumberOfDiceEnum.DICE_2,
    "throws": ThrowsEnum.THROWS_3
  },
  {
    "id": "12kx9WGx28Mqjot6EQEr5D2W-SRgHx1OL",
    "heroType": HeroTypeEnum.SURVIVOR,
    "name": "Rogue",
    "affiliation": AffiliationEnum.XMEN,
    "side": SideEnum.HERO,
    "attackRange": AttackRangeEnum.RANGE_0,
    "role": [ RoleEnum.DMG, RoleEnum.UTILITY ],
    "numberOfDice": NumberOfDiceEnum.DICE_2,
    "throws": ThrowsEnum.THROWS_3
  },
  {
    "id": "1eQobDvusdD1JLBq06r-4h1eoHhJij56J",
    "heroType": HeroTypeEnum.ZOMBIE,
    "name": "Psylocke",
    "affiliation": AffiliationEnum.XMEN,
    "side": SideEnum.ANTIHERO,
    "attackRange": AttackRangeEnum.RANGE_0,
    "role": [ RoleEnum.DMG, RoleEnum.UTILITY ],
    "numberOfDice": NumberOfDiceEnum.DICE_2,
    "throws": ThrowsEnum.THROWS_3
  },
  {
    "id": "1AwyM0yLZbJ7RL09QF7VchZHvHbj9rI0L",
    "heroType": HeroTypeEnum.ZOMBIE,
    "name": "Juggernaut",
    "affiliation": AffiliationEnum.XMEN,
    "side": SideEnum.ANTIHERO,
    "attackRange": AttackRangeEnum.RANGE_0,
    "role": [ RoleEnum.DMG, RoleEnum.TANK],
    "numberOfDice": NumberOfDiceEnum.DICE_2,
    "throws": ThrowsEnum.THROWS_4
  }
]


