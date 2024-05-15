import React from 'react';
// import {gal} from '../../public/home_images/gal-1.jpg';
// import {edu} from '..../public/home_images/edu-1.jpg';
import gal from "../assets/home_images/gal-1.png";
import edu from "../assets/home_images/edu-1.jpg";
import e from "../assets/home_images/edu-2.jpg";
import Footer from '../Components/Footer';
import Header from '../Components/Header';
const Achievements = () => {
    return (
        <div>
            <Header />
        <div className="bg-gray-100 py-8">
            <div className="container mx-auto">
                <h1 className="text-4xl font-bold text-center mb-8 text-gray-900">Our Achievements</h1>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="bg-white rounded-lg shadow-md p-6">
                        <h2 className="text-xl font-bold mb-4 text-gray-900">Education</h2>
                        <p className="text-gray-800 mb-4">Lorem ipsum dolor sit amet, consectetur  tincidunt magna nulla ut ex., vitae dapibus arcu aliquam. Suspendisse in sapien at sapien consequat rutrum vel eu purus. Cras non malesuada nulla, in lobortis risus. Suspendisse vitae diam sed ipsum viverra vulputate. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. In hac habitasse platea dictumst. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Donec euismod arcu sit amet velit accumsan, non hendrerit eros efficitur.</p>
                        <img src={gal} alt="Achievement 1" className="w-full rounded-lg" />
                    </div>
                    <div className="bg-white rounded-lg shadow-md p-6">
                        <h2 className="text-xl font-bold mb-4 text-gray-900">Family</h2>
                        <p className="text-gray-800 mb-4">Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Duis id nulla convallis, cursus risus ut, tristique tortor. Fusce vitae enim ut lorem eleifend auctor. Nulla facilisi. Nullam nec purus non nunc semper egestas nec sed tortor. Phasellus eu eros non mi semper suscipit ut non arcu. Cras tempor felis eu ligula commodo, nec suscipit velit luctus. Duis dictum lorem nec est mattis pharetra. Sed lacinia nunc eget nisi tincidunt, id gravida mi bibendum.</p>
                        <img src={edu} alt="Achievement 2" className="w-full rounded-lg" />
                    </div>
                    <div className="bg-white rounded-lg shadow-md p-6">
                        <h2 className="text-xl font-bold mb-4 text-gray-900">Volunteer Work </h2>
                        <p className="text-gray-800 mb-4">Maecenas convallis diam id quam mattis efficitur. Aliquam erat volutpat. Aenean at est sit amet turpis egestas bibendum. Sed finibus, justo nec pharetra luctus, velit orci rhoncus ipsum, eget aliquam purus eros eget risus. Integer mollis elit nec tincidunt faucibus. Proin at sem quis velit gravida varius id sed odio. Nullam tristique, purus id vehicula tincidunt, ex ipsum fermentum felis, sed pellentesque quam augue a libero. In hac habitasse platea dictumst. Nullam ac mauris in ligula luctus euismod id vel risus.</p>
                        <img src={e} alt="Achievement 3" className="w-full rounded-lg" />
                    </div>
                </div>
                {/* Add more sections as needed */}
            </div>
        </div>
        <Footer />
        </div>
    );
};

export default Achievements;
