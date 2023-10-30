import {FunctionComponent as FC} from 'react'
import './subjectCard.scss'

interface IPropSubjectCard {
	title: string;
	progres: number;
}

const SubjectCard:FC<IPropSubjectCard> = ({title, progres}) => {
  return (
	<div className="subject-card">
		<div className="subject-card__title">{title}</div>
		<div className="subject-card__description">
			Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dicta ab, unde distinctio iusto non, consequatur maxime culpa excepturi recusandae, velit odit aut debitis dolores sit numquam blanditiis est fuga minima.
		</div>
		<div className="subject-card__bottom">
			<p>Ты прошёл {progres}%</p>
			<div className="subject-card__bottom__progres">
				<div style={{width: `${progres}%`}} className="subject-card__bottom__progres__success"></div>
			</div>
		</div>
	</div>
  )
}

export default SubjectCard