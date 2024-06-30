import { useEffect, useState } from "react";


const DeBounce = (value:string, dilay:number) => {
    const [holdvalue, setHoldvalue] = useState<string>('');
    useEffect(() => {
       
        const handle = setTimeout(() => {
            setHoldvalue(value);
        }, dilay)
        return () => {
            clearTimeout(handle);
        }
    }, [value, dilay]);
    return holdvalue;
}

export default DeBounce;