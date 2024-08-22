function getColor(id) {
  const remainder = id % 3;

  if (remainder === 1) {
    return "green";
  } else if (remainder === 2) {
    return "yellow";
  } else {
    return "red";
  }
}

export default getColor;
