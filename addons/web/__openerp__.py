{
    'name': 'Web',
    'category': 'Hidden',
    'version': '1.0',
    'author': "Nantian",
    'description':
        """
Web core module.
========================

This module provides the core of the Web Client.
        """,
    'depends': ['base'],
    'auto_install': True,
    'data': [
        'views/webclient_templates.xml',
    ],
    'qweb' : [
        "static/src/xml/*.xml",
    ],
    'bootstrap': True, # load translations for login screen
}
