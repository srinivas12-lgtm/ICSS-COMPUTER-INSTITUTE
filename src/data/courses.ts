export type Course = {
  id: string;
  name: string;
  category: "Diploma" | "Post Graduate" | "Accounting" | "Hardware" | "Short-Term";
  duration: string;
  description: string;
  modules: string[];
};

export const courses: Course[] = [
  {
    id: "pgdse",
    name: "Post Graduate Diploma in Software Engineering (PGDSE)",
    category: "Post Graduate",
    duration: "18 months",
    description: "Comprehensive software engineering program covering fundamentals to advanced programming and databases.",
    modules: ["Fundamentals/MS Office/Internet", "PageMaker/Flash/HTML/VB", "Photoshop/Illustrator/C/Oracle/C++", "System Maintenance/Internet-II/Training"]
  },
  {
    id: "pgdca",
    name: "Post Graduate Diploma in Computer Applications (PGDCA)",
    category: "Post Graduate",
    duration: "1 year",
    description: "Intensive 1-year application development and database management track.",
    modules: ["Fundamentals/MS Office/Internet-I", "C/Oracle/RDBMS/SQL/PL-SQL/Internet-II"]
  },
  {
    id: "dca",
    name: "Diploma in Computer Applications (DCA)",
    category: "Diploma",
    duration: "6 months",
    description: "Essential computer skills for office administration and basic programming.",
    modules: ["Fundamentals, Windows", "MS Office (Word/Excel/PowerPoint/Access)", "Internet-I", "Fundamentals of C"]
  },
  {
    id: "accounting",
    name: "Accounting Package",
    category: "Accounting",
    duration: "2 months",
    description: "Master industry-standard accounting software and taxation.",
    modules: ["Tally", "Taxation", "Wings", "Focus", "EX–Next Generation"]
  },
  {
    id: "dch",
    name: "Diploma in Computer Hardware (DCH)",
    category: "Hardware",
    duration: "3 months",
    description: "Complete hardware assembly, OS installation, and troubleshooting.",
    modules: ["Electronics basics", "PC assembly, CMOS, formatting", "DOS/partitions, dual OS", "OS & software installation"]
  },
  {
    id: "c-cpp",
    name: "C & C++ Programming",
    category: "Short-Term",
    duration: "45-60 days",
    description: "Core programming logic and object-oriented concepts.",
    modules: ["C Programming", "C++ Object Oriented"]
  }
];
