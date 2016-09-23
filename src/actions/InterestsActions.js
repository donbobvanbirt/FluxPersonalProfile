import AppDispatcher from '../AppDispatcher'

const InterestsActions = {
  addInterest(interest) {
    AppDispatcher.dispatch({
      type: 'ADD_INTEREST',
      payload: interest
    })
  },
}

export default InterestsActions;
