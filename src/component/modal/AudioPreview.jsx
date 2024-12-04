// For playing preview of song

export const AudioPreview = ({ previewUrl, audioRef }) => {
    return <audio ref={audioRef} src={previewUrl}></audio>
} 