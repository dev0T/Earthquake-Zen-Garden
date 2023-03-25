export const profileReducer = (state, action) => {
  switch (action.type) {
    case 'SET_PROFILE_DATA':
      return { ...action.payload }
    default:
      return state
  }
}

export const setProfileData = data => ({
  type: 'SET_PROFILE_DATA',
  payload: data
})
