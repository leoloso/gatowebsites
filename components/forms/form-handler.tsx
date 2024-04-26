import { Dispatch, SetStateAction } from 'react';

export const handleFormSubmit = async (
  formURL: string,
  formEventTarget: EventTarget,
  setStatus: Dispatch<SetStateAction<string>>,
  setError: Dispatch<SetStateAction<string | null>>
) => {
  try {
    setStatus('pending');
    setError(null);
    const formData = new FormData(formEventTarget);
    const res = await fetch(formURL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
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
  status: string
): boolean {
  return status === 'pending' || status === 'error'
}
