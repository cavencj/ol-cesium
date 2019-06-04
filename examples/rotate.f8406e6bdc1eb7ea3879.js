(()=>{"use strict";var t,e={994:(t,e,o)=>{var n=o(9301),r=o(2939),i=o(8613),s=o(9741),a=o(3601),c=o(6734),l=o(6310),u=o(261);const p=new l.Z({layers:[new c.Z({source:new a.Z})],target:"map2d",controls:(0,s.ce)({attributionOptions:{collapsible:!1}}),view:new i.ZP({center:[333333,15e5],zoom:6})});Cesium.Ion.defaultAccessToken=u.x;const g=new r.Z({map:p});g.getCesiumScene().terrainProvider=Cesium.createWorldTerrain(),g.setEnabled(!0);const d=function(t){this.ol3d_=t};d.MAX_TILT=7*Math.PI/16,d.MIN_TILT=0,d.prototype.getOlView=function(){return this.ol3d_.getOlView()},d.prototype.getTiltRange=function(){return[d.MIN_TILT,d.MAX_TILT]},d.prototype.getHeading=function(){return this.getOlView().getRotation()||0},d.prototype.getTiltOnGlobe=function(){const t=this.ol3d_.getCesiumScene();return-n.ZP.computeSignedTiltAngleOnGlobe(t)},d.prototype.resetToNorthZenith=function(t){const e=this.ol3d_.getCesiumScene(),o=e.camera,r=n.ZP.pickBottomPoint(e);if(!r)return void t();const i=this.getHeading(),s=n.ZP.computeAngleToZenith(e,r);n.ZP.setHeadingUsingBottomCenter(e,i,r);const a=Cesium.Matrix4.fromTranslation(r),c=o.right,l={callback:t};n.ZP.rotateAroundAxis(o,-s,c,a,l)},d.prototype.rotate=function(t){const e=this.ol3d_.getOlView(),o=e.getRotation();e.animate({rotation:o+t,duration:250})},d.prototype.setHeading=function(t){const e=this.ol3d_.getCesiumScene(),o=n.ZP.pickBottomPoint(e);o&&n.ZP.setHeadingUsingBottomCenter(e,t,o)},d.prototype.tiltOnGlobe=function(t){const e=this.ol3d_.getCesiumScene(),o=e.camera,r=n.ZP.pickBottomPoint(e);if(!r)return;const i=Cesium.Matrix4.fromTranslation(r),s=o.right;(0,n.ZP.rotateAroundAxis)(o,-t,s,i,{})},window.control=new d(g)}},o={};function n(t){var r=o[t];if(void 0!==r)return r.exports;var i=o[t]={exports:{}};return e[t].call(i.exports,i,i.exports,n),i.exports}n.m=e,t=[],n.O=(e,o,r,i)=>{if(!o){var s=1/0;for(l=0;l<t.length;l++){for(var[o,r,i]=t[l],a=!0,c=0;c<o.length;c++)(!1&i||s>=i)&&Object.keys(n.O).every((t=>n.O[t](o[c])))?o.splice(c--,1):(a=!1,i<s&&(s=i));a&&(t.splice(l--,1),e=r())}return e}i=i||0;for(var l=t.length;l>0&&t[l-1][2]>i;l--)t[l]=t[l-1];t[l]=[o,r,i]},n.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return n.d(e,{a:e}),e},n.d=(t,e)=>{for(var o in e)n.o(e,o)&&!n.o(t,o)&&Object.defineProperty(t,o,{enumerable:!0,get:e[o]})},n.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),n.j=212,(()=>{var t={212:0};n.O.j=e=>0===t[e];var e=(e,o)=>{var r,i,[s,a,c]=o,l=0;for(r in a)n.o(a,r)&&(n.m[r]=a[r]);if(c)var u=c(n);for(e&&e(o);l<s.length;l++)i=s[l],n.o(t,i)&&t[i]&&t[i][0](),t[s[l]]=0;return n.O(u)},o=self.webpackChunkol_cesium=self.webpackChunkol_cesium||[];o.forEach(e.bind(null,0)),o.push=e.bind(null,o.push.bind(o))})();var r=n.O(void 0,[351],(()=>n(994)));r=n.O(r)})();
//# sourceMappingURL=rotate.f8406e6bdc1eb7ea3879.js.map