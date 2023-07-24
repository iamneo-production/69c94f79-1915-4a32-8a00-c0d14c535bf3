import React from 'react';
import './Embed2.css'
const Embed = () => {
  
  
  const aadhi='<iframe style="border-radius:12px" src="https://open.spotify.com/embed/playlist/42cZpZtmvFv2De1bK5kVkk?utm_source=generator" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>';
  const playlistcode = '<iframe style="border-radius:12px" src="https://open.spotify.com/embed/playlist/02CmIi2XeQHAin5KhsODVe?utm_source=generator" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>';
  return (
   
 <div>
  
   
    <div className='body' dangerouslySetInnerHTML={{ __html: playlistcode }} />
    <br></br>
    <br></br>
    <div className='body' dangerouslySetInnerHTML={{ __html: aadhi }} />
    </div>
    
  );
};

export default Embed;