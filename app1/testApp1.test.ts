import { CustomError } from "../shared/CustomError";

it("Test App 1", async (done) => {
  expect("test").toEqual("test");

  try {
    throw new CustomError({ message: "some error" });
  } catch (error) {}

  done();
});
