import React from 'react'
import styled from 'styled-components'

 const CompanyStyled=styled.div `
  display:inline-block;
  background-color:yellow;
  margin:10px 10px 10px 10px;
  
 `
const Company = () => {
    return (
       
 <CompanyStyled>
    <strong>code:</strong>{'01'}
    <strong>description:</strong>{'despensa peruana'}
 </CompanyStyled>
       
          
       
    )
}
export default Company
