"use strict";(self["webpackChunklogin"]=self["webpackChunklogin"]||[]).push([[633],{5633:function(s,o,e){e.r(o),e.d(o,{default:function(){return y}});e(4114);var t=e(5021),a=e(1469),c=e(7959),r=e(7140),n=e(4706),i=e(4843);const l={class:"top_pic"},d={class:"bear"},p={src:r,alt:""},u={src:n,alt:""},w={src:i,alt:""},m={class:"row"},_={class:"row"},h={class:"row"},f={class:"row"},v={class:"row",style:{"justify-content":"flex-end"}};function k(s,o,e,r,n,i){const k=(0,t.g2)("com-input"),g=(0,t.g2)("com-card");return(0,t.uX)(),(0,t.CE)("div",{class:"Register",onClick:o[17]||(o[17]=s=>n.focus=null)},[(0,t.bF)(g,null,{default:(0,t.k6)((()=>[(0,t.Lk)("div",l,[(0,t.bo)((0,t.Lk)("div",d,null,512),[[a.aG,!n.focus]]),(0,t.bo)((0,t.Lk)("img",p,null,512),[[a.aG,n.focus&&n.focus.match(/^(username|code)$/)]]),(0,t.bo)((0,t.Lk)("img",u,null,512),[[a.aG,"password"===n.focus&&!n.show_password&&!n.show_confirm_password]]),(0,t.bo)((0,t.Lk)("img",w,null,512),[[a.aG,"password"===n.focus&&(n.show_password||n.show_confirm_password)]])]),(0,t.Lk)("form",{onSubmit:o[16]||(o[16]=(0,a.D$)(((...s)=>i.register&&i.register(...s)),["prevent"]))},[(0,t.Lk)("div",m,[(0,t.bF)(k,{type:"email",id:"username",val:n.email,"onUpdate:val":o[0]||(o[0]=s=>n.email=s),placeholder:"邮箱",autocomplete:"",onClick:o[1]||(o[1]=(0,a.D$)((()=>{}),["stop"])),onFocus:o[2]||(o[2]=s=>i.set_focus("username"))},null,8,["val"])]),(0,t.Lk)("div",_,[(0,t.bF)(k,{type:"text",id:"code",val:n.code,"onUpdate:val":o[4]||(o[4]=s=>n.code=s),maxlength:"6",placeholder:"验证码",autocomplete:"",onClick:o[5]||(o[5]=(0,a.D$)((()=>{}),["stop"])),onFocus:o[6]||(o[6]=s=>i.set_focus("code"))},{right:(0,t.k6)((()=>[(0,t.Lk)("div",{class:"yzm",onClick:o[3]||(o[3]=(...s)=>i.send_code&&i.send_code(...s))},(0,c.v_)(i.yzm),1)])),_:1},8,["val"])]),(0,t.Lk)("div",h,[(0,t.bF)(k,{type:n.show_password?"text":"password",id:"password",val:n.password,"onUpdate:val":o[7]||(o[7]=s=>n.password=s),show_password:n.show_password,"onUpdate:show_password":o[8]||(o[8]=s=>n.show_password=s),placeholder:"密码",autocomplete:"",show_eye:!0,onClick:o[9]||(o[9]=(0,a.D$)((()=>{}),["stop"])),onFocus:o[10]||(o[10]=s=>i.set_focus("password"))},null,8,["type","val","show_password"])]),(0,t.Lk)("div",f,[(0,t.bF)(k,{type:n.show_confirm_password?"text":"password",id:"password",val:n.confirm_password,"onUpdate:val":o[11]||(o[11]=s=>n.confirm_password=s),show_confirm_password:n.show_confirm_password,"onUpdate:show_confirm_password":o[12]||(o[12]=s=>n.show_confirm_password=s),placeholder:"确认密码",autocomplete:"",show_confirm_eye:!0,onClick:o[13]||(o[13]=(0,a.D$)((()=>{}),["stop"])),onFocus:o[14]||(o[14]=s=>i.set_focus("password"))},null,8,["type","val","show_confirm_password"])]),(0,t.Lk)("div",v,[(0,t.Lk)("div",{class:"btn",onClick:o[15]||(o[15]=o=>s.$router.push("/login"))},"返回登录")]),o[18]||(o[18]=(0,t.Lk)("div",{class:"row"},[(0,t.Lk)("button",{type:"submit",class:"submit"},[(0,t.Lk)("span",{class:"iconfont icon-denglu"})])],-1))],32)])),_:1})])}var g={name:"RegisterView",components:{},props:[],data(){return{email:"",password:"",confirm_password:"",focus:null,show_password:!1,show_confirm_password:!1,code:"",code_time:0}},created(){},mounted(){},computed:{yzm(){return this.code_time?this.code_time+" s":"发送验证码"}},watch:{username(s){console.log("newValue.length ==> ",s.length)}},methods:{set_focus(s){this.focus=s},register(){const{email:s,password:o,confirm_password:e,code:t}=this;o!==e&&alert("两次密码不一致"),s&&o&&e?(console.log("register ==> "),this.$store.dispatch("user/register",{email:s,password:o,code:t})):alert("请填写完整信息")},send_code(){if(!this.code_time){this.code_time=60;let s=setInterval((()=>{this.code_time--,0===this.code_time&&clearInterval(s)}),1e3);console.log("this.email ==> ",this.email),this.$store.dispatch("user/sendCode",{email:this.email})}}}},b=e(9755);const L=(0,b.A)(g,[["render",k],["__scopeId","data-v-6b32567d"]]);var y=L},7140:function(s,o,e){s.exports=e.p+"img/active.8cc76f16.png"},4843:function(s,o,e){s.exports=e.p+"img/peek.97979e9c.png"},4706:function(s,o,e){s.exports=e.p+"img/shy.09c4bd28.png"}}]);