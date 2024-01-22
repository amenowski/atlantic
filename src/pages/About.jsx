import about from '../assets/images/about.png';

function About() {
  return (
    <div className="flex flex-col items-center justify-center gap-3 text-gray-500">
      <img src={about} className="w-full md:w-2/3" />
      <p>
        Big thanks to Leibal for giving us permission to use their wonderful
        imagery in this demo. If you want to shop these products for real, head
        on over to their site. Here is a little bit about them, in their own
        words:{' '}
      </p>
      <span>
        "Leibal Store was created as a source for curated items focused on
        quality, minimalism, and functionality. Our mission is to provide a
        unique set of products that fascinate and inspire the user. We review
        each product, down to its packaging, to ensure that we continuously
        provide the best in both quality and design. Our selection of products
        are imported from all over the world. Whether from Scandinavia or Japan,
        some of these items have never received exposure in the United States."
      </span>
    </div>
  );
}

export default About;
