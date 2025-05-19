const Careers = () => (
  <div className="bg-gray-50 dark:bg-gray-900 min-h-screen pb-20">
    {/* Hero */}
    <section className="bg-primary-900 dark:bg-primary-900 text-white py-20">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-4xl font-bold mb-4 font-heading">Careers at Nexora</h1>
        <p className="text-lg mb-6 max-w-2xl mx-auto dark:text-primary-100">
          We’re not actively hiring right now, but we’re always excited to connect with talented, passionate people interested in shaping the future of African business with AI.
        </p>
        <a
          href="mailto:hr@nexora.africa?subject=CV%20Submission"
          className="inline-block bg-white text-primary-900 font-semibold px-6 py-3 rounded-lg shadow hover:bg-primary-100 transition"
        >
          Send Your CV to hr@nexora.africa
        </a>
      </div>
    </section>

    {/* Interactive Section */}
    <section className="container mx-auto px-4 mt-16">
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow p-8 text-center dark:text-white">
        <h2 className="text-2xl font-bold text-primary-900 dark:text-primary-100 mb-4 font-heading">Stay Connected</h2>
        <p className="text-gray-700 dark:text-gray-200 mb-6">
          Want to be the first to know when we’re hiring? Join our talent network and follow us on LinkedIn for updates, insights, and opportunities.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <a
            href="https://www.linkedin.com/company/nexora-africa"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-primary-900 text-white px-5 py-2 rounded hover:bg-primary-800 transition"
          >
            Follow on LinkedIn
          </a>
          <a
            href="mailto:hr@nexora.africa?subject=Talent%20Network%20Signup"
            className="inline-block bg-primary-100 dark:bg-primary-900 dark:text-white text-primary-900 px-5 py-2 rounded hover:bg-primary-200 dark:hover:bg-primary-800 transition"
          >
            Join Talent Network
          </a>
        </div>
      </div>
    </section>
  </div>
);

export default Careers;