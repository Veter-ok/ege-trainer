import './subject.scss'
import { useParams } from "react-router-dom";
import { subjects } from "../../constants/subjects";

const Subject = () => {
	const { subjectId } = useParams();

	const currentlySubject = subjects.filter((value) => value.id === Number(subjectId) ? true : false)[0]
	
	return (
		<div className="subject-page">
			<div className="subject-page__title">{currentlySubject.title}</div>
			<div className="subject-page__progress-bar">
				<div className="subject-page__progress-bar__title">Ты прошёл {currentlySubject.progress}%</div>
				<div className="subject-page__progress-bar__full-line">
					<div style={{width: `${currentlySubject.progress}%`}} className="subject-page__progress-bar__full-line__success"/>
				</div>
			</div>
		</div>
	)
}

export default Subject