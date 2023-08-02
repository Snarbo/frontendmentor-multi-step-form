import iconArcade from '../../assets/icons/arcade.svg';
import iconAdvanced from '../../assets/icons/advanced.svg';
import iconPro from '../../assets/icons/pro.svg';

export const stepData = [
  { id: 'step-1', number: 1, description: 'Your info' },
  { id: 'step-2', number: 2, description: 'Select plan' },
  { id: 'step-3', number: 3, description: 'Add-ons' },
  { id: 'step-4', number: 4, description: 'Summary' },
];

export const plansData = [
  { id: 'plan1', img: iconArcade, name: 'Arcade', priceMonthly: 9, priceYearly: 90 },
  { id: 'plan2', img: iconAdvanced, name: 'Advanced', priceMonthly: 12, priceYearly: 120 },
  { id: 'plan3', img: iconPro, name: 'Pro', priceMonthly: 15, priceYearly: 150 },
];

export const addOnsData = [
  { id: 'addOn1', name: 'Online service', description: 'Access to multiplayer games', priceMonthly: 1, priceYearly: 10 },
  { id: 'addOn2', name: 'Larger storage', description: 'Extra 1TB of cloud save', priceMonthly: 2, priceYearly: 20 },
  { id: 'addOn3', name: 'Customizable Profile', description: 'Custom theme on your profile', priceMonthly: 2, priceYearly: 20 },
];
