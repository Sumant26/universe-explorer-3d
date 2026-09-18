(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function t(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(s){if(s.ep)return;s.ep=!0;const r=t(s);fetch(s.href,r)}})();/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Ga="160",du=0,ro=1,fu=2,sc=1,pu=2,Sn=3,Gn=0,It=1,Dt=2,bn=0,Pi=1,vt=2,ao=3,oo=4,mu=5,$n=100,gu=101,_u=102,lo=103,co=104,vu=200,xu=201,yu=202,Su=203,ga=204,_a=205,Mu=206,bu=207,Eu=208,Tu=209,wu=210,Au=211,Cu=212,Ru=213,Lu=214,Pu=0,Iu=1,Du=2,rr=3,Nu=4,Ou=5,Uu=6,Fu=7,rc=0,Gu=1,Bu=2,Un=0,Hu=1,ku=2,zu=3,ac=4,Vu=5,Wu=6,oc=300,Ni=301,Oi=302,va=303,xa=304,pr=306,ya=1e3,rn=1001,Sa=1002,Ht=1003,uo=1004,Tr=1005,Zt=1006,qu=1007,fs=1008,Fn=1009,Xu=1010,Ku=1011,Ba=1012,lc=1013,Nn=1014,On=1015,En=1016,cc=1017,uc=1018,Jn=1020,Yu=1021,an=1023,$u=1024,ju=1025,Qn=1026,Ui=1027,Zu=1028,hc=1029,Ju=1030,dc=1031,fc=1033,wr=33776,Ar=33777,Cr=33778,Rr=33779,ho=35840,fo=35841,po=35842,mo=35843,pc=36196,go=37492,_o=37496,vo=37808,xo=37809,yo=37810,So=37811,Mo=37812,bo=37813,Eo=37814,To=37815,wo=37816,Ao=37817,Co=37818,Ro=37819,Lo=37820,Po=37821,Lr=36492,Io=36494,Do=36495,Qu=36283,No=36284,Oo=36285,Uo=36286,mc=3e3,ei=3001,eh=3200,th=3201,gc=0,nh=1,Jt="",_t="srgb",Tn="srgb-linear",Ha="display-p3",mr="display-p3-linear",ar="linear",ut="srgb",or="rec709",lr="p3",li=7680,Fo=519,ih=512,sh=513,rh=514,_c=515,ah=516,oh=517,lh=518,ch=519,Go=35044,Bo="300 es",Ma=1035,Mn=2e3,cr=2001;class ki{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const s=this._listeners[e];if(s!==void 0){const r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,e);e.target=null}}}const Ot=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Pr=Math.PI/180,ba=180/Math.PI;function zi(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Ot[i&255]+Ot[i>>8&255]+Ot[i>>16&255]+Ot[i>>24&255]+"-"+Ot[e&255]+Ot[e>>8&255]+"-"+Ot[e>>16&15|64]+Ot[e>>24&255]+"-"+Ot[t&63|128]+Ot[t>>8&255]+"-"+Ot[t>>16&255]+Ot[t>>24&255]+Ot[n&255]+Ot[n>>8&255]+Ot[n>>16&255]+Ot[n>>24&255]).toLowerCase()}function Lt(i,e,t){return Math.max(e,Math.min(t,i))}function uh(i,e){return(i%e+e)%e}function Ir(i,e,t){return(1-t)*i+t*e}function Ho(i){return(i&i-1)===0&&i!==0}function Ea(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function Ki(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function kt(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}class ae{constructor(e=0,t=0){ae.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Lt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*n-a*s+e.x,this.y=r*s+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Xe{constructor(e,t,n,s,r,a,o,l,c){Xe.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,l,c)}set(e,t,n,s,r,a,o,l,c){const u=this.elements;return u[0]=e,u[1]=s,u[2]=o,u[3]=t,u[4]=r,u[5]=l,u[6]=n,u[7]=a,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],u=n[4],h=n[7],d=n[2],p=n[5],g=n[8],_=s[0],m=s[3],f=s[6],x=s[1],v=s[4],S=s[7],R=s[2],w=s[5],A=s[8];return r[0]=a*_+o*x+l*R,r[3]=a*m+o*v+l*w,r[6]=a*f+o*S+l*A,r[1]=c*_+u*x+h*R,r[4]=c*m+u*v+h*w,r[7]=c*f+u*S+h*A,r[2]=d*_+p*x+g*R,r[5]=d*m+p*v+g*w,r[8]=d*f+p*S+g*A,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8];return t*a*u-t*o*c-n*r*u+n*o*l+s*r*c-s*a*l}invert(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],h=u*a-o*c,d=o*l-u*r,p=c*r-a*l,g=t*h+n*d+s*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return e[0]=h*_,e[1]=(s*c-u*n)*_,e[2]=(o*n-s*a)*_,e[3]=d*_,e[4]=(u*t-s*l)*_,e[5]=(s*r-o*t)*_,e[6]=p*_,e[7]=(n*l-c*t)*_,e[8]=(a*t-n*r)*_,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,a,o){const l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*a+c*o)+a+e,-s*c,s*l,-s*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(Dr.makeScale(e,t)),this}rotate(e){return this.premultiply(Dr.makeRotation(-e)),this}translate(e,t){return this.premultiply(Dr.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Dr=new Xe;function vc(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function ur(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function hh(){const i=ur("canvas");return i.style.display="block",i}const ko={};function os(i){i in ko||(ko[i]=!0,console.warn(i))}const zo=new Xe().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Vo=new Xe().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),bs={[Tn]:{transfer:ar,primaries:or,toReference:i=>i,fromReference:i=>i},[_t]:{transfer:ut,primaries:or,toReference:i=>i.convertSRGBToLinear(),fromReference:i=>i.convertLinearToSRGB()},[mr]:{transfer:ar,primaries:lr,toReference:i=>i.applyMatrix3(Vo),fromReference:i=>i.applyMatrix3(zo)},[Ha]:{transfer:ut,primaries:lr,toReference:i=>i.convertSRGBToLinear().applyMatrix3(Vo),fromReference:i=>i.applyMatrix3(zo).convertLinearToSRGB()}},dh=new Set([Tn,mr]),nt={enabled:!0,_workingColorSpace:Tn,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(i){if(!dh.has(i))throw new Error(`Unsupported working color space, "${i}".`);this._workingColorSpace=i},convert:function(i,e,t){if(this.enabled===!1||e===t||!e||!t)return i;const n=bs[e].toReference,s=bs[t].fromReference;return s(n(i))},fromWorkingColorSpace:function(i,e){return this.convert(i,this._workingColorSpace,e)},toWorkingColorSpace:function(i,e){return this.convert(i,e,this._workingColorSpace)},getPrimaries:function(i){return bs[i].primaries},getTransfer:function(i){return i===Jt?ar:bs[i].transfer}};function Ii(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Nr(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let ci;class xc{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{ci===void 0&&(ci=ur("canvas")),ci.width=e.width,ci.height=e.height;const n=ci.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=ci}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=ur("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=Ii(r[a]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Ii(t[n]/255)*255):t[n]=Ii(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let fh=0;class yc{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:fh++}),this.uuid=zi(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(Or(s[a].image)):r.push(Or(s[a]))}else r=Or(s);n.url=r}return t||(e.images[this.uuid]=n),n}}function Or(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?xc.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let ph=0;class Wt extends ki{constructor(e=Wt.DEFAULT_IMAGE,t=Wt.DEFAULT_MAPPING,n=rn,s=rn,r=Zt,a=fs,o=an,l=Fn,c=Wt.DEFAULT_ANISOTROPY,u=Jt){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:ph++}),this.uuid=zi(),this.name="",this.source=new yc(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new ae(0,0),this.repeat=new ae(1,1),this.center=new ae(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Xe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof u=="string"?this.colorSpace=u:(os("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=u===ei?_t:Jt),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==oc)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case ya:e.x=e.x-Math.floor(e.x);break;case rn:e.x=e.x<0?0:1;break;case Sa:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case ya:e.y=e.y-Math.floor(e.y);break;case rn:e.y=e.y<0?0:1;break;case Sa:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return os("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===_t?ei:mc}set encoding(e){os("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===ei?_t:Jt}}Wt.DEFAULT_IMAGE=null;Wt.DEFAULT_MAPPING=oc;Wt.DEFAULT_ANISOTROPY=1;class ht{constructor(e=0,t=0,n=0,s=1){ht.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,s=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*t+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*t+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*t+a[7]*n+a[11]*s+a[15]*r,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r;const l=e.elements,c=l[0],u=l[4],h=l[8],d=l[1],p=l[5],g=l[9],_=l[2],m=l[6],f=l[10];if(Math.abs(u-d)<.01&&Math.abs(h-_)<.01&&Math.abs(g-m)<.01){if(Math.abs(u+d)<.1&&Math.abs(h+_)<.1&&Math.abs(g+m)<.1&&Math.abs(c+p+f-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const v=(c+1)/2,S=(p+1)/2,R=(f+1)/2,w=(u+d)/4,A=(h+_)/4,U=(g+m)/4;return v>S&&v>R?v<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(v),s=w/n,r=A/n):S>R?S<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(S),n=w/s,r=U/s):R<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(R),n=A/r,s=U/r),this.set(n,s,r,t),this}let x=Math.sqrt((m-g)*(m-g)+(h-_)*(h-_)+(d-u)*(d-u));return Math.abs(x)<.001&&(x=1),this.x=(m-g)/x,this.y=(h-_)/x,this.z=(d-u)/x,this.w=Math.acos((c+p+f-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class mh extends ki{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new ht(0,0,e,t),this.scissorTest=!1,this.viewport=new ht(0,0,e,t);const s={width:e,height:t,depth:1};n.encoding!==void 0&&(os("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),n.colorSpace=n.encoding===ei?_t:Jt),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Zt,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},n),this.texture=new Wt(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps,this.texture.internalFormat=n.internalFormat,this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}setSize(e,t,n=1){(this.width!==e||this.height!==t||this.depth!==n)&&(this.width=e,this.height=t,this.depth=n,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new yc(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class cn extends mh{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class Sc extends Wt{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Ht,this.minFilter=Ht,this.wrapR=rn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class gh extends Wt{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Ht,this.minFilter=Ht,this.wrapR=rn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class vs{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,a,o){let l=n[s+0],c=n[s+1],u=n[s+2],h=n[s+3];const d=r[a+0],p=r[a+1],g=r[a+2],_=r[a+3];if(o===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h;return}if(o===1){e[t+0]=d,e[t+1]=p,e[t+2]=g,e[t+3]=_;return}if(h!==_||l!==d||c!==p||u!==g){let m=1-o;const f=l*d+c*p+u*g+h*_,x=f>=0?1:-1,v=1-f*f;if(v>Number.EPSILON){const R=Math.sqrt(v),w=Math.atan2(R,f*x);m=Math.sin(m*w)/R,o=Math.sin(o*w)/R}const S=o*x;if(l=l*m+d*S,c=c*m+p*S,u=u*m+g*S,h=h*m+_*S,m===1-o){const R=1/Math.sqrt(l*l+c*c+u*u+h*h);l*=R,c*=R,u*=R,h*=R}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h}static multiplyQuaternionsFlat(e,t,n,s,r,a){const o=n[s],l=n[s+1],c=n[s+2],u=n[s+3],h=r[a],d=r[a+1],p=r[a+2],g=r[a+3];return e[t]=o*g+u*h+l*p-c*d,e[t+1]=l*g+u*d+c*h-o*p,e[t+2]=c*g+u*p+o*d-l*h,e[t+3]=u*g-o*h-l*d-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,s=e._y,r=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(n/2),u=o(s/2),h=o(r/2),d=l(n/2),p=l(s/2),g=l(r/2);switch(a){case"XYZ":this._x=d*u*h+c*p*g,this._y=c*p*h-d*u*g,this._z=c*u*g+d*p*h,this._w=c*u*h-d*p*g;break;case"YXZ":this._x=d*u*h+c*p*g,this._y=c*p*h-d*u*g,this._z=c*u*g-d*p*h,this._w=c*u*h+d*p*g;break;case"ZXY":this._x=d*u*h-c*p*g,this._y=c*p*h+d*u*g,this._z=c*u*g+d*p*h,this._w=c*u*h-d*p*g;break;case"ZYX":this._x=d*u*h-c*p*g,this._y=c*p*h+d*u*g,this._z=c*u*g-d*p*h,this._w=c*u*h+d*p*g;break;case"YZX":this._x=d*u*h+c*p*g,this._y=c*p*h+d*u*g,this._z=c*u*g-d*p*h,this._w=c*u*h-d*p*g;break;case"XZY":this._x=d*u*h-c*p*g,this._y=c*p*h-d*u*g,this._z=c*u*g+d*p*h,this._w=c*u*h+d*p*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],s=t[4],r=t[8],a=t[1],o=t[5],l=t[9],c=t[2],u=t[6],h=t[10],d=n+o+h;if(d>0){const p=.5/Math.sqrt(d+1);this._w=.25/p,this._x=(u-l)*p,this._y=(r-c)*p,this._z=(a-s)*p}else if(n>o&&n>h){const p=2*Math.sqrt(1+n-o-h);this._w=(u-l)/p,this._x=.25*p,this._y=(s+a)/p,this._z=(r+c)/p}else if(o>h){const p=2*Math.sqrt(1+o-n-h);this._w=(r-c)/p,this._x=(s+a)/p,this._y=.25*p,this._z=(l+u)/p}else{const p=2*Math.sqrt(1+h-n-o);this._w=(a-s)/p,this._x=(r+c)/p,this._y=(l+u)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Lt(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,s=e._y,r=e._z,a=e._w,o=t._x,l=t._y,c=t._z,u=t._w;return this._x=n*u+a*o+s*c-r*l,this._y=s*u+a*l+r*o-n*c,this._z=r*u+a*c+n*l-s*o,this._w=a*u-n*o-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,s=this._y,r=this._z,a=this._w;let o=a*e._w+n*e._x+s*e._y+r*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=n,this._y=s,this._z=r,this;const l=1-o*o;if(l<=Number.EPSILON){const p=1-t;return this._w=p*a+t*this._w,this._x=p*n+t*this._x,this._y=p*s+t*this._y,this._z=p*r+t*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,o),h=Math.sin((1-t)*u)/c,d=Math.sin(t*u)/c;return this._w=a*h+this._w*d,this._x=n*h+this._x*d,this._y=s*h+this._y*d,this._z=r*h+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=Math.random(),t=Math.sqrt(1-e),n=Math.sqrt(e),s=2*Math.PI*Math.random(),r=2*Math.PI*Math.random();return this.set(t*Math.cos(s),n*Math.sin(r),n*Math.cos(r),t*Math.sin(s))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class C{constructor(e=0,t=0,n=0){C.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Wo.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Wo.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,s=this.z,r=e.elements,a=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(e){const t=this.x,n=this.y,s=this.z,r=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*s-o*n),u=2*(o*t-r*s),h=2*(r*n-a*t);return this.x=t+l*c+a*h-o*u,this.y=n+l*u+o*c-r*h,this.z=s+l*h+r*u-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,s=e.y,r=e.z,a=t.x,o=t.y,l=t.z;return this.x=s*l-r*o,this.y=r*a-n*l,this.z=n*o-s*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Ur.copy(this).projectOnVector(e),this.sub(Ur)}reflect(e){return this.sub(Ur.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Lt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,n=Math.sqrt(1-e**2);return this.x=n*Math.cos(t),this.y=n*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Ur=new C,Wo=new vs;class si{constructor(e=new C(1/0,1/0,1/0),t=new C(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(en.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(en.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=en.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,en):en.fromBufferAttribute(r,a),en.applyMatrix4(e.matrixWorld),this.expandByPoint(en);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Es.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Es.copy(n.boundingBox)),Es.applyMatrix4(e.matrixWorld),this.union(Es)}const s=e.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,en),en.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Yi),Ts.subVectors(this.max,Yi),ui.subVectors(e.a,Yi),hi.subVectors(e.b,Yi),di.subVectors(e.c,Yi),An.subVectors(hi,ui),Cn.subVectors(di,hi),zn.subVectors(ui,di);let t=[0,-An.z,An.y,0,-Cn.z,Cn.y,0,-zn.z,zn.y,An.z,0,-An.x,Cn.z,0,-Cn.x,zn.z,0,-zn.x,-An.y,An.x,0,-Cn.y,Cn.x,0,-zn.y,zn.x,0];return!Fr(t,ui,hi,di,Ts)||(t=[1,0,0,0,1,0,0,0,1],!Fr(t,ui,hi,di,Ts))?!1:(ws.crossVectors(An,Cn),t=[ws.x,ws.y,ws.z],Fr(t,ui,hi,di,Ts))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,en).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(en).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(gn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),gn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),gn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),gn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),gn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),gn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),gn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),gn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(gn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const gn=[new C,new C,new C,new C,new C,new C,new C,new C],en=new C,Es=new si,ui=new C,hi=new C,di=new C,An=new C,Cn=new C,zn=new C,Yi=new C,Ts=new C,ws=new C,Vn=new C;function Fr(i,e,t,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){Vn.fromArray(i,r);const o=s.x*Math.abs(Vn.x)+s.y*Math.abs(Vn.y)+s.z*Math.abs(Vn.z),l=e.dot(Vn),c=t.dot(Vn),u=n.dot(Vn);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>o)return!1}return!0}const _h=new si,$i=new C,Gr=new C;class ri{constructor(e=new C,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):_h.setFromPoints(e).getCenter(n);let s=0;for(let r=0,a=e.length;r<a;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;$i.subVectors(e,this.center);const t=$i.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector($i,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Gr.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint($i.copy(e.center).add(Gr)),this.expandByPoint($i.copy(e.center).sub(Gr))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const _n=new C,Br=new C,As=new C,Rn=new C,Hr=new C,Cs=new C,kr=new C;class gr{constructor(e=new C,t=new C(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,_n)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=_n.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(_n.copy(this.origin).addScaledVector(this.direction,t),_n.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){Br.copy(e).add(t).multiplyScalar(.5),As.copy(t).sub(e).normalize(),Rn.copy(this.origin).sub(Br);const r=e.distanceTo(t)*.5,a=-this.direction.dot(As),o=Rn.dot(this.direction),l=-Rn.dot(As),c=Rn.lengthSq(),u=Math.abs(1-a*a);let h,d,p,g;if(u>0)if(h=a*l-o,d=a*o-l,g=r*u,h>=0)if(d>=-g)if(d<=g){const _=1/u;h*=_,d*=_,p=h*(h+a*d+2*o)+d*(a*h+d+2*l)+c}else d=r,h=Math.max(0,-(a*d+o)),p=-h*h+d*(d+2*l)+c;else d=-r,h=Math.max(0,-(a*d+o)),p=-h*h+d*(d+2*l)+c;else d<=-g?(h=Math.max(0,-(-a*r+o)),d=h>0?-r:Math.min(Math.max(-r,-l),r),p=-h*h+d*(d+2*l)+c):d<=g?(h=0,d=Math.min(Math.max(-r,-l),r),p=d*(d+2*l)+c):(h=Math.max(0,-(a*r+o)),d=h>0?r:Math.min(Math.max(-r,-l),r),p=-h*h+d*(d+2*l)+c);else d=a>0?-r:r,h=Math.max(0,-(a*d+o)),p=-h*h+d*(d+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,h),s&&s.copy(Br).addScaledVector(As,d),p}intersectSphere(e,t){_n.subVectors(e.center,this.origin);const n=_n.dot(this.direction),s=_n.dot(_n)-n*n,r=e.radius*e.radius;if(s>r)return null;const a=Math.sqrt(r-s),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,a,o,l;const c=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,d=this.origin;return c>=0?(n=(e.min.x-d.x)*c,s=(e.max.x-d.x)*c):(n=(e.max.x-d.x)*c,s=(e.min.x-d.x)*c),u>=0?(r=(e.min.y-d.y)*u,a=(e.max.y-d.y)*u):(r=(e.max.y-d.y)*u,a=(e.min.y-d.y)*u),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),h>=0?(o=(e.min.z-d.z)*h,l=(e.max.z-d.z)*h):(o=(e.max.z-d.z)*h,l=(e.min.z-d.z)*h),n>l||o>s)||((o>n||n!==n)&&(n=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,_n)!==null}intersectTriangle(e,t,n,s,r){Hr.subVectors(t,e),Cs.subVectors(n,e),kr.crossVectors(Hr,Cs);let a=this.direction.dot(kr),o;if(a>0){if(s)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Rn.subVectors(this.origin,e);const l=o*this.direction.dot(Cs.crossVectors(Rn,Cs));if(l<0)return null;const c=o*this.direction.dot(Hr.cross(Rn));if(c<0||l+c>a)return null;const u=-o*Rn.dot(kr);return u<0?null:this.at(u/a,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class at{constructor(e,t,n,s,r,a,o,l,c,u,h,d,p,g,_,m){at.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,l,c,u,h,d,p,g,_,m)}set(e,t,n,s,r,a,o,l,c,u,h,d,p,g,_,m){const f=this.elements;return f[0]=e,f[4]=t,f[8]=n,f[12]=s,f[1]=r,f[5]=a,f[9]=o,f[13]=l,f[2]=c,f[6]=u,f[10]=h,f[14]=d,f[3]=p,f[7]=g,f[11]=_,f[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new at().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,s=1/fi.setFromMatrixColumn(e,0).length(),r=1/fi.setFromMatrixColumn(e,1).length(),a=1/fi.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,s=e.y,r=e.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(s),c=Math.sin(s),u=Math.cos(r),h=Math.sin(r);if(e.order==="XYZ"){const d=a*u,p=a*h,g=o*u,_=o*h;t[0]=l*u,t[4]=-l*h,t[8]=c,t[1]=p+g*c,t[5]=d-_*c,t[9]=-o*l,t[2]=_-d*c,t[6]=g+p*c,t[10]=a*l}else if(e.order==="YXZ"){const d=l*u,p=l*h,g=c*u,_=c*h;t[0]=d+_*o,t[4]=g*o-p,t[8]=a*c,t[1]=a*h,t[5]=a*u,t[9]=-o,t[2]=p*o-g,t[6]=_+d*o,t[10]=a*l}else if(e.order==="ZXY"){const d=l*u,p=l*h,g=c*u,_=c*h;t[0]=d-_*o,t[4]=-a*h,t[8]=g+p*o,t[1]=p+g*o,t[5]=a*u,t[9]=_-d*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){const d=a*u,p=a*h,g=o*u,_=o*h;t[0]=l*u,t[4]=g*c-p,t[8]=d*c+_,t[1]=l*h,t[5]=_*c+d,t[9]=p*c-g,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){const d=a*l,p=a*c,g=o*l,_=o*c;t[0]=l*u,t[4]=_-d*h,t[8]=g*h+p,t[1]=h,t[5]=a*u,t[9]=-o*u,t[2]=-c*u,t[6]=p*h+g,t[10]=d-_*h}else if(e.order==="XZY"){const d=a*l,p=a*c,g=o*l,_=o*c;t[0]=l*u,t[4]=-h,t[8]=c*u,t[1]=d*h+_,t[5]=a*u,t[9]=p*h-g,t[2]=g*h-p,t[6]=o*u,t[10]=_*h+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(vh,e,xh)}lookAt(e,t,n){const s=this.elements;return Xt.subVectors(e,t),Xt.lengthSq()===0&&(Xt.z=1),Xt.normalize(),Ln.crossVectors(n,Xt),Ln.lengthSq()===0&&(Math.abs(n.z)===1?Xt.x+=1e-4:Xt.z+=1e-4,Xt.normalize(),Ln.crossVectors(n,Xt)),Ln.normalize(),Rs.crossVectors(Xt,Ln),s[0]=Ln.x,s[4]=Rs.x,s[8]=Xt.x,s[1]=Ln.y,s[5]=Rs.y,s[9]=Xt.y,s[2]=Ln.z,s[6]=Rs.z,s[10]=Xt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],u=n[1],h=n[5],d=n[9],p=n[13],g=n[2],_=n[6],m=n[10],f=n[14],x=n[3],v=n[7],S=n[11],R=n[15],w=s[0],A=s[4],U=s[8],b=s[12],E=s[1],F=s[5],k=s[9],te=s[13],I=s[2],B=s[6],H=s[10],Z=s[14],j=s[3],J=s[7],X=s[11],K=s[15];return r[0]=a*w+o*E+l*I+c*j,r[4]=a*A+o*F+l*B+c*J,r[8]=a*U+o*k+l*H+c*X,r[12]=a*b+o*te+l*Z+c*K,r[1]=u*w+h*E+d*I+p*j,r[5]=u*A+h*F+d*B+p*J,r[9]=u*U+h*k+d*H+p*X,r[13]=u*b+h*te+d*Z+p*K,r[2]=g*w+_*E+m*I+f*j,r[6]=g*A+_*F+m*B+f*J,r[10]=g*U+_*k+m*H+f*X,r[14]=g*b+_*te+m*Z+f*K,r[3]=x*w+v*E+S*I+R*j,r[7]=x*A+v*F+S*B+R*J,r[11]=x*U+v*k+S*H+R*X,r[15]=x*b+v*te+S*Z+R*K,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],a=e[1],o=e[5],l=e[9],c=e[13],u=e[2],h=e[6],d=e[10],p=e[14],g=e[3],_=e[7],m=e[11],f=e[15];return g*(+r*l*h-s*c*h-r*o*d+n*c*d+s*o*p-n*l*p)+_*(+t*l*p-t*c*d+r*a*d-s*a*p+s*c*u-r*l*u)+m*(+t*c*h-t*o*p-r*a*h+n*a*p+r*o*u-n*c*u)+f*(-s*o*u-t*l*h+t*o*d+s*a*h-n*a*d+n*l*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],h=e[9],d=e[10],p=e[11],g=e[12],_=e[13],m=e[14],f=e[15],x=h*m*c-_*d*c+_*l*p-o*m*p-h*l*f+o*d*f,v=g*d*c-u*m*c-g*l*p+a*m*p+u*l*f-a*d*f,S=u*_*c-g*h*c+g*o*p-a*_*p-u*o*f+a*h*f,R=g*h*l-u*_*l-g*o*d+a*_*d+u*o*m-a*h*m,w=t*x+n*v+s*S+r*R;if(w===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const A=1/w;return e[0]=x*A,e[1]=(_*d*r-h*m*r-_*s*p+n*m*p+h*s*f-n*d*f)*A,e[2]=(o*m*r-_*l*r+_*s*c-n*m*c-o*s*f+n*l*f)*A,e[3]=(h*l*r-o*d*r-h*s*c+n*d*c+o*s*p-n*l*p)*A,e[4]=v*A,e[5]=(u*m*r-g*d*r+g*s*p-t*m*p-u*s*f+t*d*f)*A,e[6]=(g*l*r-a*m*r-g*s*c+t*m*c+a*s*f-t*l*f)*A,e[7]=(a*d*r-u*l*r+u*s*c-t*d*c-a*s*p+t*l*p)*A,e[8]=S*A,e[9]=(g*h*r-u*_*r-g*n*p+t*_*p+u*n*f-t*h*f)*A,e[10]=(a*_*r-g*o*r+g*n*c-t*_*c-a*n*f+t*o*f)*A,e[11]=(u*o*r-a*h*r-u*n*c+t*h*c+a*n*p-t*o*p)*A,e[12]=R*A,e[13]=(u*_*s-g*h*s+g*n*d-t*_*d-u*n*m+t*h*m)*A,e[14]=(g*o*s-a*_*s-g*n*l+t*_*l+a*n*m-t*o*m)*A,e[15]=(a*h*s-u*o*s+u*n*l-t*h*l-a*n*d+t*o*d)*A,this}scale(e){const t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),s=Math.sin(t),r=1-n,a=e.x,o=e.y,l=e.z,c=r*a,u=r*o;return this.set(c*a+n,c*o-s*l,c*l+s*o,0,c*o+s*l,u*o+n,u*l-s*a,0,c*l-s*o,u*l+s*a,r*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,a){return this.set(1,n,r,0,e,1,a,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){const s=this.elements,r=t._x,a=t._y,o=t._z,l=t._w,c=r+r,u=a+a,h=o+o,d=r*c,p=r*u,g=r*h,_=a*u,m=a*h,f=o*h,x=l*c,v=l*u,S=l*h,R=n.x,w=n.y,A=n.z;return s[0]=(1-(_+f))*R,s[1]=(p+S)*R,s[2]=(g-v)*R,s[3]=0,s[4]=(p-S)*w,s[5]=(1-(d+f))*w,s[6]=(m+x)*w,s[7]=0,s[8]=(g+v)*A,s[9]=(m-x)*A,s[10]=(1-(d+_))*A,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){const s=this.elements;let r=fi.set(s[0],s[1],s[2]).length();const a=fi.set(s[4],s[5],s[6]).length(),o=fi.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],tn.copy(this);const c=1/r,u=1/a,h=1/o;return tn.elements[0]*=c,tn.elements[1]*=c,tn.elements[2]*=c,tn.elements[4]*=u,tn.elements[5]*=u,tn.elements[6]*=u,tn.elements[8]*=h,tn.elements[9]*=h,tn.elements[10]*=h,t.setFromRotationMatrix(tn),n.x=r,n.y=a,n.z=o,this}makePerspective(e,t,n,s,r,a,o=Mn){const l=this.elements,c=2*r/(t-e),u=2*r/(n-s),h=(t+e)/(t-e),d=(n+s)/(n-s);let p,g;if(o===Mn)p=-(a+r)/(a-r),g=-2*a*r/(a-r);else if(o===cr)p=-a/(a-r),g=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=h,l[12]=0,l[1]=0,l[5]=u,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,s,r,a,o=Mn){const l=this.elements,c=1/(t-e),u=1/(n-s),h=1/(a-r),d=(t+e)*c,p=(n+s)*u;let g,_;if(o===Mn)g=(a+r)*h,_=-2*h;else if(o===cr)g=r*h,_=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=_,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const fi=new C,tn=new at,vh=new C(0,0,0),xh=new C(1,1,1),Ln=new C,Rs=new C,Xt=new C,qo=new at,Xo=new vs;class xs{constructor(e=0,t=0,n=0,s=xs.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const s=e.elements,r=s[0],a=s[4],o=s[8],l=s[1],c=s[5],u=s[9],h=s[2],d=s[6],p=s[10];switch(t){case"XYZ":this._y=Math.asin(Lt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,p),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Lt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,r),this._z=0);break;case"ZXY":this._x=Math.asin(Lt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-h,p),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Lt(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(d,p),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Lt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-h,r)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-Lt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-u,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return qo.makeRotationFromQuaternion(e),this.setFromRotationMatrix(qo,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Xo.setFromEuler(this),this.setFromQuaternion(Xo,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}xs.DEFAULT_ORDER="XYZ";class ka{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let yh=0;const Ko=new C,pi=new vs,vn=new at,Ls=new C,ji=new C,Sh=new C,Mh=new vs,Yo=new C(1,0,0),$o=new C(0,1,0),jo=new C(0,0,1),bh={type:"added"},Eh={type:"removed"};class bt extends ki{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:yh++}),this.uuid=zi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=bt.DEFAULT_UP.clone();const e=new C,t=new xs,n=new vs,s=new C(1,1,1);function r(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new at},normalMatrix:{value:new Xe}}),this.matrix=new at,this.matrixWorld=new at,this.matrixAutoUpdate=bt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=bt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new ka,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return pi.setFromAxisAngle(e,t),this.quaternion.multiply(pi),this}rotateOnWorldAxis(e,t){return pi.setFromAxisAngle(e,t),this.quaternion.premultiply(pi),this}rotateX(e){return this.rotateOnAxis(Yo,e)}rotateY(e){return this.rotateOnAxis($o,e)}rotateZ(e){return this.rotateOnAxis(jo,e)}translateOnAxis(e,t){return Ko.copy(e).applyQuaternion(this.quaternion),this.position.add(Ko.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Yo,e)}translateY(e){return this.translateOnAxis($o,e)}translateZ(e){return this.translateOnAxis(jo,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(vn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Ls.copy(e):Ls.set(e,t,n);const s=this.parent;this.updateWorldMatrix(!0,!1),ji.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?vn.lookAt(ji,Ls,this.up):vn.lookAt(Ls,ji,this.up),this.quaternion.setFromRotationMatrix(vn),s&&(vn.extractRotation(s.matrixWorld),pi.setFromRotationMatrix(vn),this.quaternion.premultiply(pi.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(bh)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Eh)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),vn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),vn.multiply(e.parent.matrixWorld)),e.applyMatrix4(vn),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){const a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ji,e,Sh),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ji,Mh,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,s=t.length;n<s;n++){const r=t[n];(r.matrixWorldAutoUpdate===!0||e===!0)&&r.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const s=this.children;for(let r=0,a=s.length;r<a;r++){const o=s[r];o.matrixWorldAutoUpdate===!0&&o.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),s.maxGeometryCount=this._maxGeometryCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const h=l[c];r(e.shapes,h)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(e.materials,this.material[l]));s.material=o}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];s.animations.push(r(e.animations,l))}}if(t){const o=a(e.geometries),l=a(e.materials),c=a(e.textures),u=a(e.images),h=a(e.shapes),d=a(e.skeletons),p=a(e.animations),g=a(e.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),h.length>0&&(n.shapes=h),d.length>0&&(n.skeletons=d),p.length>0&&(n.animations=p),g.length>0&&(n.nodes=g)}return n.object=s,n;function a(o){const l=[];for(const c in o){const u=o[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const s=e.children[n];this.add(s.clone())}return this}}bt.DEFAULT_UP=new C(0,1,0);bt.DEFAULT_MATRIX_AUTO_UPDATE=!0;bt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const nn=new C,xn=new C,zr=new C,yn=new C,mi=new C,gi=new C,Zo=new C,Vr=new C,Wr=new C,qr=new C;let Ps=!1;class sn{constructor(e=new C,t=new C,n=new C){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),nn.subVectors(e,t),s.cross(nn);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){nn.subVectors(s,t),xn.subVectors(n,t),zr.subVectors(e,t);const a=nn.dot(nn),o=nn.dot(xn),l=nn.dot(zr),c=xn.dot(xn),u=xn.dot(zr),h=a*c-o*o;if(h===0)return r.set(0,0,0),null;const d=1/h,p=(c*l-o*u)*d,g=(a*u-o*l)*d;return r.set(1-p-g,g,p)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,yn)===null?!1:yn.x>=0&&yn.y>=0&&yn.x+yn.y<=1}static getUV(e,t,n,s,r,a,o,l){return Ps===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Ps=!0),this.getInterpolation(e,t,n,s,r,a,o,l)}static getInterpolation(e,t,n,s,r,a,o,l){return this.getBarycoord(e,t,n,s,yn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,yn.x),l.addScaledVector(a,yn.y),l.addScaledVector(o,yn.z),l)}static isFrontFacing(e,t,n,s){return nn.subVectors(n,t),xn.subVectors(e,t),nn.cross(xn).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return nn.subVectors(this.c,this.b),xn.subVectors(this.a,this.b),nn.cross(xn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return sn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return sn.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,n,s,r){return Ps===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Ps=!0),sn.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}getInterpolation(e,t,n,s,r){return sn.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return sn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return sn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,s=this.b,r=this.c;let a,o;mi.subVectors(s,n),gi.subVectors(r,n),Vr.subVectors(e,n);const l=mi.dot(Vr),c=gi.dot(Vr);if(l<=0&&c<=0)return t.copy(n);Wr.subVectors(e,s);const u=mi.dot(Wr),h=gi.dot(Wr);if(u>=0&&h<=u)return t.copy(s);const d=l*h-u*c;if(d<=0&&l>=0&&u<=0)return a=l/(l-u),t.copy(n).addScaledVector(mi,a);qr.subVectors(e,r);const p=mi.dot(qr),g=gi.dot(qr);if(g>=0&&p<=g)return t.copy(r);const _=p*c-l*g;if(_<=0&&c>=0&&g<=0)return o=c/(c-g),t.copy(n).addScaledVector(gi,o);const m=u*g-p*h;if(m<=0&&h-u>=0&&p-g>=0)return Zo.subVectors(r,s),o=(h-u)/(h-u+(p-g)),t.copy(s).addScaledVector(Zo,o);const f=1/(m+_+d);return a=_*f,o=d*f,t.copy(n).addScaledVector(mi,a).addScaledVector(gi,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Mc={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Pn={h:0,s:0,l:0},Is={h:0,s:0,l:0};function Xr(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}class Re{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=_t){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,nt.toWorkingColorSpace(this,t),this}setRGB(e,t,n,s=nt.workingColorSpace){return this.r=e,this.g=t,this.b=n,nt.toWorkingColorSpace(this,s),this}setHSL(e,t,n,s=nt.workingColorSpace){if(e=uh(e,1),t=Lt(t,0,1),n=Lt(n,0,1),t===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+t):n+t-n*t,a=2*n-r;this.r=Xr(a,r,e+1/3),this.g=Xr(a,r,e),this.b=Xr(a,r,e-1/3)}return nt.toWorkingColorSpace(this,s),this}setStyle(e,t=_t){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=_t){const n=Mc[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Ii(e.r),this.g=Ii(e.g),this.b=Ii(e.b),this}copyLinearToSRGB(e){return this.r=Nr(e.r),this.g=Nr(e.g),this.b=Nr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=_t){return nt.fromWorkingColorSpace(Ut.copy(this),e),Math.round(Lt(Ut.r*255,0,255))*65536+Math.round(Lt(Ut.g*255,0,255))*256+Math.round(Lt(Ut.b*255,0,255))}getHexString(e=_t){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=nt.workingColorSpace){nt.fromWorkingColorSpace(Ut.copy(this),t);const n=Ut.r,s=Ut.g,r=Ut.b,a=Math.max(n,s,r),o=Math.min(n,s,r);let l,c;const u=(o+a)/2;if(o===a)l=0,c=0;else{const h=a-o;switch(c=u<=.5?h/(a+o):h/(2-a-o),a){case n:l=(s-r)/h+(s<r?6:0);break;case s:l=(r-n)/h+2;break;case r:l=(n-s)/h+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=nt.workingColorSpace){return nt.fromWorkingColorSpace(Ut.copy(this),t),e.r=Ut.r,e.g=Ut.g,e.b=Ut.b,e}getStyle(e=_t){nt.fromWorkingColorSpace(Ut.copy(this),e);const t=Ut.r,n=Ut.g,s=Ut.b;return e!==_t?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(Pn),this.setHSL(Pn.h+e,Pn.s+t,Pn.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Pn),e.getHSL(Is);const n=Ir(Pn.h,Is.h,t),s=Ir(Pn.s,Is.s,t),r=Ir(Pn.l,Is.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Ut=new Re;Re.NAMES=Mc;let Th=0;class ai extends ki{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Th++}),this.uuid=zi(),this.name="",this.type="Material",this.blending=Pi,this.side=Gn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=ga,this.blendDst=_a,this.blendEquation=$n,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Re(0,0,0),this.blendAlpha=0,this.depthFunc=rr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Fo,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=li,this.stencilZFail=li,this.stencilZPass=li,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Pi&&(n.blending=this.blending),this.side!==Gn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==ga&&(n.blendSrc=this.blendSrc),this.blendDst!==_a&&(n.blendDst=this.blendDst),this.blendEquation!==$n&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==rr&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Fo&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==li&&(n.stencilFail=this.stencilFail),this.stencilZFail!==li&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==li&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){const a=[];for(const o in r){const l=r[o];delete l.metadata,a.push(l)}return a}if(t){const r=s(e.textures),a=s(e.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class $e extends ai{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Re(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=rc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const xt=new C,Ds=new ae;class yt{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Go,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=On,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return console.warn("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Ds.fromBufferAttribute(this,t),Ds.applyMatrix3(e),this.setXY(t,Ds.x,Ds.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)xt.fromBufferAttribute(this,t),xt.applyMatrix3(e),this.setXYZ(t,xt.x,xt.y,xt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)xt.fromBufferAttribute(this,t),xt.applyMatrix4(e),this.setXYZ(t,xt.x,xt.y,xt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)xt.fromBufferAttribute(this,t),xt.applyNormalMatrix(e),this.setXYZ(t,xt.x,xt.y,xt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)xt.fromBufferAttribute(this,t),xt.transformDirection(e),this.setXYZ(t,xt.x,xt.y,xt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Ki(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=kt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Ki(t,this.array)),t}setX(e,t){return this.normalized&&(t=kt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Ki(t,this.array)),t}setY(e,t){return this.normalized&&(t=kt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Ki(t,this.array)),t}setZ(e,t){return this.normalized&&(t=kt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Ki(t,this.array)),t}setW(e,t){return this.normalized&&(t=kt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=kt(t,this.array),n=kt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=kt(t,this.array),n=kt(n,this.array),s=kt(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=kt(t,this.array),n=kt(n,this.array),s=kt(s,this.array),r=kt(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Go&&(e.usage=this.usage),e}}class bc extends yt{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class Ec extends yt{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class Ye extends yt{constructor(e,t,n){super(new Float32Array(e),t,n)}}let wh=0;const jt=new at,Kr=new bt,_i=new C,Kt=new si,Zi=new si,Ct=new C;class lt extends ki{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:wh++}),this.uuid=zi(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(vc(e)?Ec:bc)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new Xe().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return jt.makeRotationFromQuaternion(e),this.applyMatrix4(jt),this}rotateX(e){return jt.makeRotationX(e),this.applyMatrix4(jt),this}rotateY(e){return jt.makeRotationY(e),this.applyMatrix4(jt),this}rotateZ(e){return jt.makeRotationZ(e),this.applyMatrix4(jt),this}translate(e,t,n){return jt.makeTranslation(e,t,n),this.applyMatrix4(jt),this}scale(e,t,n){return jt.makeScale(e,t,n),this.applyMatrix4(jt),this}lookAt(e){return Kr.lookAt(e),Kr.updateMatrix(),this.applyMatrix4(Kr.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(_i).negate(),this.translate(_i.x,_i.y,_i.z),this}setFromPoints(e){const t=[];for(let n=0,s=e.length;n<s;n++){const r=e[n];t.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new Ye(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new si);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new C(-1/0,-1/0,-1/0),new C(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){const r=t[n];Kt.setFromBufferAttribute(r),this.morphTargetsRelative?(Ct.addVectors(this.boundingBox.min,Kt.min),this.boundingBox.expandByPoint(Ct),Ct.addVectors(this.boundingBox.max,Kt.max),this.boundingBox.expandByPoint(Ct)):(this.boundingBox.expandByPoint(Kt.min),this.boundingBox.expandByPoint(Kt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ri);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new C,1/0);return}if(e){const n=this.boundingSphere.center;if(Kt.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){const o=t[r];Zi.setFromBufferAttribute(o),this.morphTargetsRelative?(Ct.addVectors(Kt.min,Zi.min),Kt.expandByPoint(Ct),Ct.addVectors(Kt.max,Zi.max),Kt.expandByPoint(Ct)):(Kt.expandByPoint(Zi.min),Kt.expandByPoint(Zi.max))}Kt.getCenter(n);let s=0;for(let r=0,a=e.count;r<a;r++)Ct.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(Ct));if(t)for(let r=0,a=t.length;r<a;r++){const o=t[r],l=this.morphTargetsRelative;for(let c=0,u=o.count;c<u;c++)Ct.fromBufferAttribute(o,c),l&&(_i.fromBufferAttribute(e,c),Ct.add(_i)),s=Math.max(s,n.distanceToSquared(Ct))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.array,s=t.position.array,r=t.normal.array,a=t.uv.array,o=s.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new yt(new Float32Array(4*o),4));const l=this.getAttribute("tangent").array,c=[],u=[];for(let E=0;E<o;E++)c[E]=new C,u[E]=new C;const h=new C,d=new C,p=new C,g=new ae,_=new ae,m=new ae,f=new C,x=new C;function v(E,F,k){h.fromArray(s,E*3),d.fromArray(s,F*3),p.fromArray(s,k*3),g.fromArray(a,E*2),_.fromArray(a,F*2),m.fromArray(a,k*2),d.sub(h),p.sub(h),_.sub(g),m.sub(g);const te=1/(_.x*m.y-m.x*_.y);isFinite(te)&&(f.copy(d).multiplyScalar(m.y).addScaledVector(p,-_.y).multiplyScalar(te),x.copy(p).multiplyScalar(_.x).addScaledVector(d,-m.x).multiplyScalar(te),c[E].add(f),c[F].add(f),c[k].add(f),u[E].add(x),u[F].add(x),u[k].add(x))}let S=this.groups;S.length===0&&(S=[{start:0,count:n.length}]);for(let E=0,F=S.length;E<F;++E){const k=S[E],te=k.start,I=k.count;for(let B=te,H=te+I;B<H;B+=3)v(n[B+0],n[B+1],n[B+2])}const R=new C,w=new C,A=new C,U=new C;function b(E){A.fromArray(r,E*3),U.copy(A);const F=c[E];R.copy(F),R.sub(A.multiplyScalar(A.dot(F))).normalize(),w.crossVectors(U,F);const te=w.dot(u[E])<0?-1:1;l[E*4]=R.x,l[E*4+1]=R.y,l[E*4+2]=R.z,l[E*4+3]=te}for(let E=0,F=S.length;E<F;++E){const k=S[E],te=k.start,I=k.count;for(let B=te,H=te+I;B<H;B+=3)b(n[B+0]),b(n[B+1]),b(n[B+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new yt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,p=n.count;d<p;d++)n.setXYZ(d,0,0,0);const s=new C,r=new C,a=new C,o=new C,l=new C,c=new C,u=new C,h=new C;if(e)for(let d=0,p=e.count;d<p;d+=3){const g=e.getX(d+0),_=e.getX(d+1),m=e.getX(d+2);s.fromBufferAttribute(t,g),r.fromBufferAttribute(t,_),a.fromBufferAttribute(t,m),u.subVectors(a,r),h.subVectors(s,r),u.cross(h),o.fromBufferAttribute(n,g),l.fromBufferAttribute(n,_),c.fromBufferAttribute(n,m),o.add(u),l.add(u),c.add(u),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(_,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let d=0,p=t.count;d<p;d+=3)s.fromBufferAttribute(t,d+0),r.fromBufferAttribute(t,d+1),a.fromBufferAttribute(t,d+2),u.subVectors(a,r),h.subVectors(s,r),u.cross(h),n.setXYZ(d+0,u.x,u.y,u.z),n.setXYZ(d+1,u.x,u.y,u.z),n.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Ct.fromBufferAttribute(e,t),Ct.normalize(),e.setXYZ(t,Ct.x,Ct.y,Ct.z)}toNonIndexed(){function e(o,l){const c=o.array,u=o.itemSize,h=o.normalized,d=new c.constructor(l.length*u);let p=0,g=0;for(let _=0,m=l.length;_<m;_++){o.isInterleavedBufferAttribute?p=l[_]*o.data.stride+o.offset:p=l[_]*u;for(let f=0;f<u;f++)d[g++]=c[p++]}return new yt(d,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new lt,n=this.index.array,s=this.attributes;for(const o in s){const l=s[o],c=e(l,n);t.setAttribute(o,c)}const r=this.morphAttributes;for(const o in r){const l=[],c=r[o];for(let u=0,h=c.length;u<h;u++){const d=c[u],p=e(d,n);l.push(p)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const s={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let h=0,d=c.length;h<d;h++){const p=c[h];u.push(p.toJSON(e.data))}u.length>0&&(s[l]=u,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const s=e.attributes;for(const c in s){const u=s[c];this.setAttribute(c,u.clone(t))}const r=e.morphAttributes;for(const c in r){const u=[],h=r[c];for(let d=0,p=h.length;d<p;d++)u.push(h[d].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let c=0,u=a.length;c<u;c++){const h=a[c];this.addGroup(h.start,h.count,h.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Jo=new at,Wn=new gr,Ns=new ri,Qo=new C,vi=new C,xi=new C,yi=new C,Yr=new C,Os=new C,Us=new ae,Fs=new ae,Gs=new ae,el=new C,tl=new C,nl=new C,Bs=new C,Hs=new C;class ee extends bt{constructor(e=new lt,t=new $e){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){const n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(s,e);const o=this.morphTargetInfluences;if(r&&o){Os.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const u=o[l],h=r[l];u!==0&&(Yr.fromBufferAttribute(h,e),a?Os.addScaledVector(Yr,u):Os.addScaledVector(Yr.sub(t),u))}t.add(Os)}return t}raycast(e,t){const n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Ns.copy(n.boundingSphere),Ns.applyMatrix4(r),Wn.copy(e.ray).recast(e.near),!(Ns.containsPoint(Wn.origin)===!1&&(Wn.intersectSphere(Ns,Qo)===null||Wn.origin.distanceToSquared(Qo)>(e.far-e.near)**2))&&(Jo.copy(r).invert(),Wn.copy(e.ray).applyMatrix4(Jo),!(n.boundingBox!==null&&Wn.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Wn)))}_computeIntersections(e,t,n){let s;const r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,u=r.attributes.uv1,h=r.attributes.normal,d=r.groups,p=r.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,_=d.length;g<_;g++){const m=d[g],f=a[m.materialIndex],x=Math.max(m.start,p.start),v=Math.min(o.count,Math.min(m.start+m.count,p.start+p.count));for(let S=x,R=v;S<R;S+=3){const w=o.getX(S),A=o.getX(S+1),U=o.getX(S+2);s=ks(this,f,e,n,c,u,h,w,A,U),s&&(s.faceIndex=Math.floor(S/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{const g=Math.max(0,p.start),_=Math.min(o.count,p.start+p.count);for(let m=g,f=_;m<f;m+=3){const x=o.getX(m),v=o.getX(m+1),S=o.getX(m+2);s=ks(this,a,e,n,c,u,h,x,v,S),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let g=0,_=d.length;g<_;g++){const m=d[g],f=a[m.materialIndex],x=Math.max(m.start,p.start),v=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let S=x,R=v;S<R;S+=3){const w=S,A=S+1,U=S+2;s=ks(this,f,e,n,c,u,h,w,A,U),s&&(s.faceIndex=Math.floor(S/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{const g=Math.max(0,p.start),_=Math.min(l.count,p.start+p.count);for(let m=g,f=_;m<f;m+=3){const x=m,v=m+1,S=m+2;s=ks(this,a,e,n,c,u,h,x,v,S),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}}}function Ah(i,e,t,n,s,r,a,o){let l;if(e.side===It?l=n.intersectTriangle(a,r,s,!0,o):l=n.intersectTriangle(s,r,a,e.side===Gn,o),l===null)return null;Hs.copy(o),Hs.applyMatrix4(i.matrixWorld);const c=t.ray.origin.distanceTo(Hs);return c<t.near||c>t.far?null:{distance:c,point:Hs.clone(),object:i}}function ks(i,e,t,n,s,r,a,o,l,c){i.getVertexPosition(o,vi),i.getVertexPosition(l,xi),i.getVertexPosition(c,yi);const u=Ah(i,e,t,n,vi,xi,yi,Bs);if(u){s&&(Us.fromBufferAttribute(s,o),Fs.fromBufferAttribute(s,l),Gs.fromBufferAttribute(s,c),u.uv=sn.getInterpolation(Bs,vi,xi,yi,Us,Fs,Gs,new ae)),r&&(Us.fromBufferAttribute(r,o),Fs.fromBufferAttribute(r,l),Gs.fromBufferAttribute(r,c),u.uv1=sn.getInterpolation(Bs,vi,xi,yi,Us,Fs,Gs,new ae),u.uv2=u.uv1),a&&(el.fromBufferAttribute(a,o),tl.fromBufferAttribute(a,l),nl.fromBufferAttribute(a,c),u.normal=sn.getInterpolation(Bs,vi,xi,yi,el,tl,nl,new C),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const h={a:o,b:l,c,normal:new C,materialIndex:0};sn.getNormal(vi,xi,yi,h.normal),u.face=h}return u}class Rt extends lt{constructor(e=1,t=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};const o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);const l=[],c=[],u=[],h=[];let d=0,p=0;g("z","y","x",-1,-1,n,t,e,a,r,0),g("z","y","x",1,-1,n,t,-e,a,r,1),g("x","z","y",1,1,e,n,t,s,a,2),g("x","z","y",1,-1,e,n,-t,s,a,3),g("x","y","z",1,-1,e,t,n,s,r,4),g("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new Ye(c,3)),this.setAttribute("normal",new Ye(u,3)),this.setAttribute("uv",new Ye(h,2));function g(_,m,f,x,v,S,R,w,A,U,b){const E=S/A,F=R/U,k=S/2,te=R/2,I=w/2,B=A+1,H=U+1;let Z=0,j=0;const J=new C;for(let X=0;X<H;X++){const K=X*F-te;for(let P=0;P<B;P++){const O=P*E-k;J[_]=O*x,J[m]=K*v,J[f]=I,c.push(J.x,J.y,J.z),J[_]=0,J[m]=0,J[f]=w>0?1:-1,u.push(J.x,J.y,J.z),h.push(P/A),h.push(1-X/U),Z+=1}}for(let X=0;X<U;X++)for(let K=0;K<A;K++){const P=d+K+B*X,O=d+K+B*(X+1),Y=d+(K+1)+B*(X+1),oe=d+(K+1)+B*X;l.push(P,O,oe),l.push(O,Y,oe),j+=6}o.addGroup(p,j,b),p+=j,d+=Z}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Rt(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Fi(i){const e={};for(const t in i){e[t]={};for(const n in i[t]){const s=i[t][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone():Array.isArray(s)?e[t][n]=s.slice():e[t][n]=s}}return e}function Bt(i){const e={};for(let t=0;t<i.length;t++){const n=Fi(i[t]);for(const s in n)e[s]=n[s]}return e}function Ch(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function Tc(i){return i.getRenderTarget()===null?i.outputColorSpace:nt.workingColorSpace}const hr={clone:Fi,merge:Bt};var Rh=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Lh=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Pt extends ai{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Rh,this.fragmentShader=Lh,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Fi(e.uniforms),this.uniformsGroups=Ch(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const s in this.uniforms){const a=this.uniforms[s].value;a&&a.isTexture?t.uniforms[s]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[s]={type:"m4",value:a.toArray()}:t.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class wc extends bt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new at,this.projectionMatrix=new at,this.projectionMatrixInverse=new at,this.coordinateSystem=Mn}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class Vt extends wc{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=ba*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Pr*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return ba*2*Math.atan(Math.tan(Pr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,n,s,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Pr*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/l,t-=a.offsetY*n/c,s*=a.width/l,n*=a.height/c}const o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Si=-90,Mi=1;class Ph extends bt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new Vt(Si,Mi,e,t);s.layers=this.layers,this.add(s);const r=new Vt(Si,Mi,e,t);r.layers=this.layers,this.add(r);const a=new Vt(Si,Mi,e,t);a.layers=this.layers,this.add(a);const o=new Vt(Si,Mi,e,t);o.layers=this.layers,this.add(o);const l=new Vt(Si,Mi,e,t);l.layers=this.layers,this.add(l);const c=new Vt(Si,Mi,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,s,r,a,o,l]=t;for(const c of t)this.remove(c);if(e===Mn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===cr)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,a,o,l,c,u]=this.children,h=e.getRenderTarget(),d=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,s),e.render(t,r),e.setRenderTarget(n,1,s),e.render(t,a),e.setRenderTarget(n,2,s),e.render(t,o),e.setRenderTarget(n,3,s),e.render(t,l),e.setRenderTarget(n,4,s),e.render(t,c),n.texture.generateMipmaps=_,e.setRenderTarget(n,5,s),e.render(t,u),e.setRenderTarget(h,d,p),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class Ac extends Wt{constructor(e,t,n,s,r,a,o,l,c,u){e=e!==void 0?e:[],t=t!==void 0?t:Ni,super(e,t,n,s,r,a,o,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Ih extends cn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];t.encoding!==void 0&&(os("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),t.colorSpace=t.encoding===ei?_t:Jt),this.texture=new Ac(s,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Zt}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Rt(5,5,5),r=new Pt({name:"CubemapFromEquirect",uniforms:Fi(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:It,blending:bn});r.uniforms.tEquirect.value=t;const a=new ee(s,r),o=t.minFilter;return t.minFilter===fs&&(t.minFilter=Zt),new Ph(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t,n,s){const r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,s);e.setRenderTarget(r)}}const $r=new C,Dh=new C,Nh=new Xe;class Xn{constructor(e=new C(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const s=$r.subVectors(n,t).cross(Dh.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta($r),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||Nh.getNormalMatrix(e),s=this.coplanarPoint($r).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const qn=new ri,zs=new C;class za{constructor(e=new Xn,t=new Xn,n=new Xn,s=new Xn,r=new Xn,a=new Xn){this.planes=[e,t,n,s,r,a]}set(e,t,n,s,r,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Mn){const n=this.planes,s=e.elements,r=s[0],a=s[1],o=s[2],l=s[3],c=s[4],u=s[5],h=s[6],d=s[7],p=s[8],g=s[9],_=s[10],m=s[11],f=s[12],x=s[13],v=s[14],S=s[15];if(n[0].setComponents(l-r,d-c,m-p,S-f).normalize(),n[1].setComponents(l+r,d+c,m+p,S+f).normalize(),n[2].setComponents(l+a,d+u,m+g,S+x).normalize(),n[3].setComponents(l-a,d-u,m-g,S-x).normalize(),n[4].setComponents(l-o,d-h,m-_,S-v).normalize(),t===Mn)n[5].setComponents(l+o,d+h,m+_,S+v).normalize();else if(t===cr)n[5].setComponents(o,h,_,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),qn.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),qn.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(qn)}intersectsSprite(e){return qn.center.set(0,0,0),qn.radius=.7071067811865476,qn.applyMatrix4(e.matrixWorld),this.intersectsSphere(qn)}intersectsSphere(e){const t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const s=t[n];if(zs.x=s.normal.x>0?e.max.x:e.min.x,zs.y=s.normal.y>0?e.max.y:e.min.y,zs.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(zs)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Cc(){let i=null,e=!1,t=null,n=null;function s(r,a){t(r,a),n=i.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function Oh(i,e){const t=e.isWebGL2,n=new WeakMap;function s(c,u){const h=c.array,d=c.usage,p=h.byteLength,g=i.createBuffer();i.bindBuffer(u,g),i.bufferData(u,h,d),c.onUploadCallback();let _;if(h instanceof Float32Array)_=i.FLOAT;else if(h instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(t)_=i.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else _=i.UNSIGNED_SHORT;else if(h instanceof Int16Array)_=i.SHORT;else if(h instanceof Uint32Array)_=i.UNSIGNED_INT;else if(h instanceof Int32Array)_=i.INT;else if(h instanceof Int8Array)_=i.BYTE;else if(h instanceof Uint8Array)_=i.UNSIGNED_BYTE;else if(h instanceof Uint8ClampedArray)_=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:g,type:_,bytesPerElement:h.BYTES_PER_ELEMENT,version:c.version,size:p}}function r(c,u,h){const d=u.array,p=u._updateRange,g=u.updateRanges;if(i.bindBuffer(h,c),p.count===-1&&g.length===0&&i.bufferSubData(h,0,d),g.length!==0){for(let _=0,m=g.length;_<m;_++){const f=g[_];t?i.bufferSubData(h,f.start*d.BYTES_PER_ELEMENT,d,f.start,f.count):i.bufferSubData(h,f.start*d.BYTES_PER_ELEMENT,d.subarray(f.start,f.start+f.count))}u.clearUpdateRanges()}p.count!==-1&&(t?i.bufferSubData(h,p.offset*d.BYTES_PER_ELEMENT,d,p.offset,p.count):i.bufferSubData(h,p.offset*d.BYTES_PER_ELEMENT,d.subarray(p.offset,p.offset+p.count)),p.count=-1),u.onUploadCallback()}function a(c){return c.isInterleavedBufferAttribute&&(c=c.data),n.get(c)}function o(c){c.isInterleavedBufferAttribute&&(c=c.data);const u=n.get(c);u&&(i.deleteBuffer(u.buffer),n.delete(c))}function l(c,u){if(c.isGLBufferAttribute){const d=n.get(c);(!d||d.version<c.version)&&n.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);const h=n.get(c);if(h===void 0)n.set(c,s(c,u));else if(h.version<c.version){if(h.size!==c.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(h.buffer,c,u),h.version=c.version}}return{get:a,remove:o,update:l}}class ti extends lt{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};const r=e/2,a=t/2,o=Math.floor(n),l=Math.floor(s),c=o+1,u=l+1,h=e/o,d=t/l,p=[],g=[],_=[],m=[];for(let f=0;f<u;f++){const x=f*d-a;for(let v=0;v<c;v++){const S=v*h-r;g.push(S,-x,0),_.push(0,0,1),m.push(v/o),m.push(1-f/l)}}for(let f=0;f<l;f++)for(let x=0;x<o;x++){const v=x+c*f,S=x+c*(f+1),R=x+1+c*(f+1),w=x+1+c*f;p.push(v,S,w),p.push(S,R,w)}this.setIndex(p),this.setAttribute("position",new Ye(g,3)),this.setAttribute("normal",new Ye(_,3)),this.setAttribute("uv",new Ye(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ti(e.width,e.height,e.widthSegments,e.heightSegments)}}var Uh=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Fh=`#ifdef USE_ALPHAHASH
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
#endif`,Gh=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Bh=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Hh=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,kh=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,zh=`#ifdef USE_AOMAP
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
#endif`,Vh=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Wh=`#ifdef USE_BATCHING
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
#endif`,qh=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,Xh=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Kh=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Yh=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,$h=`#ifdef USE_IRIDESCENCE
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
#endif`,jh=`#ifdef USE_BUMPMAP
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
#endif`,Zh=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Jh=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Qh=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,ed=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,td=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,nd=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,id=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,sd=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,rd=`#define PI 3.141592653589793
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
} // validated`,ad=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,od=`vec3 transformedNormal = objectNormal;
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
#endif`,ld=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,cd=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,ud=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,hd=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,dd="gl_FragColor = linearToOutputTexel( gl_FragColor );",fd=`
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
}`,pd=`#ifdef USE_ENVMAP
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
#endif`,md=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,gd=`#ifdef USE_ENVMAP
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
#endif`,_d=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,vd=`#ifdef USE_ENVMAP
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
#endif`,xd=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,yd=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Sd=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Md=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,bd=`#ifdef USE_GRADIENTMAP
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
}`,Ed=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,Td=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,wd=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Ad=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Cd=`uniform bool receiveShadow;
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
#endif`,Rd=`#ifdef USE_ENVMAP
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
#endif`,Ld=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Pd=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Id=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Dd=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Nd=`PhysicalMaterial material;
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
#endif`,Od=`struct PhysicalMaterial {
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
}`,Ud=`
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
#endif`,Fd=`#if defined( RE_IndirectDiffuse )
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
#endif`,Gd=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Bd=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Hd=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,kd=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,zd=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,Vd=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Wd=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,qd=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Xd=`#if defined( USE_POINTS_UV )
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
#endif`,Kd=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Yd=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,$d=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,jd=`#ifdef USE_MORPHNORMALS
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
#endif`,Zd=`#ifdef USE_MORPHTARGETS
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
#endif`,Jd=`#ifdef USE_MORPHTARGETS
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
#endif`,Qd=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,ef=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,tf=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,nf=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,sf=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,rf=`#ifdef USE_NORMALMAP
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
#endif`,af=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,of=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,lf=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,cf=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,uf=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,hf=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,df=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,ff=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,pf=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,mf=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,gf=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,_f=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,vf=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,xf=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,yf=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Sf=`float getShadowMask() {
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
}`,Mf=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,bf=`#ifdef USE_SKINNING
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
#endif`,Ef=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Tf=`#ifdef USE_SKINNING
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
#endif`,wf=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Af=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Cf=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Rf=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Lf=`#ifdef USE_TRANSMISSION
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
#endif`,Pf=`#ifdef USE_TRANSMISSION
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
#endif`,If=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Df=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Nf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Of=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Uf=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Ff=`uniform sampler2D t2D;
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
}`,Gf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Bf=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Hf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,kf=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,zf=`#include <common>
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
}`,Vf=`#if DEPTH_PACKING == 3200
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
}`,Wf=`#define DISTANCE
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
}`,qf=`#define DISTANCE
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
}`,Xf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Kf=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Yf=`uniform float scale;
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
}`,$f=`uniform vec3 diffuse;
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
}`,jf=`#include <common>
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
}`,Zf=`uniform vec3 diffuse;
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
}`,Jf=`#define LAMBERT
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
}`,Qf=`#define LAMBERT
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
}`,ep=`#define MATCAP
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
}`,tp=`#define MATCAP
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
}`,np=`#define NORMAL
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
}`,ip=`#define NORMAL
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
}`,sp=`#define PHONG
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
}`,rp=`#define PHONG
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
}`,ap=`#define STANDARD
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
}`,op=`#define STANDARD
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
}`,lp=`#define TOON
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
}`,cp=`#define TOON
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
}`,up=`uniform float size;
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
}`,hp=`uniform vec3 diffuse;
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
}`,dp=`#include <common>
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
}`,fp=`uniform vec3 color;
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
}`,pp=`uniform float rotation;
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
}`,mp=`uniform vec3 diffuse;
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
}`,ke={alphahash_fragment:Uh,alphahash_pars_fragment:Fh,alphamap_fragment:Gh,alphamap_pars_fragment:Bh,alphatest_fragment:Hh,alphatest_pars_fragment:kh,aomap_fragment:zh,aomap_pars_fragment:Vh,batching_pars_vertex:Wh,batching_vertex:qh,begin_vertex:Xh,beginnormal_vertex:Kh,bsdfs:Yh,iridescence_fragment:$h,bumpmap_pars_fragment:jh,clipping_planes_fragment:Zh,clipping_planes_pars_fragment:Jh,clipping_planes_pars_vertex:Qh,clipping_planes_vertex:ed,color_fragment:td,color_pars_fragment:nd,color_pars_vertex:id,color_vertex:sd,common:rd,cube_uv_reflection_fragment:ad,defaultnormal_vertex:od,displacementmap_pars_vertex:ld,displacementmap_vertex:cd,emissivemap_fragment:ud,emissivemap_pars_fragment:hd,colorspace_fragment:dd,colorspace_pars_fragment:fd,envmap_fragment:pd,envmap_common_pars_fragment:md,envmap_pars_fragment:gd,envmap_pars_vertex:_d,envmap_physical_pars_fragment:Rd,envmap_vertex:vd,fog_vertex:xd,fog_pars_vertex:yd,fog_fragment:Sd,fog_pars_fragment:Md,gradientmap_pars_fragment:bd,lightmap_fragment:Ed,lightmap_pars_fragment:Td,lights_lambert_fragment:wd,lights_lambert_pars_fragment:Ad,lights_pars_begin:Cd,lights_toon_fragment:Ld,lights_toon_pars_fragment:Pd,lights_phong_fragment:Id,lights_phong_pars_fragment:Dd,lights_physical_fragment:Nd,lights_physical_pars_fragment:Od,lights_fragment_begin:Ud,lights_fragment_maps:Fd,lights_fragment_end:Gd,logdepthbuf_fragment:Bd,logdepthbuf_pars_fragment:Hd,logdepthbuf_pars_vertex:kd,logdepthbuf_vertex:zd,map_fragment:Vd,map_pars_fragment:Wd,map_particle_fragment:qd,map_particle_pars_fragment:Xd,metalnessmap_fragment:Kd,metalnessmap_pars_fragment:Yd,morphcolor_vertex:$d,morphnormal_vertex:jd,morphtarget_pars_vertex:Zd,morphtarget_vertex:Jd,normal_fragment_begin:Qd,normal_fragment_maps:ef,normal_pars_fragment:tf,normal_pars_vertex:nf,normal_vertex:sf,normalmap_pars_fragment:rf,clearcoat_normal_fragment_begin:af,clearcoat_normal_fragment_maps:of,clearcoat_pars_fragment:lf,iridescence_pars_fragment:cf,opaque_fragment:uf,packing:hf,premultiplied_alpha_fragment:df,project_vertex:ff,dithering_fragment:pf,dithering_pars_fragment:mf,roughnessmap_fragment:gf,roughnessmap_pars_fragment:_f,shadowmap_pars_fragment:vf,shadowmap_pars_vertex:xf,shadowmap_vertex:yf,shadowmask_pars_fragment:Sf,skinbase_vertex:Mf,skinning_pars_vertex:bf,skinning_vertex:Ef,skinnormal_vertex:Tf,specularmap_fragment:wf,specularmap_pars_fragment:Af,tonemapping_fragment:Cf,tonemapping_pars_fragment:Rf,transmission_fragment:Lf,transmission_pars_fragment:Pf,uv_pars_fragment:If,uv_pars_vertex:Df,uv_vertex:Nf,worldpos_vertex:Of,background_vert:Uf,background_frag:Ff,backgroundCube_vert:Gf,backgroundCube_frag:Bf,cube_vert:Hf,cube_frag:kf,depth_vert:zf,depth_frag:Vf,distanceRGBA_vert:Wf,distanceRGBA_frag:qf,equirect_vert:Xf,equirect_frag:Kf,linedashed_vert:Yf,linedashed_frag:$f,meshbasic_vert:jf,meshbasic_frag:Zf,meshlambert_vert:Jf,meshlambert_frag:Qf,meshmatcap_vert:ep,meshmatcap_frag:tp,meshnormal_vert:np,meshnormal_frag:ip,meshphong_vert:sp,meshphong_frag:rp,meshphysical_vert:ap,meshphysical_frag:op,meshtoon_vert:lp,meshtoon_frag:cp,points_vert:up,points_frag:hp,shadow_vert:dp,shadow_frag:fp,sprite_vert:pp,sprite_frag:mp},pe={common:{diffuse:{value:new Re(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Xe},alphaMap:{value:null},alphaMapTransform:{value:new Xe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Xe}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Xe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Xe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Xe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Xe},normalScale:{value:new ae(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Xe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Xe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Xe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Xe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Re(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Re(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Xe},alphaTest:{value:0},uvTransform:{value:new Xe}},sprite:{diffuse:{value:new Re(16777215)},opacity:{value:1},center:{value:new ae(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Xe},alphaMap:{value:null},alphaMapTransform:{value:new Xe},alphaTest:{value:0}}},hn={basic:{uniforms:Bt([pe.common,pe.specularmap,pe.envmap,pe.aomap,pe.lightmap,pe.fog]),vertexShader:ke.meshbasic_vert,fragmentShader:ke.meshbasic_frag},lambert:{uniforms:Bt([pe.common,pe.specularmap,pe.envmap,pe.aomap,pe.lightmap,pe.emissivemap,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.fog,pe.lights,{emissive:{value:new Re(0)}}]),vertexShader:ke.meshlambert_vert,fragmentShader:ke.meshlambert_frag},phong:{uniforms:Bt([pe.common,pe.specularmap,pe.envmap,pe.aomap,pe.lightmap,pe.emissivemap,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.fog,pe.lights,{emissive:{value:new Re(0)},specular:{value:new Re(1118481)},shininess:{value:30}}]),vertexShader:ke.meshphong_vert,fragmentShader:ke.meshphong_frag},standard:{uniforms:Bt([pe.common,pe.envmap,pe.aomap,pe.lightmap,pe.emissivemap,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.roughnessmap,pe.metalnessmap,pe.fog,pe.lights,{emissive:{value:new Re(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ke.meshphysical_vert,fragmentShader:ke.meshphysical_frag},toon:{uniforms:Bt([pe.common,pe.aomap,pe.lightmap,pe.emissivemap,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.gradientmap,pe.fog,pe.lights,{emissive:{value:new Re(0)}}]),vertexShader:ke.meshtoon_vert,fragmentShader:ke.meshtoon_frag},matcap:{uniforms:Bt([pe.common,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.fog,{matcap:{value:null}}]),vertexShader:ke.meshmatcap_vert,fragmentShader:ke.meshmatcap_frag},points:{uniforms:Bt([pe.points,pe.fog]),vertexShader:ke.points_vert,fragmentShader:ke.points_frag},dashed:{uniforms:Bt([pe.common,pe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ke.linedashed_vert,fragmentShader:ke.linedashed_frag},depth:{uniforms:Bt([pe.common,pe.displacementmap]),vertexShader:ke.depth_vert,fragmentShader:ke.depth_frag},normal:{uniforms:Bt([pe.common,pe.bumpmap,pe.normalmap,pe.displacementmap,{opacity:{value:1}}]),vertexShader:ke.meshnormal_vert,fragmentShader:ke.meshnormal_frag},sprite:{uniforms:Bt([pe.sprite,pe.fog]),vertexShader:ke.sprite_vert,fragmentShader:ke.sprite_frag},background:{uniforms:{uvTransform:{value:new Xe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ke.background_vert,fragmentShader:ke.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:ke.backgroundCube_vert,fragmentShader:ke.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ke.cube_vert,fragmentShader:ke.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ke.equirect_vert,fragmentShader:ke.equirect_frag},distanceRGBA:{uniforms:Bt([pe.common,pe.displacementmap,{referencePosition:{value:new C},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ke.distanceRGBA_vert,fragmentShader:ke.distanceRGBA_frag},shadow:{uniforms:Bt([pe.lights,pe.fog,{color:{value:new Re(0)},opacity:{value:1}}]),vertexShader:ke.shadow_vert,fragmentShader:ke.shadow_frag}};hn.physical={uniforms:Bt([hn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Xe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Xe},clearcoatNormalScale:{value:new ae(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Xe},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Xe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Xe},sheen:{value:0},sheenColor:{value:new Re(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Xe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Xe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Xe},transmissionSamplerSize:{value:new ae},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Xe},attenuationDistance:{value:0},attenuationColor:{value:new Re(0)},specularColor:{value:new Re(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Xe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Xe},anisotropyVector:{value:new ae},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Xe}}]),vertexShader:ke.meshphysical_vert,fragmentShader:ke.meshphysical_frag};const Vs={r:0,b:0,g:0};function gp(i,e,t,n,s,r,a){const o=new Re(0);let l=r===!0?0:1,c,u,h=null,d=0,p=null;function g(m,f){let x=!1,v=f.isScene===!0?f.background:null;v&&v.isTexture&&(v=(f.backgroundBlurriness>0?t:e).get(v)),v===null?_(o,l):v&&v.isColor&&(_(v,1),x=!0);const S=i.xr.getEnvironmentBlendMode();S==="additive"?n.buffers.color.setClear(0,0,0,1,a):S==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(i.autoClear||x)&&i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil),v&&(v.isCubeTexture||v.mapping===pr)?(u===void 0&&(u=new ee(new Rt(1,1,1),new Pt({name:"BackgroundCubeMaterial",uniforms:Fi(hn.backgroundCube.uniforms),vertexShader:hn.backgroundCube.vertexShader,fragmentShader:hn.backgroundCube.fragmentShader,side:It,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(R,w,A){this.matrixWorld.copyPosition(A.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(u)),u.material.uniforms.envMap.value=v,u.material.uniforms.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=f.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=f.backgroundIntensity,u.material.toneMapped=nt.getTransfer(v.colorSpace)!==ut,(h!==v||d!==v.version||p!==i.toneMapping)&&(u.material.needsUpdate=!0,h=v,d=v.version,p=i.toneMapping),u.layers.enableAll(),m.unshift(u,u.geometry,u.material,0,0,null)):v&&v.isTexture&&(c===void 0&&(c=new ee(new ti(2,2),new Pt({name:"BackgroundMaterial",uniforms:Fi(hn.background.uniforms),vertexShader:hn.background.vertexShader,fragmentShader:hn.background.fragmentShader,side:Gn,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=v,c.material.uniforms.backgroundIntensity.value=f.backgroundIntensity,c.material.toneMapped=nt.getTransfer(v.colorSpace)!==ut,v.matrixAutoUpdate===!0&&v.updateMatrix(),c.material.uniforms.uvTransform.value.copy(v.matrix),(h!==v||d!==v.version||p!==i.toneMapping)&&(c.material.needsUpdate=!0,h=v,d=v.version,p=i.toneMapping),c.layers.enableAll(),m.unshift(c,c.geometry,c.material,0,0,null))}function _(m,f){m.getRGB(Vs,Tc(i)),n.buffers.color.setClear(Vs.r,Vs.g,Vs.b,f,a)}return{getClearColor:function(){return o},setClearColor:function(m,f=1){o.set(m),l=f,_(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(m){l=m,_(o,l)},render:g}}function _p(i,e,t,n){const s=i.getParameter(i.MAX_VERTEX_ATTRIBS),r=n.isWebGL2?null:e.get("OES_vertex_array_object"),a=n.isWebGL2||r!==null,o={},l=m(null);let c=l,u=!1;function h(I,B,H,Z,j){let J=!1;if(a){const X=_(Z,H,B);c!==X&&(c=X,p(c.object)),J=f(I,Z,H,j),J&&x(I,Z,H,j)}else{const X=B.wireframe===!0;(c.geometry!==Z.id||c.program!==H.id||c.wireframe!==X)&&(c.geometry=Z.id,c.program=H.id,c.wireframe=X,J=!0)}j!==null&&t.update(j,i.ELEMENT_ARRAY_BUFFER),(J||u)&&(u=!1,U(I,B,H,Z),j!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(j).buffer))}function d(){return n.isWebGL2?i.createVertexArray():r.createVertexArrayOES()}function p(I){return n.isWebGL2?i.bindVertexArray(I):r.bindVertexArrayOES(I)}function g(I){return n.isWebGL2?i.deleteVertexArray(I):r.deleteVertexArrayOES(I)}function _(I,B,H){const Z=H.wireframe===!0;let j=o[I.id];j===void 0&&(j={},o[I.id]=j);let J=j[B.id];J===void 0&&(J={},j[B.id]=J);let X=J[Z];return X===void 0&&(X=m(d()),J[Z]=X),X}function m(I){const B=[],H=[],Z=[];for(let j=0;j<s;j++)B[j]=0,H[j]=0,Z[j]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:B,enabledAttributes:H,attributeDivisors:Z,object:I,attributes:{},index:null}}function f(I,B,H,Z){const j=c.attributes,J=B.attributes;let X=0;const K=H.getAttributes();for(const P in K)if(K[P].location>=0){const Y=j[P];let oe=J[P];if(oe===void 0&&(P==="instanceMatrix"&&I.instanceMatrix&&(oe=I.instanceMatrix),P==="instanceColor"&&I.instanceColor&&(oe=I.instanceColor)),Y===void 0||Y.attribute!==oe||oe&&Y.data!==oe.data)return!0;X++}return c.attributesNum!==X||c.index!==Z}function x(I,B,H,Z){const j={},J=B.attributes;let X=0;const K=H.getAttributes();for(const P in K)if(K[P].location>=0){let Y=J[P];Y===void 0&&(P==="instanceMatrix"&&I.instanceMatrix&&(Y=I.instanceMatrix),P==="instanceColor"&&I.instanceColor&&(Y=I.instanceColor));const oe={};oe.attribute=Y,Y&&Y.data&&(oe.data=Y.data),j[P]=oe,X++}c.attributes=j,c.attributesNum=X,c.index=Z}function v(){const I=c.newAttributes;for(let B=0,H=I.length;B<H;B++)I[B]=0}function S(I){R(I,0)}function R(I,B){const H=c.newAttributes,Z=c.enabledAttributes,j=c.attributeDivisors;H[I]=1,Z[I]===0&&(i.enableVertexAttribArray(I),Z[I]=1),j[I]!==B&&((n.isWebGL2?i:e.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](I,B),j[I]=B)}function w(){const I=c.newAttributes,B=c.enabledAttributes;for(let H=0,Z=B.length;H<Z;H++)B[H]!==I[H]&&(i.disableVertexAttribArray(H),B[H]=0)}function A(I,B,H,Z,j,J,X){X===!0?i.vertexAttribIPointer(I,B,H,j,J):i.vertexAttribPointer(I,B,H,Z,j,J)}function U(I,B,H,Z){if(n.isWebGL2===!1&&(I.isInstancedMesh||Z.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;v();const j=Z.attributes,J=H.getAttributes(),X=B.defaultAttributeValues;for(const K in J){const P=J[K];if(P.location>=0){let O=j[K];if(O===void 0&&(K==="instanceMatrix"&&I.instanceMatrix&&(O=I.instanceMatrix),K==="instanceColor"&&I.instanceColor&&(O=I.instanceColor)),O!==void 0){const Y=O.normalized,oe=O.itemSize,he=t.get(O);if(he===void 0)continue;const de=he.buffer,Ee=he.type,Te=he.bytesPerElement,ve=n.isWebGL2===!0&&(Ee===i.INT||Ee===i.UNSIGNED_INT||O.gpuType===lc);if(O.isInterleavedBufferAttribute){const Pe=O.data,L=Pe.stride,le=O.offset;if(Pe.isInstancedInterleavedBuffer){for(let $=0;$<P.locationSize;$++)R(P.location+$,Pe.meshPerAttribute);I.isInstancedMesh!==!0&&Z._maxInstanceCount===void 0&&(Z._maxInstanceCount=Pe.meshPerAttribute*Pe.count)}else for(let $=0;$<P.locationSize;$++)S(P.location+$);i.bindBuffer(i.ARRAY_BUFFER,de);for(let $=0;$<P.locationSize;$++)A(P.location+$,oe/P.locationSize,Ee,Y,L*Te,(le+oe/P.locationSize*$)*Te,ve)}else{if(O.isInstancedBufferAttribute){for(let Pe=0;Pe<P.locationSize;Pe++)R(P.location+Pe,O.meshPerAttribute);I.isInstancedMesh!==!0&&Z._maxInstanceCount===void 0&&(Z._maxInstanceCount=O.meshPerAttribute*O.count)}else for(let Pe=0;Pe<P.locationSize;Pe++)S(P.location+Pe);i.bindBuffer(i.ARRAY_BUFFER,de);for(let Pe=0;Pe<P.locationSize;Pe++)A(P.location+Pe,oe/P.locationSize,Ee,Y,oe*Te,oe/P.locationSize*Pe*Te,ve)}}else if(X!==void 0){const Y=X[K];if(Y!==void 0)switch(Y.length){case 2:i.vertexAttrib2fv(P.location,Y);break;case 3:i.vertexAttrib3fv(P.location,Y);break;case 4:i.vertexAttrib4fv(P.location,Y);break;default:i.vertexAttrib1fv(P.location,Y)}}}}w()}function b(){k();for(const I in o){const B=o[I];for(const H in B){const Z=B[H];for(const j in Z)g(Z[j].object),delete Z[j];delete B[H]}delete o[I]}}function E(I){if(o[I.id]===void 0)return;const B=o[I.id];for(const H in B){const Z=B[H];for(const j in Z)g(Z[j].object),delete Z[j];delete B[H]}delete o[I.id]}function F(I){for(const B in o){const H=o[B];if(H[I.id]===void 0)continue;const Z=H[I.id];for(const j in Z)g(Z[j].object),delete Z[j];delete H[I.id]}}function k(){te(),u=!0,c!==l&&(c=l,p(c.object))}function te(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:h,reset:k,resetDefaultState:te,dispose:b,releaseStatesOfGeometry:E,releaseStatesOfProgram:F,initAttributes:v,enableAttribute:S,disableUnusedAttributes:w}}function vp(i,e,t,n){const s=n.isWebGL2;let r;function a(u){r=u}function o(u,h){i.drawArrays(r,u,h),t.update(h,r,1)}function l(u,h,d){if(d===0)return;let p,g;if(s)p=i,g="drawArraysInstanced";else if(p=e.get("ANGLE_instanced_arrays"),g="drawArraysInstancedANGLE",p===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}p[g](r,u,h,d),t.update(h,r,d)}function c(u,h,d){if(d===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let g=0;g<d;g++)this.render(u[g],h[g]);else{p.multiDrawArraysWEBGL(r,u,0,h,0,d);let g=0;for(let _=0;_<d;_++)g+=h[_];t.update(g,r,1)}}this.setMode=a,this.render=o,this.renderInstances=l,this.renderMultiDraw=c}function xp(i,e,t){let n;function s(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){const A=e.get("EXT_texture_filter_anisotropic");n=i.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function r(A){if(A==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const a=typeof WebGL2RenderingContext<"u"&&i.constructor.name==="WebGL2RenderingContext";let o=t.precision!==void 0?t.precision:"highp";const l=r(o);l!==o&&(console.warn("THREE.WebGLRenderer:",o,"not supported, using",l,"instead."),o=l);const c=a||e.has("WEBGL_draw_buffers"),u=t.logarithmicDepthBuffer===!0,h=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),d=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),p=i.getParameter(i.MAX_TEXTURE_SIZE),g=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),_=i.getParameter(i.MAX_VERTEX_ATTRIBS),m=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),f=i.getParameter(i.MAX_VARYING_VECTORS),x=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),v=d>0,S=a||e.has("OES_texture_float"),R=v&&S,w=a?i.getParameter(i.MAX_SAMPLES):0;return{isWebGL2:a,drawBuffers:c,getMaxAnisotropy:s,getMaxPrecision:r,precision:o,logarithmicDepthBuffer:u,maxTextures:h,maxVertexTextures:d,maxTextureSize:p,maxCubemapSize:g,maxAttributes:_,maxVertexUniforms:m,maxVaryings:f,maxFragmentUniforms:x,vertexTextures:v,floatFragmentTextures:S,floatVertexTextures:R,maxSamples:w}}function yp(i){const e=this;let t=null,n=0,s=!1,r=!1;const a=new Xn,o=new Xe,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,d){const p=h.length!==0||d||n!==0||s;return s=d,n=h.length,p},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(h,d){t=u(h,d,0)},this.setState=function(h,d,p){const g=h.clippingPlanes,_=h.clipIntersection,m=h.clipShadows,f=i.get(h);if(!s||g===null||g.length===0||r&&!m)r?u(null):c();else{const x=r?0:n,v=x*4;let S=f.clippingState||null;l.value=S,S=u(g,d,v,p);for(let R=0;R!==v;++R)S[R]=t[R];f.clippingState=S,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=x}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(h,d,p,g){const _=h!==null?h.length:0;let m=null;if(_!==0){if(m=l.value,g!==!0||m===null){const f=p+_*4,x=d.matrixWorldInverse;o.getNormalMatrix(x),(m===null||m.length<f)&&(m=new Float32Array(f));for(let v=0,S=p;v!==_;++v,S+=4)a.copy(h[v]).applyMatrix4(x,o),a.normal.toArray(m,S),m[S+3]=a.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,m}}function Sp(i){let e=new WeakMap;function t(a,o){return o===va?a.mapping=Ni:o===xa&&(a.mapping=Oi),a}function n(a){if(a&&a.isTexture){const o=a.mapping;if(o===va||o===xa)if(e.has(a)){const l=e.get(a).texture;return t(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const c=new Ih(l.height/2);return c.fromEquirectangularTexture(i,a),e.set(a,c),a.addEventListener("dispose",s),t(c.texture,a.mapping)}else return null}}return a}function s(a){const o=a.target;o.removeEventListener("dispose",s);const l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}class Va extends wc{constructor(e=-1,t=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=n-e,a=n+e,o=s+t,l=s-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=u*this.view.offsetY,l=o-u*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const Ai=4,il=[.125,.215,.35,.446,.526,.582],jn=20,jr=new Va,sl=new Re;let Zr=null,Jr=0,Qr=0;const Kn=(1+Math.sqrt(5))/2,bi=1/Kn,rl=[new C(1,1,1),new C(-1,1,1),new C(1,1,-1),new C(-1,1,-1),new C(0,Kn,bi),new C(0,Kn,-bi),new C(bi,0,Kn),new C(-bi,0,Kn),new C(Kn,bi,0),new C(-Kn,bi,0)];class al{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,s=100){Zr=this._renderer.getRenderTarget(),Jr=this._renderer.getActiveCubeFace(),Qr=this._renderer.getActiveMipmapLevel(),this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,n,s,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=cl(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=ll(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Zr,Jr,Qr),e.scissorTest=!1,Ws(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Ni||e.mapping===Oi?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Zr=this._renderer.getRenderTarget(),Jr=this._renderer.getActiveCubeFace(),Qr=this._renderer.getActiveMipmapLevel();const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Zt,minFilter:Zt,generateMipmaps:!1,type:En,format:an,colorSpace:Tn,depthBuffer:!1},s=ol(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=ol(e,t,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Mp(r)),this._blurMaterial=bp(r,e,t)}return s}_compileMaterial(e){const t=new ee(this._lodPlanes[0],e);this._renderer.compile(t,jr)}_sceneToCubeUV(e,t,n,s){const o=new Vt(90,1,t,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,h=u.autoClear,d=u.toneMapping;u.getClearColor(sl),u.toneMapping=Un,u.autoClear=!1;const p=new $e({name:"PMREM.Background",side:It,depthWrite:!1,depthTest:!1}),g=new ee(new Rt,p);let _=!1;const m=e.background;m?m.isColor&&(p.color.copy(m),e.background=null,_=!0):(p.color.copy(sl),_=!0);for(let f=0;f<6;f++){const x=f%3;x===0?(o.up.set(0,l[f],0),o.lookAt(c[f],0,0)):x===1?(o.up.set(0,0,l[f]),o.lookAt(0,c[f],0)):(o.up.set(0,l[f],0),o.lookAt(0,0,c[f]));const v=this._cubeSize;Ws(s,x*v,f>2?v:0,v,v),u.setRenderTarget(s),_&&u.render(g,o),u.render(e,o)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=d,u.autoClear=h,e.background=m}_textureToCubeUV(e,t){const n=this._renderer,s=e.mapping===Ni||e.mapping===Oi;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=cl()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=ll());const r=s?this._cubemapMaterial:this._equirectMaterial,a=new ee(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=e;const l=this._cubeSize;Ws(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(a,jr)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;for(let s=1;s<this._lodPlanes.length;s++){const r=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=rl[(s-1)%rl.length];this._blur(e,s-1,s,r,a)}t.autoClear=n}_blur(e,t,n,s,r){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,s,"latitudinal",r),this._halfBlur(a,e,n,n,s,"longitudinal",r)}_halfBlur(e,t,n,s,r,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,h=new ee(this._lodPlanes[s],c),d=c.uniforms,p=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*p):2*Math.PI/(2*jn-1),_=r/g,m=isFinite(r)?1+Math.floor(u*_):jn;m>jn&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${jn}`);const f=[];let x=0;for(let A=0;A<jn;++A){const U=A/_,b=Math.exp(-U*U/2);f.push(b),A===0?x+=b:A<m&&(x+=2*b)}for(let A=0;A<f.length;A++)f[A]=f[A]/x;d.envMap.value=e.texture,d.samples.value=m,d.weights.value=f,d.latitudinal.value=a==="latitudinal",o&&(d.poleAxis.value=o);const{_lodMax:v}=this;d.dTheta.value=g,d.mipInt.value=v-n;const S=this._sizeLods[s],R=3*S*(s>v-Ai?s-v+Ai:0),w=4*(this._cubeSize-S);Ws(t,R,w,3*S,2*S),l.setRenderTarget(t),l.render(h,jr)}}function Mp(i){const e=[],t=[],n=[];let s=i;const r=i-Ai+1+il.length;for(let a=0;a<r;a++){const o=Math.pow(2,s);t.push(o);let l=1/o;a>i-Ai?l=il[a-i+Ai-1]:a===0&&(l=0),n.push(l);const c=1/(o-2),u=-c,h=1+c,d=[u,u,h,u,h,h,u,u,h,h,u,h],p=6,g=6,_=3,m=2,f=1,x=new Float32Array(_*g*p),v=new Float32Array(m*g*p),S=new Float32Array(f*g*p);for(let w=0;w<p;w++){const A=w%3*2/3-1,U=w>2?0:-1,b=[A,U,0,A+2/3,U,0,A+2/3,U+1,0,A,U,0,A+2/3,U+1,0,A,U+1,0];x.set(b,_*g*w),v.set(d,m*g*w);const E=[w,w,w,w,w,w];S.set(E,f*g*w)}const R=new lt;R.setAttribute("position",new yt(x,_)),R.setAttribute("uv",new yt(v,m)),R.setAttribute("faceIndex",new yt(S,f)),e.push(R),s>Ai&&s--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function ol(i,e,t){const n=new cn(i,e,t);return n.texture.mapping=pr,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Ws(i,e,t,n,s){i.viewport.set(e,t,n,s),i.scissor.set(e,t,n,s)}function bp(i,e,t){const n=new Float32Array(jn),s=new C(0,1,0);return new Pt({name:"SphericalGaussianBlur",defines:{n:jn,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Wa(),fragmentShader:`

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
		`,blending:bn,depthTest:!1,depthWrite:!1})}function ll(){return new Pt({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Wa(),fragmentShader:`

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
		`,blending:bn,depthTest:!1,depthWrite:!1})}function cl(){return new Pt({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Wa(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:bn,depthTest:!1,depthWrite:!1})}function Wa(){return`

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
	`}function Ep(i){let e=new WeakMap,t=null;function n(o){if(o&&o.isTexture){const l=o.mapping,c=l===va||l===xa,u=l===Ni||l===Oi;if(c||u)if(o.isRenderTargetTexture&&o.needsPMREMUpdate===!0){o.needsPMREMUpdate=!1;let h=e.get(o);return t===null&&(t=new al(i)),h=c?t.fromEquirectangular(o,h):t.fromCubemap(o,h),e.set(o,h),h.texture}else{if(e.has(o))return e.get(o).texture;{const h=o.image;if(c&&h&&h.height>0||u&&h&&s(h)){t===null&&(t=new al(i));const d=c?t.fromEquirectangular(o):t.fromCubemap(o);return e.set(o,d),o.addEventListener("dispose",r),d.texture}else return null}}}return o}function s(o){let l=0;const c=6;for(let u=0;u<c;u++)o[u]!==void 0&&l++;return l===c}function r(o){const l=o.target;l.removeEventListener("dispose",r);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:a}}function Tp(i){const e={};function t(n){if(e[n]!==void 0)return e[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(n){n.isWebGL2?(t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance")):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(n){const s=t(n);return s===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function wp(i,e,t,n){const s={},r=new WeakMap;function a(h){const d=h.target;d.index!==null&&e.remove(d.index);for(const g in d.attributes)e.remove(d.attributes[g]);for(const g in d.morphAttributes){const _=d.morphAttributes[g];for(let m=0,f=_.length;m<f;m++)e.remove(_[m])}d.removeEventListener("dispose",a),delete s[d.id];const p=r.get(d);p&&(e.remove(p),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function o(h,d){return s[d.id]===!0||(d.addEventListener("dispose",a),s[d.id]=!0,t.memory.geometries++),d}function l(h){const d=h.attributes;for(const g in d)e.update(d[g],i.ARRAY_BUFFER);const p=h.morphAttributes;for(const g in p){const _=p[g];for(let m=0,f=_.length;m<f;m++)e.update(_[m],i.ARRAY_BUFFER)}}function c(h){const d=[],p=h.index,g=h.attributes.position;let _=0;if(p!==null){const x=p.array;_=p.version;for(let v=0,S=x.length;v<S;v+=3){const R=x[v+0],w=x[v+1],A=x[v+2];d.push(R,w,w,A,A,R)}}else if(g!==void 0){const x=g.array;_=g.version;for(let v=0,S=x.length/3-1;v<S;v+=3){const R=v+0,w=v+1,A=v+2;d.push(R,w,w,A,A,R)}}else return;const m=new(vc(d)?Ec:bc)(d,1);m.version=_;const f=r.get(h);f&&e.remove(f),r.set(h,m)}function u(h){const d=r.get(h);if(d){const p=h.index;p!==null&&d.version<p.version&&c(h)}else c(h);return r.get(h)}return{get:o,update:l,getWireframeAttribute:u}}function Ap(i,e,t,n){const s=n.isWebGL2;let r;function a(p){r=p}let o,l;function c(p){o=p.type,l=p.bytesPerElement}function u(p,g){i.drawElements(r,g,o,p*l),t.update(g,r,1)}function h(p,g,_){if(_===0)return;let m,f;if(s)m=i,f="drawElementsInstanced";else if(m=e.get("ANGLE_instanced_arrays"),f="drawElementsInstancedANGLE",m===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}m[f](r,g,o,p*l,_),t.update(g,r,_)}function d(p,g,_){if(_===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let f=0;f<_;f++)this.render(p[f]/l,g[f]);else{m.multiDrawElementsWEBGL(r,g,0,o,p,0,_);let f=0;for(let x=0;x<_;x++)f+=g[x];t.update(f,r,1)}}this.setMode=a,this.setIndex=c,this.render=u,this.renderInstances=h,this.renderMultiDraw=d}function Cp(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(t.calls++,a){case i.TRIANGLES:t.triangles+=o*(r/3);break;case i.LINES:t.lines+=o*(r/2);break;case i.LINE_STRIP:t.lines+=o*(r-1);break;case i.LINE_LOOP:t.lines+=o*r;break;case i.POINTS:t.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function Rp(i,e){return i[0]-e[0]}function Lp(i,e){return Math.abs(e[1])-Math.abs(i[1])}function Pp(i,e,t){const n={},s=new Float32Array(8),r=new WeakMap,a=new ht,o=[];for(let c=0;c<8;c++)o[c]=[c,0];function l(c,u,h){const d=c.morphTargetInfluences;if(e.isWebGL2===!0){const g=u.morphAttributes.position||u.morphAttributes.normal||u.morphAttributes.color,_=g!==void 0?g.length:0;let m=r.get(u);if(m===void 0||m.count!==_){let B=function(){te.dispose(),r.delete(u),u.removeEventListener("dispose",B)};var p=B;m!==void 0&&m.texture.dispose();const v=u.morphAttributes.position!==void 0,S=u.morphAttributes.normal!==void 0,R=u.morphAttributes.color!==void 0,w=u.morphAttributes.position||[],A=u.morphAttributes.normal||[],U=u.morphAttributes.color||[];let b=0;v===!0&&(b=1),S===!0&&(b=2),R===!0&&(b=3);let E=u.attributes.position.count*b,F=1;E>e.maxTextureSize&&(F=Math.ceil(E/e.maxTextureSize),E=e.maxTextureSize);const k=new Float32Array(E*F*4*_),te=new Sc(k,E,F,_);te.type=On,te.needsUpdate=!0;const I=b*4;for(let H=0;H<_;H++){const Z=w[H],j=A[H],J=U[H],X=E*F*4*H;for(let K=0;K<Z.count;K++){const P=K*I;v===!0&&(a.fromBufferAttribute(Z,K),k[X+P+0]=a.x,k[X+P+1]=a.y,k[X+P+2]=a.z,k[X+P+3]=0),S===!0&&(a.fromBufferAttribute(j,K),k[X+P+4]=a.x,k[X+P+5]=a.y,k[X+P+6]=a.z,k[X+P+7]=0),R===!0&&(a.fromBufferAttribute(J,K),k[X+P+8]=a.x,k[X+P+9]=a.y,k[X+P+10]=a.z,k[X+P+11]=J.itemSize===4?a.w:1)}}m={count:_,texture:te,size:new ae(E,F)},r.set(u,m),u.addEventListener("dispose",B)}let f=0;for(let v=0;v<d.length;v++)f+=d[v];const x=u.morphTargetsRelative?1:1-f;h.getUniforms().setValue(i,"morphTargetBaseInfluence",x),h.getUniforms().setValue(i,"morphTargetInfluences",d),h.getUniforms().setValue(i,"morphTargetsTexture",m.texture,t),h.getUniforms().setValue(i,"morphTargetsTextureSize",m.size)}else{const g=d===void 0?0:d.length;let _=n[u.id];if(_===void 0||_.length!==g){_=[];for(let S=0;S<g;S++)_[S]=[S,0];n[u.id]=_}for(let S=0;S<g;S++){const R=_[S];R[0]=S,R[1]=d[S]}_.sort(Lp);for(let S=0;S<8;S++)S<g&&_[S][1]?(o[S][0]=_[S][0],o[S][1]=_[S][1]):(o[S][0]=Number.MAX_SAFE_INTEGER,o[S][1]=0);o.sort(Rp);const m=u.morphAttributes.position,f=u.morphAttributes.normal;let x=0;for(let S=0;S<8;S++){const R=o[S],w=R[0],A=R[1];w!==Number.MAX_SAFE_INTEGER&&A?(m&&u.getAttribute("morphTarget"+S)!==m[w]&&u.setAttribute("morphTarget"+S,m[w]),f&&u.getAttribute("morphNormal"+S)!==f[w]&&u.setAttribute("morphNormal"+S,f[w]),s[S]=A,x+=A):(m&&u.hasAttribute("morphTarget"+S)===!0&&u.deleteAttribute("morphTarget"+S),f&&u.hasAttribute("morphNormal"+S)===!0&&u.deleteAttribute("morphNormal"+S),s[S]=0)}const v=u.morphTargetsRelative?1:1-x;h.getUniforms().setValue(i,"morphTargetBaseInfluence",v),h.getUniforms().setValue(i,"morphTargetInfluences",s)}}return{update:l}}function Ip(i,e,t,n){let s=new WeakMap;function r(l){const c=n.render.frame,u=l.geometry,h=e.get(l,u);if(s.get(h)!==c&&(e.update(h),s.set(h,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),s.get(l)!==c&&(t.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,i.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){const d=l.skeleton;s.get(d)!==c&&(d.update(),s.set(d,c))}return h}function a(){s=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:r,dispose:a}}class Rc extends Wt{constructor(e,t,n,s,r,a,o,l,c,u){if(u=u!==void 0?u:Qn,u!==Qn&&u!==Ui)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===Qn&&(n=Nn),n===void 0&&u===Ui&&(n=Jn),super(null,s,r,a,o,l,u,n,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=o!==void 0?o:Ht,this.minFilter=l!==void 0?l:Ht,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const Lc=new Wt,Pc=new Rc(1,1);Pc.compareFunction=_c;const Ic=new Sc,Dc=new gh,Nc=new Ac,ul=[],hl=[],dl=new Float32Array(16),fl=new Float32Array(9),pl=new Float32Array(4);function Vi(i,e,t){const n=i[0];if(n<=0||n>0)return i;const s=e*t;let r=ul[s];if(r===void 0&&(r=new Float32Array(s),ul[s]=r),e!==0){n.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,i[a].toArray(r,o)}return r}function Et(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function Tt(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function _r(i,e){let t=hl[e];t===void 0&&(t=new Int32Array(e),hl[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function Dp(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function Np(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Et(t,e))return;i.uniform2fv(this.addr,e),Tt(t,e)}}function Op(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Et(t,e))return;i.uniform3fv(this.addr,e),Tt(t,e)}}function Up(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Et(t,e))return;i.uniform4fv(this.addr,e),Tt(t,e)}}function Fp(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Et(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),Tt(t,e)}else{if(Et(t,n))return;pl.set(n),i.uniformMatrix2fv(this.addr,!1,pl),Tt(t,n)}}function Gp(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Et(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),Tt(t,e)}else{if(Et(t,n))return;fl.set(n),i.uniformMatrix3fv(this.addr,!1,fl),Tt(t,n)}}function Bp(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Et(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),Tt(t,e)}else{if(Et(t,n))return;dl.set(n),i.uniformMatrix4fv(this.addr,!1,dl),Tt(t,n)}}function Hp(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function kp(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Et(t,e))return;i.uniform2iv(this.addr,e),Tt(t,e)}}function zp(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Et(t,e))return;i.uniform3iv(this.addr,e),Tt(t,e)}}function Vp(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Et(t,e))return;i.uniform4iv(this.addr,e),Tt(t,e)}}function Wp(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function qp(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Et(t,e))return;i.uniform2uiv(this.addr,e),Tt(t,e)}}function Xp(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Et(t,e))return;i.uniform3uiv(this.addr,e),Tt(t,e)}}function Kp(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Et(t,e))return;i.uniform4uiv(this.addr,e),Tt(t,e)}}function Yp(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);const r=this.type===i.SAMPLER_2D_SHADOW?Pc:Lc;t.setTexture2D(e||r,s)}function $p(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||Dc,s)}function jp(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTextureCube(e||Nc,s)}function Zp(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||Ic,s)}function Jp(i){switch(i){case 5126:return Dp;case 35664:return Np;case 35665:return Op;case 35666:return Up;case 35674:return Fp;case 35675:return Gp;case 35676:return Bp;case 5124:case 35670:return Hp;case 35667:case 35671:return kp;case 35668:case 35672:return zp;case 35669:case 35673:return Vp;case 5125:return Wp;case 36294:return qp;case 36295:return Xp;case 36296:return Kp;case 35678:case 36198:case 36298:case 36306:case 35682:return Yp;case 35679:case 36299:case 36307:return $p;case 35680:case 36300:case 36308:case 36293:return jp;case 36289:case 36303:case 36311:case 36292:return Zp}}function Qp(i,e){i.uniform1fv(this.addr,e)}function em(i,e){const t=Vi(e,this.size,2);i.uniform2fv(this.addr,t)}function tm(i,e){const t=Vi(e,this.size,3);i.uniform3fv(this.addr,t)}function nm(i,e){const t=Vi(e,this.size,4);i.uniform4fv(this.addr,t)}function im(i,e){const t=Vi(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function sm(i,e){const t=Vi(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function rm(i,e){const t=Vi(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function am(i,e){i.uniform1iv(this.addr,e)}function om(i,e){i.uniform2iv(this.addr,e)}function lm(i,e){i.uniform3iv(this.addr,e)}function cm(i,e){i.uniform4iv(this.addr,e)}function um(i,e){i.uniform1uiv(this.addr,e)}function hm(i,e){i.uniform2uiv(this.addr,e)}function dm(i,e){i.uniform3uiv(this.addr,e)}function fm(i,e){i.uniform4uiv(this.addr,e)}function pm(i,e,t){const n=this.cache,s=e.length,r=_r(t,s);Et(n,r)||(i.uniform1iv(this.addr,r),Tt(n,r));for(let a=0;a!==s;++a)t.setTexture2D(e[a]||Lc,r[a])}function mm(i,e,t){const n=this.cache,s=e.length,r=_r(t,s);Et(n,r)||(i.uniform1iv(this.addr,r),Tt(n,r));for(let a=0;a!==s;++a)t.setTexture3D(e[a]||Dc,r[a])}function gm(i,e,t){const n=this.cache,s=e.length,r=_r(t,s);Et(n,r)||(i.uniform1iv(this.addr,r),Tt(n,r));for(let a=0;a!==s;++a)t.setTextureCube(e[a]||Nc,r[a])}function _m(i,e,t){const n=this.cache,s=e.length,r=_r(t,s);Et(n,r)||(i.uniform1iv(this.addr,r),Tt(n,r));for(let a=0;a!==s;++a)t.setTexture2DArray(e[a]||Ic,r[a])}function vm(i){switch(i){case 5126:return Qp;case 35664:return em;case 35665:return tm;case 35666:return nm;case 35674:return im;case 35675:return sm;case 35676:return rm;case 5124:case 35670:return am;case 35667:case 35671:return om;case 35668:case 35672:return lm;case 35669:case 35673:return cm;case 5125:return um;case 36294:return hm;case 36295:return dm;case 36296:return fm;case 35678:case 36198:case 36298:case 36306:case 35682:return pm;case 35679:case 36299:case 36307:return mm;case 35680:case 36300:case 36308:case 36293:return gm;case 36289:case 36303:case 36311:case 36292:return _m}}class xm{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=Jp(t.type)}}class ym{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=vm(t.type)}}class Sm{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const s=this.seq;for(let r=0,a=s.length;r!==a;++r){const o=s[r];o.setValue(e,t[o.id],n)}}}const ea=/(\w+)(\])?(\[|\.)?/g;function ml(i,e){i.seq.push(e),i.map[e.id]=e}function Mm(i,e,t){const n=i.name,s=n.length;for(ea.lastIndex=0;;){const r=ea.exec(n),a=ea.lastIndex;let o=r[1];const l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===s){ml(t,c===void 0?new xm(o,i,e):new ym(o,i,e));break}else{let h=t.map[o];h===void 0&&(h=new Sm(o),ml(t,h)),t=h}}}class ir{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){const r=e.getActiveUniform(t,s),a=e.getUniformLocation(t,r.name);Mm(r,a,this)}}setValue(e,t,n,s){const r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){const s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,a=t.length;r!==a;++r){const o=t[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,s)}}static seqWithValue(e,t){const n=[];for(let s=0,r=e.length;s!==r;++s){const a=e[s];a.id in t&&n.push(a)}return n}}function gl(i,e,t){const n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}const bm=37297;let Em=0;function Tm(i,e){const t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=s;a<r;a++){const o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}function wm(i){const e=nt.getPrimaries(nt.workingColorSpace),t=nt.getPrimaries(i);let n;switch(e===t?n="":e===lr&&t===or?n="LinearDisplayP3ToLinearSRGB":e===or&&t===lr&&(n="LinearSRGBToLinearDisplayP3"),i){case Tn:case mr:return[n,"LinearTransferOETF"];case _t:case Ha:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",i),[n,"LinearTransferOETF"]}}function _l(i,e,t){const n=i.getShaderParameter(e,i.COMPILE_STATUS),s=i.getShaderInfoLog(e).trim();if(n&&s==="")return"";const r=/ERROR: 0:(\d+)/.exec(s);if(r){const a=parseInt(r[1]);return t.toUpperCase()+`

`+s+`

`+Tm(i.getShaderSource(e),a)}else return s}function Am(i,e){const t=wm(e);return`vec4 ${i}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function Cm(i,e){let t;switch(e){case Hu:t="Linear";break;case ku:t="Reinhard";break;case zu:t="OptimizedCineon";break;case ac:t="ACESFilmic";break;case Wu:t="AgX";break;case Vu:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function Rm(i){return[i.extensionDerivatives||i.envMapCubeUVHeight||i.bumpMap||i.normalMapTangentSpace||i.clearcoatNormalMap||i.flatShading||i.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(i.extensionFragDepth||i.logarithmicDepthBuffer)&&i.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",i.extensionDrawBuffers&&i.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(i.extensionShaderTextureLOD||i.envMap||i.transmission)&&i.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Ci).join(`
`)}function Lm(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":""].filter(Ci).join(`
`)}function Pm(i){const e=[];for(const t in i){const n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function Im(i,e){const t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const r=i.getActiveAttrib(e,s),a=r.name;let o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),t[a]={type:r.type,location:i.getAttribLocation(e,a),locationSize:o}}return t}function Ci(i){return i!==""}function vl(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function xl(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Dm=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ta(i){return i.replace(Dm,Om)}const Nm=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function Om(i,e){let t=ke[e];if(t===void 0){const n=Nm.get(e);if(n!==void 0)t=ke[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return Ta(t)}const Um=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function yl(i){return i.replace(Um,Fm)}function Fm(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Sl(i){let e="precision "+i.precision+` float;
precision `+i.precision+" int;";return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function Gm(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===sc?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===pu?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===Sn&&(e="SHADOWMAP_TYPE_VSM"),e}function Bm(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case Ni:case Oi:e="ENVMAP_TYPE_CUBE";break;case pr:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Hm(i){let e="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case Oi:e="ENVMAP_MODE_REFRACTION";break}return e}function km(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case rc:e="ENVMAP_BLENDING_MULTIPLY";break;case Gu:e="ENVMAP_BLENDING_MIX";break;case Bu:e="ENVMAP_BLENDING_ADD";break}return e}function zm(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function Vm(i,e,t,n){const s=i.getContext(),r=t.defines;let a=t.vertexShader,o=t.fragmentShader;const l=Gm(t),c=Bm(t),u=Hm(t),h=km(t),d=zm(t),p=t.isWebGL2?"":Rm(t),g=Lm(t),_=Pm(r),m=s.createProgram();let f,x,v=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(f=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(Ci).join(`
`),f.length>0&&(f+=`
`),x=[p,"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(Ci).join(`
`),x.length>0&&(x+=`
`)):(f=[Sl(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ci).join(`
`),x=[p,Sl(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Un?"#define TONE_MAPPING":"",t.toneMapping!==Un?ke.tonemapping_pars_fragment:"",t.toneMapping!==Un?Cm("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",ke.colorspace_pars_fragment,Am("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Ci).join(`
`)),a=Ta(a),a=vl(a,t),a=xl(a,t),o=Ta(o),o=vl(o,t),o=xl(o,t),a=yl(a),o=yl(o),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,f=[g,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+f,x=["precision mediump sampler2DArray;","#define varying in",t.glslVersion===Bo?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Bo?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+x);const S=v+f+a,R=v+x+o,w=gl(s,s.VERTEX_SHADER,S),A=gl(s,s.FRAGMENT_SHADER,R);s.attachShader(m,w),s.attachShader(m,A),t.index0AttributeName!==void 0?s.bindAttribLocation(m,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(m,0,"position"),s.linkProgram(m);function U(k){if(i.debug.checkShaderErrors){const te=s.getProgramInfoLog(m).trim(),I=s.getShaderInfoLog(w).trim(),B=s.getShaderInfoLog(A).trim();let H=!0,Z=!0;if(s.getProgramParameter(m,s.LINK_STATUS)===!1)if(H=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,m,w,A);else{const j=_l(s,w,"vertex"),J=_l(s,A,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(m,s.VALIDATE_STATUS)+`

Program Info Log: `+te+`
`+j+`
`+J)}else te!==""?console.warn("THREE.WebGLProgram: Program Info Log:",te):(I===""||B==="")&&(Z=!1);Z&&(k.diagnostics={runnable:H,programLog:te,vertexShader:{log:I,prefix:f},fragmentShader:{log:B,prefix:x}})}s.deleteShader(w),s.deleteShader(A),b=new ir(s,m),E=Im(s,m)}let b;this.getUniforms=function(){return b===void 0&&U(this),b};let E;this.getAttributes=function(){return E===void 0&&U(this),E};let F=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return F===!1&&(F=s.getProgramParameter(m,bm)),F},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(m),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Em++,this.cacheKey=e,this.usedTimes=1,this.program=m,this.vertexShader=w,this.fragmentShader=A,this}let Wm=0;class qm{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(n),a=this._getShaderCacheForMaterial(e);return a.has(s)===!1&&(a.add(s),s.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new Xm(e),t.set(e,n)),n}}class Xm{constructor(e){this.id=Wm++,this.code=e,this.usedTimes=0}}function Km(i,e,t,n,s,r,a){const o=new ka,l=new qm,c=[],u=s.isWebGL2,h=s.logarithmicDepthBuffer,d=s.vertexTextures;let p=s.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(b){return b===0?"uv":`uv${b}`}function m(b,E,F,k,te){const I=k.fog,B=te.geometry,H=b.isMeshStandardMaterial?k.environment:null,Z=(b.isMeshStandardMaterial?t:e).get(b.envMap||H),j=Z&&Z.mapping===pr?Z.image.height:null,J=g[b.type];b.precision!==null&&(p=s.getMaxPrecision(b.precision),p!==b.precision&&console.warn("THREE.WebGLProgram.getParameters:",b.precision,"not supported, using",p,"instead."));const X=B.morphAttributes.position||B.morphAttributes.normal||B.morphAttributes.color,K=X!==void 0?X.length:0;let P=0;B.morphAttributes.position!==void 0&&(P=1),B.morphAttributes.normal!==void 0&&(P=2),B.morphAttributes.color!==void 0&&(P=3);let O,Y,oe,he;if(J){const Ft=hn[J];O=Ft.vertexShader,Y=Ft.fragmentShader}else O=b.vertexShader,Y=b.fragmentShader,l.update(b),oe=l.getVertexShaderID(b),he=l.getFragmentShaderID(b);const de=i.getRenderTarget(),Ee=te.isInstancedMesh===!0,Te=te.isBatchedMesh===!0,ve=!!b.map,Pe=!!b.matcap,L=!!Z,le=!!b.aoMap,$=!!b.lightMap,Q=!!b.bumpMap,W=!!b.normalMap,xe=!!b.displacementMap,ce=!!b.emissiveMap,M=!!b.metalnessMap,y=!!b.roughnessMap,N=b.anisotropy>0,ne=b.clearcoat>0,ie=b.iridescence>0,se=b.sheen>0,be=b.transmission>0,me=N&&!!b.anisotropyMap,ye=ne&&!!b.clearcoatMap,Ce=ne&&!!b.clearcoatNormalMap,Oe=ne&&!!b.clearcoatRoughnessMap,re=ie&&!!b.iridescenceMap,Ke=ie&&!!b.iridescenceThicknessMap,ze=se&&!!b.sheenColorMap,Ie=se&&!!b.sheenRoughnessMap,we=!!b.specularMap,Me=!!b.specularColorMap,Ge=!!b.specularIntensityMap,je=be&&!!b.transmissionMap,ct=be&&!!b.thicknessMap,We=!!b.gradientMap,fe=!!b.alphaMap,D=b.alphaTest>0,ge=!!b.alphaHash,_e=!!b.extensions,Ue=!!B.attributes.uv1,De=!!B.attributes.uv2,it=!!B.attributes.uv3;let st=Un;return b.toneMapped&&(de===null||de.isXRRenderTarget===!0)&&(st=i.toneMapping),{isWebGL2:u,shaderID:J,shaderType:b.type,shaderName:b.name,vertexShader:O,fragmentShader:Y,defines:b.defines,customVertexShaderID:oe,customFragmentShaderID:he,isRawShaderMaterial:b.isRawShaderMaterial===!0,glslVersion:b.glslVersion,precision:p,batching:Te,instancing:Ee,instancingColor:Ee&&te.instanceColor!==null,supportsVertexTextures:d,outputColorSpace:de===null?i.outputColorSpace:de.isXRRenderTarget===!0?de.texture.colorSpace:Tn,map:ve,matcap:Pe,envMap:L,envMapMode:L&&Z.mapping,envMapCubeUVHeight:j,aoMap:le,lightMap:$,bumpMap:Q,normalMap:W,displacementMap:d&&xe,emissiveMap:ce,normalMapObjectSpace:W&&b.normalMapType===nh,normalMapTangentSpace:W&&b.normalMapType===gc,metalnessMap:M,roughnessMap:y,anisotropy:N,anisotropyMap:me,clearcoat:ne,clearcoatMap:ye,clearcoatNormalMap:Ce,clearcoatRoughnessMap:Oe,iridescence:ie,iridescenceMap:re,iridescenceThicknessMap:Ke,sheen:se,sheenColorMap:ze,sheenRoughnessMap:Ie,specularMap:we,specularColorMap:Me,specularIntensityMap:Ge,transmission:be,transmissionMap:je,thicknessMap:ct,gradientMap:We,opaque:b.transparent===!1&&b.blending===Pi,alphaMap:fe,alphaTest:D,alphaHash:ge,combine:b.combine,mapUv:ve&&_(b.map.channel),aoMapUv:le&&_(b.aoMap.channel),lightMapUv:$&&_(b.lightMap.channel),bumpMapUv:Q&&_(b.bumpMap.channel),normalMapUv:W&&_(b.normalMap.channel),displacementMapUv:xe&&_(b.displacementMap.channel),emissiveMapUv:ce&&_(b.emissiveMap.channel),metalnessMapUv:M&&_(b.metalnessMap.channel),roughnessMapUv:y&&_(b.roughnessMap.channel),anisotropyMapUv:me&&_(b.anisotropyMap.channel),clearcoatMapUv:ye&&_(b.clearcoatMap.channel),clearcoatNormalMapUv:Ce&&_(b.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Oe&&_(b.clearcoatRoughnessMap.channel),iridescenceMapUv:re&&_(b.iridescenceMap.channel),iridescenceThicknessMapUv:Ke&&_(b.iridescenceThicknessMap.channel),sheenColorMapUv:ze&&_(b.sheenColorMap.channel),sheenRoughnessMapUv:Ie&&_(b.sheenRoughnessMap.channel),specularMapUv:we&&_(b.specularMap.channel),specularColorMapUv:Me&&_(b.specularColorMap.channel),specularIntensityMapUv:Ge&&_(b.specularIntensityMap.channel),transmissionMapUv:je&&_(b.transmissionMap.channel),thicknessMapUv:ct&&_(b.thicknessMap.channel),alphaMapUv:fe&&_(b.alphaMap.channel),vertexTangents:!!B.attributes.tangent&&(W||N),vertexColors:b.vertexColors,vertexAlphas:b.vertexColors===!0&&!!B.attributes.color&&B.attributes.color.itemSize===4,vertexUv1s:Ue,vertexUv2s:De,vertexUv3s:it,pointsUvs:te.isPoints===!0&&!!B.attributes.uv&&(ve||fe),fog:!!I,useFog:b.fog===!0,fogExp2:I&&I.isFogExp2,flatShading:b.flatShading===!0,sizeAttenuation:b.sizeAttenuation===!0,logarithmicDepthBuffer:h,skinning:te.isSkinnedMesh===!0,morphTargets:B.morphAttributes.position!==void 0,morphNormals:B.morphAttributes.normal!==void 0,morphColors:B.morphAttributes.color!==void 0,morphTargetsCount:K,morphTextureStride:P,numDirLights:E.directional.length,numPointLights:E.point.length,numSpotLights:E.spot.length,numSpotLightMaps:E.spotLightMap.length,numRectAreaLights:E.rectArea.length,numHemiLights:E.hemi.length,numDirLightShadows:E.directionalShadowMap.length,numPointLightShadows:E.pointShadowMap.length,numSpotLightShadows:E.spotShadowMap.length,numSpotLightShadowsWithMaps:E.numSpotLightShadowsWithMaps,numLightProbes:E.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:b.dithering,shadowMapEnabled:i.shadowMap.enabled&&F.length>0,shadowMapType:i.shadowMap.type,toneMapping:st,useLegacyLights:i._useLegacyLights,decodeVideoTexture:ve&&b.map.isVideoTexture===!0&&nt.getTransfer(b.map.colorSpace)===ut,premultipliedAlpha:b.premultipliedAlpha,doubleSided:b.side===Dt,flipSided:b.side===It,useDepthPacking:b.depthPacking>=0,depthPacking:b.depthPacking||0,index0AttributeName:b.index0AttributeName,extensionDerivatives:_e&&b.extensions.derivatives===!0,extensionFragDepth:_e&&b.extensions.fragDepth===!0,extensionDrawBuffers:_e&&b.extensions.drawBuffers===!0,extensionShaderTextureLOD:_e&&b.extensions.shaderTextureLOD===!0,extensionClipCullDistance:_e&&b.extensions.clipCullDistance&&n.has("WEBGL_clip_cull_distance"),rendererExtensionFragDepth:u||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:u||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:u||n.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:b.customProgramCacheKey()}}function f(b){const E=[];if(b.shaderID?E.push(b.shaderID):(E.push(b.customVertexShaderID),E.push(b.customFragmentShaderID)),b.defines!==void 0)for(const F in b.defines)E.push(F),E.push(b.defines[F]);return b.isRawShaderMaterial===!1&&(x(E,b),v(E,b),E.push(i.outputColorSpace)),E.push(b.customProgramCacheKey),E.join()}function x(b,E){b.push(E.precision),b.push(E.outputColorSpace),b.push(E.envMapMode),b.push(E.envMapCubeUVHeight),b.push(E.mapUv),b.push(E.alphaMapUv),b.push(E.lightMapUv),b.push(E.aoMapUv),b.push(E.bumpMapUv),b.push(E.normalMapUv),b.push(E.displacementMapUv),b.push(E.emissiveMapUv),b.push(E.metalnessMapUv),b.push(E.roughnessMapUv),b.push(E.anisotropyMapUv),b.push(E.clearcoatMapUv),b.push(E.clearcoatNormalMapUv),b.push(E.clearcoatRoughnessMapUv),b.push(E.iridescenceMapUv),b.push(E.iridescenceThicknessMapUv),b.push(E.sheenColorMapUv),b.push(E.sheenRoughnessMapUv),b.push(E.specularMapUv),b.push(E.specularColorMapUv),b.push(E.specularIntensityMapUv),b.push(E.transmissionMapUv),b.push(E.thicknessMapUv),b.push(E.combine),b.push(E.fogExp2),b.push(E.sizeAttenuation),b.push(E.morphTargetsCount),b.push(E.morphAttributeCount),b.push(E.numDirLights),b.push(E.numPointLights),b.push(E.numSpotLights),b.push(E.numSpotLightMaps),b.push(E.numHemiLights),b.push(E.numRectAreaLights),b.push(E.numDirLightShadows),b.push(E.numPointLightShadows),b.push(E.numSpotLightShadows),b.push(E.numSpotLightShadowsWithMaps),b.push(E.numLightProbes),b.push(E.shadowMapType),b.push(E.toneMapping),b.push(E.numClippingPlanes),b.push(E.numClipIntersection),b.push(E.depthPacking)}function v(b,E){o.disableAll(),E.isWebGL2&&o.enable(0),E.supportsVertexTextures&&o.enable(1),E.instancing&&o.enable(2),E.instancingColor&&o.enable(3),E.matcap&&o.enable(4),E.envMap&&o.enable(5),E.normalMapObjectSpace&&o.enable(6),E.normalMapTangentSpace&&o.enable(7),E.clearcoat&&o.enable(8),E.iridescence&&o.enable(9),E.alphaTest&&o.enable(10),E.vertexColors&&o.enable(11),E.vertexAlphas&&o.enable(12),E.vertexUv1s&&o.enable(13),E.vertexUv2s&&o.enable(14),E.vertexUv3s&&o.enable(15),E.vertexTangents&&o.enable(16),E.anisotropy&&o.enable(17),E.alphaHash&&o.enable(18),E.batching&&o.enable(19),b.push(o.mask),o.disableAll(),E.fog&&o.enable(0),E.useFog&&o.enable(1),E.flatShading&&o.enable(2),E.logarithmicDepthBuffer&&o.enable(3),E.skinning&&o.enable(4),E.morphTargets&&o.enable(5),E.morphNormals&&o.enable(6),E.morphColors&&o.enable(7),E.premultipliedAlpha&&o.enable(8),E.shadowMapEnabled&&o.enable(9),E.useLegacyLights&&o.enable(10),E.doubleSided&&o.enable(11),E.flipSided&&o.enable(12),E.useDepthPacking&&o.enable(13),E.dithering&&o.enable(14),E.transmission&&o.enable(15),E.sheen&&o.enable(16),E.opaque&&o.enable(17),E.pointsUvs&&o.enable(18),E.decodeVideoTexture&&o.enable(19),b.push(o.mask)}function S(b){const E=g[b.type];let F;if(E){const k=hn[E];F=hr.clone(k.uniforms)}else F=b.uniforms;return F}function R(b,E){let F;for(let k=0,te=c.length;k<te;k++){const I=c[k];if(I.cacheKey===E){F=I,++F.usedTimes;break}}return F===void 0&&(F=new Vm(i,E,b,r),c.push(F)),F}function w(b){if(--b.usedTimes===0){const E=c.indexOf(b);c[E]=c[c.length-1],c.pop(),b.destroy()}}function A(b){l.remove(b)}function U(){l.dispose()}return{getParameters:m,getProgramCacheKey:f,getUniforms:S,acquireProgram:R,releaseProgram:w,releaseShaderCache:A,programs:c,dispose:U}}function Ym(){let i=new WeakMap;function e(r){let a=i.get(r);return a===void 0&&(a={},i.set(r,a)),a}function t(r){i.delete(r)}function n(r,a,o){i.get(r)[a]=o}function s(){i=new WeakMap}return{get:e,remove:t,update:n,dispose:s}}function $m(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function Ml(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function bl(){const i=[];let e=0;const t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function a(h,d,p,g,_,m){let f=i[e];return f===void 0?(f={id:h.id,object:h,geometry:d,material:p,groupOrder:g,renderOrder:h.renderOrder,z:_,group:m},i[e]=f):(f.id=h.id,f.object=h,f.geometry=d,f.material=p,f.groupOrder=g,f.renderOrder=h.renderOrder,f.z=_,f.group=m),e++,f}function o(h,d,p,g,_,m){const f=a(h,d,p,g,_,m);p.transmission>0?n.push(f):p.transparent===!0?s.push(f):t.push(f)}function l(h,d,p,g,_,m){const f=a(h,d,p,g,_,m);p.transmission>0?n.unshift(f):p.transparent===!0?s.unshift(f):t.unshift(f)}function c(h,d){t.length>1&&t.sort(h||$m),n.length>1&&n.sort(d||Ml),s.length>1&&s.sort(d||Ml)}function u(){for(let h=e,d=i.length;h<d;h++){const p=i[h];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:o,unshift:l,finish:u,sort:c}}function jm(){let i=new WeakMap;function e(n,s){const r=i.get(n);let a;return r===void 0?(a=new bl,i.set(n,[a])):s>=r.length?(a=new bl,r.push(a)):a=r[s],a}function t(){i=new WeakMap}return{get:e,dispose:t}}function Zm(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new C,color:new Re};break;case"SpotLight":t={position:new C,direction:new C,color:new Re,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new C,color:new Re,distance:0,decay:0};break;case"HemisphereLight":t={direction:new C,skyColor:new Re,groundColor:new Re};break;case"RectAreaLight":t={color:new Re,position:new C,halfWidth:new C,halfHeight:new C};break}return i[e.id]=t,t}}}function Jm(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ae};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ae};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ae,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let Qm=0;function e0(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function t0(i,e){const t=new Zm,n=Jm(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let u=0;u<9;u++)s.probe.push(new C);const r=new C,a=new at,o=new at;function l(u,h){let d=0,p=0,g=0;for(let k=0;k<9;k++)s.probe[k].set(0,0,0);let _=0,m=0,f=0,x=0,v=0,S=0,R=0,w=0,A=0,U=0,b=0;u.sort(e0);const E=h===!0?Math.PI:1;for(let k=0,te=u.length;k<te;k++){const I=u[k],B=I.color,H=I.intensity,Z=I.distance,j=I.shadow&&I.shadow.map?I.shadow.map.texture:null;if(I.isAmbientLight)d+=B.r*H*E,p+=B.g*H*E,g+=B.b*H*E;else if(I.isLightProbe){for(let J=0;J<9;J++)s.probe[J].addScaledVector(I.sh.coefficients[J],H);b++}else if(I.isDirectionalLight){const J=t.get(I);if(J.color.copy(I.color).multiplyScalar(I.intensity*E),I.castShadow){const X=I.shadow,K=n.get(I);K.shadowBias=X.bias,K.shadowNormalBias=X.normalBias,K.shadowRadius=X.radius,K.shadowMapSize=X.mapSize,s.directionalShadow[_]=K,s.directionalShadowMap[_]=j,s.directionalShadowMatrix[_]=I.shadow.matrix,S++}s.directional[_]=J,_++}else if(I.isSpotLight){const J=t.get(I);J.position.setFromMatrixPosition(I.matrixWorld),J.color.copy(B).multiplyScalar(H*E),J.distance=Z,J.coneCos=Math.cos(I.angle),J.penumbraCos=Math.cos(I.angle*(1-I.penumbra)),J.decay=I.decay,s.spot[f]=J;const X=I.shadow;if(I.map&&(s.spotLightMap[A]=I.map,A++,X.updateMatrices(I),I.castShadow&&U++),s.spotLightMatrix[f]=X.matrix,I.castShadow){const K=n.get(I);K.shadowBias=X.bias,K.shadowNormalBias=X.normalBias,K.shadowRadius=X.radius,K.shadowMapSize=X.mapSize,s.spotShadow[f]=K,s.spotShadowMap[f]=j,w++}f++}else if(I.isRectAreaLight){const J=t.get(I);J.color.copy(B).multiplyScalar(H),J.halfWidth.set(I.width*.5,0,0),J.halfHeight.set(0,I.height*.5,0),s.rectArea[x]=J,x++}else if(I.isPointLight){const J=t.get(I);if(J.color.copy(I.color).multiplyScalar(I.intensity*E),J.distance=I.distance,J.decay=I.decay,I.castShadow){const X=I.shadow,K=n.get(I);K.shadowBias=X.bias,K.shadowNormalBias=X.normalBias,K.shadowRadius=X.radius,K.shadowMapSize=X.mapSize,K.shadowCameraNear=X.camera.near,K.shadowCameraFar=X.camera.far,s.pointShadow[m]=K,s.pointShadowMap[m]=j,s.pointShadowMatrix[m]=I.shadow.matrix,R++}s.point[m]=J,m++}else if(I.isHemisphereLight){const J=t.get(I);J.skyColor.copy(I.color).multiplyScalar(H*E),J.groundColor.copy(I.groundColor).multiplyScalar(H*E),s.hemi[v]=J,v++}}x>0&&(e.isWebGL2?i.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=pe.LTC_FLOAT_1,s.rectAreaLTC2=pe.LTC_FLOAT_2):(s.rectAreaLTC1=pe.LTC_HALF_1,s.rectAreaLTC2=pe.LTC_HALF_2):i.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=pe.LTC_FLOAT_1,s.rectAreaLTC2=pe.LTC_FLOAT_2):i.has("OES_texture_half_float_linear")===!0?(s.rectAreaLTC1=pe.LTC_HALF_1,s.rectAreaLTC2=pe.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),s.ambient[0]=d,s.ambient[1]=p,s.ambient[2]=g;const F=s.hash;(F.directionalLength!==_||F.pointLength!==m||F.spotLength!==f||F.rectAreaLength!==x||F.hemiLength!==v||F.numDirectionalShadows!==S||F.numPointShadows!==R||F.numSpotShadows!==w||F.numSpotMaps!==A||F.numLightProbes!==b)&&(s.directional.length=_,s.spot.length=f,s.rectArea.length=x,s.point.length=m,s.hemi.length=v,s.directionalShadow.length=S,s.directionalShadowMap.length=S,s.pointShadow.length=R,s.pointShadowMap.length=R,s.spotShadow.length=w,s.spotShadowMap.length=w,s.directionalShadowMatrix.length=S,s.pointShadowMatrix.length=R,s.spotLightMatrix.length=w+A-U,s.spotLightMap.length=A,s.numSpotLightShadowsWithMaps=U,s.numLightProbes=b,F.directionalLength=_,F.pointLength=m,F.spotLength=f,F.rectAreaLength=x,F.hemiLength=v,F.numDirectionalShadows=S,F.numPointShadows=R,F.numSpotShadows=w,F.numSpotMaps=A,F.numLightProbes=b,s.version=Qm++)}function c(u,h){let d=0,p=0,g=0,_=0,m=0;const f=h.matrixWorldInverse;for(let x=0,v=u.length;x<v;x++){const S=u[x];if(S.isDirectionalLight){const R=s.directional[d];R.direction.setFromMatrixPosition(S.matrixWorld),r.setFromMatrixPosition(S.target.matrixWorld),R.direction.sub(r),R.direction.transformDirection(f),d++}else if(S.isSpotLight){const R=s.spot[g];R.position.setFromMatrixPosition(S.matrixWorld),R.position.applyMatrix4(f),R.direction.setFromMatrixPosition(S.matrixWorld),r.setFromMatrixPosition(S.target.matrixWorld),R.direction.sub(r),R.direction.transformDirection(f),g++}else if(S.isRectAreaLight){const R=s.rectArea[_];R.position.setFromMatrixPosition(S.matrixWorld),R.position.applyMatrix4(f),o.identity(),a.copy(S.matrixWorld),a.premultiply(f),o.extractRotation(a),R.halfWidth.set(S.width*.5,0,0),R.halfHeight.set(0,S.height*.5,0),R.halfWidth.applyMatrix4(o),R.halfHeight.applyMatrix4(o),_++}else if(S.isPointLight){const R=s.point[p];R.position.setFromMatrixPosition(S.matrixWorld),R.position.applyMatrix4(f),p++}else if(S.isHemisphereLight){const R=s.hemi[m];R.direction.setFromMatrixPosition(S.matrixWorld),R.direction.transformDirection(f),m++}}}return{setup:l,setupView:c,state:s}}function El(i,e){const t=new t0(i,e),n=[],s=[];function r(){n.length=0,s.length=0}function a(h){n.push(h)}function o(h){s.push(h)}function l(h){t.setup(n,h)}function c(h){t.setupView(n,h)}return{init:r,state:{lightsArray:n,shadowsArray:s,lights:t},setupLights:l,setupLightsView:c,pushLight:a,pushShadow:o}}function n0(i,e){let t=new WeakMap;function n(r,a=0){const o=t.get(r);let l;return o===void 0?(l=new El(i,e),t.set(r,[l])):a>=o.length?(l=new El(i,e),o.push(l)):l=o[a],l}function s(){t=new WeakMap}return{get:n,dispose:s}}class i0 extends ai{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=eh,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class s0 extends ai{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const r0=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,a0=`uniform sampler2D shadow_pass;
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
}`;function o0(i,e,t){let n=new za;const s=new ae,r=new ae,a=new ht,o=new i0({depthPacking:th}),l=new s0,c={},u=t.maxTextureSize,h={[Gn]:It,[It]:Gn,[Dt]:Dt},d=new Pt({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ae},radius:{value:4}},vertexShader:r0,fragmentShader:a0}),p=d.clone();p.defines.HORIZONTAL_PASS=1;const g=new lt;g.setAttribute("position",new yt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new ee(g,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=sc;let f=this.type;this.render=function(w,A,U){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||w.length===0)return;const b=i.getRenderTarget(),E=i.getActiveCubeFace(),F=i.getActiveMipmapLevel(),k=i.state;k.setBlending(bn),k.buffers.color.setClear(1,1,1,1),k.buffers.depth.setTest(!0),k.setScissorTest(!1);const te=f!==Sn&&this.type===Sn,I=f===Sn&&this.type!==Sn;for(let B=0,H=w.length;B<H;B++){const Z=w[B],j=Z.shadow;if(j===void 0){console.warn("THREE.WebGLShadowMap:",Z,"has no shadow.");continue}if(j.autoUpdate===!1&&j.needsUpdate===!1)continue;s.copy(j.mapSize);const J=j.getFrameExtents();if(s.multiply(J),r.copy(j.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/J.x),s.x=r.x*J.x,j.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/J.y),s.y=r.y*J.y,j.mapSize.y=r.y)),j.map===null||te===!0||I===!0){const K=this.type!==Sn?{minFilter:Ht,magFilter:Ht}:{};j.map!==null&&j.map.dispose(),j.map=new cn(s.x,s.y,K),j.map.texture.name=Z.name+".shadowMap",j.camera.updateProjectionMatrix()}i.setRenderTarget(j.map),i.clear();const X=j.getViewportCount();for(let K=0;K<X;K++){const P=j.getViewport(K);a.set(r.x*P.x,r.y*P.y,r.x*P.z,r.y*P.w),k.viewport(a),j.updateMatrices(Z,K),n=j.getFrustum(),S(A,U,j.camera,Z,this.type)}j.isPointLightShadow!==!0&&this.type===Sn&&x(j,U),j.needsUpdate=!1}f=this.type,m.needsUpdate=!1,i.setRenderTarget(b,E,F)};function x(w,A){const U=e.update(_);d.defines.VSM_SAMPLES!==w.blurSamples&&(d.defines.VSM_SAMPLES=w.blurSamples,p.defines.VSM_SAMPLES=w.blurSamples,d.needsUpdate=!0,p.needsUpdate=!0),w.mapPass===null&&(w.mapPass=new cn(s.x,s.y)),d.uniforms.shadow_pass.value=w.map.texture,d.uniforms.resolution.value=w.mapSize,d.uniforms.radius.value=w.radius,i.setRenderTarget(w.mapPass),i.clear(),i.renderBufferDirect(A,null,U,d,_,null),p.uniforms.shadow_pass.value=w.mapPass.texture,p.uniforms.resolution.value=w.mapSize,p.uniforms.radius.value=w.radius,i.setRenderTarget(w.map),i.clear(),i.renderBufferDirect(A,null,U,p,_,null)}function v(w,A,U,b){let E=null;const F=U.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(F!==void 0)E=F;else if(E=U.isPointLight===!0?l:o,i.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0){const k=E.uuid,te=A.uuid;let I=c[k];I===void 0&&(I={},c[k]=I);let B=I[te];B===void 0&&(B=E.clone(),I[te]=B,A.addEventListener("dispose",R)),E=B}if(E.visible=A.visible,E.wireframe=A.wireframe,b===Sn?E.side=A.shadowSide!==null?A.shadowSide:A.side:E.side=A.shadowSide!==null?A.shadowSide:h[A.side],E.alphaMap=A.alphaMap,E.alphaTest=A.alphaTest,E.map=A.map,E.clipShadows=A.clipShadows,E.clippingPlanes=A.clippingPlanes,E.clipIntersection=A.clipIntersection,E.displacementMap=A.displacementMap,E.displacementScale=A.displacementScale,E.displacementBias=A.displacementBias,E.wireframeLinewidth=A.wireframeLinewidth,E.linewidth=A.linewidth,U.isPointLight===!0&&E.isMeshDistanceMaterial===!0){const k=i.properties.get(E);k.light=U}return E}function S(w,A,U,b,E){if(w.visible===!1)return;if(w.layers.test(A.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&E===Sn)&&(!w.frustumCulled||n.intersectsObject(w))){w.modelViewMatrix.multiplyMatrices(U.matrixWorldInverse,w.matrixWorld);const te=e.update(w),I=w.material;if(Array.isArray(I)){const B=te.groups;for(let H=0,Z=B.length;H<Z;H++){const j=B[H],J=I[j.materialIndex];if(J&&J.visible){const X=v(w,J,b,E);w.onBeforeShadow(i,w,A,U,te,X,j),i.renderBufferDirect(U,null,te,X,w,j),w.onAfterShadow(i,w,A,U,te,X,j)}}}else if(I.visible){const B=v(w,I,b,E);w.onBeforeShadow(i,w,A,U,te,B,null),i.renderBufferDirect(U,null,te,B,w,null),w.onAfterShadow(i,w,A,U,te,B,null)}}const k=w.children;for(let te=0,I=k.length;te<I;te++)S(k[te],A,U,b,E)}function R(w){w.target.removeEventListener("dispose",R);for(const U in c){const b=c[U],E=w.target.uuid;E in b&&(b[E].dispose(),delete b[E])}}}function l0(i,e,t){const n=t.isWebGL2;function s(){let D=!1;const ge=new ht;let _e=null;const Ue=new ht(0,0,0,0);return{setMask:function(De){_e!==De&&!D&&(i.colorMask(De,De,De,De),_e=De)},setLocked:function(De){D=De},setClear:function(De,it,st,wt,Ft){Ft===!0&&(De*=wt,it*=wt,st*=wt),ge.set(De,it,st,wt),Ue.equals(ge)===!1&&(i.clearColor(De,it,st,wt),Ue.copy(ge))},reset:function(){D=!1,_e=null,Ue.set(-1,0,0,0)}}}function r(){let D=!1,ge=null,_e=null,Ue=null;return{setTest:function(De){De?Te(i.DEPTH_TEST):ve(i.DEPTH_TEST)},setMask:function(De){ge!==De&&!D&&(i.depthMask(De),ge=De)},setFunc:function(De){if(_e!==De){switch(De){case Pu:i.depthFunc(i.NEVER);break;case Iu:i.depthFunc(i.ALWAYS);break;case Du:i.depthFunc(i.LESS);break;case rr:i.depthFunc(i.LEQUAL);break;case Nu:i.depthFunc(i.EQUAL);break;case Ou:i.depthFunc(i.GEQUAL);break;case Uu:i.depthFunc(i.GREATER);break;case Fu:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}_e=De}},setLocked:function(De){D=De},setClear:function(De){Ue!==De&&(i.clearDepth(De),Ue=De)},reset:function(){D=!1,ge=null,_e=null,Ue=null}}}function a(){let D=!1,ge=null,_e=null,Ue=null,De=null,it=null,st=null,wt=null,Ft=null;return{setTest:function(rt){D||(rt?Te(i.STENCIL_TEST):ve(i.STENCIL_TEST))},setMask:function(rt){ge!==rt&&!D&&(i.stencilMask(rt),ge=rt)},setFunc:function(rt,Gt,un){(_e!==rt||Ue!==Gt||De!==un)&&(i.stencilFunc(rt,Gt,un),_e=rt,Ue=Gt,De=un)},setOp:function(rt,Gt,un){(it!==rt||st!==Gt||wt!==un)&&(i.stencilOp(rt,Gt,un),it=rt,st=Gt,wt=un)},setLocked:function(rt){D=rt},setClear:function(rt){Ft!==rt&&(i.clearStencil(rt),Ft=rt)},reset:function(){D=!1,ge=null,_e=null,Ue=null,De=null,it=null,st=null,wt=null,Ft=null}}}const o=new s,l=new r,c=new a,u=new WeakMap,h=new WeakMap;let d={},p={},g=new WeakMap,_=[],m=null,f=!1,x=null,v=null,S=null,R=null,w=null,A=null,U=null,b=new Re(0,0,0),E=0,F=!1,k=null,te=null,I=null,B=null,H=null;const Z=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let j=!1,J=0;const X=i.getParameter(i.VERSION);X.indexOf("WebGL")!==-1?(J=parseFloat(/^WebGL (\d)/.exec(X)[1]),j=J>=1):X.indexOf("OpenGL ES")!==-1&&(J=parseFloat(/^OpenGL ES (\d)/.exec(X)[1]),j=J>=2);let K=null,P={};const O=i.getParameter(i.SCISSOR_BOX),Y=i.getParameter(i.VIEWPORT),oe=new ht().fromArray(O),he=new ht().fromArray(Y);function de(D,ge,_e,Ue){const De=new Uint8Array(4),it=i.createTexture();i.bindTexture(D,it),i.texParameteri(D,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(D,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let st=0;st<_e;st++)n&&(D===i.TEXTURE_3D||D===i.TEXTURE_2D_ARRAY)?i.texImage3D(ge,0,i.RGBA,1,1,Ue,0,i.RGBA,i.UNSIGNED_BYTE,De):i.texImage2D(ge+st,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,De);return it}const Ee={};Ee[i.TEXTURE_2D]=de(i.TEXTURE_2D,i.TEXTURE_2D,1),Ee[i.TEXTURE_CUBE_MAP]=de(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),n&&(Ee[i.TEXTURE_2D_ARRAY]=de(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),Ee[i.TEXTURE_3D]=de(i.TEXTURE_3D,i.TEXTURE_3D,1,1)),o.setClear(0,0,0,1),l.setClear(1),c.setClear(0),Te(i.DEPTH_TEST),l.setFunc(rr),ce(!1),M(ro),Te(i.CULL_FACE),W(bn);function Te(D){d[D]!==!0&&(i.enable(D),d[D]=!0)}function ve(D){d[D]!==!1&&(i.disable(D),d[D]=!1)}function Pe(D,ge){return p[D]!==ge?(i.bindFramebuffer(D,ge),p[D]=ge,n&&(D===i.DRAW_FRAMEBUFFER&&(p[i.FRAMEBUFFER]=ge),D===i.FRAMEBUFFER&&(p[i.DRAW_FRAMEBUFFER]=ge)),!0):!1}function L(D,ge){let _e=_,Ue=!1;if(D)if(_e=g.get(ge),_e===void 0&&(_e=[],g.set(ge,_e)),D.isWebGLMultipleRenderTargets){const De=D.texture;if(_e.length!==De.length||_e[0]!==i.COLOR_ATTACHMENT0){for(let it=0,st=De.length;it<st;it++)_e[it]=i.COLOR_ATTACHMENT0+it;_e.length=De.length,Ue=!0}}else _e[0]!==i.COLOR_ATTACHMENT0&&(_e[0]=i.COLOR_ATTACHMENT0,Ue=!0);else _e[0]!==i.BACK&&(_e[0]=i.BACK,Ue=!0);Ue&&(t.isWebGL2?i.drawBuffers(_e):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(_e))}function le(D){return m!==D?(i.useProgram(D),m=D,!0):!1}const $={[$n]:i.FUNC_ADD,[gu]:i.FUNC_SUBTRACT,[_u]:i.FUNC_REVERSE_SUBTRACT};if(n)$[lo]=i.MIN,$[co]=i.MAX;else{const D=e.get("EXT_blend_minmax");D!==null&&($[lo]=D.MIN_EXT,$[co]=D.MAX_EXT)}const Q={[vu]:i.ZERO,[xu]:i.ONE,[yu]:i.SRC_COLOR,[ga]:i.SRC_ALPHA,[wu]:i.SRC_ALPHA_SATURATE,[Eu]:i.DST_COLOR,[Mu]:i.DST_ALPHA,[Su]:i.ONE_MINUS_SRC_COLOR,[_a]:i.ONE_MINUS_SRC_ALPHA,[Tu]:i.ONE_MINUS_DST_COLOR,[bu]:i.ONE_MINUS_DST_ALPHA,[Au]:i.CONSTANT_COLOR,[Cu]:i.ONE_MINUS_CONSTANT_COLOR,[Ru]:i.CONSTANT_ALPHA,[Lu]:i.ONE_MINUS_CONSTANT_ALPHA};function W(D,ge,_e,Ue,De,it,st,wt,Ft,rt){if(D===bn){f===!0&&(ve(i.BLEND),f=!1);return}if(f===!1&&(Te(i.BLEND),f=!0),D!==mu){if(D!==x||rt!==F){if((v!==$n||w!==$n)&&(i.blendEquation(i.FUNC_ADD),v=$n,w=$n),rt)switch(D){case Pi:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case vt:i.blendFunc(i.ONE,i.ONE);break;case ao:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case oo:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}else switch(D){case Pi:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case vt:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case ao:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case oo:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}S=null,R=null,A=null,U=null,b.set(0,0,0),E=0,x=D,F=rt}return}De=De||ge,it=it||_e,st=st||Ue,(ge!==v||De!==w)&&(i.blendEquationSeparate($[ge],$[De]),v=ge,w=De),(_e!==S||Ue!==R||it!==A||st!==U)&&(i.blendFuncSeparate(Q[_e],Q[Ue],Q[it],Q[st]),S=_e,R=Ue,A=it,U=st),(wt.equals(b)===!1||Ft!==E)&&(i.blendColor(wt.r,wt.g,wt.b,Ft),b.copy(wt),E=Ft),x=D,F=!1}function xe(D,ge){D.side===Dt?ve(i.CULL_FACE):Te(i.CULL_FACE);let _e=D.side===It;ge&&(_e=!_e),ce(_e),D.blending===Pi&&D.transparent===!1?W(bn):W(D.blending,D.blendEquation,D.blendSrc,D.blendDst,D.blendEquationAlpha,D.blendSrcAlpha,D.blendDstAlpha,D.blendColor,D.blendAlpha,D.premultipliedAlpha),l.setFunc(D.depthFunc),l.setTest(D.depthTest),l.setMask(D.depthWrite),o.setMask(D.colorWrite);const Ue=D.stencilWrite;c.setTest(Ue),Ue&&(c.setMask(D.stencilWriteMask),c.setFunc(D.stencilFunc,D.stencilRef,D.stencilFuncMask),c.setOp(D.stencilFail,D.stencilZFail,D.stencilZPass)),N(D.polygonOffset,D.polygonOffsetFactor,D.polygonOffsetUnits),D.alphaToCoverage===!0?Te(i.SAMPLE_ALPHA_TO_COVERAGE):ve(i.SAMPLE_ALPHA_TO_COVERAGE)}function ce(D){k!==D&&(D?i.frontFace(i.CW):i.frontFace(i.CCW),k=D)}function M(D){D!==du?(Te(i.CULL_FACE),D!==te&&(D===ro?i.cullFace(i.BACK):D===fu?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):ve(i.CULL_FACE),te=D}function y(D){D!==I&&(j&&i.lineWidth(D),I=D)}function N(D,ge,_e){D?(Te(i.POLYGON_OFFSET_FILL),(B!==ge||H!==_e)&&(i.polygonOffset(ge,_e),B=ge,H=_e)):ve(i.POLYGON_OFFSET_FILL)}function ne(D){D?Te(i.SCISSOR_TEST):ve(i.SCISSOR_TEST)}function ie(D){D===void 0&&(D=i.TEXTURE0+Z-1),K!==D&&(i.activeTexture(D),K=D)}function se(D,ge,_e){_e===void 0&&(K===null?_e=i.TEXTURE0+Z-1:_e=K);let Ue=P[_e];Ue===void 0&&(Ue={type:void 0,texture:void 0},P[_e]=Ue),(Ue.type!==D||Ue.texture!==ge)&&(K!==_e&&(i.activeTexture(_e),K=_e),i.bindTexture(D,ge||Ee[D]),Ue.type=D,Ue.texture=ge)}function be(){const D=P[K];D!==void 0&&D.type!==void 0&&(i.bindTexture(D.type,null),D.type=void 0,D.texture=void 0)}function me(){try{i.compressedTexImage2D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ye(){try{i.compressedTexImage3D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Ce(){try{i.texSubImage2D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Oe(){try{i.texSubImage3D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function re(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Ke(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ze(){try{i.texStorage2D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Ie(){try{i.texStorage3D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function we(){try{i.texImage2D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Me(){try{i.texImage3D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Ge(D){oe.equals(D)===!1&&(i.scissor(D.x,D.y,D.z,D.w),oe.copy(D))}function je(D){he.equals(D)===!1&&(i.viewport(D.x,D.y,D.z,D.w),he.copy(D))}function ct(D,ge){let _e=h.get(ge);_e===void 0&&(_e=new WeakMap,h.set(ge,_e));let Ue=_e.get(D);Ue===void 0&&(Ue=i.getUniformBlockIndex(ge,D.name),_e.set(D,Ue))}function We(D,ge){const Ue=h.get(ge).get(D);u.get(ge)!==Ue&&(i.uniformBlockBinding(ge,Ue,D.__bindingPointIndex),u.set(ge,Ue))}function fe(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),n===!0&&(i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null)),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),d={},K=null,P={},p={},g=new WeakMap,_=[],m=null,f=!1,x=null,v=null,S=null,R=null,w=null,A=null,U=null,b=new Re(0,0,0),E=0,F=!1,k=null,te=null,I=null,B=null,H=null,oe.set(0,0,i.canvas.width,i.canvas.height),he.set(0,0,i.canvas.width,i.canvas.height),o.reset(),l.reset(),c.reset()}return{buffers:{color:o,depth:l,stencil:c},enable:Te,disable:ve,bindFramebuffer:Pe,drawBuffers:L,useProgram:le,setBlending:W,setMaterial:xe,setFlipSided:ce,setCullFace:M,setLineWidth:y,setPolygonOffset:N,setScissorTest:ne,activeTexture:ie,bindTexture:se,unbindTexture:be,compressedTexImage2D:me,compressedTexImage3D:ye,texImage2D:we,texImage3D:Me,updateUBOMapping:ct,uniformBlockBinding:We,texStorage2D:ze,texStorage3D:Ie,texSubImage2D:Ce,texSubImage3D:Oe,compressedTexSubImage2D:re,compressedTexSubImage3D:Ke,scissor:Ge,viewport:je,reset:fe}}function c0(i,e,t,n,s,r,a){const o=s.isWebGL2,l=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),u=new WeakMap;let h;const d=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(M,y){return p?new OffscreenCanvas(M,y):ur("canvas")}function _(M,y,N,ne){let ie=1;if((M.width>ne||M.height>ne)&&(ie=ne/Math.max(M.width,M.height)),ie<1||y===!0)if(typeof HTMLImageElement<"u"&&M instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&M instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&M instanceof ImageBitmap){const se=y?Ea:Math.floor,be=se(ie*M.width),me=se(ie*M.height);h===void 0&&(h=g(be,me));const ye=N?g(be,me):h;return ye.width=be,ye.height=me,ye.getContext("2d").drawImage(M,0,0,be,me),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+M.width+"x"+M.height+") to ("+be+"x"+me+")."),ye}else return"data"in M&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+M.width+"x"+M.height+")."),M;return M}function m(M){return Ho(M.width)&&Ho(M.height)}function f(M){return o?!1:M.wrapS!==rn||M.wrapT!==rn||M.minFilter!==Ht&&M.minFilter!==Zt}function x(M,y){return M.generateMipmaps&&y&&M.minFilter!==Ht&&M.minFilter!==Zt}function v(M){i.generateMipmap(M)}function S(M,y,N,ne,ie=!1){if(o===!1)return y;if(M!==null){if(i[M]!==void 0)return i[M];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+M+"'")}let se=y;if(y===i.RED&&(N===i.FLOAT&&(se=i.R32F),N===i.HALF_FLOAT&&(se=i.R16F),N===i.UNSIGNED_BYTE&&(se=i.R8)),y===i.RED_INTEGER&&(N===i.UNSIGNED_BYTE&&(se=i.R8UI),N===i.UNSIGNED_SHORT&&(se=i.R16UI),N===i.UNSIGNED_INT&&(se=i.R32UI),N===i.BYTE&&(se=i.R8I),N===i.SHORT&&(se=i.R16I),N===i.INT&&(se=i.R32I)),y===i.RG&&(N===i.FLOAT&&(se=i.RG32F),N===i.HALF_FLOAT&&(se=i.RG16F),N===i.UNSIGNED_BYTE&&(se=i.RG8)),y===i.RGBA){const be=ie?ar:nt.getTransfer(ne);N===i.FLOAT&&(se=i.RGBA32F),N===i.HALF_FLOAT&&(se=i.RGBA16F),N===i.UNSIGNED_BYTE&&(se=be===ut?i.SRGB8_ALPHA8:i.RGBA8),N===i.UNSIGNED_SHORT_4_4_4_4&&(se=i.RGBA4),N===i.UNSIGNED_SHORT_5_5_5_1&&(se=i.RGB5_A1)}return(se===i.R16F||se===i.R32F||se===i.RG16F||se===i.RG32F||se===i.RGBA16F||se===i.RGBA32F)&&e.get("EXT_color_buffer_float"),se}function R(M,y,N){return x(M,N)===!0||M.isFramebufferTexture&&M.minFilter!==Ht&&M.minFilter!==Zt?Math.log2(Math.max(y.width,y.height))+1:M.mipmaps!==void 0&&M.mipmaps.length>0?M.mipmaps.length:M.isCompressedTexture&&Array.isArray(M.image)?y.mipmaps.length:1}function w(M){return M===Ht||M===uo||M===Tr?i.NEAREST:i.LINEAR}function A(M){const y=M.target;y.removeEventListener("dispose",A),b(y),y.isVideoTexture&&u.delete(y)}function U(M){const y=M.target;y.removeEventListener("dispose",U),F(y)}function b(M){const y=n.get(M);if(y.__webglInit===void 0)return;const N=M.source,ne=d.get(N);if(ne){const ie=ne[y.__cacheKey];ie.usedTimes--,ie.usedTimes===0&&E(M),Object.keys(ne).length===0&&d.delete(N)}n.remove(M)}function E(M){const y=n.get(M);i.deleteTexture(y.__webglTexture);const N=M.source,ne=d.get(N);delete ne[y.__cacheKey],a.memory.textures--}function F(M){const y=M.texture,N=n.get(M),ne=n.get(y);if(ne.__webglTexture!==void 0&&(i.deleteTexture(ne.__webglTexture),a.memory.textures--),M.depthTexture&&M.depthTexture.dispose(),M.isWebGLCubeRenderTarget)for(let ie=0;ie<6;ie++){if(Array.isArray(N.__webglFramebuffer[ie]))for(let se=0;se<N.__webglFramebuffer[ie].length;se++)i.deleteFramebuffer(N.__webglFramebuffer[ie][se]);else i.deleteFramebuffer(N.__webglFramebuffer[ie]);N.__webglDepthbuffer&&i.deleteRenderbuffer(N.__webglDepthbuffer[ie])}else{if(Array.isArray(N.__webglFramebuffer))for(let ie=0;ie<N.__webglFramebuffer.length;ie++)i.deleteFramebuffer(N.__webglFramebuffer[ie]);else i.deleteFramebuffer(N.__webglFramebuffer);if(N.__webglDepthbuffer&&i.deleteRenderbuffer(N.__webglDepthbuffer),N.__webglMultisampledFramebuffer&&i.deleteFramebuffer(N.__webglMultisampledFramebuffer),N.__webglColorRenderbuffer)for(let ie=0;ie<N.__webglColorRenderbuffer.length;ie++)N.__webglColorRenderbuffer[ie]&&i.deleteRenderbuffer(N.__webglColorRenderbuffer[ie]);N.__webglDepthRenderbuffer&&i.deleteRenderbuffer(N.__webglDepthRenderbuffer)}if(M.isWebGLMultipleRenderTargets)for(let ie=0,se=y.length;ie<se;ie++){const be=n.get(y[ie]);be.__webglTexture&&(i.deleteTexture(be.__webglTexture),a.memory.textures--),n.remove(y[ie])}n.remove(y),n.remove(M)}let k=0;function te(){k=0}function I(){const M=k;return M>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+M+" texture units while this GPU supports only "+s.maxTextures),k+=1,M}function B(M){const y=[];return y.push(M.wrapS),y.push(M.wrapT),y.push(M.wrapR||0),y.push(M.magFilter),y.push(M.minFilter),y.push(M.anisotropy),y.push(M.internalFormat),y.push(M.format),y.push(M.type),y.push(M.generateMipmaps),y.push(M.premultiplyAlpha),y.push(M.flipY),y.push(M.unpackAlignment),y.push(M.colorSpace),y.join()}function H(M,y){const N=n.get(M);if(M.isVideoTexture&&xe(M),M.isRenderTargetTexture===!1&&M.version>0&&N.__version!==M.version){const ne=M.image;if(ne===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ne.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{oe(N,M,y);return}}t.bindTexture(i.TEXTURE_2D,N.__webglTexture,i.TEXTURE0+y)}function Z(M,y){const N=n.get(M);if(M.version>0&&N.__version!==M.version){oe(N,M,y);return}t.bindTexture(i.TEXTURE_2D_ARRAY,N.__webglTexture,i.TEXTURE0+y)}function j(M,y){const N=n.get(M);if(M.version>0&&N.__version!==M.version){oe(N,M,y);return}t.bindTexture(i.TEXTURE_3D,N.__webglTexture,i.TEXTURE0+y)}function J(M,y){const N=n.get(M);if(M.version>0&&N.__version!==M.version){he(N,M,y);return}t.bindTexture(i.TEXTURE_CUBE_MAP,N.__webglTexture,i.TEXTURE0+y)}const X={[ya]:i.REPEAT,[rn]:i.CLAMP_TO_EDGE,[Sa]:i.MIRRORED_REPEAT},K={[Ht]:i.NEAREST,[uo]:i.NEAREST_MIPMAP_NEAREST,[Tr]:i.NEAREST_MIPMAP_LINEAR,[Zt]:i.LINEAR,[qu]:i.LINEAR_MIPMAP_NEAREST,[fs]:i.LINEAR_MIPMAP_LINEAR},P={[ih]:i.NEVER,[ch]:i.ALWAYS,[sh]:i.LESS,[_c]:i.LEQUAL,[rh]:i.EQUAL,[lh]:i.GEQUAL,[ah]:i.GREATER,[oh]:i.NOTEQUAL};function O(M,y,N){if(N?(i.texParameteri(M,i.TEXTURE_WRAP_S,X[y.wrapS]),i.texParameteri(M,i.TEXTURE_WRAP_T,X[y.wrapT]),(M===i.TEXTURE_3D||M===i.TEXTURE_2D_ARRAY)&&i.texParameteri(M,i.TEXTURE_WRAP_R,X[y.wrapR]),i.texParameteri(M,i.TEXTURE_MAG_FILTER,K[y.magFilter]),i.texParameteri(M,i.TEXTURE_MIN_FILTER,K[y.minFilter])):(i.texParameteri(M,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(M,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE),(M===i.TEXTURE_3D||M===i.TEXTURE_2D_ARRAY)&&i.texParameteri(M,i.TEXTURE_WRAP_R,i.CLAMP_TO_EDGE),(y.wrapS!==rn||y.wrapT!==rn)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),i.texParameteri(M,i.TEXTURE_MAG_FILTER,w(y.magFilter)),i.texParameteri(M,i.TEXTURE_MIN_FILTER,w(y.minFilter)),y.minFilter!==Ht&&y.minFilter!==Zt&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),y.compareFunction&&(i.texParameteri(M,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(M,i.TEXTURE_COMPARE_FUNC,P[y.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){const ne=e.get("EXT_texture_filter_anisotropic");if(y.magFilter===Ht||y.minFilter!==Tr&&y.minFilter!==fs||y.type===On&&e.has("OES_texture_float_linear")===!1||o===!1&&y.type===En&&e.has("OES_texture_half_float_linear")===!1)return;(y.anisotropy>1||n.get(y).__currentAnisotropy)&&(i.texParameterf(M,ne.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(y.anisotropy,s.getMaxAnisotropy())),n.get(y).__currentAnisotropy=y.anisotropy)}}function Y(M,y){let N=!1;M.__webglInit===void 0&&(M.__webglInit=!0,y.addEventListener("dispose",A));const ne=y.source;let ie=d.get(ne);ie===void 0&&(ie={},d.set(ne,ie));const se=B(y);if(se!==M.__cacheKey){ie[se]===void 0&&(ie[se]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,N=!0),ie[se].usedTimes++;const be=ie[M.__cacheKey];be!==void 0&&(ie[M.__cacheKey].usedTimes--,be.usedTimes===0&&E(y)),M.__cacheKey=se,M.__webglTexture=ie[se].texture}return N}function oe(M,y,N){let ne=i.TEXTURE_2D;(y.isDataArrayTexture||y.isCompressedArrayTexture)&&(ne=i.TEXTURE_2D_ARRAY),y.isData3DTexture&&(ne=i.TEXTURE_3D);const ie=Y(M,y),se=y.source;t.bindTexture(ne,M.__webglTexture,i.TEXTURE0+N);const be=n.get(se);if(se.version!==be.__version||ie===!0){t.activeTexture(i.TEXTURE0+N);const me=nt.getPrimaries(nt.workingColorSpace),ye=y.colorSpace===Jt?null:nt.getPrimaries(y.colorSpace),Ce=y.colorSpace===Jt||me===ye?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,y.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,y.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ce);const Oe=f(y)&&m(y.image)===!1;let re=_(y.image,Oe,!1,s.maxTextureSize);re=ce(y,re);const Ke=m(re)||o,ze=r.convert(y.format,y.colorSpace);let Ie=r.convert(y.type),we=S(y.internalFormat,ze,Ie,y.colorSpace,y.isVideoTexture);O(ne,y,Ke);let Me;const Ge=y.mipmaps,je=o&&y.isVideoTexture!==!0&&we!==pc,ct=be.__version===void 0||ie===!0,We=R(y,re,Ke);if(y.isDepthTexture)we=i.DEPTH_COMPONENT,o?y.type===On?we=i.DEPTH_COMPONENT32F:y.type===Nn?we=i.DEPTH_COMPONENT24:y.type===Jn?we=i.DEPTH24_STENCIL8:we=i.DEPTH_COMPONENT16:y.type===On&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),y.format===Qn&&we===i.DEPTH_COMPONENT&&y.type!==Ba&&y.type!==Nn&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),y.type=Nn,Ie=r.convert(y.type)),y.format===Ui&&we===i.DEPTH_COMPONENT&&(we=i.DEPTH_STENCIL,y.type!==Jn&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),y.type=Jn,Ie=r.convert(y.type))),ct&&(je?t.texStorage2D(i.TEXTURE_2D,1,we,re.width,re.height):t.texImage2D(i.TEXTURE_2D,0,we,re.width,re.height,0,ze,Ie,null));else if(y.isDataTexture)if(Ge.length>0&&Ke){je&&ct&&t.texStorage2D(i.TEXTURE_2D,We,we,Ge[0].width,Ge[0].height);for(let fe=0,D=Ge.length;fe<D;fe++)Me=Ge[fe],je?t.texSubImage2D(i.TEXTURE_2D,fe,0,0,Me.width,Me.height,ze,Ie,Me.data):t.texImage2D(i.TEXTURE_2D,fe,we,Me.width,Me.height,0,ze,Ie,Me.data);y.generateMipmaps=!1}else je?(ct&&t.texStorage2D(i.TEXTURE_2D,We,we,re.width,re.height),t.texSubImage2D(i.TEXTURE_2D,0,0,0,re.width,re.height,ze,Ie,re.data)):t.texImage2D(i.TEXTURE_2D,0,we,re.width,re.height,0,ze,Ie,re.data);else if(y.isCompressedTexture)if(y.isCompressedArrayTexture){je&&ct&&t.texStorage3D(i.TEXTURE_2D_ARRAY,We,we,Ge[0].width,Ge[0].height,re.depth);for(let fe=0,D=Ge.length;fe<D;fe++)Me=Ge[fe],y.format!==an?ze!==null?je?t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,fe,0,0,0,Me.width,Me.height,re.depth,ze,Me.data,0,0):t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,fe,we,Me.width,Me.height,re.depth,0,Me.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):je?t.texSubImage3D(i.TEXTURE_2D_ARRAY,fe,0,0,0,Me.width,Me.height,re.depth,ze,Ie,Me.data):t.texImage3D(i.TEXTURE_2D_ARRAY,fe,we,Me.width,Me.height,re.depth,0,ze,Ie,Me.data)}else{je&&ct&&t.texStorage2D(i.TEXTURE_2D,We,we,Ge[0].width,Ge[0].height);for(let fe=0,D=Ge.length;fe<D;fe++)Me=Ge[fe],y.format!==an?ze!==null?je?t.compressedTexSubImage2D(i.TEXTURE_2D,fe,0,0,Me.width,Me.height,ze,Me.data):t.compressedTexImage2D(i.TEXTURE_2D,fe,we,Me.width,Me.height,0,Me.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):je?t.texSubImage2D(i.TEXTURE_2D,fe,0,0,Me.width,Me.height,ze,Ie,Me.data):t.texImage2D(i.TEXTURE_2D,fe,we,Me.width,Me.height,0,ze,Ie,Me.data)}else if(y.isDataArrayTexture)je?(ct&&t.texStorage3D(i.TEXTURE_2D_ARRAY,We,we,re.width,re.height,re.depth),t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,re.width,re.height,re.depth,ze,Ie,re.data)):t.texImage3D(i.TEXTURE_2D_ARRAY,0,we,re.width,re.height,re.depth,0,ze,Ie,re.data);else if(y.isData3DTexture)je?(ct&&t.texStorage3D(i.TEXTURE_3D,We,we,re.width,re.height,re.depth),t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,re.width,re.height,re.depth,ze,Ie,re.data)):t.texImage3D(i.TEXTURE_3D,0,we,re.width,re.height,re.depth,0,ze,Ie,re.data);else if(y.isFramebufferTexture){if(ct)if(je)t.texStorage2D(i.TEXTURE_2D,We,we,re.width,re.height);else{let fe=re.width,D=re.height;for(let ge=0;ge<We;ge++)t.texImage2D(i.TEXTURE_2D,ge,we,fe,D,0,ze,Ie,null),fe>>=1,D>>=1}}else if(Ge.length>0&&Ke){je&&ct&&t.texStorage2D(i.TEXTURE_2D,We,we,Ge[0].width,Ge[0].height);for(let fe=0,D=Ge.length;fe<D;fe++)Me=Ge[fe],je?t.texSubImage2D(i.TEXTURE_2D,fe,0,0,ze,Ie,Me):t.texImage2D(i.TEXTURE_2D,fe,we,ze,Ie,Me);y.generateMipmaps=!1}else je?(ct&&t.texStorage2D(i.TEXTURE_2D,We,we,re.width,re.height),t.texSubImage2D(i.TEXTURE_2D,0,0,0,ze,Ie,re)):t.texImage2D(i.TEXTURE_2D,0,we,ze,Ie,re);x(y,Ke)&&v(ne),be.__version=se.version,y.onUpdate&&y.onUpdate(y)}M.__version=y.version}function he(M,y,N){if(y.image.length!==6)return;const ne=Y(M,y),ie=y.source;t.bindTexture(i.TEXTURE_CUBE_MAP,M.__webglTexture,i.TEXTURE0+N);const se=n.get(ie);if(ie.version!==se.__version||ne===!0){t.activeTexture(i.TEXTURE0+N);const be=nt.getPrimaries(nt.workingColorSpace),me=y.colorSpace===Jt?null:nt.getPrimaries(y.colorSpace),ye=y.colorSpace===Jt||be===me?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,y.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,y.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,ye);const Ce=y.isCompressedTexture||y.image[0].isCompressedTexture,Oe=y.image[0]&&y.image[0].isDataTexture,re=[];for(let fe=0;fe<6;fe++)!Ce&&!Oe?re[fe]=_(y.image[fe],!1,!0,s.maxCubemapSize):re[fe]=Oe?y.image[fe].image:y.image[fe],re[fe]=ce(y,re[fe]);const Ke=re[0],ze=m(Ke)||o,Ie=r.convert(y.format,y.colorSpace),we=r.convert(y.type),Me=S(y.internalFormat,Ie,we,y.colorSpace),Ge=o&&y.isVideoTexture!==!0,je=se.__version===void 0||ne===!0;let ct=R(y,Ke,ze);O(i.TEXTURE_CUBE_MAP,y,ze);let We;if(Ce){Ge&&je&&t.texStorage2D(i.TEXTURE_CUBE_MAP,ct,Me,Ke.width,Ke.height);for(let fe=0;fe<6;fe++){We=re[fe].mipmaps;for(let D=0;D<We.length;D++){const ge=We[D];y.format!==an?Ie!==null?Ge?t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+fe,D,0,0,ge.width,ge.height,Ie,ge.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+fe,D,Me,ge.width,ge.height,0,ge.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ge?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+fe,D,0,0,ge.width,ge.height,Ie,we,ge.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+fe,D,Me,ge.width,ge.height,0,Ie,we,ge.data)}}}else{We=y.mipmaps,Ge&&je&&(We.length>0&&ct++,t.texStorage2D(i.TEXTURE_CUBE_MAP,ct,Me,re[0].width,re[0].height));for(let fe=0;fe<6;fe++)if(Oe){Ge?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+fe,0,0,0,re[fe].width,re[fe].height,Ie,we,re[fe].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+fe,0,Me,re[fe].width,re[fe].height,0,Ie,we,re[fe].data);for(let D=0;D<We.length;D++){const _e=We[D].image[fe].image;Ge?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+fe,D+1,0,0,_e.width,_e.height,Ie,we,_e.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+fe,D+1,Me,_e.width,_e.height,0,Ie,we,_e.data)}}else{Ge?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+fe,0,0,0,Ie,we,re[fe]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+fe,0,Me,Ie,we,re[fe]);for(let D=0;D<We.length;D++){const ge=We[D];Ge?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+fe,D+1,0,0,Ie,we,ge.image[fe]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+fe,D+1,Me,Ie,we,ge.image[fe])}}}x(y,ze)&&v(i.TEXTURE_CUBE_MAP),se.__version=ie.version,y.onUpdate&&y.onUpdate(y)}M.__version=y.version}function de(M,y,N,ne,ie,se){const be=r.convert(N.format,N.colorSpace),me=r.convert(N.type),ye=S(N.internalFormat,be,me,N.colorSpace);if(!n.get(y).__hasExternalTextures){const Oe=Math.max(1,y.width>>se),re=Math.max(1,y.height>>se);ie===i.TEXTURE_3D||ie===i.TEXTURE_2D_ARRAY?t.texImage3D(ie,se,ye,Oe,re,y.depth,0,be,me,null):t.texImage2D(ie,se,ye,Oe,re,0,be,me,null)}t.bindFramebuffer(i.FRAMEBUFFER,M),W(y)?l.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ne,ie,n.get(N).__webglTexture,0,Q(y)):(ie===i.TEXTURE_2D||ie>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&ie<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,ne,ie,n.get(N).__webglTexture,se),t.bindFramebuffer(i.FRAMEBUFFER,null)}function Ee(M,y,N){if(i.bindRenderbuffer(i.RENDERBUFFER,M),y.depthBuffer&&!y.stencilBuffer){let ne=o===!0?i.DEPTH_COMPONENT24:i.DEPTH_COMPONENT16;if(N||W(y)){const ie=y.depthTexture;ie&&ie.isDepthTexture&&(ie.type===On?ne=i.DEPTH_COMPONENT32F:ie.type===Nn&&(ne=i.DEPTH_COMPONENT24));const se=Q(y);W(y)?l.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,se,ne,y.width,y.height):i.renderbufferStorageMultisample(i.RENDERBUFFER,se,ne,y.width,y.height)}else i.renderbufferStorage(i.RENDERBUFFER,ne,y.width,y.height);i.framebufferRenderbuffer(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.RENDERBUFFER,M)}else if(y.depthBuffer&&y.stencilBuffer){const ne=Q(y);N&&W(y)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,ne,i.DEPTH24_STENCIL8,y.width,y.height):W(y)?l.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ne,i.DEPTH24_STENCIL8,y.width,y.height):i.renderbufferStorage(i.RENDERBUFFER,i.DEPTH_STENCIL,y.width,y.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.RENDERBUFFER,M)}else{const ne=y.isWebGLMultipleRenderTargets===!0?y.texture:[y.texture];for(let ie=0;ie<ne.length;ie++){const se=ne[ie],be=r.convert(se.format,se.colorSpace),me=r.convert(se.type),ye=S(se.internalFormat,be,me,se.colorSpace),Ce=Q(y);N&&W(y)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Ce,ye,y.width,y.height):W(y)?l.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Ce,ye,y.width,y.height):i.renderbufferStorage(i.RENDERBUFFER,ye,y.width,y.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Te(M,y){if(y&&y.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,M),!(y.depthTexture&&y.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(y.depthTexture).__webglTexture||y.depthTexture.image.width!==y.width||y.depthTexture.image.height!==y.height)&&(y.depthTexture.image.width=y.width,y.depthTexture.image.height=y.height,y.depthTexture.needsUpdate=!0),H(y.depthTexture,0);const ne=n.get(y.depthTexture).__webglTexture,ie=Q(y);if(y.depthTexture.format===Qn)W(y)?l.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,ne,0,ie):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,ne,0);else if(y.depthTexture.format===Ui)W(y)?l.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,ne,0,ie):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,ne,0);else throw new Error("Unknown depthTexture format")}function ve(M){const y=n.get(M),N=M.isWebGLCubeRenderTarget===!0;if(M.depthTexture&&!y.__autoAllocateDepthBuffer){if(N)throw new Error("target.depthTexture not supported in Cube render targets");Te(y.__webglFramebuffer,M)}else if(N){y.__webglDepthbuffer=[];for(let ne=0;ne<6;ne++)t.bindFramebuffer(i.FRAMEBUFFER,y.__webglFramebuffer[ne]),y.__webglDepthbuffer[ne]=i.createRenderbuffer(),Ee(y.__webglDepthbuffer[ne],M,!1)}else t.bindFramebuffer(i.FRAMEBUFFER,y.__webglFramebuffer),y.__webglDepthbuffer=i.createRenderbuffer(),Ee(y.__webglDepthbuffer,M,!1);t.bindFramebuffer(i.FRAMEBUFFER,null)}function Pe(M,y,N){const ne=n.get(M);y!==void 0&&de(ne.__webglFramebuffer,M,M.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),N!==void 0&&ve(M)}function L(M){const y=M.texture,N=n.get(M),ne=n.get(y);M.addEventListener("dispose",U),M.isWebGLMultipleRenderTargets!==!0&&(ne.__webglTexture===void 0&&(ne.__webglTexture=i.createTexture()),ne.__version=y.version,a.memory.textures++);const ie=M.isWebGLCubeRenderTarget===!0,se=M.isWebGLMultipleRenderTargets===!0,be=m(M)||o;if(ie){N.__webglFramebuffer=[];for(let me=0;me<6;me++)if(o&&y.mipmaps&&y.mipmaps.length>0){N.__webglFramebuffer[me]=[];for(let ye=0;ye<y.mipmaps.length;ye++)N.__webglFramebuffer[me][ye]=i.createFramebuffer()}else N.__webglFramebuffer[me]=i.createFramebuffer()}else{if(o&&y.mipmaps&&y.mipmaps.length>0){N.__webglFramebuffer=[];for(let me=0;me<y.mipmaps.length;me++)N.__webglFramebuffer[me]=i.createFramebuffer()}else N.__webglFramebuffer=i.createFramebuffer();if(se)if(s.drawBuffers){const me=M.texture;for(let ye=0,Ce=me.length;ye<Ce;ye++){const Oe=n.get(me[ye]);Oe.__webglTexture===void 0&&(Oe.__webglTexture=i.createTexture(),a.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(o&&M.samples>0&&W(M)===!1){const me=se?y:[y];N.__webglMultisampledFramebuffer=i.createFramebuffer(),N.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,N.__webglMultisampledFramebuffer);for(let ye=0;ye<me.length;ye++){const Ce=me[ye];N.__webglColorRenderbuffer[ye]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,N.__webglColorRenderbuffer[ye]);const Oe=r.convert(Ce.format,Ce.colorSpace),re=r.convert(Ce.type),Ke=S(Ce.internalFormat,Oe,re,Ce.colorSpace,M.isXRRenderTarget===!0),ze=Q(M);i.renderbufferStorageMultisample(i.RENDERBUFFER,ze,Ke,M.width,M.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ye,i.RENDERBUFFER,N.__webglColorRenderbuffer[ye])}i.bindRenderbuffer(i.RENDERBUFFER,null),M.depthBuffer&&(N.__webglDepthRenderbuffer=i.createRenderbuffer(),Ee(N.__webglDepthRenderbuffer,M,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(ie){t.bindTexture(i.TEXTURE_CUBE_MAP,ne.__webglTexture),O(i.TEXTURE_CUBE_MAP,y,be);for(let me=0;me<6;me++)if(o&&y.mipmaps&&y.mipmaps.length>0)for(let ye=0;ye<y.mipmaps.length;ye++)de(N.__webglFramebuffer[me][ye],M,y,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+me,ye);else de(N.__webglFramebuffer[me],M,y,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+me,0);x(y,be)&&v(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(se){const me=M.texture;for(let ye=0,Ce=me.length;ye<Ce;ye++){const Oe=me[ye],re=n.get(Oe);t.bindTexture(i.TEXTURE_2D,re.__webglTexture),O(i.TEXTURE_2D,Oe,be),de(N.__webglFramebuffer,M,Oe,i.COLOR_ATTACHMENT0+ye,i.TEXTURE_2D,0),x(Oe,be)&&v(i.TEXTURE_2D)}t.unbindTexture()}else{let me=i.TEXTURE_2D;if((M.isWebGL3DRenderTarget||M.isWebGLArrayRenderTarget)&&(o?me=M.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(me,ne.__webglTexture),O(me,y,be),o&&y.mipmaps&&y.mipmaps.length>0)for(let ye=0;ye<y.mipmaps.length;ye++)de(N.__webglFramebuffer[ye],M,y,i.COLOR_ATTACHMENT0,me,ye);else de(N.__webglFramebuffer,M,y,i.COLOR_ATTACHMENT0,me,0);x(y,be)&&v(me),t.unbindTexture()}M.depthBuffer&&ve(M)}function le(M){const y=m(M)||o,N=M.isWebGLMultipleRenderTargets===!0?M.texture:[M.texture];for(let ne=0,ie=N.length;ne<ie;ne++){const se=N[ne];if(x(se,y)){const be=M.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:i.TEXTURE_2D,me=n.get(se).__webglTexture;t.bindTexture(be,me),v(be),t.unbindTexture()}}}function $(M){if(o&&M.samples>0&&W(M)===!1){const y=M.isWebGLMultipleRenderTargets?M.texture:[M.texture],N=M.width,ne=M.height;let ie=i.COLOR_BUFFER_BIT;const se=[],be=M.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,me=n.get(M),ye=M.isWebGLMultipleRenderTargets===!0;if(ye)for(let Ce=0;Ce<y.length;Ce++)t.bindFramebuffer(i.FRAMEBUFFER,me.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ce,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,me.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ce,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,me.__webglMultisampledFramebuffer),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,me.__webglFramebuffer);for(let Ce=0;Ce<y.length;Ce++){se.push(i.COLOR_ATTACHMENT0+Ce),M.depthBuffer&&se.push(be);const Oe=me.__ignoreDepthValues!==void 0?me.__ignoreDepthValues:!1;if(Oe===!1&&(M.depthBuffer&&(ie|=i.DEPTH_BUFFER_BIT),M.stencilBuffer&&(ie|=i.STENCIL_BUFFER_BIT)),ye&&i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,me.__webglColorRenderbuffer[Ce]),Oe===!0&&(i.invalidateFramebuffer(i.READ_FRAMEBUFFER,[be]),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[be])),ye){const re=n.get(y[Ce]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,re,0)}i.blitFramebuffer(0,0,N,ne,0,0,N,ne,ie,i.NEAREST),c&&i.invalidateFramebuffer(i.READ_FRAMEBUFFER,se)}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),ye)for(let Ce=0;Ce<y.length;Ce++){t.bindFramebuffer(i.FRAMEBUFFER,me.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ce,i.RENDERBUFFER,me.__webglColorRenderbuffer[Ce]);const Oe=n.get(y[Ce]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,me.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ce,i.TEXTURE_2D,Oe,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,me.__webglMultisampledFramebuffer)}}function Q(M){return Math.min(s.maxSamples,M.samples)}function W(M){const y=n.get(M);return o&&M.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&y.__useRenderToTexture!==!1}function xe(M){const y=a.render.frame;u.get(M)!==y&&(u.set(M,y),M.update())}function ce(M,y){const N=M.colorSpace,ne=M.format,ie=M.type;return M.isCompressedTexture===!0||M.isVideoTexture===!0||M.format===Ma||N!==Tn&&N!==Jt&&(nt.getTransfer(N)===ut?o===!1?e.has("EXT_sRGB")===!0&&ne===an?(M.format=Ma,M.minFilter=Zt,M.generateMipmaps=!1):y=xc.sRGBToLinear(y):(ne!==an||ie!==Fn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",N)),y}this.allocateTextureUnit=I,this.resetTextureUnits=te,this.setTexture2D=H,this.setTexture2DArray=Z,this.setTexture3D=j,this.setTextureCube=J,this.rebindTextures=Pe,this.setupRenderTarget=L,this.updateRenderTargetMipmap=le,this.updateMultisampleRenderTarget=$,this.setupDepthRenderbuffer=ve,this.setupFrameBufferTexture=de,this.useMultisampledRTT=W}function u0(i,e,t){const n=t.isWebGL2;function s(r,a=Jt){let o;const l=nt.getTransfer(a);if(r===Fn)return i.UNSIGNED_BYTE;if(r===cc)return i.UNSIGNED_SHORT_4_4_4_4;if(r===uc)return i.UNSIGNED_SHORT_5_5_5_1;if(r===Xu)return i.BYTE;if(r===Ku)return i.SHORT;if(r===Ba)return i.UNSIGNED_SHORT;if(r===lc)return i.INT;if(r===Nn)return i.UNSIGNED_INT;if(r===On)return i.FLOAT;if(r===En)return n?i.HALF_FLOAT:(o=e.get("OES_texture_half_float"),o!==null?o.HALF_FLOAT_OES:null);if(r===Yu)return i.ALPHA;if(r===an)return i.RGBA;if(r===$u)return i.LUMINANCE;if(r===ju)return i.LUMINANCE_ALPHA;if(r===Qn)return i.DEPTH_COMPONENT;if(r===Ui)return i.DEPTH_STENCIL;if(r===Ma)return o=e.get("EXT_sRGB"),o!==null?o.SRGB_ALPHA_EXT:null;if(r===Zu)return i.RED;if(r===hc)return i.RED_INTEGER;if(r===Ju)return i.RG;if(r===dc)return i.RG_INTEGER;if(r===fc)return i.RGBA_INTEGER;if(r===wr||r===Ar||r===Cr||r===Rr)if(l===ut)if(o=e.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(r===wr)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===Ar)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===Cr)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===Rr)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=e.get("WEBGL_compressed_texture_s3tc"),o!==null){if(r===wr)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===Ar)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===Cr)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===Rr)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===ho||r===fo||r===po||r===mo)if(o=e.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(r===ho)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===fo)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===po)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===mo)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===pc)return o=e.get("WEBGL_compressed_texture_etc1"),o!==null?o.COMPRESSED_RGB_ETC1_WEBGL:null;if(r===go||r===_o)if(o=e.get("WEBGL_compressed_texture_etc"),o!==null){if(r===go)return l===ut?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(r===_o)return l===ut?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===vo||r===xo||r===yo||r===So||r===Mo||r===bo||r===Eo||r===To||r===wo||r===Ao||r===Co||r===Ro||r===Lo||r===Po)if(o=e.get("WEBGL_compressed_texture_astc"),o!==null){if(r===vo)return l===ut?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===xo)return l===ut?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===yo)return l===ut?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===So)return l===ut?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===Mo)return l===ut?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===bo)return l===ut?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===Eo)return l===ut?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===To)return l===ut?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===wo)return l===ut?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===Ao)return l===ut?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===Co)return l===ut?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===Ro)return l===ut?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===Lo)return l===ut?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===Po)return l===ut?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===Lr||r===Io||r===Do)if(o=e.get("EXT_texture_compression_bptc"),o!==null){if(r===Lr)return l===ut?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===Io)return o.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===Do)return o.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===Qu||r===No||r===Oo||r===Uo)if(o=e.get("EXT_texture_compression_rgtc"),o!==null){if(r===Lr)return o.COMPRESSED_RED_RGTC1_EXT;if(r===No)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===Oo)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===Uo)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===Jn?n?i.UNSIGNED_INT_24_8:(o=e.get("WEBGL_depth_texture"),o!==null?o.UNSIGNED_INT_24_8_WEBGL:null):i[r]!==void 0?i[r]:null}return{convert:s}}class h0 extends Vt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Qe extends bt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const d0={type:"move"};class ta{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Qe,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Qe,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new C,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new C),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Qe,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new C,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new C),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(const _ of e.hand.values()){const m=t.getJointPose(_,n),f=this._getHandJoint(c,_);m!==null&&(f.matrix.fromArray(m.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=m.radius),f.visible=m!==null}const u=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],d=u.position.distanceTo(h.position),p=.02,g=.005;c.inputState.pinching&&d>p+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=p-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(d0)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new Qe;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}class f0 extends ki{constructor(e,t){super();const n=this;let s=null,r=1,a=null,o="local-floor",l=1,c=null,u=null,h=null,d=null,p=null,g=null;const _=t.getContextAttributes();let m=null,f=null;const x=[],v=[],S=new ae;let R=null;const w=new Vt;w.layers.enable(1),w.viewport=new ht;const A=new Vt;A.layers.enable(2),A.viewport=new ht;const U=[w,A],b=new h0;b.layers.enable(1),b.layers.enable(2);let E=null,F=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(O){let Y=x[O];return Y===void 0&&(Y=new ta,x[O]=Y),Y.getTargetRaySpace()},this.getControllerGrip=function(O){let Y=x[O];return Y===void 0&&(Y=new ta,x[O]=Y),Y.getGripSpace()},this.getHand=function(O){let Y=x[O];return Y===void 0&&(Y=new ta,x[O]=Y),Y.getHandSpace()};function k(O){const Y=v.indexOf(O.inputSource);if(Y===-1)return;const oe=x[Y];oe!==void 0&&(oe.update(O.inputSource,O.frame,c||a),oe.dispatchEvent({type:O.type,data:O.inputSource}))}function te(){s.removeEventListener("select",k),s.removeEventListener("selectstart",k),s.removeEventListener("selectend",k),s.removeEventListener("squeeze",k),s.removeEventListener("squeezestart",k),s.removeEventListener("squeezeend",k),s.removeEventListener("end",te),s.removeEventListener("inputsourceschange",I);for(let O=0;O<x.length;O++){const Y=v[O];Y!==null&&(v[O]=null,x[O].disconnect(Y))}E=null,F=null,e.setRenderTarget(m),p=null,d=null,h=null,s=null,f=null,P.stop(),n.isPresenting=!1,e.setPixelRatio(R),e.setSize(S.width,S.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(O){r=O,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(O){o=O,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(O){c=O},this.getBaseLayer=function(){return d!==null?d:p},this.getBinding=function(){return h},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(O){if(s=O,s!==null){if(m=e.getRenderTarget(),s.addEventListener("select",k),s.addEventListener("selectstart",k),s.addEventListener("selectend",k),s.addEventListener("squeeze",k),s.addEventListener("squeezestart",k),s.addEventListener("squeezeend",k),s.addEventListener("end",te),s.addEventListener("inputsourceschange",I),_.xrCompatible!==!0&&await t.makeXRCompatible(),R=e.getPixelRatio(),e.getSize(S),s.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const Y={antialias:s.renderState.layers===void 0?_.antialias:!0,alpha:!0,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(s,t,Y),s.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),f=new cn(p.framebufferWidth,p.framebufferHeight,{format:an,type:Fn,colorSpace:e.outputColorSpace,stencilBuffer:_.stencil})}else{let Y=null,oe=null,he=null;_.depth&&(he=_.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,Y=_.stencil?Ui:Qn,oe=_.stencil?Jn:Nn);const de={colorFormat:t.RGBA8,depthFormat:he,scaleFactor:r};h=new XRWebGLBinding(s,t),d=h.createProjectionLayer(de),s.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),f=new cn(d.textureWidth,d.textureHeight,{format:an,type:Fn,depthTexture:new Rc(d.textureWidth,d.textureHeight,oe,void 0,void 0,void 0,void 0,void 0,void 0,Y),stencilBuffer:_.stencil,colorSpace:e.outputColorSpace,samples:_.antialias?4:0});const Ee=e.properties.get(f);Ee.__ignoreDepthValues=d.ignoreDepthValues}f.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await s.requestReferenceSpace(o),P.setContext(s),P.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode};function I(O){for(let Y=0;Y<O.removed.length;Y++){const oe=O.removed[Y],he=v.indexOf(oe);he>=0&&(v[he]=null,x[he].disconnect(oe))}for(let Y=0;Y<O.added.length;Y++){const oe=O.added[Y];let he=v.indexOf(oe);if(he===-1){for(let Ee=0;Ee<x.length;Ee++)if(Ee>=v.length){v.push(oe),he=Ee;break}else if(v[Ee]===null){v[Ee]=oe,he=Ee;break}if(he===-1)break}const de=x[he];de&&de.connect(oe)}}const B=new C,H=new C;function Z(O,Y,oe){B.setFromMatrixPosition(Y.matrixWorld),H.setFromMatrixPosition(oe.matrixWorld);const he=B.distanceTo(H),de=Y.projectionMatrix.elements,Ee=oe.projectionMatrix.elements,Te=de[14]/(de[10]-1),ve=de[14]/(de[10]+1),Pe=(de[9]+1)/de[5],L=(de[9]-1)/de[5],le=(de[8]-1)/de[0],$=(Ee[8]+1)/Ee[0],Q=Te*le,W=Te*$,xe=he/(-le+$),ce=xe*-le;Y.matrixWorld.decompose(O.position,O.quaternion,O.scale),O.translateX(ce),O.translateZ(xe),O.matrixWorld.compose(O.position,O.quaternion,O.scale),O.matrixWorldInverse.copy(O.matrixWorld).invert();const M=Te+xe,y=ve+xe,N=Q-ce,ne=W+(he-ce),ie=Pe*ve/y*M,se=L*ve/y*M;O.projectionMatrix.makePerspective(N,ne,ie,se,M,y),O.projectionMatrixInverse.copy(O.projectionMatrix).invert()}function j(O,Y){Y===null?O.matrixWorld.copy(O.matrix):O.matrixWorld.multiplyMatrices(Y.matrixWorld,O.matrix),O.matrixWorldInverse.copy(O.matrixWorld).invert()}this.updateCamera=function(O){if(s===null)return;b.near=A.near=w.near=O.near,b.far=A.far=w.far=O.far,(E!==b.near||F!==b.far)&&(s.updateRenderState({depthNear:b.near,depthFar:b.far}),E=b.near,F=b.far);const Y=O.parent,oe=b.cameras;j(b,Y);for(let he=0;he<oe.length;he++)j(oe[he],Y);oe.length===2?Z(b,w,A):b.projectionMatrix.copy(w.projectionMatrix),J(O,b,Y)};function J(O,Y,oe){oe===null?O.matrix.copy(Y.matrixWorld):(O.matrix.copy(oe.matrixWorld),O.matrix.invert(),O.matrix.multiply(Y.matrixWorld)),O.matrix.decompose(O.position,O.quaternion,O.scale),O.updateMatrixWorld(!0),O.projectionMatrix.copy(Y.projectionMatrix),O.projectionMatrixInverse.copy(Y.projectionMatrixInverse),O.isPerspectiveCamera&&(O.fov=ba*2*Math.atan(1/O.projectionMatrix.elements[5]),O.zoom=1)}this.getCamera=function(){return b},this.getFoveation=function(){if(!(d===null&&p===null))return l},this.setFoveation=function(O){l=O,d!==null&&(d.fixedFoveation=O),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=O)};let X=null;function K(O,Y){if(u=Y.getViewerPose(c||a),g=Y,u!==null){const oe=u.views;p!==null&&(e.setRenderTargetFramebuffer(f,p.framebuffer),e.setRenderTarget(f));let he=!1;oe.length!==b.cameras.length&&(b.cameras.length=0,he=!0);for(let de=0;de<oe.length;de++){const Ee=oe[de];let Te=null;if(p!==null)Te=p.getViewport(Ee);else{const Pe=h.getViewSubImage(d,Ee);Te=Pe.viewport,de===0&&(e.setRenderTargetTextures(f,Pe.colorTexture,d.ignoreDepthValues?void 0:Pe.depthStencilTexture),e.setRenderTarget(f))}let ve=U[de];ve===void 0&&(ve=new Vt,ve.layers.enable(de),ve.viewport=new ht,U[de]=ve),ve.matrix.fromArray(Ee.transform.matrix),ve.matrix.decompose(ve.position,ve.quaternion,ve.scale),ve.projectionMatrix.fromArray(Ee.projectionMatrix),ve.projectionMatrixInverse.copy(ve.projectionMatrix).invert(),ve.viewport.set(Te.x,Te.y,Te.width,Te.height),de===0&&(b.matrix.copy(ve.matrix),b.matrix.decompose(b.position,b.quaternion,b.scale)),he===!0&&b.cameras.push(ve)}}for(let oe=0;oe<x.length;oe++){const he=v[oe],de=x[oe];he!==null&&de!==void 0&&de.update(he,Y,c||a)}X&&X(O,Y),Y.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:Y}),g=null}const P=new Cc;P.setAnimationLoop(K),this.setAnimationLoop=function(O){X=O},this.dispose=function(){}}}function p0(i,e){function t(m,f){m.matrixAutoUpdate===!0&&m.updateMatrix(),f.value.copy(m.matrix)}function n(m,f){f.color.getRGB(m.fogColor.value,Tc(i)),f.isFog?(m.fogNear.value=f.near,m.fogFar.value=f.far):f.isFogExp2&&(m.fogDensity.value=f.density)}function s(m,f,x,v,S){f.isMeshBasicMaterial||f.isMeshLambertMaterial?r(m,f):f.isMeshToonMaterial?(r(m,f),h(m,f)):f.isMeshPhongMaterial?(r(m,f),u(m,f)):f.isMeshStandardMaterial?(r(m,f),d(m,f),f.isMeshPhysicalMaterial&&p(m,f,S)):f.isMeshMatcapMaterial?(r(m,f),g(m,f)):f.isMeshDepthMaterial?r(m,f):f.isMeshDistanceMaterial?(r(m,f),_(m,f)):f.isMeshNormalMaterial?r(m,f):f.isLineBasicMaterial?(a(m,f),f.isLineDashedMaterial&&o(m,f)):f.isPointsMaterial?l(m,f,x,v):f.isSpriteMaterial?c(m,f):f.isShadowMaterial?(m.color.value.copy(f.color),m.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function r(m,f){m.opacity.value=f.opacity,f.color&&m.diffuse.value.copy(f.color),f.emissive&&m.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(m.map.value=f.map,t(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.bumpMap&&(m.bumpMap.value=f.bumpMap,t(f.bumpMap,m.bumpMapTransform),m.bumpScale.value=f.bumpScale,f.side===It&&(m.bumpScale.value*=-1)),f.normalMap&&(m.normalMap.value=f.normalMap,t(f.normalMap,m.normalMapTransform),m.normalScale.value.copy(f.normalScale),f.side===It&&m.normalScale.value.negate()),f.displacementMap&&(m.displacementMap.value=f.displacementMap,t(f.displacementMap,m.displacementMapTransform),m.displacementScale.value=f.displacementScale,m.displacementBias.value=f.displacementBias),f.emissiveMap&&(m.emissiveMap.value=f.emissiveMap,t(f.emissiveMap,m.emissiveMapTransform)),f.specularMap&&(m.specularMap.value=f.specularMap,t(f.specularMap,m.specularMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest);const x=e.get(f).envMap;if(x&&(m.envMap.value=x,m.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=f.reflectivity,m.ior.value=f.ior,m.refractionRatio.value=f.refractionRatio),f.lightMap){m.lightMap.value=f.lightMap;const v=i._useLegacyLights===!0?Math.PI:1;m.lightMapIntensity.value=f.lightMapIntensity*v,t(f.lightMap,m.lightMapTransform)}f.aoMap&&(m.aoMap.value=f.aoMap,m.aoMapIntensity.value=f.aoMapIntensity,t(f.aoMap,m.aoMapTransform))}function a(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,f.map&&(m.map.value=f.map,t(f.map,m.mapTransform))}function o(m,f){m.dashSize.value=f.dashSize,m.totalSize.value=f.dashSize+f.gapSize,m.scale.value=f.scale}function l(m,f,x,v){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.size.value=f.size*x,m.scale.value=v*.5,f.map&&(m.map.value=f.map,t(f.map,m.uvTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function c(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.rotation.value=f.rotation,f.map&&(m.map.value=f.map,t(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function u(m,f){m.specular.value.copy(f.specular),m.shininess.value=Math.max(f.shininess,1e-4)}function h(m,f){f.gradientMap&&(m.gradientMap.value=f.gradientMap)}function d(m,f){m.metalness.value=f.metalness,f.metalnessMap&&(m.metalnessMap.value=f.metalnessMap,t(f.metalnessMap,m.metalnessMapTransform)),m.roughness.value=f.roughness,f.roughnessMap&&(m.roughnessMap.value=f.roughnessMap,t(f.roughnessMap,m.roughnessMapTransform)),e.get(f).envMap&&(m.envMapIntensity.value=f.envMapIntensity)}function p(m,f,x){m.ior.value=f.ior,f.sheen>0&&(m.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),m.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(m.sheenColorMap.value=f.sheenColorMap,t(f.sheenColorMap,m.sheenColorMapTransform)),f.sheenRoughnessMap&&(m.sheenRoughnessMap.value=f.sheenRoughnessMap,t(f.sheenRoughnessMap,m.sheenRoughnessMapTransform))),f.clearcoat>0&&(m.clearcoat.value=f.clearcoat,m.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(m.clearcoatMap.value=f.clearcoatMap,t(f.clearcoatMap,m.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,t(f.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(m.clearcoatNormalMap.value=f.clearcoatNormalMap,t(f.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===It&&m.clearcoatNormalScale.value.negate())),f.iridescence>0&&(m.iridescence.value=f.iridescence,m.iridescenceIOR.value=f.iridescenceIOR,m.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(m.iridescenceMap.value=f.iridescenceMap,t(f.iridescenceMap,m.iridescenceMapTransform)),f.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=f.iridescenceThicknessMap,t(f.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),f.transmission>0&&(m.transmission.value=f.transmission,m.transmissionSamplerMap.value=x.texture,m.transmissionSamplerSize.value.set(x.width,x.height),f.transmissionMap&&(m.transmissionMap.value=f.transmissionMap,t(f.transmissionMap,m.transmissionMapTransform)),m.thickness.value=f.thickness,f.thicknessMap&&(m.thicknessMap.value=f.thicknessMap,t(f.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=f.attenuationDistance,m.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(m.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(m.anisotropyMap.value=f.anisotropyMap,t(f.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=f.specularIntensity,m.specularColor.value.copy(f.specularColor),f.specularColorMap&&(m.specularColorMap.value=f.specularColorMap,t(f.specularColorMap,m.specularColorMapTransform)),f.specularIntensityMap&&(m.specularIntensityMap.value=f.specularIntensityMap,t(f.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,f){f.matcap&&(m.matcap.value=f.matcap)}function _(m,f){const x=e.get(f).light;m.referencePosition.value.setFromMatrixPosition(x.matrixWorld),m.nearDistance.value=x.shadow.camera.near,m.farDistance.value=x.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function m0(i,e,t,n){let s={},r={},a=[];const o=t.isWebGL2?i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(x,v){const S=v.program;n.uniformBlockBinding(x,S)}function c(x,v){let S=s[x.id];S===void 0&&(g(x),S=u(x),s[x.id]=S,x.addEventListener("dispose",m));const R=v.program;n.updateUBOMapping(x,R);const w=e.render.frame;r[x.id]!==w&&(d(x),r[x.id]=w)}function u(x){const v=h();x.__bindingPointIndex=v;const S=i.createBuffer(),R=x.__size,w=x.usage;return i.bindBuffer(i.UNIFORM_BUFFER,S),i.bufferData(i.UNIFORM_BUFFER,R,w),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,v,S),S}function h(){for(let x=0;x<o;x++)if(a.indexOf(x)===-1)return a.push(x),x;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(x){const v=s[x.id],S=x.uniforms,R=x.__cache;i.bindBuffer(i.UNIFORM_BUFFER,v);for(let w=0,A=S.length;w<A;w++){const U=Array.isArray(S[w])?S[w]:[S[w]];for(let b=0,E=U.length;b<E;b++){const F=U[b];if(p(F,w,b,R)===!0){const k=F.__offset,te=Array.isArray(F.value)?F.value:[F.value];let I=0;for(let B=0;B<te.length;B++){const H=te[B],Z=_(H);typeof H=="number"||typeof H=="boolean"?(F.__data[0]=H,i.bufferSubData(i.UNIFORM_BUFFER,k+I,F.__data)):H.isMatrix3?(F.__data[0]=H.elements[0],F.__data[1]=H.elements[1],F.__data[2]=H.elements[2],F.__data[3]=0,F.__data[4]=H.elements[3],F.__data[5]=H.elements[4],F.__data[6]=H.elements[5],F.__data[7]=0,F.__data[8]=H.elements[6],F.__data[9]=H.elements[7],F.__data[10]=H.elements[8],F.__data[11]=0):(H.toArray(F.__data,I),I+=Z.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,k,F.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function p(x,v,S,R){const w=x.value,A=v+"_"+S;if(R[A]===void 0)return typeof w=="number"||typeof w=="boolean"?R[A]=w:R[A]=w.clone(),!0;{const U=R[A];if(typeof w=="number"||typeof w=="boolean"){if(U!==w)return R[A]=w,!0}else if(U.equals(w)===!1)return U.copy(w),!0}return!1}function g(x){const v=x.uniforms;let S=0;const R=16;for(let A=0,U=v.length;A<U;A++){const b=Array.isArray(v[A])?v[A]:[v[A]];for(let E=0,F=b.length;E<F;E++){const k=b[E],te=Array.isArray(k.value)?k.value:[k.value];for(let I=0,B=te.length;I<B;I++){const H=te[I],Z=_(H),j=S%R;j!==0&&R-j<Z.boundary&&(S+=R-j),k.__data=new Float32Array(Z.storage/Float32Array.BYTES_PER_ELEMENT),k.__offset=S,S+=Z.storage}}}const w=S%R;return w>0&&(S+=R-w),x.__size=S,x.__cache={},this}function _(x){const v={boundary:0,storage:0};return typeof x=="number"||typeof x=="boolean"?(v.boundary=4,v.storage=4):x.isVector2?(v.boundary=8,v.storage=8):x.isVector3||x.isColor?(v.boundary=16,v.storage=12):x.isVector4?(v.boundary=16,v.storage=16):x.isMatrix3?(v.boundary=48,v.storage=48):x.isMatrix4?(v.boundary=64,v.storage=64):x.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",x),v}function m(x){const v=x.target;v.removeEventListener("dispose",m);const S=a.indexOf(v.__bindingPointIndex);a.splice(S,1),i.deleteBuffer(s[v.id]),delete s[v.id],delete r[v.id]}function f(){for(const x in s)i.deleteBuffer(s[x]);a=[],s={},r={}}return{bind:l,update:c,dispose:f}}class Oc{constructor(e={}){const{canvas:t=hh(),context:n=null,depth:s=!0,stencil:r=!0,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1}=e;this.isWebGLRenderer=!0;let d;n!==null?d=n.getContextAttributes().alpha:d=a;const p=new Uint32Array(4),g=new Int32Array(4);let _=null,m=null;const f=[],x=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=_t,this._useLegacyLights=!1,this.toneMapping=Un,this.toneMappingExposure=1;const v=this;let S=!1,R=0,w=0,A=null,U=-1,b=null;const E=new ht,F=new ht;let k=null;const te=new Re(0);let I=0,B=t.width,H=t.height,Z=1,j=null,J=null;const X=new ht(0,0,B,H),K=new ht(0,0,B,H);let P=!1;const O=new za;let Y=!1,oe=!1,he=null;const de=new at,Ee=new ae,Te=new C,ve={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function Pe(){return A===null?Z:1}let L=n;function le(T,G){for(let V=0;V<T.length;V++){const q=T[V],z=t.getContext(q,G);if(z!==null)return z}return null}try{const T={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Ga}`),t.addEventListener("webglcontextlost",fe,!1),t.addEventListener("webglcontextrestored",D,!1),t.addEventListener("webglcontextcreationerror",ge,!1),L===null){const G=["webgl2","webgl","experimental-webgl"];if(v.isWebGL1Renderer===!0&&G.shift(),L=le(G,T),L===null)throw le(G)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&L instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),L.getShaderPrecisionFormat===void 0&&(L.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(T){throw console.error("THREE.WebGLRenderer: "+T.message),T}let $,Q,W,xe,ce,M,y,N,ne,ie,se,be,me,ye,Ce,Oe,re,Ke,ze,Ie,we,Me,Ge,je;function ct(){$=new Tp(L),Q=new xp(L,$,e),$.init(Q),Me=new u0(L,$,Q),W=new l0(L,$,Q),xe=new Cp(L),ce=new Ym,M=new c0(L,$,W,ce,Q,Me,xe),y=new Sp(v),N=new Ep(v),ne=new Oh(L,Q),Ge=new _p(L,$,ne,Q),ie=new wp(L,ne,xe,Ge),se=new Ip(L,ie,ne,xe),ze=new Pp(L,Q,M),Oe=new yp(ce),be=new Km(v,y,N,$,Q,Ge,Oe),me=new p0(v,ce),ye=new jm,Ce=new n0($,Q),Ke=new gp(v,y,N,W,se,d,l),re=new o0(v,se,Q),je=new m0(L,xe,Q,W),Ie=new vp(L,$,xe,Q),we=new Ap(L,$,xe,Q),xe.programs=be.programs,v.capabilities=Q,v.extensions=$,v.properties=ce,v.renderLists=ye,v.shadowMap=re,v.state=W,v.info=xe}ct();const We=new f0(v,L);this.xr=We,this.getContext=function(){return L},this.getContextAttributes=function(){return L.getContextAttributes()},this.forceContextLoss=function(){const T=$.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){const T=$.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return Z},this.setPixelRatio=function(T){T!==void 0&&(Z=T,this.setSize(B,H,!1))},this.getSize=function(T){return T.set(B,H)},this.setSize=function(T,G,V=!0){if(We.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}B=T,H=G,t.width=Math.floor(T*Z),t.height=Math.floor(G*Z),V===!0&&(t.style.width=T+"px",t.style.height=G+"px"),this.setViewport(0,0,T,G)},this.getDrawingBufferSize=function(T){return T.set(B*Z,H*Z).floor()},this.setDrawingBufferSize=function(T,G,V){B=T,H=G,Z=V,t.width=Math.floor(T*V),t.height=Math.floor(G*V),this.setViewport(0,0,T,G)},this.getCurrentViewport=function(T){return T.copy(E)},this.getViewport=function(T){return T.copy(X)},this.setViewport=function(T,G,V,q){T.isVector4?X.set(T.x,T.y,T.z,T.w):X.set(T,G,V,q),W.viewport(E.copy(X).multiplyScalar(Z).floor())},this.getScissor=function(T){return T.copy(K)},this.setScissor=function(T,G,V,q){T.isVector4?K.set(T.x,T.y,T.z,T.w):K.set(T,G,V,q),W.scissor(F.copy(K).multiplyScalar(Z).floor())},this.getScissorTest=function(){return P},this.setScissorTest=function(T){W.setScissorTest(P=T)},this.setOpaqueSort=function(T){j=T},this.setTransparentSort=function(T){J=T},this.getClearColor=function(T){return T.copy(Ke.getClearColor())},this.setClearColor=function(){Ke.setClearColor.apply(Ke,arguments)},this.getClearAlpha=function(){return Ke.getClearAlpha()},this.setClearAlpha=function(){Ke.setClearAlpha.apply(Ke,arguments)},this.clear=function(T=!0,G=!0,V=!0){let q=0;if(T){let z=!1;if(A!==null){const Se=A.texture.format;z=Se===fc||Se===dc||Se===hc}if(z){const Se=A.texture.type,Ae=Se===Fn||Se===Nn||Se===Ba||Se===Jn||Se===cc||Se===uc,Ne=Ke.getClearColor(),Fe=Ke.getClearAlpha(),Ve=Ne.r,Be=Ne.g,He=Ne.b;Ae?(p[0]=Ve,p[1]=Be,p[2]=He,p[3]=Fe,L.clearBufferuiv(L.COLOR,0,p)):(g[0]=Ve,g[1]=Be,g[2]=He,g[3]=Fe,L.clearBufferiv(L.COLOR,0,g))}else q|=L.COLOR_BUFFER_BIT}G&&(q|=L.DEPTH_BUFFER_BIT),V&&(q|=L.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),L.clear(q)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",fe,!1),t.removeEventListener("webglcontextrestored",D,!1),t.removeEventListener("webglcontextcreationerror",ge,!1),ye.dispose(),Ce.dispose(),ce.dispose(),y.dispose(),N.dispose(),se.dispose(),Ge.dispose(),je.dispose(),be.dispose(),We.dispose(),We.removeEventListener("sessionstart",Ft),We.removeEventListener("sessionend",rt),he&&(he.dispose(),he=null),Gt.stop()};function fe(T){T.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),S=!0}function D(){console.log("THREE.WebGLRenderer: Context Restored."),S=!1;const T=xe.autoReset,G=re.enabled,V=re.autoUpdate,q=re.needsUpdate,z=re.type;ct(),xe.autoReset=T,re.enabled=G,re.autoUpdate=V,re.needsUpdate=q,re.type=z}function ge(T){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function _e(T){const G=T.target;G.removeEventListener("dispose",_e),Ue(G)}function Ue(T){De(T),ce.remove(T)}function De(T){const G=ce.get(T).programs;G!==void 0&&(G.forEach(function(V){be.releaseProgram(V)}),T.isShaderMaterial&&be.releaseShaderCache(T))}this.renderBufferDirect=function(T,G,V,q,z,Se){G===null&&(G=ve);const Ae=z.isMesh&&z.matrixWorld.determinant()<0,Ne=lu(T,G,V,q,z);W.setMaterial(q,Ae);let Fe=V.index,Ve=1;if(q.wireframe===!0){if(Fe=ie.getWireframeAttribute(V),Fe===void 0)return;Ve=2}const Be=V.drawRange,He=V.attributes.position;let mt=Be.start*Ve,qt=(Be.start+Be.count)*Ve;Se!==null&&(mt=Math.max(mt,Se.start*Ve),qt=Math.min(qt,(Se.start+Se.count)*Ve)),Fe!==null?(mt=Math.max(mt,0),qt=Math.min(qt,Fe.count)):He!=null&&(mt=Math.max(mt,0),qt=Math.min(qt,He.count));const At=qt-mt;if(At<0||At===1/0)return;Ge.setup(z,q,Ne,V,Fe);let mn,dt=Ie;if(Fe!==null&&(mn=ne.get(Fe),dt=we,dt.setIndex(mn)),z.isMesh)q.wireframe===!0?(W.setLineWidth(q.wireframeLinewidth*Pe()),dt.setMode(L.LINES)):dt.setMode(L.TRIANGLES);else if(z.isLine){let qe=q.linewidth;qe===void 0&&(qe=1),W.setLineWidth(qe*Pe()),z.isLineSegments?dt.setMode(L.LINES):z.isLineLoop?dt.setMode(L.LINE_LOOP):dt.setMode(L.LINE_STRIP)}else z.isPoints?dt.setMode(L.POINTS):z.isSprite&&dt.setMode(L.TRIANGLES);if(z.isBatchedMesh)dt.renderMultiDraw(z._multiDrawStarts,z._multiDrawCounts,z._multiDrawCount);else if(z.isInstancedMesh)dt.renderInstances(mt,At,z.count);else if(V.isInstancedBufferGeometry){const qe=V._maxInstanceCount!==void 0?V._maxInstanceCount:1/0,Sr=Math.min(V.instanceCount,qe);dt.renderInstances(mt,At,Sr)}else dt.render(mt,At)};function it(T,G,V){T.transparent===!0&&T.side===Dt&&T.forceSinglePass===!1?(T.side=It,T.needsUpdate=!0,Ms(T,G,V),T.side=Gn,T.needsUpdate=!0,Ms(T,G,V),T.side=Dt):Ms(T,G,V)}this.compile=function(T,G,V=null){V===null&&(V=T),m=Ce.get(V),m.init(),x.push(m),V.traverseVisible(function(z){z.isLight&&z.layers.test(G.layers)&&(m.pushLight(z),z.castShadow&&m.pushShadow(z))}),T!==V&&T.traverseVisible(function(z){z.isLight&&z.layers.test(G.layers)&&(m.pushLight(z),z.castShadow&&m.pushShadow(z))}),m.setupLights(v._useLegacyLights);const q=new Set;return T.traverse(function(z){const Se=z.material;if(Se)if(Array.isArray(Se))for(let Ae=0;Ae<Se.length;Ae++){const Ne=Se[Ae];it(Ne,V,z),q.add(Ne)}else it(Se,V,z),q.add(Se)}),x.pop(),m=null,q},this.compileAsync=function(T,G,V=null){const q=this.compile(T,G,V);return new Promise(z=>{function Se(){if(q.forEach(function(Ae){ce.get(Ae).currentProgram.isReady()&&q.delete(Ae)}),q.size===0){z(T);return}setTimeout(Se,10)}$.get("KHR_parallel_shader_compile")!==null?Se():setTimeout(Se,10)})};let st=null;function wt(T){st&&st(T)}function Ft(){Gt.stop()}function rt(){Gt.start()}const Gt=new Cc;Gt.setAnimationLoop(wt),typeof self<"u"&&Gt.setContext(self),this.setAnimationLoop=function(T){st=T,We.setAnimationLoop(T),T===null?Gt.stop():Gt.start()},We.addEventListener("sessionstart",Ft),We.addEventListener("sessionend",rt),this.render=function(T,G){if(G!==void 0&&G.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(S===!0)return;T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),G.parent===null&&G.matrixWorldAutoUpdate===!0&&G.updateMatrixWorld(),We.enabled===!0&&We.isPresenting===!0&&(We.cameraAutoUpdate===!0&&We.updateCamera(G),G=We.getCamera()),T.isScene===!0&&T.onBeforeRender(v,T,G,A),m=Ce.get(T,x.length),m.init(),x.push(m),de.multiplyMatrices(G.projectionMatrix,G.matrixWorldInverse),O.setFromProjectionMatrix(de),oe=this.localClippingEnabled,Y=Oe.init(this.clippingPlanes,oe),_=ye.get(T,f.length),_.init(),f.push(_),un(T,G,0,v.sortObjects),_.finish(),v.sortObjects===!0&&_.sort(j,J),this.info.render.frame++,Y===!0&&Oe.beginShadows();const V=m.state.shadowsArray;if(re.render(V,T,G),Y===!0&&Oe.endShadows(),this.info.autoReset===!0&&this.info.reset(),Ke.render(_,T),m.setupLights(v._useLegacyLights),G.isArrayCamera){const q=G.cameras;for(let z=0,Se=q.length;z<Se;z++){const Ae=q[z];Qa(_,T,Ae,Ae.viewport)}}else Qa(_,T,G);A!==null&&(M.updateMultisampleRenderTarget(A),M.updateRenderTargetMipmap(A)),T.isScene===!0&&T.onAfterRender(v,T,G),Ge.resetDefaultState(),U=-1,b=null,x.pop(),x.length>0?m=x[x.length-1]:m=null,f.pop(),f.length>0?_=f[f.length-1]:_=null};function un(T,G,V,q){if(T.visible===!1)return;if(T.layers.test(G.layers)){if(T.isGroup)V=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(G);else if(T.isLight)m.pushLight(T),T.castShadow&&m.pushShadow(T);else if(T.isSprite){if(!T.frustumCulled||O.intersectsSprite(T)){q&&Te.setFromMatrixPosition(T.matrixWorld).applyMatrix4(de);const Ae=se.update(T),Ne=T.material;Ne.visible&&_.push(T,Ae,Ne,V,Te.z,null)}}else if((T.isMesh||T.isLine||T.isPoints)&&(!T.frustumCulled||O.intersectsObject(T))){const Ae=se.update(T),Ne=T.material;if(q&&(T.boundingSphere!==void 0?(T.boundingSphere===null&&T.computeBoundingSphere(),Te.copy(T.boundingSphere.center)):(Ae.boundingSphere===null&&Ae.computeBoundingSphere(),Te.copy(Ae.boundingSphere.center)),Te.applyMatrix4(T.matrixWorld).applyMatrix4(de)),Array.isArray(Ne)){const Fe=Ae.groups;for(let Ve=0,Be=Fe.length;Ve<Be;Ve++){const He=Fe[Ve],mt=Ne[He.materialIndex];mt&&mt.visible&&_.push(T,Ae,mt,V,Te.z,He)}}else Ne.visible&&_.push(T,Ae,Ne,V,Te.z,null)}}const Se=T.children;for(let Ae=0,Ne=Se.length;Ae<Ne;Ae++)un(Se[Ae],G,V,q)}function Qa(T,G,V,q){const z=T.opaque,Se=T.transmissive,Ae=T.transparent;m.setupLightsView(V),Y===!0&&Oe.setGlobalState(v.clippingPlanes,V),Se.length>0&&ou(z,Se,G,V),q&&W.viewport(E.copy(q)),z.length>0&&Ss(z,G,V),Se.length>0&&Ss(Se,G,V),Ae.length>0&&Ss(Ae,G,V),W.buffers.depth.setTest(!0),W.buffers.depth.setMask(!0),W.buffers.color.setMask(!0),W.setPolygonOffset(!1)}function ou(T,G,V,q){if((V.isScene===!0?V.overrideMaterial:null)!==null)return;const Se=Q.isWebGL2;he===null&&(he=new cn(1,1,{generateMipmaps:!0,type:$.has("EXT_color_buffer_half_float")?En:Fn,minFilter:fs,samples:Se?4:0})),v.getDrawingBufferSize(Ee),Se?he.setSize(Ee.x,Ee.y):he.setSize(Ea(Ee.x),Ea(Ee.y));const Ae=v.getRenderTarget();v.setRenderTarget(he),v.getClearColor(te),I=v.getClearAlpha(),I<1&&v.setClearColor(16777215,.5),v.clear();const Ne=v.toneMapping;v.toneMapping=Un,Ss(T,V,q),M.updateMultisampleRenderTarget(he),M.updateRenderTargetMipmap(he);let Fe=!1;for(let Ve=0,Be=G.length;Ve<Be;Ve++){const He=G[Ve],mt=He.object,qt=He.geometry,At=He.material,mn=He.group;if(At.side===Dt&&mt.layers.test(q.layers)){const dt=At.side;At.side=It,At.needsUpdate=!0,eo(mt,V,q,qt,At,mn),At.side=dt,At.needsUpdate=!0,Fe=!0}}Fe===!0&&(M.updateMultisampleRenderTarget(he),M.updateRenderTargetMipmap(he)),v.setRenderTarget(Ae),v.setClearColor(te,I),v.toneMapping=Ne}function Ss(T,G,V){const q=G.isScene===!0?G.overrideMaterial:null;for(let z=0,Se=T.length;z<Se;z++){const Ae=T[z],Ne=Ae.object,Fe=Ae.geometry,Ve=q===null?Ae.material:q,Be=Ae.group;Ne.layers.test(V.layers)&&eo(Ne,G,V,Fe,Ve,Be)}}function eo(T,G,V,q,z,Se){T.onBeforeRender(v,G,V,q,z,Se),T.modelViewMatrix.multiplyMatrices(V.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),z.onBeforeRender(v,G,V,q,T,Se),z.transparent===!0&&z.side===Dt&&z.forceSinglePass===!1?(z.side=It,z.needsUpdate=!0,v.renderBufferDirect(V,G,q,z,T,Se),z.side=Gn,z.needsUpdate=!0,v.renderBufferDirect(V,G,q,z,T,Se),z.side=Dt):v.renderBufferDirect(V,G,q,z,T,Se),T.onAfterRender(v,G,V,q,z,Se)}function Ms(T,G,V){G.isScene!==!0&&(G=ve);const q=ce.get(T),z=m.state.lights,Se=m.state.shadowsArray,Ae=z.state.version,Ne=be.getParameters(T,z.state,Se,G,V),Fe=be.getProgramCacheKey(Ne);let Ve=q.programs;q.environment=T.isMeshStandardMaterial?G.environment:null,q.fog=G.fog,q.envMap=(T.isMeshStandardMaterial?N:y).get(T.envMap||q.environment),Ve===void 0&&(T.addEventListener("dispose",_e),Ve=new Map,q.programs=Ve);let Be=Ve.get(Fe);if(Be!==void 0){if(q.currentProgram===Be&&q.lightsStateVersion===Ae)return no(T,Ne),Be}else Ne.uniforms=be.getUniforms(T),T.onBuild(V,Ne,v),T.onBeforeCompile(Ne,v),Be=be.acquireProgram(Ne,Fe),Ve.set(Fe,Be),q.uniforms=Ne.uniforms;const He=q.uniforms;return(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(He.clippingPlanes=Oe.uniform),no(T,Ne),q.needsLights=uu(T),q.lightsStateVersion=Ae,q.needsLights&&(He.ambientLightColor.value=z.state.ambient,He.lightProbe.value=z.state.probe,He.directionalLights.value=z.state.directional,He.directionalLightShadows.value=z.state.directionalShadow,He.spotLights.value=z.state.spot,He.spotLightShadows.value=z.state.spotShadow,He.rectAreaLights.value=z.state.rectArea,He.ltc_1.value=z.state.rectAreaLTC1,He.ltc_2.value=z.state.rectAreaLTC2,He.pointLights.value=z.state.point,He.pointLightShadows.value=z.state.pointShadow,He.hemisphereLights.value=z.state.hemi,He.directionalShadowMap.value=z.state.directionalShadowMap,He.directionalShadowMatrix.value=z.state.directionalShadowMatrix,He.spotShadowMap.value=z.state.spotShadowMap,He.spotLightMatrix.value=z.state.spotLightMatrix,He.spotLightMap.value=z.state.spotLightMap,He.pointShadowMap.value=z.state.pointShadowMap,He.pointShadowMatrix.value=z.state.pointShadowMatrix),q.currentProgram=Be,q.uniformsList=null,Be}function to(T){if(T.uniformsList===null){const G=T.currentProgram.getUniforms();T.uniformsList=ir.seqWithValue(G.seq,T.uniforms)}return T.uniformsList}function no(T,G){const V=ce.get(T);V.outputColorSpace=G.outputColorSpace,V.batching=G.batching,V.instancing=G.instancing,V.instancingColor=G.instancingColor,V.skinning=G.skinning,V.morphTargets=G.morphTargets,V.morphNormals=G.morphNormals,V.morphColors=G.morphColors,V.morphTargetsCount=G.morphTargetsCount,V.numClippingPlanes=G.numClippingPlanes,V.numIntersection=G.numClipIntersection,V.vertexAlphas=G.vertexAlphas,V.vertexTangents=G.vertexTangents,V.toneMapping=G.toneMapping}function lu(T,G,V,q,z){G.isScene!==!0&&(G=ve),M.resetTextureUnits();const Se=G.fog,Ae=q.isMeshStandardMaterial?G.environment:null,Ne=A===null?v.outputColorSpace:A.isXRRenderTarget===!0?A.texture.colorSpace:Tn,Fe=(q.isMeshStandardMaterial?N:y).get(q.envMap||Ae),Ve=q.vertexColors===!0&&!!V.attributes.color&&V.attributes.color.itemSize===4,Be=!!V.attributes.tangent&&(!!q.normalMap||q.anisotropy>0),He=!!V.morphAttributes.position,mt=!!V.morphAttributes.normal,qt=!!V.morphAttributes.color;let At=Un;q.toneMapped&&(A===null||A.isXRRenderTarget===!0)&&(At=v.toneMapping);const mn=V.morphAttributes.position||V.morphAttributes.normal||V.morphAttributes.color,dt=mn!==void 0?mn.length:0,qe=ce.get(q),Sr=m.state.lights;if(Y===!0&&(oe===!0||T!==b)){const $t=T===b&&q.id===U;Oe.setState(q,T,$t)}let pt=!1;q.version===qe.__version?(qe.needsLights&&qe.lightsStateVersion!==Sr.state.version||qe.outputColorSpace!==Ne||z.isBatchedMesh&&qe.batching===!1||!z.isBatchedMesh&&qe.batching===!0||z.isInstancedMesh&&qe.instancing===!1||!z.isInstancedMesh&&qe.instancing===!0||z.isSkinnedMesh&&qe.skinning===!1||!z.isSkinnedMesh&&qe.skinning===!0||z.isInstancedMesh&&qe.instancingColor===!0&&z.instanceColor===null||z.isInstancedMesh&&qe.instancingColor===!1&&z.instanceColor!==null||qe.envMap!==Fe||q.fog===!0&&qe.fog!==Se||qe.numClippingPlanes!==void 0&&(qe.numClippingPlanes!==Oe.numPlanes||qe.numIntersection!==Oe.numIntersection)||qe.vertexAlphas!==Ve||qe.vertexTangents!==Be||qe.morphTargets!==He||qe.morphNormals!==mt||qe.morphColors!==qt||qe.toneMapping!==At||Q.isWebGL2===!0&&qe.morphTargetsCount!==dt)&&(pt=!0):(pt=!0,qe.__version=q.version);let Hn=qe.currentProgram;pt===!0&&(Hn=Ms(q,G,z));let io=!1,Xi=!1,Mr=!1;const Nt=Hn.getUniforms(),kn=qe.uniforms;if(W.useProgram(Hn.program)&&(io=!0,Xi=!0,Mr=!0),q.id!==U&&(U=q.id,Xi=!0),io||b!==T){Nt.setValue(L,"projectionMatrix",T.projectionMatrix),Nt.setValue(L,"viewMatrix",T.matrixWorldInverse);const $t=Nt.map.cameraPosition;$t!==void 0&&$t.setValue(L,Te.setFromMatrixPosition(T.matrixWorld)),Q.logarithmicDepthBuffer&&Nt.setValue(L,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),(q.isMeshPhongMaterial||q.isMeshToonMaterial||q.isMeshLambertMaterial||q.isMeshBasicMaterial||q.isMeshStandardMaterial||q.isShaderMaterial)&&Nt.setValue(L,"isOrthographic",T.isOrthographicCamera===!0),b!==T&&(b=T,Xi=!0,Mr=!0)}if(z.isSkinnedMesh){Nt.setOptional(L,z,"bindMatrix"),Nt.setOptional(L,z,"bindMatrixInverse");const $t=z.skeleton;$t&&(Q.floatVertexTextures?($t.boneTexture===null&&$t.computeBoneTexture(),Nt.setValue(L,"boneTexture",$t.boneTexture,M)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}z.isBatchedMesh&&(Nt.setOptional(L,z,"batchingTexture"),Nt.setValue(L,"batchingTexture",z._matricesTexture,M));const br=V.morphAttributes;if((br.position!==void 0||br.normal!==void 0||br.color!==void 0&&Q.isWebGL2===!0)&&ze.update(z,V,Hn),(Xi||qe.receiveShadow!==z.receiveShadow)&&(qe.receiveShadow=z.receiveShadow,Nt.setValue(L,"receiveShadow",z.receiveShadow)),q.isMeshGouraudMaterial&&q.envMap!==null&&(kn.envMap.value=Fe,kn.flipEnvMap.value=Fe.isCubeTexture&&Fe.isRenderTargetTexture===!1?-1:1),Xi&&(Nt.setValue(L,"toneMappingExposure",v.toneMappingExposure),qe.needsLights&&cu(kn,Mr),Se&&q.fog===!0&&me.refreshFogUniforms(kn,Se),me.refreshMaterialUniforms(kn,q,Z,H,he),ir.upload(L,to(qe),kn,M)),q.isShaderMaterial&&q.uniformsNeedUpdate===!0&&(ir.upload(L,to(qe),kn,M),q.uniformsNeedUpdate=!1),q.isSpriteMaterial&&Nt.setValue(L,"center",z.center),Nt.setValue(L,"modelViewMatrix",z.modelViewMatrix),Nt.setValue(L,"normalMatrix",z.normalMatrix),Nt.setValue(L,"modelMatrix",z.matrixWorld),q.isShaderMaterial||q.isRawShaderMaterial){const $t=q.uniformsGroups;for(let Er=0,hu=$t.length;Er<hu;Er++)if(Q.isWebGL2){const so=$t[Er];je.update(so,Hn),je.bind(so,Hn)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return Hn}function cu(T,G){T.ambientLightColor.needsUpdate=G,T.lightProbe.needsUpdate=G,T.directionalLights.needsUpdate=G,T.directionalLightShadows.needsUpdate=G,T.pointLights.needsUpdate=G,T.pointLightShadows.needsUpdate=G,T.spotLights.needsUpdate=G,T.spotLightShadows.needsUpdate=G,T.rectAreaLights.needsUpdate=G,T.hemisphereLights.needsUpdate=G}function uu(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return R},this.getActiveMipmapLevel=function(){return w},this.getRenderTarget=function(){return A},this.setRenderTargetTextures=function(T,G,V){ce.get(T.texture).__webglTexture=G,ce.get(T.depthTexture).__webglTexture=V;const q=ce.get(T);q.__hasExternalTextures=!0,q.__hasExternalTextures&&(q.__autoAllocateDepthBuffer=V===void 0,q.__autoAllocateDepthBuffer||$.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),q.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(T,G){const V=ce.get(T);V.__webglFramebuffer=G,V.__useDefaultFramebuffer=G===void 0},this.setRenderTarget=function(T,G=0,V=0){A=T,R=G,w=V;let q=!0,z=null,Se=!1,Ae=!1;if(T){const Fe=ce.get(T);Fe.__useDefaultFramebuffer!==void 0?(W.bindFramebuffer(L.FRAMEBUFFER,null),q=!1):Fe.__webglFramebuffer===void 0?M.setupRenderTarget(T):Fe.__hasExternalTextures&&M.rebindTextures(T,ce.get(T.texture).__webglTexture,ce.get(T.depthTexture).__webglTexture);const Ve=T.texture;(Ve.isData3DTexture||Ve.isDataArrayTexture||Ve.isCompressedArrayTexture)&&(Ae=!0);const Be=ce.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(Array.isArray(Be[G])?z=Be[G][V]:z=Be[G],Se=!0):Q.isWebGL2&&T.samples>0&&M.useMultisampledRTT(T)===!1?z=ce.get(T).__webglMultisampledFramebuffer:Array.isArray(Be)?z=Be[V]:z=Be,E.copy(T.viewport),F.copy(T.scissor),k=T.scissorTest}else E.copy(X).multiplyScalar(Z).floor(),F.copy(K).multiplyScalar(Z).floor(),k=P;if(W.bindFramebuffer(L.FRAMEBUFFER,z)&&Q.drawBuffers&&q&&W.drawBuffers(T,z),W.viewport(E),W.scissor(F),W.setScissorTest(k),Se){const Fe=ce.get(T.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_CUBE_MAP_POSITIVE_X+G,Fe.__webglTexture,V)}else if(Ae){const Fe=ce.get(T.texture),Ve=G||0;L.framebufferTextureLayer(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,Fe.__webglTexture,V||0,Ve)}U=-1},this.readRenderTargetPixels=function(T,G,V,q,z,Se,Ae){if(!(T&&T.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ne=ce.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&Ae!==void 0&&(Ne=Ne[Ae]),Ne){W.bindFramebuffer(L.FRAMEBUFFER,Ne);try{const Fe=T.texture,Ve=Fe.format,Be=Fe.type;if(Ve!==an&&Me.convert(Ve)!==L.getParameter(L.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const He=Be===En&&($.has("EXT_color_buffer_half_float")||Q.isWebGL2&&$.has("EXT_color_buffer_float"));if(Be!==Fn&&Me.convert(Be)!==L.getParameter(L.IMPLEMENTATION_COLOR_READ_TYPE)&&!(Be===On&&(Q.isWebGL2||$.has("OES_texture_float")||$.has("WEBGL_color_buffer_float")))&&!He){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}G>=0&&G<=T.width-q&&V>=0&&V<=T.height-z&&L.readPixels(G,V,q,z,Me.convert(Ve),Me.convert(Be),Se)}finally{const Fe=A!==null?ce.get(A).__webglFramebuffer:null;W.bindFramebuffer(L.FRAMEBUFFER,Fe)}}},this.copyFramebufferToTexture=function(T,G,V=0){const q=Math.pow(2,-V),z=Math.floor(G.image.width*q),Se=Math.floor(G.image.height*q);M.setTexture2D(G,0),L.copyTexSubImage2D(L.TEXTURE_2D,V,0,0,T.x,T.y,z,Se),W.unbindTexture()},this.copyTextureToTexture=function(T,G,V,q=0){const z=G.image.width,Se=G.image.height,Ae=Me.convert(V.format),Ne=Me.convert(V.type);M.setTexture2D(V,0),L.pixelStorei(L.UNPACK_FLIP_Y_WEBGL,V.flipY),L.pixelStorei(L.UNPACK_PREMULTIPLY_ALPHA_WEBGL,V.premultiplyAlpha),L.pixelStorei(L.UNPACK_ALIGNMENT,V.unpackAlignment),G.isDataTexture?L.texSubImage2D(L.TEXTURE_2D,q,T.x,T.y,z,Se,Ae,Ne,G.image.data):G.isCompressedTexture?L.compressedTexSubImage2D(L.TEXTURE_2D,q,T.x,T.y,G.mipmaps[0].width,G.mipmaps[0].height,Ae,G.mipmaps[0].data):L.texSubImage2D(L.TEXTURE_2D,q,T.x,T.y,Ae,Ne,G.image),q===0&&V.generateMipmaps&&L.generateMipmap(L.TEXTURE_2D),W.unbindTexture()},this.copyTextureToTexture3D=function(T,G,V,q,z=0){if(v.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const Se=T.max.x-T.min.x+1,Ae=T.max.y-T.min.y+1,Ne=T.max.z-T.min.z+1,Fe=Me.convert(q.format),Ve=Me.convert(q.type);let Be;if(q.isData3DTexture)M.setTexture3D(q,0),Be=L.TEXTURE_3D;else if(q.isDataArrayTexture||q.isCompressedArrayTexture)M.setTexture2DArray(q,0),Be=L.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}L.pixelStorei(L.UNPACK_FLIP_Y_WEBGL,q.flipY),L.pixelStorei(L.UNPACK_PREMULTIPLY_ALPHA_WEBGL,q.premultiplyAlpha),L.pixelStorei(L.UNPACK_ALIGNMENT,q.unpackAlignment);const He=L.getParameter(L.UNPACK_ROW_LENGTH),mt=L.getParameter(L.UNPACK_IMAGE_HEIGHT),qt=L.getParameter(L.UNPACK_SKIP_PIXELS),At=L.getParameter(L.UNPACK_SKIP_ROWS),mn=L.getParameter(L.UNPACK_SKIP_IMAGES),dt=V.isCompressedTexture?V.mipmaps[z]:V.image;L.pixelStorei(L.UNPACK_ROW_LENGTH,dt.width),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,dt.height),L.pixelStorei(L.UNPACK_SKIP_PIXELS,T.min.x),L.pixelStorei(L.UNPACK_SKIP_ROWS,T.min.y),L.pixelStorei(L.UNPACK_SKIP_IMAGES,T.min.z),V.isDataTexture||V.isData3DTexture?L.texSubImage3D(Be,z,G.x,G.y,G.z,Se,Ae,Ne,Fe,Ve,dt.data):V.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),L.compressedTexSubImage3D(Be,z,G.x,G.y,G.z,Se,Ae,Ne,Fe,dt.data)):L.texSubImage3D(Be,z,G.x,G.y,G.z,Se,Ae,Ne,Fe,Ve,dt),L.pixelStorei(L.UNPACK_ROW_LENGTH,He),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,mt),L.pixelStorei(L.UNPACK_SKIP_PIXELS,qt),L.pixelStorei(L.UNPACK_SKIP_ROWS,At),L.pixelStorei(L.UNPACK_SKIP_IMAGES,mn),z===0&&q.generateMipmaps&&L.generateMipmap(Be),W.unbindTexture()},this.initTexture=function(T){T.isCubeTexture?M.setTextureCube(T,0):T.isData3DTexture?M.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?M.setTexture2DArray(T,0):M.setTexture2D(T,0),W.unbindTexture()},this.resetState=function(){R=0,w=0,A=null,W.reset(),Ge.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Mn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=e===Ha?"display-p3":"srgb",t.unpackColorSpace=nt.workingColorSpace===mr?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===_t?ei:mc}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===ei?_t:Tn}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}}class g0 extends Oc{}g0.prototype.isWebGL1Renderer=!0;class qa{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new Re(e),this.density=t}clone(){return new qa(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class Uc extends bt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}}class Tl extends yt{constructor(e,t,n,s=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const Ei=new at,wl=new at,qs=[],Al=new si,_0=new at,Ji=new ee,Qi=new ri;class v0 extends ee{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Tl(new Float32Array(n*16),16),this.instanceColor=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,_0)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new si),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Ei),Al.copy(e.boundingBox).applyMatrix4(Ei),this.boundingBox.union(Al)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new ri),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Ei),Qi.copy(e.boundingSphere).applyMatrix4(Ei),this.boundingSphere.union(Qi)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}raycast(e,t){const n=this.matrixWorld,s=this.count;if(Ji.geometry=this.geometry,Ji.material=this.material,Ji.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Qi.copy(this.boundingSphere),Qi.applyMatrix4(n),e.ray.intersectsSphere(Qi)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,Ei),wl.multiplyMatrices(n,Ei),Ji.matrixWorld=wl,Ji.raycast(e,qs);for(let a=0,o=qs.length;a<o;a++){const l=qs[a];l.instanceId=r,l.object=this,t.push(l)}qs.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new Tl(new Float32Array(this.instanceMatrix.count*3),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"})}}class Xa extends ai{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Re(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Cl=new C,Rl=new C,Ll=new at,na=new gr,Xs=new ri;class Fc extends bt{constructor(e=new lt,t=new Xa){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let s=1,r=t.count;s<r;s++)Cl.fromBufferAttribute(t,s-1),Rl.fromBufferAttribute(t,s),n[s]=n[s-1],n[s]+=Cl.distanceTo(Rl);e.setAttribute("lineDistance",new Ye(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Xs.copy(n.boundingSphere),Xs.applyMatrix4(s),Xs.radius+=r,e.ray.intersectsSphere(Xs)===!1)return;Ll.copy(s).invert(),na.copy(e.ray).applyMatrix4(Ll);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=new C,u=new C,h=new C,d=new C,p=this.isLineSegments?2:1,g=n.index,m=n.attributes.position;if(g!==null){const f=Math.max(0,a.start),x=Math.min(g.count,a.start+a.count);for(let v=f,S=x-1;v<S;v+=p){const R=g.getX(v),w=g.getX(v+1);if(c.fromBufferAttribute(m,R),u.fromBufferAttribute(m,w),na.distanceSqToSegment(c,u,d,h)>l)continue;d.applyMatrix4(this.matrixWorld);const U=e.ray.origin.distanceTo(d);U<e.near||U>e.far||t.push({distance:U,point:h.clone().applyMatrix4(this.matrixWorld),index:v,face:null,faceIndex:null,object:this})}}else{const f=Math.max(0,a.start),x=Math.min(m.count,a.start+a.count);for(let v=f,S=x-1;v<S;v+=p){if(c.fromBufferAttribute(m,v),u.fromBufferAttribute(m,v+1),na.distanceSqToSegment(c,u,d,h)>l)continue;d.applyMatrix4(this.matrixWorld);const w=e.ray.origin.distanceTo(d);w<e.near||w>e.far||t.push({distance:w,point:h.clone().applyMatrix4(this.matrixWorld),index:v,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}const Pl=new C,Il=new C;class x0 extends Fc{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let s=0,r=t.count;s<r;s+=2)Pl.fromBufferAttribute(t,s),Il.fromBufferAttribute(t,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+Pl.distanceTo(Il);e.setAttribute("lineDistance",new Ye(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Wi extends ai{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Re(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Dl=new at,wa=new gr,Ks=new ri,Ys=new C;class qi extends bt{constructor(e=new lt,t=new Wi){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Ks.copy(n.boundingSphere),Ks.applyMatrix4(s),Ks.radius+=r,e.ray.intersectsSphere(Ks)===!1)return;Dl.copy(s).invert(),wa.copy(e.ray).applyMatrix4(Dl);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=n.index,h=n.attributes.position;if(c!==null){const d=Math.max(0,a.start),p=Math.min(c.count,a.start+a.count);for(let g=d,_=p;g<_;g++){const m=c.getX(g);Ys.fromBufferAttribute(h,m),Nl(Ys,m,l,s,e,t,this)}}else{const d=Math.max(0,a.start),p=Math.min(h.count,a.start+a.count);for(let g=d,_=p;g<_;g++)Ys.fromBufferAttribute(h,g),Nl(Ys,g,l,s,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function Nl(i,e,t,n,s,r,a){const o=wa.distanceSqToPoint(i);if(o<t){const l=new C;wa.closestPointToPoint(i,l),l.applyMatrix4(n);const c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:e,face:null,object:a})}}class Bn extends Wt{constructor(e,t,n,s,r,a,o,l,c){super(e,t,n,s,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class pn{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){const n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let n,s=this.getPoint(0),r=0;t.push(0);for(let a=1;a<=e;a++)n=this.getPoint(a/e),r+=n.distanceTo(s),t.push(r),s=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){const n=this.getLengths();let s=0;const r=n.length;let a;t?a=t:a=e*n[r-1];let o=0,l=r-1,c;for(;o<=l;)if(s=Math.floor(o+(l-o)/2),c=n[s]-a,c<0)o=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,n[s]===a)return s/(r-1);const u=n[s],d=n[s+1]-u,p=(a-u)/d;return(s+p)/(r-1)}getTangent(e,t){let s=e-1e-4,r=e+1e-4;s<0&&(s=0),r>1&&(r=1);const a=this.getPoint(s),o=this.getPoint(r),l=t||(a.isVector2?new ae:new C);return l.copy(o).sub(a).normalize(),l}getTangentAt(e,t){const n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t){const n=new C,s=[],r=[],a=[],o=new C,l=new at;for(let p=0;p<=e;p++){const g=p/e;s[p]=this.getTangentAt(g,new C)}r[0]=new C,a[0]=new C;let c=Number.MAX_VALUE;const u=Math.abs(s[0].x),h=Math.abs(s[0].y),d=Math.abs(s[0].z);u<=c&&(c=u,n.set(1,0,0)),h<=c&&(c=h,n.set(0,1,0)),d<=c&&n.set(0,0,1),o.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],o),a[0].crossVectors(s[0],r[0]);for(let p=1;p<=e;p++){if(r[p]=r[p-1].clone(),a[p]=a[p-1].clone(),o.crossVectors(s[p-1],s[p]),o.length()>Number.EPSILON){o.normalize();const g=Math.acos(Lt(s[p-1].dot(s[p]),-1,1));r[p].applyMatrix4(l.makeRotationAxis(o,g))}a[p].crossVectors(s[p],r[p])}if(t===!0){let p=Math.acos(Lt(r[0].dot(r[e]),-1,1));p/=e,s[0].dot(o.crossVectors(r[0],r[e]))>0&&(p=-p);for(let g=1;g<=e;g++)r[g].applyMatrix4(l.makeRotationAxis(s[g],p*g)),a[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class Ka extends pn{constructor(e=0,t=0,n=1,s=1,r=0,a=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(e,t){const n=t||new ae,s=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(a?r=0:r=s),this.aClockwise===!0&&!a&&(r===s?r=-s:r=r-s);const o=this.aStartAngle+e*r;let l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){const u=Math.cos(this.aRotation),h=Math.sin(this.aRotation),d=l-this.aX,p=c-this.aY;l=d*u-p*h+this.aX,c=d*h+p*u+this.aY}return n.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class y0 extends Ka{constructor(e,t,n,s,r,a){super(e,t,n,n,s,r,a),this.isArcCurve=!0,this.type="ArcCurve"}}function Ya(){let i=0,e=0,t=0,n=0;function s(r,a,o,l){i=r,e=o,t=-3*r+3*a-2*o-l,n=2*r-2*a+o+l}return{initCatmullRom:function(r,a,o,l,c){s(a,o,c*(o-r),c*(l-a))},initNonuniformCatmullRom:function(r,a,o,l,c,u,h){let d=(a-r)/c-(o-r)/(c+u)+(o-a)/u,p=(o-a)/u-(l-a)/(u+h)+(l-o)/h;d*=u,p*=u,s(a,o,d,p)},calc:function(r){const a=r*r,o=a*r;return i+e*r+t*a+n*o}}}const $s=new C,ia=new Ya,sa=new Ya,ra=new Ya;class S0 extends pn{constructor(e=[],t=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=s}getPoint(e,t=new C){const n=t,s=this.points,r=s.length,a=(r-(this.closed?0:1))*e;let o=Math.floor(a),l=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:l===0&&o===r-1&&(o=r-2,l=1);let c,u;this.closed||o>0?c=s[(o-1)%r]:($s.subVectors(s[0],s[1]).add(s[0]),c=$s);const h=s[o%r],d=s[(o+1)%r];if(this.closed||o+2<r?u=s[(o+2)%r]:($s.subVectors(s[r-1],s[r-2]).add(s[r-1]),u=$s),this.curveType==="centripetal"||this.curveType==="chordal"){const p=this.curveType==="chordal"?.5:.25;let g=Math.pow(c.distanceToSquared(h),p),_=Math.pow(h.distanceToSquared(d),p),m=Math.pow(d.distanceToSquared(u),p);_<1e-4&&(_=1),g<1e-4&&(g=_),m<1e-4&&(m=_),ia.initNonuniformCatmullRom(c.x,h.x,d.x,u.x,g,_,m),sa.initNonuniformCatmullRom(c.y,h.y,d.y,u.y,g,_,m),ra.initNonuniformCatmullRom(c.z,h.z,d.z,u.z,g,_,m)}else this.curveType==="catmullrom"&&(ia.initCatmullRom(c.x,h.x,d.x,u.x,this.tension),sa.initCatmullRom(c.y,h.y,d.y,u.y,this.tension),ra.initCatmullRom(c.z,h.z,d.z,u.z,this.tension));return n.set(ia.calc(l),sa.calc(l),ra.calc(l)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const s=e.points[t];this.points.push(s.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const s=this.points[t];e.points.push(s.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const s=e.points[t];this.points.push(new C().fromArray(s))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function Ol(i,e,t,n,s){const r=(n-e)*.5,a=(s-t)*.5,o=i*i,l=i*o;return(2*t-2*n+r+a)*l+(-3*t+3*n-2*r-a)*o+r*i+t}function M0(i,e){const t=1-i;return t*t*e}function b0(i,e){return 2*(1-i)*i*e}function E0(i,e){return i*i*e}function ls(i,e,t,n){return M0(i,e)+b0(i,t)+E0(i,n)}function T0(i,e){const t=1-i;return t*t*t*e}function w0(i,e){const t=1-i;return 3*t*t*i*e}function A0(i,e){return 3*(1-i)*i*i*e}function C0(i,e){return i*i*i*e}function cs(i,e,t,n,s){return T0(i,e)+w0(i,t)+A0(i,n)+C0(i,s)}class Gc extends pn{constructor(e=new ae,t=new ae,n=new ae,s=new ae){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new ae){const n=t,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(cs(e,s.x,r.x,a.x,o.x),cs(e,s.y,r.y,a.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class R0 extends pn{constructor(e=new C,t=new C,n=new C,s=new C){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new C){const n=t,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(cs(e,s.x,r.x,a.x,o.x),cs(e,s.y,r.y,a.y,o.y),cs(e,s.z,r.z,a.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class Bc extends pn{constructor(e=new ae,t=new ae){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new ae){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new ae){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class L0 extends pn{constructor(e=new C,t=new C){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new C){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new C){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Hc extends pn{constructor(e=new ae,t=new ae,n=new ae){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new ae){const n=t,s=this.v0,r=this.v1,a=this.v2;return n.set(ls(e,s.x,r.x,a.x),ls(e,s.y,r.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class P0 extends pn{constructor(e=new C,t=new C,n=new C){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new C){const n=t,s=this.v0,r=this.v1,a=this.v2;return n.set(ls(e,s.x,r.x,a.x),ls(e,s.y,r.y,a.y),ls(e,s.z,r.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class kc extends pn{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new ae){const n=t,s=this.points,r=(s.length-1)*e,a=Math.floor(r),o=r-a,l=s[a===0?a:a-1],c=s[a],u=s[a>s.length-2?s.length-1:a+1],h=s[a>s.length-3?s.length-1:a+2];return n.set(Ol(o,l.x,c.x,u.x,h.x),Ol(o,l.y,c.y,u.y,h.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const s=e.points[t];this.points.push(s.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const s=this.points[t];e.points.push(s.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const s=e.points[t];this.points.push(new ae().fromArray(s))}return this}}var Aa=Object.freeze({__proto__:null,ArcCurve:y0,CatmullRomCurve3:S0,CubicBezierCurve:Gc,CubicBezierCurve3:R0,EllipseCurve:Ka,LineCurve:Bc,LineCurve3:L0,QuadraticBezierCurve:Hc,QuadraticBezierCurve3:P0,SplineCurve:kc});class I0 extends pn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){const e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){const n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Aa[n](t,e))}return this}getPoint(e,t){const n=e*this.getLength(),s=this.getCurveLengths();let r=0;for(;r<s.length;){if(s[r]>=n){const a=s[r]-n,o=this.curves[r],l=o.getLength(),c=l===0?0:1-a/l;return o.getPointAt(c,t)}r++}return null}getLength(){const e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const e=[];let t=0;for(let n=0,s=this.curves.length;n<s;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){const t=[];let n;for(let s=0,r=this.curves;s<r.length;s++){const a=r[s],o=a.isEllipseCurve?e*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?e*a.points.length:e,l=a.getPoints(o);for(let c=0;c<l.length;c++){const u=l[c];n&&n.equals(u)||(t.push(u),n=u)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const s=e.curves[t];this.curves.push(s.clone())}return this.autoClose=e.autoClose,this}toJSON(){const e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){const s=this.curves[t];e.curves.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const s=e.curves[t];this.curves.push(new Aa[s.type]().fromJSON(s))}return this}}class Ca extends I0{constructor(e){super(),this.type="Path",this.currentPoint=new ae,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){const n=new Bc(this.currentPoint.clone(),new ae(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,s){const r=new Hc(this.currentPoint.clone(),new ae(e,t),new ae(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(e,t,n,s,r,a){const o=new Gc(this.currentPoint.clone(),new ae(e,t),new ae(n,s),new ae(r,a));return this.curves.push(o),this.currentPoint.set(r,a),this}splineThru(e){const t=[this.currentPoint.clone()].concat(e),n=new kc(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,s,r,a){const o=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+o,t+l,n,s,r,a),this}absarc(e,t,n,s,r,a){return this.absellipse(e,t,n,n,s,r,a),this}ellipse(e,t,n,s,r,a,o,l){const c=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(e+c,t+u,n,s,r,a,o,l),this}absellipse(e,t,n,s,r,a,o,l){const c=new Ka(e,t,n,s,r,a,o,l);if(this.curves.length>0){const h=c.getPoint(0);h.equals(this.currentPoint)||this.lineTo(h.x,h.y)}this.curves.push(c);const u=c.getPoint(1);return this.currentPoint.copy(u),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){const e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}}class $a extends lt{constructor(e=[new ae(0,-.5),new ae(.5,0),new ae(0,.5)],t=12,n=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:n,phiLength:s},t=Math.floor(t),s=Lt(s,0,Math.PI*2);const r=[],a=[],o=[],l=[],c=[],u=1/t,h=new C,d=new ae,p=new C,g=new C,_=new C;let m=0,f=0;for(let x=0;x<=e.length-1;x++)switch(x){case 0:m=e[x+1].x-e[x].x,f=e[x+1].y-e[x].y,p.x=f*1,p.y=-m,p.z=f*0,_.copy(p),p.normalize(),l.push(p.x,p.y,p.z);break;case e.length-1:l.push(_.x,_.y,_.z);break;default:m=e[x+1].x-e[x].x,f=e[x+1].y-e[x].y,p.x=f*1,p.y=-m,p.z=f*0,g.copy(p),p.x+=_.x,p.y+=_.y,p.z+=_.z,p.normalize(),l.push(p.x,p.y,p.z),_.copy(g)}for(let x=0;x<=t;x++){const v=n+x*u*s,S=Math.sin(v),R=Math.cos(v);for(let w=0;w<=e.length-1;w++){h.x=e[w].x*S,h.y=e[w].y,h.z=e[w].x*R,a.push(h.x,h.y,h.z),d.x=x/t,d.y=w/(e.length-1),o.push(d.x,d.y);const A=l[3*w+0]*S,U=l[3*w+1],b=l[3*w+0]*R;c.push(A,U,b)}}for(let x=0;x<t;x++)for(let v=0;v<e.length-1;v++){const S=v+x*e.length,R=S,w=S+e.length,A=S+e.length+1,U=S+1;r.push(R,w,U),r.push(A,U,w)}this.setIndex(r),this.setAttribute("position",new Ye(a,3)),this.setAttribute("uv",new Ye(o,2)),this.setAttribute("normal",new Ye(c,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new $a(e.points,e.segments,e.phiStart,e.phiLength)}}class us extends $a{constructor(e=1,t=1,n=4,s=8){const r=new Ca;r.absarc(0,-t/2,e,Math.PI*1.5,0),r.absarc(0,t/2,e,0,Math.PI*.5),super(r.getPoints(n),s),this.type="CapsuleGeometry",this.parameters={radius:e,length:t,capSegments:n,radialSegments:s}}static fromJSON(e){return new us(e.radius,e.length,e.capSegments,e.radialSegments)}}class Dn extends lt{constructor(e=1,t=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:s},t=Math.max(3,t);const r=[],a=[],o=[],l=[],c=new C,u=new ae;a.push(0,0,0),o.push(0,0,1),l.push(.5,.5);for(let h=0,d=3;h<=t;h++,d+=3){const p=n+h/t*s;c.x=e*Math.cos(p),c.y=e*Math.sin(p),a.push(c.x,c.y,c.z),o.push(0,0,1),u.x=(a[d]/e+1)/2,u.y=(a[d+1]/e+1)/2,l.push(u.x,u.y)}for(let h=1;h<=t;h++)r.push(h,h+1,0);this.setIndex(r),this.setAttribute("position",new Ye(a,3)),this.setAttribute("normal",new Ye(o,3)),this.setAttribute("uv",new Ye(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Dn(e.radius,e.segments,e.thetaStart,e.thetaLength)}}class gt extends lt{constructor(e=1,t=1,n=1,s=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};const c=this;s=Math.floor(s),r=Math.floor(r);const u=[],h=[],d=[],p=[];let g=0;const _=[],m=n/2;let f=0;x(),a===!1&&(e>0&&v(!0),t>0&&v(!1)),this.setIndex(u),this.setAttribute("position",new Ye(h,3)),this.setAttribute("normal",new Ye(d,3)),this.setAttribute("uv",new Ye(p,2));function x(){const S=new C,R=new C;let w=0;const A=(t-e)/n;for(let U=0;U<=r;U++){const b=[],E=U/r,F=E*(t-e)+e;for(let k=0;k<=s;k++){const te=k/s,I=te*l+o,B=Math.sin(I),H=Math.cos(I);R.x=F*B,R.y=-E*n+m,R.z=F*H,h.push(R.x,R.y,R.z),S.set(B,A,H).normalize(),d.push(S.x,S.y,S.z),p.push(te,1-E),b.push(g++)}_.push(b)}for(let U=0;U<s;U++)for(let b=0;b<r;b++){const E=_[b][U],F=_[b+1][U],k=_[b+1][U+1],te=_[b][U+1];u.push(E,F,te),u.push(F,k,te),w+=6}c.addGroup(f,w,0),f+=w}function v(S){const R=g,w=new ae,A=new C;let U=0;const b=S===!0?e:t,E=S===!0?1:-1;for(let k=1;k<=s;k++)h.push(0,m*E,0),d.push(0,E,0),p.push(.5,.5),g++;const F=g;for(let k=0;k<=s;k++){const I=k/s*l+o,B=Math.cos(I),H=Math.sin(I);A.x=b*H,A.y=m*E,A.z=b*B,h.push(A.x,A.y,A.z),d.push(0,E,0),w.x=B*.5+.5,w.y=H*.5*E+.5,p.push(w.x,w.y),g++}for(let k=0;k<s;k++){const te=R+k,I=F+k;S===!0?u.push(I,I+1,te):u.push(I+1,I,te),U+=3}c.addGroup(f,U,S===!0?1:2),f+=U}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new gt(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Gi extends gt{constructor(e=1,t=1,n=32,s=1,r=!1,a=0,o=Math.PI*2){super(0,e,t,n,s,r,a,o),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(e){return new Gi(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class ja extends lt{constructor(e=[],t=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:s};const r=[],a=[];o(s),c(n),u(),this.setAttribute("position",new Ye(r,3)),this.setAttribute("normal",new Ye(r.slice(),3)),this.setAttribute("uv",new Ye(a,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function o(x){const v=new C,S=new C,R=new C;for(let w=0;w<t.length;w+=3)p(t[w+0],v),p(t[w+1],S),p(t[w+2],R),l(v,S,R,x)}function l(x,v,S,R){const w=R+1,A=[];for(let U=0;U<=w;U++){A[U]=[];const b=x.clone().lerp(S,U/w),E=v.clone().lerp(S,U/w),F=w-U;for(let k=0;k<=F;k++)k===0&&U===w?A[U][k]=b:A[U][k]=b.clone().lerp(E,k/F)}for(let U=0;U<w;U++)for(let b=0;b<2*(w-U)-1;b++){const E=Math.floor(b/2);b%2===0?(d(A[U][E+1]),d(A[U+1][E]),d(A[U][E])):(d(A[U][E+1]),d(A[U+1][E+1]),d(A[U+1][E]))}}function c(x){const v=new C;for(let S=0;S<r.length;S+=3)v.x=r[S+0],v.y=r[S+1],v.z=r[S+2],v.normalize().multiplyScalar(x),r[S+0]=v.x,r[S+1]=v.y,r[S+2]=v.z}function u(){const x=new C;for(let v=0;v<r.length;v+=3){x.x=r[v+0],x.y=r[v+1],x.z=r[v+2];const S=m(x)/2/Math.PI+.5,R=f(x)/Math.PI+.5;a.push(S,1-R)}g(),h()}function h(){for(let x=0;x<a.length;x+=6){const v=a[x+0],S=a[x+2],R=a[x+4],w=Math.max(v,S,R),A=Math.min(v,S,R);w>.9&&A<.1&&(v<.2&&(a[x+0]+=1),S<.2&&(a[x+2]+=1),R<.2&&(a[x+4]+=1))}}function d(x){r.push(x.x,x.y,x.z)}function p(x,v){const S=x*3;v.x=e[S+0],v.y=e[S+1],v.z=e[S+2]}function g(){const x=new C,v=new C,S=new C,R=new C,w=new ae,A=new ae,U=new ae;for(let b=0,E=0;b<r.length;b+=9,E+=6){x.set(r[b+0],r[b+1],r[b+2]),v.set(r[b+3],r[b+4],r[b+5]),S.set(r[b+6],r[b+7],r[b+8]),w.set(a[E+0],a[E+1]),A.set(a[E+2],a[E+3]),U.set(a[E+4],a[E+5]),R.copy(x).add(v).add(S).divideScalar(3);const F=m(R);_(w,E+0,x,F),_(A,E+2,v,F),_(U,E+4,S,F)}}function _(x,v,S,R){R<0&&x.x===1&&(a[v]=x.x-1),S.x===0&&S.z===0&&(a[v]=R/2/Math.PI+.5)}function m(x){return Math.atan2(x.z,-x.x)}function f(x){return Math.atan2(-x.y,Math.sqrt(x.x*x.x+x.z*x.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ja(e.vertices,e.indices,e.radius,e.details)}}class zc extends Ca{constructor(e){super(e),this.uuid=zi(),this.type="Shape",this.holes=[]}getPointsHoles(e){const t=[];for(let n=0,s=this.holes.length;n<s;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){const s=e.holes[t];this.holes.push(s.clone())}return this}toJSON(){const e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){const s=this.holes[t];e.holes.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){const s=e.holes[t];this.holes.push(new Ca().fromJSON(s))}return this}}const D0={triangulate:function(i,e,t=2){const n=e&&e.length,s=n?e[0]*t:i.length;let r=Vc(i,0,s,t,!0);const a=[];if(!r||r.next===r.prev)return a;let o,l,c,u,h,d,p;if(n&&(r=G0(i,e,r,t)),i.length>80*t){o=c=i[0],l=u=i[1];for(let g=t;g<s;g+=t)h=i[g],d=i[g+1],h<o&&(o=h),d<l&&(l=d),h>c&&(c=h),d>u&&(u=d);p=Math.max(c-o,u-l),p=p!==0?32767/p:0}return ps(r,a,t,o,l,p,0),a}};function Vc(i,e,t,n,s){let r,a;if(s===$0(i,e,t,n)>0)for(r=e;r<t;r+=n)a=Ul(r,i[r],i[r+1],a);else for(r=t-n;r>=e;r-=n)a=Ul(r,i[r],i[r+1],a);return a&&vr(a,a.next)&&(gs(a),a=a.next),a}function ni(i,e){if(!i)return i;e||(e=i);let t=i,n;do if(n=!1,!t.steiner&&(vr(t,t.next)||ft(t.prev,t,t.next)===0)){if(gs(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function ps(i,e,t,n,s,r,a){if(!i)return;!a&&r&&V0(i,n,s,r);let o=i,l,c;for(;i.prev!==i.next;){if(l=i.prev,c=i.next,r?O0(i,n,s,r):N0(i)){e.push(l.i/t|0),e.push(i.i/t|0),e.push(c.i/t|0),gs(i),i=c.next,o=c.next;continue}if(i=c,i===o){a?a===1?(i=U0(ni(i),e,t),ps(i,e,t,n,s,r,2)):a===2&&F0(i,e,t,n,s,r):ps(ni(i),e,t,n,s,r,1);break}}}function N0(i){const e=i.prev,t=i,n=i.next;if(ft(e,t,n)>=0)return!1;const s=e.x,r=t.x,a=n.x,o=e.y,l=t.y,c=n.y,u=s<r?s<a?s:a:r<a?r:a,h=o<l?o<c?o:c:l<c?l:c,d=s>r?s>a?s:a:r>a?r:a,p=o>l?o>c?o:c:l>c?l:c;let g=n.next;for(;g!==e;){if(g.x>=u&&g.x<=d&&g.y>=h&&g.y<=p&&Ri(s,o,r,l,a,c,g.x,g.y)&&ft(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function O0(i,e,t,n){const s=i.prev,r=i,a=i.next;if(ft(s,r,a)>=0)return!1;const o=s.x,l=r.x,c=a.x,u=s.y,h=r.y,d=a.y,p=o<l?o<c?o:c:l<c?l:c,g=u<h?u<d?u:d:h<d?h:d,_=o>l?o>c?o:c:l>c?l:c,m=u>h?u>d?u:d:h>d?h:d,f=Ra(p,g,e,t,n),x=Ra(_,m,e,t,n);let v=i.prevZ,S=i.nextZ;for(;v&&v.z>=f&&S&&S.z<=x;){if(v.x>=p&&v.x<=_&&v.y>=g&&v.y<=m&&v!==s&&v!==a&&Ri(o,u,l,h,c,d,v.x,v.y)&&ft(v.prev,v,v.next)>=0||(v=v.prevZ,S.x>=p&&S.x<=_&&S.y>=g&&S.y<=m&&S!==s&&S!==a&&Ri(o,u,l,h,c,d,S.x,S.y)&&ft(S.prev,S,S.next)>=0))return!1;S=S.nextZ}for(;v&&v.z>=f;){if(v.x>=p&&v.x<=_&&v.y>=g&&v.y<=m&&v!==s&&v!==a&&Ri(o,u,l,h,c,d,v.x,v.y)&&ft(v.prev,v,v.next)>=0)return!1;v=v.prevZ}for(;S&&S.z<=x;){if(S.x>=p&&S.x<=_&&S.y>=g&&S.y<=m&&S!==s&&S!==a&&Ri(o,u,l,h,c,d,S.x,S.y)&&ft(S.prev,S,S.next)>=0)return!1;S=S.nextZ}return!0}function U0(i,e,t){let n=i;do{const s=n.prev,r=n.next.next;!vr(s,r)&&Wc(s,n,n.next,r)&&ms(s,r)&&ms(r,s)&&(e.push(s.i/t|0),e.push(n.i/t|0),e.push(r.i/t|0),gs(n),gs(n.next),n=i=r),n=n.next}while(n!==i);return ni(n)}function F0(i,e,t,n,s,r){let a=i;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&X0(a,o)){let l=qc(a,o);a=ni(a,a.next),l=ni(l,l.next),ps(a,e,t,n,s,r,0),ps(l,e,t,n,s,r,0);return}o=o.next}a=a.next}while(a!==i)}function G0(i,e,t,n){const s=[];let r,a,o,l,c;for(r=0,a=e.length;r<a;r++)o=e[r]*n,l=r<a-1?e[r+1]*n:i.length,c=Vc(i,o,l,n,!1),c===c.next&&(c.steiner=!0),s.push(q0(c));for(s.sort(B0),r=0;r<s.length;r++)t=H0(s[r],t);return t}function B0(i,e){return i.x-e.x}function H0(i,e){const t=k0(i,e);if(!t)return e;const n=qc(t,i);return ni(n,n.next),ni(t,t.next)}function k0(i,e){let t=e,n=-1/0,s;const r=i.x,a=i.y;do{if(a<=t.y&&a>=t.next.y&&t.next.y!==t.y){const d=t.x+(a-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(d<=r&&d>n&&(n=d,s=t.x<t.next.x?t:t.next,d===r))return s}t=t.next}while(t!==e);if(!s)return null;const o=s,l=s.x,c=s.y;let u=1/0,h;t=s;do r>=t.x&&t.x>=l&&r!==t.x&&Ri(a<c?r:n,a,l,c,a<c?n:r,a,t.x,t.y)&&(h=Math.abs(a-t.y)/(r-t.x),ms(t,i)&&(h<u||h===u&&(t.x>s.x||t.x===s.x&&z0(s,t)))&&(s=t,u=h)),t=t.next;while(t!==o);return s}function z0(i,e){return ft(i.prev,i,e.prev)<0&&ft(e.next,i,i.next)<0}function V0(i,e,t,n){let s=i;do s.z===0&&(s.z=Ra(s.x,s.y,e,t,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,W0(s)}function W0(i){let e,t,n,s,r,a,o,l,c=1;do{for(t=i,i=null,r=null,a=0;t;){for(a++,n=t,o=0,e=0;e<c&&(o++,n=n.nextZ,!!n);e++);for(l=c;o>0||l>0&&n;)o!==0&&(l===0||!n||t.z<=n.z)?(s=t,t=t.nextZ,o--):(s=n,n=n.nextZ,l--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;t=n}r.nextZ=null,c*=2}while(a>1);return i}function Ra(i,e,t,n,s){return i=(i-t)*s|0,e=(e-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,i|e<<1}function q0(i){let e=i,t=i;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==i);return t}function Ri(i,e,t,n,s,r,a,o){return(s-a)*(e-o)>=(i-a)*(r-o)&&(i-a)*(n-o)>=(t-a)*(e-o)&&(t-a)*(r-o)>=(s-a)*(n-o)}function X0(i,e){return i.next.i!==e.i&&i.prev.i!==e.i&&!K0(i,e)&&(ms(i,e)&&ms(e,i)&&Y0(i,e)&&(ft(i.prev,i,e.prev)||ft(i,e.prev,e))||vr(i,e)&&ft(i.prev,i,i.next)>0&&ft(e.prev,e,e.next)>0)}function ft(i,e,t){return(e.y-i.y)*(t.x-e.x)-(e.x-i.x)*(t.y-e.y)}function vr(i,e){return i.x===e.x&&i.y===e.y}function Wc(i,e,t,n){const s=Zs(ft(i,e,t)),r=Zs(ft(i,e,n)),a=Zs(ft(t,n,i)),o=Zs(ft(t,n,e));return!!(s!==r&&a!==o||s===0&&js(i,t,e)||r===0&&js(i,n,e)||a===0&&js(t,i,n)||o===0&&js(t,e,n))}function js(i,e,t){return e.x<=Math.max(i.x,t.x)&&e.x>=Math.min(i.x,t.x)&&e.y<=Math.max(i.y,t.y)&&e.y>=Math.min(i.y,t.y)}function Zs(i){return i>0?1:i<0?-1:0}function K0(i,e){let t=i;do{if(t.i!==i.i&&t.next.i!==i.i&&t.i!==e.i&&t.next.i!==e.i&&Wc(t,t.next,i,e))return!0;t=t.next}while(t!==i);return!1}function ms(i,e){return ft(i.prev,i,i.next)<0?ft(i,e,i.next)>=0&&ft(i,i.prev,e)>=0:ft(i,e,i.prev)<0||ft(i,i.next,e)<0}function Y0(i,e){let t=i,n=!1;const s=(i.x+e.x)/2,r=(i.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&s<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==i);return n}function qc(i,e){const t=new La(i.i,i.x,i.y),n=new La(e.i,e.x,e.y),s=i.next,r=e.prev;return i.next=e,e.prev=i,t.next=s,s.prev=t,n.next=t,t.prev=n,r.next=n,n.prev=r,n}function Ul(i,e,t,n){const s=new La(i,e,t);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function gs(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function La(i,e,t){this.i=i,this.x=e,this.y=t,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function $0(i,e,t,n){let s=0;for(let r=e,a=t-n;r<t;r+=n)s+=(i[a]-i[r])*(i[r+1]+i[a+1]),a=r;return s}class hs{static area(e){const t=e.length;let n=0;for(let s=t-1,r=0;r<t;s=r++)n+=e[s].x*e[r].y-e[r].x*e[s].y;return n*.5}static isClockWise(e){return hs.area(e)<0}static triangulateShape(e,t){const n=[],s=[],r=[];Fl(e),Gl(n,e);let a=e.length;t.forEach(Fl);for(let l=0;l<t.length;l++)s.push(a),a+=t[l].length,Gl(n,t[l]);const o=D0.triangulate(n,s);for(let l=0;l<o.length;l+=3)r.push(o.slice(l,l+3));return r}}function Fl(i){const e=i.length;e>2&&i[e-1].equals(i[0])&&i.pop()}function Gl(i,e){for(let t=0;t<e.length;t++)i.push(e[t].x),i.push(e[t].y)}class Za extends lt{constructor(e=new zc([new ae(.5,.5),new ae(-.5,.5),new ae(-.5,-.5),new ae(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];const n=this,s=[],r=[];for(let o=0,l=e.length;o<l;o++){const c=e[o];a(c)}this.setAttribute("position",new Ye(s,3)),this.setAttribute("uv",new Ye(r,2)),this.computeVertexNormals();function a(o){const l=[],c=t.curveSegments!==void 0?t.curveSegments:12,u=t.steps!==void 0?t.steps:1,h=t.depth!==void 0?t.depth:1;let d=t.bevelEnabled!==void 0?t.bevelEnabled:!0,p=t.bevelThickness!==void 0?t.bevelThickness:.2,g=t.bevelSize!==void 0?t.bevelSize:p-.1,_=t.bevelOffset!==void 0?t.bevelOffset:0,m=t.bevelSegments!==void 0?t.bevelSegments:3;const f=t.extrudePath,x=t.UVGenerator!==void 0?t.UVGenerator:j0;let v,S=!1,R,w,A,U;f&&(v=f.getSpacedPoints(u),S=!0,d=!1,R=f.computeFrenetFrames(u,!1),w=new C,A=new C,U=new C),d||(m=0,p=0,g=0,_=0);const b=o.extractPoints(c);let E=b.shape;const F=b.holes;if(!hs.isClockWise(E)){E=E.reverse();for(let L=0,le=F.length;L<le;L++){const $=F[L];hs.isClockWise($)&&(F[L]=$.reverse())}}const te=hs.triangulateShape(E,F),I=E;for(let L=0,le=F.length;L<le;L++){const $=F[L];E=E.concat($)}function B(L,le,$){return le||console.error("THREE.ExtrudeGeometry: vec does not exist"),L.clone().addScaledVector(le,$)}const H=E.length,Z=te.length;function j(L,le,$){let Q,W,xe;const ce=L.x-le.x,M=L.y-le.y,y=$.x-L.x,N=$.y-L.y,ne=ce*ce+M*M,ie=ce*N-M*y;if(Math.abs(ie)>Number.EPSILON){const se=Math.sqrt(ne),be=Math.sqrt(y*y+N*N),me=le.x-M/se,ye=le.y+ce/se,Ce=$.x-N/be,Oe=$.y+y/be,re=((Ce-me)*N-(Oe-ye)*y)/(ce*N-M*y);Q=me+ce*re-L.x,W=ye+M*re-L.y;const Ke=Q*Q+W*W;if(Ke<=2)return new ae(Q,W);xe=Math.sqrt(Ke/2)}else{let se=!1;ce>Number.EPSILON?y>Number.EPSILON&&(se=!0):ce<-Number.EPSILON?y<-Number.EPSILON&&(se=!0):Math.sign(M)===Math.sign(N)&&(se=!0),se?(Q=-M,W=ce,xe=Math.sqrt(ne)):(Q=ce,W=M,xe=Math.sqrt(ne/2))}return new ae(Q/xe,W/xe)}const J=[];for(let L=0,le=I.length,$=le-1,Q=L+1;L<le;L++,$++,Q++)$===le&&($=0),Q===le&&(Q=0),J[L]=j(I[L],I[$],I[Q]);const X=[];let K,P=J.concat();for(let L=0,le=F.length;L<le;L++){const $=F[L];K=[];for(let Q=0,W=$.length,xe=W-1,ce=Q+1;Q<W;Q++,xe++,ce++)xe===W&&(xe=0),ce===W&&(ce=0),K[Q]=j($[Q],$[xe],$[ce]);X.push(K),P=P.concat(K)}for(let L=0;L<m;L++){const le=L/m,$=p*Math.cos(le*Math.PI/2),Q=g*Math.sin(le*Math.PI/2)+_;for(let W=0,xe=I.length;W<xe;W++){const ce=B(I[W],J[W],Q);de(ce.x,ce.y,-$)}for(let W=0,xe=F.length;W<xe;W++){const ce=F[W];K=X[W];for(let M=0,y=ce.length;M<y;M++){const N=B(ce[M],K[M],Q);de(N.x,N.y,-$)}}}const O=g+_;for(let L=0;L<H;L++){const le=d?B(E[L],P[L],O):E[L];S?(A.copy(R.normals[0]).multiplyScalar(le.x),w.copy(R.binormals[0]).multiplyScalar(le.y),U.copy(v[0]).add(A).add(w),de(U.x,U.y,U.z)):de(le.x,le.y,0)}for(let L=1;L<=u;L++)for(let le=0;le<H;le++){const $=d?B(E[le],P[le],O):E[le];S?(A.copy(R.normals[L]).multiplyScalar($.x),w.copy(R.binormals[L]).multiplyScalar($.y),U.copy(v[L]).add(A).add(w),de(U.x,U.y,U.z)):de($.x,$.y,h/u*L)}for(let L=m-1;L>=0;L--){const le=L/m,$=p*Math.cos(le*Math.PI/2),Q=g*Math.sin(le*Math.PI/2)+_;for(let W=0,xe=I.length;W<xe;W++){const ce=B(I[W],J[W],Q);de(ce.x,ce.y,h+$)}for(let W=0,xe=F.length;W<xe;W++){const ce=F[W];K=X[W];for(let M=0,y=ce.length;M<y;M++){const N=B(ce[M],K[M],Q);S?de(N.x,N.y+v[u-1].y,v[u-1].x+$):de(N.x,N.y,h+$)}}}Y(),oe();function Y(){const L=s.length/3;if(d){let le=0,$=H*le;for(let Q=0;Q<Z;Q++){const W=te[Q];Ee(W[2]+$,W[1]+$,W[0]+$)}le=u+m*2,$=H*le;for(let Q=0;Q<Z;Q++){const W=te[Q];Ee(W[0]+$,W[1]+$,W[2]+$)}}else{for(let le=0;le<Z;le++){const $=te[le];Ee($[2],$[1],$[0])}for(let le=0;le<Z;le++){const $=te[le];Ee($[0]+H*u,$[1]+H*u,$[2]+H*u)}}n.addGroup(L,s.length/3-L,0)}function oe(){const L=s.length/3;let le=0;he(I,le),le+=I.length;for(let $=0,Q=F.length;$<Q;$++){const W=F[$];he(W,le),le+=W.length}n.addGroup(L,s.length/3-L,1)}function he(L,le){let $=L.length;for(;--$>=0;){const Q=$;let W=$-1;W<0&&(W=L.length-1);for(let xe=0,ce=u+m*2;xe<ce;xe++){const M=H*xe,y=H*(xe+1),N=le+Q+M,ne=le+W+M,ie=le+W+y,se=le+Q+y;Te(N,ne,ie,se)}}}function de(L,le,$){l.push(L),l.push(le),l.push($)}function Ee(L,le,$){ve(L),ve(le),ve($);const Q=s.length/3,W=x.generateTopUV(n,s,Q-3,Q-2,Q-1);Pe(W[0]),Pe(W[1]),Pe(W[2])}function Te(L,le,$,Q){ve(L),ve(le),ve(Q),ve(le),ve($),ve(Q);const W=s.length/3,xe=x.generateSideWallUV(n,s,W-6,W-3,W-2,W-1);Pe(xe[0]),Pe(xe[1]),Pe(xe[3]),Pe(xe[1]),Pe(xe[2]),Pe(xe[3])}function ve(L){s.push(l[L*3+0]),s.push(l[L*3+1]),s.push(l[L*3+2])}function Pe(L){r.push(L.x),r.push(L.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),t=this.parameters.shapes,n=this.parameters.options;return Z0(t,n,e)}static fromJSON(e,t){const n=[];for(let r=0,a=e.shapes.length;r<a;r++){const o=t[e.shapes[r]];n.push(o)}const s=e.options.extrudePath;return s!==void 0&&(e.options.extrudePath=new Aa[s.type]().fromJSON(s)),new Za(n,e.options)}}const j0={generateTopUV:function(i,e,t,n,s){const r=e[t*3],a=e[t*3+1],o=e[n*3],l=e[n*3+1],c=e[s*3],u=e[s*3+1];return[new ae(r,a),new ae(o,l),new ae(c,u)]},generateSideWallUV:function(i,e,t,n,s,r){const a=e[t*3],o=e[t*3+1],l=e[t*3+2],c=e[n*3],u=e[n*3+1],h=e[n*3+2],d=e[s*3],p=e[s*3+1],g=e[s*3+2],_=e[r*3],m=e[r*3+1],f=e[r*3+2];return Math.abs(o-u)<Math.abs(a-c)?[new ae(a,1-l),new ae(c,1-h),new ae(d,1-g),new ae(_,1-f)]:[new ae(o,1-l),new ae(u,1-h),new ae(p,1-g),new ae(m,1-f)]}};function Z0(i,e,t){if(t.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){const r=i[n];t.shapes.push(r.uuid)}else t.shapes.push(i.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}class xr extends ja{constructor(e=1,t=0){const n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new xr(e.radius,e.detail)}}class on extends lt{constructor(e=.5,t=1,n=32,s=1,r=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:s,thetaStart:r,thetaLength:a},n=Math.max(3,n),s=Math.max(1,s);const o=[],l=[],c=[],u=[];let h=e;const d=(t-e)/s,p=new C,g=new ae;for(let _=0;_<=s;_++){for(let m=0;m<=n;m++){const f=r+m/n*a;p.x=h*Math.cos(f),p.y=h*Math.sin(f),l.push(p.x,p.y,p.z),c.push(0,0,1),g.x=(p.x/t+1)/2,g.y=(p.y/t+1)/2,u.push(g.x,g.y)}h+=d}for(let _=0;_<s;_++){const m=_*(n+1);for(let f=0;f<n;f++){const x=f+m,v=x,S=x+n+1,R=x+n+2,w=x+1;o.push(v,S,w),o.push(S,R,w)}}this.setIndex(o),this.setAttribute("position",new Ye(l,3)),this.setAttribute("normal",new Ye(c,3)),this.setAttribute("uv",new Ye(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new on(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}class et extends lt{constructor(e=1,t=32,n=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const l=Math.min(a+o,Math.PI);let c=0;const u=[],h=new C,d=new C,p=[],g=[],_=[],m=[];for(let f=0;f<=n;f++){const x=[],v=f/n;let S=0;f===0&&a===0?S=.5/t:f===n&&l===Math.PI&&(S=-.5/t);for(let R=0;R<=t;R++){const w=R/t;h.x=-e*Math.cos(s+w*r)*Math.sin(a+v*o),h.y=e*Math.cos(a+v*o),h.z=e*Math.sin(s+w*r)*Math.sin(a+v*o),g.push(h.x,h.y,h.z),d.copy(h).normalize(),_.push(d.x,d.y,d.z),m.push(w+S,1-v),x.push(c++)}u.push(x)}for(let f=0;f<n;f++)for(let x=0;x<t;x++){const v=u[f][x+1],S=u[f][x],R=u[f+1][x],w=u[f+1][x+1];(f!==0||a>0)&&p.push(v,S,w),(f!==n-1||l<Math.PI)&&p.push(S,R,w)}this.setIndex(p),this.setAttribute("position",new Ye(g,3)),this.setAttribute("normal",new Ye(_,3)),this.setAttribute("uv",new Ye(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new et(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class ii extends lt{constructor(e=1,t=.4,n=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:s,arc:r},n=Math.floor(n),s=Math.floor(s);const a=[],o=[],l=[],c=[],u=new C,h=new C,d=new C;for(let p=0;p<=n;p++)for(let g=0;g<=s;g++){const _=g/s*r,m=p/n*Math.PI*2;h.x=(e+t*Math.cos(m))*Math.cos(_),h.y=(e+t*Math.cos(m))*Math.sin(_),h.z=t*Math.sin(m),o.push(h.x,h.y,h.z),u.x=e*Math.cos(_),u.y=e*Math.sin(_),d.subVectors(h,u).normalize(),l.push(d.x,d.y,d.z),c.push(g/s),c.push(p/n)}for(let p=1;p<=n;p++)for(let g=1;g<=s;g++){const _=(s+1)*p+g-1,m=(s+1)*(p-1)+g-1,f=(s+1)*(p-1)+g,x=(s+1)*p+g;a.push(_,m,x),a.push(m,f,x)}this.setIndex(a),this.setAttribute("position",new Ye(o,3)),this.setAttribute("normal",new Ye(l,3)),this.setAttribute("uv",new Ye(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ii(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}class Ze extends ai{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Re(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Re(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=gc,this.normalScale=new ae(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class J0 extends Ze{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new ae(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Lt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Re(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Re(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Re(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class Ja extends bt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Re(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}}const aa=new at,Bl=new C,Hl=new C;class Xc{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ae(512,512),this.map=null,this.mapPass=null,this.matrix=new at,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new za,this._frameExtents=new ae(1,1),this._viewportCount=1,this._viewports=[new ht(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;Bl.setFromMatrixPosition(e.matrixWorld),t.position.copy(Bl),Hl.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Hl),t.updateMatrixWorld(),aa.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(aa),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(aa)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const kl=new at,es=new C,oa=new C;class Q0 extends Xc{constructor(){super(new Vt(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new ae(4,2),this._viewportCount=6,this._viewports=[new ht(2,1,1,1),new ht(0,1,1,1),new ht(3,1,1,1),new ht(1,1,1,1),new ht(3,0,1,1),new ht(1,0,1,1)],this._cubeDirections=[new C(1,0,0),new C(-1,0,0),new C(0,0,1),new C(0,0,-1),new C(0,1,0),new C(0,-1,0)],this._cubeUps=[new C(0,1,0),new C(0,1,0),new C(0,1,0),new C(0,1,0),new C(0,0,1),new C(0,0,-1)]}updateMatrices(e,t=0){const n=this.camera,s=this.matrix,r=e.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),es.setFromMatrixPosition(e.matrixWorld),n.position.copy(es),oa.copy(n.position),oa.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(oa),n.updateMatrixWorld(),s.makeTranslation(-es.x,-es.y,-es.z),kl.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(kl)}}class Bi extends Ja{constructor(e,t,n=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new Q0}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class eg extends Xc{constructor(){super(new Va(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class tg extends Ja{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(bt.DEFAULT_UP),this.updateMatrix(),this.target=new bt,this.shadow=new eg}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class Kc extends Ja{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class Yc{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=zl(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=zl();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function zl(){return(typeof performance>"u"?Date:performance).now()}class ng{constructor(e,t,n=0,s=1/0){this.ray=new gr(e,t),this.near=n,this.far=s,this.camera=null,this.layers=new ka,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}intersectObject(e,t=!0,n=[]){return Pa(e,this,n,t),n.sort(Vl),n}intersectObjects(e,t=!0,n=[]){for(let s=0,r=e.length;s<r;s++)Pa(e[s],this,n,t);return n.sort(Vl),n}}function Vl(i,e){return i.distance-e.distance}function Pa(i,e,t,n){if(i.layers.test(e.layers)&&i.raycast(e,t),n===!0){const s=i.children;for(let r=0,a=s.length;r<a;r++)Pa(s[r],e,t,!0)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Ga}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Ga);class ig{constructor({canvas:e,onContextLost:t,onContextRestored:n}){if(!e)throw new Error("Engine requires a canvas element");this.canvas=e,this._onContextLost=t??(()=>{}),this._onContextRestored=n??(()=>{}),this._disposed=!1,this._trackedResources=[],this._frameCallbacks=[],this.renderer=this._createRenderer(e),this.scene=new Uc,this.camera=new Vt(60,this._aspect(),.01,5e6),this.camera.position.set(0,1.4,6),this._resizeHandler=()=>this.resize(),window.addEventListener("resize",this._resizeHandler),this._clock=new Yc,this._rafId=null}_createRenderer(e){if(!$c())throw new Error("WebGL is not available in this browser");const t=new Oc({canvas:e,antialias:!0,powerPreference:"high-performance",alpha:!1});return t.setPixelRatio(Math.min(window.devicePixelRatio||1,2)),t.setSize(window.innerWidth,window.innerHeight,!1),t.outputColorSpace=_t,t.toneMapping=ac,t.toneMappingExposure=1.05,e.addEventListener("webglcontextlost",n=>{n.preventDefault(),this.stop(),this._onContextLost("WebGL context was lost.")}),e.addEventListener("webglcontextrestored",()=>{this._onContextRestored()}),t}_aspect(){return Math.max(window.innerWidth,1)/Math.max(window.innerHeight,1)}resize(){if(this._disposed)return;const e=window.innerWidth,t=window.innerHeight;this.camera.aspect=e/Math.max(t,1),this.camera.updateProjectionMatrix(),this.renderer.setSize(e,t,!1);for(const n of this._resizeCallbacks??[])n(e,t)}onResize(e){this._resizeCallbacks=this._resizeCallbacks??[],this._resizeCallbacks.push(e)}onTick(e){return this._frameCallbacks.push(e),()=>{const t=this._frameCallbacks.indexOf(e);t>=0&&this._frameCallbacks.splice(t,1)}}track(e){return this._trackedResources.push(e),e}start(){if(this._rafId!==null)return;const e=()=>{this._rafId=requestAnimationFrame(e);const t=Math.min(this._clock.getDelta(),.1),n=this._clock.getElapsedTime();for(const s of this._frameCallbacks)try{s(t,n)}catch(r){console.error("[Engine] frame callback failed:",r)}this.renderer.render(this.scene,this.camera)};this._rafId=requestAnimationFrame(e)}stop(){this._rafId!==null&&(cancelAnimationFrame(this._rafId),this._rafId=null)}dispose(){if(!this._disposed){this._disposed=!0,this.stop(),window.removeEventListener("resize",this._resizeHandler),this.scene.traverse(e=>{if(e.geometry&&e.geometry.dispose?.(),e.material){const t=Array.isArray(e.material)?e.material:[e.material];for(const n of t)sg(n)}});for(const e of this._trackedResources)e?.dispose?.();this.renderer.dispose()}}}function sg(i){if(i){for(const e of Object.keys(i)){const t=i[e];t&&t.isTexture&&t.dispose()}i.dispose?.()}}function $c(){try{const i=document.createElement("canvas");return!!(window.WebGLRenderingContext&&(i.getContext("webgl2")||i.getContext("webgl")||i.getContext("experimental-webgl")))}catch{return!1}}const jc={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};class ys{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const rg=new Va(-1,1,1,-1,0,1);class ag extends lt{constructor(){super(),this.setAttribute("position",new Ye([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new Ye([0,2,0,0,2,0],2))}}const og=new ag;class Zc{constructor(e){this._mesh=new ee(og,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,rg)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}}class lg extends ys{constructor(e,t){super(),this.textureID=t!==void 0?t:"tDiffuse",e instanceof Pt?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=hr.clone(e.uniforms),this.material=new Pt({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this.fsQuad=new Zc(this.material)}render(e,t,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this.fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}class Wl extends ys{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,n){const s=e.getContext(),r=e.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let a,o;this.inverse?(a=0,o=1):(a=1,o=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(s.REPLACE,s.REPLACE,s.REPLACE),r.buffers.stencil.setFunc(s.ALWAYS,a,4294967295),r.buffers.stencil.setClear(o),r.buffers.stencil.setLocked(!0),e.setRenderTarget(n),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(s.EQUAL,1,4294967295),r.buffers.stencil.setOp(s.KEEP,s.KEEP,s.KEEP),r.buffers.stencil.setLocked(!0)}}class cg extends ys{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}}class ug{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){const n=e.getSize(new ae);this._width=n.width,this._height=n.height,t=new cn(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:En}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new lg(jc),this.copyPass.material.blending=bn,this.clock=new Yc}swapBuffers(){const e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){const t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){e===void 0&&(e=this.clock.getDelta());const t=this.renderer.getRenderTarget();let n=!1;for(let s=0,r=this.passes.length;s<r;s++){const a=this.passes[s];if(a.enabled!==!1){if(a.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(s),a.render(this.renderer,this.writeBuffer,this.readBuffer,e,n),a.needsSwap){if(n){const o=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(o.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),l.setFunc(o.EQUAL,1,4294967295)}this.swapBuffers()}Wl!==void 0&&(a instanceof Wl?n=!0:a instanceof cg&&(n=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){const t=this.renderer.getSize(new ae);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;const n=this._width*this._pixelRatio,s=this._height*this._pixelRatio;this.renderTarget1.setSize(n,s),this.renderTarget2.setSize(n,s);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(n,s)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class hg extends ys{constructor(e,t,n=null,s=null,r=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=n,this.clearColor=s,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new Re}render(e,t,n){const s=e.autoClear;e.autoClear=!1;let r,a;this.overrideMaterial!==null&&(a=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor)),this.clearAlpha!==null&&(r=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=a),e.autoClear=s}}const dg={uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new Re(0)},defaultOpacity:{value:0}},vertexShader:`

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

		}`};class Hi extends ys{constructor(e,t,n,s){super(),this.strength=t!==void 0?t:1,this.radius=n,this.threshold=s,this.resolution=e!==void 0?new ae(e.x,e.y):new ae(256,256),this.clearColor=new Re(0,0,0),this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let r=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);this.renderTargetBright=new cn(r,a,{type:En}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let h=0;h<this.nMips;h++){const d=new cn(r,a,{type:En});d.texture.name="UnrealBloomPass.h"+h,d.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(d);const p=new cn(r,a,{type:En});p.texture.name="UnrealBloomPass.v"+h,p.texture.generateMipmaps=!1,this.renderTargetsVertical.push(p),r=Math.round(r/2),a=Math.round(a/2)}const o=dg;this.highPassUniforms=hr.clone(o.uniforms),this.highPassUniforms.luminosityThreshold.value=s,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new Pt({uniforms:this.highPassUniforms,vertexShader:o.vertexShader,fragmentShader:o.fragmentShader}),this.separableBlurMaterials=[];const l=[3,5,7,9,11];r=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);for(let h=0;h<this.nMips;h++)this.separableBlurMaterials.push(this.getSeperableBlurMaterial(l[h])),this.separableBlurMaterials[h].uniforms.invSize.value=new ae(1/r,1/a),r=Math.round(r/2),a=Math.round(a/2);this.compositeMaterial=this.getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=.1;const c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new C(1,1,1),new C(1,1,1),new C(1,1,1),new C(1,1,1),new C(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors;const u=jc;this.copyUniforms=hr.clone(u.uniforms),this.blendMaterial=new Pt({uniforms:this.copyUniforms,vertexShader:u.vertexShader,fragmentShader:u.fragmentShader,blending:vt,depthTest:!1,depthWrite:!1,transparent:!0}),this.enabled=!0,this.needsSwap=!1,this._oldClearColor=new Re,this.oldClearAlpha=1,this.basic=new $e,this.fsQuad=new Zc(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this.basic.dispose(),this.fsQuad.dispose()}setSize(e,t){let n=Math.round(e/2),s=Math.round(t/2);this.renderTargetBright.setSize(n,s);for(let r=0;r<this.nMips;r++)this.renderTargetsHorizontal[r].setSize(n,s),this.renderTargetsVertical[r].setSize(n,s),this.separableBlurMaterials[r].uniforms.invSize.value=new ae(1/n,1/s),n=Math.round(n/2),s=Math.round(s/2)}render(e,t,n,s,r){e.getClearColor(this._oldClearColor),this.oldClearAlpha=e.getClearAlpha();const a=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),r&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this.fsQuad.material=this.basic,this.basic.map=n.texture,e.setRenderTarget(null),e.clear(),this.fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this.fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this.fsQuad.render(e);let o=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this.fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=o.texture,this.separableBlurMaterials[l].uniforms.direction.value=Hi.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[l]),e.clear(),this.fsQuad.render(e),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=Hi.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[l]),e.clear(),this.fsQuad.render(e),o=this.renderTargetsVertical[l];this.fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this.fsQuad.render(e),this.fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,r&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(n),this.fsQuad.render(e)),e.setClearColor(this._oldClearColor,this.oldClearAlpha),e.autoClear=a}getSeperableBlurMaterial(e){const t=[];for(let n=0;n<e;n++)t.push(.39894*Math.exp(-.5*n*n/(e*e))/e);return new Pt({defines:{KERNEL_RADIUS:e},uniforms:{colorTexture:{value:null},invSize:{value:new ae(.5,.5)},direction:{value:new ae(.5,.5)},gaussianCoefficients:{value:t}},vertexShader:`varying vec2 vUv;
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
				}`})}getCompositeMaterial(e){return new Pt({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
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
				}`})}}Hi.BlurDirectionX=new ae(1,0);Hi.BlurDirectionY=new ae(0,1);function fg(i,e,t){try{const n=new ug(i);n.addPass(new hg(e,t));const s=new Hi(new ae(window.innerWidth,window.innerHeight),.55,.65,.72);return n.addPass(s),{composer:n,render:()=>n.render(),resize:(r,a)=>{n.setSize(r,a),s.setSize(r,a)},dispose:()=>{n.passes.forEach(r=>r.dispose?.())}}}catch(n){return console.warn("[PostProcessing] Falling back to plain rendering:",n),{composer:null,render:()=>i.render(e,t),resize:()=>{},dispose:()=>{}}}}const ue=Object.freeze({SET_SCALE:"SET_SCALE",SELECT_OBJECT:"SELECT_OBJECT",SET_TARGET:"SET_TARGET",CLEAR_TARGET:"CLEAR_TARGET",SET_FLIGHT_STATUS:"SET_FLIGHT_STATUS",SET_FLIGHT_MODE:"SET_FLIGHT_MODE",UPDATE_TELEMETRY:"UPDATE_TELEMETRY",SET_CAMERA_MODE:"SET_CAMERA_MODE",SET_SEARCH_QUERY:"SET_SEARCH_QUERY",TOGGLE_DETAIL_PANEL:"TOGGLE_DETAIL_PANEL",TOGGLE_HABITABILITY:"TOGGLE_HABITABILITY",TOGGLE_SATELLITE_LIST:"TOGGLE_SATELLITE_LIST",TOGGLE_AUDIO_MUTED:"TOGGLE_AUDIO_MUTED",TOGGLE_HUD:"TOGGLE_HUD",TOGGLE_PHOTO_MODE:"TOGGLE_PHOTO_MODE",TOGGLE_LOGBOOK:"TOGGLE_LOGBOOK",TOGGLE_CONSTELLATIONS:"TOGGLE_CONSTELLATIONS",RECORD_DISCOVERY:"RECORD_DISCOVERY",PUSH_HISTORY:"PUSH_HISTORY",REPORT_ERROR:"REPORT_ERROR",CLEAR_ERROR:"CLEAR_ERROR",SET_CABIN_THEME:"SET_CABIN_THEME",SET_CABIN_LIGHT_LEVEL:"SET_CABIN_LIGHT_LEVEL",SET_TIME_WARP:"SET_TIME_WARP",SET_RADIO_STATION:"SET_RADIO_STATION",START_EXPEDITION:"START_EXPEDITION",ADVANCE_EXPEDITION:"ADVANCE_EXPEDITION",CANCEL_EXPEDITION:"CANCEL_EXPEDITION",COMPLETE_EXPEDITION:"COMPLETE_EXPEDITION",VISIT_EXPEDITION_WAYPOINT:"VISIT_EXPEDITION_WAYPOINT",DEPLOY_LANDER:"DEPLOY_LANDER",CLOSE_LANDER:"CLOSE_LANDER",SET_LANDER_SOIL_ANALYSIS:"SET_LANDER_SOIL_ANALYSIS",SET_CASSETTE_TAPE:"SET_CASSETTE_TAPE",SET_CASSETTE_PLAYING:"SET_CASSETTE_PLAYING",ADD_CUSTOM_SATELLITE:"ADD_CUSTOM_SATELLITE",REMOVE_CUSTOM_SATELLITE:"REMOVE_CUSTOM_SATELLITE",SET_HULL_LIVERY:"SET_HULL_LIVERY",TRIGGER_COSMIC_EVENT:"TRIGGER_COSMIC_EVENT",DISMISS_COSMIC_EVENT:"DISMISS_COSMIC_EVENT",TOGGLE_PROBE_BUILDER:"TOGGLE_PROBE_BUILDER"}),fn=Object.freeze({IDLE:"IDLE",SPOOLING:"SPOOLING",WARP:"WARP",MANUAL_CRUISE:"MANUAL_CRUISE",DECELERATING:"DECELERATING",ARRIVED:"ARRIVED"}),ln=Object.freeze({AUTOPILOT:"AUTOPILOT",MANUAL:"MANUAL"}),tt=Object.freeze({COCKPIT:"COCKPIT",THIRD_PERSON:"THIRD_PERSON",CINEMATIC:"CINEMATIC",PHOTO:"PHOTO",SURFACE:"SURFACE"}),Jc=Object.freeze({MAHOGANY:"MAHOGANY",APOLLO:"APOLLO",CYBERPUNK:"CYBERPUNK"}),Qc=Object.freeze({APOLLO_WHITE:"APOLLO_WHITE",SOLAR_GOLD:"SOLAR_GOLD",STEALTH_CARBON:"STEALTH_CARBON",DEEP_BRASS:"DEEP_BRASS"});function la(i,e){if(typeof i!="string"||i.length===0)throw new TypeError(`${e} must be a non-empty string`)}const Le={setScale:i=>({type:ue.SET_SCALE,payload:i}),selectObject:i=>({type:ue.SELECT_OBJECT,payload:i}),setTarget:i=>(la(i,"target id"),{type:ue.SET_TARGET,payload:i}),clearTarget:()=>({type:ue.CLEAR_TARGET}),setFlightStatus:i=>{if(!Object.values(fn).includes(i))throw new RangeError(`Unknown flight status: ${i}`);return{type:ue.SET_FLIGHT_STATUS,payload:i}},setFlightMode:i=>{if(!Object.values(ln).includes(i))throw new RangeError(`Unknown flight mode: ${i}`);return{type:ue.SET_FLIGHT_MODE,payload:i}},updateTelemetry:i=>({type:ue.UPDATE_TELEMETRY,payload:i}),setCameraMode:i=>{if(!Object.values(tt).includes(i))throw new RangeError(`Unknown camera mode: ${i}`);return{type:ue.SET_CAMERA_MODE,payload:i}},setSearchQuery:i=>({type:ue.SET_SEARCH_QUERY,payload:i??""}),toggleDetailPanel:i=>({type:ue.TOGGLE_DETAIL_PANEL,payload:i}),toggleHabitability:i=>({type:ue.TOGGLE_HABITABILITY,payload:i}),toggleSatelliteList:i=>({type:ue.TOGGLE_SATELLITE_LIST,payload:i}),toggleAudioMuted:i=>({type:ue.TOGGLE_AUDIO_MUTED,payload:i}),toggleHud:i=>({type:ue.TOGGLE_HUD,payload:i}),togglePhotoMode:i=>({type:ue.TOGGLE_PHOTO_MODE,payload:i}),toggleLogbook:i=>({type:ue.TOGGLE_LOGBOOK,payload:i}),toggleConstellations:i=>({type:ue.TOGGLE_CONSTELLATIONS,payload:i}),toggleProbeBuilder:i=>({type:ue.TOGGLE_PROBE_BUILDER,payload:i}),recordDiscovery:i=>({type:ue.RECORD_DISCOVERY,payload:i}),pushHistory:i=>({type:ue.PUSH_HISTORY,payload:i}),reportError:i=>({type:ue.REPORT_ERROR,payload:{message:i?.message??String(i),at:Date.now()}}),clearError:()=>({type:ue.CLEAR_ERROR}),setCabinTheme:i=>{if(!Object.values(Jc).includes(i))throw new RangeError(`Unknown cabin theme: ${i}`);return{type:ue.SET_CABIN_THEME,payload:i}},setCabinLightLevel:i=>({type:ue.SET_CABIN_LIGHT_LEVEL,payload:Math.min(Math.max(Number(i)||0,0),1)}),setTimeWarp:i=>({type:ue.SET_TIME_WARP,payload:Math.max(1,Number(i)||1)}),setRadioStation:i=>({type:ue.SET_RADIO_STATION,payload:Number(i)||0}),startExpedition:i=>(la(i,"expedition id"),{type:ue.START_EXPEDITION,payload:i}),advanceExpedition:()=>({type:ue.ADVANCE_EXPEDITION}),cancelExpedition:()=>({type:ue.CANCEL_EXPEDITION}),completeExpedition:(i,e)=>({type:ue.COMPLETE_EXPEDITION,payload:{expeditionId:i,badge:e,completedAt:Date.now()}}),visitExpeditionWaypoint:(i,e)=>({type:ue.VISIT_EXPEDITION_WAYPOINT,payload:{expeditionId:i,targetId:e}}),deployLander:i=>(la(i,"target id"),{type:ue.DEPLOY_LANDER,payload:i}),closeLander:()=>({type:ue.CLOSE_LANDER}),setLanderSoilAnalysis:i=>({type:ue.SET_LANDER_SOIL_ANALYSIS,payload:i}),setCassetteTape:i=>({type:ue.SET_CASSETTE_TAPE,payload:i}),setCassettePlaying:i=>({type:ue.SET_CASSETTE_PLAYING,payload:!!i}),addCustomSatellite:i=>({type:ue.ADD_CUSTOM_SATELLITE,payload:i}),removeCustomSatellite:i=>({type:ue.REMOVE_CUSTOM_SATELLITE,payload:i}),setHullLivery:i=>{if(!Object.values(Qc).includes(i))throw new RangeError(`Unknown hull livery: ${i}`);return{type:ue.SET_HULL_LIVERY,payload:i}},triggerCosmicEvent:i=>({type:ue.TRIGGER_COSMIC_EVENT,payload:{...i,triggeredAt:Date.now()}}),dismissCosmicEvent:()=>({type:ue.DISMISS_COSMIC_EVENT})};function pg(){return{currentScale:0,selectedObject:"earth",targetObject:null,flightStatus:fn.IDLE,flightMode:ln.MANUAL,cameraMode:tt.THIRD_PERSON,cabinTheme:Jc.MAHOGANY,cabinLightLevel:1,hullLivery:Qc.APOLLO_WHITE,timeWarp:1,radioStationIndex:0,activeExpedition:null,completedExpeditions:[],expeditionProgress:{},landerState:{active:!1,targetId:null,soilAnalysis:null},cassetteState:{currentTape:"pale-blue-dot",isPlaying:!1},customSatellites:[],activeCosmicEvent:null,flightTelemetry:{currentSpeedC:0,lorentzFactor:1,distanceRemainingKm:0,totalDistanceKm:0,timeDilationShipSec:0,timeDilationEarthSec:0,etaSeconds:0,headingDeg:0},history:[],discoveries:[{id:"earth",name:"Earth",kind:"planet",discoveredAt:Date.now(),category:"Home Planet"}],ui:{isDetailPanelOpen:!1,isHabitabilityOpen:!1,isSatelliteListOpen:!1,isPhotoModeOpen:!1,isLogbookOpen:!1,isProbeBuilderOpen:!1,constellationsVisible:!1,searchQuery:"",audioMuted:!1,hudVisible:!0},lastError:null}}function ql(i,e){switch(e.type){case ue.SET_SCALE:return{...i,currentScale:e.payload};case ue.SELECT_OBJECT:return{...i,selectedObject:e.payload};case ue.SET_TARGET:return{...i,targetObject:e.payload,flightStatus:fn.SPOOLING};case ue.CLEAR_TARGET:return{...i,targetObject:null,flightStatus:fn.IDLE,flightTelemetry:{...i.flightTelemetry,currentSpeedC:0,etaSeconds:0}};case ue.SET_FLIGHT_STATUS:return{...i,flightStatus:e.payload};case ue.SET_FLIGHT_MODE:return{...i,flightMode:e.payload};case ue.UPDATE_TELEMETRY:return{...i,flightTelemetry:{...i.flightTelemetry,...e.payload}};case ue.SET_CAMERA_MODE:return{...i,cameraMode:e.payload};case ue.SET_SEARCH_QUERY:return{...i,ui:{...i.ui,searchQuery:e.payload}};case ue.TOGGLE_DETAIL_PANEL:return{...i,ui:{...i.ui,isDetailPanelOpen:e.payload??!i.ui.isDetailPanelOpen}};case ue.TOGGLE_HABITABILITY:return{...i,ui:{...i.ui,isHabitabilityOpen:e.payload??!i.ui.isHabitabilityOpen}};case ue.TOGGLE_SATELLITE_LIST:return{...i,ui:{...i.ui,isSatelliteListOpen:e.payload??!i.ui.isSatelliteListOpen}};case ue.TOGGLE_PHOTO_MODE:return{...i,ui:{...i.ui,isPhotoModeOpen:e.payload??!i.ui.isPhotoModeOpen}};case ue.TOGGLE_LOGBOOK:return{...i,ui:{...i.ui,isLogbookOpen:e.payload??!i.ui.isLogbookOpen}};case ue.TOGGLE_CONSTELLATIONS:return{...i,ui:{...i.ui,constellationsVisible:e.payload??!i.ui.constellationsVisible}};case ue.RECORD_DISCOVERY:return i.discoveries.some(n=>n.id===e.payload.id)?i:{...i,discoveries:[...i.discoveries,{...e.payload,discoveredAt:Date.now()}]};case ue.TOGGLE_AUDIO_MUTED:return{...i,ui:{...i.ui,audioMuted:e.payload??!i.ui.audioMuted}};case ue.TOGGLE_HUD:return{...i,ui:{...i.ui,hudVisible:e.payload??!i.ui.hudVisible}};case ue.PUSH_HISTORY:return{...i,history:[...i.history,e.payload].slice(-50)};case ue.REPORT_ERROR:return{...i,lastError:e.payload};case ue.CLEAR_ERROR:return{...i,lastError:null};case ue.SET_CABIN_THEME:return{...i,cabinTheme:e.payload};case ue.SET_CABIN_LIGHT_LEVEL:return{...i,cabinLightLevel:e.payload};case ue.SET_TIME_WARP:return{...i,timeWarp:e.payload};case ue.SET_RADIO_STATION:return{...i,radioStationIndex:e.payload};case ue.START_EXPEDITION:return{...i,activeExpedition:{id:e.payload,currentStepIndex:0,startedAt:Date.now()}};case ue.ADVANCE_EXPEDITION:return i.activeExpedition?{...i,activeExpedition:{...i.activeExpedition,currentStepIndex:i.activeExpedition.currentStepIndex+1}}:i;case ue.CANCEL_EXPEDITION:return{...i,activeExpedition:null};case ue.COMPLETE_EXPEDITION:{const{expeditionId:t,badge:n,completedAt:s}=e.payload,r=i.completedExpeditions.some(a=>a.expeditionId===t);return{...i,activeExpedition:null,completedExpeditions:r?i.completedExpeditions:[...i.completedExpeditions,{expeditionId:t,badge:n,completedAt:s}]}}case ue.VISIT_EXPEDITION_WAYPOINT:{const{expeditionId:t,targetId:n}=e.payload,s=i.expeditionProgress[t]||{visited:[]};if(s.visited.includes(n))return i;const r=[...s.visited,n];return{...i,expeditionProgress:{...i.expeditionProgress,[t]:{visited:r,completed:r.length>=3}}}}case ue.DEPLOY_LANDER:return{...i,cameraMode:tt.SURFACE,landerState:{active:!0,targetId:e.payload,soilAnalysis:null}};case ue.CLOSE_LANDER:return{...i,cameraMode:tt.COCKPIT,landerState:{active:!1,targetId:null,soilAnalysis:null}};case ue.SET_LANDER_SOIL_ANALYSIS:return{...i,landerState:{...i.landerState,soilAnalysis:e.payload}};case ue.SET_CASSETTE_TAPE:return{...i,cassetteState:{...i.cassetteState,currentTape:e.payload}};case ue.SET_CASSETTE_PLAYING:return{...i,cassetteState:{...i.cassetteState,isPlaying:e.payload}};case ue.ADD_CUSTOM_SATELLITE:return{...i,customSatellites:[...i.customSatellites,e.payload]};case ue.REMOVE_CUSTOM_SATELLITE:return{...i,customSatellites:i.customSatellites.filter(t=>t.id!==e.payload)};case ue.SET_HULL_LIVERY:return{...i,hullLivery:e.payload};case ue.TRIGGER_COSMIC_EVENT:return{...i,activeCosmicEvent:e.payload};case ue.DISMISS_COSMIC_EVENT:return{...i,activeCosmicEvent:null};case ue.TOGGLE_PROBE_BUILDER:return{...i,ui:{...i.ui,isProbeBuilderOpen:e.payload??!i.ui.isProbeBuilderOpen}};default:return i}}class mg{constructor(e=pg()){this._state=e,this._subscribers=new Set}getState(){return this._state}dispatch(e){if(!e||typeof e.type!="string")throw new TypeError("dispatch() requires an action object with a string `type`");const t=this._state;let n;try{n=ql(t,e)}catch(s){n=ql(t,{type:ue.REPORT_ERROR,payload:s})}return this._state=n,this._notify(n,t,e),n}subscribe(e,t=n=>n){if(!e||typeof e!="function"&&typeof e!="string")throw new TypeError("subscribe() requires a callback function");let n,s;if(typeof e=="string"){if(typeof t!="function")throw new TypeError("subscribe() requires a callback function");s=o=>o[e],n=t}else n=e,s=typeof t=="function"?t:o=>o;let r;try{r=s(this._state)}catch{r=void 0}const a={selector:s,cb:n,lastValue:r};return this._subscribers.add(a),()=>this._subscribers.delete(a)}_notify(e,t,n){for(const s of this._subscribers){let r;try{r=s.selector(e)}catch{continue}if(!Object.is(r,s.lastValue)){const a=s.lastValue;s.lastValue=r;try{s.cb(r,a,n)}catch(o){console.error("[Store] subscriber callback threw:",o)}}}}}const Qt=[{id:"sun",name:"The Sun",type:"star",scaleTier:1,location:"Center of the Solar System",galaxy:"Milky Way",solarSystem:"Sol",distanceFromEarthKm:149597870,radiusKm:696340,colorHex:16765562,orbit:null,environment:{surfaceTempC:5500,atmosphericPressureAtm:0,surfaceGravityG:27.9,radiationIndex:10,hasLiquidWater:!1,isGasGiant:!1,composition:{Hydrogen:73,Helium:25,Other:2}},description:"A warm, steady G-type yellow dwarf star and the gravitational heart of our home system.",tags:["star","sol","home star","yellow dwarf"]},{id:"mercury",name:"Mercury",type:"planet",scaleTier:0,location:"1st planet from the Sun",galaxy:"Milky Way",solarSystem:"Sol",distanceFromEarthKm:917e5,radiusKm:2439.7,colorHex:10261127,orbit:{parentId:"sun",semiMajorAxisAu:.387,eccentricity:.205,periodDays:88,inclinationDeg:7},environment:{surfaceTempC:167,atmosphericPressureAtm:0,surfaceGravityG:.38,radiationIndex:8,hasLiquidWater:!1,isGasGiant:!1,composition:{Oxygen:42,Sodium:29,Hydrogen:22,Other:7}},description:"The swift, cratered, sun-scorched world closest to our star.",tags:["planet","inner planet","terrestrial"]},{id:"venus",name:"Venus",type:"planet",scaleTier:0,location:"2nd planet from the Sun",galaxy:"Milky Way",solarSystem:"Sol",distanceFromEarthKm:414e5,radiusKm:6051.8,colorHex:15255946,orbit:{parentId:"sun",semiMajorAxisAu:.723,eccentricity:.007,periodDays:225,inclinationDeg:3.4},environment:{surfaceTempC:464,atmosphericPressureAtm:92,surfaceGravityG:.9,radiationIndex:3,hasLiquidWater:!1,isGasGiant:!1,composition:{CO2:96.5,N2:3.5}},description:"Earth's greenhouse-trapped twin world, hidden under crushing sulfuric acid clouds.",tags:["planet","inner planet","greenhouse"]},{id:"earth",name:"Earth",type:"planet",scaleTier:0,location:"3rd planet from the Sun",galaxy:"Milky Way",solarSystem:"Sol",distanceFromEarthKm:0,radiusKm:6371,colorHex:5083390,orbit:{parentId:"sun",semiMajorAxisAu:1,eccentricity:.0167,periodDays:365.25,inclinationDeg:0},environment:{surfaceTempC:15,atmosphericPressureAtm:1,surfaceGravityG:1,radiationIndex:1,hasLiquidWater:!0,isGasGiant:!1,composition:{N2:78,O2:21,Argon:.9,CO2:.04}},description:"Home. A dynamic, blue, living world sheltered by oceans and life.",tags:["planet","home","habitable","terrestrial","ocean world"]},{id:"moon",name:"The Moon",type:"moon",scaleTier:0,location:"Orbiting Earth",galaxy:"Milky Way",solarSystem:"Sol",distanceFromEarthKm:384400,radiusKm:1737.4,colorHex:12303291,orbit:{parentId:"earth",semiMajorAxisAu:.00257,eccentricity:.055,periodDays:27.3,inclinationDeg:5.1},environment:{surfaceTempC:-20,atmosphericPressureAtm:0,surfaceGravityG:.166,radiationIndex:6,hasLiquidWater:!1,isGasGiant:!1,composition:{Trace:100}},description:"Earth's ancient, cratered companion and humanity's first stepping stone into space.",tags:["moon","luna","satellite"]},{id:"mars",name:"Mars",type:"planet",scaleTier:0,location:"4th planet from the Sun",galaxy:"Milky Way",solarSystem:"Sol",distanceFromEarthKm:783e5,radiusKm:3389.5,colorHex:12665870,orbit:{parentId:"sun",semiMajorAxisAu:1.524,eccentricity:.093,periodDays:687,inclinationDeg:1.85},environment:{surfaceTempC:-63,atmosphericPressureAtm:.006,surfaceGravityG:.38,radiationIndex:5,hasLiquidWater:!1,isGasGiant:!1,composition:{CO2:95,N2:2.8,Argon:2}},description:"The rust-red desert planet with ancient dry river valleys, Olympus Mons, and Valles Marineris.",tags:["planet","red planet","desert world"]},{id:"phobos",name:"Phobos",type:"moon",scaleTier:0,location:"Orbiting Mars",galaxy:"Milky Way",solarSystem:"Sol",distanceFromEarthKm:783e5,radiusKm:11.3,colorHex:9075306,orbit:{parentId:"mars",semiMajorAxisAu:626e-7,eccentricity:.015,periodDays:.32,inclinationDeg:1},environment:{surfaceTempC:-40,atmosphericPressureAtm:0,surfaceGravityG:.0057,radiationIndex:6,hasLiquidWater:!1,isGasGiant:!1,composition:{Trace:100}},description:"A heavily grooved, captured asteroid moon spiraling slowly toward Mars.",tags:["moon","mars moon"]},{id:"deimos",name:"Deimos",type:"moon",scaleTier:0,location:"Orbiting Mars",galaxy:"Milky Way",solarSystem:"Sol",distanceFromEarthKm:7832e4,radiusKm:6.2,colorHex:10391938,orbit:{parentId:"mars",semiMajorAxisAu:156e-6,eccentricity:2e-4,periodDays:1.26,inclinationDeg:1.8},environment:{surfaceTempC:-40,atmosphericPressureAtm:0,surfaceGravityG:.003,radiationIndex:6,hasLiquidWater:!1,isGasGiant:!1,composition:{Trace:100}},description:"The smooth, dust-blanketed outer moon of Mars with very low gravity.",tags:["moon","mars moon"]},{id:"ceres",name:"Ceres",type:"dwarfPlanet",scaleTier:1,location:"Asteroid Belt",galaxy:"Milky Way",solarSystem:"Sol",distanceFromEarthKm:263e6,radiusKm:469.7,colorHex:11117207,orbit:{parentId:"sun",semiMajorAxisAu:2.77,eccentricity:.076,periodDays:1682,inclinationDeg:10.6},environment:{surfaceTempC:-105,atmosphericPressureAtm:0,surfaceGravityG:.029,radiationIndex:5,hasLiquidWater:!1,isGasGiant:!1,composition:{Rock:50,WaterIce:50}},description:"The largest object in the asteroid belt, housing bright sodium carbonate salt deposits in Occator Crater.",tags:["dwarf planet","asteroid belt","ice world"]},{id:"vesta",name:"4 Vesta",type:"dwarfPlanet",scaleTier:1,location:"Asteroid Belt",galaxy:"Milky Way",solarSystem:"Sol",distanceFromEarthKm:24e7,radiusKm:262.7,colorHex:9143676,orbit:{parentId:"sun",semiMajorAxisAu:2.36,eccentricity:.089,periodDays:1325,inclinationDeg:7.1},environment:{surfaceTempC:-110,atmosphericPressureAtm:0,surfaceGravityG:.025,radiationIndex:5,hasLiquidWater:!1,isGasGiant:!1,composition:{Basalt:60,Pyroxene:40}},description:"A differentiated rocky protoplanet with a colossal south polar impact mountain.",tags:["dwarf planet","protoplanet","asteroid belt"]},{id:"asteroid-belt",name:"The Asteroid Belt",type:"asteroidBelt",scaleTier:1,location:"Between Mars and Jupiter",galaxy:"Milky Way",solarSystem:"Sol",distanceFromEarthKm:329e6,radiusKm:0,colorHex:9405816,orbit:{parentId:"sun",semiMajorAxisAu:2.7,eccentricity:.08,periodDays:1600,inclinationDeg:6},environment:{surfaceTempC:-100,atmosphericPressureAtm:0,surfaceGravityG:0,radiationIndex:5,hasLiquidWater:!1,isGasGiant:!1,composition:{Silicates:75,Metals:25}},description:"A vast ring of primordial rock and ice remnants drifting between the inner and outer planets.",tags:["asteroids","belt","debris"]},{id:"jupiter",name:"Jupiter",type:"planet",scaleTier:1,location:"5th planet from the Sun",galaxy:"Milky Way",solarSystem:"Sol",distanceFromEarthKm:6287e5,radiusKm:69911,colorHex:14200446,orbit:{parentId:"sun",semiMajorAxisAu:5.2,eccentricity:.049,periodDays:4333,inclinationDeg:1.3},environment:{surfaceTempC:-108,atmosphericPressureAtm:0,surfaceGravityG:2.53,radiationIndex:9,hasLiquidWater:!1,isGasGiant:!0,composition:{H2:90,Helium:10}},description:"The monarch of the Solar System — a colossal gas giant with the centuries-old Great Red Spot storm.",tags:["planet","gas giant","outer planet"]},{id:"io",name:"Io",type:"moon",scaleTier:1,location:"Orbiting Jupiter",galaxy:"Milky Way",solarSystem:"Sol",distanceFromEarthKm:6283e5,radiusKm:1821.6,colorHex:16109619,orbit:{parentId:"jupiter",semiMajorAxisAu:.00282,eccentricity:.0041,periodDays:1.77,inclinationDeg:.05},environment:{surfaceTempC:-143,atmosphericPressureAtm:1e-6,surfaceGravityG:.183,radiationIndex:10,hasLiquidWater:!1,isGasGiant:!1,composition:{Sulfur:70,Silicates:30}},description:"The most volcanically active body in the Solar System, churned by tidal friction from Jupiter.",tags:["moon","volcano","galilean moon"]},{id:"europa",name:"Europa",type:"moon",scaleTier:1,location:"Orbiting Jupiter",galaxy:"Milky Way",solarSystem:"Sol",distanceFromEarthKm:6283e5,radiusKm:1560.8,colorHex:14997700,orbit:{parentId:"jupiter",semiMajorAxisAu:.0045,eccentricity:.009,periodDays:3.55,inclinationDeg:.47},environment:{surfaceTempC:-160,atmosphericPressureAtm:0,surfaceGravityG:.134,radiationIndex:7,hasLiquidWater:!0,isGasGiant:!1,composition:{WaterIce:85,Silicates:15}},description:"An ice-crusted world hiding a warm global saltwater ocean with twice the water of Earth.",tags:["moon","ocean world","galilean moon","habitable candidate"]},{id:"ganymede",name:"Ganymede",type:"moon",scaleTier:1,location:"Orbiting Jupiter",galaxy:"Milky Way",solarSystem:"Sol",distanceFromEarthKm:6285e5,radiusKm:2634.1,colorHex:10195079,orbit:{parentId:"jupiter",semiMajorAxisAu:.00715,eccentricity:.0013,periodDays:7.15,inclinationDeg:.2},environment:{surfaceTempC:-163,atmosphericPressureAtm:0,surfaceGravityG:.146,radiationIndex:6,hasLiquidWater:!0,isGasGiant:!1,composition:{WaterIce:50,SilicateRock:50}},description:"The largest moon in the Solar System — larger than Mercury — with its own generated magnetic field.",tags:["moon","galilean moon","magnetic field"]},{id:"callisto",name:"Callisto",type:"moon",scaleTier:1,location:"Orbiting Jupiter",galaxy:"Milky Way",solarSystem:"Sol",distanceFromEarthKm:6289e5,radiusKm:2410.3,colorHex:7234907,orbit:{parentId:"jupiter",semiMajorAxisAu:.01258,eccentricity:.0074,periodDays:16.69,inclinationDeg:.28},environment:{surfaceTempC:-171,atmosphericPressureAtm:0,surfaceGravityG:.126,radiationIndex:3,hasLiquidWater:!0,isGasGiant:!1,composition:{WaterIce:50,Rock:50}},description:"A dark, heavily cratered ancient ice moon with the gigantic multi-ring Valhalla impact structure.",tags:["moon","galilean moon","ancient"]},{id:"saturn",name:"Saturn",type:"planet",scaleTier:1,location:"6th planet from the Sun",galaxy:"Milky Way",solarSystem:"Sol",distanceFromEarthKm:1275e6,radiusKm:58232,colorHex:15390376,orbit:{parentId:"sun",semiMajorAxisAu:9.58,eccentricity:.057,periodDays:10759,inclinationDeg:2.5},environment:{surfaceTempC:-139,atmosphericPressureAtm:0,surfaceGravityG:1.06,radiationIndex:8,hasLiquidWater:!1,isGasGiant:!0,composition:{H2:96,Helium:3,Other:1}},description:"The ringed jewel of the solar system, crowned with brilliant crystalline ice ringlets.",tags:["planet","rings","gas giant"]},{id:"enceladus",name:"Enceladus",type:"moon",scaleTier:1,location:"Orbiting Saturn",galaxy:"Milky Way",solarSystem:"Sol",distanceFromEarthKm:1275e6,radiusKm:252.1,colorHex:16448255,orbit:{parentId:"saturn",semiMajorAxisAu:.00159,eccentricity:.0047,periodDays:1.37,inclinationDeg:.01},environment:{surfaceTempC:-198,atmosphericPressureAtm:0,surfaceGravityG:.0113,radiationIndex:4,hasLiquidWater:!0,isGasGiant:!1,composition:{WaterIce:95,Organics:5}},description:"A dazzling snow-white moon spraying organic-rich water vapor geysers from southern tiger stripes.",tags:["moon","cryovolcanism","ocean world","geysers"]},{id:"mimas",name:"Mimas",type:"moon",scaleTier:1,location:"Orbiting Saturn",galaxy:"Milky Way",solarSystem:"Sol",distanceFromEarthKm:1275e6,radiusKm:198.2,colorHex:11905437,orbit:{parentId:"saturn",semiMajorAxisAu:.00124,eccentricity:.02,periodDays:.94,inclinationDeg:1.57},environment:{surfaceTempC:-209,atmosphericPressureAtm:0,surfaceGravityG:.0065,radiationIndex:4,hasLiquidWater:!1,isGasGiant:!1,composition:{WaterIce:90,Rock:10}},description:"Saturn's 'Death Star' moon, dominated by the colossal 130-km wide Herschel crater.",tags:["moon","crater"]},{id:"titan",name:"Titan",type:"moon",scaleTier:1,location:"Orbiting Saturn",galaxy:"Milky Way",solarSystem:"Sol",distanceFromEarthKm:1275e6,radiusKm:2574.7,colorHex:14723420,orbit:{parentId:"saturn",semiMajorAxisAu:.00817,eccentricity:.028,periodDays:15.9,inclinationDeg:.35},environment:{surfaceTempC:-179,atmosphericPressureAtm:1.45,surfaceGravityG:.14,radiationIndex:3,hasLiquidWater:!1,isGasGiant:!1,composition:{N2:95,CH4:5}},description:"A golden smog-wrapped moon with methane rain, rivers, and tranquil hydrocarbon seas.",tags:["moon","methane lakes","dense atmosphere"]},{id:"iapetus",name:"Iapetus",type:"moon",scaleTier:1,location:"Orbiting Saturn",galaxy:"Milky Way",solarSystem:"Sol",distanceFromEarthKm:1275e6,radiusKm:734.5,colorHex:7232840,orbit:{parentId:"saturn",semiMajorAxisAu:.0238,eccentricity:.028,periodDays:79.3,inclinationDeg:15.47},environment:{surfaceTempC:-180,atmosphericPressureAtm:0,surfaceGravityG:.0227,radiationIndex:3,hasLiquidWater:!1,isGasGiant:!1,composition:{WaterIce:80,Carbonaceous:20}},description:"The yin-yang moon with one coal-dark hemisphere, one bright icy hemisphere, and a giant equatorial ridge.",tags:["moon","two-tone","equatorial ridge"]},{id:"uranus",name:"Uranus",type:"planet",scaleTier:1,location:"7th planet from the Sun",galaxy:"Milky Way",solarSystem:"Sol",distanceFromEarthKm:272e7,radiusKm:25362,colorHex:11131096,orbit:{parentId:"sun",semiMajorAxisAu:19.2,eccentricity:.047,periodDays:30687,inclinationDeg:.77},environment:{surfaceTempC:-197,atmosphericPressureAtm:0,surfaceGravityG:.89,radiationIndex:7,hasLiquidWater:!1,isGasGiant:!0,composition:{H2:82.5,Helium:15.2,CH4:2.3}},description:"A serene, pale-cyan ice giant rolling around the Sun on its tilted side.",tags:["planet","ice giant"]},{id:"miranda",name:"Miranda",type:"moon",scaleTier:1,location:"Orbiting Uranus",galaxy:"Milky Way",solarSystem:"Sol",distanceFromEarthKm:272e7,radiusKm:235.8,colorHex:10660274,orbit:{parentId:"uranus",semiMajorAxisAu:865e-6,eccentricity:.0013,periodDays:1.41,inclinationDeg:4.34},environment:{surfaceTempC:-213,atmosphericPressureAtm:0,surfaceGravityG:.008,radiationIndex:4,hasLiquidWater:!1,isGasGiant:!1,composition:{WaterIce:60,Silicates:40}},description:"A jumbled Frankenstein moon of mismatched terrain featuring the sheer 20-km high Verona Rupes cliffs.",tags:["moon","cliffs","uranus moon"]},{id:"neptune",name:"Neptune",type:"planet",scaleTier:1,location:"8th planet from the Sun",galaxy:"Milky Way",solarSystem:"Sol",distanceFromEarthKm:435e7,radiusKm:24622,colorHex:5996512,orbit:{parentId:"sun",semiMajorAxisAu:30.05,eccentricity:.009,periodDays:60190,inclinationDeg:1.77},environment:{surfaceTempC:-201,atmosphericPressureAtm:0,surfaceGravityG:1.14,radiationIndex:7,hasLiquidWater:!1,isGasGiant:!0,composition:{H2:80,Helium:19,CH4:1}},description:"A vibrant azure ice giant lashed by supersonic storms and raging jet streams.",tags:["planet","ice giant"]},{id:"triton",name:"Triton",type:"moon",scaleTier:1,location:"Orbiting Neptune",galaxy:"Milky Way",solarSystem:"Sol",distanceFromEarthKm:435e7,radiusKm:1353.4,colorHex:12241356,orbit:{parentId:"neptune",semiMajorAxisAu:.00237,eccentricity:16e-6,periodDays:5.88,inclinationDeg:156.8},environment:{surfaceTempC:-235,atmosphericPressureAtm:14e-6,surfaceGravityG:.079,radiationIndex:4,hasLiquidWater:!1,isGasGiant:!1,composition:{NitrogenIce:55,WaterIce:35,CO2:10}},description:"A captured retrograde Kuiper Belt world erupting active cryo-nitrogen geysers across cantaloupe terrain.",tags:["moon","retrograde","geysers","kuiper belt"]},{id:"pluto",name:"Pluto",type:"dwarfPlanet",scaleTier:1,location:"Kuiper Belt",galaxy:"Milky Way",solarSystem:"Sol",distanceFromEarthKm:59e8,radiusKm:1188.3,colorHex:13349267,orbit:{parentId:"sun",semiMajorAxisAu:39.5,eccentricity:.249,periodDays:90560,inclinationDeg:17.2},environment:{surfaceTempC:-229,atmosphericPressureAtm:1e-5,surfaceGravityG:.063,radiationIndex:5,hasLiquidWater:!1,isGasGiant:!1,composition:{N2:98,CH4:1.5,CO:.5}},description:"A complex icy world at the Kuiper Belt frontier with nitrogen glaciers and the famous Tombaugh Regio heart.",tags:["dwarf planet","kuiper belt","heart"]},{id:"charon",name:"Charon",type:"moon",scaleTier:1,location:"Orbiting Pluto",galaxy:"Milky Way",solarSystem:"Sol",distanceFromEarthKm:59e8,radiusKm:606,colorHex:10391941,orbit:{parentId:"pluto",semiMajorAxisAu:13e-5,eccentricity:2e-4,periodDays:6.38,inclinationDeg:0},environment:{surfaceTempC:-230,atmosphericPressureAtm:0,surfaceGravityG:.029,radiationIndex:4,hasLiquidWater:!1,isGasGiant:!1,composition:{WaterIce:85,Organics:15}},description:"Pluto's mutually tidally locked binary partner, marked by the reddish Mordor Macula north polar region.",tags:["moon","binary planet","kuiper belt"]},{id:"eris",name:"Eris",type:"dwarfPlanet",scaleTier:1,location:"Scattered Disc",galaxy:"Milky Way",solarSystem:"Sol",distanceFromEarthKm:144e8,radiusKm:1163,colorHex:15394527,orbit:{parentId:"sun",semiMajorAxisAu:67.8,eccentricity:.44,periodDays:203830,inclinationDeg:44},environment:{surfaceTempC:-243,atmosphericPressureAtm:0,surfaceGravityG:.084,radiationIndex:4,hasLiquidWater:!1,isGasGiant:!1,composition:{MethaneIce:70,NitrogenIce:30}},description:"A massive, ultra-reflective scattered disc dwarf planet whose 2005 discovery led to the modern definition of a planet.",tags:["dwarf planet","scattered disc","trans-neptunian"]},{id:"haumea",name:"Haumea",type:"dwarfPlanet",scaleTier:1,location:"Kuiper Belt",galaxy:"Milky Way",solarSystem:"Sol",distanceFromEarthKm:75e8,radiusKm:816,colorHex:14279659,orbit:{parentId:"sun",semiMajorAxisAu:43.1,eccentricity:.19,periodDays:103770,inclinationDeg:28.2},environment:{surfaceTempC:-240,atmosphericPressureAtm:0,surfaceGravityG:.045,radiationIndex:4,hasLiquidWater:!1,isGasGiant:!1,composition:{WaterIce:90,Rock:10}},description:"A bizarre, rapid-spinning football-shaped dwarf planet with crystalline ice rings and a 3.9-hour day.",tags:["dwarf planet","rings","fast rotator","kuiper belt"]},{id:"makemake",name:"Makemake",type:"dwarfPlanet",scaleTier:1,location:"Kuiper Belt",galaxy:"Milky Way",solarSystem:"Sol",distanceFromEarthKm:78e8,radiusKm:715,colorHex:13794643,orbit:{parentId:"sun",semiMajorAxisAu:45.4,eccentricity:.16,periodDays:112897,inclinationDeg:29},environment:{surfaceTempC:-239,atmosphericPressureAtm:0,surfaceGravityG:.051,radiationIndex:4,hasLiquidWater:!1,isGasGiant:!1,composition:{MethaneIce:80,EthaneIce:20}},description:"A brilliant reddish methane-snow world in the Kuiper Belt named after the Rapa Nui creator god.",tags:["dwarf planet","kuiper belt","methane ice"]},{id:"sedna",name:"90377 Sedna",type:"dwarfPlanet",scaleTier:1,location:"Inner Oort Cloud",galaxy:"Milky Way",solarSystem:"Sol",distanceFromEarthKm:13e9,radiusKm:498,colorHex:11881787,orbit:{parentId:"sun",semiMajorAxisAu:506,eccentricity:.85,periodDays:416e4,inclinationDeg:11.9},environment:{surfaceTempC:-240,atmosphericPressureAtm:0,surfaceGravityG:.034,radiationIndex:3,hasLiquidWater:!1,isGasGiant:!1,composition:{Tholins:60,WaterIce:40}},description:"One of the most distant known objects in the Solar System on an extreme 11,400-year inner Oort cloud orbit.",tags:["dwarf planet","oort cloud","extreme orbit"]},{id:"halley-comet",name:"Halley's Comet (1P/Halley)",type:"dwarfPlanet",scaleTier:1,location:"Solar System (Periodic)",galaxy:"Milky Way",solarSystem:"Sol",distanceFromEarthKm:52e8,radiusKm:5.5,colorHex:9479342,orbit:{parentId:"sun",semiMajorAxisAu:17.8,eccentricity:.967,periodDays:27500,inclinationDeg:162.3},environment:{surfaceTempC:-150,atmosphericPressureAtm:0,surfaceGravityG:3e-4,radiationIndex:5,hasLiquidWater:!1,isGasGiant:!1,composition:{WaterIce:80,CO:10,Carbon:10}},description:"Humanity's most famous periodic comet, lighting up Earth's skies every 75-76 years.",tags:["comet","periodic","dirty snowball"]},{id:"oumuamua",name:"'Oumuamua (1I/2017 U1)",type:"dwarfPlanet",scaleTier:1,location:"Exiting Solar System",galaxy:"Milky Way",solarSystem:null,distanceFromEarthKm:45e8,radiusKm:.2,colorHex:10048836,orbit:null,environment:{surfaceTempC:-220,atmosphericPressureAtm:0,surfaceGravityG:1e-5,radiationIndex:4,hasLiquidWater:!1,isGasGiant:!1,composition:{CarbonaceousTholins:100}},description:"The first interstellar visitor ever detected passing through our Solar System from deep interstellar space.",tags:["interstellar visitor","asteroid","hyperbolic"]},{id:"comet-67p",name:"Comet 67P/Churyumov–Gerasimenko",type:"dwarfPlanet",scaleTier:1,location:"Jupiter-family Comet",galaxy:"Milky Way",solarSystem:"Sol",distanceFromEarthKm:58e7,radiusKm:2.1,colorHex:5920080,orbit:{parentId:"sun",semiMajorAxisAu:3.46,eccentricity:.64,periodDays:2356,inclinationDeg:7.04},environment:{surfaceTempC:-120,atmosphericPressureAtm:0,surfaceGravityG:1e-4,radiationIndex:5,hasLiquidWater:!1,isGasGiant:!1,composition:{Organics:45,Silicates:45,WaterIce:10}},description:"The rubber-duck shaped comet rendezvoused with by ESA's Rosetta spacecraft and lander Philae.",tags:["comet","rosetta","philae"]},{id:"proxima-centauri",name:"Proxima Centauri",type:"star",scaleTier:2,location:"Nearest star to the Sun",galaxy:"Milky Way",solarSystem:"Alpha Centauri",distanceFromEarthKm:3992e10,radiusKm:107e3,colorHex:16739146,orbit:null,environment:{surfaceTempC:2800,atmosphericPressureAtm:0,surfaceGravityG:45,radiationIndex:9,hasLiquidWater:!1,isGasGiant:!1,composition:{Hydrogen:74,Helium:25,Other:1}},description:"A flare-active red dwarf star and humanity's closest stellar neighbor at 4.24 light-years.",tags:["star","red dwarf","closest star"]},{id:"proxima-b",name:"Proxima Centauri b",type:"planet",scaleTier:2,location:"Orbiting Proxima Centauri",galaxy:"Milky Way",solarSystem:"Alpha Centauri",distanceFromEarthKm:3992e10,radiusKm:7e3,colorHex:9413833,orbit:{parentId:"proxima-centauri",semiMajorAxisAu:.0485,eccentricity:.02,periodDays:11.2,inclinationDeg:0},environment:{surfaceTempC:-39,atmosphericPressureAtm:.6,surfaceGravityG:1.1,radiationIndex:7,hasLiquidWater:!0,isGasGiant:!1,composition:{N2:60,CO2:30,Other:10}},description:"A terrestrial exoplanet orbiting in Proxima's habitable zone, receiving frequent stellar flares.",tags:["exoplanet","planet","habitable zone","terrestrial"]},{id:"alpha-centauri-a",name:"Alpha Centauri A (Rigil Kentaurus)",type:"star",scaleTier:2,location:"Alpha Centauri system",galaxy:"Milky Way",solarSystem:"Alpha Centauri",distanceFromEarthKm:411e11,radiusKm:855e3,colorHex:16773840,orbit:null,environment:{surfaceTempC:5800,atmosphericPressureAtm:0,surfaceGravityG:24,radiationIndex:10,hasLiquidWater:!1,isGasGiant:!1,composition:{Hydrogen:71,Helium:27,Other:2}},description:"A bright yellow-orange G-type star slightly larger than our Sun in a close binary dance.",tags:["star","binary star","solar twin"]},{id:"alpha-centauri-b",name:"Alpha Centauri B (Toliman)",type:"star",scaleTier:2,location:"Alpha Centauri system",galaxy:"Milky Way",solarSystem:"Alpha Centauri",distanceFromEarthKm:411e11,radiusKm:6e5,colorHex:16754e3,orbit:null,environment:{surfaceTempC:5260,atmosphericPressureAtm:0,surfaceGravityG:30,radiationIndex:10,hasLiquidWater:!1,isGasGiant:!1,composition:{Hydrogen:72,Helium:26,Other:2}},description:"The orange K-dwarf companion star to Alpha Centauri A.",tags:["star","k dwarf","binary star"]},{id:"barnards-star",name:"Barnard's Star",type:"star",scaleTier:2,location:"Ophiuchus",galaxy:"Milky Way",solarSystem:"Barnard",distanceFromEarthKm:564e11,radiusKm:136e3,colorHex:16733491,orbit:null,environment:{surfaceTempC:3100,atmosphericPressureAtm:0,surfaceGravityG:40,radiationIndex:8,hasLiquidWater:!1,isGasGiant:!1,composition:{Hydrogen:74,Helium:25,Metals:1}},description:"An ancient red dwarf possessing the fastest known proper motion across Earth's night sky.",tags:["star","red dwarf","high proper motion"]},{id:"trappist-1",name:"TRAPPIST-1",type:"star",scaleTier:2,location:"Aquarius",galaxy:"Milky Way",solarSystem:"TRAPPIST-1",distanceFromEarthKm:373e12,radiusKm:84e3,colorHex:16726832,orbit:null,environment:{surfaceTempC:2280,atmosphericPressureAtm:0,surfaceGravityG:60,radiationIndex:8,hasLiquidWater:!1,isGasGiant:!1,composition:{Hydrogen:75,Helium:24,Other:1}},description:"An ultra-cool red dwarf star hosting a famous resonant system of 7 Earth-sized terrestrial planets.",tags:["star","ultra-cool dwarf","trappist"]},{id:"trappist-1e",name:"TRAPPIST-1e",type:"planet",scaleTier:2,location:"Orbiting TRAPPIST-1",galaxy:"Milky Way",solarSystem:"TRAPPIST-1",distanceFromEarthKm:373e12,radiusKm:5850,colorHex:4030156,orbit:{parentId:"trappist-1",semiMajorAxisAu:.029,eccentricity:.005,periodDays:6.1,inclinationDeg:89.8},environment:{surfaceTempC:-22,atmosphericPressureAtm:1.1,surfaceGravityG:.93,radiationIndex:4,hasLiquidWater:!0,isGasGiant:!1,composition:{N2:70,O2:18,CO2:10,WaterVapor:2}},description:"One of the most promising potentially habitable Earth-sized exoplanets known, with liquid water potential.",tags:["exoplanet","habitable zone","earth analog","trappist"]},{id:"trappist-1f",name:"TRAPPIST-1f",type:"planet",scaleTier:2,location:"Orbiting TRAPPIST-1",galaxy:"Milky Way",solarSystem:"TRAPPIST-1",distanceFromEarthKm:373e12,radiusKm:6660,colorHex:7775663,orbit:{parentId:"trappist-1",semiMajorAxisAu:.038,eccentricity:.01,periodDays:9.2,inclinationDeg:89.7},environment:{surfaceTempC:-54,atmosphericPressureAtm:1.5,surfaceGravityG:.88,radiationIndex:3,hasLiquidWater:!0,isGasGiant:!1,composition:{WaterIce:40,Silicates:60}},description:"A temperate water-rich world in the TRAPPIST-1 system, likely wrapped in a global deep ocean or ice shell.",tags:["exoplanet","ocean world","trappist"]},{id:"kepler-452b",name:"Kepler-452b",type:"planet",scaleTier:2,location:"Cygnus",galaxy:"Milky Way",solarSystem:"Kepler-452",distanceFromEarthKm:17e15,radiusKm:10380,colorHex:4889968,orbit:null,environment:{surfaceTempC:-8,atmosphericPressureAtm:2,surfaceGravityG:1.9,radiationIndex:2,hasLiquidWater:!0,isGasGiant:!1,composition:{N2:75,O2:15,CO2:10}},description:"'Earth's Older Cousin' — a super-Earth in the habitable zone of a G2-type sun-like star 1,800 light-years away.",tags:["exoplanet","super-earth","habitable zone","earth cousin"]},{id:"kepler-22b",name:"Kepler-22b",type:"planet",scaleTier:2,location:"Cygnus",galaxy:"Milky Way",solarSystem:"Kepler-22",distanceFromEarthKm:59e14,radiusKm:15290,colorHex:3906744,orbit:null,environment:{surfaceTempC:22,atmosphericPressureAtm:5,surfaceGravityG:1.8,radiationIndex:2,hasLiquidWater:!0,isGasGiant:!1,composition:{Water:60,H2_He:25,Silicates:15}},description:"The first confirmed exoplanet discovered by NASA's Kepler mission in the comfortable habitable zone of a sun-like star.",tags:["exoplanet","ocean world","habitable zone"]},{id:"kepler-186f",name:"Kepler-186f",type:"planet",scaleTier:2,location:"Cygnus",galaxy:"Milky Way",solarSystem:"Kepler-186",distanceFromEarthKm:55e14,radiusKm:7450,colorHex:9349238,orbit:null,environment:{surfaceTempC:-46,atmosphericPressureAtm:1,surfaceGravityG:1.15,radiationIndex:3,hasLiquidWater:!0,isGasGiant:!1,composition:{N2:76,CO2:20,O2:4}},description:"The historic first validated Earth-sized planet found in the habitable zone of an M-dwarf star.",tags:["exoplanet","earth-sized","habitable zone"]},{id:"55-cancri-e",name:"55 Cancri e (Janssen)",type:"planet",scaleTier:2,location:"Cancer",galaxy:"Milky Way",solarSystem:"Copernicus",distanceFromEarthKm:388e12,radiusKm:12e3,colorHex:16729344,orbit:null,environment:{surfaceTempC:2300,atmosphericPressureAtm:100,surfaceGravityG:2.2,radiationIndex:10,hasLiquidWater:!1,isGasGiant:!1,composition:{CarbonLava:50,SilicateLava:30,Iron:20}},description:"A super-hot, carbon-rich lava super-Earth with molten oceans on its dayside and possible diamond interior mantle.",tags:["exoplanet","lava world","diamond planet","super-earth"]},{id:"hd-189733-b",name:"HD 189733 b",type:"planet",scaleTier:2,location:"Vulpecula",galaxy:"Milky Way",solarSystem:"HD 189733",distanceFromEarthKm:61e13,radiusKm:80500,colorHex:1857753,orbit:null,environment:{surfaceTempC:930,atmosphericPressureAtm:0,surfaceGravityG:2.1,radiationIndex:9,hasLiquidWater:!1,isGasGiant:!0,composition:{SilicateClouds:40,H2:50,Methane:10}},description:"A cobalt-blue hot Jupiter where supersonic 8,700 km/h winds blow sideways showers of molten silicate glass.",tags:["exoplanet","hot jupiter","glass rain","cobalt blue"]},{id:"wasp-76b",name:"WASP-76b",type:"planet",scaleTier:2,location:"Pisces",galaxy:"Milky Way",solarSystem:"WASP-76",distanceFromEarthKm:6e15,radiusKm:13e4,colorHex:11680547,orbit:null,environment:{surfaceTempC:2400,atmosphericPressureAtm:0,surfaceGravityG:.6,radiationIndex:10,hasLiquidWater:!1,isGasGiant:!0,composition:{IronVapor:30,H2:60,Helium:10}},description:"An ultra-hot gas giant with dayside temperatures exceeding 2400°C where vaporized iron condenses into nightside iron rain.",tags:["exoplanet","ultra-hot jupiter","iron rain"]},{id:"k2-18b",name:"K2-18b",type:"planet",scaleTier:2,location:"Leo",galaxy:"Milky Way",solarSystem:"K2-18",distanceFromEarthKm:117e13,radiusKm:16600,colorHex:4620980,orbit:null,environment:{surfaceTempC:-7,atmosphericPressureAtm:15,surfaceGravityG:1.3,radiationIndex:4,hasLiquidWater:!0,isGasGiant:!1,composition:{H2_He:50,Methane:25,CO2:20,WaterVapor:5}},description:"A candidate Hycean sub-Neptune exoplanet with detected atmospheric methane and carbon dioxide in its habitable zone.",tags:["exoplanet","hycean","habitable zone","sub-neptune"]},{id:"psr-b1257-12-c",name:"PSR B1257+12 c (Poltergeist)",type:"planet",scaleTier:2,location:"Virgo",galaxy:"Milky Way",solarSystem:"Lich",distanceFromEarthKm:218e14,radiusKm:10200,colorHex:7372944,orbit:null,environment:{surfaceTempC:-120,atmosphericPressureAtm:.1,surfaceGravityG:2.8,radiationIndex:10,hasLiquidWater:!1,isGasGiant:!1,composition:{HeavyMetals:80,Silicates:20}},description:"A zombie super-Earth orbiting a rapidly spinning pulsar, bathed in lethal relativistic magnetic particle beams.",tags:["exoplanet","pulsar planet","extreme","zombie world"]},{id:"sirius-a",name:"Sirius A",type:"star",scaleTier:2,location:"Canis Major",galaxy:"Milky Way",solarSystem:"Sirius",distanceFromEarthKm:815e11,radiusKm:1192e3,colorHex:13625599,orbit:null,environment:{surfaceTempC:9940,atmosphericPressureAtm:0,surfaceGravityG:4.5,radiationIndex:10,hasLiquidWater:!1,isGasGiant:!1,composition:{Hydrogen:70,Helium:28,Other:2}},description:"The brightest star in Earth's night sky, blazing blue-white 8.6 light-years away.",tags:["star","brightest star","a-type star"]},{id:"vega",name:"Vega (Alpha Lyrae)",type:"star",scaleTier:2,location:"Lyra",galaxy:"Milky Way",solarSystem:"Vega",distanceFromEarthKm:237e12,radiusKm:1643e3,colorHex:14084351,orbit:null,environment:{surfaceTempC:9600,atmosphericPressureAtm:0,surfaceGravityG:3.5,radiationIndex:10,hasLiquidWater:!1,isGasGiant:!1,composition:{Hydrogen:72,Helium:26,Metals:2}},description:"A rapid-spinning oblate blue-white star with an extensive circumstellar dust and debris ring.",tags:["star","standard candle","debris ring"]},{id:"rigel",name:"Rigel (Beta Orionis)",type:"star",scaleTier:2,location:"Orion",galaxy:"Milky Way",solarSystem:"Rigel",distanceFromEarthKm:817e13,radiusKm:549e5,colorHex:10207999,orbit:null,environment:{surfaceTempC:12100,atmosphericPressureAtm:0,surfaceGravityG:.1,radiationIndex:10,hasLiquidWater:!1,isGasGiant:!1,composition:{Hydrogen:68,Helium:30,Other:2}},description:"A super-luminous blue supergiant star outshining our Sun by 120,000 times, lighting up the Orion region.",tags:["star","blue supergiant","orion"]},{id:"betelgeuse",name:"Betelgeuse (Alpha Orionis)",type:"star",scaleTier:2,location:"Orion",galaxy:"Milky Way",solarSystem:null,distanceFromEarthKm:3781e12,radiusKm:617e6,colorHex:16738876,orbit:null,environment:{surfaceTempC:3500,atmosphericPressureAtm:0,surfaceGravityG:.02,radiationIndex:9,hasLiquidWater:!1,isGasGiant:!1,composition:{Hydrogen:60,Helium:38,Other:2}},description:"A gigantic, pulsating red supergiant in Orion's shoulder destined to explode as a dramatic supernova.",tags:["star","red supergiant","supernova candidate"]},{id:"antares",name:"Antares (Alpha Scorpii)",type:"star",scaleTier:2,location:"Scorpius",galaxy:"Milky Way",solarSystem:null,distanceFromEarthKm:52e14,radiusKm:473e6,colorHex:16732979,orbit:null,environment:{surfaceTempC:3400,atmosphericPressureAtm:0,surfaceGravityG:.015,radiationIndex:9,hasLiquidWater:!1,isGasGiant:!1,composition:{Hydrogen:62,Helium:36,Other:2}},description:"The fiery red heart of Scorpius — an immense red supergiant star over 600 times the diameter of our Sun.",tags:["star","red supergiant","scorpius"]},{id:"aldebaran",name:"Aldebaran (Alpha Tauri)",type:"star",scaleTier:2,location:"Taurus",galaxy:"Milky Way",solarSystem:"Aldebaran",distanceFromEarthKm:618e12,radiusKm:307e5,colorHex:16747586,orbit:null,environment:{surfaceTempC:3900,atmosphericPressureAtm:0,surfaceGravityG:.2,radiationIndex:9,hasLiquidWater:!1,isGasGiant:!1,composition:{Hydrogen:69,Helium:29,Other:2}},description:"The brilliant orange giant star marking the fiery eye of the Bull in the constellation Taurus.",tags:["star","orange giant","taurus"]},{id:"polaris",name:"Polaris (The North Star)",type:"star",scaleTier:2,location:"Ursa Minor",galaxy:"Milky Way",solarSystem:"Polaris",distanceFromEarthKm:407e13,radiusKm:261e5,colorHex:16774363,orbit:null,environment:{surfaceTempC:6015,atmosphericPressureAtm:0,surfaceGravityG:.5,radiationIndex:9,hasLiquidWater:!1,isGasGiant:!1,composition:{Hydrogen:70,Helium:28,Metals:2}},description:"The iconic northern navigation star — a classic Cepheid variable supergiant leading a triple star system.",tags:["star","north star","cepheid variable","navigation"]},{id:"stephenson-2-18",name:"Stephenson 2-18",type:"star",scaleTier:2,location:"Scutum",galaxy:"Milky Way",solarSystem:null,distanceFromEarthKm:18e16,radiusKm:1496e6,colorHex:16730144,orbit:null,environment:{surfaceTempC:3200,atmosphericPressureAtm:0,surfaceGravityG:.001,radiationIndex:9,hasLiquidWater:!1,isGasGiant:!1,composition:{Hydrogen:55,Helium:43,Other:2}},description:"One of the largest known stars in the universe — a red hypergiant large enough to engulf Saturn's orbit.",tags:["star","hypergiant","largest star"]},{id:"r136a1",name:"R136a1",type:"star",scaleTier:2,location:"Tarantula Nebula (LMC)",galaxy:"Large Magellanic Cloud",solarSystem:null,distanceFromEarthKm:154e16,radiusKm:297e5,colorHex:8961023,orbit:null,environment:{surfaceTempC:46e3,atmosphericPressureAtm:0,surfaceGravityG:3.5,radiationIndex:10,hasLiquidWater:!1,isGasGiant:!1,composition:{Hydrogen:60,Helium:38,Metals:2}},description:"The most massive known star in the universe (~200 solar masses), radiating with blinding Wolf-Rayet winds.",tags:["star","most massive","wolf-rayet"]},{id:"crab-pulsar",name:"Crab Pulsar (PSR B0531+21)",type:"star",scaleTier:2,location:"Crab Nebula (Taurus)",galaxy:"Milky Way",solarSystem:null,distanceFromEarthKm:615e14,radiusKm:10,colorHex:7595775,orbit:null,environment:{surfaceTempC:1e6,atmosphericPressureAtm:0,surfaceGravityG:2e11,radiationIndex:10,hasLiquidWater:!1,isGasGiant:!1,composition:{Neutrons:95,SuperconductingProtons:5}},description:"A super-dense neutron star spinning 30 times per second, emitting flashing lighthouse beams of gamma and X-rays.",tags:["pulsar","neutron star","supernova remnant"]},{id:"sgr-1806-20",name:"SGR 1806-20 (Magnetar)",type:"star",scaleTier:2,location:"Sagittarius",galaxy:"Milky Way",solarSystem:null,distanceFromEarthKm:47e16,radiusKm:12,colorHex:16711935,orbit:null,environment:{surfaceTempC:2e6,atmosphericPressureAtm:0,surfaceGravityG:3e11,radiationIndex:10,hasLiquidWater:!1,isGasGiant:!1,composition:{DegenerateMatter:100}},description:"An ultra-magnetic neutron star with magnetic fields a quadrillion times stronger than Earth, producing colossal starquakes.",tags:["magnetar","neutron star","extreme magnetism"]},{id:"cygnus-x1",name:"Cygnus X-1",type:"blackHole",scaleTier:2,location:"Cygnus",galaxy:"Milky Way",solarSystem:null,distanceFromEarthKm:576e14,radiusKm:44,colorHex:1118488,orbit:null,environment:{surfaceTempC:NaN,atmosphericPressureAtm:0,surfaceGravityG:1/0,radiationIndex:10,hasLiquidWater:!1,isGasGiant:!1,composition:{Singularity:100}},description:"The first widely accepted stellar-mass black hole, violently feeding from its blue supergiant companion star.",tags:["black hole","stellar mass","x-ray binary"]},{id:"sagittarius-a-star",name:"Sagittarius A*",type:"blackHole",scaleTier:2,location:"Galactic Center",galaxy:"Milky Way",solarSystem:null,distanceFromEarthKm:2466e14,radiusKm:12e6,colorHex:1710626,orbit:null,environment:{surfaceTempC:NaN,atmosphericPressureAtm:0,surfaceGravityG:1/0,radiationIndex:10,hasLiquidWater:!1,isGasGiant:!1,composition:{Singularity:100}},description:"The 4-million-solar-mass supermassive black hole anchoring the gravitational core of our Milky Way.",tags:["black hole","galactic center","supermassive black hole"]},{id:"eagle-nebula",name:"Eagle Nebula (Pillars of Creation / M16)",type:"nebula",scaleTier:2,location:"Serpens",galaxy:"Milky Way",solarSystem:null,distanceFromEarthKm:6803e13,radiusKm:45e12,colorHex:14191450,orbit:null,environment:{surfaceTempC:NaN,atmosphericPressureAtm:0,surfaceGravityG:0,radiationIndex:6,hasLiquidWater:!1,isGasGiant:!1,composition:{Hydrogen:90,Dust:10}},description:"Towering gas and cosmic dust pillars where new infant stars are carved out of interstellar clouds.",tags:["nebula","pillars of creation","star nursery"]},{id:"orion-nebula",name:"Orion Nebula (M42)",type:"nebula",scaleTier:2,location:"Orion",galaxy:"Milky Way",solarSystem:null,distanceFromEarthKm:129e14,radiusKm:12e12,colorHex:16751313,orbit:null,environment:{surfaceTempC:NaN,atmosphericPressureAtm:0,surfaceGravityG:0,radiationIndex:6,hasLiquidWater:!1,isGasGiant:!1,composition:{Hydrogen:92,Dust:8}},description:"A brilliant, luminous stellar nursery visible to the naked eye as the middle star in Orion's sword.",tags:["nebula","star nursery","orion"]},{id:"carina-nebula",name:"Carina Nebula (NGC 3372)",type:"nebula",scaleTier:2,location:"Carina",galaxy:"Milky Way",solarSystem:null,distanceFromEarthKm:804e14,radiusKm:28e13,colorHex:16737945,orbit:null,environment:{surfaceTempC:NaN,atmosphericPressureAtm:0,surfaceGravityG:0,radiationIndex:7,hasLiquidWater:!1,isGasGiant:!1,composition:{Hydrogen:88,Dust:12}},description:"A colossal, bright diffuse nebula housing the unstable hypergiant star system Eta Carinae and the Mystic Mountain.",tags:["nebula","starburst","eta carinae"]},{id:"crab-nebula",name:"Crab Nebula (Messier 1)",type:"nebula",scaleTier:2,location:"Taurus",galaxy:"Milky Way",solarSystem:null,distanceFromEarthKm:615e14,radiusKm:52e12,colorHex:5099745,orbit:null,environment:{surfaceTempC:NaN,atmosphericPressureAtm:0,surfaceGravityG:0,radiationIndex:8,hasLiquidWater:!1,isGasGiant:!1,composition:{IonizedGas:90,SynchrotronPlasma:10}},description:"The glowing expanding debris shell of a supernova witnessed by Earth astronomers in the year 1054 CE.",tags:["nebula","supernova remnant","messier 1"]},{id:"horsehead-nebula",name:"Horsehead Nebula (Barnard 33)",type:"nebula",scaleTier:2,location:"Orion",galaxy:"Milky Way",solarSystem:null,distanceFromEarthKm:13e15,radiusKm:16e12,colorHex:9124410,orbit:null,environment:{surfaceTempC:NaN,atmosphericPressureAtm:0,surfaceGravityG:0,radiationIndex:5,hasLiquidWater:!1,isGasGiant:!1,composition:{DarkDust:70,MolecularHydrogen:30}},description:"A famous dark absorption nebula silhouetted majestically against glowing red ionized hydrogen gas.",tags:["nebula","dark nebula","horsehead"]},{id:"ring-nebula",name:"Ring Nebula (Messier 57)",type:"nebula",scaleTier:2,location:"Lyra",galaxy:"Milky Way",solarSystem:null,distanceFromEarthKm:243e14,radiusKm:95e11,colorHex:2541274,orbit:null,environment:{surfaceTempC:NaN,atmosphericPressureAtm:0,surfaceGravityG:0,radiationIndex:6,hasLiquidWater:!1,isGasGiant:!1,composition:{OxygenIII:40,NitrogenII:30,Hydrogen:30}},description:"A glowing planetary nebula smoke-ring shed by a dying central white dwarf star.",tags:["nebula","planetary nebula","white dwarf"]},{id:"helix-nebula",name:"Helix Nebula (The Eye of God / NGC 7293)",type:"nebula",scaleTier:2,location:"Aquarius",galaxy:"Milky Way",solarSystem:null,distanceFromEarthKm:619e13,radiusKm:14e12,colorHex:58879,orbit:null,environment:{surfaceTempC:NaN,atmosphericPressureAtm:0,surfaceGravityG:0,radiationIndex:5,hasLiquidWater:!1,isGasGiant:!1,composition:{Oxygen:45,Hydrogen:45,Nitrogen:10}},description:"One of the closest and most vivid planetary nebulae to Earth, resembling a giant cosmic eye.",tags:["nebula","eye of god","planetary nebula"]},{id:"tarantula-nebula",name:"Tarantula Nebula (30 Doradus)",type:"nebula",scaleTier:2,location:"Large Magellanic Cloud",galaxy:"Large Magellanic Cloud",solarSystem:null,distanceFromEarthKm:154e16,radiusKm:95e13,colorHex:16728193,orbit:null,environment:{surfaceTempC:NaN,atmosphericPressureAtm:0,surfaceGravityG:0,radiationIndex:8,hasLiquidWater:!1,isGasGiant:!1,composition:{Hydrogen:85,Helium:12,HeavyMetals:3}},description:"The most luminous and active starburst nursery region in the entire Local Group of galaxies.",tags:["nebula","starburst","lmc"]},{id:"milky-way",name:"The Milky Way",type:"galaxy",scaleTier:3,location:"Local Group",galaxy:"Milky Way",solarSystem:null,distanceFromEarthKm:0,radiusKm:473e15,colorHex:14273023,orbit:null,environment:{surfaceTempC:NaN,atmosphericPressureAtm:0,surfaceGravityG:0,radiationIndex:0,hasLiquidWater:!1,isGasGiant:!1,composition:{Trace:100}},description:"Our home barred spiral galaxy — 100 to 400 billion stars revolving around Sagittarius A*.",tags:["galaxy","home galaxy","spiral"]},{id:"andromeda",name:"Andromeda Galaxy (M31)",type:"galaxy",scaleTier:3,location:"Local Group",galaxy:"Local Group",solarSystem:null,distanceFromEarthKm:2365e16,radiusKm:11e17,colorHex:12375295,orbit:null,environment:{surfaceTempC:NaN,atmosphericPressureAtm:0,surfaceGravityG:0,radiationIndex:0,hasLiquidWater:!1,isGasGiant:!1,composition:{Trace:100}},description:"Our majestic neighboring spiral galaxy spanning one trillion stars, on collision course with the Milky Way in 4.5B years.",tags:["galaxy","local group","spiral"]},{id:"triangulum",name:"Triangulum Galaxy (M33)",type:"galaxy",scaleTier:3,location:"Local Group",galaxy:"Local Group",solarSystem:null,distanceFromEarthKm:2727e16,radiusKm:3e17,colorHex:13231103,orbit:null,environment:{surfaceTempC:NaN,atmosphericPressureAtm:0,surfaceGravityG:0,radiationIndex:0,hasLiquidWater:!1,isGasGiant:!1,composition:{Trace:100}},description:"The third-largest galaxy in our Local Group — a rich, pinwheel-like starburst spiral.",tags:["galaxy","local group","pinwheel"]},{id:"large-magellanic-cloud",name:"Large Magellanic Cloud (LMC)",type:"galaxy",scaleTier:3,location:"Milky Way Satellite",galaxy:"Local Group",solarSystem:null,distanceFromEarthKm:154e16,radiusKm:14e16,colorHex:16755601,orbit:null,environment:{surfaceTempC:NaN,atmosphericPressureAtm:0,surfaceGravityG:0,radiationIndex:0,hasLiquidWater:!1,isGasGiant:!1,composition:{Trace:100}},description:"A disrupted dwarf satellite galaxy orbiting the Milky Way, ablaze with active starburst regions.",tags:["galaxy","satellite galaxy","dwarf galaxy"]},{id:"small-magellanic-cloud",name:"Small Magellanic Cloud (SMC)",type:"galaxy",scaleTier:3,location:"Milky Way Satellite",galaxy:"Local Group",solarSystem:null,distanceFromEarthKm:193e16,radiusKm:7e16,colorHex:16764032,orbit:null,environment:{surfaceTempC:NaN,atmosphericPressureAtm:0,surfaceGravityG:0,radiationIndex:0,hasLiquidWater:!1,isGasGiant:!1,composition:{Trace:100}},description:"A dwarf galaxy companion to the LMC containing several hundred million stars.",tags:["galaxy","satellite galaxy","dwarf galaxy"]},{id:"sombrero-galaxy",name:"Sombrero Galaxy (Messier 104)",type:"galaxy",scaleTier:3,location:"Virgo / Corvus",galaxy:"Virgo Cluster",solarSystem:null,distanceFromEarthKm:277e18,radiusKm:48e16,colorHex:16769202,orbit:null,environment:{surfaceTempC:NaN,atmosphericPressureAtm:0,surfaceGravityG:0,radiationIndex:0,hasLiquidWater:!1,isGasGiant:!1,composition:{Trace:100}},description:"An unbarred spiral galaxy featuring an exceptionally bright bulbous core and a prominent dark dust absorption rim.",tags:["galaxy","sombrero","messier 104"]},{id:"whirlpool-galaxy",name:"Whirlpool Galaxy (Messier 51a)",type:"galaxy",scaleTier:3,location:"Canes Venatici",galaxy:"M51 Group",solarSystem:null,distanceFromEarthKm:218e18,radiusKm:36e16,colorHex:9489145,orbit:null,environment:{surfaceTempC:NaN,atmosphericPressureAtm:0,surfaceGravityG:0,radiationIndex:0,hasLiquidWater:!1,isGasGiant:!1,composition:{Trace:100}},description:"A classic grand-design spiral galaxy actively interacting and merging with its companion galaxy NGC 5195.",tags:["galaxy","grand design","spiral","messier 51"]},{id:"messier-87",name:"Messier 87 (Virgo A / M87*)",type:"galaxy",scaleTier:3,location:"Virgo Cluster",galaxy:"Virgo Cluster",solarSystem:null,distanceFromEarthKm:506e18,radiusKm:12e17,colorHex:16764032,orbit:null,environment:{surfaceTempC:NaN,atmosphericPressureAtm:0,surfaceGravityG:0,radiationIndex:0,hasLiquidWater:!1,isGasGiant:!1,composition:{Trace:100}},description:"A giant elliptical galaxy hosting the historic Event Horizon Telescope-imaged 6.5-billion-solar-mass black hole and a 5,000-ly relativistic plasma jet.",tags:["galaxy","elliptical","m87","supermassive black hole"]},{id:"centaurus-a",name:"Centaurus A (NGC 5128)",type:"galaxy",scaleTier:3,location:"Centaurus",galaxy:"Centaurus A Group",solarSystem:null,distanceFromEarthKm:123e18,radiusKm:6e17,colorHex:13538264,orbit:null,environment:{surfaceTempC:NaN,atmosphericPressureAtm:0,surfaceGravityG:0,radiationIndex:0,hasLiquidWater:!1,isGasGiant:!1,composition:{Trace:100}},description:"A dramatic active radio galaxy crossed by a dense warped dust lane and shooting massive plasma jets into intergalactic space.",tags:["galaxy","radio galaxy","active galaxy"]},{id:"hoags-object",name:"Hoag's Object",type:"galaxy",scaleTier:3,location:"Serpens Caput",galaxy:"Isolated",solarSystem:null,distanceFromEarthKm:579e19,radiusKm:57e16,colorHex:8445674,orbit:null,environment:{surfaceTempC:NaN,atmosphericPressureAtm:0,surfaceGravityG:0,radiationIndex:0,hasLiquidWater:!1,isGasGiant:!1,composition:{Trace:100}},description:"A rare, perfectly symmetrical ring galaxy with a luminous circle of young blue star clusters surrounding a golden nucleus.",tags:["galaxy","ring galaxy","exotic galaxy"]},{id:"ton-618",name:"TON 618 (Hyperluminous Quasar)",type:"blackHole",scaleTier:4,location:"Canes Venatici",galaxy:"TON 618",solarSystem:null,distanceFromEarthKm:172e21,radiusKm:195e9,colorHex:16711765,orbit:null,environment:{surfaceTempC:NaN,atmosphericPressureAtm:0,surfaceGravityG:1/0,radiationIndex:10,hasLiquidWater:!1,isGasGiant:!1,composition:{Singularity:100}},description:"An ultra-massive black hole of 66 billion solar masses powering a hyperluminous quasar that shines brighter than 140 trillion suns.",tags:["quasar","black hole","ultra-massive","brightest object"]},{id:"quasar-3c273",name:"3C 273",type:"blackHole",scaleTier:4,location:"Virgo",galaxy:"3C 273 Host",solarSystem:null,distanceFromEarthKm:231e20,radiusKm:26e8,colorHex:16766720,orbit:null,environment:{surfaceTempC:NaN,atmosphericPressureAtm:0,surfaceGravityG:1/0,radiationIndex:10,hasLiquidWater:!1,isGasGiant:!1,composition:{Singularity:100}},description:"The first quasar ever identified in 1963, powered by a billion-solar-mass central engine shooting a 200,000-light-year plasma jet.",tags:["quasar","first quasar","active galactic nucleus"]},{id:"virgo-cluster",name:"Virgo Galaxy Cluster",type:"structure",scaleTier:4,location:"Virgo Supercluster Core",galaxy:"Virgo Supercluster",solarSystem:null,distanceFromEarthKm:51e19,radiusKm:71e18,colorHex:16766287,orbit:null,environment:{surfaceTempC:NaN,atmosphericPressureAtm:0,surfaceGravityG:0,radiationIndex:0,hasLiquidWater:!1,isGasGiant:!1,composition:{Galaxies:1300,DarkMatter:80}},description:"The colossal cluster of over 1,300 galaxies forming the heart of the Local Supercluster.",tags:["galaxy cluster","structure","virgo"]},{id:"great-attractor",name:"The Great Attractor",type:"structure",scaleTier:4,location:"Zone of Avoidance (Norma Cluster)",galaxy:"Laniakea",solarSystem:null,distanceFromEarthKm:208e19,radiusKm:3e20,colorHex:16740419,orbit:null,environment:{surfaceTempC:NaN,atmosphericPressureAtm:0,surfaceGravityG:0,radiationIndex:0,hasLiquidWater:!1,isGasGiant:!1,composition:{GravitationalAnomaly:100}},description:"An immense gravitational anomaly pulling millions of galaxies across hundreds of millions of light-years toward its mysterious center.",tags:["great attractor","gravitational anomaly","structure"]},{id:"bootes-void",name:"Boötes Void (The Great Nothing)",type:"structure",scaleTier:4,location:"Boötes",galaxy:"Intergalactic Space",solarSystem:null,distanceFromEarthKm:662e19,radiusKm:156e19,colorHex:3622735,orbit:null,environment:{surfaceTempC:-270.4,atmosphericPressureAtm:0,surfaceGravityG:0,radiationIndex:0,hasLiquidWater:!1,isGasGiant:!1,composition:{NearVacuum:100}},description:"A gigantic sphere of nearly empty space 330 million light-years across containing almost no galaxies.",tags:["void","the great nothing","structure"]},{id:"laniakea",name:"Laniakea Supercluster",type:"structure",scaleTier:4,location:"Local Supercluster",galaxy:"Laniakea",solarSystem:null,distanceFromEarthKm:0,radiusKm:47e20,colorHex:16771522,orbit:null,environment:{surfaceTempC:NaN,atmosphericPressureAtm:0,surfaceGravityG:0,radiationIndex:0,hasLiquidWater:!1,isGasGiant:!1,composition:{Trace:100}},description:'The vast supercluster of 100,000 galaxies that contains the Milky Way — "immense heaven" in Hawaiian.',tags:["supercluster","structure","laniakea"]},{id:"cosmic-web",name:"The Cosmic Web",type:"structure",scaleTier:4,location:"Observable Universe",galaxy:"Observable Universe",solarSystem:null,distanceFromEarthKm:0,radiusKm:44e22,colorHex:10475263,orbit:null,environment:{surfaceTempC:NaN,atmosphericPressureAtm:0,surfaceGravityG:0,radiationIndex:0,hasLiquidWater:!1,isGasGiant:!1,composition:{Trace:100}},description:"The immense filament-and-void scaffolding of dark matter along which every galaxy in existence is strung.",tags:["cosmic web","structure","universe scaffolding"]},{id:"cmb-horizon",name:"Cosmic Microwave Background Horizon",type:"structure",scaleTier:4,location:"Edge of the observable universe",galaxy:"Observable Universe",solarSystem:null,distanceFromEarthKm:44e22,radiusKm:0,colorHex:16766888,orbit:null,environment:{surfaceTempC:-270.4,atmosphericPressureAtm:0,surfaceGravityG:0,radiationIndex:0,hasLiquidWater:!1,isGasGiant:!1,composition:{PrimordialPhotons:100}},description:"The faint thermal afterglow of the Big Bang itself — the oldest and farthest light in the cosmos (13.8 billion years old).",tags:["cmb","big bang","structure","edge of universe"]}],gg=new Map(Qt.map(i=>[i.id,i]));function Li(i){return gg.get(i)??null}function _g(i,e=Qt){const t=String(i??"").trim().toLowerCase();if(!t)return[];const n=[],s=[];for(const r of e)r.name.toLowerCase().includes(t)?n.push(r):(r.tags.some(o=>o.toLowerCase().includes(t))||r.location.toLowerCase().includes(t))&&s.push(r);return n.sort((r,a)=>r.name.length-a.name.length),[...n,...s]}const vg=["id","name","type","scaleTier","location","galaxy","solarSystem","distanceFromEarthKm","radiusKm","colorHex","orbit","environment","description","tags"],xg=["surfaceTempC","atmosphericPressureAtm","surfaceGravityG","radiationIndex","hasLiquidWater","isGasGiant","composition"];function yg(i=Qt){const e=[],t=new Set;if(!Array.isArray(i)||i.length===0)return{valid:!1,errors:["Celestial database is empty"]};for(const n of i){const s=n?.id??"(missing id)";for(const a of vg)a in(n??{})||e.push(`${s}: missing field "${a}"`);n?.id&&(t.has(n.id)&&e.push(`${s}: duplicate id`),t.add(n.id)),(typeof n?.scaleTier!="number"||n.scaleTier<0||n.scaleTier>4)&&e.push(`${s}: scaleTier out of range [0,4]`),(typeof n?.distanceFromEarthKm!="number"||n.distanceFromEarthKm<0)&&e.push(`${s}: distanceFromEarthKm must be >= 0`),(typeof n?.radiusKm!="number"||n.radiusKm<0)&&e.push(`${s}: radiusKm must be >= 0`),n?.orbit&&(typeof n.orbit.semiMajorAxisAu!="number"&&e.push(`${s}: orbit.semiMajorAxisAu must be a number`),(typeof n.orbit.periodDays!="number"||n.orbit.periodDays<=0)&&e.push(`${s}: orbit.periodDays must be > 0`));const r=n?.environment;if(!r)e.push(`${s}: missing environment`);else for(const a of xg)a in r||e.push(`${s}: environment missing "${a}"`);Array.isArray(n?.tags)||e.push(`${s}: tags must be an array`)}return{valid:e.length===0,errors:e}}const wn=[{id:"iss",name:"International Space Station",agency:"NASA / Roscosmos / ESA / JAXA / CSA",launchYear:1998,status:"Active",purpose:"Continuously crewed orbital research laboratory",location:"Low Earth Orbit, ~400 km up",orbitsBodyId:"earth",distanceFromEarthKm:400,colorHex:14342874,description:"Humanity’s home in orbit since 2000 — a shared laboratory circling Earth every 93 minutes."},{id:"hubble",name:"Hubble Space Telescope",agency:"NASA / ESA",launchYear:1990,status:"Active",purpose:"Optical / UV / Near-IR space observatory",location:"Low Earth Orbit, ~540 km up",orbitsBodyId:"earth",distanceFromEarthKm:540,colorHex:15918786,description:"The legendary observatory that transformed our understanding of cosmic age and expansion."},{id:"jwst",name:"James Webb Space Telescope",agency:"NASA / ESA / CSA",launchYear:2021,status:"Active",purpose:"Deep infrared space observatory",location:"Sun-Earth L2 Lagrange point, ~1.5M km from Earth",orbitsBodyId:null,distanceFromEarthKm:15e5,colorHex:16373644,description:"Humanity's golden-mirrored infrared eye peering back to the very first galaxies after the Big Bang."},{id:"parker-solar-probe",name:"Parker Solar Probe",agency:"NASA",launchYear:2018,status:"Active",purpose:"Solar corona in-situ exploration",location:"Inner Solar System / Solar Corona",orbitsBodyId:"sun",distanceFromEarthKm:13e7,colorHex:16755268,description:"The fastest human-made craft ever built (700,000 km/h), repeatedly 'touching' the Sun's blistering corona."},{id:"voyager-1",name:"Voyager 1",agency:"NASA",launchYear:1977,status:"Interstellar",purpose:"Outer planet flybys, now interstellar exploration",location:"Interstellar space, beyond the heliopause",orbitsBodyId:null,distanceFromEarthKm:24e9,colorHex:12109008,description:"Humanity’s farthest-flung emissary, carrying the Golden Record beyond our Sun’s protective bubble."},{id:"voyager-2",name:"Voyager 2",agency:"NASA",launchYear:1977,status:"Interstellar",purpose:"Grand Tour of Jupiter, Saturn, Uranus, and Neptune",location:"Interstellar space, southern celestial hemisphere",orbitsBodyId:null,distanceFromEarthKm:2e10,colorHex:12109008,description:"The only spacecraft to date to have visited all four outer gas and ice giant worlds."},{id:"new-horizons",name:"New Horizons",agency:"NASA",launchYear:2006,status:"Active",purpose:"Pluto system and Kuiper Belt reconnaissance",location:"Kuiper Belt, beyond Pluto and Arrokoth",orbitsBodyId:null,distanceFromEarthKm:88e8,colorHex:14141608,description:"The intrepid probe that unveiled the high-resolution glaciers, mountains, and heart of Pluto in 2015."},{id:"cassini-huygens",name:"Cassini-Huygens",agency:"NASA / ESA / ASI",launchYear:1997,status:"Deorbited",purpose:"Saturn system orbital exploration and Titan landing",location:"Atmosphere of Saturn (Grand Finale dive)",orbitsBodyId:"saturn",distanceFromEarthKm:1275e6,colorHex:13938487,description:"Explored Saturn's rings, dropped the Huygens lander on Titan, and found Enceladus's cryovolcanic geysers."},{id:"juno",name:"Juno",agency:"NASA",launchYear:2011,status:"Active",purpose:"Jupiter polar orbit and interior structure mapping",location:"Polar orbit around Jupiter",orbitsBodyId:"jupiter",distanceFromEarthKm:6287e5,colorHex:14719829,description:"Solar-powered spacecraft peeling back the deep cloud layers, storms, and magnetic dynamos of Jupiter."},{id:"kepler-telescope",name:"Kepler Space Telescope",agency:"NASA",launchYear:2009,status:"Inactive",purpose:"Exoplanet transit discovery mission",location:"Earth-trailing heliocentric orbit",orbitsBodyId:null,distanceFromEarthKm:15e7,colorHex:9489145,description:"The prolific planet-hunter that discovered over 2,600 verified alien worlds across our galaxy."},{id:"chandra",name:"Chandra X-ray Observatory",agency:"NASA",launchYear:1999,status:"Active",purpose:"High-resolution X-ray astronomical imaging",location:"High Earth Orbit",orbitsBodyId:"earth",distanceFromEarthKm:14e4,colorHex:11766015,description:"Capturing high-energy X-rays from exploding stars, accretion disks, and supermassive black holes."},{id:"spitzer",name:"Spitzer Space Telescope",agency:"NASA",launchYear:2003,status:"Inactive",purpose:"Infrared space astronomy",location:"Earth-trailing heliocentric orbit",orbitsBodyId:null,distanceFromEarthKm:26e7,colorHex:16747136,description:"Unveiled the infrared universe, discovering planetary systems and imaging deep star-forming nurseries."},{id:"pioneer-10",name:"Pioneer 10",agency:"NASA",launchYear:1972,status:"Inactive",purpose:"First mission to traverse the asteroid belt and visit Jupiter",location:"Interstellar trajectory toward Aldebaran",orbitsBodyId:null,distanceFromEarthKm:195e8,colorHex:12962537,description:"The trailblazer carrying the iconic Pioneer plaque, bound toward the star Aldebaran over millions of years."},{id:"rosetta",name:"Rosetta & Philae",agency:"ESA",launchYear:2004,status:"Deorbited",purpose:"First comet orbital rendezvous and soft landing",location:"Surface of Comet 67P/Churyumov–Gerasimenko",orbitsBodyId:"comet-67p",distanceFromEarthKm:58e7,colorHex:8440772,description:"Achieved the historic first orbital escort and robotic surface landing on a speeding comet."},{id:"osiris-rex",name:"OSIRIS-REx / OSIRIS-APEX",agency:"NASA",launchYear:2016,status:"Active",purpose:"Asteroid Bennu sample return, en route to Apophis",location:"Interplanetary trajectory toward asteroid Apophis",orbitsBodyId:null,distanceFromEarthKm:32e7,colorHex:16772696,description:"Successfully delivered pristine carbonaceous sample material from asteroid Bennu back to Earth in 2023."},{id:"hayabusa2",name:"Hayabusa2",agency:"JAXA",launchYear:2014,status:"Active",purpose:"Asteroid Ryugu sample return, extended mission",location:"Interplanetary trajectory",orbitsBodyId:null,distanceFromEarthKm:28e7,colorHex:16740419,description:"Fired kinetic impactors and returned pristine organic and water-bearing fragments from asteroid Ryugu."},{id:"chandrayaan-3",name:"Chandrayaan-3 (Vikram & Pragyan)",agency:"ISRO",launchYear:2023,status:"Inactive",purpose:"Lunar south polar soft landing and rover exploration",location:"Lunar South Pole (Shiv Shakti Point)",orbitsBodyId:"moon",distanceFromEarthKm:384400,colorHex:16750899,description:"Humanity's first successful soft landing at the Moon’s southern polar highland region."},{id:"tianwen-1",name:"Tianwen-1 & Zhurong",agency:"CNSA",launchYear:2020,status:"Active",purpose:"Mars orbiter and Utopia Planitia rover",location:"Mars Orbit & Utopia Planitia",orbitsBodyId:"mars",distanceFromEarthKm:783e5,colorHex:15684432,description:"China's comprehensive maiden Mars mission, deploying an orbiter, lander, and subterranean radar rover."},{id:"solar-orbiter",name:"Solar Orbiter",agency:"ESA / NASA",launchYear:2020,status:"Active",purpose:"High-latitude imagery of the Sun's polar regions",location:"Inner heliocentric elliptical orbit",orbitsBodyId:"sun",distanceFromEarthKm:95e6,colorHex:16758605,description:"Capturing the closest-ever photographs of the Sun and unprecedented views of its uncharted north and south poles."},{id:"psyche-probe",name:"Psyche",agency:"NASA",launchYear:2023,status:"Active",purpose:"Exploration of metallic asteroid 16 Psyche",location:"En route to the Main Asteroid Belt (2029 arrival)",orbitsBodyId:null,distanceFromEarthKm:42e7,colorHex:9479342,description:"Equipped with Hall-effect thrusters to explore a unique world made largely of exposed nickel-iron metallic core material."}],Sg=new Map(wn.map(i=>[i.id,i]));function rs(i){return Sg.get(i)??null}function Mg(i,e=wn){const t=String(i??"").trim().toLowerCase();if(!t)return[];const n=[],s=[];for(const r of e)r.name.toLowerCase().includes(t)?n.push(r):(r.agency.toLowerCase().includes(t)||r.location.toLowerCase().includes(t)||r.purpose.toLowerCase().includes(t)||r.status.toLowerCase().includes(t))&&s.push(r);return n.sort((r,a)=>r.name.length-a.name.length),[...n,...s]}const bg=["id","name","agency","launchYear","status","purpose","location","orbitsBodyId","distanceFromEarthKm","colorHex","description"],Eg=new Set(["Active","Inactive","Deorbited","Interstellar"]);function Tg(i=wn){const e=[],t=new Set;if(!Array.isArray(i)||i.length===0)return{valid:!1,errors:["Satellite database is empty"]};const n=new Date().getFullYear();for(const s of i){const r=s?.id??"(missing id)";for(const a of bg)a in(s??{})||e.push(`${r}: missing field "${a}"`);s?.id&&(t.has(s.id)&&e.push(`${r}: duplicate id`),t.add(s.id)),s?.status&&!Eg.has(s.status)&&e.push(`${r}: invalid status "${s.status}"`),(typeof s?.launchYear!="number"||s.launchYear<1957||s.launchYear>n+2)&&e.push(`${r}: launchYear out of range [1957, ${n+2}]`),(typeof s?.distanceFromEarthKm!="number"||s.distanceFromEarthKm<0)&&e.push(`${r}: distanceFromEarthKm must be >= 0`)}return{valid:e.length===0,errors:e}}function wg({color:i=7189503,intensity:e=1}={}){return new Pt({uniforms:{uColor:{value:new Re(i)},uIntensity:{value:e}},vertexShader:`
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
    `,transparent:!0,depthWrite:!1,side:It,blending:vt})}function Ag({color:i=16765562}={}){return new Pt({uniforms:{uColor:{value:new Re(i)},uTime:{value:0}},vertexShader:`
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
    `})}function Cg(){return new Pt({uniforms:{uTime:{value:0}},vertexShader:`
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
    `})}function Rg(){return new Pt({uniforms:{uTime:{value:0}},vertexShader:`
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
    `,transparent:!0,side:Dt,depthWrite:!1,blending:vt})}function Js(i,e){const t=Math.sin(i*127.1+e*311.7)*43758.5453123;return t-Math.floor(t)}function dr(i,e){const t=Math.floor(i),n=Math.floor(e),s=i-t,r=e-n,a=s*s*(3-2*s),o=r*r*(3-2*r),l=Js(t,n),c=Js(t+1,n),u=Js(t,n+1),h=Js(t+1,n+1);return l+(c-l)*a+(u-l)*o+(l-c-u+h)*a*o}function ot(i,e,t=4){let n=0,s=.5,r=1;for(let a=0;a<t;a++)n+=s*dr(i*r,e*r),r*=2,s*=.5;return n}function Lg(i,e=512){const t=document.createElement("canvas");t.width=e,t.height=e;const n=t.getContext("2d");if(!n)return new Bn(t);switch(i){case"earth":Dg(n,e);break;case"jupiter":Ng(n,e);break;case"saturn":Og(n,e);break;case"mars":Ug(n,e);break;case"moon":case"phobos":case"deimos":case"ceres":case"vesta":Fg(n,e);break;case"venus":Gg(n,e);break;case"mercury":Bg(n,e);break;case"europa":Hg(n,e);break;case"titan":kg(n,e);break;case"uranus":zg(n,e);break;case"neptune":Vg(n,e);break;case"io":Xg(n,e);break;case"enceladus":Kg(n,e);break;case"pluto":Yg(n,e);break;case"charon":$g(n,e);break;case"55-cancri-e":jg(n,e);break;case"hd-189733-b":Zg(n,e);break;case"wasp-76b":Jg(n,e);break;case"trappist-1e":case"trappist-1f":case"kepler-452b":case"kepler-22b":case"kepler-186f":case"k2-18b":case"proxima-b":Qg(n,e,i);break;case"sedna":case"makemake":e_(n,e);break;case"haumea":case"eris":t_(n,e);break;case"ganymede":case"callisto":case"iapetus":case"mimas":case"miranda":case"triton":n_(n,e,i);break;default:Wg(n,e);break}const s=new Bn(t);return s.colorSpace=_t,s}function Pg(i=512){const e=document.createElement("canvas");e.width=i,e.height=i;const t=e.getContext("2d");if(!t)return new Bn(e);t.clearRect(0,0,i,i);const n=t.createImageData(i,i),s=n.data;for(let a=0;a<i;a++){const o=(a/i-.5)*Math.PI;for(let l=0;l<i;l++){const c=(a*i+l)*4,u=l/i*8,h=a/i*4,d=Math.sin(o*4)*1.2,p=ot(u+d,h,5),g=Math.max(0,(p-.46)*2.8),_=Math.min(Math.floor(g*220),220);s[c]=255,s[c+1]=255,s[c+2]=255,s[c+3]=_}}t.putImageData(n,0,0);const r=new Bn(e);return r.colorSpace=_t,r}function Ig(i=512){const e=document.createElement("canvas");e.width=i,e.height=16;const t=e.getContext("2d");if(!t)return new Bn(e);const n=t.createLinearGradient(0,0,i,0);n.addColorStop(0,"rgba(140, 120, 95, 0.0)"),n.addColorStop(.08,"rgba(160, 135, 105, 0.35)"),n.addColorStop(.22,"rgba(180, 150, 115, 0.45)"),n.addColorStop(.24,"rgba(230, 205, 160, 0.95)"),n.addColorStop(.38,"rgba(245, 225, 185, 0.98)"),n.addColorStop(.54,"rgba(215, 190, 145, 0.90)"),n.addColorStop(.57,"rgba(30, 25, 20, 0.05)"),n.addColorStop(.63,"rgba(40, 32, 25, 0.08)"),n.addColorStop(.66,"rgba(210, 185, 145, 0.85)"),n.addColorStop(.78,"rgba(225, 200, 160, 0.80)"),n.addColorStop(.88,"rgba(195, 170, 130, 0.70)"),n.addColorStop(.92,"rgba(60, 50, 40, 0.1)"),n.addColorStop(.96,"rgba(170, 145, 115, 0.4)"),n.addColorStop(1,"rgba(120, 100, 80, 0.0)"),t.fillStyle=n,t.fillRect(0,0,i,16);const s=new Bn(e);return s.colorSpace=_t,s}function Dg(i,e){const t=i.createImageData(e,e),n=t.data;for(let s=0;s<e;s++){const r=s/e,a=Math.min(r,1-r);for(let o=0;o<e;o++){const l=(s*e+o)*4,c=o/e*5.5,u=s/e*2.8,h=ot(c,u,6);if(a<.12+h*.06){n[l]=238,n[l+1]=245,n[l+2]=255,n[l+3]=255;continue}if(h>.48){const d=(h-.48)/.52;d<.35?(n[l]=Math.floor(34+d*40),n[l+1]=Math.floor(125+d*30),n[l+2]=Math.floor(45+d*20)):d<.7?(n[l]=Math.floor(168+d*40),n[l+1]=Math.floor(140+d*20),n[l+2]=Math.floor(75+d*15)):(n[l]=Math.floor(175+d*60),n[l+1]=Math.floor(170+d*65),n[l+2]=Math.floor(165+d*70))}else{const d=(.48-h)/.48;n[l]=Math.floor(12+(1-d)*28),n[l+1]=Math.floor(45+(1-d)*65),n[l+2]=Math.floor(125+(1-d)*90)}n[l+3]=255}}i.putImageData(t,0,0)}function Ng(i,e){const t=i.createImageData(e,e),n=t.data,s=.62,r=.65,a=.11,o=.055;for(let l=0;l<e;l++){const c=l/e,u=ot(c*24,.5,3)*.08,h=Math.sin((c+u)*Math.PI*14);for(let d=0;d<e;d++){const p=d/e,g=(l*e+d)*4,_=ot(p*8,c*12,4)*.25;let m,f,x;h+_>.1?(m=Math.floor(228+_*40),f=Math.floor(198+_*30),x=Math.floor(155+_*20)):(m=Math.floor(180-_*50),f=Math.floor(115-_*35),x=Math.floor(70-_*25));const v=(p-s)/a,S=(c-r)/o,R=v*v+S*S;if(R<1){const w=1-Math.sqrt(R),A=Math.sin(Math.atan2(S,v)*3+Math.sqrt(R)*10)*.2;m=Math.floor(m*(1-w)+(215+A*30)*w),f=Math.floor(f*(1-w)+(80+A*20)*w),x=Math.floor(x*(1-w)+(50+A*15)*w)}n[g]=Math.min(255,Math.max(0,m)),n[g+1]=Math.min(255,Math.max(0,f)),n[g+2]=Math.min(255,Math.max(0,x)),n[g+3]=255}}i.putImageData(t,0,0)}function Og(i,e){const t=i.createImageData(e,e),n=t.data;for(let s=0;s<e;s++){const r=s/e,a=Math.sin(r*Math.PI*18)*.15,o=Math.sin(r*Math.PI*45)*.08;for(let l=0;l<e;l++){const c=(s*e+l)*4,u=l/e,h=ot(u*4,r*8,3)*.06,d=a+o+h,p=Math.floor(234+d*30),g=Math.floor(212+d*25),_=Math.floor(168+d*20);n[c]=Math.min(255,Math.max(0,p)),n[c+1]=Math.min(255,Math.max(0,g)),n[c+2]=Math.min(255,Math.max(0,_)),n[c+3]=255}}i.putImageData(t,0,0)}function Ug(i,e){const t=i.createImageData(e,e),n=t.data;for(let s=0;s<e;s++){const r=s/e,a=Math.min(r,1-r);for(let o=0;o<e;o++){const l=(s*e+o)*4,c=o/e*6,u=s/e*3,h=ot(c,u,5);if(a<.09+h*.03){n[l]=245,n[l+1]=245,n[l+2]=250,n[l+3]=255;continue}if(h<.42){const d=(.42-h)/.42;n[l]=Math.floor(115-d*30),n[l+1]=Math.floor(65-d*20),n[l+2]=Math.floor(45-d*15)}else{const d=(h-.42)/.58;n[l]=Math.floor(198+d*35),n[l+1]=Math.floor(95+d*25),n[l+2]=Math.floor(48+d*15)}n[l+3]=255}}i.putImageData(t,0,0)}function Fg(i,e){const t=i.createImageData(e,e),n=t.data;for(let s=0;s<e;s++)for(let r=0;r<e;r++){const a=(s*e+r)*4,o=r/e*8,l=s/e*4,c=ot(o*.5,l*.5,4),u=ot(o*3,l*3,4);let h=150+c*55+u*25;c<.38&&(h*=.65);const d=Math.min(255,Math.max(30,Math.floor(h)));n[a]=d,n[a+1]=Math.floor(d*.96),n[a+2]=Math.floor(d*.92),n[a+3]=255}i.putImageData(t,0,0)}function Gg(i,e){const t=i.createImageData(e,e),n=t.data;for(let s=0;s<e;s++){const r=s/e;for(let a=0;a<e;a++){const o=a/e,l=(s*e+a)*4,c=ot(o*6+Math.sin(r*8)*1.5,r*4,5),u=Math.floor(225+c*28),h=Math.floor(190+c*25),d=Math.floor(125+c*20);n[l]=Math.min(255,u),n[l+1]=Math.min(255,h),n[l+2]=Math.min(255,d),n[l+3]=255}}i.putImageData(t,0,0)}function Bg(i,e){const t=i.createImageData(e,e),n=t.data;for(let s=0;s<e;s++)for(let r=0;r<e;r++){const a=(s*e+r)*4,o=ot(r/e*10,s/e*5,5),l=Math.floor(120+o*70);n[a]=l,n[a+1]=Math.floor(l*.94),n[a+2]=Math.floor(l*.88),n[a+3]=255}i.putImageData(t,0,0)}function Hg(i,e){const t=i.createImageData(e,e),n=t.data;for(let s=0;s<e;s++)for(let r=0;r<e;r++){const a=(s*e+r)*4,o=r/e*8,l=s/e*4,c=ot(o,l,4),u=Math.abs(Math.sin(o*4+l*6+c*3));let h=Math.floor(230+c*25),d=Math.floor(225+c*25),p=Math.floor(215+c*25);if(u<.18){const g=(.18-u)/.18;h=Math.floor(h*(1-g)+165*g),d=Math.floor(d*(1-g)+95*g),p=Math.floor(p*(1-g)+65*g)}n[a]=h,n[a+1]=d,n[a+2]=p,n[a+3]=255}i.putImageData(t,0,0)}function kg(i,e){const t=i.createImageData(e,e),n=t.data;for(let s=0;s<e;s++){const r=s/e;for(let a=0;a<e;a++){const o=(s*e+a)*4,l=ot(a/e*3,r*3,3),c=Math.floor(225+l*25),u=Math.floor(145+l*20),h=Math.floor(65+l*15);n[o]=c,n[o+1]=u,n[o+2]=h,n[o+3]=255}}i.putImageData(t,0,0)}function zg(i,e){const t=i.createImageData(e,e),n=t.data;for(let s=0;s<e;s++){const r=s/e;for(let a=0;a<e;a++){const o=(s*e+a)*4,l=Math.sin(r*Math.PI*8)*.05;n[o]=Math.floor(175+l*30),n[o+1]=Math.floor(225+l*20),n[o+2]=Math.floor(235+l*20),n[o+3]=255}}i.putImageData(t,0,0)}function Vg(i,e){const t=i.createImageData(e,e),n=t.data;for(let s=0;s<e;s++){const r=s/e;for(let a=0;a<e;a++){const o=(s*e+a)*4,l=ot(a/e*6,r*8,4);let c=Math.floor(45+l*25),u=Math.floor(95+l*35),h=Math.floor(215+l*35);if(l>.72){const d=(l-.72)/.28;c=Math.floor(c*(1-d)+240*d),u=Math.floor(u*(1-d)+245*d),h=Math.floor(h*(1-d)+255*d)}n[o]=c,n[o+1]=u,n[o+2]=h,n[o+3]=255}}i.putImageData(t,0,0)}function Wg(i,e){const t=i.createImageData(e,e),n=t.data;for(let s=0;s<e;s++)for(let r=0;r<e;r++){const a=(s*e+r)*4,o=ot(r/e*6,s/e*6,4),l=Math.floor(140+o*60);n[a]=l,n[a+1]=Math.floor(l*.9),n[a+2]=Math.floor(l*.85),n[a+3]=255}i.putImageData(t,0,0)}function qg(i=512){const e=document.createElement("canvas");e.width=i,e.height=i;const t=e.getContext("2d");if(!t)return new Bn(e);const n=t.createImageData(i,i),s=n.data;for(let r=0;r<i;r++){const a=(r/i-.5)*Math.PI;for(let o=0;o<i;o++){const l=(r*i+o)*4,c=o/i*Math.PI*2;if(ot(Math.cos(c)*2.2+5,Math.sin(c)*2.2+Math.sin(a)*2.5,4)>.48&&Math.abs(a)<1.25){const d=dr(o/i*32,r/i*32),p=dr(o/i*64,r/i*64);if(d>.65&&p>.55){const g=Math.floor((d-.65)*650);s[l]=Math.min(g+50,255),s[l+1]=Math.min(g*.8,210),s[l+2]=Math.min(g*.4,120),s[l+3]=255;continue}}s[l]=0,s[l+1]=0,s[l+2]=0,s[l+3]=255}}return t.putImageData(n,0,0),new Bn(e)}function Xg(i,e){const t=i.createImageData(e,e),n=t.data;for(let s=0;s<e;s++)for(let r=0;r<e;r++){const a=(s*e+r)*4,o=ot(r/e*8,s/e*8,4),l=dr(r/e*16,s/e*16);l>.78?(n[a]=40,n[a+1]=20,n[a+2]=10):l>.65?(n[a]=220,n[a+1]=80,n[a+2]=20):(n[a]=Math.floor(210+o*45),n[a+1]=Math.floor(180+o*40),n[a+2]=Math.floor(30+o*30)),n[a+3]=255}i.putImageData(t,0,0)}function Kg(i,e){const t=i.createImageData(e,e),n=t.data;for(let s=0;s<e;s++){const r=s>e*.75;for(let a=0;a<e;a++){const o=(s*e+a)*4,l=ot(a/e*10,s/e*10,4);let c=Math.floor(240+l*15),u=Math.floor(245+l*10),h=255;if(r){const d=Math.sin(a/e*Math.PI*8+l*3);Math.abs(d)<.15&&(c=70,u=160,h=230)}n[o]=c,n[o+1]=u,n[o+2]=h,n[o+3]=255}}i.putImageData(t,0,0)}function Yg(i,e){const t=i.createImageData(e,e),n=t.data;for(let s=0;s<e;s++){const r=s/e*2-1;for(let a=0;a<e;a++){const o=(s*e+a)*4,l=a/e*2-1,c=ot(a/e*6,s/e*6,4),u=l-.1,h=r+.1;Math.hypot(u,h)<.38&&(Math.abs(u)<.35||h<.2)&&c>.35?(n[o]=240,n[o+1]=230,n[o+2]=220):(n[o]=Math.floor(160+c*50),n[o+1]=Math.floor(110+c*40),n[o+2]=Math.floor(80+c*30)),n[o+3]=255}}i.putImageData(t,0,0)}function $g(i,e){const t=i.createImageData(e,e),n=t.data;for(let s=0;s<e;s++){const r=s<e*.28;for(let a=0;a<e;a++){const o=(s*e+a)*4,l=ot(a/e*6,s/e*6,4);if(r)n[o]=160,n[o+1]=80,n[o+2]=60;else{const c=Math.floor(130+l*50);n[o]=c,n[o+1]=Math.floor(c*.95),n[o+2]=Math.floor(c*.92)}n[o+3]=255}}i.putImageData(t,0,0)}function jg(i,e){const t=i.createImageData(e,e),n=t.data;for(let s=0;s<e;s++)for(let r=0;r<e;r++){const a=(s*e+r)*4,o=ot(r/e*12,s/e*12,5);if(o>.58)n[a]=255,n[a+1]=Math.floor(80+(o-.58)*400),n[a+2]=0;else{const l=Math.floor(20+o*30);n[a]=l+15,n[a+1]=l,n[a+2]=l}n[a+3]=255}i.putImageData(t,0,0)}function Zg(i,e){const t=i.createImageData(e,e),n=t.data;for(let s=0;s<e;s++)for(let r=0;r<e;r++){const a=(s*e+r)*4,o=ot(r/e*8+Math.sin(s/e*10),s/e*4,4);n[a]=Math.floor(10+o*30),n[a+1]=Math.floor(60+o*80),n[a+2]=Math.floor(180+o*75),n[a+3]=255}i.putImageData(t,0,0)}function Jg(i,e){const t=i.createImageData(e,e),n=t.data;for(let s=0;s<e;s++)for(let r=0;r<e;r++){const a=(s*e+r)*4,o=ot(r/e*6,s/e*6,4);n[a]=Math.floor(160+o*80),n[a+1]=Math.floor(40+o*40),n[a+2]=Math.floor(20+o*20),n[a+3]=255}i.putImageData(t,0,0)}function Qg(i,e,t){const n=i.createImageData(e,e),s=n.data;for(let r=0;r<e;r++){const a=(r/e-.5)*Math.PI;for(let o=0;o<e;o++){const l=(r*e+o)*4,c=o/e*Math.PI*2,u=ot(Math.cos(c)*2.5+4,Math.sin(c)*2.5+Math.sin(a)*2.5,4);u>.5?(s[l]=t.includes("kepler")?45:60,s[l+1]=140+Math.floor(u*40),s[l+2]=70):(s[l]=15,s[l+1]=70+Math.floor(u*50),s[l+2]=175+Math.floor(u*40)),s[l+3]=255}}i.putImageData(n,0,0)}function e_(i,e){const t=i.createImageData(e,e),n=t.data;for(let s=0;s<e;s++)for(let r=0;r<e;r++){const a=(s*e+r)*4,o=ot(r/e*6,s/e*6,4);n[a]=Math.floor(180+o*50),n[a+1]=Math.floor(65+o*30),n[a+2]=Math.floor(45+o*20),n[a+3]=255}i.putImageData(t,0,0)}function t_(i,e){const t=i.createImageData(e,e),n=t.data;for(let s=0;s<e;s++)for(let r=0;r<e;r++){const a=(s*e+r)*4,o=ot(r/e*8,s/e*8,4),l=Math.floor(215+o*40);n[a]=l,n[a+1]=l,n[a+2]=Math.min(l+10,255),n[a+3]=255}i.putImageData(t,0,0)}function n_(i,e,t){const n=i.createImageData(e,e),s=n.data;for(let r=0;r<e;r++)for(let a=0;a<e;a++){const o=(r*e+a)*4,l=ot(a/e*8,r/e*8,4);if(t==="iapetus"&&a<e*.5)s[o]=35,s[o+1]=30,s[o+2]=25;else{const c=Math.floor(150+l*60);s[o]=c,s[o+1]=Math.floor(c*.96),s[o+2]=Math.floor(c*.94)}s[o+3]=255}i.putImageData(n,0,0)}function i_(i,e){const t=new Qe;t.name=`volumetric-nebula:${i.id}`;const n=new Re(i.colorHex||14315734),s=new Re(16772829),r=new Re(i.colorHex||9662683).offsetHSL(.08,.2,-.15),a=Math.max(e*4.5,4.2),o=1800,l=new Float32Array(o*3),c=new Float32Array(o*3),u=new Float32Array(o);for(let _=0;_<o;_++){const m=Math.random(),f=a*Math.pow(m,.45),x=Math.random()*Math.PI*2,v=(Math.random()-.5)*Math.PI*.85,S=Math.sin(x*3)*.25+Math.cos(v*4)*.15,R=f*(1+S);l[_*3]=R*Math.cos(x)*Math.cos(v),l[_*3+1]=R*Math.sin(v)*.65,l[_*3+2]=R*Math.sin(x)*Math.cos(v);const w=Math.min(f/a,1),A=new Re;w<.25?A.lerpColors(s,n,w*4):A.lerpColors(n,r,(w-.25)/.75),c[_*3]=A.r,c[_*3+1]=A.g,c[_*3+2]=A.b,u[_]=(1-w*.4)*(Math.random()*.4+.8)}const h=new lt;h.setAttribute("position",new yt(l,3)),h.setAttribute("color",new yt(c,3));const d=new Wi({size:.85,vertexColors:!0,transparent:!0,opacity:.52,blending:vt,depthWrite:!1}),p=new qi(h,d);p.name="nebula-particles";const g=new Bi(i.colorHex||14315734,1.8,a*3.5,1.5);return g.position.set(0,0,0),t.add(p,g),t}const dn=48;function s_(i){const e=new Qe;e.name=`celestial:${i.id}`,e.userData.bodyId=i.id,e.userData.kind="celestial";const t=oi(i),s=["star","planet","dwarfPlanet","moon","blackHole"].includes(i.type)?i.type==="star"?Math.max(t*1.4,.7):Math.max(t*1.25,.25):0;switch(e.userData.visualRadius=t,e.userData.safeRadius=s,i.type){case"star":e.add(a_(i));break;case"blackHole":e.add(o_(i));break;case"nebula":e.add(l_(i));break;case"galaxy":e.add(c_(i));break;case"structure":e.add(u_(i));break;case"asteroidBelt":e.add(h_(i));break;default:e.add(r_(i));break}return e}function oi(i){const e=Math.max(i.radiusKm,1);return Math.max(.14,Math.log10(e)*.16)}function r_(i){const e=oi(i),t=new et(e,dn,dn),s={map:Lg(i.id,512),roughness:i.environment.isGasGiant?.85:.7,metalness:i.environment.isGasGiant?0:.08};i.id==="earth"&&(s.emissiveMap=qg(512),s.emissive=new Re(16769194),s.emissiveIntensity=.95);const r=new Ze(s),a=new ee(t,r);a.name=`surface:${i.id}`;const o=new Qe;if(o.add(a),i.id==="earth"){const c=new et(e*1.025,dn,dn),u=new Ze({map:Pg(512),transparent:!0,opacity:.85,depthWrite:!1,roughness:.9}),h=new ee(c,u);h.name=`clouds:${i.id}`,o.add(h)}if(i.id==="saturn"){const c=new on(e*1.35,e*2.5,64);c.rotateX(Math.PI/2);const u=new Ze({map:Ig(512),transparent:!0,side:Dt,roughness:.65,metalness:.1}),h=new ee(c,u);h.name=`rings:${i.id}`,h.rotation.z=.47,h.rotation.x=.12,o.add(h)}if(i.id==="uranus"){const c=new on(e*1.35,e*1.75,48);c.rotateX(Math.PI/2);const u=new Ze({color:11069183,transparent:!0,opacity:.4,side:Dt,roughness:.7}),h=new ee(c,u);h.name=`rings:${i.id}`,h.rotation.x=Math.PI/2.1,o.add(h)}if(i.id==="haumea"){a.scale.set(1.4,.9,.7);const c=new on(e*1.6,e*1.9,48);c.rotateX(Math.PI/2);const u=new Ze({color:14279659,transparent:!0,opacity:.6,side:Dt,roughness:.8}),h=new ee(c,u);h.name=`rings:${i.id}`,o.add(h)}if(i.environment.atmosphericPressureAtm>.01){const c=new et(e*1.14,dn,dn),u=wg({color:i.environment.hasLiquidWater?6138111:i.id==="venus"?16768921:14727567,intensity:i.id==="venus"?1.4:1.1}),h=new ee(c,u);h.name=`atmosphere:${i.id}`,o.add(h)}if(i.id==="earth"||i.id==="jupiter"||i.id==="saturn"){const c=i.id==="earth"?5636010:i.id==="jupiter"?8970495:11176191,u=new $e({color:c,transparent:!0,opacity:.65,side:Dt,blending:vt}),h=new ii(e*.35,e*.04,8,32);h.rotateX(Math.PI/2);const d=new ee(h,u);d.position.y=e*.94,d.name=`aurora-north:${i.id}`;const p=new ee(h,u);p.position.y=-e*.94,p.name=`aurora-south:${i.id}`,o.add(d,p)}return o}function a_(i){const e=Math.max(oi(i),.48),t=new et(e,dn,dn),n=Ag({color:i.colorHex}),s=new ee(t,n);s.name=`star:${i.id}`,s.userData.animatedUniforms=["uTime"];const r=new et(e*1.22,32,32),a=new $e({color:16755251,transparent:!0,opacity:.35,blending:vt,side:It}),o=new ee(r,a);o.name=`flare:${i.id}`;const l=new Bi(i.colorHex,2.8,0,1.8);l.name=`starlight:${i.id}`;const c=new Qe;if(c.add(s,o,l),i.tags.includes("pulsar")||i.id.includes("pulsar")||i.tags.includes("magnetar")){const u=new Gi(e*.45,e*6,24,1,!0);u.translate(0,e*3,0);const h=new $e({color:i.colorHex,transparent:!0,opacity:.55,blending:vt,side:Dt}),d=new ee(u,h),p=new ee(u,h);p.rotation.x=Math.PI,c.add(d,p)}return c}function o_(i){const e=Math.max(oi(i)*.55,.35),t=new et(e,dn,dn),n=new ee(t,Cg());n.name=`horizon:${i.id}`,n.userData.animatedUniforms=["uTime"];const s=new on(e*1.02,e*1.12,48),r=new $e({color:16772829,transparent:!0,opacity:.85,side:Dt,blending:vt}),a=new ee(s,r);a.rotation.x=Math.PI/2.3;const o=new on(e*1.25,e*3.6,64),l=new ee(o,Rg());l.name=`disk:${i.id}`,l.rotation.x=Math.PI/2.3,l.userData.animatedUniforms=["uTime"];const c=new Qe;return c.add(n,a,l),c}function l_(i){return i_(i,oi(i))}function c_(i){const t=new Float32Array(18e3),n=new Float32Array(6e3*3),s=new Re(i.colorHex),r=Math.max(oi(i)*6,6);for(let p=0;p<6e3;p++){const g=p%3,_=Math.random(),m=_*Math.PI*6+g*(Math.PI*2)/3,f=_*r,x=(Math.random()-.5)*.6;t[p*3]=Math.cos(m)*f+x,t[p*3+1]=(Math.random()-.5)*.3,t[p*3+2]=Math.sin(m)*f+x;const v=.6+Math.random()*.4;n[p*3]=s.r*v,n[p*3+1]=s.g*v,n[p*3+2]=s.b*v}const a=new lt;a.setAttribute("position",new yt(t,3)),a.setAttribute("color",new yt(n,3));const o=new Wi({size:.18,vertexColors:!0,transparent:!0,opacity:.9,blending:vt,depthWrite:!1}),l=new qi(a,o);l.name=`galaxy:${i.id}`;const c=new et(Math.max(r*.08,.3),24,24),u=new $e({color:16774102}),h=new ee(c,u);h.name=`galaxy-core:${i.id}`;const d=new Qe;if(d.add(l,h),i.id==="messier-87"||i.id==="centaurus-a"){const p=new gt(.04,.4,r*.85,16);p.translate(0,r*.42,0);const g=new $e({color:8969727,transparent:!0,opacity:.65,blending:vt}),_=new ee(p,g);_.rotation.z=.55,d.add(_)}return d}function u_(i){const e=Math.max(oi(i)*3,3),t=new xr(e,2),n=new $e({color:i.colorHex,wireframe:!0,transparent:!0,opacity:.35}),s=new ee(t,n);return s.name=`structure:${i.id}`,s}function h_(i){const t=new xr(.05,0),n=new Ze({color:i.colorHex,roughness:1}),s=new v0(t,n,1500);s.name=`asteroid-belt:${i.id}`;const r=new bt,a=6,o=8;for(let l=0;l<1500;l++){const c=Math.random()*Math.PI*2,u=a+Math.random()*(o-a);r.position.set(Math.cos(c)*u,(Math.random()-.5)*.4,Math.sin(c)*u),r.rotation.set(Math.random()*Math.PI,Math.random()*Math.PI,0);const h=.5+Math.random()*1.5;r.scale.setScalar(h),r.updateMatrix(),s.setMatrixAt(l,r.matrix)}return s.instanceMatrix.needsUpdate=!0,s}function d_(i){const e=new Qe;e.name=`satellite:${i.id}`,e.userData.satelliteId=i.id,e.userData.kind="satellite";const t=new Rt(.06,.06,.12),n=new Ze({color:i.colorHex,metalness:.6,roughness:.4}),s=new ee(t,n),r=new Rt(.22,.005,.08),a=new Ze({color:2245802,metalness:.3,roughness:.6}),o=new ee(r,a);o.position.x=-.16;const l=new ee(r,a);l.position.x=.16;const c=new Bi(i.colorHex,.6,2,2);return e.add(s,o,l,c),e}function f_(i=4e3,e=400){const t=new Float32Array(i*3);for(let a=0;a<i;a++)t[a*3]=(Math.random()-.5)*e,t[a*3+1]=(Math.random()-.5)*e,t[a*3+2]=(Math.random()-.5)*e;const n=new lt;n.setAttribute("position",new yt(t,3));const s=new Wi({color:16774886,size:.6,sizeAttenuation:!0}),r=new qi(n,s);return r.name="background-starfield",r}function p_({semiMajorAxis:i,eccentricity:e=0,periodSeconds:t,timeSeconds:n,phaseOffset:s=0,inclinationDeg:r=0}){const a=Ti(i,0),o=m_(Ti(e,0),0,.95),l=Ti(t,1)||1,u=(Ti(n,0)/l*2*Math.PI+Ti(s,0))%(2*Math.PI),h=a*Math.sqrt(1-o*o),d=u,p=a*Math.cos(d)-a*o,g=h*Math.sin(d),_=Ti(r,0)*Math.PI/180,m=g*Math.sin(_),f=g*Math.cos(_);return{x:p,y:m,z:f,angle:d}}function m_(i,e,t){return Math.min(Math.max(i,e),t)}function Ti(i,e){return Number.isFinite(i)?i:e}const g_=6,__={0:0,1:0,2:55,3:170,4:340},v_=86400;function eu(i,e=0){const t=new Map(i.map(a=>[a.id,a])),n=new Map,s=new Set;function r(a){if(n.has(a))return n.get(a);const o=t.get(a);if(!o){const c={x:0,y:0,z:0};return n.set(a,c),c}if(s.has(a)){const c={x:0,y:0,z:0};return n.set(a,c),c}s.add(a);let l;if(o.orbit&&o.orbit.parentId){const c=r(o.orbit.parentId),u=p_({semiMajorAxis:Math.cbrt(Math.max(o.orbit.semiMajorAxisAu,1e-6))*g_,eccentricity:o.orbit.eccentricity??0,periodSeconds:Math.max(o.orbit.periodDays,.01)*v_,timeSeconds:e,phaseOffset:Da(o.id)*Math.PI*2,inclinationDeg:o.orbit.inclinationDeg??0});l={x:c.x+u.x,y:c.y+u.y,z:c.z+u.z}}else o.id==="sun"?l={x:0,y:0,z:0}:l=Ia(o.id,__[o.scaleTier]??200);return s.delete(a),n.set(a,l),l}for(const a of i)r(a.id);return n}function tu(i,e){const t=new Map,n=e.get("earth")??{x:0,y:0,z:0};for(const s of i)if(s.orbitsBodyId&&e.has(s.orbitsBodyId)){const r=e.get(s.orbitsBodyId),a=Ia(s.id,.5);t.set(s.id,{x:r.x+a.x,y:r.y+a.y,z:r.z+a.z})}else{const r=s.distanceFromEarthKm/1495978707e-1,a=x_(6+Math.log10(1+r)*6,6,60),o=Ia(s.id,1),l=Math.hypot(o.x,o.y,o.z)||1;t.set(s.id,{x:n.x+o.x/l*a,y:n.y+o.y/l*a,z:n.z+o.z/l*a})}return t}function Ia(i,e){const t=Da(i+"θ"),n=Da(i+"φ"),s=t*Math.PI*2,r=Math.acos(2*n-1);return{x:e*Math.sin(r)*Math.cos(s),y:e*Math.cos(r)*.4,z:e*Math.sin(r)*Math.sin(s)}}function Da(i){let e=0;for(let t=0;t<i.length;t++)e=e*31+i.charCodeAt(t)>>>0;return e%1e5/1e5}function x_(i,e,t){return Math.min(Math.max(i,e),t)}const y_=[{id:"ursa-major",name:"Ursa Major (Big Dipper)",color:"#6ce3ff",stars:[{name:"Dubhe",pos:[150,220,-280]},{name:"Merak",pos:[120,180,-290]},{name:"Phecda",pos:[70,170,-300]},{name:"Megrez",pos:[90,210,-290]},{name:"Alioth",pos:[50,240,-280]},{name:"Mizar",pos:[10,260,-270]},{name:"Alkaid",pos:[-35,275,-260]}],edges:[[0,1],[1,2],[2,3],[3,0],[3,4],[4,5],[5,6]]},{id:"orion",name:"Orion",color:"#ffd27a",stars:[{name:"Betelgeuse",pos:[-180,120,260]},{name:"Bellatrix",pos:[-120,110,275]},{name:"Alnitak",pos:[-160,40,280]},{name:"Alnilam",pos:[-145,38,285]},{name:"Mintaka",pos:[-130,36,290]},{name:"Saiph",pos:[-175,-50,270]},{name:"Rigel",pos:[-115,-60,285]}],edges:[[0,1],[0,2],[1,4],[2,3],[3,4],[2,5],[4,6],[5,6]]},{id:"cassiopeia",name:"Cassiopeia",color:"#ff9ee2",stars:[{name:"Caph",pos:[220,190,160]},{name:"Schedar",pos:[260,180,120]},{name:"Navi",pos:[290,210,80]},{name:"Ruchbah",pos:[310,195,30]},{name:"Segin",pos:[330,230,-10]}],edges:[[0,1],[1,2],[2,3],[3,4]]},{id:"crux",name:"Crux (Southern Cross)",color:"#85ffb5",stars:[{name:"Acrux",pos:[40,-290,-140]},{name:"Mimosa",pos:[70,-270,-120]},{name:"Gacrux",pos:[50,-230,-150]},{name:"Delta Crucis",pos:[20,-255,-165]}],edges:[[0,2],[1,3]]},{id:"cygnus",name:"Cygnus (The Northern Cross)",color:"#c0b2ff",stars:[{name:"Deneb",pos:[-240,220,-120]},{name:"Sadr",pos:[-210,180,-150]},{name:"Gienah",pos:[-260,160,-170]},{name:"Delta Cygni",pos:[-160,195,-135]},{name:"Albireo",pos:[-180,130,-180]}],edges:[[0,1],[1,4],[2,1],[1,3]]}];class S_{constructor(e){this.scene=e,this.group=new Qe,this.group.name="constellation-overlay",this.visible=!1,this.group.visible=!1,this._buildConstellations(),this.scene&&this.scene.add(this.group)}_buildConstellations(){for(const e of y_){const t=[];for(const[l,c]of e.edges){const u=e.stars[l].pos,h=e.stars[c].pos;t.push(u[0],u[1],u[2]),t.push(h[0],h[1],h[2])}const n=new lt;n.setAttribute("position",new Ye(t,3));const s=new Xa({color:new Re(e.color),transparent:!0,opacity:.55,blending:vt}),r=new x0(n,s);this.group.add(r);const a=new et(2.2,8,8),o=new $e({color:new Re(e.color),transparent:!0,opacity:.85,blending:vt});for(const l of e.stars){const c=new ee(a,o);c.position.set(l.pos[0],l.pos[1],l.pos[2]),this.group.add(c)}}}toggle(e){return this.visible=e!==void 0?e:!this.visible,this.group.visible=this.visible,this.visible}}class M_{constructor(e={}){this.stiffness=e.stiffness??85,this.damping=e.damping??6.5,this.mass=e.mass??.85,this.maxTilt=e.maxTiltAngle??.55,this.rotationX=0,this.rotationZ=0,this.velX=0,this.velZ=0}update(e,t={}){const n=Math.min(Math.max(e,.001),.1),s=(t.accZ??0)*.45+(t.pitchRate??0)*.35,r=-(t.accX??0)*.45-(t.yawRate??0)*.4,a=-this.stiffness*this.rotationX,o=-this.damping*this.velX,l=(a+o+s)/this.mass,c=-this.stiffness*this.rotationZ,u=-this.damping*this.velZ,h=(c+u+r)/this.mass;return this.velX+=l*n,this.velZ+=h*n,this.rotationX+=this.velX*n,this.rotationZ+=this.velZ*n,Math.abs(this.rotationX)>this.maxTilt&&(this.rotationX=Math.sign(this.rotationX)*this.maxTilt,this.velX*=-.25),Math.abs(this.rotationZ)>this.maxTilt&&(this.rotationZ=Math.sign(this.rotationZ)*this.maxTilt,this.velZ*=-.25),{rotationX:this.rotationX,rotationZ:this.rotationZ}}nudge(e=2.5,t=2){this.velX+=e,this.velZ+=t}reset(){this.rotationX=0,this.rotationZ=0,this.velX=0,this.velZ=0}}const Je={porcelainCream:16183268,terracotta:14253380,warmWood:4007965,darkBronze:2827552,vintageBrass:13935449,seatFabric:5521463,canopyGlass:12575743,glowAmberWarm:16758868,glowLantern:16768938,glowCyan:6482175,glowGreen:5826704,coffeeBrown:3808780};function b_(){const i=new Qe;i.name="spaceship",i.scale.setScalar(.24);const e=new M_({stiffness:90,damping:6,mass:.8}),t=E_(),n=T_(),s=w_();s.position.set(0,-.22,.28),n.add(s);const r=new Bi(Je.glowAmberWarm,1.2,5,2);r.position.set(0,0,1.1);const a=new $e({color:Je.glowAmberWarm,transparent:!0,opacity:.85,blending:vt}),o=new Gi(.1,.65,16);o.rotateX(-Math.PI/2),o.translate(0,0,.32);const l=new ee(o,a);l.position.set(-.32,.01,.85);const c=l.clone();c.position.x=.32;const u=new $e({color:Je.glowCyan,transparent:!0,opacity:.85,blending:vt}),h=new Gi(.06,.35,12);h.rotateX(Math.PI/2),h.translate(0,0,-.18);const d=new ee(h,u);d.position.set(-.25,-.05,-.45);const p=d.clone();p.position.x=.25,t.add(l,c,d,p);const g=[l,c],_=[d,p],m=120,f=new Float32Array(m*3);for(let X=0;X<m;X++)f[X*3]=(Math.random()-.5)*2.2,f[X*3+1]=(Math.random()-.5)*1.4+.15,f[X*3+2]=-.2-Math.random()*3.2;const x=new lt;x.setAttribute("position",new yt(f,3));const v=new Wi({color:16772829,size:.045,transparent:!0,opacity:.75,blending:vt}),S=new qi(x,v);S.name="speed-dust",i.add(S);const R=new et(.55,16,16,0,Math.PI*2,0,Math.PI/2.2);R.rotateX(-Math.PI/2);const w=new $e({color:16738859,transparent:!0,opacity:0,blending:vt,side:It}),A=new ee(R,w);A.name="reentry-plasma",A.position.set(0,0,-.2),t.add(A),i.add(t,n,r);const U=n.getObjectByName("flight-stick"),b=n.getObjectByName("holo-globe"),E=n.getObjectByName("horizon-needle"),F=n.getObjectByName("speed-needle"),k=n.getObjectByName("bobblehead-head"),te=n.getObjectByName("coffee-steam")?.children??[],I=t.getObjectByName("exterior-canopy"),B=t.getObjectByName("exterior-portholes");function H(X,K,P,O,Y,oe,he=0){const de=Y===tt.COCKPIT;if(I&&(I.visible=!de),B&&(B.visible=!de),s.visible=!de,b&&(b.rotation.y+=X*.7,b.rotation.x=Math.sin(Date.now()*.001)*.12),U&&O){const M=-(O.yaw??0)*.32+(O.strafe??0)*.18,y=-(O.pitch??0)*.28-(O.thrust??0)*.18;U.rotation.z+=(M-U.rotation.z)*Math.min(X*12,1),U.rotation.x+=(y-U.rotation.x)*Math.min(X*12,1)}if(k){const M=e.update(X,oe??{accZ:(O?.thrust??0)*(P?22:8),yawRate:(O?.yaw??0)*8,pitchRate:(O?.pitch??0)*8});k.rotation.x=M.rotationX,k.rotation.z=M.rotationZ}E&&O&&(E.rotation.z=-(O.yaw??0)*.5,E.position.y=(O.pitch??0)*.02),F&&(F.rotation.z=-K*Math.PI*1.5),A&&w&&(w.opacity=Math.min(he*.85,.9),he>.6?w.color.setHex(11200767):he>.3?w.color.setHex(16765030):w.color.setHex(16738859));const Ee=Date.now()*.002;for(let M=0;M<te.length;M++){const y=te[M],N=(Ee+M*.4)%1;y.position.y=.06+N*.09,y.position.x=Math.sin(Ee*2+M)*.008,y.scale.setScalar(.5+N*1.2),y.material&&(y.material.opacity=(1-N)*.45)}const Te=O?.thrust??0,ve=Math.max(K,Math.abs(Te)),Pe=(Te!==0?Te:K>.05?1:.05)*(ve*8+.5)*X,L=x.attributes.position,le=L.array;for(let M=0;M<m;M++){let y=le[M*3+2]+Pe;y>.3?(y=-3.4-Math.random()*.5,le[M*3]=(Math.random()-.5)*2.2,le[M*3+1]=(Math.random()-.5)*1.4+.15):y<-3.9&&(y=.2+Math.random()*.1),le[M*3+2]=y}L.needsUpdate=!0,v.opacity=de?.85:.45;const $=Math.max(O?.thrust??0,K),Q=.3+$*(P?2.5:1.2),W=.5+$*(P?1.2:.6),xe=P?Je.glowCyan:Je.glowAmberWarm;a.color.setHex(xe),r.color.setHex(xe),r.intensity=.8+$*(P?3.5:1.6);for(const M of g)M.scale.set(W,W,Q),M.visible=$>.02;const ce=Math.max(-(O?.thrust??0),0);for(const M of _)M.scale.set(.5+ce*1.5,.5+ce*1.5,.4+ce*2),M.visible=ce>.05}function Z(X){const K=n.children.find(P=>P.geometry?.type==="BoxGeometry");K&&(X==="APOLLO"?(K.material.color.setHex(13685980),K.material.roughness=.4,K.material.metalness=.4):X==="CYBERPUNK"?(K.material.color.setHex(1380902),K.material.roughness=.2,K.material.metalness=.8):(K.material.color.setHex(Je.warmWood),K.material.roughness=.7,K.material.metalness=.1))}function j(X){const K=n.getObjectByName("cabin-lamp-light"),P=n.children.find(Y=>Y.isPointLight&&Y.position.y>.1),O=Math.min(Math.max(X,0),1);K&&(K.intensity=O*1.4),P&&(P.intensity=O*.65)}function J(X){const K=t.getObjectByName("main-hull");!K||!K.material||(X==="SOLAR_GOLD"?(K.material.color.setHex(16766720),K.material.metalness=.85,K.material.roughness=.15):X==="STEALTH_CARBON"?(K.material.color.setHex(1579036),K.material.metalness=.3,K.material.roughness=.7):X==="DEEP_BRASS"?(K.material.color.setHex(Je.vintageBrass),K.material.metalness=.7,K.material.roughness=.3):(K.material.color.setHex(Je.porcelainCream),K.material.metalness=.15,K.material.roughness=.45))}return{ship:i,cockpitInterior:n,exterior:t,pilot:s,bobbleheadPhysics:e,thrusterGlow:r,thrusterPlumes:g,flightStick:U,holoGlobe:b,applyCabinTheme:Z,applyCabinLighting:j,applyHullLivery:J,update:H}}function E_(){const i=new Qe;i.name="ship-exterior";const e=new Ze({color:Je.porcelainCream,metalness:.15,roughness:.45}),t=new Ze({color:Je.terracotta,metalness:.2,roughness:.5}),n=new Ze({color:Je.darkBronze,metalness:.6,roughness:.35}),s=new et(.48,24,20);s.scale(1,.78,1.45);const r=new ee(s,e);r.position.set(0,0,0);const a=new et(.34,16,16,0,Math.PI*2,0,Math.PI/2);a.rotateX(-Math.PI/2),a.scale(1,.72,1);const o=new ee(a,t);o.position.set(0,-.01,-.58);const l=new ee(new Rt(.38,.08,.9),t);l.position.set(0,-.28,.05);const c=new J0({color:Je.canopyGlass,transparent:!0,opacity:.5,roughness:.08,metalness:.1,transmission:.65,thickness:.2,reflectivity:.85}),u=new et(.38,20,16,0,Math.PI*2,0,Math.PI/1.8),h=new ee(u,c);h.name="exterior-canopy",h.position.set(0,.12,-.18),h.scale.set(.9,.75,1.15),h.rotation.x=Math.PI;const d=new Qe;d.name="exterior-portholes";const p=new $e({color:Je.glowAmberWarm}),g=new Ze({color:Je.vintageBrass,metalness:.7,roughness:.3});for(const B of[-1,1])for(let H=0;H<2;H++){const Z=new ee(new ii(.06,.012,8,16),g);Z.position.set(B*.44,.02,.1+H*.28),Z.rotation.y=B*Math.PI/2;const j=new ee(new Dn(.055,16),p);j.position.set(B*.441,.02,.1+H*.28),j.rotation.y=B*Math.PI/2,d.add(Z,j)}const _=new zc;_.moveTo(0,0),_.lineTo(-.85,.4),_.lineTo(-.8,.75),_.lineTo(-.15,.55),_.lineTo(0,.45);const m={depth:.03,bevelEnabled:!0,bevelSegments:2,steps:1,bevelSize:.015,bevelThickness:.015},f=new Za(_,m);f.rotateX(Math.PI/2);const x=new ee(f,e);x.position.set(-.25,-.05,-.08);const v=f.clone();v.scale(-1,1,1);const S=new ee(v,e);S.position.set(.25,-.05,-.08);const R=new et(.028,8,8),w=new ee(R,new $e({color:16733525}));w.position.set(-1.05,-.02,.42);const A=new ee(R,new $e({color:5635959}));A.position.set(1.05,-.02,.42);const U=new gt(.11,.14,.65,16);U.rotateX(Math.PI/2);const b=new ee(U,n);b.position.set(-.32,.01,.5);const E=b.clone();E.position.x=.32;const F=new ii(.12,.025,8,16),k=new $e({color:Je.glowAmberWarm}),te=new ee(F,k);te.position.set(-.32,.01,.82);const I=te.clone();return I.position.x=.32,i.add(r,o,l,h,d,x,S,w,A,b,E,te,I),i}function T_(){const i=new Qe;i.name="cockpit-interior";const e=new Ze({color:Je.warmWood,roughness:.7,metalness:.1}),t=new Ze({color:Je.vintageBrass,metalness:.8,roughness:.25}),n=new $e({color:1314828}),s=new ii(.42,.018,8,24,Math.PI*.9);s.rotateZ(-Math.PI*.05);const r=new ee(s,t);r.position.set(0,.06,-.32);const a=new ee(new Rt(.78,.18,.38),e);a.position.set(0,-.16,-.22);const o=new ee(new Rt(.72,.14,.28),e);o.position.set(0,-.08,-.18),o.rotation.x=-Math.PI/4.5;const l=new ee(new Dn(.08,20),n);l.position.set(0,-.03,-.07),l.rotation.x=-Math.PI/4.5;const c=new ee(new on(.076,.084,20),t);l.add(c);const u=new ee(new ti(.12,.006),new $e({color:Je.glowAmberWarm}));u.name="horizon-needle",u.position.set(0,0,.002),l.add(u);const h=new ee(new ti(.055,.005),new $e({color:16733525}));h.name="speed-needle",h.position.set(0,0,.004),l.add(h);const d=new ee(new Dn(.055,16),n);d.position.set(-.22,-.04,-.09),d.rotation.x=-Math.PI/4.5,d.rotation.y=Math.PI/12,d.add(new ee(new on(.052,.058,16),t));const p=new ee(new ti(.08,.005),new $e({color:Je.glowGreen}));d.add(p);const g=new ee(new Dn(.055,16),n);g.position.set(.22,-.04,-.09),g.rotation.x=-Math.PI/4.5,g.rotation.y=-Math.PI/12,g.add(new ee(new on(.052,.058,16),t));const _=new Qe;_.name="holo-globe",_.position.set(.22,.04,-.08);const m=new ee(new et(.035,10,8),new $e({color:Je.glowAmberWarm,wireframe:!0,transparent:!0,opacity:.85})),f=new ee(new on(.046,.052,16),new $e({color:Je.glowCyan,side:Dt}));f.rotation.x=Math.PI/3,_.add(m,f);const x=new Qe;x.position.set(-.32,.02,-.08);const v=new ee(new gt(.025,.03,.02,10),t),S=new ee(new gt(.022,.022,.05,10),new $e({color:Je.glowLantern}));S.name="lamp-bulb",S.position.y=.035;const R=new ee(new Gi(.03,.025,10),t);R.position.y=.065;const w=new ee(new Rt(.015,.015,.02),t);w.name="switch-cabin-light",w.position.set(0,.01,.03),x.add(v,S,R,w);const A=new Bi(Je.glowLantern,1.4,2.2,2);A.name="cabin-lamp-light",A.position.set(-.32,.06,-.06);const U=new Qe;U.name="coffee-mug",U.position.set(.3,-.07,.02);const b=new ee(new gt(.038,.034,.03,12),t),E=new Ze({color:Je.terracotta,roughness:.4}),F=new ee(new gt(.028,.024,.06,12),E);F.name="coffee-mug-body",F.position.y=.025;const k=new ee(new Dn(.022,12),new $e({color:Je.coffeeBrown}));k.rotation.x=-Math.PI/2,k.position.y=.052;const te=new ii(.016,.005,6,10,Math.PI);te.rotateY(Math.PI/2);const I=new ee(te,E);I.position.set(.028,.025,0);const B=new Qe;B.name="coffee-steam";for(let Ge=0;Ge<5;Ge++){const je=new $e({color:16772829,transparent:!0,opacity:.35}),ct=new ee(new et(.009,6,6),je);ct.position.y=.06+Ge*.015,B.add(ct)}U.add(b,F,k,I,B);const H=new Qe;H.name="bobblehead-prop",H.position.set(-.14,-.04,-.07);const Z=new ee(new gt(.025,.03,.012,12),t),j=new ee(new gt(.006,.006,.04,8),new Ze({color:8947848,metalness:.9}));j.position.y=.02;const J=new Qe;J.name="bobblehead-head",J.position.y=.045;const X=new ee(new et(.032,12,12),new Ze({color:5826704,roughness:.5}));X.scale.set(1.1,1.25,1);const K=new $e({color:1118481}),P=new ee(new et(.01,8,8),K);P.position.set(-.014,.005,.026);const O=P.clone();O.position.x=.014;const Y=new ee(new gt(.002,.002,.025,6),t);Y.position.y=.04;const oe=new ee(new et(.006,6,6),new $e({color:Je.glowAmberWarm}));oe.position.y=.052,J.add(X,P,O,Y,oe),H.add(Z,j,J);const he=new Qe;he.name="dash-radio",he.position.set(.14,-.05,-.07);const de=new ee(new Rt(.075,.04,.045),e),Ee=new ee(new Dn(.014,12),new $e({color:1118481}));Ee.position.set(-.018,0,.023);const Te=new ee(new gt(.009,.009,.015,10),t);Te.name="radio-knob",Te.rotateX(Math.PI/2),Te.position.set(.018,0,.025),he.add(de,Ee,Te);const ve=new Qe;ve.name="warp-lever",ve.position.set(-.25,-.1,-.04);const Pe=new ee(new Rt(.04,.02,.06),t),L=new ee(new gt(.006,.006,.08,8),e);L.position.set(0,.04,0),L.rotation.x=-.25;const le=new ee(new et(.014,8,8),new $e({color:Je.glowAmberWarm}));le.position.set(0,.08,-.015),ve.add(Pe,L,le);const $=new ee(new gt(.012,.012,.015,8),t);$.name="palette-switch",$.position.set(.25,-.08,-.04);const Q=new Qe;Q.name="flight-stick",Q.position.set(0,-.16,.06);const W=new ee(new gt(.035,.045,.03,10),t),xe=new ee(new gt(.012,.012,.16,8),e);xe.position.y=.08;const ce=new ee(new et(.022,10,10),t);ce.position.set(0,.16,0),Q.add(W,xe,ce);const M=new Ze({color:Je.seatFabric,roughness:.85}),y=new ee(new Rt(.4,.09,.38),M);y.position.set(0,-.28,.28);const N=new ee(new Rt(.38,.45,.08),M);N.position.set(0,-.06,.45),N.rotation.x=-.1;const ne=new ee(new Rt(.24,.14,.07),M);ne.position.set(0,.2,.48);const ie=new Qe;ie.name="dash-terrarium",ie.position.set(-.28,-.04,-.15);const se=new ee(new gt(.024,.018,.02,12),new Ze({color:2827552,roughness:.8})),be=new ee(new et(.026,12,10,0,Math.PI*2,0,Math.PI/1.8),new Ze({color:13625599,transparent:!0,opacity:.45,roughness:.1}));be.position.y=.01;const me=new ee(new gt(.003,.005,.025,6),new Ze({color:4860421,roughness:.9}));me.position.y=.015;const ye=new ee(new et(.014,8,8),new Ze({color:3715072,roughness:.7}));ye.position.y=.028;const Ce=new ee(new et(.005,6,6),new $e({color:16740518}));Ce.name="terrarium-blossom",Ce.position.set(.006,.032,.004),ie.add(se,be,me,ye,Ce);const Oe=new Qe;Oe.name="dash-cassette",Oe.position.set(.02,-.08,-.08);const re=new ee(new Rt(.085,.025,.05),new Ze({color:2038037,metalness:.4,roughness:.6})),Ke=new ee(new Rt(.065,.018,.004),new Ze({color:16761210,roughness:.3}));Ke.name="cassette-door",Ke.position.set(0,.002,.026);const ze=new $e({color:16777215}),Ie=new ee(new gt(.004,.004,.006,8),ze);Ie.name="reel-left",Ie.rotateX(Math.PI/2),Ie.position.set(-.015,.002,.028);const we=Ie.clone();we.name="reel-right",we.position.x=.015,Oe.add(re,Ke,Ie,we);const Me=new Bi(Je.glowLantern,.65,2.2,2);return Me.position.set(0,.2,.05),i.add(r,a,o,l,d,g,_,x,A,U,H,he,ie,Oe,ve,$,Q,y,N,ne,Me),i}function w_(){const i=new Qe;i.name="pilot";const e=new Ze({color:14660758,roughness:.7}),t=new Ze({color:7228731,roughness:.85}),n=new Ze({color:Je.terracotta,roughness:.8}),s=new ee(new us(.11,.2,4,8),t);s.position.y=.15;const r=new ee(new et(.085,14,14),e);r.position.y=.33;const a=new ee(new et(.088,12,12,0,Math.PI*2,0,Math.PI/1.7),n);a.position.set(0,.35,0);const o=new us(.035,.18,4,8),l=new ee(o,t);l.position.set(-.15,.14,-.05),l.rotation.set(.5,0,.25);const c=new ee(o,t);c.position.set(.15,.14,-.05),c.rotation.set(.5,0,-.25);const u=new us(.045,.2,4,8),h=new ee(u,t);h.position.set(-.07,-.06,-.04),h.rotation.x=Math.PI/2.1;const d=h.clone();return d.position.x=.07,i.add(s,r,a,l,c,h,d),i}const A_={[tt.COCKPIT]:new C(0,.03,.04),[tt.THIRD_PERSON]:new C(0,.28,1.25),[tt.CINEMATIC]:new C(.85,.35,1.1)},C_={[tt.COCKPIT]:new C(0,.02,-2.5),[tt.THIRD_PERSON]:new C(0,.06,-2),[tt.CINEMATIC]:new C(0,.03,-.5)},ca=60,Xl=74;class R_{constructor(e,t){this.camera=e,this.ship=t,this.mode=tt.COCKPIT,this._currentPos=new C,this._currentLook=new C,this._mouseParallax={x:0,y:0},this._initialized=!1,this._zoomLevel=1,this._targetZoom=1,this._targetFov=ca}setMode(e){Object.values(tt).includes(e)&&(this.mode=e)}adjustZoom(e){this._targetZoom=ts(this._targetZoom+e,.45,2.8)}setZoom(e){this._targetZoom=ts(e,.45,2.8)}get zoomLevel(){return this._targetZoom}setMouseParallax(e,t){this._mouseParallax.x=ts(e,-1,1),this._mouseParallax.y=ts(t,-1,1)}update(e,t=!1,n=0){this._zoomLevel+=(this._targetZoom-this._zoomLevel)*Math.min(e*8,1);const r=A_[this.mode].clone(),a=C_[this.mode].clone();if(this.mode===tt.COCKPIT?(r.x+=this._mouseParallax.x*.06,r.y+=this._mouseParallax.y*.04,a.x+=this._mouseParallax.x*1.4,a.y+=this._mouseParallax.y*.8):r.multiplyScalar(this._zoomLevel),t&&n>.3){const h=.012*Math.min(n,1);r.x+=(Math.random()-.5)*h,r.y+=(Math.random()-.5)*h}const o=r.clone().applyQuaternion(this.ship.quaternion),l=this.ship.position.clone().add(o),c=a.clone().applyQuaternion(this.ship.quaternion),u=this.ship.position.clone().add(c);if(!this._initialized)this._currentPos.copy(l),this._currentLook.copy(u),this._initialized=!0;else{const h=1-Math.exp(-10*e);this._currentPos.lerp(l,h),this._currentLook.lerp(u,h)}if(this.camera.position.copy(this._currentPos),this.camera.lookAt(this._currentLook),this.mode===tt.COCKPIT){const h=(t?Xl:ca)*this._zoomLevel;this._targetFov=ts(h,35,85)}else this._targetFov=t?Xl:ca;if(Math.abs(this.camera.fov-this._targetFov)>.05){const h=1-Math.exp(-3*e);this.camera.fov+=(this._targetFov-this.camera.fov)*h,this.camera.updateProjectionMatrix()}}}function ts(i,e,t){return Math.min(Math.max(i,e),t)}const Zn=Object.freeze({SPOOLING:"SPOOLING",CRUISE:"CRUISE",DECELERATING:"DECELERATING",ARRIVED:"ARRIVED"}),In=1.4,sr=1.6;function L_(i,e){const t=Math.max(Na(e),In+sr+.1),n=$l(Na(i),0,t),s=Math.max(t-In-sr,.1);if(n>=t)return{phase:Zn.ARRIVED,phaseProgress:1,overallProgress:1,speedFraction:0,pathT:1};if(n<In){const c=n/In,u=Kl(c),h=.02*Kl(c);return{phase:Zn.SPOOLING,phaseProgress:c,overallProgress:n/t,speedFraction:u,pathT:h}}if(n<In+s){const c=(n-In)/s,u=.02+c*.9;return{phase:Zn.CRUISE,phaseProgress:c,overallProgress:n/t,speedFraction:1,pathT:u}}const a=(n-In-s)/sr,o=1-Yl(a),l=.92+Yl(a)*.08;return{phase:Zn.DECELERATING,phaseProgress:a,overallProgress:n/t,speedFraction:o,pathT:$l(l,0,1)}}function P_(i){const e=Math.max(Na(i),0),t=In+sr,n=Math.min(Math.log10(1+e)*.9,14);return t+n}function Kl(i){return i*i}function Yl(i){return 1-(1-i)*(1-i)}function $l(i,e,t){return Math.min(Math.max(i,e),t)}function Na(i){return Number.isFinite(i)?i:0}function I_({color:i=14674431}={}){return new Pt({uniforms:{uColor:{value:new Re(i)},uSpeedFraction:{value:0}},vertexShader:`
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
    `,transparent:!0,depthWrite:!1,blending:vt})}const ua=299792.458,Oa=.999999;function nu(i){const e=O_(i),t=Math.sqrt(1-e*e);return t<=0?Number.POSITIVE_INFINITY>0?1/Math.sqrt(1-Oa*Oa):1:1/t}function iu(i,e){if(!Number.isFinite(i)||i<0)return 0;const t=nu(e);return i/t}function Qs(i,e){return!Number.isFinite(i)||i<=0?0:!Number.isFinite(e)||e<=0?Number.POSITIVE_INFINITY:i/e}function D_(i){const e=Number.isFinite(i)&&i>0?i:0,t=Qs(e,ua),n=.999*ua,s=Qs(e,n),r=iu(s,.999),a=Qs(e,.1*ua),o=Qs(e,4e4/3600);return{lightSpeed:{seconds:t,label:"At light speed (c)"},relativistic999c:{seconds:s,shipSeconds:r,label:"Relativistic cruiser (0.999c)"},fusionDrive01c:{seconds:a,label:"Fusion drive (0.1c)"},chemicalRocket:{seconds:o,label:"Chemical rocket (~40,000 km/h)"}}}function ds(i){if(!Number.isFinite(i))return"effectively forever";if(i<0)return"0 seconds";const e=365.25*24*3600;if(i<60)return`${i.toFixed(1)} sec`;if(i<3600)return`${(i/60).toFixed(1)} min`;if(i<86400)return`${(i/3600).toFixed(1)} hr`;if(i<e)return`${(i/86400).toFixed(1)} days`;const t=i/e;return t<1e3?`${t.toFixed(2)} yr`:t<1e6?`${(t/1e3).toFixed(2)}k yr`:`${(t/1e6).toFixed(2)}M yr`}function N_(i,e=415e4){if(!Number.isFinite(i)||i<=0)return{schwarzschildRadiusKm:0,dilationFactor:0,timeRatio:Number.POSITIVE_INFINITY,isInsideEventHorizon:!0};const t=e*2.95325;if(i<=t)return{schwarzschildRadiusKm:t,dilationFactor:0,timeRatio:Number.POSITIVE_INFINITY,isInsideEventHorizon:!0};const n=1-t/i,s=Math.sqrt(Math.max(n,1e-6)),r=1/s;return{schwarzschildRadiusKm:t,dilationFactor:s,timeRatio:r,isInsideEventHorizon:!1}}function O_(i){return Number.isFinite(i)?Math.min(Math.max(i,0),Oa):0}const U_=1495978707e-1,F_=94607304725808e-1;function G_(i){return yr(i)/U_}function B_(i){return yr(i)/F_}function H_(i,e=1e6,t=40){const n=yr(i);return n<=0?0:e*(10**(n/t)-1)}function jl(i){const e=yr(i);if(e<0)return"unknown";if(e<5e6)return`${ha(e)} km`;const t=G_(e);return t<2e3?`${ha(t)} AU`:`${ha(B_(e))} ly`}function ha(i){return Number.isFinite(i)?i>=1e3?i.toLocaleString("en-US",{maximumFractionDigits:0}):i>=1?i.toFixed(2):i.toPrecision(2):"—"}function yr(i){return Number.isFinite(i)?i:0}class k_{constructor({scene:e,ship:t,store:n}){this.scene=e,this.ship=t,this.store=n,this._streaks=this._buildStreakField(),this.scene.add(this._streaks),this._active=!1,this._elapsed=0,this._duration=0,this._startPos=new C,this._endPos=new C,this._distanceKm=0,this._onArrive=null}_buildStreakField(e=800){const t=new lt,n=new Float32Array(e*3);for(let a=0;a<e;a++)n[a*3]=(Math.random()-.5)*30,n[a*3+1]=(Math.random()-.5)*30,n[a*3+2]=-Math.random()*60;t.setAttribute("position",new yt(n,3));const s=I_({}),r=new qi(t,s);return r.name="warp-streaks",r.frustumCulled=!1,r.visible=!1,r}beginJump(e,t,n,s,r=1){this._startPos.copy(e);const a=t.clone().sub(e),o=a.length(),l=o>1e-5?a.clone().normalize():new C(0,0,-1),c=Math.max(r+1.2,1.8),u=o>c?t.clone().sub(l.clone().multiplyScalar(c)):t.clone();this._endPos.copy(u),this._distanceKm=Number.isFinite(n)?n:H_(e.distanceTo(t)),this._duration=P_(this._distanceKm),this._elapsed=0,this._active=!0,this._onArrive=s??null,this._streaks.visible=!0,this.ship.userData.forward=l.clone(),this.ship.lookAt(this.ship.position.clone().add(l)),this.store.dispatch(Le.setFlightStatus(fn.SPOOLING))}cancel(){this._active=!1,this._streaks.visible=!1}get isActive(){return this._active}update(e,t){const n=this._streaks.material;if(n?.uniforms?.uSpeedFraction&&(n.uniforms.uSpeedFraction.value=this._active?n.uniforms.uSpeedFraction.value:.05+Math.sin(t*.5)*.02),!this._active)return;this._elapsed+=e;const s=L_(this._elapsed,this._duration),r=this._startPos.clone().lerp(this._endPos,s.pathT);this.ship.position.copy(r);const a=this._endPos.clone().sub(this._startPos);a.lengthSq()>1e-6&&(a.normalize(),this.ship.userData.forward=a.clone(),this.ship.lookAt(this.ship.position.clone().add(a))),n?.uniforms?.uSpeedFraction&&(n.uniforms.uSpeedFraction.value=s.speedFraction),this._streaks.position.copy(this.ship.position),this._reportTelemetry(s);const o=s.phase===Zn.SPOOLING?fn.SPOOLING:s.phase===Zn.DECELERATING?fn.DECELERATING:fn.WARP;this.store.getState().flightStatus!==o&&this.store.dispatch(Le.setFlightStatus(o)),s.phase===Zn.ARRIVED&&(this._active=!1,this._streaks.visible=!1,this.ship.userData.velocity={x:0,y:0,z:0},this.ship.userData.bankAngle=0,this.store.dispatch(Le.setFlightStatus(fn.ARRIVED)),this.store.dispatch(Le.updateTelemetry({currentSpeedC:0,etaSeconds:0,distanceRemainingKm:0})),this._onArrive?.())}_reportTelemetry(e){const t=e.speedFraction*.999,n=nu(t),s=this._distanceKm*(1-e.pathT),r=Math.max(this._duration-this._elapsed,0);this.store.dispatch(Le.updateTelemetry({currentSpeedC:t,lorentzFactor:n,distanceRemainingKm:s,totalDistanceKm:this._distanceKm,timeDilationEarthSec:this._elapsed,timeDilationShipSec:iu(this._elapsed,t),etaSeconds:r}))}}function Di(i,e){return{x:i.x+e.x,y:i.y+e.y,z:i.z+e.z}}function Ua(i,e){return{x:i.x-e.x,y:i.y-e.y,z:i.z-e.z}}function zt(i,e){return{x:i.x*e,y:i.y*e,z:i.z*e}}function _s(i){return Math.sqrt(i.x*i.x+i.y*i.y+i.z*i.z)}function Yt(i){const e=_s(i);return e<1e-9?{x:0,y:0,z:1}:{x:i.x/e,y:i.y/e,z:i.z/e}}function su(i,e){return i.x*e.x+i.y*e.y+i.z*e.z}function z_(i,e,t){const n=Math.min(Math.max(t,0),1);return{x:i.x+(e.x-i.x)*n,y:i.y+(e.y-i.y)*n,z:i.z+(e.z-i.z)*n}}const V_=24,W_=180,q_=28,X_=140,K_=.94,Zl=2.2;function Y_(i,e,t){const n=J_(t),s=as(er(e?.thrust),-1,1),r=as(er(e?.yaw),-1,1),a=as(er(e?.pitch),-1,1),o=as(er(e?.strafe),-1,1),l=!!e?.boost,c=l?W_:V_,u=l?X_:q_,h=Z_(i.forward,r*Zl*n,a*Zl*n),d=Yt({x:-h.z,y:0,z:h.x}),p=zt(h,s*u),g=zt(d,o*u*.7),_=Di(p,g);let m=Di(i.velocity,zt(_,n));const f=_s(m);if(f>.05&&s!==0){const U=s>=0?h:zt(h,-1),b=Math.min(n*8,1),E=Yt(z_(Yt(m),U,b));m=zt(E,f)}const x=Math.pow(K_,n*60);m=zt(m,x),_s(m)>c&&(m=zt(Yt(m),c));const S=Di(i.position,zt(m,n)),R=-r*.45,w=i.bankAngle??0,A=w+(R-w)*Math.min(n*8,1);return{position:S,velocity:m,forward:h,bankAngle:A}}function $_(i,e,t=[]){let n={...i},s={...e},r=!1;for(const a of t){if(!a||!a.position||!a.safeRadius||a.safeRadius<=0)continue;const o=Ua(n,a.position);if(_s(o)<a.safeRadius){r=!0;const c=Yt(o);n=Di(a.position,zt(c,a.safeRadius));const u=su(s,c);u<0&&(s=Ua(s,zt(c,u)))}}return{position:n,velocity:s,collided:r}}function j_(i,e,t,n=2){const s=Ua(t,i),r=_s(s),a=Yt(s),o=Yt(e),l=as(su(o,a),-1,1),c=Math.acos(l)*180/Math.PI;return{distance:r,directionToTarget:a,angleOffsetDeg:c,aligned:c<5,arrived:r<=n}}function Z_(i,e,t){let n=Yt(i),s=Yt({x:-n.z,y:0,z:n.x});Math.abs(n.x)<1e-5&&Math.abs(n.z)<1e-5&&(s={x:1,y:0,z:0});const r=Yt({x:s.y*n.z-s.z*n.y,y:s.z*n.x-s.x*n.z,z:s.x*n.y-s.y*n.x});if(Math.abs(e)>1e-7){const a=Math.cos(e),o=Math.sin(e);n=Yt(Di(zt(n,a),zt(s,o)))}if(Math.abs(t)>1e-7){const a=Math.cos(t),o=Math.sin(t);n=Yt(Di(zt(n,a),zt(r,o)))}if(n.y>.88||n.y<-.88){const a=Math.sign(n.y)*.88,o=Math.sqrt(Math.max(1-a*a,0)),l=Yt({x:n.x,y:0,z:n.z});n={x:l.x*o,y:a,z:l.z*o}}return n}function as(i,e,t){return Math.min(Math.max(i,e),t)}function er(i){return Number.isFinite(i)?i:0}function J_(i){return!Number.isFinite(i)||i<0?0:Math.min(i,.1)}const Q_={thrustForward:["KeyS","ArrowDown","s","S","arrowdown"],thrustBackward:["KeyW","ArrowUp","w","W","arrowup"],yawLeft:["KeyA","ArrowLeft","a","A","arrowleft"],yawRight:["KeyD","ArrowRight","d","D","arrowright"],strafeLeft:["KeyQ","q","Q"],strafeRight:["KeyE","e","E"],pitchUp:["KeyR","r","R"],pitchDown:["KeyF","f","F"],boost:["ShiftLeft","ShiftRight","KeyB","b","B","shift"]};class ev{constructor({keyMap:e=Q_,arrivalRadius:t=2}={}){this._keyMap=e,this._arrivalRadius=t,this._pressedKeys=new Set,this._targetPosition=null,this._hyperdriveLocked=!1}handleKeyDown(e){e?.code&&this._pressedKeys.add(e.code),e?.key&&this._pressedKeys.add(e.key.toLowerCase())}handleKeyUp(e){e?.code&&this._pressedKeys.delete(e.code),e?.key&&this._pressedKeys.delete(e.key.toLowerCase())}resetInput(){this._pressedKeys.clear()}toggleHyperdriveLock(e){return this._hyperdriveLocked=typeof e=="boolean"?e:!this._hyperdriveLocked,this._hyperdriveLocked}get isHyperdriveLocked(){return this._hyperdriveLocked}setTarget(e){this._targetPosition=e}readInput(){const e=o=>o?.some(l=>this._pressedKeys.has(l))??!1;let t=0;e(this._keyMap.thrustForward)&&(t+=1),e(this._keyMap.thrustBackward)&&(t-=1);let n=0;e(this._keyMap.yawRight)&&(n+=1),e(this._keyMap.yawLeft)&&(n-=1);let s=0;e(this._keyMap.strafeRight)&&(s+=1),e(this._keyMap.strafeLeft)&&(s-=1);let r=0;e(this._keyMap.pitchUp)&&(r+=1),e(this._keyMap.pitchDown)&&(r-=1);const a=this._hyperdriveLocked||e(this._keyMap.boost);return{thrust:t,yaw:n,pitch:r,strafe:s,boost:a}}step(e,t){const n=this.readInput(),s=Y_(e,n,t),r=this._targetPosition?j_(s.position,s.forward,this._targetPosition,this._arrivalRadius):null;return{state:s,bearing:r,input:n}}}const Jl=[{name:"Warm Amber",primary:"#ffb854",secondary:"#ffd27a"},{name:"Emerald Retro",primary:"#58e890",secondary:"#a0ffd0"},{name:"Cyber Cyan",primary:"#62e8ff",secondary:"#b5f5ff"}];class tv{constructor(e){this.camera=e.camera,this.shipGroup=e.shipGroup,this.audio=e.audio,this.spaceRadio=e.spaceRadio,this.cassetteDeck=e.cassetteDeck,this.bobblehead=e.bobbleheadProp,this.onEngageWarp=e.onEngageWarp,this.onShowToast=e.onShowToast,this.raycaster=new ng,this.mouse=new ae,this.cabinLightOn=!0,this.currentPaletteIndex=0}handleClick(e,t){if(!t||!this.camera||!this.shipGroup)return!1;this.mouse.x=e.clientX/window.innerWidth*2-1,this.mouse.y=-(e.clientY/window.innerHeight)*2+1,this.raycaster.setFromCamera(this.mouse,this.camera);const n=this.raycaster.intersectObjects(this.shipGroup.children,!0);if(n.length===0)return!1;for(const s of n){let r=s.object;for(;r&&r!==this.shipGroup;){if(r.name==="switch-cabin-light"||r.name==="lamp-bulb")return this.toggleCabinLight(),!0;if(r.name==="radio-knob"||r.name==="dash-radio")return this.tuneRadio(),!0;if(r.name==="dash-cassette"||r.name==="cassette-door"||r.name==="reel-left"||r.name==="reel-right")return this.toggleCassette(),!0;if(r.name==="dash-terrarium"||r.name==="terrarium-blossom")return this.tapTerrarium(),!0;if(r.name==="warp-lever")return this.triggerWarpLever(),!0;if(r.name==="bobblehead-head"||r.name==="bobblehead-prop")return this.tapBobblehead(),!0;if(r.name==="coffee-mug"||r.name==="coffee-mug-body")return this.tapCoffeeMug(),!0;if(r.name==="palette-switch")return this.cycleTheme(),!0;r=r.parent}}return!1}toggleCassette(){if(!this.cassetteDeck)return;this.audio?.playChirp();const e=this.cassetteDeck.togglePlay(),t=this.cassetteDeck.getCurrentTape();e?this.onShowToast?.(`📼 Cassette Playing: "${t.title}" (${t.year})`):this.onShowToast?.("📼 Cassette Deck: Paused")}tapTerrarium(){this.audio?.playChirp(),this.onShowToast?.("🌿 Hydroponic Bonsai is thriving in the warm cabin light!")}tapCoffeeMug(){this.audio?.playChirp(),this.onShowToast?.("☕ Hot space roast coffee — cozy and warm!")}toggleCabinLight(){this.cabinLightOn=!this.cabinLightOn;const e=this.shipGroup.getObjectByName("cabin-lamp-light");e&&(e.intensity=this.cabinLightOn?1.6:.05);const t=this.shipGroup.getObjectByName("lamp-bulb");t&&t.material&&t.material.color.setHex(this.cabinLightOn?16768938:4469538),this.audio?.playChirp(),this.onShowToast?.(this.cabinLightOn?"Cabin Light: ON":"Cabin Light: OFF")}tuneRadio(){if(this.spaceRadio){if(this.spaceRadio.isPlaying){const e=this.spaceRadio.tuneNext();this.onShowToast?.(`📻 Radio: ${e.name} [${e.frequency}]`)}else{this.spaceRadio.start();const e=this.spaceRadio.getCurrentStation();this.onShowToast?.(`📻 Space Radio: ON (${e.name})`)}this.audio?.playChirp()}}triggerWarpLever(){this.audio?.playChirp(),this.onEngageWarp?.()}tapBobblehead(){this.bobblehead&&this.bobblehead.nudge(3.5,(Math.random()-.5)*4),this.audio?.playChirp()}cycleTheme(){this.currentPaletteIndex=(this.currentPaletteIndex+1)%Jl.length;const e=Jl[this.currentPaletteIndex];document.documentElement.style.setProperty("--color-amber-glow",e.primary),this.onShowToast?.(`Dashboard HUD Palette: ${e.name}`),this.audio?.playChirp()}}class nv{constructor(e={}){this.onToggleCamera=e.onToggleCamera,this.onToggleHyperdrive=e.onToggleHyperdrive,this.touchInput={thrust:0,strafe:0,pitch:0,yaw:0,boost:!1},this._gamepadConnected=!1,this._prevButtons={},this._initGamepadListeners(),this._initTouchUI()}_initGamepadListeners(){window.addEventListener("gamepadconnected",()=>{this._gamepadConnected=!0}),window.addEventListener("gamepaddisconnected",()=>{this._gamepadConnected=!1})}_initTouchUI(){if(!("ontouchstart"in window||navigator.maxTouchPoints>0))return;const t=document.createElement("div");t.id="mobile-flight-controls",t.className="mobile-controls-layer",t.innerHTML=`
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
    `,document.body.appendChild(t),this._bindTouchStick(t.querySelector("#touch-stick-left"),t.querySelector("#knob-left"),(r,a)=>{this.touchInput.yaw=r,this.touchInput.pitch=-a}),this._bindTouchStick(t.querySelector("#touch-stick-right"),t.querySelector("#knob-right"),(r,a)=>{this.touchInput.strafe=r,this.touchInput.thrust=-a});const n=t.querySelector("#btn-touch-boost");n?.addEventListener("touchstart",r=>{r.preventDefault(),this.touchInput.boost=!0,n.classList.add("active")}),n?.addEventListener("touchend",r=>{r.preventDefault(),this.touchInput.boost=!1,n.classList.remove("active")}),t.querySelector("#btn-touch-cam")?.addEventListener("touchstart",r=>{r.preventDefault(),this.onToggleCamera?.()})}_bindTouchStick(e,t,n){if(!e||!t)return;let s=null,r=0,a=0;const o=45;e.addEventListener("touchstart",u=>{if(s!==null)return;s=u.changedTouches[0].identifier;const d=e.getBoundingClientRect();r=d.left+d.width/2,a=d.top+d.height/2});const l=u=>{for(let h=0;h<u.changedTouches.length;h++){const d=u.changedTouches[h];if(d.identifier===s){const p=d.clientX-r,g=d.clientY-a,_=Math.sqrt(p*p+g*g),m=Math.min(_,o),f=Math.atan2(g,p),x=Math.cos(f)*m,v=Math.sin(f)*m;t.style.transform=`translate(${x}px, ${v}px)`,n(x/o,v/o)}}},c=u=>{for(let h=0;h<u.changedTouches.length;h++)u.changedTouches[h].identifier===s&&(s=null,t.style.transform="translate(0px, 0px)",n(0,0))};window.addEventListener("touchmove",l,{passive:!0}),window.addEventListener("touchend",c,{passive:!0}),window.addEventListener("touchcancel",c,{passive:!0})}poll(){const e={thrust:this.touchInput.thrust,strafe:this.touchInput.strafe,pitch:this.touchInput.pitch,yaw:this.touchInput.yaw,boost:this.touchInput.boost},n=(navigator.getGamepads?navigator.getGamepads():[])[0];if(n&&n.connected){const r=g=>Math.abs(g)<.12?0:g,a=r(n.axes[0]??0),o=r(n.axes[1]??0),l=r(n.axes[2]??0),c=r(n.axes[3]??0);a!==0&&(e.yaw=a),o!==0&&(e.pitch=-o),l!==0&&(e.strafe=l),c!==0&&(e.thrust=-c);const u=n.buttons[0]?.pressed,h=n.buttons[1]?.pressed,d=n.buttons[3]?.pressed,p=n.buttons[7]?.pressed;(u||p)&&(e.boost=!0),h&&(e.thrust=-1),d&&!this._prevButtons.btnY&&this.onToggleCamera?.(),this._prevButtons.btnY=d}return e}}function iv(i,e,t=12,n=1){if(i<=0||e<=0||n<=0)return{altitudeKm:0,inAtmosphere:!1,normalizedAltitude:1,densityFraction:0,pressureAtm:0};const s=Math.max(i-e,0),r=t*8.5;if(s>=r)return{altitudeKm:s,inAtmosphere:!1,normalizedAltitude:1,densityFraction:0,pressureAtm:0};const a=Math.exp(-s/Math.max(t,1)),o=n*a,l=Math.min(Math.max(s/r,0),1);return{altitudeKm:s,inAtmosphere:a>1e-4,normalizedAltitude:l,densityFraction:a,pressureAtm:o}}function sv(i,e,t=18){if(e<=1e-4||i<=1)return{heatIntensity:0,dragForce:0,plasmaColor:"#ff7733",turbulenceShake:0};const n=.5*e*i**2,r=Math.max(i-t,0)/60*Math.sqrt(e)*1.5,a=Math.min(Math.max(r,0),1),l=Math.min(n*.08,i*.9);let c="#ff6a2b";a>.75?c="#aae8ff":a>.45&&(c="#ffd066");const u=a*.035+n*8e-4;return{heatIntensity:a,dragForce:l,plasmaColor:c,turbulenceShake:Math.min(u,.08)}}const rv=4.5;function av(i,e,t,n=45,s=.12){const r=[];let a=i.x,o=i.y,l=i.z,c=e.x,u=e.y,h=e.z;r.push({x:a,y:o,z:l,speed:Math.sqrt(c*c+u*u+h*h)});const d=t?t.length:0;for(let p=0;p<n;p++){let g=0,_=0,m=0;for(let f=0;f<d;f++){const x=t[f],v=x.position.x-a,S=x.position.y-o,R=x.position.z-l,w=v*v+S*S+R*R,A=Math.sqrt(w),U=Math.max(x.safeRadius*.8,.15);if(A<U)return r;const E=rv*(x.mass||1)/(w+.08),F=1/A;g+=v*F*E,_+=S*F*E,m+=R*F*E}c+=g*s,u+=_*s,h+=m*s,a+=c*s,o+=u*s,l+=h*s,r.push({x:a,y:o,z:l,speed:Math.sqrt(c*c+u*u+h*h)})}return r}class ov{constructor(){this._ctx=null,this._muted=!1,this._nodes={},this._available=!1}init(){if(this._ctx)return;const e=window.AudioContext||window.webkitAudioContext;if(!e){console.warn("[SoundSynthesizer] Web Audio API unavailable; running muted."),this._available=!1;return}try{this._ctx=new e,this._available=!0,this._buildAmbientDrone(),this._buildEngineHum()}catch(t){console.warn("[SoundSynthesizer] Failed to initialize audio:",t),this._available=!1}}_buildAmbientDrone(){const e=this._ctx,t=e.createGain();t.gain.value=.05,t.connect(e.destination);const n=e.createOscillator();n.type="sine",n.frequency.value=96;const s=e.createOscillator();s.type="sine",s.frequency.value=96.6,n.connect(t),s.connect(t),n.start(),s.start(),this._nodes.ambient={gain:t,osc1:n,osc2:s}}_buildEngineHum(){const e=this._ctx,t=e.createGain();t.gain.value=0,t.connect(e.destination);const n=e.createOscillator();n.type="triangle",n.frequency.value=60,n.connect(t),n.start(),this._nodes.hum={gain:t,osc:n}}setEngineIntensity(e){if(!this._available||!this._nodes.hum)return;const t=lv(e),n=this._ctx.currentTime;this._nodes.hum.gain.gain.setTargetAtTime(this._muted?0:t*.08,n,.15),this._nodes.hum.osc.frequency.setTargetAtTime(60+t*140,n,.2)}playChirp(){if(!this._available||this._muted)return;const e=this._ctx,t=e.currentTime,n=e.createOscillator(),s=e.createGain();n.type="sine",n.frequency.setValueAtTime(660,t),n.frequency.exponentialRampToValueAtTime(880,t+.12),s.gain.setValueAtTime(.001,t),s.gain.exponentialRampToValueAtTime(.06,t+.02),s.gain.exponentialRampToValueAtTime(1e-4,t+.35),n.connect(s),s.connect(e.destination),n.start(t),n.stop(t+.4)}setMuted(e){if(this._muted=!!e,!this._available)return;const t=this._ctx.currentTime;this._nodes.ambient?.gain.gain.setTargetAtTime(this._muted?0:.05,t,.2),this._muted&&this._nodes.hum?.gain.gain.setTargetAtTime(0,t,.2)}dispose(){if(this._ctx){for(const e of Object.values(this._nodes))e.osc1?.stop?.(),e.osc2?.stop?.(),e.osc?.stop?.();this._ctx.close?.(),this._ctx=null,this._available=!1}}}function lv(i){return Number.isFinite(i)?Math.min(Math.max(i,0),1):0}const ns=[{id:"lofi-cabin",name:"Station 1: Cozy Cabin Lo-Fi",frequency:"88.4 FM",genre:"Warm Generative Chords"},{id:"deep-space",name:"Station 2: Deep Space Resonance",frequency:"94.2 FM",genre:"Sub-Harmonic Drone Pad"},{id:"pulsar-radio",name:"Station 3: Cosmic Frequencies",frequency:"107.9 FM",genre:"Pulsar Rhythms & Clicks"},{id:"solar-wind",name:"Station 4: Solar Wind Ambient",frequency:"101.3 FM",genre:"Modulated Plasma & Sweeps"}],Ql=[[130.81,164.81,196,246.94],[110,130.81,164.81,196],[146.83,174.61,220,261.63],[98,123.47,146.83,196],[123.47,155.56,185,220],[174.61,220,261.63,329.63]];class cv{constructor(e=null){this._ctx=e,this.currentStationIndex=0,this.isPlaying=!1,this.volume=.65,this._masterGain=null,this._nodes=[],this._stepTimer=null,this._stepCounter=0}setContext(e){this._ctx=e}togglePower(){return this.isPlaying?(this.stop(),!1):(this.start(),!0)}start(){this._ctx&&(this._ctx.state==="suspended"&&this._ctx.resume(),this.isPlaying=!0,this._buildStationAudio())}stop(){this.isPlaying=!1,this._stepTimer&&(clearInterval(this._stepTimer),this._stepTimer=null),this._cleanupNodes()}setStation(e){return this.currentStationIndex=(e+ns.length)%ns.length,this.isPlaying&&this._buildStationAudio(),ns[this.currentStationIndex]}tuneNext(){return this.setStation(this.currentStationIndex+1)}tunePrev(){return this.setStation(this.currentStationIndex-1)}getCurrentStation(){return ns[this.currentStationIndex]}setVolume(e){this.volume=Math.min(Math.max(e,0),1),this._masterGain&&this._ctx&&this._masterGain.gain.setTargetAtTime(this.volume*.12,this._ctx.currentTime,.05)}_cleanupNodes(){if(this._nodes)for(const e of this._nodes)try{e.stop&&e.stop(),e.disconnect&&e.disconnect()}catch{}this._nodes=[]}_buildStationAudio(){if(!this._ctx||!this.isPlaying)return;this._cleanupNodes(),this._stepTimer&&clearInterval(this._stepTimer);const e=this._ctx;this._masterGain=e.createGain(),this._masterGain.gain.value=this.volume*.12,this._masterGain.connect(e.destination),this._nodes.push(this._masterGain);const t=ns[this.currentStationIndex];t.id==="lofi-cabin"?this._startLofiStation(e):t.id==="deep-space"?this._startDeepSpaceDrone(e):t.id==="pulsar-radio"?this._startPulsarRadio(e):t.id==="solar-wind"&&this._startSolarWind(e)}_startSolarWind(e){const t=e.sampleRate*2,n=e.createBuffer(1,t,e.sampleRate),s=n.getChannelData(0);let r=0,a=0,o=0,l=0,c=0,u=0,h=0;for(let f=0;f<t;f++){const x=Math.random()*2-1;r=.99886*r+x*.0555179,a=.99332*a+x*.0750759,o=.969*o+x*.153852,l=.8665*l+x*.3104856,c=.55*c+x*.5329522,u=-.7616*u-x*.016898,s[f]=(r+a+o+l+c+u+h+x*.5362)*.11,h=x*.115926}const d=e.createBufferSource();d.buffer=n,d.loop=!0;const p=e.createBiquadFilter();p.type="bandpass",p.frequency.setValueAtTime(320,e.currentTime),p.Q.setValueAtTime(4.5,e.currentTime);const g=e.createOscillator();g.type="sine",g.frequency.setValueAtTime(.15,e.currentTime);const _=e.createGain();_.gain.setValueAtTime(180,e.currentTime),g.connect(_),_.connect(p.frequency);const m=e.createGain();m.gain.setValueAtTime(.045,e.currentTime),d.connect(p),p.connect(m),m.connect(this._masterGain),d.start(),g.start(),this._nodes.push(d,p,g,_,m)}updatePlanetarySonification(e,t=1/0){if(!this._ctx||!this.isPlaying||!e||t>5e5){this._planetaryGain&&this._ctx&&this._planetaryGain.gain.setTargetAtTime(0,this._ctx.currentTime,.2);return}const n=this._ctx;this._planetaryGain||(this._planetaryGain=n.createGain(),this._planetaryGain.gain.value=0,this._planetaryGain.connect(n.destination),this._planetaryOsc=n.createOscillator(),this._planetaryOsc.type="sine",this._planetaryOsc.frequency.value=220,this._planetaryFilter=n.createBiquadFilter(),this._planetaryFilter.type="lowpass",this._planetaryFilter.frequency.value=400,this._planetaryOsc.connect(this._planetaryFilter),this._planetaryFilter.connect(this._planetaryGain),this._planetaryOsc.start());const r=Math.min(Math.max((5e5-t)/495e3,0),1)*.035*this.volume;this._planetaryGain.gain.setTargetAtTime(r,n.currentTime,.1);let a=180;e.kind==="black_hole"?a=55:e.kind==="star"||e.id==="sun"?a=120:e.id==="jupiter"?a=340:e.id==="saturn"?a=260:e.id==="earth"&&(a=440),this._planetaryOsc.frequency.setTargetAtTime(a+Math.sin(n.currentTime*1.5)*15,n.currentTime,.1)}_startLofiStation(e){const t=()=>{if(!this.isPlaying||!this._ctx)return;const n=this._stepCounter%Ql.length;this._stepCounter++;const s=Ql[n],r=e.currentTime,a=e.createBiquadFilter();a.type="lowpass",a.frequency.setValueAtTime(650,r),a.connect(this._masterGain);for(let o=0;o<s.length;o++){const l=e.createOscillator(),c=e.createGain();l.type=o===0?"triangle":"sine",l.frequency.setValueAtTime(s[o],r),c.gain.setValueAtTime(.001,r),c.gain.linearRampToValueAtTime(.035,r+.8),c.gain.exponentialRampToValueAtTime(1e-4,r+3.9),l.connect(c),c.connect(a),l.start(r),l.stop(r+4)}};t(),this._stepTimer=setInterval(t,4e3)}_startDeepSpaceDrone(e){const t=e.createBiquadFilter();t.type="lowpass",t.frequency.setValueAtTime(280,e.currentTime),t.connect(this._masterGain),[55,82.41,110].forEach((s,r)=>{const a=e.createOscillator(),o=e.createGain();a.type="sine",a.frequency.value=s+r*.35,o.gain.value=.045/(r+1),a.connect(o),o.connect(t),a.start(),this._nodes.push(a,o)})}_startPulsarRadio(e){const t=e.currentTime,n=e.createOscillator(),s=e.createStereoPanner?e.createStereoPanner():null,r=e.createGain();n.type="sawtooth",n.frequency.setValueAtTime(420,t);const a=e.createOscillator();a.type="square",a.frequency.setValueAtTime(3.2,t);const o=e.createGain();o.gain.value=.03,a.connect(o.gain),r.gain.value=.025,n.connect(r),s?(r.connect(s),s.connect(this._masterGain),this._nodes.push(s)):r.connect(this._masterGain),n.start(),a.start(),this._nodes.push(n,a,r,o)}}const is=[{id:"pale-blue-dot",title:"Pale Blue Dot",subtitle:"Carl Sagan · Voyager 1 Reflection",year:"1990",color:"#ffc17a",script:"Look again at that dot. That's here. That's home. That's us. On it everyone you love, everyone you know, everyone you ever heard of, every human being who ever was, lived out their lives. The aggregate of our joy and suffering, thousands of confident religions, ideologies, and economic doctrines... every saint and sinner in the history of our species lived there — on a mote of dust suspended in a sunbeam."},{id:"apollo-11",title:"Tranquility Base Audio Loop",subtitle:"NASA Apollo 11 Lunar Landing",year:"1969",color:"#9ee6ff",script:"Contact light. Shutdown. Houston, Tranquility Base here. The Eagle has landed. Roger, Tranquility, we copy you on the ground. You got a bunch of guys about to turn blue. We're breathing again. Thanks a lot. That's one small step for man, one giant leap for mankind."},{id:"voyager-record",title:"Voyager Golden Record",subtitle:"Greetings to the Cosmos & Whale Songs",year:"1977",color:"#f6d55c",script:"This is a present from a small, distant world, a token of our sounds, our science, our images, our music, our thoughts and our feelings. We are attempting to survive our time so we may live into yours."},{id:"captains-log",title:"Cosmos Cabin Flight Log",subtitle:"Captain's Stellar Drift Diary",year:"3024",color:"#58e890",script:"Stardate Log: Interstellar cruise systems active. Cabin coffee warm. The star charts drift gently outside the porthole as we journey across the infinite deep."}];class uv{constructor(e){this._ctx=e||null,this.currentTapeIndex=0,this.isPlaying=!1,this.volume=.7,this._synthOsc=null,this._noiseNode=null,this._gainNode=null,this._utterance=null}setContext(e){this._ctx=e}getCurrentTape(){return is[this.currentTapeIndex]}setTape(e){const t=is.findIndex(n=>n.id===e);t!==-1&&(this.currentTapeIndex=t,this.isPlaying&&(this.stop(),this.play()))}nextTape(){return this.currentTapeIndex=(this.currentTapeIndex+1)%is.length,this.isPlaying&&(this.stop(),this.play()),this.getCurrentTape()}prevTape(){return this.currentTapeIndex=(this.currentTapeIndex-1+is.length)%is.length,this.isPlaying&&(this.stop(),this.play()),this.getCurrentTape()}togglePlay(){return this.isPlaying?this.stop():this.play(),this.isPlaying}play(){this.isPlaying=!0,this._startTapeWarmthAudio(),this._startSpokenVoice()}stop(){this.isPlaying=!1,this._stopAudioNodes(),typeof window<"u"&&window.speechSynthesis&&window.speechSynthesis.cancel()}_startTapeWarmthAudio(){if(this._ctx)try{this._ctx.state==="suspended"&&this._ctx.resume(),this._gainNode=this._ctx.createGain(),this._gainNode.gain.setValueAtTime(this.volume*.15,this._ctx.currentTime),this._gainNode.connect(this._ctx.destination),this._synthOsc=this._ctx.createOscillator(),this._synthOsc.type="triangle",this._synthOsc.frequency.setValueAtTime(110,this._ctx.currentTime);const e=this._ctx.createOscillator();e.frequency.setValueAtTime(4.5,this._ctx.currentTime);const t=this._ctx.createGain();t.gain.setValueAtTime(1.8,this._ctx.currentTime),e.connect(t),t.connect(this._synthOsc.frequency),e.start(),this._synthOsc.connect(this._gainNode),this._synthOsc.start()}catch{}}_startSpokenVoice(){if(typeof window>"u"||!window.speechSynthesis)return;window.speechSynthesis.cancel();const e=this.getCurrentTape(),t=new window.SpeechSynthesisUtterance(e.script);t.rate=.88,t.pitch=.95,t.volume=this.volume,t.onend=()=>{this.isPlaying&&this.stop()},window.speechSynthesis.speak(t),this._utterance=t}_stopAudioNodes(){if(this._synthOsc){try{this._synthOsc.stop(),this._synthOsc.disconnect()}catch{}this._synthOsc=null}if(this._gainNode){try{this._gainNode.disconnect()}catch{}this._gainNode=null}}}function hv(i,{maxResults:e=8}={}){const t=String(i??"").trim();if(!t)return[];const n=_g(t,Qt).map(r=>({id:r.id,name:r.name,kind:"celestial",subtitle:r.location})),s=Mg(t).map(r=>({id:r.id,name:r.name,kind:"satellite",subtitle:`${r.agency} · ${r.status}`}));return[...n,...s].slice(0,Math.max(0,e))}class dv{constructor(e,t,n={}){if(!e)throw new Error("NavigationSearch requires a root element");this.root=e,this.store=t,this._onSelect=n.onSelect??(()=>{}),this._results=[],this._activeIndex=-1,this._render(),this._bindEvents(),this._unsubscribe=t.subscribe(s=>this._updateModeButton(s),s=>s.flightMode)}_render(){this.root.innerHTML=`
      <div class="nav-search" role="search">
        <label class="visually-hidden" for="search-input">Search an astronomical object or satellite</label>
        <input id="search-input" class="nav-search-input" type="text" autocomplete="off"
               placeholder="Search a planet, star, galaxy, or satellite…" />
        <button type="button" class="mode-toggle" title="Toggle autopilot / manual flight mode">
          Autopilot
        </button>
        <ul class="nav-search-results" hidden></ul>
      </div>
    `,this._input=this.root.querySelector(".nav-search-input"),this._resultsEl=this.root.querySelector(".nav-search-results"),this._modeButton=this.root.querySelector(".mode-toggle")}_bindEvents(){this._input.addEventListener("input",()=>this._handleInput()),this._input.addEventListener("keydown",e=>this._handleKeydown(e)),this._modeButton.addEventListener("click",()=>this._toggleMode()),document.addEventListener("click",e=>{this.root.contains(e.target)||this._closeResults()})}_handleInput(){const e=this._input.value;this.store.dispatch(Le.setSearchQuery(e));try{this._results=hv(e)}catch(t){console.error("[NavigationSearch] search failed:",t),this._results=[]}this._activeIndex=this._results.length>0?0:-1,this._renderResults()}_handleKeydown(e){if(this._results.length!==0)if(e.key==="ArrowDown")e.preventDefault(),this._activeIndex=(this._activeIndex+1)%this._results.length,this._renderResults();else if(e.key==="ArrowUp")e.preventDefault(),this._activeIndex=(this._activeIndex-1+this._results.length)%this._results.length,this._renderResults();else if(e.key==="Enter"){e.preventDefault();const t=this._results[this._activeIndex]??this._results[0];t&&this._selectResult(t)}else e.key==="Escape"&&this._closeResults()}_renderResults(){if(this._results.length===0){this._resultsEl.hidden=!0,this._resultsEl.innerHTML="";return}this._resultsEl.hidden=!1,this._resultsEl.innerHTML=this._results.map((e,t)=>`
        <li role="option" data-index="${t}" class="nav-result ${t===this._activeIndex?"active":""}">
          <span class="nav-result-name">${ec(e.name)}</span>
          <span class="nav-result-sub">${ec(e.subtitle)}</span>
        </li>`).join(""),this._resultsEl.querySelectorAll(".nav-result").forEach(e=>{e.addEventListener("click",()=>{const t=Number(e.getAttribute("data-index")),n=this._results[t];n&&this._selectResult(n)})})}_selectResult(e){this._input.value=e.name,this._closeResults(),this._onSelect(e)}_closeResults(){this._results=[],this._activeIndex=-1,this._resultsEl.hidden=!0,this._resultsEl.innerHTML=""}_toggleMode(){const t=this.store.getState().flightMode===ln.AUTOPILOT?ln.MANUAL:ln.AUTOPILOT;this.store.dispatch(Le.setFlightMode(t))}_updateModeButton(e){const t=e===ln.MANUAL;this._modeButton.textContent=t?"Manual":"Autopilot",this._modeButton.classList.toggle("mode-manual",t),this._modeButton.setAttribute("aria-label",t?"Switch to autopilot flight":"Switch to manual, hand-flown navigation")}dispose(){this._unsubscribe?.()}}function ec(i){const e=document.createElement("div");return e.textContent=i??"",e.innerHTML}const Yn=Object.freeze({EARTH_LIKE:"Directly Habitable",DOME_REQUIRED:"Dome Settlement Required",SUBTERRANEAN:"Subterranean / Radiation-Shielded Base",EXTREME_TERRAFORMING:"Extreme Terraforming Required",GAS_OUTPOST:"Gas Giant Cloud Outpost Only",UNINHABITABLE:"Uninhabitable"});function ru(i){const{surfaceTempC:e=-273,atmosphericPressureAtm:t=0,surfaceGravityG:n=0,radiationIndex:s=10,hasLiquidWater:r=!1,isGasGiant:a=!1}=i??{};if(a)return{score:2,classification:Yn.GAS_OUTPOST,factors:{temperature:0,pressure:0,gravity:0,radiation:0,water:0}};const o=da(e,-10,35,60),l=da(t,.5,1.5,.6),c=da(n,.6,1.4,.5),u=Fa(1-fr(s,10)/10),h=r?1:0,d=o*.3+l*.2+c*.15+u*.2+h*.15,p=Math.round(Fa(d)*100);return{score:p,classification:fv(p,{atmosphericPressureAtm:t,radiationIndex:s}),factors:{temperature:o,pressure:l,gravity:c,radiation:u,water:h}}}function fv(i,{atmosphericPressureAtm:e,radiationIndex:t}){return i>=75?Yn.EARTH_LIKE:i>=45?Yn.DOME_REQUIRED:fr(t,10)>=6||fr(e,0)<.01?i>=15?Yn.SUBTERRANEAN:Yn.UNINHABITABLE:i>=15?Yn.EXTREME_TERRAFORMING:Yn.UNINHABITABLE}function da(i,e,t,n){const s=fr(i,e-n);if(s>=e&&s<=t)return 1;const r=s<e?e-s:s-t,a=Math.max(n,1e-6);return Fa(Math.exp(-((r/a)**2)))}function Fa(i){return Number.isFinite(i)?Math.min(Math.max(i,0),1):0}function fr(i,e){return Number.isFinite(i)?i:e}function pv(i){const e=Object.entries(i??{}).filter(([,n])=>Number.isFinite(n)&&n>0),t=e.reduce((n,[,s])=>n+s,0);return t<=0?[]:e.map(([n,s])=>({gas:n,percent:Math.round(s/t*1e3)/10})).sort((n,s)=>s.percent-n.percent)}class mv{constructor(e,t){if(!e)throw new Error("DetailPanel requires a root element");this.root=e,this.store=t,this._currentId=null,this._unsubscribers=[t.subscribe(()=>this._render(),n=>`${n.selectedObject}|${n.ui.isDetailPanelOpen}`)],this._render()}show(e){this._currentId=e,this.store.dispatch(Le.selectObject(e)),this.store.dispatch(Le.toggleDetailPanel(!0))}close(){this.store.dispatch(Le.toggleDetailPanel(!1))}_render(){const e=this.store.getState();if(!e.ui.isDetailPanelOpen){this.root.innerHTML="",this.root.hidden=!0;return}const t=this._currentId??e.selectedObject,n=Li(t),s=n?null:rs(t);if(!n&&!s){this.root.innerHTML=`
        <div class="detail-panel empty">
          <p>Search for a world, star, galaxy, or satellite to see its story here.</p>
        </div>`,this.root.hidden=!1;return}this.root.hidden=!1,this.root.innerHTML=n?this._renderCelestial(n):this._renderSatellite(s),this.root.querySelector(".detail-close")?.addEventListener("click",()=>this.close()),this.root.querySelector('[data-action="open-habitability"]')?.addEventListener("click",()=>{this.store.dispatch(Le.toggleHabitability(!0))}),this.root.querySelector('[data-action="deploy-lander"]')?.addEventListener("click",r=>{const a=r.currentTarget.dataset.targetId;this.store.dispatch(Le.deployLander(a)),this.close()})}_renderCelestial(e){let t;try{t=ru(e.environment)}catch(o){console.error("[DetailPanel] habitability calc failed:",o),t={score:0,classification:"Unknown",factors:{}}}let n;try{n=D_(e.distanceFromEarthKm)}catch(o){console.error("[DetailPanel] travel calc failed:",o),n=null}const s=pv(e.environment.composition),r=t.score>=45,a=["moon","mars","europa","titan","enceladus"].includes(e.id);return`
      <div class="detail-panel">
        <button type="button" class="detail-close" aria-label="Close details">&times;</button>
        <h2 class="detail-title">${St(e.name)}</h2>
        <p class="detail-description">${St(e.description)}</p>

        ${a?`<button type="button" class="detail-lander-btn" data-action="deploy-lander" data-target-id="${e.id}">
                 🪐 Deploy Surface Exploration Probe
               </button>`:""}

        <dl class="detail-fields">
          <div><dt>Location</dt><dd>${St(e.location)}</dd></div>
          <div><dt>Galaxy</dt><dd>${St(e.galaxy)}</dd></div>
          <div><dt>Solar system</dt><dd>${St(e.solarSystem??"Not applicable")}</dd></div>
          <div><dt>Distance from Earth</dt><dd>${St(jl(e.distanceFromEarthKm))}</dd></div>
          <div><dt>Time to reach it</dt><dd>${n?St(ds(n.relativistic999c.seconds))+" at 0.999c":"Unknown"}</dd></div>
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
        <h2 class="detail-title">${St(e.name)}</h2>
        <p class="detail-description">${St(e.description)}</p>
        <dl class="detail-fields">
          <div><dt>Agency</dt><dd>${St(e.agency)}</dd></div>
          <div><dt>Launched</dt><dd>${St(String(e.launchYear))}</dd></div>
          <div><dt>Status</dt><dd>${St(e.status)}</dd></div>
          <div><dt>Purpose</dt><dd>${St(e.purpose)}</dd></div>
          <div><dt>Current location</dt><dd>${St(e.location)}</dd></div>
          <div><dt>Distance from Earth</dt><dd>${St(jl(e.distanceFromEarthKm))}</dd></div>
        </dl>
      </div>
    `}_renderAtmosphere(e){if(e.length===0)return'<span class="no-atmosphere">No meaningful atmosphere</span>';const t={N2:"#88ccff",O2:"#55ffaa",CO2:"#ffaa77",H2O:"#44aaff",CH4:"#ffdd44",H2:"#dd99ff",He:"#ffaacc",Ar:"#99eebb"};return`
      <div class="spectrometer-container">
        <div class="spectrometer-band" title="Spectral Absorption Profile">${e.map(s=>{const r=s.gas.replace(/[^a-zA-Z0-9]/g,""),a=t[r]||"#ffd27a";return`<div class="spec-bar-seg" style="width:${Math.max(s.percent,3)}%;background:${a}" title="${St(s.gas)}: ${s.percent}%"></div>`}).join("")}</div>
        <ul class="atmosphere-list">${e.map(s=>{const r=s.gas.replace(/[^a-zA-Z0-9]/g,"");return`<li><span class="gas-bullet" style="color:${t[r]||"#ffd27a"}">■</span> <span>${St(s.gas)}</span><span>${s.percent}%</span></li>`}).join("")}</ul>
      </div>
    `}_renderTravelBreakdown(e){return`
      <div class="travel-breakdown">
        <h3>How long would it take?</h3>
        <ul>
          ${[e.lightSpeed,e.relativistic999c,e.fusionDrive01c,e.chemicalRocket].map(n=>`<li><span>${St(n.label)}</span><span>${St(ds(n.seconds))}</span></li>`).join("")}
        </ul>
      </div>
    `}dispose(){this._unsubscribers.forEach(e=>e())}}function St(i){const e=document.createElement("div");return e.textContent=i??"",e.innerHTML}const gv={temperature:"Temperature",pressure:"Atmospheric pressure",gravity:"Surface gravity",radiation:"Radiation shielding",water:"Liquid water"};class _v{constructor(e,t){if(!e)throw new Error("HabitabilityMatrix requires a root element");this.root=e,this.store=t,this._unsubscribe=t.subscribe(()=>this._render(),n=>`${n.selectedObject}|${n.ui.isHabitabilityOpen}`),this._render()}_render(){const e=this.store.getState();if(!e.ui.isHabitabilityOpen){this.root.innerHTML="",this.root.hidden=!0;return}const t=Li(e.selectedObject);if(!t){this.root.hidden=!0;return}let n;try{n=ru(t.environment)}catch(s){console.error("[HabitabilityMatrix] compute failed:",s),this.root.hidden=!0;return}this.root.hidden=!1,this.root.innerHTML=`
      <div class="habitability-matrix">
        <button type="button" class="matrix-close" aria-label="Close habitability breakdown">&times;</button>
        <h3>Habitability breakdown — ${fa(t.name)}</h3>
        <p class="matrix-classification">${fa(n.classification)}</p>
        <ul class="matrix-factors">
          ${Object.entries(n.factors).map(([s,r])=>`
              <li>
                <span class="factor-label">${fa(gv[s]??s)}</span>
                <div class="factor-bar"><div class="factor-bar-fill" style="width:${Math.round(r*100)}%"></div></div>
              </li>`).join("")}
        </ul>
      </div>
    `,this.root.querySelector(".matrix-close")?.addEventListener("click",()=>{this.store.dispatch(Le.toggleHabitability(!1))})}dispose(){this._unsubscribe?.()}}function fa(i){const e=document.createElement("div");return e.textContent=i??"",e.innerHTML}class vv{constructor(e,t,n={}){if(!e)throw new Error("SatelliteList requires a root element");this.root=e,this.store=t,this._onSelect=n.onSelect??(()=>{}),this._unsubscribe=t.subscribe(s=>this._render(s),s=>s.ui.isSatelliteListOpen),this._render(t.getState().ui.isSatelliteListOpen)}toggle(e){this.store.dispatch(Le.toggleSatelliteList(e))}_render(e){if(!e){this.root.innerHTML="",this.root.hidden=!0;return}this.root.hidden=!1,this.root.innerHTML=`
      <div class="satellite-list">
        <div class="satellite-list-header">
          <h3>Launched satellites &amp; probes</h3>
          <button type="button" class="satellite-list-close" aria-label="Close satellite list">&times;</button>
        </div>
        <ul>
          ${wn.map(t=>`
            <li class="satellite-item" data-id="${t.id}">
              <span class="satellite-name">${pa(t.name)}</span>
              <span class="satellite-meta">${pa(t.agency)} · ${t.launchYear} · ${pa(t.status)}</span>
            </li>`).join("")}
        </ul>
      </div>
    `,this.root.querySelector(".satellite-list-close")?.addEventListener("click",()=>this.toggle(!1)),this.root.querySelectorAll(".satellite-item").forEach(t=>{t.addEventListener("click",()=>this._onSelect(t.getAttribute("data-id")))})}dispose(){this._unsubscribe?.()}}function pa(i){const e=document.createElement("div");return e.textContent=i??"",e.innerHTML}class xv{constructor(e,t){if(!e)throw new Error("CompassArrow requires a root element");this.root=e,this.store=t,this._render(),this._unsubscribe=t.subscribe(n=>this._setVisible(n===ln.MANUAL),n=>n.flightMode),this._setVisible(t.getState().flightMode===ln.MANUAL)}_render(){this.root.innerHTML=`
      <div class="compass-arrow" hidden>
        <svg viewBox="0 0 64 64" class="compass-svg" aria-hidden="true">
          <circle cx="32" cy="32" r="28" class="compass-ring" />
          <polygon points="32,10 40,40 32,32 24,40" class="compass-needle" />
        </svg>
        <span class="compass-distance">—</span>
        <span class="compass-hint">Fly toward the arrow</span>
      </div>
    `,this._arrowEl=this.root.querySelector(".compass-arrow"),this._needleEl=this.root.querySelector(".compass-needle"),this._distanceEl=this.root.querySelector(".compass-distance")}_setVisible(e){this._arrowEl&&(this._arrowEl.hidden=!e)}update(e){if(!e||!this._needleEl)return;const t=Math.atan2(e.directionToTarget.x,-e.directionToTarget.z)*(180/Math.PI);this._needleEl.setAttribute("transform",`rotate(${t} 32 32)`),this._needleEl.classList.toggle("aligned",e.aligned),this._distanceEl.textContent=`${e.distance.toFixed(1)} flight units`}dispose(){this._unsubscribe?.()}}const tr=[tt.COCKPIT,tt.THIRD_PERSON,tt.CINEMATIC],yv={[tt.COCKPIT]:"Cockpit",[tt.THIRD_PERSON]:"3rd Person",[tt.CINEMATIC]:"Cinematic"};class Sv{constructor(e,t,n={}){if(!e)throw new Error("ViewSwitcher requires a root element");this.root=e,this.store=t,this.onToggleRadio=n.onToggleRadio,this._render(),this._unsubscribe=t.subscribe(({mode:s,constellations:r})=>{this._highlight(s),this._highlightConstellations(r)},s=>({mode:s.cameraMode,constellations:s.ui.constellationsVisible})),this._highlight(t.getState().cameraMode)}_render(){this.root.innerHTML=`
      <div class="view-switcher-container">
        <div class="view-switcher" role="group" aria-label="Camera view">
          ${tr.map(e=>`<button type="button" class="view-btn" data-mode="${e}">${yv[e]}</button>`).join("")}
        </div>

        <div class="quick-tools-bar" role="group" aria-label="Exploration Tools">
          <button type="button" class="tool-btn" id="btn-toggle-constellations" title="Toggle Constellation Star Charts (O)">✨ Charts</button>
          <button type="button" class="tool-btn" id="btn-toggle-photo" title="Open Photo Studio (P)">📷 Photo</button>
          <button type="button" class="tool-btn" id="btn-toggle-logbook" title="Expedition Journal (L)">📖 Journal</button>
          <button type="button" class="tool-btn" id="btn-toggle-radio" title="Space Radio (R)">📻 Radio</button>
        </div>
      </div>
    `,this.root.querySelectorAll(".view-btn").forEach(e=>{e.addEventListener("click",()=>{this.store.dispatch(Le.setCameraMode(e.getAttribute("data-mode")))})}),this.root.querySelector("#btn-toggle-constellations")?.addEventListener("click",()=>{this.store.dispatch(Le.toggleConstellations())}),this.root.querySelector("#btn-toggle-photo")?.addEventListener("click",()=>{this.store.dispatch(Le.togglePhotoMode(!0))}),this.root.querySelector("#btn-toggle-logbook")?.addEventListener("click",()=>{this.store.dispatch(Le.toggleLogbook(!0))}),this.root.querySelector("#btn-toggle-radio")?.addEventListener("click",()=>{this.onToggleRadio?.()})}cycle(){const e=this.store.getState().cameraMode,t=tr.indexOf(e),n=tr[(t+1)%tr.length];this.store.dispatch(Le.setCameraMode(n))}_highlight(e){this.root.querySelectorAll(".view-btn").forEach(t=>{t.classList.toggle("active",t.getAttribute("data-mode")===e)})}_highlightConstellations(e){const t=this.root.querySelector("#btn-toggle-constellations");t&&t.classList.toggle("active",!!e)}dispose(){this._unsubscribe?.()}}class Mv{constructor(e,t,n={}){if(!e)throw new Error("TelemetryHUD requires a root element");this.root=e,this.store=t,this._onToggleHyperdrive=n.onToggleHyperdrive??(()=>{}),this._onZoomIn=n.onZoomIn??(()=>{}),this._onZoomOut=n.onZoomOut??(()=>{}),this._render(),this._unsubscribe=t.subscribe(s=>this._update(s),s=>s.flightTelemetry)}_render(){this.root.innerHTML=`
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
    `,this._els={speed:this.root.querySelector('[data-field="speed"]'),eta:this.root.querySelector('[data-field="eta"]'),shipTime:this.root.querySelector('[data-field="ship-time"]'),earthTime:this.root.querySelector('[data-field="earth-time"]'),driveStatus:this.root.querySelector('[data-field="drive-status"]'),driveBadge:this.root.querySelector(".drive-status-badge"),warpButtons:this.root.querySelectorAll(".warp-btn")},this._els.driveBadge?.addEventListener("click",()=>{this._onToggleHyperdrive()}),this.root.querySelector("#btn-open-probe-builder")?.addEventListener("click",()=>{this.store.dispatch({type:"TOGGLE_PROBE_BUILDER",payload:!0})}),this.root.querySelectorAll(".warp-btn").forEach(e=>{e.addEventListener("click",()=>{const t=Number(e.getAttribute("data-warp"))||1;this.store.dispatch({type:"SET_TIME_WARP",payload:t}),this.root.querySelectorAll(".warp-btn").forEach(n=>n.classList.toggle("active",n===e))})}),this.root.querySelector('[data-action="zoom-in"]')?.addEventListener("click",()=>{this._onZoomIn()}),this.root.querySelector('[data-action="zoom-out"]')?.addEventListener("click",()=>{this._onZoomOut()})}updateDriveMode(e){!this._els.driveStatus||!this._els.driveBadge||(this._els.driveStatus.textContent=e?"Hyperdrive":"Sublight",this._els.driveBadge.classList.toggle("hyperdrive-active",!!e))}_update(e){e&&(this._els.speed.textContent=`${e.currentSpeedC.toFixed(3)}c`,this._els.eta.textContent=e.etaSeconds>0?ds(e.etaSeconds):"—",this._els.shipTime.textContent=ds(e.timeDilationShipSec),this._els.earthTime.textContent=ds(e.timeDilationEarthSec))}dispose(){this._unsubscribe?.()}}class bv{constructor(e,{range:t=20}={}){if(!e)throw new Error("RadarCanvas requires a root element");this.root=e,this.range=t,this.root.innerHTML='<canvas class="radar-canvas" width="140" height="140" aria-label="Radar"></canvas>',this.canvas=this.root.querySelector("canvas"),this.ctx=this.canvas.getContext("2d")}render(e,t,n){const s=this.ctx;if(!s)return;const{width:r,height:a}=this.canvas,o=r/2,l=a/2,c=(r/2-8)/this.range;s.clearRect(0,0,r,a),s.fillStyle="rgba(20, 18, 30, 0.55)",s.beginPath(),s.arc(o,l,r/2-2,0,Math.PI*2),s.fill(),s.strokeStyle="rgba(255, 220, 180, 0.25)",s.beginPath(),s.arc(o,l,r/2-2,0,Math.PI*2),s.stroke();for(const u of n??[]){const h=u.x-e.x,d=u.z-e.z,p=Ev(h,d,-t),g=o+p.x*c,_=l+p.y*c;Math.hypot(g-o,_-l)>r/2-4||(s.fillStyle=u.color??"#ffd27a",s.beginPath(),s.arc(g,_,2.5,0,Math.PI*2),s.fill())}s.fillStyle="#fff6e6",s.beginPath(),s.moveTo(o,l-5),s.lineTo(o-4,l+4),s.lineTo(o+4,l+4),s.closePath(),s.fill()}}function Ev(i,e,t){const n=Math.cos(t),s=Math.sin(t);return{x:i*n-e*s,y:i*s+e*n}}const tc=[{id:"natural",name:"Natural",css:"none"},{id:"cozy-film",name:"Cozy Film",css:"sepia(0.25) contrast(1.1) brightness(1.05) saturate(1.15)"},{id:"deep-space",name:"Deep Cosmos",css:"contrast(1.25) brightness(0.95) saturate(1.3) hue-rotate(10deg)"},{id:"retro-amber",name:"Retro Amber",css:"sepia(0.65) saturate(1.4) hue-rotate(-15deg)"},{id:"cyberpunk",name:"Cyberpunk Neon",css:"contrast(1.3) saturate(1.7) hue-rotate(180deg)"}];class Tv{constructor(e,t,n){this.root=e,this.store=t,this.canvas=n.canvas,this.camera=n.camera,this.onShowToast=n.onShowToast,this.activeFilterIndex=0,this.savedFov=this.camera?.fov??60,this.isOpen=!1,this._render(),this._wireEvents(),this.store.subscribe(s=>this._onStateChange(s),s=>s.ui.isPhotoModeOpen)}_render(){this.root.innerHTML=`
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
              ${tc.map((e,t)=>`
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
    `}_wireEvents(){const e=this.root.querySelector("#photo-fov-slider"),t=this.root.querySelector("#photo-fov-val"),n=this.root.querySelector("#photo-snap-btn"),s=this.root.querySelector("#photo-postcard-btn"),r=this.root.querySelector("#photo-close-btn"),a=this.root.querySelectorAll(".photo-filter-btn");e?.addEventListener("input",o=>{const l=Number(o.target.value);t&&(t.textContent=`${l}°`),this.camera&&(this.camera.fov=l,this.camera.updateProjectionMatrix())}),a.forEach(o=>{o.addEventListener("click",()=>{a.forEach(c=>c.classList.remove("active")),o.classList.add("active");const l=Number(o.getAttribute("data-idx"));this.setFilter(l)})}),n?.addEventListener("click",()=>this.capture()),s?.addEventListener("click",()=>this.exportPostcard()),r?.addEventListener("click",()=>this.close())}setFilter(e){this.activeFilterIndex=e;const t=tc[e];this.canvas&&t&&(this.canvas.style.filter=t.css)}capture(){if(this.canvas)try{const e=this.canvas.toDataURL("image/png"),t=document.createElement("a");t.download=`cosmos-cabin-snapshot-${Date.now()}.png`,t.href=e,document.body.appendChild(t),t.click(),document.body.removeChild(t),this.onShowToast?.("📸 Snapshot saved to your downloads!")}catch(e){console.warn("[PhotoMode] Capture failed:",e),this.onShowToast?.("Couldn't save snapshot directly.")}}exportPostcard(){if(this.canvas)try{const e=this.store.getState(),t=e.selectedObject?e.selectedObject.toUpperCase():"COSMOS CABIN",n=document.createElement("canvas"),s=1280,r=720;n.width=s,n.height=r;const a=n.getContext("2d");a.fillStyle="#1b1715",a.fillRect(0,0,s,r),a.drawImage(this.canvas,40,40,s-80,r-140),a.strokeStyle="#d4a359",a.lineWidth=4,a.strokeRect(30,30,s-60,r-60),a.fillStyle="#ffb854",a.font="bold 28px sans-serif",a.fillText(`★ GREETINGS FROM ${t} ★`,60,r-55),a.fillStyle="#ffffff99",a.font="16px monospace",a.fillText(`COSMOS CABIN EXPEDITION • ${new Date().toLocaleDateString()}`,60,r-30),a.strokeStyle="#d4a35988",a.lineWidth=2,a.strokeRect(s-180,r-95,130,55),a.fillStyle="#d4a359",a.font="12px monospace",a.fillText("INTERSTELLAR",s-165,r-70),a.fillText("POSTAGE PAID",s-165,r-50);const o=n.toDataURL("image/png"),l=document.createElement("a");l.download=`cosmos-cabin-postcard-${t.toLowerCase()}-${Date.now()}.png`,l.href=o,document.body.appendChild(l),l.click(),document.body.removeChild(l),this.onShowToast?.("💌 Vintage travel postcard generated & downloaded!")}catch(e){console.warn("[PhotoMode] Postcard generation failed:",e),this.onShowToast?.("Couldn't generate postcard.")}}_onStateChange(e){this.isOpen=!!e;const t=this.root.querySelector("#photo-mode-overlay");t&&(t.hidden=!this.isOpen),this.isOpen?(this.savedFov=this.camera?.fov??60,this.store.dispatch(Le.toggleHud(!1))):(this.canvas&&(this.canvas.style.filter="none"),this.camera&&(this.camera.fov=this.savedFov,this.camera.updateProjectionMatrix()),this.store.dispatch(Le.toggleHud(!0)))}open(){this.store.dispatch(Le.togglePhotoMode(!0))}close(){this.store.dispatch(Le.togglePhotoMode(!1))}}const nc=[{id:"voyager-grand-tour",title:"The Grand Tour: In the Wake of Voyager",subtitle:"Retrace humanity's greatest outer-planet trajectory",icon:"🚀",description:"Embark on the iconic gravity-assist journey across the gas giants, ice worlds, and onward past the heliopause into true interstellar space.",badge:{id:"badge-voyager",name:"Interstellar Pioneer",icon:"🛰️",description:"Completed the historic outer planetary grand tour."},waypoints:[{targetId:"earth",title:"Cape Canaveral Launch",briefing:"Launch day. Earth's blue cradle recedes beneath us as we ignite the cruise thrusters toward the giant worlds."},{targetId:"jupiter",title:"The Great Gravity Slingshot",briefing:"Approaching Jupiter. The massive gravity well accelerates our ship, swinging us around the Great Red Spot toward the ringed world."},{targetId:"saturn",title:"Jewel of the Solar System",briefing:"Saturn's majestic ice rings reflect warm amber sunlight. We skim the ring plane and calibrate our long-range radio antenna."},{targetId:"uranus",title:"The Tilted Ice Giant",briefing:"Rolling on its side, Uranus glows with serene cyan methane clouds. The cabin sensors record deep magnetospheric whispers."},{targetId:"neptune",title:"The Azure Winds",briefing:"Neptune's supersonic storms swirl in deep cobalt blues. Triton's cryovolcanoes glisten in the weak, distant Sun."},{targetId:"voyager-1",title:"The Edge of the Sun's Realm",briefing:"Rendezvous with the legendary Voyager 1 probe beyond the termination shock. Humanity's Golden Record carries our heartbeat into the stars."}]},{id:"habitable-horizons",title:"Habitable Horizons: Searching for Earth 2.0",subtitle:"Surveying subsurface oceans and Goldilocks exoplanets",icon:"🌱",description:"Investigate planetary worlds with liquid water potential, geothermal vents, and atmospheric biosignatures across the galaxy.",badge:{id:"badge-astrobiologist",name:"Master Astrobiologist",icon:"🧬",description:"Surveyed the galaxy's most promising candidate habitable worlds."},waypoints:[{targetId:"mars",title:"Ancient Riverbeds of Jezero",briefing:"Scanning dried deltas and Martian iron dunes. Perseverance's tracks lead into fossilized lake sediments."},{targetId:"europa",title:"Subsurface Oceanic Depths",briefing:"Jupiter's moon Europa hides a global warm saltwater ocean beneath 20km of cracked tidal ice sheets."},{targetId:"enceladus",title:"Tiger Stripe Geysers",briefing:"Flying directly through Enceladus's cryovolcanic geyser plumes. Hydrothermal vent signatures confirmed on ship spectrometers."},{targetId:"proxima-b",title:"Our Nearest Exoplanet Neighbor",briefing:"Orbiting the rocky world around Proxima Centauri, just 4.24 light-years from home in the habitable zone."},{targetId:"trappist-1e",title:"The Crown of TRAPPIST-1",briefing:"A temperate, Earth-sized world orbiting an ultra-cool red dwarf. Liquid oceans reflect the dim crimson sunrise."}]},{id:"cosmic-leviathans",title:"Cosmic Leviathans: Extreme Relativistic Monsters",subtitle:"Navigate magnetic singularities and supermassive black holes",icon:"🕳️",description:"Fly past ultra-dense neutron stars, spinning pulsar beacons, and the supermassive black hole anchor at the Milky Way core.",badge:{id:"badge-singularity",name:"Singularity Navigator",icon:"🌀",description:"Crossed relativistic event horizons and survived deep gravitational wells."},waypoints:[{targetId:"sun",title:"Our Stellar Engine",briefing:"Calibrating heat shields near the solar corona. Solar flares arch 100,000 km into the surrounding vacuum."},{targetId:"crab-pulsar",title:"Spinning Neutron Dynamo",briefing:"A city-sized stellar core spinning 30 times per second, beaming rhythmic X-ray lighthouse pulses into our cockpit radio."},{targetId:"cygnus-x1",title:"The Stellar Singularity",briefing:"First confirmed stellar-mass black hole. Blazing accretion gas spirals into the dark gravitational whirlpool."},{targetId:"sagittarius-a-star",title:"Supermassive Heart of the Milky Way",briefing:"4 million solar masses concentrated in a point. Gravitational lensing warps starfield constellations into perfect Einstein rings."}]}],ma=[{id:"home-planet",name:"🌍 Home Base",desc:"Began journey from Earth orbit",condition:i=>i.some(e=>e.id==="earth")},{id:"lunar-reach",name:"🌕 Lunar Footsteps",desc:"Explored Earth's Moon",condition:i=>i.some(e=>e.id==="moon")},{id:"red-planet",name:"🔴 Red Sands",desc:"Traveled to Mars",condition:i=>i.some(e=>e.id==="mars")},{id:"gas-giant",name:"🪐 Ring & Storms",desc:"Visited Jupiter or Saturn",condition:i=>i.some(e=>e.id==="jupiter"||e.id==="saturn")},{id:"singularity",name:"🕳️ Event Horizon",desc:"Approached Sagittarius A*",condition:i=>i.some(e=>e.id==="sagittarius-a-star")},{id:"satellite-chaser",name:"🛰️ Spacecraft Historian",desc:"Located at least 2 historical satellites",condition:i=>i.filter(e=>e.kind==="satellite").length>=2},{id:"badge-voyager",name:"🚀 Voyager Pioneer",desc:"Completed The Grand Tour: In the Wake of Voyager",condition:(i,e)=>e?.completedExpeditions?.some(t=>t.expeditionId==="voyager-grand-tour")},{id:"badge-astrobiologist",name:"🌱 Master Astrobiologist",desc:"Completed Habitable Horizons: Searching for Earth 2.0",condition:(i,e)=>e?.completedExpeditions?.some(t=>t.expeditionId==="habitable-horizons")},{id:"badge-singularity",name:"🌀 Singularity Navigator",desc:"Completed Cosmic Leviathans: Relativistic Monsters",condition:(i,e)=>e?.completedExpeditions?.some(t=>t.expeditionId==="cosmic-leviathans")}];class wv{constructor(e,t,n={}){this.root=e,this.store=t,this.onSelectTarget=n.onSelectTarget,this.activeTab="discoveries",this.activeFilter="all",this._render(),this._wireEvents(),this.store.subscribe(({isOpen:s})=>this._onStateChange(s),s=>({isOpen:s.ui.isLogbookOpen,discoveries:s.discoveries,completedExpeditions:s.completedExpeditions}))}_render(){this.root.innerHTML=`
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
                <span id="logbook-stat-discovered" class="stat-value">1 / ${Qt.length+wn.length}</span>
              </div>
              <div class="stat-card">
                <span class="stat-label">Badges Unlocked</span>
                <span id="logbook-stat-badges" class="stat-value">1 / ${ma.length}</span>
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
    `}_wireEvents(){const e=this.root.querySelector("#logbook-modal-backdrop"),t=this.root.querySelector("#logbook-close-btn"),n=this.root.querySelectorAll(".tab-btn"),s=this.root.querySelectorAll(".filter-chip");t?.addEventListener("click",()=>this.close()),e?.addEventListener("click",r=>{r.target===e&&this.close()}),n.forEach(r=>{r.addEventListener("click",()=>{n.forEach(l=>l.classList.remove("active")),r.classList.add("active"),this.activeTab=r.getAttribute("data-tab")||"discoveries";const a=this.root.querySelector("#tab-content-discoveries"),o=this.root.querySelector("#tab-content-expeditions");a&&(a.hidden=this.activeTab!=="discoveries"),o&&(o.hidden=this.activeTab!=="expeditions"),this.activeTab==="expeditions"&&this._renderExpeditions()})}),s.forEach(r=>{r.addEventListener("click",()=>{s.forEach(a=>a.classList.remove("active")),r.classList.add("active"),this.activeFilter=r.getAttribute("data-filter")||"all",this._updateList()})})}_onStateChange(e){const t=this.root.querySelector("#logbook-modal-backdrop");t&&(t.hidden=!e),e&&(this._updateContent(),this._renderExpeditions())}_updateContent(){const e=this.store.getState(),t=e.discoveries||[],n=this.root.querySelector("#logbook-stat-discovered");n&&(n.textContent=`${t.length} / ${Qt.length+wn.length}`);const s=this.root.querySelector("#logbook-badges-grid");if(s){let r=0;s.innerHTML=ma.map(o=>{const l=o.condition(t,e);return l&&r++,`
          <div class="badge-item ${l?"unlocked":"locked"}">
            <span class="badge-icon">${l?o.name.split(" ")[0]:"🔒"}</span>
            <div class="badge-info">
              <strong>${o.name}</strong>
              <p>${o.desc}</p>
            </div>
          </div>
        `}).join("");const a=this.root.querySelector("#logbook-stat-badges");a&&(a.textContent=`${r} / ${ma.length}`)}this._updateList()}_renderExpeditions(){const e=this.root.querySelector("#expeditions-container");if(!e)return;const t=this.store.getState(),n=t.activeExpedition,s=t.completedExpeditions||[];e.innerHTML=nc.map(r=>{const a=s.some(u=>u.expeditionId===r.id),o=n&&n.id===r.id,l=o?n.currentStepIndex:0,c=r.waypoints.map((u,h)=>{const d=a||o&&h<l;return`
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
      `}).join(""),e.querySelectorAll(".exp-action-btn").forEach(r=>{r.addEventListener("click",()=>{const a=r.getAttribute("data-exp-id");if(!a)return;const o=nc.find(u=>u.id===a);if(!o)return;const l=this.store.getState();(!l.activeExpedition||l.activeExpedition.id!==a)&&this.store.dispatch(Le.startExpedition(a));const c=o.waypoints[0].targetId;this.close(),this.onSelectTarget?.(c,"celestial")})})}_updateList(){const e=this.root.querySelector("#logbook-list");if(!e)return;const s=(this.store.getState().discoveries||[]).filter(r=>this.activeFilter==="all"?!0:this.activeFilter==="satellite"?r.kind==="satellite":r.kind!=="satellite");if(s.length===0){e.innerHTML='<div class="logbook-empty">No discoveries in this category yet. Take flight and explore the stars!</div>';return}e.innerHTML=s.map(r=>{const a=r.discoveredAt?new Date(r.discoveredAt).toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"}):"Initial";return`
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
        `}).join(""),e.querySelectorAll(".logbook-fly-btn").forEach(r=>{r.addEventListener("click",()=>{const a=r.getAttribute("data-id"),o=r.getAttribute("data-kind");a&&(this.close(),this.onSelectTarget?.(a,o))})})}open(){this.store.dispatch(Le.toggleLogbook(!0))}close(){this.store.dispatch(Le.toggleLogbook(!1))}}const Av=299792.458,ss=Object.freeze({CUBESAT:{id:"CUBESAT",name:"Nano CubeSat (3U)",massKg:12,basePowerW:40,scienceSensor:"Magnetometer & Optical Imager",icon:"🛰️"},ORBITER:{id:"ORBITER",name:"Deep Space Orbiter",massKg:450,basePowerW:320,scienceSensor:"Radar Altimeter & Spectrometer",icon:"🛸"},SOLAR_SAIL:{id:"SOLAR_SAIL",name:"Photonic Solar Sail",massKg:85,basePowerW:150,scienceSensor:"Cosmic Ray Detector & Laser Comms",icon:"⛵"}});function Cv(i){const t=Math.max(0,i||0)/Av,n=t*2;let s;if(t<1)s=`${Math.round(t*1e3)} ms`;else if(t<60)s=`${t.toFixed(1)} sec`;else if(t<3600){const r=Math.floor(t/60),a=Math.round(t%60);s=`${r}m ${a}s`}else{const r=Math.floor(t/3600),a=Math.round(t%3600/60);s=`${r}h ${a}m`}return{oneWaySeconds:t,roundTripSeconds:n,formatted:s}}function Rv(i,e=200){const t=Math.max(i||1,.05),n=1/(t*t),s=e*n;let r="OPTIMAL";return n<.04?r="RTG_ONLY":n<.25?r="CRITICAL":n<.8&&(r="REDUCED"),{solarFluxFraction:n,currentPowerW:s,status:r}}class Lv{constructor(e,t,n={}){this.root=e,this.store=t,this.onShowToast=n.onShowToast,this.selectedChassis="CUBESAT",this.selectedParent="earth",this.probeName="Aegis-1",this.orbitRadiusKm=12e3,this.inclinationDeg=28,this.init(),this.store.subscribe(s=>this.toggle(s),s=>s.ui.isProbeBuilderOpen)}init(){this.modalEl=document.createElement("div"),this.modalEl.className="probe-builder-backdrop",this.modalEl.hidden=!0,this.root.appendChild(this.modalEl),this.render()}toggle(e){this.modalEl.hidden=!e,e&&this.render()}render(){const e=Qt.find(a=>a.id===this.selectedParent)||Qt[3],t=ss[this.selectedChassis]||ss.CUBESAT,n=(e.distanceFromEarthKm+149597870)/149597870,s=Rv(n,t.basePowerW),r=Cv(e.distanceFromEarthKm);this.modalEl.innerHTML=`
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
                ${Qt.filter(a=>["planet","moon","star"].includes(a.type)).map(a=>`
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
    `,this.bindEvents()}bindEvents(){this.modalEl.querySelector("#builder-close-x")?.addEventListener("click",()=>this.close()),this.modalEl.querySelector("#builder-cancel-btn")?.addEventListener("click",()=>this.close()),this.modalEl.querySelectorAll(".chassis-card").forEach(r=>{r.addEventListener("click",()=>{this.selectedChassis=r.dataset.chassis,this.render()})}),this.modalEl.querySelector("#builder-name-input")?.addEventListener("input",r=>{this.probeName=r.target.value}),this.modalEl.querySelector("#builder-parent-select")?.addEventListener("change",r=>{this.selectedParent=r.target.value,this.render()}),this.modalEl.querySelector("#builder-radius-slider")?.addEventListener("input",r=>{this.orbitRadiusKm=Number(r.target.value);const a=this.modalEl.querySelector("#radius-val");a&&(a.textContent=`${(this.orbitRadiusKm/1e3).toFixed(0)}k km`)}),this.modalEl.querySelector("#builder-inc-slider")?.addEventListener("input",r=>{this.inclinationDeg=Number(r.target.value);const a=this.modalEl.querySelector("#inc-val");a&&(a.textContent=`${this.inclinationDeg}°`)}),this.modalEl.querySelector("#builder-launch-btn")?.addEventListener("click",()=>{this.launch()})}launch(){const e=ss[this.selectedChassis]||ss.CUBESAT,t=`custom-probe-${Date.now()}`,n=this.probeName.trim()||`Probe-${Math.floor(Math.random()*900+100)}`,s={id:t,name:n,chassis:this.selectedChassis,parentId:this.selectedParent,orbitRadiusKm:this.orbitRadiusKm,inclinationDeg:this.inclinationDeg,icon:e.icon,launchedAt:Date.now(),distanceFromEarthKm:15e4};this.store.dispatch(Le.addCustomSatellite(s)),this.onShowToast?.(`🚀 Satellite "${n}" deployed into orbit!`),this.close()}close(){this.store.dispatch(Le.toggleProbeBuilder(!1))}}const nr={mars:{name:"Mars: Jezero Crater Surface",skyColorTop:9061674,skyColorBottom:14255445,fogColor:11887931,groundColor:11026980,groundRoughness:.9,ambientLight:16752762,sunLight:16772304,dustColor:14253380,gravity:.38,soilElements:[{name:"Iron Oxide (Rust)",pct:"43.2%",color:"#d94b26"},{name:"Silicon Dioxide",pct:"38.5%",color:"#e8c39e"},{name:"Magnesium Perchlorate",pct:"8.4%",color:"#98d8aa"},{name:"Hydrated Clays",pct:"9.9%",color:"#5ea3d0"}]},moon:{name:"The Moon: Mare Tranquillitatis",skyColorTop:328968,skyColorBottom:657940,fogColor:526352,groundColor:7368824,groundRoughness:.95,ambientLight:6316144,sunLight:16777215,dustColor:11184810,gravity:.166,soilElements:[{name:"Anorthosite (Plagioclase)",pct:"52.0%",color:"#d6d6d6"},{name:"Basaltic Pyroxene",pct:"28.5%",color:"#666666"},{name:"Ilmenite (Titanium)",pct:"14.2%",color:"#8a9ba8"},{name:"Solar Wind Helium-3",pct:"5.3%",color:"#ffd27a"}]},europa:{name:"Europa: Chaos Conamara Ice Plains",skyColorTop:264212,skyColorBottom:1321028,fogColor:1057852,groundColor:14086399,groundRoughness:.25,ambientLight:7377072,sunLight:14216959,dustColor:11200767,gravity:.134,soilElements:[{name:"Pure Water Ice (H2O)",pct:"74.6%",color:"#62e8ff"},{name:"Magnesium Sulfate Salts",pct:"16.8%",color:"#ffffff"},{name:"Sulfuric Acid Hydrates",pct:"6.2%",color:"#ffd700"},{name:"Subsurface Organic Compounds",pct:"2.4%",color:"#58e890"}]},titan:{name:"Titan: Shangri-La Methane Dunes",skyColorTop:4860421,skyColorBottom:12086292,fogColor:10377230,groundColor:2825487,groundRoughness:.7,ambientLight:12877360,sunLight:14461024,dustColor:14714912,gravity:.14,soilElements:[{name:"Tholin Hydrocarbon Solids",pct:"58.4%",color:"#9e4812"},{name:"Solid Methane & Ethane Ice",pct:"26.3%",color:"#38a3a5"},{name:"Water Ice Bedrock",pct:"11.1%",color:"#80ced6"},{name:"Hydrogen Cyanide Polymers",pct:"4.2%",color:"#e29578"}]},enceladus:{name:"Enceladus: South Polar Tiger Stripe Geysers",skyColorTop:132367,skyColorBottom:990256,fogColor:726310,groundColor:15792895,groundRoughness:.15,ambientLight:9089232,sunLight:15595260,dustColor:14742783,gravity:.011,soilElements:[{name:"Cryovolcanic Water Ice",pct:"82.1%",color:"#b5f5ff"},{name:"Sodium Chloride (Sea Salt)",pct:"9.5%",color:"#f8f9fa"},{name:"Silica Nanoparticles (Hydrothermal)",pct:"6.2%",color:"#ffd166"},{name:"Complex Macromolecular Organics",pct:"2.2%",color:"#06d6a0"}]}};class Pv{constructor(e,t,n={}){this.root=e,this.store=t,this.onShowToast=n.onShowToast,this.scene=new Uc,this.camera=new Vt(65,window.innerWidth/window.innerHeight,.1,1e3),this.camera.position.set(0,1.6,0),this.active=!1,this.currentTargetId="mars",this.isDrilling=!1,this.pitch=0,this.yaw=0,this.initDOM(),this.initScene(),this.store.subscribe(s=>{s.active&&!this.active?this.enter(s.targetId||"mars"):!s.active&&this.active&&this.exit()},s=>s.landerState)}initDOM(){this.overlayEl=document.createElement("div"),this.overlayEl.className="surface-lander-overlay",this.overlayEl.hidden=!0,this.root.appendChild(this.overlayEl),this.overlayEl.innerHTML=`
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
    `,this.overlayEl.querySelector("#surface-ascend-btn")?.addEventListener("click",()=>{this.store.dispatch(Le.closeLander())}),this.overlayEl.querySelector("#science-drill-btn")?.addEventListener("click",()=>{this.runSoilAnalysis()}),window.addEventListener("mousemove",e=>{this.active&&(e.buttons===1||e.buttons===2)&&(this.yaw-=e.movementX*.0025,this.pitch-=e.movementY*.0025,this.pitch=Math.max(-Math.PI/2.2,Math.min(Math.PI/2.2,this.pitch)))})}initScene(){const e=new ti(120,120,64,64);e.rotateX(-Math.PI/2);const t=e.attributes.position;for(let u=0;u<t.count;u++){const h=t.getX(u),d=t.getZ(u),p=Math.sin(h*.15)*Math.cos(d*.15)*.45+Math.sin(h*.05+d*.05)*.8;t.setY(u,p)}e.computeVertexNormals(),this.groundMat=new Ze({color:11026980,roughness:.9}),this.groundMesh=new ee(e,this.groundMat),this.scene.add(this.groundMesh);const n=new et(200,32,16);this.skyMat=new $e({color:9061674,side:It}),this.skyMesh=new ee(n,this.skyMat),this.scene.add(this.skyMesh),this.ambientLight=new Kc(16752762,.8),this.sunLight=new tg(16772304,1.5),this.sunLight.position.set(30,45,20),this.scene.add(this.ambientLight,this.sunLight);const s=new Qe,r=new Ze({color:13935449,metalness:.8,roughness:.2}),a=new ee(new gt(.04,.04,1.2),r);a.position.set(-.6,-.4,-.7),a.rotation.set(.3,0,-.4);const o=a.clone();o.position.x=.6,o.rotation.z=.4;const l=new Ze({color:16117995,roughness:.4}),c=new ee(new et(.2,16,8,0,Math.PI*2,0,Math.PI/2),l);c.position.set(.5,.2,-.9),c.rotation.x=-.5,s.add(a,o,c),this.scene.add(s)}enter(e){this.active=!0,this.currentTargetId=e,this.overlayEl.hidden=!1;const t=nr[e]||nr.mars,n=this.overlayEl.querySelector("#surface-planet-title");n&&(n.textContent=t.name),this.groundMat.color.setHex(t.groundColor),this.groundMat.roughness=t.groundRoughness,this.skyMat.color.setHex(t.skyColorTop),this.ambientLight.color.setHex(t.ambientLight),this.sunLight.color.setHex(t.sunLight),this.scene.fog=new qa(t.fogColor,.015);const s=this.overlayEl.querySelector("#soil-breakdown-list");s&&(s.hidden=!0);const r=this.overlayEl.querySelector("#science-status");r&&(r.textContent="Ready to extract core sample.")}exit(){this.active=!1,this.overlayEl.hidden=!0}runSoilAnalysis(){if(this.isDrilling)return;this.isDrilling=!0;const e=this.overlayEl.querySelector("#science-status"),t=this.overlayEl.querySelector("#soil-breakdown-list"),n=this.overlayEl.querySelector("#science-drill-btn");n&&(n.textContent="⚙️ Drilling Core..."),e&&(e.textContent="Drilling surface core (depth: 25 cm)..."),setTimeout(()=>{this.isDrilling=!1,n&&(n.textContent="⚡ Re-analyze Sample"),e&&(e.textContent="✅ Spectroscopy analysis completed:");const s=nr[this.currentTargetId]||nr.mars;t&&(t.hidden=!1,t.innerHTML=s.soilElements.map(r=>`
          <div class="soil-element-row">
            <span class="soil-dot" style="background: ${r.color}"></span>
            <span class="soil-name">${r.name}</span>
            <span class="soil-pct">${r.pct}</span>
          </div>
        `).join("")),this.onShowToast?.(`🔬 Soil sample analyzed for ${s.name}`)},1200)}update(e,t){if(!this.active)return;const n=new xs(this.pitch,this.yaw,0,"YXZ");this.camera.quaternion.setFromEuler(n),t.render(this.scene,this.camera)}}const Iv=[{id:"perseids",name:"Perseid Meteor Stream",color:6482175,particleCount:250,radius:12,thickness:1.8,center:{x:0,y:.5,z:2}},{id:"geminids",name:"Geminid Asteroidal Debris Belt",color:16765562,particleCount:200,radius:18,thickness:2.2,center:{x:5,y:-.8,z:-4}},{id:"halley-tail",name:"Halley Comet Ionized Tail",color:11073023,particleCount:300,radius:25,thickness:1.5,center:{x:-8,y:1.2,z:8}}],ic=[{id:"supernova-andromeda",title:"✨ Supernova Optical Flare Detected",type:"SUPERNOVA",source:"Andromeda Galaxy (M31)",description:"Type Ia Supernova detected in outer spiral arm. Massive optical and neutrino brightening."},{id:"solar-cme-storm",title:"⚠️ Solar Coronal Mass Ejection Warning",type:"SOLAR_CME",source:"Sol Active Region 3842",description:"X9.2-class solar flare shockwave inbound. Extreme magnetic ionization on ship HUD."}];class Dv{constructor(e,t,n={}){this.scene=e,this.store=t,this.onShowToast=n.onShowToast,this.streamGroups=new Map,this.insideStreams=new Set,this.initStreams()}initStreams(){for(const e of Iv){const t=new lt,n=new Float32Array(e.particleCount*3),s=new Float32Array(e.particleCount*3);for(let o=0;o<e.particleCount;o++){const l=Math.random()*Math.PI*2,c=e.radius+(Math.random()-.5)*e.thickness,u=e.center.x+c*Math.cos(l),h=e.center.y+(Math.random()-.5)*e.thickness,d=e.center.z+c*Math.sin(l);n[o*3]=u,n[o*3+1]=h,n[o*3+2]=d,s[o*3]=(Math.random()-.5)*.1,s[o*3+1]=(Math.random()-.5)*.1,s[o*3+2]=(Math.random()-.5)*.1}t.setAttribute("position",new yt(n,3)),t.setAttribute("velocity",new yt(s,3));const r=new Wi({color:e.color,size:.12,transparent:!0,opacity:.75,blending:vt}),a=new qi(t,r);a.name=`stream:${e.id}`,this.scene.add(a),this.streamGroups.set(e.id,{points:a,stream:e})}}update(e,t){for(const[n,{points:s,stream:r}]of this.streamGroups){s.rotation.y+=e*.04;const a=t.x-r.center.x,o=t.z-r.center.z,l=Math.sqrt(a*a+o*o),c=Math.abs(l-r.radius),u=Math.abs(t.y-r.center.y),h=c<r.thickness&&u<r.thickness;h&&!this.insideStreams.has(n)?(this.insideStreams.add(n),this.onShowToast?.(`☄️ Entering ${r.name}! Cosmic particle stream detected.`)):!h&&this.insideStreams.has(n)&&this.insideStreams.delete(n)}}triggerRandomEvent(){const e=ic[Math.floor(Math.random()*ic.length)];this.store.dispatch(Le.triggerCosmicEvent(e)),this.onShowToast?.(`${e.title}: ${e.description}`)}}function Nv({store:i,viewSwitcher:e,audio:t,onEngageWarp:n}){const s=document.querySelectorAll(".hud-layer"),r=c=>{s.forEach(u=>u.classList.toggle("hud-hidden",!c))},a=i.subscribe(c=>r(c),c=>c.ui.hudVisible);r(i.getState().ui.hudVisible);const o=i.subscribe(c=>t.setMuted(c),c=>c.ui.audioMuted),l=c=>{const u=c.target instanceof HTMLInputElement||c.target instanceof HTMLTextAreaElement;c.code==="KeyC"&&!u?e.cycle():c.code==="KeyM"&&!u?i.dispatch(Le.toggleAudioMuted()):c.code==="KeyH"&&!u?i.dispatch(Le.toggleHud()):c.code==="Escape"?(i.dispatch(Le.toggleDetailPanel(!1)),i.dispatch(Le.toggleHabitability(!1)),i.dispatch(Le.toggleSatelliteList(!1))):c.code==="Space"&&!u&&(c.preventDefault(),n?.())};return window.addEventListener("keydown",l),()=>{window.removeEventListener("keydown",l),a(),o()}}Ov().catch(i=>zv(i));async function Ov(){if(wi("Checking your ship’s systems…",10),!$c())throw new Error("This browser can’t display 3D graphics (WebGL). Please try a recent version of Chrome, Firefox, Edge, or Safari.");const i=[...yg().errors,...Tg().errors];if(i.length>0)throw console.error("[main] Celestial data validation failed:",i),new Error("The universe database failed to load correctly. Please refresh the page.");wi("Assembling the cabin…",30);const e=document.getElementById("scene-canvas"),t=new mg,n=new ig({canvas:e,onContextLost:P=>Mt(`Graphics paused: ${P} Trying to recover…`),onContextRestored:()=>Mt("Graphics restored.")}),s=fg(n.renderer,n.scene,n.camera);n.onResize((P,O)=>s.resize(P,O)),wi("Scattering stars across the sky…",50),n.scene.add(f_()),n.scene.add(new Kc(3813456,.6));const r=new S_(n.scene);t.subscribe(P=>r.toggle(P),P=>P.ui.constellationsVisible);const a=new lt,o=new Xa({color:6482175,transparent:!0,opacity:.65,blending:vt}),l=new Fc(a,o);l.name="slingshot-trajectory",n.scene.add(l);const{celestialGroups:c,satelliteGroups:u}=Uv(n),h=new Dv(n.scene,t,{onShowToast:P=>Mt(P)});wi("Warming up the engines…",75);const{ship:d,update:p,bobbleheadPhysics:g,applyCabinTheme:_,applyCabinLighting:m,applyHullLivery:f}=b_();n.scene.add(d);const x=c.get("earth")?.position??new C;d.position.copy(x).add(new C(0,.25,2.5)),d.userData.forward=new C(0,0,1),d.userData.velocity={x:0,y:0,z:0},t.subscribe(P=>_?.(P),P=>P.cabinTheme),t.subscribe(P=>m?.(P),P=>P.cabinLightLevel),t.subscribe(P=>f?.(P),P=>P.hullLivery);const v=new R_(n.camera,d),S=new k_({scene:n.scene,ship:d,store:t}),R=new ev,w=new ov,A=new cv,U=new uv,b=new Pv(document.body,t,{onShowToast:P=>Mt(P)});new Lv(document.body,t,{onShowToast:P=>Mt(P)});const E=new tv({camera:n.camera,shipGroup:d,audio:w,spaceRadio:A,cassetteDeck:U,bobbleheadProp:g,onEngageWarp:()=>j(),onShowToast:P=>Mt(P)}),F=new nv({onToggleCamera:()=>{const P=t.getState().cameraMode,O=P===tt.COCKPIT?tt.THIRD_PERSON:P===tt.THIRD_PERSON?tt.CINEMATIC:tt.COCKPIT;t.dispatch(Le.setCameraMode(O))},onToggleHyperdrive:()=>{const P=R.toggleHyperdriveLock();Mt(P?"Hyperdrive Locked ON":"Hyperdrive Disengaged")}});wi("Opening the star charts…",90);const k=Hv(t,{canvas:e,camera:n.camera,onSearchSelect:P=>Z(P.id,P.kind),onSatelliteSelect:P=>Z(P,"satellite"),onToggleHyperdrive:()=>{const P=R.toggleHyperdriveLock();Mt(P?"Hyperdrive Locked ON":"Hyperdrive Disengaged")},onZoomIn:()=>v.adjustZoom(-.2),onZoomOut:()=>v.adjustZoom(.2)}),te=document.getElementById("view-switcher-root"),I=new Sv(te,t,{onToggleRadio:()=>{const P=A.togglePower();Mt(P?`📻 ${A.getCurrentStation().name}`:"📻 Radio: OFF")}});Nv({store:t,viewSwitcher:I,audio:w,onEngageWarp:()=>j()}),kv(n,d,R,w,A,U,v,t,E);function B(){const P=t.getState(),O=new window.URLSearchParams;P.targetObject&&O.set("dest",P.targetObject),P.cameraMode&&O.set("cam",P.cameraMode),P.timeWarp&&P.timeWarp!==1&&O.set("time",P.timeWarp),P.cabinTheme&&P.cabinTheme!=="MAHOGANY"&&O.set("theme",P.cabinTheme);const Y=O.toString();Y&&window.history.replaceState(null,"",`#${Y}`)}function H(){if(!window.location.hash)return;const P=new window.URLSearchParams(window.location.hash.replace(/^#/,"")),O=P.get("dest"),Y=P.get("cam"),oe=P.get("time"),he=P.get("theme");O&&setTimeout(()=>Z(O,rs(O)?"satellite":"planet"),500),Y&&Object.values(tt).includes(Y)&&t.dispatch(Le.setCameraMode(Y)),oe&&[1,100,1e3,1e4].includes(Number(oe))&&t.dispatch(Le.setTimeWarp(Number(oe))),he&&["MAHOGANY","APOLLO","CYBERPUNK"].includes(he.toUpperCase())&&t.dispatch(Le.setCabinTheme(he.toUpperCase()))}t.subscribe(()=>B(),P=>`${P.targetObject}-${P.cameraMode}-${P.timeWarp}-${P.cabinTheme}`),H();function Z(P,O){const Y=O==="satellite"?u.get(P):c.get(P),oe=Y?.position;if(!oe){Mt("That object isn’t available to fly to right now.");return}const he=Y?.userData?.safeRadius??1;t.dispatch(Le.setTarget(P)),t.dispatch(Le.selectObject(P)),w.playChirp(),t.getState().flightMode===ln.MANUAL?(R.setTarget(oe),Mt("Follow the arrow to reach your destination.")):S.beginJump(d.position,oe,J(P,O),()=>X(P),he)}function j(){const P=t.getState();if(!P.targetObject||P.flightMode!==ln.AUTOPILOT||S.isActive)return;const O=c.get(P.targetObject)??u.get(P.targetObject),Y=O?.position;if(!Y)return;const oe=O?.userData?.safeRadius??1;S.beginJump(d.position,Y,J(P.targetObject,void 0),()=>X(P.targetObject),oe)}function J(P,O){if(O==="satellite")return rs(P)?.distanceFromEarthKm??0;const Y=Li(P);return Y?Y.distanceFromEarthKm:rs(P)?.distanceFromEarthKm??0}function X(P){Mt("Arrived! Here’s what we found."),w.playChirp(),k.detailPanel.show(P),R.setTarget(null);const O=Li(P),Y=rs(P),oe=O?.name??Y?.name??P,he=Y?"satellite":O?.type??"planet",de=O?.system??Y?.missionType??"Exploration";t.dispatch(Le.recordDiscovery({id:P,name:oe,kind:he,category:de}));const Ee=t.getState().activeExpedition;Ee&&(t.dispatch(Le.visitExpeditionWaypoint(Ee,P)),t.getState().expeditionProgress[Ee]?.completed&&(Mt("🏆 Expedition Completed! New badge added to your Star Journal."),w.playChirp()))}let K=0;n.onTick((P,O)=>{if(b.active){b.update(P,n.renderer);return}const Y=t.getState().timeWarp||1;if(K+=P*Y,Fv(K,c,u),S.update(P,K),h.update(P,d.position),A&&A.isPlaying){let Q=null,W=1/0;for(const[xe,ce]of c){const y=d.position.distanceTo(ce.position)*4e4;y<W&&(W=y,Q=xe)}Q&&W<8e5?A.updatePlanetarySonification(Q,W):A.updatePlanetarySonification(null,1/0)}let oe={thrust:0,yaw:0,pitch:0,strafe:0,boost:!1},he,de;const Ee=S.isActive;let Te=0,ve=0;const Pe=d.position;for(const[Q,W]of c){const xe=Li(Q);if(!xe||!W||!xe.environment?.atmosphericPressureAtm)continue;const ce=Pe.distanceTo(W.position),M=W.userData.visualRadius||1,y=iv(ce,M,1.2,xe.environment.atmosphericPressureAtm);if(y.inAtmosphere){const N=Math.sqrt((d.userData.velocity?.x??0)**2+(d.userData.velocity?.y??0)**2+(d.userData.velocity?.z??0)**2),ne=sv(N,y.densityFraction,12);Te=Math.max(Te,ne.heatIntensity),ve=Math.max(ve,ne.dragForce)}}if(Ee)de=t.getState().flightTelemetry.currentSpeedC,he=!0,k.telemetry.updateDriveMode(!0),l&&(l.visible=!1);else{const Q=F.poll();(Q.thrust!==0||Q.strafe!==0||Q.pitch!==0||Q.yaw!==0||Q.boost)&&(oe=Q);const W=Gv(P,d,R,t,k,X,c);W&&W.input&&(oe=W.input),ve>0&&d.userData.velocity&&(d.userData.velocity.x*=Math.max(1-ve*P*.1,.2),d.userData.velocity.y*=Math.max(1-ve*P*.1,.2),d.userData.velocity.z*=Math.max(1-ve*P*.1,.2)),he=!!oe.boost;const xe=Math.sqrt(d.userData.velocity.x**2+d.userData.velocity.y**2+d.userData.velocity.z**2);de=he?xe/180:xe/24,k.telemetry.updateDriveMode(he);const ce=[];for(const[M,y]of c){const N=Li(M);N&&["star","planet","blackHole"].includes(N.type)&&ce.push({position:{x:y.position.x,y:y.position.y,z:y.position.z},mass:N.type==="blackHole"?40:N.type==="star"?20:(y.userData.visualRadius||1)*3,safeRadius:y.userData.safeRadius||1})}if(l){const y=av({x:d.position.x,y:d.position.y,z:d.position.z},d.userData.velocity||{x:0,y:0,z:0},ce,40,.1).map(N=>new C(N.x,N.y,N.z));l.geometry.setFromPoints(y),l.visible=t.getState().flightMode===ln.MANUAL&&xe>.1}}const L=c.get("sagittarius-a-star");if(L){const Q=d.position.distanceTo(L.position);if(Q<8){const W=N_(Q*5e6,415e4);W.isInsideEventHorizon||t.dispatch(Le.updateTelemetry({timeDilationShipSec:1,timeDilationEarthSec:W.timeRatio}))}}const le={accZ:(oe.thrust||0)*(he?22:8),yawRate:(oe.yaw||0)*8,pitchRate:(oe.pitch||0)*8};p(P,de,he,oe,t.getState().cameraMode,le,Te),v.setMode(t.getState().cameraMode),v.update(P,he,de),document.getElementById("cockpit-overlay")?.classList.toggle("cockpit-active",t.getState().cameraMode===tt.COCKPIT);const $=Ee?t.getState().flightTelemetry.currentSpeedC:he?Math.min(de*1.5,1):de*.5;w.setEngineIntensity($),Bv(k.radar,d,c,u),s.composer?s.render(P):n.renderer.render(n.scene,n.camera)}),window.addEventListener("error",P=>{console.error("[main] Uncaught error:",P.error??P.message),Mt("Something hiccuped, but the flight continues.")}),window.addEventListener("unhandledrejection",P=>{console.error("[main] Unhandled rejection:",P.reason),Mt("Something hiccuped, but the flight continues.")}),wi("Ready for launch.",100),await Vv(250),au(),n.start()}function Uv(i){const e=eu(Qt,0),t=new Map;for(const r of Qt){const a=s_(r),o=e.get(r.id);a.position.set(o.x,o.y,o.z),i.scene.add(a),t.set(r.id,a)}const n=tu(wn,e),s=new Map;for(const r of wn){const a=d_(r),o=n.get(r.id);a.position.set(o.x,o.y,o.z),i.scene.add(a),s.set(r.id,a)}return{celestialGroups:t,satelliteGroups:s}}function Fv(i,e,t){const n=eu(Qt,i*2e4);for(const[r,a]of e){const o=n.get(r);o&&a.position.set(o.x,o.y,o.z);const l=a.getObjectByName("clouds:earth");l&&(l.rotation.y=i*.06);const c=a.getObjectByName(`surface:${r}`);c&&(c.rotation.y=i*.02),a.traverse(u=>{const h=u.material?.uniforms;h?.uTime&&(h.uTime.value=i)})}const s=tu(wn,n);for(const[r,a]of t){const o=s.get(r);o&&a.position.set(o.x,o.y,o.z)}}function Gv(i,e,t,n,s,r,a){const o={position:{x:e.position.x,y:e.position.y,z:e.position.z},velocity:e.userData.velocity??{x:0,y:0,z:0},forward:{x:e.userData.forward.x,y:e.userData.forward.y,z:e.userData.forward.z},bankAngle:e.userData.bankAngle??0},{state:l,bearing:c,input:u}=t.step(o,i);if(a){const m=[];for(const x of a.values())x?.position&&x.userData?.safeRadius&&m.push({position:{x:x.position.x,y:x.position.y,z:x.position.z},safeRadius:x.userData.safeRadius});const f=$_(l.position,l.velocity,m);l.position=f.position,l.velocity=f.velocity}e.position.set(l.position.x,l.position.y,l.position.z),e.userData.velocity=l.velocity,e.userData.forward.set(l.forward.x,l.forward.y,l.forward.z),e.userData.bankAngle=l.bankAngle;const h=e.position.clone().add(e.userData.forward);e.lookAt(h),l.bankAngle&&e.rotateZ(l.bankAngle),s.compass.update(c);const d=Math.sqrt(l.velocity.x**2+l.velocity.y**2+l.velocity.z**2),p=u.boost?d/180*.95:d/18*.05;let g=0,_=0;if(c&&(g=c.distance*1e5,d>.01&&(_=c.distance/d)),n.dispatch(Le.updateTelemetry({currentSpeedC:p,distanceRemainingKm:g,etaSeconds:_})),c?.arrived){const m=n.getState().targetObject;n.dispatch(Le.setFlightStatus(fn.ARRIVED)),m&&r(m)}return{state:l,bearing:c,input:u}}function Bv(i,e,t,n){const s=[];for(const o of t.values())s.push({x:o.position.x,z:o.position.z,color:"#ffd27a"});for(const o of n.values())s.push({x:o.position.x,z:o.position.z,color:"#9ee6ff"});const r=e.userData.forward??new C(0,0,-1),a=Math.atan2(r.x,r.z);i.render({x:e.position.x,z:e.position.z},a,s)}function Hv(i,{canvas:e,camera:t,onSearchSelect:n,onSatelliteSelect:s,_onToggleRadio:r,onToggleHyperdrive:a,onZoomIn:o,onZoomOut:l}){const c=document.getElementById("nav-search-root"),u=document.getElementById("detail-panel-root"),h=document.getElementById("satellite-list-root"),d=document.getElementById("telemetry-root"),p=document.getElementById("compass-root"),g=document.getElementById("radar-root"),_=document.getElementById("photo-mode-root"),m=document.getElementById("logbook-root"),f=document.getElementById("habitability-matrix-root"),x=new dv(c,i,{onSelect:n}),v=new mv(u,i),S=new _v(f,i),R=new vv(h,i,{onSelect:s}),w=new xv(p,i),A=new Mv(d,i,{onToggleHyperdrive:a,onZoomIn:o,onZoomOut:l}),U=new bv(g),b=new Tv(_,i,{canvas:e,camera:t,onShowToast:F=>Mt(F)}),E=new wv(m,i,{onSelectTarget:n});return i.dispatch(Le.toggleSatelliteList(!0)),{search:x,detailPanel:v,habitabilityMatrix:S,satelliteList:R,compass:w,telemetry:A,radar:U,photoMode:b,logbook:E}}function kv(i,e,t,n,s,r,a,o,l){const c=()=>{n.init(),s&&n._ctx&&s.setContext(n._ctx),r&&n._ctx&&r.setContext(n._ctx),window.removeEventListener("pointerdown",c),window.removeEventListener("keydown",c)};window.addEventListener("pointerdown",c),window.addEventListener("keydown",c),window.addEventListener("click",u=>{l.handleClick(u,o.getState().cameraMode===tt.COCKPIT)}),window.addEventListener("keydown",u=>{if(!(u.target instanceof HTMLInputElement||u.target instanceof HTMLTextAreaElement)){if(u.code==="Equal"||u.code==="NumpadAdd"||u.code==="PageUp")a.adjustZoom(-.15);else if(u.code==="Minus"||u.code==="NumpadSubtract"||u.code==="PageDown")a.adjustZoom(.15);else if(u.code==="KeyO"){o.dispatch(Le.toggleConstellations());const d=o.getState().ui.constellationsVisible;Mt(d?"✨ Constellation Charts: ON":"✨ Constellation Charts: OFF")}else if(u.code==="KeyP")o.dispatch(Le.togglePhotoMode(!0));else if(u.code==="KeyL")o.dispatch(Le.toggleLogbook(!0));else if(u.code==="KeyB")o.dispatch(Le.toggleProbeBuilder());else if(u.code==="KeyK"){if(r){const d=r.togglePlay(),p=r.getCurrentTape();Mt(d?`📼 Cassette: "${p.title}"`:"📼 Cassette: Paused")}}else if(u.code==="KeyR"){const d=s.togglePower();Mt(d?`📻 ${s.getCurrentStation().name}`:"📻 Space Radio: OFF")}t.handleKeyDown(u)}}),window.addEventListener("keyup",u=>t.handleKeyUp(u)),window.addEventListener("blur",()=>t.resetInput()),window.addEventListener("wheel",u=>{const h=Math.sign(u.deltaY)*.12;a.adjustZoom(h)},{passive:!0}),window.addEventListener("pointermove",u=>{const h=u.clientX/window.innerWidth*2-1,d=u.clientY/window.innerHeight*2-1;a.setMouseParallax(h,-d)})}function wi(i,e){const t=document.getElementById("boot-message"),n=document.getElementById("boot-bar-fill");t&&(t.textContent=i),n&&(n.style.width=`${Math.min(Math.max(e,0),100)}%`)}function au(){const i=document.getElementById("boot-screen");i&&(i.classList.add("fade-out"),setTimeout(()=>i.remove(),700))}function zv(i){console.error("[main] Fatal startup error:",i),au();const e=document.getElementById("fatal-error"),t=document.getElementById("fatal-error-message");t&&(t.textContent=i?.message??"An unexpected error occurred."),e&&(e.hidden=!1,e.querySelector("#fatal-error-retry")?.addEventListener("click",()=>window.location.reload()))}function Mt(i){const e=document.getElementById("toast-root");if(!e)return;const t=document.createElement("div");t.className="toast",t.textContent=i,e.appendChild(t),setTimeout(()=>t.remove(),3200)}function Vv(i){return new Promise(e=>setTimeout(e,i))}
//# sourceMappingURL=index-BW5nJLCV.js.map
