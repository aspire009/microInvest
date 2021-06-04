import React from 'react'
import { useEffect } from 'react'
import './portfolioHIstoryTable.css';
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';
import Button from '@material-ui/core/Button'
import { makeStyles } from '@material-ui/core/styles';
import ListIcon from '@material-ui/icons/List';
import PageButton from './PaginationButton'
import Loader from "react-loader-spinner";
import { investmentHistory, emptyPortfolioRow, InvestmentHistoryModel } from './PortfolioData'


const PortFolioHistoryTable = () => {
    const windowSize = 5;
    const historyUrl = 'http://localhost:8080/investment/all/vaibhav';
    const token = 'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIxIiwiaWF0IjoxNjIyNzEyNzA2LCJleHAiOjE2MjM1NzY3MDZ9.f34fhqQBJoSvFYZjp-CUysxb_emg9hhkYM21oDHU0-LYIfA5ko00nELyl0sO6bQ5WYH0iIt-OLJcTJdXUXzs9Q'
    const [investmentHistoryData,setInvestementHistoryData] = React.useState<InvestmentHistoryModel[]>([]);
    const [pages, setPages] = React.useState(1);
    const [currentPage, setCurrentPage] = React.useState(1);
    const [windowShowing, setWindowShowing] = React.useState({
        startIndex: 0,
        endIndex: 5
    });
    const  [loading, setLoading] = React.useState(true);
    const [currentWindowData, setCurrentWindowData] = React.useState(investmentHistory.slice(windowShowing.startIndex, windowShowing.endIndex));

    useEffect(() => {
        setLoading(true);
        populateHistory(historyUrl, token);
        addPaddingToData();
        setWindowShowing({
            startIndex: 0,
        endIndex: 5
        })
        console.log("investmentHistoryData: ", investmentHistoryData);
        console.log("pages : ", pages);
        console.log("currentPage: ", currentPage);
        setLoading(false);
        
        console.log("loading", loading);
        console.log("investmentHistoryData", investmentHistoryData);
    }, []);

    const populateHistory = async (url:string, token:string) => {
        let history:InvestmentHistoryModel[] = [];
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
                let historyRow:InvestmentHistoryModel = {
                    id:data[object]['id'],
                    investedDate:data[object]['investedDate'],
                    pricePerUnit:data[object]['pricePerUnit'],
                    moneyInvested:data[object]['moneyInvested'],
                    fundName:data[object]['fundName'],
                    units:data[object]['units']
                }
                history.push(historyRow);
            }
            setInvestementHistoryData(history);
            setPages(Math.ceil(history.length / windowSize));
        }); 
    }

    const addPaddingToData = () => {
        const dataLength = investmentHistory.length;
        if (dataLength % windowSize !== 0) {
            let paddingSize = windowSize - (dataLength % windowSize);
            [...Array(paddingSize)].forEach((i) => { investmentHistory.push(emptyPortfolioRow) });
        }
    }

    const setCurrentPageHandler = (currentPageNumber: number) => {
        setCurrentPage(currentPageNumber);
        const start = (currentPageNumber - 1) * windowSize;
        const end = start + windowSize;
        setWindowShowing({
            startIndex: start,
            endIndex: end
        });
        setCurrentWindowData(investmentHistory.slice(windowShowing.startIndex, windowShowing.endIndex));
        if (windowShowing.endIndex - windowShowing.startIndex < windowSize) {
            [...Array(end - start)].forEach((i) => { currentWindowData.push(emptyPortfolioRow) });
        }
    }

    const getUnitsPurchased = (unit: number) => {
        return unit !== 0 ? `${unit} units` : "";
    }

    const getIndex = (index: number) => {
        return index !== 0 ? index : "";
    }



    const classes = makeStyles({
        AttachMoneyIcon: {
            color: 'yellow',
        },
        MoneyText: {
            color: 'lightgreen',
        },
        tableRow: {
            color: 'black',
        },
        headerIcon: {
            marginRight: 10,
            marginTop: 12
        },
    })();
    console.log(`pages: ${pages}  currentPage: ${currentPage}`)
    return (
        investmentHistoryData.length === 0 ? <div className="container"><Loader
        type='Watch'
        color="#00BFFF"
        height={100}
        width={100} //3 secs
      /></div> : <div className="container" >
            <div className="portfolio-histroy-header"><ListIcon className={classes.headerIcon} /><p>Portfolio History</p></div>
            <table>
                <thead>
                    <tr>
                        <th>S.no</th>
                        <th>Date and Time</th>
                        <th>Portfolio Name</th>
                        <th>Money Invested</th>
                        <th>Units Purchased</th>
                    </tr>
                </thead>
                <tbody>
                    {investmentHistoryData.slice(windowShowing.startIndex, windowShowing.endIndex).map((investment) => {
                        return (
                            <tr>
                                <td className={classes.tableRow}>{getIndex(investment.id)}</td>
                                <td className={classes.tableRow}>{investment.investedDate}</td>
                                <td className={classes.tableRow}>{investment.fundName}</td>
                                <td>{investment.moneyInvested && <Button className={classes.MoneyText} startIcon={<AttachMoneyIcon className={classes.AttachMoneyIcon} />}>{investment.moneyInvested}</Button>}</td>
                                <td className={classes.tableRow}>{getUnitsPurchased(investment.units)}</td>

                            </tr>
                        )
                    })}
                </tbody>

            </table>
            <div className="pagination-layout">
                {[...Array(pages)].map((e, i) => <PageButton setCurrentPage={setCurrentPageHandler} pageNumber={i + 1} currentPage={currentPage}></PageButton>)}
            </div>
        </div>
    )
}

export default PortFolioHistoryTable;