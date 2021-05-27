
export interface CardModel {
    "id": number,
    "bank": string,
    "cardNumber":String,
    "dueDate":String,
    "dueAmount":number
}

export interface CardDataModel {
    "id":number,
    "userid":number,
    "number":String,
    "bank":String,
    "cvv":number,
    "dueDate":String
}

export interface scoreTemplate {
    totalScore:string
}