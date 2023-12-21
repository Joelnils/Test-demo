import {getUsers,getGroups } from "./users"
describe('Async Data Functions Tests', () => {
    describe('getUsers', () => {
        it('should return a list of users', async () => {
            const users = await getUsers();
            expect(users).toEqual([
                { "name": "Erik", "group": 1 },
                { "name": "Lisa", "group": 2 },
                { "name": "Hampus", "group": 2 },
                { "name": "Linda", "group": 3 },
                { "name": "Eva", "group": 1 },
                { "name": "Anna", "group": 3 }
            ]);
        });
    });

    describe('getGroups', () => {
        it('should return a list of groups', async () => {
            const groups = await getGroups();
            expect(groups).toEqual([
                { "id": 1, "groupName": "Hajarna" },
                { "id": 2, "groupName": "Valarna" },
                { "id": 3, "groupName": "Zebrorna" }
            ]);
        });
    });
});