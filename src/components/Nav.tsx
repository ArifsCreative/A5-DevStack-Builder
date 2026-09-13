import Logo from "../assets/logo-text.png";
const Nav = () => {
  return (
    <nav className=" bg-white">
      <div className="container mx-auto px-12 h-20 grid grid-cols-3 items-center">
        <img src={Logo} alt="" />

        <ul className="flex justify-center gap-6">
          <li className="text-red-500">Home</li>
          <li>Technologies</li>
          <li>Projects</li>
          <li>About</li>
          <li>Contact</li>
        </ul>

        <div className="flex justify-end gap-4">
          <button className="px-4 py-2 ">Sign In</button>

          <button className="px-4 py-2 bg-pink-600 text-white rounded-2xl">Sign Up</button>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
