export default function SpaServices() {
  return (
    <div className="w-full">
      {/* SERVICES CONTENT with top padding to avoid overlap */}
      <div className="container mx-auto px-4 pt-32 pb-16 space-y-20">
        <h1 className="text-4xl font-serif mb-8">Our Services</h1>
        <p className="text-gray-600 mb-12">
          Experience luxury spa treatments tailored to your needs. Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi error sit voluptatum veniam incidunt sapiente, recusandae perferendis magnam porro, maxime blanditiis, aut architecto repellendus dolorem consequatur iste expedita atque doloremque.
        </p>
        {/* Your service content goes here */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Service cards or content */}
        </div>
        <div>
             <section className="grid grid-cols-1 md:grid-cols-4 gap-4 auto-rows-[200px]">
          {/* Large Box (Top Left) */}
          <div className="md:col-span-1 md:row-span-2 bg-gray-100 border border-black/10 relative overflow-hidden group">
            <img
              src="https://via.placeholder.com/400x600"
              alt="Waxing"
              className="w-full h-full object-cover transition-transform group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/20 flex items-end p-4">
              <span className="text-white uppercase tracking-widest text-sm font-bold">
                Waxing
              </span>
            </div>
          </div>

          {/* Wide Box (Top Middle) */}
          <div className="md:col-span-2 md:row-span-2 bg-gray-100 border border-black/10 relative overflow-hidden group">
            <img
              src="https://via.placeholder.com/800x600"
              alt="Facials"
              className="w-full h-full object-cover transition-transform group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/20 flex items-end p-4">
              <span className="text-white uppercase tracking-widest text-sm font-bold text-xl">
                Signature Facials
              </span>
            </div>
          </div>

          {/* Small Square (Top Right) */}
          <div className="md:col-span-1 md:row-span-1 bg-gray-100 border border-black/10 relative">
            <img
              src="https://via.placeholder.com/400x400"
              alt="Nails"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Tall Box (Far Right) */}
          <div className="md:col-span-1 md:row-span-2 bg-gray-100 border border-black/10 relative overflow-hidden group">
            <img
              src="https://via.placeholder.com/400x600"
              alt="V-Spa"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/20 flex items-end p-4">
              <span className="text-white uppercase tracking-widest text-sm font-bold">
                V-Spa
              </span>
            </div>
          </div>

          {/* Wide Lower Box */}
          <div className="md:col-span-2 md:row-span-1 bg-gray-100 border border-black/10">
            <img
              src="https://via.placeholder.com/600x400"
              alt="Body Scrub"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Medium Lower Box */}
          <div className="md:col-span-1 md:row-span-1 bg-gray-100 border border-black/10">
            <img
              src="https://via.placeholder.com/400x400"
              alt="Massage"
              className="w-full h-full object-cover"
            />
          </div>
        </section>
        </div>
      </div>
    </div>
  );
}
