const fs = require("fs");

const text = `import React from 'react'
import styles from "../../roadmapsAssets/topics.module.css";
import PaginationButtons from "../../roadmapComponents/PaginationButtons";
import TaskStateButtons from "../../roadmapComponents/TaskStateButtons";
import TopicVideoPlayer from "../../roadmapComponents/TopicVideoPlayer";
const nameOfFile = () => {
  const recommendedReading = [
    {
      id: 1,
      title: "ml How does the Internet Work?",
      url: "https://cs.fyi/guide/how-does-internet-work",
    },
    {
      id: 2,
      title: "How Does the Internet Work? MDN Docs",
      url: "https://developer.mozilla.org/en-US/docs/Learn/Common_questions/Web_mechanics/How_does_the_Internet_work",
    },
    {
      id: 3,
      title: "Introduction to Internet",
      url: "https://youtu.be/Dxcc6ycZ73M",
    },
    {
      id: 4,
      title: "How does the Internet work?",
      url: "https://www.youtube.com/watch?v=TNQsmPf24go",
    },
  ];
  return (
    <div className={styles.topicContainer}>
      <div className={styles.topicWrapper}>
        <h1>nameOfTopic</h1>

        <PaginationButtons
          prevTo="/roadmaps/ml/prevToPath"
          nextTo="/roadmaps/ml/nextToPath"
        />
        <hr />

        <h2>nameOfFile</h2>
        <p>
        nameOfTopic is currently under development. Please check back soon for updates.
        </p>

        <TopicVideoPlayer
          videoTitle=""
          videoSrc=""
        />

        <hr />

        <div className={styles.topicResources}>
          <h2>Recommended Reading</h2>
          <ul>
            {recommendedReading.map((item) => (
              <li key={item.id}>
                <a href={item.url} target="_blank" rel="noopener noreferrer">
                  {item.title}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <TaskStateButtons
          topicName= "nameOfFile"
          topicId={topicId}
          roadmapName="rcml"
        />

        <hr />

        <PaginationButtons
          prevTo="/roadmaps/ml/prevToPath"
          nextTo="/roadmaps/ml/nextToPath"
        />
      </div>
    </div>
  )
}

export default nameOfFile;`;

const mlTopicNames = [
  "LearnTheBasics251",
  "PickAProgrammingLanguage252",
  "Python253",
  "R254",
  "Java255",
  "C256",
  "MATLAB257",
  "JavaScript258",
  "ProgrammingFundamentals259",
  "Variables260",
  "Expressions261",
  "Operators262",
  "ControlFlowStructures263",
  "DataTypes264",
  "FunctionsAndModules265",
  "ObjectorientedProgramming266",
  "FileHandling267",
  "ExceptionHandling268",
  "Calculus269",
  "Limits270",
  "Derivatives271",
  "ChainRule272",
  "Gradient273",
  "Hessian274",
  "Jacobian275",
  "PartialDerivatives276",
  "TaylorSeries277",
  "LinearAlgebra278",
  "Scalars279",
  "Vectors280",
  "Matrices281",
  "Tensors282",
  "MatrixMultiplication283",
  "MatrixInverse284",
  "Transpose285",
  "Eigendecomposition286",
  "Eigenvalues287",
  "Eigenvectors288",
  "SingularValueDecomposition289",
  "LinearTransformations290",
  "VectorSpacesAndSubspaces291",
  "Statistics292",
  "DescriptiveStatistics293",
  "InferentialStatistics294",
  "HypothesisTesting295",
  "ConfidenceIntervals296",
  "DescriptiveStatistics297",
  "Regression298",
  "ANOVA299",
  "TimeSeriesAnalysis300",
  "NonparametricMethods301",
  "BayesianStatistics302",
  "ExperimentalDesign303",
  "ProbabilityTheory304",
  "RandomVariables305",
  "ProbabilityDistributions306",
  "Joint307",
  "Marginal308",
  "BayesRule309",
  "ProbabilityDensityFunctions310",
  "MCMC311",
  "MLE312",
  "MAP313",
  "MonteCarloIntegration314",
  "NaiveBayesClassifiers315",
  "GaussianProcesses316",
  "HiddenMarkovModels317",
  "Libraries318",
  "NumPy319",
  "NumPyArrays320",
  "NumPyBroadcasting321",
  "NumPyIndexing322",
  "NumPyLinearAlgebra323",
  "RandomNumberGeneration324",
  "Pandas325",
  "PandasDataFrames326",
  "PandasSeries327",
  "PandasDataCleaning328",
  "PandasTransformation329",
  "MatplotlibAndSeaborn330",
  "VisualizationOfDataAndStatisticalGraphics331",
  "DataPreprocessing332",
  "DataCleaning333",
  "MissingValues334",
  "Outliers335",
  "Inconsistencies336",
  "DataFormattingAndParsing337",
  "DataTransformation338",
  "ScalingData339",
  "NormalizingData340",
  "EncodingCategoricalVariables341",
  "DataIntegration342",
  "MergingDatasets343",
  "JoiningDatasets344",
  "ConcatenatingDatasets345",
  "DataReduction346",
  "FeatureSelection347",
  "FeatureExtraction348",
  "SamplingAndStratification349",
  "FeatureEngineering350",
  "TextProcessing351",
  "ImageProcessing352",
  "DomainspecificKnowledge353",
  "SupervisedLearning354",
  "Regression355",
  "LinearRegression356",
  "PoissonRegression357",
  "Classification358",
  "ClassificationRate359",
  "DecisionTrees360",
  "LogisticRegression361",
  "NaveBayesClassifiers362",
  "KNearestNeighbour363",
  "SVM364",
  "GaussianMixtureModels365",
  "UnsupervisedLearning366",
  "Clustering367",
  "HierarchicalClustering368",
  "KMeansClustering369",
  "DBSCAN370",
  "HDBSCAN371",
  "FuzzyCMeans372",
  "MeanShift373",
  "AssociationRuleLearning374",
  "AprioriAlgorithm375",
  "ECLATAlgorithm376",
  "FPTrees377",
  "DimensionalityReduction378",
  "PrincipalComponentAnalysisPCA379",
  "RandomProjection380",
  "NMF381",
  "TSNE382",
  "UMAP383",
  "EnsembleLearning384",
  "Regression385",
  "Boosting386",
  "Bagging387",
  "Stacking388",
  "ReinforcementLearning389",
  "MarkovDecisionProcess390",
  "QLearning391",
  "DeepReinforcementLearning392",
  "DeepLearning393",
  "ArtificialNeuralNetworks394",
  "ConvolutionalNeuralNetworks395",
  "RecurrentNeuralNetworks396",
  "Autoencoders397",
  "GenerativeAdversarialNetworks398",
  "NaturalLanguageProcessingNLP399",
  "TextPreprocessing400",
  "FeatureExtraction401",
  "SentimentAnalysis402",
  "TopicModeling403",
  "NamedEntityRecognition404",
  "LanguageTranslation405",
  "ComputerVision406",
  "ImagePreprocessing407",
  "ObjectDetection408",
  "ImageSegmentation409",
  "FaceRecognition410",
  "TimeSeriesAnalysis411",
  "TrendAnalysis412",
  "SeasonalityAnalysis413",
  "Forecasting414",
  "ModelEvaluationAndDeployment415",
  "OverfittingAndUnderfitting416",
  "CrossValidation417",
  "HyperparameterTuning418",
  "ModelSelection419",
  "ModelDeployment420",
  "EthicsAndBiasInML421",
  "FairnessInMachineLearning422",
  "BiasInMachineLearning423",
  "ExplainabilityAndInterpretabilityOfModels424",
  "PrivacyAndSecurityInML425",
  "DeploymentAndProduction426",
  "ModelDeployment427",
  "ContainerizationAndOrchestration428",
  "PerformanceOptimization429",
  "MonitoringAndManagement430",
  "SecurityAndCompliance431",
  "SoftwareEngineeringAndDevOps432",
  "CodeVersionControl433",
  "GitAndGitHub434",
  "SoftwareDevelopmentPrinciples435",
  "CloudComputing436",
  "ServerlessArchitecture437",
  "GoogleFunctions438",
  "AWSLambda439",
  "AzureFunctions440",
  "Storage441",
  "AWSS3442",
  "GoogleStorage443",
  "AzureBlobs444",
  "ModelManagement445",
  "AWSSageMaker446",
  "GoogleAIPlatform447",
  "AzureAutomatedML448",
  "GPUManagement449",
  "CloudNetwork450",
  "BusinessAndCommunicationSkills451",
  "BusinessUnderstanding452",
  "IdentifyingRequirements453",
  "DataSourcesFeasibility454",
  "CommunicationAndVisualization455",
  "DataStorytelling456",
  "PresentingFindings457",
  "ProjectManagement458",
  "TaskManagement459",
  "Collaboration460",
  "Leadership461",
  "Databases462",
  "ORM463",
  "SQL464",
  "DAL465",
  "NoSQL466",
  "Document467",
  "KeyValue468",
  "MongoDB469",
  "Redis470",
  "CouchDB471",
  "Memcached472",
  "RDBMS473",
  "MySQL474",
  "PostgreSQL475",
  "OracleDatabase476",
  "SQLite477",
  "MicrosoftSQLServer478",
  "MachineLearningMLApplications479",
];
const mlTopicsData = [
  {
    topicId: 251,
    topicName: "Learn the basics",
    topicPath: "/roadmaps/ml/learn-the-basics-251",
  },
  {
    topicId: 252,
    topicName: "Pick a Programming Language",
    topicPath: "/roadmaps/ml/pick-a-programming-language-252",
  },
  { topicId: 253, topicName: "Python", topicPath: "/roadmaps/ml/python-253" },
  { topicId: 254, topicName: "R", topicPath: "/roadmaps/ml/r-254" },
  { topicId: 255, topicName: "Java", topicPath: "/roadmaps/ml/java-255" },
  { topicId: 256, topicName: "C++", topicPath: "/roadmaps/ml/c++-256" },
  { topicId: 257, topicName: "MATLAB", topicPath: "/roadmaps/ml/matlab-257" },
  {
    topicId: 258,
    topicName: "JavaScript",
    topicPath: "/roadmaps/ml/javascript-258",
  },
  {
    topicId: 259,
    topicName: "Programming Fundamentals",
    topicPath: "/roadmaps/ml/programming-fundamentals-259",
  },
  {
    topicId: 260,
    topicName: "Variables",
    topicPath: "/roadmaps/ml/variables-260",
  },
  {
    topicId: 261,
    topicName: "Expressions",
    topicPath: "/roadmaps/ml/expressions-261",
  },
  {
    topicId: 262,
    topicName: "Operators",
    topicPath: "/roadmaps/ml/operators-262",
  },
  {
    topicId: 263,
    topicName: "Control flow structures",
    topicPath: "/roadmaps/ml/control-flow-structures-263",
  },
  {
    topicId: 264,
    topicName: "Data types",
    topicPath: "/roadmaps/ml/data-types-264",
  },
  {
    topicId: 265,
    topicName: "Functions and modules",
    topicPath: "/roadmaps/ml/functions-and-modules-265",
  },
  {
    topicId: 266,
    topicName: "Object-oriented programming",
    topicPath: "/roadmaps/ml/object-oriented-programming-266",
  },
  {
    topicId: 267,
    topicName: "File handling",
    topicPath: "/roadmaps/ml/file-handling-267",
  },
  {
    topicId: 268,
    topicName: "Exception handling",
    topicPath: "/roadmaps/ml/exception-handling-268",
  },
  {
    topicId: 269,
    topicName: "Calculus",
    topicPath: "/roadmaps/ml/calculus-269",
  },
  { topicId: 270, topicName: "Limits", topicPath: "/roadmaps/ml/limits-270" },
  {
    topicId: 271,
    topicName: "Derivatives",
    topicPath: "/roadmaps/ml/derivatives-271",
  },
  {
    topicId: 272,
    topicName: "Chain Rule",
    topicPath: "/roadmaps/ml/chain-rule-272",
  },
  {
    topicId: 273,
    topicName: "Gradient",
    topicPath: "/roadmaps/ml/gradient-273",
  },
  { topicId: 274, topicName: "Hessian", topicPath: "/roadmaps/ml/hessian-274" },
  {
    topicId: 275,
    topicName: "Jacobian",
    topicPath: "/roadmaps/ml/jacobian-275",
  },
  {
    topicId: 276,
    topicName: "Partial Derivatives",
    topicPath: "/roadmaps/ml/partial-derivatives-276",
  },
  {
    topicId: 277,
    topicName: "Taylor Series",
    topicPath: "/roadmaps/ml/taylor-series-277",
  },
  {
    topicId: 278,
    topicName: "Linear Algebra",
    topicPath: "/roadmaps/ml/linear-algebra-278",
  },
  { topicId: 279, topicName: "Scalars", topicPath: "/roadmaps/ml/scalars-279" },
  { topicId: 280, topicName: "Vectors", topicPath: "/roadmaps/ml/vectors-280" },
  {
    topicId: 281,
    topicName: "Matrices",
    topicPath: "/roadmaps/ml/matrices-281",
  },
  { topicId: 282, topicName: "Tensors", topicPath: "/roadmaps/ml/tensors-282" },
  {
    topicId: 283,
    topicName: "Matrix Multiplication",
    topicPath: "/roadmaps/ml/matrix-multiplication-283",
  },
  {
    topicId: 284,
    topicName: "Matrix Inverse",
    topicPath: "/roadmaps/ml/matrix-inverse-284",
  },
  {
    topicId: 285,
    topicName: "Transpose",
    topicPath: "/roadmaps/ml/transpose-285",
  },
  {
    topicId: 286,
    topicName: "Eigendecomposition",
    topicPath: "/roadmaps/ml/eigendecomposition-286",
  },
  {
    topicId: 287,
    topicName: "Eigenvalues",
    topicPath: "/roadmaps/ml/eigenvalues-287",
  },
  {
    topicId: 288,
    topicName: "Eigenvectors",
    topicPath: "/roadmaps/ml/eigenvectors-288",
  },
  {
    topicId: 289,
    topicName: "Singular Value Decomposition",
    topicPath: "/roadmaps/ml/singular-value-decomposition-289",
  },
  {
    topicId: 290,
    topicName: "Linear Transformations",
    topicPath: "/roadmaps/ml/linear-transformations-290",
  },
  {
    topicId: 291,
    topicName: "Vector Spaces and Subspaces",
    topicPath: "/roadmaps/ml/vector-spaces-and-subspaces-291",
  },
  {
    topicId: 292,
    topicName: "Statistics",
    topicPath: "/roadmaps/ml/statistics-292",
  },
  {
    topicId: 293,
    topicName: "Descriptive Statistics",
    topicPath: "/roadmaps/ml/descriptive-statistics-293",
  },
  {
    topicId: 294,
    topicName: "Inferential Statistics",
    topicPath: "/roadmaps/ml/inferential-statistics-294",
  },
  {
    topicId: 295,
    topicName: "Hypothesis Testing",
    topicPath: "/roadmaps/ml/hypothesis-testing-295",
  },
  {
    topicId: 296,
    topicName: "Confidence Intervals",
    topicPath: "/roadmaps/ml/confidence-intervals-296",
  },
  {
    topicId: 297,
    topicName: "Descriptive Statistics",
    topicPath: "/roadmaps/ml/descriptive-statistics-297",
  },
  {
    topicId: 298,
    topicName: "Regression",
    topicPath: "/roadmaps/ml/regression-298",
  },
  { topicId: 299, topicName: "ANOVA", topicPath: "/roadmaps/ml/anova-299" },
  {
    topicId: 300,
    topicName: "Time Series Analysis",
    topicPath: "/roadmaps/ml/time-series-analysis-300",
  },
  {
    topicId: 301,
    topicName: "Non-parametric Methods",
    topicPath: "/roadmaps/ml/non-parametric-methods-301",
  },
  {
    topicId: 302,
    topicName: "Bayesian Statistics",
    topicPath: "/roadmaps/ml/bayesian-statistics-302",
  },
  {
    topicId: 303,
    topicName: "Experimental Design",
    topicPath: "/roadmaps/ml/experimental-design-303",
  },
  {
    topicId: 304,
    topicName: "Probability Theory",
    topicPath: "/roadmaps/ml/probability-theory-304",
  },
  {
    topicId: 305,
    topicName: "Random Variables",
    topicPath: "/roadmaps/ml/random-variables-305",
  },
  {
    topicId: 306,
    topicName: "Probability Distributions",
    topicPath: "/roadmaps/ml/probability-distributions-306",
  },
  { topicId: 307, topicName: "Joint", topicPath: "/roadmaps/ml/joint-307" },
  {
    topicId: 308,
    topicName: "Marginal",
    topicPath: "/roadmaps/ml/marginal-308",
  },
  {
    topicId: 309,
    topicName: "Bayes' Rule",
    topicPath: "/roadmaps/ml/bayes'-rule-309",
  },
  {
    topicId: 310,
    topicName: "Probability Density Functions",
    topicPath: "/roadmaps/ml/probability-density-functions-310",
  },
  { topicId: 311, topicName: "MCMC", topicPath: "/roadmaps/ml/mcmc-311" },
  { topicId: 312, topicName: "MLE", topicPath: "/roadmaps/ml/mle-312" },
  { topicId: 313, topicName: "MAP", topicPath: "/roadmaps/ml/map-313" },
  {
    topicId: 314,
    topicName: "Monte Carlo Integration",
    topicPath: "/roadmaps/ml/monte-carlo-integration-314",
  },
  {
    topicId: 315,
    topicName: "Naive Bayes classifiers",
    topicPath: "/roadmaps/ml/naive-bayes-classifiers-315",
  },
  {
    topicId: 316,
    topicName: "Gaussian processes",
    topicPath: "/roadmaps/ml/gaussian-processes-316",
  },
  {
    topicId: 317,
    topicName: "Hidden Markov models",
    topicPath: "/roadmaps/ml/hidden-markov-models-317",
  },
  {
    topicId: 318,
    topicName: "Libraries",
    topicPath: "/roadmaps/ml/libraries-318",
  },
  { topicId: 319, topicName: "NumPy", topicPath: "/roadmaps/ml/numpy-319" },
  {
    topicId: 320,
    topicName: "NumPy-Arrays",
    topicPath: "/roadmaps/ml/numpy-arrays-320",
  },
  {
    topicId: 321,
    topicName: "NumPy-Broadcasting",
    topicPath: "/roadmaps/ml/numpy-broadcasting-321",
  },
  {
    topicId: 322,
    topicName: "NumPy-Indexing",
    topicPath: "/roadmaps/ml/numpy-indexing-322",
  },
  {
    topicId: 323,
    topicName: "NumPy-Linear Algebra",
    topicPath: "/roadmaps/ml/numpy-linear-algebra-323",
  },
  {
    topicId: 324,
    topicName: "Random Number Generation",
    topicPath: "/roadmaps/ml/random-number-generation-324",
  },
  { topicId: 325, topicName: "Pandas", topicPath: "/roadmaps/ml/pandas-325" },
  {
    topicId: 326,
    topicName: "Pandas-DataFrames",
    topicPath: "/roadmaps/ml/pandas-dataframes-326",
  },
  {
    topicId: 327,
    topicName: "Pandas-Series",
    topicPath: "/roadmaps/ml/pandas-series-327",
  },
  {
    topicId: 328,
    topicName: "Pandas-Data Cleaning",
    topicPath: "/roadmaps/ml/pandas-data-cleaning-328",
  },
  {
    topicId: 329,
    topicName: "Pandas-Transformation",
    topicPath: "/roadmaps/ml/pandas-transformation-329",
  },
  {
    topicId: 330,
    topicName: "Matplotlib and Seaborn",
    topicPath: "/roadmaps/ml/matplotlib-and-seaborn-330",
  },
  {
    topicId: 331,
    topicName: "Visualization of Data and Statistical Graphics",
    topicPath:
      "/roadmaps/ml/visualization-of-data-and-statistical-graphics-331",
  },
  {
    topicId: 332,
    topicName: "Data Preprocessing",
    topicPath: "/roadmaps/ml/data-preprocessing-332",
  },
  {
    topicId: 333,
    topicName: "Data Cleaning",
    topicPath: "/roadmaps/ml/data-cleaning-333",
  },
  {
    topicId: 334,
    topicName: "Missing Values",
    topicPath: "/roadmaps/ml/missing-values-334",
  },
  {
    topicId: 335,
    topicName: "Outliers",
    topicPath: "/roadmaps/ml/outliers-335",
  },
  {
    topicId: 336,
    topicName: "Inconsistencies",
    topicPath: "/roadmaps/ml/inconsistencies-336",
  },
  {
    topicId: 337,
    topicName: "Data Formatting and Parsing",
    topicPath: "/roadmaps/ml/data-formatting-and-parsing-337",
  },
  {
    topicId: 338,
    topicName: "Data Transformation",
    topicPath: "/roadmaps/ml/data-transformation-338",
  },
  {
    topicId: 339,
    topicName: "Scaling data",
    topicPath: "/roadmaps/ml/scaling-data-339",
  },
  {
    topicId: 340,
    topicName: "Normalizing data",
    topicPath: "/roadmaps/ml/normalizing-data-340",
  },
  {
    topicId: 341,
    topicName: "Encoding categorical variables",
    topicPath: "/roadmaps/ml/encoding-categorical-variables-341",
  },
  {
    topicId: 342,
    topicName: "Data Integration",
    topicPath: "/roadmaps/ml/data-integration-342",
  },
  {
    topicId: 343,
    topicName: "Merging datasets",
    topicPath: "/roadmaps/ml/merging-datasets-343",
  },
  {
    topicId: 344,
    topicName: "Joining datasets",
    topicPath: "/roadmaps/ml/joining-datasets-344",
  },
  {
    topicId: 345,
    topicName: "Concatenating datasets",
    topicPath: "/roadmaps/ml/concatenating-datasets-345",
  },
  {
    topicId: 346,
    topicName: "Data Reduction",
    topicPath: "/roadmaps/ml/data-reduction-346",
  },
  {
    topicId: 347,
    topicName: "Feature selection",
    topicPath: "/roadmaps/ml/feature-selection-347",
  },
  {
    topicId: 348,
    topicName: "Feature extraction",
    topicPath: "/roadmaps/ml/feature-extraction-348",
  },
  {
    topicId: 349,
    topicName: "Sampling and stratification",
    topicPath: "/roadmaps/ml/sampling-and-stratification-349",
  },
  {
    topicId: 350,
    topicName: "Feature Engineering",
    topicPath: "/roadmaps/ml/feature-engineering-350",
  },
  {
    topicId: 351,
    topicName: "Text processing",
    topicPath: "/roadmaps/ml/text-processing-351",
  },
  {
    topicId: 352,
    topicName: "Image processing",
    topicPath: "/roadmaps/ml/image-processing-352",
  },
  {
    topicId: 353,
    topicName: "Domain-specific knowledge",
    topicPath: "/roadmaps/ml/domain-specific-knowledge-353",
  },
  {
    topicId: 354,
    topicName: "Supervised Learning",
    topicPath: "/roadmaps/ml/supervised-learning-354",
  },
  {
    topicId: 355,
    topicName: "Regression",
    topicPath: "/roadmaps/ml/regression-355",
  },
  {
    topicId: 356,
    topicName: "Linear Regression",
    topicPath: "/roadmaps/ml/linear-regression-356",
  },
  {
    topicId: 357,
    topicName: "Poisson Regression",
    topicPath: "/roadmaps/ml/poisson-regression-357",
  },
  {
    topicId: 358,
    topicName: "Classification",
    topicPath: "/roadmaps/ml/classification-358",
  },
  {
    topicId: 359,
    topicName: "Classification Rate",
    topicPath: "/roadmaps/ml/classification-rate-359",
  },
  {
    topicId: 360,
    topicName: "Decision Trees",
    topicPath: "/roadmaps/ml/decision-trees-360",
  },
  {
    topicId: 361,
    topicName: "Logistic Regression",
    topicPath: "/roadmaps/ml/logistic-regression-361",
  },
  {
    topicId: 362,
    topicName: "Naïve Bayes Classifiers",
    topicPath: "/roadmaps/ml/naïve-bayes-classifiers-362",
  },
  {
    topicId: 363,
    topicName: "K-Nearest Neighbour",
    topicPath: "/roadmaps/ml/k-nearest-neighbour-363",
  },
  { topicId: 364, topicName: "SVM", topicPath: "/roadmaps/ml/svm-364" },
  {
    topicId: 365,
    topicName: "Gaussian Mixture Models",
    topicPath: "/roadmaps/ml/gaussian-mixture-models-365",
  },
  {
    topicId: 366,
    topicName: "Unsupervised Learning",
    topicPath: "/roadmaps/ml/unsupervised-learning-366",
  },
  {
    topicId: 367,
    topicName: "Clustering",
    topicPath: "/roadmaps/ml/clustering-367",
  },
  {
    topicId: 368,
    topicName: "Hierarchical Clustering",
    topicPath: "/roadmaps/ml/hierarchical-clustering-368",
  },
  {
    topicId: 369,
    topicName: "K-Means Clustering",
    topicPath: "/roadmaps/ml/k-means-clustering-369",
  },
  { topicId: 370, topicName: "DBSCAN", topicPath: "/roadmaps/ml/dbscan-370" },
  { topicId: 371, topicName: "HDBSCAN", topicPath: "/roadmaps/ml/hdbscan-371" },
  {
    topicId: 372,
    topicName: "Fuzzy C-Means",
    topicPath: "/roadmaps/ml/fuzzy-c-means-372",
  },
  {
    topicId: 373,
    topicName: "Mean Shift",
    topicPath: "/roadmaps/ml/mean-shift-373",
  },
  {
    topicId: 374,
    topicName: "Association Rule Learning",
    topicPath: "/roadmaps/ml/association-rule-learning-374",
  },
  {
    topicId: 375,
    topicName: "Apriori Algorithm",
    topicPath: "/roadmaps/ml/apriori-algorithm-375",
  },
  {
    topicId: 376,
    topicName: "ECLAT algorithm",
    topicPath: "/roadmaps/ml/eclat-algorithm-376",
  },
  {
    topicId: 377,
    topicName: "FP Trees",
    topicPath: "/roadmaps/ml/fp-trees-377",
  },
  {
    topicId: 378,
    topicName: "Dimensionality Reduction",
    topicPath: "/roadmaps/ml/dimensionality-reduction-378",
  },
  {
    topicId: 379,
    topicName: "Principal Component Analysis (PCA)",
    topicPath: "/roadmaps/ml/principal-component-analysis-(pca)-379",
  },
  {
    topicId: 380,
    topicName: "Random Projection",
    topicPath: "/roadmaps/ml/random-projection-380",
  },
  { topicId: 381, topicName: "NMF", topicPath: "/roadmaps/ml/nmf-381" },
  { topicId: 382, topicName: "T-SNE", topicPath: "/roadmaps/ml/t-sne-382" },
  { topicId: 383, topicName: "UMAP", topicPath: "/roadmaps/ml/umap-383" },
  {
    topicId: 384,
    topicName: "Ensemble Learning",
    topicPath: "/roadmaps/ml/ensemble-learning-384",
  },
  {
    topicId: 385,
    topicName: "Regression",
    topicPath: "/roadmaps/ml/regression-385",
  },
  {
    topicId: 386,
    topicName: "Boosting",
    topicPath: "/roadmaps/ml/boosting-386",
  },
  { topicId: 387, topicName: "Bagging", topicPath: "/roadmaps/ml/bagging-387" },
  {
    topicId: 388,
    topicName: "Stacking",
    topicPath: "/roadmaps/ml/stacking-388",
  },
  {
    topicId: 389,
    topicName: "Reinforcement Learning",
    topicPath: "/roadmaps/ml/reinforcement-learning-389",
  },
  {
    topicId: 390,
    topicName: "Markov Decision Process",
    topicPath: "/roadmaps/ml/markov-decision-process-390",
  },
  {
    topicId: 391,
    topicName: "Q-Learning",
    topicPath: "/roadmaps/ml/q-learning-391",
  },
  {
    topicId: 392,
    topicName: "Deep Reinforcement Learning",
    topicPath: "/roadmaps/ml/deep-reinforcement-learning-392",
  },
  {
    topicId: 393,
    topicName: "Deep Learning",
    topicPath: "/roadmaps/ml/deep-learning-393",
  },
  {
    topicId: 394,
    topicName: "Artificial Neural Networks",
    topicPath: "/roadmaps/ml/artificial-neural-networks-394",
  },
  {
    topicId: 395,
    topicName: "Convolutional Neural Networks",
    topicPath: "/roadmaps/ml/convolutional-neural-networks-395",
  },
  {
    topicId: 396,
    topicName: "Recurrent Neural Networks",
    topicPath: "/roadmaps/ml/recurrent-neural-networks-396",
  },
  {
    topicId: 397,
    topicName: "Autoencoders",
    topicPath: "/roadmaps/ml/autoencoders-397",
  },
  {
    topicId: 398,
    topicName: "Generative Adversarial Networks",
    topicPath: "/roadmaps/ml/generative-adversarial-networks-398",
  },
  {
    topicId: 399,
    topicName: "Natural Language Processing (NLP)",
    topicPath: "/roadmaps/ml/natural-language-processing-(nlp)-399",
  },
  {
    topicId: 400,
    topicName: "Text Preprocessing",
    topicPath: "/roadmaps/ml/text-preprocessing-400",
  },
  {
    topicId: 401,
    topicName: "Feature Extraction",
    topicPath: "/roadmaps/ml/feature-extraction-401",
  },
  {
    topicId: 402,
    topicName: "Sentiment Analysis",
    topicPath: "/roadmaps/ml/sentiment-analysis-402",
  },
  {
    topicId: 403,
    topicName: "Topic Modeling",
    topicPath: "/roadmaps/ml/topic-modeling-403",
  },
  {
    topicId: 404,
    topicName: "Named Entity Recognition",
    topicPath: "/roadmaps/ml/named-entity-recognition-404",
  },
  {
    topicId: 405,
    topicName: "Language Translation",
    topicPath: "/roadmaps/ml/language-translation-405",
  },
  {
    topicId: 406,
    topicName: "Computer Vision",
    topicPath: "/roadmaps/ml/computer-vision-406",
  },
  {
    topicId: 407,
    topicName: "Image Preprocessing",
    topicPath: "/roadmaps/ml/image-preprocessing-407",
  },
  {
    topicId: 408,
    topicName: "Object Detection",
    topicPath: "/roadmaps/ml/object-detection-408",
  },
  {
    topicId: 409,
    topicName: "Image Segmentation",
    topicPath: "/roadmaps/ml/image-segmentation-409",
  },
  {
    topicId: 410,
    topicName: "Face Recognition",
    topicPath: "/roadmaps/ml/face-recognition-410",
  },
  {
    topicId: 411,
    topicName: "Time Series Analysis",
    topicPath: "/roadmaps/ml/time-series-analysis-411",
  },
  {
    topicId: 412,
    topicName: "Trend Analysis",
    topicPath: "/roadmaps/ml/trend-analysis-412",
  },
  {
    topicId: 413,
    topicName: "Seasonality Analysis",
    topicPath: "/roadmaps/ml/seasonality-analysis-413",
  },
  {
    topicId: 414,
    topicName: "Forecasting",
    topicPath: "/roadmaps/ml/forecasting-414",
  },
  {
    topicId: 415,
    topicName: "Model Evaluation and Deployment",
    topicPath: "/roadmaps/ml/model-evaluation-and-deployment-415",
  },
  {
    topicId: 416,
    topicName: "Overfitting and Underfitting",
    topicPath: "/roadmaps/ml/overfitting-and-underfitting-416",
  },
  {
    topicId: 417,
    topicName: "Cross-Validation",
    topicPath: "/roadmaps/ml/cross-validation-417",
  },
  {
    topicId: 418,
    topicName: "Hyperparameter Tuning",
    topicPath: "/roadmaps/ml/hyperparameter-tuning-418",
  },
  {
    topicId: 419,
    topicName: "Model Selection",
    topicPath: "/roadmaps/ml/model-selection-419",
  },
  {
    topicId: 420,
    topicName: "Model Deployment",
    topicPath: "/roadmaps/ml/model-deployment-420",
  },
  {
    topicId: 421,
    topicName: "Ethics and Bias in ML",
    topicPath: "/roadmaps/ml/ethics-and-bias-in-ml-421",
  },
  {
    topicId: 422,
    topicName: "Fairness in Machine Learning",
    topicPath: "/roadmaps/ml/fairness-in-machine-learning-422",
  },
  {
    topicId: 423,
    topicName: "Bias in Machine Learning",
    topicPath: "/roadmaps/ml/bias-in-machine-learning-423",
  },
  {
    topicId: 424,
    topicName: "Explainability and Interpretability of Models",
    topicPath: "/roadmaps/ml/explainability-and-interpretability-of-models-424",
  },
  {
    topicId: 425,
    topicName: "Privacy and Security in ML",
    topicPath: "/roadmaps/ml/privacy-and-security-in-ml-425",
  },
  {
    topicId: 426,
    topicName: "Deployment and Production",
    topicPath: "/roadmaps/ml/deployment-and-production-426",
  },
  {
    topicId: 427,
    topicName: "Model Deployment",
    topicPath: "/roadmaps/ml/model-deployment-427",
  },
  {
    topicId: 428,
    topicName: "Containerization and Orchestration",
    topicPath: "/roadmaps/ml/containerization-and-orchestration-428",
  },
  {
    topicId: 429,
    topicName: "Performance Optimization",
    topicPath: "/roadmaps/ml/performance-optimization-429",
  },
  {
    topicId: 430,
    topicName: "Monitoring and Management",
    topicPath: "/roadmaps/ml/monitoring-and-management-430",
  },
  {
    topicId: 431,
    topicName: "Security and Compliance",
    topicPath: "/roadmaps/ml/security-and-compliance-431",
  },
  {
    topicId: 432,
    topicName: "Software Engineering and DevOps",
    topicPath: "/roadmaps/ml/software-engineering-and-devops-432",
  },
  {
    topicId: 433,
    topicName: "Code Version Control",
    topicPath: "/roadmaps/ml/code-version-control-433",
  },
  {
    topicId: 434,
    topicName: "Git and GitHub",
    topicPath: "/roadmaps/ml/git-and-github-434",
  },
  {
    topicId: 435,
    topicName: "Software Development Principles",
    topicPath: "/roadmaps/ml/software-development-principles-435",
  },
  {
    topicId: 436,
    topicName: "Cloud Computing",
    topicPath: "/roadmaps/ml/cloud-computing-436",
  },
  {
    topicId: 437,
    topicName: "Serverless Architecture",
    topicPath: "/roadmaps/ml/serverless-architecture-437",
  },
  {
    topicId: 438,
    topicName: "Google Functions",
    topicPath: "/roadmaps/ml/google-functions-438",
  },
  {
    topicId: 439,
    topicName: "AWS Lambda",
    topicPath: "/roadmaps/ml/aws-lambda-439",
  },
  {
    topicId: 440,
    topicName: "Azure Functions",
    topicPath: "/roadmaps/ml/azure-functions-440",
  },
  { topicId: 441, topicName: "Storage", topicPath: "/roadmaps/ml/storage-441" },
  { topicId: 442, topicName: "AWS S3", topicPath: "/roadmaps/ml/aws-s3-442" },
  {
    topicId: 443,
    topicName: "Google Storage",
    topicPath: "/roadmaps/ml/google-storage-443",
  },
  {
    topicId: 444,
    topicName: "Azure Blobs",
    topicPath: "/roadmaps/ml/azure-blobs-444",
  },
  {
    topicId: 445,
    topicName: "Model Management",
    topicPath: "/roadmaps/ml/model-management-445",
  },
  {
    topicId: 446,
    topicName: "AWS SageMaker",
    topicPath: "/roadmaps/ml/aws-sagemaker-446",
  },
  {
    topicId: 447,
    topicName: "Google AI Platform",
    topicPath: "/roadmaps/ml/google-ai-platform-447",
  },
  {
    topicId: 448,
    topicName: "Azure AutomatedML",
    topicPath: "/roadmaps/ml/azure-automatedml-448",
  },
  {
    topicId: 449,
    topicName: "GPU Management",
    topicPath: "/roadmaps/ml/gpu-management-449",
  },
  {
    topicId: 450,
    topicName: "Cloud Network",
    topicPath: "/roadmaps/ml/cloud-network-450",
  },
  {
    topicId: 451,
    topicName: "Business and Communication Skills",
    topicPath: "/roadmaps/ml/business-and-communication-skills-451",
  },
  {
    topicId: 452,
    topicName: "Business Understanding",
    topicPath: "/roadmaps/ml/business-understanding-452",
  },
  {
    topicId: 453,
    topicName: "Identifying Requirements",
    topicPath: "/roadmaps/ml/identifying-requirements-453",
  },
  {
    topicId: 454,
    topicName: "Data Sources Feasibility",
    topicPath: "/roadmaps/ml/data-sources-feasibility-454",
  },
  {
    topicId: 455,
    topicName: "Communication and Visualization",
    topicPath: "/roadmaps/ml/communication-and-visualization-455",
  },
  {
    topicId: 456,
    topicName: "Data Storytelling",
    topicPath: "/roadmaps/ml/data-storytelling-456",
  },
  {
    topicId: 457,
    topicName: "Presenting Findings",
    topicPath: "/roadmaps/ml/presenting-findings-457",
  },
  {
    topicId: 458,
    topicName: "Project Management",
    topicPath: "/roadmaps/ml/project-management-458",
  },
  {
    topicId: 459,
    topicName: "Task Management",
    topicPath: "/roadmaps/ml/task-management-459",
  },
  {
    topicId: 460,
    topicName: "Collaboration",
    topicPath: "/roadmaps/ml/collaboration-460",
  },
  {
    topicId: 461,
    topicName: "Leadership",
    topicPath: "/roadmaps/ml/leadership-461",
  },
  {
    topicId: 462,
    topicName: "Databases",
    topicPath: "/roadmaps/ml/databases-462",
  },
  { topicId: 463, topicName: "ORM", topicPath: "/roadmaps/ml/orm-463" },
  { topicId: 464, topicName: "SQL", topicPath: "/roadmaps/ml/sql-464" },
  { topicId: 465, topicName: "DAL", topicPath: "/roadmaps/ml/dal-465" },
  { topicId: 466, topicName: "NoSQL", topicPath: "/roadmaps/ml/nosql-466" },
  {
    topicId: 467,
    topicName: "Document",
    topicPath: "/roadmaps/ml/document-467",
  },
  {
    topicId: 468,
    topicName: "Key-Value",
    topicPath: "/roadmaps/ml/key-value-468",
  },
  { topicId: 469, topicName: "MongoDB", topicPath: "/roadmaps/ml/mongodb-469" },
  { topicId: 470, topicName: "Redis", topicPath: "/roadmaps/ml/redis-470" },
  { topicId: 471, topicName: "CouchDB", topicPath: "/roadmaps/ml/couchdb-471" },
  {
    topicId: 472,
    topicName: "Memcached",
    topicPath: "/roadmaps/ml/memcached-472",
  },
  { topicId: 473, topicName: "RDBMS", topicPath: "/roadmaps/ml/rdbms-473" },
  { topicId: 474, topicName: "MySQL", topicPath: "/roadmaps/ml/mysql-474" },
  {
    topicId: 475,
    topicName: "PostgreSQL",
    topicPath: "/roadmaps/ml/postgresql-475",
  },
  {
    topicId: 476,
    topicName: "Oracle Database",
    topicPath: "/roadmaps/ml/oracle-database-476",
  },
  { topicId: 477, topicName: "SQLite", topicPath: "/roadmaps/ml/sqlite-477" },
  {
    topicId: 478,
    topicName: "Microsoft SQL Server",
    topicPath: "/roadmaps/ml/microsoft-sql-server-478",
  },
  {
    topicId: 479,
    topicName: "Machine learning (ML) applications",
    topicPath: "/roadmaps/ml/machine-learning-(ml)-applications-479",
  },
];

  for (let i = 0; i < mlTopicNames.length; i++) {
    const fileName = `${mlTopicNames[i]}.jsx`;
    const topicId = mlTopicNames[i].match(/\d+$/)[0]; // Extract the number at the end of the string
    const prevToPath = mlTopicsData[i - 1] ?  mlTopicsData[i - 1].topicPath.split('/').pop() : "";
    const nextToPath = mlTopicsData[i + 1] ?   mlTopicsData[i + 1].topicPath.split('/').pop() : "";
    const nameInPascalCase = mlTopicNames[i].replace(/(\d+)$/, '') // Remove the number at the end
    .replace(/([A-Z])/g, ' $1') // Add a space before each uppercase letter
    .trim(); // Remove leading and trailing spaces
    const fileContent = text
      .replace(/nameOfFile/g, mlTopicNames[i])
      .replace(/nameOfTopic/g, nameInPascalCase)
      .replace(/prevToPath/g, prevToPath)
      .replace(/nextToPath/g, nextToPath)
      .replace(/\{topicId\}/g, `{${topicId}}`);
    fs.writeFile(fileName, fileContent, (err) => {
      if (err) throw err;
    });
  }

    
