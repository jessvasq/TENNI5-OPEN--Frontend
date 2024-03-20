import React from 'react';



function LessonIndex(props) {


    const loaded = () => {
      
        return props.lessons.map((lesson) => (
          <>
          <div>
            {/* iframe embeds the youtube lesson. Allow= enables permissions for the lesson player.AlloFullScreen allows the lesson to be displayed in full screen.  */}
            <iframe className= "yt-video"
            src={`https://www.youtube.com/embed/${lesson.video}`}
            allow= "accelerometer, autoplay; encrypted-media; picture-in-picture"
            allowFullScreen
            ></iframe>
          </div>
         <div key={lesson.id} >
         <h1 className= "video-description">{lesson.title}</h1>
         </div>
         </>
        ));
    };

    const loading = () => {
        return <h1>Loading data...</h1>
      }
    

 return (
  <>
   <div className='grid-lesson'>
    <div className='grid-lesson-text'>
      <h1 id="how-to-header">HOW TO TENNIS</h1>
      <h2 >RULES</h2>
      <p className="lesson-p">A tennis match begins with the umpire doing a coin toss. The player who wins the toss can choose to serve, receive or pick the side from which they want to start the match.
          The serving player has to stand behind the baseline of his side of the tennis court and within the bounds of the centre mark and the sideline.
          For a successful serve, the server has to toss the ball up with his non-playing hand and hit it with the racket before it bounces. The ball needs to cross the net and land within the serving area which is marked on the diagonally opposite side of the court for it to be deemed a legal serve.
          Each player is allowed two serves per point. If a player hits the net, or the ball’s first bounce occurs outside the serving area, it's called a service fault and the server has a second serve to initiate the point.
          If the server’s foot touches the baseline or goes out of bounds of the sideline, it is known as a foot fault and the server will have a second serve.
          If a player commits a fault on his second serve also, it is called a double fault and the receiving player gets that point.
          However, if a player’s serve hits the net and lands within the serving area, then the server will still have two serves to initiate the point. This situation is known as let.
          The server has to alternate between the vertical halves of the tennis court for each point.
          If the server manages to land a legal serve and the receiver is unable to return the ball, it is known as an ace and the server gets the point.</p>
          <h2>SCORING</h2>
          <p className="lesson-p">A player or team has to win four points to win a game. Any game starts at 0-0 and the zero point in tennis is called love. The progression of points occurs as follows:
          First point - 15
          Second point - 30
          Third point - 40
          Fourth point - Game
          However, if both players win three points each in a game (i.e score is 40-40), then it's called a deuce.</p>
          <h2>SHOTS</h2>
          <h3 className='subtitle'>Forehand and backhand</h3>
          <p className="lesson-p">The two most common shots in tennis are the forehand and backhand. If a right-handed player extends his right hand to hit the ball from the right side of his body, it is called a forehand.
          If the right-handed player brings his right hand across his body to hit a shot from the left side of his body, it is called a backhand.
          The inverse applies for left-handed players.</p>
          <h3 className='subtitle'>Drop shot</h3>
          <p className="lesson-p">When a player reduces the speed of his shot to land the ball just above the net and onto the opposite side, it is called a drop shot.
          A drop shot is generally used when the opposing player is standing at the baseline and it becomes difficult for them to recover a drop shot as they have to cover quite a distance.</p>
          <h3 className='subtitle'>Smash</h3>
          <p className="lesson-p">When a player hits a shot with all their power, generally from over their heads, such that the opposing player is unable to reach the ball, it is known as a smash.</p>
          <h3 className='subtitle'>Slice</h3>
          <p className="lesson-p">A player hits a slice when they cut the ball with the racket facing the court at a cross angle. The slice is generally used to slow down the pace of a rally.</p>
          <h2 >SETS</h2>
          <p className="lesson-p">In men’s singles events at Grand Slams, the matches are a best-of-five sets but in all other ATP Tour events, a men’s singles match is a best-of-three sets affair.
          Men’s doubles matches, in the ATP Tour and Grand Slams, are best-of-three sets except the Wimbledon, where they are best-of-five set matches.
          All women’s singles and doubles events - in Grand Slams and on the WTA Tour - are best-of-three sets matches.</p>
    </div>
<div className='grid-lesson-videos'> 
 <h1>TUTORIALS</h1>
       {props.lessons ? loaded() : loading()}
</div>

    
    </div>
    </>

 )}



export default LessonIndex;
