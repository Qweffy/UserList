import { createSlice } from '@reduxjs/toolkit'

interface AuthState {
  isLoggedIn: boolean
}

const initialState: AuthState = {
  isLoggedIn: false,
}

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login(state) {
      state.isLoggedIn = true
    },
  },
})

export const { login } = authSlice.actions

export const selectIsLoggedIn = (state: { auth: AuthState }) => state.auth.isLoggedIn

export default authSlice.reducer
