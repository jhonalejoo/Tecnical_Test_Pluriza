import { createSlice } from '@reduxjs/toolkit'
const initialState = {
    getCriptos: {
        criptos: [],
        hasError: false,
        isLoading: false
    },
    cripto:{}
}
export const criptoSlice = createSlice({
    name: 'cripto',
    initialState,
    reducers: {
        getCriptosLoading: (state) => {
            state.getCriptos.isLoading = true;
        },
        getCriptosSuccess: (state,action) => {
            state.getCriptos.isLoading = false;
            state.getCriptos.criptos = action.payload;
        },
        getCriptosErrors: (state) => {
            state.getCriptos.isLoading = false;
            state.getCriptos.hasError = true;
        },
        focusCripto:(state,action)=>{
            state.cripto =action.payload    
        } 
    }
})

export const {
    getCriptosLoading,
    getCriptosSuccess,
    getCriptosErrors,
    focusCripto
} = criptoSlice.actions;

export default criptoSlice.reducer;