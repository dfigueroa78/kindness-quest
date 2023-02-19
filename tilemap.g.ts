// Auto-generated code. Do not edit.
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "level1":
            case "level1":return tiles.createTilemap(hex`1000100001010101010101010101010101010101010302020202020202020202020202010102020202020202020202020202020101020201020101010101010201020201010202010201020202020102010202010102020102010101020201020102020101020201020202010202010201020201010202010202020102020102010202010102020102020201020201020102020101020201020202010202010201010201010202010202020102020102020202010102020102020201020201020202020101020201020202010202010101020201010202010201010102020202020202010102020202020202020202020202020101010101010101010101010101010101`, img`
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 . . . . . . . . . . . . . . 2 
2 . . . . . . . . . . . . . . 2 
2 . . 2 . 2 2 2 2 2 2 . 2 . . 2 
2 . . 2 . 2 . . . . 2 . 2 . . 2 
2 . . 2 . 2 2 2 . . 2 . 2 . . 2 
2 . . 2 . . . 2 . . 2 . 2 . . 2 
2 . . 2 . . . 2 . . 2 . 2 . . 2 
2 . . 2 . . . 2 . . 2 . 2 . . 2 
2 . . 2 . . . 2 . . 2 . 2 2 . 2 
2 . . 2 . . . 2 . . 2 . . . . 2 
2 . . 2 . . . 2 . . 2 . . . . 2 
2 . . 2 . . . 2 . . 2 2 2 . . 2 
2 . . 2 . 2 2 2 . . . . . . . 2 
2 . . . . . . . . . . . . . . 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
`, [myTiles.transparency16,sprites.dungeon.darkGroundNorthWest0,sprites.dungeon.floorLight0,sprites.dungeon.collectibleInsignia], TileScale.Sixteen);
        }
        return null;
    })

    helpers._registerFactory("tile", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "transparency16":return transparency16;
        }
        return null;
    })

}
// Auto-generated code. Do not edit.
