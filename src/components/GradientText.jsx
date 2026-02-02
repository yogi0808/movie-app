/**
 * gradient text component creates the div with gradient and clip the background to text for creating text wise gradient effect.
 *
 * @param {object} param0
 *  @param {tailwind class names} gradient - class names for gradient background
 *  @param {tailwind class names} className - class names for background div
 *  @param {element} children - expected childe element with text like p, h1... with text color transparent
 * @returns - jsx for gradient text background with gradient
 */
const GradientText = ({ gradient, className, children }) => {
  return (
    <div className={`${gradient} ${className} w-fit bg-clip-text`}>
      {children}
    </div>
  );
};

export default GradientText;
