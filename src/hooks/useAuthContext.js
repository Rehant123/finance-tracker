import { AuthContext } from "../Context/AuthContext";
import { useContext } from "react";


export const useAuthContext = ()=>{
    const context = useContext(AuthContext);
    if(!context){
        throw new error("usecontext must be inside authcontext provider")
    }
    return context
}