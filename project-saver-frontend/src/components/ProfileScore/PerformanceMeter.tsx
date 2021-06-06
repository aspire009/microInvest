import ReactSpeedometer from "react-d3-speedometer";

<<<<<<< HEAD
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
=======
const PerformanceMeter = (props: { score: number }) => {
  return (
    <div>
      <ReactSpeedometer
        minValue={0}
        maxValue={100}
        needleHeightRatio={0.8}
        ringWidth={30}
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
        height={161}
      />
    </div>
  )
>>>>>>> 74584027b8dc20ff06ba3e849b7669e22b23dc88
}

export default PerformanceMeter;