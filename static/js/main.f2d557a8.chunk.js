(this["webpackJsonpmy-baasics"]=this["webpackJsonpmy-baasics"]||[]).push([[0],{12:function(e,t,s){},13:function(e,t,s){},17:function(e,t,s){"use strict";s.r(t);var c,n=s(1),r=s.n(n),i=s(5),o=s.n(i),a=(s(12),s(6)),l=s(3),u=(s.p,s(13),s(18)),j=s(19),d=s(20),b=s(0);var h=function(e){c=Object.keys(e).length;var t=r.a.useState({currentQuestion:0,correctAnswers:0,wrongAnswer:0}),s=Object(l.a)(t,2),n=s[0],i=s[1],o=r.a.useState(!1),a=Object(l.a)(o,2),h=a[0],f=a[1],w=r.a.useState(!1),x=Object(l.a)(w,2),O=x[0],g=x[1];function m(e,t){n.currentQuestion<c&&("true"==t.isCorrect?(setTimeout((function(){i({currentQuestion:n.currentQuestion+1,correctAnswers:n.correctAnswers+1,wrongAnswer:n.wrongAnswer}),v()}),1500),e.target.classList.add("right_answer")):(setTimeout((function(){i({currentQuestion:n.currentQuestion+1,correctAnswers:n.correctAnswers,wrongAnswer:n.wrongAnswer+1}),v()}),1500),e.target.classList.add("wrong_answer")),f(!0),function(e){setTimeout((function(){f(!1),e.target.classList.remove("wrong_answer"),e.target.classList.remove("right_answer")}),1500)}(e))}function v(){window.localStorage.getItem("best-score")?window.localStorage.getItem("best-score")<n.correctAnswers&&localStorage.setItem("best-score",n.correctAnswers):localStorage.setItem("best-score",0),console.log(window.localStorage.getItem("best-score"))}return Object(b.jsx)("div",{className:"Parent",children:n.currentQuestion==c?Object(b.jsxs)("div",{className:"ScoreCard",children:[v(),Object(b.jsxs)("h1",{id:"BestScore",children:["BestScore : ",window.localStorage.getItem("best-score")]}),Object(b.jsxs)("h1",{id:"CurrentScore",style:{alignItems:"center",marginLeft:"auto",marginRight:"auto"},children:["You Scored ",n.correctAnswers," Out of ",c]}),Object(b.jsx)(u.a,{id:"reload",color:"#ffffff",size:30,onClick:function(){i({currentQuestion:0,correctAnswers:0,wrongAnswer:0})}})]}):Object(b.jsxs)("div",{className:"Quiz_Panel_Main",children:[Object(b.jsx)("h1",{className:"",style:{fontSize:"50px",color:"#ffffff",textShadow:"-1px -1px 0 #000"},children:"React Quiz"}),Object(b.jsxs)("div",{className:"quiz",children:[Object(b.jsxs)("div",{className:"questions-section",children:[Object(b.jsxs)("div",{className:"checkbox",children:[Object(b.jsx)("input",{type:"checkbox",id:"checkbox",checked:O,onClick:function(){return g(!O)}}),Object(b.jsx)("label",{for:"checkbox",children:"Show Result"})]}),Object(b.jsxs)("h1",{className:"QuestionCount",children:["Question ",n.currentQuestion+1,Object(b.jsxs)("span",{children:["/",Object.keys(e).length]})]}),Object(b.jsx)("p",{id:"question",children:e[n.currentQuestion].questionText})]}),Object(b.jsx)("div",{className:"answer-section",children:e[n.currentQuestion].answerOptions.map((function(e){return Object(b.jsx)("button",{id:"btn",onClick:function(t){return m(t,e)},disabled:1==h,children:e.answerText})}))})]}),Object(b.jsx)("div",{className:"LiveResults",children:Object(b.jsxs)("div",{className:"Result",style:O?{visibility:"visible"}:{visibility:"hidden"},children:[Object(b.jsxs)("div",{className:"right_div",children:[Object(b.jsx)(j.a,{color:"#3cff00",size:30}),Object(b.jsx)("span",{id:"Resultcorrect",children:n.correctAnswers})]}),Object(b.jsxs)("div",{className:"wrong_div",children:[Object(b.jsx)(d.a,{color:"#ff2a2a",size:30}),Object(b.jsx)("span",{id:"Resultwrong",children:n.wrongAnswer})]})]})})]})})},f=s(21);var w=function(){return Object(b.jsxs)("div",{className:"Nav",children:[Object(b.jsx)("div",{className:"Nav_Appname",children:Object(b.jsx)("h1",{id:"App_Name",children:"Rate my skills"})}),Object(b.jsxs)("div",{className:"Account",children:[Object(b.jsx)(f.a,{id:"logo_account",title:"goodbye",color:"#ffffff",size:30}),Object(b.jsx)("h3",{id:"select_option",children:"Ankush Shrivastava"})]})]})};var x=function(){var e=r.a.useState(null),t=Object(l.a)(e,2),s=t[0],c=t[1];return Object(n.useEffect)((function(){fetch("https://raw.githubusercontent.com/4nku5h/Quiz-App/main/api.json").then((function(e){return e.json()})).then((function(e){c(e)}))}),[]),null==s?null:Object(b.jsxs)("div",{className:"App",children:[Object(b.jsx)(w,{}),Object(b.jsx)(h,Object(a.a)({},s))]})},O=function(e){e&&e instanceof Function&&s.e(3).then(s.bind(null,22)).then((function(t){var s=t.getCLS,c=t.getFID,n=t.getFCP,r=t.getLCP,i=t.getTTFB;s(e),c(e),n(e),r(e),i(e)}))};o.a.render(Object(b.jsx)(r.a.StrictMode,{children:Object(b.jsx)(x,{})}),document.getElementById("root")),O()}},[[17,1,2]]]);
//# sourceMappingURL=main.f2d557a8.chunk.js.map