const Refund = () => (
  <div className='flex flex-col items-center justify-center min-h-[60vh] p-8 text-lg mt-4'>
    <h1 className='text-3xl font-semibold mb-6'>Refund Policy</h1>
    <div className='max-w-3xl text-gray-700 space-y-6'>
      <p>
        At <span className='font-semibold'>Codemate</span>, we value your trust
        and are committed to providing a transparent and fair refund process.
        This policy outlines the circumstances under which refunds may be
        issued.
      </p>

      <section>
        <h2 className='text-2xl font-semibold mb-2'>Eligibility for Refunds</h2>
        <ul className='list-disc list-inside space-y-1'>
          <li>
            Refunds are available within{" "}
            <span className='font-medium'>7 days</span> of purchase.
          </li>
          <li>
            The product/service must not have been fully consumed or misused.
          </li>
          <li>
            Proof of purchase (order ID, invoice, or receipt) is required.
          </li>
        </ul>
      </section>

      <section>
        <h2 className='text-2xl font-semibold mb-2'>Non-Refundable Items</h2>
        <p>Certain items or services are non-refundable, including:</p>
        <ul className='list-disc list-inside space-y-1'>
          <li>Digital products once downloaded or accessed.</li>
          <li>Customized or personalized services.</li>
          <li>Promotional or discounted offers.</li>
        </ul>
      </section>

      <section>
        <h2 className='text-2xl font-semibold mb-2'>Refund Process</h2>
        <p>
          To request a refund, please contact our support team at{" "}
          <a
            href='mailto:support@codemate.com'
            className='text-blue-600 underline'
          >
            support@codemate.com
          </a>{" "}
          with your order details. Once verified, approved refunds will be
          processed to your original payment method within{" "}
          <span className='font-medium'>5–7 business days</span>.
        </p>
      </section>

      <section>
        <h2 className='text-2xl font-semibold mb-2'>Need Help?</h2>
        <p>
          If you have any questions about our refund policy, feel free to reach
          us at{" "}
          <a href='tel:+917388378005' className='text-blue-600 underline'>
            +91 73883 78005
          </a>{" "}
          or email{" "}
          <a
            href='mailto:support@codemate.com'
            className='text-blue-600 underline'
          >
            support@codemate.com
          </a>
          .
        </p>
      </section>
    </div>
  </div>
);

export default Refund;
