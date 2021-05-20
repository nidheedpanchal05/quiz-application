const data = [
  {
    id: 1,
    title: 'Information Technology',
    score: 0,
    questions: [
      {
        id: 1,
        ques: 'What does the Internet prefix WWW stand for',
        correctAns: 'World Wide Web',
        incorrectAns: [
          'World Wide Website',
          'Wide Web World',
          'Wonder Wide Web',
        ],
      },
      {
        id: 2,
        ques: 'How many computer languages are in use?',
        correctAns: '2000',
        incorrectAns: ['5000', '50', '100'],
      },
      {
        id: 3,
        ques: 'Who founded Apple Computer?',
        correctAns: 'Steve Jobs',
        incorrectAns: ['Bill Gates', 'Stephen Fry', 'Stephen Hawking'],
      },
      {
        id: 4,
        ques: 'Which of these is an input device?',
        correctAns: 'Joystick',
        incorrectAns: ['Speaker', 'Printer', 'Monitor'],
      },
      {
        id: 5,
        ques: 'What is the name for a computer pointing device?',
        correctAns: 'A Mouse',
        incorrectAns: ['RAM', 'Monitor', 'Printer'],
      },
      {
        id: 6,
        ques: 'Which of these is file format for digital images?',
        correctAns: 'JPG',
        incorrectAns: ['WAV', 'MP3', 'TXT'],
      },
      {
        id: 7,
        ques:
          'What is part of a database that holds only one type of information?',
        correctAns: 'Field',
        incorrectAns: ['Row', 'Record', 'Table'],
      },
      {
        id: 8,
        ques: 'OS computer abbreviation usually means ?',
        correctAns: 'Operating System',
        incorrectAns: [
          'Open Software',
          'Optical Sensor',
          'Order of Significance',
        ],
      },

      {
        id: 9,
        ques: 'Which among these is a search engine ?',
        correctAns: 'Yahoo',
        incorrectAns: ['FireFox', 'Internet Explorer', 'Archie'],
      },
      {
        id: 10,
        ques: 'How many bits is a byte?',
        correctAns: '8',
        incorrectAns: ['4', '16', '32'],
      },
      {
        id: 11,
        ques: 'Which is not an internet protocol?',
        correctAns: 'STP',
        incorrectAns: ['IP', 'HTTP', 'FTP'],
      },
      {
        id: 12,
        ques: 'What is the extension of PDF?',
        correctAns: 'Portable Document Format',
        incorrectAns: [
          'Portable Desktop File',
          'Perfect Document Format',
          'Printable Document Format',
        ],
      },
      {
        id: 13,
        ques: 'VR stands for _________',
        correctAns: 'Virtual Reality',
        incorrectAns: [
          'Virtual Realism',
          'Virus Removal',
          'Virus Replication ',
        ],
      },
      {
        id: 14,
        ques: 'What do you call a single point on a computer screen?',
        correctAns: 'Pixel',
        incorrectAns: ['Bit', 'Point', 'None of these'],
      },
      {
        id: 15,
        ques: 'How long is an IPV6 Address?',
        correctAns: '128 bit',
        incorrectAns: ['64 bit', '16 bit', '8 byte'],
      },
    ],
  },
  {
    id: 2,
    title: 'General Knowledge',
    score: 0,
    questions: [
      {
        id: 1,
        ques: 'Which animal is black and white in color?',
        correctAns: 'Zebra',
        incorrectAns: ['Giraff', 'Elephant', 'Dog'],
      },
      {
        id: 2,
        ques: 'How many states are there in India?',
        correctAns: '28',
        incorrectAns: ['29', '30', '22'],
      },
      {
        id: 3,
        ques: 'Which is the third planet of our solar system?',
        correctAns: 'Earth',
        incorrectAns: ['Mercury', 'Venus', 'Jupiter'],
      },
      {
        id: 4,
        ques: 'Photosynthesis is a process done by _____',
        correctAns: 'Plants',
        incorrectAns: ['Animals', 'Human Beings', 'None of these'],
      },
      {
        id: 5,
        ques: "Which among these is the world's largest Continent?",
        correctAns: 'Asia',
        incorrectAns: ['America', 'Antarctica', 'Australia'],
      },
      {
        id: 6,
        ques: 'Which country is having highest population?',
        correctAns: 'China',
        incorrectAns: ['South Africa', 'Bangladesh', 'Sri Lanka'],
      },
      {
        id: 7,
        ques: 'Who invented gravity ?',
        correctAns: 'Sir Issac Newton',
        incorrectAns: ['Galileo', 'Dimitri', "Jule's"],
      },
      {
        id: 8,
        ques: 'Which among these is a carnivorous plant?',
        correctAns: 'Flytrap',
        incorrectAns: ['Sunflower', 'Lily', 'Mari Gold'],
      },
      {
        id: 9,
        ques: "What is the world's most common religion?",
        correctAns: 'Christianity',
        incorrectAns: ['Hinduism', 'Muslim', 'Buddhism'],
      },
      {
        id: 10,
        ques: 'Which is the hardest mineral in the world? ',
        correctAns: 'Diamond',
        incorrectAns: ['Iron', 'Zinc', 'Steel'],
      },
      {
        id: 11,
        ques: 'How many bones are there in the human body?',
        correctAns: '206',
        incorrectAns: ['260', '266', '200'],
      },
      {
        id: 12,
        ques: 'Which metal is in liquid state? ',
        correctAns: 'Mercury',
        incorrectAns: ['Gold', 'Silver', 'Aluminuim'],
      },
      {
        id: 13,
        ques: 'What is the currency of the USA? ',
        correctAns: 'Dollar',
        incorrectAns: ['Euro', 'Pound', 'Rupee'],
      },
      {
        id: 14,
        ques: 'How many players are there in Chess game?',
        correctAns: 'Two',
        incorrectAns: ['Three', 'Five', 'Eight'],
      },
      {
        id: 15,
        ques: 'The Shape of Our Milky way galaxy is',
        correctAns: 'Spiral',
        incorrectAns: ['Circular', 'Elliptical', 'None of these'],
      },
    ],
  },
  {
    id: 3,
    title: 'Mathematics',
    score: 0,
    questions: [
      {
        id: 1,
        ques: 'What is the value of pi?',
        correctAns: '3.14',
        incorrectAns: ['3.41', '3.11', '3.44'],
      },
      {
        id: 2,
        ques: '13 times 2 equals to ',
        correctAns: '36',
        incorrectAns: ['32', '63', '30'],
      },
      {
        id: 3,
        ques:
          'What is the total cost if you buy 4 mangos, when each mango is of $25?',
        correctAns: '$100',
        incorrectAns: ['$125', '$25', '$220'],
      },
      {
        id: 4,
        ques: 'Which is the largest 4 digit number among the following?',
        correctAns: '8989',
        incorrectAns: ['8888', '8899', '8889'],
      },
      {
        id: 5,
        ques: 'What will be the remainder if 15 is divided by 4 ?',
        correctAns: '3',
        incorrectAns: ['2', '1', '4'],
      },
      {
        id: 6,
        ques: 'What will be the result of adding two odd numbers?',
        correctAns: 'Always Even',
        incorrectAns: ['Always Odd', 'Barely Even', 'Barely Odd'],
      },
      {
        id: 7,
        ques: 'What is the place value of 9 in 1592?',
        correctAns: 'Tens',
        incorrectAns: ['Unit', 'Hundreds', 'None of these'],
      },
      {
        id: 8,
        ques: 'One Kilogram equals how many grams?',
        correctAns: '1000 Grams',
        incorrectAns: ['100 Grams', '500 Grams', '10 Grams'],
      },
      {
        id: 9,
        ques: 'How many minutes are there in two hour?',
        correctAns: '120 minutes',
        incorrectAns: ['60 minutes', '100 minutes', '200 minutes'],
      },
      {
        id: 10,
        ques:
          'Which 3 numbers have the same answer whether they’re added or multiplied together?',
        correctAns: '1, 2 and 3',
        incorrectAns: ['0, 1 and 2', '11, 12 and 13', '10, 20 and 30'],
      },
    ],
  },
];




export default data;
