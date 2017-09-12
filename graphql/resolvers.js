
//Database
//Static Database
const groups = [
    {
        id: 1,
        name: 'JavaScript',
        messages: []
    },
    {
        id: 2,
        name: 'Developer Deck 101',
        messages: [{
            id: 1,
            text: 'Best channel ever ;)'
        }]
    }
];

const resolvers = {
    Query: {
        groups: () => groups,
        group: (root, args) => {
            return groups.find(grp => grp.id == args.id)
        }
    },
    Mutation: {
        sendMessage: (root, {message, groupId}) => {
            let group = groups.find(grp => grp.id == groupId)
            let msg = {
                id: group.messages.length + 1,
                text: message
            }
            group.messages.push(msg);
            return msg;
        },
        addGroup: (root, {name}) => {
            let grp = {
                id: groups.length + 1,
                name: name,
                messages: []
            }
            groups.push(grp)
            return grp;
        }
    }
};
module.exports = resolvers;
