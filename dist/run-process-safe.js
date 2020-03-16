const childProcess = require("child_process");

const runProcessSafe = processArgs => {
  const [cmd, ...args] = processArgs;
  childProcess.spawn(cmd, args, { stdio: "inherit" });
};

module.exports = runProcessSafe;
