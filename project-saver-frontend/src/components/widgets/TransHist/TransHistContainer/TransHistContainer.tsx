import { TransHistContainerProps } from "./TransHistContainerModel";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons'
import { COLORS } from "../../../../constants/NewColorScheme";
import { TransHistRowModel } from "../TransHistRow/TransHistRowModel";
import TransHistRow from "../TransHistRow/TransHistRow";
import './TransHistContainer.css'
import { useEffect, useState } from "react";
import { SERVER_URL } from "../../../../constants/NetworkData";
import { formatCardNumberForCardRow } from "../../../../utilities/BankUtilities";

const TransHistContainer: React.FC<TransHistContainerProps> = ({ transHistContainerModel }: TransHistContainerProps) => {
    const transHistRowModel: TransHistRowModel = {
        cardCompany: 'Citi Bank',
        amountPaid: '5000',
        cardNumber: '1234 **** **** 6789',
        paidDate: 'May 24, 2021',
        pointsEarned: '1000',
        transactionType: 'Full Amount'
    }







    return (
        <div className="trans-hist-container-main">
            <div className="trans-hist-container-heading">
                <label className="trans-hist-container-title" style={{ color: COLORS.textPrimary }}>Transaction History</label>
                <FontAwesomeIcon className="trans-hist-container-expand" icon={faExternalLinkAlt} style={{ color: COLORS.textPrimary }} />
            </div>

            <div className="trans-hist-container-sub-heading">
                <label className="trans-hist-container-date" style={{ color: COLORS.textSecondary }}>27 May 2021</label>
            </div>

            <div className="trans-hist-container-content">
                {
                    transHistContainerModel.transactionHistoryList.map((transactionHistoryListModel, index) => {
                        return (
                            <TransHistRow transHistRowModel={transactionHistoryListModel}></TransHistRow>
                        )
                    })
                }
                <TransHistRow transHistRowModel={transHistRowModel}></TransHistRow>
            </div>
        </div>
    )
}

export default TransHistContainer;