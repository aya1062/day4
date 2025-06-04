import Image from "next/image";
export default function About() {
  return (
     <main className="bg-gray-50 min-h-screen py-12 px-6">
      <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-md p-8 space-y-10">
        <section>
          <h1 className="text-4xl font-bold text-gray-800 mb-4">About Us</h1>
          <p className="text-gray-600 text-lg leading-relaxed">
            We are a digital solutions company committed to helping businesses and individuals grow in today’s fast-paced digital environment.
            Our focus is on quality, innovation, and delivering real value to our clients.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-700 mb-2">Our Mission</h2>
          <div className="flex flex-col sm:flex-row gap-6 items-center">
            <div className="flex-1">
              <p className="text-gray-600 leading-relaxed">
                To empower people and organizations to reach their full potential through technology—while staying transparent and professional.
              </p>
            </div>
            <div className="w-full sm:w-64 h-40 relative">
              <Image
                src="https://images.unsplash.com/photo-1581090700227-1e8d92d4b0c6"
                alt="Mission"
                fill
                className="rounded-lg object-cover"
              />
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-700 mb-2">Our Vision</h2>
          <div className="flex flex-col sm:flex-row-reverse gap-6 items-center">
            <div className="flex-1">
              <p className="text-gray-600 leading-relaxed">
                To become the leading digital partner in the region by offering innovative, customized services that meet the market’s needs.
              </p>
            </div>
            <div className="w-full sm:w-64 h-40 relative">
              <Image
                src="https://images.unsplash.com/photo-1519389950473-47ba0277781c"
                alt="Vision"
                fill
                className="rounded-lg object-cover"
              />
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-700 mb-2">Our Team</h2>
          <div className="flex flex-col sm:flex-row gap-6 items-center">
            <div className="flex-1">
              <p className="text-gray-600 leading-relaxed">
                Our team is made up of passionate developers, designers, and experts across various fields—working together to build meaningful digital experiences.
              </p>
            </div>
            <div className="w-full sm:w-64 h-40 relative">
              <Image
                src="https://images.unsplash.com/photo-1629909613659-7c6d8d6b1e1e"
                alt="Team"
                fill
                className="rounded-lg object-cover"
              />
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
