import React from 'react';
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

export default function Footer() {
  return (
    <MDBFooter bgColor='light' className='text-center text-lg-start text-muted'>
      <section className='d-flex justify-content-center justify-content-lg-between p-3 border-bottom'>
        <div className='me-5 d-none d-lg-block'>
          <h6>Get connected with us on social networks:</h6>
        </div>

        <div>
        <FacebookIcon style={{ color: 'white' , marginLeft: '15px'}} />
        <InstagramIcon style={{ color: 'white', marginLeft: '15px'}} />
        <TwitterIcon style={{ color: 'white', marginLeft: '15px' }} />
        <WhatsAppIcon style={{ color: 'white', marginLeft: '15px' }} />
            </div>
      </section>

      <section className='ff'>
        <MDBContainer className='text-center text-md-start mt-4'>
          <MDBRow className='mt-2'>
            <MDBCol md="3" lg="3" xl="4" className='mx-auto mb-3'>
              <h6 className='text-uppercase fw-bold mb-4'>
                <MDBIcon icon="gem" className="me-3" />
                Automotive Research Association of India
              </h6>
              <p>
              ARAI has been playing crucial roles assuring safe, less polluting, more efficient and reliable vehicles. 
              Working in harmony and confidence with its Members, Customers and Government it provides services and expertise
               in the areas of Engineering Services,
               Certification & Standardisation, Research & Develop, Technology Development and Knowledge Initiatives.
              </p>
            </MDBCol>

            <MDBCol md="2" lg="2" xl="2" className='mx-auto mb-3'>
              <h6 className='text-uppercase fw-bold mb-4'>Products</h6>
              <p>
                <a href='#!' className='text-reset'>
                  Home
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  About
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Login
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Contact Us
                </a>
              </p>
            </MDBCol>

            <MDBCol md="3" lg="2" xl="2" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Useful links</h6>
              <p>
                <a href='#!' className='text-reset'>
                  Report
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Incident
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Accident
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Help
                </a>
              </p>
            </MDBCol>

            <MDBCol md="4" lg="3" xl="3" className='mx-auto mb-md-0 mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Contact</h6>
              <p>
                <MDBIcon icon="home" className="me-2" />
               ARAI, Paud Road, Kothrud, Pune.
              </p>
              <p>
                <MDBIcon icon="envelope" className="me-3" />
                info@example.com
              </p>
              <p>
                <MDBIcon icon="phone" className="me-3" /> + 01 234 567 88
              </p>
              <p>
                <MDBIcon icon="print" className="me-3" /> + 01 234 567 89
              </p>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>

      <div className='text-center p-4' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)', color: '#FFC436' }}>
        © 2024 Copyright:
        <a className='text-reset fw-bold' href='https://mdbootstrap.com/'>
          ApurvaIsha.com
        </a>
      </div>
    </MDBFooter>
  );
}