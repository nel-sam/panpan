import PlanCalculator from './../../src/services/plan-calculator.service';
import { BreadTypes, LoafTypes } from './../../src/enums';

describe("Plan Calculator", () => {
  it("returns empty results when no params are provided", () => {
    const planCalculator = new PlanCalculator();
    const plan = planCalculator.calculatePlan();
    expect(plan).toStrictEqual({});
  });

  it("returns", () => {
    const planCalculator = new PlanCalculator();
    const typesToMake = [ BreadTypes.Banana, BreadTypes.Sourdough ];
    const customerOrders = [{
      breadType: BreadTypes.Banana,
      loafType: LoafTypes.Pan
    }];

    const plan = planCalculator.calculatePlan(typesToMake, customerOrders);
    expect(plan).toStrictEqual([{
      breadType: BreadTypes.Banana,
      loafType: LoafTypes.Pan,
    }]);
  });
});