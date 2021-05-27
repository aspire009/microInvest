import InvestingBro from "../Util/InvestingBroImage";
import ProfileScoreMeter from "./ProfileScore";
import "./profilePerformance.css";
const ProfilePerformance = () => {
  return (
    <div className="container">
      <div className="leftimage">
        <InvestingBro />
      </div>
      <div className="scoremeter">
        <ProfileScoreMeter />
      </div>
    </div>
  );
};

export default ProfilePerformance;
