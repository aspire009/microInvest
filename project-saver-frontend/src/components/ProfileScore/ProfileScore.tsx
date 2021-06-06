import { useState, useEffect, useRef } from "react";
import Button from "@material-ui/core/Button";
import axios from "axios";
import PerformanceMeter from "./PerformanceMeter";
import { useHistory, useParams } from 'react-router-dom';

interface scoreTemplate {
  totalScore: string
}
const ProfileMeter = (props: { score: number }) => {
  const url = `http://localhost:8080/userScore/`;
  
  const [userName, setUserName] = useState(localStorage.getItem('userName'));
  const [token ,setToken] = useState(localStorage.getItem('accessToken'));
  const [riskProfile, setRiskProfile] = useState("");
  const [overallScore, setOverallScore] = useState(0);
  const scoreBox: scoreTemplate = useParams();
  const history = useHistory();

  useEffect(() => {
    console.log('inside useffect: totalScore: ', scoreBox.totalScore);
    setRiskProfileValue();
    setOverallScore(parseInt(scoreBox.totalScore));
  })

  const goToquestionnaire = () => {
    history.push('/questionnaire');
  }

  const goTodashBoard = () => {
    history.push('/newDashboard');
  }

  const setRiskProfileValue = () => {
    if (props.score < 40) {
      setRiskProfile("Low")
    } else if (props.score < 75) {
      setRiskProfile("Moderate")
    } else {
      setRiskProfile("High")
    }
  }

  const postScore = (url: string, data, token: string) => {
    fetch(url, {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${token}`,
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
      .then(res => res.json()).
      then(json => {
        if ('error' in json) {
          alert('network call failed');
          console.log('network call failed', json);
        } else {
          goTodashBoard();
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }

  async function saveScore() {
    const data = {
      userName: userName,
      riskProfile: riskProfile,
      overallScore: overallScore,
      isAssessmentTaken: true
    };
    postScore(url, data, token);
  }


  return (
    <div className="profileMeter">
      <h3>BRAVO!</h3>
      <h5>You Have completed the risk profiling.</h5>
      <PerformanceMeter score={overallScore} ringWidth={30} height = {200} width ={500}/>
      <p>Based on your responses your financial exposure is {riskProfile}.</p>
      <Button variant="contained" color="secondary" onClick={saveScore}>
        CONTINUE
      </Button>
      <br />
      <Button onClick={goToquestionnaire} variant="outlined" color="secondary" size="large">
        RETAKE ASSESSMENT
      </Button>


    </div>
  );
};

export default ProfileMeter;
