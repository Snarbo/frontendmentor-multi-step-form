import iconThankyou from '../../../assets/icons/thankyou.svg';

const Five = () => {
  return (
    <section id="wizard-section-thanks" className="wizard-section text-center py-12 md:my-auto">
      <img className="mx-auto w-[56px] h-[56px] md:w-[80px] md:h-[80px]" src={iconThankyou} alt="Thanks!" />
      <h2 className="wizard-section-title mt-6 text-2xl font-bold md:mt-8 md:text-[32px]">Thank you!</h2>
      <p className="wizard-section-description mt-2.5 leading-[25px] md:mt-3.5">
        Thanks for confirming your subscription! We hope you have fun using our platform. If you ever need support, please feel free to email us at support@loremgaming.com.
      </p>
    </section>
  );
};

export default Five;
