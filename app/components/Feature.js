import Image from 'next/image';

const features = [
  {
    id: 1,
    icon: 'images/Client-Satisfaction.webp',
    bgColor: 'bg-[#2dd4a5]',
    title: 'Editorial Refinement & Technical Fixes',
    description:
      'With precise and personalized editorial refinement, we make your book more engaging for readers with clarity, emotional depth, and a truly memorable reading experience.',
  },
  {
    id: 2,
    icon: 'images/Best-Seller.webp',
    bgColor: 'bg-[#7c3aed]',
    title: "Personal Guidance",
    description:
      "Your dedicated project manager is with you every step of the way, making the process seamless, efficient, and enjoyable.",
  },
  {
    id: 3,
    icon: 'images/Downtime.webp',
    bgColor: 'bg-[#ff5722]',
    title: 'Literary Recognition & Worldwide Exposure',
    description:
      'With our established literary partnerships and global distribution reach, your book gains the credibility and exposure needed to stand out meaningfully in the market.',
  },
];

export default function Feature() {
  return (
    <section className="py-16 px-4 bg-white">
      <div className="container mx-auto max-w-7xl">
        {/* Heading */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Right Side - Features */}
          <div className="">
            <h3 className='text-xl font-semibold mb-2 text-[#144d52]'>Publishing Your Book Has Never Been Easier</h3>
            <h2 className='text-3xl font-bold mb-2'>Where the Next Bestseller Could Be Yours</h2>
            <p className='mb-5'>You bring the story; we bring the expertise to help it reach its full potential. From editorial refinement to market-focused strategy, we prepare your book for real visibility. Your manuscript could be the next one readers fall in love with.</p>
            {features.map((feature) => {
              return (
                <div
                  key={feature.id}
                  className="flex gap-4 border-s border-[#144d52]"
                >
                  <div className='relative ms-4'>
                    <div class="absolute w-3 h-3 bg-neutral-quaternary rounded-full mt-1.5 -start-5.5 border-4 border-[#144d52] border-white ring-1 ring-[#144d52] bg-[#144d52]"></div>
                    <h3 className="text-xl font-bold text-[#1e3a5f] mb-2 leading-none text-body">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
          {/* Left Side - Image */}
          <div className="relative">
            <Image
              src="images/feature1.webp"
              alt="Content Planning"
              width={600}
              height={500}
              className="rounded-lg shadow-lg w-full h-auto object-cover"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}