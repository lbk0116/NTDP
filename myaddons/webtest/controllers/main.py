#coding:utf8

from openerp import http

class WebTst(http.Controller):

    @http.route("/web", auth="none", web=True)
    def webtst(self):
        return http.request.render("webtest.idname", {"title":"hello word","uname":["wanghaipeng","lihailiang","linana","gaoyan","fengyan","libaokun"],"uage":23})