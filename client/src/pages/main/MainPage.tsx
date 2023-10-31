import { useNavigate } from 'react-router-dom'
import SubjectCard from '../../components/subject-card/SubjectCard'
import './MainPage.scss'
import { subjects } from '../../constants/subjects'

const MainPage = () => {
	const navigate = useNavigate()

	const openSubject = (id: number) => navigate(`/subjects/${id}`)

	return (
		<div className="main-page">
			<div className="main-page__title">Заголовок</div>
			<div className="main-page__subject-cards">
				{subjects.map((value, index) => 
					<SubjectCard key={index} subject={value} onClick={openSubject}/>
				)}
			</div>
		</div>
	)
}

export default MainPage