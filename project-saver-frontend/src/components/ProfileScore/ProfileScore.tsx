import ReactSpeedometer from "react-d3-speedometer";
import React, { useState, useEffect, useRef } from "react";
import Button from "@material-ui/core/Button";
import axios from "axios";

const ProfileMeter = (props:{score:number}) => {
  const [value, setValue] = useState(100);
  const url = `http://localhost:8080/userScore/`;
  const [userName, setUserName] = useState(null);
  const [riskProfile, setRiskProfile] = useState(null);
  const [overallScore, setOverallScore] = useState(null);

  const interval = useRef(null);
  const generateRandom = () => setValue(Math.floor(Math.random() * 201 + 1));

  async function saveScore() {
    const data = {
      userName: "abcd",
      riskProfile: "low",
      overallScore: 22,
    };

    const result = await axios.post(url, data);
  }

  return (
    <div className="profileMeter">
      <h3>BRAVO!</h3>
      <h5>You Have completed the risk profiling.</h5>
      <div>
        <ReactSpeedometer
          minValue={0}
          maxValue={200}
          // maxSegmentLabels={12}
          needleHeightRatio={0.8}
          ringWidth={25}
          segments={5}
          value={props.score}
          segmentColors={[
            "#b81414",
            "#ec5555",
            "#f2db5b",
            "#7ab55c",
            "#385828",
          ]}
          needleColor="#000080"
        />
      </div>
      <p>Based on your responses your financial exposure is MODERATE.</p>
      <Button variant="contained" color="secondary" onClick={saveScore}>
        CONTINUE
      </Button>
      <br />
      <Button variant="outlined" color="secondary" size="large">
        RETAKE ASSESSMENT
      </Button>
    </div>
  );
};

export default ProfileMeter;
