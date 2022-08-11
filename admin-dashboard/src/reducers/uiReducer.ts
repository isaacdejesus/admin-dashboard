import {createSlice} from '@reduxjs/toolkit';
const initialState = {
    chat: false,
    cart: false,
    userProfile: false,
    notification: false,
    activeMenu: true,
    screenSize: 0,
    currentColor: "#03C9D7",
    currentMode: "Light",
    themeSettings: false
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
        },
        setCurrentColor(state, action) {
            localStorage.setItem('colorMode', action.payload);
            return {...state, currentColor: action.payload, themeSettings: false}
        },
        setCurrentMode(state, action) {
            localStorage.setItem('themeMode', action.payload);
            return {...state, currentMode: action.payload, themeSettings: false}
        },
        setThemeSettings(state, action) {
            return {...state, themeSettings: action.payload}
        }
    }
})

export const {setActiveMenu, setCart, setChat, setUserProfile, setNotifications, setScreenSize, setCurrentMode, setCurrentColor, setThemeSettings} = uiSlice.actions;
export default uiSlice.reducer;
