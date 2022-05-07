import { ELanguage, ERoute } from "../bridge";
import { getCurrentPathState, defaultState } from "../router";

describe("Router", () => {
  it("should correctly parse empty string", () => {
    const result = getCurrentPathState("");
    expect(result).toEqual(defaultState);
  });

  it("should correctly parse empty string", () => {
    const result = getCurrentPathState("/");
    expect(result).toEqual(defaultState);
  });

  describe("Language", () => {
    describe("1 Parameter", () => {
      it("should correctly parse language string", () => {
        const result = getCurrentPathState("/en");
        expect(result).toEqual(defaultState);
      });

      it("should correctly parse language string", () => {
        const result = getCurrentPathState("/en/");
        expect(result).toEqual(defaultState);
      });

      it("should correctly parse language", () => {
        const result = getCurrentPathState("/ru");
        expect(result).toEqual({
          ...defaultState,
          resultingPath: "/ru/",
          language: ELanguage.Russian,
        });
      });

      it("should correctly parse language", () => {
        const result = getCurrentPathState("/ru/");
        expect(result).toEqual({
          ...defaultState,
          resultingPath: "/ru/",
          language: ELanguage.Russian,
        });
      });

      it("should correctly parse language", () => {
        const result = getCurrentPathState("/ch");
        expect(result).toEqual({
          ...defaultState,
          resultingPath: "/ch/",
          language: ELanguage.Chinese,
        });
      });

      it("should correctly parse language", () => {
        const result = getCurrentPathState("/ch/");
        expect(result).toEqual({
          ...defaultState,
          resultingPath: "/ch/",
          language: ELanguage.Chinese,
        });
      });

      it("should correctly parse language", () => {
        const result = getCurrentPathState("/es");
        expect(result).toEqual(defaultState);
      });

      it("should correctly parse language", () => {
        const result = getCurrentPathState("/es/");
        expect(result).toEqual(defaultState);
      });
    });

    describe("2 Parameters", () => {
      it("should correctly parse language param and route", () => {
        const result = getCurrentPathState("/ru/misc");
        expect(result).toEqual({
          ...defaultState,
          resultingPath: "/ru/misc",
          language: ELanguage.Russian,
          route: ERoute.Misc,
        });
      });

      it("should correctly parse language param and route", () => {
        const result = getCurrentPathState("/ru/projects");
        expect(result).toEqual({
          ...defaultState,
          resultingPath: "/ru/projects",
          language: ELanguage.Russian,
          route: ERoute.Projects,
        });
      });

      it("should correctly parse language param and route", () => {
        const result = getCurrentPathState("/ru/projects/csaa");
        expect(result).toEqual({
          ...defaultState,
          resultingPath: "/ru/projects/csaa",
          language: ELanguage.Russian,
          route: ERoute.Projects,
          currentProject: "csaa",
        });
      });
    });
  });

  describe("Malformed", () => {
    it("should do a correct fallback", () => {
      const result = getCurrentPathState("/csaa/projects/ru");
      expect(result).toEqual({
        ...defaultState,
        route: "projects",
        resultingPath: "/en/projects",
      });
    });

    it("should do a correct fallback", () => {
      const result = getCurrentPathState("/csaa/1/2/4");
      expect(result).toEqual({
        ...defaultState,
      });
    });

    it("should do a correct fallback", () => {
      const result = getCurrentPathState("////");
      expect(result).toEqual({
        ...defaultState,
      });
    });
  });
});
