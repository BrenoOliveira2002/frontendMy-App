import { combineReducers } from 'redux'

import DashboardReducer from '../dashboard/dashBoardReducer'

const rootReducer = combineReducers({
    dashboard: DashboardReducer 
})

export default rootReducer