import { useState, createContext, useContext } from 'react';

const StateContext = createContext();

export const ContextProvider = ({ children }) => {
  const [stepIndex, setStepIndex] = useState(1);

  //step 1
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  //step 2
  const [isMonthly, setIsMonthly] = useState(true);
  const [selectedPlan, setSelectedPlan] = useState('plan1');

  //step 3
  const [addOnsList, setAddOnsList] = useState(['addOn1']);

  return (
    <StateContext.Provider
      value={{
        stepIndex,
        setStepIndex,
        name,
        setName,
        email,
        setEmail,
        phone,
        setPhone,
        isMonthly,
        setIsMonthly,
        selectedPlan,
        setSelectedPlan,
        addOnsList,
        setAddOnsList,
      }}
    >
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () => useContext(StateContext);
