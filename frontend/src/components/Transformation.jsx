import React, { useState , useEffect } from 'react'
import '../scss/_transformation.scss'
import {Parallax} from 'react-scroll-parallax'
import T1img from '../images/Transformation__1.png'



const ReadMore = ({ limit, children }) => {
  const text = children;
  const [isReadMore, setIsReadMore] = useState(true);
  const toggleReadMore = () => {
    setIsReadMore(!isReadMore);
  };
  return (
    <p className="text">
      {isReadMore ? text.slice(0, limit) : text} <br/>
      <button onClick={toggleReadMore} className="read-or-hide">
        {isReadMore ? "Read more" : " Show less"}
      </button>
    </p>
  );
};


function Transformation() {

  const [isReadMore , setReadMore] = useState(false);

  return (
    <div className="container-fluid Transformation">
      <div className='Transformation__heading'>
      <h1>Transformations</h1>
      <p><strong>Because We believe Small Victory✌ Matters</strong> </p>
      </div>
      <div className="row">
        <div className="col-12 col-md-6 img">
          <img src={T1img} alt="" />
        </div>
        <div className="col-12 col-md-6 feedback">
          <h2>Shubham Ingole</h2>
         
            <ReadMore limit={500}>
            I started following the nourishing plan with nourishwithdhammaratna
            from 6th of may 2k22 . As diet plan provided I started following
            properly. In case of any difficulty I faced I get connected on phone with
            her and understanding the issue and according to the diet she gave me
            the possible solution. She is very devoted to her work,taking daily
            updates,encouraging by videos,guiding us properly. As I started my
            diet after some days my indigestion problem is solved. I started
            feeling very energetic. My energy level has increased. I am feeling very
            light,before diet I was feeling exhausted, every single
            day after coming from work I felt sleepy and tired but after following
            diet even after coming from work my laziness has gone &#128516; as I started
            following diet after some days my exhaustion is decreased
            automatically. I had Constipation issue which has solved within 2
            weeks. Reduced my body fat. Due to fat loss waist measurments is
            decreased from 42 inch to 40 inch. I am very Happy by this inch
            loss. I will continue following her advice and guidance about correct
            nutrition and maintain my healthy weight. Im yet to achieve my Health
            goal but I'm sure with the help of Dhammaratna I'll for sure. I
            specially thanks to the Dhammaratna for helping me for fat loss and
            reduce weight in healthy manner.&#128591; &#128591; &#128591; I'll recommend Dhammaratna.
            </ReadMore>
          
        </div>
      </div>
    </div>
  );
}

export default Transformation