import PackagesGrid from './PackagesGrid'

const PackageResources = () => {
  return (
    <div style={{ animation: 'fadeUp 0.35s cubic-bezier(0.22,1,0.36,1)', position: 'relative', zIndex: 1 }}>
      <PackagesGrid />
    </div>
  )
}

export default PackageResources