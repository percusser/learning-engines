var ac=Object.defineProperty;var oc=(i,e,t)=>e in i?ac(i,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):i[e]=t;var Ge=(i,e,t)=>oc(i,typeof e!="symbol"?e+"":e,t);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Ot="srgb",vi="srgb-linear",Rr="linear",at="srgb";const Js="300 es";class Si{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){const n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){const n=this._listeners;if(n===void 0)return;const r=n[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const n=t[e.type];if(n!==void 0){e.target=this;const r=n.slice(0);for(let s=0,a=r.length;s<a;s++)r[s].call(this,e);e.target=null}}}const Pt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let js=1234567;const Ni=Math.PI/180,Gi=180/Math.PI;function Xn(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Pt[i&255]+Pt[i>>8&255]+Pt[i>>16&255]+Pt[i>>24&255]+"-"+Pt[e&255]+Pt[e>>8&255]+"-"+Pt[e>>16&15|64]+Pt[e>>24&255]+"-"+Pt[t&63|128]+Pt[t>>8&255]+"-"+Pt[t>>16&255]+Pt[t>>24&255]+Pt[n&255]+Pt[n>>8&255]+Pt[n>>16&255]+Pt[n>>24&255]).toLowerCase()}function Je(i,e,t){return Math.max(e,Math.min(t,i))}function Os(i,e){return(i%e+e)%e}function cc(i,e,t,n,r){return n+(i-e)*(r-n)/(t-e)}function lc(i,e,t){return i!==e?(t-i)/(e-i):0}function Oi(i,e,t){return(1-t)*i+t*e}function dc(i,e,t,n){return Oi(i,e,1-Math.exp(-t*n))}function uc(i,e=1){return e-Math.abs(Os(i,e*2)-e)}function hc(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function fc(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function pc(i,e){return i+Math.floor(Math.random()*(e-i+1))}function mc(i,e){return i+Math.random()*(e-i)}function gc(i){return i*(.5-Math.random())}function _c(i){i!==void 0&&(js=i);let e=js+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function vc(i){return i*Ni}function xc(i){return i*Gi}function yc(i){return(i&i-1)===0&&i!==0}function Sc(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function Mc(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function Ec(i,e,t,n,r){const s=Math.cos,a=Math.sin,o=s(t/2),l=a(t/2),c=s((e+n)/2),d=a((e+n)/2),u=s((e-n)/2),h=a((e-n)/2),m=s((n-e)/2),_=a((n-e)/2);switch(r){case"XYX":i.set(o*d,l*u,l*h,o*c);break;case"YZY":i.set(l*h,o*d,l*u,o*c);break;case"ZXZ":i.set(l*u,l*h,o*d,o*c);break;case"XZX":i.set(o*d,l*_,l*m,o*c);break;case"YXY":i.set(l*m,o*d,l*_,o*c);break;case"ZYZ":i.set(l*_,l*m,o*d,o*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function pi(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function Ut(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const Vr={DEG2RAD:Ni,RAD2DEG:Gi,generateUUID:Xn,clamp:Je,euclideanModulo:Os,mapLinear:cc,inverseLerp:lc,lerp:Oi,damp:dc,pingpong:uc,smoothstep:hc,smootherstep:fc,randInt:pc,randFloat:mc,randFloatSpread:gc,seededRandom:_c,degToRad:vc,radToDeg:xc,isPowerOfTwo:yc,ceilPowerOfTwo:Sc,floorPowerOfTwo:Mc,setQuaternionFromProperEuler:Ec,normalize:Ut,denormalize:pi};class ve{constructor(e=0,t=0){ve.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6],this.y=r[1]*t+r[4]*n+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Je(this.x,e.x,t.x),this.y=Je(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Je(this.x,e,t),this.y=Je(this.y,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Je(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Je(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),r=Math.sin(t),s=this.x-e.x,a=this.y-e.y;return this.x=s*n-a*r+e.x,this.y=s*r+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class $i{constructor(e=0,t=0,n=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=r}static slerpFlat(e,t,n,r,s,a,o){let l=n[r+0],c=n[r+1],d=n[r+2],u=n[r+3];const h=s[a+0],m=s[a+1],_=s[a+2],g=s[a+3];if(o===0){e[t+0]=l,e[t+1]=c,e[t+2]=d,e[t+3]=u;return}if(o===1){e[t+0]=h,e[t+1]=m,e[t+2]=_,e[t+3]=g;return}if(u!==g||l!==h||c!==m||d!==_){let p=1-o;const f=l*h+c*m+d*_+u*g,w=f>=0?1:-1,y=1-f*f;if(y>Number.EPSILON){const T=Math.sqrt(y),C=Math.atan2(T,f*w);p=Math.sin(p*C)/T,o=Math.sin(o*C)/T}const v=o*w;if(l=l*p+h*v,c=c*p+m*v,d=d*p+_*v,u=u*p+g*v,p===1-o){const T=1/Math.sqrt(l*l+c*c+d*d+u*u);l*=T,c*=T,d*=T,u*=T}}e[t]=l,e[t+1]=c,e[t+2]=d,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,r,s,a){const o=n[r],l=n[r+1],c=n[r+2],d=n[r+3],u=s[a],h=s[a+1],m=s[a+2],_=s[a+3];return e[t]=o*_+d*u+l*m-c*h,e[t+1]=l*_+d*h+c*u-o*m,e[t+2]=c*_+d*m+o*h-l*u,e[t+3]=d*_-o*u-l*h-c*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,r){return this._x=e,this._y=t,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,r=e._y,s=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(n/2),d=o(r/2),u=o(s/2),h=l(n/2),m=l(r/2),_=l(s/2);switch(a){case"XYZ":this._x=h*d*u+c*m*_,this._y=c*m*u-h*d*_,this._z=c*d*_+h*m*u,this._w=c*d*u-h*m*_;break;case"YXZ":this._x=h*d*u+c*m*_,this._y=c*m*u-h*d*_,this._z=c*d*_-h*m*u,this._w=c*d*u+h*m*_;break;case"ZXY":this._x=h*d*u-c*m*_,this._y=c*m*u+h*d*_,this._z=c*d*_+h*m*u,this._w=c*d*u-h*m*_;break;case"ZYX":this._x=h*d*u-c*m*_,this._y=c*m*u+h*d*_,this._z=c*d*_-h*m*u,this._w=c*d*u+h*m*_;break;case"YZX":this._x=h*d*u+c*m*_,this._y=c*m*u+h*d*_,this._z=c*d*_-h*m*u,this._w=c*d*u-h*m*_;break;case"XZY":this._x=h*d*u-c*m*_,this._y=c*m*u-h*d*_,this._z=c*d*_+h*m*u,this._w=c*d*u+h*m*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,r=Math.sin(n);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],r=t[4],s=t[8],a=t[1],o=t[5],l=t[9],c=t[2],d=t[6],u=t[10],h=n+o+u;if(h>0){const m=.5/Math.sqrt(h+1);this._w=.25/m,this._x=(d-l)*m,this._y=(s-c)*m,this._z=(a-r)*m}else if(n>o&&n>u){const m=2*Math.sqrt(1+n-o-u);this._w=(d-l)/m,this._x=.25*m,this._y=(r+a)/m,this._z=(s+c)/m}else if(o>u){const m=2*Math.sqrt(1+o-n-u);this._w=(s-c)/m,this._x=(r+a)/m,this._y=.25*m,this._z=(l+d)/m}else{const m=2*Math.sqrt(1+u-n-o);this._w=(a-r)/m,this._x=(s+c)/m,this._y=(l+d)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Je(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const r=Math.min(1,t/n);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,r=e._y,s=e._z,a=e._w,o=t._x,l=t._y,c=t._z,d=t._w;return this._x=n*d+a*o+r*c-s*l,this._y=r*d+a*l+s*o-n*c,this._z=s*d+a*c+n*l-r*o,this._w=a*d-n*o-r*l-s*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,r=this._y,s=this._z,a=this._w;let o=a*e._w+n*e._x+r*e._y+s*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=n,this._y=r,this._z=s,this;const l=1-o*o;if(l<=Number.EPSILON){const m=1-t;return this._w=m*a+t*this._w,this._x=m*n+t*this._x,this._y=m*r+t*this._y,this._z=m*s+t*this._z,this.normalize(),this}const c=Math.sqrt(l),d=Math.atan2(c,o),u=Math.sin((1-t)*d)/c,h=Math.sin(t*d)/c;return this._w=a*u+this._w*h,this._x=n*u+this._x*h,this._y=r*u+this._y*h,this._z=s*u+this._z*h,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),r=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class I{constructor(e=0,t=0,n=0){I.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Qs.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Qs.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*r,this.y=s[1]*t+s[4]*n+s[7]*r,this.z=s[2]*t+s[5]*n+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,s=e.elements,a=1/(s[3]*t+s[7]*n+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*r+s[12])*a,this.y=(s[1]*t+s[5]*n+s[9]*r+s[13])*a,this.z=(s[2]*t+s[6]*n+s[10]*r+s[14])*a,this}applyQuaternion(e){const t=this.x,n=this.y,r=this.z,s=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*r-o*n),d=2*(o*t-s*r),u=2*(s*n-a*t);return this.x=t+l*c+a*u-o*d,this.y=n+l*d+o*c-s*u,this.z=r+l*u+s*d-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*r,this.y=s[1]*t+s[5]*n+s[9]*r,this.z=s[2]*t+s[6]*n+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Je(this.x,e.x,t.x),this.y=Je(this.y,e.y,t.y),this.z=Je(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Je(this.x,e,t),this.y=Je(this.y,e,t),this.z=Je(this.z,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Je(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,r=e.y,s=e.z,a=t.x,o=t.y,l=t.z;return this.x=r*l-s*o,this.y=s*a-n*l,this.z=n*o-r*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Hr.copy(this).projectOnVector(e),this.sub(Hr)}reflect(e){return this.sub(Hr.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Je(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,r=this.z-e.z;return t*t+n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const r=Math.sin(t)*e;return this.x=r*Math.sin(n),this.y=Math.cos(t)*e,this.z=r*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Hr=new I,Qs=new $i;class Ye{constructor(e,t,n,r,s,a,o,l,c){Ye.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,r,s,a,o,l,c)}set(e,t,n,r,s,a,o,l,c){const d=this.elements;return d[0]=e,d[1]=r,d[2]=o,d[3]=t,d[4]=s,d[5]=l,d[6]=n,d[7]=a,d[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,s=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],d=n[4],u=n[7],h=n[2],m=n[5],_=n[8],g=r[0],p=r[3],f=r[6],w=r[1],y=r[4],v=r[7],T=r[2],C=r[5],P=r[8];return s[0]=a*g+o*w+l*T,s[3]=a*p+o*y+l*C,s[6]=a*f+o*v+l*P,s[1]=c*g+d*w+u*T,s[4]=c*p+d*y+u*C,s[7]=c*f+d*v+u*P,s[2]=h*g+m*w+_*T,s[5]=h*p+m*y+_*C,s[8]=h*f+m*v+_*P,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],d=e[8];return t*a*d-t*o*c-n*s*d+n*o*l+r*s*c-r*a*l}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],d=e[8],u=d*a-o*c,h=o*l-d*s,m=c*s-a*l,_=t*u+n*h+r*m;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const g=1/_;return e[0]=u*g,e[1]=(r*c-d*n)*g,e[2]=(o*n-r*a)*g,e[3]=h*g,e[4]=(d*t-r*l)*g,e[5]=(r*s-o*t)*g,e[6]=m*g,e[7]=(n*l-c*t)*g,e[8]=(a*t-n*s)*g,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,r,s,a,o){const l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*a+c*o)+a+e,-r*c,r*l,-r*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(qr.makeScale(e,t)),this}rotate(e){return this.premultiply(qr.makeRotation(-e)),this}translate(e,t){return this.premultiply(qr.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<9;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const qr=new Ye;function _o(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function Vi(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Tc(){const i=Vi("canvas");return i.style.display="block",i}const ea={};function Hi(i){i in ea||(ea[i]=!0,console.warn(i))}function Ac(i,e,t){return new Promise(function(n,r){function s(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:r();break;case i.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:n()}}setTimeout(s,t)})}const ta=new Ye().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),na=new Ye().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function bc(){const i={enabled:!0,workingColorSpace:vi,spaces:{},convert:function(r,s,a){return this.enabled===!1||s===a||!s||!a||(this.spaces[s].transfer===at&&(r.r=xn(r.r),r.g=xn(r.g),r.b=xn(r.b)),this.spaces[s].primaries!==this.spaces[a].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===at&&(r.r=_i(r.r),r.g=_i(r.g),r.b=_i(r.b))),r},workingToColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},colorSpaceToWorking:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===""?Rr:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,a){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,s){return Hi("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(r,s)},toWorkingColorSpace:function(r,s){return Hi("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(r,s)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[vi]:{primaries:e,whitePoint:n,transfer:Rr,toXYZ:ta,fromXYZ:na,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Ot},outputColorSpaceConfig:{drawingBufferColorSpace:Ot}},[Ot]:{primaries:e,whitePoint:n,transfer:at,toXYZ:ta,fromXYZ:na,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Ot}}}),i}const nt=bc();function xn(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function _i(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let Zn;class wc{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Zn===void 0&&(Zn=Vi("canvas")),Zn.width=e.width,Zn.height=e.height;const r=Zn.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),n=Zn}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Vi("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const r=n.getImageData(0,0,e.width,e.height),s=r.data;for(let a=0;a<s.length;a++)s[a]=xn(s[a]/255)*255;return n.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(xn(t[n]/255)*255):t[n]=xn(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Cc=0;class Bs{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Cc++}),this.uuid=Xn(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let a=0,o=r.length;a<o;a++)r[a].isDataTexture?s.push(Wr(r[a].image)):s.push(Wr(r[a]))}else s=Wr(r);n.url=s}return t||(e.images[this.uuid]=n),n}}function Wr(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?wc.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Rc=0;const Xr=new I;class Rt extends Si{constructor(e=Rt.DEFAULT_IMAGE,t=Rt.DEFAULT_MAPPING,n=1001,r=1001,s=1006,a=1008,o=1023,l=1009,c=Rt.DEFAULT_ANISOTROPY,d=""){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Rc++}),this.uuid=Xn(),this.name="",this.source=new Bs(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=r,this.magFilter=s,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new ve(0,0),this.repeat=new ve(1,1),this.center=new ve(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ye,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=d,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Xr).x}get height(){return this.source.getSize(Xr).y}get depth(){return this.source.getSize(Xr).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){console.warn(`THREE.Texture.setValues(): property '${t}' does not exist.`);continue}r&&n&&r.isVector2&&n.isVector2||r&&n&&r.isVector3&&n.isVector3||r&&n&&r.isMatrix3&&n.isMatrix3?r.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==300)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case 1e3:e.x=e.x-Math.floor(e.x);break;case 1001:e.x=e.x<0?0:1;break;case 1002:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case 1e3:e.y=e.y-Math.floor(e.y);break;case 1001:e.y=e.y<0?0:1;break;case 1002:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Rt.DEFAULT_IMAGE=null;Rt.DEFAULT_MAPPING=300;Rt.DEFAULT_ANISOTROPY=1;class ct{constructor(e=0,t=0,n=0,r=1){ct.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,r){return this.x=e,this.y=t,this.z=n,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,s=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*r+a[12]*s,this.y=a[1]*t+a[5]*n+a[9]*r+a[13]*s,this.z=a[2]*t+a[6]*n+a[10]*r+a[14]*s,this.w=a[3]*t+a[7]*n+a[11]*r+a[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,r,s;const l=e.elements,c=l[0],d=l[4],u=l[8],h=l[1],m=l[5],_=l[9],g=l[2],p=l[6],f=l[10];if(Math.abs(d-h)<.01&&Math.abs(u-g)<.01&&Math.abs(_-p)<.01){if(Math.abs(d+h)<.1&&Math.abs(u+g)<.1&&Math.abs(_+p)<.1&&Math.abs(c+m+f-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const y=(c+1)/2,v=(m+1)/2,T=(f+1)/2,C=(d+h)/4,P=(u+g)/4,A=(_+p)/4;return y>v&&y>T?y<.01?(n=0,r=.707106781,s=.707106781):(n=Math.sqrt(y),r=C/n,s=P/n):v>T?v<.01?(n=.707106781,r=0,s=.707106781):(r=Math.sqrt(v),n=C/r,s=A/r):T<.01?(n=.707106781,r=.707106781,s=0):(s=Math.sqrt(T),n=P/s,r=A/s),this.set(n,r,s,t),this}let w=Math.sqrt((p-_)*(p-_)+(u-g)*(u-g)+(h-d)*(h-d));return Math.abs(w)<.001&&(w=1),this.x=(p-_)/w,this.y=(u-g)/w,this.z=(h-d)/w,this.w=Math.acos((c+m+f-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Je(this.x,e.x,t.x),this.y=Je(this.y,e.y,t.y),this.z=Je(this.z,e.z,t.z),this.w=Je(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Je(this.x,e,t),this.y=Je(this.y,e,t),this.z=Je(this.z,e,t),this.w=Je(this.w,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Je(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Pc extends Si{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:1006,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new ct(0,0,e,t),this.scissorTest=!1,this.viewport=new ct(0,0,e,t);const r={width:e,height:t,depth:n.depth},s=new Rt(r);this.textures=[];const a=n.count;for(let o=0;o<a;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(e={}){const t={minFilter:1006,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=n,this.textures[r].isArrayTexture=this.textures[r].image.depth>1;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const r=Object.assign({},e.textures[t].image);this.textures[t].source=new Bs(r)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Hn extends Pc{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class vo extends Rt{constructor(e=null,t=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=1003,this.minFilter=1003,this.wrapR=1001,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Lc extends Rt{constructor(e=null,t=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=1003,this.minFilter=1003,this.wrapR=1001,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Pn{constructor(e=new I(1/0,1/0,1/0),t=new I(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(jt.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(jt.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=jt.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const s=n.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,jt):jt.fromBufferAttribute(s,a),jt.applyMatrix4(e.matrixWorld),this.expandByPoint(jt);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Qi.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Qi.copy(n.boundingBox)),Qi.applyMatrix4(e.matrixWorld),this.union(Qi)}const r=e.children;for(let s=0,a=r.length;s<a;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,jt),jt.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(bi),er.subVectors(this.max,bi),Kn.subVectors(e.a,bi),Jn.subVectors(e.b,bi),jn.subVectors(e.c,bi),yn.subVectors(Jn,Kn),Sn.subVectors(jn,Jn),Un.subVectors(Kn,jn);let t=[0,-yn.z,yn.y,0,-Sn.z,Sn.y,0,-Un.z,Un.y,yn.z,0,-yn.x,Sn.z,0,-Sn.x,Un.z,0,-Un.x,-yn.y,yn.x,0,-Sn.y,Sn.x,0,-Un.y,Un.x,0];return!Yr(t,Kn,Jn,jn,er)||(t=[1,0,0,0,1,0,0,0,1],!Yr(t,Kn,Jn,jn,er))?!1:(tr.crossVectors(yn,Sn),t=[tr.x,tr.y,tr.z],Yr(t,Kn,Jn,jn,er))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,jt).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(jt).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(fn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),fn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),fn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),fn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),fn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),fn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),fn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),fn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(fn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const fn=[new I,new I,new I,new I,new I,new I,new I,new I],jt=new I,Qi=new Pn,Kn=new I,Jn=new I,jn=new I,yn=new I,Sn=new I,Un=new I,bi=new I,er=new I,tr=new I,Fn=new I;function Yr(i,e,t,n,r){for(let s=0,a=i.length-3;s<=a;s+=3){Fn.fromArray(i,s);const o=r.x*Math.abs(Fn.x)+r.y*Math.abs(Fn.y)+r.z*Math.abs(Fn.z),l=e.dot(Fn),c=t.dot(Fn),d=n.dot(Fn);if(Math.max(-Math.max(l,c,d),Math.min(l,c,d))>o)return!1}return!0}const Dc=new Pn,wi=new I,$r=new I;class Mi{constructor(e=new I,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):Dc.setFromPoints(e).getCenter(n);let r=0;for(let s=0,a=e.length;s<a;s++)r=Math.max(r,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;wi.subVectors(e,this.center);const t=wi.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),r=(n-this.radius)*.5;this.center.addScaledVector(wi,r/n),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):($r.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(wi.copy(e.center).add($r)),this.expandByPoint(wi.copy(e.center).sub($r))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const pn=new I,Zr=new I,nr=new I,Mn=new I,Kr=new I,ir=new I,Jr=new I;class ks{constructor(e=new I,t=new I(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,pn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=pn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(pn.copy(this.origin).addScaledVector(this.direction,t),pn.distanceToSquared(e))}distanceSqToSegment(e,t,n,r){Zr.copy(e).add(t).multiplyScalar(.5),nr.copy(t).sub(e).normalize(),Mn.copy(this.origin).sub(Zr);const s=e.distanceTo(t)*.5,a=-this.direction.dot(nr),o=Mn.dot(this.direction),l=-Mn.dot(nr),c=Mn.lengthSq(),d=Math.abs(1-a*a);let u,h,m,_;if(d>0)if(u=a*l-o,h=a*o-l,_=s*d,u>=0)if(h>=-_)if(h<=_){const g=1/d;u*=g,h*=g,m=u*(u+a*h+2*o)+h*(a*u+h+2*l)+c}else h=s,u=Math.max(0,-(a*h+o)),m=-u*u+h*(h+2*l)+c;else h=-s,u=Math.max(0,-(a*h+o)),m=-u*u+h*(h+2*l)+c;else h<=-_?(u=Math.max(0,-(-a*s+o)),h=u>0?-s:Math.min(Math.max(-s,-l),s),m=-u*u+h*(h+2*l)+c):h<=_?(u=0,h=Math.min(Math.max(-s,-l),s),m=h*(h+2*l)+c):(u=Math.max(0,-(a*s+o)),h=u>0?s:Math.min(Math.max(-s,-l),s),m=-u*u+h*(h+2*l)+c);else h=a>0?-s:s,u=Math.max(0,-(a*h+o)),m=-u*u+h*(h+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),r&&r.copy(Zr).addScaledVector(nr,h),m}intersectSphere(e,t){pn.subVectors(e.center,this.origin);const n=pn.dot(this.direction),r=pn.dot(pn)-n*n,s=e.radius*e.radius;if(r>s)return null;const a=Math.sqrt(s-r),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,r,s,a,o,l;const c=1/this.direction.x,d=1/this.direction.y,u=1/this.direction.z,h=this.origin;return c>=0?(n=(e.min.x-h.x)*c,r=(e.max.x-h.x)*c):(n=(e.max.x-h.x)*c,r=(e.min.x-h.x)*c),d>=0?(s=(e.min.y-h.y)*d,a=(e.max.y-h.y)*d):(s=(e.max.y-h.y)*d,a=(e.min.y-h.y)*d),n>a||s>r||((s>n||isNaN(n))&&(n=s),(a<r||isNaN(r))&&(r=a),u>=0?(o=(e.min.z-h.z)*u,l=(e.max.z-h.z)*u):(o=(e.max.z-h.z)*u,l=(e.min.z-h.z)*u),n>l||o>r)||((o>n||n!==n)&&(n=o),(l<r||r!==r)&&(r=l),r<0)?null:this.at(n>=0?n:r,t)}intersectsBox(e){return this.intersectBox(e,pn)!==null}intersectTriangle(e,t,n,r,s){Kr.subVectors(t,e),ir.subVectors(n,e),Jr.crossVectors(Kr,ir);let a=this.direction.dot(Jr),o;if(a>0){if(r)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Mn.subVectors(this.origin,e);const l=o*this.direction.dot(ir.crossVectors(Mn,ir));if(l<0)return null;const c=o*this.direction.dot(Kr.cross(Mn));if(c<0||l+c>a)return null;const d=-o*Mn.dot(Jr);return d<0?null:this.at(d/a,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class lt{constructor(e,t,n,r,s,a,o,l,c,d,u,h,m,_,g,p){lt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,r,s,a,o,l,c,d,u,h,m,_,g,p)}set(e,t,n,r,s,a,o,l,c,d,u,h,m,_,g,p){const f=this.elements;return f[0]=e,f[4]=t,f[8]=n,f[12]=r,f[1]=s,f[5]=a,f[9]=o,f[13]=l,f[2]=c,f[6]=d,f[10]=u,f[14]=h,f[3]=m,f[7]=_,f[11]=g,f[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new lt().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,r=1/Qn.setFromMatrixColumn(e,0).length(),s=1/Qn.setFromMatrixColumn(e,1).length(),a=1/Qn.setFromMatrixColumn(e,2).length();return t[0]=n[0]*r,t[1]=n[1]*r,t[2]=n[2]*r,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,r=e.y,s=e.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(r),c=Math.sin(r),d=Math.cos(s),u=Math.sin(s);if(e.order==="XYZ"){const h=a*d,m=a*u,_=o*d,g=o*u;t[0]=l*d,t[4]=-l*u,t[8]=c,t[1]=m+_*c,t[5]=h-g*c,t[9]=-o*l,t[2]=g-h*c,t[6]=_+m*c,t[10]=a*l}else if(e.order==="YXZ"){const h=l*d,m=l*u,_=c*d,g=c*u;t[0]=h+g*o,t[4]=_*o-m,t[8]=a*c,t[1]=a*u,t[5]=a*d,t[9]=-o,t[2]=m*o-_,t[6]=g+h*o,t[10]=a*l}else if(e.order==="ZXY"){const h=l*d,m=l*u,_=c*d,g=c*u;t[0]=h-g*o,t[4]=-a*u,t[8]=_+m*o,t[1]=m+_*o,t[5]=a*d,t[9]=g-h*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){const h=a*d,m=a*u,_=o*d,g=o*u;t[0]=l*d,t[4]=_*c-m,t[8]=h*c+g,t[1]=l*u,t[5]=g*c+h,t[9]=m*c-_,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){const h=a*l,m=a*c,_=o*l,g=o*c;t[0]=l*d,t[4]=g-h*u,t[8]=_*u+m,t[1]=u,t[5]=a*d,t[9]=-o*d,t[2]=-c*d,t[6]=m*u+_,t[10]=h-g*u}else if(e.order==="XZY"){const h=a*l,m=a*c,_=o*l,g=o*c;t[0]=l*d,t[4]=-u,t[8]=c*d,t[1]=h*u+g,t[5]=a*d,t[9]=m*u-_,t[2]=_*u-m,t[6]=o*d,t[10]=g*u+h}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Ic,e,Uc)}lookAt(e,t,n){const r=this.elements;return Gt.subVectors(e,t),Gt.lengthSq()===0&&(Gt.z=1),Gt.normalize(),En.crossVectors(n,Gt),En.lengthSq()===0&&(Math.abs(n.z)===1?Gt.x+=1e-4:Gt.z+=1e-4,Gt.normalize(),En.crossVectors(n,Gt)),En.normalize(),rr.crossVectors(Gt,En),r[0]=En.x,r[4]=rr.x,r[8]=Gt.x,r[1]=En.y,r[5]=rr.y,r[9]=Gt.y,r[2]=En.z,r[6]=rr.z,r[10]=Gt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,s=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],d=n[1],u=n[5],h=n[9],m=n[13],_=n[2],g=n[6],p=n[10],f=n[14],w=n[3],y=n[7],v=n[11],T=n[15],C=r[0],P=r[4],A=r[8],M=r[12],x=r[1],D=r[5],F=r[9],O=r[13],z=r[2],q=r[6],H=r[10],re=r[14],X=r[3],fe=r[7],ge=r[11],Ee=r[15];return s[0]=a*C+o*x+l*z+c*X,s[4]=a*P+o*D+l*q+c*fe,s[8]=a*A+o*F+l*H+c*ge,s[12]=a*M+o*O+l*re+c*Ee,s[1]=d*C+u*x+h*z+m*X,s[5]=d*P+u*D+h*q+m*fe,s[9]=d*A+u*F+h*H+m*ge,s[13]=d*M+u*O+h*re+m*Ee,s[2]=_*C+g*x+p*z+f*X,s[6]=_*P+g*D+p*q+f*fe,s[10]=_*A+g*F+p*H+f*ge,s[14]=_*M+g*O+p*re+f*Ee,s[3]=w*C+y*x+v*z+T*X,s[7]=w*P+y*D+v*q+T*fe,s[11]=w*A+y*F+v*H+T*ge,s[15]=w*M+y*O+v*re+T*Ee,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],r=e[8],s=e[12],a=e[1],o=e[5],l=e[9],c=e[13],d=e[2],u=e[6],h=e[10],m=e[14],_=e[3],g=e[7],p=e[11],f=e[15];return _*(+s*l*u-r*c*u-s*o*h+n*c*h+r*o*m-n*l*m)+g*(+t*l*m-t*c*h+s*a*h-r*a*m+r*c*d-s*l*d)+p*(+t*c*u-t*o*m-s*a*u+n*a*m+s*o*d-n*c*d)+f*(-r*o*d-t*l*u+t*o*h+r*a*u-n*a*h+n*l*d)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],d=e[8],u=e[9],h=e[10],m=e[11],_=e[12],g=e[13],p=e[14],f=e[15],w=u*p*c-g*h*c+g*l*m-o*p*m-u*l*f+o*h*f,y=_*h*c-d*p*c-_*l*m+a*p*m+d*l*f-a*h*f,v=d*g*c-_*u*c+_*o*m-a*g*m-d*o*f+a*u*f,T=_*u*l-d*g*l-_*o*h+a*g*h+d*o*p-a*u*p,C=t*w+n*y+r*v+s*T;if(C===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const P=1/C;return e[0]=w*P,e[1]=(g*h*s-u*p*s-g*r*m+n*p*m+u*r*f-n*h*f)*P,e[2]=(o*p*s-g*l*s+g*r*c-n*p*c-o*r*f+n*l*f)*P,e[3]=(u*l*s-o*h*s-u*r*c+n*h*c+o*r*m-n*l*m)*P,e[4]=y*P,e[5]=(d*p*s-_*h*s+_*r*m-t*p*m-d*r*f+t*h*f)*P,e[6]=(_*l*s-a*p*s-_*r*c+t*p*c+a*r*f-t*l*f)*P,e[7]=(a*h*s-d*l*s+d*r*c-t*h*c-a*r*m+t*l*m)*P,e[8]=v*P,e[9]=(_*u*s-d*g*s-_*n*m+t*g*m+d*n*f-t*u*f)*P,e[10]=(a*g*s-_*o*s+_*n*c-t*g*c-a*n*f+t*o*f)*P,e[11]=(d*o*s-a*u*s-d*n*c+t*u*c+a*n*m-t*o*m)*P,e[12]=T*P,e[13]=(d*g*r-_*u*r+_*n*h-t*g*h-d*n*p+t*u*p)*P,e[14]=(_*o*r-a*g*r-_*n*l+t*g*l+a*n*p-t*o*p)*P,e[15]=(a*u*r-d*o*r+d*n*l-t*u*l-a*n*h+t*o*h)*P,this}scale(e){const t=this.elements,n=e.x,r=e.y,s=e.z;return t[0]*=n,t[4]*=r,t[8]*=s,t[1]*=n,t[5]*=r,t[9]*=s,t[2]*=n,t[6]*=r,t[10]*=s,t[3]*=n,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,r))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),r=Math.sin(t),s=1-n,a=e.x,o=e.y,l=e.z,c=s*a,d=s*o;return this.set(c*a+n,c*o-r*l,c*l+r*o,0,c*o+r*l,d*o+n,d*l-r*a,0,c*l-r*o,d*l+r*a,s*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,r,s,a){return this.set(1,n,s,0,e,1,a,0,t,r,1,0,0,0,0,1),this}compose(e,t,n){const r=this.elements,s=t._x,a=t._y,o=t._z,l=t._w,c=s+s,d=a+a,u=o+o,h=s*c,m=s*d,_=s*u,g=a*d,p=a*u,f=o*u,w=l*c,y=l*d,v=l*u,T=n.x,C=n.y,P=n.z;return r[0]=(1-(g+f))*T,r[1]=(m+v)*T,r[2]=(_-y)*T,r[3]=0,r[4]=(m-v)*C,r[5]=(1-(h+f))*C,r[6]=(p+w)*C,r[7]=0,r[8]=(_+y)*P,r[9]=(p-w)*P,r[10]=(1-(h+g))*P,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,n){const r=this.elements;let s=Qn.set(r[0],r[1],r[2]).length();const a=Qn.set(r[4],r[5],r[6]).length(),o=Qn.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],Qt.copy(this);const c=1/s,d=1/a,u=1/o;return Qt.elements[0]*=c,Qt.elements[1]*=c,Qt.elements[2]*=c,Qt.elements[4]*=d,Qt.elements[5]*=d,Qt.elements[6]*=d,Qt.elements[8]*=u,Qt.elements[9]*=u,Qt.elements[10]*=u,t.setFromRotationMatrix(Qt),n.x=s,n.y=a,n.z=o,this}makePerspective(e,t,n,r,s,a,o=2e3,l=!1){const c=this.elements,d=2*s/(t-e),u=2*s/(n-r),h=(t+e)/(t-e),m=(n+r)/(n-r);let _,g;if(l)_=s/(a-s),g=a*s/(a-s);else if(o===2e3)_=-(a+s)/(a-s),g=-2*a*s/(a-s);else if(o===2001)_=-a/(a-s),g=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=d,c[4]=0,c[8]=h,c[12]=0,c[1]=0,c[5]=u,c[9]=m,c[13]=0,c[2]=0,c[6]=0,c[10]=_,c[14]=g,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,r,s,a,o=2e3,l=!1){const c=this.elements,d=2/(t-e),u=2/(n-r),h=-(t+e)/(t-e),m=-(n+r)/(n-r);let _,g;if(l)_=1/(a-s),g=a/(a-s);else if(o===2e3)_=-2/(a-s),g=-(a+s)/(a-s);else if(o===2001)_=-1/(a-s),g=-s/(a-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=d,c[4]=0,c[8]=0,c[12]=h,c[1]=0,c[5]=u,c[9]=0,c[13]=m,c[2]=0,c[6]=0,c[10]=_,c[14]=g,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<16;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const Qn=new I,Qt=new lt,Ic=new I(0,0,0),Uc=new I(1,1,1),En=new I,rr=new I,Gt=new I,ia=new lt,ra=new $i;class an{constructor(e=0,t=0,n=0,r=an.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,r=this._order){return this._x=e,this._y=t,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const r=e.elements,s=r[0],a=r[4],o=r[8],l=r[1],c=r[5],d=r[9],u=r[2],h=r[6],m=r[10];switch(t){case"XYZ":this._y=Math.asin(Je(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-d,m),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Je(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(o,m),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,s),this._z=0);break;case"ZXY":this._x=Math.asin(Je(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-u,m),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Je(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(h,m),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Je(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-d,c),this._y=Math.atan2(-u,s)):(this._x=0,this._y=Math.atan2(o,m));break;case"XZY":this._z=Math.asin(-Je(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-d,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return ia.makeRotationFromQuaternion(e),this.setFromRotationMatrix(ia,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return ra.setFromEuler(this),this.setFromQuaternion(ra,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}an.DEFAULT_ORDER="XYZ";class zs{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Fc=0;const sa=new I,ei=new $i,mn=new lt,sr=new I,Ci=new I,Nc=new I,Oc=new $i,aa=new I(1,0,0),oa=new I(0,1,0),ca=new I(0,0,1),la={type:"added"},Bc={type:"removed"},ti={type:"childadded",child:null},jr={type:"childremoved",child:null};class Tt extends Si{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Fc++}),this.uuid=Xn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Tt.DEFAULT_UP.clone();const e=new I,t=new an,n=new $i,r=new I(1,1,1);function s(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new lt},normalMatrix:{value:new Ye}}),this.matrix=new lt,this.matrixWorld=new lt,this.matrixAutoUpdate=Tt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Tt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new zs,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return ei.setFromAxisAngle(e,t),this.quaternion.multiply(ei),this}rotateOnWorldAxis(e,t){return ei.setFromAxisAngle(e,t),this.quaternion.premultiply(ei),this}rotateX(e){return this.rotateOnAxis(aa,e)}rotateY(e){return this.rotateOnAxis(oa,e)}rotateZ(e){return this.rotateOnAxis(ca,e)}translateOnAxis(e,t){return sa.copy(e).applyQuaternion(this.quaternion),this.position.add(sa.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(aa,e)}translateY(e){return this.translateOnAxis(oa,e)}translateZ(e){return this.translateOnAxis(ca,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(mn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?sr.copy(e):sr.set(e,t,n);const r=this.parent;this.updateWorldMatrix(!0,!1),Ci.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?mn.lookAt(Ci,sr,this.up):mn.lookAt(sr,Ci,this.up),this.quaternion.setFromRotationMatrix(mn),r&&(mn.extractRotation(r.matrixWorld),ei.setFromRotationMatrix(mn),this.quaternion.premultiply(ei.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(la),ti.child=e,this.dispatchEvent(ti),ti.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Bc),jr.child=e,this.dispatchEvent(jr),jr.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),mn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),mn.multiply(e.parent.matrixWorld)),e.applyMatrix4(mn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(la),ti.child=e,this.dispatchEvent(ti),ti.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,r=this.children.length;n<r;n++){const a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ci,e,Nc),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ci,Oc,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(o=>({...o})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,d=l.length;c<d;c++){const u=l[c];s(e.shapes,u)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(s(e.materials,this.material[l]));r.material=o}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];r.animations.push(s(e.animations,l))}}if(t){const o=a(e.geometries),l=a(e.materials),c=a(e.textures),d=a(e.images),u=a(e.shapes),h=a(e.skeletons),m=a(e.animations),_=a(e.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),d.length>0&&(n.images=d),u.length>0&&(n.shapes=u),h.length>0&&(n.skeletons=h),m.length>0&&(n.animations=m),_.length>0&&(n.nodes=_)}return n.object=r,n;function a(o){const l=[];for(const c in o){const d=o[c];delete d.metadata,l.push(d)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const r=e.children[n];this.add(r.clone())}return this}}Tt.DEFAULT_UP=new I(0,1,0);Tt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Tt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const en=new I,gn=new I,Qr=new I,_n=new I,ni=new I,ii=new I,da=new I,es=new I,ts=new I,ns=new I,is=new ct,rs=new ct,ss=new ct;class rn{constructor(e=new I,t=new I,n=new I){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,r){r.subVectors(n,t),en.subVectors(e,t),r.cross(en);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,n,r,s){en.subVectors(r,t),gn.subVectors(n,t),Qr.subVectors(e,t);const a=en.dot(en),o=en.dot(gn),l=en.dot(Qr),c=gn.dot(gn),d=gn.dot(Qr),u=a*c-o*o;if(u===0)return s.set(0,0,0),null;const h=1/u,m=(c*l-o*d)*h,_=(a*d-o*l)*h;return s.set(1-m-_,_,m)}static containsPoint(e,t,n,r){return this.getBarycoord(e,t,n,r,_n)===null?!1:_n.x>=0&&_n.y>=0&&_n.x+_n.y<=1}static getInterpolation(e,t,n,r,s,a,o,l){return this.getBarycoord(e,t,n,r,_n)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,_n.x),l.addScaledVector(a,_n.y),l.addScaledVector(o,_n.z),l)}static getInterpolatedAttribute(e,t,n,r,s,a){return is.setScalar(0),rs.setScalar(0),ss.setScalar(0),is.fromBufferAttribute(e,t),rs.fromBufferAttribute(e,n),ss.fromBufferAttribute(e,r),a.setScalar(0),a.addScaledVector(is,s.x),a.addScaledVector(rs,s.y),a.addScaledVector(ss,s.z),a}static isFrontFacing(e,t,n,r){return en.subVectors(n,t),gn.subVectors(e,t),en.cross(gn).dot(r)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,r){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,n,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return en.subVectors(this.c,this.b),gn.subVectors(this.a,this.b),en.cross(gn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return rn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return rn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,r,s){return rn.getInterpolation(e,this.a,this.b,this.c,t,n,r,s)}containsPoint(e){return rn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return rn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,r=this.b,s=this.c;let a,o;ni.subVectors(r,n),ii.subVectors(s,n),es.subVectors(e,n);const l=ni.dot(es),c=ii.dot(es);if(l<=0&&c<=0)return t.copy(n);ts.subVectors(e,r);const d=ni.dot(ts),u=ii.dot(ts);if(d>=0&&u<=d)return t.copy(r);const h=l*u-d*c;if(h<=0&&l>=0&&d<=0)return a=l/(l-d),t.copy(n).addScaledVector(ni,a);ns.subVectors(e,s);const m=ni.dot(ns),_=ii.dot(ns);if(_>=0&&m<=_)return t.copy(s);const g=m*c-l*_;if(g<=0&&c>=0&&_<=0)return o=c/(c-_),t.copy(n).addScaledVector(ii,o);const p=d*_-m*u;if(p<=0&&u-d>=0&&m-_>=0)return da.subVectors(s,r),o=(u-d)/(u-d+(m-_)),t.copy(r).addScaledVector(da,o);const f=1/(p+g+h);return a=g*f,o=h*f,t.copy(n).addScaledVector(ni,a).addScaledVector(ii,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const xo={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Tn={h:0,s:0,l:0},ar={h:0,s:0,l:0};function as(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}class Ke{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Ot){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,nt.colorSpaceToWorking(this,t),this}setRGB(e,t,n,r=nt.workingColorSpace){return this.r=e,this.g=t,this.b=n,nt.colorSpaceToWorking(this,r),this}setHSL(e,t,n,r=nt.workingColorSpace){if(e=Os(e,1),t=Je(t,0,1),n=Je(n,0,1),t===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+t):n+t-n*t,a=2*n-s;this.r=as(a,s,e+1/3),this.g=as(a,s,e),this.b=as(a,s,e-1/3)}return nt.colorSpaceToWorking(this,r),this}setStyle(e,t=Ot){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const a=r[1],o=r[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Ot){const n=xo[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=xn(e.r),this.g=xn(e.g),this.b=xn(e.b),this}copyLinearToSRGB(e){return this.r=_i(e.r),this.g=_i(e.g),this.b=_i(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Ot){return nt.workingToColorSpace(Lt.copy(this),e),Math.round(Je(Lt.r*255,0,255))*65536+Math.round(Je(Lt.g*255,0,255))*256+Math.round(Je(Lt.b*255,0,255))}getHexString(e=Ot){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=nt.workingColorSpace){nt.workingToColorSpace(Lt.copy(this),t);const n=Lt.r,r=Lt.g,s=Lt.b,a=Math.max(n,r,s),o=Math.min(n,r,s);let l,c;const d=(o+a)/2;if(o===a)l=0,c=0;else{const u=a-o;switch(c=d<=.5?u/(a+o):u/(2-a-o),a){case n:l=(r-s)/u+(r<s?6:0);break;case r:l=(s-n)/u+2;break;case s:l=(n-r)/u+4;break}l/=6}return e.h=l,e.s=c,e.l=d,e}getRGB(e,t=nt.workingColorSpace){return nt.workingToColorSpace(Lt.copy(this),t),e.r=Lt.r,e.g=Lt.g,e.b=Lt.b,e}getStyle(e=Ot){nt.workingToColorSpace(Lt.copy(this),e);const t=Lt.r,n=Lt.g,r=Lt.b;return e!==Ot?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(r*255)})`}offsetHSL(e,t,n){return this.getHSL(Tn),this.setHSL(Tn.h+e,Tn.s+t,Tn.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Tn),e.getHSL(ar);const n=Oi(Tn.h,ar.h,t),r=Oi(Tn.s,ar.s,t),s=Oi(Tn.l,ar.l,t);return this.setHSL(n,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*n+s[6]*r,this.g=s[1]*t+s[4]*n+s[7]*r,this.b=s[2]*t+s[5]*n+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Lt=new Ke;Ke.NAMES=xo;let kc=0;class Yn extends Si{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:kc++}),this.uuid=Xn(),this.name="",this.type="Material",this.blending=1,this.side=0,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=204,this.blendDst=205,this.blendEquation=100,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ke(0,0,0),this.blendAlpha=0,this.depthFunc=3,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=519,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=7680,this.stencilZFail=7680,this.stencilZPass=7680,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(n):r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==1&&(n.blending=this.blending),this.side!==0&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==204&&(n.blendSrc=this.blendSrc),this.blendDst!==205&&(n.blendDst=this.blendDst),this.blendEquation!==100&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==3&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==519&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==7680&&(n.stencilFail=this.stencilFail),this.stencilZFail!==7680&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==7680&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(s){const a=[];for(const o in s){const l=s[o];delete l.metadata,a.push(l)}return a}if(t){const s=r(e.textures),a=r(e.images);s.length>0&&(n.textures=s),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const r=t.length;n=new Array(r);for(let s=0;s!==r;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class yo extends Yn{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ke(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new an,this.combine=0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Et=new I,or=new ve;let zc=0;class sn{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:zc++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=35044,this.updateRanges=[],this.gpuType=1015,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[n+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)or.fromBufferAttribute(this,t),or.applyMatrix3(e),this.setXY(t,or.x,or.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Et.fromBufferAttribute(this,t),Et.applyMatrix3(e),this.setXYZ(t,Et.x,Et.y,Et.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Et.fromBufferAttribute(this,t),Et.applyMatrix4(e),this.setXYZ(t,Et.x,Et.y,Et.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Et.fromBufferAttribute(this,t),Et.applyNormalMatrix(e),this.setXYZ(t,Et.x,Et.y,Et.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Et.fromBufferAttribute(this,t),Et.transformDirection(e),this.setXYZ(t,Et.x,Et.y,Et.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=pi(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Ut(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=pi(t,this.array)),t}setX(e,t){return this.normalized&&(t=Ut(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=pi(t,this.array)),t}setY(e,t){return this.normalized&&(t=Ut(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=pi(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Ut(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=pi(t,this.array)),t}setW(e,t){return this.normalized&&(t=Ut(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Ut(t,this.array),n=Ut(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,r){return e*=this.itemSize,this.normalized&&(t=Ut(t,this.array),n=Ut(n,this.array),r=Ut(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this}setXYZW(e,t,n,r,s){return e*=this.itemSize,this.normalized&&(t=Ut(t,this.array),n=Ut(n,this.array),r=Ut(r,this.array),s=Ut(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==35044&&(e.usage=this.usage),e}}class So extends sn{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class Mo extends sn{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class Bt extends sn{constructor(e,t,n){super(new Float32Array(e),t,n)}}let Gc=0;const Zt=new lt,os=new Tt,ri=new I,Vt=new Pn,Ri=new Pn,wt=new I;class on extends Si{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Gc++}),this.uuid=Xn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(_o(e)?Mo:So)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new Ye().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Zt.makeRotationFromQuaternion(e),this.applyMatrix4(Zt),this}rotateX(e){return Zt.makeRotationX(e),this.applyMatrix4(Zt),this}rotateY(e){return Zt.makeRotationY(e),this.applyMatrix4(Zt),this}rotateZ(e){return Zt.makeRotationZ(e),this.applyMatrix4(Zt),this}translate(e,t,n){return Zt.makeTranslation(e,t,n),this.applyMatrix4(Zt),this}scale(e,t,n){return Zt.makeScale(e,t,n),this.applyMatrix4(Zt),this}lookAt(e){return os.lookAt(e),os.updateMatrix(),this.applyMatrix4(os.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ri).negate(),this.translate(ri.x,ri.y,ri.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let r=0,s=e.length;r<s;r++){const a=e[r];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new Bt(n,3))}else{const n=Math.min(e.length,t.count);for(let r=0;r<n;r++){const s=e[r];t.setXYZ(r,s.x,s.y,s.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Pn);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new I(-1/0,-1/0,-1/0),new I(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,r=t.length;n<r;n++){const s=t[n];Vt.setFromBufferAttribute(s),this.morphTargetsRelative?(wt.addVectors(this.boundingBox.min,Vt.min),this.boundingBox.expandByPoint(wt),wt.addVectors(this.boundingBox.max,Vt.max),this.boundingBox.expandByPoint(wt)):(this.boundingBox.expandByPoint(Vt.min),this.boundingBox.expandByPoint(Vt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Mi);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new I,1/0);return}if(e){const n=this.boundingSphere.center;if(Vt.setFromBufferAttribute(e),t)for(let s=0,a=t.length;s<a;s++){const o=t[s];Ri.setFromBufferAttribute(o),this.morphTargetsRelative?(wt.addVectors(Vt.min,Ri.min),Vt.expandByPoint(wt),wt.addVectors(Vt.max,Ri.max),Vt.expandByPoint(wt)):(Vt.expandByPoint(Ri.min),Vt.expandByPoint(Ri.max))}Vt.getCenter(n);let r=0;for(let s=0,a=e.count;s<a;s++)wt.fromBufferAttribute(e,s),r=Math.max(r,n.distanceToSquared(wt));if(t)for(let s=0,a=t.length;s<a;s++){const o=t[s],l=this.morphTargetsRelative;for(let c=0,d=o.count;c<d;c++)wt.fromBufferAttribute(o,c),l&&(ri.fromBufferAttribute(e,c),wt.add(ri)),r=Math.max(r,n.distanceToSquared(wt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,r=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new sn(new Float32Array(4*n.count),4));const a=this.getAttribute("tangent"),o=[],l=[];for(let A=0;A<n.count;A++)o[A]=new I,l[A]=new I;const c=new I,d=new I,u=new I,h=new ve,m=new ve,_=new ve,g=new I,p=new I;function f(A,M,x){c.fromBufferAttribute(n,A),d.fromBufferAttribute(n,M),u.fromBufferAttribute(n,x),h.fromBufferAttribute(s,A),m.fromBufferAttribute(s,M),_.fromBufferAttribute(s,x),d.sub(c),u.sub(c),m.sub(h),_.sub(h);const D=1/(m.x*_.y-_.x*m.y);isFinite(D)&&(g.copy(d).multiplyScalar(_.y).addScaledVector(u,-m.y).multiplyScalar(D),p.copy(u).multiplyScalar(m.x).addScaledVector(d,-_.x).multiplyScalar(D),o[A].add(g),o[M].add(g),o[x].add(g),l[A].add(p),l[M].add(p),l[x].add(p))}let w=this.groups;w.length===0&&(w=[{start:0,count:e.count}]);for(let A=0,M=w.length;A<M;++A){const x=w[A],D=x.start,F=x.count;for(let O=D,z=D+F;O<z;O+=3)f(e.getX(O+0),e.getX(O+1),e.getX(O+2))}const y=new I,v=new I,T=new I,C=new I;function P(A){T.fromBufferAttribute(r,A),C.copy(T);const M=o[A];y.copy(M),y.sub(T.multiplyScalar(T.dot(M))).normalize(),v.crossVectors(C,M);const D=v.dot(l[A])<0?-1:1;a.setXYZW(A,y.x,y.y,y.z,D)}for(let A=0,M=w.length;A<M;++A){const x=w[A],D=x.start,F=x.count;for(let O=D,z=D+F;O<z;O+=3)P(e.getX(O+0)),P(e.getX(O+1)),P(e.getX(O+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new sn(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let h=0,m=n.count;h<m;h++)n.setXYZ(h,0,0,0);const r=new I,s=new I,a=new I,o=new I,l=new I,c=new I,d=new I,u=new I;if(e)for(let h=0,m=e.count;h<m;h+=3){const _=e.getX(h+0),g=e.getX(h+1),p=e.getX(h+2);r.fromBufferAttribute(t,_),s.fromBufferAttribute(t,g),a.fromBufferAttribute(t,p),d.subVectors(a,s),u.subVectors(r,s),d.cross(u),o.fromBufferAttribute(n,_),l.fromBufferAttribute(n,g),c.fromBufferAttribute(n,p),o.add(d),l.add(d),c.add(d),n.setXYZ(_,o.x,o.y,o.z),n.setXYZ(g,l.x,l.y,l.z),n.setXYZ(p,c.x,c.y,c.z)}else for(let h=0,m=t.count;h<m;h+=3)r.fromBufferAttribute(t,h+0),s.fromBufferAttribute(t,h+1),a.fromBufferAttribute(t,h+2),d.subVectors(a,s),u.subVectors(r,s),d.cross(u),n.setXYZ(h+0,d.x,d.y,d.z),n.setXYZ(h+1,d.x,d.y,d.z),n.setXYZ(h+2,d.x,d.y,d.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)wt.fromBufferAttribute(e,t),wt.normalize(),e.setXYZ(t,wt.x,wt.y,wt.z)}toNonIndexed(){function e(o,l){const c=o.array,d=o.itemSize,u=o.normalized,h=new c.constructor(l.length*d);let m=0,_=0;for(let g=0,p=l.length;g<p;g++){o.isInterleavedBufferAttribute?m=l[g]*o.data.stride+o.offset:m=l[g]*d;for(let f=0;f<d;f++)h[_++]=c[m++]}return new sn(h,d,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new on,n=this.index.array,r=this.attributes;for(const o in r){const l=r[o],c=e(l,n);t.setAttribute(o,c)}const s=this.morphAttributes;for(const o in s){const l=[],c=s[o];for(let d=0,u=c.length;d<u;d++){const h=c[d],m=e(h,n);l.push(m)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],d=[];for(let u=0,h=c.length;u<h;u++){const m=c[u];d.push(m.toJSON(e.data))}d.length>0&&(r[l]=d,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone());const r=e.attributes;for(const c in r){const d=r[c];this.setAttribute(c,d.clone(t))}const s=e.morphAttributes;for(const c in s){const d=[],u=s[c];for(let h=0,m=u.length;h<m;h++)d.push(u[h].clone(t));this.morphAttributes[c]=d}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let c=0,d=a.length;c<d;c++){const u=a[c];this.addGroup(u.start,u.count,u.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const ua=new lt,Nn=new ks,cr=new Mi,ha=new I,lr=new I,dr=new I,ur=new I,cs=new I,hr=new I,fa=new I,fr=new I;class ft extends Tt{constructor(e=new on,t=new yo){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,t){const n=this.geometry,r=n.attributes.position,s=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(r,e);const o=this.morphTargetInfluences;if(s&&o){hr.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const d=o[l],u=s[l];d!==0&&(cs.fromBufferAttribute(u,e),a?hr.addScaledVector(cs,d):hr.addScaledVector(cs.sub(t),d))}t.add(hr)}return t}raycast(e,t){const n=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),cr.copy(n.boundingSphere),cr.applyMatrix4(s),Nn.copy(e.ray).recast(e.near),!(cr.containsPoint(Nn.origin)===!1&&(Nn.intersectSphere(cr,ha)===null||Nn.origin.distanceToSquared(ha)>(e.far-e.near)**2))&&(ua.copy(s).invert(),Nn.copy(e.ray).applyMatrix4(ua),!(n.boundingBox!==null&&Nn.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Nn)))}_computeIntersections(e,t,n){let r;const s=this.geometry,a=this.material,o=s.index,l=s.attributes.position,c=s.attributes.uv,d=s.attributes.uv1,u=s.attributes.normal,h=s.groups,m=s.drawRange;if(o!==null)if(Array.isArray(a))for(let _=0,g=h.length;_<g;_++){const p=h[_],f=a[p.materialIndex],w=Math.max(p.start,m.start),y=Math.min(o.count,Math.min(p.start+p.count,m.start+m.count));for(let v=w,T=y;v<T;v+=3){const C=o.getX(v),P=o.getX(v+1),A=o.getX(v+2);r=pr(this,f,e,n,c,d,u,C,P,A),r&&(r.faceIndex=Math.floor(v/3),r.face.materialIndex=p.materialIndex,t.push(r))}}else{const _=Math.max(0,m.start),g=Math.min(o.count,m.start+m.count);for(let p=_,f=g;p<f;p+=3){const w=o.getX(p),y=o.getX(p+1),v=o.getX(p+2);r=pr(this,a,e,n,c,d,u,w,y,v),r&&(r.faceIndex=Math.floor(p/3),t.push(r))}}else if(l!==void 0)if(Array.isArray(a))for(let _=0,g=h.length;_<g;_++){const p=h[_],f=a[p.materialIndex],w=Math.max(p.start,m.start),y=Math.min(l.count,Math.min(p.start+p.count,m.start+m.count));for(let v=w,T=y;v<T;v+=3){const C=v,P=v+1,A=v+2;r=pr(this,f,e,n,c,d,u,C,P,A),r&&(r.faceIndex=Math.floor(v/3),r.face.materialIndex=p.materialIndex,t.push(r))}}else{const _=Math.max(0,m.start),g=Math.min(l.count,m.start+m.count);for(let p=_,f=g;p<f;p+=3){const w=p,y=p+1,v=p+2;r=pr(this,a,e,n,c,d,u,w,y,v),r&&(r.faceIndex=Math.floor(p/3),t.push(r))}}}}function Vc(i,e,t,n,r,s,a,o){let l;if(e.side===1?l=n.intersectTriangle(a,s,r,!0,o):l=n.intersectTriangle(r,s,a,e.side===0,o),l===null)return null;fr.copy(o),fr.applyMatrix4(i.matrixWorld);const c=t.ray.origin.distanceTo(fr);return c<t.near||c>t.far?null:{distance:c,point:fr.clone(),object:i}}function pr(i,e,t,n,r,s,a,o,l,c){i.getVertexPosition(o,lr),i.getVertexPosition(l,dr),i.getVertexPosition(c,ur);const d=Vc(i,e,t,n,lr,dr,ur,fa);if(d){const u=new I;rn.getBarycoord(fa,lr,dr,ur,u),r&&(d.uv=rn.getInterpolatedAttribute(r,o,l,c,u,new ve)),s&&(d.uv1=rn.getInterpolatedAttribute(s,o,l,c,u,new ve)),a&&(d.normal=rn.getInterpolatedAttribute(a,o,l,c,u,new I),d.normal.dot(n.direction)>0&&d.normal.multiplyScalar(-1));const h={a:o,b:l,c,normal:new I,materialIndex:0};rn.getNormal(lr,dr,ur,h.normal),d.face=h,d.barycoord=u}return d}class Ln extends on{constructor(e=1,t=1,n=1,r=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:r,heightSegments:s,depthSegments:a};const o=this;r=Math.floor(r),s=Math.floor(s),a=Math.floor(a);const l=[],c=[],d=[],u=[];let h=0,m=0;_("z","y","x",-1,-1,n,t,e,a,s,0),_("z","y","x",1,-1,n,t,-e,a,s,1),_("x","z","y",1,1,e,n,t,r,a,2),_("x","z","y",1,-1,e,n,-t,r,a,3),_("x","y","z",1,-1,e,t,n,r,s,4),_("x","y","z",-1,-1,e,t,-n,r,s,5),this.setIndex(l),this.setAttribute("position",new Bt(c,3)),this.setAttribute("normal",new Bt(d,3)),this.setAttribute("uv",new Bt(u,2));function _(g,p,f,w,y,v,T,C,P,A,M){const x=v/P,D=T/A,F=v/2,O=T/2,z=C/2,q=P+1,H=A+1;let re=0,X=0;const fe=new I;for(let ge=0;ge<H;ge++){const Ee=ge*D-O;for(let ze=0;ze<q;ze++){const Ze=ze*x-F;fe[g]=Ze*w,fe[p]=Ee*y,fe[f]=z,c.push(fe.x,fe.y,fe.z),fe[g]=0,fe[p]=0,fe[f]=C>0?1:-1,d.push(fe.x,fe.y,fe.z),u.push(ze/P),u.push(1-ge/A),re+=1}}for(let ge=0;ge<A;ge++)for(let Ee=0;Ee<P;Ee++){const ze=h+Ee+q*ge,Ze=h+Ee+q*(ge+1),et=h+(Ee+1)+q*(ge+1),Ie=h+(Ee+1)+q*ge;l.push(ze,Ze,Ie),l.push(Ze,et,Ie),X+=6}o.addGroup(m,X,M),m+=X,h+=re}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ln(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function xi(i){const e={};for(const t in i){e[t]={};for(const n in i[t]){const r=i[t][n];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=r.clone():Array.isArray(r)?e[t][n]=r.slice():e[t][n]=r}}return e}function Ft(i){const e={};for(let t=0;t<i.length;t++){const n=xi(i[t]);for(const r in n)e[r]=n[r]}return e}function Hc(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function Eo(i){const e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:nt.workingColorSpace}const qc={clone:xi,merge:Ft};var Wc=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Xc=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Rn extends Yn{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Wc,this.fragmentShader=Xc,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=xi(e.uniforms),this.uniformsGroups=Hc(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const a=this.uniforms[r].value;a&&a.isTexture?t.uniforms[r]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[r]={type:"m4",value:a.toArray()}:t.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const r in this.extensions)this.extensions[r]===!0&&(n[r]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class To extends Tt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new lt,this.projectionMatrix=new lt,this.projectionMatrixInverse=new lt,this.coordinateSystem=2e3,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const An=new I,pa=new ve,ma=new ve;class Xt extends To{constructor(e=50,t=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Gi*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Ni*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Gi*2*Math.atan(Math.tan(Ni*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){An.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(An.x,An.y).multiplyScalar(-e/An.z),An.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(An.x,An.y).multiplyScalar(-e/An.z)}getViewSize(e,t){return this.getViewBounds(e,pa,ma),t.subVectors(ma,pa)}setViewOffset(e,t,n,r,s,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Ni*.5*this.fov)/this.zoom,n=2*t,r=this.aspect*n,s=-.5*r;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;s+=a.offsetX*r/l,t-=a.offsetY*n/c,r*=a.width/l,n*=a.height/c}const o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const si=-90,ai=1;class Yc extends Tt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new Xt(si,ai,e,t);r.layers=this.layers,this.add(r);const s=new Xt(si,ai,e,t);s.layers=this.layers,this.add(s);const a=new Xt(si,ai,e,t);a.layers=this.layers,this.add(a);const o=new Xt(si,ai,e,t);o.layers=this.layers,this.add(o);const l=new Xt(si,ai,e,t);l.layers=this.layers,this.add(l);const c=new Xt(si,ai,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,r,s,a,o,l]=t;for(const c of t)this.remove(c);if(e===2e3)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===2001)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,a,o,l,c,d]=this.children,u=e.getRenderTarget(),h=e.getActiveCubeFace(),m=e.getActiveMipmapLevel(),_=e.xr.enabled;e.xr.enabled=!1;const g=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,r),e.render(t,s),e.setRenderTarget(n,1,r),e.render(t,a),e.setRenderTarget(n,2,r),e.render(t,o),e.setRenderTarget(n,3,r),e.render(t,l),e.setRenderTarget(n,4,r),e.render(t,c),n.texture.generateMipmaps=g,e.setRenderTarget(n,5,r),e.render(t,d),e.setRenderTarget(u,h,m),e.xr.enabled=_,n.texture.needsPMREMUpdate=!0}}class Ao extends Rt{constructor(e=[],t=301,n,r,s,a,o,l,c,d){super(e,t,n,r,s,a,o,l,c,d),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class $c extends Hn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},r=[n,n,n,n,n,n];this.texture=new Ao(r),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new Ln(5,5,5),s=new Rn({name:"CubemapFromEquirect",uniforms:xi(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:1,blending:0});s.uniforms.tEquirect.value=t;const a=new ft(r,s),o=t.minFilter;return t.minFilter===1008&&(t.minFilter=1006),new Yc(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,r=!0){const s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,r);e.setRenderTarget(s)}}class vt extends Tt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Zc={type:"move"};class ls{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new vt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new vt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new I,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new I),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new vt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new I,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new I),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let r=null,s=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(const g of e.hand.values()){const p=t.getJointPose(g,n),f=this._getHandJoint(c,g);p!==null&&(f.matrix.fromArray(p.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=p.radius),f.visible=p!==null}const d=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],h=d.position.distanceTo(u.position),m=.02,_=.005;c.inputState.pinching&&h>m+_?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&h<=m-_&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(r=t.getPose(e.targetRaySpace,n),r===null&&s!==null&&(r=s),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Zc)))}return o!==null&&(o.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new vt;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}class Fr{constructor(e,t=1,n=1e3){this.isFog=!0,this.name="",this.color=new Ke(e),this.near=t,this.far=n}clone(){return new Fr(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class bo extends Tt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new an,this.environmentIntensity=1,this.environmentRotation=new an,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class Kc extends Rt{constructor(e=null,t=1,n=1,r,s,a,o,l,c=1003,d=1003,u,h){super(null,a,o,l,c,d,r,s,u,h),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ga extends sn{constructor(e,t,n,r=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=r}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const oi=new lt,_a=new lt,mr=[],va=new Pn,Jc=new lt,Pi=new ft,Li=new Mi;class jc extends ft{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new ga(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let r=0;r<n;r++)this.setMatrixAt(r,Jc)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Pn),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,oi),va.copy(e.boundingBox).applyMatrix4(oi),this.boundingBox.union(va)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Mi),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,oi),Li.copy(e.boundingSphere).applyMatrix4(oi),this.boundingSphere.union(Li)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const n=t.morphTargetInfluences,r=this.morphTexture.source.data.data,s=n.length+1,a=e*s+1;for(let o=0;o<n.length;o++)n[o]=r[a+o]}raycast(e,t){const n=this.matrixWorld,r=this.count;if(Pi.geometry=this.geometry,Pi.material=this.material,Pi.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Li.copy(this.boundingSphere),Li.applyMatrix4(n),e.ray.intersectsSphere(Li)!==!1))for(let s=0;s<r;s++){this.getMatrixAt(s,oi),_a.multiplyMatrices(n,oi),Pi.matrixWorld=_a,Pi.raycast(e,mr);for(let a=0,o=mr.length;a<o;a++){const l=mr[a];l.instanceId=s,l.object=this,t.push(l)}mr.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new ga(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){const n=t.morphTargetInfluences,r=n.length+1;this.morphTexture===null&&(this.morphTexture=new Kc(new Float32Array(r*this.count),r,this.count,1028,1015));const s=this.morphTexture.source.data.data;let a=0;for(let c=0;c<n.length;c++)a+=n[c];const o=this.geometry.morphTargetsRelative?1:1-a,l=r*e;s[l]=o,s.set(n,l+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const ds=new I,Qc=new I,el=new Ye;class Cn{constructor(e=new I(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,r){return this.normal.set(e,t,n),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const r=ds.subVectors(n,t).cross(Qc.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(ds),r=this.normal.dot(n);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(e.start).addScaledVector(n,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||el.getNormalMatrix(e),r=this.coplanarPoint(ds).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const On=new Mi,tl=new ve(.5,.5),gr=new I;class Gs{constructor(e=new Cn,t=new Cn,n=new Cn,r=new Cn,s=new Cn,a=new Cn){this.planes=[e,t,n,r,s,a]}set(e,t,n,r,s,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(r),o[4].copy(s),o[5].copy(a),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=2e3,n=!1){const r=this.planes,s=e.elements,a=s[0],o=s[1],l=s[2],c=s[3],d=s[4],u=s[5],h=s[6],m=s[7],_=s[8],g=s[9],p=s[10],f=s[11],w=s[12],y=s[13],v=s[14],T=s[15];if(r[0].setComponents(c-a,m-d,f-_,T-w).normalize(),r[1].setComponents(c+a,m+d,f+_,T+w).normalize(),r[2].setComponents(c+o,m+u,f+g,T+y).normalize(),r[3].setComponents(c-o,m-u,f-g,T-y).normalize(),n)r[4].setComponents(l,h,p,v).normalize(),r[5].setComponents(c-l,m-h,f-p,T-v).normalize();else if(r[4].setComponents(c-l,m-h,f-p,T-v).normalize(),t===2e3)r[5].setComponents(c+l,m+h,f+p,T+v).normalize();else if(t===2001)r[5].setComponents(l,h,p,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),On.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),On.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(On)}intersectsSprite(e){On.center.set(0,0,0);const t=tl.distanceTo(e.center);return On.radius=.7071067811865476+t,On.applyMatrix4(e.matrixWorld),this.intersectsSphere(On)}intersectsSphere(e){const t=this.planes,n=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const r=t[n];if(gr.x=r.normal.x>0?e.max.x:e.min.x,gr.y=r.normal.y>0?e.max.y:e.min.y,gr.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(gr)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class wo extends Yn{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Ke(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Pr=new I,Lr=new I,xa=new lt,Di=new ks,_r=new Mi,us=new I,ya=new I;class As extends Tt{constructor(e=new on,t=new wo){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let r=1,s=t.count;r<s;r++)Pr.fromBufferAttribute(t,r-1),Lr.fromBufferAttribute(t,r),n[r]=n[r-1],n[r]+=Pr.distanceTo(Lr);e.setAttribute("lineDistance",new Bt(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,r=this.matrixWorld,s=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),_r.copy(n.boundingSphere),_r.applyMatrix4(r),_r.radius+=s,e.ray.intersectsSphere(_r)===!1)return;xa.copy(r).invert(),Di.copy(e.ray).applyMatrix4(xa);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,d=n.index,h=n.attributes.position;if(d!==null){const m=Math.max(0,a.start),_=Math.min(d.count,a.start+a.count);for(let g=m,p=_-1;g<p;g+=c){const f=d.getX(g),w=d.getX(g+1),y=vr(this,e,Di,l,f,w,g);y&&t.push(y)}if(this.isLineLoop){const g=d.getX(_-1),p=d.getX(m),f=vr(this,e,Di,l,g,p,_-1);f&&t.push(f)}}else{const m=Math.max(0,a.start),_=Math.min(h.count,a.start+a.count);for(let g=m,p=_-1;g<p;g+=c){const f=vr(this,e,Di,l,g,g+1,g);f&&t.push(f)}if(this.isLineLoop){const g=vr(this,e,Di,l,_-1,m,_-1);g&&t.push(g)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}function vr(i,e,t,n,r,s,a){const o=i.geometry.attributes.position;if(Pr.fromBufferAttribute(o,r),Lr.fromBufferAttribute(o,s),t.distanceSqToSegment(Pr,Lr,us,ya)>n)return;us.applyMatrix4(i.matrixWorld);const c=e.ray.origin.distanceTo(us);if(!(c<e.near||c>e.far))return{distance:c,point:ya.clone().applyMatrix4(i.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:i}}class nl extends Rt{constructor(e,t,n,r,s,a,o,l,c){super(e,t,n,r,s,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Co extends Rt{constructor(e,t,n=1014,r,s,a,o=1003,l=1003,c,d=1026,u=1){if(d!==1026&&d!==1027)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const h={width:e,height:t,depth:u};super(h,r,s,a,o,l,d,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Bs(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class Ro extends Rt{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class Nr extends on{constructor(e=1,t=1,n=1,r=32,s=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:r,heightSegments:s,openEnded:a,thetaStart:o,thetaLength:l};const c=this;r=Math.floor(r),s=Math.floor(s);const d=[],u=[],h=[],m=[];let _=0;const g=[],p=n/2;let f=0;w(),a===!1&&(e>0&&y(!0),t>0&&y(!1)),this.setIndex(d),this.setAttribute("position",new Bt(u,3)),this.setAttribute("normal",new Bt(h,3)),this.setAttribute("uv",new Bt(m,2));function w(){const v=new I,T=new I;let C=0;const P=(t-e)/n;for(let A=0;A<=s;A++){const M=[],x=A/s,D=x*(t-e)+e;for(let F=0;F<=r;F++){const O=F/r,z=O*l+o,q=Math.sin(z),H=Math.cos(z);T.x=D*q,T.y=-x*n+p,T.z=D*H,u.push(T.x,T.y,T.z),v.set(q,P,H).normalize(),h.push(v.x,v.y,v.z),m.push(O,1-x),M.push(_++)}g.push(M)}for(let A=0;A<r;A++)for(let M=0;M<s;M++){const x=g[M][A],D=g[M+1][A],F=g[M+1][A+1],O=g[M][A+1];(e>0||M!==0)&&(d.push(x,D,O),C+=3),(t>0||M!==s-1)&&(d.push(D,F,O),C+=3)}c.addGroup(f,C,0),f+=C}function y(v){const T=_,C=new ve,P=new I;let A=0;const M=v===!0?e:t,x=v===!0?1:-1;for(let F=1;F<=r;F++)u.push(0,p*x,0),h.push(0,x,0),m.push(.5,.5),_++;const D=_;for(let F=0;F<=r;F++){const z=F/r*l+o,q=Math.cos(z),H=Math.sin(z);P.x=M*H,P.y=p*x,P.z=M*q,u.push(P.x,P.y,P.z),h.push(0,x,0),C.x=q*.5+.5,C.y=H*.5*x+.5,m.push(C.x,C.y),_++}for(let F=0;F<r;F++){const O=T+F,z=D+F;v===!0?d.push(z,z+1,O):d.push(z+1,z,O),A+=3}c.addGroup(f,A,v===!0?1:2),f+=A}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Nr(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Dr extends Nr{constructor(e=1,t=1,n=32,r=1,s=!1,a=0,o=Math.PI*2){super(0,e,t,n,r,s,a,o),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:r,openEnded:s,thetaStart:a,thetaLength:o}}static fromJSON(e){return new Dr(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class un{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){console.warn("THREE.Curve: .getPoint() not implemented.")}getPointAt(e,t){const n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let n,r=this.getPoint(0),s=0;t.push(0);for(let a=1;a<=e;a++)n=this.getPoint(a/e),s+=n.distanceTo(r),t.push(s),r=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){const n=this.getLengths();let r=0;const s=n.length;let a;t?a=t:a=e*n[s-1];let o=0,l=s-1,c;for(;o<=l;)if(r=Math.floor(o+(l-o)/2),c=n[r]-a,c<0)o=r+1;else if(c>0)l=r-1;else{l=r;break}if(r=l,n[r]===a)return r/(s-1);const d=n[r],h=n[r+1]-d,m=(a-d)/h;return(r+m)/(s-1)}getTangent(e,t){let r=e-1e-4,s=e+1e-4;r<0&&(r=0),s>1&&(s=1);const a=this.getPoint(r),o=this.getPoint(s),l=t||(a.isVector2?new ve:new I);return l.copy(o).sub(a).normalize(),l}getTangentAt(e,t){const n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t=!1){const n=new I,r=[],s=[],a=[],o=new I,l=new lt;for(let m=0;m<=e;m++){const _=m/e;r[m]=this.getTangentAt(_,new I)}s[0]=new I,a[0]=new I;let c=Number.MAX_VALUE;const d=Math.abs(r[0].x),u=Math.abs(r[0].y),h=Math.abs(r[0].z);d<=c&&(c=d,n.set(1,0,0)),u<=c&&(c=u,n.set(0,1,0)),h<=c&&n.set(0,0,1),o.crossVectors(r[0],n).normalize(),s[0].crossVectors(r[0],o),a[0].crossVectors(r[0],s[0]);for(let m=1;m<=e;m++){if(s[m]=s[m-1].clone(),a[m]=a[m-1].clone(),o.crossVectors(r[m-1],r[m]),o.length()>Number.EPSILON){o.normalize();const _=Math.acos(Je(r[m-1].dot(r[m]),-1,1));s[m].applyMatrix4(l.makeRotationAxis(o,_))}a[m].crossVectors(r[m],s[m])}if(t===!0){let m=Math.acos(Je(s[0].dot(s[e]),-1,1));m/=e,r[0].dot(o.crossVectors(s[0],s[e]))>0&&(m=-m);for(let _=1;_<=e;_++)s[_].applyMatrix4(l.makeRotationAxis(r[_],m*_)),a[_].crossVectors(r[_],s[_])}return{tangents:r,normals:s,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class Vs extends un{constructor(e=0,t=0,n=1,r=1,s=0,a=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=r,this.aStartAngle=s,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(e,t=new ve){const n=t,r=Math.PI*2;let s=this.aEndAngle-this.aStartAngle;const a=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=r;for(;s>r;)s-=r;s<Number.EPSILON&&(a?s=0:s=r),this.aClockwise===!0&&!a&&(s===r?s=-r:s=s-r);const o=this.aStartAngle+e*s;let l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){const d=Math.cos(this.aRotation),u=Math.sin(this.aRotation),h=l-this.aX,m=c-this.aY;l=h*d-m*u+this.aX,c=h*u+m*d+this.aY}return n.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class il extends Vs{constructor(e,t,n,r,s,a){super(e,t,n,n,r,s,a),this.isArcCurve=!0,this.type="ArcCurve"}}function Hs(){let i=0,e=0,t=0,n=0;function r(s,a,o,l){i=s,e=o,t=-3*s+3*a-2*o-l,n=2*s-2*a+o+l}return{initCatmullRom:function(s,a,o,l,c){r(a,o,c*(o-s),c*(l-a))},initNonuniformCatmullRom:function(s,a,o,l,c,d,u){let h=(a-s)/c-(o-s)/(c+d)+(o-a)/d,m=(o-a)/d-(l-a)/(d+u)+(l-o)/u;h*=d,m*=d,r(a,o,h,m)},calc:function(s){const a=s*s,o=a*s;return i+e*s+t*a+n*o}}}const xr=new I,hs=new Hs,fs=new Hs,ps=new Hs;class rl extends un{constructor(e=[],t=!1,n="centripetal",r=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=r}getPoint(e,t=new I){const n=t,r=this.points,s=r.length,a=(s-(this.closed?0:1))*e;let o=Math.floor(a),l=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/s)+1)*s:l===0&&o===s-1&&(o=s-2,l=1);let c,d;this.closed||o>0?c=r[(o-1)%s]:(xr.subVectors(r[0],r[1]).add(r[0]),c=xr);const u=r[o%s],h=r[(o+1)%s];if(this.closed||o+2<s?d=r[(o+2)%s]:(xr.subVectors(r[s-1],r[s-2]).add(r[s-1]),d=xr),this.curveType==="centripetal"||this.curveType==="chordal"){const m=this.curveType==="chordal"?.5:.25;let _=Math.pow(c.distanceToSquared(u),m),g=Math.pow(u.distanceToSquared(h),m),p=Math.pow(h.distanceToSquared(d),m);g<1e-4&&(g=1),_<1e-4&&(_=g),p<1e-4&&(p=g),hs.initNonuniformCatmullRom(c.x,u.x,h.x,d.x,_,g,p),fs.initNonuniformCatmullRom(c.y,u.y,h.y,d.y,_,g,p),ps.initNonuniformCatmullRom(c.z,u.z,h.z,d.z,_,g,p)}else this.curveType==="catmullrom"&&(hs.initCatmullRom(c.x,u.x,h.x,d.x,this.tension),fs.initCatmullRom(c.y,u.y,h.y,d.y,this.tension),ps.initCatmullRom(c.z,u.z,h.z,d.z,this.tension));return n.set(hs.calc(l),fs.calc(l),ps.calc(l)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const r=e.points[t];this.points.push(r.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const r=this.points[t];e.points.push(r.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const r=e.points[t];this.points.push(new I().fromArray(r))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function Sa(i,e,t,n,r){const s=(n-e)*.5,a=(r-t)*.5,o=i*i,l=i*o;return(2*t-2*n+s+a)*l+(-3*t+3*n-2*s-a)*o+s*i+t}function sl(i,e){const t=1-i;return t*t*e}function al(i,e){return 2*(1-i)*i*e}function ol(i,e){return i*i*e}function Bi(i,e,t,n){return sl(i,e)+al(i,t)+ol(i,n)}function cl(i,e){const t=1-i;return t*t*t*e}function ll(i,e){const t=1-i;return 3*t*t*i*e}function dl(i,e){return 3*(1-i)*i*i*e}function ul(i,e){return i*i*i*e}function ki(i,e,t,n,r){return cl(i,e)+ll(i,t)+dl(i,n)+ul(i,r)}class Po extends un{constructor(e=new ve,t=new ve,n=new ve,r=new ve){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=r}getPoint(e,t=new ve){const n=t,r=this.v0,s=this.v1,a=this.v2,o=this.v3;return n.set(ki(e,r.x,s.x,a.x,o.x),ki(e,r.y,s.y,a.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class hl extends un{constructor(e=new I,t=new I,n=new I,r=new I){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=r}getPoint(e,t=new I){const n=t,r=this.v0,s=this.v1,a=this.v2,o=this.v3;return n.set(ki(e,r.x,s.x,a.x,o.x),ki(e,r.y,s.y,a.y,o.y),ki(e,r.z,s.z,a.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class Lo extends un{constructor(e=new ve,t=new ve){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new ve){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new ve){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class fl extends un{constructor(e=new I,t=new I){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new I){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new I){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Do extends un{constructor(e=new ve,t=new ve,n=new ve){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new ve){const n=t,r=this.v0,s=this.v1,a=this.v2;return n.set(Bi(e,r.x,s.x,a.x),Bi(e,r.y,s.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class pl extends un{constructor(e=new I,t=new I,n=new I){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new I){const n=t,r=this.v0,s=this.v1,a=this.v2;return n.set(Bi(e,r.x,s.x,a.x),Bi(e,r.y,s.y,a.y),Bi(e,r.z,s.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Io extends un{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new ve){const n=t,r=this.points,s=(r.length-1)*e,a=Math.floor(s),o=s-a,l=r[a===0?a:a-1],c=r[a],d=r[a>r.length-2?r.length-1:a+1],u=r[a>r.length-3?r.length-1:a+2];return n.set(Sa(o,l.x,c.x,d.x,u.x),Sa(o,l.y,c.y,d.y,u.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const r=e.points[t];this.points.push(r.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const r=this.points[t];e.points.push(r.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const r=e.points[t];this.points.push(new ve().fromArray(r))}return this}}var bs=Object.freeze({__proto__:null,ArcCurve:il,CatmullRomCurve3:rl,CubicBezierCurve:Po,CubicBezierCurve3:hl,EllipseCurve:Vs,LineCurve:Lo,LineCurve3:fl,QuadraticBezierCurve:Do,QuadraticBezierCurve3:pl,SplineCurve:Io});class ml extends un{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){const e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){const n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new bs[n](t,e))}return this}getPoint(e,t){const n=e*this.getLength(),r=this.getCurveLengths();let s=0;for(;s<r.length;){if(r[s]>=n){const a=r[s]-n,o=this.curves[s],l=o.getLength(),c=l===0?0:1-a/l;return o.getPointAt(c,t)}s++}return null}getLength(){const e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const e=[];let t=0;for(let n=0,r=this.curves.length;n<r;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){const t=[];let n;for(let r=0,s=this.curves;r<s.length;r++){const a=s[r],o=a.isEllipseCurve?e*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?e*a.points.length:e,l=a.getPoints(o);for(let c=0;c<l.length;c++){const d=l[c];n&&n.equals(d)||(t.push(d),n=d)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const r=e.curves[t];this.curves.push(r.clone())}return this.autoClose=e.autoClose,this}toJSON(){const e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){const r=this.curves[t];e.curves.push(r.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const r=e.curves[t];this.curves.push(new bs[r.type]().fromJSON(r))}return this}}class Ma extends ml{constructor(e){super(),this.type="Path",this.currentPoint=new ve,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){const n=new Lo(this.currentPoint.clone(),new ve(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,r){const s=new Do(this.currentPoint.clone(),new ve(e,t),new ve(n,r));return this.curves.push(s),this.currentPoint.set(n,r),this}bezierCurveTo(e,t,n,r,s,a){const o=new Po(this.currentPoint.clone(),new ve(e,t),new ve(n,r),new ve(s,a));return this.curves.push(o),this.currentPoint.set(s,a),this}splineThru(e){const t=[this.currentPoint.clone()].concat(e),n=new Io(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,r,s,a){const o=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+o,t+l,n,r,s,a),this}absarc(e,t,n,r,s,a){return this.absellipse(e,t,n,n,r,s,a),this}ellipse(e,t,n,r,s,a,o,l){const c=this.currentPoint.x,d=this.currentPoint.y;return this.absellipse(e+c,t+d,n,r,s,a,o,l),this}absellipse(e,t,n,r,s,a,o,l){const c=new Vs(e,t,n,r,s,a,o,l);if(this.curves.length>0){const u=c.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(c);const d=c.getPoint(1);return this.currentPoint.copy(d),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){const e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}}class Uo extends Ma{constructor(e){super(e),this.uuid=Xn(),this.type="Shape",this.holes=[]}getPointsHoles(e){const t=[];for(let n=0,r=this.holes.length;n<r;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){const r=e.holes[t];this.holes.push(r.clone())}return this}toJSON(){const e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){const r=this.holes[t];e.holes.push(r.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){const r=e.holes[t];this.holes.push(new Ma().fromJSON(r))}return this}}function gl(i,e,t=2){const n=e&&e.length,r=n?e[0]*t:i.length;let s=Fo(i,0,r,t,!0);const a=[];if(!s||s.next===s.prev)return a;let o,l,c;if(n&&(s=Sl(i,e,s,t)),i.length>80*t){o=1/0,l=1/0;let d=-1/0,u=-1/0;for(let h=t;h<r;h+=t){const m=i[h],_=i[h+1];m<o&&(o=m),_<l&&(l=_),m>d&&(d=m),_>u&&(u=_)}c=Math.max(d-o,u-l),c=c!==0?32767/c:0}return qi(s,a,t,o,l,c,0),a}function Fo(i,e,t,n,r){let s;if(r===Dl(i,e,t,n)>0)for(let a=e;a<t;a+=n)s=Ea(a/n|0,i[a],i[a+1],s);else for(let a=t-n;a>=e;a-=n)s=Ea(a/n|0,i[a],i[a+1],s);return s&&yi(s,s.next)&&(Xi(s),s=s.next),s}function qn(i,e){if(!i)return i;e||(e=i);let t=i,n;do if(n=!1,!t.steiner&&(yi(t,t.next)||xt(t.prev,t,t.next)===0)){if(Xi(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function qi(i,e,t,n,r,s,a){if(!i)return;!a&&s&&bl(i,n,r,s);let o=i;for(;i.prev!==i.next;){const l=i.prev,c=i.next;if(s?vl(i,n,r,s):_l(i)){e.push(l.i,i.i,c.i),Xi(i),i=c.next,o=c.next;continue}if(i=c,i===o){a?a===1?(i=xl(qn(i),e),qi(i,e,t,n,r,s,2)):a===2&&yl(i,e,t,n,r,s):qi(qn(i),e,t,n,r,s,1);break}}}function _l(i){const e=i.prev,t=i,n=i.next;if(xt(e,t,n)>=0)return!1;const r=e.x,s=t.x,a=n.x,o=e.y,l=t.y,c=n.y,d=Math.min(r,s,a),u=Math.min(o,l,c),h=Math.max(r,s,a),m=Math.max(o,l,c);let _=n.next;for(;_!==e;){if(_.x>=d&&_.x<=h&&_.y>=u&&_.y<=m&&Ui(r,o,s,l,a,c,_.x,_.y)&&xt(_.prev,_,_.next)>=0)return!1;_=_.next}return!0}function vl(i,e,t,n){const r=i.prev,s=i,a=i.next;if(xt(r,s,a)>=0)return!1;const o=r.x,l=s.x,c=a.x,d=r.y,u=s.y,h=a.y,m=Math.min(o,l,c),_=Math.min(d,u,h),g=Math.max(o,l,c),p=Math.max(d,u,h),f=ws(m,_,e,t,n),w=ws(g,p,e,t,n);let y=i.prevZ,v=i.nextZ;for(;y&&y.z>=f&&v&&v.z<=w;){if(y.x>=m&&y.x<=g&&y.y>=_&&y.y<=p&&y!==r&&y!==a&&Ui(o,d,l,u,c,h,y.x,y.y)&&xt(y.prev,y,y.next)>=0||(y=y.prevZ,v.x>=m&&v.x<=g&&v.y>=_&&v.y<=p&&v!==r&&v!==a&&Ui(o,d,l,u,c,h,v.x,v.y)&&xt(v.prev,v,v.next)>=0))return!1;v=v.nextZ}for(;y&&y.z>=f;){if(y.x>=m&&y.x<=g&&y.y>=_&&y.y<=p&&y!==r&&y!==a&&Ui(o,d,l,u,c,h,y.x,y.y)&&xt(y.prev,y,y.next)>=0)return!1;y=y.prevZ}for(;v&&v.z<=w;){if(v.x>=m&&v.x<=g&&v.y>=_&&v.y<=p&&v!==r&&v!==a&&Ui(o,d,l,u,c,h,v.x,v.y)&&xt(v.prev,v,v.next)>=0)return!1;v=v.nextZ}return!0}function xl(i,e){let t=i;do{const n=t.prev,r=t.next.next;!yi(n,r)&&Oo(n,t,t.next,r)&&Wi(n,r)&&Wi(r,n)&&(e.push(n.i,t.i,r.i),Xi(t),Xi(t.next),t=i=r),t=t.next}while(t!==i);return qn(t)}function yl(i,e,t,n,r,s){let a=i;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&Rl(a,o)){let l=Bo(a,o);a=qn(a,a.next),l=qn(l,l.next),qi(a,e,t,n,r,s,0),qi(l,e,t,n,r,s,0);return}o=o.next}a=a.next}while(a!==i)}function Sl(i,e,t,n){const r=[];for(let s=0,a=e.length;s<a;s++){const o=e[s]*n,l=s<a-1?e[s+1]*n:i.length,c=Fo(i,o,l,n,!1);c===c.next&&(c.steiner=!0),r.push(Cl(c))}r.sort(Ml);for(let s=0;s<r.length;s++)t=El(r[s],t);return t}function Ml(i,e){let t=i.x-e.x;if(t===0&&(t=i.y-e.y,t===0)){const n=(i.next.y-i.y)/(i.next.x-i.x),r=(e.next.y-e.y)/(e.next.x-e.x);t=n-r}return t}function El(i,e){const t=Tl(i,e);if(!t)return e;const n=Bo(t,i);return qn(n,n.next),qn(t,t.next)}function Tl(i,e){let t=e;const n=i.x,r=i.y;let s=-1/0,a;if(yi(i,t))return t;do{if(yi(i,t.next))return t.next;if(r<=t.y&&r>=t.next.y&&t.next.y!==t.y){const u=t.x+(r-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(u<=n&&u>s&&(s=u,a=t.x<t.next.x?t:t.next,u===n))return a}t=t.next}while(t!==e);if(!a)return null;const o=a,l=a.x,c=a.y;let d=1/0;t=a;do{if(n>=t.x&&t.x>=l&&n!==t.x&&No(r<c?n:s,r,l,c,r<c?s:n,r,t.x,t.y)){const u=Math.abs(r-t.y)/(n-t.x);Wi(t,i)&&(u<d||u===d&&(t.x>a.x||t.x===a.x&&Al(a,t)))&&(a=t,d=u)}t=t.next}while(t!==o);return a}function Al(i,e){return xt(i.prev,i,e.prev)<0&&xt(e.next,i,i.next)<0}function bl(i,e,t,n){let r=i;do r.z===0&&(r.z=ws(r.x,r.y,e,t,n)),r.prevZ=r.prev,r.nextZ=r.next,r=r.next;while(r!==i);r.prevZ.nextZ=null,r.prevZ=null,wl(r)}function wl(i){let e,t=1;do{let n=i,r;i=null;let s=null;for(e=0;n;){e++;let a=n,o=0;for(let c=0;c<t&&(o++,a=a.nextZ,!!a);c++);let l=t;for(;o>0||l>0&&a;)o!==0&&(l===0||!a||n.z<=a.z)?(r=n,n=n.nextZ,o--):(r=a,a=a.nextZ,l--),s?s.nextZ=r:i=r,r.prevZ=s,s=r;n=a}s.nextZ=null,t*=2}while(e>1);return i}function ws(i,e,t,n,r){return i=(i-t)*r|0,e=(e-n)*r|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,i|e<<1}function Cl(i){let e=i,t=i;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==i);return t}function No(i,e,t,n,r,s,a,o){return(r-a)*(e-o)>=(i-a)*(s-o)&&(i-a)*(n-o)>=(t-a)*(e-o)&&(t-a)*(s-o)>=(r-a)*(n-o)}function Ui(i,e,t,n,r,s,a,o){return!(i===a&&e===o)&&No(i,e,t,n,r,s,a,o)}function Rl(i,e){return i.next.i!==e.i&&i.prev.i!==e.i&&!Pl(i,e)&&(Wi(i,e)&&Wi(e,i)&&Ll(i,e)&&(xt(i.prev,i,e.prev)||xt(i,e.prev,e))||yi(i,e)&&xt(i.prev,i,i.next)>0&&xt(e.prev,e,e.next)>0)}function xt(i,e,t){return(e.y-i.y)*(t.x-e.x)-(e.x-i.x)*(t.y-e.y)}function yi(i,e){return i.x===e.x&&i.y===e.y}function Oo(i,e,t,n){const r=Sr(xt(i,e,t)),s=Sr(xt(i,e,n)),a=Sr(xt(t,n,i)),o=Sr(xt(t,n,e));return!!(r!==s&&a!==o||r===0&&yr(i,t,e)||s===0&&yr(i,n,e)||a===0&&yr(t,i,n)||o===0&&yr(t,e,n))}function yr(i,e,t){return e.x<=Math.max(i.x,t.x)&&e.x>=Math.min(i.x,t.x)&&e.y<=Math.max(i.y,t.y)&&e.y>=Math.min(i.y,t.y)}function Sr(i){return i>0?1:i<0?-1:0}function Pl(i,e){let t=i;do{if(t.i!==i.i&&t.next.i!==i.i&&t.i!==e.i&&t.next.i!==e.i&&Oo(t,t.next,i,e))return!0;t=t.next}while(t!==i);return!1}function Wi(i,e){return xt(i.prev,i,i.next)<0?xt(i,e,i.next)>=0&&xt(i,i.prev,e)>=0:xt(i,e,i.prev)<0||xt(i,i.next,e)<0}function Ll(i,e){let t=i,n=!1;const r=(i.x+e.x)/2,s=(i.y+e.y)/2;do t.y>s!=t.next.y>s&&t.next.y!==t.y&&r<(t.next.x-t.x)*(s-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==i);return n}function Bo(i,e){const t=Cs(i.i,i.x,i.y),n=Cs(e.i,e.x,e.y),r=i.next,s=e.prev;return i.next=e,e.prev=i,t.next=r,r.prev=t,n.next=t,t.prev=n,s.next=n,n.prev=s,n}function Ea(i,e,t,n){const r=Cs(i,e,t);return n?(r.next=n.next,r.prev=n,n.next.prev=r,n.next=r):(r.prev=r,r.next=r),r}function Xi(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function Cs(i,e,t){return{i,x:e,y:t,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function Dl(i,e,t,n){let r=0;for(let s=e,a=t-n;s<t;s+=n)r+=(i[a]-i[s])*(i[s+1]+i[a+1]),a=s;return r}class Il{static triangulate(e,t,n=2){return gl(e,t,n)}}class mi{static area(e){const t=e.length;let n=0;for(let r=t-1,s=0;s<t;r=s++)n+=e[r].x*e[s].y-e[s].x*e[r].y;return n*.5}static isClockWise(e){return mi.area(e)<0}static triangulateShape(e,t){const n=[],r=[],s=[];Ta(e),Aa(n,e);let a=e.length;t.forEach(Ta);for(let l=0;l<t.length;l++)r.push(a),a+=t[l].length,Aa(n,t[l]);const o=Il.triangulate(n,r);for(let l=0;l<o.length;l+=3)s.push(o.slice(l,l+3));return s}}function Ta(i){const e=i.length;e>2&&i[e-1].equals(i[0])&&i.pop()}function Aa(i,e){for(let t=0;t<e.length;t++)i.push(e[t].x),i.push(e[t].y)}class qs extends on{constructor(e=new Uo([new ve(.5,.5),new ve(-.5,.5),new ve(-.5,-.5),new ve(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];const n=this,r=[],s=[];for(let o=0,l=e.length;o<l;o++){const c=e[o];a(c)}this.setAttribute("position",new Bt(r,3)),this.setAttribute("uv",new Bt(s,2)),this.computeVertexNormals();function a(o){const l=[],c=t.curveSegments!==void 0?t.curveSegments:12,d=t.steps!==void 0?t.steps:1,u=t.depth!==void 0?t.depth:1;let h=t.bevelEnabled!==void 0?t.bevelEnabled:!0,m=t.bevelThickness!==void 0?t.bevelThickness:.2,_=t.bevelSize!==void 0?t.bevelSize:m-.1,g=t.bevelOffset!==void 0?t.bevelOffset:0,p=t.bevelSegments!==void 0?t.bevelSegments:3;const f=t.extrudePath,w=t.UVGenerator!==void 0?t.UVGenerator:Ul;let y,v=!1,T,C,P,A;f&&(y=f.getSpacedPoints(d),v=!0,h=!1,T=f.computeFrenetFrames(d,!1),C=new I,P=new I,A=new I),h||(p=0,m=0,_=0,g=0);const M=o.extractPoints(c);let x=M.shape;const D=M.holes;if(!mi.isClockWise(x)){x=x.reverse();for(let oe=0,ne=D.length;oe<ne;oe++){const ee=D[oe];mi.isClockWise(ee)&&(D[oe]=ee.reverse())}}function O(oe){const ee=10000000000000001e-36;let J=oe[0];for(let me=1;me<=oe.length;me++){const ce=me%oe.length,pe=oe[ce],We=pe.x-J.x,Ve=pe.y-J.y,b=We*We+Ve*Ve,S=Math.max(Math.abs(pe.x),Math.abs(pe.y),Math.abs(J.x),Math.abs(J.y)),k=ee*S*S;if(b<=k){oe.splice(ce,1),me--;continue}J=pe}}O(x),D.forEach(O);const z=D.length,q=x;for(let oe=0;oe<z;oe++){const ne=D[oe];x=x.concat(ne)}function H(oe,ne,ee){return ne||console.error("THREE.ExtrudeGeometry: vec does not exist"),oe.clone().addScaledVector(ne,ee)}const re=x.length;function X(oe,ne,ee){let J,me,ce;const pe=oe.x-ne.x,We=oe.y-ne.y,Ve=ee.x-oe.x,b=ee.y-oe.y,S=pe*pe+We*We,k=pe*b-We*Ve;if(Math.abs(k)>Number.EPSILON){const W=Math.sqrt(S),se=Math.sqrt(Ve*Ve+b*b),$=ne.x-We/W,Re=ne.y+pe/W,he=ee.x-b/se,be=ee.y+Ve/se,we=((he-$)*b-(be-Re)*Ve)/(pe*b-We*Ve);J=$+pe*we-oe.x,me=Re+We*we-oe.y;const de=J*J+me*me;if(de<=2)return new ve(J,me);ce=Math.sqrt(de/2)}else{let W=!1;pe>Number.EPSILON?Ve>Number.EPSILON&&(W=!0):pe<-Number.EPSILON?Ve<-Number.EPSILON&&(W=!0):Math.sign(We)===Math.sign(b)&&(W=!0),W?(J=-We,me=pe,ce=Math.sqrt(S)):(J=pe,me=We,ce=Math.sqrt(S/2))}return new ve(J/ce,me/ce)}const fe=[];for(let oe=0,ne=q.length,ee=ne-1,J=oe+1;oe<ne;oe++,ee++,J++)ee===ne&&(ee=0),J===ne&&(J=0),fe[oe]=X(q[oe],q[ee],q[J]);const ge=[];let Ee,ze=fe.concat();for(let oe=0,ne=z;oe<ne;oe++){const ee=D[oe];Ee=[];for(let J=0,me=ee.length,ce=me-1,pe=J+1;J<me;J++,ce++,pe++)ce===me&&(ce=0),pe===me&&(pe=0),Ee[J]=X(ee[J],ee[ce],ee[pe]);ge.push(Ee),ze=ze.concat(Ee)}let Ze;if(p===0)Ze=mi.triangulateShape(q,D);else{const oe=[],ne=[];for(let ee=0;ee<p;ee++){const J=ee/p,me=m*Math.cos(J*Math.PI/2),ce=_*Math.sin(J*Math.PI/2)+g;for(let pe=0,We=q.length;pe<We;pe++){const Ve=H(q[pe],fe[pe],ce);Le(Ve.x,Ve.y,-me),J===0&&oe.push(Ve)}for(let pe=0,We=z;pe<We;pe++){const Ve=D[pe];Ee=ge[pe];const b=[];for(let S=0,k=Ve.length;S<k;S++){const W=H(Ve[S],Ee[S],ce);Le(W.x,W.y,-me),J===0&&b.push(W)}J===0&&ne.push(b)}}Ze=mi.triangulateShape(oe,ne)}const et=Ze.length,Ie=_+g;for(let oe=0;oe<re;oe++){const ne=h?H(x[oe],ze[oe],Ie):x[oe];v?(P.copy(T.normals[0]).multiplyScalar(ne.x),C.copy(T.binormals[0]).multiplyScalar(ne.y),A.copy(y[0]).add(P).add(C),Le(A.x,A.y,A.z)):Le(ne.x,ne.y,0)}for(let oe=1;oe<=d;oe++)for(let ne=0;ne<re;ne++){const ee=h?H(x[ne],ze[ne],Ie):x[ne];v?(P.copy(T.normals[oe]).multiplyScalar(ee.x),C.copy(T.binormals[oe]).multiplyScalar(ee.y),A.copy(y[oe]).add(P).add(C),Le(A.x,A.y,A.z)):Le(ee.x,ee.y,u/d*oe)}for(let oe=p-1;oe>=0;oe--){const ne=oe/p,ee=m*Math.cos(ne*Math.PI/2),J=_*Math.sin(ne*Math.PI/2)+g;for(let me=0,ce=q.length;me<ce;me++){const pe=H(q[me],fe[me],J);Le(pe.x,pe.y,u+ee)}for(let me=0,ce=D.length;me<ce;me++){const pe=D[me];Ee=ge[me];for(let We=0,Ve=pe.length;We<Ve;We++){const b=H(pe[We],Ee[We],J);v?Le(b.x,b.y+y[d-1].y,y[d-1].x+ee):Le(b.x,b.y,u+ee)}}}Q(),ae();function Q(){const oe=r.length/3;if(h){let ne=0,ee=re*ne;for(let J=0;J<et;J++){const me=Ze[J];Ae(me[2]+ee,me[1]+ee,me[0]+ee)}ne=d+p*2,ee=re*ne;for(let J=0;J<et;J++){const me=Ze[J];Ae(me[0]+ee,me[1]+ee,me[2]+ee)}}else{for(let ne=0;ne<et;ne++){const ee=Ze[ne];Ae(ee[2],ee[1],ee[0])}for(let ne=0;ne<et;ne++){const ee=Ze[ne];Ae(ee[0]+re*d,ee[1]+re*d,ee[2]+re*d)}}n.addGroup(oe,r.length/3-oe,0)}function ae(){const oe=r.length/3;let ne=0;xe(q,ne),ne+=q.length;for(let ee=0,J=D.length;ee<J;ee++){const me=D[ee];xe(me,ne),ne+=me.length}n.addGroup(oe,r.length/3-oe,1)}function xe(oe,ne){let ee=oe.length;for(;--ee>=0;){const J=ee;let me=ee-1;me<0&&(me=oe.length-1);for(let ce=0,pe=d+p*2;ce<pe;ce++){const We=re*ce,Ve=re*(ce+1),b=ne+J+We,S=ne+me+We,k=ne+me+Ve,W=ne+J+Ve;qe(b,S,k,W)}}}function Le(oe,ne,ee){l.push(oe),l.push(ne),l.push(ee)}function Ae(oe,ne,ee){it(oe),it(ne),it(ee);const J=r.length/3,me=w.generateTopUV(n,r,J-3,J-2,J-1);L(me[0]),L(me[1]),L(me[2])}function qe(oe,ne,ee,J){it(oe),it(ne),it(J),it(ne),it(ee),it(J);const me=r.length/3,ce=w.generateSideWallUV(n,r,me-6,me-3,me-2,me-1);L(ce[0]),L(ce[1]),L(ce[3]),L(ce[1]),L(ce[2]),L(ce[3])}function it(oe){r.push(l[oe*3+0]),r.push(l[oe*3+1]),r.push(l[oe*3+2])}function L(oe){s.push(oe.x),s.push(oe.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),t=this.parameters.shapes,n=this.parameters.options;return Fl(t,n,e)}static fromJSON(e,t){const n=[];for(let s=0,a=e.shapes.length;s<a;s++){const o=t[e.shapes[s]];n.push(o)}const r=e.options.extrudePath;return r!==void 0&&(e.options.extrudePath=new bs[r.type]().fromJSON(r)),new qs(n,e.options)}}const Ul={generateTopUV:function(i,e,t,n,r){const s=e[t*3],a=e[t*3+1],o=e[n*3],l=e[n*3+1],c=e[r*3],d=e[r*3+1];return[new ve(s,a),new ve(o,l),new ve(c,d)]},generateSideWallUV:function(i,e,t,n,r,s){const a=e[t*3],o=e[t*3+1],l=e[t*3+2],c=e[n*3],d=e[n*3+1],u=e[n*3+2],h=e[r*3],m=e[r*3+1],_=e[r*3+2],g=e[s*3],p=e[s*3+1],f=e[s*3+2];return Math.abs(o-d)<Math.abs(a-c)?[new ve(a,1-l),new ve(c,1-u),new ve(h,1-_),new ve(g,1-f)]:[new ve(o,1-l),new ve(d,1-u),new ve(m,1-_),new ve(p,1-f)]}};function Fl(i,e,t){if(t.shapes=[],Array.isArray(i))for(let n=0,r=i.length;n<r;n++){const s=i[n];t.shapes.push(s.uuid)}else t.shapes.push(i.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}class Zi extends on{constructor(e=1,t=1,n=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:r};const s=e/2,a=t/2,o=Math.floor(n),l=Math.floor(r),c=o+1,d=l+1,u=e/o,h=t/l,m=[],_=[],g=[],p=[];for(let f=0;f<d;f++){const w=f*h-a;for(let y=0;y<c;y++){const v=y*u-s;_.push(v,-w,0),g.push(0,0,1),p.push(y/o),p.push(1-f/l)}}for(let f=0;f<l;f++)for(let w=0;w<o;w++){const y=w+c*f,v=w+c*(f+1),T=w+1+c*(f+1),C=w+1+c*f;m.push(y,v,C),m.push(v,T,C)}this.setIndex(m),this.setAttribute("position",new Bt(_,3)),this.setAttribute("normal",new Bt(g,3)),this.setAttribute("uv",new Bt(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Zi(e.width,e.height,e.widthSegments,e.heightSegments)}}class Yi extends Yn{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Ke(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ke(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=0,this.normalScale=new ve(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new an,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Nl extends Yn{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Ke(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ke(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=0,this.normalScale=new ve(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new an,this.combine=0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Ol extends Yn{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=3200,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Bl extends Yn{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const ms={enabled:!1,files:{},add:function(i,e){this.enabled!==!1&&(this.files[i]=e)},get:function(i){if(this.enabled!==!1)return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};class kl{constructor(e,t,n){const r=this;let s=!1,a=0,o=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.abortController=new AbortController,this.itemStart=function(d){o++,s===!1&&r.onStart!==void 0&&r.onStart(d,a,o),s=!0},this.itemEnd=function(d){a++,r.onProgress!==void 0&&r.onProgress(d,a,o),a===o&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(d){r.onError!==void 0&&r.onError(d)},this.resolveURL=function(d){return l?l(d):d},this.setURLModifier=function(d){return l=d,this},this.addHandler=function(d,u){return c.push(d,u),this},this.removeHandler=function(d){const u=c.indexOf(d);return u!==-1&&c.splice(u,2),this},this.getHandler=function(d){for(let u=0,h=c.length;u<h;u+=2){const m=c[u],_=c[u+1];if(m.global&&(m.lastIndex=0),m.test(d))return _}return null},this.abort=function(){return this.abortController.abort(),this.abortController=new AbortController,this}}}const zl=new kl;class Ws{constructor(e){this.manager=e!==void 0?e:zl,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(r,s){n.load(e,r,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}}Ws.DEFAULT_MATERIAL_NAME="__DEFAULT";const ci=new WeakMap;class Gl extends Ws{constructor(e){super(e)}load(e,t,n,r){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,a=ms.get(`image:${e}`);if(a!==void 0){if(a.complete===!0)s.manager.itemStart(e),setTimeout(function(){t&&t(a),s.manager.itemEnd(e)},0);else{let u=ci.get(a);u===void 0&&(u=[],ci.set(a,u)),u.push({onLoad:t,onError:r})}return a}const o=Vi("img");function l(){d(),t&&t(this);const u=ci.get(this)||[];for(let h=0;h<u.length;h++){const m=u[h];m.onLoad&&m.onLoad(this)}ci.delete(this),s.manager.itemEnd(e)}function c(u){d(),r&&r(u),ms.remove(`image:${e}`);const h=ci.get(this)||[];for(let m=0;m<h.length;m++){const _=h[m];_.onError&&_.onError(u)}ci.delete(this),s.manager.itemError(e),s.manager.itemEnd(e)}function d(){o.removeEventListener("load",l,!1),o.removeEventListener("error",c,!1)}return o.addEventListener("load",l,!1),o.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),ms.add(`image:${e}`,o),s.manager.itemStart(e),o.src=e,o}}class Vl extends Ws{constructor(e){super(e)}load(e,t,n,r){const s=new Rt,a=new Gl(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(o){s.image=o,s.needsUpdate=!0,t!==void 0&&t(s)},n,r),s}}class Or extends Tt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Ke(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}class Hl extends Or{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Tt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Ke(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}}const gs=new lt,ba=new I,wa=new I;class ko{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ve(512,512),this.mapType=1009,this.map=null,this.mapPass=null,this.matrix=new lt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Gs,this._frameExtents=new ve(1,1),this._viewportCount=1,this._viewports=[new ct(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;ba.setFromMatrixPosition(e.matrixWorld),t.position.copy(ba),wa.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(wa),t.updateMatrixWorld(),gs.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(gs,t.coordinateSystem,t.reversedDepth),t.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(gs)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const Ca=new lt,Ii=new I,_s=new I;class ql extends ko{constructor(){super(new Xt(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new ve(4,2),this._viewportCount=6,this._viewports=[new ct(2,1,1,1),new ct(0,1,1,1),new ct(3,1,1,1),new ct(1,1,1,1),new ct(3,0,1,1),new ct(1,0,1,1)],this._cubeDirections=[new I(1,0,0),new I(-1,0,0),new I(0,0,1),new I(0,0,-1),new I(0,1,0),new I(0,-1,0)],this._cubeUps=[new I(0,1,0),new I(0,1,0),new I(0,1,0),new I(0,1,0),new I(0,0,1),new I(0,0,-1)]}updateMatrices(e,t=0){const n=this.camera,r=this.matrix,s=e.distance||n.far;s!==n.far&&(n.far=s,n.updateProjectionMatrix()),Ii.setFromMatrixPosition(e.matrixWorld),n.position.copy(Ii),_s.copy(n.position),_s.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(_s),n.updateMatrixWorld(),r.makeTranslation(-Ii.x,-Ii.y,-Ii.z),Ca.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ca,n.coordinateSystem,n.reversedDepth)}}class Wl extends Or{constructor(e,t,n=0,r=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=r,this.shadow=new ql}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class zo extends To{constructor(e=-1,t=1,n=1,r=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=r,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,r,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=n-e,a=n+e,o=r+t,l=r-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,d=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,a=s+c*this.view.width,o-=d*this.view.offsetY,l=o-d*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class Xl extends ko{constructor(){super(new zo(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Ra extends Or{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Tt.DEFAULT_UP),this.updateMatrix(),this.target=new Tt,this.shadow=new Xl}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class Yl extends Or{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class $l extends Xt{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}const Pa=new lt;class Go{constructor(e,t,n=0,r=1/0){this.ray=new ks(e,t),this.near=n,this.far=r,this.camera=null,this.layers=new zs,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return Pa.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Pa),this}intersectObject(e,t=!0,n=[]){return Rs(e,this,n,t),n.sort(La),n}intersectObjects(e,t=!0,n=[]){for(let r=0,s=e.length;r<s;r++)Rs(e[r],this,n,t);return n.sort(La),n}}function La(i,e){return i.distance-e.distance}function Rs(i,e,t,n){let r=!0;if(i.layers.test(e.layers)&&i.raycast(e,t)===!1&&(r=!1),r===!0&&n===!0){const s=i.children;for(let a=0,o=s.length;a<o;a++)Rs(s[a],e,t,!0)}}function Da(i,e,t,n){const r=Zl(n);switch(t){case 1021:return i*e;case 1028:return i*e/r.components*r.byteLength;case 1029:return i*e/r.components*r.byteLength;case 1030:return i*e*2/r.components*r.byteLength;case 1031:return i*e*2/r.components*r.byteLength;case 1022:return i*e*3/r.components*r.byteLength;case 1023:return i*e*4/r.components*r.byteLength;case 1033:return i*e*4/r.components*r.byteLength;case 33776:case 33777:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case 33778:case 33779:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case 35841:case 35843:return Math.max(i,16)*Math.max(e,8)/4;case 35840:case 35842:return Math.max(i,8)*Math.max(e,8)/2;case 36196:case 37492:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case 37496:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case 37808:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case 37809:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case 37810:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case 37811:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case 37812:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case 37813:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case 37814:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case 37815:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case 37816:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case 37817:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case 37818:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case 37819:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case 37820:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case 37821:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case 36492:case 36494:case 36495:return Math.ceil(i/4)*Math.ceil(e/4)*16;case 36283:case 36284:return Math.ceil(i/4)*Math.ceil(e/4)*8;case 36285:case 36286:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Zl(i){switch(i){case 1009:case 1010:return{byteLength:1,components:1};case 1012:case 1011:case 1016:return{byteLength:2,components:1};case 1017:case 1018:return{byteLength:2,components:4};case 1014:case 1013:case 1015:return{byteLength:4,components:1};case 35902:case 35899:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"180"}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="180");/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Vo(){let i=null,e=!1,t=null,n=null;function r(s,a){t(s,a),n=i.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(r),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){i=s}}}function Kl(i){const e=new WeakMap;function t(o,l){const c=o.array,d=o.usage,u=c.byteLength,h=i.createBuffer();i.bindBuffer(l,h),i.bufferData(l,c,d),o.onUploadCallback();let m;if(c instanceof Float32Array)m=i.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)m=i.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?m=i.HALF_FLOAT:m=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)m=i.SHORT;else if(c instanceof Uint32Array)m=i.UNSIGNED_INT;else if(c instanceof Int32Array)m=i.INT;else if(c instanceof Int8Array)m=i.BYTE;else if(c instanceof Uint8Array)m=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)m=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:h,type:m,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:u}}function n(o,l,c){const d=l.array,u=l.updateRanges;if(i.bindBuffer(c,o),u.length===0)i.bufferSubData(c,0,d);else{u.sort((m,_)=>m.start-_.start);let h=0;for(let m=1;m<u.length;m++){const _=u[h],g=u[m];g.start<=_.start+_.count+1?_.count=Math.max(_.count,g.start+g.count-_.start):(++h,u[h]=g)}u.length=h+1;for(let m=0,_=u.length;m<_;m++){const g=u[m];i.bufferSubData(c,g.start*d.BYTES_PER_ELEMENT,d,g.start,g.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=e.get(o);l&&(i.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const d=e.get(o);(!d||d.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=e.get(o);if(c===void 0)e.set(o,t(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:r,remove:s,update:a}}var Jl=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,jl=`#ifdef USE_ALPHAHASH
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
#endif`,Ql=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,ed=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,td=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,nd=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,id=`#ifdef USE_AOMAP
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
#endif`,rd=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,sd=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
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
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,ad=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,od=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,cd=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,ld=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,dd=`#ifdef USE_IRIDESCENCE
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
#endif`,ud=`#ifdef USE_BUMPMAP
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
#endif`,hd=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
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
	#endif
#endif`,fd=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,pd=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,md=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,gd=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,_d=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,vd=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,xd=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,yd=`#define PI 3.141592653589793
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
} // validated`,Sd=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Md=`vec3 transformedNormal = objectNormal;
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
#endif`,Ed=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Td=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Ad=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,bd=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,wd="gl_FragColor = linearToOutputTexel( gl_FragColor );",Cd=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Rd=`#ifdef USE_ENVMAP
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
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
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
#endif`,Pd=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Ld=`#ifdef USE_ENVMAP
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
#endif`,Dd=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Id=`#ifdef USE_ENVMAP
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
#endif`,Ud=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Fd=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Nd=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Od=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Bd=`#ifdef USE_GRADIENTMAP
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
}`,kd=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,zd=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Gd=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Vd=`uniform bool receiveShadow;
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
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
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
#endif`,Hd=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
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
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
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
#endif`,qd=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Wd=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Xd=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Yd=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,$d=`PhysicalMaterial material;
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
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
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
#endif`,Zd=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
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
}`,Kd=`
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
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
#endif`,Jd=`#if defined( RE_IndirectDiffuse )
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
#endif`,jd=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Qd=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,eu=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,tu=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,nu=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,iu=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,ru=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,su=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,au=`#if defined( USE_POINTS_UV )
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
#endif`,ou=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,cu=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,lu=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,du=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,uu=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,hu=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,fu=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,pu=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,mu=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,gu=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,_u=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,vu=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,xu=`#ifdef USE_NORMALMAP
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
#endif`,yu=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Su=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Mu=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Eu=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Tu=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Au=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
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
}`,bu=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,wu=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Cu=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Ru=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Pu=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Lu=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Du=`#if NUM_SPOT_LIGHT_COORDS > 0
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
			float shadowIntensity;
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
			float shadowIntensity;
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
			float shadowIntensity;
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
		float depth = unpackRGBAToDepth( texture2D( depths, uv ) );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			return step( depth, compare );
		#else
			return step( compare, depth );
		#endif
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow( sampler2D shadow, vec2 uv, float compare ) {
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			float hard_shadow = step( distribution.x, compare );
		#else
			float hard_shadow = step( compare, distribution.x );
		#endif
		if ( hard_shadow != 1.0 ) {
			float distance = compare - distribution.x;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
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
		return mix( 1.0, shadow, shadowIntensity );
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
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
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
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,Iu=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
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
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Uu=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Fu=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Nu=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Ou=`#ifdef USE_SKINNING
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
#endif`,Bu=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,ku=`#ifdef USE_SKINNING
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
#endif`,zu=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Gu=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Vu=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Hu=`#ifndef saturate
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
vec3 CineonToneMapping( vec3 color ) {
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
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,qu=`#ifdef USE_TRANSMISSION
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
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Wu=`#ifdef USE_TRANSMISSION
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
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Xu=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Yu=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,$u=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Zu=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Ku=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Ju=`uniform sampler2D t2D;
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
}`,ju=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Qu=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,eh=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,th=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,nh=`#include <common>
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
	#include <morphinstance_vertex>
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
}`,ih=`#if DEPTH_PACKING == 3200
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
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,rh=`#define DISTANCE
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
	#include <morphinstance_vertex>
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
}`,sh=`#define DISTANCE
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
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,ah=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,oh=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ch=`uniform float scale;
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
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,lh=`uniform vec3 diffuse;
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,dh=`#include <common>
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
	#include <morphinstance_vertex>
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
}`,uh=`uniform vec3 diffuse;
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
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
}`,hh=`#define LAMBERT
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
	#include <morphinstance_vertex>
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
}`,fh=`#define LAMBERT
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
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
}`,ph=`#define MATCAP
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
	#include <morphinstance_vertex>
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
}`,mh=`#define MATCAP
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
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
}`,gh=`#define NORMAL
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
	#include <morphinstance_vertex>
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
}`,_h=`#define NORMAL
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
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,vh=`#define PHONG
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
	#include <morphinstance_vertex>
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
}`,xh=`#define PHONG
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
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
}`,yh=`#define STANDARD
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
	#include <morphinstance_vertex>
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
}`,Sh=`#define STANDARD
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
#ifdef USE_DISPERSION
	uniform float dispersion;
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
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
}`,Mh=`#define TOON
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
	#include <morphinstance_vertex>
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
}`,Eh=`#define TOON
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
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
}`,Th=`uniform float size;
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
	#include <morphinstance_vertex>
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
}`,Ah=`uniform vec3 diffuse;
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
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
}`,bh=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
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
}`,wh=`uniform vec3 color;
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
}`,Ch=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
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
}`,Rh=`uniform vec3 diffuse;
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
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
}`,$e={alphahash_fragment:Jl,alphahash_pars_fragment:jl,alphamap_fragment:Ql,alphamap_pars_fragment:ed,alphatest_fragment:td,alphatest_pars_fragment:nd,aomap_fragment:id,aomap_pars_fragment:rd,batching_pars_vertex:sd,batching_vertex:ad,begin_vertex:od,beginnormal_vertex:cd,bsdfs:ld,iridescence_fragment:dd,bumpmap_pars_fragment:ud,clipping_planes_fragment:hd,clipping_planes_pars_fragment:fd,clipping_planes_pars_vertex:pd,clipping_planes_vertex:md,color_fragment:gd,color_pars_fragment:_d,color_pars_vertex:vd,color_vertex:xd,common:yd,cube_uv_reflection_fragment:Sd,defaultnormal_vertex:Md,displacementmap_pars_vertex:Ed,displacementmap_vertex:Td,emissivemap_fragment:Ad,emissivemap_pars_fragment:bd,colorspace_fragment:wd,colorspace_pars_fragment:Cd,envmap_fragment:Rd,envmap_common_pars_fragment:Pd,envmap_pars_fragment:Ld,envmap_pars_vertex:Dd,envmap_physical_pars_fragment:Hd,envmap_vertex:Id,fog_vertex:Ud,fog_pars_vertex:Fd,fog_fragment:Nd,fog_pars_fragment:Od,gradientmap_pars_fragment:Bd,lightmap_pars_fragment:kd,lights_lambert_fragment:zd,lights_lambert_pars_fragment:Gd,lights_pars_begin:Vd,lights_toon_fragment:qd,lights_toon_pars_fragment:Wd,lights_phong_fragment:Xd,lights_phong_pars_fragment:Yd,lights_physical_fragment:$d,lights_physical_pars_fragment:Zd,lights_fragment_begin:Kd,lights_fragment_maps:Jd,lights_fragment_end:jd,logdepthbuf_fragment:Qd,logdepthbuf_pars_fragment:eu,logdepthbuf_pars_vertex:tu,logdepthbuf_vertex:nu,map_fragment:iu,map_pars_fragment:ru,map_particle_fragment:su,map_particle_pars_fragment:au,metalnessmap_fragment:ou,metalnessmap_pars_fragment:cu,morphinstance_vertex:lu,morphcolor_vertex:du,morphnormal_vertex:uu,morphtarget_pars_vertex:hu,morphtarget_vertex:fu,normal_fragment_begin:pu,normal_fragment_maps:mu,normal_pars_fragment:gu,normal_pars_vertex:_u,normal_vertex:vu,normalmap_pars_fragment:xu,clearcoat_normal_fragment_begin:yu,clearcoat_normal_fragment_maps:Su,clearcoat_pars_fragment:Mu,iridescence_pars_fragment:Eu,opaque_fragment:Tu,packing:Au,premultiplied_alpha_fragment:bu,project_vertex:wu,dithering_fragment:Cu,dithering_pars_fragment:Ru,roughnessmap_fragment:Pu,roughnessmap_pars_fragment:Lu,shadowmap_pars_fragment:Du,shadowmap_pars_vertex:Iu,shadowmap_vertex:Uu,shadowmask_pars_fragment:Fu,skinbase_vertex:Nu,skinning_pars_vertex:Ou,skinning_vertex:Bu,skinnormal_vertex:ku,specularmap_fragment:zu,specularmap_pars_fragment:Gu,tonemapping_fragment:Vu,tonemapping_pars_fragment:Hu,transmission_fragment:qu,transmission_pars_fragment:Wu,uv_pars_fragment:Xu,uv_pars_vertex:Yu,uv_vertex:$u,worldpos_vertex:Zu,background_vert:Ku,background_frag:Ju,backgroundCube_vert:ju,backgroundCube_frag:Qu,cube_vert:eh,cube_frag:th,depth_vert:nh,depth_frag:ih,distanceRGBA_vert:rh,distanceRGBA_frag:sh,equirect_vert:ah,equirect_frag:oh,linedashed_vert:ch,linedashed_frag:lh,meshbasic_vert:dh,meshbasic_frag:uh,meshlambert_vert:hh,meshlambert_frag:fh,meshmatcap_vert:ph,meshmatcap_frag:mh,meshnormal_vert:gh,meshnormal_frag:_h,meshphong_vert:vh,meshphong_frag:xh,meshphysical_vert:yh,meshphysical_frag:Sh,meshtoon_vert:Mh,meshtoon_frag:Eh,points_vert:Th,points_frag:Ah,shadow_vert:bh,shadow_frag:wh,sprite_vert:Ch,sprite_frag:Rh},ye={common:{diffuse:{value:new Ke(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ye},alphaMap:{value:null},alphaMapTransform:{value:new Ye},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ye}},envmap:{envMap:{value:null},envMapRotation:{value:new Ye},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ye}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ye}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ye},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ye},normalScale:{value:new ve(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ye},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ye}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ye}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ye}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ke(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ke(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ye},alphaTest:{value:0},uvTransform:{value:new Ye}},sprite:{diffuse:{value:new Ke(16777215)},opacity:{value:1},center:{value:new ve(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ye},alphaMap:{value:null},alphaMapTransform:{value:new Ye},alphaTest:{value:0}}},ln={basic:{uniforms:Ft([ye.common,ye.specularmap,ye.envmap,ye.aomap,ye.lightmap,ye.fog]),vertexShader:$e.meshbasic_vert,fragmentShader:$e.meshbasic_frag},lambert:{uniforms:Ft([ye.common,ye.specularmap,ye.envmap,ye.aomap,ye.lightmap,ye.emissivemap,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.fog,ye.lights,{emissive:{value:new Ke(0)}}]),vertexShader:$e.meshlambert_vert,fragmentShader:$e.meshlambert_frag},phong:{uniforms:Ft([ye.common,ye.specularmap,ye.envmap,ye.aomap,ye.lightmap,ye.emissivemap,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.fog,ye.lights,{emissive:{value:new Ke(0)},specular:{value:new Ke(1118481)},shininess:{value:30}}]),vertexShader:$e.meshphong_vert,fragmentShader:$e.meshphong_frag},standard:{uniforms:Ft([ye.common,ye.envmap,ye.aomap,ye.lightmap,ye.emissivemap,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.roughnessmap,ye.metalnessmap,ye.fog,ye.lights,{emissive:{value:new Ke(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:$e.meshphysical_vert,fragmentShader:$e.meshphysical_frag},toon:{uniforms:Ft([ye.common,ye.aomap,ye.lightmap,ye.emissivemap,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.gradientmap,ye.fog,ye.lights,{emissive:{value:new Ke(0)}}]),vertexShader:$e.meshtoon_vert,fragmentShader:$e.meshtoon_frag},matcap:{uniforms:Ft([ye.common,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.fog,{matcap:{value:null}}]),vertexShader:$e.meshmatcap_vert,fragmentShader:$e.meshmatcap_frag},points:{uniforms:Ft([ye.points,ye.fog]),vertexShader:$e.points_vert,fragmentShader:$e.points_frag},dashed:{uniforms:Ft([ye.common,ye.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:$e.linedashed_vert,fragmentShader:$e.linedashed_frag},depth:{uniforms:Ft([ye.common,ye.displacementmap]),vertexShader:$e.depth_vert,fragmentShader:$e.depth_frag},normal:{uniforms:Ft([ye.common,ye.bumpmap,ye.normalmap,ye.displacementmap,{opacity:{value:1}}]),vertexShader:$e.meshnormal_vert,fragmentShader:$e.meshnormal_frag},sprite:{uniforms:Ft([ye.sprite,ye.fog]),vertexShader:$e.sprite_vert,fragmentShader:$e.sprite_frag},background:{uniforms:{uvTransform:{value:new Ye},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:$e.background_vert,fragmentShader:$e.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ye}},vertexShader:$e.backgroundCube_vert,fragmentShader:$e.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:$e.cube_vert,fragmentShader:$e.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:$e.equirect_vert,fragmentShader:$e.equirect_frag},distanceRGBA:{uniforms:Ft([ye.common,ye.displacementmap,{referencePosition:{value:new I},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:$e.distanceRGBA_vert,fragmentShader:$e.distanceRGBA_frag},shadow:{uniforms:Ft([ye.lights,ye.fog,{color:{value:new Ke(0)},opacity:{value:1}}]),vertexShader:$e.shadow_vert,fragmentShader:$e.shadow_frag}};ln.physical={uniforms:Ft([ln.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ye},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ye},clearcoatNormalScale:{value:new ve(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ye},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ye},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ye},sheen:{value:0},sheenColor:{value:new Ke(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ye},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ye},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ye},transmissionSamplerSize:{value:new ve},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ye},attenuationDistance:{value:0},attenuationColor:{value:new Ke(0)},specularColor:{value:new Ke(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ye},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ye},anisotropyVector:{value:new ve},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ye}}]),vertexShader:$e.meshphysical_vert,fragmentShader:$e.meshphysical_frag};const Mr={r:0,b:0,g:0},Bn=new an,Ph=new lt;function Lh(i,e,t,n,r,s,a){const o=new Ke(0);let l=s===!0?0:1,c,d,u=null,h=0,m=null;function _(y){let v=y.isScene===!0?y.background:null;return v&&v.isTexture&&(v=(y.backgroundBlurriness>0?t:e).get(v)),v}function g(y){let v=!1;const T=_(y);T===null?f(o,l):T&&T.isColor&&(f(T,1),v=!0);const C=i.xr.getEnvironmentBlendMode();C==="additive"?n.buffers.color.setClear(0,0,0,1,a):C==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(i.autoClear||v)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function p(y,v){const T=_(v);T&&(T.isCubeTexture||T.mapping===306)?(d===void 0&&(d=new ft(new Ln(1,1,1),new Rn({name:"BackgroundCubeMaterial",uniforms:xi(ln.backgroundCube.uniforms),vertexShader:ln.backgroundCube.vertexShader,fragmentShader:ln.backgroundCube.fragmentShader,side:1,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),d.geometry.deleteAttribute("normal"),d.geometry.deleteAttribute("uv"),d.onBeforeRender=function(C,P,A){this.matrixWorld.copyPosition(A.matrixWorld)},Object.defineProperty(d.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(d)),Bn.copy(v.backgroundRotation),Bn.x*=-1,Bn.y*=-1,Bn.z*=-1,T.isCubeTexture&&T.isRenderTargetTexture===!1&&(Bn.y*=-1,Bn.z*=-1),d.material.uniforms.envMap.value=T,d.material.uniforms.flipEnvMap.value=T.isCubeTexture&&T.isRenderTargetTexture===!1?-1:1,d.material.uniforms.backgroundBlurriness.value=v.backgroundBlurriness,d.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,d.material.uniforms.backgroundRotation.value.setFromMatrix4(Ph.makeRotationFromEuler(Bn)),d.material.toneMapped=nt.getTransfer(T.colorSpace)!==at,(u!==T||h!==T.version||m!==i.toneMapping)&&(d.material.needsUpdate=!0,u=T,h=T.version,m=i.toneMapping),d.layers.enableAll(),y.unshift(d,d.geometry,d.material,0,0,null)):T&&T.isTexture&&(c===void 0&&(c=new ft(new Zi(2,2),new Rn({name:"BackgroundMaterial",uniforms:xi(ln.background.uniforms),vertexShader:ln.background.vertexShader,fragmentShader:ln.background.fragmentShader,side:0,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=T,c.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,c.material.toneMapped=nt.getTransfer(T.colorSpace)!==at,T.matrixAutoUpdate===!0&&T.updateMatrix(),c.material.uniforms.uvTransform.value.copy(T.matrix),(u!==T||h!==T.version||m!==i.toneMapping)&&(c.material.needsUpdate=!0,u=T,h=T.version,m=i.toneMapping),c.layers.enableAll(),y.unshift(c,c.geometry,c.material,0,0,null))}function f(y,v){y.getRGB(Mr,Eo(i)),n.buffers.color.setClear(Mr.r,Mr.g,Mr.b,v,a)}function w(){d!==void 0&&(d.geometry.dispose(),d.material.dispose(),d=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return o},setClearColor:function(y,v=1){o.set(y),l=v,f(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(y){l=y,f(o,l)},render:g,addToRenderList:p,dispose:w}}function Dh(i,e){const t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},r=h(null);let s=r,a=!1;function o(x,D,F,O,z){let q=!1;const H=u(O,F,D);s!==H&&(s=H,c(s.object)),q=m(x,O,F,z),q&&_(x,O,F,z),z!==null&&e.update(z,i.ELEMENT_ARRAY_BUFFER),(q||a)&&(a=!1,v(x,D,F,O),z!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(z).buffer))}function l(){return i.createVertexArray()}function c(x){return i.bindVertexArray(x)}function d(x){return i.deleteVertexArray(x)}function u(x,D,F){const O=F.wireframe===!0;let z=n[x.id];z===void 0&&(z={},n[x.id]=z);let q=z[D.id];q===void 0&&(q={},z[D.id]=q);let H=q[O];return H===void 0&&(H=h(l()),q[O]=H),H}function h(x){const D=[],F=[],O=[];for(let z=0;z<t;z++)D[z]=0,F[z]=0,O[z]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:D,enabledAttributes:F,attributeDivisors:O,object:x,attributes:{},index:null}}function m(x,D,F,O){const z=s.attributes,q=D.attributes;let H=0;const re=F.getAttributes();for(const X in re)if(re[X].location>=0){const ge=z[X];let Ee=q[X];if(Ee===void 0&&(X==="instanceMatrix"&&x.instanceMatrix&&(Ee=x.instanceMatrix),X==="instanceColor"&&x.instanceColor&&(Ee=x.instanceColor)),ge===void 0||ge.attribute!==Ee||Ee&&ge.data!==Ee.data)return!0;H++}return s.attributesNum!==H||s.index!==O}function _(x,D,F,O){const z={},q=D.attributes;let H=0;const re=F.getAttributes();for(const X in re)if(re[X].location>=0){let ge=q[X];ge===void 0&&(X==="instanceMatrix"&&x.instanceMatrix&&(ge=x.instanceMatrix),X==="instanceColor"&&x.instanceColor&&(ge=x.instanceColor));const Ee={};Ee.attribute=ge,ge&&ge.data&&(Ee.data=ge.data),z[X]=Ee,H++}s.attributes=z,s.attributesNum=H,s.index=O}function g(){const x=s.newAttributes;for(let D=0,F=x.length;D<F;D++)x[D]=0}function p(x){f(x,0)}function f(x,D){const F=s.newAttributes,O=s.enabledAttributes,z=s.attributeDivisors;F[x]=1,O[x]===0&&(i.enableVertexAttribArray(x),O[x]=1),z[x]!==D&&(i.vertexAttribDivisor(x,D),z[x]=D)}function w(){const x=s.newAttributes,D=s.enabledAttributes;for(let F=0,O=D.length;F<O;F++)D[F]!==x[F]&&(i.disableVertexAttribArray(F),D[F]=0)}function y(x,D,F,O,z,q,H){H===!0?i.vertexAttribIPointer(x,D,F,z,q):i.vertexAttribPointer(x,D,F,O,z,q)}function v(x,D,F,O){g();const z=O.attributes,q=F.getAttributes(),H=D.defaultAttributeValues;for(const re in q){const X=q[re];if(X.location>=0){let fe=z[re];if(fe===void 0&&(re==="instanceMatrix"&&x.instanceMatrix&&(fe=x.instanceMatrix),re==="instanceColor"&&x.instanceColor&&(fe=x.instanceColor)),fe!==void 0){const ge=fe.normalized,Ee=fe.itemSize,ze=e.get(fe);if(ze===void 0)continue;const Ze=ze.buffer,et=ze.type,Ie=ze.bytesPerElement,Q=et===i.INT||et===i.UNSIGNED_INT||fe.gpuType===1013;if(fe.isInterleavedBufferAttribute){const ae=fe.data,xe=ae.stride,Le=fe.offset;if(ae.isInstancedInterleavedBuffer){for(let Ae=0;Ae<X.locationSize;Ae++)f(X.location+Ae,ae.meshPerAttribute);x.isInstancedMesh!==!0&&O._maxInstanceCount===void 0&&(O._maxInstanceCount=ae.meshPerAttribute*ae.count)}else for(let Ae=0;Ae<X.locationSize;Ae++)p(X.location+Ae);i.bindBuffer(i.ARRAY_BUFFER,Ze);for(let Ae=0;Ae<X.locationSize;Ae++)y(X.location+Ae,Ee/X.locationSize,et,ge,xe*Ie,(Le+Ee/X.locationSize*Ae)*Ie,Q)}else{if(fe.isInstancedBufferAttribute){for(let ae=0;ae<X.locationSize;ae++)f(X.location+ae,fe.meshPerAttribute);x.isInstancedMesh!==!0&&O._maxInstanceCount===void 0&&(O._maxInstanceCount=fe.meshPerAttribute*fe.count)}else for(let ae=0;ae<X.locationSize;ae++)p(X.location+ae);i.bindBuffer(i.ARRAY_BUFFER,Ze);for(let ae=0;ae<X.locationSize;ae++)y(X.location+ae,Ee/X.locationSize,et,ge,Ee*Ie,Ee/X.locationSize*ae*Ie,Q)}}else if(H!==void 0){const ge=H[re];if(ge!==void 0)switch(ge.length){case 2:i.vertexAttrib2fv(X.location,ge);break;case 3:i.vertexAttrib3fv(X.location,ge);break;case 4:i.vertexAttrib4fv(X.location,ge);break;default:i.vertexAttrib1fv(X.location,ge)}}}}w()}function T(){A();for(const x in n){const D=n[x];for(const F in D){const O=D[F];for(const z in O)d(O[z].object),delete O[z];delete D[F]}delete n[x]}}function C(x){if(n[x.id]===void 0)return;const D=n[x.id];for(const F in D){const O=D[F];for(const z in O)d(O[z].object),delete O[z];delete D[F]}delete n[x.id]}function P(x){for(const D in n){const F=n[D];if(F[x.id]===void 0)continue;const O=F[x.id];for(const z in O)d(O[z].object),delete O[z];delete F[x.id]}}function A(){M(),a=!0,s!==r&&(s=r,c(s.object))}function M(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:o,reset:A,resetDefaultState:M,dispose:T,releaseStatesOfGeometry:C,releaseStatesOfProgram:P,initAttributes:g,enableAttribute:p,disableUnusedAttributes:w}}function Ih(i,e,t){let n;function r(c){n=c}function s(c,d){i.drawArrays(n,c,d),t.update(d,n,1)}function a(c,d,u){u!==0&&(i.drawArraysInstanced(n,c,d,u),t.update(d,n,u))}function o(c,d,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,d,0,u);let m=0;for(let _=0;_<u;_++)m+=d[_];t.update(m,n,1)}function l(c,d,u,h){if(u===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let _=0;_<c.length;_++)a(c[_],d[_],h[_]);else{m.multiDrawArraysInstancedWEBGL(n,c,0,d,0,h,0,u);let _=0;for(let g=0;g<u;g++)_+=d[g]*h[g];t.update(_,n,1)}}this.setMode=r,this.render=s,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function Uh(i,e,t,n){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const P=e.get("EXT_texture_filter_anisotropic");r=i.getParameter(P.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function a(P){return!(P!==1023&&n.convert(P)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(P){const A=P===1016&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(P!==1009&&n.convert(P)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&P!==1015&&!A)}function l(P){if(P==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";P="mediump"}return P==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const d=l(c);d!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",d,"instead."),c=d);const u=t.logarithmicDepthBuffer===!0,h=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),m=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),_=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_TEXTURE_SIZE),p=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),f=i.getParameter(i.MAX_VERTEX_ATTRIBS),w=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),y=i.getParameter(i.MAX_VARYING_VECTORS),v=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),T=_>0,C=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:u,reversedDepthBuffer:h,maxTextures:m,maxVertexTextures:_,maxTextureSize:g,maxCubemapSize:p,maxAttributes:f,maxVertexUniforms:w,maxVaryings:y,maxFragmentUniforms:v,vertexTextures:T,maxSamples:C}}function Fh(i){const e=this;let t=null,n=0,r=!1,s=!1;const a=new Cn,o=new Ye,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,h){const m=u.length!==0||h||n!==0||r;return r=h,n=u.length,m},this.beginShadows=function(){s=!0,d(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(u,h){t=d(u,h,0)},this.setState=function(u,h,m){const _=u.clippingPlanes,g=u.clipIntersection,p=u.clipShadows,f=i.get(u);if(!r||_===null||_.length===0||s&&!p)s?d(null):c();else{const w=s?0:n,y=w*4;let v=f.clippingState||null;l.value=v,v=d(_,h,y,m);for(let T=0;T!==y;++T)v[T]=t[T];f.clippingState=v,this.numIntersection=g?this.numPlanes:0,this.numPlanes+=w}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function d(u,h,m,_){const g=u!==null?u.length:0;let p=null;if(g!==0){if(p=l.value,_!==!0||p===null){const f=m+g*4,w=h.matrixWorldInverse;o.getNormalMatrix(w),(p===null||p.length<f)&&(p=new Float32Array(f));for(let y=0,v=m;y!==g;++y,v+=4)a.copy(u[y]).applyMatrix4(w,o),a.normal.toArray(p,v),p[v+3]=a.constant}l.value=p,l.needsUpdate=!0}return e.numPlanes=g,e.numIntersection=0,p}}function Nh(i){let e=new WeakMap;function t(a,o){return o===303?a.mapping=301:o===304&&(a.mapping=302),a}function n(a){if(a&&a.isTexture){const o=a.mapping;if(o===303||o===304)if(e.has(a)){const l=e.get(a).texture;return t(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const c=new $c(l.height);return c.fromEquirectangularTexture(i,a),e.set(a,c),a.addEventListener("dispose",r),t(c.texture,a.mapping)}else return null}}return a}function r(a){const o=a.target;o.removeEventListener("dispose",r);const l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function s(){e=new WeakMap}return{get:n,dispose:s}}const gi=4,Ia=[.125,.215,.35,.446,.526,.582],Gn=20,vs=new zo,Ua=new Ke;let xs=null,ys=0,Ss=0,Ms=!1;const zn=(1+Math.sqrt(5))/2,li=1/zn,Fa=[new I(-zn,li,0),new I(zn,li,0),new I(-li,0,zn),new I(li,0,zn),new I(0,zn,-li),new I(0,zn,li),new I(-1,1,-1),new I(1,1,-1),new I(-1,1,1),new I(1,1,1)],Oh=new I;class Ps{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,r=100,s={}){const{size:a=256,position:o=Oh}=s;xs=this._renderer.getRenderTarget(),ys=this._renderer.getActiveCubeFace(),Ss=this._renderer.getActiveMipmapLevel(),Ms=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,n,r,l,o),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Ba(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Oa(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(xs,ys,Ss),this._renderer.xr.enabled=Ms,e.scissorTest=!1,Er(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===301||e.mapping===302?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),xs=this._renderer.getRenderTarget(),ys=this._renderer.getActiveCubeFace(),Ss=this._renderer.getActiveMipmapLevel(),Ms=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:1006,minFilter:1006,generateMipmaps:!1,type:1016,format:1023,colorSpace:vi,depthBuffer:!1},r=Na(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Na(e,t,n);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Bh(s)),this._blurMaterial=kh(s,e,t)}return r}_compileMaterial(e){const t=new ft(this._lodPlanes[0],e);this._renderer.compile(t,vs)}_sceneToCubeUV(e,t,n,r,s){const l=new Xt(90,1,t,n),c=[1,-1,1,1,1,1],d=[1,1,1,-1,-1,-1],u=this._renderer,h=u.autoClear,m=u.toneMapping;u.getClearColor(Ua),u.toneMapping=0,u.autoClear=!1,u.state.buffers.depth.getReversed()&&(u.setRenderTarget(r),u.clearDepth(),u.setRenderTarget(null));const g=new yo({name:"PMREM.Background",side:1,depthWrite:!1,depthTest:!1}),p=new ft(new Ln,g);let f=!1;const w=e.background;w?w.isColor&&(g.color.copy(w),e.background=null,f=!0):(g.color.copy(Ua),f=!0);for(let y=0;y<6;y++){const v=y%3;v===0?(l.up.set(0,c[y],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x+d[y],s.y,s.z)):v===1?(l.up.set(0,0,c[y]),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y+d[y],s.z)):(l.up.set(0,c[y],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y,s.z+d[y]));const T=this._cubeSize;Er(r,v*T,y>2?T:0,T,T),u.setRenderTarget(r),f&&u.render(p,l),u.render(e,l)}p.geometry.dispose(),p.material.dispose(),u.toneMapping=m,u.autoClear=h,e.background=w}_textureToCubeUV(e,t){const n=this._renderer,r=e.mapping===301||e.mapping===302;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Ba()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Oa());const s=r?this._cubemapMaterial:this._equirectMaterial,a=new ft(this._lodPlanes[0],s),o=s.uniforms;o.envMap.value=e;const l=this._cubeSize;Er(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(a,vs)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const r=this._lodPlanes.length;for(let s=1;s<r;s++){const a=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),o=Fa[(r-s-1)%Fa.length];this._blur(e,s-1,s,a,o)}t.autoClear=n}_blur(e,t,n,r,s){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,r,"latitudinal",s),this._halfBlur(a,e,n,n,r,"longitudinal",s)}_halfBlur(e,t,n,r,s,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const d=3,u=new ft(this._lodPlanes[r],c),h=c.uniforms,m=this._sizeLods[n]-1,_=isFinite(s)?Math.PI/(2*m):2*Math.PI/(2*Gn-1),g=s/_,p=isFinite(s)?1+Math.floor(d*g):Gn;p>Gn&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${Gn}`);const f=[];let w=0;for(let P=0;P<Gn;++P){const A=P/g,M=Math.exp(-A*A/2);f.push(M),P===0?w+=M:P<p&&(w+=2*M)}for(let P=0;P<f.length;P++)f[P]=f[P]/w;h.envMap.value=e.texture,h.samples.value=p,h.weights.value=f,h.latitudinal.value=a==="latitudinal",o&&(h.poleAxis.value=o);const{_lodMax:y}=this;h.dTheta.value=_,h.mipInt.value=y-n;const v=this._sizeLods[r],T=3*v*(r>y-gi?r-y+gi:0),C=4*(this._cubeSize-v);Er(t,T,C,3*v,2*v),l.setRenderTarget(t),l.render(u,vs)}}function Bh(i){const e=[],t=[],n=[];let r=i;const s=i-gi+1+Ia.length;for(let a=0;a<s;a++){const o=Math.pow(2,r);t.push(o);let l=1/o;a>i-gi?l=Ia[a-i+gi-1]:a===0&&(l=0),n.push(l);const c=1/(o-2),d=-c,u=1+c,h=[d,d,u,d,u,u,d,d,u,u,d,u],m=6,_=6,g=3,p=2,f=1,w=new Float32Array(g*_*m),y=new Float32Array(p*_*m),v=new Float32Array(f*_*m);for(let C=0;C<m;C++){const P=C%3*2/3-1,A=C>2?0:-1,M=[P,A,0,P+2/3,A,0,P+2/3,A+1,0,P,A,0,P+2/3,A+1,0,P,A+1,0];w.set(M,g*_*C),y.set(h,p*_*C);const x=[C,C,C,C,C,C];v.set(x,f*_*C)}const T=new on;T.setAttribute("position",new sn(w,g)),T.setAttribute("uv",new sn(y,p)),T.setAttribute("faceIndex",new sn(v,f)),e.push(T),r>gi&&r--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function Na(i,e,t){const n=new Hn(i,e,t);return n.texture.mapping=306,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Er(i,e,t,n,r){i.viewport.set(e,t,n,r),i.scissor.set(e,t,n,r)}function kh(i,e,t){const n=new Float32Array(Gn),r=new I(0,1,0);return new Rn({name:"SphericalGaussianBlur",defines:{n:Gn,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Xs(),fragmentShader:`

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
		`,blending:0,depthTest:!1,depthWrite:!1})}function Oa(){return new Rn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Xs(),fragmentShader:`

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
		`,blending:0,depthTest:!1,depthWrite:!1})}function Ba(){return new Rn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Xs(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function Xs(){return`

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
	`}function zh(i){let e=new WeakMap,t=null;function n(o){if(o&&o.isTexture){const l=o.mapping,c=l===303||l===304,d=l===301||l===302;if(c||d){let u=e.get(o);const h=u!==void 0?u.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==h)return t===null&&(t=new Ps(i)),u=c?t.fromEquirectangular(o,u):t.fromCubemap(o,u),u.texture.pmremVersion=o.pmremVersion,e.set(o,u),u.texture;if(u!==void 0)return u.texture;{const m=o.image;return c&&m&&m.height>0||d&&m&&r(m)?(t===null&&(t=new Ps(i)),u=c?t.fromEquirectangular(o):t.fromCubemap(o),u.texture.pmremVersion=o.pmremVersion,e.set(o,u),o.addEventListener("dispose",s),u.texture):null}}}return o}function r(o){let l=0;const c=6;for(let d=0;d<c;d++)o[d]!==void 0&&l++;return l===c}function s(o){const l=o.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:a}}function Gh(i){const e={};function t(n){if(e[n]!==void 0)return e[n];let r;switch(n){case"WEBGL_depth_texture":r=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=i.getExtension(n)}return e[n]=r,r}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const r=t(n);return r===null&&Hi("THREE.WebGLRenderer: "+n+" extension not supported."),r}}}function Vh(i,e,t,n){const r={},s=new WeakMap;function a(u){const h=u.target;h.index!==null&&e.remove(h.index);for(const _ in h.attributes)e.remove(h.attributes[_]);h.removeEventListener("dispose",a),delete r[h.id];const m=s.get(h);m&&(e.remove(m),s.delete(h)),n.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,t.memory.geometries--}function o(u,h){return r[h.id]===!0||(h.addEventListener("dispose",a),r[h.id]=!0,t.memory.geometries++),h}function l(u){const h=u.attributes;for(const m in h)e.update(h[m],i.ARRAY_BUFFER)}function c(u){const h=[],m=u.index,_=u.attributes.position;let g=0;if(m!==null){const w=m.array;g=m.version;for(let y=0,v=w.length;y<v;y+=3){const T=w[y+0],C=w[y+1],P=w[y+2];h.push(T,C,C,P,P,T)}}else if(_!==void 0){const w=_.array;g=_.version;for(let y=0,v=w.length/3-1;y<v;y+=3){const T=y+0,C=y+1,P=y+2;h.push(T,C,C,P,P,T)}}else return;const p=new(_o(h)?Mo:So)(h,1);p.version=g;const f=s.get(u);f&&e.remove(f),s.set(u,p)}function d(u){const h=s.get(u);if(h){const m=u.index;m!==null&&h.version<m.version&&c(u)}else c(u);return s.get(u)}return{get:o,update:l,getWireframeAttribute:d}}function Hh(i,e,t){let n;function r(h){n=h}let s,a;function o(h){s=h.type,a=h.bytesPerElement}function l(h,m){i.drawElements(n,m,s,h*a),t.update(m,n,1)}function c(h,m,_){_!==0&&(i.drawElementsInstanced(n,m,s,h*a,_),t.update(m,n,_))}function d(h,m,_){if(_===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,m,0,s,h,0,_);let p=0;for(let f=0;f<_;f++)p+=m[f];t.update(p,n,1)}function u(h,m,_,g){if(_===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let f=0;f<h.length;f++)c(h[f]/a,m[f],g[f]);else{p.multiDrawElementsInstancedWEBGL(n,m,0,s,h,0,g,0,_);let f=0;for(let w=0;w<_;w++)f+=m[w]*g[w];t.update(f,n,1)}}this.setMode=r,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=d,this.renderMultiDrawInstances=u}function qh(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,a,o){switch(t.calls++,a){case i.TRIANGLES:t.triangles+=o*(s/3);break;case i.LINES:t.lines+=o*(s/2);break;case i.LINE_STRIP:t.lines+=o*(s-1);break;case i.LINE_LOOP:t.lines+=o*s;break;case i.POINTS:t.points+=o*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:n}}function Wh(i,e,t){const n=new WeakMap,r=new ct;function s(a,o,l){const c=a.morphTargetInfluences,d=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=d!==void 0?d.length:0;let h=n.get(o);if(h===void 0||h.count!==u){let M=function(){P.dispose(),n.delete(o),o.removeEventListener("dispose",M)};h!==void 0&&h.texture.dispose();const m=o.morphAttributes.position!==void 0,_=o.morphAttributes.normal!==void 0,g=o.morphAttributes.color!==void 0,p=o.morphAttributes.position||[],f=o.morphAttributes.normal||[],w=o.morphAttributes.color||[];let y=0;m===!0&&(y=1),_===!0&&(y=2),g===!0&&(y=3);let v=o.attributes.position.count*y,T=1;v>e.maxTextureSize&&(T=Math.ceil(v/e.maxTextureSize),v=e.maxTextureSize);const C=new Float32Array(v*T*4*u),P=new vo(C,v,T,u);P.type=1015,P.needsUpdate=!0;const A=y*4;for(let x=0;x<u;x++){const D=p[x],F=f[x],O=w[x],z=v*T*4*x;for(let q=0;q<D.count;q++){const H=q*A;m===!0&&(r.fromBufferAttribute(D,q),C[z+H+0]=r.x,C[z+H+1]=r.y,C[z+H+2]=r.z,C[z+H+3]=0),_===!0&&(r.fromBufferAttribute(F,q),C[z+H+4]=r.x,C[z+H+5]=r.y,C[z+H+6]=r.z,C[z+H+7]=0),g===!0&&(r.fromBufferAttribute(O,q),C[z+H+8]=r.x,C[z+H+9]=r.y,C[z+H+10]=r.z,C[z+H+11]=O.itemSize===4?r.w:1)}}h={count:u,texture:P,size:new ve(v,T)},n.set(o,h),o.addEventListener("dispose",M)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",a.morphTexture,t);else{let m=0;for(let g=0;g<c.length;g++)m+=c[g];const _=o.morphTargetsRelative?1:1-m;l.getUniforms().setValue(i,"morphTargetBaseInfluence",_),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",h.texture,t),l.getUniforms().setValue(i,"morphTargetsTextureSize",h.size)}return{update:s}}function Xh(i,e,t,n){let r=new WeakMap;function s(l){const c=n.render.frame,d=l.geometry,u=e.get(l,d);if(r.get(u)!==c&&(e.update(u),r.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),r.get(l)!==c&&(t.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,i.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){const h=l.skeleton;r.get(h)!==c&&(h.update(),r.set(h,c))}return u}function a(){r=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:s,dispose:a}}const Ho=new Rt,ka=new Co(1,1),qo=new vo,Wo=new Lc,Xo=new Ao,za=[],Ga=[],Va=new Float32Array(16),Ha=new Float32Array(9),qa=new Float32Array(4);function Ei(i,e,t){const n=i[0];if(n<=0||n>0)return i;const r=e*t;let s=za[r];if(s===void 0&&(s=new Float32Array(r),za[r]=s),e!==0){n.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=t,i[a].toArray(s,o)}return s}function At(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function bt(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function Br(i,e){let t=Ga[e];t===void 0&&(t=new Int32Array(e),Ga[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function Yh(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function $h(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(At(t,e))return;i.uniform2fv(this.addr,e),bt(t,e)}}function Zh(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(At(t,e))return;i.uniform3fv(this.addr,e),bt(t,e)}}function Kh(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(At(t,e))return;i.uniform4fv(this.addr,e),bt(t,e)}}function Jh(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(At(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),bt(t,e)}else{if(At(t,n))return;qa.set(n),i.uniformMatrix2fv(this.addr,!1,qa),bt(t,n)}}function jh(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(At(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),bt(t,e)}else{if(At(t,n))return;Ha.set(n),i.uniformMatrix3fv(this.addr,!1,Ha),bt(t,n)}}function Qh(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(At(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),bt(t,e)}else{if(At(t,n))return;Va.set(n),i.uniformMatrix4fv(this.addr,!1,Va),bt(t,n)}}function ef(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function tf(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(At(t,e))return;i.uniform2iv(this.addr,e),bt(t,e)}}function nf(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(At(t,e))return;i.uniform3iv(this.addr,e),bt(t,e)}}function rf(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(At(t,e))return;i.uniform4iv(this.addr,e),bt(t,e)}}function sf(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function af(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(At(t,e))return;i.uniform2uiv(this.addr,e),bt(t,e)}}function of(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(At(t,e))return;i.uniform3uiv(this.addr,e),bt(t,e)}}function cf(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(At(t,e))return;i.uniform4uiv(this.addr,e),bt(t,e)}}function lf(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r);let s;this.type===i.SAMPLER_2D_SHADOW?(ka.compareFunction=515,s=ka):s=Ho,t.setTexture2D(e||s,r)}function df(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture3D(e||Wo,r)}function uf(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTextureCube(e||Xo,r)}function hf(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture2DArray(e||qo,r)}function ff(i){switch(i){case 5126:return Yh;case 35664:return $h;case 35665:return Zh;case 35666:return Kh;case 35674:return Jh;case 35675:return jh;case 35676:return Qh;case 5124:case 35670:return ef;case 35667:case 35671:return tf;case 35668:case 35672:return nf;case 35669:case 35673:return rf;case 5125:return sf;case 36294:return af;case 36295:return of;case 36296:return cf;case 35678:case 36198:case 36298:case 36306:case 35682:return lf;case 35679:case 36299:case 36307:return df;case 35680:case 36300:case 36308:case 36293:return uf;case 36289:case 36303:case 36311:case 36292:return hf}}function pf(i,e){i.uniform1fv(this.addr,e)}function mf(i,e){const t=Ei(e,this.size,2);i.uniform2fv(this.addr,t)}function gf(i,e){const t=Ei(e,this.size,3);i.uniform3fv(this.addr,t)}function _f(i,e){const t=Ei(e,this.size,4);i.uniform4fv(this.addr,t)}function vf(i,e){const t=Ei(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function xf(i,e){const t=Ei(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function yf(i,e){const t=Ei(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function Sf(i,e){i.uniform1iv(this.addr,e)}function Mf(i,e){i.uniform2iv(this.addr,e)}function Ef(i,e){i.uniform3iv(this.addr,e)}function Tf(i,e){i.uniform4iv(this.addr,e)}function Af(i,e){i.uniform1uiv(this.addr,e)}function bf(i,e){i.uniform2uiv(this.addr,e)}function wf(i,e){i.uniform3uiv(this.addr,e)}function Cf(i,e){i.uniform4uiv(this.addr,e)}function Rf(i,e,t){const n=this.cache,r=e.length,s=Br(t,r);At(n,s)||(i.uniform1iv(this.addr,s),bt(n,s));for(let a=0;a!==r;++a)t.setTexture2D(e[a]||Ho,s[a])}function Pf(i,e,t){const n=this.cache,r=e.length,s=Br(t,r);At(n,s)||(i.uniform1iv(this.addr,s),bt(n,s));for(let a=0;a!==r;++a)t.setTexture3D(e[a]||Wo,s[a])}function Lf(i,e,t){const n=this.cache,r=e.length,s=Br(t,r);At(n,s)||(i.uniform1iv(this.addr,s),bt(n,s));for(let a=0;a!==r;++a)t.setTextureCube(e[a]||Xo,s[a])}function Df(i,e,t){const n=this.cache,r=e.length,s=Br(t,r);At(n,s)||(i.uniform1iv(this.addr,s),bt(n,s));for(let a=0;a!==r;++a)t.setTexture2DArray(e[a]||qo,s[a])}function If(i){switch(i){case 5126:return pf;case 35664:return mf;case 35665:return gf;case 35666:return _f;case 35674:return vf;case 35675:return xf;case 35676:return yf;case 5124:case 35670:return Sf;case 35667:case 35671:return Mf;case 35668:case 35672:return Ef;case 35669:case 35673:return Tf;case 5125:return Af;case 36294:return bf;case 36295:return wf;case 36296:return Cf;case 35678:case 36198:case 36298:case 36306:case 35682:return Rf;case 35679:case 36299:case 36307:return Pf;case 35680:case 36300:case 36308:case 36293:return Lf;case 36289:case 36303:case 36311:case 36292:return Df}}class Uf{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=ff(t.type)}}class Ff{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=If(t.type)}}class Nf{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const r=this.seq;for(let s=0,a=r.length;s!==a;++s){const o=r[s];o.setValue(e,t[o.id],n)}}}const Es=/(\w+)(\])?(\[|\.)?/g;function Wa(i,e){i.seq.push(e),i.map[e.id]=e}function Of(i,e,t){const n=i.name,r=n.length;for(Es.lastIndex=0;;){const s=Es.exec(n),a=Es.lastIndex;let o=s[1];const l=s[2]==="]",c=s[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===r){Wa(t,c===void 0?new Uf(o,i,e):new Ff(o,i,e));break}else{let u=t.map[o];u===void 0&&(u=new Nf(o),Wa(t,u)),t=u}}}class wr{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<n;++r){const s=e.getActiveUniform(t,r),a=e.getUniformLocation(t,s.name);Of(s,a,this)}}setValue(e,t,n,r){const s=this.map[t];s!==void 0&&s.setValue(e,n,r)}setOptional(e,t,n){const r=t[n];r!==void 0&&this.setValue(e,n,r)}static upload(e,t,n,r){for(let s=0,a=t.length;s!==a;++s){const o=t[s],l=n[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,r)}}static seqWithValue(e,t){const n=[];for(let r=0,s=e.length;r!==s;++r){const a=e[r];a.id in t&&n.push(a)}return n}}function Xa(i,e,t){const n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}const Bf=37297;let kf=0;function zf(i,e){const t=i.split(`
`),n=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let a=r;a<s;a++){const o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}const Ya=new Ye;function Gf(i){nt._getMatrix(Ya,nt.workingColorSpace,i);const e=`mat3( ${Ya.elements.map(t=>t.toFixed(4))} )`;switch(nt.getTransfer(i)){case Rr:return[e,"LinearTransferOETF"];case at:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function $a(i,e,t){const n=i.getShaderParameter(e,i.COMPILE_STATUS),s=(i.getShaderInfoLog(e)||"").trim();if(n&&s==="")return"";const a=/ERROR: 0:(\d+)/.exec(s);if(a){const o=parseInt(a[1]);return t.toUpperCase()+`

`+s+`

`+zf(i.getShaderSource(e),o)}else return s}function Vf(i,e){const t=Gf(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function Hf(i,e){let t;switch(e){case 1:t="Linear";break;case 2:t="Reinhard";break;case 3:t="Cineon";break;case 4:t="ACESFilmic";break;case 6:t="AgX";break;case 7:t="Neutral";break;case 5:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Tr=new I;function qf(){nt.getLuminanceCoefficients(Tr);const i=Tr.x.toFixed(4),e=Tr.y.toFixed(4),t=Tr.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Wf(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Fi).join(`
`)}function Xf(i){const e=[];for(const t in i){const n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function Yf(i,e){const t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let r=0;r<n;r++){const s=i.getActiveAttrib(e,r),a=s.name;let o=1;s.type===i.FLOAT_MAT2&&(o=2),s.type===i.FLOAT_MAT3&&(o=3),s.type===i.FLOAT_MAT4&&(o=4),t[a]={type:s.type,location:i.getAttribLocation(e,a),locationSize:o}}return t}function Fi(i){return i!==""}function Za(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Ka(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const $f=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ls(i){return i.replace($f,Kf)}const Zf=new Map;function Kf(i,e){let t=$e[e];if(t===void 0){const n=Zf.get(e);if(n!==void 0)t=$e[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return Ls(t)}const Jf=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Ja(i){return i.replace(Jf,jf)}function jf(i,e,t,n){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function ja(i){let e=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function Qf(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===1?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===2?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===3&&(e="SHADOWMAP_TYPE_VSM"),e}function ep(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case 301:case 302:e="ENVMAP_TYPE_CUBE";break;case 306:e="ENVMAP_TYPE_CUBE_UV";break}return e}function tp(i){let e="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case 302:e="ENVMAP_MODE_REFRACTION";break}return e}function np(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case 0:e="ENVMAP_BLENDING_MULTIPLY";break;case 1:e="ENVMAP_BLENDING_MIX";break;case 2:e="ENVMAP_BLENDING_ADD";break}return e}function ip(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function rp(i,e,t,n){const r=i.getContext(),s=t.defines;let a=t.vertexShader,o=t.fragmentShader;const l=Qf(t),c=ep(t),d=tp(t),u=np(t),h=ip(t),m=Wf(t),_=Xf(s),g=r.createProgram();let p,f,w=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(Fi).join(`
`),p.length>0&&(p+=`
`),f=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(Fi).join(`
`),f.length>0&&(f+=`
`)):(p=[ja(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+d:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Fi).join(`
`),f=[ja(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+d:"",t.envMap?"#define "+u:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==0?"#define TONE_MAPPING":"",t.toneMapping!==0?$e.tonemapping_pars_fragment:"",t.toneMapping!==0?Hf("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",$e.colorspace_pars_fragment,Vf("linearToOutputTexel",t.outputColorSpace),qf(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Fi).join(`
`)),a=Ls(a),a=Za(a,t),a=Ka(a,t),o=Ls(o),o=Za(o,t),o=Ka(o,t),a=Ja(a),o=Ja(o),t.isRawShaderMaterial!==!0&&(w=`#version 300 es
`,p=[m,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,f=["#define varying in",t.glslVersion===Js?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Js?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);const y=w+p+a,v=w+f+o,T=Xa(r,r.VERTEX_SHADER,y),C=Xa(r,r.FRAGMENT_SHADER,v);r.attachShader(g,T),r.attachShader(g,C),t.index0AttributeName!==void 0?r.bindAttribLocation(g,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(g,0,"position"),r.linkProgram(g);function P(D){if(i.debug.checkShaderErrors){const F=r.getProgramInfoLog(g)||"",O=r.getShaderInfoLog(T)||"",z=r.getShaderInfoLog(C)||"",q=F.trim(),H=O.trim(),re=z.trim();let X=!0,fe=!0;if(r.getProgramParameter(g,r.LINK_STATUS)===!1)if(X=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(r,g,T,C);else{const ge=$a(r,T,"vertex"),Ee=$a(r,C,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(g,r.VALIDATE_STATUS)+`

Material Name: `+D.name+`
Material Type: `+D.type+`

Program Info Log: `+q+`
`+ge+`
`+Ee)}else q!==""?console.warn("THREE.WebGLProgram: Program Info Log:",q):(H===""||re==="")&&(fe=!1);fe&&(D.diagnostics={runnable:X,programLog:q,vertexShader:{log:H,prefix:p},fragmentShader:{log:re,prefix:f}})}r.deleteShader(T),r.deleteShader(C),A=new wr(r,g),M=Yf(r,g)}let A;this.getUniforms=function(){return A===void 0&&P(this),A};let M;this.getAttributes=function(){return M===void 0&&P(this),M};let x=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return x===!1&&(x=r.getProgramParameter(g,Bf)),x},this.destroy=function(){n.releaseStatesOfProgram(this),r.deleteProgram(g),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=kf++,this.cacheKey=e,this.usedTimes=1,this.program=g,this.vertexShader=T,this.fragmentShader=C,this}let sp=0;class ap{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(n),a=this._getShaderCacheForMaterial(e);return a.has(r)===!1&&(a.add(r),r.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new op(e),t.set(e,n)),n}}class op{constructor(e){this.id=sp++,this.code=e,this.usedTimes=0}}function cp(i,e,t,n,r,s,a){const o=new zs,l=new ap,c=new Set,d=[],u=r.logarithmicDepthBuffer,h=r.vertexTextures;let m=r.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(M){return c.add(M),M===0?"uv":`uv${M}`}function p(M,x,D,F,O){const z=F.fog,q=O.geometry,H=M.isMeshStandardMaterial?F.environment:null,re=(M.isMeshStandardMaterial?t:e).get(M.envMap||H),X=re&&re.mapping===306?re.image.height:null,fe=_[M.type];M.precision!==null&&(m=r.getMaxPrecision(M.precision),m!==M.precision&&console.warn("THREE.WebGLProgram.getParameters:",M.precision,"not supported, using",m,"instead."));const ge=q.morphAttributes.position||q.morphAttributes.normal||q.morphAttributes.color,Ee=ge!==void 0?ge.length:0;let ze=0;q.morphAttributes.position!==void 0&&(ze=1),q.morphAttributes.normal!==void 0&&(ze=2),q.morphAttributes.color!==void 0&&(ze=3);let Ze,et,Ie,Q;if(fe){const Xe=ln[fe];Ze=Xe.vertexShader,et=Xe.fragmentShader}else Ze=M.vertexShader,et=M.fragmentShader,l.update(M),Ie=l.getVertexShaderID(M),Q=l.getFragmentShaderID(M);const ae=i.getRenderTarget(),xe=i.state.buffers.depth.getReversed(),Le=O.isInstancedMesh===!0,Ae=O.isBatchedMesh===!0,qe=!!M.map,it=!!M.matcap,L=!!re,oe=!!M.aoMap,ne=!!M.lightMap,ee=!!M.bumpMap,J=!!M.normalMap,me=!!M.displacementMap,ce=!!M.emissiveMap,pe=!!M.metalnessMap,We=!!M.roughnessMap,Ve=M.anisotropy>0,b=M.clearcoat>0,S=M.dispersion>0,k=M.iridescence>0,W=M.sheen>0,se=M.transmission>0,$=Ve&&!!M.anisotropyMap,Re=b&&!!M.clearcoatMap,he=b&&!!M.clearcoatNormalMap,be=b&&!!M.clearcoatRoughnessMap,we=k&&!!M.iridescenceMap,de=k&&!!M.iridescenceThicknessMap,Se=W&&!!M.sheenColorMap,Ne=W&&!!M.sheenRoughnessMap,De=!!M.specularMap,U=!!M.specularColorMap,te=!!M.specularIntensityMap,R=se&&!!M.transmissionMap,Y=se&&!!M.thicknessMap,Z=!!M.gradientMap,ie=!!M.alphaMap,j=M.alphaTest>0,K=!!M.alphaHash,_e=!!M.extensions;let Ue=0;M.toneMapped&&(ae===null||ae.isXRRenderTarget===!0)&&(Ue=i.toneMapping);const Oe={shaderID:fe,shaderType:M.type,shaderName:M.name,vertexShader:Ze,fragmentShader:et,defines:M.defines,customVertexShaderID:Ie,customFragmentShaderID:Q,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:m,batching:Ae,batchingColor:Ae&&O._colorsTexture!==null,instancing:Le,instancingColor:Le&&O.instanceColor!==null,instancingMorph:Le&&O.morphTexture!==null,supportsVertexTextures:h,outputColorSpace:ae===null?i.outputColorSpace:ae.isXRRenderTarget===!0?ae.texture.colorSpace:vi,alphaToCoverage:!!M.alphaToCoverage,map:qe,matcap:it,envMap:L,envMapMode:L&&re.mapping,envMapCubeUVHeight:X,aoMap:oe,lightMap:ne,bumpMap:ee,normalMap:J,displacementMap:h&&me,emissiveMap:ce,normalMapObjectSpace:J&&M.normalMapType===1,normalMapTangentSpace:J&&M.normalMapType===0,metalnessMap:pe,roughnessMap:We,anisotropy:Ve,anisotropyMap:$,clearcoat:b,clearcoatMap:Re,clearcoatNormalMap:he,clearcoatRoughnessMap:be,dispersion:S,iridescence:k,iridescenceMap:we,iridescenceThicknessMap:de,sheen:W,sheenColorMap:Se,sheenRoughnessMap:Ne,specularMap:De,specularColorMap:U,specularIntensityMap:te,transmission:se,transmissionMap:R,thicknessMap:Y,gradientMap:Z,opaque:M.transparent===!1&&M.blending===1&&M.alphaToCoverage===!1,alphaMap:ie,alphaTest:j,alphaHash:K,combine:M.combine,mapUv:qe&&g(M.map.channel),aoMapUv:oe&&g(M.aoMap.channel),lightMapUv:ne&&g(M.lightMap.channel),bumpMapUv:ee&&g(M.bumpMap.channel),normalMapUv:J&&g(M.normalMap.channel),displacementMapUv:me&&g(M.displacementMap.channel),emissiveMapUv:ce&&g(M.emissiveMap.channel),metalnessMapUv:pe&&g(M.metalnessMap.channel),roughnessMapUv:We&&g(M.roughnessMap.channel),anisotropyMapUv:$&&g(M.anisotropyMap.channel),clearcoatMapUv:Re&&g(M.clearcoatMap.channel),clearcoatNormalMapUv:he&&g(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:be&&g(M.clearcoatRoughnessMap.channel),iridescenceMapUv:we&&g(M.iridescenceMap.channel),iridescenceThicknessMapUv:de&&g(M.iridescenceThicknessMap.channel),sheenColorMapUv:Se&&g(M.sheenColorMap.channel),sheenRoughnessMapUv:Ne&&g(M.sheenRoughnessMap.channel),specularMapUv:De&&g(M.specularMap.channel),specularColorMapUv:U&&g(M.specularColorMap.channel),specularIntensityMapUv:te&&g(M.specularIntensityMap.channel),transmissionMapUv:R&&g(M.transmissionMap.channel),thicknessMapUv:Y&&g(M.thicknessMap.channel),alphaMapUv:ie&&g(M.alphaMap.channel),vertexTangents:!!q.attributes.tangent&&(J||Ve),vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!q.attributes.color&&q.attributes.color.itemSize===4,pointsUvs:O.isPoints===!0&&!!q.attributes.uv&&(qe||ie),fog:!!z,useFog:M.fog===!0,fogExp2:!!z&&z.isFogExp2,flatShading:M.flatShading===!0&&M.wireframe===!1,sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:u,reversedDepthBuffer:xe,skinning:O.isSkinnedMesh===!0,morphTargets:q.morphAttributes.position!==void 0,morphNormals:q.morphAttributes.normal!==void 0,morphColors:q.morphAttributes.color!==void 0,morphTargetsCount:Ee,morphTextureStride:ze,numDirLights:x.directional.length,numPointLights:x.point.length,numSpotLights:x.spot.length,numSpotLightMaps:x.spotLightMap.length,numRectAreaLights:x.rectArea.length,numHemiLights:x.hemi.length,numDirLightShadows:x.directionalShadowMap.length,numPointLightShadows:x.pointShadowMap.length,numSpotLightShadows:x.spotShadowMap.length,numSpotLightShadowsWithMaps:x.numSpotLightShadowsWithMaps,numLightProbes:x.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:M.dithering,shadowMapEnabled:i.shadowMap.enabled&&D.length>0,shadowMapType:i.shadowMap.type,toneMapping:Ue,decodeVideoTexture:qe&&M.map.isVideoTexture===!0&&nt.getTransfer(M.map.colorSpace)===at,decodeVideoTextureEmissive:ce&&M.emissiveMap.isVideoTexture===!0&&nt.getTransfer(M.emissiveMap.colorSpace)===at,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===2,flipSided:M.side===1,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionClipCullDistance:_e&&M.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(_e&&M.extensions.multiDraw===!0||Ae)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:M.customProgramCacheKey()};return Oe.vertexUv1s=c.has(1),Oe.vertexUv2s=c.has(2),Oe.vertexUv3s=c.has(3),c.clear(),Oe}function f(M){const x=[];if(M.shaderID?x.push(M.shaderID):(x.push(M.customVertexShaderID),x.push(M.customFragmentShaderID)),M.defines!==void 0)for(const D in M.defines)x.push(D),x.push(M.defines[D]);return M.isRawShaderMaterial===!1&&(w(x,M),y(x,M),x.push(i.outputColorSpace)),x.push(M.customProgramCacheKey),x.join()}function w(M,x){M.push(x.precision),M.push(x.outputColorSpace),M.push(x.envMapMode),M.push(x.envMapCubeUVHeight),M.push(x.mapUv),M.push(x.alphaMapUv),M.push(x.lightMapUv),M.push(x.aoMapUv),M.push(x.bumpMapUv),M.push(x.normalMapUv),M.push(x.displacementMapUv),M.push(x.emissiveMapUv),M.push(x.metalnessMapUv),M.push(x.roughnessMapUv),M.push(x.anisotropyMapUv),M.push(x.clearcoatMapUv),M.push(x.clearcoatNormalMapUv),M.push(x.clearcoatRoughnessMapUv),M.push(x.iridescenceMapUv),M.push(x.iridescenceThicknessMapUv),M.push(x.sheenColorMapUv),M.push(x.sheenRoughnessMapUv),M.push(x.specularMapUv),M.push(x.specularColorMapUv),M.push(x.specularIntensityMapUv),M.push(x.transmissionMapUv),M.push(x.thicknessMapUv),M.push(x.combine),M.push(x.fogExp2),M.push(x.sizeAttenuation),M.push(x.morphTargetsCount),M.push(x.morphAttributeCount),M.push(x.numDirLights),M.push(x.numPointLights),M.push(x.numSpotLights),M.push(x.numSpotLightMaps),M.push(x.numHemiLights),M.push(x.numRectAreaLights),M.push(x.numDirLightShadows),M.push(x.numPointLightShadows),M.push(x.numSpotLightShadows),M.push(x.numSpotLightShadowsWithMaps),M.push(x.numLightProbes),M.push(x.shadowMapType),M.push(x.toneMapping),M.push(x.numClippingPlanes),M.push(x.numClipIntersection),M.push(x.depthPacking)}function y(M,x){o.disableAll(),x.supportsVertexTextures&&o.enable(0),x.instancing&&o.enable(1),x.instancingColor&&o.enable(2),x.instancingMorph&&o.enable(3),x.matcap&&o.enable(4),x.envMap&&o.enable(5),x.normalMapObjectSpace&&o.enable(6),x.normalMapTangentSpace&&o.enable(7),x.clearcoat&&o.enable(8),x.iridescence&&o.enable(9),x.alphaTest&&o.enable(10),x.vertexColors&&o.enable(11),x.vertexAlphas&&o.enable(12),x.vertexUv1s&&o.enable(13),x.vertexUv2s&&o.enable(14),x.vertexUv3s&&o.enable(15),x.vertexTangents&&o.enable(16),x.anisotropy&&o.enable(17),x.alphaHash&&o.enable(18),x.batching&&o.enable(19),x.dispersion&&o.enable(20),x.batchingColor&&o.enable(21),x.gradientMap&&o.enable(22),M.push(o.mask),o.disableAll(),x.fog&&o.enable(0),x.useFog&&o.enable(1),x.flatShading&&o.enable(2),x.logarithmicDepthBuffer&&o.enable(3),x.reversedDepthBuffer&&o.enable(4),x.skinning&&o.enable(5),x.morphTargets&&o.enable(6),x.morphNormals&&o.enable(7),x.morphColors&&o.enable(8),x.premultipliedAlpha&&o.enable(9),x.shadowMapEnabled&&o.enable(10),x.doubleSided&&o.enable(11),x.flipSided&&o.enable(12),x.useDepthPacking&&o.enable(13),x.dithering&&o.enable(14),x.transmission&&o.enable(15),x.sheen&&o.enable(16),x.opaque&&o.enable(17),x.pointsUvs&&o.enable(18),x.decodeVideoTexture&&o.enable(19),x.decodeVideoTextureEmissive&&o.enable(20),x.alphaToCoverage&&o.enable(21),M.push(o.mask)}function v(M){const x=_[M.type];let D;if(x){const F=ln[x];D=qc.clone(F.uniforms)}else D=M.uniforms;return D}function T(M,x){let D;for(let F=0,O=d.length;F<O;F++){const z=d[F];if(z.cacheKey===x){D=z,++D.usedTimes;break}}return D===void 0&&(D=new rp(i,x,M,s),d.push(D)),D}function C(M){if(--M.usedTimes===0){const x=d.indexOf(M);d[x]=d[d.length-1],d.pop(),M.destroy()}}function P(M){l.remove(M)}function A(){l.dispose()}return{getParameters:p,getProgramCacheKey:f,getUniforms:v,acquireProgram:T,releaseProgram:C,releaseShaderCache:P,programs:d,dispose:A}}function lp(){let i=new WeakMap;function e(a){return i.has(a)}function t(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function r(a,o,l){i.get(a)[o]=l}function s(){i=new WeakMap}return{has:e,get:t,remove:n,update:r,dispose:s}}function dp(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function Qa(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function eo(){const i=[];let e=0;const t=[],n=[],r=[];function s(){e=0,t.length=0,n.length=0,r.length=0}function a(u,h,m,_,g,p){let f=i[e];return f===void 0?(f={id:u.id,object:u,geometry:h,material:m,groupOrder:_,renderOrder:u.renderOrder,z:g,group:p},i[e]=f):(f.id=u.id,f.object=u,f.geometry=h,f.material=m,f.groupOrder=_,f.renderOrder=u.renderOrder,f.z=g,f.group=p),e++,f}function o(u,h,m,_,g,p){const f=a(u,h,m,_,g,p);m.transmission>0?n.push(f):m.transparent===!0?r.push(f):t.push(f)}function l(u,h,m,_,g,p){const f=a(u,h,m,_,g,p);m.transmission>0?n.unshift(f):m.transparent===!0?r.unshift(f):t.unshift(f)}function c(u,h){t.length>1&&t.sort(u||dp),n.length>1&&n.sort(h||Qa),r.length>1&&r.sort(h||Qa)}function d(){for(let u=e,h=i.length;u<h;u++){const m=i[u];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:t,transmissive:n,transparent:r,init:s,push:o,unshift:l,finish:d,sort:c}}function up(){let i=new WeakMap;function e(n,r){const s=i.get(n);let a;return s===void 0?(a=new eo,i.set(n,[a])):r>=s.length?(a=new eo,s.push(a)):a=s[r],a}function t(){i=new WeakMap}return{get:e,dispose:t}}function hp(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new I,color:new Ke};break;case"SpotLight":t={position:new I,direction:new I,color:new Ke,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new I,color:new Ke,distance:0,decay:0};break;case"HemisphereLight":t={direction:new I,skyColor:new Ke,groundColor:new Ke};break;case"RectAreaLight":t={color:new Ke,position:new I,halfWidth:new I,halfHeight:new I};break}return i[e.id]=t,t}}}function fp(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ve};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ve};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ve,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let pp=0;function mp(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function gp(i){const e=new hp,t=fp(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new I);const r=new I,s=new lt,a=new lt;function o(c){let d=0,u=0,h=0;for(let M=0;M<9;M++)n.probe[M].set(0,0,0);let m=0,_=0,g=0,p=0,f=0,w=0,y=0,v=0,T=0,C=0,P=0;c.sort(mp);for(let M=0,x=c.length;M<x;M++){const D=c[M],F=D.color,O=D.intensity,z=D.distance,q=D.shadow&&D.shadow.map?D.shadow.map.texture:null;if(D.isAmbientLight)d+=F.r*O,u+=F.g*O,h+=F.b*O;else if(D.isLightProbe){for(let H=0;H<9;H++)n.probe[H].addScaledVector(D.sh.coefficients[H],O);P++}else if(D.isDirectionalLight){const H=e.get(D);if(H.color.copy(D.color).multiplyScalar(D.intensity),D.castShadow){const re=D.shadow,X=t.get(D);X.shadowIntensity=re.intensity,X.shadowBias=re.bias,X.shadowNormalBias=re.normalBias,X.shadowRadius=re.radius,X.shadowMapSize=re.mapSize,n.directionalShadow[m]=X,n.directionalShadowMap[m]=q,n.directionalShadowMatrix[m]=D.shadow.matrix,w++}n.directional[m]=H,m++}else if(D.isSpotLight){const H=e.get(D);H.position.setFromMatrixPosition(D.matrixWorld),H.color.copy(F).multiplyScalar(O),H.distance=z,H.coneCos=Math.cos(D.angle),H.penumbraCos=Math.cos(D.angle*(1-D.penumbra)),H.decay=D.decay,n.spot[g]=H;const re=D.shadow;if(D.map&&(n.spotLightMap[T]=D.map,T++,re.updateMatrices(D),D.castShadow&&C++),n.spotLightMatrix[g]=re.matrix,D.castShadow){const X=t.get(D);X.shadowIntensity=re.intensity,X.shadowBias=re.bias,X.shadowNormalBias=re.normalBias,X.shadowRadius=re.radius,X.shadowMapSize=re.mapSize,n.spotShadow[g]=X,n.spotShadowMap[g]=q,v++}g++}else if(D.isRectAreaLight){const H=e.get(D);H.color.copy(F).multiplyScalar(O),H.halfWidth.set(D.width*.5,0,0),H.halfHeight.set(0,D.height*.5,0),n.rectArea[p]=H,p++}else if(D.isPointLight){const H=e.get(D);if(H.color.copy(D.color).multiplyScalar(D.intensity),H.distance=D.distance,H.decay=D.decay,D.castShadow){const re=D.shadow,X=t.get(D);X.shadowIntensity=re.intensity,X.shadowBias=re.bias,X.shadowNormalBias=re.normalBias,X.shadowRadius=re.radius,X.shadowMapSize=re.mapSize,X.shadowCameraNear=re.camera.near,X.shadowCameraFar=re.camera.far,n.pointShadow[_]=X,n.pointShadowMap[_]=q,n.pointShadowMatrix[_]=D.shadow.matrix,y++}n.point[_]=H,_++}else if(D.isHemisphereLight){const H=e.get(D);H.skyColor.copy(D.color).multiplyScalar(O),H.groundColor.copy(D.groundColor).multiplyScalar(O),n.hemi[f]=H,f++}}p>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=ye.LTC_FLOAT_1,n.rectAreaLTC2=ye.LTC_FLOAT_2):(n.rectAreaLTC1=ye.LTC_HALF_1,n.rectAreaLTC2=ye.LTC_HALF_2)),n.ambient[0]=d,n.ambient[1]=u,n.ambient[2]=h;const A=n.hash;(A.directionalLength!==m||A.pointLength!==_||A.spotLength!==g||A.rectAreaLength!==p||A.hemiLength!==f||A.numDirectionalShadows!==w||A.numPointShadows!==y||A.numSpotShadows!==v||A.numSpotMaps!==T||A.numLightProbes!==P)&&(n.directional.length=m,n.spot.length=g,n.rectArea.length=p,n.point.length=_,n.hemi.length=f,n.directionalShadow.length=w,n.directionalShadowMap.length=w,n.pointShadow.length=y,n.pointShadowMap.length=y,n.spotShadow.length=v,n.spotShadowMap.length=v,n.directionalShadowMatrix.length=w,n.pointShadowMatrix.length=y,n.spotLightMatrix.length=v+T-C,n.spotLightMap.length=T,n.numSpotLightShadowsWithMaps=C,n.numLightProbes=P,A.directionalLength=m,A.pointLength=_,A.spotLength=g,A.rectAreaLength=p,A.hemiLength=f,A.numDirectionalShadows=w,A.numPointShadows=y,A.numSpotShadows=v,A.numSpotMaps=T,A.numLightProbes=P,n.version=pp++)}function l(c,d){let u=0,h=0,m=0,_=0,g=0;const p=d.matrixWorldInverse;for(let f=0,w=c.length;f<w;f++){const y=c[f];if(y.isDirectionalLight){const v=n.directional[u];v.direction.setFromMatrixPosition(y.matrixWorld),r.setFromMatrixPosition(y.target.matrixWorld),v.direction.sub(r),v.direction.transformDirection(p),u++}else if(y.isSpotLight){const v=n.spot[m];v.position.setFromMatrixPosition(y.matrixWorld),v.position.applyMatrix4(p),v.direction.setFromMatrixPosition(y.matrixWorld),r.setFromMatrixPosition(y.target.matrixWorld),v.direction.sub(r),v.direction.transformDirection(p),m++}else if(y.isRectAreaLight){const v=n.rectArea[_];v.position.setFromMatrixPosition(y.matrixWorld),v.position.applyMatrix4(p),a.identity(),s.copy(y.matrixWorld),s.premultiply(p),a.extractRotation(s),v.halfWidth.set(y.width*.5,0,0),v.halfHeight.set(0,y.height*.5,0),v.halfWidth.applyMatrix4(a),v.halfHeight.applyMatrix4(a),_++}else if(y.isPointLight){const v=n.point[h];v.position.setFromMatrixPosition(y.matrixWorld),v.position.applyMatrix4(p),h++}else if(y.isHemisphereLight){const v=n.hemi[g];v.direction.setFromMatrixPosition(y.matrixWorld),v.direction.transformDirection(p),g++}}}return{setup:o,setupView:l,state:n}}function to(i){const e=new gp(i),t=[],n=[];function r(d){c.camera=d,t.length=0,n.length=0}function s(d){t.push(d)}function a(d){n.push(d)}function o(){e.setup(t)}function l(d){e.setupView(t,d)}const c={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:c,setupLights:o,setupLightsView:l,pushLight:s,pushShadow:a}}function _p(i){let e=new WeakMap;function t(r,s=0){const a=e.get(r);let o;return a===void 0?(o=new to(i),e.set(r,[o])):s>=a.length?(o=new to(i),a.push(o)):o=a[s],o}function n(){e=new WeakMap}return{get:t,dispose:n}}const vp=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,xp=`uniform sampler2D shadow_pass;
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
}`;function yp(i,e,t){let n=new Gs;const r=new ve,s=new ve,a=new ct,o=new Ol({depthPacking:3201}),l=new Bl,c={},d=t.maxTextureSize,u={0:1,1:0,2:2},h=new Rn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ve},radius:{value:4}},vertexShader:vp,fragmentShader:xp}),m=h.clone();m.defines.HORIZONTAL_PASS=1;const _=new on;_.setAttribute("position",new sn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const g=new ft(_,h),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=1;let f=this.type;this.render=function(C,P,A){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||C.length===0)return;const M=i.getRenderTarget(),x=i.getActiveCubeFace(),D=i.getActiveMipmapLevel(),F=i.state;F.setBlending(0),F.buffers.depth.getReversed()===!0?F.buffers.color.setClear(0,0,0,0):F.buffers.color.setClear(1,1,1,1),F.buffers.depth.setTest(!0),F.setScissorTest(!1);const O=f!==3&&this.type===3,z=f===3&&this.type!==3;for(let q=0,H=C.length;q<H;q++){const re=C[q],X=re.shadow;if(X===void 0){console.warn("THREE.WebGLShadowMap:",re,"has no shadow.");continue}if(X.autoUpdate===!1&&X.needsUpdate===!1)continue;r.copy(X.mapSize);const fe=X.getFrameExtents();if(r.multiply(fe),s.copy(X.mapSize),(r.x>d||r.y>d)&&(r.x>d&&(s.x=Math.floor(d/fe.x),r.x=s.x*fe.x,X.mapSize.x=s.x),r.y>d&&(s.y=Math.floor(d/fe.y),r.y=s.y*fe.y,X.mapSize.y=s.y)),X.map===null||O===!0||z===!0){const Ee=this.type!==3?{minFilter:1003,magFilter:1003}:{};X.map!==null&&X.map.dispose(),X.map=new Hn(r.x,r.y,Ee),X.map.texture.name=re.name+".shadowMap",X.camera.updateProjectionMatrix()}i.setRenderTarget(X.map),i.clear();const ge=X.getViewportCount();for(let Ee=0;Ee<ge;Ee++){const ze=X.getViewport(Ee);a.set(s.x*ze.x,s.y*ze.y,s.x*ze.z,s.y*ze.w),F.viewport(a),X.updateMatrices(re,Ee),n=X.getFrustum(),v(P,A,X.camera,re,this.type)}X.isPointLightShadow!==!0&&this.type===3&&w(X,A),X.needsUpdate=!1}f=this.type,p.needsUpdate=!1,i.setRenderTarget(M,x,D)};function w(C,P){const A=e.update(g);h.defines.VSM_SAMPLES!==C.blurSamples&&(h.defines.VSM_SAMPLES=C.blurSamples,m.defines.VSM_SAMPLES=C.blurSamples,h.needsUpdate=!0,m.needsUpdate=!0),C.mapPass===null&&(C.mapPass=new Hn(r.x,r.y)),h.uniforms.shadow_pass.value=C.map.texture,h.uniforms.resolution.value=C.mapSize,h.uniforms.radius.value=C.radius,i.setRenderTarget(C.mapPass),i.clear(),i.renderBufferDirect(P,null,A,h,g,null),m.uniforms.shadow_pass.value=C.mapPass.texture,m.uniforms.resolution.value=C.mapSize,m.uniforms.radius.value=C.radius,i.setRenderTarget(C.map),i.clear(),i.renderBufferDirect(P,null,A,m,g,null)}function y(C,P,A,M){let x=null;const D=A.isPointLight===!0?C.customDistanceMaterial:C.customDepthMaterial;if(D!==void 0)x=D;else if(x=A.isPointLight===!0?l:o,i.localClippingEnabled&&P.clipShadows===!0&&Array.isArray(P.clippingPlanes)&&P.clippingPlanes.length!==0||P.displacementMap&&P.displacementScale!==0||P.alphaMap&&P.alphaTest>0||P.map&&P.alphaTest>0||P.alphaToCoverage===!0){const F=x.uuid,O=P.uuid;let z=c[F];z===void 0&&(z={},c[F]=z);let q=z[O];q===void 0&&(q=x.clone(),z[O]=q,P.addEventListener("dispose",T)),x=q}if(x.visible=P.visible,x.wireframe=P.wireframe,M===3?x.side=P.shadowSide!==null?P.shadowSide:P.side:x.side=P.shadowSide!==null?P.shadowSide:u[P.side],x.alphaMap=P.alphaMap,x.alphaTest=P.alphaToCoverage===!0?.5:P.alphaTest,x.map=P.map,x.clipShadows=P.clipShadows,x.clippingPlanes=P.clippingPlanes,x.clipIntersection=P.clipIntersection,x.displacementMap=P.displacementMap,x.displacementScale=P.displacementScale,x.displacementBias=P.displacementBias,x.wireframeLinewidth=P.wireframeLinewidth,x.linewidth=P.linewidth,A.isPointLight===!0&&x.isMeshDistanceMaterial===!0){const F=i.properties.get(x);F.light=A}return x}function v(C,P,A,M,x){if(C.visible===!1)return;if(C.layers.test(P.layers)&&(C.isMesh||C.isLine||C.isPoints)&&(C.castShadow||C.receiveShadow&&x===3)&&(!C.frustumCulled||n.intersectsObject(C))){C.modelViewMatrix.multiplyMatrices(A.matrixWorldInverse,C.matrixWorld);const O=e.update(C),z=C.material;if(Array.isArray(z)){const q=O.groups;for(let H=0,re=q.length;H<re;H++){const X=q[H],fe=z[X.materialIndex];if(fe&&fe.visible){const ge=y(C,fe,M,x);C.onBeforeShadow(i,C,P,A,O,ge,X),i.renderBufferDirect(A,null,O,ge,C,X),C.onAfterShadow(i,C,P,A,O,ge,X)}}}else if(z.visible){const q=y(C,z,M,x);C.onBeforeShadow(i,C,P,A,O,q,null),i.renderBufferDirect(A,null,O,q,C,null),C.onAfterShadow(i,C,P,A,O,q,null)}}const F=C.children;for(let O=0,z=F.length;O<z;O++)v(F[O],P,A,M,x)}function T(C){C.target.removeEventListener("dispose",T);for(const A in c){const M=c[A],x=C.target.uuid;x in M&&(M[x].dispose(),delete M[x])}}}const Sp={0:1,2:6,4:7,3:5,1:0,6:2,7:4,5:3};function Mp(i,e){function t(){let R=!1;const Y=new ct;let Z=null;const ie=new ct(0,0,0,0);return{setMask:function(j){Z!==j&&!R&&(i.colorMask(j,j,j,j),Z=j)},setLocked:function(j){R=j},setClear:function(j,K,_e,Ue,Oe){Oe===!0&&(j*=Ue,K*=Ue,_e*=Ue),Y.set(j,K,_e,Ue),ie.equals(Y)===!1&&(i.clearColor(j,K,_e,Ue),ie.copy(Y))},reset:function(){R=!1,Z=null,ie.set(-1,0,0,0)}}}function n(){let R=!1,Y=!1,Z=null,ie=null,j=null;return{setReversed:function(K){if(Y!==K){const _e=e.get("EXT_clip_control");K?_e.clipControlEXT(_e.LOWER_LEFT_EXT,_e.ZERO_TO_ONE_EXT):_e.clipControlEXT(_e.LOWER_LEFT_EXT,_e.NEGATIVE_ONE_TO_ONE_EXT),Y=K;const Ue=j;j=null,this.setClear(Ue)}},getReversed:function(){return Y},setTest:function(K){K?ae(i.DEPTH_TEST):xe(i.DEPTH_TEST)},setMask:function(K){Z!==K&&!R&&(i.depthMask(K),Z=K)},setFunc:function(K){if(Y&&(K=Sp[K]),ie!==K){switch(K){case 0:i.depthFunc(i.NEVER);break;case 1:i.depthFunc(i.ALWAYS);break;case 2:i.depthFunc(i.LESS);break;case 3:i.depthFunc(i.LEQUAL);break;case 4:i.depthFunc(i.EQUAL);break;case 5:i.depthFunc(i.GEQUAL);break;case 6:i.depthFunc(i.GREATER);break;case 7:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}ie=K}},setLocked:function(K){R=K},setClear:function(K){j!==K&&(Y&&(K=1-K),i.clearDepth(K),j=K)},reset:function(){R=!1,Z=null,ie=null,j=null,Y=!1}}}function r(){let R=!1,Y=null,Z=null,ie=null,j=null,K=null,_e=null,Ue=null,Oe=null;return{setTest:function(Xe){R||(Xe?ae(i.STENCIL_TEST):xe(i.STENCIL_TEST))},setMask:function(Xe){Y!==Xe&&!R&&(i.stencilMask(Xe),Y=Xe)},setFunc:function(Xe,Mt,mt){(Z!==Xe||ie!==Mt||j!==mt)&&(i.stencilFunc(Xe,Mt,mt),Z=Xe,ie=Mt,j=mt)},setOp:function(Xe,Mt,mt){(K!==Xe||_e!==Mt||Ue!==mt)&&(i.stencilOp(Xe,Mt,mt),K=Xe,_e=Mt,Ue=mt)},setLocked:function(Xe){R=Xe},setClear:function(Xe){Oe!==Xe&&(i.clearStencil(Xe),Oe=Xe)},reset:function(){R=!1,Y=null,Z=null,ie=null,j=null,K=null,_e=null,Ue=null,Oe=null}}}const s=new t,a=new n,o=new r,l=new WeakMap,c=new WeakMap;let d={},u={},h=new WeakMap,m=[],_=null,g=!1,p=null,f=null,w=null,y=null,v=null,T=null,C=null,P=new Ke(0,0,0),A=0,M=!1,x=null,D=null,F=null,O=null,z=null;const q=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let H=!1,re=0;const X=i.getParameter(i.VERSION);X.indexOf("WebGL")!==-1?(re=parseFloat(/^WebGL (\d)/.exec(X)[1]),H=re>=1):X.indexOf("OpenGL ES")!==-1&&(re=parseFloat(/^OpenGL ES (\d)/.exec(X)[1]),H=re>=2);let fe=null,ge={};const Ee=i.getParameter(i.SCISSOR_BOX),ze=i.getParameter(i.VIEWPORT),Ze=new ct().fromArray(Ee),et=new ct().fromArray(ze);function Ie(R,Y,Z,ie){const j=new Uint8Array(4),K=i.createTexture();i.bindTexture(R,K),i.texParameteri(R,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(R,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let _e=0;_e<Z;_e++)R===i.TEXTURE_3D||R===i.TEXTURE_2D_ARRAY?i.texImage3D(Y,0,i.RGBA,1,1,ie,0,i.RGBA,i.UNSIGNED_BYTE,j):i.texImage2D(Y+_e,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,j);return K}const Q={};Q[i.TEXTURE_2D]=Ie(i.TEXTURE_2D,i.TEXTURE_2D,1),Q[i.TEXTURE_CUBE_MAP]=Ie(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),Q[i.TEXTURE_2D_ARRAY]=Ie(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),Q[i.TEXTURE_3D]=Ie(i.TEXTURE_3D,i.TEXTURE_3D,1,1),s.setClear(0,0,0,1),a.setClear(1),o.setClear(0),ae(i.DEPTH_TEST),a.setFunc(3),ee(!1),J(1),ae(i.CULL_FACE),oe(0);function ae(R){d[R]!==!0&&(i.enable(R),d[R]=!0)}function xe(R){d[R]!==!1&&(i.disable(R),d[R]=!1)}function Le(R,Y){return u[R]!==Y?(i.bindFramebuffer(R,Y),u[R]=Y,R===i.DRAW_FRAMEBUFFER&&(u[i.FRAMEBUFFER]=Y),R===i.FRAMEBUFFER&&(u[i.DRAW_FRAMEBUFFER]=Y),!0):!1}function Ae(R,Y){let Z=m,ie=!1;if(R){Z=h.get(Y),Z===void 0&&(Z=[],h.set(Y,Z));const j=R.textures;if(Z.length!==j.length||Z[0]!==i.COLOR_ATTACHMENT0){for(let K=0,_e=j.length;K<_e;K++)Z[K]=i.COLOR_ATTACHMENT0+K;Z.length=j.length,ie=!0}}else Z[0]!==i.BACK&&(Z[0]=i.BACK,ie=!0);ie&&i.drawBuffers(Z)}function qe(R){return _!==R?(i.useProgram(R),_=R,!0):!1}const it={100:i.FUNC_ADD,101:i.FUNC_SUBTRACT,102:i.FUNC_REVERSE_SUBTRACT};it[103]=i.MIN,it[104]=i.MAX;const L={200:i.ZERO,201:i.ONE,202:i.SRC_COLOR,204:i.SRC_ALPHA,210:i.SRC_ALPHA_SATURATE,208:i.DST_COLOR,206:i.DST_ALPHA,203:i.ONE_MINUS_SRC_COLOR,205:i.ONE_MINUS_SRC_ALPHA,209:i.ONE_MINUS_DST_COLOR,207:i.ONE_MINUS_DST_ALPHA,211:i.CONSTANT_COLOR,212:i.ONE_MINUS_CONSTANT_COLOR,213:i.CONSTANT_ALPHA,214:i.ONE_MINUS_CONSTANT_ALPHA};function oe(R,Y,Z,ie,j,K,_e,Ue,Oe,Xe){if(R===0){g===!0&&(xe(i.BLEND),g=!1);return}if(g===!1&&(ae(i.BLEND),g=!0),R!==5){if(R!==p||Xe!==M){if((f!==100||v!==100)&&(i.blendEquation(i.FUNC_ADD),f=100,v=100),Xe)switch(R){case 1:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case 2:i.blendFunc(i.ONE,i.ONE);break;case 3:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case 4:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",R);break}else switch(R){case 1:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case 2:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case 3:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case 4:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",R);break}w=null,y=null,T=null,C=null,P.set(0,0,0),A=0,p=R,M=Xe}return}j=j||Y,K=K||Z,_e=_e||ie,(Y!==f||j!==v)&&(i.blendEquationSeparate(it[Y],it[j]),f=Y,v=j),(Z!==w||ie!==y||K!==T||_e!==C)&&(i.blendFuncSeparate(L[Z],L[ie],L[K],L[_e]),w=Z,y=ie,T=K,C=_e),(Ue.equals(P)===!1||Oe!==A)&&(i.blendColor(Ue.r,Ue.g,Ue.b,Oe),P.copy(Ue),A=Oe),p=R,M=!1}function ne(R,Y){R.side===2?xe(i.CULL_FACE):ae(i.CULL_FACE);let Z=R.side===1;Y&&(Z=!Z),ee(Z),R.blending===1&&R.transparent===!1?oe(0):oe(R.blending,R.blendEquation,R.blendSrc,R.blendDst,R.blendEquationAlpha,R.blendSrcAlpha,R.blendDstAlpha,R.blendColor,R.blendAlpha,R.premultipliedAlpha),a.setFunc(R.depthFunc),a.setTest(R.depthTest),a.setMask(R.depthWrite),s.setMask(R.colorWrite);const ie=R.stencilWrite;o.setTest(ie),ie&&(o.setMask(R.stencilWriteMask),o.setFunc(R.stencilFunc,R.stencilRef,R.stencilFuncMask),o.setOp(R.stencilFail,R.stencilZFail,R.stencilZPass)),ce(R.polygonOffset,R.polygonOffsetFactor,R.polygonOffsetUnits),R.alphaToCoverage===!0?ae(i.SAMPLE_ALPHA_TO_COVERAGE):xe(i.SAMPLE_ALPHA_TO_COVERAGE)}function ee(R){x!==R&&(R?i.frontFace(i.CW):i.frontFace(i.CCW),x=R)}function J(R){R!==0?(ae(i.CULL_FACE),R!==D&&(R===1?i.cullFace(i.BACK):R===2?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):xe(i.CULL_FACE),D=R}function me(R){R!==F&&(H&&i.lineWidth(R),F=R)}function ce(R,Y,Z){R?(ae(i.POLYGON_OFFSET_FILL),(O!==Y||z!==Z)&&(i.polygonOffset(Y,Z),O=Y,z=Z)):xe(i.POLYGON_OFFSET_FILL)}function pe(R){R?ae(i.SCISSOR_TEST):xe(i.SCISSOR_TEST)}function We(R){R===void 0&&(R=i.TEXTURE0+q-1),fe!==R&&(i.activeTexture(R),fe=R)}function Ve(R,Y,Z){Z===void 0&&(fe===null?Z=i.TEXTURE0+q-1:Z=fe);let ie=ge[Z];ie===void 0&&(ie={type:void 0,texture:void 0},ge[Z]=ie),(ie.type!==R||ie.texture!==Y)&&(fe!==Z&&(i.activeTexture(Z),fe=Z),i.bindTexture(R,Y||Q[R]),ie.type=R,ie.texture=Y)}function b(){const R=ge[fe];R!==void 0&&R.type!==void 0&&(i.bindTexture(R.type,null),R.type=void 0,R.texture=void 0)}function S(){try{i.compressedTexImage2D(...arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function k(){try{i.compressedTexImage3D(...arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function W(){try{i.texSubImage2D(...arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function se(){try{i.texSubImage3D(...arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function $(){try{i.compressedTexSubImage2D(...arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function Re(){try{i.compressedTexSubImage3D(...arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function he(){try{i.texStorage2D(...arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function be(){try{i.texStorage3D(...arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function we(){try{i.texImage2D(...arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function de(){try{i.texImage3D(...arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function Se(R){Ze.equals(R)===!1&&(i.scissor(R.x,R.y,R.z,R.w),Ze.copy(R))}function Ne(R){et.equals(R)===!1&&(i.viewport(R.x,R.y,R.z,R.w),et.copy(R))}function De(R,Y){let Z=c.get(Y);Z===void 0&&(Z=new WeakMap,c.set(Y,Z));let ie=Z.get(R);ie===void 0&&(ie=i.getUniformBlockIndex(Y,R.name),Z.set(R,ie))}function U(R,Y){const ie=c.get(Y).get(R);l.get(Y)!==ie&&(i.uniformBlockBinding(Y,ie,R.__bindingPointIndex),l.set(Y,ie))}function te(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),d={},fe=null,ge={},u={},h=new WeakMap,m=[],_=null,g=!1,p=null,f=null,w=null,y=null,v=null,T=null,C=null,P=new Ke(0,0,0),A=0,M=!1,x=null,D=null,F=null,O=null,z=null,Ze.set(0,0,i.canvas.width,i.canvas.height),et.set(0,0,i.canvas.width,i.canvas.height),s.reset(),a.reset(),o.reset()}return{buffers:{color:s,depth:a,stencil:o},enable:ae,disable:xe,bindFramebuffer:Le,drawBuffers:Ae,useProgram:qe,setBlending:oe,setMaterial:ne,setFlipSided:ee,setCullFace:J,setLineWidth:me,setPolygonOffset:ce,setScissorTest:pe,activeTexture:We,bindTexture:Ve,unbindTexture:b,compressedTexImage2D:S,compressedTexImage3D:k,texImage2D:we,texImage3D:de,updateUBOMapping:De,uniformBlockBinding:U,texStorage2D:he,texStorage3D:be,texSubImage2D:W,texSubImage3D:se,compressedTexSubImage2D:$,compressedTexSubImage3D:Re,scissor:Se,viewport:Ne,reset:te}}function Ep(i,e,t,n,r,s,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new ve,d=new WeakMap;let u;const h=new WeakMap;let m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(b,S){return m?new OffscreenCanvas(b,S):Vi("canvas")}function g(b,S,k){let W=1;const se=Ve(b);if((se.width>k||se.height>k)&&(W=k/Math.max(se.width,se.height)),W<1)if(typeof HTMLImageElement<"u"&&b instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&b instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&b instanceof ImageBitmap||typeof VideoFrame<"u"&&b instanceof VideoFrame){const $=Math.floor(W*se.width),Re=Math.floor(W*se.height);u===void 0&&(u=_($,Re));const he=S?_($,Re):u;return he.width=$,he.height=Re,he.getContext("2d").drawImage(b,0,0,$,Re),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+se.width+"x"+se.height+") to ("+$+"x"+Re+")."),he}else return"data"in b&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+se.width+"x"+se.height+")."),b;return b}function p(b){return b.generateMipmaps}function f(b){i.generateMipmap(b)}function w(b){return b.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:b.isWebGL3DRenderTarget?i.TEXTURE_3D:b.isWebGLArrayRenderTarget||b.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function y(b,S,k,W,se=!1){if(b!==null){if(i[b]!==void 0)return i[b];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+b+"'")}let $=S;if(S===i.RED&&(k===i.FLOAT&&($=i.R32F),k===i.HALF_FLOAT&&($=i.R16F),k===i.UNSIGNED_BYTE&&($=i.R8)),S===i.RED_INTEGER&&(k===i.UNSIGNED_BYTE&&($=i.R8UI),k===i.UNSIGNED_SHORT&&($=i.R16UI),k===i.UNSIGNED_INT&&($=i.R32UI),k===i.BYTE&&($=i.R8I),k===i.SHORT&&($=i.R16I),k===i.INT&&($=i.R32I)),S===i.RG&&(k===i.FLOAT&&($=i.RG32F),k===i.HALF_FLOAT&&($=i.RG16F),k===i.UNSIGNED_BYTE&&($=i.RG8)),S===i.RG_INTEGER&&(k===i.UNSIGNED_BYTE&&($=i.RG8UI),k===i.UNSIGNED_SHORT&&($=i.RG16UI),k===i.UNSIGNED_INT&&($=i.RG32UI),k===i.BYTE&&($=i.RG8I),k===i.SHORT&&($=i.RG16I),k===i.INT&&($=i.RG32I)),S===i.RGB_INTEGER&&(k===i.UNSIGNED_BYTE&&($=i.RGB8UI),k===i.UNSIGNED_SHORT&&($=i.RGB16UI),k===i.UNSIGNED_INT&&($=i.RGB32UI),k===i.BYTE&&($=i.RGB8I),k===i.SHORT&&($=i.RGB16I),k===i.INT&&($=i.RGB32I)),S===i.RGBA_INTEGER&&(k===i.UNSIGNED_BYTE&&($=i.RGBA8UI),k===i.UNSIGNED_SHORT&&($=i.RGBA16UI),k===i.UNSIGNED_INT&&($=i.RGBA32UI),k===i.BYTE&&($=i.RGBA8I),k===i.SHORT&&($=i.RGBA16I),k===i.INT&&($=i.RGBA32I)),S===i.RGB&&(k===i.UNSIGNED_INT_5_9_9_9_REV&&($=i.RGB9_E5),k===i.UNSIGNED_INT_10F_11F_11F_REV&&($=i.R11F_G11F_B10F)),S===i.RGBA){const Re=se?Rr:nt.getTransfer(W);k===i.FLOAT&&($=i.RGBA32F),k===i.HALF_FLOAT&&($=i.RGBA16F),k===i.UNSIGNED_BYTE&&($=Re===at?i.SRGB8_ALPHA8:i.RGBA8),k===i.UNSIGNED_SHORT_4_4_4_4&&($=i.RGBA4),k===i.UNSIGNED_SHORT_5_5_5_1&&($=i.RGB5_A1)}return($===i.R16F||$===i.R32F||$===i.RG16F||$===i.RG32F||$===i.RGBA16F||$===i.RGBA32F)&&e.get("EXT_color_buffer_float"),$}function v(b,S){let k;return b?S===null||S===1014||S===1020?k=i.DEPTH24_STENCIL8:S===1015?k=i.DEPTH32F_STENCIL8:S===1012&&(k=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):S===null||S===1014||S===1020?k=i.DEPTH_COMPONENT24:S===1015?k=i.DEPTH_COMPONENT32F:S===1012&&(k=i.DEPTH_COMPONENT16),k}function T(b,S){return p(b)===!0||b.isFramebufferTexture&&b.minFilter!==1003&&b.minFilter!==1006?Math.log2(Math.max(S.width,S.height))+1:b.mipmaps!==void 0&&b.mipmaps.length>0?b.mipmaps.length:b.isCompressedTexture&&Array.isArray(b.image)?S.mipmaps.length:1}function C(b){const S=b.target;S.removeEventListener("dispose",C),A(S),S.isVideoTexture&&d.delete(S)}function P(b){const S=b.target;S.removeEventListener("dispose",P),x(S)}function A(b){const S=n.get(b);if(S.__webglInit===void 0)return;const k=b.source,W=h.get(k);if(W){const se=W[S.__cacheKey];se.usedTimes--,se.usedTimes===0&&M(b),Object.keys(W).length===0&&h.delete(k)}n.remove(b)}function M(b){const S=n.get(b);i.deleteTexture(S.__webglTexture);const k=b.source,W=h.get(k);delete W[S.__cacheKey],a.memory.textures--}function x(b){const S=n.get(b);if(b.depthTexture&&(b.depthTexture.dispose(),n.remove(b.depthTexture)),b.isWebGLCubeRenderTarget)for(let W=0;W<6;W++){if(Array.isArray(S.__webglFramebuffer[W]))for(let se=0;se<S.__webglFramebuffer[W].length;se++)i.deleteFramebuffer(S.__webglFramebuffer[W][se]);else i.deleteFramebuffer(S.__webglFramebuffer[W]);S.__webglDepthbuffer&&i.deleteRenderbuffer(S.__webglDepthbuffer[W])}else{if(Array.isArray(S.__webglFramebuffer))for(let W=0;W<S.__webglFramebuffer.length;W++)i.deleteFramebuffer(S.__webglFramebuffer[W]);else i.deleteFramebuffer(S.__webglFramebuffer);if(S.__webglDepthbuffer&&i.deleteRenderbuffer(S.__webglDepthbuffer),S.__webglMultisampledFramebuffer&&i.deleteFramebuffer(S.__webglMultisampledFramebuffer),S.__webglColorRenderbuffer)for(let W=0;W<S.__webglColorRenderbuffer.length;W++)S.__webglColorRenderbuffer[W]&&i.deleteRenderbuffer(S.__webglColorRenderbuffer[W]);S.__webglDepthRenderbuffer&&i.deleteRenderbuffer(S.__webglDepthRenderbuffer)}const k=b.textures;for(let W=0,se=k.length;W<se;W++){const $=n.get(k[W]);$.__webglTexture&&(i.deleteTexture($.__webglTexture),a.memory.textures--),n.remove(k[W])}n.remove(b)}let D=0;function F(){D=0}function O(){const b=D;return b>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+b+" texture units while this GPU supports only "+r.maxTextures),D+=1,b}function z(b){const S=[];return S.push(b.wrapS),S.push(b.wrapT),S.push(b.wrapR||0),S.push(b.magFilter),S.push(b.minFilter),S.push(b.anisotropy),S.push(b.internalFormat),S.push(b.format),S.push(b.type),S.push(b.generateMipmaps),S.push(b.premultiplyAlpha),S.push(b.flipY),S.push(b.unpackAlignment),S.push(b.colorSpace),S.join()}function q(b,S){const k=n.get(b);if(b.isVideoTexture&&pe(b),b.isRenderTargetTexture===!1&&b.isExternalTexture!==!0&&b.version>0&&k.__version!==b.version){const W=b.image;if(W===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(W.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Q(k,b,S);return}}else b.isExternalTexture&&(k.__webglTexture=b.sourceTexture?b.sourceTexture:null);t.bindTexture(i.TEXTURE_2D,k.__webglTexture,i.TEXTURE0+S)}function H(b,S){const k=n.get(b);if(b.isRenderTargetTexture===!1&&b.version>0&&k.__version!==b.version){Q(k,b,S);return}t.bindTexture(i.TEXTURE_2D_ARRAY,k.__webglTexture,i.TEXTURE0+S)}function re(b,S){const k=n.get(b);if(b.isRenderTargetTexture===!1&&b.version>0&&k.__version!==b.version){Q(k,b,S);return}t.bindTexture(i.TEXTURE_3D,k.__webglTexture,i.TEXTURE0+S)}function X(b,S){const k=n.get(b);if(b.version>0&&k.__version!==b.version){ae(k,b,S);return}t.bindTexture(i.TEXTURE_CUBE_MAP,k.__webglTexture,i.TEXTURE0+S)}const fe={1e3:i.REPEAT,1001:i.CLAMP_TO_EDGE,1002:i.MIRRORED_REPEAT},ge={1003:i.NEAREST,1004:i.NEAREST_MIPMAP_NEAREST,1005:i.NEAREST_MIPMAP_LINEAR,1006:i.LINEAR,1007:i.LINEAR_MIPMAP_NEAREST,1008:i.LINEAR_MIPMAP_LINEAR},Ee={512:i.NEVER,519:i.ALWAYS,513:i.LESS,515:i.LEQUAL,514:i.EQUAL,518:i.GEQUAL,516:i.GREATER,517:i.NOTEQUAL};function ze(b,S){if(S.type===1015&&e.has("OES_texture_float_linear")===!1&&(S.magFilter===1006||S.magFilter===1007||S.magFilter===1005||S.magFilter===1008||S.minFilter===1006||S.minFilter===1007||S.minFilter===1005||S.minFilter===1008)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(b,i.TEXTURE_WRAP_S,fe[S.wrapS]),i.texParameteri(b,i.TEXTURE_WRAP_T,fe[S.wrapT]),(b===i.TEXTURE_3D||b===i.TEXTURE_2D_ARRAY)&&i.texParameteri(b,i.TEXTURE_WRAP_R,fe[S.wrapR]),i.texParameteri(b,i.TEXTURE_MAG_FILTER,ge[S.magFilter]),i.texParameteri(b,i.TEXTURE_MIN_FILTER,ge[S.minFilter]),S.compareFunction&&(i.texParameteri(b,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(b,i.TEXTURE_COMPARE_FUNC,Ee[S.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(S.magFilter===1003||S.minFilter!==1005&&S.minFilter!==1008||S.type===1015&&e.has("OES_texture_float_linear")===!1)return;if(S.anisotropy>1||n.get(S).__currentAnisotropy){const k=e.get("EXT_texture_filter_anisotropic");i.texParameterf(b,k.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,r.getMaxAnisotropy())),n.get(S).__currentAnisotropy=S.anisotropy}}}function Ze(b,S){let k=!1;b.__webglInit===void 0&&(b.__webglInit=!0,S.addEventListener("dispose",C));const W=S.source;let se=h.get(W);se===void 0&&(se={},h.set(W,se));const $=z(S);if($!==b.__cacheKey){se[$]===void 0&&(se[$]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,k=!0),se[$].usedTimes++;const Re=se[b.__cacheKey];Re!==void 0&&(se[b.__cacheKey].usedTimes--,Re.usedTimes===0&&M(S)),b.__cacheKey=$,b.__webglTexture=se[$].texture}return k}function et(b,S,k){return Math.floor(Math.floor(b/k)/S)}function Ie(b,S,k,W){const $=b.updateRanges;if($.length===0)t.texSubImage2D(i.TEXTURE_2D,0,0,0,S.width,S.height,k,W,S.data);else{$.sort((de,Se)=>de.start-Se.start);let Re=0;for(let de=1;de<$.length;de++){const Se=$[Re],Ne=$[de],De=Se.start+Se.count,U=et(Ne.start,S.width,4),te=et(Se.start,S.width,4);Ne.start<=De+1&&U===te&&et(Ne.start+Ne.count-1,S.width,4)===U?Se.count=Math.max(Se.count,Ne.start+Ne.count-Se.start):(++Re,$[Re]=Ne)}$.length=Re+1;const he=i.getParameter(i.UNPACK_ROW_LENGTH),be=i.getParameter(i.UNPACK_SKIP_PIXELS),we=i.getParameter(i.UNPACK_SKIP_ROWS);i.pixelStorei(i.UNPACK_ROW_LENGTH,S.width);for(let de=0,Se=$.length;de<Se;de++){const Ne=$[de],De=Math.floor(Ne.start/4),U=Math.ceil(Ne.count/4),te=De%S.width,R=Math.floor(De/S.width),Y=U,Z=1;i.pixelStorei(i.UNPACK_SKIP_PIXELS,te),i.pixelStorei(i.UNPACK_SKIP_ROWS,R),t.texSubImage2D(i.TEXTURE_2D,0,te,R,Y,Z,k,W,S.data)}b.clearUpdateRanges(),i.pixelStorei(i.UNPACK_ROW_LENGTH,he),i.pixelStorei(i.UNPACK_SKIP_PIXELS,be),i.pixelStorei(i.UNPACK_SKIP_ROWS,we)}}function Q(b,S,k){let W=i.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&(W=i.TEXTURE_2D_ARRAY),S.isData3DTexture&&(W=i.TEXTURE_3D);const se=Ze(b,S),$=S.source;t.bindTexture(W,b.__webglTexture,i.TEXTURE0+k);const Re=n.get($);if($.version!==Re.__version||se===!0){t.activeTexture(i.TEXTURE0+k);const he=nt.getPrimaries(nt.workingColorSpace),be=S.colorSpace===""?null:nt.getPrimaries(S.colorSpace),we=S.colorSpace===""||he===be?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,S.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,S.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,we);let de=g(S.image,!1,r.maxTextureSize);de=We(S,de);const Se=s.convert(S.format,S.colorSpace),Ne=s.convert(S.type);let De=y(S.internalFormat,Se,Ne,S.colorSpace,S.isVideoTexture);ze(W,S);let U;const te=S.mipmaps,R=S.isVideoTexture!==!0,Y=Re.__version===void 0||se===!0,Z=$.dataReady,ie=T(S,de);if(S.isDepthTexture)De=v(S.format===1027,S.type),Y&&(R?t.texStorage2D(i.TEXTURE_2D,1,De,de.width,de.height):t.texImage2D(i.TEXTURE_2D,0,De,de.width,de.height,0,Se,Ne,null));else if(S.isDataTexture)if(te.length>0){R&&Y&&t.texStorage2D(i.TEXTURE_2D,ie,De,te[0].width,te[0].height);for(let j=0,K=te.length;j<K;j++)U=te[j],R?Z&&t.texSubImage2D(i.TEXTURE_2D,j,0,0,U.width,U.height,Se,Ne,U.data):t.texImage2D(i.TEXTURE_2D,j,De,U.width,U.height,0,Se,Ne,U.data);S.generateMipmaps=!1}else R?(Y&&t.texStorage2D(i.TEXTURE_2D,ie,De,de.width,de.height),Z&&Ie(S,de,Se,Ne)):t.texImage2D(i.TEXTURE_2D,0,De,de.width,de.height,0,Se,Ne,de.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){R&&Y&&t.texStorage3D(i.TEXTURE_2D_ARRAY,ie,De,te[0].width,te[0].height,de.depth);for(let j=0,K=te.length;j<K;j++)if(U=te[j],S.format!==1023)if(Se!==null)if(R){if(Z)if(S.layerUpdates.size>0){const _e=Da(U.width,U.height,S.format,S.type);for(const Ue of S.layerUpdates){const Oe=U.data.subarray(Ue*_e/U.data.BYTES_PER_ELEMENT,(Ue+1)*_e/U.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,j,0,0,Ue,U.width,U.height,1,Se,Oe)}S.clearLayerUpdates()}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,j,0,0,0,U.width,U.height,de.depth,Se,U.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,j,De,U.width,U.height,de.depth,0,U.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else R?Z&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,j,0,0,0,U.width,U.height,de.depth,Se,Ne,U.data):t.texImage3D(i.TEXTURE_2D_ARRAY,j,De,U.width,U.height,de.depth,0,Se,Ne,U.data)}else{R&&Y&&t.texStorage2D(i.TEXTURE_2D,ie,De,te[0].width,te[0].height);for(let j=0,K=te.length;j<K;j++)U=te[j],S.format!==1023?Se!==null?R?Z&&t.compressedTexSubImage2D(i.TEXTURE_2D,j,0,0,U.width,U.height,Se,U.data):t.compressedTexImage2D(i.TEXTURE_2D,j,De,U.width,U.height,0,U.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):R?Z&&t.texSubImage2D(i.TEXTURE_2D,j,0,0,U.width,U.height,Se,Ne,U.data):t.texImage2D(i.TEXTURE_2D,j,De,U.width,U.height,0,Se,Ne,U.data)}else if(S.isDataArrayTexture)if(R){if(Y&&t.texStorage3D(i.TEXTURE_2D_ARRAY,ie,De,de.width,de.height,de.depth),Z)if(S.layerUpdates.size>0){const j=Da(de.width,de.height,S.format,S.type);for(const K of S.layerUpdates){const _e=de.data.subarray(K*j/de.data.BYTES_PER_ELEMENT,(K+1)*j/de.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,K,de.width,de.height,1,Se,Ne,_e)}S.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,de.width,de.height,de.depth,Se,Ne,de.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,De,de.width,de.height,de.depth,0,Se,Ne,de.data);else if(S.isData3DTexture)R?(Y&&t.texStorage3D(i.TEXTURE_3D,ie,De,de.width,de.height,de.depth),Z&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,de.width,de.height,de.depth,Se,Ne,de.data)):t.texImage3D(i.TEXTURE_3D,0,De,de.width,de.height,de.depth,0,Se,Ne,de.data);else if(S.isFramebufferTexture){if(Y)if(R)t.texStorage2D(i.TEXTURE_2D,ie,De,de.width,de.height);else{let j=de.width,K=de.height;for(let _e=0;_e<ie;_e++)t.texImage2D(i.TEXTURE_2D,_e,De,j,K,0,Se,Ne,null),j>>=1,K>>=1}}else if(te.length>0){if(R&&Y){const j=Ve(te[0]);t.texStorage2D(i.TEXTURE_2D,ie,De,j.width,j.height)}for(let j=0,K=te.length;j<K;j++)U=te[j],R?Z&&t.texSubImage2D(i.TEXTURE_2D,j,0,0,Se,Ne,U):t.texImage2D(i.TEXTURE_2D,j,De,Se,Ne,U);S.generateMipmaps=!1}else if(R){if(Y){const j=Ve(de);t.texStorage2D(i.TEXTURE_2D,ie,De,j.width,j.height)}Z&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,Se,Ne,de)}else t.texImage2D(i.TEXTURE_2D,0,De,Se,Ne,de);p(S)&&f(W),Re.__version=$.version,S.onUpdate&&S.onUpdate(S)}b.__version=S.version}function ae(b,S,k){if(S.image.length!==6)return;const W=Ze(b,S),se=S.source;t.bindTexture(i.TEXTURE_CUBE_MAP,b.__webglTexture,i.TEXTURE0+k);const $=n.get(se);if(se.version!==$.__version||W===!0){t.activeTexture(i.TEXTURE0+k);const Re=nt.getPrimaries(nt.workingColorSpace),he=S.colorSpace===""?null:nt.getPrimaries(S.colorSpace),be=S.colorSpace===""||Re===he?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,S.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,S.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,be);const we=S.isCompressedTexture||S.image[0].isCompressedTexture,de=S.image[0]&&S.image[0].isDataTexture,Se=[];for(let K=0;K<6;K++)!we&&!de?Se[K]=g(S.image[K],!0,r.maxCubemapSize):Se[K]=de?S.image[K].image:S.image[K],Se[K]=We(S,Se[K]);const Ne=Se[0],De=s.convert(S.format,S.colorSpace),U=s.convert(S.type),te=y(S.internalFormat,De,U,S.colorSpace),R=S.isVideoTexture!==!0,Y=$.__version===void 0||W===!0,Z=se.dataReady;let ie=T(S,Ne);ze(i.TEXTURE_CUBE_MAP,S);let j;if(we){R&&Y&&t.texStorage2D(i.TEXTURE_CUBE_MAP,ie,te,Ne.width,Ne.height);for(let K=0;K<6;K++){j=Se[K].mipmaps;for(let _e=0;_e<j.length;_e++){const Ue=j[_e];S.format!==1023?De!==null?R?Z&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,_e,0,0,Ue.width,Ue.height,De,Ue.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,_e,te,Ue.width,Ue.height,0,Ue.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):R?Z&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,_e,0,0,Ue.width,Ue.height,De,U,Ue.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,_e,te,Ue.width,Ue.height,0,De,U,Ue.data)}}}else{if(j=S.mipmaps,R&&Y){j.length>0&&ie++;const K=Ve(Se[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,ie,te,K.width,K.height)}for(let K=0;K<6;K++)if(de){R?Z&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,0,0,Se[K].width,Se[K].height,De,U,Se[K].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,te,Se[K].width,Se[K].height,0,De,U,Se[K].data);for(let _e=0;_e<j.length;_e++){const Oe=j[_e].image[K].image;R?Z&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,_e+1,0,0,Oe.width,Oe.height,De,U,Oe.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,_e+1,te,Oe.width,Oe.height,0,De,U,Oe.data)}}else{R?Z&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,0,0,De,U,Se[K]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,te,De,U,Se[K]);for(let _e=0;_e<j.length;_e++){const Ue=j[_e];R?Z&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,_e+1,0,0,De,U,Ue.image[K]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,_e+1,te,De,U,Ue.image[K])}}}p(S)&&f(i.TEXTURE_CUBE_MAP),$.__version=se.version,S.onUpdate&&S.onUpdate(S)}b.__version=S.version}function xe(b,S,k,W,se,$){const Re=s.convert(k.format,k.colorSpace),he=s.convert(k.type),be=y(k.internalFormat,Re,he,k.colorSpace),we=n.get(S),de=n.get(k);if(de.__renderTarget=S,!we.__hasExternalTextures){const Se=Math.max(1,S.width>>$),Ne=Math.max(1,S.height>>$);se===i.TEXTURE_3D||se===i.TEXTURE_2D_ARRAY?t.texImage3D(se,$,be,Se,Ne,S.depth,0,Re,he,null):t.texImage2D(se,$,be,Se,Ne,0,Re,he,null)}t.bindFramebuffer(i.FRAMEBUFFER,b),ce(S)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,W,se,de.__webglTexture,0,me(S)):(se===i.TEXTURE_2D||se>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&se<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,W,se,de.__webglTexture,$),t.bindFramebuffer(i.FRAMEBUFFER,null)}function Le(b,S,k){if(i.bindRenderbuffer(i.RENDERBUFFER,b),S.depthBuffer){const W=S.depthTexture,se=W&&W.isDepthTexture?W.type:null,$=v(S.stencilBuffer,se),Re=S.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,he=me(S);ce(S)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,he,$,S.width,S.height):k?i.renderbufferStorageMultisample(i.RENDERBUFFER,he,$,S.width,S.height):i.renderbufferStorage(i.RENDERBUFFER,$,S.width,S.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Re,i.RENDERBUFFER,b)}else{const W=S.textures;for(let se=0;se<W.length;se++){const $=W[se],Re=s.convert($.format,$.colorSpace),he=s.convert($.type),be=y($.internalFormat,Re,he,$.colorSpace),we=me(S);k&&ce(S)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,we,be,S.width,S.height):ce(S)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,we,be,S.width,S.height):i.renderbufferStorage(i.RENDERBUFFER,be,S.width,S.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Ae(b,S){if(S&&S.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,b),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const W=n.get(S.depthTexture);W.__renderTarget=S,(!W.__webglTexture||S.depthTexture.image.width!==S.width||S.depthTexture.image.height!==S.height)&&(S.depthTexture.image.width=S.width,S.depthTexture.image.height=S.height,S.depthTexture.needsUpdate=!0),q(S.depthTexture,0);const se=W.__webglTexture,$=me(S);if(S.depthTexture.format===1026)ce(S)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,se,0,$):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,se,0);else if(S.depthTexture.format===1027)ce(S)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,se,0,$):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,se,0);else throw new Error("Unknown depthTexture format")}function qe(b){const S=n.get(b),k=b.isWebGLCubeRenderTarget===!0;if(S.__boundDepthTexture!==b.depthTexture){const W=b.depthTexture;if(S.__depthDisposeCallback&&S.__depthDisposeCallback(),W){const se=()=>{delete S.__boundDepthTexture,delete S.__depthDisposeCallback,W.removeEventListener("dispose",se)};W.addEventListener("dispose",se),S.__depthDisposeCallback=se}S.__boundDepthTexture=W}if(b.depthTexture&&!S.__autoAllocateDepthBuffer){if(k)throw new Error("target.depthTexture not supported in Cube render targets");const W=b.texture.mipmaps;W&&W.length>0?Ae(S.__webglFramebuffer[0],b):Ae(S.__webglFramebuffer,b)}else if(k){S.__webglDepthbuffer=[];for(let W=0;W<6;W++)if(t.bindFramebuffer(i.FRAMEBUFFER,S.__webglFramebuffer[W]),S.__webglDepthbuffer[W]===void 0)S.__webglDepthbuffer[W]=i.createRenderbuffer(),Le(S.__webglDepthbuffer[W],b,!1);else{const se=b.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,$=S.__webglDepthbuffer[W];i.bindRenderbuffer(i.RENDERBUFFER,$),i.framebufferRenderbuffer(i.FRAMEBUFFER,se,i.RENDERBUFFER,$)}}else{const W=b.texture.mipmaps;if(W&&W.length>0?t.bindFramebuffer(i.FRAMEBUFFER,S.__webglFramebuffer[0]):t.bindFramebuffer(i.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer===void 0)S.__webglDepthbuffer=i.createRenderbuffer(),Le(S.__webglDepthbuffer,b,!1);else{const se=b.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,$=S.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,$),i.framebufferRenderbuffer(i.FRAMEBUFFER,se,i.RENDERBUFFER,$)}}t.bindFramebuffer(i.FRAMEBUFFER,null)}function it(b,S,k){const W=n.get(b);S!==void 0&&xe(W.__webglFramebuffer,b,b.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),k!==void 0&&qe(b)}function L(b){const S=b.texture,k=n.get(b),W=n.get(S);b.addEventListener("dispose",P);const se=b.textures,$=b.isWebGLCubeRenderTarget===!0,Re=se.length>1;if(Re||(W.__webglTexture===void 0&&(W.__webglTexture=i.createTexture()),W.__version=S.version,a.memory.textures++),$){k.__webglFramebuffer=[];for(let he=0;he<6;he++)if(S.mipmaps&&S.mipmaps.length>0){k.__webglFramebuffer[he]=[];for(let be=0;be<S.mipmaps.length;be++)k.__webglFramebuffer[he][be]=i.createFramebuffer()}else k.__webglFramebuffer[he]=i.createFramebuffer()}else{if(S.mipmaps&&S.mipmaps.length>0){k.__webglFramebuffer=[];for(let he=0;he<S.mipmaps.length;he++)k.__webglFramebuffer[he]=i.createFramebuffer()}else k.__webglFramebuffer=i.createFramebuffer();if(Re)for(let he=0,be=se.length;he<be;he++){const we=n.get(se[he]);we.__webglTexture===void 0&&(we.__webglTexture=i.createTexture(),a.memory.textures++)}if(b.samples>0&&ce(b)===!1){k.__webglMultisampledFramebuffer=i.createFramebuffer(),k.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,k.__webglMultisampledFramebuffer);for(let he=0;he<se.length;he++){const be=se[he];k.__webglColorRenderbuffer[he]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,k.__webglColorRenderbuffer[he]);const we=s.convert(be.format,be.colorSpace),de=s.convert(be.type),Se=y(be.internalFormat,we,de,be.colorSpace,b.isXRRenderTarget===!0),Ne=me(b);i.renderbufferStorageMultisample(i.RENDERBUFFER,Ne,Se,b.width,b.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+he,i.RENDERBUFFER,k.__webglColorRenderbuffer[he])}i.bindRenderbuffer(i.RENDERBUFFER,null),b.depthBuffer&&(k.__webglDepthRenderbuffer=i.createRenderbuffer(),Le(k.__webglDepthRenderbuffer,b,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if($){t.bindTexture(i.TEXTURE_CUBE_MAP,W.__webglTexture),ze(i.TEXTURE_CUBE_MAP,S);for(let he=0;he<6;he++)if(S.mipmaps&&S.mipmaps.length>0)for(let be=0;be<S.mipmaps.length;be++)xe(k.__webglFramebuffer[he][be],b,S,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+he,be);else xe(k.__webglFramebuffer[he],b,S,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+he,0);p(S)&&f(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Re){for(let he=0,be=se.length;he<be;he++){const we=se[he],de=n.get(we);let Se=i.TEXTURE_2D;(b.isWebGL3DRenderTarget||b.isWebGLArrayRenderTarget)&&(Se=b.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(Se,de.__webglTexture),ze(Se,we),xe(k.__webglFramebuffer,b,we,i.COLOR_ATTACHMENT0+he,Se,0),p(we)&&f(Se)}t.unbindTexture()}else{let he=i.TEXTURE_2D;if((b.isWebGL3DRenderTarget||b.isWebGLArrayRenderTarget)&&(he=b.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(he,W.__webglTexture),ze(he,S),S.mipmaps&&S.mipmaps.length>0)for(let be=0;be<S.mipmaps.length;be++)xe(k.__webglFramebuffer[be],b,S,i.COLOR_ATTACHMENT0,he,be);else xe(k.__webglFramebuffer,b,S,i.COLOR_ATTACHMENT0,he,0);p(S)&&f(he),t.unbindTexture()}b.depthBuffer&&qe(b)}function oe(b){const S=b.textures;for(let k=0,W=S.length;k<W;k++){const se=S[k];if(p(se)){const $=w(b),Re=n.get(se).__webglTexture;t.bindTexture($,Re),f($),t.unbindTexture()}}}const ne=[],ee=[];function J(b){if(b.samples>0){if(ce(b)===!1){const S=b.textures,k=b.width,W=b.height;let se=i.COLOR_BUFFER_BIT;const $=b.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Re=n.get(b),he=S.length>1;if(he)for(let we=0;we<S.length;we++)t.bindFramebuffer(i.FRAMEBUFFER,Re.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+we,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,Re.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+we,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,Re.__webglMultisampledFramebuffer);const be=b.texture.mipmaps;be&&be.length>0?t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Re.__webglFramebuffer[0]):t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Re.__webglFramebuffer);for(let we=0;we<S.length;we++){if(b.resolveDepthBuffer&&(b.depthBuffer&&(se|=i.DEPTH_BUFFER_BIT),b.stencilBuffer&&b.resolveStencilBuffer&&(se|=i.STENCIL_BUFFER_BIT)),he){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Re.__webglColorRenderbuffer[we]);const de=n.get(S[we]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,de,0)}i.blitFramebuffer(0,0,k,W,0,0,k,W,se,i.NEAREST),l===!0&&(ne.length=0,ee.length=0,ne.push(i.COLOR_ATTACHMENT0+we),b.depthBuffer&&b.resolveDepthBuffer===!1&&(ne.push($),ee.push($),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,ee)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,ne))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),he)for(let we=0;we<S.length;we++){t.bindFramebuffer(i.FRAMEBUFFER,Re.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+we,i.RENDERBUFFER,Re.__webglColorRenderbuffer[we]);const de=n.get(S[we]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,Re.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+we,i.TEXTURE_2D,de,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Re.__webglMultisampledFramebuffer)}else if(b.depthBuffer&&b.resolveDepthBuffer===!1&&l){const S=b.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[S])}}}function me(b){return Math.min(r.maxSamples,b.samples)}function ce(b){const S=n.get(b);return b.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function pe(b){const S=a.render.frame;d.get(b)!==S&&(d.set(b,S),b.update())}function We(b,S){const k=b.colorSpace,W=b.format,se=b.type;return b.isCompressedTexture===!0||b.isVideoTexture===!0||k!==vi&&k!==""&&(nt.getTransfer(k)===at?(W!==1023||se!==1009)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",k)),S}function Ve(b){return typeof HTMLImageElement<"u"&&b instanceof HTMLImageElement?(c.width=b.naturalWidth||b.width,c.height=b.naturalHeight||b.height):typeof VideoFrame<"u"&&b instanceof VideoFrame?(c.width=b.displayWidth,c.height=b.displayHeight):(c.width=b.width,c.height=b.height),c}this.allocateTextureUnit=O,this.resetTextureUnits=F,this.setTexture2D=q,this.setTexture2DArray=H,this.setTexture3D=re,this.setTextureCube=X,this.rebindTextures=it,this.setupRenderTarget=L,this.updateRenderTargetMipmap=oe,this.updateMultisampleRenderTarget=J,this.setupDepthRenderbuffer=qe,this.setupFrameBufferTexture=xe,this.useMultisampledRTT=ce}function Tp(i,e){function t(n,r=""){let s;const a=nt.getTransfer(r);if(n===1009)return i.UNSIGNED_BYTE;if(n===1017)return i.UNSIGNED_SHORT_4_4_4_4;if(n===1018)return i.UNSIGNED_SHORT_5_5_5_1;if(n===35902)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===35899)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===1010)return i.BYTE;if(n===1011)return i.SHORT;if(n===1012)return i.UNSIGNED_SHORT;if(n===1013)return i.INT;if(n===1014)return i.UNSIGNED_INT;if(n===1015)return i.FLOAT;if(n===1016)return i.HALF_FLOAT;if(n===1021)return i.ALPHA;if(n===1022)return i.RGB;if(n===1023)return i.RGBA;if(n===1026)return i.DEPTH_COMPONENT;if(n===1027)return i.DEPTH_STENCIL;if(n===1028)return i.RED;if(n===1029)return i.RED_INTEGER;if(n===1030)return i.RG;if(n===1031)return i.RG_INTEGER;if(n===1033)return i.RGBA_INTEGER;if(n===33776||n===33777||n===33778||n===33779)if(a===at)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===33776)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===33777)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===33778)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===33779)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===33776)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===33777)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===33778)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===33779)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===35840||n===35841||n===35842||n===35843)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===35840)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===35841)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===35842)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===35843)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===36196||n===37492||n===37496)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(n===36196||n===37492)return a===at?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===37496)return a===at?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===37808||n===37809||n===37810||n===37811||n===37812||n===37813||n===37814||n===37815||n===37816||n===37817||n===37818||n===37819||n===37820||n===37821)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(n===37808)return a===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===37809)return a===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===37810)return a===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===37811)return a===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===37812)return a===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===37813)return a===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===37814)return a===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===37815)return a===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===37816)return a===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===37817)return a===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===37818)return a===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===37819)return a===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===37820)return a===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===37821)return a===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===36492||n===36494||n===36495)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(n===36492)return a===at?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===36494)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===36495)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===36283||n===36284||n===36285||n===36286)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(n===36283)return s.COMPRESSED_RED_RGTC1_EXT;if(n===36284)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===36285)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===36286)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===1020?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}const Ap=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,bp=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class wp{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const n=new Ro(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new Rn({vertexShader:Ap,fragmentShader:bp,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new ft(new Zi(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Cp extends Si{constructor(e,t){super();const n=this;let r=null,s=1,a=null,o="local-floor",l=1,c=null,d=null,u=null,h=null,m=null,_=null;const g=typeof XRWebGLBinding<"u",p=new wp,f={},w=t.getContextAttributes();let y=null,v=null;const T=[],C=[],P=new ve;let A=null;const M=new Xt;M.viewport=new ct;const x=new Xt;x.viewport=new ct;const D=[M,x],F=new $l;let O=null,z=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Q){let ae=T[Q];return ae===void 0&&(ae=new ls,T[Q]=ae),ae.getTargetRaySpace()},this.getControllerGrip=function(Q){let ae=T[Q];return ae===void 0&&(ae=new ls,T[Q]=ae),ae.getGripSpace()},this.getHand=function(Q){let ae=T[Q];return ae===void 0&&(ae=new ls,T[Q]=ae),ae.getHandSpace()};function q(Q){const ae=C.indexOf(Q.inputSource);if(ae===-1)return;const xe=T[ae];xe!==void 0&&(xe.update(Q.inputSource,Q.frame,c||a),xe.dispatchEvent({type:Q.type,data:Q.inputSource}))}function H(){r.removeEventListener("select",q),r.removeEventListener("selectstart",q),r.removeEventListener("selectend",q),r.removeEventListener("squeeze",q),r.removeEventListener("squeezestart",q),r.removeEventListener("squeezeend",q),r.removeEventListener("end",H),r.removeEventListener("inputsourceschange",re);for(let Q=0;Q<T.length;Q++){const ae=C[Q];ae!==null&&(C[Q]=null,T[Q].disconnect(ae))}O=null,z=null,p.reset();for(const Q in f)delete f[Q];e.setRenderTarget(y),m=null,h=null,u=null,r=null,v=null,Ie.stop(),n.isPresenting=!1,e.setPixelRatio(A),e.setSize(P.width,P.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Q){s=Q,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Q){o=Q,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(Q){c=Q},this.getBaseLayer=function(){return h!==null?h:m},this.getBinding=function(){return u===null&&g&&(u=new XRWebGLBinding(r,t)),u},this.getFrame=function(){return _},this.getSession=function(){return r},this.setSession=async function(Q){if(r=Q,r!==null){if(y=e.getRenderTarget(),r.addEventListener("select",q),r.addEventListener("selectstart",q),r.addEventListener("selectend",q),r.addEventListener("squeeze",q),r.addEventListener("squeezestart",q),r.addEventListener("squeezeend",q),r.addEventListener("end",H),r.addEventListener("inputsourceschange",re),w.xrCompatible!==!0&&await t.makeXRCompatible(),A=e.getPixelRatio(),e.getSize(P),g&&"createProjectionLayer"in XRWebGLBinding.prototype){let xe=null,Le=null,Ae=null;w.depth&&(Ae=w.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,xe=w.stencil?1027:1026,Le=w.stencil?1020:1014);const qe={colorFormat:t.RGBA8,depthFormat:Ae,scaleFactor:s};u=this.getBinding(),h=u.createProjectionLayer(qe),r.updateRenderState({layers:[h]}),e.setPixelRatio(1),e.setSize(h.textureWidth,h.textureHeight,!1),v=new Hn(h.textureWidth,h.textureHeight,{format:1023,type:1009,depthTexture:new Co(h.textureWidth,h.textureHeight,Le,void 0,void 0,void 0,void 0,void 0,void 0,xe),stencilBuffer:w.stencil,colorSpace:e.outputColorSpace,samples:w.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1})}else{const xe={antialias:w.antialias,alpha:!0,depth:w.depth,stencil:w.stencil,framebufferScaleFactor:s};m=new XRWebGLLayer(r,t,xe),r.updateRenderState({baseLayer:m}),e.setPixelRatio(1),e.setSize(m.framebufferWidth,m.framebufferHeight,!1),v=new Hn(m.framebufferWidth,m.framebufferHeight,{format:1023,type:1009,colorSpace:e.outputColorSpace,stencilBuffer:w.stencil,resolveDepthBuffer:m.ignoreDepthValues===!1,resolveStencilBuffer:m.ignoreDepthValues===!1})}v.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await r.requestReferenceSpace(o),Ie.setContext(r),Ie.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return p.getDepthTexture()};function re(Q){for(let ae=0;ae<Q.removed.length;ae++){const xe=Q.removed[ae],Le=C.indexOf(xe);Le>=0&&(C[Le]=null,T[Le].disconnect(xe))}for(let ae=0;ae<Q.added.length;ae++){const xe=Q.added[ae];let Le=C.indexOf(xe);if(Le===-1){for(let qe=0;qe<T.length;qe++)if(qe>=C.length){C.push(xe),Le=qe;break}else if(C[qe]===null){C[qe]=xe,Le=qe;break}if(Le===-1)break}const Ae=T[Le];Ae&&Ae.connect(xe)}}const X=new I,fe=new I;function ge(Q,ae,xe){X.setFromMatrixPosition(ae.matrixWorld),fe.setFromMatrixPosition(xe.matrixWorld);const Le=X.distanceTo(fe),Ae=ae.projectionMatrix.elements,qe=xe.projectionMatrix.elements,it=Ae[14]/(Ae[10]-1),L=Ae[14]/(Ae[10]+1),oe=(Ae[9]+1)/Ae[5],ne=(Ae[9]-1)/Ae[5],ee=(Ae[8]-1)/Ae[0],J=(qe[8]+1)/qe[0],me=it*ee,ce=it*J,pe=Le/(-ee+J),We=pe*-ee;if(ae.matrixWorld.decompose(Q.position,Q.quaternion,Q.scale),Q.translateX(We),Q.translateZ(pe),Q.matrixWorld.compose(Q.position,Q.quaternion,Q.scale),Q.matrixWorldInverse.copy(Q.matrixWorld).invert(),Ae[10]===-1)Q.projectionMatrix.copy(ae.projectionMatrix),Q.projectionMatrixInverse.copy(ae.projectionMatrixInverse);else{const Ve=it+pe,b=L+pe,S=me-We,k=ce+(Le-We),W=oe*L/b*Ve,se=ne*L/b*Ve;Q.projectionMatrix.makePerspective(S,k,W,se,Ve,b),Q.projectionMatrixInverse.copy(Q.projectionMatrix).invert()}}function Ee(Q,ae){ae===null?Q.matrixWorld.copy(Q.matrix):Q.matrixWorld.multiplyMatrices(ae.matrixWorld,Q.matrix),Q.matrixWorldInverse.copy(Q.matrixWorld).invert()}this.updateCamera=function(Q){if(r===null)return;let ae=Q.near,xe=Q.far;p.texture!==null&&(p.depthNear>0&&(ae=p.depthNear),p.depthFar>0&&(xe=p.depthFar)),F.near=x.near=M.near=ae,F.far=x.far=M.far=xe,(O!==F.near||z!==F.far)&&(r.updateRenderState({depthNear:F.near,depthFar:F.far}),O=F.near,z=F.far),F.layers.mask=Q.layers.mask|6,M.layers.mask=F.layers.mask&3,x.layers.mask=F.layers.mask&5;const Le=Q.parent,Ae=F.cameras;Ee(F,Le);for(let qe=0;qe<Ae.length;qe++)Ee(Ae[qe],Le);Ae.length===2?ge(F,M,x):F.projectionMatrix.copy(M.projectionMatrix),ze(Q,F,Le)};function ze(Q,ae,xe){xe===null?Q.matrix.copy(ae.matrixWorld):(Q.matrix.copy(xe.matrixWorld),Q.matrix.invert(),Q.matrix.multiply(ae.matrixWorld)),Q.matrix.decompose(Q.position,Q.quaternion,Q.scale),Q.updateMatrixWorld(!0),Q.projectionMatrix.copy(ae.projectionMatrix),Q.projectionMatrixInverse.copy(ae.projectionMatrixInverse),Q.isPerspectiveCamera&&(Q.fov=Gi*2*Math.atan(1/Q.projectionMatrix.elements[5]),Q.zoom=1)}this.getCamera=function(){return F},this.getFoveation=function(){if(!(h===null&&m===null))return l},this.setFoveation=function(Q){l=Q,h!==null&&(h.fixedFoveation=Q),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=Q)},this.hasDepthSensing=function(){return p.texture!==null},this.getDepthSensingMesh=function(){return p.getMesh(F)},this.getCameraTexture=function(Q){return f[Q]};let Ze=null;function et(Q,ae){if(d=ae.getViewerPose(c||a),_=ae,d!==null){const xe=d.views;m!==null&&(e.setRenderTargetFramebuffer(v,m.framebuffer),e.setRenderTarget(v));let Le=!1;xe.length!==F.cameras.length&&(F.cameras.length=0,Le=!0);for(let L=0;L<xe.length;L++){const oe=xe[L];let ne=null;if(m!==null)ne=m.getViewport(oe);else{const J=u.getViewSubImage(h,oe);ne=J.viewport,L===0&&(e.setRenderTargetTextures(v,J.colorTexture,J.depthStencilTexture),e.setRenderTarget(v))}let ee=D[L];ee===void 0&&(ee=new Xt,ee.layers.enable(L),ee.viewport=new ct,D[L]=ee),ee.matrix.fromArray(oe.transform.matrix),ee.matrix.decompose(ee.position,ee.quaternion,ee.scale),ee.projectionMatrix.fromArray(oe.projectionMatrix),ee.projectionMatrixInverse.copy(ee.projectionMatrix).invert(),ee.viewport.set(ne.x,ne.y,ne.width,ne.height),L===0&&(F.matrix.copy(ee.matrix),F.matrix.decompose(F.position,F.quaternion,F.scale)),Le===!0&&F.cameras.push(ee)}const Ae=r.enabledFeatures;if(Ae&&Ae.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&g){u=n.getBinding();const L=u.getDepthInformation(xe[0]);L&&L.isValid&&L.texture&&p.init(L,r.renderState)}if(Ae&&Ae.includes("camera-access")&&g){e.state.unbindTexture(),u=n.getBinding();for(let L=0;L<xe.length;L++){const oe=xe[L].camera;if(oe){let ne=f[oe];ne||(ne=new Ro,f[oe]=ne);const ee=u.getCameraImage(oe);ne.sourceTexture=ee}}}}for(let xe=0;xe<T.length;xe++){const Le=C[xe],Ae=T[xe];Le!==null&&Ae!==void 0&&Ae.update(Le,ae,c||a)}Ze&&Ze(Q,ae),ae.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:ae}),_=null}const Ie=new Vo;Ie.setAnimationLoop(et),this.setAnimationLoop=function(Q){Ze=Q},this.dispose=function(){}}}const kn=new an,Rp=new lt;function Pp(i,e){function t(p,f){p.matrixAutoUpdate===!0&&p.updateMatrix(),f.value.copy(p.matrix)}function n(p,f){f.color.getRGB(p.fogColor.value,Eo(i)),f.isFog?(p.fogNear.value=f.near,p.fogFar.value=f.far):f.isFogExp2&&(p.fogDensity.value=f.density)}function r(p,f,w,y,v){f.isMeshBasicMaterial||f.isMeshLambertMaterial?s(p,f):f.isMeshToonMaterial?(s(p,f),u(p,f)):f.isMeshPhongMaterial?(s(p,f),d(p,f)):f.isMeshStandardMaterial?(s(p,f),h(p,f),f.isMeshPhysicalMaterial&&m(p,f,v)):f.isMeshMatcapMaterial?(s(p,f),_(p,f)):f.isMeshDepthMaterial?s(p,f):f.isMeshDistanceMaterial?(s(p,f),g(p,f)):f.isMeshNormalMaterial?s(p,f):f.isLineBasicMaterial?(a(p,f),f.isLineDashedMaterial&&o(p,f)):f.isPointsMaterial?l(p,f,w,y):f.isSpriteMaterial?c(p,f):f.isShadowMaterial?(p.color.value.copy(f.color),p.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function s(p,f){p.opacity.value=f.opacity,f.color&&p.diffuse.value.copy(f.color),f.emissive&&p.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(p.map.value=f.map,t(f.map,p.mapTransform)),f.alphaMap&&(p.alphaMap.value=f.alphaMap,t(f.alphaMap,p.alphaMapTransform)),f.bumpMap&&(p.bumpMap.value=f.bumpMap,t(f.bumpMap,p.bumpMapTransform),p.bumpScale.value=f.bumpScale,f.side===1&&(p.bumpScale.value*=-1)),f.normalMap&&(p.normalMap.value=f.normalMap,t(f.normalMap,p.normalMapTransform),p.normalScale.value.copy(f.normalScale),f.side===1&&p.normalScale.value.negate()),f.displacementMap&&(p.displacementMap.value=f.displacementMap,t(f.displacementMap,p.displacementMapTransform),p.displacementScale.value=f.displacementScale,p.displacementBias.value=f.displacementBias),f.emissiveMap&&(p.emissiveMap.value=f.emissiveMap,t(f.emissiveMap,p.emissiveMapTransform)),f.specularMap&&(p.specularMap.value=f.specularMap,t(f.specularMap,p.specularMapTransform)),f.alphaTest>0&&(p.alphaTest.value=f.alphaTest);const w=e.get(f),y=w.envMap,v=w.envMapRotation;y&&(p.envMap.value=y,kn.copy(v),kn.x*=-1,kn.y*=-1,kn.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(kn.y*=-1,kn.z*=-1),p.envMapRotation.value.setFromMatrix4(Rp.makeRotationFromEuler(kn)),p.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=f.reflectivity,p.ior.value=f.ior,p.refractionRatio.value=f.refractionRatio),f.lightMap&&(p.lightMap.value=f.lightMap,p.lightMapIntensity.value=f.lightMapIntensity,t(f.lightMap,p.lightMapTransform)),f.aoMap&&(p.aoMap.value=f.aoMap,p.aoMapIntensity.value=f.aoMapIntensity,t(f.aoMap,p.aoMapTransform))}function a(p,f){p.diffuse.value.copy(f.color),p.opacity.value=f.opacity,f.map&&(p.map.value=f.map,t(f.map,p.mapTransform))}function o(p,f){p.dashSize.value=f.dashSize,p.totalSize.value=f.dashSize+f.gapSize,p.scale.value=f.scale}function l(p,f,w,y){p.diffuse.value.copy(f.color),p.opacity.value=f.opacity,p.size.value=f.size*w,p.scale.value=y*.5,f.map&&(p.map.value=f.map,t(f.map,p.uvTransform)),f.alphaMap&&(p.alphaMap.value=f.alphaMap,t(f.alphaMap,p.alphaMapTransform)),f.alphaTest>0&&(p.alphaTest.value=f.alphaTest)}function c(p,f){p.diffuse.value.copy(f.color),p.opacity.value=f.opacity,p.rotation.value=f.rotation,f.map&&(p.map.value=f.map,t(f.map,p.mapTransform)),f.alphaMap&&(p.alphaMap.value=f.alphaMap,t(f.alphaMap,p.alphaMapTransform)),f.alphaTest>0&&(p.alphaTest.value=f.alphaTest)}function d(p,f){p.specular.value.copy(f.specular),p.shininess.value=Math.max(f.shininess,1e-4)}function u(p,f){f.gradientMap&&(p.gradientMap.value=f.gradientMap)}function h(p,f){p.metalness.value=f.metalness,f.metalnessMap&&(p.metalnessMap.value=f.metalnessMap,t(f.metalnessMap,p.metalnessMapTransform)),p.roughness.value=f.roughness,f.roughnessMap&&(p.roughnessMap.value=f.roughnessMap,t(f.roughnessMap,p.roughnessMapTransform)),f.envMap&&(p.envMapIntensity.value=f.envMapIntensity)}function m(p,f,w){p.ior.value=f.ior,f.sheen>0&&(p.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),p.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(p.sheenColorMap.value=f.sheenColorMap,t(f.sheenColorMap,p.sheenColorMapTransform)),f.sheenRoughnessMap&&(p.sheenRoughnessMap.value=f.sheenRoughnessMap,t(f.sheenRoughnessMap,p.sheenRoughnessMapTransform))),f.clearcoat>0&&(p.clearcoat.value=f.clearcoat,p.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(p.clearcoatMap.value=f.clearcoatMap,t(f.clearcoatMap,p.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,t(f.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(p.clearcoatNormalMap.value=f.clearcoatNormalMap,t(f.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===1&&p.clearcoatNormalScale.value.negate())),f.dispersion>0&&(p.dispersion.value=f.dispersion),f.iridescence>0&&(p.iridescence.value=f.iridescence,p.iridescenceIOR.value=f.iridescenceIOR,p.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(p.iridescenceMap.value=f.iridescenceMap,t(f.iridescenceMap,p.iridescenceMapTransform)),f.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=f.iridescenceThicknessMap,t(f.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),f.transmission>0&&(p.transmission.value=f.transmission,p.transmissionSamplerMap.value=w.texture,p.transmissionSamplerSize.value.set(w.width,w.height),f.transmissionMap&&(p.transmissionMap.value=f.transmissionMap,t(f.transmissionMap,p.transmissionMapTransform)),p.thickness.value=f.thickness,f.thicknessMap&&(p.thicknessMap.value=f.thicknessMap,t(f.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=f.attenuationDistance,p.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(p.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(p.anisotropyMap.value=f.anisotropyMap,t(f.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=f.specularIntensity,p.specularColor.value.copy(f.specularColor),f.specularColorMap&&(p.specularColorMap.value=f.specularColorMap,t(f.specularColorMap,p.specularColorMapTransform)),f.specularIntensityMap&&(p.specularIntensityMap.value=f.specularIntensityMap,t(f.specularIntensityMap,p.specularIntensityMapTransform))}function _(p,f){f.matcap&&(p.matcap.value=f.matcap)}function g(p,f){const w=e.get(f).light;p.referencePosition.value.setFromMatrixPosition(w.matrixWorld),p.nearDistance.value=w.shadow.camera.near,p.farDistance.value=w.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:r}}function Lp(i,e,t,n){let r={},s={},a=[];const o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(w,y){const v=y.program;n.uniformBlockBinding(w,v)}function c(w,y){let v=r[w.id];v===void 0&&(_(w),v=d(w),r[w.id]=v,w.addEventListener("dispose",p));const T=y.program;n.updateUBOMapping(w,T);const C=e.render.frame;s[w.id]!==C&&(h(w),s[w.id]=C)}function d(w){const y=u();w.__bindingPointIndex=y;const v=i.createBuffer(),T=w.__size,C=w.usage;return i.bindBuffer(i.UNIFORM_BUFFER,v),i.bufferData(i.UNIFORM_BUFFER,T,C),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,y,v),v}function u(){for(let w=0;w<o;w++)if(a.indexOf(w)===-1)return a.push(w),w;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(w){const y=r[w.id],v=w.uniforms,T=w.__cache;i.bindBuffer(i.UNIFORM_BUFFER,y);for(let C=0,P=v.length;C<P;C++){const A=Array.isArray(v[C])?v[C]:[v[C]];for(let M=0,x=A.length;M<x;M++){const D=A[M];if(m(D,C,M,T)===!0){const F=D.__offset,O=Array.isArray(D.value)?D.value:[D.value];let z=0;for(let q=0;q<O.length;q++){const H=O[q],re=g(H);typeof H=="number"||typeof H=="boolean"?(D.__data[0]=H,i.bufferSubData(i.UNIFORM_BUFFER,F+z,D.__data)):H.isMatrix3?(D.__data[0]=H.elements[0],D.__data[1]=H.elements[1],D.__data[2]=H.elements[2],D.__data[3]=0,D.__data[4]=H.elements[3],D.__data[5]=H.elements[4],D.__data[6]=H.elements[5],D.__data[7]=0,D.__data[8]=H.elements[6],D.__data[9]=H.elements[7],D.__data[10]=H.elements[8],D.__data[11]=0):(H.toArray(D.__data,z),z+=re.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,F,D.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function m(w,y,v,T){const C=w.value,P=y+"_"+v;if(T[P]===void 0)return typeof C=="number"||typeof C=="boolean"?T[P]=C:T[P]=C.clone(),!0;{const A=T[P];if(typeof C=="number"||typeof C=="boolean"){if(A!==C)return T[P]=C,!0}else if(A.equals(C)===!1)return A.copy(C),!0}return!1}function _(w){const y=w.uniforms;let v=0;const T=16;for(let P=0,A=y.length;P<A;P++){const M=Array.isArray(y[P])?y[P]:[y[P]];for(let x=0,D=M.length;x<D;x++){const F=M[x],O=Array.isArray(F.value)?F.value:[F.value];for(let z=0,q=O.length;z<q;z++){const H=O[z],re=g(H),X=v%T,fe=X%re.boundary,ge=X+fe;v+=fe,ge!==0&&T-ge<re.storage&&(v+=T-ge),F.__data=new Float32Array(re.storage/Float32Array.BYTES_PER_ELEMENT),F.__offset=v,v+=re.storage}}}const C=v%T;return C>0&&(v+=T-C),w.__size=v,w.__cache={},this}function g(w){const y={boundary:0,storage:0};return typeof w=="number"||typeof w=="boolean"?(y.boundary=4,y.storage=4):w.isVector2?(y.boundary=8,y.storage=8):w.isVector3||w.isColor?(y.boundary=16,y.storage=12):w.isVector4?(y.boundary=16,y.storage=16):w.isMatrix3?(y.boundary=48,y.storage=48):w.isMatrix4?(y.boundary=64,y.storage=64):w.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",w),y}function p(w){const y=w.target;y.removeEventListener("dispose",p);const v=a.indexOf(y.__bindingPointIndex);a.splice(v,1),i.deleteBuffer(r[y.id]),delete r[y.id],delete s[y.id]}function f(){for(const w in r)i.deleteBuffer(r[w]);a=[],r={},s={}}return{bind:l,update:c,dispose:f}}class Dp{constructor(e={}){const{canvas:t=Tc(),context:n=null,depth:r=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:d="default",failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:h=!1}=e;this.isWebGLRenderer=!0;let m;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");m=n.getContextAttributes().alpha}else m=a;const _=new Uint32Array(4),g=new Int32Array(4);let p=null,f=null;const w=[],y=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=0,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const v=this;let T=!1;this._outputColorSpace=Ot;let C=0,P=0,A=null,M=-1,x=null;const D=new ct,F=new ct;let O=null;const z=new Ke(0);let q=0,H=t.width,re=t.height,X=1,fe=null,ge=null;const Ee=new ct(0,0,H,re),ze=new ct(0,0,H,re);let Ze=!1;const et=new Gs;let Ie=!1,Q=!1;const ae=new lt,xe=new I,Le=new ct,Ae={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let qe=!1;function it(){return A===null?X:1}let L=n;function oe(E,N){return t.getContext(E,N)}try{const E={alpha:!0,depth:r,stencil:s,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:d,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine","three.js r180"),t.addEventListener("webglcontextlost",Z,!1),t.addEventListener("webglcontextrestored",ie,!1),t.addEventListener("webglcontextcreationerror",j,!1),L===null){const N="webgl2";if(L=oe(N,E),L===null)throw oe(N)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(E){throw console.error("THREE.WebGLRenderer: "+E.message),E}let ne,ee,J,me,ce,pe,We,Ve,b,S,k,W,se,$,Re,he,be,we,de,Se,Ne,De,U,te;function R(){ne=new Gh(L),ne.init(),De=new Tp(L,ne),ee=new Uh(L,ne,e,De),J=new Mp(L,ne),ee.reversedDepthBuffer&&h&&J.buffers.depth.setReversed(!0),me=new qh(L),ce=new lp,pe=new Ep(L,ne,J,ce,ee,De,me),We=new Nh(v),Ve=new zh(v),b=new Kl(L),U=new Dh(L,b),S=new Vh(L,b,me,U),k=new Xh(L,S,b,me),de=new Wh(L,ee,pe),he=new Fh(ce),W=new cp(v,We,Ve,ne,ee,U,he),se=new Pp(v,ce),$=new up,Re=new _p(ne),we=new Lh(v,We,Ve,J,k,m,l),be=new yp(v,k,ee),te=new Lp(L,me,ee,J),Se=new Ih(L,ne,me),Ne=new Hh(L,ne,me),me.programs=W.programs,v.capabilities=ee,v.extensions=ne,v.properties=ce,v.renderLists=$,v.shadowMap=be,v.state=J,v.info=me}R();const Y=new Cp(v,L);this.xr=Y,this.getContext=function(){return L},this.getContextAttributes=function(){return L.getContextAttributes()},this.forceContextLoss=function(){const E=ne.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){const E=ne.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return X},this.setPixelRatio=function(E){E!==void 0&&(X=E,this.setSize(H,re,!1))},this.getSize=function(E){return E.set(H,re)},this.setSize=function(E,N,G=!0){if(Y.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}H=E,re=N,t.width=Math.floor(E*X),t.height=Math.floor(N*X),G===!0&&(t.style.width=E+"px",t.style.height=N+"px"),this.setViewport(0,0,E,N)},this.getDrawingBufferSize=function(E){return E.set(H*X,re*X).floor()},this.setDrawingBufferSize=function(E,N,G){H=E,re=N,X=G,t.width=Math.floor(E*G),t.height=Math.floor(N*G),this.setViewport(0,0,E,N)},this.getCurrentViewport=function(E){return E.copy(D)},this.getViewport=function(E){return E.copy(Ee)},this.setViewport=function(E,N,G,V){E.isVector4?Ee.set(E.x,E.y,E.z,E.w):Ee.set(E,N,G,V),J.viewport(D.copy(Ee).multiplyScalar(X).round())},this.getScissor=function(E){return E.copy(ze)},this.setScissor=function(E,N,G,V){E.isVector4?ze.set(E.x,E.y,E.z,E.w):ze.set(E,N,G,V),J.scissor(F.copy(ze).multiplyScalar(X).round())},this.getScissorTest=function(){return Ze},this.setScissorTest=function(E){J.setScissorTest(Ze=E)},this.setOpaqueSort=function(E){fe=E},this.setTransparentSort=function(E){ge=E},this.getClearColor=function(E){return E.copy(we.getClearColor())},this.setClearColor=function(){we.setClearColor(...arguments)},this.getClearAlpha=function(){return we.getClearAlpha()},this.setClearAlpha=function(){we.setClearAlpha(...arguments)},this.clear=function(E=!0,N=!0,G=!0){let V=0;if(E){let B=!1;if(A!==null){const ue=A.texture.format;B=ue===1033||ue===1031||ue===1029}if(B){const ue=A.texture.type,Me=ue===1009||ue===1014||ue===1012||ue===1020||ue===1017||ue===1018,Pe=we.getClearColor(),Te=we.getClearAlpha(),ke=Pe.r,He=Pe.g,Fe=Pe.b;Me?(_[0]=ke,_[1]=He,_[2]=Fe,_[3]=Te,L.clearBufferuiv(L.COLOR,0,_)):(g[0]=ke,g[1]=He,g[2]=Fe,g[3]=Te,L.clearBufferiv(L.COLOR,0,g))}else V|=L.COLOR_BUFFER_BIT}N&&(V|=L.DEPTH_BUFFER_BIT),G&&(V|=L.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),L.clear(V)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",Z,!1),t.removeEventListener("webglcontextrestored",ie,!1),t.removeEventListener("webglcontextcreationerror",j,!1),we.dispose(),$.dispose(),Re.dispose(),ce.dispose(),We.dispose(),Ve.dispose(),k.dispose(),U.dispose(),te.dispose(),W.dispose(),Y.dispose(),Y.removeEventListener("sessionstart",mt),Y.removeEventListener("sessionend",hn),Jt.stop()};function Z(E){E.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),T=!0}function ie(){console.log("THREE.WebGLRenderer: Context Restored."),T=!1;const E=me.autoReset,N=be.enabled,G=be.autoUpdate,V=be.needsUpdate,B=be.type;R(),me.autoReset=E,be.enabled=N,be.autoUpdate=G,be.needsUpdate=V,be.type=B}function j(E){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function K(E){const N=E.target;N.removeEventListener("dispose",K),_e(N)}function _e(E){Ue(E),ce.remove(E)}function Ue(E){const N=ce.get(E).programs;N!==void 0&&(N.forEach(function(G){W.releaseProgram(G)}),E.isShaderMaterial&&W.releaseShaderCache(E))}this.renderBufferDirect=function(E,N,G,V,B,ue){N===null&&(N=Ae);const Me=B.isMesh&&B.matrixWorld.determinant()<0,Pe=ec(E,N,G,V,B);J.setMaterial(V,Me);let Te=G.index,ke=1;if(V.wireframe===!0){if(Te=S.getWireframeAttribute(G),Te===void 0)return;ke=2}const He=G.drawRange,Fe=G.attributes.position;let Qe=He.start*ke,st=(He.start+He.count)*ke;ue!==null&&(Qe=Math.max(Qe,ue.start*ke),st=Math.min(st,(ue.start+ue.count)*ke)),Te!==null?(Qe=Math.max(Qe,0),st=Math.min(st,Te.count)):Fe!=null&&(Qe=Math.max(Qe,0),st=Math.min(st,Fe.count));const yt=st-Qe;if(yt<0||yt===1/0)return;U.setup(B,V,Pe,G,Te);let ht,dt=Se;if(Te!==null&&(ht=b.get(Te),dt=Ne,dt.setIndex(ht)),B.isMesh)V.wireframe===!0?(J.setLineWidth(V.wireframeLinewidth*it()),dt.setMode(L.LINES)):dt.setMode(L.TRIANGLES);else if(B.isLine){let Be=V.linewidth;Be===void 0&&(Be=1),J.setLineWidth(Be*it()),B.isLineSegments?dt.setMode(L.LINES):B.isLineLoop?dt.setMode(L.LINE_LOOP):dt.setMode(L.LINE_STRIP)}else B.isPoints?dt.setMode(L.POINTS):B.isSprite&&dt.setMode(L.TRIANGLES);if(B.isBatchedMesh)if(B._multiDrawInstances!==null)Hi("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),dt.renderMultiDrawInstances(B._multiDrawStarts,B._multiDrawCounts,B._multiDrawCount,B._multiDrawInstances);else if(ne.get("WEBGL_multi_draw"))dt.renderMultiDraw(B._multiDrawStarts,B._multiDrawCounts,B._multiDrawCount);else{const Be=B._multiDrawStarts,gt=B._multiDrawCounts,tt=B._multiDrawCount,kt=Te?b.get(Te).bytesPerElement:1,$n=ce.get(V).currentProgram.getUniforms();for(let zt=0;zt<tt;zt++)$n.setValue(L,"_gl_DrawID",zt),dt.render(Be[zt]/kt,gt[zt])}else if(B.isInstancedMesh)dt.renderInstances(Qe,yt,B.count);else if(G.isInstancedBufferGeometry){const Be=G._maxInstanceCount!==void 0?G._maxInstanceCount:1/0,gt=Math.min(G.instanceCount,Be);dt.renderInstances(Qe,yt,gt)}else dt.render(Qe,yt)};function Oe(E,N,G){E.transparent===!0&&E.side===2&&E.forceSinglePass===!1?(E.side=1,E.needsUpdate=!0,ji(E,N,G),E.side=0,E.needsUpdate=!0,ji(E,N,G),E.side=2):ji(E,N,G)}this.compile=function(E,N,G=null){G===null&&(G=E),f=Re.get(G),f.init(N),y.push(f),G.traverseVisible(function(B){B.isLight&&B.layers.test(N.layers)&&(f.pushLight(B),B.castShadow&&f.pushShadow(B))}),E!==G&&E.traverseVisible(function(B){B.isLight&&B.layers.test(N.layers)&&(f.pushLight(B),B.castShadow&&f.pushShadow(B))}),f.setupLights();const V=new Set;return E.traverse(function(B){if(!(B.isMesh||B.isPoints||B.isLine||B.isSprite))return;const ue=B.material;if(ue)if(Array.isArray(ue))for(let Me=0;Me<ue.length;Me++){const Pe=ue[Me];Oe(Pe,G,B),V.add(Pe)}else Oe(ue,G,B),V.add(ue)}),f=y.pop(),V},this.compileAsync=function(E,N,G=null){const V=this.compile(E,N,G);return new Promise(B=>{function ue(){if(V.forEach(function(Me){ce.get(Me).currentProgram.isReady()&&V.delete(Me)}),V.size===0){B(E);return}setTimeout(ue,10)}ne.get("KHR_parallel_shader_compile")!==null?ue():setTimeout(ue,10)})};let Xe=null;function Mt(E){Xe&&Xe(E)}function mt(){Jt.stop()}function hn(){Jt.start()}const Jt=new Vo;Jt.setAnimationLoop(Mt),typeof self<"u"&&Jt.setContext(self),this.setAnimationLoop=function(E){Xe=E,Y.setAnimationLoop(E),E===null?Jt.stop():Jt.start()},Y.addEventListener("sessionstart",mt),Y.addEventListener("sessionend",hn),this.render=function(E,N){if(N!==void 0&&N.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(T===!0)return;if(E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),N.parent===null&&N.matrixWorldAutoUpdate===!0&&N.updateMatrixWorld(),Y.enabled===!0&&Y.isPresenting===!0&&(Y.cameraAutoUpdate===!0&&Y.updateCamera(N),N=Y.getCamera()),E.isScene===!0&&E.onBeforeRender(v,E,N,A),f=Re.get(E,y.length),f.init(N),y.push(f),ae.multiplyMatrices(N.projectionMatrix,N.matrixWorldInverse),et.setFromProjectionMatrix(ae,2e3,N.reversedDepth),Q=this.localClippingEnabled,Ie=he.init(this.clippingPlanes,Q),p=$.get(E,w.length),p.init(),w.push(p),Y.enabled===!0&&Y.isPresenting===!0){const ue=v.xr.getDepthSensingMesh();ue!==null&&Ti(ue,N,-1/0,v.sortObjects)}Ti(E,N,0,v.sortObjects),p.finish(),v.sortObjects===!0&&p.sort(fe,ge),qe=Y.enabled===!1||Y.isPresenting===!1||Y.hasDepthSensing()===!1,qe&&we.addToRenderList(p,E),this.info.render.frame++,Ie===!0&&he.beginShadows();const G=f.state.shadowsArray;be.render(G,E,N),Ie===!0&&he.endShadows(),this.info.autoReset===!0&&this.info.reset();const V=p.opaque,B=p.transmissive;if(f.setupLights(),N.isArrayCamera){const ue=N.cameras;if(B.length>0)for(let Me=0,Pe=ue.length;Me<Pe;Me++){const Te=ue[Me];Ji(V,B,E,Te)}qe&&we.render(E);for(let Me=0,Pe=ue.length;Me<Pe;Me++){const Te=ue[Me];Ki(p,E,Te,Te.viewport)}}else B.length>0&&Ji(V,B,E,N),qe&&we.render(E),Ki(p,E,N);A!==null&&P===0&&(pe.updateMultisampleRenderTarget(A),pe.updateRenderTargetMipmap(A)),E.isScene===!0&&E.onAfterRender(v,E,N),U.resetDefaultState(),M=-1,x=null,y.pop(),y.length>0?(f=y[y.length-1],Ie===!0&&he.setGlobalState(v.clippingPlanes,f.state.camera)):f=null,w.pop(),w.length>0?p=w[w.length-1]:p=null};function Ti(E,N,G,V){if(E.visible===!1)return;if(E.layers.test(N.layers)){if(E.isGroup)G=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(N);else if(E.isLight)f.pushLight(E),E.castShadow&&f.pushShadow(E);else if(E.isSprite){if(!E.frustumCulled||et.intersectsSprite(E)){V&&Le.setFromMatrixPosition(E.matrixWorld).applyMatrix4(ae);const Me=k.update(E),Pe=E.material;Pe.visible&&p.push(E,Me,Pe,G,Le.z,null)}}else if((E.isMesh||E.isLine||E.isPoints)&&(!E.frustumCulled||et.intersectsObject(E))){const Me=k.update(E),Pe=E.material;if(V&&(E.boundingSphere!==void 0?(E.boundingSphere===null&&E.computeBoundingSphere(),Le.copy(E.boundingSphere.center)):(Me.boundingSphere===null&&Me.computeBoundingSphere(),Le.copy(Me.boundingSphere.center)),Le.applyMatrix4(E.matrixWorld).applyMatrix4(ae)),Array.isArray(Pe)){const Te=Me.groups;for(let ke=0,He=Te.length;ke<He;ke++){const Fe=Te[ke],Qe=Pe[Fe.materialIndex];Qe&&Qe.visible&&p.push(E,Me,Qe,G,Le.z,Fe)}}else Pe.visible&&p.push(E,Me,Pe,G,Le.z,null)}}const ue=E.children;for(let Me=0,Pe=ue.length;Me<Pe;Me++)Ti(ue[Me],N,G,V)}function Ki(E,N,G,V){const B=E.opaque,ue=E.transmissive,Me=E.transparent;f.setupLightsView(G),Ie===!0&&he.setGlobalState(v.clippingPlanes,G),V&&J.viewport(D.copy(V)),B.length>0&&Dn(B,N,G),ue.length>0&&Dn(ue,N,G),Me.length>0&&Dn(Me,N,G),J.buffers.depth.setTest(!0),J.buffers.depth.setMask(!0),J.buffers.color.setMask(!0),J.setPolygonOffset(!1)}function Ji(E,N,G,V){if((G.isScene===!0?G.overrideMaterial:null)!==null)return;f.state.transmissionRenderTarget[V.id]===void 0&&(f.state.transmissionRenderTarget[V.id]=new Hn(1,1,{generateMipmaps:!0,type:ne.has("EXT_color_buffer_half_float")||ne.has("EXT_color_buffer_float")?1016:1009,minFilter:1008,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:nt.workingColorSpace}));const ue=f.state.transmissionRenderTarget[V.id],Me=V.viewport||D;ue.setSize(Me.z*v.transmissionResolutionScale,Me.w*v.transmissionResolutionScale);const Pe=v.getRenderTarget(),Te=v.getActiveCubeFace(),ke=v.getActiveMipmapLevel();v.setRenderTarget(ue),v.getClearColor(z),q=v.getClearAlpha(),q<1&&v.setClearColor(16777215,.5),v.clear(),qe&&we.render(G);const He=v.toneMapping;v.toneMapping=0;const Fe=V.viewport;if(V.viewport!==void 0&&(V.viewport=void 0),f.setupLightsView(V),Ie===!0&&he.setGlobalState(v.clippingPlanes,V),Dn(E,G,V),pe.updateMultisampleRenderTarget(ue),pe.updateRenderTargetMipmap(ue),ne.has("WEBGL_multisampled_render_to_texture")===!1){let Qe=!1;for(let st=0,yt=N.length;st<yt;st++){const ht=N[st],dt=ht.object,Be=ht.geometry,gt=ht.material,tt=ht.group;if(gt.side===2&&dt.layers.test(V.layers)){const kt=gt.side;gt.side=1,gt.needsUpdate=!0,$s(dt,G,V,Be,gt,tt),gt.side=kt,gt.needsUpdate=!0,Qe=!0}}Qe===!0&&(pe.updateMultisampleRenderTarget(ue),pe.updateRenderTargetMipmap(ue))}v.setRenderTarget(Pe,Te,ke),v.setClearColor(z,q),Fe!==void 0&&(V.viewport=Fe),v.toneMapping=He}function Dn(E,N,G){const V=N.isScene===!0?N.overrideMaterial:null;for(let B=0,ue=E.length;B<ue;B++){const Me=E[B],Pe=Me.object,Te=Me.geometry,ke=Me.group;let He=Me.material;He.allowOverride===!0&&V!==null&&(He=V),Pe.layers.test(G.layers)&&$s(Pe,N,G,Te,He,ke)}}function $s(E,N,G,V,B,ue){E.onBeforeRender(v,N,G,V,B,ue),E.modelViewMatrix.multiplyMatrices(G.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),B.onBeforeRender(v,N,G,V,E,ue),B.transparent===!0&&B.side===2&&B.forceSinglePass===!1?(B.side=1,B.needsUpdate=!0,v.renderBufferDirect(G,N,V,B,E,ue),B.side=0,B.needsUpdate=!0,v.renderBufferDirect(G,N,V,B,E,ue),B.side=2):v.renderBufferDirect(G,N,V,B,E,ue),E.onAfterRender(v,N,G,V,B,ue)}function ji(E,N,G){N.isScene!==!0&&(N=Ae);const V=ce.get(E),B=f.state.lights,ue=f.state.shadowsArray,Me=B.state.version,Pe=W.getParameters(E,B.state,ue,N,G),Te=W.getProgramCacheKey(Pe);let ke=V.programs;V.environment=E.isMeshStandardMaterial?N.environment:null,V.fog=N.fog,V.envMap=(E.isMeshStandardMaterial?Ve:We).get(E.envMap||V.environment),V.envMapRotation=V.environment!==null&&E.envMap===null?N.environmentRotation:E.envMapRotation,ke===void 0&&(E.addEventListener("dispose",K),ke=new Map,V.programs=ke);let He=ke.get(Te);if(He!==void 0){if(V.currentProgram===He&&V.lightsStateVersion===Me)return Ks(E,Pe),He}else Pe.uniforms=W.getUniforms(E),E.onBeforeCompile(Pe,v),He=W.acquireProgram(Pe,Te),ke.set(Te,He),V.uniforms=Pe.uniforms;const Fe=V.uniforms;return(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(Fe.clippingPlanes=he.uniform),Ks(E,Pe),V.needsLights=nc(E),V.lightsStateVersion=Me,V.needsLights&&(Fe.ambientLightColor.value=B.state.ambient,Fe.lightProbe.value=B.state.probe,Fe.directionalLights.value=B.state.directional,Fe.directionalLightShadows.value=B.state.directionalShadow,Fe.spotLights.value=B.state.spot,Fe.spotLightShadows.value=B.state.spotShadow,Fe.rectAreaLights.value=B.state.rectArea,Fe.ltc_1.value=B.state.rectAreaLTC1,Fe.ltc_2.value=B.state.rectAreaLTC2,Fe.pointLights.value=B.state.point,Fe.pointLightShadows.value=B.state.pointShadow,Fe.hemisphereLights.value=B.state.hemi,Fe.directionalShadowMap.value=B.state.directionalShadowMap,Fe.directionalShadowMatrix.value=B.state.directionalShadowMatrix,Fe.spotShadowMap.value=B.state.spotShadowMap,Fe.spotLightMatrix.value=B.state.spotLightMatrix,Fe.spotLightMap.value=B.state.spotLightMap,Fe.pointShadowMap.value=B.state.pointShadowMap,Fe.pointShadowMatrix.value=B.state.pointShadowMatrix),V.currentProgram=He,V.uniformsList=null,He}function Zs(E){if(E.uniformsList===null){const N=E.currentProgram.getUniforms();E.uniformsList=wr.seqWithValue(N.seq,E.uniforms)}return E.uniformsList}function Ks(E,N){const G=ce.get(E);G.outputColorSpace=N.outputColorSpace,G.batching=N.batching,G.batchingColor=N.batchingColor,G.instancing=N.instancing,G.instancingColor=N.instancingColor,G.instancingMorph=N.instancingMorph,G.skinning=N.skinning,G.morphTargets=N.morphTargets,G.morphNormals=N.morphNormals,G.morphColors=N.morphColors,G.morphTargetsCount=N.morphTargetsCount,G.numClippingPlanes=N.numClippingPlanes,G.numIntersection=N.numClipIntersection,G.vertexAlphas=N.vertexAlphas,G.vertexTangents=N.vertexTangents,G.toneMapping=N.toneMapping}function ec(E,N,G,V,B){N.isScene!==!0&&(N=Ae),pe.resetTextureUnits();const ue=N.fog,Me=V.isMeshStandardMaterial?N.environment:null,Pe=A===null?v.outputColorSpace:A.isXRRenderTarget===!0?A.texture.colorSpace:vi,Te=(V.isMeshStandardMaterial?Ve:We).get(V.envMap||Me),ke=V.vertexColors===!0&&!!G.attributes.color&&G.attributes.color.itemSize===4,He=!!G.attributes.tangent&&(!!V.normalMap||V.anisotropy>0),Fe=!!G.morphAttributes.position,Qe=!!G.morphAttributes.normal,st=!!G.morphAttributes.color;let yt=0;V.toneMapped&&(A===null||A.isXRRenderTarget===!0)&&(yt=v.toneMapping);const ht=G.morphAttributes.position||G.morphAttributes.normal||G.morphAttributes.color,dt=ht!==void 0?ht.length:0,Be=ce.get(V),gt=f.state.lights;if(Ie===!0&&(Q===!0||E!==x)){const It=E===x&&V.id===M;he.setState(V,E,It)}let tt=!1;V.version===Be.__version?(Be.needsLights&&Be.lightsStateVersion!==gt.state.version||Be.outputColorSpace!==Pe||B.isBatchedMesh&&Be.batching===!1||!B.isBatchedMesh&&Be.batching===!0||B.isBatchedMesh&&Be.batchingColor===!0&&B.colorTexture===null||B.isBatchedMesh&&Be.batchingColor===!1&&B.colorTexture!==null||B.isInstancedMesh&&Be.instancing===!1||!B.isInstancedMesh&&Be.instancing===!0||B.isSkinnedMesh&&Be.skinning===!1||!B.isSkinnedMesh&&Be.skinning===!0||B.isInstancedMesh&&Be.instancingColor===!0&&B.instanceColor===null||B.isInstancedMesh&&Be.instancingColor===!1&&B.instanceColor!==null||B.isInstancedMesh&&Be.instancingMorph===!0&&B.morphTexture===null||B.isInstancedMesh&&Be.instancingMorph===!1&&B.morphTexture!==null||Be.envMap!==Te||V.fog===!0&&Be.fog!==ue||Be.numClippingPlanes!==void 0&&(Be.numClippingPlanes!==he.numPlanes||Be.numIntersection!==he.numIntersection)||Be.vertexAlphas!==ke||Be.vertexTangents!==He||Be.morphTargets!==Fe||Be.morphNormals!==Qe||Be.morphColors!==st||Be.toneMapping!==yt||Be.morphTargetsCount!==dt)&&(tt=!0):(tt=!0,Be.__version=V.version);let kt=Be.currentProgram;tt===!0&&(kt=ji(V,N,B));let $n=!1,zt=!1,Ai=!1;const _t=kt.getUniforms(),Yt=Be.uniforms;if(J.useProgram(kt.program)&&($n=!0,zt=!0,Ai=!0),V.id!==M&&(M=V.id,zt=!0),$n||x!==E){J.buffers.depth.getReversed()&&E.reversedDepth!==!0&&(E._reversedDepth=!0,E.updateProjectionMatrix()),_t.setValue(L,"projectionMatrix",E.projectionMatrix),_t.setValue(L,"viewMatrix",E.matrixWorldInverse);const Nt=_t.map.cameraPosition;Nt!==void 0&&Nt.setValue(L,xe.setFromMatrixPosition(E.matrixWorld)),ee.logarithmicDepthBuffer&&_t.setValue(L,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),(V.isMeshPhongMaterial||V.isMeshToonMaterial||V.isMeshLambertMaterial||V.isMeshBasicMaterial||V.isMeshStandardMaterial||V.isShaderMaterial)&&_t.setValue(L,"isOrthographic",E.isOrthographicCamera===!0),x!==E&&(x=E,zt=!0,Ai=!0)}if(B.isSkinnedMesh){_t.setOptional(L,B,"bindMatrix"),_t.setOptional(L,B,"bindMatrixInverse");const It=B.skeleton;It&&(It.boneTexture===null&&It.computeBoneTexture(),_t.setValue(L,"boneTexture",It.boneTexture,pe))}B.isBatchedMesh&&(_t.setOptional(L,B,"batchingTexture"),_t.setValue(L,"batchingTexture",B._matricesTexture,pe),_t.setOptional(L,B,"batchingIdTexture"),_t.setValue(L,"batchingIdTexture",B._indirectTexture,pe),_t.setOptional(L,B,"batchingColorTexture"),B._colorsTexture!==null&&_t.setValue(L,"batchingColorTexture",B._colorsTexture,pe));const $t=G.morphAttributes;if(($t.position!==void 0||$t.normal!==void 0||$t.color!==void 0)&&de.update(B,G,kt),(zt||Be.receiveShadow!==B.receiveShadow)&&(Be.receiveShadow=B.receiveShadow,_t.setValue(L,"receiveShadow",B.receiveShadow)),V.isMeshGouraudMaterial&&V.envMap!==null&&(Yt.envMap.value=Te,Yt.flipEnvMap.value=Te.isCubeTexture&&Te.isRenderTargetTexture===!1?-1:1),V.isMeshStandardMaterial&&V.envMap===null&&N.environment!==null&&(Yt.envMapIntensity.value=N.environmentIntensity),zt&&(_t.setValue(L,"toneMappingExposure",v.toneMappingExposure),Be.needsLights&&tc(Yt,Ai),ue&&V.fog===!0&&se.refreshFogUniforms(Yt,ue),se.refreshMaterialUniforms(Yt,V,X,re,f.state.transmissionRenderTarget[E.id]),wr.upload(L,Zs(Be),Yt,pe)),V.isShaderMaterial&&V.uniformsNeedUpdate===!0&&(wr.upload(L,Zs(Be),Yt,pe),V.uniformsNeedUpdate=!1),V.isSpriteMaterial&&_t.setValue(L,"center",B.center),_t.setValue(L,"modelViewMatrix",B.modelViewMatrix),_t.setValue(L,"normalMatrix",B.normalMatrix),_t.setValue(L,"modelMatrix",B.matrixWorld),V.isShaderMaterial||V.isRawShaderMaterial){const It=V.uniformsGroups;for(let Nt=0,Gr=It.length;Nt<Gr;Nt++){const In=It[Nt];te.update(In,kt),te.bind(In,kt)}}return kt}function tc(E,N){E.ambientLightColor.needsUpdate=N,E.lightProbe.needsUpdate=N,E.directionalLights.needsUpdate=N,E.directionalLightShadows.needsUpdate=N,E.pointLights.needsUpdate=N,E.pointLightShadows.needsUpdate=N,E.spotLights.needsUpdate=N,E.spotLightShadows.needsUpdate=N,E.rectAreaLights.needsUpdate=N,E.hemisphereLights.needsUpdate=N}function nc(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return C},this.getActiveMipmapLevel=function(){return P},this.getRenderTarget=function(){return A},this.setRenderTargetTextures=function(E,N,G){const V=ce.get(E);V.__autoAllocateDepthBuffer=E.resolveDepthBuffer===!1,V.__autoAllocateDepthBuffer===!1&&(V.__useRenderToTexture=!1),ce.get(E.texture).__webglTexture=N,ce.get(E.depthTexture).__webglTexture=V.__autoAllocateDepthBuffer?void 0:G,V.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(E,N){const G=ce.get(E);G.__webglFramebuffer=N,G.__useDefaultFramebuffer=N===void 0};const ic=L.createFramebuffer();this.setRenderTarget=function(E,N=0,G=0){A=E,C=N,P=G;let V=!0,B=null,ue=!1,Me=!1;if(E){const Te=ce.get(E);if(Te.__useDefaultFramebuffer!==void 0)J.bindFramebuffer(L.FRAMEBUFFER,null),V=!1;else if(Te.__webglFramebuffer===void 0)pe.setupRenderTarget(E);else if(Te.__hasExternalTextures)pe.rebindTextures(E,ce.get(E.texture).__webglTexture,ce.get(E.depthTexture).__webglTexture);else if(E.depthBuffer){const Fe=E.depthTexture;if(Te.__boundDepthTexture!==Fe){if(Fe!==null&&ce.has(Fe)&&(E.width!==Fe.image.width||E.height!==Fe.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");pe.setupDepthRenderbuffer(E)}}const ke=E.texture;(ke.isData3DTexture||ke.isDataArrayTexture||ke.isCompressedArrayTexture)&&(Me=!0);const He=ce.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(Array.isArray(He[N])?B=He[N][G]:B=He[N],ue=!0):E.samples>0&&pe.useMultisampledRTT(E)===!1?B=ce.get(E).__webglMultisampledFramebuffer:Array.isArray(He)?B=He[G]:B=He,D.copy(E.viewport),F.copy(E.scissor),O=E.scissorTest}else D.copy(Ee).multiplyScalar(X).floor(),F.copy(ze).multiplyScalar(X).floor(),O=Ze;if(G!==0&&(B=ic),J.bindFramebuffer(L.FRAMEBUFFER,B)&&V&&J.drawBuffers(E,B),J.viewport(D),J.scissor(F),J.setScissorTest(O),ue){const Te=ce.get(E.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_CUBE_MAP_POSITIVE_X+N,Te.__webglTexture,G)}else if(Me){const Te=N;for(let ke=0;ke<E.textures.length;ke++){const He=ce.get(E.textures[ke]);L.framebufferTextureLayer(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0+ke,He.__webglTexture,G,Te)}}else if(E!==null&&G!==0){const Te=ce.get(E.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,Te.__webglTexture,G)}M=-1},this.readRenderTargetPixels=function(E,N,G,V,B,ue,Me,Pe=0){if(!(E&&E.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Te=ce.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&Me!==void 0&&(Te=Te[Me]),Te){J.bindFramebuffer(L.FRAMEBUFFER,Te);try{const ke=E.textures[Pe],He=ke.format,Fe=ke.type;if(!ee.textureFormatReadable(He)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!ee.textureTypeReadable(Fe)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}N>=0&&N<=E.width-V&&G>=0&&G<=E.height-B&&(E.textures.length>1&&L.readBuffer(L.COLOR_ATTACHMENT0+Pe),L.readPixels(N,G,V,B,De.convert(He),De.convert(Fe),ue))}finally{const ke=A!==null?ce.get(A).__webglFramebuffer:null;J.bindFramebuffer(L.FRAMEBUFFER,ke)}}},this.readRenderTargetPixelsAsync=async function(E,N,G,V,B,ue,Me,Pe=0){if(!(E&&E.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Te=ce.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&Me!==void 0&&(Te=Te[Me]),Te)if(N>=0&&N<=E.width-V&&G>=0&&G<=E.height-B){J.bindFramebuffer(L.FRAMEBUFFER,Te);const ke=E.textures[Pe],He=ke.format,Fe=ke.type;if(!ee.textureFormatReadable(He))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!ee.textureTypeReadable(Fe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Qe=L.createBuffer();L.bindBuffer(L.PIXEL_PACK_BUFFER,Qe),L.bufferData(L.PIXEL_PACK_BUFFER,ue.byteLength,L.STREAM_READ),E.textures.length>1&&L.readBuffer(L.COLOR_ATTACHMENT0+Pe),L.readPixels(N,G,V,B,De.convert(He),De.convert(Fe),0);const st=A!==null?ce.get(A).__webglFramebuffer:null;J.bindFramebuffer(L.FRAMEBUFFER,st);const yt=L.fenceSync(L.SYNC_GPU_COMMANDS_COMPLETE,0);return L.flush(),await Ac(L,yt,4),L.bindBuffer(L.PIXEL_PACK_BUFFER,Qe),L.getBufferSubData(L.PIXEL_PACK_BUFFER,0,ue),L.deleteBuffer(Qe),L.deleteSync(yt),ue}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(E,N=null,G=0){const V=Math.pow(2,-G),B=Math.floor(E.image.width*V),ue=Math.floor(E.image.height*V),Me=N!==null?N.x:0,Pe=N!==null?N.y:0;pe.setTexture2D(E,0),L.copyTexSubImage2D(L.TEXTURE_2D,G,0,0,Me,Pe,B,ue),J.unbindTexture()};const rc=L.createFramebuffer(),sc=L.createFramebuffer();this.copyTextureToTexture=function(E,N,G=null,V=null,B=0,ue=null){ue===null&&(B!==0?(Hi("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),ue=B,B=0):ue=0);let Me,Pe,Te,ke,He,Fe,Qe,st,yt;const ht=E.isCompressedTexture?E.mipmaps[ue]:E.image;if(G!==null)Me=G.max.x-G.min.x,Pe=G.max.y-G.min.y,Te=G.isBox3?G.max.z-G.min.z:1,ke=G.min.x,He=G.min.y,Fe=G.isBox3?G.min.z:0;else{const $t=Math.pow(2,-B);Me=Math.floor(ht.width*$t),Pe=Math.floor(ht.height*$t),E.isDataArrayTexture?Te=ht.depth:E.isData3DTexture?Te=Math.floor(ht.depth*$t):Te=1,ke=0,He=0,Fe=0}V!==null?(Qe=V.x,st=V.y,yt=V.z):(Qe=0,st=0,yt=0);const dt=De.convert(N.format),Be=De.convert(N.type);let gt;N.isData3DTexture?(pe.setTexture3D(N,0),gt=L.TEXTURE_3D):N.isDataArrayTexture||N.isCompressedArrayTexture?(pe.setTexture2DArray(N,0),gt=L.TEXTURE_2D_ARRAY):(pe.setTexture2D(N,0),gt=L.TEXTURE_2D),L.pixelStorei(L.UNPACK_FLIP_Y_WEBGL,N.flipY),L.pixelStorei(L.UNPACK_PREMULTIPLY_ALPHA_WEBGL,N.premultiplyAlpha),L.pixelStorei(L.UNPACK_ALIGNMENT,N.unpackAlignment);const tt=L.getParameter(L.UNPACK_ROW_LENGTH),kt=L.getParameter(L.UNPACK_IMAGE_HEIGHT),$n=L.getParameter(L.UNPACK_SKIP_PIXELS),zt=L.getParameter(L.UNPACK_SKIP_ROWS),Ai=L.getParameter(L.UNPACK_SKIP_IMAGES);L.pixelStorei(L.UNPACK_ROW_LENGTH,ht.width),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,ht.height),L.pixelStorei(L.UNPACK_SKIP_PIXELS,ke),L.pixelStorei(L.UNPACK_SKIP_ROWS,He),L.pixelStorei(L.UNPACK_SKIP_IMAGES,Fe);const _t=E.isDataArrayTexture||E.isData3DTexture,Yt=N.isDataArrayTexture||N.isData3DTexture;if(E.isDepthTexture){const $t=ce.get(E),It=ce.get(N),Nt=ce.get($t.__renderTarget),Gr=ce.get(It.__renderTarget);J.bindFramebuffer(L.READ_FRAMEBUFFER,Nt.__webglFramebuffer),J.bindFramebuffer(L.DRAW_FRAMEBUFFER,Gr.__webglFramebuffer);for(let In=0;In<Te;In++)_t&&(L.framebufferTextureLayer(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,ce.get(E).__webglTexture,B,Fe+In),L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,ce.get(N).__webglTexture,ue,yt+In)),L.blitFramebuffer(ke,He,Me,Pe,Qe,st,Me,Pe,L.DEPTH_BUFFER_BIT,L.NEAREST);J.bindFramebuffer(L.READ_FRAMEBUFFER,null),J.bindFramebuffer(L.DRAW_FRAMEBUFFER,null)}else if(B!==0||E.isRenderTargetTexture||ce.has(E)){const $t=ce.get(E),It=ce.get(N);J.bindFramebuffer(L.READ_FRAMEBUFFER,rc),J.bindFramebuffer(L.DRAW_FRAMEBUFFER,sc);for(let Nt=0;Nt<Te;Nt++)_t?L.framebufferTextureLayer(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,$t.__webglTexture,B,Fe+Nt):L.framebufferTexture2D(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,$t.__webglTexture,B),Yt?L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,It.__webglTexture,ue,yt+Nt):L.framebufferTexture2D(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,It.__webglTexture,ue),B!==0?L.blitFramebuffer(ke,He,Me,Pe,Qe,st,Me,Pe,L.COLOR_BUFFER_BIT,L.NEAREST):Yt?L.copyTexSubImage3D(gt,ue,Qe,st,yt+Nt,ke,He,Me,Pe):L.copyTexSubImage2D(gt,ue,Qe,st,ke,He,Me,Pe);J.bindFramebuffer(L.READ_FRAMEBUFFER,null),J.bindFramebuffer(L.DRAW_FRAMEBUFFER,null)}else Yt?E.isDataTexture||E.isData3DTexture?L.texSubImage3D(gt,ue,Qe,st,yt,Me,Pe,Te,dt,Be,ht.data):N.isCompressedArrayTexture?L.compressedTexSubImage3D(gt,ue,Qe,st,yt,Me,Pe,Te,dt,ht.data):L.texSubImage3D(gt,ue,Qe,st,yt,Me,Pe,Te,dt,Be,ht):E.isDataTexture?L.texSubImage2D(L.TEXTURE_2D,ue,Qe,st,Me,Pe,dt,Be,ht.data):E.isCompressedTexture?L.compressedTexSubImage2D(L.TEXTURE_2D,ue,Qe,st,ht.width,ht.height,dt,ht.data):L.texSubImage2D(L.TEXTURE_2D,ue,Qe,st,Me,Pe,dt,Be,ht);L.pixelStorei(L.UNPACK_ROW_LENGTH,tt),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,kt),L.pixelStorei(L.UNPACK_SKIP_PIXELS,$n),L.pixelStorei(L.UNPACK_SKIP_ROWS,zt),L.pixelStorei(L.UNPACK_SKIP_IMAGES,Ai),ue===0&&N.generateMipmaps&&L.generateMipmap(gt),J.unbindTexture()},this.initRenderTarget=function(E){ce.get(E).__webglFramebuffer===void 0&&pe.setupRenderTarget(E)},this.initTexture=function(E){E.isCubeTexture?pe.setTextureCube(E,0):E.isData3DTexture?pe.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?pe.setTexture2DArray(E,0):pe.setTexture2D(E,0),J.unbindTexture()},this.resetState=function(){C=0,P=0,A=null,J.reset(),U.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return 2e3}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=nt._getDrawingBufferColorSpace(e),t.unpackColorSpace=nt._getUnpackColorSpace()}}class Ip extends bo{constructor(){super();const e=new Ln;e.deleteAttribute("uv");const t=new Yi({side:1}),n=new Yi,r=new Wl(16777215,900,28,2);r.position.set(.418,16.199,.3),this.add(r);const s=new ft(e,t);s.position.set(-.757,13.219,.717),s.scale.set(31.713,28.305,28.591),this.add(s);const a=new jc(e,n,6),o=new Tt;o.position.set(-10.906,2.009,1.846),o.rotation.set(0,-.195,0),o.scale.set(2.328,7.905,4.651),o.updateMatrix(),a.setMatrixAt(0,o.matrix),o.position.set(-5.607,-.754,-.758),o.rotation.set(0,.994,0),o.scale.set(1.97,1.534,3.955),o.updateMatrix(),a.setMatrixAt(1,o.matrix),o.position.set(6.167,.857,7.803),o.rotation.set(0,.561,0),o.scale.set(3.927,6.285,3.687),o.updateMatrix(),a.setMatrixAt(2,o.matrix),o.position.set(-2.017,.018,6.124),o.rotation.set(0,.333,0),o.scale.set(2.002,4.566,2.064),o.updateMatrix(),a.setMatrixAt(3,o.matrix),o.position.set(2.291,-.756,-2.621),o.rotation.set(0,-.286,0),o.scale.set(1.546,1.552,1.496),o.updateMatrix(),a.setMatrixAt(4,o.matrix),o.position.set(-2.193,-.369,-5.547),o.rotation.set(0,.516,0),o.scale.set(3.875,3.487,2.986),o.updateMatrix(),a.setMatrixAt(5,o.matrix),this.add(a);const l=new ft(e,di(50));l.position.set(-16.116,14.37,8.208),l.scale.set(.1,2.428,2.739),this.add(l);const c=new ft(e,di(50));c.position.set(-16.109,18.021,-8.207),c.scale.set(.1,2.425,2.751),this.add(c);const d=new ft(e,di(17));d.position.set(14.904,12.198,-1.832),d.scale.set(.15,4.265,6.331),this.add(d);const u=new ft(e,di(43));u.position.set(-.462,8.89,14.52),u.scale.set(4.38,5.441,.088),this.add(u);const h=new ft(e,di(20));h.position.set(3.235,11.486,-12.541),h.scale.set(2.5,2,.1),this.add(h);const m=new ft(e,di(100));m.position.set(0,20,0),m.scale.set(1,.1,1),this.add(m)}dispose(){const e=new Set;this.traverse(t=>{t.isMesh&&(e.add(t.geometry),e.add(t.material))});for(const t of e)t.dispose()}}function di(i){return new Nl({color:0,emissive:16777215,emissiveIntensity:i})}function rt(i,e=0,t=.65){return new Yi({color:i,metalness:e,roughness:t})}function Ce(i,e,t,n){const r=new ft(new Ln(...e),n);return r.position.set(...t),r.castShadow=!0,r.receiveShadow=!0,i.add(r),r}function tn(i,e,t,n,r,s=24){const a=new ft(new Nr(e,e,t,s),r);return a.position.set(...n),a.castShadow=!0,a.receiveShadow=!0,i.add(a),a}function Dt(i,e,t,n,r){const s=new I(...e),a=new I(...t),o=tn(i,n,s.distanceTo(a),s.clone().add(a).multiplyScalar(.5).toArray(),r,8);return o.quaternion.setFromUnitVectors(new I(0,1,0),a.sub(s).normalize()),o}class Up{constructor(e,t,n,r,s){this.host=e,this.scene=new bo,this.camera=new Xt(38,1,.1,160),this.root=new vt,this.reduced=matchMedia("(prefers-reduced-motion: reduce)"),this.labels=[],this.callbacks=new Map,this.drags=new Map,this.skipClick=!1,this.lastHit=null,this.ray=new Go,this.pointer=new ve,this.target=new I,this.frame=()=>{},this.draw=null,this.resized=()=>{},this.reserveRight=0,this.reserveBottom=0,this.last=0,this.controller=new AbortController,this.viewWidth=20,this.content=null,this.contentMargin=.94,this.offset=new I,this.hover=null,this.disposed=!1,this.renderer=new Dp({antialias:!0,powerPreference:"high-performance"}),this.renderer.setPixelRatio(Math.min(devicePixelRatio,1.75)),this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.type=2,this.renderer.toneMapping=4,this.renderer.toneMappingExposure=1.15,this.renderer.domElement.setAttribute("aria-hidden","true"),e.prepend(this.renderer.domElement),this.scene.background=new Ke(t),this.scene.fog=new Fr(t,36,85),this.scene.add(this.root),this.target.set(...r),this.camera.position.set(...n),this.camera.lookAt(this.target),this.viewWidth=s,this.offset.copy(this.camera.position).sub(this.target);const a=new Ip,o=new Ps(this.renderer);this.environment=o.fromScene(a,.04),this.scene.environment=this.environment.texture,this.scene.environmentIntensity=.45,a.dispose(),o.dispose();const l=new Hl(14149615,2370868,1.2);l.name="ambient",this.scene.add(l);const c=new Ra(16768426,3.5);c.name="key",c.position.set(-8,15,9),c.castShadow=!0,c.shadow.mapSize.set(2048,2048),Object.assign(c.shadow.camera,{left:-22,right:22,top:22,bottom:-22,near:.5,far:65}),c.shadow.bias=-5e-4,c.shadow.normalBias=.03,this.scene.add(c);const d=new Ra(8960969,1.3);d.name="fill",d.position.set(8,8,-10),this.scene.add(d);const u={signal:this.controller.signal};let h=null,m=0;const _=g=>{var p;return g.target===this.renderer.domElement?this.hit(g):((p=this.labels.find(f=>f.element===g.target))==null?void 0:p.object)??null};e.addEventListener("pointerdown",g=>{const p=_(g),f=p?this.drags.get(p):void 0;f&&(h={callback:f,x:g.clientX,y:g.clientY,acc:0,moved:!1},g.target.setPointerCapture(g.pointerId))},u),e.addEventListener("pointermove",g=>{if(h){h.acc+=g.clientX-h.x+(h.y-g.clientY),h.x=g.clientX,h.y=g.clientY;const p=Math.trunc(h.acc/3);p&&(h.callback(p),h.acc-=p*3,h.moved=!0);return}g.target===this.renderer.domElement&&(this.hover=this.hit(g),this.renderer.domElement.style.cursor=this.hover?"pointer":"default")},u),e.addEventListener("wheel",g=>{const p=_(g),f=p?this.drags.get(p):void 0;if(!f)return;g.preventDefault(),m-=g.deltaY;const w=Math.trunc(m/20);w&&(f(w),m-=w*20)},{signal:this.controller.signal,passive:!1}),e.addEventListener("pointerup",()=>{this.skipClick=(h==null?void 0:h.moved)??!1,h=null},u),e.addEventListener("pointercancel",()=>{h=null},u),this.renderer.domElement.addEventListener("click",g=>{var f;if(this.skipClick){this.skipClick=!1;return}const p=this.hit(g);p&&((f=this.callbacks.get(p))==null||f())},u),this.renderer.domElement.addEventListener("webglcontextlost",g=>{g.preventDefault(),this.renderer.setAnimationLoop(null),this.host.dispatchEvent(new CustomEvent("scene-lost"))},u),this.renderer.domElement.addEventListener("webglcontextrestored",()=>location.reload(),u),this.observer=new ResizeObserver(()=>this.resize()),this.observer.observe(e),this.resize(),this.renderer.setAnimationLoop(g=>{const p=Math.min((g-this.last)/1e3||0,.05);this.last=g,!document.hidden&&(this.frame(p,g/1e3),this.project(),this.draw?this.draw():this.renderer.render(this.scene,this.camera))}),window.addEventListener("pagehide",()=>this.dispose(),{once:!0,signal:this.controller.signal})}fitTo(e,t=.96){this.content=e.map(n=>n.clone()),this.contentMargin=t,this.resize()}resize(){const e=this.host.clientWidth,t=Math.max(1,this.host.clientHeight),n=Math.max(1,e-Math.min(this.reserveRight,e/2)),r=Math.max(1,t-Math.max(0,Math.min(this.reserveBottom,t-120)));if(this.renderer.setSize(e,t),this.camera.aspect=n/r,n<e||r<t?this.camera.setViewOffset(n,r,0,0,e,t):this.camera.clearViewOffset(),this.content)this.frameContent();else{const s=this.camera.position.distanceTo(this.target);this.camera.fov=Vr.radToDeg(2*Math.atan(Math.max(this.viewWidth/this.camera.aspect,12)/(s*2)))}this.camera.updateProjectionMatrix(),this.project(),this.resized(e,t)}frameContent(){const e=this.content,t=new I,n=new I;for(const r of e)n.add(r);n.divideScalar(e.length);for(let r=0;r<3;r++){this.target.copy(n),this.camera.position.copy(this.target).add(this.offset),this.camera.lookAt(this.target),this.camera.updateMatrixWorld();let s=1/0,a=-1/0,o=1/0,l=-1/0;for(const m of e){t.copy(m).applyMatrix4(this.camera.matrixWorldInverse);const _=Math.max(.1,-t.z);s=Math.min(s,t.x/_),a=Math.max(a,t.x/_),o=Math.min(o,t.y/_),l=Math.max(l,t.y/_)}const c=Math.max(.02,(l-o)/2,(a-s)/2/this.camera.aspect);if(this.camera.fov=Vr.clamp(Vr.radToDeg(2*Math.atan(c/this.contentMargin)),8,80),r===2)break;const d=this.offset.length(),u=new I().setFromMatrixColumn(this.camera.matrixWorld,0),h=new I().setFromMatrixColumn(this.camera.matrixWorld,1);n.addScaledVector(u,(a+s)/2*d).addScaledVector(h,(l+o)/2*d)}}lighting(e,t,n,r){this.scene.getObjectByName("ambient").intensity=e,this.scene.getObjectByName("key").intensity=t,this.scene.getObjectByName("fill").intensity=n,this.scene.environmentIntensity=r}hit(e){var s;const t=this.renderer.domElement.getBoundingClientRect();this.pointer.set((e.clientX-t.left)/t.width*2-1,-(e.clientY-t.top)/t.height*2+1),this.ray.setFromCamera(this.pointer,this.camera);const n=this.ray.intersectObjects([...this.callbacks.keys()],!0);this.lastHit=n[0]??null;let r=((s=n[0])==null?void 0:s.object)??null;for(;r&&!this.callbacks.has(r);)r=r.parent;return r}interact(e,t,n,r=[0,.6,0]){this.callbacks.set(e,n);const s=document.createElement("button");return s.type="button",s.className="object-label",s.textContent=t,s.title=t,s.setAttribute("aria-label",t),s.addEventListener("click",()=>{if(this.skipClick){this.skipClick=!1;return}n()}),this.host.append(s),s.addEventListener("focus",()=>s.classList.add("targeted")),s.addEventListener("blur",()=>s.classList.remove("targeted")),this.labels.push({element:s,object:e,offset:new I(...r)}),s}project(){this.scene.updateMatrixWorld(),this.camera.updateMatrixWorld();for(const e of this.labels){const t=e.object.localToWorld(e.offset.clone()).project(this.camera);e.element.style.left=`${(t.x+1)/2*100}%`,e.element.style.top=`${(1-t.y)/2*100}%`;let n=e.object.visible;e.object.traverseAncestors(r=>{n=n&&r.visible}),e.element.hidden=!n||t.z>1}}describeObjects(){const e=this.host.getBoundingClientRect();return this.labels.map(t=>{const n=t.object.getWorldPosition(new I).project(this.camera);return{name:t.element.textContent,x:e.left+(n.x+1)/2*e.width,y:e.top+(1-n.y)/2*e.height}})}dispose(){if(this.disposed)return;this.disposed=!0,this.renderer.setAnimationLoop(null),this.observer.disconnect(),this.controller.abort();const e=new Set,t=new Set,n=new Set;this.scene.traverse(r=>{if(r instanceof ft||r instanceof As){e.add(r.geometry);for(const s of Array.isArray(r.material)?r.material:[r.material]){t.add(s);for(const a of Object.values(s))a instanceof Rt&&n.add(a)}}}),e.forEach(r=>r.dispose()),t.forEach(r=>r.dispose()),n.forEach(r=>r.dispose()),this.environment.dispose(),this.renderer.dispose()}}const ot={schemaVersion:1,saveVersion:2,sourceCount:6,maxRequests:90,maxText:1600,maxZoneDescription:90,maxBlockedReason:140,maxNumber:1e6,maxFileBytes:5e5,maxSaveBytes:1e5,stepSeconds:1,frameMs:100,millisecondsPerSecond:1e3,revisionLimit:2,minBudgetUse:.7,moneyPrecision:100,visual:{terminalDeckY:.42,laneMarkY:.455,serviceLaneX:10.2,sourceVesselX:-10,equipmentHeight:.65,liftHeight:2.6,carrySeconds:1.1,arcHeight:1.4,gateSeconds:.8,playbackRate:1500,lateLotX:.4,lateLotZ:5.7}},Wt=i=>Math.round(i*ot.moneyPrecision)/ot.moneyPrecision;function Ir(i,e){var t;return((t=i.sources.find(n=>n.id===e))==null?void 0:t.routes.map(n=>n.zoneId))??[]}function Yo(i,e,t,n){const r=i.sources.find(o=>o.id===e),s=i.zones.find(o=>o.id===t),a=r==null?void 0:r.routes.find(o=>o.zoneId===t);if(!r||!s||!a)throw new Error(`${(r==null?void 0:r.label)??e}: this destination is not eligible.`);return{storage:r.volume*n*s.storagePerUnitDay,transfer:r.volume*a.transferPerUnit}}function no(i,e,t,n){const r=Yo(i,e,t,n);return Wt(r.storage+r.transfer)}function Fp(i){const e={};for(const t of i.sources){let n=t.routes[0];const r=a=>a.setupSeconds+a.serviceSeconds+(a.prepareSeconds??0);for(const a of t.routes)r(a)<r(n)&&(n=a);const s=Math.min(...i.retentionOptions.filter(a=>a>=t.requiredDays));e[t.id]={zoneId:n.zoneId,days:s}}return e}function Ys(i,e){const t=[],n=new Map(i.zones.map(r=>[r.id,0]));Object.keys(e).some(r=>!i.sources.some(s=>s.id===r))&&t.push("The plan has an unknown source.");for(const r of i.sources){const s=e[r.id];if(!s){t.push(`Assign ${r.label}.`);continue}r.routes.find(o=>o.zoneId===s.zoneId)||t.push(`${r.label}: this destination is not eligible.`),i.retentionOptions.includes(s.days)||t.push(`${r.label}: select a valid retention policy.`),n.set(s.zoneId,(n.get(s.zoneId)??0)+r.volume)}for(const r of i.zones)(n.get(r.id)??0)>r.capacity&&t.push(`${r.label}: capacity exceeded (${n.get(r.id)} / ${r.capacity} ${i.unit}).`);return t}function dn(i,e,t,n=[]){const r=Ys(i,t);if(r.length)throw new Error(r.join(" "));const s=new Map(i.zones.map(g=>[g.id,Array(g.workers).fill(0)]));let a=0,o=0;const l=[],c=[];for(const g of i.sources){const p=t[g.id],f=i.zones.find(v=>v.id===p.zoneId),w=g.routes.find(v=>v.zoneId===f.id),y=Yo(i,g.id,f.id,p.days);a+=y.storage,o+=y.transfer,p.days<g.requiredDays&&l.push(g.id),w.access==="unknown"&&!n.includes(g.id)&&c.push(g.id)}const u=e.requests.map((g,p)=>{const f=i.sources.find(y=>y.id===g.sourceId),w=f.routes.find(y=>y.zoneId===t[f.id].zoneId);return{request:g,order:p,ready:Math.max(g.arrival,w.setupSeconds)}}).sort((g,p)=>g.ready-p.ready||g.request.arrival-p.request.arrival||g.order-p.order).map(({request:g,ready:p})=>{const f=i.sources.find(O=>O.id===g.sourceId),w=t[f.id],y=f.routes.find(O=>O.zoneId===w.zoneId),v=y.access==="unknown"&&n.includes(f.id)?y.verifiedAccess:y.access;let T="met";v==="denied"?T="access-denied":v==="unknown"?T="access-unknown":g.ageDays>w.days&&(T="expired");let C=g.arrival,P=g.arrival,A=0,M=0,x=0,D=0,F=0;if(T==="met"){const O=s.get(w.zoneId),z=O.indexOf(Math.min(...O));C=Math.max(p,O[z]),M=(y.prepareSeconds??0)*g.units,x=(y.prepareCost??0)*g.units,A=y.serviceSeconds*g.units,P=C+M+A,O[z]=P,D=g.units*y.queryCost,F=g.units*y.resultTransferCost,P-g.arrival>g.deadline&&(T="late")}return{id:g.id,sourceId:f.id,zoneId:w.zoneId,arrival:g.arrival,ready:p,start:C,finish:P,setupWait:A?p-g.arrival:0,queueWait:A?C-p:0,prepare:M,service:A,elapsed:P-g.arrival,deadline:g.deadline,critical:g.critical,cost:Wt(D+F+x),prepareCost:Wt(x),queryCost:Wt(D),transferCost:Wt(F),status:T}}).sort((g,p)=>g.arrival-p.arrival||g.id.localeCompare(p.id)),h=Wt(u.reduce((g,p)=>g+p.queryCost,0)),m=Wt(u.reduce((g,p)=>g+p.transferCost,0)),_=Wt(u.reduce((g,p)=>g+p.prepareCost,0));return a=Wt(a),o=Wt(o),{requests:u,storageCost:a,placementTransferCost:o,queryCost:h,resultTransferCost:m,preparationCost:_,totalCost:Wt(a+o+h+m+_),criticalMet:u.filter(g=>g.critical&&g.status==="met").length,criticalTotal:u.filter(g=>g.critical).length,met:u.filter(g=>g.status==="met").length,retentionFailures:l,unresolvedSources:c,end:Math.max(0,...u.map(g=>g.finish),...e.phases.map(g=>g.at))}}function Ds(i,e){return e<i.arrival?"not released":e>=i.finish?i.status:e<i.ready?"placement wait":e<i.start?"queue":e<i.start+i.prepare?"preparing":"in service"}function Np(i){return i.status==="access-unknown"?"Access was never checked, so this request stopped. Use Check access next time.":i.status==="access-denied"?"Access was denied. A faster area will not fix this. Pick another area.":i.status==="expired"?"The data it needed was already deleted. Keep this source longer.":`Took ${i.elapsed}s. Due in ${i.deadline}s. ${i.status==="met"?"On time.":"Late."}`}function io(i){const e=i.requests.reduce((t,n)=>n.elapsed>((t==null?void 0:t.elapsed)??-1)?n:t,null);return(e==null?void 0:e.sourceId)??""}const Op=""+new URL("container-C1nDnXjD.jpg",import.meta.url).href,ro=""+new URL("quay-CgfHSFqj.jpg",import.meta.url).href,Bp=""+new URL("water-CTphZUXz.jpg",import.meta.url).href,so=""+new URL("asphalt-Bir9xYpZ.jpg",import.meta.url).href,St=ot.visual;let zi=14811266,Vn=16358684,Cr=28915,ut={darkest:792356,darker:3554372,dark:9870762,light:14015717,lightest:15791095};const bn=i=>parseInt(i.replace("#",""),16);function kp(i){zi=bn(i.primary),Vn=bn(i.secondary3d),Cr=bn(i.focus),ut={darkest:bn(i.greys.darkest),darker:bn(i.greys.darker),dark:bn(i.greys.dark),light:bn(i.greys.light),lightest:bn(i.greys.lightest)}}function ui(i,e,t,n,r=.1,s=.7){const a=new Vl().load(i);return a.colorSpace=Ot,a.wrapS=a.wrapT=1e3,a.repeat.set(t,n),a.anisotropy=8,new Yi({color:e,map:a,metalness:r,roughness:s})}const ao=i=>"#"+i.toString(16).padStart(6,"0");function zp(){const i=document.createElement("canvas");i.width=256,i.height=4;const e=i.getContext("2d"),t=e.createLinearGradient(0,0,256,0),n=ao(zi),r=ao(Vn);t.addColorStop(0,n),t.addColorStop(.5,n),t.addColorStop(1,r),e.fillStyle=t,e.fillRect(0,0,256,4);const s=new nl(i);return s.colorSpace=Ot,new Yi({color:16777215,map:s,emissive:16777215,emissiveMap:s,emissiveIntensity:.35,roughness:.4})}const oo=i=>1-Math.pow(1-Math.min(1,Math.max(0,i)),3),vn={beamY:1.02,idleY:.72,busyY:.34,laneZ:3.35},co=16756736,wn={x:1.5,z:12.5};class Gp{constructor(e,t,n){Ge(this,"stage");Ge(this,"containers",new Map);Ge(this,"berthGroups",new Map);Ge(this,"berths",new Map);Ge(this,"barriers",new Map);Ge(this,"glows",new Map);Ge(this,"flagMesh");Ge(this,"trucks",new Map);Ge(this,"boats",new Map);Ge(this,"ghosts",[]);Ge(this,"routes",new vt);Ge(this,"cranes",[]);Ge(this,"hooks",[]);Ge(this,"sea");Ge(this,"steel",rt(ut.darker,.6,.45));Ge(this,"cream",rt(ut.lightest,.1,.5));Ge(this,"yellow",rt(Cr,.3,.45));Ge(this,"gradient",zp());Ge(this,"colors",[Cr,ut.darker,ut.light,1920657,ut.dark,5991296]);Ge(this,"paints",new Map);Ge(this,"tweens",new Map);Ge(this,"landing",new Set);Ge(this,"onLand",()=>{});Ge(this,"truckStages",new Map);Ge(this,"sourceLabels",new Map);Ge(this,"loaders",new Map);Ge(this,"boards",new Map);Ge(this,"requestBoard");Ge(this,"panels",[]);Ge(this,"screenPanels",()=>[]);Ge(this,"selectedRequest","");Ge(this,"laneCache",{simulation:null,lanes:new Map});Ge(this,"truckLabels",new Map);Ge(this,"berthLabels",new Map);Ge(this,"routeKey","");Ge(this,"gateLabel");Ge(this,"gateBarrier");Ge(this,"gateOpen",!1);Ge(this,"gateProgress",0);Ge(this,"lifted",null);Ge(this,"lastQueueKey","");Ge(this,"dragPosition",null);Ge(this,"dragRay",new Go);Ge(this,"vessel",new vt);Ge(this,"buoy",null);Ge(this,"seaLines",new vt);Ge(this,"clock",0);this.pack=t,this.emit=n,this.stage=new Up(e,13226975,[24,27,33],[-2,0,1],38),this.stage.scene.fog=new Fr(13226975,55,120),this.stage.lighting(.8,2.6,.8,.5),this.stage.scene.getObjectByName("key").color.set(16775154),this.stage.scene.getObjectByName("fill").color.set(10274047);const r=this.stage.root,s=St.terminalDeckY,a=St.laneMarkY;this.sea=Ce(r,[140,.2,140],[0,-1,0],ui(Bp,5796771,16,16,.1,.35));const o=rt(9417446,.1,.4);o.transparent=!0,o.opacity=.45,r.add(this.seaLines);for(let y=0;y<50;y++)Ce(this.seaLines,[1+y%5,.012,.028],[-28+y%11*5.6,-.88,-24+Math.floor(y/11)*11],o);Ce(r,[19.5,1.15,17],[2.4,-.28,-.3],ui(ro,ut.dark,4,1,0,.9)),Ce(r,[19.7,.12,17.2],[2.4,.34,-.3],ui(ro,13884390,4,3.5,0,.9)),Ce(r,[2.7,.04,17],[St.serviceLaneX,s,-.3],ui(so,16777215,.5,3,0,.85)),Ce(r,[13.8,.025,1.15],[3.25,a-.015,-7],ui(so,16777215,2.5,.25,0,.85));for(let y=-8;y<8;y+=1.5)Ce(r,[.1,.014,.8],[St.serviceLaneX,a,y],this.cream);for(let y=-2.7;y<9.7;y+=1.35)Ce(r,[.75,.014,.09],[y,a,-7],this.cream);for(let y=-7;y<8;y+=1.2)Ce(r,[.22,.015,.6],[-7.05,s+.01,y],this.yellow),tn(r,.1,.25,[-7.1,s+.05,y],this.steel);for(let y=-6;y<12;y+=3)Ce(r,[.018,.01,16.8],[y,s-.005,-.3],rt(ut.dark));for(const y of[-6.2,-3.8])Ce(r,[.075,.05,15],[y,s+.08,-.3],this.steel);const l=this.vessel;l.position.set(St.sourceVesselX,-.3,-.6),r.add(l);const c=new Uo;c.moveTo(-1.65,-6.8),c.lineTo(1.65,-6.8),c.lineTo(1.65,5.5),c.quadraticCurveTo(1.65,7.2,0,8),c.quadraticCurveTo(-1.65,7.2,-1.65,5.5),c.closePath();const d=new ft(new qs(c,{depth:1.3,bevelEnabled:!0,bevelSegments:2,bevelSize:.2,bevelThickness:.2,steps:1}),rt(ut.darkest,.5,.45));d.rotation.x=-Math.PI/2,d.position.y=-.15,l.add(d),Ce(l,[3.38,.16,11.4],[0,.13,-.7],rt(ut.darker,.3)),Ce(l,[2.7,.9,1.7],[0,1.45,5.8],this.cream),Ce(l,[2.4,.65,1.6],[0,2.15,5.8],this.cream),Ce(l,[2.2,.28,.07],[0,2.25,6.64],rt(1780285,.5,.15)),tn(l,.3,.9,[.7,2.2,4.7],this.gradient),Dt(l,[0,2.4,5.8],[0,4,5.8],.045,this.steel),Dt(l,[-.7,3.5,5.8],[.7,3.5,5.8],.03,this.steel);for(const y of[-1,1])for(let v=-6;v<7;v++)Dt(l,[y*1.55,1.25,v],[y*1.55,1.6,v],.02,this.cream),v<6&&Dt(l,[y*1.55,1.6,v],[y*1.55,1.6,v+1],.015,this.cream);for(let y=-4.8;y<3;y+=2.2)Ce(l,[2.45,.14,1.42],[0,1.02,y],rt(ut.dark,.4)),Ce(l,[2.18,.12,1.2],[0,1.16,y],rt(5991296,.45));const u=[[-.9,0,-4.2],[5.6,0,-4.2],[-9.9,0,5.4],[5.6,0,3.7]];t.zones.forEach((y,v)=>{const T=u[v];if(this.berths.set(y.id,new I(...T)),y.kind==="offshore"){const F=new vt;F.position.set(wn.x,-.3,wn.z),r.add(F),this.buoy=F;const O=tn(F,.45,.4,[0,0,0],rt(Vn,.1,.45));tn(O,.22,1.1,[0,.68,0],this.cream),Dt(O,[0,1.2,0],[0,2,0],.045,this.steel),Dt(O,[-.55,1.65,0],[.55,1.65,0],.035,this.steel),this.berthLabels.set(y.id,this.stage.interact(F,y.label,()=>this.emit({kind:"berth",id:y.id}),[0,2.2,0])),this.addBoard(y.id);return}const C=new vt;C.position.copy(this.berths.get(y.id)),r.add(C),this.berthGroups.set(y.id,C),Ce(C,[5.4,.035,5.1],[0,s+.01,0],rt(y.kind==="landing"?16251388:ut.lightest,0,.8));for(const F of[-1,1])Ce(C,[5.2,.025,.06],[0,s+.04,F*2.45],this.cream);for(let F=-1.7;F<2;F+=.75)Ce(C,[.42,.014,.08],[F,s+.055,1.85],this.yellow);y.kind==="index"&&this.workBerth(C),y.kind==="restore"&&this.restoreYard(C),y.kind==="landing"&&this.landingYard(C);const P=Math.min(1.3,4.6/y.workers),A=[];for(let F=0;F<y.workers;F++){const O=(F-(y.workers-1)/2)*P;Ce(C,[Math.min(.78,P*.8),.012,1.2],[O,s+.015,vn.laneZ-.2],rt(ut.dark,0,.85));for(const ge of[-1,1])Ce(C,[.04,.014,1.2],[O+ge*Math.min(.39,P*.4),s+.02,vn.laneZ-.2],this.cream);const z=new vt;z.position.set(O,s,2.2),C.add(z);const q=Math.min(.34,P*.38);for(const ge of[-1,1])Ce(z,[.07,1,.07],[ge*q,.5,0],this.yellow);Ce(z,[q*2+.14,.09,.14],[0,vn.beamY,0],this.yellow);const H=Ce(z,[.16,.09,.16],[0,1.11,0],rt(ut.dark,.1,.5)),re=new vt;re.position.set(0,vn.idleY,0),z.add(re);const X=[-1,1].map(ge=>tn(re,.012,1,[ge*.16,.5,0],this.steel,6));Ce(re,[q*1.5,.05,.3],[0,0,0],this.steel);const fe={x:O,lamp:H.material,spreader:re,cables:X,drop:0};this.hangSpreader(fe),A.push(fe)}this.loaders.set(y.id,A);const M=Ce(C,[5.3,.012,4.9],[0,s+.036,0],this.gradient.clone()),x=M.material;x.emissiveIntensity=0,x.transparent=!0,x.opacity=0,x.depthWrite=!1,M.castShadow=!1,this.glows.set(y.id,M);const D=new vt;D.position.set(0,s,2.6),C.add(D);for(let F=-2.4;F<2.5;F+=.48)Ce(D,[.42,.5,.06],[F,.3,0],rt(F%.96<.48?ut.darker:ut.lightest,.1,.6));D.visible=!1,this.barriers.set(y.id,D),this.berthLabels.set(y.id,this.stage.interact(C,y.label,()=>this.emit({kind:"berth",id:y.id}),[0,St.equipmentHeight,2.4])),this.addBoard(y.id)});const h=rt(15331061,.35,.4);for(const y of[-4,3]){const v=new vt;v.position.set(-5,.5,y),r.add(v);for(const P of[-1,1]){Dt(v,[P*1.15,0,-.8],[P*.8,5.1,-.8],.1,h),Dt(v,[P*1.15,0,.8],[P*.8,5.1,.8],.1,h),Dt(v,[P*1.15,.7,-.8],[P*.8,4.9,.8],.05,h),Dt(v,[P*1.15,.7,.8],[P*.8,4.9,-.8],.05,h);for(const A of[-.8,.8]){const M=tn(v,.2,.17,[P*1.15,.12,A],this.steel,12);M.rotation.z=Math.PI/2}}for(const P of[-1,1]){Dt(v,[-6,5.1,P*.65],[3,5.1,P*.65],.085,h),Dt(v,[-6,5.7,P*.65],[3,5.7,P*.65],.085,h);for(let A=-6;A<3;A++)Dt(v,[A,5.1,P*.65],[A+.8,5.7,P*.65],.035,h)}const T=new vt;T.position.set(-2,5,0),v.add(T),Ce(T,[1.1,.35,1.5],[0,0,0],this.steel);const C=new vt;C.position.set(0,-2.1,0),T.add(C);for(const P of[-.45,.45])Dt(C,[P,2.1,0],[P,0,0],.012,this.steel);Ce(C,[1.5,.1,1.1],[0,0,0],this.yellow),this.cranes.push(T),this.hooks.push(C)}t.sources.forEach((y,v)=>{const T=this.container(v);T.position.set(St.sourceVesselX,1.2,-5.3+v*1.65),r.add(T),this.containers.set(y.id,T);const C=String(v+1).padStart(2,"0"),P=this.stage.interact(T,`${C} · ${y.label}`,()=>this.emit({kind:"source",id:y.id}),[v%2?1.55:-1.55,1.08,v%2?.16:-.16]);P.classList.add("source-label"),P.textContent=`${C} ${y.label}`,this.sourceLabels.set(y.id,P)}),r.add(this.routes),this.flagMesh=new vt,this.flagMesh.visible=!1,r.add(this.flagMesh),Dt(this.flagMesh,[0,0,0],[0,1,0],.03,this.steel);const m=this.gradient.clone();m.side=2,m.emissiveIntensity=.6;const _=new ft(new Zi(.55,.34),m);_.position.set(.3,.82,0),this.flagMesh.add(_);const g=new vt;g.position.set(St.serviceLaneX,.5,6.8),r.add(g),Ce(g,[1.2,1.4,1.15],[-1.8,.7,0],this.cream),Ce(g,[1.1,.5,.07],[-1.8,.9,.6],rt(1780285,.4,.2)),Ce(g,[1.2,1.4,1.15],[1.8,.7,0],this.cream),this.gateBarrier=new vt,this.gateBarrier.position.set(-1.8,1.1,0),g.add(this.gateBarrier);const p=Ce(this.gateBarrier,[3.6,.14,.14],[1.8,0,0],this.gradient);for(let y=-1.3;y<1.5;y+=.5)Ce(p,[.12,.15,.15],[y,0,0],this.cream);this.gateLabel=this.stage.interact(g,"Open gate",()=>this.emit({kind:"gate",id:""}),[0,2.7,.7]),this.requestBoard=document.createElement("section"),this.requestBoard.className="request-board",this.requestBoard.setAttribute("aria-label","Today's requests"),e.append(this.requestBoard),this.panels.push({element:this.requestBoard,label:this.gateLabel,kind:"gate"});const f=new vt;f.position.set(St.lateLotX+.95,s,St.lateLotZ+.95),r.add(f),Ce(f,[3.6,.03,3.9],[0,0,0],rt(16251388,0,.8));for(let y=-1.6;y<1.9;y+=.55)Ce(f,[.32,.02,.06],[y,.02,-1.85],rt(Vn,0,.5));const w=this.stage.interact(f,"Late lot",()=>{},[0,2.3,-1.6]);w.classList.add("lot-label"),w.tabIndex=-1,w.setAttribute("aria-hidden","true"),this.stage.scene.add(new Yl(15133941,.3)),this.wireDrag(e)}wireDrag(e){let t=!1;const n=this.stage.renderer.domElement,r=new Cn(new I(0,1,0),-.42),s=o=>{const l=n.getBoundingClientRect(),c=new ve((o.clientX-l.left)/l.width*2-1,-(o.clientY-l.top)/l.height*2+1);this.dragRay.setFromCamera(c,this.stage.camera);const d=new I;return this.dragRay.ray.intersectPlane(r,d)?d:null};n.addEventListener("pointerdown",o=>{if(!this.lifted)return;const l=this.containers.get(this.lifted);if(!l)return;const c=n.getBoundingClientRect(),d=new ve((o.clientX-c.left)/c.width*2-1,-(o.clientY-c.top)/c.height*2+1);this.dragRay.setFromCamera(d,this.stage.camera),this.dragRay.intersectObject(l,!0).length&&(t=!0,n.setPointerCapture(o.pointerId))}),n.addEventListener("pointermove",o=>{if(!t||!this.lifted)return;const l=s(o);l&&(this.dragPosition=l)});const a=o=>{if(!t)return;t=!1;const l=this.dragPosition??s(o);if(this.dragPosition=null,l&&this.lifted){let c=null,d=3.2;for(const[u,h]of this.berths){const m=Math.hypot(h.x-l.x,h.z-l.z);m<d&&(d=m,c=u)}c&&this.emit({kind:"berth",id:c})}};n.addEventListener("pointerup",a),n.addEventListener("pointercancel",()=>{t=!1,this.dragPosition=null})}workBerth(e){Ce(e,[4.7,1.35,1.25],[0,1.1,-2],rt(ut.lightest,.1,.5));const t=Ce(e,[4.95,.1,1.6],[0,1.84,-2],rt(ut.darker,.5,.45));t.rotation.x=-.07;for(let n=-1.7;n<=1.8;n+=1.1){Ce(e,[.8,1,.06],[n,.99,-1.34],this.steel);for(let r=0;r<7;r++)Ce(e,[.76,.02,.03],[n,.58+r*.12,-1.3],rt(ut.dark,.6,.4))}for(const n of[-1,1])Ce(e,[.16,.6,.16],[n*2.15,.72,.5],this.yellow),tn(e,.12,.08,[n*1.2,.51,1.15],this.steel,12);Ce(e,[1.45,.12,.8],[0,.62,.75],rt(ut.darker,.5,.4))}restoreYard(e){for(const t of[-1,1]){for(const n of[1.35,2.25]){Ce(e,[.12,1.65,3.35],[t*n,1.25,.05],this.steel);for(let r=0;r<3;r++)Ce(e,[.78,.06,3.18],[t*(n-.22),.62+r*.55,.05],this.yellow)}Dt(e,[t*2.4,2.2,-1.8],[t*2.4,2.2,1.9],.04,this.steel)}Ce(e,[3.75,.1,3.8],[0,2.22,.05],rt(ut.darker,.5,.45));for(let t=-1.2;t<1.3;t+=1.2)Ce(e,[.5,.014,2.9],[t,.5,.05],rt(ut.dark));Ce(e,[.8,.48,.62],[0,.74,1.4],rt(ut.lightest,.2,.5));for(const t of[-1,1]){const n=tn(e,.13,.08,[t*.34,.55,1.55],this.steel,10);n.rotation.z=Math.PI/2}}landingYard(e){for(const n of[-1,1])Ce(e,[.08,.55,3.4],[n*.7,.78,.2],this.steel);for(let n=-1.3;n<1.9;n+=.23){const r=tn(e,.065,1.4,[0,1.08,n],this.cream,12);r.rotation.z=Math.PI/2}Ce(e,[1.8,.12,.8],[0,2.15,.2],this.yellow);for(const n of[-1,1])Ce(e,[.12,1.6,.12],[n*.85,1.36,.2],this.yellow);const t=new ft(new Dr(.72,1.1,4),rt(ut.dark,.4,.45));t.position.set(0,1.1,-1.55),t.rotation.y=Math.PI/4,t.castShadow=!0,t.receiveShadow=!0,e.add(t),Ce(e,[1.1,.1,1.1],[0,.52,-1.55],this.steel);for(const n of[-1,1])Ce(e,[.1,.58,.1],[n*.45,.78,-1.55],this.yellow)}container(e){const t=new vt,n=ui(Op,this.colors[e%this.colors.length],2,1,.35,.55);n.emissive.set(zi),n.emissiveIntensity=0,this.paints.set(this.pack.sources[e].id,n),Ce(t,[2.25,.83,1.25],[0,.42,0],n);for(let r=-1;r<=1;r+=.17)for(const s of[-1,1])Ce(t,[.042,.72,.03],[r,.43,s*.64],n);for(const r of[-1,1]){for(const s of[-1,1])Ce(t,[.045,.7,.045],[r*1.15,.42,s*.33],this.cream);for(const s of[-1,1])Ce(t,[.09,.08,.1],[r*1.13,.8,s*.59],this.steel)}return t}hangSpreader(e){const t=vn.idleY+(vn.busyY-vn.idleY)*e.drop;e.spreader.position.y=t;const n=vn.beamY-t;e.cables.forEach(r=>{r.scale.y=n,r.position.y=n/2})}addBoard(e){const t=document.createElement("div");t.className="berth-board",this.stage.host.append(t),this.boards.set(e,t);const n=this.berthLabels.get(e),r=s=>t.classList.toggle("expanded",s);n.addEventListener("pointerenter",()=>r(!0)),n.addEventListener("pointerleave",()=>r(!1)),n.addEventListener("focus",()=>r(!0)),n.addEventListener("blur",()=>r(!1)),this.panels.push({element:t,label:n,kind:"berth"})}separateSourceLabels(e,t){const n=(d,u)=>d.x<u.x+u.w&&u.x<d.x+d.w&&d.y<u.y+u.h&&u.y<d.y+d.h,r=d=>{const u=d.offsetWidth,h=d.offsetHeight;return{x:parseFloat(d.style.left)/100*e-u/2,y:parseFloat(d.style.top)/100*t-h/2,w:u,h}},s=[],a=[];for(const d of this.stage.labels){const u=d.element,h=u.classList.contains("truck-label")&&u.classList.contains("shown")&&u.classList.contains("parked");u.hidden||u.classList.contains("truck-label")&&!h||u.classList.contains("lot-label")||!u.style.left||(u.classList.contains("source-label")||h?a.push({element:u,box:r(u)}):s.push(r(u)))}const o=this.stage.host.getBoundingClientRect(),l=this.screenPanels().map(d=>d.getBoundingClientRect()).filter(d=>d.width>0&&d.height>0).map(d=>({x:d.left-o.left,y:d.top-o.top,w:d.width,h:d.height}));a.sort((d,u)=>d.box.y-u.box.y||d.box.x-u.box.x);const c=[...s,...l];for(const{element:d,box:u}of a){const h=u.h+4,m=l.filter(w=>n(u,w)).map(w=>w.x+w.w+4-u.x).filter(w=>w>0),_=[[0,0],[0,h],[0,-h],[0,2*h],[0,-2*h],...m.flatMap(w=>[[w,0],[w,h],[w,-h],[w,2*h],[w,-2*h]])],g=(w,y)=>c.reduce((v,T)=>{const C={...u,x:u.x+w,y:u.y+y};return v+Math.max(0,Math.min(C.x+C.w,T.x+T.w)-Math.max(C.x,T.x))*Math.max(0,Math.min(C.y+C.h,T.y+T.h)-Math.max(C.y,T.y))},0);let p=[0,0],f=1/0;for(const[w,y]of _){const v=g(w,y);if(v<f&&(f=v,p=[w,y]),!v)break}d.style.translate=p[0]||p[1]?`${p[0]}px ${p[1]}px`:"",c.push({...u,x:u.x+p[0],y:u.y+p[1]})}}placePanels(){const e=this.stage.host,t=e.getBoundingClientRect(),n=e.clientWidth,r=e.clientHeight;if(!n||!r)return;this.separateSourceLabels(n,r);const s=16,a=72,o=r-72,l=g=>({x:g.left-t.left,y:g.top-t.top,w:g.width,h:g.height}),c=g=>{const p=g.getBoundingClientRect();return p.width>0&&p.height>0?l(p):null},d=(g,p)=>Math.max(0,Math.min(g.x+g.w,p.x+p.w)-Math.max(g.x,p.x))*Math.max(0,Math.min(g.y+g.h,p.y+p.h)-Math.max(g.y,p.y)),u=[];for(const g of this.stage.labels){if(g.element.classList.contains("truck-label")&&!g.element.matches(".shown.parked"))continue;const p=c(g.element);p&&u.push({box:p,weight:g.element.classList.contains("lot-label")?1:20})}for(const g of this.screenPanels()){const p=c(g);p&&u.push({box:p,weight:8})}const h=this.shipBoxes(n,r),m=[],_=this.panels.filter(g=>!g.element.hidden).map(g=>({panel:g,label:c(g.label)})).filter(g=>!!g.label).sort((g,p)=>(g.panel.kind==="gate"?-1:0)-(p.panel.kind==="gate"?-1:0)||g.label.y-p.label.y);for(const{panel:g,label:p}of _){const f=g.element.offsetWidth,w=g.element.offsetHeight,y=p.x+p.w/2,v=p.y+p.h/2,T=[];if(g.kind==="gate"){T.push([p.x+p.w+14,v-w/2],[n,p.y-8-w],[p.x+p.w-f,p.y-8-w],[n,r]);for(let x=a;x<o-w;x+=16)T.push([n,x])}else{for(let x=0;x<5;x++)for(const D of[0,-1/3,1/3,-2/3,2/3,-1,1])T.push([y-f/2+D*f,p.y-6-w-x*28]),T.push([y-f/2+D*f,p.y+p.h+6+x*28]);T.push([p.x+p.w+6,v-w/2],[p.x-6-f,v-w/2])}let C=null,P=1/0;const[A,M]=T[0];for(const[x,D]of T){const F={x:Math.max(s,Math.min(n-s-f,x)),y:Math.max(a,Math.min(o-w,D)),w:f,h:w};let O=Math.hypot(F.x-A,F.y-M)*20;for(const z of m)O+=d(F,z)*40;for(const z of u)O+=d(F,z.box)*z.weight;O+=d(F,p)*60;for(const z of h)O+=d(F,z)*2;O<P&&(P=O,C=F)}C&&(m.push(C),g.element.style.left=`${Math.round(C.x)}px`,g.element.style.top=`${Math.round(C.y)}px`)}}shipBoxes(e,t){const n=new Pn().setFromObject(this.vessel);if(n.isEmpty())return[];const r=8,s=[];for(let a=0;a<r;a++){const o=n.min.z+(n.max.z-n.min.z)*a/r,l=n.min.z+(n.max.z-n.min.z)*(a+1)/r;let c=1/0,d=1/0,u=-1/0,h=-1/0;for(const m of[n.min.x,n.max.x])for(const _ of[n.min.y,n.max.y])for(const g of[o,l]){const p=new I(m,_,g).project(this.stage.camera),f=(p.x+1)/2*e,w=(1-p.y)/2*t;c=Math.min(c,f),u=Math.max(u,f),d=Math.min(d,w),h=Math.max(h,w)}s.push({x:c,y:d,w:u-c,h:h-d})}return s}panelRects(){return this.panels.filter(e=>!e.element.hidden).map(e=>({kind:e.kind,left:e.element.offsetLeft,top:e.element.offsetTop,width:e.element.offsetWidth,height:e.element.offsetHeight}))}lanesFor(e){if(this.laneCache.simulation===e)return this.laneCache.lanes;const t=new Map;for(const n of this.pack.zones){const r=Array(n.workers).fill(0);e.requests.filter(s=>s.zoneId===n.id&&s.service>0).sort((s,a)=>s.start-a.start||s.finish-a.finish).forEach(s=>{let a=r.findIndex(o=>o<=s.start+1e-9);a<0&&(a=r.indexOf(Math.min(...r))),r[a]=s.finish,t.set(s.id,a)})}return this.laneCache={simulation:e,lanes:t},t}anchor(e,t=[0,1.4,0]){const n=e.localToWorld(new I(...t)).project(this.stage.camera);return{left:(n.x+1)/2*100,top:(1-n.y)/2*100}}containerAnchor(e,t=[0,1.3,0]){const n=this.containers.get(e);return n?this.anchor(n,t):null}setLifted(e){this.lifted=e;const t=e?this.pack.sources.find(n=>n.id===e):null;for(const n of this.pack.zones){const r=!t||Ir(this.pack,t.id).includes(n.id),s=this.barriers.get(n.id);s&&(s.visible=!!t&&!r);const a=this.berthLabels.get(n.id);if(a){const o=t&&!r?`${n.label}: ${t.blocked[n.id]}`:n.label;a.title=o,a.setAttribute("aria-label",o)}}}targetFor(e,t,n){const r=e.plan[t],s=this.pack.zones.find(c=>c.id===(r==null?void 0:r.zoneId));if(!r||!s||s.kind==="offshore"){const c=this.lifted===t;return{position:new I(St.sourceVesselX,c?1.2+St.liftHeight:1.2,-5.3+n*1.65),arc:!1}}const o=this.pack.sources.filter(c=>{var d;return((d=e.plan[c.id])==null?void 0:d.zoneId)===s.id}).findIndex(c=>c.id===t);return{position:this.berths.get(s.id).clone().add(new I((o%2-.5)*2.45,.5+Math.floor(o/4)*.9,Math.floor(o/2)%2*1.55)),arc:!0}}update(e,t,n){var d;const r=this.stage.reduced.matches;r||(this.clock+=n,this.vessel.position.y=-.3+Math.sin(this.clock*.4)*.035,this.vessel.rotation.z=Math.sin(this.clock*.33)*.012,this.vessel.rotation.x=Math.cos(this.clock*.27)*.007,this.buoy&&(this.buoy.position.y=-.3+Math.sin(this.clock*.9+1.4)*.07),this.seaLines.position.x=this.clock*.12%5.6,this.cranes.forEach((u,h)=>{u.position.x=e.mode==="committed"?-2+Math.sin(e.seconds*.06+h)*1.8:-2+Math.sin(this.clock*.08+h*2)*.5})),this.pack.sources.forEach((u,h)=>{const m=this.sourceLabels.get(u.id),_=this.paints.get(u.id),g=this.lifted===u.id?.55:0;_.emissiveIntensity+=(g-_.emissiveIntensity)*Math.min(1,n*8),m.textContent=`${String(h+1).padStart(2,"0")} ${u.label}`,m.setAttribute("aria-pressed",String(this.lifted===u.id));const p=this.containers.get(u.id);if(this.dragPosition&&this.lifted===u.id){p.position.set(this.dragPosition.x,St.terminalDeckY+1.4,this.dragPosition.z),this.tweens.delete(u.id);return}const{position:f,arc:w}=this.targetFor(e,u.id,h);let y=this.tweens.get(u.id);(!y||y.to.distanceToSquared(f)>4e-4)&&(y={from:p.position.clone(),to:f.clone(),t:0,duration:r?.001:St.carrySeconds,arc:w?St.arcHeight:0},this.tweens.set(u.id,y)),y.t=Math.min(1,y.t+n/y.duration);const v=oo(y.t);p.position.lerpVectors(y.from,y.to,v),p.position.y+=Math.sin(v*Math.PI)*y.arc,y.t>=1&&this.landing.delete(u.id)&&this.onLand(u.id)});for(const u of this.pack.zones){if(u.kind==="offshore")continue;const h=this.glows.get(u.id);if(!h)continue;const m=this.lifted?Ir(this.pack,this.lifted).includes(u.id):!1,_=h.material,g=m?r?.75:.65+Math.sin(this.clock*3)*.12:0;_.opacity+=(g-_.opacity)*Math.min(1,n*6),_.emissiveIntensity=_.opacity*1.3}if(this.flagMesh&&(this.flagMesh.visible=!!e.flag,e.flag)){const u=this.containers.get(e.flag);u&&(this.flagMesh.position.copy(u.position),this.flagMesh.position.x-=1.3,this.flagMesh.position.y-=.5)}const s=`${this.lifted}:${JSON.stringify(e.plan)}`;if(s!==this.routeKey&&(this.routes.children.forEach(u=>{u instanceof As&&(u.geometry.dispose(),u.material.dispose())}),this.routes.clear(),this.routeKey=s,this.lifted)){const u=this.pack.sources.find(_=>_.id===this.lifted),h=this.pack.sources.indexOf(u),m=e.plan[u.id];if(m){const _=this.berths.get(m.zoneId),g=[[St.sourceVesselX,2.2,-5.3+h*1.65],[-6.8,1,-5.3+h*1.65],[_.x,1,_.z]];((d=this.pack.zones.find(y=>y.id===m.zoneId))==null?void 0:d.kind)==="offshore"&&g.push([St.serviceLaneX,.7,5.5]);const p=new on().setFromPoints(g.map(y=>new I(...y))),f=new Ke(zi),w=new Ke(Vn);p.setAttribute("color",new Bt(g.flatMap((y,v)=>f.clone().lerp(w,v/(g.length-1)).toArray()),3)),this.routes.add(new As(p,new wo({vertexColors:!0})))}}const a=t?this.lanesFor(t):null;for(const[u,h]of this.loaders){const m=new Set;if(t&&a)for(const _ of t.requests){if(_.zoneId!==u)continue;const g=Ds(_,e.seconds);(g==="preparing"||g==="in service")&&m.add(a.get(_.id)??0)}h.forEach((_,g)=>{const p=m.has(g)?1:0;_.drop+=(p-_.drop)*Math.min(1,r?1:n*5),this.hangSpreader(_),_.lamp.color.set(m.has(g)?co:ut.dark),_.lamp.emissive.set(m.has(g)?co:0),_.lamp.emissiveIntensity=m.has(g)?.9:0})}this.placePanels();const o=this.gateOpen?1:0;if(this.gateProgress+=(o-this.gateProgress)*Math.min(1,n*(r?40:4)),this.gateBarrier.rotation.z=-Math.PI/2.4*this.gateProgress,!t){this.trucks.forEach(u=>{u.visible=!1}),this.boats.forEach(u=>{u.visible=!1});return}const l=new Map;let c=0;t.requests.forEach(u=>{var P,A;const m=this.pack.zones.find(M=>M.id===u.zoneId).kind==="offshore";let _=this.trucks.get(u.id);if(!_){if(_=new vt,this.stage.root.add(_),this.trucks.set(u.id,_),_.position.set(St.serviceLaneX,m?-.3:.5,m?7.2:7.4),m)Ce(_,[.55,.35,1.4],[0,.2,0],this.cream),Ce(_,[.4,.3,.5],[0,.45,-.2],this.yellow);else{Ce(_,[.6,.42,1.2],[0,.43,0],this.cream),Ce(_,[.58,.45,.5],[0,.58,.78],this.yellow),Ce(_,[.51,.2,.02],[0,.67,1.04],rt(1780285,.4,.2));for(const D of[-1,1])for(const F of[-.4,.72]){const O=tn(_,.18,.1,[D*.33,.2,F],this.steel,10);O.rotation.z=Math.PI/2}}const M=this.pack.sources.find(D=>D.id===u.sourceId).label.split(" ")[0],x=this.stage.interact(_,M,()=>this.stage.host.dispatchEvent(new CustomEvent("request-selected",{detail:u.id})),[0,.95,0]);x.classList.add("truck-label"),this.truckLabels.set(u.id,x)}const g=u.arrival<=e.seconds,p=this.berths.get(u.zoneId),f=Ds(u,e.seconds),w=f==="access-denied"||f==="access-unknown"||f==="expired",y=this.stage.hover===_||this.selectedRequest===u.id||f==="late"||w;(P=this.truckLabels.get(u.id))==null||P.classList.toggle("shown",y);let v=this.truckStages.get(u.id);v||(v={stage:"hidden",timer:0},this.truckStages.set(u.id,v)),f==="not released"?(v.stage="hidden",v.timer=0):f==="placement wait"?(v.stage="approach",v.timer=0):f==="queue"?(v.stage="queue",v.timer=0):f==="preparing"||f==="in service"?(v.stage="service",v.timer=0):f==="late"?v.stage="late-lot":w?v.stage!=="sign"&&v.stage!=="exit"&&v.stage!=="gone"?(v.stage="sign",v.timer=0):v.stage==="sign"?(v.timer+=n,v.timer>(r?.05:1.1)&&(v.stage="exit",v.timer=0)):v.stage==="exit"&&(v.timer+=n):f==="met"&&(v.stage!=="exit"&&v.stage!=="gone"?(v.stage="exit",v.timer=0):v.stage==="exit"&&(v.timer+=n)),v.stage==="exit"&&v.timer>(r?.05:1)&&(v.stage="gone");let T;switch(v.stage){case"approach":T=m?new I(-9,-.3,7.4):new I(St.serviceLaneX,.5,p.z);break;case"queue":{const M=l.get(u.zoneId)??0;l.set(u.zoneId,M+1),T=m?new I(wn.x-M*.9,-.3,wn.z+1):new I(p.x+3.4+Math.floor(M/2)*.8,.5,p.z+2.2+M%2*1.4);break}case"service":{const x=(this.loaders.get(u.zoneId)??[])[this.lanesFor(t).get(u.id)??0];T=m?new I(wn.x,-.3,wn.z):new I(p.x+((x==null?void 0:x.x)??0),.5,p.z+vn.laneZ);break}case"sign":T=m?new I(wn.x,-.3,wn.z):new I(p.x+3.4,.5,p.z+3.6);break;case"late-lot":{const M=c++;T=new I(St.lateLotX+M%2*1.9,.5,St.lateLotZ+Math.floor(M/2)*1.9);break}case"exit":case"gone":T=m?new I(-9,-.3,7.4):new I(St.serviceLaneX,.5,9.6);break;default:T=_.position}_.visible=g&&v.stage!=="gone"&&v.stage!=="hidden";let C=this.tweens.get(`truck:${u.id}`);(!C||C.to.distanceToSquared(T)>4e-4)&&(C={from:_.position.clone(),to:T.clone(),t:0,duration:r?.001:.7,arc:0},this.tweens.set(`truck:${u.id}`,C)),C.t=Math.min(1,C.t+n/C.duration),_.position.lerpVectors(C.from,C.to,oo(C.t)),(A=this.truckLabels.get(u.id))==null||A.classList.toggle("parked",v.stage==="late-lot"),this.markSign(_,f,v.stage==="sign"||v.stage==="late-lot"||v.stage==="exit"&&w)}),this.trucks.forEach((u,h)=>{t.requests.some(m=>m.id===h)||(u.visible=!1)})}markSign(e,t,n){let r=e.getObjectByName("sign");if(!n){r&&(r.visible=!1);return}if(!r){const s=t==="late"?new Ln(.1,.3,.3):new Dr(.22,.35,t==="access-denied"?8:3),a=t==="late"?Vn:t==="access-denied"?zi:t==="access-unknown"?Cr:ut.dark,o=rt(a,0,.5);o.emissive.set(a),o.emissiveIntensity=.35,r=new ft(s,o),r.name="sign",r.position.set(0,1.1,0),e.add(r)}r.visible=!0}showGhosts(e){this.ghosts.forEach(t=>{this.stage.root.remove(t)}),this.ghosts=e.map(t=>{const n=new vt;n.position.set(t.x,.55,t.z),this.stage.root.add(n);const r=Ce(n,[.5,.05,.5],[0,0,0],rt(Vn,0,.6));return r.material.transparent=!0,r.material.opacity=.5,n})}clearGhosts(){this.ghosts.forEach(e=>this.stage.root.remove(e)),this.ghosts=[]}berthWorldXZ(e){const t=this.berths.get(e);return t?{x:t.x,z:t.z}:null}}const kr=document.createElement("span");kr.style.cssText="position:fixed;width:1rem;height:1rem;visibility:hidden;pointer-events:none";document.body.append(kr);const $o=new ResizeObserver(i=>document.body.classList.toggle("large-type",i[0].contentRect.width>25));$o.observe(kr);window.addEventListener("pagehide",()=>{$o.disconnect(),kr.remove()},{once:!0});function le(i,e="",t=""){const n=document.createElement(i);return n.textContent=e,n.className=t,n}function Ct(i,e,t=""){const n=le("button",i,t);return n.type="button",n.addEventListener("click",e),n}const Vp="data:audio/mpeg;base64,SUQzBAAAAAAAIlRTU0UAAAAOAAADTGF2ZjYyLjMuMTAwAAAAAAAAAAAAAAD/+3DAAAAAAAAAAAAAAAAAAAAAAABJbmZvAAAADwAAAAoAAA14AC4uLi4uLi4uLkVFRUVFRUVFRUVdXV1dXV1dXV1ddHR0dHR0dHR0dIuLi4uLi4uLi4uioqKioqKioqKiurq6urq6urq6utHR0dHR0dHR0dHo6Ojo6Ojo6Ojo/////////////wAAAABMYXZjNjIuMTEAAAAAAAAAAAAAAAAkBpAAAAAAAAANeJtir/wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA//twxAAADuEBEBTFgAJzQih3MNABpTtbXv3vx2DcCYjozgSBID2TygEABAAgCQsG8AAAgHBMVJY7yfaZLHeO8d5vbDQ3Nzd8Ghock0NGVy/Ybvhhoyv/9jKk0OM977/l7/+XvfcMZsZ///7GMp5oaBjNS4PwfB8/EYPyn1AgcrBCt/wffl3/ygY//B/a6RMtlINhxtmpRiNBDlKprGBb6orTs0Usp1MYArwFi0RgkcyRMFsBrE4M0R4smA0zo7zA8pOaGxqMGX0jrGy2oUTNMNwpDwHoO9BJNkUlqWzrKaR03KCzybVvZDbHudl8rNyTWky3e6z2yqtFZLnTdNNCv/09tPWmeNmJpSNJ80QNP//f/f1Gx5M0MGc6bPWz/////Xv///9BazhVOEQ1ZBAZXbEyh6C+kGCAKP/7csQIABFk71X89gAKYjHrIPYZuRTtTjs62I6EGEkELLYUJ6F2C0VXBfOX3KtrFB+fD2CyU3dOEpaIhYq8we3pA5dAJ8MtKHGFhwtcZSU5gsNJ8cIZKPaY4U0brZ9DiNRLLF1zl5n9vnQ/s9szMys28CdcDtS9XBzreR1f2I5m+n724R7WlyfGXacYng+/i4MAAAAgi2J85CDhUGSAllzOETcsikO4sCpIOg4Y7Y4BQNgnN17l2/fSOiWIigqIv3zhOltU/Oz+r7ESM0pz9X2+Yc/mPDwW1mCSRG+YRJEaMnYJmXB6bvhOoTaHTyoQts7pynl8/SAIW3Z+UoseIIOg+Xp52FpSomWz28LQa9ghfMf8EQLZ7uLw/UGu4z/IjUDKdPnXO+tJggLgBABsa1lo4vzlDBo1CNsx//twxAiA0d1XWwywy4oOJ+wQ8w7pvTCQBIBoHRiaxhUfKhOJzqETkAogaHE9YVVplg6LR0fZWesaUbea6gEdZlPklUry8ydgMUSSZ7GExS4Fo4jJrQeqjmNZznKPRznL0y/eeazzm2ajJ1L8u6k4fMfC5VNO9XA5ofKnou9Ub5NrnAoHL0nyY0qcLhVY8Wf8z/0oAYAAAEoCnP8eRJR1l9E8J2A6A5QJcFImWo/EWttEeDG1A5pubIh76Hpn05LDpZZJDPCAAlC4pA8Q1mZO/+9es7Su1qTQdNECFEaLq2x0TsuLQuUaMdssz6VJWVstuI6VhIun+IP5dl6X2FoDmhrKGxodypVim22P/B6qpHyF/5d+hndVIQqiDohrdBgnJbiX+BIEW4bQyS6WKkK1yYdJgUfc2plFY//7csQRABJZoVrMMRaKNK/pxYYaOlNSpxn2nO0vKsyobDNJmytOT2D4mjN3awVoyKXj1zsW1PVuxWhIfGk42lweG2PDIDGKOiTrGqorjWaLlWe/ri9r4eU5oaKlH/V9cNF71x8tsNVa42dfhYmGR4uD5D5Zg6rlqubptvi2fvh66fG2b8iQAUAqkB2aDkRBBzAFwnYT1aLJEyWAwBTQ070Mv9DkxJKSkE8dTnPrWwGC61bratZ9vCVSuv1r1QlsP378zJ7qVdt/vP210vE6yXQWVYta2vfWWvrSz+KmKqtanl21k7M2WPGAFIjvdH5///WtvdSbvkxrb+z9t5Wb8zzeMlSPQXuef7nHOlj9qhwl1AUmADAAAACTSAXpwmgJ+BWqDIZfGUBYl2Ja2J74Ol2KZDwuS0G/huCH//twxBOBkwWxRSy8tcpJLCehl644YfbedLT6kBGmKd/Epu1KSMI2GKW9PNznYs23rd/LHq9rGccRa5rXe4/1JCGVjGIVL13TM1a6/tS9G7Fr4znVovraN5HftHXQ+sR62xXFv/j/Vs+owXNe0+r30YOts4iplDI95lFqGMRSku1f/0/MPQUEAFAIOij7ICXgFqpqkBwrNxoZxFqPmvVdzi+IRH5SJag4tYhbjRPyGqtwJWFrERhu2yPbD2NRiQaN39SVqXR7SSaFGh2zqPTMCsNl1Jt7PK4xLKZRIMeOrR4sfcK31mt+1t7iPurc7KVu5u97HtJwlCKSqNRxfzUti65p9Oq5ZX8X1810etddSjU8sB0M3T3/wlUCQMZpxoIketeNC2AQVhQMCHMaQlfGVg5YyIYU4Rfdrv/7csQQAhKVYzQsJhpCCCSnHYeeOLsYSVncKjMFRrLCxK0l1wSOhrZ3dSLC7OpG2qD73aSMtvPrZOajbbMntkkkSLEspETqiIJ5AxCWMimlRSZ2odzhSNzx1JjtjiaK0aU6koxpGRNiJJl2s1U/WjdFaLKd2Wasqyv+9aqSk1IJGZiiEieq3/7w2c0oNGNJczqMJ0pH/JBLbfpja9nULhKcyuHY6+LImrs7h24qYqtaU9RyrNBhhiw9Vd7esanZouSYM1vm3wdDqto0S1YMWS1dyVi/Ff7bxGzhlCMG3Bxu14mfjUaf9G4vYx2Sp1nQ5H2NEUCgcYXVDKt928RQmZkSJEO6lhI8Jm///1oBCNAxQ97E8pA1qFCEDCDDklNXgMYQMEXImAkHdQdCNCSIZgPA5UizDTB6jAqk//twxBcAEvElJk0mWko/q+Slp6p528ULh+Hpt9m8VrlMxQ2eyrm5RASYU9Z//wrIB5MagoXpcu8p15nAlcm7IrCzTRSpE0AbhDnPoo6j7Vu9z6mWVS+kmgYzAmzRJSSNFrHDQQjGCXj6KbLQq62SfWVgkLE1gajv3EoK9Qb5sIAkTIY4BHzAoTdUllIB1DgEQM6ELZqUiT4OZjQ4VBvypgnk48RYa/9vT+y1+WY3qrmJiQIEonltQ3kU6oKlUQZr/+DNBuEchuU0lq6iubbSV3tmca1xbwMxV3SC3hnhYbfZzF/+d6hV/ewodV1Jum4MSBv4pu2N2ZCEEMGlmR9UnP/Usle6afmqpv1YiFxR9TdKcxoVPgQzBRAYBms2mgQiRMOGXOMQgfjBIodIqkVGjrkmjY1ANDiGtv/7csQVAxNI/xYN6wJCOCmijrUgAJW1wFMYIgSXONFZgQoahamfpKmVTLdVDs06W3uTtWKgkL5w7S5543Zqexz3YzcWXVKWls4xGW4O9IZmqOTGm4Z5dv6/942sNdzrdobUV5n+se/hvHHLHLX4Y1ZWpGQWQkarBl1gmMiK/9ncWIk///uBBIAiMerPEsM69GQ7wmQCBjNTZcbmmRVBUi7i2Zc6SDT2C4gKaCKSaC0Ysk+MESIaI8DhNTozo1wyiz548TBeUmYJjNEIk5xBZ0ThKroqSNzU2JoymZbHwVy65eRNE1umWjQzBAY2TyW7WSWjRX6zdBI+1NFFT9l1oIGQgiiyk1Lqpf9GkyvU338xdlnkVQgFmAAAAADAg/mM8Efi+ryrES1XSmVYtO/C56OVqEfh9HLnszJc//twxBMAEuHfGtmFgAnYn5zPsLAAdUlXwAyq82PHUjZ3yrB8uPsJRWTCV8V77i89Btbnf/rD7bLZSpcbPScrt/+4rZTEDZJyqVoued//+YZTGbK2U6UYlu1st////Z7Pqbqb301tNOsa2EWqNr////+99vfb373773///+k2kmwkSOCsig0AAABxuSxn3BgzQ83PNRS3rq1XBWFUFWKu1QEu6XJAKNwQQRSaoNwD4B8OkmnWtaampq7/2tRSc63EoEIBIAIEUt+Wtr3Od+2uWtbpEonQNweg9E485zq///hznOc50///t4cbGxsbAqGv4NA0DQd/9YKgqCoNKkxBTUUzLjEwMKqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqv/7csQeA8AAAaQAAAAgAAA0gAAABKqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqq",Hp=""+new URL("flag-right-D8Ujtn2t.mp3",import.meta.url).href,qp=""+new URL("flag-wrong-Cy1EqUSw.mp3",import.meta.url).href,Wp=""+new URL("flag-BGmD8DuW.mp3",import.meta.url).href,Xp=""+new URL("gate-tm0b9ojR.mp3",import.meta.url).href,Yp=""+new URL("lift-VlvlrlNC.mp3",import.meta.url).href,$p=""+new URL("retention-DsWcDGk_.mp3",import.meta.url).href,Zp=""+new URL("set-down-BFXg-_LW.mp3",import.meta.url).href,Kp=""+new URL("truck-late-DayEf6Yk.mp3",import.meta.url).href,Jp=""+new URL("truck-met-nODI51lk.mp3",import.meta.url).href,jp=""+new URL("turned-back-CB2Ebhdl.mp3",import.meta.url).href;function Qp({sfx:i={},beds:e={},gains:t={},storageKey:n="audio.muted"}={}){const r={master:.8,sfx:1,bed:.55,duck:.3,...t},s=window.__audioLog||(window.__audioLog=[]);let a=null,o,l,c,d=null,u=null,h=null;const m=new Map,_=new Map;let g=!1;try{g=localStorage.getItem(n)==="1"}catch{}const p=(v,T)=>fetch(T).then(C=>C.arrayBuffer()).then(C=>a.decodeAudioData(C)).then(C=>{m.set(v,C),v===u&&w()}).catch(C=>console.warn(`[audio] ${v} failed to load`,C));function f(){removeEventListener("pointerdown",f,!0),removeEventListener("keydown",f,!0),a=new(window.AudioContext||window.webkitAudioContext),o=a.createGain(),o.gain.value=g?0:r.master,o.connect(a.destination),l=a.createGain(),l.gain.value=r.sfx,l.connect(o),c=a.createGain(),c.gain.value=r.bed,c.connect(o),document.hidden&&a.suspend();for(const[v,T]of Object.entries({...i,...e}))p(v,T)}addEventListener("pointerdown",f,!0),addEventListener("keydown",f,!0),document.addEventListener("visibilitychange",()=>{a&&(document.hidden?a.suspend():a.resume())});function w(){if(d){try{d.stop()}catch{}d=null}const v=u&&m.get(u);v&&(d=a.createBufferSource(),d.buffer=v,d.loop=!0,d.connect(c),d.start())}const y={play(v,{gain:T=1,rate:C=1,overlap:P=!1}={}){s.push(v);const A=a&&m.get(v);if(!A||g||document.hidden)return;const M=a.currentTime,x=!P&&_.get(v);if(x){x.g.gain.setTargetAtTime(0,M,.01);try{x.src.stop(M+.05)}catch{}}const D=a.createBufferSource(),F=a.createGain();D.buffer=A,D.playbackRate.value=C,F.gain.value=T,D.connect(F).connect(l),D.start(),P||(_.set(v,{src:D,g:F}),D.onended=()=>{var O;((O=_.get(v))==null?void 0:O.src)===D&&_.delete(v)})},bed(v){v!==u&&(u=v,s.push("bed:"+v),a&&w())},duck(v=1500){if(!a)return;const T=a.currentTime,C=c.gain;C.cancelScheduledValues(T),C.setTargetAtTime(r.bed*r.duck,T,.08),C.setTargetAtTime(r.bed,T+v/1e3,.4)},setMuted(v){g=!!v;try{localStorage.setItem(n,g?"1":"0")}catch{}o&&o.gain.setTargetAtTime(g?0:r.master,a.currentTime,.03),h&&(h.textContent=g?"Sound off":"Sound on",h.setAttribute("aria-pressed",String(!g)))},get muted(){return g},get loaded(){return[...m.keys()]},mountToggle(v){if(v.tagName!=="BUTTON"){const T=document.createElement("button");T.type="button",v.appendChild(T),v=T}return h=v,v.addEventListener("click",()=>y.setMuted(!g)),y.setMuted(g),v}};return y}const em=Object.fromEntries(Object.entries(Object.assign({"./evidence.mp3":Vp,"./flag-right.mp3":Hp,"./flag-wrong.mp3":qp,"./flag.mp3":Wp,"./gate.mp3":Xp,"./lift.mp3":Yp,"./retention.mp3":$p,"./set-down.mp3":Zp,"./truck-late.mp3":Kp,"./truck-met.mp3":Jp,"./turned-back.mp3":jp})).map(([i,e])=>[i.slice(2,-4),e])),nn=Qp({sfx:em,storageKey:"port.muted"});Object.assign(window,{__dbg:{...window.__dbg,audio:nn}});const tm=1,nm="investigation",im="1.1.0",rm="Store six data sources so urgent searches finish on time.",sm="A security team needs six data sources stored before an investigation. Each truck is a search request with a deadline. Fast storage is small, and the budget is tight.",am="Synthetic learning model. All costs, capacity, retention, timings, routes, and access results are fictional scenario assumptions. These zones are not Splunk storage tiers. No product feature or price claim is verified. Confirm the actual architecture, support, and permissions with a qualified reviewer.",om="Get every urgent truck served on time without going over budget.",cm="volume units",lm=[7,30,90],dm=[{id:"work",label:"1 · Fast storage",kind:"index",capacity:7,workers:2,storagePerUnitDay:.3,description:"Ready to search the moment a request arrives. Little space."},{id:"stage",label:"2 · Restore yard",kind:"restore",capacity:12,workers:1,storagePerUnitDay:.06,description:"Plenty of space and uses little budget, but slow to restore and search."},{id:"origin",label:"3 · Leave at source",kind:"offshore",capacity:100,workers:1,storagePerUnitDay:.015,description:"Data stays with its owner. Each search reads it from afar."},{id:"landing",label:"4 · Prepare on request",kind:"landing",capacity:12,workers:1,storagePerUnitDay:.02,description:"Raw data kept for very little budget. Every search waits for a prepare step."}],um=[{id:"identity",label:"Identity events",location:"Regional collector",description:"Small source with urgent incident requests. Each request needs one unit of service.",volume:2,requiredDays:30,blocked:{},routes:[{zoneId:"landing",setupSeconds:2,transferPerUnit:.5,serviceSeconds:2,prepareSeconds:6,prepareCost:3,queryCost:1,resultTransferCost:.2,access:"allowed",verifiedAccess:"allowed",evidence:"Fictional landing rule: retain the raw source at low cost. Each request promotes a temporary working batch on the landing worker before service. Preparation costs 3 credits and 6 seconds per request unit. The batch is removed after service; no prepared copy is reused. This is not an actual Splunk feature claim."},{zoneId:"work",setupSeconds:4,transferPerUnit:2,serviceSeconds:2,queryCost:2,resultTransferCost:0,access:"allowed",verifiedAccess:"allowed",evidence:"The fictional work berth can serve this source."},{zoneId:"stage",setupSeconds:12,transferPerUnit:1,serviceSeconds:7,queryCost:1,resultTransferCost:.2,access:"allowed",verifiedAccess:"allowed",evidence:"The fictional restore path is available."},{zoneId:"origin",setupSeconds:0,transferPerUnit:0,serviceSeconds:9,queryCost:.5,resultTransferCost:1,access:"allowed",verifiedAccess:"allowed",evidence:"The fictional origin grants read access."}]},{id:"application",label:"Application events",location:"Service export",description:"Investigation requests need two units of service. A low unit cost can hide a long queue.",volume:3,requiredDays:30,blocked:{},routes:[{zoneId:"landing",setupSeconds:3,transferPerUnit:.5,serviceSeconds:2,prepareSeconds:6,prepareCost:3,queryCost:1,resultTransferCost:.2,access:"allowed",verifiedAccess:"allowed",evidence:"Fictional landing rule: each request promotes a temporary working batch. Preparation and service use the same landing worker. Charge preparation for every request unit. No prepared copy is reused."},{zoneId:"work",setupSeconds:4,transferPerUnit:2,serviceSeconds:2,queryCost:2,resultTransferCost:0,access:"allowed",verifiedAccess:"allowed",evidence:"The fictional work berth can serve this source."},{zoneId:"stage",setupSeconds:10,transferPerUnit:1,serviceSeconds:6,queryCost:1,resultTransferCost:.2,access:"allowed",verifiedAccess:"allowed",evidence:"The fictional restore path is available."},{zoneId:"origin",setupSeconds:0,transferPerUnit:0,serviceSeconds:8,queryCost:.5,resultTransferCost:1,access:"allowed",verifiedAccess:"allowed",evidence:"The fictional origin grants read access."}]},{id:"trace",label:"Trace extracts",location:"Batch store",description:"Routine access can wait. This source has no offshore route in this exercise.",volume:2,requiredDays:30,blocked:{origin:"The batch store is being shut down, so the extracts cannot be read where they sit."},routes:[{zoneId:"landing",setupSeconds:3,transferPerUnit:.5,serviceSeconds:2,prepareSeconds:3,prepareCost:3,queryCost:1,resultTransferCost:.2,access:"allowed",verifiedAccess:"allowed",evidence:"Fictional landing rule: promote a working batch for each request. The raw source remains in the landing yard. Preparation costs apply even when earlier requests used this source."},{zoneId:"work",setupSeconds:4,transferPerUnit:3,serviceSeconds:2,queryCost:2,resultTransferCost:0,access:"allowed",verifiedAccess:"allowed",evidence:"The fictional work berth accepts the extract."},{zoneId:"stage",setupSeconds:10,transferPerUnit:1,serviceSeconds:6,queryCost:1,resultTransferCost:.2,access:"allowed",verifiedAccess:"allowed",evidence:"The fictional restore path accepts the extract."}]},{id:"audit",label:"Audit history",location:"External history store",description:"Large source with rare historical requests in the first workload. Do not assume demand will stay rare.",volume:4,requiredDays:90,blocked:{},routes:[{zoneId:"landing",setupSeconds:4,transferPerUnit:.5,serviceSeconds:2,prepareSeconds:4,prepareCost:3,queryCost:1,resultTransferCost:.2,access:"allowed",verifiedAccess:"allowed",evidence:"Fictional landing rule: low-cost raw retention has a later preparation cost. Each request promotes a temporary working batch, then discards that batch after service. Frequent requests repeat the preparation cost and occupy the single landing worker."},{zoneId:"work",setupSeconds:8,transferPerUnit:2,serviceSeconds:2,queryCost:2,resultTransferCost:0,access:"allowed",verifiedAccess:"allowed",evidence:"The fictional work berth accepts the history."},{zoneId:"stage",setupSeconds:16,transferPerUnit:1,serviceSeconds:8,queryCost:1,resultTransferCost:.2,access:"allowed",verifiedAccess:"allowed",evidence:"The fictional restore path accepts the history."},{zoneId:"origin",setupSeconds:0,transferPerUnit:0,serviceSeconds:8,queryCost:.5,resultTransferCost:1,access:"allowed",verifiedAccess:"allowed",evidence:"The fictional origin grants read access."}]},{id:"partner",label:"Partner reference",location:"Partner-held store",description:"The source must stay at its origin in this scenario. Access is not yet confirmed. Request evidence before commitment.",volume:2,requiredDays:30,blocked:{work:"The partner's legal team has not approved copying this data.",stage:"The partner's legal team has not approved copying this data.",landing:"The partner's legal team has not approved copying this data."},routes:[{zoneId:"origin",setupSeconds:0,transferPerUnit:0,serviceSeconds:5,queryCost:.5,resultTransferCost:2,access:"unknown",verifiedAccess:"allowed",evidence:"The fictional owner approves the required read operation. The source stays at origin. Each unit of returned results costs 2 credits."}]},{id:"archive",label:"Maintenance archive",location:"Offline export",description:"A long retention obligation remains even when requests are rare. Only the restore path is eligible.",volume:3,requiredDays:90,blocked:{work:"The archive is on offline tapes, and only the restore yard has a tape reader.",origin:"The offline export has no live reader, so it cannot be searched where it sits.",landing:"Tapes cannot be prepared on request. They must be restored first."},routes:[{zoneId:"stage",setupSeconds:14,transferPerUnit:1,serviceSeconds:6,queryCost:1,resultTransferCost:.2,access:"allowed",verifiedAccess:"allowed",evidence:"The fictional restore service accepts this export."}]}],hm={label:"Investigation shift",brief:"Identity and application requests are critical. Audit requests are rare. Inspect all request deadlines before you commit.",budget:115,phases:[{label:"Incident intake",at:0},{label:"Routine checks",at:30},{label:"Historical review",at:60}],requests:[{id:"login",label:"Investigate a login sequence",sourceId:"identity",phase:0,arrival:0,units:1,ageDays:7,deadline:12,critical:!0},{id:"fault",label:"Inspect application failure",sourceId:"application",phase:0,arrival:1,units:2,ageDays:7,deadline:12,critical:!0},{id:"sample",label:"Read a trace sample",sourceId:"trace",phase:0,arrival:4,units:1,ageDays:20,deadline:30,critical:!1},{id:"owner",label:"Check a partner reference",sourceId:"partner",phase:1,arrival:30,units:1,ageDays:10,deadline:20,critical:!0},{id:"follow",label:"Check related identity events",sourceId:"identity",phase:1,arrival:31,units:2,ageDays:25,deadline:12,critical:!0},{id:"history",label:"Read audit history",sourceId:"audit",phase:2,arrival:60,units:1,ageDays:70,deadline:35,critical:!1},{id:"repair",label:"Read an old maintenance record",sourceId:"archive",phase:2,arrival:60,units:1,ageDays:85,deadline:35,critical:!1}],referencePlan:{identity:{zoneId:"work",days:30},application:{zoneId:"work",days:30},trace:{zoneId:"stage",days:30},audit:{zoneId:"origin",days:90},partner:{zoneId:"origin",days:30},archive:{zoneId:"stage",days:90}}},fm={label:"Frequent history investigation",brief:"Audit history is now part of urgent investigation. Application work can wait. The source rules do not change. Use the new request schedule, not the previous result, to defend your plan.",budget:230,phases:[{label:"History incident",at:0},{label:"Repeated checks",at:30},{label:"Final evidence",at:60}],requests:[{id:"new-identity",label:"Check identity link",sourceId:"identity",phase:0,arrival:0,units:1,ageDays:7,deadline:12,critical:!0},{id:"new-audit",label:"Read urgent history",sourceId:"audit",phase:0,arrival:1,units:2,ageDays:75,deadline:12,critical:!0},{id:"new-app",label:"Read routine application events",sourceId:"application",phase:0,arrival:3,units:1,ageDays:20,deadline:35,critical:!1},{id:"new-history",label:"Test another history link",sourceId:"audit",phase:1,arrival:30,units:3,ageDays:80,deadline:10,critical:!0},{id:"new-partner",label:"Check partner mapping",sourceId:"partner",phase:1,arrival:31,units:1,ageDays:15,deadline:25,critical:!0},{id:"new-trace",label:"Read routine trace",sourceId:"trace",phase:1,arrival:32,units:1,ageDays:20,deadline:30,critical:!1},{id:"new-repeat",label:"Close the history investigation",sourceId:"audit",phase:2,arrival:60,units:2,ageDays:85,deadline:10,critical:!0},{id:"new-archive",label:"Read maintenance evidence",sourceId:"archive",phase:2,arrival:61,units:1,ageDays:85,deadline:35,critical:!1}],referencePlan:{identity:{zoneId:"work",days:30},application:{zoneId:"origin",days:30},trace:{zoneId:"stage",days:30},audit:{zoneId:"work",days:90},partner:{zoneId:"origin",days:30},archive:{zoneId:"stage",days:90}}},pm={schemaVersion:tm,id:nm,version:im,title:rm,brief:sm,trust:am,objective:om,unit:cm,retentionOptions:lm,zones:dm,sources:um,practice:hm,transfer:fm},mm=1,gm="compliance",_m="1.1.0",vm="Store six record sources so audit requests finish on time.",xm="A review team needs old records and proof of access. Each truck is a request with a deadline. Records deleted too early cannot come back.",ym="Synthetic learning model. All prices, routes, timings, and supported operations are fictional scenario assumptions, not verified Splunk features or prices. These are workflow zones, not actual product storage tiers. Obtain a product and architecture review before use in customer guidance.",Sm="Serve every urgent truck on time, keep each record long enough, and stay in budget.",Mm="volume units",Em=[7,30,90],Tm=[{id:"work",label:"1 · Fast storage",kind:"index",capacity:6,workers:1,storagePerUnitDay:.2,description:"Ready to search the moment a request arrives. Little space."},{id:"stage",label:"2 · Restore yard",kind:"restore",capacity:15,workers:2,storagePerUnitDay:.04,description:"Plenty of space and uses little budget, but slow to restore and search."},{id:"origin",label:"3 · Leave at source",kind:"offshore",capacity:100,workers:1,storagePerUnitDay:.01,description:"Records stay with their owner. Each read reaches out to them."},{id:"landing",label:"4 · Prepare on request",kind:"landing",capacity:10,workers:1,storagePerUnitDay:.015,description:"Raw records kept for very little budget. Every read waits for a prepare step."}],Am=[{id:"review",label:"Review records",location:"Evidence export",description:"Urgent review questions need old records. The source needs a 90-day policy.",volume:3,requiredDays:90,blocked:{},routes:[{zoneId:"landing",setupSeconds:3,transferPerUnit:.5,serviceSeconds:2,prepareSeconds:5,prepareCost:4,queryCost:1,resultTransferCost:0,access:"allowed",verifiedAccess:"allowed",evidence:"Fictional landing rule: each request promotes a temporary working batch. Preparation takes 5 seconds and 4 credits per request unit on the landing worker. The prepared batch is not retained or reused. This is not an actual Splunk operation claim."},{zoneId:"work",setupSeconds:5,transferPerUnit:1,serviceSeconds:2,queryCost:2,resultTransferCost:0,access:"allowed",verifiedAccess:"allowed",evidence:"The fictional review reader can use this path."},{zoneId:"stage",setupSeconds:15,transferPerUnit:1,serviceSeconds:7,queryCost:1,resultTransferCost:0,access:"allowed",verifiedAccess:"allowed",evidence:"The fictional restore reader can use this path."},{zoneId:"origin",setupSeconds:0,transferPerUnit:0,serviceSeconds:10,queryCost:.3,resultTransferCost:.5,access:"allowed",verifiedAccess:"allowed",evidence:"The fictional origin reader is permitted."}]},{id:"policy",label:"Policy decisions",location:"Decision store",description:"The first review has urgent policy questions. Later policy requests can wait.",volume:2,requiredDays:90,blocked:{origin:"The decision store is being retired, so its records cannot be read where they sit."},routes:[{zoneId:"landing",setupSeconds:3,transferPerUnit:.5,serviceSeconds:2,prepareSeconds:5,prepareCost:4,queryCost:1,resultTransferCost:0,access:"allowed",verifiedAccess:"allowed",evidence:"Fictional landing rule: low-cost raw retention needs batch promotion for each request. Preparation and service share the landing worker. No prepared batch is reused."},{zoneId:"work",setupSeconds:4,transferPerUnit:1,serviceSeconds:2,queryCost:2,resultTransferCost:0,access:"allowed",verifiedAccess:"allowed",evidence:"The fictional policy reader is permitted."},{zoneId:"stage",setupSeconds:8,transferPerUnit:1,serviceSeconds:6,queryCost:1,resultTransferCost:0,access:"allowed",verifiedAccess:"allowed",evidence:"The fictional restore reader is permitted."}]},{id:"billing",label:"Billing extract",location:"Finance export",description:"There is no approved offshore reader. The work-berth reader is explicitly denied. The restore reader is approved.",volume:2,requiredDays:30,blocked:{origin:"Finance does not allow outside readers on its export system.",landing:"Finance requires a fixed copy, so preparing a batch on request is not allowed."},routes:[{zoneId:"work",setupSeconds:4,transferPerUnit:1,serviceSeconds:2,queryCost:2,resultTransferCost:0,access:"denied",verifiedAccess:"denied",evidence:"The fictional work-berth reader lacks finance permission. Placement eligibility does not grant read access."},{zoneId:"stage",setupSeconds:8,transferPerUnit:1,serviceSeconds:5,queryCost:1,resultTransferCost:0,access:"allowed",verifiedAccess:"allowed",evidence:"The fictional finance owner approves the restore reader."}]},{id:"change",label:"Change records",location:"Change history store",description:"Change history has routine demand at first. Its volume competes for the single work-berth worker.",volume:3,requiredDays:90,blocked:{stage:"Change records are not backed up, and the restore yard only takes backup files."},routes:[{zoneId:"landing",setupSeconds:3,transferPerUnit:.5,serviceSeconds:2,prepareSeconds:5,prepareCost:4,queryCost:1,resultTransferCost:0,access:"allowed",verifiedAccess:"allowed",evidence:"Fictional landing rule: promote each requested batch before service, then remove the batch. Raw records remain in the landing yard. Frequent demand repeats preparation time and cost."},{zoneId:"work",setupSeconds:5,transferPerUnit:1,serviceSeconds:2,queryCost:2,resultTransferCost:0,access:"allowed",verifiedAccess:"allowed",evidence:"The fictional work-berth reader is approved."},{zoneId:"origin",setupSeconds:0,transferPerUnit:0,serviceSeconds:9,queryCost:.3,resultTransferCost:.5,access:"allowed",verifiedAccess:"allowed",evidence:"The fictional origin reader is approved."}]},{id:"vendor",label:"Vendor attestation",location:"Vendor-held store",description:"The attestation must remain with its owner. The requested read permission is not yet known.",volume:1,requiredDays:90,blocked:{work:"The vendor's contract says the attestation must stay on the vendor's system.",stage:"The vendor's contract says the attestation must stay on the vendor's system.",landing:"The vendor's contract says the attestation must stay on the vendor's system."},routes:[{zoneId:"origin",setupSeconds:0,transferPerUnit:0,serviceSeconds:5,queryCost:.3,resultTransferCost:1,access:"unknown",verifiedAccess:"allowed",evidence:"The fictional vendor approves the specific attestation read. This says nothing about other operations or real products."}]},{id:"maintenance",label:"Maintenance records",location:"Scheduled export",description:"These records need long retention but have relaxed deadlines.",volume:3,requiredDays:90,blocked:{work:"The scheduled export arrives as backup files that only the restore yard can read.",origin:"The export system is switched off between runs, so it cannot be read where it sits.",landing:"The scheduled export arrives as backup files that only the restore yard can read."},routes:[{zoneId:"stage",setupSeconds:10,transferPerUnit:1,serviceSeconds:5,queryCost:1,resultTransferCost:0,access:"allowed",verifiedAccess:"allowed",evidence:"The fictional restore reader is approved."}]}],bm={label:"Scheduled evidence review",brief:"Review and policy records have urgent deadlines. Retain the required history even if no request uses its oldest day.",budget:180,phases:[{label:"Review opening",at:0},{label:"Owner evidence",at:30},{label:"Historical records",at:60}],requests:[{id:"review-start",label:"Read the review record",sourceId:"review",phase:0,arrival:0,units:2,ageDays:80,deadline:14,critical:!0},{id:"policy-start",label:"Read the policy decision",sourceId:"policy",phase:0,arrival:1,units:1,ageDays:85,deadline:14,critical:!0},{id:"bill-start",label:"Read finance evidence",sourceId:"billing",phase:0,arrival:4,units:1,ageDays:20,deadline:30,critical:!1},{id:"vendor-read",label:"Read owner attestation",sourceId:"vendor",phase:1,arrival:30,units:1,ageDays:75,deadline:20,critical:!0},{id:"change-read",label:"Read change history",sourceId:"change",phase:1,arrival:31,units:1,ageDays:70,deadline:30,critical:!1},{id:"old-record",label:"Read maintenance history",sourceId:"maintenance",phase:2,arrival:60,units:2,ageDays:90,deadline:30,critical:!1}],referencePlan:{review:{zoneId:"work",days:90},policy:{zoneId:"work",days:90},billing:{zoneId:"stage",days:30},change:{zoneId:"origin",days:90},vendor:{zoneId:"origin",days:90},maintenance:{zoneId:"stage",days:90}}},wm={label:"Urgent change investigation",brief:"Change records now carry the urgent workload. Policy reads are routine. Recheck the single-worker queue before you commit.",budget:190,phases:[{label:"Urgent history",at:0},{label:"Repeated questions",at:30},{label:"Evidence closure",at:60}],requests:[{id:"new-review",label:"Read review evidence",sourceId:"review",phase:0,arrival:0,units:1,ageDays:85,deadline:14,critical:!0},{id:"new-change",label:"Read urgent change history",sourceId:"change",phase:0,arrival:1,units:2,ageDays:80,deadline:14,critical:!0},{id:"new-policy",label:"Read routine policy",sourceId:"policy",phase:0,arrival:3,units:1,ageDays:75,deadline:30,critical:!1},{id:"new-repeat",label:"Read another change record",sourceId:"change",phase:1,arrival:30,units:2,ageDays:85,deadline:10,critical:!0},{id:"new-vendor",label:"Read vendor evidence",sourceId:"vendor",phase:1,arrival:31,units:1,ageDays:80,deadline:20,critical:!0},{id:"new-finance",label:"Read finance extract",sourceId:"billing",phase:2,arrival:60,units:1,ageDays:25,deadline:20,critical:!1},{id:"new-maintenance",label:"Read maintenance record",sourceId:"maintenance",phase:2,arrival:61,units:1,ageDays:90,deadline:30,critical:!1}],referencePlan:{review:{zoneId:"work",days:90},policy:{zoneId:"stage",days:90},billing:{zoneId:"stage",days:30},change:{zoneId:"work",days:90},vendor:{zoneId:"origin",days:90},maintenance:{zoneId:"stage",days:90}}},Cm={schemaVersion:mm,id:gm,version:_m,title:vm,brief:xm,trust:ym,objective:Sm,unit:Mm,retentionOptions:Em,zones:Tm,sources:Am,practice:bm,transfer:wm},Rm=1,Pm="warehouse",Lm="1.0.0",Dm="Place six stock groups so urgent orders ship on time.",Im="A parts warehouse has six stock groups to place. Each truck is an order with a deadline. The fast-pick floor holds only a few pallets.",Um="All stock, rates, storage periods, fees, access checks, and service times are fictional. Holding days represent stock availability. This pack is not guidance for a real warehouse.",Fm="Ship every urgent order on time without going over budget.",Nm="pallets",Om=[7,30,90],Bm=[{id:"pick",label:"1 · Fast-pick floor",kind:"index",capacity:5,workers:1,storagePerUnitDay:.12,description:"Orders leave fast from here, but only a few pallets fit."},{id:"reserve",label:"2 · Reserve stock",kind:"restore",capacity:10,workers:2,storagePerUnitDay:.03,description:"Lots of room, but every order needs a slower pick."},{id:"supplier",label:"3 · Ship from supplier",kind:"offshore",capacity:40,workers:1,storagePerUnitDay:.01,description:"The supplier ships each order directly. Nothing is stored here."}],km=[{id:"kits",label:"Repair kits",location:"Receiving dock",description:"Small urgent orders. Each service unit represents one order batch.",volume:1,requiredDays:7,blocked:{supplier:"Repair kits are put together in house. The supplier does not stock them."},routes:[{zoneId:"pick",setupSeconds:2,transferPerUnit:3,serviceSeconds:2,queryCost:3,resultTransferCost:0,access:"allowed",verifiedAccess:"allowed",evidence:"The fast-pick team is permitted to handle the kits."},{zoneId:"reserve",setupSeconds:8,transferPerUnit:1,serviceSeconds:6,queryCost:1,resultTransferCost:1,access:"allowed",verifiedAccess:"allowed",evidence:"The reserve team is permitted to handle the kits."}]},{id:"bolts",label:"Packaged bolts",location:"Receiving dock",description:"Urgent in the first shift. Later orders can wait for reserve picking.",volume:2,requiredDays:30,blocked:{supplier:"The bolt supplier only ships full truckloads, far more than one order."},routes:[{zoneId:"pick",setupSeconds:3,transferPerUnit:3,serviceSeconds:2,queryCost:3,resultTransferCost:0,access:"allowed",verifiedAccess:"allowed",evidence:"Fast-pick handling is approved."},{zoneId:"reserve",setupSeconds:7,transferPerUnit:1,serviceSeconds:5,queryCost:1,resultTransferCost:1,access:"allowed",verifiedAccess:"allowed",evidence:"Reserve handling is approved."}]},{id:"parts",label:"Machine parts",location:"Reserve intake",description:"Heavy parts cannot use the fast-pick floor in this exercise.",volume:2,requiredDays:30,blocked:{pick:"Machine parts are too heavy for the fast-pick shelves.",supplier:"These parts are already delivered. The supplier no longer holds any."},routes:[{zoneId:"reserve",setupSeconds:9,transferPerUnit:1,serviceSeconds:7,queryCost:1,resultTransferCost:2,access:"allowed",verifiedAccess:"allowed",evidence:"The reserve equipment supports these parts."}]},{id:"seals",label:"Bulk seals",location:"Supplier depot",description:"The first shift has one routine order. A later service campaign can change demand.",volume:4,requiredDays:30,blocked:{},routes:[{zoneId:"pick",setupSeconds:5,transferPerUnit:3,serviceSeconds:2,queryCost:3,resultTransferCost:0,access:"allowed",verifiedAccess:"allowed",evidence:"Fast-pick handling is approved."},{zoneId:"reserve",setupSeconds:10,transferPerUnit:1,serviceSeconds:8,queryCost:1,resultTransferCost:2,access:"allowed",verifiedAccess:"allowed",evidence:"Reserve handling is approved."},{zoneId:"supplier",setupSeconds:0,transferPerUnit:0,serviceSeconds:11,queryCost:.5,resultTransferCost:4,access:"allowed",verifiedAccess:"allowed",evidence:"The supplier accepts direct orders. Delivery fees apply to each order unit."}]},{id:"custom",label:"Custom couplings",location:"Supplier workshop",description:"Stock must stay at the supplier. Direct-order permission is not yet confirmed.",volume:1,requiredDays:7,blocked:{pick:"Custom couplings are made to order in the supplier's workshop.",reserve:"Custom couplings are made to order in the supplier's workshop."},routes:[{zoneId:"supplier",setupSeconds:0,transferPerUnit:0,serviceSeconds:7,queryCost:.5,resultTransferCost:5,access:"unknown",verifiedAccess:"allowed",evidence:"The supplier approves direct fulfillment for these couplings. Each order unit has a 5-credit delivery fee."}]},{id:"panels",label:"Spare panels",location:"Reserve intake",description:"Keep these panels available for 90 days. The reserve area is the only permitted destination.",volume:3,requiredDays:90,blocked:{pick:"Panels are too large for the fast-pick shelves.",supplier:"The panel maker has closed, so no new panels can be ordered."},routes:[{zoneId:"reserve",setupSeconds:10,transferPerUnit:1,serviceSeconds:6,queryCost:1,resultTransferCost:2,access:"allowed",verifiedAccess:"allowed",evidence:"Reserve equipment supports these panels."}]}],zm={label:"Repair shift",brief:"Kits and bolts have urgent orders. Keep spare panels available even if the request stream is quiet.",budget:80,phases:[{label:"Opening orders",at:0},{label:"Direct orders",at:30},{label:"Reserve orders",at:60}],requests:[{id:"kit-order",label:"Dispatch repair kits",sourceId:"kits",phase:0,arrival:0,units:1,ageDays:5,deadline:10,critical:!0},{id:"bolt-order",label:"Dispatch bolts",sourceId:"bolts",phase:0,arrival:1,units:2,ageDays:20,deadline:10,critical:!0},{id:"part-order",label:"Dispatch machine parts",sourceId:"parts",phase:0,arrival:4,units:1,ageDays:20,deadline:25,critical:!1},{id:"custom-order",label:"Confirm custom order",sourceId:"custom",phase:1,arrival:30,units:1,ageDays:5,deadline:20,critical:!0},{id:"seal-order",label:"Dispatch bulk seals",sourceId:"seals",phase:1,arrival:31,units:1,ageDays:20,deadline:30,critical:!1},{id:"panel-order",label:"Dispatch a spare panel",sourceId:"panels",phase:2,arrival:60,units:1,ageDays:85,deadline:20,critical:!1}],referencePlan:{kits:{zoneId:"pick",days:7},bolts:{zoneId:"pick",days:30},parts:{zoneId:"reserve",days:30},seals:{zoneId:"supplier",days:30},custom:{zoneId:"supplier",days:7},panels:{zoneId:"reserve",days:90}}},Gm={label:"Seal replacement campaign",brief:"Bulk seals now have repeated urgent orders. Bolts are routine. Keep the same five-pallet fast-pick limit.",budget:100,phases:[{label:"Campaign opening",at:0},{label:"Repeat dispatch",at:30},{label:"Campaign close",at:60}],requests:[{id:"new-kit",label:"Dispatch urgent kit",sourceId:"kits",phase:0,arrival:0,units:1,ageDays:5,deadline:12,critical:!0},{id:"new-seal",label:"Dispatch campaign seals",sourceId:"seals",phase:0,arrival:1,units:2,ageDays:20,deadline:12,critical:!0},{id:"new-bolt",label:"Dispatch routine bolts",sourceId:"bolts",phase:0,arrival:3,units:1,ageDays:25,deadline:25,critical:!1},{id:"new-repeat",label:"Dispatch another seal batch",sourceId:"seals",phase:1,arrival:30,units:3,ageDays:25,deadline:10,critical:!0},{id:"new-custom",label:"Confirm custom fulfillment",sourceId:"custom",phase:1,arrival:31,units:1,ageDays:7,deadline:20,critical:!0},{id:"new-part",label:"Dispatch routine machine parts",sourceId:"parts",phase:1,arrival:32,units:1,ageDays:25,deadline:25,critical:!1},{id:"new-panel",label:"Dispatch a spare panel",sourceId:"panels",phase:2,arrival:60,units:1,ageDays:90,deadline:20,critical:!1}],referencePlan:{kits:{zoneId:"pick",days:7},bolts:{zoneId:"reserve",days:30},parts:{zoneId:"reserve",days:30},seals:{zoneId:"pick",days:30},custom:{zoneId:"supplier",days:7},panels:{zoneId:"reserve",days:90}}},Vm={schemaVersion:Rm,id:Pm,version:Lm,title:Dm,brief:Im,trust:Um,objective:Fm,unit:Nm,retentionOptions:Om,zones:Bm,sources:km,practice:zm,transfer:Gm};function Hm(i,e,t){if(!e[t])throw new Error(`[${i}] default pack "${t}" is not registered`);return function(r){const s=r||t,a=e[s];return a?{theme:a,requestedPack:s,activePack:s}:(console.warn(`[${i}] pack "${s}" not available, using "${t}"`),{theme:e[t],requestedPack:s,activePack:t})}}const qm={colors:{primary:"#e20082",secondary:"#f6931d",secondary3d:"#f99d1c",focus:"#0070f3",greys:{darkest:"#0c1724",darker:"#363c44",dark:"#969daa",light:"#d5dce5",lightest:"#f0f3f7"}}},Wm=Hm("port-theme",{default:qm},"default"),Xm=["primary","secondary","secondary3d","focus"];function je(i,e){throw new Error(`${i}: ${e}`)}function Kt(i,e){return(!i||typeof i!="object"||Array.isArray(i))&&je(e,"expected an object."),i}function Ht(i,e){(typeof i!="string"||!i.trim()||i.length>ot.maxText)&&je(e,`use 1–${ot.maxText} text characters.`)}function qt(i,e,t=0){(typeof i!="number"||!Number.isFinite(i)||i<t||i>ot.maxNumber)&&je(e,`use a finite number from ${t} to ${ot.maxNumber}.`)}function Ar(i,e,t=0){qt(i,e,t),Number.isInteger(i)||je(e,"use a whole number.")}function hi(i,e,t,n){return(!Array.isArray(i)||i.length<t||i.length>n)&&je(e,`use ${t}–${n} items.`),i}function br(i,e){Ht(i,e),(!/^[a-z][a-z0-9-]{0,63}$/.test(i)||["constructor","prototype"].includes(i))&&je(e,"use a short lower-case ID with letters, numbers, and hyphens.")}function fi(i,e){new Set(i).size!==i.length&&je(e,"duplicate values are not allowed.")}function Zo(i,e,t=!0){const n=Kt(i,"plan");for(const[s,a]of Object.entries(n)){e.sources.some(l=>l.id===s)||je("plan",`unknown source ${s}.`);const o=Kt(a,`plan.${s}`);Ht(o.zoneId,"plan.zoneId"),qt(o.days,"plan.days",1),e.sources.find(l=>l.id===s).routes.some(l=>l.zoneId===o.zoneId)||je("plan","ineligible route."),e.retentionOptions.includes(o.days)||je("plan","invalid retention policy.")}const r=n;if(t){const s=Ys(e,r);s.length&&je("plan",s.join(" "))}return structuredClone(r)}function lo(i){const e=Kt(i,"pack");e.schemaVersion!==ot.schemaVersion&&je("schemaVersion","this engine requires version 1."),br(e.id,"id");for(const d of["version","title","brief","trust","objective","unit"])Ht(e[d],d);const t=hi(e.retentionOptions,"retentionOptions",1,8);t.forEach(d=>Ar(d,"retentionOptions",1)),fi(t,"retentionOptions");const n=hi(e.zones,"zones",3,4).map((d,u)=>{const h=Kt(d,`zones.${u}`);return br(h.id,"zone.id"),Ht(h.label,"zone.label"),["index","restore","offshore","landing"].includes(String(h.kind))||je("zone.kind","expected index, restore, offshore, or landing."),qt(h.capacity,"zone.capacity",1),Ar(h.workers,"zone.workers",1),h.workers>16&&je("zone.workers","use at most 16 workers."),qt(h.storagePerUnitDay,"zone.storagePerUnitDay"),Ht(h.description,"zone.description"),h.description.length>ot.maxZoneDescription&&je("zone.description",`use at most ${ot.maxZoneDescription} characters.`),h});fi(n.map(d=>d.id),"zone IDs"),fi(n.map(d=>d.kind),"zone kinds"),["index","restore","offshore"].every(d=>n.some(u=>u.kind===d))||je("zones","include index, restore, and offshore. Landing is an optional fourth zone.");const r=hi(e.sources,"sources",ot.sourceCount,ot.sourceCount).map((d,u)=>{const h=Kt(d,`sources.${u}`);br(h.id,"source.id");for(const g of["label","description","location"])Ht(h[g],`source.${g}`);qt(h.volume,"source.volume",1),Ar(h.requiredDays,"source.requiredDays",1),t.some(g=>g>=h.requiredDays)||je("source.requiredDays","no retention option can meet this requirement.");const m=hi(h.routes,"source.routes",1,4).map(g=>{const p=Kt(g,"route"),f=n.find(w=>w.id===p.zoneId);f||je("route.zoneId","unknown destination.");for(const w of["setupSeconds","transferPerUnit","queryCost","resultTransferCost"])qt(p[w],`route.${w}`);return qt(p.serviceSeconds,"route.serviceSeconds",.1),["allowed","denied","unknown"].includes(String(p.access))||je("route.access","invalid access state."),["allowed","denied"].includes(String(p.verifiedAccess))||je("route.verifiedAccess","invalid evidence result."),p.access!=="unknown"&&p.access!==p.verifiedAccess&&je("route","known access must match its evidence result."),Ht(p.evidence,"route.evidence"),f.kind==="landing"?(qt(p.prepareSeconds,"route.prepareSeconds",.1),qt(p.prepareCost,"route.prepareCost")):(p.prepareSeconds!==void 0&&p.prepareSeconds!==0||p.prepareCost!==void 0&&p.prepareCost!==0)&&je("route","only landing routes can prepare a working batch."),f.kind==="offshore"&&(p.transferPerUnit!==0||p.setupSeconds!==0)&&je("route","offshore queries must not relocate a source. Use result transfer cost for query results."),p});fi(m.map(g=>g.zoneId),"source route IDs");const _=Kt(h.blocked,"source.blocked");for(const[g,p]of Object.entries(_))n.some(f=>f.id===g)||je("source.blocked",`${h.id} names unknown zone ${g}`),m.some(f=>f.zoneId===g)&&je("source.blocked",`${h.id} has a route to ${g}, so it cannot also be blocked there`);for(const g of n){if(m.some(f=>f.zoneId===g.id))continue;const p=_[g.id];(typeof p!="string"||!p.trim())&&je("source.blocked",`${h.id} needs a reason for ${g.id}`),p.length>ot.maxBlockedReason&&je("source.blocked",`${h.id} reason for ${g.id} uses more than ${ot.maxBlockedReason} characters`)}return h});fi(r.map(d=>d.id),"source IDs");for(const d of["practice","transfer"]){const u=Kt(e[d],d);Ht(u.label,`${d}.label`),Ht(u.brief,`${d}.brief`),qt(u.budget,`${d}.budget`);const h=hi(u.phases,`${d}.phases`,3,3).map(_=>{const g=Kt(_,"phase");return Ht(g.label,"phase.label"),qt(g.at,"phase.at"),g});(h[0].at!==0||h.some((_,g)=>g>0&&_.at<=h[g-1].at))&&je("phases","start at zero and use increasing release times.");const m=hi(u.requests,`${d}.requests`,0,ot.maxRequests).map(_=>{const g=Kt(_,"request");br(g.id,"request.id"),Ht(g.label,"request.label"),r.some(w=>w.id===g.sourceId)||je("request.sourceId","unknown source."),Ar(g.phase,"request.phase"),g.phase>=h.length&&je("request.phase","unknown phase.");for(const w of["arrival","ageDays","deadline"])qt(g[w],`request.${w}`);qt(g.units,"request.units",.1),typeof g.critical!="boolean"&&je("request.critical","expected true or false.");const p=h[g.phase],f=h[g.phase+1];return(g.arrival<p.at||f&&g.arrival>=f.at)&&je("request.arrival","arrival must be inside its phase."),g});fi(m.map(_=>_.id),`${d} request IDs`)}if(e.theme!==void 0){const d=Kt(e.theme,"theme");if(d.pack!==void 0&&Ht(d.pack,"theme.pack"),d.colors!==void 0){const u=Kt(d.colors,"theme.colors");for(const[h,m]of Object.entries(u))Xm.includes(h)||je("theme.colors",`unknown color name ${h}.`),Ht(m,`theme.colors.${h}`)}}const s=structuredClone(e);for(const d of[s.practice,s.transfer]){Zo(d.referencePlan,s);const u=dn(s,d,d.referencePlan,s.sources.map(h=>h.id));(u.criticalMet!==u.criticalTotal||u.retentionFailures.length||u.totalCost>d.budget)&&je("referencePlan",`${d.label} has no demonstrated successful plan. Check deadlines, access, capacity, retention, and budget.`)}const a=s.sources.map(d=>d.id),o=Fp(s);if(!Ys(s,o).length){const d=dn(s,s.practice,o,a);d.criticalMet===d.criticalTotal&&d.totalCost<=s.practice.budget&&je("practice","the fastest-place-for-everything plan passes; the shift does not need a decision")}const l=dn(s,s.practice,s.practice.referencePlan,a);l.totalCost<s.practice.budget*ot.minBudgetUse&&je("practice.budget",`reference plan uses only ${l.totalCost} of ${s.practice.budget}; lower the budget`);const c=dn(s,s.transfer,s.practice.referencePlan,a);return c.criticalMet>=c.criticalTotal&&je("transfer","the practice reference plan already passes the new shift"),s}function Ko(i,e){return e==="transfer"||e==="transfer-fix"?i.transfer:i.practice}const Ym=[pm,Cm,Vm];function $m(i,e){if(i!==void 0){const r=lo(i);if(e&&e!==r.id)throw new Error(`The custom pack ID is ${r.id}, not ${e}. Remove the scenario parameter or use the matching ID.`);return r}const t=e??"investigation",n=Ym.find(r=>r.id===t);if(!n)throw new Error(`Unknown scenario: ${t}. Use investigation, compliance, or warehouse, or load a valid JSON pack.`);return lo(n)}const Zm=["initial","revision","transfer","transfer-fix"],Km={initial:[[]],revision:[["initial"]],transfer:[["initial"],["initial","revision"]],"transfer-fix":[["initial","transfer"],["initial","revision","transfer"]]};function uo(i){return{round:"initial",mode:"planning",plan:{},verified:[],flag:"",selectedSource:i.sources[0].id,selectedRequest:"",phase:-1,seconds:0,history:[]}}function Wn(i,e){return Ko(i,e.round)}function cn(i,e){var n;const t=Wn(i,e);return e.phase<0?0:((n=t.phases[e.phase+1])==null?void 0:n.at)??dn(i,t,e.plan,e.verified).end}function Jm(i,e,t){if(!Number.isFinite(t)||t<0)throw new Error("Time must be a finite, non-negative number of milliseconds.");if(e.mode!=="committed"||e.phase<0)return e;const n=structuredClone(e),r=cn(i,e);return n.seconds=Math.min(r,e.seconds+t/ot.millisecondsPerSecond),n.phase===Wn(i,e).phases.length-1&&n.seconds>=r&&(n.mode="finished"),n}function jm(i){if(i.round==="revision")return i.history[0];if(i.round==="transfer-fix")return i.history.at(-1)}function Is(i,e=i.plan){var n;const t=(n=jm(i))==null?void 0:n.plan;return t?Object.keys(t).filter(r=>{var s,a;return t[r].zoneId!==((s=e[r])==null?void 0:s.zoneId)||t[r].days!==((a=e[r])==null?void 0:a.days)}).length:0}function Qm(i){return structuredClone({round:i.round,plan:i.plan,verified:i.verified,flag:i.flag})}function Us(i,e){const t=dn(i,Wn(i,e),e.plan,e.verified);return t.criticalMet===t.criticalTotal&&t.totalCost<=Wn(i,e).budget&&!t.retentionFailures.length}function Jo(i,e){const t=dn(i,Wn(i,e),e.plan,e.verified);return t.criticalMet<t.criticalTotal}function eg(i){return i.round==="transfer"}function Fs(i,e){return e.round==="initial"?Us(i,e)?"transfer":"revision":e.round==="revision"?"transfer":e.round==="transfer"&&Jo(i,e)?"transfer-fix":null}function tg(i,e){if(e.mode!=="finished")throw new Error("Finish the current shift first.");const t=Fs(i,e);if(!t)throw new Error("This game is over. Click Play again.");const n=structuredClone(e);return n.history.push(Qm(e)),n.round=t,n.mode="planning",n.phase=-1,n.seconds=0,n.flag="",n.selectedRequest="",zr(n,i)}function pt(i,e){if(!i)throw new Error(`Saved state: ${e}`)}function jo(i){return!!i&&typeof i=="object"&&!Array.isArray(i)}function ho(i,e,t){return pt(jo(i),"invalid run record."),pt(Zm.includes(String(i.round)),"invalid round."),Zo(i.plan,e,t),pt(Array.isArray(i.verified)&&new Set(i.verified).size===i.verified.length&&i.verified.every(n=>e.sources.some(r=>r.id===n)),"invalid access evidence."),pt(i.flag===""||e.sources.some(n=>n.id===i.flag),"unknown flag."),t&&pt(i.flag!==""||e.sources.length===0,"committed run needs a flag."),i}function zr(i,e){pt(jo(i),"expected an object."),pt(["planning","committed","finished"].includes(String(i.mode)),"invalid mode."),ho(i,e,i.mode!=="planning"),pt(e.sources.some(l=>l.id===i.selectedSource),"unknown selected source.");const t=Ko(e,String(i.round));pt(i.selectedRequest===""||t.requests.some(l=>l.id===i.selectedRequest),"unknown selected request."),pt(Number.isInteger(i.phase)&&Number(i.phase)>=-1&&Number(i.phase)<t.phases.length,"invalid release phase."),pt(typeof i.seconds=="number"&&Number.isFinite(i.seconds)&&i.seconds>=0,"invalid clock."),pt(Array.isArray(i.history),"invalid history."),i.history.forEach(l=>ho(l,e,!0));const n=JSON.stringify(i.history.map(l=>l.round));pt(Km[i.round].some(l=>JSON.stringify(l)===n),"round does not match the history.");const r=i,s=(l,c)=>e.sources.filter(d=>l[d.id].zoneId!==c[d.id].zoneId||l[d.id].days!==c[d.id].days).length,[a,o]=r.history;return(o==null?void 0:o.round)==="revision"&&pt(s(a.plan,o.plan)<=ot.revisionLimit,"saved revision changed too many sources."),r.round==="revision"&&pt(!Us(e,a),"shift 1 was passed, so it has no rerun."),r.round==="transfer"&&r.history.length===1&&pt(Us(e,a),"shift 1 was not passed, so it cannot skip its rerun."),r.round==="transfer-fix"&&pt(Jo(e,r.history.at(-1)),"shift 2 met every urgent request, so there is nothing to fix."),pt(Is(r)<=ot.revisionLimit,"too many revised sources."),r.mode==="planning"?pt(r.seconds===0&&r.phase===-1,"a draft cannot have released requests."):(pt(r.flag!==""||e.sources.length===0,"committed run needs a flag."),pt(r.seconds<=cn(e,r),"clock is beyond the request gate."),r.phase<0?pt(r.seconds===0,"closed gate has an active clock."):pt(r.seconds>=t.phases[r.phase].at,"clock is before the released phase."),r.mode==="finished"&&pt(r.phase===t.phases.length-1&&r.seconds===cn(e,r),"unfinished run marked complete.")),structuredClone(r)}function Qo(i){let e=2166136261;for(const t of JSON.stringify(i))e=Math.imul(e^t.charCodeAt(0),16777619);return(e>>>0).toString(16)}const Ur=i=>`port:v${ot.saveVersion}:${i.id}`;function ng(i,e){return JSON.stringify({saveVersion:ot.saveVersion,packId:i.id,packVersion:i.version,contentStamp:Qo(i),state:zr(e,i)},null,2)}function ig(i,e){if(i.length>ot.maxSaveBytes)throw new Error("The saved file is too large.");const t=JSON.parse(i);if(!t||t.saveVersion!==ot.saveVersion||t.packId!==e.id||t.packVersion!==e.version||t.contentStamp!==Qo(e))throw new Error("The saved state has a different pack, content version, or save format. Export it before you restart.");return zr(t.state,e)}function rg(i,e){const t=i.getItem(Ur(e));return t===null?null:ig(t,e)}function sg(i,e,t){i.setItem(Ur(e),ng(e,t))}const fo=64e3;function Ns(i,e=0){if(!i||e>20)return null;try{const t=i.API_1484_11;if(t)return t;const n=i.parent&&i.parent!==i?i.parent:null;return Ns(n,e+1)??(e===0?Ns(i.opener??null,1):null)}catch{return null}}const po={connected:!1,resumeData:()=>null,save:()=>{},finish:()=>{}};function ag(){const i=typeof window>"u"?null:Ns(window);if(!i||i.Initialize("")!=="true")return po;const e=Date.now();let t=!1,n=!1;const r=(c,d)=>{i.SetValue(c,d)},s=i.GetValue("cmi.entry"),a=i.GetValue("cmi.suspend_data"),o=s==="resume"&&a?a:null;r("cmi.exit","suspend"),r("cmi.completion_status","incomplete"),i.Commit("");const l=()=>{t||(t=!0,r("cmi.session_time",cg(Date.now()-e)),i.Commit(""),i.Terminate(""))};return window.addEventListener("pagehide",l),{connected:!0,resumeData:()=>o,save(c){t||(r("cmi.exit","suspend"),r("cmi.suspend_data",c.length>fo?c.slice(0,fo):c),i.Commit(""))},finish(c={}){if(!(t||n)){if(n=!0,r("cmi.completion_status","completed"),c.score!==void 0&&c.max!==void 0){const d=c.min??0,u=c.max-d;r("cmi.score.min",String(d)),r("cmi.score.max",String(c.max)),r("cmi.score.raw",String(c.score)),u>0&&r("cmi.score.scaled",String(og((c.score-d)/u,-1,1)))}c.passed!==void 0&&r("cmi.success_status",c.passed?"passed":"failed"),r("cmi.exit","normal"),r("cmi.suspend_data",""),i.Commit("")}}}}function og(i,e,t){return i<e?e:i>t?t:i}function cg(i){const e=Math.max(0,Math.round(i/1e3)),t=Math.floor(e/3600),n=Math.floor(e%3600/60),r=e%60;return`PT${t>0?`${t}H`:""}${n>0?`${n}M`:""}${r}S`}const Ts=document.querySelector("#app");var mo,go;try{let i=function(){Ie.hidden=!0,q="none",H=""},e=function(U,te){q=U,H=te,Ie.hidden=!1,c()},t=function(){F=null,b.setLifted(null),O=[],z=-1,s()},n=function(U,te=""){return T.sources.filter(R=>{var Y;return R.id!==te&&((Y=A.plan[R.id])==null?void 0:Y.zoneId)===U}).reduce((R,Y)=>R+Y.volume,0)},r=function(U){var R;const te=T.sources.find(Y=>Y.id===U);return((R=A.plan[U])==null?void 0:R.days)??T.retentionOptions.find(Y=>Y>=te.requiredDays)??T.retentionOptions.at(-1)},s=function(){const U=JSON.stringify([F,A.plan,A.verified]);if(U===me)return;me=U;const te=F?T.sources.find(R=>R.id===F)??null:null;for(const R of T.zones){const Y=b.boards.get(R.id);if(!Y)continue;const Z=le("p","","board-facts");Z.append(le("span",`Loaders: ${R.workers}`),le("span",`Space: ${n(R.id)} of ${R.capacity}`));const ie=[le("p",R.label,"board-title"),le("p",R.description,"board-description"),Z];if(Y.classList.toggle("blocked",!1),Y.classList.toggle("lifted",!!te),te){const j=te.routes.find(K=>K.zoneId===R.id);if(!j)Y.classList.add("blocked"),ie.push(le("p",`${te.label} cannot go here.`,"board-blocked-title"),le("p",te.blocked[R.id]??"","board-blocked"));else{const K=r(te.id),_e=j.access==="unknown"?A.verified.includes(te.id)?j.verifiedAccess:"unknown":j.access,Ue=_e==="allowed"?"allowed":_e==="denied"?"denied":"not confirmed",Oe=no(T,te.id,R.id,K),Xe=Wt(j.queryCost+j.resultTransferCost+(j.prepareCost??0)),Mt=le("ul","","board-numbers");[["Ready after",`${j.setupSeconds} s`,""],...R.kind==="landing"?[["Prepare",`${j.prepareSeconds??0} s per unit`,""]]:[],["Search",`${j.serviceSeconds} s per unit`,""],[`Keep ${K} days`,`${Oe} of the budget`,""],["Each search",`${Xe} per unit`,""],["Access",Ue,_e==="allowed"?"":"warn"]].forEach(([Ti,Ki,Ji])=>{const Dn=le("li","",Ji);Dn.append(le("span",Ti),le("strong",Ki)),Mt.append(Dn)});const hn=le("div","","board-short"),Jt=R.kind==="landing"?`Ready after ${j.setupSeconds} s, prepare ${j.prepareSeconds??0} s and search ${j.serviceSeconds} s per unit`:`Ready after ${j.setupSeconds} s, search ${j.serviceSeconds} s per unit`;hn.append(le("p",Jt),le("p",`${Oe} of the budget, each search ${Xe} per unit`)),_e!=="allowed"&&hn.append(le("p",`Access ${Ue}`,"warn")),ie.push(hn,Mt)}}Y.replaceChildren(...ie)}},a=function(){const U=b.requestBoard,te=L().requests,R=A.mode==="planning";pe!==`${A.round}:${A.mode}`&&(pe=`${A.round}:${A.mode}`,ce=null);const Y=`${pe}:${ce}`;if(Y===We)return;if(We=Y,!(ce??R)){U.classList.add("collapsed"),U.replaceChildren(Ct(`Today's requests (${te.length})`,()=>{ce=!0,a()}));return}U.classList.remove("collapsed");const Z=le("div","","request-board-head");Z.append(le("h2",`Today's requests (${te.length})`)),R||Z.append(Ct("Hide",()=>{ce=!1,a()},"fold"));const ie=le("table"),j=le("tr");["Arrives","Container","Units","Due in","Kind","Data age"].forEach(_e=>j.append(le("th",_e)));const K=le("thead");K.append(j),ie.append(K),L().phases.forEach((_e,Ue)=>{const Oe=le("tbody"),Xe=le("tr","","wave-row"),Mt=le("th",`Wave ${Ue+1}: ${_e.label}`);Mt.colSpan=6,Mt.scope="rowgroup",Xe.append(Mt),Oe.append(Xe),te.filter(mt=>mt.phase===Ue).forEach(mt=>{const hn=le("tr","",mt.critical?"urgent":"");[`${mt.arrival} s`,it(mt.sourceId),String(mt.units),`${mt.deadline} s`,mt.critical?"Urgent":"Routine",`${mt.ageDays} days`].forEach(Jt=>hn.append(le("td",Jt))),Oe.append(hn)}),ie.append(Oe)}),U.replaceChildren(Z,ie)},o=function(){let U=0;for(const[te,R]of Object.entries(A.plan))U+=no(T,te,R.zoneId,R.days);return Wt(U)},l=function(){if(A.mode==="finished"){const R=Fs(T,A);return R==="transfer"?A.round==="initial"?"Shift 1 passed. Next shift.":"Shift over. Read your results, then click Next shift.":R==="revision"?"Shift over. Read your results, then click Change plan.":R==="transfer-fix"?"Shift over. Read your results, then fix up to two containers.":"Done. Your results are on the left."}if(A.mode==="committed")return A.seconds<cn(T,A)?M?"Trucks are arriving. Click one to see its times.":"Paused. Click Play to continue.":A.phase>=L().phases.length-1?"Last wave. The shift is ending.":`Wave ${A.phase+2} is waiting. Click Open gate.`;const U=T.sources.filter(R=>A.plan[R.id]).length;if(U<T.sources.length)return`Click a container, then click a storage area. ${U} of ${T.sources.length} placed.`;const te=ne()?` You can move ${ot.revisionLimit-Is(A)} more.`:A.round==="transfer"?" New requests this shift.":"";return A.flag?`Click Open gate to start the shift.${te}`:`Open the container you expect to wait longest. Click Mark longest wait.${te}`},c=function(){if(Ie.replaceChildren(),q==="source"){const U=T.sources.find(Z=>Z.id===H);if(!U){i();return}const te=A.plan[U.id],R=L().requests.filter(Z=>Z.sourceId===U.id),Y=U.routes.some(Z=>Z.access==="unknown")&&!A.verified.includes(U.id);if(Ie.append(Ct("Close",()=>{i()},"fold"),le("p",U.location,"eyebrow"),le("h2",U.label),le("p",`Size: ${U.volume} ${T.unit}. Must keep: ${U.requiredDays} days.`,"manifest-facts")),R.length){const Z=le("div","","request-facts");Z.append(le("p","Requests this shift","eyebrow")),R.forEach(ie=>Z.append(le("p",`${ie.critical?"Urgent":"Routine"}: ${ie.label}. Due in ${ie.deadline}s. Needs data ${ie.ageDays} days old.`,"request-line"))),Ie.append(Z)}else Ie.append(le("p","No requests this shift."));if(Y){const Z=Ct("Check access",()=>{Z.disabled=!0,Z.textContent="Checking access...";const ie=le("span","","courier");Ie.insertBefore(ie,Z),requestAnimationFrame(()=>ie.classList.add("arrived")),setTimeout(()=>J(()=>{A.verified.push(U.id),nn.play("evidence")}),550)});Ie.append(le("p","Access not checked yet."),Z)}else U.routes.some(Z=>Z.access==="unknown")&&Ie.append(le("p","Access checked."));if(te){const Z=T.zones.find(ie=>ie.id===te.zoneId);if(Ie.append(le("p",`Stored at: ${Z.label.replace(/^\d+ · /,"")}.`)),A.mode==="planning"&&Z.kind!=="offshore"){const ie=le("div","","retention-pills");T.retentionOptions.forEach(j=>ie.append(Ct(`${j}d`,()=>J(()=>{const K=structuredClone(A.plan);K[U.id].days=j,A.plan=K,nn.play("retention",{gain:.5})}),j===te.days?"primary":""))),Ie.append(le("p","Days to keep","eyebrow"),ie)}}else A.mode==="planning"&&Ie.append(le("p","Not placed yet. Click a storage area."));A.mode==="planning"&&Ie.append(A.flag===U.id?le("p","Marked as longest wait.","marked"):Ct("Mark longest wait",()=>{J(()=>{A.flag=U.id}),nn.play("flag",{gain:.5}),T.sources.every(Z=>A.plan[Z.id])&&qe(`Marked: ${U.label}. Click Open gate to start.`)}))}else if(q==="request"){const U=x==null?void 0:x.requests.find(te=>te.id===H);if(!U){i();return}if(Ie.append(Ct("Close",()=>{i()},"fold"),le("p","Request","eyebrow"),le("h2",L().requests.find(te=>te.id===H).label)),U.finish<=A.seconds){const te=le("div","","delay-chain");for(const[R,Y]of[["Setup",U.setupWait],["Line",U.queueWait],["Prepare",U.prepare],["Search",U.service]]){const Z=le("div");Z.append(le("strong",`${Y}s`),le("span",String(R))),te.append(Z)}Ie.append(te,le("p",Np(U)))}else Ie.append(le("p","Still in progress."))}},d=function(U){return U.requests.filter(te=>te.status==="late").map(te=>b.berthWorldXZ(te.zoneId)).filter(te=>!!te)},u=function(U){const te=L().requests.find(Z=>Z.id===U.id).label;if(U.status==="access-denied")return[te,"Access denied"];if(U.status==="access-unknown")return[te,"Access not checked"];if(U.status==="expired")return[te,"Data already deleted"];const Y=[["setup",U.setupWait],["waiting in line",U.queueWait],["preparing",U.prepare],["search",U.service]].reduce((Z,ie)=>ie[1]>Z[1]?ie:Z);return[te,`Took ${U.elapsed}s. Due in ${U.deadline}s. Most time: ${Y[0]}${Y[0]==="preparing"?` in ${Ve(U.zoneId)}`:""}.`]},h=function(){if(!x)return;xe.hidden=!1;const U=io(x),te=A.flag===U,R=x.criticalTotal-x.criticalMet,Y=x.totalCost>L().budget,Z=[["Urgent on time",`${x.criticalMet} of ${x.criticalTotal}`,R>0],["All on time",`${x.met} of ${x.requests.length}`,!1],["Budget used",`${x.totalCost} of ${L().budget}`,Y],...x.retentionFailures.length?[["Kept too few days",`${x.retentionFailures.length} source${x.retentionFailures.length===1?"":"s"}`,!0]]:[],["Longest wait",it(U),!1],["Your guess",`${it(A.flag)} (${te?"right":"wrong"})`,!te]],ie=le("dl","","result-rows");Z.forEach(([Oe,Xe,Mt])=>ie.append(le("dt",Oe),le("dd",Xe,Mt?"bad":"")));const j=R===0?Y?"On time, over budget":"All urgent trucks on time":`${R} urgent truck${R===1?"":"s"} failed${Y?", over budget":""}`;xe.replaceChildren(le("h2",j),ie);const K=x.requests.filter(Oe=>Oe.critical&&Oe.status!=="met");if(K.length){const Oe=le("dl","","result-rows stacked");K.forEach(Xe=>{const[Mt,mt]=u(Xe);Oe.append(le("dt",Mt),le("dd",mt,"bad"))}),xe.append(le("p","Failed urgent trucks","eyebrow"),Oe)}const _e=Oe=>dn(T,Wn(T,Oe),Oe.plan,Oe.verified);if(A.round==="transfer"){const Oe=A.history.at(-1),Xe=_e(Oe);xe.append(le("p",`Shift 1: ${Xe.criticalMet} of ${Xe.criticalTotal} urgent on time. Shift 2: ${x.criticalMet} of ${x.criticalTotal}.`,"takeaway"))}if(A.round==="transfer-fix"){const Oe=_e(A.history.at(-1));xe.append(le("p",`First try: ${Oe.criticalMet} of ${Oe.criticalTotal} urgent on time. After your fix: ${x.criticalMet} of ${x.criticalTotal}.`,"takeaway"))}const Ue=Fs(T,A);if(Ue==="transfer"&&A.round==="initial"&&xe.append(le("p","Shift 1 passed. Next shift.","takeaway")),Ue){const Oe=Ue==="revision"?`Change plan (${ot.revisionLimit} moves)`:Ue==="transfer-fix"?"Fix up to two containers and rerun shift 2":"Next shift";xe.append(Ct(Oe,()=>{const Xe=x;A=tg(T,A),x=null,M=!1,t(),i(),b.clearGhosts(),ne()&&b.showGhosts(d(Xe)),qe(A.round==="revision"?"Same trucks again. Move up to two containers.":A.round==="transfer-fix"?"Same trucks as shift 2. Move up to two containers.":"New requests. Move any container you like."),ee(),w()},"primary"))}else xe.append(Ct("Play again",()=>{A=uo(T),x=null,M=!1,t(),i(),b.clearGhosts(),ze.hidden=!1,ee(),w()},"primary"))},m=function(U){if(A.mode!=="planning"){e("source",U);return}F=U,b.setLifted(U),s(),O=Ir(T,U),z=-1,nn.play("lift",{gain:.35}),e("source",U),qe(`Click a storage area for ${it(U)}.`)},_=function(U){var R;if(A.mode!=="planning"||!F)return;const te=F;J(()=>{var K;const Y=T.sources.find(_e=>_e.id===te),Z=T.zones.find(_e=>_e.id===U);if(!Ir(T,Y.id).includes(U))throw new Error(`${Y.label} cannot go to ${Z.label}. ${Y.blocked[U]}`);const ie=n(U,Y.id);if(ie+Y.volume>Z.capacity)throw new Error(`${Z.label} is full: ${ie} of ${Z.capacity} ${T.unit} used, and ${Y.label} needs ${Y.volume}.`);const j=structuredClone(A.plan);if(j[Y.id]={zoneId:U,days:((K=j[Y.id])==null?void 0:K.days)??T.retentionOptions.find(_e=>_e>=Y.requiredDays)??T.retentionOptions.at(-1)},Is(A,j)>ot.revisionLimit)throw new Error("You can move only two containers this shift.");A.plan=j,b.landing.add(Y.id)}),((R=A.plan[te])==null?void 0:R.zoneId)===U&&(t(),e("source",te))},g=function(){if(A.mode==="planning"){J(()=>{if(!T.sources.every(U=>A.plan[U.id]))throw new Error("Place every container first.");if(!A.flag)throw new Error("First click Mark longest wait on one container.");A=zr({...A,mode:"committed"},T),x=dn(T,L(),A.plan,A.verified),A.phase=0,M=!0,nn.play("gate")}),x&&(b.clearGhosts(),t(),i(),qe("Trucks are arriving. Click one to see its times."));return}A.mode==="committed"&&J(()=>{if(A.seconds<cn(T,A))throw new Error("Wait for this wave to finish.");if(A.phase>=L().phases.length-1)throw new Error("Every wave has started.");A.phase++,M=!0,nn.play("gate"),qe(`Wave ${A.phase+1} is arriving.`)})},p=function(){if(re=!re,Le.hidden=!re,re){const U=le("ol");f().forEach(te=>U.append(le("li",te))),Le.replaceChildren(Ct("Close",p,"fold"),le("h2","Help"),le("p",T.objective),U,le("h3","Keyboard"),le("p","Tab to a label and press Enter to click it. After you pick a container, Left and Right arrows move between storage areas. Esc closes a panel."))}},f=function(){return["Click a container on the ship to see its requests.",T.retentionOptions.length===1?"Click a numbered storage area to put it there.":"Click a numbered storage area to put it there. Set the days to keep in the panel.","Use the request board and the berth boards to pick the container whose trucks will wait longest. Click Mark longest wait in its panel.","Click Open gate to send in trucks. Click it again for each new wave.","Click a truck to see where its time went."]},w=function(){b.gateLabel.textContent=A.mode==="finished"?"Shift over":A.mode==="committed"&&A.seconds<cn(T,A)?"Gate open":"Open gate";const U=x?x.totalCost:o();et.replaceChildren(le("span",oe[A.round],"eyebrow"),le("strong",`${Math.floor(A.seconds)}s`),y(),le("span",`Budget used: ${U} of ${L().budget}`,"gauge-label")),Q.hidden=A.mode!=="committed";const te=A.mode==="committed"&&A.phase>=0&&A.seconds<cn(T,A);W.disabled=!te,se.disabled=!te,s(),a(),S.textContent=M?"Pause":"Play",q!=="none"&&c(),A.mode==="finished"?h():xe.hidden=!0,qe(l())},y=function(){const U=x?x.totalCost:o(),te=le("div","","gauge"),R=le("div","",U>L().budget?"gauge-fill over":"gauge-fill");return R.style.width=`${Math.min(100,U/L().budget*100)}%`,te.append(R),te},v=function(U){const te=A.seconds,R=A.mode==="finished";if(A=Jm(T,A,U),!x)return;x!==Se&&(Se=x,Ne=new Set(x.requests.filter(ie=>te>0&&ie.finish<=te).map(ie=>ie.id)));const Y=x.requests.filter(ie=>!Ne.has(ie.id)&&ie.finish<=A.seconds);Y.forEach(ie=>Ne.add(ie.id));const Z=performance.now();Y.length&&Z-de>350&&(de=Z,nn.play(Y.some(ie=>ie.status!=="met"&&ie.status!=="late")?"turned-back":Y.some(ie=>ie.status==="late")?"truck-late":"truck-met")),!R&&A.mode==="finished"&&(nn.play(A.flag===io(x)?"flag-right":"flag-wrong"),eg(A)&&!fe&&(fe=!0,X.connected&&X.finish({score:x.criticalTotal?Math.round(x.criticalMet/x.criticalTotal*100):100,max:100})))};const T=$m(window.__ENGINE_CONTENT__,new URLSearchParams(location.search).get("scenario")),{theme:C}=Wm((mo=T.theme)==null?void 0:mo.pack),P={...C.colors,...(go=T.theme)==null?void 0:go.colors};kp(P),document.documentElement.style.setProperty("--splunk-gradient",`radial-gradient(circle at left top, ${P.primary}, ${P.primary} 50%, ${P.secondary})`),document.documentElement.style.setProperty("--splunk-line",`linear-gradient(90deg, ${P.primary}, ${P.primary} 45%, ${P.secondary})`);let A=uo(T),M=!1,x=null,D=1,F=null,O=[],z=-1,q="none",H="",re=!1;const X=ag();let fe=!1,ge=!1;const Ee=le("div","","terminal"),ze=le("section","","intro"),Ze=le("p","","instruction");Ze.setAttribute("role","status");const et=le("div","","hud"),Ie=le("section","","tag");Ie.hidden=!0;const Q=le("div","","run-controls");Q.hidden=!0;const ae=le("div","","corner-controls"),xe=le("section","","summary");xe.hidden=!0;const Le=le("section","","help-panel");Le.hidden=!0;const Ae=le("div","","left-column");Ae.append(Ie,xe),Ts.replaceChildren(Ee,Ze,et,Ae,Q,ae,Le,ze);const qe=U=>{Ze.textContent=U},it=U=>{var te;return((te=T.sources.find(R=>R.id===U))==null?void 0:te.label)??U},L=()=>Wn(T,A),oe={initial:"Shift 1",revision:"Shift 1 again",transfer:"Shift 2","transfer-fix":"Shift 2 again"},ne=()=>A.round==="revision"||A.round==="transfer-fix",ee=()=>{try{sg(localStorage,T,A)}catch{qe("Could not save progress in this browser.")}},J=U=>{try{U(),ee(),w()}catch(te){qe(te.message)}};let me="",ce=null,pe="",We="";const Ve=U=>{var te;return(((te=T.zones.find(R=>R.id===U))==null?void 0:te.label)??"").replace(/^\d+ · /,"").toLowerCase()};let b;try{b=new Gp(Ee,T,U=>{U.kind==="source"?m(U.id):U.kind==="berth"?_(U.id):g()})}catch{throw Ts.replaceChildren(le("h1","The Port could not load"),le("p","This browser could not start the 3D view.")),new Error("terminal unavailable")}b.onLand=()=>nn.play("set-down",{gain:.5}),b.screenPanels=()=>[Ie,xe,et,ae,Ze,Q],Ee.addEventListener("request-selected",U=>e("request",U.detail)),Ee.addEventListener("scene-lost",()=>{M=!1,qe("The 3D view stopped. Reload the page.")});const S=Ct("Pause",()=>{M=!M,w()}),k=Ct("1x",()=>{D=D===1?2:D===2?4:1,k.textContent=`${D}x`}),W=Ct("Skip 5s",()=>J(()=>{M=!1,v(5e3)})),se=Ct("Skip to end of shift",()=>J(()=>{M=!1;const U=L().phases.length-1;for(;v(Math.max(0,cn(T,A)-A.seconds)*ot.millisecondsPerSecond),!(A.mode==="finished"||A.phase>=U);)A.phase++}));Q.append(S,k,W,se);const $=nn.mountToggle(Ct("Sound on",()=>{})),Re=Ct("Help",p),he=Ct("Start over",()=>{ge=!0;try{localStorage.removeItem(Ur(T))}catch{}location.reload()});ae.append($,Re,he);const be=le("div","","intro-card"),we=le("ol");f().forEach(U=>we.append(le("li",U))),be.append(le("h1","The Port"),le("p",T.title,"subtitle"),le("h2","The situation"),le("p",T.brief),le("h2","Your goal"),le("p",T.objective),le("h2","What to do"),we,Ct("Start",()=>{ze.hidden=!0,w()},"primary")),ze.append(be),window.addEventListener("keydown",U=>{var te;if(U.key==="Escape"){re?p():Ie.hidden?F&&t():i();return}!F||!O.length||(U.key==="ArrowRight"||U.key==="ArrowLeft")&&(z=(z+(U.key==="ArrowRight"?1:-1)+O.length)%O.length,(te=b.berthLabels.get(O[z]))==null||te.focus(),U.preventDefault())});let de=0,Se=null,Ne=new Set;b.stage.frame=U=>{M&&(v(U*ot.visual.playbackRate*D),A.seconds>=cn(T,A)&&(M=!1,ee()),w()),b.selectedRequest=q==="request"?H:"",b.gateOpen=A.mode==="committed"&&A.phase>=0&&A.seconds<cn(T,A),b.update(A,x,U)},window.advanceTime=U=>{v(U),w(),b.update(A,x,1),ee()},window.render_game_to_text=()=>JSON.stringify({engine:"port",renderer:"threejs",state:A,running:M,lifted:F,tagKind:q,tagId:H,objects:b.stage.describeObjects(),containers:T.sources.map(U=>({id:U.id,...b.anchor(b.containers.get(U.id),[0,.4,0])})),trucks:x?x.requests.filter(U=>b.trucks.has(U.id)).map(U=>({id:U.id,...b.anchor(b.trucks.get(U.id),[0,1,0])})):[],requests:x==null?void 0:x.requests.filter(U=>U.arrival<=A.seconds).map(U=>({...U,current:Ds(U,A.seconds)})),drawCalls:b.stage.renderer.info.render.calls}),window.addEventListener("pagehide",()=>{ge||ee()});let De=!1;try{const U=rg(localStorage,T);U&&(A=U,De=!0,A.mode!=="planning"&&(x=dn(T,L(),A.plan,A.verified)))}catch{try{localStorage.removeItem(Ur(T))}catch{}}ze.hidden=De||Object.keys(A.plan).length>0,w()}catch(i){i.message!=="terminal unavailable"&&Ts.replaceChildren(le("h1","The Port could not load"),le("p",i.message))}
