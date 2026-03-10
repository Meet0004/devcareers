import { useState, useEffect, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import ResourcesData from '../data/resourceData/resourceData';
import { placeholderWords } from '../data/resourceData/searchBarData';

import ResourcesHeader from '../components/resource/ResourcesHeader';
import TabSwitcher from '../components/resource/TabSwitcher';
import SearchBar from '../components/resource/SearchBar';
import FilterDropdown, { filterOptions } from '../components/resource/FilterDropdown';
import ResourcesGrid from '../components/resource/ResourcesGrid';
import HelpCTA from '../components/common/HelpCTA';

const priorityIds = [1, 3, 28];

const shuffleArray = (array) => {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
};

function Resources() {
  const navigate = useNavigate();

  const [searchQuery, setSearchQuery] = useState('');
  const [placeholder, setPlaceholder] = useState('');
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [selectedFilters, setSelectedFilters] = useState([]);
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  const organizedResources = useMemo(() => {
    const priority = [];
    const free = [];
    const others = [];

    ResourcesData.forEach((resource) => {
      if (priorityIds.includes(resource.id)) {
        priority.push(resource);
      } else if (resource.price === '') {
        free.push(resource);
      } else {
        others.push(resource);
      }
    });

    priority.sort((a, b) => priorityIds.indexOf(a.id) - priorityIds.indexOf(b.id));

    const shuffledFree = shuffleArray(free);
    const shuffledOthers = shuffleArray(others);
    const randomPool = shuffleArray([...shuffledFree.slice(2), ...shuffledOthers]);

    return [
      priority[0],
      priority[1],
      shuffledFree[0],
      shuffledFree[1],
      priority[2],
      ...randomPool,
    ].filter(Boolean);
  }, []);

  useEffect(() => {
    
    const currentWord = placeholderWords[wordIndex];
    const typingSpeed = isDeleting ? 10 : 100;
    const pauseTime = 300;

    const timer = setTimeout(() => {
      if (!isDeleting) {
        if (placeholder.length < currentWord.length) {
          setPlaceholder(currentWord.slice(0, placeholder.length + 1));
        } else {
          setTimeout(() => setIsDeleting(true), pauseTime);
        }
      } else {
        if (placeholder.length > 0) {
          setPlaceholder(placeholder.slice(0, -1));
        } else {
          setIsDeleting(false);
          setWordIndex((prev) => (prev + 1) % placeholderWords.length);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [placeholder, isDeleting, wordIndex]);

  const toggleFilter = (filterId) => {
    setSelectedFilters((prev) =>
      prev.includes(filterId) ? prev.filter((f) => f !== filterId) : [...prev, filterId]
    );
  };

  const clearFilters = () => setSelectedFilters([]);

  const handleTabChange = (tab) => {
    if (tab === 'packages') navigate('/resources/packages');
  };

  const filteredResources = organizedResources.filter((resource) => {
    const query = searchQuery.toLowerCase();
    const matchesSearch =
      resource.title.toLowerCase().includes(query) ||
      resource.description.toLowerCase().includes(query);

    if (selectedFilters.length === 0) return matchesSearch;
    return matchesSearch && selectedFilters.some((filterId) => resource[filterId] === true);
  });
// Add alongside your other useState declarations
const [mounted, setMounted] = useState(false);
useEffect(() => { setMounted(true); }, []);
  return (
    <div className="bg-gradient-to-b from-white to-orange-50 rounded-lg shadow-md p-6 text-center">
      <ResourcesHeader />
      <TabSwitcher activeTab="resources" onTabChange={handleTabChange} />

      <div className="mb-6 flex flex-col items-center">
        <div className="flex items-center gap-3 w-full max-w-3xl">
          <SearchBar
            value={searchQuery}
            onChange={setSearchQuery}
            placeholder={placeholder}
          />
          <FilterDropdown
            selectedFilters={selectedFilters}
            onToggle={toggleFilter}
            onClear={clearFilters}
            isOpen={isFilterOpen}
            onOpenChange={setIsFilterOpen}
          />
        </div>

        <div className="mt-3 flex items-center gap-3 flex-wrap justify-center">
          {selectedFilters.map((filterId) => {
            const filter = filterOptions.find((f) => f.id === filterId);
            return (
              <span
                key={filterId}
                className={`flex items-center gap-1.5 ${filter.bgColor} ${filter.textColor} text-xs font-semibold px-3 py-1.5 rounded-full border ${filter.borderColor} shadow-sm`}
              >
                {filter.icon}
                {filter.label}
                <button
                  onClick={() => toggleFilter(filterId)}
                  className="ml-1 hover:bg-white/50 rounded-full p-0.5 transition-colors"
                >
                  <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
              </span>
            );
          })}

          {(searchQuery || selectedFilters.length > 0) && (
            <p className="text-sm text-gray-600">
              Found {filteredResources.length} resource{filteredResources.length !== 1 ? 's' : ''}
            </p>
          )}
        </div>
      </div>

      <ResourcesGrid
        resources={filteredResources}
        searchQuery={searchQuery}
        selectedFilters={selectedFilters}
        onClearSearch={(val) => {
          setSearchQuery(val ?? '');
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
        onClearFilters={clearFilters}
      />

      <HelpCTA />
    </div>
  );
}

export default Resources;