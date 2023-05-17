import AOS from 'aos';
import 'aos/dist/aos.css';

const initAOS = () => {
  AOS.init({
    duration: 500,
  });
};

export default initAOS;
