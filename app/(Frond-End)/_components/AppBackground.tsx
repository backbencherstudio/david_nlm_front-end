import React from 'react'

const AppBackground = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="flow-root min-h-screen bg-[url('/heroBg.png')] bg-no-repeat bg-cover bg-center">{children}</div>
    )
}

export default AppBackground