import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { IUser } from "../../models/IUsers";
import { AppDispatch } from "../store";
import {userSlice} from "./UseSlice"

/*
export const fetchUsers = () => async(dispatch: AppDispatch) => {
    try{
        dispatch(userSlice.actions.usersFetching());
        const responce = await axios.get<IUser[]>('https://jsonplaceholder.typicode.com/users');
        dispatch(userSlice.actions.usersFetchingSucces(responce.data));
    } catch(e: any){
        dispatch(userSlice.actions.usersFetchingError(e?.message));
    }
}
*/

export const fetchUsers = createAsyncThunk(
    'user/fetchAll',
    async(_,thunkAPI) =>{
        try{
            const responce = await axios.get<IUser[]>('https://jsonplaceholder.typicode.com/users');
            return responce.data;
        }catch(e){
            return thunkAPI.rejectWithValue('Не удалось загрузить пользователей')
        }
    }
)