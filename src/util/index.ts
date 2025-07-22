export const createOptions = () => {
  let array = [];
  for (let i = 10; i < 36; i++) {
    array.push({
      label: i.toString(36) + "고양이",
      value: i.toString(36) + i,
    });
  }

  return array;
};
