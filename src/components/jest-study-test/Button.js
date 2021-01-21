import react from 'react';
import './button.css'
function Button({label}){
    console.log(label)//undefined
    return <div data-testid="button" className = "button-style">
        {label}
    </div>
}

export default Button