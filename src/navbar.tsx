import { useLocation } from 'react-router-dom';
import './navbar.css';

function Navbar() {
  const location = useLocation();
  /**this part of code bullshit btw*/
  var homeclass = "text-gray-300 hover:bg-[#03DAC6] hover:text-white px-3 py-2 rounded-md text-base font-medium";
  var searchclass = "text-gray-300 hover:bg-[#03DAC6] hover:text-white px-3 py-2 rounded-md text-base font-medium";
  var postclass = "text-gray-300 hover:bg-[#03DAC6] hover:text-white px-3 py-2 rounded-md text-base font-medium";
  var latestclass = "text-gray-300 hover:bg-[#03DAC6] hover:text-white px-3 py-2 rounded-md text-base font-medium";


  if (location.pathname == "/")
  {
      var homeclass = "bg-[#028f81] text-white px-3 py-2 rounded-md text-base font-medium";
  }
  if (location.pathname == "/search")
  {
      var searchclass = "bg-[#028f81] text-white px-3 py-2 rounded-md text-base font-medium";
  }
  if (location.pathname == "/post")
  {
      var postclass = "bg-[#028f81] text-white px-3 py-2 rounded-md text-base font-medium";
  }
  if (location.pathname == "/latest")
  {
      var latestclass = "bg-[#028f81] text-white px-3 py-2 rounded-md text-base font-medium";
  }
  return (
  <nav className="shadow-2xl bg-[#1E1E1E]">
  <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
    <div className="relative flex items-center justify-between h-16">
      <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
        <div className="flex-shrink-0 flex items-center">
        </div>
        <div className="hidden sm:block sm:ml-6">
          <div className="flex space-x-4">
            <a href="/" className={homeclass}>Home</a>

            <a href="/search" className={searchclass}>Search</a>

            <a href="/post" className={postclass}>Post</a>

            <a href="/latest" className="text-gray-300 hover:bg-[#03DAC6] hover:text-white px-3 py-2 rounded-md text-base font-medium">Latest</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</nav>
);
}
export default Navbar;
