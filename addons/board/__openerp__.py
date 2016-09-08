# -*- coding: utf-8 -*-
##############################################################################
#
##############################################################################

{
    'name': 'Dashboards',
    'version': '1.0',
    'category': 'Hidden',
    'description': """
Lets the user create a custom dashboard.
========================================

Allows users to create custom dashboard.
    """,
    'author': 'Nantian',
    'depends': ['base', 'web'],
    'data': [
        'security/ir.model.access.csv',
        'board_view.xml',
        'board_mydashboard_view.xml',
        'views/board.xml',
    ],
    'qweb': ['static/src/xml/*.xml'],
    'installable': True,
    'auto_install': False,
}
# vim:expandtab:smartindent:tabstop=4:softtabstop=4:shiftwidth=4:
