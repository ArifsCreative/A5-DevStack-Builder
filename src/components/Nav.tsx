import Logo from "../assets/logo-text.png";
import HamburgerIcon from "../assets/icons/hamburger.png";
const Nav = () => {
  return (
    <nav className=" sticky top-0 z-50 bg-white">
      <div className="container mx-auto px-6 md:px-12 h-20 flex items-center justify-between">
        {/* Mobile Hamburger */}
        <div className="md:hidden">
          <img
            src={HamburgerIcon}
            alt="menu"
            className="w-6 h-6 cursor-pointer"
          />
        </div>

        <img src={Logo} alt="" className="w-30" />

        <ul className="hidden md:flex justify-center gap-6">
          <li className="text-red-500">
            <a href="">Home</a>
          </li>
          <li>
            <a href="">Technologies</a>
          </li>
          <li>
            <a href="">Projects</a>
          </li>
          <li>
            <a href="">About</a>
          </li>
          <li>
            <a href="">Contact</a>
          </li>
        </ul>

        <div className="flex justify-end gap-4 ">
          <button className="px-4 py-2 cursor-pointer ">Sign In</button>

          <button className="px-4 py-2 bg-pink-600 text-white rounded-2xl cursor-pointer">
            Sign Up
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
