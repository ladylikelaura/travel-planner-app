import { getTripLength } from "../client/js/getTripLength";

describe("Get Trip Length", () => {
  test("calculates the correct trip length", () => {
    const arrival = new Date("2023-05-20");
    const departure = new Date("2023-05-25");

    const result = getTripLength(arrival, departure);

    expect(result).toBe(5); // Expected trip length is 5 days
  });
});
