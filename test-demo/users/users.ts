export function getUsers(): Promise<any[]> {
    return Promise.resolve([
        { "name": "Erik", "group": 1 },
        { "name": "Lisa", "group": 2 },
        { "name": "Hampus", "group": 2 },
        { "name": "Linda", "group": 3 },
        { "name": "Eva", "group": 1 },
        { "name": "Anna", "group": 3 }
    ]);
}

export function getGroups(): Promise<any[]> {
    return Promise.resolve([
        { "id": 1, "groupName": "Hajarna" },
        { "id": 2, "groupName": "Valarna" },
        { "id": 3, "groupName": "Zebrorna" }
    ]);
}
