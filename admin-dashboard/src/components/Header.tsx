import { HeaderProps } from '../types';
const Header = ({category, title}: HeaderProps) => {
    return(
        <div className="mb-10">
            <p className="text-gray-400">
                {category}
            </p>
            <p className="text-3xl font-extrabold tracking-right text-slate-900">
                {title}
            </p>
        </div>
    )
}
export default Header;
