import { useEffect } from 'react';
import { useStateContext } from '../../../store/Context';

const Sidebar = ({ steps }) => {
  const { stepIndex } = useStateContext();

  useEffect(() => {
    if (stepIndex < 5) {
      document.querySelectorAll('.wizard-sidebar-step').forEach((step) => {
        step.classList.remove('active');
      });
      document.getElementById('step-' + stepIndex).classList.add('active');
    }
  }, [stepIndex]);

  return (
    <aside className="wizard-sidebar md:rounded-[10px] md:w-[275px] md:h-[568px]">
      <nav className="wizard-sidebar-nav pt-8 pb-[107px] md:pt-10 md:px-8">
        <ul className="wizard-sidebar-steps flex justify-center gap-4 md:flex-col md:gap-8">
          {steps.map((step) => (
            <li key={step.id} id={step.id} className="wizard-sidebar-step md:flex md:items-center">
              <div className="wizard-sidebar-step-number flex justify-center items-center rounded-full  border border-white w-[33px] h-[33px] text-sm font-bold text-white md:mr-4">{step.number}</div>
              <div className="hidden md:block">
                <div className="wizard-sidebar-step-name text-xs uppercase">Step {step.number}</div>
                <div className="wizard-sidebar-step-decription text-sm font-bold tracking-[1px] text-white uppercase">{step.description}</div>
              </div>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
