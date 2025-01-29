import { Position, SelectOption } from '../types/types';

export const openPositions: Position[] = [
  { id: 1, title: 'Programista Fronted', slug: 'frontend' },
  { id: 2, title: 'Backend developer', slug: 'backend' },
  { id: 3, title: 'Tester', slug: 'qa' },
  { id: 4, title: 'Sql Developer', slug: 'sql' },
];

export const nationalities: SelectOption[] = [
  { id: 1, value: 'pl', label: 'Poland' },
  { id: 2, value: 'us', label: 'United States' },
  { id: 3, value: 'de', label: 'Germany' },
  { id: 4, value: 'fr', label: 'France' },
];

export const employmentTypes: SelectOption[] = [
  { id: 1, value: 'employment-contract', label: 'Umowa o prace' },
  { id: 2, value: 'contract-of-mandate', label: 'Umowa zlecenie' },
  { id: 3, value: 'b2b', label: 'B2B' },
];

export const availabilityOptions: SelectOption[] = [
  { id: 1, value: '1-week', label: '1 tydzień' },
  { id: 2, value: '2-weeks', label: '2 tygodnie' },
  { id: 3, value: '3-weeks', label: '3 tygodnie' },
];
