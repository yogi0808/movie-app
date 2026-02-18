import { Activity } from 'react';
import classNames from 'classnames';

import { getRating } from '@utils/utils';
import type { RatingIndicatorProps } from '@utils/types';

/**
 * rating indicator component it displays rating circle indicator based on the average votes of the movie used gradient to create and ring progress.
 *
 * @param {object} param0 - with props voteAverage, className
 *  @param {number} voteAverage - average vote of the movie
 *  @param {string} className - names of class for rating div
 * @returns - jsx for the rating indicator
 */
const RatingIndicator = ({ voteAverage, className, xl }: RatingIndicatorProps) => {
  const { rating, ratingGradient } = getRating(voteAverage || 0);

  // creating an class names string based on the prop class names
  const wrapperClassNames = classNames('bg-rating flex items-center justify-center rounded-full', {
    [className]: className,
    'w-9.5 h-9.5': !xl,
    'w-17 h-17': xl,
  });

  const innerDivClassNames = classNames(
    'bg-rating absolute rounded-full flex items-center justify-center',
    {
      'w-6.75 h-6.75': !xl,
      'w-12 h-12': xl,
    },
  );

  const ringClassNames = classNames('bg-green-500 absolute rounded-full', {
    'w-8 h-8': !xl,
    'w-14 h-14': xl,
  });

  const textClassNames = classNames('text-white font-bold', {
    'leading-3 text-sm': !xl,
    'text-2xl': xl,
  });

  const signClassNames = classNames(' text-white self-start', {
    'text-[6px] leading-6': !xl,
    'text-xs leading-11': xl,
  });

  return (
    <div className={wrapperClassNames}>
      <Activity mode={voteAverage ? 'visible' : 'hidden'}>
        <div
          className={ringClassNames}
          style={{
            background: ratingGradient,
          }}
        />
        <div className={innerDivClassNames}>
          <p className={textClassNames}>{rating}</p>
          <span className={signClassNames}>%</span>
        </div>
      </Activity>
      <Activity mode={!voteAverage ? 'visible' : 'hidden'}>
        <p className="absolute text-white font-extrabold">NR</p>
      </Activity>
    </div>
  );
};

export default RatingIndicator;
