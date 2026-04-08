import React from 'react'

const AppBackground = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="w-full bg-[url('/heroBg.png')] bg-no-repeat bg-cover bg-bottom -mt-[112px] pt-[112px] pb-12">
            {children}
        </div>
    )
}

export default AppBackground