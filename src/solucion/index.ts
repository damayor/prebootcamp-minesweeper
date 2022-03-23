const sys = () => {
  let val = 0;
  return {
    inc: () => val++,
    get: () => val
  };
};

export default sys();
