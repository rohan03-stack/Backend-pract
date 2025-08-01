import {createSlice} from "@reduxjs/toolkit"

const initialValue  = {user: null};

const SignUpReducer = createSlice({
    name: "signUp-slicer",
    initialState: initialValue,
    reducers: {
        signIns: (state, action) => {
            state.user = action.payload
        }
    }
})

export const {signIns} = SignUpReducer.actions;
export default SignUpReducer.reducer   


// async thugs........................

export const signUpThunk  = (formData) => async (dispatch) => {
    try{
        const response = await fetch("http://localhost:9000/signup", {
            method: "POST",
            body: JSON.stringify(formData),
            headers:{"Content-Type": "application/json"}
        });
           const result = await response.text();
        console.log(" API response:", result);
        dispatch(signIns(result)); 
    }
    catch (err) {
        console.error("API error:", err);
    }
}