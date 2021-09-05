import { Col, Dropdown, Menu, Row } from 'antd'
import { MenuOutlined } from '@ant-design/icons'
import React from 'react'
import { useSelector } from 'react-redux'
 import Text from 'antd/lib/typography/Text'
import { ImageClass, ImageFamily } from '../utils/constans'
 const { SubMenu } = Menu

export const HeaderFloat = () => {
    const globalData = useSelector((state) => state.global)


    const menu = (
		<Menu mode='vertical' >
			  <SubMenu key={'1'} title={'mmmm'} icon={<ImageFamily id={'2'} />}>
						 
								<Menu.Item key={'1'} icon={<ImageClass id='1' />}>
									{'Menu'}
								</Menu.Item>
							 
				 </SubMenu>
			  
		</Menu>
	)
    return (
        <Row
			align='middle'
			justify='center'
			style={{ backgroundColor: globalData.colors.redMD, padding: '15px 0 15px 0' }}
		>
			<Col
				span={
					globalData.windowsSize === 'xs' ? (
						16
					) : globalData.windowsSize === 'lg' ||
					globalData.windowsSize === 'xl' ||
					globalData.windowsSize === 'xxl' ? (
						18
					) : (
						16
					)
				}
			>
				<Row align='middle'>
					<Col span={6} xs={24} sm={10} md={8} lg={6} style={{ cursor: 'pointer' }}>
						<Dropdown overlay={menu}>
							<Text style={{ color: globalData.colors.textWhite, fontWeight: 'bold', fontSize: 15 }}>
								<MenuOutlined
									style={{
										color: globalData.colors.backgroundLight,
										margin: '0 5px 0 5px',
										fontWeight: 'bold',
										fontSize: 18
									}}
								/>
								Todas las categorías
							</Text>
						</Dropdown>
					</Col>
					<Col
						span={16}
						xs={0}
						md={14}
						lg={16}
						style={{
							borderRadius: 30,
							overflow: 'hidden'
						}}
					>
						{/* <SearchBar /> */}
					</Col>
				</Row>
			</Col>
			<Col xs={8} sm={4} lg={4} xl={3}>
				{/* <RightButtonsDropdow /> */}
			</Col>
		</Row>
    )
}
