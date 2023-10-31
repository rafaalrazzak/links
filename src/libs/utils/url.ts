//create url decode and encode function
export const encode = (str: string) => {
  return encodeURIComponent(str);
};

export const decode = (str: string) => {
  return decodeURIComponent(str);
};
