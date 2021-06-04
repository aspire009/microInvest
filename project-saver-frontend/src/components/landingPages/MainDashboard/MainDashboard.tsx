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
    const [username, setUsername] = useState(localStorage.getItem('userName'));
    const [token, setToken] = useState(localStorage.getItem('accessToken'));
    const transactionHistoryListUrl = SERVER_URL + '/transaction/' + username;
    const addTransactionUrl = SERVER_URL + '/transaction';


    const [transactionHistoryList, setTransactionHistoryList] = useState<TransHistRowModel[]>([]);
    const [transHistContainerModel, setTransHistContainerModel] = useState<TransHistContainerModel>({
        username: username,
        transactionHistoryList: transactionHistoryList
    })

    var [earnedIconInfoPalletteModel, setEarnedIconInfoPalletteModel] = useState<IconInfoPalletteModel>({
        backgroundColor: '#f38162',
        iconImage: RewardPointsEarnedImage,
        iconPosition: 'left',
        mainText: '24,700',
        subText: 'Points Earned',
        mainTextColor: '#85291c'
    })

    var [investedIconInfoPalletteModel, setInvestedIconInfoPalletteModel] = useState<IconInfoPalletteModel>({
        backgroundColor: COLORS.blueLight,
        iconImage: RewardPointsInvestedImage,
        iconPosition: 'left',
        mainText: '22,300',
        subText: 'Points Invested',
        mainTextColor: '#515B9E'
    })

    const [upcomingIconInfoPalletteModel, setUpcomingIconInfoPalletteModel] = useState<IconInfoPalletteModel>({
        backgroundColor: COLORS.blueLight,
        iconImage: RewardPointsUpcomingImage,
        iconPosition: 'left',
        mainText: '5,000',
        subText: 'Upcoming Milestone',
        mainTextColor: '#515B9E'
    })

    useEffect(() => {
        populateRewardData(SERVER_URL + '/rewards/' + username, token);
    }, [])

    useEffect(() => {
        console.log('updating sssssssssssssssssssss')
        populateRewardData(SERVER_URL + '/rewards/' + username, token);
    }, [transactionHistoryList.length])

    const updateRewardValues = (earnedPoints, investedPoints, upcomingMilestone) => {
        let updatedEarnedIconInfoPalletteModel = earnedIconInfoPalletteModel
        updatedEarnedIconInfoPalletteModel.mainText = earnedPoints;
        setEarnedIconInfoPalletteModel(updatedEarnedIconInfoPalletteModel)

        let updatedinvestedIconInfoPalletteModel = investedIconInfoPalletteModel
        updatedinvestedIconInfoPalletteModel.mainText = investedPoints;
        setInvestedIconInfoPalletteModel(updatedinvestedIconInfoPalletteModel)

        let updatedUpcomingIconInfoPalletteModel = { ...upcomingIconInfoPalletteModel }
        updatedUpcomingIconInfoPalletteModel.mainText = upcomingMilestone;
        setUpcomingIconInfoPalletteModel(updatedUpcomingIconInfoPalletteModel)
    }

    const populateRewardData = async (url: string, token: string) => {
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
                let rewardValue: any = {
                    id: data['id'],
                    nextMilestone: data['nextMilestone'],
                    totalPointsEarned: data['totalPointsEarned'],
                    userName: data['userName'],
                    totalPointsInvested: data['totalPointsInvested']
                }
                updateRewardValues(rewardValue.totalPointsEarned.toString(), rewardValue.totalPointsInvested.toString(), (1000 - rewardValue.nextMilestone).toString());
            });
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
            .then(response => response.json())
            .then((data) => {
                const transHistRowModelForList: TransHistRowModel = {
                    cardCompany: transHistRowModel.cardCompany,
                    amountPaid: data.amountPaid,
                    cardNumber: data.cardNumber,
                    paidDate: data.paymentDate,
                    pointsEarned: data.rewardsEarned,
                    transactionType: data.transactionType
                }
                transHistRowModelForList.cardNumber = formatCardNumberForCardRow(transHistRowModel.cardNumber)
                addToTransactionHistoryList(transHistRowModel)
                updateCardList();
                populateRewardData(SERVER_URL + '/rewards/' + username, token);
            });
    }


    const onPaymentSuccess = (cardNumber, amountPaid, pointsEarned, paymentType, cardCompany) => {
        console.log('fffffffffffff', cardNumber)
        const transHistRowModel: TransHistRowModel = {
            cardCompany: cardCompany,
            amountPaid: amountPaid,
            cardNumber: cardNumber,
            paidDate: new Date().getFullYear() + '-' + new Date().getMonth() + '-' + new Date().getDay(),
            pointsEarned: pointsEarned,
            transactionType: paymentType
        }
        makeTransactionHistoryPostRequest(transHistRowModel)
    }

    var [cardDetailsContainerModel, setCardDetailsContainerModel] = useState<CardDetailsContainerModel>({
        username: 'Micheal',
        payNowFunction: displayRazorpay,
        onPaymentSuccessFunction: onPaymentSuccess,
        reload: 0
    })

    var updateCardList = () => {
        var updatedCardDetailsContainerModel = { ...cardDetailsContainerModel, reload: new Date().getMilliseconds() }
        setCardDetailsContainerModel(updatedCardDetailsContainerModel)
    }

    const getFormattedDate = (dateInput: string) => {
        const monthNames = ["January", "Feburary", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        const dateString = dateInput === undefined ? "" : monthNames[parseInt(dateInput.substr(5, 7)) - 1] + ' ' + dateInput.substr(8, 10) + ', ' + dateInput.substr(0, 4)
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
                <div className="main-dashboard-credits" onClick={() => updateCardList()}>
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