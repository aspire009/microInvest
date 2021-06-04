export interface CardDetailsContainerModel {
    username: string
    payNowFunction: any
    onPaymentSuccessFunction: any

}

export interface CardDetailsContainerProps {
    cardDetailContainerModel: CardDetailsContainerModel
}