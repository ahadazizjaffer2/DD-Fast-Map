

const Header = () => {

return (
  <header className="w-full bg-black border-b border-red-800 z-10">
    <div className="px-4 md:px-8 flex justify-between items-center bg-zinc-900/30">

      <a href="/" className="flex items-center my-2">
        <img src="/logo.png" alt="Logo"  className="rounded-full w-15 sm:w-20  " />
        <span className="text-3xl font-bold text-white hidden sm:block ">
          <span className="text-red-500">Developers</span> Day 2025
        </span>

        <span className="text-2xl font-bold text-white block sm:hidden">
          <span className="text-red-500">Dev</span>Day 2025
        </span>
      </a>
  
    </div>
  </header>
)
}

export default Header;