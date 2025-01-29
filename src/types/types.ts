export type Position = {
  id: number;
  title: string;
  slug: string;
};

export type SelectOption = {
  id: number;
  value: string,
  label: string;
};

export type FormData = {
  firstName: string;
  lastName: string;
  birthDate: string;
  hasPesel: boolean;
  pesel: string | null;
  nationality: string;
  employmentType: string;
  availability: string;
  notes: string;
};
