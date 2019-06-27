import { isValidPlatform } from "../src/Utils";
import { expect } from "chai";

describe("Utils", () => {
  describe("#isValidPlatform", () => {
    it("should return true for curated platforms", () => {
      const curatedPlatform = ["pc", "xbox", "playstation"];
      curatedPlatform.forEach(platform => {
        expect(isValidPlatform(platform), `${platform} is not recognized`).to.be
          .true;
      });
    });

    it("should return false for non-curated platforms", () => {
      ["", "SNES"].forEach(platform => {
        expect(isValidPlatform(platform), `${platform} is wrongly recognized`)
          .to.be.false;
      });
    });
  });
});
