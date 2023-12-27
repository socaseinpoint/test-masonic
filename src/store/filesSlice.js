import { createSlice } from '@reduxjs/toolkit'
import genItems from '../api/genItems'

const filesSlice = createSlice({
  name: 'files',
  initialState: [...genItems()],
  reducers: {
    filesAdded(state, action) {
      console.log('!!!state', state)
      console.log('!!!payload', action.payload)

      action.payload.forEach((i) => {
        state.push(i)
      })
    },
  }
})

export const filesSelector = (state) => state.files

export const filesActions = filesSlice.actions

export const { todoAdded, todoToggled } = filesSlice.actions
export default filesSlice.reducer

