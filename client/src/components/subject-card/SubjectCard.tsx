import {FunctionComponent as FC} from 'react'
import './subjectCard.scss'
import { ISubject } from '../../types/mainTypes';

interface IPropSubjectCard {
	subject: ISubject;
	onClick?(id: number): void
}

const SubjectCard:FC<IPropSubjectCard> = ({subject, onClick}) => {
  return (
	<div className="subject-card" onClick={onClick !== undefined ? () => onClick(subject.id) : undefined}>
		<div className="subject-card__title">{subject.title}</div>
		<div className="subject-card__description">
			Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dicta ab, unde distinctio iusto non, consequatur maxime culpa excepturi recusandae, velit odit aut debitis dolores sit numquam blanditiis est fuga minima.
		</div>
		<div className="subject-card__bottom">
			<p>Ты прошёл {subject.progress}%</p>
			<div className="subject-card__bottom__progres">
				<div style={{width: `${subject.progress}%`}} className="subject-card__bottom__progres__success"></div>
			</div>
		</div>
	</div>
  )
}

export default SubjectCard