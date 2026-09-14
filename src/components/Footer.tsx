const Footer = () => {
  return (
    <footer className="mt-24 border-t border-gray-100">
      <div className="container mx-auto px-12 py-14">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-15">
          {/* Brand */}

          <div>
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 rounded-md bg-gradient-to-r from-pink-500 to-purple-500 flex items-center justify-center text-white text-xs font-bold">
                DS
              </div>

              <h3 className="text-lg font-semibold text-gray-900">
                Dev <span className="text-pink-500">Stack</span>
              </h3>
            </div>

            <p className="mt-4 text-sm text-gray-500 leading-6">
              Curated tools, technologies, and resources for developers building
              modern software.
            </p>

            <div className="flex gap-5 mt-6 text-sm text-gray-600">
              <a href="https://github.com/">GitHub</a>

              <a href="https://twitter.com/">Twitter</a>

              <a href="https://bd.linkedin.com/">LinkedIn</a>
            </div>
          </div>

          {/* Producct */}

          <div>
            <h4 className="text-sm font-semibold text-gray-900 mb-4">
              <a href="">PRODUCT</a>
            </h4>

            <ul className="space-y-3 text-sm text-gray-500">
              <li>Home</li>

              <li>Technologies</li>

              <li>Projects</li>
            </ul>
          </div>

          {/* Company */}

          <div>
            <h4 className="text-sm font-semibold text-gray-900 mb-4">
              <a href="">COMPANY</a>
            </h4>

            <ul className="space-y-3 text-sm text-gray-500">
              <li>About</li>

              <li>Contact</li>

              <li>Careers</li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-gray-900 mb-4"><a href="">LEGAL</a></h4>

            <ul className="space-y-3 text-sm text-gray-500">
              <li><a href="">Privacy Policy</a></li>

              <li><a href="">Terms of Service</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Footer */}

        <div className="border-t border-gray-100 mt-14 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-400">
            © 2026 Dev Stack. All rights reserved.
          </p>

          <div className="flex gap-8 text-sm text-gray-400 mt-4 md:mt-0">
            <span>Privacy</span>

            <span>Terms</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
