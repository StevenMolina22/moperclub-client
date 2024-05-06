// EmailForm.tsx
import { useState } from 'react';

const EmailForm = () => {
  const [formInput, setFormInput] = useState('');

  const handleForm = () => {
    alert(`${formInput} the submit was a success`);
  };

  return (
    <div className="mt-3 flex items-center gap-2">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleForm();
        }}
      >
        <input
          placeholder="Email"
          value={formInput}
          onChange={(e) => setFormInput(e.target.value)}
          type="email"
          className="rounded-lg p-2 pl-3"
        />
      </form>
      <button
        onClick={handleForm}
        className="rounded-lg border p-2 px-4 dark:text-white"
      >
        Enviar
      </button>
    </div>
  );
};

export default EmailForm;