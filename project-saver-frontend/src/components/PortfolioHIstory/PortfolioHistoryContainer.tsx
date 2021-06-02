import PortfolioHistoryTable from './PortFolioHistoryTable'
import {useHistory} from 'react-router-dom'
import StockGraph from './StockGraph/StockGraph'
import IconInfoPallette from '../widgets/IconInfoPallete/IconInfoPallette'
import Card from '@material-ui/core/Card'
import './PortfolioHistoryContainer.css'
import EqualizerIcon from '@material-ui/icons/Equalizer';
import KeyboardBackspaceIcon from '@material-ui/icons/KeyboardBackspace';
import Button from '@material-ui/core/Button';
import { earnedIconInfoPalletteModel, investedIconInfoPalletteModel, upcomingIconInfoPalletteModel } from './StockGraph/GraphData'


const PortfolioHistoryContainer = () => {
    const history = useHistory();
    const dashBoardRouterHandler = () => {
        history.push("/newDashboard")
    }
    return (
        <div className="portfolio-history-container">
            <Button startIcon={<KeyboardBackspaceIcon/>} color="primary" onClick={dashBoardRouterHandler}>Go Back</Button>
            <div className="portfolio-page-header"><EqualizerIcon color="primary" className="portfolio-page-header-icon"/><p>Portfolio</p></div>
            <p className="outset" id="border"></p>
            <div className="info-pallette">
                <div><IconInfoPallette iconInfoPalletteModel={earnedIconInfoPalletteModel}></IconInfoPallette></div>
                <div><IconInfoPallette iconInfoPalletteModel={investedIconInfoPalletteModel}></IconInfoPallette></div>
                <div><IconInfoPallette iconInfoPalletteModel={upcomingIconInfoPalletteModel}></IconInfoPallette></div>
            </div>
            <p className="outset" id="border"></p>
            <div className="graph-comp"><Card className="graph-card"><StockGraph /></Card></div>
            <p className="outset" id="border"></p>
            <div><PortfolioHistoryTable /></div>
        </div>
    )
}

export default PortfolioHistoryContainer;