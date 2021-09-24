import React from 'react'
import CrimeRepoFormc from '../../components/crimeRepoForm'
import Appbar from '../../components/shared/Navbar'
import AppbarAuth from "../../components/shared/NavbarLogin";

const CrimeForm = () => {
  const loggedin=true;
  return (
    <div>
    {loggedin?<AppbarAuth/>: <Appbar />}
      <CrimeRepoFormc/>
    </div>
  )
}

export default CrimeForm
