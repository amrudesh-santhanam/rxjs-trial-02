var Rx = require('rx-lite');

var source = Rx.Observable.create(function(observer){
	var id = setTimeout(function(){
		observer.onNext(12);
		observer.onNext(15);
	}, 500);
	setTimeout(function(){
		observer.onCompleted();
	}, 1000);

	return function(){
		console.log('disposing source');
		clearTimeout(id);
	};
});

var sub = source.subscribe(function(x){
	console.log(x);
}, function (err){
	console.log(error);
}, function(){
	console.log('Completed');
});

setTimeout(function(){
	sub.dispose();
}, 750);

