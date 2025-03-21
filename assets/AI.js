window.$ai_show=false;
window.$ai=new CozeWebSDK.WebChatClient({
    config: {
      bot_id: '7484202256271982607',
    },
    componentProps: {
      title: '食物含量AI助手',
    },
    auth: {
      type: 'token',
      token: 'pat_RjqORLU8QqDpING2j49YPFDkvBJE5obStbuE4Oxk8KDen8o5nowex1XeQjbWUF0c',
      onRefreshToken: function () {
        return 'pat_RjqORLU8QqDpING2j49YPFDkvBJE5obStbuE4Oxk8KDen8o5nowex1XeQjbWUF0c'
      }
    },
    ui:{
      base:{
        zIndex: 9999
      },
      asstBtn:{
        isNeed: false,
      },
      footer:{
        isShow:true,
        expressionText:'Powered by 宋雨轩'
      },
      chatBot:{
        uploadable:false,
        onHide(){
          window.$ai_show=false;
        },
        onShow(){
          window.$ai_show=true;
        }
      }

    }
    
  });

  window.$ai_toggle=function(){
    if(window.$ai_show){
      window.$ai.hideChatBot();
    }else{
      window.$ai.showChatBot();
    }
  }

