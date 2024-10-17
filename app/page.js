import Slider from "@/components/ui/Slider";
import HomeoSection2 from "@/components/ui/HomeoSection2";
import Diseases from "@/components/ui/Diseases";

export default function Home() {
  return (
    <>
      <div className="">
        <Slider />
        {/* Add a margin class to create space between Slider and HomeoSection2 */}
        <div className="pt-24"> {/* You can adjust the value (e.g., mt-8, mt-12) as needed */}
          <HomeoSection2 />
        </div>
        <hr className="glowing-line" />
        <div className="pt-16"> {/* You can adjust the value (e.g., mt-8, mt-12) as needed */}
          <Diseases />
        </div>
      </div>
    </>
  );
}
