import RewardPointsContainer from "../../widgets/RewardPointsContainer/RewardPointsContainer";
import { RewardPointsContainerModel } from "../../widgets/RewardPointsContainer/RewardPointsContainerModel";
import TransactionHistoryContainer from "../../widgets/TransactionHistory/TransactionHistoryContainer/TransactionHistoryContainer";
import { TransactionHistoryContainerModel } from "../../widgets/TransactionHistory/TransactionHistoryContainer/TransactionHistoryContainerModel";
import { MainDashboardProps } from "./MainDashboardModel";
import './MainDashboard.css'
import { CardDetailsContainerModel } from "../../widgets/CardDetails/CardDetailsContainer/CardDetailsContainerModel";
import CardDetailsContainer from "../../widgets/CardDetails/CardDetailsContainer/CardDetailsContainer";
import TransHistContainer from "../../widgets/TransHist/TransHistContainer/TransHistContainer";
import IconInfoPallette from "../../widgets/IconInfoPallete/IconInfoPallette";
import { COLORS } from "../../../constants/NewColorScheme";
import { IconInfoPalletteModel } from "../../widgets/IconInfoPallete/IconInfoPalletteModel";
import RewardPointsEarnedImage from '../../../assets/images/rewardPoints/rewardPointsEarned.svg'
import RewardPointsInvestedImage from '../../../assets/images/rewardPoints/rewardPointsInvested.svg'
import RewardPointsUpcomingImage from '../../../assets/images/rewardPoints/rewardPointsUpcoming.svg'
import GraphStaticImage from '../../../assets/images/mainDashboard/graphStatic.png'
import UserWelcomePallette from "./UserWelcomePallette/UserWelcomePallette";
import NumberInfoPallette from "./NumberInfoPallette/NumberInfoPallette";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons'
import { displayRazorpay } from '../../Payment/acceptPaymentRazorpay'
import { TransHistRowModel } from "../../widgets/TransHist/TransHistRow/TransHistRowModel";
import { formatCardNumberForCardRow } from "../../../utilities/BankUtilities";
import { useEffect, useState } from "react";
import { SERVER_URL } from "../../../constants/NetworkData";
import { TransHistContainerModel } from "../../widgets/TransHist/TransHistContainer/TransHistContainerModel";


const MainDashboard: React.FC<MainDashboardProps> = ({ mainDashboardModel }: MainDashboardProps) => {
    const username = 'hardik'
    const transactionHistoryListUrl = SERVER_URL + '/transaction/' + username;
    const addTransactionUrl = SERVER_URL + '/transaction';
    const token = 'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIyIiwiaWF0IjoxNjIyODAxMTA0LCJleHAiOjE2MjM2NjUxMDR9.jtuj6YRTFmj5rSGAiiSU2NZ-yrqLozwbt9-zHc1Jo_qOlAoT4IxO-R5dRXZ0-Ttf9wxirj-vbEdC8gYR0VEoyg'

    const [transactionHistoryList, setTransactionHistoryList] = useState<TransHistRowModel[]>([]);
    const [transHistContainerModel, setTransHistContainerModel] = useState<TransHistContainerModel>({
        username: username,
        transactionHistoryList: transactionHistoryList
    })

    const earnedIconInfoPalletteModel: IconInfoPalletteModel = {
        backgroundColor: '#f38162',
        iconImage: RewardPointsEarnedImage,
        iconPosition: 'left',
        mainText: '24,700',
        subText: 'Points Earned',
        mainTextColor: '#85291c'
    }

    const investedIconInfoPalletteModel: IconInfoPalletteModel = {
        backgroundColor: COLORS.blueLight,
        iconImage: RewardPointsInvestedImage,
        iconPosition: 'left',
        mainText: '22,300',
        subText: 'Points Invested',
        mainTextColor: '#515B9E'
    }

    const upcomingIconInfoPalletteModel: IconInfoPalletteModel = {
        backgroundColor: COLORS.blueLight,
        iconImage: RewardPointsUpcomingImage,
        iconPosition: 'left',
        mainText: '5,000',
        subText: 'Upcoming Milestone',
        mainTextColor: '#515B9E'
    }

    const addTransactionRequestOptions = {
        method: 'POST',
        headers: {
            "Authorization": `Bearer ${token}`,
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: ''
    }

    const makeTransactionHistoryPostRequest = (transHistRowModel: TransHistRowModel) => {
        addTransactionRequestOptions.body = JSON.stringify({
            "cardNumber": transHistRowModel.cardNumber,
            "amountPaid": transHistRowModel.amountPaid,
            "paymentDate": transHistRowModel.paidDate,
            "transactionType": transHistRowModel.transactionType,
            "rewardsEarned": transHistRowModel.pointsEarned
        })

        fetch(addTransactionUrl, addTransactionRequestOptions)
            .then(response => response.json());
    }


    const onPaymentSuccess = (cardNumber, amountPaid, pointsEarned, paymentType, cardCompany) => {
        console.log('fffffffffffff')
        const transHistRowModel: TransHistRowModel = {
            cardCompany: cardCompany,
            amountPaid: amountPaid,
            cardNumber: cardNumber,
            paidDate: '2021-11-14',
            pointsEarned: pointsEarned,
            transactionType: paymentType
        }

        var transHistRowModelForList = transHistRowModel;
        transHistRowModelForList.cardNumber = formatCardNumberForCardRow(transHistRowModel.cardNumber)
        addToTransactionHistoryList(transHistRowModel)
        makeTransactionHistoryPostRequest(transHistRowModel)
    }

    const cardDetailsContainerModel: CardDetailsContainerModel = {
        username: 'Micheal',
        payNowFunction: displayRazorpay,
        onPaymentSuccessFunction: onPaymentSuccess
    }

    const getFormattedDate = (dateInput: string) => {
        const monthNames = ["January", "Feburary", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        const dateString = monthNames[parseInt(dateInput.substr(5, 7)) - 1] + ' ' + dateInput.substr(8, 10) + ', ' + dateInput.substr(0, 4)
        return dateString;
    }

    const populatetransactionHistoryList = async (url: string, token: string) => {
        let fetchedTransactionHistoryList: TransHistRowModel[] = [];
        await fetch(url, {
            method: "GET",
            headers: {
                "Authorization": `Bearer ${token}`,
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        }).
            then((resp) => resp.json()).
            then((data) => {
                for (var object in data) {
                    let transactionHistoryListItem: TransHistRowModel = {
                        cardCompany: 'Citi Bank',
                        amountPaid: data[object]['amountPaid'],
                        cardNumber: formatCardNumberForCardRow(data[object]['cardNumber']),
                        paidDate: getFormattedDate(data[object]['paymentDate']),
                        pointsEarned: data[object]['rewardsEarned'],
                        transactionType: 'Full Amount'
                    }
                    fetchedTransactionHistoryList.push(transactionHistoryListItem);
                }
                setTransactionHistoryList(fetchedTransactionHistoryList)
            });
    }

    useEffect(() => {
        populatetransactionHistoryList(transactionHistoryListUrl, token);
        console.log('aaa', transactionHistoryList)
    }, []);

    useEffect(() => {
        setTransHistContainerModel({
            username: username,
            transactionHistoryList: transactionHistoryList
        })
    }, [transactionHistoryList]);

    const addToTransactionHistoryList = (transHistRowItem: TransHistRowModel) => {
        const updatedTransactionHistoryList = transactionHistoryList;
        updatedTransactionHistoryList.unshift(transHistRowItem);
        setTransactionHistoryList(updatedTransactionHistoryList);
        setTransHistContainerModel({
            username: username,
            transactionHistoryList: transactionHistoryList
        })
    }



    return (
        <div className="main-dashboard">
            <div className="side-bar"></div>

            <div className="main-dashboard-col-1">
                <CardDetailsContainer cardDetailContainerModel={cardDetailsContainerModel} />
                <div className="main-dashboard-credits">
                    <label>Made with <FontAwesomeIcon className="trans-hist-container-expand" icon={faHeart} style={{ color: '#C51104' }} /> at HashedIn</label>
                </div>
            </div>

            <div className="main-dashboard-col-2">
                <div className="main-dashboard-user-welcome-wrapper">
                    <UserWelcomePallette displayName={username}></UserWelcomePallette>
                </div>

                <div className="main-dashboard-col-2-row-2">
                    <NumberInfoPallette number="02" text="Card's Payment Due" backgroundColor={COLORS.textPrimaryVeryLight} />
                    <NumberInfoPallette number="32%" text="Investment Profit" backgroundColor={COLORS.textPrimaryVeryLight} />
                </div>
                <IconInfoPallette iconInfoPalletteModel={earnedIconInfoPalletteModel}></IconInfoPallette>
                <IconInfoPallette iconInfoPalletteModel={investedIconInfoPalletteModel}></IconInfoPallette>
                <IconInfoPallette iconInfoPalletteModel={upcomingIconInfoPalletteModel}></IconInfoPallette>
            </div>

            <div className="main-dashboard-col-3">
                <label className="trans-hist-container-title" style={{ color: COLORS.textPrimary }}>Portfolio Performance</label>
                <img src={GraphStaticImage} />
                <div className="main-dashboard-trans-hist-wrapper">
                    <TransHistContainer transHistContainerModel={transHistContainerModel} />
                </div>
            </div>
        </div>
    )

}

export default MainDashboard;