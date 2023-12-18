import { createSlice } from '@reduxjs/toolkit';
import { IUserPayload } from '../../interfaces/IUser';

const userSlice = createSlice({
    name: "user",
    initialState: {
        id: 0,
        firstname: "",
        lastname: "",
        email: "",
        password: "",
        role: "",
        createdAt: new Date(0).toISOString(),
        updatedAt: new Date(0).toISOString()
    },
    reducers: {
        setUser: (state, action: IUserPayload) => {
            state.id = action.payload.id;
            state.firstname = action.payload.firstname;
            state.lastname = action.payload.lastname;
            state.email = action.payload.email;
            state.password = action.payload.password;
            state.role = action.payload.role;
            state.createdAt = action.payload.createdAt;
            state.updatedAt = action.payload.updatedAt;
        },
        unsetUser: (state) => {
            state.id = 0;
            state.firstname = "";
            state.lastname = "";
            state.email = "";
            state.password = "";
            state.role = "";
            state.createdAt = new Date(0).toISOString();
            state.updatedAt = new Date(0).toISOString();
        }
    }
})

export const { setUser, unsetUser } = userSlice.actions;
export default userSlice.reducer;