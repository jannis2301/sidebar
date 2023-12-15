import { Sidebar } from './Sidebar.ts';

const year = document.querySelector('.year') as HTMLElement;
const overlay = document.querySelector('.overlay') as HTMLElement;

const calculateCurrentYear = (yearElement: HTMLElement) => {
  if (!yearElement) {
    throw new Error(`The year element is not defined correctly.`);
  }

  const date = new Date();
  const currentYear = date.getFullYear();
  yearElement.textContent = `${currentYear}`;
};

document.addEventListener('DOMContentLoaded', () => {
  calculateCurrentYear(year);
  new Sidebar(overlay);
});
