/*
 * File: app/view/Test/DemoForm_Edit.js
 *
 * This file was generated by Sencha Architect
 * http://www.sencha.com/products/architect/
 *
 * This file requires use of the Ext JS 4.2.x library, under independent license.
 * License of Sencha Architect does not include license for Ext JS 4.2.x. For more
 * details see http://www.sencha.com/license or contact license@sencha.com.
 *
 * This file will be auto-generated each and everytime you save your project.
 *
 * Do NOT hand edit this file.
 */

Ext.define('EpiServer.view.Test.DemoForm_Edit', {
    extend: 'Ext.window.Window',

    requires: [
        'Ext.form.Panel',
        'Ext.form.field.ComboBox',
        'Ext.form.field.Date',
        'Ext.button.Button'
    ],

    height: 392,
    width: 695,
    layout: 'fit',
    title: '编辑儿童信息',
    modal: true,

    initComponent: function() {
        var me = this;

        Ext.applyIf(me, {
            items: [
                {
                    xtype: 'form',
                    height: 273,
                    itemId: 'dataForm',
                    layout: 'border',
                    bodyPadding: 10,
                    items: [
                        {
                            xtype: 'container',
                            region: 'center',
                            defaults: {
                                labelAlign: 'right',
                                labelWidth: 80
                            },
                            layout: 'absolute',
                            items: [
                                {
                                    xtype: 'textfield',
                                    FieldName: 'FChildNo',
                                    x: 20,
                                    y: 30,
                                    itemId: 'txtChildNo',
                                    width: 270,
                                    fieldLabel: '儿童编码',
                                    name: 'FChildNo',
                                    readOnly: true
                                },
                                {
                                    xtype: 'textfield',
                                    FieldName: 'FChildName',
                                    x: 20,
                                    y: 60,
                                    itemId: 'txtChildName',
                                    width: 210,
                                    fieldLabel: '儿童姓名',
                                    name: 'FChildName'
                                },
                                {
                                    xtype: 'combobox',
                                    FieldName: 'FSex',
                                    x: 390,
                                    y: 60,
                                    itemId: 'cmbSex',
                                    width: 150,
                                    fieldLabel: '性别',
                                    name: 'FSex',
                                    displayField: 'FSex',
                                    queryMode: 'local',
                                    store: 'Test.DemoForm_Sex',
                                    valueField: 'FSex'
                                },
                                {
                                    xtype: 'textfield',
                                    FieldName: 'FFatherName',
                                    x: 20,
                                    y: 90,
                                    itemId: 'txtFatherName',
                                    width: 210,
                                    fieldLabel: '父亲姓名',
                                    name: 'FFatherName'
                                },
                                {
                                    xtype: 'textfield',
                                    FieldName: 'FMotherName',
                                    x: 230,
                                    y: 90,
                                    width: 360,
                                    fieldLabel: '母亲姓名',
                                    name: 'FMotherName'
                                },
                                {
                                    xtype: 'datefield',
                                    FieldName: 'FBirthday',
                                    x: 230,
                                    y: 60,
                                    width: 180,
                                    fieldLabel: '出生日期',
                                    name: 'FBirthday'
                                },
                                {
                                    xtype: 'textfield',
                                    FieldName: 'FMobile',
                                    x: 20,
                                    y: 120,
                                    width: 210,
                                    fieldLabel: '移动电话',
                                    name: 'FMobile'
                                },
                                {
                                    xtype: 'textfield',
                                    FieldName: 'FTelephone',
                                    x: 230,
                                    y: 120,
                                    width: 360,
                                    fieldLabel: '其他电话',
                                    name: 'FTelephone'
                                },
                                {
                                    xtype: 'container',
                                    x: -6,
                                    y: 200,
                                    height: 70,
                                    items: [
                                        {
                                            xtype: 'textfield',
                                            FieldName: 'FChildName',
                                            itemId: 'aabc',
                                            fieldLabel: 'Label'
                                        }
                                    ]
                                },
                                {
                                    xtype: 'button',
                                    x: 550,
                                    y: 60,
                                    itemId: 'btnSexManage',
                                    text: '...'
                                }
                            ]
                        },
                        {
                            xtype: 'container',
                            region: 'south',
                            height: 49,
                            layout: {
                                type: 'hbox',
                                align: 'middle',
                                pack: 'end'
                            },
                            items: [
                                {
                                    xtype: 'button',
                                    itemId: 'btnSave',
                                    width: 60,
                                    text: '保存'
                                },
                                {
                                    xtype: 'button',
                                    margins: '0 20 0 12',
                                    itemId: 'btnCancel',
                                    width: 60,
                                    text: '取消'
                                }
                            ]
                        }
                    ]
                }
            ]
        });

        me.callParent(arguments);
    },

    execute: function(box, record, fn) {
        var me = this;

        // 取得命名控件的标识
        window.lw = this;
        me.aabc          = getCtrl(this, 'aabc');
        me.btnCancel     = getCtrl(this, 'btnCancel');
        me.btnSave       = getCtrl(this, 'btnSave');
        me.btnSexManage  = getCtrl(this, 'btnSexManage');
        me.cmbSex        = getCtrl(this, 'cmbSex');
        me.txtChildName  = getCtrl(this, 'txtChildName');
        me.txtChildNo    = getCtrl(this, 'txtChildNo');
        me.txtFatherName = getCtrl(this, 'txtFatherName');

        // 更新窗口状态函数。
        me.fixStatus = function() {
        };

        // ==========================================================================
        // 按钮事件
        // ==========================================================================
        me.btnSave.on('click', function(button, e, eOpt) {
            // 这里需要添加数据校验信息。

            wtDB.saveFormDataToRec(this, record);
            if (fn) fn(); // 执行回调。
            me.hide(box, function() { me.destroy(); });

        }, this);

        me.btnCancel.on('click', function(button, e, eOpt) {
            me.hide(box, function() { me.destroy(); });

        }, me);

        // ==========================================================================
        // 创建并绑定到新的数据集
        // ==========================================================================

        me.btnSexManage.on('click', function(button, e, eOpt) {
            var c = getCtrlByFieldName(me, 'FSex');
            Ext.create('EpiServer.view.GenDlg.DictOneManage').execute(button, c.getStore(), '性别维护', 4, function() {
                alertAni(button, '注意', '数据字典已经变化！');
            });

        }, me);

        wtDB.loadFormDataFromRec(this, record);
        me.fixStatus();
        me.animateTarget = box;
        me.show(box);

        // 【数据初始化代码】

    }

});