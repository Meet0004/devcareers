// At the top of your file - Image Imports
import reactVsNext from '../../assets/reactnext.avif';
import promiseVsAsync from '../../assets/promise_async.avif';
import mernRoadmap from '../../assets/mern_roadmap.avif';
import mongoCheatsheet from '../../assets/mongodb_cheatsheet.avif';
import oopsConcept from '../../assets/java_oops.avif';
import jsApis from '../../assets/20JSapis.avif';
import htmlCssInterview from '../../assets/htmlcssinterviewques.avif';
import cssCheatsheet from '../../assets/csscheatsheet.avif';
import codingPrinciples from '../../assets/7_coding_principles.avif';
import pentest from '../../assets/pentest.avif';
import oracleDsa from '../../assets/40oracle.avif';
import redisCheatsheet from '../../assets/redischeatsheet.avif';
import companyWise from '../../assets/companywise.avif';
import dsaQuestions from '../../assets/100+dsaques.avif';
import gitCheatsheet from '../../assets/git_cheatsheet.avif';
import playwright from '../../assets/playwright.avif';
import sql0to100 from '../../assets/sql0to100.avif';
import nodeCheatsheet from '../../assets/nodejscheatsheet.avif';
import frontendNotes from '../../assets/26_Ui.avif';
import mernMaster from '../../assets/mernmaster.avif';
import reactInterview8PDF from '../../assets/40_react.avif';
import jsCheatsheet50 from '../../assets/55page_js.avif';
import jsMethods from '../../assets/js_methods.avif';
import js100Interview from '../../assets/100jsinterview.avif';
import java150Interview from '../../assets/150java.avif';
import nodeDeployment from '../../assets/0-100node.js.avif';
import node40Interview from '../../assets/40nodejs.avif';
import resumeTips from '../../assets/resumetips.avif';
import hremails from '../../assets/hremails.avif';
import systemDesign from '../../assets/systemDesign.avif';
import HRques from '../../assets/HRques.avif';
import basicques from '../../assets/basicques.avif';

const resourceData = [
  {
    id: 1,
    title: "SQL Beginner to Advanced (0 - 100)",
    description: "Complete SQL learning roadmap from basics to advanced concepts",
    price: "₹9",
    link: "https://drive.google.com/drive/folders/13cNUA1VTncuas1JYf0J7_TpPToj7aV5W?usp=sharing",
    image: sql0to100,
    isPopular: false,
    isBestSeller: true,
    isPlacementFocused: false,
    isAdvancedLevel: false,
    copiesSold: "55",
    longDescription: `
    100 SQL Questions with Answers
25 Basic Level Questions
25 Intermediate Questions
25 Advanced Questions
15 Real-Time Scenario-Based Questions
10 SQL Optimization Technique Questions
17-Page Complete SQL Cheatsheet (BONUS)`,
    shouldYouBuyFor: `
    Covers SQL from beginner to advanced in one place
Includes real interview-level scenario questions
Helps you understand query optimization clearly
Perfect for placements, internships, and backend roles
Quick revision using the structured cheatsheet`
  },
  {
    id: 2,
    title: "Git complete Cheatsheet",
    description: "Essential Git commands and workflows for version control",
    price: "",
    link: "https://topmate.io/meet_g/1850821",
    image: gitCheatsheet,
    isPopular: false,
    isBestSeller: false,
    isPlacementFocused: false,
    isAdvancedLevel: false,
    copiesSold: "",
    longDescription: ``,
    shouldYouBuyFor: ``
  },
  {
    id: 3,
    title: "100+ Tips, Templates, Harvard Sample & Rules",
    description: "Professional resume building guide with templates and expert tips",
    price: "₹29",
    link: "https://drive.google.com/drive/folders/1k-YUUnYiiW2f7zrKcfJ3ArrjjH7WU6Jf?usp=sharing",
    image: resumeTips,
    isPopular: false,
    isBestSeller: false,
    isPlacementFocused: true,
    isAdvancedLevel: false,
    copiesSold: "",
    longDescription: `100+ Resume Writing Tips & Rules
ATS-friendly formatting guidance
Professional Cover Letter Template
Harvard Resume Sample
Harvard Resume Templates
Stanford Resume & Cover Letter Guide
Real Resume Sample`,
    shouldYouBuyFor: `Helps you build a strong first impression
Increases shortlisting chances in companies
Follows top university resume standards
Avoid common resume mistakes freshers make
Perfect for internships and placement season`
  },
  {
    id: 4,
    title: "FrontEnd Notes - Html, AJAX, jQuery, Bootstrap, JS",
    description: "Comprehensive frontend development notes covering multiple technologies",
    price: "",
    link: "https://topmate.io/meet_g/1851235",
    image: frontendNotes,
    isPopular: false,
    isBestSeller: false,
    isPlacementFocused: true,
    isAdvancedLevel: true,
    copiesSold: "",
    longDescription: ``,
    shouldYouBuyFor: ``
  },
  {
    id: 5,
    title: "Oracle - DSA Interview Question with Solutions",
    description: "Data structures and algorithms questions specifically for Oracle interviews",
    price: "",
    link: "https://topmate.io/meet_g/1851069",
    image: oracleDsa,
    isPopular: false,
    isBestSeller: false,
    isPlacementFocused: true,
    isAdvancedLevel: false,
    copiesSold: "",
    longDescription: ``,
    shouldYouBuyFor: ``
  },
  {
    id: 6,
    title: "React.js Vs Next.js Notes",
    description: "Comprehensive comparison guide between React.js and Next.js frameworks",
    price: "",
    link: "https://topmate.io/meet_g/1850867",
    image: reactVsNext,
    isPopular: false,
    isBestSeller: false,
    isPlacementFocused: false,
    isAdvancedLevel: false,
    copiesSold: "15",
    longDescription: ``,
    shouldYouBuyFor: ``
  },
  {
    id: 7,
    title: "40 Basic Coding ques should do before starting DSA",
    description: "40 essential coding problems to build logic and fundamentals before starting DSA preparation.",
    price: "",
    link: "https://topmate.io/meet_g/1964024",
    image: basicques,
    isPopular: false,
    isBestSeller: false,
    isPlacementFocused: false,
    isAdvancedLevel: false,
    copiesSold: "",
    longDescription: ``,
    shouldYouBuyFor: ``
  },
  {
    id: 8,
    title: "MERN Stack Roadmap (0 - 100)",
    description: "Complete learning path from beginner to advanced MERN stack development",
    price: "",
    link: "https://topmate.io/meet_g/1850845",
    image: mernRoadmap,
    isPopular: false,
    isBestSeller: false,
    isPlacementFocused: false,
    isAdvancedLevel: false,
    copiesSold: "",
    longDescription: ``,
    shouldYouBuyFor: ``
  },
  {
    id: 9,
    title: "CSS Complete Cheatsheet",
    description: "Comprehensive CSS properties and selectors reference guide",
    price: "",
    link: "https://topmate.io/meet_g/1850815",
    image: cssCheatsheet,
    isPopular: false,
    isBestSeller: false,
    isPlacementFocused: false,
    isAdvancedLevel: false,
    copiesSold: "",
    longDescription: ``,
    shouldYouBuyFor: ``
  },
  {
    id: 10,
    title: "100+ Javascript Functions & Methods Cheatsheet",
    description: "Comprehensive collection of JavaScript built-in functions and methods",
    price: "",
    link: "https://topmate.io/meet_g/1851134",
    image: jsMethods,
    isPopular: false,
    isBestSeller: false,
    isPlacementFocused: true,
    isAdvancedLevel: false,
    copiesSold: "",
    longDescription: ``,
    shouldYouBuyFor: ``
  },
  {
    id: 11,
    title: "30+ JavaScript Api's",
    description: "Collection of 30+ essential JavaScript APIs every developer should know",
    price: "",
    link: "https://topmate.io/meet_g/1850825",
    image: jsApis,
    isPopular: false,
    isBestSeller: false,
    isPlacementFocused: false,
    isAdvancedLevel: false,
    copiesSold: "",
    longDescription: ``,
    shouldYouBuyFor: ``
  },
  {
    id: 12,
    title: "100+ DSA Questions with Solutions (Multiple)",
    description: "Comprehensive collection of data structures and algorithms problems with solutions",
    price: "₹19",
    link: "https://drive.google.com/drive/folders/1V9QI7mlDUWL-O6kqj7mUTKLHWRMPOuGK?usp=sharing",
    image: dsaQuestions,
    isPopular: false,
    isBestSeller: false,
    isPlacementFocused: true,
    isAdvancedLevel: false,
    copiesSold: "",
    longDescription: `100+ important DSA questions with solutions
Multiple approaches for each problem (brute force + optimized)
Problems categorized by Data Structures (Array, String, Linked List, Stack, Queue, Trees, Graph, DP, etc.)
120+ problems divided based on 14 problem-solving approaches
Excel tracker to monitor progress (data structure wise)
Approach-based tracker to identify weak areas`,
    shouldYouBuyFor: `Saves months of unstructured preparation
Helps you learn patterns, not just solutions
Gives clarity on what to solve and in what order
Keeps you consistent with a proper tracking system
Designed specifically for placement-level preparation`
  },
  {
    id: 13,
    title: "Promise vs Async_Await notes",
    description: "Clear explanation of asynchronous JavaScript patterns and their differences",
    price: "",
    link: "https://topmate.io/meet_g/1850861",
    image: promiseVsAsync,
    isPopular: false,
    isBestSeller: false,
    isPlacementFocused: false,
    isAdvancedLevel: false,
    copiesSold: "",
    longDescription: ``,
    shouldYouBuyFor: ``
  },
  {
    id: 14,
    title: "Complete Interview Preparation Pack (HR questions)",
    description: "All-in-one placement pack covering HR answers, aptitude, verbal ability, and logical reasoning with structured practice.",
    price: "₹19",
    link: "https://drive.google.com/drive/folders/12LfQVAEr0OcaqmTZFs6SKCspa0cT67TJ?usp=sharing",
    image: HRques,
    isPopular: false,
    isBestSeller: false,
    isPlacementFocused: true,
    isAdvancedLevel: false,
    copiesSold: "",
    longDescription: `70+ common HR questions with multiple answer approaches
Strengths, weaknesses, salary, career goals
Teamwork, pressure handling, relocation, ethics
Real interview-style responses
Important interview tips (body language, dressing, follow-up, etc.)`,
    shouldYouBuyFor: `Complete all-in-one interview preparation bundle
Covers HR, aptitude, verbal & reasoning
Real interview-style questions with answers
Structured practice for placements & exams
Saves time and boosts confidence`
  },
  {
    id: 15,
    title: "System Desgin 70+Pages Handbook",
    description: "Designed for students, freshers, and developers preparing for product-based company interviews.",
    price: "₹9",
    link: "https://drive.google.com/file/d/1EGbFhLDIrF7A9cwTMV8vFJKG5sEqhRZ1/view?usp=sharing",
    image: systemDesign,
    isPopular: false,
    isBestSeller: false,
    isPlacementFocused: false,
    isAdvancedLevel: true,
    copiesSold: "",
    longDescription: `System design fundamentals
Scalability concepts (horizontal & vertical scaling)
Load balancing basics
Caching strategies
Database design principles
SQL vs NoSQL comparison
CAP theorem
Microservices vs Monolith
API design basics
Rate limiting & throttling
Message queues fundamentals
High-level architecture examples
Real interview discussion topics`,
    shouldYouBuyFor: `
    Strong foundation for product-based interviews
Explains concepts in structured way
Covers frequently asked system design topics
Helpful for backend and full-stack roles
Saves months of random YouTube learning`
  },
  {
    id: 16,
    title: "Test Automation with Playwright & TypeScript",
    description: "Guide to automated testing using Playwright and TypeScript",
    price: "",
    link: "https://topmate.io/meet_g/1850892",
    image: playwright,
    isPopular: false,
    isBestSeller: false,
    isPlacementFocused: false,
    isAdvancedLevel: false,
    copiesSold: "",
    longDescription: ``,
    shouldYouBuyFor: ``
  },
  {
    id: 17,
    title: "Pentest CheatSheets",
    description: "Essential penetration testing commands and techniques reference",
    price: "",
    link: "https://topmate.io/meet_g/1851077",
    image: pentest,
    isPopular: false,
    isBestSeller: false,
    isPlacementFocused: false,
    isAdvancedLevel: false,
    copiesSold: "",
    longDescription: ``,
    shouldYouBuyFor: ``
  },
  {
    id: 18,
    title: "50+ page complete JavaScript cheatsheet",
    description: "Extensive JavaScript reference covering all core concepts and features",
    price: "₹9",
    link: "https://drive.google.com/file/d/1MNY7MEF3WAv7lzaLeDSAaBvhWzPV9oV7/view?usp=sharing",
    image: jsCheatsheet50,
    isPopular: false,
    isBestSeller: false,
    isPlacementFocused: true,
    isAdvancedLevel: false,
    copiesSold: "",
    longDescription: `A detailed 50+ page JavaScript reference guide covering core concepts, functions, methods, and advanced topics in a structured format, with syntax practice which would help you crack Technical interview.
Designed for students, freshers, and developers who want strong JavaScript fundamentals.`,
    shouldYouBuyFor: `Complete JavaScript revision in one document
Covers both theory and practical usage
Saves time searching scattered resources
Helpful for interviews and projects
Strong foundation for React and Node.js`
  },
  {
    id: 19,
    title: "Master the MERN Stack 270+ pages",
    description: "Complete learning path from beginner to advanced MERN stack development",
    price: "₹29",
    link: "https://drive.google.com/file/d/1XnwQtjkMppabGnJywC-grYAiPbWoiY_p/view?usp=sharing",
    image: mernMaster,
    isPopular: false,
    isBestSeller: false,
    isPlacementFocused: true,
    isAdvancedLevel: true,
    copiesSold: "",
    longDescription: `Web Development Foundations – HTML, CSS, UNIX CLI, web servers, Git & GitHub
JavaScript Mastery – Fundamentals, OOPS, memory & functions, AJAX, jQuery, JSON
Frontend Development with React – React basics, Router (SPA), Forms, Redux (Core + Advanced)
Client–Server & Backend Concepts – Communication, MVC architecture
Java & Spring Framework – Java basics, Spring, RESTful APIs, Maven
Databases & Data Handling – Relational schemas, normalization, SQL, Spring JDBC
Agile & Cloud Deployment – Agile principles and cloud deployment basics`,
    shouldYouBuyFor: `Why You Should Buy This?
Covers frontend + backend + database + deployment
Structured academic + practical approach
Strong foundation for full-stack roles
Useful for college curriculum and interviews
Helps understand architecture, not just coding
`
  },
  {
    id: 20,
    title: "100 JavaScript interview questions",
    description: "Master the JavaScript Interview: 100 Essential Questions",
    price: "₹9",
    link: "https://drive.google.com/file/d/17yfUBgiw9u_WKoGXa1lLKqK4w7Ek7rJ4/view?usp=sharing",
    image: js100Interview,
    isPopular: false,
    isBestSeller: false,
    isPlacementFocused: false,
    isAdvancedLevel: false,
    copiesSold: "",
    longDescription: `100 Most-Asked JavaScript Interview Questions
Clear Answers with Simple Explanations
Practical Code Examples for Every Concept
Real Interview-Based & Industry-Focused Questions
Structured Format for Quick Revision & Practice`,
    shouldYouBuyFor: `Covers most repeated interview questions
Helps in structured and quick revision
Strengthens core JavaScript concepts
Saves time searching scattered resources
Ideal for frontend and full-stack interview preparation`
  },
  {
    id: 21,
    title: "HTML CSS INterview Questions",
    description: "Common interview questions and answers for HTML and CSS",
    price: "",
    link: "https://topmate.io/meet_g/1850823",
    image: htmlCssInterview,
    isPopular: false,
    isBestSeller: false,
    isPlacementFocused: false,
    isAdvancedLevel: false,
    copiesSold: "14",
    longDescription: ``,
    shouldYouBuyFor: ``
  },
  {
    id: 22,
    title: "150 Most Asked Java Interview Questions",
    description: "A structured collection of 150 frequently asked Java interview questions covering core concepts, OOPS, collections, exceptions, multithreading, and more.",
    price: "₹19",
    link: "https://drive.google.com/file/d/10w9_J2yb3uZ-aLADTLdXt0XBMRuZuMKr/view?usp=sharing",
    image: java150Interview,
    isPopular: false,
    isBestSeller: false,
    isPlacementFocused: true,
    isAdvancedLevel: false,
    copiesSold: "14",
    longDescription: `Core Java fundamentals
OOPS concepts in depth
Strings and memory management
Collections framework
Exception handling
Multithreading and synchronization
Java 8 features (Streams, Lambda)
JVM, JDK, JRE concepts
Important coding-based questions
Frequently repeated interview topics
`,
    shouldYouBuyFor: `Covers real interview-focused questions
Helps in structured revision
Strengthens core Java fundamentals
Saves time searching scattered resources
Ideal for placement and job preparation`
  },
  {
    id: 23,
    title: "OOPS Concept in java complete notes + code",
    description: "Comprehensive guide to Object-Oriented Programming concepts with practical examples",
    price: "₹9",
    link: "https://drive.google.com/drive/folders/1gtQ51TBGWW9jfcFU5mOF2Uev9sfw-Lo4?usp=sharing",
    image: oopsConcept,
    isPopular: false,
    isBestSeller: false,
    isPlacementFocused: false,
    isAdvancedLevel: false,
    copiesSold: "19",
    longDescription: `
Class and Object creation and initialization
Abstraction (with examples)
Encapsulation (with examples)
Abstraction vs Encapsulation difference
Inheritance and its types
Why Java does not support multiple inheritance
Polymorphism (compile-time & runtime)
Method Overloading vs Method Overriding
Upcasting in Java
Advanced OOPS concepts
Composition, Aggregation, Association
Cohesion and Coupling
Delegation in Java
Practical examples for better understanding`,
    shouldYouBuyFor: `Clear understanding of core Java fundamentals
Strong base for interviews and semester exams
Covers theory with practical examples
Structured notes for quick revision
Perfect for beginners and college students`
  },
  {
    id: 24,
    title: "MongoDB Cheatsheet",
    description: "Essential MongoDB commands and operations reference guide",
    price: "",
    link: "https://topmate.io/meet_g/1850836",
    image: mongoCheatsheet,
    isPopular: false,
    isBestSeller: false,
    isPlacementFocused: false,
    isAdvancedLevel: false,
    copiesSold: "",
    longDescription: ``,
    shouldYouBuyFor: ``
  },
  {
    id: 25,
    title: "Redis Cheatsheet",
    description: "Quick reference guide for Redis commands and data structures",
    price: "",
    link: "https://topmate.io/meet_g/1851059",
    image: redisCheatsheet,
    isPopular: false,
    isBestSeller: false,
    isPlacementFocused: false,
    isAdvancedLevel: false,
    copiesSold: "",
    longDescription: ``,
    shouldYouBuyFor: ``
  },
  {
    id: 26,
    title: "Node.js CheatSheet - 0 to Deployment",
    description: "Complete Node.js guide from development to production deployment",
    price: "₹9",
    link: "https://drive.google.com/file/d/1dJqqYDBhyYE8UJbCptEDQxFsSpQLpgws/view?usp=sharing",
    image: nodeDeployment,
    isPopular: false,
    isBestSeller: false,
    isPlacementFocused: true,
    isAdvancedLevel: false,
    copiesSold: "",
    longDescription: `Node.js fundamentals and architecture
Core modules (fs, http, path, events, streams)
NPM and package management
Express.js basics
Middleware and routing
REST API structure
Async patterns (Callbacks, Promises, Async/Await)
Error handling best practices
Environment variables setup
MongoDB connection basics
Deployment basics (production setup)`,
    shouldYouBuyFor: `Covers complete backend flow from start to deployment
Saves hours of searching scattered resources
Perfect for interview revision
Beginner-friendly yet practical
Helps you build and deploy real projects confidently`
  },
  {
    id: 27,
    title: "Node.js Cheat Sheet",
    description: "Quick reference for Node.js modules and essential APIs",
    price: "",
    link: "https://topmate.io/meet_g/1850879",
    image: nodeCheatsheet,
    isPopular: false,
    isBestSeller: false,
    isPlacementFocused: false,
    isAdvancedLevel: false,
    copiesSold: "",
    longDescription: ``,
    shouldYouBuyFor: ``
  },
  {
    id: 28,
    title: "15+ Top Company DSA & LeetCode Sheets",
    description: "LeetCode problems organized by top tech companies",
    price: "₹29",
    link: "https://drive.google.com/drive/folders/1H6hbJE9ER0XpugK6prjEh2cXNnbMnVRg?usp=sharing",
    image: companyWise,
    isPopular: true,
    isBestSeller: false,
    isPlacementFocused: true,
    isAdvancedLevel: false,
    copiesSold: "",
    longDescription: `Google – Tagged & Top Interview Questions (Part 1 & 2)
Amazon – Multiple Sets + 6 Months Preparation Sheet
Microsoft – Multiple LeetCode Sets + Master Sheet
Facebook (Meta) – Tagged Problems
Apple – LeetCode Problems
Adobe – DSA Questions + Tagged Sets
Oracle – DSA Interview Questions (Updated)
Uber – Tagged Problems
Goldman Sachs – Tagged Problems
JP Morgan – Tagged Problems
Walmart & Walmart Labs – Tagged Problems
Visa – LeetCode Problems
Twitter (X) – Tagged Problems
LinkedIn – Tagged Problems
VMware – Multiple Tagged Sets
Expedia – LeetCode Problems
SQL Interview Questions (LeetCode)
Coding Interview Notes
Stacks, Queues & Linked List DSA Guide
FCF Coding Sheet`,
    shouldYouBuyFor: `Prepare company-specific instead of generic practice
Focus on real interview-level problems
Save 100+ hours of searching and filtering
Perfect for off-campus and product-based roles
One place access to multiple top company sheets`
  },
  {
    id: 29,
    title: "7 coding Principles Every Developer Should Know",
    description: "Fundamental coding principles for writing clean and maintainable code",
    price: "",
    link: "https://topmate.io/meet_g/1850801",
    image: codingPrinciples,
    isPopular: false,
    isBestSeller: false,
    isPlacementFocused: false,
    isAdvancedLevel: false,
    copiesSold: "",
    longDescription: ``,
    shouldYouBuyFor: ``
  },
  {
    id: 30,
    title: "100+ React Interview Questions + Guide 8 PDFs",
    description: "Complete React.js interview preparation bundle with 8 comprehensive PDFs",
    price: "₹29",
    link: "https://drive.google.com/drive/folders/10ibAnluOhah5S7KcC0wJUWfzeLej0XeQ?usp=sharing",
    image: reactInterview8PDF,
    isPopular: false,
    isBestSeller: false,
    isPlacementFocused: true,
    isAdvancedLevel: true,
    copiesSold: "7",
    longDescription: `40+ Important React Interview Questions
22-Point React Interview Guide
10 Core React Interview Questions
Top 30 React Questions (Basic Level)
Top 50 React Interview Questions
React + Next.js Important Concepts
React 19
Axios Important Topics for Interviews`,
    shouldYouBuyFor: `Covers both theory + practical interview questions
Helps you prepare from basic to advanced level
Focused on real interview expectations
Saves time searching scattered resources
Ideal for frontend internships and React developer roles`
  },
  {
    id: 31,
    title: "40 Node.js Interview Questions + Answers",
    description: "Essential Node.js interview questions with detailed explanations",
    price: "₹9",
    link: "https://drive.google.com/file/d/1NcMQ9758Mmsg6lhv5-5Vjs2dFGOKxdJF/view?usp=sharing",
    image: node40Interview,
    isPopular: false,
    isBestSeller: false,
    isPlacementFocused: false,
    isAdvancedLevel: false,
    copiesSold: "",
    longDescription: `Covers 40 most asked Node.js interview questions
Clear, concise answers focused on key backend concepts
Includes event loop, middleware, streams, buffers, and clustering
Important topics like CORS, authentication, sessions & child processes
Perfect for backend & full-stack interview preparation
Structured for quick revision before interviews`,
    shouldYouBuyFor: `Students preparing for backend or full-stack interviews
Developers switching from frontend to Node.js
Quick last-minute interview revision
Strengthening core Node.js fundamentals
Cracking placement & company technical rounds confidently`
  },
  {
    id: 32,
    title: "2000+ HR emails and Famous IT companies emails",
    description: "This includes combined 2000+ emails of HR and IT companies",
    price: "₹19",
    link: "https://drive.google.com/drive/folders/1Bbg0jS_0bakiYlXoIRcbI3sfuRXz4KwK?usp=sharing",
    image: hremails,
    isPopular: false,
    isBestSeller: false,
    isPlacementFocused: true,
    isAdvancedLevel: false,
    copiesSold: "",
    longDescription: `2000+ HR & recruiter email IDs
Emails from service-based + product-based companies
Company-wise organized list
Covers startups to MNCs
Useful for off-campus job applications
Ready-to-use database format`,
    shouldYouBuyFor: `Apply directly instead of waiting on job portals
Increase your chances of getting interview calls
Save weeks of searching recruiter contacts
Perfect for freshers looking for off-campus roles
Helps you take control of your job search strategy
`
  },
  // {
  //   id: 33,
  //   title: "",
  //   description: "",
  //   price: "₹₹",
  //   link: "",
  //   image: ,
  //   isPopular: false,
  //   isBestSeller: false,
  //   isPlacementFocused: false,
  //   isAdvancedLevel: false,
  //   copiesSold: "",
  //   longDescription: ``,
  //   shouldYouBuyFor: ``
  // },
  // {
  //   id: 34,
  //   title: "",
  //   description: "",
  //   price: "₹₹",
  //   link: "",
  //   image: ,
  //   isPopular: false,
  //   isBestSeller: false,
  //   isPlacementFocused: false,
  //   isAdvancedLevel: false,
  //   copiesSold: "",
  //   longDescription: ``,
  //   shouldYouBuyFor: ``
  // },
  // {
  //   id: 35,
  //   title: "",
  //   description: "",
  //   price: "₹₹",
  //   link: "",
  //   image: ,
  //   isPopular: false,
  //   isBestSeller: false,
  //   isPlacementFocused: false,
  //   isAdvancedLevel: false,
  //   copiesSold: "",
  //   longDescription: ``,
  //   shouldYouBuyFor: ``
  // },
];

export default resourceData;