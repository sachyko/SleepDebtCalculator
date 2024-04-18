const getSleepHours = (day) => {
  switch (day) {
    case "Monday":
      return 8;
    case "Tuesday":
      return 8;
    case "Wednesday":
      return 8;
    case "Thursday":
      return 14;
    case "Friday":
      return 10;
    case "Saturday":
      return 6;
    case "Sunday":
      return 7;
    default:
      return "Invalid Day";
  }
};

// console.log("Monday", getSleepHours("Monday"));
// console.log("Tuesday", getSleepHours("Tuesday"));
// console.log("Wednesday", getSleepHours("Wednesday"));

const getActualSleepHours = () => {
  return 8 + 8 + 8 + 14 + 10 + 6 + 7;
};

// console.log("The actual sleep hours is", getActualSleepHours());

const getIdealSleepHours = (idealHoursPerNight) => {
  return idealHoursPerNight * 7;
};

// console.log(getIdealSleepHours());

const calculateSleepDebt = () => {
  const actualSleepHours = getActualSleepHours();
  const idealSleepHours = getIdealSleepHours(10);
  if (actualSleepHours === idealSleepHours) {
    console.log("You got the perfect amount of sleep.");
  } else if (actualSleepHours > idealSleepHours) {
    console.log(
      "You got",
      actualSleepHours - idealSleepHours,
      "more hours of sleep than needed this week."
    );
  } else if (actualSleepHours < idealSleepHours) {
    console.log(
      "You got",
      idealSleepHours - actualSleepHours,
      "hours less sleep than you needed this week."
    );
  }
};

calculateSleepDebt();
