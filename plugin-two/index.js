module.exports = {
    console.log('========', process.env.VALUE);
  },
  onPostBuild: () => {
    console.log('========', process.env.VALUE);
  },
};
