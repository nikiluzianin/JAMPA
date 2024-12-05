export const Card = ({id, name, imageHref}) => {
    /* return (
        <div className="card" style="width: 18rem;">
            <img src={imageHref} className="card-img-top" alt={name} />
            <div className="card-body">
                <p className="card-text">{name}</p>
            </div>
        </div>
    ) */
   const onClickCard = () => {
    console.log(id)
   }
    return (
        <div onClick={onClickCard} className={"detail-card"}>
            <img src={imageHref} alt={name} />
            <div>{name}</div>
        </div>
    )

}