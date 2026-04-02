interface DataType {
   id: number;
   title: string;
   nav_links: {
      link: string;
      title: string
   }[];
}[];

const footer_data: DataType[] = [
   {
      id: 1,
      title: "Service",
      nav_links: [
         { link: "service", title: "Web design" },
         { link: "service", title: "Digital marketing" },
         { link: "service", title: "It management" },
         { link: "service", title: "Cloud services" },
         { link: "service", title: "Machine learning" },
      ],
   },
   {
      id: 2,
      title: "Useful link",
      nav_links: [
         { link: "about", title: "About Us" },
         { link: "team", title: "Team" },
         { link: "project", title: "Portfolio" },
         { link: "service", title: "Service" },
         { link: "contact", title: "Contact Us" },
      ]
   },
]

export default footer_data;