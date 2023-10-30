import { Link } from 'react-router-dom'
import './header.scss'
import { useState } from 'react'
import Input from '../../ui/input/input'

const Header = () => {

	const [search, setSearch] = useState('')

	return (
		<header>
			<div className="title">EGE TRAINER</div>
			<div className="search">
				<Input 
					placeholder="поиск..."
					value={search}
					onChange={setSearch}
				/>
			</div>
			<ul className="links-block">
				<li className="links-block__link"><Link to="/">Main</Link></li>
				<li className="links-block__link"><Link to="https://github.com/Veter-ok">Github</Link></li>
				<li className="links-block__link"><Link to="/login">Login</Link></li>
			</ul>
		</header>
  )
}

export default Header