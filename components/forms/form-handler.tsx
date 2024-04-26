import { Dispatch, SetStateAction } from 'react';

export type FormStatus = 'success' | 'error' | 'pending';

export const handleFormSubmit = async (
  formURL: string,
  formElement: HTMLFormElement,
  setStatus: Dispatch<SetStateAction<FormStatus>>,
  setError: Dispatch<SetStateAction<string | null>>
) => {
  try {
    setStatus('pending');
    setError(null);
    const formData = new FormData(formElement);
    const res = await fetch(formURL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      body: new URLSearchParams(formData).toString()
    });
    if (res.status === 200) {
      setStatus('success');
    } else {
      setStatus('error');
      setError(`${res.status} ${res.statusText}`);
    }
  } catch (e) {
    setStatus('error');
    setError(`${e}`);
  }
};

export function canSubmitForm(
  status: FormStatus
): boolean {
  return status === 'pending' || status === 'error'
}
