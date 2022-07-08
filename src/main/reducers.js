import { combineReducers } from 'redux'

import DashboardReducer from '../dashboard/dashBoardReducer'
import TabReducer from '../common/tab/tabReducer'
import BillingCycleReducer from '../billingCycle/billingCycleReducer'

const rootReducer = combineReducers({
    dashboard: DashboardReducer,
    tab: TabReducer,  
    billingCycle: BillingCycleReducer
})

export default rootReducer