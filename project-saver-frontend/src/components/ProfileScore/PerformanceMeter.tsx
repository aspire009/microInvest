import ReactSpeedometer from "react-d3-speedometer";

const PerformanceMeter = (props:{score:number, width:number, height:number, ringWidth:number}) => {
    return (
        <div>
        <ReactSpeedometer
          minValue={0}
          maxValue={100}
          needleHeightRatio={0.8}
          ringWidth= {50}
          height = {300}
          width={700}
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
          needleTransitionDuration={1000}
        />
      </div>
    )
}

export default PerformanceMeter;