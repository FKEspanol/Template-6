interface Card {
   cardIcon: string;
   cardTitle: string;
   cardContent: string;
}

interface ConstructionData {
   imgUrl: string;
   cardTitle: string;
   cardContent: string;
}

interface Features {
   status?: string;
   display: string;
   id: string;
   featureTitle: string;
   heading: string;
   subHeading: string;
   image: string;
   infoList: string[];
}

/**
 *  for projects component
 */
interface Projects {
   itemName: string;
   filterGroup: string;
   imagePath: string;
}

interface ProjectsFilter {
   categoryName: string;
   dataFilter: string;
}
/**
 * =========================
 */

export type { Card, ConstructionData, Features, Projects, ProjectsFilter };
