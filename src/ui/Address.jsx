import address from '../assets/images/address.png';

function Address() {
  return (
    <div
      className="flex h-[400px] w-full items-center justify-center bg-cover"
      style={{
        backgroundImage: `url(${address})`,
        backgroundPosition: '50% 50%',
      }}
    >
      <div className="bg-white p-10 text-center text-gray-400">
        <h5 className="mb-4 text-lg uppercase tracking-widest text-black">
          Visit our showroom
        </h5>
        <p className="mb-6">2217 Main Street</p>
        <p>Mon-Fri: 12pm-5pm</p>
        <p>Sat: 12pm-6pm</p>
        <p>Sun: Closed</p>
      </div>
    </div>
  );
}

export default Address;
