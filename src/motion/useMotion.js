export const useMotion = () => {
  const textMotion = (delay, duration, type) => {
    return {
      visible: {
        opacity: 1,
        transition: { duration, type, delay },
      },
      hidden: { opacity: 0 },
    };
  };
  const imageMotion = (delay, duration, type, location) => {
    return {
      visible: {
        opacity: 1,
        x: 0,
        transition: { duration, type, delay },
      },
      hidden: { opacity: 0, x: location },
    };
  };
  return { textMotion, imageMotion };
};
