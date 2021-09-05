import { Col, Row } from 'antd'
import React from 'react'
import { Helmet } from 'react-helmet'
import { useSelector } from 'react-redux'

export const Home = () => {
    const globalData = useSelector((state) => state.global)
    return (
       <Row
       justify='center'
			style={{
				backgroundColor: globalData.colors.backgroundLight
			}}
       >
           <Helmet>
           <meta charSet='utf-8' />
				<title>Mi Despensa | Bienvenid@ a tu supermercado virtual</title>
				<meta name='description' content='Los mejores productos, a los mejores precios' />
		
           </Helmet>
            
           <Col span={24}>
            Text
           </Col>
       

       </Row>
    )
}
