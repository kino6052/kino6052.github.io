import { ELanguage, ERoute } from "../bridge";
import { getCurrentPathState, defaultState, getResultingPath } from "../router";

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
          language: ELanguage.Russian,
        });
        const resultingPath = getResultingPath(result);
        expect(resultingPath).toEqual("/ru/");
      });

      it("should correctly parse language", () => {
        const result = getCurrentPathState("/ru/");
        expect(result).toEqual({
          ...defaultState,
          language: ELanguage.Russian,
        });
        const resultingPath = getResultingPath(result);
        expect(resultingPath).toEqual("/ru/");
      });

      it("should correctly parse language", () => {
        const result = getCurrentPathState("/ch");
        expect(result).toEqual({
          ...defaultState,
          language: ELanguage.Chinese,
        });
        const resultingPath = getResultingPath(result);
        expect(resultingPath).toEqual("/ch/");
      });

      it("should correctly parse language", () => {
        const result = getCurrentPathState("/ch/");
        expect(result).toEqual({
          ...defaultState,
          language: ELanguage.Chinese,
        });
        const resultingPath = getResultingPath(result);
        expect(resultingPath).toEqual("/ch/");
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
          language: ELanguage.Russian,
          route: ERoute.Misc,
        });
        const resultingPath = getResultingPath(result);
        expect(resultingPath).toEqual("/ru/misc");
      });

      it("should correctly parse language param and route", () => {
        const result = getCurrentPathState("/ru/projects");
        expect(result).toEqual({
          ...defaultState,
          language: ELanguage.Russian,
          route: ERoute.Projects,
        });
        const resultingPath = getResultingPath(result);
        expect(resultingPath).toEqual("/ru/projects");
      });

      it("should correctly parse language param and route", () => {
        const result = getCurrentPathState("/ru/projects/csaa");
        expect(result).toEqual({
          ...defaultState,
          language: ELanguage.Russian,
          route: ERoute.Projects,
          currentProject: "csaa",
        });
        const resultingPath = getResultingPath(result);
        expect(resultingPath).toEqual("/ru/projects/csaa");
      });
    });
  });

  describe("Malformed", () => {
    it("should do a correct fallback", () => {
      const result = getCurrentPathState("/csaa/projects/ru");
      expect(result).toEqual({
        ...defaultState,
        route: "projects",
      });
      const resultingPath = getResultingPath(result);
      expect(resultingPath).toEqual("/en/projects");
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
