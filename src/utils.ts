export const generateID = () => {
  if (self && self.crypto) {
    return crypto.randomUUID();
  } else {
    return Math.floor(Math.random() * 10000) + "";
  }
};
