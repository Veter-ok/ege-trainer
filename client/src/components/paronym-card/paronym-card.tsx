import './paronym-card.scss'
import { FunctionComponent as FC } from 'react'

interface IPropsParonymCard {
	text: string
}

const ParonymCard:FC<IPropsParonymCard> = ({text}) => {
	return (
		<div className="paronym-card">
			<div className="paronym-card__text">{text}</div>
		</div>
	)
}

export default ParonymCard