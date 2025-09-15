const Terms = () => (
  <div className='flex flex-col items-center justify-center min-h-[60vh] p-8 text-lg mt-6'>
    <h1 className='text-3xl font-semibold mb-6'>Terms and Policies</h1>
    <div className='max-w-3xl text-gray-700 space-y-6'>
      <p>
        Welcome to <span className='font-semibold'>Codemate</span>. By accessing
        or using our services, you agree to comply with and be bound by the
        following terms and policies. Please read them carefully.
      </p>

      <section>
        <h2 className='text-2xl font-semibold mb-2'>1. Acceptance of Terms</h2>
        <p>
          By registering, accessing, or using our platform, you confirm that you
          accept these terms and agree to abide by them. If you do not agree,
          you must not use our services.
        </p>
      </section>

      <section>
        <h2 className='text-2xl font-semibold mb-2'>2. Use of Services</h2>
        <ul className='list-disc list-inside space-y-1'>
          <li>You agree to use our platform for lawful purposes only.</li>
          <li>
            You may not engage in activities that harm the platform or other
            users.
          </li>
          <li>Sharing or distributing unauthorized content is prohibited.</li>
        </ul>
      </section>

      <section>
        <h2 className='text-2xl font-semibold mb-2'>
          3. User Responsibilities
        </h2>
        <p>
          You are responsible for maintaining the confidentiality of your
          account credentials. Any activity under your account will be your
          responsibility unless reported immediately.
        </p>
      </section>

      <section>
        <h2 className='text-2xl font-semibold mb-2'>4. Privacy Policy</h2>
        <p>
          Your use of our services is also governed by our{" "}
          <a href='/privacy' className='text-blue-600 underline'>
            Privacy Policy
          </a>
          , which outlines how we collect, use, and safeguard your data.
        </p>
      </section>

      <section>
        <h2 className='text-2xl font-semibold mb-2'>
          5. Refunds and Cancellations
        </h2>
        <p>
          Refunds are subject to our{" "}
          <a href='/refund' className='text-blue-600 underline'>
            Refund Policy
          </a>
          . Please review the details carefully before making a purchase.
        </p>
      </section>

      <section>
        <h2 className='text-2xl font-semibold mb-2'>
          6. Limitation of Liability
        </h2>
        <p>
          Codemate will not be held responsible for any indirect, incidental, or
          consequential damages arising from the use of our services.
        </p>
      </section>

      <section>
        <h2 className='text-2xl font-semibold mb-2'>7. Contact Us</h2>
        <p>
          For any questions regarding these terms, reach us at{" "}
          <a
            href='mailto:support@codemate.com'
            className='text-blue-600 underline'
          >
            support@codemate.com
          </a>{" "}
          or call{" "}
          <a href='tel:+917388378005' className='text-blue-600 underline'>
            +91 73883 78005
          </a>
          .
        </p>
      </section>
    </div>
  </div>
);

export default Terms;
