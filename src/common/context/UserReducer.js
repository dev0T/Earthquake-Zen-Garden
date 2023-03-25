export const userReducer = (state, action) => {
  switch (action.type) {
    case 'SET_USER_DATA':
      return { ...action.payload }
    default:
      return state
  }
}

export const setUserData = data => ({ type: 'SET_USER_DATA', payload: data })
