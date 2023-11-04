import './subject.scss'
import { useNavigate, useParams } from "react-router-dom";
import { subjects } from "../../constants/subjects";
import { Topics } from '../../constants/topics';
import TopicCard from '../../components/topic-card/topic-card';

const Subject = () => {
	const { subjectId } = useParams();
	const navigate = useNavigate()
	const currentlySubject = subjects.filter((value) => value.id === Number(subjectId) ? true : false)[0]

	const findTopic = (id: number) => {
		for (let i = 0; i < Topics.length; i++ ) {
			if (Topics[i].id === id){
				return Topics[i]
			}
		}
		return Topics[0]
	}

	const openTopic = (id: number) => {
		navigate(`/topics/${id}`)
	}
	
	return (
		<div className="subject-page">
			<div className="subject-page__title">{currentlySubject.title}</div>
			<div className="subject-page__progress-bar">
				<div className="subject-page__progress-bar__title">Ты прошёл {currentlySubject.progress}%</div>
				<div className="subject-page__progress-bar__full-line">
					<div style={{width: `${currentlySubject.progress}%`}} className="subject-page__progress-bar__full-line__success"/>
				</div>
				<div className="subject-page__topics-blocks">
					{currentlySubject.blocks.map((value, index) => 
						<TopicCard key={index} topic={findTopic(value)} onClick={openTopic}/>
					)}
				</div>
			</div>
		</div>
	)
}

export default Subject