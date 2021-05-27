import ReactSpeedometer from "react-d3-speedometer";
import React, { useState, useEffect, useRef } from "react";
import Button from "@material-ui/core/Button";

const ProfileMeter = () => {
  const [value, setValue] = useState(100);

  const interval = useRef(null);
  const generateRandom = () => setValue(Math.floor(Math.random() * 201 + 1));

  //   useEffect(() => {
  //     interval.current = setInterval(function () {
  //       generateRandom();
  //     }, 500);
  //     return () => clearInterval(interval.current);
  //   }, []);

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
          value={value}
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
      <Button variant="contained" color="secondary">
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
