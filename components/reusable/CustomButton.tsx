
function CustomButton({ children, className }: {
  children: React.ReactNode
  className?: string
}) {
  return (
    <div className="text-center">
      <button className={`flex items-center gap-2 cursor-pointer ${className}`}>{children}</button>
    </div>
  )
}

export default CustomButton
