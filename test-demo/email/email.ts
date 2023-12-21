export function validateEmail(email: string): boolean {
    // Detta är ett enkelt reguljärt uttryck för e-postvalidering.
    // Observera att detta inte fångar alla möjliga giltiga e-postformat enligt RFC 5322, 
    // men det är tillräckligt för de flesta vanliga fall.
    const testaemail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return testaemail.test(email);
  }
  