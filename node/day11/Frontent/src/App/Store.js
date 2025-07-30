


import {configueStore} from ('@reduxjs/toolkit')
import signupFun from'../Features/SignIn/SignUpReducer'

export const store = configueStore({
    reducer: {
        sign:signupFun
    }
})