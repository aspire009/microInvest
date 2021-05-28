export interface CardDetailsRowModel {
    id:number,
    bankName: string,
    cardNumber: string,
    dueDate: string,
    dueAmount: string,
    cardHolder:string,
    cvv:number,
    expiry:string
}

export interface CardDetailsRowProps {
    cardDetailsRowModel: CardDetailsRowModel
}