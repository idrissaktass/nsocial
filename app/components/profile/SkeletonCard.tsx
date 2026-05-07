export default function SkeletonCard() {
  return (
    <div className="bg-white border border-gray-200 rounded-sm mb-6 overflow-hidden animate-pulse">
      <div className="aspect-square w-full bg-gray-200" />
      
      <div className="p-4 space-y-3">
        <div className="flex gap-4">
          <div className="h-4 w-16 bg-gray-200 rounded" />
          <div className="h-4 w-16 bg-gray-200 rounded" />
        </div>
        <div className="space-y-2">
          <div className="h-4 w-full bg-gray-200 rounded" />
          <div className="h-4 w-2/3 bg-gray-200 rounded" />
        </div>
        <div className="h-3 w-20 bg-gray-100 rounded mt-4" />
      </div>
    </div>
  );
}