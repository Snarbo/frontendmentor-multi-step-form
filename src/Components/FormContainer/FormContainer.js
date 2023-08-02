import Sidebar from './Sidebar/Sidebar';
import SectionContainer from './SectionContainer';

import { stepData } from './data';

const FormContainer = () => {
  return (
    <div className="wizard flex-1 relative mb-[95px] md:m-0 md:flex md:rounded-[15px] md:p-4 md:bg-white">
      <Sidebar steps={stepData} />
      <SectionContainer />
    </div>
  );
};

export default FormContainer;
