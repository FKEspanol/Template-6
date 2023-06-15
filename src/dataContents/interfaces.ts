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

interface Testimonials {
    imagePath: string;
    name: string;
    jobTitle: string;
    feedbackMsg: string;
}

interface Teams {
    image: string;
    name: string;
    jobTitle: string;
    message: string;
}

interface Stats {
    icon: string;
    count: number;
    item: string;
}

export type {
    Card,
    ConstructionData,
    Features,
    Projects,
    ProjectsFilter,
    Testimonials,
    Teams,
    Stats,
};
