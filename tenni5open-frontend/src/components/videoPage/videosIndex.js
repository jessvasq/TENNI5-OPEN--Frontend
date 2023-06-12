import React from 'react'


function VideosIndex(props) {


    const loaded = () => {
      
        return props.videos.map((video) => (
          <>
          <div>
            {/* iframe embeds the youtube video. Allow= enables permissions for the video player.AlloFullScreen allows the video to be displayed in full screen.  */}
            <iframe
            src={`https://www.youtube.com/embed/${video.video}`}
            allow= "accelerometer, autoplay; encrypted-media; picture-in-picture"
            allowFullScreen
            ></iframe>
          </div>
         <div key={video.id} >
         <h1>{video.title}</h1>
         <h1>{video.description}</h1>
         </div>
         </>
        ));
    };

    const loading = () => {
        return <h1>Loading data...</h1>
      }
    

 return (
  <>
    <div>
      <h2>GRAND SLAMS HIGHLIGHTS</h2>
       {props.videos ? loaded() : loading()}
    </div>
    </>
 )}



export default VideosIndex;
