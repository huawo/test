$(function(){
  //滚动触发函数scroll
  $(window).scroll(function(){
    var f=1000;
    //取最小值函数math.min 
    var m=Math.min(document.documentElement.scrollTop||
      document.body.scrollTop,f)/f;
    $(".header").css("background","rgba(0,0,0,"+m+")")


  })
 


	$(".htabs").tabs( );
  var vm=new Vue({
  	el:".hvue",
  	data:{
  		msg:"双向绑定"
  	}
  });


// var a=1;
// while(a<10){
// 	alert(a);
// 	a++;

// }

function hua(){
var hua=["茄子","哪款","阿萨德","asd"];
for(var h=0;h<hua.length;h++){
	alert(hua[h])
}


};


// hua();



function hh(num1,num2){
	var total=num1*num2;
	return total;

}; 

// alert(hh(2,3))







// var cym=11;
// function a(){
// 	 cym=12;
	
// };

// alert(cym)


 
















 })