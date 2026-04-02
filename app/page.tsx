
import Services from "./components/services";
import Solutions from "./components/solutions";
import Contact from "./components/contact";
import Hero2 from "./components/hero-2";
import WhyPosinteg from "./components/why-posinteg";
import Industries from "./components/industries";
import Variants from "./components/header-v2";
export default function Home() {
  return (
    <>
    <div className="">
      <Variants/>
      <Hero2/>
      <WhyPosinteg/>
      <Services/>
      <Solutions/>
      <Industries/>
      <Contact/>
    </div>
    </> 
  );
}
