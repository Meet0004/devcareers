import ResourceCard from './ResourceCard';
import ResourceNotFound from './ResourceNotFound';

function ResourcesGrid({ resources, searchQuery, selectedFilters, onClearSearch, onClearFilters }) {
  if (resources.length === 0) {
    return (
      <ResourceNotFound
        searchQuery={searchQuery}
        selectedFilters={selectedFilters}
        onClearSearch={onClearSearch}
        onClearFilters={onClearFilters}
      />
    );
  }

  return (
    <>
      <div className="space-y-4 lg:hidden">
        {resources.map((resource) => (
          <ResourceCard key={resource.id} resource={resource} isMobile={true} />
        ))}
      </div>
      <div className="hidden lg:grid lg:grid-cols-5 gap-6 ml-8 mr-8">
        {resources.map((resource) => (
          <ResourceCard key={resource.id} resource={resource} isMobile={false} />
        ))}
      </div>
    </>
  );
}

export default ResourcesGrid;