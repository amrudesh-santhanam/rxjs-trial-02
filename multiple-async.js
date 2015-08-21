var Rx = require('rx-lite');

console.log('Multiple Async process:\n----------------------');

var asyncCall1 = Rx.Observable.create(function(observer){
	setTimeout(function(){
		observer.onNext(1);
		observer.onCompleted();
	},200);
});

var asyncCall2 = Rx.Observable.create(function(observer){
	setTimeout(function(){
		observer.onNext(2);
		observer.onCompleted();
	},400);
});

var asyncCall3 = Rx.Observable.create(function(observer){
	setTimeout(function(){
		observer.onNext(3);
		observer.onCompleted();
	},600);
});

calls = [asyncCall1,asyncCall2,asyncCall3];

var compositeAsyncCall = Rx.Observable.fromArray(calls).mergeAll();

var sub = compositeAsyncCall.subscribe(function(x){
	console.log('Finished action: ' + x);
}, function (error){
	console.log(error);
}, function(){
	console.log('Completed all \n');
});
