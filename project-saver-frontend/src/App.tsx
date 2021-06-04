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
import PortFolioHistoryTable from './components/PortfolioHIstory/PortFolioHistoryTable';
import CardDetailsContainer from './components/widgets/CreditCardDetails/CreditCardsContainer'
// import Login from './components/base/Login';
// import SignUp from './components/base/SignUp';
// import Home from './components/base/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import StockGraph from './components/PortfolioHIstory/StockGraph/StockGraph';
import PortfolioHistoryContainer from './components/PortfolioHIstory/PortfolioHistoryContainer';
import MainDashboard from './components/landingPages/MainDashboard/MainDashboard';
import PerformanceMeter from './components/ProfileScore/PerformanceMeter';
import SigninSignupPage from './components/landingPages/SigninSignupPage/SigninSignupPage';
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
        <Route exact path="/signup">
          < SigninSignupPage mode="signup" />
        </Route>

        <Route exact path="/login">
          < SigninSignupPage mode="login" />
        </Route>
        <Route exact path="/">
          <CardDetailsContainer />
        </Route>
        <Route exact path="/questionnaire">
          <Questionare />
        </Route>
        <Route exact path="/portfolio/table">
          <PortFolioHistoryTable />
        </Route>
        {/* <Route exact path="/portfolio/graph">
          <StockGraph/>
        </Route> */}
        <Route exact path="/portfolio">
          <PortfolioHistoryContainer />
        </Route>
        <Route exact path="/performance/:totalScore">
          <ProfileMeter score={80} />
        </Route>
        <Route exact path="/newDashBoard">
          <MainDashboard mainDashboardModel={{}} />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
