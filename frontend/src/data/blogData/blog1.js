const blog1 = {
  id: 'hr-interview-questions-that-actually-get-you-hired',
  template: 'qa', // ← tells BlogDetailPage which template to render
  title: 'HR Interview Questions That Actually Get You Hired',
  category: 'Interview Prep',
  categoryColor: '#10b981',
  readTime: '14 min read',
  date: 'Mar 30, 2026',
  author: 'Meet Soni',
  overview:
    "A lot of freshers do fine in technical rounds and still lose the offer in HR. Not because they are bad, but because they do not know how to talk about themselves in a clear and simple way. This guide walks you through the most common HR questions and shows you how to answer them in a way that sounds natural and honest, not like a memorised script",
  covers: [
    'How to answer "Tell me about yourself" without freezing',
    'How to handle salary, weakness and other tricky questions calmly',
    'Answer ideas you can tweak to match your own story and background',
  ],
  tags: ['HR Interview', 'Fresher Jobs', 'Interview Tips'],
  featured: false,

  content: {
    hook: {
      paragraphs: [
        "You spend days preparing. You go through your resume again and again. You even plan what you will wear.",
        'Then the interview starts, and the first question is: "Tell me about yourself."',
        'And suddenly, everything you prepared disappears.',
        "This happens to a lot of people. It is not because you do not know anything. It is because you did not prepare your answers in the right way.",
      ],
      closingQuestion:
        "Let us make sure that the next time you sit for an HR round, you feel like you know what to say for the basic questions.",
    },

    // QA template sections: each section = one Q&A block
    sections: [
      {
        id: 'why-freshers-struggle',
        question: null, // null = intro section, no Q label
        heading: 'Why Most Freshers Struggle in HR Rounds',
        paragraphs: [
          'HR interviews are less about technical knowledge and more about how you think, behave and communicate in simple situations.',
          'Many freshers try to memorise perfect answers from the internet. In the interview those lines sound robotic and the HR person loses interest. Others go in without any plan and get stuck even on very basic questions.',
          'The better approach is in the middle. Understand why the question is asked, think of 1 or 2 real examples from your life, and answer in your own words.',
          'Most HR rounds repeat a small set of questions like "Tell me about yourself", "Why should we hire you", "What are your strengths and weaknesses" and "How much salary do you expect"',
        ],
      },

      {
        id: 'tell-me-about-yourself',
        question: 'Q1',
        heading: 'Tell Me About Yourself',
        subheading: 'The one question almost everyone overthinks',
        paragraphs: [
          "This is usually the first question. Many candidates mess it up by either giving their full life story or giving a one-line answer that tells nothing.",
          "The interviewer simply wants a quick and clear picture of who you are and why you are relevant for this role. Think of it like a trailer of a movie, not the full movie.",
          "A simple way is: present, past, future. Start with who you are right now, then a quick background, then what you are looking for next.",
          'Practise this answer out loud a few times. When you say it three or four times before the interview day, it starts sounding much more natural.',
        ],
        answer: {
          label: 'Simple Structure',
          text:
            '"Good morning. I am [Name], a [degree] graduate from [college], batch of [year]. In the last year I have worked on [project or internship] where I [what you did]. Now I am looking for a role where I can use my skills in [area] and keep learning from a strong team."',
        },
      },

      {
        id: 'why-this-job',
        question: 'Q2',
        heading: 'Why Are You Applying for This Job?',
        subheading: 'This shows whether you actually paid attention',
        paragraphs: [
          'If your answer sounds like you could copy paste it for any company, it clearly looks like you applied everywhere without thinking.',
          'Before the interview, spend ten minutes with the job description and the company website. Note down 2 or 3 things that match your skills or that genuinely excite you.',
          'In the answer, connect those points with your own experience. Keep it simple and specific, not dramatic.',
        ],
        answer: {
          label: 'Better Way',
          text:
            '"I applied for this role because it focuses on [specific task or area] and that is what I have been practising in my [project or internship]. I also saw that your team works on [product or domain], which is something I genuinely want to learn more about."',
        },
      },

      {
        id: 'strengths',
        question: 'Q3',
        heading: 'What Are Your Strengths?',
        subheading: 'Keep it real, not rehearsed',
        paragraphs: [
          'Saying only "hardworking" or "punctual" does not help much because almost everyone says that.',
          'Pick one or two strengths that actually relate to the role. Then add a small, real example from college, a project, an internship or even a part time activity.',
          'The example is what makes the answer believable. Without it, it sounds like a line from a template.',
        ],
        answer: {
          label: 'Example',
          text:
            '"One of my strengths is paying attention to details. For example, during my final year project I noticed a small mismatch in the test results that others had missed. When I checked again, I found a bug in the logic that would have caused issues later. Since then I always double check my work before calling it finished."',
        },
      },

      {
        id: 'weaknesses',
        question: 'Q4',
        heading: 'What Are Your Weaknesses?',
        subheading: 'Be honest, but also show improvement',
        paragraphs: [
          'Answers like "I work too hard" or "I am a perfectionist" are overused and sound fake. Interviewers hear them all the time.',
          'At the same time, do not pick a weakness that directly kills your chances for that role. For example, saying "I am very bad with deadlines" in a fast paced role is risky.',
          'Choose a small, genuine weakness and then clearly explain what you are doing to improve it. That shows self awareness and a learning mindset.',
        ],
        answer: {
          label: 'Balanced Answer',
          text:
            '"Sometimes I take on more tasks than I should at one time. Earlier this used to affect my time management. In the last few months I have started planning my day on paper, breaking work into smaller parts and checking my priorities with my mentor. It has already made a big difference."',
        },
      },

      {
        id: 'why-hire-you',
        question: 'Q5',
        heading: 'Why Should We Hire You?',
        subheading: 'This is where you connect your story to their role',
        paragraphs: [
          'Do not repeat your entire resume here. They have already seen it.',
          'Instead, pick 2 or 3 points that match the role: your main skill, one project or internship, and your attitude towards learning.',
          'The idea is to show that you understand what they need and you have a starting point which they can build on.',
        ],
        answer: {
          label: 'Simple Answer',
          text:
            '"I know I am at the start of my career, but I have already worked on [project or internship] where I used [skills or tools] that are mentioned in your job description. I learn fast, I ask for feedback and I am comfortable putting in the extra effort in the beginning. Because of that, I believe I can contribute to the team and grow with the company."',
        },
      },

      {
        id: 'salary',
        question: 'Q6',
        heading: 'What Are Your Salary Expectations?',
        subheading: 'Answer confidently without rushing into numbers',
        paragraphs: [
          'For most fresher roles, the company already has a budget or fixed range in mind. If you give a random number without research, it can create an awkward situation.',
          'If you really have no idea, it is better to show flexibility and mention that you are open to the standard range for this role and location.',
          'If you have done research on typical packages for similar roles, you can share a broad range but keep the focus on learning and role fit.',
        ],
        answer: {
          label: 'Safe Way',
          text:
            '"For me, the role and the learning opportunity are more important at this stage. I am open to the standard package that you offer freshers in this position. From what I have seen in the market, the range seems to be around [X to Y], but I am happy to follow your company structure."',
        },
      },

      {
        id: 'five-years',
        question: 'Q7',
        heading: 'Where Do You See Yourself in 5 Years?',
        subheading: 'They are checking direction, not a fixed script',
        paragraphs: [
          'No one expects you to know your exact job title and company in five years. Even they do not know that.',
          'What they want to see is whether you think in terms of growth, skills and responsibility or you are just moving without any plan.',
          'Keep your answer flexible but positive. Focus on the kind of work you want to do and how you want to grow, not on big designations.',
        ],
        answer: {
          label: 'Simple Answer',
          text:
            '"In the next few years I want to build strong skills in [your field] and handle bigger responsibilities on real projects. I see myself growing into someone who can own tasks end to end, help new team members and contribute to important decisions in the team."',
        },
      },

      {
        id: 'stress',
        question: 'Q8',
        heading: 'How Do You Handle Stress?',
        subheading: 'Show your method, not just a brave face',
        paragraphs: [
          'Only saying "I stay calm" is too generic. Everyone says they stay calm.',
          'Give a small example of what you actually do when you feel pressure: how you organise, how you communicate and how you avoid panic.',
          'Interviewers are checking if you will completely break when there is a tight deadline or if you have some basic system to manage yourself.',
        ],
        answer: {
          label: 'Real Answer',
          text:
            '"When things get busy, I try not to handle everything in my head. I write down all the tasks, mark what is urgent, and then focus on one thing at a time. If I feel stuck, I talk to my senior early instead of waiting till the last moment. This helps me stay organised even when there is pressure."',
        },
      },

      {
        id: 'company-knowledge',
        question: 'Q9',
        heading: 'What Do You Know About Our Company?',
        subheading: 'Basic research that shows respect',
        paragraphs: [
          'This is a very simple question, but many freshers still answer “I only know a little” because they did not spend even ten minutes reading about the company.',
          'You do not need to know every detail. You just need to show that you cared enough to check their website, products or recent news.',
          'Two or three specific points are enough to show that you are serious about this opportunity.',
        ],
        answer: {
          label: 'Simple Structure',
          text:
            '"From your website I understand that your company works in [industry or domain] and focuses on [products or services]. I also noticed [a recent project, client or achievement], which stood out to me because [short reason]. That is one of the reasons I was interested in this role."',
        },
      },

      {
        id: 'any-questions',
        question: 'Q10',
        heading: 'Do You Have Any Questions for Us?',
        subheading: 'This is your chance to look genuinely interested',
        paragraphs: [
          'If you always say “No, everything is clear”, it can look like you just want to run out of the room.',
          'Good candidates usually have at least one simple and sincere question about the role, team or next steps.',
          'Avoid questions only about salary, leave or benefits at this stage. Keep those for HR or for later in the process.',
        ],
        answer: {
          label: 'Good Questions',
          text:
            '"Yes, I do. For example: What does a typical day in this role look like for a fresher? or What skills should I focus on in the first three months if I join your team?"',
        },
      },

      // Special quickfire section
      {
        id: 'quickfire',
        question: null,
        heading: 'Quick-Fire: Simple, Honest One-Line Answers',
        quickfire: [
          {
            question: 'Are you a team player?',
            answer:
              'Yes, I enjoy working in a team, and I can also handle tasks independently when needed.',
          },
          {
            question: 'What makes you angry?',
            answer:
              'Mostly confusion or miscommunication, so I try to clear doubts early instead of letting it build up.',
          },
          {
            question: 'Are you applying elsewhere?',
            answer:
              'Yes, I am exploring a few options, but I am genuinely interested in this role and want to see if I can be a good fit here.',
          },
          {
            question: 'Rate yourself out of 10.',
            answer:
              'I would say around 8. I have a good base, and I also know there is still a lot to learn.',
          },
          {
            question: 'Describe yourself in one word.',
            answer: 'Consistent.',
          },
        ],
      },
    ],

    conclusion: {
      heading: 'Final Thought',
      paragraphs: [
        'You do not need perfect, movie-style answers for an HR interview.',
        'You just need to sound clear, honest and easy to work with. That is it.',
        'If you understand why a question is asked, think of one real example and practise saying your answer out loud a few times, you will already be ahead of most candidates who walk in unprepared.',
      ],
      callToAction:
        'If you want more fresher-focused interview tips and job updates, keep checking our homepage. We keep it updated with practical stuff, not just theory.',
    },
  },
};

export default blog1;