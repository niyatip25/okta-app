export const jsonAPI = [
  {
    sourceId: "oty10ivhqh4N3zmJS0h8",
    targetId: "otytfzsylagYx8OiQ0h7",
    propertyMappings: [
      {
        targetField: "city",
        sourceExpression: "appuser.city",
        pushStatus: "DONT_PUSH",
        sensitive: false,
      },
      {
        targetField: "countryCode",
        sourceExpression: "Iso3166Convert.toAlpha2(appuser.country)",
        pushStatus: "DONT_PUSH",
        sensitive: false,
      },
      {
        targetField: "department",
        sourceExpression: "appuser.department",
        pushStatus: "DONT_PUSH",
        sensitive: false,
      },
      {
        targetField: "displayName",
        sourceExpression: "appuser.displayName",
        pushStatus: "DONT_PUSH",
        sensitive: false,
      },
      {
        targetField: "firstName",
        sourceExpression: "appuser.givenName",
        pushStatus: "DONT_PUSH",
        sensitive: false,
      },
      {
        targetField: "title",
        sourceExpression: "appuser.jobTitle",
        pushStatus: "DONT_PUSH",
        sensitive: false,
      },
      {
        targetField: "email",
        sourceExpression:
          "(appuser.mail != null) ? appuser.mail : appuser.userPrincipalName",
        pushStatus: "DONT_PUSH",
        sensitive: false,
      },
      {
        targetField: "mobilePhone",
        sourceExpression: "appuser.mobilePhone",
        pushStatus: "DONT_PUSH",
        sensitive: false,
      },
      {
        targetField: "profileUrl",
        sourceExpression: "appuser.mySite",
        pushStatus: "DONT_PUSH",
        sensitive: false,
      },
      {
        targetField: "zipCode",
        sourceExpression: "appuser.postalCode",
        pushStatus: "DONT_PUSH",
        sensitive: false,
      },
      {
        targetField: "preferredLanguage",
        sourceExpression: "appuser.preferredLanguage",
        pushStatus: "DONT_PUSH",
        sensitive: false,
      },
      {
        targetField: "nickName",
        sourceExpression: "appuser.preferredName",
        pushStatus: "DONT_PUSH",
        sensitive: false,
      },
      {
        targetField: "state",
        sourceExpression: "appuser.state",
        pushStatus: "DONT_PUSH",
        sensitive: false,
      },
      {
        targetField: "streetAddress",
        sourceExpression: "appuser.streetAddress",
        pushStatus: "DONT_PUSH",
        sensitive: false,
      },
      {
        targetField: "lastName",
        sourceExpression: "appuser.surname",
        pushStatus: "DONT_PUSH",
        sensitive: false,
      },
      {
        targetField: "login",
        sourceExpression: "appuser.userPrincipalName",
        pushStatus: "DONT_PUSH",
        sensitive: true,
      },
      {
        targetField: "userType",
        sourceExpression: "appuser.userType",
        pushStatus: "DONT_PUSH",
        sensitive: true,
      },
    ],
  },
];
