import InvestingBro from "../Util/InvestingBroImage";
import ProfileScoreMeter from "./ProfileScore";
import { useParams } from 'react-router';
import "./profilePerformance.css";
const ProfilePerformance = () => {
  const totalScore:number = useParams();
  return (
    <div className="container">
      <div className="leftimage">
        <InvestingBro />
      </div>
      <div className="scoremeter">
        <ProfileScoreMeter score={totalScore} />
      </div>
    </div>
  );
};

export default ProfilePerformance;
