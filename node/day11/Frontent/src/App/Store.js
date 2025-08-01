

import {configureStore} from '@reduxjs/toolkit'
import signupFun from'../Features/signUpReducer'

export const store = configureStore({
    reducer: {
        sign:signupFun
    }
})