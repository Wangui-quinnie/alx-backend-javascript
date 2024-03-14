// Define interfaces MajorCredits and MinorCredits with a number named credits and a brand property
interface MajorCredits {
  credits: number;
  brand: "MajorCredits";
}

interface MinorCredits {
  credits: number;
  brand: "MinorCredits";
}

// Define a function sumMajorCredits that takes two MajorCredits subjects and returns their sum
function sumMajorCredits(subject1: MajorCredits, subject2: MajorCredits): MajorCredits {
  return {
    credits: subject1.credits + subject2.credits,
    brand: "MajorCredits"
  };
}

// Define a function sumMinorCredits that takes two MinorCredits subjects and returns their sum
function sumMinorCredits(subject1: MinorCredits, subject2: MinorCredits): MinorCredits {
  return {
    credits: subject1.credits + subject2.credits,
    brand: "MinorCredits"
  };
}

// Example usage:
const majorSubject1: MajorCredits = { credits: 3, brand: "MajorCredits" };
const majorSubject2: MajorCredits = { credits: 4, brand: "MajorCredits" };
console.log(sumMajorCredits(majorSubject1, majorSubject2)); // Output: { credits: 7, brand: "MajorCredits" }

const minorSubject1: MinorCredits = { credits: 2, brand: "MinorCredits" };
const minorSubject2: MinorCredits = { credits: 1, brand: "MinorCredits" };
console.log(sumMinorCredits(minorSubject1, minorSubject2)); // Output: { credits: 3, brand: "MinorCredits" }
