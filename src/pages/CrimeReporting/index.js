import React from 'react'
import Crimec from '../../components/CrimeReporting'
import Appbar from '../../components/shared/Navbar'
import AppbarAuth from "../../components/shared/NavbarLogin";

const CrimeReporting = () => {
    const loggedin=true;
    return (
        <>
           {loggedin?<AppbarAuth/>: <Appbar />}
           <Crimec/> 
        </>
    )
}

export default CrimeReporting
