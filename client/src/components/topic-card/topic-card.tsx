import './topicCard.scss'
import { FunctionComponent as FC } from "react"
import { ITopic } from "../../types/mainTypes"

interface IPropsTopicCard {
	topic: ITopic
	onClick(id: number): void  
}

const TopicCard:FC<IPropsTopicCard> = ({topic, onClick}) => {
	return (
		<div className="topic-block" onClick={() => onClick(topic.id)}>
			<div className="topic-block__title">{topic.title}</div>
		</div>
	)
}

export default TopicCard