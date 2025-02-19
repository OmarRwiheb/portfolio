import StackField from "./StackField";
import SectionHeader from "./SectionHeader";


const reactLogo = "/img/stack/react.webp";
const pythonLogo = "/img/stack/python.webp";
const djangoLogo = "/img/stack/django.webp";
const htmlLogo = "/img/stack/html.webp";
const cssLogo = "/img/stack/css.webp";
const appScriptLogo = "/img/stack/appScript.webp";
const jsLogo = "/img/stack/js.webp";
const tailwindLogo = "/img/stack/tailwind.webp";


const techStack = [
  { src: htmlLogo, alt: "HTML" },
  { src: cssLogo, alt: "CSS" },
  { src: jsLogo, alt: "JavaScript" },
  { src: reactLogo, alt: "React" },
  { src: tailwindLogo, alt: "Tailwind CSS" },
  { src: pythonLogo, alt: "Python" },
  { src: djangoLogo, alt: "Django" },
  { src: appScriptLogo, alt: "Google Apps Script" },
];

export default function Experiences() {
  return (
    <div className="flex flex-col gap-12 mb-24">
      <SectionHeader>
        TECH <br /> <span className="text-[#037EF3]">STACK</span>
      </SectionHeader>
      <div className="flex gap-5 flex-wrap justify-between items-center">
        {techStack.map((tech, index) => (
          <StackField key={index} src={tech.src} alt={tech.alt} />
        ))}
      </div>
    </div>
  );
}
