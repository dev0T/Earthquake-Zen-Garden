export const headerReducer = (state, action) => {
  switch (action.type) {
    case 'SET_HEADER_DATA':
      return { ...action.payload }
    default:
      return state
  }
}

export const setHeaderData = data => ({
  type: 'SET_HEADER_DATA',
  payload: data
})
