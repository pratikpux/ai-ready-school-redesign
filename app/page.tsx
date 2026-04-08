export default function Home() {
  return (
    <main className="bg-gray-50 text-gray-900">

      {/* NAVBAR */}
      <nav className="border-b bg-white">
        <div className="max-w-7xl mx-auto px-6 py-5 flex justify-between items-center">

          <h1 className="text-2xl font-bold text-pink-600 tracking-tight">
            AI Ready School
          </h1>

          <div className="hidden md:flex gap-8 text-sm font-medium text-gray-700">
            <a href="#" className="hover:text-black">Products</a>
            <a href="#" className="hover:text-black">Programs</a>
            <a href="#" className="hover:text-black">Use Cases</a>
          </div>

          <button className="bg-pink-500 hover:bg-pink-600 transition text-white px-5 py-2 rounded-lg text-sm font-medium">
            Book Demo
          </button>

        </div>
      </nav>

      {/* HERO */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">

          <div className="max-w-xl">
            <h1 className="text-5xl font-bold leading-tight mb-6">
              Bring AI into your school —{" "}
              <span className="text-pink-500">clearly and effectively</span>
            </h1>

            <p className="text-lg text-gray-600 mb-8">
              A complete AI ecosystem designed for students, teachers, and institutions.
            </p>

            <div className="flex gap-4">
              <button className="bg-pink-500 hover:bg-pink-600 transition text-white px-6 py-3 rounded-lg font-medium">
                Book Demo
              </button>

              <button className="border border-gray-300 px-6 py-3 rounded-lg font-medium hover:bg-gray-100 transition">
                Explore Products
              </button>
            </div>
          </div>

          <div className="bg-gradient-to-br from-gray-100 to-gray-200 h-96 flex items-center justify-center rounded-xl shadow-sm">
            <p className="text-gray-400">Product Preview</p>
          </div>

        </div>
      </section>

      {/* PRODUCTS */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-6">

          <h2 className="text-3xl font-semibold mb-12 text-center">
            Our AI Ecosystem
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Cypher",
                desc: "AI companion that helps students think, question, and learn independently."
              },
              {
                name: "Morpheus",
                desc: "AI teaching assistant that reduces workload and enhances classroom delivery."
              },
              {
                name: "Zion",
                desc: "A unified platform with 30+ AI tools for schools in one place."
              }
            ].map((item) => (
              <div
                key={item.name}
                className="p-6 bg-gray-50 rounded-xl shadow-sm hover:shadow-md transition"
              >
                <h3 className="font-semibold text-xl mb-3">{item.name}</h3>
                <p className="text-sm text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* TRUST + CTA */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 text-center">

          <h2 className="text-3xl font-semibold mb-6">
            Trusted by forward-thinking schools
          </h2>

          <p className="text-gray-600 max-w-xl mx-auto mb-10">
            Schools across India are adopting AI Ready School to improve learning outcomes,
            reduce teacher workload, and build future-ready students.
          </p>

          <div className="flex justify-center gap-4">
            <button className="bg-pink-500 hover:bg-pink-600 transition text-white px-6 py-3 rounded-lg font-medium">
              Book a Free Demo
            </button>

            <button className="border border-gray-300 px-6 py-3 rounded-lg font-medium hover:bg-gray-100 transition">
              Contact Us
            </button>
          </div>

        </div>
      </section>

    </main>
  );
}