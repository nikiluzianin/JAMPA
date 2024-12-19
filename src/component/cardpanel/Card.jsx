import { useJampaContext } from '../../pages/Root';

export const Card = ({id, name, imageHref, selectCard, contentType}) => {
    const { startPlayingContent, togglePlayer, playingContentId, isPaused } = useJampaContext();
    const isPlaying = playingContentId === id && !isPaused;

    const handlePlay = () => {
        if(playingContentId === id){
            togglePlayer();
            return;
        }
        startPlayingContent(contentType, id);
    }

    const onClickCard = () => {
        selectCard(id);
    }
        return (
            <>
            <div className={"detail-card"}>
                <div className="play-button" onClick={handlePlay}>
                    {isPlaying 
                    ? (<i className="bi bi-pause-circle" style={{ fontSize: '3em', backgroundColor: '#8766eba8', borderRadius: '25px' }}></i>) 
                    : (<i className="bi bi-play-circle" style={{ fontSize: '3em', backgroundColor: '#8766eba8', borderRadius: '25px' }}></i>)}
                </div>
                <div onClick={onClickCard} >
                    <img src={imageHref} alt={name} />
                    <div>{name}</div>
                </div>
            </div>
            </>
        )

}

