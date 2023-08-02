import { useStateContext } from '../../../store/Context';

const Controls = () => {
  const { stepIndex, setStepIndex, name, email, phone } = useStateContext();

  const handlePrevStep = () => setStepIndex((prev) => prev - 1);

  const handleNextStep = () => {
    let error = false;

    if (stepIndex === 1) {
      if (name.trim() === '') {
        const inputParent = document.getElementById('wizard-section-form-field-name');
        inputParent.classList.add('error');
        error = true;
      }
      if (email.trim() === '' || !validateEmail(email)) {
        const inputParent = document.getElementById('wizard-section-form-field-email');
        inputParent.classList.add('error');
        error = true;
      }
      if (phone.trim() === '') {
        const inputParent = document.getElementById('wizard-section-form-field-phone');
        inputParent.classList.add('error');
        error = true;
      }
    }

    if (!error) setStepIndex((prev) => prev + 1);
  };

  const validateEmail = (email) => {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    return emailPattern.test(email);
  };

  return (
    <nav className="wizard-controls fixed md:static right-0 bottom-0 left-0 flex items-center p-4 md:mt-auto md:p-0 bg-white">
      {stepIndex > 1 && (
        <button className="button button-back text-white text-sm font-medium transition md:text-base" onClick={handlePrevStep}>
          Go Back
        </button>
      )}
      {stepIndex === 4 ? (
        <button className="button button-confirm rounded ml-auto py-3 px-4 text-sm font-medium text-white transition md:rounded-lg md:text-base md:leading-none" onClick={handleNextStep}>
          Confirm
        </button>
      ) : (
        <button
          className="button button-next rounded ml-auto py-3 px-4 text-sm font-medium text-white transition md:rounded-lg md:py-3.5 md:px-6 md:text-base md:leading-none"
          onClick={handleNextStep}
        >
          Next Step
        </button>
      )}
    </nav>
  );
};

export default Controls;
