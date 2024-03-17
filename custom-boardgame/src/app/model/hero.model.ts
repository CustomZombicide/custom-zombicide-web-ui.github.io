import {RolEnum} from "../enum/rol.enum";
import {AffiliationEnum} from "../enum/affiliation.enum";
import {SideEnum} from "../enum/side.enum";
import {AttackRangeEnum} from "../enum/attackRange.enum";
import {HeroTypeEnum} from "../enum/hero-type.enum";

export class HeroModel {
  "id": string;
  "name": string;
  "heroType": HeroTypeEnum;
  "affiliation": AffiliationEnum;
  "side": SideEnum;
  "rol": RolEnum[];
  "attackRange": AttackRangeEnum;
}
