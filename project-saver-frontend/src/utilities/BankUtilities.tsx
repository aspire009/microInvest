import CitiBankLogo from '../assets/images/bankLogos/citi.png'
import ChaseBankLogo from '../assets/images/bankLogos/chase.jpg'
import BoaBankLogo from '../assets/images/bankLogos/boa.png'
import WellsBankLogo from '../assets/images/bankLogos/wells.jpg'

import CitiCardLines from '../assets/images/cardLines/citi.png'
import ChaseCardLines from '../assets/images/cardLines/chase.png'
import BoaCardLines from '../assets/images/cardLines/boa.png'
import WellsCardLines from '../assets/images/cardLines/wells.png'
import { COLORS } from '../constants/NewColorScheme'

export const getBankLogo = (bankName: string) => {
    if (bankName == 'Citi Bank') return CitiBankLogo;
    if (bankName == 'Chase Bank') return ChaseBankLogo;
    if (bankName == 'Wells Fargo') return WellsBankLogo;
    if (bankName == 'Bank of America') return BoaBankLogo;
}

export const getCardLines = (bankName: string) => {
    if (bankName == 'Citi Bank') return CitiCardLines;
    if (bankName == 'Chase Bank') return ChaseCardLines;
    if (bankName == 'Wells Fargo') return WellsCardLines;
    if (bankName == 'Bank of America') return BoaCardLines;
}

export const getCardBackground = (bankName: string) => {
    if (bankName == 'Citi Bank') return COLORS.citiLogoColor;
    if (bankName == 'Chase Bank') return COLORS.chaseLogoColor;
    if (bankName == 'Wells Fargo') return COLORS.wellsLogoColor;
    if (bankName == 'Bank of America') return COLORS.boaLogoColor;
}