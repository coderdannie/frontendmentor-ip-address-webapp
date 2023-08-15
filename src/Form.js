import { useState } from 'react';
import pointer from './asset/images/icon-arrow.svg';
const Form = ({ setSearchValue }) => {
  const [value, setValue] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault();
    setSearchValue(value);
  };
  return (
    <div className=" text-white pt-8">
      <h1 className="capitalize text-center mb-8">ip address tracker</h1>
      <form
        className="form max-w-[34.75rem] w-full ml-auto mr-auto grid"
        onSubmit={handleSubmit}
      >
        <input
          type="text"
          name=""
          placeholder="Search for any IP address or domain"
          className="bg-white p-2  form-input pl-4 text-black"
          onChange={(e) => {
            setValue(e.target.value);
          }}
        />
        <button
          type="submit"
          className="bg-black  p-2 btn flex justify-center items-center"
        >
          <img src={pointer} alt="" />
        </button>
      </form>
    </div>
  );
};
export default Form;
