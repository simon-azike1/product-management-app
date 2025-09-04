import { useContext } from "react"
import { ItemsContext } from "./ItemsContext"
import { Link } from "react-router-dom"

const ItemsDisplay = () => {
  const { items = [], deleteItem, filter, setFilter, filterItems = [] } = useContext(ItemsContext)

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header Section */}
      <div className="border-b bg-white shadow-sm">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between mt-25">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Product Inventory</h1>
              <p className="text-gray-600">Manage your product catalog and inventory</p>
            </div>
            <Link to="/add-items">
              <button className="inline-flex items-center px-4 py-2 bg-emerald-600 hover:bg-emerald-700 text-white font-medium rounded-lg transition-colors">
                <span className="mr-2">+</span>
                Add New Product
              </button>
            </Link>
          </div>
        </div>
      </div>

      {/* Search and Filter Section */}
      <div className="container mx-auto px-4 py-6">
        <div className="flex flex-col gap-4 md:flex-row md:items-center">
          <div className="relative flex-1">
            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">🔍</span>
            <input
              type="text"
              value={filter}
              onChange={(e) => setFilter(e.target.value)}
              placeholder="Search by name, brand, or type..."
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg bg-white focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none"
            />
          </div>
          <button className="inline-flex items-center px-4 py-2 border border-gray-300 bg-white hover:bg-gray-50 text-gray-700 font-medium rounded-lg transition-colors">
            <span className="mr-2">⚙️</span>
            Filters
          </button>
        </div>

        {/* Results Summary */}
        <div className="mt-4 flex items-center gap-2">
          <span className="text-gray-500">📦</span>
          <span className="text-sm text-gray-600">
            {filter ? `${filterItems.length} of ${items.length} products` : `${items.length} products total`}
          </span>
        </div>
      </div>

      {/* Products Grid */}
      <div className="container mx-auto px-4 pb-8">
        {filter && filterItems.length === 0 ? (
          <div className="bg-white border border-gray-200 rounded-lg shadow-sm">
            <div className="flex flex-col items-center justify-center py-12 px-6">
              <span className="text-4xl mb-4">📦</span>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">No products found</h3>
              <p className="text-gray-600 text-center">
                No items match your search criteria. Try adjusting your search terms.
              </p>
            </div>
          </div>
        ) : items.length === 0 ? (
          <div className="bg-white border border-gray-200 rounded-lg shadow-sm">
            <div className="flex flex-col items-center justify-center py-12 px-6">
              <span className="text-4xl mb-4">📦</span>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">No products yet</h3>
              <p className="text-gray-600 text-center mb-4">
                Start building your inventory by adding your first product.
              </p>
              <Link to="/add-items">
                <button className="inline-flex items-center px-4 py-2 bg-emerald-600 hover:bg-emerald-700 text-white font-medium rounded-lg transition-colors">
                  <span className="mr-2">+</span>
                  Add Your First Product
                </button>
              </Link>
            </div>
          </div>
        ) : (
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {(filter ? filterItems : items).map((item) => (
              <div
                key={item.id}
                className="bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="p-6 pb-3">
                  <div className="flex items-start justify-between">
                    <div className="space-y-1">
                      <h3 className="text-lg font-semibold text-gray-900">{item.name}</h3>
                      <p className="text-gray-600">{item.brand}</p>
                    </div>
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-emerald-100 text-emerald-800">
                      {item.type}
                    </span>
                  </div>
                </div>
                <div className="px-6 pb-6">
                  <div className="flex items-center justify-between">
                    <div className="text-2xl font-bold text-emerald-600">₦{Number(item.price).toLocaleString()}</div>
                    <button
                      onClick={() => deleteItem(item.id)}
                      className="inline-flex items-center px-3 py-1.5 bg-red-600 hover:bg-red-700 text-white text-sm font-medium rounded-md transition-colors"
                    >
                      🗑️
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

export default ItemsDisplay
