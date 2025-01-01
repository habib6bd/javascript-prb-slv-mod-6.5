var result = 70;

if (result >= 0 && result < 33) {
  console.log("Failed");
} else if (result >= 33 && result < 40) {
  console.log("Tumi D Grade paicho");
} else if (result >= 40 && result < 50) {
  console.log("Tumi C Grade paicho");
} else if (result >= 50 && result < 60) {
  console.log("Tumi B Grade paicho");
} else if (result >= 60 && result < 70) {
  console.log("Tumi A- Grade paicho");
} else if (result >= 70 && result < 80) {
  console.log("Tumi A Grade paicho");
} else if (result >= 80 && result <= 100) {
  console.log("Tumi A+ Grade paicho");
} else {
  console.log("Invalid");
}
