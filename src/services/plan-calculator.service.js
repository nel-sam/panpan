export default class PlanCalculator {
  constructor() {
  };

  calculatePlan() {
    return {};
  }

  calculatePlan(typesToMake, customerOrders) {
    if(!typesToMake || !customerOrders) {
      return {};
    }

    const plan = [];

    customerOrders.forEach(order => {
      const indexIfExists = plan.indexOf(o => o.breadType === order.breadType);

      // Detect if two loaf types were ordered for the same bread type
      if(indexIfExists >= 0 && plan[indexIfExists].loafType !== order.loafType){
        return {};
      }

      plan.push(order);
    });

    return plan;
  };
}

