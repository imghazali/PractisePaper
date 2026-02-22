import React from "react";
import Button from "./Components/Button";
import Header from "./Components/Header";
import Card from "./Components/Card";

const App = () => {
  const buttonLinks = [
    { label: "Home", path: "/" },
    { label: "About", path: "/about" },
    { label: "Services", path: "/services" },
    { label: "Contact", path: "/contact" },
    { label: "Login", path: "/login" },
  ];
const cardData = [
  {
    heading: "Learn JavaScript",
    description: "Master core JavaScript concepts including closures, promises, and async programming.",
    buttonLinks: [
      { label: "Start Course", url: "/courses/javascript" },
      { label: "View Syllabus", url: "/syllabus/javascript" }
    ]
  },
  {
    heading: "React Development",
    description: "Build fast and scalable user interfaces using React and modern hooks.",
    buttonLinks: [
      { label: "Start Course", url: "/courses/react" },
      { label: "Projects", url: "/projects/react" }
    ]
  },
  {
    heading: "Backend with Node.js",
    description: "Create REST APIs and scalable backend services using Node and Express.",
    buttonLinks: [
      { label: "Start Course", url: "/courses/node" },
      { label: "Docs", url: "/docs/node" }
    ]
  },
  {
    heading: "Database Design",
    description: "Learn SQL, NoSQL, indexing strategies, and data modeling best practices.",
    buttonLinks: [
      { label: "Start Course", url: "/courses/database" },
      { label: "Examples", url: "/examples/database" }
    ]
  },
  {
    heading: "System Design Basics",
    description: "Understand scalability, load balancing, caching, and microservices.",
    buttonLinks: [
      { label: "Start Course", url: "/courses/system-design" },
      { label: "Case Studies", url: "/cases/system-design" }
    ]
  },
  {
    heading: "DSA in JavaScript",
    description: "Strengthen problem-solving with arrays, trees, graphs, and algorithms.",
    buttonLinks: [
      { label: "Start Course", url: "/courses/dsa" },
      { label: "Practice", url: "/practice/dsa" }
    ]
  },
  {
    heading: "Frontend Performance",
    description: "Optimize rendering, bundle size, and web vitals for faster apps.",
    buttonLinks: [
      { label: "Start Course", url: "/courses/performance" },
      { label: "Tips", url: "/tips/performance" }
    ]
  },
  {
    heading: "TypeScript Mastery",
    description: "Write safer, scalable code with strong typing and modern TS features.",
    buttonLinks: [
      { label: "Start Course", url: "/courses/typescript" },
      { label: "Cheatsheet", url: "/cheatsheet/typescript" }
    ]
  },
  {
    heading: "DevOps Essentials",
    description: "Learn CI/CD, Docker, cloud basics, and deployment strategies.",
    buttonLinks: [
      { label: "Start Course", url: "/courses/devops" },
      { label: "Tools", url: "/tools/devops" }
    ]
  },
  {
    heading: "Full Stack Projects",
    description: "Build real-world applications combining frontend and backend skills.",
    buttonLinks: [
      { label: "View Projects", url: "/projects/fullstack" },
      { label: "Submit Project", url: "/submit" }
    ]
  }
];

  return (
    <div className="container">
      <Header />
      <div className="btn-links">
        {buttonLinks.map((el) => {
          return <Button label={el.label} />;
        })}
      </div>
      <div className="card-container">
        {
          cardData.map((el)=>{
            return <Card heading={el.heading} desc={el.description} label={el.label}/>
          })
        }
    
      </div>
    </div>
  );
};

export default App;
