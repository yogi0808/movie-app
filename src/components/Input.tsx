import classNames from 'classnames';

import type { InputPropType } from '@utils/types';

/**
 * custom input component with label and error message display
 *
 * @param {string} label - input label
 * @param {string} type - input type
 * @param {string} name - input name
 * @param {string} value - input value
 * @param {function} onChange - input on change event handler
 * @param {string} placeholder - input placeholder
 * @param {boolean} required - is required or not
 * @param {string} error - error if any
 * @param {boolean} touched - input it touched or not
 *
 * @returns -  jsx for the input component
 */
const Input = ({
  label,
  type = 'text',
  name,
  value,
  onChange,
  placeholder,
  required,
  error,
  touched,
}: InputPropType) => {
  // dynamic classes changes based on the error state
  const inputClassNames = classNames('px-3 py-1.5 rounded-lg border focus:outline-none', {
    'border-search-border focus:border-highlight': !error || !touched,
    'border-red-500 text-red-500': error && touched,
  });

  return (
    <label className="flex flex-col">
      <span>{label}</span>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        className={inputClassNames}
        placeholder={placeholder}
        required={required}
      />
      {touched && error ? <span className="text-red-500 text-sm">{error}</span> : ''}
    </label>
  );
};

export default Input;
