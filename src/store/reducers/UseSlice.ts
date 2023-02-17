import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IUser } from "../../models/IUsers"
import { fetchUsers } from "./ActionCreator";

interface UserSate{
    users: IUser[];
    isLoading: boolean;
    error:string;
}

const initialState: UserSate = {
    users: [],
    isLoading: false,
    error: '',
}

export const userSlice = createSlice({
    name: 'user', 
    initialState,
    reducers: { },
    extraReducers: {
        [fetchUsers.fulfilled.type]:(state, action: PayloadAction<IUser[]>) => {
            state.isLoading = false;
            state.error = '';
            state.users = action.payload;
            },
        [fetchUsers.pending.type]:(state) => {
            state.isLoading = true;
            },
        [fetchUsers.rejected.type]:(state, action: PayloadAction<string>) => {
            state.isLoading = false;
            state.error = action.payload;
            },   
    }
});

export default userSlice.reducer;