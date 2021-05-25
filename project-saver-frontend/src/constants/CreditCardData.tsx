import { CardModel } from '../components/widgets/models/CardModel'

export const CARDS: CardModel[] = [{ id: 1, cardNumber: "12XX-XXXX-XX08", bank: "HDFC", dueDate: "25-04-2021", dueAmount: 45 },
{ id: 2, bank: "SBI", cardNumber: "17XX-XXXX-XX62", dueDate: "16-04-2021", dueAmount: 145 },
{ id: 3, bank: "Bank of Baroda", cardNumber: "18XX-XXXX-XX85", dueDate: "25-04-2021", dueAmount: 127 },
{ id: 4, bank: "Bank of Baroda", cardNumber: "18XX-XXXX-XX85", dueDate: "25-04-2021", dueAmount: 127 }];

export const BANK_OF_BARODA = "Bank of Baroda";
export const SBI = 'SBI';
export const HDFC = 'HDFC'

export const DUE_DATE = 'Due Date';
export const DUE_AMOUNT = 'Due Amount';
