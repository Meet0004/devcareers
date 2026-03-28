import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import companiesData from '../../data/jobData/jobData'

// ── Icons ──────────────────────────────────────────────────────────────────────
const Icon = {
  Briefcase: () => (
    <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
      <rect x="2" y="7" width="20" height="14" rx="2" />
      <path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" />
    </svg>
  ),
  CheckCircle: () => (
    <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
      <circle cx="12" cy="12" r="10" />
      <path d="m9 12 2 2 4-4" />
    </svg>
  ),
  XCircle: () => (
    <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
      <circle cx="12" cy="12" r="10" />
      <path d="m15 9-6 6M9 9l6 6" />
    </svg>
  ),
  FileText: () => (
    <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
      <polyline points="14 2 14 8 20 8" />
      <line x1="16" y1="13" x2="8" y2="13" />
      <line x1="16" y1="17" x2="8" y2="17" />
    </svg>
  ),
  ChevronDown: ({ open }) => (
    <svg
      className={`w-4 h-4 transition-transform duration-300 ${open ? 'rotate-180' : ''}`}
      fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"
    >
      <path d="m6 9 6 6 6-6" />
    </svg>
  ),
  Arrow: () => (
    <svg className="w-3 h-3" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
      <path d="M5 12h14M12 5l7 7-7 7" />
    </svg>
  ),
  Star: () => (
    <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
    </svg>
  ),
}

// ── Tips Data ──────────────────────────────────────────────────────────────────
const RESUME_TIPS = [
  'One page resume only — Recruiters usually spend about 6–8 seconds looking at a resume. If your resume has 2 pages, they may read only the first half and skip the rest. Remove things like your 10th-grade school name, hobbies, or "references available on request". Keep only the information that clearly shows your skills, projects, and value.',

  'Use the same keywords as the job description — Copy the job description and paste it into a word cloud tool. The biggest words are the keywords the ATS system is searching for. If those words are missing from your resume, the system may reject it automatically. Use the exact same terms they use. For example, if they write "data analysis", don’t write "data analytics".',

  'Use a professional email address — Your email is the first thing recruiters see. Emails like cool.dude2004@gmail.com or rockstarboy123@gmail.com look unprofessional. Create a simple email like firstname.lastname@gmail.com. It takes only a few minutes and makes you look more serious about your career.',

  'Use numbers to show impact — Sentences like "Improved app performance" are too vague. Numbers make recruiters notice you. For example: "Reduced API response time by 43% serving 50,000 daily users." Try to answer: how much, how many, how fast, or how often. If there are no numbers, try rewriting the point with measurable results.',

  'Avoid fancy resume formatting — ATS systems cannot read complex designs properly. Multi-column layouts, tables, text boxes, headers, footers, icons, images, and graphs can break the resume when the system scans it. Use a simple single-column format. It may look plain, but ATS systems read it correctly.',

  'Make your LinkedIn match your resume — Recruiters often search your name on LinkedIn after reading your resume. If the dates, job titles, or company names are different between LinkedIn and your resume, it can create doubt and lead to rejection. Make sure everything matches exactly.',

  'For freshers, put Skills and Projects above Education — If you don’t have work experience, your strengths are your skills and projects. First show your tech stack and tools. Then include projects that prove you actually used those skills, not just watched tutorials.',

  'Start every bullet with strong action verbs — Begin each point with words like Built, Designed, Optimized, Automated, Reduced, Led, Deployed, Integrated, or Delivered. Avoid weak phrases like "Responsible for" or "Worked on". Strong verbs show that you actually created or improved something.',

  'Customize your resume for every job application — Don’t send the same resume everywhere. Adjust it slightly for each job based on the job description. Many companies use ATS scoring. A resume with around 70% keyword match may pass the system, while 60% may not. Keep a master resume and edit it for each role.',

  'Always save your resume as a PDF — Unless the company specifically asks for a Word file. PDFs keep your formatting the same on every device and operating system. Word files can look different or broken on another computer. Export it as a PDF before sending.'
]

const INTERVIEW_DOS = [
  'Spend time researching the company the night before. Read their About page, recent news, Glassdoor reviews, and LinkedIn posts from employees. Understand what the company does, who their competitors are, and what problems they solve. When you mention something specific in the interview, it shows genuine interest instead of just applying anywhere.',

  'Use the STAR method for behavioural questions. Situation: explain the context in 1 or 2 sentences. Task: explain what your responsibility was. Action: explain what YOU did. Result: explain what happened, preferably with numbers. This keeps your answer clear and around 90 seconds instead of a long confusing explanation.',

  'Think out loud during technical questions. Interviewers want to see how you think, not just the final answer. Say things like "My first idea is X because of Y, but I want to check if there is an edge case with Z." Even if the final answer is wrong, clear thinking makes a strong impression.',

  'Prepare stories before the interview. Write down 5 real situations from your projects or college life such as solving a difficult problem, handling conflict, failing and recovering, showing initiative, and working in a team. During the interview you simply choose the story that fits the question.',

  'Ask 2 or 3 smart questions at the end. For example: "What does success look like in the first 90 days for this role?" or "What is the biggest challenge the team is facing right now?" This shows you are thinking like someone who wants to work there, not just someone looking for any job.',

  'Dress slightly more professional than the company culture. This applies even for virtual interviews. First impressions form very quickly and are difficult to change. Dressing professionally always creates a positive first impression.',

  'Confirm interview details 24 hours before. Double check the office address or video meeting link. If the interview is in person, check the travel route earlier. If it is online, test your mic, camera, and internet the night before so there are no surprises.',

  'Bring 3 printed copies of your resume for in person interviews. Even if the company already has it digitally. Giving a clean printed resume shows preparation and also helps you reference points easily during the conversation.',

  'Send a thank you email within 24 hours after the interview. A simple message like "Thank you for your time today. I enjoyed discussing [specific topic]. It increased my interest in this role." It takes only a few minutes and many candidates never do it.',

  'Control nervousness through preparation. Nervousness usually comes from feeling unprepared. Practice your answers out loud at least three times before the interview. Recording yourself and watching it helps you notice mistakes and improve quickly.'
]

const INTERVIEW_DONTS = [
  "Never say I don't know and stop. That creates a bad impression. Instead say something like I have not worked with that before, but here is how I would try to solve it. Then explain your thinking. Interviewers know you do not know everything. They want to see how you think when facing a problem.",

  "Never speak negatively about your previous company, college, or professors. Even if your experience was bad. The interviewer may think you will speak about their company the same way later. If asked why you are leaving, say you want better growth, new challenges, or a role that fits your skills better.",

  "Never lie about your skills. If you write Python on your resume, you should expect questions about Python. If you mention SQL, they may ask you to write a query. If you lie, it usually becomes clear very quickly and the interview may end immediately. Always be honest about what you know.",

  "Never give very short answers to open questions. For example, when asked tell me about yourself, do not just say I am a fresher from XYZ college. Instead talk about what you studied, the projects you built, the technologies you used, and why you are interested in this role.",

  "Never check your phone or watch during the interview. Even a quick look can give the impression that you are distracted or not interested. Keep your phone on silent before the interview starts. If the interview is online, close unnecessary tabs and focus fully on the conversation.",

  "Never ask about salary in the first interview unless the interviewer brings it up. The first round is usually about your skills and fit for the role. Asking about salary too early may make it seem like money is your only priority. Salary discussions usually happen in later rounds.",

  "Never talk for too long without a pause. Very long answers can make the interviewer lose interest. Try to keep answers clear and around one minute when possible. If you can explain something in one minute, do not take three minutes.",

  "Never apologise too much. Saying sorry once if you misheard a question is okay. But repeating sorry I am nervous or sorry I do not know too many times reduces your confidence. Take a moment, think, and answer calmly.",

  "Never claim soft skills without giving an example. Instead of saying I am a good team player, explain a real situation. For example during my final year project I coordinated a team of four people and we completed the project two weeks early. Real examples make your claim believable.",

  "Never leave the interview without asking about the next steps. Before the interview ends, ask what the next stage of the process is and when you might hear back. This shows you are interested and helps you know what to expect."
]

const APPLICATION_TIPS = [
  "Read the full job description carefully. Many candidates only skim it and miss important details. It usually contains required skills, preferred qualifications, team information, and expectations. Understanding this helps you tailor your resume and prepare better for the interview.",

  "Try to apply within the first 48 hours after a job is posted. Recruiters often review applications in groups and the earliest ones usually get the most attention. A job posted yesterday with few applicants is easier to stand out in than one posted weeks ago with hundreds of applications.",

  "Do not apply to the same job multiple times. Many ATS systems detect duplicate applications and may mark them as careless or automatically reject them. Apply once carefully and follow up later if you do not hear back.",

  "Customize your cover letter for each company. You do not need to rewrite the entire letter every time. Change the first paragraph to mention the specific company and role. Also include one thing about the company that genuinely interests you.",

  "Check every field before submitting your application. Make sure your email address, phone number, and graduation year are correct. Even a small mistake like a wrong digit in your phone number can prevent recruiters from contacting you.",

  "Upload your resume as a PDF and name the file properly. Use a name like FirstName-LastName-Resume.pdf. Avoid names like resume_final_v3 or new_resume_latest. A clean file name looks professional.",

  "Follow the application instructions exactly. If the job post says to include expected salary in the subject line, do it. If it says apply through the portal only, follow that instruction. Companies sometimes use these instructions to see if candidates pay attention to details.",

  "Keep a record of every job you apply for. Use a spreadsheet to track company name, role, application date, status, follow up date, and recruiter contact if available. This helps you stay organised when applying to many roles.",

  "Research the typical salary before applying. Use websites like Glassdoor, AmbitionBox, or LinkedIn Salary to understand the normal range for that role. When HR asks about your salary expectations, you will be prepared with a realistic range.",

  "Stay active after applying. Update your LinkedIn profile, interact with posts from the company, and connect with employees working in similar roles. Being visible can sometimes help recruiters notice you."
]

// ── Collapsible Panel ──────────────────────────────────────────────────────────
const Panel = ({ title, icon: IconComp, accent = '#FA5500', defaultOpen = true, children }) => {
  const [open, setOpen] = useState(defaultOpen)

  return (
    <div className="rounded-xl overflow-hidden shadow-sm border border-gray-100 bg-white">
      <button
        onClick={() => setOpen(o => !o)}
        className="w-full flex items-center justify-between px-5 py-4 text-left"
        style={{ borderLeft: `4px solid ${accent}` }}
      >
        <div className="flex items-center gap-2.5">
          <span style={{ color: accent }}><IconComp /></span>
          <span className="font-semibold text-gray-800 text-sm tracking-wide uppercase">{title}</span>
        </div>
        <span className="text-gray-400"><Icon.ChevronDown open={open} /></span>
      </button>

      <div
        className="transition-all duration-300 overflow-hidden"
        style={{ maxHeight: open ? '1000px' : '0px', opacity: open ? 1 : 0 }}
      >
        <div className="px-5 pb-5 pt-1">{children}</div>
      </div>
    </div>
  )
}

// ── Tip List ───────────────────────────────────────────────────────────────────
const TipList = ({ items, variant = 'check' }) => (
  <ul className="space-y-2.5 mt-1">
    {items.map((tip, i) => (
      <li key={i} className="flex items-start gap-2.5 text-sm text-gray-600 leading-relaxed">
        <span
          className="mt-0.5 shrink-0"
          style={{ color: variant === 'check' ? '#22c55e' : '#ef4444' }}
        >
          {variant === 'check' ? <Icon.CheckCircle /> : <Icon.XCircle />}
        </span>
        {tip}
      </li>
    ))}
  </ul>
)

// ── Recent Openings — top 6 by highest id, excludes current job ───────────────
const RecentOpenings = ({ currentCompany, currentRole }) => {
  const currentJob = companiesData.find(
    c => c?.company === currentCompany && c?.role === currentRole
  )

  const recent = [...companiesData]
    .filter(Boolean)                          // ← remove undefined entries
    .sort((a, b) => b.id - a.id)
    .filter(c => c.id !== currentJob?.id)
    .slice(0, 6)

  return (
    <Panel title="Recent Job Openings" icon={Icon.Briefcase} accent="#FA5500">
      <ul className="divide-y divide-gray-50 mt-1">
        {recent.map((item) => (
          <li key={item.id}>
            <Link
              to={`/company-details/${encodeURIComponent(item.company)}/${encodeURIComponent(item.role)}`}
              className="flex items-center justify-between py-3 group"
            >
              <div>
                <p className="text-sm font-semibold text-gray-800 group-hover:text-[#FA5500] transition-colors">
                  {item.role}
                </p>
                <p className="text-xs text-gray-400 mt-0.5">{item.company}</p>
              </div>
              <div className="flex items-center gap-2">
                {item.batch && (
                  <span className="text-xs bg-orange-50 text-[#FA5500] border border-orange-100 px-2 py-0.5 rounded-full font-medium">
                    {item.batch}
                  </span>
                )}
                <span className="text-gray-300 group-hover:text-[#FA5500] transition-colors">
                  <Icon.Arrow />
                </span>
              </div>
            </Link>
          </li>
        ))}
      </ul>

      <Link
        to="/company-details"
        className="mt-3 inline-flex items-center gap-1.5 text-xs font-semibold text-[#FA5500] hover:underline"
      >
        View all openings <Icon.Arrow />
      </Link>
    </Panel>
  )
}

// ── Resume Tips ────────────────────────────────────────────────────────────────
const ResumeTipsPanel = () => (
  <Panel title="ATS Resume Tips" icon={Icon.FileText} accent="#FA5500" defaultOpen={false}>
    <TipList items={RESUME_TIPS} variant="check" />
  </Panel>
)

// ── Interview Tips ─────────────────────────────────────────────────────────────
const InterviewTipsPanel = () => {
  const [tab, setTab] = useState('do')

  return (
    <Panel title="Interview Tips" icon={Icon.Star} accent="#FA5500" defaultOpen={false}>
      <div className="flex gap-2 mb-3 mt-1">
        {['do', 'dont'].map(t => (
          <button
            key={t}
            onClick={() => setTab(t)}
            className="flex-1 py-1.5 rounded-lg text-xs font-semibold transition-all duration-200"
            style={{
              background: tab === t ? '#FA5500' : '#fff5f0',
              color: tab === t ? '#fff' : '#FA5500',
              border: `1px solid ${tab === t ? '#FA5500' : '#fcd9c8'}`,
            }}
          >
            {t === 'do' ? "✅ Do's" : "❌ Don'ts"}
          </button>
        ))}
      </div>
      {tab === 'do'
        ? <TipList items={INTERVIEW_DOS} variant="check" />
        : <TipList items={INTERVIEW_DONTS} variant="cross" />
      }
    </Panel>
  )
}

// ── Application Tips ───────────────────────────────────────────────────────────
const ApplicationTipsPanel = () => (
  <Panel title="How to Apply Successfully" icon={Icon.CheckCircle} accent="#FA5500" defaultOpen={false}>
    <TipList items={APPLICATION_TIPS} variant="check" />
  </Panel>
)

// ── Notice Banner ──────────────────────────────────────────────────────────────
const NoticeBanner = () => (
  <div
    className="rounded-xl px-5 py-4 flex items-start gap-3 border"
    style={{ background: '#fff8f5', borderColor: '#fcd9c8' }}
  >
    <span className="text-lg mt-0.5">📢</span>
    <p className="text-xs text-gray-600 leading-relaxed">
      <span className="font-semibold text-[#FA5500]">We post only verified openings.</span>{' '}
      Shortlisted candidates are contacted directly by the company. Stay active and check back daily for new listings.
    </p>
  </div>
)

// ── Main Export ────────────────────────────────────────────────────────────────
const BelowDescriptionPanels = ({ currentCompany, currentRole }) => {
  return (
    <div className="mt-8 space-y-4">
      <div className="flex items-center gap-3">
        <div className="flex-1 h-px bg-gray-100" />
        <span className="text-xs text-gray-400 font-medium uppercase tracking-widest whitespace-nowrap">
          More Resources
        </span>
        <div className="flex-1 h-px bg-gray-100" />
      </div>

      <NoticeBanner />
      <RecentOpenings currentCompany={currentCompany} currentRole={currentRole} />
      <ResumeTipsPanel />
      <InterviewTipsPanel />
      <ApplicationTipsPanel />
    </div>
  )
}

export default BelowDescriptionPanels