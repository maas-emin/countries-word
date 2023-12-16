import { combineReducers } from 'redux'
import { themeReducer } from './theme/theme-reducer'

import { countriesReducer } from './countries/countries-reducer'
import { searchReducer } from './controls/controls-reducer'
import { detailsReducer } from './details/details-reduer'

export const rootReducer = combineReducers({
  theme: themeReducer,
  countries: countriesReducer,
  controls: searchReducer,
  details: detailsReducer,
})
