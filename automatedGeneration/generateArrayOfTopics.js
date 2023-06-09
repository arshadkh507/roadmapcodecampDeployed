const node = {};
const rcCs = generateRoadmap(
  [
    "Pick a Language",
    "Cplusplus",
    "C",
    "Python",
    "Go",
    "Java",
    "C-Sharp",
    "Rust",

    "Programming Fundamentals",
    "Variables",
    "Data types",
    "Operators",
    "Control structures",
    "Basic syntax",
    "Functions",
    "Arrays and Lists",
    "Modular Programming",
    "Standard Input/Output",
    "Reading and Writing Files",
    "Command-Line Arguments",
    "Error Handling and Reporting",

    "Object-Oriented Programming",
    "Classes and Objects",
    "Inheritance and Polymorphism",
    "Encapsulation and Abstraction",
    "Interfaces and Abstract Classes",

    "Data Structures",
    "Array",
    "Link lists",
    "Stack",
    "Queue",
    "Heap",
    "Trees",
    "Graph",

    "Tree",
    "Binary Tree",
    "Binary Search Tree",
    "Full Binary Tree",
    "Complete Binary Tree",
    "Balanced Tree",
    "Unbalanced Tree",

    "Graph",
    "Directed Graph",
    "Undirected Graph",
    "Spanning Tree",
    "Adjacency Matrix",
    "Adjacency List",
    "Edge List",

    "Asymptotic Notation",
    "Big-O Notation",
    "Big-θ Notation",
    "Big-Ω Notation",

    "Common Runtimes",
    "Constant",
    "Logarithmic",
    "Linear",
    "Polynomial",
    "Exponential",
    "Factorial",

    "Common Algorithms",
    "Sorting",
    "Bubble Sort",
    "Selection Sort",
    "Insertion Sort",
    "Heap Sort",
    "Quick Sort",
    "Merge Sort",
    "Searching",
    "Binary Search",
    "Linear Search",

    "Recursion",
    "Tail Recursion",
    "Non-Tail Recursion",

    "Debugging Techniques",
    "Debugging tools",

    "Debugging process",
    "Understanding the problem",
    "Reproducing the problem",
    "Isolating  and Fixing the problem",

    "Troubleshooting Common Errors",
    "Syntax Errors",
    "Runtime Errors",
    "Logical Errors",

    "Debugging strategies",

    "Bitwise Operators",
    "Floating Point Numbers",
    "Character Encodings",
    "Unicode",
    "ASCII",

    "Mathematics",

    "Discrete Mathematics",
    "Logic and proofs",
    "Set theory",
    "Combinatorics ",
    "Discrete probability",

    "Linear Algebra",
    "Matrix operations",
    "Linear transformations",
    "Vector spaces",

    "Computer Architecture",
    "Digital Logic and Computer Design",
    "Boolean algebra",
    "Logic gates and circuits",
    "Computer organization",
    "Processor architecture",
    "Memory hierarchy",
    "Pipelining and parallelism",
    "Cache design",
    "Virtual memory",
    "Memory allocation and deallocation",

    "Probability and Statistics",
    "Probability distributions",
    "Statistical inference",
    "Hypothesis testing",
    "Regression analysis",

    "Networking",
    "OSI Model",
    "TCP / IP Model",
    "DNS",
    "HTTP",
    "TLS & HTTPS",
    "Sockets",

    "Operating Systems",
    "Processes vs Threads",
    "CPU Interrupts",
    "Scheduling Algorithms",
    "Concurrency in Multiple cores",
    "Lock / Mutex / Semaphore",
    "Memory Management",
    "Process Forking",
    "Deadlocks and resource allocation",

    "Databases",
    "SQL vs NoSQL Databases",
    "Normalization / Denormalization",
    "Entity-Relationship Model",
    "DDL",
    "DML",
    "DQL",
    "DCL",
    "Locking",
    "Transactions",
    "ACID Model",
    "BASE Model",
    "CAP Theorem",
    "PACELC",
    "Indexes",
    "Views",
    "Stored Procedures",
    "Database Federation",
    "Replication",
    "Sharding",

    "Software Engineering",
    "Agile Development",
    "Testing and Quality Assurance",
    "Software Design Patterns",

    "Common UML Diagrams",
    "Class Diagrams",
    "Usecase Diagrams",
    "Activity Diagrams",
    "Statemachine Diagrams",
    "Sequence Diagrams",

    "Dynamic Programming",
    "Divide and Conquer Algorithms",
    "Branch and Bound Algorithms",

    "Advanced Algorithms and Data Structures",

    "Tree",
    "Pre-Order Traversal",
    "In-Order Traversal",
    "Post Order Traversal",
    "Breadth First Search",
    "Depth First Search",

    "Graph",
    "Breadth First Search",
    "Depth First Search",
    "Bellman Fords Algorithm",
    "Dijkstras Algorithm",
    "A* Algorithm",

    "Greedy Algorithms",
    "Dijkstras Algorithm",
    "Huffman Coding",
    "Kruskals Algorithm",
    "Ford-Fulkerson Algorithm",
    "Prims Algorithm",

    "Back Tracking",
    "Finding Hamiltonian Paths",
    "Solving N Queen Problem",
    "Maze Solving Problem",
    "The Knights Tour Problem",
    "Rabin-Karp Algorithm",

    "String Search and Manipulations",
    "Substring Search",
    "Brute Force Search",
    "Knuth-Morris Pratt",
    "Boyer-Moore",
    "Rabin-Karp",

    "Search Pattern in Text",
    "Suffix Arrays",

    "Caches",
    "LRU Cache",
    "LFU Cache",
    "MFU Cache",

    "Design Patterns",
    "GoF Design Patterns",
    "Architectural Patterns",
    "Dependency Injection",
    "Null Object Pattern",
    "Type Object Pattern",

    "Complexity Classes",
    "P",
    "NP",
    "Co-NP",
    "NP Hard",
    "NP Complete",
    "P EqualTo NP",
    "Travelling Salesman Problem",
    "Knapsack Problem",
    "Longest Path Problem",

    "Balanced Search Trees",
    "Two-Three-Four Trees",
    "K-ary / M-ary Tree",
    "B-Tree",

    "Tries",
    "AVL Trees",
    "Red / Black Trees",
    "Two-Three Search Trees",

    "K-D Trees",
    "Skip List",
    "Splay Tree",

    "Security",
    "Public Key Cryptography",
    "Hashing / Encryption / Encoding",
    "Hashing Algorithms",
    "OWASP Top Ten",

    "How Computers Work",
    "How CPU executes programs?",
    "How computers calculate?",
    "Registers and RAM",
    "Instructions and Programs",
    "CPU Cache",

    "System Design",
    "Horizontal vs Vertical Scaling",
    "Load Balancing",
    "Clustering",
    "Caching",
    "CDN",
    "Proxy",
    "CAP Theorem",
    "Queues",
    "Architectural Styles",
    "REST",
    "GraphQL",
    "gRPC",
    "Cloud Design Patterns",
    "Long Polling",
    "Short Polling",
    "Web Sockets",
    "SSE",

    "Compiler Design",
    "Lexical Analysis",
    "Parsing",
    "Semantic Analysis",
    "Intermediate Code Generation",
    "Code Optimization",
    "Code Generation",

    "Programming Language Paradigms",
    "Imperative Programming",
    "Functional Programming",
    "Logic Programming",
    "Object-Oriented Programming",
    "Aspect-Oriented Programming",
    "Concurrent Programming",

    "Human-Computer Interaction",
    "Theory of Computation",
    "Artificial Intelligence",
    "Machine Learning",
    "Natural Language Processing",
    "Computer Graphics and Vision",
    "Distributed Systems and Security",
    "Distributed Systems",
    "High-Performance Computing",
  ],
  "cs",
  480,
  node
);
const fs = require("fs");
function generateRoadmap(topicNames, roadmapName, startingNumber, node) {
  const roadmap = [];
  let id = startingNumber;
  topicNames.forEach((name) => {
    const kababName = name.toLowerCase().replace(/\s+/g, "-");
    const topic = {
      topicId: id,
      topicName: name,
      topicPath: `/roadmaps/${roadmapName}/${kababName}-${id}`,
    };
    roadmap.push(topic);
    node[name] = topic;
    id++;
  });
  // console.log(roadmap);
  return roadmap;
}

// Save arrays to file
const data = `const csTopicsArray = ${JSON.stringify(rcCs)};
export default csTopicsArray ;`;

fs.writeFile("csTopicsArray.js", data, (err) => {
  if (err) {
    throw err;
  } else {
    console.log("The file has been saved!");
  }
});
