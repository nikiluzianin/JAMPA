import { Card } from './Card';
import './CardPanel.css';

/* cards = [
    {
        id: ""
        imageHref: "",
        name: ""
    },
] */

export const CardPanel = ({ header, cards, selectCard }) => {

    return (
        <div className={"card-panel"}>
            <h3>{header}</h3>
            <div className={"scrollable-cards"}>
                {cards.map((card, index) => <Card 
                    key={`card-detail-${index}`} 
                    id={card.id} 
                    name={card.name} 
                    imageHref={card.imageHref} 
                    selectCard={selectCard}
                    contentType={card.contentType}
                />)}
            </div>

        </div>
    )
}
