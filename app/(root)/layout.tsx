import React from 'react'

const layout = ({ children }:{children: React.ReactNode}) => {
  return (
    <div>
      <h1>This layout of the "Homepage" or "root" and will appear on all pages routes</h1>
      <p>Example: suppose navbar here</p>
        {children}
        <h2>Root Footer here</h2>
    </div>
  )
}

export default layout
