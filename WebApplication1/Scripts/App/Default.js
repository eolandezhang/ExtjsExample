

Ext.onReady(function () {
    //Ext.create('Ext.Button', {
    //    id:'mybutton',
    //    text: 'Click me',
    //    renderTo: Ext.getBody(),
    //    handler: function () {
    //        Ext.MessageBox.show({
    //            title: 'message',
    //            msg: 'click',
    //            modal: true,
    //            prompt: true,
    //            value: '请输入',
    //            buttons: Ext.Msg.YESNOCANCEL,
    //            icon: Ext.Msg.QUESTION,
    //            fn: function (id,msg) {
    //                alert('id:'+id+','+'msg:'+msg)
    //            }
    //        })
    //    }
    //});
   var testForm= Ext.create('Ext.form.Panel', {
        title: 'Ext.form.field.Trigger',
        height: 100,
        width: 270,
        renderTo: 'extFormFieldTrigger',
        items:[{
            xtype: 'triggerfield',
            id: 'memo',
            fieldLabel: '触发字段',
            hideTrigger: false,
            onTriggerClick: function () {
                var memo = testForm.getForm().findField('memo');
                alert(memo.getValue());
                Ext.getCmp('memo').setValue('test');
            }
        }]
    });
});