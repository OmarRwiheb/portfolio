import Experience from "./Experience"
import SectionHeader from "./SectionHeader"

export default function Experiences() {

  const jds = [
    [
      "Developed and deployed digital platforms, CRM tools, and automation systems to streamline operations and enhance user experience.",
      "Designed and integrated data management systems, ensuring seamless alignment across national teams and improving data accessibility.",
      "Built and implemented analytics dashboards, enhancing data visualization and enabling data-driven decision-making.",
      "Managed social media platforms and performance-based advertising, leveraging data-driven strategies to improve ROI.",
      'Led a social media team of three (social media manager, graphic designer, and video editor), driving the technical execution of digital marketing campaigns, enhancing lead generation and customer journey optimization.',
      'Played a key role in delivering 12 conferences between Egypt and Italy',
      'facilitating sessions infront of audiences of 500+ attendees.'],
    ["Developed and deployed digital platforms, CRM tools, and automation systems to enhance user experience and streamline operations.", "Designed and integrated data management systems, ensuring seamless alignment across national teams.", "Built and implemented analytics dashboards, improving data visualization and decision-making.", "Optimized platform performance through A/B testing, user analytics, and continuous improvements, increasing engagement and conversion rates."],
  ]

  return (
    < div className="flex flex-col gap-12 ">
      <SectionHeader>WORK <br /> <span className="text-[#037EF3]">EXPERIENCE</span></ SectionHeader>
      <div>
        <Experience title="The National Head of Digital Experience" jd={jds[0]} location="Milan, Italy" startDate="July 2024" endDate="Present" place="AIESEC Italia"></Experience>
        <Experience title="The National Head of Information Management" jd={jds[1]} location="Cairo, Egypt" startDate="July 2023" endDate="June 2024" place="AIESEC Egypt"></Experience>
      </div>
    </div>
  )
}