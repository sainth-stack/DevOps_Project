const initialState = {
  privilegeGroup: {
    groupName: "",
    groupMembers: [
      { categoryName: "", categoryValues: [], categoryValue: "", categoryValueText: "" }
    ],
    excludeGroupMembers: [
      { categoryName: "", categoryValues: [], categoryValue: "", categoryValueText: "" }
    ],
    activeGroupMembers: [],
    actualActiveGroupMembers: [],
    inActiveGroupMembers: [],
  },
};

const previlegesGroup = (state = initialState, { type, payload }) => {
  switch (type) {
    case "UPDATE_PRIVILEGE_GROUP": {
      return { ...state, privilegeGroup: payload }
    }
    default:
      return state;
  }
};

export default previlegesGroup;