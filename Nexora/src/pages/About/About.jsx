import Aboutintro from "../../components/sections/about/AboutIntro";
import MissionSection from "../../components/sections/about/OurMission";
import TeamSection from "../../components/sections/about/OurTeam";
const Home = () => {
  return (
    <div className="text-black">
      <Aboutintro/>
      <TeamSection/>
      <MissionSection/>
      
      
    </div>
  );
};

export default Home;
