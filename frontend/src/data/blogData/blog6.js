const blog6 = {
  id: '10-resume-mistakes-that-reject-you-instantly',
  template: 'article',
  title: '10 Resume Mistakes That Reject You Instantly',
  category: 'Resume Tips',
  categoryColor: '#6366f1',
  readTime: '11 min read',
  date: 'Apr 26, 2026',
  author: 'Meet Soni',
  overview:
    'You think your resume is “fine” because it has all the usual sections — education, skills, projects. But if you’ve been applying to dozens of jobs and not even getting callbacks, chances are your resume is silently killing your chances in the first 10 seconds. This article walks you through ten resume mistakes that make recruiters reject you instantly — and how to fix each one like a smart fresher, not a desperate one.',
  covers: [
    'How ATS and recruiters actually screen your resume in a few seconds',
    'The 10 biggest resume mistakes that cause instant rejection',
    'Simple fixes you can apply tonight to improve your shortlisting chances',
  ],
  tags: ['Resume', 'Fresher Jobs', 'ATS', 'Job Search'],
  featured: false,

  content: {
    hook: {
      paragraphs: [
        'You open your email, refresh it three times, and still nothing — no interview call, no shortlisting, just silence.',
        'Deep down you know something is wrong, but you keep telling yourself, “At least my resume is decent.”',
        'Here’s the harsh part: for most freshers, the resume is exactly why things are not moving. Not because you have zero skills, but because you’ve packaged those skills in a way that recruiters and ATS systems throw out in seconds.',
        'It’s like having good content on YouTube with a terrible thumbnail — people will never even click to see how good you are.',
      ],
      closingQuestion:
        'Let’s fix that. Here are ten resume mistakes that reject you instantly — and what to do instead.',
    },

    sections: [
      {
        id: 'same-resume-everywhere',
        heading: 'Mistake 1: Using the Same Resume for Every Job',
        subheading: 'Generic resume = generic rejection',
        paragraphs: [
          'If you are sending one single resume to a backend role, a testing role and a data analyst role, you’re basically telling recruiters, “I don’t care enough to customise.”',
          'Most companies now use Applicant Tracking Systems (ATS) that scan for role-specific keywords from the job description — tech stack, tools, responsibilities.',
          'When your resume doesn’t speak the same language as the job description, ATS gives you a low match score, and your profile never even reaches a human.',
          'Fix it: keep a master resume, but for each application, adjust your skills, project descriptions and keywords to match that particular role. Even 15–20 minutes of smart tailoring can change your shortlisting rate.',
        ],
      },

      {
        id: 'fancy-designs-ats',
        heading: 'Mistake 2: Fancy Designs That Break ATS',
        subheading: 'Your Canva template might be pretty — and completely unreadable',
        paragraphs: [
          'Two-column templates, icons everywhere, skill bars, timelines — they look great on Instagram, but ATS often reads them like scrambled nonsense.',
          'Most ATS tools are built to read simple, single-column, text-based resumes, top to bottom and left to right. When you throw tables, graphics and text boxes at them, they misread or skip important content.',
          'Result: your core skills or experience might not even be captured correctly in the system, and you get filtered out before anyone sees how good you are.',
          'Fix it: use a clean, single-column layout with standard section headings. Keep design minimal. If you want something beautiful, use it as a portfolio, not as the main resume file you upload on portals.',
        ],
      },

      {
        id: 'typos-and-grammar',
        heading: 'Mistake 3: Typos, Grammar Errors and Sloppy Formatting',
        subheading: 'If you don’t respect your own resume, why should they?',
        paragraphs: [
          'Multiple studies and recruiter surveys show that typos and grammar errors are one of the top reasons resumes get rejected immediately.',
          'Think from their side: if you couldn’t double-check a one-page document about yourself, how carefully will you handle their reports, code or clients?',
          'Common issues include inconsistent dates, random capitalization, misaligned bullet points, and awkward sentences that sound like they were copied from five different templates.',
          'Fix it: read your resume out loud once, run it through a spell check, and ideally ask one friend or senior to review it. One extra review is much cheaper than 50 silent rejections.',
        ],
      },

      {
        id: 'generic-objective-buzzwords',
        heading: 'Mistake 4: Generic Objective and Buzzword-Heavy Summary',
        subheading: '“Seeking a challenging role…” tells them nothing about you',
        paragraphs: [
          'If your resume still starts with “Seeking a challenging position in a dynamic organisation where I can utilise my skills…”, trust me, recruiters have seen that sentence a thousand times this month alone.',
          'Long, vague summaries full of buzzwords like “hard-working”, “team player”, “self-motivated” don’t show who you are or what role you actually want.',
          'Recruiters scan the top half of your resume in a few seconds to decide if it’s worth reading further; wasting that precious space on generic lines hurts you badly.',
          'Fix it: keep a short, specific summary instead — 2–3 lines stating your target role, tech stack, and what you’ve actually done (projects, internships, achievements). Make it sound like a human, not a school essay.',
        ],
      },

      {
        id: 'responsibilities-not-achievements',
        heading: 'Mistake 5: Writing Responsibilities Instead of Achievements',
        subheading: '“Worked on X” is not the same as “Delivered X”',
        paragraphs: [
          'Most fresher resumes are full of lines like “Worked on a web app” or “Responsible for data analysis”. That describes activity, not impact.',
          'Recruiters and ATS both look for verbs and outcomes — built, improved, reduced, increased, automated — and ideally some numbers that show what changed because you were there.',
          'When your bullets read like a job description, you blend in with everyone else. When they read like impact statements, you stand out even as a fresher.',
          'Fix it: rewrite each bullet to include an action verb plus a result. Even small outcomes count — “Built 5+ REST APIs for the internal admin dashboard”, or “Cleaned a 10,000-row dataset to improve report accuracy” sounds much stronger than “Worked with APIs” or “Handled data tasks”.',
        ],
      },

      {
        id: 'missing-keywords',
        heading: 'Mistake 6: Ignoring Job Description Keywords',
        subheading: 'You might be relevant — your resume just doesn’t show it',
        paragraphs: [
          'Modern ATS systems rank resumes based on how well they match the keywords in the job description — especially skills, tools and role-specific phrases.',
          'If the JD says “Java, Spring Boot, REST APIs, MySQL” and your resume only says “backend development using modern tech”, the system may treat you as a poor match.',
          'This is one of the biggest reasons good candidates get rejected before a human ever sees their name.',
          'Fix it: for each role, scan the JD and highlight keywords. Naturally weave the relevant ones into your skills, project descriptions and experience bullets — without stuffing or lying.',
        ],
      },

      {
        id: 'overcrowded-hard-to-scan',
        heading: 'Mistake 7: Overcrowded, Hard-to-Scan Resume',
        subheading: 'If they can’t understand it in 6 seconds, they move on',
        paragraphs: [
          'Recruiters typically spend only a few seconds — often 6 to 8 — on the first scan of your resume.',
          'If your document is filled edge-to-edge with tiny text, long paragraphs, and inconsistent formatting, they simply don’t have the time or energy to decode it.',
          'Overcrowding also hides your best content. Your key project or achievement gets lost between random coursework, unnecessary details and outdated information.',
          'Fix it: use clear section headings, enough white space, bullet points instead of long paragraphs, and a simple font. Make sure your top half tells a quick story: who you are, what you know, and what you’ve built.',
        ],
      },

      {
        id: 'irrelevant-and-outdated-info',
        heading: 'Mistake 8: Irrelevant Details and Certificate Dumping',
        subheading: 'More lines do not mean more value',
        paragraphs: [
          'Many freshers try to “fill space” by adding every webinar, workshop, and random certificate they’ve ever collected, even if it has nothing to do with the role.',
          'The result is a cluttered resume where recruiters have to dig through noise to find what actually matters: skills, projects, and any real-world experience.',
          'Similarly, putting school-level achievements front and centre when you already have degree-level work or projects can make your profile look less mature.',
          'Fix it: ruthlessly remove anything that doesn’t directly support the role you’re applying for. Keep a master list for yourself, but your job resume should feel focused and relevant, not like a full autobiography.',
        ],
      },

      {
        id: 'lying-or-overclaiming',
        heading: 'Mistake 9: Lying or Overclaiming Skills',
        subheading: 'They will check — and it will backfire',
        paragraphs: [
          'It’s tempting to add “Advanced Python”, “Expert in React”, or fake certifications just to look stronger on paper. But recruiters and hiring managers have become very quick at spotting exaggerations.',
          'Many surveys show that once a lie is caught — whether in background checks, reference checks, or technical rounds — it can lead to instant rejection, rescinded offers, or even long-term reputation damage.',
          'As a fresher, you don’t need to pretend to be an expert. You just need to show honesty, clear basics, and the ability to learn fast.',
          'Fix it: be accurate about your skill level. It’s okay to write “Learning React” or “Beginner in SQL” as long as your projects prove you’re actively working on it. Depth in a few skills beats fake mastery in ten.',
        ],
      },

      {
        id: 'no-projects-or-links',
        heading: 'Mistake 10: No Projects, Links or Online Presence',
        subheading: 'If there’s nothing to click, there’s nothing to trust',
        paragraphs: [
          'A lot of fresher resumes are just education, a list of skills, and a long certifications section — no GitHub, no portfolio, no project links to show actual work.',
          'Recruiters and tech leads want to see evidence: code you’ve written, apps you’ve built, dashboards you’ve created, anything that proves your skills beyond a bullet point.',
          'In 2026, not having a basic LinkedIn profile or at least one public project link can make you look less serious compared to other freshers who showcase their work openly.',
          'Fix it: even if you’re early in your journey, put 2–3 small but real projects on GitHub and mention them with links. Add your LinkedIn URL. Your resume should not just claim skills; it should point to proof.',
        ],
      },
    ],

    conclusion: {
      heading: 'Your Resume Is a Filter, Not Your Full Story',
      paragraphs: [
        'Most of the time, you’re not getting rejected because you’re hopeless; you’re getting rejected because your resume fails the first basic filter — ATS and a recruiter’s 6–10 second scan.',
        'If you avoid these ten mistakes — generic resumes, fancy designs that kill ATS, typos, vague objectives, responsibilities instead of impact, missing keywords, clutter, irrelevant details, lies, and zero proof — you’ll already be ahead of a huge chunk of applicants.',
        'Treat your resume like your first interview on paper. Keep it clean, honest, tailored and easy to read. Once it starts doing its real job — getting you into the room — you can let your actual skills and personality do the talking.',
      ],
      callToAction:
        'If you want, share your current resume structure — I’ll point out which of these ten mistakes you’re making and how to fix them one by one.',
    },
  },
};

export default blog6;