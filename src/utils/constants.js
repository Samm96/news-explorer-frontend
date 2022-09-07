const emailRegex = /^(?![.])(?!.*[.]{2})[^@]{1,}[^.]@[a-zA-Z]{1,}\.[a-z]{3}/;

const submitErrorMsgs = {
  invalidData: 'Invalid email or password', // 400
  internal: 'Something went wrong', // 500
  tooMany: 'Try again later', // 429
  conflict: 'Email already in use', // 409
}

export { submitErrorMsgs, emailRegex };
