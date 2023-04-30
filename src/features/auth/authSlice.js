import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
const userDefState = {
  _id: null,
  firstname: null,
  lastname: null,
  email: null,
  mobile: null,
  token: null,
};
const initialState = {
  user: userDefState,
  isErr: false,
  isLoading: false,
  isSucces: false,
  msg: '',
};
export const authSlice =createSlice({name:"auth",initialState,reducers:{},extraReducers:(builder)=>{
  
}});
