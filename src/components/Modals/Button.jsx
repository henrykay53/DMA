import React from "react";
import {useEffect} from "react";


const Button = ({indeterminate, ...rest}) => {

    const ref = React.useRef(null);
    // const resolvedRef = ref || defaultRef

    useEffect(() => {
        if (typeof indeterminate === "boolean") {
            ref.current.indeterminate = !rest.checked && indeterminate;
        }
    }, [ref, indeterminate]);

    return (
        <button ref={ref} {...rest} ></button>
        
    )

   
}

export default Button;


