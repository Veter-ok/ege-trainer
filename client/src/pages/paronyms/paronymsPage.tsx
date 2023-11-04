import { useState } from 'react'
import Input from '../../ui/input/input'
import './paronymsPage.scss'

const ParonymsPage = () => {
	const [word, setWord] = useState('')

	return (
		<div className="paronyms-page">
			<div className="paronyms-page__title">Паронимы</div>
			<Input placeholder="слово..." value={word} onChange={setWord}/>
		</div>
	)
}

export default ParonymsPage