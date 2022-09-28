import React from 'react';
import Image from '../images/country_image.jpg';
import { useSelector } from 'react-redux';

function Country() {
  const countryData = useSelector((state) => state.countryReducer.countries);
  return (
    <div className='flex flex-row flex-wrap'>
      <div className='m-8 bg-white text-gray-700 w-60 min-h-[8rem] shadow-lg rounded-md overflow-hidden'>
        
        <h2 className='font-bold text-2xl overflow-ellipsis overflow-hidden whitespace-nowrap m-2' title='country detail'>
          America
        </h2>
        <div>
          <span className='text-xl font-semibold m-2'>Capital, Sub Containent</span>
          <div>
            <span className='flex items-center gaf-2 m-2'>Non-Muslin Country , National Game</span>
          </div>
        </div>
      </div>
      {/* ----------------------------------------------------------------------------------------- */}
      {countryData.map((item, key = 0) => {
        return (
          <div>
            <div className='m-8 bg-white text-gray-700 w-60 min-h-[8rem] shadow-lg rounded-md overflow-hidden'>
              <h2 className='font-bold text-2xl overflow-ellipsis overflow-hidden whitespace-nowrap m-2' title='country detail'>
                {item.countryName}
              </h2>
              <div>
                <span className='text-xl font-semibold m-2'>{item.countryCapital}</span>
                <div>
                  <span className='flex items-center gaf-2 m-2'>
                    {item.muslim} Country , National Game {item.nationalGame}
                  </span>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Country;
