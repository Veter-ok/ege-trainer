import { useState } from 'react'
import Input from '../../ui/input/input'
import './paronymsPage.scss'
import ParonymCard from '../../components/paronym-card/paronym-card'

const ParonymsPage = () => {
	const [word, setWord] = useState('')

	return (
		<div className="paronyms-page">
			<div className="paronyms-page__title">Паронимы</div>
			<div className="paronyms-page__tip">Подберите пароним к слову</div>
			<ParonymCard text='абонент'/>
			<Input placeholder="слово..." value={word} onChange={setWord}/>
		</div>
	)
}

export default ParonymsPage