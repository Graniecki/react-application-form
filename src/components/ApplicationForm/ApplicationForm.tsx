
import { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';

import { FormData } from '../../types/types';
import { nationalities, employmentTypes, availabilityOptions } from '../../data/fakeData';

import { InputField } from './components/InputField';
import { SelectField } from './components/SelectField';
import { CheckboxField } from './components/CheckboxField';
import { DateField } from './components/DateField';
import { TextAreaField } from './components/TextAreaField';

import Button from '@mui/material/Button';

type ApplicationFormProps = {
  role: string;
  handleFormSubmitStatus: (status: 'success' | 'error') => void;
};

export const ApplicationForm: React.FC<ApplicationFormProps> = ({ role, handleFormSubmitStatus }) => {
  const { t } = useTranslation();
  const [step, setStep] = useState(1);
  const { handleSubmit, watch, setValue, control, formState: { errors, isValid } } = useForm<FormData>({
    mode: 'onChange',
  });

  const hasPesel = watch('hasPesel', false);

  const updateStep = (dir: 'prev' | 'next'): void => {
    setStep((prevStep) => prevStep + (dir === 'next' ? 1 : -1));
  };

  const onSubmit = async (data: FormData) => {
    // const url = 'https://jsonplaceholder.typicode.com/posts';
    const url = 'http://ats.labweegree.pl/api/candidate-response';

    const fields = Object.entries(data).map(([key, value]) => {
      const transformedValue = key === 'hasPesel' ? (value ? 1 : 0) : value;
    
      return { fieldName: key, value: transformedValue };
    });

    const body = {
      refferUrl: "https://example.com",
      applicationFor: role,
      fields,
    };

    try {
      await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(body),
      });

      handleFormSubmitStatus('success');
    } catch (error) {
      handleFormSubmitStatus('error');
    }
  };

  useEffect(() => {
    if (!hasPesel) {
      setValue('pesel', null);
    }
  }, [hasPesel, setValue]);

  return (
    <form
      className='form'
      onSubmit={handleSubmit(onSubmit)}
      style={{ width: '100%', maxWidth: '600px', margin: '0 auto' }}
    >
      <div className='form__body' style={{ display: 'grid', gap: '32px' }}>
        <div style={{ textAlign: 'center', fontFamily: 'Roboto' }}>{`${t('step')} ${step}/3`}</div>
        <div className='form__steps' style={{ display: 'grid', gap: '24px' }}>
          <div className='form__step' style={{ display: step === 1 ? 'grid' : 'none', gap: '24px' }}>
            <InputField
              id="firstName"
              label={t('first_name')}
              type="text"
              control={control}
              errors={errors}
              required={true}
              requiredMessage={t('first_name_error_message')}
            />

            <InputField
              id="lastName"
              label={t('last_name')}
              type="text"
              control={control}
              errors={errors}
              required={true}
              requiredMessage={t('last_name_error_message')}
            />

            <DateField
              id="birthDate"
              label={t('birth_date')}
              control={control}
              errors={errors}
              required={true}
              requiredMessage={t('birth_date_error_message')}
            />

            <CheckboxField
              id="hasPesel"
              label={t('have_a_pesel')}
              control={control}
              errors={errors}
              required={false}
            />

            {hasPesel && (
              <InputField
                id="pesel"
                label="PESEL"
                type="number"
                control={control}
                errors={errors}
                required={true}
                requiredMessage={t('pesel_error_message')}
              />
            )}

            <SelectField
              id="nationality"
              label={t('nationality')}
              options={nationalities}
              control={control}
              errors={errors}
              required={true}
              requiredMessage={t('nationality_error_message')}
            />
          </div>

          <div className='form__step' style={{ display: step === 2 ? 'grid' : 'none', gap: '24px' }}>
            <SelectField
              id="employmentType"
              label={t('employment_type')}
              options={employmentTypes}
              control={control}
              errors={errors}
              required={true}
              requiredMessage={t('employment_type_error_message')}
            />

            <SelectField
              id="availability"
              label={t('availability')}
              options={availabilityOptions}
              control={control}
              errors={errors}
              required={true}
              requiredMessage={t('availability_error_message')}
            />
          </div>

          <div className='form__step' style={{ display: step === 3 ? 'grid' : 'none', gap: '24px' }}>
            <TextAreaField
              id="notes"
              label={t('notes')}
              control={control}
              errors={errors}
              required={false}
            />
          </div>
        </div>

        <div className='form__navigation' style={{ display: 'grid', gap: '24px' }}>
          <div className='form__navigate-steps' style={{ display: 'flex', gap: '24px' }}>
            <Button
              variant="contained"
              type="button"
              onClick={() => updateStep('prev')} disabled={step === 1}
              sx={{ display: 'block', width: '100%' }}
            >
              {t('previous')}
            </Button>
            <Button
              variant="contained"
              type="button"
              onClick={() => updateStep('next')} disabled={step === 3}
              sx={{ display: 'block', width: '100%' }}
            >
              {t('next')}
            </Button>
          </div>

          <div className="form__submit">
            <Button
              type="submit"
              sx={{ display: 'block', width: '100%', backgroundColor: 'green', '&:hover': { backgroundColor: 'darkgreen' } }}
              variant="contained"
              disabled={!isValid}
            >{t('submit')}</Button>
          </div>
        </div>
      </div>
    </form>
  );
};
