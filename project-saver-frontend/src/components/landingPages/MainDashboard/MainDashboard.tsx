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


const MainDashboard: React.FC<MainDashboardProps> = ({ mainDashboardModel }: MainDashboardProps) => {

    const cardDetailsContainerModel: CardDetailsContainerModel = {
        username: 'Micheal'
    }

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
                    <UserWelcomePallette displayName="Micheal"></UserWelcomePallette>
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
                    <TransHistContainer />
                </div>
            </div>
        </div>
    )

}

export default MainDashboard;