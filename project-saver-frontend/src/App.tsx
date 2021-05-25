import React from 'react';
import './App.css';
import InfoPair from './components/widgets/InfoPair/InfoPair';
import { TransactionHistoryRowModel } from './components/widgets/TransactionHistory/TransactionHistoryRow/TransactionHistoryRowModel';
import TransactionHistoryRow from './components/widgets/TransactionHistory/TransactionHistoryRow/TransactionHistoryRow';
import TransactionHistoryContainer from './components/widgets/TransactionHistory/TransactionHistoryContainer/TransactionHistoryContainer';
import { TransactionHistoryContainerModel } from './components/widgets/TransactionHistory/TransactionHistoryContainer/TransactionHistoryContainerModel';
import CreditCardsContainer from './components/widgets/CreditCardDetails/CreditCardsContainer';

function App() {

  const transactionHistoryContainerModel: TransactionHistoryContainerModel = {
    username: 'helllo'
  }

  return (
    <div className="App">
      <TransactionHistoryContainer transactionHistoryContainerModel={transactionHistoryContainerModel}></TransactionHistoryContainer>
    </div>
  );
}

export default App;
