// ─────────────────────────────────────────────────────────────
// JOB DATA TEMPLATE
//
// Each job object has:
//   id, company, role, hiringLink   — same as before
//   quickInfo[]  — at-a-glance pills shown at top (optional)
//   sections[]   — ordered list of content sections
//
// SECTION TYPES available (use exact string as `type`):
//   "overview"          Role Overview
//   "responsibilities"  Responsibilities
//   "skills"            Skills & Requirements
//   "nice_to_have"      Nice to Have
//   "benefits"          What You Get
//   "salary"            Salary & Compensation
//   "work_details"      Work Details
//   "education"         Education
//   "about_company"     About the Company
//   "contact"           Contact & Application
//
// If `items` is empty [] or the section is removed entirely,
// it won't be shown — no need to delete, just leave items: []
// ─────────────────────────────────────────────────────────────