export interface TransHistRowModel {
    cardCompany: String;
    cardNumber: string;
    amountPaid: String;
    paidDate: String;
    transactionType: String;
    pointsEarned: String;
}

export interface TransHistRowProps {
    transHistRowModel: TransHistRowModel
}
