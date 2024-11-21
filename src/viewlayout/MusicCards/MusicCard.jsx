import './MusicCards.css'

const MusicCard = (props) => {
    const {images, name, href} = props.album
    const singleImage = Array.isArray(images) & images.length > 0
    ? (images[1]?.url || images[0]?.url)
    : "https://via.placeholder.com/150";

    return (
        <div className="card h-100">
            <img
                key={href}
                src={singleImage}
                alt={name}
          />
           {/* <div>{name}</div> */}
           <div className="card-body">
                <h5 className="card-title">{name}</h5>
       
      </div>
        </div>
    )
}

export default MusicCard;