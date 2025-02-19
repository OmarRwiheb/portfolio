const whereitallbegins_list = ["/img/projects/whereitallbegins/ogv1.webp", "/img/projects/whereitallbegins/egypt1.webp", "/img/projects/whereitallbegins/ogv2.webp", "/img/projects/whereitallbegins/egypt2.webp"];
const italia_list = ["/img/projects/aiesecItalia/4.webp", "/img/projects/aiesecItalia/5.webp", "/img/projects/aiesecItalia/1.webp", "/img/projects/aiesecItalia/2.webp", "/img/projects/aiesecItalia/3.webp"];
const a2030_list = ["/img/projects/a2030/1.webp", "/img/projects/a2030/2.webp", "/img/projects/a2030/3.webp"];
const egypt_list = ["/img/projects/egypt/1.webp", "/img/projects/egypt/2.webp", "/img/projects/egypt/3.webp"];
const elle_list = ["/img/projects/elle/1.webp", "/img/projects/elle/2.webp", "/img/projects/elle/3.webp"];
const backend_list = ["/img/projects/backend/1.webp", "/img/projects/backend/2.webp"];
const globalVillage_list = [];
const ic_list = ["/img/projects/ic/1.webp", "/img/projects/ic/2.webp", "/img/projects/ic/3.webp", "/img/projects/ic/4.webp", "/img/projects/ic/5.webp", "/img/projects/ic/6.webp", "/img/projects/ic/7.webp"];


const ic = "/vid/ic.m4v";
const whereitallbeginsDesktop = "/vid/whereitallbegins_desktop1.m4v";
const italia = "/vid/italia_desktop.m4v";
const elle = "/vid/elle.m4v";
const a2030 = "/vid/2030_desktop.m4v";
const egypt = "/vid/egypt_desktop.m4v";
const backend = "/vid/backend.m4v";
const globalVillage = "/vid/globalVillage_desktop.m4v";


export const projectsList = [
  {
    id: "1", vid: whereitallbeginsDesktop, title: "Where it all begins", description: `The "Where It All Begins" website showcases Egypt as a hub for AIESEC programs, emphasizing the country’s rich historical significance as one of the cradles of human civilization. The platform highlights AIESEC's offerings, including Global Volunteer, Global Talent, and Global Teacher programs.`, features: [
      "Front-end: Developed using HTML, CSS, and JavaScript for a dynamic and engaging user experience.",
      "Responsive Design: Optimized for seamless performance on both mobile and desktop devices.",
      "Interactive UI: Smooth navigation with clear access to program details.",
      "Global System Integration: Real-time data and user management using GraphQL API.",
      "API Security: Django used as a proxy server to hide API tokens for enhanced security."
    ], imgs: whereitallbegins_list, link: "https://whereitallbegins.aiesec.org.eg/", siteButton: 'block'
  },
  {
    id: "2", vid: italia, title: "AIESEC Italia Landing Page", description: `The AIESEC Italy website is a platform that connects youth with global exchange programs, leadership development, and volunteering opportunities. Designed for easy navigation, it highlights impactful experiences, upcoming events, and offers clear insights into how AIESEC empowers young people to make a positive difference.`, features: [
      "Front-end: Developed using HTML, CSS, and JavaScript for a dynamic and engaging user experience.",
      "Responsive Design: Optimized for seamless performance on both mobile and desktop devices.",
      "Registration Form: Connected to AIESEC Italia backend using GraphQL API.",
      "Third-Party Integrations: Integrated with applications like Instagram and Spotify.",
      "Volunteer Opportunities Recommendation: Suggests volunteering opportunities after registration, synchronized with AIESEC Global System through GraphQL API."
    ], imgs: italia_list, link: "https://aiesec.it/", siteButton: 'block'
  },
  { id: "3", vid: a2030, title: "AIESEC 2030 Dreaming", description: `The 2030 AIESEC website is the official platform for the AIESEC 2030 Vision event, held at the AIESEC International Conference in Luxor, Egypt.`, features: ['Developed using HTML, CSS, and JavaScript', 'Responsive design for seamless mobile and desktop experience.', 'Interactive user interface with smooth navigation and program details.', 'Dino Game with AIESEC Blue man'], imgs: a2030_list, link: "https://2030.aiesec.net/", siteButton: 'block' },
  {
    id: "4", vid: egypt, title: "AIESEC in Egypt Landing Page", description: `The AIESEC Egypt website serves as the official online presence for AIESEC in Egypt, providing information on the organization's programs, events, and opportunities for youth. It showcases AIESEC Egypt’s mission to develop leadership and empower young people to take action for positive change.`, features: [
      "Front-end: Developed using HTML, CSS, JavaScript, jQuery, and Bootstrap for a dynamic and responsive UI.",
      "Responsive Design: Optimized for seamless performance on both mobile and desktop devices.",
      "Registration Form: Connected to AIESEC Egypt backend using GraphQL API."
    ], imgs: egypt_list, link: "https://aiesec.org.eg/", siteButton: 'block'
  },
  {
    id: "5", vid: elle, title: "Company Landing Page", description: ` The Elle Final website showcases the Elle collection with a modern design and engaging visuals. It provides an intuitive, responsive experience for users to explore the collection and learn about its design.`, features: ['Developed using HTML, CSS, and JavaScript', 'Responsive design for seamless mobile and desktop experience.'], imgs: elle_list, link: "https://omarrwiheb.github.io/elle_final/", siteButton: 'block'
  },
  {
    id: "6", vid: backend, title: "AIESEC Italia backend system", description: `This system serves as the main backend system that the websites are connected to store the exchange participants data and AIESEC members data`, features: [
      "GraphQL APIs: Used to read and write data to the database.",
      "UTM Links Generator: Allows easier tracking of data.",
      "Synchronization: Synchronized with AIESEC Global System through GraphQL API.",
      "Authentication: Secured API access using OAuth2 authentication.",
      "University Assignments: Assigns university-specific tasks to Exchange leads based on the selected product.",
      "Hosting: Hosted on DigitalOcean Droplet for scalable and secure performance.",
      "Background Tasks: Utilizes the background-tasks library to handle requests to the global system asynchronously."
    ], imgs: backend_list, link: "", siteButton: 'hidden'
  },
  {
    id: "7", vid: ic, title: "AIESEC International Conference", description: `The website of AIESEC International ConThe AIESEC International Conference website is a registration platform with personalized profiles for attendees to shop for merchandise and book tours. It also features partner registrations and promotes Egypt as a top travel destination.`, features: [
      "Front-end: Developed using HTML, CSS, and JavaScript for a dynamic and engaging user experience.",
      "Back-end: Built with Python and Django to ensure scalability and secure data handling.",
      "Responsive Design: Optimized for both mobile and desktop for a seamless browsing experience across all devices.",
      "Interactive Interface: Smooth navigation with easy access to program details and user interactions.",
      "GraphQL API: Utilized for efficient data retrieval from the back-end to the front-end.",
      "Shopping Cart: Integrated e-commerce functionality for purchasing conference merchandise and booking tours.",
      "User Login & Profiles: Secure login system with personalized profiles for each registered user.",
      "Registration Form: Easy-to-use form for event registration, capturing all necessary attendee details.",
      "Virtual Check-In: Simplified check-in process through a form for submitting required documents.",
      "File Upload: Connected to DigitalOcean's storage to handle file uploads efficiently.",
      "Automated Email: Sends a confirmation email post-registration to keep users informed.",
      "Hieroglyphic Name Writing: Fun feature allowing users to see their name written in hieroglyphics."
    ], imgs: ic_list, link: "", siteButton: 'hidden'
  },
  {
    id: "8", vid: globalVillage, title: "AIESEC Global Village Event", description: `The Global Village AIESEC Egypt website showcases AIESEC’s cultural exchange event, celebrating diversity through food, music, and activities while promoting global understanding.`, features: [
      "Front-end: Developed using HTML, CSS, and JavaScript for a dynamic and engaging user experience.",
      "Responsive Design: Optimized for both mobile and desktop for a seamless browsing experience across all devices.",
      "Database: Using Google Sheets as a database, connected via AppScript for seamless data management."
    ], imgs: globalVillage_list, link: "https://globalvillage.aiesec.org.eg/", siteButton: 'block'
  },
]