const fs = require("fs");
const path = require("path");

function generateLazyImports(topics, fileName) {
  const imports = topics.map((topic, index) => {
    const lazyImport = `const ${topic} = lazy(() => import("../../../pages/roadmaps/cs/CsTopics/${topic}"));`;
    return lazyImport;
  });

  const content = imports.join("\n");

  fs.writeFileSync(fileName, content);

  console.log(`Lazy imports for ${topics.length} topics saved to ${fileName}`);
}

const topics = [
  "PickALanguage480",
  "Cplusplus481",
  "C482",
  "Python483",
  "Go484",
  "Java485",
  "CSharp486",
  "Rust487",
  "ProgrammingFundamentals488",
  "Variables489",
  "DataTypes490",
  "Operators491",
  "ControlStructures492",
  "BasicSyntax493",
  "Functions494",
  "ArraysAndLists495",
  "ModularProgramming496",
  "Output497",
  "ReadingAndWritingFiles498",
  "CommandLineArguments499",
  "ErrorHandlingAndReporting500",
  "ObjectOrientedProgramming501",
  "ClassesAndObjects502",
  "InheritanceAndPolymorphism503",
  "EncapsulationAndAbstraction504",
  "InterfacesAndAbstractClasses505",
  "DataStructures506",
  "Array507",
  "LinkLists508",
  "Stack509",
  "Queue510",
  "Heap511",
  "Trees512",
  "Graph513",
  "Tree514",
  "BinaryTree515",
  "BinarySearchTree516",
  "FullBinaryTree517",
  "CompleteBinaryTree518",
  "BalancedTree519",
  "UnbalancedTree520",
  "Graph521",
  "DirectedGraph522",
  "UndirectedGraph523",
  "SpanningTree524",
  "AdjacencyMatrix525",
  "AdjacencyList526",
  "EdgeList527",
  "AsymptoticNotation528",
  "BigONotation529",
  "BigNotation530",
  "BigNotation531",
  "CommonRuntimes532",
  "Constant533",
  "Logarithmic534",
  "Linear535",
  "Polynomial536",
  "Exponential537",
  "Factorial538",
  "CommonAlgorithms539",
  "Sorting540",
  "BubbleSort541",
  "SelectionSort542",
  "InsertionSort543",
  "HeapSort544",
  "QuickSort545",
  "MergeSort546",
  "Searching547",
  "BinarySearch548",
  "LinearSearch549",
  "Recursion550",
  "TailRecursion551",
  "NonTailRecursion552",
  "DebuggingTechniques553",
  "DebuggingTools554",
  "DebuggingProcess555",
  "UnderstandingTheProblem556",
  "ReproducingTheProblem557",
  "IsolatingAndFixingTheProblem558",
  "TroubleshootingCommonErrors559",
  "SyntaxErrors560",
  "RuntimeErrors561",
  "LogicalErrors562",
  "DebuggingStrategies563",
  "BitwiseOperators564",
  "FloatingPointNumbers565",
  "CharacterEncodings566",
  "Unicode567",
  "ASCII568",
  "Mathematics569",
  "DiscreteMathematics570",
  "LogicAndProofs571",
  "SetTheory572",
  "Combinatorics573",
  "DiscreteProbability574",
  "LinearAlgebra575",
  "MatrixOperations576",
  "LinearTransformations577",
  "VectorSpaces578",
  "ComputerArchitecture579",
  "DigitalLogicAndComputerDesign580",
  "BooleanAlgebra581",
  "LogicGatesAndCircuits582",
  "ComputerOrganization583",
  "ProcessorArchitecture584",
  "MemoryHierarchy585",
  "PipeliningAndParallelism586",
  "CacheDesign587",
  "VirtualMemory588",
  "MemoryAllocationAndDeallocation589",
  "ProbabilityAndStatistics590",
  "ProbabilityDistributions591",
  "StatisticalInference592",
  "HypothesisTesting593",
  "RegressionAnalysis594",
  "Networking595",
  "OSIModel596",
  "IPModel597",
  "DNS598",
  "HTTP599",
  "TLSHTTPS600",
  "Sockets601",
  "OperatingSystems602",
  "ProcessesVsThreads603",
  "CPUInterrupts604",
  "SchedulingAlgorithms605",
  "ConcurrencyInMultipleCores606",
  "Semaphore607",
  "MemoryManagement608",
  "ProcessForking609",
  "DeadlocksAndResourceAllocation610",
  "Databases611",
  "SQLVsNoSQLDatabases612",
  "Denormalization613",
  "EntityRelationshipModel614",
  "DDL615",
  "DML616",
  "DQL617",
  "DCL618",
  "Locking619",
  "Transactions620",
  "ACIDModel621",
  "BASEModel622",
  "CAPTheorem623",
  "PACELC624",
  "Indexes625",
  "Views626",
  "StoredProcedures627",
  "DatabaseFederation628",
  "Replication629",
  "Sharding630",
  "SoftwareEngineering631",
  "AgileDevelopment632",
  "TestingAndQualityAssurance633",
  "SoftwareDesignPatterns634",
  "CommonUMLDiagrams635",
  "ClassDiagrams636",
  "UsecaseDiagrams637",
  "ActivityDiagrams638",
  "StatemachineDiagrams639",
  "SequenceDiagrams640",
  "DynamicProgramming641",
  "DivideAndConquerAlgorithms642",
  "BranchAndBoundAlgorithms643",
  "AdvancedAlgorithmsAndDataStructures644",
  "Tree645",
  "PreOrderTraversal646",
  "InOrderTraversal647",
  "PostOrderTraversal648",
  "BreadthFirstSearch649",
  "DepthFirstSearch650",
  "Graph651",
  "BreadthFirstSearch652",
  "DepthFirstSearch653",
  "BellmanFordsAlgorithm654",
  "DijkstrasAlgorithm655",
  "AAlgorithm656",
  "GreedyAlgorithms657",
  "DijkstrasAlgorithm658",
  "HuffmanCoding659",
  "KruskalsAlgorithm660",
  "FordFulkersonAlgorithm661",
  "PrimsAlgorithm662",
  "BackTracking663",
  "FindingHamiltonianPaths664",
  "SolvingNQueenProblem665",
  "MazeSolvingProblem666",
  "TheKnightsTourProblem667",
  "RabinKarpAlgorithm668",
  "StringSearchAndManipulations669",
  "SubstringSearch670",
  "BruteForceSearch671",
  "KnuthMorrisPratt672",
  "BoyerMoore673",
  "RabinKarp674",
  "SearchPatternInText675",
  "SuffixArrays676",
  "Caches677",
  "LRUCache678",
  "LFUCache679",
  "MFUCache680",
  "DesignPatterns681",
  "GoFDesignPatterns682",
  "ArchitecturalPatterns683",
  "DependencyInjection684",
  "NullObjectPattern685",
  "TypeObjectPattern686",
  "ComplexityClasses687",
  "P688",
  "NP689",
  "CoNP690",
  "NPHard691",
  "NPComplete692",
  "PEqualToNP693",
  "TravellingSalesmanProblem694",
  "KnapsackProblem695",
  "LongestPathProblem696",
  "BalancedSearchTrees697",
  "TwoThreeFourTrees698",
  "MaryTree699",
  "BTree700",
  "Tries701",
  "AVLTrees702",
  "BlackTrees703",
  "TwoThreeSearchTrees704",
  "KDTrees705",
  "SkipList706",
  "SplayTree707",
  "Security708",
  "PublicKeyCryptography709",
  "Encoding710",
  "HashingAlgorithms711",
  "OWASPTopTen712",
  "HowComputersWork713",
  "HowCPUExecutesPrograms714",
  "HowComputersCalculate715",
  "RegistersAndRAM716",
  "InstructionsAndPrograms717",
  "CPUCache718",
  "SystemDesign719",
  "HorizontalVsVerticalScaling720",
  "LoadBalancing721",
  "Clustering722",
  "Caching723",
  "CDN724",
  "Proxy725",
  "CAPTheorem726",
  "Queues727",
  "ArchitecturalStyles728",
  "REST729",
  "GraphQL730",
  "GRPC731",
  "CloudDesignPatterns732",
  "LongPolling733",
  "ShortPolling734",
  "WebSockets735",
  "SSE736",
  "CompilerDesign737",
  "LexicalAnalysis738",
  "Parsing739",
  "SemanticAnalysis740",
  "IntermediateCodeGeneration741",
  "CodeOptimization742",
  "CodeGeneration743",
  "ProgrammingLanguageParadigms744",
  "ImperativeProgramming745",
  "FunctionalProgramming746",
  "LogicProgramming747",
  "ObjectOrientedProgramming748",
  "AspectOrientedProgramming749",
  "ConcurrentProgramming750",
  "HumanComputerInteraction751",
  "TheoryOfComputation752",
  "ArtificialIntelligence753",
  "MachineLearning754",
  "NaturalLanguageProcessing755",
  "ComputerGraphicsAndVision756",
  "DistributedSystemsAndSecurity757",
  "DistributedSystems758",
  "HighPerformanceComputing759",
];

const fileName = "csImports.js";

generateLazyImports(topics, fileName);
