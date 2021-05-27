import { CardDetailsRowProps } from "./CardDetailsRowModel";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMinusCircle } from '@fortawesome/free-solid-svg-icons'
import { COLORS } from "../../../../constants/NewColorScheme";
import './CardDetailsRow.css'
import { getBankLogo, getCardLines, getCardBackground } from '../../../../utilities/BankUtilities'

const CardDetailsRow: React.FC<CardDetailsRowProps> = ({ cardDetailsRowModel }: CardDetailsRowProps) => {
    return (
        <div className="card-details-row-main">
            <img className="card-details-row-bank-image" src={getBankLogo(cardDetailsRowModel.bankName)} />

            <div className="card-details-row-col-1">
                <label className="card-details-row-card-number" style={{ color: COLORS.textPrimary }}>{cardDetailsRowModel.cardNumber}</label>
                <div className="card-details-row-due">
                    <label className="card-details-row-due-amount" style={{ color: COLORS.textWarn }}>{'$' + cardDetailsRowModel.dueAmount}</label>
                    <label className="card-details-row-due-date" style={{ color: COLORS.black }}>{' due on ' + cardDetailsRowModel.dueDate}</label>
                </div>
            </div>
            <div className="card-details-row-remove">
                <FontAwesomeIcon icon={faMinusCircle} style={{ color: COLORS.textSecondary }} />
            </div>
        </div>
    )

    // return (
    //     <div className="card-details-row-main">
    //         <img className="card-details-row-bank-img" src={CitiBankLogo} />
    //         <div className="card-details-row-content">
    //             <div className="card-details-row-row-1">
    //                 <label className="card-details-row-due-amount-static" style={{ color: COLORS.textSecondary }}>Card Number</label>
    //                 <label className="card-details-row-card-number" style={{ color: COLORS.textPrimary }}>{cardDetailsRowModel.cardNumber}</label>
    //             </div>

    //             <div className="card-details-row-row-1">
    //                 <label className="card-details-row-due-amount-static" style={{ color: COLORS.textSecondary }}>Amount Due</label>
    //                 <label className="card-details-row-due-amount" style={{ color: COLORS.textWarn }}>{'$' + cardDetailsRowModel.dueAmount}</label>
    //             </div>

    //             <div className="card-details-row-row-2">
    //                 <label className="card-details-row-due-date-static" style={{ color: COLORS.textSecondary }}>Due Date</label>
    //                 <label className="card-details-row-due-date" style={{ color: COLORS.black }}>{cardDetailsRowModel.dueDate}</label>

    //             </div>
    //         </div>
    //         <FontAwesomeIcon className="trans-hist-container-expand" icon={faMinusCircle} style={{ color: COLORS.textSecondary }} />
    //     </div>
    // )
}

export default CardDetailsRow;