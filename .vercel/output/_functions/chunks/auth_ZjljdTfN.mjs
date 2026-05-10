async function createSession(password) {
  return null;
}
async function validateSession(cookieValue) {
  if (!cookieValue) return false;
  return false;
}

export { createSession as c, validateSession as v };
