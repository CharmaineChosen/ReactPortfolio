import React from 'react';
import {NavLink} from 'react-router-dom';
import mypics from '../Images/mypics.jpg';
import '../Css/AboutHome.css';

const Home=()=>{
return(
    <>
    <div className="mainSection">
        <div className="contentBox">

            <h1>Welcome to my Profile</h1>
            <p>My name is Charmaine Makete,I am 27 years of age.I studied a diploma in Information Technology 
            through the University of South Africa.I have experience in developing web 
            and mobile applications,which i have aquired from codetribe.
            I was priviledged to have been introduced to programming languages 
            and frameworks such as Angular,Ionic,Typescript throughout the programme.</p>

            <p>When i did my research about SovTech i found that my skills
                 are matching your requirement where i can showcase my technical/programming
                  experience to contribute to your company growth.I became aware that at SovTech 
                  you use React as one of the frameworks to develop web and mobile apps, 
                  so i saw it as an opportunity for me to upskill myself and improve my developing 
                  skills with this framework</p>
                <div className="btnBox">
                    <div className="btn">
                    <NavLink to="/about" className="readMore">Read More</NavLink>
                    </div>
                </div>

                {/* <h2>Why do i want to be a software developer at SovTech?</h2>
                <p>When i did my research about SovTech i found that my skills
                 are matching your requirement where i can showcase my technical/programming
                  experience to contribute to your company growth.I became aware that at SovTech 
                  you use React as one of the frameworks to develop web and mobile apps, 
                  so i saw it as an opportunity for me to upskill myself and improve my developing 
                  skills with this framework</p> */}
        </div>
        <div className="imgContainer">
           <img src={mypics} alt="home"/>
        </div>
    </div>
    </>
)
}
export default Home;