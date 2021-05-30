import React from 'react'
import { useEffect } from 'react'
import './portfolioHIstoryTable.css';
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';
import Button from '@material-ui/core/Button'
import { makeStyles } from '@material-ui/core/styles';
import ListIcon from '@material-ui/icons/List';
import PageButton from './PaginationButton'
import { investmentHistory, emptyPortfolioRow } from './PortfolioData'
const PortFolioHistoryTable = () => {
    const windowSize = 5;
    const [pages, setPages] = React.useState(Math.ceil(investmentHistory.length / windowSize));
    const [currentPage, setCurrentPage] = React.useState(1);
    const [windowShowing, setWindowShowing] = React.useState({
        startIndex: 0,
        endIndex: Math.ceil(investmentHistory.length / pages)
    });
    const [currentWindowData, setCurrentWindowData] = React.useState(investmentHistory.slice(windowShowing.startIndex, windowShowing.endIndex));

    useEffect(() => {
        addPaddingToData();
    }, [pages]);

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

    const getUnitsPurchased = (unit: string) => {
        return unit !== "" ? `${unit} units` : "";
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
    return (
        <div className="portfolio-histroy-table" >
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
                    {investmentHistory.slice(windowShowing.startIndex, windowShowing.endIndex).map((investment) => {
                        return (
                            <tr>
                                <td className={classes.tableRow}>{getIndex(investment.index)}</td>
                                <td className={classes.tableRow}>{investment.DateTime}</td>
                                <td className={classes.tableRow}>{investment.pName}</td>
                                <td>{investment.moneyInvested && <Button className={classes.MoneyText} startIcon={<AttachMoneyIcon className={classes.AttachMoneyIcon} />}>{investment.moneyInvested}</Button>}</td>
                                <td className={classes.tableRow}>{getUnitsPurchased(investment.unitPurchased)}</td>

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