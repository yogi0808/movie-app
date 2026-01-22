const GradientText = ({ gradient, children }) => {
  return <div className={`${gradient} w-fit bg-clip-text`}>{children}</div>
}

export default GradientText
