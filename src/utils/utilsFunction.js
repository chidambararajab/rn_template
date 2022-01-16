export const TrimWords = (props) => {
  let { value, length, overflowSuffix } = props;
  if (value.length > length) {
    return value.substring(0, length) + overflowSuffix;
  } else {
    return value;
  }
};

export const printLocalData = async () => {
  const localData = await asyncStorage.getDataFromLocal();
  console.log("localData :>> ", localData);
};
