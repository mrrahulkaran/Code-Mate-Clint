const Privacy = () => (
  <div className='flex flex-col items-center justify-center min-h-[60vh] p-8 text-lg mt-4'>
    <div className='max-w-3xl w-full'>
      <h1 className='text-3xl font-semibold mb-6 text-center'>
        Privacy Policy
      </h1>
      <p className='mb-4 text-gray-700'>
        At <strong>CodeMate</strong>, we value your trust and are committed to
        protecting your personal information. This Privacy Policy explains how
        we collect, use, and safeguard the data you share with us.
      </p>

      <section className='mb-6'>
        <h2 className='text-xl font-semibold mb-2'>
          1. Information We Collect
        </h2>
        <p className='text-gray-700'>
          We may collect information such as your name, email address, contact
          details, and usage data when you register, log in, or interact with
          our services. This information helps us improve our platform and
          provide a better user experience.
        </p>
      </section>

      <section className='mb-6'>
        <h2 className='text-xl font-semibold mb-2'>
          2. How We Use Your Information
        </h2>
        <p className='text-gray-700'>The information we collect is used to:</p>
        <ul className='list-disc list-inside text-gray-700 ml-4'>
          <li>Provide, operate, and improve our services.</li>
          <li>Communicate with you regarding updates and support.</li>
          <li>Ensure security and prevent fraudulent activities.</li>
          <li>Comply with legal obligations.</li>
        </ul>
      </section>

      <section className='mb-6'>
        <h2 className='text-xl font-semibold mb-2'>3. Data Protection</h2>
        <p className='text-gray-700'>
          We implement industry-standard security measures to protect your data
          from unauthorized access, alteration, disclosure, or destruction.
          However, please note that no method of transmission over the Internet
          is 100% secure.
        </p>
      </section>

      <section className='mb-6'>
        <h2 className='text-xl font-semibold mb-2'>4. Third-Party Services</h2>
        <p className='text-gray-700'>
          Our platform may contain links to third-party websites. We are not
          responsible for the privacy practices of such external sites and
          encourage you to review their policies separately.
        </p>
      </section>

      <section className='mb-6'>
        <h2 className='text-xl font-semibold mb-2'>5. Your Rights</h2>
        <p className='text-gray-700'>
          You have the right to access, update, or delete your personal data. If
          you wish to exercise these rights, please contact us at{" "}
          <a
            href='mailto:support@yourapp.com'
            className='text-blue-600 underline'
          >
            support@codemate.com
          </a>
          .
        </p>
      </section>

      <section className='mb-6'>
        <h2 className='text-xl font-semibold mb-2'>
          6. Updates to this Policy
        </h2>
        <p className='text-gray-700'>
          We may update this Privacy Policy from time to time. Any changes will
          be reflected on this page with a revised "Last Updated" date.
        </p>
      </section>

      <p className='text-gray-600 italic mt-8 text-center'>
        Last Updated: {new Date().toLocaleDateString()}
      </p>
    </div>
  </div>
);

export default Privacy;
