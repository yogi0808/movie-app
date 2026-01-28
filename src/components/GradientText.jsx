const GradientText = ({ gradient, className, children }) => {
  return (
    <div className={`${gradient} ${className} w-fit bg-clip-text`}>
      {children}
    </div>
  )
}

export default GradientText
