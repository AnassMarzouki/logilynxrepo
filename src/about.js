import sectiona from "./sectiona.jpg"
import sectionb from "./sectionb.jpg"
export default function About (){
    return (
        <div className="about-section-mobile about-section-desktop">
            <div className="section-a">
                <div className="section-a-text">
                    <h3>About LOGILYNX</h3>
                    <p><b>LOGILYNX</b> is a premier on-demand web development service, providing custom website creation, 
                    page customization, and high-converting landing pages. Behind our service is a team of skilled 
                    and experienced web developers dedicated to delivering quality work on time, every time.</p>


                    <h3>Our Expertise</h3>
                    <p>Our developers are well-versed in the latest web technologies and frameworks, including 
                    HTML, CSS, JavaScript, React, Node.js, and more. We stay up-to-date with industry trends 
                    and best practices to ensure your website or landing page is not only visually stunning 
                    but also optimized for performance, security, and search engine visibility.</p>
                </div>

                <div className="section-a-img">
                    <img src={sectiona} alt=""></img>
                </div>
            </div>

<div className="section-b">
    <div className="section-b-text">
        <h3>Our Process</h3>
        <p>We understand that every project is unique, which is why we follow a tailored approach to meet
        your specific needs. Our process begins with a comprehensive consultation to understand your goals,
        target audience, and desired features. From there, our team works closely with you to design and 
        develop a website or landing page that aligns with your brand and objectives.</p>



        <h3>On-Demand Service</h3>
        <p>With <b>LOGILYNX</b>, you have the flexibility to scale your web development resources as needed. Whether
        you require a single landing page or a complete website overhaul, our on-demand service ensures you 
        have access to top talent without the overhead of a full-time development team.
        </p>


        <h3>Quality Assurance</h3>
        <p>Quality is at the forefront of everything we do. Our rigorous testing and quality assurance processes
        ensure that your website or landing page is thoroughly evaluated for functionality, usability, 
        and cross-browser compatibility before deployment.

        Join the growing list of satisfied clients who have trusted <b>LOGILYNX</b> for their web development needs. 
        Contact us today to discuss your project and experience the LOGILYNX difference.</p>
    </div>

    <div className="section-b-img">
        <img src={sectionb} alt=""></img>
    </div>

</div>


        </div>
    )
}