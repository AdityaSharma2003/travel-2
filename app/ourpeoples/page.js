"use client";

export default function Home() {
  return (
    <section className="py-20 bg-gradient-to-r from-blue-500 to-teal-400">
      <div className="container mx-auto">
        <div className="flex justify-center text-center mb-16 mt-20">
          <div className="w-full lg:w-2/3">
            <h3 className="text-lg text-white mb-4">Our Experts</h3>
            <h2 className="text-4xl font-bold text-white">Let's meet with our team members</h2>
          </div>
        </div>
        <div className="flex flex-wrap justify-center">
          <div className="w-full sm:w-1/2 lg:w-1/4 p-4">
            <div className="bg-white rounded-lg shadow-lg p-6 hover:bg-gradient-to-r hover:from-green-400 hover:to-blue-500 hover:text-white transition duration-300 transform hover:scale-105">
              <div className="relative mb-6">
                <img className="w-full rounded-full border-4 border-white" src="https://i.ibb.co/G2CBWvb/person1.jpg" alt="" />
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 bg-blue-500 text-white rounded-full p-3 shadow-lg">
                  <i className="fab fa-html5 text-2xl"></i>
                </div>
              </div>
              <div className="text-center">
                <h3 className="text-xl font-semibold mb-2">John Doe</h3>
                <p className="uppercase text-sm text-blue-500">Web Developer</p>
              </div>
            </div>
          </div>
          <div className="w-full sm:w-1/2 lg:w-1/4 p-4">
            <div className="bg-white rounded-lg shadow-lg p-6 hover:bg-gradient-to-r hover:from-green-400 hover:to-blue-500 hover:text-white transition duration-300 transform hover:scale-105">
              <div className="relative mb-6">
                <img className="w-full rounded-full border-4 border-white" src="https://i.ibb.co/nbpNr4r/person2.jpg" alt="" />
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 bg-blue-500 text-white rounded-full p-3 shadow-lg">
                  <i className="fab fa-wordpress-simple text-2xl"></i>
                </div>
              </div>
              <div className="text-center">
                <h3 className="text-xl font-semibold mb-2">Robert Smith</h3>
                <p className="uppercase text-sm text-blue-500">WordPress Developer</p>
              </div>
            </div>
          </div>
          <div className="w-full sm:w-1/2 lg:w-1/4 p-4">
            <div className="bg-white rounded-lg shadow-lg p-6 hover:bg-gradient-to-r hover:from-green-400 hover:to-blue-500 hover:text-white transition duration-300 transform hover:scale-105">
              <div className="relative mb-6">
                <img className="w-full rounded-full border-4 border-white" src="https://i.ibb.co/25zdRMr/person3.jpg" alt="" />
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 bg-blue-500 text-white rounded-full p-3 shadow-lg">
                  <i className="fab fa-angular text-2xl"></i>
                </div>
              </div>
              <div className="text-center">
                <h3 className="text-xl font-semibold mb-2">John Doe</h3>
                <p className="uppercase text-sm text-blue-500">Angular Developer</p>
              </div>
            </div>
          </div>
          <div className="w-full sm:w-1/2 lg:w-1/4 p-4">
            <div className="bg-white rounded-lg shadow-lg p-6 hover:bg-gradient-to-r hover:from-green-400 hover:to-blue-500 hover:text-white transition duration-300 transform hover:scale-105">
              <div className="relative mb-6">
                <img className="w-full rounded-full border-4 border-white" src="https://i.ibb.co/w0ynr2Q/person4.jpg" alt="" />
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 bg-blue-500 text-white rounded-full p-3 shadow-lg">
                  <i className="fab fa-js text-2xl"></i>
                </div>
              </div>
              <div className="text-center">
                <h3 className="text-xl font-semibold mb-2">John Smith</h3>
                <p className="uppercase text-sm text-blue-500">Javascript Developer</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
