import React from "react"

const FeatureCard = ({ icon, title, description, bgColor, iconColor }) => {
  return (
    <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
      <div
        className={`w-12 h-12 ${bgColor} rounded-lg flex items-center justify-center mb-4`}
      >
        <svg
          className={`w-6 h-6 ${iconColor}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          {icon}
        </svg>
      </div>
      <h3 className="text-xl font-semibold text-slate-900 mb-2">{title}</h3>
      <p className="text-slate-600">{description}</p>
    </div>
  )
}

export default FeatureCard
