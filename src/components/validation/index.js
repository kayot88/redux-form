import { timeout } from "q";

export const required = value => {
  return value ? undefined : `Value is required`;
};
export const minLength = value => {
  return value.length <= 4 ? `Length must bee more then 4 letters` : undefined;
};
export const maxLength = value => {
  return value.length >= 10
    ? `Length must bee less then 10 letters`
    : undefined;
};

export const confirmPassword = (value, allValues) => {
  if (value !== allValues.password) {
    return 'Passwords not match';
  }
};

export const asyncValidate = async (value) => {
  const sleep = ms =>
    new Promise(resolve =>
      setTimeout(resolve, ms)
    );
    await sleep(1000);
     if (['kenty', 'roman'].includes(value.username)) {
     return Promise.reject({
       username: 'Username already taken'
     })
    }   
}


// export const validate = values => {
//   const errors = {};
//   if (!values.firstname) {
//     errors.firstname = 'First name is required';
//   }
//   if (!values.surname) {
//     errors.surname = 'Surname name is required';
//   }
//   if (!values.username) {
//     errors.username = 'Username name is required';
//   } else if (values.username.length <= 4 ) {
//     console.log(values.username.length);
//     errors.username = 'Length must bee more then 4 letters'
//   }
//   return errors;
// };
