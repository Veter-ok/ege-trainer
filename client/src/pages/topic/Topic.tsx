import { useParams } from 'react-router-dom'
import './topic.scss'
import { Topics } from '../../constants/topics'
import ParonymsPage from '../paronyms/paronymsPage'

const TopicPage = () => {
	const {topicId} = useParams()
	const currentlyTopic = Topics.filter((value) => value.id === Number(topicId) ? true : false)[0]

	return (
		<div className="topic-page">
			{Number(topicId) === 0 ? 
				<ParonymsPage/>
			:
				<div className="topic-page__title">{currentlyTopic.title}</div>
			}
		</div>
	)
}

export default TopicPage