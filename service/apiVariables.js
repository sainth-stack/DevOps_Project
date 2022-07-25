const baseURL = "production";
//const baseURL = "local";
const companyPrefix = "companies/";
const objectivePrefix = "objectives/";
const entityPrefix = "entities/";
const departmentPrefix = "departments/";
const designationPrefix = "designations/";
const gradePrefix = "grades/";
const uploadPrefix = "uploads/";
const landingPrefix = "landing/";
const employeePrefix = "employees/";
const keyResultsPrefix = "keyresults/";
const tasksPrefix = "tasks/";
const userPrefix = "users/";
const commentsPrefix = "comments/";
const privilegesPrefix = "privileges/";
const privilegesGroupPrefix = "privilegesgroups/";
const notificationsPrefix = "notifications/"
const notificationSettingsPrefix = "notificationSettings/"
const okrManagement = "okrManagement/"
const rewardManagement = "rewardManagement/"
export const companyApi = {
  createCompany: {
    api: companyPrefix + "createCompany",
    method: "post",
    baseURL,
  },
  createOrUpdateMultipleCompanies: {
    api: companyPrefix + "createOrUpdateMultipleCompanies",
    method: "post",
    baseURL,
  },
  updateCompany: (id) => ({
    api: companyPrefix + "updateCompany/" + id,
    method: "put",
    baseURL,
  }),
  deleteCompany: (id) => ({
    api: companyPrefix + "deleteCompany/" + id,
    method: "delete",
    baseURL,
  }),
  deleteCompanies: {
    api: companyPrefix + "deleteCompanies/",
    method: "post",
    baseURL,
  },
  getCompanies: {
    api: companyPrefix + "getCompanies",
    method: "get",
    baseURL,
  },
  getCompanyById: (id) => ({
    api: companyPrefix + "getCompanyById/" + id,
    method: "get",
    baseURL,
  }),
};

export const employeeApi = {
  createEmployee: {
    api: employeePrefix + "createEmployee",
    method: "post",
    baseURL,
  },
  createOrUpdateMultipleEmployees: {
    api: employeePrefix + "createOrUpdateMultipleEmployees",
    method: "post",
    baseURL,
  },
  updateEmployee: (id) => ({
    api: employeePrefix + "updateEmployee/" + id,
    method: "put",
    baseURL,
  }),
  deleteEmployee: (id) => ({
    api: employeePrefix + "deleteEmployee/" + id,
    method: "put",
    baseURL,
  }),
  deleteEmployees: {
    api: employeePrefix + "deleteEmployees/",
    method: "post",
    baseURL,
  },
  getEmployees: {
    api: employeePrefix + "getEmployees",
    method: "get",
    baseURL,
  },
  getEmployeeById: (id) => ({
    api: employeePrefix + "getEmployeeById/" + id,
    method: "get",
    baseURL,
  }),
};
export const objectiveApi = {
  getObjectives: (role) => ({
    api: objectivePrefix + "getObjectives/" + role,
    method: "get",
    baseURL,
  }),
  deleteObjectives: {
    api: objectivePrefix + "deleteObjectives",
    method: "delete",
    baseURL,
  },
  createObjective: {
    api: objectivePrefix + "createObjective",
    method: "post",
    baseURL,
  },
  cascadeObjective: {
    api: objectivePrefix + "cascadeObjective",
    method: "post",
    baseURL,
  },
  cascadeObjectiveWithKeyResults: {
    api: objectivePrefix + "cascadeObjectiveWithKeyResults",
    method: "post",
    baseURL,
  },
  updateObjective: (id) => ({
    api: objectivePrefix + "updateObjective/" + id,
    method: "put",
    baseURL,
  }),
};
export const entityApi = {
  createEntity: {
    api: entityPrefix + "createEntity",
    method: "post",
    baseURL,
  },
  createOrUpdateMultipleEntities: {
    api: entityPrefix + "createOrUpdateMultipleEntities",
    method: "post",
    baseURL,
  },
  updateEntity: (id) => ({
    api: entityPrefix + "updateEntity/" + id,
    method: "put",
    baseURL,
  }),
  deleteEntity: (id) => ({
    api: entityPrefix + "deleteEntity/" + id,
    method: "delete",
    baseURL,
  }),
  deleteEntities: {
    api: entityPrefix + "deleteEntities/",
    method: "post",
    baseURL,
  },
  getEntities: {
    api: entityPrefix + "getEntities",
    method: "get",
    baseURL,
  },
  getEntityById: (id) => ({
    api: entityPrefix + "getEntityById/" + id,
    method: "get",
    baseURL,
  }),
};

export const departmentApi = {
  createDepartment: {
    api: departmentPrefix + "createDepartment",
    method: "post",
    baseURL,
  },
  updateDepartment: (id) => ({
    api: departmentPrefix + "updateDepartment/" + id,
    method: "put",
    baseURL,
  }),
  getDepartments: {
    api: departmentPrefix + "getDepartments",
    method: "get",
    baseURL,
  },
  getDepartmentsData: {
    api: departmentPrefix + "getDepartmentsData",
    method: "get",
    baseURL,
  },
  createOrUpdateMultipleDepartments: {
    api: departmentPrefix + "createOrUpdateMultipleDepartments",
    method: "post",
    baseURL,
  },
  deleteDepartment: (id) => ({
    api: departmentPrefix + "deleteDepartment/" + id,
    method: "delete",
    baseURL,
  }),
};
export const designationApi = {
  getDesignations: {
    api: designationPrefix + "getDesignations",
    method: "get",
    baseURL,
  },
  updateDesignation: (id) => ({
    api: designationPrefix + "updateDesignation/" + id,
    method: "put",
    baseURL,
  }),
  createOrUpdateMultipleDesignations: {
    api: designationPrefix + "createOrUpdateMultipleDesignations",
    method: "post",
    baseURL,
  },
  deleteDesignation: (id) => ({
    api: designationPrefix + "deleteDesignation/" + id,
    method: "delete",
    baseURL,
  }),
};
export const gradeApi = {
  getGrades: {
    api: gradePrefix + "getGrades",
    method: "get",
    baseURL,
  },
  updateGrade: (id) => ({
    api: gradePrefix + "updateGrade/" + id,
    method: "put",
    baseURL,
  }),
  createOrUpdateMultipleGrades: {
    api: gradePrefix + "createOrUpdateMultipleGrades",
    method: "post",
    baseURL,
  },
  deleteGrade: (id) => ({
    api: gradePrefix + "deleteGrade/" + id,
    method: "delete",
    baseURL,
  }),
};

export const uploadApi = {
  createUpload: {
    api: uploadPrefix + "createUpload",
    method: "post",
    baseURL,
  },
  requestDemo: {
    api: landingPrefix + "requestDemo",
    method: "post",
    baseURL,
  },
  birthdayWish: {
    api: landingPrefix + "sendBirthdayWish",
    method: "post",
    baseURL,
  },
  updateUpload: (id) => ({
    api: uploadPrefix + "updateUpload/" + id,
    method: "post",
    baseURL,
  }),
  getUploadsByCategory: (category) => ({
    api: uploadPrefix + "getUploadsByCategory/" + category,
    method: "get",
    baseURL,
  }),
  deleteUpload: (id) => ({
    api: uploadPrefix + "deleteUpload/" + id,
    method: "delete",
    baseURL,
  }),
};
export const keyresultsApi = {
  getKeyResults: {
    api: keyResultsPrefix + "getKeyResults",
    method: "get",
    baseURL,
  },
  getKeyResultSingle: (id, role) => ({
    api: keyResultsPrefix + "getKeyResultSingle/" + id + "/" + role,
    method: "get",
    baseURL,
  }),
  createkeyResult: {
    api: keyResultsPrefix + "createKeyResult",
    method: "post",
    baseURL,
  },
  deletekeyResult: (id) => ({
    api: keyResultsPrefix + "deletekeyResult/" + id,
    method: "delete",
    baseURL,
  }),
  updatekeyResult: (id) => ({
    api: keyResultsPrefix + "updatekeyResult/" + id,
    method: "put",
    baseURL,
  }),
  updatekeyResults: {
    api: keyResultsPrefix + "updatekeyResults",
    method: "put",
    baseURL,
  },
}

export const tasksApi = {
  createTask: {
    api: tasksPrefix + "createTask",
    method: "post",
    baseURL,
  },
  updateTask: (id) => ({
    api: tasksPrefix + "updateTask/" + id,
    method: "put",
    baseURL,
  }),

  getTasks: {
    api: tasksPrefix + "getTasks",
    method: "get",
    baseURL
  },
  deleteTask: (id) => ({
    api: tasksPrefix + "deleteTask/" + id,
    method: "delete",
    baseURL,
  }),
}

export const commentsApi = {
  createComment: {
    api: commentsPrefix + "createComment",
    method: "post",
    baseURL,
  },
  updateComment: (id) => ({
    api: commentsPrefix + "updateComment/" + id,
    method: "put",
    baseURL,
  }),
  getAllCommentsByReferenceId: (id) => ({
    api: commentsPrefix + "getAllCommentsByReferenceId/" + id,
    method: "get",
    baseURL
  }),
  getAllComments: {
    api: commentsPrefix + "getAllComments",
    method: "get",
    baseURL
  },
  deleteComment: (id) => ({
    api: commentsPrefix + "deleteComment/" + id,
    method: "delete",
    baseURL,
  }),
}

export const userApi = {
  register: {
    api: userPrefix + "register",
    method: "post",
    baseURL,
  },
  login: {
    api: userPrefix + "login",
    method: "post",
    baseURL,
  },
}

export const privilegesApi = {
  createPrivilege: {
    api: privilegesPrefix + "createPrivilege",
    method: "post",
    baseURL,
  },
  updatePrivilege: (id) => ({
    api: privilegesPrefix + "updatePrivilege/" + id,
    method: "put",
    baseURL,
  }),
  updatePrivilegePermissionGroup: (id) => ({
    api: privilegesPrefix + "updatePrivilegePermissionGroup/" + id,
    method: "put",
    baseURL,
  }),
  deletePrivilege: (id) => ({
    api: privilegesPrefix + "deletePrivilege/" + id,
    method: "delete",
    baseURL,
  }),
  deletePrivilegeMultiple: {
    api: privilegesPrefix + "deletePrivilegeMultiple",
    method: "post",
    baseURL,
  },
  updatePrivilegesInActive: {
    api: privilegesPrefix + "updatePrivilegesInActive",
    method: "post",
    baseURL,
  },
  updatePrivilegesActive: {
    api: privilegesPrefix + "updatePrivilegesActive",
    method: "post",
    baseURL,
  },
  getAllPrivileges: {
    api: privilegesPrefix + "getAllPrivileges",
    method: "get",
    baseURL,
  },
  getPrivilege: (role) => ({
    api: privilegesPrefix + "getPrivilege/" + role,
    method: "get",
    baseURL,
  }),
};

export const privilegesGroupApi = {
  createPrivilegeGroup: {
    api: privilegesGroupPrefix + "createPrivilegeGroup",
    method: "post",
    baseURL,
  },
  updatePrivilegeGroup: (id) => ({
    api: privilegesGroupPrefix + "updatePrivilegeGroup/" + id,
    method: "put",
    baseURL,
  }),
  deletePrivilegeGroup: (id) => ({
    api: privilegesGroupPrefix + "deletePrivilegeGroup/" + id,
    method: "delete",
    baseURL,
  }),
  deletePrivilegeGroupMultiple: {
    api: privilegesGroupPrefix + "deletePrivilegeGroupMultiple",
    method: "post",
    baseURL,
  },
  updatePrivilegesGroupInActive: {
    api: privilegesGroupPrefix + "updatePrivilegesGroupInActive",
    method: "post",
    baseURL,
  },
  updatePrivilegesGroupActive: {
    api: privilegesGroupPrefix + "updatePrivilegesGroupActive",
    method: "post",
    baseURL,
  },
  getAllPrivilegesGroup: {
    api: privilegesGroupPrefix + "getAllPrivilegesGroup",
    method: "get",
    baseURL,
  },
  getPrivilegeGroup: (role) => ({
    api: privilegesGroupPrefix + "getPrivilegeGroup/" + role,
    method: "get",
    baseURL,
  }),
};

export const okrManagementApi = {
  createOkrLibrary: {
    api: okrManagement + "createOkrLibrary",
    method: "post",
    baseURL,
  },
  createObjectives: {
    api: okrManagement + "createObjectives",
    method: "post",
    baseURL,
  },
  updateOkrLibary: (id) => ({
    api: okrManagement + "updateOkrLibary/" + id,
    method: "put",
    baseURL,
  }),
  deleteOkrLibrary: (id) => ({
    api: okrManagement + "deleteOkrLibrary/" + id,
    method: "delete",
    baseURL,
  }),
  deleteOkrLibraries: {
    api: okrManagement + "deleteOkrLibraries",
    method: "post",
    baseURL,
  },
  getAllOkrLibrary: {
    api: okrManagement + "getAllOkrLibrary",
    method: "get",
    baseURL,
  },
};

export const okrManagement2Api = {
  createOkrTab: {
    api: okrManagement + "createOkrTab",
    method: "post",
    baseURL,
  },
  updateOkrTab: (id) => ({
    api: okrManagement + "updateOkrTab/" + id,
    method: "put",
    baseURL,
  }),
  deleteOkrTab: (id) => ({
    api: okrManagement + "deleteOkrTab/" + id,
    method: "delete",
    baseURL,
  }),
  createObjectivesAndKeyResults: {
    api: okrManagement + "createObjectivesAndKeyResults",
    method: "post",
    baseURL,
  },
  deleteOkrTabs: {
    api: okrManagement + "deleteOkrTabs",
    method: "post",
    baseURL,
  },
  getAllOkrTab: {
    api: okrManagement + "getAllOkrTab",
    method: "get",
    baseURL,
  },
};


export const rewardManagementApi = {
  createReward: {
    api: rewardManagement + "createReward",
    method: "post",
    baseURL,
  },
  updateReward: (id) => ({
    api: rewardManagement + "updateReward/" + id,
    method: "put",
    baseURL,
  }),
  deleteReward: (id) => ({
    api: rewardManagement + "deleteReward/" + id,
    method: "delete",
    baseURL,
  }),
  deleteRewards: {
    api: rewardManagement + "deleteRewards",
    method: "post",
    baseURL,
  },
  getAllRewards: {
    api: rewardManagement + "getAllRewards",
    method: "get",
    baseURL,
  },
};

export const notificationApi = {

  updateNotification: (id) => ({
    api: notificationsPrefix + "updateNotification/" + id,
    method: "put",
    baseURL,
  }),
  updateNotificationKR: (id) => ({
    api: notificationsPrefix + "updateNotificationKR/" + id,
    method: "put",
    baseURL,
  }),
  updateNotificationTask: (id) => ({
    api: notificationsPrefix + "updateNotificationTask/" + id,
    method: "put",
    baseURL,
  }),
  getAllNotifications: {
    api: notificationsPrefix + "getNotifications",
    method: "get",
    baseURL,
  },
  getAllNotificationsCount: (username) => ({
    api: notificationsPrefix + "getNotificationsCount/" + username,
    method: "get",
    baseURL,
  }),
};



export const notificationSettingsApi = {
  createNotificationSettings: {
    api: notificationSettingsPrefix + "createNotificationSettings",
    method: "post",
    baseURL,
  },
  updateNotificationSettings: (id) => ({
    api: notificationSettingsPrefix + "updateNotificationSettings/" + id,
    method: "put",
    baseURL,
  }),
  deleteNotificationSettings: (id) => ({
    api: notificationSettingsPrefix + "deleteNotificationSettings/" + id,
    method: "delete",
    baseURL,
  }),
  deleteNotificationSettingsMultiple: {
    api: notificationSettingsPrefix + "deleteNotificationSettingsMultiple",
    method: "post",
    baseURL,
  },
  updateNotificationSettingsInActive: {
    api: notificationSettingsPrefix + "updateNotificationSettingsInActive",
    method: "post",
    baseURL,
  },
  updateNotificationSettingsActive: {
    api: notificationSettingsPrefix + "updateNotificationSettingsActive",
    method: "post",
    baseURL,
  },
  Countettings: {
    api: notificationSettingsPrefix + "getAllNotificationSettings",
    method: "get",
    baseURL,
  },
  getNotificationSettings: (id) => ({
    api: notificationSettingsPrefix + "getNotificationSettings/" + id,
    method: "get",
    baseURL,
  }),
};