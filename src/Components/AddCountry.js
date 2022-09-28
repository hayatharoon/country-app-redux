import React, { useState } from 'react';
import store from '../store/store';
import { addCountry } from '../store/country';
import { useNavigate } from 'react-router-dom';

function AddCountry() {
  const [country, setCountry] = useState({
    countryName: '',
    countryCapital: '',
    nationalGame: '',
    muslim: '',
    subcontinent: '',
  });
  const history = useNavigate();

  function handleEvent(e) {
    setCountry((prevState) => {
      return {
        ...prevState,
        [e.target.name]: e.target.value,
      };
    });
  }
  function handleSubmit(e) {
    e.preventDefault();

    if (country.countryName === '') {
      alert('Country Name required');
    } else if (country.countryCapital === '') {
      alert('Country Capital Field is required');
    } else if (country.nationalGame === '') {
      alert('National game field is required');
    } else if (country.muslim === '') {
      alert('Country is muslim or non-muslim!');
    } else if (country.subcontinent === '') {
      alert('Please select your country sub continent');
    } else {
      alert('Add data successfully');
      store.dispatch(addCountry(country));
      history('/');
    }
  }

  return (
    <>
      <div className='flex flex-col justify-center items-center mt-28'>
        <form action='' className='flex flex-col'>
          <h1 className='text-2xl mb-4 pb-3 font-bold'>Add New Country</h1>
          <input type='text' name='countryName' className='min-w-min px-5 pl-4 mb-3 outline-none  border rounded-md text-base' placeholder='Country Name' onChange={handleEvent} />
          <input
            type='text'
            name='countryCapital'
            className='min-w-min px-5 pl-4 mb-3 outline-none  border rounded-md text-base'
            placeholder='Country Capital'
            onChange={handleEvent}
          />
          <input
            type='text'
            name='nationalGame'
            className='min-w-min px-5 pl-4 mb-3 outline-none  border rounded-md text-base'
            placeholder='National Game'
            onChange={handleEvent}
          />
          <select id='subcontinent' value={country.subcontinent} onChange={handleEvent} name='subcontinent'>
            <option>Select Sub Continent</option>
            <option value='asia'>Asia</option>
            <option value='africa'>Africa</option>
            <option value='austrlia'>Australia</option>
            <option value='europe'>Europe</option>
            <option value='northAmerica'>North America</option>
            <option value='southAmerica'>South America</option>
            <option value='antarctica'>Antarctica</option>
          </select>
          <fieldset className='flex justify-evenly mt-2'>
            <input type='radio' id='muslim' name='muslim' value='Muslim' onChange={handleEvent} checked={country.muslim === 'Muslim'} />
            <label htmlFor='muslim'>Muslim</label>
            <input type='radio' id='non-muslim' name='muslim' value='Non-Muslim' onChange={handleEvent} checked={country.muslim === 'Non-Muslim'} />
            <label htmlFor='non-muslim'>Non Muslim</label>
          </fieldset>
          <button type='submit' onClick={handleSubmit} className='px-4 py-1 mt-3 bg-black border-none text-white text-base rounded-sm'>
            Submit
          </button>
        </form>
      </div>
    </>
  );
}

export default AddCountry;
