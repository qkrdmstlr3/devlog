// Dependencies
import React from 'react';

// Hooks
import useAdminInput from '@Hooks/components/useAdminInput';

function AdminInput(): React.ReactElement {
  const { inputValue, submitHandler, inputValueHandler } = useAdminInput();

  return (
    <form onSubmit={submitHandler}>
      <input type="password" value={inputValue} onChange={inputValueHandler} />
    </form>
  );
}

export default AdminInput;
