import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Header } from './components/Header/Header'
import { Appointments } from './pages/Appointments/Appointments'
import { Home } from './pages/Home/Home'

function App() {
	return (
		<BrowserRouter>
			<Header />

			<Routes>
				<Route path="/" element={<Home />} />
				<Route
					path="/appointments"
					element={<Appointments />}
				/>
			</Routes>
		</BrowserRouter>
	)
}

export default App