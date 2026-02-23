import { useState } from 'react';

import CustomRange from '@components/filters/CustomRange';
import { useFilterContext } from '@hooks/useFilterContext';
import { sliderOneThumbsTrackColors, sliderTwoThumbsTrackColors } from '@constants/index';
import type { MediaType } from '@utils/types';

/**
 * displays the range sliders for user vote, user score, and runtime
 *
 * @returns - jsx for the sliders
 */
const Sliders = ({ type }: { type: MediaType }) => {
  const [userScore, setUserScore] = useState<number[]>([0, 10]); // current selected user score state for range slider
  const { userVotes, changeUserVotes, runtime, changeRuntime } = useFilterContext(type); // getting selected user votes(array with selected value), runtime(array with selected values), change user votes(function to change selected values) and change runtime(function to change selected values) form the filter context

  const data = [
    {
      title: 'User Score',
      id: 1,
      min: 0,
      max: 10,
      step: 1,
      value: userScore,
      mainMarkDivider: 5,
      onChange: setUserScore,
      colors: sliderTwoThumbsTrackColors,
    },
    {
      title: 'Minimum User votes',
      id: 2,
      min: 0,
      max: 500,
      step: 50,
      mainMarkDivider: 100,
      value: userVotes,
      onChange: changeUserVotes,
      colors: sliderOneThumbsTrackColors,
    },
    {
      title: 'Runtime',
      id: 3,
      min: 0,
      max: 400,
      step: 15,
      mainMarkDivider: 120,
      value: runtime,
      onChange: changeRuntime,
      colors: sliderTwoThumbsTrackColors,
    },
  ];

  return (
    <>
      {data.map((item) => (
        <div key={item.id} className="divider-box pb-8!">
          <h3 className="mb-2.5 font-light">{item.title}</h3>
          <CustomRange
            min={item.min}
            max={item.max}
            step={item.step}
            values={item.value}
            mainMarkDivider={item.mainMarkDivider}
            onChange={item.onChange}
            colors={item.colors}
          />
        </div>
      ))}
    </>
  );
};

export default Sliders;
