import './footer.css';

function Footer() {
    return(
        <footer className="p-4 bg-white rounded-lg shadow md:flex md:items-center md:justify-between md:p-6 dark:bg-[#1E1E1E]">
            <span className="text- text-gray-500 sm:text-center dark:text-gray-400">© 2022 <a href="https://nulldev.site" className="text-xl hover:underline">NullDev</a></span>
            <ul className="flex flex-wrap items-center mt-3 text-sm text-gray-500 dark:text-gray-400 sm:mt-0">
            <li>
                <a href="#" className="text-xl mr-4 hover:underline md:mr-6 ">About</a>
            </li>
            <li>
                <a href="#" className="text-xl mr-4 hover:underline md:mr-6">Privacy Policy</a>
            </li>
            <li>
                <a href="#" className="text-xl mr-4 hover:underline md:mr-6">Licensing</a>
            </li>
            <li>
                <a href="#" className="text-xl hover:underline">Contact</a>
            </li>
            </ul>
        </footer>
  );
}
export default Footer;
