Setup={init:function(){var e="http://scmanifesto-stage.herokuapp.com/",t="http://manifesto.softwarecraftsmanship.org/",n="http://localhost:3000/",r="";$.ajaxSetup({dataType:"json",beforeSend:function(e){e.setRequestHeader("accept","application/json")}}),$.postJSON=function(e,t){return $.ajax({url:r+e,type:"POST",data:JSON.stringify(t),contentType:"application/json; charset=UTF-8"})},$.fetchJSON=function(e){return $.ajax({url:r+e,type:"GET",contentType:"application/json; charset=UTF-8"})},$.fetchStaticJSON=function(e){return $.ajax({url:e,type:"GET",contentType:"application/json; charset=UTF-8"})}}};