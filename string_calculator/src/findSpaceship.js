// findSpaceship.js

function findSpaceship(map) {
    if (map === "") {
        return "Spaceship lost forever.";
    }

    const rows = map.split('\n');
    for (let i = 0; i < rows.length; i++) {
        const col = rows[i].indexOf('X');
        if (col !== -1) {
            return [i, col];
        }
    }
    return "Spaceship lost forever.";
}
