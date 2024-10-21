/* -------------------------------------------- Data ------------------------------------------------ */

/* -------------------------------------------- Data ------------------------------------------------ */

/* -------------------------------------------- Functions ------------------------------------------------ */

export function randomInformation() {
  const firstNames = [
    "John",
    "Jane",
    "Michael",
    "Emily",
    "David",
    "Sarah",
    "James",
    "Olivia",
    "Robert",
    "Sophia",
    "William",
    "Ava",
    "Daniel",
    "Isabella",
    "Joseph",
    "Mia",
    "Charles",
    "Abigail",
    "Henry",
    "Charlotte",
  ];

  const lastNames = [
    "Smith",
    "Johnson",
    "Williams",
    "Brown",
    "Jones",
    "Garcia",
    "Miller",
    "Davis",
    "Rodriguez",
    "Martinez",
    "Hernandez",
    "Lopez",
    "Wilson",
    "Clark",
    "Lewis",
    "Walker",
    "Hall",
    "Allen",
    "Young",
    "King",
  ];

  const cities = [
    "New York",
    "Los Angeles",
    "Chicago",
    "Houston",
    "Phoenix",
    "Philadelphia",
    "San Antonio",
    "San Diego",
    "Dallas",
    "San Jose",
  ];

  const states = [
    "NY",
    "CA",
    "IL",
    "TX",
    "AZ",
    "PA",
    "TX",
    "CA",
    "TX",
    "CA",
    "CA",
  ];

  const streetNames = [
    "Main St",
    "2nd Ave",
    "3rd Blvd",
    "4th St",
    "5th Ave",
    "Post St",
    "Market St",
    "Mission St",
    "Broadway",
    "Lombard St",
  ];

  const streetAddresses = [
    "675 Post St, San Francisco, CA",
    "123 Main St, Los Angeles, CA",
    "456 Market St, San Francisco, CA",
    "789 Broadway, New York, NY",
    "321 Madison Ave, New York, NY",
    "987 Park Ave, New York, NY",
    "159 Fremont St, San Francisco, CA",
    "753 5th Ave, New York, NY",
    "246 Mission St, San Francisco, CA",
    "852 West End Ave, New York, NY",
  ];

  function generateRandomPhoneNumber(): string {
    const areaCode = Math.floor(100 + Math.random() * 900);
    const middle = Math.floor(100 + Math.random() * 900);
    const last = Math.floor(1000 + Math.random() * 9000);
    return `(${areaCode}) ${middle}-${last}`;
  }

  const zipCodes = [
    "10001",
    "90001",
    "60601",
    "77001",
    "85001",
    "19101",
    "78201",
    "92101",
    "75201",
    "95101",
  ];

  const genders = ["Male", "Female"];

  function generateRandomDOB(): string {
    const year = Math.floor(Math.random() * (2005 - 1950 + 1)) + 1950;
    const month = String(Math.floor(Math.random() * 12) + 1).padStart(2, "0");
    const day = String(Math.floor(Math.random() * 28) + 1).padStart(2, "0");
    return `${month}/${day}/${year}`;
  }

  function generateRandomDates(): { startDate: string; endDate: string } {
    const startYear = Math.floor(Math.random() * (2024 - 2020 + 1)) + 2020;
    const startMonth = String(Math.floor(Math.random() * 12) + 1).padStart(
      2,
      "0"
    );
    const startDay = String(Math.floor(Math.random() * 28) + 1).padStart(
      2,
      "0"
    );
    const startDate = new Date(`${startYear}-${startMonth}-${startDay}`);

    const endYear = startDate.getFullYear() + Math.floor(Math.random() * 5) + 1;
    const endMonth = String(Math.floor(Math.random() * 12) + 1).padStart(
      2,
      "0"
    );
    const endDay = String(Math.floor(Math.random() * 28) + 1).padStart(2, "0");
    const endDate = new Date(`${endYear}-${endMonth}-${endDay}`);

    return {
      startDate: `${startMonth}/${startDay}/${startYear}`,
      endDate: `${endMonth}/${endDay}/${endYear}`,
    };
  }

  function generateRandomAddressLine1(): string {
    const streetNumber = Math.floor(Math.random() * 9000) + 1000;
    const streetNames = ["Main St", "2nd Ave", "3rd Blvd", "4th St", "5th Ave"];
    const streetName =
      streetNames[Math.floor(Math.random() * streetNames.length)];
    return `${streetNumber} ${streetName}`;
  }

  function generateRandomEmail(): string {
    const randomString = Math.random().toString(36).substring(2, 10);
    const domain = "example.com";
    return `${randomString}@${domain}`;
  }

  const randomDates = generateRandomDates();

  const randomData = {
    firstName: firstNames[Math.floor(Math.random() * firstNames.length)],
    lastName: lastNames[Math.floor(Math.random() * lastNames.length)],
    fullName:
      firstNames[Math.floor(Math.random() * firstNames.length)] +
      " " +
      lastNames[Math.floor(Math.random() * lastNames.length)],
    addressLine1: generateRandomAddressLine1(),
    streetAddress:
      streetAddresses[Math.floor(Math.random() * streetAddresses.length)],
    phoneNumber: generateRandomPhoneNumber(),
    emailAddress: generateRandomEmail(),
    city: cities[Math.floor(Math.random() * cities.length)],
    zipCode: zipCodes[Math.floor(Math.random() * zipCodes.length)],
    dateOfBirth: generateRandomDOB(),
    gender: genders[Math.floor(Math.random() * genders.length)],
    startDate: randomDates.startDate,
    endDate: randomDates.endDate,
  };

  return randomData;
}

function generateRandomString(length: number): string {
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let result = "";
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    result += characters[randomIndex];
  }
  return result;
}

export function getRandomUsername(): string {
  return `user_${generateRandomString(8)}`;
}

export function getRandomEmail(): string {
  const domain = "example.com";
  return `${generateRandomString(8)}@${domain}`;
}

export function getRandomPassword(): string {
  return generateRandomString(12);
}

export function getRandomArticleTitle(): string {
  const titles = [
    "Breaking News: The Future of Technology",
    "How to Stay Fit in 2024",
    "The Secrets to Financial Success",
    "Exploring the Beauty of Nature",
    "Top 10 Travel Destinations",
    "Understanding AI and Machine Learning",
    "The Ultimate Guide to Healthy Eating",
    "Innovations in Renewable Energy",
    "The Rise of E-Commerce Platforms",
    "Mental Health Awareness in Modern Society",
  ];
  return titles[Math.floor(Math.random() * titles.length)];
}

export function getRandomArticleCategory(): string {
  const categories = [
    "Technology",
    "Health",
    "Finance",
    "Travel",
    "Food",
    "Lifestyle",
    "Science",
    "Education",
    "Sports",
    "Entertainment",
  ];
  return categories[Math.floor(Math.random() * categories.length)];
}

export function getRandomArticleBody(): string {
  const paragraph = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vel turpis eget nulla facilisis dictum. 
        Integer ac leo a lorem viverra tempus. Sed sit amet gravida leo. 
        Suspendisse potenti. Cras consequat nibh non justo tincidunt, a luctus justo interdum.`;

  let body = "";
  const numParagraphs = Math.floor(Math.random() * 3) + 2;

  for (let i = 0; i < numParagraphs; i++) {
    body += paragraph + "\n\n";
  }

  return body;
}

export function getRandomArticleTag(): string {
  const tags = [
    "Tech",
    "Health",
    "Finance",
    "Travel",
    "Food",
    "AI",
    "Fitness",
    "Lifestyle",
    "Innovation",
    "Science",
  ];
  return tags[Math.floor(Math.random() * tags.length)];
}
/* -------------------------------------------- Functions ------------------------------------------------ */
