angular.module('core.filters').filter('countK', function () {
    return function (input) {
    	if (input < 1){
    		return '-'
    	}
    	else{
        	var count = parseFloat(input) / parseFloat(1000);
        	count = Math.round( count * 10 ) / 10 +'k'; 
        	return count;
        }
    }
})