import MusicCard from "../MusicCards/MusicCard";
import { searchSpotify } from '../../Playlists/Playlists';
import { useEffect, useState } from "react";


const PlaylistLayout = () => {
  const [results, setResults] = useState({ albums: {items:[]}}); //tracks: {items:[]} 
  const [query, setQuery] = useState('');

  // Fetch results based on the query
  useEffect(() => {
    const fetchResults = async () => {
      if (query.trim() === '') return; // Skip fetching if the query is empty
      try {
        const data = await searchSpotify(query, 'album, track');
        console.log("Fetched data:", data);
        if (data) setResults(data);
      } catch (err) {
        console.log("Error: ", err);
      }
    };
    fetchResults();
  }, [query]);

  // Handle input change
  const handleInputChange = (e) => {
    setQuery(e.target.value); // Update the query with user input
  };

  return (
    <>
    <div className="playlist">
        {/* Search Bar */}
        <div>
          <input
            type="text"
            placeholder="Search for an artist or album..."
            value={query}
            onChange={handleInputChange} // Handle changes in the input field
          />
        </div>

        {/* Display results  album, track */}
        <div className={"playlist-container"}>
          {results.albums?.items?.length > 0 ? (
            results.albums.items.map((album) => (
              <MusicCard key={album.href} album={album} />
            ))
          ) : (
            <p>No results found.</p>
          )}

          {/* {results.tracks?.items?.length > 0 ? (
            results.tracks.items.map((track) => (
              <div key={track.href} >
                <p>{track.name}</p>
                <p>{track.artists.map((artist) => artist.name).join(', ')}</p>
              </div>
            ))
          ) : (
            <p>No tracks found.</p>
          )} */}
          </div>
        

    </div>
    </>
  );
};

export default PlaylistLayout;
