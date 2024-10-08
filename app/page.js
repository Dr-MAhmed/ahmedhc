import Slider from './components/Slider';
import HomeoSection2 from './components/HomeoSection2';
import Footer from './components/Footer';

export default function Home() {
  return (
    <>
      <div className="">
        <Slider />
        {/* Add a margin class to create space between Slider and HomeoSection2 */}
        <div className="pt-24"> {/* You can adjust the value (e.g., mt-8, mt-12) as needed */}
          <HomeoSection2 />
        </div>
      </div>
    </>
  );
}
