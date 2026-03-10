import PackagesGrid from '../components/resource/PackagesGrid';
import HelpCTA from '../components/common/HelpCTA';

function Package_Resources() {
  return (
    <div className="bg-gradient-to-b from-white to-orange-50 rounded-lg shadow-md p-6 text-center">
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-gray-800 mb-2">Resource Packages</h2>
        <p className="text-gray-500 text-sm">Curated bundles to supercharge your learning</p>
      </div>

      <PackagesGrid />

      <HelpCTA />
    </div>
  );
}

export default Package_Resources;