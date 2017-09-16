
var netstate = function() {
	var state = 0;

	this.init = function(){
		window.addEventListener("online",  function(){ state = 1; }, false);
		//window.addEventListener("offline", function(){ state = 1; }, false);
	};

	this.getstate = function(){
		if(state){
			state = 0;
			return 1;
		}else{
			return 0;
		}
	};

};

module.exports = netstate;

