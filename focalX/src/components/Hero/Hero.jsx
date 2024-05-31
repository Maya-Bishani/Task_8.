import './Hero.css'

export default function Hero(){
    return<>
   <div className="container-hero">
   <div> 
        <h1 className="orange-text">Hey !! Mario still here, But don’t forget that</h1>
        <p className='titel'>At focal X agency, we are working to build somthing different. Here you’ll have a group of creative people who specialize in:
Branding, Digital Marketing, Web/App Development, Ui/Ux
Content creation, Graphic design, Social media and More........
So you can take a tour in our website, OR just<strong > Press Start :)</strong> </p>
</div>
<div>
<img className='hero-photo2' src='./images/hero1.png' alt='hero-photo'/>
  
<img className='hero-photo1' src='./images/pattren.png' alt='hero-photo'/>
</div> 
 
</div>
<img className='footer' src='./images/fotterhero.svg' alt="photo"/> 
<img className='footer-mobile' src='./images/footer-mobile-2.png' alt="photo" />
<div className='icons'> 
<a href='#'><img src='./images/facebook.png'  alt='facebook-icon'/></a>
<a href='#'><img src='./images/behance.png'  alt='behance-icon'/></a>
<a href='#'> <img src='./images/linkedin.png'  alt='linkedin-icon'/></a>
<a href='#'><img src='./images/instgram.png'  alt='instagram-icon'/> </a>
<a href='#'> <img src='./images/twitter.png'  alt='twitter-icon'/></a>

</div>

<div className="paragraph">
    <p>© 2021 - 2022 focal X agency All Right Reserved</p>

</div>
    </>
}