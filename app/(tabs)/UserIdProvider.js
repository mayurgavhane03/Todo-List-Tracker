/* const decodeToken = (token) => {
  try {
    const parts = token.split('.');
    if (parts.length !== 3) {
      throw new Error('Invalid token format');
    }

    const [, payload] = parts;

    // Decoding the payload from base64
    const decodedPayload = decode(payload);
    const parsedPayload = JSON.parse(decodedPayload);

    return parsedPayload;
  } catch (error) {
    throw new Error('Token decoding error: ' + error.message);
  }
};

useEffect(() => {
  try {
    if (token) {
      const decodedPayload = decodeToken(token);
      console.log(decodedPayload);
      setDecodedPayload(decodedPayload);
    }
  } catch (error) {
    console.error(error.message);
    // Handle the error (e.g., show a message to the user, perform fallback action)
  }
}, [token]);
 */