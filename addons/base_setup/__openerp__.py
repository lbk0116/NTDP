# -*- coding: utf-8 -*-
##############################################################################
#
#
##############################################################################


{
    'name': 'Initial Setup Tools',
    'version': '1.0',
    'category': 'Hidden',
    'description': """
This module helps to configure the system at the installation of a new database.
================================================================================

Shows you a list of applications features to install from.

    """,
    'author': 'Nantian',
    'website': 'http://www.nantian.com.cn',
    'depends': ['base', 'web_kanban'],
    'data': [
        'security/ir.model.access.csv',
        'base_setup_views.xml',
        'res_config_view.xml',
        'res_partner_view.xml',
        'views/base_setup.xml',
    ],
    'demo': [],
    'installable': True,
    'auto_install': False,
}
# vim:expandtab:smartindent:tabstop=4:softtabstop=4:shiftwidth=4:
