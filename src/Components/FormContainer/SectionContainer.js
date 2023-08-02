import { useStateContext } from '../../store/Context';

import * as Step from './Steps';

const SectionContainer = () => {
  const { stepIndex } = useStateContext();

  const steps = {
    1: <Step.One />,
    2: <Step.Two />,
    3: <Step.Three />,
    4: <Step.Four />,
    5: <Step.Five />,
  };

  return <main className="wizard-section-container rounded-[10px] mt-[-73px] mx-4 py-8 px-6 bg-white md:flex md:flex-1 md:rounded-none md:m-0 md:pt-10 lg:px-[100px] md:pb-4">{steps[stepIndex]}</main>;
};

export default SectionContainer;
