import React from 'react'
import {Link} from 'react-router-dom'
import Home from './Home';
const Footer = () => {
  return (
    <div>
       {/* Footer */}
      <footer className="bg-slate-900 text-white py-12 mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-4">ProductHub</h3>
            <p className="text-slate-400 mb-6">Streamline your product management workflow</p>
            <div className="flex justify-center space-x-6">
              <Link to="/" className="text-slate-400 hover:text-white transition-colors">
                Home
              </Link>
              <Link to="/items" className="text-slate-400 hover:text-white transition-colors">
                Products
              </Link>
              <Link to="/add-items" className="text-slate-400 hover:text-white transition-colors">
                Add Items
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Footer;
