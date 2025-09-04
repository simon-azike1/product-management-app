import { Link } from "react-router-dom"
import { motion } from "framer-motion"
import FeatureCard from "./FeatureCard"
import Footer from "./Footer"

const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      {/* Hero Section */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-slate-900 mb-6 mt-25">
            Streamline Your
            <span className="text-cyan-600 block">Product Management</span>
          </h1>
          <p className="text-xl text-slate-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            Take control of your inventory with our intuitive product
            management system. Add, track, and organize your products with ease
            and efficiency.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/add-items">
              <button className="px-8 py-4 bg-cyan-600 text-white rounded-lg hover:bg-cyan-700 transition-all duration-200 font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-0.5">
                Add New Product
              </button>
            </Link>
            <Link to="/items">
              <button className="px-8 py-4 bg-white text-cyan-600 border-2 border-cyan-600 rounded-lg hover:bg-cyan-50 transition-all duration-200 font-semibold">
                View Inventory
              </button>
            </Link>
          </div>
        </div>

        {/* Feature Cards */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="grid md:grid-cols-3 gap-8 mb-16"
        >
          <FeatureCard
            icon={<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />}
            title="Easy Product Addition"
            description="Quickly add new products to your inventory with our streamlined form interface."
            bgColor="bg-cyan-100"
            iconColor="text-cyan-600"
          />

          <FeatureCard
            icon={
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
              />
            }
            title="Inventory Tracking"
            description="Keep track of your product quantities, categories, and important details in one place."
            bgColor="bg-orange-100"
            iconColor="text-orange-600" />

          <FeatureCard
            icon={
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            }
            title="Smart Search"
            description="Find products instantly with our powerful search and filtering capabilities."
            bgColor="bg-slate-100"
            iconColor="text-slate-600"
          />
        </motion.div>

        {/* Stats Section */}
        <div className="bg-white rounded-2xl p-8 shadow-sm">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-cyan-600 mb-2">500+</div>
              <div className="text-slate-600">Products Managed</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-cyan-600 mb-2">99.9%</div>
              <div className="text-slate-600">Uptime</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-cyan-600 mb-2">24/7</div>
              <div className="text-slate-600">Support</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-cyan-600 mb-2">Fast</div>
              <div className="text-slate-600">Performance</div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

export default Home
