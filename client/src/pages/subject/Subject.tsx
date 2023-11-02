import './subject.scss'
import { useParams } from "react-router-dom";
import { subjects } from "../../constants/subjects";
import { Themes } from '../../constants/topics';
import TopicCard from '../../components/topic-card/topic-card';

const Subject = () => {
	const { subjectId } = useParams();

	const currentlySubject = subjects.filter((value) => value.id === Number(subjectId) ? true : false)[0]

	const findTheme = (id: number) => {
		for (let i = 0; i++; i < Themes.length) {
			if (Themes[i].id === id){
				return Themes[i]
			}
		}
		return Themes[0]
	}

	console.log(findTheme(currentlySubject.blocks[0]))
	
	return (
		<div className="subject-page">
			<div className="subject-page__title">{currentlySubject.title}</div>
			<div className="subject-page__progress-bar">
				<div className="subject-page__progress-bar__title">Ты прошёл {currentlySubject.progress}%</div>
				<div className="subject-page__progress-bar__full-line">
					<div style={{width: `${currentlySubject.progress}%`}} className="subject-page__progress-bar__full-line__success"/>
				</div>
				<div className="subject-page__topics-blocks">
					{currentlySubject.blocks.map((value) => 
						<TopicCard topic={findTheme(value)}/>
					)}
				</div>
			</div>
		</div>
	)
}

export default Subject