function formatDateToDDMMYYY(date) {
  const day = String(date.getDate());
  const month = date.getMonth();
  const year = date.getFullYear();

  return `${day}/${month}/${year}`
}

console.log(formatDateToDDMMYYY(new Date()))
