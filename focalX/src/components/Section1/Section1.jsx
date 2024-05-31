import './Section1.css'
export default function Section1(){
    return <>
     <h1 className='heading'> Our Services</h1>
   <div className="container">
    <div className="card1">
        <div className='title-card1'> 
        <h1>Branding</h1>
        <p className='font-wieght'> The brand is hope,</p>
       <p>It is also the source of inspiration for everything you do when you
       deal with your customers and that is the important and emotional
       thing. <span className='font-wieght' > Your Brand and Visual identity </span> represents an intrinsic Value
       to your company.</p>
       <p className='blod-font'>In focal X agency, we provide:</p>
       <p className='gray-font' >Visual identity design.</p>
      <p className='gray-font'> Define Brand Identity.</p>
      <p className='gray-font'>Define Brand personality.</p>
       <p className='gray-font'>Building Your brand strategy.</p>
       <p className='gray-font'>Market research and competitors study.</p>
       <p className='blod-font'> We walk with you from A to Z.</p>
       </div>
       <div>
        <img className='brandingorange' src='./images/brandingOrange.png'/>
       </div>
    </div>
    <div className="card2">
   <div className="title-card2">

    <h1>Marketing</h1>
    <p>Talk to your customers and tell them you and your company's
    story through us the way you want.
    Let us plan the content that will bring your audience closer to you.</p>
    <p className='blod-font'>In our marketing agency, we provide:</p>
    <p className='gray-font'> E-mail marketing.</p>
    <p className='gray-font'> Affiliate marketing.</p>
    <p className='gray-font'>Influencer marketing.</p>
    <p className='gray-font'>Market research and Analysis.</p>
    <p className='gray-font'>App store optimization ( ASO ).</p>
    <p className='gray-font'>Search engine Marketing ( SEM ).</p>
    <p className='gray-font'>Search engine optimization ( SEO ).</p>
    <p className='gray-font'>Social media marketing & campaigns.</p>
   </div>
   <div>
        <img className='markrtingpattren' src='./images/markiting.png'/>
       </div>
    </div>
   </div>
    </>
}