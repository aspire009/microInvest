import React from 'react';
import './App.css';
import InfoPair from './components/widgets/InfoPair/InfoPair';
import { TransactionHistoryRowModel } from './components/widgets/TransactionHistory/TransactionHistoryRow/TransactionHistoryRowModel';
import TransactionHistoryRow from './components/widgets/TransactionHistory/TransactionHistoryRow/TransactionHistoryRow';
import TransactionHistoryContainer from './components/widgets/TransactionHistory/TransactionHistoryContainer/TransactionHistoryContainer';
import { TransactionHistoryContainerModel } from './components/widgets/TransactionHistory/TransactionHistoryContainer/TransactionHistoryContainerModel';
import CreditCardsContainer from './components/widgets/CreditCardDetails/CreditCardsContainer';
import Drawer from './components/widgets/DashBoard/DashBoard'
import { Dashboard } from '@material-ui/icons';
import AcceptPayment from './components/Payment/acceptPayment';
import Login from './components/base/Login';
import SignUp from './components/base/SignUp';
import Home from './components/base/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import LandingPage from './components/base/LandingPage';
function App() {

  // const transactionHistoryContainerModel: TransactionHistoryContainerModel = {
  //   username: 'helllo'
  // }

  // return (
  //   <div className="App">
  //     {/* <TransactionHistoryContainer transactionHistoryContainerModel={transactionHistoryContainerModel}></TransactionHistoryContainer> */}
  //      <Drawer/> 

  //   </div>
  // );
  return (
    <Router>
      <Switch>
        <Route path="/home">
          <Home />
        </Route>
        <Route path="/login">
          <Login />
        </Route>

        <Route path="/signup">
          <SignUp />
        </Route>

        <Route path="/welcome">
          <LandingPage />
        </Route>

        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
