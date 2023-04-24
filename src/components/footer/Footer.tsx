import instagramIcon from '/assets/instagram-icon.png';
import twitterIcon from '/assets/twitter-icon.png';
import tiktokIcon from '/assets/tik-tok-icon.png';

import './Footer.css';

const Footer = () => {
  return (
    <footer className="Footer">
      <img src={instagramIcon} alt="Instagram" />
      <img src={twitterIcon} alt="Twitter" />
      <img src={tiktokIcon} alt="Tik-tok" />
    </footer>
  );
};

export default Footer;
