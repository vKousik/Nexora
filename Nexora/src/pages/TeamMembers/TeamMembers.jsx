import { motion } from "framer-motion";
import { Linkedin, Twitter, Github } from "lucide-react";

const team = [
  {
    name: "Aarav Sharma",
    role: "Founder & CEO",
    img: "https://randomuser.me/api/portraits/men/32.jpg",
    socials: {
      linkedin: "#",
      twitter: "#",
      github: "#",
    },
  },
  {
    name: "Priya Mehta",
    role: "Lead Developer",
    img: "https://randomuser.me/api/portraits/women/44.jpg",
    socials: {
      linkedin: "#",
      twitter: "#",
      github: "#",
    },
  },
  {
    name: "Rohan Verma",
    role: "UI/UX Designer",
    img: "https://randomuser.me/api/portraits/men/76.jpg",
    socials: {
      linkedin: "#",
      twitter: "#",
      github: "#",
    },
  },
  {
    name: "Sneha Patel",
    role: "Marketing Head",
    img: "https://randomuser.me/api/portraits/women/68.jpg",
    socials: {
      linkedin: "#",
      twitter: "#",
      github: "#",
    },
  },
];

export default function Team() {
  return (
    <div className="bg-black text-white min-h-screen">
      {/* Hero Section */}
      <section className="text-center py-16 px-6">
        <motion.h1
          className="text-5xl font-bold mb-6"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Meet Our Team
        </motion.h1>
        <p className="text-lg max-w-2xl mx-auto text-gray-400">
          We are a passionate group of developers, designers, and creators
          building digital solutions to help businesses grow.
        </p>
      </section>

      {/* Team Members Grid */}
      <section className="grid sm:grid-cols-2 md:grid-cols-4 gap-8 px-8 pb-16">
        {team.map((member, i) => (
          <motion.div
            key={i}
            className="bg-gray-900 rounded-2xl p-6 shadow-lg hover:shadow-2xl transition flex flex-col items-center"
            whileHover={{ scale: 1.05 }}
          >
            <img
              src={member.img}
              alt={member.name}
              className="w-28 h-28 rounded-full mb-4 border-4 border-gray-700"
            />
            <h3 className="text-xl font-semibold">{member.name}</h3>
            <p className="text-gray-400 text-sm mb-4">{member.role}</p>
            <div className="flex gap-4">
              <a href={member.socials.linkedin} target="_blank">
                <Linkedin className="w-5 h-5 text-gray-400 hover:text-indigo-500 transition" />
              </a>
              <a href={member.socials.twitter} target="_blank">
                <Twitter className="w-5 h-5 text-gray-400 hover:text-indigo-500 transition" />
              </a>
              <a href={member.socials.github} target="_blank">
                <Github className="w-5 h-5 text-gray-400 hover:text-indigo-500 transition" />
              </a>
            </div>
          </motion.div>
        ))}
      </section>

      {/* Call to Action */}
      <section className="text-center py-16 px-6 bg-gray-950">
        <h2 className="text-3xl font-bold mb-4">Want to Work With Us?</h2>
        <p className="text-lg text-gray-400 mb-6">
          Join our growing team and help us build amazing digital experiences.
        </p>
        <a
          href="/careers"
          className="bg-indigo-600 text-white px-6 py-3 rounded-xl font-semibold shadow-md hover:bg-indigo-500 transition"
        >
          Explore Careers
        </a>
      </section>
    </div>
  );
}
