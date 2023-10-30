import './header.scss'

const Header = () => {
  return (
	<header>
		<div className="title">EGE TRAINER</div>
		<div className="search">
			<input className="search__input" type="text" placeholder='поиск...'/>
		</div>
		<ul className="links-block">
			<li className="links-block__link"><a href="">Main</a></li>
			<li className="links-block__link"><a href="https://github.com/Veter-ok">Github</a></li>
			<li className="links-block__link"><a href="">About me</a></li>
		</ul>
	</header>
  )
}

export default Header