import './topicCard.scss'
import { FunctionComponent as FC } from "react"
import { ITopic } from "../../types/mainTypes"

interface IPropsTopicCard {
	topic: ITopic 
}

const TopicCard:FC<IPropsTopicCard> = ({topic}) => {
	return (
		<div className="topic-block">
			<div className="topic-block__title">{topic.title}</div>
		</div>
	)
}

export default TopicCard