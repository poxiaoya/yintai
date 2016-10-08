window.onload=function(){
 var banner_btn=document.getElementsByClassName("btn")
      var banner_images=document.getElementsByClassName("banner-item")
      var banner_box=document.getElementsByClassName("banner-box")[0]
      var banner_color=["#A5D6F6","#F6F6F4","#008ACB","#EC3C3C",];
      for (var i = 0; i < banner_btn.length; i++) {
            banner_btn[i].index=i;
            banner_btn[i].onmouseover=function(){
                  num=this.index;
                  for (var i = 0; i < banner_btn.length; i++) {
                        banner_images[i].style.zIndex=1;
                        banner_btn[i].style.backgroundColor="#211616";
                  };
                  banner_box.style.backgroundColor=banner_color[this.index];
                  banner_images[this.index].style.zIndex=2;
                  this.style.backgroundColor="#e5004f";
            }
      };
      // 动画
      var lunbo=setInterval(move,3000)
      var num=0;
      function move(){
            num++; 
            if (num==4) {
                  num=0;
            }
            for (var i = 0; i < banner_btn.length; i++) {
                  banner_images[i].style.zIndex=1;
                  banner_btn[i].style.backgroundColor="#211616"
            };
            banner_box.style.backgroundColor=banner_color[num];
            banner_images[num].style.zIndex=2;
           banner_btn[num].style.backgroundColor="#e5004f";
      }
      banner_box.onmouseover=function(){
            clearInterval(lunbo)
      }
      banner_box.onmouseout=function(){
            lunbo=setInterval(move,3000)
      }


//内容轮播效果
            var box=getClass("box");
            var leftbtn=getClass("leftbtn");
            var rightbtn=getClass("rightbtn");
            var btnbox=getClass("btnbox");
            var inner=getClass("inner");
            for (var i = 0; i < box.length; i++) {
                  lunbo2(box[i],leftbtn[i],rightbtn[i],btnbox[i],inner[i])
            };
     function lunbo2(box,leftbtn,rightbtn,btnbox,inner){
      var circles=btnbox.getElementsByTagName("div");
            var flag=true;
            //
            box.onmouseover=function(){
                  animate(leftbtn,{left:0},200)
                  animate(rightbtn,{right:0},200)
            }
            box.onmouseout=function(){
                  animate(leftbtn,{left:-31},200)
                  animate(rightbtn,{right:-31},200)
            }
            //鼠标移入移出箭头让箭头颜色改变的
            leftbtn.onmouseover=function(){
                  this.style.backgroundPosition="left bottom";
            }
            rightbtn.onmouseover=function(){
                  if (flag) {
                  this.style.backgroundPosition="right bottom";
               }
            }
        leftbtn.onmouseout=function(){
                  this.style.backgroundPosition="left top";
            }
            rightbtn.onmouseout=function(){
                  this.style.backgroundPosition="right top";
            }
            rightbtn.onclick=moveright;
            leftbtn.onclick=moveleft;
            circles[0].onclick=moveleft;
            circles[1].onclick=moveright;
            function moveright(){
                  flag=false;
             animate(inner,{marginLeft:-390})
             circles[0].style.background="#555"
             circles[1].style.background="#e5004f"
            }
            
            function moveleft(){
                  flag=true;
             animate(inner,{marginLeft:0})
             circles[1].style.background="#555"
             circles[0].style.background="#e5004f"
            }
       }   
         
//内容1
        var neirongd1s=getClass("neirong-d1")
        var neironggs=getClass("neirong-g");
        var neirongd2s=getClass("neirong-d2");
        for (var i=0;i<neirongd1s.length;i++) {
          neirongd1s[i].onmouseover=(function(aa){
                function bb(){
                  for (var i = 0; i < neirongd1s.length; i++) {
                    neironggs[i].style.display="none"
                    neirongd1s[i].style.borderColor=""
                    neirongd2s[i].style.opacity=0
                    neirongd1s[i].style.color=""
                  };
                  neironggs[aa].style.display="block"
                  neirongd1s[aa].style.borderColor="#e5004f"
                  neirongd2s[aa].style.opacity=0
                  neirongd1s[aa].style.color="#e5004f"
                }
                return bb
          })(i)
        }

//内容2
 var neirong4d2s=getClass("neirong4-d2")
        var neirong4gs=getClass("neirong4-d");
        var neirong4d2as=getClass("neirong4-d2a");
        for (var i=0;i<neirong4d2s.length;i++) {
          neirong4d2s[i].onmouseover=(function(aa){
                function bb(){
                  for (var i = 0; i < neirong4d2s.length; i++) {
                    neirong4gs[i].style.display="none"
                    neirong4d2s[i].style.borderColor=""
                    neirong4d2as[i].style.opacity="0"
                    neirong4d2s[i].style.color=""

                  };
                  neirong4gs[aa].style.display="block"
                  neirong4d2s[aa].style.borderColor="#e5004f"
                  neirong4d2as[aa].style.opacity="0"
                   neirong4d2s[aa].style.color="#e5004f"
                }
                return bb
          })(i)
        }
 // $(function(){
      function border(obj,time){
           obj.style.position="resative";
           var div1=document.createElement("div");
           var div2=document.createElement("div");
           var div3=document.createElement("div");
           var div4=document.createElement("div");
           div1.style.cssText="position:absolute;background:#000;left:-1px;top:-1px;height:1px;"
           div2.style.cssText="position:absolute;background:#000;left:-1px;top:-1px;width:1px;"
           div3.style.cssText="position:absolute;background:#000;right:-1px;bottom:-1px;height:1px;"
           div4.style.cssText="position:absolute;background:#000;right:-1px;bottom:-1px;width:1px;"
           obj.appendChild(div1)
           obj.appendChild(div2)
           obj.appendChild(div3)
           obj.appendChild(div4)
           var width=parseInt(getStyle(obj,"width"))+2;
           var height=parseInt(getStyle(obj,"height"))+2;
           obj.onmouseover=function(){
               animate(div1,{width:width},time)
               animate(div2,{height:height},time)
               animate(div3,{width:width},time)
               animate(div4,{height:height},time)
           }
           obj.onmouseout=function(){
               animate(div1,{width:0},time)
               animate(div2,{height:0},time)
               animate(div3,{width:0},time)
               animate(div4,{height:0},time)
           }
      }
      var one=$(".neirong-h")
      for (var i = 0; i < one.length; i++) {
         border(one[i],500)
      };
      var three=$(".neirong-i")
      for (var i = 0; i < three.length; i++) {
        border(three[i],500)
      };
      var four=$(".neirong-j")
      for (var i = 0; i < four.length; i++) {
        border(four[i],500)
      };
      var five=$(".neirong-k")
      for (var i = 0; i < five.length; i++) {
        border(five[i],500)
      };
      var two=$(".neirong6-f1")
      for (var i = 0; i < two.length; i++) {
         border(two[i],500)
      };
     
     
     
     
      
        var totop=$(".celan10")[0];
        var floor=$(".celan-box")[0];
        totop.onclick=function(){
          obj=document.body.scrollTop==0?document.documentElement:document.body;
        animate(obj,{scrollTop:0})
      }
        document.documentElement.scrollTop=1;
        if (document.documentElement.scrollTop==1) {
          var scrollobj=document.documentElement;
        }else{
          var scrollobj=document.body;
        }
        var flag=true;
        var flag2=true;
        on(window,"scroll",function(){
          obj=document.body.scrollTop==0?document.documentElement:document.body;
          var st=scrollobj.scrollTop;
          if (st>350) {
            if (flag) {
              flag=false;flag2=true;
            animate(floor,{width:50,height:550},100)
          };
        }else{
          if (flag2) {
            flag=true;flag2=false;
            animate(floor,{width:0,height:0},100)
          };
        }
      })
    // 
        
        var ce=$(".ce");
        var nr6nr=$(".neirong6-box");
        for (var i = 0; i < ce.length; i++) {
          ce[i].index=i;
          ce[i].onclick=function(){
            var to=nr6nr[this.index].offsetTop;
            this.style.background="#e1004a"
            animate(scrollobj,{scrollTop:to},500)
          }
        };
        on(window,"scroll",function(){
          var ht=scrollobj.scrollTop;
          for (var i = 0; i < ce.length; i++) {
            if (ht+200>nr6nr[i].offsetTop) {
              for (var j = 0; j < ce.length; j++) {
                ce[j].style.opacity=0;
              };
              ce[i].style.opacity=1;
            };
          }
        })
        var tu=$(".tu")
        tu.onmouseover=function(){
          ce.style.opacity=0
        }
        tu.onmouseout=function(){
          ce.style.opacity=1;
        }
          
     
//微信下拉
 var shangjia=$(".lists")[0];
       var xldk=$(".nav2s")[0];
       shangjia.onmouseover=function(){
          xldk.style.display="block";
       }
       shangjia.onmouseout=function(){
        xldk.style.display="none";
       }

var dbxl=$(".dinbu-e")[0];
       var wbxl=$(".weiboxia")[0];
       dbxl.onmouseover=function(){
          wbxl.style.display="block";
       }
       dbxl.onmouseout=function(){
        wbxl.style.display="none";
       }

 //
 var dinbu=$(".dinbu-f5");
         var xiala=$(".xiala");
         for (var i = 0; i < xiala.length; i++) {
          var ols=$("ol",xiala[i]);
          var height=ols.length*24;
          xiala[i].height=height;
         };
         for (var i = 0; i < dinbu.length; i++) {
          dinbu[i].index=i;
          hover(dinbu[i],function(){
          xiala[this.index].style.display="block";  
          animate(xiala[this.index],{height:xiala[this.index].height},100)
          },function(){
            xiala[this.index].style.display="none";
            xiala[this.index].style.height="0"
          })            
            
       };    
       //banner
       var bannera=$(".banner-b1");
         var ycla=$(".ycla");
         for (var i = 0; i < ycla.length; i++) {
          var lis=$("li",ycla[i]);
          var width=lis.length*500;
          ycla[i].width=width;
         };
         for (var i = 0; i < bannera.length; i++) {
          bannera[i].index=i;
          hover(bannera[i],function(){
          ycla[this.index].style.display="block";  
          animate(ycla[this.index],{width:ycla[this.index].width},100)
          },function(){
            ycla[this.index].style.display="none";
            ycla[this.index].style.width="0"
          })            
            
       };   

       //
       var neirong=$(".neirong6-d1");
      var zuo=$(".zuo");
      var you=$(".you");
      for (var i = 0; i < neirong.length; i++) {
        lunboa(neirong[i],zuo[i],you[i])
      };
      function lunboa(neirong,zuo,you){
        you.onclick=function(){
          animate(neirong,{marginLeft:-210},1000,
            function(){
              var first=getFirst(this);
              this.appendChild(first)
              this.style.marginLeft=0;
            })
        }
        zuo.onclick=function(){
          var last=getLast(neirong);
          var first=getFirst(neirong);
          neirong.insertBefore(last,first)
          neirong.style.marginLeft="-210px"
          animate(neirong,{marginLeft:0},1000)
        }
      }

//侧栏返回顶部
var obj=document.documentElement;
      var celan10=$(".celan10")[0];
      celan10.onclick=function(){
          obj=document.body.scrollTop==0?document.documentElement:document.body;
        animate(obj,{scrollTop:0})
      }


//图片加载
var florss=$(".florss");
  var arr=[];
     for (var i = 0; i < florss.length; i++) {
      arr.push(florss[i].offsetTop)
     };
     // alert(arr) 给空数组添加每一组图片距离浏览器顶部的距离
    var doc=document.body;
     doc.scrollTop=1;
     if (doc.scrollTop!=1) {
      doc=document.documentElement;
     };
    var h=document.documentElement.clientHeight;
     on(window,"scroll",function(){
      var str=doc.scrollTop;
      // console.log(str)
      for (var i = 0; i < florss.length; i++) {
        if (str+h>arr[i]&&florss[i].getAttribute("flag")!="true") {
          var imgs=$("img",florss[i]);
          
                    for (var j = 0; j < imgs.length; j++) {
            imgs[j].src=imgs[j].getAttribute("asrc")
          };
          florss[i].setAttribute("flag",true)
        };
      };
     })
}