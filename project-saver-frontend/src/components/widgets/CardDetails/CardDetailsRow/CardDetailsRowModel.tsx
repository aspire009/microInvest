export interface CardDetailsRowModel {
    id: number,
    bankName: string,
    cardNumber: string,
    dueDate: string,
    dueAmount: string
}

export interface CardDetailsRowProps {
    cardDetailsRowModel: CardDetailsRowModel
}