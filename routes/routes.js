import gridIcon from "../assets/svg/grid.svg";
import dartboard from "../assets/svg/dartboard.svg";
import keyresults from "../assets/svg/keyresults.svg";
import tasks from "../assets/svg/tasks.svg";
import reviews from "../assets/svg/reviews.svg";
import rewards from "../assets/svg/rewards.svg";
import orgchart from "../assets/svg/orgchart.svg";
import company from "../assets/svg/company.svg";
import departments from "../assets/svg/departments.svg";
import employess from "../assets/svg/employees.svg";
import activeCompany from "../assets/svg/activeCompany.svg";
import previlages from "../assets/svg/previlages.svg";
import settings from "../assets/svg/setups.svg";
import okrManagement from "../assets/svg/okr-icon.svg";
import privilegeGroups from "../assets/svg/privilege-groups.svg";
import rewardsManagement from "../assets/svg/rewardsManagement.svg";
import rewardsManagementactive from "../assets/svg/rewardsManagementactive.svg";

const routers = [
  {
    path: "/",
    exact: true,
    redirect: "/auth/landing",
  },
  {
    component: "AuthLayout",
    path: "/auth",
    auth: false,
    name: "Auth",
    exact: false,
    //redirect: "/auth/login",
    childrens: [
      {
        component: "Login",
        componentPath: "pages/Auth/Login",
        path: "/login",
        name: "Login",
        auth: false,
        exact: true,
      },
      {
        component: "Register",
        componentPath: "pages/Auth/Register",
        path: "/register",
        name: "Register",
        auth: false,
        exact: true,
      },
      {
        component: "ForgetPassword",
        componentPath: "pages/Auth/ForgetPassword",
        path: "/forgotpassword",
        name: "ForgetPassword",
        auth: false,
        exact: true,
      },
      {
        component: "LandingPage",
        componentPath: "pages/LandingPage",
        path: "/landing",
        name: "LandingPage",
        auth: false,
        exact: true,
      }
    ],
  },
  {
    component: "AdminLayout",
    path: "/admin",
    auth: false,
    name: "Admin",
    exact: false,
    redirect: "/admin/setups/company",
    childrens: [
      {
        component: "Dashboard",
        componentPath: "pages/Dashboard",
        path: "/dashboard/myteam",
        name: "Dashboard",
        auth: false,
        exact: false,
      },
      {
        component: "Dashboard",
        componentPath: "pages/Dashboard",
        path: "/dashboard/me",
        name: "Dashboard",
        auth: false,
        exact: false,
      },
      {
        component: "Objectives",
        componentPath: "pages/Objectives",
        path: "/objectives",
        name: "Objectives",
        auth: false,
        exact: true,
      },
      {
        component: "KeyResults",
        componentPath: "pages/KeyResults",
        path: "/keyresults",
        name: "KeyResults",
        auth: false,
        exact: true,
      },
      {
        component: "Tasks",
        componentPath: "pages/Tasks",
        path: "/tasks",
        name: "Tasks",
        auth: false,
        exact: true,
      },
      {
        component: "Reviews",
        componentPath: "pages/Reviews",
        path: "/reviews",
        name: "Reviews",
        auth: false,
        exact: true,
      },
      {
        component: "Rewards",
        componentPath: "pages/Rewards",
        path: "/rewards",
        name: "Rewards",
        auth: false,
        exact: true,
      },
      {
        component: "OrgChart",
        componentPath: "pages/OrgChart",
        path: "/orgChart",
        name: "OrgChart",
        auth: false,
        exact: true,
      },
      {
        component: "Company",
        componentPath: "pages/Setup/Company",
        path: "/setups/company",
        name: "Company",
        auth: false,
        exact: true,
      },
      {
        component: "Departments",
        componentPath: "pages/Setup/Departments",
        path: "/setups/departments",
        name: "Departments",
        auth: false,
        exact: true,
      },
      {
        component: "Employees",
        componentPath: "pages/Setup/Employees",
        path: "/setups/employees",
        name: "Employees",
        auth: false,
        exact: true,
      },
      {
        component: "RolesAndPreviliges",
        componentPath: "pages/Previleges/RolesAndPrevilages",
        path: "/previlages/rolesandprevilages",
        name: "Roles & Previlages",
        auth: false,
        exact: true,
      },
      {
        component: "OKRManagement",
        componentPath: "pages/Previleges/OKRManagement",
        path: "/previlages/okrmanagement",
        name: "OKRManagement",
        auth: false,
        exact: true,
      },
      {
        component: "PrivilegeGroups",
        componentPath: "pages/Previleges/PrivilegeGroups",
        path: "/previlages/privilegegroups",
        name: "PrivilegeGroups",
        auth: false,
        exact: true,
      },
      {
        component: "RewardsManagement",
        componentPath: "pages/Previleges/RewardsManagement",
        path: "/previlages/rewardsManagement",
        name: "RewardsManagement",
        auth: false,
        exact: true,
      },
      {
        component: "CatalogManagement",
        componentPath: "pages/Previleges/RewardsManagement/CatalogManagement",
        path: "/previlages/catalogManagement",
        name: "CatalogManagement",
        auth: false,
        exact: true,
      },
      {
        component: "NotificationSettings",
        componentPath: "pages/NotificationSettings/Settings",
        path: "/settings/notificationsettings",
        name: "Notification Settings",
        auth: false,
        exact: true,
      },
      {
        component: "FormCreate",
        componentPath: "pages/Setup/Employees/FormCreate",
        path: "/setups/employeeform",
        name: "FormCreate",
        auth: false,
        exact: true,
      },
      {
        component: "FormEdit",
        componentPath: "pages/Setup/Employees/FormEdit",
        path: "/setups/employeeEdit",
        name: "FormEdit",
        auth: false,
        exact: true,
      },
      {
        component: "Previlages",
        componentPath: "pages/Previlages",
        path: "/Previlages",
        name: "Previlages",
        auth: false,
        exact: true,
      },
      {
        component: "OkrDetailsID",
        componentPath: "pages/Objectives/OkrDetailsID",
        path: "/objectives/okr-details/:id",
        name: "OKR-Details",
        auth: false,
        exact: true,
      },
      {
        component: "OKRDetails",
        componentPath: "pages/Objectives/OkrDetails",
        path: "/objectives/okrdetails",
        name: "OKRDetails",
        auth: false,
        exact: true,
      },
      {
        component: "Notifications",
        componentPath: "pages/Notifications",
        path: "/notifications",
        name: "Notifications",
        auth: false,
        exact: true,
      },
    ],
  },
];


// sidebar links
export const links = () => {
  let result = [];
  let privileges = localStorage.getItem("privileges") !== null ? JSON.parse(localStorage.getItem("privileges")) : null;
  if (privileges !== null) {
    if (privileges && privileges.length > 0 && privileges.filter(privilege => privilege.page === "Dashboards").length > 0 && privileges.filter(privilege => privilege.page === "Dashboards")[0].view) {
      result.push({
        icon: gridIcon,
        title: "Dashboard",
        link: "/admin/dashboard/myteam",
      })
    }
    if (privileges && privileges.length > 0 && privileges.filter(privilege => privilege.page === "Objectives").length > 0 && privileges.filter(privilege => privilege.page === "Objectives")[0].view) {
      result.push(
        {
          icon: dartboard,
          title: "Objectives",
          link: "/admin/objectives",
        })
    }
    if (privileges && privileges.length > 0 && privileges.filter(privilege => privilege.page === "Key Results").length > 0 && privileges.filter(privilege => privilege.page === "Key Results")[0].view) {
      result.push(
        {
          icon: keyresults,
          title: "Key Results",
          link: "/admin/keyresults",
        })
    }
    if (privileges && privileges.length > 0 && privileges.filter(privilege => privilege.page === "Tasks").length > 0 && privileges.filter(privilege => privilege.page === "Tasks")[0].view) {
      result.push(
        {
          icon: tasks,
          title: "Tasks",
          link: "/admin/tasks",
        })
    }
    if (privileges && privileges.length > 0 && privileges.filter(privilege => privilege.page === "Reviews").length > 0 && privileges.filter(privilege => privilege.page === "Reviews")[0].view) {
      result.push(
        {
          icon: reviews,
          title: "Reviews",
          link: "/admin/reviews",
        })
    }
    if (privileges && privileges.length > 0 && privileges.filter(privilege => privilege.page === "Rewards").length > 0 && privileges.filter(privilege => privilege.page === "Rewards")[0].view) {
      result.push(
        {
          icon: rewards,
          title: "Rewards",
          link: "/admin/rewards",
        })
    }
    if (privileges && privileges.length > 0 && privileges.filter(privilege => privilege.page === "Org Chart").length > 0 && privileges.filter(privilege => privilege.page === "Org Chart")[0].view) {
      result.push(
        {
          icon: orgchart,
          title: "Org Chart",
          link: "/admin/orgchart",
        })
    }
  }
  return result;
}

//sidebar admin activity links
export const adminActivityLinks = [
  {
    icon: company,
    activeIcon: activeCompany,
    title: "Company",
    link: "/admin/setups/company"
  },
  {
    icon: departments,
    activeIcon: activeCompany,
    title: "Departments",
    link: "/admin/setups/departments"
  }, {
    icon: employess,
    activeIcon: activeCompany,
    title: "Employees",
    link: "/admin/setups/employees"
  },
]


export const rolesAndPrevilages = [
  {
    icon: previlages,
    activeIcon: activeCompany,
    title: "Roles & Privileges",
    link: "/admin/previlages/rolesandprevilages"
  },
  {
    icon: privilegeGroups,
    activeIcon: activeCompany,
    title: "Privilege Groups",
    link: "/admin/previlages/privilegegroups"
  },
  {
    icon: okrManagement,
    activeIcon: activeCompany,
    title: "OKR Management",
    link: "/admin/previlages/okrmanagement"
  },
  {
    icon: rewardsManagement,
    activeIcon: rewardsManagementactive,
    title: "Rewards Management",
    link: "/admin/previlages/rewardsManagement"
  },
  {
    icon: rewardsManagement,
    activeIcon: rewardsManagementactive,
    title: "Catalog Management",
    link: "/admin/previlages/catalogManagement"
  },
  {
    icon: settings,
    activeIcon: activeCompany,
    title: "Notification Settings",
    link: "/admin/settings/notificationsettings"
  },
]

export const createOKR = [
  {
    icon: "company",
    activeIcon: activeCompany,
    title: "Library OKR",
    link: "/admin/setups/company"
  },
  {
    icon: departments,
    activeIcon: activeCompany,
    title: "Non Library OKRY",
    link: "/admin/setups/departments"
  }
]

export default routers