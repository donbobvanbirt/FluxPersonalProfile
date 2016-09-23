import AppDispatcher from '../AppDispatcher'

const NameActions = {
  createProfile(profile) {
    AppDispatcher.dispatch({
      type: 'CREATE_NAME',
      payload: profile
    })
  },
}

export default NameActions;
