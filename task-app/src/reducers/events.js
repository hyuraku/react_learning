import _ from 'lodash'
import { READ_EVENTS } from '../actions'

export default(events = {}, action)=>{
  switch (action.type) {
    case READ_EVENTS:
      // lodash makes action.response.data lists
      return _.mapKeys(action.response.data,'id');
    default:
      return events
  }
}