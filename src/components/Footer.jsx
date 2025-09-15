import { Link } from "react-router-dom";

const POLICY_LINKS = [
  { path: "/terms", label: "Terms and Policies" },
  { path: "/privacy", label: "Privacy Policy" },

  { path: "/refund", label: "Refund Policy" },
  { path: "/team", label: "Team" },
  { path: "/contact", label: "Contact Us" },
];

const SOCIALS = [
  {
    href: "https://www.linkedin.com/in/rahul-karan-288317373/",
    label: "LinkedIn",
    hover: "hover:text-blue-700",
    svgPath:
      "M19 0h-14c-2.8 0-5 2.2-5 5v14c0 2.7 2.2 5 5 5h14c2.7 0 5-2.3 5-5V5c0-2.8-2.3-5-5-5zM8 19H5V9h3v10zM6.5 7.8c-1 0-1.8-.8-1.8-1.8S5.5 4.2 6.5 4.2 8.3 5 8.3 6s-.8 1.8-1.8 1.8zM20 19h-3v-5.6c0-1.3 0-3-1.8-3s-2 1.4-2 2.9V19h-3V9h2.8v1.4h.1c.4-.8 1.5-1.6 3-1.6 3.2 0 3.9 2.1 3.9 4.8V19z",
  },
  {
    href: "https://github.com/mrrahulkaran",
    label: "GitHub",
    hover: "hover:text-gray-900",
    svgPath:
      "M12 .5C5.65.5.5 5.65.5 12c0 5.1 3.3 9.4 7.9 10.9.6.1.8-.2.8-.5v-2c-3.2.7-3.9-1.5-3.9-1.5-.5-1.2-1.2-1.6-1.2-1.6-1-.7.1-.7.1-.7 1.1.1 1.6 1.1 1.6 1.1 1 .1.8 1.8 2.9 2.3.3-.7.5-1.2.5-1.6-2.6-.3-5.3-1.3-5.3-5.9 0-1.3.5-2.4 1.2-3.3-.1-.3-.5-1.6.1-3.3 0 0 1-.3 3.3 1.2a11.2 11.2 0 0 1 6 0c2.3-1.5 3.3-1.2 3.3-1.2.6 1.7.2 3 .1 3.3.8.9 1.2 2 1.2 3.3 0 4.6-2.7 5.6-5.3 5.9.4.3.7.9.7 1.8v2.6c0 .3.2.6.8.5 4.6-1.5 7.9-5.9 7.9-10.9C23.5 5.65 18.35.5 12 .5z",
  },
  {
    href: "https://instagram.com/mr_rahul_karan",
    label: "Instagram",
    hover: "hover:text-pink-500",
    svgPath:
      "M7.5 2h9A5.5 5.5 0 0 1 22 7.5v9A5.5 5.5 0 0 1 16.5 22h-9A5.5 5.5 0 0 1 2 16.5v-9A5.5 5.5 0 0 1 7.5 2zm0 2A3.5 3.5 0 0 0 4 7.5v9A3.5 3.5 0 0 0 7.5 20h9a3.5 3.5 0 0 0 3.5-3.5v-9A3.5 3.5 0 0 0 16.5 4h-9zm4.5 3a5 5 0 1 1 0 10 5 5 0 0 1 0-10zm0 2a3 3 0 1 0 0 6 3 3 0 0 0 0-6zm5.25-2a.75.75 0 1 1 0 1.5.75.75 0 0 1 0-1.5z",
  },
  {
    href: "https://leetcode.com/u/R_kkrrnn/",
    label: "LeetCode",
    hover: "hover:text-yellow-500",
    svgPath:
      "M16.27 3.55c-.39-.39-1.02-.39-1.41 0l-8.6 8.6c-.39.39-.39 1.02 0 1.41l8.6 8.6c.39.39 1.02.39 1.41 0l1.13-1.13c.39-.39.39-1.02 0-1.41L10.4 12l7-7c.39-.39.39-1.02 0-1.41l-1.13-1.04zM21 11h-8v2h8v-2z",
  },
];

const Footer = () => (
  <footer className='w-full px-4 py-6 bg-gradient-to-r from-blue-50 to-white text-gray-900 border-t border-gray-200 shadow-inner'>
    <div className='max-w-6xl mx-auto flex flex-col sm:flex-row justify-between gap-y-6'>
      {/* Policies as responsive grid */}
      <div className='grid grid-cols-2 md:grid-cols-3 gap-x-6 gap-y-2 '>
        {POLICY_LINKS.map(({ path, label }) => (
          <Link
            key={path}
            to={path}
            className='text-sm text-gray-800 hover:text-blue-700 hover:underline underline-offset-4 transition'
          >
            {label}
          </Link>
        ))}
      </div>

      {/* Copyright and socials container */}
      <div className='flex flex-col sm:flex-row items-center gap-4 sm:gap-8 justify-end'>
        <span className='text-xs text-gray-500 animate-pulse-slow whitespace-nowrap'>
          © {new Date().getFullYear()} @mr_rahul_karan - All rights reserved
        </span>
        <nav className='flex gap-6'>
          {SOCIALS.map(({ href, label, hover, svgPath }) => (
            <a
              key={label}
              href={href}
              aria-label={label}
              target='_blank'
              rel='noopener noreferrer'
              className={`transition-colors ${hover} transform hover:scale-110`}
            >
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='24'
                height='24'
                viewBox='0 0 24 24'
                className='fill-current drop-shadow-glow'
              >
                <path d={svgPath} />
              </svg>
            </a>
          ))}
        </nav>
      </div>
    </div>

    <style>{`
      .drop-shadow-glow {
        filter: drop-shadow(0 0 4px rgba(59,130,246,0.7));
        transition: filter 0.3s ease;
      }
      .drop-shadow-glow:hover {
        filter: drop-shadow(0 0 12px rgba(59,130,246,1));
      }
      .animate-pulse-slow {
        animation: pulse 5s ease-in-out infinite;
      }
      @keyframes pulse {
        0%, 100% {opacity: 1;}
        50% {opacity: 0.7;}
      }
    `}</style>
  </footer>
);

export default Footer;
