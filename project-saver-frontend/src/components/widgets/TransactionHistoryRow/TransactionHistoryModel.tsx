export interface TransactionHistoryModel {
    cardCompany: String;
    cardNumber: String;
    amountPaid: String;
    paidDate: String;
    transactionType: String;
    pointsEarned: String;
}

export interface TransactionHistoryProps {
    transactionHistoryModel: TransactionHistoryModel
}
