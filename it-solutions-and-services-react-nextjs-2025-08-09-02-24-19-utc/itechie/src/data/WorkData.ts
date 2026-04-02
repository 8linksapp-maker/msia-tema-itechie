interface DataType {
   id: number;
   page: string;
   count?: string;
   icon?: string;
   title: string;
   desc: string;
}[];

const work_data: DataType[] = [
   {
      id: 1,
      page: "home_1",
      count: "01",
      title: "Select a project",
      desc: "Vestibulum ante ipsumusn eratultrices posu world",
   },
   {
      id: 2,
      page: "home_1",
      count: "02",
      title: "Project analysis",
      desc: "Vestibulum ante ipsumusn eratultrices posu world",
   },
   {
      id: 3,
      page: "home_1",
      count: "03",
      title: "Execute",
      desc: "Vestibulum ante ipsumusn eratultrices posu world",
   },
   {
      id: 4,
      page: "home_1",
      count: "04",
      title: "Deliver result",
      desc: "Vestibulum ante ipsumusn eratultrices posu world",
   },

   // home_2

   {
      id: 1,
      page: "home_2",
      icon: "icomoon-project",
      title: "Select a project",
      desc: "Vestibulum ante ipsumusn eratultrices posu world",
   },
   {
      id: 2,
      page: "home_2",
      icon: "icomoon-analysis",
      title: "Project analysis",
      desc: "Vestibulum ante ipsumusn eratultrices posu world",
   },
   {
      id: 3,
      page: "home_2",
      icon: "icomoon-gear",
      title: "Execute",
      desc: "Vestibulum ante ipsumusn eratultrices posu world",
   },
   {
      id: 4,
      page: "home_2",
      icon: "icomoon-approval",
      title: "Deliver result",
      desc: "Vestibulum ante ipsumusn eratultrices posu world",
   },
]

export default work_data;