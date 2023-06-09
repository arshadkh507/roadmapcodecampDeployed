/* eslint-disable no-unused-vars */
import DemoVideos from './DemoVideos/DemoVideos';
import { Navbar, SearchSection, BigCards, SmallCards, Testimonial, ContactSection, FooterHomePage } from './importsHomePage';

const HomePage = () => {
  return (
    <div className="container">
      {/* <Navbar /> */}
      <SearchSection />
      <BigCards />
      <SmallCards />
      <DemoVideos />
      <Testimonial />
      <ContactSection />
      <FooterHomePage />
    </div>
  );
};

export default HomePage;