"use strict";(self.webpackChunkthe_way_of_the_samurai=self.webpackChunkthe_way_of_the_samurai||[]).push([[821],{2821:function(n,e,t){t.r(e),t.d(e,{default:function(){return y}});var r=t(1413),o=t(5671),s=t(3144),i=t(136),a=t(516),u=t(2791),l=t(3531),c=t(9439),d="Paginator_selected__ZxYxk",f="Paginator_pageLink__NzX6R",h=t(184);var g=function(n){for(var e=n.totalItemsCount,t=n.pageSize,r=n.currentPage,o=n.onPageChanged,s=n.portionSize,i=void 0===s?10:s,a=Math.ceil(e/t),l=[],g=1;g<=a;g++)l.push(g);var p=Math.ceil(a/i),x=(0,u.useState)(1),j=(0,c.Z)(x,2),v=j[0],P=j[1],w=(v-1)*i+1,m=v*i;return(0,u.useEffect)((function(){return P(Math.ceil(r/i))}),[r]),(0,h.jsxs)("div",{children:[v>1&&(0,h.jsx)("button",{onClick:function(){P(v-1)},children:"PREV"}),l.filter((function(n){return n>=w&&n<=m})).map((function(n){return(0,h.jsx)("span",{className:"\n\t\t\t\t".concat(r===n&&d," + ").concat(f,"\n\t\t\t\t"),onClick:function(){o(n)},children:n},n)})),p>v&&(0,h.jsx)("button",{onClick:function(){P(v+1)},children:"NEXT"})]})},p=t(1087),x="Users_avatar__nqNSy";var j=function(n){var e=n.user,t=n.followingInProgress,r=n.follow,o=n.unfollow;return(0,h.jsxs)("div",{children:[(0,h.jsxs)("span",{children:[(0,h.jsx)("div",{children:(0,h.jsx)(p.OL,{to:"/profile/".concat(e.id),children:(0,h.jsx)("img",{className:x,src:null!=e.photos.small?e.photos.small:"https://www.misemacau.org/wp-content/uploads/2015/11/avatar-placeholder-01-300x250.png",alt:"img"})})}),(0,h.jsx)("div",{children:e.followed?(0,h.jsx)("button",{disabled:t.some((function(n){return n===e.id})),onClick:function(){o(e.id)},children:"unfollow"}):(0,h.jsx)("button",{disabled:t.some((function(n){return n===e.id})),onClick:function(){r(e.id)},children:"follow"})})]}),(0,h.jsxs)("span",{children:[(0,h.jsxs)("span",{children:[(0,h.jsx)("div",{children:e.name}),(0,h.jsx)("div",{children:e.status})]}),(0,h.jsxs)("span",{children:[(0,h.jsx)("div",{children:"country"}),(0,h.jsx)("div",{children:"city"})]})]})]})};var v=function(n){var e=n.totalItemsCount,t=n.pageSize,r=n.currentPage,o=n.onPageChanged,s=n.users,i=n.followingInProgress,a=n.follow,u=n.unfollow;return(0,h.jsxs)("div",{children:[(0,h.jsx)(g,{totalItemsCount:e,pageSize:t,currentPage:r,onPageChanged:o}),s.map((function(n){return(0,h.jsx)(j,{user:n,followingInProgress:i,follow:a,unfollow:u},n.id)}))]})},P=t(5125),w=t(8423),m=t(7781),C=function(n){return n.usersPage.users},_=function(n){return n.usersPage.pageSize},k=function(n){return n.usersPage.totalUsersCount},S=function(n){return n.usersPage.currentPage},Z=function(n){return n.usersPage.followingInProgress},b=function(n){(0,i.Z)(t,n);var e=(0,a.Z)(t);function t(){return(0,o.Z)(this,t),e.apply(this,arguments)}return(0,s.Z)(t,[{key:"componentDidMount",value:function(){this.props.getUsers(this.props.currentPage,this.props.pageSize)}},{key:"onPageChanged",value:function(n){this.props.getUsers(n,this.props.pageSize)}},{key:"render",value:function(){return(0,h.jsx)(w.Z,{children:(0,h.jsx)(v,(0,r.Z)((0,r.Z)({},this.props),{},{onPageChanged:this.onPageChanged.bind(this)}))})}}]),t}(u.Component),y=(0,m.qC)((0,l.$j)((function(n){return{users:C(n),pageSize:_(n),totalItemsCount:k(n),currentPage:S(n),followingInProgress:Z(n)}}),{getUsers:P.Rf,follow:P.ZN,unfollow:P.fv}))(b)}}]);
//# sourceMappingURL=821.7caabcf8.chunk.js.map