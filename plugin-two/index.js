module.exports = {
  onPreBuild: () => {
    console.log("VALUE ========>", process.env.VALUE);
  },
  onPostBuild: () => {
    console.log("VALUE ========>", process.env.VALUE);
  },
};
