import PlanCalculator from './../../src/services/plan-calculator.service';
import { DoughTypes, LoafTypes } from './../../src/enums';

describe('Plan Calculator', () => {
  it('returns empty results when no params are provided', () => {
    const planCalculator = new PlanCalculator();
    const plan = planCalculator.calculatePlan();
    expect(plan).toStrictEqual([]);
  });

  it('returns all dough types of same loaf type if ordered', () => {
    const planCalculator = new PlanCalculator();
    const typesToMake = [
      DoughTypes.Banana,
      DoughTypes.Sourdough,
      DoughTypes.WholeGrain
    ];

    const customerOrders = [{
      doughType: DoughTypes.Banana,
      loafType: LoafTypes.Pan
    },{
      doughType: DoughTypes.Sourdough,
      loafType: LoafTypes.Pan
    },{
      doughType: DoughTypes.WholeGrain,
      loafType: LoafTypes.Pan
    }];

    const plan = planCalculator.calculatePlan(typesToMake, customerOrders);

    expect(plan).toStrictEqual(customerOrders);
  });

  it('returns all dough types of different loaf type if ordered', () => {
    const planCalculator = new PlanCalculator();
    const typesToMake = [
      DoughTypes.Banana,
      DoughTypes.Sourdough,
      DoughTypes.WholeGrain
    ];

    const customerOrders = [{
      doughType: DoughTypes.Banana,
      loafType: LoafTypes.Pan
    },{
      doughType: DoughTypes.Sourdough,
      loafType: LoafTypes.Round
    },{
      doughType: DoughTypes.WholeGrain,
      loafType: LoafTypes.Round
    }];

    const plan = planCalculator.calculatePlan(typesToMake, customerOrders);

    expect(plan).toStrictEqual(customerOrders);
  });

  it('returns only require dough types for orders', () => {
    const planCalculator = new PlanCalculator();
    const typesToMake = [
      DoughTypes.Banana,
      DoughTypes.Sourdough,
      DoughTypes.WholeGrain
    ];

    const customerOrders = [{
      doughType: DoughTypes.Banana,
      loafType: LoafTypes.Pan
    }];

    const plan = planCalculator.calculatePlan(typesToMake, customerOrders);

    expect(plan).toStrictEqual([{
      doughType: DoughTypes.Banana,
      loafType: LoafTypes.Pan,
    }]);
  });

  it('returns empty plan if customer orders dough type not being made', () => {
    const planCalculator = new PlanCalculator();
    const typesToMake = [ DoughTypes.WholeGrain, DoughTypes.Sourdough ];
    const customerOrders = [{
      doughType: DoughTypes.Banana,
      loafType: LoafTypes.Pan
    }];

    const plan = planCalculator.calculatePlan(typesToMake, customerOrders);

    expect(plan).toStrictEqual([]);
  });

  it('returns empty plan if customers order different loaf types of same dough type', () => {
    const planCalculator = new PlanCalculator();
    const typesToMake = [ DoughTypes.WholeGrain, DoughTypes.Sourdough ];
    const customerOrders = [{
      doughType: DoughTypes.Banana,
      loafType: LoafTypes.Pan
    },{
      doughType: DoughTypes.Banana,
      loafType: LoafTypes.Round
    }];

    const plan = planCalculator.calculatePlan(typesToMake, customerOrders);

    expect(plan).toStrictEqual([]);
  });
});