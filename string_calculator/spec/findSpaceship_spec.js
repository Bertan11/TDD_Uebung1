// findSpaceship.spec.js


describe('findSpaceship', function() {
    it('should return Spaceship lost forever of the spaceship when map is empty', function() {
        const map = "";
        expect(findSpaceship(map)).toEqual("Spaceship lost forever.");
    });
    
  
});

