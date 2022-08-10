import {ButtonProps} from '../types';
const Button = ({color, bgColor, text, borderRadius, size} : ButtonProps) => {
    return(
        <button
            type="button"
            style={{backgroundColor: bgColor, color, borderRadius}}
            className={`text-${size} p-3 hover:drop-shadow-xl`}
        >
            {text}
        </button>
    )
}
export default Button;
