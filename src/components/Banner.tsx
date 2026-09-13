import banner from "../assets/banner-stack.png";

const Banner = () => {
  return (
    <section className="bg-white">
      <div className="container mx-auto px-12 min-h-[500px] grid grid-cols-2 items-center gap-10">
        <div>
          <h1 className="text-5xl font-bold leading-tight">
            <span className="font-bold">Build Your Ideal</span>
            <br />
           <span className="bg-gradient-to-r from-red-500 to-purple-600 bg-clip-text text-transparent font-bold">Development Stack</span>
          </h1>

          <p className="mt-6 text-lg text-gray-600  max-w-xl">
            Explore frontend, backend, database, and tooling options,<br /> compare
            them side by side, and put together the stack that fits your <br /> next
            project.
          </p>

          <div className="mt-8 flex gap-4">
            <button className="px-6 py-3 bg-gradient-to-r from-red-500 to-purple-600 text-white rounded-lg cursor-pointer">
              Explore Technologies
            </button>

            <button className="px-6 py-3 text-black rounded-lg cursor-pointer">
              Learn More
            </button>

          </div>
        </div>

        <div className="flex justify-center">
            <img src={banner} alt="" />
        </div>


      </div>
    </section>
  );
};

export default Banner;
