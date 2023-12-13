import { createSlice } from '@reduxjs/toolkit'

export const Data = createSlice({
  name: 'Data',
  initialState: [
    { roll: 'xyz', status: 'Active', createdby: 'Admin', date: '09/06/2023' },
    { roll: 'xyz', status: 'Active', createdby: 'Admin', date: '09/06/2023' },
    { roll: 'xyz', status: 'Active', createdby: 'Admin', date: '09/06/2023' },
    { roll: 'xyz', status: 'Active', createdby: 'Admin', date: '09/06/2023' },
    { roll: 'xyz', status: 'Active', createdby: 'Admin', date: '09/06/2023' },
  ],
  reducers: {
    addData(state, action) {
      console.log(state)
      state[state.length] = action.payload
    },
  },
})

export const { addData } = Data.actions
export default Data.reducer