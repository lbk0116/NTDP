{
    'name' : 'Nantian Live Support',
    'author': 'Nantian',
    'version': '1.0',
    'summary': 'Chat with the Nantian collaborators',
    'category': 'Tools',
    'complexity': 'medium',
    'website': 'http://www.nantian.com.cn/',
    'description':
        """
Nantian Live Support
=================

Ask your functionnal question directly to the Nantian Operators with the livechat support.

        """,
    'data': [
        "views/im_odoo_support.xml"
    ],
    'depends' : ["web", "im_chat"],
    'qweb': [
        'static/src/xml/im_odoo_support.xml'
    ],
    'installable': True,
    'auto_install': True,
    'application': True,
}
