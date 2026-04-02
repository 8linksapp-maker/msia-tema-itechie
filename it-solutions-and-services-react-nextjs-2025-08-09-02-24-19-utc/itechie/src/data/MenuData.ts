interface MenuItem {
   id: number;
   title: string;
   link: string;
   has_dropdown: boolean;
   sub_menus?: {
      link: string;
      title: string;
   }[];
}[];

const menu_data: MenuItem[] = [
   {
      id: 1,
      has_dropdown: true,
      title: "Home",
      link: "#",
      sub_menus: [
         { link: "/", title: "Home 01" },
         { link: "/home-two", title: "Home 02" },
         { link: "/home-three", title: "Home 03" },
         { link: "/home-four", title: "Home 04" },
         { link: "/home-five", title: "Home 05" },
      ],
   },
   {
      id: 2,
      has_dropdown: true,
      title: "Service",
      link: "#",
      sub_menus: [
         { link: "/service", title: "Service" },
         { link: "/service-details", title: "Service Single" },
      ],
   },
   {
      id: 3,
      has_dropdown: true,
      title: "Pages",
      link: "#",
      sub_menus: [
         { link: "/about", title: "About Us" },
         { link: "/team", title: "Team" },
         { link: "/team-details", title: "Team Details" },
         { link: "/project", title: "project" },
         { link: "/project-details", title: "project Details" },
      ],
   },
   {
      id: 4,
      has_dropdown: true,
      title: " Blog ",
      link: "#",
      sub_menus: [
         { link: "/blog", title: "Blog" },
         { link: "/blog-details", title: "Blog-Details", },
      ],
   },
   {
      id: 5,
      has_dropdown: false,
      title: "Contact Us",
      link: "/contact",
   },
];
export default menu_data;
