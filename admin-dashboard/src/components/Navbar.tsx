import {useEffect} from 'react';
import { AiOutlineMenu } from 'react-icons/ai';
import { FiShoppingCart } from 'react-icons/fi';
import { BsChatLeft } from 'react-icons/bs';
import { RiNotification3Line } from 'react-icons/ri';
import { MdKeyboardArrowDown } from 'react-icons/md';
import { TooltipComponent } from '@syncfusion/ej2-react-popups';
import avatar from '../data/avatar.jpg';
import { Cart, Chat, Notification, UserProfile } from '.';
import {useAppSelector, useAppDispatch} from '../app/hooks';
import {setActiveMenu, setCart, setChat, setUserProfile, setNotifications, setScreenSize} from '../reducers/uiReducer';

const NavButton = ({title, customFunc, icon, color, dotColor}: {title: string, customFunc: any, icon: JSX.Element, color: string, dotColor: string}) => (
    <TooltipComponent content={title} position="BottomCenter">
        <button 
            type="button" 
            onClick={customFunc}
            style={{color}}
            className="relative text-xl rounded-full p-3 hover:bg-light-gray"
        >
            <span 
                style={{background:dotColor}}
                className="absolute inline-flex rounded-full h-2 w-2 right-2 top-2"
            />
                {icon}
        </button>
    </TooltipComponent> 
)
const Navbar = () => {
    const activeMenu = useAppSelector(state => state.ui.activeMenu);
    const cart = useAppSelector(state => state.ui.cart);
    const chat = useAppSelector(state => state.ui.chat);
    const notification = useAppSelector(state => state.ui.notification);
    const userProfile = useAppSelector(state => state.ui.userProfile);
    const screenSize = useAppSelector(state => state.ui.screenSize);
    const currentColor =  useAppSelector(state=> state.ui.currentColor);
    const dispatch = useAppDispatch();
    useEffect(() => {
        const handleResize = () => dispatch(setScreenSize(window.innerWidth))
        window.addEventListener('resize', handleResize);
        handleResize();
        return () => window.removeEventListener('resize', handleResize);
    }, [])
    useEffect(() => {
        if(screenSize <= 900)
            dispatch(setActiveMenu(false));
        else
            dispatch(setActiveMenu(true));
    }, [screenSize])
    return(
        <div className="flex justify-between p-2 md:mx-6 relative">
            <NavButton 
                title="Menu" 
                customFunc={()=> dispatch(setActiveMenu(!activeMenu))}
                color={currentColor}
                icon={<AiOutlineMenu />}
                dotColor=""
            />
            <div className="flex">
                <NavButton 
                    title="Cart" 
                    customFunc={()=> dispatch(setCart(!cart))}
                    color={currentColor}
                    icon={<FiShoppingCart />}
                    dotColor=""
                />
                <NavButton 
                    title="Chat" 
                    customFunc={()=> dispatch(setChat(!chat))}
                    color={currentColor}
                    icon={<BsChatLeft />}
                    dotColor="#03C9D7"
                />
                <NavButton 
                    title="Notifications" 
                    customFunc={()=> dispatch(setNotifications(!notification))}
                    color={currentColor}
                    icon={<RiNotification3Line />}
                    dotColor="#03C9D7"
                />
                <TooltipComponent content='Profile' position="BottomCenter">
                    <div className="flex items-center gap-2 cursor-pointer p-1 hover:bg-light-gray rounded-lg">
                        <img
                            className="rounded-full w-8 h-8"
                            src={avatar}
                        />
                        <p>
                            <span className="text-gray-400 text-14">Hi, </span> {' '}
                            <span className="text-gray-400 font-bold ml-1 text-14">Joe</span>
                        </p>
                        <MdKeyboardArrowDown className="text-gray-400 text-14"/>
                    </div>
                </TooltipComponent>
                {cart && <Cart />}
                {chat && <Chat />}
                {notification && <Notification /> }
                {userProfile && <UserProfile />}
            </div>
        </div>
    )
}
export default Navbar;
