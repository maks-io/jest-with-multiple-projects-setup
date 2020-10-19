module.exports = {
  preset: "ts-jest",
  testEnvironment: "node",
  rootDir: ".",
  projects: ["app1/jest.config.js", "app2/jest.config.js"],
};
