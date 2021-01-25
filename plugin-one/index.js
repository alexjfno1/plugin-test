module.exports = {
    process.env.VALUE = 'I_GOT_CHANGED_IN_PRE_BUILD';
    console.log('========', process.env.VALUE);
  },
  onPostBuild: () => {
    console.log('========', process.env.VALUE);
  },
};
