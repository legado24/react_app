
import { Spin } from 'antd';
import { Route, Routes, BrowserRouter } from 'react-router-dom'
import './App.css'
 
import { Main } from './screens/Main';
export const loading = () => (
	<div
		style={{
			alignItems: 'center',
			justifyContent: 'center',
			display: 'flex',
			position: 'fixed',
			top: 0,
			left: 0,
			right: 0,
			bottom: 0
		}}
	>
		<Spin size='large' />
	</div>
)

function App() {
	const links = (
		<BrowserRouter>
			 <Routes> 
				<Route path='/*' element={<Main/>} />
			 </Routes> 
		</BrowserRouter>
	)


  return  links;
}

export default App;
