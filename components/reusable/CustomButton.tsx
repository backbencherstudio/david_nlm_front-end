
function CustomButton({ children, className ,fullWidth}: {
  children: React.ReactNode
  className?: string,
  fullWidth?: boolean
}) {
  return (
    <div className={`text-center ${fullWidth ? 'w-full' : ''}`}>
      <button className={`flex items-center gap-2 cursor-pointer ${className}`}>{children}</button>
    </div>
  )
}

export default CustomButton
