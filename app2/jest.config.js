module.exports = {
  name: "app1 jest config",
  displayName: "app2 jest config",
  rootDir: "../",
  testMatch: ["<rootDir>/app2/**/*.test.+(js|ts)"],
  testEnvironment: "node",
};
