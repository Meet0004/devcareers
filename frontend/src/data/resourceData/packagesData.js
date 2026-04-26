// src/data/resourceData/packagesData.js

const packagesData = [
  {
    id: 'pkg-1',
    title: 'Complete Interview Prep Bundle',
    description: 'Everything you need to ace technical interviews',
    includedResourceIds: [3, 14, 32], // IDs of resources included
    originalPrice: 67,
    discountedPrice: 39,
    // driveLink: 'https://drive.google.com/drive/folders/1eKkVa3WcA4qF9PBRc0vO3xztmycRcgL6?usp=sharing',
    link:'https://topmate.io/meet_g/1969991 ',
    savings: 28,
    expDate: '20-04-2026'
  }
  , {
    id: 'pkg-2',
    title: 'Ultimate DSA Preparation Bundle',
    description: '15+ top company LeetCode sheets, 100+ structured DSA questions, Oracle-specific interview problems, plus 40 foundational coding questions (Free)',
    includedResourceIds: [7,12,28],
    originalPrice: 48,
    discountedPrice: 29,
    link: 'https://topmate.io/meet_g/1980496',
    savings: 19,
    expDate: '27-03-2026',
  }
  , {
    id: 'pkg-3',
    title: 'Ultimate Developer Interview Question',
    description: '400+ curated interview questions with answers across Node.js, React, JavaScript, Java, and SQL - perfect for complete tech interview preparation.',
    includedResourceIds: [30, 20, 22, 31, 1, 2],
    originalPrice: 75,
    discountedPrice: 49,
    link: 'https://topmate.io/meet_g/1980309',
    savings: 34,
    expDate: '27-03-2026',
  }
  ,{
    id: 'pkg-4',
    title:'DSA + TECHINCAL INTERVIEW SOLVER',
    description:'15+ top company LeetCode sheets, 100+ structured DSA questions, 400+ curated interview questions with answers across Node.js, React, JavaScript, Java, and SQL - perfect for complete tech interview preparation.',
    includedResourceIds: [28, 12, 30, 20,7,12,22, 31, 1, 2],
    originalPrice: 123,
    discountedPrice: 79,
    link: 'https://topmate.io/meet_g/2035369',
    savings: 44,
    expDate: '27-03-2026',
  }
];

export default packagesData;