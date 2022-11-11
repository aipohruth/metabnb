import Container from 'react-bootstrap/Container';
import mf1 from '../Assets/mbtoken.png';
import mf2 from '../Assets/metamask.png';
import mf3 from '../Assets/opensea.png';

const Minifooter = () => {
  return (
        <Container fluid>
          <div className="mini-footer">
             <img src={mf1} width='120' alt='mbtoken'/>
             <img src={mf2} width='120' alt='metatask'/>
             <img src={mf3} width='120' alt='opensea'/>
         </div>
       
       </Container>

  )
}

export default Minifooter
