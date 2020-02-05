const moment = require("moment");

module.exports = (t1, t2) => {
  if ((t2 - t1) / (1000 * 60 * 60 * 24) > 1) {
    return true;
  } else {
    return false;
  }
};
