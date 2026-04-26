function HelpCTA() {
  return (
    <div className="mt-12 mb-6">
      <div className="max-w-4xl mx-auto bg-orange-50 rounded-2xl p-8 border border-orange-200">

        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">

          {/* Left content */}
          <div>
            <h3 className="text-2xl font-bold text-gray-800 mb-3">
              Need help with a resource?
            </h3>

            <p className="text-gray-600">
              If you cannot find a purchased resource or need assistance, reach out and we will help.
            </p>
          </div>

          {/* Right button */}
          <a
            href="/contact-us"
            className="inline-flex items-center justify-center px-6 py-3 bg-orange-500 text-white font-semibold rounded-lg hover:bg-orange-600 transition whitespace-nowrap"
          >
            Contact Support
          </a>

        </div>

      </div>
    </div>
  )
}

export default HelpCTA