function calculateAge() {
  const birthdate = new Date(document.getElementById("birthdate").value);

  if (isNaN(birthdate)) {
    document.getElementById("age").textContent = "Please enter a valid date.";
    return;
  }
  const todayDate = new Date();
  const ageInMilliseconds = todayDate - birthdate;
  if (ageInMilliseconds < 0) {
    document.getElementById(
      "age"
    ).textContent = `Please enter a date befor  ${formatDate(todayDate)} .`;
    return;
  }
  const years = Math.floor(ageInMilliseconds / (365 * 24 * 60 * 60 * 1000));
  const months = Math.floor(
    (ageInMilliseconds % (365 * 24 * 60 * 60 * 1000)) /
      (30 * 24 * 60 * 60 * 1000)
  );

  const days = Math.floor(
    (ageInMilliseconds % (30 * 24 * 60 * 60 * 1000)) / (24 * 60 * 60 * 1000)
  );
  document.getElementById(
    "age"
  ).textContent = `Your age is  ${years} years, ${months} months, and ${days} days.`;
}
function formatDate(date) {
  const day = date.getDate().toString().padStart(2, "0");
  const month = (date.getMonth() + 1).toString().padStart(2, "0");
  const year = date.getFullYear();
  return `${day}/${month}/${year}`;
}
