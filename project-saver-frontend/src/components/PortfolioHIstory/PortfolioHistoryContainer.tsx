import React from 'react'
import { useEffect } from 'react'
import PortfolioHistoryTable from './PortFolioHistoryTable'
import { useHistory } from 'react-router-dom'
import StockGraph from './StockGraph/StockGraph'
import IconInfoPallette from '../widgets/IconInfoPallete/IconInfoPallette'
import Card from '@material-ui/core/Card'
import './PortfolioHistoryContainer.css'
import EqualizerIcon from '@material-ui/icons/Equalizer';
import KeyboardBackspaceIcon from '@material-ui/icons/KeyboardBackspace';
import Button from '@material-ui/core/Button';
import { earnedIconInfoPalletteModel, investedIconInfoPalletteModel, upcomingIconInfoPalletteModel, rewardModel } from './StockGraph/GraphData'


const PortfolioHistoryContainer = () => {
    const [token, setToekn] = React.useState('eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIyIiwiaWF0IjoxNjIyODE3MTk4LCJleHAiOjE2MjM2ODExOTh9.b1tTB4hVW4vE79ei2w6ue09E0pZdvDL01PYT7hp8ZPT5i5RCXX5R9J2SdMCC0CFiJa6FTwPsOtxmKFf46BHvug')
    const graphHeight = 300;
    const graphWidth = 700;
    const history = useHistory();
    const dashBoardRouterHandler = () => {
        history.push("/newDashboard")
    }

    useEffect(() => {
        populateRewardData('http://localhost:8080/rewards/hardik', token);
    }, [])

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
                let rewardValue: rewardModel = {
                    id: data['id'],
                    nextMilestone: data['nextMilestone'],
                    totalPointsEarned: data['totalPointsEarned'],
                    userName: data['userName'],
                    totalPointsInvested: data['totalPointsInvested']
                }
                earnedIconInfoPalletteModel.mainText = rewardValue.totalPointsEarned.toString();
                investedIconInfoPalletteModel.mainText = rewardValue.totalPointsInvested.toString();
                upcomingIconInfoPalletteModel.mainText = (1000 - rewardValue.nextMilestone).toString();
            });
    }
    return (
        <div className="portfolio-history-container">
            <Button startIcon={<KeyboardBackspaceIcon />} color="primary" onClick={dashBoardRouterHandler}>Go Back</Button>
            <div className="portfolio-page-header"><EqualizerIcon color="primary" className="portfolio-page-header-icon" /><p>Portfolio</p></div>
            <p className="outset" id="border"></p>
            <div className="info-pallette">
                <div><IconInfoPallette iconInfoPalletteModel={earnedIconInfoPalletteModel}></IconInfoPallette></div>
                <div><IconInfoPallette iconInfoPalletteModel={investedIconInfoPalletteModel}></IconInfoPallette></div>
                <div><IconInfoPallette iconInfoPalletteModel={upcomingIconInfoPalletteModel}></IconInfoPallette></div>
            </div>
            <div className="graph-comp"><Card className="graph-card"><StockGraph graphWidth={graphWidth} graphHeight={graphHeight} /></Card></div>
            <p className="outset" id="border"></p>
            <div><PortfolioHistoryTable /></div>
        </div>
    )
}

export default PortfolioHistoryContainer;