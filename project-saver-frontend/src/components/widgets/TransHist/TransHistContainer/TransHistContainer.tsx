import React, {useEffect} from 'react';
import {useHistory} from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons'
import { COLORS } from "../../../../constants/NewColorScheme";
import TransHistRow from "../TransHistRow/TransHistRow";
import './TransHistContainer.css'
import {TransactionModel} from './TransHistContainerModel'
const TransHistContainer = () => {
    const [transactions, setTransactions] = React.useState<TransactionModel[]>([]);
    const [token, setToken] = React.useState('eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIxIiwiaWF0IjoxNjIyODAzMTYyLCJleHAiOjE2MjM2NjcxNjJ9.ZSEOkvDCVtYXjphVVUizIj-dDtBH4Xxx_BIlN3WCI7s_nn8d8qVumlCZPgR25bOQmtUpb0ChTfo9eODd76Rn9g')
    const [username, setUsername] = React.useState('vaibhav');
    const url = 'http://localhost:8080/transaction/vaibhav';

    const history = useHistory();
    const goToTransactionDetails = () => {
        history.push("/transactionDetailPage")
    }
    useEffect(() => {
        populateTransactionData(url, token);
    }, []);

    const populateTransactionData = async (url:string, token:string) => {
        let transactionsData:TransactionModel [] = [];
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
                let historyRow:TransactionModel = {
                    id: data[object]['id'],
                    cardNumber: data[object]['cardNumber'],
                    amountPaid: data[object]['amountPaid'],
                    paymentDate: data[object]['paymentDate'],
                    transactionType: data[object]['transactionType'],
                    rewardsEarned:data[object]['rewardsEarned'],
                    status:data[object]['status'],
                }
                console.log("transactionsData : ", transactionsData);
                transactionsData.push(historyRow);
            }
            setTransactions(transactionsData);
        }); 
    }

    return (
        <div className="trans-hist-container-main">
            <div className="trans-hist-container-heading">
                <label className="trans-hist-container-title" style={{ color: COLORS.textPrimary }}>Transaction History</label>
                <FontAwesomeIcon onClick = {goToTransactionDetails} className="trans-hist-container-expand" icon={faExternalLinkAlt} style={{ color: COLORS.textPrimary }} />
            </div>

            <div className="trans-hist-container-sub-heading">
                <label className="trans-hist-container-date" style={{ color: COLORS.textSecondary }}>4 June 2021</label>
            </div>

            {transactions.length >= 3 && <div className="trans-hist-container-content">
                <TransHistRow transactionRowModel={transactions[0]}></TransHistRow>
                <TransHistRow transactionRowModel={transactions[1]}></TransHistRow>
                <TransHistRow transactionRowModel={transactions[2]}></TransHistRow>
            </div>}
        </div>
    )
}

export default TransHistContainer;