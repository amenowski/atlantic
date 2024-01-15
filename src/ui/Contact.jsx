import Button from './Button';
import { CiInstagram } from 'react-icons/ci';
import { FaPinterest } from 'react-icons/fa';
import { FaTiktok } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa';

function Contact() {
  return (
    <div className="grid grid-cols-1 py-16 text-center text-gray-400 md:grid-cols-2 md:divide-x">
      <div className="border-t p-20 px-4 md:border-y">
        <h5 className="mb-6 text-lg uppercase">follow us out there</h5>
        <div className="flex justify-center gap-3">
          <CiInstagram
            size={30}
            className="cursor-pointer transition-all duration-300 hover:fill-gray-700"
          />
          <FaPinterest
            size={30}
            className="cursor-pointer transition-all duration-300 hover:fill-gray-700"
          />
          <FaTiktok
            size={30}
            className="cursor-pointer transition-all duration-300 hover:fill-gray-700"
          />
          <FaTwitter
            size={30}
            className="cursor-pointer transition-all duration-300 hover:fill-gray-700"
          />
        </div>
      </div>
      <div className="flex w-full flex-col gap-6 border-y px-4 py-20">
        <h5 className="text-lg uppercase">Newsletter</h5>
        <div className="flex items-center justify-center gap-2">
          <input
            placeholder="Email address"
            className="border p-3.5 outline-none placeholder:text-gray-200 focus:ring-1 focus:ring-gray-400 md:w-1/2 md:p-4"
          />
          <Button type="primary">submit</Button>
        </div>
      </div>
    </div>
  );
}

export default Contact;
