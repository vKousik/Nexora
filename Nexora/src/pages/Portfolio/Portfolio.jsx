import { motion } from "framer-motion";
import { Linkedin, Twitter, Github } from "lucide-react";

const team = [
  {
    name: "Abir Paul",
    role: "Co-Founder ",
    skill:"Full Stack Developer , Database Designer",
    img: "https://avatars.githubusercontent.com/u/127186823?v=4",
    socials: {
      linkedin: "https://www.linkedin.com/in/abir-paul-1b6773249/",
      
      github: "https://github.com/Abirpaul007",
    },
  },
  {
    name: "Priti Giri",
    role: "Co-Founder",
    skill:"UI/UX Designer & Backend Developer",
    img: "https://avatars.githubusercontent.com/u/196339929?v=4",
    socials: {
      linkedin: "https://www.linkedin.com/in/priti-giri-8b507b254/",
      
      github: "https://github.com/priti0317",
    },
  },
  {
    name: "Subhradeep Bhattacharya",
    role: "Co-Founder",
    skill:" UI/UX Designer & Project Manager & Business Analyst & Full Stack Developer",
    img: "https://avatars.githubusercontent.com/u/128257457?v=4",
    socials: {
      linkedin: "https://www.linkedin.com/in/subhradeep-bhattacharya/",
      
      github: "https://github.com/subhradeep09",   // <-- corrected
    },
  },
  {
    name: "Kousik Mondal",
    role: "Co-Founder ",
    skill:" Backend Developer & Database Designer",
    img: "https://avatars.githubusercontent.com/u/177249496?v=4",
    socials: {
      linkedin: "https://www.linkedin.com/in/kousik-mondal-b46688356/", // <-- corrected
      
      github: "https://github.com/vKousik",
    },
  },
];

function SocialLinks({ socials }) {
  return (
    <div className="flex gap-6">
      <a href={socials.linkedin} target="_blank" rel="noopener noreferrer">
        <Linkedin className="w-6 h-6 text-gray-400 hover:text-blue-500 transition duration-300" />
      </a>
      
      <a href={socials.github} target="_blank" rel="noopener noreferrer">
        <Github className="w-6 h-6 text-gray-400 hover:text-gray-200 transition duration-300" />
      </a>
    </div>
  );
}

export default function Team() {
  return (
    <div className="bg-black text-white min-h-screen">
      <section className="text-center py-20 px-6 relative">
        <motion.h1
          className="text-6xl font-bold mb-6 mt-6 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Meet Our Team
        </motion.h1>
        <p className="text-lg max-w-3xl mx-auto text-gray-400">
          We are a passionate group of developers, designers, and creators
          building digital solutions to help businesses grow.
        </p>
      </section>

      <section className="grid sm:grid-cols-2 md:grid-cols-4 gap-10 px-8 pb-20">
        {team.map((member, i) => (
          <motion.div
            key={i}
            className="relative rounded-2xl p-8 bg-white/5 backdrop-blur-lg border border-gray-800 shadow-lg hover:shadow-2xl hover:border-indigo-500 transition-all duration-300 flex flex-col items-center text-center"
            whileHover={{ y: -10, scale: 1.05 }}
          >
            <img
              src={member.img}
              alt={member.name}
              className="w-28 h-28 rounded-full mb-4 border-4 border-gray-700 shadow-lg"
            />
            <h3 className="text-xl font-semibold">{member.name}</h3>
            <p className="text-gray-400 text-sm mb-6">{member.role}</p>
            <SocialLinks socials={member.socials} />
          </motion.div>
        ))}
      </section>
    </div>
  );
}
