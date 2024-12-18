import SecondaryButton from "../components/SecondaryButton";

const JobListings = ({ jobs, onShowDetails }) => {
  return (
    <section className="w-2/3">
      <h2 className="text-2xl font-bold mb-6">
        Cari Lowongan Pekerjaan Yang Tersedia!
      </h2>
      <div className="space-y-4">
        {jobs.map((job) => (
          <div
            key={job.id}
            className="bg-white p-4 rounded-lg shadow flex items-center justify-between"
          >
            <div className="flex items-center">
              <img
                src={job.logo}
                alt={`${job.company} Logo`}
                className="h-12 w-12 rounded-full mr-4"
              />
              <div>
                <h3 className="text-xl font-semibold">{job.title}</h3>
                <p className="text-gray-600">
                  {job.company} - {job.location}
                </p>
                <p className="text-sm text-green-600">{job.postedAt}</p>
              </div>
            </div>
            <SecondaryButton onClick={() => onShowDetails(job.id)}>
              Lihat Selengkapnya
            </SecondaryButton>
          </div>
        ))}
      </div>
    </section>
  );
};

export default JobListings;
