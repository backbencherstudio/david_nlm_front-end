import React from 'react'

const Container = ({ children, className }: { children: React.ReactNode, className?: string }) => {
    return (
        <div className={`px-4 max-w-[1312px] mx-auto ${className}`}>{children}</div>
    )
}

export default Container