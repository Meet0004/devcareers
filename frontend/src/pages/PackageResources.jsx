import { useNavigate } from 'react-router-dom';

import ResourcesHeader from '../components/resource/ResourcesHeader';
import TabSwitcher from '../components/resource/TabSwitcher';
import PackagesGrid from '../components/resource/PackagesGrid';
import HelpCTA from '../components/common/HelpCTA';

function PackageResources() {
  const navigate = useNavigate();

  const handleTabChange = (tab) => {
    if (tab === 'resources') navigate('/resources');
  };

  return (
    <div className="bg-gradient-to-b from-white to-orange-50 rounded-lg shadow-md p-6 text-center">
      <ResourcesHeader />
      <TabSwitcher activeTab="packages" onTabChange={handleTabChange} />
      <PackagesGrid />
      <HelpCTA />
    </div>
  );
}

export default PackageResources;