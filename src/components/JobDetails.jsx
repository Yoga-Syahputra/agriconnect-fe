const JobDetails = ({ job }) => {
  return (
    <aside className="w-1/3 bg-white p-6 rounded-lg shadow-lg sticky top-4">
      <h3 className="text-xl font-bold mb-4">{job.title}</h3>
      <p className="text-gray-600">{job.company}</p>
      <p className="text-gray-600 mb-2">{job.location}</p>
      <p className="flex items-center mb-2">
        <span className="material-icons text-gray-600 mr-2">Location</span>
        {job.details?.jobType}
      </p>
      <p className="flex items-center mb-2">
        <span className="material-icons text-gray-600 mr-2">Schedule</span>
        {job.details?.employmentType}
      </p>
      <p className="flex items-center mb-4">
        <span className="material-icons text-gray-600 mr-2">Salary</span>
        {job.details?.salary}
      </p>
      <button className="w-full bg-green-600 text-white py-2 rounded-md mb-2">
        Lamar Sekarang!
      </button>
      <button className="w-full border border-green-600 text-green-600 py-2 rounded-md">
        Simpan Lowongan
      </button>

      <div className="mt-6">
        <h4 className="text-lg font-semibold">Tanggung Jawab</h4>
        <ul className="list-disc list-inside text-gray-700 space-y-2">
          {job.details?.responsibilities.map((responsibility, index) => (
            <li key={index}>{responsibility}</li>
          ))}
        </ul>
      </div>
    </aside>
  );
};

export default JobDetails;
