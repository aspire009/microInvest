export interface TransHistContainerModel {
    username: String;
}

export interface TransHistContainerProps {
    transHistContainerModel: TransHistContainerModel
}

export interface TransactionModel {
    id: number,
    cardNumber: string,
    amountPaid: number,
    paymentDate: string,
    transactionType: string,
    rewardsEarned: number,
    status: string
}