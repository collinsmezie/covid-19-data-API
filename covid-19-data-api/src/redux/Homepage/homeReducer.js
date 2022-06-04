const LOADED = 'LOADED';
const LOADING = 'LOADING';
const ERROR = 'ERROR';
const URL = 'https://corona.lmao.ninja/v3/covid-19/countries';

const loadingAction = () => ({
  type: LOADING,
});

const errorAction = (error) => ({
  type: ERROR,
  payload: error,
});

export const loadCompletedAction = (data) => ({
  type: LOADED,
  payload: data,
});

const initialState = {
  countries: [],
  loading: false,
  error: null,

};

export const fetchCountries = () => async (dispatch) => {
  dispatch(loadingAction());

  await fetch(URL)
    .then((response) => response.json())
    .then((result) => {
      const countries = [];
      result.map((country) => (
        countries.push({
          id: country.country,
          country: country.country,
          cases: country.cases,
          todayCases: country.todayCases,
          deaths: country.deaths,
          todayDeaths: country.todayDeaths,
          recovered: country.recovered,
          todayRecovered: country.todayRecovered,
          active: country.active,
          critical: country.critical,
          tests: country.tests,
          population: country.population,
          continent: country.continent,
          flag: country.countryInfo.flag,
        })));

      dispatch(loadCompletedAction(countries));
    })
    .catch((error) => {
      dispatch(errorAction(error.message));
    });
};

const homeReducer = (state = initialState, action) => {
  // console.log(action.payload);
  switch (action.type) {
    case LOADING:
      return {
        ...state,
        loading: true,
      };
    case ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    case LOADED:
      return {
        ...state,
        loading: false,
        countries: action.payload,
      };

    default:
      return state;
  }
};

export default homeReducer;
