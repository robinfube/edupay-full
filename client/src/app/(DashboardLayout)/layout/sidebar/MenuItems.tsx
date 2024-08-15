import {
  IconAperture,
  IconLayoutDashboard,
  IconLogin,
  IconMoodHappy,
  IconUserPlus,
  IconUsersPlus,
  IconListDetails,
  IconBoxMultiple0,
  IconFileTypography,
  IconFileInvoice,
  IconBabyCarriage,
  IconBuildingBank,
} from "@tabler/icons-react";
import { uniqueId } from "lodash";
import Login from "../../../../views/login/login"; // Adjust the path as necessary to import the Login component

const Menuitems = [
  {
    navlabel: true,
    subheader: "Home",
  },
  {
    id: uniqueId(),
    title: "Dashboard",
    icon: IconLayoutDashboard,
    href: "/dashboard",
  },
  {
    navlabel: true,
    subheader: "Students",
  },
  {
    id: uniqueId(),
    title: "Add Student",
    icon: IconUserPlus,
    href: "/students/addStudent",
  },
  {
    id: uniqueId(),
    title: "Student List",
    icon: IconListDetails,
    href: "/students/studentList",
  },
  {
    navlabel: true,
    subheader: "Fees",
  },
  {
    id: uniqueId(),
    title: "Fees Type",
    icon: IconFileTypography,
    href: "/fees/feestype",
  },
  {
    id: uniqueId(),
    title: "Fees Group",
    icon: IconBoxMultiple0,
    href: "/fees/feesgroup",
  },
  {
    id: uniqueId(),
    title: "Fees Invoice",
    icon: IconFileInvoice,
    href: "/fees/feesinvoice",
  },
  {
    id: uniqueId(),
    title: "Fees Carry",
    icon: IconBabyCarriage,
    href: "/fees/feescarryforward",
  },
  {
    id: uniqueId(),
    title: "Bank Payment",
    icon: IconBuildingBank,
    href: "/fees/bankpayment",
  },
  {
    navlabel: true,
    subheader: "Auth",
  },
  {
    id: uniqueId(),
    title: "Login",
    icon: IconLogin,
    href: "/login",
  },
  {
    id: uniqueId(),
    title: "Register",
    icon: IconUserPlus,
    href: "/register",
  },
  // Uncomment these if needed
  // {
  //   navlabel: true,
  //   subheader: "Extra",
  // },
  // {
  //   id: uniqueId(),
  //   title: "Icons",
  //   icon: IconMoodHappy,
  //   href: "/icons",
  // },
  // {
  //   id: uniqueId(),
  //   title: "Sample Page",
  //   icon: IconAperture,
  //   href: "/sample-page",
  // },
];

export default Menuitems;
