// * InitialState...
 
const initialState = {
  countries: [],
};

//* ---Action Types---:
const ADD_COUNTRY = 'addCountry';
const REMOVE_COUNTRY = 'removeCountry';

//* ---Action Creators---:
export const addCountry = (country) => {
  return {
    type: ADD_COUNTRY,
    payload: country,
  };
};

export const removeCountry = (description) => {
  return {
    type: REMOVE_COUNTRY,
    payload: {
      description: description,
    },
  };
};

//* ---Reducer---:
export default function countryReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_COUNTRY:
      return {
        ...state,
        [state.countries]: state.countries.push(action.payload),
      };
    // return console.log('Country Detail has been Added');
    case REMOVE_COUNTRY:
      return console.log('Country Removed');
    default:
      return state;
  }
}
