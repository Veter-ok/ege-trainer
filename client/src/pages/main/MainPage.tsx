import SubjectCard from '../../components/subject-card/SubjectCard'
import './MainPage.scss'

const MainPage = () => {

	const subjects = ["Русский язык", "Профильная математика", "Физика", "Биология",
						"Химия", "История", "Обществознание"]

	return (
		<div className="main-page">
			<div className="main-page__title">Заголовок</div>
			<div className="main-page__subject-cards">
				{subjects.map((value, index) => 
					<SubjectCard key={index} title={value} progres={index * 10}/>
				)}
			</div>
		</div>
	)
}

export default MainPage