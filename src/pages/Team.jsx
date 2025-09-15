const Team = () => {
  const members = [
    {
      name: "Rahul Karan",
      role: "Founder & Developer",
      image: "https://avatars.githubusercontent.com/u/00000000?v=4", // Replace with your real image or avatar link
      bio: "Passionate about building scalable web apps, solving problems, and exploring AI/ML.",
      linkedin: "https://www.linkedin.com/in/rahul-karan-288317373/",
      github: "https://github.com/mrrahulkaran",
    },
    {
      name: "Jane Doe",
      role: "UI/UX Designer",
      image: "https://randomuser.me/api/portraits/women/44.jpg",
      bio: "Designs clean, modern interfaces with a focus on user experience.",
      linkedin: "https://www.linkedin.com/",
      github: "https://github.com/",
    },
    {
      name: "John Smith",
      role: "Backend Engineer",
      image: "https://randomuser.me/api/portraits/men/46.jpg",
      bio: "Loves optimizing backend systems, APIs, and database performance.",
      linkedin: "https://www.linkedin.com/",
      github: "https://github.com/",
    },
  ];

  return (
    <div className='flex flex-col items-center justify-center min-h-[60vh] p-8 text-lg mt-4'>
      <h1 className='text-3xl font-semibold mb-6'>Our Team</h1>
      <p className='text-gray-600 mb-10 text-center max-w-2xl'>
        Meet the passionate people behind{" "}
        <span className='font-semibold'>Codemate</span>. We’re a small but
        dedicated team focused on delivering quality and innovation in
        everything we build.
      </p>

      <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
        {members.map((member, index) => (
          <div
            key={index}
            className='flex flex-col items-center p-6 border rounded-lg shadow-sm bg-white hover:shadow-md transition'
          >
            <img
              src={member.image}
              alt={member.name}
              className='w-24 h-24 rounded-full mb-4 object-cover'
            />
            <h2 className='text-xl font-semibold'>{member.name}</h2>
            <p className='text-sm text-gray-500'>{member.role}</p>
            <p className='text-gray-600 text-center mt-3'>{member.bio}</p>
            <div className='flex gap-4 mt-4'>
              <a
                href={member.linkedin}
                target='_blank'
                rel='noopener noreferrer'
                className='text-blue-600 underline'
              >
                LinkedIn
              </a>
              <a
                href={member.github}
                target='_blank'
                rel='noopener noreferrer'
                className='text-gray-800 underline'
              >
                GitHub
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Team;
