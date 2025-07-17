export const classesData = [
  {
    id: 'calculus-1',
    school: 'Saint Louis University',
    classTakenName: 'Calculus I',
    bgColor: '#003DA5',
    date: 'Spring 2024',
    description:
      'Introduction to differential and integral calculus, including limits, derivatives, and basic integration techniques.',
    tags: ['Mathematics', 'Calculus', 'Fundamentals'],
  },
  {
    id: 'linear-algebra',
    school: 'Mizzou',
    classTakenName: 'Matrix Theory/Linear Algebra',
    bgColor: '#000000',
    date: 'Summer 2025',
    description:
      'Basic properties of matrices, determinants, vector spaces, linear transformations, eigenvalues, diagonalization, the inner product, and orthogonality. The course also includes an introduction to writing proofs.',
    tags: ['Mathematics', 'Linear Algebra'],
  },
  {
    id: 'calculus-2',
    school: 'Saint Louis University',
    classTakenName: 'Calculus II',
    bgColor: '#003DA5',
    date: 'Fall 2024',
    description:
      'Symbolic and numerical techniques of integration, improper integrals, applications using the definite integral, sequences and series, power series, Taylor series, differential equations',
    tags: ['Mathematics', 'Calculus', 'Fundamentals'],
  },
  {
    id: 'discrete-math',
    school: 'Saint Louis University',
    classTakenName: 'Discrete Math',
    bgColor: '#003DA5',
    date: 'Spring 2025',
    description:
      'Concepts of discrete mathematics used in computer science; sets, sequences, strings, symbolic logic, proofs, mathematical induction, sums and products, number systems, algorithms, complexity, graph theory, finite state machines',
    tags: ['Mathematics', 'Fundamentals'],
  },
  {
    id: 'data-structures',
    school: 'Saint Louis University',
    classTakenName: 'Data Structures',
    bgColor: '#003DA5',
    date: 'Spring 2025',
    description:
      'The design, implementation and use of data structures. Principles of abstraction, encapsulation and modularity to guide in the creation of robust, adaptable, reusable and efficient structures. Specific data types to include stacks, queues, dictionaries, trees and graphs.',
    tags: ['Computer Science', 'Fundamentals'],
  },
  {
    id: 'computer-organizations-systems',
    school: 'Saint Louis University',
    classTakenName: 'Computer Organizations and Systems',
    bgColor: '#003DA5',
    date: 'Spring 2025',
    description:
      'An introduction to computer systems, from hardware to operating systems. Topics include computer architecture, instruction sets, data representation, memory systems, and how the operating system manages processes and user applications.',
    tags: ['Computer Science', 'Fundamentals'],
  },
  {
    id: 'intro-oop',
    school: 'Saint Louis University',
    classTakenName: 'Intro to Object Oriented Programming',
    bgColor: '#003DA5',
    date: 'Fall 2024',
    description:
      'A rigorous introduction to programming using an object-oriented language, including use of variables, control structures, existing classes and functions and recursion, as well as user-defined functions and classes. Good software development practices will also be established, including issues of design, documentation, and testing.',
    tags: ['Computer Science', 'Fundamentals'],
  },
  {
    id: 'react-native-v3',
    school: 'Frontend Masters',
    classTakenName: 'React Native v3',
    bgColor: '#c02d28',
    date: 'Summer 2025',
    description:
      'Use React skills to build feature-rich, native mobile apps for iOS and Android using React Native and Expo. Learn to create UI components like custom buttons and scrollable lists, implement navigation between screens, and persist data using AsyncStorage. Apply your skills by building practical projects such as a shopping list app and a recurring reminder system with push notifications!',
    tags: ['Bootcamp', 'React'],
    githubURL: 'https://github.com/1Bananas1/taskly',
  },
]
// cls could be named literally anything but it just stands for class
export const getClassesBySchool = (school) => {
  return classesData.filter((cls) => cls.school === school)
}

export const getCurrentClasses = () => {
  return classesData.filter((cls) => cls.date === 'Current')
}

export const getClassesByTag = (tag) => {
  return classesData.filter((cls) => cls.tags.includes(tag))
}

export const getClassesByDate = (date) => {
  return classesData.filter((cls) => cls.date === date)
}

export const getClassById = (id) => {
  return classesData.find((cls) => cls.id === id)
}

export const getAllSchools = () => {
  return [...new Set(classesData.map((cls) => cls.school))]
}

export const getAllTags = () => {
  const allTags = classesData.flatMap((cls) => cls.tags)
  return [...new Set(allTags)]
}

export const getClassesBySemester = (semester) => {
  return classesData.filter((cls) => cls.date.includes(semester))
}
