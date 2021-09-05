import React from 'react'
import styled from 'styled-components'
import Company from './Company'
import { useState } from 'react'
import { useEffect } from 'react'
const CompanyListStyled=styled.div`
    position: relative;
    left:5px;
    right:5px;
`
const CompanyList = () => {

const [listAlbums, setListAlbums] = useState([])
 useEffect(() => {
const callCompanies= async ()=>{
  let response=await   fetch('https://sistemas.digitalinka.com/backend_socios/preventaGps/getPeriodos',{

  method:'GET',
  //mode: 'cors',
  headers: new Headers({
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',

  })}),
    json=await response.json();

    console.log(json);
    setListAlbums(json);
   };


   callCompanies();  
    
}, [])

return (
        <CompanyListStyled>
            {
            listAlbums.map(({id})=>{

                return <Company />

                   
            })

            }
        </CompanyListStyled>
    )
}

export default CompanyList
