import logo from "../assets/logo-xl.png";
import { FaFacebookF, FaXTwitter, FaInstagram } from "react-icons/fa6";

function Footer() {
  return (
    <footer className="mt-12 bg-[#244D3F] text-white">
      <div className="mx-auto max-w-6xl px-4 py-10 text-center">
        <img src={logo} alt="KeenKeeper" className="mx-auto h-12 md:h-14" />

        <p className="mx-auto mt-4 max-w-xl text-sm text-[#D1D5DB]">
          Your personal shelf of meaningful connections. Browse, tend, and
          nurture the relationships that matter most.
        </p>

        <h3 className="mt-6 text-sm font-medium text-white">Social Links</h3>

        <div className="mt-3 flex justify-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-[#244D3F]">
            <FaInstagram size={16} />
          </div>

          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-[#244D3F]">
            <FaFacebookF size={16} />
          </div>

          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-[#244D3F]">
            <FaXTwitter size={16} />
          </div>
        </div>
      </div>

      <div className="border-t border-[#355F50]">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-4 py-4 text-sm text-[#D1D5DB] md:flex-row">
          <p>© 2026 KeenKeeper. All rights reserved.</p>

          <div className="flex gap-6">
            <span className="cursor-pointer hover:text-white">
              Privacy Policy
            </span>
            <span className="cursor-pointer hover:text-white">
              Terms of Service
            </span>
            <span className="cursor-pointer hover:text-white">Cookies</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
