import ReactSpeedometer from "react-d3-speedometer";
import React, { useState, useEffect, useRef } from "react";

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
    <div className="App">
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
    </div>
  );
};

export default ProfileMeter;
