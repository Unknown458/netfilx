import { useSelector } from "react-redux"

import { Navigate, Outlet } from "react-router-dom"
function Private() {
    const selactor = useSelector((state)=>state.auth.user)

    console.log("selecort",selactor)
    
    
    return selactor ?(<Outlet/>) : (<Navigate to={"/sign"}/>)
}

export default Private