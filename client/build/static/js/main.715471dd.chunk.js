(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{180:function(e,a,t){},183:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),r=t(9),c=t.n(r),i=t(6),s=t(7),m=t(53),o=t(54),u=t(3),d={education:[],experience:[],projects:[]},p={emailName:"",emailNameValidate:null,emailCompany:"",emailCompanyValidate:null,emailAddress:"",emailAddressValidate:null,emailMessage:"",emailMessageValidate:null,messageSuccess:null,messageSuccessSend:null},E={showNavigation:!1,offset:-50,duration:500},f=Object(s.combineReducers)({contactFormReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:p,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"UPDATE_NAME":case"UPDATE_COMPANY_NAME":case"UPDATE_EMAIL_ADDRESS":case"UPDATE_EMAIL_MESSAGE":case"CLEAR_CONTACT_FORM":case"UPDATE_MESSAGE_STATUS":return Object(u.a)({},e,a.payload);default:return e}},fetchDataReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:d,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"FETCH_EDUCATION":return Object(u.a)({},e,{education:a.payload});case"FETCH_EXPERIENCE":return Object(u.a)({},e,{experience:a.payload});case"FETCH_PROJECTS":return Object(u.a)({},e,{projects:a.payload});default:return Object(u.a)({},e)}},uiReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:E,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"TOGGLE_NAVIAGTION":return Object(u.a)({},e,{showNavigation:a.payload});default:return e}}}),N=Object(o.composeWithDevTools)({}),h=[m.a],b=Object(s.createStore)(f,N(s.applyMiddleware.apply(void 0,h))),g=t(2),v=t(27),y=t.n(v),_=t(55),k=t(11),A=t.n(k),C=t(56),M=t.n(C),w=function(){return function(e){e({type:"CLEAR_CONTACT_FORM",payload:{emailName:"",emailNameValidate:null,emailCompany:"",emailCompanyValidate:null,emailAddress:"",emailAddressValidate:null,emailMessage:"",emailMessageValidate:null,messageSuccess:null,messageSuccessSend:null}})}},S=function(e,a){return function(t){t({type:"UPDATE_MESSAGE_STATUS",payload:{messageSuccess:e,messageSuccessSend:a}})}},T={updateNameInput:function(e){return function(a,t){e.length>3?a({type:"UPDATE_NAME",payload:{emailName:e,emailNameValidate:!0}}):a({type:"UPDATE_NAME",payload:{emailName:e,emailNameValidate:!1}})}},updateEmailInput:function(e){return function(a){M.a.isEmail(e)?a({type:"UPDATE_EMAIL_ADDRESS",payload:{emailAddress:e,emailAddressValidate:!0}}):a({type:"UPDATE_EMAIL_ADDRESS",payload:{emailAddress:e,emailAddressValidate:!1}})}},updateCompanyNameInput:function(e){return function(a){e.length>3?a({type:"UPDATE_COMPANY_NAME",payload:{emailCompany:e,emailCompanyValidate:!0}}):a({type:"UPDATE_COMPANY_NAME",payload:{emailCompany:e,emailCompanyValidate:!1}})}},updateMessageInput:function(e){return function(a){e.length>3?a({type:"UPDATE_EMAIL_MESSAGE",payload:{emailMessage:e,emailMessageValidate:!0}}):a({type:"UPDATE_EMAIL_MESSAGE",payload:{emailMessage:e,emailMessageValidate:!1}})}},clearContactForm:w,updateMessageStatus:S,submitContactForm:function(e){return function(){var a=Object(_.a)(y.a.mark(function a(t,n){var l,r,c,i,s,m,o,u,d,p;return y.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:if(e.preventDefault(),l=n().contactFormReducer,r=l.emailName,c=l.emailNameValidate,i=l.emailCompany,s=l.emailCompanyValidate,m=l.emailAddress,o=l.emailAddressValidate,u=l.emailMessage,d=l.emailMessageValidate,p={name:r,company:i,email:m,description:u},!(c&&s&&o&&d)){a.next=16;break}return a.prev=5,a.next=8,A.a.post("/api/contact-me",p);case 8:t(S(!0,"Message sent, I'll be in touch with you soon!")),setTimeout(function(){t(function(e){e({type:"CLEAR_CONTACT_FORM",payload:{emailName:"",emailNameValidate:null,emailCompany:"",emailCompanyValidate:null,emailAddress:"",emailAddressValidate:null,emailMessage:"",emailMessageValidate:null,messageSuccess:null,messageSuccessSend:null}})})},2e3),a.next=16;break;case 12:a.prev=12,a.t0=a.catch(5),t(S(!1,"Unable to send contact form. Last request was within an hour. Try again later")),setTimeout(function(){t(function(e){e({type:"CLEAR_CONTACT_FORM",payload:{emailName:"",emailNameValidate:null,emailCompany:"",emailCompanyValidate:null,emailAddress:"",emailAddressValidate:null,emailMessage:"",emailMessageValidate:null,messageSuccess:null,messageSuccessSend:null}})})},2e3);case 16:case"end":return a.stop()}},a,null,[[5,12]])}));return function(e,t){return a.apply(this,arguments)}}()}},L={fetchEducation:function(){return function(e){e({type:"FETCH_EDUCATION",payload:[]})}},fetchExperience:function(){return function(e){A.a.get("/api/data/experienceList").then(function(a){var t=a.data;e({type:"FETCH_EXPERIENCE",payload:t})}).catch(function(e){return console.log(e)})}},fetchPortfolio:function(){return function(e){A.a.get("/api/data/projectList").then(function(a){var t=a.data;e({type:"FETCH_PROJECTS",payload:t})}).catch(function(e){return console.error(e)})}}},P={toggleNavigation:function(e){return function(a){a({type:"TOGGLE_NAVIAGTION",payload:e})}}},I=Object(u.a)({},T,L,P),O=function(e){var a=e.duration,t=e.offset,n=e.showNavigation?"navbar navbar-dark bg-primary":"hidden";return l.a.createElement("nav",{className:n},l.a.createElement("ul",{className:"navbar__desktop"},l.a.createElement(g.Link,{to:"AboutMe",spy:!0,smooth:!0,offset:t,duration:a},l.a.createElement("li",null,l.a.createElement("h4",null,"About Me"))),l.a.createElement(g.Link,{to:"Experience",spy:!0,smooth:!0,offset:t,duration:a},l.a.createElement("li",null,l.a.createElement("h4",null,"Experience"))),l.a.createElement(g.Link,{to:"Portfolio",spy:!0,smooth:!0,offset:t,duration:a},l.a.createElement("li",null,l.a.createElement("h4",null,"Portfolio"))),l.a.createElement(g.Link,{to:"ContactMe",spy:!0,smooth:!0,offset:t,duration:a},l.a.createElement("li",null,l.a.createElement("h4",null,"Contact-Me")))))},x=t(57),V={backgroundImage:"url(".concat(t.n(x).a,")"),backgroundAttachment:"fixed",backgroundSize:"cover",height:"100vh",zIndex:3,opacity:.9},F=function(){return l.a.createElement("div",{className:"landing"},l.a.createElement("div",{style:V},l.a.createElement("div",{className:"landing-content"},l.a.createElement("h1",{className:"landing-title"},"Welcome"),l.a.createElement("div",{className:"landing-container-bar"}),l.a.createElement("h2",{className:"landing-subtitle landing-subtitle--animated"},l.a.createElement(g.Link,{activeClass:"active",to:"AboutMe",spy:!0,smooth:!0,offset:-50,duration:500},"Let's Collaborate")))))},D=t(58),j=t.n(D),R=function(e){var a=e.duration,t=e.offset;return l.a.createElement("div",{className:"about-me"},l.a.createElement("div",{className:"row mb-3"},l.a.createElement("div",{className:"section__title first col-12"},l.a.createElement("h1",null,"About Me ",l.a.createElement("span",{className:"emphasize"},"/")))),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"about-me__photo--container col-md-6 col-sm-12"},l.a.createElement("img",{className:"about-me__image",src:j.a,alt:""}),l.a.createElement("div",{className:"about-me__triangle"})),l.a.createElement("div",{className:"about-me__description col-md-6 col-sm-12"},l.a.createElement("div",{className:"about-me__container"},l.a.createElement("p",null,"I\u2019m a Full-Stack Web Developer based in Toronto, Ontario, Canada. Creating the best possible product is my goal as a developer; and with that in mind, my objective is to help"," ",l.a.createElement("span",{className:"emphasize"},"YOU")," create the best product possible for any and all of"," ",l.a.createElement("span",{className:"emphasize"},"YOUR")," needs! ",l.a.createElement("br",null)," When it comes to your needs, deadlines and working hours are pliable as needed. I\u2019m also flexible when it comes to working arrangements whether its solo or in a working group environment."),l.a.createElement("div",{className:"contact-container mt-5"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-4 mb-3"},l.a.createElement("a",{href:"https://www.linkedin.com/in/adrian-pearman/",target:"_blank",alt:"Link to Adrian Pearman's professional LinkedIn profile",rel:"noopener noreferrer"},l.a.createElement("button",{className:"contact__me contact__me--linkedin"},"Linkedin"))),l.a.createElement("div",{className:"col-4 mb-3"},l.a.createElement("a",{href:"https://github.com/adrianpearman",target:"_blank",alt:"Link to Adrian Pearman's Github profile",rel:"noopener noreferrer"},l.a.createElement("button",{className:"contact__me contact__me--github"},"Github"))),l.a.createElement("div",{className:"col-4 mb-3"},l.a.createElement(g.Link,{to:"ContactMe",spy:!0,smooth:!0,offset:t,duration:a},l.a.createElement("button",{className:"contact__me contact__me--email"},"E-Mail")))),l.a.createElement("div",{className:"contact-container-bar"}))))),l.a.createElement("hr",null))},U=t(15),z=function(e){return l.a.createElement(U.VerticalTimelineElement,{className:"vertical-timeline-element--work experience-title",iconStyle:{background:"#5acacb"}},l.a.createElement("h5",{className:"vertical-timeline-element-title mb-3 experience-title"},l.a.createElement("span",{className:"emphasize-title"},"Company:")," ",e.employer),l.a.createElement("h5",{className:"vertical-timeline-element-title mb-3 experience-title"},l.a.createElement("span",{className:"emphasize-title"},"Title:")," ",e.title),l.a.createElement("h5",{className:"vertical-timeline-element-subtitle mb-3 experience-title"},l.a.createElement("span",{className:"emphasize-title"},"Location:")," ",e.location),l.a.createElement("h5",{className:"vertical-timeline-element-subtitle mb-3 experience-title"},l.a.createElement("span",{className:"emphasize-title"},"Dates:")," ",e.dates),l.a.createElement("h5",{className:"experience-title experience-title-responsibility"},l.a.createElement("span",{className:"emphasize-title"},"Responsibilities:")),l.a.createElement("ul",{className:"experience-list"},e.responsibilities.map(function(e,a){return l.a.createElement("li",{key:a},e)})))},G=function(){return l.a.createElement("div",{className:"center"},l.a.createElement("div",{className:"sk-cube-grid"},l.a.createElement("div",{className:"sk-cube sk-cube1"}),l.a.createElement("div",{className:"sk-cube sk-cube2"}),l.a.createElement("div",{className:"sk-cube sk-cube3"}),l.a.createElement("div",{className:"sk-cube sk-cube4"}),l.a.createElement("div",{className:"sk-cube sk-cube5"}),l.a.createElement("div",{className:"sk-cube sk-cube6"}),l.a.createElement("div",{className:"sk-cube sk-cube7"}),l.a.createElement("div",{className:"sk-cube sk-cube8"}),l.a.createElement("div",{className:"sk-cube sk-cube9"})))},H=Object(i.b)(function(e){return{experience:e.fetchDataReducer.experience}})(function(e){var a=e.experience,t=a.map(function(e,a){return l.a.createElement(z,{key:a,dates:e.dates,employer:e.employer,location:e.location,title:e.title,responsibilities:e.responsibilities})});return l.a.createElement("div",{className:"experience"},l.a.createElement("div",{className:"experience__title section__title"},l.a.createElement("h1",null,"Professional Experience ",l.a.createElement("span",{className:"emphasize"},"/"))),l.a.createElement(U.VerticalTimeline,{layout:"1-column"},a.length>0?t:l.a.createElement(G,null)))}),Y={submitContactForm:I.submitContactForm,updateCompanyNameInput:I.updateCompanyNameInput,updateEmailInput:I.updateEmailInput,updateMessageInput:I.updateMessageInput,updateNameInput:I.updateNameInput},W=Object(i.b)(function(e){return e.contactFormReducer},Y)(function(e){var a=function(e,a){return null===e?l.a.createElement(l.a.Fragment,null):!1===e?l.a.createElement("div",{style:{color:"red"}},a):l.a.createElement(l.a.Fragment,null)};return l.a.createElement("div",{className:"contact-me"},l.a.createElement("div",{className:"section__title"},l.a.createElement("h1",null,"Contact Me ",l.a.createElement("span",{className:"emphasize"},"/"))),l.a.createElement("div",{className:"contact-me__form row mb-4"},l.a.createElement("div",{className:"col-12"},l.a.createElement("p",null,"Thank you for taking the time to look at my portfolio",l.a.createElement("span",{className:"emphasize"},"!")),l.a.createElement("p",null,"Starting a new project",l.a.createElement("span",{className:"emphasize"},"?")),l.a.createElement("p",null,"Exploring options for a current project",l.a.createElement("span",{className:"emphasize"},"?")),l.a.createElement("p",null,"Looking to add a new member to your team",l.a.createElement("span",{className:"emphasize"},"?")),l.a.createElement("p",null,"Contact me and lets collaborate",l.a.createElement("span",{className:"emphasize"},"!")),l.a.createElement("br",null),l.a.createElement("p",null,"I look forward to hearing from you",l.a.createElement("span",{className:"emphasize"},"!")))),l.a.createElement("form",{className:"form-input"},l.a.createElement("fieldset",null,l.a.createElement("div",{className:"form-group"},l.a.createElement("div",{className:"mb-3"},l.a.createElement("label",{htmlFor:"emailName"},"Name"),l.a.createElement("input",{type:"email",className:"form-control",id:"emailName",onChange:function(a){return e.updateNameInput(a.target.value)},value:e.emailName}),a(e.emailNameValidate,"Please enter a name")),l.a.createElement("div",{className:"mb-3"},l.a.createElement("label",{htmlFor:"emailCompany"},"Company Name"),l.a.createElement("input",{type:"email",className:"form-control",id:"emailCompany",onChange:function(a){return e.updateCompanyNameInput(a.target.value)},value:e.emailCompany}),a(e.emailCompanyValidate,"Please enter a company name")),l.a.createElement("div",{className:"mb-3"},l.a.createElement("label",{htmlFor:"emailAddress"},"Email Address"),l.a.createElement("input",{type:"email",className:"form-control",id:"emailAddress",onChange:function(a){return e.updateEmailInput(a.target.value)},value:e.emailAddress}),a(e.emailAddressValidate,"Please enter a valid contact method")),l.a.createElement("div",{className:"mb-3 form-group"},l.a.createElement("label",{htmlFor:"emailMessage"},"Message"),l.a.createElement("textarea",{className:"form-control",id:"emailMessage",rows:"3",onChange:function(a){return e.updateMessageInput(a.target.value)},value:e.emailMessage}),a(e.emailMessageValidate,"Please enter a message")),function(){switch(e.messageSuccess){case!0:return l.a.createElement("div",{className:"alert alert-success"},l.a.createElement("strong",null,e.messageSuccessSend));case!1:return l.a.createElement("div",{className:"alert alert-danger"},l.a.createElement("strong",null,e.messageSuccessSend));default:return l.a.createElement(l.a.Fragment,null)}}(),function(){switch(e.messageSuccess){case!0:return l.a.createElement("button",{className:"btn btn-success",onClick:function(a){return e.submitContactForm(a)}},"Sent");case!1:return l.a.createElement("button",{className:"btn btn-danger",onClick:function(a){return e.submitContactForm(a)}},"Fail");default:return l.a.createElement("button",{className:"btn btn-primary",onClick:function(a){return e.submitContactForm(a)},disabled:""===e.emailName||""===e.emailCompany||""===e.emailAddress||""===e.emailMessage},"Send")}}()))))}),J=function(e){var a=e.duration,t=e.offset;return l.a.createElement("footer",{className:"footer"},l.a.createElement("nav",{className:"footer__nav"},l.a.createElement("ul",null,l.a.createElement("li",{className:"linkedin"},l.a.createElement("a",{href:"https://www.linkedin.com/in/adrian-pearman/",target:"_blank",alt:"Link to Adrian Pearman's professional LinkedIn profile",rel:"noopener noreferrer"},"LinkedIn")),l.a.createElement("li",{className:"github"},l.a.createElement("a",{href:"https://github.com/adrianpearman",target:"_blank",alt:"Link to Adrian Pearman's Github profile",rel:"noopener noreferrer"},"GitHub")),l.a.createElement("li",null,l.a.createElement(g.Link,{to:"AboutMe",spy:!0,smooth:!0,offset:t,duration:a},"About Me")),l.a.createElement("li",null,l.a.createElement(g.Link,{to:"Experience",spy:!0,smooth:!0,offset:t,duration:a},"Experience")),l.a.createElement("li",null,l.a.createElement(g.Link,{to:"Portfolio",spy:!0,smooth:!0,offset:t,duration:a},"Portfolio")),l.a.createElement("li",null,l.a.createElement(g.Link,{to:"ContactMe",spy:!0,smooth:!0,offset:t,duration:a},"Contact-Me")))),l.a.createElement("h4",{className:"footer__copyright"},"\xa9 Adrian Pearman ",(new Date).getFullYear()))},B=function(e){return l.a.createElement("div",{className:"portfolio__item"},l.a.createElement("div",{className:"card portfolio__item-card"},l.a.createElement("div",{className:"card-body"},l.a.createElement("h5",{className:"card-title emphasize-title"},"Project: ",e.title),l.a.createElement(n.Fragment,null,l.a.createElement("div",{className:"portfolio__item-link-container"},l.a.createElement("p",{className:"col"},l.a.createElement("a",{href:e.liveLink,className:"card-link",target:"_blank",rel:"noopener noreferrer"},"Live Site")),l.a.createElement("p",{className:"col"},l.a.createElement("a",{href:e.repoLink,className:"card-link",target:"_blank",rel:"noopener noreferrer"},"Repository"))),l.a.createElement("h6",null,"Project Overview:"),l.a.createElement("p",{className:"card-text"},e.overview),l.a.createElement("h6",null,"Technologies Used:"),l.a.createElement("ul",{className:"technology-stack"},e.stack.map(function(e,a){return l.a.createElement("li",{key:a},e)}))))))},X=Object(i.b)(function(e){return{projects:e.fetchDataReducer.projects}})(function(e){var a=e.projects,t=a.map(function(e,a){return l.a.createElement(B,{key:a,title:e.title,overview:e.overview,stack:e.stack,liveLink:e.liveLink,repoLink:e.repoLink})});return l.a.createElement("div",{className:"portfolio"},l.a.createElement("div",{className:"row mb-3"},l.a.createElement("div",{className:"section__title col"},l.a.createElement("h1",null,"Portfolio ",l.a.createElement("span",{className:"emphasize"},"/")))),l.a.createElement("div",{className:"portfolio__container row"},a.length>0?t:l.a.createElement(G,null)),l.a.createElement("hr",null))}),q=(t(180),{fetchEducation:I.fetchEducation,fetchExperience:I.fetchExperience,fetchPortfolio:I.fetchPortfolio,toggleNavigation:I.toggleNavigation}),$=Object(i.b)(function(e){return e.uiReducer},q)(function(e){var a=e.duration,t=e.fetchExperience,r=e.fetchPortfolio,c=e.offset,i=e.showNavigation,s=e.toggleNavigation;return Object(n.useEffect)(function(){window.addEventListener("scroll",function(){var e=window.innerHeight-75,a=window.pageYOffset;s(a>e)}),t(),r()},[]),l.a.createElement("div",null,l.a.createElement(F,null),l.a.createElement(O,{showNavigation:i,offset:c,duration:a}),l.a.createElement("div",{className:"container"},l.a.createElement(g.Element,{name:"AboutMe"},l.a.createElement(R,{offset:c,duration:a})),l.a.createElement(g.Element,{name:"Experience"},l.a.createElement(H,null)),l.a.createElement(g.Element,{name:"Portfolio"},l.a.createElement(X,null)),l.a.createElement(g.Element,{name:"ContactMe"},l.a.createElement(W,null))),l.a.createElement(J,{offset:c,duration:a}))});Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var K=function(){return l.a.createElement(i.a,{store:b},l.a.createElement($,null))};c.a.render(l.a.createElement(K,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},57:function(e,a,t){e.exports=t.p+"static/media/HeaderBackground2.ac4ea8ec.jpg"},58:function(e,a,t){e.exports=t.p+"static/media/profilePhoto.e955bf0d.jpg"},59:function(e,a,t){e.exports=t(183)}},[[59,2,1]]]);
//# sourceMappingURL=main.715471dd.chunk.js.map