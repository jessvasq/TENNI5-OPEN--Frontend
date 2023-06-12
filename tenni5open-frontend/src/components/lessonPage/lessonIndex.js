import React from 'react';



function LessonIndex(props) {


    const loaded = () => {
      
        return props.lessons.map((lesson) => (
          <>
          <div>
            {/* iframe embeds the youtube lesson. Allow= enables permissions for the lesson player.AlloFullScreen allows the lesson to be displayed in full screen.  */}
            <iframe
            src={`https://www.youtube.com/embed/${lesson.video}`}
            allow= "accelerometer, autoplay; encrypted-media; picture-in-picture"
            allowFullScreen
            ></iframe>
          </div>
         <div key={lesson.id} >
         <h1>{lesson.title}</h1>
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
      <h2>LESSONS</h2>
       {props.lessons ? loaded() : loading()}
    </div>
    </>
 )}



export default LessonIndex;
