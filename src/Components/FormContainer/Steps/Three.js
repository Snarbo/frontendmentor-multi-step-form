import { useEffect } from 'react';
import { useStateContext } from '../../../store/Context';

import { addOnsData } from '../data';
import Controls from '../Controls/Controls';

const Three = () => {
  const { isMonthly, addOnsList, setAddOnsList } = useStateContext();

  useEffect(() => {
    if (addOnsList.length > 0) {
      addOnsList.forEach((addOn) => {
        document.getElementById(addOn + 'Input').checked = true;
        document.getElementById(addOn).classList.add('active');
      });
    }
  }, [addOnsList]);

  const handleAddOnClick = (e, id) => {
    const inputElement = document.getElementById(id + 'Input');
    document.getElementById(id).classList.toggle('active');

    if (e.target.tagName === 'INPUT') {
      inputElement.checked = false;
    } else {
      inputElement.checked = !inputElement.checked;
    }

    if (addOnsList.includes(id)) {
      const newAddOnsList = addOnsList.filter((item) => item !== id);
      setAddOnsList(newAddOnsList);
    } else {
      setAddOnsList([...addOnsList, id]);
    }
  };

  return (
    <section id="wizard-section-addons" className="wizard-section md:flex md:flex-1 md:flex-col md:h-full">
      <h2 className="wizard-section-title text-2xl font-bold md:text-[32px]">Pick add-ons</h2>
      <p className="wizard-section-description mt-2.5 leading-[25px]">Add-ons help enhance your gaming experience.</p>
      <ul className="wizard-section-addons mt-5 md:mt-[35px]">
        {addOnsData.map(({ id, name, description, priceMonthly, priceYearly }) => (
          <li
            key={id}
            id={id}
            className="wizard-section-addon border rounded-lg mt-3 flex pt-3 pr-4 pb-2.5 pl-[52px] cursor-pointer md:mt-4 md:py-[18px] md:pr-6 md:pl-[68px]"
            onClick={(e) => handleAddOnClick(e, id)}
          >
            <input id={id + 'Input'} className="wizard-section-addon-input hidden" type="checkbox" />
            <div className="relative flex items-center flex-1">
              <div>
                <h6 className="wizard-section-addon-name text-sm font-medium md:text-base">{name}</h6>
                <p className="wizard-section-addon-description text-xs leading-5 md:text-sm">{description}</p>
              </div>
              <p className="wizard-section-addon-additional ml-auto text-xs leading-5 md:text-sm">
                +${isMonthly ? priceMonthly : priceYearly}/{isMonthly ? 'mo' : 'yr'}
              </p>
            </div>
          </li>
        ))}
      </ul>
      <Controls />
    </section>
  );
};

export default Three;
