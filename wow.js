$(function(){

   var croc = Snap.select("#crocodile"),
                head = croc.select("#upper-head"),
                jaw = croc.select("#upper-jaw"),
                symbol = croc.select("#symbol"),
                timer;
                
            var pivots = [
                [44, 147],
                [92, 126]
            ];

            function close() {
                clearTimeout(timer);

                head.animate({ 
                    transform: "r" + [8, pivots[0]]
                }, 500, mina.backin);
                
                jaw.animate({
                    transform: "r" + [37, pivots[1]]
                }, 500, mina.backin);

                timer = setTimeout(function () {
                    symbol.animate({
                        transform: "t-70,40r40"
                    }, 100);
                }, 400);
            }

            function open() {
                clearTimeout(timer);

                head.animate({ 
                    transform: "r" + [0, pivots[0]]
                }, 700, mina.elastic);
                
                jaw.animate({
                    transform: "r" + [0, pivots[1]]
                }, 700, mina.elastic);

                symbol.animate({
                    transform: "t0,0r0"
                }, 500, mina.elastic);
            }

            timer = setTimeout(close, 50);

            croc.hover(open, 
                function () {
                    timer = setTimeout(close, 200);
                }
            );




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

//二月九号，贞儿终于答应我一起生活 
 
















 })