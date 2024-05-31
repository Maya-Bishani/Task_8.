import './Footer.css'
export default function Footer(){
    return <>
    <div className="container-footer">
        <div className="part1">
            <img src='./images/logo.png' alt='logo'/><span className='white-text'> agency</span>
            <h3 className='white-text'>Head Office</h3>
            <a href="https://maps.app.goo.gl/Qwp6NNGQ9Q3P79DaA" target='blank'>Syria - Latakia - grh2+hjx<br />35.5199518</a>
            <p className='white-text' >© 2021 - 2023 focal X L.L.C All Right Reserved</p>
        </div>
        <div className="container-part2">

            <div className="sales">
                <h3>Sales</h3>
                <a href='mailto: contact@focal-x.com' target='blank'>contact@focal-x.com</a>
                <a href="tel:+963 953 666 056">+963 953 666 056 </a>
                <h3>Public Relations</h3>
                <a href='mailto : pr@focal-x.com' target='blank'>pr@focal-x.com</a>
                <a href="tel:+963 953 666 052" target='blank'>+963 953 666 052 </a>
               
            </div>
            <div className="customer">
                <h3>Customer Support</h3>
                <a  href='mailto: info@focal-x.com' target='blank'>info@focal-x.com</a>
                <a href="tel:+963 953 666 054">+963 953 666 054 </a>
                <h3>Human Resources</h3>
                <a href='mailto: hr@focal-x.com' target='blank'>hr@focal-x.com</a>
            </div>
            <div className="useful">
                <h3>Useful Links</h3>
                <p>Clients & Partners</p>
                <p>Check Certificat ID</p>
                <p>Check for employee</p>
                <p>Our Brand ID guidlines</p>
            </div>
            <div className="social-icon">
                <h3>Keep In Touch</h3>
                <a href="https://www.facebook.com/focal.x.agency/"> <img src='./images/facebook (1).png'/></a>
                <a href="https://www.behance.net/focal-x-agency"><img src='./images/behance (1).png'/></a>
                <a href="https://www.linkedin.com/company/focal-x-agency"><img src='./images/linkdin.png'/></a>
                <a href="Www.Instagram.com/focal.x.agency"><img src='./images/instgram (1).png'/></a>
                <a href="https://twitter.com/focal_x_agency"><img src='./images/twitter (1).png'/></a>

            </div>
        </div>
  
   </div>
    </>
}