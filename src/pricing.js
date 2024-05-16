import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined';
import StorefrontIcon from '@mui/icons-material/Storefront';
import DomainIcon from '@mui/icons-material/Domain';

export default function Pricing () {
    const orderNow = (event)=> {
        const {pkgname} = event.target.dataset
        window.open(`https://api.whatsapp.com/send?phone=212708284699&text=Hello%20LOGILYNX%2C%0AI%20want%20to%20order%20the%20${pkgname}%20plan%20%20please`, '_blank')
        console.log(pkgname)
    }
    return (
        <>
        <div className='center-text'>
            <h1>Find the Landing Page plan that's right for you</h1>
            <h2>Need a custom plan ? Request a quote here</h2>
        </div>

        <div className="pack-pricing">
           
           <div className="essential">
           <PersonOutlinedIcon className="pricing-icons" sx={{ fontSize: 60 }} color="disabled"/>
                <h3>Essential</h3>
                <ul>
                    <li>Single landing page</li>
                    <li>Responsive design</li>
                    <li>Basic SEO optimization</li>
                    <li>2 revisions included</li>
                    <li>Custom domain name (1 year)</li>
                </ul>
                <h1>1499 Dhs</h1>
                <button data-pkgname="ESSENTIAL" onClick ={orderNow}> ORDER NOW</button>
           </div>

           <div className="plus">
           <StorefrontIcon className="pricing-icons" sx={{ fontSize: 60 }} color="disabled"/>
                <h3>Plus</h3>
                <ul>
                    <li>Up to 3 web pages</li>
                    <li>Responsive design</li>
                    <li>Advanced SEO optimization</li>
                    <li>5 revisions included</li>
                    <li>Custom domain name (1 year)</li>
                    <li>Basic analytics integration</li>
                </ul>
                <h1>3499 Dhs</h1>
                <button data-pkgname="PLUS" onClick ={orderNow}> ORDER NOW</button>
           </div>

           <div className="extra">
           <DomainIcon className="pricing-icons" sx={{ fontSize: 60 }} color="disabled"/>
                <h3>Extra</h3>
                <ul>
                    <li>Up to 10 web pages</li>
                    <li>Responsive design</li>
                    <li>Advanced SEO optimization</li>
                    <li>Unlimited revisions</li>
                    <li>Custom domain name (2 years)</li>
                    <li>Advanced analytics integration</li>
                    <li>Basic website maintenance (1 year)</li>
                </ul>
                <h1>4799 Dhs</h1>
                <button data-pkgname="EXTRA" onClick ={orderNow}> ORDER NOW</button>
           </div>
        </div>
        <div className='center-text'>
            <h3>Can't decide which plan to choose ? We are happy to help you. Contact us</h3>
        </div>
        </>
    )
}