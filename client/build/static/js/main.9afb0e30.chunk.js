(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{152:function(e,a,t){},154:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),i=t(11),r=t.n(i),c=t(4),o=t(5),s=t(8),m=t(6),u=t(7),d=t(14),p=t(2),E=function(e){var a=e.offset,t=e.duration,n=e.showNavigation?"navbar navbar-dark bg-primary":"hidden";return l.a.createElement("nav",{className:n},l.a.createElement("ul",{className:"navbar__desktop"},l.a.createElement("li",null,l.a.createElement(p.Link,{to:"AboutMe",spy:!0,smooth:!0,offset:a,duration:t},l.a.createElement("h4",null,"About Me"))),l.a.createElement("li",null,l.a.createElement(p.Link,{to:"Experience",spy:!0,smooth:!0,offset:a,duration:t},l.a.createElement("h4",null,"Experience"))),l.a.createElement("li",null,l.a.createElement(p.Link,{to:"Portfolio",spy:!0,smooth:!0,offset:a,duration:t},l.a.createElement("h4",null,"Portfolio"))),l.a.createElement("li",null,l.a.createElement(p.Link,{to:"ContactMe",spy:!0,smooth:!0,offset:a,duration:t},l.a.createElement("h4",null,"Contact-Me")))))},h=t(47),f={backgroundImage:"url(".concat(t.n(h).a,")"),backgroundAttachment:"fixed",backgroundSize:"cover",height:"100vh",zIndex:3,opacity:.9},b=function(){return l.a.createElement("div",{className:"landing"},l.a.createElement("div",{style:f},l.a.createElement("div",{className:"landing-content"},l.a.createElement("h1",{className:"landing-title"},"Welcome"),l.a.createElement("div",{className:"landing-container-bar"}),l.a.createElement("h2",{className:"landing-subtitle landing-subtitle--animated"},l.a.createElement(p.Link,{activeClass:"active",to:"AboutMe",spy:!0,smooth:!0,offset:-50,duration:500},"Let's Collaborate")))))},v=t(48),N=t.n(v),k=function(e){var a=e.duration,t=e.offset;return l.a.createElement("div",{className:"about-me"},l.a.createElement("div",{className:"row mb-3"},l.a.createElement("div",{className:"section__title first col"},l.a.createElement("h1",null,"About Me ",l.a.createElement("span",{className:"emphasize"},"/")))),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"about-me__photo--container"},l.a.createElement("img",{className:"about-me__image",src:N.a,alt:""}),l.a.createElement("div",{className:"about-me__triangle"})),l.a.createElement("div",{className:"about-me__description col"},l.a.createElement("div",{className:"about-me__container"},l.a.createElement("p",null,"I\u2019m a Full-Stack Web Developer based in Toronto, Ontario, Canada. Creating the best possible product is my goal as a developer; and with that in mind, my objective is to help ",l.a.createElement("span",{className:"emphasize"},"YOU")," create the best product possible for any and all of ",l.a.createElement("span",{className:"emphasize"},"YOUR")," needs!",l.a.createElement("br",null),"When it comes to your needs, deadlines and working hours are pliable as needed. I\u2019m also flexible when it comes to working arrangements whether its solo or in a working group environment."),l.a.createElement("div",{className:"contact-container mt-5"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-md-12 mb-3"},l.a.createElement("a",{href:"https://www.linkedin.com/in/adrian-pearman/",target:"_blank",alt:"Link to Adrian Pearman's professional LinkedIn profile",rel:"noopener noreferrer"},l.a.createElement("button",{className:"contact__me contact__me--linkedin"},"Linkedin"))),l.a.createElement("div",{className:"col-md-12 mb-3"},l.a.createElement("a",{href:"https://github.com/adrianpearman",target:"_blank",alt:"Link to Adrian Pearman's Github profile",rel:"noopener noreferrer"},l.a.createElement("button",{className:"contact__me contact__me--github"},"Github"))),l.a.createElement("div",{className:"col-md-12 mb-3"},l.a.createElement(p.Link,{to:"ContactMe",spy:!0,smooth:!0,offset:t,duration:a},l.a.createElement("button",{className:"contact__me contact__me--email"},"E-Mail")))),l.a.createElement("div",{className:"contact-container-bar"}))))),l.a.createElement("hr",null))},g=t(18),y=t(12),w=t.n(y),_=function(e){return l.a.createElement(g.VerticalTimelineElement,{className:"vertical-timeline-element--work experience-title",iconStyle:{background:"#a8ce00"}},l.a.createElement("h5",{className:"vertical-timeline-element-title mb-3 experience-title"},l.a.createElement("span",{className:"emphasize-title"},"Company:")," ",e.employer),l.a.createElement("h5",{className:"vertical-timeline-element-title mb-3 experience-title"},l.a.createElement("span",{className:"emphasize-title"},"Title:")," ",e.title),l.a.createElement("h5",{className:"vertical-timeline-element-subtitle mb-3 experience-title"},l.a.createElement("span",{className:"emphasize-title"},"Location:")," ",e.location),l.a.createElement("h5",{className:"vertical-timeline-element-subtitle mb-3 experience-title"},l.a.createElement("span",{className:"emphasize-title"},"Dates:")," ",e.dates),l.a.createElement("h5",{className:"experience-title experience-title-responsibility"},l.a.createElement("span",{className:"emphasize-title"},"Responsibilities:")),l.a.createElement("ul",{className:"experience-list"},e.responsibilities.map(function(e,a){return l.a.createElement("li",{key:a},e)})))},C=function(){return l.a.createElement("div",{className:"center"},l.a.createElement("div",{className:"sk-cube-grid"},l.a.createElement("div",{className:"sk-cube sk-cube1"}),l.a.createElement("div",{className:"sk-cube sk-cube2"}),l.a.createElement("div",{className:"sk-cube sk-cube3"}),l.a.createElement("div",{className:"sk-cube sk-cube4"}),l.a.createElement("div",{className:"sk-cube sk-cube5"}),l.a.createElement("div",{className:"sk-cube sk-cube6"}),l.a.createElement("div",{className:"sk-cube sk-cube7"}),l.a.createElement("div",{className:"sk-cube sk-cube8"}),l.a.createElement("div",{className:"sk-cube sk-cube9"})))},x=function(e){function a(){var e,t;Object(c.a)(this,a);for(var n=arguments.length,l=new Array(n),i=0;i<n;i++)l[i]=arguments[i];return(t=Object(s.a)(this,(e=Object(m.a)(a)).call.apply(e,[this].concat(l)))).state={experienceList:[]},t.fetchExperienceHandler=function(){w.a.get("/api/data/experienceList").then(function(e){var a=e.data;t.setState({experienceList:a})}).catch(function(e){return console.log(e)})},t}return Object(u.a)(a,e),Object(o.a)(a,[{key:"componentWillMount",value:function(){this.fetchExperienceHandler()}},{key:"render",value:function(){var e=this.state.experienceList.map(function(e,a){return l.a.createElement(_,{key:a,dates:e.dates,employer:e.employer,location:e.location,title:e.title,responsibilities:e.responsibilities})});return l.a.createElement("div",{className:"experience"},l.a.createElement("div",{className:"experience__title section__title"},l.a.createElement("h1",null,"Professional Experience ",l.a.createElement("span",{className:"emphasize"},"/"))),l.a.createElement(g.VerticalTimeline,{layout:"1-column"},this.state.experienceList.length>0?e:l.a.createElement(C,null)))}}]),a}(n.Component),L=t(49),S=t.n(L),j=function(e){function a(){var e,t;Object(c.a)(this,a);for(var n=arguments.length,l=new Array(n),i=0;i<n;i++)l[i]=arguments[i];return(t=Object(s.a)(this,(e=Object(m.a)(a)).call.apply(e,[this].concat(l)))).state={emailName:"",emailNameValidate:null,emailCompany:"",emailCompanyValidate:null,emailContact:"",emailContactValidate:null,emailDescription:"",emailDescriptionValidate:null,messageSuccess:!1},t.emailName=function(e){t.setState({emailName:e.target.value,emailNameValidate:!0})},t.emailCompanyHandler=function(e){t.setState({emailCompany:e.target.value,emailCompanyValidate:!0})},t.emailContactHandler=function(e){var a=e.target.value;if(!S.a.isEmail(a))return t.setState({emailContactValidate:!1});t.setState({emailContact:a,emailContactValidate:!0})},t.emailDescriptionHandler=function(e){t.setState({emailDescription:e.target.value,emailDescriptionValidate:!0})},t.emailSubmitHandler=function(e){e.preventDefault();var a,n={name:t.state.emailName,company:t.state.emailCompany,email:t.state.emailContact,description:t.state.emailDescription};t.state.emailNameValidate?t.setState({emailNameValidate:!0}):t.setState({emailNameValidate:!1}),t.state.emailCompanyValidate?t.setState({emailCompanyValidate:!0}):t.setState({emailCompanyValidate:!1}),t.state.emailContactValidate?t.setState({emailContactValidate:!0}):t.setState({emailContactValidate:!1}),t.state.emailDescriptionValidate?t.setState({emailDescriptionValidate:!0}):t.setState({emailDescriptionValidate:!1}),t.state.emailNameValidate&&t.state.emailCompanyValidate&&t.state.emailContactValidate&&t.state.emailDescriptionValidate&&(a=!0),a?w.a.post("/api/contact-me",n).then(function(e){console.log(n),t.setState({messageSuccess:!0}),console.log(e)}).catch(function(e){return console.log(e)}):console.log("please check the input values...")},t}return Object(u.a)(a,e),Object(o.a)(a,[{key:"render",value:function(){var e={color:"red"},a=this.state.messageSuccess?"btn btn-success":"btn btn-primary",t=function(a,t){return null===a?l.a.createElement(n.Fragment,null):!1===a?l.a.createElement("div",{style:e},t):l.a.createElement(n.Fragment,null)};return l.a.createElement("div",{className:"contact-me"},l.a.createElement("div",{className:"section__title"},l.a.createElement("h1",null,"Contact Me ",l.a.createElement("span",{className:"emphasize"},"/"))),l.a.createElement("div",{className:"contact-me__form row mb-4"},l.a.createElement("p",{className:"col-md-6 offset-md-3"},"Thank you for taking the time to look at my portfolio",l.a.createElement("span",{className:"emphasize"},"!"),".",l.a.createElement("br",null),"Starting a new project",l.a.createElement("span",{className:"emphasize"},"?"),l.a.createElement("br",null),"Exploring options for a current project",l.a.createElement("span",{className:"emphasize"},"?"),l.a.createElement("br",null),"Looking to add a new member to your team",l.a.createElement("span",{className:"emphasize"},"?"),l.a.createElement("br",null),"Contact me and lets collaborate",l.a.createElement("span",{className:"emphasize"},"!"),l.a.createElement("br",null),l.a.createElement("br",null),"I look forward to hearing from you",l.a.createElement("span",{className:"emphasize"},"!"))),l.a.createElement("form",{className:"form-input"},l.a.createElement("fieldset",null,l.a.createElement("div",{className:"form-group"},l.a.createElement("div",{className:"mb-3 has-danger"},l.a.createElement("label",{htmlFor:"exampleInputEmail1"},"Name"),l.a.createElement("input",{type:"email",className:"form-control",id:"exampleInputEmail1","aria-describedby":"emailHelp",onChange:this.emailName}),t(this.state.emailNameValidate,"Please enter a name")),l.a.createElement("div",{className:"mb-3"},l.a.createElement("label",{htmlFor:"exampleInputEmail2"},"Company Name"),l.a.createElement("input",{type:"email",className:"form-control",id:"exampleInputEmail1","aria-describedby":"emailHelp",onChange:this.emailCompanyHandler}),t(this.state.emailCompanyValidate,"Please enter a company name")),l.a.createElement("div",{className:"mb-3"},l.a.createElement("label",{htmlFor:"exampleInputEmail3"},"Email Address"),l.a.createElement("input",{type:"email",className:"form-control",id:"exampleInputEmail1","aria-describedby":"emailHelp",onChange:this.emailContactHandler}),t(this.state.emailContactValidate,"Please enter a valid contact method")),l.a.createElement("div",{className:"mb-3"},l.a.createElement("label",{htmlFor:"exampleTextarea"},"Message"),l.a.createElement("textarea",{className:"form-control",id:"exampleTextarea",rows:"3",onChange:this.emailDescriptionHandler}),t(this.state.emailDescriptionValidate,"Please enter a message")),l.a.createElement("button",{className:a,onClick:this.emailSubmitHandler},this.state.messageSuccess?"Sent!":"Send")))))}}]),a}(n.Component),V=function(e){var a=e.duration,t=e.offset;return l.a.createElement("footer",{className:"footer"},l.a.createElement("nav",{className:"footer__nav"},l.a.createElement("ul",null,l.a.createElement("li",{className:"linkedin"},l.a.createElement("a",{href:"https://www.linkedin.com/in/adrian-pearman/",target:"_blank",alt:"Link to Adrian Pearman's professional LinkedIn profile",rel:"noopener noreferrer"},"LinkedIn")),l.a.createElement("li",{className:"github"},l.a.createElement("a",{href:"https://github.com/adrianpearman",target:"_blank",alt:"Link to Adrian Pearman's Github profile",rel:"noopener noreferrer"},"GitHub")),l.a.createElement("li",null,l.a.createElement(p.Link,{to:"AboutMe",spy:!0,smooth:!0,offset:t,duration:a},"About Me")),l.a.createElement("li",null,l.a.createElement(p.Link,{to:"Experience",spy:!0,smooth:!0,offset:t,duration:a},"Experience")),l.a.createElement("li",null,l.a.createElement(p.Link,{to:"Portfolio",spy:!0,smooth:!0,offset:t,duration:a},"Portfolio")),l.a.createElement("li",null,l.a.createElement(p.Link,{to:"ContactMe",spy:!0,smooth:!0,offset:t,duration:a},"Contact-Me")))),l.a.createElement("h4",{className:"footer__copyright"},"\xa9 Adrian Pearman ",(new Date).getFullYear()))},O=function(e){return l.a.createElement("div",{className:"portfolio__item"},l.a.createElement("div",{className:"card portfolio__item-card"},l.a.createElement("div",{className:"card-body"},l.a.createElement("h5",{className:"card-title emphasize-title"},"Project: ",e.title),l.a.createElement(n.Fragment,null,l.a.createElement("div",{className:"portfolio__item-link-container"},l.a.createElement("p",{className:"col"},l.a.createElement("a",{href:e.liveLink,className:"card-link",target:"_blank",rel:"noopener noreferrer"},"Live Site")),l.a.createElement("p",{className:"col"},l.a.createElement("a",{href:e.repoLink,className:"card-link",target:"_blank",rel:"noopener noreferrer"},"Repository"))),l.a.createElement("h6",null,"Project Overview:"),l.a.createElement("p",{className:"card-text"},e.overview),l.a.createElement("h6",null,"Technologies Used:"),l.a.createElement("ul",{className:"technology-stack"},e.stack.map(function(e,a){return l.a.createElement("li",{key:a},e)}))))))},P=function(e){function a(){var e,t;Object(c.a)(this,a);for(var n=arguments.length,l=new Array(n),i=0;i<n;i++)l[i]=arguments[i];return(t=Object(s.a)(this,(e=Object(m.a)(a)).call.apply(e,[this].concat(l)))).state={projectList:[]},t.fetchPortfolioHandler=function(){w.a.get("/api/data/projectList").then(function(e){var a=e.data;t.setState({projectList:a})}).catch(function(e){return console.error(e)})},t}return Object(u.a)(a,e),Object(o.a)(a,[{key:"componentWillMount",value:function(){this.fetchPortfolioHandler()}},{key:"render",value:function(){var e=this.state.projectList.map(function(e,a){return l.a.createElement(O,{key:a,title:e.title,overview:e.overview,stack:e.stack,liveLink:e.liveLink,repoLink:e.repoLink})});return l.a.createElement("div",{className:"portfolio"},l.a.createElement("div",{className:"row mb-3"},l.a.createElement("div",{className:"section__title col"},l.a.createElement("h1",null,"Portfolio ",l.a.createElement("span",{className:"emphasize"},"/")))),l.a.createElement("div",{className:"portfolio__container row"},this.state.projectList.length>0?e:l.a.createElement(C,null)),l.a.createElement("hr",null))}}]),a}(n.Component),z=(t(152),function(e){function a(e){var t;return Object(c.a)(this,a),(t=Object(s.a)(this,Object(m.a)(a).call(this,e))).state={showNavigation:!1,offset:-50,duration:500},t.onScroll=t.onScroll.bind(Object(d.a)(Object(d.a)(t))),t}return Object(u.a)(a,e),Object(o.a)(a,[{key:"scrollToTop",value:function(){p.animateScroll.scrollToTop()}},{key:"scrollTo",value:function(){p.scroller.scrollTo("scroll-to-element",{duration:800,delay:0,smooth:"easeInOutQuart"})}},{key:"onScroll",value:function(){var e=window.innerHeight-75,a=window.pageYOffset;a>e&&this.setState({showNavigation:!0}),a<e&&this.setState({showNavigation:!1})}},{key:"componentDidMount",value:function(){p.Events.scrollEvent.register("begin",function(){}),p.Events.scrollEvent.register("end",function(){}),window.addEventListener("scroll",this.onScroll)}},{key:"componentWillUnmount",value:function(){p.Events.scrollEvent.remove("begin"),p.Events.scrollEvent.remove("end")}},{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement(b,null),l.a.createElement(E,{showNavigation:this.state.showNavigation,offset:this.state.offset,duration:this.state.duration}),l.a.createElement("div",{className:"container"},l.a.createElement(p.Element,{name:"AboutMe"},l.a.createElement(k,{offset:this.state.offset,duration:this.state.duration})),l.a.createElement(p.Element,{name:"Experience"},l.a.createElement(x,null)),l.a.createElement(p.Element,{name:"Portfolio"},l.a.createElement(P,null)),l.a.createElement(p.Element,{name:"ContactMe"},l.a.createElement(j,null))),l.a.createElement(V,{offset:this.state.offset,duration:this.state.duration}))}}]),a}(n.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(l.a.createElement(z,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},47:function(e,a,t){e.exports=t.p+"static/media/HeaderBackground2.ac4ea8ec.jpg"},48:function(e,a,t){e.exports=t.p+"static/media/profilePhoto.e955bf0d.jpg"},50:function(e,a,t){e.exports=t(154)}},[[50,2,1]]]);
//# sourceMappingURL=main.9afb0e30.chunk.js.map