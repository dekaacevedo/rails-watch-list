// app/javascript/components/banner.js
import Typed from 'typed.js';

const loadDynamicBannerText = () => {
  new Typed('#banner-typed-text', {
    strings: ["Classic", "Romantic", "Superheros"],
    typeSpeed: 50,
    loop: true
  });
}

export { loadDynamicBannerText };
