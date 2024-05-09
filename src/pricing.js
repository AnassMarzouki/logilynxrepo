import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined';
import StorefrontIcon from '@mui/icons-material/Storefront';
import DomainIcon from '@mui/icons-material/Domain';

export default function Pricing () {
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
                <p> Deserunt Lorem commodo aliquip laborum enim exercitation aliqua do consectetur qui fugiat fugiat. Ea amet non consequat sit id laborum ad. Anim anim dolore amet pariatur fugiat irure officia do veniam dolor esse id ex. Fugiat sunt labore sint ad ullamco.</p>
                <h1>1499 Dhs</h1>
                <button> ORDER NOW</button>
           </div>

           <div className="plus">
           <StorefrontIcon className="pricing-icons" sx={{ fontSize: 60 }} color="disabled"/>
                <h3>Plus</h3>
                <p> Deserunt Lorem commodo aliquip laborum enim exercitation aliqua do consectetur qui fugiat fugiat. Ea amet non consequat sit id laborum ad. Anim anim dolore amet pariatur fugiat irure officia do veniam dolor esse id ex. Fugiat sunt labore sint ad ullamco.</p>
                <h1>3499 Dhs</h1>
                <button> ORDER NOW</button>
           </div>

           <div className="extra">
           <DomainIcon className="pricing-icons" sx={{ fontSize: 60 }} color="disabled"/>
                <h3>Extra</h3>
                <p> Deserunt Lorem commodo aliquip laborum enim exercitation aliqua do consectetur qui fugiat fugiat. Ea amet non consequat sit id laborum ad. Anim anim dolore amet pariatur fugiat irure officia do veniam dolor esse id ex. Fugiat sunt labore sint ad ullamco.</p>
                <h1>4799 Dhs</h1>
                <button> ORDER NOW</button>
           </div>
        </div>
        <div className='center-text'>
            <h3>Can't decide which plan to choose ? We are happy to help you. Contact us</h3>
        </div>
        </>
    )
}