(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function e(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(s){if(s.ep)return;s.ep=!0;const r=e(s);fetch(s.href,r)}})();/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Na="160",tu=0,Ja=1,eu=2,jl=1,nu=2,yn=3,Gn=0,Re=1,Ue=2,Sn=0,Ri=1,ve=2,Qa=3,to=4,iu=5,jn=100,su=101,ru=102,eo=103,no=104,au=200,ou=201,lu=202,cu=203,da=204,fa=205,uu=206,hu=207,du=208,fu=209,pu=210,mu=211,gu=212,_u=213,vu=214,xu=0,yu=1,Mu=2,er=3,Su=4,bu=5,Eu=6,Tu=7,$l=0,wu=1,Au=2,On=0,Cu=1,Ru=2,Pu=3,Zl=4,Lu=5,Iu=6,Jl=300,Di=301,Ni=302,pa=303,ma=304,ur=306,ga=1e3,sn=1001,_a=1002,Be=1003,io=1004,Sr=1005,Ze=1006,Du=1007,ls=1008,Fn=1009,Nu=1010,Uu=1011,Ua=1012,Ql=1013,Nn=1014,Un=1015,bn=1016,tc=1017,ec=1018,Jn=1020,Ou=1021,rn=1023,Fu=1024,Gu=1025,Qn=1026,Ui=1027,Bu=1028,nc=1029,Hu=1030,ic=1031,sc=1033,br=33776,Er=33777,Tr=33778,wr=33779,so=35840,ro=35841,ao=35842,oo=35843,rc=36196,lo=37492,co=37496,uo=37808,ho=37809,fo=37810,po=37811,mo=37812,go=37813,_o=37814,vo=37815,xo=37816,yo=37817,Mo=37818,So=37819,bo=37820,Eo=37821,Ar=36492,To=36494,wo=36495,ku=36283,Ao=36284,Co=36285,Ro=36286,ac=3e3,ti=3001,zu=3200,Vu=3201,oc=0,Wu=1,Je="",ge="srgb",En="srgb-linear",Oa="display-p3",hr="display-p3-linear",nr="linear",ae="srgb",ir="rec709",sr="p3",ai=7680,Po=519,qu=512,Xu=513,Ku=514,lc=515,Yu=516,ju=517,$u=518,Zu=519,Lo=35044,Io="300 es",va=1035,Mn=2e3,rr=2001;class ki{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const s=this._listeners[t];if(s!==void 0){const r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const n=this._listeners[t.type];if(n!==void 0){t.target=this;const s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,t);t.target=null}}}const Ie=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Cr=Math.PI/180,xa=180/Math.PI;function zi(){const i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Ie[i&255]+Ie[i>>8&255]+Ie[i>>16&255]+Ie[i>>24&255]+"-"+Ie[t&255]+Ie[t>>8&255]+"-"+Ie[t>>16&15|64]+Ie[t>>24&255]+"-"+Ie[e&63|128]+Ie[e>>8&255]+"-"+Ie[e>>16&255]+Ie[e>>24&255]+Ie[n&255]+Ie[n>>8&255]+Ie[n>>16&255]+Ie[n>>24&255]).toLowerCase()}function Te(i,t,e){return Math.max(t,Math.min(e,i))}function Ju(i,t){return(i%t+t)%t}function Rr(i,t,e){return(1-e)*i+e*t}function Do(i){return(i&i-1)===0&&i!==0}function ya(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function qi(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function He(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}class st{constructor(t=0,e=0){st.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Te(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,a=this.y-t.y;return this.x=r*n-a*s+t.x,this.y=r*s+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class qt{constructor(t,e,n,s,r,a,o,l,c){qt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,l,c)}set(t,e,n,s,r,a,o,l,c){const h=this.elements;return h[0]=t,h[1]=s,h[2]=o,h[3]=e,h[4]=r,h[5]=l,h[6]=n,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],h=n[4],u=n[7],d=n[2],p=n[5],g=n[8],_=s[0],m=s[3],f=s[6],x=s[1],v=s[4],y=s[7],R=s[2],w=s[5],A=s[8];return r[0]=a*_+o*x+l*R,r[3]=a*m+o*v+l*w,r[6]=a*f+o*y+l*A,r[1]=c*_+h*x+u*R,r[4]=c*m+h*v+u*w,r[7]=c*f+h*y+u*A,r[2]=d*_+p*x+g*R,r[5]=d*m+p*v+g*w,r[8]=d*f+p*y+g*A,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8];return e*a*h-e*o*c-n*r*h+n*o*l+s*r*c-s*a*l}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],u=h*a-o*c,d=o*l-h*r,p=c*r-a*l,g=e*u+n*d+s*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return t[0]=u*_,t[1]=(s*c-h*n)*_,t[2]=(o*n-s*a)*_,t[3]=d*_,t[4]=(h*e-s*l)*_,t[5]=(s*r-o*e)*_,t[6]=p*_,t[7]=(n*l-c*e)*_,t[8]=(a*e-n*r)*_,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,a,o){const l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*a+c*o)+a+t,-s*c,s*l,-s*(-c*a+l*o)+o+e,0,0,1),this}scale(t,e){return this.premultiply(Pr.makeScale(t,e)),this}rotate(t){return this.premultiply(Pr.makeRotation(-t)),this}translate(t,e){return this.premultiply(Pr.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Pr=new qt;function cc(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function ar(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Qu(){const i=ar("canvas");return i.style.display="block",i}const No={};function ns(i){i in No||(No[i]=!0,console.warn(i))}const Uo=new qt().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Oo=new qt().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),xs={[En]:{transfer:nr,primaries:ir,toReference:i=>i,fromReference:i=>i},[ge]:{transfer:ae,primaries:ir,toReference:i=>i.convertSRGBToLinear(),fromReference:i=>i.convertLinearToSRGB()},[hr]:{transfer:nr,primaries:sr,toReference:i=>i.applyMatrix3(Oo),fromReference:i=>i.applyMatrix3(Uo)},[Oa]:{transfer:ae,primaries:sr,toReference:i=>i.convertSRGBToLinear().applyMatrix3(Oo),fromReference:i=>i.applyMatrix3(Uo).convertLinearToSRGB()}},th=new Set([En,hr]),Zt={enabled:!0,_workingColorSpace:En,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(i){if(!th.has(i))throw new Error(`Unsupported working color space, "${i}".`);this._workingColorSpace=i},convert:function(i,t,e){if(this.enabled===!1||t===e||!t||!e)return i;const n=xs[t].toReference,s=xs[e].fromReference;return s(n(i))},fromWorkingColorSpace:function(i,t){return this.convert(i,this._workingColorSpace,t)},toWorkingColorSpace:function(i,t){return this.convert(i,t,this._workingColorSpace)},getPrimaries:function(i){return xs[i].primaries},getTransfer:function(i){return i===Je?nr:xs[i].transfer}};function Pi(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Lr(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let oi;class uc{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{oi===void 0&&(oi=ar("canvas")),oi.width=t.width,oi.height=t.height;const n=oi.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=oi}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=ar("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=Pi(r[a]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Pi(e[n]/255)*255):e[n]=Pi(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let eh=0;class hc{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:eh++}),this.uuid=zi(),this.data=t,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(Ir(s[a].image)):r.push(Ir(s[a]))}else r=Ir(s);n.url=r}return e||(t.images[this.uuid]=n),n}}function Ir(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?uc.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let nh=0;class Ve extends ki{constructor(t=Ve.DEFAULT_IMAGE,e=Ve.DEFAULT_MAPPING,n=sn,s=sn,r=Ze,a=ls,o=rn,l=Fn,c=Ve.DEFAULT_ANISOTROPY,h=Je){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:nh++}),this.uuid=zi(),this.name="",this.source=new hc(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new st(0,0),this.repeat=new st(1,1),this.center=new st(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new qt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof h=="string"?this.colorSpace=h:(ns("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=h===ti?ge:Je),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Jl)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case ga:t.x=t.x-Math.floor(t.x);break;case sn:t.x=t.x<0?0:1;break;case _a:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case ga:t.y=t.y-Math.floor(t.y);break;case sn:t.y=t.y<0?0:1;break;case _a:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return ns("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===ge?ti:ac}set encoding(t){ns("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=t===ti?ge:Je}}Ve.DEFAULT_IMAGE=null;Ve.DEFAULT_MAPPING=Jl;Ve.DEFAULT_ANISOTROPY=1;class ce{constructor(t=0,e=0,n=0,s=1){ce.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*e+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*e+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*e+a[7]*n+a[11]*s+a[15]*r,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r;const l=t.elements,c=l[0],h=l[4],u=l[8],d=l[1],p=l[5],g=l[9],_=l[2],m=l[6],f=l[10];if(Math.abs(h-d)<.01&&Math.abs(u-_)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+_)<.1&&Math.abs(g+m)<.1&&Math.abs(c+p+f-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const v=(c+1)/2,y=(p+1)/2,R=(f+1)/2,w=(h+d)/4,A=(u+_)/4,N=(g+m)/4;return v>y&&v>R?v<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(v),s=w/n,r=A/n):y>R?y<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(y),n=w/s,r=N/s):R<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(R),n=A/r,s=N/r),this.set(n,s,r,e),this}let x=Math.sqrt((m-g)*(m-g)+(u-_)*(u-_)+(d-h)*(d-h));return Math.abs(x)<.001&&(x=1),this.x=(m-g)/x,this.y=(u-_)/x,this.z=(d-h)/x,this.w=Math.acos((c+p+f-1)/2),this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class ih extends ki{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new ce(0,0,t,e),this.scissorTest=!1,this.viewport=new ce(0,0,t,e);const s={width:t,height:e,depth:1};n.encoding!==void 0&&(ns("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),n.colorSpace=n.encoding===ti?ge:Je),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ze,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},n),this.texture=new Ve(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps,this.texture.internalFormat=n.internalFormat,this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}setSize(t,e,n=1){(this.width!==t||this.height!==e||this.depth!==n)&&(this.width=t,this.height=e,this.depth=n,this.texture.image.width=t,this.texture.image.height=e,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.texture=t.texture.clone(),this.texture.isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new hc(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class ln extends ih{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class dc extends Ve{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Be,this.minFilter=Be,this.wrapR=sn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class sh extends Ve{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Be,this.minFilter=Be,this.wrapR=sn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class fs{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,a,o){let l=n[s+0],c=n[s+1],h=n[s+2],u=n[s+3];const d=r[a+0],p=r[a+1],g=r[a+2],_=r[a+3];if(o===0){t[e+0]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u;return}if(o===1){t[e+0]=d,t[e+1]=p,t[e+2]=g,t[e+3]=_;return}if(u!==_||l!==d||c!==p||h!==g){let m=1-o;const f=l*d+c*p+h*g+u*_,x=f>=0?1:-1,v=1-f*f;if(v>Number.EPSILON){const R=Math.sqrt(v),w=Math.atan2(R,f*x);m=Math.sin(m*w)/R,o=Math.sin(o*w)/R}const y=o*x;if(l=l*m+d*y,c=c*m+p*y,h=h*m+g*y,u=u*m+_*y,m===1-o){const R=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=R,c*=R,h*=R,u*=R}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,n,s,r,a){const o=n[s],l=n[s+1],c=n[s+2],h=n[s+3],u=r[a],d=r[a+1],p=r[a+2],g=r[a+3];return t[e]=o*g+h*u+l*p-c*d,t[e+1]=l*g+h*d+c*u-o*p,t[e+2]=c*g+h*p+o*d-l*u,t[e+3]=h*g-o*u-l*d-c*p,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,s=t._y,r=t._z,a=t._order,o=Math.cos,l=Math.sin,c=o(n/2),h=o(s/2),u=o(r/2),d=l(n/2),p=l(s/2),g=l(r/2);switch(a){case"XYZ":this._x=d*h*u+c*p*g,this._y=c*p*u-d*h*g,this._z=c*h*g+d*p*u,this._w=c*h*u-d*p*g;break;case"YXZ":this._x=d*h*u+c*p*g,this._y=c*p*u-d*h*g,this._z=c*h*g-d*p*u,this._w=c*h*u+d*p*g;break;case"ZXY":this._x=d*h*u-c*p*g,this._y=c*p*u+d*h*g,this._z=c*h*g+d*p*u,this._w=c*h*u-d*p*g;break;case"ZYX":this._x=d*h*u-c*p*g,this._y=c*p*u+d*h*g,this._z=c*h*g-d*p*u,this._w=c*h*u+d*p*g;break;case"YZX":this._x=d*h*u+c*p*g,this._y=c*p*u+d*h*g,this._z=c*h*g-d*p*u,this._w=c*h*u-d*p*g;break;case"XZY":this._x=d*h*u-c*p*g,this._y=c*p*u-d*h*g,this._z=c*h*g+d*p*u,this._w=c*h*u+d*p*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],s=e[4],r=e[8],a=e[1],o=e[5],l=e[9],c=e[2],h=e[6],u=e[10],d=n+o+u;if(d>0){const p=.5/Math.sqrt(d+1);this._w=.25/p,this._x=(h-l)*p,this._y=(r-c)*p,this._z=(a-s)*p}else if(n>o&&n>u){const p=2*Math.sqrt(1+n-o-u);this._w=(h-l)/p,this._x=.25*p,this._y=(s+a)/p,this._z=(r+c)/p}else if(o>u){const p=2*Math.sqrt(1+o-n-u);this._w=(r-c)/p,this._x=(s+a)/p,this._y=.25*p,this._z=(l+h)/p}else{const p=2*Math.sqrt(1+u-n-o);this._w=(a-s)/p,this._x=(r+c)/p,this._y=(l+h)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Te(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,s=t._y,r=t._z,a=t._w,o=e._x,l=e._y,c=e._z,h=e._w;return this._x=n*h+a*o+s*c-r*l,this._y=s*h+a*l+r*o-n*c,this._z=r*h+a*c+n*l-s*o,this._w=a*h-n*o-s*l-r*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,s=this._y,r=this._z,a=this._w;let o=a*t._w+n*t._x+s*t._y+r*t._z;if(o<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,o=-o):this.copy(t),o>=1)return this._w=a,this._x=n,this._y=s,this._z=r,this;const l=1-o*o;if(l<=Number.EPSILON){const p=1-e;return this._w=p*a+e*this._w,this._x=p*n+e*this._x,this._y=p*s+e*this._y,this._z=p*r+e*this._z,this.normalize(),this}const c=Math.sqrt(l),h=Math.atan2(c,o),u=Math.sin((1-e)*h)/c,d=Math.sin(e*h)/c;return this._w=a*u+this._w*d,this._x=n*u+this._x*d,this._y=s*u+this._y*d,this._z=r*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=Math.random(),e=Math.sqrt(1-t),n=Math.sqrt(t),s=2*Math.PI*Math.random(),r=2*Math.PI*Math.random();return this.set(e*Math.cos(s),n*Math.sin(r),n*Math.cos(r),e*Math.sin(s))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class C{constructor(t=0,e=0,n=0){C.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Fo.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Fo.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=t.elements,a=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(t){const e=this.x,n=this.y,s=this.z,r=t.x,a=t.y,o=t.z,l=t.w,c=2*(a*s-o*n),h=2*(o*e-r*s),u=2*(r*n-a*e);return this.x=e+l*c+a*u-o*h,this.y=n+l*h+o*c-r*u,this.z=s+l*u+r*h-a*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,s=t.y,r=t.z,a=e.x,o=e.y,l=e.z;return this.x=s*l-r*o,this.y=r*a-n*l,this.z=n*o-s*a,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Dr.copy(this).projectOnVector(t),this.sub(Dr)}reflect(t){return this.sub(Dr.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Te(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=(Math.random()-.5)*2,e=Math.random()*Math.PI*2,n=Math.sqrt(1-t**2);return this.x=n*Math.cos(e),this.y=n*Math.sin(e),this.z=t,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Dr=new C,Fo=new fs;class ni{constructor(t=new C(1/0,1/0,1/0),e=new C(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(Qe.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(Qe.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=Qe.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,Qe):Qe.fromBufferAttribute(r,a),Qe.applyMatrix4(t.matrixWorld),this.expandByPoint(Qe);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),ys.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),ys.copy(n.boundingBox)),ys.applyMatrix4(t.matrixWorld),this.union(ys)}const s=t.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return!(t.x<this.min.x||t.x>this.max.x||t.y<this.min.y||t.y>this.max.y||t.z<this.min.z||t.z>this.max.z)}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return!(t.max.x<this.min.x||t.min.x>this.max.x||t.max.y<this.min.y||t.min.y>this.max.y||t.max.z<this.min.z||t.min.z>this.max.z)}intersectsSphere(t){return this.clampPoint(t.center,Qe),Qe.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Xi),Ms.subVectors(this.max,Xi),li.subVectors(t.a,Xi),ci.subVectors(t.b,Xi),ui.subVectors(t.c,Xi),An.subVectors(ci,li),Cn.subVectors(ui,ci),zn.subVectors(li,ui);let e=[0,-An.z,An.y,0,-Cn.z,Cn.y,0,-zn.z,zn.y,An.z,0,-An.x,Cn.z,0,-Cn.x,zn.z,0,-zn.x,-An.y,An.x,0,-Cn.y,Cn.x,0,-zn.y,zn.x,0];return!Nr(e,li,ci,ui,Ms)||(e=[1,0,0,0,1,0,0,0,1],!Nr(e,li,ci,ui,Ms))?!1:(Ss.crossVectors(An,Cn),e=[Ss.x,Ss.y,Ss.z],Nr(e,li,ci,ui,Ms))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Qe).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Qe).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(mn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),mn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),mn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),mn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),mn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),mn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),mn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),mn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(mn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const mn=[new C,new C,new C,new C,new C,new C,new C,new C],Qe=new C,ys=new ni,li=new C,ci=new C,ui=new C,An=new C,Cn=new C,zn=new C,Xi=new C,Ms=new C,Ss=new C,Vn=new C;function Nr(i,t,e,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){Vn.fromArray(i,r);const o=s.x*Math.abs(Vn.x)+s.y*Math.abs(Vn.y)+s.z*Math.abs(Vn.z),l=t.dot(Vn),c=e.dot(Vn),h=n.dot(Vn);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}const rh=new ni,Ki=new C,Ur=new C;class ii{constructor(t=new C,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):rh.setFromPoints(t).getCenter(n);let s=0;for(let r=0,a=t.length;r<a;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Ki.subVectors(t,this.center);const e=Ki.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(Ki,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Ur.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Ki.copy(t.center).add(Ur)),this.expandByPoint(Ki.copy(t.center).sub(Ur))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const gn=new C,Or=new C,bs=new C,Rn=new C,Fr=new C,Es=new C,Gr=new C;class dr{constructor(t=new C,e=new C(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,gn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=gn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(gn.copy(this.origin).addScaledVector(this.direction,e),gn.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){Or.copy(t).add(e).multiplyScalar(.5),bs.copy(e).sub(t).normalize(),Rn.copy(this.origin).sub(Or);const r=t.distanceTo(e)*.5,a=-this.direction.dot(bs),o=Rn.dot(this.direction),l=-Rn.dot(bs),c=Rn.lengthSq(),h=Math.abs(1-a*a);let u,d,p,g;if(h>0)if(u=a*l-o,d=a*o-l,g=r*h,u>=0)if(d>=-g)if(d<=g){const _=1/h;u*=_,d*=_,p=u*(u+a*d+2*o)+d*(a*u+d+2*l)+c}else d=r,u=Math.max(0,-(a*d+o)),p=-u*u+d*(d+2*l)+c;else d=-r,u=Math.max(0,-(a*d+o)),p=-u*u+d*(d+2*l)+c;else d<=-g?(u=Math.max(0,-(-a*r+o)),d=u>0?-r:Math.min(Math.max(-r,-l),r),p=-u*u+d*(d+2*l)+c):d<=g?(u=0,d=Math.min(Math.max(-r,-l),r),p=d*(d+2*l)+c):(u=Math.max(0,-(a*r+o)),d=u>0?r:Math.min(Math.max(-r,-l),r),p=-u*u+d*(d+2*l)+c);else d=a>0?-r:r,u=Math.max(0,-(a*d+o)),p=-u*u+d*(d+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(Or).addScaledVector(bs,d),p}intersectSphere(t,e){gn.subVectors(t.center,this.origin);const n=gn.dot(this.direction),s=gn.dot(gn)-n*n,r=t.radius*t.radius;if(s>r)return null;const a=Math.sqrt(r-s),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,e):this.at(o,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,a,o,l;const c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(n=(t.min.x-d.x)*c,s=(t.max.x-d.x)*c):(n=(t.max.x-d.x)*c,s=(t.min.x-d.x)*c),h>=0?(r=(t.min.y-d.y)*h,a=(t.max.y-d.y)*h):(r=(t.max.y-d.y)*h,a=(t.min.y-d.y)*h),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),u>=0?(o=(t.min.z-d.z)*u,l=(t.max.z-d.z)*u):(o=(t.max.z-d.z)*u,l=(t.min.z-d.z)*u),n>l||o>s)||((o>n||n!==n)&&(n=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,gn)!==null}intersectTriangle(t,e,n,s,r){Fr.subVectors(e,t),Es.subVectors(n,t),Gr.crossVectors(Fr,Es);let a=this.direction.dot(Gr),o;if(a>0){if(s)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Rn.subVectors(this.origin,t);const l=o*this.direction.dot(Es.crossVectors(Rn,Es));if(l<0)return null;const c=o*this.direction.dot(Fr.cross(Rn));if(c<0||l+c>a)return null;const h=-o*Rn.dot(Gr);return h<0?null:this.at(h/a,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class se{constructor(t,e,n,s,r,a,o,l,c,h,u,d,p,g,_,m){se.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,l,c,h,u,d,p,g,_,m)}set(t,e,n,s,r,a,o,l,c,h,u,d,p,g,_,m){const f=this.elements;return f[0]=t,f[4]=e,f[8]=n,f[12]=s,f[1]=r,f[5]=a,f[9]=o,f[13]=l,f[2]=c,f[6]=h,f[10]=u,f[14]=d,f[3]=p,f[7]=g,f[11]=_,f[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new se().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,s=1/hi.setFromMatrixColumn(t,0).length(),r=1/hi.setFromMatrixColumn(t,1).length(),a=1/hi.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,s=t.y,r=t.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(t.order==="XYZ"){const d=a*h,p=a*u,g=o*h,_=o*u;e[0]=l*h,e[4]=-l*u,e[8]=c,e[1]=p+g*c,e[5]=d-_*c,e[9]=-o*l,e[2]=_-d*c,e[6]=g+p*c,e[10]=a*l}else if(t.order==="YXZ"){const d=l*h,p=l*u,g=c*h,_=c*u;e[0]=d+_*o,e[4]=g*o-p,e[8]=a*c,e[1]=a*u,e[5]=a*h,e[9]=-o,e[2]=p*o-g,e[6]=_+d*o,e[10]=a*l}else if(t.order==="ZXY"){const d=l*h,p=l*u,g=c*h,_=c*u;e[0]=d-_*o,e[4]=-a*u,e[8]=g+p*o,e[1]=p+g*o,e[5]=a*h,e[9]=_-d*o,e[2]=-a*c,e[6]=o,e[10]=a*l}else if(t.order==="ZYX"){const d=a*h,p=a*u,g=o*h,_=o*u;e[0]=l*h,e[4]=g*c-p,e[8]=d*c+_,e[1]=l*u,e[5]=_*c+d,e[9]=p*c-g,e[2]=-c,e[6]=o*l,e[10]=a*l}else if(t.order==="YZX"){const d=a*l,p=a*c,g=o*l,_=o*c;e[0]=l*h,e[4]=_-d*u,e[8]=g*u+p,e[1]=u,e[5]=a*h,e[9]=-o*h,e[2]=-c*h,e[6]=p*u+g,e[10]=d-_*u}else if(t.order==="XZY"){const d=a*l,p=a*c,g=o*l,_=o*c;e[0]=l*h,e[4]=-u,e[8]=c*h,e[1]=d*u+_,e[5]=a*h,e[9]=p*u-g,e[2]=g*u-p,e[6]=o*h,e[10]=_*u+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(ah,t,oh)}lookAt(t,e,n){const s=this.elements;return qe.subVectors(t,e),qe.lengthSq()===0&&(qe.z=1),qe.normalize(),Pn.crossVectors(n,qe),Pn.lengthSq()===0&&(Math.abs(n.z)===1?qe.x+=1e-4:qe.z+=1e-4,qe.normalize(),Pn.crossVectors(n,qe)),Pn.normalize(),Ts.crossVectors(qe,Pn),s[0]=Pn.x,s[4]=Ts.x,s[8]=qe.x,s[1]=Pn.y,s[5]=Ts.y,s[9]=qe.y,s[2]=Pn.z,s[6]=Ts.z,s[10]=qe.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],h=n[1],u=n[5],d=n[9],p=n[13],g=n[2],_=n[6],m=n[10],f=n[14],x=n[3],v=n[7],y=n[11],R=n[15],w=s[0],A=s[4],N=s[8],S=s[12],b=s[1],O=s[5],H=s[9],U=s[13],L=s[2],D=s[6],G=s[10],X=s[14],Y=s[3],j=s[7],K=s[11],it=s[15];return r[0]=a*w+o*b+l*L+c*Y,r[4]=a*A+o*O+l*D+c*j,r[8]=a*N+o*H+l*G+c*K,r[12]=a*S+o*U+l*X+c*it,r[1]=h*w+u*b+d*L+p*Y,r[5]=h*A+u*O+d*D+p*j,r[9]=h*N+u*H+d*G+p*K,r[13]=h*S+u*U+d*X+p*it,r[2]=g*w+_*b+m*L+f*Y,r[6]=g*A+_*O+m*D+f*j,r[10]=g*N+_*H+m*G+f*K,r[14]=g*S+_*U+m*X+f*it,r[3]=x*w+v*b+y*L+R*Y,r[7]=x*A+v*O+y*D+R*j,r[11]=x*N+v*H+y*G+R*K,r[15]=x*S+v*U+y*X+R*it,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],a=t[1],o=t[5],l=t[9],c=t[13],h=t[2],u=t[6],d=t[10],p=t[14],g=t[3],_=t[7],m=t[11],f=t[15];return g*(+r*l*u-s*c*u-r*o*d+n*c*d+s*o*p-n*l*p)+_*(+e*l*p-e*c*d+r*a*d-s*a*p+s*c*h-r*l*h)+m*(+e*c*u-e*o*p-r*a*u+n*a*p+r*o*h-n*c*h)+f*(-s*o*h-e*l*u+e*o*d+s*a*u-n*a*d+n*l*h)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],u=t[9],d=t[10],p=t[11],g=t[12],_=t[13],m=t[14],f=t[15],x=u*m*c-_*d*c+_*l*p-o*m*p-u*l*f+o*d*f,v=g*d*c-h*m*c-g*l*p+a*m*p+h*l*f-a*d*f,y=h*_*c-g*u*c+g*o*p-a*_*p-h*o*f+a*u*f,R=g*u*l-h*_*l-g*o*d+a*_*d+h*o*m-a*u*m,w=e*x+n*v+s*y+r*R;if(w===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const A=1/w;return t[0]=x*A,t[1]=(_*d*r-u*m*r-_*s*p+n*m*p+u*s*f-n*d*f)*A,t[2]=(o*m*r-_*l*r+_*s*c-n*m*c-o*s*f+n*l*f)*A,t[3]=(u*l*r-o*d*r-u*s*c+n*d*c+o*s*p-n*l*p)*A,t[4]=v*A,t[5]=(h*m*r-g*d*r+g*s*p-e*m*p-h*s*f+e*d*f)*A,t[6]=(g*l*r-a*m*r-g*s*c+e*m*c+a*s*f-e*l*f)*A,t[7]=(a*d*r-h*l*r+h*s*c-e*d*c-a*s*p+e*l*p)*A,t[8]=y*A,t[9]=(g*u*r-h*_*r-g*n*p+e*_*p+h*n*f-e*u*f)*A,t[10]=(a*_*r-g*o*r+g*n*c-e*_*c-a*n*f+e*o*f)*A,t[11]=(h*o*r-a*u*r-h*n*c+e*u*c+a*n*p-e*o*p)*A,t[12]=R*A,t[13]=(h*_*s-g*u*s+g*n*d-e*_*d-h*n*m+e*u*m)*A,t[14]=(g*o*s-a*_*s-g*n*l+e*_*l+a*n*m-e*o*m)*A,t[15]=(a*u*s-h*o*s+h*n*l-e*u*l-a*n*d+e*o*d)*A,this}scale(t){const e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),s=Math.sin(e),r=1-n,a=t.x,o=t.y,l=t.z,c=r*a,h=r*o;return this.set(c*a+n,c*o-s*l,c*l+s*o,0,c*o+s*l,h*o+n,h*l-s*a,0,c*l-s*o,h*l+s*a,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,a){return this.set(1,n,r,0,t,1,a,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){const s=this.elements,r=e._x,a=e._y,o=e._z,l=e._w,c=r+r,h=a+a,u=o+o,d=r*c,p=r*h,g=r*u,_=a*h,m=a*u,f=o*u,x=l*c,v=l*h,y=l*u,R=n.x,w=n.y,A=n.z;return s[0]=(1-(_+f))*R,s[1]=(p+y)*R,s[2]=(g-v)*R,s[3]=0,s[4]=(p-y)*w,s[5]=(1-(d+f))*w,s[6]=(m+x)*w,s[7]=0,s[8]=(g+v)*A,s[9]=(m-x)*A,s[10]=(1-(d+_))*A,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){const s=this.elements;let r=hi.set(s[0],s[1],s[2]).length();const a=hi.set(s[4],s[5],s[6]).length(),o=hi.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],tn.copy(this);const c=1/r,h=1/a,u=1/o;return tn.elements[0]*=c,tn.elements[1]*=c,tn.elements[2]*=c,tn.elements[4]*=h,tn.elements[5]*=h,tn.elements[6]*=h,tn.elements[8]*=u,tn.elements[9]*=u,tn.elements[10]*=u,e.setFromRotationMatrix(tn),n.x=r,n.y=a,n.z=o,this}makePerspective(t,e,n,s,r,a,o=Mn){const l=this.elements,c=2*r/(e-t),h=2*r/(n-s),u=(e+t)/(e-t),d=(n+s)/(n-s);let p,g;if(o===Mn)p=-(a+r)/(a-r),g=-2*a*r/(a-r);else if(o===rr)p=-a/(a-r),g=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=h,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,s,r,a,o=Mn){const l=this.elements,c=1/(e-t),h=1/(n-s),u=1/(a-r),d=(e+t)*c,p=(n+s)*h;let g,_;if(o===Mn)g=(a+r)*u,_=-2*u;else if(o===rr)g=r*u,_=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=_,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const hi=new C,tn=new se,ah=new C(0,0,0),oh=new C(1,1,1),Pn=new C,Ts=new C,qe=new C,Go=new se,Bo=new fs;class fr{constructor(t=0,e=0,n=0,s=fr.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const s=t.elements,r=s[0],a=s[4],o=s[8],l=s[1],c=s[5],h=s[9],u=s[2],d=s[6],p=s[10];switch(e){case"XYZ":this._y=Math.asin(Te(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,p),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Te(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(Te(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,p),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Te(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,p),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Te(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-Te(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Go.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Go,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Bo.setFromEuler(this),this.setFromQuaternion(Bo,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}fr.DEFAULT_ORDER="XYZ";class Fa{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let lh=0;const Ho=new C,di=new fs,_n=new se,ws=new C,Yi=new C,ch=new C,uh=new fs,ko=new C(1,0,0),zo=new C(0,1,0),Vo=new C(0,0,1),hh={type:"added"},dh={type:"removed"};class Pe extends ki{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:lh++}),this.uuid=zi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Pe.DEFAULT_UP.clone();const t=new C,e=new fr,n=new fs,s=new C(1,1,1);function r(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new se},normalMatrix:{value:new qt}}),this.matrix=new se,this.matrixWorld=new se,this.matrixAutoUpdate=Pe.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Pe.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Fa,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return di.setFromAxisAngle(t,e),this.quaternion.multiply(di),this}rotateOnWorldAxis(t,e){return di.setFromAxisAngle(t,e),this.quaternion.premultiply(di),this}rotateX(t){return this.rotateOnAxis(ko,t)}rotateY(t){return this.rotateOnAxis(zo,t)}rotateZ(t){return this.rotateOnAxis(Vo,t)}translateOnAxis(t,e){return Ho.copy(t).applyQuaternion(this.quaternion),this.position.add(Ho.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(ko,t)}translateY(t){return this.translateOnAxis(zo,t)}translateZ(t){return this.translateOnAxis(Vo,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(_n.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?ws.copy(t):ws.set(t,e,n);const s=this.parent;this.updateWorldMatrix(!0,!1),Yi.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?_n.lookAt(Yi,ws,this.up):_n.lookAt(ws,Yi,this.up),this.quaternion.setFromRotationMatrix(_n),s&&(_n.extractRotation(s.matrixWorld),di.setFromRotationMatrix(_n),this.quaternion.premultiply(di.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.parent!==null&&t.parent.remove(t),t.parent=this,this.children.push(t),t.dispatchEvent(hh)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(dh)),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),_n.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),_n.multiply(t.parent.matrixWorld)),t.applyMatrix4(_n),this.add(t),t.updateWorldMatrix(!1,!0),this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){const a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Yi,t,ch),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Yi,uh,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,s=e.length;n<s;n++){const r=e[n];(r.matrixWorldAutoUpdate===!0||t===!0)&&r.updateMatrixWorld(t)}}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),e===!0){const s=this.children;for(let r=0,a=s.length;r<a;r++){const o=s[r];o.matrixWorldAutoUpdate===!0&&o.updateWorldMatrix(!1,!0)}}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),s.maxGeometryCount=this._maxGeometryCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const u=l[c];r(t.shapes,u)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(t.materials,this.material[l]));s.material=o}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];s.animations.push(r(t.animations,l))}}if(e){const o=a(t.geometries),l=a(t.materials),c=a(t.textures),h=a(t.images),u=a(t.shapes),d=a(t.skeletons),p=a(t.animations),g=a(t.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),p.length>0&&(n.animations=p),g.length>0&&(n.nodes=g)}return n.object=s,n;function a(o){const l=[];for(const c in o){const h=o[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const s=t.children[n];this.add(s.clone())}return this}}Pe.DEFAULT_UP=new C(0,1,0);Pe.DEFAULT_MATRIX_AUTO_UPDATE=!0;Pe.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const en=new C,vn=new C,Br=new C,xn=new C,fi=new C,pi=new C,Wo=new C,Hr=new C,kr=new C,zr=new C;let As=!1;class nn{constructor(t=new C,e=new C,n=new C){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),en.subVectors(t,e),s.cross(en);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){en.subVectors(s,e),vn.subVectors(n,e),Br.subVectors(t,e);const a=en.dot(en),o=en.dot(vn),l=en.dot(Br),c=vn.dot(vn),h=vn.dot(Br),u=a*c-o*o;if(u===0)return r.set(0,0,0),null;const d=1/u,p=(c*l-o*h)*d,g=(a*h-o*l)*d;return r.set(1-p-g,g,p)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,xn)===null?!1:xn.x>=0&&xn.y>=0&&xn.x+xn.y<=1}static getUV(t,e,n,s,r,a,o,l){return As===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),As=!0),this.getInterpolation(t,e,n,s,r,a,o,l)}static getInterpolation(t,e,n,s,r,a,o,l){return this.getBarycoord(t,e,n,s,xn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,xn.x),l.addScaledVector(a,xn.y),l.addScaledVector(o,xn.z),l)}static isFrontFacing(t,e,n,s){return en.subVectors(n,e),vn.subVectors(t,e),en.cross(vn).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return en.subVectors(this.c,this.b),vn.subVectors(this.a,this.b),en.cross(vn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return nn.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return nn.getBarycoord(t,this.a,this.b,this.c,e)}getUV(t,e,n,s,r){return As===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),As=!0),nn.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}getInterpolation(t,e,n,s,r){return nn.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return nn.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return nn.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,s=this.b,r=this.c;let a,o;fi.subVectors(s,n),pi.subVectors(r,n),Hr.subVectors(t,n);const l=fi.dot(Hr),c=pi.dot(Hr);if(l<=0&&c<=0)return e.copy(n);kr.subVectors(t,s);const h=fi.dot(kr),u=pi.dot(kr);if(h>=0&&u<=h)return e.copy(s);const d=l*u-h*c;if(d<=0&&l>=0&&h<=0)return a=l/(l-h),e.copy(n).addScaledVector(fi,a);zr.subVectors(t,r);const p=fi.dot(zr),g=pi.dot(zr);if(g>=0&&p<=g)return e.copy(r);const _=p*c-l*g;if(_<=0&&c>=0&&g<=0)return o=c/(c-g),e.copy(n).addScaledVector(pi,o);const m=h*g-p*u;if(m<=0&&u-h>=0&&p-g>=0)return Wo.subVectors(r,s),o=(u-h)/(u-h+(p-g)),e.copy(s).addScaledVector(Wo,o);const f=1/(m+_+d);return a=_*f,o=d*f,e.copy(n).addScaledVector(fi,a).addScaledVector(pi,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const fc={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ln={h:0,s:0,l:0},Cs={h:0,s:0,l:0};function Vr(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}class Ct{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=ge){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Zt.toWorkingColorSpace(this,e),this}setRGB(t,e,n,s=Zt.workingColorSpace){return this.r=t,this.g=e,this.b=n,Zt.toWorkingColorSpace(this,s),this}setHSL(t,e,n,s=Zt.workingColorSpace){if(t=Ju(t,1),e=Te(e,0,1),n=Te(n,0,1),e===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+e):n+e-n*e,a=2*n-r;this.r=Vr(a,r,t+1/3),this.g=Vr(a,r,t),this.b=Vr(a,r,t-1/3)}return Zt.toWorkingColorSpace(this,s),this}setStyle(t,e=ge){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=ge){const n=fc[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Pi(t.r),this.g=Pi(t.g),this.b=Pi(t.b),this}copyLinearToSRGB(t){return this.r=Lr(t.r),this.g=Lr(t.g),this.b=Lr(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=ge){return Zt.fromWorkingColorSpace(De.copy(this),t),Math.round(Te(De.r*255,0,255))*65536+Math.round(Te(De.g*255,0,255))*256+Math.round(Te(De.b*255,0,255))}getHexString(t=ge){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Zt.workingColorSpace){Zt.fromWorkingColorSpace(De.copy(this),e);const n=De.r,s=De.g,r=De.b,a=Math.max(n,s,r),o=Math.min(n,s,r);let l,c;const h=(o+a)/2;if(o===a)l=0,c=0;else{const u=a-o;switch(c=h<=.5?u/(a+o):u/(2-a-o),a){case n:l=(s-r)/u+(s<r?6:0);break;case s:l=(r-n)/u+2;break;case r:l=(n-s)/u+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=Zt.workingColorSpace){return Zt.fromWorkingColorSpace(De.copy(this),e),t.r=De.r,t.g=De.g,t.b=De.b,t}getStyle(t=ge){Zt.fromWorkingColorSpace(De.copy(this),t);const e=De.r,n=De.g,s=De.b;return t!==ge?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(Ln),this.setHSL(Ln.h+t,Ln.s+e,Ln.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Ln),t.getHSL(Cs);const n=Rr(Ln.h,Cs.h,e),s=Rr(Ln.s,Cs.s,e),r=Rr(Ln.l,Cs.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const De=new Ct;Ct.NAMES=fc;let fh=0;class si extends ki{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:fh++}),this.uuid=zi(),this.name="",this.type="Material",this.blending=Ri,this.side=Gn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=da,this.blendDst=fa,this.blendEquation=jn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ct(0,0,0),this.blendAlpha=0,this.depthFunc=er,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Po,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ai,this.stencilZFail=ai,this.stencilZPass=ai,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Ri&&(n.blending=this.blending),this.side!==Gn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==da&&(n.blendSrc=this.blendSrc),this.blendDst!==fa&&(n.blendDst=this.blendDst),this.blendEquation!==jn&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==er&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Po&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ai&&(n.stencilFail=this.stencilFail),this.stencilZFail!==ai&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==ai&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){const a=[];for(const o in r){const l=r[o];delete l.metadata,a.push(l)}return a}if(e){const r=s(t.textures),a=s(t.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class jt extends si{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ct(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=$l,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const _e=new C,Rs=new st;class Ae{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Lo,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=Un,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}get updateRange(){return console.warn("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Rs.fromBufferAttribute(this,e),Rs.applyMatrix3(t),this.setXY(e,Rs.x,Rs.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)_e.fromBufferAttribute(this,e),_e.applyMatrix3(t),this.setXYZ(e,_e.x,_e.y,_e.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)_e.fromBufferAttribute(this,e),_e.applyMatrix4(t),this.setXYZ(e,_e.x,_e.y,_e.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)_e.fromBufferAttribute(this,e),_e.applyNormalMatrix(t),this.setXYZ(e,_e.x,_e.y,_e.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)_e.fromBufferAttribute(this,e),_e.transformDirection(t),this.setXYZ(e,_e.x,_e.y,_e.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=qi(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=He(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=qi(e,this.array)),e}setX(t,e){return this.normalized&&(e=He(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=qi(e,this.array)),e}setY(t,e){return this.normalized&&(e=He(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=qi(e,this.array)),e}setZ(t,e){return this.normalized&&(e=He(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=qi(e,this.array)),e}setW(t,e){return this.normalized&&(e=He(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=He(e,this.array),n=He(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=He(e,this.array),n=He(n,this.array),s=He(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=He(e,this.array),n=He(n,this.array),s=He(s,this.array),r=He(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Lo&&(t.usage=this.usage),t}}class pc extends Ae{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class mc extends Ae{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class Kt extends Ae{constructor(t,e,n){super(new Float32Array(t),e,n)}}let ph=0;const $e=new se,Wr=new Pe,mi=new C,Xe=new ni,ji=new ni,be=new C;class oe extends ki{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:ph++}),this.uuid=zi(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(cc(t)?mc:pc)(t,1):this.index=t,this}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new qt().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return $e.makeRotationFromQuaternion(t),this.applyMatrix4($e),this}rotateX(t){return $e.makeRotationX(t),this.applyMatrix4($e),this}rotateY(t){return $e.makeRotationY(t),this.applyMatrix4($e),this}rotateZ(t){return $e.makeRotationZ(t),this.applyMatrix4($e),this}translate(t,e,n){return $e.makeTranslation(t,e,n),this.applyMatrix4($e),this}scale(t,e,n){return $e.makeScale(t,e,n),this.applyMatrix4($e),this}lookAt(t){return Wr.lookAt(t),Wr.updateMatrix(),this.applyMatrix4(Wr.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(mi).negate(),this.translate(mi.x,mi.y,mi.z),this}setFromPoints(t){const e=[];for(let n=0,s=t.length;n<s;n++){const r=t[n];e.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new Kt(e,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ni);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new C(-1/0,-1/0,-1/0),new C(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){const r=e[n];Xe.setFromBufferAttribute(r),this.morphTargetsRelative?(be.addVectors(this.boundingBox.min,Xe.min),this.boundingBox.expandByPoint(be),be.addVectors(this.boundingBox.max,Xe.max),this.boundingBox.expandByPoint(be)):(this.boundingBox.expandByPoint(Xe.min),this.boundingBox.expandByPoint(Xe.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ii);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new C,1/0);return}if(t){const n=this.boundingSphere.center;if(Xe.setFromBufferAttribute(t),e)for(let r=0,a=e.length;r<a;r++){const o=e[r];ji.setFromBufferAttribute(o),this.morphTargetsRelative?(be.addVectors(Xe.min,ji.min),Xe.expandByPoint(be),be.addVectors(Xe.max,ji.max),Xe.expandByPoint(be)):(Xe.expandByPoint(ji.min),Xe.expandByPoint(ji.max))}Xe.getCenter(n);let s=0;for(let r=0,a=t.count;r<a;r++)be.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(be));if(e)for(let r=0,a=e.length;r<a;r++){const o=e[r],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)be.fromBufferAttribute(o,c),l&&(mi.fromBufferAttribute(t,c),be.add(mi)),s=Math.max(s,n.distanceToSquared(be))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.array,s=e.position.array,r=e.normal.array,a=e.uv.array,o=s.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ae(new Float32Array(4*o),4));const l=this.getAttribute("tangent").array,c=[],h=[];for(let b=0;b<o;b++)c[b]=new C,h[b]=new C;const u=new C,d=new C,p=new C,g=new st,_=new st,m=new st,f=new C,x=new C;function v(b,O,H){u.fromArray(s,b*3),d.fromArray(s,O*3),p.fromArray(s,H*3),g.fromArray(a,b*2),_.fromArray(a,O*2),m.fromArray(a,H*2),d.sub(u),p.sub(u),_.sub(g),m.sub(g);const U=1/(_.x*m.y-m.x*_.y);isFinite(U)&&(f.copy(d).multiplyScalar(m.y).addScaledVector(p,-_.y).multiplyScalar(U),x.copy(p).multiplyScalar(_.x).addScaledVector(d,-m.x).multiplyScalar(U),c[b].add(f),c[O].add(f),c[H].add(f),h[b].add(x),h[O].add(x),h[H].add(x))}let y=this.groups;y.length===0&&(y=[{start:0,count:n.length}]);for(let b=0,O=y.length;b<O;++b){const H=y[b],U=H.start,L=H.count;for(let D=U,G=U+L;D<G;D+=3)v(n[D+0],n[D+1],n[D+2])}const R=new C,w=new C,A=new C,N=new C;function S(b){A.fromArray(r,b*3),N.copy(A);const O=c[b];R.copy(O),R.sub(A.multiplyScalar(A.dot(O))).normalize(),w.crossVectors(N,O);const U=w.dot(h[b])<0?-1:1;l[b*4]=R.x,l[b*4+1]=R.y,l[b*4+2]=R.z,l[b*4+3]=U}for(let b=0,O=y.length;b<O;++b){const H=y[b],U=H.start,L=H.count;for(let D=U,G=U+L;D<G;D+=3)S(n[D+0]),S(n[D+1]),S(n[D+2])}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Ae(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let d=0,p=n.count;d<p;d++)n.setXYZ(d,0,0,0);const s=new C,r=new C,a=new C,o=new C,l=new C,c=new C,h=new C,u=new C;if(t)for(let d=0,p=t.count;d<p;d+=3){const g=t.getX(d+0),_=t.getX(d+1),m=t.getX(d+2);s.fromBufferAttribute(e,g),r.fromBufferAttribute(e,_),a.fromBufferAttribute(e,m),h.subVectors(a,r),u.subVectors(s,r),h.cross(u),o.fromBufferAttribute(n,g),l.fromBufferAttribute(n,_),c.fromBufferAttribute(n,m),o.add(h),l.add(h),c.add(h),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(_,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let d=0,p=e.count;d<p;d+=3)s.fromBufferAttribute(e,d+0),r.fromBufferAttribute(e,d+1),a.fromBufferAttribute(e,d+2),h.subVectors(a,r),u.subVectors(s,r),h.cross(u),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)be.fromBufferAttribute(t,e),be.normalize(),t.setXYZ(e,be.x,be.y,be.z)}toNonIndexed(){function t(o,l){const c=o.array,h=o.itemSize,u=o.normalized,d=new c.constructor(l.length*h);let p=0,g=0;for(let _=0,m=l.length;_<m;_++){o.isInterleavedBufferAttribute?p=l[_]*o.data.stride+o.offset:p=l[_]*h;for(let f=0;f<h;f++)d[g++]=c[p++]}return new Ae(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new oe,n=this.index.array,s=this.attributes;for(const o in s){const l=s[o],c=t(l,n);e.setAttribute(o,c)}const r=this.morphAttributes;for(const o in r){const l=[],c=r[o];for(let h=0,u=c.length;h<u;h++){const d=c[h],p=t(d,n);l.push(p)}e.morphAttributes[o]=l}e.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const l in n){const c=n[l];t.data.attributes[l]=c.toJSON(t.data)}const s={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let u=0,d=c.length;u<d;u++){const p=c[u];h.push(p.toJSON(t.data))}h.length>0&&(s[l]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(t.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone(e));const s=t.attributes;for(const c in s){const h=s[c];this.setAttribute(c,h.clone(e))}const r=t.morphAttributes;for(const c in r){const h=[],u=r[c];for(let d=0,p=u.length;d<p;d++)h.push(u[d].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;const a=t.groups;for(let c=0,h=a.length;c<h;c++){const u=a[c];this.addGroup(u.start,u.count,u.materialIndex)}const o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const qo=new se,Wn=new dr,Ps=new ii,Xo=new C,gi=new C,_i=new C,vi=new C,qr=new C,Ls=new C,Is=new st,Ds=new st,Ns=new st,Ko=new C,Yo=new C,jo=new C,Us=new C,Os=new C;class rt extends Pe{constructor(t=new oe,e=new jt){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(t,e){const n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;e.fromBufferAttribute(s,t);const o=this.morphTargetInfluences;if(r&&o){Ls.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const h=o[l],u=r[l];h!==0&&(qr.fromBufferAttribute(u,t),a?Ls.addScaledVector(qr,h):Ls.addScaledVector(qr.sub(e),h))}e.add(Ls)}return e}raycast(t,e){const n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Ps.copy(n.boundingSphere),Ps.applyMatrix4(r),Wn.copy(t.ray).recast(t.near),!(Ps.containsPoint(Wn.origin)===!1&&(Wn.intersectSphere(Ps,Xo)===null||Wn.origin.distanceToSquared(Xo)>(t.far-t.near)**2))&&(qo.copy(r).invert(),Wn.copy(t.ray).applyMatrix4(qo),!(n.boundingBox!==null&&Wn.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Wn)))}_computeIntersections(t,e,n){let s;const r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,d=r.groups,p=r.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,_=d.length;g<_;g++){const m=d[g],f=a[m.materialIndex],x=Math.max(m.start,p.start),v=Math.min(o.count,Math.min(m.start+m.count,p.start+p.count));for(let y=x,R=v;y<R;y+=3){const w=o.getX(y),A=o.getX(y+1),N=o.getX(y+2);s=Fs(this,f,t,n,c,h,u,w,A,N),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{const g=Math.max(0,p.start),_=Math.min(o.count,p.start+p.count);for(let m=g,f=_;m<f;m+=3){const x=o.getX(m),v=o.getX(m+1),y=o.getX(m+2);s=Fs(this,a,t,n,c,h,u,x,v,y),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let g=0,_=d.length;g<_;g++){const m=d[g],f=a[m.materialIndex],x=Math.max(m.start,p.start),v=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let y=x,R=v;y<R;y+=3){const w=y,A=y+1,N=y+2;s=Fs(this,f,t,n,c,h,u,w,A,N),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{const g=Math.max(0,p.start),_=Math.min(l.count,p.start+p.count);for(let m=g,f=_;m<f;m+=3){const x=m,v=m+1,y=m+2;s=Fs(this,a,t,n,c,h,u,x,v,y),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}}}function mh(i,t,e,n,s,r,a,o){let l;if(t.side===Re?l=n.intersectTriangle(a,r,s,!0,o):l=n.intersectTriangle(s,r,a,t.side===Gn,o),l===null)return null;Os.copy(o),Os.applyMatrix4(i.matrixWorld);const c=e.ray.origin.distanceTo(Os);return c<e.near||c>e.far?null:{distance:c,point:Os.clone(),object:i}}function Fs(i,t,e,n,s,r,a,o,l,c){i.getVertexPosition(o,gi),i.getVertexPosition(l,_i),i.getVertexPosition(c,vi);const h=mh(i,t,e,n,gi,_i,vi,Us);if(h){s&&(Is.fromBufferAttribute(s,o),Ds.fromBufferAttribute(s,l),Ns.fromBufferAttribute(s,c),h.uv=nn.getInterpolation(Us,gi,_i,vi,Is,Ds,Ns,new st)),r&&(Is.fromBufferAttribute(r,o),Ds.fromBufferAttribute(r,l),Ns.fromBufferAttribute(r,c),h.uv1=nn.getInterpolation(Us,gi,_i,vi,Is,Ds,Ns,new st),h.uv2=h.uv1),a&&(Ko.fromBufferAttribute(a,o),Yo.fromBufferAttribute(a,l),jo.fromBufferAttribute(a,c),h.normal=nn.getInterpolation(Us,gi,_i,vi,Ko,Yo,jo,new C),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const u={a:o,b:l,c,normal:new C,materialIndex:0};nn.getNormal(gi,_i,vi,u.normal),h.face=u}return h}class Ne extends oe{constructor(t=1,e=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};const o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);const l=[],c=[],h=[],u=[];let d=0,p=0;g("z","y","x",-1,-1,n,e,t,a,r,0),g("z","y","x",1,-1,n,e,-t,a,r,1),g("x","z","y",1,1,t,n,e,s,a,2),g("x","z","y",1,-1,t,n,-e,s,a,3),g("x","y","z",1,-1,t,e,n,s,r,4),g("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new Kt(c,3)),this.setAttribute("normal",new Kt(h,3)),this.setAttribute("uv",new Kt(u,2));function g(_,m,f,x,v,y,R,w,A,N,S){const b=y/A,O=R/N,H=y/2,U=R/2,L=w/2,D=A+1,G=N+1;let X=0,Y=0;const j=new C;for(let K=0;K<G;K++){const it=K*O-U;for(let at=0;at<D;at++){const W=at*b-H;j[_]=W*x,j[m]=it*v,j[f]=L,c.push(j.x,j.y,j.z),j[_]=0,j[m]=0,j[f]=w>0?1:-1,h.push(j.x,j.y,j.z),u.push(at/A),u.push(1-K/N),X+=1}}for(let K=0;K<N;K++)for(let it=0;it<A;it++){const at=d+it+D*K,W=d+it+D*(K+1),Z=d+(it+1)+D*(K+1),ot=d+(it+1)+D*K;l.push(at,W,ot),l.push(W,Z,ot),Y+=6}o.addGroup(p,Y,S),p+=Y,d+=X}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ne(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Oi(i){const t={};for(const e in i){t[e]={};for(const n in i[e]){const s=i[e][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone():Array.isArray(s)?t[e][n]=s.slice():t[e][n]=s}}return t}function Ge(i){const t={};for(let e=0;e<i.length;e++){const n=Oi(i[e]);for(const s in n)t[s]=n[s]}return t}function gh(i){const t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function gc(i){return i.getRenderTarget()===null?i.outputColorSpace:Zt.workingColorSpace}const or={clone:Oi,merge:Ge};var _h=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,vh=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class we extends si{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=_h,this.fragmentShader=vh,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Oi(t.uniforms),this.uniformsGroups=gh(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const s in this.uniforms){const a=this.uniforms[s].value;a&&a.isTexture?e.uniforms[s]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[s]={type:"m4",value:a.toArray()}:e.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class _c extends Pe{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new se,this.projectionMatrix=new se,this.projectionMatrixInverse=new se,this.coordinateSystem=Mn}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class Ke extends _c{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=xa*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Cr*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return xa*2*Math.atan(Math.tan(Cr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(t,e,n,s,r,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(Cr*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/l,e-=a.offsetY*n/c,s*=a.width/l,n*=a.height/c}const o=this.filmOffset;o!==0&&(r+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const xi=-90,yi=1;class xh extends Pe{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new Ke(xi,yi,t,e);s.layers=this.layers,this.add(s);const r=new Ke(xi,yi,t,e);r.layers=this.layers,this.add(r);const a=new Ke(xi,yi,t,e);a.layers=this.layers,this.add(a);const o=new Ke(xi,yi,t,e);o.layers=this.layers,this.add(o);const l=new Ke(xi,yi,t,e);l.layers=this.layers,this.add(l);const c=new Ke(xi,yi,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,s,r,a,o,l]=e;for(const c of e)this.remove(c);if(t===Mn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===rr)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,a,o,l,c,h]=this.children,u=t.getRenderTarget(),d=t.getActiveCubeFace(),p=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;const _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,s),t.render(e,r),t.setRenderTarget(n,1,s),t.render(e,a),t.setRenderTarget(n,2,s),t.render(e,o),t.setRenderTarget(n,3,s),t.render(e,l),t.setRenderTarget(n,4,s),t.render(e,c),n.texture.generateMipmaps=_,t.setRenderTarget(n,5,s),t.render(e,h),t.setRenderTarget(u,d,p),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class vc extends Ve{constructor(t,e,n,s,r,a,o,l,c,h){t=t!==void 0?t:[],e=e!==void 0?e:Di,super(t,e,n,s,r,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class yh extends ln{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];e.encoding!==void 0&&(ns("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),e.colorSpace=e.encoding===ti?ge:Je),this.texture=new vc(s,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:Ze}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Ne(5,5,5),r=new we({name:"CubemapFromEquirect",uniforms:Oi(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Re,blending:Sn});r.uniforms.tEquirect.value=e;const a=new rt(s,r),o=e.minFilter;return e.minFilter===ls&&(e.minFilter=Ze),new xh(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e,n,s){const r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,s);t.setRenderTarget(r)}}const Xr=new C,Mh=new C,Sh=new qt;class Xn{constructor(t=new C(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const s=Xr.subVectors(n,e).cross(Mh.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(Xr),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||Sh.getNormalMatrix(t),s=this.coplanarPoint(Xr).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const qn=new ii,Gs=new C;class Ga{constructor(t=new Xn,e=new Xn,n=new Xn,s=new Xn,r=new Xn,a=new Xn){this.planes=[t,e,n,s,r,a]}set(t,e,n,s,r,a){const o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Mn){const n=this.planes,s=t.elements,r=s[0],a=s[1],o=s[2],l=s[3],c=s[4],h=s[5],u=s[6],d=s[7],p=s[8],g=s[9],_=s[10],m=s[11],f=s[12],x=s[13],v=s[14],y=s[15];if(n[0].setComponents(l-r,d-c,m-p,y-f).normalize(),n[1].setComponents(l+r,d+c,m+p,y+f).normalize(),n[2].setComponents(l+a,d+h,m+g,y+x).normalize(),n[3].setComponents(l-a,d-h,m-g,y-x).normalize(),n[4].setComponents(l-o,d-u,m-_,y-v).normalize(),e===Mn)n[5].setComponents(l+o,d+u,m+_,y+v).normalize();else if(e===rr)n[5].setComponents(o,u,_,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),qn.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),qn.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(qn)}intersectsSprite(t){return qn.center.set(0,0,0),qn.radius=.7071067811865476,qn.applyMatrix4(t.matrixWorld),this.intersectsSphere(qn)}intersectsSphere(t){const e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const s=e[n];if(Gs.x=s.normal.x>0?t.max.x:t.min.x,Gs.y=s.normal.y>0?t.max.y:t.min.y,Gs.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(Gs)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function xc(){let i=null,t=!1,e=null,n=null;function s(r,a){e(r,a),n=i.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function bh(i,t){const e=t.isWebGL2,n=new WeakMap;function s(c,h){const u=c.array,d=c.usage,p=u.byteLength,g=i.createBuffer();i.bindBuffer(h,g),i.bufferData(h,u,d),c.onUploadCallback();let _;if(u instanceof Float32Array)_=i.FLOAT;else if(u instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(e)_=i.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else _=i.UNSIGNED_SHORT;else if(u instanceof Int16Array)_=i.SHORT;else if(u instanceof Uint32Array)_=i.UNSIGNED_INT;else if(u instanceof Int32Array)_=i.INT;else if(u instanceof Int8Array)_=i.BYTE;else if(u instanceof Uint8Array)_=i.UNSIGNED_BYTE;else if(u instanceof Uint8ClampedArray)_=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+u);return{buffer:g,type:_,bytesPerElement:u.BYTES_PER_ELEMENT,version:c.version,size:p}}function r(c,h,u){const d=h.array,p=h._updateRange,g=h.updateRanges;if(i.bindBuffer(u,c),p.count===-1&&g.length===0&&i.bufferSubData(u,0,d),g.length!==0){for(let _=0,m=g.length;_<m;_++){const f=g[_];e?i.bufferSubData(u,f.start*d.BYTES_PER_ELEMENT,d,f.start,f.count):i.bufferSubData(u,f.start*d.BYTES_PER_ELEMENT,d.subarray(f.start,f.start+f.count))}h.clearUpdateRanges()}p.count!==-1&&(e?i.bufferSubData(u,p.offset*d.BYTES_PER_ELEMENT,d,p.offset,p.count):i.bufferSubData(u,p.offset*d.BYTES_PER_ELEMENT,d.subarray(p.offset,p.offset+p.count)),p.count=-1),h.onUploadCallback()}function a(c){return c.isInterleavedBufferAttribute&&(c=c.data),n.get(c)}function o(c){c.isInterleavedBufferAttribute&&(c=c.data);const h=n.get(c);h&&(i.deleteBuffer(h.buffer),n.delete(c))}function l(c,h){if(c.isGLBufferAttribute){const d=n.get(c);(!d||d.version<c.version)&&n.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);const u=n.get(c);if(u===void 0)n.set(c,s(c,h));else if(u.version<c.version){if(u.size!==c.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(u.buffer,c,h),u.version=c.version}}return{get:a,remove:o,update:l}}class Li extends oe{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};const r=t/2,a=e/2,o=Math.floor(n),l=Math.floor(s),c=o+1,h=l+1,u=t/o,d=e/l,p=[],g=[],_=[],m=[];for(let f=0;f<h;f++){const x=f*d-a;for(let v=0;v<c;v++){const y=v*u-r;g.push(y,-x,0),_.push(0,0,1),m.push(v/o),m.push(1-f/l)}}for(let f=0;f<l;f++)for(let x=0;x<o;x++){const v=x+c*f,y=x+c*(f+1),R=x+1+c*(f+1),w=x+1+c*f;p.push(v,y,w),p.push(y,R,w)}this.setIndex(p),this.setAttribute("position",new Kt(g,3)),this.setAttribute("normal",new Kt(_,3)),this.setAttribute("uv",new Kt(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Li(t.width,t.height,t.widthSegments,t.heightSegments)}}var Eh=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Th=`#ifdef USE_ALPHAHASH
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
#endif`,wh=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Ah=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Ch=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,Rh=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Ph=`#ifdef USE_AOMAP
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
#endif`,Lh=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Ih=`#ifdef USE_BATCHING
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
#endif`,Dh=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,Nh=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Uh=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Oh=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Fh=`#ifdef USE_IRIDESCENCE
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
#endif`,Gh=`#ifdef USE_BUMPMAP
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
#endif`,Bh=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Hh=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,kh=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,zh=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Vh=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Wh=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,qh=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,Xh=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,Kh=`#define PI 3.141592653589793
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
} // validated`,Yh=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,jh=`vec3 transformedNormal = objectNormal;
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
#endif`,$h=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Zh=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Jh=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Qh=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,td="gl_FragColor = linearToOutputTexel( gl_FragColor );",ed=`
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
}`,nd=`#ifdef USE_ENVMAP
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
#endif`,id=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,sd=`#ifdef USE_ENVMAP
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
#endif`,rd=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,ad=`#ifdef USE_ENVMAP
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
#endif`,od=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,ld=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,cd=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,ud=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,hd=`#ifdef USE_GRADIENTMAP
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
}`,dd=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,fd=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,pd=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,md=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,gd=`uniform bool receiveShadow;
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
#endif`,_d=`#ifdef USE_ENVMAP
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
#endif`,vd=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,xd=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,yd=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Md=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Sd=`PhysicalMaterial material;
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
#endif`,bd=`struct PhysicalMaterial {
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
}`,Ed=`
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
#endif`,Td=`#if defined( RE_IndirectDiffuse )
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
#endif`,wd=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Ad=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Cd=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Rd=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,Pd=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,Ld=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Id=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Dd=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Nd=`#if defined( USE_POINTS_UV )
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
#endif`,Ud=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Od=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Fd=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Gd=`#ifdef USE_MORPHNORMALS
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
#endif`,Bd=`#ifdef USE_MORPHTARGETS
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
#endif`,Hd=`#ifdef USE_MORPHTARGETS
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
#endif`,kd=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,zd=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Vd=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Wd=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,qd=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Xd=`#ifdef USE_NORMALMAP
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
#endif`,Kd=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Yd=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,jd=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,$d=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Zd=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Jd=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Qd=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,tf=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,ef=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,nf=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,sf=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,rf=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,af=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,of=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,lf=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,cf=`float getShadowMask() {
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
}`,uf=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,hf=`#ifdef USE_SKINNING
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
#endif`,df=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,ff=`#ifdef USE_SKINNING
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
#endif`,pf=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,mf=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,gf=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,_f=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,vf=`#ifdef USE_TRANSMISSION
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
#endif`,xf=`#ifdef USE_TRANSMISSION
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
#endif`,yf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Mf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Sf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,bf=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Ef=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Tf=`uniform sampler2D t2D;
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
}`,wf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Af=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Cf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Rf=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Pf=`#include <common>
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
}`,Lf=`#if DEPTH_PACKING == 3200
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
}`,If=`#define DISTANCE
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
}`,Df=`#define DISTANCE
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
}`,Nf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Uf=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Of=`uniform float scale;
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
}`,Ff=`uniform vec3 diffuse;
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
}`,Gf=`#include <common>
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
}`,Bf=`uniform vec3 diffuse;
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
}`,Hf=`#define LAMBERT
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
}`,kf=`#define LAMBERT
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
}`,zf=`#define MATCAP
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
}`,Vf=`#define MATCAP
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
}`,Wf=`#define NORMAL
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
}`,qf=`#define NORMAL
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
}`,Xf=`#define PHONG
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
}`,Kf=`#define PHONG
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
}`,Yf=`#define STANDARD
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
}`,jf=`#define STANDARD
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
}`,$f=`#define TOON
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
}`,Zf=`#define TOON
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
}`,Jf=`uniform float size;
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
}`,Qf=`uniform vec3 diffuse;
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
}`,tp=`#include <common>
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
}`,ep=`uniform vec3 color;
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
}`,np=`uniform float rotation;
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
}`,ip=`uniform vec3 diffuse;
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
}`,Ht={alphahash_fragment:Eh,alphahash_pars_fragment:Th,alphamap_fragment:wh,alphamap_pars_fragment:Ah,alphatest_fragment:Ch,alphatest_pars_fragment:Rh,aomap_fragment:Ph,aomap_pars_fragment:Lh,batching_pars_vertex:Ih,batching_vertex:Dh,begin_vertex:Nh,beginnormal_vertex:Uh,bsdfs:Oh,iridescence_fragment:Fh,bumpmap_pars_fragment:Gh,clipping_planes_fragment:Bh,clipping_planes_pars_fragment:Hh,clipping_planes_pars_vertex:kh,clipping_planes_vertex:zh,color_fragment:Vh,color_pars_fragment:Wh,color_pars_vertex:qh,color_vertex:Xh,common:Kh,cube_uv_reflection_fragment:Yh,defaultnormal_vertex:jh,displacementmap_pars_vertex:$h,displacementmap_vertex:Zh,emissivemap_fragment:Jh,emissivemap_pars_fragment:Qh,colorspace_fragment:td,colorspace_pars_fragment:ed,envmap_fragment:nd,envmap_common_pars_fragment:id,envmap_pars_fragment:sd,envmap_pars_vertex:rd,envmap_physical_pars_fragment:_d,envmap_vertex:ad,fog_vertex:od,fog_pars_vertex:ld,fog_fragment:cd,fog_pars_fragment:ud,gradientmap_pars_fragment:hd,lightmap_fragment:dd,lightmap_pars_fragment:fd,lights_lambert_fragment:pd,lights_lambert_pars_fragment:md,lights_pars_begin:gd,lights_toon_fragment:vd,lights_toon_pars_fragment:xd,lights_phong_fragment:yd,lights_phong_pars_fragment:Md,lights_physical_fragment:Sd,lights_physical_pars_fragment:bd,lights_fragment_begin:Ed,lights_fragment_maps:Td,lights_fragment_end:wd,logdepthbuf_fragment:Ad,logdepthbuf_pars_fragment:Cd,logdepthbuf_pars_vertex:Rd,logdepthbuf_vertex:Pd,map_fragment:Ld,map_pars_fragment:Id,map_particle_fragment:Dd,map_particle_pars_fragment:Nd,metalnessmap_fragment:Ud,metalnessmap_pars_fragment:Od,morphcolor_vertex:Fd,morphnormal_vertex:Gd,morphtarget_pars_vertex:Bd,morphtarget_vertex:Hd,normal_fragment_begin:kd,normal_fragment_maps:zd,normal_pars_fragment:Vd,normal_pars_vertex:Wd,normal_vertex:qd,normalmap_pars_fragment:Xd,clearcoat_normal_fragment_begin:Kd,clearcoat_normal_fragment_maps:Yd,clearcoat_pars_fragment:jd,iridescence_pars_fragment:$d,opaque_fragment:Zd,packing:Jd,premultiplied_alpha_fragment:Qd,project_vertex:tf,dithering_fragment:ef,dithering_pars_fragment:nf,roughnessmap_fragment:sf,roughnessmap_pars_fragment:rf,shadowmap_pars_fragment:af,shadowmap_pars_vertex:of,shadowmap_vertex:lf,shadowmask_pars_fragment:cf,skinbase_vertex:uf,skinning_pars_vertex:hf,skinning_vertex:df,skinnormal_vertex:ff,specularmap_fragment:pf,specularmap_pars_fragment:mf,tonemapping_fragment:gf,tonemapping_pars_fragment:_f,transmission_fragment:vf,transmission_pars_fragment:xf,uv_pars_fragment:yf,uv_pars_vertex:Mf,uv_vertex:Sf,worldpos_vertex:bf,background_vert:Ef,background_frag:Tf,backgroundCube_vert:wf,backgroundCube_frag:Af,cube_vert:Cf,cube_frag:Rf,depth_vert:Pf,depth_frag:Lf,distanceRGBA_vert:If,distanceRGBA_frag:Df,equirect_vert:Nf,equirect_frag:Uf,linedashed_vert:Of,linedashed_frag:Ff,meshbasic_vert:Gf,meshbasic_frag:Bf,meshlambert_vert:Hf,meshlambert_frag:kf,meshmatcap_vert:zf,meshmatcap_frag:Vf,meshnormal_vert:Wf,meshnormal_frag:qf,meshphong_vert:Xf,meshphong_frag:Kf,meshphysical_vert:Yf,meshphysical_frag:jf,meshtoon_vert:$f,meshtoon_frag:Zf,points_vert:Jf,points_frag:Qf,shadow_vert:tp,shadow_frag:ep,sprite_vert:np,sprite_frag:ip},ut={common:{diffuse:{value:new Ct(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new qt},alphaMap:{value:null},alphaMapTransform:{value:new qt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new qt}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new qt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new qt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new qt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new qt},normalScale:{value:new st(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new qt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new qt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new qt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new qt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ct(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ct(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new qt},alphaTest:{value:0},uvTransform:{value:new qt}},sprite:{diffuse:{value:new Ct(16777215)},opacity:{value:1},center:{value:new st(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new qt},alphaMap:{value:null},alphaMapTransform:{value:new qt},alphaTest:{value:0}}},un={basic:{uniforms:Ge([ut.common,ut.specularmap,ut.envmap,ut.aomap,ut.lightmap,ut.fog]),vertexShader:Ht.meshbasic_vert,fragmentShader:Ht.meshbasic_frag},lambert:{uniforms:Ge([ut.common,ut.specularmap,ut.envmap,ut.aomap,ut.lightmap,ut.emissivemap,ut.bumpmap,ut.normalmap,ut.displacementmap,ut.fog,ut.lights,{emissive:{value:new Ct(0)}}]),vertexShader:Ht.meshlambert_vert,fragmentShader:Ht.meshlambert_frag},phong:{uniforms:Ge([ut.common,ut.specularmap,ut.envmap,ut.aomap,ut.lightmap,ut.emissivemap,ut.bumpmap,ut.normalmap,ut.displacementmap,ut.fog,ut.lights,{emissive:{value:new Ct(0)},specular:{value:new Ct(1118481)},shininess:{value:30}}]),vertexShader:Ht.meshphong_vert,fragmentShader:Ht.meshphong_frag},standard:{uniforms:Ge([ut.common,ut.envmap,ut.aomap,ut.lightmap,ut.emissivemap,ut.bumpmap,ut.normalmap,ut.displacementmap,ut.roughnessmap,ut.metalnessmap,ut.fog,ut.lights,{emissive:{value:new Ct(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ht.meshphysical_vert,fragmentShader:Ht.meshphysical_frag},toon:{uniforms:Ge([ut.common,ut.aomap,ut.lightmap,ut.emissivemap,ut.bumpmap,ut.normalmap,ut.displacementmap,ut.gradientmap,ut.fog,ut.lights,{emissive:{value:new Ct(0)}}]),vertexShader:Ht.meshtoon_vert,fragmentShader:Ht.meshtoon_frag},matcap:{uniforms:Ge([ut.common,ut.bumpmap,ut.normalmap,ut.displacementmap,ut.fog,{matcap:{value:null}}]),vertexShader:Ht.meshmatcap_vert,fragmentShader:Ht.meshmatcap_frag},points:{uniforms:Ge([ut.points,ut.fog]),vertexShader:Ht.points_vert,fragmentShader:Ht.points_frag},dashed:{uniforms:Ge([ut.common,ut.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ht.linedashed_vert,fragmentShader:Ht.linedashed_frag},depth:{uniforms:Ge([ut.common,ut.displacementmap]),vertexShader:Ht.depth_vert,fragmentShader:Ht.depth_frag},normal:{uniforms:Ge([ut.common,ut.bumpmap,ut.normalmap,ut.displacementmap,{opacity:{value:1}}]),vertexShader:Ht.meshnormal_vert,fragmentShader:Ht.meshnormal_frag},sprite:{uniforms:Ge([ut.sprite,ut.fog]),vertexShader:Ht.sprite_vert,fragmentShader:Ht.sprite_frag},background:{uniforms:{uvTransform:{value:new qt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ht.background_vert,fragmentShader:Ht.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Ht.backgroundCube_vert,fragmentShader:Ht.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ht.cube_vert,fragmentShader:Ht.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ht.equirect_vert,fragmentShader:Ht.equirect_frag},distanceRGBA:{uniforms:Ge([ut.common,ut.displacementmap,{referencePosition:{value:new C},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ht.distanceRGBA_vert,fragmentShader:Ht.distanceRGBA_frag},shadow:{uniforms:Ge([ut.lights,ut.fog,{color:{value:new Ct(0)},opacity:{value:1}}]),vertexShader:Ht.shadow_vert,fragmentShader:Ht.shadow_frag}};un.physical={uniforms:Ge([un.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new qt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new qt},clearcoatNormalScale:{value:new st(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new qt},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new qt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new qt},sheen:{value:0},sheenColor:{value:new Ct(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new qt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new qt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new qt},transmissionSamplerSize:{value:new st},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new qt},attenuationDistance:{value:0},attenuationColor:{value:new Ct(0)},specularColor:{value:new Ct(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new qt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new qt},anisotropyVector:{value:new st},anisotropyMap:{value:null},anisotropyMapTransform:{value:new qt}}]),vertexShader:Ht.meshphysical_vert,fragmentShader:Ht.meshphysical_frag};const Bs={r:0,b:0,g:0};function sp(i,t,e,n,s,r,a){const o=new Ct(0);let l=r===!0?0:1,c,h,u=null,d=0,p=null;function g(m,f){let x=!1,v=f.isScene===!0?f.background:null;v&&v.isTexture&&(v=(f.backgroundBlurriness>0?e:t).get(v)),v===null?_(o,l):v&&v.isColor&&(_(v,1),x=!0);const y=i.xr.getEnvironmentBlendMode();y==="additive"?n.buffers.color.setClear(0,0,0,1,a):y==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(i.autoClear||x)&&i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil),v&&(v.isCubeTexture||v.mapping===ur)?(h===void 0&&(h=new rt(new Ne(1,1,1),new we({name:"BackgroundCubeMaterial",uniforms:Oi(un.backgroundCube.uniforms),vertexShader:un.backgroundCube.vertexShader,fragmentShader:un.backgroundCube.fragmentShader,side:Re,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(R,w,A){this.matrixWorld.copyPosition(A.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),h.material.uniforms.envMap.value=v,h.material.uniforms.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=f.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=f.backgroundIntensity,h.material.toneMapped=Zt.getTransfer(v.colorSpace)!==ae,(u!==v||d!==v.version||p!==i.toneMapping)&&(h.material.needsUpdate=!0,u=v,d=v.version,p=i.toneMapping),h.layers.enableAll(),m.unshift(h,h.geometry,h.material,0,0,null)):v&&v.isTexture&&(c===void 0&&(c=new rt(new Li(2,2),new we({name:"BackgroundMaterial",uniforms:Oi(un.background.uniforms),vertexShader:un.background.vertexShader,fragmentShader:un.background.fragmentShader,side:Gn,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=v,c.material.uniforms.backgroundIntensity.value=f.backgroundIntensity,c.material.toneMapped=Zt.getTransfer(v.colorSpace)!==ae,v.matrixAutoUpdate===!0&&v.updateMatrix(),c.material.uniforms.uvTransform.value.copy(v.matrix),(u!==v||d!==v.version||p!==i.toneMapping)&&(c.material.needsUpdate=!0,u=v,d=v.version,p=i.toneMapping),c.layers.enableAll(),m.unshift(c,c.geometry,c.material,0,0,null))}function _(m,f){m.getRGB(Bs,gc(i)),n.buffers.color.setClear(Bs.r,Bs.g,Bs.b,f,a)}return{getClearColor:function(){return o},setClearColor:function(m,f=1){o.set(m),l=f,_(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(m){l=m,_(o,l)},render:g}}function rp(i,t,e,n){const s=i.getParameter(i.MAX_VERTEX_ATTRIBS),r=n.isWebGL2?null:t.get("OES_vertex_array_object"),a=n.isWebGL2||r!==null,o={},l=m(null);let c=l,h=!1;function u(L,D,G,X,Y){let j=!1;if(a){const K=_(X,G,D);c!==K&&(c=K,p(c.object)),j=f(L,X,G,Y),j&&x(L,X,G,Y)}else{const K=D.wireframe===!0;(c.geometry!==X.id||c.program!==G.id||c.wireframe!==K)&&(c.geometry=X.id,c.program=G.id,c.wireframe=K,j=!0)}Y!==null&&e.update(Y,i.ELEMENT_ARRAY_BUFFER),(j||h)&&(h=!1,N(L,D,G,X),Y!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(Y).buffer))}function d(){return n.isWebGL2?i.createVertexArray():r.createVertexArrayOES()}function p(L){return n.isWebGL2?i.bindVertexArray(L):r.bindVertexArrayOES(L)}function g(L){return n.isWebGL2?i.deleteVertexArray(L):r.deleteVertexArrayOES(L)}function _(L,D,G){const X=G.wireframe===!0;let Y=o[L.id];Y===void 0&&(Y={},o[L.id]=Y);let j=Y[D.id];j===void 0&&(j={},Y[D.id]=j);let K=j[X];return K===void 0&&(K=m(d()),j[X]=K),K}function m(L){const D=[],G=[],X=[];for(let Y=0;Y<s;Y++)D[Y]=0,G[Y]=0,X[Y]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:D,enabledAttributes:G,attributeDivisors:X,object:L,attributes:{},index:null}}function f(L,D,G,X){const Y=c.attributes,j=D.attributes;let K=0;const it=G.getAttributes();for(const at in it)if(it[at].location>=0){const Z=Y[at];let ot=j[at];if(ot===void 0&&(at==="instanceMatrix"&&L.instanceMatrix&&(ot=L.instanceMatrix),at==="instanceColor"&&L.instanceColor&&(ot=L.instanceColor)),Z===void 0||Z.attribute!==ot||ot&&Z.data!==ot.data)return!0;K++}return c.attributesNum!==K||c.index!==X}function x(L,D,G,X){const Y={},j=D.attributes;let K=0;const it=G.getAttributes();for(const at in it)if(it[at].location>=0){let Z=j[at];Z===void 0&&(at==="instanceMatrix"&&L.instanceMatrix&&(Z=L.instanceMatrix),at==="instanceColor"&&L.instanceColor&&(Z=L.instanceColor));const ot={};ot.attribute=Z,Z&&Z.data&&(ot.data=Z.data),Y[at]=ot,K++}c.attributes=Y,c.attributesNum=K,c.index=X}function v(){const L=c.newAttributes;for(let D=0,G=L.length;D<G;D++)L[D]=0}function y(L){R(L,0)}function R(L,D){const G=c.newAttributes,X=c.enabledAttributes,Y=c.attributeDivisors;G[L]=1,X[L]===0&&(i.enableVertexAttribArray(L),X[L]=1),Y[L]!==D&&((n.isWebGL2?i:t.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](L,D),Y[L]=D)}function w(){const L=c.newAttributes,D=c.enabledAttributes;for(let G=0,X=D.length;G<X;G++)D[G]!==L[G]&&(i.disableVertexAttribArray(G),D[G]=0)}function A(L,D,G,X,Y,j,K){K===!0?i.vertexAttribIPointer(L,D,G,Y,j):i.vertexAttribPointer(L,D,G,X,Y,j)}function N(L,D,G,X){if(n.isWebGL2===!1&&(L.isInstancedMesh||X.isInstancedBufferGeometry)&&t.get("ANGLE_instanced_arrays")===null)return;v();const Y=X.attributes,j=G.getAttributes(),K=D.defaultAttributeValues;for(const it in j){const at=j[it];if(at.location>=0){let W=Y[it];if(W===void 0&&(it==="instanceMatrix"&&L.instanceMatrix&&(W=L.instanceMatrix),it==="instanceColor"&&L.instanceColor&&(W=L.instanceColor)),W!==void 0){const Z=W.normalized,ot=W.itemSize,ft=e.get(W);if(ft===void 0)continue;const pt=ft.buffer,Et=ft.type,Tt=ft.bytesPerElement,ht=n.isWebGL2===!0&&(Et===i.INT||Et===i.UNSIGNED_INT||W.gpuType===Ql);if(W.isInterleavedBufferAttribute){const Mt=W.data,P=Mt.stride,lt=W.offset;if(Mt.isInstancedInterleavedBuffer){for(let $=0;$<at.locationSize;$++)R(at.location+$,Mt.meshPerAttribute);L.isInstancedMesh!==!0&&X._maxInstanceCount===void 0&&(X._maxInstanceCount=Mt.meshPerAttribute*Mt.count)}else for(let $=0;$<at.locationSize;$++)y(at.location+$);i.bindBuffer(i.ARRAY_BUFFER,pt);for(let $=0;$<at.locationSize;$++)A(at.location+$,ot/at.locationSize,Et,Z,P*Tt,(lt+ot/at.locationSize*$)*Tt,ht)}else{if(W.isInstancedBufferAttribute){for(let Mt=0;Mt<at.locationSize;Mt++)R(at.location+Mt,W.meshPerAttribute);L.isInstancedMesh!==!0&&X._maxInstanceCount===void 0&&(X._maxInstanceCount=W.meshPerAttribute*W.count)}else for(let Mt=0;Mt<at.locationSize;Mt++)y(at.location+Mt);i.bindBuffer(i.ARRAY_BUFFER,pt);for(let Mt=0;Mt<at.locationSize;Mt++)A(at.location+Mt,ot/at.locationSize,Et,Z,ot*Tt,ot/at.locationSize*Mt*Tt,ht)}}else if(K!==void 0){const Z=K[it];if(Z!==void 0)switch(Z.length){case 2:i.vertexAttrib2fv(at.location,Z);break;case 3:i.vertexAttrib3fv(at.location,Z);break;case 4:i.vertexAttrib4fv(at.location,Z);break;default:i.vertexAttrib1fv(at.location,Z)}}}}w()}function S(){H();for(const L in o){const D=o[L];for(const G in D){const X=D[G];for(const Y in X)g(X[Y].object),delete X[Y];delete D[G]}delete o[L]}}function b(L){if(o[L.id]===void 0)return;const D=o[L.id];for(const G in D){const X=D[G];for(const Y in X)g(X[Y].object),delete X[Y];delete D[G]}delete o[L.id]}function O(L){for(const D in o){const G=o[D];if(G[L.id]===void 0)continue;const X=G[L.id];for(const Y in X)g(X[Y].object),delete X[Y];delete G[L.id]}}function H(){U(),h=!0,c!==l&&(c=l,p(c.object))}function U(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:u,reset:H,resetDefaultState:U,dispose:S,releaseStatesOfGeometry:b,releaseStatesOfProgram:O,initAttributes:v,enableAttribute:y,disableUnusedAttributes:w}}function ap(i,t,e,n){const s=n.isWebGL2;let r;function a(h){r=h}function o(h,u){i.drawArrays(r,h,u),e.update(u,r,1)}function l(h,u,d){if(d===0)return;let p,g;if(s)p=i,g="drawArraysInstanced";else if(p=t.get("ANGLE_instanced_arrays"),g="drawArraysInstancedANGLE",p===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}p[g](r,h,u,d),e.update(u,r,d)}function c(h,u,d){if(d===0)return;const p=t.get("WEBGL_multi_draw");if(p===null)for(let g=0;g<d;g++)this.render(h[g],u[g]);else{p.multiDrawArraysWEBGL(r,h,0,u,0,d);let g=0;for(let _=0;_<d;_++)g+=u[_];e.update(g,r,1)}}this.setMode=a,this.render=o,this.renderInstances=l,this.renderMultiDraw=c}function op(i,t,e){let n;function s(){if(n!==void 0)return n;if(t.has("EXT_texture_filter_anisotropic")===!0){const A=t.get("EXT_texture_filter_anisotropic");n=i.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function r(A){if(A==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const a=typeof WebGL2RenderingContext<"u"&&i.constructor.name==="WebGL2RenderingContext";let o=e.precision!==void 0?e.precision:"highp";const l=r(o);l!==o&&(console.warn("THREE.WebGLRenderer:",o,"not supported, using",l,"instead."),o=l);const c=a||t.has("WEBGL_draw_buffers"),h=e.logarithmicDepthBuffer===!0,u=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),d=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),p=i.getParameter(i.MAX_TEXTURE_SIZE),g=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),_=i.getParameter(i.MAX_VERTEX_ATTRIBS),m=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),f=i.getParameter(i.MAX_VARYING_VECTORS),x=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),v=d>0,y=a||t.has("OES_texture_float"),R=v&&y,w=a?i.getParameter(i.MAX_SAMPLES):0;return{isWebGL2:a,drawBuffers:c,getMaxAnisotropy:s,getMaxPrecision:r,precision:o,logarithmicDepthBuffer:h,maxTextures:u,maxVertexTextures:d,maxTextureSize:p,maxCubemapSize:g,maxAttributes:_,maxVertexUniforms:m,maxVaryings:f,maxFragmentUniforms:x,vertexTextures:v,floatFragmentTextures:y,floatVertexTextures:R,maxSamples:w}}function lp(i){const t=this;let e=null,n=0,s=!1,r=!1;const a=new Xn,o=new qt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){const p=u.length!==0||d||n!==0||s;return s=d,n=u.length,p},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,d){e=h(u,d,0)},this.setState=function(u,d,p){const g=u.clippingPlanes,_=u.clipIntersection,m=u.clipShadows,f=i.get(u);if(!s||g===null||g.length===0||r&&!m)r?h(null):c();else{const x=r?0:n,v=x*4;let y=f.clippingState||null;l.value=y,y=h(g,d,v,p);for(let R=0;R!==v;++R)y[R]=e[R];f.clippingState=y,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=x}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(u,d,p,g){const _=u!==null?u.length:0;let m=null;if(_!==0){if(m=l.value,g!==!0||m===null){const f=p+_*4,x=d.matrixWorldInverse;o.getNormalMatrix(x),(m===null||m.length<f)&&(m=new Float32Array(f));for(let v=0,y=p;v!==_;++v,y+=4)a.copy(u[v]).applyMatrix4(x,o),a.normal.toArray(m,y),m[y+3]=a.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=_,t.numIntersection=0,m}}function cp(i){let t=new WeakMap;function e(a,o){return o===pa?a.mapping=Di:o===ma&&(a.mapping=Ni),a}function n(a){if(a&&a.isTexture){const o=a.mapping;if(o===pa||o===ma)if(t.has(a)){const l=t.get(a).texture;return e(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const c=new yh(l.height/2);return c.fromEquirectangularTexture(i,a),t.set(a,c),a.addEventListener("dispose",s),e(c.texture,a.mapping)}else return null}}return a}function s(a){const o=a.target;o.removeEventListener("dispose",s);const l=t.get(o);l!==void 0&&(t.delete(o),l.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}class yc extends _c{constructor(t=-1,e=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=n-t,a=n+t,o=s+e,l=s-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const Ti=4,$o=[.125,.215,.35,.446,.526,.582],$n=20,Kr=new yc,Zo=new Ct;let Yr=null,jr=0,$r=0;const Kn=(1+Math.sqrt(5))/2,Mi=1/Kn,Jo=[new C(1,1,1),new C(-1,1,1),new C(1,1,-1),new C(-1,1,-1),new C(0,Kn,Mi),new C(0,Kn,-Mi),new C(Mi,0,Kn),new C(-Mi,0,Kn),new C(Kn,Mi,0),new C(-Kn,Mi,0)];class Qo{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,s=100){Yr=this._renderer.getRenderTarget(),jr=this._renderer.getActiveCubeFace(),$r=this._renderer.getActiveMipmapLevel(),this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,n,s,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=nl(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=el(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Yr,jr,$r),t.scissorTest=!1,Hs(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Di||t.mapping===Ni?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Yr=this._renderer.getRenderTarget(),jr=this._renderer.getActiveCubeFace(),$r=this._renderer.getActiveMipmapLevel();const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:Ze,minFilter:Ze,generateMipmaps:!1,type:bn,format:rn,colorSpace:En,depthBuffer:!1},s=tl(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=tl(t,e,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=up(r)),this._blurMaterial=hp(r,t,e)}return s}_compileMaterial(t){const e=new rt(this._lodPlanes[0],t);this._renderer.compile(e,Kr)}_sceneToCubeUV(t,e,n,s){const o=new Ke(90,1,e,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,d=h.toneMapping;h.getClearColor(Zo),h.toneMapping=On,h.autoClear=!1;const p=new jt({name:"PMREM.Background",side:Re,depthWrite:!1,depthTest:!1}),g=new rt(new Ne,p);let _=!1;const m=t.background;m?m.isColor&&(p.color.copy(m),t.background=null,_=!0):(p.color.copy(Zo),_=!0);for(let f=0;f<6;f++){const x=f%3;x===0?(o.up.set(0,l[f],0),o.lookAt(c[f],0,0)):x===1?(o.up.set(0,0,l[f]),o.lookAt(0,c[f],0)):(o.up.set(0,l[f],0),o.lookAt(0,0,c[f]));const v=this._cubeSize;Hs(s,x*v,f>2?v:0,v,v),h.setRenderTarget(s),_&&h.render(g,o),h.render(t,o)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=d,h.autoClear=u,t.background=m}_textureToCubeUV(t,e){const n=this._renderer,s=t.mapping===Di||t.mapping===Ni;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=nl()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=el());const r=s?this._cubemapMaterial:this._equirectMaterial,a=new rt(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=t;const l=this._cubeSize;Hs(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(a,Kr)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;for(let s=1;s<this._lodPlanes.length;s++){const r=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=Jo[(s-1)%Jo.length];this._blur(t,s-1,s,r,a)}e.autoClear=n}_blur(t,e,n,s,r){const a=this._pingPongRenderTarget;this._halfBlur(t,a,e,n,s,"latitudinal",r),this._halfBlur(a,t,n,n,s,"longitudinal",r)}_halfBlur(t,e,n,s,r,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,u=new rt(this._lodPlanes[s],c),d=c.uniforms,p=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*p):2*Math.PI/(2*$n-1),_=r/g,m=isFinite(r)?1+Math.floor(h*_):$n;m>$n&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${$n}`);const f=[];let x=0;for(let A=0;A<$n;++A){const N=A/_,S=Math.exp(-N*N/2);f.push(S),A===0?x+=S:A<m&&(x+=2*S)}for(let A=0;A<f.length;A++)f[A]=f[A]/x;d.envMap.value=t.texture,d.samples.value=m,d.weights.value=f,d.latitudinal.value=a==="latitudinal",o&&(d.poleAxis.value=o);const{_lodMax:v}=this;d.dTheta.value=g,d.mipInt.value=v-n;const y=this._sizeLods[s],R=3*y*(s>v-Ti?s-v+Ti:0),w=4*(this._cubeSize-y);Hs(e,R,w,3*y,2*y),l.setRenderTarget(e),l.render(u,Kr)}}function up(i){const t=[],e=[],n=[];let s=i;const r=i-Ti+1+$o.length;for(let a=0;a<r;a++){const o=Math.pow(2,s);e.push(o);let l=1/o;a>i-Ti?l=$o[a-i+Ti-1]:a===0&&(l=0),n.push(l);const c=1/(o-2),h=-c,u=1+c,d=[h,h,u,h,u,u,h,h,u,u,h,u],p=6,g=6,_=3,m=2,f=1,x=new Float32Array(_*g*p),v=new Float32Array(m*g*p),y=new Float32Array(f*g*p);for(let w=0;w<p;w++){const A=w%3*2/3-1,N=w>2?0:-1,S=[A,N,0,A+2/3,N,0,A+2/3,N+1,0,A,N,0,A+2/3,N+1,0,A,N+1,0];x.set(S,_*g*w),v.set(d,m*g*w);const b=[w,w,w,w,w,w];y.set(b,f*g*w)}const R=new oe;R.setAttribute("position",new Ae(x,_)),R.setAttribute("uv",new Ae(v,m)),R.setAttribute("faceIndex",new Ae(y,f)),t.push(R),s>Ti&&s--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function tl(i,t,e){const n=new ln(i,t,e);return n.texture.mapping=ur,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Hs(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function hp(i,t,e){const n=new Float32Array($n),s=new C(0,1,0);return new we({name:"SphericalGaussianBlur",defines:{n:$n,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Ba(),fragmentShader:`

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
		`,blending:Sn,depthTest:!1,depthWrite:!1})}function el(){return new we({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Ba(),fragmentShader:`

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
		`,blending:Sn,depthTest:!1,depthWrite:!1})}function nl(){return new we({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Ba(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Sn,depthTest:!1,depthWrite:!1})}function Ba(){return`

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
	`}function dp(i){let t=new WeakMap,e=null;function n(o){if(o&&o.isTexture){const l=o.mapping,c=l===pa||l===ma,h=l===Di||l===Ni;if(c||h)if(o.isRenderTargetTexture&&o.needsPMREMUpdate===!0){o.needsPMREMUpdate=!1;let u=t.get(o);return e===null&&(e=new Qo(i)),u=c?e.fromEquirectangular(o,u):e.fromCubemap(o,u),t.set(o,u),u.texture}else{if(t.has(o))return t.get(o).texture;{const u=o.image;if(c&&u&&u.height>0||h&&u&&s(u)){e===null&&(e=new Qo(i));const d=c?e.fromEquirectangular(o):e.fromCubemap(o);return t.set(o,d),o.addEventListener("dispose",r),d.texture}else return null}}}return o}function s(o){let l=0;const c=6;for(let h=0;h<c;h++)o[h]!==void 0&&l++;return l===c}function r(o){const l=o.target;l.removeEventListener("dispose",r);const c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function a(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:a}}function fp(i){const t={};function e(n){if(t[n]!==void 0)return t[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(n){n.isWebGL2?(e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance")):(e("WEBGL_depth_texture"),e("OES_texture_float"),e("OES_texture_half_float"),e("OES_texture_half_float_linear"),e("OES_standard_derivatives"),e("OES_element_index_uint"),e("OES_vertex_array_object"),e("ANGLE_instanced_arrays")),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture")},get:function(n){const s=e(n);return s===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function pp(i,t,e,n){const s={},r=new WeakMap;function a(u){const d=u.target;d.index!==null&&t.remove(d.index);for(const g in d.attributes)t.remove(d.attributes[g]);for(const g in d.morphAttributes){const _=d.morphAttributes[g];for(let m=0,f=_.length;m<f;m++)t.remove(_[m])}d.removeEventListener("dispose",a),delete s[d.id];const p=r.get(d);p&&(t.remove(p),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,e.memory.geometries--}function o(u,d){return s[d.id]===!0||(d.addEventListener("dispose",a),s[d.id]=!0,e.memory.geometries++),d}function l(u){const d=u.attributes;for(const g in d)t.update(d[g],i.ARRAY_BUFFER);const p=u.morphAttributes;for(const g in p){const _=p[g];for(let m=0,f=_.length;m<f;m++)t.update(_[m],i.ARRAY_BUFFER)}}function c(u){const d=[],p=u.index,g=u.attributes.position;let _=0;if(p!==null){const x=p.array;_=p.version;for(let v=0,y=x.length;v<y;v+=3){const R=x[v+0],w=x[v+1],A=x[v+2];d.push(R,w,w,A,A,R)}}else if(g!==void 0){const x=g.array;_=g.version;for(let v=0,y=x.length/3-1;v<y;v+=3){const R=v+0,w=v+1,A=v+2;d.push(R,w,w,A,A,R)}}else return;const m=new(cc(d)?mc:pc)(d,1);m.version=_;const f=r.get(u);f&&t.remove(f),r.set(u,m)}function h(u){const d=r.get(u);if(d){const p=u.index;p!==null&&d.version<p.version&&c(u)}else c(u);return r.get(u)}return{get:o,update:l,getWireframeAttribute:h}}function mp(i,t,e,n){const s=n.isWebGL2;let r;function a(p){r=p}let o,l;function c(p){o=p.type,l=p.bytesPerElement}function h(p,g){i.drawElements(r,g,o,p*l),e.update(g,r,1)}function u(p,g,_){if(_===0)return;let m,f;if(s)m=i,f="drawElementsInstanced";else if(m=t.get("ANGLE_instanced_arrays"),f="drawElementsInstancedANGLE",m===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}m[f](r,g,o,p*l,_),e.update(g,r,_)}function d(p,g,_){if(_===0)return;const m=t.get("WEBGL_multi_draw");if(m===null)for(let f=0;f<_;f++)this.render(p[f]/l,g[f]);else{m.multiDrawElementsWEBGL(r,g,0,o,p,0,_);let f=0;for(let x=0;x<_;x++)f+=g[x];e.update(f,r,1)}}this.setMode=a,this.setIndex=c,this.render=h,this.renderInstances=u,this.renderMultiDraw=d}function gp(i){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(e.calls++,a){case i.TRIANGLES:e.triangles+=o*(r/3);break;case i.LINES:e.lines+=o*(r/2);break;case i.LINE_STRIP:e.lines+=o*(r-1);break;case i.LINE_LOOP:e.lines+=o*r;break;case i.POINTS:e.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function _p(i,t){return i[0]-t[0]}function vp(i,t){return Math.abs(t[1])-Math.abs(i[1])}function xp(i,t,e){const n={},s=new Float32Array(8),r=new WeakMap,a=new ce,o=[];for(let c=0;c<8;c++)o[c]=[c,0];function l(c,h,u){const d=c.morphTargetInfluences;if(t.isWebGL2===!0){const g=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,_=g!==void 0?g.length:0;let m=r.get(h);if(m===void 0||m.count!==_){let D=function(){U.dispose(),r.delete(h),h.removeEventListener("dispose",D)};var p=D;m!==void 0&&m.texture.dispose();const v=h.morphAttributes.position!==void 0,y=h.morphAttributes.normal!==void 0,R=h.morphAttributes.color!==void 0,w=h.morphAttributes.position||[],A=h.morphAttributes.normal||[],N=h.morphAttributes.color||[];let S=0;v===!0&&(S=1),y===!0&&(S=2),R===!0&&(S=3);let b=h.attributes.position.count*S,O=1;b>t.maxTextureSize&&(O=Math.ceil(b/t.maxTextureSize),b=t.maxTextureSize);const H=new Float32Array(b*O*4*_),U=new dc(H,b,O,_);U.type=Un,U.needsUpdate=!0;const L=S*4;for(let G=0;G<_;G++){const X=w[G],Y=A[G],j=N[G],K=b*O*4*G;for(let it=0;it<X.count;it++){const at=it*L;v===!0&&(a.fromBufferAttribute(X,it),H[K+at+0]=a.x,H[K+at+1]=a.y,H[K+at+2]=a.z,H[K+at+3]=0),y===!0&&(a.fromBufferAttribute(Y,it),H[K+at+4]=a.x,H[K+at+5]=a.y,H[K+at+6]=a.z,H[K+at+7]=0),R===!0&&(a.fromBufferAttribute(j,it),H[K+at+8]=a.x,H[K+at+9]=a.y,H[K+at+10]=a.z,H[K+at+11]=j.itemSize===4?a.w:1)}}m={count:_,texture:U,size:new st(b,O)},r.set(h,m),h.addEventListener("dispose",D)}let f=0;for(let v=0;v<d.length;v++)f+=d[v];const x=h.morphTargetsRelative?1:1-f;u.getUniforms().setValue(i,"morphTargetBaseInfluence",x),u.getUniforms().setValue(i,"morphTargetInfluences",d),u.getUniforms().setValue(i,"morphTargetsTexture",m.texture,e),u.getUniforms().setValue(i,"morphTargetsTextureSize",m.size)}else{const g=d===void 0?0:d.length;let _=n[h.id];if(_===void 0||_.length!==g){_=[];for(let y=0;y<g;y++)_[y]=[y,0];n[h.id]=_}for(let y=0;y<g;y++){const R=_[y];R[0]=y,R[1]=d[y]}_.sort(vp);for(let y=0;y<8;y++)y<g&&_[y][1]?(o[y][0]=_[y][0],o[y][1]=_[y][1]):(o[y][0]=Number.MAX_SAFE_INTEGER,o[y][1]=0);o.sort(_p);const m=h.morphAttributes.position,f=h.morphAttributes.normal;let x=0;for(let y=0;y<8;y++){const R=o[y],w=R[0],A=R[1];w!==Number.MAX_SAFE_INTEGER&&A?(m&&h.getAttribute("morphTarget"+y)!==m[w]&&h.setAttribute("morphTarget"+y,m[w]),f&&h.getAttribute("morphNormal"+y)!==f[w]&&h.setAttribute("morphNormal"+y,f[w]),s[y]=A,x+=A):(m&&h.hasAttribute("morphTarget"+y)===!0&&h.deleteAttribute("morphTarget"+y),f&&h.hasAttribute("morphNormal"+y)===!0&&h.deleteAttribute("morphNormal"+y),s[y]=0)}const v=h.morphTargetsRelative?1:1-x;u.getUniforms().setValue(i,"morphTargetBaseInfluence",v),u.getUniforms().setValue(i,"morphTargetInfluences",s)}}return{update:l}}function yp(i,t,e,n){let s=new WeakMap;function r(l){const c=n.render.frame,h=l.geometry,u=t.get(l,h);if(s.get(u)!==c&&(t.update(u),s.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),s.get(l)!==c&&(e.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,i.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){const d=l.skeleton;s.get(d)!==c&&(d.update(),s.set(d,c))}return u}function a(){s=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:r,dispose:a}}class Mc extends Ve{constructor(t,e,n,s,r,a,o,l,c,h){if(h=h!==void 0?h:Qn,h!==Qn&&h!==Ui)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===Qn&&(n=Nn),n===void 0&&h===Ui&&(n=Jn),super(null,s,r,a,o,l,h,n,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=o!==void 0?o:Be,this.minFilter=l!==void 0?l:Be,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}const Sc=new Ve,bc=new Mc(1,1);bc.compareFunction=lc;const Ec=new dc,Tc=new sh,wc=new vc,il=[],sl=[],rl=new Float32Array(16),al=new Float32Array(9),ol=new Float32Array(4);function Vi(i,t,e){const n=i[0];if(n<=0||n>0)return i;const s=t*e;let r=il[s];if(r===void 0&&(r=new Float32Array(s),il[s]=r),t!==0){n.toArray(r,0);for(let a=1,o=0;a!==t;++a)o+=e,i[a].toArray(r,o)}return r}function xe(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function ye(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function pr(i,t){let e=sl[t];e===void 0&&(e=new Int32Array(t),sl[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function Mp(i,t){const e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function Sp(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(xe(e,t))return;i.uniform2fv(this.addr,t),ye(e,t)}}function bp(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(xe(e,t))return;i.uniform3fv(this.addr,t),ye(e,t)}}function Ep(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(xe(e,t))return;i.uniform4fv(this.addr,t),ye(e,t)}}function Tp(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(xe(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),ye(e,t)}else{if(xe(e,n))return;ol.set(n),i.uniformMatrix2fv(this.addr,!1,ol),ye(e,n)}}function wp(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(xe(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),ye(e,t)}else{if(xe(e,n))return;al.set(n),i.uniformMatrix3fv(this.addr,!1,al),ye(e,n)}}function Ap(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(xe(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),ye(e,t)}else{if(xe(e,n))return;rl.set(n),i.uniformMatrix4fv(this.addr,!1,rl),ye(e,n)}}function Cp(i,t){const e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function Rp(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(xe(e,t))return;i.uniform2iv(this.addr,t),ye(e,t)}}function Pp(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(xe(e,t))return;i.uniform3iv(this.addr,t),ye(e,t)}}function Lp(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(xe(e,t))return;i.uniform4iv(this.addr,t),ye(e,t)}}function Ip(i,t){const e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function Dp(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(xe(e,t))return;i.uniform2uiv(this.addr,t),ye(e,t)}}function Np(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(xe(e,t))return;i.uniform3uiv(this.addr,t),ye(e,t)}}function Up(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(xe(e,t))return;i.uniform4uiv(this.addr,t),ye(e,t)}}function Op(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);const r=this.type===i.SAMPLER_2D_SHADOW?bc:Sc;e.setTexture2D(t||r,s)}function Fp(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||Tc,s)}function Gp(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||wc,s)}function Bp(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||Ec,s)}function Hp(i){switch(i){case 5126:return Mp;case 35664:return Sp;case 35665:return bp;case 35666:return Ep;case 35674:return Tp;case 35675:return wp;case 35676:return Ap;case 5124:case 35670:return Cp;case 35667:case 35671:return Rp;case 35668:case 35672:return Pp;case 35669:case 35673:return Lp;case 5125:return Ip;case 36294:return Dp;case 36295:return Np;case 36296:return Up;case 35678:case 36198:case 36298:case 36306:case 35682:return Op;case 35679:case 36299:case 36307:return Fp;case 35680:case 36300:case 36308:case 36293:return Gp;case 36289:case 36303:case 36311:case 36292:return Bp}}function kp(i,t){i.uniform1fv(this.addr,t)}function zp(i,t){const e=Vi(t,this.size,2);i.uniform2fv(this.addr,e)}function Vp(i,t){const e=Vi(t,this.size,3);i.uniform3fv(this.addr,e)}function Wp(i,t){const e=Vi(t,this.size,4);i.uniform4fv(this.addr,e)}function qp(i,t){const e=Vi(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function Xp(i,t){const e=Vi(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function Kp(i,t){const e=Vi(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function Yp(i,t){i.uniform1iv(this.addr,t)}function jp(i,t){i.uniform2iv(this.addr,t)}function $p(i,t){i.uniform3iv(this.addr,t)}function Zp(i,t){i.uniform4iv(this.addr,t)}function Jp(i,t){i.uniform1uiv(this.addr,t)}function Qp(i,t){i.uniform2uiv(this.addr,t)}function tm(i,t){i.uniform3uiv(this.addr,t)}function em(i,t){i.uniform4uiv(this.addr,t)}function nm(i,t,e){const n=this.cache,s=t.length,r=pr(e,s);xe(n,r)||(i.uniform1iv(this.addr,r),ye(n,r));for(let a=0;a!==s;++a)e.setTexture2D(t[a]||Sc,r[a])}function im(i,t,e){const n=this.cache,s=t.length,r=pr(e,s);xe(n,r)||(i.uniform1iv(this.addr,r),ye(n,r));for(let a=0;a!==s;++a)e.setTexture3D(t[a]||Tc,r[a])}function sm(i,t,e){const n=this.cache,s=t.length,r=pr(e,s);xe(n,r)||(i.uniform1iv(this.addr,r),ye(n,r));for(let a=0;a!==s;++a)e.setTextureCube(t[a]||wc,r[a])}function rm(i,t,e){const n=this.cache,s=t.length,r=pr(e,s);xe(n,r)||(i.uniform1iv(this.addr,r),ye(n,r));for(let a=0;a!==s;++a)e.setTexture2DArray(t[a]||Ec,r[a])}function am(i){switch(i){case 5126:return kp;case 35664:return zp;case 35665:return Vp;case 35666:return Wp;case 35674:return qp;case 35675:return Xp;case 35676:return Kp;case 5124:case 35670:return Yp;case 35667:case 35671:return jp;case 35668:case 35672:return $p;case 35669:case 35673:return Zp;case 5125:return Jp;case 36294:return Qp;case 36295:return tm;case 36296:return em;case 35678:case 36198:case 36298:case 36306:case 35682:return nm;case 35679:case 36299:case 36307:return im;case 35680:case 36300:case 36308:case 36293:return sm;case 36289:case 36303:case 36311:case 36292:return rm}}class om{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=Hp(e.type)}}class lm{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=am(e.type)}}class cm{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const s=this.seq;for(let r=0,a=s.length;r!==a;++r){const o=s[r];o.setValue(t,e[o.id],n)}}}const Zr=/(\w+)(\])?(\[|\.)?/g;function ll(i,t){i.seq.push(t),i.map[t.id]=t}function um(i,t,e){const n=i.name,s=n.length;for(Zr.lastIndex=0;;){const r=Zr.exec(n),a=Zr.lastIndex;let o=r[1];const l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===s){ll(e,c===void 0?new om(o,i,t):new lm(o,i,t));break}else{let u=e.map[o];u===void 0&&(u=new cm(o),ll(e,u)),e=u}}}class Js{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){const r=t.getActiveUniform(e,s),a=t.getUniformLocation(e,r.name);um(r,a,this)}}setValue(t,e,n,s){const r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){const s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,a=e.length;r!==a;++r){const o=e[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(t,l.value,s)}}static seqWithValue(t,e){const n=[];for(let s=0,r=t.length;s!==r;++s){const a=t[s];a.id in e&&n.push(a)}return n}}function cl(i,t,e){const n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}const hm=37297;let dm=0;function fm(i,t){const e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let a=s;a<r;a++){const o=a+1;n.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return n.join(`
`)}function pm(i){const t=Zt.getPrimaries(Zt.workingColorSpace),e=Zt.getPrimaries(i);let n;switch(t===e?n="":t===sr&&e===ir?n="LinearDisplayP3ToLinearSRGB":t===ir&&e===sr&&(n="LinearSRGBToLinearDisplayP3"),i){case En:case hr:return[n,"LinearTransferOETF"];case ge:case Oa:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",i),[n,"LinearTransferOETF"]}}function ul(i,t,e){const n=i.getShaderParameter(t,i.COMPILE_STATUS),s=i.getShaderInfoLog(t).trim();if(n&&s==="")return"";const r=/ERROR: 0:(\d+)/.exec(s);if(r){const a=parseInt(r[1]);return e.toUpperCase()+`

`+s+`

`+fm(i.getShaderSource(t),a)}else return s}function mm(i,t){const e=pm(t);return`vec4 ${i}( vec4 value ) { return ${e[0]}( ${e[1]}( value ) ); }`}function gm(i,t){let e;switch(t){case Cu:e="Linear";break;case Ru:e="Reinhard";break;case Pu:e="OptimizedCineon";break;case Zl:e="ACESFilmic";break;case Iu:e="AgX";break;case Lu:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}function _m(i){return[i.extensionDerivatives||i.envMapCubeUVHeight||i.bumpMap||i.normalMapTangentSpace||i.clearcoatNormalMap||i.flatShading||i.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(i.extensionFragDepth||i.logarithmicDepthBuffer)&&i.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",i.extensionDrawBuffers&&i.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(i.extensionShaderTextureLOD||i.envMap||i.transmission)&&i.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(wi).join(`
`)}function vm(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":""].filter(wi).join(`
`)}function xm(i){const t=[];for(const e in i){const n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function ym(i,t){const e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const r=i.getActiveAttrib(t,s),a=r.name;let o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),e[a]={type:r.type,location:i.getAttribLocation(t,a),locationSize:o}}return e}function wi(i){return i!==""}function hl(i,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function dl(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const Mm=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ma(i){return i.replace(Mm,bm)}const Sm=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function bm(i,t){let e=Ht[t];if(e===void 0){const n=Sm.get(t);if(n!==void 0)e=Ht[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return Ma(e)}const Em=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function fl(i){return i.replace(Em,Tm)}function Tm(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function pl(i){let t="precision "+i.precision+` float;
precision `+i.precision+" int;";return i.precision==="highp"?t+=`
#define HIGH_PRECISION`:i.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function wm(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===jl?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===nu?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===yn&&(t="SHADOWMAP_TYPE_VSM"),t}function Am(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case Di:case Ni:t="ENVMAP_TYPE_CUBE";break;case ur:t="ENVMAP_TYPE_CUBE_UV";break}return t}function Cm(i){let t="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case Ni:t="ENVMAP_MODE_REFRACTION";break}return t}function Rm(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case $l:t="ENVMAP_BLENDING_MULTIPLY";break;case wu:t="ENVMAP_BLENDING_MIX";break;case Au:t="ENVMAP_BLENDING_ADD";break}return t}function Pm(i){const t=i.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function Lm(i,t,e,n){const s=i.getContext(),r=e.defines;let a=e.vertexShader,o=e.fragmentShader;const l=wm(e),c=Am(e),h=Cm(e),u=Rm(e),d=Pm(e),p=e.isWebGL2?"":_m(e),g=vm(e),_=xm(r),m=s.createProgram();let f,x,v=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(f=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_].filter(wi).join(`
`),f.length>0&&(f+=`
`),x=[p,"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_].filter(wi).join(`
`),x.length>0&&(x+=`
`)):(f=[pl(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors&&e.isWebGL2?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.useLegacyLights?"#define LEGACY_LIGHTS":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(wi).join(`
`),x=[p,pl(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.useLegacyLights?"#define LEGACY_LIGHTS":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==On?"#define TONE_MAPPING":"",e.toneMapping!==On?Ht.tonemapping_pars_fragment:"",e.toneMapping!==On?gm("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Ht.colorspace_pars_fragment,mm("linearToOutputTexel",e.outputColorSpace),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(wi).join(`
`)),a=Ma(a),a=hl(a,e),a=dl(a,e),o=Ma(o),o=hl(o,e),o=dl(o,e),a=fl(a),o=fl(o),e.isWebGL2&&e.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,f=[g,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+f,x=["precision mediump sampler2DArray;","#define varying in",e.glslVersion===Io?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Io?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+x);const y=v+f+a,R=v+x+o,w=cl(s,s.VERTEX_SHADER,y),A=cl(s,s.FRAGMENT_SHADER,R);s.attachShader(m,w),s.attachShader(m,A),e.index0AttributeName!==void 0?s.bindAttribLocation(m,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(m,0,"position"),s.linkProgram(m);function N(H){if(i.debug.checkShaderErrors){const U=s.getProgramInfoLog(m).trim(),L=s.getShaderInfoLog(w).trim(),D=s.getShaderInfoLog(A).trim();let G=!0,X=!0;if(s.getProgramParameter(m,s.LINK_STATUS)===!1)if(G=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,m,w,A);else{const Y=ul(s,w,"vertex"),j=ul(s,A,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(m,s.VALIDATE_STATUS)+`

Program Info Log: `+U+`
`+Y+`
`+j)}else U!==""?console.warn("THREE.WebGLProgram: Program Info Log:",U):(L===""||D==="")&&(X=!1);X&&(H.diagnostics={runnable:G,programLog:U,vertexShader:{log:L,prefix:f},fragmentShader:{log:D,prefix:x}})}s.deleteShader(w),s.deleteShader(A),S=new Js(s,m),b=ym(s,m)}let S;this.getUniforms=function(){return S===void 0&&N(this),S};let b;this.getAttributes=function(){return b===void 0&&N(this),b};let O=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return O===!1&&(O=s.getProgramParameter(m,hm)),O},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(m),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=dm++,this.cacheKey=t,this.usedTimes=1,this.program=m,this.vertexShader=w,this.fragmentShader=A,this}let Im=0;class Dm{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(n),a=this._getShaderCacheForMaterial(t);return a.has(s)===!1&&(a.add(s),s.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new Nm(t),e.set(t,n)),n}}class Nm{constructor(t){this.id=Im++,this.code=t,this.usedTimes=0}}function Um(i,t,e,n,s,r,a){const o=new Fa,l=new Dm,c=[],h=s.isWebGL2,u=s.logarithmicDepthBuffer,d=s.vertexTextures;let p=s.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(S){return S===0?"uv":`uv${S}`}function m(S,b,O,H,U){const L=H.fog,D=U.geometry,G=S.isMeshStandardMaterial?H.environment:null,X=(S.isMeshStandardMaterial?e:t).get(S.envMap||G),Y=X&&X.mapping===ur?X.image.height:null,j=g[S.type];S.precision!==null&&(p=s.getMaxPrecision(S.precision),p!==S.precision&&console.warn("THREE.WebGLProgram.getParameters:",S.precision,"not supported, using",p,"instead."));const K=D.morphAttributes.position||D.morphAttributes.normal||D.morphAttributes.color,it=K!==void 0?K.length:0;let at=0;D.morphAttributes.position!==void 0&&(at=1),D.morphAttributes.normal!==void 0&&(at=2),D.morphAttributes.color!==void 0&&(at=3);let W,Z,ot,ft;if(j){const Oe=un[j];W=Oe.vertexShader,Z=Oe.fragmentShader}else W=S.vertexShader,Z=S.fragmentShader,l.update(S),ot=l.getVertexShaderID(S),ft=l.getFragmentShaderID(S);const pt=i.getRenderTarget(),Et=U.isInstancedMesh===!0,Tt=U.isBatchedMesh===!0,ht=!!S.map,Mt=!!S.matcap,P=!!X,lt=!!S.aoMap,$=!!S.lightMap,et=!!S.bumpMap,z=!!S.normalMap,vt=!!S.displacementMap,mt=!!S.emissiveMap,E=!!S.metalnessMap,M=!!S.roughnessMap,F=S.anisotropy>0,tt=S.clearcoat>0,Q=S.iridescence>0,J=S.sheen>0,bt=S.transmission>0,dt=F&&!!S.anisotropyMap,yt=tt&&!!S.clearcoatMap,Rt=tt&&!!S.clearcoatNormalMap,Ft=tt&&!!S.clearcoatRoughnessMap,nt=Q&&!!S.iridescenceMap,Yt=Q&&!!S.iridescenceThicknessMap,Xt=J&&!!S.sheenColorMap,Nt=J&&!!S.sheenRoughnessMap,At=!!S.specularMap,St=!!S.specularColorMap,Bt=!!S.specularIntensityMap,$t=bt&&!!S.transmissionMap,de=bt&&!!S.thicknessMap,Vt=!!S.gradientMap,ct=!!S.alphaMap,I=S.alphaTest>0,gt=!!S.alphaHash,_t=!!S.extensions,It=!!D.attributes.uv1,Pt=!!D.attributes.uv2,Qt=!!D.attributes.uv3;let te=On;return S.toneMapped&&(pt===null||pt.isXRRenderTarget===!0)&&(te=i.toneMapping),{isWebGL2:h,shaderID:j,shaderType:S.type,shaderName:S.name,vertexShader:W,fragmentShader:Z,defines:S.defines,customVertexShaderID:ot,customFragmentShaderID:ft,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:p,batching:Tt,instancing:Et,instancingColor:Et&&U.instanceColor!==null,supportsVertexTextures:d,outputColorSpace:pt===null?i.outputColorSpace:pt.isXRRenderTarget===!0?pt.texture.colorSpace:En,map:ht,matcap:Mt,envMap:P,envMapMode:P&&X.mapping,envMapCubeUVHeight:Y,aoMap:lt,lightMap:$,bumpMap:et,normalMap:z,displacementMap:d&&vt,emissiveMap:mt,normalMapObjectSpace:z&&S.normalMapType===Wu,normalMapTangentSpace:z&&S.normalMapType===oc,metalnessMap:E,roughnessMap:M,anisotropy:F,anisotropyMap:dt,clearcoat:tt,clearcoatMap:yt,clearcoatNormalMap:Rt,clearcoatRoughnessMap:Ft,iridescence:Q,iridescenceMap:nt,iridescenceThicknessMap:Yt,sheen:J,sheenColorMap:Xt,sheenRoughnessMap:Nt,specularMap:At,specularColorMap:St,specularIntensityMap:Bt,transmission:bt,transmissionMap:$t,thicknessMap:de,gradientMap:Vt,opaque:S.transparent===!1&&S.blending===Ri,alphaMap:ct,alphaTest:I,alphaHash:gt,combine:S.combine,mapUv:ht&&_(S.map.channel),aoMapUv:lt&&_(S.aoMap.channel),lightMapUv:$&&_(S.lightMap.channel),bumpMapUv:et&&_(S.bumpMap.channel),normalMapUv:z&&_(S.normalMap.channel),displacementMapUv:vt&&_(S.displacementMap.channel),emissiveMapUv:mt&&_(S.emissiveMap.channel),metalnessMapUv:E&&_(S.metalnessMap.channel),roughnessMapUv:M&&_(S.roughnessMap.channel),anisotropyMapUv:dt&&_(S.anisotropyMap.channel),clearcoatMapUv:yt&&_(S.clearcoatMap.channel),clearcoatNormalMapUv:Rt&&_(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ft&&_(S.clearcoatRoughnessMap.channel),iridescenceMapUv:nt&&_(S.iridescenceMap.channel),iridescenceThicknessMapUv:Yt&&_(S.iridescenceThicknessMap.channel),sheenColorMapUv:Xt&&_(S.sheenColorMap.channel),sheenRoughnessMapUv:Nt&&_(S.sheenRoughnessMap.channel),specularMapUv:At&&_(S.specularMap.channel),specularColorMapUv:St&&_(S.specularColorMap.channel),specularIntensityMapUv:Bt&&_(S.specularIntensityMap.channel),transmissionMapUv:$t&&_(S.transmissionMap.channel),thicknessMapUv:de&&_(S.thicknessMap.channel),alphaMapUv:ct&&_(S.alphaMap.channel),vertexTangents:!!D.attributes.tangent&&(z||F),vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!D.attributes.color&&D.attributes.color.itemSize===4,vertexUv1s:It,vertexUv2s:Pt,vertexUv3s:Qt,pointsUvs:U.isPoints===!0&&!!D.attributes.uv&&(ht||ct),fog:!!L,useFog:S.fog===!0,fogExp2:L&&L.isFogExp2,flatShading:S.flatShading===!0,sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:u,skinning:U.isSkinnedMesh===!0,morphTargets:D.morphAttributes.position!==void 0,morphNormals:D.morphAttributes.normal!==void 0,morphColors:D.morphAttributes.color!==void 0,morphTargetsCount:it,morphTextureStride:at,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numLightProbes:b.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:S.dithering,shadowMapEnabled:i.shadowMap.enabled&&O.length>0,shadowMapType:i.shadowMap.type,toneMapping:te,useLegacyLights:i._useLegacyLights,decodeVideoTexture:ht&&S.map.isVideoTexture===!0&&Zt.getTransfer(S.map.colorSpace)===ae,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===Ue,flipSided:S.side===Re,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionDerivatives:_t&&S.extensions.derivatives===!0,extensionFragDepth:_t&&S.extensions.fragDepth===!0,extensionDrawBuffers:_t&&S.extensions.drawBuffers===!0,extensionShaderTextureLOD:_t&&S.extensions.shaderTextureLOD===!0,extensionClipCullDistance:_t&&S.extensions.clipCullDistance&&n.has("WEBGL_clip_cull_distance"),rendererExtensionFragDepth:h||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:h||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:h||n.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()}}function f(S){const b=[];if(S.shaderID?b.push(S.shaderID):(b.push(S.customVertexShaderID),b.push(S.customFragmentShaderID)),S.defines!==void 0)for(const O in S.defines)b.push(O),b.push(S.defines[O]);return S.isRawShaderMaterial===!1&&(x(b,S),v(b,S),b.push(i.outputColorSpace)),b.push(S.customProgramCacheKey),b.join()}function x(S,b){S.push(b.precision),S.push(b.outputColorSpace),S.push(b.envMapMode),S.push(b.envMapCubeUVHeight),S.push(b.mapUv),S.push(b.alphaMapUv),S.push(b.lightMapUv),S.push(b.aoMapUv),S.push(b.bumpMapUv),S.push(b.normalMapUv),S.push(b.displacementMapUv),S.push(b.emissiveMapUv),S.push(b.metalnessMapUv),S.push(b.roughnessMapUv),S.push(b.anisotropyMapUv),S.push(b.clearcoatMapUv),S.push(b.clearcoatNormalMapUv),S.push(b.clearcoatRoughnessMapUv),S.push(b.iridescenceMapUv),S.push(b.iridescenceThicknessMapUv),S.push(b.sheenColorMapUv),S.push(b.sheenRoughnessMapUv),S.push(b.specularMapUv),S.push(b.specularColorMapUv),S.push(b.specularIntensityMapUv),S.push(b.transmissionMapUv),S.push(b.thicknessMapUv),S.push(b.combine),S.push(b.fogExp2),S.push(b.sizeAttenuation),S.push(b.morphTargetsCount),S.push(b.morphAttributeCount),S.push(b.numDirLights),S.push(b.numPointLights),S.push(b.numSpotLights),S.push(b.numSpotLightMaps),S.push(b.numHemiLights),S.push(b.numRectAreaLights),S.push(b.numDirLightShadows),S.push(b.numPointLightShadows),S.push(b.numSpotLightShadows),S.push(b.numSpotLightShadowsWithMaps),S.push(b.numLightProbes),S.push(b.shadowMapType),S.push(b.toneMapping),S.push(b.numClippingPlanes),S.push(b.numClipIntersection),S.push(b.depthPacking)}function v(S,b){o.disableAll(),b.isWebGL2&&o.enable(0),b.supportsVertexTextures&&o.enable(1),b.instancing&&o.enable(2),b.instancingColor&&o.enable(3),b.matcap&&o.enable(4),b.envMap&&o.enable(5),b.normalMapObjectSpace&&o.enable(6),b.normalMapTangentSpace&&o.enable(7),b.clearcoat&&o.enable(8),b.iridescence&&o.enable(9),b.alphaTest&&o.enable(10),b.vertexColors&&o.enable(11),b.vertexAlphas&&o.enable(12),b.vertexUv1s&&o.enable(13),b.vertexUv2s&&o.enable(14),b.vertexUv3s&&o.enable(15),b.vertexTangents&&o.enable(16),b.anisotropy&&o.enable(17),b.alphaHash&&o.enable(18),b.batching&&o.enable(19),S.push(o.mask),o.disableAll(),b.fog&&o.enable(0),b.useFog&&o.enable(1),b.flatShading&&o.enable(2),b.logarithmicDepthBuffer&&o.enable(3),b.skinning&&o.enable(4),b.morphTargets&&o.enable(5),b.morphNormals&&o.enable(6),b.morphColors&&o.enable(7),b.premultipliedAlpha&&o.enable(8),b.shadowMapEnabled&&o.enable(9),b.useLegacyLights&&o.enable(10),b.doubleSided&&o.enable(11),b.flipSided&&o.enable(12),b.useDepthPacking&&o.enable(13),b.dithering&&o.enable(14),b.transmission&&o.enable(15),b.sheen&&o.enable(16),b.opaque&&o.enable(17),b.pointsUvs&&o.enable(18),b.decodeVideoTexture&&o.enable(19),S.push(o.mask)}function y(S){const b=g[S.type];let O;if(b){const H=un[b];O=or.clone(H.uniforms)}else O=S.uniforms;return O}function R(S,b){let O;for(let H=0,U=c.length;H<U;H++){const L=c[H];if(L.cacheKey===b){O=L,++O.usedTimes;break}}return O===void 0&&(O=new Lm(i,b,S,r),c.push(O)),O}function w(S){if(--S.usedTimes===0){const b=c.indexOf(S);c[b]=c[c.length-1],c.pop(),S.destroy()}}function A(S){l.remove(S)}function N(){l.dispose()}return{getParameters:m,getProgramCacheKey:f,getUniforms:y,acquireProgram:R,releaseProgram:w,releaseShaderCache:A,programs:c,dispose:N}}function Om(){let i=new WeakMap;function t(r){let a=i.get(r);return a===void 0&&(a={},i.set(r,a)),a}function e(r){i.delete(r)}function n(r,a,o){i.get(r)[a]=o}function s(){i=new WeakMap}return{get:t,remove:e,update:n,dispose:s}}function Fm(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function ml(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function gl(){const i=[];let t=0;const e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function a(u,d,p,g,_,m){let f=i[t];return f===void 0?(f={id:u.id,object:u,geometry:d,material:p,groupOrder:g,renderOrder:u.renderOrder,z:_,group:m},i[t]=f):(f.id=u.id,f.object=u,f.geometry=d,f.material=p,f.groupOrder=g,f.renderOrder=u.renderOrder,f.z=_,f.group=m),t++,f}function o(u,d,p,g,_,m){const f=a(u,d,p,g,_,m);p.transmission>0?n.push(f):p.transparent===!0?s.push(f):e.push(f)}function l(u,d,p,g,_,m){const f=a(u,d,p,g,_,m);p.transmission>0?n.unshift(f):p.transparent===!0?s.unshift(f):e.unshift(f)}function c(u,d){e.length>1&&e.sort(u||Fm),n.length>1&&n.sort(d||ml),s.length>1&&s.sort(d||ml)}function h(){for(let u=t,d=i.length;u<d;u++){const p=i[u];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:o,unshift:l,finish:h,sort:c}}function Gm(){let i=new WeakMap;function t(n,s){const r=i.get(n);let a;return r===void 0?(a=new gl,i.set(n,[a])):s>=r.length?(a=new gl,r.push(a)):a=r[s],a}function e(){i=new WeakMap}return{get:t,dispose:e}}function Bm(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new C,color:new Ct};break;case"SpotLight":e={position:new C,direction:new C,color:new Ct,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new C,color:new Ct,distance:0,decay:0};break;case"HemisphereLight":e={direction:new C,skyColor:new Ct,groundColor:new Ct};break;case"RectAreaLight":e={color:new Ct,position:new C,halfWidth:new C,halfHeight:new C};break}return i[t.id]=e,e}}}function Hm(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new st};break;case"SpotLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new st};break;case"PointLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new st,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}let km=0;function zm(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function Vm(i,t){const e=new Bm,n=Hm(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)s.probe.push(new C);const r=new C,a=new se,o=new se;function l(h,u){let d=0,p=0,g=0;for(let H=0;H<9;H++)s.probe[H].set(0,0,0);let _=0,m=0,f=0,x=0,v=0,y=0,R=0,w=0,A=0,N=0,S=0;h.sort(zm);const b=u===!0?Math.PI:1;for(let H=0,U=h.length;H<U;H++){const L=h[H],D=L.color,G=L.intensity,X=L.distance,Y=L.shadow&&L.shadow.map?L.shadow.map.texture:null;if(L.isAmbientLight)d+=D.r*G*b,p+=D.g*G*b,g+=D.b*G*b;else if(L.isLightProbe){for(let j=0;j<9;j++)s.probe[j].addScaledVector(L.sh.coefficients[j],G);S++}else if(L.isDirectionalLight){const j=e.get(L);if(j.color.copy(L.color).multiplyScalar(L.intensity*b),L.castShadow){const K=L.shadow,it=n.get(L);it.shadowBias=K.bias,it.shadowNormalBias=K.normalBias,it.shadowRadius=K.radius,it.shadowMapSize=K.mapSize,s.directionalShadow[_]=it,s.directionalShadowMap[_]=Y,s.directionalShadowMatrix[_]=L.shadow.matrix,y++}s.directional[_]=j,_++}else if(L.isSpotLight){const j=e.get(L);j.position.setFromMatrixPosition(L.matrixWorld),j.color.copy(D).multiplyScalar(G*b),j.distance=X,j.coneCos=Math.cos(L.angle),j.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),j.decay=L.decay,s.spot[f]=j;const K=L.shadow;if(L.map&&(s.spotLightMap[A]=L.map,A++,K.updateMatrices(L),L.castShadow&&N++),s.spotLightMatrix[f]=K.matrix,L.castShadow){const it=n.get(L);it.shadowBias=K.bias,it.shadowNormalBias=K.normalBias,it.shadowRadius=K.radius,it.shadowMapSize=K.mapSize,s.spotShadow[f]=it,s.spotShadowMap[f]=Y,w++}f++}else if(L.isRectAreaLight){const j=e.get(L);j.color.copy(D).multiplyScalar(G),j.halfWidth.set(L.width*.5,0,0),j.halfHeight.set(0,L.height*.5,0),s.rectArea[x]=j,x++}else if(L.isPointLight){const j=e.get(L);if(j.color.copy(L.color).multiplyScalar(L.intensity*b),j.distance=L.distance,j.decay=L.decay,L.castShadow){const K=L.shadow,it=n.get(L);it.shadowBias=K.bias,it.shadowNormalBias=K.normalBias,it.shadowRadius=K.radius,it.shadowMapSize=K.mapSize,it.shadowCameraNear=K.camera.near,it.shadowCameraFar=K.camera.far,s.pointShadow[m]=it,s.pointShadowMap[m]=Y,s.pointShadowMatrix[m]=L.shadow.matrix,R++}s.point[m]=j,m++}else if(L.isHemisphereLight){const j=e.get(L);j.skyColor.copy(L.color).multiplyScalar(G*b),j.groundColor.copy(L.groundColor).multiplyScalar(G*b),s.hemi[v]=j,v++}}x>0&&(t.isWebGL2?i.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=ut.LTC_FLOAT_1,s.rectAreaLTC2=ut.LTC_FLOAT_2):(s.rectAreaLTC1=ut.LTC_HALF_1,s.rectAreaLTC2=ut.LTC_HALF_2):i.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=ut.LTC_FLOAT_1,s.rectAreaLTC2=ut.LTC_FLOAT_2):i.has("OES_texture_half_float_linear")===!0?(s.rectAreaLTC1=ut.LTC_HALF_1,s.rectAreaLTC2=ut.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),s.ambient[0]=d,s.ambient[1]=p,s.ambient[2]=g;const O=s.hash;(O.directionalLength!==_||O.pointLength!==m||O.spotLength!==f||O.rectAreaLength!==x||O.hemiLength!==v||O.numDirectionalShadows!==y||O.numPointShadows!==R||O.numSpotShadows!==w||O.numSpotMaps!==A||O.numLightProbes!==S)&&(s.directional.length=_,s.spot.length=f,s.rectArea.length=x,s.point.length=m,s.hemi.length=v,s.directionalShadow.length=y,s.directionalShadowMap.length=y,s.pointShadow.length=R,s.pointShadowMap.length=R,s.spotShadow.length=w,s.spotShadowMap.length=w,s.directionalShadowMatrix.length=y,s.pointShadowMatrix.length=R,s.spotLightMatrix.length=w+A-N,s.spotLightMap.length=A,s.numSpotLightShadowsWithMaps=N,s.numLightProbes=S,O.directionalLength=_,O.pointLength=m,O.spotLength=f,O.rectAreaLength=x,O.hemiLength=v,O.numDirectionalShadows=y,O.numPointShadows=R,O.numSpotShadows=w,O.numSpotMaps=A,O.numLightProbes=S,s.version=km++)}function c(h,u){let d=0,p=0,g=0,_=0,m=0;const f=u.matrixWorldInverse;for(let x=0,v=h.length;x<v;x++){const y=h[x];if(y.isDirectionalLight){const R=s.directional[d];R.direction.setFromMatrixPosition(y.matrixWorld),r.setFromMatrixPosition(y.target.matrixWorld),R.direction.sub(r),R.direction.transformDirection(f),d++}else if(y.isSpotLight){const R=s.spot[g];R.position.setFromMatrixPosition(y.matrixWorld),R.position.applyMatrix4(f),R.direction.setFromMatrixPosition(y.matrixWorld),r.setFromMatrixPosition(y.target.matrixWorld),R.direction.sub(r),R.direction.transformDirection(f),g++}else if(y.isRectAreaLight){const R=s.rectArea[_];R.position.setFromMatrixPosition(y.matrixWorld),R.position.applyMatrix4(f),o.identity(),a.copy(y.matrixWorld),a.premultiply(f),o.extractRotation(a),R.halfWidth.set(y.width*.5,0,0),R.halfHeight.set(0,y.height*.5,0),R.halfWidth.applyMatrix4(o),R.halfHeight.applyMatrix4(o),_++}else if(y.isPointLight){const R=s.point[p];R.position.setFromMatrixPosition(y.matrixWorld),R.position.applyMatrix4(f),p++}else if(y.isHemisphereLight){const R=s.hemi[m];R.direction.setFromMatrixPosition(y.matrixWorld),R.direction.transformDirection(f),m++}}}return{setup:l,setupView:c,state:s}}function _l(i,t){const e=new Vm(i,t),n=[],s=[];function r(){n.length=0,s.length=0}function a(u){n.push(u)}function o(u){s.push(u)}function l(u){e.setup(n,u)}function c(u){e.setupView(n,u)}return{init:r,state:{lightsArray:n,shadowsArray:s,lights:e},setupLights:l,setupLightsView:c,pushLight:a,pushShadow:o}}function Wm(i,t){let e=new WeakMap;function n(r,a=0){const o=e.get(r);let l;return o===void 0?(l=new _l(i,t),e.set(r,[l])):a>=o.length?(l=new _l(i,t),o.push(l)):l=o[a],l}function s(){e=new WeakMap}return{get:n,dispose:s}}class qm extends si{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=zu,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class Xm extends si{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const Km=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Ym=`uniform sampler2D shadow_pass;
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
}`;function jm(i,t,e){let n=new Ga;const s=new st,r=new st,a=new ce,o=new qm({depthPacking:Vu}),l=new Xm,c={},h=e.maxTextureSize,u={[Gn]:Re,[Re]:Gn,[Ue]:Ue},d=new we({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new st},radius:{value:4}},vertexShader:Km,fragmentShader:Ym}),p=d.clone();p.defines.HORIZONTAL_PASS=1;const g=new oe;g.setAttribute("position",new Ae(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new rt(g,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=jl;let f=this.type;this.render=function(w,A,N){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||w.length===0)return;const S=i.getRenderTarget(),b=i.getActiveCubeFace(),O=i.getActiveMipmapLevel(),H=i.state;H.setBlending(Sn),H.buffers.color.setClear(1,1,1,1),H.buffers.depth.setTest(!0),H.setScissorTest(!1);const U=f!==yn&&this.type===yn,L=f===yn&&this.type!==yn;for(let D=0,G=w.length;D<G;D++){const X=w[D],Y=X.shadow;if(Y===void 0){console.warn("THREE.WebGLShadowMap:",X,"has no shadow.");continue}if(Y.autoUpdate===!1&&Y.needsUpdate===!1)continue;s.copy(Y.mapSize);const j=Y.getFrameExtents();if(s.multiply(j),r.copy(Y.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/j.x),s.x=r.x*j.x,Y.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/j.y),s.y=r.y*j.y,Y.mapSize.y=r.y)),Y.map===null||U===!0||L===!0){const it=this.type!==yn?{minFilter:Be,magFilter:Be}:{};Y.map!==null&&Y.map.dispose(),Y.map=new ln(s.x,s.y,it),Y.map.texture.name=X.name+".shadowMap",Y.camera.updateProjectionMatrix()}i.setRenderTarget(Y.map),i.clear();const K=Y.getViewportCount();for(let it=0;it<K;it++){const at=Y.getViewport(it);a.set(r.x*at.x,r.y*at.y,r.x*at.z,r.y*at.w),H.viewport(a),Y.updateMatrices(X,it),n=Y.getFrustum(),y(A,N,Y.camera,X,this.type)}Y.isPointLightShadow!==!0&&this.type===yn&&x(Y,N),Y.needsUpdate=!1}f=this.type,m.needsUpdate=!1,i.setRenderTarget(S,b,O)};function x(w,A){const N=t.update(_);d.defines.VSM_SAMPLES!==w.blurSamples&&(d.defines.VSM_SAMPLES=w.blurSamples,p.defines.VSM_SAMPLES=w.blurSamples,d.needsUpdate=!0,p.needsUpdate=!0),w.mapPass===null&&(w.mapPass=new ln(s.x,s.y)),d.uniforms.shadow_pass.value=w.map.texture,d.uniforms.resolution.value=w.mapSize,d.uniforms.radius.value=w.radius,i.setRenderTarget(w.mapPass),i.clear(),i.renderBufferDirect(A,null,N,d,_,null),p.uniforms.shadow_pass.value=w.mapPass.texture,p.uniforms.resolution.value=w.mapSize,p.uniforms.radius.value=w.radius,i.setRenderTarget(w.map),i.clear(),i.renderBufferDirect(A,null,N,p,_,null)}function v(w,A,N,S){let b=null;const O=N.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(O!==void 0)b=O;else if(b=N.isPointLight===!0?l:o,i.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0){const H=b.uuid,U=A.uuid;let L=c[H];L===void 0&&(L={},c[H]=L);let D=L[U];D===void 0&&(D=b.clone(),L[U]=D,A.addEventListener("dispose",R)),b=D}if(b.visible=A.visible,b.wireframe=A.wireframe,S===yn?b.side=A.shadowSide!==null?A.shadowSide:A.side:b.side=A.shadowSide!==null?A.shadowSide:u[A.side],b.alphaMap=A.alphaMap,b.alphaTest=A.alphaTest,b.map=A.map,b.clipShadows=A.clipShadows,b.clippingPlanes=A.clippingPlanes,b.clipIntersection=A.clipIntersection,b.displacementMap=A.displacementMap,b.displacementScale=A.displacementScale,b.displacementBias=A.displacementBias,b.wireframeLinewidth=A.wireframeLinewidth,b.linewidth=A.linewidth,N.isPointLight===!0&&b.isMeshDistanceMaterial===!0){const H=i.properties.get(b);H.light=N}return b}function y(w,A,N,S,b){if(w.visible===!1)return;if(w.layers.test(A.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&b===yn)&&(!w.frustumCulled||n.intersectsObject(w))){w.modelViewMatrix.multiplyMatrices(N.matrixWorldInverse,w.matrixWorld);const U=t.update(w),L=w.material;if(Array.isArray(L)){const D=U.groups;for(let G=0,X=D.length;G<X;G++){const Y=D[G],j=L[Y.materialIndex];if(j&&j.visible){const K=v(w,j,S,b);w.onBeforeShadow(i,w,A,N,U,K,Y),i.renderBufferDirect(N,null,U,K,w,Y),w.onAfterShadow(i,w,A,N,U,K,Y)}}}else if(L.visible){const D=v(w,L,S,b);w.onBeforeShadow(i,w,A,N,U,D,null),i.renderBufferDirect(N,null,U,D,w,null),w.onAfterShadow(i,w,A,N,U,D,null)}}const H=w.children;for(let U=0,L=H.length;U<L;U++)y(H[U],A,N,S,b)}function R(w){w.target.removeEventListener("dispose",R);for(const N in c){const S=c[N],b=w.target.uuid;b in S&&(S[b].dispose(),delete S[b])}}}function $m(i,t,e){const n=e.isWebGL2;function s(){let I=!1;const gt=new ce;let _t=null;const It=new ce(0,0,0,0);return{setMask:function(Pt){_t!==Pt&&!I&&(i.colorMask(Pt,Pt,Pt,Pt),_t=Pt)},setLocked:function(Pt){I=Pt},setClear:function(Pt,Qt,te,Me,Oe){Oe===!0&&(Pt*=Me,Qt*=Me,te*=Me),gt.set(Pt,Qt,te,Me),It.equals(gt)===!1&&(i.clearColor(Pt,Qt,te,Me),It.copy(gt))},reset:function(){I=!1,_t=null,It.set(-1,0,0,0)}}}function r(){let I=!1,gt=null,_t=null,It=null;return{setTest:function(Pt){Pt?Tt(i.DEPTH_TEST):ht(i.DEPTH_TEST)},setMask:function(Pt){gt!==Pt&&!I&&(i.depthMask(Pt),gt=Pt)},setFunc:function(Pt){if(_t!==Pt){switch(Pt){case xu:i.depthFunc(i.NEVER);break;case yu:i.depthFunc(i.ALWAYS);break;case Mu:i.depthFunc(i.LESS);break;case er:i.depthFunc(i.LEQUAL);break;case Su:i.depthFunc(i.EQUAL);break;case bu:i.depthFunc(i.GEQUAL);break;case Eu:i.depthFunc(i.GREATER);break;case Tu:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}_t=Pt}},setLocked:function(Pt){I=Pt},setClear:function(Pt){It!==Pt&&(i.clearDepth(Pt),It=Pt)},reset:function(){I=!1,gt=null,_t=null,It=null}}}function a(){let I=!1,gt=null,_t=null,It=null,Pt=null,Qt=null,te=null,Me=null,Oe=null;return{setTest:function(ee){I||(ee?Tt(i.STENCIL_TEST):ht(i.STENCIL_TEST))},setMask:function(ee){gt!==ee&&!I&&(i.stencilMask(ee),gt=ee)},setFunc:function(ee,Fe,cn){(_t!==ee||It!==Fe||Pt!==cn)&&(i.stencilFunc(ee,Fe,cn),_t=ee,It=Fe,Pt=cn)},setOp:function(ee,Fe,cn){(Qt!==ee||te!==Fe||Me!==cn)&&(i.stencilOp(ee,Fe,cn),Qt=ee,te=Fe,Me=cn)},setLocked:function(ee){I=ee},setClear:function(ee){Oe!==ee&&(i.clearStencil(ee),Oe=ee)},reset:function(){I=!1,gt=null,_t=null,It=null,Pt=null,Qt=null,te=null,Me=null,Oe=null}}}const o=new s,l=new r,c=new a,h=new WeakMap,u=new WeakMap;let d={},p={},g=new WeakMap,_=[],m=null,f=!1,x=null,v=null,y=null,R=null,w=null,A=null,N=null,S=new Ct(0,0,0),b=0,O=!1,H=null,U=null,L=null,D=null,G=null;const X=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let Y=!1,j=0;const K=i.getParameter(i.VERSION);K.indexOf("WebGL")!==-1?(j=parseFloat(/^WebGL (\d)/.exec(K)[1]),Y=j>=1):K.indexOf("OpenGL ES")!==-1&&(j=parseFloat(/^OpenGL ES (\d)/.exec(K)[1]),Y=j>=2);let it=null,at={};const W=i.getParameter(i.SCISSOR_BOX),Z=i.getParameter(i.VIEWPORT),ot=new ce().fromArray(W),ft=new ce().fromArray(Z);function pt(I,gt,_t,It){const Pt=new Uint8Array(4),Qt=i.createTexture();i.bindTexture(I,Qt),i.texParameteri(I,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(I,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let te=0;te<_t;te++)n&&(I===i.TEXTURE_3D||I===i.TEXTURE_2D_ARRAY)?i.texImage3D(gt,0,i.RGBA,1,1,It,0,i.RGBA,i.UNSIGNED_BYTE,Pt):i.texImage2D(gt+te,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Pt);return Qt}const Et={};Et[i.TEXTURE_2D]=pt(i.TEXTURE_2D,i.TEXTURE_2D,1),Et[i.TEXTURE_CUBE_MAP]=pt(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),n&&(Et[i.TEXTURE_2D_ARRAY]=pt(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),Et[i.TEXTURE_3D]=pt(i.TEXTURE_3D,i.TEXTURE_3D,1,1)),o.setClear(0,0,0,1),l.setClear(1),c.setClear(0),Tt(i.DEPTH_TEST),l.setFunc(er),mt(!1),E(Ja),Tt(i.CULL_FACE),z(Sn);function Tt(I){d[I]!==!0&&(i.enable(I),d[I]=!0)}function ht(I){d[I]!==!1&&(i.disable(I),d[I]=!1)}function Mt(I,gt){return p[I]!==gt?(i.bindFramebuffer(I,gt),p[I]=gt,n&&(I===i.DRAW_FRAMEBUFFER&&(p[i.FRAMEBUFFER]=gt),I===i.FRAMEBUFFER&&(p[i.DRAW_FRAMEBUFFER]=gt)),!0):!1}function P(I,gt){let _t=_,It=!1;if(I)if(_t=g.get(gt),_t===void 0&&(_t=[],g.set(gt,_t)),I.isWebGLMultipleRenderTargets){const Pt=I.texture;if(_t.length!==Pt.length||_t[0]!==i.COLOR_ATTACHMENT0){for(let Qt=0,te=Pt.length;Qt<te;Qt++)_t[Qt]=i.COLOR_ATTACHMENT0+Qt;_t.length=Pt.length,It=!0}}else _t[0]!==i.COLOR_ATTACHMENT0&&(_t[0]=i.COLOR_ATTACHMENT0,It=!0);else _t[0]!==i.BACK&&(_t[0]=i.BACK,It=!0);It&&(e.isWebGL2?i.drawBuffers(_t):t.get("WEBGL_draw_buffers").drawBuffersWEBGL(_t))}function lt(I){return m!==I?(i.useProgram(I),m=I,!0):!1}const $={[jn]:i.FUNC_ADD,[su]:i.FUNC_SUBTRACT,[ru]:i.FUNC_REVERSE_SUBTRACT};if(n)$[eo]=i.MIN,$[no]=i.MAX;else{const I=t.get("EXT_blend_minmax");I!==null&&($[eo]=I.MIN_EXT,$[no]=I.MAX_EXT)}const et={[au]:i.ZERO,[ou]:i.ONE,[lu]:i.SRC_COLOR,[da]:i.SRC_ALPHA,[pu]:i.SRC_ALPHA_SATURATE,[du]:i.DST_COLOR,[uu]:i.DST_ALPHA,[cu]:i.ONE_MINUS_SRC_COLOR,[fa]:i.ONE_MINUS_SRC_ALPHA,[fu]:i.ONE_MINUS_DST_COLOR,[hu]:i.ONE_MINUS_DST_ALPHA,[mu]:i.CONSTANT_COLOR,[gu]:i.ONE_MINUS_CONSTANT_COLOR,[_u]:i.CONSTANT_ALPHA,[vu]:i.ONE_MINUS_CONSTANT_ALPHA};function z(I,gt,_t,It,Pt,Qt,te,Me,Oe,ee){if(I===Sn){f===!0&&(ht(i.BLEND),f=!1);return}if(f===!1&&(Tt(i.BLEND),f=!0),I!==iu){if(I!==x||ee!==O){if((v!==jn||w!==jn)&&(i.blendEquation(i.FUNC_ADD),v=jn,w=jn),ee)switch(I){case Ri:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case ve:i.blendFunc(i.ONE,i.ONE);break;case Qa:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case to:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}else switch(I){case Ri:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case ve:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case Qa:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case to:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}y=null,R=null,A=null,N=null,S.set(0,0,0),b=0,x=I,O=ee}return}Pt=Pt||gt,Qt=Qt||_t,te=te||It,(gt!==v||Pt!==w)&&(i.blendEquationSeparate($[gt],$[Pt]),v=gt,w=Pt),(_t!==y||It!==R||Qt!==A||te!==N)&&(i.blendFuncSeparate(et[_t],et[It],et[Qt],et[te]),y=_t,R=It,A=Qt,N=te),(Me.equals(S)===!1||Oe!==b)&&(i.blendColor(Me.r,Me.g,Me.b,Oe),S.copy(Me),b=Oe),x=I,O=!1}function vt(I,gt){I.side===Ue?ht(i.CULL_FACE):Tt(i.CULL_FACE);let _t=I.side===Re;gt&&(_t=!_t),mt(_t),I.blending===Ri&&I.transparent===!1?z(Sn):z(I.blending,I.blendEquation,I.blendSrc,I.blendDst,I.blendEquationAlpha,I.blendSrcAlpha,I.blendDstAlpha,I.blendColor,I.blendAlpha,I.premultipliedAlpha),l.setFunc(I.depthFunc),l.setTest(I.depthTest),l.setMask(I.depthWrite),o.setMask(I.colorWrite);const It=I.stencilWrite;c.setTest(It),It&&(c.setMask(I.stencilWriteMask),c.setFunc(I.stencilFunc,I.stencilRef,I.stencilFuncMask),c.setOp(I.stencilFail,I.stencilZFail,I.stencilZPass)),F(I.polygonOffset,I.polygonOffsetFactor,I.polygonOffsetUnits),I.alphaToCoverage===!0?Tt(i.SAMPLE_ALPHA_TO_COVERAGE):ht(i.SAMPLE_ALPHA_TO_COVERAGE)}function mt(I){H!==I&&(I?i.frontFace(i.CW):i.frontFace(i.CCW),H=I)}function E(I){I!==tu?(Tt(i.CULL_FACE),I!==U&&(I===Ja?i.cullFace(i.BACK):I===eu?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):ht(i.CULL_FACE),U=I}function M(I){I!==L&&(Y&&i.lineWidth(I),L=I)}function F(I,gt,_t){I?(Tt(i.POLYGON_OFFSET_FILL),(D!==gt||G!==_t)&&(i.polygonOffset(gt,_t),D=gt,G=_t)):ht(i.POLYGON_OFFSET_FILL)}function tt(I){I?Tt(i.SCISSOR_TEST):ht(i.SCISSOR_TEST)}function Q(I){I===void 0&&(I=i.TEXTURE0+X-1),it!==I&&(i.activeTexture(I),it=I)}function J(I,gt,_t){_t===void 0&&(it===null?_t=i.TEXTURE0+X-1:_t=it);let It=at[_t];It===void 0&&(It={type:void 0,texture:void 0},at[_t]=It),(It.type!==I||It.texture!==gt)&&(it!==_t&&(i.activeTexture(_t),it=_t),i.bindTexture(I,gt||Et[I]),It.type=I,It.texture=gt)}function bt(){const I=at[it];I!==void 0&&I.type!==void 0&&(i.bindTexture(I.type,null),I.type=void 0,I.texture=void 0)}function dt(){try{i.compressedTexImage2D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function yt(){try{i.compressedTexImage3D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Rt(){try{i.texSubImage2D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Ft(){try{i.texSubImage3D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function nt(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Yt(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Xt(){try{i.texStorage2D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Nt(){try{i.texStorage3D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function At(){try{i.texImage2D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function St(){try{i.texImage3D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Bt(I){ot.equals(I)===!1&&(i.scissor(I.x,I.y,I.z,I.w),ot.copy(I))}function $t(I){ft.equals(I)===!1&&(i.viewport(I.x,I.y,I.z,I.w),ft.copy(I))}function de(I,gt){let _t=u.get(gt);_t===void 0&&(_t=new WeakMap,u.set(gt,_t));let It=_t.get(I);It===void 0&&(It=i.getUniformBlockIndex(gt,I.name),_t.set(I,It))}function Vt(I,gt){const It=u.get(gt).get(I);h.get(gt)!==It&&(i.uniformBlockBinding(gt,It,I.__bindingPointIndex),h.set(gt,It))}function ct(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),n===!0&&(i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null)),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),d={},it=null,at={},p={},g=new WeakMap,_=[],m=null,f=!1,x=null,v=null,y=null,R=null,w=null,A=null,N=null,S=new Ct(0,0,0),b=0,O=!1,H=null,U=null,L=null,D=null,G=null,ot.set(0,0,i.canvas.width,i.canvas.height),ft.set(0,0,i.canvas.width,i.canvas.height),o.reset(),l.reset(),c.reset()}return{buffers:{color:o,depth:l,stencil:c},enable:Tt,disable:ht,bindFramebuffer:Mt,drawBuffers:P,useProgram:lt,setBlending:z,setMaterial:vt,setFlipSided:mt,setCullFace:E,setLineWidth:M,setPolygonOffset:F,setScissorTest:tt,activeTexture:Q,bindTexture:J,unbindTexture:bt,compressedTexImage2D:dt,compressedTexImage3D:yt,texImage2D:At,texImage3D:St,updateUBOMapping:de,uniformBlockBinding:Vt,texStorage2D:Xt,texStorage3D:Nt,texSubImage2D:Rt,texSubImage3D:Ft,compressedTexSubImage2D:nt,compressedTexSubImage3D:Yt,scissor:Bt,viewport:$t,reset:ct}}function Zm(i,t,e,n,s,r,a){const o=s.isWebGL2,l=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new WeakMap;let u;const d=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(E,M){return p?new OffscreenCanvas(E,M):ar("canvas")}function _(E,M,F,tt){let Q=1;if((E.width>tt||E.height>tt)&&(Q=tt/Math.max(E.width,E.height)),Q<1||M===!0)if(typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&E instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&E instanceof ImageBitmap){const J=M?ya:Math.floor,bt=J(Q*E.width),dt=J(Q*E.height);u===void 0&&(u=g(bt,dt));const yt=F?g(bt,dt):u;return yt.width=bt,yt.height=dt,yt.getContext("2d").drawImage(E,0,0,bt,dt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+E.width+"x"+E.height+") to ("+bt+"x"+dt+")."),yt}else return"data"in E&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+E.width+"x"+E.height+")."),E;return E}function m(E){return Do(E.width)&&Do(E.height)}function f(E){return o?!1:E.wrapS!==sn||E.wrapT!==sn||E.minFilter!==Be&&E.minFilter!==Ze}function x(E,M){return E.generateMipmaps&&M&&E.minFilter!==Be&&E.minFilter!==Ze}function v(E){i.generateMipmap(E)}function y(E,M,F,tt,Q=!1){if(o===!1)return M;if(E!==null){if(i[E]!==void 0)return i[E];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+E+"'")}let J=M;if(M===i.RED&&(F===i.FLOAT&&(J=i.R32F),F===i.HALF_FLOAT&&(J=i.R16F),F===i.UNSIGNED_BYTE&&(J=i.R8)),M===i.RED_INTEGER&&(F===i.UNSIGNED_BYTE&&(J=i.R8UI),F===i.UNSIGNED_SHORT&&(J=i.R16UI),F===i.UNSIGNED_INT&&(J=i.R32UI),F===i.BYTE&&(J=i.R8I),F===i.SHORT&&(J=i.R16I),F===i.INT&&(J=i.R32I)),M===i.RG&&(F===i.FLOAT&&(J=i.RG32F),F===i.HALF_FLOAT&&(J=i.RG16F),F===i.UNSIGNED_BYTE&&(J=i.RG8)),M===i.RGBA){const bt=Q?nr:Zt.getTransfer(tt);F===i.FLOAT&&(J=i.RGBA32F),F===i.HALF_FLOAT&&(J=i.RGBA16F),F===i.UNSIGNED_BYTE&&(J=bt===ae?i.SRGB8_ALPHA8:i.RGBA8),F===i.UNSIGNED_SHORT_4_4_4_4&&(J=i.RGBA4),F===i.UNSIGNED_SHORT_5_5_5_1&&(J=i.RGB5_A1)}return(J===i.R16F||J===i.R32F||J===i.RG16F||J===i.RG32F||J===i.RGBA16F||J===i.RGBA32F)&&t.get("EXT_color_buffer_float"),J}function R(E,M,F){return x(E,F)===!0||E.isFramebufferTexture&&E.minFilter!==Be&&E.minFilter!==Ze?Math.log2(Math.max(M.width,M.height))+1:E.mipmaps!==void 0&&E.mipmaps.length>0?E.mipmaps.length:E.isCompressedTexture&&Array.isArray(E.image)?M.mipmaps.length:1}function w(E){return E===Be||E===io||E===Sr?i.NEAREST:i.LINEAR}function A(E){const M=E.target;M.removeEventListener("dispose",A),S(M),M.isVideoTexture&&h.delete(M)}function N(E){const M=E.target;M.removeEventListener("dispose",N),O(M)}function S(E){const M=n.get(E);if(M.__webglInit===void 0)return;const F=E.source,tt=d.get(F);if(tt){const Q=tt[M.__cacheKey];Q.usedTimes--,Q.usedTimes===0&&b(E),Object.keys(tt).length===0&&d.delete(F)}n.remove(E)}function b(E){const M=n.get(E);i.deleteTexture(M.__webglTexture);const F=E.source,tt=d.get(F);delete tt[M.__cacheKey],a.memory.textures--}function O(E){const M=E.texture,F=n.get(E),tt=n.get(M);if(tt.__webglTexture!==void 0&&(i.deleteTexture(tt.__webglTexture),a.memory.textures--),E.depthTexture&&E.depthTexture.dispose(),E.isWebGLCubeRenderTarget)for(let Q=0;Q<6;Q++){if(Array.isArray(F.__webglFramebuffer[Q]))for(let J=0;J<F.__webglFramebuffer[Q].length;J++)i.deleteFramebuffer(F.__webglFramebuffer[Q][J]);else i.deleteFramebuffer(F.__webglFramebuffer[Q]);F.__webglDepthbuffer&&i.deleteRenderbuffer(F.__webglDepthbuffer[Q])}else{if(Array.isArray(F.__webglFramebuffer))for(let Q=0;Q<F.__webglFramebuffer.length;Q++)i.deleteFramebuffer(F.__webglFramebuffer[Q]);else i.deleteFramebuffer(F.__webglFramebuffer);if(F.__webglDepthbuffer&&i.deleteRenderbuffer(F.__webglDepthbuffer),F.__webglMultisampledFramebuffer&&i.deleteFramebuffer(F.__webglMultisampledFramebuffer),F.__webglColorRenderbuffer)for(let Q=0;Q<F.__webglColorRenderbuffer.length;Q++)F.__webglColorRenderbuffer[Q]&&i.deleteRenderbuffer(F.__webglColorRenderbuffer[Q]);F.__webglDepthRenderbuffer&&i.deleteRenderbuffer(F.__webglDepthRenderbuffer)}if(E.isWebGLMultipleRenderTargets)for(let Q=0,J=M.length;Q<J;Q++){const bt=n.get(M[Q]);bt.__webglTexture&&(i.deleteTexture(bt.__webglTexture),a.memory.textures--),n.remove(M[Q])}n.remove(M),n.remove(E)}let H=0;function U(){H=0}function L(){const E=H;return E>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+E+" texture units while this GPU supports only "+s.maxTextures),H+=1,E}function D(E){const M=[];return M.push(E.wrapS),M.push(E.wrapT),M.push(E.wrapR||0),M.push(E.magFilter),M.push(E.minFilter),M.push(E.anisotropy),M.push(E.internalFormat),M.push(E.format),M.push(E.type),M.push(E.generateMipmaps),M.push(E.premultiplyAlpha),M.push(E.flipY),M.push(E.unpackAlignment),M.push(E.colorSpace),M.join()}function G(E,M){const F=n.get(E);if(E.isVideoTexture&&vt(E),E.isRenderTargetTexture===!1&&E.version>0&&F.__version!==E.version){const tt=E.image;if(tt===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(tt.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ot(F,E,M);return}}e.bindTexture(i.TEXTURE_2D,F.__webglTexture,i.TEXTURE0+M)}function X(E,M){const F=n.get(E);if(E.version>0&&F.__version!==E.version){ot(F,E,M);return}e.bindTexture(i.TEXTURE_2D_ARRAY,F.__webglTexture,i.TEXTURE0+M)}function Y(E,M){const F=n.get(E);if(E.version>0&&F.__version!==E.version){ot(F,E,M);return}e.bindTexture(i.TEXTURE_3D,F.__webglTexture,i.TEXTURE0+M)}function j(E,M){const F=n.get(E);if(E.version>0&&F.__version!==E.version){ft(F,E,M);return}e.bindTexture(i.TEXTURE_CUBE_MAP,F.__webglTexture,i.TEXTURE0+M)}const K={[ga]:i.REPEAT,[sn]:i.CLAMP_TO_EDGE,[_a]:i.MIRRORED_REPEAT},it={[Be]:i.NEAREST,[io]:i.NEAREST_MIPMAP_NEAREST,[Sr]:i.NEAREST_MIPMAP_LINEAR,[Ze]:i.LINEAR,[Du]:i.LINEAR_MIPMAP_NEAREST,[ls]:i.LINEAR_MIPMAP_LINEAR},at={[qu]:i.NEVER,[Zu]:i.ALWAYS,[Xu]:i.LESS,[lc]:i.LEQUAL,[Ku]:i.EQUAL,[$u]:i.GEQUAL,[Yu]:i.GREATER,[ju]:i.NOTEQUAL};function W(E,M,F){if(F?(i.texParameteri(E,i.TEXTURE_WRAP_S,K[M.wrapS]),i.texParameteri(E,i.TEXTURE_WRAP_T,K[M.wrapT]),(E===i.TEXTURE_3D||E===i.TEXTURE_2D_ARRAY)&&i.texParameteri(E,i.TEXTURE_WRAP_R,K[M.wrapR]),i.texParameteri(E,i.TEXTURE_MAG_FILTER,it[M.magFilter]),i.texParameteri(E,i.TEXTURE_MIN_FILTER,it[M.minFilter])):(i.texParameteri(E,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(E,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE),(E===i.TEXTURE_3D||E===i.TEXTURE_2D_ARRAY)&&i.texParameteri(E,i.TEXTURE_WRAP_R,i.CLAMP_TO_EDGE),(M.wrapS!==sn||M.wrapT!==sn)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),i.texParameteri(E,i.TEXTURE_MAG_FILTER,w(M.magFilter)),i.texParameteri(E,i.TEXTURE_MIN_FILTER,w(M.minFilter)),M.minFilter!==Be&&M.minFilter!==Ze&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),M.compareFunction&&(i.texParameteri(E,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(E,i.TEXTURE_COMPARE_FUNC,at[M.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){const tt=t.get("EXT_texture_filter_anisotropic");if(M.magFilter===Be||M.minFilter!==Sr&&M.minFilter!==ls||M.type===Un&&t.has("OES_texture_float_linear")===!1||o===!1&&M.type===bn&&t.has("OES_texture_half_float_linear")===!1)return;(M.anisotropy>1||n.get(M).__currentAnisotropy)&&(i.texParameterf(E,tt.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,s.getMaxAnisotropy())),n.get(M).__currentAnisotropy=M.anisotropy)}}function Z(E,M){let F=!1;E.__webglInit===void 0&&(E.__webglInit=!0,M.addEventListener("dispose",A));const tt=M.source;let Q=d.get(tt);Q===void 0&&(Q={},d.set(tt,Q));const J=D(M);if(J!==E.__cacheKey){Q[J]===void 0&&(Q[J]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,F=!0),Q[J].usedTimes++;const bt=Q[E.__cacheKey];bt!==void 0&&(Q[E.__cacheKey].usedTimes--,bt.usedTimes===0&&b(M)),E.__cacheKey=J,E.__webglTexture=Q[J].texture}return F}function ot(E,M,F){let tt=i.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(tt=i.TEXTURE_2D_ARRAY),M.isData3DTexture&&(tt=i.TEXTURE_3D);const Q=Z(E,M),J=M.source;e.bindTexture(tt,E.__webglTexture,i.TEXTURE0+F);const bt=n.get(J);if(J.version!==bt.__version||Q===!0){e.activeTexture(i.TEXTURE0+F);const dt=Zt.getPrimaries(Zt.workingColorSpace),yt=M.colorSpace===Je?null:Zt.getPrimaries(M.colorSpace),Rt=M.colorSpace===Je||dt===yt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,M.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,M.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Rt);const Ft=f(M)&&m(M.image)===!1;let nt=_(M.image,Ft,!1,s.maxTextureSize);nt=mt(M,nt);const Yt=m(nt)||o,Xt=r.convert(M.format,M.colorSpace);let Nt=r.convert(M.type),At=y(M.internalFormat,Xt,Nt,M.colorSpace,M.isVideoTexture);W(tt,M,Yt);let St;const Bt=M.mipmaps,$t=o&&M.isVideoTexture!==!0&&At!==rc,de=bt.__version===void 0||Q===!0,Vt=R(M,nt,Yt);if(M.isDepthTexture)At=i.DEPTH_COMPONENT,o?M.type===Un?At=i.DEPTH_COMPONENT32F:M.type===Nn?At=i.DEPTH_COMPONENT24:M.type===Jn?At=i.DEPTH24_STENCIL8:At=i.DEPTH_COMPONENT16:M.type===Un&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),M.format===Qn&&At===i.DEPTH_COMPONENT&&M.type!==Ua&&M.type!==Nn&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),M.type=Nn,Nt=r.convert(M.type)),M.format===Ui&&At===i.DEPTH_COMPONENT&&(At=i.DEPTH_STENCIL,M.type!==Jn&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),M.type=Jn,Nt=r.convert(M.type))),de&&($t?e.texStorage2D(i.TEXTURE_2D,1,At,nt.width,nt.height):e.texImage2D(i.TEXTURE_2D,0,At,nt.width,nt.height,0,Xt,Nt,null));else if(M.isDataTexture)if(Bt.length>0&&Yt){$t&&de&&e.texStorage2D(i.TEXTURE_2D,Vt,At,Bt[0].width,Bt[0].height);for(let ct=0,I=Bt.length;ct<I;ct++)St=Bt[ct],$t?e.texSubImage2D(i.TEXTURE_2D,ct,0,0,St.width,St.height,Xt,Nt,St.data):e.texImage2D(i.TEXTURE_2D,ct,At,St.width,St.height,0,Xt,Nt,St.data);M.generateMipmaps=!1}else $t?(de&&e.texStorage2D(i.TEXTURE_2D,Vt,At,nt.width,nt.height),e.texSubImage2D(i.TEXTURE_2D,0,0,0,nt.width,nt.height,Xt,Nt,nt.data)):e.texImage2D(i.TEXTURE_2D,0,At,nt.width,nt.height,0,Xt,Nt,nt.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){$t&&de&&e.texStorage3D(i.TEXTURE_2D_ARRAY,Vt,At,Bt[0].width,Bt[0].height,nt.depth);for(let ct=0,I=Bt.length;ct<I;ct++)St=Bt[ct],M.format!==rn?Xt!==null?$t?e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ct,0,0,0,St.width,St.height,nt.depth,Xt,St.data,0,0):e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,ct,At,St.width,St.height,nt.depth,0,St.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):$t?e.texSubImage3D(i.TEXTURE_2D_ARRAY,ct,0,0,0,St.width,St.height,nt.depth,Xt,Nt,St.data):e.texImage3D(i.TEXTURE_2D_ARRAY,ct,At,St.width,St.height,nt.depth,0,Xt,Nt,St.data)}else{$t&&de&&e.texStorage2D(i.TEXTURE_2D,Vt,At,Bt[0].width,Bt[0].height);for(let ct=0,I=Bt.length;ct<I;ct++)St=Bt[ct],M.format!==rn?Xt!==null?$t?e.compressedTexSubImage2D(i.TEXTURE_2D,ct,0,0,St.width,St.height,Xt,St.data):e.compressedTexImage2D(i.TEXTURE_2D,ct,At,St.width,St.height,0,St.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):$t?e.texSubImage2D(i.TEXTURE_2D,ct,0,0,St.width,St.height,Xt,Nt,St.data):e.texImage2D(i.TEXTURE_2D,ct,At,St.width,St.height,0,Xt,Nt,St.data)}else if(M.isDataArrayTexture)$t?(de&&e.texStorage3D(i.TEXTURE_2D_ARRAY,Vt,At,nt.width,nt.height,nt.depth),e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,nt.width,nt.height,nt.depth,Xt,Nt,nt.data)):e.texImage3D(i.TEXTURE_2D_ARRAY,0,At,nt.width,nt.height,nt.depth,0,Xt,Nt,nt.data);else if(M.isData3DTexture)$t?(de&&e.texStorage3D(i.TEXTURE_3D,Vt,At,nt.width,nt.height,nt.depth),e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,nt.width,nt.height,nt.depth,Xt,Nt,nt.data)):e.texImage3D(i.TEXTURE_3D,0,At,nt.width,nt.height,nt.depth,0,Xt,Nt,nt.data);else if(M.isFramebufferTexture){if(de)if($t)e.texStorage2D(i.TEXTURE_2D,Vt,At,nt.width,nt.height);else{let ct=nt.width,I=nt.height;for(let gt=0;gt<Vt;gt++)e.texImage2D(i.TEXTURE_2D,gt,At,ct,I,0,Xt,Nt,null),ct>>=1,I>>=1}}else if(Bt.length>0&&Yt){$t&&de&&e.texStorage2D(i.TEXTURE_2D,Vt,At,Bt[0].width,Bt[0].height);for(let ct=0,I=Bt.length;ct<I;ct++)St=Bt[ct],$t?e.texSubImage2D(i.TEXTURE_2D,ct,0,0,Xt,Nt,St):e.texImage2D(i.TEXTURE_2D,ct,At,Xt,Nt,St);M.generateMipmaps=!1}else $t?(de&&e.texStorage2D(i.TEXTURE_2D,Vt,At,nt.width,nt.height),e.texSubImage2D(i.TEXTURE_2D,0,0,0,Xt,Nt,nt)):e.texImage2D(i.TEXTURE_2D,0,At,Xt,Nt,nt);x(M,Yt)&&v(tt),bt.__version=J.version,M.onUpdate&&M.onUpdate(M)}E.__version=M.version}function ft(E,M,F){if(M.image.length!==6)return;const tt=Z(E,M),Q=M.source;e.bindTexture(i.TEXTURE_CUBE_MAP,E.__webglTexture,i.TEXTURE0+F);const J=n.get(Q);if(Q.version!==J.__version||tt===!0){e.activeTexture(i.TEXTURE0+F);const bt=Zt.getPrimaries(Zt.workingColorSpace),dt=M.colorSpace===Je?null:Zt.getPrimaries(M.colorSpace),yt=M.colorSpace===Je||bt===dt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,M.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,M.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,yt);const Rt=M.isCompressedTexture||M.image[0].isCompressedTexture,Ft=M.image[0]&&M.image[0].isDataTexture,nt=[];for(let ct=0;ct<6;ct++)!Rt&&!Ft?nt[ct]=_(M.image[ct],!1,!0,s.maxCubemapSize):nt[ct]=Ft?M.image[ct].image:M.image[ct],nt[ct]=mt(M,nt[ct]);const Yt=nt[0],Xt=m(Yt)||o,Nt=r.convert(M.format,M.colorSpace),At=r.convert(M.type),St=y(M.internalFormat,Nt,At,M.colorSpace),Bt=o&&M.isVideoTexture!==!0,$t=J.__version===void 0||tt===!0;let de=R(M,Yt,Xt);W(i.TEXTURE_CUBE_MAP,M,Xt);let Vt;if(Rt){Bt&&$t&&e.texStorage2D(i.TEXTURE_CUBE_MAP,de,St,Yt.width,Yt.height);for(let ct=0;ct<6;ct++){Vt=nt[ct].mipmaps;for(let I=0;I<Vt.length;I++){const gt=Vt[I];M.format!==rn?Nt!==null?Bt?e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ct,I,0,0,gt.width,gt.height,Nt,gt.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ct,I,St,gt.width,gt.height,0,gt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Bt?e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ct,I,0,0,gt.width,gt.height,Nt,At,gt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ct,I,St,gt.width,gt.height,0,Nt,At,gt.data)}}}else{Vt=M.mipmaps,Bt&&$t&&(Vt.length>0&&de++,e.texStorage2D(i.TEXTURE_CUBE_MAP,de,St,nt[0].width,nt[0].height));for(let ct=0;ct<6;ct++)if(Ft){Bt?e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ct,0,0,0,nt[ct].width,nt[ct].height,Nt,At,nt[ct].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ct,0,St,nt[ct].width,nt[ct].height,0,Nt,At,nt[ct].data);for(let I=0;I<Vt.length;I++){const _t=Vt[I].image[ct].image;Bt?e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ct,I+1,0,0,_t.width,_t.height,Nt,At,_t.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ct,I+1,St,_t.width,_t.height,0,Nt,At,_t.data)}}else{Bt?e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ct,0,0,0,Nt,At,nt[ct]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ct,0,St,Nt,At,nt[ct]);for(let I=0;I<Vt.length;I++){const gt=Vt[I];Bt?e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ct,I+1,0,0,Nt,At,gt.image[ct]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ct,I+1,St,Nt,At,gt.image[ct])}}}x(M,Xt)&&v(i.TEXTURE_CUBE_MAP),J.__version=Q.version,M.onUpdate&&M.onUpdate(M)}E.__version=M.version}function pt(E,M,F,tt,Q,J){const bt=r.convert(F.format,F.colorSpace),dt=r.convert(F.type),yt=y(F.internalFormat,bt,dt,F.colorSpace);if(!n.get(M).__hasExternalTextures){const Ft=Math.max(1,M.width>>J),nt=Math.max(1,M.height>>J);Q===i.TEXTURE_3D||Q===i.TEXTURE_2D_ARRAY?e.texImage3D(Q,J,yt,Ft,nt,M.depth,0,bt,dt,null):e.texImage2D(Q,J,yt,Ft,nt,0,bt,dt,null)}e.bindFramebuffer(i.FRAMEBUFFER,E),z(M)?l.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,tt,Q,n.get(F).__webglTexture,0,et(M)):(Q===i.TEXTURE_2D||Q>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&Q<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,tt,Q,n.get(F).__webglTexture,J),e.bindFramebuffer(i.FRAMEBUFFER,null)}function Et(E,M,F){if(i.bindRenderbuffer(i.RENDERBUFFER,E),M.depthBuffer&&!M.stencilBuffer){let tt=o===!0?i.DEPTH_COMPONENT24:i.DEPTH_COMPONENT16;if(F||z(M)){const Q=M.depthTexture;Q&&Q.isDepthTexture&&(Q.type===Un?tt=i.DEPTH_COMPONENT32F:Q.type===Nn&&(tt=i.DEPTH_COMPONENT24));const J=et(M);z(M)?l.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,J,tt,M.width,M.height):i.renderbufferStorageMultisample(i.RENDERBUFFER,J,tt,M.width,M.height)}else i.renderbufferStorage(i.RENDERBUFFER,tt,M.width,M.height);i.framebufferRenderbuffer(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.RENDERBUFFER,E)}else if(M.depthBuffer&&M.stencilBuffer){const tt=et(M);F&&z(M)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,tt,i.DEPTH24_STENCIL8,M.width,M.height):z(M)?l.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,tt,i.DEPTH24_STENCIL8,M.width,M.height):i.renderbufferStorage(i.RENDERBUFFER,i.DEPTH_STENCIL,M.width,M.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.RENDERBUFFER,E)}else{const tt=M.isWebGLMultipleRenderTargets===!0?M.texture:[M.texture];for(let Q=0;Q<tt.length;Q++){const J=tt[Q],bt=r.convert(J.format,J.colorSpace),dt=r.convert(J.type),yt=y(J.internalFormat,bt,dt,J.colorSpace),Rt=et(M);F&&z(M)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Rt,yt,M.width,M.height):z(M)?l.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Rt,yt,M.width,M.height):i.renderbufferStorage(i.RENDERBUFFER,yt,M.width,M.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Tt(E,M){if(M&&M.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,E),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(M.depthTexture).__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),G(M.depthTexture,0);const tt=n.get(M.depthTexture).__webglTexture,Q=et(M);if(M.depthTexture.format===Qn)z(M)?l.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,tt,0,Q):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,tt,0);else if(M.depthTexture.format===Ui)z(M)?l.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,tt,0,Q):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,tt,0);else throw new Error("Unknown depthTexture format")}function ht(E){const M=n.get(E),F=E.isWebGLCubeRenderTarget===!0;if(E.depthTexture&&!M.__autoAllocateDepthBuffer){if(F)throw new Error("target.depthTexture not supported in Cube render targets");Tt(M.__webglFramebuffer,E)}else if(F){M.__webglDepthbuffer=[];for(let tt=0;tt<6;tt++)e.bindFramebuffer(i.FRAMEBUFFER,M.__webglFramebuffer[tt]),M.__webglDepthbuffer[tt]=i.createRenderbuffer(),Et(M.__webglDepthbuffer[tt],E,!1)}else e.bindFramebuffer(i.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer=i.createRenderbuffer(),Et(M.__webglDepthbuffer,E,!1);e.bindFramebuffer(i.FRAMEBUFFER,null)}function Mt(E,M,F){const tt=n.get(E);M!==void 0&&pt(tt.__webglFramebuffer,E,E.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),F!==void 0&&ht(E)}function P(E){const M=E.texture,F=n.get(E),tt=n.get(M);E.addEventListener("dispose",N),E.isWebGLMultipleRenderTargets!==!0&&(tt.__webglTexture===void 0&&(tt.__webglTexture=i.createTexture()),tt.__version=M.version,a.memory.textures++);const Q=E.isWebGLCubeRenderTarget===!0,J=E.isWebGLMultipleRenderTargets===!0,bt=m(E)||o;if(Q){F.__webglFramebuffer=[];for(let dt=0;dt<6;dt++)if(o&&M.mipmaps&&M.mipmaps.length>0){F.__webglFramebuffer[dt]=[];for(let yt=0;yt<M.mipmaps.length;yt++)F.__webglFramebuffer[dt][yt]=i.createFramebuffer()}else F.__webglFramebuffer[dt]=i.createFramebuffer()}else{if(o&&M.mipmaps&&M.mipmaps.length>0){F.__webglFramebuffer=[];for(let dt=0;dt<M.mipmaps.length;dt++)F.__webglFramebuffer[dt]=i.createFramebuffer()}else F.__webglFramebuffer=i.createFramebuffer();if(J)if(s.drawBuffers){const dt=E.texture;for(let yt=0,Rt=dt.length;yt<Rt;yt++){const Ft=n.get(dt[yt]);Ft.__webglTexture===void 0&&(Ft.__webglTexture=i.createTexture(),a.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(o&&E.samples>0&&z(E)===!1){const dt=J?M:[M];F.__webglMultisampledFramebuffer=i.createFramebuffer(),F.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,F.__webglMultisampledFramebuffer);for(let yt=0;yt<dt.length;yt++){const Rt=dt[yt];F.__webglColorRenderbuffer[yt]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,F.__webglColorRenderbuffer[yt]);const Ft=r.convert(Rt.format,Rt.colorSpace),nt=r.convert(Rt.type),Yt=y(Rt.internalFormat,Ft,nt,Rt.colorSpace,E.isXRRenderTarget===!0),Xt=et(E);i.renderbufferStorageMultisample(i.RENDERBUFFER,Xt,Yt,E.width,E.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+yt,i.RENDERBUFFER,F.__webglColorRenderbuffer[yt])}i.bindRenderbuffer(i.RENDERBUFFER,null),E.depthBuffer&&(F.__webglDepthRenderbuffer=i.createRenderbuffer(),Et(F.__webglDepthRenderbuffer,E,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(Q){e.bindTexture(i.TEXTURE_CUBE_MAP,tt.__webglTexture),W(i.TEXTURE_CUBE_MAP,M,bt);for(let dt=0;dt<6;dt++)if(o&&M.mipmaps&&M.mipmaps.length>0)for(let yt=0;yt<M.mipmaps.length;yt++)pt(F.__webglFramebuffer[dt][yt],E,M,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+dt,yt);else pt(F.__webglFramebuffer[dt],E,M,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+dt,0);x(M,bt)&&v(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(J){const dt=E.texture;for(let yt=0,Rt=dt.length;yt<Rt;yt++){const Ft=dt[yt],nt=n.get(Ft);e.bindTexture(i.TEXTURE_2D,nt.__webglTexture),W(i.TEXTURE_2D,Ft,bt),pt(F.__webglFramebuffer,E,Ft,i.COLOR_ATTACHMENT0+yt,i.TEXTURE_2D,0),x(Ft,bt)&&v(i.TEXTURE_2D)}e.unbindTexture()}else{let dt=i.TEXTURE_2D;if((E.isWebGL3DRenderTarget||E.isWebGLArrayRenderTarget)&&(o?dt=E.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),e.bindTexture(dt,tt.__webglTexture),W(dt,M,bt),o&&M.mipmaps&&M.mipmaps.length>0)for(let yt=0;yt<M.mipmaps.length;yt++)pt(F.__webglFramebuffer[yt],E,M,i.COLOR_ATTACHMENT0,dt,yt);else pt(F.__webglFramebuffer,E,M,i.COLOR_ATTACHMENT0,dt,0);x(M,bt)&&v(dt),e.unbindTexture()}E.depthBuffer&&ht(E)}function lt(E){const M=m(E)||o,F=E.isWebGLMultipleRenderTargets===!0?E.texture:[E.texture];for(let tt=0,Q=F.length;tt<Q;tt++){const J=F[tt];if(x(J,M)){const bt=E.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:i.TEXTURE_2D,dt=n.get(J).__webglTexture;e.bindTexture(bt,dt),v(bt),e.unbindTexture()}}}function $(E){if(o&&E.samples>0&&z(E)===!1){const M=E.isWebGLMultipleRenderTargets?E.texture:[E.texture],F=E.width,tt=E.height;let Q=i.COLOR_BUFFER_BIT;const J=[],bt=E.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,dt=n.get(E),yt=E.isWebGLMultipleRenderTargets===!0;if(yt)for(let Rt=0;Rt<M.length;Rt++)e.bindFramebuffer(i.FRAMEBUFFER,dt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Rt,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,dt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Rt,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,dt.__webglMultisampledFramebuffer),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,dt.__webglFramebuffer);for(let Rt=0;Rt<M.length;Rt++){J.push(i.COLOR_ATTACHMENT0+Rt),E.depthBuffer&&J.push(bt);const Ft=dt.__ignoreDepthValues!==void 0?dt.__ignoreDepthValues:!1;if(Ft===!1&&(E.depthBuffer&&(Q|=i.DEPTH_BUFFER_BIT),E.stencilBuffer&&(Q|=i.STENCIL_BUFFER_BIT)),yt&&i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,dt.__webglColorRenderbuffer[Rt]),Ft===!0&&(i.invalidateFramebuffer(i.READ_FRAMEBUFFER,[bt]),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[bt])),yt){const nt=n.get(M[Rt]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,nt,0)}i.blitFramebuffer(0,0,F,tt,0,0,F,tt,Q,i.NEAREST),c&&i.invalidateFramebuffer(i.READ_FRAMEBUFFER,J)}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),yt)for(let Rt=0;Rt<M.length;Rt++){e.bindFramebuffer(i.FRAMEBUFFER,dt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Rt,i.RENDERBUFFER,dt.__webglColorRenderbuffer[Rt]);const Ft=n.get(M[Rt]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,dt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Rt,i.TEXTURE_2D,Ft,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,dt.__webglMultisampledFramebuffer)}}function et(E){return Math.min(s.maxSamples,E.samples)}function z(E){const M=n.get(E);return o&&E.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function vt(E){const M=a.render.frame;h.get(E)!==M&&(h.set(E,M),E.update())}function mt(E,M){const F=E.colorSpace,tt=E.format,Q=E.type;return E.isCompressedTexture===!0||E.isVideoTexture===!0||E.format===va||F!==En&&F!==Je&&(Zt.getTransfer(F)===ae?o===!1?t.has("EXT_sRGB")===!0&&tt===rn?(E.format=va,E.minFilter=Ze,E.generateMipmaps=!1):M=uc.sRGBToLinear(M):(tt!==rn||Q!==Fn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",F)),M}this.allocateTextureUnit=L,this.resetTextureUnits=U,this.setTexture2D=G,this.setTexture2DArray=X,this.setTexture3D=Y,this.setTextureCube=j,this.rebindTextures=Mt,this.setupRenderTarget=P,this.updateRenderTargetMipmap=lt,this.updateMultisampleRenderTarget=$,this.setupDepthRenderbuffer=ht,this.setupFrameBufferTexture=pt,this.useMultisampledRTT=z}function Jm(i,t,e){const n=e.isWebGL2;function s(r,a=Je){let o;const l=Zt.getTransfer(a);if(r===Fn)return i.UNSIGNED_BYTE;if(r===tc)return i.UNSIGNED_SHORT_4_4_4_4;if(r===ec)return i.UNSIGNED_SHORT_5_5_5_1;if(r===Nu)return i.BYTE;if(r===Uu)return i.SHORT;if(r===Ua)return i.UNSIGNED_SHORT;if(r===Ql)return i.INT;if(r===Nn)return i.UNSIGNED_INT;if(r===Un)return i.FLOAT;if(r===bn)return n?i.HALF_FLOAT:(o=t.get("OES_texture_half_float"),o!==null?o.HALF_FLOAT_OES:null);if(r===Ou)return i.ALPHA;if(r===rn)return i.RGBA;if(r===Fu)return i.LUMINANCE;if(r===Gu)return i.LUMINANCE_ALPHA;if(r===Qn)return i.DEPTH_COMPONENT;if(r===Ui)return i.DEPTH_STENCIL;if(r===va)return o=t.get("EXT_sRGB"),o!==null?o.SRGB_ALPHA_EXT:null;if(r===Bu)return i.RED;if(r===nc)return i.RED_INTEGER;if(r===Hu)return i.RG;if(r===ic)return i.RG_INTEGER;if(r===sc)return i.RGBA_INTEGER;if(r===br||r===Er||r===Tr||r===wr)if(l===ae)if(o=t.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(r===br)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===Er)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===Tr)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===wr)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=t.get("WEBGL_compressed_texture_s3tc"),o!==null){if(r===br)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===Er)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===Tr)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===wr)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===so||r===ro||r===ao||r===oo)if(o=t.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(r===so)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===ro)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===ao)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===oo)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===rc)return o=t.get("WEBGL_compressed_texture_etc1"),o!==null?o.COMPRESSED_RGB_ETC1_WEBGL:null;if(r===lo||r===co)if(o=t.get("WEBGL_compressed_texture_etc"),o!==null){if(r===lo)return l===ae?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(r===co)return l===ae?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===uo||r===ho||r===fo||r===po||r===mo||r===go||r===_o||r===vo||r===xo||r===yo||r===Mo||r===So||r===bo||r===Eo)if(o=t.get("WEBGL_compressed_texture_astc"),o!==null){if(r===uo)return l===ae?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===ho)return l===ae?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===fo)return l===ae?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===po)return l===ae?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===mo)return l===ae?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===go)return l===ae?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===_o)return l===ae?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===vo)return l===ae?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===xo)return l===ae?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===yo)return l===ae?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===Mo)return l===ae?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===So)return l===ae?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===bo)return l===ae?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===Eo)return l===ae?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===Ar||r===To||r===wo)if(o=t.get("EXT_texture_compression_bptc"),o!==null){if(r===Ar)return l===ae?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===To)return o.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===wo)return o.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===ku||r===Ao||r===Co||r===Ro)if(o=t.get("EXT_texture_compression_rgtc"),o!==null){if(r===Ar)return o.COMPRESSED_RED_RGTC1_EXT;if(r===Ao)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===Co)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===Ro)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===Jn?n?i.UNSIGNED_INT_24_8:(o=t.get("WEBGL_depth_texture"),o!==null?o.UNSIGNED_INT_24_8_WEBGL:null):i[r]!==void 0?i[r]:null}return{convert:s}}class Qm extends Ke{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class ne extends Pe{constructor(){super(),this.isGroup=!0,this.type="Group"}}const t0={type:"move"};class Jr{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ne,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ne,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new C,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new C),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ne,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new C,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new C),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){a=!0;for(const _ of t.hand.values()){const m=e.getJointPose(_,n),f=this._getHandJoint(c,_);m!==null&&(f.matrix.fromArray(m.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=m.radius),f.visible=m!==null}const h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],d=h.position.distanceTo(u.position),p=.02,g=.005;c.inputState.pinching&&d>p+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&d<=p-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(t0)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new ne;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}class e0 extends ki{constructor(t,e){super();const n=this;let s=null,r=1,a=null,o="local-floor",l=1,c=null,h=null,u=null,d=null,p=null,g=null;const _=e.getContextAttributes();let m=null,f=null;const x=[],v=[],y=new st;let R=null;const w=new Ke;w.layers.enable(1),w.viewport=new ce;const A=new Ke;A.layers.enable(2),A.viewport=new ce;const N=[w,A],S=new Qm;S.layers.enable(1),S.layers.enable(2);let b=null,O=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(W){let Z=x[W];return Z===void 0&&(Z=new Jr,x[W]=Z),Z.getTargetRaySpace()},this.getControllerGrip=function(W){let Z=x[W];return Z===void 0&&(Z=new Jr,x[W]=Z),Z.getGripSpace()},this.getHand=function(W){let Z=x[W];return Z===void 0&&(Z=new Jr,x[W]=Z),Z.getHandSpace()};function H(W){const Z=v.indexOf(W.inputSource);if(Z===-1)return;const ot=x[Z];ot!==void 0&&(ot.update(W.inputSource,W.frame,c||a),ot.dispatchEvent({type:W.type,data:W.inputSource}))}function U(){s.removeEventListener("select",H),s.removeEventListener("selectstart",H),s.removeEventListener("selectend",H),s.removeEventListener("squeeze",H),s.removeEventListener("squeezestart",H),s.removeEventListener("squeezeend",H),s.removeEventListener("end",U),s.removeEventListener("inputsourceschange",L);for(let W=0;W<x.length;W++){const Z=v[W];Z!==null&&(v[W]=null,x[W].disconnect(Z))}b=null,O=null,t.setRenderTarget(m),p=null,d=null,u=null,s=null,f=null,at.stop(),n.isPresenting=!1,t.setPixelRatio(R),t.setSize(y.width,y.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(W){r=W,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(W){o=W,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(W){c=W},this.getBaseLayer=function(){return d!==null?d:p},this.getBinding=function(){return u},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(W){if(s=W,s!==null){if(m=t.getRenderTarget(),s.addEventListener("select",H),s.addEventListener("selectstart",H),s.addEventListener("selectend",H),s.addEventListener("squeeze",H),s.addEventListener("squeezestart",H),s.addEventListener("squeezeend",H),s.addEventListener("end",U),s.addEventListener("inputsourceschange",L),_.xrCompatible!==!0&&await e.makeXRCompatible(),R=t.getPixelRatio(),t.getSize(y),s.renderState.layers===void 0||t.capabilities.isWebGL2===!1){const Z={antialias:s.renderState.layers===void 0?_.antialias:!0,alpha:!0,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(s,e,Z),s.updateRenderState({baseLayer:p}),t.setPixelRatio(1),t.setSize(p.framebufferWidth,p.framebufferHeight,!1),f=new ln(p.framebufferWidth,p.framebufferHeight,{format:rn,type:Fn,colorSpace:t.outputColorSpace,stencilBuffer:_.stencil})}else{let Z=null,ot=null,ft=null;_.depth&&(ft=_.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,Z=_.stencil?Ui:Qn,ot=_.stencil?Jn:Nn);const pt={colorFormat:e.RGBA8,depthFormat:ft,scaleFactor:r};u=new XRWebGLBinding(s,e),d=u.createProjectionLayer(pt),s.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),f=new ln(d.textureWidth,d.textureHeight,{format:rn,type:Fn,depthTexture:new Mc(d.textureWidth,d.textureHeight,ot,void 0,void 0,void 0,void 0,void 0,void 0,Z),stencilBuffer:_.stencil,colorSpace:t.outputColorSpace,samples:_.antialias?4:0});const Et=t.properties.get(f);Et.__ignoreDepthValues=d.ignoreDepthValues}f.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await s.requestReferenceSpace(o),at.setContext(s),at.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode};function L(W){for(let Z=0;Z<W.removed.length;Z++){const ot=W.removed[Z],ft=v.indexOf(ot);ft>=0&&(v[ft]=null,x[ft].disconnect(ot))}for(let Z=0;Z<W.added.length;Z++){const ot=W.added[Z];let ft=v.indexOf(ot);if(ft===-1){for(let Et=0;Et<x.length;Et++)if(Et>=v.length){v.push(ot),ft=Et;break}else if(v[Et]===null){v[Et]=ot,ft=Et;break}if(ft===-1)break}const pt=x[ft];pt&&pt.connect(ot)}}const D=new C,G=new C;function X(W,Z,ot){D.setFromMatrixPosition(Z.matrixWorld),G.setFromMatrixPosition(ot.matrixWorld);const ft=D.distanceTo(G),pt=Z.projectionMatrix.elements,Et=ot.projectionMatrix.elements,Tt=pt[14]/(pt[10]-1),ht=pt[14]/(pt[10]+1),Mt=(pt[9]+1)/pt[5],P=(pt[9]-1)/pt[5],lt=(pt[8]-1)/pt[0],$=(Et[8]+1)/Et[0],et=Tt*lt,z=Tt*$,vt=ft/(-lt+$),mt=vt*-lt;Z.matrixWorld.decompose(W.position,W.quaternion,W.scale),W.translateX(mt),W.translateZ(vt),W.matrixWorld.compose(W.position,W.quaternion,W.scale),W.matrixWorldInverse.copy(W.matrixWorld).invert();const E=Tt+vt,M=ht+vt,F=et-mt,tt=z+(ft-mt),Q=Mt*ht/M*E,J=P*ht/M*E;W.projectionMatrix.makePerspective(F,tt,Q,J,E,M),W.projectionMatrixInverse.copy(W.projectionMatrix).invert()}function Y(W,Z){Z===null?W.matrixWorld.copy(W.matrix):W.matrixWorld.multiplyMatrices(Z.matrixWorld,W.matrix),W.matrixWorldInverse.copy(W.matrixWorld).invert()}this.updateCamera=function(W){if(s===null)return;S.near=A.near=w.near=W.near,S.far=A.far=w.far=W.far,(b!==S.near||O!==S.far)&&(s.updateRenderState({depthNear:S.near,depthFar:S.far}),b=S.near,O=S.far);const Z=W.parent,ot=S.cameras;Y(S,Z);for(let ft=0;ft<ot.length;ft++)Y(ot[ft],Z);ot.length===2?X(S,w,A):S.projectionMatrix.copy(w.projectionMatrix),j(W,S,Z)};function j(W,Z,ot){ot===null?W.matrix.copy(Z.matrixWorld):(W.matrix.copy(ot.matrixWorld),W.matrix.invert(),W.matrix.multiply(Z.matrixWorld)),W.matrix.decompose(W.position,W.quaternion,W.scale),W.updateMatrixWorld(!0),W.projectionMatrix.copy(Z.projectionMatrix),W.projectionMatrixInverse.copy(Z.projectionMatrixInverse),W.isPerspectiveCamera&&(W.fov=xa*2*Math.atan(1/W.projectionMatrix.elements[5]),W.zoom=1)}this.getCamera=function(){return S},this.getFoveation=function(){if(!(d===null&&p===null))return l},this.setFoveation=function(W){l=W,d!==null&&(d.fixedFoveation=W),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=W)};let K=null;function it(W,Z){if(h=Z.getViewerPose(c||a),g=Z,h!==null){const ot=h.views;p!==null&&(t.setRenderTargetFramebuffer(f,p.framebuffer),t.setRenderTarget(f));let ft=!1;ot.length!==S.cameras.length&&(S.cameras.length=0,ft=!0);for(let pt=0;pt<ot.length;pt++){const Et=ot[pt];let Tt=null;if(p!==null)Tt=p.getViewport(Et);else{const Mt=u.getViewSubImage(d,Et);Tt=Mt.viewport,pt===0&&(t.setRenderTargetTextures(f,Mt.colorTexture,d.ignoreDepthValues?void 0:Mt.depthStencilTexture),t.setRenderTarget(f))}let ht=N[pt];ht===void 0&&(ht=new Ke,ht.layers.enable(pt),ht.viewport=new ce,N[pt]=ht),ht.matrix.fromArray(Et.transform.matrix),ht.matrix.decompose(ht.position,ht.quaternion,ht.scale),ht.projectionMatrix.fromArray(Et.projectionMatrix),ht.projectionMatrixInverse.copy(ht.projectionMatrix).invert(),ht.viewport.set(Tt.x,Tt.y,Tt.width,Tt.height),pt===0&&(S.matrix.copy(ht.matrix),S.matrix.decompose(S.position,S.quaternion,S.scale)),ft===!0&&S.cameras.push(ht)}}for(let ot=0;ot<x.length;ot++){const ft=v[ot],pt=x[ot];ft!==null&&pt!==void 0&&pt.update(ft,Z,c||a)}K&&K(W,Z),Z.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:Z}),g=null}const at=new xc;at.setAnimationLoop(it),this.setAnimationLoop=function(W){K=W},this.dispose=function(){}}}function n0(i,t){function e(m,f){m.matrixAutoUpdate===!0&&m.updateMatrix(),f.value.copy(m.matrix)}function n(m,f){f.color.getRGB(m.fogColor.value,gc(i)),f.isFog?(m.fogNear.value=f.near,m.fogFar.value=f.far):f.isFogExp2&&(m.fogDensity.value=f.density)}function s(m,f,x,v,y){f.isMeshBasicMaterial||f.isMeshLambertMaterial?r(m,f):f.isMeshToonMaterial?(r(m,f),u(m,f)):f.isMeshPhongMaterial?(r(m,f),h(m,f)):f.isMeshStandardMaterial?(r(m,f),d(m,f),f.isMeshPhysicalMaterial&&p(m,f,y)):f.isMeshMatcapMaterial?(r(m,f),g(m,f)):f.isMeshDepthMaterial?r(m,f):f.isMeshDistanceMaterial?(r(m,f),_(m,f)):f.isMeshNormalMaterial?r(m,f):f.isLineBasicMaterial?(a(m,f),f.isLineDashedMaterial&&o(m,f)):f.isPointsMaterial?l(m,f,x,v):f.isSpriteMaterial?c(m,f):f.isShadowMaterial?(m.color.value.copy(f.color),m.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function r(m,f){m.opacity.value=f.opacity,f.color&&m.diffuse.value.copy(f.color),f.emissive&&m.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(m.map.value=f.map,e(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,e(f.alphaMap,m.alphaMapTransform)),f.bumpMap&&(m.bumpMap.value=f.bumpMap,e(f.bumpMap,m.bumpMapTransform),m.bumpScale.value=f.bumpScale,f.side===Re&&(m.bumpScale.value*=-1)),f.normalMap&&(m.normalMap.value=f.normalMap,e(f.normalMap,m.normalMapTransform),m.normalScale.value.copy(f.normalScale),f.side===Re&&m.normalScale.value.negate()),f.displacementMap&&(m.displacementMap.value=f.displacementMap,e(f.displacementMap,m.displacementMapTransform),m.displacementScale.value=f.displacementScale,m.displacementBias.value=f.displacementBias),f.emissiveMap&&(m.emissiveMap.value=f.emissiveMap,e(f.emissiveMap,m.emissiveMapTransform)),f.specularMap&&(m.specularMap.value=f.specularMap,e(f.specularMap,m.specularMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest);const x=t.get(f).envMap;if(x&&(m.envMap.value=x,m.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=f.reflectivity,m.ior.value=f.ior,m.refractionRatio.value=f.refractionRatio),f.lightMap){m.lightMap.value=f.lightMap;const v=i._useLegacyLights===!0?Math.PI:1;m.lightMapIntensity.value=f.lightMapIntensity*v,e(f.lightMap,m.lightMapTransform)}f.aoMap&&(m.aoMap.value=f.aoMap,m.aoMapIntensity.value=f.aoMapIntensity,e(f.aoMap,m.aoMapTransform))}function a(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,f.map&&(m.map.value=f.map,e(f.map,m.mapTransform))}function o(m,f){m.dashSize.value=f.dashSize,m.totalSize.value=f.dashSize+f.gapSize,m.scale.value=f.scale}function l(m,f,x,v){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.size.value=f.size*x,m.scale.value=v*.5,f.map&&(m.map.value=f.map,e(f.map,m.uvTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,e(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function c(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.rotation.value=f.rotation,f.map&&(m.map.value=f.map,e(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,e(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function h(m,f){m.specular.value.copy(f.specular),m.shininess.value=Math.max(f.shininess,1e-4)}function u(m,f){f.gradientMap&&(m.gradientMap.value=f.gradientMap)}function d(m,f){m.metalness.value=f.metalness,f.metalnessMap&&(m.metalnessMap.value=f.metalnessMap,e(f.metalnessMap,m.metalnessMapTransform)),m.roughness.value=f.roughness,f.roughnessMap&&(m.roughnessMap.value=f.roughnessMap,e(f.roughnessMap,m.roughnessMapTransform)),t.get(f).envMap&&(m.envMapIntensity.value=f.envMapIntensity)}function p(m,f,x){m.ior.value=f.ior,f.sheen>0&&(m.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),m.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(m.sheenColorMap.value=f.sheenColorMap,e(f.sheenColorMap,m.sheenColorMapTransform)),f.sheenRoughnessMap&&(m.sheenRoughnessMap.value=f.sheenRoughnessMap,e(f.sheenRoughnessMap,m.sheenRoughnessMapTransform))),f.clearcoat>0&&(m.clearcoat.value=f.clearcoat,m.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(m.clearcoatMap.value=f.clearcoatMap,e(f.clearcoatMap,m.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,e(f.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(m.clearcoatNormalMap.value=f.clearcoatNormalMap,e(f.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===Re&&m.clearcoatNormalScale.value.negate())),f.iridescence>0&&(m.iridescence.value=f.iridescence,m.iridescenceIOR.value=f.iridescenceIOR,m.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(m.iridescenceMap.value=f.iridescenceMap,e(f.iridescenceMap,m.iridescenceMapTransform)),f.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=f.iridescenceThicknessMap,e(f.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),f.transmission>0&&(m.transmission.value=f.transmission,m.transmissionSamplerMap.value=x.texture,m.transmissionSamplerSize.value.set(x.width,x.height),f.transmissionMap&&(m.transmissionMap.value=f.transmissionMap,e(f.transmissionMap,m.transmissionMapTransform)),m.thickness.value=f.thickness,f.thicknessMap&&(m.thicknessMap.value=f.thicknessMap,e(f.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=f.attenuationDistance,m.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(m.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(m.anisotropyMap.value=f.anisotropyMap,e(f.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=f.specularIntensity,m.specularColor.value.copy(f.specularColor),f.specularColorMap&&(m.specularColorMap.value=f.specularColorMap,e(f.specularColorMap,m.specularColorMapTransform)),f.specularIntensityMap&&(m.specularIntensityMap.value=f.specularIntensityMap,e(f.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,f){f.matcap&&(m.matcap.value=f.matcap)}function _(m,f){const x=t.get(f).light;m.referencePosition.value.setFromMatrixPosition(x.matrixWorld),m.nearDistance.value=x.shadow.camera.near,m.farDistance.value=x.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function i0(i,t,e,n){let s={},r={},a=[];const o=e.isWebGL2?i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(x,v){const y=v.program;n.uniformBlockBinding(x,y)}function c(x,v){let y=s[x.id];y===void 0&&(g(x),y=h(x),s[x.id]=y,x.addEventListener("dispose",m));const R=v.program;n.updateUBOMapping(x,R);const w=t.render.frame;r[x.id]!==w&&(d(x),r[x.id]=w)}function h(x){const v=u();x.__bindingPointIndex=v;const y=i.createBuffer(),R=x.__size,w=x.usage;return i.bindBuffer(i.UNIFORM_BUFFER,y),i.bufferData(i.UNIFORM_BUFFER,R,w),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,v,y),y}function u(){for(let x=0;x<o;x++)if(a.indexOf(x)===-1)return a.push(x),x;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(x){const v=s[x.id],y=x.uniforms,R=x.__cache;i.bindBuffer(i.UNIFORM_BUFFER,v);for(let w=0,A=y.length;w<A;w++){const N=Array.isArray(y[w])?y[w]:[y[w]];for(let S=0,b=N.length;S<b;S++){const O=N[S];if(p(O,w,S,R)===!0){const H=O.__offset,U=Array.isArray(O.value)?O.value:[O.value];let L=0;for(let D=0;D<U.length;D++){const G=U[D],X=_(G);typeof G=="number"||typeof G=="boolean"?(O.__data[0]=G,i.bufferSubData(i.UNIFORM_BUFFER,H+L,O.__data)):G.isMatrix3?(O.__data[0]=G.elements[0],O.__data[1]=G.elements[1],O.__data[2]=G.elements[2],O.__data[3]=0,O.__data[4]=G.elements[3],O.__data[5]=G.elements[4],O.__data[6]=G.elements[5],O.__data[7]=0,O.__data[8]=G.elements[6],O.__data[9]=G.elements[7],O.__data[10]=G.elements[8],O.__data[11]=0):(G.toArray(O.__data,L),L+=X.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,H,O.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function p(x,v,y,R){const w=x.value,A=v+"_"+y;if(R[A]===void 0)return typeof w=="number"||typeof w=="boolean"?R[A]=w:R[A]=w.clone(),!0;{const N=R[A];if(typeof w=="number"||typeof w=="boolean"){if(N!==w)return R[A]=w,!0}else if(N.equals(w)===!1)return N.copy(w),!0}return!1}function g(x){const v=x.uniforms;let y=0;const R=16;for(let A=0,N=v.length;A<N;A++){const S=Array.isArray(v[A])?v[A]:[v[A]];for(let b=0,O=S.length;b<O;b++){const H=S[b],U=Array.isArray(H.value)?H.value:[H.value];for(let L=0,D=U.length;L<D;L++){const G=U[L],X=_(G),Y=y%R;Y!==0&&R-Y<X.boundary&&(y+=R-Y),H.__data=new Float32Array(X.storage/Float32Array.BYTES_PER_ELEMENT),H.__offset=y,y+=X.storage}}}const w=y%R;return w>0&&(y+=R-w),x.__size=y,x.__cache={},this}function _(x){const v={boundary:0,storage:0};return typeof x=="number"||typeof x=="boolean"?(v.boundary=4,v.storage=4):x.isVector2?(v.boundary=8,v.storage=8):x.isVector3||x.isColor?(v.boundary=16,v.storage=12):x.isVector4?(v.boundary=16,v.storage=16):x.isMatrix3?(v.boundary=48,v.storage=48):x.isMatrix4?(v.boundary=64,v.storage=64):x.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",x),v}function m(x){const v=x.target;v.removeEventListener("dispose",m);const y=a.indexOf(v.__bindingPointIndex);a.splice(y,1),i.deleteBuffer(s[v.id]),delete s[v.id],delete r[v.id]}function f(){for(const x in s)i.deleteBuffer(s[x]);a=[],s={},r={}}return{bind:l,update:c,dispose:f}}class Ac{constructor(t={}){const{canvas:e=Qu(),context:n=null,depth:s=!0,stencil:r=!0,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1}=t;this.isWebGLRenderer=!0;let d;n!==null?d=n.getContextAttributes().alpha:d=a;const p=new Uint32Array(4),g=new Int32Array(4);let _=null,m=null;const f=[],x=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=ge,this._useLegacyLights=!1,this.toneMapping=On,this.toneMappingExposure=1;const v=this;let y=!1,R=0,w=0,A=null,N=-1,S=null;const b=new ce,O=new ce;let H=null;const U=new Ct(0);let L=0,D=e.width,G=e.height,X=1,Y=null,j=null;const K=new ce(0,0,D,G),it=new ce(0,0,D,G);let at=!1;const W=new Ga;let Z=!1,ot=!1,ft=null;const pt=new se,Et=new st,Tt=new C,ht={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function Mt(){return A===null?X:1}let P=n;function lt(T,B){for(let V=0;V<T.length;V++){const q=T[V],k=e.getContext(q,B);if(k!==null)return k}return null}try{const T={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Na}`),e.addEventListener("webglcontextlost",ct,!1),e.addEventListener("webglcontextrestored",I,!1),e.addEventListener("webglcontextcreationerror",gt,!1),P===null){const B=["webgl2","webgl","experimental-webgl"];if(v.isWebGL1Renderer===!0&&B.shift(),P=lt(B,T),P===null)throw lt(B)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&P instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),P.getShaderPrecisionFormat===void 0&&(P.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(T){throw console.error("THREE.WebGLRenderer: "+T.message),T}let $,et,z,vt,mt,E,M,F,tt,Q,J,bt,dt,yt,Rt,Ft,nt,Yt,Xt,Nt,At,St,Bt,$t;function de(){$=new fp(P),et=new op(P,$,t),$.init(et),St=new Jm(P,$,et),z=new $m(P,$,et),vt=new gp(P),mt=new Om,E=new Zm(P,$,z,mt,et,St,vt),M=new cp(v),F=new dp(v),tt=new bh(P,et),Bt=new rp(P,$,tt,et),Q=new pp(P,tt,vt,Bt),J=new yp(P,Q,tt,vt),Xt=new xp(P,et,E),Ft=new lp(mt),bt=new Um(v,M,F,$,et,Bt,Ft),dt=new n0(v,mt),yt=new Gm,Rt=new Wm($,et),Yt=new sp(v,M,F,z,J,d,l),nt=new jm(v,J,et),$t=new i0(P,vt,et,z),Nt=new ap(P,$,vt,et),At=new mp(P,$,vt,et),vt.programs=bt.programs,v.capabilities=et,v.extensions=$,v.properties=mt,v.renderLists=yt,v.shadowMap=nt,v.state=z,v.info=vt}de();const Vt=new e0(v,P);this.xr=Vt,this.getContext=function(){return P},this.getContextAttributes=function(){return P.getContextAttributes()},this.forceContextLoss=function(){const T=$.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){const T=$.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return X},this.setPixelRatio=function(T){T!==void 0&&(X=T,this.setSize(D,G,!1))},this.getSize=function(T){return T.set(D,G)},this.setSize=function(T,B,V=!0){if(Vt.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}D=T,G=B,e.width=Math.floor(T*X),e.height=Math.floor(B*X),V===!0&&(e.style.width=T+"px",e.style.height=B+"px"),this.setViewport(0,0,T,B)},this.getDrawingBufferSize=function(T){return T.set(D*X,G*X).floor()},this.setDrawingBufferSize=function(T,B,V){D=T,G=B,X=V,e.width=Math.floor(T*V),e.height=Math.floor(B*V),this.setViewport(0,0,T,B)},this.getCurrentViewport=function(T){return T.copy(b)},this.getViewport=function(T){return T.copy(K)},this.setViewport=function(T,B,V,q){T.isVector4?K.set(T.x,T.y,T.z,T.w):K.set(T,B,V,q),z.viewport(b.copy(K).multiplyScalar(X).floor())},this.getScissor=function(T){return T.copy(it)},this.setScissor=function(T,B,V,q){T.isVector4?it.set(T.x,T.y,T.z,T.w):it.set(T,B,V,q),z.scissor(O.copy(it).multiplyScalar(X).floor())},this.getScissorTest=function(){return at},this.setScissorTest=function(T){z.setScissorTest(at=T)},this.setOpaqueSort=function(T){Y=T},this.setTransparentSort=function(T){j=T},this.getClearColor=function(T){return T.copy(Yt.getClearColor())},this.setClearColor=function(){Yt.setClearColor.apply(Yt,arguments)},this.getClearAlpha=function(){return Yt.getClearAlpha()},this.setClearAlpha=function(){Yt.setClearAlpha.apply(Yt,arguments)},this.clear=function(T=!0,B=!0,V=!0){let q=0;if(T){let k=!1;if(A!==null){const xt=A.texture.format;k=xt===sc||xt===ic||xt===nc}if(k){const xt=A.texture.type,wt=xt===Fn||xt===Nn||xt===Ua||xt===Jn||xt===tc||xt===ec,Lt=Yt.getClearColor(),Dt=Yt.getClearAlpha(),zt=Lt.r,Ot=Lt.g,Gt=Lt.b;wt?(p[0]=zt,p[1]=Ot,p[2]=Gt,p[3]=Dt,P.clearBufferuiv(P.COLOR,0,p)):(g[0]=zt,g[1]=Ot,g[2]=Gt,g[3]=Dt,P.clearBufferiv(P.COLOR,0,g))}else q|=P.COLOR_BUFFER_BIT}B&&(q|=P.DEPTH_BUFFER_BIT),V&&(q|=P.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),P.clear(q)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",ct,!1),e.removeEventListener("webglcontextrestored",I,!1),e.removeEventListener("webglcontextcreationerror",gt,!1),yt.dispose(),Rt.dispose(),mt.dispose(),M.dispose(),F.dispose(),J.dispose(),Bt.dispose(),$t.dispose(),bt.dispose(),Vt.dispose(),Vt.removeEventListener("sessionstart",Oe),Vt.removeEventListener("sessionend",ee),ft&&(ft.dispose(),ft=null),Fe.stop()};function ct(T){T.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),y=!0}function I(){console.log("THREE.WebGLRenderer: Context Restored."),y=!1;const T=vt.autoReset,B=nt.enabled,V=nt.autoUpdate,q=nt.needsUpdate,k=nt.type;de(),vt.autoReset=T,nt.enabled=B,nt.autoUpdate=V,nt.needsUpdate=q,nt.type=k}function gt(T){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function _t(T){const B=T.target;B.removeEventListener("dispose",_t),It(B)}function It(T){Pt(T),mt.remove(T)}function Pt(T){const B=mt.get(T).programs;B!==void 0&&(B.forEach(function(V){bt.releaseProgram(V)}),T.isShaderMaterial&&bt.releaseShaderCache(T))}this.renderBufferDirect=function(T,B,V,q,k,xt){B===null&&(B=ht);const wt=k.isMesh&&k.matrixWorld.determinant()<0,Lt=$c(T,B,V,q,k);z.setMaterial(q,wt);let Dt=V.index,zt=1;if(q.wireframe===!0){if(Dt=Q.getWireframeAttribute(V),Dt===void 0)return;zt=2}const Ot=V.drawRange,Gt=V.attributes.position;let me=Ot.start*zt,We=(Ot.start+Ot.count)*zt;xt!==null&&(me=Math.max(me,xt.start*zt),We=Math.min(We,(xt.start+xt.count)*zt)),Dt!==null?(me=Math.max(me,0),We=Math.min(We,Dt.count)):Gt!=null&&(me=Math.max(me,0),We=Math.min(We,Gt.count));const Se=We-me;if(Se<0||Se===1/0)return;Bt.setup(k,q,Lt,V,Dt);let pn,ue=Nt;if(Dt!==null&&(pn=tt.get(Dt),ue=At,ue.setIndex(pn)),k.isMesh)q.wireframe===!0?(z.setLineWidth(q.wireframeLinewidth*Mt()),ue.setMode(P.LINES)):ue.setMode(P.TRIANGLES);else if(k.isLine){let Wt=q.linewidth;Wt===void 0&&(Wt=1),z.setLineWidth(Wt*Mt()),k.isLineSegments?ue.setMode(P.LINES):k.isLineLoop?ue.setMode(P.LINE_LOOP):ue.setMode(P.LINE_STRIP)}else k.isPoints?ue.setMode(P.POINTS):k.isSprite&&ue.setMode(P.TRIANGLES);if(k.isBatchedMesh)ue.renderMultiDraw(k._multiDrawStarts,k._multiDrawCounts,k._multiDrawCount);else if(k.isInstancedMesh)ue.renderInstances(me,Se,k.count);else if(V.isInstancedBufferGeometry){const Wt=V._maxInstanceCount!==void 0?V._maxInstanceCount:1/0,vr=Math.min(V.instanceCount,Wt);ue.renderInstances(me,Se,vr)}else ue.render(me,Se)};function Qt(T,B,V){T.transparent===!0&&T.side===Ue&&T.forceSinglePass===!1?(T.side=Re,T.needsUpdate=!0,vs(T,B,V),T.side=Gn,T.needsUpdate=!0,vs(T,B,V),T.side=Ue):vs(T,B,V)}this.compile=function(T,B,V=null){V===null&&(V=T),m=Rt.get(V),m.init(),x.push(m),V.traverseVisible(function(k){k.isLight&&k.layers.test(B.layers)&&(m.pushLight(k),k.castShadow&&m.pushShadow(k))}),T!==V&&T.traverseVisible(function(k){k.isLight&&k.layers.test(B.layers)&&(m.pushLight(k),k.castShadow&&m.pushShadow(k))}),m.setupLights(v._useLegacyLights);const q=new Set;return T.traverse(function(k){const xt=k.material;if(xt)if(Array.isArray(xt))for(let wt=0;wt<xt.length;wt++){const Lt=xt[wt];Qt(Lt,V,k),q.add(Lt)}else Qt(xt,V,k),q.add(xt)}),x.pop(),m=null,q},this.compileAsync=function(T,B,V=null){const q=this.compile(T,B,V);return new Promise(k=>{function xt(){if(q.forEach(function(wt){mt.get(wt).currentProgram.isReady()&&q.delete(wt)}),q.size===0){k(T);return}setTimeout(xt,10)}$.get("KHR_parallel_shader_compile")!==null?xt():setTimeout(xt,10)})};let te=null;function Me(T){te&&te(T)}function Oe(){Fe.stop()}function ee(){Fe.start()}const Fe=new xc;Fe.setAnimationLoop(Me),typeof self<"u"&&Fe.setContext(self),this.setAnimationLoop=function(T){te=T,Vt.setAnimationLoop(T),T===null?Fe.stop():Fe.start()},Vt.addEventListener("sessionstart",Oe),Vt.addEventListener("sessionend",ee),this.render=function(T,B){if(B!==void 0&&B.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(y===!0)return;T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),B.parent===null&&B.matrixWorldAutoUpdate===!0&&B.updateMatrixWorld(),Vt.enabled===!0&&Vt.isPresenting===!0&&(Vt.cameraAutoUpdate===!0&&Vt.updateCamera(B),B=Vt.getCamera()),T.isScene===!0&&T.onBeforeRender(v,T,B,A),m=Rt.get(T,x.length),m.init(),x.push(m),pt.multiplyMatrices(B.projectionMatrix,B.matrixWorldInverse),W.setFromProjectionMatrix(pt),ot=this.localClippingEnabled,Z=Ft.init(this.clippingPlanes,ot),_=yt.get(T,f.length),_.init(),f.push(_),cn(T,B,0,v.sortObjects),_.finish(),v.sortObjects===!0&&_.sort(Y,j),this.info.render.frame++,Z===!0&&Ft.beginShadows();const V=m.state.shadowsArray;if(nt.render(V,T,B),Z===!0&&Ft.endShadows(),this.info.autoReset===!0&&this.info.reset(),Yt.render(_,T),m.setupLights(v._useLegacyLights),B.isArrayCamera){const q=B.cameras;for(let k=0,xt=q.length;k<xt;k++){const wt=q[k];Xa(_,T,wt,wt.viewport)}}else Xa(_,T,B);A!==null&&(E.updateMultisampleRenderTarget(A),E.updateRenderTargetMipmap(A)),T.isScene===!0&&T.onAfterRender(v,T,B),Bt.resetDefaultState(),N=-1,S=null,x.pop(),x.length>0?m=x[x.length-1]:m=null,f.pop(),f.length>0?_=f[f.length-1]:_=null};function cn(T,B,V,q){if(T.visible===!1)return;if(T.layers.test(B.layers)){if(T.isGroup)V=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(B);else if(T.isLight)m.pushLight(T),T.castShadow&&m.pushShadow(T);else if(T.isSprite){if(!T.frustumCulled||W.intersectsSprite(T)){q&&Tt.setFromMatrixPosition(T.matrixWorld).applyMatrix4(pt);const wt=J.update(T),Lt=T.material;Lt.visible&&_.push(T,wt,Lt,V,Tt.z,null)}}else if((T.isMesh||T.isLine||T.isPoints)&&(!T.frustumCulled||W.intersectsObject(T))){const wt=J.update(T),Lt=T.material;if(q&&(T.boundingSphere!==void 0?(T.boundingSphere===null&&T.computeBoundingSphere(),Tt.copy(T.boundingSphere.center)):(wt.boundingSphere===null&&wt.computeBoundingSphere(),Tt.copy(wt.boundingSphere.center)),Tt.applyMatrix4(T.matrixWorld).applyMatrix4(pt)),Array.isArray(Lt)){const Dt=wt.groups;for(let zt=0,Ot=Dt.length;zt<Ot;zt++){const Gt=Dt[zt],me=Lt[Gt.materialIndex];me&&me.visible&&_.push(T,wt,me,V,Tt.z,Gt)}}else Lt.visible&&_.push(T,wt,Lt,V,Tt.z,null)}}const xt=T.children;for(let wt=0,Lt=xt.length;wt<Lt;wt++)cn(xt[wt],B,V,q)}function Xa(T,B,V,q){const k=T.opaque,xt=T.transmissive,wt=T.transparent;m.setupLightsView(V),Z===!0&&Ft.setGlobalState(v.clippingPlanes,V),xt.length>0&&jc(k,xt,B,V),q&&z.viewport(b.copy(q)),k.length>0&&_s(k,B,V),xt.length>0&&_s(xt,B,V),wt.length>0&&_s(wt,B,V),z.buffers.depth.setTest(!0),z.buffers.depth.setMask(!0),z.buffers.color.setMask(!0),z.setPolygonOffset(!1)}function jc(T,B,V,q){if((V.isScene===!0?V.overrideMaterial:null)!==null)return;const xt=et.isWebGL2;ft===null&&(ft=new ln(1,1,{generateMipmaps:!0,type:$.has("EXT_color_buffer_half_float")?bn:Fn,minFilter:ls,samples:xt?4:0})),v.getDrawingBufferSize(Et),xt?ft.setSize(Et.x,Et.y):ft.setSize(ya(Et.x),ya(Et.y));const wt=v.getRenderTarget();v.setRenderTarget(ft),v.getClearColor(U),L=v.getClearAlpha(),L<1&&v.setClearColor(16777215,.5),v.clear();const Lt=v.toneMapping;v.toneMapping=On,_s(T,V,q),E.updateMultisampleRenderTarget(ft),E.updateRenderTargetMipmap(ft);let Dt=!1;for(let zt=0,Ot=B.length;zt<Ot;zt++){const Gt=B[zt],me=Gt.object,We=Gt.geometry,Se=Gt.material,pn=Gt.group;if(Se.side===Ue&&me.layers.test(q.layers)){const ue=Se.side;Se.side=Re,Se.needsUpdate=!0,Ka(me,V,q,We,Se,pn),Se.side=ue,Se.needsUpdate=!0,Dt=!0}}Dt===!0&&(E.updateMultisampleRenderTarget(ft),E.updateRenderTargetMipmap(ft)),v.setRenderTarget(wt),v.setClearColor(U,L),v.toneMapping=Lt}function _s(T,B,V){const q=B.isScene===!0?B.overrideMaterial:null;for(let k=0,xt=T.length;k<xt;k++){const wt=T[k],Lt=wt.object,Dt=wt.geometry,zt=q===null?wt.material:q,Ot=wt.group;Lt.layers.test(V.layers)&&Ka(Lt,B,V,Dt,zt,Ot)}}function Ka(T,B,V,q,k,xt){T.onBeforeRender(v,B,V,q,k,xt),T.modelViewMatrix.multiplyMatrices(V.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),k.onBeforeRender(v,B,V,q,T,xt),k.transparent===!0&&k.side===Ue&&k.forceSinglePass===!1?(k.side=Re,k.needsUpdate=!0,v.renderBufferDirect(V,B,q,k,T,xt),k.side=Gn,k.needsUpdate=!0,v.renderBufferDirect(V,B,q,k,T,xt),k.side=Ue):v.renderBufferDirect(V,B,q,k,T,xt),T.onAfterRender(v,B,V,q,k,xt)}function vs(T,B,V){B.isScene!==!0&&(B=ht);const q=mt.get(T),k=m.state.lights,xt=m.state.shadowsArray,wt=k.state.version,Lt=bt.getParameters(T,k.state,xt,B,V),Dt=bt.getProgramCacheKey(Lt);let zt=q.programs;q.environment=T.isMeshStandardMaterial?B.environment:null,q.fog=B.fog,q.envMap=(T.isMeshStandardMaterial?F:M).get(T.envMap||q.environment),zt===void 0&&(T.addEventListener("dispose",_t),zt=new Map,q.programs=zt);let Ot=zt.get(Dt);if(Ot!==void 0){if(q.currentProgram===Ot&&q.lightsStateVersion===wt)return ja(T,Lt),Ot}else Lt.uniforms=bt.getUniforms(T),T.onBuild(V,Lt,v),T.onBeforeCompile(Lt,v),Ot=bt.acquireProgram(Lt,Dt),zt.set(Dt,Ot),q.uniforms=Lt.uniforms;const Gt=q.uniforms;return(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(Gt.clippingPlanes=Ft.uniform),ja(T,Lt),q.needsLights=Jc(T),q.lightsStateVersion=wt,q.needsLights&&(Gt.ambientLightColor.value=k.state.ambient,Gt.lightProbe.value=k.state.probe,Gt.directionalLights.value=k.state.directional,Gt.directionalLightShadows.value=k.state.directionalShadow,Gt.spotLights.value=k.state.spot,Gt.spotLightShadows.value=k.state.spotShadow,Gt.rectAreaLights.value=k.state.rectArea,Gt.ltc_1.value=k.state.rectAreaLTC1,Gt.ltc_2.value=k.state.rectAreaLTC2,Gt.pointLights.value=k.state.point,Gt.pointLightShadows.value=k.state.pointShadow,Gt.hemisphereLights.value=k.state.hemi,Gt.directionalShadowMap.value=k.state.directionalShadowMap,Gt.directionalShadowMatrix.value=k.state.directionalShadowMatrix,Gt.spotShadowMap.value=k.state.spotShadowMap,Gt.spotLightMatrix.value=k.state.spotLightMatrix,Gt.spotLightMap.value=k.state.spotLightMap,Gt.pointShadowMap.value=k.state.pointShadowMap,Gt.pointShadowMatrix.value=k.state.pointShadowMatrix),q.currentProgram=Ot,q.uniformsList=null,Ot}function Ya(T){if(T.uniformsList===null){const B=T.currentProgram.getUniforms();T.uniformsList=Js.seqWithValue(B.seq,T.uniforms)}return T.uniformsList}function ja(T,B){const V=mt.get(T);V.outputColorSpace=B.outputColorSpace,V.batching=B.batching,V.instancing=B.instancing,V.instancingColor=B.instancingColor,V.skinning=B.skinning,V.morphTargets=B.morphTargets,V.morphNormals=B.morphNormals,V.morphColors=B.morphColors,V.morphTargetsCount=B.morphTargetsCount,V.numClippingPlanes=B.numClippingPlanes,V.numIntersection=B.numClipIntersection,V.vertexAlphas=B.vertexAlphas,V.vertexTangents=B.vertexTangents,V.toneMapping=B.toneMapping}function $c(T,B,V,q,k){B.isScene!==!0&&(B=ht),E.resetTextureUnits();const xt=B.fog,wt=q.isMeshStandardMaterial?B.environment:null,Lt=A===null?v.outputColorSpace:A.isXRRenderTarget===!0?A.texture.colorSpace:En,Dt=(q.isMeshStandardMaterial?F:M).get(q.envMap||wt),zt=q.vertexColors===!0&&!!V.attributes.color&&V.attributes.color.itemSize===4,Ot=!!V.attributes.tangent&&(!!q.normalMap||q.anisotropy>0),Gt=!!V.morphAttributes.position,me=!!V.morphAttributes.normal,We=!!V.morphAttributes.color;let Se=On;q.toneMapped&&(A===null||A.isXRRenderTarget===!0)&&(Se=v.toneMapping);const pn=V.morphAttributes.position||V.morphAttributes.normal||V.morphAttributes.color,ue=pn!==void 0?pn.length:0,Wt=mt.get(q),vr=m.state.lights;if(Z===!0&&(ot===!0||T!==S)){const je=T===S&&q.id===N;Ft.setState(q,T,je)}let fe=!1;q.version===Wt.__version?(Wt.needsLights&&Wt.lightsStateVersion!==vr.state.version||Wt.outputColorSpace!==Lt||k.isBatchedMesh&&Wt.batching===!1||!k.isBatchedMesh&&Wt.batching===!0||k.isInstancedMesh&&Wt.instancing===!1||!k.isInstancedMesh&&Wt.instancing===!0||k.isSkinnedMesh&&Wt.skinning===!1||!k.isSkinnedMesh&&Wt.skinning===!0||k.isInstancedMesh&&Wt.instancingColor===!0&&k.instanceColor===null||k.isInstancedMesh&&Wt.instancingColor===!1&&k.instanceColor!==null||Wt.envMap!==Dt||q.fog===!0&&Wt.fog!==xt||Wt.numClippingPlanes!==void 0&&(Wt.numClippingPlanes!==Ft.numPlanes||Wt.numIntersection!==Ft.numIntersection)||Wt.vertexAlphas!==zt||Wt.vertexTangents!==Ot||Wt.morphTargets!==Gt||Wt.morphNormals!==me||Wt.morphColors!==We||Wt.toneMapping!==Se||et.isWebGL2===!0&&Wt.morphTargetsCount!==ue)&&(fe=!0):(fe=!0,Wt.__version=q.version);let Hn=Wt.currentProgram;fe===!0&&(Hn=vs(q,B,k));let $a=!1,Wi=!1,xr=!1;const Le=Hn.getUniforms(),kn=Wt.uniforms;if(z.useProgram(Hn.program)&&($a=!0,Wi=!0,xr=!0),q.id!==N&&(N=q.id,Wi=!0),$a||S!==T){Le.setValue(P,"projectionMatrix",T.projectionMatrix),Le.setValue(P,"viewMatrix",T.matrixWorldInverse);const je=Le.map.cameraPosition;je!==void 0&&je.setValue(P,Tt.setFromMatrixPosition(T.matrixWorld)),et.logarithmicDepthBuffer&&Le.setValue(P,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),(q.isMeshPhongMaterial||q.isMeshToonMaterial||q.isMeshLambertMaterial||q.isMeshBasicMaterial||q.isMeshStandardMaterial||q.isShaderMaterial)&&Le.setValue(P,"isOrthographic",T.isOrthographicCamera===!0),S!==T&&(S=T,Wi=!0,xr=!0)}if(k.isSkinnedMesh){Le.setOptional(P,k,"bindMatrix"),Le.setOptional(P,k,"bindMatrixInverse");const je=k.skeleton;je&&(et.floatVertexTextures?(je.boneTexture===null&&je.computeBoneTexture(),Le.setValue(P,"boneTexture",je.boneTexture,E)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}k.isBatchedMesh&&(Le.setOptional(P,k,"batchingTexture"),Le.setValue(P,"batchingTexture",k._matricesTexture,E));const yr=V.morphAttributes;if((yr.position!==void 0||yr.normal!==void 0||yr.color!==void 0&&et.isWebGL2===!0)&&Xt.update(k,V,Hn),(Wi||Wt.receiveShadow!==k.receiveShadow)&&(Wt.receiveShadow=k.receiveShadow,Le.setValue(P,"receiveShadow",k.receiveShadow)),q.isMeshGouraudMaterial&&q.envMap!==null&&(kn.envMap.value=Dt,kn.flipEnvMap.value=Dt.isCubeTexture&&Dt.isRenderTargetTexture===!1?-1:1),Wi&&(Le.setValue(P,"toneMappingExposure",v.toneMappingExposure),Wt.needsLights&&Zc(kn,xr),xt&&q.fog===!0&&dt.refreshFogUniforms(kn,xt),dt.refreshMaterialUniforms(kn,q,X,G,ft),Js.upload(P,Ya(Wt),kn,E)),q.isShaderMaterial&&q.uniformsNeedUpdate===!0&&(Js.upload(P,Ya(Wt),kn,E),q.uniformsNeedUpdate=!1),q.isSpriteMaterial&&Le.setValue(P,"center",k.center),Le.setValue(P,"modelViewMatrix",k.modelViewMatrix),Le.setValue(P,"normalMatrix",k.normalMatrix),Le.setValue(P,"modelMatrix",k.matrixWorld),q.isShaderMaterial||q.isRawShaderMaterial){const je=q.uniformsGroups;for(let Mr=0,Qc=je.length;Mr<Qc;Mr++)if(et.isWebGL2){const Za=je[Mr];$t.update(Za,Hn),$t.bind(Za,Hn)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return Hn}function Zc(T,B){T.ambientLightColor.needsUpdate=B,T.lightProbe.needsUpdate=B,T.directionalLights.needsUpdate=B,T.directionalLightShadows.needsUpdate=B,T.pointLights.needsUpdate=B,T.pointLightShadows.needsUpdate=B,T.spotLights.needsUpdate=B,T.spotLightShadows.needsUpdate=B,T.rectAreaLights.needsUpdate=B,T.hemisphereLights.needsUpdate=B}function Jc(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return R},this.getActiveMipmapLevel=function(){return w},this.getRenderTarget=function(){return A},this.setRenderTargetTextures=function(T,B,V){mt.get(T.texture).__webglTexture=B,mt.get(T.depthTexture).__webglTexture=V;const q=mt.get(T);q.__hasExternalTextures=!0,q.__hasExternalTextures&&(q.__autoAllocateDepthBuffer=V===void 0,q.__autoAllocateDepthBuffer||$.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),q.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(T,B){const V=mt.get(T);V.__webglFramebuffer=B,V.__useDefaultFramebuffer=B===void 0},this.setRenderTarget=function(T,B=0,V=0){A=T,R=B,w=V;let q=!0,k=null,xt=!1,wt=!1;if(T){const Dt=mt.get(T);Dt.__useDefaultFramebuffer!==void 0?(z.bindFramebuffer(P.FRAMEBUFFER,null),q=!1):Dt.__webglFramebuffer===void 0?E.setupRenderTarget(T):Dt.__hasExternalTextures&&E.rebindTextures(T,mt.get(T.texture).__webglTexture,mt.get(T.depthTexture).__webglTexture);const zt=T.texture;(zt.isData3DTexture||zt.isDataArrayTexture||zt.isCompressedArrayTexture)&&(wt=!0);const Ot=mt.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(Array.isArray(Ot[B])?k=Ot[B][V]:k=Ot[B],xt=!0):et.isWebGL2&&T.samples>0&&E.useMultisampledRTT(T)===!1?k=mt.get(T).__webglMultisampledFramebuffer:Array.isArray(Ot)?k=Ot[V]:k=Ot,b.copy(T.viewport),O.copy(T.scissor),H=T.scissorTest}else b.copy(K).multiplyScalar(X).floor(),O.copy(it).multiplyScalar(X).floor(),H=at;if(z.bindFramebuffer(P.FRAMEBUFFER,k)&&et.drawBuffers&&q&&z.drawBuffers(T,k),z.viewport(b),z.scissor(O),z.setScissorTest(H),xt){const Dt=mt.get(T.texture);P.framebufferTexture2D(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_CUBE_MAP_POSITIVE_X+B,Dt.__webglTexture,V)}else if(wt){const Dt=mt.get(T.texture),zt=B||0;P.framebufferTextureLayer(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,Dt.__webglTexture,V||0,zt)}N=-1},this.readRenderTargetPixels=function(T,B,V,q,k,xt,wt){if(!(T&&T.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Lt=mt.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&wt!==void 0&&(Lt=Lt[wt]),Lt){z.bindFramebuffer(P.FRAMEBUFFER,Lt);try{const Dt=T.texture,zt=Dt.format,Ot=Dt.type;if(zt!==rn&&St.convert(zt)!==P.getParameter(P.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Gt=Ot===bn&&($.has("EXT_color_buffer_half_float")||et.isWebGL2&&$.has("EXT_color_buffer_float"));if(Ot!==Fn&&St.convert(Ot)!==P.getParameter(P.IMPLEMENTATION_COLOR_READ_TYPE)&&!(Ot===Un&&(et.isWebGL2||$.has("OES_texture_float")||$.has("WEBGL_color_buffer_float")))&&!Gt){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}B>=0&&B<=T.width-q&&V>=0&&V<=T.height-k&&P.readPixels(B,V,q,k,St.convert(zt),St.convert(Ot),xt)}finally{const Dt=A!==null?mt.get(A).__webglFramebuffer:null;z.bindFramebuffer(P.FRAMEBUFFER,Dt)}}},this.copyFramebufferToTexture=function(T,B,V=0){const q=Math.pow(2,-V),k=Math.floor(B.image.width*q),xt=Math.floor(B.image.height*q);E.setTexture2D(B,0),P.copyTexSubImage2D(P.TEXTURE_2D,V,0,0,T.x,T.y,k,xt),z.unbindTexture()},this.copyTextureToTexture=function(T,B,V,q=0){const k=B.image.width,xt=B.image.height,wt=St.convert(V.format),Lt=St.convert(V.type);E.setTexture2D(V,0),P.pixelStorei(P.UNPACK_FLIP_Y_WEBGL,V.flipY),P.pixelStorei(P.UNPACK_PREMULTIPLY_ALPHA_WEBGL,V.premultiplyAlpha),P.pixelStorei(P.UNPACK_ALIGNMENT,V.unpackAlignment),B.isDataTexture?P.texSubImage2D(P.TEXTURE_2D,q,T.x,T.y,k,xt,wt,Lt,B.image.data):B.isCompressedTexture?P.compressedTexSubImage2D(P.TEXTURE_2D,q,T.x,T.y,B.mipmaps[0].width,B.mipmaps[0].height,wt,B.mipmaps[0].data):P.texSubImage2D(P.TEXTURE_2D,q,T.x,T.y,wt,Lt,B.image),q===0&&V.generateMipmaps&&P.generateMipmap(P.TEXTURE_2D),z.unbindTexture()},this.copyTextureToTexture3D=function(T,B,V,q,k=0){if(v.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const xt=T.max.x-T.min.x+1,wt=T.max.y-T.min.y+1,Lt=T.max.z-T.min.z+1,Dt=St.convert(q.format),zt=St.convert(q.type);let Ot;if(q.isData3DTexture)E.setTexture3D(q,0),Ot=P.TEXTURE_3D;else if(q.isDataArrayTexture||q.isCompressedArrayTexture)E.setTexture2DArray(q,0),Ot=P.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}P.pixelStorei(P.UNPACK_FLIP_Y_WEBGL,q.flipY),P.pixelStorei(P.UNPACK_PREMULTIPLY_ALPHA_WEBGL,q.premultiplyAlpha),P.pixelStorei(P.UNPACK_ALIGNMENT,q.unpackAlignment);const Gt=P.getParameter(P.UNPACK_ROW_LENGTH),me=P.getParameter(P.UNPACK_IMAGE_HEIGHT),We=P.getParameter(P.UNPACK_SKIP_PIXELS),Se=P.getParameter(P.UNPACK_SKIP_ROWS),pn=P.getParameter(P.UNPACK_SKIP_IMAGES),ue=V.isCompressedTexture?V.mipmaps[k]:V.image;P.pixelStorei(P.UNPACK_ROW_LENGTH,ue.width),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,ue.height),P.pixelStorei(P.UNPACK_SKIP_PIXELS,T.min.x),P.pixelStorei(P.UNPACK_SKIP_ROWS,T.min.y),P.pixelStorei(P.UNPACK_SKIP_IMAGES,T.min.z),V.isDataTexture||V.isData3DTexture?P.texSubImage3D(Ot,k,B.x,B.y,B.z,xt,wt,Lt,Dt,zt,ue.data):V.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),P.compressedTexSubImage3D(Ot,k,B.x,B.y,B.z,xt,wt,Lt,Dt,ue.data)):P.texSubImage3D(Ot,k,B.x,B.y,B.z,xt,wt,Lt,Dt,zt,ue),P.pixelStorei(P.UNPACK_ROW_LENGTH,Gt),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,me),P.pixelStorei(P.UNPACK_SKIP_PIXELS,We),P.pixelStorei(P.UNPACK_SKIP_ROWS,Se),P.pixelStorei(P.UNPACK_SKIP_IMAGES,pn),k===0&&q.generateMipmaps&&P.generateMipmap(Ot),z.unbindTexture()},this.initTexture=function(T){T.isCubeTexture?E.setTextureCube(T,0):T.isData3DTexture?E.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?E.setTexture2DArray(T,0):E.setTexture2D(T,0),z.unbindTexture()},this.resetState=function(){R=0,w=0,A=null,z.reset(),Bt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Mn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=t===Oa?"display-p3":"srgb",e.unpackColorSpace=Zt.workingColorSpace===hr?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===ge?ti:ac}set outputEncoding(t){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=t===ti?ge:En}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(t){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=t}}class s0 extends Ac{}s0.prototype.isWebGL1Renderer=!0;class r0 extends Pe{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e}}class vl extends Ae{constructor(t,e,n,s=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){const t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}const Si=new se,xl=new se,ks=[],yl=new ni,a0=new se,$i=new rt,Zi=new ii;class o0 extends rt{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new vl(new Float32Array(n*16),16),this.instanceColor=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,a0)}computeBoundingBox(){const t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new ni),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Si),yl.copy(t.boundingBox).applyMatrix4(Si),this.boundingBox.union(yl)}computeBoundingSphere(){const t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new ii),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Si),Zi.copy(t.boundingSphere).applyMatrix4(Si),this.boundingSphere.union(Zi)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}raycast(t,e){const n=this.matrixWorld,s=this.count;if($i.geometry=this.geometry,$i.material=this.material,$i.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Zi.copy(this.boundingSphere),Zi.applyMatrix4(n),t.ray.intersectsSphere(Zi)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,Si),xl.multiplyMatrices(n,Si),$i.matrixWorld=xl,$i.raycast(t,ks);for(let a=0,o=ks.length;a<o;a++){const l=ks[a];l.instanceId=r,l.object=this,e.push(l)}ks.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new vl(new Float32Array(this.instanceMatrix.count*3),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"})}}class Ha extends si{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Ct(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const Ml=new C,Sl=new C,bl=new se,Qr=new dr,zs=new ii;class Cc extends Pe{constructor(t=new oe,e=new Ha){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[0];for(let s=1,r=e.count;s<r;s++)Ml.fromBufferAttribute(e,s-1),Sl.fromBufferAttribute(e,s),n[s]=n[s-1],n[s]+=Ml.distanceTo(Sl);t.setAttribute("lineDistance",new Kt(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){const n=this.geometry,s=this.matrixWorld,r=t.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),zs.copy(n.boundingSphere),zs.applyMatrix4(s),zs.radius+=r,t.ray.intersectsSphere(zs)===!1)return;bl.copy(s).invert(),Qr.copy(t.ray).applyMatrix4(bl);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=new C,h=new C,u=new C,d=new C,p=this.isLineSegments?2:1,g=n.index,m=n.attributes.position;if(g!==null){const f=Math.max(0,a.start),x=Math.min(g.count,a.start+a.count);for(let v=f,y=x-1;v<y;v+=p){const R=g.getX(v),w=g.getX(v+1);if(c.fromBufferAttribute(m,R),h.fromBufferAttribute(m,w),Qr.distanceSqToSegment(c,h,d,u)>l)continue;d.applyMatrix4(this.matrixWorld);const N=t.ray.origin.distanceTo(d);N<t.near||N>t.far||e.push({distance:N,point:u.clone().applyMatrix4(this.matrixWorld),index:v,face:null,faceIndex:null,object:this})}}else{const f=Math.max(0,a.start),x=Math.min(m.count,a.start+a.count);for(let v=f,y=x-1;v<y;v+=p){if(c.fromBufferAttribute(m,v),h.fromBufferAttribute(m,v+1),Qr.distanceSqToSegment(c,h,d,u)>l)continue;d.applyMatrix4(this.matrixWorld);const w=t.ray.origin.distanceTo(d);w<t.near||w>t.far||e.push({distance:w,point:u.clone().applyMatrix4(this.matrixWorld),index:v,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}const El=new C,Tl=new C;class l0 extends Cc{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[];for(let s=0,r=e.count;s<r;s+=2)El.fromBufferAttribute(e,s),Tl.fromBufferAttribute(e,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+El.distanceTo(Tl);t.setAttribute("lineDistance",new Kt(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class ps extends si{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Ct(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const wl=new se,Sa=new dr,Vs=new ii,Ws=new C;class ms extends Pe{constructor(t=new oe,e=new ps){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){const n=this.geometry,s=this.matrixWorld,r=t.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Vs.copy(n.boundingSphere),Vs.applyMatrix4(s),Vs.radius+=r,t.ray.intersectsSphere(Vs)===!1)return;wl.copy(s).invert(),Sa.copy(t.ray).applyMatrix4(wl);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=n.index,u=n.attributes.position;if(c!==null){const d=Math.max(0,a.start),p=Math.min(c.count,a.start+a.count);for(let g=d,_=p;g<_;g++){const m=c.getX(g);Ws.fromBufferAttribute(u,m),Al(Ws,m,l,s,t,e,this)}}else{const d=Math.max(0,a.start),p=Math.min(u.count,a.start+a.count);for(let g=d,_=p;g<_;g++)Ws.fromBufferAttribute(u,g),Al(Ws,g,l,s,t,e,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function Al(i,t,e,n,s,r,a){const o=Sa.distanceSqToPoint(i);if(o<e){const l=new C;Sa.closestPointToPoint(i,l),l.applyMatrix4(n);const c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:t,face:null,object:a})}}class Bn extends Ve{constructor(t,e,n,s,r,a,o,l,c){super(t,e,n,s,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class fn{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){const n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let n,s=this.getPoint(0),r=0;e.push(0);for(let a=1;a<=t;a++)n=this.getPoint(a/t),r+=n.distanceTo(s),e.push(r),s=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){const n=this.getLengths();let s=0;const r=n.length;let a;e?a=e:a=t*n[r-1];let o=0,l=r-1,c;for(;o<=l;)if(s=Math.floor(o+(l-o)/2),c=n[s]-a,c<0)o=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,n[s]===a)return s/(r-1);const h=n[s],d=n[s+1]-h,p=(a-h)/d;return(s+p)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);const a=this.getPoint(s),o=this.getPoint(r),l=e||(a.isVector2?new st:new C);return l.copy(o).sub(a).normalize(),l}getTangentAt(t,e){const n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e){const n=new C,s=[],r=[],a=[],o=new C,l=new se;for(let p=0;p<=t;p++){const g=p/t;s[p]=this.getTangentAt(g,new C)}r[0]=new C,a[0]=new C;let c=Number.MAX_VALUE;const h=Math.abs(s[0].x),u=Math.abs(s[0].y),d=Math.abs(s[0].z);h<=c&&(c=h,n.set(1,0,0)),u<=c&&(c=u,n.set(0,1,0)),d<=c&&n.set(0,0,1),o.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],o),a[0].crossVectors(s[0],r[0]);for(let p=1;p<=t;p++){if(r[p]=r[p-1].clone(),a[p]=a[p-1].clone(),o.crossVectors(s[p-1],s[p]),o.length()>Number.EPSILON){o.normalize();const g=Math.acos(Te(s[p-1].dot(s[p]),-1,1));r[p].applyMatrix4(l.makeRotationAxis(o,g))}a[p].crossVectors(s[p],r[p])}if(e===!0){let p=Math.acos(Te(r[0].dot(r[t]),-1,1));p/=t,s[0].dot(o.crossVectors(r[0],r[t]))>0&&(p=-p);for(let g=1;g<=t;g++)r[g].applyMatrix4(l.makeRotationAxis(s[g],p*g)),a[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class ka extends fn{constructor(t=0,e=0,n=1,s=1,r=0,a=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(t,e){const n=e||new st,s=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(a?r=0:r=s),this.aClockwise===!0&&!a&&(r===s?r=-s:r=r-s);const o=this.aStartAngle+t*r;let l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){const h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),d=l-this.aX,p=c-this.aY;l=d*h-p*u+this.aX,c=d*u+p*h+this.aY}return n.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class c0 extends ka{constructor(t,e,n,s,r,a){super(t,e,n,n,s,r,a),this.isArcCurve=!0,this.type="ArcCurve"}}function za(){let i=0,t=0,e=0,n=0;function s(r,a,o,l){i=r,t=o,e=-3*r+3*a-2*o-l,n=2*r-2*a+o+l}return{initCatmullRom:function(r,a,o,l,c){s(a,o,c*(o-r),c*(l-a))},initNonuniformCatmullRom:function(r,a,o,l,c,h,u){let d=(a-r)/c-(o-r)/(c+h)+(o-a)/h,p=(o-a)/h-(l-a)/(h+u)+(l-o)/u;d*=h,p*=h,s(a,o,d,p)},calc:function(r){const a=r*r,o=a*r;return i+t*r+e*a+n*o}}}const qs=new C,ta=new za,ea=new za,na=new za;class u0 extends fn{constructor(t=[],e=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=s}getPoint(t,e=new C){const n=e,s=this.points,r=s.length,a=(r-(this.closed?0:1))*t;let o=Math.floor(a),l=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:l===0&&o===r-1&&(o=r-2,l=1);let c,h;this.closed||o>0?c=s[(o-1)%r]:(qs.subVectors(s[0],s[1]).add(s[0]),c=qs);const u=s[o%r],d=s[(o+1)%r];if(this.closed||o+2<r?h=s[(o+2)%r]:(qs.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=qs),this.curveType==="centripetal"||this.curveType==="chordal"){const p=this.curveType==="chordal"?.5:.25;let g=Math.pow(c.distanceToSquared(u),p),_=Math.pow(u.distanceToSquared(d),p),m=Math.pow(d.distanceToSquared(h),p);_<1e-4&&(_=1),g<1e-4&&(g=_),m<1e-4&&(m=_),ta.initNonuniformCatmullRom(c.x,u.x,d.x,h.x,g,_,m),ea.initNonuniformCatmullRom(c.y,u.y,d.y,h.y,g,_,m),na.initNonuniformCatmullRom(c.z,u.z,d.z,h.z,g,_,m)}else this.curveType==="catmullrom"&&(ta.initCatmullRom(c.x,u.x,d.x,h.x,this.tension),ea.initCatmullRom(c.y,u.y,d.y,h.y,this.tension),na.initCatmullRom(c.z,u.z,d.z,h.z,this.tension));return n.set(ta.calc(l),ea.calc(l),na.calc(l)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(new C().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function Cl(i,t,e,n,s){const r=(n-t)*.5,a=(s-e)*.5,o=i*i,l=i*o;return(2*e-2*n+r+a)*l+(-3*e+3*n-2*r-a)*o+r*i+e}function h0(i,t){const e=1-i;return e*e*t}function d0(i,t){return 2*(1-i)*i*t}function f0(i,t){return i*i*t}function is(i,t,e,n){return h0(i,t)+d0(i,e)+f0(i,n)}function p0(i,t){const e=1-i;return e*e*e*t}function m0(i,t){const e=1-i;return 3*e*e*i*t}function g0(i,t){return 3*(1-i)*i*i*t}function _0(i,t){return i*i*i*t}function ss(i,t,e,n,s){return p0(i,t)+m0(i,e)+g0(i,n)+_0(i,s)}class Rc extends fn{constructor(t=new st,e=new st,n=new st,s=new st){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new st){const n=e,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(ss(t,s.x,r.x,a.x,o.x),ss(t,s.y,r.y,a.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class v0 extends fn{constructor(t=new C,e=new C,n=new C,s=new C){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new C){const n=e,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(ss(t,s.x,r.x,a.x,o.x),ss(t,s.y,r.y,a.y,o.y),ss(t,s.z,r.z,a.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class Pc extends fn{constructor(t=new st,e=new st){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new st){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new st){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class x0 extends fn{constructor(t=new C,e=new C){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new C){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new C){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Lc extends fn{constructor(t=new st,e=new st,n=new st){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new st){const n=e,s=this.v0,r=this.v1,a=this.v2;return n.set(is(t,s.x,r.x,a.x),is(t,s.y,r.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class y0 extends fn{constructor(t=new C,e=new C,n=new C){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new C){const n=e,s=this.v0,r=this.v1,a=this.v2;return n.set(is(t,s.x,r.x,a.x),is(t,s.y,r.y,a.y),is(t,s.z,r.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Ic extends fn{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new st){const n=e,s=this.points,r=(s.length-1)*t,a=Math.floor(r),o=r-a,l=s[a===0?a:a-1],c=s[a],h=s[a>s.length-2?s.length-1:a+1],u=s[a>s.length-3?s.length-1:a+2];return n.set(Cl(o,l.x,c.x,h.x,u.x),Cl(o,l.y,c.y,h.y,u.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(s.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(new st().fromArray(s))}return this}}var ba=Object.freeze({__proto__:null,ArcCurve:c0,CatmullRomCurve3:u0,CubicBezierCurve:Rc,CubicBezierCurve3:v0,EllipseCurve:ka,LineCurve:Pc,LineCurve3:x0,QuadraticBezierCurve:Lc,QuadraticBezierCurve3:y0,SplineCurve:Ic});class M0 extends fn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){const t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){const n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new ba[n](e,t))}return this}getPoint(t,e){const n=t*this.getLength(),s=this.getCurveLengths();let r=0;for(;r<s.length;){if(s[r]>=n){const a=s[r]-n,o=this.curves[r],l=o.getLength(),c=l===0?0:1-a/l;return o.getPointAt(c,e)}r++}return null}getLength(){const t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const t=[];let e=0;for(let n=0,s=this.curves.length;n<s;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){const e=[];let n;for(let s=0,r=this.curves;s<r.length;s++){const a=r[s],o=a.isEllipseCurve?t*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?t*a.points.length:t,l=a.getPoints(o);for(let c=0;c<l.length;c++){const h=l[c];n&&n.equals(h)||(e.push(h),n=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this}toJSON(){const t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){const s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const s=t.curves[e];this.curves.push(new ba[s.type]().fromJSON(s))}return this}}class Ea extends M0{constructor(t){super(),this.type="Path",this.currentPoint=new st,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){const n=new Pc(this.currentPoint.clone(),new st(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,s){const r=new Lc(this.currentPoint.clone(),new st(t,e),new st(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(t,e,n,s,r,a){const o=new Rc(this.currentPoint.clone(),new st(t,e),new st(n,s),new st(r,a));return this.curves.push(o),this.currentPoint.set(r,a),this}splineThru(t){const e=[this.currentPoint.clone()].concat(t),n=new Ic(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,s,r,a){const o=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+o,e+l,n,s,r,a),this}absarc(t,e,n,s,r,a){return this.absellipse(t,e,n,n,s,r,a),this}ellipse(t,e,n,s,r,a,o,l){const c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+c,e+h,n,s,r,a,o,l),this}absellipse(t,e,n,s,r,a,o,l){const c=new ka(t,e,n,s,r,a,o,l);if(this.curves.length>0){const u=c.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(c);const h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){const t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}}class Va extends oe{constructor(t=[new st(0,-.5),new st(.5,0),new st(0,.5)],e=12,n=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:n,phiLength:s},e=Math.floor(e),s=Te(s,0,Math.PI*2);const r=[],a=[],o=[],l=[],c=[],h=1/e,u=new C,d=new st,p=new C,g=new C,_=new C;let m=0,f=0;for(let x=0;x<=t.length-1;x++)switch(x){case 0:m=t[x+1].x-t[x].x,f=t[x+1].y-t[x].y,p.x=f*1,p.y=-m,p.z=f*0,_.copy(p),p.normalize(),l.push(p.x,p.y,p.z);break;case t.length-1:l.push(_.x,_.y,_.z);break;default:m=t[x+1].x-t[x].x,f=t[x+1].y-t[x].y,p.x=f*1,p.y=-m,p.z=f*0,g.copy(p),p.x+=_.x,p.y+=_.y,p.z+=_.z,p.normalize(),l.push(p.x,p.y,p.z),_.copy(g)}for(let x=0;x<=e;x++){const v=n+x*h*s,y=Math.sin(v),R=Math.cos(v);for(let w=0;w<=t.length-1;w++){u.x=t[w].x*y,u.y=t[w].y,u.z=t[w].x*R,a.push(u.x,u.y,u.z),d.x=x/e,d.y=w/(t.length-1),o.push(d.x,d.y);const A=l[3*w+0]*y,N=l[3*w+1],S=l[3*w+0]*R;c.push(A,N,S)}}for(let x=0;x<e;x++)for(let v=0;v<t.length-1;v++){const y=v+x*t.length,R=y,w=y+t.length,A=y+t.length+1,N=y+1;r.push(R,w,N),r.push(A,N,w)}this.setIndex(r),this.setAttribute("position",new Kt(a,3)),this.setAttribute("uv",new Kt(o,2)),this.setAttribute("normal",new Kt(c,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Va(t.points,t.segments,t.phiStart,t.phiLength)}}class rs extends Va{constructor(t=1,e=1,n=4,s=8){const r=new Ea;r.absarc(0,-e/2,t,Math.PI*1.5,0),r.absarc(0,e/2,t,0,Math.PI*.5),super(r.getPoints(n),s),this.type="CapsuleGeometry",this.parameters={radius:t,length:e,capSegments:n,radialSegments:s}}static fromJSON(t){return new rs(t.radius,t.length,t.capSegments,t.radialSegments)}}class Dn extends oe{constructor(t=1,e=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:s},e=Math.max(3,e);const r=[],a=[],o=[],l=[],c=new C,h=new st;a.push(0,0,0),o.push(0,0,1),l.push(.5,.5);for(let u=0,d=3;u<=e;u++,d+=3){const p=n+u/e*s;c.x=t*Math.cos(p),c.y=t*Math.sin(p),a.push(c.x,c.y,c.z),o.push(0,0,1),h.x=(a[d]/t+1)/2,h.y=(a[d+1]/t+1)/2,l.push(h.x,h.y)}for(let u=1;u<=e;u++)r.push(u,u+1,0);this.setIndex(r),this.setAttribute("position",new Kt(a,3)),this.setAttribute("normal",new Kt(o,3)),this.setAttribute("uv",new Kt(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Dn(t.radius,t.segments,t.thetaStart,t.thetaLength)}}class Ce extends oe{constructor(t=1,e=1,n=1,s=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};const c=this;s=Math.floor(s),r=Math.floor(r);const h=[],u=[],d=[],p=[];let g=0;const _=[],m=n/2;let f=0;x(),a===!1&&(t>0&&v(!0),e>0&&v(!1)),this.setIndex(h),this.setAttribute("position",new Kt(u,3)),this.setAttribute("normal",new Kt(d,3)),this.setAttribute("uv",new Kt(p,2));function x(){const y=new C,R=new C;let w=0;const A=(e-t)/n;for(let N=0;N<=r;N++){const S=[],b=N/r,O=b*(e-t)+t;for(let H=0;H<=s;H++){const U=H/s,L=U*l+o,D=Math.sin(L),G=Math.cos(L);R.x=O*D,R.y=-b*n+m,R.z=O*G,u.push(R.x,R.y,R.z),y.set(D,A,G).normalize(),d.push(y.x,y.y,y.z),p.push(U,1-b),S.push(g++)}_.push(S)}for(let N=0;N<s;N++)for(let S=0;S<r;S++){const b=_[S][N],O=_[S+1][N],H=_[S+1][N+1],U=_[S][N+1];h.push(b,O,U),h.push(O,H,U),w+=6}c.addGroup(f,w,0),f+=w}function v(y){const R=g,w=new st,A=new C;let N=0;const S=y===!0?t:e,b=y===!0?1:-1;for(let H=1;H<=s;H++)u.push(0,m*b,0),d.push(0,b,0),p.push(.5,.5),g++;const O=g;for(let H=0;H<=s;H++){const L=H/s*l+o,D=Math.cos(L),G=Math.sin(L);A.x=S*G,A.y=m*b,A.z=S*D,u.push(A.x,A.y,A.z),d.push(0,b,0),w.x=D*.5+.5,w.y=G*.5*b+.5,p.push(w.x,w.y),g++}for(let H=0;H<s;H++){const U=R+H,L=O+H;y===!0?h.push(L,L+1,U):h.push(L+1,L,U),N+=3}c.addGroup(f,N,y===!0?1:2),f+=N}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ce(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Fi extends Ce{constructor(t=1,e=1,n=32,s=1,r=!1,a=0,o=Math.PI*2){super(0,t,e,n,s,r,a,o),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(t){return new Fi(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Wa extends oe{constructor(t=[],e=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:s};const r=[],a=[];o(s),c(n),h(),this.setAttribute("position",new Kt(r,3)),this.setAttribute("normal",new Kt(r.slice(),3)),this.setAttribute("uv",new Kt(a,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function o(x){const v=new C,y=new C,R=new C;for(let w=0;w<e.length;w+=3)p(e[w+0],v),p(e[w+1],y),p(e[w+2],R),l(v,y,R,x)}function l(x,v,y,R){const w=R+1,A=[];for(let N=0;N<=w;N++){A[N]=[];const S=x.clone().lerp(y,N/w),b=v.clone().lerp(y,N/w),O=w-N;for(let H=0;H<=O;H++)H===0&&N===w?A[N][H]=S:A[N][H]=S.clone().lerp(b,H/O)}for(let N=0;N<w;N++)for(let S=0;S<2*(w-N)-1;S++){const b=Math.floor(S/2);S%2===0?(d(A[N][b+1]),d(A[N+1][b]),d(A[N][b])):(d(A[N][b+1]),d(A[N+1][b+1]),d(A[N+1][b]))}}function c(x){const v=new C;for(let y=0;y<r.length;y+=3)v.x=r[y+0],v.y=r[y+1],v.z=r[y+2],v.normalize().multiplyScalar(x),r[y+0]=v.x,r[y+1]=v.y,r[y+2]=v.z}function h(){const x=new C;for(let v=0;v<r.length;v+=3){x.x=r[v+0],x.y=r[v+1],x.z=r[v+2];const y=m(x)/2/Math.PI+.5,R=f(x)/Math.PI+.5;a.push(y,1-R)}g(),u()}function u(){for(let x=0;x<a.length;x+=6){const v=a[x+0],y=a[x+2],R=a[x+4],w=Math.max(v,y,R),A=Math.min(v,y,R);w>.9&&A<.1&&(v<.2&&(a[x+0]+=1),y<.2&&(a[x+2]+=1),R<.2&&(a[x+4]+=1))}}function d(x){r.push(x.x,x.y,x.z)}function p(x,v){const y=x*3;v.x=t[y+0],v.y=t[y+1],v.z=t[y+2]}function g(){const x=new C,v=new C,y=new C,R=new C,w=new st,A=new st,N=new st;for(let S=0,b=0;S<r.length;S+=9,b+=6){x.set(r[S+0],r[S+1],r[S+2]),v.set(r[S+3],r[S+4],r[S+5]),y.set(r[S+6],r[S+7],r[S+8]),w.set(a[b+0],a[b+1]),A.set(a[b+2],a[b+3]),N.set(a[b+4],a[b+5]),R.copy(x).add(v).add(y).divideScalar(3);const O=m(R);_(w,b+0,x,O),_(A,b+2,v,O),_(N,b+4,y,O)}}function _(x,v,y,R){R<0&&x.x===1&&(a[v]=x.x-1),y.x===0&&y.z===0&&(a[v]=R/2/Math.PI+.5)}function m(x){return Math.atan2(x.z,-x.x)}function f(x){return Math.atan2(-x.y,Math.sqrt(x.x*x.x+x.z*x.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Wa(t.vertices,t.indices,t.radius,t.details)}}class Dc extends Ea{constructor(t){super(t),this.uuid=zi(),this.type="Shape",this.holes=[]}getPointsHoles(t){const e=[];for(let n=0,s=this.holes.length;n<s;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const s=t.holes[e];this.holes.push(s.clone())}return this}toJSON(){const t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){const s=this.holes[e];t.holes.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const s=t.holes[e];this.holes.push(new Ea().fromJSON(s))}return this}}const S0={triangulate:function(i,t,e=2){const n=t&&t.length,s=n?t[0]*e:i.length;let r=Nc(i,0,s,e,!0);const a=[];if(!r||r.next===r.prev)return a;let o,l,c,h,u,d,p;if(n&&(r=A0(i,t,r,e)),i.length>80*e){o=c=i[0],l=h=i[1];for(let g=e;g<s;g+=e)u=i[g],d=i[g+1],u<o&&(o=u),d<l&&(l=d),u>c&&(c=u),d>h&&(h=d);p=Math.max(c-o,h-l),p=p!==0?32767/p:0}return cs(r,a,e,o,l,p,0),a}};function Nc(i,t,e,n,s){let r,a;if(s===G0(i,t,e,n)>0)for(r=t;r<e;r+=n)a=Rl(r,i[r],i[r+1],a);else for(r=e-n;r>=t;r-=n)a=Rl(r,i[r],i[r+1],a);return a&&mr(a,a.next)&&(hs(a),a=a.next),a}function ei(i,t){if(!i)return i;t||(t=i);let e=i,n;do if(n=!1,!e.steiner&&(mr(e,e.next)||he(e.prev,e,e.next)===0)){if(hs(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function cs(i,t,e,n,s,r,a){if(!i)return;!a&&r&&I0(i,n,s,r);let o=i,l,c;for(;i.prev!==i.next;){if(l=i.prev,c=i.next,r?E0(i,n,s,r):b0(i)){t.push(l.i/e|0),t.push(i.i/e|0),t.push(c.i/e|0),hs(i),i=c.next,o=c.next;continue}if(i=c,i===o){a?a===1?(i=T0(ei(i),t,e),cs(i,t,e,n,s,r,2)):a===2&&w0(i,t,e,n,s,r):cs(ei(i),t,e,n,s,r,1);break}}}function b0(i){const t=i.prev,e=i,n=i.next;if(he(t,e,n)>=0)return!1;const s=t.x,r=e.x,a=n.x,o=t.y,l=e.y,c=n.y,h=s<r?s<a?s:a:r<a?r:a,u=o<l?o<c?o:c:l<c?l:c,d=s>r?s>a?s:a:r>a?r:a,p=o>l?o>c?o:c:l>c?l:c;let g=n.next;for(;g!==t;){if(g.x>=h&&g.x<=d&&g.y>=u&&g.y<=p&&Ai(s,o,r,l,a,c,g.x,g.y)&&he(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function E0(i,t,e,n){const s=i.prev,r=i,a=i.next;if(he(s,r,a)>=0)return!1;const o=s.x,l=r.x,c=a.x,h=s.y,u=r.y,d=a.y,p=o<l?o<c?o:c:l<c?l:c,g=h<u?h<d?h:d:u<d?u:d,_=o>l?o>c?o:c:l>c?l:c,m=h>u?h>d?h:d:u>d?u:d,f=Ta(p,g,t,e,n),x=Ta(_,m,t,e,n);let v=i.prevZ,y=i.nextZ;for(;v&&v.z>=f&&y&&y.z<=x;){if(v.x>=p&&v.x<=_&&v.y>=g&&v.y<=m&&v!==s&&v!==a&&Ai(o,h,l,u,c,d,v.x,v.y)&&he(v.prev,v,v.next)>=0||(v=v.prevZ,y.x>=p&&y.x<=_&&y.y>=g&&y.y<=m&&y!==s&&y!==a&&Ai(o,h,l,u,c,d,y.x,y.y)&&he(y.prev,y,y.next)>=0))return!1;y=y.nextZ}for(;v&&v.z>=f;){if(v.x>=p&&v.x<=_&&v.y>=g&&v.y<=m&&v!==s&&v!==a&&Ai(o,h,l,u,c,d,v.x,v.y)&&he(v.prev,v,v.next)>=0)return!1;v=v.prevZ}for(;y&&y.z<=x;){if(y.x>=p&&y.x<=_&&y.y>=g&&y.y<=m&&y!==s&&y!==a&&Ai(o,h,l,u,c,d,y.x,y.y)&&he(y.prev,y,y.next)>=0)return!1;y=y.nextZ}return!0}function T0(i,t,e){let n=i;do{const s=n.prev,r=n.next.next;!mr(s,r)&&Uc(s,n,n.next,r)&&us(s,r)&&us(r,s)&&(t.push(s.i/e|0),t.push(n.i/e|0),t.push(r.i/e|0),hs(n),hs(n.next),n=i=r),n=n.next}while(n!==i);return ei(n)}function w0(i,t,e,n,s,r){let a=i;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&U0(a,o)){let l=Oc(a,o);a=ei(a,a.next),l=ei(l,l.next),cs(a,t,e,n,s,r,0),cs(l,t,e,n,s,r,0);return}o=o.next}a=a.next}while(a!==i)}function A0(i,t,e,n){const s=[];let r,a,o,l,c;for(r=0,a=t.length;r<a;r++)o=t[r]*n,l=r<a-1?t[r+1]*n:i.length,c=Nc(i,o,l,n,!1),c===c.next&&(c.steiner=!0),s.push(N0(c));for(s.sort(C0),r=0;r<s.length;r++)e=R0(s[r],e);return e}function C0(i,t){return i.x-t.x}function R0(i,t){const e=P0(i,t);if(!e)return t;const n=Oc(e,i);return ei(n,n.next),ei(e,e.next)}function P0(i,t){let e=t,n=-1/0,s;const r=i.x,a=i.y;do{if(a<=e.y&&a>=e.next.y&&e.next.y!==e.y){const d=e.x+(a-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(d<=r&&d>n&&(n=d,s=e.x<e.next.x?e:e.next,d===r))return s}e=e.next}while(e!==t);if(!s)return null;const o=s,l=s.x,c=s.y;let h=1/0,u;e=s;do r>=e.x&&e.x>=l&&r!==e.x&&Ai(a<c?r:n,a,l,c,a<c?n:r,a,e.x,e.y)&&(u=Math.abs(a-e.y)/(r-e.x),us(e,i)&&(u<h||u===h&&(e.x>s.x||e.x===s.x&&L0(s,e)))&&(s=e,h=u)),e=e.next;while(e!==o);return s}function L0(i,t){return he(i.prev,i,t.prev)<0&&he(t.next,i,i.next)<0}function I0(i,t,e,n){let s=i;do s.z===0&&(s.z=Ta(s.x,s.y,t,e,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,D0(s)}function D0(i){let t,e,n,s,r,a,o,l,c=1;do{for(e=i,i=null,r=null,a=0;e;){for(a++,n=e,o=0,t=0;t<c&&(o++,n=n.nextZ,!!n);t++);for(l=c;o>0||l>0&&n;)o!==0&&(l===0||!n||e.z<=n.z)?(s=e,e=e.nextZ,o--):(s=n,n=n.nextZ,l--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;e=n}r.nextZ=null,c*=2}while(a>1);return i}function Ta(i,t,e,n,s){return i=(i-e)*s|0,t=(t-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,i|t<<1}function N0(i){let t=i,e=i;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==i);return e}function Ai(i,t,e,n,s,r,a,o){return(s-a)*(t-o)>=(i-a)*(r-o)&&(i-a)*(n-o)>=(e-a)*(t-o)&&(e-a)*(r-o)>=(s-a)*(n-o)}function U0(i,t){return i.next.i!==t.i&&i.prev.i!==t.i&&!O0(i,t)&&(us(i,t)&&us(t,i)&&F0(i,t)&&(he(i.prev,i,t.prev)||he(i,t.prev,t))||mr(i,t)&&he(i.prev,i,i.next)>0&&he(t.prev,t,t.next)>0)}function he(i,t,e){return(t.y-i.y)*(e.x-t.x)-(t.x-i.x)*(e.y-t.y)}function mr(i,t){return i.x===t.x&&i.y===t.y}function Uc(i,t,e,n){const s=Ks(he(i,t,e)),r=Ks(he(i,t,n)),a=Ks(he(e,n,i)),o=Ks(he(e,n,t));return!!(s!==r&&a!==o||s===0&&Xs(i,e,t)||r===0&&Xs(i,n,t)||a===0&&Xs(e,i,n)||o===0&&Xs(e,t,n))}function Xs(i,t,e){return t.x<=Math.max(i.x,e.x)&&t.x>=Math.min(i.x,e.x)&&t.y<=Math.max(i.y,e.y)&&t.y>=Math.min(i.y,e.y)}function Ks(i){return i>0?1:i<0?-1:0}function O0(i,t){let e=i;do{if(e.i!==i.i&&e.next.i!==i.i&&e.i!==t.i&&e.next.i!==t.i&&Uc(e,e.next,i,t))return!0;e=e.next}while(e!==i);return!1}function us(i,t){return he(i.prev,i,i.next)<0?he(i,t,i.next)>=0&&he(i,i.prev,t)>=0:he(i,t,i.prev)<0||he(i,i.next,t)<0}function F0(i,t){let e=i,n=!1;const s=(i.x+t.x)/2,r=(i.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&s<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==i);return n}function Oc(i,t){const e=new wa(i.i,i.x,i.y),n=new wa(t.i,t.x,t.y),s=i.next,r=t.prev;return i.next=t,t.prev=i,e.next=s,s.prev=e,n.next=e,e.prev=n,r.next=n,n.prev=r,n}function Rl(i,t,e,n){const s=new wa(i,t,e);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function hs(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function wa(i,t,e){this.i=i,this.x=t,this.y=e,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function G0(i,t,e,n){let s=0;for(let r=t,a=e-n;r<e;r+=n)s+=(i[a]-i[r])*(i[r+1]+i[a+1]),a=r;return s}class as{static area(t){const e=t.length;let n=0;for(let s=e-1,r=0;r<e;s=r++)n+=t[s].x*t[r].y-t[r].x*t[s].y;return n*.5}static isClockWise(t){return as.area(t)<0}static triangulateShape(t,e){const n=[],s=[],r=[];Pl(t),Ll(n,t);let a=t.length;e.forEach(Pl);for(let l=0;l<e.length;l++)s.push(a),a+=e[l].length,Ll(n,e[l]);const o=S0.triangulate(n,s);for(let l=0;l<o.length;l+=3)r.push(o.slice(l,l+3));return r}}function Pl(i){const t=i.length;t>2&&i[t-1].equals(i[0])&&i.pop()}function Ll(i,t){for(let e=0;e<t.length;e++)i.push(t[e].x),i.push(t[e].y)}class qa extends oe{constructor(t=new Dc([new st(.5,.5),new st(-.5,.5),new st(-.5,-.5),new st(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];const n=this,s=[],r=[];for(let o=0,l=t.length;o<l;o++){const c=t[o];a(c)}this.setAttribute("position",new Kt(s,3)),this.setAttribute("uv",new Kt(r,2)),this.computeVertexNormals();function a(o){const l=[],c=e.curveSegments!==void 0?e.curveSegments:12,h=e.steps!==void 0?e.steps:1,u=e.depth!==void 0?e.depth:1;let d=e.bevelEnabled!==void 0?e.bevelEnabled:!0,p=e.bevelThickness!==void 0?e.bevelThickness:.2,g=e.bevelSize!==void 0?e.bevelSize:p-.1,_=e.bevelOffset!==void 0?e.bevelOffset:0,m=e.bevelSegments!==void 0?e.bevelSegments:3;const f=e.extrudePath,x=e.UVGenerator!==void 0?e.UVGenerator:B0;let v,y=!1,R,w,A,N;f&&(v=f.getSpacedPoints(h),y=!0,d=!1,R=f.computeFrenetFrames(h,!1),w=new C,A=new C,N=new C),d||(m=0,p=0,g=0,_=0);const S=o.extractPoints(c);let b=S.shape;const O=S.holes;if(!as.isClockWise(b)){b=b.reverse();for(let P=0,lt=O.length;P<lt;P++){const $=O[P];as.isClockWise($)&&(O[P]=$.reverse())}}const U=as.triangulateShape(b,O),L=b;for(let P=0,lt=O.length;P<lt;P++){const $=O[P];b=b.concat($)}function D(P,lt,$){return lt||console.error("THREE.ExtrudeGeometry: vec does not exist"),P.clone().addScaledVector(lt,$)}const G=b.length,X=U.length;function Y(P,lt,$){let et,z,vt;const mt=P.x-lt.x,E=P.y-lt.y,M=$.x-P.x,F=$.y-P.y,tt=mt*mt+E*E,Q=mt*F-E*M;if(Math.abs(Q)>Number.EPSILON){const J=Math.sqrt(tt),bt=Math.sqrt(M*M+F*F),dt=lt.x-E/J,yt=lt.y+mt/J,Rt=$.x-F/bt,Ft=$.y+M/bt,nt=((Rt-dt)*F-(Ft-yt)*M)/(mt*F-E*M);et=dt+mt*nt-P.x,z=yt+E*nt-P.y;const Yt=et*et+z*z;if(Yt<=2)return new st(et,z);vt=Math.sqrt(Yt/2)}else{let J=!1;mt>Number.EPSILON?M>Number.EPSILON&&(J=!0):mt<-Number.EPSILON?M<-Number.EPSILON&&(J=!0):Math.sign(E)===Math.sign(F)&&(J=!0),J?(et=-E,z=mt,vt=Math.sqrt(tt)):(et=mt,z=E,vt=Math.sqrt(tt/2))}return new st(et/vt,z/vt)}const j=[];for(let P=0,lt=L.length,$=lt-1,et=P+1;P<lt;P++,$++,et++)$===lt&&($=0),et===lt&&(et=0),j[P]=Y(L[P],L[$],L[et]);const K=[];let it,at=j.concat();for(let P=0,lt=O.length;P<lt;P++){const $=O[P];it=[];for(let et=0,z=$.length,vt=z-1,mt=et+1;et<z;et++,vt++,mt++)vt===z&&(vt=0),mt===z&&(mt=0),it[et]=Y($[et],$[vt],$[mt]);K.push(it),at=at.concat(it)}for(let P=0;P<m;P++){const lt=P/m,$=p*Math.cos(lt*Math.PI/2),et=g*Math.sin(lt*Math.PI/2)+_;for(let z=0,vt=L.length;z<vt;z++){const mt=D(L[z],j[z],et);pt(mt.x,mt.y,-$)}for(let z=0,vt=O.length;z<vt;z++){const mt=O[z];it=K[z];for(let E=0,M=mt.length;E<M;E++){const F=D(mt[E],it[E],et);pt(F.x,F.y,-$)}}}const W=g+_;for(let P=0;P<G;P++){const lt=d?D(b[P],at[P],W):b[P];y?(A.copy(R.normals[0]).multiplyScalar(lt.x),w.copy(R.binormals[0]).multiplyScalar(lt.y),N.copy(v[0]).add(A).add(w),pt(N.x,N.y,N.z)):pt(lt.x,lt.y,0)}for(let P=1;P<=h;P++)for(let lt=0;lt<G;lt++){const $=d?D(b[lt],at[lt],W):b[lt];y?(A.copy(R.normals[P]).multiplyScalar($.x),w.copy(R.binormals[P]).multiplyScalar($.y),N.copy(v[P]).add(A).add(w),pt(N.x,N.y,N.z)):pt($.x,$.y,u/h*P)}for(let P=m-1;P>=0;P--){const lt=P/m,$=p*Math.cos(lt*Math.PI/2),et=g*Math.sin(lt*Math.PI/2)+_;for(let z=0,vt=L.length;z<vt;z++){const mt=D(L[z],j[z],et);pt(mt.x,mt.y,u+$)}for(let z=0,vt=O.length;z<vt;z++){const mt=O[z];it=K[z];for(let E=0,M=mt.length;E<M;E++){const F=D(mt[E],it[E],et);y?pt(F.x,F.y+v[h-1].y,v[h-1].x+$):pt(F.x,F.y,u+$)}}}Z(),ot();function Z(){const P=s.length/3;if(d){let lt=0,$=G*lt;for(let et=0;et<X;et++){const z=U[et];Et(z[2]+$,z[1]+$,z[0]+$)}lt=h+m*2,$=G*lt;for(let et=0;et<X;et++){const z=U[et];Et(z[0]+$,z[1]+$,z[2]+$)}}else{for(let lt=0;lt<X;lt++){const $=U[lt];Et($[2],$[1],$[0])}for(let lt=0;lt<X;lt++){const $=U[lt];Et($[0]+G*h,$[1]+G*h,$[2]+G*h)}}n.addGroup(P,s.length/3-P,0)}function ot(){const P=s.length/3;let lt=0;ft(L,lt),lt+=L.length;for(let $=0,et=O.length;$<et;$++){const z=O[$];ft(z,lt),lt+=z.length}n.addGroup(P,s.length/3-P,1)}function ft(P,lt){let $=P.length;for(;--$>=0;){const et=$;let z=$-1;z<0&&(z=P.length-1);for(let vt=0,mt=h+m*2;vt<mt;vt++){const E=G*vt,M=G*(vt+1),F=lt+et+E,tt=lt+z+E,Q=lt+z+M,J=lt+et+M;Tt(F,tt,Q,J)}}}function pt(P,lt,$){l.push(P),l.push(lt),l.push($)}function Et(P,lt,$){ht(P),ht(lt),ht($);const et=s.length/3,z=x.generateTopUV(n,s,et-3,et-2,et-1);Mt(z[0]),Mt(z[1]),Mt(z[2])}function Tt(P,lt,$,et){ht(P),ht(lt),ht(et),ht(lt),ht($),ht(et);const z=s.length/3,vt=x.generateSideWallUV(n,s,z-6,z-3,z-2,z-1);Mt(vt[0]),Mt(vt[1]),Mt(vt[3]),Mt(vt[1]),Mt(vt[2]),Mt(vt[3])}function ht(P){s.push(l[P*3+0]),s.push(l[P*3+1]),s.push(l[P*3+2])}function Mt(P){r.push(P.x),r.push(P.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON(),e=this.parameters.shapes,n=this.parameters.options;return H0(e,n,t)}static fromJSON(t,e){const n=[];for(let r=0,a=t.shapes.length;r<a;r++){const o=e[t.shapes[r]];n.push(o)}const s=t.options.extrudePath;return s!==void 0&&(t.options.extrudePath=new ba[s.type]().fromJSON(s)),new qa(n,t.options)}}const B0={generateTopUV:function(i,t,e,n,s){const r=t[e*3],a=t[e*3+1],o=t[n*3],l=t[n*3+1],c=t[s*3],h=t[s*3+1];return[new st(r,a),new st(o,l),new st(c,h)]},generateSideWallUV:function(i,t,e,n,s,r){const a=t[e*3],o=t[e*3+1],l=t[e*3+2],c=t[n*3],h=t[n*3+1],u=t[n*3+2],d=t[s*3],p=t[s*3+1],g=t[s*3+2],_=t[r*3],m=t[r*3+1],f=t[r*3+2];return Math.abs(o-h)<Math.abs(a-c)?[new st(a,1-l),new st(c,1-u),new st(d,1-g),new st(_,1-f)]:[new st(o,1-l),new st(h,1-u),new st(p,1-g),new st(m,1-f)]}};function H0(i,t,e){if(e.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){const r=i[n];e.shapes.push(r.uuid)}else e.shapes.push(i.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}class gr extends Wa{constructor(t=1,e=0){const n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new gr(t.radius,t.detail)}}class an extends oe{constructor(t=.5,e=1,n=32,s=1,r=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:n,phiSegments:s,thetaStart:r,thetaLength:a},n=Math.max(3,n),s=Math.max(1,s);const o=[],l=[],c=[],h=[];let u=t;const d=(e-t)/s,p=new C,g=new st;for(let _=0;_<=s;_++){for(let m=0;m<=n;m++){const f=r+m/n*a;p.x=u*Math.cos(f),p.y=u*Math.sin(f),l.push(p.x,p.y,p.z),c.push(0,0,1),g.x=(p.x/e+1)/2,g.y=(p.y/e+1)/2,h.push(g.x,g.y)}u+=d}for(let _=0;_<s;_++){const m=_*(n+1);for(let f=0;f<n;f++){const x=f+m,v=x,y=x+n+1,R=x+n+2,w=x+1;o.push(v,y,w),o.push(y,R,w)}}this.setIndex(o),this.setAttribute("position",new Kt(l,3)),this.setAttribute("normal",new Kt(c,3)),this.setAttribute("uv",new Kt(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new an(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}}class le extends oe{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const l=Math.min(a+o,Math.PI);let c=0;const h=[],u=new C,d=new C,p=[],g=[],_=[],m=[];for(let f=0;f<=n;f++){const x=[],v=f/n;let y=0;f===0&&a===0?y=.5/e:f===n&&l===Math.PI&&(y=-.5/e);for(let R=0;R<=e;R++){const w=R/e;u.x=-t*Math.cos(s+w*r)*Math.sin(a+v*o),u.y=t*Math.cos(a+v*o),u.z=t*Math.sin(s+w*r)*Math.sin(a+v*o),g.push(u.x,u.y,u.z),d.copy(u).normalize(),_.push(d.x,d.y,d.z),m.push(w+y,1-v),x.push(c++)}h.push(x)}for(let f=0;f<n;f++)for(let x=0;x<e;x++){const v=h[f][x+1],y=h[f][x],R=h[f+1][x],w=h[f+1][x+1];(f!==0||a>0)&&p.push(v,y,w),(f!==n-1||l<Math.PI)&&p.push(y,R,w)}this.setIndex(p),this.setAttribute("position",new Kt(g,3)),this.setAttribute("normal",new Kt(_,3)),this.setAttribute("uv",new Kt(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new le(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class Gi extends oe{constructor(t=1,e=.4,n=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:s,arc:r},n=Math.floor(n),s=Math.floor(s);const a=[],o=[],l=[],c=[],h=new C,u=new C,d=new C;for(let p=0;p<=n;p++)for(let g=0;g<=s;g++){const _=g/s*r,m=p/n*Math.PI*2;u.x=(t+e*Math.cos(m))*Math.cos(_),u.y=(t+e*Math.cos(m))*Math.sin(_),u.z=e*Math.sin(m),o.push(u.x,u.y,u.z),h.x=t*Math.cos(_),h.y=t*Math.sin(_),d.subVectors(u,h).normalize(),l.push(d.x,d.y,d.z),c.push(g/s),c.push(p/n)}for(let p=1;p<=n;p++)for(let g=1;g<=s;g++){const _=(s+1)*p+g-1,m=(s+1)*(p-1)+g-1,f=(s+1)*(p-1)+g,x=(s+1)*p+g;a.push(_,m,x),a.push(m,f,x)}this.setIndex(a),this.setAttribute("position",new Kt(o,3)),this.setAttribute("normal",new Kt(l,3)),this.setAttribute("uv",new Kt(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Gi(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}}class pe extends si{constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Ct(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ct(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=oc,this.normalScale=new st(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class k0 extends pe{constructor(t){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new st(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Te(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(e){this.ior=(1+.4*e)/(1-.4*e)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Ct(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Ct(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Ct(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(t)}get anisotropy(){return this._anisotropy}set anisotropy(t){this._anisotropy>0!=t>0&&this.version++,this._anisotropy=t}get clearcoat(){return this._clearcoat}set clearcoat(t){this._clearcoat>0!=t>0&&this.version++,this._clearcoat=t}get iridescence(){return this._iridescence}set iridescence(t){this._iridescence>0!=t>0&&this.version++,this._iridescence=t}get sheen(){return this._sheen}set sheen(t){this._sheen>0!=t>0&&this.version++,this._sheen=t}get transmission(){return this._transmission}set transmission(t){this._transmission>0!=t>0&&this.version++,this._transmission=t}copy(t){return super.copy(t),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=t.anisotropy,this.anisotropyRotation=t.anisotropyRotation,this.anisotropyMap=t.anisotropyMap,this.clearcoat=t.clearcoat,this.clearcoatMap=t.clearcoatMap,this.clearcoatRoughness=t.clearcoatRoughness,this.clearcoatRoughnessMap=t.clearcoatRoughnessMap,this.clearcoatNormalMap=t.clearcoatNormalMap,this.clearcoatNormalScale.copy(t.clearcoatNormalScale),this.ior=t.ior,this.iridescence=t.iridescence,this.iridescenceMap=t.iridescenceMap,this.iridescenceIOR=t.iridescenceIOR,this.iridescenceThicknessRange=[...t.iridescenceThicknessRange],this.iridescenceThicknessMap=t.iridescenceThicknessMap,this.sheen=t.sheen,this.sheenColor.copy(t.sheenColor),this.sheenColorMap=t.sheenColorMap,this.sheenRoughness=t.sheenRoughness,this.sheenRoughnessMap=t.sheenRoughnessMap,this.transmission=t.transmission,this.transmissionMap=t.transmissionMap,this.thickness=t.thickness,this.thicknessMap=t.thicknessMap,this.attenuationDistance=t.attenuationDistance,this.attenuationColor.copy(t.attenuationColor),this.specularIntensity=t.specularIntensity,this.specularIntensityMap=t.specularIntensityMap,this.specularColor.copy(t.specularColor),this.specularColorMap=t.specularColorMap,this}}class Fc extends Pe{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Ct(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),e}}const ia=new se,Il=new C,Dl=new C;class z0{constructor(t){this.camera=t,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new st(512,512),this.map=null,this.mapPass=null,this.matrix=new se,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ga,this._frameExtents=new st(1,1),this._viewportCount=1,this._viewports=[new ce(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;Il.setFromMatrixPosition(t.matrixWorld),e.position.copy(Il),Dl.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Dl),e.updateMatrixWorld(),ia.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ia),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(ia)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const Nl=new se,Ji=new C,sa=new C;class V0 extends z0{constructor(){super(new Ke(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new st(4,2),this._viewportCount=6,this._viewports=[new ce(2,1,1,1),new ce(0,1,1,1),new ce(3,1,1,1),new ce(1,1,1,1),new ce(3,0,1,1),new ce(1,0,1,1)],this._cubeDirections=[new C(1,0,0),new C(-1,0,0),new C(0,0,1),new C(0,0,-1),new C(0,1,0),new C(0,-1,0)],this._cubeUps=[new C(0,1,0),new C(0,1,0),new C(0,1,0),new C(0,1,0),new C(0,0,1),new C(0,0,-1)]}updateMatrices(t,e=0){const n=this.camera,s=this.matrix,r=t.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),Ji.setFromMatrixPosition(t.matrixWorld),n.position.copy(Ji),sa.copy(n.position),sa.add(this._cubeDirections[e]),n.up.copy(this._cubeUps[e]),n.lookAt(sa),n.updateMatrixWorld(),s.makeTranslation(-Ji.x,-Ji.y,-Ji.z),Nl.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Nl)}}class Bi extends Fc{constructor(t,e,n=0,s=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new V0}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}}class W0 extends Fc{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}}class Gc{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Ul(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const e=Ul();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}}function Ul(){return(typeof performance>"u"?Date:performance).now()}class q0{constructor(t,e,n=0,s=1/0){this.ray=new dr(t,e),this.near=n,this.far=s,this.camera=null,this.layers=new Fa,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type: "+e.type)}intersectObject(t,e=!0,n=[]){return Aa(t,this,n,e),n.sort(Ol),n}intersectObjects(t,e=!0,n=[]){for(let s=0,r=t.length;s<r;s++)Aa(t[s],this,n,e);return n.sort(Ol),n}}function Ol(i,t){return i.distance-t.distance}function Aa(i,t,e,n){if(i.layers.test(t.layers)&&i.raycast(t,e),n===!0){const s=i.children;for(let r=0,a=s.length;r<a;r++)Aa(s[r],t,e,!0)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Na}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Na);class X0{constructor({canvas:t,onContextLost:e,onContextRestored:n}){if(!t)throw new Error("Engine requires a canvas element");this.canvas=t,this._onContextLost=e??(()=>{}),this._onContextRestored=n??(()=>{}),this._disposed=!1,this._trackedResources=[],this._frameCallbacks=[],this.renderer=this._createRenderer(t),this.scene=new r0,this.camera=new Ke(60,this._aspect(),.01,5e6),this.camera.position.set(0,1.4,6),this._resizeHandler=()=>this.resize(),window.addEventListener("resize",this._resizeHandler),this._clock=new Gc,this._rafId=null}_createRenderer(t){if(!Bc())throw new Error("WebGL is not available in this browser");const e=new Ac({canvas:t,antialias:!0,powerPreference:"high-performance",alpha:!1});return e.setPixelRatio(Math.min(window.devicePixelRatio||1,2)),e.setSize(window.innerWidth,window.innerHeight,!1),e.outputColorSpace=ge,e.toneMapping=Zl,e.toneMappingExposure=1.05,t.addEventListener("webglcontextlost",n=>{n.preventDefault(),this.stop(),this._onContextLost("WebGL context was lost.")}),t.addEventListener("webglcontextrestored",()=>{this._onContextRestored()}),e}_aspect(){return Math.max(window.innerWidth,1)/Math.max(window.innerHeight,1)}resize(){if(this._disposed)return;const t=window.innerWidth,e=window.innerHeight;this.camera.aspect=t/Math.max(e,1),this.camera.updateProjectionMatrix(),this.renderer.setSize(t,e,!1);for(const n of this._resizeCallbacks??[])n(t,e)}onResize(t){this._resizeCallbacks=this._resizeCallbacks??[],this._resizeCallbacks.push(t)}onTick(t){return this._frameCallbacks.push(t),()=>{const e=this._frameCallbacks.indexOf(t);e>=0&&this._frameCallbacks.splice(e,1)}}track(t){return this._trackedResources.push(t),t}start(){if(this._rafId!==null)return;const t=()=>{this._rafId=requestAnimationFrame(t);const e=Math.min(this._clock.getDelta(),.1),n=this._clock.getElapsedTime();for(const s of this._frameCallbacks)try{s(e,n)}catch(r){console.error("[Engine] frame callback failed:",r)}this.renderer.render(this.scene,this.camera)};this._rafId=requestAnimationFrame(t)}stop(){this._rafId!==null&&(cancelAnimationFrame(this._rafId),this._rafId=null)}dispose(){if(!this._disposed){this._disposed=!0,this.stop(),window.removeEventListener("resize",this._resizeHandler),this.scene.traverse(t=>{if(t.geometry&&t.geometry.dispose?.(),t.material){const e=Array.isArray(t.material)?t.material:[t.material];for(const n of e)K0(n)}});for(const t of this._trackedResources)t?.dispose?.();this.renderer.dispose()}}}function K0(i){if(i){for(const t of Object.keys(i)){const e=i[t];e&&e.isTexture&&e.dispose()}i.dispose?.()}}function Bc(){try{const i=document.createElement("canvas");return!!(window.WebGLRenderingContext&&(i.getContext("webgl2")||i.getContext("webgl")||i.getContext("experimental-webgl")))}catch{return!1}}const Hc={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};class gs{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const Y0=new yc(-1,1,1,-1,0,1);class j0 extends oe{constructor(){super(),this.setAttribute("position",new Kt([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new Kt([0,2,0,0,2,0],2))}}const $0=new j0;class kc{constructor(t){this._mesh=new rt($0,t)}dispose(){this._mesh.geometry.dispose()}render(t){t.render(this._mesh,Y0)}get material(){return this._mesh.material}set material(t){this._mesh.material=t}}class Z0 extends gs{constructor(t,e){super(),this.textureID=e!==void 0?e:"tDiffuse",t instanceof we?(this.uniforms=t.uniforms,this.material=t):t&&(this.uniforms=or.clone(t.uniforms),this.material=new we({name:t.name!==void 0?t.name:"unspecified",defines:Object.assign({},t.defines),uniforms:this.uniforms,vertexShader:t.vertexShader,fragmentShader:t.fragmentShader})),this.fsQuad=new kc(this.material)}render(t,e,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this.fsQuad.material=this.material,this.renderToScreen?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this.fsQuad.render(t))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}class Fl extends gs{constructor(t,e){super(),this.scene=t,this.camera=e,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(t,e,n){const s=t.getContext(),r=t.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let a,o;this.inverse?(a=0,o=1):(a=1,o=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(s.REPLACE,s.REPLACE,s.REPLACE),r.buffers.stencil.setFunc(s.ALWAYS,a,4294967295),r.buffers.stencil.setClear(o),r.buffers.stencil.setLocked(!0),t.setRenderTarget(n),this.clear&&t.clear(),t.render(this.scene,this.camera),t.setRenderTarget(e),this.clear&&t.clear(),t.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(s.EQUAL,1,4294967295),r.buffers.stencil.setOp(s.KEEP,s.KEEP,s.KEEP),r.buffers.stencil.setLocked(!0)}}class J0 extends gs{constructor(){super(),this.needsSwap=!1}render(t){t.state.buffers.stencil.setLocked(!1),t.state.buffers.stencil.setTest(!1)}}class Q0{constructor(t,e){if(this.renderer=t,this._pixelRatio=t.getPixelRatio(),e===void 0){const n=t.getSize(new st);this._width=n.width,this._height=n.height,e=new ln(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:bn}),e.texture.name="EffectComposer.rt1"}else this._width=e.width,this._height=e.height;this.renderTarget1=e,this.renderTarget2=e.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new Z0(Hc),this.copyPass.material.blending=Sn,this.clock=new Gc}swapBuffers(){const t=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=t}addPass(t){this.passes.push(t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(t,e){this.passes.splice(e,0,t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(t){const e=this.passes.indexOf(t);e!==-1&&this.passes.splice(e,1)}isLastEnabledPass(t){for(let e=t+1;e<this.passes.length;e++)if(this.passes[e].enabled)return!1;return!0}render(t){t===void 0&&(t=this.clock.getDelta());const e=this.renderer.getRenderTarget();let n=!1;for(let s=0,r=this.passes.length;s<r;s++){const a=this.passes[s];if(a.enabled!==!1){if(a.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(s),a.render(this.renderer,this.writeBuffer,this.readBuffer,t,n),a.needsSwap){if(n){const o=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(o.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,t),l.setFunc(o.EQUAL,1,4294967295)}this.swapBuffers()}Fl!==void 0&&(a instanceof Fl?n=!0:a instanceof J0&&(n=!1))}}this.renderer.setRenderTarget(e)}reset(t){if(t===void 0){const e=this.renderer.getSize(new st);this._pixelRatio=this.renderer.getPixelRatio(),this._width=e.width,this._height=e.height,t=this.renderTarget1.clone(),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=t,this.renderTarget2=t.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(t,e){this._width=t,this._height=e;const n=this._width*this._pixelRatio,s=this._height*this._pixelRatio;this.renderTarget1.setSize(n,s),this.renderTarget2.setSize(n,s);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(n,s)}setPixelRatio(t){this._pixelRatio=t,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class tg extends gs{constructor(t,e,n=null,s=null,r=null){super(),this.scene=t,this.camera=e,this.overrideMaterial=n,this.clearColor=s,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new Ct}render(t,e,n){const s=t.autoClear;t.autoClear=!1;let r,a;this.overrideMaterial!==null&&(a=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(t.getClearColor(this._oldClearColor),t.setClearColor(this.clearColor)),this.clearAlpha!==null&&(r=t.getClearAlpha(),t.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&t.clearDepth(),t.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),t.render(this.scene,this.camera),this.clearColor!==null&&t.setClearColor(this._oldClearColor),this.clearAlpha!==null&&t.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=a),t.autoClear=s}}const eg={uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new Ct(0)},defaultOpacity:{value:0}},vertexShader:`

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

		}`};class Hi extends gs{constructor(t,e,n,s){super(),this.strength=e!==void 0?e:1,this.radius=n,this.threshold=s,this.resolution=t!==void 0?new st(t.x,t.y):new st(256,256),this.clearColor=new Ct(0,0,0),this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let r=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);this.renderTargetBright=new ln(r,a,{type:bn}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let u=0;u<this.nMips;u++){const d=new ln(r,a,{type:bn});d.texture.name="UnrealBloomPass.h"+u,d.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(d);const p=new ln(r,a,{type:bn});p.texture.name="UnrealBloomPass.v"+u,p.texture.generateMipmaps=!1,this.renderTargetsVertical.push(p),r=Math.round(r/2),a=Math.round(a/2)}const o=eg;this.highPassUniforms=or.clone(o.uniforms),this.highPassUniforms.luminosityThreshold.value=s,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new we({uniforms:this.highPassUniforms,vertexShader:o.vertexShader,fragmentShader:o.fragmentShader}),this.separableBlurMaterials=[];const l=[3,5,7,9,11];r=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);for(let u=0;u<this.nMips;u++)this.separableBlurMaterials.push(this.getSeperableBlurMaterial(l[u])),this.separableBlurMaterials[u].uniforms.invSize.value=new st(1/r,1/a),r=Math.round(r/2),a=Math.round(a/2);this.compositeMaterial=this.getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=e,this.compositeMaterial.uniforms.bloomRadius.value=.1;const c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new C(1,1,1),new C(1,1,1),new C(1,1,1),new C(1,1,1),new C(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors;const h=Hc;this.copyUniforms=or.clone(h.uniforms),this.blendMaterial=new we({uniforms:this.copyUniforms,vertexShader:h.vertexShader,fragmentShader:h.fragmentShader,blending:ve,depthTest:!1,depthWrite:!1,transparent:!0}),this.enabled=!0,this.needsSwap=!1,this._oldClearColor=new Ct,this.oldClearAlpha=1,this.basic=new jt,this.fsQuad=new kc(null)}dispose(){for(let t=0;t<this.renderTargetsHorizontal.length;t++)this.renderTargetsHorizontal[t].dispose();for(let t=0;t<this.renderTargetsVertical.length;t++)this.renderTargetsVertical[t].dispose();this.renderTargetBright.dispose();for(let t=0;t<this.separableBlurMaterials.length;t++)this.separableBlurMaterials[t].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this.basic.dispose(),this.fsQuad.dispose()}setSize(t,e){let n=Math.round(t/2),s=Math.round(e/2);this.renderTargetBright.setSize(n,s);for(let r=0;r<this.nMips;r++)this.renderTargetsHorizontal[r].setSize(n,s),this.renderTargetsVertical[r].setSize(n,s),this.separableBlurMaterials[r].uniforms.invSize.value=new st(1/n,1/s),n=Math.round(n/2),s=Math.round(s/2)}render(t,e,n,s,r){t.getClearColor(this._oldClearColor),this.oldClearAlpha=t.getClearAlpha();const a=t.autoClear;t.autoClear=!1,t.setClearColor(this.clearColor,0),r&&t.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this.fsQuad.material=this.basic,this.basic.map=n.texture,t.setRenderTarget(null),t.clear(),this.fsQuad.render(t)),this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this.fsQuad.material=this.materialHighPassFilter,t.setRenderTarget(this.renderTargetBright),t.clear(),this.fsQuad.render(t);let o=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this.fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=o.texture,this.separableBlurMaterials[l].uniforms.direction.value=Hi.BlurDirectionX,t.setRenderTarget(this.renderTargetsHorizontal[l]),t.clear(),this.fsQuad.render(t),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=Hi.BlurDirectionY,t.setRenderTarget(this.renderTargetsVertical[l]),t.clear(),this.fsQuad.render(t),o=this.renderTargetsVertical[l];this.fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,t.setRenderTarget(this.renderTargetsHorizontal[0]),t.clear(),this.fsQuad.render(t),this.fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,r&&t.state.buffers.stencil.setTest(!0),this.renderToScreen?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(n),this.fsQuad.render(t)),t.setClearColor(this._oldClearColor,this.oldClearAlpha),t.autoClear=a}getSeperableBlurMaterial(t){const e=[];for(let n=0;n<t;n++)e.push(.39894*Math.exp(-.5*n*n/(t*t))/t);return new we({defines:{KERNEL_RADIUS:t},uniforms:{colorTexture:{value:null},invSize:{value:new st(.5,.5)},direction:{value:new st(.5,.5)},gaussianCoefficients:{value:e}},vertexShader:`varying vec2 vUv;
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
				}`})}getCompositeMaterial(t){return new we({defines:{NUM_MIPS:t},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
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
				}`})}}Hi.BlurDirectionX=new st(1,0);Hi.BlurDirectionY=new st(0,1);function ng(i,t,e){try{const n=new Q0(i);n.addPass(new tg(t,e));const s=new Hi(new st(window.innerWidth,window.innerHeight),.55,.65,.72);return n.addPass(s),{composer:n,render:()=>n.render(),resize:(r,a)=>{n.setSize(r,a),s.setSize(r,a)},dispose:()=>{n.passes.forEach(r=>r.dispose?.())}}}catch(n){return console.warn("[PostProcessing] Falling back to plain rendering:",n),{composer:null,render:()=>i.render(t,e),resize:()=>{},dispose:()=>{}}}}const Ut=Object.freeze({SET_SCALE:"SET_SCALE",SELECT_OBJECT:"SELECT_OBJECT",SET_TARGET:"SET_TARGET",CLEAR_TARGET:"CLEAR_TARGET",SET_FLIGHT_STATUS:"SET_FLIGHT_STATUS",SET_FLIGHT_MODE:"SET_FLIGHT_MODE",UPDATE_TELEMETRY:"UPDATE_TELEMETRY",SET_CAMERA_MODE:"SET_CAMERA_MODE",SET_SEARCH_QUERY:"SET_SEARCH_QUERY",TOGGLE_DETAIL_PANEL:"TOGGLE_DETAIL_PANEL",TOGGLE_HABITABILITY:"TOGGLE_HABITABILITY",TOGGLE_SATELLITE_LIST:"TOGGLE_SATELLITE_LIST",TOGGLE_AUDIO_MUTED:"TOGGLE_AUDIO_MUTED",TOGGLE_HUD:"TOGGLE_HUD",TOGGLE_PHOTO_MODE:"TOGGLE_PHOTO_MODE",TOGGLE_LOGBOOK:"TOGGLE_LOGBOOK",TOGGLE_CONSTELLATIONS:"TOGGLE_CONSTELLATIONS",RECORD_DISCOVERY:"RECORD_DISCOVERY",PUSH_HISTORY:"PUSH_HISTORY",REPORT_ERROR:"REPORT_ERROR",CLEAR_ERROR:"CLEAR_ERROR"}),dn=Object.freeze({IDLE:"IDLE",SPOOLING:"SPOOLING",WARP:"WARP",MANUAL_CRUISE:"MANUAL_CRUISE",DECELERATING:"DECELERATING",ARRIVED:"ARRIVED"}),on=Object.freeze({AUTOPILOT:"AUTOPILOT",MANUAL:"MANUAL"}),ie=Object.freeze({COCKPIT:"COCKPIT",THIRD_PERSON:"THIRD_PERSON",CINEMATIC:"CINEMATIC",PHOTO:"PHOTO"});function ig(i,t){if(typeof i!="string"||i.length===0)throw new TypeError(`${t} must be a non-empty string`)}const kt={setScale:i=>({type:Ut.SET_SCALE,payload:i}),selectObject:i=>({type:Ut.SELECT_OBJECT,payload:i}),setTarget:i=>(ig(i,"target id"),{type:Ut.SET_TARGET,payload:i}),clearTarget:()=>({type:Ut.CLEAR_TARGET}),setFlightStatus:i=>{if(!Object.values(dn).includes(i))throw new RangeError(`Unknown flight status: ${i}`);return{type:Ut.SET_FLIGHT_STATUS,payload:i}},setFlightMode:i=>{if(!Object.values(on).includes(i))throw new RangeError(`Unknown flight mode: ${i}`);return{type:Ut.SET_FLIGHT_MODE,payload:i}},updateTelemetry:i=>({type:Ut.UPDATE_TELEMETRY,payload:i}),setCameraMode:i=>{if(!Object.values(ie).includes(i))throw new RangeError(`Unknown camera mode: ${i}`);return{type:Ut.SET_CAMERA_MODE,payload:i}},setSearchQuery:i=>({type:Ut.SET_SEARCH_QUERY,payload:i??""}),toggleDetailPanel:i=>({type:Ut.TOGGLE_DETAIL_PANEL,payload:i}),toggleHabitability:i=>({type:Ut.TOGGLE_HABITABILITY,payload:i}),toggleSatelliteList:i=>({type:Ut.TOGGLE_SATELLITE_LIST,payload:i}),toggleAudioMuted:i=>({type:Ut.TOGGLE_AUDIO_MUTED,payload:i}),toggleHud:i=>({type:Ut.TOGGLE_HUD,payload:i}),togglePhotoMode:i=>({type:Ut.TOGGLE_PHOTO_MODE,payload:i}),toggleLogbook:i=>({type:Ut.TOGGLE_LOGBOOK,payload:i}),toggleConstellations:i=>({type:Ut.TOGGLE_CONSTELLATIONS,payload:i}),recordDiscovery:i=>({type:Ut.RECORD_DISCOVERY,payload:i}),pushHistory:i=>({type:Ut.PUSH_HISTORY,payload:i}),reportError:i=>({type:Ut.REPORT_ERROR,payload:{message:i?.message??String(i),at:Date.now()}}),clearError:()=>({type:Ut.CLEAR_ERROR})};function sg(){return{currentScale:0,selectedObject:"earth",targetObject:null,flightStatus:dn.IDLE,flightMode:on.MANUAL,cameraMode:ie.THIRD_PERSON,flightTelemetry:{currentSpeedC:0,lorentzFactor:1,distanceRemainingKm:0,totalDistanceKm:0,timeDilationShipSec:0,timeDilationEarthSec:0,etaSeconds:0,headingDeg:0},history:[],discoveries:[{id:"earth",name:"Earth",kind:"planet",discoveredAt:Date.now(),category:"Home Planet"}],ui:{isDetailPanelOpen:!1,isHabitabilityOpen:!1,isSatelliteListOpen:!1,isPhotoModeOpen:!1,isLogbookOpen:!1,constellationsVisible:!1,searchQuery:"",audioMuted:!1,hudVisible:!0},lastError:null}}function Gl(i,t){switch(t.type){case Ut.SET_SCALE:return{...i,currentScale:t.payload};case Ut.SELECT_OBJECT:return{...i,selectedObject:t.payload};case Ut.SET_TARGET:return{...i,targetObject:t.payload,flightStatus:dn.SPOOLING};case Ut.CLEAR_TARGET:return{...i,targetObject:null,flightStatus:dn.IDLE,flightTelemetry:{...i.flightTelemetry,currentSpeedC:0,etaSeconds:0}};case Ut.SET_FLIGHT_STATUS:return{...i,flightStatus:t.payload};case Ut.SET_FLIGHT_MODE:return{...i,flightMode:t.payload};case Ut.UPDATE_TELEMETRY:return{...i,flightTelemetry:{...i.flightTelemetry,...t.payload}};case Ut.SET_CAMERA_MODE:return{...i,cameraMode:t.payload};case Ut.SET_SEARCH_QUERY:return{...i,ui:{...i.ui,searchQuery:t.payload}};case Ut.TOGGLE_DETAIL_PANEL:return{...i,ui:{...i.ui,isDetailPanelOpen:t.payload??!i.ui.isDetailPanelOpen}};case Ut.TOGGLE_HABITABILITY:return{...i,ui:{...i.ui,isHabitabilityOpen:t.payload??!i.ui.isHabitabilityOpen}};case Ut.TOGGLE_SATELLITE_LIST:return{...i,ui:{...i.ui,isSatelliteListOpen:t.payload??!i.ui.isSatelliteListOpen}};case Ut.TOGGLE_PHOTO_MODE:return{...i,ui:{...i.ui,isPhotoModeOpen:t.payload??!i.ui.isPhotoModeOpen}};case Ut.TOGGLE_LOGBOOK:return{...i,ui:{...i.ui,isLogbookOpen:t.payload??!i.ui.isLogbookOpen}};case Ut.TOGGLE_CONSTELLATIONS:return{...i,ui:{...i.ui,constellationsVisible:t.payload??!i.ui.constellationsVisible}};case Ut.RECORD_DISCOVERY:return i.discoveries.some(n=>n.id===t.payload.id)?i:{...i,discoveries:[...i.discoveries,{...t.payload,discoveredAt:Date.now()}]};case Ut.TOGGLE_AUDIO_MUTED:return{...i,ui:{...i.ui,audioMuted:t.payload??!i.ui.audioMuted}};case Ut.TOGGLE_HUD:return{...i,ui:{...i.ui,hudVisible:t.payload??!i.ui.hudVisible}};case Ut.PUSH_HISTORY:return{...i,history:[...i.history,t.payload].slice(-50)};case Ut.REPORT_ERROR:return{...i,lastError:t.payload};case Ut.CLEAR_ERROR:return{...i,lastError:null};default:return i}}class rg{constructor(t=sg()){this._state=t,this._subscribers=new Set}getState(){return this._state}dispatch(t){if(!t||typeof t.type!="string")throw new TypeError("dispatch() requires an action object with a string `type`");const e=this._state;let n;try{n=Gl(e,t)}catch(s){n=Gl(e,{type:Ut.REPORT_ERROR,payload:s})}return this._state=n,this._notify(n,e,t),n}subscribe(t,e=n=>n){if(!t||typeof t!="function"&&typeof t!="string")throw new TypeError("subscribe() requires a callback function");let n,s;if(typeof t=="string"){if(typeof e!="function")throw new TypeError("subscribe() requires a callback function");s=o=>o[t],n=e}else n=t,s=typeof e=="function"?e:o=>o;let r;try{r=s(this._state)}catch{r=void 0}const a={selector:s,cb:n,lastValue:r};return this._subscribers.add(a),()=>this._subscribers.delete(a)}_notify(t,e,n){for(const s of this._subscribers){let r;try{r=s.selector(t)}catch{continue}if(!Object.is(r,s.lastValue)){const a=s.lastValue;s.lastValue=r;try{s.cb(r,a,n)}catch(o){console.error("[Store] subscriber callback threw:",o)}}}}}const Tn=[{id:"sun",name:"The Sun",type:"star",scaleTier:1,location:"Center of the Solar System",galaxy:"Milky Way",solarSystem:"Sol",distanceFromEarthKm:149597870,radiusKm:696340,colorHex:16765562,orbit:null,environment:{surfaceTempC:5500,atmosphericPressureAtm:0,surfaceGravityG:27.9,radiationIndex:10,hasLiquidWater:!1,isGasGiant:!1,composition:{Hydrogen:73,Helium:25,Other:2}},description:"A warm, steady G-type yellow dwarf star and the gravitational heart of our home system.",tags:["star","sol","home star","yellow dwarf"]},{id:"mercury",name:"Mercury",type:"planet",scaleTier:0,location:"1st planet from the Sun",galaxy:"Milky Way",solarSystem:"Sol",distanceFromEarthKm:917e5,radiusKm:2439.7,colorHex:10261127,orbit:{parentId:"sun",semiMajorAxisAu:.387,eccentricity:.205,periodDays:88,inclinationDeg:7},environment:{surfaceTempC:167,atmosphericPressureAtm:0,surfaceGravityG:.38,radiationIndex:8,hasLiquidWater:!1,isGasGiant:!1,composition:{Oxygen:42,Sodium:29,Hydrogen:22,Other:7}},description:"The swift, cratered, sun-scorched world closest to our star.",tags:["planet","inner planet","terrestrial"]},{id:"venus",name:"Venus",type:"planet",scaleTier:0,location:"2nd planet from the Sun",galaxy:"Milky Way",solarSystem:"Sol",distanceFromEarthKm:414e5,radiusKm:6051.8,colorHex:15255946,orbit:{parentId:"sun",semiMajorAxisAu:.723,eccentricity:.007,periodDays:225,inclinationDeg:3.4},environment:{surfaceTempC:464,atmosphericPressureAtm:92,surfaceGravityG:.9,radiationIndex:3,hasLiquidWater:!1,isGasGiant:!1,composition:{CO2:96.5,N2:3.5}},description:"Earth's greenhouse-trapped twin world, hidden under crushing sulfuric acid clouds.",tags:["planet","inner planet","greenhouse"]},{id:"earth",name:"Earth",type:"planet",scaleTier:0,location:"3rd planet from the Sun",galaxy:"Milky Way",solarSystem:"Sol",distanceFromEarthKm:0,radiusKm:6371,colorHex:5083390,orbit:{parentId:"sun",semiMajorAxisAu:1,eccentricity:.0167,periodDays:365.25,inclinationDeg:0},environment:{surfaceTempC:15,atmosphericPressureAtm:1,surfaceGravityG:1,radiationIndex:1,hasLiquidWater:!0,isGasGiant:!1,composition:{N2:78,O2:21,Argon:.9,CO2:.04}},description:"Home. A dynamic, blue, living world sheltered by oceans and life.",tags:["planet","home","habitable","terrestrial","ocean world"]},{id:"moon",name:"The Moon",type:"moon",scaleTier:0,location:"Orbiting Earth",galaxy:"Milky Way",solarSystem:"Sol",distanceFromEarthKm:384400,radiusKm:1737.4,colorHex:12303291,orbit:{parentId:"earth",semiMajorAxisAu:.00257,eccentricity:.055,periodDays:27.3,inclinationDeg:5.1},environment:{surfaceTempC:-20,atmosphericPressureAtm:0,surfaceGravityG:.166,radiationIndex:6,hasLiquidWater:!1,isGasGiant:!1,composition:{Trace:100}},description:"Earth's ancient, cratered companion and humanity's first stepping stone into space.",tags:["moon","luna","satellite"]},{id:"mars",name:"Mars",type:"planet",scaleTier:0,location:"4th planet from the Sun",galaxy:"Milky Way",solarSystem:"Sol",distanceFromEarthKm:783e5,radiusKm:3389.5,colorHex:12665870,orbit:{parentId:"sun",semiMajorAxisAu:1.524,eccentricity:.093,periodDays:687,inclinationDeg:1.85},environment:{surfaceTempC:-63,atmosphericPressureAtm:.006,surfaceGravityG:.38,radiationIndex:5,hasLiquidWater:!1,isGasGiant:!1,composition:{CO2:95,N2:2.8,Argon:2}},description:"The rust-red desert planet with ancient dry river valleys, Olympus Mons, and Valles Marineris.",tags:["planet","red planet","desert world"]},{id:"phobos",name:"Phobos",type:"moon",scaleTier:0,location:"Orbiting Mars",galaxy:"Milky Way",solarSystem:"Sol",distanceFromEarthKm:783e5,radiusKm:11.3,colorHex:9075306,orbit:{parentId:"mars",semiMajorAxisAu:626e-7,eccentricity:.015,periodDays:.32,inclinationDeg:1},environment:{surfaceTempC:-40,atmosphericPressureAtm:0,surfaceGravityG:.0057,radiationIndex:6,hasLiquidWater:!1,isGasGiant:!1,composition:{Trace:100}},description:"A heavily grooved, captured asteroid moon spiraling slowly toward Mars.",tags:["moon","mars moon"]},{id:"deimos",name:"Deimos",type:"moon",scaleTier:0,location:"Orbiting Mars",galaxy:"Milky Way",solarSystem:"Sol",distanceFromEarthKm:7832e4,radiusKm:6.2,colorHex:10391938,orbit:{parentId:"mars",semiMajorAxisAu:156e-6,eccentricity:2e-4,periodDays:1.26,inclinationDeg:1.8},environment:{surfaceTempC:-40,atmosphericPressureAtm:0,surfaceGravityG:.003,radiationIndex:6,hasLiquidWater:!1,isGasGiant:!1,composition:{Trace:100}},description:"The smooth, dust-blanketed outer moon of Mars with very low gravity.",tags:["moon","mars moon"]},{id:"ceres",name:"Ceres",type:"dwarfPlanet",scaleTier:1,location:"Asteroid Belt",galaxy:"Milky Way",solarSystem:"Sol",distanceFromEarthKm:263e6,radiusKm:469.7,colorHex:11117207,orbit:{parentId:"sun",semiMajorAxisAu:2.77,eccentricity:.076,periodDays:1682,inclinationDeg:10.6},environment:{surfaceTempC:-105,atmosphericPressureAtm:0,surfaceGravityG:.029,radiationIndex:5,hasLiquidWater:!1,isGasGiant:!1,composition:{Rock:50,WaterIce:50}},description:"The largest object in the asteroid belt, housing bright sodium carbonate salt deposits in Occator Crater.",tags:["dwarf planet","asteroid belt","ice world"]},{id:"vesta",name:"4 Vesta",type:"dwarfPlanet",scaleTier:1,location:"Asteroid Belt",galaxy:"Milky Way",solarSystem:"Sol",distanceFromEarthKm:24e7,radiusKm:262.7,colorHex:9143676,orbit:{parentId:"sun",semiMajorAxisAu:2.36,eccentricity:.089,periodDays:1325,inclinationDeg:7.1},environment:{surfaceTempC:-110,atmosphericPressureAtm:0,surfaceGravityG:.025,radiationIndex:5,hasLiquidWater:!1,isGasGiant:!1,composition:{Basalt:60,Pyroxene:40}},description:"A differentiated rocky protoplanet with a colossal south polar impact mountain.",tags:["dwarf planet","protoplanet","asteroid belt"]},{id:"asteroid-belt",name:"The Asteroid Belt",type:"asteroidBelt",scaleTier:1,location:"Between Mars and Jupiter",galaxy:"Milky Way",solarSystem:"Sol",distanceFromEarthKm:329e6,radiusKm:0,colorHex:9405816,orbit:{parentId:"sun",semiMajorAxisAu:2.7,eccentricity:.08,periodDays:1600,inclinationDeg:6},environment:{surfaceTempC:-100,atmosphericPressureAtm:0,surfaceGravityG:0,radiationIndex:5,hasLiquidWater:!1,isGasGiant:!1,composition:{Silicates:75,Metals:25}},description:"A vast ring of primordial rock and ice remnants drifting between the inner and outer planets.",tags:["asteroids","belt","debris"]},{id:"jupiter",name:"Jupiter",type:"planet",scaleTier:1,location:"5th planet from the Sun",galaxy:"Milky Way",solarSystem:"Sol",distanceFromEarthKm:6287e5,radiusKm:69911,colorHex:14200446,orbit:{parentId:"sun",semiMajorAxisAu:5.2,eccentricity:.049,periodDays:4333,inclinationDeg:1.3},environment:{surfaceTempC:-108,atmosphericPressureAtm:0,surfaceGravityG:2.53,radiationIndex:9,hasLiquidWater:!1,isGasGiant:!0,composition:{H2:90,Helium:10}},description:"The monarch of the Solar System — a colossal gas giant with the centuries-old Great Red Spot storm.",tags:["planet","gas giant","outer planet"]},{id:"io",name:"Io",type:"moon",scaleTier:1,location:"Orbiting Jupiter",galaxy:"Milky Way",solarSystem:"Sol",distanceFromEarthKm:6283e5,radiusKm:1821.6,colorHex:16109619,orbit:{parentId:"jupiter",semiMajorAxisAu:.00282,eccentricity:.0041,periodDays:1.77,inclinationDeg:.05},environment:{surfaceTempC:-143,atmosphericPressureAtm:1e-6,surfaceGravityG:.183,radiationIndex:10,hasLiquidWater:!1,isGasGiant:!1,composition:{Sulfur:70,Silicates:30}},description:"The most volcanically active body in the Solar System, churned by tidal friction from Jupiter.",tags:["moon","volcano","galilean moon"]},{id:"europa",name:"Europa",type:"moon",scaleTier:1,location:"Orbiting Jupiter",galaxy:"Milky Way",solarSystem:"Sol",distanceFromEarthKm:6283e5,radiusKm:1560.8,colorHex:14997700,orbit:{parentId:"jupiter",semiMajorAxisAu:.0045,eccentricity:.009,periodDays:3.55,inclinationDeg:.47},environment:{surfaceTempC:-160,atmosphericPressureAtm:0,surfaceGravityG:.134,radiationIndex:7,hasLiquidWater:!0,isGasGiant:!1,composition:{WaterIce:85,Silicates:15}},description:"An ice-crusted world hiding a warm global saltwater ocean with twice the water of Earth.",tags:["moon","ocean world","galilean moon","habitable candidate"]},{id:"ganymede",name:"Ganymede",type:"moon",scaleTier:1,location:"Orbiting Jupiter",galaxy:"Milky Way",solarSystem:"Sol",distanceFromEarthKm:6285e5,radiusKm:2634.1,colorHex:10195079,orbit:{parentId:"jupiter",semiMajorAxisAu:.00715,eccentricity:.0013,periodDays:7.15,inclinationDeg:.2},environment:{surfaceTempC:-163,atmosphericPressureAtm:0,surfaceGravityG:.146,radiationIndex:6,hasLiquidWater:!0,isGasGiant:!1,composition:{WaterIce:50,SilicateRock:50}},description:"The largest moon in the Solar System — larger than Mercury — with its own generated magnetic field.",tags:["moon","galilean moon","magnetic field"]},{id:"callisto",name:"Callisto",type:"moon",scaleTier:1,location:"Orbiting Jupiter",galaxy:"Milky Way",solarSystem:"Sol",distanceFromEarthKm:6289e5,radiusKm:2410.3,colorHex:7234907,orbit:{parentId:"jupiter",semiMajorAxisAu:.01258,eccentricity:.0074,periodDays:16.69,inclinationDeg:.28},environment:{surfaceTempC:-171,atmosphericPressureAtm:0,surfaceGravityG:.126,radiationIndex:3,hasLiquidWater:!0,isGasGiant:!1,composition:{WaterIce:50,Rock:50}},description:"A dark, heavily cratered ancient ice moon with the gigantic multi-ring Valhalla impact structure.",tags:["moon","galilean moon","ancient"]},{id:"saturn",name:"Saturn",type:"planet",scaleTier:1,location:"6th planet from the Sun",galaxy:"Milky Way",solarSystem:"Sol",distanceFromEarthKm:1275e6,radiusKm:58232,colorHex:15390376,orbit:{parentId:"sun",semiMajorAxisAu:9.58,eccentricity:.057,periodDays:10759,inclinationDeg:2.5},environment:{surfaceTempC:-139,atmosphericPressureAtm:0,surfaceGravityG:1.06,radiationIndex:8,hasLiquidWater:!1,isGasGiant:!0,composition:{H2:96,Helium:3,Other:1}},description:"The ringed jewel of the solar system, crowned with brilliant crystalline ice ringlets.",tags:["planet","rings","gas giant"]},{id:"enceladus",name:"Enceladus",type:"moon",scaleTier:1,location:"Orbiting Saturn",galaxy:"Milky Way",solarSystem:"Sol",distanceFromEarthKm:1275e6,radiusKm:252.1,colorHex:16448255,orbit:{parentId:"saturn",semiMajorAxisAu:.00159,eccentricity:.0047,periodDays:1.37,inclinationDeg:.01},environment:{surfaceTempC:-198,atmosphericPressureAtm:0,surfaceGravityG:.0113,radiationIndex:4,hasLiquidWater:!0,isGasGiant:!1,composition:{WaterIce:95,Organics:5}},description:"A dazzling snow-white moon spraying organic-rich water vapor geysers from southern tiger stripes.",tags:["moon","cryovolcanism","ocean world","geysers"]},{id:"mimas",name:"Mimas",type:"moon",scaleTier:1,location:"Orbiting Saturn",galaxy:"Milky Way",solarSystem:"Sol",distanceFromEarthKm:1275e6,radiusKm:198.2,colorHex:11905437,orbit:{parentId:"saturn",semiMajorAxisAu:.00124,eccentricity:.02,periodDays:.94,inclinationDeg:1.57},environment:{surfaceTempC:-209,atmosphericPressureAtm:0,surfaceGravityG:.0065,radiationIndex:4,hasLiquidWater:!1,isGasGiant:!1,composition:{WaterIce:90,Rock:10}},description:"Saturn's 'Death Star' moon, dominated by the colossal 130-km wide Herschel crater.",tags:["moon","crater"]},{id:"titan",name:"Titan",type:"moon",scaleTier:1,location:"Orbiting Saturn",galaxy:"Milky Way",solarSystem:"Sol",distanceFromEarthKm:1275e6,radiusKm:2574.7,colorHex:14723420,orbit:{parentId:"saturn",semiMajorAxisAu:.00817,eccentricity:.028,periodDays:15.9,inclinationDeg:.35},environment:{surfaceTempC:-179,atmosphericPressureAtm:1.45,surfaceGravityG:.14,radiationIndex:3,hasLiquidWater:!1,isGasGiant:!1,composition:{N2:95,CH4:5}},description:"A golden smog-wrapped moon with methane rain, rivers, and tranquil hydrocarbon seas.",tags:["moon","methane lakes","dense atmosphere"]},{id:"iapetus",name:"Iapetus",type:"moon",scaleTier:1,location:"Orbiting Saturn",galaxy:"Milky Way",solarSystem:"Sol",distanceFromEarthKm:1275e6,radiusKm:734.5,colorHex:7232840,orbit:{parentId:"saturn",semiMajorAxisAu:.0238,eccentricity:.028,periodDays:79.3,inclinationDeg:15.47},environment:{surfaceTempC:-180,atmosphericPressureAtm:0,surfaceGravityG:.0227,radiationIndex:3,hasLiquidWater:!1,isGasGiant:!1,composition:{WaterIce:80,Carbonaceous:20}},description:"The yin-yang moon with one coal-dark hemisphere, one bright icy hemisphere, and a giant equatorial ridge.",tags:["moon","two-tone","equatorial ridge"]},{id:"uranus",name:"Uranus",type:"planet",scaleTier:1,location:"7th planet from the Sun",galaxy:"Milky Way",solarSystem:"Sol",distanceFromEarthKm:272e7,radiusKm:25362,colorHex:11131096,orbit:{parentId:"sun",semiMajorAxisAu:19.2,eccentricity:.047,periodDays:30687,inclinationDeg:.77},environment:{surfaceTempC:-197,atmosphericPressureAtm:0,surfaceGravityG:.89,radiationIndex:7,hasLiquidWater:!1,isGasGiant:!0,composition:{H2:82.5,Helium:15.2,CH4:2.3}},description:"A serene, pale-cyan ice giant rolling around the Sun on its tilted side.",tags:["planet","ice giant"]},{id:"miranda",name:"Miranda",type:"moon",scaleTier:1,location:"Orbiting Uranus",galaxy:"Milky Way",solarSystem:"Sol",distanceFromEarthKm:272e7,radiusKm:235.8,colorHex:10660274,orbit:{parentId:"uranus",semiMajorAxisAu:865e-6,eccentricity:.0013,periodDays:1.41,inclinationDeg:4.34},environment:{surfaceTempC:-213,atmosphericPressureAtm:0,surfaceGravityG:.008,radiationIndex:4,hasLiquidWater:!1,isGasGiant:!1,composition:{WaterIce:60,Silicates:40}},description:"A jumbled Frankenstein moon of mismatched terrain featuring the sheer 20-km high Verona Rupes cliffs.",tags:["moon","cliffs","uranus moon"]},{id:"neptune",name:"Neptune",type:"planet",scaleTier:1,location:"8th planet from the Sun",galaxy:"Milky Way",solarSystem:"Sol",distanceFromEarthKm:435e7,radiusKm:24622,colorHex:5996512,orbit:{parentId:"sun",semiMajorAxisAu:30.05,eccentricity:.009,periodDays:60190,inclinationDeg:1.77},environment:{surfaceTempC:-201,atmosphericPressureAtm:0,surfaceGravityG:1.14,radiationIndex:7,hasLiquidWater:!1,isGasGiant:!0,composition:{H2:80,Helium:19,CH4:1}},description:"A vibrant azure ice giant lashed by supersonic storms and raging jet streams.",tags:["planet","ice giant"]},{id:"triton",name:"Triton",type:"moon",scaleTier:1,location:"Orbiting Neptune",galaxy:"Milky Way",solarSystem:"Sol",distanceFromEarthKm:435e7,radiusKm:1353.4,colorHex:12241356,orbit:{parentId:"neptune",semiMajorAxisAu:.00237,eccentricity:16e-6,periodDays:5.88,inclinationDeg:156.8},environment:{surfaceTempC:-235,atmosphericPressureAtm:14e-6,surfaceGravityG:.079,radiationIndex:4,hasLiquidWater:!1,isGasGiant:!1,composition:{NitrogenIce:55,WaterIce:35,CO2:10}},description:"A captured retrograde Kuiper Belt world erupting active cryo-nitrogen geysers across cantaloupe terrain.",tags:["moon","retrograde","geysers","kuiper belt"]},{id:"pluto",name:"Pluto",type:"dwarfPlanet",scaleTier:1,location:"Kuiper Belt",galaxy:"Milky Way",solarSystem:"Sol",distanceFromEarthKm:59e8,radiusKm:1188.3,colorHex:13349267,orbit:{parentId:"sun",semiMajorAxisAu:39.5,eccentricity:.249,periodDays:90560,inclinationDeg:17.2},environment:{surfaceTempC:-229,atmosphericPressureAtm:1e-5,surfaceGravityG:.063,radiationIndex:5,hasLiquidWater:!1,isGasGiant:!1,composition:{N2:98,CH4:1.5,CO:.5}},description:"A complex icy world at the Kuiper Belt frontier with nitrogen glaciers and the famous Tombaugh Regio heart.",tags:["dwarf planet","kuiper belt","heart"]},{id:"charon",name:"Charon",type:"moon",scaleTier:1,location:"Orbiting Pluto",galaxy:"Milky Way",solarSystem:"Sol",distanceFromEarthKm:59e8,radiusKm:606,colorHex:10391941,orbit:{parentId:"pluto",semiMajorAxisAu:13e-5,eccentricity:2e-4,periodDays:6.38,inclinationDeg:0},environment:{surfaceTempC:-230,atmosphericPressureAtm:0,surfaceGravityG:.029,radiationIndex:4,hasLiquidWater:!1,isGasGiant:!1,composition:{WaterIce:85,Organics:15}},description:"Pluto's mutually tidally locked binary partner, marked by the reddish Mordor Macula north polar region.",tags:["moon","binary planet","kuiper belt"]},{id:"eris",name:"Eris",type:"dwarfPlanet",scaleTier:1,location:"Scattered Disc",galaxy:"Milky Way",solarSystem:"Sol",distanceFromEarthKm:144e8,radiusKm:1163,colorHex:15394527,orbit:{parentId:"sun",semiMajorAxisAu:67.8,eccentricity:.44,periodDays:203830,inclinationDeg:44},environment:{surfaceTempC:-243,atmosphericPressureAtm:0,surfaceGravityG:.084,radiationIndex:4,hasLiquidWater:!1,isGasGiant:!1,composition:{MethaneIce:70,NitrogenIce:30}},description:"A massive, ultra-reflective scattered disc dwarf planet whose 2005 discovery led to the modern definition of a planet.",tags:["dwarf planet","scattered disc","trans-neptunian"]},{id:"haumea",name:"Haumea",type:"dwarfPlanet",scaleTier:1,location:"Kuiper Belt",galaxy:"Milky Way",solarSystem:"Sol",distanceFromEarthKm:75e8,radiusKm:816,colorHex:14279659,orbit:{parentId:"sun",semiMajorAxisAu:43.1,eccentricity:.19,periodDays:103770,inclinationDeg:28.2},environment:{surfaceTempC:-240,atmosphericPressureAtm:0,surfaceGravityG:.045,radiationIndex:4,hasLiquidWater:!1,isGasGiant:!1,composition:{WaterIce:90,Rock:10}},description:"A bizarre, rapid-spinning football-shaped dwarf planet with crystalline ice rings and a 3.9-hour day.",tags:["dwarf planet","rings","fast rotator","kuiper belt"]},{id:"makemake",name:"Makemake",type:"dwarfPlanet",scaleTier:1,location:"Kuiper Belt",galaxy:"Milky Way",solarSystem:"Sol",distanceFromEarthKm:78e8,radiusKm:715,colorHex:13794643,orbit:{parentId:"sun",semiMajorAxisAu:45.4,eccentricity:.16,periodDays:112897,inclinationDeg:29},environment:{surfaceTempC:-239,atmosphericPressureAtm:0,surfaceGravityG:.051,radiationIndex:4,hasLiquidWater:!1,isGasGiant:!1,composition:{MethaneIce:80,EthaneIce:20}},description:"A brilliant reddish methane-snow world in the Kuiper Belt named after the Rapa Nui creator god.",tags:["dwarf planet","kuiper belt","methane ice"]},{id:"sedna",name:"90377 Sedna",type:"dwarfPlanet",scaleTier:1,location:"Inner Oort Cloud",galaxy:"Milky Way",solarSystem:"Sol",distanceFromEarthKm:13e9,radiusKm:498,colorHex:11881787,orbit:{parentId:"sun",semiMajorAxisAu:506,eccentricity:.85,periodDays:416e4,inclinationDeg:11.9},environment:{surfaceTempC:-240,atmosphericPressureAtm:0,surfaceGravityG:.034,radiationIndex:3,hasLiquidWater:!1,isGasGiant:!1,composition:{Tholins:60,WaterIce:40}},description:"One of the most distant known objects in the Solar System on an extreme 11,400-year inner Oort cloud orbit.",tags:["dwarf planet","oort cloud","extreme orbit"]},{id:"halley-comet",name:"Halley's Comet (1P/Halley)",type:"dwarfPlanet",scaleTier:1,location:"Solar System (Periodic)",galaxy:"Milky Way",solarSystem:"Sol",distanceFromEarthKm:52e8,radiusKm:5.5,colorHex:9479342,orbit:{parentId:"sun",semiMajorAxisAu:17.8,eccentricity:.967,periodDays:27500,inclinationDeg:162.3},environment:{surfaceTempC:-150,atmosphericPressureAtm:0,surfaceGravityG:3e-4,radiationIndex:5,hasLiquidWater:!1,isGasGiant:!1,composition:{WaterIce:80,CO:10,Carbon:10}},description:"Humanity's most famous periodic comet, lighting up Earth's skies every 75-76 years.",tags:["comet","periodic","dirty snowball"]},{id:"oumuamua",name:"'Oumuamua (1I/2017 U1)",type:"dwarfPlanet",scaleTier:1,location:"Exiting Solar System",galaxy:"Milky Way",solarSystem:null,distanceFromEarthKm:45e8,radiusKm:.2,colorHex:10048836,orbit:null,environment:{surfaceTempC:-220,atmosphericPressureAtm:0,surfaceGravityG:1e-5,radiationIndex:4,hasLiquidWater:!1,isGasGiant:!1,composition:{CarbonaceousTholins:100}},description:"The first interstellar visitor ever detected passing through our Solar System from deep interstellar space.",tags:["interstellar visitor","asteroid","hyperbolic"]},{id:"comet-67p",name:"Comet 67P/Churyumov–Gerasimenko",type:"dwarfPlanet",scaleTier:1,location:"Jupiter-family Comet",galaxy:"Milky Way",solarSystem:"Sol",distanceFromEarthKm:58e7,radiusKm:2.1,colorHex:5920080,orbit:{parentId:"sun",semiMajorAxisAu:3.46,eccentricity:.64,periodDays:2356,inclinationDeg:7.04},environment:{surfaceTempC:-120,atmosphericPressureAtm:0,surfaceGravityG:1e-4,radiationIndex:5,hasLiquidWater:!1,isGasGiant:!1,composition:{Organics:45,Silicates:45,WaterIce:10}},description:"The rubber-duck shaped comet rendezvoused with by ESA's Rosetta spacecraft and lander Philae.",tags:["comet","rosetta","philae"]},{id:"proxima-centauri",name:"Proxima Centauri",type:"star",scaleTier:2,location:"Nearest star to the Sun",galaxy:"Milky Way",solarSystem:"Alpha Centauri",distanceFromEarthKm:3992e10,radiusKm:107e3,colorHex:16739146,orbit:null,environment:{surfaceTempC:2800,atmosphericPressureAtm:0,surfaceGravityG:45,radiationIndex:9,hasLiquidWater:!1,isGasGiant:!1,composition:{Hydrogen:74,Helium:25,Other:1}},description:"A flare-active red dwarf star and humanity's closest stellar neighbor at 4.24 light-years.",tags:["star","red dwarf","closest star"]},{id:"proxima-b",name:"Proxima Centauri b",type:"planet",scaleTier:2,location:"Orbiting Proxima Centauri",galaxy:"Milky Way",solarSystem:"Alpha Centauri",distanceFromEarthKm:3992e10,radiusKm:7e3,colorHex:9413833,orbit:{parentId:"proxima-centauri",semiMajorAxisAu:.0485,eccentricity:.02,periodDays:11.2,inclinationDeg:0},environment:{surfaceTempC:-39,atmosphericPressureAtm:.6,surfaceGravityG:1.1,radiationIndex:7,hasLiquidWater:!0,isGasGiant:!1,composition:{N2:60,CO2:30,Other:10}},description:"A terrestrial exoplanet orbiting in Proxima's habitable zone, receiving frequent stellar flares.",tags:["exoplanet","planet","habitable zone","terrestrial"]},{id:"alpha-centauri-a",name:"Alpha Centauri A (Rigil Kentaurus)",type:"star",scaleTier:2,location:"Alpha Centauri system",galaxy:"Milky Way",solarSystem:"Alpha Centauri",distanceFromEarthKm:411e11,radiusKm:855e3,colorHex:16773840,orbit:null,environment:{surfaceTempC:5800,atmosphericPressureAtm:0,surfaceGravityG:24,radiationIndex:10,hasLiquidWater:!1,isGasGiant:!1,composition:{Hydrogen:71,Helium:27,Other:2}},description:"A bright yellow-orange G-type star slightly larger than our Sun in a close binary dance.",tags:["star","binary star","solar twin"]},{id:"alpha-centauri-b",name:"Alpha Centauri B (Toliman)",type:"star",scaleTier:2,location:"Alpha Centauri system",galaxy:"Milky Way",solarSystem:"Alpha Centauri",distanceFromEarthKm:411e11,radiusKm:6e5,colorHex:16754e3,orbit:null,environment:{surfaceTempC:5260,atmosphericPressureAtm:0,surfaceGravityG:30,radiationIndex:10,hasLiquidWater:!1,isGasGiant:!1,composition:{Hydrogen:72,Helium:26,Other:2}},description:"The orange K-dwarf companion star to Alpha Centauri A.",tags:["star","k dwarf","binary star"]},{id:"barnards-star",name:"Barnard's Star",type:"star",scaleTier:2,location:"Ophiuchus",galaxy:"Milky Way",solarSystem:"Barnard",distanceFromEarthKm:564e11,radiusKm:136e3,colorHex:16733491,orbit:null,environment:{surfaceTempC:3100,atmosphericPressureAtm:0,surfaceGravityG:40,radiationIndex:8,hasLiquidWater:!1,isGasGiant:!1,composition:{Hydrogen:74,Helium:25,Metals:1}},description:"An ancient red dwarf possessing the fastest known proper motion across Earth's night sky.",tags:["star","red dwarf","high proper motion"]},{id:"trappist-1",name:"TRAPPIST-1",type:"star",scaleTier:2,location:"Aquarius",galaxy:"Milky Way",solarSystem:"TRAPPIST-1",distanceFromEarthKm:373e12,radiusKm:84e3,colorHex:16726832,orbit:null,environment:{surfaceTempC:2280,atmosphericPressureAtm:0,surfaceGravityG:60,radiationIndex:8,hasLiquidWater:!1,isGasGiant:!1,composition:{Hydrogen:75,Helium:24,Other:1}},description:"An ultra-cool red dwarf star hosting a famous resonant system of 7 Earth-sized terrestrial planets.",tags:["star","ultra-cool dwarf","trappist"]},{id:"trappist-1e",name:"TRAPPIST-1e",type:"planet",scaleTier:2,location:"Orbiting TRAPPIST-1",galaxy:"Milky Way",solarSystem:"TRAPPIST-1",distanceFromEarthKm:373e12,radiusKm:5850,colorHex:4030156,orbit:{parentId:"trappist-1",semiMajorAxisAu:.029,eccentricity:.005,periodDays:6.1,inclinationDeg:89.8},environment:{surfaceTempC:-22,atmosphericPressureAtm:1.1,surfaceGravityG:.93,radiationIndex:4,hasLiquidWater:!0,isGasGiant:!1,composition:{N2:70,O2:18,CO2:10,WaterVapor:2}},description:"One of the most promising potentially habitable Earth-sized exoplanets known, with liquid water potential.",tags:["exoplanet","habitable zone","earth analog","trappist"]},{id:"trappist-1f",name:"TRAPPIST-1f",type:"planet",scaleTier:2,location:"Orbiting TRAPPIST-1",galaxy:"Milky Way",solarSystem:"TRAPPIST-1",distanceFromEarthKm:373e12,radiusKm:6660,colorHex:7775663,orbit:{parentId:"trappist-1",semiMajorAxisAu:.038,eccentricity:.01,periodDays:9.2,inclinationDeg:89.7},environment:{surfaceTempC:-54,atmosphericPressureAtm:1.5,surfaceGravityG:.88,radiationIndex:3,hasLiquidWater:!0,isGasGiant:!1,composition:{WaterIce:40,Silicates:60}},description:"A temperate water-rich world in the TRAPPIST-1 system, likely wrapped in a global deep ocean or ice shell.",tags:["exoplanet","ocean world","trappist"]},{id:"kepler-452b",name:"Kepler-452b",type:"planet",scaleTier:2,location:"Cygnus",galaxy:"Milky Way",solarSystem:"Kepler-452",distanceFromEarthKm:17e15,radiusKm:10380,colorHex:4889968,orbit:null,environment:{surfaceTempC:-8,atmosphericPressureAtm:2,surfaceGravityG:1.9,radiationIndex:2,hasLiquidWater:!0,isGasGiant:!1,composition:{N2:75,O2:15,CO2:10}},description:"'Earth's Older Cousin' — a super-Earth in the habitable zone of a G2-type sun-like star 1,800 light-years away.",tags:["exoplanet","super-earth","habitable zone","earth cousin"]},{id:"kepler-22b",name:"Kepler-22b",type:"planet",scaleTier:2,location:"Cygnus",galaxy:"Milky Way",solarSystem:"Kepler-22",distanceFromEarthKm:59e14,radiusKm:15290,colorHex:3906744,orbit:null,environment:{surfaceTempC:22,atmosphericPressureAtm:5,surfaceGravityG:1.8,radiationIndex:2,hasLiquidWater:!0,isGasGiant:!1,composition:{Water:60,H2_He:25,Silicates:15}},description:"The first confirmed exoplanet discovered by NASA's Kepler mission in the comfortable habitable zone of a sun-like star.",tags:["exoplanet","ocean world","habitable zone"]},{id:"kepler-186f",name:"Kepler-186f",type:"planet",scaleTier:2,location:"Cygnus",galaxy:"Milky Way",solarSystem:"Kepler-186",distanceFromEarthKm:55e14,radiusKm:7450,colorHex:9349238,orbit:null,environment:{surfaceTempC:-46,atmosphericPressureAtm:1,surfaceGravityG:1.15,radiationIndex:3,hasLiquidWater:!0,isGasGiant:!1,composition:{N2:76,CO2:20,O2:4}},description:"The historic first validated Earth-sized planet found in the habitable zone of an M-dwarf star.",tags:["exoplanet","earth-sized","habitable zone"]},{id:"55-cancri-e",name:"55 Cancri e (Janssen)",type:"planet",scaleTier:2,location:"Cancer",galaxy:"Milky Way",solarSystem:"Copernicus",distanceFromEarthKm:388e12,radiusKm:12e3,colorHex:16729344,orbit:null,environment:{surfaceTempC:2300,atmosphericPressureAtm:100,surfaceGravityG:2.2,radiationIndex:10,hasLiquidWater:!1,isGasGiant:!1,composition:{CarbonLava:50,SilicateLava:30,Iron:20}},description:"A super-hot, carbon-rich lava super-Earth with molten oceans on its dayside and possible diamond interior mantle.",tags:["exoplanet","lava world","diamond planet","super-earth"]},{id:"hd-189733-b",name:"HD 189733 b",type:"planet",scaleTier:2,location:"Vulpecula",galaxy:"Milky Way",solarSystem:"HD 189733",distanceFromEarthKm:61e13,radiusKm:80500,colorHex:1857753,orbit:null,environment:{surfaceTempC:930,atmosphericPressureAtm:0,surfaceGravityG:2.1,radiationIndex:9,hasLiquidWater:!1,isGasGiant:!0,composition:{SilicateClouds:40,H2:50,Methane:10}},description:"A cobalt-blue hot Jupiter where supersonic 8,700 km/h winds blow sideways showers of molten silicate glass.",tags:["exoplanet","hot jupiter","glass rain","cobalt blue"]},{id:"wasp-76b",name:"WASP-76b",type:"planet",scaleTier:2,location:"Pisces",galaxy:"Milky Way",solarSystem:"WASP-76",distanceFromEarthKm:6e15,radiusKm:13e4,colorHex:11680547,orbit:null,environment:{surfaceTempC:2400,atmosphericPressureAtm:0,surfaceGravityG:.6,radiationIndex:10,hasLiquidWater:!1,isGasGiant:!0,composition:{IronVapor:30,H2:60,Helium:10}},description:"An ultra-hot gas giant with dayside temperatures exceeding 2400°C where vaporized iron condenses into nightside iron rain.",tags:["exoplanet","ultra-hot jupiter","iron rain"]},{id:"k2-18b",name:"K2-18b",type:"planet",scaleTier:2,location:"Leo",galaxy:"Milky Way",solarSystem:"K2-18",distanceFromEarthKm:117e13,radiusKm:16600,colorHex:4620980,orbit:null,environment:{surfaceTempC:-7,atmosphericPressureAtm:15,surfaceGravityG:1.3,radiationIndex:4,hasLiquidWater:!0,isGasGiant:!1,composition:{H2_He:50,Methane:25,CO2:20,WaterVapor:5}},description:"A candidate Hycean sub-Neptune exoplanet with detected atmospheric methane and carbon dioxide in its habitable zone.",tags:["exoplanet","hycean","habitable zone","sub-neptune"]},{id:"psr-b1257-12-c",name:"PSR B1257+12 c (Poltergeist)",type:"planet",scaleTier:2,location:"Virgo",galaxy:"Milky Way",solarSystem:"Lich",distanceFromEarthKm:218e14,radiusKm:10200,colorHex:7372944,orbit:null,environment:{surfaceTempC:-120,atmosphericPressureAtm:.1,surfaceGravityG:2.8,radiationIndex:10,hasLiquidWater:!1,isGasGiant:!1,composition:{HeavyMetals:80,Silicates:20}},description:"A zombie super-Earth orbiting a rapidly spinning pulsar, bathed in lethal relativistic magnetic particle beams.",tags:["exoplanet","pulsar planet","extreme","zombie world"]},{id:"sirius-a",name:"Sirius A",type:"star",scaleTier:2,location:"Canis Major",galaxy:"Milky Way",solarSystem:"Sirius",distanceFromEarthKm:815e11,radiusKm:1192e3,colorHex:13625599,orbit:null,environment:{surfaceTempC:9940,atmosphericPressureAtm:0,surfaceGravityG:4.5,radiationIndex:10,hasLiquidWater:!1,isGasGiant:!1,composition:{Hydrogen:70,Helium:28,Other:2}},description:"The brightest star in Earth's night sky, blazing blue-white 8.6 light-years away.",tags:["star","brightest star","a-type star"]},{id:"vega",name:"Vega (Alpha Lyrae)",type:"star",scaleTier:2,location:"Lyra",galaxy:"Milky Way",solarSystem:"Vega",distanceFromEarthKm:237e12,radiusKm:1643e3,colorHex:14084351,orbit:null,environment:{surfaceTempC:9600,atmosphericPressureAtm:0,surfaceGravityG:3.5,radiationIndex:10,hasLiquidWater:!1,isGasGiant:!1,composition:{Hydrogen:72,Helium:26,Metals:2}},description:"A rapid-spinning oblate blue-white star with an extensive circumstellar dust and debris ring.",tags:["star","standard candle","debris ring"]},{id:"rigel",name:"Rigel (Beta Orionis)",type:"star",scaleTier:2,location:"Orion",galaxy:"Milky Way",solarSystem:"Rigel",distanceFromEarthKm:817e13,radiusKm:549e5,colorHex:10207999,orbit:null,environment:{surfaceTempC:12100,atmosphericPressureAtm:0,surfaceGravityG:.1,radiationIndex:10,hasLiquidWater:!1,isGasGiant:!1,composition:{Hydrogen:68,Helium:30,Other:2}},description:"A super-luminous blue supergiant star outshining our Sun by 120,000 times, lighting up the Orion region.",tags:["star","blue supergiant","orion"]},{id:"betelgeuse",name:"Betelgeuse (Alpha Orionis)",type:"star",scaleTier:2,location:"Orion",galaxy:"Milky Way",solarSystem:null,distanceFromEarthKm:3781e12,radiusKm:617e6,colorHex:16738876,orbit:null,environment:{surfaceTempC:3500,atmosphericPressureAtm:0,surfaceGravityG:.02,radiationIndex:9,hasLiquidWater:!1,isGasGiant:!1,composition:{Hydrogen:60,Helium:38,Other:2}},description:"A gigantic, pulsating red supergiant in Orion's shoulder destined to explode as a dramatic supernova.",tags:["star","red supergiant","supernova candidate"]},{id:"antares",name:"Antares (Alpha Scorpii)",type:"star",scaleTier:2,location:"Scorpius",galaxy:"Milky Way",solarSystem:null,distanceFromEarthKm:52e14,radiusKm:473e6,colorHex:16732979,orbit:null,environment:{surfaceTempC:3400,atmosphericPressureAtm:0,surfaceGravityG:.015,radiationIndex:9,hasLiquidWater:!1,isGasGiant:!1,composition:{Hydrogen:62,Helium:36,Other:2}},description:"The fiery red heart of Scorpius — an immense red supergiant star over 600 times the diameter of our Sun.",tags:["star","red supergiant","scorpius"]},{id:"aldebaran",name:"Aldebaran (Alpha Tauri)",type:"star",scaleTier:2,location:"Taurus",galaxy:"Milky Way",solarSystem:"Aldebaran",distanceFromEarthKm:618e12,radiusKm:307e5,colorHex:16747586,orbit:null,environment:{surfaceTempC:3900,atmosphericPressureAtm:0,surfaceGravityG:.2,radiationIndex:9,hasLiquidWater:!1,isGasGiant:!1,composition:{Hydrogen:69,Helium:29,Other:2}},description:"The brilliant orange giant star marking the fiery eye of the Bull in the constellation Taurus.",tags:["star","orange giant","taurus"]},{id:"polaris",name:"Polaris (The North Star)",type:"star",scaleTier:2,location:"Ursa Minor",galaxy:"Milky Way",solarSystem:"Polaris",distanceFromEarthKm:407e13,radiusKm:261e5,colorHex:16774363,orbit:null,environment:{surfaceTempC:6015,atmosphericPressureAtm:0,surfaceGravityG:.5,radiationIndex:9,hasLiquidWater:!1,isGasGiant:!1,composition:{Hydrogen:70,Helium:28,Metals:2}},description:"The iconic northern navigation star — a classic Cepheid variable supergiant leading a triple star system.",tags:["star","north star","cepheid variable","navigation"]},{id:"stephenson-2-18",name:"Stephenson 2-18",type:"star",scaleTier:2,location:"Scutum",galaxy:"Milky Way",solarSystem:null,distanceFromEarthKm:18e16,radiusKm:1496e6,colorHex:16730144,orbit:null,environment:{surfaceTempC:3200,atmosphericPressureAtm:0,surfaceGravityG:.001,radiationIndex:9,hasLiquidWater:!1,isGasGiant:!1,composition:{Hydrogen:55,Helium:43,Other:2}},description:"One of the largest known stars in the universe — a red hypergiant large enough to engulf Saturn's orbit.",tags:["star","hypergiant","largest star"]},{id:"r136a1",name:"R136a1",type:"star",scaleTier:2,location:"Tarantula Nebula (LMC)",galaxy:"Large Magellanic Cloud",solarSystem:null,distanceFromEarthKm:154e16,radiusKm:297e5,colorHex:8961023,orbit:null,environment:{surfaceTempC:46e3,atmosphericPressureAtm:0,surfaceGravityG:3.5,radiationIndex:10,hasLiquidWater:!1,isGasGiant:!1,composition:{Hydrogen:60,Helium:38,Metals:2}},description:"The most massive known star in the universe (~200 solar masses), radiating with blinding Wolf-Rayet winds.",tags:["star","most massive","wolf-rayet"]},{id:"crab-pulsar",name:"Crab Pulsar (PSR B0531+21)",type:"star",scaleTier:2,location:"Crab Nebula (Taurus)",galaxy:"Milky Way",solarSystem:null,distanceFromEarthKm:615e14,radiusKm:10,colorHex:7595775,orbit:null,environment:{surfaceTempC:1e6,atmosphericPressureAtm:0,surfaceGravityG:2e11,radiationIndex:10,hasLiquidWater:!1,isGasGiant:!1,composition:{Neutrons:95,SuperconductingProtons:5}},description:"A super-dense neutron star spinning 30 times per second, emitting flashing lighthouse beams of gamma and X-rays.",tags:["pulsar","neutron star","supernova remnant"]},{id:"sgr-1806-20",name:"SGR 1806-20 (Magnetar)",type:"star",scaleTier:2,location:"Sagittarius",galaxy:"Milky Way",solarSystem:null,distanceFromEarthKm:47e16,radiusKm:12,colorHex:16711935,orbit:null,environment:{surfaceTempC:2e6,atmosphericPressureAtm:0,surfaceGravityG:3e11,radiationIndex:10,hasLiquidWater:!1,isGasGiant:!1,composition:{DegenerateMatter:100}},description:"An ultra-magnetic neutron star with magnetic fields a quadrillion times stronger than Earth, producing colossal starquakes.",tags:["magnetar","neutron star","extreme magnetism"]},{id:"cygnus-x1",name:"Cygnus X-1",type:"blackHole",scaleTier:2,location:"Cygnus",galaxy:"Milky Way",solarSystem:null,distanceFromEarthKm:576e14,radiusKm:44,colorHex:1118488,orbit:null,environment:{surfaceTempC:NaN,atmosphericPressureAtm:0,surfaceGravityG:1/0,radiationIndex:10,hasLiquidWater:!1,isGasGiant:!1,composition:{Singularity:100}},description:"The first widely accepted stellar-mass black hole, violently feeding from its blue supergiant companion star.",tags:["black hole","stellar mass","x-ray binary"]},{id:"sagittarius-a-star",name:"Sagittarius A*",type:"blackHole",scaleTier:2,location:"Galactic Center",galaxy:"Milky Way",solarSystem:null,distanceFromEarthKm:2466e14,radiusKm:12e6,colorHex:1710626,orbit:null,environment:{surfaceTempC:NaN,atmosphericPressureAtm:0,surfaceGravityG:1/0,radiationIndex:10,hasLiquidWater:!1,isGasGiant:!1,composition:{Singularity:100}},description:"The 4-million-solar-mass supermassive black hole anchoring the gravitational core of our Milky Way.",tags:["black hole","galactic center","supermassive black hole"]},{id:"eagle-nebula",name:"Eagle Nebula (Pillars of Creation / M16)",type:"nebula",scaleTier:2,location:"Serpens",galaxy:"Milky Way",solarSystem:null,distanceFromEarthKm:6803e13,radiusKm:45e12,colorHex:14191450,orbit:null,environment:{surfaceTempC:NaN,atmosphericPressureAtm:0,surfaceGravityG:0,radiationIndex:6,hasLiquidWater:!1,isGasGiant:!1,composition:{Hydrogen:90,Dust:10}},description:"Towering gas and cosmic dust pillars where new infant stars are carved out of interstellar clouds.",tags:["nebula","pillars of creation","star nursery"]},{id:"orion-nebula",name:"Orion Nebula (M42)",type:"nebula",scaleTier:2,location:"Orion",galaxy:"Milky Way",solarSystem:null,distanceFromEarthKm:129e14,radiusKm:12e12,colorHex:16751313,orbit:null,environment:{surfaceTempC:NaN,atmosphericPressureAtm:0,surfaceGravityG:0,radiationIndex:6,hasLiquidWater:!1,isGasGiant:!1,composition:{Hydrogen:92,Dust:8}},description:"A brilliant, luminous stellar nursery visible to the naked eye as the middle star in Orion's sword.",tags:["nebula","star nursery","orion"]},{id:"carina-nebula",name:"Carina Nebula (NGC 3372)",type:"nebula",scaleTier:2,location:"Carina",galaxy:"Milky Way",solarSystem:null,distanceFromEarthKm:804e14,radiusKm:28e13,colorHex:16737945,orbit:null,environment:{surfaceTempC:NaN,atmosphericPressureAtm:0,surfaceGravityG:0,radiationIndex:7,hasLiquidWater:!1,isGasGiant:!1,composition:{Hydrogen:88,Dust:12}},description:"A colossal, bright diffuse nebula housing the unstable hypergiant star system Eta Carinae and the Mystic Mountain.",tags:["nebula","starburst","eta carinae"]},{id:"crab-nebula",name:"Crab Nebula (Messier 1)",type:"nebula",scaleTier:2,location:"Taurus",galaxy:"Milky Way",solarSystem:null,distanceFromEarthKm:615e14,radiusKm:52e12,colorHex:5099745,orbit:null,environment:{surfaceTempC:NaN,atmosphericPressureAtm:0,surfaceGravityG:0,radiationIndex:8,hasLiquidWater:!1,isGasGiant:!1,composition:{IonizedGas:90,SynchrotronPlasma:10}},description:"The glowing expanding debris shell of a supernova witnessed by Earth astronomers in the year 1054 CE.",tags:["nebula","supernova remnant","messier 1"]},{id:"horsehead-nebula",name:"Horsehead Nebula (Barnard 33)",type:"nebula",scaleTier:2,location:"Orion",galaxy:"Milky Way",solarSystem:null,distanceFromEarthKm:13e15,radiusKm:16e12,colorHex:9124410,orbit:null,environment:{surfaceTempC:NaN,atmosphericPressureAtm:0,surfaceGravityG:0,radiationIndex:5,hasLiquidWater:!1,isGasGiant:!1,composition:{DarkDust:70,MolecularHydrogen:30}},description:"A famous dark absorption nebula silhouetted majestically against glowing red ionized hydrogen gas.",tags:["nebula","dark nebula","horsehead"]},{id:"ring-nebula",name:"Ring Nebula (Messier 57)",type:"nebula",scaleTier:2,location:"Lyra",galaxy:"Milky Way",solarSystem:null,distanceFromEarthKm:243e14,radiusKm:95e11,colorHex:2541274,orbit:null,environment:{surfaceTempC:NaN,atmosphericPressureAtm:0,surfaceGravityG:0,radiationIndex:6,hasLiquidWater:!1,isGasGiant:!1,composition:{OxygenIII:40,NitrogenII:30,Hydrogen:30}},description:"A glowing planetary nebula smoke-ring shed by a dying central white dwarf star.",tags:["nebula","planetary nebula","white dwarf"]},{id:"helix-nebula",name:"Helix Nebula (The Eye of God / NGC 7293)",type:"nebula",scaleTier:2,location:"Aquarius",galaxy:"Milky Way",solarSystem:null,distanceFromEarthKm:619e13,radiusKm:14e12,colorHex:58879,orbit:null,environment:{surfaceTempC:NaN,atmosphericPressureAtm:0,surfaceGravityG:0,radiationIndex:5,hasLiquidWater:!1,isGasGiant:!1,composition:{Oxygen:45,Hydrogen:45,Nitrogen:10}},description:"One of the closest and most vivid planetary nebulae to Earth, resembling a giant cosmic eye.",tags:["nebula","eye of god","planetary nebula"]},{id:"tarantula-nebula",name:"Tarantula Nebula (30 Doradus)",type:"nebula",scaleTier:2,location:"Large Magellanic Cloud",galaxy:"Large Magellanic Cloud",solarSystem:null,distanceFromEarthKm:154e16,radiusKm:95e13,colorHex:16728193,orbit:null,environment:{surfaceTempC:NaN,atmosphericPressureAtm:0,surfaceGravityG:0,radiationIndex:8,hasLiquidWater:!1,isGasGiant:!1,composition:{Hydrogen:85,Helium:12,HeavyMetals:3}},description:"The most luminous and active starburst nursery region in the entire Local Group of galaxies.",tags:["nebula","starburst","lmc"]},{id:"milky-way",name:"The Milky Way",type:"galaxy",scaleTier:3,location:"Local Group",galaxy:"Milky Way",solarSystem:null,distanceFromEarthKm:0,radiusKm:473e15,colorHex:14273023,orbit:null,environment:{surfaceTempC:NaN,atmosphericPressureAtm:0,surfaceGravityG:0,radiationIndex:0,hasLiquidWater:!1,isGasGiant:!1,composition:{Trace:100}},description:"Our home barred spiral galaxy — 100 to 400 billion stars revolving around Sagittarius A*.",tags:["galaxy","home galaxy","spiral"]},{id:"andromeda",name:"Andromeda Galaxy (M31)",type:"galaxy",scaleTier:3,location:"Local Group",galaxy:"Local Group",solarSystem:null,distanceFromEarthKm:2365e16,radiusKm:11e17,colorHex:12375295,orbit:null,environment:{surfaceTempC:NaN,atmosphericPressureAtm:0,surfaceGravityG:0,radiationIndex:0,hasLiquidWater:!1,isGasGiant:!1,composition:{Trace:100}},description:"Our majestic neighboring spiral galaxy spanning one trillion stars, on collision course with the Milky Way in 4.5B years.",tags:["galaxy","local group","spiral"]},{id:"triangulum",name:"Triangulum Galaxy (M33)",type:"galaxy",scaleTier:3,location:"Local Group",galaxy:"Local Group",solarSystem:null,distanceFromEarthKm:2727e16,radiusKm:3e17,colorHex:13231103,orbit:null,environment:{surfaceTempC:NaN,atmosphericPressureAtm:0,surfaceGravityG:0,radiationIndex:0,hasLiquidWater:!1,isGasGiant:!1,composition:{Trace:100}},description:"The third-largest galaxy in our Local Group — a rich, pinwheel-like starburst spiral.",tags:["galaxy","local group","pinwheel"]},{id:"large-magellanic-cloud",name:"Large Magellanic Cloud (LMC)",type:"galaxy",scaleTier:3,location:"Milky Way Satellite",galaxy:"Local Group",solarSystem:null,distanceFromEarthKm:154e16,radiusKm:14e16,colorHex:16755601,orbit:null,environment:{surfaceTempC:NaN,atmosphericPressureAtm:0,surfaceGravityG:0,radiationIndex:0,hasLiquidWater:!1,isGasGiant:!1,composition:{Trace:100}},description:"A disrupted dwarf satellite galaxy orbiting the Milky Way, ablaze with active starburst regions.",tags:["galaxy","satellite galaxy","dwarf galaxy"]},{id:"small-magellanic-cloud",name:"Small Magellanic Cloud (SMC)",type:"galaxy",scaleTier:3,location:"Milky Way Satellite",galaxy:"Local Group",solarSystem:null,distanceFromEarthKm:193e16,radiusKm:7e16,colorHex:16764032,orbit:null,environment:{surfaceTempC:NaN,atmosphericPressureAtm:0,surfaceGravityG:0,radiationIndex:0,hasLiquidWater:!1,isGasGiant:!1,composition:{Trace:100}},description:"A dwarf galaxy companion to the LMC containing several hundred million stars.",tags:["galaxy","satellite galaxy","dwarf galaxy"]},{id:"sombrero-galaxy",name:"Sombrero Galaxy (Messier 104)",type:"galaxy",scaleTier:3,location:"Virgo / Corvus",galaxy:"Virgo Cluster",solarSystem:null,distanceFromEarthKm:277e18,radiusKm:48e16,colorHex:16769202,orbit:null,environment:{surfaceTempC:NaN,atmosphericPressureAtm:0,surfaceGravityG:0,radiationIndex:0,hasLiquidWater:!1,isGasGiant:!1,composition:{Trace:100}},description:"An unbarred spiral galaxy featuring an exceptionally bright bulbous core and a prominent dark dust absorption rim.",tags:["galaxy","sombrero","messier 104"]},{id:"whirlpool-galaxy",name:"Whirlpool Galaxy (Messier 51a)",type:"galaxy",scaleTier:3,location:"Canes Venatici",galaxy:"M51 Group",solarSystem:null,distanceFromEarthKm:218e18,radiusKm:36e16,colorHex:9489145,orbit:null,environment:{surfaceTempC:NaN,atmosphericPressureAtm:0,surfaceGravityG:0,radiationIndex:0,hasLiquidWater:!1,isGasGiant:!1,composition:{Trace:100}},description:"A classic grand-design spiral galaxy actively interacting and merging with its companion galaxy NGC 5195.",tags:["galaxy","grand design","spiral","messier 51"]},{id:"messier-87",name:"Messier 87 (Virgo A / M87*)",type:"galaxy",scaleTier:3,location:"Virgo Cluster",galaxy:"Virgo Cluster",solarSystem:null,distanceFromEarthKm:506e18,radiusKm:12e17,colorHex:16764032,orbit:null,environment:{surfaceTempC:NaN,atmosphericPressureAtm:0,surfaceGravityG:0,radiationIndex:0,hasLiquidWater:!1,isGasGiant:!1,composition:{Trace:100}},description:"A giant elliptical galaxy hosting the historic Event Horizon Telescope-imaged 6.5-billion-solar-mass black hole and a 5,000-ly relativistic plasma jet.",tags:["galaxy","elliptical","m87","supermassive black hole"]},{id:"centaurus-a",name:"Centaurus A (NGC 5128)",type:"galaxy",scaleTier:3,location:"Centaurus",galaxy:"Centaurus A Group",solarSystem:null,distanceFromEarthKm:123e18,radiusKm:6e17,colorHex:13538264,orbit:null,environment:{surfaceTempC:NaN,atmosphericPressureAtm:0,surfaceGravityG:0,radiationIndex:0,hasLiquidWater:!1,isGasGiant:!1,composition:{Trace:100}},description:"A dramatic active radio galaxy crossed by a dense warped dust lane and shooting massive plasma jets into intergalactic space.",tags:["galaxy","radio galaxy","active galaxy"]},{id:"hoags-object",name:"Hoag's Object",type:"galaxy",scaleTier:3,location:"Serpens Caput",galaxy:"Isolated",solarSystem:null,distanceFromEarthKm:579e19,radiusKm:57e16,colorHex:8445674,orbit:null,environment:{surfaceTempC:NaN,atmosphericPressureAtm:0,surfaceGravityG:0,radiationIndex:0,hasLiquidWater:!1,isGasGiant:!1,composition:{Trace:100}},description:"A rare, perfectly symmetrical ring galaxy with a luminous circle of young blue star clusters surrounding a golden nucleus.",tags:["galaxy","ring galaxy","exotic galaxy"]},{id:"ton-618",name:"TON 618 (Hyperluminous Quasar)",type:"blackHole",scaleTier:4,location:"Canes Venatici",galaxy:"TON 618",solarSystem:null,distanceFromEarthKm:172e21,radiusKm:195e9,colorHex:16711765,orbit:null,environment:{surfaceTempC:NaN,atmosphericPressureAtm:0,surfaceGravityG:1/0,radiationIndex:10,hasLiquidWater:!1,isGasGiant:!1,composition:{Singularity:100}},description:"An ultra-massive black hole of 66 billion solar masses powering a hyperluminous quasar that shines brighter than 140 trillion suns.",tags:["quasar","black hole","ultra-massive","brightest object"]},{id:"quasar-3c273",name:"3C 273",type:"blackHole",scaleTier:4,location:"Virgo",galaxy:"3C 273 Host",solarSystem:null,distanceFromEarthKm:231e20,radiusKm:26e8,colorHex:16766720,orbit:null,environment:{surfaceTempC:NaN,atmosphericPressureAtm:0,surfaceGravityG:1/0,radiationIndex:10,hasLiquidWater:!1,isGasGiant:!1,composition:{Singularity:100}},description:"The first quasar ever identified in 1963, powered by a billion-solar-mass central engine shooting a 200,000-light-year plasma jet.",tags:["quasar","first quasar","active galactic nucleus"]},{id:"virgo-cluster",name:"Virgo Galaxy Cluster",type:"structure",scaleTier:4,location:"Virgo Supercluster Core",galaxy:"Virgo Supercluster",solarSystem:null,distanceFromEarthKm:51e19,radiusKm:71e18,colorHex:16766287,orbit:null,environment:{surfaceTempC:NaN,atmosphericPressureAtm:0,surfaceGravityG:0,radiationIndex:0,hasLiquidWater:!1,isGasGiant:!1,composition:{Galaxies:1300,DarkMatter:80}},description:"The colossal cluster of over 1,300 galaxies forming the heart of the Local Supercluster.",tags:["galaxy cluster","structure","virgo"]},{id:"great-attractor",name:"The Great Attractor",type:"structure",scaleTier:4,location:"Zone of Avoidance (Norma Cluster)",galaxy:"Laniakea",solarSystem:null,distanceFromEarthKm:208e19,radiusKm:3e20,colorHex:16740419,orbit:null,environment:{surfaceTempC:NaN,atmosphericPressureAtm:0,surfaceGravityG:0,radiationIndex:0,hasLiquidWater:!1,isGasGiant:!1,composition:{GravitationalAnomaly:100}},description:"An immense gravitational anomaly pulling millions of galaxies across hundreds of millions of light-years toward its mysterious center.",tags:["great attractor","gravitational anomaly","structure"]},{id:"bootes-void",name:"Boötes Void (The Great Nothing)",type:"structure",scaleTier:4,location:"Boötes",galaxy:"Intergalactic Space",solarSystem:null,distanceFromEarthKm:662e19,radiusKm:156e19,colorHex:3622735,orbit:null,environment:{surfaceTempC:-270.4,atmosphericPressureAtm:0,surfaceGravityG:0,radiationIndex:0,hasLiquidWater:!1,isGasGiant:!1,composition:{NearVacuum:100}},description:"A gigantic sphere of nearly empty space 330 million light-years across containing almost no galaxies.",tags:["void","the great nothing","structure"]},{id:"laniakea",name:"Laniakea Supercluster",type:"structure",scaleTier:4,location:"Local Supercluster",galaxy:"Laniakea",solarSystem:null,distanceFromEarthKm:0,radiusKm:47e20,colorHex:16771522,orbit:null,environment:{surfaceTempC:NaN,atmosphericPressureAtm:0,surfaceGravityG:0,radiationIndex:0,hasLiquidWater:!1,isGasGiant:!1,composition:{Trace:100}},description:'The vast supercluster of 100,000 galaxies that contains the Milky Way — "immense heaven" in Hawaiian.',tags:["supercluster","structure","laniakea"]},{id:"cosmic-web",name:"The Cosmic Web",type:"structure",scaleTier:4,location:"Observable Universe",galaxy:"Observable Universe",solarSystem:null,distanceFromEarthKm:0,radiusKm:44e22,colorHex:10475263,orbit:null,environment:{surfaceTempC:NaN,atmosphericPressureAtm:0,surfaceGravityG:0,radiationIndex:0,hasLiquidWater:!1,isGasGiant:!1,composition:{Trace:100}},description:"The immense filament-and-void scaffolding of dark matter along which every galaxy in existence is strung.",tags:["cosmic web","structure","universe scaffolding"]},{id:"cmb-horizon",name:"Cosmic Microwave Background Horizon",type:"structure",scaleTier:4,location:"Edge of the observable universe",galaxy:"Observable Universe",solarSystem:null,distanceFromEarthKm:44e22,radiusKm:0,colorHex:16766888,orbit:null,environment:{surfaceTempC:-270.4,atmosphericPressureAtm:0,surfaceGravityG:0,radiationIndex:0,hasLiquidWater:!1,isGasGiant:!1,composition:{PrimordialPhotons:100}},description:"The faint thermal afterglow of the Big Bang itself — the oldest and farthest light in the cosmos (13.8 billion years old).",tags:["cmb","big bang","structure","edge of universe"]}],ag=new Map(Tn.map(i=>[i.id,i]));function Ci(i){return ag.get(i)??null}function og(i,t=Tn){const e=String(i??"").trim().toLowerCase();if(!e)return[];const n=[],s=[];for(const r of t)r.name.toLowerCase().includes(e)?n.push(r):(r.tags.some(o=>o.toLowerCase().includes(e))||r.location.toLowerCase().includes(e))&&s.push(r);return n.sort((r,a)=>r.name.length-a.name.length),[...n,...s]}const lg=["id","name","type","scaleTier","location","galaxy","solarSystem","distanceFromEarthKm","radiusKm","colorHex","orbit","environment","description","tags"],cg=["surfaceTempC","atmosphericPressureAtm","surfaceGravityG","radiationIndex","hasLiquidWater","isGasGiant","composition"];function ug(i=Tn){const t=[],e=new Set;if(!Array.isArray(i)||i.length===0)return{valid:!1,errors:["Celestial database is empty"]};for(const n of i){const s=n?.id??"(missing id)";for(const a of lg)a in(n??{})||t.push(`${s}: missing field "${a}"`);n?.id&&(e.has(n.id)&&t.push(`${s}: duplicate id`),e.add(n.id)),(typeof n?.scaleTier!="number"||n.scaleTier<0||n.scaleTier>4)&&t.push(`${s}: scaleTier out of range [0,4]`),(typeof n?.distanceFromEarthKm!="number"||n.distanceFromEarthKm<0)&&t.push(`${s}: distanceFromEarthKm must be >= 0`),(typeof n?.radiusKm!="number"||n.radiusKm<0)&&t.push(`${s}: radiusKm must be >= 0`),n?.orbit&&(typeof n.orbit.semiMajorAxisAu!="number"&&t.push(`${s}: orbit.semiMajorAxisAu must be a number`),(typeof n.orbit.periodDays!="number"||n.orbit.periodDays<=0)&&t.push(`${s}: orbit.periodDays must be > 0`));const r=n?.environment;if(!r)t.push(`${s}: missing environment`);else for(const a of cg)a in r||t.push(`${s}: environment missing "${a}"`);Array.isArray(n?.tags)||t.push(`${s}: tags must be an array`)}return{valid:t.length===0,errors:t}}const wn=[{id:"iss",name:"International Space Station",agency:"NASA / Roscosmos / ESA / JAXA / CSA",launchYear:1998,status:"Active",purpose:"Continuously crewed orbital research laboratory",location:"Low Earth Orbit, ~400 km up",orbitsBodyId:"earth",distanceFromEarthKm:400,colorHex:14342874,description:"Humanity’s home in orbit since 2000 — a shared laboratory circling Earth every 93 minutes."},{id:"hubble",name:"Hubble Space Telescope",agency:"NASA / ESA",launchYear:1990,status:"Active",purpose:"Optical / UV / Near-IR space observatory",location:"Low Earth Orbit, ~540 km up",orbitsBodyId:"earth",distanceFromEarthKm:540,colorHex:15918786,description:"The legendary observatory that transformed our understanding of cosmic age and expansion."},{id:"jwst",name:"James Webb Space Telescope",agency:"NASA / ESA / CSA",launchYear:2021,status:"Active",purpose:"Deep infrared space observatory",location:"Sun-Earth L2 Lagrange point, ~1.5M km from Earth",orbitsBodyId:null,distanceFromEarthKm:15e5,colorHex:16373644,description:"Humanity's golden-mirrored infrared eye peering back to the very first galaxies after the Big Bang."},{id:"parker-solar-probe",name:"Parker Solar Probe",agency:"NASA",launchYear:2018,status:"Active",purpose:"Solar corona in-situ exploration",location:"Inner Solar System / Solar Corona",orbitsBodyId:"sun",distanceFromEarthKm:13e7,colorHex:16755268,description:"The fastest human-made craft ever built (700,000 km/h), repeatedly 'touching' the Sun's blistering corona."},{id:"voyager-1",name:"Voyager 1",agency:"NASA",launchYear:1977,status:"Interstellar",purpose:"Outer planet flybys, now interstellar exploration",location:"Interstellar space, beyond the heliopause",orbitsBodyId:null,distanceFromEarthKm:24e9,colorHex:12109008,description:"Humanity’s farthest-flung emissary, carrying the Golden Record beyond our Sun’s protective bubble."},{id:"voyager-2",name:"Voyager 2",agency:"NASA",launchYear:1977,status:"Interstellar",purpose:"Grand Tour of Jupiter, Saturn, Uranus, and Neptune",location:"Interstellar space, southern celestial hemisphere",orbitsBodyId:null,distanceFromEarthKm:2e10,colorHex:12109008,description:"The only spacecraft to date to have visited all four outer gas and ice giant worlds."},{id:"new-horizons",name:"New Horizons",agency:"NASA",launchYear:2006,status:"Active",purpose:"Pluto system and Kuiper Belt reconnaissance",location:"Kuiper Belt, beyond Pluto and Arrokoth",orbitsBodyId:null,distanceFromEarthKm:88e8,colorHex:14141608,description:"The intrepid probe that unveiled the high-resolution glaciers, mountains, and heart of Pluto in 2015."},{id:"cassini-huygens",name:"Cassini-Huygens",agency:"NASA / ESA / ASI",launchYear:1997,status:"Deorbited",purpose:"Saturn system orbital exploration and Titan landing",location:"Atmosphere of Saturn (Grand Finale dive)",orbitsBodyId:"saturn",distanceFromEarthKm:1275e6,colorHex:13938487,description:"Explored Saturn's rings, dropped the Huygens lander on Titan, and found Enceladus's cryovolcanic geysers."},{id:"juno",name:"Juno",agency:"NASA",launchYear:2011,status:"Active",purpose:"Jupiter polar orbit and interior structure mapping",location:"Polar orbit around Jupiter",orbitsBodyId:"jupiter",distanceFromEarthKm:6287e5,colorHex:14719829,description:"Solar-powered spacecraft peeling back the deep cloud layers, storms, and magnetic dynamos of Jupiter."},{id:"kepler-telescope",name:"Kepler Space Telescope",agency:"NASA",launchYear:2009,status:"Inactive",purpose:"Exoplanet transit discovery mission",location:"Earth-trailing heliocentric orbit",orbitsBodyId:null,distanceFromEarthKm:15e7,colorHex:9489145,description:"The prolific planet-hunter that discovered over 2,600 verified alien worlds across our galaxy."},{id:"chandra",name:"Chandra X-ray Observatory",agency:"NASA",launchYear:1999,status:"Active",purpose:"High-resolution X-ray astronomical imaging",location:"High Earth Orbit",orbitsBodyId:"earth",distanceFromEarthKm:14e4,colorHex:11766015,description:"Capturing high-energy X-rays from exploding stars, accretion disks, and supermassive black holes."},{id:"spitzer",name:"Spitzer Space Telescope",agency:"NASA",launchYear:2003,status:"Inactive",purpose:"Infrared space astronomy",location:"Earth-trailing heliocentric orbit",orbitsBodyId:null,distanceFromEarthKm:26e7,colorHex:16747136,description:"Unveiled the infrared universe, discovering planetary systems and imaging deep star-forming nurseries."},{id:"pioneer-10",name:"Pioneer 10",agency:"NASA",launchYear:1972,status:"Inactive",purpose:"First mission to traverse the asteroid belt and visit Jupiter",location:"Interstellar trajectory toward Aldebaran",orbitsBodyId:null,distanceFromEarthKm:195e8,colorHex:12962537,description:"The trailblazer carrying the iconic Pioneer plaque, bound toward the star Aldebaran over millions of years."},{id:"rosetta",name:"Rosetta & Philae",agency:"ESA",launchYear:2004,status:"Deorbited",purpose:"First comet orbital rendezvous and soft landing",location:"Surface of Comet 67P/Churyumov–Gerasimenko",orbitsBodyId:"comet-67p",distanceFromEarthKm:58e7,colorHex:8440772,description:"Achieved the historic first orbital escort and robotic surface landing on a speeding comet."},{id:"osiris-rex",name:"OSIRIS-REx / OSIRIS-APEX",agency:"NASA",launchYear:2016,status:"Active",purpose:"Asteroid Bennu sample return, en route to Apophis",location:"Interplanetary trajectory toward asteroid Apophis",orbitsBodyId:null,distanceFromEarthKm:32e7,colorHex:16772696,description:"Successfully delivered pristine carbonaceous sample material from asteroid Bennu back to Earth in 2023."},{id:"hayabusa2",name:"Hayabusa2",agency:"JAXA",launchYear:2014,status:"Active",purpose:"Asteroid Ryugu sample return, extended mission",location:"Interplanetary trajectory",orbitsBodyId:null,distanceFromEarthKm:28e7,colorHex:16740419,description:"Fired kinetic impactors and returned pristine organic and water-bearing fragments from asteroid Ryugu."},{id:"chandrayaan-3",name:"Chandrayaan-3 (Vikram & Pragyan)",agency:"ISRO",launchYear:2023,status:"Inactive",purpose:"Lunar south polar soft landing and rover exploration",location:"Lunar South Pole (Shiv Shakti Point)",orbitsBodyId:"moon",distanceFromEarthKm:384400,colorHex:16750899,description:"Humanity's first successful soft landing at the Moon’s southern polar highland region."},{id:"tianwen-1",name:"Tianwen-1 & Zhurong",agency:"CNSA",launchYear:2020,status:"Active",purpose:"Mars orbiter and Utopia Planitia rover",location:"Mars Orbit & Utopia Planitia",orbitsBodyId:"mars",distanceFromEarthKm:783e5,colorHex:15684432,description:"China's comprehensive maiden Mars mission, deploying an orbiter, lander, and subterranean radar rover."},{id:"solar-orbiter",name:"Solar Orbiter",agency:"ESA / NASA",launchYear:2020,status:"Active",purpose:"High-latitude imagery of the Sun's polar regions",location:"Inner heliocentric elliptical orbit",orbitsBodyId:"sun",distanceFromEarthKm:95e6,colorHex:16758605,description:"Capturing the closest-ever photographs of the Sun and unprecedented views of its uncharted north and south poles."},{id:"psyche-probe",name:"Psyche",agency:"NASA",launchYear:2023,status:"Active",purpose:"Exploration of metallic asteroid 16 Psyche",location:"En route to the Main Asteroid Belt (2029 arrival)",orbitsBodyId:null,distanceFromEarthKm:42e7,colorHex:9479342,description:"Equipped with Hall-effect thrusters to explore a unique world made largely of exposed nickel-iron metallic core material."}],hg=new Map(wn.map(i=>[i.id,i]));function Qs(i){return hg.get(i)??null}function dg(i,t=wn){const e=String(i??"").trim().toLowerCase();if(!e)return[];const n=[],s=[];for(const r of t)r.name.toLowerCase().includes(e)?n.push(r):(r.agency.toLowerCase().includes(e)||r.location.toLowerCase().includes(e)||r.purpose.toLowerCase().includes(e)||r.status.toLowerCase().includes(e))&&s.push(r);return n.sort((r,a)=>r.name.length-a.name.length),[...n,...s]}const fg=["id","name","agency","launchYear","status","purpose","location","orbitsBodyId","distanceFromEarthKm","colorHex","description"],pg=new Set(["Active","Inactive","Deorbited","Interstellar"]);function mg(i=wn){const t=[],e=new Set;if(!Array.isArray(i)||i.length===0)return{valid:!1,errors:["Satellite database is empty"]};const n=new Date().getFullYear();for(const s of i){const r=s?.id??"(missing id)";for(const a of fg)a in(s??{})||t.push(`${r}: missing field "${a}"`);s?.id&&(e.has(s.id)&&t.push(`${r}: duplicate id`),e.add(s.id)),s?.status&&!pg.has(s.status)&&t.push(`${r}: invalid status "${s.status}"`),(typeof s?.launchYear!="number"||s.launchYear<1957||s.launchYear>n+2)&&t.push(`${r}: launchYear out of range [1957, ${n+2}]`),(typeof s?.distanceFromEarthKm!="number"||s.distanceFromEarthKm<0)&&t.push(`${r}: distanceFromEarthKm must be >= 0`)}return{valid:t.length===0,errors:t}}function gg({color:i=7189503,intensity:t=1}={}){return new we({uniforms:{uColor:{value:new Ct(i)},uIntensity:{value:t}},vertexShader:`
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
    `,transparent:!0,depthWrite:!1,side:Re,blending:ve})}function _g({color:i=16765562}={}){return new we({uniforms:{uColor:{value:new Ct(i)},uTime:{value:0}},vertexShader:`
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
    `})}function vg(){return new we({uniforms:{uTime:{value:0}},vertexShader:`
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
    `})}function xg(){return new we({uniforms:{uTime:{value:0}},vertexShader:`
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
        float angle = atan(centered.y, centered.x) + uTime * 0.6;
        float swirl = sin(angle * 6.0 + radius * 10.0) * 0.5 + 0.5;
        float ring = smoothstep(0.35, 0.5, radius) * (1.0 - smoothstep(0.9, 1.0, radius));
        vec3 color = mix(vec3(1.0, 0.55, 0.2), vec3(1.0, 0.85, 0.6), swirl);
        gl_FragColor = vec4(color, ring * (0.55 + swirl * 0.3));
      }
    `,transparent:!0,side:Ue,depthWrite:!1,blending:ve})}function Ys(i,t){const e=Math.sin(i*127.1+t*311.7)*43758.5453123;return e-Math.floor(e)}function lr(i,t){const e=Math.floor(i),n=Math.floor(t),s=i-e,r=t-n,a=s*s*(3-2*s),o=r*r*(3-2*r),l=Ys(e,n),c=Ys(e+1,n),h=Ys(e,n+1),u=Ys(e+1,n+1);return l+(c-l)*a+(h-l)*o+(l-c-h+u)*a*o}function re(i,t,e=4){let n=0,s=.5,r=1;for(let a=0;a<e;a++)n+=s*lr(i*r,t*r),r*=2,s*=.5;return n}function yg(i,t=512){const e=document.createElement("canvas");e.width=t,e.height=t;const n=e.getContext("2d");if(!n)return new Bn(e);switch(i){case"earth":bg(n,t);break;case"jupiter":Eg(n,t);break;case"saturn":Tg(n,t);break;case"mars":wg(n,t);break;case"moon":case"phobos":case"deimos":case"ceres":case"vesta":Ag(n,t);break;case"venus":Cg(n,t);break;case"mercury":Rg(n,t);break;case"europa":Pg(n,t);break;case"titan":Lg(n,t);break;case"uranus":Ig(n,t);break;case"neptune":Dg(n,t);break;case"io":Og(n,t);break;case"enceladus":Fg(n,t);break;case"pluto":Gg(n,t);break;case"charon":Bg(n,t);break;case"55-cancri-e":Hg(n,t);break;case"hd-189733-b":kg(n,t);break;case"wasp-76b":zg(n,t);break;case"trappist-1e":case"trappist-1f":case"kepler-452b":case"kepler-22b":case"kepler-186f":case"k2-18b":case"proxima-b":Vg(n,t,i);break;case"sedna":case"makemake":Wg(n,t);break;case"haumea":case"eris":qg(n,t);break;case"ganymede":case"callisto":case"iapetus":case"mimas":case"miranda":case"triton":Xg(n,t,i);break;default:Ng(n,t);break}const s=new Bn(e);return s.colorSpace=ge,s}function Mg(i=512){const t=document.createElement("canvas");t.width=i,t.height=i;const e=t.getContext("2d");if(!e)return new Bn(t);e.clearRect(0,0,i,i);const n=e.createImageData(i,i),s=n.data;for(let a=0;a<i;a++){const o=(a/i-.5)*Math.PI;for(let l=0;l<i;l++){const c=(a*i+l)*4,h=l/i*8,u=a/i*4,d=Math.sin(o*4)*1.2,p=re(h+d,u,5),g=Math.max(0,(p-.46)*2.8),_=Math.min(Math.floor(g*220),220);s[c]=255,s[c+1]=255,s[c+2]=255,s[c+3]=_}}e.putImageData(n,0,0);const r=new Bn(t);return r.colorSpace=ge,r}function Sg(i=512){const t=document.createElement("canvas");t.width=i,t.height=16;const e=t.getContext("2d");if(!e)return new Bn(t);const n=e.createLinearGradient(0,0,i,0);n.addColorStop(0,"rgba(140, 120, 95, 0.0)"),n.addColorStop(.08,"rgba(160, 135, 105, 0.35)"),n.addColorStop(.22,"rgba(180, 150, 115, 0.45)"),n.addColorStop(.24,"rgba(230, 205, 160, 0.95)"),n.addColorStop(.38,"rgba(245, 225, 185, 0.98)"),n.addColorStop(.54,"rgba(215, 190, 145, 0.90)"),n.addColorStop(.57,"rgba(30, 25, 20, 0.05)"),n.addColorStop(.63,"rgba(40, 32, 25, 0.08)"),n.addColorStop(.66,"rgba(210, 185, 145, 0.85)"),n.addColorStop(.78,"rgba(225, 200, 160, 0.80)"),n.addColorStop(.88,"rgba(195, 170, 130, 0.70)"),n.addColorStop(.92,"rgba(60, 50, 40, 0.1)"),n.addColorStop(.96,"rgba(170, 145, 115, 0.4)"),n.addColorStop(1,"rgba(120, 100, 80, 0.0)"),e.fillStyle=n,e.fillRect(0,0,i,16);const s=new Bn(t);return s.colorSpace=ge,s}function bg(i,t){const e=i.createImageData(t,t),n=e.data;for(let s=0;s<t;s++){const r=s/t,a=Math.min(r,1-r);for(let o=0;o<t;o++){const l=(s*t+o)*4,c=o/t*5.5,h=s/t*2.8,u=re(c,h,6);if(a<.12+u*.06){n[l]=238,n[l+1]=245,n[l+2]=255,n[l+3]=255;continue}if(u>.48){const d=(u-.48)/.52;d<.35?(n[l]=Math.floor(34+d*40),n[l+1]=Math.floor(125+d*30),n[l+2]=Math.floor(45+d*20)):d<.7?(n[l]=Math.floor(168+d*40),n[l+1]=Math.floor(140+d*20),n[l+2]=Math.floor(75+d*15)):(n[l]=Math.floor(175+d*60),n[l+1]=Math.floor(170+d*65),n[l+2]=Math.floor(165+d*70))}else{const d=(.48-u)/.48;n[l]=Math.floor(12+(1-d)*28),n[l+1]=Math.floor(45+(1-d)*65),n[l+2]=Math.floor(125+(1-d)*90)}n[l+3]=255}}i.putImageData(e,0,0)}function Eg(i,t){const e=i.createImageData(t,t),n=e.data,s=.62,r=.65,a=.11,o=.055;for(let l=0;l<t;l++){const c=l/t,h=re(c*24,.5,3)*.08,u=Math.sin((c+h)*Math.PI*14);for(let d=0;d<t;d++){const p=d/t,g=(l*t+d)*4,_=re(p*8,c*12,4)*.25;let m,f,x;u+_>.1?(m=Math.floor(228+_*40),f=Math.floor(198+_*30),x=Math.floor(155+_*20)):(m=Math.floor(180-_*50),f=Math.floor(115-_*35),x=Math.floor(70-_*25));const v=(p-s)/a,y=(c-r)/o,R=v*v+y*y;if(R<1){const w=1-Math.sqrt(R),A=Math.sin(Math.atan2(y,v)*3+Math.sqrt(R)*10)*.2;m=Math.floor(m*(1-w)+(215+A*30)*w),f=Math.floor(f*(1-w)+(80+A*20)*w),x=Math.floor(x*(1-w)+(50+A*15)*w)}n[g]=Math.min(255,Math.max(0,m)),n[g+1]=Math.min(255,Math.max(0,f)),n[g+2]=Math.min(255,Math.max(0,x)),n[g+3]=255}}i.putImageData(e,0,0)}function Tg(i,t){const e=i.createImageData(t,t),n=e.data;for(let s=0;s<t;s++){const r=s/t,a=Math.sin(r*Math.PI*18)*.15,o=Math.sin(r*Math.PI*45)*.08;for(let l=0;l<t;l++){const c=(s*t+l)*4,h=l/t,u=re(h*4,r*8,3)*.06,d=a+o+u,p=Math.floor(234+d*30),g=Math.floor(212+d*25),_=Math.floor(168+d*20);n[c]=Math.min(255,Math.max(0,p)),n[c+1]=Math.min(255,Math.max(0,g)),n[c+2]=Math.min(255,Math.max(0,_)),n[c+3]=255}}i.putImageData(e,0,0)}function wg(i,t){const e=i.createImageData(t,t),n=e.data;for(let s=0;s<t;s++){const r=s/t,a=Math.min(r,1-r);for(let o=0;o<t;o++){const l=(s*t+o)*4,c=o/t*6,h=s/t*3,u=re(c,h,5);if(a<.09+u*.03){n[l]=245,n[l+1]=245,n[l+2]=250,n[l+3]=255;continue}if(u<.42){const d=(.42-u)/.42;n[l]=Math.floor(115-d*30),n[l+1]=Math.floor(65-d*20),n[l+2]=Math.floor(45-d*15)}else{const d=(u-.42)/.58;n[l]=Math.floor(198+d*35),n[l+1]=Math.floor(95+d*25),n[l+2]=Math.floor(48+d*15)}n[l+3]=255}}i.putImageData(e,0,0)}function Ag(i,t){const e=i.createImageData(t,t),n=e.data;for(let s=0;s<t;s++)for(let r=0;r<t;r++){const a=(s*t+r)*4,o=r/t*8,l=s/t*4,c=re(o*.5,l*.5,4),h=re(o*3,l*3,4);let u=150+c*55+h*25;c<.38&&(u*=.65);const d=Math.min(255,Math.max(30,Math.floor(u)));n[a]=d,n[a+1]=Math.floor(d*.96),n[a+2]=Math.floor(d*.92),n[a+3]=255}i.putImageData(e,0,0)}function Cg(i,t){const e=i.createImageData(t,t),n=e.data;for(let s=0;s<t;s++){const r=s/t;for(let a=0;a<t;a++){const o=a/t,l=(s*t+a)*4,c=re(o*6+Math.sin(r*8)*1.5,r*4,5),h=Math.floor(225+c*28),u=Math.floor(190+c*25),d=Math.floor(125+c*20);n[l]=Math.min(255,h),n[l+1]=Math.min(255,u),n[l+2]=Math.min(255,d),n[l+3]=255}}i.putImageData(e,0,0)}function Rg(i,t){const e=i.createImageData(t,t),n=e.data;for(let s=0;s<t;s++)for(let r=0;r<t;r++){const a=(s*t+r)*4,o=re(r/t*10,s/t*5,5),l=Math.floor(120+o*70);n[a]=l,n[a+1]=Math.floor(l*.94),n[a+2]=Math.floor(l*.88),n[a+3]=255}i.putImageData(e,0,0)}function Pg(i,t){const e=i.createImageData(t,t),n=e.data;for(let s=0;s<t;s++)for(let r=0;r<t;r++){const a=(s*t+r)*4,o=r/t*8,l=s/t*4,c=re(o,l,4),h=Math.abs(Math.sin(o*4+l*6+c*3));let u=Math.floor(230+c*25),d=Math.floor(225+c*25),p=Math.floor(215+c*25);if(h<.18){const g=(.18-h)/.18;u=Math.floor(u*(1-g)+165*g),d=Math.floor(d*(1-g)+95*g),p=Math.floor(p*(1-g)+65*g)}n[a]=u,n[a+1]=d,n[a+2]=p,n[a+3]=255}i.putImageData(e,0,0)}function Lg(i,t){const e=i.createImageData(t,t),n=e.data;for(let s=0;s<t;s++){const r=s/t;for(let a=0;a<t;a++){const o=(s*t+a)*4,l=re(a/t*3,r*3,3),c=Math.floor(225+l*25),h=Math.floor(145+l*20),u=Math.floor(65+l*15);n[o]=c,n[o+1]=h,n[o+2]=u,n[o+3]=255}}i.putImageData(e,0,0)}function Ig(i,t){const e=i.createImageData(t,t),n=e.data;for(let s=0;s<t;s++){const r=s/t;for(let a=0;a<t;a++){const o=(s*t+a)*4,l=Math.sin(r*Math.PI*8)*.05;n[o]=Math.floor(175+l*30),n[o+1]=Math.floor(225+l*20),n[o+2]=Math.floor(235+l*20),n[o+3]=255}}i.putImageData(e,0,0)}function Dg(i,t){const e=i.createImageData(t,t),n=e.data;for(let s=0;s<t;s++){const r=s/t;for(let a=0;a<t;a++){const o=(s*t+a)*4,l=re(a/t*6,r*8,4);let c=Math.floor(45+l*25),h=Math.floor(95+l*35),u=Math.floor(215+l*35);if(l>.72){const d=(l-.72)/.28;c=Math.floor(c*(1-d)+240*d),h=Math.floor(h*(1-d)+245*d),u=Math.floor(u*(1-d)+255*d)}n[o]=c,n[o+1]=h,n[o+2]=u,n[o+3]=255}}i.putImageData(e,0,0)}function Ng(i,t){const e=i.createImageData(t,t),n=e.data;for(let s=0;s<t;s++)for(let r=0;r<t;r++){const a=(s*t+r)*4,o=re(r/t*6,s/t*6,4),l=Math.floor(140+o*60);n[a]=l,n[a+1]=Math.floor(l*.9),n[a+2]=Math.floor(l*.85),n[a+3]=255}i.putImageData(e,0,0)}function Ug(i=512){const t=document.createElement("canvas");t.width=i,t.height=i;const e=t.getContext("2d");if(!e)return new Bn(t);const n=e.createImageData(i,i),s=n.data;for(let r=0;r<i;r++){const a=(r/i-.5)*Math.PI;for(let o=0;o<i;o++){const l=(r*i+o)*4,c=o/i*Math.PI*2;if(re(Math.cos(c)*2.2+5,Math.sin(c)*2.2+Math.sin(a)*2.5,4)>.48&&Math.abs(a)<1.25){const d=lr(o/i*32,r/i*32),p=lr(o/i*64,r/i*64);if(d>.65&&p>.55){const g=Math.floor((d-.65)*650);s[l]=Math.min(g+50,255),s[l+1]=Math.min(g*.8,210),s[l+2]=Math.min(g*.4,120),s[l+3]=255;continue}}s[l]=0,s[l+1]=0,s[l+2]=0,s[l+3]=255}}return e.putImageData(n,0,0),new Bn(t)}function Og(i,t){const e=i.createImageData(t,t),n=e.data;for(let s=0;s<t;s++)for(let r=0;r<t;r++){const a=(s*t+r)*4,o=re(r/t*8,s/t*8,4),l=lr(r/t*16,s/t*16);l>.78?(n[a]=40,n[a+1]=20,n[a+2]=10):l>.65?(n[a]=220,n[a+1]=80,n[a+2]=20):(n[a]=Math.floor(210+o*45),n[a+1]=Math.floor(180+o*40),n[a+2]=Math.floor(30+o*30)),n[a+3]=255}i.putImageData(e,0,0)}function Fg(i,t){const e=i.createImageData(t,t),n=e.data;for(let s=0;s<t;s++){const r=s>t*.75;for(let a=0;a<t;a++){const o=(s*t+a)*4,l=re(a/t*10,s/t*10,4);let c=Math.floor(240+l*15),h=Math.floor(245+l*10),u=255;if(r){const d=Math.sin(a/t*Math.PI*8+l*3);Math.abs(d)<.15&&(c=70,h=160,u=230)}n[o]=c,n[o+1]=h,n[o+2]=u,n[o+3]=255}}i.putImageData(e,0,0)}function Gg(i,t){const e=i.createImageData(t,t),n=e.data;for(let s=0;s<t;s++){const r=s/t*2-1;for(let a=0;a<t;a++){const o=(s*t+a)*4,l=a/t*2-1,c=re(a/t*6,s/t*6,4),h=l-.1,u=r+.1;Math.hypot(h,u)<.38&&(Math.abs(h)<.35||u<.2)&&c>.35?(n[o]=240,n[o+1]=230,n[o+2]=220):(n[o]=Math.floor(160+c*50),n[o+1]=Math.floor(110+c*40),n[o+2]=Math.floor(80+c*30)),n[o+3]=255}}i.putImageData(e,0,0)}function Bg(i,t){const e=i.createImageData(t,t),n=e.data;for(let s=0;s<t;s++){const r=s<t*.28;for(let a=0;a<t;a++){const o=(s*t+a)*4,l=re(a/t*6,s/t*6,4);if(r)n[o]=160,n[o+1]=80,n[o+2]=60;else{const c=Math.floor(130+l*50);n[o]=c,n[o+1]=Math.floor(c*.95),n[o+2]=Math.floor(c*.92)}n[o+3]=255}}i.putImageData(e,0,0)}function Hg(i,t){const e=i.createImageData(t,t),n=e.data;for(let s=0;s<t;s++)for(let r=0;r<t;r++){const a=(s*t+r)*4,o=re(r/t*12,s/t*12,5);if(o>.58)n[a]=255,n[a+1]=Math.floor(80+(o-.58)*400),n[a+2]=0;else{const l=Math.floor(20+o*30);n[a]=l+15,n[a+1]=l,n[a+2]=l}n[a+3]=255}i.putImageData(e,0,0)}function kg(i,t){const e=i.createImageData(t,t),n=e.data;for(let s=0;s<t;s++)for(let r=0;r<t;r++){const a=(s*t+r)*4,o=re(r/t*8+Math.sin(s/t*10),s/t*4,4);n[a]=Math.floor(10+o*30),n[a+1]=Math.floor(60+o*80),n[a+2]=Math.floor(180+o*75),n[a+3]=255}i.putImageData(e,0,0)}function zg(i,t){const e=i.createImageData(t,t),n=e.data;for(let s=0;s<t;s++)for(let r=0;r<t;r++){const a=(s*t+r)*4,o=re(r/t*6,s/t*6,4);n[a]=Math.floor(160+o*80),n[a+1]=Math.floor(40+o*40),n[a+2]=Math.floor(20+o*20),n[a+3]=255}i.putImageData(e,0,0)}function Vg(i,t,e){const n=i.createImageData(t,t),s=n.data;for(let r=0;r<t;r++){const a=(r/t-.5)*Math.PI;for(let o=0;o<t;o++){const l=(r*t+o)*4,c=o/t*Math.PI*2,h=re(Math.cos(c)*2.5+4,Math.sin(c)*2.5+Math.sin(a)*2.5,4);h>.5?(s[l]=e.includes("kepler")?45:60,s[l+1]=140+Math.floor(h*40),s[l+2]=70):(s[l]=15,s[l+1]=70+Math.floor(h*50),s[l+2]=175+Math.floor(h*40)),s[l+3]=255}}i.putImageData(n,0,0)}function Wg(i,t){const e=i.createImageData(t,t),n=e.data;for(let s=0;s<t;s++)for(let r=0;r<t;r++){const a=(s*t+r)*4,o=re(r/t*6,s/t*6,4);n[a]=Math.floor(180+o*50),n[a+1]=Math.floor(65+o*30),n[a+2]=Math.floor(45+o*20),n[a+3]=255}i.putImageData(e,0,0)}function qg(i,t){const e=i.createImageData(t,t),n=e.data;for(let s=0;s<t;s++)for(let r=0;r<t;r++){const a=(s*t+r)*4,o=re(r/t*8,s/t*8,4),l=Math.floor(215+o*40);n[a]=l,n[a+1]=l,n[a+2]=Math.min(l+10,255),n[a+3]=255}i.putImageData(e,0,0)}function Xg(i,t,e){const n=i.createImageData(t,t),s=n.data;for(let r=0;r<t;r++)for(let a=0;a<t;a++){const o=(r*t+a)*4,l=re(a/t*8,r/t*8,4);if(e==="iapetus"&&a<t*.5)s[o]=35,s[o+1]=30,s[o+2]=25;else{const c=Math.floor(150+l*60);s[o]=c,s[o+1]=Math.floor(c*.96),s[o+2]=Math.floor(c*.94)}s[o+3]=255}i.putImageData(n,0,0)}function Kg(i,t){const e=new ne;e.name=`volumetric-nebula:${i.id}`;const n=new Ct(i.colorHex||14315734),s=new Ct(16772829),r=new Ct(i.colorHex||9662683).offsetHSL(.08,.2,-.15),a=Math.max(t*4.5,4.2),o=1800,l=new Float32Array(o*3),c=new Float32Array(o*3),h=new Float32Array(o);for(let _=0;_<o;_++){const m=Math.random(),f=a*Math.pow(m,.45),x=Math.random()*Math.PI*2,v=(Math.random()-.5)*Math.PI*.85,y=Math.sin(x*3)*.25+Math.cos(v*4)*.15,R=f*(1+y);l[_*3]=R*Math.cos(x)*Math.cos(v),l[_*3+1]=R*Math.sin(v)*.65,l[_*3+2]=R*Math.sin(x)*Math.cos(v);const w=Math.min(f/a,1),A=new Ct;w<.25?A.lerpColors(s,n,w*4):A.lerpColors(n,r,(w-.25)/.75),c[_*3]=A.r,c[_*3+1]=A.g,c[_*3+2]=A.b,h[_]=(1-w*.4)*(Math.random()*.4+.8)}const u=new oe;u.setAttribute("position",new Ae(l,3)),u.setAttribute("color",new Ae(c,3));const d=new ps({size:.85,vertexColors:!0,transparent:!0,opacity:.52,blending:ve,depthWrite:!1}),p=new ms(u,d);p.name="nebula-particles";const g=new Bi(i.colorHex||14315734,1.8,a*3.5,1.5);return g.position.set(0,0,0),e.add(p,g),e}const hn=48;function Yg(i){const t=new ne;t.name=`celestial:${i.id}`,t.userData.bodyId=i.id,t.userData.kind="celestial";const e=ri(i),s=["star","planet","dwarfPlanet","moon","blackHole"].includes(i.type)?i.type==="star"?Math.max(e*1.4,.7):Math.max(e*1.25,.25):0;switch(t.userData.visualRadius=e,t.userData.safeRadius=s,i.type){case"star":t.add($g(i));break;case"blackHole":t.add(Zg(i));break;case"nebula":t.add(Jg(i));break;case"galaxy":t.add(Qg(i));break;case"structure":t.add(t_(i));break;case"asteroidBelt":t.add(e_(i));break;default:t.add(jg(i));break}return t}function ri(i){const t=Math.max(i.radiusKm,1);return Math.max(.14,Math.log10(t)*.16)}function jg(i){const t=ri(i),e=new le(t,hn,hn),s={map:yg(i.id,512),roughness:i.environment.isGasGiant?.85:.7,metalness:i.environment.isGasGiant?0:.08};i.id==="earth"&&(s.emissiveMap=Ug(512),s.emissive=new Ct(16769194),s.emissiveIntensity=.95);const r=new pe(s),a=new rt(e,r);a.name=`surface:${i.id}`;const o=new ne;if(o.add(a),i.id==="earth"){const c=new le(t*1.025,hn,hn),h=new pe({map:Mg(512),transparent:!0,opacity:.85,depthWrite:!1,roughness:.9}),u=new rt(c,h);u.name=`clouds:${i.id}`,o.add(u)}if(i.id==="saturn"){const c=new an(t*1.35,t*2.5,64);c.rotateX(Math.PI/2);const h=new pe({map:Sg(512),transparent:!0,side:Ue,roughness:.65,metalness:.1}),u=new rt(c,h);u.name=`rings:${i.id}`,u.rotation.z=.47,u.rotation.x=.12,o.add(u)}if(i.id==="uranus"){const c=new an(t*1.35,t*1.75,48);c.rotateX(Math.PI/2);const h=new pe({color:11069183,transparent:!0,opacity:.4,side:Ue,roughness:.7}),u=new rt(c,h);u.name=`rings:${i.id}`,u.rotation.x=Math.PI/2.1,o.add(u)}if(i.id==="haumea"){a.scale.set(1.4,.9,.7);const c=new an(t*1.6,t*1.9,48);c.rotateX(Math.PI/2);const h=new pe({color:14279659,transparent:!0,opacity:.6,side:Ue,roughness:.8}),u=new rt(c,h);u.name=`rings:${i.id}`,o.add(u)}if(i.environment.atmosphericPressureAtm>.01){const c=new le(t*1.14,hn,hn),h=gg({color:i.environment.hasLiquidWater?6138111:i.id==="venus"?16768921:14727567,intensity:i.id==="venus"?1.4:1.1}),u=new rt(c,h);u.name=`atmosphere:${i.id}`,o.add(u)}return o}function $g(i){const t=Math.max(ri(i),.48),e=new le(t,hn,hn),n=_g({color:i.colorHex}),s=new rt(e,n);s.name=`star:${i.id}`,s.userData.animatedUniforms=["uTime"];const r=new le(t*1.22,32,32),a=new jt({color:16755251,transparent:!0,opacity:.35,blending:ve,side:Re}),o=new rt(r,a);o.name=`flare:${i.id}`;const l=new Bi(i.colorHex,2.8,0,1.8);l.name=`starlight:${i.id}`;const c=new ne;if(c.add(s,o,l),i.tags.includes("pulsar")||i.id.includes("pulsar")||i.tags.includes("magnetar")){const h=new Fi(t*.45,t*6,24,1,!0);h.translate(0,t*3,0);const u=new jt({color:i.colorHex,transparent:!0,opacity:.55,blending:ve,side:Ue}),d=new rt(h,u),p=new rt(h,u);p.rotation.x=Math.PI,c.add(d,p)}return c}function Zg(i){const t=Math.max(ri(i)*.55,.35),e=new le(t,hn,hn),n=new rt(e,vg());n.name=`horizon:${i.id}`,n.userData.animatedUniforms=["uTime"];const s=new an(t*1.02,t*1.12,48),r=new jt({color:16772829,transparent:!0,opacity:.85,side:Ue,blending:ve}),a=new rt(s,r);a.rotation.x=Math.PI/2.3;const o=new an(t*1.25,t*3.6,64),l=new rt(o,xg());l.name=`disk:${i.id}`,l.rotation.x=Math.PI/2.3,l.userData.animatedUniforms=["uTime"];const c=new ne;return c.add(n,a,l),c}function Jg(i){return Kg(i,ri(i))}function Qg(i){const e=new Float32Array(18e3),n=new Float32Array(6e3*3),s=new Ct(i.colorHex),r=Math.max(ri(i)*6,6);for(let p=0;p<6e3;p++){const g=p%3,_=Math.random(),m=_*Math.PI*6+g*(Math.PI*2)/3,f=_*r,x=(Math.random()-.5)*.6;e[p*3]=Math.cos(m)*f+x,e[p*3+1]=(Math.random()-.5)*.3,e[p*3+2]=Math.sin(m)*f+x;const v=.6+Math.random()*.4;n[p*3]=s.r*v,n[p*3+1]=s.g*v,n[p*3+2]=s.b*v}const a=new oe;a.setAttribute("position",new Ae(e,3)),a.setAttribute("color",new Ae(n,3));const o=new ps({size:.18,vertexColors:!0,transparent:!0,opacity:.9,blending:ve,depthWrite:!1}),l=new ms(a,o);l.name=`galaxy:${i.id}`;const c=new le(Math.max(r*.08,.3),24,24),h=new jt({color:16774102}),u=new rt(c,h);u.name=`galaxy-core:${i.id}`;const d=new ne;if(d.add(l,u),i.id==="messier-87"||i.id==="centaurus-a"){const p=new Ce(.04,.4,r*.85,16);p.translate(0,r*.42,0);const g=new jt({color:8969727,transparent:!0,opacity:.65,blending:ve}),_=new rt(p,g);_.rotation.z=.55,d.add(_)}return d}function t_(i){const t=Math.max(ri(i)*3,3),e=new gr(t,2),n=new jt({color:i.colorHex,wireframe:!0,transparent:!0,opacity:.35}),s=new rt(e,n);return s.name=`structure:${i.id}`,s}function e_(i){const e=new gr(.05,0),n=new pe({color:i.colorHex,roughness:1}),s=new o0(e,n,1500);s.name=`asteroid-belt:${i.id}`;const r=new Pe,a=6,o=8;for(let l=0;l<1500;l++){const c=Math.random()*Math.PI*2,h=a+Math.random()*(o-a);r.position.set(Math.cos(c)*h,(Math.random()-.5)*.4,Math.sin(c)*h),r.rotation.set(Math.random()*Math.PI,Math.random()*Math.PI,0);const u=.5+Math.random()*1.5;r.scale.setScalar(u),r.updateMatrix(),s.setMatrixAt(l,r.matrix)}return s.instanceMatrix.needsUpdate=!0,s}function n_(i){const t=new ne;t.name=`satellite:${i.id}`,t.userData.satelliteId=i.id,t.userData.kind="satellite";const e=new Ne(.06,.06,.12),n=new pe({color:i.colorHex,metalness:.6,roughness:.4}),s=new rt(e,n),r=new Ne(.22,.005,.08),a=new pe({color:2245802,metalness:.3,roughness:.6}),o=new rt(r,a);o.position.x=-.16;const l=new rt(r,a);l.position.x=.16;const c=new Bi(i.colorHex,.6,2,2);return t.add(s,o,l,c),t}function i_(i=4e3,t=400){const e=new Float32Array(i*3);for(let a=0;a<i;a++)e[a*3]=(Math.random()-.5)*t,e[a*3+1]=(Math.random()-.5)*t,e[a*3+2]=(Math.random()-.5)*t;const n=new oe;n.setAttribute("position",new Ae(e,3));const s=new ps({color:16774886,size:.6,sizeAttenuation:!0}),r=new ms(n,s);return r.name="background-starfield",r}function s_({semiMajorAxis:i,eccentricity:t=0,periodSeconds:e,timeSeconds:n,phaseOffset:s=0,inclinationDeg:r=0}){const a=bi(i,0),o=r_(bi(t,0),0,.95),l=bi(e,1)||1,h=(bi(n,0)/l*2*Math.PI+bi(s,0))%(2*Math.PI),u=a*Math.sqrt(1-o*o),d=h,p=a*Math.cos(d)-a*o,g=u*Math.sin(d),_=bi(r,0)*Math.PI/180,m=g*Math.sin(_),f=g*Math.cos(_);return{x:p,y:m,z:f,angle:d}}function r_(i,t,e){return Math.min(Math.max(i,t),e)}function bi(i,t){return Number.isFinite(i)?i:t}const a_=6,o_={0:0,1:0,2:55,3:170,4:340},l_=86400;function zc(i,t=0){const e=new Map(i.map(a=>[a.id,a])),n=new Map,s=new Set;function r(a){if(n.has(a))return n.get(a);const o=e.get(a);if(!o){const c={x:0,y:0,z:0};return n.set(a,c),c}if(s.has(a)){const c={x:0,y:0,z:0};return n.set(a,c),c}s.add(a);let l;if(o.orbit&&o.orbit.parentId){const c=r(o.orbit.parentId),h=s_({semiMajorAxis:Math.cbrt(Math.max(o.orbit.semiMajorAxisAu,1e-6))*a_,eccentricity:o.orbit.eccentricity??0,periodSeconds:Math.max(o.orbit.periodDays,.01)*l_,timeSeconds:t,phaseOffset:Ra(o.id)*Math.PI*2,inclinationDeg:o.orbit.inclinationDeg??0});l={x:c.x+h.x,y:c.y+h.y,z:c.z+h.z}}else o.id==="sun"?l={x:0,y:0,z:0}:l=Ca(o.id,o_[o.scaleTier]??200);return s.delete(a),n.set(a,l),l}for(const a of i)r(a.id);return n}function Vc(i,t){const e=new Map,n=t.get("earth")??{x:0,y:0,z:0};for(const s of i)if(s.orbitsBodyId&&t.has(s.orbitsBodyId)){const r=t.get(s.orbitsBodyId),a=Ca(s.id,.5);e.set(s.id,{x:r.x+a.x,y:r.y+a.y,z:r.z+a.z})}else{const r=s.distanceFromEarthKm/1495978707e-1,a=c_(6+Math.log10(1+r)*6,6,60),o=Ca(s.id,1),l=Math.hypot(o.x,o.y,o.z)||1;e.set(s.id,{x:n.x+o.x/l*a,y:n.y+o.y/l*a,z:n.z+o.z/l*a})}return e}function Ca(i,t){const e=Ra(i+"θ"),n=Ra(i+"φ"),s=e*Math.PI*2,r=Math.acos(2*n-1);return{x:t*Math.sin(r)*Math.cos(s),y:t*Math.cos(r)*.4,z:t*Math.sin(r)*Math.sin(s)}}function Ra(i){let t=0;for(let e=0;e<i.length;e++)t=t*31+i.charCodeAt(e)>>>0;return t%1e5/1e5}function c_(i,t,e){return Math.min(Math.max(i,t),e)}const u_=[{id:"ursa-major",name:"Ursa Major (Big Dipper)",color:"#6ce3ff",stars:[{name:"Dubhe",pos:[150,220,-280]},{name:"Merak",pos:[120,180,-290]},{name:"Phecda",pos:[70,170,-300]},{name:"Megrez",pos:[90,210,-290]},{name:"Alioth",pos:[50,240,-280]},{name:"Mizar",pos:[10,260,-270]},{name:"Alkaid",pos:[-35,275,-260]}],edges:[[0,1],[1,2],[2,3],[3,0],[3,4],[4,5],[5,6]]},{id:"orion",name:"Orion",color:"#ffd27a",stars:[{name:"Betelgeuse",pos:[-180,120,260]},{name:"Bellatrix",pos:[-120,110,275]},{name:"Alnitak",pos:[-160,40,280]},{name:"Alnilam",pos:[-145,38,285]},{name:"Mintaka",pos:[-130,36,290]},{name:"Saiph",pos:[-175,-50,270]},{name:"Rigel",pos:[-115,-60,285]}],edges:[[0,1],[0,2],[1,4],[2,3],[3,4],[2,5],[4,6],[5,6]]},{id:"cassiopeia",name:"Cassiopeia",color:"#ff9ee2",stars:[{name:"Caph",pos:[220,190,160]},{name:"Schedar",pos:[260,180,120]},{name:"Navi",pos:[290,210,80]},{name:"Ruchbah",pos:[310,195,30]},{name:"Segin",pos:[330,230,-10]}],edges:[[0,1],[1,2],[2,3],[3,4]]},{id:"crux",name:"Crux (Southern Cross)",color:"#85ffb5",stars:[{name:"Acrux",pos:[40,-290,-140]},{name:"Mimosa",pos:[70,-270,-120]},{name:"Gacrux",pos:[50,-230,-150]},{name:"Delta Crucis",pos:[20,-255,-165]}],edges:[[0,2],[1,3]]},{id:"cygnus",name:"Cygnus (The Northern Cross)",color:"#c0b2ff",stars:[{name:"Deneb",pos:[-240,220,-120]},{name:"Sadr",pos:[-210,180,-150]},{name:"Gienah",pos:[-260,160,-170]},{name:"Delta Cygni",pos:[-160,195,-135]},{name:"Albireo",pos:[-180,130,-180]}],edges:[[0,1],[1,4],[2,1],[1,3]]}];class h_{constructor(t){this.scene=t,this.group=new ne,this.group.name="constellation-overlay",this.visible=!1,this.group.visible=!1,this._buildConstellations(),this.scene&&this.scene.add(this.group)}_buildConstellations(){for(const t of u_){const e=[];for(const[l,c]of t.edges){const h=t.stars[l].pos,u=t.stars[c].pos;e.push(h[0],h[1],h[2]),e.push(u[0],u[1],u[2])}const n=new oe;n.setAttribute("position",new Kt(e,3));const s=new Ha({color:new Ct(t.color),transparent:!0,opacity:.55,blending:ve}),r=new l0(n,s);this.group.add(r);const a=new le(2.2,8,8),o=new jt({color:new Ct(t.color),transparent:!0,opacity:.85,blending:ve});for(const l of t.stars){const c=new rt(a,o);c.position.set(l.pos[0],l.pos[1],l.pos[2]),this.group.add(c)}}}toggle(t){return this.visible=t!==void 0?t:!this.visible,this.group.visible=this.visible,this.visible}}class d_{constructor(t={}){this.stiffness=t.stiffness??85,this.damping=t.damping??6.5,this.mass=t.mass??.85,this.maxTilt=t.maxTiltAngle??.55,this.rotationX=0,this.rotationZ=0,this.velX=0,this.velZ=0}update(t,e={}){const n=Math.min(Math.max(t,.001),.1),s=(e.accZ??0)*.45+(e.pitchRate??0)*.35,r=-(e.accX??0)*.45-(e.yawRate??0)*.4,a=-this.stiffness*this.rotationX,o=-this.damping*this.velX,l=(a+o+s)/this.mass,c=-this.stiffness*this.rotationZ,h=-this.damping*this.velZ,u=(c+h+r)/this.mass;return this.velX+=l*n,this.velZ+=u*n,this.rotationX+=this.velX*n,this.rotationZ+=this.velZ*n,Math.abs(this.rotationX)>this.maxTilt&&(this.rotationX=Math.sign(this.rotationX)*this.maxTilt,this.velX*=-.25),Math.abs(this.rotationZ)>this.maxTilt&&(this.rotationZ=Math.sign(this.rotationZ)*this.maxTilt,this.velZ*=-.25),{rotationX:this.rotationX,rotationZ:this.rotationZ}}nudge(t=2.5,e=2){this.velX+=t,this.velZ+=e}reset(){this.rotationX=0,this.rotationZ=0,this.velX=0,this.velZ=0}}const Jt={porcelainCream:16183268,terracotta:14253380,warmWood:4007965,darkBronze:2827552,vintageBrass:13935449,seatFabric:5521463,canopyGlass:12575743,glowAmberWarm:16758868,glowLantern:16768938,glowCyan:6482175,glowGreen:5826704,coffeeBrown:3808780};function f_(){const i=new ne;i.name="spaceship",i.scale.setScalar(.24);const t=new d_({stiffness:90,damping:6,mass:.8}),e=p_(),n=m_(),s=g_();s.position.set(0,-.22,.28),n.add(s);const r=new Bi(Jt.glowAmberWarm,1.2,5,2);r.position.set(0,0,1.1);const a=new jt({color:Jt.glowAmberWarm,transparent:!0,opacity:.85,blending:ve}),o=new Fi(.1,.65,16);o.rotateX(-Math.PI/2),o.translate(0,0,.32);const l=new rt(o,a);l.position.set(-.32,.01,.85);const c=l.clone();c.position.x=.32;const h=new jt({color:Jt.glowCyan,transparent:!0,opacity:.85,blending:ve}),u=new Fi(.06,.35,12);u.rotateX(Math.PI/2),u.translate(0,0,-.18);const d=new rt(u,h);d.position.set(-.25,-.05,-.45);const p=d.clone();p.position.x=.25,e.add(l,c,d,p);const g=[l,c],_=[d,p],m=120,f=new Float32Array(m*3);for(let X=0;X<m;X++)f[X*3]=(Math.random()-.5)*2.2,f[X*3+1]=(Math.random()-.5)*1.4+.15,f[X*3+2]=-.2-Math.random()*3.2;const x=new oe;x.setAttribute("position",new Ae(f,3));const v=new ps({color:16772829,size:.045,transparent:!0,opacity:.75,blending:ve}),y=new ms(x,v);y.name="speed-dust",i.add(y);const R=new le(.55,16,16,0,Math.PI*2,0,Math.PI/2.2);R.rotateX(-Math.PI/2);const w=new jt({color:16738859,transparent:!0,opacity:0,blending:ve,side:Re}),A=new rt(R,w);A.name="reentry-plasma",A.position.set(0,0,-.2),e.add(A),i.add(e,n,r);const N=n.getObjectByName("flight-stick"),S=n.getObjectByName("holo-globe"),b=n.getObjectByName("horizon-needle"),O=n.getObjectByName("speed-needle"),H=n.getObjectByName("bobblehead-head"),U=n.getObjectByName("coffee-steam")?.children??[],L=e.getObjectByName("exterior-canopy"),D=e.getObjectByName("exterior-portholes");function G(X,Y,j,K,it,at,W=0){const Z=it===ie.COCKPIT;if(L&&(L.visible=!Z),D&&(D.visible=!Z),s.visible=!Z,S&&(S.rotation.y+=X*.7,S.rotation.x=Math.sin(Date.now()*.001)*.12),N&&K){const z=-(K.yaw??0)*.32+(K.strafe??0)*.18,vt=-(K.pitch??0)*.28-(K.thrust??0)*.18;N.rotation.z+=(z-N.rotation.z)*Math.min(X*12,1),N.rotation.x+=(vt-N.rotation.x)*Math.min(X*12,1)}if(H){const z=t.update(X,at??{accZ:(K?.thrust??0)*(j?22:8),yawRate:(K?.yaw??0)*8,pitchRate:(K?.pitch??0)*8});H.rotation.x=z.rotationX,H.rotation.z=z.rotationZ}b&&K&&(b.rotation.z=-(K.yaw??0)*.5,b.position.y=(K.pitch??0)*.02),O&&(O.rotation.z=-Y*Math.PI*1.5),A&&w&&(w.opacity=Math.min(W*.85,.9),W>.6?w.color.setHex(11200767):W>.3?w.color.setHex(16765030):w.color.setHex(16738859));const ot=Date.now()*.002;for(let z=0;z<U.length;z++){const vt=U[z],mt=(ot+z*.4)%1;vt.position.y=.06+mt*.09,vt.position.x=Math.sin(ot*2+z)*.008,vt.scale.setScalar(.5+mt*1.2),vt.material&&(vt.material.opacity=(1-mt)*.45)}const ft=K?.thrust??0,pt=Math.max(Y,Math.abs(ft)),Et=(ft!==0?ft:Y>.05?1:.05)*(pt*8+.5)*X,Tt=x.attributes.position,ht=Tt.array;for(let z=0;z<m;z++){let vt=ht[z*3+2]+Et;vt>.3?(vt=-3.4-Math.random()*.5,ht[z*3]=(Math.random()-.5)*2.2,ht[z*3+1]=(Math.random()-.5)*1.4+.15):vt<-3.9&&(vt=.2+Math.random()*.1),ht[z*3+2]=vt}Tt.needsUpdate=!0,v.opacity=Z?.85:.45;const Mt=Math.max(K?.thrust??0,Y),P=.3+Mt*(j?2.5:1.2),lt=.5+Mt*(j?1.2:.6),$=j?Jt.glowCyan:Jt.glowAmberWarm;a.color.setHex($),r.color.setHex($),r.intensity=.8+Mt*(j?3.5:1.6);for(const z of g)z.scale.set(lt,lt,P),z.visible=Mt>.02;const et=Math.max(-(K?.thrust??0),0);for(const z of _)z.scale.set(.5+et*1.5,.5+et*1.5,.4+et*2),z.visible=et>.05}return{ship:i,cockpitInterior:n,exterior:e,pilot:s,bobbleheadPhysics:t,thrusterGlow:r,thrusterPlumes:g,flightStick:N,holoGlobe:S,update:G}}function p_(){const i=new ne;i.name="ship-exterior";const t=new pe({color:Jt.porcelainCream,metalness:.15,roughness:.45}),e=new pe({color:Jt.terracotta,metalness:.2,roughness:.5}),n=new pe({color:Jt.darkBronze,metalness:.6,roughness:.35}),s=new le(.48,24,20);s.scale(1,.78,1.45);const r=new rt(s,t);r.position.set(0,0,0);const a=new le(.34,16,16,0,Math.PI*2,0,Math.PI/2);a.rotateX(-Math.PI/2),a.scale(1,.72,1);const o=new rt(a,e);o.position.set(0,-.01,-.58);const l=new rt(new Ne(.38,.08,.9),e);l.position.set(0,-.28,.05);const c=new k0({color:Jt.canopyGlass,transparent:!0,opacity:.5,roughness:.08,metalness:.1,transmission:.65,thickness:.2,reflectivity:.85}),h=new le(.38,20,16,0,Math.PI*2,0,Math.PI/1.8),u=new rt(h,c);u.name="exterior-canopy",u.position.set(0,.12,-.18),u.scale.set(.9,.75,1.15),u.rotation.x=Math.PI;const d=new ne;d.name="exterior-portholes";const p=new jt({color:Jt.glowAmberWarm}),g=new pe({color:Jt.vintageBrass,metalness:.7,roughness:.3});for(const D of[-1,1])for(let G=0;G<2;G++){const X=new rt(new Gi(.06,.012,8,16),g);X.position.set(D*.44,.02,.1+G*.28),X.rotation.y=D*Math.PI/2;const Y=new rt(new Dn(.055,16),p);Y.position.set(D*.441,.02,.1+G*.28),Y.rotation.y=D*Math.PI/2,d.add(X,Y)}const _=new Dc;_.moveTo(0,0),_.lineTo(-.85,.4),_.lineTo(-.8,.75),_.lineTo(-.15,.55),_.lineTo(0,.45);const m={depth:.03,bevelEnabled:!0,bevelSegments:2,steps:1,bevelSize:.015,bevelThickness:.015},f=new qa(_,m);f.rotateX(Math.PI/2);const x=new rt(f,t);x.position.set(-.25,-.05,-.08);const v=f.clone();v.scale(-1,1,1);const y=new rt(v,t);y.position.set(.25,-.05,-.08);const R=new le(.028,8,8),w=new rt(R,new jt({color:16733525}));w.position.set(-1.05,-.02,.42);const A=new rt(R,new jt({color:5635959}));A.position.set(1.05,-.02,.42);const N=new Ce(.11,.14,.65,16);N.rotateX(Math.PI/2);const S=new rt(N,n);S.position.set(-.32,.01,.5);const b=S.clone();b.position.x=.32;const O=new Gi(.12,.025,8,16),H=new jt({color:Jt.glowAmberWarm}),U=new rt(O,H);U.position.set(-.32,.01,.82);const L=U.clone();return L.position.x=.32,i.add(r,o,l,u,d,x,y,w,A,S,b,U,L),i}function m_(){const i=new ne;i.name="cockpit-interior";const t=new pe({color:Jt.warmWood,roughness:.7,metalness:.1}),e=new pe({color:Jt.vintageBrass,metalness:.8,roughness:.25}),n=new jt({color:1314828}),s=new Gi(.42,.018,8,24,Math.PI*.9);s.rotateZ(-Math.PI*.05);const r=new rt(s,e);r.position.set(0,.06,-.32);const a=new rt(new Ne(.78,.18,.38),t);a.position.set(0,-.16,-.22);const o=new rt(new Ne(.72,.14,.28),t);o.position.set(0,-.08,-.18),o.rotation.x=-Math.PI/4.5;const l=new rt(new Dn(.08,20),n);l.position.set(0,-.03,-.07),l.rotation.x=-Math.PI/4.5;const c=new rt(new an(.076,.084,20),e);l.add(c);const h=new rt(new Li(.12,.006),new jt({color:Jt.glowAmberWarm}));h.name="horizon-needle",h.position.set(0,0,.002),l.add(h);const u=new rt(new Li(.055,.005),new jt({color:16733525}));u.name="speed-needle",u.position.set(0,0,.004),l.add(u);const d=new rt(new Dn(.055,16),n);d.position.set(-.22,-.04,-.09),d.rotation.x=-Math.PI/4.5,d.rotation.y=Math.PI/12,d.add(new rt(new an(.052,.058,16),e));const p=new rt(new Li(.08,.005),new jt({color:Jt.glowGreen}));d.add(p);const g=new rt(new Dn(.055,16),n);g.position.set(.22,-.04,-.09),g.rotation.x=-Math.PI/4.5,g.rotation.y=-Math.PI/12,g.add(new rt(new an(.052,.058,16),e));const _=new ne;_.name="holo-globe",_.position.set(.22,.04,-.08);const m=new rt(new le(.035,10,8),new jt({color:Jt.glowAmberWarm,wireframe:!0,transparent:!0,opacity:.85})),f=new rt(new an(.046,.052,16),new jt({color:Jt.glowCyan,side:Ue}));f.rotation.x=Math.PI/3,_.add(m,f);const x=new ne;x.position.set(-.32,.02,-.08);const v=new rt(new Ce(.025,.03,.02,10),e),y=new rt(new Ce(.022,.022,.05,10),new jt({color:Jt.glowLantern}));y.name="lamp-bulb",y.position.y=.035;const R=new rt(new Fi(.03,.025,10),e);R.position.y=.065;const w=new rt(new Ne(.015,.015,.02),e);w.name="switch-cabin-light",w.position.set(0,.01,.03),x.add(v,y,R,w);const A=new Bi(Jt.glowLantern,1.4,2.2,2);A.name="cabin-lamp-light",A.position.set(-.32,.06,-.06);const N=new ne;N.position.set(.3,-.07,.02);const S=new rt(new Ce(.038,.034,.03,12),e),b=new pe({color:Jt.terracotta,roughness:.4}),O=new rt(new Ce(.028,.024,.06,12),b);O.position.y=.025;const H=new rt(new Dn(.022,12),new jt({color:Jt.coffeeBrown}));H.rotation.x=-Math.PI/2,H.position.y=.052;const U=new Gi(.016,.005,6,10,Math.PI);U.rotateY(Math.PI/2);const L=new rt(U,b);L.position.set(.028,.025,0);const D=new ne;D.name="coffee-steam";for(let J=0;J<5;J++){const bt=new jt({color:16772829,transparent:!0,opacity:.35}),dt=new rt(new le(.009,6,6),bt);dt.position.y=.06+J*.015,D.add(dt)}N.add(S,O,H,L,D);const G=new ne;G.name="bobblehead-prop",G.position.set(-.14,-.04,-.07);const X=new rt(new Ce(.025,.03,.012,12),e),Y=new rt(new Ce(.006,.006,.04,8),new pe({color:8947848,metalness:.9}));Y.position.y=.02;const j=new ne;j.name="bobblehead-head",j.position.y=.045;const K=new rt(new le(.032,12,12),new pe({color:5826704,roughness:.5}));K.scale.set(1.1,1.25,1);const it=new jt({color:1118481}),at=new rt(new le(.01,8,8),it);at.position.set(-.014,.005,.026);const W=at.clone();W.position.x=.014;const Z=new rt(new Ce(.002,.002,.025,6),e);Z.position.y=.04;const ot=new rt(new le(.006,6,6),new jt({color:Jt.glowAmberWarm}));ot.position.y=.052,j.add(K,at,W,Z,ot),G.add(X,Y,j);const ft=new ne;ft.name="dash-radio",ft.position.set(.14,-.05,-.07);const pt=new rt(new Ne(.075,.04,.045),t),Et=new rt(new Dn(.014,12),new jt({color:1118481}));Et.position.set(-.018,0,.023);const Tt=new rt(new Ce(.009,.009,.015,10),e);Tt.name="radio-knob",Tt.rotateX(Math.PI/2),Tt.position.set(.018,0,.025),ft.add(pt,Et,Tt);const ht=new ne;ht.name="warp-lever",ht.position.set(-.25,-.1,-.04);const Mt=new rt(new Ne(.04,.02,.06),e),P=new rt(new Ce(.006,.006,.08,8),t);P.position.set(0,.04,0),P.rotation.x=-.25;const lt=new rt(new le(.014,8,8),new jt({color:Jt.glowAmberWarm}));lt.position.set(0,.08,-.015),ht.add(Mt,P,lt);const $=new rt(new Ce(.012,.012,.015,8),e);$.name="palette-switch",$.position.set(.25,-.08,-.04);const et=new ne;et.name="flight-stick",et.position.set(0,-.16,.06);const z=new rt(new Ce(.035,.045,.03,10),e),vt=new rt(new Ce(.012,.012,.16,8),t);vt.position.y=.08;const mt=new rt(new le(.022,10,10),e);mt.position.set(0,.16,0),et.add(z,vt,mt);const E=new pe({color:Jt.seatFabric,roughness:.85}),M=new rt(new Ne(.4,.09,.38),E);M.position.set(0,-.28,.28);const F=new rt(new Ne(.38,.45,.08),E);F.position.set(0,-.06,.45),F.rotation.x=-.1;const tt=new rt(new Ne(.24,.14,.07),E);tt.position.set(0,.2,.48);const Q=new Bi(Jt.glowLantern,.65,2.2,2);return Q.position.set(0,.2,.05),i.add(r,a,o,l,d,g,_,x,A,N,G,ft,ht,$,et,M,F,tt,Q),i}function g_(){const i=new ne;i.name="pilot";const t=new pe({color:14660758,roughness:.7}),e=new pe({color:7228731,roughness:.85}),n=new pe({color:Jt.terracotta,roughness:.8}),s=new rt(new rs(.11,.2,4,8),e);s.position.y=.15;const r=new rt(new le(.085,14,14),t);r.position.y=.33;const a=new rt(new le(.088,12,12,0,Math.PI*2,0,Math.PI/1.7),n);a.position.set(0,.35,0);const o=new rs(.035,.18,4,8),l=new rt(o,e);l.position.set(-.15,.14,-.05),l.rotation.set(.5,0,.25);const c=new rt(o,e);c.position.set(.15,.14,-.05),c.rotation.set(.5,0,-.25);const h=new rs(.045,.2,4,8),u=new rt(h,e);u.position.set(-.07,-.06,-.04),u.rotation.x=Math.PI/2.1;const d=u.clone();return d.position.x=.07,i.add(s,r,a,l,c,u,d),i}const __={[ie.COCKPIT]:new C(0,.03,.04),[ie.THIRD_PERSON]:new C(0,.28,1.25),[ie.CINEMATIC]:new C(.85,.35,1.1)},v_={[ie.COCKPIT]:new C(0,.02,-2.5),[ie.THIRD_PERSON]:new C(0,.06,-2),[ie.CINEMATIC]:new C(0,.03,-.5)},ra=60,Bl=74;class x_{constructor(t,e){this.camera=t,this.ship=e,this.mode=ie.COCKPIT,this._currentPos=new C,this._currentLook=new C,this._mouseParallax={x:0,y:0},this._initialized=!1,this._zoomLevel=1,this._targetZoom=1,this._targetFov=ra}setMode(t){Object.values(ie).includes(t)&&(this.mode=t)}adjustZoom(t){this._targetZoom=Qi(this._targetZoom+t,.45,2.8)}setZoom(t){this._targetZoom=Qi(t,.45,2.8)}get zoomLevel(){return this._targetZoom}setMouseParallax(t,e){this._mouseParallax.x=Qi(t,-1,1),this._mouseParallax.y=Qi(e,-1,1)}update(t,e=!1,n=0){this._zoomLevel+=(this._targetZoom-this._zoomLevel)*Math.min(t*8,1);const r=__[this.mode].clone(),a=v_[this.mode].clone();if(this.mode===ie.COCKPIT?(r.x+=this._mouseParallax.x*.06,r.y+=this._mouseParallax.y*.04,a.x+=this._mouseParallax.x*1.4,a.y+=this._mouseParallax.y*.8):r.multiplyScalar(this._zoomLevel),e&&n>.3){const u=.012*Math.min(n,1);r.x+=(Math.random()-.5)*u,r.y+=(Math.random()-.5)*u}const o=r.clone().applyQuaternion(this.ship.quaternion),l=this.ship.position.clone().add(o),c=a.clone().applyQuaternion(this.ship.quaternion),h=this.ship.position.clone().add(c);if(!this._initialized)this._currentPos.copy(l),this._currentLook.copy(h),this._initialized=!0;else{const u=1-Math.exp(-10*t);this._currentPos.lerp(l,u),this._currentLook.lerp(h,u)}if(this.camera.position.copy(this._currentPos),this.camera.lookAt(this._currentLook),this.mode===ie.COCKPIT){const u=(e?Bl:ra)*this._zoomLevel;this._targetFov=Qi(u,35,85)}else this._targetFov=e?Bl:ra;if(Math.abs(this.camera.fov-this._targetFov)>.05){const u=1-Math.exp(-3*t);this.camera.fov+=(this._targetFov-this.camera.fov)*u,this.camera.updateProjectionMatrix()}}}function Qi(i,t,e){return Math.min(Math.max(i,t),e)}const Zn=Object.freeze({SPOOLING:"SPOOLING",CRUISE:"CRUISE",DECELERATING:"DECELERATING",ARRIVED:"ARRIVED"}),In=1.4,tr=1.6;function y_(i,t){const e=Math.max(Pa(t),In+tr+.1),n=zl(Pa(i),0,e),s=Math.max(e-In-tr,.1);if(n>=e)return{phase:Zn.ARRIVED,phaseProgress:1,overallProgress:1,speedFraction:0,pathT:1};if(n<In){const c=n/In,h=Hl(c),u=.02*Hl(c);return{phase:Zn.SPOOLING,phaseProgress:c,overallProgress:n/e,speedFraction:h,pathT:u}}if(n<In+s){const c=(n-In)/s,h=.02+c*.9;return{phase:Zn.CRUISE,phaseProgress:c,overallProgress:n/e,speedFraction:1,pathT:h}}const a=(n-In-s)/tr,o=1-kl(a),l=.92+kl(a)*.08;return{phase:Zn.DECELERATING,phaseProgress:a,overallProgress:n/e,speedFraction:o,pathT:zl(l,0,1)}}function M_(i){const t=Math.max(Pa(i),0),e=In+tr,n=Math.min(Math.log10(1+t)*.9,14);return e+n}function Hl(i){return i*i}function kl(i){return 1-(1-i)*(1-i)}function zl(i,t,e){return Math.min(Math.max(i,t),e)}function Pa(i){return Number.isFinite(i)?i:0}function S_({color:i=14674431}={}){return new we({uniforms:{uColor:{value:new Ct(i)},uSpeedFraction:{value:0}},vertexShader:`
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
    `,transparent:!0,depthWrite:!1,blending:ve})}const aa=299792.458,La=.999999;function Wc(i){const t=T_(i),e=Math.sqrt(1-t*t);return e<=0?Number.POSITIVE_INFINITY>0?1/Math.sqrt(1-La*La):1:1/e}function qc(i,t){if(!Number.isFinite(i)||i<0)return 0;const e=Wc(t);return i/e}function js(i,t){return!Number.isFinite(i)||i<=0?0:!Number.isFinite(t)||t<=0?Number.POSITIVE_INFINITY:i/t}function b_(i){const t=Number.isFinite(i)&&i>0?i:0,e=js(t,aa),n=.999*aa,s=js(t,n),r=qc(s,.999),a=js(t,.1*aa),o=js(t,4e4/3600);return{lightSpeed:{seconds:e,label:"At light speed (c)"},relativistic999c:{seconds:s,shipSeconds:r,label:"Relativistic cruiser (0.999c)"},fusionDrive01c:{seconds:a,label:"Fusion drive (0.1c)"},chemicalRocket:{seconds:o,label:"Chemical rocket (~40,000 km/h)"}}}function os(i){if(!Number.isFinite(i))return"effectively forever";if(i<0)return"0 seconds";const t=365.25*24*3600;if(i<60)return`${i.toFixed(1)} sec`;if(i<3600)return`${(i/60).toFixed(1)} min`;if(i<86400)return`${(i/3600).toFixed(1)} hr`;if(i<t)return`${(i/86400).toFixed(1)} days`;const e=i/t;return e<1e3?`${e.toFixed(2)} yr`:e<1e6?`${(e/1e3).toFixed(2)}k yr`:`${(e/1e6).toFixed(2)}M yr`}function E_(i,t=415e4){if(!Number.isFinite(i)||i<=0)return{schwarzschildRadiusKm:0,dilationFactor:0,timeRatio:Number.POSITIVE_INFINITY,isInsideEventHorizon:!0};const e=t*2.95325;if(i<=e)return{schwarzschildRadiusKm:e,dilationFactor:0,timeRatio:Number.POSITIVE_INFINITY,isInsideEventHorizon:!0};const n=1-e/i,s=Math.sqrt(Math.max(n,1e-6)),r=1/s;return{schwarzschildRadiusKm:e,dilationFactor:s,timeRatio:r,isInsideEventHorizon:!1}}function T_(i){return Number.isFinite(i)?Math.min(Math.max(i,0),La):0}const w_=1495978707e-1,A_=94607304725808e-1;function C_(i){return _r(i)/w_}function R_(i){return _r(i)/A_}function P_(i,t=1e6,e=40){const n=_r(i);return n<=0?0:t*(10**(n/e)-1)}function Vl(i){const t=_r(i);if(t<0)return"unknown";if(t<5e6)return`${oa(t)} km`;const e=C_(t);return e<2e3?`${oa(e)} AU`:`${oa(R_(t))} ly`}function oa(i){return Number.isFinite(i)?i>=1e3?i.toLocaleString("en-US",{maximumFractionDigits:0}):i>=1?i.toFixed(2):i.toPrecision(2):"—"}function _r(i){return Number.isFinite(i)?i:0}class L_{constructor({scene:t,ship:e,store:n}){this.scene=t,this.ship=e,this.store=n,this._streaks=this._buildStreakField(),this.scene.add(this._streaks),this._active=!1,this._elapsed=0,this._duration=0,this._startPos=new C,this._endPos=new C,this._distanceKm=0,this._onArrive=null}_buildStreakField(t=800){const e=new oe,n=new Float32Array(t*3);for(let a=0;a<t;a++)n[a*3]=(Math.random()-.5)*30,n[a*3+1]=(Math.random()-.5)*30,n[a*3+2]=-Math.random()*60;e.setAttribute("position",new Ae(n,3));const s=S_({}),r=new ms(e,s);return r.name="warp-streaks",r.frustumCulled=!1,r.visible=!1,r}beginJump(t,e,n,s,r=1){this._startPos.copy(t);const a=e.clone().sub(t),o=a.length(),l=o>1e-5?a.clone().normalize():new C(0,0,-1),c=Math.max(r+1.2,1.8),h=o>c?e.clone().sub(l.clone().multiplyScalar(c)):e.clone();this._endPos.copy(h),this._distanceKm=Number.isFinite(n)?n:P_(t.distanceTo(e)),this._duration=M_(this._distanceKm),this._elapsed=0,this._active=!0,this._onArrive=s??null,this._streaks.visible=!0,this.ship.userData.forward=l.clone(),this.ship.lookAt(this.ship.position.clone().add(l)),this.store.dispatch(kt.setFlightStatus(dn.SPOOLING))}cancel(){this._active=!1,this._streaks.visible=!1}get isActive(){return this._active}update(t,e){const n=this._streaks.material;if(n?.uniforms?.uSpeedFraction&&(n.uniforms.uSpeedFraction.value=this._active?n.uniforms.uSpeedFraction.value:.05+Math.sin(e*.5)*.02),!this._active)return;this._elapsed+=t;const s=y_(this._elapsed,this._duration),r=this._startPos.clone().lerp(this._endPos,s.pathT);this.ship.position.copy(r);const a=this._endPos.clone().sub(this._startPos);a.lengthSq()>1e-6&&(a.normalize(),this.ship.userData.forward=a.clone(),this.ship.lookAt(this.ship.position.clone().add(a))),n?.uniforms?.uSpeedFraction&&(n.uniforms.uSpeedFraction.value=s.speedFraction),this._streaks.position.copy(this.ship.position),this._reportTelemetry(s);const o=s.phase===Zn.SPOOLING?dn.SPOOLING:s.phase===Zn.DECELERATING?dn.DECELERATING:dn.WARP;this.store.getState().flightStatus!==o&&this.store.dispatch(kt.setFlightStatus(o)),s.phase===Zn.ARRIVED&&(this._active=!1,this._streaks.visible=!1,this.ship.userData.velocity={x:0,y:0,z:0},this.ship.userData.bankAngle=0,this.store.dispatch(kt.setFlightStatus(dn.ARRIVED)),this.store.dispatch(kt.updateTelemetry({currentSpeedC:0,etaSeconds:0,distanceRemainingKm:0})),this._onArrive?.())}_reportTelemetry(t){const e=t.speedFraction*.999,n=Wc(e),s=this._distanceKm*(1-t.pathT),r=Math.max(this._duration-this._elapsed,0);this.store.dispatch(kt.updateTelemetry({currentSpeedC:e,lorentzFactor:n,distanceRemainingKm:s,totalDistanceKm:this._distanceKm,timeDilationEarthSec:this._elapsed,timeDilationShipSec:qc(this._elapsed,e),etaSeconds:r}))}}function Ii(i,t){return{x:i.x+t.x,y:i.y+t.y,z:i.z+t.z}}function Ia(i,t){return{x:i.x-t.x,y:i.y-t.y,z:i.z-t.z}}function ze(i,t){return{x:i.x*t,y:i.y*t,z:i.z*t}}function ds(i){return Math.sqrt(i.x*i.x+i.y*i.y+i.z*i.z)}function Ye(i){const t=ds(i);return t<1e-9?{x:0,y:0,z:1}:{x:i.x/t,y:i.y/t,z:i.z/t}}function Xc(i,t){return i.x*t.x+i.y*t.y+i.z*t.z}function I_(i,t,e){const n=Math.min(Math.max(e,0),1);return{x:i.x+(t.x-i.x)*n,y:i.y+(t.y-i.y)*n,z:i.z+(t.z-i.z)*n}}const D_=24,N_=180,U_=28,O_=140,F_=.94,Wl=2.2;function G_(i,t,e){const n=z_(e),s=es($s(t?.thrust),-1,1),r=es($s(t?.yaw),-1,1),a=es($s(t?.pitch),-1,1),o=es($s(t?.strafe),-1,1),l=!!t?.boost,c=l?N_:D_,h=l?O_:U_,u=k_(i.forward,r*Wl*n,a*Wl*n),d=Ye({x:-u.z,y:0,z:u.x}),p=ze(u,s*h),g=ze(d,o*h*.7),_=Ii(p,g);let m=Ii(i.velocity,ze(_,n));const f=ds(m);if(f>.05&&s!==0){const N=s>=0?u:ze(u,-1),S=Math.min(n*8,1),b=Ye(I_(Ye(m),N,S));m=ze(b,f)}const x=Math.pow(F_,n*60);m=ze(m,x),ds(m)>c&&(m=ze(Ye(m),c));const y=Ii(i.position,ze(m,n)),R=-r*.45,w=i.bankAngle??0,A=w+(R-w)*Math.min(n*8,1);return{position:y,velocity:m,forward:u,bankAngle:A}}function B_(i,t,e=[]){let n={...i},s={...t},r=!1;for(const a of e){if(!a||!a.position||!a.safeRadius||a.safeRadius<=0)continue;const o=Ia(n,a.position);if(ds(o)<a.safeRadius){r=!0;const c=Ye(o);n=Ii(a.position,ze(c,a.safeRadius));const h=Xc(s,c);h<0&&(s=Ia(s,ze(c,h)))}}return{position:n,velocity:s,collided:r}}function H_(i,t,e,n=2){const s=Ia(e,i),r=ds(s),a=Ye(s),o=Ye(t),l=es(Xc(o,a),-1,1),c=Math.acos(l)*180/Math.PI;return{distance:r,directionToTarget:a,angleOffsetDeg:c,aligned:c<5,arrived:r<=n}}function k_(i,t,e){let n=Ye(i),s=Ye({x:-n.z,y:0,z:n.x});Math.abs(n.x)<1e-5&&Math.abs(n.z)<1e-5&&(s={x:1,y:0,z:0});const r=Ye({x:s.y*n.z-s.z*n.y,y:s.z*n.x-s.x*n.z,z:s.x*n.y-s.y*n.x});if(Math.abs(t)>1e-7){const a=Math.cos(t),o=Math.sin(t);n=Ye(Ii(ze(n,a),ze(s,o)))}if(Math.abs(e)>1e-7){const a=Math.cos(e),o=Math.sin(e);n=Ye(Ii(ze(n,a),ze(r,o)))}if(n.y>.88||n.y<-.88){const a=Math.sign(n.y)*.88,o=Math.sqrt(Math.max(1-a*a,0)),l=Ye({x:n.x,y:0,z:n.z});n={x:l.x*o,y:a,z:l.z*o}}return n}function es(i,t,e){return Math.min(Math.max(i,t),e)}function $s(i){return Number.isFinite(i)?i:0}function z_(i){return!Number.isFinite(i)||i<0?0:Math.min(i,.1)}const V_={thrustForward:["KeyS","ArrowDown","s","S","arrowdown"],thrustBackward:["KeyW","ArrowUp","w","W","arrowup"],yawLeft:["KeyA","ArrowLeft","a","A","arrowleft"],yawRight:["KeyD","ArrowRight","d","D","arrowright"],strafeLeft:["KeyQ","q","Q"],strafeRight:["KeyE","e","E"],pitchUp:["KeyR","r","R"],pitchDown:["KeyF","f","F"],boost:["ShiftLeft","ShiftRight","KeyB","b","B","shift"]};class W_{constructor({keyMap:t=V_,arrivalRadius:e=2}={}){this._keyMap=t,this._arrivalRadius=e,this._pressedKeys=new Set,this._targetPosition=null,this._hyperdriveLocked=!1}handleKeyDown(t){t?.code&&this._pressedKeys.add(t.code),t?.key&&this._pressedKeys.add(t.key.toLowerCase())}handleKeyUp(t){t?.code&&this._pressedKeys.delete(t.code),t?.key&&this._pressedKeys.delete(t.key.toLowerCase())}resetInput(){this._pressedKeys.clear()}toggleHyperdriveLock(t){return this._hyperdriveLocked=typeof t=="boolean"?t:!this._hyperdriveLocked,this._hyperdriveLocked}get isHyperdriveLocked(){return this._hyperdriveLocked}setTarget(t){this._targetPosition=t}readInput(){const t=o=>o?.some(l=>this._pressedKeys.has(l))??!1;let e=0;t(this._keyMap.thrustForward)&&(e+=1),t(this._keyMap.thrustBackward)&&(e-=1);let n=0;t(this._keyMap.yawRight)&&(n+=1),t(this._keyMap.yawLeft)&&(n-=1);let s=0;t(this._keyMap.strafeRight)&&(s+=1),t(this._keyMap.strafeLeft)&&(s-=1);let r=0;t(this._keyMap.pitchUp)&&(r+=1),t(this._keyMap.pitchDown)&&(r-=1);const a=this._hyperdriveLocked||t(this._keyMap.boost);return{thrust:e,yaw:n,pitch:r,strafe:s,boost:a}}step(t,e){const n=this.readInput(),s=G_(t,n,e),r=this._targetPosition?H_(s.position,s.forward,this._targetPosition,this._arrivalRadius):null;return{state:s,bearing:r,input:n}}}const ql=[{name:"Warm Amber",primary:"#ffb854",secondary:"#ffd27a"},{name:"Emerald Retro",primary:"#58e890",secondary:"#a0ffd0"},{name:"Cyber Cyan",primary:"#62e8ff",secondary:"#b5f5ff"}];class q_{constructor(t){this.camera=t.camera,this.shipGroup=t.shipGroup,this.audio=t.audio,this.spaceRadio=t.spaceRadio,this.bobblehead=t.bobbleheadProp,this.onEngageWarp=t.onEngageWarp,this.onShowToast=t.onShowToast,this.raycaster=new q0,this.mouse=new st,this.cabinLightOn=!0,this.currentPaletteIndex=0}handleClick(t,e){if(!e||!this.camera||!this.shipGroup)return!1;this.mouse.x=t.clientX/window.innerWidth*2-1,this.mouse.y=-(t.clientY/window.innerHeight)*2+1,this.raycaster.setFromCamera(this.mouse,this.camera);const n=this.raycaster.intersectObjects(this.shipGroup.children,!0);if(n.length===0)return!1;for(const s of n){let r=s.object;for(;r&&r!==this.shipGroup;){if(r.name==="switch-cabin-light"||r.name==="lamp-bulb")return this.toggleCabinLight(),!0;if(r.name==="radio-knob"||r.name==="dash-radio")return this.tuneRadio(),!0;if(r.name==="warp-lever")return this.triggerWarpLever(),!0;if(r.name==="bobblehead-head"||r.name==="bobblehead-prop")return this.tapBobblehead(),!0;if(r.name==="palette-switch")return this.cycleTheme(),!0;r=r.parent}}return!1}toggleCabinLight(){this.cabinLightOn=!this.cabinLightOn;const t=this.shipGroup.getObjectByName("cabin-lamp-light");t&&(t.intensity=this.cabinLightOn?1.6:.05);const e=this.shipGroup.getObjectByName("lamp-bulb");e&&e.material&&e.material.color.setHex(this.cabinLightOn?16768938:4469538),this.audio?.playChirp(),this.onShowToast?.(this.cabinLightOn?"Cabin Light: ON":"Cabin Light: OFF")}tuneRadio(){if(this.spaceRadio){if(this.spaceRadio.isPlaying){const t=this.spaceRadio.tuneNext();this.onShowToast?.(`📻 Radio: ${t.name} [${t.frequency}]`)}else{this.spaceRadio.start();const t=this.spaceRadio.getCurrentStation();this.onShowToast?.(`📻 Space Radio: ON (${t.name})`)}this.audio?.playChirp()}}triggerWarpLever(){this.audio?.playChirp(),this.onEngageWarp?.()}tapBobblehead(){this.bobblehead&&this.bobblehead.nudge(3.5,(Math.random()-.5)*4),this.audio?.playChirp()}cycleTheme(){this.currentPaletteIndex=(this.currentPaletteIndex+1)%ql.length;const t=ql[this.currentPaletteIndex];document.documentElement.style.setProperty("--color-amber-glow",t.primary),this.onShowToast?.(`Dashboard HUD Palette: ${t.name}`),this.audio?.playChirp()}}class X_{constructor(t={}){this.onToggleCamera=t.onToggleCamera,this.onToggleHyperdrive=t.onToggleHyperdrive,this.touchInput={thrust:0,strafe:0,pitch:0,yaw:0,boost:!1},this._gamepadConnected=!1,this._prevButtons={},this._initGamepadListeners(),this._initTouchUI()}_initGamepadListeners(){window.addEventListener("gamepadconnected",()=>{this._gamepadConnected=!0}),window.addEventListener("gamepaddisconnected",()=>{this._gamepadConnected=!1})}_initTouchUI(){if(!("ontouchstart"in window||navigator.maxTouchPoints>0))return;const e=document.createElement("div");e.id="mobile-flight-controls",e.className="mobile-controls-layer",e.innerHTML=`
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
    `,document.body.appendChild(e),this._bindTouchStick(e.querySelector("#touch-stick-left"),e.querySelector("#knob-left"),(r,a)=>{this.touchInput.yaw=r,this.touchInput.pitch=-a}),this._bindTouchStick(e.querySelector("#touch-stick-right"),e.querySelector("#knob-right"),(r,a)=>{this.touchInput.strafe=r,this.touchInput.thrust=-a});const n=e.querySelector("#btn-touch-boost");n?.addEventListener("touchstart",r=>{r.preventDefault(),this.touchInput.boost=!0,n.classList.add("active")}),n?.addEventListener("touchend",r=>{r.preventDefault(),this.touchInput.boost=!1,n.classList.remove("active")}),e.querySelector("#btn-touch-cam")?.addEventListener("touchstart",r=>{r.preventDefault(),this.onToggleCamera?.()})}_bindTouchStick(t,e,n){if(!t||!e)return;let s=null,r=0,a=0;const o=45;t.addEventListener("touchstart",h=>{if(s!==null)return;s=h.changedTouches[0].identifier;const d=t.getBoundingClientRect();r=d.left+d.width/2,a=d.top+d.height/2});const l=h=>{for(let u=0;u<h.changedTouches.length;u++){const d=h.changedTouches[u];if(d.identifier===s){const p=d.clientX-r,g=d.clientY-a,_=Math.sqrt(p*p+g*g),m=Math.min(_,o),f=Math.atan2(g,p),x=Math.cos(f)*m,v=Math.sin(f)*m;e.style.transform=`translate(${x}px, ${v}px)`,n(x/o,v/o)}}},c=h=>{for(let u=0;u<h.changedTouches.length;u++)h.changedTouches[u].identifier===s&&(s=null,e.style.transform="translate(0px, 0px)",n(0,0))};window.addEventListener("touchmove",l,{passive:!0}),window.addEventListener("touchend",c,{passive:!0}),window.addEventListener("touchcancel",c,{passive:!0})}poll(){const t={thrust:this.touchInput.thrust,strafe:this.touchInput.strafe,pitch:this.touchInput.pitch,yaw:this.touchInput.yaw,boost:this.touchInput.boost},n=(navigator.getGamepads?navigator.getGamepads():[])[0];if(n&&n.connected){const r=g=>Math.abs(g)<.12?0:g,a=r(n.axes[0]??0),o=r(n.axes[1]??0),l=r(n.axes[2]??0),c=r(n.axes[3]??0);a!==0&&(t.yaw=a),o!==0&&(t.pitch=-o),l!==0&&(t.strafe=l),c!==0&&(t.thrust=-c);const h=n.buttons[0]?.pressed,u=n.buttons[1]?.pressed,d=n.buttons[3]?.pressed,p=n.buttons[7]?.pressed;(h||p)&&(t.boost=!0),u&&(t.thrust=-1),d&&!this._prevButtons.btnY&&this.onToggleCamera?.(),this._prevButtons.btnY=d}return t}}function K_(i,t,e=12,n=1){if(i<=0||t<=0||n<=0)return{altitudeKm:0,inAtmosphere:!1,normalizedAltitude:1,densityFraction:0,pressureAtm:0};const s=Math.max(i-t,0),r=e*8.5;if(s>=r)return{altitudeKm:s,inAtmosphere:!1,normalizedAltitude:1,densityFraction:0,pressureAtm:0};const a=Math.exp(-s/Math.max(e,1)),o=n*a,l=Math.min(Math.max(s/r,0),1);return{altitudeKm:s,inAtmosphere:a>1e-4,normalizedAltitude:l,densityFraction:a,pressureAtm:o}}function Y_(i,t,e=18){if(t<=1e-4||i<=1)return{heatIntensity:0,dragForce:0,plasmaColor:"#ff7733",turbulenceShake:0};const n=.5*t*i**2,r=Math.max(i-e,0)/60*Math.sqrt(t)*1.5,a=Math.min(Math.max(r,0),1),l=Math.min(n*.08,i*.9);let c="#ff6a2b";a>.75?c="#aae8ff":a>.45&&(c="#ffd066");const h=a*.035+n*8e-4;return{heatIntensity:a,dragForce:l,plasmaColor:c,turbulenceShake:Math.min(h,.08)}}const j_=4.5;function $_(i,t,e,n=45,s=.12){const r=[];let a=i.x,o=i.y,l=i.z,c=t.x,h=t.y,u=t.z;r.push({x:a,y:o,z:l,speed:Math.sqrt(c*c+h*h+u*u)});const d=e?e.length:0;for(let p=0;p<n;p++){let g=0,_=0,m=0;for(let f=0;f<d;f++){const x=e[f],v=x.position.x-a,y=x.position.y-o,R=x.position.z-l,w=v*v+y*y+R*R,A=Math.sqrt(w),N=Math.max(x.safeRadius*.8,.15);if(A<N)return r;const b=j_*(x.mass||1)/(w+.08),O=1/A;g+=v*O*b,_+=y*O*b,m+=R*O*b}c+=g*s,h+=_*s,u+=m*s,a+=c*s,o+=h*s,l+=u*s,r.push({x:a,y:o,z:l,speed:Math.sqrt(c*c+h*h+u*u)})}return r}class Z_{constructor(){this._ctx=null,this._muted=!1,this._nodes={},this._available=!1}init(){if(this._ctx)return;const t=window.AudioContext||window.webkitAudioContext;if(!t){console.warn("[SoundSynthesizer] Web Audio API unavailable; running muted."),this._available=!1;return}try{this._ctx=new t,this._available=!0,this._buildAmbientDrone(),this._buildEngineHum()}catch(e){console.warn("[SoundSynthesizer] Failed to initialize audio:",e),this._available=!1}}_buildAmbientDrone(){const t=this._ctx,e=t.createGain();e.gain.value=.05,e.connect(t.destination);const n=t.createOscillator();n.type="sine",n.frequency.value=96;const s=t.createOscillator();s.type="sine",s.frequency.value=96.6,n.connect(e),s.connect(e),n.start(),s.start(),this._nodes.ambient={gain:e,osc1:n,osc2:s}}_buildEngineHum(){const t=this._ctx,e=t.createGain();e.gain.value=0,e.connect(t.destination);const n=t.createOscillator();n.type="triangle",n.frequency.value=60,n.connect(e),n.start(),this._nodes.hum={gain:e,osc:n}}setEngineIntensity(t){if(!this._available||!this._nodes.hum)return;const e=J_(t),n=this._ctx.currentTime;this._nodes.hum.gain.gain.setTargetAtTime(this._muted?0:e*.08,n,.15),this._nodes.hum.osc.frequency.setTargetAtTime(60+e*140,n,.2)}playChirp(){if(!this._available||this._muted)return;const t=this._ctx,e=t.currentTime,n=t.createOscillator(),s=t.createGain();n.type="sine",n.frequency.setValueAtTime(660,e),n.frequency.exponentialRampToValueAtTime(880,e+.12),s.gain.setValueAtTime(.001,e),s.gain.exponentialRampToValueAtTime(.06,e+.02),s.gain.exponentialRampToValueAtTime(1e-4,e+.35),n.connect(s),s.connect(t.destination),n.start(e),n.stop(e+.4)}setMuted(t){if(this._muted=!!t,!this._available)return;const e=this._ctx.currentTime;this._nodes.ambient?.gain.gain.setTargetAtTime(this._muted?0:.05,e,.2),this._muted&&this._nodes.hum?.gain.gain.setTargetAtTime(0,e,.2)}dispose(){if(this._ctx){for(const t of Object.values(this._nodes))t.osc1?.stop?.(),t.osc2?.stop?.(),t.osc?.stop?.();this._ctx.close?.(),this._ctx=null,this._available=!1}}}function J_(i){return Number.isFinite(i)?Math.min(Math.max(i,0),1):0}const ts=[{id:"lofi-cabin",name:"Station 1: Cozy Cabin Lo-Fi",frequency:"88.4 FM",genre:"Warm Generative Chords"},{id:"deep-space",name:"Station 2: Deep Space Resonance",frequency:"94.2 FM",genre:"Sub-Harmonic Drone Pad"},{id:"pulsar-radio",name:"Station 3: Cosmic Frequencies",frequency:"107.9 FM",genre:"Pulsar Rhythms & Solar Wind"}],Xl=[[130.81,164.81,196,246.94],[110,130.81,164.81,196],[146.83,174.61,220,261.63],[98,123.47,146.83,196],[123.47,155.56,185,220],[174.61,220,261.63,329.63]];class Q_{constructor(t=null){this._ctx=t,this.currentStationIndex=0,this.isPlaying=!1,this.volume=.65,this._masterGain=null,this._nodes=[],this._stepTimer=null,this._stepCounter=0}setContext(t){this._ctx=t}togglePower(){return this.isPlaying?(this.stop(),!1):(this.start(),!0)}start(){this._ctx&&(this._ctx.state==="suspended"&&this._ctx.resume(),this.isPlaying=!0,this._buildStationAudio())}stop(){this.isPlaying=!1,this._stepTimer&&(clearInterval(this._stepTimer),this._stepTimer=null),this._cleanupNodes()}setStation(t){return this.currentStationIndex=(t+ts.length)%ts.length,this.isPlaying&&this._buildStationAudio(),ts[this.currentStationIndex]}tuneNext(){return this.setStation(this.currentStationIndex+1)}tunePrev(){return this.setStation(this.currentStationIndex-1)}getCurrentStation(){return ts[this.currentStationIndex]}setVolume(t){this.volume=Math.min(Math.max(t,0),1),this._masterGain&&this._ctx&&this._masterGain.gain.setTargetAtTime(this.volume*.12,this._ctx.currentTime,.05)}_cleanupNodes(){if(this._nodes)for(const t of this._nodes)try{t.stop&&t.stop(),t.disconnect&&t.disconnect()}catch{}this._nodes=[]}_buildStationAudio(){if(!this._ctx||!this.isPlaying)return;this._cleanupNodes(),this._stepTimer&&clearInterval(this._stepTimer);const t=this._ctx;this._masterGain=t.createGain(),this._masterGain.gain.value=this.volume*.12,this._masterGain.connect(t.destination),this._nodes.push(this._masterGain);const e=ts[this.currentStationIndex];e.id==="lofi-cabin"?this._startLofiStation(t):e.id==="deep-space"?this._startDeepSpaceDrone(t):e.id==="pulsar-radio"&&this._startPulsarRadio(t)}_startLofiStation(t){const e=()=>{if(!this.isPlaying||!this._ctx)return;const n=this._stepCounter%Xl.length;this._stepCounter++;const s=Xl[n],r=t.currentTime,a=t.createBiquadFilter();a.type="lowpass",a.frequency.setValueAtTime(650,r),a.connect(this._masterGain);for(let o=0;o<s.length;o++){const l=t.createOscillator(),c=t.createGain();l.type=o===0?"triangle":"sine",l.frequency.setValueAtTime(s[o],r),c.gain.setValueAtTime(.001,r),c.gain.linearRampToValueAtTime(.035,r+.8),c.gain.exponentialRampToValueAtTime(1e-4,r+3.9),l.connect(c),c.connect(a),l.start(r),l.stop(r+4)}};e(),this._stepTimer=setInterval(e,4e3)}_startDeepSpaceDrone(t){const e=t.createBiquadFilter();e.type="lowpass",e.frequency.setValueAtTime(280,t.currentTime),e.connect(this._masterGain),[55,82.41,110].forEach((s,r)=>{const a=t.createOscillator(),o=t.createGain();a.type="sine",a.frequency.value=s+r*.35,o.gain.value=.045/(r+1),a.connect(o),o.connect(e),a.start(),this._nodes.push(a,o)})}_startPulsarRadio(t){const e=t.currentTime,n=t.createOscillator(),s=t.createStereoPanner?t.createStereoPanner():null,r=t.createGain();n.type="sawtooth",n.frequency.setValueAtTime(420,e);const a=t.createOscillator();a.type="square",a.frequency.setValueAtTime(3.2,e);const o=t.createGain();o.gain.value=.03,a.connect(o.gain),r.gain.value=.025,n.connect(r),s?(r.connect(s),s.connect(this._masterGain),this._nodes.push(s)):r.connect(this._masterGain),n.start(),a.start(),this._nodes.push(n,a,r,o)}}function tv(i,{maxResults:t=8}={}){const e=String(i??"").trim();if(!e)return[];const n=og(e,Tn).map(r=>({id:r.id,name:r.name,kind:"celestial",subtitle:r.location})),s=dg(e).map(r=>({id:r.id,name:r.name,kind:"satellite",subtitle:`${r.agency} · ${r.status}`}));return[...n,...s].slice(0,Math.max(0,t))}class ev{constructor(t,e,n={}){if(!t)throw new Error("NavigationSearch requires a root element");this.root=t,this.store=e,this._onSelect=n.onSelect??(()=>{}),this._results=[],this._activeIndex=-1,this._render(),this._bindEvents(),this._unsubscribe=e.subscribe(s=>this._updateModeButton(s),s=>s.flightMode)}_render(){this.root.innerHTML=`
      <div class="nav-search" role="search">
        <label class="visually-hidden" for="search-input">Search an astronomical object or satellite</label>
        <input id="search-input" class="nav-search-input" type="text" autocomplete="off"
               placeholder="Search a planet, star, galaxy, or satellite…" />
        <button type="button" class="mode-toggle" title="Toggle autopilot / manual flight mode">
          Autopilot
        </button>
        <ul class="nav-search-results" hidden></ul>
      </div>
    `,this._input=this.root.querySelector(".nav-search-input"),this._resultsEl=this.root.querySelector(".nav-search-results"),this._modeButton=this.root.querySelector(".mode-toggle")}_bindEvents(){this._input.addEventListener("input",()=>this._handleInput()),this._input.addEventListener("keydown",t=>this._handleKeydown(t)),this._modeButton.addEventListener("click",()=>this._toggleMode()),document.addEventListener("click",t=>{this.root.contains(t.target)||this._closeResults()})}_handleInput(){const t=this._input.value;this.store.dispatch(kt.setSearchQuery(t));try{this._results=tv(t)}catch(e){console.error("[NavigationSearch] search failed:",e),this._results=[]}this._activeIndex=this._results.length>0?0:-1,this._renderResults()}_handleKeydown(t){if(this._results.length!==0)if(t.key==="ArrowDown")t.preventDefault(),this._activeIndex=(this._activeIndex+1)%this._results.length,this._renderResults();else if(t.key==="ArrowUp")t.preventDefault(),this._activeIndex=(this._activeIndex-1+this._results.length)%this._results.length,this._renderResults();else if(t.key==="Enter"){t.preventDefault();const e=this._results[this._activeIndex]??this._results[0];e&&this._selectResult(e)}else t.key==="Escape"&&this._closeResults()}_renderResults(){if(this._results.length===0){this._resultsEl.hidden=!0,this._resultsEl.innerHTML="";return}this._resultsEl.hidden=!1,this._resultsEl.innerHTML=this._results.map((t,e)=>`
        <li role="option" data-index="${e}" class="nav-result ${e===this._activeIndex?"active":""}">
          <span class="nav-result-name">${Kl(t.name)}</span>
          <span class="nav-result-sub">${Kl(t.subtitle)}</span>
        </li>`).join(""),this._resultsEl.querySelectorAll(".nav-result").forEach(t=>{t.addEventListener("click",()=>{const e=Number(t.getAttribute("data-index")),n=this._results[e];n&&this._selectResult(n)})})}_selectResult(t){this._input.value=t.name,this._closeResults(),this._onSelect(t)}_closeResults(){this._results=[],this._activeIndex=-1,this._resultsEl.hidden=!0,this._resultsEl.innerHTML=""}_toggleMode(){const e=this.store.getState().flightMode===on.AUTOPILOT?on.MANUAL:on.AUTOPILOT;this.store.dispatch(kt.setFlightMode(e))}_updateModeButton(t){const e=t===on.MANUAL;this._modeButton.textContent=e?"Manual":"Autopilot",this._modeButton.classList.toggle("mode-manual",e),this._modeButton.setAttribute("aria-label",e?"Switch to autopilot flight":"Switch to manual, hand-flown navigation")}dispose(){this._unsubscribe?.()}}function Kl(i){const t=document.createElement("div");return t.textContent=i??"",t.innerHTML}const Yn=Object.freeze({EARTH_LIKE:"Directly Habitable",DOME_REQUIRED:"Dome Settlement Required",SUBTERRANEAN:"Subterranean / Radiation-Shielded Base",EXTREME_TERRAFORMING:"Extreme Terraforming Required",GAS_OUTPOST:"Gas Giant Cloud Outpost Only",UNINHABITABLE:"Uninhabitable"});function Kc(i){const{surfaceTempC:t=-273,atmosphericPressureAtm:e=0,surfaceGravityG:n=0,radiationIndex:s=10,hasLiquidWater:r=!1,isGasGiant:a=!1}=i??{};if(a)return{score:2,classification:Yn.GAS_OUTPOST,factors:{temperature:0,pressure:0,gravity:0,radiation:0,water:0}};const o=la(t,-10,35,60),l=la(e,.5,1.5,.6),c=la(n,.6,1.4,.5),h=Da(1-cr(s,10)/10),u=r?1:0,d=o*.3+l*.2+c*.15+h*.2+u*.15,p=Math.round(Da(d)*100);return{score:p,classification:nv(p,{atmosphericPressureAtm:e,radiationIndex:s}),factors:{temperature:o,pressure:l,gravity:c,radiation:h,water:u}}}function nv(i,{atmosphericPressureAtm:t,radiationIndex:e}){return i>=75?Yn.EARTH_LIKE:i>=45?Yn.DOME_REQUIRED:cr(e,10)>=6||cr(t,0)<.01?i>=15?Yn.SUBTERRANEAN:Yn.UNINHABITABLE:i>=15?Yn.EXTREME_TERRAFORMING:Yn.UNINHABITABLE}function la(i,t,e,n){const s=cr(i,t-n);if(s>=t&&s<=e)return 1;const r=s<t?t-s:s-e,a=Math.max(n,1e-6);return Da(Math.exp(-((r/a)**2)))}function Da(i){return Number.isFinite(i)?Math.min(Math.max(i,0),1):0}function cr(i,t){return Number.isFinite(i)?i:t}function iv(i){const t=Object.entries(i??{}).filter(([,n])=>Number.isFinite(n)&&n>0),e=t.reduce((n,[,s])=>n+s,0);return e<=0?[]:t.map(([n,s])=>({gas:n,percent:Math.round(s/e*1e3)/10})).sort((n,s)=>s.percent-n.percent)}class sv{constructor(t,e){if(!t)throw new Error("DetailPanel requires a root element");this.root=t,this.store=e,this._currentId=null,this._unsubscribers=[e.subscribe(()=>this._render(),n=>`${n.selectedObject}|${n.ui.isDetailPanelOpen}`)],this._render()}show(t){this._currentId=t,this.store.dispatch(kt.selectObject(t)),this.store.dispatch(kt.toggleDetailPanel(!0))}close(){this.store.dispatch(kt.toggleDetailPanel(!1))}_render(){const t=this.store.getState();if(!t.ui.isDetailPanelOpen){this.root.innerHTML="",this.root.hidden=!0;return}const e=this._currentId??t.selectedObject,n=Ci(e),s=n?null:Qs(e);if(!n&&!s){this.root.innerHTML=`
        <div class="detail-panel empty">
          <p>Search for a world, star, galaxy, or satellite to see its story here.</p>
        </div>`,this.root.hidden=!1;return}this.root.hidden=!1,this.root.innerHTML=n?this._renderCelestial(n):this._renderSatellite(s),this.root.querySelector(".detail-close")?.addEventListener("click",()=>this.close()),this.root.querySelector('[data-action="open-habitability"]')?.addEventListener("click",()=>{this.store.dispatch(kt.toggleHabitability(!0))})}_renderCelestial(t){let e;try{e=Kc(t.environment)}catch(a){console.error("[DetailPanel] habitability calc failed:",a),e={score:0,classification:"Unknown",factors:{}}}let n;try{n=b_(t.distanceFromEarthKm)}catch(a){console.error("[DetailPanel] travel calc failed:",a),n=null}const s=iv(t.environment.composition),r=e.score>=45;return`
      <div class="detail-panel">
        <button type="button" class="detail-close" aria-label="Close details">&times;</button>
        <h2 class="detail-title">${Ee(t.name)}</h2>
        <p class="detail-description">${Ee(t.description)}</p>

        <dl class="detail-fields">
          <div><dt>Location</dt><dd>${Ee(t.location)}</dd></div>
          <div><dt>Galaxy</dt><dd>${Ee(t.galaxy)}</dd></div>
          <div><dt>Solar system</dt><dd>${Ee(t.solarSystem??"Not applicable")}</dd></div>
          <div><dt>Distance from Earth</dt><dd>${Ee(Vl(t.distanceFromEarthKm))}</dd></div>
          <div><dt>Time to reach it</dt><dd>${n?Ee(os(n.relativistic999c.seconds))+" at 0.999c":"Unknown"}</dd></div>
          <div><dt>Habitable?</dt><dd class="${r?"yes":"no"}">${r?`Yes — ${e.classification}`:`No — ${e.classification}`}</dd></div>
          <div class="atmosphere-field"><dt>Atmosphere</dt><dd>${this._renderAtmosphere(s)}</dd></div>
        </dl>

        ${n?this._renderTravelBreakdown(n):""}

        <button type="button" class="detail-habitability-score" data-action="open-habitability">
          <span>Habitability score</span>
          <div class="score-bar"><div class="score-bar-fill" style="width:${e.score}%"></div></div>
          <span>${e.score}%</span>
        </button>
      </div>
    `}_renderSatellite(t){return`
      <div class="detail-panel">
        <button type="button" class="detail-close" aria-label="Close details">&times;</button>
        <h2 class="detail-title">${Ee(t.name)}</h2>
        <p class="detail-description">${Ee(t.description)}</p>
        <dl class="detail-fields">
          <div><dt>Agency</dt><dd>${Ee(t.agency)}</dd></div>
          <div><dt>Launched</dt><dd>${Ee(String(t.launchYear))}</dd></div>
          <div><dt>Status</dt><dd>${Ee(t.status)}</dd></div>
          <div><dt>Purpose</dt><dd>${Ee(t.purpose)}</dd></div>
          <div><dt>Current location</dt><dd>${Ee(t.location)}</dd></div>
          <div><dt>Distance from Earth</dt><dd>${Ee(Vl(t.distanceFromEarthKm))}</dd></div>
        </dl>
      </div>
    `}_renderAtmosphere(t){return t.length===0?'<span class="no-atmosphere">No meaningful atmosphere</span>':`<ul class="atmosphere-list">${t.map(e=>`<li><span>${Ee(e.gas)}</span><span>${e.percent}%</span></li>`).join("")}</ul>`}_renderTravelBreakdown(t){return`
      <div class="travel-breakdown">
        <h3>How long would it take?</h3>
        <ul>
          ${[t.lightSpeed,t.relativistic999c,t.fusionDrive01c,t.chemicalRocket].map(n=>`<li><span>${Ee(n.label)}</span><span>${Ee(os(n.seconds))}</span></li>`).join("")}
        </ul>
      </div>
    `}dispose(){this._unsubscribers.forEach(t=>t())}}function Ee(i){const t=document.createElement("div");return t.textContent=i??"",t.innerHTML}const rv={temperature:"Temperature",pressure:"Atmospheric pressure",gravity:"Surface gravity",radiation:"Radiation shielding",water:"Liquid water"};class av{constructor(t,e){if(!t)throw new Error("HabitabilityMatrix requires a root element");this.root=t,this.store=e,this._unsubscribe=e.subscribe(()=>this._render(),n=>`${n.selectedObject}|${n.ui.isHabitabilityOpen}`),this._render()}_render(){const t=this.store.getState();if(!t.ui.isHabitabilityOpen){this.root.innerHTML="",this.root.hidden=!0;return}const e=Ci(t.selectedObject);if(!e){this.root.hidden=!0;return}let n;try{n=Kc(e.environment)}catch(s){console.error("[HabitabilityMatrix] compute failed:",s),this.root.hidden=!0;return}this.root.hidden=!1,this.root.innerHTML=`
      <div class="habitability-matrix">
        <button type="button" class="matrix-close" aria-label="Close habitability breakdown">&times;</button>
        <h3>Habitability breakdown — ${ca(e.name)}</h3>
        <p class="matrix-classification">${ca(n.classification)}</p>
        <ul class="matrix-factors">
          ${Object.entries(n.factors).map(([s,r])=>`
              <li>
                <span class="factor-label">${ca(rv[s]??s)}</span>
                <div class="factor-bar"><div class="factor-bar-fill" style="width:${Math.round(r*100)}%"></div></div>
              </li>`).join("")}
        </ul>
      </div>
    `,this.root.querySelector(".matrix-close")?.addEventListener("click",()=>{this.store.dispatch(kt.toggleHabitability(!1))})}dispose(){this._unsubscribe?.()}}function ca(i){const t=document.createElement("div");return t.textContent=i??"",t.innerHTML}class ov{constructor(t,e,n={}){if(!t)throw new Error("SatelliteList requires a root element");this.root=t,this.store=e,this._onSelect=n.onSelect??(()=>{}),this._unsubscribe=e.subscribe(s=>this._render(s),s=>s.ui.isSatelliteListOpen),this._render(e.getState().ui.isSatelliteListOpen)}toggle(t){this.store.dispatch(kt.toggleSatelliteList(t))}_render(t){if(!t){this.root.innerHTML="",this.root.hidden=!0;return}this.root.hidden=!1,this.root.innerHTML=`
      <div class="satellite-list">
        <div class="satellite-list-header">
          <h3>Launched satellites &amp; probes</h3>
          <button type="button" class="satellite-list-close" aria-label="Close satellite list">&times;</button>
        </div>
        <ul>
          ${wn.map(e=>`
            <li class="satellite-item" data-id="${e.id}">
              <span class="satellite-name">${ua(e.name)}</span>
              <span class="satellite-meta">${ua(e.agency)} · ${e.launchYear} · ${ua(e.status)}</span>
            </li>`).join("")}
        </ul>
      </div>
    `,this.root.querySelector(".satellite-list-close")?.addEventListener("click",()=>this.toggle(!1)),this.root.querySelectorAll(".satellite-item").forEach(e=>{e.addEventListener("click",()=>this._onSelect(e.getAttribute("data-id")))})}dispose(){this._unsubscribe?.()}}function ua(i){const t=document.createElement("div");return t.textContent=i??"",t.innerHTML}class lv{constructor(t,e){if(!t)throw new Error("CompassArrow requires a root element");this.root=t,this.store=e,this._render(),this._unsubscribe=e.subscribe(n=>this._setVisible(n===on.MANUAL),n=>n.flightMode),this._setVisible(e.getState().flightMode===on.MANUAL)}_render(){this.root.innerHTML=`
      <div class="compass-arrow" hidden>
        <svg viewBox="0 0 64 64" class="compass-svg" aria-hidden="true">
          <circle cx="32" cy="32" r="28" class="compass-ring" />
          <polygon points="32,10 40,40 32,32 24,40" class="compass-needle" />
        </svg>
        <span class="compass-distance">—</span>
        <span class="compass-hint">Fly toward the arrow</span>
      </div>
    `,this._arrowEl=this.root.querySelector(".compass-arrow"),this._needleEl=this.root.querySelector(".compass-needle"),this._distanceEl=this.root.querySelector(".compass-distance")}_setVisible(t){this._arrowEl&&(this._arrowEl.hidden=!t)}update(t){if(!t||!this._needleEl)return;const e=Math.atan2(t.directionToTarget.x,-t.directionToTarget.z)*(180/Math.PI);this._needleEl.setAttribute("transform",`rotate(${e} 32 32)`),this._needleEl.classList.toggle("aligned",t.aligned),this._distanceEl.textContent=`${t.distance.toFixed(1)} flight units`}dispose(){this._unsubscribe?.()}}const Zs=[ie.COCKPIT,ie.THIRD_PERSON,ie.CINEMATIC],cv={[ie.COCKPIT]:"Cockpit",[ie.THIRD_PERSON]:"3rd Person",[ie.CINEMATIC]:"Cinematic"};class uv{constructor(t,e,n={}){if(!t)throw new Error("ViewSwitcher requires a root element");this.root=t,this.store=e,this.onToggleRadio=n.onToggleRadio,this._render(),this._unsubscribe=e.subscribe(({mode:s,constellations:r})=>{this._highlight(s),this._highlightConstellations(r)},s=>({mode:s.cameraMode,constellations:s.ui.constellationsVisible})),this._highlight(e.getState().cameraMode)}_render(){this.root.innerHTML=`
      <div class="view-switcher-container">
        <div class="view-switcher" role="group" aria-label="Camera view">
          ${Zs.map(t=>`<button type="button" class="view-btn" data-mode="${t}">${cv[t]}</button>`).join("")}
        </div>

        <div class="quick-tools-bar" role="group" aria-label="Exploration Tools">
          <button type="button" class="tool-btn" id="btn-toggle-constellations" title="Toggle Constellation Star Charts (O)">✨ Charts</button>
          <button type="button" class="tool-btn" id="btn-toggle-photo" title="Open Photo Studio (P)">📷 Photo</button>
          <button type="button" class="tool-btn" id="btn-toggle-logbook" title="Expedition Journal (L)">📖 Journal</button>
          <button type="button" class="tool-btn" id="btn-toggle-radio" title="Space Radio (R)">📻 Radio</button>
        </div>
      </div>
    `,this.root.querySelectorAll(".view-btn").forEach(t=>{t.addEventListener("click",()=>{this.store.dispatch(kt.setCameraMode(t.getAttribute("data-mode")))})}),this.root.querySelector("#btn-toggle-constellations")?.addEventListener("click",()=>{this.store.dispatch(kt.toggleConstellations())}),this.root.querySelector("#btn-toggle-photo")?.addEventListener("click",()=>{this.store.dispatch(kt.togglePhotoMode(!0))}),this.root.querySelector("#btn-toggle-logbook")?.addEventListener("click",()=>{this.store.dispatch(kt.toggleLogbook(!0))}),this.root.querySelector("#btn-toggle-radio")?.addEventListener("click",()=>{this.onToggleRadio?.()})}cycle(){const t=this.store.getState().cameraMode,e=Zs.indexOf(t),n=Zs[(e+1)%Zs.length];this.store.dispatch(kt.setCameraMode(n))}_highlight(t){this.root.querySelectorAll(".view-btn").forEach(e=>{e.classList.toggle("active",e.getAttribute("data-mode")===t)})}_highlightConstellations(t){const e=this.root.querySelector("#btn-toggle-constellations");e&&e.classList.toggle("active",!!t)}dispose(){this._unsubscribe?.()}}class hv{constructor(t,e,n={}){if(!t)throw new Error("TelemetryHUD requires a root element");this.root=t,this.store=e,this._onToggleHyperdrive=n.onToggleHyperdrive??(()=>{}),this._onZoomIn=n.onZoomIn??(()=>{}),this._onZoomOut=n.onZoomOut??(()=>{}),this._render(),this._unsubscribe=e.subscribe(s=>this._update(s),s=>s.flightTelemetry)}_render(){this.root.innerHTML=`
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
          <div class="zoom-controls" role="group" aria-label="Camera Zoom">
            <button type="button" class="zoom-btn" data-action="zoom-in" title="Zoom In (+)">+</button>
            <button type="button" class="zoom-btn" data-action="zoom-out" title="Zoom Out (-)">−</button>
          </div>
        </div>
      </div>
    `,this._els={speed:this.root.querySelector('[data-field="speed"]'),eta:this.root.querySelector('[data-field="eta"]'),shipTime:this.root.querySelector('[data-field="ship-time"]'),earthTime:this.root.querySelector('[data-field="earth-time"]'),driveStatus:this.root.querySelector('[data-field="drive-status"]'),driveBadge:this.root.querySelector(".drive-status-badge")},this._els.driveBadge?.addEventListener("click",()=>{this._onToggleHyperdrive()}),this.root.querySelector('[data-action="zoom-in"]')?.addEventListener("click",()=>{this._onZoomIn()}),this.root.querySelector('[data-action="zoom-out"]')?.addEventListener("click",()=>{this._onZoomOut()})}updateDriveMode(t){!this._els.driveStatus||!this._els.driveBadge||(this._els.driveStatus.textContent=t?"Hyperdrive":"Sublight",this._els.driveBadge.classList.toggle("hyperdrive-active",!!t))}_update(t){t&&(this._els.speed.textContent=`${t.currentSpeedC.toFixed(3)}c`,this._els.eta.textContent=t.etaSeconds>0?os(t.etaSeconds):"—",this._els.shipTime.textContent=os(t.timeDilationShipSec),this._els.earthTime.textContent=os(t.timeDilationEarthSec))}dispose(){this._unsubscribe?.()}}class dv{constructor(t,{range:e=20}={}){if(!t)throw new Error("RadarCanvas requires a root element");this.root=t,this.range=e,this.root.innerHTML='<canvas class="radar-canvas" width="140" height="140" aria-label="Radar"></canvas>',this.canvas=this.root.querySelector("canvas"),this.ctx=this.canvas.getContext("2d")}render(t,e,n){const s=this.ctx;if(!s)return;const{width:r,height:a}=this.canvas,o=r/2,l=a/2,c=(r/2-8)/this.range;s.clearRect(0,0,r,a),s.fillStyle="rgba(20, 18, 30, 0.55)",s.beginPath(),s.arc(o,l,r/2-2,0,Math.PI*2),s.fill(),s.strokeStyle="rgba(255, 220, 180, 0.25)",s.beginPath(),s.arc(o,l,r/2-2,0,Math.PI*2),s.stroke();for(const h of n??[]){const u=h.x-t.x,d=h.z-t.z,p=fv(u,d,-e),g=o+p.x*c,_=l+p.y*c;Math.hypot(g-o,_-l)>r/2-4||(s.fillStyle=h.color??"#ffd27a",s.beginPath(),s.arc(g,_,2.5,0,Math.PI*2),s.fill())}s.fillStyle="#fff6e6",s.beginPath(),s.moveTo(o,l-5),s.lineTo(o-4,l+4),s.lineTo(o+4,l+4),s.closePath(),s.fill()}}function fv(i,t,e){const n=Math.cos(e),s=Math.sin(e);return{x:i*n-t*s,y:i*s+t*n}}const Yl=[{id:"natural",name:"Natural",css:"none"},{id:"cozy-film",name:"Cozy Film",css:"sepia(0.25) contrast(1.1) brightness(1.05) saturate(1.15)"},{id:"deep-space",name:"Deep Cosmos",css:"contrast(1.25) brightness(0.95) saturate(1.3) hue-rotate(10deg)"},{id:"retro-amber",name:"Retro Amber",css:"sepia(0.65) saturate(1.4) hue-rotate(-15deg)"},{id:"cyberpunk",name:"Cyberpunk Neon",css:"contrast(1.3) saturate(1.7) hue-rotate(180deg)"}];class pv{constructor(t,e,n){this.root=t,this.store=e,this.canvas=n.canvas,this.camera=n.camera,this.onShowToast=n.onShowToast,this.activeFilterIndex=0,this.savedFov=this.camera?.fov??60,this.isOpen=!1,this._render(),this._wireEvents(),this.store.subscribe(s=>this._onStateChange(s),s=>s.ui.isPhotoModeOpen)}_render(){this.root.innerHTML=`
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
              ${Yl.map((t,e)=>`
                <button type="button" class="photo-filter-btn ${e===0?"active":""}" data-idx="${e}">
                  ${t.name}
                </button>
              `).join("")}
            </div>
          </div>

          <div class="photo-actions">
            <button type="button" id="photo-snap-btn" class="photo-btn-primary">📸 Capture Snapshot</button>
            <button type="button" id="photo-close-btn" class="photo-btn-secondary">✕ Exit</button>
          </div>
        </div>
      </div>
    `}_wireEvents(){const t=this.root.querySelector("#photo-fov-slider"),e=this.root.querySelector("#photo-fov-val"),n=this.root.querySelector("#photo-snap-btn"),s=this.root.querySelector("#photo-close-btn"),r=this.root.querySelectorAll(".photo-filter-btn");t?.addEventListener("input",a=>{const o=Number(a.target.value);e&&(e.textContent=`${o}°`),this.camera&&(this.camera.fov=o,this.camera.updateProjectionMatrix())}),r.forEach(a=>{a.addEventListener("click",()=>{r.forEach(l=>l.classList.remove("active")),a.classList.add("active");const o=Number(a.getAttribute("data-idx"));this.setFilter(o)})}),n?.addEventListener("click",()=>this.capture()),s?.addEventListener("click",()=>this.close())}setFilter(t){this.activeFilterIndex=t;const e=Yl[t];this.canvas&&e&&(this.canvas.style.filter=e.css)}capture(){if(this.canvas)try{const t=this.canvas.toDataURL("image/png"),e=document.createElement("a");e.download=`cosmos-cabin-snapshot-${Date.now()}.png`,e.href=t,document.body.appendChild(e),e.click(),document.body.removeChild(e),this.onShowToast?.("📸 Snapshot saved to your downloads!")}catch(t){console.warn("[PhotoMode] Capture failed:",t),this.onShowToast?.("Couldn't save snapshot directly.")}}_onStateChange(t){this.isOpen=!!t;const e=this.root.querySelector("#photo-mode-overlay");e&&(e.hidden=!this.isOpen),this.isOpen?(this.savedFov=this.camera?.fov??60,this.store.dispatch(kt.toggleHud(!1))):(this.canvas&&(this.canvas.style.filter="none"),this.camera&&(this.camera.fov=this.savedFov,this.camera.updateProjectionMatrix()),this.store.dispatch(kt.toggleHud(!0)))}open(){this.store.dispatch(kt.togglePhotoMode(!0))}close(){this.store.dispatch(kt.togglePhotoMode(!1))}}const ha=[{id:"home-planet",name:"🌍 Home Base",desc:"Began journey from Earth orbit",condition:i=>i.some(t=>t.id==="earth")},{id:"lunar-reach",name:"🌕 Lunar Footsteps",desc:"Explored Earth's Moon",condition:i=>i.some(t=>t.id==="moon")},{id:"red-planet",name:"🔴 Red Sands",desc:"Traveled to Mars",condition:i=>i.some(t=>t.id==="mars")},{id:"gas-giant",name:"🪐 Ring & Storms",desc:"Visited Jupiter or Saturn",condition:i=>i.some(t=>t.id==="jupiter"||t.id==="saturn")},{id:"singularity",name:"🕳️ Event Horizon",desc:"Approached Sagittarius A*",condition:i=>i.some(t=>t.id==="sagittarius-a")},{id:"satellite-chaser",name:"🛰️ Spacecraft Historian",desc:"Located at least 2 historical satellites",condition:i=>i.filter(t=>t.kind==="satellite").length>=2}];class mv{constructor(t,e,n={}){this.root=t,this.store=e,this.onSelectTarget=n.onSelectTarget,this.activeFilter="all",this._render(),this._wireEvents(),this.store.subscribe(({isOpen:s})=>this._onStateChange(s),s=>({isOpen:s.ui.isLogbookOpen,discoveries:s.discoveries}))}_render(){this.root.innerHTML=`
      <div id="logbook-modal-backdrop" class="modal-backdrop" hidden>
        <div class="logbook-modal">
          <header class="logbook-header">
            <div class="logbook-title-group">
              <span class="logbook-icon">📖</span>
              <div>
                <h2>Expedition Journal</h2>
                <p class="logbook-sub">Your ship’s discovery chronicle across space and time</p>
              </div>
            </div>
            <button type="button" id="logbook-close-btn" class="modal-close-btn" aria-label="Close Journal">✕</button>
          </header>

          <section class="logbook-stats-bar">
            <div class="stat-card">
              <span class="stat-label">Worlds Discovered</span>
              <span id="logbook-stat-discovered" class="stat-value">1 / ${Tn.length+wn.length}</span>
            </div>
            <div class="stat-card">
              <span class="stat-label">Badges Unlocked</span>
              <span id="logbook-stat-badges" class="stat-value">1 / ${ha.length}</span>
            </div>
          </section>

          <section class="logbook-badges-section">
            <h3>Expedition Badges</h3>
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
      </div>
    `}_wireEvents(){const t=this.root.querySelector("#logbook-modal-backdrop"),e=this.root.querySelector("#logbook-close-btn"),n=this.root.querySelectorAll(".filter-chip");e?.addEventListener("click",()=>this.close()),t?.addEventListener("click",s=>{s.target===t&&this.close()}),n.forEach(s=>{s.addEventListener("click",()=>{n.forEach(r=>r.classList.remove("active")),s.classList.add("active"),this.activeFilter=s.getAttribute("data-filter")||"all",this._updateList()})})}_onStateChange(t){const e=this.root.querySelector("#logbook-modal-backdrop");e&&(e.hidden=!t),t&&this._updateContent()}_updateContent(){const e=this.store.getState().discoveries||[],n=this.root.querySelector("#logbook-stat-discovered");n&&(n.textContent=`${e.length} / ${Tn.length+wn.length}`);const s=this.root.querySelector("#logbook-badges-grid");if(s){let r=0;s.innerHTML=ha.map(o=>{const l=o.condition(e);return l&&r++,`
          <div class="badge-item ${l?"unlocked":"locked"}">
            <span class="badge-icon">${l?o.name.split(" ")[0]:"🔒"}</span>
            <div class="badge-info">
              <strong>${o.name}</strong>
              <p>${o.desc}</p>
            </div>
          </div>
        `}).join("");const a=this.root.querySelector("#logbook-stat-badges");a&&(a.textContent=`${r} / ${ha.length}`)}this._updateList()}_updateList(){const t=this.root.querySelector("#logbook-list");if(!t)return;const s=(this.store.getState().discoveries||[]).filter(r=>this.activeFilter==="all"?!0:this.activeFilter==="satellite"?r.kind==="satellite":r.kind!=="satellite");if(s.length===0){t.innerHTML='<div class="logbook-empty">No discoveries in this category yet. Take flight and explore the stars!</div>';return}t.innerHTML=s.map(r=>{const a=r.discoveredAt?new Date(r.discoveredAt).toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"}):"Initial";return`
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
        `}).join(""),t.querySelectorAll(".logbook-fly-btn").forEach(r=>{r.addEventListener("click",()=>{const a=r.getAttribute("data-id"),o=r.getAttribute("data-kind");a&&(this.close(),this.onSelectTarget?.(a,o))})})}open(){this.store.dispatch(kt.toggleLogbook(!0))}close(){this.store.dispatch(kt.toggleLogbook(!1))}}function gv({store:i,viewSwitcher:t,audio:e,onEngageWarp:n}){const s=document.querySelectorAll(".hud-layer"),r=c=>{s.forEach(h=>h.classList.toggle("hud-hidden",!c))},a=i.subscribe(c=>r(c),c=>c.ui.hudVisible);r(i.getState().ui.hudVisible);const o=i.subscribe(c=>e.setMuted(c),c=>c.ui.audioMuted),l=c=>{const h=c.target instanceof HTMLInputElement||c.target instanceof HTMLTextAreaElement;c.code==="KeyC"&&!h?t.cycle():c.code==="KeyM"&&!h?i.dispatch(kt.toggleAudioMuted()):c.code==="KeyH"&&!h?i.dispatch(kt.toggleHud()):c.code==="Escape"?(i.dispatch(kt.toggleDetailPanel(!1)),i.dispatch(kt.toggleHabitability(!1)),i.dispatch(kt.toggleSatelliteList(!1))):c.code==="Space"&&!h&&(c.preventDefault(),n?.())};return window.addEventListener("keydown",l),()=>{window.removeEventListener("keydown",l),a(),o()}}_v().catch(i=>Ev(i));async function _v(){if(Ei("Checking your ship’s systems…",10),!Bc())throw new Error("This browser can’t display 3D graphics (WebGL). Please try a recent version of Chrome, Firefox, Edge, or Safari.");const i=[...ug().errors,...mg().errors];if(i.length>0)throw console.error("[main] Celestial data validation failed:",i),new Error("The universe database failed to load correctly. Please refresh the page.");Ei("Assembling the cabin…",30);const t=document.getElementById("scene-canvas"),e=new rg,n=new X0({canvas:t,onContextLost:U=>ke(`Graphics paused: ${U} Trying to recover…`),onContextRestored:()=>ke("Graphics restored.")}),s=ng(n.renderer,n.scene,n.camera);n.onResize((U,L)=>s.resize(U,L)),Ei("Scattering stars across the sky…",50),n.scene.add(i_()),n.scene.add(new W0(3813456,.6));const r=new h_(n.scene);e.subscribe(U=>r.toggle(U),U=>U.ui.constellationsVisible);const a=new oe,o=new Ha({color:6482175,transparent:!0,opacity:.65,blending:ve}),l=new Cc(a,o);l.name="slingshot-trajectory",n.scene.add(l);const{celestialGroups:c,satelliteGroups:h}=vv(n);Ei("Warming up the engines…",75);const{ship:u,update:d,bobbleheadPhysics:p}=f_();n.scene.add(u);const g=c.get("earth")?.position??new C;u.position.copy(g).add(new C(0,.25,2.5)),u.userData.forward=new C(0,0,1),u.userData.velocity={x:0,y:0,z:0};const _=new x_(n.camera,u),m=new L_({scene:n.scene,ship:u,store:e}),f=new W_,x=new Z_,v=new Q_,y=new q_({camera:n.camera,shipGroup:u,audio:x,spaceRadio:v,bobbleheadProp:p,onEngageWarp:()=>b(),onShowToast:U=>ke(U)}),R=new X_({onToggleCamera:()=>{const U=e.getState().cameraMode,L=U===ie.COCKPIT?ie.THIRD_PERSON:U===ie.THIRD_PERSON?ie.CINEMATIC:ie.COCKPIT;e.dispatch(kt.setCameraMode(L))},onToggleHyperdrive:()=>{const U=f.toggleHyperdriveLock();ke(U?"Hyperdrive Locked ON":"Hyperdrive Disengaged")}});Ei("Opening the star charts…",90);const w=Sv(e,{canvas:t,camera:n.camera,onSearchSelect:U=>S(U.id,U.kind),onSatelliteSelect:U=>S(U,"satellite"),onToggleHyperdrive:()=>{const U=f.toggleHyperdriveLock();ke(U?"Hyperdrive Locked ON":"Hyperdrive Disengaged")},onZoomIn:()=>_.adjustZoom(-.2),onZoomOut:()=>_.adjustZoom(.2)}),A=document.getElementById("view-switcher-root"),N=new uv(A,e,{onToggleRadio:()=>{const U=v.togglePower();ke(U?`📻 ${v.getCurrentStation().name}`:"📻 Radio: OFF")}});gv({store:e,viewSwitcher:N,audio:x,onEngageWarp:()=>b()}),bv(n,u,f,x,v,_,e,y);function S(U,L){const D=L==="satellite"?h.get(U):c.get(U),G=D?.position;if(!G){ke("That object isn’t available to fly to right now.");return}const X=D?.userData?.safeRadius??1;e.dispatch(kt.setTarget(U)),e.dispatch(kt.selectObject(U)),x.playChirp(),e.getState().flightMode===on.MANUAL?(f.setTarget(G),ke("Follow the arrow to reach your destination.")):m.beginJump(u.position,G,O(U,L),()=>H(U),X)}function b(){const U=e.getState();if(!U.targetObject||U.flightMode!==on.AUTOPILOT||m.isActive)return;const L=c.get(U.targetObject)??h.get(U.targetObject),D=L?.position;if(!D)return;const G=L?.userData?.safeRadius??1;m.beginJump(u.position,D,O(U.targetObject,void 0),()=>H(U.targetObject),G)}function O(U,L){if(L==="satellite")return Qs(U)?.distanceFromEarthKm??0;const D=Ci(U);return D?D.distanceFromEarthKm:Qs(U)?.distanceFromEarthKm??0}function H(U){ke("Arrived! Here’s what we found."),x.playChirp(),w.detailPanel.show(U),f.setTarget(null);const L=Ci(U),D=Qs(U),G=L?.name??D?.name??U,X=D?"satellite":L?.type??"planet",Y=L?.system??D?.missionType??"Exploration";e.dispatch(kt.recordDiscovery({id:U,name:G,kind:X,category:Y}))}n.onTick((U,L)=>{xv(L,c,h),m.update(U,L);let D={thrust:0,yaw:0,pitch:0,strafe:0,boost:!1},G,X;const Y=m.isActive;let j=0,K=0;const it=u.position;for(const[ot,ft]of c){const pt=Ci(ot);if(!pt||!ft||!pt.environment?.atmosphericPressureAtm)continue;const Et=it.distanceTo(ft.position),Tt=ft.userData.visualRadius||1,ht=K_(Et,Tt,1.2,pt.environment.atmosphericPressureAtm);if(ht.inAtmosphere){const Mt=Math.sqrt((u.userData.velocity?.x??0)**2+(u.userData.velocity?.y??0)**2+(u.userData.velocity?.z??0)**2),P=Y_(Mt,ht.densityFraction,12);j=Math.max(j,P.heatIntensity),K=Math.max(K,P.dragForce)}}if(Y)X=e.getState().flightTelemetry.currentSpeedC,G=!0,w.telemetry.updateDriveMode(!0),l&&(l.visible=!1);else{const ot=R.poll();(ot.thrust!==0||ot.strafe!==0||ot.pitch!==0||ot.yaw!==0||ot.boost)&&(D=ot);const ft=yv(U,u,f,e,w,H,c);ft&&ft.input&&(D=ft.input),K>0&&u.userData.velocity&&(u.userData.velocity.x*=Math.max(1-K*U*.1,.2),u.userData.velocity.y*=Math.max(1-K*U*.1,.2),u.userData.velocity.z*=Math.max(1-K*U*.1,.2)),G=!!D.boost;const pt=Math.sqrt(u.userData.velocity.x**2+u.userData.velocity.y**2+u.userData.velocity.z**2);X=G?pt/180:pt/24,w.telemetry.updateDriveMode(G);const Et=[];for(const[Tt,ht]of c){const Mt=Ci(Tt);Mt&&["star","planet","blackHole"].includes(Mt.type)&&Et.push({position:{x:ht.position.x,y:ht.position.y,z:ht.position.z},mass:Mt.type==="blackHole"?40:Mt.type==="star"?20:(ht.userData.visualRadius||1)*3,safeRadius:ht.userData.safeRadius||1})}if(l){const ht=$_({x:u.position.x,y:u.position.y,z:u.position.z},u.userData.velocity||{x:0,y:0,z:0},Et,40,.1).map(Mt=>new C(Mt.x,Mt.y,Mt.z));l.geometry.setFromPoints(ht),l.visible=e.getState().flightMode===on.MANUAL&&pt>.1}}const at=c.get("sagittarius-a");if(at){const ot=u.position.distanceTo(at.position);if(ot<8){const ft=E_(ot*5e6,415e4);ft.isInsideEventHorizon||e.dispatch(kt.updateTelemetry({timeDilationShipSec:1,timeDilationEarthSec:ft.timeRatio}))}}const W={accZ:(D.thrust||0)*(G?22:8),yawRate:(D.yaw||0)*8,pitchRate:(D.pitch||0)*8};d(U,X,G,D,e.getState().cameraMode,W,j),_.setMode(e.getState().cameraMode),_.update(U,G,X),document.getElementById("cockpit-overlay")?.classList.toggle("cockpit-active",e.getState().cameraMode===ie.COCKPIT);const Z=Y?e.getState().flightTelemetry.currentSpeedC:G?Math.min(X*1.5,1):X*.5;x.setEngineIntensity(Z),Mv(w.radar,u,c,h),s.composer?s.render(U):n.renderer.render(n.scene,n.camera)}),window.addEventListener("error",U=>{console.error("[main] Uncaught error:",U.error??U.message),ke("Something hiccuped, but the flight continues.")}),window.addEventListener("unhandledrejection",U=>{console.error("[main] Unhandled rejection:",U.reason),ke("Something hiccuped, but the flight continues.")}),Ei("Ready for launch.",100),await Tv(250),Yc(),n.start()}function vv(i){const t=zc(Tn,0),e=new Map;for(const r of Tn){const a=Yg(r),o=t.get(r.id);a.position.set(o.x,o.y,o.z),i.scene.add(a),e.set(r.id,a)}const n=Vc(wn,t),s=new Map;for(const r of wn){const a=n_(r),o=n.get(r.id);a.position.set(o.x,o.y,o.z),i.scene.add(a),s.set(r.id,a)}return{celestialGroups:e,satelliteGroups:s}}function xv(i,t,e){const n=zc(Tn,i*2e4);for(const[r,a]of t){const o=n.get(r);o&&a.position.set(o.x,o.y,o.z);const l=a.getObjectByName("clouds:earth");l&&(l.rotation.y=i*.06);const c=a.getObjectByName(`surface:${r}`);c&&(c.rotation.y=i*.02),a.traverse(h=>{const u=h.material?.uniforms;u?.uTime&&(u.uTime.value=i)})}const s=Vc(wn,n);for(const[r,a]of e){const o=s.get(r);o&&a.position.set(o.x,o.y,o.z)}}function yv(i,t,e,n,s,r,a){const o={position:{x:t.position.x,y:t.position.y,z:t.position.z},velocity:t.userData.velocity??{x:0,y:0,z:0},forward:{x:t.userData.forward.x,y:t.userData.forward.y,z:t.userData.forward.z},bankAngle:t.userData.bankAngle??0},{state:l,bearing:c,input:h}=e.step(o,i);if(a){const m=[];for(const x of a.values())x?.position&&x.userData?.safeRadius&&m.push({position:{x:x.position.x,y:x.position.y,z:x.position.z},safeRadius:x.userData.safeRadius});const f=B_(l.position,l.velocity,m);l.position=f.position,l.velocity=f.velocity}t.position.set(l.position.x,l.position.y,l.position.z),t.userData.velocity=l.velocity,t.userData.forward.set(l.forward.x,l.forward.y,l.forward.z),t.userData.bankAngle=l.bankAngle;const u=t.position.clone().add(t.userData.forward);t.lookAt(u),l.bankAngle&&t.rotateZ(l.bankAngle),s.compass.update(c);const d=Math.sqrt(l.velocity.x**2+l.velocity.y**2+l.velocity.z**2),p=h.boost?d/180*.95:d/18*.05;let g=0,_=0;if(c&&(g=c.distance*1e5,d>.01&&(_=c.distance/d)),n.dispatch(kt.updateTelemetry({currentSpeedC:p,distanceRemainingKm:g,etaSeconds:_})),c?.arrived){const m=n.getState().targetObject;n.dispatch(kt.setFlightStatus(dn.ARRIVED)),m&&r(m)}return{state:l,bearing:c,input:h}}function Mv(i,t,e,n){const s=[];for(const o of e.values())s.push({x:o.position.x,z:o.position.z,color:"#ffd27a"});for(const o of n.values())s.push({x:o.position.x,z:o.position.z,color:"#9ee6ff"});const r=t.userData.forward??new C(0,0,-1),a=Math.atan2(r.x,r.z);i.render({x:t.position.x,z:t.position.z},a,s)}function Sv(i,{canvas:t,camera:e,onSearchSelect:n,onSatelliteSelect:s,_onToggleRadio:r,onToggleHyperdrive:a,onZoomIn:o,onZoomOut:l}){const c=document.getElementById("nav-search-root"),h=document.getElementById("detail-panel-root"),u=document.getElementById("satellite-list-root"),d=document.getElementById("telemetry-root"),p=document.getElementById("compass-root"),g=document.getElementById("radar-root"),_=document.getElementById("photo-mode-root"),m=document.getElementById("logbook-root"),f=document.getElementById("habitability-matrix-root"),x=new ev(c,i,{onSelect:n}),v=new sv(h,i),y=new av(f,i),R=new ov(u,i,{onSelect:s}),w=new lv(p,i),A=new hv(d,i,{onToggleHyperdrive:a,onZoomIn:o,onZoomOut:l}),N=new dv(g),S=new pv(_,i,{canvas:t,camera:e,onShowToast:O=>ke(O)}),b=new mv(m,i,{onSelectTarget:n});return i.dispatch(kt.toggleSatelliteList(!0)),{search:x,detailPanel:v,habitabilityMatrix:y,satelliteList:R,compass:w,telemetry:A,radar:N,photoMode:S,logbook:b}}function bv(i,t,e,n,s,r,a,o){const l=()=>{n.init(),s&&n._ctx&&s.setContext(n._ctx),window.removeEventListener("pointerdown",l),window.removeEventListener("keydown",l)};window.addEventListener("pointerdown",l),window.addEventListener("keydown",l),window.addEventListener("click",c=>{o.handleClick(c,a.getState().cameraMode===ie.COCKPIT)}),window.addEventListener("keydown",c=>{if(!(c.target instanceof HTMLInputElement||c.target instanceof HTMLTextAreaElement)){if(c.code==="Equal"||c.code==="NumpadAdd"||c.code==="PageUp")r.adjustZoom(-.15);else if(c.code==="Minus"||c.code==="NumpadSubtract"||c.code==="PageDown")r.adjustZoom(.15);else if(c.code==="KeyO"){a.dispatch(kt.toggleConstellations());const u=a.getState().ui.constellationsVisible;ke(u?"✨ Constellation Charts: ON":"✨ Constellation Charts: OFF")}else if(c.code==="KeyP")a.dispatch(kt.togglePhotoMode(!0));else if(c.code==="KeyL")a.dispatch(kt.toggleLogbook(!0));else if(c.code==="KeyR"){const u=s.togglePower();ke(u?`📻 ${s.getCurrentStation().name}`:"📻 Space Radio: OFF")}e.handleKeyDown(c)}}),window.addEventListener("keyup",c=>e.handleKeyUp(c)),window.addEventListener("blur",()=>e.resetInput()),window.addEventListener("wheel",c=>{const h=Math.sign(c.deltaY)*.12;r.adjustZoom(h)},{passive:!0}),window.addEventListener("pointermove",c=>{const h=c.clientX/window.innerWidth*2-1,u=c.clientY/window.innerHeight*2-1;r.setMouseParallax(h,-u)})}function Ei(i,t){const e=document.getElementById("boot-message"),n=document.getElementById("boot-bar-fill");e&&(e.textContent=i),n&&(n.style.width=`${Math.min(Math.max(t,0),100)}%`)}function Yc(){const i=document.getElementById("boot-screen");i&&(i.classList.add("fade-out"),setTimeout(()=>i.remove(),700))}function Ev(i){console.error("[main] Fatal startup error:",i),Yc();const t=document.getElementById("fatal-error"),e=document.getElementById("fatal-error-message");e&&(e.textContent=i?.message??"An unexpected error occurred."),t&&(t.hidden=!1,t.querySelector("#fatal-error-retry")?.addEventListener("click",()=>window.location.reload()))}function ke(i){const t=document.getElementById("toast-root");if(!t)return;const e=document.createElement("div");e.className="toast",e.textContent=i,t.appendChild(e),setTimeout(()=>e.remove(),3200)}function Tv(i){return new Promise(t=>setTimeout(t,i))}
//# sourceMappingURL=index-DiqNKVlf.js.map
