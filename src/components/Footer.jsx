const Footer = () => {
  return (
    <footer className='footer bg-gradient-to-r from-blue-50 to-white text-gray-900 p-6 flex flex-col md:flex-row items-center justify-between max-w-7xl mx-auto shadow-inner border-t border-gray-200'>
      <aside className='flex items-center gap-2 mb-4 md:mb-0'>
        <svg
          width='36'
          height='36'
          viewBox='0 0 24 24'
          xmlns='http://www.w3.org/2000/svg'
          fillRule='evenodd'
          clipRule='evenodd'
          className='fill-current text-blue-500 drop-shadow-glow animate-pulse-slow'
        >
          <path d='M22.672 15.226l-2.432.811.841 2.515c.33 1.019-.209 2.127-1.23 2.456-1.15.325-2.148-.321-2.463-1.226l-.84-2.518-5.013 1.677.84 2.517c.391 1.203-.434 2.542-1.831 2.542-.88 0-1.601-.564-1.86-1.314l-.842-2.516-2.431.809c-1.135.328-2.145-.317-2.463-1.229-.329-1.018.211-2.127 1.231-2.456l2.432-.809-1.621-4.823-2.432.808c-1.355.384-2.558-.59-2.558-1.839 0-.817.509-1.582 1.327-1.846l2.433-.809-.842-2.515c-.33-1.02.211-2.129 1.232-2.458 1.02-.329 2.13.209 2.461 1.229l.842 2.515 5.011-1.677-.839-2.517c-.403-1.238.484-2.553 1.843-2.553.819 0 1.585.509 1.85 1.326l.841 2.517 2.431-.81c1.02-.33 2.131.211 2.461 1.229.332 1.018-.21 2.126-1.23 2.456l-2.433.809 1.622 4.823 2.433-.809c1.242-.401 2.557.484 2.557 1.838 0 .819-.51 1.583-1.328 1.847m-8.992-6.428l-5.01 1.675 1.619 4.828 5.011-1.674-1.62-4.829z' />
        </svg>
        <p className='text-sm text-gray-700 drop-shadow-sm animate-pulse-slow'>
          Copyright © {new Date().getFullYear()} @mr_rahul_karan - All rights
          reserved
        </p>
      </aside>
      <nav className='flex gap-6 md:justify-self-end'>
        {[
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
        ].map(({ href, label, hover, svgPath }) => (
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
    </footer>
  );
};

export default Footer;
