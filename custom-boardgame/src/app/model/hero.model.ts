import {RoleEnum} from "../enum/./role.enum";
import {AffiliationEnum} from "../enum/affiliation.enum";
import {SideEnum} from "../enum/side.enum";
import {AttackRangeEnum} from "../enum/attackRange.enum";
import {HeroTypeEnum} from "../enum/hero-type.enum";
import {NumberOfDiceEnum} from "../enum/number-of-dice.enum";
import {ThrowsEnum} from "../enum/throws.enum";

export class HeroModel {
  "id": string;
  "name": string;
  "heroType": HeroTypeEnum;
  "affiliation": AffiliationEnum;
  "side": SideEnum;
  "role": RoleEnum[];
  "attackRange": AttackRangeEnum;
  "numberOfDice": NumberOfDiceEnum;
  "throws": ThrowsEnum;
}
