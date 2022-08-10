import {createSlice} from '@reduxjs/toolkit';
const initialState = {
    chat: false,
    cart: false,
    userProfile: false,
    notification: false,
    activeMenu: true,
    screenSize: 0
};

const uiSlice = createSlice({
    name:'ui',
    initialState,
    reducers: {
        setActiveMenu(state, action){
            return {...state, activeMenu: action.payload}         
        },
        setChat(state, action){
            return {...state, chat: action.payload}
        },
        setCart(state, action){
            return {...state, cart: action.payload}
        },
        setUserProfile(state, action) {
            return {...state, cart: action.payload}
        },
        setNotifications(state, action) {
            return {...state, notification: action.payload}
        },
        setScreenSize(state, action) {
            return {...state, screenSize: action.payload}
        }
    }
})

export const {setActiveMenu, setCart, setChat, setUserProfile, setNotifications, setScreenSize} = uiSlice.actions;
export default uiSlice.reducer;
