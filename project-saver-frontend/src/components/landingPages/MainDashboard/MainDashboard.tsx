import RewardPointsContainer from "../../widgets/RewardPointsContainer/RewardPointsContainer";
import { RewardPointsContainerModel } from "../../widgets/RewardPointsContainer/RewardPointsContainerModel";
import TransactionHistoryContainer from "../../widgets/TransactionHistory/TransactionHistoryContainer/TransactionHistoryContainer";
import { TransactionHistoryContainerModel } from "../../widgets/TransactionHistory/TransactionHistoryContainer/TransactionHistoryContainerModel";
import { MainDashboardProps } from "./MainDashboardModel";
import './MainDashboard.css'

const MainDashboard: React.FC<MainDashboardProps> = ({ mainDashboardModel }: MainDashboardProps) => {

    const transactionHistoryContainerModel: TransactionHistoryContainerModel = {
        username: 'helllo'
    }

    const rewardPointsContainerModel: RewardPointsContainerModel = {
        amountLeft: '1200',
        pointsEarned: '25,700',
        pointsInvested: '24,700',
        upcomingMilestone: '5000',
        displayName: 'Micheal'
    }

    return (
        <div className="main-dashboard">
            {/* <CreditCardsContainer /> */}
            <RewardPointsContainer rewardPointsContainerModel={rewardPointsContainerModel} />
            <TransactionHistoryContainer transactionHistoryContainerModel={transactionHistoryContainerModel}></TransactionHistoryContainer>

        </div>
    )

}

export default MainDashboard;