// findSpaceship.spec.js


describe('findSpaceship', function() {
    it('should return Spaceship lost forever of the spaceship when map is empty', function() {
        const map = "";
        expect(findSpaceship(map)).toEqual("Spaceship lost forever.");
    });
});

describe('findSpaceship', function() {
    it('should correctly find the spaceship at the top left corner of the map', function() {
        const mapWithSpaceshipAtTopLeft = "X.......\n........\n........\n........";
        expect(findSpaceship(mapWithSpaceshipAtTopLeft)).toEqual([0, 0]);
    });
});

describe('findSpaceship', function() {
    it('should correctly find the spaceship at the bottom right corner of the map', function() {
        const mapWithSpaceshipAtTopRight = "........\n........\n........\n........";

        expect(findSpaceship(mapWithSpaceshipAtTopRight)).toEqual("Spaceship lost forever.");
    });
});


