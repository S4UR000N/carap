export default Object.defineProperty(Array.prototype, 'chunk', {
    value: function(chunkSize) {
        var that = this;
        return Array(Math.ceil(that.length/chunkSize)).fill().map(function(_,i){
            return that.slice(i*chunkSize,i*chunkSize+chunkSize);
        });
    }
});
/**
 * Define the chunk method in the prototype of an array
 * that returns an array with arrays of the given size.
 *
 * @param chunkSize {Integer} Size of every group
 */
/** Usage
 * Split in group of 3 items
 * result = [1,2,3,4,5,6,7,8].chunk(3);
 * console.log(result);
 * Outputs : [ [1,2,3], [4,5,6], [7,8] ]
 */
