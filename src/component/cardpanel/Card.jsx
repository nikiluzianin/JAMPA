export const Card = ({id, name, imageHref, selectCard}) => {
   const onClickCard = () => {
    selectCard(id);
    console.log(id);
   }
    return (
        <>
            <div onClick={onClickCard} className={"detail-card"}>
                <img src={imageHref} alt={name} />
                <div>{name}</div>
            </div>
           
        </>

    )

}

