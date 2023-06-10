import { Projects, ProjectsFilter } from "./interfaces";

const projectsFilter: ProjectsFilter[] = [
   {
      categoryName: "Remodeling",
      dataFilter: ".filter-remodeling",
   },
   {
      categoryName: "Construction",
      dataFilter: ".filter-construction",
   },
   {
      categoryName: "Repairs",
      dataFilter: ".filter-repairs",
   },
   {
      categoryName: "Design",
      dataFilter: ".filter-design",
   },
];
const projects: Projects[] = [
   {
      itemName: "remodeling-1",
      filterGroup: "filter-remodeling",
      imagePath: "/assets/images/projects/remodeling-1.jpg",
   },

   {
      itemName: "contruction-1",
      filterGroup: "filter-construction",
      imagePath: "/assets/images/projects/construction-1.jpg",
   },

   {
      itemName: "repairs-1",
      filterGroup: "filter-repairs",
      imagePath: "/assets/images/projects/repairs-1.jpg",
   },

   {
      itemName: "design-1",
      filterGroup: "filter-design",
      imagePath: "/assets/images/projects/design-1.jpg",
   },

   {
      itemName: "remodeling-2",
      filterGroup: "filter-remodeling",
      imagePath: "/assets/images/projects/remodeling-2.jpg",
   },

   {
      itemName: "contruction-2",
      filterGroup: "filter-construction",
      imagePath: "/assets/images/projects/construction-2.jpg",
   },

   {
      itemName: "repairs-2",
      filterGroup: "filter-repairs",
      imagePath: "/assets/images/projects/repairs-2.jpg",
   },

   {
      itemName: "design-2",
      filterGroup: "filter-design",
      imagePath: "/assets/images/projects/design-2.jpg",
   },

   {
      itemName: "remodeling-3",
      filterGroup: "filter-remodeling",
      imagePath: "/assets/images/projects/remodeling-3.jpg",
   },

   {
      itemName: "contruction-3",
      filterGroup: "filter-construction",
      imagePath: "/assets/images/projects/construction-3.jpg",
   },

   {
      itemName: "repairs-3",
      filterGroup: "filter-repairs",
      imagePath: "/assets/images/projects/repairs-3.jpg",
   },

   {
      itemName: "design-3",
      filterGroup: "filter-design",
      imagePath: "/assets/images/projects/design-3.jpg",
   },
];

export { projects, projectsFilter };
