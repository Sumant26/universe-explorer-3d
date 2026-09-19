(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function t(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(s){if(s.ep)return;s.ep=!0;const r=t(s);fetch(s.href,r)}})();/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const qa="160",xu=0,fo=1,Su=2,dc=1,Mu=2,Sn=3,Bn=0,Dt=1,St=2,bn=0,Oi=1,ot=2,po=3,mo=4,bu=5,Zn=100,Eu=101,Tu=102,go=103,_o=104,Au=200,wu=201,Cu=202,Ru=203,xa=204,Sa=205,Lu=206,Pu=207,Iu=208,Du=209,Ou=210,Nu=211,Uu=212,Fu=213,Gu=214,Bu=0,Hu=1,ku=2,or=3,zu=4,Vu=5,Wu=6,qu=7,fc=0,Xu=1,Ku=2,Fn=0,Yu=1,$u=2,ju=3,pc=4,Zu=5,Ju=6,mc=300,Fi=301,Gi=302,Ma=303,ba=304,_r=306,Ea=1e3,an=1001,Ta=1002,Ht=1003,vo=1004,Cr=1005,Jt=1006,Qu=1007,fs=1008,Gn=1009,eh=1010,th=1011,Xa=1012,gc=1013,Nn=1014,Un=1015,En=1016,_c=1017,vc=1018,ti=1020,nh=1021,on=1023,ih=1024,sh=1025,ni=1026,Bi=1027,rh=1028,yc=1029,ah=1030,xc=1031,Sc=1033,Rr=33776,Lr=33777,Pr=33778,Ir=33779,yo=35840,xo=35841,So=35842,Mo=35843,Mc=36196,bo=37492,Eo=37496,To=37808,Ao=37809,wo=37810,Co=37811,Ro=37812,Lo=37813,Po=37814,Io=37815,Do=37816,Oo=37817,No=37818,Uo=37819,Fo=37820,Go=37821,Dr=36492,Bo=36494,Ho=36495,oh=36283,ko=36284,zo=36285,Vo=36286,bc=3e3,ii=3001,lh=3200,ch=3201,Ec=0,uh=1,Qt="",xt="srgb",Tn="srgb-linear",Ka="display-p3",vr="display-p3-linear",lr="linear",ht="srgb",cr="rec709",ur="p3",di=7680,Wo=519,hh=512,dh=513,fh=514,Tc=515,ph=516,mh=517,gh=518,_h=519,qo=35044,Xo="300 es",Aa=1035,Mn=2e3,hr=2001;class Vi{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const s=this._listeners[e];if(s!==void 0){const r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,e);e.target=null}}}const Nt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Or=Math.PI/180,wa=180/Math.PI;function Wi(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Nt[i&255]+Nt[i>>8&255]+Nt[i>>16&255]+Nt[i>>24&255]+"-"+Nt[e&255]+Nt[e>>8&255]+"-"+Nt[e>>16&15|64]+Nt[e>>24&255]+"-"+Nt[t&63|128]+Nt[t>>8&255]+"-"+Nt[t>>16&255]+Nt[t>>24&255]+Nt[n&255]+Nt[n>>8&255]+Nt[n>>16&255]+Nt[n>>24&255]).toLowerCase()}function Pt(i,e,t){return Math.max(e,Math.min(t,i))}function vh(i,e){return(i%e+e)%e}function Nr(i,e,t){return(1-t)*i+t*e}function Ko(i){return(i&i-1)===0&&i!==0}function Ca(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function Ki(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function zt(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}class le{constructor(e=0,t=0){le.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Pt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*n-a*s+e.x,this.y=r*s+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ke{constructor(e,t,n,s,r,a,o,l,c){Ke.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,l,c)}set(e,t,n,s,r,a,o,l,c){const u=this.elements;return u[0]=e,u[1]=s,u[2]=o,u[3]=t,u[4]=r,u[5]=l,u[6]=n,u[7]=a,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],u=n[4],h=n[7],d=n[2],p=n[5],g=n[8],_=s[0],m=s[3],f=s[6],y=s[1],v=s[4],S=s[7],R=s[2],A=s[5],w=s[8];return r[0]=a*_+o*y+l*R,r[3]=a*m+o*v+l*A,r[6]=a*f+o*S+l*w,r[1]=c*_+u*y+h*R,r[4]=c*m+u*v+h*A,r[7]=c*f+u*S+h*w,r[2]=d*_+p*y+g*R,r[5]=d*m+p*v+g*A,r[8]=d*f+p*S+g*w,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8];return t*a*u-t*o*c-n*r*u+n*o*l+s*r*c-s*a*l}invert(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],h=u*a-o*c,d=o*l-u*r,p=c*r-a*l,g=t*h+n*d+s*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return e[0]=h*_,e[1]=(s*c-u*n)*_,e[2]=(o*n-s*a)*_,e[3]=d*_,e[4]=(u*t-s*l)*_,e[5]=(s*r-o*t)*_,e[6]=p*_,e[7]=(n*l-c*t)*_,e[8]=(a*t-n*r)*_,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,a,o){const l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*a+c*o)+a+e,-s*c,s*l,-s*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(Ur.makeScale(e,t)),this}rotate(e){return this.premultiply(Ur.makeRotation(-e)),this}translate(e,t){return this.premultiply(Ur.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Ur=new Ke;function Ac(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function dr(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function yh(){const i=dr("canvas");return i.style.display="block",i}const Yo={};function os(i){i in Yo||(Yo[i]=!0,console.warn(i))}const $o=new Ke().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),jo=new Ke().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Es={[Tn]:{transfer:lr,primaries:cr,toReference:i=>i,fromReference:i=>i},[xt]:{transfer:ht,primaries:cr,toReference:i=>i.convertSRGBToLinear(),fromReference:i=>i.convertLinearToSRGB()},[vr]:{transfer:lr,primaries:ur,toReference:i=>i.applyMatrix3(jo),fromReference:i=>i.applyMatrix3($o)},[Ka]:{transfer:ht,primaries:ur,toReference:i=>i.convertSRGBToLinear().applyMatrix3(jo),fromReference:i=>i.applyMatrix3($o).convertLinearToSRGB()}},xh=new Set([Tn,vr]),nt={enabled:!0,_workingColorSpace:Tn,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(i){if(!xh.has(i))throw new Error(`Unsupported working color space, "${i}".`);this._workingColorSpace=i},convert:function(i,e,t){if(this.enabled===!1||e===t||!e||!t)return i;const n=Es[e].toReference,s=Es[t].fromReference;return s(n(i))},fromWorkingColorSpace:function(i,e){return this.convert(i,this._workingColorSpace,e)},toWorkingColorSpace:function(i,e){return this.convert(i,e,this._workingColorSpace)},getPrimaries:function(i){return Es[i].primaries},getTransfer:function(i){return i===Qt?lr:Es[i].transfer}};function Ni(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Fr(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let fi;class wc{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{fi===void 0&&(fi=dr("canvas")),fi.width=e.width,fi.height=e.height;const n=fi.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=fi}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=dr("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=Ni(r[a]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Ni(t[n]/255)*255):t[n]=Ni(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Sh=0;class Cc{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Sh++}),this.uuid=Wi(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(Gr(s[a].image)):r.push(Gr(s[a]))}else r=Gr(s);n.url=r}return t||(e.images[this.uuid]=n),n}}function Gr(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?wc.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Mh=0;class qt extends Vi{constructor(e=qt.DEFAULT_IMAGE,t=qt.DEFAULT_MAPPING,n=an,s=an,r=Jt,a=fs,o=on,l=Gn,c=qt.DEFAULT_ANISOTROPY,u=Qt){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Mh++}),this.uuid=Wi(),this.name="",this.source=new Cc(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new le(0,0),this.repeat=new le(1,1),this.center=new le(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ke,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof u=="string"?this.colorSpace=u:(os("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=u===ii?xt:Qt),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==mc)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Ea:e.x=e.x-Math.floor(e.x);break;case an:e.x=e.x<0?0:1;break;case Ta:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Ea:e.y=e.y-Math.floor(e.y);break;case an:e.y=e.y<0?0:1;break;case Ta:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return os("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===xt?ii:bc}set encoding(e){os("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===ii?xt:Qt}}qt.DEFAULT_IMAGE=null;qt.DEFAULT_MAPPING=mc;qt.DEFAULT_ANISOTROPY=1;class dt{constructor(e=0,t=0,n=0,s=1){dt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,s=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*t+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*t+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*t+a[7]*n+a[11]*s+a[15]*r,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r;const l=e.elements,c=l[0],u=l[4],h=l[8],d=l[1],p=l[5],g=l[9],_=l[2],m=l[6],f=l[10];if(Math.abs(u-d)<.01&&Math.abs(h-_)<.01&&Math.abs(g-m)<.01){if(Math.abs(u+d)<.1&&Math.abs(h+_)<.1&&Math.abs(g+m)<.1&&Math.abs(c+p+f-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const v=(c+1)/2,S=(p+1)/2,R=(f+1)/2,A=(u+d)/4,w=(h+_)/4,O=(g+m)/4;return v>S&&v>R?v<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(v),s=A/n,r=w/n):S>R?S<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(S),n=A/s,r=O/s):R<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(R),n=w/r,s=O/r),this.set(n,s,r,t),this}let y=Math.sqrt((m-g)*(m-g)+(h-_)*(h-_)+(d-u)*(d-u));return Math.abs(y)<.001&&(y=1),this.x=(m-g)/y,this.y=(h-_)/y,this.z=(d-u)/y,this.w=Math.acos((c+p+f-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class bh extends Vi{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new dt(0,0,e,t),this.scissorTest=!1,this.viewport=new dt(0,0,e,t);const s={width:e,height:t,depth:1};n.encoding!==void 0&&(os("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),n.colorSpace=n.encoding===ii?xt:Qt),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Jt,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},n),this.texture=new qt(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps,this.texture.internalFormat=n.internalFormat,this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}setSize(e,t,n=1){(this.width!==e||this.height!==t||this.depth!==n)&&(this.width=e,this.height=t,this.depth=n,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new Cc(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class cn extends bh{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class Rc extends qt{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Ht,this.minFilter=Ht,this.wrapR=an,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Eh extends qt{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Ht,this.minFilter=Ht,this.wrapR=an,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class vs{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,a,o){let l=n[s+0],c=n[s+1],u=n[s+2],h=n[s+3];const d=r[a+0],p=r[a+1],g=r[a+2],_=r[a+3];if(o===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h;return}if(o===1){e[t+0]=d,e[t+1]=p,e[t+2]=g,e[t+3]=_;return}if(h!==_||l!==d||c!==p||u!==g){let m=1-o;const f=l*d+c*p+u*g+h*_,y=f>=0?1:-1,v=1-f*f;if(v>Number.EPSILON){const R=Math.sqrt(v),A=Math.atan2(R,f*y);m=Math.sin(m*A)/R,o=Math.sin(o*A)/R}const S=o*y;if(l=l*m+d*S,c=c*m+p*S,u=u*m+g*S,h=h*m+_*S,m===1-o){const R=1/Math.sqrt(l*l+c*c+u*u+h*h);l*=R,c*=R,u*=R,h*=R}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h}static multiplyQuaternionsFlat(e,t,n,s,r,a){const o=n[s],l=n[s+1],c=n[s+2],u=n[s+3],h=r[a],d=r[a+1],p=r[a+2],g=r[a+3];return e[t]=o*g+u*h+l*p-c*d,e[t+1]=l*g+u*d+c*h-o*p,e[t+2]=c*g+u*p+o*d-l*h,e[t+3]=u*g-o*h-l*d-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,s=e._y,r=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(n/2),u=o(s/2),h=o(r/2),d=l(n/2),p=l(s/2),g=l(r/2);switch(a){case"XYZ":this._x=d*u*h+c*p*g,this._y=c*p*h-d*u*g,this._z=c*u*g+d*p*h,this._w=c*u*h-d*p*g;break;case"YXZ":this._x=d*u*h+c*p*g,this._y=c*p*h-d*u*g,this._z=c*u*g-d*p*h,this._w=c*u*h+d*p*g;break;case"ZXY":this._x=d*u*h-c*p*g,this._y=c*p*h+d*u*g,this._z=c*u*g+d*p*h,this._w=c*u*h-d*p*g;break;case"ZYX":this._x=d*u*h-c*p*g,this._y=c*p*h+d*u*g,this._z=c*u*g-d*p*h,this._w=c*u*h+d*p*g;break;case"YZX":this._x=d*u*h+c*p*g,this._y=c*p*h+d*u*g,this._z=c*u*g-d*p*h,this._w=c*u*h-d*p*g;break;case"XZY":this._x=d*u*h-c*p*g,this._y=c*p*h-d*u*g,this._z=c*u*g+d*p*h,this._w=c*u*h+d*p*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],s=t[4],r=t[8],a=t[1],o=t[5],l=t[9],c=t[2],u=t[6],h=t[10],d=n+o+h;if(d>0){const p=.5/Math.sqrt(d+1);this._w=.25/p,this._x=(u-l)*p,this._y=(r-c)*p,this._z=(a-s)*p}else if(n>o&&n>h){const p=2*Math.sqrt(1+n-o-h);this._w=(u-l)/p,this._x=.25*p,this._y=(s+a)/p,this._z=(r+c)/p}else if(o>h){const p=2*Math.sqrt(1+o-n-h);this._w=(r-c)/p,this._x=(s+a)/p,this._y=.25*p,this._z=(l+u)/p}else{const p=2*Math.sqrt(1+h-n-o);this._w=(a-s)/p,this._x=(r+c)/p,this._y=(l+u)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Pt(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,s=e._y,r=e._z,a=e._w,o=t._x,l=t._y,c=t._z,u=t._w;return this._x=n*u+a*o+s*c-r*l,this._y=s*u+a*l+r*o-n*c,this._z=r*u+a*c+n*l-s*o,this._w=a*u-n*o-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,s=this._y,r=this._z,a=this._w;let o=a*e._w+n*e._x+s*e._y+r*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=n,this._y=s,this._z=r,this;const l=1-o*o;if(l<=Number.EPSILON){const p=1-t;return this._w=p*a+t*this._w,this._x=p*n+t*this._x,this._y=p*s+t*this._y,this._z=p*r+t*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,o),h=Math.sin((1-t)*u)/c,d=Math.sin(t*u)/c;return this._w=a*h+this._w*d,this._x=n*h+this._x*d,this._y=s*h+this._y*d,this._z=r*h+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=Math.random(),t=Math.sqrt(1-e),n=Math.sqrt(e),s=2*Math.PI*Math.random(),r=2*Math.PI*Math.random();return this.set(t*Math.cos(s),n*Math.sin(r),n*Math.cos(r),t*Math.sin(s))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class C{constructor(e=0,t=0,n=0){C.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Zo.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Zo.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,s=this.z,r=e.elements,a=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(e){const t=this.x,n=this.y,s=this.z,r=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*s-o*n),u=2*(o*t-r*s),h=2*(r*n-a*t);return this.x=t+l*c+a*h-o*u,this.y=n+l*u+o*c-r*h,this.z=s+l*h+r*u-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,s=e.y,r=e.z,a=t.x,o=t.y,l=t.z;return this.x=s*l-r*o,this.y=r*a-n*l,this.z=n*o-s*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Br.copy(this).projectOnVector(e),this.sub(Br)}reflect(e){return this.sub(Br.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Pt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,n=Math.sqrt(1-e**2);return this.x=n*Math.cos(t),this.y=n*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Br=new C,Zo=new vs;class ai{constructor(e=new C(1/0,1/0,1/0),t=new C(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(tn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(tn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=tn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,tn):tn.fromBufferAttribute(r,a),tn.applyMatrix4(e.matrixWorld),this.expandByPoint(tn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Ts.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Ts.copy(n.boundingBox)),Ts.applyMatrix4(e.matrixWorld),this.union(Ts)}const s=e.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,tn),tn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Yi),As.subVectors(this.max,Yi),pi.subVectors(e.a,Yi),mi.subVectors(e.b,Yi),gi.subVectors(e.c,Yi),Cn.subVectors(mi,pi),Rn.subVectors(gi,mi),Wn.subVectors(pi,gi);let t=[0,-Cn.z,Cn.y,0,-Rn.z,Rn.y,0,-Wn.z,Wn.y,Cn.z,0,-Cn.x,Rn.z,0,-Rn.x,Wn.z,0,-Wn.x,-Cn.y,Cn.x,0,-Rn.y,Rn.x,0,-Wn.y,Wn.x,0];return!Hr(t,pi,mi,gi,As)||(t=[1,0,0,0,1,0,0,0,1],!Hr(t,pi,mi,gi,As))?!1:(ws.crossVectors(Cn,Rn),t=[ws.x,ws.y,ws.z],Hr(t,pi,mi,gi,As))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,tn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(tn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(gn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),gn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),gn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),gn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),gn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),gn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),gn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),gn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(gn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const gn=[new C,new C,new C,new C,new C,new C,new C,new C],tn=new C,Ts=new ai,pi=new C,mi=new C,gi=new C,Cn=new C,Rn=new C,Wn=new C,Yi=new C,As=new C,ws=new C,qn=new C;function Hr(i,e,t,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){qn.fromArray(i,r);const o=s.x*Math.abs(qn.x)+s.y*Math.abs(qn.y)+s.z*Math.abs(qn.z),l=e.dot(qn),c=t.dot(qn),u=n.dot(qn);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>o)return!1}return!0}const Th=new ai,$i=new C,kr=new C;class oi{constructor(e=new C,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):Th.setFromPoints(e).getCenter(n);let s=0;for(let r=0,a=e.length;r<a;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;$i.subVectors(e,this.center);const t=$i.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector($i,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(kr.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint($i.copy(e.center).add(kr)),this.expandByPoint($i.copy(e.center).sub(kr))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const _n=new C,zr=new C,Cs=new C,Ln=new C,Vr=new C,Rs=new C,Wr=new C;class yr{constructor(e=new C,t=new C(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,_n)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=_n.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(_n.copy(this.origin).addScaledVector(this.direction,t),_n.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){zr.copy(e).add(t).multiplyScalar(.5),Cs.copy(t).sub(e).normalize(),Ln.copy(this.origin).sub(zr);const r=e.distanceTo(t)*.5,a=-this.direction.dot(Cs),o=Ln.dot(this.direction),l=-Ln.dot(Cs),c=Ln.lengthSq(),u=Math.abs(1-a*a);let h,d,p,g;if(u>0)if(h=a*l-o,d=a*o-l,g=r*u,h>=0)if(d>=-g)if(d<=g){const _=1/u;h*=_,d*=_,p=h*(h+a*d+2*o)+d*(a*h+d+2*l)+c}else d=r,h=Math.max(0,-(a*d+o)),p=-h*h+d*(d+2*l)+c;else d=-r,h=Math.max(0,-(a*d+o)),p=-h*h+d*(d+2*l)+c;else d<=-g?(h=Math.max(0,-(-a*r+o)),d=h>0?-r:Math.min(Math.max(-r,-l),r),p=-h*h+d*(d+2*l)+c):d<=g?(h=0,d=Math.min(Math.max(-r,-l),r),p=d*(d+2*l)+c):(h=Math.max(0,-(a*r+o)),d=h>0?r:Math.min(Math.max(-r,-l),r),p=-h*h+d*(d+2*l)+c);else d=a>0?-r:r,h=Math.max(0,-(a*d+o)),p=-h*h+d*(d+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,h),s&&s.copy(zr).addScaledVector(Cs,d),p}intersectSphere(e,t){_n.subVectors(e.center,this.origin);const n=_n.dot(this.direction),s=_n.dot(_n)-n*n,r=e.radius*e.radius;if(s>r)return null;const a=Math.sqrt(r-s),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,a,o,l;const c=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,d=this.origin;return c>=0?(n=(e.min.x-d.x)*c,s=(e.max.x-d.x)*c):(n=(e.max.x-d.x)*c,s=(e.min.x-d.x)*c),u>=0?(r=(e.min.y-d.y)*u,a=(e.max.y-d.y)*u):(r=(e.max.y-d.y)*u,a=(e.min.y-d.y)*u),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),h>=0?(o=(e.min.z-d.z)*h,l=(e.max.z-d.z)*h):(o=(e.max.z-d.z)*h,l=(e.min.z-d.z)*h),n>l||o>s)||((o>n||n!==n)&&(n=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,_n)!==null}intersectTriangle(e,t,n,s,r){Vr.subVectors(t,e),Rs.subVectors(n,e),Wr.crossVectors(Vr,Rs);let a=this.direction.dot(Wr),o;if(a>0){if(s)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Ln.subVectors(this.origin,e);const l=o*this.direction.dot(Rs.crossVectors(Ln,Rs));if(l<0)return null;const c=o*this.direction.dot(Vr.cross(Ln));if(c<0||l+c>a)return null;const u=-o*Ln.dot(Wr);return u<0?null:this.at(u/a,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class lt{constructor(e,t,n,s,r,a,o,l,c,u,h,d,p,g,_,m){lt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,l,c,u,h,d,p,g,_,m)}set(e,t,n,s,r,a,o,l,c,u,h,d,p,g,_,m){const f=this.elements;return f[0]=e,f[4]=t,f[8]=n,f[12]=s,f[1]=r,f[5]=a,f[9]=o,f[13]=l,f[2]=c,f[6]=u,f[10]=h,f[14]=d,f[3]=p,f[7]=g,f[11]=_,f[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new lt().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,s=1/_i.setFromMatrixColumn(e,0).length(),r=1/_i.setFromMatrixColumn(e,1).length(),a=1/_i.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,s=e.y,r=e.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(s),c=Math.sin(s),u=Math.cos(r),h=Math.sin(r);if(e.order==="XYZ"){const d=a*u,p=a*h,g=o*u,_=o*h;t[0]=l*u,t[4]=-l*h,t[8]=c,t[1]=p+g*c,t[5]=d-_*c,t[9]=-o*l,t[2]=_-d*c,t[6]=g+p*c,t[10]=a*l}else if(e.order==="YXZ"){const d=l*u,p=l*h,g=c*u,_=c*h;t[0]=d+_*o,t[4]=g*o-p,t[8]=a*c,t[1]=a*h,t[5]=a*u,t[9]=-o,t[2]=p*o-g,t[6]=_+d*o,t[10]=a*l}else if(e.order==="ZXY"){const d=l*u,p=l*h,g=c*u,_=c*h;t[0]=d-_*o,t[4]=-a*h,t[8]=g+p*o,t[1]=p+g*o,t[5]=a*u,t[9]=_-d*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){const d=a*u,p=a*h,g=o*u,_=o*h;t[0]=l*u,t[4]=g*c-p,t[8]=d*c+_,t[1]=l*h,t[5]=_*c+d,t[9]=p*c-g,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){const d=a*l,p=a*c,g=o*l,_=o*c;t[0]=l*u,t[4]=_-d*h,t[8]=g*h+p,t[1]=h,t[5]=a*u,t[9]=-o*u,t[2]=-c*u,t[6]=p*h+g,t[10]=d-_*h}else if(e.order==="XZY"){const d=a*l,p=a*c,g=o*l,_=o*c;t[0]=l*u,t[4]=-h,t[8]=c*u,t[1]=d*h+_,t[5]=a*u,t[9]=p*h-g,t[2]=g*h-p,t[6]=o*u,t[10]=_*h+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Ah,e,wh)}lookAt(e,t,n){const s=this.elements;return Kt.subVectors(e,t),Kt.lengthSq()===0&&(Kt.z=1),Kt.normalize(),Pn.crossVectors(n,Kt),Pn.lengthSq()===0&&(Math.abs(n.z)===1?Kt.x+=1e-4:Kt.z+=1e-4,Kt.normalize(),Pn.crossVectors(n,Kt)),Pn.normalize(),Ls.crossVectors(Kt,Pn),s[0]=Pn.x,s[4]=Ls.x,s[8]=Kt.x,s[1]=Pn.y,s[5]=Ls.y,s[9]=Kt.y,s[2]=Pn.z,s[6]=Ls.z,s[10]=Kt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],u=n[1],h=n[5],d=n[9],p=n[13],g=n[2],_=n[6],m=n[10],f=n[14],y=n[3],v=n[7],S=n[11],R=n[15],A=s[0],w=s[4],O=s[8],M=s[12],E=s[1],N=s[5],H=s[9],se=s[13],P=s[2],G=s[6],k=s[10],j=s[14],Z=s[3],ee=s[7],q=s[11],X=s[15];return r[0]=a*A+o*E+l*P+c*Z,r[4]=a*w+o*N+l*G+c*ee,r[8]=a*O+o*H+l*k+c*q,r[12]=a*M+o*se+l*j+c*X,r[1]=u*A+h*E+d*P+p*Z,r[5]=u*w+h*N+d*G+p*ee,r[9]=u*O+h*H+d*k+p*q,r[13]=u*M+h*se+d*j+p*X,r[2]=g*A+_*E+m*P+f*Z,r[6]=g*w+_*N+m*G+f*ee,r[10]=g*O+_*H+m*k+f*q,r[14]=g*M+_*se+m*j+f*X,r[3]=y*A+v*E+S*P+R*Z,r[7]=y*w+v*N+S*G+R*ee,r[11]=y*O+v*H+S*k+R*q,r[15]=y*M+v*se+S*j+R*X,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],a=e[1],o=e[5],l=e[9],c=e[13],u=e[2],h=e[6],d=e[10],p=e[14],g=e[3],_=e[7],m=e[11],f=e[15];return g*(+r*l*h-s*c*h-r*o*d+n*c*d+s*o*p-n*l*p)+_*(+t*l*p-t*c*d+r*a*d-s*a*p+s*c*u-r*l*u)+m*(+t*c*h-t*o*p-r*a*h+n*a*p+r*o*u-n*c*u)+f*(-s*o*u-t*l*h+t*o*d+s*a*h-n*a*d+n*l*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],h=e[9],d=e[10],p=e[11],g=e[12],_=e[13],m=e[14],f=e[15],y=h*m*c-_*d*c+_*l*p-o*m*p-h*l*f+o*d*f,v=g*d*c-u*m*c-g*l*p+a*m*p+u*l*f-a*d*f,S=u*_*c-g*h*c+g*o*p-a*_*p-u*o*f+a*h*f,R=g*h*l-u*_*l-g*o*d+a*_*d+u*o*m-a*h*m,A=t*y+n*v+s*S+r*R;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const w=1/A;return e[0]=y*w,e[1]=(_*d*r-h*m*r-_*s*p+n*m*p+h*s*f-n*d*f)*w,e[2]=(o*m*r-_*l*r+_*s*c-n*m*c-o*s*f+n*l*f)*w,e[3]=(h*l*r-o*d*r-h*s*c+n*d*c+o*s*p-n*l*p)*w,e[4]=v*w,e[5]=(u*m*r-g*d*r+g*s*p-t*m*p-u*s*f+t*d*f)*w,e[6]=(g*l*r-a*m*r-g*s*c+t*m*c+a*s*f-t*l*f)*w,e[7]=(a*d*r-u*l*r+u*s*c-t*d*c-a*s*p+t*l*p)*w,e[8]=S*w,e[9]=(g*h*r-u*_*r-g*n*p+t*_*p+u*n*f-t*h*f)*w,e[10]=(a*_*r-g*o*r+g*n*c-t*_*c-a*n*f+t*o*f)*w,e[11]=(u*o*r-a*h*r-u*n*c+t*h*c+a*n*p-t*o*p)*w,e[12]=R*w,e[13]=(u*_*s-g*h*s+g*n*d-t*_*d-u*n*m+t*h*m)*w,e[14]=(g*o*s-a*_*s-g*n*l+t*_*l+a*n*m-t*o*m)*w,e[15]=(a*h*s-u*o*s+u*n*l-t*h*l-a*n*d+t*o*d)*w,this}scale(e){const t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),s=Math.sin(t),r=1-n,a=e.x,o=e.y,l=e.z,c=r*a,u=r*o;return this.set(c*a+n,c*o-s*l,c*l+s*o,0,c*o+s*l,u*o+n,u*l-s*a,0,c*l-s*o,u*l+s*a,r*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,a){return this.set(1,n,r,0,e,1,a,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){const s=this.elements,r=t._x,a=t._y,o=t._z,l=t._w,c=r+r,u=a+a,h=o+o,d=r*c,p=r*u,g=r*h,_=a*u,m=a*h,f=o*h,y=l*c,v=l*u,S=l*h,R=n.x,A=n.y,w=n.z;return s[0]=(1-(_+f))*R,s[1]=(p+S)*R,s[2]=(g-v)*R,s[3]=0,s[4]=(p-S)*A,s[5]=(1-(d+f))*A,s[6]=(m+y)*A,s[7]=0,s[8]=(g+v)*w,s[9]=(m-y)*w,s[10]=(1-(d+_))*w,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){const s=this.elements;let r=_i.set(s[0],s[1],s[2]).length();const a=_i.set(s[4],s[5],s[6]).length(),o=_i.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],nn.copy(this);const c=1/r,u=1/a,h=1/o;return nn.elements[0]*=c,nn.elements[1]*=c,nn.elements[2]*=c,nn.elements[4]*=u,nn.elements[5]*=u,nn.elements[6]*=u,nn.elements[8]*=h,nn.elements[9]*=h,nn.elements[10]*=h,t.setFromRotationMatrix(nn),n.x=r,n.y=a,n.z=o,this}makePerspective(e,t,n,s,r,a,o=Mn){const l=this.elements,c=2*r/(t-e),u=2*r/(n-s),h=(t+e)/(t-e),d=(n+s)/(n-s);let p,g;if(o===Mn)p=-(a+r)/(a-r),g=-2*a*r/(a-r);else if(o===hr)p=-a/(a-r),g=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=h,l[12]=0,l[1]=0,l[5]=u,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,s,r,a,o=Mn){const l=this.elements,c=1/(t-e),u=1/(n-s),h=1/(a-r),d=(t+e)*c,p=(n+s)*u;let g,_;if(o===Mn)g=(a+r)*h,_=-2*h;else if(o===hr)g=r*h,_=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=_,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const _i=new C,nn=new lt,Ah=new C(0,0,0),wh=new C(1,1,1),Pn=new C,Ls=new C,Kt=new C,Jo=new lt,Qo=new vs;class ys{constructor(e=0,t=0,n=0,s=ys.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const s=e.elements,r=s[0],a=s[4],o=s[8],l=s[1],c=s[5],u=s[9],h=s[2],d=s[6],p=s[10];switch(t){case"XYZ":this._y=Math.asin(Pt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,p),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Pt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,r),this._z=0);break;case"ZXY":this._x=Math.asin(Pt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-h,p),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Pt(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(d,p),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Pt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-h,r)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-Pt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-u,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Jo.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Jo,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Qo.setFromEuler(this),this.setFromQuaternion(Qo,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}ys.DEFAULT_ORDER="XYZ";class Ya{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Ch=0;const el=new C,vi=new vs,vn=new lt,Ps=new C,ji=new C,Rh=new C,Lh=new vs,tl=new C(1,0,0),nl=new C(0,1,0),il=new C(0,0,1),Ph={type:"added"},Ih={type:"removed"};class Et extends Vi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Ch++}),this.uuid=Wi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Et.DEFAULT_UP.clone();const e=new C,t=new ys,n=new vs,s=new C(1,1,1);function r(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new lt},normalMatrix:{value:new Ke}}),this.matrix=new lt,this.matrixWorld=new lt,this.matrixAutoUpdate=Et.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Et.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Ya,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return vi.setFromAxisAngle(e,t),this.quaternion.multiply(vi),this}rotateOnWorldAxis(e,t){return vi.setFromAxisAngle(e,t),this.quaternion.premultiply(vi),this}rotateX(e){return this.rotateOnAxis(tl,e)}rotateY(e){return this.rotateOnAxis(nl,e)}rotateZ(e){return this.rotateOnAxis(il,e)}translateOnAxis(e,t){return el.copy(e).applyQuaternion(this.quaternion),this.position.add(el.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(tl,e)}translateY(e){return this.translateOnAxis(nl,e)}translateZ(e){return this.translateOnAxis(il,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(vn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Ps.copy(e):Ps.set(e,t,n);const s=this.parent;this.updateWorldMatrix(!0,!1),ji.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?vn.lookAt(ji,Ps,this.up):vn.lookAt(Ps,ji,this.up),this.quaternion.setFromRotationMatrix(vn),s&&(vn.extractRotation(s.matrixWorld),vi.setFromRotationMatrix(vn),this.quaternion.premultiply(vi.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(Ph)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Ih)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),vn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),vn.multiply(e.parent.matrixWorld)),e.applyMatrix4(vn),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){const a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ji,e,Rh),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ji,Lh,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,s=t.length;n<s;n++){const r=t[n];(r.matrixWorldAutoUpdate===!0||e===!0)&&r.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const s=this.children;for(let r=0,a=s.length;r<a;r++){const o=s[r];o.matrixWorldAutoUpdate===!0&&o.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),s.maxGeometryCount=this._maxGeometryCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const h=l[c];r(e.shapes,h)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(e.materials,this.material[l]));s.material=o}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];s.animations.push(r(e.animations,l))}}if(t){const o=a(e.geometries),l=a(e.materials),c=a(e.textures),u=a(e.images),h=a(e.shapes),d=a(e.skeletons),p=a(e.animations),g=a(e.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),h.length>0&&(n.shapes=h),d.length>0&&(n.skeletons=d),p.length>0&&(n.animations=p),g.length>0&&(n.nodes=g)}return n.object=s,n;function a(o){const l=[];for(const c in o){const u=o[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const s=e.children[n];this.add(s.clone())}return this}}Et.DEFAULT_UP=new C(0,1,0);Et.DEFAULT_MATRIX_AUTO_UPDATE=!0;Et.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const sn=new C,yn=new C,qr=new C,xn=new C,yi=new C,xi=new C,sl=new C,Xr=new C,Kr=new C,Yr=new C;let Is=!1;class rn{constructor(e=new C,t=new C,n=new C){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),sn.subVectors(e,t),s.cross(sn);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){sn.subVectors(s,t),yn.subVectors(n,t),qr.subVectors(e,t);const a=sn.dot(sn),o=sn.dot(yn),l=sn.dot(qr),c=yn.dot(yn),u=yn.dot(qr),h=a*c-o*o;if(h===0)return r.set(0,0,0),null;const d=1/h,p=(c*l-o*u)*d,g=(a*u-o*l)*d;return r.set(1-p-g,g,p)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,xn)===null?!1:xn.x>=0&&xn.y>=0&&xn.x+xn.y<=1}static getUV(e,t,n,s,r,a,o,l){return Is===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Is=!0),this.getInterpolation(e,t,n,s,r,a,o,l)}static getInterpolation(e,t,n,s,r,a,o,l){return this.getBarycoord(e,t,n,s,xn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,xn.x),l.addScaledVector(a,xn.y),l.addScaledVector(o,xn.z),l)}static isFrontFacing(e,t,n,s){return sn.subVectors(n,t),yn.subVectors(e,t),sn.cross(yn).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return sn.subVectors(this.c,this.b),yn.subVectors(this.a,this.b),sn.cross(yn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return rn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return rn.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,n,s,r){return Is===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Is=!0),rn.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}getInterpolation(e,t,n,s,r){return rn.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return rn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return rn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,s=this.b,r=this.c;let a,o;yi.subVectors(s,n),xi.subVectors(r,n),Xr.subVectors(e,n);const l=yi.dot(Xr),c=xi.dot(Xr);if(l<=0&&c<=0)return t.copy(n);Kr.subVectors(e,s);const u=yi.dot(Kr),h=xi.dot(Kr);if(u>=0&&h<=u)return t.copy(s);const d=l*h-u*c;if(d<=0&&l>=0&&u<=0)return a=l/(l-u),t.copy(n).addScaledVector(yi,a);Yr.subVectors(e,r);const p=yi.dot(Yr),g=xi.dot(Yr);if(g>=0&&p<=g)return t.copy(r);const _=p*c-l*g;if(_<=0&&c>=0&&g<=0)return o=c/(c-g),t.copy(n).addScaledVector(xi,o);const m=u*g-p*h;if(m<=0&&h-u>=0&&p-g>=0)return sl.subVectors(r,s),o=(h-u)/(h-u+(p-g)),t.copy(s).addScaledVector(sl,o);const f=1/(m+_+d);return a=_*f,o=d*f,t.copy(n).addScaledVector(yi,a).addScaledVector(xi,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Lc={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},In={h:0,s:0,l:0},Ds={h:0,s:0,l:0};function $r(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}class Pe{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=xt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,nt.toWorkingColorSpace(this,t),this}setRGB(e,t,n,s=nt.workingColorSpace){return this.r=e,this.g=t,this.b=n,nt.toWorkingColorSpace(this,s),this}setHSL(e,t,n,s=nt.workingColorSpace){if(e=vh(e,1),t=Pt(t,0,1),n=Pt(n,0,1),t===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+t):n+t-n*t,a=2*n-r;this.r=$r(a,r,e+1/3),this.g=$r(a,r,e),this.b=$r(a,r,e-1/3)}return nt.toWorkingColorSpace(this,s),this}setStyle(e,t=xt){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=xt){const n=Lc[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Ni(e.r),this.g=Ni(e.g),this.b=Ni(e.b),this}copyLinearToSRGB(e){return this.r=Fr(e.r),this.g=Fr(e.g),this.b=Fr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=xt){return nt.fromWorkingColorSpace(Ut.copy(this),e),Math.round(Pt(Ut.r*255,0,255))*65536+Math.round(Pt(Ut.g*255,0,255))*256+Math.round(Pt(Ut.b*255,0,255))}getHexString(e=xt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=nt.workingColorSpace){nt.fromWorkingColorSpace(Ut.copy(this),t);const n=Ut.r,s=Ut.g,r=Ut.b,a=Math.max(n,s,r),o=Math.min(n,s,r);let l,c;const u=(o+a)/2;if(o===a)l=0,c=0;else{const h=a-o;switch(c=u<=.5?h/(a+o):h/(2-a-o),a){case n:l=(s-r)/h+(s<r?6:0);break;case s:l=(r-n)/h+2;break;case r:l=(n-s)/h+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=nt.workingColorSpace){return nt.fromWorkingColorSpace(Ut.copy(this),t),e.r=Ut.r,e.g=Ut.g,e.b=Ut.b,e}getStyle(e=xt){nt.fromWorkingColorSpace(Ut.copy(this),e);const t=Ut.r,n=Ut.g,s=Ut.b;return e!==xt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(In),this.setHSL(In.h+e,In.s+t,In.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(In),e.getHSL(Ds);const n=Nr(In.h,Ds.h,t),s=Nr(In.s,Ds.s,t),r=Nr(In.l,Ds.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Ut=new Pe;Pe.NAMES=Lc;let Dh=0;class li extends Vi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Dh++}),this.uuid=Wi(),this.name="",this.type="Material",this.blending=Oi,this.side=Bn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=xa,this.blendDst=Sa,this.blendEquation=Zn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Pe(0,0,0),this.blendAlpha=0,this.depthFunc=or,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Wo,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=di,this.stencilZFail=di,this.stencilZPass=di,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Oi&&(n.blending=this.blending),this.side!==Bn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==xa&&(n.blendSrc=this.blendSrc),this.blendDst!==Sa&&(n.blendDst=this.blendDst),this.blendEquation!==Zn&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==or&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Wo&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==di&&(n.stencilFail=this.stencilFail),this.stencilZFail!==di&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==di&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){const a=[];for(const o in r){const l=r[o];delete l.metadata,a.push(l)}return a}if(t){const r=s(e.textures),a=s(e.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Be extends li{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Pe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=fc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Mt=new C,Os=new le;class _t{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=qo,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=Un,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return console.warn("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Os.fromBufferAttribute(this,t),Os.applyMatrix3(e),this.setXY(t,Os.x,Os.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Mt.fromBufferAttribute(this,t),Mt.applyMatrix3(e),this.setXYZ(t,Mt.x,Mt.y,Mt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Mt.fromBufferAttribute(this,t),Mt.applyMatrix4(e),this.setXYZ(t,Mt.x,Mt.y,Mt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Mt.fromBufferAttribute(this,t),Mt.applyNormalMatrix(e),this.setXYZ(t,Mt.x,Mt.y,Mt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Mt.fromBufferAttribute(this,t),Mt.transformDirection(e),this.setXYZ(t,Mt.x,Mt.y,Mt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Ki(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=zt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Ki(t,this.array)),t}setX(e,t){return this.normalized&&(t=zt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Ki(t,this.array)),t}setY(e,t){return this.normalized&&(t=zt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Ki(t,this.array)),t}setZ(e,t){return this.normalized&&(t=zt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Ki(t,this.array)),t}setW(e,t){return this.normalized&&(t=zt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=zt(t,this.array),n=zt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=zt(t,this.array),n=zt(n,this.array),s=zt(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=zt(t,this.array),n=zt(n,this.array),s=zt(s,this.array),r=zt(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==qo&&(e.usage=this.usage),e}}class Pc extends _t{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class Ic extends _t{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class Ye extends _t{constructor(e,t,n){super(new Float32Array(e),t,n)}}let Oh=0;const Zt=new lt,jr=new Et,Si=new C,Yt=new ai,Zi=new ai,Rt=new C;class it extends Vi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Oh++}),this.uuid=Wi(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Ac(e)?Ic:Pc)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new Ke().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Zt.makeRotationFromQuaternion(e),this.applyMatrix4(Zt),this}rotateX(e){return Zt.makeRotationX(e),this.applyMatrix4(Zt),this}rotateY(e){return Zt.makeRotationY(e),this.applyMatrix4(Zt),this}rotateZ(e){return Zt.makeRotationZ(e),this.applyMatrix4(Zt),this}translate(e,t,n){return Zt.makeTranslation(e,t,n),this.applyMatrix4(Zt),this}scale(e,t,n){return Zt.makeScale(e,t,n),this.applyMatrix4(Zt),this}lookAt(e){return jr.lookAt(e),jr.updateMatrix(),this.applyMatrix4(jr.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Si).negate(),this.translate(Si.x,Si.y,Si.z),this}setFromPoints(e){const t=[];for(let n=0,s=e.length;n<s;n++){const r=e[n];t.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new Ye(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ai);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new C(-1/0,-1/0,-1/0),new C(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){const r=t[n];Yt.setFromBufferAttribute(r),this.morphTargetsRelative?(Rt.addVectors(this.boundingBox.min,Yt.min),this.boundingBox.expandByPoint(Rt),Rt.addVectors(this.boundingBox.max,Yt.max),this.boundingBox.expandByPoint(Rt)):(this.boundingBox.expandByPoint(Yt.min),this.boundingBox.expandByPoint(Yt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new oi);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new C,1/0);return}if(e){const n=this.boundingSphere.center;if(Yt.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){const o=t[r];Zi.setFromBufferAttribute(o),this.morphTargetsRelative?(Rt.addVectors(Yt.min,Zi.min),Yt.expandByPoint(Rt),Rt.addVectors(Yt.max,Zi.max),Yt.expandByPoint(Rt)):(Yt.expandByPoint(Zi.min),Yt.expandByPoint(Zi.max))}Yt.getCenter(n);let s=0;for(let r=0,a=e.count;r<a;r++)Rt.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(Rt));if(t)for(let r=0,a=t.length;r<a;r++){const o=t[r],l=this.morphTargetsRelative;for(let c=0,u=o.count;c<u;c++)Rt.fromBufferAttribute(o,c),l&&(Si.fromBufferAttribute(e,c),Rt.add(Si)),s=Math.max(s,n.distanceToSquared(Rt))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.array,s=t.position.array,r=t.normal.array,a=t.uv.array,o=s.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new _t(new Float32Array(4*o),4));const l=this.getAttribute("tangent").array,c=[],u=[];for(let E=0;E<o;E++)c[E]=new C,u[E]=new C;const h=new C,d=new C,p=new C,g=new le,_=new le,m=new le,f=new C,y=new C;function v(E,N,H){h.fromArray(s,E*3),d.fromArray(s,N*3),p.fromArray(s,H*3),g.fromArray(a,E*2),_.fromArray(a,N*2),m.fromArray(a,H*2),d.sub(h),p.sub(h),_.sub(g),m.sub(g);const se=1/(_.x*m.y-m.x*_.y);isFinite(se)&&(f.copy(d).multiplyScalar(m.y).addScaledVector(p,-_.y).multiplyScalar(se),y.copy(p).multiplyScalar(_.x).addScaledVector(d,-m.x).multiplyScalar(se),c[E].add(f),c[N].add(f),c[H].add(f),u[E].add(y),u[N].add(y),u[H].add(y))}let S=this.groups;S.length===0&&(S=[{start:0,count:n.length}]);for(let E=0,N=S.length;E<N;++E){const H=S[E],se=H.start,P=H.count;for(let G=se,k=se+P;G<k;G+=3)v(n[G+0],n[G+1],n[G+2])}const R=new C,A=new C,w=new C,O=new C;function M(E){w.fromArray(r,E*3),O.copy(w);const N=c[E];R.copy(N),R.sub(w.multiplyScalar(w.dot(N))).normalize(),A.crossVectors(O,N);const se=A.dot(u[E])<0?-1:1;l[E*4]=R.x,l[E*4+1]=R.y,l[E*4+2]=R.z,l[E*4+3]=se}for(let E=0,N=S.length;E<N;++E){const H=S[E],se=H.start,P=H.count;for(let G=se,k=se+P;G<k;G+=3)M(n[G+0]),M(n[G+1]),M(n[G+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new _t(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,p=n.count;d<p;d++)n.setXYZ(d,0,0,0);const s=new C,r=new C,a=new C,o=new C,l=new C,c=new C,u=new C,h=new C;if(e)for(let d=0,p=e.count;d<p;d+=3){const g=e.getX(d+0),_=e.getX(d+1),m=e.getX(d+2);s.fromBufferAttribute(t,g),r.fromBufferAttribute(t,_),a.fromBufferAttribute(t,m),u.subVectors(a,r),h.subVectors(s,r),u.cross(h),o.fromBufferAttribute(n,g),l.fromBufferAttribute(n,_),c.fromBufferAttribute(n,m),o.add(u),l.add(u),c.add(u),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(_,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let d=0,p=t.count;d<p;d+=3)s.fromBufferAttribute(t,d+0),r.fromBufferAttribute(t,d+1),a.fromBufferAttribute(t,d+2),u.subVectors(a,r),h.subVectors(s,r),u.cross(h),n.setXYZ(d+0,u.x,u.y,u.z),n.setXYZ(d+1,u.x,u.y,u.z),n.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Rt.fromBufferAttribute(e,t),Rt.normalize(),e.setXYZ(t,Rt.x,Rt.y,Rt.z)}toNonIndexed(){function e(o,l){const c=o.array,u=o.itemSize,h=o.normalized,d=new c.constructor(l.length*u);let p=0,g=0;for(let _=0,m=l.length;_<m;_++){o.isInterleavedBufferAttribute?p=l[_]*o.data.stride+o.offset:p=l[_]*u;for(let f=0;f<u;f++)d[g++]=c[p++]}return new _t(d,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new it,n=this.index.array,s=this.attributes;for(const o in s){const l=s[o],c=e(l,n);t.setAttribute(o,c)}const r=this.morphAttributes;for(const o in r){const l=[],c=r[o];for(let u=0,h=c.length;u<h;u++){const d=c[u],p=e(d,n);l.push(p)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const s={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let h=0,d=c.length;h<d;h++){const p=c[h];u.push(p.toJSON(e.data))}u.length>0&&(s[l]=u,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const s=e.attributes;for(const c in s){const u=s[c];this.setAttribute(c,u.clone(t))}const r=e.morphAttributes;for(const c in r){const u=[],h=r[c];for(let d=0,p=h.length;d<p;d++)u.push(h[d].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let c=0,u=a.length;c<u;c++){const h=a[c];this.addGroup(h.start,h.count,h.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const rl=new lt,Xn=new yr,Ns=new oi,al=new C,Mi=new C,bi=new C,Ei=new C,Zr=new C,Us=new C,Fs=new le,Gs=new le,Bs=new le,ol=new C,ll=new C,cl=new C,Hs=new C,ks=new C;class $ extends Et{constructor(e=new it,t=new Be){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){const n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(s,e);const o=this.morphTargetInfluences;if(r&&o){Us.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const u=o[l],h=r[l];u!==0&&(Zr.fromBufferAttribute(h,e),a?Us.addScaledVector(Zr,u):Us.addScaledVector(Zr.sub(t),u))}t.add(Us)}return t}raycast(e,t){const n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Ns.copy(n.boundingSphere),Ns.applyMatrix4(r),Xn.copy(e.ray).recast(e.near),!(Ns.containsPoint(Xn.origin)===!1&&(Xn.intersectSphere(Ns,al)===null||Xn.origin.distanceToSquared(al)>(e.far-e.near)**2))&&(rl.copy(r).invert(),Xn.copy(e.ray).applyMatrix4(rl),!(n.boundingBox!==null&&Xn.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Xn)))}_computeIntersections(e,t,n){let s;const r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,u=r.attributes.uv1,h=r.attributes.normal,d=r.groups,p=r.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,_=d.length;g<_;g++){const m=d[g],f=a[m.materialIndex],y=Math.max(m.start,p.start),v=Math.min(o.count,Math.min(m.start+m.count,p.start+p.count));for(let S=y,R=v;S<R;S+=3){const A=o.getX(S),w=o.getX(S+1),O=o.getX(S+2);s=zs(this,f,e,n,c,u,h,A,w,O),s&&(s.faceIndex=Math.floor(S/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{const g=Math.max(0,p.start),_=Math.min(o.count,p.start+p.count);for(let m=g,f=_;m<f;m+=3){const y=o.getX(m),v=o.getX(m+1),S=o.getX(m+2);s=zs(this,a,e,n,c,u,h,y,v,S),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let g=0,_=d.length;g<_;g++){const m=d[g],f=a[m.materialIndex],y=Math.max(m.start,p.start),v=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let S=y,R=v;S<R;S+=3){const A=S,w=S+1,O=S+2;s=zs(this,f,e,n,c,u,h,A,w,O),s&&(s.faceIndex=Math.floor(S/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{const g=Math.max(0,p.start),_=Math.min(l.count,p.start+p.count);for(let m=g,f=_;m<f;m+=3){const y=m,v=m+1,S=m+2;s=zs(this,a,e,n,c,u,h,y,v,S),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}}}function Nh(i,e,t,n,s,r,a,o){let l;if(e.side===Dt?l=n.intersectTriangle(a,r,s,!0,o):l=n.intersectTriangle(s,r,a,e.side===Bn,o),l===null)return null;ks.copy(o),ks.applyMatrix4(i.matrixWorld);const c=t.ray.origin.distanceTo(ks);return c<t.near||c>t.far?null:{distance:c,point:ks.clone(),object:i}}function zs(i,e,t,n,s,r,a,o,l,c){i.getVertexPosition(o,Mi),i.getVertexPosition(l,bi),i.getVertexPosition(c,Ei);const u=Nh(i,e,t,n,Mi,bi,Ei,Hs);if(u){s&&(Fs.fromBufferAttribute(s,o),Gs.fromBufferAttribute(s,l),Bs.fromBufferAttribute(s,c),u.uv=rn.getInterpolation(Hs,Mi,bi,Ei,Fs,Gs,Bs,new le)),r&&(Fs.fromBufferAttribute(r,o),Gs.fromBufferAttribute(r,l),Bs.fromBufferAttribute(r,c),u.uv1=rn.getInterpolation(Hs,Mi,bi,Ei,Fs,Gs,Bs,new le),u.uv2=u.uv1),a&&(ol.fromBufferAttribute(a,o),ll.fromBufferAttribute(a,l),cl.fromBufferAttribute(a,c),u.normal=rn.getInterpolation(Hs,Mi,bi,Ei,ol,ll,cl,new C),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const h={a:o,b:l,c,normal:new C,materialIndex:0};rn.getNormal(Mi,bi,Ei,h.normal),u.face=h}return u}class Lt extends it{constructor(e=1,t=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};const o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);const l=[],c=[],u=[],h=[];let d=0,p=0;g("z","y","x",-1,-1,n,t,e,a,r,0),g("z","y","x",1,-1,n,t,-e,a,r,1),g("x","z","y",1,1,e,n,t,s,a,2),g("x","z","y",1,-1,e,n,-t,s,a,3),g("x","y","z",1,-1,e,t,n,s,r,4),g("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new Ye(c,3)),this.setAttribute("normal",new Ye(u,3)),this.setAttribute("uv",new Ye(h,2));function g(_,m,f,y,v,S,R,A,w,O,M){const E=S/w,N=R/O,H=S/2,se=R/2,P=A/2,G=w+1,k=O+1;let j=0,Z=0;const ee=new C;for(let q=0;q<k;q++){const X=q*N-se;for(let re=0;re<G;re++){const B=re*E-H;ee[_]=B*y,ee[m]=X*v,ee[f]=P,c.push(ee.x,ee.y,ee.z),ee[_]=0,ee[m]=0,ee[f]=A>0?1:-1,u.push(ee.x,ee.y,ee.z),h.push(re/w),h.push(1-q/O),j+=1}}for(let q=0;q<O;q++)for(let X=0;X<w;X++){const re=d+X+G*q,B=d+X+G*(q+1),ie=d+(X+1)+G*(q+1),pe=d+(X+1)+G*q;l.push(re,B,pe),l.push(B,ie,pe),Z+=6}o.addGroup(p,Z,M),p+=Z,d+=j}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Lt(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Hi(i){const e={};for(const t in i){e[t]={};for(const n in i[t]){const s=i[t][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone():Array.isArray(s)?e[t][n]=s.slice():e[t][n]=s}}return e}function Bt(i){const e={};for(let t=0;t<i.length;t++){const n=Hi(i[t]);for(const s in n)e[s]=n[s]}return e}function Uh(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function Dc(i){return i.getRenderTarget()===null?i.outputColorSpace:nt.workingColorSpace}const fr={clone:Hi,merge:Bt};var Fh=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Gh=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class It extends li{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Fh,this.fragmentShader=Gh,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Hi(e.uniforms),this.uniformsGroups=Uh(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const s in this.uniforms){const a=this.uniforms[s].value;a&&a.isTexture?t.uniforms[s]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[s]={type:"m4",value:a.toArray()}:t.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class Oc extends Et{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new lt,this.projectionMatrix=new lt,this.projectionMatrixInverse=new lt,this.coordinateSystem=Mn}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class Wt extends Oc{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=wa*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Or*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return wa*2*Math.atan(Math.tan(Or*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,n,s,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Or*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/l,t-=a.offsetY*n/c,s*=a.width/l,n*=a.height/c}const o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Ti=-90,Ai=1;class Bh extends Et{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new Wt(Ti,Ai,e,t);s.layers=this.layers,this.add(s);const r=new Wt(Ti,Ai,e,t);r.layers=this.layers,this.add(r);const a=new Wt(Ti,Ai,e,t);a.layers=this.layers,this.add(a);const o=new Wt(Ti,Ai,e,t);o.layers=this.layers,this.add(o);const l=new Wt(Ti,Ai,e,t);l.layers=this.layers,this.add(l);const c=new Wt(Ti,Ai,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,s,r,a,o,l]=t;for(const c of t)this.remove(c);if(e===Mn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===hr)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,a,o,l,c,u]=this.children,h=e.getRenderTarget(),d=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,s),e.render(t,r),e.setRenderTarget(n,1,s),e.render(t,a),e.setRenderTarget(n,2,s),e.render(t,o),e.setRenderTarget(n,3,s),e.render(t,l),e.setRenderTarget(n,4,s),e.render(t,c),n.texture.generateMipmaps=_,e.setRenderTarget(n,5,s),e.render(t,u),e.setRenderTarget(h,d,p),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class Nc extends qt{constructor(e,t,n,s,r,a,o,l,c,u){e=e!==void 0?e:[],t=t!==void 0?t:Fi,super(e,t,n,s,r,a,o,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Hh extends cn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];t.encoding!==void 0&&(os("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),t.colorSpace=t.encoding===ii?xt:Qt),this.texture=new Nc(s,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Jt}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new Lt(5,5,5),r=new It({name:"CubemapFromEquirect",uniforms:Hi(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Dt,blending:bn});r.uniforms.tEquirect.value=t;const a=new $(s,r),o=t.minFilter;return t.minFilter===fs&&(t.minFilter=Jt),new Bh(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t,n,s){const r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,s);e.setRenderTarget(r)}}const Jr=new C,kh=new C,zh=new Ke;class Yn{constructor(e=new C(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const s=Jr.subVectors(n,t).cross(kh.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(Jr),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||zh.getNormalMatrix(e),s=this.coplanarPoint(Jr).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Kn=new oi,Vs=new C;class $a{constructor(e=new Yn,t=new Yn,n=new Yn,s=new Yn,r=new Yn,a=new Yn){this.planes=[e,t,n,s,r,a]}set(e,t,n,s,r,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Mn){const n=this.planes,s=e.elements,r=s[0],a=s[1],o=s[2],l=s[3],c=s[4],u=s[5],h=s[6],d=s[7],p=s[8],g=s[9],_=s[10],m=s[11],f=s[12],y=s[13],v=s[14],S=s[15];if(n[0].setComponents(l-r,d-c,m-p,S-f).normalize(),n[1].setComponents(l+r,d+c,m+p,S+f).normalize(),n[2].setComponents(l+a,d+u,m+g,S+y).normalize(),n[3].setComponents(l-a,d-u,m-g,S-y).normalize(),n[4].setComponents(l-o,d-h,m-_,S-v).normalize(),t===Mn)n[5].setComponents(l+o,d+h,m+_,S+v).normalize();else if(t===hr)n[5].setComponents(o,h,_,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Kn.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Kn.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Kn)}intersectsSprite(e){return Kn.center.set(0,0,0),Kn.radius=.7071067811865476,Kn.applyMatrix4(e.matrixWorld),this.intersectsSphere(Kn)}intersectsSphere(e){const t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const s=t[n];if(Vs.x=s.normal.x>0?e.max.x:e.min.x,Vs.y=s.normal.y>0?e.max.y:e.min.y,Vs.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(Vs)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Uc(){let i=null,e=!1,t=null,n=null;function s(r,a){t(r,a),n=i.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function Vh(i,e){const t=e.isWebGL2,n=new WeakMap;function s(c,u){const h=c.array,d=c.usage,p=h.byteLength,g=i.createBuffer();i.bindBuffer(u,g),i.bufferData(u,h,d),c.onUploadCallback();let _;if(h instanceof Float32Array)_=i.FLOAT;else if(h instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(t)_=i.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else _=i.UNSIGNED_SHORT;else if(h instanceof Int16Array)_=i.SHORT;else if(h instanceof Uint32Array)_=i.UNSIGNED_INT;else if(h instanceof Int32Array)_=i.INT;else if(h instanceof Int8Array)_=i.BYTE;else if(h instanceof Uint8Array)_=i.UNSIGNED_BYTE;else if(h instanceof Uint8ClampedArray)_=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:g,type:_,bytesPerElement:h.BYTES_PER_ELEMENT,version:c.version,size:p}}function r(c,u,h){const d=u.array,p=u._updateRange,g=u.updateRanges;if(i.bindBuffer(h,c),p.count===-1&&g.length===0&&i.bufferSubData(h,0,d),g.length!==0){for(let _=0,m=g.length;_<m;_++){const f=g[_];t?i.bufferSubData(h,f.start*d.BYTES_PER_ELEMENT,d,f.start,f.count):i.bufferSubData(h,f.start*d.BYTES_PER_ELEMENT,d.subarray(f.start,f.start+f.count))}u.clearUpdateRanges()}p.count!==-1&&(t?i.bufferSubData(h,p.offset*d.BYTES_PER_ELEMENT,d,p.offset,p.count):i.bufferSubData(h,p.offset*d.BYTES_PER_ELEMENT,d.subarray(p.offset,p.offset+p.count)),p.count=-1),u.onUploadCallback()}function a(c){return c.isInterleavedBufferAttribute&&(c=c.data),n.get(c)}function o(c){c.isInterleavedBufferAttribute&&(c=c.data);const u=n.get(c);u&&(i.deleteBuffer(u.buffer),n.delete(c))}function l(c,u){if(c.isGLBufferAttribute){const d=n.get(c);(!d||d.version<c.version)&&n.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);const h=n.get(c);if(h===void 0)n.set(c,s(c,u));else if(h.version<c.version){if(h.size!==c.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(h.buffer,c,u),h.version=c.version}}return{get:a,remove:o,update:l}}class si extends it{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};const r=e/2,a=t/2,o=Math.floor(n),l=Math.floor(s),c=o+1,u=l+1,h=e/o,d=t/l,p=[],g=[],_=[],m=[];for(let f=0;f<u;f++){const y=f*d-a;for(let v=0;v<c;v++){const S=v*h-r;g.push(S,-y,0),_.push(0,0,1),m.push(v/o),m.push(1-f/l)}}for(let f=0;f<l;f++)for(let y=0;y<o;y++){const v=y+c*f,S=y+c*(f+1),R=y+1+c*(f+1),A=y+1+c*f;p.push(v,S,A),p.push(S,R,A)}this.setIndex(p),this.setAttribute("position",new Ye(g,3)),this.setAttribute("normal",new Ye(_,3)),this.setAttribute("uv",new Ye(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new si(e.width,e.height,e.widthSegments,e.heightSegments)}}var Wh=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,qh=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Xh=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Kh=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Yh=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,$h=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,jh=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Zh=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Jh=`#ifdef USE_BATCHING
	attribute float batchId;
	uniform highp sampler2D batchingTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Qh=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,ed=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,td=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,nd=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,id=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,sd=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,rd=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,ad=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,od=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,ld=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,cd=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,ud=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,hd=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,dd=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,fd=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,pd=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,md=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,gd=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,_d=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,vd=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,yd=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,xd="gl_FragColor = linearToOutputTexel( gl_FragColor );",Sd=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,Md=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,bd=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Ed=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Td=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Ad=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,wd=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Cd=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Rd=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Ld=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Pd=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Id=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,Dd=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Od=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Nd=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Ud=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,Fd=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,Gd=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Bd=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Hd=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,kd=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,zd=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Vd=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Wd=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,qd=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Xd=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Kd=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Yd=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,$d=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,jd=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,Zd=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Jd=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Qd=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,ef=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,tf=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,nf=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,sf=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,rf=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,af=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,of=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,lf=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,cf=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,uf=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,hf=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,df=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,ff=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,pf=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,mf=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,gf=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,_f=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,vf=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,yf=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,xf=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Sf=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Mf=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,bf=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Ef=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Tf=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Af=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,wf=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Cf=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Rf=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Lf=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Pf=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,If=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Df=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Of=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Nf=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Uf=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Ff=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color *= toneMappingExposure;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	return color;
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Gf=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Bf=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Hf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,kf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,zf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Vf=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Wf=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,qf=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Xf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Kf=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Yf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,$f=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,jf=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Zf=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,Jf=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Qf=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,ep=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,tp=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,np=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,ip=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,sp=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,rp=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ap=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,op=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,lp=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,cp=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,up=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,hp=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,dp=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,fp=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,pp=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,mp=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,gp=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,_p=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,vp=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,yp=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,xp=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Sp=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Mp=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,bp=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,ze={alphahash_fragment:Wh,alphahash_pars_fragment:qh,alphamap_fragment:Xh,alphamap_pars_fragment:Kh,alphatest_fragment:Yh,alphatest_pars_fragment:$h,aomap_fragment:jh,aomap_pars_fragment:Zh,batching_pars_vertex:Jh,batching_vertex:Qh,begin_vertex:ed,beginnormal_vertex:td,bsdfs:nd,iridescence_fragment:id,bumpmap_pars_fragment:sd,clipping_planes_fragment:rd,clipping_planes_pars_fragment:ad,clipping_planes_pars_vertex:od,clipping_planes_vertex:ld,color_fragment:cd,color_pars_fragment:ud,color_pars_vertex:hd,color_vertex:dd,common:fd,cube_uv_reflection_fragment:pd,defaultnormal_vertex:md,displacementmap_pars_vertex:gd,displacementmap_vertex:_d,emissivemap_fragment:vd,emissivemap_pars_fragment:yd,colorspace_fragment:xd,colorspace_pars_fragment:Sd,envmap_fragment:Md,envmap_common_pars_fragment:bd,envmap_pars_fragment:Ed,envmap_pars_vertex:Td,envmap_physical_pars_fragment:Fd,envmap_vertex:Ad,fog_vertex:wd,fog_pars_vertex:Cd,fog_fragment:Rd,fog_pars_fragment:Ld,gradientmap_pars_fragment:Pd,lightmap_fragment:Id,lightmap_pars_fragment:Dd,lights_lambert_fragment:Od,lights_lambert_pars_fragment:Nd,lights_pars_begin:Ud,lights_toon_fragment:Gd,lights_toon_pars_fragment:Bd,lights_phong_fragment:Hd,lights_phong_pars_fragment:kd,lights_physical_fragment:zd,lights_physical_pars_fragment:Vd,lights_fragment_begin:Wd,lights_fragment_maps:qd,lights_fragment_end:Xd,logdepthbuf_fragment:Kd,logdepthbuf_pars_fragment:Yd,logdepthbuf_pars_vertex:$d,logdepthbuf_vertex:jd,map_fragment:Zd,map_pars_fragment:Jd,map_particle_fragment:Qd,map_particle_pars_fragment:ef,metalnessmap_fragment:tf,metalnessmap_pars_fragment:nf,morphcolor_vertex:sf,morphnormal_vertex:rf,morphtarget_pars_vertex:af,morphtarget_vertex:of,normal_fragment_begin:lf,normal_fragment_maps:cf,normal_pars_fragment:uf,normal_pars_vertex:hf,normal_vertex:df,normalmap_pars_fragment:ff,clearcoat_normal_fragment_begin:pf,clearcoat_normal_fragment_maps:mf,clearcoat_pars_fragment:gf,iridescence_pars_fragment:_f,opaque_fragment:vf,packing:yf,premultiplied_alpha_fragment:xf,project_vertex:Sf,dithering_fragment:Mf,dithering_pars_fragment:bf,roughnessmap_fragment:Ef,roughnessmap_pars_fragment:Tf,shadowmap_pars_fragment:Af,shadowmap_pars_vertex:wf,shadowmap_vertex:Cf,shadowmask_pars_fragment:Rf,skinbase_vertex:Lf,skinning_pars_vertex:Pf,skinning_vertex:If,skinnormal_vertex:Df,specularmap_fragment:Of,specularmap_pars_fragment:Nf,tonemapping_fragment:Uf,tonemapping_pars_fragment:Ff,transmission_fragment:Gf,transmission_pars_fragment:Bf,uv_pars_fragment:Hf,uv_pars_vertex:kf,uv_vertex:zf,worldpos_vertex:Vf,background_vert:Wf,background_frag:qf,backgroundCube_vert:Xf,backgroundCube_frag:Kf,cube_vert:Yf,cube_frag:$f,depth_vert:jf,depth_frag:Zf,distanceRGBA_vert:Jf,distanceRGBA_frag:Qf,equirect_vert:ep,equirect_frag:tp,linedashed_vert:np,linedashed_frag:ip,meshbasic_vert:sp,meshbasic_frag:rp,meshlambert_vert:ap,meshlambert_frag:op,meshmatcap_vert:lp,meshmatcap_frag:cp,meshnormal_vert:up,meshnormal_frag:hp,meshphong_vert:dp,meshphong_frag:fp,meshphysical_vert:pp,meshphysical_frag:mp,meshtoon_vert:gp,meshtoon_frag:_p,points_vert:vp,points_frag:yp,shadow_vert:xp,shadow_frag:Sp,sprite_vert:Mp,sprite_frag:bp},_e={common:{diffuse:{value:new Pe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ke},alphaMap:{value:null},alphaMapTransform:{value:new Ke},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ke}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ke}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ke}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ke},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ke},normalScale:{value:new le(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ke},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ke}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ke}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ke}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Pe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Pe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ke},alphaTest:{value:0},uvTransform:{value:new Ke}},sprite:{diffuse:{value:new Pe(16777215)},opacity:{value:1},center:{value:new le(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ke},alphaMap:{value:null},alphaMapTransform:{value:new Ke},alphaTest:{value:0}}},hn={basic:{uniforms:Bt([_e.common,_e.specularmap,_e.envmap,_e.aomap,_e.lightmap,_e.fog]),vertexShader:ze.meshbasic_vert,fragmentShader:ze.meshbasic_frag},lambert:{uniforms:Bt([_e.common,_e.specularmap,_e.envmap,_e.aomap,_e.lightmap,_e.emissivemap,_e.bumpmap,_e.normalmap,_e.displacementmap,_e.fog,_e.lights,{emissive:{value:new Pe(0)}}]),vertexShader:ze.meshlambert_vert,fragmentShader:ze.meshlambert_frag},phong:{uniforms:Bt([_e.common,_e.specularmap,_e.envmap,_e.aomap,_e.lightmap,_e.emissivemap,_e.bumpmap,_e.normalmap,_e.displacementmap,_e.fog,_e.lights,{emissive:{value:new Pe(0)},specular:{value:new Pe(1118481)},shininess:{value:30}}]),vertexShader:ze.meshphong_vert,fragmentShader:ze.meshphong_frag},standard:{uniforms:Bt([_e.common,_e.envmap,_e.aomap,_e.lightmap,_e.emissivemap,_e.bumpmap,_e.normalmap,_e.displacementmap,_e.roughnessmap,_e.metalnessmap,_e.fog,_e.lights,{emissive:{value:new Pe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ze.meshphysical_vert,fragmentShader:ze.meshphysical_frag},toon:{uniforms:Bt([_e.common,_e.aomap,_e.lightmap,_e.emissivemap,_e.bumpmap,_e.normalmap,_e.displacementmap,_e.gradientmap,_e.fog,_e.lights,{emissive:{value:new Pe(0)}}]),vertexShader:ze.meshtoon_vert,fragmentShader:ze.meshtoon_frag},matcap:{uniforms:Bt([_e.common,_e.bumpmap,_e.normalmap,_e.displacementmap,_e.fog,{matcap:{value:null}}]),vertexShader:ze.meshmatcap_vert,fragmentShader:ze.meshmatcap_frag},points:{uniforms:Bt([_e.points,_e.fog]),vertexShader:ze.points_vert,fragmentShader:ze.points_frag},dashed:{uniforms:Bt([_e.common,_e.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ze.linedashed_vert,fragmentShader:ze.linedashed_frag},depth:{uniforms:Bt([_e.common,_e.displacementmap]),vertexShader:ze.depth_vert,fragmentShader:ze.depth_frag},normal:{uniforms:Bt([_e.common,_e.bumpmap,_e.normalmap,_e.displacementmap,{opacity:{value:1}}]),vertexShader:ze.meshnormal_vert,fragmentShader:ze.meshnormal_frag},sprite:{uniforms:Bt([_e.sprite,_e.fog]),vertexShader:ze.sprite_vert,fragmentShader:ze.sprite_frag},background:{uniforms:{uvTransform:{value:new Ke},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ze.background_vert,fragmentShader:ze.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:ze.backgroundCube_vert,fragmentShader:ze.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ze.cube_vert,fragmentShader:ze.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ze.equirect_vert,fragmentShader:ze.equirect_frag},distanceRGBA:{uniforms:Bt([_e.common,_e.displacementmap,{referencePosition:{value:new C},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ze.distanceRGBA_vert,fragmentShader:ze.distanceRGBA_frag},shadow:{uniforms:Bt([_e.lights,_e.fog,{color:{value:new Pe(0)},opacity:{value:1}}]),vertexShader:ze.shadow_vert,fragmentShader:ze.shadow_frag}};hn.physical={uniforms:Bt([hn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ke},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ke},clearcoatNormalScale:{value:new le(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ke},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ke},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ke},sheen:{value:0},sheenColor:{value:new Pe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ke},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ke},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ke},transmissionSamplerSize:{value:new le},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ke},attenuationDistance:{value:0},attenuationColor:{value:new Pe(0)},specularColor:{value:new Pe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ke},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ke},anisotropyVector:{value:new le},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ke}}]),vertexShader:ze.meshphysical_vert,fragmentShader:ze.meshphysical_frag};const Ws={r:0,b:0,g:0};function Ep(i,e,t,n,s,r,a){const o=new Pe(0);let l=r===!0?0:1,c,u,h=null,d=0,p=null;function g(m,f){let y=!1,v=f.isScene===!0?f.background:null;v&&v.isTexture&&(v=(f.backgroundBlurriness>0?t:e).get(v)),v===null?_(o,l):v&&v.isColor&&(_(v,1),y=!0);const S=i.xr.getEnvironmentBlendMode();S==="additive"?n.buffers.color.setClear(0,0,0,1,a):S==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(i.autoClear||y)&&i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil),v&&(v.isCubeTexture||v.mapping===_r)?(u===void 0&&(u=new $(new Lt(1,1,1),new It({name:"BackgroundCubeMaterial",uniforms:Hi(hn.backgroundCube.uniforms),vertexShader:hn.backgroundCube.vertexShader,fragmentShader:hn.backgroundCube.fragmentShader,side:Dt,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(R,A,w){this.matrixWorld.copyPosition(w.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(u)),u.material.uniforms.envMap.value=v,u.material.uniforms.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=f.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=f.backgroundIntensity,u.material.toneMapped=nt.getTransfer(v.colorSpace)!==ht,(h!==v||d!==v.version||p!==i.toneMapping)&&(u.material.needsUpdate=!0,h=v,d=v.version,p=i.toneMapping),u.layers.enableAll(),m.unshift(u,u.geometry,u.material,0,0,null)):v&&v.isTexture&&(c===void 0&&(c=new $(new si(2,2),new It({name:"BackgroundMaterial",uniforms:Hi(hn.background.uniforms),vertexShader:hn.background.vertexShader,fragmentShader:hn.background.fragmentShader,side:Bn,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=v,c.material.uniforms.backgroundIntensity.value=f.backgroundIntensity,c.material.toneMapped=nt.getTransfer(v.colorSpace)!==ht,v.matrixAutoUpdate===!0&&v.updateMatrix(),c.material.uniforms.uvTransform.value.copy(v.matrix),(h!==v||d!==v.version||p!==i.toneMapping)&&(c.material.needsUpdate=!0,h=v,d=v.version,p=i.toneMapping),c.layers.enableAll(),m.unshift(c,c.geometry,c.material,0,0,null))}function _(m,f){m.getRGB(Ws,Dc(i)),n.buffers.color.setClear(Ws.r,Ws.g,Ws.b,f,a)}return{getClearColor:function(){return o},setClearColor:function(m,f=1){o.set(m),l=f,_(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(m){l=m,_(o,l)},render:g}}function Tp(i,e,t,n){const s=i.getParameter(i.MAX_VERTEX_ATTRIBS),r=n.isWebGL2?null:e.get("OES_vertex_array_object"),a=n.isWebGL2||r!==null,o={},l=m(null);let c=l,u=!1;function h(P,G,k,j,Z){let ee=!1;if(a){const q=_(j,k,G);c!==q&&(c=q,p(c.object)),ee=f(P,j,k,Z),ee&&y(P,j,k,Z)}else{const q=G.wireframe===!0;(c.geometry!==j.id||c.program!==k.id||c.wireframe!==q)&&(c.geometry=j.id,c.program=k.id,c.wireframe=q,ee=!0)}Z!==null&&t.update(Z,i.ELEMENT_ARRAY_BUFFER),(ee||u)&&(u=!1,O(P,G,k,j),Z!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(Z).buffer))}function d(){return n.isWebGL2?i.createVertexArray():r.createVertexArrayOES()}function p(P){return n.isWebGL2?i.bindVertexArray(P):r.bindVertexArrayOES(P)}function g(P){return n.isWebGL2?i.deleteVertexArray(P):r.deleteVertexArrayOES(P)}function _(P,G,k){const j=k.wireframe===!0;let Z=o[P.id];Z===void 0&&(Z={},o[P.id]=Z);let ee=Z[G.id];ee===void 0&&(ee={},Z[G.id]=ee);let q=ee[j];return q===void 0&&(q=m(d()),ee[j]=q),q}function m(P){const G=[],k=[],j=[];for(let Z=0;Z<s;Z++)G[Z]=0,k[Z]=0,j[Z]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:G,enabledAttributes:k,attributeDivisors:j,object:P,attributes:{},index:null}}function f(P,G,k,j){const Z=c.attributes,ee=G.attributes;let q=0;const X=k.getAttributes();for(const re in X)if(X[re].location>=0){const ie=Z[re];let pe=ee[re];if(pe===void 0&&(re==="instanceMatrix"&&P.instanceMatrix&&(pe=P.instanceMatrix),re==="instanceColor"&&P.instanceColor&&(pe=P.instanceColor)),ie===void 0||ie.attribute!==pe||pe&&ie.data!==pe.data)return!0;q++}return c.attributesNum!==q||c.index!==j}function y(P,G,k,j){const Z={},ee=G.attributes;let q=0;const X=k.getAttributes();for(const re in X)if(X[re].location>=0){let ie=ee[re];ie===void 0&&(re==="instanceMatrix"&&P.instanceMatrix&&(ie=P.instanceMatrix),re==="instanceColor"&&P.instanceColor&&(ie=P.instanceColor));const pe={};pe.attribute=ie,ie&&ie.data&&(pe.data=ie.data),Z[re]=pe,q++}c.attributes=Z,c.attributesNum=q,c.index=j}function v(){const P=c.newAttributes;for(let G=0,k=P.length;G<k;G++)P[G]=0}function S(P){R(P,0)}function R(P,G){const k=c.newAttributes,j=c.enabledAttributes,Z=c.attributeDivisors;k[P]=1,j[P]===0&&(i.enableVertexAttribArray(P),j[P]=1),Z[P]!==G&&((n.isWebGL2?i:e.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](P,G),Z[P]=G)}function A(){const P=c.newAttributes,G=c.enabledAttributes;for(let k=0,j=G.length;k<j;k++)G[k]!==P[k]&&(i.disableVertexAttribArray(k),G[k]=0)}function w(P,G,k,j,Z,ee,q){q===!0?i.vertexAttribIPointer(P,G,k,Z,ee):i.vertexAttribPointer(P,G,k,j,Z,ee)}function O(P,G,k,j){if(n.isWebGL2===!1&&(P.isInstancedMesh||j.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;v();const Z=j.attributes,ee=k.getAttributes(),q=G.defaultAttributeValues;for(const X in ee){const re=ee[X];if(re.location>=0){let B=Z[X];if(B===void 0&&(X==="instanceMatrix"&&P.instanceMatrix&&(B=P.instanceMatrix),X==="instanceColor"&&P.instanceColor&&(B=P.instanceColor)),B!==void 0){const ie=B.normalized,pe=B.itemSize,Se=t.get(B);if(Se===void 0)continue;const D=Se.buffer,me=Se.type,ve=Se.bytesPerElement,he=n.isWebGL2===!0&&(me===i.INT||me===i.UNSIGNED_INT||B.gpuType===gc);if(B.isInterleavedBufferAttribute){const Ee=B.data,L=Ee.stride,ce=B.offset;if(Ee.isInstancedInterleavedBuffer){for(let K=0;K<re.locationSize;K++)R(re.location+K,Ee.meshPerAttribute);P.isInstancedMesh!==!0&&j._maxInstanceCount===void 0&&(j._maxInstanceCount=Ee.meshPerAttribute*Ee.count)}else for(let K=0;K<re.locationSize;K++)S(re.location+K);i.bindBuffer(i.ARRAY_BUFFER,D);for(let K=0;K<re.locationSize;K++)w(re.location+K,pe/re.locationSize,me,ie,L*ve,(ce+pe/re.locationSize*K)*ve,he)}else{if(B.isInstancedBufferAttribute){for(let Ee=0;Ee<re.locationSize;Ee++)R(re.location+Ee,B.meshPerAttribute);P.isInstancedMesh!==!0&&j._maxInstanceCount===void 0&&(j._maxInstanceCount=B.meshPerAttribute*B.count)}else for(let Ee=0;Ee<re.locationSize;Ee++)S(re.location+Ee);i.bindBuffer(i.ARRAY_BUFFER,D);for(let Ee=0;Ee<re.locationSize;Ee++)w(re.location+Ee,pe/re.locationSize,me,ie,pe*ve,pe/re.locationSize*Ee*ve,he)}}else if(q!==void 0){const ie=q[X];if(ie!==void 0)switch(ie.length){case 2:i.vertexAttrib2fv(re.location,ie);break;case 3:i.vertexAttrib3fv(re.location,ie);break;case 4:i.vertexAttrib4fv(re.location,ie);break;default:i.vertexAttrib1fv(re.location,ie)}}}}A()}function M(){H();for(const P in o){const G=o[P];for(const k in G){const j=G[k];for(const Z in j)g(j[Z].object),delete j[Z];delete G[k]}delete o[P]}}function E(P){if(o[P.id]===void 0)return;const G=o[P.id];for(const k in G){const j=G[k];for(const Z in j)g(j[Z].object),delete j[Z];delete G[k]}delete o[P.id]}function N(P){for(const G in o){const k=o[G];if(k[P.id]===void 0)continue;const j=k[P.id];for(const Z in j)g(j[Z].object),delete j[Z];delete k[P.id]}}function H(){se(),u=!0,c!==l&&(c=l,p(c.object))}function se(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:h,reset:H,resetDefaultState:se,dispose:M,releaseStatesOfGeometry:E,releaseStatesOfProgram:N,initAttributes:v,enableAttribute:S,disableUnusedAttributes:A}}function Ap(i,e,t,n){const s=n.isWebGL2;let r;function a(u){r=u}function o(u,h){i.drawArrays(r,u,h),t.update(h,r,1)}function l(u,h,d){if(d===0)return;let p,g;if(s)p=i,g="drawArraysInstanced";else if(p=e.get("ANGLE_instanced_arrays"),g="drawArraysInstancedANGLE",p===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}p[g](r,u,h,d),t.update(h,r,d)}function c(u,h,d){if(d===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let g=0;g<d;g++)this.render(u[g],h[g]);else{p.multiDrawArraysWEBGL(r,u,0,h,0,d);let g=0;for(let _=0;_<d;_++)g+=h[_];t.update(g,r,1)}}this.setMode=a,this.render=o,this.renderInstances=l,this.renderMultiDraw=c}function wp(i,e,t){let n;function s(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){const w=e.get("EXT_texture_filter_anisotropic");n=i.getParameter(w.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function r(w){if(w==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";w="mediump"}return w==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const a=typeof WebGL2RenderingContext<"u"&&i.constructor.name==="WebGL2RenderingContext";let o=t.precision!==void 0?t.precision:"highp";const l=r(o);l!==o&&(console.warn("THREE.WebGLRenderer:",o,"not supported, using",l,"instead."),o=l);const c=a||e.has("WEBGL_draw_buffers"),u=t.logarithmicDepthBuffer===!0,h=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),d=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),p=i.getParameter(i.MAX_TEXTURE_SIZE),g=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),_=i.getParameter(i.MAX_VERTEX_ATTRIBS),m=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),f=i.getParameter(i.MAX_VARYING_VECTORS),y=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),v=d>0,S=a||e.has("OES_texture_float"),R=v&&S,A=a?i.getParameter(i.MAX_SAMPLES):0;return{isWebGL2:a,drawBuffers:c,getMaxAnisotropy:s,getMaxPrecision:r,precision:o,logarithmicDepthBuffer:u,maxTextures:h,maxVertexTextures:d,maxTextureSize:p,maxCubemapSize:g,maxAttributes:_,maxVertexUniforms:m,maxVaryings:f,maxFragmentUniforms:y,vertexTextures:v,floatFragmentTextures:S,floatVertexTextures:R,maxSamples:A}}function Cp(i){const e=this;let t=null,n=0,s=!1,r=!1;const a=new Yn,o=new Ke,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,d){const p=h.length!==0||d||n!==0||s;return s=d,n=h.length,p},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(h,d){t=u(h,d,0)},this.setState=function(h,d,p){const g=h.clippingPlanes,_=h.clipIntersection,m=h.clipShadows,f=i.get(h);if(!s||g===null||g.length===0||r&&!m)r?u(null):c();else{const y=r?0:n,v=y*4;let S=f.clippingState||null;l.value=S,S=u(g,d,v,p);for(let R=0;R!==v;++R)S[R]=t[R];f.clippingState=S,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=y}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(h,d,p,g){const _=h!==null?h.length:0;let m=null;if(_!==0){if(m=l.value,g!==!0||m===null){const f=p+_*4,y=d.matrixWorldInverse;o.getNormalMatrix(y),(m===null||m.length<f)&&(m=new Float32Array(f));for(let v=0,S=p;v!==_;++v,S+=4)a.copy(h[v]).applyMatrix4(y,o),a.normal.toArray(m,S),m[S+3]=a.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,m}}function Rp(i){let e=new WeakMap;function t(a,o){return o===Ma?a.mapping=Fi:o===ba&&(a.mapping=Gi),a}function n(a){if(a&&a.isTexture){const o=a.mapping;if(o===Ma||o===ba)if(e.has(a)){const l=e.get(a).texture;return t(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const c=new Hh(l.height/2);return c.fromEquirectangularTexture(i,a),e.set(a,c),a.addEventListener("dispose",s),t(c.texture,a.mapping)}else return null}}return a}function s(a){const o=a.target;o.removeEventListener("dispose",s);const l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}class ja extends Oc{constructor(e=-1,t=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=n-e,a=n+e,o=s+t,l=s-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=u*this.view.offsetY,l=o-u*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const Pi=4,ul=[.125,.215,.35,.446,.526,.582],Jn=20,Qr=new ja,hl=new Pe;let ea=null,ta=0,na=0;const $n=(1+Math.sqrt(5))/2,wi=1/$n,dl=[new C(1,1,1),new C(-1,1,1),new C(1,1,-1),new C(-1,1,-1),new C(0,$n,wi),new C(0,$n,-wi),new C(wi,0,$n),new C(-wi,0,$n),new C($n,wi,0),new C(-$n,wi,0)];class fl{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,s=100){ea=this._renderer.getRenderTarget(),ta=this._renderer.getActiveCubeFace(),na=this._renderer.getActiveMipmapLevel(),this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,n,s,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=gl(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=ml(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(ea,ta,na),e.scissorTest=!1,qs(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Fi||e.mapping===Gi?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),ea=this._renderer.getRenderTarget(),ta=this._renderer.getActiveCubeFace(),na=this._renderer.getActiveMipmapLevel();const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Jt,minFilter:Jt,generateMipmaps:!1,type:En,format:on,colorSpace:Tn,depthBuffer:!1},s=pl(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=pl(e,t,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Lp(r)),this._blurMaterial=Pp(r,e,t)}return s}_compileMaterial(e){const t=new $(this._lodPlanes[0],e);this._renderer.compile(t,Qr)}_sceneToCubeUV(e,t,n,s){const o=new Wt(90,1,t,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,h=u.autoClear,d=u.toneMapping;u.getClearColor(hl),u.toneMapping=Fn,u.autoClear=!1;const p=new Be({name:"PMREM.Background",side:Dt,depthWrite:!1,depthTest:!1}),g=new $(new Lt,p);let _=!1;const m=e.background;m?m.isColor&&(p.color.copy(m),e.background=null,_=!0):(p.color.copy(hl),_=!0);for(let f=0;f<6;f++){const y=f%3;y===0?(o.up.set(0,l[f],0),o.lookAt(c[f],0,0)):y===1?(o.up.set(0,0,l[f]),o.lookAt(0,c[f],0)):(o.up.set(0,l[f],0),o.lookAt(0,0,c[f]));const v=this._cubeSize;qs(s,y*v,f>2?v:0,v,v),u.setRenderTarget(s),_&&u.render(g,o),u.render(e,o)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=d,u.autoClear=h,e.background=m}_textureToCubeUV(e,t){const n=this._renderer,s=e.mapping===Fi||e.mapping===Gi;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=gl()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=ml());const r=s?this._cubemapMaterial:this._equirectMaterial,a=new $(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=e;const l=this._cubeSize;qs(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(a,Qr)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;for(let s=1;s<this._lodPlanes.length;s++){const r=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=dl[(s-1)%dl.length];this._blur(e,s-1,s,r,a)}t.autoClear=n}_blur(e,t,n,s,r){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,s,"latitudinal",r),this._halfBlur(a,e,n,n,s,"longitudinal",r)}_halfBlur(e,t,n,s,r,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,h=new $(this._lodPlanes[s],c),d=c.uniforms,p=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*p):2*Math.PI/(2*Jn-1),_=r/g,m=isFinite(r)?1+Math.floor(u*_):Jn;m>Jn&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Jn}`);const f=[];let y=0;for(let w=0;w<Jn;++w){const O=w/_,M=Math.exp(-O*O/2);f.push(M),w===0?y+=M:w<m&&(y+=2*M)}for(let w=0;w<f.length;w++)f[w]=f[w]/y;d.envMap.value=e.texture,d.samples.value=m,d.weights.value=f,d.latitudinal.value=a==="latitudinal",o&&(d.poleAxis.value=o);const{_lodMax:v}=this;d.dTheta.value=g,d.mipInt.value=v-n;const S=this._sizeLods[s],R=3*S*(s>v-Pi?s-v+Pi:0),A=4*(this._cubeSize-S);qs(t,R,A,3*S,2*S),l.setRenderTarget(t),l.render(h,Qr)}}function Lp(i){const e=[],t=[],n=[];let s=i;const r=i-Pi+1+ul.length;for(let a=0;a<r;a++){const o=Math.pow(2,s);t.push(o);let l=1/o;a>i-Pi?l=ul[a-i+Pi-1]:a===0&&(l=0),n.push(l);const c=1/(o-2),u=-c,h=1+c,d=[u,u,h,u,h,h,u,u,h,h,u,h],p=6,g=6,_=3,m=2,f=1,y=new Float32Array(_*g*p),v=new Float32Array(m*g*p),S=new Float32Array(f*g*p);for(let A=0;A<p;A++){const w=A%3*2/3-1,O=A>2?0:-1,M=[w,O,0,w+2/3,O,0,w+2/3,O+1,0,w,O,0,w+2/3,O+1,0,w,O+1,0];y.set(M,_*g*A),v.set(d,m*g*A);const E=[A,A,A,A,A,A];S.set(E,f*g*A)}const R=new it;R.setAttribute("position",new _t(y,_)),R.setAttribute("uv",new _t(v,m)),R.setAttribute("faceIndex",new _t(S,f)),e.push(R),s>Pi&&s--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function pl(i,e,t){const n=new cn(i,e,t);return n.texture.mapping=_r,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function qs(i,e,t,n,s){i.viewport.set(e,t,n,s),i.scissor.set(e,t,n,s)}function Pp(i,e,t){const n=new Float32Array(Jn),s=new C(0,1,0);return new It({name:"SphericalGaussianBlur",defines:{n:Jn,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Za(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:bn,depthTest:!1,depthWrite:!1})}function ml(){return new It({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Za(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:bn,depthTest:!1,depthWrite:!1})}function gl(){return new It({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Za(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:bn,depthTest:!1,depthWrite:!1})}function Za(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function Ip(i){let e=new WeakMap,t=null;function n(o){if(o&&o.isTexture){const l=o.mapping,c=l===Ma||l===ba,u=l===Fi||l===Gi;if(c||u)if(o.isRenderTargetTexture&&o.needsPMREMUpdate===!0){o.needsPMREMUpdate=!1;let h=e.get(o);return t===null&&(t=new fl(i)),h=c?t.fromEquirectangular(o,h):t.fromCubemap(o,h),e.set(o,h),h.texture}else{if(e.has(o))return e.get(o).texture;{const h=o.image;if(c&&h&&h.height>0||u&&h&&s(h)){t===null&&(t=new fl(i));const d=c?t.fromEquirectangular(o):t.fromCubemap(o);return e.set(o,d),o.addEventListener("dispose",r),d.texture}else return null}}}return o}function s(o){let l=0;const c=6;for(let u=0;u<c;u++)o[u]!==void 0&&l++;return l===c}function r(o){const l=o.target;l.removeEventListener("dispose",r);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:a}}function Dp(i){const e={};function t(n){if(e[n]!==void 0)return e[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(n){n.isWebGL2?(t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance")):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(n){const s=t(n);return s===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function Op(i,e,t,n){const s={},r=new WeakMap;function a(h){const d=h.target;d.index!==null&&e.remove(d.index);for(const g in d.attributes)e.remove(d.attributes[g]);for(const g in d.morphAttributes){const _=d.morphAttributes[g];for(let m=0,f=_.length;m<f;m++)e.remove(_[m])}d.removeEventListener("dispose",a),delete s[d.id];const p=r.get(d);p&&(e.remove(p),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function o(h,d){return s[d.id]===!0||(d.addEventListener("dispose",a),s[d.id]=!0,t.memory.geometries++),d}function l(h){const d=h.attributes;for(const g in d)e.update(d[g],i.ARRAY_BUFFER);const p=h.morphAttributes;for(const g in p){const _=p[g];for(let m=0,f=_.length;m<f;m++)e.update(_[m],i.ARRAY_BUFFER)}}function c(h){const d=[],p=h.index,g=h.attributes.position;let _=0;if(p!==null){const y=p.array;_=p.version;for(let v=0,S=y.length;v<S;v+=3){const R=y[v+0],A=y[v+1],w=y[v+2];d.push(R,A,A,w,w,R)}}else if(g!==void 0){const y=g.array;_=g.version;for(let v=0,S=y.length/3-1;v<S;v+=3){const R=v+0,A=v+1,w=v+2;d.push(R,A,A,w,w,R)}}else return;const m=new(Ac(d)?Ic:Pc)(d,1);m.version=_;const f=r.get(h);f&&e.remove(f),r.set(h,m)}function u(h){const d=r.get(h);if(d){const p=h.index;p!==null&&d.version<p.version&&c(h)}else c(h);return r.get(h)}return{get:o,update:l,getWireframeAttribute:u}}function Np(i,e,t,n){const s=n.isWebGL2;let r;function a(p){r=p}let o,l;function c(p){o=p.type,l=p.bytesPerElement}function u(p,g){i.drawElements(r,g,o,p*l),t.update(g,r,1)}function h(p,g,_){if(_===0)return;let m,f;if(s)m=i,f="drawElementsInstanced";else if(m=e.get("ANGLE_instanced_arrays"),f="drawElementsInstancedANGLE",m===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}m[f](r,g,o,p*l,_),t.update(g,r,_)}function d(p,g,_){if(_===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let f=0;f<_;f++)this.render(p[f]/l,g[f]);else{m.multiDrawElementsWEBGL(r,g,0,o,p,0,_);let f=0;for(let y=0;y<_;y++)f+=g[y];t.update(f,r,1)}}this.setMode=a,this.setIndex=c,this.render=u,this.renderInstances=h,this.renderMultiDraw=d}function Up(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(t.calls++,a){case i.TRIANGLES:t.triangles+=o*(r/3);break;case i.LINES:t.lines+=o*(r/2);break;case i.LINE_STRIP:t.lines+=o*(r-1);break;case i.LINE_LOOP:t.lines+=o*r;break;case i.POINTS:t.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function Fp(i,e){return i[0]-e[0]}function Gp(i,e){return Math.abs(e[1])-Math.abs(i[1])}function Bp(i,e,t){const n={},s=new Float32Array(8),r=new WeakMap,a=new dt,o=[];for(let c=0;c<8;c++)o[c]=[c,0];function l(c,u,h){const d=c.morphTargetInfluences;if(e.isWebGL2===!0){const g=u.morphAttributes.position||u.morphAttributes.normal||u.morphAttributes.color,_=g!==void 0?g.length:0;let m=r.get(u);if(m===void 0||m.count!==_){let G=function(){se.dispose(),r.delete(u),u.removeEventListener("dispose",G)};var p=G;m!==void 0&&m.texture.dispose();const v=u.morphAttributes.position!==void 0,S=u.morphAttributes.normal!==void 0,R=u.morphAttributes.color!==void 0,A=u.morphAttributes.position||[],w=u.morphAttributes.normal||[],O=u.morphAttributes.color||[];let M=0;v===!0&&(M=1),S===!0&&(M=2),R===!0&&(M=3);let E=u.attributes.position.count*M,N=1;E>e.maxTextureSize&&(N=Math.ceil(E/e.maxTextureSize),E=e.maxTextureSize);const H=new Float32Array(E*N*4*_),se=new Rc(H,E,N,_);se.type=Un,se.needsUpdate=!0;const P=M*4;for(let k=0;k<_;k++){const j=A[k],Z=w[k],ee=O[k],q=E*N*4*k;for(let X=0;X<j.count;X++){const re=X*P;v===!0&&(a.fromBufferAttribute(j,X),H[q+re+0]=a.x,H[q+re+1]=a.y,H[q+re+2]=a.z,H[q+re+3]=0),S===!0&&(a.fromBufferAttribute(Z,X),H[q+re+4]=a.x,H[q+re+5]=a.y,H[q+re+6]=a.z,H[q+re+7]=0),R===!0&&(a.fromBufferAttribute(ee,X),H[q+re+8]=a.x,H[q+re+9]=a.y,H[q+re+10]=a.z,H[q+re+11]=ee.itemSize===4?a.w:1)}}m={count:_,texture:se,size:new le(E,N)},r.set(u,m),u.addEventListener("dispose",G)}let f=0;for(let v=0;v<d.length;v++)f+=d[v];const y=u.morphTargetsRelative?1:1-f;h.getUniforms().setValue(i,"morphTargetBaseInfluence",y),h.getUniforms().setValue(i,"morphTargetInfluences",d),h.getUniforms().setValue(i,"morphTargetsTexture",m.texture,t),h.getUniforms().setValue(i,"morphTargetsTextureSize",m.size)}else{const g=d===void 0?0:d.length;let _=n[u.id];if(_===void 0||_.length!==g){_=[];for(let S=0;S<g;S++)_[S]=[S,0];n[u.id]=_}for(let S=0;S<g;S++){const R=_[S];R[0]=S,R[1]=d[S]}_.sort(Gp);for(let S=0;S<8;S++)S<g&&_[S][1]?(o[S][0]=_[S][0],o[S][1]=_[S][1]):(o[S][0]=Number.MAX_SAFE_INTEGER,o[S][1]=0);o.sort(Fp);const m=u.morphAttributes.position,f=u.morphAttributes.normal;let y=0;for(let S=0;S<8;S++){const R=o[S],A=R[0],w=R[1];A!==Number.MAX_SAFE_INTEGER&&w?(m&&u.getAttribute("morphTarget"+S)!==m[A]&&u.setAttribute("morphTarget"+S,m[A]),f&&u.getAttribute("morphNormal"+S)!==f[A]&&u.setAttribute("morphNormal"+S,f[A]),s[S]=w,y+=w):(m&&u.hasAttribute("morphTarget"+S)===!0&&u.deleteAttribute("morphTarget"+S),f&&u.hasAttribute("morphNormal"+S)===!0&&u.deleteAttribute("morphNormal"+S),s[S]=0)}const v=u.morphTargetsRelative?1:1-y;h.getUniforms().setValue(i,"morphTargetBaseInfluence",v),h.getUniforms().setValue(i,"morphTargetInfluences",s)}}return{update:l}}function Hp(i,e,t,n){let s=new WeakMap;function r(l){const c=n.render.frame,u=l.geometry,h=e.get(l,u);if(s.get(h)!==c&&(e.update(h),s.set(h,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),s.get(l)!==c&&(t.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,i.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){const d=l.skeleton;s.get(d)!==c&&(d.update(),s.set(d,c))}return h}function a(){s=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:r,dispose:a}}class Fc extends qt{constructor(e,t,n,s,r,a,o,l,c,u){if(u=u!==void 0?u:ni,u!==ni&&u!==Bi)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===ni&&(n=Nn),n===void 0&&u===Bi&&(n=ti),super(null,s,r,a,o,l,u,n,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=o!==void 0?o:Ht,this.minFilter=l!==void 0?l:Ht,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const Gc=new qt,Bc=new Fc(1,1);Bc.compareFunction=Tc;const Hc=new Rc,kc=new Eh,zc=new Nc,_l=[],vl=[],yl=new Float32Array(16),xl=new Float32Array(9),Sl=new Float32Array(4);function qi(i,e,t){const n=i[0];if(n<=0||n>0)return i;const s=e*t;let r=_l[s];if(r===void 0&&(r=new Float32Array(s),_l[s]=r),e!==0){n.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,i[a].toArray(r,o)}return r}function Tt(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function At(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function xr(i,e){let t=vl[e];t===void 0&&(t=new Int32Array(e),vl[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function kp(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function zp(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Tt(t,e))return;i.uniform2fv(this.addr,e),At(t,e)}}function Vp(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Tt(t,e))return;i.uniform3fv(this.addr,e),At(t,e)}}function Wp(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Tt(t,e))return;i.uniform4fv(this.addr,e),At(t,e)}}function qp(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Tt(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),At(t,e)}else{if(Tt(t,n))return;Sl.set(n),i.uniformMatrix2fv(this.addr,!1,Sl),At(t,n)}}function Xp(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Tt(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),At(t,e)}else{if(Tt(t,n))return;xl.set(n),i.uniformMatrix3fv(this.addr,!1,xl),At(t,n)}}function Kp(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Tt(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),At(t,e)}else{if(Tt(t,n))return;yl.set(n),i.uniformMatrix4fv(this.addr,!1,yl),At(t,n)}}function Yp(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function $p(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Tt(t,e))return;i.uniform2iv(this.addr,e),At(t,e)}}function jp(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Tt(t,e))return;i.uniform3iv(this.addr,e),At(t,e)}}function Zp(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Tt(t,e))return;i.uniform4iv(this.addr,e),At(t,e)}}function Jp(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function Qp(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Tt(t,e))return;i.uniform2uiv(this.addr,e),At(t,e)}}function em(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Tt(t,e))return;i.uniform3uiv(this.addr,e),At(t,e)}}function tm(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Tt(t,e))return;i.uniform4uiv(this.addr,e),At(t,e)}}function nm(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);const r=this.type===i.SAMPLER_2D_SHADOW?Bc:Gc;t.setTexture2D(e||r,s)}function im(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||kc,s)}function sm(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTextureCube(e||zc,s)}function rm(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||Hc,s)}function am(i){switch(i){case 5126:return kp;case 35664:return zp;case 35665:return Vp;case 35666:return Wp;case 35674:return qp;case 35675:return Xp;case 35676:return Kp;case 5124:case 35670:return Yp;case 35667:case 35671:return $p;case 35668:case 35672:return jp;case 35669:case 35673:return Zp;case 5125:return Jp;case 36294:return Qp;case 36295:return em;case 36296:return tm;case 35678:case 36198:case 36298:case 36306:case 35682:return nm;case 35679:case 36299:case 36307:return im;case 35680:case 36300:case 36308:case 36293:return sm;case 36289:case 36303:case 36311:case 36292:return rm}}function om(i,e){i.uniform1fv(this.addr,e)}function lm(i,e){const t=qi(e,this.size,2);i.uniform2fv(this.addr,t)}function cm(i,e){const t=qi(e,this.size,3);i.uniform3fv(this.addr,t)}function um(i,e){const t=qi(e,this.size,4);i.uniform4fv(this.addr,t)}function hm(i,e){const t=qi(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function dm(i,e){const t=qi(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function fm(i,e){const t=qi(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function pm(i,e){i.uniform1iv(this.addr,e)}function mm(i,e){i.uniform2iv(this.addr,e)}function gm(i,e){i.uniform3iv(this.addr,e)}function _m(i,e){i.uniform4iv(this.addr,e)}function vm(i,e){i.uniform1uiv(this.addr,e)}function ym(i,e){i.uniform2uiv(this.addr,e)}function xm(i,e){i.uniform3uiv(this.addr,e)}function Sm(i,e){i.uniform4uiv(this.addr,e)}function Mm(i,e,t){const n=this.cache,s=e.length,r=xr(t,s);Tt(n,r)||(i.uniform1iv(this.addr,r),At(n,r));for(let a=0;a!==s;++a)t.setTexture2D(e[a]||Gc,r[a])}function bm(i,e,t){const n=this.cache,s=e.length,r=xr(t,s);Tt(n,r)||(i.uniform1iv(this.addr,r),At(n,r));for(let a=0;a!==s;++a)t.setTexture3D(e[a]||kc,r[a])}function Em(i,e,t){const n=this.cache,s=e.length,r=xr(t,s);Tt(n,r)||(i.uniform1iv(this.addr,r),At(n,r));for(let a=0;a!==s;++a)t.setTextureCube(e[a]||zc,r[a])}function Tm(i,e,t){const n=this.cache,s=e.length,r=xr(t,s);Tt(n,r)||(i.uniform1iv(this.addr,r),At(n,r));for(let a=0;a!==s;++a)t.setTexture2DArray(e[a]||Hc,r[a])}function Am(i){switch(i){case 5126:return om;case 35664:return lm;case 35665:return cm;case 35666:return um;case 35674:return hm;case 35675:return dm;case 35676:return fm;case 5124:case 35670:return pm;case 35667:case 35671:return mm;case 35668:case 35672:return gm;case 35669:case 35673:return _m;case 5125:return vm;case 36294:return ym;case 36295:return xm;case 36296:return Sm;case 35678:case 36198:case 36298:case 36306:case 35682:return Mm;case 35679:case 36299:case 36307:return bm;case 35680:case 36300:case 36308:case 36293:return Em;case 36289:case 36303:case 36311:case 36292:return Tm}}class wm{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=am(t.type)}}class Cm{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Am(t.type)}}class Rm{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const s=this.seq;for(let r=0,a=s.length;r!==a;++r){const o=s[r];o.setValue(e,t[o.id],n)}}}const ia=/(\w+)(\])?(\[|\.)?/g;function Ml(i,e){i.seq.push(e),i.map[e.id]=e}function Lm(i,e,t){const n=i.name,s=n.length;for(ia.lastIndex=0;;){const r=ia.exec(n),a=ia.lastIndex;let o=r[1];const l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===s){Ml(t,c===void 0?new wm(o,i,e):new Cm(o,i,e));break}else{let h=t.map[o];h===void 0&&(h=new Rm(o),Ml(t,h)),t=h}}}class sr{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){const r=e.getActiveUniform(t,s),a=e.getUniformLocation(t,r.name);Lm(r,a,this)}}setValue(e,t,n,s){const r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){const s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,a=t.length;r!==a;++r){const o=t[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,s)}}static seqWithValue(e,t){const n=[];for(let s=0,r=e.length;s!==r;++s){const a=e[s];a.id in t&&n.push(a)}return n}}function bl(i,e,t){const n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}const Pm=37297;let Im=0;function Dm(i,e){const t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=s;a<r;a++){const o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}function Om(i){const e=nt.getPrimaries(nt.workingColorSpace),t=nt.getPrimaries(i);let n;switch(e===t?n="":e===ur&&t===cr?n="LinearDisplayP3ToLinearSRGB":e===cr&&t===ur&&(n="LinearSRGBToLinearDisplayP3"),i){case Tn:case vr:return[n,"LinearTransferOETF"];case xt:case Ka:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",i),[n,"LinearTransferOETF"]}}function El(i,e,t){const n=i.getShaderParameter(e,i.COMPILE_STATUS),s=i.getShaderInfoLog(e).trim();if(n&&s==="")return"";const r=/ERROR: 0:(\d+)/.exec(s);if(r){const a=parseInt(r[1]);return t.toUpperCase()+`

`+s+`

`+Dm(i.getShaderSource(e),a)}else return s}function Nm(i,e){const t=Om(e);return`vec4 ${i}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function Um(i,e){let t;switch(e){case Yu:t="Linear";break;case $u:t="Reinhard";break;case ju:t="OptimizedCineon";break;case pc:t="ACESFilmic";break;case Ju:t="AgX";break;case Zu:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function Fm(i){return[i.extensionDerivatives||i.envMapCubeUVHeight||i.bumpMap||i.normalMapTangentSpace||i.clearcoatNormalMap||i.flatShading||i.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(i.extensionFragDepth||i.logarithmicDepthBuffer)&&i.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",i.extensionDrawBuffers&&i.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(i.extensionShaderTextureLOD||i.envMap||i.transmission)&&i.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Ii).join(`
`)}function Gm(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":""].filter(Ii).join(`
`)}function Bm(i){const e=[];for(const t in i){const n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function Hm(i,e){const t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const r=i.getActiveAttrib(e,s),a=r.name;let o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),t[a]={type:r.type,location:i.getAttribLocation(e,a),locationSize:o}}return t}function Ii(i){return i!==""}function Tl(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Al(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const km=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ra(i){return i.replace(km,Vm)}const zm=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function Vm(i,e){let t=ze[e];if(t===void 0){const n=zm.get(e);if(n!==void 0)t=ze[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return Ra(t)}const Wm=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function wl(i){return i.replace(Wm,qm)}function qm(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Cl(i){let e="precision "+i.precision+` float;
precision `+i.precision+" int;";return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function Xm(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===dc?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===Mu?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===Sn&&(e="SHADOWMAP_TYPE_VSM"),e}function Km(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case Fi:case Gi:e="ENVMAP_TYPE_CUBE";break;case _r:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Ym(i){let e="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case Gi:e="ENVMAP_MODE_REFRACTION";break}return e}function $m(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case fc:e="ENVMAP_BLENDING_MULTIPLY";break;case Xu:e="ENVMAP_BLENDING_MIX";break;case Ku:e="ENVMAP_BLENDING_ADD";break}return e}function jm(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function Zm(i,e,t,n){const s=i.getContext(),r=t.defines;let a=t.vertexShader,o=t.fragmentShader;const l=Xm(t),c=Km(t),u=Ym(t),h=$m(t),d=jm(t),p=t.isWebGL2?"":Fm(t),g=Gm(t),_=Bm(r),m=s.createProgram();let f,y,v=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(f=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(Ii).join(`
`),f.length>0&&(f+=`
`),y=[p,"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(Ii).join(`
`),y.length>0&&(y+=`
`)):(f=[Cl(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ii).join(`
`),y=[p,Cl(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Fn?"#define TONE_MAPPING":"",t.toneMapping!==Fn?ze.tonemapping_pars_fragment:"",t.toneMapping!==Fn?Um("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",ze.colorspace_pars_fragment,Nm("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Ii).join(`
`)),a=Ra(a),a=Tl(a,t),a=Al(a,t),o=Ra(o),o=Tl(o,t),o=Al(o,t),a=wl(a),o=wl(o),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,f=[g,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+f,y=["precision mediump sampler2DArray;","#define varying in",t.glslVersion===Xo?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Xo?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+y);const S=v+f+a,R=v+y+o,A=bl(s,s.VERTEX_SHADER,S),w=bl(s,s.FRAGMENT_SHADER,R);s.attachShader(m,A),s.attachShader(m,w),t.index0AttributeName!==void 0?s.bindAttribLocation(m,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(m,0,"position"),s.linkProgram(m);function O(H){if(i.debug.checkShaderErrors){const se=s.getProgramInfoLog(m).trim(),P=s.getShaderInfoLog(A).trim(),G=s.getShaderInfoLog(w).trim();let k=!0,j=!0;if(s.getProgramParameter(m,s.LINK_STATUS)===!1)if(k=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,m,A,w);else{const Z=El(s,A,"vertex"),ee=El(s,w,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(m,s.VALIDATE_STATUS)+`

Program Info Log: `+se+`
`+Z+`
`+ee)}else se!==""?console.warn("THREE.WebGLProgram: Program Info Log:",se):(P===""||G==="")&&(j=!1);j&&(H.diagnostics={runnable:k,programLog:se,vertexShader:{log:P,prefix:f},fragmentShader:{log:G,prefix:y}})}s.deleteShader(A),s.deleteShader(w),M=new sr(s,m),E=Hm(s,m)}let M;this.getUniforms=function(){return M===void 0&&O(this),M};let E;this.getAttributes=function(){return E===void 0&&O(this),E};let N=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return N===!1&&(N=s.getProgramParameter(m,Pm)),N},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(m),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Im++,this.cacheKey=e,this.usedTimes=1,this.program=m,this.vertexShader=A,this.fragmentShader=w,this}let Jm=0;class Qm{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(n),a=this._getShaderCacheForMaterial(e);return a.has(s)===!1&&(a.add(s),s.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new e0(e),t.set(e,n)),n}}class e0{constructor(e){this.id=Jm++,this.code=e,this.usedTimes=0}}function t0(i,e,t,n,s,r,a){const o=new Ya,l=new Qm,c=[],u=s.isWebGL2,h=s.logarithmicDepthBuffer,d=s.vertexTextures;let p=s.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(M){return M===0?"uv":`uv${M}`}function m(M,E,N,H,se){const P=H.fog,G=se.geometry,k=M.isMeshStandardMaterial?H.environment:null,j=(M.isMeshStandardMaterial?t:e).get(M.envMap||k),Z=j&&j.mapping===_r?j.image.height:null,ee=g[M.type];M.precision!==null&&(p=s.getMaxPrecision(M.precision),p!==M.precision&&console.warn("THREE.WebGLProgram.getParameters:",M.precision,"not supported, using",p,"instead."));const q=G.morphAttributes.position||G.morphAttributes.normal||G.morphAttributes.color,X=q!==void 0?q.length:0;let re=0;G.morphAttributes.position!==void 0&&(re=1),G.morphAttributes.normal!==void 0&&(re=2),G.morphAttributes.color!==void 0&&(re=3);let B,ie,pe,Se;if(ee){const Ft=hn[ee];B=Ft.vertexShader,ie=Ft.fragmentShader}else B=M.vertexShader,ie=M.fragmentShader,l.update(M),pe=l.getVertexShaderID(M),Se=l.getFragmentShaderID(M);const D=i.getRenderTarget(),me=se.isInstancedMesh===!0,ve=se.isBatchedMesh===!0,he=!!M.map,Ee=!!M.matcap,L=!!j,ce=!!M.aoMap,K=!!M.lightMap,ae=!!M.bumpMap,Y=!!M.normalMap,we=!!M.displacementMap,ue=!!M.emissiveMap,b=!!M.metalnessMap,x=!!M.roughnessMap,U=M.anisotropy>0,Q=M.clearcoat>0,J=M.iridescence>0,ne=M.sheen>0,Me=M.transmission>0,de=U&&!!M.anisotropyMap,fe=Q&&!!M.clearcoatMap,Te=Q&&!!M.clearcoatNormalMap,Ie=Q&&!!M.clearcoatRoughnessMap,oe=J&&!!M.iridescenceMap,$e=J&&!!M.iridescenceThicknessMap,Ve=ne&&!!M.sheenColorMap,De=ne&&!!M.sheenRoughnessMap,Re=!!M.specularMap,Ae=!!M.specularColorMap,Ge=!!M.specularIntensityMap,Qe=Me&&!!M.transmissionMap,ut=Me&&!!M.thicknessMap,qe=!!M.gradientMap,ge=!!M.alphaMap,I=M.alphaTest>0,ye=!!M.alphaHash,xe=!!M.extensions,Ue=!!G.attributes.uv1,Oe=!!G.attributes.uv2,st=!!G.attributes.uv3;let rt=Fn;return M.toneMapped&&(D===null||D.isXRRenderTarget===!0)&&(rt=i.toneMapping),{isWebGL2:u,shaderID:ee,shaderType:M.type,shaderName:M.name,vertexShader:B,fragmentShader:ie,defines:M.defines,customVertexShaderID:pe,customFragmentShaderID:Se,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:p,batching:ve,instancing:me,instancingColor:me&&se.instanceColor!==null,supportsVertexTextures:d,outputColorSpace:D===null?i.outputColorSpace:D.isXRRenderTarget===!0?D.texture.colorSpace:Tn,map:he,matcap:Ee,envMap:L,envMapMode:L&&j.mapping,envMapCubeUVHeight:Z,aoMap:ce,lightMap:K,bumpMap:ae,normalMap:Y,displacementMap:d&&we,emissiveMap:ue,normalMapObjectSpace:Y&&M.normalMapType===uh,normalMapTangentSpace:Y&&M.normalMapType===Ec,metalnessMap:b,roughnessMap:x,anisotropy:U,anisotropyMap:de,clearcoat:Q,clearcoatMap:fe,clearcoatNormalMap:Te,clearcoatRoughnessMap:Ie,iridescence:J,iridescenceMap:oe,iridescenceThicknessMap:$e,sheen:ne,sheenColorMap:Ve,sheenRoughnessMap:De,specularMap:Re,specularColorMap:Ae,specularIntensityMap:Ge,transmission:Me,transmissionMap:Qe,thicknessMap:ut,gradientMap:qe,opaque:M.transparent===!1&&M.blending===Oi,alphaMap:ge,alphaTest:I,alphaHash:ye,combine:M.combine,mapUv:he&&_(M.map.channel),aoMapUv:ce&&_(M.aoMap.channel),lightMapUv:K&&_(M.lightMap.channel),bumpMapUv:ae&&_(M.bumpMap.channel),normalMapUv:Y&&_(M.normalMap.channel),displacementMapUv:we&&_(M.displacementMap.channel),emissiveMapUv:ue&&_(M.emissiveMap.channel),metalnessMapUv:b&&_(M.metalnessMap.channel),roughnessMapUv:x&&_(M.roughnessMap.channel),anisotropyMapUv:de&&_(M.anisotropyMap.channel),clearcoatMapUv:fe&&_(M.clearcoatMap.channel),clearcoatNormalMapUv:Te&&_(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ie&&_(M.clearcoatRoughnessMap.channel),iridescenceMapUv:oe&&_(M.iridescenceMap.channel),iridescenceThicknessMapUv:$e&&_(M.iridescenceThicknessMap.channel),sheenColorMapUv:Ve&&_(M.sheenColorMap.channel),sheenRoughnessMapUv:De&&_(M.sheenRoughnessMap.channel),specularMapUv:Re&&_(M.specularMap.channel),specularColorMapUv:Ae&&_(M.specularColorMap.channel),specularIntensityMapUv:Ge&&_(M.specularIntensityMap.channel),transmissionMapUv:Qe&&_(M.transmissionMap.channel),thicknessMapUv:ut&&_(M.thicknessMap.channel),alphaMapUv:ge&&_(M.alphaMap.channel),vertexTangents:!!G.attributes.tangent&&(Y||U),vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!G.attributes.color&&G.attributes.color.itemSize===4,vertexUv1s:Ue,vertexUv2s:Oe,vertexUv3s:st,pointsUvs:se.isPoints===!0&&!!G.attributes.uv&&(he||ge),fog:!!P,useFog:M.fog===!0,fogExp2:P&&P.isFogExp2,flatShading:M.flatShading===!0,sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:h,skinning:se.isSkinnedMesh===!0,morphTargets:G.morphAttributes.position!==void 0,morphNormals:G.morphAttributes.normal!==void 0,morphColors:G.morphAttributes.color!==void 0,morphTargetsCount:X,morphTextureStride:re,numDirLights:E.directional.length,numPointLights:E.point.length,numSpotLights:E.spot.length,numSpotLightMaps:E.spotLightMap.length,numRectAreaLights:E.rectArea.length,numHemiLights:E.hemi.length,numDirLightShadows:E.directionalShadowMap.length,numPointLightShadows:E.pointShadowMap.length,numSpotLightShadows:E.spotShadowMap.length,numSpotLightShadowsWithMaps:E.numSpotLightShadowsWithMaps,numLightProbes:E.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:M.dithering,shadowMapEnabled:i.shadowMap.enabled&&N.length>0,shadowMapType:i.shadowMap.type,toneMapping:rt,useLegacyLights:i._useLegacyLights,decodeVideoTexture:he&&M.map.isVideoTexture===!0&&nt.getTransfer(M.map.colorSpace)===ht,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===St,flipSided:M.side===Dt,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionDerivatives:xe&&M.extensions.derivatives===!0,extensionFragDepth:xe&&M.extensions.fragDepth===!0,extensionDrawBuffers:xe&&M.extensions.drawBuffers===!0,extensionShaderTextureLOD:xe&&M.extensions.shaderTextureLOD===!0,extensionClipCullDistance:xe&&M.extensions.clipCullDistance&&n.has("WEBGL_clip_cull_distance"),rendererExtensionFragDepth:u||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:u||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:u||n.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:M.customProgramCacheKey()}}function f(M){const E=[];if(M.shaderID?E.push(M.shaderID):(E.push(M.customVertexShaderID),E.push(M.customFragmentShaderID)),M.defines!==void 0)for(const N in M.defines)E.push(N),E.push(M.defines[N]);return M.isRawShaderMaterial===!1&&(y(E,M),v(E,M),E.push(i.outputColorSpace)),E.push(M.customProgramCacheKey),E.join()}function y(M,E){M.push(E.precision),M.push(E.outputColorSpace),M.push(E.envMapMode),M.push(E.envMapCubeUVHeight),M.push(E.mapUv),M.push(E.alphaMapUv),M.push(E.lightMapUv),M.push(E.aoMapUv),M.push(E.bumpMapUv),M.push(E.normalMapUv),M.push(E.displacementMapUv),M.push(E.emissiveMapUv),M.push(E.metalnessMapUv),M.push(E.roughnessMapUv),M.push(E.anisotropyMapUv),M.push(E.clearcoatMapUv),M.push(E.clearcoatNormalMapUv),M.push(E.clearcoatRoughnessMapUv),M.push(E.iridescenceMapUv),M.push(E.iridescenceThicknessMapUv),M.push(E.sheenColorMapUv),M.push(E.sheenRoughnessMapUv),M.push(E.specularMapUv),M.push(E.specularColorMapUv),M.push(E.specularIntensityMapUv),M.push(E.transmissionMapUv),M.push(E.thicknessMapUv),M.push(E.combine),M.push(E.fogExp2),M.push(E.sizeAttenuation),M.push(E.morphTargetsCount),M.push(E.morphAttributeCount),M.push(E.numDirLights),M.push(E.numPointLights),M.push(E.numSpotLights),M.push(E.numSpotLightMaps),M.push(E.numHemiLights),M.push(E.numRectAreaLights),M.push(E.numDirLightShadows),M.push(E.numPointLightShadows),M.push(E.numSpotLightShadows),M.push(E.numSpotLightShadowsWithMaps),M.push(E.numLightProbes),M.push(E.shadowMapType),M.push(E.toneMapping),M.push(E.numClippingPlanes),M.push(E.numClipIntersection),M.push(E.depthPacking)}function v(M,E){o.disableAll(),E.isWebGL2&&o.enable(0),E.supportsVertexTextures&&o.enable(1),E.instancing&&o.enable(2),E.instancingColor&&o.enable(3),E.matcap&&o.enable(4),E.envMap&&o.enable(5),E.normalMapObjectSpace&&o.enable(6),E.normalMapTangentSpace&&o.enable(7),E.clearcoat&&o.enable(8),E.iridescence&&o.enable(9),E.alphaTest&&o.enable(10),E.vertexColors&&o.enable(11),E.vertexAlphas&&o.enable(12),E.vertexUv1s&&o.enable(13),E.vertexUv2s&&o.enable(14),E.vertexUv3s&&o.enable(15),E.vertexTangents&&o.enable(16),E.anisotropy&&o.enable(17),E.alphaHash&&o.enable(18),E.batching&&o.enable(19),M.push(o.mask),o.disableAll(),E.fog&&o.enable(0),E.useFog&&o.enable(1),E.flatShading&&o.enable(2),E.logarithmicDepthBuffer&&o.enable(3),E.skinning&&o.enable(4),E.morphTargets&&o.enable(5),E.morphNormals&&o.enable(6),E.morphColors&&o.enable(7),E.premultipliedAlpha&&o.enable(8),E.shadowMapEnabled&&o.enable(9),E.useLegacyLights&&o.enable(10),E.doubleSided&&o.enable(11),E.flipSided&&o.enable(12),E.useDepthPacking&&o.enable(13),E.dithering&&o.enable(14),E.transmission&&o.enable(15),E.sheen&&o.enable(16),E.opaque&&o.enable(17),E.pointsUvs&&o.enable(18),E.decodeVideoTexture&&o.enable(19),M.push(o.mask)}function S(M){const E=g[M.type];let N;if(E){const H=hn[E];N=fr.clone(H.uniforms)}else N=M.uniforms;return N}function R(M,E){let N;for(let H=0,se=c.length;H<se;H++){const P=c[H];if(P.cacheKey===E){N=P,++N.usedTimes;break}}return N===void 0&&(N=new Zm(i,E,M,r),c.push(N)),N}function A(M){if(--M.usedTimes===0){const E=c.indexOf(M);c[E]=c[c.length-1],c.pop(),M.destroy()}}function w(M){l.remove(M)}function O(){l.dispose()}return{getParameters:m,getProgramCacheKey:f,getUniforms:S,acquireProgram:R,releaseProgram:A,releaseShaderCache:w,programs:c,dispose:O}}function n0(){let i=new WeakMap;function e(r){let a=i.get(r);return a===void 0&&(a={},i.set(r,a)),a}function t(r){i.delete(r)}function n(r,a,o){i.get(r)[a]=o}function s(){i=new WeakMap}return{get:e,remove:t,update:n,dispose:s}}function i0(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function Rl(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function Ll(){const i=[];let e=0;const t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function a(h,d,p,g,_,m){let f=i[e];return f===void 0?(f={id:h.id,object:h,geometry:d,material:p,groupOrder:g,renderOrder:h.renderOrder,z:_,group:m},i[e]=f):(f.id=h.id,f.object=h,f.geometry=d,f.material=p,f.groupOrder=g,f.renderOrder=h.renderOrder,f.z=_,f.group=m),e++,f}function o(h,d,p,g,_,m){const f=a(h,d,p,g,_,m);p.transmission>0?n.push(f):p.transparent===!0?s.push(f):t.push(f)}function l(h,d,p,g,_,m){const f=a(h,d,p,g,_,m);p.transmission>0?n.unshift(f):p.transparent===!0?s.unshift(f):t.unshift(f)}function c(h,d){t.length>1&&t.sort(h||i0),n.length>1&&n.sort(d||Rl),s.length>1&&s.sort(d||Rl)}function u(){for(let h=e,d=i.length;h<d;h++){const p=i[h];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:o,unshift:l,finish:u,sort:c}}function s0(){let i=new WeakMap;function e(n,s){const r=i.get(n);let a;return r===void 0?(a=new Ll,i.set(n,[a])):s>=r.length?(a=new Ll,r.push(a)):a=r[s],a}function t(){i=new WeakMap}return{get:e,dispose:t}}function r0(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new C,color:new Pe};break;case"SpotLight":t={position:new C,direction:new C,color:new Pe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new C,color:new Pe,distance:0,decay:0};break;case"HemisphereLight":t={direction:new C,skyColor:new Pe,groundColor:new Pe};break;case"RectAreaLight":t={color:new Pe,position:new C,halfWidth:new C,halfHeight:new C};break}return i[e.id]=t,t}}}function a0(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new le};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new le};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new le,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let o0=0;function l0(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function c0(i,e){const t=new r0,n=a0(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let u=0;u<9;u++)s.probe.push(new C);const r=new C,a=new lt,o=new lt;function l(u,h){let d=0,p=0,g=0;for(let H=0;H<9;H++)s.probe[H].set(0,0,0);let _=0,m=0,f=0,y=0,v=0,S=0,R=0,A=0,w=0,O=0,M=0;u.sort(l0);const E=h===!0?Math.PI:1;for(let H=0,se=u.length;H<se;H++){const P=u[H],G=P.color,k=P.intensity,j=P.distance,Z=P.shadow&&P.shadow.map?P.shadow.map.texture:null;if(P.isAmbientLight)d+=G.r*k*E,p+=G.g*k*E,g+=G.b*k*E;else if(P.isLightProbe){for(let ee=0;ee<9;ee++)s.probe[ee].addScaledVector(P.sh.coefficients[ee],k);M++}else if(P.isDirectionalLight){const ee=t.get(P);if(ee.color.copy(P.color).multiplyScalar(P.intensity*E),P.castShadow){const q=P.shadow,X=n.get(P);X.shadowBias=q.bias,X.shadowNormalBias=q.normalBias,X.shadowRadius=q.radius,X.shadowMapSize=q.mapSize,s.directionalShadow[_]=X,s.directionalShadowMap[_]=Z,s.directionalShadowMatrix[_]=P.shadow.matrix,S++}s.directional[_]=ee,_++}else if(P.isSpotLight){const ee=t.get(P);ee.position.setFromMatrixPosition(P.matrixWorld),ee.color.copy(G).multiplyScalar(k*E),ee.distance=j,ee.coneCos=Math.cos(P.angle),ee.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),ee.decay=P.decay,s.spot[f]=ee;const q=P.shadow;if(P.map&&(s.spotLightMap[w]=P.map,w++,q.updateMatrices(P),P.castShadow&&O++),s.spotLightMatrix[f]=q.matrix,P.castShadow){const X=n.get(P);X.shadowBias=q.bias,X.shadowNormalBias=q.normalBias,X.shadowRadius=q.radius,X.shadowMapSize=q.mapSize,s.spotShadow[f]=X,s.spotShadowMap[f]=Z,A++}f++}else if(P.isRectAreaLight){const ee=t.get(P);ee.color.copy(G).multiplyScalar(k),ee.halfWidth.set(P.width*.5,0,0),ee.halfHeight.set(0,P.height*.5,0),s.rectArea[y]=ee,y++}else if(P.isPointLight){const ee=t.get(P);if(ee.color.copy(P.color).multiplyScalar(P.intensity*E),ee.distance=P.distance,ee.decay=P.decay,P.castShadow){const q=P.shadow,X=n.get(P);X.shadowBias=q.bias,X.shadowNormalBias=q.normalBias,X.shadowRadius=q.radius,X.shadowMapSize=q.mapSize,X.shadowCameraNear=q.camera.near,X.shadowCameraFar=q.camera.far,s.pointShadow[m]=X,s.pointShadowMap[m]=Z,s.pointShadowMatrix[m]=P.shadow.matrix,R++}s.point[m]=ee,m++}else if(P.isHemisphereLight){const ee=t.get(P);ee.skyColor.copy(P.color).multiplyScalar(k*E),ee.groundColor.copy(P.groundColor).multiplyScalar(k*E),s.hemi[v]=ee,v++}}y>0&&(e.isWebGL2?i.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=_e.LTC_FLOAT_1,s.rectAreaLTC2=_e.LTC_FLOAT_2):(s.rectAreaLTC1=_e.LTC_HALF_1,s.rectAreaLTC2=_e.LTC_HALF_2):i.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=_e.LTC_FLOAT_1,s.rectAreaLTC2=_e.LTC_FLOAT_2):i.has("OES_texture_half_float_linear")===!0?(s.rectAreaLTC1=_e.LTC_HALF_1,s.rectAreaLTC2=_e.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),s.ambient[0]=d,s.ambient[1]=p,s.ambient[2]=g;const N=s.hash;(N.directionalLength!==_||N.pointLength!==m||N.spotLength!==f||N.rectAreaLength!==y||N.hemiLength!==v||N.numDirectionalShadows!==S||N.numPointShadows!==R||N.numSpotShadows!==A||N.numSpotMaps!==w||N.numLightProbes!==M)&&(s.directional.length=_,s.spot.length=f,s.rectArea.length=y,s.point.length=m,s.hemi.length=v,s.directionalShadow.length=S,s.directionalShadowMap.length=S,s.pointShadow.length=R,s.pointShadowMap.length=R,s.spotShadow.length=A,s.spotShadowMap.length=A,s.directionalShadowMatrix.length=S,s.pointShadowMatrix.length=R,s.spotLightMatrix.length=A+w-O,s.spotLightMap.length=w,s.numSpotLightShadowsWithMaps=O,s.numLightProbes=M,N.directionalLength=_,N.pointLength=m,N.spotLength=f,N.rectAreaLength=y,N.hemiLength=v,N.numDirectionalShadows=S,N.numPointShadows=R,N.numSpotShadows=A,N.numSpotMaps=w,N.numLightProbes=M,s.version=o0++)}function c(u,h){let d=0,p=0,g=0,_=0,m=0;const f=h.matrixWorldInverse;for(let y=0,v=u.length;y<v;y++){const S=u[y];if(S.isDirectionalLight){const R=s.directional[d];R.direction.setFromMatrixPosition(S.matrixWorld),r.setFromMatrixPosition(S.target.matrixWorld),R.direction.sub(r),R.direction.transformDirection(f),d++}else if(S.isSpotLight){const R=s.spot[g];R.position.setFromMatrixPosition(S.matrixWorld),R.position.applyMatrix4(f),R.direction.setFromMatrixPosition(S.matrixWorld),r.setFromMatrixPosition(S.target.matrixWorld),R.direction.sub(r),R.direction.transformDirection(f),g++}else if(S.isRectAreaLight){const R=s.rectArea[_];R.position.setFromMatrixPosition(S.matrixWorld),R.position.applyMatrix4(f),o.identity(),a.copy(S.matrixWorld),a.premultiply(f),o.extractRotation(a),R.halfWidth.set(S.width*.5,0,0),R.halfHeight.set(0,S.height*.5,0),R.halfWidth.applyMatrix4(o),R.halfHeight.applyMatrix4(o),_++}else if(S.isPointLight){const R=s.point[p];R.position.setFromMatrixPosition(S.matrixWorld),R.position.applyMatrix4(f),p++}else if(S.isHemisphereLight){const R=s.hemi[m];R.direction.setFromMatrixPosition(S.matrixWorld),R.direction.transformDirection(f),m++}}}return{setup:l,setupView:c,state:s}}function Pl(i,e){const t=new c0(i,e),n=[],s=[];function r(){n.length=0,s.length=0}function a(h){n.push(h)}function o(h){s.push(h)}function l(h){t.setup(n,h)}function c(h){t.setupView(n,h)}return{init:r,state:{lightsArray:n,shadowsArray:s,lights:t},setupLights:l,setupLightsView:c,pushLight:a,pushShadow:o}}function u0(i,e){let t=new WeakMap;function n(r,a=0){const o=t.get(r);let l;return o===void 0?(l=new Pl(i,e),t.set(r,[l])):a>=o.length?(l=new Pl(i,e),o.push(l)):l=o[a],l}function s(){t=new WeakMap}return{get:n,dispose:s}}class h0 extends li{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=lh,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class d0 extends li{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const f0=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,p0=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function m0(i,e,t){let n=new $a;const s=new le,r=new le,a=new dt,o=new h0({depthPacking:ch}),l=new d0,c={},u=t.maxTextureSize,h={[Bn]:Dt,[Dt]:Bn,[St]:St},d=new It({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new le},radius:{value:4}},vertexShader:f0,fragmentShader:p0}),p=d.clone();p.defines.HORIZONTAL_PASS=1;const g=new it;g.setAttribute("position",new _t(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new $(g,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=dc;let f=this.type;this.render=function(A,w,O){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||A.length===0)return;const M=i.getRenderTarget(),E=i.getActiveCubeFace(),N=i.getActiveMipmapLevel(),H=i.state;H.setBlending(bn),H.buffers.color.setClear(1,1,1,1),H.buffers.depth.setTest(!0),H.setScissorTest(!1);const se=f!==Sn&&this.type===Sn,P=f===Sn&&this.type!==Sn;for(let G=0,k=A.length;G<k;G++){const j=A[G],Z=j.shadow;if(Z===void 0){console.warn("THREE.WebGLShadowMap:",j,"has no shadow.");continue}if(Z.autoUpdate===!1&&Z.needsUpdate===!1)continue;s.copy(Z.mapSize);const ee=Z.getFrameExtents();if(s.multiply(ee),r.copy(Z.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/ee.x),s.x=r.x*ee.x,Z.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/ee.y),s.y=r.y*ee.y,Z.mapSize.y=r.y)),Z.map===null||se===!0||P===!0){const X=this.type!==Sn?{minFilter:Ht,magFilter:Ht}:{};Z.map!==null&&Z.map.dispose(),Z.map=new cn(s.x,s.y,X),Z.map.texture.name=j.name+".shadowMap",Z.camera.updateProjectionMatrix()}i.setRenderTarget(Z.map),i.clear();const q=Z.getViewportCount();for(let X=0;X<q;X++){const re=Z.getViewport(X);a.set(r.x*re.x,r.y*re.y,r.x*re.z,r.y*re.w),H.viewport(a),Z.updateMatrices(j,X),n=Z.getFrustum(),S(w,O,Z.camera,j,this.type)}Z.isPointLightShadow!==!0&&this.type===Sn&&y(Z,O),Z.needsUpdate=!1}f=this.type,m.needsUpdate=!1,i.setRenderTarget(M,E,N)};function y(A,w){const O=e.update(_);d.defines.VSM_SAMPLES!==A.blurSamples&&(d.defines.VSM_SAMPLES=A.blurSamples,p.defines.VSM_SAMPLES=A.blurSamples,d.needsUpdate=!0,p.needsUpdate=!0),A.mapPass===null&&(A.mapPass=new cn(s.x,s.y)),d.uniforms.shadow_pass.value=A.map.texture,d.uniforms.resolution.value=A.mapSize,d.uniforms.radius.value=A.radius,i.setRenderTarget(A.mapPass),i.clear(),i.renderBufferDirect(w,null,O,d,_,null),p.uniforms.shadow_pass.value=A.mapPass.texture,p.uniforms.resolution.value=A.mapSize,p.uniforms.radius.value=A.radius,i.setRenderTarget(A.map),i.clear(),i.renderBufferDirect(w,null,O,p,_,null)}function v(A,w,O,M){let E=null;const N=O.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(N!==void 0)E=N;else if(E=O.isPointLight===!0?l:o,i.localClippingEnabled&&w.clipShadows===!0&&Array.isArray(w.clippingPlanes)&&w.clippingPlanes.length!==0||w.displacementMap&&w.displacementScale!==0||w.alphaMap&&w.alphaTest>0||w.map&&w.alphaTest>0){const H=E.uuid,se=w.uuid;let P=c[H];P===void 0&&(P={},c[H]=P);let G=P[se];G===void 0&&(G=E.clone(),P[se]=G,w.addEventListener("dispose",R)),E=G}if(E.visible=w.visible,E.wireframe=w.wireframe,M===Sn?E.side=w.shadowSide!==null?w.shadowSide:w.side:E.side=w.shadowSide!==null?w.shadowSide:h[w.side],E.alphaMap=w.alphaMap,E.alphaTest=w.alphaTest,E.map=w.map,E.clipShadows=w.clipShadows,E.clippingPlanes=w.clippingPlanes,E.clipIntersection=w.clipIntersection,E.displacementMap=w.displacementMap,E.displacementScale=w.displacementScale,E.displacementBias=w.displacementBias,E.wireframeLinewidth=w.wireframeLinewidth,E.linewidth=w.linewidth,O.isPointLight===!0&&E.isMeshDistanceMaterial===!0){const H=i.properties.get(E);H.light=O}return E}function S(A,w,O,M,E){if(A.visible===!1)return;if(A.layers.test(w.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&E===Sn)&&(!A.frustumCulled||n.intersectsObject(A))){A.modelViewMatrix.multiplyMatrices(O.matrixWorldInverse,A.matrixWorld);const se=e.update(A),P=A.material;if(Array.isArray(P)){const G=se.groups;for(let k=0,j=G.length;k<j;k++){const Z=G[k],ee=P[Z.materialIndex];if(ee&&ee.visible){const q=v(A,ee,M,E);A.onBeforeShadow(i,A,w,O,se,q,Z),i.renderBufferDirect(O,null,se,q,A,Z),A.onAfterShadow(i,A,w,O,se,q,Z)}}}else if(P.visible){const G=v(A,P,M,E);A.onBeforeShadow(i,A,w,O,se,G,null),i.renderBufferDirect(O,null,se,G,A,null),A.onAfterShadow(i,A,w,O,se,G,null)}}const H=A.children;for(let se=0,P=H.length;se<P;se++)S(H[se],w,O,M,E)}function R(A){A.target.removeEventListener("dispose",R);for(const O in c){const M=c[O],E=A.target.uuid;E in M&&(M[E].dispose(),delete M[E])}}}function g0(i,e,t){const n=t.isWebGL2;function s(){let I=!1;const ye=new dt;let xe=null;const Ue=new dt(0,0,0,0);return{setMask:function(Oe){xe!==Oe&&!I&&(i.colorMask(Oe,Oe,Oe,Oe),xe=Oe)},setLocked:function(Oe){I=Oe},setClear:function(Oe,st,rt,wt,Ft){Ft===!0&&(Oe*=wt,st*=wt,rt*=wt),ye.set(Oe,st,rt,wt),Ue.equals(ye)===!1&&(i.clearColor(Oe,st,rt,wt),Ue.copy(ye))},reset:function(){I=!1,xe=null,Ue.set(-1,0,0,0)}}}function r(){let I=!1,ye=null,xe=null,Ue=null;return{setTest:function(Oe){Oe?ve(i.DEPTH_TEST):he(i.DEPTH_TEST)},setMask:function(Oe){ye!==Oe&&!I&&(i.depthMask(Oe),ye=Oe)},setFunc:function(Oe){if(xe!==Oe){switch(Oe){case Bu:i.depthFunc(i.NEVER);break;case Hu:i.depthFunc(i.ALWAYS);break;case ku:i.depthFunc(i.LESS);break;case or:i.depthFunc(i.LEQUAL);break;case zu:i.depthFunc(i.EQUAL);break;case Vu:i.depthFunc(i.GEQUAL);break;case Wu:i.depthFunc(i.GREATER);break;case qu:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}xe=Oe}},setLocked:function(Oe){I=Oe},setClear:function(Oe){Ue!==Oe&&(i.clearDepth(Oe),Ue=Oe)},reset:function(){I=!1,ye=null,xe=null,Ue=null}}}function a(){let I=!1,ye=null,xe=null,Ue=null,Oe=null,st=null,rt=null,wt=null,Ft=null;return{setTest:function(at){I||(at?ve(i.STENCIL_TEST):he(i.STENCIL_TEST))},setMask:function(at){ye!==at&&!I&&(i.stencilMask(at),ye=at)},setFunc:function(at,Gt,un){(xe!==at||Ue!==Gt||Oe!==un)&&(i.stencilFunc(at,Gt,un),xe=at,Ue=Gt,Oe=un)},setOp:function(at,Gt,un){(st!==at||rt!==Gt||wt!==un)&&(i.stencilOp(at,Gt,un),st=at,rt=Gt,wt=un)},setLocked:function(at){I=at},setClear:function(at){Ft!==at&&(i.clearStencil(at),Ft=at)},reset:function(){I=!1,ye=null,xe=null,Ue=null,Oe=null,st=null,rt=null,wt=null,Ft=null}}}const o=new s,l=new r,c=new a,u=new WeakMap,h=new WeakMap;let d={},p={},g=new WeakMap,_=[],m=null,f=!1,y=null,v=null,S=null,R=null,A=null,w=null,O=null,M=new Pe(0,0,0),E=0,N=!1,H=null,se=null,P=null,G=null,k=null;const j=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let Z=!1,ee=0;const q=i.getParameter(i.VERSION);q.indexOf("WebGL")!==-1?(ee=parseFloat(/^WebGL (\d)/.exec(q)[1]),Z=ee>=1):q.indexOf("OpenGL ES")!==-1&&(ee=parseFloat(/^OpenGL ES (\d)/.exec(q)[1]),Z=ee>=2);let X=null,re={};const B=i.getParameter(i.SCISSOR_BOX),ie=i.getParameter(i.VIEWPORT),pe=new dt().fromArray(B),Se=new dt().fromArray(ie);function D(I,ye,xe,Ue){const Oe=new Uint8Array(4),st=i.createTexture();i.bindTexture(I,st),i.texParameteri(I,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(I,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let rt=0;rt<xe;rt++)n&&(I===i.TEXTURE_3D||I===i.TEXTURE_2D_ARRAY)?i.texImage3D(ye,0,i.RGBA,1,1,Ue,0,i.RGBA,i.UNSIGNED_BYTE,Oe):i.texImage2D(ye+rt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Oe);return st}const me={};me[i.TEXTURE_2D]=D(i.TEXTURE_2D,i.TEXTURE_2D,1),me[i.TEXTURE_CUBE_MAP]=D(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),n&&(me[i.TEXTURE_2D_ARRAY]=D(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),me[i.TEXTURE_3D]=D(i.TEXTURE_3D,i.TEXTURE_3D,1,1)),o.setClear(0,0,0,1),l.setClear(1),c.setClear(0),ve(i.DEPTH_TEST),l.setFunc(or),ue(!1),b(fo),ve(i.CULL_FACE),Y(bn);function ve(I){d[I]!==!0&&(i.enable(I),d[I]=!0)}function he(I){d[I]!==!1&&(i.disable(I),d[I]=!1)}function Ee(I,ye){return p[I]!==ye?(i.bindFramebuffer(I,ye),p[I]=ye,n&&(I===i.DRAW_FRAMEBUFFER&&(p[i.FRAMEBUFFER]=ye),I===i.FRAMEBUFFER&&(p[i.DRAW_FRAMEBUFFER]=ye)),!0):!1}function L(I,ye){let xe=_,Ue=!1;if(I)if(xe=g.get(ye),xe===void 0&&(xe=[],g.set(ye,xe)),I.isWebGLMultipleRenderTargets){const Oe=I.texture;if(xe.length!==Oe.length||xe[0]!==i.COLOR_ATTACHMENT0){for(let st=0,rt=Oe.length;st<rt;st++)xe[st]=i.COLOR_ATTACHMENT0+st;xe.length=Oe.length,Ue=!0}}else xe[0]!==i.COLOR_ATTACHMENT0&&(xe[0]=i.COLOR_ATTACHMENT0,Ue=!0);else xe[0]!==i.BACK&&(xe[0]=i.BACK,Ue=!0);Ue&&(t.isWebGL2?i.drawBuffers(xe):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(xe))}function ce(I){return m!==I?(i.useProgram(I),m=I,!0):!1}const K={[Zn]:i.FUNC_ADD,[Eu]:i.FUNC_SUBTRACT,[Tu]:i.FUNC_REVERSE_SUBTRACT};if(n)K[go]=i.MIN,K[_o]=i.MAX;else{const I=e.get("EXT_blend_minmax");I!==null&&(K[go]=I.MIN_EXT,K[_o]=I.MAX_EXT)}const ae={[Au]:i.ZERO,[wu]:i.ONE,[Cu]:i.SRC_COLOR,[xa]:i.SRC_ALPHA,[Ou]:i.SRC_ALPHA_SATURATE,[Iu]:i.DST_COLOR,[Lu]:i.DST_ALPHA,[Ru]:i.ONE_MINUS_SRC_COLOR,[Sa]:i.ONE_MINUS_SRC_ALPHA,[Du]:i.ONE_MINUS_DST_COLOR,[Pu]:i.ONE_MINUS_DST_ALPHA,[Nu]:i.CONSTANT_COLOR,[Uu]:i.ONE_MINUS_CONSTANT_COLOR,[Fu]:i.CONSTANT_ALPHA,[Gu]:i.ONE_MINUS_CONSTANT_ALPHA};function Y(I,ye,xe,Ue,Oe,st,rt,wt,Ft,at){if(I===bn){f===!0&&(he(i.BLEND),f=!1);return}if(f===!1&&(ve(i.BLEND),f=!0),I!==bu){if(I!==y||at!==N){if((v!==Zn||A!==Zn)&&(i.blendEquation(i.FUNC_ADD),v=Zn,A=Zn),at)switch(I){case Oi:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case ot:i.blendFunc(i.ONE,i.ONE);break;case po:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case mo:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}else switch(I){case Oi:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case ot:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case po:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case mo:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}S=null,R=null,w=null,O=null,M.set(0,0,0),E=0,y=I,N=at}return}Oe=Oe||ye,st=st||xe,rt=rt||Ue,(ye!==v||Oe!==A)&&(i.blendEquationSeparate(K[ye],K[Oe]),v=ye,A=Oe),(xe!==S||Ue!==R||st!==w||rt!==O)&&(i.blendFuncSeparate(ae[xe],ae[Ue],ae[st],ae[rt]),S=xe,R=Ue,w=st,O=rt),(wt.equals(M)===!1||Ft!==E)&&(i.blendColor(wt.r,wt.g,wt.b,Ft),M.copy(wt),E=Ft),y=I,N=!1}function we(I,ye){I.side===St?he(i.CULL_FACE):ve(i.CULL_FACE);let xe=I.side===Dt;ye&&(xe=!xe),ue(xe),I.blending===Oi&&I.transparent===!1?Y(bn):Y(I.blending,I.blendEquation,I.blendSrc,I.blendDst,I.blendEquationAlpha,I.blendSrcAlpha,I.blendDstAlpha,I.blendColor,I.blendAlpha,I.premultipliedAlpha),l.setFunc(I.depthFunc),l.setTest(I.depthTest),l.setMask(I.depthWrite),o.setMask(I.colorWrite);const Ue=I.stencilWrite;c.setTest(Ue),Ue&&(c.setMask(I.stencilWriteMask),c.setFunc(I.stencilFunc,I.stencilRef,I.stencilFuncMask),c.setOp(I.stencilFail,I.stencilZFail,I.stencilZPass)),U(I.polygonOffset,I.polygonOffsetFactor,I.polygonOffsetUnits),I.alphaToCoverage===!0?ve(i.SAMPLE_ALPHA_TO_COVERAGE):he(i.SAMPLE_ALPHA_TO_COVERAGE)}function ue(I){H!==I&&(I?i.frontFace(i.CW):i.frontFace(i.CCW),H=I)}function b(I){I!==xu?(ve(i.CULL_FACE),I!==se&&(I===fo?i.cullFace(i.BACK):I===Su?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):he(i.CULL_FACE),se=I}function x(I){I!==P&&(Z&&i.lineWidth(I),P=I)}function U(I,ye,xe){I?(ve(i.POLYGON_OFFSET_FILL),(G!==ye||k!==xe)&&(i.polygonOffset(ye,xe),G=ye,k=xe)):he(i.POLYGON_OFFSET_FILL)}function Q(I){I?ve(i.SCISSOR_TEST):he(i.SCISSOR_TEST)}function J(I){I===void 0&&(I=i.TEXTURE0+j-1),X!==I&&(i.activeTexture(I),X=I)}function ne(I,ye,xe){xe===void 0&&(X===null?xe=i.TEXTURE0+j-1:xe=X);let Ue=re[xe];Ue===void 0&&(Ue={type:void 0,texture:void 0},re[xe]=Ue),(Ue.type!==I||Ue.texture!==ye)&&(X!==xe&&(i.activeTexture(xe),X=xe),i.bindTexture(I,ye||me[I]),Ue.type=I,Ue.texture=ye)}function Me(){const I=re[X];I!==void 0&&I.type!==void 0&&(i.bindTexture(I.type,null),I.type=void 0,I.texture=void 0)}function de(){try{i.compressedTexImage2D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function fe(){try{i.compressedTexImage3D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Te(){try{i.texSubImage2D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Ie(){try{i.texSubImage3D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function oe(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function $e(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Ve(){try{i.texStorage2D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function De(){try{i.texStorage3D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Re(){try{i.texImage2D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Ae(){try{i.texImage3D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Ge(I){pe.equals(I)===!1&&(i.scissor(I.x,I.y,I.z,I.w),pe.copy(I))}function Qe(I){Se.equals(I)===!1&&(i.viewport(I.x,I.y,I.z,I.w),Se.copy(I))}function ut(I,ye){let xe=h.get(ye);xe===void 0&&(xe=new WeakMap,h.set(ye,xe));let Ue=xe.get(I);Ue===void 0&&(Ue=i.getUniformBlockIndex(ye,I.name),xe.set(I,Ue))}function qe(I,ye){const Ue=h.get(ye).get(I);u.get(ye)!==Ue&&(i.uniformBlockBinding(ye,Ue,I.__bindingPointIndex),u.set(ye,Ue))}function ge(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),n===!0&&(i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null)),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),d={},X=null,re={},p={},g=new WeakMap,_=[],m=null,f=!1,y=null,v=null,S=null,R=null,A=null,w=null,O=null,M=new Pe(0,0,0),E=0,N=!1,H=null,se=null,P=null,G=null,k=null,pe.set(0,0,i.canvas.width,i.canvas.height),Se.set(0,0,i.canvas.width,i.canvas.height),o.reset(),l.reset(),c.reset()}return{buffers:{color:o,depth:l,stencil:c},enable:ve,disable:he,bindFramebuffer:Ee,drawBuffers:L,useProgram:ce,setBlending:Y,setMaterial:we,setFlipSided:ue,setCullFace:b,setLineWidth:x,setPolygonOffset:U,setScissorTest:Q,activeTexture:J,bindTexture:ne,unbindTexture:Me,compressedTexImage2D:de,compressedTexImage3D:fe,texImage2D:Re,texImage3D:Ae,updateUBOMapping:ut,uniformBlockBinding:qe,texStorage2D:Ve,texStorage3D:De,texSubImage2D:Te,texSubImage3D:Ie,compressedTexSubImage2D:oe,compressedTexSubImage3D:$e,scissor:Ge,viewport:Qe,reset:ge}}function _0(i,e,t,n,s,r,a){const o=s.isWebGL2,l=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),u=new WeakMap;let h;const d=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(b,x){return p?new OffscreenCanvas(b,x):dr("canvas")}function _(b,x,U,Q){let J=1;if((b.width>Q||b.height>Q)&&(J=Q/Math.max(b.width,b.height)),J<1||x===!0)if(typeof HTMLImageElement<"u"&&b instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&b instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&b instanceof ImageBitmap){const ne=x?Ca:Math.floor,Me=ne(J*b.width),de=ne(J*b.height);h===void 0&&(h=g(Me,de));const fe=U?g(Me,de):h;return fe.width=Me,fe.height=de,fe.getContext("2d").drawImage(b,0,0,Me,de),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+b.width+"x"+b.height+") to ("+Me+"x"+de+")."),fe}else return"data"in b&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+b.width+"x"+b.height+")."),b;return b}function m(b){return Ko(b.width)&&Ko(b.height)}function f(b){return o?!1:b.wrapS!==an||b.wrapT!==an||b.minFilter!==Ht&&b.minFilter!==Jt}function y(b,x){return b.generateMipmaps&&x&&b.minFilter!==Ht&&b.minFilter!==Jt}function v(b){i.generateMipmap(b)}function S(b,x,U,Q,J=!1){if(o===!1)return x;if(b!==null){if(i[b]!==void 0)return i[b];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+b+"'")}let ne=x;if(x===i.RED&&(U===i.FLOAT&&(ne=i.R32F),U===i.HALF_FLOAT&&(ne=i.R16F),U===i.UNSIGNED_BYTE&&(ne=i.R8)),x===i.RED_INTEGER&&(U===i.UNSIGNED_BYTE&&(ne=i.R8UI),U===i.UNSIGNED_SHORT&&(ne=i.R16UI),U===i.UNSIGNED_INT&&(ne=i.R32UI),U===i.BYTE&&(ne=i.R8I),U===i.SHORT&&(ne=i.R16I),U===i.INT&&(ne=i.R32I)),x===i.RG&&(U===i.FLOAT&&(ne=i.RG32F),U===i.HALF_FLOAT&&(ne=i.RG16F),U===i.UNSIGNED_BYTE&&(ne=i.RG8)),x===i.RGBA){const Me=J?lr:nt.getTransfer(Q);U===i.FLOAT&&(ne=i.RGBA32F),U===i.HALF_FLOAT&&(ne=i.RGBA16F),U===i.UNSIGNED_BYTE&&(ne=Me===ht?i.SRGB8_ALPHA8:i.RGBA8),U===i.UNSIGNED_SHORT_4_4_4_4&&(ne=i.RGBA4),U===i.UNSIGNED_SHORT_5_5_5_1&&(ne=i.RGB5_A1)}return(ne===i.R16F||ne===i.R32F||ne===i.RG16F||ne===i.RG32F||ne===i.RGBA16F||ne===i.RGBA32F)&&e.get("EXT_color_buffer_float"),ne}function R(b,x,U){return y(b,U)===!0||b.isFramebufferTexture&&b.minFilter!==Ht&&b.minFilter!==Jt?Math.log2(Math.max(x.width,x.height))+1:b.mipmaps!==void 0&&b.mipmaps.length>0?b.mipmaps.length:b.isCompressedTexture&&Array.isArray(b.image)?x.mipmaps.length:1}function A(b){return b===Ht||b===vo||b===Cr?i.NEAREST:i.LINEAR}function w(b){const x=b.target;x.removeEventListener("dispose",w),M(x),x.isVideoTexture&&u.delete(x)}function O(b){const x=b.target;x.removeEventListener("dispose",O),N(x)}function M(b){const x=n.get(b);if(x.__webglInit===void 0)return;const U=b.source,Q=d.get(U);if(Q){const J=Q[x.__cacheKey];J.usedTimes--,J.usedTimes===0&&E(b),Object.keys(Q).length===0&&d.delete(U)}n.remove(b)}function E(b){const x=n.get(b);i.deleteTexture(x.__webglTexture);const U=b.source,Q=d.get(U);delete Q[x.__cacheKey],a.memory.textures--}function N(b){const x=b.texture,U=n.get(b),Q=n.get(x);if(Q.__webglTexture!==void 0&&(i.deleteTexture(Q.__webglTexture),a.memory.textures--),b.depthTexture&&b.depthTexture.dispose(),b.isWebGLCubeRenderTarget)for(let J=0;J<6;J++){if(Array.isArray(U.__webglFramebuffer[J]))for(let ne=0;ne<U.__webglFramebuffer[J].length;ne++)i.deleteFramebuffer(U.__webglFramebuffer[J][ne]);else i.deleteFramebuffer(U.__webglFramebuffer[J]);U.__webglDepthbuffer&&i.deleteRenderbuffer(U.__webglDepthbuffer[J])}else{if(Array.isArray(U.__webglFramebuffer))for(let J=0;J<U.__webglFramebuffer.length;J++)i.deleteFramebuffer(U.__webglFramebuffer[J]);else i.deleteFramebuffer(U.__webglFramebuffer);if(U.__webglDepthbuffer&&i.deleteRenderbuffer(U.__webglDepthbuffer),U.__webglMultisampledFramebuffer&&i.deleteFramebuffer(U.__webglMultisampledFramebuffer),U.__webglColorRenderbuffer)for(let J=0;J<U.__webglColorRenderbuffer.length;J++)U.__webglColorRenderbuffer[J]&&i.deleteRenderbuffer(U.__webglColorRenderbuffer[J]);U.__webglDepthRenderbuffer&&i.deleteRenderbuffer(U.__webglDepthRenderbuffer)}if(b.isWebGLMultipleRenderTargets)for(let J=0,ne=x.length;J<ne;J++){const Me=n.get(x[J]);Me.__webglTexture&&(i.deleteTexture(Me.__webglTexture),a.memory.textures--),n.remove(x[J])}n.remove(x),n.remove(b)}let H=0;function se(){H=0}function P(){const b=H;return b>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+b+" texture units while this GPU supports only "+s.maxTextures),H+=1,b}function G(b){const x=[];return x.push(b.wrapS),x.push(b.wrapT),x.push(b.wrapR||0),x.push(b.magFilter),x.push(b.minFilter),x.push(b.anisotropy),x.push(b.internalFormat),x.push(b.format),x.push(b.type),x.push(b.generateMipmaps),x.push(b.premultiplyAlpha),x.push(b.flipY),x.push(b.unpackAlignment),x.push(b.colorSpace),x.join()}function k(b,x){const U=n.get(b);if(b.isVideoTexture&&we(b),b.isRenderTargetTexture===!1&&b.version>0&&U.__version!==b.version){const Q=b.image;if(Q===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Q.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{pe(U,b,x);return}}t.bindTexture(i.TEXTURE_2D,U.__webglTexture,i.TEXTURE0+x)}function j(b,x){const U=n.get(b);if(b.version>0&&U.__version!==b.version){pe(U,b,x);return}t.bindTexture(i.TEXTURE_2D_ARRAY,U.__webglTexture,i.TEXTURE0+x)}function Z(b,x){const U=n.get(b);if(b.version>0&&U.__version!==b.version){pe(U,b,x);return}t.bindTexture(i.TEXTURE_3D,U.__webglTexture,i.TEXTURE0+x)}function ee(b,x){const U=n.get(b);if(b.version>0&&U.__version!==b.version){Se(U,b,x);return}t.bindTexture(i.TEXTURE_CUBE_MAP,U.__webglTexture,i.TEXTURE0+x)}const q={[Ea]:i.REPEAT,[an]:i.CLAMP_TO_EDGE,[Ta]:i.MIRRORED_REPEAT},X={[Ht]:i.NEAREST,[vo]:i.NEAREST_MIPMAP_NEAREST,[Cr]:i.NEAREST_MIPMAP_LINEAR,[Jt]:i.LINEAR,[Qu]:i.LINEAR_MIPMAP_NEAREST,[fs]:i.LINEAR_MIPMAP_LINEAR},re={[hh]:i.NEVER,[_h]:i.ALWAYS,[dh]:i.LESS,[Tc]:i.LEQUAL,[fh]:i.EQUAL,[gh]:i.GEQUAL,[ph]:i.GREATER,[mh]:i.NOTEQUAL};function B(b,x,U){if(U?(i.texParameteri(b,i.TEXTURE_WRAP_S,q[x.wrapS]),i.texParameteri(b,i.TEXTURE_WRAP_T,q[x.wrapT]),(b===i.TEXTURE_3D||b===i.TEXTURE_2D_ARRAY)&&i.texParameteri(b,i.TEXTURE_WRAP_R,q[x.wrapR]),i.texParameteri(b,i.TEXTURE_MAG_FILTER,X[x.magFilter]),i.texParameteri(b,i.TEXTURE_MIN_FILTER,X[x.minFilter])):(i.texParameteri(b,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(b,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE),(b===i.TEXTURE_3D||b===i.TEXTURE_2D_ARRAY)&&i.texParameteri(b,i.TEXTURE_WRAP_R,i.CLAMP_TO_EDGE),(x.wrapS!==an||x.wrapT!==an)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),i.texParameteri(b,i.TEXTURE_MAG_FILTER,A(x.magFilter)),i.texParameteri(b,i.TEXTURE_MIN_FILTER,A(x.minFilter)),x.minFilter!==Ht&&x.minFilter!==Jt&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),x.compareFunction&&(i.texParameteri(b,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(b,i.TEXTURE_COMPARE_FUNC,re[x.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){const Q=e.get("EXT_texture_filter_anisotropic");if(x.magFilter===Ht||x.minFilter!==Cr&&x.minFilter!==fs||x.type===Un&&e.has("OES_texture_float_linear")===!1||o===!1&&x.type===En&&e.has("OES_texture_half_float_linear")===!1)return;(x.anisotropy>1||n.get(x).__currentAnisotropy)&&(i.texParameterf(b,Q.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(x.anisotropy,s.getMaxAnisotropy())),n.get(x).__currentAnisotropy=x.anisotropy)}}function ie(b,x){let U=!1;b.__webglInit===void 0&&(b.__webglInit=!0,x.addEventListener("dispose",w));const Q=x.source;let J=d.get(Q);J===void 0&&(J={},d.set(Q,J));const ne=G(x);if(ne!==b.__cacheKey){J[ne]===void 0&&(J[ne]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,U=!0),J[ne].usedTimes++;const Me=J[b.__cacheKey];Me!==void 0&&(J[b.__cacheKey].usedTimes--,Me.usedTimes===0&&E(x)),b.__cacheKey=ne,b.__webglTexture=J[ne].texture}return U}function pe(b,x,U){let Q=i.TEXTURE_2D;(x.isDataArrayTexture||x.isCompressedArrayTexture)&&(Q=i.TEXTURE_2D_ARRAY),x.isData3DTexture&&(Q=i.TEXTURE_3D);const J=ie(b,x),ne=x.source;t.bindTexture(Q,b.__webglTexture,i.TEXTURE0+U);const Me=n.get(ne);if(ne.version!==Me.__version||J===!0){t.activeTexture(i.TEXTURE0+U);const de=nt.getPrimaries(nt.workingColorSpace),fe=x.colorSpace===Qt?null:nt.getPrimaries(x.colorSpace),Te=x.colorSpace===Qt||de===fe?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,x.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,x.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Te);const Ie=f(x)&&m(x.image)===!1;let oe=_(x.image,Ie,!1,s.maxTextureSize);oe=ue(x,oe);const $e=m(oe)||o,Ve=r.convert(x.format,x.colorSpace);let De=r.convert(x.type),Re=S(x.internalFormat,Ve,De,x.colorSpace,x.isVideoTexture);B(Q,x,$e);let Ae;const Ge=x.mipmaps,Qe=o&&x.isVideoTexture!==!0&&Re!==Mc,ut=Me.__version===void 0||J===!0,qe=R(x,oe,$e);if(x.isDepthTexture)Re=i.DEPTH_COMPONENT,o?x.type===Un?Re=i.DEPTH_COMPONENT32F:x.type===Nn?Re=i.DEPTH_COMPONENT24:x.type===ti?Re=i.DEPTH24_STENCIL8:Re=i.DEPTH_COMPONENT16:x.type===Un&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),x.format===ni&&Re===i.DEPTH_COMPONENT&&x.type!==Xa&&x.type!==Nn&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),x.type=Nn,De=r.convert(x.type)),x.format===Bi&&Re===i.DEPTH_COMPONENT&&(Re=i.DEPTH_STENCIL,x.type!==ti&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),x.type=ti,De=r.convert(x.type))),ut&&(Qe?t.texStorage2D(i.TEXTURE_2D,1,Re,oe.width,oe.height):t.texImage2D(i.TEXTURE_2D,0,Re,oe.width,oe.height,0,Ve,De,null));else if(x.isDataTexture)if(Ge.length>0&&$e){Qe&&ut&&t.texStorage2D(i.TEXTURE_2D,qe,Re,Ge[0].width,Ge[0].height);for(let ge=0,I=Ge.length;ge<I;ge++)Ae=Ge[ge],Qe?t.texSubImage2D(i.TEXTURE_2D,ge,0,0,Ae.width,Ae.height,Ve,De,Ae.data):t.texImage2D(i.TEXTURE_2D,ge,Re,Ae.width,Ae.height,0,Ve,De,Ae.data);x.generateMipmaps=!1}else Qe?(ut&&t.texStorage2D(i.TEXTURE_2D,qe,Re,oe.width,oe.height),t.texSubImage2D(i.TEXTURE_2D,0,0,0,oe.width,oe.height,Ve,De,oe.data)):t.texImage2D(i.TEXTURE_2D,0,Re,oe.width,oe.height,0,Ve,De,oe.data);else if(x.isCompressedTexture)if(x.isCompressedArrayTexture){Qe&&ut&&t.texStorage3D(i.TEXTURE_2D_ARRAY,qe,Re,Ge[0].width,Ge[0].height,oe.depth);for(let ge=0,I=Ge.length;ge<I;ge++)Ae=Ge[ge],x.format!==on?Ve!==null?Qe?t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ge,0,0,0,Ae.width,Ae.height,oe.depth,Ve,Ae.data,0,0):t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,ge,Re,Ae.width,Ae.height,oe.depth,0,Ae.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Qe?t.texSubImage3D(i.TEXTURE_2D_ARRAY,ge,0,0,0,Ae.width,Ae.height,oe.depth,Ve,De,Ae.data):t.texImage3D(i.TEXTURE_2D_ARRAY,ge,Re,Ae.width,Ae.height,oe.depth,0,Ve,De,Ae.data)}else{Qe&&ut&&t.texStorage2D(i.TEXTURE_2D,qe,Re,Ge[0].width,Ge[0].height);for(let ge=0,I=Ge.length;ge<I;ge++)Ae=Ge[ge],x.format!==on?Ve!==null?Qe?t.compressedTexSubImage2D(i.TEXTURE_2D,ge,0,0,Ae.width,Ae.height,Ve,Ae.data):t.compressedTexImage2D(i.TEXTURE_2D,ge,Re,Ae.width,Ae.height,0,Ae.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Qe?t.texSubImage2D(i.TEXTURE_2D,ge,0,0,Ae.width,Ae.height,Ve,De,Ae.data):t.texImage2D(i.TEXTURE_2D,ge,Re,Ae.width,Ae.height,0,Ve,De,Ae.data)}else if(x.isDataArrayTexture)Qe?(ut&&t.texStorage3D(i.TEXTURE_2D_ARRAY,qe,Re,oe.width,oe.height,oe.depth),t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,oe.width,oe.height,oe.depth,Ve,De,oe.data)):t.texImage3D(i.TEXTURE_2D_ARRAY,0,Re,oe.width,oe.height,oe.depth,0,Ve,De,oe.data);else if(x.isData3DTexture)Qe?(ut&&t.texStorage3D(i.TEXTURE_3D,qe,Re,oe.width,oe.height,oe.depth),t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,oe.width,oe.height,oe.depth,Ve,De,oe.data)):t.texImage3D(i.TEXTURE_3D,0,Re,oe.width,oe.height,oe.depth,0,Ve,De,oe.data);else if(x.isFramebufferTexture){if(ut)if(Qe)t.texStorage2D(i.TEXTURE_2D,qe,Re,oe.width,oe.height);else{let ge=oe.width,I=oe.height;for(let ye=0;ye<qe;ye++)t.texImage2D(i.TEXTURE_2D,ye,Re,ge,I,0,Ve,De,null),ge>>=1,I>>=1}}else if(Ge.length>0&&$e){Qe&&ut&&t.texStorage2D(i.TEXTURE_2D,qe,Re,Ge[0].width,Ge[0].height);for(let ge=0,I=Ge.length;ge<I;ge++)Ae=Ge[ge],Qe?t.texSubImage2D(i.TEXTURE_2D,ge,0,0,Ve,De,Ae):t.texImage2D(i.TEXTURE_2D,ge,Re,Ve,De,Ae);x.generateMipmaps=!1}else Qe?(ut&&t.texStorage2D(i.TEXTURE_2D,qe,Re,oe.width,oe.height),t.texSubImage2D(i.TEXTURE_2D,0,0,0,Ve,De,oe)):t.texImage2D(i.TEXTURE_2D,0,Re,Ve,De,oe);y(x,$e)&&v(Q),Me.__version=ne.version,x.onUpdate&&x.onUpdate(x)}b.__version=x.version}function Se(b,x,U){if(x.image.length!==6)return;const Q=ie(b,x),J=x.source;t.bindTexture(i.TEXTURE_CUBE_MAP,b.__webglTexture,i.TEXTURE0+U);const ne=n.get(J);if(J.version!==ne.__version||Q===!0){t.activeTexture(i.TEXTURE0+U);const Me=nt.getPrimaries(nt.workingColorSpace),de=x.colorSpace===Qt?null:nt.getPrimaries(x.colorSpace),fe=x.colorSpace===Qt||Me===de?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,x.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,x.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,fe);const Te=x.isCompressedTexture||x.image[0].isCompressedTexture,Ie=x.image[0]&&x.image[0].isDataTexture,oe=[];for(let ge=0;ge<6;ge++)!Te&&!Ie?oe[ge]=_(x.image[ge],!1,!0,s.maxCubemapSize):oe[ge]=Ie?x.image[ge].image:x.image[ge],oe[ge]=ue(x,oe[ge]);const $e=oe[0],Ve=m($e)||o,De=r.convert(x.format,x.colorSpace),Re=r.convert(x.type),Ae=S(x.internalFormat,De,Re,x.colorSpace),Ge=o&&x.isVideoTexture!==!0,Qe=ne.__version===void 0||Q===!0;let ut=R(x,$e,Ve);B(i.TEXTURE_CUBE_MAP,x,Ve);let qe;if(Te){Ge&&Qe&&t.texStorage2D(i.TEXTURE_CUBE_MAP,ut,Ae,$e.width,$e.height);for(let ge=0;ge<6;ge++){qe=oe[ge].mipmaps;for(let I=0;I<qe.length;I++){const ye=qe[I];x.format!==on?De!==null?Ge?t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ge,I,0,0,ye.width,ye.height,De,ye.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ge,I,Ae,ye.width,ye.height,0,ye.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ge?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ge,I,0,0,ye.width,ye.height,De,Re,ye.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ge,I,Ae,ye.width,ye.height,0,De,Re,ye.data)}}}else{qe=x.mipmaps,Ge&&Qe&&(qe.length>0&&ut++,t.texStorage2D(i.TEXTURE_CUBE_MAP,ut,Ae,oe[0].width,oe[0].height));for(let ge=0;ge<6;ge++)if(Ie){Ge?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ge,0,0,0,oe[ge].width,oe[ge].height,De,Re,oe[ge].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ge,0,Ae,oe[ge].width,oe[ge].height,0,De,Re,oe[ge].data);for(let I=0;I<qe.length;I++){const xe=qe[I].image[ge].image;Ge?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ge,I+1,0,0,xe.width,xe.height,De,Re,xe.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ge,I+1,Ae,xe.width,xe.height,0,De,Re,xe.data)}}else{Ge?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ge,0,0,0,De,Re,oe[ge]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ge,0,Ae,De,Re,oe[ge]);for(let I=0;I<qe.length;I++){const ye=qe[I];Ge?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ge,I+1,0,0,De,Re,ye.image[ge]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ge,I+1,Ae,De,Re,ye.image[ge])}}}y(x,Ve)&&v(i.TEXTURE_CUBE_MAP),ne.__version=J.version,x.onUpdate&&x.onUpdate(x)}b.__version=x.version}function D(b,x,U,Q,J,ne){const Me=r.convert(U.format,U.colorSpace),de=r.convert(U.type),fe=S(U.internalFormat,Me,de,U.colorSpace);if(!n.get(x).__hasExternalTextures){const Ie=Math.max(1,x.width>>ne),oe=Math.max(1,x.height>>ne);J===i.TEXTURE_3D||J===i.TEXTURE_2D_ARRAY?t.texImage3D(J,ne,fe,Ie,oe,x.depth,0,Me,de,null):t.texImage2D(J,ne,fe,Ie,oe,0,Me,de,null)}t.bindFramebuffer(i.FRAMEBUFFER,b),Y(x)?l.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Q,J,n.get(U).__webglTexture,0,ae(x)):(J===i.TEXTURE_2D||J>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&J<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,Q,J,n.get(U).__webglTexture,ne),t.bindFramebuffer(i.FRAMEBUFFER,null)}function me(b,x,U){if(i.bindRenderbuffer(i.RENDERBUFFER,b),x.depthBuffer&&!x.stencilBuffer){let Q=o===!0?i.DEPTH_COMPONENT24:i.DEPTH_COMPONENT16;if(U||Y(x)){const J=x.depthTexture;J&&J.isDepthTexture&&(J.type===Un?Q=i.DEPTH_COMPONENT32F:J.type===Nn&&(Q=i.DEPTH_COMPONENT24));const ne=ae(x);Y(x)?l.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ne,Q,x.width,x.height):i.renderbufferStorageMultisample(i.RENDERBUFFER,ne,Q,x.width,x.height)}else i.renderbufferStorage(i.RENDERBUFFER,Q,x.width,x.height);i.framebufferRenderbuffer(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.RENDERBUFFER,b)}else if(x.depthBuffer&&x.stencilBuffer){const Q=ae(x);U&&Y(x)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Q,i.DEPTH24_STENCIL8,x.width,x.height):Y(x)?l.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Q,i.DEPTH24_STENCIL8,x.width,x.height):i.renderbufferStorage(i.RENDERBUFFER,i.DEPTH_STENCIL,x.width,x.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.RENDERBUFFER,b)}else{const Q=x.isWebGLMultipleRenderTargets===!0?x.texture:[x.texture];for(let J=0;J<Q.length;J++){const ne=Q[J],Me=r.convert(ne.format,ne.colorSpace),de=r.convert(ne.type),fe=S(ne.internalFormat,Me,de,ne.colorSpace),Te=ae(x);U&&Y(x)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Te,fe,x.width,x.height):Y(x)?l.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Te,fe,x.width,x.height):i.renderbufferStorage(i.RENDERBUFFER,fe,x.width,x.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function ve(b,x){if(x&&x.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,b),!(x.depthTexture&&x.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(x.depthTexture).__webglTexture||x.depthTexture.image.width!==x.width||x.depthTexture.image.height!==x.height)&&(x.depthTexture.image.width=x.width,x.depthTexture.image.height=x.height,x.depthTexture.needsUpdate=!0),k(x.depthTexture,0);const Q=n.get(x.depthTexture).__webglTexture,J=ae(x);if(x.depthTexture.format===ni)Y(x)?l.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,Q,0,J):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,Q,0);else if(x.depthTexture.format===Bi)Y(x)?l.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,Q,0,J):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,Q,0);else throw new Error("Unknown depthTexture format")}function he(b){const x=n.get(b),U=b.isWebGLCubeRenderTarget===!0;if(b.depthTexture&&!x.__autoAllocateDepthBuffer){if(U)throw new Error("target.depthTexture not supported in Cube render targets");ve(x.__webglFramebuffer,b)}else if(U){x.__webglDepthbuffer=[];for(let Q=0;Q<6;Q++)t.bindFramebuffer(i.FRAMEBUFFER,x.__webglFramebuffer[Q]),x.__webglDepthbuffer[Q]=i.createRenderbuffer(),me(x.__webglDepthbuffer[Q],b,!1)}else t.bindFramebuffer(i.FRAMEBUFFER,x.__webglFramebuffer),x.__webglDepthbuffer=i.createRenderbuffer(),me(x.__webglDepthbuffer,b,!1);t.bindFramebuffer(i.FRAMEBUFFER,null)}function Ee(b,x,U){const Q=n.get(b);x!==void 0&&D(Q.__webglFramebuffer,b,b.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),U!==void 0&&he(b)}function L(b){const x=b.texture,U=n.get(b),Q=n.get(x);b.addEventListener("dispose",O),b.isWebGLMultipleRenderTargets!==!0&&(Q.__webglTexture===void 0&&(Q.__webglTexture=i.createTexture()),Q.__version=x.version,a.memory.textures++);const J=b.isWebGLCubeRenderTarget===!0,ne=b.isWebGLMultipleRenderTargets===!0,Me=m(b)||o;if(J){U.__webglFramebuffer=[];for(let de=0;de<6;de++)if(o&&x.mipmaps&&x.mipmaps.length>0){U.__webglFramebuffer[de]=[];for(let fe=0;fe<x.mipmaps.length;fe++)U.__webglFramebuffer[de][fe]=i.createFramebuffer()}else U.__webglFramebuffer[de]=i.createFramebuffer()}else{if(o&&x.mipmaps&&x.mipmaps.length>0){U.__webglFramebuffer=[];for(let de=0;de<x.mipmaps.length;de++)U.__webglFramebuffer[de]=i.createFramebuffer()}else U.__webglFramebuffer=i.createFramebuffer();if(ne)if(s.drawBuffers){const de=b.texture;for(let fe=0,Te=de.length;fe<Te;fe++){const Ie=n.get(de[fe]);Ie.__webglTexture===void 0&&(Ie.__webglTexture=i.createTexture(),a.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(o&&b.samples>0&&Y(b)===!1){const de=ne?x:[x];U.__webglMultisampledFramebuffer=i.createFramebuffer(),U.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,U.__webglMultisampledFramebuffer);for(let fe=0;fe<de.length;fe++){const Te=de[fe];U.__webglColorRenderbuffer[fe]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,U.__webglColorRenderbuffer[fe]);const Ie=r.convert(Te.format,Te.colorSpace),oe=r.convert(Te.type),$e=S(Te.internalFormat,Ie,oe,Te.colorSpace,b.isXRRenderTarget===!0),Ve=ae(b);i.renderbufferStorageMultisample(i.RENDERBUFFER,Ve,$e,b.width,b.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+fe,i.RENDERBUFFER,U.__webglColorRenderbuffer[fe])}i.bindRenderbuffer(i.RENDERBUFFER,null),b.depthBuffer&&(U.__webglDepthRenderbuffer=i.createRenderbuffer(),me(U.__webglDepthRenderbuffer,b,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(J){t.bindTexture(i.TEXTURE_CUBE_MAP,Q.__webglTexture),B(i.TEXTURE_CUBE_MAP,x,Me);for(let de=0;de<6;de++)if(o&&x.mipmaps&&x.mipmaps.length>0)for(let fe=0;fe<x.mipmaps.length;fe++)D(U.__webglFramebuffer[de][fe],b,x,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+de,fe);else D(U.__webglFramebuffer[de],b,x,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+de,0);y(x,Me)&&v(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(ne){const de=b.texture;for(let fe=0,Te=de.length;fe<Te;fe++){const Ie=de[fe],oe=n.get(Ie);t.bindTexture(i.TEXTURE_2D,oe.__webglTexture),B(i.TEXTURE_2D,Ie,Me),D(U.__webglFramebuffer,b,Ie,i.COLOR_ATTACHMENT0+fe,i.TEXTURE_2D,0),y(Ie,Me)&&v(i.TEXTURE_2D)}t.unbindTexture()}else{let de=i.TEXTURE_2D;if((b.isWebGL3DRenderTarget||b.isWebGLArrayRenderTarget)&&(o?de=b.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(de,Q.__webglTexture),B(de,x,Me),o&&x.mipmaps&&x.mipmaps.length>0)for(let fe=0;fe<x.mipmaps.length;fe++)D(U.__webglFramebuffer[fe],b,x,i.COLOR_ATTACHMENT0,de,fe);else D(U.__webglFramebuffer,b,x,i.COLOR_ATTACHMENT0,de,0);y(x,Me)&&v(de),t.unbindTexture()}b.depthBuffer&&he(b)}function ce(b){const x=m(b)||o,U=b.isWebGLMultipleRenderTargets===!0?b.texture:[b.texture];for(let Q=0,J=U.length;Q<J;Q++){const ne=U[Q];if(y(ne,x)){const Me=b.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:i.TEXTURE_2D,de=n.get(ne).__webglTexture;t.bindTexture(Me,de),v(Me),t.unbindTexture()}}}function K(b){if(o&&b.samples>0&&Y(b)===!1){const x=b.isWebGLMultipleRenderTargets?b.texture:[b.texture],U=b.width,Q=b.height;let J=i.COLOR_BUFFER_BIT;const ne=[],Me=b.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,de=n.get(b),fe=b.isWebGLMultipleRenderTargets===!0;if(fe)for(let Te=0;Te<x.length;Te++)t.bindFramebuffer(i.FRAMEBUFFER,de.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Te,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,de.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Te,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,de.__webglMultisampledFramebuffer),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,de.__webglFramebuffer);for(let Te=0;Te<x.length;Te++){ne.push(i.COLOR_ATTACHMENT0+Te),b.depthBuffer&&ne.push(Me);const Ie=de.__ignoreDepthValues!==void 0?de.__ignoreDepthValues:!1;if(Ie===!1&&(b.depthBuffer&&(J|=i.DEPTH_BUFFER_BIT),b.stencilBuffer&&(J|=i.STENCIL_BUFFER_BIT)),fe&&i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,de.__webglColorRenderbuffer[Te]),Ie===!0&&(i.invalidateFramebuffer(i.READ_FRAMEBUFFER,[Me]),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[Me])),fe){const oe=n.get(x[Te]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,oe,0)}i.blitFramebuffer(0,0,U,Q,0,0,U,Q,J,i.NEAREST),c&&i.invalidateFramebuffer(i.READ_FRAMEBUFFER,ne)}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),fe)for(let Te=0;Te<x.length;Te++){t.bindFramebuffer(i.FRAMEBUFFER,de.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Te,i.RENDERBUFFER,de.__webglColorRenderbuffer[Te]);const Ie=n.get(x[Te]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,de.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Te,i.TEXTURE_2D,Ie,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,de.__webglMultisampledFramebuffer)}}function ae(b){return Math.min(s.maxSamples,b.samples)}function Y(b){const x=n.get(b);return o&&b.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&x.__useRenderToTexture!==!1}function we(b){const x=a.render.frame;u.get(b)!==x&&(u.set(b,x),b.update())}function ue(b,x){const U=b.colorSpace,Q=b.format,J=b.type;return b.isCompressedTexture===!0||b.isVideoTexture===!0||b.format===Aa||U!==Tn&&U!==Qt&&(nt.getTransfer(U)===ht?o===!1?e.has("EXT_sRGB")===!0&&Q===on?(b.format=Aa,b.minFilter=Jt,b.generateMipmaps=!1):x=wc.sRGBToLinear(x):(Q!==on||J!==Gn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",U)),x}this.allocateTextureUnit=P,this.resetTextureUnits=se,this.setTexture2D=k,this.setTexture2DArray=j,this.setTexture3D=Z,this.setTextureCube=ee,this.rebindTextures=Ee,this.setupRenderTarget=L,this.updateRenderTargetMipmap=ce,this.updateMultisampleRenderTarget=K,this.setupDepthRenderbuffer=he,this.setupFrameBufferTexture=D,this.useMultisampledRTT=Y}function v0(i,e,t){const n=t.isWebGL2;function s(r,a=Qt){let o;const l=nt.getTransfer(a);if(r===Gn)return i.UNSIGNED_BYTE;if(r===_c)return i.UNSIGNED_SHORT_4_4_4_4;if(r===vc)return i.UNSIGNED_SHORT_5_5_5_1;if(r===eh)return i.BYTE;if(r===th)return i.SHORT;if(r===Xa)return i.UNSIGNED_SHORT;if(r===gc)return i.INT;if(r===Nn)return i.UNSIGNED_INT;if(r===Un)return i.FLOAT;if(r===En)return n?i.HALF_FLOAT:(o=e.get("OES_texture_half_float"),o!==null?o.HALF_FLOAT_OES:null);if(r===nh)return i.ALPHA;if(r===on)return i.RGBA;if(r===ih)return i.LUMINANCE;if(r===sh)return i.LUMINANCE_ALPHA;if(r===ni)return i.DEPTH_COMPONENT;if(r===Bi)return i.DEPTH_STENCIL;if(r===Aa)return o=e.get("EXT_sRGB"),o!==null?o.SRGB_ALPHA_EXT:null;if(r===rh)return i.RED;if(r===yc)return i.RED_INTEGER;if(r===ah)return i.RG;if(r===xc)return i.RG_INTEGER;if(r===Sc)return i.RGBA_INTEGER;if(r===Rr||r===Lr||r===Pr||r===Ir)if(l===ht)if(o=e.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(r===Rr)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===Lr)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===Pr)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===Ir)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=e.get("WEBGL_compressed_texture_s3tc"),o!==null){if(r===Rr)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===Lr)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===Pr)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===Ir)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===yo||r===xo||r===So||r===Mo)if(o=e.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(r===yo)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===xo)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===So)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===Mo)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===Mc)return o=e.get("WEBGL_compressed_texture_etc1"),o!==null?o.COMPRESSED_RGB_ETC1_WEBGL:null;if(r===bo||r===Eo)if(o=e.get("WEBGL_compressed_texture_etc"),o!==null){if(r===bo)return l===ht?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(r===Eo)return l===ht?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===To||r===Ao||r===wo||r===Co||r===Ro||r===Lo||r===Po||r===Io||r===Do||r===Oo||r===No||r===Uo||r===Fo||r===Go)if(o=e.get("WEBGL_compressed_texture_astc"),o!==null){if(r===To)return l===ht?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===Ao)return l===ht?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===wo)return l===ht?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===Co)return l===ht?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===Ro)return l===ht?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===Lo)return l===ht?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===Po)return l===ht?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===Io)return l===ht?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===Do)return l===ht?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===Oo)return l===ht?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===No)return l===ht?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===Uo)return l===ht?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===Fo)return l===ht?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===Go)return l===ht?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===Dr||r===Bo||r===Ho)if(o=e.get("EXT_texture_compression_bptc"),o!==null){if(r===Dr)return l===ht?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===Bo)return o.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===Ho)return o.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===oh||r===ko||r===zo||r===Vo)if(o=e.get("EXT_texture_compression_rgtc"),o!==null){if(r===Dr)return o.COMPRESSED_RED_RGTC1_EXT;if(r===ko)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===zo)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===Vo)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===ti?n?i.UNSIGNED_INT_24_8:(o=e.get("WEBGL_depth_texture"),o!==null?o.UNSIGNED_INT_24_8_WEBGL:null):i[r]!==void 0?i[r]:null}return{convert:s}}class y0 extends Wt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class je extends Et{constructor(){super(),this.isGroup=!0,this.type="Group"}}const x0={type:"move"};class sa{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new je,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new je,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new C,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new C),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new je,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new C,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new C),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(const _ of e.hand.values()){const m=t.getJointPose(_,n),f=this._getHandJoint(c,_);m!==null&&(f.matrix.fromArray(m.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=m.radius),f.visible=m!==null}const u=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],d=u.position.distanceTo(h.position),p=.02,g=.005;c.inputState.pinching&&d>p+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=p-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(x0)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new je;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}class S0 extends Vi{constructor(e,t){super();const n=this;let s=null,r=1,a=null,o="local-floor",l=1,c=null,u=null,h=null,d=null,p=null,g=null;const _=t.getContextAttributes();let m=null,f=null;const y=[],v=[],S=new le;let R=null;const A=new Wt;A.layers.enable(1),A.viewport=new dt;const w=new Wt;w.layers.enable(2),w.viewport=new dt;const O=[A,w],M=new y0;M.layers.enable(1),M.layers.enable(2);let E=null,N=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(B){let ie=y[B];return ie===void 0&&(ie=new sa,y[B]=ie),ie.getTargetRaySpace()},this.getControllerGrip=function(B){let ie=y[B];return ie===void 0&&(ie=new sa,y[B]=ie),ie.getGripSpace()},this.getHand=function(B){let ie=y[B];return ie===void 0&&(ie=new sa,y[B]=ie),ie.getHandSpace()};function H(B){const ie=v.indexOf(B.inputSource);if(ie===-1)return;const pe=y[ie];pe!==void 0&&(pe.update(B.inputSource,B.frame,c||a),pe.dispatchEvent({type:B.type,data:B.inputSource}))}function se(){s.removeEventListener("select",H),s.removeEventListener("selectstart",H),s.removeEventListener("selectend",H),s.removeEventListener("squeeze",H),s.removeEventListener("squeezestart",H),s.removeEventListener("squeezeend",H),s.removeEventListener("end",se),s.removeEventListener("inputsourceschange",P);for(let B=0;B<y.length;B++){const ie=v[B];ie!==null&&(v[B]=null,y[B].disconnect(ie))}E=null,N=null,e.setRenderTarget(m),p=null,d=null,h=null,s=null,f=null,re.stop(),n.isPresenting=!1,e.setPixelRatio(R),e.setSize(S.width,S.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(B){r=B,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(B){o=B,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(B){c=B},this.getBaseLayer=function(){return d!==null?d:p},this.getBinding=function(){return h},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(B){if(s=B,s!==null){if(m=e.getRenderTarget(),s.addEventListener("select",H),s.addEventListener("selectstart",H),s.addEventListener("selectend",H),s.addEventListener("squeeze",H),s.addEventListener("squeezestart",H),s.addEventListener("squeezeend",H),s.addEventListener("end",se),s.addEventListener("inputsourceschange",P),_.xrCompatible!==!0&&await t.makeXRCompatible(),R=e.getPixelRatio(),e.getSize(S),s.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const ie={antialias:s.renderState.layers===void 0?_.antialias:!0,alpha:!0,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(s,t,ie),s.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),f=new cn(p.framebufferWidth,p.framebufferHeight,{format:on,type:Gn,colorSpace:e.outputColorSpace,stencilBuffer:_.stencil})}else{let ie=null,pe=null,Se=null;_.depth&&(Se=_.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ie=_.stencil?Bi:ni,pe=_.stencil?ti:Nn);const D={colorFormat:t.RGBA8,depthFormat:Se,scaleFactor:r};h=new XRWebGLBinding(s,t),d=h.createProjectionLayer(D),s.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),f=new cn(d.textureWidth,d.textureHeight,{format:on,type:Gn,depthTexture:new Fc(d.textureWidth,d.textureHeight,pe,void 0,void 0,void 0,void 0,void 0,void 0,ie),stencilBuffer:_.stencil,colorSpace:e.outputColorSpace,samples:_.antialias?4:0});const me=e.properties.get(f);me.__ignoreDepthValues=d.ignoreDepthValues}f.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await s.requestReferenceSpace(o),re.setContext(s),re.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode};function P(B){for(let ie=0;ie<B.removed.length;ie++){const pe=B.removed[ie],Se=v.indexOf(pe);Se>=0&&(v[Se]=null,y[Se].disconnect(pe))}for(let ie=0;ie<B.added.length;ie++){const pe=B.added[ie];let Se=v.indexOf(pe);if(Se===-1){for(let me=0;me<y.length;me++)if(me>=v.length){v.push(pe),Se=me;break}else if(v[me]===null){v[me]=pe,Se=me;break}if(Se===-1)break}const D=y[Se];D&&D.connect(pe)}}const G=new C,k=new C;function j(B,ie,pe){G.setFromMatrixPosition(ie.matrixWorld),k.setFromMatrixPosition(pe.matrixWorld);const Se=G.distanceTo(k),D=ie.projectionMatrix.elements,me=pe.projectionMatrix.elements,ve=D[14]/(D[10]-1),he=D[14]/(D[10]+1),Ee=(D[9]+1)/D[5],L=(D[9]-1)/D[5],ce=(D[8]-1)/D[0],K=(me[8]+1)/me[0],ae=ve*ce,Y=ve*K,we=Se/(-ce+K),ue=we*-ce;ie.matrixWorld.decompose(B.position,B.quaternion,B.scale),B.translateX(ue),B.translateZ(we),B.matrixWorld.compose(B.position,B.quaternion,B.scale),B.matrixWorldInverse.copy(B.matrixWorld).invert();const b=ve+we,x=he+we,U=ae-ue,Q=Y+(Se-ue),J=Ee*he/x*b,ne=L*he/x*b;B.projectionMatrix.makePerspective(U,Q,J,ne,b,x),B.projectionMatrixInverse.copy(B.projectionMatrix).invert()}function Z(B,ie){ie===null?B.matrixWorld.copy(B.matrix):B.matrixWorld.multiplyMatrices(ie.matrixWorld,B.matrix),B.matrixWorldInverse.copy(B.matrixWorld).invert()}this.updateCamera=function(B){if(s===null)return;M.near=w.near=A.near=B.near,M.far=w.far=A.far=B.far,(E!==M.near||N!==M.far)&&(s.updateRenderState({depthNear:M.near,depthFar:M.far}),E=M.near,N=M.far);const ie=B.parent,pe=M.cameras;Z(M,ie);for(let Se=0;Se<pe.length;Se++)Z(pe[Se],ie);pe.length===2?j(M,A,w):M.projectionMatrix.copy(A.projectionMatrix),ee(B,M,ie)};function ee(B,ie,pe){pe===null?B.matrix.copy(ie.matrixWorld):(B.matrix.copy(pe.matrixWorld),B.matrix.invert(),B.matrix.multiply(ie.matrixWorld)),B.matrix.decompose(B.position,B.quaternion,B.scale),B.updateMatrixWorld(!0),B.projectionMatrix.copy(ie.projectionMatrix),B.projectionMatrixInverse.copy(ie.projectionMatrixInverse),B.isPerspectiveCamera&&(B.fov=wa*2*Math.atan(1/B.projectionMatrix.elements[5]),B.zoom=1)}this.getCamera=function(){return M},this.getFoveation=function(){if(!(d===null&&p===null))return l},this.setFoveation=function(B){l=B,d!==null&&(d.fixedFoveation=B),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=B)};let q=null;function X(B,ie){if(u=ie.getViewerPose(c||a),g=ie,u!==null){const pe=u.views;p!==null&&(e.setRenderTargetFramebuffer(f,p.framebuffer),e.setRenderTarget(f));let Se=!1;pe.length!==M.cameras.length&&(M.cameras.length=0,Se=!0);for(let D=0;D<pe.length;D++){const me=pe[D];let ve=null;if(p!==null)ve=p.getViewport(me);else{const Ee=h.getViewSubImage(d,me);ve=Ee.viewport,D===0&&(e.setRenderTargetTextures(f,Ee.colorTexture,d.ignoreDepthValues?void 0:Ee.depthStencilTexture),e.setRenderTarget(f))}let he=O[D];he===void 0&&(he=new Wt,he.layers.enable(D),he.viewport=new dt,O[D]=he),he.matrix.fromArray(me.transform.matrix),he.matrix.decompose(he.position,he.quaternion,he.scale),he.projectionMatrix.fromArray(me.projectionMatrix),he.projectionMatrixInverse.copy(he.projectionMatrix).invert(),he.viewport.set(ve.x,ve.y,ve.width,ve.height),D===0&&(M.matrix.copy(he.matrix),M.matrix.decompose(M.position,M.quaternion,M.scale)),Se===!0&&M.cameras.push(he)}}for(let pe=0;pe<y.length;pe++){const Se=v[pe],D=y[pe];Se!==null&&D!==void 0&&D.update(Se,ie,c||a)}q&&q(B,ie),ie.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:ie}),g=null}const re=new Uc;re.setAnimationLoop(X),this.setAnimationLoop=function(B){q=B},this.dispose=function(){}}}function M0(i,e){function t(m,f){m.matrixAutoUpdate===!0&&m.updateMatrix(),f.value.copy(m.matrix)}function n(m,f){f.color.getRGB(m.fogColor.value,Dc(i)),f.isFog?(m.fogNear.value=f.near,m.fogFar.value=f.far):f.isFogExp2&&(m.fogDensity.value=f.density)}function s(m,f,y,v,S){f.isMeshBasicMaterial||f.isMeshLambertMaterial?r(m,f):f.isMeshToonMaterial?(r(m,f),h(m,f)):f.isMeshPhongMaterial?(r(m,f),u(m,f)):f.isMeshStandardMaterial?(r(m,f),d(m,f),f.isMeshPhysicalMaterial&&p(m,f,S)):f.isMeshMatcapMaterial?(r(m,f),g(m,f)):f.isMeshDepthMaterial?r(m,f):f.isMeshDistanceMaterial?(r(m,f),_(m,f)):f.isMeshNormalMaterial?r(m,f):f.isLineBasicMaterial?(a(m,f),f.isLineDashedMaterial&&o(m,f)):f.isPointsMaterial?l(m,f,y,v):f.isSpriteMaterial?c(m,f):f.isShadowMaterial?(m.color.value.copy(f.color),m.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function r(m,f){m.opacity.value=f.opacity,f.color&&m.diffuse.value.copy(f.color),f.emissive&&m.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(m.map.value=f.map,t(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.bumpMap&&(m.bumpMap.value=f.bumpMap,t(f.bumpMap,m.bumpMapTransform),m.bumpScale.value=f.bumpScale,f.side===Dt&&(m.bumpScale.value*=-1)),f.normalMap&&(m.normalMap.value=f.normalMap,t(f.normalMap,m.normalMapTransform),m.normalScale.value.copy(f.normalScale),f.side===Dt&&m.normalScale.value.negate()),f.displacementMap&&(m.displacementMap.value=f.displacementMap,t(f.displacementMap,m.displacementMapTransform),m.displacementScale.value=f.displacementScale,m.displacementBias.value=f.displacementBias),f.emissiveMap&&(m.emissiveMap.value=f.emissiveMap,t(f.emissiveMap,m.emissiveMapTransform)),f.specularMap&&(m.specularMap.value=f.specularMap,t(f.specularMap,m.specularMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest);const y=e.get(f).envMap;if(y&&(m.envMap.value=y,m.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=f.reflectivity,m.ior.value=f.ior,m.refractionRatio.value=f.refractionRatio),f.lightMap){m.lightMap.value=f.lightMap;const v=i._useLegacyLights===!0?Math.PI:1;m.lightMapIntensity.value=f.lightMapIntensity*v,t(f.lightMap,m.lightMapTransform)}f.aoMap&&(m.aoMap.value=f.aoMap,m.aoMapIntensity.value=f.aoMapIntensity,t(f.aoMap,m.aoMapTransform))}function a(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,f.map&&(m.map.value=f.map,t(f.map,m.mapTransform))}function o(m,f){m.dashSize.value=f.dashSize,m.totalSize.value=f.dashSize+f.gapSize,m.scale.value=f.scale}function l(m,f,y,v){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.size.value=f.size*y,m.scale.value=v*.5,f.map&&(m.map.value=f.map,t(f.map,m.uvTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function c(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.rotation.value=f.rotation,f.map&&(m.map.value=f.map,t(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function u(m,f){m.specular.value.copy(f.specular),m.shininess.value=Math.max(f.shininess,1e-4)}function h(m,f){f.gradientMap&&(m.gradientMap.value=f.gradientMap)}function d(m,f){m.metalness.value=f.metalness,f.metalnessMap&&(m.metalnessMap.value=f.metalnessMap,t(f.metalnessMap,m.metalnessMapTransform)),m.roughness.value=f.roughness,f.roughnessMap&&(m.roughnessMap.value=f.roughnessMap,t(f.roughnessMap,m.roughnessMapTransform)),e.get(f).envMap&&(m.envMapIntensity.value=f.envMapIntensity)}function p(m,f,y){m.ior.value=f.ior,f.sheen>0&&(m.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),m.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(m.sheenColorMap.value=f.sheenColorMap,t(f.sheenColorMap,m.sheenColorMapTransform)),f.sheenRoughnessMap&&(m.sheenRoughnessMap.value=f.sheenRoughnessMap,t(f.sheenRoughnessMap,m.sheenRoughnessMapTransform))),f.clearcoat>0&&(m.clearcoat.value=f.clearcoat,m.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(m.clearcoatMap.value=f.clearcoatMap,t(f.clearcoatMap,m.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,t(f.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(m.clearcoatNormalMap.value=f.clearcoatNormalMap,t(f.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===Dt&&m.clearcoatNormalScale.value.negate())),f.iridescence>0&&(m.iridescence.value=f.iridescence,m.iridescenceIOR.value=f.iridescenceIOR,m.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(m.iridescenceMap.value=f.iridescenceMap,t(f.iridescenceMap,m.iridescenceMapTransform)),f.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=f.iridescenceThicknessMap,t(f.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),f.transmission>0&&(m.transmission.value=f.transmission,m.transmissionSamplerMap.value=y.texture,m.transmissionSamplerSize.value.set(y.width,y.height),f.transmissionMap&&(m.transmissionMap.value=f.transmissionMap,t(f.transmissionMap,m.transmissionMapTransform)),m.thickness.value=f.thickness,f.thicknessMap&&(m.thicknessMap.value=f.thicknessMap,t(f.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=f.attenuationDistance,m.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(m.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(m.anisotropyMap.value=f.anisotropyMap,t(f.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=f.specularIntensity,m.specularColor.value.copy(f.specularColor),f.specularColorMap&&(m.specularColorMap.value=f.specularColorMap,t(f.specularColorMap,m.specularColorMapTransform)),f.specularIntensityMap&&(m.specularIntensityMap.value=f.specularIntensityMap,t(f.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,f){f.matcap&&(m.matcap.value=f.matcap)}function _(m,f){const y=e.get(f).light;m.referencePosition.value.setFromMatrixPosition(y.matrixWorld),m.nearDistance.value=y.shadow.camera.near,m.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function b0(i,e,t,n){let s={},r={},a=[];const o=t.isWebGL2?i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(y,v){const S=v.program;n.uniformBlockBinding(y,S)}function c(y,v){let S=s[y.id];S===void 0&&(g(y),S=u(y),s[y.id]=S,y.addEventListener("dispose",m));const R=v.program;n.updateUBOMapping(y,R);const A=e.render.frame;r[y.id]!==A&&(d(y),r[y.id]=A)}function u(y){const v=h();y.__bindingPointIndex=v;const S=i.createBuffer(),R=y.__size,A=y.usage;return i.bindBuffer(i.UNIFORM_BUFFER,S),i.bufferData(i.UNIFORM_BUFFER,R,A),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,v,S),S}function h(){for(let y=0;y<o;y++)if(a.indexOf(y)===-1)return a.push(y),y;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(y){const v=s[y.id],S=y.uniforms,R=y.__cache;i.bindBuffer(i.UNIFORM_BUFFER,v);for(let A=0,w=S.length;A<w;A++){const O=Array.isArray(S[A])?S[A]:[S[A]];for(let M=0,E=O.length;M<E;M++){const N=O[M];if(p(N,A,M,R)===!0){const H=N.__offset,se=Array.isArray(N.value)?N.value:[N.value];let P=0;for(let G=0;G<se.length;G++){const k=se[G],j=_(k);typeof k=="number"||typeof k=="boolean"?(N.__data[0]=k,i.bufferSubData(i.UNIFORM_BUFFER,H+P,N.__data)):k.isMatrix3?(N.__data[0]=k.elements[0],N.__data[1]=k.elements[1],N.__data[2]=k.elements[2],N.__data[3]=0,N.__data[4]=k.elements[3],N.__data[5]=k.elements[4],N.__data[6]=k.elements[5],N.__data[7]=0,N.__data[8]=k.elements[6],N.__data[9]=k.elements[7],N.__data[10]=k.elements[8],N.__data[11]=0):(k.toArray(N.__data,P),P+=j.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,H,N.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function p(y,v,S,R){const A=y.value,w=v+"_"+S;if(R[w]===void 0)return typeof A=="number"||typeof A=="boolean"?R[w]=A:R[w]=A.clone(),!0;{const O=R[w];if(typeof A=="number"||typeof A=="boolean"){if(O!==A)return R[w]=A,!0}else if(O.equals(A)===!1)return O.copy(A),!0}return!1}function g(y){const v=y.uniforms;let S=0;const R=16;for(let w=0,O=v.length;w<O;w++){const M=Array.isArray(v[w])?v[w]:[v[w]];for(let E=0,N=M.length;E<N;E++){const H=M[E],se=Array.isArray(H.value)?H.value:[H.value];for(let P=0,G=se.length;P<G;P++){const k=se[P],j=_(k),Z=S%R;Z!==0&&R-Z<j.boundary&&(S+=R-Z),H.__data=new Float32Array(j.storage/Float32Array.BYTES_PER_ELEMENT),H.__offset=S,S+=j.storage}}}const A=S%R;return A>0&&(S+=R-A),y.__size=S,y.__cache={},this}function _(y){const v={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(v.boundary=4,v.storage=4):y.isVector2?(v.boundary=8,v.storage=8):y.isVector3||y.isColor?(v.boundary=16,v.storage=12):y.isVector4?(v.boundary=16,v.storage=16):y.isMatrix3?(v.boundary=48,v.storage=48):y.isMatrix4?(v.boundary=64,v.storage=64):y.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",y),v}function m(y){const v=y.target;v.removeEventListener("dispose",m);const S=a.indexOf(v.__bindingPointIndex);a.splice(S,1),i.deleteBuffer(s[v.id]),delete s[v.id],delete r[v.id]}function f(){for(const y in s)i.deleteBuffer(s[y]);a=[],s={},r={}}return{bind:l,update:c,dispose:f}}class Vc{constructor(e={}){const{canvas:t=yh(),context:n=null,depth:s=!0,stencil:r=!0,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1}=e;this.isWebGLRenderer=!0;let d;n!==null?d=n.getContextAttributes().alpha:d=a;const p=new Uint32Array(4),g=new Int32Array(4);let _=null,m=null;const f=[],y=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=xt,this._useLegacyLights=!1,this.toneMapping=Fn,this.toneMappingExposure=1;const v=this;let S=!1,R=0,A=0,w=null,O=-1,M=null;const E=new dt,N=new dt;let H=null;const se=new Pe(0);let P=0,G=t.width,k=t.height,j=1,Z=null,ee=null;const q=new dt(0,0,G,k),X=new dt(0,0,G,k);let re=!1;const B=new $a;let ie=!1,pe=!1,Se=null;const D=new lt,me=new le,ve=new C,he={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function Ee(){return w===null?j:1}let L=n;function ce(T,F){for(let V=0;V<T.length;V++){const W=T[V],z=t.getContext(W,F);if(z!==null)return z}return null}try{const T={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${qa}`),t.addEventListener("webglcontextlost",ge,!1),t.addEventListener("webglcontextrestored",I,!1),t.addEventListener("webglcontextcreationerror",ye,!1),L===null){const F=["webgl2","webgl","experimental-webgl"];if(v.isWebGL1Renderer===!0&&F.shift(),L=ce(F,T),L===null)throw ce(F)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&L instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),L.getShaderPrecisionFormat===void 0&&(L.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(T){throw console.error("THREE.WebGLRenderer: "+T.message),T}let K,ae,Y,we,ue,b,x,U,Q,J,ne,Me,de,fe,Te,Ie,oe,$e,Ve,De,Re,Ae,Ge,Qe;function ut(){K=new Dp(L),ae=new wp(L,K,e),K.init(ae),Ae=new v0(L,K,ae),Y=new g0(L,K,ae),we=new Up(L),ue=new n0,b=new _0(L,K,Y,ue,ae,Ae,we),x=new Rp(v),U=new Ip(v),Q=new Vh(L,ae),Ge=new Tp(L,K,Q,ae),J=new Op(L,Q,we,Ge),ne=new Hp(L,J,Q,we),Ve=new Bp(L,ae,b),Ie=new Cp(ue),Me=new t0(v,x,U,K,ae,Ge,Ie),de=new M0(v,ue),fe=new s0,Te=new u0(K,ae),$e=new Ep(v,x,U,Y,ne,d,l),oe=new m0(v,ne,ae),Qe=new b0(L,we,ae,Y),De=new Ap(L,K,we,ae),Re=new Np(L,K,we,ae),we.programs=Me.programs,v.capabilities=ae,v.extensions=K,v.properties=ue,v.renderLists=fe,v.shadowMap=oe,v.state=Y,v.info=we}ut();const qe=new S0(v,L);this.xr=qe,this.getContext=function(){return L},this.getContextAttributes=function(){return L.getContextAttributes()},this.forceContextLoss=function(){const T=K.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){const T=K.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return j},this.setPixelRatio=function(T){T!==void 0&&(j=T,this.setSize(G,k,!1))},this.getSize=function(T){return T.set(G,k)},this.setSize=function(T,F,V=!0){if(qe.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}G=T,k=F,t.width=Math.floor(T*j),t.height=Math.floor(F*j),V===!0&&(t.style.width=T+"px",t.style.height=F+"px"),this.setViewport(0,0,T,F)},this.getDrawingBufferSize=function(T){return T.set(G*j,k*j).floor()},this.setDrawingBufferSize=function(T,F,V){G=T,k=F,j=V,t.width=Math.floor(T*V),t.height=Math.floor(F*V),this.setViewport(0,0,T,F)},this.getCurrentViewport=function(T){return T.copy(E)},this.getViewport=function(T){return T.copy(q)},this.setViewport=function(T,F,V,W){T.isVector4?q.set(T.x,T.y,T.z,T.w):q.set(T,F,V,W),Y.viewport(E.copy(q).multiplyScalar(j).floor())},this.getScissor=function(T){return T.copy(X)},this.setScissor=function(T,F,V,W){T.isVector4?X.set(T.x,T.y,T.z,T.w):X.set(T,F,V,W),Y.scissor(N.copy(X).multiplyScalar(j).floor())},this.getScissorTest=function(){return re},this.setScissorTest=function(T){Y.setScissorTest(re=T)},this.setOpaqueSort=function(T){Z=T},this.setTransparentSort=function(T){ee=T},this.getClearColor=function(T){return T.copy($e.getClearColor())},this.setClearColor=function(){$e.setClearColor.apply($e,arguments)},this.getClearAlpha=function(){return $e.getClearAlpha()},this.setClearAlpha=function(){$e.setClearAlpha.apply($e,arguments)},this.clear=function(T=!0,F=!0,V=!0){let W=0;if(T){let z=!1;if(w!==null){const be=w.texture.format;z=be===Sc||be===xc||be===yc}if(z){const be=w.texture.type,Le=be===Gn||be===Nn||be===Xa||be===ti||be===_c||be===vc,Ne=$e.getClearColor(),Fe=$e.getClearAlpha(),We=Ne.r,He=Ne.g,ke=Ne.b;Le?(p[0]=We,p[1]=He,p[2]=ke,p[3]=Fe,L.clearBufferuiv(L.COLOR,0,p)):(g[0]=We,g[1]=He,g[2]=ke,g[3]=Fe,L.clearBufferiv(L.COLOR,0,g))}else W|=L.COLOR_BUFFER_BIT}F&&(W|=L.DEPTH_BUFFER_BIT),V&&(W|=L.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),L.clear(W)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",ge,!1),t.removeEventListener("webglcontextrestored",I,!1),t.removeEventListener("webglcontextcreationerror",ye,!1),fe.dispose(),Te.dispose(),ue.dispose(),x.dispose(),U.dispose(),ne.dispose(),Ge.dispose(),Qe.dispose(),Me.dispose(),qe.dispose(),qe.removeEventListener("sessionstart",Ft),qe.removeEventListener("sessionend",at),Se&&(Se.dispose(),Se=null),Gt.stop()};function ge(T){T.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),S=!0}function I(){console.log("THREE.WebGLRenderer: Context Restored."),S=!1;const T=we.autoReset,F=oe.enabled,V=oe.autoUpdate,W=oe.needsUpdate,z=oe.type;ut(),we.autoReset=T,oe.enabled=F,oe.autoUpdate=V,oe.needsUpdate=W,oe.type=z}function ye(T){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function xe(T){const F=T.target;F.removeEventListener("dispose",xe),Ue(F)}function Ue(T){Oe(T),ue.remove(T)}function Oe(T){const F=ue.get(T).programs;F!==void 0&&(F.forEach(function(V){Me.releaseProgram(V)}),T.isShaderMaterial&&Me.releaseShaderCache(T))}this.renderBufferDirect=function(T,F,V,W,z,be){F===null&&(F=he);const Le=z.isMesh&&z.matrixWorld.determinant()<0,Ne=gu(T,F,V,W,z);Y.setMaterial(W,Le);let Fe=V.index,We=1;if(W.wireframe===!0){if(Fe=J.getWireframeAttribute(V),Fe===void 0)return;We=2}const He=V.drawRange,ke=V.attributes.position;let vt=He.start*We,Xt=(He.start+He.count)*We;be!==null&&(vt=Math.max(vt,be.start*We),Xt=Math.min(Xt,(be.start+be.count)*We)),Fe!==null?(vt=Math.max(vt,0),Xt=Math.min(Xt,Fe.count)):ke!=null&&(vt=Math.max(vt,0),Xt=Math.min(Xt,ke.count));const Ct=Xt-vt;if(Ct<0||Ct===1/0)return;Ge.setup(z,W,Ne,V,Fe);let mn,ft=De;if(Fe!==null&&(mn=Q.get(Fe),ft=Re,ft.setIndex(mn)),z.isMesh)W.wireframe===!0?(Y.setLineWidth(W.wireframeLinewidth*Ee()),ft.setMode(L.LINES)):ft.setMode(L.TRIANGLES);else if(z.isLine){let Xe=W.linewidth;Xe===void 0&&(Xe=1),Y.setLineWidth(Xe*Ee()),z.isLineSegments?ft.setMode(L.LINES):z.isLineLoop?ft.setMode(L.LINE_LOOP):ft.setMode(L.LINE_STRIP)}else z.isPoints?ft.setMode(L.POINTS):z.isSprite&&ft.setMode(L.TRIANGLES);if(z.isBatchedMesh)ft.renderMultiDraw(z._multiDrawStarts,z._multiDrawCounts,z._multiDrawCount);else if(z.isInstancedMesh)ft.renderInstances(vt,Ct,z.count);else if(V.isInstancedBufferGeometry){const Xe=V._maxInstanceCount!==void 0?V._maxInstanceCount:1/0,Er=Math.min(V.instanceCount,Xe);ft.renderInstances(vt,Ct,Er)}else ft.render(vt,Ct)};function st(T,F,V){T.transparent===!0&&T.side===St&&T.forceSinglePass===!1?(T.side=Dt,T.needsUpdate=!0,bs(T,F,V),T.side=Bn,T.needsUpdate=!0,bs(T,F,V),T.side=St):bs(T,F,V)}this.compile=function(T,F,V=null){V===null&&(V=T),m=Te.get(V),m.init(),y.push(m),V.traverseVisible(function(z){z.isLight&&z.layers.test(F.layers)&&(m.pushLight(z),z.castShadow&&m.pushShadow(z))}),T!==V&&T.traverseVisible(function(z){z.isLight&&z.layers.test(F.layers)&&(m.pushLight(z),z.castShadow&&m.pushShadow(z))}),m.setupLights(v._useLegacyLights);const W=new Set;return T.traverse(function(z){const be=z.material;if(be)if(Array.isArray(be))for(let Le=0;Le<be.length;Le++){const Ne=be[Le];st(Ne,V,z),W.add(Ne)}else st(be,V,z),W.add(be)}),y.pop(),m=null,W},this.compileAsync=function(T,F,V=null){const W=this.compile(T,F,V);return new Promise(z=>{function be(){if(W.forEach(function(Le){ue.get(Le).currentProgram.isReady()&&W.delete(Le)}),W.size===0){z(T);return}setTimeout(be,10)}K.get("KHR_parallel_shader_compile")!==null?be():setTimeout(be,10)})};let rt=null;function wt(T){rt&&rt(T)}function Ft(){Gt.stop()}function at(){Gt.start()}const Gt=new Uc;Gt.setAnimationLoop(wt),typeof self<"u"&&Gt.setContext(self),this.setAnimationLoop=function(T){rt=T,qe.setAnimationLoop(T),T===null?Gt.stop():Gt.start()},qe.addEventListener("sessionstart",Ft),qe.addEventListener("sessionend",at),this.render=function(T,F){if(F!==void 0&&F.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(S===!0)return;T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),F.parent===null&&F.matrixWorldAutoUpdate===!0&&F.updateMatrixWorld(),qe.enabled===!0&&qe.isPresenting===!0&&(qe.cameraAutoUpdate===!0&&qe.updateCamera(F),F=qe.getCamera()),T.isScene===!0&&T.onBeforeRender(v,T,F,w),m=Te.get(T,y.length),m.init(),y.push(m),D.multiplyMatrices(F.projectionMatrix,F.matrixWorldInverse),B.setFromProjectionMatrix(D),pe=this.localClippingEnabled,ie=Ie.init(this.clippingPlanes,pe),_=fe.get(T,f.length),_.init(),f.push(_),un(T,F,0,v.sortObjects),_.finish(),v.sortObjects===!0&&_.sort(Z,ee),this.info.render.frame++,ie===!0&&Ie.beginShadows();const V=m.state.shadowsArray;if(oe.render(V,T,F),ie===!0&&Ie.endShadows(),this.info.autoReset===!0&&this.info.reset(),$e.render(_,T),m.setupLights(v._useLegacyLights),F.isArrayCamera){const W=F.cameras;for(let z=0,be=W.length;z<be;z++){const Le=W[z];ao(_,T,Le,Le.viewport)}}else ao(_,T,F);w!==null&&(b.updateMultisampleRenderTarget(w),b.updateRenderTargetMipmap(w)),T.isScene===!0&&T.onAfterRender(v,T,F),Ge.resetDefaultState(),O=-1,M=null,y.pop(),y.length>0?m=y[y.length-1]:m=null,f.pop(),f.length>0?_=f[f.length-1]:_=null};function un(T,F,V,W){if(T.visible===!1)return;if(T.layers.test(F.layers)){if(T.isGroup)V=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(F);else if(T.isLight)m.pushLight(T),T.castShadow&&m.pushShadow(T);else if(T.isSprite){if(!T.frustumCulled||B.intersectsSprite(T)){W&&ve.setFromMatrixPosition(T.matrixWorld).applyMatrix4(D);const Le=ne.update(T),Ne=T.material;Ne.visible&&_.push(T,Le,Ne,V,ve.z,null)}}else if((T.isMesh||T.isLine||T.isPoints)&&(!T.frustumCulled||B.intersectsObject(T))){const Le=ne.update(T),Ne=T.material;if(W&&(T.boundingSphere!==void 0?(T.boundingSphere===null&&T.computeBoundingSphere(),ve.copy(T.boundingSphere.center)):(Le.boundingSphere===null&&Le.computeBoundingSphere(),ve.copy(Le.boundingSphere.center)),ve.applyMatrix4(T.matrixWorld).applyMatrix4(D)),Array.isArray(Ne)){const Fe=Le.groups;for(let We=0,He=Fe.length;We<He;We++){const ke=Fe[We],vt=Ne[ke.materialIndex];vt&&vt.visible&&_.push(T,Le,vt,V,ve.z,ke)}}else Ne.visible&&_.push(T,Le,Ne,V,ve.z,null)}}const be=T.children;for(let Le=0,Ne=be.length;Le<Ne;Le++)un(be[Le],F,V,W)}function ao(T,F,V,W){const z=T.opaque,be=T.transmissive,Le=T.transparent;m.setupLightsView(V),ie===!0&&Ie.setGlobalState(v.clippingPlanes,V),be.length>0&&mu(z,be,F,V),W&&Y.viewport(E.copy(W)),z.length>0&&Ms(z,F,V),be.length>0&&Ms(be,F,V),Le.length>0&&Ms(Le,F,V),Y.buffers.depth.setTest(!0),Y.buffers.depth.setMask(!0),Y.buffers.color.setMask(!0),Y.setPolygonOffset(!1)}function mu(T,F,V,W){if((V.isScene===!0?V.overrideMaterial:null)!==null)return;const be=ae.isWebGL2;Se===null&&(Se=new cn(1,1,{generateMipmaps:!0,type:K.has("EXT_color_buffer_half_float")?En:Gn,minFilter:fs,samples:be?4:0})),v.getDrawingBufferSize(me),be?Se.setSize(me.x,me.y):Se.setSize(Ca(me.x),Ca(me.y));const Le=v.getRenderTarget();v.setRenderTarget(Se),v.getClearColor(se),P=v.getClearAlpha(),P<1&&v.setClearColor(16777215,.5),v.clear();const Ne=v.toneMapping;v.toneMapping=Fn,Ms(T,V,W),b.updateMultisampleRenderTarget(Se),b.updateRenderTargetMipmap(Se);let Fe=!1;for(let We=0,He=F.length;We<He;We++){const ke=F[We],vt=ke.object,Xt=ke.geometry,Ct=ke.material,mn=ke.group;if(Ct.side===St&&vt.layers.test(W.layers)){const ft=Ct.side;Ct.side=Dt,Ct.needsUpdate=!0,oo(vt,V,W,Xt,Ct,mn),Ct.side=ft,Ct.needsUpdate=!0,Fe=!0}}Fe===!0&&(b.updateMultisampleRenderTarget(Se),b.updateRenderTargetMipmap(Se)),v.setRenderTarget(Le),v.setClearColor(se,P),v.toneMapping=Ne}function Ms(T,F,V){const W=F.isScene===!0?F.overrideMaterial:null;for(let z=0,be=T.length;z<be;z++){const Le=T[z],Ne=Le.object,Fe=Le.geometry,We=W===null?Le.material:W,He=Le.group;Ne.layers.test(V.layers)&&oo(Ne,F,V,Fe,We,He)}}function oo(T,F,V,W,z,be){T.onBeforeRender(v,F,V,W,z,be),T.modelViewMatrix.multiplyMatrices(V.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),z.onBeforeRender(v,F,V,W,T,be),z.transparent===!0&&z.side===St&&z.forceSinglePass===!1?(z.side=Dt,z.needsUpdate=!0,v.renderBufferDirect(V,F,W,z,T,be),z.side=Bn,z.needsUpdate=!0,v.renderBufferDirect(V,F,W,z,T,be),z.side=St):v.renderBufferDirect(V,F,W,z,T,be),T.onAfterRender(v,F,V,W,z,be)}function bs(T,F,V){F.isScene!==!0&&(F=he);const W=ue.get(T),z=m.state.lights,be=m.state.shadowsArray,Le=z.state.version,Ne=Me.getParameters(T,z.state,be,F,V),Fe=Me.getProgramCacheKey(Ne);let We=W.programs;W.environment=T.isMeshStandardMaterial?F.environment:null,W.fog=F.fog,W.envMap=(T.isMeshStandardMaterial?U:x).get(T.envMap||W.environment),We===void 0&&(T.addEventListener("dispose",xe),We=new Map,W.programs=We);let He=We.get(Fe);if(He!==void 0){if(W.currentProgram===He&&W.lightsStateVersion===Le)return co(T,Ne),He}else Ne.uniforms=Me.getUniforms(T),T.onBuild(V,Ne,v),T.onBeforeCompile(Ne,v),He=Me.acquireProgram(Ne,Fe),We.set(Fe,He),W.uniforms=Ne.uniforms;const ke=W.uniforms;return(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(ke.clippingPlanes=Ie.uniform),co(T,Ne),W.needsLights=vu(T),W.lightsStateVersion=Le,W.needsLights&&(ke.ambientLightColor.value=z.state.ambient,ke.lightProbe.value=z.state.probe,ke.directionalLights.value=z.state.directional,ke.directionalLightShadows.value=z.state.directionalShadow,ke.spotLights.value=z.state.spot,ke.spotLightShadows.value=z.state.spotShadow,ke.rectAreaLights.value=z.state.rectArea,ke.ltc_1.value=z.state.rectAreaLTC1,ke.ltc_2.value=z.state.rectAreaLTC2,ke.pointLights.value=z.state.point,ke.pointLightShadows.value=z.state.pointShadow,ke.hemisphereLights.value=z.state.hemi,ke.directionalShadowMap.value=z.state.directionalShadowMap,ke.directionalShadowMatrix.value=z.state.directionalShadowMatrix,ke.spotShadowMap.value=z.state.spotShadowMap,ke.spotLightMatrix.value=z.state.spotLightMatrix,ke.spotLightMap.value=z.state.spotLightMap,ke.pointShadowMap.value=z.state.pointShadowMap,ke.pointShadowMatrix.value=z.state.pointShadowMatrix),W.currentProgram=He,W.uniformsList=null,He}function lo(T){if(T.uniformsList===null){const F=T.currentProgram.getUniforms();T.uniformsList=sr.seqWithValue(F.seq,T.uniforms)}return T.uniformsList}function co(T,F){const V=ue.get(T);V.outputColorSpace=F.outputColorSpace,V.batching=F.batching,V.instancing=F.instancing,V.instancingColor=F.instancingColor,V.skinning=F.skinning,V.morphTargets=F.morphTargets,V.morphNormals=F.morphNormals,V.morphColors=F.morphColors,V.morphTargetsCount=F.morphTargetsCount,V.numClippingPlanes=F.numClippingPlanes,V.numIntersection=F.numClipIntersection,V.vertexAlphas=F.vertexAlphas,V.vertexTangents=F.vertexTangents,V.toneMapping=F.toneMapping}function gu(T,F,V,W,z){F.isScene!==!0&&(F=he),b.resetTextureUnits();const be=F.fog,Le=W.isMeshStandardMaterial?F.environment:null,Ne=w===null?v.outputColorSpace:w.isXRRenderTarget===!0?w.texture.colorSpace:Tn,Fe=(W.isMeshStandardMaterial?U:x).get(W.envMap||Le),We=W.vertexColors===!0&&!!V.attributes.color&&V.attributes.color.itemSize===4,He=!!V.attributes.tangent&&(!!W.normalMap||W.anisotropy>0),ke=!!V.morphAttributes.position,vt=!!V.morphAttributes.normal,Xt=!!V.morphAttributes.color;let Ct=Fn;W.toneMapped&&(w===null||w.isXRRenderTarget===!0)&&(Ct=v.toneMapping);const mn=V.morphAttributes.position||V.morphAttributes.normal||V.morphAttributes.color,ft=mn!==void 0?mn.length:0,Xe=ue.get(W),Er=m.state.lights;if(ie===!0&&(pe===!0||T!==M)){const jt=T===M&&W.id===O;Ie.setState(W,T,jt)}let mt=!1;W.version===Xe.__version?(Xe.needsLights&&Xe.lightsStateVersion!==Er.state.version||Xe.outputColorSpace!==Ne||z.isBatchedMesh&&Xe.batching===!1||!z.isBatchedMesh&&Xe.batching===!0||z.isInstancedMesh&&Xe.instancing===!1||!z.isInstancedMesh&&Xe.instancing===!0||z.isSkinnedMesh&&Xe.skinning===!1||!z.isSkinnedMesh&&Xe.skinning===!0||z.isInstancedMesh&&Xe.instancingColor===!0&&z.instanceColor===null||z.isInstancedMesh&&Xe.instancingColor===!1&&z.instanceColor!==null||Xe.envMap!==Fe||W.fog===!0&&Xe.fog!==be||Xe.numClippingPlanes!==void 0&&(Xe.numClippingPlanes!==Ie.numPlanes||Xe.numIntersection!==Ie.numIntersection)||Xe.vertexAlphas!==We||Xe.vertexTangents!==He||Xe.morphTargets!==ke||Xe.morphNormals!==vt||Xe.morphColors!==Xt||Xe.toneMapping!==Ct||ae.isWebGL2===!0&&Xe.morphTargetsCount!==ft)&&(mt=!0):(mt=!0,Xe.__version=W.version);let zn=Xe.currentProgram;mt===!0&&(zn=bs(W,F,z));let uo=!1,Xi=!1,Tr=!1;const Ot=zn.getUniforms(),Vn=Xe.uniforms;if(Y.useProgram(zn.program)&&(uo=!0,Xi=!0,Tr=!0),W.id!==O&&(O=W.id,Xi=!0),uo||M!==T){Ot.setValue(L,"projectionMatrix",T.projectionMatrix),Ot.setValue(L,"viewMatrix",T.matrixWorldInverse);const jt=Ot.map.cameraPosition;jt!==void 0&&jt.setValue(L,ve.setFromMatrixPosition(T.matrixWorld)),ae.logarithmicDepthBuffer&&Ot.setValue(L,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),(W.isMeshPhongMaterial||W.isMeshToonMaterial||W.isMeshLambertMaterial||W.isMeshBasicMaterial||W.isMeshStandardMaterial||W.isShaderMaterial)&&Ot.setValue(L,"isOrthographic",T.isOrthographicCamera===!0),M!==T&&(M=T,Xi=!0,Tr=!0)}if(z.isSkinnedMesh){Ot.setOptional(L,z,"bindMatrix"),Ot.setOptional(L,z,"bindMatrixInverse");const jt=z.skeleton;jt&&(ae.floatVertexTextures?(jt.boneTexture===null&&jt.computeBoneTexture(),Ot.setValue(L,"boneTexture",jt.boneTexture,b)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}z.isBatchedMesh&&(Ot.setOptional(L,z,"batchingTexture"),Ot.setValue(L,"batchingTexture",z._matricesTexture,b));const Ar=V.morphAttributes;if((Ar.position!==void 0||Ar.normal!==void 0||Ar.color!==void 0&&ae.isWebGL2===!0)&&Ve.update(z,V,zn),(Xi||Xe.receiveShadow!==z.receiveShadow)&&(Xe.receiveShadow=z.receiveShadow,Ot.setValue(L,"receiveShadow",z.receiveShadow)),W.isMeshGouraudMaterial&&W.envMap!==null&&(Vn.envMap.value=Fe,Vn.flipEnvMap.value=Fe.isCubeTexture&&Fe.isRenderTargetTexture===!1?-1:1),Xi&&(Ot.setValue(L,"toneMappingExposure",v.toneMappingExposure),Xe.needsLights&&_u(Vn,Tr),be&&W.fog===!0&&de.refreshFogUniforms(Vn,be),de.refreshMaterialUniforms(Vn,W,j,k,Se),sr.upload(L,lo(Xe),Vn,b)),W.isShaderMaterial&&W.uniformsNeedUpdate===!0&&(sr.upload(L,lo(Xe),Vn,b),W.uniformsNeedUpdate=!1),W.isSpriteMaterial&&Ot.setValue(L,"center",z.center),Ot.setValue(L,"modelViewMatrix",z.modelViewMatrix),Ot.setValue(L,"normalMatrix",z.normalMatrix),Ot.setValue(L,"modelMatrix",z.matrixWorld),W.isShaderMaterial||W.isRawShaderMaterial){const jt=W.uniformsGroups;for(let wr=0,yu=jt.length;wr<yu;wr++)if(ae.isWebGL2){const ho=jt[wr];Qe.update(ho,zn),Qe.bind(ho,zn)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return zn}function _u(T,F){T.ambientLightColor.needsUpdate=F,T.lightProbe.needsUpdate=F,T.directionalLights.needsUpdate=F,T.directionalLightShadows.needsUpdate=F,T.pointLights.needsUpdate=F,T.pointLightShadows.needsUpdate=F,T.spotLights.needsUpdate=F,T.spotLightShadows.needsUpdate=F,T.rectAreaLights.needsUpdate=F,T.hemisphereLights.needsUpdate=F}function vu(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return R},this.getActiveMipmapLevel=function(){return A},this.getRenderTarget=function(){return w},this.setRenderTargetTextures=function(T,F,V){ue.get(T.texture).__webglTexture=F,ue.get(T.depthTexture).__webglTexture=V;const W=ue.get(T);W.__hasExternalTextures=!0,W.__hasExternalTextures&&(W.__autoAllocateDepthBuffer=V===void 0,W.__autoAllocateDepthBuffer||K.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),W.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(T,F){const V=ue.get(T);V.__webglFramebuffer=F,V.__useDefaultFramebuffer=F===void 0},this.setRenderTarget=function(T,F=0,V=0){w=T,R=F,A=V;let W=!0,z=null,be=!1,Le=!1;if(T){const Fe=ue.get(T);Fe.__useDefaultFramebuffer!==void 0?(Y.bindFramebuffer(L.FRAMEBUFFER,null),W=!1):Fe.__webglFramebuffer===void 0?b.setupRenderTarget(T):Fe.__hasExternalTextures&&b.rebindTextures(T,ue.get(T.texture).__webglTexture,ue.get(T.depthTexture).__webglTexture);const We=T.texture;(We.isData3DTexture||We.isDataArrayTexture||We.isCompressedArrayTexture)&&(Le=!0);const He=ue.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(Array.isArray(He[F])?z=He[F][V]:z=He[F],be=!0):ae.isWebGL2&&T.samples>0&&b.useMultisampledRTT(T)===!1?z=ue.get(T).__webglMultisampledFramebuffer:Array.isArray(He)?z=He[V]:z=He,E.copy(T.viewport),N.copy(T.scissor),H=T.scissorTest}else E.copy(q).multiplyScalar(j).floor(),N.copy(X).multiplyScalar(j).floor(),H=re;if(Y.bindFramebuffer(L.FRAMEBUFFER,z)&&ae.drawBuffers&&W&&Y.drawBuffers(T,z),Y.viewport(E),Y.scissor(N),Y.setScissorTest(H),be){const Fe=ue.get(T.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_CUBE_MAP_POSITIVE_X+F,Fe.__webglTexture,V)}else if(Le){const Fe=ue.get(T.texture),We=F||0;L.framebufferTextureLayer(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,Fe.__webglTexture,V||0,We)}O=-1},this.readRenderTargetPixels=function(T,F,V,W,z,be,Le){if(!(T&&T.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ne=ue.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&Le!==void 0&&(Ne=Ne[Le]),Ne){Y.bindFramebuffer(L.FRAMEBUFFER,Ne);try{const Fe=T.texture,We=Fe.format,He=Fe.type;if(We!==on&&Ae.convert(We)!==L.getParameter(L.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const ke=He===En&&(K.has("EXT_color_buffer_half_float")||ae.isWebGL2&&K.has("EXT_color_buffer_float"));if(He!==Gn&&Ae.convert(He)!==L.getParameter(L.IMPLEMENTATION_COLOR_READ_TYPE)&&!(He===Un&&(ae.isWebGL2||K.has("OES_texture_float")||K.has("WEBGL_color_buffer_float")))&&!ke){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}F>=0&&F<=T.width-W&&V>=0&&V<=T.height-z&&L.readPixels(F,V,W,z,Ae.convert(We),Ae.convert(He),be)}finally{const Fe=w!==null?ue.get(w).__webglFramebuffer:null;Y.bindFramebuffer(L.FRAMEBUFFER,Fe)}}},this.copyFramebufferToTexture=function(T,F,V=0){const W=Math.pow(2,-V),z=Math.floor(F.image.width*W),be=Math.floor(F.image.height*W);b.setTexture2D(F,0),L.copyTexSubImage2D(L.TEXTURE_2D,V,0,0,T.x,T.y,z,be),Y.unbindTexture()},this.copyTextureToTexture=function(T,F,V,W=0){const z=F.image.width,be=F.image.height,Le=Ae.convert(V.format),Ne=Ae.convert(V.type);b.setTexture2D(V,0),L.pixelStorei(L.UNPACK_FLIP_Y_WEBGL,V.flipY),L.pixelStorei(L.UNPACK_PREMULTIPLY_ALPHA_WEBGL,V.premultiplyAlpha),L.pixelStorei(L.UNPACK_ALIGNMENT,V.unpackAlignment),F.isDataTexture?L.texSubImage2D(L.TEXTURE_2D,W,T.x,T.y,z,be,Le,Ne,F.image.data):F.isCompressedTexture?L.compressedTexSubImage2D(L.TEXTURE_2D,W,T.x,T.y,F.mipmaps[0].width,F.mipmaps[0].height,Le,F.mipmaps[0].data):L.texSubImage2D(L.TEXTURE_2D,W,T.x,T.y,Le,Ne,F.image),W===0&&V.generateMipmaps&&L.generateMipmap(L.TEXTURE_2D),Y.unbindTexture()},this.copyTextureToTexture3D=function(T,F,V,W,z=0){if(v.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const be=T.max.x-T.min.x+1,Le=T.max.y-T.min.y+1,Ne=T.max.z-T.min.z+1,Fe=Ae.convert(W.format),We=Ae.convert(W.type);let He;if(W.isData3DTexture)b.setTexture3D(W,0),He=L.TEXTURE_3D;else if(W.isDataArrayTexture||W.isCompressedArrayTexture)b.setTexture2DArray(W,0),He=L.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}L.pixelStorei(L.UNPACK_FLIP_Y_WEBGL,W.flipY),L.pixelStorei(L.UNPACK_PREMULTIPLY_ALPHA_WEBGL,W.premultiplyAlpha),L.pixelStorei(L.UNPACK_ALIGNMENT,W.unpackAlignment);const ke=L.getParameter(L.UNPACK_ROW_LENGTH),vt=L.getParameter(L.UNPACK_IMAGE_HEIGHT),Xt=L.getParameter(L.UNPACK_SKIP_PIXELS),Ct=L.getParameter(L.UNPACK_SKIP_ROWS),mn=L.getParameter(L.UNPACK_SKIP_IMAGES),ft=V.isCompressedTexture?V.mipmaps[z]:V.image;L.pixelStorei(L.UNPACK_ROW_LENGTH,ft.width),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,ft.height),L.pixelStorei(L.UNPACK_SKIP_PIXELS,T.min.x),L.pixelStorei(L.UNPACK_SKIP_ROWS,T.min.y),L.pixelStorei(L.UNPACK_SKIP_IMAGES,T.min.z),V.isDataTexture||V.isData3DTexture?L.texSubImage3D(He,z,F.x,F.y,F.z,be,Le,Ne,Fe,We,ft.data):V.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),L.compressedTexSubImage3D(He,z,F.x,F.y,F.z,be,Le,Ne,Fe,ft.data)):L.texSubImage3D(He,z,F.x,F.y,F.z,be,Le,Ne,Fe,We,ft),L.pixelStorei(L.UNPACK_ROW_LENGTH,ke),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,vt),L.pixelStorei(L.UNPACK_SKIP_PIXELS,Xt),L.pixelStorei(L.UNPACK_SKIP_ROWS,Ct),L.pixelStorei(L.UNPACK_SKIP_IMAGES,mn),z===0&&W.generateMipmaps&&L.generateMipmap(He),Y.unbindTexture()},this.initTexture=function(T){T.isCubeTexture?b.setTextureCube(T,0):T.isData3DTexture?b.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?b.setTexture2DArray(T,0):b.setTexture2D(T,0),Y.unbindTexture()},this.resetState=function(){R=0,A=0,w=null,Y.reset(),Ge.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Mn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=e===Ka?"display-p3":"srgb",t.unpackColorSpace=nt.workingColorSpace===vr?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===xt?ii:bc}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===ii?xt:Tn}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}}class E0 extends Vc{}E0.prototype.isWebGL1Renderer=!0;class Ja{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new Pe(e),this.density=t}clone(){return new Ja(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class Wc extends Et{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}}class Il extends _t{constructor(e,t,n,s=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const Ci=new lt,Dl=new lt,Xs=[],Ol=new ai,T0=new lt,Ji=new $,Qi=new oi;class A0 extends ${constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Il(new Float32Array(n*16),16),this.instanceColor=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,T0)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new ai),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Ci),Ol.copy(e.boundingBox).applyMatrix4(Ci),this.boundingBox.union(Ol)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new oi),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Ci),Qi.copy(e.boundingSphere).applyMatrix4(Ci),this.boundingSphere.union(Qi)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}raycast(e,t){const n=this.matrixWorld,s=this.count;if(Ji.geometry=this.geometry,Ji.material=this.material,Ji.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Qi.copy(this.boundingSphere),Qi.applyMatrix4(n),e.ray.intersectsSphere(Qi)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,Ci),Dl.multiplyMatrices(n,Ci),Ji.matrixWorld=Dl,Ji.raycast(e,Xs);for(let a=0,o=Xs.length;a<o;a++){const l=Xs[a];l.instanceId=r,l.object=this,t.push(l)}Xs.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new Il(new Float32Array(this.instanceMatrix.count*3),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"})}}class Sr extends li{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Pe(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Nl=new C,Ul=new C,Fl=new lt,ra=new yr,Ks=new oi;class Qa extends Et{constructor(e=new it,t=new Sr){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let s=1,r=t.count;s<r;s++)Nl.fromBufferAttribute(t,s-1),Ul.fromBufferAttribute(t,s),n[s]=n[s-1],n[s]+=Nl.distanceTo(Ul);e.setAttribute("lineDistance",new Ye(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Ks.copy(n.boundingSphere),Ks.applyMatrix4(s),Ks.radius+=r,e.ray.intersectsSphere(Ks)===!1)return;Fl.copy(s).invert(),ra.copy(e.ray).applyMatrix4(Fl);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=new C,u=new C,h=new C,d=new C,p=this.isLineSegments?2:1,g=n.index,m=n.attributes.position;if(g!==null){const f=Math.max(0,a.start),y=Math.min(g.count,a.start+a.count);for(let v=f,S=y-1;v<S;v+=p){const R=g.getX(v),A=g.getX(v+1);if(c.fromBufferAttribute(m,R),u.fromBufferAttribute(m,A),ra.distanceSqToSegment(c,u,d,h)>l)continue;d.applyMatrix4(this.matrixWorld);const O=e.ray.origin.distanceTo(d);O<e.near||O>e.far||t.push({distance:O,point:h.clone().applyMatrix4(this.matrixWorld),index:v,face:null,faceIndex:null,object:this})}}else{const f=Math.max(0,a.start),y=Math.min(m.count,a.start+a.count);for(let v=f,S=y-1;v<S;v+=p){if(c.fromBufferAttribute(m,v),u.fromBufferAttribute(m,v+1),ra.distanceSqToSegment(c,u,d,h)>l)continue;d.applyMatrix4(this.matrixWorld);const A=e.ray.origin.distanceTo(d);A<e.near||A>e.far||t.push({distance:A,point:h.clone().applyMatrix4(this.matrixWorld),index:v,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}const Gl=new C,Bl=new C;class w0 extends Qa{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let s=0,r=t.count;s<r;s+=2)Gl.fromBufferAttribute(t,s),Bl.fromBufferAttribute(t,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+Gl.distanceTo(Bl);e.setAttribute("lineDistance",new Ye(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class ci extends li{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Pe(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Hl=new lt,La=new yr,Ys=new oi,$s=new C;class ui extends Et{constructor(e=new it,t=new ci){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Ys.copy(n.boundingSphere),Ys.applyMatrix4(s),Ys.radius+=r,e.ray.intersectsSphere(Ys)===!1)return;Hl.copy(s).invert(),La.copy(e.ray).applyMatrix4(Hl);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=n.index,h=n.attributes.position;if(c!==null){const d=Math.max(0,a.start),p=Math.min(c.count,a.start+a.count);for(let g=d,_=p;g<_;g++){const m=c.getX(g);$s.fromBufferAttribute(h,m),kl($s,m,l,s,e,t,this)}}else{const d=Math.max(0,a.start),p=Math.min(h.count,a.start+a.count);for(let g=d,_=p;g<_;g++)$s.fromBufferAttribute(h,g),kl($s,g,l,s,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function kl(i,e,t,n,s,r,a){const o=La.distanceSqToPoint(i);if(o<t){const l=new C;La.closestPointToPoint(i,l),l.applyMatrix4(n);const c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:e,face:null,object:a})}}class Hn extends qt{constructor(e,t,n,s,r,a,o,l,c){super(e,t,n,s,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class pn{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){const n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let n,s=this.getPoint(0),r=0;t.push(0);for(let a=1;a<=e;a++)n=this.getPoint(a/e),r+=n.distanceTo(s),t.push(r),s=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){const n=this.getLengths();let s=0;const r=n.length;let a;t?a=t:a=e*n[r-1];let o=0,l=r-1,c;for(;o<=l;)if(s=Math.floor(o+(l-o)/2),c=n[s]-a,c<0)o=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,n[s]===a)return s/(r-1);const u=n[s],d=n[s+1]-u,p=(a-u)/d;return(s+p)/(r-1)}getTangent(e,t){let s=e-1e-4,r=e+1e-4;s<0&&(s=0),r>1&&(r=1);const a=this.getPoint(s),o=this.getPoint(r),l=t||(a.isVector2?new le:new C);return l.copy(o).sub(a).normalize(),l}getTangentAt(e,t){const n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t){const n=new C,s=[],r=[],a=[],o=new C,l=new lt;for(let p=0;p<=e;p++){const g=p/e;s[p]=this.getTangentAt(g,new C)}r[0]=new C,a[0]=new C;let c=Number.MAX_VALUE;const u=Math.abs(s[0].x),h=Math.abs(s[0].y),d=Math.abs(s[0].z);u<=c&&(c=u,n.set(1,0,0)),h<=c&&(c=h,n.set(0,1,0)),d<=c&&n.set(0,0,1),o.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],o),a[0].crossVectors(s[0],r[0]);for(let p=1;p<=e;p++){if(r[p]=r[p-1].clone(),a[p]=a[p-1].clone(),o.crossVectors(s[p-1],s[p]),o.length()>Number.EPSILON){o.normalize();const g=Math.acos(Pt(s[p-1].dot(s[p]),-1,1));r[p].applyMatrix4(l.makeRotationAxis(o,g))}a[p].crossVectors(s[p],r[p])}if(t===!0){let p=Math.acos(Pt(r[0].dot(r[e]),-1,1));p/=e,s[0].dot(o.crossVectors(r[0],r[e]))>0&&(p=-p);for(let g=1;g<=e;g++)r[g].applyMatrix4(l.makeRotationAxis(s[g],p*g)),a[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class eo extends pn{constructor(e=0,t=0,n=1,s=1,r=0,a=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(e,t){const n=t||new le,s=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(a?r=0:r=s),this.aClockwise===!0&&!a&&(r===s?r=-s:r=r-s);const o=this.aStartAngle+e*r;let l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){const u=Math.cos(this.aRotation),h=Math.sin(this.aRotation),d=l-this.aX,p=c-this.aY;l=d*u-p*h+this.aX,c=d*h+p*u+this.aY}return n.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class C0 extends eo{constructor(e,t,n,s,r,a){super(e,t,n,n,s,r,a),this.isArcCurve=!0,this.type="ArcCurve"}}function to(){let i=0,e=0,t=0,n=0;function s(r,a,o,l){i=r,e=o,t=-3*r+3*a-2*o-l,n=2*r-2*a+o+l}return{initCatmullRom:function(r,a,o,l,c){s(a,o,c*(o-r),c*(l-a))},initNonuniformCatmullRom:function(r,a,o,l,c,u,h){let d=(a-r)/c-(o-r)/(c+u)+(o-a)/u,p=(o-a)/u-(l-a)/(u+h)+(l-o)/h;d*=u,p*=u,s(a,o,d,p)},calc:function(r){const a=r*r,o=a*r;return i+e*r+t*a+n*o}}}const js=new C,aa=new to,oa=new to,la=new to;class R0 extends pn{constructor(e=[],t=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=s}getPoint(e,t=new C){const n=t,s=this.points,r=s.length,a=(r-(this.closed?0:1))*e;let o=Math.floor(a),l=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:l===0&&o===r-1&&(o=r-2,l=1);let c,u;this.closed||o>0?c=s[(o-1)%r]:(js.subVectors(s[0],s[1]).add(s[0]),c=js);const h=s[o%r],d=s[(o+1)%r];if(this.closed||o+2<r?u=s[(o+2)%r]:(js.subVectors(s[r-1],s[r-2]).add(s[r-1]),u=js),this.curveType==="centripetal"||this.curveType==="chordal"){const p=this.curveType==="chordal"?.5:.25;let g=Math.pow(c.distanceToSquared(h),p),_=Math.pow(h.distanceToSquared(d),p),m=Math.pow(d.distanceToSquared(u),p);_<1e-4&&(_=1),g<1e-4&&(g=_),m<1e-4&&(m=_),aa.initNonuniformCatmullRom(c.x,h.x,d.x,u.x,g,_,m),oa.initNonuniformCatmullRom(c.y,h.y,d.y,u.y,g,_,m),la.initNonuniformCatmullRom(c.z,h.z,d.z,u.z,g,_,m)}else this.curveType==="catmullrom"&&(aa.initCatmullRom(c.x,h.x,d.x,u.x,this.tension),oa.initCatmullRom(c.y,h.y,d.y,u.y,this.tension),la.initCatmullRom(c.z,h.z,d.z,u.z,this.tension));return n.set(aa.calc(l),oa.calc(l),la.calc(l)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const s=e.points[t];this.points.push(s.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const s=this.points[t];e.points.push(s.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const s=e.points[t];this.points.push(new C().fromArray(s))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function zl(i,e,t,n,s){const r=(n-e)*.5,a=(s-t)*.5,o=i*i,l=i*o;return(2*t-2*n+r+a)*l+(-3*t+3*n-2*r-a)*o+r*i+t}function L0(i,e){const t=1-i;return t*t*e}function P0(i,e){return 2*(1-i)*i*e}function I0(i,e){return i*i*e}function ls(i,e,t,n){return L0(i,e)+P0(i,t)+I0(i,n)}function D0(i,e){const t=1-i;return t*t*t*e}function O0(i,e){const t=1-i;return 3*t*t*i*e}function N0(i,e){return 3*(1-i)*i*i*e}function U0(i,e){return i*i*i*e}function cs(i,e,t,n,s){return D0(i,e)+O0(i,t)+N0(i,n)+U0(i,s)}class qc extends pn{constructor(e=new le,t=new le,n=new le,s=new le){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new le){const n=t,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(cs(e,s.x,r.x,a.x,o.x),cs(e,s.y,r.y,a.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class F0 extends pn{constructor(e=new C,t=new C,n=new C,s=new C){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new C){const n=t,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(cs(e,s.x,r.x,a.x,o.x),cs(e,s.y,r.y,a.y,o.y),cs(e,s.z,r.z,a.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class Xc extends pn{constructor(e=new le,t=new le){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new le){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new le){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class G0 extends pn{constructor(e=new C,t=new C){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new C){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new C){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Kc extends pn{constructor(e=new le,t=new le,n=new le){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new le){const n=t,s=this.v0,r=this.v1,a=this.v2;return n.set(ls(e,s.x,r.x,a.x),ls(e,s.y,r.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class B0 extends pn{constructor(e=new C,t=new C,n=new C){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new C){const n=t,s=this.v0,r=this.v1,a=this.v2;return n.set(ls(e,s.x,r.x,a.x),ls(e,s.y,r.y,a.y),ls(e,s.z,r.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Yc extends pn{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new le){const n=t,s=this.points,r=(s.length-1)*e,a=Math.floor(r),o=r-a,l=s[a===0?a:a-1],c=s[a],u=s[a>s.length-2?s.length-1:a+1],h=s[a>s.length-3?s.length-1:a+2];return n.set(zl(o,l.x,c.x,u.x,h.x),zl(o,l.y,c.y,u.y,h.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const s=e.points[t];this.points.push(s.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const s=this.points[t];e.points.push(s.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const s=e.points[t];this.points.push(new le().fromArray(s))}return this}}var Pa=Object.freeze({__proto__:null,ArcCurve:C0,CatmullRomCurve3:R0,CubicBezierCurve:qc,CubicBezierCurve3:F0,EllipseCurve:eo,LineCurve:Xc,LineCurve3:G0,QuadraticBezierCurve:Kc,QuadraticBezierCurve3:B0,SplineCurve:Yc});class H0 extends pn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){const e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){const n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Pa[n](t,e))}return this}getPoint(e,t){const n=e*this.getLength(),s=this.getCurveLengths();let r=0;for(;r<s.length;){if(s[r]>=n){const a=s[r]-n,o=this.curves[r],l=o.getLength(),c=l===0?0:1-a/l;return o.getPointAt(c,t)}r++}return null}getLength(){const e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const e=[];let t=0;for(let n=0,s=this.curves.length;n<s;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){const t=[];let n;for(let s=0,r=this.curves;s<r.length;s++){const a=r[s],o=a.isEllipseCurve?e*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?e*a.points.length:e,l=a.getPoints(o);for(let c=0;c<l.length;c++){const u=l[c];n&&n.equals(u)||(t.push(u),n=u)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const s=e.curves[t];this.curves.push(s.clone())}return this.autoClose=e.autoClose,this}toJSON(){const e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){const s=this.curves[t];e.curves.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const s=e.curves[t];this.curves.push(new Pa[s.type]().fromJSON(s))}return this}}class Ia extends H0{constructor(e){super(),this.type="Path",this.currentPoint=new le,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){const n=new Xc(this.currentPoint.clone(),new le(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,s){const r=new Kc(this.currentPoint.clone(),new le(e,t),new le(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(e,t,n,s,r,a){const o=new qc(this.currentPoint.clone(),new le(e,t),new le(n,s),new le(r,a));return this.curves.push(o),this.currentPoint.set(r,a),this}splineThru(e){const t=[this.currentPoint.clone()].concat(e),n=new Yc(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,s,r,a){const o=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+o,t+l,n,s,r,a),this}absarc(e,t,n,s,r,a){return this.absellipse(e,t,n,n,s,r,a),this}ellipse(e,t,n,s,r,a,o,l){const c=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(e+c,t+u,n,s,r,a,o,l),this}absellipse(e,t,n,s,r,a,o,l){const c=new eo(e,t,n,s,r,a,o,l);if(this.curves.length>0){const h=c.getPoint(0);h.equals(this.currentPoint)||this.lineTo(h.x,h.y)}this.curves.push(c);const u=c.getPoint(1);return this.currentPoint.copy(u),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){const e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}}class no extends it{constructor(e=[new le(0,-.5),new le(.5,0),new le(0,.5)],t=12,n=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:n,phiLength:s},t=Math.floor(t),s=Pt(s,0,Math.PI*2);const r=[],a=[],o=[],l=[],c=[],u=1/t,h=new C,d=new le,p=new C,g=new C,_=new C;let m=0,f=0;for(let y=0;y<=e.length-1;y++)switch(y){case 0:m=e[y+1].x-e[y].x,f=e[y+1].y-e[y].y,p.x=f*1,p.y=-m,p.z=f*0,_.copy(p),p.normalize(),l.push(p.x,p.y,p.z);break;case e.length-1:l.push(_.x,_.y,_.z);break;default:m=e[y+1].x-e[y].x,f=e[y+1].y-e[y].y,p.x=f*1,p.y=-m,p.z=f*0,g.copy(p),p.x+=_.x,p.y+=_.y,p.z+=_.z,p.normalize(),l.push(p.x,p.y,p.z),_.copy(g)}for(let y=0;y<=t;y++){const v=n+y*u*s,S=Math.sin(v),R=Math.cos(v);for(let A=0;A<=e.length-1;A++){h.x=e[A].x*S,h.y=e[A].y,h.z=e[A].x*R,a.push(h.x,h.y,h.z),d.x=y/t,d.y=A/(e.length-1),o.push(d.x,d.y);const w=l[3*A+0]*S,O=l[3*A+1],M=l[3*A+0]*R;c.push(w,O,M)}}for(let y=0;y<t;y++)for(let v=0;v<e.length-1;v++){const S=v+y*e.length,R=S,A=S+e.length,w=S+e.length+1,O=S+1;r.push(R,A,O),r.push(w,O,A)}this.setIndex(r),this.setAttribute("position",new Ye(a,3)),this.setAttribute("uv",new Ye(o,2)),this.setAttribute("normal",new Ye(c,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new no(e.points,e.segments,e.phiStart,e.phiLength)}}class us extends no{constructor(e=1,t=1,n=4,s=8){const r=new Ia;r.absarc(0,-t/2,e,Math.PI*1.5,0),r.absarc(0,t/2,e,0,Math.PI*.5),super(r.getPoints(n),s),this.type="CapsuleGeometry",this.parameters={radius:e,length:t,capSegments:n,radialSegments:s}}static fromJSON(e){return new us(e.radius,e.length,e.capSegments,e.radialSegments)}}class On extends it{constructor(e=1,t=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:s},t=Math.max(3,t);const r=[],a=[],o=[],l=[],c=new C,u=new le;a.push(0,0,0),o.push(0,0,1),l.push(.5,.5);for(let h=0,d=3;h<=t;h++,d+=3){const p=n+h/t*s;c.x=e*Math.cos(p),c.y=e*Math.sin(p),a.push(c.x,c.y,c.z),o.push(0,0,1),u.x=(a[d]/e+1)/2,u.y=(a[d+1]/e+1)/2,l.push(u.x,u.y)}for(let h=1;h<=t;h++)r.push(h,h+1,0);this.setIndex(r),this.setAttribute("position",new Ye(a,3)),this.setAttribute("normal",new Ye(o,3)),this.setAttribute("uv",new Ye(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new On(e.radius,e.segments,e.thetaStart,e.thetaLength)}}class yt extends it{constructor(e=1,t=1,n=1,s=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};const c=this;s=Math.floor(s),r=Math.floor(r);const u=[],h=[],d=[],p=[];let g=0;const _=[],m=n/2;let f=0;y(),a===!1&&(e>0&&v(!0),t>0&&v(!1)),this.setIndex(u),this.setAttribute("position",new Ye(h,3)),this.setAttribute("normal",new Ye(d,3)),this.setAttribute("uv",new Ye(p,2));function y(){const S=new C,R=new C;let A=0;const w=(t-e)/n;for(let O=0;O<=r;O++){const M=[],E=O/r,N=E*(t-e)+e;for(let H=0;H<=s;H++){const se=H/s,P=se*l+o,G=Math.sin(P),k=Math.cos(P);R.x=N*G,R.y=-E*n+m,R.z=N*k,h.push(R.x,R.y,R.z),S.set(G,w,k).normalize(),d.push(S.x,S.y,S.z),p.push(se,1-E),M.push(g++)}_.push(M)}for(let O=0;O<s;O++)for(let M=0;M<r;M++){const E=_[M][O],N=_[M+1][O],H=_[M+1][O+1],se=_[M][O+1];u.push(E,N,se),u.push(N,H,se),A+=6}c.addGroup(f,A,0),f+=A}function v(S){const R=g,A=new le,w=new C;let O=0;const M=S===!0?e:t,E=S===!0?1:-1;for(let H=1;H<=s;H++)h.push(0,m*E,0),d.push(0,E,0),p.push(.5,.5),g++;const N=g;for(let H=0;H<=s;H++){const P=H/s*l+o,G=Math.cos(P),k=Math.sin(P);w.x=M*k,w.y=m*E,w.z=M*G,h.push(w.x,w.y,w.z),d.push(0,E,0),A.x=G*.5+.5,A.y=k*.5*E+.5,p.push(A.x,A.y),g++}for(let H=0;H<s;H++){const se=R+H,P=N+H;S===!0?u.push(P,P+1,se):u.push(P+1,P,se),O+=3}c.addGroup(f,O,S===!0?1:2),f+=O}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new yt(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class ki extends yt{constructor(e=1,t=1,n=32,s=1,r=!1,a=0,o=Math.PI*2){super(0,e,t,n,s,r,a,o),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(e){return new ki(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class io extends it{constructor(e=[],t=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:s};const r=[],a=[];o(s),c(n),u(),this.setAttribute("position",new Ye(r,3)),this.setAttribute("normal",new Ye(r.slice(),3)),this.setAttribute("uv",new Ye(a,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function o(y){const v=new C,S=new C,R=new C;for(let A=0;A<t.length;A+=3)p(t[A+0],v),p(t[A+1],S),p(t[A+2],R),l(v,S,R,y)}function l(y,v,S,R){const A=R+1,w=[];for(let O=0;O<=A;O++){w[O]=[];const M=y.clone().lerp(S,O/A),E=v.clone().lerp(S,O/A),N=A-O;for(let H=0;H<=N;H++)H===0&&O===A?w[O][H]=M:w[O][H]=M.clone().lerp(E,H/N)}for(let O=0;O<A;O++)for(let M=0;M<2*(A-O)-1;M++){const E=Math.floor(M/2);M%2===0?(d(w[O][E+1]),d(w[O+1][E]),d(w[O][E])):(d(w[O][E+1]),d(w[O+1][E+1]),d(w[O+1][E]))}}function c(y){const v=new C;for(let S=0;S<r.length;S+=3)v.x=r[S+0],v.y=r[S+1],v.z=r[S+2],v.normalize().multiplyScalar(y),r[S+0]=v.x,r[S+1]=v.y,r[S+2]=v.z}function u(){const y=new C;for(let v=0;v<r.length;v+=3){y.x=r[v+0],y.y=r[v+1],y.z=r[v+2];const S=m(y)/2/Math.PI+.5,R=f(y)/Math.PI+.5;a.push(S,1-R)}g(),h()}function h(){for(let y=0;y<a.length;y+=6){const v=a[y+0],S=a[y+2],R=a[y+4],A=Math.max(v,S,R),w=Math.min(v,S,R);A>.9&&w<.1&&(v<.2&&(a[y+0]+=1),S<.2&&(a[y+2]+=1),R<.2&&(a[y+4]+=1))}}function d(y){r.push(y.x,y.y,y.z)}function p(y,v){const S=y*3;v.x=e[S+0],v.y=e[S+1],v.z=e[S+2]}function g(){const y=new C,v=new C,S=new C,R=new C,A=new le,w=new le,O=new le;for(let M=0,E=0;M<r.length;M+=9,E+=6){y.set(r[M+0],r[M+1],r[M+2]),v.set(r[M+3],r[M+4],r[M+5]),S.set(r[M+6],r[M+7],r[M+8]),A.set(a[E+0],a[E+1]),w.set(a[E+2],a[E+3]),O.set(a[E+4],a[E+5]),R.copy(y).add(v).add(S).divideScalar(3);const N=m(R);_(A,E+0,y,N),_(w,E+2,v,N),_(O,E+4,S,N)}}function _(y,v,S,R){R<0&&y.x===1&&(a[v]=y.x-1),S.x===0&&S.z===0&&(a[v]=R/2/Math.PI+.5)}function m(y){return Math.atan2(y.z,-y.x)}function f(y){return Math.atan2(-y.y,Math.sqrt(y.x*y.x+y.z*y.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new io(e.vertices,e.indices,e.radius,e.details)}}class $c extends Ia{constructor(e){super(e),this.uuid=Wi(),this.type="Shape",this.holes=[]}getPointsHoles(e){const t=[];for(let n=0,s=this.holes.length;n<s;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){const s=e.holes[t];this.holes.push(s.clone())}return this}toJSON(){const e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){const s=this.holes[t];e.holes.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){const s=e.holes[t];this.holes.push(new Ia().fromJSON(s))}return this}}const k0={triangulate:function(i,e,t=2){const n=e&&e.length,s=n?e[0]*t:i.length;let r=jc(i,0,s,t,!0);const a=[];if(!r||r.next===r.prev)return a;let o,l,c,u,h,d,p;if(n&&(r=X0(i,e,r,t)),i.length>80*t){o=c=i[0],l=u=i[1];for(let g=t;g<s;g+=t)h=i[g],d=i[g+1],h<o&&(o=h),d<l&&(l=d),h>c&&(c=h),d>u&&(u=d);p=Math.max(c-o,u-l),p=p!==0?32767/p:0}return ps(r,a,t,o,l,p,0),a}};function jc(i,e,t,n,s){let r,a;if(s===ig(i,e,t,n)>0)for(r=e;r<t;r+=n)a=Vl(r,i[r],i[r+1],a);else for(r=t-n;r>=e;r-=n)a=Vl(r,i[r],i[r+1],a);return a&&Mr(a,a.next)&&(gs(a),a=a.next),a}function ri(i,e){if(!i)return i;e||(e=i);let t=i,n;do if(n=!1,!t.steiner&&(Mr(t,t.next)||pt(t.prev,t,t.next)===0)){if(gs(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function ps(i,e,t,n,s,r,a){if(!i)return;!a&&r&&Z0(i,n,s,r);let o=i,l,c;for(;i.prev!==i.next;){if(l=i.prev,c=i.next,r?V0(i,n,s,r):z0(i)){e.push(l.i/t|0),e.push(i.i/t|0),e.push(c.i/t|0),gs(i),i=c.next,o=c.next;continue}if(i=c,i===o){a?a===1?(i=W0(ri(i),e,t),ps(i,e,t,n,s,r,2)):a===2&&q0(i,e,t,n,s,r):ps(ri(i),e,t,n,s,r,1);break}}}function z0(i){const e=i.prev,t=i,n=i.next;if(pt(e,t,n)>=0)return!1;const s=e.x,r=t.x,a=n.x,o=e.y,l=t.y,c=n.y,u=s<r?s<a?s:a:r<a?r:a,h=o<l?o<c?o:c:l<c?l:c,d=s>r?s>a?s:a:r>a?r:a,p=o>l?o>c?o:c:l>c?l:c;let g=n.next;for(;g!==e;){if(g.x>=u&&g.x<=d&&g.y>=h&&g.y<=p&&Di(s,o,r,l,a,c,g.x,g.y)&&pt(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function V0(i,e,t,n){const s=i.prev,r=i,a=i.next;if(pt(s,r,a)>=0)return!1;const o=s.x,l=r.x,c=a.x,u=s.y,h=r.y,d=a.y,p=o<l?o<c?o:c:l<c?l:c,g=u<h?u<d?u:d:h<d?h:d,_=o>l?o>c?o:c:l>c?l:c,m=u>h?u>d?u:d:h>d?h:d,f=Da(p,g,e,t,n),y=Da(_,m,e,t,n);let v=i.prevZ,S=i.nextZ;for(;v&&v.z>=f&&S&&S.z<=y;){if(v.x>=p&&v.x<=_&&v.y>=g&&v.y<=m&&v!==s&&v!==a&&Di(o,u,l,h,c,d,v.x,v.y)&&pt(v.prev,v,v.next)>=0||(v=v.prevZ,S.x>=p&&S.x<=_&&S.y>=g&&S.y<=m&&S!==s&&S!==a&&Di(o,u,l,h,c,d,S.x,S.y)&&pt(S.prev,S,S.next)>=0))return!1;S=S.nextZ}for(;v&&v.z>=f;){if(v.x>=p&&v.x<=_&&v.y>=g&&v.y<=m&&v!==s&&v!==a&&Di(o,u,l,h,c,d,v.x,v.y)&&pt(v.prev,v,v.next)>=0)return!1;v=v.prevZ}for(;S&&S.z<=y;){if(S.x>=p&&S.x<=_&&S.y>=g&&S.y<=m&&S!==s&&S!==a&&Di(o,u,l,h,c,d,S.x,S.y)&&pt(S.prev,S,S.next)>=0)return!1;S=S.nextZ}return!0}function W0(i,e,t){let n=i;do{const s=n.prev,r=n.next.next;!Mr(s,r)&&Zc(s,n,n.next,r)&&ms(s,r)&&ms(r,s)&&(e.push(s.i/t|0),e.push(n.i/t|0),e.push(r.i/t|0),gs(n),gs(n.next),n=i=r),n=n.next}while(n!==i);return ri(n)}function q0(i,e,t,n,s,r){let a=i;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&eg(a,o)){let l=Jc(a,o);a=ri(a,a.next),l=ri(l,l.next),ps(a,e,t,n,s,r,0),ps(l,e,t,n,s,r,0);return}o=o.next}a=a.next}while(a!==i)}function X0(i,e,t,n){const s=[];let r,a,o,l,c;for(r=0,a=e.length;r<a;r++)o=e[r]*n,l=r<a-1?e[r+1]*n:i.length,c=jc(i,o,l,n,!1),c===c.next&&(c.steiner=!0),s.push(Q0(c));for(s.sort(K0),r=0;r<s.length;r++)t=Y0(s[r],t);return t}function K0(i,e){return i.x-e.x}function Y0(i,e){const t=$0(i,e);if(!t)return e;const n=Jc(t,i);return ri(n,n.next),ri(t,t.next)}function $0(i,e){let t=e,n=-1/0,s;const r=i.x,a=i.y;do{if(a<=t.y&&a>=t.next.y&&t.next.y!==t.y){const d=t.x+(a-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(d<=r&&d>n&&(n=d,s=t.x<t.next.x?t:t.next,d===r))return s}t=t.next}while(t!==e);if(!s)return null;const o=s,l=s.x,c=s.y;let u=1/0,h;t=s;do r>=t.x&&t.x>=l&&r!==t.x&&Di(a<c?r:n,a,l,c,a<c?n:r,a,t.x,t.y)&&(h=Math.abs(a-t.y)/(r-t.x),ms(t,i)&&(h<u||h===u&&(t.x>s.x||t.x===s.x&&j0(s,t)))&&(s=t,u=h)),t=t.next;while(t!==o);return s}function j0(i,e){return pt(i.prev,i,e.prev)<0&&pt(e.next,i,i.next)<0}function Z0(i,e,t,n){let s=i;do s.z===0&&(s.z=Da(s.x,s.y,e,t,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,J0(s)}function J0(i){let e,t,n,s,r,a,o,l,c=1;do{for(t=i,i=null,r=null,a=0;t;){for(a++,n=t,o=0,e=0;e<c&&(o++,n=n.nextZ,!!n);e++);for(l=c;o>0||l>0&&n;)o!==0&&(l===0||!n||t.z<=n.z)?(s=t,t=t.nextZ,o--):(s=n,n=n.nextZ,l--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;t=n}r.nextZ=null,c*=2}while(a>1);return i}function Da(i,e,t,n,s){return i=(i-t)*s|0,e=(e-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,i|e<<1}function Q0(i){let e=i,t=i;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==i);return t}function Di(i,e,t,n,s,r,a,o){return(s-a)*(e-o)>=(i-a)*(r-o)&&(i-a)*(n-o)>=(t-a)*(e-o)&&(t-a)*(r-o)>=(s-a)*(n-o)}function eg(i,e){return i.next.i!==e.i&&i.prev.i!==e.i&&!tg(i,e)&&(ms(i,e)&&ms(e,i)&&ng(i,e)&&(pt(i.prev,i,e.prev)||pt(i,e.prev,e))||Mr(i,e)&&pt(i.prev,i,i.next)>0&&pt(e.prev,e,e.next)>0)}function pt(i,e,t){return(e.y-i.y)*(t.x-e.x)-(e.x-i.x)*(t.y-e.y)}function Mr(i,e){return i.x===e.x&&i.y===e.y}function Zc(i,e,t,n){const s=Js(pt(i,e,t)),r=Js(pt(i,e,n)),a=Js(pt(t,n,i)),o=Js(pt(t,n,e));return!!(s!==r&&a!==o||s===0&&Zs(i,t,e)||r===0&&Zs(i,n,e)||a===0&&Zs(t,i,n)||o===0&&Zs(t,e,n))}function Zs(i,e,t){return e.x<=Math.max(i.x,t.x)&&e.x>=Math.min(i.x,t.x)&&e.y<=Math.max(i.y,t.y)&&e.y>=Math.min(i.y,t.y)}function Js(i){return i>0?1:i<0?-1:0}function tg(i,e){let t=i;do{if(t.i!==i.i&&t.next.i!==i.i&&t.i!==e.i&&t.next.i!==e.i&&Zc(t,t.next,i,e))return!0;t=t.next}while(t!==i);return!1}function ms(i,e){return pt(i.prev,i,i.next)<0?pt(i,e,i.next)>=0&&pt(i,i.prev,e)>=0:pt(i,e,i.prev)<0||pt(i,i.next,e)<0}function ng(i,e){let t=i,n=!1;const s=(i.x+e.x)/2,r=(i.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&s<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==i);return n}function Jc(i,e){const t=new Oa(i.i,i.x,i.y),n=new Oa(e.i,e.x,e.y),s=i.next,r=e.prev;return i.next=e,e.prev=i,t.next=s,s.prev=t,n.next=t,t.prev=n,r.next=n,n.prev=r,n}function Vl(i,e,t,n){const s=new Oa(i,e,t);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function gs(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function Oa(i,e,t){this.i=i,this.x=e,this.y=t,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function ig(i,e,t,n){let s=0;for(let r=e,a=t-n;r<t;r+=n)s+=(i[a]-i[r])*(i[r+1]+i[a+1]),a=r;return s}class hs{static area(e){const t=e.length;let n=0;for(let s=t-1,r=0;r<t;s=r++)n+=e[s].x*e[r].y-e[r].x*e[s].y;return n*.5}static isClockWise(e){return hs.area(e)<0}static triangulateShape(e,t){const n=[],s=[],r=[];Wl(e),ql(n,e);let a=e.length;t.forEach(Wl);for(let l=0;l<t.length;l++)s.push(a),a+=t[l].length,ql(n,t[l]);const o=k0.triangulate(n,s);for(let l=0;l<o.length;l+=3)r.push(o.slice(l,l+3));return r}}function Wl(i){const e=i.length;e>2&&i[e-1].equals(i[0])&&i.pop()}function ql(i,e){for(let t=0;t<e.length;t++)i.push(e[t].x),i.push(e[t].y)}class so extends it{constructor(e=new $c([new le(.5,.5),new le(-.5,.5),new le(-.5,-.5),new le(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];const n=this,s=[],r=[];for(let o=0,l=e.length;o<l;o++){const c=e[o];a(c)}this.setAttribute("position",new Ye(s,3)),this.setAttribute("uv",new Ye(r,2)),this.computeVertexNormals();function a(o){const l=[],c=t.curveSegments!==void 0?t.curveSegments:12,u=t.steps!==void 0?t.steps:1,h=t.depth!==void 0?t.depth:1;let d=t.bevelEnabled!==void 0?t.bevelEnabled:!0,p=t.bevelThickness!==void 0?t.bevelThickness:.2,g=t.bevelSize!==void 0?t.bevelSize:p-.1,_=t.bevelOffset!==void 0?t.bevelOffset:0,m=t.bevelSegments!==void 0?t.bevelSegments:3;const f=t.extrudePath,y=t.UVGenerator!==void 0?t.UVGenerator:sg;let v,S=!1,R,A,w,O;f&&(v=f.getSpacedPoints(u),S=!0,d=!1,R=f.computeFrenetFrames(u,!1),A=new C,w=new C,O=new C),d||(m=0,p=0,g=0,_=0);const M=o.extractPoints(c);let E=M.shape;const N=M.holes;if(!hs.isClockWise(E)){E=E.reverse();for(let L=0,ce=N.length;L<ce;L++){const K=N[L];hs.isClockWise(K)&&(N[L]=K.reverse())}}const se=hs.triangulateShape(E,N),P=E;for(let L=0,ce=N.length;L<ce;L++){const K=N[L];E=E.concat(K)}function G(L,ce,K){return ce||console.error("THREE.ExtrudeGeometry: vec does not exist"),L.clone().addScaledVector(ce,K)}const k=E.length,j=se.length;function Z(L,ce,K){let ae,Y,we;const ue=L.x-ce.x,b=L.y-ce.y,x=K.x-L.x,U=K.y-L.y,Q=ue*ue+b*b,J=ue*U-b*x;if(Math.abs(J)>Number.EPSILON){const ne=Math.sqrt(Q),Me=Math.sqrt(x*x+U*U),de=ce.x-b/ne,fe=ce.y+ue/ne,Te=K.x-U/Me,Ie=K.y+x/Me,oe=((Te-de)*U-(Ie-fe)*x)/(ue*U-b*x);ae=de+ue*oe-L.x,Y=fe+b*oe-L.y;const $e=ae*ae+Y*Y;if($e<=2)return new le(ae,Y);we=Math.sqrt($e/2)}else{let ne=!1;ue>Number.EPSILON?x>Number.EPSILON&&(ne=!0):ue<-Number.EPSILON?x<-Number.EPSILON&&(ne=!0):Math.sign(b)===Math.sign(U)&&(ne=!0),ne?(ae=-b,Y=ue,we=Math.sqrt(Q)):(ae=ue,Y=b,we=Math.sqrt(Q/2))}return new le(ae/we,Y/we)}const ee=[];for(let L=0,ce=P.length,K=ce-1,ae=L+1;L<ce;L++,K++,ae++)K===ce&&(K=0),ae===ce&&(ae=0),ee[L]=Z(P[L],P[K],P[ae]);const q=[];let X,re=ee.concat();for(let L=0,ce=N.length;L<ce;L++){const K=N[L];X=[];for(let ae=0,Y=K.length,we=Y-1,ue=ae+1;ae<Y;ae++,we++,ue++)we===Y&&(we=0),ue===Y&&(ue=0),X[ae]=Z(K[ae],K[we],K[ue]);q.push(X),re=re.concat(X)}for(let L=0;L<m;L++){const ce=L/m,K=p*Math.cos(ce*Math.PI/2),ae=g*Math.sin(ce*Math.PI/2)+_;for(let Y=0,we=P.length;Y<we;Y++){const ue=G(P[Y],ee[Y],ae);D(ue.x,ue.y,-K)}for(let Y=0,we=N.length;Y<we;Y++){const ue=N[Y];X=q[Y];for(let b=0,x=ue.length;b<x;b++){const U=G(ue[b],X[b],ae);D(U.x,U.y,-K)}}}const B=g+_;for(let L=0;L<k;L++){const ce=d?G(E[L],re[L],B):E[L];S?(w.copy(R.normals[0]).multiplyScalar(ce.x),A.copy(R.binormals[0]).multiplyScalar(ce.y),O.copy(v[0]).add(w).add(A),D(O.x,O.y,O.z)):D(ce.x,ce.y,0)}for(let L=1;L<=u;L++)for(let ce=0;ce<k;ce++){const K=d?G(E[ce],re[ce],B):E[ce];S?(w.copy(R.normals[L]).multiplyScalar(K.x),A.copy(R.binormals[L]).multiplyScalar(K.y),O.copy(v[L]).add(w).add(A),D(O.x,O.y,O.z)):D(K.x,K.y,h/u*L)}for(let L=m-1;L>=0;L--){const ce=L/m,K=p*Math.cos(ce*Math.PI/2),ae=g*Math.sin(ce*Math.PI/2)+_;for(let Y=0,we=P.length;Y<we;Y++){const ue=G(P[Y],ee[Y],ae);D(ue.x,ue.y,h+K)}for(let Y=0,we=N.length;Y<we;Y++){const ue=N[Y];X=q[Y];for(let b=0,x=ue.length;b<x;b++){const U=G(ue[b],X[b],ae);S?D(U.x,U.y+v[u-1].y,v[u-1].x+K):D(U.x,U.y,h+K)}}}ie(),pe();function ie(){const L=s.length/3;if(d){let ce=0,K=k*ce;for(let ae=0;ae<j;ae++){const Y=se[ae];me(Y[2]+K,Y[1]+K,Y[0]+K)}ce=u+m*2,K=k*ce;for(let ae=0;ae<j;ae++){const Y=se[ae];me(Y[0]+K,Y[1]+K,Y[2]+K)}}else{for(let ce=0;ce<j;ce++){const K=se[ce];me(K[2],K[1],K[0])}for(let ce=0;ce<j;ce++){const K=se[ce];me(K[0]+k*u,K[1]+k*u,K[2]+k*u)}}n.addGroup(L,s.length/3-L,0)}function pe(){const L=s.length/3;let ce=0;Se(P,ce),ce+=P.length;for(let K=0,ae=N.length;K<ae;K++){const Y=N[K];Se(Y,ce),ce+=Y.length}n.addGroup(L,s.length/3-L,1)}function Se(L,ce){let K=L.length;for(;--K>=0;){const ae=K;let Y=K-1;Y<0&&(Y=L.length-1);for(let we=0,ue=u+m*2;we<ue;we++){const b=k*we,x=k*(we+1),U=ce+ae+b,Q=ce+Y+b,J=ce+Y+x,ne=ce+ae+x;ve(U,Q,J,ne)}}}function D(L,ce,K){l.push(L),l.push(ce),l.push(K)}function me(L,ce,K){he(L),he(ce),he(K);const ae=s.length/3,Y=y.generateTopUV(n,s,ae-3,ae-2,ae-1);Ee(Y[0]),Ee(Y[1]),Ee(Y[2])}function ve(L,ce,K,ae){he(L),he(ce),he(ae),he(ce),he(K),he(ae);const Y=s.length/3,we=y.generateSideWallUV(n,s,Y-6,Y-3,Y-2,Y-1);Ee(we[0]),Ee(we[1]),Ee(we[3]),Ee(we[1]),Ee(we[2]),Ee(we[3])}function he(L){s.push(l[L*3+0]),s.push(l[L*3+1]),s.push(l[L*3+2])}function Ee(L){r.push(L.x),r.push(L.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),t=this.parameters.shapes,n=this.parameters.options;return rg(t,n,e)}static fromJSON(e,t){const n=[];for(let r=0,a=e.shapes.length;r<a;r++){const o=t[e.shapes[r]];n.push(o)}const s=e.options.extrudePath;return s!==void 0&&(e.options.extrudePath=new Pa[s.type]().fromJSON(s)),new so(n,e.options)}}const sg={generateTopUV:function(i,e,t,n,s){const r=e[t*3],a=e[t*3+1],o=e[n*3],l=e[n*3+1],c=e[s*3],u=e[s*3+1];return[new le(r,a),new le(o,l),new le(c,u)]},generateSideWallUV:function(i,e,t,n,s,r){const a=e[t*3],o=e[t*3+1],l=e[t*3+2],c=e[n*3],u=e[n*3+1],h=e[n*3+2],d=e[s*3],p=e[s*3+1],g=e[s*3+2],_=e[r*3],m=e[r*3+1],f=e[r*3+2];return Math.abs(o-u)<Math.abs(a-c)?[new le(a,1-l),new le(c,1-h),new le(d,1-g),new le(_,1-f)]:[new le(o,1-l),new le(u,1-h),new le(p,1-g),new le(m,1-f)]}};function rg(i,e,t){if(t.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){const r=i[n];t.shapes.push(r.uuid)}else t.shapes.push(i.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}class xs extends io{constructor(e=1,t=0){const n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new xs(e.radius,e.detail)}}class kt extends it{constructor(e=.5,t=1,n=32,s=1,r=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:s,thetaStart:r,thetaLength:a},n=Math.max(3,n),s=Math.max(1,s);const o=[],l=[],c=[],u=[];let h=e;const d=(t-e)/s,p=new C,g=new le;for(let _=0;_<=s;_++){for(let m=0;m<=n;m++){const f=r+m/n*a;p.x=h*Math.cos(f),p.y=h*Math.sin(f),l.push(p.x,p.y,p.z),c.push(0,0,1),g.x=(p.x/t+1)/2,g.y=(p.y/t+1)/2,u.push(g.x,g.y)}h+=d}for(let _=0;_<s;_++){const m=_*(n+1);for(let f=0;f<n;f++){const y=f+m,v=y,S=y+n+1,R=y+n+2,A=y+1;o.push(v,S,A),o.push(S,R,A)}}this.setIndex(o),this.setAttribute("position",new Ye(l,3)),this.setAttribute("normal",new Ye(c,3)),this.setAttribute("uv",new Ye(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new kt(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}class Ze extends it{constructor(e=1,t=32,n=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const l=Math.min(a+o,Math.PI);let c=0;const u=[],h=new C,d=new C,p=[],g=[],_=[],m=[];for(let f=0;f<=n;f++){const y=[],v=f/n;let S=0;f===0&&a===0?S=.5/t:f===n&&l===Math.PI&&(S=-.5/t);for(let R=0;R<=t;R++){const A=R/t;h.x=-e*Math.cos(s+A*r)*Math.sin(a+v*o),h.y=e*Math.cos(a+v*o),h.z=e*Math.sin(s+A*r)*Math.sin(a+v*o),g.push(h.x,h.y,h.z),d.copy(h).normalize(),_.push(d.x,d.y,d.z),m.push(A+S,1-v),y.push(c++)}u.push(y)}for(let f=0;f<n;f++)for(let y=0;y<t;y++){const v=u[f][y+1],S=u[f][y],R=u[f+1][y],A=u[f+1][y+1];(f!==0||a>0)&&p.push(v,S,A),(f!==n-1||l<Math.PI)&&p.push(S,R,A)}this.setIndex(p),this.setAttribute("position",new Ye(g,3)),this.setAttribute("normal",new Ye(_,3)),this.setAttribute("uv",new Ye(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ze(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class An extends it{constructor(e=1,t=.4,n=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:s,arc:r},n=Math.floor(n),s=Math.floor(s);const a=[],o=[],l=[],c=[],u=new C,h=new C,d=new C;for(let p=0;p<=n;p++)for(let g=0;g<=s;g++){const _=g/s*r,m=p/n*Math.PI*2;h.x=(e+t*Math.cos(m))*Math.cos(_),h.y=(e+t*Math.cos(m))*Math.sin(_),h.z=t*Math.sin(m),o.push(h.x,h.y,h.z),u.x=e*Math.cos(_),u.y=e*Math.sin(_),d.subVectors(h,u).normalize(),l.push(d.x,d.y,d.z),c.push(g/s),c.push(p/n)}for(let p=1;p<=n;p++)for(let g=1;g<=s;g++){const _=(s+1)*p+g-1,m=(s+1)*(p-1)+g-1,f=(s+1)*(p-1)+g,y=(s+1)*p+g;a.push(_,m,y),a.push(m,f,y)}this.setIndex(a),this.setAttribute("position",new Ye(o,3)),this.setAttribute("normal",new Ye(l,3)),this.setAttribute("uv",new Ye(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new An(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}class Je extends li{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Pe(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Pe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ec,this.normalScale=new le(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class ag extends Je{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new le(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Pt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Pe(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Pe(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Pe(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class ro extends Et{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Pe(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}}const ca=new lt,Xl=new C,Kl=new C;class Qc{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new le(512,512),this.map=null,this.mapPass=null,this.matrix=new lt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new $a,this._frameExtents=new le(1,1),this._viewportCount=1,this._viewports=[new dt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;Xl.setFromMatrixPosition(e.matrixWorld),t.position.copy(Xl),Kl.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Kl),t.updateMatrixWorld(),ca.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ca),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(ca)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const Yl=new lt,es=new C,ua=new C;class og extends Qc{constructor(){super(new Wt(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new le(4,2),this._viewportCount=6,this._viewports=[new dt(2,1,1,1),new dt(0,1,1,1),new dt(3,1,1,1),new dt(1,1,1,1),new dt(3,0,1,1),new dt(1,0,1,1)],this._cubeDirections=[new C(1,0,0),new C(-1,0,0),new C(0,0,1),new C(0,0,-1),new C(0,1,0),new C(0,-1,0)],this._cubeUps=[new C(0,1,0),new C(0,1,0),new C(0,1,0),new C(0,1,0),new C(0,0,1),new C(0,0,-1)]}updateMatrices(e,t=0){const n=this.camera,s=this.matrix,r=e.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),es.setFromMatrixPosition(e.matrixWorld),n.position.copy(es),ua.copy(n.position),ua.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(ua),n.updateMatrixWorld(),s.makeTranslation(-es.x,-es.y,-es.z),Yl.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Yl)}}class kn extends ro{constructor(e,t,n=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new og}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class lg extends Qc{constructor(){super(new ja(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class cg extends ro{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Et.DEFAULT_UP),this.updateMatrix(),this.target=new Et,this.shadow=new lg}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class eu extends ro{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class tu{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=$l(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=$l();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function $l(){return(typeof performance>"u"?Date:performance).now()}class ug{constructor(e,t,n=0,s=1/0){this.ray=new yr(e,t),this.near=n,this.far=s,this.camera=null,this.layers=new Ya,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}intersectObject(e,t=!0,n=[]){return Na(e,this,n,t),n.sort(jl),n}intersectObjects(e,t=!0,n=[]){for(let s=0,r=e.length;s<r;s++)Na(e[s],this,n,t);return n.sort(jl),n}}function jl(i,e){return i.distance-e.distance}function Na(i,e,t,n){if(i.layers.test(e.layers)&&i.raycast(e,t),n===!0){const s=i.children;for(let r=0,a=s.length;r<a;r++)Na(s[r],e,t,!0)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:qa}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=qa);class hg{constructor({canvas:e,onContextLost:t,onContextRestored:n}){if(!e)throw new Error("Engine requires a canvas element");this.canvas=e,this._onContextLost=t??(()=>{}),this._onContextRestored=n??(()=>{}),this._disposed=!1,this._trackedResources=[],this._frameCallbacks=[],this.renderer=this._createRenderer(e),this.scene=new Wc,this.camera=new Wt(60,this._aspect(),.01,5e6),this.camera.position.set(0,1.4,6),this._resizeHandler=()=>this.resize(),window.addEventListener("resize",this._resizeHandler),this._clock=new tu,this._rafId=null}_createRenderer(e){if(!nu())throw new Error("WebGL is not available in this browser");const t=new Vc({canvas:e,antialias:!0,powerPreference:"high-performance",alpha:!1});return t.setPixelRatio(Math.min(window.devicePixelRatio||1,2)),t.setSize(window.innerWidth,window.innerHeight,!1),t.outputColorSpace=xt,t.toneMapping=pc,t.toneMappingExposure=1.05,e.addEventListener("webglcontextlost",n=>{n.preventDefault(),this.stop(),this._onContextLost("WebGL context was lost.")}),e.addEventListener("webglcontextrestored",()=>{this._onContextRestored()}),t}_aspect(){return Math.max(window.innerWidth,1)/Math.max(window.innerHeight,1)}resize(){if(this._disposed)return;const e=window.innerWidth,t=window.innerHeight;this.camera.aspect=e/Math.max(t,1),this.camera.updateProjectionMatrix(),this.renderer.setSize(e,t,!1);for(const n of this._resizeCallbacks??[])n(e,t)}onResize(e){this._resizeCallbacks=this._resizeCallbacks??[],this._resizeCallbacks.push(e)}onTick(e){return this._frameCallbacks.push(e),()=>{const t=this._frameCallbacks.indexOf(e);t>=0&&this._frameCallbacks.splice(t,1)}}track(e){return this._trackedResources.push(e),e}start(){if(this._rafId!==null)return;const e=()=>{this._rafId=requestAnimationFrame(e);const t=Math.min(this._clock.getDelta(),.1),n=this._clock.getElapsedTime();for(const s of this._frameCallbacks)try{s(t,n)}catch(r){console.error("[Engine] frame callback failed:",r)}this.renderer.render(this.scene,this.camera)};this._rafId=requestAnimationFrame(e)}stop(){this._rafId!==null&&(cancelAnimationFrame(this._rafId),this._rafId=null)}dispose(){if(!this._disposed){this._disposed=!0,this.stop(),window.removeEventListener("resize",this._resizeHandler),this.scene.traverse(e=>{if(e.geometry&&e.geometry.dispose?.(),e.material){const t=Array.isArray(e.material)?e.material:[e.material];for(const n of t)dg(n)}});for(const e of this._trackedResources)e?.dispose?.();this.renderer.dispose()}}}function dg(i){if(i){for(const e of Object.keys(i)){const t=i[e];t&&t.isTexture&&t.dispose()}i.dispose?.()}}function nu(){try{const i=document.createElement("canvas");return!!(window.WebGLRenderingContext&&(i.getContext("webgl2")||i.getContext("webgl")||i.getContext("experimental-webgl")))}catch{return!1}}const iu={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;


		}`};class Ss{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const fg=new ja(-1,1,1,-1,0,1);class pg extends it{constructor(){super(),this.setAttribute("position",new Ye([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new Ye([0,2,0,0,2,0],2))}}const mg=new pg;class su{constructor(e){this._mesh=new $(mg,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,fg)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}}class gg extends Ss{constructor(e,t){super(),this.textureID=t!==void 0?t:"tDiffuse",e instanceof It?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=fr.clone(e.uniforms),this.material=new It({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this.fsQuad=new su(this.material)}render(e,t,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this.fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}class Zl extends Ss{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,n){const s=e.getContext(),r=e.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let a,o;this.inverse?(a=0,o=1):(a=1,o=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(s.REPLACE,s.REPLACE,s.REPLACE),r.buffers.stencil.setFunc(s.ALWAYS,a,4294967295),r.buffers.stencil.setClear(o),r.buffers.stencil.setLocked(!0),e.setRenderTarget(n),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(s.EQUAL,1,4294967295),r.buffers.stencil.setOp(s.KEEP,s.KEEP,s.KEEP),r.buffers.stencil.setLocked(!0)}}class _g extends Ss{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}}class vg{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){const n=e.getSize(new le);this._width=n.width,this._height=n.height,t=new cn(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:En}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new gg(iu),this.copyPass.material.blending=bn,this.clock=new tu}swapBuffers(){const e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){const t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){e===void 0&&(e=this.clock.getDelta());const t=this.renderer.getRenderTarget();let n=!1;for(let s=0,r=this.passes.length;s<r;s++){const a=this.passes[s];if(a.enabled!==!1){if(a.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(s),a.render(this.renderer,this.writeBuffer,this.readBuffer,e,n),a.needsSwap){if(n){const o=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(o.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),l.setFunc(o.EQUAL,1,4294967295)}this.swapBuffers()}Zl!==void 0&&(a instanceof Zl?n=!0:a instanceof _g&&(n=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){const t=this.renderer.getSize(new le);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;const n=this._width*this._pixelRatio,s=this._height*this._pixelRatio;this.renderTarget1.setSize(n,s),this.renderTarget2.setSize(n,s);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(n,s)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class yg extends Ss{constructor(e,t,n=null,s=null,r=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=n,this.clearColor=s,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new Pe}render(e,t,n){const s=e.autoClear;e.autoClear=!1;let r,a;this.overrideMaterial!==null&&(a=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor)),this.clearAlpha!==null&&(r=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=a),e.autoClear=s}}const xg={uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new Pe(0)},defaultOpacity:{value:0}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform vec3 defaultColor;
		uniform float defaultOpacity;
		uniform float luminosityThreshold;
		uniform float smoothWidth;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );

			vec3 luma = vec3( 0.299, 0.587, 0.114 );

			float v = dot( texel.xyz, luma );

			vec4 outputColor = vec4( defaultColor.rgb, defaultOpacity );

			float alpha = smoothstep( luminosityThreshold, luminosityThreshold + smoothWidth, v );

			gl_FragColor = mix( outputColor, texel, alpha );

		}`};class zi extends Ss{constructor(e,t,n,s){super(),this.strength=t!==void 0?t:1,this.radius=n,this.threshold=s,this.resolution=e!==void 0?new le(e.x,e.y):new le(256,256),this.clearColor=new Pe(0,0,0),this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let r=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);this.renderTargetBright=new cn(r,a,{type:En}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let h=0;h<this.nMips;h++){const d=new cn(r,a,{type:En});d.texture.name="UnrealBloomPass.h"+h,d.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(d);const p=new cn(r,a,{type:En});p.texture.name="UnrealBloomPass.v"+h,p.texture.generateMipmaps=!1,this.renderTargetsVertical.push(p),r=Math.round(r/2),a=Math.round(a/2)}const o=xg;this.highPassUniforms=fr.clone(o.uniforms),this.highPassUniforms.luminosityThreshold.value=s,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new It({uniforms:this.highPassUniforms,vertexShader:o.vertexShader,fragmentShader:o.fragmentShader}),this.separableBlurMaterials=[];const l=[3,5,7,9,11];r=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);for(let h=0;h<this.nMips;h++)this.separableBlurMaterials.push(this.getSeperableBlurMaterial(l[h])),this.separableBlurMaterials[h].uniforms.invSize.value=new le(1/r,1/a),r=Math.round(r/2),a=Math.round(a/2);this.compositeMaterial=this.getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=.1;const c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new C(1,1,1),new C(1,1,1),new C(1,1,1),new C(1,1,1),new C(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors;const u=iu;this.copyUniforms=fr.clone(u.uniforms),this.blendMaterial=new It({uniforms:this.copyUniforms,vertexShader:u.vertexShader,fragmentShader:u.fragmentShader,blending:ot,depthTest:!1,depthWrite:!1,transparent:!0}),this.enabled=!0,this.needsSwap=!1,this._oldClearColor=new Pe,this.oldClearAlpha=1,this.basic=new Be,this.fsQuad=new su(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this.basic.dispose(),this.fsQuad.dispose()}setSize(e,t){let n=Math.round(e/2),s=Math.round(t/2);this.renderTargetBright.setSize(n,s);for(let r=0;r<this.nMips;r++)this.renderTargetsHorizontal[r].setSize(n,s),this.renderTargetsVertical[r].setSize(n,s),this.separableBlurMaterials[r].uniforms.invSize.value=new le(1/n,1/s),n=Math.round(n/2),s=Math.round(s/2)}render(e,t,n,s,r){e.getClearColor(this._oldClearColor),this.oldClearAlpha=e.getClearAlpha();const a=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),r&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this.fsQuad.material=this.basic,this.basic.map=n.texture,e.setRenderTarget(null),e.clear(),this.fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this.fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this.fsQuad.render(e);let o=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this.fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=o.texture,this.separableBlurMaterials[l].uniforms.direction.value=zi.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[l]),e.clear(),this.fsQuad.render(e),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=zi.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[l]),e.clear(),this.fsQuad.render(e),o=this.renderTargetsVertical[l];this.fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this.fsQuad.render(e),this.fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,r&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(n),this.fsQuad.render(e)),e.setClearColor(this._oldClearColor,this.oldClearAlpha),e.autoClear=a}getSeperableBlurMaterial(e){const t=[];for(let n=0;n<e;n++)t.push(.39894*Math.exp(-.5*n*n/(e*e))/e);return new It({defines:{KERNEL_RADIUS:e},uniforms:{colorTexture:{value:null},invSize:{value:new le(.5,.5)},direction:{value:new le(.5,.5)},gaussianCoefficients:{value:t}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`#include <common>
				varying vec2 vUv;
				uniform sampler2D colorTexture;
				uniform vec2 invSize;
				uniform vec2 direction;
				uniform float gaussianCoefficients[KERNEL_RADIUS];

				void main() {
					float weightSum = gaussianCoefficients[0];
					vec3 diffuseSum = texture2D( colorTexture, vUv ).rgb * weightSum;
					for( int i = 1; i < KERNEL_RADIUS; i ++ ) {
						float x = float(i);
						float w = gaussianCoefficients[i];
						vec2 uvOffset = direction * invSize * x;
						vec3 sample1 = texture2D( colorTexture, vUv + uvOffset ).rgb;
						vec3 sample2 = texture2D( colorTexture, vUv - uvOffset ).rgb;
						diffuseSum += (sample1 + sample2) * w;
						weightSum += 2.0 * w;
					}
					gl_FragColor = vec4(diffuseSum/weightSum, 1.0);
				}`})}getCompositeMaterial(e){return new It({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`varying vec2 vUv;
				uniform sampler2D blurTexture1;
				uniform sampler2D blurTexture2;
				uniform sampler2D blurTexture3;
				uniform sampler2D blurTexture4;
				uniform sampler2D blurTexture5;
				uniform float bloomStrength;
				uniform float bloomRadius;
				uniform float bloomFactors[NUM_MIPS];
				uniform vec3 bloomTintColors[NUM_MIPS];

				float lerpBloomFactor(const in float factor) {
					float mirrorFactor = 1.2 - factor;
					return mix(factor, mirrorFactor, bloomRadius);
				}

				void main() {
					gl_FragColor = bloomStrength * ( lerpBloomFactor(bloomFactors[0]) * vec4(bloomTintColors[0], 1.0) * texture2D(blurTexture1, vUv) +
						lerpBloomFactor(bloomFactors[1]) * vec4(bloomTintColors[1], 1.0) * texture2D(blurTexture2, vUv) +
						lerpBloomFactor(bloomFactors[2]) * vec4(bloomTintColors[2], 1.0) * texture2D(blurTexture3, vUv) +
						lerpBloomFactor(bloomFactors[3]) * vec4(bloomTintColors[3], 1.0) * texture2D(blurTexture4, vUv) +
						lerpBloomFactor(bloomFactors[4]) * vec4(bloomTintColors[4], 1.0) * texture2D(blurTexture5, vUv) );
				}`})}}zi.BlurDirectionX=new le(1,0);zi.BlurDirectionY=new le(0,1);function Sg(i,e,t){try{const n=new vg(i);n.addPass(new yg(e,t));const s=new zi(new le(window.innerWidth,window.innerHeight),.55,.65,.72);return n.addPass(s),{composer:n,render:()=>n.render(),resize:(r,a)=>{n.setSize(r,a),s.setSize(r,a)},dispose:()=>{n.passes.forEach(r=>r.dispose?.())}}}catch(n){return console.warn("[PostProcessing] Falling back to plain rendering:",n),{composer:null,render:()=>i.render(e,t),resize:()=>{},dispose:()=>{}}}}const te=Object.freeze({SET_SCALE:"SET_SCALE",SELECT_OBJECT:"SELECT_OBJECT",SET_TARGET:"SET_TARGET",CLEAR_TARGET:"CLEAR_TARGET",SET_FLIGHT_STATUS:"SET_FLIGHT_STATUS",SET_FLIGHT_MODE:"SET_FLIGHT_MODE",UPDATE_TELEMETRY:"UPDATE_TELEMETRY",SET_CAMERA_MODE:"SET_CAMERA_MODE",SET_SEARCH_QUERY:"SET_SEARCH_QUERY",TOGGLE_DETAIL_PANEL:"TOGGLE_DETAIL_PANEL",TOGGLE_HABITABILITY:"TOGGLE_HABITABILITY",TOGGLE_SATELLITE_LIST:"TOGGLE_SATELLITE_LIST",TOGGLE_AUDIO_MUTED:"TOGGLE_AUDIO_MUTED",TOGGLE_HUD:"TOGGLE_HUD",TOGGLE_PHOTO_MODE:"TOGGLE_PHOTO_MODE",TOGGLE_LOGBOOK:"TOGGLE_LOGBOOK",TOGGLE_CONSTELLATIONS:"TOGGLE_CONSTELLATIONS",RECORD_DISCOVERY:"RECORD_DISCOVERY",PUSH_HISTORY:"PUSH_HISTORY",REPORT_ERROR:"REPORT_ERROR",CLEAR_ERROR:"CLEAR_ERROR",SET_CABIN_THEME:"SET_CABIN_THEME",SET_CABIN_LIGHT_LEVEL:"SET_CABIN_LIGHT_LEVEL",SET_TIME_WARP:"SET_TIME_WARP",SET_RADIO_STATION:"SET_RADIO_STATION",START_EXPEDITION:"START_EXPEDITION",ADVANCE_EXPEDITION:"ADVANCE_EXPEDITION",CANCEL_EXPEDITION:"CANCEL_EXPEDITION",COMPLETE_EXPEDITION:"COMPLETE_EXPEDITION",VISIT_EXPEDITION_WAYPOINT:"VISIT_EXPEDITION_WAYPOINT",DEPLOY_LANDER:"DEPLOY_LANDER",CLOSE_LANDER:"CLOSE_LANDER",SET_LANDER_SOIL_ANALYSIS:"SET_LANDER_SOIL_ANALYSIS",SET_CASSETTE_TAPE:"SET_CASSETTE_TAPE",SET_CASSETTE_PLAYING:"SET_CASSETTE_PLAYING",ADD_CUSTOM_SATELLITE:"ADD_CUSTOM_SATELLITE",REMOVE_CUSTOM_SATELLITE:"REMOVE_CUSTOM_SATELLITE",SET_HULL_LIVERY:"SET_HULL_LIVERY",TRIGGER_COSMIC_EVENT:"TRIGGER_COSMIC_EVENT",DISMISS_COSMIC_EVENT:"DISMISS_COSMIC_EVENT",TOGGLE_PROBE_BUILDER:"TOGGLE_PROBE_BUILDER",TOGGLE_SETI_SCANNER:"TOGGLE_SETI_SCANNER",SET_SETI_FREQUENCY:"SET_SETI_FREQUENCY",INTERCEPT_SETI_SIGNAL:"INTERCEPT_SETI_SIGNAL",TOGGLE_AI_COMPANION:"TOGGLE_AI_COMPANION",TRIGGER_AI_SPEECH:"TRIGGER_AI_SPEECH",SET_AI_SPEAKING:"SET_AI_SPEAKING",TOGGLE_ENGINEERING_BAY:"TOGGLE_ENGINEERING_BAY",UNLOCK_SHIP_UPGRADE:"UNLOCK_SHIP_UPGRADE",ADD_DISCOVERY_POINTS:"ADD_DISCOVERY_POINTS",ENTER_WORMHOLE:"ENTER_WORMHOLE",EXIT_WORMHOLE:"EXIT_WORMHOLE",TOGGLE_SANDBOX_MODE:"TOGGLE_SANDBOX_MODE",ADD_SANDBOX_BODY:"ADD_SANDBOX_BODY",CLEAR_SANDBOX:"CLEAR_SANDBOX"}),{SET_SCALE:dy,SELECT_OBJECT:fy,SET_TARGET:py,CLEAR_TARGET:my,SET_FLIGHT_STATUS:gy,SET_FLIGHT_MODE:_y,UPDATE_TELEMETRY:vy,SET_CAMERA_MODE:yy,SET_SEARCH_QUERY:xy,TOGGLE_DETAIL_PANEL:Sy,TOGGLE_HABITABILITY:My,TOGGLE_SATELLITE_LIST:by,TOGGLE_AUDIO_MUTED:Ey,TOGGLE_HUD:Ty,TOGGLE_PHOTO_MODE:Ay,TOGGLE_LOGBOOK:wy,TOGGLE_CONSTELLATIONS:Cy,RECORD_DISCOVERY:Ry,PUSH_HISTORY:Ly,REPORT_ERROR:Py,CLEAR_ERROR:Iy,SET_CABIN_THEME:Dy,SET_CABIN_LIGHT_LEVEL:Oy,SET_TIME_WARP:Ny,SET_RADIO_STATION:Uy,START_EXPEDITION:Fy,ADVANCE_EXPEDITION:Gy,CANCEL_EXPEDITION:By,COMPLETE_EXPEDITION:Hy,VISIT_EXPEDITION_WAYPOINT:ky,DEPLOY_LANDER:zy,CLOSE_LANDER:Vy,SET_LANDER_SOIL_ANALYSIS:Wy,SET_CASSETTE_TAPE:qy,SET_CASSETTE_PLAYING:Xy,ADD_CUSTOM_SATELLITE:Ky,REMOVE_CUSTOM_SATELLITE:Yy,SET_HULL_LIVERY:$y,TRIGGER_COSMIC_EVENT:jy,DISMISS_COSMIC_EVENT:Zy,TOGGLE_PROBE_BUILDER:Jy,TOGGLE_SETI_SCANNER:Mg,SET_SETI_FREQUENCY:Qy,INTERCEPT_SETI_SIGNAL:ex,TOGGLE_AI_COMPANION:bg,TRIGGER_AI_SPEECH:tx,SET_AI_SPEAKING:nx,TOGGLE_ENGINEERING_BAY:Ua,UNLOCK_SHIP_UPGRADE:Eg,ADD_DISCOVERY_POINTS:ix,ENTER_WORMHOLE:Tg,EXIT_WORMHOLE:Ag,TOGGLE_SANDBOX_MODE:Fa,ADD_SANDBOX_BODY:wg,CLEAR_SANDBOX:Cg}=te,fn=Object.freeze({IDLE:"IDLE",SPOOLING:"SPOOLING",WARP:"WARP",MANUAL_CRUISE:"MANUAL_CRUISE",DECELERATING:"DECELERATING",ARRIVED:"ARRIVED"}),ln=Object.freeze({AUTOPILOT:"AUTOPILOT",MANUAL:"MANUAL"}),tt=Object.freeze({COCKPIT:"COCKPIT",THIRD_PERSON:"THIRD_PERSON",CINEMATIC:"CINEMATIC",PHOTO:"PHOTO",SURFACE:"SURFACE"}),ru=Object.freeze({MAHOGANY:"MAHOGANY",APOLLO:"APOLLO",CYBERPUNK:"CYBERPUNK"}),au=Object.freeze({APOLLO_WHITE:"APOLLO_WHITE",SOLAR_GOLD:"SOLAR_GOLD",STEALTH_CARBON:"STEALTH_CARBON",DEEP_BRASS:"DEEP_BRASS"});function ha(i,e){if(typeof i!="string"||i.length===0)throw new TypeError(`${e} must be a non-empty string`)}const Ce={setScale:i=>({type:te.SET_SCALE,payload:i}),selectObject:i=>({type:te.SELECT_OBJECT,payload:i}),setTarget:i=>(ha(i,"target id"),{type:te.SET_TARGET,payload:i}),clearTarget:()=>({type:te.CLEAR_TARGET}),setFlightStatus:i=>{if(!Object.values(fn).includes(i))throw new RangeError(`Unknown flight status: ${i}`);return{type:te.SET_FLIGHT_STATUS,payload:i}},setFlightMode:i=>{if(!Object.values(ln).includes(i))throw new RangeError(`Unknown flight mode: ${i}`);return{type:te.SET_FLIGHT_MODE,payload:i}},updateTelemetry:i=>({type:te.UPDATE_TELEMETRY,payload:i}),setCameraMode:i=>{if(!Object.values(tt).includes(i))throw new RangeError(`Unknown camera mode: ${i}`);return{type:te.SET_CAMERA_MODE,payload:i}},setSearchQuery:i=>({type:te.SET_SEARCH_QUERY,payload:i??""}),toggleDetailPanel:i=>({type:te.TOGGLE_DETAIL_PANEL,payload:i}),toggleHabitability:i=>({type:te.TOGGLE_HABITABILITY,payload:i}),toggleSatelliteList:i=>({type:te.TOGGLE_SATELLITE_LIST,payload:i}),toggleAudioMuted:i=>({type:te.TOGGLE_AUDIO_MUTED,payload:i}),toggleHud:i=>({type:te.TOGGLE_HUD,payload:i}),togglePhotoMode:i=>({type:te.TOGGLE_PHOTO_MODE,payload:i}),toggleLogbook:i=>({type:te.TOGGLE_LOGBOOK,payload:i}),toggleConstellations:i=>({type:te.TOGGLE_CONSTELLATIONS,payload:i}),toggleProbeBuilder:i=>({type:te.TOGGLE_PROBE_BUILDER,payload:i}),recordDiscovery:i=>({type:te.RECORD_DISCOVERY,payload:i}),pushHistory:i=>({type:te.PUSH_HISTORY,payload:i}),reportError:i=>({type:te.REPORT_ERROR,payload:{message:i?.message??String(i),at:Date.now()}}),clearError:()=>({type:te.CLEAR_ERROR}),setCabinTheme:i=>{if(!Object.values(ru).includes(i))throw new RangeError(`Unknown cabin theme: ${i}`);return{type:te.SET_CABIN_THEME,payload:i}},setCabinLightLevel:i=>({type:te.SET_CABIN_LIGHT_LEVEL,payload:Math.min(Math.max(Number(i)||0,0),1)}),setTimeWarp:i=>({type:te.SET_TIME_WARP,payload:Math.max(1,Number(i)||1)}),setRadioStation:i=>({type:te.SET_RADIO_STATION,payload:Number(i)||0}),startExpedition:i=>(ha(i,"expedition id"),{type:te.START_EXPEDITION,payload:i}),advanceExpedition:()=>({type:te.ADVANCE_EXPEDITION}),cancelExpedition:()=>({type:te.CANCEL_EXPEDITION}),completeExpedition:(i,e)=>({type:te.COMPLETE_EXPEDITION,payload:{expeditionId:i,badge:e,completedAt:Date.now()}}),visitExpeditionWaypoint:(i,e)=>({type:te.VISIT_EXPEDITION_WAYPOINT,payload:{expeditionId:i,targetId:e}}),deployLander:i=>(ha(i,"target id"),{type:te.DEPLOY_LANDER,payload:i}),closeLander:()=>({type:te.CLOSE_LANDER}),setLanderSoilAnalysis:i=>({type:te.SET_LANDER_SOIL_ANALYSIS,payload:i}),setCassetteTape:i=>({type:te.SET_CASSETTE_TAPE,payload:i}),setCassettePlaying:i=>({type:te.SET_CASSETTE_PLAYING,payload:!!i}),addCustomSatellite:i=>({type:te.ADD_CUSTOM_SATELLITE,payload:i}),removeCustomSatellite:i=>({type:te.REMOVE_CUSTOM_SATELLITE,payload:i}),setHullLivery:i=>{if(!Object.values(au).includes(i))throw new RangeError(`Unknown hull livery: ${i}`);return{type:te.SET_HULL_LIVERY,payload:i}},triggerCosmicEvent:i=>({type:te.TRIGGER_COSMIC_EVENT,payload:{...i,triggeredAt:Date.now()}}),dismissCosmicEvent:()=>({type:te.DISMISS_COSMIC_EVENT}),toggleSetiScanner:i=>({type:te.TOGGLE_SETI_SCANNER,payload:i}),setSetiFrequency:i=>({type:te.SET_SETI_FREQUENCY,payload:Number(i)}),interceptSetiSignal:i=>({type:te.INTERCEPT_SETI_SIGNAL,payload:i}),toggleAiCompanion:i=>({type:te.TOGGLE_AI_COMPANION,payload:i}),triggerAiSpeech:(i,e="neutral")=>({type:te.TRIGGER_AI_SPEECH,payload:{message:i,mood:e,timestamp:Date.now()}}),setAiSpeaking:i=>({type:te.SET_AI_SPEAKING,payload:!!i}),toggleEngineeringBay:i=>({type:te.TOGGLE_ENGINEERING_BAY,payload:i}),unlockShipUpgrade:(i,e=100)=>({type:te.UNLOCK_SHIP_UPGRADE,payload:{upgradeId:i,cost:e}}),addDiscoveryPoints:i=>({type:te.ADD_DISCOVERY_POINTS,payload:Number(i)||0}),enterWormhole:(i="andromeda")=>({type:te.ENTER_WORMHOLE,payload:i}),exitWormhole:()=>({type:te.EXIT_WORMHOLE}),toggleSandboxMode:i=>({type:te.TOGGLE_SANDBOX_MODE,payload:i}),addSandboxBody:i=>({type:te.ADD_SANDBOX_BODY,payload:i}),clearSandbox:()=>({type:te.CLEAR_SANDBOX})};function Rg(){return{currentScale:0,selectedObject:"earth",targetObject:null,flightStatus:fn.IDLE,flightMode:ln.MANUAL,cameraMode:tt.THIRD_PERSON,cabinTheme:ru.MAHOGANY,cabinLightLevel:1,hullLivery:au.APOLLO_WHITE,timeWarp:1,radioStationIndex:0,activeExpedition:null,completedExpeditions:[],expeditionProgress:{},landerState:{active:!1,targetId:null,soilAnalysis:null},cassetteState:{currentTape:"pale-blue-dot",isPlaying:!1},customSatellites:[],activeCosmicEvent:null,discoveryPoints:200,installedUpgrades:[],aiCompanion:{enabled:!0,isSpeaking:!1,lastMessage:"Holo-systems online. Ready to explore the stars, Captain!",mood:"calm"},setiScanner:{active:!1,frequencyMhz:1420.405,activeSignal:null},wormholeState:{inTransit:!1,destinationId:null},sandboxState:{active:!1,star:null,bodies:[]},flightTelemetry:{currentSpeedC:0,lorentzFactor:1,distanceRemainingKm:0,totalDistanceKm:0,timeDilationShipSec:0,timeDilationEarthSec:0,etaSeconds:0,headingDeg:0},history:[],discoveries:[{id:"earth",name:"Earth",kind:"planet",discoveredAt:Date.now(),category:"Home Planet"}],ui:{isDetailPanelOpen:!1,isHabitabilityOpen:!1,isSatelliteListOpen:!1,isPhotoModeOpen:!1,isLogbookOpen:!1,isProbeBuilderOpen:!1,isSetiOpen:!1,isEngineeringOpen:!1,isSandboxOpen:!1,constellationsVisible:!1,searchQuery:"",audioMuted:!1,hudVisible:!0},lastError:null}}function Jl(i,e){switch(e.type){case te.SET_SCALE:return{...i,currentScale:e.payload};case te.SELECT_OBJECT:return{...i,selectedObject:e.payload};case te.SET_TARGET:return{...i,targetObject:e.payload,flightStatus:fn.SPOOLING};case te.CLEAR_TARGET:return{...i,targetObject:null,flightStatus:fn.IDLE,flightTelemetry:{...i.flightTelemetry,currentSpeedC:0,etaSeconds:0}};case te.SET_FLIGHT_STATUS:return{...i,flightStatus:e.payload};case te.SET_FLIGHT_MODE:return{...i,flightMode:e.payload};case te.UPDATE_TELEMETRY:return{...i,flightTelemetry:{...i.flightTelemetry,...e.payload}};case te.SET_CAMERA_MODE:return{...i,cameraMode:e.payload};case te.SET_SEARCH_QUERY:return{...i,ui:{...i.ui,searchQuery:e.payload}};case te.TOGGLE_DETAIL_PANEL:return{...i,ui:{...i.ui,isDetailPanelOpen:e.payload??!i.ui.isDetailPanelOpen}};case te.TOGGLE_HABITABILITY:return{...i,ui:{...i.ui,isHabitabilityOpen:e.payload??!i.ui.isHabitabilityOpen}};case te.TOGGLE_SATELLITE_LIST:return{...i,ui:{...i.ui,isSatelliteListOpen:e.payload??!i.ui.isSatelliteListOpen}};case te.TOGGLE_PHOTO_MODE:return{...i,ui:{...i.ui,isPhotoModeOpen:e.payload??!i.ui.isPhotoModeOpen}};case te.TOGGLE_LOGBOOK:return{...i,ui:{...i.ui,isLogbookOpen:e.payload??!i.ui.isLogbookOpen}};case te.TOGGLE_CONSTELLATIONS:return{...i,ui:{...i.ui,constellationsVisible:e.payload??!i.ui.constellationsVisible}};case te.RECORD_DISCOVERY:return i.discoveries.some(n=>n.id===e.payload.id)?i:{...i,discoveryPoints:i.discoveryPoints+50,discoveries:[...i.discoveries,{...e.payload,discoveredAt:Date.now()}]};case te.TOGGLE_AUDIO_MUTED:return{...i,ui:{...i.ui,audioMuted:e.payload??!i.ui.audioMuted}};case te.TOGGLE_HUD:return{...i,ui:{...i.ui,hudVisible:e.payload??!i.ui.hudVisible}};case te.PUSH_HISTORY:return{...i,history:[...i.history,e.payload].slice(-50)};case te.REPORT_ERROR:return{...i,lastError:e.payload};case te.CLEAR_ERROR:return{...i,lastError:null};case te.SET_CABIN_THEME:return{...i,cabinTheme:e.payload};case te.SET_CABIN_LIGHT_LEVEL:return{...i,cabinLightLevel:e.payload};case te.SET_TIME_WARP:return{...i,timeWarp:e.payload};case te.SET_RADIO_STATION:return{...i,radioStationIndex:e.payload};case te.START_EXPEDITION:return{...i,activeExpedition:{id:e.payload,currentStepIndex:0,startedAt:Date.now()}};case te.ADVANCE_EXPEDITION:return i.activeExpedition?{...i,activeExpedition:{...i.activeExpedition,currentStepIndex:i.activeExpedition.currentStepIndex+1}}:i;case te.CANCEL_EXPEDITION:return{...i,activeExpedition:null};case te.COMPLETE_EXPEDITION:{const{expeditionId:t,badge:n,completedAt:s}=e.payload,r=i.completedExpeditions.some(a=>a.expeditionId===t);return{...i,activeExpedition:null,discoveryPoints:r?i.discoveryPoints:i.discoveryPoints+150,completedExpeditions:r?i.completedExpeditions:[...i.completedExpeditions,{expeditionId:t,badge:n,completedAt:s}]}}case te.VISIT_EXPEDITION_WAYPOINT:{const{expeditionId:t,targetId:n}=e.payload,s=i.expeditionProgress[t]||{visited:[]};if(s.visited.includes(n))return i;const r=[...s.visited,n];return{...i,expeditionProgress:{...i.expeditionProgress,[t]:{visited:r,completed:r.length>=3}}}}case te.DEPLOY_LANDER:return{...i,cameraMode:tt.SURFACE,landerState:{active:!0,targetId:e.payload,soilAnalysis:null}};case te.CLOSE_LANDER:return{...i,cameraMode:tt.COCKPIT,landerState:{active:!1,targetId:null,soilAnalysis:null}};case te.SET_LANDER_SOIL_ANALYSIS:return{...i,landerState:{...i.landerState,soilAnalysis:e.payload}};case te.SET_CASSETTE_TAPE:return{...i,cassetteState:{...i.cassetteState,currentTape:e.payload}};case te.SET_CASSETTE_PLAYING:return{...i,cassetteState:{...i.cassetteState,isPlaying:e.payload}};case te.ADD_CUSTOM_SATELLITE:return{...i,customSatellites:[...i.customSatellites,e.payload]};case te.REMOVE_CUSTOM_SATELLITE:return{...i,customSatellites:i.customSatellites.filter(t=>t.id!==e.payload)};case te.SET_HULL_LIVERY:return{...i,hullLivery:e.payload};case te.TRIGGER_COSMIC_EVENT:return{...i,activeCosmicEvent:e.payload};case te.DISMISS_COSMIC_EVENT:return{...i,activeCosmicEvent:null};case te.TOGGLE_PROBE_BUILDER:return{...i,ui:{...i.ui,isProbeBuilderOpen:e.payload??!i.ui.isProbeBuilderOpen}};case te.TOGGLE_SETI_SCANNER:return{...i,ui:{...i.ui,isSetiOpen:e.payload??!i.ui.isSetiOpen}};case te.SET_SETI_FREQUENCY:return{...i,setiScanner:{...i.setiScanner,frequencyMhz:e.payload}};case te.INTERCEPT_SETI_SIGNAL:return{...i,setiScanner:{...i.setiScanner,activeSignal:e.payload}};case te.TOGGLE_AI_COMPANION:return{...i,aiCompanion:{...i.aiCompanion,enabled:e.payload??!i.aiCompanion.enabled}};case te.TRIGGER_AI_SPEECH:return{...i,aiCompanion:{...i.aiCompanion,lastMessage:e.payload.message,mood:e.payload.mood||"neutral"}};case te.SET_AI_SPEAKING:return{...i,aiCompanion:{...i.aiCompanion,isSpeaking:e.payload}};case te.TOGGLE_ENGINEERING_BAY:return{...i,ui:{...i.ui,isEngineeringOpen:e.payload??!i.ui.isEngineeringOpen}};case te.UNLOCK_SHIP_UPGRADE:{const{upgradeId:t,cost:n}=e.payload;return i.installedUpgrades.includes(t)||i.discoveryPoints<n?i:{...i,discoveryPoints:i.discoveryPoints-n,installedUpgrades:[...i.installedUpgrades,t]}}case te.ADD_DISCOVERY_POINTS:return{...i,discoveryPoints:i.discoveryPoints+e.payload};case te.ENTER_WORMHOLE:return{...i,wormholeState:{inTransit:!0,destinationId:e.payload}};case te.EXIT_WORMHOLE:return{...i,wormholeState:{inTransit:!1,destinationId:null}};case te.TOGGLE_SANDBOX_MODE:return{...i,ui:{...i.ui,isSandboxOpen:e.payload??!i.ui.isSandboxOpen},sandboxState:{...i.sandboxState,active:e.payload??!i.sandboxState.active}};case te.ADD_SANDBOX_BODY:return{...i,sandboxState:{...i.sandboxState,bodies:[...i.sandboxState.bodies,e.payload]}};case te.CLEAR_SANDBOX:return{...i,sandboxState:{active:!1,star:null,bodies:[]}};default:return i}}class Lg{constructor(e=Rg()){this._state=e,this._subscribers=new Set}getState(){return this._state}dispatch(e){if(!e||typeof e.type!="string")throw new TypeError("dispatch() requires an action object with a string `type`");const t=this._state;let n;try{n=Jl(t,e)}catch(s){n=Jl(t,{type:te.REPORT_ERROR,payload:s})}return this._state=n,this._notify(n,t,e),n}subscribe(e,t=n=>n){if(!e||typeof e!="function"&&typeof e!="string")throw new TypeError("subscribe() requires a callback function");let n,s;if(typeof e=="string"){if(typeof t!="function")throw new TypeError("subscribe() requires a callback function");s=o=>o[e],n=t}else n=e,s=typeof t=="function"?t:o=>o;let r;try{r=s(this._state)}catch{r=void 0}const a={selector:s,cb:n,lastValue:r};return this._subscribers.add(a),()=>this._subscribers.delete(a)}_notify(e,t,n){for(const s of this._subscribers){let r;try{r=s.selector(e)}catch{continue}if(!Object.is(r,s.lastValue)){const a=s.lastValue;s.lastValue=r;try{s.cb(r,a,n)}catch(o){console.error("[Store] subscriber callback threw:",o)}}}}}const en=[{id:"sun",name:"The Sun",type:"star",scaleTier:1,location:"Center of the Solar System",galaxy:"Milky Way",solarSystem:"Sol",distanceFromEarthKm:149597870,radiusKm:696340,colorHex:16765562,orbit:null,environment:{surfaceTempC:5500,atmosphericPressureAtm:0,surfaceGravityG:27.9,radiationIndex:10,hasLiquidWater:!1,isGasGiant:!1,composition:{Hydrogen:73,Helium:25,Other:2}},description:"A warm, steady G-type yellow dwarf star and the gravitational heart of our home system.",tags:["star","sol","home star","yellow dwarf"]},{id:"mercury",name:"Mercury",type:"planet",scaleTier:0,location:"1st planet from the Sun",galaxy:"Milky Way",solarSystem:"Sol",distanceFromEarthKm:917e5,radiusKm:2439.7,colorHex:10261127,orbit:{parentId:"sun",semiMajorAxisAu:.387,eccentricity:.205,periodDays:88,inclinationDeg:7},environment:{surfaceTempC:167,atmosphericPressureAtm:0,surfaceGravityG:.38,radiationIndex:8,hasLiquidWater:!1,isGasGiant:!1,composition:{Oxygen:42,Sodium:29,Hydrogen:22,Other:7}},description:"The swift, cratered, sun-scorched world closest to our star.",tags:["planet","inner planet","terrestrial"]},{id:"venus",name:"Venus",type:"planet",scaleTier:0,location:"2nd planet from the Sun",galaxy:"Milky Way",solarSystem:"Sol",distanceFromEarthKm:414e5,radiusKm:6051.8,colorHex:15255946,orbit:{parentId:"sun",semiMajorAxisAu:.723,eccentricity:.007,periodDays:225,inclinationDeg:3.4},environment:{surfaceTempC:464,atmosphericPressureAtm:92,surfaceGravityG:.9,radiationIndex:3,hasLiquidWater:!1,isGasGiant:!1,composition:{CO2:96.5,N2:3.5}},description:"Earth's greenhouse-trapped twin world, hidden under crushing sulfuric acid clouds.",tags:["planet","inner planet","greenhouse"]},{id:"earth",name:"Earth",type:"planet",scaleTier:0,location:"3rd planet from the Sun",galaxy:"Milky Way",solarSystem:"Sol",distanceFromEarthKm:0,radiusKm:6371,colorHex:5083390,orbit:{parentId:"sun",semiMajorAxisAu:1,eccentricity:.0167,periodDays:365.25,inclinationDeg:0},environment:{surfaceTempC:15,atmosphericPressureAtm:1,surfaceGravityG:1,radiationIndex:1,hasLiquidWater:!0,isGasGiant:!1,composition:{N2:78,O2:21,Argon:.9,CO2:.04}},description:"Home. A dynamic, blue, living world sheltered by oceans and life.",tags:["planet","home","habitable","terrestrial","ocean world"]},{id:"moon",name:"The Moon",type:"moon",scaleTier:0,location:"Orbiting Earth",galaxy:"Milky Way",solarSystem:"Sol",distanceFromEarthKm:384400,radiusKm:1737.4,colorHex:12303291,orbit:{parentId:"earth",semiMajorAxisAu:.00257,eccentricity:.055,periodDays:27.3,inclinationDeg:5.1},environment:{surfaceTempC:-20,atmosphericPressureAtm:0,surfaceGravityG:.166,radiationIndex:6,hasLiquidWater:!1,isGasGiant:!1,composition:{Trace:100}},description:"Earth's ancient, cratered companion and humanity's first stepping stone into space.",tags:["moon","luna","satellite"]},{id:"mars",name:"Mars",type:"planet",scaleTier:0,location:"4th planet from the Sun",galaxy:"Milky Way",solarSystem:"Sol",distanceFromEarthKm:783e5,radiusKm:3389.5,colorHex:12665870,orbit:{parentId:"sun",semiMajorAxisAu:1.524,eccentricity:.093,periodDays:687,inclinationDeg:1.85},environment:{surfaceTempC:-63,atmosphericPressureAtm:.006,surfaceGravityG:.38,radiationIndex:5,hasLiquidWater:!1,isGasGiant:!1,composition:{CO2:95,N2:2.8,Argon:2}},description:"The rust-red desert planet with ancient dry river valleys, Olympus Mons, and Valles Marineris.",tags:["planet","red planet","desert world"]},{id:"phobos",name:"Phobos",type:"moon",scaleTier:0,location:"Orbiting Mars",galaxy:"Milky Way",solarSystem:"Sol",distanceFromEarthKm:783e5,radiusKm:11.3,colorHex:9075306,orbit:{parentId:"mars",semiMajorAxisAu:626e-7,eccentricity:.015,periodDays:.32,inclinationDeg:1},environment:{surfaceTempC:-40,atmosphericPressureAtm:0,surfaceGravityG:.0057,radiationIndex:6,hasLiquidWater:!1,isGasGiant:!1,composition:{Trace:100}},description:"A heavily grooved, captured asteroid moon spiraling slowly toward Mars.",tags:["moon","mars moon"]},{id:"deimos",name:"Deimos",type:"moon",scaleTier:0,location:"Orbiting Mars",galaxy:"Milky Way",solarSystem:"Sol",distanceFromEarthKm:7832e4,radiusKm:6.2,colorHex:10391938,orbit:{parentId:"mars",semiMajorAxisAu:156e-6,eccentricity:2e-4,periodDays:1.26,inclinationDeg:1.8},environment:{surfaceTempC:-40,atmosphericPressureAtm:0,surfaceGravityG:.003,radiationIndex:6,hasLiquidWater:!1,isGasGiant:!1,composition:{Trace:100}},description:"The smooth, dust-blanketed outer moon of Mars with very low gravity.",tags:["moon","mars moon"]},{id:"ceres",name:"Ceres",type:"dwarfPlanet",scaleTier:1,location:"Asteroid Belt",galaxy:"Milky Way",solarSystem:"Sol",distanceFromEarthKm:263e6,radiusKm:469.7,colorHex:11117207,orbit:{parentId:"sun",semiMajorAxisAu:2.77,eccentricity:.076,periodDays:1682,inclinationDeg:10.6},environment:{surfaceTempC:-105,atmosphericPressureAtm:0,surfaceGravityG:.029,radiationIndex:5,hasLiquidWater:!1,isGasGiant:!1,composition:{Rock:50,WaterIce:50}},description:"The largest object in the asteroid belt, housing bright sodium carbonate salt deposits in Occator Crater.",tags:["dwarf planet","asteroid belt","ice world"]},{id:"vesta",name:"4 Vesta",type:"dwarfPlanet",scaleTier:1,location:"Asteroid Belt",galaxy:"Milky Way",solarSystem:"Sol",distanceFromEarthKm:24e7,radiusKm:262.7,colorHex:9143676,orbit:{parentId:"sun",semiMajorAxisAu:2.36,eccentricity:.089,periodDays:1325,inclinationDeg:7.1},environment:{surfaceTempC:-110,atmosphericPressureAtm:0,surfaceGravityG:.025,radiationIndex:5,hasLiquidWater:!1,isGasGiant:!1,composition:{Basalt:60,Pyroxene:40}},description:"A differentiated rocky protoplanet with a colossal south polar impact mountain.",tags:["dwarf planet","protoplanet","asteroid belt"]},{id:"asteroid-belt",name:"The Asteroid Belt",type:"asteroidBelt",scaleTier:1,location:"Between Mars and Jupiter",galaxy:"Milky Way",solarSystem:"Sol",distanceFromEarthKm:329e6,radiusKm:0,colorHex:9405816,orbit:{parentId:"sun",semiMajorAxisAu:2.7,eccentricity:.08,periodDays:1600,inclinationDeg:6},environment:{surfaceTempC:-100,atmosphericPressureAtm:0,surfaceGravityG:0,radiationIndex:5,hasLiquidWater:!1,isGasGiant:!1,composition:{Silicates:75,Metals:25}},description:"A vast ring of primordial rock and ice remnants drifting between the inner and outer planets.",tags:["asteroids","belt","debris"]},{id:"jupiter",name:"Jupiter",type:"planet",scaleTier:1,location:"5th planet from the Sun",galaxy:"Milky Way",solarSystem:"Sol",distanceFromEarthKm:6287e5,radiusKm:69911,colorHex:14200446,orbit:{parentId:"sun",semiMajorAxisAu:5.2,eccentricity:.049,periodDays:4333,inclinationDeg:1.3},environment:{surfaceTempC:-108,atmosphericPressureAtm:0,surfaceGravityG:2.53,radiationIndex:9,hasLiquidWater:!1,isGasGiant:!0,composition:{H2:90,Helium:10}},description:"The monarch of the Solar System — a colossal gas giant with the centuries-old Great Red Spot storm.",tags:["planet","gas giant","outer planet"]},{id:"io",name:"Io",type:"moon",scaleTier:1,location:"Orbiting Jupiter",galaxy:"Milky Way",solarSystem:"Sol",distanceFromEarthKm:6283e5,radiusKm:1821.6,colorHex:16109619,orbit:{parentId:"jupiter",semiMajorAxisAu:.00282,eccentricity:.0041,periodDays:1.77,inclinationDeg:.05},environment:{surfaceTempC:-143,atmosphericPressureAtm:1e-6,surfaceGravityG:.183,radiationIndex:10,hasLiquidWater:!1,isGasGiant:!1,composition:{Sulfur:70,Silicates:30}},description:"The most volcanically active body in the Solar System, churned by tidal friction from Jupiter.",tags:["moon","volcano","galilean moon"]},{id:"europa",name:"Europa",type:"moon",scaleTier:1,location:"Orbiting Jupiter",galaxy:"Milky Way",solarSystem:"Sol",distanceFromEarthKm:6283e5,radiusKm:1560.8,colorHex:14997700,orbit:{parentId:"jupiter",semiMajorAxisAu:.0045,eccentricity:.009,periodDays:3.55,inclinationDeg:.47},environment:{surfaceTempC:-160,atmosphericPressureAtm:0,surfaceGravityG:.134,radiationIndex:7,hasLiquidWater:!0,isGasGiant:!1,composition:{WaterIce:85,Silicates:15}},description:"An ice-crusted world hiding a warm global saltwater ocean with twice the water of Earth.",tags:["moon","ocean world","galilean moon","habitable candidate"]},{id:"ganymede",name:"Ganymede",type:"moon",scaleTier:1,location:"Orbiting Jupiter",galaxy:"Milky Way",solarSystem:"Sol",distanceFromEarthKm:6285e5,radiusKm:2634.1,colorHex:10195079,orbit:{parentId:"jupiter",semiMajorAxisAu:.00715,eccentricity:.0013,periodDays:7.15,inclinationDeg:.2},environment:{surfaceTempC:-163,atmosphericPressureAtm:0,surfaceGravityG:.146,radiationIndex:6,hasLiquidWater:!0,isGasGiant:!1,composition:{WaterIce:50,SilicateRock:50}},description:"The largest moon in the Solar System — larger than Mercury — with its own generated magnetic field.",tags:["moon","galilean moon","magnetic field"]},{id:"callisto",name:"Callisto",type:"moon",scaleTier:1,location:"Orbiting Jupiter",galaxy:"Milky Way",solarSystem:"Sol",distanceFromEarthKm:6289e5,radiusKm:2410.3,colorHex:7234907,orbit:{parentId:"jupiter",semiMajorAxisAu:.01258,eccentricity:.0074,periodDays:16.69,inclinationDeg:.28},environment:{surfaceTempC:-171,atmosphericPressureAtm:0,surfaceGravityG:.126,radiationIndex:3,hasLiquidWater:!0,isGasGiant:!1,composition:{WaterIce:50,Rock:50}},description:"A dark, heavily cratered ancient ice moon with the gigantic multi-ring Valhalla impact structure.",tags:["moon","galilean moon","ancient"]},{id:"saturn",name:"Saturn",type:"planet",scaleTier:1,location:"6th planet from the Sun",galaxy:"Milky Way",solarSystem:"Sol",distanceFromEarthKm:1275e6,radiusKm:58232,colorHex:15390376,orbit:{parentId:"sun",semiMajorAxisAu:9.58,eccentricity:.057,periodDays:10759,inclinationDeg:2.5},environment:{surfaceTempC:-139,atmosphericPressureAtm:0,surfaceGravityG:1.06,radiationIndex:8,hasLiquidWater:!1,isGasGiant:!0,composition:{H2:96,Helium:3,Other:1}},description:"The ringed jewel of the solar system, crowned with brilliant crystalline ice ringlets.",tags:["planet","rings","gas giant"]},{id:"enceladus",name:"Enceladus",type:"moon",scaleTier:1,location:"Orbiting Saturn",galaxy:"Milky Way",solarSystem:"Sol",distanceFromEarthKm:1275e6,radiusKm:252.1,colorHex:16448255,orbit:{parentId:"saturn",semiMajorAxisAu:.00159,eccentricity:.0047,periodDays:1.37,inclinationDeg:.01},environment:{surfaceTempC:-198,atmosphericPressureAtm:0,surfaceGravityG:.0113,radiationIndex:4,hasLiquidWater:!0,isGasGiant:!1,composition:{WaterIce:95,Organics:5}},description:"A dazzling snow-white moon spraying organic-rich water vapor geysers from southern tiger stripes.",tags:["moon","cryovolcanism","ocean world","geysers"]},{id:"mimas",name:"Mimas",type:"moon",scaleTier:1,location:"Orbiting Saturn",galaxy:"Milky Way",solarSystem:"Sol",distanceFromEarthKm:1275e6,radiusKm:198.2,colorHex:11905437,orbit:{parentId:"saturn",semiMajorAxisAu:.00124,eccentricity:.02,periodDays:.94,inclinationDeg:1.57},environment:{surfaceTempC:-209,atmosphericPressureAtm:0,surfaceGravityG:.0065,radiationIndex:4,hasLiquidWater:!1,isGasGiant:!1,composition:{WaterIce:90,Rock:10}},description:"Saturn's 'Death Star' moon, dominated by the colossal 130-km wide Herschel crater.",tags:["moon","crater"]},{id:"titan",name:"Titan",type:"moon",scaleTier:1,location:"Orbiting Saturn",galaxy:"Milky Way",solarSystem:"Sol",distanceFromEarthKm:1275e6,radiusKm:2574.7,colorHex:14723420,orbit:{parentId:"saturn",semiMajorAxisAu:.00817,eccentricity:.028,periodDays:15.9,inclinationDeg:.35},environment:{surfaceTempC:-179,atmosphericPressureAtm:1.45,surfaceGravityG:.14,radiationIndex:3,hasLiquidWater:!1,isGasGiant:!1,composition:{N2:95,CH4:5}},description:"A golden smog-wrapped moon with methane rain, rivers, and tranquil hydrocarbon seas.",tags:["moon","methane lakes","dense atmosphere"]},{id:"iapetus",name:"Iapetus",type:"moon",scaleTier:1,location:"Orbiting Saturn",galaxy:"Milky Way",solarSystem:"Sol",distanceFromEarthKm:1275e6,radiusKm:734.5,colorHex:7232840,orbit:{parentId:"saturn",semiMajorAxisAu:.0238,eccentricity:.028,periodDays:79.3,inclinationDeg:15.47},environment:{surfaceTempC:-180,atmosphericPressureAtm:0,surfaceGravityG:.0227,radiationIndex:3,hasLiquidWater:!1,isGasGiant:!1,composition:{WaterIce:80,Carbonaceous:20}},description:"The yin-yang moon with one coal-dark hemisphere, one bright icy hemisphere, and a giant equatorial ridge.",tags:["moon","two-tone","equatorial ridge"]},{id:"uranus",name:"Uranus",type:"planet",scaleTier:1,location:"7th planet from the Sun",galaxy:"Milky Way",solarSystem:"Sol",distanceFromEarthKm:272e7,radiusKm:25362,colorHex:11131096,orbit:{parentId:"sun",semiMajorAxisAu:19.2,eccentricity:.047,periodDays:30687,inclinationDeg:.77},environment:{surfaceTempC:-197,atmosphericPressureAtm:0,surfaceGravityG:.89,radiationIndex:7,hasLiquidWater:!1,isGasGiant:!0,composition:{H2:82.5,Helium:15.2,CH4:2.3}},description:"A serene, pale-cyan ice giant rolling around the Sun on its tilted side.",tags:["planet","ice giant"]},{id:"miranda",name:"Miranda",type:"moon",scaleTier:1,location:"Orbiting Uranus",galaxy:"Milky Way",solarSystem:"Sol",distanceFromEarthKm:272e7,radiusKm:235.8,colorHex:10660274,orbit:{parentId:"uranus",semiMajorAxisAu:865e-6,eccentricity:.0013,periodDays:1.41,inclinationDeg:4.34},environment:{surfaceTempC:-213,atmosphericPressureAtm:0,surfaceGravityG:.008,radiationIndex:4,hasLiquidWater:!1,isGasGiant:!1,composition:{WaterIce:60,Silicates:40}},description:"A jumbled Frankenstein moon of mismatched terrain featuring the sheer 20-km high Verona Rupes cliffs.",tags:["moon","cliffs","uranus moon"]},{id:"neptune",name:"Neptune",type:"planet",scaleTier:1,location:"8th planet from the Sun",galaxy:"Milky Way",solarSystem:"Sol",distanceFromEarthKm:435e7,radiusKm:24622,colorHex:5996512,orbit:{parentId:"sun",semiMajorAxisAu:30.05,eccentricity:.009,periodDays:60190,inclinationDeg:1.77},environment:{surfaceTempC:-201,atmosphericPressureAtm:0,surfaceGravityG:1.14,radiationIndex:7,hasLiquidWater:!1,isGasGiant:!0,composition:{H2:80,Helium:19,CH4:1}},description:"A vibrant azure ice giant lashed by supersonic storms and raging jet streams.",tags:["planet","ice giant"]},{id:"triton",name:"Triton",type:"moon",scaleTier:1,location:"Orbiting Neptune",galaxy:"Milky Way",solarSystem:"Sol",distanceFromEarthKm:435e7,radiusKm:1353.4,colorHex:12241356,orbit:{parentId:"neptune",semiMajorAxisAu:.00237,eccentricity:16e-6,periodDays:5.88,inclinationDeg:156.8},environment:{surfaceTempC:-235,atmosphericPressureAtm:14e-6,surfaceGravityG:.079,radiationIndex:4,hasLiquidWater:!1,isGasGiant:!1,composition:{NitrogenIce:55,WaterIce:35,CO2:10}},description:"A captured retrograde Kuiper Belt world erupting active cryo-nitrogen geysers across cantaloupe terrain.",tags:["moon","retrograde","geysers","kuiper belt"]},{id:"pluto",name:"Pluto",type:"dwarfPlanet",scaleTier:1,location:"Kuiper Belt",galaxy:"Milky Way",solarSystem:"Sol",distanceFromEarthKm:59e8,radiusKm:1188.3,colorHex:13349267,orbit:{parentId:"sun",semiMajorAxisAu:39.5,eccentricity:.249,periodDays:90560,inclinationDeg:17.2},environment:{surfaceTempC:-229,atmosphericPressureAtm:1e-5,surfaceGravityG:.063,radiationIndex:5,hasLiquidWater:!1,isGasGiant:!1,composition:{N2:98,CH4:1.5,CO:.5}},description:"A complex icy world at the Kuiper Belt frontier with nitrogen glaciers and the famous Tombaugh Regio heart.",tags:["dwarf planet","kuiper belt","heart"]},{id:"charon",name:"Charon",type:"moon",scaleTier:1,location:"Orbiting Pluto",galaxy:"Milky Way",solarSystem:"Sol",distanceFromEarthKm:59e8,radiusKm:606,colorHex:10391941,orbit:{parentId:"pluto",semiMajorAxisAu:13e-5,eccentricity:2e-4,periodDays:6.38,inclinationDeg:0},environment:{surfaceTempC:-230,atmosphericPressureAtm:0,surfaceGravityG:.029,radiationIndex:4,hasLiquidWater:!1,isGasGiant:!1,composition:{WaterIce:85,Organics:15}},description:"Pluto's mutually tidally locked binary partner, marked by the reddish Mordor Macula north polar region.",tags:["moon","binary planet","kuiper belt"]},{id:"eris",name:"Eris",type:"dwarfPlanet",scaleTier:1,location:"Scattered Disc",galaxy:"Milky Way",solarSystem:"Sol",distanceFromEarthKm:144e8,radiusKm:1163,colorHex:15394527,orbit:{parentId:"sun",semiMajorAxisAu:67.8,eccentricity:.44,periodDays:203830,inclinationDeg:44},environment:{surfaceTempC:-243,atmosphericPressureAtm:0,surfaceGravityG:.084,radiationIndex:4,hasLiquidWater:!1,isGasGiant:!1,composition:{MethaneIce:70,NitrogenIce:30}},description:"A massive, ultra-reflective scattered disc dwarf planet whose 2005 discovery led to the modern definition of a planet.",tags:["dwarf planet","scattered disc","trans-neptunian"]},{id:"haumea",name:"Haumea",type:"dwarfPlanet",scaleTier:1,location:"Kuiper Belt",galaxy:"Milky Way",solarSystem:"Sol",distanceFromEarthKm:75e8,radiusKm:816,colorHex:14279659,orbit:{parentId:"sun",semiMajorAxisAu:43.1,eccentricity:.19,periodDays:103770,inclinationDeg:28.2},environment:{surfaceTempC:-240,atmosphericPressureAtm:0,surfaceGravityG:.045,radiationIndex:4,hasLiquidWater:!1,isGasGiant:!1,composition:{WaterIce:90,Rock:10}},description:"A bizarre, rapid-spinning football-shaped dwarf planet with crystalline ice rings and a 3.9-hour day.",tags:["dwarf planet","rings","fast rotator","kuiper belt"]},{id:"makemake",name:"Makemake",type:"dwarfPlanet",scaleTier:1,location:"Kuiper Belt",galaxy:"Milky Way",solarSystem:"Sol",distanceFromEarthKm:78e8,radiusKm:715,colorHex:13794643,orbit:{parentId:"sun",semiMajorAxisAu:45.4,eccentricity:.16,periodDays:112897,inclinationDeg:29},environment:{surfaceTempC:-239,atmosphericPressureAtm:0,surfaceGravityG:.051,radiationIndex:4,hasLiquidWater:!1,isGasGiant:!1,composition:{MethaneIce:80,EthaneIce:20}},description:"A brilliant reddish methane-snow world in the Kuiper Belt named after the Rapa Nui creator god.",tags:["dwarf planet","kuiper belt","methane ice"]},{id:"sedna",name:"90377 Sedna",type:"dwarfPlanet",scaleTier:1,location:"Inner Oort Cloud",galaxy:"Milky Way",solarSystem:"Sol",distanceFromEarthKm:13e9,radiusKm:498,colorHex:11881787,orbit:{parentId:"sun",semiMajorAxisAu:506,eccentricity:.85,periodDays:416e4,inclinationDeg:11.9},environment:{surfaceTempC:-240,atmosphericPressureAtm:0,surfaceGravityG:.034,radiationIndex:3,hasLiquidWater:!1,isGasGiant:!1,composition:{Tholins:60,WaterIce:40}},description:"One of the most distant known objects in the Solar System on an extreme 11,400-year inner Oort cloud orbit.",tags:["dwarf planet","oort cloud","extreme orbit"]},{id:"halley-comet",name:"Halley's Comet (1P/Halley)",type:"dwarfPlanet",scaleTier:1,location:"Solar System (Periodic)",galaxy:"Milky Way",solarSystem:"Sol",distanceFromEarthKm:52e8,radiusKm:5.5,colorHex:9479342,orbit:{parentId:"sun",semiMajorAxisAu:17.8,eccentricity:.967,periodDays:27500,inclinationDeg:162.3},environment:{surfaceTempC:-150,atmosphericPressureAtm:0,surfaceGravityG:3e-4,radiationIndex:5,hasLiquidWater:!1,isGasGiant:!1,composition:{WaterIce:80,CO:10,Carbon:10}},description:"Humanity's most famous periodic comet, lighting up Earth's skies every 75-76 years.",tags:["comet","periodic","dirty snowball"]},{id:"oumuamua",name:"'Oumuamua (1I/2017 U1)",type:"dwarfPlanet",scaleTier:1,location:"Exiting Solar System",galaxy:"Milky Way",solarSystem:null,distanceFromEarthKm:45e8,radiusKm:.2,colorHex:10048836,orbit:null,environment:{surfaceTempC:-220,atmosphericPressureAtm:0,surfaceGravityG:1e-5,radiationIndex:4,hasLiquidWater:!1,isGasGiant:!1,composition:{CarbonaceousTholins:100}},description:"The first interstellar visitor ever detected passing through our Solar System from deep interstellar space.",tags:["interstellar visitor","asteroid","hyperbolic"]},{id:"comet-67p",name:"Comet 67P/Churyumov–Gerasimenko",type:"dwarfPlanet",scaleTier:1,location:"Jupiter-family Comet",galaxy:"Milky Way",solarSystem:"Sol",distanceFromEarthKm:58e7,radiusKm:2.1,colorHex:5920080,orbit:{parentId:"sun",semiMajorAxisAu:3.46,eccentricity:.64,periodDays:2356,inclinationDeg:7.04},environment:{surfaceTempC:-120,atmosphericPressureAtm:0,surfaceGravityG:1e-4,radiationIndex:5,hasLiquidWater:!1,isGasGiant:!1,composition:{Organics:45,Silicates:45,WaterIce:10}},description:"The rubber-duck shaped comet rendezvoused with by ESA's Rosetta spacecraft and lander Philae.",tags:["comet","rosetta","philae"]},{id:"proxima-centauri",name:"Proxima Centauri",type:"star",scaleTier:2,location:"Nearest star to the Sun",galaxy:"Milky Way",solarSystem:"Alpha Centauri",distanceFromEarthKm:3992e10,radiusKm:107e3,colorHex:16739146,orbit:null,environment:{surfaceTempC:2800,atmosphericPressureAtm:0,surfaceGravityG:45,radiationIndex:9,hasLiquidWater:!1,isGasGiant:!1,composition:{Hydrogen:74,Helium:25,Other:1}},description:"A flare-active red dwarf star and humanity's closest stellar neighbor at 4.24 light-years.",tags:["star","red dwarf","closest star"]},{id:"proxima-b",name:"Proxima Centauri b",type:"planet",scaleTier:2,location:"Orbiting Proxima Centauri",galaxy:"Milky Way",solarSystem:"Alpha Centauri",distanceFromEarthKm:3992e10,radiusKm:7e3,colorHex:9413833,orbit:{parentId:"proxima-centauri",semiMajorAxisAu:.0485,eccentricity:.02,periodDays:11.2,inclinationDeg:0},environment:{surfaceTempC:-39,atmosphericPressureAtm:.6,surfaceGravityG:1.1,radiationIndex:7,hasLiquidWater:!0,isGasGiant:!1,composition:{N2:60,CO2:30,Other:10}},description:"A terrestrial exoplanet orbiting in Proxima's habitable zone, receiving frequent stellar flares.",tags:["exoplanet","planet","habitable zone","terrestrial"]},{id:"alpha-centauri-a",name:"Alpha Centauri A (Rigil Kentaurus)",type:"star",scaleTier:2,location:"Alpha Centauri system",galaxy:"Milky Way",solarSystem:"Alpha Centauri",distanceFromEarthKm:411e11,radiusKm:855e3,colorHex:16773840,orbit:null,environment:{surfaceTempC:5800,atmosphericPressureAtm:0,surfaceGravityG:24,radiationIndex:10,hasLiquidWater:!1,isGasGiant:!1,composition:{Hydrogen:71,Helium:27,Other:2}},description:"A bright yellow-orange G-type star slightly larger than our Sun in a close binary dance.",tags:["star","binary star","solar twin"]},{id:"alpha-centauri-b",name:"Alpha Centauri B (Toliman)",type:"star",scaleTier:2,location:"Alpha Centauri system",galaxy:"Milky Way",solarSystem:"Alpha Centauri",distanceFromEarthKm:411e11,radiusKm:6e5,colorHex:16754e3,orbit:null,environment:{surfaceTempC:5260,atmosphericPressureAtm:0,surfaceGravityG:30,radiationIndex:10,hasLiquidWater:!1,isGasGiant:!1,composition:{Hydrogen:72,Helium:26,Other:2}},description:"The orange K-dwarf companion star to Alpha Centauri A.",tags:["star","k dwarf","binary star"]},{id:"barnards-star",name:"Barnard's Star",type:"star",scaleTier:2,location:"Ophiuchus",galaxy:"Milky Way",solarSystem:"Barnard",distanceFromEarthKm:564e11,radiusKm:136e3,colorHex:16733491,orbit:null,environment:{surfaceTempC:3100,atmosphericPressureAtm:0,surfaceGravityG:40,radiationIndex:8,hasLiquidWater:!1,isGasGiant:!1,composition:{Hydrogen:74,Helium:25,Metals:1}},description:"An ancient red dwarf possessing the fastest known proper motion across Earth's night sky.",tags:["star","red dwarf","high proper motion"]},{id:"trappist-1",name:"TRAPPIST-1",type:"star",scaleTier:2,location:"Aquarius",galaxy:"Milky Way",solarSystem:"TRAPPIST-1",distanceFromEarthKm:373e12,radiusKm:84e3,colorHex:16726832,orbit:null,environment:{surfaceTempC:2280,atmosphericPressureAtm:0,surfaceGravityG:60,radiationIndex:8,hasLiquidWater:!1,isGasGiant:!1,composition:{Hydrogen:75,Helium:24,Other:1}},description:"An ultra-cool red dwarf star hosting a famous resonant system of 7 Earth-sized terrestrial planets.",tags:["star","ultra-cool dwarf","trappist"]},{id:"trappist-1e",name:"TRAPPIST-1e",type:"planet",scaleTier:2,location:"Orbiting TRAPPIST-1",galaxy:"Milky Way",solarSystem:"TRAPPIST-1",distanceFromEarthKm:373e12,radiusKm:5850,colorHex:4030156,orbit:{parentId:"trappist-1",semiMajorAxisAu:.029,eccentricity:.005,periodDays:6.1,inclinationDeg:89.8},environment:{surfaceTempC:-22,atmosphericPressureAtm:1.1,surfaceGravityG:.93,radiationIndex:4,hasLiquidWater:!0,isGasGiant:!1,composition:{N2:70,O2:18,CO2:10,WaterVapor:2}},description:"One of the most promising potentially habitable Earth-sized exoplanets known, with liquid water potential.",tags:["exoplanet","habitable zone","earth analog","trappist"]},{id:"trappist-1f",name:"TRAPPIST-1f",type:"planet",scaleTier:2,location:"Orbiting TRAPPIST-1",galaxy:"Milky Way",solarSystem:"TRAPPIST-1",distanceFromEarthKm:373e12,radiusKm:6660,colorHex:7775663,orbit:{parentId:"trappist-1",semiMajorAxisAu:.038,eccentricity:.01,periodDays:9.2,inclinationDeg:89.7},environment:{surfaceTempC:-54,atmosphericPressureAtm:1.5,surfaceGravityG:.88,radiationIndex:3,hasLiquidWater:!0,isGasGiant:!1,composition:{WaterIce:40,Silicates:60}},description:"A temperate water-rich world in the TRAPPIST-1 system, likely wrapped in a global deep ocean or ice shell.",tags:["exoplanet","ocean world","trappist"]},{id:"kepler-452b",name:"Kepler-452b",type:"planet",scaleTier:2,location:"Cygnus",galaxy:"Milky Way",solarSystem:"Kepler-452",distanceFromEarthKm:17e15,radiusKm:10380,colorHex:4889968,orbit:null,environment:{surfaceTempC:-8,atmosphericPressureAtm:2,surfaceGravityG:1.9,radiationIndex:2,hasLiquidWater:!0,isGasGiant:!1,composition:{N2:75,O2:15,CO2:10}},description:"'Earth's Older Cousin' — a super-Earth in the habitable zone of a G2-type sun-like star 1,800 light-years away.",tags:["exoplanet","super-earth","habitable zone","earth cousin"]},{id:"kepler-22b",name:"Kepler-22b",type:"planet",scaleTier:2,location:"Cygnus",galaxy:"Milky Way",solarSystem:"Kepler-22",distanceFromEarthKm:59e14,radiusKm:15290,colorHex:3906744,orbit:null,environment:{surfaceTempC:22,atmosphericPressureAtm:5,surfaceGravityG:1.8,radiationIndex:2,hasLiquidWater:!0,isGasGiant:!1,composition:{Water:60,H2_He:25,Silicates:15}},description:"The first confirmed exoplanet discovered by NASA's Kepler mission in the comfortable habitable zone of a sun-like star.",tags:["exoplanet","ocean world","habitable zone"]},{id:"kepler-186f",name:"Kepler-186f",type:"planet",scaleTier:2,location:"Cygnus",galaxy:"Milky Way",solarSystem:"Kepler-186",distanceFromEarthKm:55e14,radiusKm:7450,colorHex:9349238,orbit:null,environment:{surfaceTempC:-46,atmosphericPressureAtm:1,surfaceGravityG:1.15,radiationIndex:3,hasLiquidWater:!0,isGasGiant:!1,composition:{N2:76,CO2:20,O2:4}},description:"The historic first validated Earth-sized planet found in the habitable zone of an M-dwarf star.",tags:["exoplanet","earth-sized","habitable zone"]},{id:"55-cancri-e",name:"55 Cancri e (Janssen)",type:"planet",scaleTier:2,location:"Cancer",galaxy:"Milky Way",solarSystem:"Copernicus",distanceFromEarthKm:388e12,radiusKm:12e3,colorHex:16729344,orbit:null,environment:{surfaceTempC:2300,atmosphericPressureAtm:100,surfaceGravityG:2.2,radiationIndex:10,hasLiquidWater:!1,isGasGiant:!1,composition:{CarbonLava:50,SilicateLava:30,Iron:20}},description:"A super-hot, carbon-rich lava super-Earth with molten oceans on its dayside and possible diamond interior mantle.",tags:["exoplanet","lava world","diamond planet","super-earth"]},{id:"hd-189733-b",name:"HD 189733 b",type:"planet",scaleTier:2,location:"Vulpecula",galaxy:"Milky Way",solarSystem:"HD 189733",distanceFromEarthKm:61e13,radiusKm:80500,colorHex:1857753,orbit:null,environment:{surfaceTempC:930,atmosphericPressureAtm:0,surfaceGravityG:2.1,radiationIndex:9,hasLiquidWater:!1,isGasGiant:!0,composition:{SilicateClouds:40,H2:50,Methane:10}},description:"A cobalt-blue hot Jupiter where supersonic 8,700 km/h winds blow sideways showers of molten silicate glass.",tags:["exoplanet","hot jupiter","glass rain","cobalt blue"]},{id:"wasp-76b",name:"WASP-76b",type:"planet",scaleTier:2,location:"Pisces",galaxy:"Milky Way",solarSystem:"WASP-76",distanceFromEarthKm:6e15,radiusKm:13e4,colorHex:11680547,orbit:null,environment:{surfaceTempC:2400,atmosphericPressureAtm:0,surfaceGravityG:.6,radiationIndex:10,hasLiquidWater:!1,isGasGiant:!0,composition:{IronVapor:30,H2:60,Helium:10}},description:"An ultra-hot gas giant with dayside temperatures exceeding 2400°C where vaporized iron condenses into nightside iron rain.",tags:["exoplanet","ultra-hot jupiter","iron rain"]},{id:"k2-18b",name:"K2-18b",type:"planet",scaleTier:2,location:"Leo",galaxy:"Milky Way",solarSystem:"K2-18",distanceFromEarthKm:117e13,radiusKm:16600,colorHex:4620980,orbit:null,environment:{surfaceTempC:-7,atmosphericPressureAtm:15,surfaceGravityG:1.3,radiationIndex:4,hasLiquidWater:!0,isGasGiant:!1,composition:{H2_He:50,Methane:25,CO2:20,WaterVapor:5}},description:"A candidate Hycean sub-Neptune exoplanet with detected atmospheric methane and carbon dioxide in its habitable zone.",tags:["exoplanet","hycean","habitable zone","sub-neptune"]},{id:"psr-b1257-12-c",name:"PSR B1257+12 c (Poltergeist)",type:"planet",scaleTier:2,location:"Virgo",galaxy:"Milky Way",solarSystem:"Lich",distanceFromEarthKm:218e14,radiusKm:10200,colorHex:7372944,orbit:null,environment:{surfaceTempC:-120,atmosphericPressureAtm:.1,surfaceGravityG:2.8,radiationIndex:10,hasLiquidWater:!1,isGasGiant:!1,composition:{HeavyMetals:80,Silicates:20}},description:"A zombie super-Earth orbiting a rapidly spinning pulsar, bathed in lethal relativistic magnetic particle beams.",tags:["exoplanet","pulsar planet","extreme","zombie world"]},{id:"sirius-a",name:"Sirius A",type:"star",scaleTier:2,location:"Canis Major",galaxy:"Milky Way",solarSystem:"Sirius",distanceFromEarthKm:815e11,radiusKm:1192e3,colorHex:13625599,orbit:null,environment:{surfaceTempC:9940,atmosphericPressureAtm:0,surfaceGravityG:4.5,radiationIndex:10,hasLiquidWater:!1,isGasGiant:!1,composition:{Hydrogen:70,Helium:28,Other:2}},description:"The brightest star in Earth's night sky, blazing blue-white 8.6 light-years away.",tags:["star","brightest star","a-type star"]},{id:"vega",name:"Vega (Alpha Lyrae)",type:"star",scaleTier:2,location:"Lyra",galaxy:"Milky Way",solarSystem:"Vega",distanceFromEarthKm:237e12,radiusKm:1643e3,colorHex:14084351,orbit:null,environment:{surfaceTempC:9600,atmosphericPressureAtm:0,surfaceGravityG:3.5,radiationIndex:10,hasLiquidWater:!1,isGasGiant:!1,composition:{Hydrogen:72,Helium:26,Metals:2}},description:"A rapid-spinning oblate blue-white star with an extensive circumstellar dust and debris ring.",tags:["star","standard candle","debris ring"]},{id:"rigel",name:"Rigel (Beta Orionis)",type:"star",scaleTier:2,location:"Orion",galaxy:"Milky Way",solarSystem:"Rigel",distanceFromEarthKm:817e13,radiusKm:549e5,colorHex:10207999,orbit:null,environment:{surfaceTempC:12100,atmosphericPressureAtm:0,surfaceGravityG:.1,radiationIndex:10,hasLiquidWater:!1,isGasGiant:!1,composition:{Hydrogen:68,Helium:30,Other:2}},description:"A super-luminous blue supergiant star outshining our Sun by 120,000 times, lighting up the Orion region.",tags:["star","blue supergiant","orion"]},{id:"betelgeuse",name:"Betelgeuse (Alpha Orionis)",type:"star",scaleTier:2,location:"Orion",galaxy:"Milky Way",solarSystem:null,distanceFromEarthKm:3781e12,radiusKm:617e6,colorHex:16738876,orbit:null,environment:{surfaceTempC:3500,atmosphericPressureAtm:0,surfaceGravityG:.02,radiationIndex:9,hasLiquidWater:!1,isGasGiant:!1,composition:{Hydrogen:60,Helium:38,Other:2}},description:"A gigantic, pulsating red supergiant in Orion's shoulder destined to explode as a dramatic supernova.",tags:["star","red supergiant","supernova candidate"]},{id:"antares",name:"Antares (Alpha Scorpii)",type:"star",scaleTier:2,location:"Scorpius",galaxy:"Milky Way",solarSystem:null,distanceFromEarthKm:52e14,radiusKm:473e6,colorHex:16732979,orbit:null,environment:{surfaceTempC:3400,atmosphericPressureAtm:0,surfaceGravityG:.015,radiationIndex:9,hasLiquidWater:!1,isGasGiant:!1,composition:{Hydrogen:62,Helium:36,Other:2}},description:"The fiery red heart of Scorpius — an immense red supergiant star over 600 times the diameter of our Sun.",tags:["star","red supergiant","scorpius"]},{id:"aldebaran",name:"Aldebaran (Alpha Tauri)",type:"star",scaleTier:2,location:"Taurus",galaxy:"Milky Way",solarSystem:"Aldebaran",distanceFromEarthKm:618e12,radiusKm:307e5,colorHex:16747586,orbit:null,environment:{surfaceTempC:3900,atmosphericPressureAtm:0,surfaceGravityG:.2,radiationIndex:9,hasLiquidWater:!1,isGasGiant:!1,composition:{Hydrogen:69,Helium:29,Other:2}},description:"The brilliant orange giant star marking the fiery eye of the Bull in the constellation Taurus.",tags:["star","orange giant","taurus"]},{id:"polaris",name:"Polaris (The North Star)",type:"star",scaleTier:2,location:"Ursa Minor",galaxy:"Milky Way",solarSystem:"Polaris",distanceFromEarthKm:407e13,radiusKm:261e5,colorHex:16774363,orbit:null,environment:{surfaceTempC:6015,atmosphericPressureAtm:0,surfaceGravityG:.5,radiationIndex:9,hasLiquidWater:!1,isGasGiant:!1,composition:{Hydrogen:70,Helium:28,Metals:2}},description:"The iconic northern navigation star — a classic Cepheid variable supergiant leading a triple star system.",tags:["star","north star","cepheid variable","navigation"]},{id:"stephenson-2-18",name:"Stephenson 2-18",type:"star",scaleTier:2,location:"Scutum",galaxy:"Milky Way",solarSystem:null,distanceFromEarthKm:18e16,radiusKm:1496e6,colorHex:16730144,orbit:null,environment:{surfaceTempC:3200,atmosphericPressureAtm:0,surfaceGravityG:.001,radiationIndex:9,hasLiquidWater:!1,isGasGiant:!1,composition:{Hydrogen:55,Helium:43,Other:2}},description:"One of the largest known stars in the universe — a red hypergiant large enough to engulf Saturn's orbit.",tags:["star","hypergiant","largest star"]},{id:"r136a1",name:"R136a1",type:"star",scaleTier:2,location:"Tarantula Nebula (LMC)",galaxy:"Large Magellanic Cloud",solarSystem:null,distanceFromEarthKm:154e16,radiusKm:297e5,colorHex:8961023,orbit:null,environment:{surfaceTempC:46e3,atmosphericPressureAtm:0,surfaceGravityG:3.5,radiationIndex:10,hasLiquidWater:!1,isGasGiant:!1,composition:{Hydrogen:60,Helium:38,Metals:2}},description:"The most massive known star in the universe (~200 solar masses), radiating with blinding Wolf-Rayet winds.",tags:["star","most massive","wolf-rayet"]},{id:"crab-pulsar",name:"Crab Pulsar (PSR B0531+21)",type:"star",scaleTier:2,location:"Crab Nebula (Taurus)",galaxy:"Milky Way",solarSystem:null,distanceFromEarthKm:615e14,radiusKm:10,colorHex:7595775,orbit:null,environment:{surfaceTempC:1e6,atmosphericPressureAtm:0,surfaceGravityG:2e11,radiationIndex:10,hasLiquidWater:!1,isGasGiant:!1,composition:{Neutrons:95,SuperconductingProtons:5}},description:"A super-dense neutron star spinning 30 times per second, emitting flashing lighthouse beams of gamma and X-rays.",tags:["pulsar","neutron star","supernova remnant"]},{id:"sgr-1806-20",name:"SGR 1806-20 (Magnetar)",type:"star",scaleTier:2,location:"Sagittarius",galaxy:"Milky Way",solarSystem:null,distanceFromEarthKm:47e16,radiusKm:12,colorHex:16711935,orbit:null,environment:{surfaceTempC:2e6,atmosphericPressureAtm:0,surfaceGravityG:3e11,radiationIndex:10,hasLiquidWater:!1,isGasGiant:!1,composition:{DegenerateMatter:100}},description:"An ultra-magnetic neutron star with magnetic fields a quadrillion times stronger than Earth, producing colossal starquakes.",tags:["magnetar","neutron star","extreme magnetism"]},{id:"cygnus-x1",name:"Cygnus X-1",type:"blackHole",scaleTier:2,location:"Cygnus",galaxy:"Milky Way",solarSystem:null,distanceFromEarthKm:576e14,radiusKm:44,colorHex:1118488,orbit:null,environment:{surfaceTempC:NaN,atmosphericPressureAtm:0,surfaceGravityG:1/0,radiationIndex:10,hasLiquidWater:!1,isGasGiant:!1,composition:{Singularity:100}},description:"The first widely accepted stellar-mass black hole, violently feeding from its blue supergiant companion star.",tags:["black hole","stellar mass","x-ray binary"]},{id:"sagittarius-a-star",name:"Sagittarius A*",type:"blackHole",scaleTier:2,location:"Galactic Center",galaxy:"Milky Way",solarSystem:null,distanceFromEarthKm:2466e14,radiusKm:12e6,colorHex:1710626,orbit:null,environment:{surfaceTempC:NaN,atmosphericPressureAtm:0,surfaceGravityG:1/0,radiationIndex:10,hasLiquidWater:!1,isGasGiant:!1,composition:{Singularity:100}},description:"The 4-million-solar-mass supermassive black hole anchoring the gravitational core of our Milky Way.",tags:["black hole","galactic center","supermassive black hole"]},{id:"eagle-nebula",name:"Eagle Nebula (Pillars of Creation / M16)",type:"nebula",scaleTier:2,location:"Serpens",galaxy:"Milky Way",solarSystem:null,distanceFromEarthKm:6803e13,radiusKm:45e12,colorHex:14191450,orbit:null,environment:{surfaceTempC:NaN,atmosphericPressureAtm:0,surfaceGravityG:0,radiationIndex:6,hasLiquidWater:!1,isGasGiant:!1,composition:{Hydrogen:90,Dust:10}},description:"Towering gas and cosmic dust pillars where new infant stars are carved out of interstellar clouds.",tags:["nebula","pillars of creation","star nursery"]},{id:"orion-nebula",name:"Orion Nebula (M42)",type:"nebula",scaleTier:2,location:"Orion",galaxy:"Milky Way",solarSystem:null,distanceFromEarthKm:129e14,radiusKm:12e12,colorHex:16751313,orbit:null,environment:{surfaceTempC:NaN,atmosphericPressureAtm:0,surfaceGravityG:0,radiationIndex:6,hasLiquidWater:!1,isGasGiant:!1,composition:{Hydrogen:92,Dust:8}},description:"A brilliant, luminous stellar nursery visible to the naked eye as the middle star in Orion's sword.",tags:["nebula","star nursery","orion"]},{id:"carina-nebula",name:"Carina Nebula (NGC 3372)",type:"nebula",scaleTier:2,location:"Carina",galaxy:"Milky Way",solarSystem:null,distanceFromEarthKm:804e14,radiusKm:28e13,colorHex:16737945,orbit:null,environment:{surfaceTempC:NaN,atmosphericPressureAtm:0,surfaceGravityG:0,radiationIndex:7,hasLiquidWater:!1,isGasGiant:!1,composition:{Hydrogen:88,Dust:12}},description:"A colossal, bright diffuse nebula housing the unstable hypergiant star system Eta Carinae and the Mystic Mountain.",tags:["nebula","starburst","eta carinae"]},{id:"crab-nebula",name:"Crab Nebula (Messier 1)",type:"nebula",scaleTier:2,location:"Taurus",galaxy:"Milky Way",solarSystem:null,distanceFromEarthKm:615e14,radiusKm:52e12,colorHex:5099745,orbit:null,environment:{surfaceTempC:NaN,atmosphericPressureAtm:0,surfaceGravityG:0,radiationIndex:8,hasLiquidWater:!1,isGasGiant:!1,composition:{IonizedGas:90,SynchrotronPlasma:10}},description:"The glowing expanding debris shell of a supernova witnessed by Earth astronomers in the year 1054 CE.",tags:["nebula","supernova remnant","messier 1"]},{id:"horsehead-nebula",name:"Horsehead Nebula (Barnard 33)",type:"nebula",scaleTier:2,location:"Orion",galaxy:"Milky Way",solarSystem:null,distanceFromEarthKm:13e15,radiusKm:16e12,colorHex:9124410,orbit:null,environment:{surfaceTempC:NaN,atmosphericPressureAtm:0,surfaceGravityG:0,radiationIndex:5,hasLiquidWater:!1,isGasGiant:!1,composition:{DarkDust:70,MolecularHydrogen:30}},description:"A famous dark absorption nebula silhouetted majestically against glowing red ionized hydrogen gas.",tags:["nebula","dark nebula","horsehead"]},{id:"ring-nebula",name:"Ring Nebula (Messier 57)",type:"nebula",scaleTier:2,location:"Lyra",galaxy:"Milky Way",solarSystem:null,distanceFromEarthKm:243e14,radiusKm:95e11,colorHex:2541274,orbit:null,environment:{surfaceTempC:NaN,atmosphericPressureAtm:0,surfaceGravityG:0,radiationIndex:6,hasLiquidWater:!1,isGasGiant:!1,composition:{OxygenIII:40,NitrogenII:30,Hydrogen:30}},description:"A glowing planetary nebula smoke-ring shed by a dying central white dwarf star.",tags:["nebula","planetary nebula","white dwarf"]},{id:"helix-nebula",name:"Helix Nebula (The Eye of God / NGC 7293)",type:"nebula",scaleTier:2,location:"Aquarius",galaxy:"Milky Way",solarSystem:null,distanceFromEarthKm:619e13,radiusKm:14e12,colorHex:58879,orbit:null,environment:{surfaceTempC:NaN,atmosphericPressureAtm:0,surfaceGravityG:0,radiationIndex:5,hasLiquidWater:!1,isGasGiant:!1,composition:{Oxygen:45,Hydrogen:45,Nitrogen:10}},description:"One of the closest and most vivid planetary nebulae to Earth, resembling a giant cosmic eye.",tags:["nebula","eye of god","planetary nebula"]},{id:"tarantula-nebula",name:"Tarantula Nebula (30 Doradus)",type:"nebula",scaleTier:2,location:"Large Magellanic Cloud",galaxy:"Large Magellanic Cloud",solarSystem:null,distanceFromEarthKm:154e16,radiusKm:95e13,colorHex:16728193,orbit:null,environment:{surfaceTempC:NaN,atmosphericPressureAtm:0,surfaceGravityG:0,radiationIndex:8,hasLiquidWater:!1,isGasGiant:!1,composition:{Hydrogen:85,Helium:12,HeavyMetals:3}},description:"The most luminous and active starburst nursery region in the entire Local Group of galaxies.",tags:["nebula","starburst","lmc"]},{id:"milky-way",name:"The Milky Way",type:"galaxy",scaleTier:3,location:"Local Group",galaxy:"Milky Way",solarSystem:null,distanceFromEarthKm:0,radiusKm:473e15,colorHex:14273023,orbit:null,environment:{surfaceTempC:NaN,atmosphericPressureAtm:0,surfaceGravityG:0,radiationIndex:0,hasLiquidWater:!1,isGasGiant:!1,composition:{Trace:100}},description:"Our home barred spiral galaxy — 100 to 400 billion stars revolving around Sagittarius A*.",tags:["galaxy","home galaxy","spiral"]},{id:"andromeda",name:"Andromeda Galaxy (M31)",type:"galaxy",scaleTier:3,location:"Local Group",galaxy:"Local Group",solarSystem:null,distanceFromEarthKm:2365e16,radiusKm:11e17,colorHex:12375295,orbit:null,environment:{surfaceTempC:NaN,atmosphericPressureAtm:0,surfaceGravityG:0,radiationIndex:0,hasLiquidWater:!1,isGasGiant:!1,composition:{Trace:100}},description:"Our majestic neighboring spiral galaxy spanning one trillion stars, on collision course with the Milky Way in 4.5B years.",tags:["galaxy","local group","spiral"]},{id:"triangulum",name:"Triangulum Galaxy (M33)",type:"galaxy",scaleTier:3,location:"Local Group",galaxy:"Local Group",solarSystem:null,distanceFromEarthKm:2727e16,radiusKm:3e17,colorHex:13231103,orbit:null,environment:{surfaceTempC:NaN,atmosphericPressureAtm:0,surfaceGravityG:0,radiationIndex:0,hasLiquidWater:!1,isGasGiant:!1,composition:{Trace:100}},description:"The third-largest galaxy in our Local Group — a rich, pinwheel-like starburst spiral.",tags:["galaxy","local group","pinwheel"]},{id:"large-magellanic-cloud",name:"Large Magellanic Cloud (LMC)",type:"galaxy",scaleTier:3,location:"Milky Way Satellite",galaxy:"Local Group",solarSystem:null,distanceFromEarthKm:154e16,radiusKm:14e16,colorHex:16755601,orbit:null,environment:{surfaceTempC:NaN,atmosphericPressureAtm:0,surfaceGravityG:0,radiationIndex:0,hasLiquidWater:!1,isGasGiant:!1,composition:{Trace:100}},description:"A disrupted dwarf satellite galaxy orbiting the Milky Way, ablaze with active starburst regions.",tags:["galaxy","satellite galaxy","dwarf galaxy"]},{id:"small-magellanic-cloud",name:"Small Magellanic Cloud (SMC)",type:"galaxy",scaleTier:3,location:"Milky Way Satellite",galaxy:"Local Group",solarSystem:null,distanceFromEarthKm:193e16,radiusKm:7e16,colorHex:16764032,orbit:null,environment:{surfaceTempC:NaN,atmosphericPressureAtm:0,surfaceGravityG:0,radiationIndex:0,hasLiquidWater:!1,isGasGiant:!1,composition:{Trace:100}},description:"A dwarf galaxy companion to the LMC containing several hundred million stars.",tags:["galaxy","satellite galaxy","dwarf galaxy"]},{id:"sombrero-galaxy",name:"Sombrero Galaxy (Messier 104)",type:"galaxy",scaleTier:3,location:"Virgo / Corvus",galaxy:"Virgo Cluster",solarSystem:null,distanceFromEarthKm:277e18,radiusKm:48e16,colorHex:16769202,orbit:null,environment:{surfaceTempC:NaN,atmosphericPressureAtm:0,surfaceGravityG:0,radiationIndex:0,hasLiquidWater:!1,isGasGiant:!1,composition:{Trace:100}},description:"An unbarred spiral galaxy featuring an exceptionally bright bulbous core and a prominent dark dust absorption rim.",tags:["galaxy","sombrero","messier 104"]},{id:"whirlpool-galaxy",name:"Whirlpool Galaxy (Messier 51a)",type:"galaxy",scaleTier:3,location:"Canes Venatici",galaxy:"M51 Group",solarSystem:null,distanceFromEarthKm:218e18,radiusKm:36e16,colorHex:9489145,orbit:null,environment:{surfaceTempC:NaN,atmosphericPressureAtm:0,surfaceGravityG:0,radiationIndex:0,hasLiquidWater:!1,isGasGiant:!1,composition:{Trace:100}},description:"A classic grand-design spiral galaxy actively interacting and merging with its companion galaxy NGC 5195.",tags:["galaxy","grand design","spiral","messier 51"]},{id:"messier-87",name:"Messier 87 (Virgo A / M87*)",type:"galaxy",scaleTier:3,location:"Virgo Cluster",galaxy:"Virgo Cluster",solarSystem:null,distanceFromEarthKm:506e18,radiusKm:12e17,colorHex:16764032,orbit:null,environment:{surfaceTempC:NaN,atmosphericPressureAtm:0,surfaceGravityG:0,radiationIndex:0,hasLiquidWater:!1,isGasGiant:!1,composition:{Trace:100}},description:"A giant elliptical galaxy hosting the historic Event Horizon Telescope-imaged 6.5-billion-solar-mass black hole and a 5,000-ly relativistic plasma jet.",tags:["galaxy","elliptical","m87","supermassive black hole"]},{id:"centaurus-a",name:"Centaurus A (NGC 5128)",type:"galaxy",scaleTier:3,location:"Centaurus",galaxy:"Centaurus A Group",solarSystem:null,distanceFromEarthKm:123e18,radiusKm:6e17,colorHex:13538264,orbit:null,environment:{surfaceTempC:NaN,atmosphericPressureAtm:0,surfaceGravityG:0,radiationIndex:0,hasLiquidWater:!1,isGasGiant:!1,composition:{Trace:100}},description:"A dramatic active radio galaxy crossed by a dense warped dust lane and shooting massive plasma jets into intergalactic space.",tags:["galaxy","radio galaxy","active galaxy"]},{id:"hoags-object",name:"Hoag's Object",type:"galaxy",scaleTier:3,location:"Serpens Caput",galaxy:"Isolated",solarSystem:null,distanceFromEarthKm:579e19,radiusKm:57e16,colorHex:8445674,orbit:null,environment:{surfaceTempC:NaN,atmosphericPressureAtm:0,surfaceGravityG:0,radiationIndex:0,hasLiquidWater:!1,isGasGiant:!1,composition:{Trace:100}},description:"A rare, perfectly symmetrical ring galaxy with a luminous circle of young blue star clusters surrounding a golden nucleus.",tags:["galaxy","ring galaxy","exotic galaxy"]},{id:"ton-618",name:"TON 618 (Hyperluminous Quasar)",type:"blackHole",scaleTier:4,location:"Canes Venatici",galaxy:"TON 618",solarSystem:null,distanceFromEarthKm:172e21,radiusKm:195e9,colorHex:16711765,orbit:null,environment:{surfaceTempC:NaN,atmosphericPressureAtm:0,surfaceGravityG:1/0,radiationIndex:10,hasLiquidWater:!1,isGasGiant:!1,composition:{Singularity:100}},description:"An ultra-massive black hole of 66 billion solar masses powering a hyperluminous quasar that shines brighter than 140 trillion suns.",tags:["quasar","black hole","ultra-massive","brightest object"]},{id:"quasar-3c273",name:"3C 273",type:"blackHole",scaleTier:4,location:"Virgo",galaxy:"3C 273 Host",solarSystem:null,distanceFromEarthKm:231e20,radiusKm:26e8,colorHex:16766720,orbit:null,environment:{surfaceTempC:NaN,atmosphericPressureAtm:0,surfaceGravityG:1/0,radiationIndex:10,hasLiquidWater:!1,isGasGiant:!1,composition:{Singularity:100}},description:"The first quasar ever identified in 1963, powered by a billion-solar-mass central engine shooting a 200,000-light-year plasma jet.",tags:["quasar","first quasar","active galactic nucleus"]},{id:"virgo-cluster",name:"Virgo Galaxy Cluster",type:"structure",scaleTier:4,location:"Virgo Supercluster Core",galaxy:"Virgo Supercluster",solarSystem:null,distanceFromEarthKm:51e19,radiusKm:71e18,colorHex:16766287,orbit:null,environment:{surfaceTempC:NaN,atmosphericPressureAtm:0,surfaceGravityG:0,radiationIndex:0,hasLiquidWater:!1,isGasGiant:!1,composition:{Galaxies:1300,DarkMatter:80}},description:"The colossal cluster of over 1,300 galaxies forming the heart of the Local Supercluster.",tags:["galaxy cluster","structure","virgo"]},{id:"great-attractor",name:"The Great Attractor",type:"structure",scaleTier:4,location:"Zone of Avoidance (Norma Cluster)",galaxy:"Laniakea",solarSystem:null,distanceFromEarthKm:208e19,radiusKm:3e20,colorHex:16740419,orbit:null,environment:{surfaceTempC:NaN,atmosphericPressureAtm:0,surfaceGravityG:0,radiationIndex:0,hasLiquidWater:!1,isGasGiant:!1,composition:{GravitationalAnomaly:100}},description:"An immense gravitational anomaly pulling millions of galaxies across hundreds of millions of light-years toward its mysterious center.",tags:["great attractor","gravitational anomaly","structure"]},{id:"bootes-void",name:"Boötes Void (The Great Nothing)",type:"structure",scaleTier:4,location:"Boötes",galaxy:"Intergalactic Space",solarSystem:null,distanceFromEarthKm:662e19,radiusKm:156e19,colorHex:3622735,orbit:null,environment:{surfaceTempC:-270.4,atmosphericPressureAtm:0,surfaceGravityG:0,radiationIndex:0,hasLiquidWater:!1,isGasGiant:!1,composition:{NearVacuum:100}},description:"A gigantic sphere of nearly empty space 330 million light-years across containing almost no galaxies.",tags:["void","the great nothing","structure"]},{id:"laniakea",name:"Laniakea Supercluster",type:"structure",scaleTier:4,location:"Local Supercluster",galaxy:"Laniakea",solarSystem:null,distanceFromEarthKm:0,radiusKm:47e20,colorHex:16771522,orbit:null,environment:{surfaceTempC:NaN,atmosphericPressureAtm:0,surfaceGravityG:0,radiationIndex:0,hasLiquidWater:!1,isGasGiant:!1,composition:{Trace:100}},description:'The vast supercluster of 100,000 galaxies that contains the Milky Way — "immense heaven" in Hawaiian.',tags:["supercluster","structure","laniakea"]},{id:"cosmic-web",name:"The Cosmic Web",type:"structure",scaleTier:4,location:"Observable Universe",galaxy:"Observable Universe",solarSystem:null,distanceFromEarthKm:0,radiusKm:44e22,colorHex:10475263,orbit:null,environment:{surfaceTempC:NaN,atmosphericPressureAtm:0,surfaceGravityG:0,radiationIndex:0,hasLiquidWater:!1,isGasGiant:!1,composition:{Trace:100}},description:"The immense filament-and-void scaffolding of dark matter along which every galaxy in existence is strung.",tags:["cosmic web","structure","universe scaffolding"]},{id:"cmb-horizon",name:"Cosmic Microwave Background Horizon",type:"structure",scaleTier:4,location:"Edge of the observable universe",galaxy:"Observable Universe",solarSystem:null,distanceFromEarthKm:44e22,radiusKm:0,colorHex:16766888,orbit:null,environment:{surfaceTempC:-270.4,atmosphericPressureAtm:0,surfaceGravityG:0,radiationIndex:0,hasLiquidWater:!1,isGasGiant:!1,composition:{PrimordialPhotons:100}},description:"The faint thermal afterglow of the Big Bang itself — the oldest and farthest light in the cosmos (13.8 billion years old).",tags:["cmb","big bang","structure","edge of universe"]}],Pg=new Map(en.map(i=>[i.id,i]));function Qn(i){return Pg.get(i)??null}function Ig(i,e=en){const t=String(i??"").trim().toLowerCase();if(!t)return[];const n=[],s=[];for(const r of e)r.name.toLowerCase().includes(t)?n.push(r):(r.tags.some(o=>o.toLowerCase().includes(t))||r.location.toLowerCase().includes(t))&&s.push(r);return n.sort((r,a)=>r.name.length-a.name.length),[...n,...s]}const Dg=["id","name","type","scaleTier","location","galaxy","solarSystem","distanceFromEarthKm","radiusKm","colorHex","orbit","environment","description","tags"],Og=["surfaceTempC","atmosphericPressureAtm","surfaceGravityG","radiationIndex","hasLiquidWater","isGasGiant","composition"];function Ng(i=en){const e=[],t=new Set;if(!Array.isArray(i)||i.length===0)return{valid:!1,errors:["Celestial database is empty"]};for(const n of i){const s=n?.id??"(missing id)";for(const a of Dg)a in(n??{})||e.push(`${s}: missing field "${a}"`);n?.id&&(t.has(n.id)&&e.push(`${s}: duplicate id`),t.add(n.id)),(typeof n?.scaleTier!="number"||n.scaleTier<0||n.scaleTier>4)&&e.push(`${s}: scaleTier out of range [0,4]`),(typeof n?.distanceFromEarthKm!="number"||n.distanceFromEarthKm<0)&&e.push(`${s}: distanceFromEarthKm must be >= 0`),(typeof n?.radiusKm!="number"||n.radiusKm<0)&&e.push(`${s}: radiusKm must be >= 0`),n?.orbit&&(typeof n.orbit.semiMajorAxisAu!="number"&&e.push(`${s}: orbit.semiMajorAxisAu must be a number`),(typeof n.orbit.periodDays!="number"||n.orbit.periodDays<=0)&&e.push(`${s}: orbit.periodDays must be > 0`));const r=n?.environment;if(!r)e.push(`${s}: missing environment`);else for(const a of Og)a in r||e.push(`${s}: environment missing "${a}"`);Array.isArray(n?.tags)||e.push(`${s}: tags must be an array`)}return{valid:e.length===0,errors:e}}const wn=[{id:"iss",name:"International Space Station",agency:"NASA / Roscosmos / ESA / JAXA / CSA",launchYear:1998,status:"Active",purpose:"Continuously crewed orbital research laboratory",location:"Low Earth Orbit, ~400 km up",orbitsBodyId:"earth",distanceFromEarthKm:400,colorHex:14342874,description:"Humanity’s home in orbit since 2000 — a shared laboratory circling Earth every 93 minutes."},{id:"hubble",name:"Hubble Space Telescope",agency:"NASA / ESA",launchYear:1990,status:"Active",purpose:"Optical / UV / Near-IR space observatory",location:"Low Earth Orbit, ~540 km up",orbitsBodyId:"earth",distanceFromEarthKm:540,colorHex:15918786,description:"The legendary observatory that transformed our understanding of cosmic age and expansion."},{id:"jwst",name:"James Webb Space Telescope",agency:"NASA / ESA / CSA",launchYear:2021,status:"Active",purpose:"Deep infrared space observatory",location:"Sun-Earth L2 Lagrange point, ~1.5M km from Earth",orbitsBodyId:null,distanceFromEarthKm:15e5,colorHex:16373644,description:"Humanity's golden-mirrored infrared eye peering back to the very first galaxies after the Big Bang."},{id:"parker-solar-probe",name:"Parker Solar Probe",agency:"NASA",launchYear:2018,status:"Active",purpose:"Solar corona in-situ exploration",location:"Inner Solar System / Solar Corona",orbitsBodyId:"sun",distanceFromEarthKm:13e7,colorHex:16755268,description:"The fastest human-made craft ever built (700,000 km/h), repeatedly 'touching' the Sun's blistering corona."},{id:"voyager-1",name:"Voyager 1",agency:"NASA",launchYear:1977,status:"Interstellar",purpose:"Outer planet flybys, now interstellar exploration",location:"Interstellar space, beyond the heliopause",orbitsBodyId:null,distanceFromEarthKm:24e9,colorHex:12109008,description:"Humanity’s farthest-flung emissary, carrying the Golden Record beyond our Sun’s protective bubble."},{id:"voyager-2",name:"Voyager 2",agency:"NASA",launchYear:1977,status:"Interstellar",purpose:"Grand Tour of Jupiter, Saturn, Uranus, and Neptune",location:"Interstellar space, southern celestial hemisphere",orbitsBodyId:null,distanceFromEarthKm:2e10,colorHex:12109008,description:"The only spacecraft to date to have visited all four outer gas and ice giant worlds."},{id:"new-horizons",name:"New Horizons",agency:"NASA",launchYear:2006,status:"Active",purpose:"Pluto system and Kuiper Belt reconnaissance",location:"Kuiper Belt, beyond Pluto and Arrokoth",orbitsBodyId:null,distanceFromEarthKm:88e8,colorHex:14141608,description:"The intrepid probe that unveiled the high-resolution glaciers, mountains, and heart of Pluto in 2015."},{id:"cassini-huygens",name:"Cassini-Huygens",agency:"NASA / ESA / ASI",launchYear:1997,status:"Deorbited",purpose:"Saturn system orbital exploration and Titan landing",location:"Atmosphere of Saturn (Grand Finale dive)",orbitsBodyId:"saturn",distanceFromEarthKm:1275e6,colorHex:13938487,description:"Explored Saturn's rings, dropped the Huygens lander on Titan, and found Enceladus's cryovolcanic geysers."},{id:"juno",name:"Juno",agency:"NASA",launchYear:2011,status:"Active",purpose:"Jupiter polar orbit and interior structure mapping",location:"Polar orbit around Jupiter",orbitsBodyId:"jupiter",distanceFromEarthKm:6287e5,colorHex:14719829,description:"Solar-powered spacecraft peeling back the deep cloud layers, storms, and magnetic dynamos of Jupiter."},{id:"kepler-telescope",name:"Kepler Space Telescope",agency:"NASA",launchYear:2009,status:"Inactive",purpose:"Exoplanet transit discovery mission",location:"Earth-trailing heliocentric orbit",orbitsBodyId:null,distanceFromEarthKm:15e7,colorHex:9489145,description:"The prolific planet-hunter that discovered over 2,600 verified alien worlds across our galaxy."},{id:"chandra",name:"Chandra X-ray Observatory",agency:"NASA",launchYear:1999,status:"Active",purpose:"High-resolution X-ray astronomical imaging",location:"High Earth Orbit",orbitsBodyId:"earth",distanceFromEarthKm:14e4,colorHex:11766015,description:"Capturing high-energy X-rays from exploding stars, accretion disks, and supermassive black holes."},{id:"spitzer",name:"Spitzer Space Telescope",agency:"NASA",launchYear:2003,status:"Inactive",purpose:"Infrared space astronomy",location:"Earth-trailing heliocentric orbit",orbitsBodyId:null,distanceFromEarthKm:26e7,colorHex:16747136,description:"Unveiled the infrared universe, discovering planetary systems and imaging deep star-forming nurseries."},{id:"pioneer-10",name:"Pioneer 10",agency:"NASA",launchYear:1972,status:"Inactive",purpose:"First mission to traverse the asteroid belt and visit Jupiter",location:"Interstellar trajectory toward Aldebaran",orbitsBodyId:null,distanceFromEarthKm:195e8,colorHex:12962537,description:"The trailblazer carrying the iconic Pioneer plaque, bound toward the star Aldebaran over millions of years."},{id:"rosetta",name:"Rosetta & Philae",agency:"ESA",launchYear:2004,status:"Deorbited",purpose:"First comet orbital rendezvous and soft landing",location:"Surface of Comet 67P/Churyumov–Gerasimenko",orbitsBodyId:"comet-67p",distanceFromEarthKm:58e7,colorHex:8440772,description:"Achieved the historic first orbital escort and robotic surface landing on a speeding comet."},{id:"osiris-rex",name:"OSIRIS-REx / OSIRIS-APEX",agency:"NASA",launchYear:2016,status:"Active",purpose:"Asteroid Bennu sample return, en route to Apophis",location:"Interplanetary trajectory toward asteroid Apophis",orbitsBodyId:null,distanceFromEarthKm:32e7,colorHex:16772696,description:"Successfully delivered pristine carbonaceous sample material from asteroid Bennu back to Earth in 2023."},{id:"hayabusa2",name:"Hayabusa2",agency:"JAXA",launchYear:2014,status:"Active",purpose:"Asteroid Ryugu sample return, extended mission",location:"Interplanetary trajectory",orbitsBodyId:null,distanceFromEarthKm:28e7,colorHex:16740419,description:"Fired kinetic impactors and returned pristine organic and water-bearing fragments from asteroid Ryugu."},{id:"chandrayaan-3",name:"Chandrayaan-3 (Vikram & Pragyan)",agency:"ISRO",launchYear:2023,status:"Inactive",purpose:"Lunar south polar soft landing and rover exploration",location:"Lunar South Pole (Shiv Shakti Point)",orbitsBodyId:"moon",distanceFromEarthKm:384400,colorHex:16750899,description:"Humanity's first successful soft landing at the Moon’s southern polar highland region."},{id:"tianwen-1",name:"Tianwen-1 & Zhurong",agency:"CNSA",launchYear:2020,status:"Active",purpose:"Mars orbiter and Utopia Planitia rover",location:"Mars Orbit & Utopia Planitia",orbitsBodyId:"mars",distanceFromEarthKm:783e5,colorHex:15684432,description:"China's comprehensive maiden Mars mission, deploying an orbiter, lander, and subterranean radar rover."},{id:"solar-orbiter",name:"Solar Orbiter",agency:"ESA / NASA",launchYear:2020,status:"Active",purpose:"High-latitude imagery of the Sun's polar regions",location:"Inner heliocentric elliptical orbit",orbitsBodyId:"sun",distanceFromEarthKm:95e6,colorHex:16758605,description:"Capturing the closest-ever photographs of the Sun and unprecedented views of its uncharted north and south poles."},{id:"psyche-probe",name:"Psyche",agency:"NASA",launchYear:2023,status:"Active",purpose:"Exploration of metallic asteroid 16 Psyche",location:"En route to the Main Asteroid Belt (2029 arrival)",orbitsBodyId:null,distanceFromEarthKm:42e7,colorHex:9479342,description:"Equipped with Hall-effect thrusters to explore a unique world made largely of exposed nickel-iron metallic core material."}],Ug=new Map(wn.map(i=>[i.id,i]));function rs(i){return Ug.get(i)??null}function Fg(i,e=wn){const t=String(i??"").trim().toLowerCase();if(!t)return[];const n=[],s=[];for(const r of e)r.name.toLowerCase().includes(t)?n.push(r):(r.agency.toLowerCase().includes(t)||r.location.toLowerCase().includes(t)||r.purpose.toLowerCase().includes(t)||r.status.toLowerCase().includes(t))&&s.push(r);return n.sort((r,a)=>r.name.length-a.name.length),[...n,...s]}const Gg=["id","name","agency","launchYear","status","purpose","location","orbitsBodyId","distanceFromEarthKm","colorHex","description"],Bg=new Set(["Active","Inactive","Deorbited","Interstellar"]);function Hg(i=wn){const e=[],t=new Set;if(!Array.isArray(i)||i.length===0)return{valid:!1,errors:["Satellite database is empty"]};const n=new Date().getFullYear();for(const s of i){const r=s?.id??"(missing id)";for(const a of Gg)a in(s??{})||e.push(`${r}: missing field "${a}"`);s?.id&&(t.has(s.id)&&e.push(`${r}: duplicate id`),t.add(s.id)),s?.status&&!Bg.has(s.status)&&e.push(`${r}: invalid status "${s.status}"`),(typeof s?.launchYear!="number"||s.launchYear<1957||s.launchYear>n+2)&&e.push(`${r}: launchYear out of range [1957, ${n+2}]`),(typeof s?.distanceFromEarthKm!="number"||s.distanceFromEarthKm<0)&&e.push(`${r}: distanceFromEarthKm must be >= 0`)}return{valid:e.length===0,errors:e}}function kg({color:i=7189503,intensity:e=1}={}){return new It({uniforms:{uColor:{value:new Pe(i)},uIntensity:{value:e}},vertexShader:`
      varying vec3 vNormal;
      varying vec3 vViewDir;
      void main() {
        vNormal = normalize(normalMatrix * normal);
        vec4 viewPosition = modelViewMatrix * vec4(position, 1.0);
        vViewDir = normalize(-viewPosition.xyz);
        gl_Position = projectionMatrix * viewPosition;
      }
    `,fragmentShader:`
      uniform vec3 uColor;
      uniform float uIntensity;
      varying vec3 vNormal;
      varying vec3 vViewDir;
      void main() {
        float fresnel = pow(1.0 - clamp(dot(vNormal, vViewDir), 0.0, 1.0), 2.5);
        vec3 glow = uColor * fresnel * uIntensity;
        gl_FragColor = vec4(glow, fresnel * 0.85);
      }
    `,transparent:!0,depthWrite:!1,side:Dt,blending:ot})}function zg({color:i=16765562}={}){return new It({uniforms:{uColor:{value:new Pe(i)},uTime:{value:0}},vertexShader:`
      varying vec3 vPosition;
      void main() {
        vPosition = position;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
      }
    `,fragmentShader:`
      uniform vec3 uColor;
      uniform float uTime;
      varying vec3 vPosition;

      // Cheap 3D value-noise approximation (no textures needed).
      float hash(vec3 p) {
        p = fract(p * 0.3183099 + 0.1);
        p *= 17.0;
        return fract(p.x * p.y * p.z * (p.x + p.y + p.z));
      }

      void main() {
        vec3 p = normalize(vPosition) * 3.0 + vec3(0.0, uTime * 0.15, 0.0);
        float n = hash(floor(p * 4.0)) * 0.6 + hash(floor(p * 8.0)) * 0.4;
        vec3 color = uColor * (0.75 + n * 0.5);
        gl_FragColor = vec4(color, 1.0);
      }
    `})}function Vg(){return new It({uniforms:{uTime:{value:0}},vertexShader:`
      varying vec3 vNormal;
      void main() {
        vNormal = normalize(normalMatrix * normal);
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
      }
    `,fragmentShader:`
      varying vec3 vNormal;
      void main() {
        float rim = pow(1.0 - abs(vNormal.z), 3.0);
        vec3 color = mix(vec3(0.0), vec3(0.15, 0.05, 0.25), rim);
        gl_FragColor = vec4(color, 1.0);
      }
    `})}function Wg(){return new It({uniforms:{uTime:{value:0}},vertexShader:`
      varying vec2 vUv;
      void main() {
        vUv = uv;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
      }
    `,fragmentShader:`
      uniform float uTime;
      varying vec2 vUv;
      void main() {
        vec2 centered = vUv - 0.5;
        float radius = length(centered) * 2.0;
        float angle = atan(centered.y, centered.x) + uTime * 0.8;
        float swirl = sin(angle * 6.0 + radius * 12.0) * 0.5 + 0.5;
        float ring = smoothstep(0.32, 0.48, radius) * (1.0 - smoothstep(0.88, 1.0, radius));

        // Relativistic Doppler beaming: approaching side (left / -x) is blueshifted & brighter,
        // receding side (right / +x) is redshifted & dimmer
        float dopplerFactor = clamp(-centered.x * 2.2 + 0.5, 0.2, 1.8);
        vec3 blueShiftColor = vec3(0.5, 0.8, 1.4) * dopplerFactor;
        vec3 redShiftColor = vec3(1.4, 0.35, 0.1) * (2.0 - dopplerFactor);
        vec3 baseColor = mix(redShiftColor, blueShiftColor, clamp(-centered.x + 0.5, 0.0, 1.0));
        vec3 finalColor = mix(baseColor, vec3(1.0, 0.95, 0.8), swirl * 0.5);

        gl_FragColor = vec4(finalColor, ring * (0.6 + swirl * 0.4) * dopplerFactor);
      }
    `,transparent:!0,side:St,depthWrite:!1,blending:ot})}function Qs(i,e){const t=Math.sin(i*127.1+e*311.7)*43758.5453123;return t-Math.floor(t)}function pr(i,e){const t=Math.floor(i),n=Math.floor(e),s=i-t,r=e-n,a=s*s*(3-2*s),o=r*r*(3-2*r),l=Qs(t,n),c=Qs(t+1,n),u=Qs(t,n+1),h=Qs(t+1,n+1);return l+(c-l)*a+(u-l)*o+(l-c-u+h)*a*o}function ct(i,e,t=4){let n=0,s=.5,r=1;for(let a=0;a<t;a++)n+=s*pr(i*r,e*r),r*=2,s*=.5;return n}function qg(i,e=512){const t=document.createElement("canvas");t.width=e,t.height=e;const n=t.getContext("2d");if(!n)return new Hn(t);switch(i){case"earth":Yg(n,e);break;case"jupiter":$g(n,e);break;case"saturn":jg(n,e);break;case"mars":Zg(n,e);break;case"moon":case"phobos":case"deimos":case"ceres":case"vesta":Jg(n,e);break;case"venus":Qg(n,e);break;case"mercury":e_(n,e);break;case"europa":t_(n,e);break;case"titan":n_(n,e);break;case"uranus":i_(n,e);break;case"neptune":s_(n,e);break;case"io":o_(n,e);break;case"enceladus":l_(n,e);break;case"pluto":c_(n,e);break;case"charon":u_(n,e);break;case"55-cancri-e":h_(n,e);break;case"hd-189733-b":d_(n,e);break;case"wasp-76b":f_(n,e);break;case"trappist-1e":case"trappist-1f":case"kepler-452b":case"kepler-22b":case"kepler-186f":case"k2-18b":case"proxima-b":p_(n,e,i);break;case"sedna":case"makemake":m_(n,e);break;case"haumea":case"eris":g_(n,e);break;case"ganymede":case"callisto":case"iapetus":case"mimas":case"miranda":case"triton":__(n,e,i);break;default:r_(n,e);break}const s=new Hn(t);return s.colorSpace=xt,s}function Xg(i=512){const e=document.createElement("canvas");e.width=i,e.height=i;const t=e.getContext("2d");if(!t)return new Hn(e);t.clearRect(0,0,i,i);const n=t.createImageData(i,i),s=n.data;for(let a=0;a<i;a++){const o=(a/i-.5)*Math.PI;for(let l=0;l<i;l++){const c=(a*i+l)*4,u=l/i*8,h=a/i*4,d=Math.sin(o*4)*1.2,p=ct(u+d,h,5),g=Math.max(0,(p-.46)*2.8),_=Math.min(Math.floor(g*220),220);s[c]=255,s[c+1]=255,s[c+2]=255,s[c+3]=_}}t.putImageData(n,0,0);const r=new Hn(e);return r.colorSpace=xt,r}function Kg(i=512){const e=document.createElement("canvas");e.width=i,e.height=16;const t=e.getContext("2d");if(!t)return new Hn(e);const n=t.createLinearGradient(0,0,i,0);n.addColorStop(0,"rgba(140, 120, 95, 0.0)"),n.addColorStop(.08,"rgba(160, 135, 105, 0.35)"),n.addColorStop(.22,"rgba(180, 150, 115, 0.45)"),n.addColorStop(.24,"rgba(230, 205, 160, 0.95)"),n.addColorStop(.38,"rgba(245, 225, 185, 0.98)"),n.addColorStop(.54,"rgba(215, 190, 145, 0.90)"),n.addColorStop(.57,"rgba(30, 25, 20, 0.05)"),n.addColorStop(.63,"rgba(40, 32, 25, 0.08)"),n.addColorStop(.66,"rgba(210, 185, 145, 0.85)"),n.addColorStop(.78,"rgba(225, 200, 160, 0.80)"),n.addColorStop(.88,"rgba(195, 170, 130, 0.70)"),n.addColorStop(.92,"rgba(60, 50, 40, 0.1)"),n.addColorStop(.96,"rgba(170, 145, 115, 0.4)"),n.addColorStop(1,"rgba(120, 100, 80, 0.0)"),t.fillStyle=n,t.fillRect(0,0,i,16);const s=new Hn(e);return s.colorSpace=xt,s}function Yg(i,e){const t=i.createImageData(e,e),n=t.data;for(let s=0;s<e;s++){const r=s/e,a=Math.min(r,1-r);for(let o=0;o<e;o++){const l=(s*e+o)*4,c=o/e*5.5,u=s/e*2.8,h=ct(c,u,6);if(a<.12+h*.06){n[l]=238,n[l+1]=245,n[l+2]=255,n[l+3]=255;continue}if(h>.48){const d=(h-.48)/.52;d<.35?(n[l]=Math.floor(34+d*40),n[l+1]=Math.floor(125+d*30),n[l+2]=Math.floor(45+d*20)):d<.7?(n[l]=Math.floor(168+d*40),n[l+1]=Math.floor(140+d*20),n[l+2]=Math.floor(75+d*15)):(n[l]=Math.floor(175+d*60),n[l+1]=Math.floor(170+d*65),n[l+2]=Math.floor(165+d*70))}else{const d=(.48-h)/.48;n[l]=Math.floor(12+(1-d)*28),n[l+1]=Math.floor(45+(1-d)*65),n[l+2]=Math.floor(125+(1-d)*90)}n[l+3]=255}}i.putImageData(t,0,0)}function $g(i,e){const t=i.createImageData(e,e),n=t.data,s=.62,r=.65,a=.11,o=.055;for(let l=0;l<e;l++){const c=l/e,u=ct(c*24,.5,3)*.08,h=Math.sin((c+u)*Math.PI*14);for(let d=0;d<e;d++){const p=d/e,g=(l*e+d)*4,_=ct(p*8,c*12,4)*.25;let m,f,y;h+_>.1?(m=Math.floor(228+_*40),f=Math.floor(198+_*30),y=Math.floor(155+_*20)):(m=Math.floor(180-_*50),f=Math.floor(115-_*35),y=Math.floor(70-_*25));const v=(p-s)/a,S=(c-r)/o,R=v*v+S*S;if(R<1){const A=1-Math.sqrt(R),w=Math.sin(Math.atan2(S,v)*3+Math.sqrt(R)*10)*.2;m=Math.floor(m*(1-A)+(215+w*30)*A),f=Math.floor(f*(1-A)+(80+w*20)*A),y=Math.floor(y*(1-A)+(50+w*15)*A)}n[g]=Math.min(255,Math.max(0,m)),n[g+1]=Math.min(255,Math.max(0,f)),n[g+2]=Math.min(255,Math.max(0,y)),n[g+3]=255}}i.putImageData(t,0,0)}function jg(i,e){const t=i.createImageData(e,e),n=t.data;for(let s=0;s<e;s++){const r=s/e,a=Math.sin(r*Math.PI*18)*.15,o=Math.sin(r*Math.PI*45)*.08;for(let l=0;l<e;l++){const c=(s*e+l)*4,u=l/e,h=ct(u*4,r*8,3)*.06,d=a+o+h,p=Math.floor(234+d*30),g=Math.floor(212+d*25),_=Math.floor(168+d*20);n[c]=Math.min(255,Math.max(0,p)),n[c+1]=Math.min(255,Math.max(0,g)),n[c+2]=Math.min(255,Math.max(0,_)),n[c+3]=255}}i.putImageData(t,0,0)}function Zg(i,e){const t=i.createImageData(e,e),n=t.data;for(let s=0;s<e;s++){const r=s/e,a=Math.min(r,1-r);for(let o=0;o<e;o++){const l=(s*e+o)*4,c=o/e*6,u=s/e*3,h=ct(c,u,5);if(a<.09+h*.03){n[l]=245,n[l+1]=245,n[l+2]=250,n[l+3]=255;continue}if(h<.42){const d=(.42-h)/.42;n[l]=Math.floor(115-d*30),n[l+1]=Math.floor(65-d*20),n[l+2]=Math.floor(45-d*15)}else{const d=(h-.42)/.58;n[l]=Math.floor(198+d*35),n[l+1]=Math.floor(95+d*25),n[l+2]=Math.floor(48+d*15)}n[l+3]=255}}i.putImageData(t,0,0)}function Jg(i,e){const t=i.createImageData(e,e),n=t.data;for(let s=0;s<e;s++)for(let r=0;r<e;r++){const a=(s*e+r)*4,o=r/e*8,l=s/e*4,c=ct(o*.5,l*.5,4),u=ct(o*3,l*3,4);let h=150+c*55+u*25;c<.38&&(h*=.65);const d=Math.min(255,Math.max(30,Math.floor(h)));n[a]=d,n[a+1]=Math.floor(d*.96),n[a+2]=Math.floor(d*.92),n[a+3]=255}i.putImageData(t,0,0)}function Qg(i,e){const t=i.createImageData(e,e),n=t.data;for(let s=0;s<e;s++){const r=s/e;for(let a=0;a<e;a++){const o=a/e,l=(s*e+a)*4,c=ct(o*6+Math.sin(r*8)*1.5,r*4,5),u=Math.floor(225+c*28),h=Math.floor(190+c*25),d=Math.floor(125+c*20);n[l]=Math.min(255,u),n[l+1]=Math.min(255,h),n[l+2]=Math.min(255,d),n[l+3]=255}}i.putImageData(t,0,0)}function e_(i,e){const t=i.createImageData(e,e),n=t.data;for(let s=0;s<e;s++)for(let r=0;r<e;r++){const a=(s*e+r)*4,o=ct(r/e*10,s/e*5,5),l=Math.floor(120+o*70);n[a]=l,n[a+1]=Math.floor(l*.94),n[a+2]=Math.floor(l*.88),n[a+3]=255}i.putImageData(t,0,0)}function t_(i,e){const t=i.createImageData(e,e),n=t.data;for(let s=0;s<e;s++)for(let r=0;r<e;r++){const a=(s*e+r)*4,o=r/e*8,l=s/e*4,c=ct(o,l,4),u=Math.abs(Math.sin(o*4+l*6+c*3));let h=Math.floor(230+c*25),d=Math.floor(225+c*25),p=Math.floor(215+c*25);if(u<.18){const g=(.18-u)/.18;h=Math.floor(h*(1-g)+165*g),d=Math.floor(d*(1-g)+95*g),p=Math.floor(p*(1-g)+65*g)}n[a]=h,n[a+1]=d,n[a+2]=p,n[a+3]=255}i.putImageData(t,0,0)}function n_(i,e){const t=i.createImageData(e,e),n=t.data;for(let s=0;s<e;s++){const r=s/e;for(let a=0;a<e;a++){const o=(s*e+a)*4,l=ct(a/e*3,r*3,3),c=Math.floor(225+l*25),u=Math.floor(145+l*20),h=Math.floor(65+l*15);n[o]=c,n[o+1]=u,n[o+2]=h,n[o+3]=255}}i.putImageData(t,0,0)}function i_(i,e){const t=i.createImageData(e,e),n=t.data;for(let s=0;s<e;s++){const r=s/e;for(let a=0;a<e;a++){const o=(s*e+a)*4,l=Math.sin(r*Math.PI*8)*.05;n[o]=Math.floor(175+l*30),n[o+1]=Math.floor(225+l*20),n[o+2]=Math.floor(235+l*20),n[o+3]=255}}i.putImageData(t,0,0)}function s_(i,e){const t=i.createImageData(e,e),n=t.data;for(let s=0;s<e;s++){const r=s/e;for(let a=0;a<e;a++){const o=(s*e+a)*4,l=ct(a/e*6,r*8,4);let c=Math.floor(45+l*25),u=Math.floor(95+l*35),h=Math.floor(215+l*35);if(l>.72){const d=(l-.72)/.28;c=Math.floor(c*(1-d)+240*d),u=Math.floor(u*(1-d)+245*d),h=Math.floor(h*(1-d)+255*d)}n[o]=c,n[o+1]=u,n[o+2]=h,n[o+3]=255}}i.putImageData(t,0,0)}function r_(i,e){const t=i.createImageData(e,e),n=t.data;for(let s=0;s<e;s++)for(let r=0;r<e;r++){const a=(s*e+r)*4,o=ct(r/e*6,s/e*6,4),l=Math.floor(140+o*60);n[a]=l,n[a+1]=Math.floor(l*.9),n[a+2]=Math.floor(l*.85),n[a+3]=255}i.putImageData(t,0,0)}function a_(i=512){const e=document.createElement("canvas");e.width=i,e.height=i;const t=e.getContext("2d");if(!t)return new Hn(e);const n=t.createImageData(i,i),s=n.data;for(let r=0;r<i;r++){const a=(r/i-.5)*Math.PI;for(let o=0;o<i;o++){const l=(r*i+o)*4,c=o/i*Math.PI*2;if(ct(Math.cos(c)*2.2+5,Math.sin(c)*2.2+Math.sin(a)*2.5,4)>.48&&Math.abs(a)<1.25){const d=pr(o/i*32,r/i*32),p=pr(o/i*64,r/i*64);if(d>.65&&p>.55){const g=Math.floor((d-.65)*650);s[l]=Math.min(g+50,255),s[l+1]=Math.min(g*.8,210),s[l+2]=Math.min(g*.4,120),s[l+3]=255;continue}}s[l]=0,s[l+1]=0,s[l+2]=0,s[l+3]=255}}return t.putImageData(n,0,0),new Hn(e)}function o_(i,e){const t=i.createImageData(e,e),n=t.data;for(let s=0;s<e;s++)for(let r=0;r<e;r++){const a=(s*e+r)*4,o=ct(r/e*8,s/e*8,4),l=pr(r/e*16,s/e*16);l>.78?(n[a]=40,n[a+1]=20,n[a+2]=10):l>.65?(n[a]=220,n[a+1]=80,n[a+2]=20):(n[a]=Math.floor(210+o*45),n[a+1]=Math.floor(180+o*40),n[a+2]=Math.floor(30+o*30)),n[a+3]=255}i.putImageData(t,0,0)}function l_(i,e){const t=i.createImageData(e,e),n=t.data;for(let s=0;s<e;s++){const r=s>e*.75;for(let a=0;a<e;a++){const o=(s*e+a)*4,l=ct(a/e*10,s/e*10,4);let c=Math.floor(240+l*15),u=Math.floor(245+l*10),h=255;if(r){const d=Math.sin(a/e*Math.PI*8+l*3);Math.abs(d)<.15&&(c=70,u=160,h=230)}n[o]=c,n[o+1]=u,n[o+2]=h,n[o+3]=255}}i.putImageData(t,0,0)}function c_(i,e){const t=i.createImageData(e,e),n=t.data;for(let s=0;s<e;s++){const r=s/e*2-1;for(let a=0;a<e;a++){const o=(s*e+a)*4,l=a/e*2-1,c=ct(a/e*6,s/e*6,4),u=l-.1,h=r+.1;Math.hypot(u,h)<.38&&(Math.abs(u)<.35||h<.2)&&c>.35?(n[o]=240,n[o+1]=230,n[o+2]=220):(n[o]=Math.floor(160+c*50),n[o+1]=Math.floor(110+c*40),n[o+2]=Math.floor(80+c*30)),n[o+3]=255}}i.putImageData(t,0,0)}function u_(i,e){const t=i.createImageData(e,e),n=t.data;for(let s=0;s<e;s++){const r=s<e*.28;for(let a=0;a<e;a++){const o=(s*e+a)*4,l=ct(a/e*6,s/e*6,4);if(r)n[o]=160,n[o+1]=80,n[o+2]=60;else{const c=Math.floor(130+l*50);n[o]=c,n[o+1]=Math.floor(c*.95),n[o+2]=Math.floor(c*.92)}n[o+3]=255}}i.putImageData(t,0,0)}function h_(i,e){const t=i.createImageData(e,e),n=t.data;for(let s=0;s<e;s++)for(let r=0;r<e;r++){const a=(s*e+r)*4,o=ct(r/e*12,s/e*12,5);if(o>.58)n[a]=255,n[a+1]=Math.floor(80+(o-.58)*400),n[a+2]=0;else{const l=Math.floor(20+o*30);n[a]=l+15,n[a+1]=l,n[a+2]=l}n[a+3]=255}i.putImageData(t,0,0)}function d_(i,e){const t=i.createImageData(e,e),n=t.data;for(let s=0;s<e;s++)for(let r=0;r<e;r++){const a=(s*e+r)*4,o=ct(r/e*8+Math.sin(s/e*10),s/e*4,4);n[a]=Math.floor(10+o*30),n[a+1]=Math.floor(60+o*80),n[a+2]=Math.floor(180+o*75),n[a+3]=255}i.putImageData(t,0,0)}function f_(i,e){const t=i.createImageData(e,e),n=t.data;for(let s=0;s<e;s++)for(let r=0;r<e;r++){const a=(s*e+r)*4,o=ct(r/e*6,s/e*6,4);n[a]=Math.floor(160+o*80),n[a+1]=Math.floor(40+o*40),n[a+2]=Math.floor(20+o*20),n[a+3]=255}i.putImageData(t,0,0)}function p_(i,e,t){const n=i.createImageData(e,e),s=n.data;for(let r=0;r<e;r++){const a=(r/e-.5)*Math.PI;for(let o=0;o<e;o++){const l=(r*e+o)*4,c=o/e*Math.PI*2,u=ct(Math.cos(c)*2.5+4,Math.sin(c)*2.5+Math.sin(a)*2.5,4);u>.5?(s[l]=t.includes("kepler")?45:60,s[l+1]=140+Math.floor(u*40),s[l+2]=70):(s[l]=15,s[l+1]=70+Math.floor(u*50),s[l+2]=175+Math.floor(u*40)),s[l+3]=255}}i.putImageData(n,0,0)}function m_(i,e){const t=i.createImageData(e,e),n=t.data;for(let s=0;s<e;s++)for(let r=0;r<e;r++){const a=(s*e+r)*4,o=ct(r/e*6,s/e*6,4);n[a]=Math.floor(180+o*50),n[a+1]=Math.floor(65+o*30),n[a+2]=Math.floor(45+o*20),n[a+3]=255}i.putImageData(t,0,0)}function g_(i,e){const t=i.createImageData(e,e),n=t.data;for(let s=0;s<e;s++)for(let r=0;r<e;r++){const a=(s*e+r)*4,o=ct(r/e*8,s/e*8,4),l=Math.floor(215+o*40);n[a]=l,n[a+1]=l,n[a+2]=Math.min(l+10,255),n[a+3]=255}i.putImageData(t,0,0)}function __(i,e,t){const n=i.createImageData(e,e),s=n.data;for(let r=0;r<e;r++)for(let a=0;a<e;a++){const o=(r*e+a)*4,l=ct(a/e*8,r/e*8,4);if(t==="iapetus"&&a<e*.5)s[o]=35,s[o+1]=30,s[o+2]=25;else{const c=Math.floor(150+l*60);s[o]=c,s[o+1]=Math.floor(c*.96),s[o+2]=Math.floor(c*.94)}s[o+3]=255}i.putImageData(n,0,0)}function v_(i,e){const t=new je;t.name=`volumetric-nebula:${i.id}`;const n=new Pe(i.colorHex||14315734),s=new Pe(16772829),r=new Pe(i.colorHex||9662683).offsetHSL(.08,.2,-.15),a=Math.max(e*4.5,4.2),o=1800,l=new Float32Array(o*3),c=new Float32Array(o*3),u=new Float32Array(o);for(let _=0;_<o;_++){const m=Math.random(),f=a*Math.pow(m,.45),y=Math.random()*Math.PI*2,v=(Math.random()-.5)*Math.PI*.85,S=Math.sin(y*3)*.25+Math.cos(v*4)*.15,R=f*(1+S);l[_*3]=R*Math.cos(y)*Math.cos(v),l[_*3+1]=R*Math.sin(v)*.65,l[_*3+2]=R*Math.sin(y)*Math.cos(v);const A=Math.min(f/a,1),w=new Pe;A<.25?w.lerpColors(s,n,A*4):w.lerpColors(n,r,(A-.25)/.75),c[_*3]=w.r,c[_*3+1]=w.g,c[_*3+2]=w.b,u[_]=(1-A*.4)*(Math.random()*.4+.8)}const h=new it;h.setAttribute("position",new _t(l,3)),h.setAttribute("color",new _t(c,3));const d=new ci({size:.85,vertexColors:!0,transparent:!0,opacity:.52,blending:ot,depthWrite:!1}),p=new ui(h,d);p.name="nebula-particles";const g=new kn(i.colorHex||14315734,1.8,a*3.5,1.5);return g.position.set(0,0,0),t.add(p,g),t}const dn=48;function y_(i){const e=new je;e.name=`celestial:${i.id}`,e.userData.bodyId=i.id,e.userData.kind="celestial";const t=hi(i),s=["star","planet","dwarfPlanet","moon","blackHole"].includes(i.type)?i.type==="star"?Math.max(t*1.4,.7):Math.max(t*1.25,.25):0;switch(e.userData.visualRadius=t,e.userData.safeRadius=s,i.type){case"star":e.add(S_(i));break;case"blackHole":e.add(M_(i));break;case"nebula":e.add(b_(i));break;case"galaxy":e.add(E_(i));break;case"structure":e.add(T_(i));break;case"asteroidBelt":e.add(A_(i));break;default:e.add(x_(i));break}return e}function hi(i){const e=Math.max(i.radiusKm,1);return Math.max(.14,Math.log10(e)*.16)}function x_(i){const e=hi(i),t=new Ze(e,dn,dn),s={map:qg(i.id,512),roughness:i.environment.isGasGiant?.85:.7,metalness:i.environment.isGasGiant?0:.08};i.id==="earth"&&(s.emissiveMap=a_(512),s.emissive=new Pe(16769194),s.emissiveIntensity=.95);const r=new Je(s),a=new $(t,r);a.name=`surface:${i.id}`;const o=new je;if(o.add(a),i.id==="earth"){const c=new Ze(e*1.025,dn,dn),u=new Je({map:Xg(512),transparent:!0,opacity:.85,depthWrite:!1,roughness:.9}),h=new $(c,u);h.name=`clouds:${i.id}`,o.add(h)}if(i.id==="saturn"){const c=new kt(e*1.35,e*2.5,64);c.rotateX(Math.PI/2);const u=new Je({map:Kg(512),transparent:!0,side:St,roughness:.65,metalness:.1}),h=new $(c,u);h.name=`rings:${i.id}`,h.rotation.z=.47,h.rotation.x=.12,o.add(h)}if(i.id==="uranus"){const c=new kt(e*1.35,e*1.75,48);c.rotateX(Math.PI/2);const u=new Je({color:11069183,transparent:!0,opacity:.4,side:St,roughness:.7}),h=new $(c,u);h.name=`rings:${i.id}`,h.rotation.x=Math.PI/2.1,o.add(h)}if(i.id==="haumea"){a.scale.set(1.4,.9,.7);const c=new kt(e*1.6,e*1.9,48);c.rotateX(Math.PI/2);const u=new Je({color:14279659,transparent:!0,opacity:.6,side:St,roughness:.8}),h=new $(c,u);h.name=`rings:${i.id}`,o.add(h)}if(i.environment.atmosphericPressureAtm>.01){const c=new Ze(e*1.14,dn,dn),u=kg({color:i.environment.hasLiquidWater?6138111:i.id==="venus"?16768921:14727567,intensity:i.id==="venus"?1.4:1.1}),h=new $(c,u);h.name=`atmosphere:${i.id}`,o.add(h)}if(i.id==="earth"||i.id==="jupiter"||i.id==="saturn"){const c=i.id==="earth"?5636010:i.id==="jupiter"?8970495:11176191,u=new Be({color:c,transparent:!0,opacity:.65,side:St,blending:ot}),h=new An(e*.35,e*.04,8,32);h.rotateX(Math.PI/2);const d=new $(h,u);d.position.y=e*.94,d.name=`aurora-north:${i.id}`;const p=new $(h,u);p.position.y=-e*.94,p.name=`aurora-south:${i.id}`,o.add(d,p)}return o}function S_(i){const e=Math.max(hi(i),.48),t=new Ze(e,dn,dn),n=zg({color:i.colorHex}),s=new $(t,n);s.name=`star:${i.id}`,s.userData.animatedUniforms=["uTime"];const r=new Ze(e*1.22,32,32),a=new Be({color:16755251,transparent:!0,opacity:.35,blending:ot,side:Dt}),o=new $(r,a);o.name=`flare:${i.id}`;const l=new kn(i.colorHex,2.8,0,1.8);l.name=`starlight:${i.id}`;const c=new je;if(c.add(s,o,l),i.tags.includes("pulsar")||i.id.includes("pulsar")||i.tags.includes("magnetar")){const u=new ki(e*.45,e*6,24,1,!0);u.translate(0,e*3,0);const h=new Be({color:i.colorHex,transparent:!0,opacity:.55,blending:ot,side:St}),d=new $(u,h),p=new $(u,h);p.rotation.x=Math.PI,c.add(d,p)}return c}function M_(i){const e=Math.max(hi(i)*.55,.35),t=new Ze(e,dn,dn),n=new $(t,Vg());n.name=`horizon:${i.id}`,n.userData.animatedUniforms=["uTime"];const s=new kt(e*1.02,e*1.12,48),r=new Be({color:16772829,transparent:!0,opacity:.85,side:St,blending:ot}),a=new $(s,r);a.rotation.x=Math.PI/2.3;const o=new kt(e*1.25,e*3.6,64),l=new $(o,Wg());l.name=`disk:${i.id}`,l.rotation.x=Math.PI/2.3,l.userData.animatedUniforms=["uTime"];const c=new je;return c.add(n,a,l),c}function b_(i){return v_(i,hi(i))}function E_(i){const t=new Float32Array(18e3),n=new Float32Array(6e3*3),s=new Pe(i.colorHex),r=Math.max(hi(i)*6,6);for(let p=0;p<6e3;p++){const g=p%3,_=Math.random(),m=_*Math.PI*6+g*(Math.PI*2)/3,f=_*r,y=(Math.random()-.5)*.6;t[p*3]=Math.cos(m)*f+y,t[p*3+1]=(Math.random()-.5)*.3,t[p*3+2]=Math.sin(m)*f+y;const v=.6+Math.random()*.4;n[p*3]=s.r*v,n[p*3+1]=s.g*v,n[p*3+2]=s.b*v}const a=new it;a.setAttribute("position",new _t(t,3)),a.setAttribute("color",new _t(n,3));const o=new ci({size:.18,vertexColors:!0,transparent:!0,opacity:.9,blending:ot,depthWrite:!1}),l=new ui(a,o);l.name=`galaxy:${i.id}`;const c=new Ze(Math.max(r*.08,.3),24,24),u=new Be({color:16774102}),h=new $(c,u);h.name=`galaxy-core:${i.id}`;const d=new je;if(d.add(l,h),i.id==="messier-87"||i.id==="centaurus-a"){const p=new yt(.04,.4,r*.85,16);p.translate(0,r*.42,0);const g=new Be({color:8969727,transparent:!0,opacity:.65,blending:ot}),_=new $(p,g);_.rotation.z=.55,d.add(_)}return d}function T_(i){const e=Math.max(hi(i)*3,3),t=new xs(e,2),n=new Be({color:i.colorHex,wireframe:!0,transparent:!0,opacity:.35}),s=new $(t,n);return s.name=`structure:${i.id}`,s}function A_(i){const t=new xs(.05,0),n=new Je({color:i.colorHex,roughness:1}),s=new A0(t,n,1500);s.name=`asteroid-belt:${i.id}`;const r=new Et,a=6,o=8;for(let l=0;l<1500;l++){const c=Math.random()*Math.PI*2,u=a+Math.random()*(o-a);r.position.set(Math.cos(c)*u,(Math.random()-.5)*.4,Math.sin(c)*u),r.rotation.set(Math.random()*Math.PI,Math.random()*Math.PI,0);const h=.5+Math.random()*1.5;r.scale.setScalar(h),r.updateMatrix(),s.setMatrixAt(l,r.matrix)}return s.instanceMatrix.needsUpdate=!0,s}function w_(i){const e=new je;e.name=`satellite:${i.id}`,e.userData.satelliteId=i.id,e.userData.kind="satellite";const t=new Lt(.06,.06,.12),n=new Je({color:i.colorHex,metalness:.6,roughness:.4}),s=new $(t,n),r=new Lt(.22,.005,.08),a=new Je({color:2245802,metalness:.3,roughness:.6}),o=new $(r,a);o.position.x=-.16;const l=new $(r,a);l.position.x=.16;const c=new kn(i.colorHex,.6,2,2);return e.add(s,o,l,c),e}function C_(i=4e3,e=400){const t=new Float32Array(i*3);for(let a=0;a<i;a++)t[a*3]=(Math.random()-.5)*e,t[a*3+1]=(Math.random()-.5)*e,t[a*3+2]=(Math.random()-.5)*e;const n=new it;n.setAttribute("position",new _t(t,3));const s=new ci({color:16774886,size:.6,sizeAttenuation:!0}),r=new ui(n,s);return r.name="background-starfield",r}function R_({semiMajorAxis:i,eccentricity:e=0,periodSeconds:t,timeSeconds:n,phaseOffset:s=0,inclinationDeg:r=0}){const a=Ri(i,0),o=L_(Ri(e,0),0,.95),l=Ri(t,1)||1,u=(Ri(n,0)/l*2*Math.PI+Ri(s,0))%(2*Math.PI),h=a*Math.sqrt(1-o*o),d=u,p=a*Math.cos(d)-a*o,g=h*Math.sin(d),_=Ri(r,0)*Math.PI/180,m=g*Math.sin(_),f=g*Math.cos(_);return{x:p,y:m,z:f,angle:d}}function L_(i,e,t){return Math.min(Math.max(i,e),t)}function Ri(i,e){return Number.isFinite(i)?i:e}const P_=6,I_={0:0,1:0,2:55,3:170,4:340},D_=86400;function ou(i,e=0){const t=new Map(i.map(a=>[a.id,a])),n=new Map,s=new Set;function r(a){if(n.has(a))return n.get(a);const o=t.get(a);if(!o){const c={x:0,y:0,z:0};return n.set(a,c),c}if(s.has(a)){const c={x:0,y:0,z:0};return n.set(a,c),c}s.add(a);let l;if(o.orbit&&o.orbit.parentId){const c=r(o.orbit.parentId),u=R_({semiMajorAxis:Math.cbrt(Math.max(o.orbit.semiMajorAxisAu,1e-6))*P_,eccentricity:o.orbit.eccentricity??0,periodSeconds:Math.max(o.orbit.periodDays,.01)*D_,timeSeconds:e,phaseOffset:Ba(o.id)*Math.PI*2,inclinationDeg:o.orbit.inclinationDeg??0});l={x:c.x+u.x,y:c.y+u.y,z:c.z+u.z}}else o.id==="sun"?l={x:0,y:0,z:0}:l=Ga(o.id,I_[o.scaleTier]??200);return s.delete(a),n.set(a,l),l}for(const a of i)r(a.id);return n}function lu(i,e){const t=new Map,n=e.get("earth")??{x:0,y:0,z:0};for(const s of i)if(s.orbitsBodyId&&e.has(s.orbitsBodyId)){const r=e.get(s.orbitsBodyId),a=Ga(s.id,.5);t.set(s.id,{x:r.x+a.x,y:r.y+a.y,z:r.z+a.z})}else{const r=s.distanceFromEarthKm/1495978707e-1,a=O_(6+Math.log10(1+r)*6,6,60),o=Ga(s.id,1),l=Math.hypot(o.x,o.y,o.z)||1;t.set(s.id,{x:n.x+o.x/l*a,y:n.y+o.y/l*a,z:n.z+o.z/l*a})}return t}function Ga(i,e){const t=Ba(i+"θ"),n=Ba(i+"φ"),s=t*Math.PI*2,r=Math.acos(2*n-1);return{x:e*Math.sin(r)*Math.cos(s),y:e*Math.cos(r)*.4,z:e*Math.sin(r)*Math.sin(s)}}function Ba(i){let e=0;for(let t=0;t<i.length;t++)e=e*31+i.charCodeAt(t)>>>0;return e%1e5/1e5}function O_(i,e,t){return Math.min(Math.max(i,e),t)}const N_=[{id:"ursa-major",name:"Ursa Major (Big Dipper)",color:"#6ce3ff",stars:[{name:"Dubhe",pos:[150,220,-280]},{name:"Merak",pos:[120,180,-290]},{name:"Phecda",pos:[70,170,-300]},{name:"Megrez",pos:[90,210,-290]},{name:"Alioth",pos:[50,240,-280]},{name:"Mizar",pos:[10,260,-270]},{name:"Alkaid",pos:[-35,275,-260]}],edges:[[0,1],[1,2],[2,3],[3,0],[3,4],[4,5],[5,6]]},{id:"orion",name:"Orion",color:"#ffd27a",stars:[{name:"Betelgeuse",pos:[-180,120,260]},{name:"Bellatrix",pos:[-120,110,275]},{name:"Alnitak",pos:[-160,40,280]},{name:"Alnilam",pos:[-145,38,285]},{name:"Mintaka",pos:[-130,36,290]},{name:"Saiph",pos:[-175,-50,270]},{name:"Rigel",pos:[-115,-60,285]}],edges:[[0,1],[0,2],[1,4],[2,3],[3,4],[2,5],[4,6],[5,6]]},{id:"cassiopeia",name:"Cassiopeia",color:"#ff9ee2",stars:[{name:"Caph",pos:[220,190,160]},{name:"Schedar",pos:[260,180,120]},{name:"Navi",pos:[290,210,80]},{name:"Ruchbah",pos:[310,195,30]},{name:"Segin",pos:[330,230,-10]}],edges:[[0,1],[1,2],[2,3],[3,4]]},{id:"crux",name:"Crux (Southern Cross)",color:"#85ffb5",stars:[{name:"Acrux",pos:[40,-290,-140]},{name:"Mimosa",pos:[70,-270,-120]},{name:"Gacrux",pos:[50,-230,-150]},{name:"Delta Crucis",pos:[20,-255,-165]}],edges:[[0,2],[1,3]]},{id:"cygnus",name:"Cygnus (The Northern Cross)",color:"#c0b2ff",stars:[{name:"Deneb",pos:[-240,220,-120]},{name:"Sadr",pos:[-210,180,-150]},{name:"Gienah",pos:[-260,160,-170]},{name:"Delta Cygni",pos:[-160,195,-135]},{name:"Albireo",pos:[-180,130,-180]}],edges:[[0,1],[1,4],[2,1],[1,3]]}];class U_{constructor(e){this.scene=e,this.group=new je,this.group.name="constellation-overlay",this.visible=!1,this.group.visible=!1,this._buildConstellations(),this.scene&&this.scene.add(this.group)}_buildConstellations(){for(const e of N_){const t=[];for(const[l,c]of e.edges){const u=e.stars[l].pos,h=e.stars[c].pos;t.push(u[0],u[1],u[2]),t.push(h[0],h[1],h[2])}const n=new it;n.setAttribute("position",new Ye(t,3));const s=new Sr({color:new Pe(e.color),transparent:!0,opacity:.55,blending:ot}),r=new w0(n,s);this.group.add(r);const a=new Ze(2.2,8,8),o=new Be({color:new Pe(e.color),transparent:!0,opacity:.85,blending:ot});for(const l of e.stars){const c=new $(a,o);c.position.set(l.pos[0],l.pos[1],l.pos[2]),this.group.add(c)}}}toggle(e){return this.visible=e!==void 0?e:!this.visible,this.group.visible=this.visible,this.visible}}class F_{constructor(e={}){this.stiffness=e.stiffness??85,this.damping=e.damping??6.5,this.mass=e.mass??.85,this.maxTilt=e.maxTiltAngle??.55,this.rotationX=0,this.rotationZ=0,this.velX=0,this.velZ=0}update(e,t={}){const n=Math.min(Math.max(e,.001),.1),s=(t.accZ??0)*.45+(t.pitchRate??0)*.35,r=-(t.accX??0)*.45-(t.yawRate??0)*.4,a=-this.stiffness*this.rotationX,o=-this.damping*this.velX,l=(a+o+s)/this.mass,c=-this.stiffness*this.rotationZ,u=-this.damping*this.velZ,h=(c+u+r)/this.mass;return this.velX+=l*n,this.velZ+=h*n,this.rotationX+=this.velX*n,this.rotationZ+=this.velZ*n,Math.abs(this.rotationX)>this.maxTilt&&(this.rotationX=Math.sign(this.rotationX)*this.maxTilt,this.velX*=-.25),Math.abs(this.rotationZ)>this.maxTilt&&(this.rotationZ=Math.sign(this.rotationZ)*this.maxTilt,this.velZ*=-.25),{rotationX:this.rotationX,rotationZ:this.rotationZ}}nudge(e=2.5,t=2){this.velX+=e,this.velZ+=t}reset(){this.rotationX=0,this.rotationZ=0,this.velX=0,this.velZ=0}}const et={porcelainCream:16183268,terracotta:14253380,warmWood:4007965,darkBronze:2827552,vintageBrass:13935449,seatFabric:5521463,canopyGlass:12575743,glowAmberWarm:16758868,glowLantern:16768938,glowCyan:6482175,glowGreen:5826704,coffeeBrown:3808780};function G_(){const i=new je;i.name="spaceship",i.scale.setScalar(.24);const e=new F_({stiffness:90,damping:6,mass:.8}),t=B_(),n=H_(),s=k_();s.position.set(0,-.22,.28),n.add(s);const r=new kn(et.glowAmberWarm,1.2,5,2);r.position.set(0,0,1.1);const a=new Be({color:et.glowAmberWarm,transparent:!0,opacity:.85,blending:ot}),o=new ki(.1,.65,16);o.rotateX(-Math.PI/2),o.translate(0,0,.32);const l=new $(o,a);l.position.set(-.32,.01,.85);const c=l.clone();c.position.x=.32;const u=new Be({color:et.glowCyan,transparent:!0,opacity:.85,blending:ot}),h=new ki(.06,.35,12);h.rotateX(Math.PI/2),h.translate(0,0,-.18);const d=new $(h,u);d.position.set(-.25,-.05,-.45);const p=d.clone();p.position.x=.25,t.add(l,c,d,p);const g=[l,c],_=[d,p],m=120,f=new Float32Array(m*3);for(let q=0;q<m;q++)f[q*3]=(Math.random()-.5)*2.2,f[q*3+1]=(Math.random()-.5)*1.4+.15,f[q*3+2]=-.2-Math.random()*3.2;const y=new it;y.setAttribute("position",new _t(f,3));const v=new ci({color:16772829,size:.045,transparent:!0,opacity:.75,blending:ot}),S=new ui(y,v);S.name="speed-dust",i.add(S);const R=new Ze(.55,16,16,0,Math.PI*2,0,Math.PI/2.2);R.rotateX(-Math.PI/2);const A=new Be({color:16738859,transparent:!0,opacity:0,blending:ot,side:Dt}),w=new $(R,A);w.name="reentry-plasma",w.position.set(0,0,-.2),t.add(w),i.add(t,n,r);const O=n.getObjectByName("flight-stick"),M=n.getObjectByName("holo-globe"),E=n.getObjectByName("horizon-needle"),N=n.getObjectByName("speed-needle"),H=n.getObjectByName("bobblehead-head"),se=n.getObjectByName("coffee-steam")?.children??[],P=t.getObjectByName("exterior-canopy"),G=t.getObjectByName("exterior-portholes");function k(q,X,re,B,ie,pe,Se=0){const D=ie===tt.COCKPIT;if(P&&(P.visible=!D),G&&(G.visible=!D),s.visible=!D,M&&(M.rotation.y+=q*.7,M.rotation.x=Math.sin(Date.now()*.001)*.12),O&&B){const b=-(B.yaw??0)*.32+(B.strafe??0)*.18,x=-(B.pitch??0)*.28-(B.thrust??0)*.18;O.rotation.z+=(b-O.rotation.z)*Math.min(q*12,1),O.rotation.x+=(x-O.rotation.x)*Math.min(q*12,1)}if(H){const b=e.update(q,pe??{accZ:(B?.thrust??0)*(re?22:8),yawRate:(B?.yaw??0)*8,pitchRate:(B?.pitch??0)*8});H.rotation.x=b.rotationX,H.rotation.z=b.rotationZ}E&&B&&(E.rotation.z=-(B.yaw??0)*.5,E.position.y=(B.pitch??0)*.02),N&&(N.rotation.z=-X*Math.PI*1.5),w&&A&&(A.opacity=Math.min(Se*.85,.9),Se>.6?A.color.setHex(11200767):Se>.3?A.color.setHex(16765030):A.color.setHex(16738859));const me=Date.now()*.002;for(let b=0;b<se.length;b++){const x=se[b],U=(me+b*.4)%1;x.position.y=.06+U*.09,x.position.x=Math.sin(me*2+b)*.008,x.scale.setScalar(.5+U*1.2),x.material&&(x.material.opacity=(1-U)*.45)}const ve=B?.thrust??0,he=Math.max(X,Math.abs(ve)),Ee=(ve!==0?ve:X>.05?1:.05)*(he*8+.5)*q,L=y.attributes.position,ce=L.array;for(let b=0;b<m;b++){let x=ce[b*3+2]+Ee;x>.3?(x=-3.4-Math.random()*.5,ce[b*3]=(Math.random()-.5)*2.2,ce[b*3+1]=(Math.random()-.5)*1.4+.15):x<-3.9&&(x=.2+Math.random()*.1),ce[b*3+2]=x}L.needsUpdate=!0,v.opacity=D?.85:.45;const K=Math.max(B?.thrust??0,X),ae=.3+K*(re?2.5:1.2),Y=.5+K*(re?1.2:.6),we=re?et.glowCyan:et.glowAmberWarm;a.color.setHex(we),r.color.setHex(we),r.intensity=.8+K*(re?3.5:1.6);for(const b of g)b.scale.set(Y,Y,ae),b.visible=K>.02;const ue=Math.max(-(B?.thrust??0),0);for(const b of _)b.scale.set(.5+ue*1.5,.5+ue*1.5,.4+ue*2),b.visible=ue>.05}function j(q){const X=n.children.find(re=>re.geometry?.type==="BoxGeometry");X&&(q==="APOLLO"?(X.material.color.setHex(13685980),X.material.roughness=.4,X.material.metalness=.4):q==="CYBERPUNK"?(X.material.color.setHex(1380902),X.material.roughness=.2,X.material.metalness=.8):(X.material.color.setHex(et.warmWood),X.material.roughness=.7,X.material.metalness=.1))}function Z(q){const X=n.getObjectByName("cabin-lamp-light"),re=n.children.find(ie=>ie.isPointLight&&ie.position.y>.1),B=Math.min(Math.max(q,0),1);X&&(X.intensity=B*1.4),re&&(re.intensity=B*.65)}function ee(q){const X=t.getObjectByName("main-hull");!X||!X.material||(q==="SOLAR_GOLD"?(X.material.color.setHex(16766720),X.material.metalness=.85,X.material.roughness=.15):q==="STEALTH_CARBON"?(X.material.color.setHex(1579036),X.material.metalness=.3,X.material.roughness=.7):q==="DEEP_BRASS"?(X.material.color.setHex(et.vintageBrass),X.material.metalness=.7,X.material.roughness=.3):(X.material.color.setHex(et.porcelainCream),X.material.metalness=.15,X.material.roughness=.45))}return{ship:i,cockpitInterior:n,exterior:t,pilot:s,bobbleheadPhysics:e,thrusterGlow:r,thrusterPlumes:g,flightStick:O,holoGlobe:M,applyCabinTheme:j,applyCabinLighting:Z,applyHullLivery:ee,update:k}}function B_(){const i=new je;i.name="ship-exterior";const e=new Je({color:et.porcelainCream,metalness:.15,roughness:.45}),t=new Je({color:et.terracotta,metalness:.2,roughness:.5}),n=new Je({color:et.darkBronze,metalness:.6,roughness:.35}),s=new Ze(.48,24,20);s.scale(1,.78,1.45);const r=new $(s,e);r.position.set(0,0,0);const a=new Ze(.34,16,16,0,Math.PI*2,0,Math.PI/2);a.rotateX(-Math.PI/2),a.scale(1,.72,1);const o=new $(a,t);o.position.set(0,-.01,-.58);const l=new $(new Lt(.38,.08,.9),t);l.position.set(0,-.28,.05);const c=new ag({color:et.canopyGlass,transparent:!0,opacity:.5,roughness:.08,metalness:.1,transmission:.65,thickness:.2,reflectivity:.85}),u=new Ze(.38,20,16,0,Math.PI*2,0,Math.PI/1.8),h=new $(u,c);h.name="exterior-canopy",h.position.set(0,.12,-.18),h.scale.set(.9,.75,1.15),h.rotation.x=Math.PI;const d=new je;d.name="exterior-portholes";const p=new Be({color:et.glowAmberWarm}),g=new Je({color:et.vintageBrass,metalness:.7,roughness:.3});for(const G of[-1,1])for(let k=0;k<2;k++){const j=new $(new An(.06,.012,8,16),g);j.position.set(G*.44,.02,.1+k*.28),j.rotation.y=G*Math.PI/2;const Z=new $(new On(.055,16),p);Z.position.set(G*.441,.02,.1+k*.28),Z.rotation.y=G*Math.PI/2,d.add(j,Z)}const _=new $c;_.moveTo(0,0),_.lineTo(-.85,.4),_.lineTo(-.8,.75),_.lineTo(-.15,.55),_.lineTo(0,.45);const m={depth:.03,bevelEnabled:!0,bevelSegments:2,steps:1,bevelSize:.015,bevelThickness:.015},f=new so(_,m);f.rotateX(Math.PI/2);const y=new $(f,e);y.position.set(-.25,-.05,-.08);const v=f.clone();v.scale(-1,1,1);const S=new $(v,e);S.position.set(.25,-.05,-.08);const R=new Ze(.028,8,8),A=new $(R,new Be({color:16733525}));A.position.set(-1.05,-.02,.42);const w=new $(R,new Be({color:5635959}));w.position.set(1.05,-.02,.42);const O=new yt(.11,.14,.65,16);O.rotateX(Math.PI/2);const M=new $(O,n);M.position.set(-.32,.01,.5);const E=M.clone();E.position.x=.32;const N=new An(.12,.025,8,16),H=new Be({color:et.glowAmberWarm}),se=new $(N,H);se.position.set(-.32,.01,.82);const P=se.clone();return P.position.x=.32,i.add(r,o,l,h,d,y,S,A,w,M,E,se,P),i}function H_(){const i=new je;i.name="cockpit-interior";const e=new Je({color:et.warmWood,roughness:.7,metalness:.1}),t=new Je({color:et.vintageBrass,metalness:.8,roughness:.25}),n=new Be({color:1314828}),s=new An(.42,.018,8,24,Math.PI*.9);s.rotateZ(-Math.PI*.05);const r=new $(s,t);r.position.set(0,.06,-.32);const a=new $(new Lt(.78,.18,.38),e);a.position.set(0,-.16,-.22);const o=new $(new Lt(.72,.14,.28),e);o.position.set(0,-.08,-.18),o.rotation.x=-Math.PI/4.5;const l=new $(new On(.08,20),n);l.position.set(0,-.03,-.07),l.rotation.x=-Math.PI/4.5;const c=new $(new kt(.076,.084,20),t);l.add(c);const u=new $(new si(.12,.006),new Be({color:et.glowAmberWarm}));u.name="horizon-needle",u.position.set(0,0,.002),l.add(u);const h=new $(new si(.055,.005),new Be({color:16733525}));h.name="speed-needle",h.position.set(0,0,.004),l.add(h);const d=new $(new On(.055,16),n);d.position.set(-.22,-.04,-.09),d.rotation.x=-Math.PI/4.5,d.rotation.y=Math.PI/12,d.add(new $(new kt(.052,.058,16),t));const p=new $(new si(.08,.005),new Be({color:et.glowGreen}));d.add(p);const g=new $(new On(.055,16),n);g.position.set(.22,-.04,-.09),g.rotation.x=-Math.PI/4.5,g.rotation.y=-Math.PI/12,g.add(new $(new kt(.052,.058,16),t));const _=new je;_.name="holo-globe",_.position.set(.22,.04,-.08);const m=new $(new Ze(.035,10,8),new Be({color:et.glowAmberWarm,wireframe:!0,transparent:!0,opacity:.85})),f=new $(new kt(.046,.052,16),new Be({color:et.glowCyan,side:St}));f.rotation.x=Math.PI/3,_.add(m,f);const y=new je;y.position.set(-.32,.02,-.08);const v=new $(new yt(.025,.03,.02,10),t),S=new $(new yt(.022,.022,.05,10),new Be({color:et.glowLantern}));S.name="lamp-bulb",S.position.y=.035;const R=new $(new ki(.03,.025,10),t);R.position.y=.065;const A=new $(new Lt(.015,.015,.02),t);A.name="switch-cabin-light",A.position.set(0,.01,.03),y.add(v,S,R,A);const w=new kn(et.glowLantern,1.4,2.2,2);w.name="cabin-lamp-light",w.position.set(-.32,.06,-.06);const O=new je;O.name="coffee-mug",O.position.set(.3,-.07,.02);const M=new $(new yt(.038,.034,.03,12),t),E=new Je({color:et.terracotta,roughness:.4}),N=new $(new yt(.028,.024,.06,12),E);N.name="coffee-mug-body",N.position.y=.025;const H=new $(new On(.022,12),new Be({color:et.coffeeBrown}));H.rotation.x=-Math.PI/2,H.position.y=.052;const se=new An(.016,.005,6,10,Math.PI);se.rotateY(Math.PI/2);const P=new $(se,E);P.position.set(.028,.025,0);const G=new je;G.name="coffee-steam";for(let Ge=0;Ge<5;Ge++){const Qe=new Be({color:16772829,transparent:!0,opacity:.35}),ut=new $(new Ze(.009,6,6),Qe);ut.position.y=.06+Ge*.015,G.add(ut)}O.add(M,N,H,P,G);const k=new je;k.name="bobblehead-prop",k.position.set(-.14,-.04,-.07);const j=new $(new yt(.025,.03,.012,12),t),Z=new $(new yt(.006,.006,.04,8),new Je({color:8947848,metalness:.9}));Z.position.y=.02;const ee=new je;ee.name="bobblehead-head",ee.position.y=.045;const q=new $(new Ze(.032,12,12),new Je({color:5826704,roughness:.5}));q.scale.set(1.1,1.25,1);const X=new Be({color:1118481}),re=new $(new Ze(.01,8,8),X);re.position.set(-.014,.005,.026);const B=re.clone();B.position.x=.014;const ie=new $(new yt(.002,.002,.025,6),t);ie.position.y=.04;const pe=new $(new Ze(.006,6,6),new Be({color:et.glowAmberWarm}));pe.position.y=.052,ee.add(q,re,B,ie,pe),k.add(j,Z,ee);const Se=new je;Se.name="dash-radio",Se.position.set(.14,-.05,-.07);const D=new $(new Lt(.075,.04,.045),e),me=new $(new On(.014,12),new Be({color:1118481}));me.position.set(-.018,0,.023);const ve=new $(new yt(.009,.009,.015,10),t);ve.name="radio-knob",ve.rotateX(Math.PI/2),ve.position.set(.018,0,.025),Se.add(D,me,ve);const he=new je;he.name="warp-lever",he.position.set(-.25,-.1,-.04);const Ee=new $(new Lt(.04,.02,.06),t),L=new $(new yt(.006,.006,.08,8),e);L.position.set(0,.04,0),L.rotation.x=-.25;const ce=new $(new Ze(.014,8,8),new Be({color:et.glowAmberWarm}));ce.position.set(0,.08,-.015),he.add(Ee,L,ce);const K=new $(new yt(.012,.012,.015,8),t);K.name="palette-switch",K.position.set(.25,-.08,-.04);const ae=new je;ae.name="flight-stick",ae.position.set(0,-.16,.06);const Y=new $(new yt(.035,.045,.03,10),t),we=new $(new yt(.012,.012,.16,8),e);we.position.y=.08;const ue=new $(new Ze(.022,10,10),t);ue.position.set(0,.16,0),ae.add(Y,we,ue);const b=new Je({color:et.seatFabric,roughness:.85}),x=new $(new Lt(.4,.09,.38),b);x.position.set(0,-.28,.28);const U=new $(new Lt(.38,.45,.08),b);U.position.set(0,-.06,.45),U.rotation.x=-.1;const Q=new $(new Lt(.24,.14,.07),b);Q.position.set(0,.2,.48);const J=new je;J.name="dash-terrarium",J.position.set(-.28,-.04,-.15);const ne=new $(new yt(.024,.018,.02,12),new Je({color:2827552,roughness:.8})),Me=new $(new Ze(.026,12,10,0,Math.PI*2,0,Math.PI/1.8),new Je({color:13625599,transparent:!0,opacity:.45,roughness:.1}));Me.position.y=.01;const de=new $(new yt(.003,.005,.025,6),new Je({color:4860421,roughness:.9}));de.position.y=.015;const fe=new $(new Ze(.014,8,8),new Je({color:3715072,roughness:.7}));fe.position.y=.028;const Te=new $(new Ze(.005,6,6),new Be({color:16740518}));Te.name="terrarium-blossom",Te.position.set(.006,.032,.004),J.add(ne,Me,de,fe,Te);const Ie=new je;Ie.name="dash-cassette",Ie.position.set(.02,-.08,-.08);const oe=new $(new Lt(.085,.025,.05),new Je({color:2038037,metalness:.4,roughness:.6})),$e=new $(new Lt(.065,.018,.004),new Je({color:16761210,roughness:.3}));$e.name="cassette-door",$e.position.set(0,.002,.026);const Ve=new Be({color:16777215}),De=new $(new yt(.004,.004,.006,8),Ve);De.name="reel-left",De.rotateX(Math.PI/2),De.position.set(-.015,.002,.028);const Re=De.clone();Re.name="reel-right",Re.position.x=.015,Ie.add(oe,$e,De,Re);const Ae=new kn(et.glowLantern,.65,2.2,2);return Ae.position.set(0,.2,.05),i.add(r,a,o,l,d,g,_,y,w,O,k,Se,J,Ie,he,K,ae,x,U,Q,Ae),i}function k_(){const i=new je;i.name="pilot";const e=new Je({color:14660758,roughness:.7}),t=new Je({color:7228731,roughness:.85}),n=new Je({color:et.terracotta,roughness:.8}),s=new $(new us(.11,.2,4,8),t);s.position.y=.15;const r=new $(new Ze(.085,14,14),e);r.position.y=.33;const a=new $(new Ze(.088,12,12,0,Math.PI*2,0,Math.PI/1.7),n);a.position.set(0,.35,0);const o=new us(.035,.18,4,8),l=new $(o,t);l.position.set(-.15,.14,-.05),l.rotation.set(.5,0,.25);const c=new $(o,t);c.position.set(.15,.14,-.05),c.rotation.set(.5,0,-.25);const u=new us(.045,.2,4,8),h=new $(u,t);h.position.set(-.07,-.06,-.04),h.rotation.x=Math.PI/2.1;const d=h.clone();return d.position.x=.07,i.add(s,r,a,l,c,h,d),i}const z_={[tt.COCKPIT]:new C(0,.03,.04),[tt.THIRD_PERSON]:new C(0,.28,1.25),[tt.CINEMATIC]:new C(.85,.35,1.1)},V_={[tt.COCKPIT]:new C(0,.02,-2.5),[tt.THIRD_PERSON]:new C(0,.06,-2),[tt.CINEMATIC]:new C(0,.03,-.5)},da=60,Ql=74;class W_{constructor(e,t){this.camera=e,this.ship=t,this.mode=tt.COCKPIT,this._currentPos=new C,this._currentLook=new C,this._mouseParallax={x:0,y:0},this._initialized=!1,this._zoomLevel=1,this._targetZoom=1,this._targetFov=da}setMode(e){Object.values(tt).includes(e)&&(this.mode=e)}adjustZoom(e){this._targetZoom=ts(this._targetZoom+e,.45,2.8)}setZoom(e){this._targetZoom=ts(e,.45,2.8)}get zoomLevel(){return this._targetZoom}setMouseParallax(e,t){this._mouseParallax.x=ts(e,-1,1),this._mouseParallax.y=ts(t,-1,1)}update(e,t=!1,n=0){this._zoomLevel+=(this._targetZoom-this._zoomLevel)*Math.min(e*8,1);const r=z_[this.mode].clone(),a=V_[this.mode].clone();if(this.mode===tt.COCKPIT?(r.x+=this._mouseParallax.x*.06,r.y+=this._mouseParallax.y*.04,a.x+=this._mouseParallax.x*1.4,a.y+=this._mouseParallax.y*.8):r.multiplyScalar(this._zoomLevel),t&&n>.3){const h=.012*Math.min(n,1);r.x+=(Math.random()-.5)*h,r.y+=(Math.random()-.5)*h}const o=r.clone().applyQuaternion(this.ship.quaternion),l=this.ship.position.clone().add(o),c=a.clone().applyQuaternion(this.ship.quaternion),u=this.ship.position.clone().add(c);if(!this._initialized)this._currentPos.copy(l),this._currentLook.copy(u),this._initialized=!0;else{const h=1-Math.exp(-10*e);this._currentPos.lerp(l,h),this._currentLook.lerp(u,h)}if(this.camera.position.copy(this._currentPos),this.camera.lookAt(this._currentLook),this.mode===tt.COCKPIT){const h=(t?Ql:da)*this._zoomLevel;this._targetFov=ts(h,35,85)}else this._targetFov=t?Ql:da;if(Math.abs(this.camera.fov-this._targetFov)>.05){const h=1-Math.exp(-3*e);this.camera.fov+=(this._targetFov-this.camera.fov)*h,this.camera.updateProjectionMatrix()}}}function ts(i,e,t){return Math.min(Math.max(i,e),t)}const ei=Object.freeze({SPOOLING:"SPOOLING",CRUISE:"CRUISE",DECELERATING:"DECELERATING",ARRIVED:"ARRIVED"}),Dn=1.4,rr=1.6;function q_(i,e){const t=Math.max(Ha(e),Dn+rr+.1),n=nc(Ha(i),0,t),s=Math.max(t-Dn-rr,.1);if(n>=t)return{phase:ei.ARRIVED,phaseProgress:1,overallProgress:1,speedFraction:0,pathT:1};if(n<Dn){const c=n/Dn,u=ec(c),h=.02*ec(c);return{phase:ei.SPOOLING,phaseProgress:c,overallProgress:n/t,speedFraction:u,pathT:h}}if(n<Dn+s){const c=(n-Dn)/s,u=.02+c*.9;return{phase:ei.CRUISE,phaseProgress:c,overallProgress:n/t,speedFraction:1,pathT:u}}const a=(n-Dn-s)/rr,o=1-tc(a),l=.92+tc(a)*.08;return{phase:ei.DECELERATING,phaseProgress:a,overallProgress:n/t,speedFraction:o,pathT:nc(l,0,1)}}function X_(i){const e=Math.max(Ha(i),0),t=Dn+rr,n=Math.min(Math.log10(1+e)*.9,14);return t+n}function ec(i){return i*i}function tc(i){return 1-(1-i)*(1-i)}function nc(i,e,t){return Math.min(Math.max(i,e),t)}function Ha(i){return Number.isFinite(i)?i:0}function K_({color:i=14674431}={}){return new It({uniforms:{uColor:{value:new Pe(i)},uSpeedFraction:{value:0}},vertexShader:`
      uniform float uSpeedFraction;
      varying float vAlpha;
      void main() {
        vAlpha = 0.4 + uSpeedFraction * 0.6;
        vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
        gl_Position = projectionMatrix * mvPosition;
        gl_PointSize = mix(1.5, 5.0, uSpeedFraction) * (300.0 / -mvPosition.z);
      }
    `,fragmentShader:`
      uniform vec3 uColor;
      varying float vAlpha;
      void main() {
        vec2 centered = gl_PointCoord - 0.5;
        float d = length(centered);
        float alpha = smoothstep(0.5, 0.0, d) * vAlpha;
        gl_FragColor = vec4(uColor, alpha);
      }
    `,transparent:!0,depthWrite:!1,blending:ot})}const fa=299792.458,ka=.999999;function cu(i){const e=j_(i),t=Math.sqrt(1-e*e);return t<=0?Number.POSITIVE_INFINITY>0?1/Math.sqrt(1-ka*ka):1:1/t}function uu(i,e){if(!Number.isFinite(i)||i<0)return 0;const t=cu(e);return i/t}function er(i,e){return!Number.isFinite(i)||i<=0?0:!Number.isFinite(e)||e<=0?Number.POSITIVE_INFINITY:i/e}function Y_(i){const e=Number.isFinite(i)&&i>0?i:0,t=er(e,fa),n=.999*fa,s=er(e,n),r=uu(s,.999),a=er(e,.1*fa),o=er(e,4e4/3600);return{lightSpeed:{seconds:t,label:"At light speed (c)"},relativistic999c:{seconds:s,shipSeconds:r,label:"Relativistic cruiser (0.999c)"},fusionDrive01c:{seconds:a,label:"Fusion drive (0.1c)"},chemicalRocket:{seconds:o,label:"Chemical rocket (~40,000 km/h)"}}}function ds(i){if(!Number.isFinite(i))return"effectively forever";if(i<0)return"0 seconds";const e=365.25*24*3600;if(i<60)return`${i.toFixed(1)} sec`;if(i<3600)return`${(i/60).toFixed(1)} min`;if(i<86400)return`${(i/3600).toFixed(1)} hr`;if(i<e)return`${(i/86400).toFixed(1)} days`;const t=i/e;return t<1e3?`${t.toFixed(2)} yr`:t<1e6?`${(t/1e3).toFixed(2)}k yr`:`${(t/1e6).toFixed(2)}M yr`}function $_(i,e=415e4){if(!Number.isFinite(i)||i<=0)return{schwarzschildRadiusKm:0,dilationFactor:0,timeRatio:Number.POSITIVE_INFINITY,isInsideEventHorizon:!0};const t=e*2.95325;if(i<=t)return{schwarzschildRadiusKm:t,dilationFactor:0,timeRatio:Number.POSITIVE_INFINITY,isInsideEventHorizon:!0};const n=1-t/i,s=Math.sqrt(Math.max(n,1e-6)),r=1/s;return{schwarzschildRadiusKm:t,dilationFactor:s,timeRatio:r,isInsideEventHorizon:!1}}function j_(i){return Number.isFinite(i)?Math.min(Math.max(i,0),ka):0}const Z_=1495978707e-1,J_=94607304725808e-1;function Q_(i){return br(i)/Z_}function ev(i){return br(i)/J_}function tv(i,e=1e6,t=40){const n=br(i);return n<=0?0:e*(10**(n/t)-1)}function ic(i){const e=br(i);if(e<0)return"unknown";if(e<5e6)return`${pa(e)} km`;const t=Q_(e);return t<2e3?`${pa(t)} AU`:`${pa(ev(e))} ly`}function pa(i){return Number.isFinite(i)?i>=1e3?i.toLocaleString("en-US",{maximumFractionDigits:0}):i>=1?i.toFixed(2):i.toPrecision(2):"—"}function br(i){return Number.isFinite(i)?i:0}class nv{constructor({scene:e,ship:t,store:n}){this.scene=e,this.ship=t,this.store=n,this._streaks=this._buildStreakField(),this.scene.add(this._streaks),this._active=!1,this._elapsed=0,this._duration=0,this._startPos=new C,this._endPos=new C,this._distanceKm=0,this._onArrive=null}_buildStreakField(e=800){const t=new it,n=new Float32Array(e*3);for(let a=0;a<e;a++)n[a*3]=(Math.random()-.5)*30,n[a*3+1]=(Math.random()-.5)*30,n[a*3+2]=-Math.random()*60;t.setAttribute("position",new _t(n,3));const s=K_({}),r=new ui(t,s);return r.name="warp-streaks",r.frustumCulled=!1,r.visible=!1,r}beginJump(e,t,n,s,r=1){this._startPos.copy(e);const a=t.clone().sub(e),o=a.length(),l=o>1e-5?a.clone().normalize():new C(0,0,-1),c=Math.max(r+1.2,1.8),u=o>c?t.clone().sub(l.clone().multiplyScalar(c)):t.clone();this._endPos.copy(u),this._distanceKm=Number.isFinite(n)?n:tv(e.distanceTo(t)),this._duration=X_(this._distanceKm),this._elapsed=0,this._active=!0,this._onArrive=s??null,this._streaks.visible=!0,this.ship.userData.forward=l.clone(),this.ship.lookAt(this.ship.position.clone().add(l)),this.store.dispatch(Ce.setFlightStatus(fn.SPOOLING))}cancel(){this._active=!1,this._streaks.visible=!1}get isActive(){return this._active}update(e,t){const n=this._streaks.material;if(n?.uniforms?.uSpeedFraction&&(n.uniforms.uSpeedFraction.value=this._active?n.uniforms.uSpeedFraction.value:.05+Math.sin(t*.5)*.02),!this._active)return;this._elapsed+=e;const s=q_(this._elapsed,this._duration),r=this._startPos.clone().lerp(this._endPos,s.pathT);this.ship.position.copy(r);const a=this._endPos.clone().sub(this._startPos);a.lengthSq()>1e-6&&(a.normalize(),this.ship.userData.forward=a.clone(),this.ship.lookAt(this.ship.position.clone().add(a))),n?.uniforms?.uSpeedFraction&&(n.uniforms.uSpeedFraction.value=s.speedFraction),this._streaks.position.copy(this.ship.position),this._reportTelemetry(s);const o=s.phase===ei.SPOOLING?fn.SPOOLING:s.phase===ei.DECELERATING?fn.DECELERATING:fn.WARP;this.store.getState().flightStatus!==o&&this.store.dispatch(Ce.setFlightStatus(o)),s.phase===ei.ARRIVED&&(this._active=!1,this._streaks.visible=!1,this.ship.userData.velocity={x:0,y:0,z:0},this.ship.userData.bankAngle=0,this.store.dispatch(Ce.setFlightStatus(fn.ARRIVED)),this.store.dispatch(Ce.updateTelemetry({currentSpeedC:0,etaSeconds:0,distanceRemainingKm:0})),this._onArrive?.())}_reportTelemetry(e){const t=e.speedFraction*.999,n=cu(t),s=this._distanceKm*(1-e.pathT),r=Math.max(this._duration-this._elapsed,0);this.store.dispatch(Ce.updateTelemetry({currentSpeedC:t,lorentzFactor:n,distanceRemainingKm:s,totalDistanceKm:this._distanceKm,timeDilationEarthSec:this._elapsed,timeDilationShipSec:uu(this._elapsed,t),etaSeconds:r}))}}function Ui(i,e){return{x:i.x+e.x,y:i.y+e.y,z:i.z+e.z}}function za(i,e){return{x:i.x-e.x,y:i.y-e.y,z:i.z-e.z}}function Vt(i,e){return{x:i.x*e,y:i.y*e,z:i.z*e}}function _s(i){return Math.sqrt(i.x*i.x+i.y*i.y+i.z*i.z)}function $t(i){const e=_s(i);return e<1e-9?{x:0,y:0,z:1}:{x:i.x/e,y:i.y/e,z:i.z/e}}function hu(i,e){return i.x*e.x+i.y*e.y+i.z*e.z}function iv(i,e,t){const n=Math.min(Math.max(t,0),1);return{x:i.x+(e.x-i.x)*n,y:i.y+(e.y-i.y)*n,z:i.z+(e.z-i.z)*n}}const sv=24,rv=180,av=28,ov=140,lv=.94,sc=2.2;function cv(i,e,t){const n=fv(t),s=as(tr(e?.thrust),-1,1),r=as(tr(e?.yaw),-1,1),a=as(tr(e?.pitch),-1,1),o=as(tr(e?.strafe),-1,1),l=!!e?.boost,c=l?rv:sv,u=l?ov:av,h=dv(i.forward,r*sc*n,a*sc*n),d=$t({x:-h.z,y:0,z:h.x}),p=Vt(h,s*u),g=Vt(d,o*u*.7),_=Ui(p,g);let m=Ui(i.velocity,Vt(_,n));const f=_s(m);if(f>.05&&s!==0){const O=s>=0?h:Vt(h,-1),M=Math.min(n*8,1),E=$t(iv($t(m),O,M));m=Vt(E,f)}const y=Math.pow(lv,n*60);m=Vt(m,y),_s(m)>c&&(m=Vt($t(m),c));const S=Ui(i.position,Vt(m,n)),R=-r*.45,A=i.bankAngle??0,w=A+(R-A)*Math.min(n*8,1);return{position:S,velocity:m,forward:h,bankAngle:w}}function uv(i,e,t=[]){let n={...i},s={...e},r=!1;for(const a of t){if(!a||!a.position||!a.safeRadius||a.safeRadius<=0)continue;const o=za(n,a.position);if(_s(o)<a.safeRadius){r=!0;const c=$t(o);n=Ui(a.position,Vt(c,a.safeRadius));const u=hu(s,c);u<0&&(s=za(s,Vt(c,u)))}}return{position:n,velocity:s,collided:r}}function hv(i,e,t,n=2){const s=za(t,i),r=_s(s),a=$t(s),o=$t(e),l=as(hu(o,a),-1,1),c=Math.acos(l)*180/Math.PI;return{distance:r,directionToTarget:a,angleOffsetDeg:c,aligned:c<5,arrived:r<=n}}function dv(i,e,t){let n=$t(i),s=$t({x:-n.z,y:0,z:n.x});Math.abs(n.x)<1e-5&&Math.abs(n.z)<1e-5&&(s={x:1,y:0,z:0});const r=$t({x:s.y*n.z-s.z*n.y,y:s.z*n.x-s.x*n.z,z:s.x*n.y-s.y*n.x});if(Math.abs(e)>1e-7){const a=Math.cos(e),o=Math.sin(e);n=$t(Ui(Vt(n,a),Vt(s,o)))}if(Math.abs(t)>1e-7){const a=Math.cos(t),o=Math.sin(t);n=$t(Ui(Vt(n,a),Vt(r,o)))}if(n.y>.88||n.y<-.88){const a=Math.sign(n.y)*.88,o=Math.sqrt(Math.max(1-a*a,0)),l=$t({x:n.x,y:0,z:n.z});n={x:l.x*o,y:a,z:l.z*o}}return n}function as(i,e,t){return Math.min(Math.max(i,e),t)}function tr(i){return Number.isFinite(i)?i:0}function fv(i){return!Number.isFinite(i)||i<0?0:Math.min(i,.1)}const pv={thrustForward:["KeyS","ArrowDown","s","S","arrowdown"],thrustBackward:["KeyW","ArrowUp","w","W","arrowup"],yawLeft:["KeyA","ArrowLeft","a","A","arrowleft"],yawRight:["KeyD","ArrowRight","d","D","arrowright"],strafeLeft:["KeyQ","q","Q"],strafeRight:["KeyE","e","E"],pitchUp:["KeyR","r","R"],pitchDown:["KeyF","f","F"],boost:["ShiftLeft","ShiftRight","KeyB","b","B","shift"]};class mv{constructor({keyMap:e=pv,arrivalRadius:t=2}={}){this._keyMap=e,this._arrivalRadius=t,this._pressedKeys=new Set,this._targetPosition=null,this._hyperdriveLocked=!1}handleKeyDown(e){e?.code&&this._pressedKeys.add(e.code),e?.key&&this._pressedKeys.add(e.key.toLowerCase())}handleKeyUp(e){e?.code&&this._pressedKeys.delete(e.code),e?.key&&this._pressedKeys.delete(e.key.toLowerCase())}resetInput(){this._pressedKeys.clear()}toggleHyperdriveLock(e){return this._hyperdriveLocked=typeof e=="boolean"?e:!this._hyperdriveLocked,this._hyperdriveLocked}get isHyperdriveLocked(){return this._hyperdriveLocked}setTarget(e){this._targetPosition=e}readInput(){const e=o=>o?.some(l=>this._pressedKeys.has(l))??!1;let t=0;e(this._keyMap.thrustForward)&&(t+=1),e(this._keyMap.thrustBackward)&&(t-=1);let n=0;e(this._keyMap.yawRight)&&(n+=1),e(this._keyMap.yawLeft)&&(n-=1);let s=0;e(this._keyMap.strafeRight)&&(s+=1),e(this._keyMap.strafeLeft)&&(s-=1);let r=0;e(this._keyMap.pitchUp)&&(r+=1),e(this._keyMap.pitchDown)&&(r-=1);const a=this._hyperdriveLocked||e(this._keyMap.boost);return{thrust:t,yaw:n,pitch:r,strafe:s,boost:a}}step(e,t){const n=this.readInput(),s=cv(e,n,t),r=this._targetPosition?hv(s.position,s.forward,this._targetPosition,this._arrivalRadius):null;return{state:s,bearing:r,input:n}}}const rc=[{name:"Warm Amber",primary:"#ffb854",secondary:"#ffd27a"},{name:"Emerald Retro",primary:"#58e890",secondary:"#a0ffd0"},{name:"Cyber Cyan",primary:"#62e8ff",secondary:"#b5f5ff"}];class gv{constructor(e){this.camera=e.camera,this.shipGroup=e.shipGroup,this.audio=e.audio,this.spaceRadio=e.spaceRadio,this.cassetteDeck=e.cassetteDeck,this.bobblehead=e.bobbleheadProp,this.onEngageWarp=e.onEngageWarp,this.onShowToast=e.onShowToast,this.raycaster=new ug,this.mouse=new le,this.cabinLightOn=!0,this.currentPaletteIndex=0}handleClick(e,t){if(!t||!this.camera||!this.shipGroup)return!1;this.mouse.x=e.clientX/window.innerWidth*2-1,this.mouse.y=-(e.clientY/window.innerHeight)*2+1,this.raycaster.setFromCamera(this.mouse,this.camera);const n=this.raycaster.intersectObjects(this.shipGroup.children,!0);if(n.length===0)return!1;for(const s of n){let r=s.object;for(;r&&r!==this.shipGroup;){if(r.name==="switch-cabin-light"||r.name==="lamp-bulb")return this.toggleCabinLight(),!0;if(r.name==="radio-knob"||r.name==="dash-radio")return this.tuneRadio(),!0;if(r.name==="dash-cassette"||r.name==="cassette-door"||r.name==="reel-left"||r.name==="reel-right")return this.toggleCassette(),!0;if(r.name==="dash-terrarium"||r.name==="terrarium-blossom")return this.tapTerrarium(),!0;if(r.name==="warp-lever")return this.triggerWarpLever(),!0;if(r.name==="bobblehead-head"||r.name==="bobblehead-prop")return this.tapBobblehead(),!0;if(r.name==="coffee-mug"||r.name==="coffee-mug-body")return this.tapCoffeeMug(),!0;if(r.name==="palette-switch")return this.cycleTheme(),!0;r=r.parent}}return!1}toggleCassette(){if(!this.cassetteDeck)return;this.audio?.playChirp();const e=this.cassetteDeck.togglePlay(),t=this.cassetteDeck.getCurrentTape();e?this.onShowToast?.(`📼 Cassette Playing: "${t.title}" (${t.year})`):this.onShowToast?.("📼 Cassette Deck: Paused")}tapTerrarium(){this.audio?.playChirp(),this.onShowToast?.("🌿 Hydroponic Bonsai is thriving in the warm cabin light!")}tapCoffeeMug(){this.audio?.playChirp(),this.onShowToast?.("☕ Hot space roast coffee — cozy and warm!")}toggleCabinLight(){this.cabinLightOn=!this.cabinLightOn;const e=this.shipGroup.getObjectByName("cabin-lamp-light");e&&(e.intensity=this.cabinLightOn?1.6:.05);const t=this.shipGroup.getObjectByName("lamp-bulb");t&&t.material&&t.material.color.setHex(this.cabinLightOn?16768938:4469538),this.audio?.playChirp(),this.onShowToast?.(this.cabinLightOn?"Cabin Light: ON":"Cabin Light: OFF")}tuneRadio(){if(this.spaceRadio){if(this.spaceRadio.isPlaying){const e=this.spaceRadio.tuneNext();this.onShowToast?.(`📻 Radio: ${e.name} [${e.frequency}]`)}else{this.spaceRadio.start();const e=this.spaceRadio.getCurrentStation();this.onShowToast?.(`📻 Space Radio: ON (${e.name})`)}this.audio?.playChirp()}}triggerWarpLever(){this.audio?.playChirp(),this.onEngageWarp?.()}tapBobblehead(){this.bobblehead&&this.bobblehead.nudge(3.5,(Math.random()-.5)*4),this.audio?.playChirp()}cycleTheme(){this.currentPaletteIndex=(this.currentPaletteIndex+1)%rc.length;const e=rc[this.currentPaletteIndex];document.documentElement.style.setProperty("--color-amber-glow",e.primary),this.onShowToast?.(`Dashboard HUD Palette: ${e.name}`),this.audio?.playChirp()}}class _v{constructor(e={}){this.onToggleCamera=e.onToggleCamera,this.onToggleHyperdrive=e.onToggleHyperdrive,this.touchInput={thrust:0,strafe:0,pitch:0,yaw:0,boost:!1},this._gamepadConnected=!1,this._prevButtons={},this._initGamepadListeners(),this._initTouchUI()}_initGamepadListeners(){window.addEventListener("gamepadconnected",()=>{this._gamepadConnected=!0}),window.addEventListener("gamepaddisconnected",()=>{this._gamepadConnected=!1})}_initTouchUI(){if(!("ontouchstart"in window||navigator.maxTouchPoints>0))return;const t=document.createElement("div");t.id="mobile-flight-controls",t.className="mobile-controls-layer",t.innerHTML=`
      <div class="touch-stick-zone left" id="touch-stick-left">
        <div class="touch-stick-base">
          <div class="touch-stick-knob" id="knob-left"></div>
        </div>
        <span class="stick-label">Steer (Pitch / Yaw)</span>
      </div>

      <div class="touch-actions-center">
        <button type="button" class="touch-action-btn" id="btn-touch-boost">⚡ Boost</button>
        <button type="button" class="touch-action-btn" id="btn-touch-cam">🎥 Cam</button>
      </div>

      <div class="touch-stick-zone right" id="touch-stick-right">
        <div class="touch-stick-base">
          <div class="touch-stick-knob" id="knob-right"></div>
        </div>
        <span class="stick-label">Thrust (Fwd / Back)</span>
      </div>
    `,document.body.appendChild(t),this._bindTouchStick(t.querySelector("#touch-stick-left"),t.querySelector("#knob-left"),(r,a)=>{this.touchInput.yaw=r,this.touchInput.pitch=-a}),this._bindTouchStick(t.querySelector("#touch-stick-right"),t.querySelector("#knob-right"),(r,a)=>{this.touchInput.strafe=r,this.touchInput.thrust=-a});const n=t.querySelector("#btn-touch-boost");n?.addEventListener("touchstart",r=>{r.preventDefault(),this.touchInput.boost=!0,n.classList.add("active")}),n?.addEventListener("touchend",r=>{r.preventDefault(),this.touchInput.boost=!1,n.classList.remove("active")}),t.querySelector("#btn-touch-cam")?.addEventListener("touchstart",r=>{r.preventDefault(),this.onToggleCamera?.()})}_bindTouchStick(e,t,n){if(!e||!t)return;let s=null,r=0,a=0;const o=45;e.addEventListener("touchstart",u=>{if(s!==null)return;s=u.changedTouches[0].identifier;const d=e.getBoundingClientRect();r=d.left+d.width/2,a=d.top+d.height/2});const l=u=>{for(let h=0;h<u.changedTouches.length;h++){const d=u.changedTouches[h];if(d.identifier===s){const p=d.clientX-r,g=d.clientY-a,_=Math.sqrt(p*p+g*g),m=Math.min(_,o),f=Math.atan2(g,p),y=Math.cos(f)*m,v=Math.sin(f)*m;t.style.transform=`translate(${y}px, ${v}px)`,n(y/o,v/o)}}},c=u=>{for(let h=0;h<u.changedTouches.length;h++)u.changedTouches[h].identifier===s&&(s=null,t.style.transform="translate(0px, 0px)",n(0,0))};window.addEventListener("touchmove",l,{passive:!0}),window.addEventListener("touchend",c,{passive:!0}),window.addEventListener("touchcancel",c,{passive:!0})}poll(){const e={thrust:this.touchInput.thrust,strafe:this.touchInput.strafe,pitch:this.touchInput.pitch,yaw:this.touchInput.yaw,boost:this.touchInput.boost},n=(navigator.getGamepads?navigator.getGamepads():[])[0];if(n&&n.connected){const r=g=>Math.abs(g)<.12?0:g,a=r(n.axes[0]??0),o=r(n.axes[1]??0),l=r(n.axes[2]??0),c=r(n.axes[3]??0);a!==0&&(e.yaw=a),o!==0&&(e.pitch=-o),l!==0&&(e.strafe=l),c!==0&&(e.thrust=-c);const u=n.buttons[0]?.pressed,h=n.buttons[1]?.pressed,d=n.buttons[3]?.pressed,p=n.buttons[7]?.pressed;(u||p)&&(e.boost=!0),h&&(e.thrust=-1),d&&!this._prevButtons.btnY&&this.onToggleCamera?.(),this._prevButtons.btnY=d}return e}}function vv(i,e,t=12,n=1){if(i<=0||e<=0||n<=0)return{altitudeKm:0,inAtmosphere:!1,normalizedAltitude:1,densityFraction:0,pressureAtm:0};const s=Math.max(i-e,0),r=t*8.5;if(s>=r)return{altitudeKm:s,inAtmosphere:!1,normalizedAltitude:1,densityFraction:0,pressureAtm:0};const a=Math.exp(-s/Math.max(t,1)),o=n*a,l=Math.min(Math.max(s/r,0),1);return{altitudeKm:s,inAtmosphere:a>1e-4,normalizedAltitude:l,densityFraction:a,pressureAtm:o}}function yv(i,e,t=18){if(e<=1e-4||i<=1)return{heatIntensity:0,dragForce:0,plasmaColor:"#ff7733",turbulenceShake:0};const n=.5*e*i**2,r=Math.max(i-t,0)/60*Math.sqrt(e)*1.5,a=Math.min(Math.max(r,0),1),l=Math.min(n*.08,i*.9);let c="#ff6a2b";a>.75?c="#aae8ff":a>.45&&(c="#ffd066");const u=a*.035+n*8e-4;return{heatIntensity:a,dragForce:l,plasmaColor:c,turbulenceShake:Math.min(u,.08)}}const xv=4.5;function Sv(i,e,t,n=45,s=.12){const r=[];let a=i.x,o=i.y,l=i.z,c=e.x,u=e.y,h=e.z;r.push({x:a,y:o,z:l,speed:Math.sqrt(c*c+u*u+h*h)});const d=t?t.length:0;for(let p=0;p<n;p++){let g=0,_=0,m=0;for(let f=0;f<d;f++){const y=t[f],v=y.position.x-a,S=y.position.y-o,R=y.position.z-l,A=v*v+S*S+R*R,w=Math.sqrt(A),O=Math.max(y.safeRadius*.8,.15);if(w<O)return r;const E=xv*(y.mass||1)/(A+.08),N=1/w;g+=v*N*E,_+=S*N*E,m+=R*N*E}c+=g*s,u+=_*s,h+=m*s,a+=c*s,o+=u*s,l+=h*s,r.push({x:a,y:o,z:l,speed:Math.sqrt(c*c+u*u+h*h)})}return r}class Mv{constructor(){this._ctx=null,this._muted=!1,this._nodes={},this._available=!1}init(){if(this._ctx)return;const e=window.AudioContext||window.webkitAudioContext;if(!e){console.warn("[SoundSynthesizer] Web Audio API unavailable; running muted."),this._available=!1;return}try{this._ctx=new e,this._available=!0,this._buildAmbientDrone(),this._buildEngineHum()}catch(t){console.warn("[SoundSynthesizer] Failed to initialize audio:",t),this._available=!1}}_buildAmbientDrone(){const e=this._ctx,t=e.createGain();t.gain.value=.05,t.connect(e.destination);const n=e.createOscillator();n.type="sine",n.frequency.value=96;const s=e.createOscillator();s.type="sine",s.frequency.value=96.6,n.connect(t),s.connect(t),n.start(),s.start(),this._nodes.ambient={gain:t,osc1:n,osc2:s}}_buildEngineHum(){const e=this._ctx,t=e.createGain();t.gain.value=0,t.connect(e.destination);const n=e.createOscillator();n.type="triangle",n.frequency.value=60,n.connect(t),n.start(),this._nodes.hum={gain:t,osc:n}}setEngineIntensity(e){if(!this._available||!this._nodes.hum)return;const t=bv(e),n=this._ctx.currentTime;this._nodes.hum.gain.gain.setTargetAtTime(this._muted?0:t*.08,n,.15),this._nodes.hum.osc.frequency.setTargetAtTime(60+t*140,n,.2)}playChirp(){if(!this._available||this._muted)return;const e=this._ctx,t=e.currentTime,n=e.createOscillator(),s=e.createGain();n.type="sine",n.frequency.setValueAtTime(660,t),n.frequency.exponentialRampToValueAtTime(880,t+.12),s.gain.setValueAtTime(.001,t),s.gain.exponentialRampToValueAtTime(.06,t+.02),s.gain.exponentialRampToValueAtTime(1e-4,t+.35),n.connect(s),s.connect(e.destination),n.start(t),n.stop(t+.4)}setMuted(e){if(this._muted=!!e,!this._available)return;const t=this._ctx.currentTime;this._nodes.ambient?.gain.gain.setTargetAtTime(this._muted?0:.05,t,.2),this._muted&&this._nodes.hum?.gain.gain.setTargetAtTime(0,t,.2)}dispose(){if(this._ctx){for(const e of Object.values(this._nodes))e.osc1?.stop?.(),e.osc2?.stop?.(),e.osc?.stop?.();this._ctx.close?.(),this._ctx=null,this._available=!1}}}function bv(i){return Number.isFinite(i)?Math.min(Math.max(i,0),1):0}const ns=[{id:"lofi-cabin",name:"Station 1: Cozy Cabin Lo-Fi",frequency:"88.4 FM",genre:"Warm Generative Chords"},{id:"deep-space",name:"Station 2: Deep Space Resonance",frequency:"94.2 FM",genre:"Sub-Harmonic Drone Pad"},{id:"pulsar-radio",name:"Station 3: Cosmic Frequencies",frequency:"107.9 FM",genre:"Pulsar Rhythms & Clicks"},{id:"solar-wind",name:"Station 4: Solar Wind Ambient",frequency:"101.3 FM",genre:"Modulated Plasma & Sweeps"}],ac=[[130.81,164.81,196,246.94],[110,130.81,164.81,196],[146.83,174.61,220,261.63],[98,123.47,146.83,196],[123.47,155.56,185,220],[174.61,220,261.63,329.63]];class Ev{constructor(e=null){this._ctx=e,this.currentStationIndex=0,this.isPlaying=!1,this.volume=.65,this._masterGain=null,this._nodes=[],this._stepTimer=null,this._stepCounter=0}setContext(e){this._ctx=e}togglePower(){return this.isPlaying?(this.stop(),!1):(this.start(),!0)}start(){this._ctx&&(this._ctx.state==="suspended"&&this._ctx.resume(),this.isPlaying=!0,this._buildStationAudio())}stop(){this.isPlaying=!1,this._stepTimer&&(clearInterval(this._stepTimer),this._stepTimer=null),this._cleanupNodes()}setStation(e){return this.currentStationIndex=(e+ns.length)%ns.length,this.isPlaying&&this._buildStationAudio(),ns[this.currentStationIndex]}tuneNext(){return this.setStation(this.currentStationIndex+1)}tunePrev(){return this.setStation(this.currentStationIndex-1)}getCurrentStation(){return ns[this.currentStationIndex]}setVolume(e){this.volume=Math.min(Math.max(e,0),1),this._masterGain&&this._ctx&&this._masterGain.gain.setTargetAtTime(this.volume*.12,this._ctx.currentTime,.05)}_cleanupNodes(){if(this._nodes)for(const e of this._nodes)try{e.stop&&e.stop(),e.disconnect&&e.disconnect()}catch{}this._nodes=[]}_buildStationAudio(){if(!this._ctx||!this.isPlaying)return;this._cleanupNodes(),this._stepTimer&&clearInterval(this._stepTimer);const e=this._ctx;this._masterGain=e.createGain(),this._masterGain.gain.value=this.volume*.12,this._masterGain.connect(e.destination),this._nodes.push(this._masterGain);const t=ns[this.currentStationIndex];t.id==="lofi-cabin"?this._startLofiStation(e):t.id==="deep-space"?this._startDeepSpaceDrone(e):t.id==="pulsar-radio"?this._startPulsarRadio(e):t.id==="solar-wind"&&this._startSolarWind(e)}_startSolarWind(e){const t=e.sampleRate*2,n=e.createBuffer(1,t,e.sampleRate),s=n.getChannelData(0);let r=0,a=0,o=0,l=0,c=0,u=0,h=0;for(let f=0;f<t;f++){const y=Math.random()*2-1;r=.99886*r+y*.0555179,a=.99332*a+y*.0750759,o=.969*o+y*.153852,l=.8665*l+y*.3104856,c=.55*c+y*.5329522,u=-.7616*u-y*.016898,s[f]=(r+a+o+l+c+u+h+y*.5362)*.11,h=y*.115926}const d=e.createBufferSource();d.buffer=n,d.loop=!0;const p=e.createBiquadFilter();p.type="bandpass",p.frequency.setValueAtTime(320,e.currentTime),p.Q.setValueAtTime(4.5,e.currentTime);const g=e.createOscillator();g.type="sine",g.frequency.setValueAtTime(.15,e.currentTime);const _=e.createGain();_.gain.setValueAtTime(180,e.currentTime),g.connect(_),_.connect(p.frequency);const m=e.createGain();m.gain.setValueAtTime(.045,e.currentTime),d.connect(p),p.connect(m),m.connect(this._masterGain),d.start(),g.start(),this._nodes.push(d,p,g,_,m)}updatePlanetarySonification(e,t=1/0){if(!this._ctx||!this.isPlaying||!e||t>5e5){this._planetaryGain&&this._ctx&&this._planetaryGain.gain.setTargetAtTime(0,this._ctx.currentTime,.2);return}const n=this._ctx;this._planetaryGain||(this._planetaryGain=n.createGain(),this._planetaryGain.gain.value=0,this._planetaryGain.connect(n.destination),this._planetaryOsc=n.createOscillator(),this._planetaryOsc.type="sine",this._planetaryOsc.frequency.value=220,this._planetaryFilter=n.createBiquadFilter(),this._planetaryFilter.type="lowpass",this._planetaryFilter.frequency.value=400,this._planetaryOsc.connect(this._planetaryFilter),this._planetaryFilter.connect(this._planetaryGain),this._planetaryOsc.start());const r=Math.min(Math.max((5e5-t)/495e3,0),1)*.035*this.volume;this._planetaryGain.gain.setTargetAtTime(r,n.currentTime,.1);let a=180;e.kind==="black_hole"?a=55:e.kind==="star"||e.id==="sun"?a=120:e.id==="jupiter"?a=340:e.id==="saturn"?a=260:e.id==="earth"&&(a=440),this._planetaryOsc.frequency.setTargetAtTime(a+Math.sin(n.currentTime*1.5)*15,n.currentTime,.1)}_startLofiStation(e){const t=()=>{if(!this.isPlaying||!this._ctx)return;const n=this._stepCounter%ac.length;this._stepCounter++;const s=ac[n],r=e.currentTime,a=e.createBiquadFilter();a.type="lowpass",a.frequency.setValueAtTime(650,r),a.connect(this._masterGain);for(let o=0;o<s.length;o++){const l=e.createOscillator(),c=e.createGain();l.type=o===0?"triangle":"sine",l.frequency.setValueAtTime(s[o],r),c.gain.setValueAtTime(.001,r),c.gain.linearRampToValueAtTime(.035,r+.8),c.gain.exponentialRampToValueAtTime(1e-4,r+3.9),l.connect(c),c.connect(a),l.start(r),l.stop(r+4)}};t(),this._stepTimer=setInterval(t,4e3)}_startDeepSpaceDrone(e){const t=e.createBiquadFilter();t.type="lowpass",t.frequency.setValueAtTime(280,e.currentTime),t.connect(this._masterGain),[55,82.41,110].forEach((s,r)=>{const a=e.createOscillator(),o=e.createGain();a.type="sine",a.frequency.value=s+r*.35,o.gain.value=.045/(r+1),a.connect(o),o.connect(t),a.start(),this._nodes.push(a,o)})}_startPulsarRadio(e){const t=e.currentTime,n=e.createOscillator(),s=e.createStereoPanner?e.createStereoPanner():null,r=e.createGain();n.type="sawtooth",n.frequency.setValueAtTime(420,t);const a=e.createOscillator();a.type="square",a.frequency.setValueAtTime(3.2,t);const o=e.createGain();o.gain.value=.03,a.connect(o.gain),r.gain.value=.025,n.connect(r),s?(r.connect(s),s.connect(this._masterGain),this._nodes.push(s)):r.connect(this._masterGain),n.start(),a.start(),this._nodes.push(n,a,r,o)}}const is=[{id:"pale-blue-dot",title:"Pale Blue Dot",subtitle:"Carl Sagan · Voyager 1 Reflection",year:"1990",color:"#ffc17a",script:"Look again at that dot. That's here. That's home. That's us. On it everyone you love, everyone you know, everyone you ever heard of, every human being who ever was, lived out their lives. The aggregate of our joy and suffering, thousands of confident religions, ideologies, and economic doctrines... every saint and sinner in the history of our species lived there — on a mote of dust suspended in a sunbeam."},{id:"apollo-11",title:"Tranquility Base Audio Loop",subtitle:"NASA Apollo 11 Lunar Landing",year:"1969",color:"#9ee6ff",script:"Contact light. Shutdown. Houston, Tranquility Base here. The Eagle has landed. Roger, Tranquility, we copy you on the ground. You got a bunch of guys about to turn blue. We're breathing again. Thanks a lot. That's one small step for man, one giant leap for mankind."},{id:"voyager-record",title:"Voyager Golden Record",subtitle:"Greetings to the Cosmos & Whale Songs",year:"1977",color:"#f6d55c",script:"This is a present from a small, distant world, a token of our sounds, our science, our images, our music, our thoughts and our feelings. We are attempting to survive our time so we may live into yours."},{id:"captains-log",title:"Cosmos Cabin Flight Log",subtitle:"Captain's Stellar Drift Diary",year:"3024",color:"#58e890",script:"Stardate Log: Interstellar cruise systems active. Cabin coffee warm. The star charts drift gently outside the porthole as we journey across the infinite deep."}];class Tv{constructor(e){this._ctx=e||null,this.currentTapeIndex=0,this.isPlaying=!1,this.volume=.7,this._synthOsc=null,this._noiseNode=null,this._gainNode=null,this._utterance=null}setContext(e){this._ctx=e}getCurrentTape(){return is[this.currentTapeIndex]}setTape(e){const t=is.findIndex(n=>n.id===e);t!==-1&&(this.currentTapeIndex=t,this.isPlaying&&(this.stop(),this.play()))}nextTape(){return this.currentTapeIndex=(this.currentTapeIndex+1)%is.length,this.isPlaying&&(this.stop(),this.play()),this.getCurrentTape()}prevTape(){return this.currentTapeIndex=(this.currentTapeIndex-1+is.length)%is.length,this.isPlaying&&(this.stop(),this.play()),this.getCurrentTape()}togglePlay(){return this.isPlaying?this.stop():this.play(),this.isPlaying}play(){this.isPlaying=!0,this._startTapeWarmthAudio(),this._startSpokenVoice()}stop(){this.isPlaying=!1,this._stopAudioNodes(),typeof window<"u"&&window.speechSynthesis&&window.speechSynthesis.cancel()}_startTapeWarmthAudio(){if(this._ctx)try{this._ctx.state==="suspended"&&this._ctx.resume(),this._gainNode=this._ctx.createGain(),this._gainNode.gain.setValueAtTime(this.volume*.15,this._ctx.currentTime),this._gainNode.connect(this._ctx.destination),this._synthOsc=this._ctx.createOscillator(),this._synthOsc.type="triangle",this._synthOsc.frequency.setValueAtTime(110,this._ctx.currentTime);const e=this._ctx.createOscillator();e.frequency.setValueAtTime(4.5,this._ctx.currentTime);const t=this._ctx.createGain();t.gain.setValueAtTime(1.8,this._ctx.currentTime),e.connect(t),t.connect(this._synthOsc.frequency),e.start(),this._synthOsc.connect(this._gainNode),this._synthOsc.start()}catch{}}_startSpokenVoice(){if(typeof window>"u"||!window.speechSynthesis)return;window.speechSynthesis.cancel();const e=this.getCurrentTape(),t=new window.SpeechSynthesisUtterance(e.script);t.rate=.88,t.pitch=.95,t.volume=this.volume,t.onend=()=>{this.isPlaying&&this.stop()},window.speechSynthesis.speak(t),this._utterance=t}_stopAudioNodes(){if(this._synthOsc){try{this._synthOsc.stop(),this._synthOsc.disconnect()}catch{}this._synthOsc=null}if(this._gainNode){try{this._gainNode.disconnect()}catch{}this._gainNode=null}}}function Av(i,{maxResults:e=8}={}){const t=String(i??"").trim();if(!t)return[];const n=Ig(t,en).map(r=>({id:r.id,name:r.name,kind:"celestial",subtitle:r.location})),s=Fg(t).map(r=>({id:r.id,name:r.name,kind:"satellite",subtitle:`${r.agency} · ${r.status}`}));return[...n,...s].slice(0,Math.max(0,e))}class wv{constructor(e,t,n={}){if(!e)throw new Error("NavigationSearch requires a root element");this.root=e,this.store=t,this._onSelect=n.onSelect??(()=>{}),this._results=[],this._activeIndex=-1,this._render(),this._bindEvents(),this._unsubscribe=t.subscribe(s=>this._updateModeButton(s),s=>s.flightMode)}_render(){this.root.innerHTML=`
      <div class="nav-search" role="search">
        <label class="visually-hidden" for="search-input">Search an astronomical object or satellite</label>
        <input id="search-input" class="nav-search-input" type="text" autocomplete="off"
               placeholder="Search a planet, star, galaxy, or satellite…" />
        <button type="button" class="mode-toggle" title="Toggle autopilot / manual flight mode">
          Autopilot
        </button>
        <ul class="nav-search-results" hidden></ul>
      </div>
    `,this._input=this.root.querySelector(".nav-search-input"),this._resultsEl=this.root.querySelector(".nav-search-results"),this._modeButton=this.root.querySelector(".mode-toggle")}_bindEvents(){this._input.addEventListener("input",()=>this._handleInput()),this._input.addEventListener("keydown",e=>this._handleKeydown(e)),this._modeButton.addEventListener("click",()=>this._toggleMode()),document.addEventListener("click",e=>{this.root.contains(e.target)||this._closeResults()})}_handleInput(){const e=this._input.value;this.store.dispatch(Ce.setSearchQuery(e));try{this._results=Av(e)}catch(t){console.error("[NavigationSearch] search failed:",t),this._results=[]}this._activeIndex=this._results.length>0?0:-1,this._renderResults()}_handleKeydown(e){if(this._results.length!==0)if(e.key==="ArrowDown")e.preventDefault(),this._activeIndex=(this._activeIndex+1)%this._results.length,this._renderResults();else if(e.key==="ArrowUp")e.preventDefault(),this._activeIndex=(this._activeIndex-1+this._results.length)%this._results.length,this._renderResults();else if(e.key==="Enter"){e.preventDefault();const t=this._results[this._activeIndex]??this._results[0];t&&this._selectResult(t)}else e.key==="Escape"&&this._closeResults()}_renderResults(){if(this._results.length===0){this._resultsEl.hidden=!0,this._resultsEl.innerHTML="";return}this._resultsEl.hidden=!1,this._resultsEl.innerHTML=this._results.map((e,t)=>`
        <li role="option" data-index="${t}" class="nav-result ${t===this._activeIndex?"active":""}">
          <span class="nav-result-name">${oc(e.name)}</span>
          <span class="nav-result-sub">${oc(e.subtitle)}</span>
        </li>`).join(""),this._resultsEl.querySelectorAll(".nav-result").forEach(e=>{e.addEventListener("click",()=>{const t=Number(e.getAttribute("data-index")),n=this._results[t];n&&this._selectResult(n)})})}_selectResult(e){this._input.value=e.name,this._closeResults(),this._onSelect(e)}_closeResults(){this._results=[],this._activeIndex=-1,this._resultsEl.hidden=!0,this._resultsEl.innerHTML=""}_toggleMode(){const t=this.store.getState().flightMode===ln.AUTOPILOT?ln.MANUAL:ln.AUTOPILOT;this.store.dispatch(Ce.setFlightMode(t))}_updateModeButton(e){const t=e===ln.MANUAL;this._modeButton.textContent=t?"Manual":"Autopilot",this._modeButton.classList.toggle("mode-manual",t),this._modeButton.setAttribute("aria-label",t?"Switch to autopilot flight":"Switch to manual, hand-flown navigation")}dispose(){this._unsubscribe?.()}}function oc(i){const e=document.createElement("div");return e.textContent=i??"",e.innerHTML}const jn=Object.freeze({EARTH_LIKE:"Directly Habitable",DOME_REQUIRED:"Dome Settlement Required",SUBTERRANEAN:"Subterranean / Radiation-Shielded Base",EXTREME_TERRAFORMING:"Extreme Terraforming Required",GAS_OUTPOST:"Gas Giant Cloud Outpost Only",UNINHABITABLE:"Uninhabitable"});function du(i){const{surfaceTempC:e=-273,atmosphericPressureAtm:t=0,surfaceGravityG:n=0,radiationIndex:s=10,hasLiquidWater:r=!1,isGasGiant:a=!1}=i??{};if(a)return{score:2,classification:jn.GAS_OUTPOST,factors:{temperature:0,pressure:0,gravity:0,radiation:0,water:0}};const o=ma(e,-10,35,60),l=ma(t,.5,1.5,.6),c=ma(n,.6,1.4,.5),u=Va(1-mr(s,10)/10),h=r?1:0,d=o*.3+l*.2+c*.15+u*.2+h*.15,p=Math.round(Va(d)*100);return{score:p,classification:Cv(p,{atmosphericPressureAtm:t,radiationIndex:s}),factors:{temperature:o,pressure:l,gravity:c,radiation:u,water:h}}}function Cv(i,{atmosphericPressureAtm:e,radiationIndex:t}){return i>=75?jn.EARTH_LIKE:i>=45?jn.DOME_REQUIRED:mr(t,10)>=6||mr(e,0)<.01?i>=15?jn.SUBTERRANEAN:jn.UNINHABITABLE:i>=15?jn.EXTREME_TERRAFORMING:jn.UNINHABITABLE}function ma(i,e,t,n){const s=mr(i,e-n);if(s>=e&&s<=t)return 1;const r=s<e?e-s:s-t,a=Math.max(n,1e-6);return Va(Math.exp(-((r/a)**2)))}function Va(i){return Number.isFinite(i)?Math.min(Math.max(i,0),1):0}function mr(i,e){return Number.isFinite(i)?i:e}function Rv(i){const e=Object.entries(i??{}).filter(([,n])=>Number.isFinite(n)&&n>0),t=e.reduce((n,[,s])=>n+s,0);return t<=0?[]:e.map(([n,s])=>({gas:n,percent:Math.round(s/t*1e3)/10})).sort((n,s)=>s.percent-n.percent)}class Lv{constructor(e,t){if(!e)throw new Error("DetailPanel requires a root element");this.root=e,this.store=t,this._currentId=null,this._unsubscribers=[t.subscribe(()=>this._render(),n=>`${n.selectedObject}|${n.ui.isDetailPanelOpen}`)],this._render()}show(e){this._currentId=e,this.store.dispatch(Ce.selectObject(e)),this.store.dispatch(Ce.toggleDetailPanel(!0))}close(){this.store.dispatch(Ce.toggleDetailPanel(!1))}_render(){const e=this.store.getState();if(!e.ui.isDetailPanelOpen){this.root.innerHTML="",this.root.hidden=!0;return}const t=this._currentId??e.selectedObject,n=Qn(t),s=n?null:rs(t);if(!n&&!s){this.root.innerHTML=`
        <div class="detail-panel empty">
          <p>Search for a world, star, galaxy, or satellite to see its story here.</p>
        </div>`,this.root.hidden=!1;return}this.root.hidden=!1,this.root.innerHTML=n?this._renderCelestial(n):this._renderSatellite(s),this.root.querySelector(".detail-close")?.addEventListener("click",()=>this.close()),this.root.querySelector('[data-action="open-habitability"]')?.addEventListener("click",()=>{this.store.dispatch(Ce.toggleHabitability(!0))}),this.root.querySelector('[data-action="deploy-lander"]')?.addEventListener("click",r=>{const a=r.currentTarget.dataset.targetId;this.store.dispatch(Ce.deployLander(a)),this.close()})}_renderCelestial(e){let t;try{t=du(e.environment)}catch(o){console.error("[DetailPanel] habitability calc failed:",o),t={score:0,classification:"Unknown",factors:{}}}let n;try{n=Y_(e.distanceFromEarthKm)}catch(o){console.error("[DetailPanel] travel calc failed:",o),n=null}const s=Rv(e.environment.composition),r=t.score>=45,a=["moon","mars","europa","titan","enceladus"].includes(e.id);return`
      <div class="detail-panel">
        <button type="button" class="detail-close" aria-label="Close details">&times;</button>
        <h2 class="detail-title">${bt(e.name)}</h2>
        <p class="detail-description">${bt(e.description)}</p>

        ${a?`<button type="button" class="detail-lander-btn" data-action="deploy-lander" data-target-id="${e.id}">
                 🪐 Deploy Surface Exploration Probe
               </button>`:""}

        <dl class="detail-fields">
          <div><dt>Location</dt><dd>${bt(e.location)}</dd></div>
          <div><dt>Galaxy</dt><dd>${bt(e.galaxy)}</dd></div>
          <div><dt>Solar system</dt><dd>${bt(e.solarSystem??"Not applicable")}</dd></div>
          <div><dt>Distance from Earth</dt><dd>${bt(ic(e.distanceFromEarthKm))}</dd></div>
          <div><dt>Time to reach it</dt><dd>${n?bt(ds(n.relativistic999c.seconds))+" at 0.999c":"Unknown"}</dd></div>
          <div><dt>Habitable?</dt><dd class="${r?"yes":"no"}">${r?`Yes — ${t.classification}`:`No — ${t.classification}`}</dd></div>
          <div class="atmosphere-field"><dt>Atmosphere</dt><dd>${this._renderAtmosphere(s)}</dd></div>
        </dl>

        ${n?this._renderTravelBreakdown(n):""}

        <button type="button" class="detail-habitability-score" data-action="open-habitability">
          <span>Habitability score</span>
          <div class="score-bar"><div class="score-bar-fill" style="width:${t.score}%"></div></div>
          <span>${t.score}%</span>
        </button>
      </div>
    `}_renderSatellite(e){return`
      <div class="detail-panel">
        <button type="button" class="detail-close" aria-label="Close details">&times;</button>
        <h2 class="detail-title">${bt(e.name)}</h2>
        <p class="detail-description">${bt(e.description)}</p>
        <dl class="detail-fields">
          <div><dt>Agency</dt><dd>${bt(e.agency)}</dd></div>
          <div><dt>Launched</dt><dd>${bt(String(e.launchYear))}</dd></div>
          <div><dt>Status</dt><dd>${bt(e.status)}</dd></div>
          <div><dt>Purpose</dt><dd>${bt(e.purpose)}</dd></div>
          <div><dt>Current location</dt><dd>${bt(e.location)}</dd></div>
          <div><dt>Distance from Earth</dt><dd>${bt(ic(e.distanceFromEarthKm))}</dd></div>
        </dl>
      </div>
    `}_renderAtmosphere(e){if(e.length===0)return'<span class="no-atmosphere">No meaningful atmosphere</span>';const t={N2:"#88ccff",O2:"#55ffaa",CO2:"#ffaa77",H2O:"#44aaff",CH4:"#ffdd44",H2:"#dd99ff",He:"#ffaacc",Ar:"#99eebb"};return`
      <div class="spectrometer-container">
        <div class="spectrometer-band" title="Spectral Absorption Profile">${e.map(s=>{const r=s.gas.replace(/[^a-zA-Z0-9]/g,""),a=t[r]||"#ffd27a";return`<div class="spec-bar-seg" style="width:${Math.max(s.percent,3)}%;background:${a}" title="${bt(s.gas)}: ${s.percent}%"></div>`}).join("")}</div>
        <ul class="atmosphere-list">${e.map(s=>{const r=s.gas.replace(/[^a-zA-Z0-9]/g,"");return`<li><span class="gas-bullet" style="color:${t[r]||"#ffd27a"}">■</span> <span>${bt(s.gas)}</span><span>${s.percent}%</span></li>`}).join("")}</ul>
      </div>
    `}_renderTravelBreakdown(e){return`
      <div class="travel-breakdown">
        <h3>How long would it take?</h3>
        <ul>
          ${[e.lightSpeed,e.relativistic999c,e.fusionDrive01c,e.chemicalRocket].map(n=>`<li><span>${bt(n.label)}</span><span>${bt(ds(n.seconds))}</span></li>`).join("")}
        </ul>
      </div>
    `}dispose(){this._unsubscribers.forEach(e=>e())}}function bt(i){const e=document.createElement("div");return e.textContent=i??"",e.innerHTML}const Pv={temperature:"Temperature",pressure:"Atmospheric pressure",gravity:"Surface gravity",radiation:"Radiation shielding",water:"Liquid water"};class Iv{constructor(e,t){if(!e)throw new Error("HabitabilityMatrix requires a root element");this.root=e,this.store=t,this._unsubscribe=t.subscribe(()=>this._render(),n=>`${n.selectedObject}|${n.ui.isHabitabilityOpen}`),this._render()}_render(){const e=this.store.getState();if(!e.ui.isHabitabilityOpen){this.root.innerHTML="",this.root.hidden=!0;return}const t=Qn(e.selectedObject);if(!t){this.root.hidden=!0;return}let n;try{n=du(t.environment)}catch(s){console.error("[HabitabilityMatrix] compute failed:",s),this.root.hidden=!0;return}this.root.hidden=!1,this.root.innerHTML=`
      <div class="habitability-matrix">
        <button type="button" class="matrix-close" aria-label="Close habitability breakdown">&times;</button>
        <h3>Habitability breakdown — ${ga(t.name)}</h3>
        <p class="matrix-classification">${ga(n.classification)}</p>
        <ul class="matrix-factors">
          ${Object.entries(n.factors).map(([s,r])=>`
              <li>
                <span class="factor-label">${ga(Pv[s]??s)}</span>
                <div class="factor-bar"><div class="factor-bar-fill" style="width:${Math.round(r*100)}%"></div></div>
              </li>`).join("")}
        </ul>
      </div>
    `,this.root.querySelector(".matrix-close")?.addEventListener("click",()=>{this.store.dispatch(Ce.toggleHabitability(!1))})}dispose(){this._unsubscribe?.()}}function ga(i){const e=document.createElement("div");return e.textContent=i??"",e.innerHTML}class Dv{constructor(e,t,n={}){if(!e)throw new Error("SatelliteList requires a root element");this.root=e,this.store=t,this._onSelect=n.onSelect??(()=>{}),this._unsubscribe=t.subscribe(s=>this._render(s),s=>s.ui.isSatelliteListOpen),this._render(t.getState().ui.isSatelliteListOpen)}toggle(e){this.store.dispatch(Ce.toggleSatelliteList(e))}_render(e){if(!e){this.root.innerHTML="",this.root.hidden=!0;return}this.root.hidden=!1,this.root.innerHTML=`
      <div class="satellite-list">
        <div class="satellite-list-header">
          <h3>Launched satellites &amp; probes</h3>
          <button type="button" class="satellite-list-close" aria-label="Close satellite list">&times;</button>
        </div>
        <ul>
          ${wn.map(t=>`
            <li class="satellite-item" data-id="${t.id}">
              <span class="satellite-name">${_a(t.name)}</span>
              <span class="satellite-meta">${_a(t.agency)} · ${t.launchYear} · ${_a(t.status)}</span>
            </li>`).join("")}
        </ul>
      </div>
    `,this.root.querySelector(".satellite-list-close")?.addEventListener("click",()=>this.toggle(!1)),this.root.querySelectorAll(".satellite-item").forEach(t=>{t.addEventListener("click",()=>this._onSelect(t.getAttribute("data-id")))})}dispose(){this._unsubscribe?.()}}function _a(i){const e=document.createElement("div");return e.textContent=i??"",e.innerHTML}class Ov{constructor(e,t){if(!e)throw new Error("CompassArrow requires a root element");this.root=e,this.store=t,this._render(),this._unsubscribe=t.subscribe(n=>this._setVisible(n===ln.MANUAL),n=>n.flightMode),this._setVisible(t.getState().flightMode===ln.MANUAL)}_render(){this.root.innerHTML=`
      <div class="compass-arrow" hidden>
        <svg viewBox="0 0 64 64" class="compass-svg" aria-hidden="true">
          <circle cx="32" cy="32" r="28" class="compass-ring" />
          <polygon points="32,10 40,40 32,32 24,40" class="compass-needle" />
        </svg>
        <span class="compass-distance">—</span>
        <span class="compass-hint">Fly toward the arrow</span>
      </div>
    `,this._arrowEl=this.root.querySelector(".compass-arrow"),this._needleEl=this.root.querySelector(".compass-needle"),this._distanceEl=this.root.querySelector(".compass-distance")}_setVisible(e){this._arrowEl&&(this._arrowEl.hidden=!e)}update(e){if(!e||!this._needleEl)return;const t=Math.atan2(e.directionToTarget.x,-e.directionToTarget.z)*(180/Math.PI);this._needleEl.setAttribute("transform",`rotate(${t} 32 32)`),this._needleEl.classList.toggle("aligned",e.aligned),this._distanceEl.textContent=`${e.distance.toFixed(1)} flight units`}dispose(){this._unsubscribe?.()}}const nr=[tt.COCKPIT,tt.THIRD_PERSON,tt.CINEMATIC],Nv={[tt.COCKPIT]:"Cockpit",[tt.THIRD_PERSON]:"3rd Person",[tt.CINEMATIC]:"Cinematic"};class Uv{constructor(e,t,n={}){if(!e)throw new Error("ViewSwitcher requires a root element");this.root=e,this.store=t,this.onToggleRadio=n.onToggleRadio,this._render(),this._unsubscribe=t.subscribe(({mode:s,constellations:r})=>{this._highlight(s),this._highlightConstellations(r)},s=>({mode:s.cameraMode,constellations:s.ui.constellationsVisible})),this._highlight(t.getState().cameraMode)}_render(){this.root.innerHTML=`
      <div class="view-switcher-container">
        <div class="view-switcher" role="group" aria-label="Camera view">
          ${nr.map(e=>`<button type="button" class="view-btn" data-mode="${e}">${Nv[e]}</button>`).join("")}
        </div>

        <div class="quick-tools-bar" role="group" aria-label="Exploration Tools">
          <button type="button" class="tool-btn" id="btn-toggle-constellations" title="Toggle Constellation Star Charts (O)">✨ Charts</button>
          <button type="button" class="tool-btn" id="btn-toggle-photo" title="Open Photo Studio (P)">📷 Photo</button>
          <button type="button" class="tool-btn" id="btn-toggle-logbook" title="Expedition Journal (L)">📖 Journal</button>
          <button type="button" class="tool-btn" id="btn-toggle-radio" title="Space Radio (R)">📻 Radio</button>
          <button type="button" class="tool-btn" id="btn-toggle-seti" title="SETI Waterfall Scanner (U)">📡 SETI</button>
          <button type="button" class="tool-btn" id="btn-toggle-eng" title="Ship Engineering Bay (E)">🛠️ Upgrades</button>
          <button type="button" class="tool-btn" id="btn-toggle-genesis" title="Star System Genesis (G)">🌟 Genesis</button>
        </div>
      </div>
    `,this.root.querySelectorAll(".view-btn").forEach(e=>{e.addEventListener("click",()=>{this.store.dispatch(Ce.setCameraMode(e.getAttribute("data-mode")))})}),this.root.querySelector("#btn-toggle-constellations")?.addEventListener("click",()=>{this.store.dispatch(Ce.toggleConstellations())}),this.root.querySelector("#btn-toggle-photo")?.addEventListener("click",()=>{this.store.dispatch(Ce.togglePhotoMode(!0))}),this.root.querySelector("#btn-toggle-logbook")?.addEventListener("click",()=>{this.store.dispatch(Ce.toggleLogbook(!0))}),this.root.querySelector("#btn-toggle-radio")?.addEventListener("click",()=>{this.onToggleRadio?.()}),this.root.querySelector("#btn-toggle-seti")?.addEventListener("click",()=>{this.store.dispatch({type:"TOGGLE_SETI_SCANNER"})}),this.root.querySelector("#btn-toggle-eng")?.addEventListener("click",()=>{this.store.dispatch({type:"TOGGLE_ENGINEERING_BAY"})}),this.root.querySelector("#btn-toggle-genesis")?.addEventListener("click",()=>{this.store.dispatch({type:"TOGGLE_SANDBOX_MODE"})})}cycle(){const e=this.store.getState().cameraMode,t=nr.indexOf(e),n=nr[(t+1)%nr.length];this.store.dispatch(Ce.setCameraMode(n))}_highlight(e){this.root.querySelectorAll(".view-btn").forEach(t=>{t.classList.toggle("active",t.getAttribute("data-mode")===e)})}_highlightConstellations(e){const t=this.root.querySelector("#btn-toggle-constellations");t&&t.classList.toggle("active",!!e)}dispose(){this._unsubscribe?.()}}class Fv{constructor(e,t,n={}){if(!e)throw new Error("TelemetryHUD requires a root element");this.root=e,this.store=t,this._onToggleHyperdrive=n.onToggleHyperdrive??(()=>{}),this._onZoomIn=n.onZoomIn??(()=>{}),this._onZoomOut=n.onZoomOut??(()=>{}),this._render(),this._unsubscribe=t.subscribe(s=>this._update(s),s=>s.flightTelemetry)}_render(){this.root.innerHTML=`
      <div class="telemetry-hud-wrapper">
        <div class="flight-controls-hint">
          <span class="hint-key">W A S D</span> Flight &bull; <span class="hint-key">Shift</span> Hyperdrive &bull; <span class="hint-key">Scroll</span> Zoom &bull; <span class="hint-key">C</span> View
        </div>
        <div class="telemetry-hud">
          <button type="button" class="drive-status-badge" title="Toggle Hyperdrive Fast Flight">
            <span class="status-dot"></span>
            <span class="status-label" data-field="drive-status">Sublight</span>
          </button>
          <div class="telemetry-item"><span class="label">Speed</span><span class="value" data-field="speed">0.000c</span></div>
          <div class="telemetry-item"><span class="label">ETA</span><span class="value" data-field="eta">—</span></div>
          <div class="telemetry-item"><span class="label">Ship time</span><span class="value" data-field="ship-time">0s</span></div>
          <div class="telemetry-item"><span class="label">Earth time</span><span class="value" data-field="earth-time">0s</span></div>
          <div class="time-warp-controls" role="group" aria-label="Orbital Time Warp">
            <span class="warp-label">Time:</span>
            <button type="button" class="warp-btn active" data-warp="1">1×</button>
            <button type="button" class="warp-btn" data-warp="100">100×</button>
            <button type="button" class="warp-btn" data-warp="1000">1k×</button>
            <button type="button" class="warp-btn" data-warp="10000">10k×</button>
          </div>
          <button type="button" class="hud-action-btn" id="btn-open-probe-builder" title="Design & Launch Custom Probes">
            🛰️ Probe Builder
          </button>
          <div class="zoom-controls" role="group" aria-label="Camera Zoom">
            <button type="button" class="zoom-btn" data-action="zoom-in" title="Zoom In (+)">+</button>
            <button type="button" class="zoom-btn" data-action="zoom-out" title="Zoom Out (-)">−</button>
          </div>
        </div>
      </div>
    `,this._els={speed:this.root.querySelector('[data-field="speed"]'),eta:this.root.querySelector('[data-field="eta"]'),shipTime:this.root.querySelector('[data-field="ship-time"]'),earthTime:this.root.querySelector('[data-field="earth-time"]'),driveStatus:this.root.querySelector('[data-field="drive-status"]'),driveBadge:this.root.querySelector(".drive-status-badge"),warpButtons:this.root.querySelectorAll(".warp-btn")},this._els.driveBadge?.addEventListener("click",()=>{this._onToggleHyperdrive()}),this.root.querySelector("#btn-open-probe-builder")?.addEventListener("click",()=>{this.store.dispatch({type:"TOGGLE_PROBE_BUILDER",payload:!0})}),this.root.querySelectorAll(".warp-btn").forEach(e=>{e.addEventListener("click",()=>{const t=Number(e.getAttribute("data-warp"))||1;this.store.dispatch({type:"SET_TIME_WARP",payload:t}),this.root.querySelectorAll(".warp-btn").forEach(n=>n.classList.toggle("active",n===e))})}),this.root.querySelector('[data-action="zoom-in"]')?.addEventListener("click",()=>{this._onZoomIn()}),this.root.querySelector('[data-action="zoom-out"]')?.addEventListener("click",()=>{this._onZoomOut()})}updateDriveMode(e){!this._els.driveStatus||!this._els.driveBadge||(this._els.driveStatus.textContent=e?"Hyperdrive":"Sublight",this._els.driveBadge.classList.toggle("hyperdrive-active",!!e))}_update(e){e&&(this._els.speed.textContent=`${e.currentSpeedC.toFixed(3)}c`,this._els.eta.textContent=e.etaSeconds>0?ds(e.etaSeconds):"—",this._els.shipTime.textContent=ds(e.timeDilationShipSec),this._els.earthTime.textContent=ds(e.timeDilationEarthSec))}dispose(){this._unsubscribe?.()}}class Gv{constructor(e,{range:t=20}={}){if(!e)throw new Error("RadarCanvas requires a root element");this.root=e,this.range=t,this.root.innerHTML='<canvas class="radar-canvas" width="140" height="140" aria-label="Radar"></canvas>',this.canvas=this.root.querySelector("canvas"),this.ctx=this.canvas.getContext("2d")}render(e,t,n){const s=this.ctx;if(!s)return;const{width:r,height:a}=this.canvas,o=r/2,l=a/2,c=(r/2-8)/this.range;s.clearRect(0,0,r,a),s.fillStyle="rgba(20, 18, 30, 0.55)",s.beginPath(),s.arc(o,l,r/2-2,0,Math.PI*2),s.fill(),s.strokeStyle="rgba(255, 220, 180, 0.25)",s.beginPath(),s.arc(o,l,r/2-2,0,Math.PI*2),s.stroke();for(const u of n??[]){const h=u.x-e.x,d=u.z-e.z,p=Bv(h,d,-t),g=o+p.x*c,_=l+p.y*c;Math.hypot(g-o,_-l)>r/2-4||(s.fillStyle=u.color??"#ffd27a",s.beginPath(),s.arc(g,_,2.5,0,Math.PI*2),s.fill())}s.fillStyle="#fff6e6",s.beginPath(),s.moveTo(o,l-5),s.lineTo(o-4,l+4),s.lineTo(o+4,l+4),s.closePath(),s.fill()}}function Bv(i,e,t){const n=Math.cos(t),s=Math.sin(t);return{x:i*n-e*s,y:i*s+e*n}}const lc=[{id:"natural",name:"Natural",css:"none"},{id:"cozy-film",name:"Cozy Film",css:"sepia(0.25) contrast(1.1) brightness(1.05) saturate(1.15)"},{id:"deep-space",name:"Deep Cosmos",css:"contrast(1.25) brightness(0.95) saturate(1.3) hue-rotate(10deg)"},{id:"retro-amber",name:"Retro Amber",css:"sepia(0.65) saturate(1.4) hue-rotate(-15deg)"},{id:"cyberpunk",name:"Cyberpunk Neon",css:"contrast(1.3) saturate(1.7) hue-rotate(180deg)"}];class Hv{constructor(e,t,n){this.root=e,this.store=t,this.canvas=n.canvas,this.camera=n.camera,this.onShowToast=n.onShowToast,this.activeFilterIndex=0,this.savedFov=this.camera?.fov??60,this.isOpen=!1,this._render(),this._wireEvents(),this.store.subscribe(s=>this._onStateChange(s),s=>s.ui.isPhotoModeOpen)}_render(){this.root.innerHTML=`
      <div id="photo-mode-overlay" class="photo-mode-container" hidden>
        <div class="photo-mode-frame">
          <div class="photo-grid"></div>
          <div class="photo-badge">📷 PHOTO STUDIO</div>
        </div>

        <div class="photo-mode-bar">
          <div class="photo-control-group">
            <label for="photo-fov-slider">FOV: <span id="photo-fov-val">${Math.round(this.camera?.fov??60)}°</span></label>
            <input type="range" id="photo-fov-slider" min="30" max="105" value="${Math.round(this.camera?.fov??60)}" />
          </div>

          <div class="photo-control-group">
            <label>Filter:</label>
            <div class="photo-filter-buttons">
              ${lc.map((e,t)=>`
                <button type="button" class="photo-filter-btn ${t===0?"active":""}" data-idx="${t}">
                  ${e.name}
                </button>
              `).join("")}
            </div>
          </div>

          <div class="photo-actions">
            <button type="button" id="photo-snap-btn" class="photo-btn-primary">📸 Capture Snapshot</button>
            <button type="button" id="photo-postcard-btn" class="photo-btn-postcard">💌 Travel Postcard</button>
            <button type="button" id="photo-close-btn" class="photo-btn-secondary">✕ Exit</button>
          </div>
        </div>
      </div>
    `}_wireEvents(){const e=this.root.querySelector("#photo-fov-slider"),t=this.root.querySelector("#photo-fov-val"),n=this.root.querySelector("#photo-snap-btn"),s=this.root.querySelector("#photo-postcard-btn"),r=this.root.querySelector("#photo-close-btn"),a=this.root.querySelectorAll(".photo-filter-btn");e?.addEventListener("input",o=>{const l=Number(o.target.value);t&&(t.textContent=`${l}°`),this.camera&&(this.camera.fov=l,this.camera.updateProjectionMatrix())}),a.forEach(o=>{o.addEventListener("click",()=>{a.forEach(c=>c.classList.remove("active")),o.classList.add("active");const l=Number(o.getAttribute("data-idx"));this.setFilter(l)})}),n?.addEventListener("click",()=>this.capture()),s?.addEventListener("click",()=>this.exportPostcard()),r?.addEventListener("click",()=>this.close())}setFilter(e){this.activeFilterIndex=e;const t=lc[e];this.canvas&&t&&(this.canvas.style.filter=t.css)}capture(){if(this.canvas)try{const e=this.canvas.toDataURL("image/png"),t=document.createElement("a");t.download=`cosmos-cabin-snapshot-${Date.now()}.png`,t.href=e,document.body.appendChild(t),t.click(),document.body.removeChild(t),this.onShowToast?.("📸 Snapshot saved to your downloads!")}catch(e){console.warn("[PhotoMode] Capture failed:",e),this.onShowToast?.("Couldn't save snapshot directly.")}}exportPostcard(){if(this.canvas)try{const e=this.store.getState(),t=e.selectedObject?e.selectedObject.toUpperCase():"COSMOS CABIN",n=document.createElement("canvas"),s=1280,r=720;n.width=s,n.height=r;const a=n.getContext("2d");a.fillStyle="#1b1715",a.fillRect(0,0,s,r),a.drawImage(this.canvas,40,40,s-80,r-140),a.strokeStyle="#d4a359",a.lineWidth=4,a.strokeRect(30,30,s-60,r-60),a.fillStyle="#ffb854",a.font="bold 28px sans-serif",a.fillText(`★ GREETINGS FROM ${t} ★`,60,r-55),a.fillStyle="#ffffff99",a.font="16px monospace",a.fillText(`COSMOS CABIN EXPEDITION • ${new Date().toLocaleDateString()}`,60,r-30),a.strokeStyle="#d4a35988",a.lineWidth=2,a.strokeRect(s-180,r-95,130,55),a.fillStyle="#d4a359",a.font="12px monospace",a.fillText("INTERSTELLAR",s-165,r-70),a.fillText("POSTAGE PAID",s-165,r-50);const o=n.toDataURL("image/png"),l=document.createElement("a");l.download=`cosmos-cabin-postcard-${t.toLowerCase()}-${Date.now()}.png`,l.href=o,document.body.appendChild(l),l.click(),document.body.removeChild(l),this.onShowToast?.("💌 Vintage travel postcard generated & downloaded!")}catch(e){console.warn("[PhotoMode] Postcard generation failed:",e),this.onShowToast?.("Couldn't generate postcard.")}}_onStateChange(e){this.isOpen=!!e;const t=this.root.querySelector("#photo-mode-overlay");t&&(t.hidden=!this.isOpen),this.isOpen?(this.savedFov=this.camera?.fov??60,this.store.dispatch(Ce.toggleHud(!1))):(this.canvas&&(this.canvas.style.filter="none"),this.camera&&(this.camera.fov=this.savedFov,this.camera.updateProjectionMatrix()),this.store.dispatch(Ce.toggleHud(!0)))}open(){this.store.dispatch(Ce.togglePhotoMode(!0))}close(){this.store.dispatch(Ce.togglePhotoMode(!1))}}const cc=[{id:"voyager-grand-tour",title:"The Grand Tour: In the Wake of Voyager",subtitle:"Retrace humanity's greatest outer-planet trajectory",icon:"🚀",description:"Embark on the iconic gravity-assist journey across the gas giants, ice worlds, and onward past the heliopause into true interstellar space.",badge:{id:"badge-voyager",name:"Interstellar Pioneer",icon:"🛰️",description:"Completed the historic outer planetary grand tour."},waypoints:[{targetId:"earth",title:"Cape Canaveral Launch",briefing:"Launch day. Earth's blue cradle recedes beneath us as we ignite the cruise thrusters toward the giant worlds."},{targetId:"jupiter",title:"The Great Gravity Slingshot",briefing:"Approaching Jupiter. The massive gravity well accelerates our ship, swinging us around the Great Red Spot toward the ringed world."},{targetId:"saturn",title:"Jewel of the Solar System",briefing:"Saturn's majestic ice rings reflect warm amber sunlight. We skim the ring plane and calibrate our long-range radio antenna."},{targetId:"uranus",title:"The Tilted Ice Giant",briefing:"Rolling on its side, Uranus glows with serene cyan methane clouds. The cabin sensors record deep magnetospheric whispers."},{targetId:"neptune",title:"The Azure Winds",briefing:"Neptune's supersonic storms swirl in deep cobalt blues. Triton's cryovolcanoes glisten in the weak, distant Sun."},{targetId:"voyager-1",title:"The Edge of the Sun's Realm",briefing:"Rendezvous with the legendary Voyager 1 probe beyond the termination shock. Humanity's Golden Record carries our heartbeat into the stars."}]},{id:"habitable-horizons",title:"Habitable Horizons: Searching for Earth 2.0",subtitle:"Surveying subsurface oceans and Goldilocks exoplanets",icon:"🌱",description:"Investigate planetary worlds with liquid water potential, geothermal vents, and atmospheric biosignatures across the galaxy.",badge:{id:"badge-astrobiologist",name:"Master Astrobiologist",icon:"🧬",description:"Surveyed the galaxy's most promising candidate habitable worlds."},waypoints:[{targetId:"mars",title:"Ancient Riverbeds of Jezero",briefing:"Scanning dried deltas and Martian iron dunes. Perseverance's tracks lead into fossilized lake sediments."},{targetId:"europa",title:"Subsurface Oceanic Depths",briefing:"Jupiter's moon Europa hides a global warm saltwater ocean beneath 20km of cracked tidal ice sheets."},{targetId:"enceladus",title:"Tiger Stripe Geysers",briefing:"Flying directly through Enceladus's cryovolcanic geyser plumes. Hydrothermal vent signatures confirmed on ship spectrometers."},{targetId:"proxima-b",title:"Our Nearest Exoplanet Neighbor",briefing:"Orbiting the rocky world around Proxima Centauri, just 4.24 light-years from home in the habitable zone."},{targetId:"trappist-1e",title:"The Crown of TRAPPIST-1",briefing:"A temperate, Earth-sized world orbiting an ultra-cool red dwarf. Liquid oceans reflect the dim crimson sunrise."}]},{id:"cosmic-leviathans",title:"Cosmic Leviathans: Extreme Relativistic Monsters",subtitle:"Navigate magnetic singularities and supermassive black holes",icon:"🕳️",description:"Fly past ultra-dense neutron stars, spinning pulsar beacons, and the supermassive black hole anchor at the Milky Way core.",badge:{id:"badge-singularity",name:"Singularity Navigator",icon:"🌀",description:"Crossed relativistic event horizons and survived deep gravitational wells."},waypoints:[{targetId:"sun",title:"Our Stellar Engine",briefing:"Calibrating heat shields near the solar corona. Solar flares arch 100,000 km into the surrounding vacuum."},{targetId:"crab-pulsar",title:"Spinning Neutron Dynamo",briefing:"A city-sized stellar core spinning 30 times per second, beaming rhythmic X-ray lighthouse pulses into our cockpit radio."},{targetId:"cygnus-x1",title:"The Stellar Singularity",briefing:"First confirmed stellar-mass black hole. Blazing accretion gas spirals into the dark gravitational whirlpool."},{targetId:"sagittarius-a-star",title:"Supermassive Heart of the Milky Way",briefing:"4 million solar masses concentrated in a point. Gravitational lensing warps starfield constellations into perfect Einstein rings."}]}],va=[{id:"home-planet",name:"🌍 Home Base",desc:"Began journey from Earth orbit",condition:i=>i.some(e=>e.id==="earth")},{id:"lunar-reach",name:"🌕 Lunar Footsteps",desc:"Explored Earth's Moon",condition:i=>i.some(e=>e.id==="moon")},{id:"red-planet",name:"🔴 Red Sands",desc:"Traveled to Mars",condition:i=>i.some(e=>e.id==="mars")},{id:"gas-giant",name:"🪐 Ring & Storms",desc:"Visited Jupiter or Saturn",condition:i=>i.some(e=>e.id==="jupiter"||e.id==="saturn")},{id:"singularity",name:"🕳️ Event Horizon",desc:"Approached Sagittarius A*",condition:i=>i.some(e=>e.id==="sagittarius-a-star")},{id:"satellite-chaser",name:"🛰️ Spacecraft Historian",desc:"Located at least 2 historical satellites",condition:i=>i.filter(e=>e.kind==="satellite").length>=2},{id:"badge-voyager",name:"🚀 Voyager Pioneer",desc:"Completed The Grand Tour: In the Wake of Voyager",condition:(i,e)=>e?.completedExpeditions?.some(t=>t.expeditionId==="voyager-grand-tour")},{id:"badge-astrobiologist",name:"🌱 Master Astrobiologist",desc:"Completed Habitable Horizons: Searching for Earth 2.0",condition:(i,e)=>e?.completedExpeditions?.some(t=>t.expeditionId==="habitable-horizons")},{id:"badge-singularity",name:"🌀 Singularity Navigator",desc:"Completed Cosmic Leviathans: Relativistic Monsters",condition:(i,e)=>e?.completedExpeditions?.some(t=>t.expeditionId==="cosmic-leviathans")}];class kv{constructor(e,t,n={}){this.root=e,this.store=t,this.onSelectTarget=n.onSelectTarget,this.activeTab="discoveries",this.activeFilter="all",this._render(),this._wireEvents(),this.store.subscribe(({isOpen:s})=>this._onStateChange(s),s=>({isOpen:s.ui.isLogbookOpen,discoveries:s.discoveries,completedExpeditions:s.completedExpeditions}))}_render(){this.root.innerHTML=`
      <div id="logbook-modal-backdrop" class="modal-backdrop" hidden>
        <div class="logbook-modal">
          <header class="logbook-header">
            <div class="logbook-title-group">
              <span class="logbook-icon">📖</span>
              <div>
                <h2>Expedition Journal & Tours</h2>
                <p class="logbook-sub">Your ship’s discovery chronicle, story tours, and achievements</p>
              </div>
            </div>
            <button type="button" id="logbook-close-btn" class="modal-close-btn" aria-label="Close Journal">✕</button>
          </header>

          <div class="logbook-nav-tabs">
            <button type="button" class="tab-btn active" data-tab="discoveries">Logbook & Badges</button>
            <button type="button" class="tab-btn" data-tab="expeditions">Guided Expeditions</button>
          </div>

          <div id="tab-content-discoveries" class="logbook-tab-content">
            <section class="logbook-stats-bar">
              <div class="stat-card">
                <span class="stat-label">Worlds Discovered</span>
                <span id="logbook-stat-discovered" class="stat-value">1 / ${en.length+wn.length}</span>
              </div>
              <div class="stat-card">
                <span class="stat-label">Badges Unlocked</span>
                <span id="logbook-stat-badges" class="stat-value">1 / ${va.length}</span>
              </div>
            </section>

            <section class="logbook-badges-section">
              <h3>Discovery Badges</h3>
              <div id="logbook-badges-grid" class="badges-grid"></div>
            </section>

            <section class="logbook-entries-section">
              <div class="entries-filter-bar">
                <button type="button" class="filter-chip active" data-filter="all">All Discovered</button>
                <button type="button" class="filter-chip" data-filter="celestial">Celestial Bodies</button>
                <button type="button" class="filter-chip" data-filter="satellite">Satellites & Probes</button>
              </div>
              <div id="logbook-list" class="logbook-cards-grid"></div>
            </section>
          </div>

          <div id="tab-content-expeditions" class="logbook-tab-content" hidden>
            <section class="expeditions-list-section">
              <h3>Story Tours & Expeditions</h3>
              <div id="expeditions-container" class="expeditions-grid"></div>
            </section>
          </div>
        </div>
      </div>
    `}_wireEvents(){const e=this.root.querySelector("#logbook-modal-backdrop"),t=this.root.querySelector("#logbook-close-btn"),n=this.root.querySelectorAll(".tab-btn"),s=this.root.querySelectorAll(".filter-chip");t?.addEventListener("click",()=>this.close()),e?.addEventListener("click",r=>{r.target===e&&this.close()}),n.forEach(r=>{r.addEventListener("click",()=>{n.forEach(l=>l.classList.remove("active")),r.classList.add("active"),this.activeTab=r.getAttribute("data-tab")||"discoveries";const a=this.root.querySelector("#tab-content-discoveries"),o=this.root.querySelector("#tab-content-expeditions");a&&(a.hidden=this.activeTab!=="discoveries"),o&&(o.hidden=this.activeTab!=="expeditions"),this.activeTab==="expeditions"&&this._renderExpeditions()})}),s.forEach(r=>{r.addEventListener("click",()=>{s.forEach(a=>a.classList.remove("active")),r.classList.add("active"),this.activeFilter=r.getAttribute("data-filter")||"all",this._updateList()})})}_onStateChange(e){const t=this.root.querySelector("#logbook-modal-backdrop");t&&(t.hidden=!e),e&&(this._updateContent(),this._renderExpeditions())}_updateContent(){const e=this.store.getState(),t=e.discoveries||[],n=this.root.querySelector("#logbook-stat-discovered");n&&(n.textContent=`${t.length} / ${en.length+wn.length}`);const s=this.root.querySelector("#logbook-badges-grid");if(s){let r=0;s.innerHTML=va.map(o=>{const l=o.condition(t,e);return l&&r++,`
          <div class="badge-item ${l?"unlocked":"locked"}">
            <span class="badge-icon">${l?o.name.split(" ")[0]:"🔒"}</span>
            <div class="badge-info">
              <strong>${o.name}</strong>
              <p>${o.desc}</p>
            </div>
          </div>
        `}).join("");const a=this.root.querySelector("#logbook-stat-badges");a&&(a.textContent=`${r} / ${va.length}`)}this._updateList()}_renderExpeditions(){const e=this.root.querySelector("#expeditions-container");if(!e)return;const t=this.store.getState(),n=t.activeExpedition,s=t.completedExpeditions||[];e.innerHTML=cc.map(r=>{const a=s.some(u=>u.expeditionId===r.id),o=n&&n.id===r.id,l=o?n.currentStepIndex:0,c=r.waypoints.map((u,h)=>{const d=a||o&&h<l;return`
            <div class="expedition-waypoint ${d?"done":o&&h===l?"active":""}">
              <span class="wp-dot">${d?"✓":h+1}</span>
              <div class="wp-info">
                <strong>${u.title}</strong>
                <p>${u.briefing}</p>
              </div>
            </div>
          `}).join("");return`
        <div class="expedition-card ${o?"card-active":a?"card-completed":""}">
          <div class="expedition-card-header">
            <span class="exp-icon">${r.icon}</span>
            <div>
              <h4>${r.title}</h4>
              <p class="exp-sub">${r.subtitle}</p>
            </div>
            ${a?'<span class="status-pill completed">Completed 🏆</span>':o?'<span class="status-pill active">In Progress 🚀</span>':""}
          </div>
          <p class="exp-desc">${r.description}</p>
          <div class="expedition-waypoints-list">${c}</div>
          <div class="expedition-card-footer">
            <div class="exp-reward">
              <span>Reward:</span> <strong>${r.badge.name} ${r.badge.icon}</strong>
            </div>
            <button type="button" class="exp-action-btn" data-exp-id="${r.id}" ${a?"disabled":""}>
              ${o?"Continue Tour ➔":a?"Tour Finished":"Start Expedition"}
            </button>
          </div>
        </div>
      `}).join(""),e.querySelectorAll(".exp-action-btn").forEach(r=>{r.addEventListener("click",()=>{const a=r.getAttribute("data-exp-id");if(!a)return;const o=cc.find(u=>u.id===a);if(!o)return;const l=this.store.getState();(!l.activeExpedition||l.activeExpedition.id!==a)&&this.store.dispatch(Ce.startExpedition(a));const c=o.waypoints[0].targetId;this.close(),this.onSelectTarget?.(c,"celestial")})})}_updateList(){const e=this.root.querySelector("#logbook-list");if(!e)return;const s=(this.store.getState().discoveries||[]).filter(r=>this.activeFilter==="all"?!0:this.activeFilter==="satellite"?r.kind==="satellite":r.kind!=="satellite");if(s.length===0){e.innerHTML='<div class="logbook-empty">No discoveries in this category yet. Take flight and explore the stars!</div>';return}e.innerHTML=s.map(r=>{const a=r.discoveredAt?new Date(r.discoveredAt).toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"}):"Initial";return`
          <div class="logbook-card">
            <div class="logbook-card-header">
              <span class="card-name">${r.name}</span>
              <span class="card-tag ${r.kind==="satellite"?"tag-satellite":"tag-body"}">${r.kind||"World"}</span>
            </div>
            <div class="logbook-card-footer">
              <span class="card-time">Discovered at: ${a}</span>
              <button type="button" class="logbook-fly-btn" data-id="${r.id}" data-kind="${r.kind||"celestial"}">Fly There ➔</button>
            </div>
          </div>
        `}).join(""),e.querySelectorAll(".logbook-fly-btn").forEach(r=>{r.addEventListener("click",()=>{const a=r.getAttribute("data-id"),o=r.getAttribute("data-kind");a&&(this.close(),this.onSelectTarget?.(a,o))})})}open(){this.store.dispatch(Ce.toggleLogbook(!0))}close(){this.store.dispatch(Ce.toggleLogbook(!1))}}const zv=299792.458,ss=Object.freeze({CUBESAT:{id:"CUBESAT",name:"Nano CubeSat (3U)",massKg:12,basePowerW:40,scienceSensor:"Magnetometer & Optical Imager",icon:"🛰️"},ORBITER:{id:"ORBITER",name:"Deep Space Orbiter",massKg:450,basePowerW:320,scienceSensor:"Radar Altimeter & Spectrometer",icon:"🛸"},SOLAR_SAIL:{id:"SOLAR_SAIL",name:"Photonic Solar Sail",massKg:85,basePowerW:150,scienceSensor:"Cosmic Ray Detector & Laser Comms",icon:"⛵"}});function Vv(i){const t=Math.max(0,i||0)/zv,n=t*2;let s;if(t<1)s=`${Math.round(t*1e3)} ms`;else if(t<60)s=`${t.toFixed(1)} sec`;else if(t<3600){const r=Math.floor(t/60),a=Math.round(t%60);s=`${r}m ${a}s`}else{const r=Math.floor(t/3600),a=Math.round(t%3600/60);s=`${r}h ${a}m`}return{oneWaySeconds:t,roundTripSeconds:n,formatted:s}}function Wv(i,e=200){const t=Math.max(i||1,.05),n=1/(t*t),s=e*n;let r="OPTIMAL";return n<.04?r="RTG_ONLY":n<.25?r="CRITICAL":n<.8&&(r="REDUCED"),{solarFluxFraction:n,currentPowerW:s,status:r}}class qv{constructor(e,t,n={}){this.root=e,this.store=t,this.onShowToast=n.onShowToast,this.selectedChassis="CUBESAT",this.selectedParent="earth",this.probeName="Aegis-1",this.orbitRadiusKm=12e3,this.inclinationDeg=28,this.init(),this.store.subscribe(s=>this.toggle(s),s=>s.ui.isProbeBuilderOpen)}init(){this.modalEl=document.createElement("div"),this.modalEl.className="probe-builder-backdrop",this.modalEl.hidden=!0,this.root.appendChild(this.modalEl),this.render()}toggle(e){this.modalEl.hidden=!e,e&&this.render()}render(){const e=en.find(a=>a.id===this.selectedParent)||en[3],t=ss[this.selectedChassis]||ss.CUBESAT,n=(e.distanceFromEarthKm+149597870)/149597870,s=Wv(n,t.basePowerW),r=Vv(e.distanceFromEarthKm);this.modalEl.innerHTML=`
      <div class="probe-builder-modal">
        <div class="builder-header">
          <div class="builder-title-group">
            <span class="builder-icon">🛰️</span>
            <div>
              <h2>Orbital Probe Workshop</h2>
              <p class="builder-sub">Design & launch custom probes into planetary orbits</p>
            </div>
          </div>
          <button class="builder-close-btn" id="builder-close-x">✕</button>
        </div>

        <div class="builder-body">
          <div class="builder-column">
            <div class="builder-form-group">
              <label>Probe Designation Name</label>
              <input type="text" id="builder-name-input" class="builder-input" value="${this.probeName}" />
            </div>

            <div class="builder-form-group">
              <label>Chassis Archetype</label>
              <div class="chassis-grid">
                ${Object.values(ss).map(a=>`
                  <div class="chassis-card ${a.id===this.selectedChassis?"selected":""}" data-chassis="${a.id}">
                    <div class="chassis-icon">${a.icon}</div>
                    <div class="chassis-name">${a.name}</div>
                    <div class="chassis-meta">${a.massKg} kg · ${a.scienceSensor}</div>
                  </div>
                `).join("")}
              </div>
            </div>

            <div class="builder-form-group">
              <label>Parent Target Body</label>
              <select id="builder-parent-select" class="builder-select">
                ${en.filter(a=>["planet","moon","star"].includes(a.type)).map(a=>`
                  <option value="${a.id}" ${a.id===this.selectedParent?"selected":""}>
                    ${a.name} (${a.system||"Solar System"})
                  </option>
                `).join("")}
              </select>
            </div>
          </div>

          <div class="builder-column">
            <div class="builder-form-group">
              <label>Orbital Altitude: <span id="radius-val">${(this.orbitRadiusKm/1e3).toFixed(0)}k km</span></label>
              <input type="range" id="builder-radius-slider" min="3000" max="60000" step="1000" value="${this.orbitRadiusKm}" class="builder-range" />
            </div>

            <div class="builder-form-group">
              <label>Orbital Inclination: <span id="inc-val">${this.inclinationDeg}°</span></label>
              <input type="range" id="builder-inc-slider" min="0" max="90" step="1" value="${this.inclinationDeg}" class="builder-range" />
            </div>

            <div class="telemetry-preview-card">
              <div class="preview-title">Real-time Telemetry Estimate</div>
              <div class="preview-grid">
                <div class="preview-stat">
                  <span class="preview-label">Signal Delay (1-way)</span>
                  <span class="preview-value">${r.formatted}</span>
                </div>
                <div class="preview-stat">
                  <span class="preview-label">Solar Generation</span>
                  <span class="preview-value">${s.currentPowerW.toFixed(0)} W (${s.status})</span>
                </div>
                <div class="preview-stat">
                  <span class="preview-label">Dry Mass</span>
                  <span class="preview-value">${t.massKg} kg</span>
                </div>
                <div class="preview-stat">
                  <span class="preview-label">Primary Sensor</span>
                  <span class="preview-value sensor">${t.scienceSensor}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="builder-footer">
          <button class="builder-btn-cancel" id="builder-cancel-btn">Cancel</button>
          <button class="builder-btn-launch" id="builder-launch-btn">🚀 Deploy to Orbit</button>
        </div>
      </div>
    `,this.bindEvents()}bindEvents(){this.modalEl.querySelector("#builder-close-x")?.addEventListener("click",()=>this.close()),this.modalEl.querySelector("#builder-cancel-btn")?.addEventListener("click",()=>this.close()),this.modalEl.querySelectorAll(".chassis-card").forEach(r=>{r.addEventListener("click",()=>{this.selectedChassis=r.dataset.chassis,this.render()})}),this.modalEl.querySelector("#builder-name-input")?.addEventListener("input",r=>{this.probeName=r.target.value}),this.modalEl.querySelector("#builder-parent-select")?.addEventListener("change",r=>{this.selectedParent=r.target.value,this.render()}),this.modalEl.querySelector("#builder-radius-slider")?.addEventListener("input",r=>{this.orbitRadiusKm=Number(r.target.value);const a=this.modalEl.querySelector("#radius-val");a&&(a.textContent=`${(this.orbitRadiusKm/1e3).toFixed(0)}k km`)}),this.modalEl.querySelector("#builder-inc-slider")?.addEventListener("input",r=>{this.inclinationDeg=Number(r.target.value);const a=this.modalEl.querySelector("#inc-val");a&&(a.textContent=`${this.inclinationDeg}°`)}),this.modalEl.querySelector("#builder-launch-btn")?.addEventListener("click",()=>{this.launch()})}launch(){const e=ss[this.selectedChassis]||ss.CUBESAT,t=`custom-probe-${Date.now()}`,n=this.probeName.trim()||`Probe-${Math.floor(Math.random()*900+100)}`,s={id:t,name:n,chassis:this.selectedChassis,parentId:this.selectedParent,orbitRadiusKm:this.orbitRadiusKm,inclinationDeg:this.inclinationDeg,icon:e.icon,launchedAt:Date.now(),distanceFromEarthKm:15e4};this.store.dispatch(Ce.addCustomSatellite(s)),this.onShowToast?.(`🚀 Satellite "${n}" deployed into orbit!`),this.close()}close(){this.store.dispatch(Ce.toggleProbeBuilder(!1))}}const ir={mars:{name:"Mars: Jezero Crater Surface",skyColorTop:9061674,skyColorBottom:14255445,fogColor:11887931,groundColor:11026980,groundRoughness:.9,ambientLight:16752762,sunLight:16772304,dustColor:14253380,gravity:.38,soilElements:[{name:"Iron Oxide (Rust)",pct:"43.2%",color:"#d94b26"},{name:"Silicon Dioxide",pct:"38.5%",color:"#e8c39e"},{name:"Magnesium Perchlorate",pct:"8.4%",color:"#98d8aa"},{name:"Hydrated Clays",pct:"9.9%",color:"#5ea3d0"}]},moon:{name:"The Moon: Mare Tranquillitatis",skyColorTop:328968,skyColorBottom:657940,fogColor:526352,groundColor:7368824,groundRoughness:.95,ambientLight:6316144,sunLight:16777215,dustColor:11184810,gravity:.166,soilElements:[{name:"Anorthosite (Plagioclase)",pct:"52.0%",color:"#d6d6d6"},{name:"Basaltic Pyroxene",pct:"28.5%",color:"#666666"},{name:"Ilmenite (Titanium)",pct:"14.2%",color:"#8a9ba8"},{name:"Solar Wind Helium-3",pct:"5.3%",color:"#ffd27a"}]},europa:{name:"Europa: Chaos Conamara Ice Plains",skyColorTop:264212,skyColorBottom:1321028,fogColor:1057852,groundColor:14086399,groundRoughness:.25,ambientLight:7377072,sunLight:14216959,dustColor:11200767,gravity:.134,soilElements:[{name:"Pure Water Ice (H2O)",pct:"74.6%",color:"#62e8ff"},{name:"Magnesium Sulfate Salts",pct:"16.8%",color:"#ffffff"},{name:"Sulfuric Acid Hydrates",pct:"6.2%",color:"#ffd700"},{name:"Subsurface Organic Compounds",pct:"2.4%",color:"#58e890"}]},titan:{name:"Titan: Shangri-La Methane Dunes",skyColorTop:4860421,skyColorBottom:12086292,fogColor:10377230,groundColor:2825487,groundRoughness:.7,ambientLight:12877360,sunLight:14461024,dustColor:14714912,gravity:.14,soilElements:[{name:"Tholin Hydrocarbon Solids",pct:"58.4%",color:"#9e4812"},{name:"Solid Methane & Ethane Ice",pct:"26.3%",color:"#38a3a5"},{name:"Water Ice Bedrock",pct:"11.1%",color:"#80ced6"},{name:"Hydrogen Cyanide Polymers",pct:"4.2%",color:"#e29578"}]},enceladus:{name:"Enceladus: South Polar Tiger Stripe Geysers",skyColorTop:132367,skyColorBottom:990256,fogColor:726310,groundColor:15792895,groundRoughness:.15,ambientLight:9089232,sunLight:15595260,dustColor:14742783,gravity:.011,soilElements:[{name:"Cryovolcanic Water Ice",pct:"82.1%",color:"#b5f5ff"},{name:"Sodium Chloride (Sea Salt)",pct:"9.5%",color:"#f8f9fa"},{name:"Silica Nanoparticles (Hydrothermal)",pct:"6.2%",color:"#ffd166"},{name:"Complex Macromolecular Organics",pct:"2.2%",color:"#06d6a0"}]}};class Xv{constructor(e,t,n={}){this.root=e,this.store=t,this.onShowToast=n.onShowToast,this.scene=new Wc,this.camera=new Wt(65,window.innerWidth/window.innerHeight,.1,1e3),this.camera.position.set(0,1.6,0),this.active=!1,this.currentTargetId="mars",this.isDrilling=!1,this.pitch=0,this.yaw=0,this.initDOM(),this.initScene(),this.store.subscribe(s=>{s.active&&!this.active?this.enter(s.targetId||"mars"):!s.active&&this.active&&this.exit()},s=>s.landerState)}initDOM(){this.overlayEl=document.createElement("div"),this.overlayEl.className="surface-lander-overlay",this.overlayEl.hidden=!0,this.root.appendChild(this.overlayEl),this.overlayEl.innerHTML=`
      <div class="surface-hud-header">
        <div class="surface-title-badge">
          <span class="surface-icon">🪐</span>
          <div>
            <h2 id="surface-planet-title">Surface Exploration Probe</h2>
            <div class="surface-coords">LAT: 18.38° N · LON: 77.58° E · ALT: 0.0 m</div>
          </div>
        </div>
        <button class="surface-ascend-btn" id="surface-ascend-btn">🚀 Ascend to Orbit</button>
      </div>

      <div class="surface-science-panel" id="surface-science-panel">
        <div class="science-panel-title">🔬 Surface Soil & Spectrometry Kit</div>
        <div class="science-status" id="science-status">Ready to extract core sample.</div>
        <button class="science-drill-btn" id="science-drill-btn">⚡ Deploy Core Drill</button>
        <div class="soil-breakdown-list" id="soil-breakdown-list" hidden></div>
      </div>
    `,this.overlayEl.querySelector("#surface-ascend-btn")?.addEventListener("click",()=>{this.store.dispatch(Ce.closeLander())}),this.overlayEl.querySelector("#science-drill-btn")?.addEventListener("click",()=>{this.runSoilAnalysis()}),window.addEventListener("mousemove",e=>{this.active&&(e.buttons===1||e.buttons===2)&&(this.yaw-=e.movementX*.0025,this.pitch-=e.movementY*.0025,this.pitch=Math.max(-Math.PI/2.2,Math.min(Math.PI/2.2,this.pitch)))})}initScene(){const e=new si(120,120,64,64);e.rotateX(-Math.PI/2);const t=e.attributes.position;for(let u=0;u<t.count;u++){const h=t.getX(u),d=t.getZ(u),p=Math.sin(h*.15)*Math.cos(d*.15)*.45+Math.sin(h*.05+d*.05)*.8;t.setY(u,p)}e.computeVertexNormals(),this.groundMat=new Je({color:11026980,roughness:.9}),this.groundMesh=new $(e,this.groundMat),this.scene.add(this.groundMesh);const n=new Ze(200,32,16);this.skyMat=new Be({color:9061674,side:Dt}),this.skyMesh=new $(n,this.skyMat),this.scene.add(this.skyMesh),this.ambientLight=new eu(16752762,.8),this.sunLight=new cg(16772304,1.5),this.sunLight.position.set(30,45,20),this.scene.add(this.ambientLight,this.sunLight);const s=new je,r=new Je({color:13935449,metalness:.8,roughness:.2}),a=new $(new yt(.04,.04,1.2),r);a.position.set(-.6,-.4,-.7),a.rotation.set(.3,0,-.4);const o=a.clone();o.position.x=.6,o.rotation.z=.4;const l=new Je({color:16117995,roughness:.4}),c=new $(new Ze(.2,16,8,0,Math.PI*2,0,Math.PI/2),l);c.position.set(.5,.2,-.9),c.rotation.x=-.5,s.add(a,o,c),this.scene.add(s)}enter(e){this.active=!0,this.currentTargetId=e,this.overlayEl.hidden=!1;const t=ir[e]||ir.mars,n=this.overlayEl.querySelector("#surface-planet-title");n&&(n.textContent=t.name),this.groundMat.color.setHex(t.groundColor),this.groundMat.roughness=t.groundRoughness,this.skyMat.color.setHex(t.skyColorTop),this.ambientLight.color.setHex(t.ambientLight),this.sunLight.color.setHex(t.sunLight),this.scene.fog=new Ja(t.fogColor,.015);const s=this.overlayEl.querySelector("#soil-breakdown-list");s&&(s.hidden=!0);const r=this.overlayEl.querySelector("#science-status");r&&(r.textContent="Ready to extract core sample.")}exit(){this.active=!1,this.overlayEl.hidden=!0}runSoilAnalysis(){if(this.isDrilling)return;this.isDrilling=!0;const e=this.overlayEl.querySelector("#science-status"),t=this.overlayEl.querySelector("#soil-breakdown-list"),n=this.overlayEl.querySelector("#science-drill-btn");n&&(n.textContent="⚙️ Drilling Core..."),e&&(e.textContent="Drilling surface core (depth: 25 cm)..."),setTimeout(()=>{this.isDrilling=!1,n&&(n.textContent="⚡ Re-analyze Sample"),e&&(e.textContent="✅ Spectroscopy analysis completed:");const s=ir[this.currentTargetId]||ir.mars;t&&(t.hidden=!1,t.innerHTML=s.soilElements.map(r=>`
          <div class="soil-element-row">
            <span class="soil-dot" style="background: ${r.color}"></span>
            <span class="soil-name">${r.name}</span>
            <span class="soil-pct">${r.pct}</span>
          </div>
        `).join("")),this.onShowToast?.(`🔬 Soil sample analyzed for ${s.name}`)},1200)}update(e,t){if(!this.active)return;const n=new ys(this.pitch,this.yaw,0,"YXZ");this.camera.quaternion.setFromEuler(n),t.render(this.scene,this.camera)}}const Kv=[{id:"perseids",name:"Perseid Meteor Stream",color:6482175,particleCount:250,radius:12,thickness:1.8,center:{x:0,y:.5,z:2}},{id:"geminids",name:"Geminid Asteroidal Debris Belt",color:16765562,particleCount:200,radius:18,thickness:2.2,center:{x:5,y:-.8,z:-4}},{id:"halley-tail",name:"Halley Comet Ionized Tail",color:11073023,particleCount:300,radius:25,thickness:1.5,center:{x:-8,y:1.2,z:8}}],uc=[{id:"supernova-andromeda",title:"✨ Supernova Optical Flare Detected",type:"SUPERNOVA",source:"Andromeda Galaxy (M31)",description:"Type Ia Supernova detected in outer spiral arm. Massive optical and neutrino brightening."},{id:"solar-cme-storm",title:"⚠️ Solar Coronal Mass Ejection Warning",type:"SOLAR_CME",source:"Sol Active Region 3842",description:"X9.2-class solar flare shockwave inbound. Extreme magnetic ionization on ship HUD."}];class Yv{constructor(e,t,n={}){this.scene=e,this.store=t,this.onShowToast=n.onShowToast,this.streamGroups=new Map,this.insideStreams=new Set,this.initStreams()}initStreams(){for(const e of Kv){const t=new it,n=new Float32Array(e.particleCount*3),s=new Float32Array(e.particleCount*3);for(let o=0;o<e.particleCount;o++){const l=Math.random()*Math.PI*2,c=e.radius+(Math.random()-.5)*e.thickness,u=e.center.x+c*Math.cos(l),h=e.center.y+(Math.random()-.5)*e.thickness,d=e.center.z+c*Math.sin(l);n[o*3]=u,n[o*3+1]=h,n[o*3+2]=d,s[o*3]=(Math.random()-.5)*.1,s[o*3+1]=(Math.random()-.5)*.1,s[o*3+2]=(Math.random()-.5)*.1}t.setAttribute("position",new _t(n,3)),t.setAttribute("velocity",new _t(s,3));const r=new ci({color:e.color,size:.12,transparent:!0,opacity:.75,blending:ot}),a=new ui(t,r);a.name=`stream:${e.id}`,this.scene.add(a),this.streamGroups.set(e.id,{points:a,stream:e})}}update(e,t){for(const[n,{points:s,stream:r}]of this.streamGroups){s.rotation.y+=e*.04;const a=t.x-r.center.x,o=t.z-r.center.z,l=Math.sqrt(a*a+o*o),c=Math.abs(l-r.radius),u=Math.abs(t.y-r.center.y),h=c<r.thickness&&u<r.thickness;h&&!this.insideStreams.has(n)?(this.insideStreams.add(n),this.onShowToast?.(`☄️ Entering ${r.name}! Cosmic particle stream detected.`)):!h&&this.insideStreams.has(n)&&this.insideStreams.delete(n)}}triggerRandomEvent(){const e=uc[Math.floor(Math.random()*uc.length)];this.store.dispatch(Ce.triggerCosmicEvent(e)),this.onShowToast?.(`${e.title}: ${e.description}`)}}function $v({store:i,viewSwitcher:e,audio:t,onEngageWarp:n}){const s=document.querySelectorAll(".hud-layer"),r=c=>{s.forEach(u=>u.classList.toggle("hud-hidden",!c))},a=i.subscribe(c=>r(c),c=>c.ui.hudVisible);r(i.getState().ui.hudVisible);const o=i.subscribe(c=>t.setMuted(c),c=>c.ui.audioMuted),l=c=>{const u=c.target instanceof HTMLInputElement||c.target instanceof HTMLTextAreaElement;c.code==="KeyC"&&!u?e.cycle():c.code==="KeyM"&&!u?i.dispatch(Ce.toggleAudioMuted()):c.code==="KeyH"&&!u?i.dispatch(Ce.toggleHud()):c.code==="Escape"?(i.dispatch(Ce.toggleDetailPanel(!1)),i.dispatch(Ce.toggleHabitability(!1)),i.dispatch(Ce.toggleSatelliteList(!1))):c.code==="Space"&&!u&&(c.preventDefault(),n?.())};return window.addEventListener("keydown",l),()=>{window.removeEventListener("keydown",l),a(),o()}}const hc=[{id:"wow-signal",frequencyMhz:1420.405,name:"1977 Big Ear 'Wow!' Signal",origin:"Constellation Sagittarius (Chi-1 Sagittarii)",bandwidthKhz:10,snrDb:32,code:"6EQUJ5",description:"An authentic, unexplained 72-second narrowband hydrogen line transmission recorded on August 15, 1977.",soundType:"WOW_TONE"},{id:"frb-repeater",frequencyMhz:1420.25,name:"Fast Radio Burst FRB 121102",origin:"Dwarf Galaxy (3 Billion Light-Years)",bandwidthKhz:80,snrDb:24,code:"CHIRP-EXTRAGALACTIC",description:"Ultra-energetic millisecond radio dispersion sweeping downward across frequency channels.",soundType:"CHIRP"},{id:"vela-pulsar",frequencyMhz:1420.7,name:"Vela Pulsar (PSR B0833-45)",origin:"Vela Supernova Remnant",bandwidthKhz:40,snrDb:28,code:"11.2 Hz PULSE TRAIN",description:"Spinning neutron star beam sweeping across Earth 11.2 times every second.",soundType:"PULSAR"},{id:"seti-beacon",frequencyMhz:1420.82,name:"Extraterrestrial Harmonic Beacon",origin:"TRAPPIST-1 System Sector",bandwidthKhz:5,snrDb:38,code:"PRIME HARMONIC [2-3-5-7-11]",description:"Coherent artificial harmonic carrier wave pulsing at prime intervals.",soundType:"BEACON"}];class ar{constructor(e){this._ctx=e||null,this.frequencyMhz=1420.405,this.bandwidthMhz=1,this.isListening=!1,this.volume=.5,this._osc=null,this._gain=null}setContext(e){this._ctx=e}tick(e){}setFrequency(e){this.frequencyMhz=Math.min(Math.max(Number(e)||1420,1420),1421),this._updateDemodulator()}detectSignal(){for(const e of hc)if(Math.abs(this.frequencyMhz-e.frequencyMhz)<=.015)return e;return null}generateSpectrogramRow(){const t=new Float32Array(128);for(let n=0;n<128;n++)t[n]=Math.random()*.15;for(const n of hc){const s=(n.frequencyMhz-1420)/1,r=Math.floor(s*128);r>=0&&r<128&&(t[r]=Math.min(1,t[r]+n.snrDb/40*(.8+Math.random()*.2)),r>0&&(t[r-1]+=.35),r<127&&(t[r+1]+=.35))}return t}toggleListen(){return this.isListening=!this.isListening,this.isListening?this._startAudio():this._stopAudio(),this.isListening}_startAudio(){if(this._ctx)try{this._ctx.state==="suspended"&&this._ctx.resume(),this._gain=this._ctx.createGain(),this._gain.gain.setValueAtTime(this.volume*.15,this._ctx.currentTime),this._gain.connect(this._ctx.destination),this._osc=this._ctx.createOscillator(),this._osc.type="sine",this._osc.frequency.setValueAtTime(440,this._ctx.currentTime),this._osc.connect(this._gain),this._osc.start(),this._updateDemodulator()}catch{}}_updateDemodulator(){if(!this._osc||!this._ctx)return;const e=this.detectSignal();e?(e.soundType==="WOW_TONE"?this._osc.frequency.setValueAtTime(750,this._ctx.currentTime):e.soundType==="CHIRP"?this._osc.frequency.setValueAtTime(1200,this._ctx.currentTime):e.soundType==="PULSAR"?this._osc.frequency.setValueAtTime(220,this._ctx.currentTime):this._osc.frequency.setValueAtTime(880,this._ctx.currentTime),this._gain.gain.setValueAtTime(this.volume*.25,this._ctx.currentTime)):(this._osc.frequency.setValueAtTime(120,this._ctx.currentTime),this._gain.gain.setValueAtTime(this.volume*.04,this._ctx.currentTime))}_stopAudio(){if(this._osc){try{this._osc.stop(),this._osc.disconnect()}catch{}this._osc=null}if(this._gain){try{this._gain.disconnect()}catch{}this._gain=null}}}class jv{constructor(e,t,n={}){e instanceof HTMLElement?(this.root=e,this.store=t,this.scanner=n.setiScanner||new ar,this.onShowToast=n.onShowToast):(this.root=document.body,this.store=e,t instanceof ar?(this.scanner=t,this.onShowToast=n.onShowToast):(this.scanner=n.setiScanner||t?.setiScanner||new ar,this.onShowToast=n.onShowToast||t?.onShowToast)),this.isOpen=!1,this.animFrameId=null,this.initDOM(),this.store.subscribe(s=>this.toggle(s),s=>s.ui.isSetiOpen)}initDOM(){this.modalEl=document.createElement("div"),this.modalEl.className="seti-modal-backdrop",this.modalEl.hidden=!0,this.root.appendChild(this.modalEl),this.modalEl.innerHTML=`
      <div class="seti-modal">
        <div class="seti-header">
          <div class="seti-title-group">
            <span class="seti-icon">📡</span>
            <div>
              <h2>Deep Space SETI Radio Receiver</h2>
              <p class="seti-sub">1420 MHz Hydrogen "Water Hole" Spectrogram Waterfall</p>
            </div>
          </div>
          <button class="seti-close-btn" id="seti-close-x">✕</button>
        </div>

        <div class="seti-body">
          <div class="waterfall-container">
            <canvas id="seti-waterfall-canvas" width="480" height="240"></canvas>
            <div class="waterfall-freq-markers">
              <span>1420.0 MHz</span>
              <span>1420.5 MHz</span>
              <span>1421.0 MHz</span>
            </div>
          </div>

          <div class="seti-controls-card">
            <div class="tuning-dial-group">
              <label>Tuner Frequency: <span id="seti-freq-val">1420.405 MHz</span></label>
              <input type="range" id="seti-freq-slider" min="1420.0" max="1421.0" step="0.005" value="1420.405" class="builder-range" />
            </div>

            <div class="signal-decoder-card" id="signal-decoder-card">
              <div class="signal-name" id="signal-name">Scanning 1420 MHz Spectrum...</div>
              <div class="signal-details" id="signal-details">Adjust the frequency tuner to match intercepted carrier peaks.</div>
              <div class="signal-snr-bar" id="signal-snr-bar" hidden>
                <span>Signal Strength:</span>
                <div class="snr-fill-track"><div class="snr-fill" id="snr-fill" style="width: 0%"></div></div>
              </div>
            </div>

            <div class="seti-actions">
              <button class="seti-audio-btn" id="seti-audio-btn">🔊 Demodulate Audio</button>
            </div>
          </div>
        </div>
      </div>
    `,this.canvas=this.modalEl.querySelector("#seti-waterfall-canvas"),this.ctx=this.canvas?.getContext("2d"),this.bindEvents()}bindEvents(){this.modalEl.querySelector("#seti-close-x")?.addEventListener("click",()=>this.close()),this.modalEl.querySelector("#seti-freq-slider")?.addEventListener("input",n=>{const s=Number(n.target.value);this.scanner.setFrequency(s);const r=this.modalEl.querySelector("#seti-freq-val");r&&(r.textContent=`${s.toFixed(3)} MHz`),this.updateSignalDecoder()});const t=this.modalEl.querySelector("#seti-audio-btn");t?.addEventListener("click",()=>{const n=this.scanner.toggleListen();t.classList.toggle("active",n),t.textContent=n?"🔇 Mute Audio":"🔊 Demodulate Audio"})}toggle(e){this.isOpen=e,this.modalEl.hidden=!e,e?(this.updateSignalDecoder(),this.startWaterfallLoop()):(this.stopWaterfallLoop(),this.scanner.isListening&&this.scanner.toggleListen())}close(){this.store.dispatch(Ce.toggleSetiScanner(!1))}updateSignalDecoder(){const e=this.scanner.detectSignal(),t=this.modalEl.querySelector("#signal-name"),n=this.modalEl.querySelector("#signal-details"),s=this.modalEl.querySelector("#signal-snr-bar"),r=this.modalEl.querySelector("#snr-fill");e?(t&&(t.textContent=`🎯 ${e.name} [${e.code}]`),n&&(n.textContent=`${e.description} · Origin: ${e.origin}`),s&&(s.hidden=!1),r&&(r.style.width=`${Math.min(e.snrDb*2.5,100)}%`),this.store.dispatch(Ce.interceptSetiSignal(e))):(t&&(t.textContent="Scanning Background Cosmos..."),n&&(n.textContent="Background hydrogen emissions nominal. No coherent carrier detected at current frequency."),s&&(s.hidden=!0))}startWaterfallLoop(){if(!this.ctx||!this.canvas)return;const e=()=>{if(!this.isOpen)return;const t=this.ctx.getImageData(0,0,this.canvas.width,this.canvas.height-2);this.ctx.putImageData(t,0,2);const n=this.scanner.generateSpectrogramRow(),s=this.canvas.width/n.length;for(let r=0;r<n.length;r++){const a=n[r];a>.6?this.ctx.fillStyle=`rgb(${Math.round(a*255)}, 220, 120)`:a>.3?this.ctx.fillStyle=`rgb(98, ${Math.round(a*240)}, 255)`:this.ctx.fillStyle=`rgb(${Math.round(a*40)}, ${Math.round(a*60)}, ${Math.round(a*120)})`,this.ctx.fillRect(r*s,0,s+1,2)}this.animFrameId=requestAnimationFrame(e)};this.animFrameId=requestAnimationFrame(e)}stopWaterfallLoop(){this.animFrameId&&(cancelAnimationFrame(this.animFrameId),this.animFrameId=null)}}const Zv={mars:"Captain, Mars hosts Olympus Mons — a volcano three times the height of Mount Everest!",jupiter:"Approaching the king of planets. Jupiter's magnetic field is fourteen times stronger than Earth's.",saturn:"Saturn's rings span 280,000 kilometers across, yet they are only about 10 meters thick!",europa:"Europa's hidden saltwater ocean may contain more water than all of Earth's oceans combined.",titan:"Titan is the only moon in the solar system with a dense atmosphere and liquid methane lakes.","sagittarius-a-star":"Singularity warning! 4 million solar masses concentrated beyond the event horizon.",sun:"Solar corona proximity detected. Surface temperature exceeds 5,500 degrees Celsius.",moon:"Entering lunar orbit. Mare Tranquillitatis beneath our forward flight path."};class Jv{constructor(e,t={}){this.store=e,this.onShowToast=t.onShowToast,this.group=new je,this.group.name="holo-companion",this.enabled=!0,this.isSpeaking=!1,this.initMesh(),this.store.subscribe(n=>{n&&this.enabled&&this.announceBody(n)},n=>n.targetObject)}initMesh(){const e=new Be({color:6482175,wireframe:!0});this.core=new $(new xs(.018,1),e);const t=new Be({color:16765562,wireframe:!0});this.outerRing=new $(new An(.026,.002,8,24),t),this.innerRing=new $(new An(.022,.002,8,24),t),this.haloGlow=new kn(6482175,.6,.3),this.group.add(this.core,this.outerRing,this.innerRing,this.haloGlow),this.group.position.set(.18,.04,-.06)}announceBody(e){let n=Zv[e];if(!n){const s=Qn(e);s&&(n=`Target locked: ${s.name} (${s.type||"Celestial Body"}). Distance: ${(s.distanceFromEarthKm/1e6).toFixed(1)}M km.`)}n&&this.speak(n,"curious")}warnReentry(){this.speak("Thermal warning! Re-entry plasma ionization detected on forward canopy.","alert")}warnHighG(){this.speak("High-G turn! Inertial dampening engaged.","warning")}speak(e,t="neutral"){if(this.store.dispatch(Ce.triggerAiSpeech(e,t)),this.onShowToast?.(`🤖 Different: "${e}"`),typeof window<"u"&&window.speechSynthesis){window.speechSynthesis.cancel();const n=new window.SpeechSynthesisUtterance(e);n.pitch=1.35,n.rate=1.05,n.volume=.65,n.onstart=()=>{this.isSpeaking=!0,this.store.dispatch(Ce.setAiSpeaking(!0))},n.onend=()=>{this.isSpeaking=!1,this.store.dispatch(Ce.setAiSpeaking(!1))},window.speechSynthesis.speak(n)}}speakOnTarget(e){this.announceBody(e)}tick(e,t=0){this.update(e,t||Date.now()*.001)}update(e,t){if(this.group&&(this.group.position.y=.04+Math.sin(t*3)*.006,this.outerRing&&(this.outerRing.rotation.x=t*1.5,this.outerRing.rotation.y=t*1.2),this.innerRing&&(this.innerRing.rotation.y=-t*2,this.innerRing.rotation.z=t*1.4),this.core)){this.core.rotation.y=t*2.5;const n=1+Math.sin(t*6)*.15;this.core.scale.setScalar(n)}}}const ya={IONIZED_THERMAL_SHIELDS:{id:"IONIZED_THERMAL_SHIELDS",name:"Ionized Thermal Shields",cost:150,category:"Defense",icon:"🛡️",description:"Reduces re-entry heating and atmospheric drag friction by 50% for deep atmospheric skimming.",effects:{heatReduction:.5,dragTolerance:1.5}},QUANTUM_BIOSIGNATURE_SENSOR:{id:"QUANTUM_BIOSIGNATURE_SENSOR",name:"Quantum Biosignature Sensor",cost:200,category:"Sensors",icon:"🔬",description:"Demodulates spectral absorption lines to highlight methane, oxygen, and organic biosignatures.",effects:{biosignatureRange:25e3,spectralDetail:2}},PHOTONIC_DRIFT_THRUSTERS:{id:"PHOTONIC_DRIFT_THRUSTERS",name:"Photonic Drift Thrusters",cost:250,category:"Propulsion",icon:"⚡",description:"Boosts sublight engine cruise velocity by 50% and improves angular maneuverability.",effects:{speedMultiplier:1.5,maneuverabilityMultiplier:1.25}},GRAVITON_STABILIZER:{id:"GRAVITON_STABILIZER",name:"Graviton Hull Stabilizer",cost:300,category:"Hull",icon:"🌀",description:"Nullifies extreme tidal shear forces when traversing Einstein-Rosen bridges and black hole event horizons.",effects:{tidalResistance:1,wormholeStability:1}}};class fu{static getCatalog(){return Object.values(ya)}static getUpgrade(e){return ya[e]||null}static canUnlock(e,t,n=[]){const s=this.getUpgrade(e);return!s||n.includes(e)?!1:t>=s.cost}static computeActiveModifiers(e=[]){const t={heatReduction:1,speedMultiplier:1,maneuverabilityMultiplier:1,biosignatureEnabled:!1,gravitonShielded:!1};return e.forEach(n=>{const s=ya[n];s&&(s.effects.heatReduction&&(t.heatReduction*=s.effects.heatReduction),s.effects.speedMultiplier&&(t.speedMultiplier*=s.effects.speedMultiplier),s.effects.maneuverabilityMultiplier&&(t.maneuverabilityMultiplier*=s.effects.maneuverabilityMultiplier),s.id==="QUANTUM_BIOSIGNATURE_SENSOR"&&(t.biosignatureEnabled=!0),s.id==="GRAVITON_STABILIZER"&&(t.gravitonShielded=!0))}),t}}class Qv{constructor(e){this.store=e,this.container=null,this.isOpen=!1,this.init(),this.store.subscribe(t=>this.render(t))}init(){this.container=document.createElement("div"),this.container.id="engineering-modal",this.container.className="engineering-modal-backdrop hidden",document.body.appendChild(this.container),this.container.addEventListener("click",e=>{e.target===this.container&&this.store.dispatch({type:Ua})})}render(e){if(this.isOpen!==e.isEngineeringBayOpen)if(this.isOpen=e.isEngineeringBayOpen,this.isOpen)this.container.classList.remove("hidden");else{this.container.classList.add("hidden");return}if(!this.isOpen)return;const t=fu.getCatalog(),n=e.discoveryPoints||0,s=e.installedUpgrades||[];let r="";t.forEach(l=>{const c=s.includes(l.id),u=n>=l.cost&&!c;let h;c?h='<span class="eng-badge installed">INSTALLED & ACTIVE</span>':u?h=`<button class="eng-btn unlock" data-upgrade-id="${l.id}">INSTALL (${l.cost} DP)</button>`:h=`<button class="eng-btn locked" disabled>REQUIRES ${l.cost} DP</button>`,r+=`
        <div class="eng-card ${c?"card-installed":""}">
          <div class="eng-card-header">
            <span class="eng-icon">${l.icon}</span>
            <div class="eng-title-group">
              <span class="eng-category">${l.category.toUpperCase()}</span>
              <h3 class="eng-name">${l.name}</h3>
            </div>
          </div>
          <p class="eng-desc">${l.description}</p>
          <div class="eng-card-footer">
            <span class="eng-cost">Cost: <strong>${l.cost} DP</strong></span>
            ${h}
          </div>
        </div>
      `}),this.container.innerHTML=`
      <div class="engineering-panel glassmorphism">
        <div class="eng-header">
          <div class="eng-header-left">
            <span class="eng-header-icon">🛠️</span>
            <div>
              <h2 class="eng-main-title">SPACESHIP ENGINEERING BAY</h2>
              <p class="eng-subtitle">Modular Avionics & Hull Subsystem Upgrades</p>
            </div>
          </div>
          <div class="eng-header-right">
            <div class="eng-points-pill">
              <span class="eng-pts-label">DISCOVERY BALANCE:</span>
              <span class="eng-pts-value">${n} DP</span>
            </div>
            <button class="eng-close-btn" id="eng-close-btn">✕</button>
          </div>
        </div>

        <div class="eng-grid">
          ${r}
        </div>
      </div>
    `;const a=this.container.querySelector("#eng-close-btn");a&&a.addEventListener("click",()=>{this.store.dispatch({type:Ua})}),this.container.querySelectorAll("button[data-upgrade-id]").forEach(l=>{l.addEventListener("click",()=>{const c=l.getAttribute("data-upgrade-id");this.store.dispatch({type:Eg,payload:c})})})}}class ey{constructor(e,t){this.scene=e,this.store=t,this.wormholes=[],this.warpParticles=null,this.isWarping=!1}createWormhole({name:e="Einstein-Rosen Bridge Alpha",position:t=new C(5e4,0,-5e4),destinationName:n="Andromeda Galaxy M31",destinationCoords:s=new C(-8e4,15e3,9e4),eventRadius:r=450}={}){const a=new je;a.position.copy(t);const o=new Ze(r,48,48),l=new Be({color:0}),c=new $(o,l);a.add(c);const u=new kt(r*.95,r*1.5,64),h=new Be({color:62463,side:St,transparent:!0,opacity:.85,blending:ot}),d=new $(u,h);a.add(d);const p=new kt(r*1.2,r*3.2,64),g=new Be({color:12386559,side:St,transparent:!0,opacity:.65,blending:ot}),_=new $(p,g);_.rotation.x=Math.PI/3,a.add(_);const m=400,f=new it,y=new Float32Array(m*3),v=new Float32Array(m*3);for(let w=0;w<m;w++){const O=r+Math.random()*r*2.5,M=Math.random()*Math.PI*2,E=(Math.random()-.5)*(r*.5);y[w*3]=Math.cos(M)*O,y[w*3+1]=E,y[w*3+2]=Math.sin(M)*O,v[w*3]=.2+Math.random()*.8,v[w*3+1]=.8+Math.random()*.2,v[w*3+2]=1}f.setAttribute("position",new _t(y,3)),f.setAttribute("color",new _t(v,3));const S=new ci({size:18,vertexColors:!0,transparent:!0,opacity:.9,blending:ot}),R=new ui(f,S);a.add(R),this.scene.add(a);const A={name:e,group:a,halo:d,disk:_,particles:R,position:t,destinationName:n,destinationCoords:s,eventRadius:r};return this.wormholes.push(A),A}checkProximity(e,t=900){for(const n of this.wormholes){const s=e.distanceTo(n.position);if(s<=t)return{inRange:!0,distance:s,wormhole:n}}return{inRange:!1,distance:1/0,wormhole:null}}tick(e){this.wormholes.forEach(t=>{t.disk.rotation.z+=e*.6,t.halo.rotation.z-=e*.4,t.particles.rotation.y+=e*.8;const n=1+Math.sin(Date.now()*.004)*.04;t.halo.scale.set(n,n,n)})}destroy(){this.wormholes.forEach(e=>{this.scene.remove(e.group)}),this.wormholes=[]}}const gr={YELLOW_DWARF:{type:"YELLOW_DWARF",name:"G-Type Yellow Dwarf (Sol Analog)",mass:1,luminosity:1,color:16770688,radius:120,temperature:"5,778 K"},RED_GIANT:{type:"RED_GIANT",name:"M-Type Red Giant (Betelgeuse Class)",mass:3.5,luminosity:120,color:16729344,radius:280,temperature:"3,400 K"},BLUE_SUPERGIANT:{type:"BLUE_SUPERGIANT",name:"O-Type Blue Supergiant (Rigel Class)",mass:18,luminosity:2500,color:8965375,radius:400,temperature:"25,000 K"},BINARY_STAR:{type:"BINARY_STAR",name:"Twin Binary System (Alpha Centauri Analog)",mass:2.1,luminosity:2.4,color:16755268,radius:160,temperature:"5,800 K / 4,400 K"}},Wa={TERRESTRIAL:{type:"TERRESTRIAL",name:"Terran Rocky World",radius:22,color:2792847,hasAtmosphere:!0,hasRings:!1},LAVA_WORLD:{type:"LAVA_WORLD",name:"Molten Core Planet",radius:18,color:15167313,hasAtmosphere:!1,hasRings:!1},GAS_GIANT:{type:"GAS_GIANT",name:"Jovian Gas Giant",radius:65,color:15320170,hasAtmosphere:!0,hasRings:!0},ICE_GIANT:{type:"ICE_GIANT",name:"Neptunian Ice Giant",radius:45,color:4770532,hasAtmosphere:!0,hasRings:!1}};class ty{constructor(e,t){this.scene=e,this.store=t,this.group=new je,this.group.name="star_system_genesis",this.scene.add(this.group),this.currentStar=null,this.starMesh=null,this.starLight=null,this.habitableRings=null,this.planets=[]}calculateHabitableZone(e=1){const n=Math.sqrt(e/1.1),s=Math.sqrt(e/.53);return{innerAU:n,outerAU:s,innerRadius:n*2500,outerRadius:s*2500}}spawnStar(e="YELLOW_DWARF",t=new C(0,0,0)){this.clearSystem();const n=gr[e]||gr.YELLOW_DWARF;this.currentStar=n,this.group.position.copy(t);const s=new Ze(n.radius,32,32),r=new Be({color:n.color});this.starMesh=new $(s,r),this.group.add(this.starMesh),this.starLight=new kn(n.color,2.5,1e5),this.group.add(this.starLight);const a=new Ze(n.radius*1.3,32,32),o=new Be({color:n.color,transparent:!0,opacity:.35,blending:ot}),l=new $(a,o);this.group.add(l);const c=this.calculateHabitableZone(n.luminosity),u=new kt(c.innerRadius,c.outerRadius,64),h=new Be({color:65416,side:St,transparent:!0,opacity:.18,blending:ot});return this.habitableRings=new $(u,h),this.habitableRings.rotation.x=Math.PI/2,this.group.add(this.habitableRings),{star:n,habitableZone:c}}addPlanet({typeKey:e="TERRESTRIAL",name:t="Proxima b",distance:n=2500,_eccentricity:s=0,speed:r=.2}={}){this.currentStar||this.spawnStar("YELLOW_DWARF");const a=Wa[e]||Wa.TERRESTRIAL,o=new je,l=new Ze(a.radius,32,32),c=new Je({color:a.color,roughness:.7,metalness:.1}),u=new $(l,c);if(o.add(u),a.hasRings){const f=new kt(a.radius*1.4,a.radius*2.3,32),y=new Be({color:a.color,side:St,transparent:!0,opacity:.6}),v=new $(f,y);v.rotation.x=Math.PI/2.5,o.add(v)}const h=new it,d=[],p=64;for(let f=0;f<=p;f++){const y=f/p*Math.PI*2;d.push(Math.cos(y)*n,0,Math.sin(y)*n)}h.setAttribute("position",new Ye(d,3));const g=new Sr({color:4478310,transparent:!0,opacity:.4}),_=new Qa(h,g);this.group.add(_),this.group.add(o);const m={name:t,type:a.type,distance:n,speed:r,angle:Math.random()*Math.PI*2,group:o,mesh:u,orbitLine:_};return this.planets.push(m),m}tick(e){this.planets.forEach(t=>{t.angle+=e*t.speed*.5,t.group.position.set(Math.cos(t.angle)*t.distance,0,Math.sin(t.angle)*t.distance),t.mesh.rotation.y+=e*1}),this.starMesh&&(this.starMesh.rotation.y+=e*.2)}clearSystem(){for(;this.group.children.length>0;){const e=this.group.children[0];this.group.remove(e),e.geometry&&e.geometry.dispose(),e.material&&(Array.isArray(e.material)?e.material.forEach(t=>t.dispose()):e.material.dispose())}this.planets=[],this.currentStar=null,this.starMesh=null,this.starLight=null,this.habitableRings=null}}class ny{constructor(e,t){this.store=e,this.genesis=t,this.container=null,this.isOpen=!1,this.selectedStarKey="YELLOW_DWARF",this.selectedPlanetKey="TERRESTRIAL",this.selectedDistance=2500,this.init(),this.store.subscribe(n=>this.render(n))}init(){this.container=document.createElement("div"),this.container.id="sandbox-genesis-modal",this.container.className="sandbox-modal-backdrop hidden",document.body.appendChild(this.container),this.container.addEventListener("click",e=>{e.target===this.container&&this.store.dispatch({type:Fa})})}render(e){if(this.isOpen!==e.isSandboxModeOpen)if(this.isOpen=e.isSandboxModeOpen,this.isOpen)this.container.classList.remove("hidden");else{this.container.classList.add("hidden");return}if(!this.isOpen)return;const t=gr[this.selectedStarKey],n=this.genesis.calculateHabitableZone(t.luminosity);let s="";Object.entries(gr).forEach(([_,m])=>{const f=_===this.selectedStarKey;s+=`<option value="${_}" ${f?"selected":""}>${m.name}</option>`});let r="";Object.entries(Wa).forEach(([_,m])=>{const f=_===this.selectedPlanetKey;r+=`<option value="${_}" ${f?"selected":""}>${m.name}</option>`});const a=this.genesis.planets.length;this.container.innerHTML=`
      <div class="sandbox-panel glassmorphism">
        <div class="sandbox-header">
          <div class="sandbox-header-left">
            <span class="sandbox-icon">🌟</span>
            <div>
              <h2 class="sandbox-main-title">STAR SYSTEM GENESIS</h2>
              <p class="sandbox-subtitle">Procedural Planetary Sandbox & Habitable Zone Simulator</p>
            </div>
          </div>
          <button class="sandbox-close-btn" id="sandbox-close-btn">✕</button>
        </div>

        <div class="sandbox-body">
          <!-- Star Forge Section -->
          <div class="sandbox-section">
            <h3 class="sandbox-section-title">1. STELLAR CORE FORGE</h3>
            <div class="sandbox-control-row">
              <label class="sandbox-label">Select Spectral Class:</label>
              <select class="sandbox-select" id="star-select">
                ${s}
              </select>
            </div>

            <div class="sandbox-metrics-grid">
              <div class="sandbox-metric">
                <span class="m-label">Mass:</span>
                <span class="m-val">${t.mass} M☉</span>
              </div>
              <div class="sandbox-metric">
                <span class="m-label">Luminosity:</span>
                <span class="m-val">${t.luminosity} L☉</span>
              </div>
              <div class="sandbox-metric">
                <span class="m-label">Surface Temp:</span>
                <span class="m-val">${t.temperature}</span>
              </div>
              <div class="sandbox-metric highlight-green">
                <span class="m-label">Goldilocks Zone:</span>
                <span class="m-val">${n.innerAU.toFixed(2)} - ${n.outerAU.toFixed(2)} AU</span>
              </div>
            </div>

            <button class="sandbox-btn primary" id="spawn-star-btn">☀️ IGNITE STAR</button>
          </div>

          <!-- Planetary Accretion Section -->
          <div class="sandbox-section">
            <h3 class="sandbox-section-title">2. PLANETARY ACCRETION DISK</h3>
            <div class="sandbox-control-row">
              <label class="sandbox-label">Planet Composition:</label>
              <select class="sandbox-select" id="planet-select">
                ${r}
              </select>
            </div>

            <div class="sandbox-control-row">
              <label class="sandbox-label">Orbital Semi-Major Axis: <span id="dist-display">${this.selectedDistance} units (${(this.selectedDistance/2500).toFixed(2)} AU)</span></label>
              <input type="range" min="800" max="8000" step="100" value="${this.selectedDistance}" class="sandbox-slider" id="dist-slider" />
            </div>

            <div class="sandbox-actions-row">
              <button class="sandbox-btn accent" id="add-planet-btn">🪐 ACCRETE PLANET</button>
              <button class="sandbox-btn danger" id="clear-sandbox-btn">💥 CLEAR SYSTEM (${a})</button>
            </div>
          </div>
        </div>
      </div>
    `;const o=this.container.querySelector("#sandbox-close-btn");o&&o.addEventListener("click",()=>{this.store.dispatch({type:Fa})});const l=this.container.querySelector("#star-select");l&&l.addEventListener("change",_=>{this.selectedStarKey=_.target.value,this.render(this.store.getState())});const c=this.container.querySelector("#planet-select");c&&c.addEventListener("change",_=>{this.selectedPlanetKey=_.target.value});const u=this.container.querySelector("#dist-slider"),h=this.container.querySelector("#dist-display");u&&h&&u.addEventListener("input",_=>{this.selectedDistance=parseInt(_.target.value,10),h.textContent=`${this.selectedDistance} units (${(this.selectedDistance/2500).toFixed(2)} AU)`});const d=this.container.querySelector("#spawn-star-btn");d&&d.addEventListener("click",()=>{this.genesis.spawnStar(this.selectedStarKey),this.render(this.store.getState())});const p=this.container.querySelector("#add-planet-btn");p&&p.addEventListener("click",()=>{this.genesis.addPlanet({typeKey:this.selectedPlanetKey,distance:this.selectedDistance,speed:.15+3e3/this.selectedDistance*.1}),this.store.dispatch({type:wg,payload:{type:this.selectedPlanetKey,distance:this.selectedDistance}}),this.render(this.store.getState())});const g=this.container.querySelector("#clear-sandbox-btn");g&&g.addEventListener("click",()=>{this.genesis.clearSystem(),this.store.dispatch({type:Cg}),this.render(this.store.getState())})}}iy().catch(i=>uy(i));async function iy(){if(Li("Checking your ship’s systems…",10),!nu())throw new Error("This browser can’t display 3D graphics (WebGL). Please try a recent version of Chrome, Firefox, Edge, or Safari.");const i=[...Ng().errors,...Hg().errors];if(i.length>0)throw console.error("[main] Celestial data validation failed:",i),new Error("The universe database failed to load correctly. Please refresh the page.");Li("Assembling the cabin…",30);const e=document.getElementById("scene-canvas"),t=new Lg,n=new hg({canvas:e,onContextLost:D=>gt(`Graphics paused: ${D} Trying to recover…`),onContextRestored:()=>gt("Graphics restored.")}),s=Sg(n.renderer,n.scene,n.camera);n.onResize((D,me)=>s.resize(D,me)),Li("Scattering stars across the sky…",50),n.scene.add(C_()),n.scene.add(new eu(3813456,.6));const r=new U_(n.scene);t.subscribe(D=>r.toggle(D),D=>D.ui.constellationsVisible);const a=new it,o=new Sr({color:6482175,transparent:!0,opacity:.65,blending:ot}),l=new Qa(a,o);l.name="slingshot-trajectory",n.scene.add(l);const{celestialGroups:c,satelliteGroups:u}=sy(n),h=new Yv(n.scene,t,{onShowToast:D=>gt(D)});Li("Warming up the engines…",75);const{ship:d,cockpitInterior:p,update:g,bobbleheadPhysics:_,applyCabinTheme:m,applyCabinLighting:f,applyHullLivery:y}=G_();n.scene.add(d);const v=c.get("earth")?.position??new C;d.position.copy(v).add(new C(0,.25,2.5)),d.userData.forward=new C(0,0,1),d.userData.velocity={x:0,y:0,z:0};const S=new Jv(t);S.group.position.set(.18,-.04,-.09),p?p.add(S.group):d.add(S.group);const R=new ar;new jv(document.body,t,{setiScanner:R,onShowToast:D=>gt(D)}),new Qv(t);const A=new ty(n.scene,t);new ny(t,A);const w=new ey(n.scene,t);w.createWormhole({name:"Einstein-Rosen Bridge Alpha",position:new C(25e3,500,-35e3),destinationName:"Andromeda Galaxy M31",destinationCoords:new C(-45e3,12e3,6e4),eventRadius:600}),t.subscribe(D=>m?.(D),D=>D.cabinTheme),t.subscribe(D=>f?.(D),D=>D.cabinLightLevel),t.subscribe(D=>y?.(D),D=>D.hullLivery);const O=new W_(n.camera,d),M=new nv({scene:n.scene,ship:d,store:t}),E=new mv,N=new Mv,H=new Ev,se=new Tv,P=new Xv(document.body,t,{onShowToast:D=>gt(D)});new qv(document.body,t,{onShowToast:D=>gt(D)});const G=new gv({camera:n.camera,shipGroup:d,audio:N,spaceRadio:H,cassetteDeck:se,bobbleheadProp:_,onEngageWarp:()=>B(),onShowToast:D=>gt(D)}),k=new _v({onToggleCamera:()=>{const D=t.getState().cameraMode,me=D===tt.COCKPIT?tt.THIRD_PERSON:D===tt.THIRD_PERSON?tt.CINEMATIC:tt.COCKPIT;t.dispatch(Ce.setCameraMode(me))},onToggleHyperdrive:()=>{const D=E.toggleHyperdriveLock();gt(D?"Hyperdrive Locked ON":"Hyperdrive Disengaged")}});Li("Opening the star charts…",90);const j=ly(t,{canvas:e,camera:n.camera,onSearchSelect:D=>re(D.id,D.kind),onSatelliteSelect:D=>re(D,"satellite"),onToggleHyperdrive:()=>{const D=E.toggleHyperdriveLock();gt(D?"Hyperdrive Locked ON":"Hyperdrive Disengaged")},onZoomIn:()=>O.adjustZoom(-.2),onZoomOut:()=>O.adjustZoom(.2)}),Z=document.getElementById("view-switcher-root"),ee=new Uv(Z,t,{onToggleRadio:()=>{const D=H.togglePower();gt(D?`📻 ${H.getCurrentStation().name}`:"📻 Radio: OFF")}});$v({store:t,viewSwitcher:ee,audio:N,onEngageWarp:()=>B()}),cy(n,d,E,N,H,se,R,O,t,G);function q(){const D=t.getState(),me=new window.URLSearchParams;D.targetObject&&me.set("dest",D.targetObject),D.cameraMode&&me.set("cam",D.cameraMode),D.timeWarp&&D.timeWarp!==1&&me.set("time",D.timeWarp),D.cabinTheme&&D.cabinTheme!=="MAHOGANY"&&me.set("theme",D.cabinTheme);const ve=me.toString();ve&&window.history.replaceState(null,"",`#${ve}`)}function X(){if(!window.location.hash)return;const D=new window.URLSearchParams(window.location.hash.replace(/^#/,"")),me=D.get("dest"),ve=D.get("cam"),he=D.get("time"),Ee=D.get("theme");me&&setTimeout(()=>re(me,rs(me)?"satellite":"planet"),500),ve&&Object.values(tt).includes(ve)&&t.dispatch(Ce.setCameraMode(ve)),he&&[1,100,1e3,1e4].includes(Number(he))&&t.dispatch(Ce.setTimeWarp(Number(he))),Ee&&["MAHOGANY","APOLLO","CYBERPUNK"].includes(Ee.toUpperCase())&&t.dispatch(Ce.setCabinTheme(Ee.toUpperCase()))}t.subscribe(()=>q(),D=>`${D.targetObject}-${D.cameraMode}-${D.timeWarp}-${D.cabinTheme}`),X();function re(D,me){const ve=me==="satellite"?u.get(D):c.get(D),he=ve?.position;if(!he){gt("That object isn’t available to fly to right now.");return}const Ee=ve?.userData?.safeRadius??1;t.dispatch(Ce.setTarget(D)),t.dispatch(Ce.selectObject(D)),N.playChirp(),t.getState().flightMode===ln.MANUAL?(E.setTarget(he),gt("Follow the arrow to reach your destination.")):M.beginJump(d.position,he,ie(D,me),()=>pe(D),Ee)}function B(){const D=t.getState();if(!D.targetObject||D.flightMode!==ln.AUTOPILOT||M.isActive)return;const me=c.get(D.targetObject)??u.get(D.targetObject),ve=me?.position;if(!ve)return;const he=me?.userData?.safeRadius??1;M.beginJump(d.position,ve,ie(D.targetObject,void 0),()=>pe(D.targetObject),he)}function ie(D,me){if(me==="satellite")return rs(D)?.distanceFromEarthKm??0;const ve=Qn(D);return ve?ve.distanceFromEarthKm:rs(D)?.distanceFromEarthKm??0}function pe(D){gt("Arrived! Here’s what we found."),N.playChirp(),j.detailPanel.show(D),E.setTarget(null);const me=Qn(D),ve=rs(D),he=me?.name??ve?.name??D,Ee=ve?"satellite":me?.type??"planet",L=me?.system??ve?.missionType??"Exploration";t.dispatch(Ce.recordDiscovery({id:D,name:he,kind:Ee,category:L})),S.speakOnTarget(D);const ce=t.getState().activeExpedition;ce&&(t.dispatch(Ce.visitExpeditionWaypoint(ce,D)),t.getState().expeditionProgress[ce]?.completed&&(gt("🏆 Expedition Completed! New badge added to your Star Journal."),N.playChirp()))}let Se=0;n.onTick((D,me)=>{if(P.active){P.update(D,n.renderer);return}const ve=t.getState().timeWarp||1;if(Se+=D*ve,ry(Se,c,u),M.update(D,Se),h.update(D,d.position),H&&H.isPlaying){let Q=null,J=1/0;for(const[ne,Me]of c){const fe=d.position.distanceTo(Me.position)*4e4;fe<J&&(J=fe,Q=ne)}Q&&J<8e5?H.updatePlanetarySonification(Q,J):H.updatePlanetarySonification(null,1/0)}let he={thrust:0,yaw:0,pitch:0,strafe:0,boost:!1},Ee,L;const ce=M.isActive;let K=0,ae=0;const Y=fu.computeActiveModifiers(t.getState().installedUpgrades||[]),we=d.position;for(const[Q,J]of c){const ne=Qn(Q);if(!ne||!J||!ne.environment?.atmosphericPressureAtm)continue;const Me=we.distanceTo(J.position),de=J.userData.visualRadius||1,fe=vv(Me,de,1.2,ne.environment.atmosphericPressureAtm);if(fe.inAtmosphere){const Te=Math.sqrt((d.userData.velocity?.x??0)**2+(d.userData.velocity?.y??0)**2+(d.userData.velocity?.z??0)**2),Ie=yv(Te,fe.densityFraction,12);K=Math.max(K,Ie.heatIntensity*Y.heatReduction),ae=Math.max(ae,Ie.dragForce)}}S.tick(D),R.tick(D),A.tick(D),w.tick(D);const ue=w.checkProximity(d.position,850);if(ue.inRange&&!t.getState().isTraversingWormhole&&(t.dispatch({type:Tg,payload:ue.wormhole.name}),gt(`🌀 Entering ${ue.wormhole.name} -> Warping to ${ue.wormhole.destinationName}!`),d.position.copy(ue.wormhole.destinationCoords),N.playChirp(),setTimeout(()=>{t.dispatch({type:Ag}),gt(`✨ Exited into ${ue.wormhole.destinationName}!`)},1600)),ce)L=t.getState().flightTelemetry.currentSpeedC,Ee=!0,j.telemetry.updateDriveMode(!0),l&&(l.visible=!1);else{const Q=k.poll();(Q.thrust!==0||Q.strafe!==0||Q.pitch!==0||Q.yaw!==0||Q.boost)&&(he=Q);const J=ay(D,d,E,t,j,pe,c);J&&J.input&&(he=J.input),ae>0&&d.userData.velocity&&(d.userData.velocity.x*=Math.max(1-ae*D*.1,.2),d.userData.velocity.y*=Math.max(1-ae*D*.1,.2),d.userData.velocity.z*=Math.max(1-ae*D*.1,.2)),Ee=!!he.boost;const ne=Math.sqrt(d.userData.velocity.x**2+d.userData.velocity.y**2+d.userData.velocity.z**2);L=Ee?ne/180:ne/24,j.telemetry.updateDriveMode(Ee);const Me=[];for(const[de,fe]of c){const Te=Qn(de);Te&&["star","planet","blackHole"].includes(Te.type)&&Me.push({position:{x:fe.position.x,y:fe.position.y,z:fe.position.z},mass:Te.type==="blackHole"?40:Te.type==="star"?20:(fe.userData.visualRadius||1)*3,safeRadius:fe.userData.safeRadius||1})}if(l){const fe=Sv({x:d.position.x,y:d.position.y,z:d.position.z},d.userData.velocity||{x:0,y:0,z:0},Me,40,.1).map(Te=>new C(Te.x,Te.y,Te.z));l.geometry.setFromPoints(fe),l.visible=t.getState().flightMode===ln.MANUAL&&ne>.1}}const b=c.get("sagittarius-a-star");if(b){const Q=d.position.distanceTo(b.position);if(Q<8){const J=$_(Q*5e6,415e4);J.isInsideEventHorizon||t.dispatch(Ce.updateTelemetry({timeDilationShipSec:1,timeDilationEarthSec:J.timeRatio}))}}const x={accZ:(he.thrust||0)*(Ee?22:8),yawRate:(he.yaw||0)*8,pitchRate:(he.pitch||0)*8};g(D,L,Ee,he,t.getState().cameraMode,x,K),O.setMode(t.getState().cameraMode),O.update(D,Ee,L),document.getElementById("cockpit-overlay")?.classList.toggle("cockpit-active",t.getState().cameraMode===tt.COCKPIT);const U=ce?t.getState().flightTelemetry.currentSpeedC:Ee?Math.min(L*1.5,1):L*.5;N.setEngineIntensity(U),oy(j.radar,d,c,u),s.composer?s.render(D):n.renderer.render(n.scene,n.camera)}),window.addEventListener("error",D=>{console.error("[main] Uncaught error:",D.error??D.message),gt("Something hiccuped, but the flight continues.")}),window.addEventListener("unhandledrejection",D=>{console.error("[main] Unhandled rejection:",D.reason),gt("Something hiccuped, but the flight continues.")}),Li("Ready for launch.",100),await hy(250),pu(),n.start()}function sy(i){const e=ou(en,0),t=new Map;for(const r of en){const a=y_(r),o=e.get(r.id);a.position.set(o.x,o.y,o.z),i.scene.add(a),t.set(r.id,a)}const n=lu(wn,e),s=new Map;for(const r of wn){const a=w_(r),o=n.get(r.id);a.position.set(o.x,o.y,o.z),i.scene.add(a),s.set(r.id,a)}return{celestialGroups:t,satelliteGroups:s}}function ry(i,e,t){const n=ou(en,i*2e4);for(const[r,a]of e){const o=n.get(r);o&&a.position.set(o.x,o.y,o.z);const l=a.getObjectByName("clouds:earth");l&&(l.rotation.y=i*.06);const c=a.getObjectByName(`surface:${r}`);c&&(c.rotation.y=i*.02),a.traverse(u=>{const h=u.material?.uniforms;h?.uTime&&(h.uTime.value=i)})}const s=lu(wn,n);for(const[r,a]of t){const o=s.get(r);o&&a.position.set(o.x,o.y,o.z)}}function ay(i,e,t,n,s,r,a){const o={position:{x:e.position.x,y:e.position.y,z:e.position.z},velocity:e.userData.velocity??{x:0,y:0,z:0},forward:{x:e.userData.forward.x,y:e.userData.forward.y,z:e.userData.forward.z},bankAngle:e.userData.bankAngle??0},{state:l,bearing:c,input:u}=t.step(o,i);if(a){const m=[];for(const y of a.values())y?.position&&y.userData?.safeRadius&&m.push({position:{x:y.position.x,y:y.position.y,z:y.position.z},safeRadius:y.userData.safeRadius});const f=uv(l.position,l.velocity,m);l.position=f.position,l.velocity=f.velocity}e.position.set(l.position.x,l.position.y,l.position.z),e.userData.velocity=l.velocity,e.userData.forward.set(l.forward.x,l.forward.y,l.forward.z),e.userData.bankAngle=l.bankAngle;const h=e.position.clone().add(e.userData.forward);e.lookAt(h),l.bankAngle&&e.rotateZ(l.bankAngle),s.compass.update(c);const d=Math.sqrt(l.velocity.x**2+l.velocity.y**2+l.velocity.z**2),p=u.boost?d/180*.95:d/18*.05;let g=0,_=0;if(c&&(g=c.distance*1e5,d>.01&&(_=c.distance/d)),n.dispatch(Ce.updateTelemetry({currentSpeedC:p,distanceRemainingKm:g,etaSeconds:_})),c?.arrived){const m=n.getState().targetObject;n.dispatch(Ce.setFlightStatus(fn.ARRIVED)),m&&r(m)}return{state:l,bearing:c,input:u}}function oy(i,e,t,n){const s=[];for(const o of t.values())s.push({x:o.position.x,z:o.position.z,color:"#ffd27a"});for(const o of n.values())s.push({x:o.position.x,z:o.position.z,color:"#9ee6ff"});const r=e.userData.forward??new C(0,0,-1),a=Math.atan2(r.x,r.z);i.render({x:e.position.x,z:e.position.z},a,s)}function ly(i,{canvas:e,camera:t,onSearchSelect:n,onSatelliteSelect:s,_onToggleRadio:r,onToggleHyperdrive:a,onZoomIn:o,onZoomOut:l}){const c=document.getElementById("nav-search-root"),u=document.getElementById("detail-panel-root"),h=document.getElementById("satellite-list-root"),d=document.getElementById("telemetry-root"),p=document.getElementById("compass-root"),g=document.getElementById("radar-root"),_=document.getElementById("photo-mode-root"),m=document.getElementById("logbook-root"),f=document.getElementById("habitability-matrix-root"),y=new wv(c,i,{onSelect:n}),v=new Lv(u,i),S=new Iv(f,i),R=new Dv(h,i,{onSelect:s}),A=new Ov(p,i),w=new Fv(d,i,{onToggleHyperdrive:a,onZoomIn:o,onZoomOut:l}),O=new Gv(g),M=new Hv(_,i,{canvas:e,camera:t,onShowToast:N=>gt(N)}),E=new kv(m,i,{onSelectTarget:n});return i.dispatch(Ce.toggleSatelliteList(!0)),{search:y,detailPanel:v,habitabilityMatrix:S,satelliteList:R,compass:A,telemetry:w,radar:O,photoMode:M,logbook:E}}function cy(i,e,t,n,s,r,a,o,l,c){const u=()=>{n.init(),s&&n._ctx&&s.setContext(n._ctx),r&&n._ctx&&r.setContext(n._ctx),a&&n._ctx&&a.setContext(n._ctx),window.removeEventListener("pointerdown",u),window.removeEventListener("keydown",u)};window.addEventListener("pointerdown",u),window.addEventListener("keydown",u),window.addEventListener("click",h=>{c.handleClick(h,l.getState().cameraMode===tt.COCKPIT)}),window.addEventListener("keydown",h=>{if(!(h.target instanceof HTMLInputElement||h.target instanceof HTMLTextAreaElement)){if(h.code==="Equal"||h.code==="NumpadAdd"||h.code==="PageUp")o.adjustZoom(-.15);else if(h.code==="Minus"||h.code==="NumpadSubtract"||h.code==="PageDown")o.adjustZoom(.15);else if(h.code==="KeyO"){l.dispatch(Ce.toggleConstellations());const p=l.getState().ui.constellationsVisible;gt(p?"✨ Constellation Charts: ON":"✨ Constellation Charts: OFF")}else if(h.code==="KeyP")l.dispatch(Ce.togglePhotoMode(!0));else if(h.code==="KeyL")l.dispatch(Ce.toggleLogbook(!0));else if(h.code==="KeyB")l.dispatch(Ce.toggleProbeBuilder());else if(h.code==="KeyU")l.dispatch({type:Mg});else if(h.code==="KeyE")l.dispatch({type:Ua});else if(h.code==="KeyG")l.dispatch({type:Fa});else if(h.code==="KeyH")l.dispatch({type:bg});else if(h.code==="KeyK"){if(r){const p=r.togglePlay(),g=r.getCurrentTape();gt(p?`📼 Cassette: "${g.title}"`:"📼 Cassette: Paused")}}else if(h.code==="KeyR"){const p=s.togglePower();gt(p?`📻 ${s.getCurrentStation().name}`:"📻 Space Radio: OFF")}t.handleKeyDown(h)}}),window.addEventListener("keyup",h=>t.handleKeyUp(h)),window.addEventListener("blur",()=>t.resetInput()),window.addEventListener("wheel",h=>{const d=Math.sign(h.deltaY)*.12;o.adjustZoom(d)},{passive:!0}),window.addEventListener("pointermove",h=>{const d=h.clientX/window.innerWidth*2-1,p=h.clientY/window.innerHeight*2-1;o.setMouseParallax(d,-p)})}function Li(i,e){const t=document.getElementById("boot-message"),n=document.getElementById("boot-bar-fill");t&&(t.textContent=i),n&&(n.style.width=`${Math.min(Math.max(e,0),100)}%`)}function pu(){const i=document.getElementById("boot-screen");i&&(i.classList.add("fade-out"),setTimeout(()=>i.remove(),700))}function uy(i){console.error("[main] Fatal startup error:",i),pu();const e=document.getElementById("fatal-error"),t=document.getElementById("fatal-error-message");t&&(t.textContent=i?.message??"An unexpected error occurred."),e&&(e.hidden=!1,e.querySelector("#fatal-error-retry")?.addEventListener("click",()=>window.location.reload()))}function gt(i){const e=document.getElementById("toast-root");if(!e)return;const t=document.createElement("div");t.className="toast",t.textContent=i,e.appendChild(t),setTimeout(()=>t.remove(),3200)}function hy(i){return new Promise(e=>setTimeout(e,i))}
//# sourceMappingURL=index-WJNtg4k4.js.map
