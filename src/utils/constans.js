import Icon from '@ant-design/icons'
import React, { Suspense } from 'react'
import { ReactComponent as DefaultSvg } from '../assets/icons/defaultSvg.svg'



export const ImageFamily = ({ id = '0' }) => {
	 
	let IconSvg = null

	switch (id) {
		case '1':
            IconSvg = React.lazy(() => import('../components/family/f1'))
			break
		case '2':
			IconSvg = React.lazy(() => import('../components/family/f2'))
			break
	 
		default:
			IconSvg = React.lazy(() => import('../components/Default'))
 			break
	}

	return (
		<Suspense fallback={<Icon component={DefaultSvg} className='FamiliaIcon' />}>
			<Icon
				component={IconSvg}
				className='FamiliaIcon'
				// style={{ backgroundColor: '#ffffff', borderRadius: 30 }}
			/>
		</Suspense>
	)
}
 

export const ImageClass = ({ id = '0' }) => {
 	let IconSvg = null

	switch (id) {
		case '1':
			IconSvg= React.lazy(() => import('../components/class/c1'))
			break
		case '2':
            IconSvg= React.lazy(() => import('../components/class/c2'))
			break
		 
		default:
		  IconSvg = React.lazy(() => import('../components/Default'))
              
			break
	}

	return (
		<Suspense fallback={<Icon component={DefaultSvg} className='FamiliaIcon' />}>
			<Icon
				component={IconSvg}
				className='FamiliaIcon'
			
			/>
		</Suspense>
	)
}