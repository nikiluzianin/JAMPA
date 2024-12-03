import { Card } from './Card.jsx';
import './CardPanel.css';

/* cards = [
    {
        imageHref: "",
        name: ""
    },
] */

export const CardPanel = ({header, cards}) => {
    return (
        <div className={"card-panel"}>
            <h3>{header}</h3>
            <div className={"scrollable-cards"}>
                {cards.map((card, index)=> <Card key={`card-detail-${index}`} {...card} />)}
            </div>

        </div>
    )
}
