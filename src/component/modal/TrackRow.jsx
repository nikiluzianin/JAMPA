import { useState } from "react"
import { useOutletContext } from "react-router-dom";


export const TrackRow = ({trackName, albumImageUrl, duration, artistName}) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const {playListResponse} = useOutletContext();
    
    const playListNames = playListResponse ? playListResponse.items.map(item => item.name) : [];

    const handleMenuToggle = () => {
        console.log("Menu is clicked");
        setIsMenuOpen(!isMenuOpen);
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
                        <img className={"track-image"} src={albumImageUrl}></img>
                       
                    </div>
                    
                    <p className={"track-p"}>{shortenName(trackName)}</p>
                </div>
            </td>
            <td className={"artist"}>
                <p className={"track-p"}>{artistName}</p>
            </td>
            <td>
                <p className={"track-p"}>{msToTime(duration)}</p>
            </td>
            <td>
                <div className={"row-menu-container"}>
                    <div onClick={handleMenuToggle}>
                        <i className={"bi bi-three-dots-vertical clickable-row-menu"} />
                    </div>
                    {isMenuOpen && <div className={"row-menu"}> 
                        {/* TODO: Have to fetch playlist from API and display in the list*/}
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