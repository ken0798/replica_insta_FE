import { createSlice } from '@reduxjs/toolkit'

const userSlice = createSlice({
    name: 'user',
    initialState: {
        users: [],
        token: null,
        logData: JSON.parse(localStorage.getItem('logUser')) || null,
    },
    reducers: {
        addUser:(state,action)=> {
            state.users.push(action.payload)
        },
        setToken: (state, action) => {
            state.token = action.payload
        },
        setLogData: (state, action) => {
            state.logData = action.payload
        }
    }
})

export const { addUser,setToken,setLogData } = userSlice.actions
export default userSlice.reducer