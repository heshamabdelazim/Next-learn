import React from 'react'

const layout = ({ children }:{children: React.ReactNode}) => {
  return (
    <div>
      <h1>This layout of the "Dashboard" or "root" and will appear on all pages routes</h1>
      <p>Example: Dashboard and usages</p>
        {children}
        <h2>Dashboard Footer here</h2>
    </div>
  )
}

export default layout

