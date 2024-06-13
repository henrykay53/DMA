import React from "react";
import {useEffect} from "react";


const Checkbox = ({indeterminate, ...rest}) => {

    const ref = React.useRef(null);
    // const resolvedRef = ref || defaultRef

    useEffect(() => {
        if (typeof indeterminate === "boolean") {
            ref.current.indeterminate = !rest.checked && indeterminate;
        }
    }, [ref, indeterminate]);

    return <input type="checkbox" ref={ref} {...rest} />

   
}

export default Checkbox


