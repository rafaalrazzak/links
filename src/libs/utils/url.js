//create url decode and encode function
export const encode = (str) => {
  return encodeURIComponent(str);
};

export const decode = (str) => {
  return decodeURIComponent(str);
};
