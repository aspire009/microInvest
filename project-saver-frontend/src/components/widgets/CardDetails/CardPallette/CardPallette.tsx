import { CardDetailsRowProps } from "../CardDetailsRow/CardDetailsRowModel";
import { COLORS } from "../../../../constants/NewColorScheme";

import { getBankLogo, getCardLines, getCardBackground } from '../../../../utilities/BankUtilities'


import './CardPallette.css'

const CardPallette: React.FC<CardDetailsRowProps> = ({ cardDetailsRowModel }: CardDetailsRowProps) => {

    return (
        <div className="card-pallette-main" style={{ backgroundColor: getCardBackground(cardDetailsRowModel.bankName) }}>
            <div className="card-pallette-heading">
                <label className="card-pallette-bank-name">{cardDetailsRowModel.bankName.toUpperCase()}</label>
                <img className="card-pallette-bank-logo" src={getBankLogo(cardDetailsRowModel.bankName)} />
            </div>

            <label className="card-pallette-amount-due">{'$ ' + cardDetailsRowModel.dueAmount}</label>

            <label className="card-pallette-card-numer">{cardDetailsRowModel.cardNumber}</label>
            <label className="card-pallette-due-date">{'DUE:   ' + cardDetailsRowModel.dueDate}</label>

            <img className="card-pallette-lines" src={getCardLines(cardDetailsRowModel.bankName)} />
        </div>
    )
}

export default CardPallette;