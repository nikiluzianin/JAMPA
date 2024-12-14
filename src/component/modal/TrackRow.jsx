import { useOutletContext } from "react-router-dom";


export const TrackRow = ({track, isMenuOpen, setOpenMenuId}) => {
    const {playListResponse} = useOutletContext();
    
    const playListNames = playListResponse ? playListResponse.items.map(item => item.name) : [];

    const handleMenuToggle = () => {
        setOpenMenuId(track.id);
    }

    const msToTime = (durationInMs)=> {
        const seconds = parseInt((durationInMs/1000)%60);
        const minutes = parseInt(Math.round((durationInMs/1000)/60));

        return `${minutes}:${seconds}`
    }

    const shortenName = (name) => {
        const shortenLength = 17
        return name.length > shortenLength ? `${name.slice(0, shortenLength)}...` : name; 
    }

    return (
        <>
        <tr className={"clickable-row"}>
            <td className={"track"}>
                <div className={"track-name"}>
                    <div className={"image-play-icon"}>
                        <i className={"bi bi-play-circle play-icon"}></i>
                        <img className={"track-image"} src={track.imageUrl}></img>
                    </div>
                    <p className={"track-p"}>{shortenName(track.name)}</p>
                </div>
            </td>
            <td className={"artist"}>
                <p className={"track-p"}>{track.artist}</p>
            </td>
            <td>
                <p className={"track-p"}>{msToTime(track.duration)}</p>
            </td>
            <td>
                <div className={"row-menu-container"}>
                    <div onClick={handleMenuToggle}>
                        <i className={"bi bi-three-dots-vertical clickable-row-menu"} />
                    </div>
                    {isMenuOpen && <div className={"row-menu"}> 
                        <ul>
                            {playListNames.map((name, index) => <li key={index}>{name}</li>)}
                        </ul>
                    </div>}
                </div>
            </td>
            <td ></td>    
        </tr>
        </>
    )
}