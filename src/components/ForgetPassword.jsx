import logo from "/src/utils/logo.png";

const ForgetPassword = () => {
  return (
    <div className='flex flex-col justify-center items-center h-screen bg-gradient-to-br from-blue-50 to-white text-gray-900 px-4'>
      <img
        src={logo}
        alt='DevTinder Logo'
        className='w-20 h-20 rounded-lg shadow-lg mb-6 animate-fadeIn'
        draggable={false}
      />
      <h1 className='text-3xl font-semibold mb-4 animate-pulse-slow'>
        Feature Coming Soon...
      </h1>
      <p className='text-gray-600 mb-8 animate-fadeIn delay-200'>
        Please reload the page later
      </p>
      <img
        src='https://cdn-icons-png.flaticon.com/512/560/560463.png'
        alt='Loading icon'
        className='w-12 h-12 animate-spin-slow'
        draggable={false}
      />
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeIn {
          animation: fadeIn 0.8s ease forwards;
        }
        .animate-pulse-slow {
          animation: pulse 2.5s ease-in-out infinite;
        }
        .animate-spin-slow {
          animation: spin 3s linear infinite;
        }
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.6; }
        }
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
};

export default ForgetPassword;
