import { useState, useEffect } from "react";

function usePasswordValidation(password, confirmPassword) {
  const [isMatch, setIsMatch] = useState(false);
  const [isLengthValid, setIsLengthValid] = useState(false);
  const [hasUppercase, setHasUppercase] = useState(false);
  const [hasLowercase, setHasLowercase] = useState(false);
  const [hasNumber, setHasNumber] = useState(false);
  const [hasSpecialCharacter, setHasSpecialCharacter] = useState(false);

  useEffect(() => {
    setIsMatch(password === confirmPassword);
    setIsLengthValid(password.length >= 6);
    setHasUppercase(/[A-Z]/.test(password));
    setHasLowercase(/[a-z]/.test(password));
    setHasNumber(/[0-9]/.test(password));
    setHasSpecialCharacter(/[^A-Za-z0-9]/.test(password));
  }, [password, confirmPassword]);

  return {
    isMatch,
    isLengthValid,
    hasUppercase,
    hasLowercase,
    hasNumber,
    hasSpecialCharacter,
  };
}

export default usePasswordValidation;
