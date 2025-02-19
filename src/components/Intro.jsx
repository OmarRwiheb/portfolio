import RandomImages from "./RandomImages"

export default function Intro() {
  return (
    <div className="flex flex-col justify-center gap-12 h-dvh mb-24 lg:mb-48 ">
      <h1 className="text-white font-black text-[50px] leading-tight lg:text-7xl">Hey there 👋 <br /> I am <span style={{ color: '#037EF3' }}>Omar Rwiheb</span></h1>
      <p className="text-slate-400 text-[22px] font-light lg:text-[22px] text">Software Developer with a passion for front-end development. Since graduating, I have worked for an NGO for two years, building and deploying digital platforms to enhance operations. I developed front-end and back-end systems, automated workflows, and created dashboards and analytics tools to streamline tracking and decision-making processes.</p>
      <RandomImages></RandomImages>
    </div>
  )
}