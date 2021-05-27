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
import Questionare from './components/Questionaire/Questionare';
import ProfileMeter from './components/ProfileScore/ProfileScore';
import ProfilePerformance from './components/ProfileScore/ProfilePerformance';
import CardDetailsContainer from './components/widgets/CreditCardDetails/CreditCardsContainer'
// import Login from './components/base/Login';
// import SignUp from './components/base/SignUp';
// import Home from './components/base/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
// import LandingPage from './components/base/LandingPage';
function App() {

  const transactionHistoryContainerModel: TransactionHistoryContainerModel = {
    username: 'helllo'
  }

  // return (
  //   <div className="App">
  //     {/* <TransactionHistoryContainer transactionHistoryContainerModel={transactionHistoryContainerModel}></TransactionHistoryContainer> */}
  //      {/* <Drawer/>  */}
  //      <Questionare/>
  //      {/* <ProfilePerformance/> */}

  //   </div>
  // );
  return (
    <Router>
      <Switch>
        {/* <Route path="/home">
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
        </Route> */}
      <Route exact path="/">
        <CardDetailsContainer/>
        </Route>
        <Route exact path="/questionnaire">
        <Questionare/>
        </Route>
        <Route exact path="/performance/:totalScore" component={ProfilePerformance}>
          <ProfilePerformance/>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
