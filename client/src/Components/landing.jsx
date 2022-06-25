import Landingtop from './landingtop'
import Landingbody from './landingbody';
import Container from 'react-bootstrap/esm/Container';
import Footer from './footer';
function landing(){
    return(
        <div>
            <Container>
                <Landingtop/>
                    <Landingbody/>
                    <Footer/>
            </Container>
       
        </div>
        
    ); 
}

export default landing; 
