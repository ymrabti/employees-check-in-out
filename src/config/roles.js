const allRoles = {
    user: [],
    fieldWorker: ['showQr'],
    manager: ['getUsers'],
    admin: ['getUsers', 'manageUsers'],
};

const roles = Object.keys(allRoles);
const roleRights = new Map(Object.entries(allRoles));

module.exports = {
    roles,
    roleRights,
    allRoles,
};
