import { CardDetailsRowModel, CardDetailsRowProps } from "../CardDetailsRow/CardDetailsRowModel";
import { COLORS } from "../../../../constants/NewColorScheme";

import { getBankLogo, getCardLines, getCardBackground } from '../../../../utilities/BankUtilities'


import './CardPallette.css'

const CardPallette = (props:{ cardDetailsRowModel:CardDetailsRowModel}) => {

    return (
        props.cardDetailsRowModel ? 
       <div className="card-pallette-main" style={{ backgroundColor: getCardBackground(props.cardDetailsRowModel.bankName) }}>
            <div className="card-pallette-heading">
                <label className="card-pallette-bank-name">{props.cardDetailsRowModel.bankName.toUpperCase()}</label>
                <img className="card-pallette-bank-logo" src={getBankLogo(props.cardDetailsRowModel.bankName)} />
            </div>

            <label className="card-pallette-amount-due">{'$ ' + props.cardDetailsRowModel.dueAmount}</label>

            <label className="card-pallette-card-numer">{props.cardDetailsRowModel.cardNumber}</label>
            <label className="card-pallette-due-date">{'DUE:   ' + props.cardDetailsRowModel.dueDate}</label>

            <img className="card-pallette-lines" src={getCardLines(props.cardDetailsRowModel.bankName)} />
        </div> : null
    )
}

export default CardPallette;