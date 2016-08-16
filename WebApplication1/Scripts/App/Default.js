

Ext.onReady(function () {
    Ext.create('Ext.Button', {
        id:'mybutton',
        text: 'Click me',
        renderTo: Ext.getBody(),
        handler: function () {
            Ext.MessageBox.show({
                title: 'message',
                msg: 'click',
                modal: true,
                prompt: true,
                value: '请输入',
                buttons: Ext.Msg.YESNOCANCEL,
                icon: Ext.Msg.QUESTION,
                fn: function (id,msg) {
                    alert('id:'+id+','+'msg:'+msg)
                }
            })
        }
    });
});