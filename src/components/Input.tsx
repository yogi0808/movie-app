import classNames from 'classnames';

interface InputPropType {
  label: string;
  type: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
  required?: boolean;
  error: string | null;
  touched: boolean;
}

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
