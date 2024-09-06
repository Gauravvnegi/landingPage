export default function App() {
  return (
    <>
      {/* Navigation */}
      <nav className="flex justify-between h-20 px-20 items-center bg-gray-100 shadow-md">
        <div className="text-3xl font-semibold">Welcome</div>
        <div>
          <ul className="flex space-x-6 text-xl">
            <li className="hover:text-green-600 cursor-pointer">Home</li>
            <li className="hover:text-green-600 cursor-pointer">About</li>
            <li className="hover:text-green-600 cursor-pointer">Contact</li>
            <li className="bg-green-600 px-4 py-2 rounded-lg text-center text-white hover:bg-green-400 transition duration-300 cursor-pointer">
              Login
            </li>
          </ul>
        </div>
      </nav>

      {/* Header Section */}
      <header className="flex justify-between items-center py-10 bg-white">
        {/* Text Section */}
        <div className="pl-20 w-2/5">
          <h1 className="text-5xl font-bold mb-6">
            Welcome{" "}
            <span className="text-slate-500 hover:text-sky-500 transition duration-300">
              Developer
            </span>
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            "Nature heals, inspires, and teaches us balance, patience, and
            harmony."
          </p>
        </div>

        {/* Image Section */}
        <div className="w-3/5 pr-20">
          <img
            src="public/nature.jpg"
            alt="Nature"
            className="w-full h-auto rounded-lg shadow-xl object-cover"
          />
        </div>
      </header>
    </>
  );
}
