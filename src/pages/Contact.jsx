const Contact = () => (
  <div className='flex flex-col items-center justify-center min-h-[60vh] p-8 text-lg mt-4'>
    <div className='max-w-3xl w-full'>
      <h1 className='text-3xl font-semibold mb-6 text-center'>Contact Us</h1>
      <p className='mb-4 text-gray-700 text-center'>
        Have questions, feedback, or need support? We’re here to help. You can
        reach us through the following channels:
      </p>

      <div className='grid grid-cols-1 md:grid-cols-2 gap-6 mt-6'>
        <div className='p-6 border rounded-lg shadow-sm bg-white'>
          <h2 className='text-xl font-semibold mb-2'>📧 Email</h2>
          <p className='text-gray-700'>
            For support or inquiries, write to us at: <br />
            <a
              href='mailto:support@codemate.com'
              className='text-blue-600 underline'
            >
              support@codemate.com
            </a>
          </p>
        </div>

        <div className='p-6 border rounded-lg shadow-sm bg-white'>
          <h2 className='text-xl font-semibold mb-2'>📞 Phone</h2>
          <p className='text-gray-700'>
            Call us directly at: <br />
            <a href='tel:+917388378005' className='text-blue-600 underline'>
              +91 73883 78005
            </a>
          </p>
        </div>
      </div>

      <div className='p-6 border rounded-lg shadow-sm bg-white mt-6'>
        <h2 className='text-xl font-semibold mb-2'>🌐 Connect With Us</h2>
        <p className='text-gray-700 mb-2'>
          You can also follow and connect with us on:
        </p>
        <ul className='list-disc list-inside text-gray-700 ml-2'>
          <li>
            <a
              href='https://www.linkedin.com/in/rahul-karan-288317373/'
              target='_blank'
              rel='noopener noreferrer'
              className='text-blue-700 underline'
            >
              LinkedIn
            </a>
          </li>
          <li>
            <a
              href='https://github.com/mrrahulkaran'
              target='_blank'
              rel='noopener noreferrer'
              className='text-gray-900 underline'
            >
              GitHub
            </a>
          </li>
          <li>
            <a
              href='https://instagram.com/mr_rahul_karan'
              target='_blank'
              rel='noopener noreferrer'
              className='text-pink-500 underline'
            >
              Instagram
            </a>
          </li>
          <li>
            <a
              href='https://leetcode.com/u/R_kkrrnn/'
              target='_blank'
              rel='noopener noreferrer'
              className='text-yellow-500 underline'
            >
              LeetCode
            </a>
          </li>
        </ul>
      </div>

      <p className='text-gray-600 italic mt-8 text-center'>
        We aim to respond to all inquiries within 24–48 hours.
      </p>
    </div>
  </div>
);

export default Contact;
