import PortfolioHistoryTable from './PortFolioHistoryTable'
import StockGraph from './StockGraph/StockGraph2'
import IconInfoPallette from '../widgets/IconInfoPallete/IconInfoPallette'
import Card from '@material-ui/core/Card'
import './PortfolioHistoryContainer.css'
import { IconInfoPalletteModel } from "../widgets/IconInfoPallete/IconInfoPalletteModel";
import RewardPointsEarnedImage from '../../assets/images/rewardPoints/rewardPointsEarned.svg'
import RewardPointsInvestedImage from '../../assets/images/rewardPoints/rewardPointsInvested.svg'
import RewardPointsUpcomingImage from '../../assets/images/rewardPoints/rewardPointsUpcoming.svg'
import { COLORS } from "../../constants/NewColorScheme";
const PortfolioHistoryContainer = () => {

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
        <div className="portfolio-history-container">
             <IconInfoPallette iconInfoPalletteModel={earnedIconInfoPalletteModel}></IconInfoPallette>
                <IconInfoPallette iconInfoPalletteModel={investedIconInfoPalletteModel}></IconInfoPallette>
                <IconInfoPallette iconInfoPalletteModel={upcomingIconInfoPalletteModel}></IconInfoPallette>
                <p className="outset"></p>
            <Card className="graph-card"><StockGraph/></Card>
            <PortfolioHistoryTable/>
        </div>
    )
}

export default PortfolioHistoryContainer;