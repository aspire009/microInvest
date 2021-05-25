import React from "react";
import { TransactionHistoryModel, TransactionHistoryProps } from "./TransactionHistoryModel";
import CitiLogo from '../../../assets/images/bankLogos/citi.png'
import InfoPair from "../InfoPair/InfoPair";
import './TransactionHistory.css'
import { COLORS } from "../../../constants/ColorScheme";

const TransactionHistoryRow: React.FC<TransactionHistoryProps> = ({ transactionHistoryModel }: TransactionHistoryProps) => {
    return (
        <div className="card-dashboard-transaction-history-row-main">
            <div className="card-dashboard-transaction-history-row-container">
                <img className="card-dashboard-transaction-history-bank-img" src={CitiLogo} />
                <InfoPair value1={transactionHistoryModel.cardCompany} value2={transactionHistoryModel.cardNumber} />
                <InfoPair value1="Amount Paid" value2={'$' + transactionHistoryModel.amountPaid} textColor2={COLORS.blueLight} />
                <InfoPair value1="Paid Date" value2={transactionHistoryModel.paidDate} />
                <InfoPair value1="Transaction Type" value2={transactionHistoryModel.transactionType} />
                <InfoPair value1="Reward Points Earned" value2={transactionHistoryModel.pointsEarned} textColor2={COLORS.green} />
            </div>
            <hr className="card-dashboard-transaction-history-line-grey" />
        </div>
    )
}

export default TransactionHistoryRow;