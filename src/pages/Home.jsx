import Address from '../ui/Address';
import Collection from '../ui/Collection';
import Contact from '../ui/Contact';
import Footer from '../ui/Footer';
import NewArrivals from '../ui/NewArrivals';
import Slider from '../ui/Slider';

function Home() {
  return (
    <>
      <Slider />
      <NewArrivals />
      <Collection />
      <Address />
    </>
  );
}

export default Home;
