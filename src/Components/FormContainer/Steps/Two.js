import { useEffect } from 'react';
import { useStateContext } from '../../../store/Context';

import { plansData } from '../data';
import Controls from '../Controls/Controls';

const Two = () => {
  const { isMonthly, setIsMonthly, selectedPlan, setSelectedPlan } = useStateContext();

  useEffect(() => {
    document.getElementById(selectedPlan).classList.add('active');
  }, [selectedPlan]);

  const handlePlanSelect = (e, id) => {
    document.querySelectorAll('.wizard-section-plan').forEach((item) => {
      item.classList.remove('active');
    });
    document.getElementById(id).classList.add('active');

    setSelectedPlan(id);
  };

  const handleBilling = () => {
    setIsMonthly((prev) => !prev);
  };

  return (
    <section id="wizard-section-plan" className="wizard-section md:flex md:flex-1 md:flex-col md:h-full">
      <h2 className="wizard-section-title text-2xl font-bold md:text-[32px]">Select your plan</h2>
      <p className="wizard-section-description mt-2.5 leading-[25px]">You have the option of monthly or yearly billing.</p>
      <ul className="wizard-section-plans mt-5 md:flex md:gap-[18px] md:mt-[35px]">
        {plansData.map(({ id, img, name, priceMonthly, priceYearly }) => (
          <li
            key={id}
            id={id}
            className="wizard-section-plan flex border rounded-lg mt-3 pt-3.5 px-4 pb-[18px] cursor-pointer md:block md:flex-1 md:m-0 md:py-5"
            onClick={(e) => handlePlanSelect(e, id)}
          >
            <img src={img} alt="Plan Icon" className="wizard-section-plan-icon mr-3.5 h-fit md:m-0" />
            <div className="md:mt-10">
              <h6 className="wizard-section-plan-name font-medium leading-none">{name}</h6>
              <p className="wizard-section-plan-price mt-2 text-sm md:leading-none">
                ${isMonthly ? priceMonthly : priceYearly}/{isMonthly ? 'mo' : 'yr'}
              </p>
              {!isMonthly && <small className="wizard-section-plan-additional block mt-0.5 text-xs leading-5 md:mt-1.5">2 months free</small>}
            </div>
          </li>
        ))}
      </ul>
      <div className="wizard-section-toggle-container flex justify-center items-center rounded-lg mt-6 p-3.5 md:mt-8">
        <p className={`text-sm font-medium md:font-bold ${isMonthly ? 'active' : ''}`}>Monthly</p>
        <div className="wizard-section-toggle relative rounded-full mx-6 w-[38px] h-5" onClick={handleBilling}>
          <div className={`wizard-section-toggle-circle absolute top-1 bottom-1 left-1 rounded-full w-3 h-3 bg-white ${!isMonthly ? 'active' : ''}`}></div>
        </div>
        <p className={`text-sm font-medium md:font-bold ${!isMonthly ? 'active' : ''}`}>Yearly</p>
      </div>
      <Controls />
    </section>
  );
};

export default Two;
