import React from 'react'

/**
 * StickySidebarNav
 *
 * Sticky table-of-contents sidebar with active section highlighting.
 * Used in Privacy Policy and Terms & Conditions.
 *
 * Props:
 *  - sections       {Array}   Required. Array of { id: string, emoji: string, title: string }.
 *  - activeSection  {string}  Required. The id of the currently active section.
 *  - onScrollTo     {func}    Required. Called with section id when a nav item is clicked.
 *  - label          {string}  Optional. Heading above the nav list. Defaults to 'Contents'.
 *
 * Typical setup in parent:
 *   const [activeSection, setActiveSection] = useState(sections[0].id)
 *
 *   const scrollTo = (id) => {
 *     setActiveSection(id)
 *     document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
 *   }
 *
 * Usage:
 *   <StickySidebarNav
 *     sections={sections}
 *     activeSection={activeSection}
 *     onScrollTo={scrollTo}
 *   />
 */
const StickySidebarNav = ({ sections = [], activeSection, onScrollTo, label = 'Contents' }) => (
  <aside className="hidden lg:block w-64 flex-shrink-0">
    <div className="sticky top-8 bg-white rounded-2xl shadow-lg p-5 border border-amber-100">
      <p className="text-xs font-bold uppercase tracking-widest text-amber-600 mb-4">
        {label}
      </p>
      <nav className="space-y-1">
        {sections.map((s) => (
          <button
            key={s.id}
            onClick={() => onScrollTo(s.id)}
            className={`w-full text-left px-3 py-2 rounded-lg text-sm font-medium transition-all flex items-center gap-2 ${
              activeSection === s.id
                ? 'bg-amber-100 text-amber-800 font-bold'
                : 'text-gray-600 hover:bg-gray-100 hover:text-gray-900'
            }`}
          >
            <span>{s.emoji}</span>
            <span>{s.title}</span>
          </button>
        ))}
      </nav>
    </div>
  </aside>
)

export default StickySidebarNav
