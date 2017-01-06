/**
 * Created by Administrator on 2016/8/1.
 */

//一个全局对象用来固定表头和判断当前页面所处的菜单位置
var fixTableHead={
    top:0,
    startTop:0,
    isIE:false,
    init:function () {
        var me = this;
        setTimeout(boot, 500);
        var n = 0;
        function boot() {
            n++;
            if (n > 240) { return }
            if ($('div.oe_view_manager_body').length == 1) {
                start();
            } else {
                setTimeout(boot, 500);
            }
        }
        function start() {
            $('div.oe_view_manager_body:first').scroll(function () {
                me.startTop=$('div.oe_view_manager_body').offset().top;
                var offset = $('.oe_view_manager_view_list').offset();
                if(offset){
                    me.top=me.startTop-offset.top;
                    if(offset.top<=me.startTop){
                        $('.oe_view_manager_body:first>div>div.oe_list>table.oe_list_content>thead:first').css("transform","translateY("+me.top+"px)");
                    }else{
                        $('.oe_view_manager_body:first>div>div.oe_list>table.oe_list_content>thead:first').css("transform","translateY(0px)");
                    }
                }
            });
        }
    },
    menuPosition:function () {
        var obj={m1:null,m2:null,m3:null};
        obj.m1=$("ul.navbar-left>li.active>a>span.oe_menu_text").html().trim();
        obj.m2=$("div.oe_secondary_menus_container>div.oe_secondary_menu>ul li.active>a>span.oe_menu_text").html().trim()
        obj.m3=$("ul.oe_view_manager_switch>li.active>a.oe_vm_switch_form").attr("data-view-type");
        return obj;
    }
}
//滚动时固定表头(对象：fixTableHead在web/static/src/js/customScript.js中定义)
$(document).ready(function () {
    fixTableHead.init();
    $("#oe_main_menu_placeholder ul.navbar-left li a").click(function(){
        fixTableHead.init();
    });
    $("div.oe_secondary_menus_container ul.oe_secondary_submenu>li>a").click(function () {
        fixTableHead.init();
    });
});

$(document).ready(function () {
    //设置body的overflow为scroll和媒体查询的meta标签
    var title=$("title").html();
    if(title!=="Homepage | localhost"){
        $("body").css("overflow","auto");
        var $meta=$('<meta name="viewport" content="width=device-width,initial-scale=1"/>');
        $("head").append($meta);
    }

    //侧栏的二级菜单的展开效果
    var menu_node=$(".oe_secondary_menu .oe_secondary_menu_section");
    $(".oe_secondary_menu .oe_secondary_menu_section:first-child").addClass("show");
    $(".oe_secondary_menu ul.nav").css("display","none");
    menu_node.click(function(){
        $(this).toggleClass("show").next("ul.nav").slideToggle(200);
        $(this).siblings(".oe_secondary_menu_section").removeClass("show")
            .next("ul.nav").slideUp(200);
    });

    //侧栏收缩按钮
    var $btn=$("<div class='btn_hid' title='点击此处隐藏侧栏！'></div>");
    $btn.click(function(){
        if(this.className=="btn_hid"){
            var width=$(this).parent().css("width");
            $(this).parent().animate({"margin-left":"-"+width},150);
            this.className="btn_show";
            this.title="点击此处显示侧栏！";
        }else{
            $(this).parent().animate({"margin-left":"0px"},150);
            this.className="btn_hid";
            this.title="点击此处隐藏侧栏！";
        }
    });
    $(".openerp .oe_leftbar > div").append($btn);

    //搜索中高级搜索的点击事件重定义
    function red(){
        var n=0;
        var timer=setInterval(function(){
            n++;
            var $search=$(".oe_searchview_unfold_drawer");
            if($search.length==1||n>120){
                clearInterval(timer);
                $search.click(function(e){
                    $(".oe_searchview_drawer").css({"position":"relative","top":"-140px"});
                    $(".oe_searchview_drawer").animate({"top":"0"},200);
                });
            }
        },500);
    }
    red();
    $("#oe_main_menu_placeholder ul.navbar-left li a").click(function(){
        $(".oe_secondary_menu .oe_secondary_menu_section:first-child").addClass("show");
        $(".oe_secondary_menu .oe_secondary_menu_section:first-child")
            .siblings(".oe_secondary_menu_section").removeClass("show")
            .next("ul.nav").css("display","none");
        red();
    });
    //自定义返回按钮动作
    $("body").on("click","button.backBtnSelf",function(){
        window.history.go(-1);
    });
});
