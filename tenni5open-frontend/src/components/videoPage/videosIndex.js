import React from 'react'


function VideosIndex(props) {


    const loaded = () => {
      
        return props.videos.map((video) => (
          <>
          <div className='slam-videos'>
            {/* iframe embeds the youtube video. Allow= enables permissions for the video player.AlloFullScreen allows the video to be displayed in full screen.  */}
            <iframe className= "yt-video-slams"
            src={`https://www.youtube.com/embed/${video.video}` }
            allow= "accelerometer, autoplay; encrypted-media; picture-in-picture"
            allowFullScreen
            ></iframe>
          </div>
         <div key={video.id} >
         </div>
         </>
        ));
    };

    const loading = () => {
        return <h1>Loading data...</h1>
      }
    

 return (
  <div className='equip-title'>
      <h1 className='grand-slam-title'>GRAND SLAMS HIGHLIGHTS</h1>
       {props.videos ? loaded() : loading()}
    </div>
 )}



export default VideosIndex;
