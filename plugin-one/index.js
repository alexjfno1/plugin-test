module.exports = {
  onPreBuild: () => {
    console.log("ORIGINAL VALUE ========>", process.env.VALUE);
    process.env.VALUE = "I_GOT_CHANGED_IN_PRE_BUILD";
    console.log("UPDATED VALUE ========>", process.env.VALUE);
  },
  onPostBuild: () => {
    console.log("VALUE ========>", process.env.VALUE);
  },
};
