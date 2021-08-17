module.exports = {
  async redirects() {
    return [
      {
        source: "/trimet-arrivals",
        destination: "/trimet/arrivals",
        permanent: true,
      },
    ];
  },
};
