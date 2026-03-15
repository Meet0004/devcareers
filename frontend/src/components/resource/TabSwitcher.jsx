function TabSwitcher({ activeTab, onTabChange }) {
  return (
    <div className="flex items-center justify-center gap-2 ">
      <button
        onClick={() => onTabChange('resources')}
        className={`px-6 py-2.5 rounded-lg font-semibold transition-all ${
          activeTab === 'resources'
            ? 'bg-amber-500 text-white shadow-md'
            : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
        }`}
      >
        Individual Resources
      </button>
      <button
        onClick={() => onTabChange('packages')}
        className={`flex items-center gap-2 px-6 py-2.5 rounded-lg font-semibold transition-all ${
          activeTab === 'packages'
            ? 'bg-gradient-to-r from-green-500 to-emerald-500 text-white shadow-md'
            : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
        }`}
      >
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
          <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
        </svg>
        Packages (Save More)
      </button>
    </div>
  );
}

export default TabSwitcher;
