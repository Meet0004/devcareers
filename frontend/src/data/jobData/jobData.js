const companiesData = [
  {
    id: 11,
    company: "Meesho",
    role: "Front-End Developer",
    hiringLink: "https://www.naukri.com/job-listings-front-end-developer-meesho-bengaluru-0-to-2-years-271125013614",
  }, {
    id: 120,
    company: "Qualcomm India Private Limited",
    role: "2026 Campus Hire Engineer SW",
    hiringLink: "https://careers.qualcomm.com/careers/job/446706882270",
  }
  ,{
    id: 159,
    company: 'Recipto',
    role: 'Node js Developer',
    hiringLink: 'https://www.naukri.com/job-listings-node-js-developer-recipto-hyderabad-0-to-3-years-180226006251',
  },{
    id: 160,
    company: 'Kisan Udyog',
    role: 'Python Developer Internship',
    hiringLink: 'https://unstop.com/o/91hUDoS?lb=vhj6xFV&utm_medium=Share&utm_source=internships&utm_campaign=Meetson4554',
  },{
    id: 161,
    company: 'Eqipped',
    role: 'Full Stack Developer Internship',
    hiringLink: 'https://unstop.com/o/x7Xifbn?lb=vhj6xFV&utm_medium=Share&utm_source=internships&utm_campaign=Meetson4554',
  }
  ,{
    id: 162,
    company: 'Adobe',
    role: 'Technical Consultant',
    hiringLink: 'https://careers.adobe.com/us/en/job/ADOBUSR158976EXTERNALENUS/Associate-Technical-Consultant',
  }
  ,{
    id: 163,
    company: 'Volvo',
    role: 'Graduate Apprentice Trainee',
    hiringLink: 'https://jobs.volvogroup.com/job/Bangalore-Graduate-Apprentice-Trainee-560058/1342119555',
  }
  ,{
    id: 164,
    company: 'Cognizant',
    role: 'Analyst Trainee GenC Hiring',
    hiringLink: 'https://app.joinsuperset.com/join/#/signup/student/jobprofiles/65ac431a-2d60-417a-b1f6-6b0f455a1d33'
  }
  ,{
    id: 165,
    company: 'Hevo', role: 'SDE I',
    hiringLink: 'https://jobs.lever.co/hevodata/c0c6ce59-880b-46fb-b45f-61e1aec2ad77',
  }
  ,{
    id: 166,
    company: 'Binated', role: 'UI UX Desginer',
    hiringLink: 'https://www.linkedin.com/jobs/view/4376013880',
  }
  ,{
    id: 167,
    company: 'Cencora', role: 'Analyst I',
    hiringLink: 'https://careers.cencora.com/us/en/job/CHKCENUSR261061EXTERNALENUS/Analyst-I-Data-IN'
  }
  ,{
    id: 168,
    company: 'Naukri Campus',
    role: 'Career Verse',
    hiringLink: 'https://www.naukri.com/campus/contests/career-fair-2026?action=enrol&referral=e2000084-rEKBRXA-pses&uapp=801&utm_source=share_desktop&utm_medium=referral'
  }
  ,{
    id: 169,
    company: 'EY', role: 'SharePoint - Interns',
    hiringLink: 'https://eyglobal.yello.co/jobs/1P5qeCUHqr5QOss5dpjGTw?job_board_id=c1riT--B2O-KySgYWsZO1Q'
  }
  ,{
    id: 170,
    company: 'Career Creed', role: 'Full stack developer',
    hiringLink: 'https://www.naukri.com/job-listings-full-stack-developer-career-creed-mumbai-0-to-5-years-240226502057'
  }
  ,{
    id: 171,
    company: 'Adengage', role: 'MERN stack developer Intern',
    hiringLink: 'https://www.naukri.com/job-listings-mern-stack-developer-intern-adengage-mumbai-hyderabad-mumbai-hyderabad-0-to-1-years-240226930230cd'
  }
  ,{
    id:172,
    company: 'Academian', role: 'Trainee Software Engineer',
    hiringLink: 'https://academian.keka.com/careers/jobdetails/129744'
  }
  ,{
    id:173,
    company: 'HCL', role:'Software Engineer',
    hiringLink:'https://unstop.com/o/QLPRqv3?lb=vhj6xFV&utm_medium=Share&utm_source=jobs&utm_campaign=Meetson4554'
  }
  ,{
    id:174,
    company: 'Learnyst', role:'Backend Engineer',
    hiringLink:'https://wellfound.com/jobs/3849463-backend-engineer-ruby-on-rails-offline-interview'
  }
  ,{
    id:175,
    company: 'Hummingbird Web Solutions Pvt Ltd', role: 'Software Intern',
    hiringLink: 'https://docs.google.com/forms/d/e/1FAIpQLSdUPM9Ww8O0cr4fWSOmFUOpNhdnFD5yB73H-IhaPp4lcrYtHQ/viewform'
  }
  ,{
    id: 176, company: 'Toddle', role: 'Associate Software Engineer Frontend', 
    hiringLink: 'https://wellfound.com/jobs/2212997-associate-software-engineer-frontend'
  }
  ,{
    id: 177, company: 'PrepAiro', role: 'Backend Engineer', 
    hiringLink: 'https://wellfound.com/jobs/3899713-backend-engineer-java-python'
  }
  ,{
    id: 178, company: 'Softdel', role: 'Full Stack Intern', 
    hiringLink: 'https://www.softdel.com/jobs/intern-full-stack'
  }
  ,{
    id: 179, company: 'MikeLegal', role: 'Backend Engineer SDE I',
    hiringLink: 'https://wellfound.com/jobs/936853-backend-engineer-sde-i',
  }
  ,{
    id: 180, company: 'MikeLegal', role: 'Backend Intern',
    hiringLink: 'https://wellfound.com/jobs/2657129-backend-intern'
  }
  ,{
    id: 181, company: 'RxGPT', role: 'Frontend Intern',
    hiringLink: 'https://wellfound.com/jobs/3543681-front-end-intern'
  }
  ,{
    id: 182, company: 'Aevis', role: 'Spring Boot Developer Intern',
    hiringLink: 'https://wellfound.com/l/2C5BcA'
  }
  ,{
    id: 183, company: 'GE Vernove', role: 'Software Engineering Specialist',
    hiringLink: 'https://www.naukri.com/job-listings-software-engineering-specialist-ge-renewable-energy-technologies-private-limited-hyderabad-0-to-2-years-260226915915'
  }
  ,{
    id: 184, company: 'QCS Ds Labs', role: 'Backend Engineer',
    hiringLink: 'https://www.naukri.com/job-listings-back-end-developer-qcs-dc-labs-bengaluru-0-to-5-years-250226907416'
  }
]

export default companiesData

