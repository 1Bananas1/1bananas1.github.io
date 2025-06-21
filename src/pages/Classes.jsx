import ClassCard from "../components/ClassCard";

function Classes() {
  return (
    <div className="py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-5xl font-normal text-white mb-4">Classes</h2>
          <p className="text-base text-gray-300">Courses Taken</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <ClassCard
            school="Saint Louis University"
            classTakenName="Calculus I"
            bgColor="#003DA5"
            date="Spring 2024"
            description="Introduction to differential and integral calculus, including limits, derivatives, and basic integration techniques."
            tags={["Mathematics", "Calculus", "Fundamentals"]}
          />
          <ClassCard
            school="Mizzou"
            classTakenName="Matrix Theory/Linear Algebra"
            bgColor="#000000"
            date="Current"
            description="Basic properties of matrices, determinants, vector spaces, linear transformations, eigenvalues, diagonalization, the inner product, and orthogonality. The course also includes an introduction to writing proofs."
            tags={["Mathematics", "Linear Algebra"]}
          />
          <ClassCard
            school="Saint Louis University"
            classTakenName="Calculus II"
            bgColor="#003DA5"
            date="Fall 2024"
            description="Symbolic and numerical techniques of integration, improper integrals, applications using the definite integral, sequences and series, power series, Taylor series, differential equations"
            tags={["Mathematics", "Calculus", "Fundamentals"]}
          />
          <ClassCard
            school="Saint Louis University"
            classTakenName="Discrete Math"
            bgColor="#003DA5"
            date="Spring 2025"
            description="Concepts of discrete mathematics used in computer science; sets, sequences, strings, symbolic logic, proofs, mathematical induction, sums and products, number systems, algorithms, complexity, graph theory, finite state machines"
            tags={["Mathematics", "Fundamentals"]}
          />
          <ClassCard
            school="Saint Louis University"
            classTakenName="Data Structures"
            bgColor="#003DA5"
            date="Spring 2025"
            description="The design, implementation and use of data structures. Principles of abstraction, encapsulation and modularity to guide in the creation of robust, adaptable, reusable and efficient structures. Specific data types to include stacks, queues, dictionaries, trees and graphs."
            tags={["Computer Science", "Fundamentals"]}
          />
          <ClassCard
            school="Saint Louis University"
            classTakenName="Computer Organizations and Systems"
            bgColor="#003DA5"
            date="Spring 2025"
            description="An introduction to computer systems, from hardware to operating systems. Topics include computer architecture, instruction sets, data representation, memory systems, and how the operating system manages processes and user applications."
            tags={["Computer Science", "Fundamentals"]}
          />
          <ClassCard
            school="Saint Louis University"
            classTakenName="Intro to Object Oriented Programming"
            bgColor="#003DA5"
            date="Fall 2024"
            description="A rigorous introduction to programming using an object-oriented language, including use of variables, control structures, existing classes and functions and recursion, as well as user-defined functions and classes. Good software development practices will also be established, including issues of design, documentation, and testing."
            tags={["Computer Science", "Fundamentals"]}
          />
        </div>
      </div>
    </div>
  );
}

export default Classes;
