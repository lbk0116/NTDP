/**
 * Created by Administrator on 2016/8/1.
 */

//js生成使用流程页面
$(document).ready(function(){
    var n=0;
    var timer=setInterval(function () {
        n++;
        if(n>240){
            clearInterval(timer);
            return;
        }
        var $last=$("div.oe_im_content");
        if($last.length===1){
            clearInterval(timer);
            // init();
        }
    },500)
    function init() {
        var projectId;
        $("ul.navbar-nav.navbar-left>li>a>span").each(function (i,v) {
            if($(v).html().trim()==="人力资源"||$(v).html().trim()==="Human Resources"){
                $(v).parents("li").attr('data-name','hr');
            }else if($(v).html().trim()==="项目"||$(v).html().trim()==="Project"){
                $(v).parents("li").attr('data-name','project');
                projectId=$(v).parent("a").attr("data-menu");
            }
        });
        $(".oe_secondary_menu[data-menu-parent="+projectId+"] a.oe_menu_leaf span").each(function (i,v) {
            if($(v).html().trim()==="合同"||$(v).html().trim()==="nantian_contract"){
                $(v).parents("li").attr('data-name','contract');
            }else if($(v).html().trim()==="服务客户"||$(v).html().trim()==="partner"){
                $(v).parents("li").attr('data-name','partner');
            }else if($(v).html().trim()==="工作组"||$(v).html().trim()==="Products"){
                $(v).parents("li").attr('data-name','wordGroup');
            }
        });
        if(!localStorage.isLoaded){
           popBox();
        }
    }
    function popBox() {
        var $discover=$('<div class="discover"></div>');
        $('body').append($discover);
        var $dialog=$('<div class="modal" style="display: block" data-backdrop="static">'+
            '<div class="modal-dialog">'+
                '<div class="modal-content">'+
                    '<div class="modal-header">'+
                        '<h4 class="modal-title">温馨提醒:</h4>'+
                    '</div>'+
                    '<div class="modal-body">'+
                        '<p>感谢您使用我们的系统，如果您是第一次登陆，可点击 <a href="#">此处使用向导</a>来帮助您完成操作，如果是已经知道如何操作，点击我知道了按钮退出向导！</p>'+
                    '</div>'+
                    '<div class="modal-footer" style="text-align: right">'+
                        '<button type="button" class="btn btn-info">以后再说！</button>'+
                        '<button type="button" class="btn btn-warning">我知道了，不必再提醒了！</button> '+
                    '</div>'+
                '</div>'+
            '</div>'+
        '</div>');
        $('body').append($dialog);
        $dialog.find("div.modal-body a").click(function (e) {
           var e=e||event;
           e.preventDefault();
           statr();
       });
       $dialog.find("div.modal-footer>.btn-info").click(dismiss);
       $dialog.find("div.modal-footer>.btn-warning").click(function () {
           localStorage.isLoaded=true;
           dismiss();
       });
        function dismiss() {
           $dialog.slideUp('normal',function () {
               $dialog.remove();
           });
           $discover.fadeOut('normal',function () {
               $discover.remove();
           });
        }
        function statr() {
            $dialog.find("h4.modal-title").html("请选择模块名称");
            $dialog.find("div.modal-body").html(
                "<button class='btn btn-success' style='margin:5px 10px' data-click='hr'>人力资源</button>"+
                "<button class='btn btn-success' style='margin:5px 10px' data-click='work-group'>工作组</button>"+
                "<button class='btn btn-success' style='margin:5px 10px' data-click='contract'>合同</button>"+
                "<button class='btn btn-success' style='margin:5px 10px' data-click='partner'>服务客户</button>"
            );
            $("button[data-click]").click(function () {
                var dc=$(this).attr("data-click");
                if(dc=="hr"){
                    showIllustrate(hrList,0);
                    dismiss();
                }else if(dc=="work-group"){
                    showIllustrate(projectList,0);
                    dismiss();
                }else if(dc=="contract"){
                    showIllustrate(contractList,0);
                    dismiss();
                }else if(dc=="partner"){
                    showIllustrate(partnerList,0);
                    dismiss();
                }
            });
        }
        //用来保存hr点击的路径
        var hrList=[
            {x:0,y:0,needTrigger:true,needScroll:["",0],tar:"li[data-name=hr]>a",html:"点击此处 切换到人力资源视图!",imgDir:false},
            {x:0,y:0,needTrigger:false,needScroll:["",0],tar:"ul.nav>li.active>a.oe_menu_leaf>span.oe_menu_text",html:"点击此处 查看员工信息!",imgDir:false},
            {x:0,y:0,needTrigger:false,needScroll:["",0],tar:"div.oe_searchview_unfold_drawer[title]",html:"点击此处 进行高级搜索和过滤!",imgDir:true},
            {x:0,y:0,needTrigger:true,needScroll:["",0],tar:"table.oe_list_content tr[data-id]:first",html:"点击此处 查看个人和团队信息!",imgDir:false},
            {x:0,y:0,needTrigger:true,needScroll:["",0],tar:".oe_view_manager_buttons button.oe_form_button_edit",html:"点击此处 编辑个人信息!",imgDir:false},
            {x:0,y:0,needTrigger:true,needScroll:["div.oe_view_manager_body:first",200],tar:"ul.oe_notebook>li:nth-child(2)>a.ui-tabs-anchor",html:"点击此处 编辑团队信息!",imgDir:false},
            {x:0,y:0,needTrigger:false,needScroll:["div.oe_view_manager_body:first",600],tar:".oe_form_label:eq(26)",html:"点击此处 编辑工作组归属!",imgDir:false},
            null,
            null,
        ];
        //用来保存工作组点击的路径
        var projectList=[
            {x:0,y:0,needTrigger:true,needScroll:["",0],tar:"li[data-name=project]>a",html:"点击此处 切换到项目视图!",imgDir:false},
            {x:0,y:0,needTrigger:true,needScroll:["",0],tar:"li[data-name=wordGroup]>a",html:"点击此处 修改和查看工作组信息!",imgDir:false},
            {x:0,y:0,needTrigger:false,needScroll:["",0],tar:"div.oe_searchview_unfold_drawer[title]",html:"点击此处 进行高级搜索和过滤!",imgDir:true},
            {x:0,y:0,needTrigger:true,needScroll:["",0],tar:"table.oe_list_content tr[data-id]:first",html:"点击此处 查看工作组详细信息!",imgDir:false},
            {x:0,y:0,needTrigger:true,needScroll:["",0],tar:".oe_view_manager_buttons button.oe_form_button_edit",html:"点击此处 编辑工作组信息!",imgDir:false},
            null,
            null,
        ];
        //用来保存客户点击的路径
        var partnerList=[
            {x:0,y:0,needTrigger:true,needScroll:["",0],tar:"li[data-name=project]>a",html:"点击此处 切换到项目视图!",imgDir:false},
            {x:0,y:0,needTrigger:true,needScroll:["",0],tar:"li[data-name=partner]>a",html:"点击我，查看和修改客户信息!",imgDir:false},
            {x:0,y:0,needTrigger:false,needScroll:["",0],tar:"div.oe_searchview_unfold_drawer[title]",html:"点击此处 进行高级搜索和过滤!",imgDir:true},
            {x:0,y:0,needTrigger:true,needScroll:["",0],tar:"table.oe_list_content tr[data-id]:first",html:"点击此处 查看服务客户信息!",imgDir:false},
            {x:0,y:0,needTrigger:true,needScroll:["",0],tar:".oe_view_manager_buttons button.oe_form_button_edit",html:"点击此处 编辑服务客户信息!",imgDir:false},
            null,
            null,
        ];
        //用来保存合同点击的路径
        var contractList=[
            {x:0,y:0,needTrigger:true,needScroll:["",0],tar:"li[data-name=project]>a",html:"点击此处 切换到项目视图!",imgDir:false},
            {x:0,y:0,needTrigger:true,needScroll:["",0],tar:"li[data-name=contract]>a",html:"点击我，查看和修改合同信息!",imgDir:false},
            {x:0,y:0,needTrigger:false,needScroll:["",0],tar:"div.oe_searchview_unfold_drawer[title]",html:"点击此处 进行高级搜索和过滤!",imgDir:true},
            {x:0,y:0,needTrigger:true,needScroll:["",0],tar:"table.oe_list_content tr[data-id]:first",html:"点击此处 查看合同详细信息!",imgDir:false},
            {x:0,y:0,needTrigger:true,needScroll:["",0],tar:".oe_view_manager_buttons button.oe_form_button_edit",html:"点击此处 编辑合同信息!",imgDir:false},
            null,
            null,
        ];

        function showIllustrate(obj,n) {
            var that=arguments.callee;
            var l=obj.length;
            //打印流程元素
            obj[l-2]=$('<div class="discover1"></div>');
            $('body').append(obj[l-2]);
            var sel=obj[n].needScroll[0];
            if(sel){
                $(sel).scrollTop(obj[n].needScroll[1]);
            }
            var num=0;
            var timer=setInterval(function () {
                var p=$(obj[n].tar).offset();
                num++;
                if(p){
                    clearInterval(timer);
                    obj[l-1]=$('<div class="tip"></div>');
                    obj[l-1].css("background","url('/webstyle/static/src/img/guideL.png') no-repeat");
                    obj[n].x=p.left+$(obj[n].tar).width()/2;
                    if(obj[n].imgDir){
                        obj[n].x-=177;
                        obj[l-1].css("background","url('/webstyle/static/src/img/guideR.png') no-repeat");
                    }
                    obj[n].y=p.top+$(obj[n].tar).height();
                    obj[l-1].html(obj[n].html);
                    obj[l-1].css({
                        "left":obj[n].x+"px",
                        "top":obj[n].y+"px"
                    });
                    $('body').append(obj[l-1]);
                    //添加元素点击事件
                    obj[l-1].click(function (e) {
                        obj[l-2].remove();
                        obj[l-1].remove();
                        if(obj[n].needTrigger){
                            $(obj[n].tar).trigger("click");
                        }
                        if(n===(l-3)){return;}
                        that(obj,n+1);
                    });
                }else if(num>15){
                    clearInterval(timer);
                    obj[l-1]=$('<div class="modal" style="display: block" data-backdrop="static">'+
                        '<div class="modal-dialog">'+
                            '<div class="modal-content">'+
                                '<div class="modal-header">'+
                                    '<h4 class="modal-title">提示:</h4>'+
                                '</div>'+
                                '<div class="modal-body">'+
                                    '<p>您没有相关操作权限，请点击退出按钮退出向导！</p>'+
                                '</div>'+
                                '<div class="modal-footer" style="text-align: right">'+
                                    '<button type="button" class="btn btn-warning">退出</button> '+
                                '</div>'+
                            '</div>'+
                        '</div>'+
                    '</div>');
                    $('body').append(obj[l-1]);
                    obj[l-1].find("button.btn").click(function () {
                        obj[l-2].remove();
                        obj[l-1].remove();
                    });
                }
            },100);
        }
    }
});

//添加提示工具
$(document).ready(function () {
    var tipList={
        "项目":{
            "合同":{
                "合同约定人数":"只读：通过合同岗位动态计算得出！",
                "现场人数":"只读：根据人员状态动态计算得出！",
                "人员要求":"合同内规定的对人员相关要求！",
                "资源要求":"合同内规定的对资源相关要求！",
                "单价(人/时间)":"此处为税前单价！",
                "实际收款金额":"请根据实际收款情况填写，一旦该字段不为0，则收款状态变为“已收款”！"
            }
        },
        "人力资源":{
            "员工":{
                "所在工作组":"必须先关联该字段，才能匹配人员状态、合同、合同岗位等字段！"
            }
        }
    }
    var $tipSelf=$("<div class='tipSelf'><i></i><span></span></div>");
    $("body").append($tipSelf);
    function addHoverEvent (childSelector) {
        $('body').on("mouseover",childSelector,function () {
            //判断当前的菜单位置(对象：fixTableHead在web/static/src/js/customScript.js中定义)
            var obj=fixTableHead.menuPosition();
            var html=$(this).html().trim();
            var offset=$(this).offset();
            var text=tipList[obj.m1];
            if(text&&(obj.m3=="form")){
                text=text[obj.m2];
                if(text){
                    text=text[html];
                    if(text){
                        $tipSelf.children("span").html(text);
                        $tipSelf.css({
                            "top":offset.top-$tipSelf.height()-15+"px",
                            "left":offset.left+"px"
                        });
                        $tipSelf.fadeIn(100);
                    }
                }
            }
        });
        $('body').on("mouseout",childSelector,function () {
            $tipSelf.fadeOut(100);
        });
    }
    // addHoverEvent ("label.oe_form_label");
    // addHoverEvent ("th.oe_sortable>div");
});