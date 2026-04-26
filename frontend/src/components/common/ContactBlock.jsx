export default function ContactBlock({ description, note }) {
  return (
    <div className="border border-gray-200 rounded-2xl p-5">

      <p className="text-sm text-gray-500 leading-relaxed mb-4">{description}</p>

      <div className="flex items-center gap-3">
        <a
          href="/contact-us"
          className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 !text-white font-bold text-sm px-5 py-2.5 rounded-xl transition-colors duration-200 no-underline"
        >
          Contact Us
          <svg width="14" height="14" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </a>
        {note && <p className="text-xs text-gray-800 leading-relaxed m-0">{note}</p>}
      </div>

    </div>
  )
}