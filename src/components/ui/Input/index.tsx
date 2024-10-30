type PropTypes = {
  label?: string;
  name: string;
  type: string;
  placeholder?: string;
  defaultValue?: string;
  disabled?: boolean;
  onChange?: (e: any) => void
};

const Input = (props: PropTypes) => {
  const { label, name, type, placeholder, defaultValue, disabled, onChange } = props;
  return (
    <div className='mb-5 flex flex-col'>
      {label && <label htmlFor={name}>{label}</label>}
      <input
        type={type}
        name={name}
        id={type}
        placeholder={placeholder}
        className='mt-2 w-full border-none bg-[#eee] p-2 outline-none disabled:cursor-not-allowed disabled:opacity-70'
        defaultValue={defaultValue}
        disabled={disabled}
        onChange={onChange}
      />
    </div>
  );
};

export default Input;
