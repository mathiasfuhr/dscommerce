import { Outlet } from "react-router-dom";
import HeaderClient from "../../components/HeaderClient";

function ClienteHome() {
    return ( 
            <>
                <HeaderClient/>
                <Outlet/>
            </>
     );
}

export default ClienteHome;