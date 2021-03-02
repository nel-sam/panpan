import PlanCalculator from './../../src/services/plan-calculator.service';

describe("Plan Calculator", () => {
  it("returns empty results when no params are provided", () => {
    const planCalculator = new PlanCalculator();
    const plan = planCalculator.calculatePlan();
    expect(plan).toStrictEqual({});
  });
});