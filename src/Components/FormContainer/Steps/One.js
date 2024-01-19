import { useStateContext } from '../../../store/Context';

import Controls from '../Controls/Controls';

const One = () => {
  const { name, setName, email, setEmail, phone, setPhone } = useStateContext();

  const handleName = (e) => {
    const inputParent = document.getElementById('wizard-section-form-field-name');
    inputParent.classList.remove('error');

    setName(e.target.value);
  };

  const handleEmail = (e) => {
    const inputParent = document.getElementById('wizard-section-form-field-email');
    inputParent.classList.remove('error');

    setEmail(e.target.value);
  };

  const handlePhone = (e) => {
    const inputParent = document.getElementById('wizard-section-form-field-phone');
    inputParent.classList.remove('error');

    setPhone(e.target.value);
  };

  return (
    <section id="wizard-section-personal" className="wizard-section md:flex md:flex-1 md:flex-col md:h-full">
      <h2 className="wizard-section-title text-2xl font-bold md:text-[32px]">Personal info</h2>
      <p className="wizard-section-description mt-2.5 leading-[25px]">Please provide your name, email address, and phone number.</p>
      <form className="wizard-section-form mt-5 md:mt-[35px]">
        <fieldset id="wizard-section-form-field-name" className="wizard-section-form-field">
          <div className="flex justify-between">
            <label className="text-xs md:text-sm md:leading-none" htmlFor="nameInput">
              Name
            </label>
            <span className="hidden text-xs font-bold wizard-section-form-error md:text-sm md:leading-none">This field is required</span>
          </div>
          <input
            id="nameInput"
            className="border rounded-lg mt-[3px] py-3 px-4 text-[15px] font-medium w-full leading-none outline-0 md:mt-2 md:text-base md:leading-none"
            type="text"
            placeholder="e.g. Stephen King"
            value={name}
            onChange={handleName}
          />
        </fieldset>
        <fieldset id="wizard-section-form-field-email" className="mt-4 wizard-section-form-field">
          <div className="flex justify-between">
            <label className="text-xs md:text-sm md:leading-none" htmlFor="emailInput">
              Email address
            </label>
            <span className="hidden text-xs font-bold wizard-section-form-error md:text-sm md:leading-none">This field is required</span>
          </div>
          <input
            id="emailInput"
            className="border rounded-lg mt-[3px] py-3 px-4 text-[15px] font-medium w-full leading-none outline-0 md:mt-2 md:text-base md:leading-none"
            type="email"
            placeholder="e.g. stephenking@lorem.com"
            value={email}
            onChange={handleEmail}
          />
        </fieldset>
        <fieldset id="wizard-section-form-field-phone" className="mt-4 wizard-section-form-field">
          <div className="flex justify-between">
            <label className="text-xs md:text-sm md:leading-none" htmlFor="phoneInput">
              Phone Number
            </label>
            <span className="hidden text-xs font-bold wizard-section-form-error md:text-sm md:leading-none">This field is required</span>
          </div>
          <input
            id="phoneInput"
            className="border rounded-lg mt-[3px] py-3 px-4 text-[15px] font-medium w-full leading-none outline-0 md:mt-2 md:text-base md:leading-none"
            type="number"
            placeholder="e.g. +1 234 567 890"
            value={phone}
            onChange={handlePhone}
          />
        </fieldset>
      </form>
      <Controls />
    </section>
  );
};

export default One;
