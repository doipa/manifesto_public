$(document).ready(function(){Setup.init(),Partials.init(),Manifesto.init(),YUI().use("router",function(e){var t=new e.Router({html5:!1,root:"/",routes:[{path:"/",callbacks:function(){Manifesto.translate("en")}},{path:"/de",callbacks:function(){Manifesto.translate("de")}},{path:"/en",callbacks:function(){Manifesto.translate("en")}},{path:"/es",callbacks:function(){Manifesto.translate("es")}},{path:"/zh-cn",callbacks:function(){Manifesto.translate("zh-cn")}},{path:"/tr",callbacks:function(){Manifesto.translate("tr")}},{path:"/reading",callbacks:function(){Manifesto.toggleReading()}},{path:"/sign",callbacks:function(){Manifesto.toggleSignForm()}}]});t.get("html5")?t.upgrade():t.dispatch()})});