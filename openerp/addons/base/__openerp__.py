# -*- coding: utf-8 -*-


{
    'name': 'Base',
    'version': '1.3',
    'category': 'Hidden',
    'description': """
This is a core module, needed for all installation.
===================================================
""",
    'depends': [],
    'data': [
        'base_data.xml',
        'res/res_currency_data.xml',
        'res/res_country_data.xml',
        'security/base_security.xml',
        'base_menu.xml',
        'res/res_config.xml',
        'res/res.country.state.csv',
        'ir/ir_actions.xml',
        'ir/ir_config_parameter_view.xml',
        'ir/ir_cron_view.xml',
        'ir/ir_filters.xml',
        'ir/ir_mail_server_view.xml',
        'ir/ir_model_view.xml',
        'ir/ir_attachment_view.xml',
        'ir/ir_rule_view.xml',
        'ir/ir_sequence_view.xml',
        'ir/ir_translation_view.xml',
        'ir/ir_ui_menu_view.xml',
        'ir/ir_ui_view_view.xml',
        'ir/ir_values_view.xml',
        'ir/osv_memory_autovacuum.xml',
        'ir/ir_model_report.xml',
        'ir/ir_logging_view.xml',
        'ir/ir_qweb.xml',
        'workflow/workflow_view.xml',
        'module/module_view.xml',
        'module/module_data.xml',
        'module/module_report.xml',
        'module/wizard/base_module_update_view.xml',
        'module/wizard/base_language_install_view.xml',
        'module/wizard/base_import_language_view.xml',
        'module/wizard/base_module_upgrade_view.xml',
        'module/wizard/base_module_configuration_view.xml',
        'module/wizard/base_export_language_view.xml',
        'module/wizard/base_update_translations_view.xml',
        'module/wizard/base_module_immediate_install.xml',
        'res/res_company_view.xml',
        'res/res_request_view.xml',
        'res/res_lang_view.xml',
        'res/res_partner_report.xml',
        'res/res_partner_view.xml',
        'res/res_bank_view.xml',
        'res/res_country_view.xml',
        'res/res_currency_view.xml',
        'res/res_users_view.xml',
        'res/res_partner_data.xml',
        'res/ir_property_view.xml',
        'res/res_security.xml',
        'security/ir.model.access.csv',
    ],
    'demo': [
        'base_demo.xml',
        'res/res_partner_demo.xml',
        'res/res_partner_demo.yml',
        'res/res_partner_image_demo.xml',
    ],
    'test': [
        'tests/base_test.yml',
        'tests/test_osv_expression.yml',
        'tests/test_ir_rule.yml', # <-- These tests modify/add/delete ir_rules.
    ],
    'installable': True,
    'auto_install': True,
}
# vim:expandtab:smartindent:tabstop=4:softtabstop=4:shiftwidth=4: