import Container from 'react-bootstrap/Container';
import a1 from '../Assets/h1.png';
import {FaStar} from 'react-icons/fa';


const About = () => {
  return (
    <Container>
        <div className="about-content">
        <h1>Inspiration for your next adventure</h1>
        <div className="about-row">
            <div className="about-col">
            <img src={a1} className='img-abt' alt='a house'/>
            <div className="about-col-content">
                <div className="acc-1">
                <p>Desert king </p>
                <p>1MBT per night</p>
                
               
                </div>
                <div className="acc-2">
                <p>2345km away </p>
                <p>available for 2weeks stay</p>
                </div>
            </div>
            <FaStar style={{color:'#A02279'}}/>
            <FaStar style={{color:'#A02279'}}/>
            <FaStar style={{color:'#A02279'}}/>
            <FaStar style={{color:'#A02279'}}/>
            <FaStar style={{color:'#A02279'}}/>
            </div>
            <div className="about-col"></div>
            <div className="about-col"></div>
            <div className="about-col"></div>
        </div>
        </div>
    </Container>
  )
}

export default About
