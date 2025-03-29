import React from 'react'

const Footer = () => {
    return (
      <footer className="bg-[#0A0A0A] text-white">
        {/* Top Section */}
        <div className="max-w-7xl mx-auto px-6 py-10">
          <div className="flex justify-between items-center">
            <div className="text-2xl font-bold flex items-center ">
              Alphabots 
            </div>
            <div className="flex space-x-6">
              <button className="text-white hover:text-gray-300">Login</button>
              <button className="bg-gray-200 text-black px-4 py-2 rounded-md hover:bg-gray-400">Demo</button>
            </div>
          </div>
        </div>
  
        {/* Bottom Section */}
        <div className="max-w-7xl mx-auto px-6 pb-10">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6 text-sm">
            {/* Platform */}
            <div>
              <h3 className="text-gray-400 uppercase font-semibold mb-3">Platform</h3>
              <ul>
                <li className="mb-2 hover:text-gray-300 cursor-pointer">Extended Warranty</li>
                <li className="mb-2 hover:text-gray-300 cursor-pointer">Registration</li>
                <li className="hover:text-gray-300 cursor-pointer">Resolution</li>
              </ul>
            </div>
  
            {/* Resources */}
            <div>
              <h3 className="text-gray-400 uppercase font-semibold mb-3">Resources</h3>
              <ul>
                <li className="mb-2 hover:text-gray-300 cursor-pointer">Documentation ↗</li>
                <li className="mb-2 hover:text-gray-300 cursor-pointer">Blog</li>
                <li className="mb-2 hover:text-gray-300 cursor-pointer">Partnerships</li>
                <li className="hover:text-gray-300 cursor-pointer">Referral Program ↗</li>
              </ul>
            </div>
  
            {/* Company */}
            <div>
              <h3 className="text-gray-400 uppercase font-semibold mb-3">Company</h3>
              <ul>
                <li className="mb-2 hover:text-gray-300 cursor-pointer">About</li>
                <li className="mb-2 hover:text-gray-300 cursor-pointer">Careers</li>
                <li className="mb-2 hover:text-gray-300 cursor-pointer">Support ↗</li>
                <li className="hover:text-gray-300 cursor-pointer">Book a Demo</li>
              </ul>
            </div>
  
            {/* Product */}
            <div>
              <h3 className="text-gray-400 uppercase font-semibold mb-3">Product</h3>
              <ul>
                <li className="mb-2 hover:text-gray-300 cursor-pointer">Merchant Login ↗</li>
                <li className="mb-2 hover:text-gray-300 cursor-pointer">Customer Login ↗</li>
                <li className="hover:text-gray-300 cursor-pointer">System Status ↗</li>
              </ul>
            </div>
  
            {/* Social */}
            <div>
              <h3 className="text-gray-400 uppercase font-semibold mb-3">Social</h3>
              <ul>
                <li className="mb-2 hover:text-gray-300 cursor-pointer">LinkedIn ↗</li>
                <li className="mb-2 hover:text-gray-300 cursor-pointer">Facebook ↗</li>
                <li className="mb-2 hover:text-gray-300 cursor-pointer">Twitter ↗</li>
                <li className="hover:text-gray-300 cursor-pointer">Instagram ↗</li>
              </ul>
            </div>
          </div>
  
          {/* Footer Bottom */}
          <div className="mt-10 border-t border-gray-700 pt-6 flex flex-col md:flex-row justify-between text-gray-400 text-sm">
            <div className="flex items-center">
              Alphabots 
            </div>
            <div>Data & Privacy</div>
            <div>© 2025 Alphabots Technologies, Inc</div>
          </div>
        </div>
      </footer>
    );
  };
  
  export default Footer;