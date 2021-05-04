import React, { useState } from "react";
import FormControl from "./FormControl";
import Input from "./Input";
import onSignup from "./SignupAPI";

export const useTrackErrors = () => {
  const [errors, setErrors] = useState({});

  const setErrors = (errsArray) => {
    const newErrors = { ...errors };
    errsArray.forEach(({ key, value }) => {
      newErrors[key] = value;
    });

    setErrors(newErrors);
  };

  const clearErrors = () => {
    setErrors({});
  };

  return { errors, setErrors, clearErrors };
};

// to use

import React, { useState } from "react";
import FormControl from "./FormControl";
import Input from "./Input";
import onSignup from "./SignupAPI";


export default function Client() {
  const { errors, setErrors, clearErrors } = useTrackErrors();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleSignupClick = () => {
    let invalid = false;

    const errs = [];
    if (!name) {
      errs.push({ key: "name", value: true });
      invalid = true;
    }
    if (!email) {
      errs.push({ key: "email", value: true });
      invalid = true;
    }
    if (invalid) {
      setErrors(errs);
      return;
    }

    onSignup(name, email);
    clearErrors();
  };

  const handleNameChange = (e) => {
    setName(e.target.value);
    setErrors([{ key: "name", value: false }]);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    setErrors([{ key: "email", value: false }]);
  };

  return (
    <div>
      <FormControl isInvalid={errors["name"]}>
        <FormLabel>Full Name</FormLabel>
        <Input
          onKeyDown={handleKeyDown}
          onChange={handleNameChange}
          value={name}
          placeholder="Your name..."
        />
      </FormControl>
      <FormControl isInvalid={errors["email"]}>
        <FormLabel>Email</FormLabel>
        <Input
          onKeyDown={handleKeyDown}
          onChange={handleEmailChange}
          value={email}
          placeholder="Your email..."
        />
      </FormControl>
      <button onClick={handleSignupClick}>Sign Up</button>
    </div>
  );
}