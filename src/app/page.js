
import FAQ from "./faq/page.js";
import Footer from "./footer/page.js";
import HeroSection from "./herosection/page.js";
import HowItWorks from "./howitworks/page.js";
import Pricing from "./price/page.js";

export default function Home() {
  return (
 <div>
<HeroSection/>
<HowItWorks/>
<Pricing/>
<FAQ/>
 </div>
  )
}
