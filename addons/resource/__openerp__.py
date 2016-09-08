# -*- coding: utf-8 -*-
##############################################################################
#
#
##############################################################################

{
    'name' : 'Resource',
    'version' : '1.1',
    'author' : 'Nantian',
    'category' : 'Hidden/Dependency',
    'website' : 'http://www.nantian.com.cn',
    'description': """
Module for resource management.
===============================

A resource represent something that can be scheduled (a developer on a task or a
work center on manufacturing orders). This module manages a resource calendar
associated to every resource. It also manages the leaves of every resource.
    """,
    'depends': ['base'],
    'data': [
        'security/ir.model.access.csv',
        'security/resource_security.xml',
        'resource_view.xml',
    ],
    'demo': ['resource_demo.xml'],
    'test': [
        'test/resource.yml',
        'test/duplicate_resource.yml',
    ],
    'installable': True,
    'auto_install': False,
}

# vim:expandtab:smartindent:tabstop=4:softtabstop=4:shiftwidth=4:
