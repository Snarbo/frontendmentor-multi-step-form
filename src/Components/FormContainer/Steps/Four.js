import { useStateContext } from '../../../store/Context';

import { plansData, addOnsData } from '../data';
import Controls from '../Controls/Controls';

const Four = () => {
  const { isMonthly, setStepIndex, selectedPlan, addOnsList } = useStateContext();

  const plan = plansData.filter((item) => item.id === selectedPlan)[0];
  const planPrice = isMonthly ? plan.priceMonthly : plan.priceYearly;
  const addOns = addOnsData.filter((addOn) => addOnsList.includes(addOn.id));

  const totalPrice = (priceList) => {
    let total = 0;

    priceList.forEach((item) => (total += item));

    return total;
  };

  console.log(addOns);

  return (
    <section id="wizard-section-summary" className="wizard-section md:flex md:flex-1 md:flex-col md:h-full">
      <h2 className="wizard-section-title text-2xl font-bold md:text-[32px]">Finishing up</h2>
      <p className="wizard-section-description mt-2.5 leading-[25px]">Double-check everything looks OK before confirming.</p>
      <div className="wizard-section-summary rounded-lg mt-5 p-4 md:mt-[35px]">
        <div className="wizard-section-plan flex justify-between items-center">
          <div>
            <h6 className="wizard-section-plan-name text-sm font-medium md:text-base">
              {plan.name} ({isMonthly ? 'Monthly' : 'Yearly'})
            </h6>
            <button className="wizard-section-plan-button text-sm leading-5 underline" onClick={() => setStepIndex(2)}>
              Change
            </button>
          </div>
          <h6 className="wizard-section-plan-price text-sm font-bold leading-5 md:text-base">
            ${planPrice}/{isMonthly ? 'mo' : 'yr'}
          </h6>
        </div>
        {addOns && addOns.length > 0 && (
          <>
            <hr className="my-3 md:my-6" />
            <ul className="wizard-section-addons">
              {addOns.map((addOn) => (
                <li className="wizard-section-addon flex justify-between mt-3 md:mt-4" key={addOn.id}>
                  <p className="wizard-section-addon-name text-sm leading-5">{addOn.name}</p>
                  <h6 className="wizard-section-addon-price text-sm leading-5">
                    +${isMonthly ? addOn.priceMonthly : addOn.priceYearly}/{isMonthly ? 'mo' : 'yr'}
                  </h6>
                </li>
              ))}
            </ul>
          </>
        )}
      </div>
      <div className="wizard-section-total flex justify-between items-center mt-6 px-4">
        <p className="text-sm leading-5">Total (per {isMonthly ? 'month' : 'year'})</p>
        <h5 className="wizard-section-total-price font-bold leading-5 md:text-xl">
          ${planPrice + (isMonthly ? totalPrice(addOns.map((item) => item.priceMonthly)) : totalPrice(addOns.map((item) => item.priceYearly)))}/{isMonthly ? 'mo' : 'yr'}
        </h5>
      </div>
      <Controls />
    </section>
  );
};

export default Four;
