import { useState, useEffect, useRef } from "react";
import Button from "@material-ui/core/Button";
import axios from "axios";
import PerformanceMeter from "./PerformanceMeter";
import { Link, useHistory } from 'react-router-dom';

const ProfileMeter = (props: { score: number }) => {
  const [value, setValue] = useState(100);
  const url = `http://localhost:8080/userScore/`;
  const [userName, setUserName] = useState("");
  const [riskProfile, setRiskProfile] = useState("");
  const [overallScore, setOverallScore] = useState(0);

  const history = useHistory();

  useEffect(() => {
    setRiskProfileValue();
    setOverallScore(props.score);
    console.log(`overAllScore: ${overallScore}  RiskProfile: ${riskProfile}`);
  })

  const goToquestionnaire = () => {
    history.push('/questionnaire');
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

  async function saveScore() {
    const data = {
      userName: "abcd",
      riskProfile: "low",
      overallScore: 22,
    };

    await axios.post(url, data);
  }


  return (
    <div className="profileMeter">
      <h3>BRAVO!</h3>
      <h5>You Have completed the risk profiling.</h5>
      <PerformanceMeter score={overallScore} />
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
