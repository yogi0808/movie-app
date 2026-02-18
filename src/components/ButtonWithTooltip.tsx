import type { PropsWithChildren } from 'react';

interface PropType extends PropsWithChildren {
  tooltipText: string;
}

/**
 * rounded button with full rounding and also shows the tooltip on hover of the button
 *
 * @param {reactNode} children - react children for content on the button
 * @param {string} tooltipText - text to show in tooltip of the button
 * @returns - jsx for button with tooltip
 */
const ButtonWithTooltip = ({ children, tooltipText }: PropType) => {
  return (
    <button className="bg-primary w-11.5 h-11.5 flex justify-center items-center rounded-full cursor-pointer relative group">
      {children}
      <div className="absolute top-[120%] px-2 py-1 bg-primary rounded-lg hidden group-hover:flex text-nowrap">
        {tooltipText}
        <div className="absolute block bottom-full left-1/2 border-7 border-transparent border-b-primary -translate-x-1/2"></div>
      </div>
    </button>
  );
};

export default ButtonWithTooltip;
