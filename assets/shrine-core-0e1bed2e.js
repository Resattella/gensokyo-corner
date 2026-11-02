(() => {
const Km={ROTATE:0,DOLLY:1,PAN:2},jm={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Xc=0,Da=1,qc=2,Wo=1,Yc=2,nn=3,_n=0,Te=1,rn=2,mn=0,ri=1,Ia=2,Ua=3,Na=4,Jc=5,Cn=100,Zc=101,$c=102,Kc=103,jc=104,Qc=200,tl=201,el=202,nl=203,xs=204,Ms=205,il=206,rl=207,sl=208,al=209,ol=210,cl=211,ll=212,hl=213,ul=214,Ss=0,ys=1,Es=2,oi=3,Ts=4,As=5,bs=6,ws=7,Xo=0,fl=1,dl=2,gn=0,pl=1,ml=2,gl=3,_l=4,vl=5,xl=6,Ml=7,qo=300,ci=301,li=302,Rs=303,Cs=304,Lr=306,Ps=1e3,Ln=1001,Ls=1002,Ce=1003,Sl=1004,Wi=1005,We=1006,Fr=1007,Dn=1008,Ye=1009,Yo=1010,Jo=1011,Ci=1012,la=1013,In=1014,Xe=1015,zi=1016,ha=1017,ua=1018,Pi=1020,Zo=35902,$o=35899,Ko=1021,jo=1022,ze=1023,Li=1026,Di=1027,fa=1028,da=1029,Qo=1030,pa=1031,ma=1033,Sr=33776,yr=33777,Er=33778,Tr=33779,Ds=35840,Is=35841,Us=35842,Ns=35843,Fs=36196,Os=37492,Bs=37496,zs=37808,Hs=37809,Vs=37810,Gs=37811,ks=37812,Ws=37813,Xs=37814,qs=37815,Ys=37816,Js=37817,Zs=37818,$s=37819,Ks=37820,js=37821,Qs=36492,ta=36494,ea=36495,na=36283,ia=36284,ra=36285,sa=36286,yl=3200,El=3201,ga=0,Tl=1,pn="",Ie="srgb",hi="srgb-linear",br="linear",te="srgb",Hn=7680,Fa=519,Al=512,bl=513,wl=514,tc=515,Rl=516,Cl=517,Pl=518,Ll=519,Oa=35044,Ba="300 es",qe=2e3,wr=2001;class Fn{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){const n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){const n=this._listeners;if(n===void 0)return;const r=n[t];if(r!==void 0){const s=r.indexOf(e);s!==-1&&r.splice(s,1)}}dispatchEvent(t){const e=this._listeners;if(e===void 0)return;const n=e[t.type];if(n!==void 0){t.target=this;const r=n.slice(0);for(let s=0,a=r.length;s<a;s++)r[s].call(this,t);t.target=null}}}const ve=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let za=1234567;const si=Math.PI/180,Ii=180/Math.PI;function On(){const i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(ve[i&255]+ve[i>>8&255]+ve[i>>16&255]+ve[i>>24&255]+"-"+ve[t&255]+ve[t>>8&255]+"-"+ve[t>>16&15|64]+ve[t>>24&255]+"-"+ve[e&63|128]+ve[e>>8&255]+"-"+ve[e>>16&255]+ve[e>>24&255]+ve[n&255]+ve[n>>8&255]+ve[n>>16&255]+ve[n>>24&255]).toLowerCase()}function Gt(i,t,e){return Math.max(t,Math.min(e,i))}function _a(i,t){return(i%t+t)%t}function Dl(i,t,e,n,r){return n+(i-t)*(r-n)/(e-t)}function Il(i,t,e){return i!==t?(e-i)/(t-i):0}function bi(i,t,e){return(1-e)*i+e*t}function Ul(i,t,e,n){return bi(i,t,1-Math.exp(-e*n))}function Nl(i,t=1){return t-Math.abs(_a(i,t*2)-t)}function Fl(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*(3-2*i))}function Ol(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*i*(i*(i*6-15)+10))}function Bl(i,t){return i+Math.floor(Math.random()*(t-i+1))}function zl(i,t){return i+Math.random()*(t-i)}function Hl(i){return i*(.5-Math.random())}function Vl(i){i!==void 0&&(za=i);let t=za+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function Gl(i){return i*si}function kl(i){return i*Ii}function Wl(i){return(i&i-1)===0&&i!==0}function Xl(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function ql(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function Yl(i,t,e,n,r){const s=Math.cos,a=Math.sin,o=s(e/2),l=a(e/2),c=s((t+n)/2),h=a((t+n)/2),u=s((t-n)/2),d=a((t-n)/2),p=s((n-t)/2),g=a((n-t)/2);switch(r){case"XYX":i.set(o*h,l*u,l*d,o*c);break;case"YZY":i.set(l*d,o*h,l*u,o*c);break;case"ZXZ":i.set(l*u,l*d,o*h,o*c);break;case"XZX":i.set(o*h,l*g,l*p,o*c);break;case"YXY":i.set(l*p,o*h,l*g,o*c);break;case"ZYZ":i.set(l*g,l*p,o*h,o*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function ni(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function Se(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const Qm={DEG2RAD:si,RAD2DEG:Ii,generateUUID:On,clamp:Gt,euclideanModulo:_a,mapLinear:Dl,inverseLerp:Il,lerp:bi,damp:Ul,pingpong:Nl,smoothstep:Fl,smootherstep:Ol,randInt:Bl,randFloat:zl,randFloatSpread:Hl,seededRandom:Vl,degToRad:Gl,radToDeg:kl,isPowerOfTwo:Wl,ceilPowerOfTwo:Xl,floorPowerOfTwo:ql,setQuaternionFromProperEuler:Yl,normalize:Se,denormalize:ni};class ct{constructor(t=0,e=0){ct.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6],this.y=r[1]*e+r[4]*n+r[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Gt(this.x,t.x,e.x),this.y=Gt(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=Gt(this.x,t,e),this.y=Gt(this.y,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Gt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Gt(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),r=Math.sin(e),s=this.x-t.x,a=this.y-t.y;return this.x=s*n-a*r+t.x,this.y=s*r+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Hi{constructor(t=0,e=0,n=0,r=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=r}static slerpFlat(t,e,n,r,s,a,o){let l=n[r+0],c=n[r+1],h=n[r+2],u=n[r+3];const d=s[a+0],p=s[a+1],g=s[a+2],x=s[a+3];if(o===0){t[e+0]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u;return}if(o===1){t[e+0]=d,t[e+1]=p,t[e+2]=g,t[e+3]=x;return}if(u!==x||l!==d||c!==p||h!==g){let m=1-o;const f=l*d+c*p+h*g+u*x,T=f>=0?1:-1,y=1-f*f;if(y>Number.EPSILON){const R=Math.sqrt(y),b=Math.atan2(R,f*T);m=Math.sin(m*b)/R,o=Math.sin(o*b)/R}const v=o*T;if(l=l*m+d*v,c=c*m+p*v,h=h*m+g*v,u=u*m+x*v,m===1-o){const R=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=R,c*=R,h*=R,u*=R}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,n,r,s,a){const o=n[r],l=n[r+1],c=n[r+2],h=n[r+3],u=s[a],d=s[a+1],p=s[a+2],g=s[a+3];return t[e]=o*g+h*u+l*p-c*d,t[e+1]=l*g+h*d+c*u-o*p,t[e+2]=c*g+h*p+o*d-l*u,t[e+3]=h*g-o*u-l*d-c*p,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,r){return this._x=t,this._y=e,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,r=t._y,s=t._z,a=t._order,o=Math.cos,l=Math.sin,c=o(n/2),h=o(r/2),u=o(s/2),d=l(n/2),p=l(r/2),g=l(s/2);switch(a){case"XYZ":this._x=d*h*u+c*p*g,this._y=c*p*u-d*h*g,this._z=c*h*g+d*p*u,this._w=c*h*u-d*p*g;break;case"YXZ":this._x=d*h*u+c*p*g,this._y=c*p*u-d*h*g,this._z=c*h*g-d*p*u,this._w=c*h*u+d*p*g;break;case"ZXY":this._x=d*h*u-c*p*g,this._y=c*p*u+d*h*g,this._z=c*h*g+d*p*u,this._w=c*h*u-d*p*g;break;case"ZYX":this._x=d*h*u-c*p*g,this._y=c*p*u+d*h*g,this._z=c*h*g-d*p*u,this._w=c*h*u+d*p*g;break;case"YZX":this._x=d*h*u+c*p*g,this._y=c*p*u+d*h*g,this._z=c*h*g-d*p*u,this._w=c*h*u-d*p*g;break;case"XZY":this._x=d*h*u-c*p*g,this._y=c*p*u-d*h*g,this._z=c*h*g+d*p*u,this._w=c*h*u+d*p*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,r=Math.sin(n);return this._x=t.x*r,this._y=t.y*r,this._z=t.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],r=e[4],s=e[8],a=e[1],o=e[5],l=e[9],c=e[2],h=e[6],u=e[10],d=n+o+u;if(d>0){const p=.5/Math.sqrt(d+1);this._w=.25/p,this._x=(h-l)*p,this._y=(s-c)*p,this._z=(a-r)*p}else if(n>o&&n>u){const p=2*Math.sqrt(1+n-o-u);this._w=(h-l)/p,this._x=.25*p,this._y=(r+a)/p,this._z=(s+c)/p}else if(o>u){const p=2*Math.sqrt(1+o-n-u);this._w=(s-c)/p,this._x=(r+a)/p,this._y=.25*p,this._z=(l+h)/p}else{const p=2*Math.sqrt(1+u-n-o);this._w=(a-r)/p,this._x=(s+c)/p,this._y=(l+h)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Gt(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const r=Math.min(1,e/n);return this.slerp(t,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,r=t._y,s=t._z,a=t._w,o=e._x,l=e._y,c=e._z,h=e._w;return this._x=n*h+a*o+r*c-s*l,this._y=r*h+a*l+s*o-n*c,this._z=s*h+a*c+n*l-r*o,this._w=a*h-n*o-r*l-s*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,r=this._y,s=this._z,a=this._w;let o=a*t._w+n*t._x+r*t._y+s*t._z;if(o<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,o=-o):this.copy(t),o>=1)return this._w=a,this._x=n,this._y=r,this._z=s,this;const l=1-o*o;if(l<=Number.EPSILON){const p=1-e;return this._w=p*a+e*this._w,this._x=p*n+e*this._x,this._y=p*r+e*this._y,this._z=p*s+e*this._z,this.normalize(),this}const c=Math.sqrt(l),h=Math.atan2(c,o),u=Math.sin((1-e)*h)/c,d=Math.sin(e*h)/c;return this._w=a*u+this._w*d,this._x=n*u+this._x*d,this._y=r*u+this._y*d,this._z=s*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),r=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(r*Math.sin(t),r*Math.cos(t),s*Math.sin(e),s*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class P{constructor(t=0,e=0,n=0){P.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Ha.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Ha.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,r=this.z,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6]*r,this.y=s[1]*e+s[4]*n+s[7]*r,this.z=s[2]*e+s[5]*n+s[8]*r,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,r=this.z,s=t.elements,a=1/(s[3]*e+s[7]*n+s[11]*r+s[15]);return this.x=(s[0]*e+s[4]*n+s[8]*r+s[12])*a,this.y=(s[1]*e+s[5]*n+s[9]*r+s[13])*a,this.z=(s[2]*e+s[6]*n+s[10]*r+s[14])*a,this}applyQuaternion(t){const e=this.x,n=this.y,r=this.z,s=t.x,a=t.y,o=t.z,l=t.w,c=2*(a*r-o*n),h=2*(o*e-s*r),u=2*(s*n-a*e);return this.x=e+l*c+a*u-o*h,this.y=n+l*h+o*c-s*u,this.z=r+l*u+s*h-a*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,r=this.z,s=t.elements;return this.x=s[0]*e+s[4]*n+s[8]*r,this.y=s[1]*e+s[5]*n+s[9]*r,this.z=s[2]*e+s[6]*n+s[10]*r,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Gt(this.x,t.x,e.x),this.y=Gt(this.y,t.y,e.y),this.z=Gt(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=Gt(this.x,t,e),this.y=Gt(this.y,t,e),this.z=Gt(this.z,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Gt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,r=t.y,s=t.z,a=e.x,o=e.y,l=e.z;return this.x=r*l-s*o,this.y=s*a-n*l,this.z=n*o-r*a,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Or.copy(this).projectOnVector(t),this.sub(Or)}reflect(t){return this.sub(Or.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Gt(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,r=this.z-t.z;return e*e+n*n+r*r}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const r=Math.sin(e)*t;return this.x=r*Math.sin(n),this.y=Math.cos(e)*t,this.z=r*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),r=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=r,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Or=new P,Ha=new Hi;class Ht{constructor(t,e,n,r,s,a,o,l,c){Ht.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,r,s,a,o,l,c)}set(t,e,n,r,s,a,o,l,c){const h=this.elements;return h[0]=t,h[1]=r,h[2]=o,h[3]=e,h[4]=s,h[5]=l,h[6]=n,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,r=e.elements,s=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],h=n[4],u=n[7],d=n[2],p=n[5],g=n[8],x=r[0],m=r[3],f=r[6],T=r[1],y=r[4],v=r[7],R=r[2],b=r[5],C=r[8];return s[0]=a*x+o*T+l*R,s[3]=a*m+o*y+l*b,s[6]=a*f+o*v+l*C,s[1]=c*x+h*T+u*R,s[4]=c*m+h*y+u*b,s[7]=c*f+h*v+u*C,s[2]=d*x+p*T+g*R,s[5]=d*m+p*y+g*b,s[8]=d*f+p*v+g*C,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],r=t[2],s=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8];return e*a*h-e*o*c-n*s*h+n*o*l+r*s*c-r*a*l}invert(){const t=this.elements,e=t[0],n=t[1],r=t[2],s=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],u=h*a-o*c,d=o*l-h*s,p=c*s-a*l,g=e*u+n*d+r*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const x=1/g;return t[0]=u*x,t[1]=(r*c-h*n)*x,t[2]=(o*n-r*a)*x,t[3]=d*x,t[4]=(h*e-r*l)*x,t[5]=(r*s-o*e)*x,t[6]=p*x,t[7]=(n*l-c*e)*x,t[8]=(a*e-n*s)*x,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,r,s,a,o){const l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*a+c*o)+a+t,-r*c,r*l,-r*(-c*a+l*o)+o+e,0,0,1),this}scale(t,e){return this.premultiply(Br.makeScale(t,e)),this}rotate(t){return this.premultiply(Br.makeRotation(-t)),this}translate(t,e){return this.premultiply(Br.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let r=0;r<9;r++)if(e[r]!==n[r])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Br=new Ht;function ec(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function Ui(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Jl(){const i=Ui("canvas");return i.style.display="block",i}const Va={};function Ni(i){i in Va||(Va[i]=!0,console.warn(i))}function Zl(i,t,e){return new Promise(function(n,r){function s(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:r();break;case i.TIMEOUT_EXPIRED:setTimeout(s,e);break;default:n()}}setTimeout(s,e)})}const Ga=new Ht().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),ka=new Ht().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function $l(){const i={enabled:!0,workingColorSpace:hi,spaces:{},convert:function(r,s,a){return this.enabled===!1||s===a||!s||!a||(this.spaces[s].transfer===te&&(r.r=an(r.r),r.g=an(r.g),r.b=an(r.b)),this.spaces[s].primaries!==this.spaces[a].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===te&&(r.r=ai(r.r),r.g=ai(r.g),r.b=ai(r.b))),r},workingToColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},colorSpaceToWorking:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===pn?br:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,a){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,s){return Ni("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(r,s)},toWorkingColorSpace:function(r,s){return Ni("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(r,s)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[hi]:{primaries:t,whitePoint:n,transfer:br,toXYZ:Ga,fromXYZ:ka,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:Ie},outputColorSpaceConfig:{drawingBufferColorSpace:Ie}},[Ie]:{primaries:t,whitePoint:n,transfer:te,toXYZ:Ga,fromXYZ:ka,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:Ie}}}),i}const $t=$l();function an(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function ai(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let Vn;class Kl{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{Vn===void 0&&(Vn=Ui("canvas")),Vn.width=t.width,Vn.height=t.height;const r=Vn.getContext("2d");t instanceof ImageData?r.putImageData(t,0,0):r.drawImage(t,0,0,t.width,t.height),n=Vn}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=Ui("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const r=n.getImageData(0,0,t.width,t.height),s=r.data;for(let a=0;a<s.length;a++)s[a]=an(s[a]/255)*255;return n.putImageData(r,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(an(e[n]/255)*255):e[n]=an(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let jl=0;class va{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:jl++}),this.uuid=On(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):e instanceof VideoFrame?t.set(e.displayHeight,e.displayWidth,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let a=0,o=r.length;a<o;a++)r[a].isDataTexture?s.push(zr(r[a].image)):s.push(zr(r[a]))}else s=zr(r);n.url=s}return e||(t.images[this.uuid]=n),n}}function zr(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Kl.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Ql=0;const Hr=new P;class ge extends Fn{constructor(t=ge.DEFAULT_IMAGE,e=ge.DEFAULT_MAPPING,n=Ln,r=Ln,s=We,a=Dn,o=ze,l=Ye,c=ge.DEFAULT_ANISOTROPY,h=pn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Ql++}),this.uuid=On(),this.name="",this.source=new va(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=r,this.magFilter=s,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new ct(0,0),this.repeat=new ct(1,1),this.center=new ct(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ht,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Hr).x}get height(){return this.source.getSize(Hr).y}get depth(){return this.source.getSize(Hr).z}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Texture.setValues(): parameter '${e}' has value of undefined.`);continue}const r=this[e];if(r===void 0){console.warn(`THREE.Texture.setValues(): property '${e}' does not exist.`);continue}r&&n&&r.isVector2&&n.isVector2||r&&n&&r.isVector3&&n.isVector3||r&&n&&r.isMatrix3&&n.isMatrix3?r.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==qo)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Ps:t.x=t.x-Math.floor(t.x);break;case Ln:t.x=t.x<0?0:1;break;case Ls:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Ps:t.y=t.y-Math.floor(t.y);break;case Ln:t.y=t.y<0?0:1;break;case Ls:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}ge.DEFAULT_IMAGE=null;ge.DEFAULT_MAPPING=qo;ge.DEFAULT_ANISOTROPY=1;class ee{constructor(t=0,e=0,n=0,r=1){ee.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=r}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,r){return this.x=t,this.y=e,this.z=n,this.w=r,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,r=this.z,s=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*r+a[12]*s,this.y=a[1]*e+a[5]*n+a[9]*r+a[13]*s,this.z=a[2]*e+a[6]*n+a[10]*r+a[14]*s,this.w=a[3]*e+a[7]*n+a[11]*r+a[15]*s,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,r,s;const l=t.elements,c=l[0],h=l[4],u=l[8],d=l[1],p=l[5],g=l[9],x=l[2],m=l[6],f=l[10];if(Math.abs(h-d)<.01&&Math.abs(u-x)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+x)<.1&&Math.abs(g+m)<.1&&Math.abs(c+p+f-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const y=(c+1)/2,v=(p+1)/2,R=(f+1)/2,b=(h+d)/4,C=(u+x)/4,D=(g+m)/4;return y>v&&y>R?y<.01?(n=0,r=.707106781,s=.707106781):(n=Math.sqrt(y),r=b/n,s=C/n):v>R?v<.01?(n=.707106781,r=0,s=.707106781):(r=Math.sqrt(v),n=b/r,s=D/r):R<.01?(n=.707106781,r=.707106781,s=0):(s=Math.sqrt(R),n=C/s,r=D/s),this.set(n,r,s,e),this}let T=Math.sqrt((m-g)*(m-g)+(u-x)*(u-x)+(d-h)*(d-h));return Math.abs(T)<.001&&(T=1),this.x=(m-g)/T,this.y=(u-x)/T,this.z=(d-h)/T,this.w=Math.acos((c+p+f-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Gt(this.x,t.x,e.x),this.y=Gt(this.y,t.y,e.y),this.z=Gt(this.z,t.z,e.z),this.w=Gt(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=Gt(this.x,t,e),this.y=Gt(this.y,t,e),this.z=Gt(this.z,t,e),this.w=Gt(this.w,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Gt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class th extends Fn{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:We,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new ee(0,0,t,e),this.scissorTest=!1,this.viewport=new ee(0,0,t,e);const r={width:t,height:e,depth:n.depth},s=new ge(r);this.textures=[];const a=n.count;for(let o=0;o<a;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(t={}){const e={minFilter:We,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=t,this.textures[r].image.height=e,this.textures[r].image.depth=n,this.textures[r].isArrayTexture=this.textures[r].image.depth>1;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;const r=Object.assign({},t.textures[e].image);this.textures[e].source=new va(r)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Un extends th{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class nc extends ge{constructor(t=null,e=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:r},this.magFilter=Ce,this.minFilter=Ce,this.wrapR=Ln,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class eh extends ge{constructor(t=null,e=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:r},this.magFilter=Ce,this.minFilter=Ce,this.wrapR=Ln,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Bn{constructor(t=new P(1/0,1/0,1/0),e=new P(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(Fe.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(Fe.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=Fe.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const s=n.getAttribute("position");if(e===!0&&s!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,Fe):Fe.fromBufferAttribute(s,a),Fe.applyMatrix4(t.matrixWorld),this.expandByPoint(Fe);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Xi.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Xi.copy(n.boundingBox)),Xi.applyMatrix4(t.matrixWorld),this.union(Xi)}const r=t.children;for(let s=0,a=r.length;s<a;s++)this.expandByObject(r[s],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Fe),Fe.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(gi),qi.subVectors(this.max,gi),Gn.subVectors(t.a,gi),kn.subVectors(t.b,gi),Wn.subVectors(t.c,gi),cn.subVectors(kn,Gn),ln.subVectors(Wn,kn),Sn.subVectors(Gn,Wn);let e=[0,-cn.z,cn.y,0,-ln.z,ln.y,0,-Sn.z,Sn.y,cn.z,0,-cn.x,ln.z,0,-ln.x,Sn.z,0,-Sn.x,-cn.y,cn.x,0,-ln.y,ln.x,0,-Sn.y,Sn.x,0];return!Vr(e,Gn,kn,Wn,qi)||(e=[1,0,0,0,1,0,0,0,1],!Vr(e,Gn,kn,Wn,qi))?!1:(Yi.crossVectors(cn,ln),e=[Yi.x,Yi.y,Yi.z],Vr(e,Gn,kn,Wn,qi))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Fe).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Fe).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Ke[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Ke[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Ke[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Ke[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Ke[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Ke[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Ke[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Ke[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Ke),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const Ke=[new P,new P,new P,new P,new P,new P,new P,new P],Fe=new P,Xi=new Bn,Gn=new P,kn=new P,Wn=new P,cn=new P,ln=new P,Sn=new P,gi=new P,qi=new P,Yi=new P,yn=new P;function Vr(i,t,e,n,r){for(let s=0,a=i.length-3;s<=a;s+=3){yn.fromArray(i,s);const o=r.x*Math.abs(yn.x)+r.y*Math.abs(yn.y)+r.z*Math.abs(yn.z),l=t.dot(yn),c=e.dot(yn),h=n.dot(yn);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}const nh=new Bn,_i=new P,Gr=new P;class di{constructor(t=new P,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):nh.setFromPoints(t).getCenter(n);let r=0;for(let s=0,a=t.length;s<a;s++)r=Math.max(r,n.distanceToSquared(t[s]));return this.radius=Math.sqrt(r),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;_i.subVectors(t,this.center);const e=_i.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),r=(n-this.radius)*.5;this.center.addScaledVector(_i,r/n),this.radius+=r}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Gr.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(_i.copy(t.center).add(Gr)),this.expandByPoint(_i.copy(t.center).sub(Gr))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}const je=new P,kr=new P,Ji=new P,hn=new P,Wr=new P,Zi=new P,Xr=new P;class ic{constructor(t=new P,e=new P(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,je)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=je.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(je.copy(this.origin).addScaledVector(this.direction,e),je.distanceToSquared(t))}distanceSqToSegment(t,e,n,r){kr.copy(t).add(e).multiplyScalar(.5),Ji.copy(e).sub(t).normalize(),hn.copy(this.origin).sub(kr);const s=t.distanceTo(e)*.5,a=-this.direction.dot(Ji),o=hn.dot(this.direction),l=-hn.dot(Ji),c=hn.lengthSq(),h=Math.abs(1-a*a);let u,d,p,g;if(h>0)if(u=a*l-o,d=a*o-l,g=s*h,u>=0)if(d>=-g)if(d<=g){const x=1/h;u*=x,d*=x,p=u*(u+a*d+2*o)+d*(a*u+d+2*l)+c}else d=s,u=Math.max(0,-(a*d+o)),p=-u*u+d*(d+2*l)+c;else d=-s,u=Math.max(0,-(a*d+o)),p=-u*u+d*(d+2*l)+c;else d<=-g?(u=Math.max(0,-(-a*s+o)),d=u>0?-s:Math.min(Math.max(-s,-l),s),p=-u*u+d*(d+2*l)+c):d<=g?(u=0,d=Math.min(Math.max(-s,-l),s),p=d*(d+2*l)+c):(u=Math.max(0,-(a*s+o)),d=u>0?s:Math.min(Math.max(-s,-l),s),p=-u*u+d*(d+2*l)+c);else d=a>0?-s:s,u=Math.max(0,-(a*d+o)),p=-u*u+d*(d+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),r&&r.copy(kr).addScaledVector(Ji,d),p}intersectSphere(t,e){je.subVectors(t.center,this.origin);const n=je.dot(this.direction),r=je.dot(je)-n*n,s=t.radius*t.radius;if(r>s)return null;const a=Math.sqrt(s-r),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,e):this.at(o,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,r,s,a,o,l;const c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(n=(t.min.x-d.x)*c,r=(t.max.x-d.x)*c):(n=(t.max.x-d.x)*c,r=(t.min.x-d.x)*c),h>=0?(s=(t.min.y-d.y)*h,a=(t.max.y-d.y)*h):(s=(t.max.y-d.y)*h,a=(t.min.y-d.y)*h),n>a||s>r||((s>n||isNaN(n))&&(n=s),(a<r||isNaN(r))&&(r=a),u>=0?(o=(t.min.z-d.z)*u,l=(t.max.z-d.z)*u):(o=(t.max.z-d.z)*u,l=(t.min.z-d.z)*u),n>l||o>r)||((o>n||n!==n)&&(n=o),(l<r||r!==r)&&(r=l),r<0)?null:this.at(n>=0?n:r,e)}intersectsBox(t){return this.intersectBox(t,je)!==null}intersectTriangle(t,e,n,r,s){Wr.subVectors(e,t),Zi.subVectors(n,t),Xr.crossVectors(Wr,Zi);let a=this.direction.dot(Xr),o;if(a>0){if(r)return null;o=1}else if(a<0)o=-1,a=-a;else return null;hn.subVectors(this.origin,t);const l=o*this.direction.dot(Zi.crossVectors(hn,Zi));if(l<0)return null;const c=o*this.direction.dot(Wr.cross(hn));if(c<0||l+c>a)return null;const h=-o*hn.dot(Xr);return h<0?null:this.at(h/a,s)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ie{constructor(t,e,n,r,s,a,o,l,c,h,u,d,p,g,x,m){ie.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,r,s,a,o,l,c,h,u,d,p,g,x,m)}set(t,e,n,r,s,a,o,l,c,h,u,d,p,g,x,m){const f=this.elements;return f[0]=t,f[4]=e,f[8]=n,f[12]=r,f[1]=s,f[5]=a,f[9]=o,f[13]=l,f[2]=c,f[6]=h,f[10]=u,f[14]=d,f[3]=p,f[7]=g,f[11]=x,f[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ie().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,r=1/Xn.setFromMatrixColumn(t,0).length(),s=1/Xn.setFromMatrixColumn(t,1).length(),a=1/Xn.setFromMatrixColumn(t,2).length();return e[0]=n[0]*r,e[1]=n[1]*r,e[2]=n[2]*r,e[3]=0,e[4]=n[4]*s,e[5]=n[5]*s,e[6]=n[6]*s,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,r=t.y,s=t.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(r),c=Math.sin(r),h=Math.cos(s),u=Math.sin(s);if(t.order==="XYZ"){const d=a*h,p=a*u,g=o*h,x=o*u;e[0]=l*h,e[4]=-l*u,e[8]=c,e[1]=p+g*c,e[5]=d-x*c,e[9]=-o*l,e[2]=x-d*c,e[6]=g+p*c,e[10]=a*l}else if(t.order==="YXZ"){const d=l*h,p=l*u,g=c*h,x=c*u;e[0]=d+x*o,e[4]=g*o-p,e[8]=a*c,e[1]=a*u,e[5]=a*h,e[9]=-o,e[2]=p*o-g,e[6]=x+d*o,e[10]=a*l}else if(t.order==="ZXY"){const d=l*h,p=l*u,g=c*h,x=c*u;e[0]=d-x*o,e[4]=-a*u,e[8]=g+p*o,e[1]=p+g*o,e[5]=a*h,e[9]=x-d*o,e[2]=-a*c,e[6]=o,e[10]=a*l}else if(t.order==="ZYX"){const d=a*h,p=a*u,g=o*h,x=o*u;e[0]=l*h,e[4]=g*c-p,e[8]=d*c+x,e[1]=l*u,e[5]=x*c+d,e[9]=p*c-g,e[2]=-c,e[6]=o*l,e[10]=a*l}else if(t.order==="YZX"){const d=a*l,p=a*c,g=o*l,x=o*c;e[0]=l*h,e[4]=x-d*u,e[8]=g*u+p,e[1]=u,e[5]=a*h,e[9]=-o*h,e[2]=-c*h,e[6]=p*u+g,e[10]=d-x*u}else if(t.order==="XZY"){const d=a*l,p=a*c,g=o*l,x=o*c;e[0]=l*h,e[4]=-u,e[8]=c*h,e[1]=d*u+x,e[5]=a*h,e[9]=p*u-g,e[2]=g*u-p,e[6]=o*h,e[10]=x*u+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(ih,t,rh)}lookAt(t,e,n){const r=this.elements;return we.subVectors(t,e),we.lengthSq()===0&&(we.z=1),we.normalize(),un.crossVectors(n,we),un.lengthSq()===0&&(Math.abs(n.z)===1?we.x+=1e-4:we.z+=1e-4,we.normalize(),un.crossVectors(n,we)),un.normalize(),$i.crossVectors(we,un),r[0]=un.x,r[4]=$i.x,r[8]=we.x,r[1]=un.y,r[5]=$i.y,r[9]=we.y,r[2]=un.z,r[6]=$i.z,r[10]=we.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,r=e.elements,s=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],h=n[1],u=n[5],d=n[9],p=n[13],g=n[2],x=n[6],m=n[10],f=n[14],T=n[3],y=n[7],v=n[11],R=n[15],b=r[0],C=r[4],D=r[8],E=r[12],M=r[1],L=r[5],O=r[9],H=r[13],W=r[2],q=r[6],k=r[10],et=r[14],G=r[3],ut=r[7],_t=r[11],Mt=r[15];return s[0]=a*b+o*M+l*W+c*G,s[4]=a*C+o*L+l*q+c*ut,s[8]=a*D+o*O+l*k+c*_t,s[12]=a*E+o*H+l*et+c*Mt,s[1]=h*b+u*M+d*W+p*G,s[5]=h*C+u*L+d*q+p*ut,s[9]=h*D+u*O+d*k+p*_t,s[13]=h*E+u*H+d*et+p*Mt,s[2]=g*b+x*M+m*W+f*G,s[6]=g*C+x*L+m*q+f*ut,s[10]=g*D+x*O+m*k+f*_t,s[14]=g*E+x*H+m*et+f*Mt,s[3]=T*b+y*M+v*W+R*G,s[7]=T*C+y*L+v*q+R*ut,s[11]=T*D+y*O+v*k+R*_t,s[15]=T*E+y*H+v*et+R*Mt,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],r=t[8],s=t[12],a=t[1],o=t[5],l=t[9],c=t[13],h=t[2],u=t[6],d=t[10],p=t[14],g=t[3],x=t[7],m=t[11],f=t[15];return g*(+s*l*u-r*c*u-s*o*d+n*c*d+r*o*p-n*l*p)+x*(+e*l*p-e*c*d+s*a*d-r*a*p+r*c*h-s*l*h)+m*(+e*c*u-e*o*p-s*a*u+n*a*p+s*o*h-n*c*h)+f*(-r*o*h-e*l*u+e*o*d+r*a*u-n*a*d+n*l*h)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const r=this.elements;return t.isVector3?(r[12]=t.x,r[13]=t.y,r[14]=t.z):(r[12]=t,r[13]=e,r[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],r=t[2],s=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],u=t[9],d=t[10],p=t[11],g=t[12],x=t[13],m=t[14],f=t[15],T=u*m*c-x*d*c+x*l*p-o*m*p-u*l*f+o*d*f,y=g*d*c-h*m*c-g*l*p+a*m*p+h*l*f-a*d*f,v=h*x*c-g*u*c+g*o*p-a*x*p-h*o*f+a*u*f,R=g*u*l-h*x*l-g*o*d+a*x*d+h*o*m-a*u*m,b=e*T+n*y+r*v+s*R;if(b===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const C=1/b;return t[0]=T*C,t[1]=(x*d*s-u*m*s-x*r*p+n*m*p+u*r*f-n*d*f)*C,t[2]=(o*m*s-x*l*s+x*r*c-n*m*c-o*r*f+n*l*f)*C,t[3]=(u*l*s-o*d*s-u*r*c+n*d*c+o*r*p-n*l*p)*C,t[4]=y*C,t[5]=(h*m*s-g*d*s+g*r*p-e*m*p-h*r*f+e*d*f)*C,t[6]=(g*l*s-a*m*s-g*r*c+e*m*c+a*r*f-e*l*f)*C,t[7]=(a*d*s-h*l*s+h*r*c-e*d*c-a*r*p+e*l*p)*C,t[8]=v*C,t[9]=(g*u*s-h*x*s-g*n*p+e*x*p+h*n*f-e*u*f)*C,t[10]=(a*x*s-g*o*s+g*n*c-e*x*c-a*n*f+e*o*f)*C,t[11]=(h*o*s-a*u*s-h*n*c+e*u*c+a*n*p-e*o*p)*C,t[12]=R*C,t[13]=(h*x*r-g*u*r+g*n*d-e*x*d-h*n*m+e*u*m)*C,t[14]=(g*o*r-a*x*r-g*n*l+e*x*l+a*n*m-e*o*m)*C,t[15]=(a*u*r-h*o*r+h*n*l-e*u*l-a*n*d+e*o*d)*C,this}scale(t){const e=this.elements,n=t.x,r=t.y,s=t.z;return e[0]*=n,e[4]*=r,e[8]*=s,e[1]*=n,e[5]*=r,e[9]*=s,e[2]*=n,e[6]*=r,e[10]*=s,e[3]*=n,e[7]*=r,e[11]*=s,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],r=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,r))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),r=Math.sin(e),s=1-n,a=t.x,o=t.y,l=t.z,c=s*a,h=s*o;return this.set(c*a+n,c*o-r*l,c*l+r*o,0,c*o+r*l,h*o+n,h*l-r*a,0,c*l-r*o,h*l+r*a,s*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,r,s,a){return this.set(1,n,s,0,t,1,a,0,e,r,1,0,0,0,0,1),this}compose(t,e,n){const r=this.elements,s=e._x,a=e._y,o=e._z,l=e._w,c=s+s,h=a+a,u=o+o,d=s*c,p=s*h,g=s*u,x=a*h,m=a*u,f=o*u,T=l*c,y=l*h,v=l*u,R=n.x,b=n.y,C=n.z;return r[0]=(1-(x+f))*R,r[1]=(p+v)*R,r[2]=(g-y)*R,r[3]=0,r[4]=(p-v)*b,r[5]=(1-(d+f))*b,r[6]=(m+T)*b,r[7]=0,r[8]=(g+y)*C,r[9]=(m-T)*C,r[10]=(1-(d+x))*C,r[11]=0,r[12]=t.x,r[13]=t.y,r[14]=t.z,r[15]=1,this}decompose(t,e,n){const r=this.elements;let s=Xn.set(r[0],r[1],r[2]).length();const a=Xn.set(r[4],r[5],r[6]).length(),o=Xn.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),t.x=r[12],t.y=r[13],t.z=r[14],Oe.copy(this);const c=1/s,h=1/a,u=1/o;return Oe.elements[0]*=c,Oe.elements[1]*=c,Oe.elements[2]*=c,Oe.elements[4]*=h,Oe.elements[5]*=h,Oe.elements[6]*=h,Oe.elements[8]*=u,Oe.elements[9]*=u,Oe.elements[10]*=u,e.setFromRotationMatrix(Oe),n.x=s,n.y=a,n.z=o,this}makePerspective(t,e,n,r,s,a,o=qe,l=!1){const c=this.elements,h=2*s/(e-t),u=2*s/(n-r),d=(e+t)/(e-t),p=(n+r)/(n-r);let g,x;if(l)g=s/(a-s),x=a*s/(a-s);else if(o===qe)g=-(a+s)/(a-s),x=-2*a*s/(a-s);else if(o===wr)g=-a/(a-s),x=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=u,c[9]=p,c[13]=0,c[2]=0,c[6]=0,c[10]=g,c[14]=x,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,r,s,a,o=qe,l=!1){const c=this.elements,h=2/(e-t),u=2/(n-r),d=-(e+t)/(e-t),p=-(n+r)/(n-r);let g,x;if(l)g=1/(a-s),x=a/(a-s);else if(o===qe)g=-2/(a-s),x=-(a+s)/(a-s);else if(o===wr)g=-1/(a-s),x=-s/(a-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=0,c[12]=d,c[1]=0,c[5]=u,c[9]=0,c[13]=p,c[2]=0,c[6]=0,c[10]=g,c[14]=x,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let r=0;r<16;r++)if(e[r]!==n[r])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const Xn=new P,Oe=new ie,ih=new P(0,0,0),rh=new P(1,1,1),un=new P,$i=new P,we=new P,Wa=new ie,Xa=new Hi;class Je{constructor(t=0,e=0,n=0,r=Je.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=r}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,r=this._order){return this._x=t,this._y=e,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const r=t.elements,s=r[0],a=r[4],o=r[8],l=r[1],c=r[5],h=r[9],u=r[2],d=r[6],p=r[10];switch(e){case"XYZ":this._y=Math.asin(Gt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,p),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Gt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,s),this._z=0);break;case"ZXY":this._x=Math.asin(Gt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,p),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Gt(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,p),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Gt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,s)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-Gt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-h,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Wa.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Wa,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Xa.setFromEuler(this),this.setFromQuaternion(Xa,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Je.DEFAULT_ORDER="XYZ";class rc{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let sh=0;const qa=new P,qn=new Hi,Qe=new ie,Ki=new P,vi=new P,ah=new P,oh=new Hi,Ya=new P(1,0,0),Ja=new P(0,1,0),Za=new P(0,0,1),$a={type:"added"},ch={type:"removed"},Yn={type:"childadded",child:null},qr={type:"childremoved",child:null};class me extends Fn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:sh++}),this.uuid=On(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=me.DEFAULT_UP.clone();const t=new P,e=new Je,n=new Hi,r=new P(1,1,1);function s(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(s),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new ie},normalMatrix:{value:new Ht}}),this.matrix=new ie,this.matrixWorld=new ie,this.matrixAutoUpdate=me.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=me.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new rc,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return qn.setFromAxisAngle(t,e),this.quaternion.multiply(qn),this}rotateOnWorldAxis(t,e){return qn.setFromAxisAngle(t,e),this.quaternion.premultiply(qn),this}rotateX(t){return this.rotateOnAxis(Ya,t)}rotateY(t){return this.rotateOnAxis(Ja,t)}rotateZ(t){return this.rotateOnAxis(Za,t)}translateOnAxis(t,e){return qa.copy(t).applyQuaternion(this.quaternion),this.position.add(qa.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Ya,t)}translateY(t){return this.translateOnAxis(Ja,t)}translateZ(t){return this.translateOnAxis(Za,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Qe.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Ki.copy(t):Ki.set(t,e,n);const r=this.parent;this.updateWorldMatrix(!0,!1),vi.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Qe.lookAt(vi,Ki,this.up):Qe.lookAt(Ki,vi,this.up),this.quaternion.setFromRotationMatrix(Qe),r&&(Qe.extractRotation(r.matrixWorld),qn.setFromRotationMatrix(Qe),this.quaternion.premultiply(qn.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent($a),Yn.child=t,this.dispatchEvent(Yn),Yn.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(ch),qr.child=t,this.dispatchEvent(qr),qr.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Qe.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Qe.multiply(t.parent.matrixWorld)),t.applyMatrix4(Qe),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent($a),Yn.child=t,this.dispatchEvent(Yn),Yn.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,r=this.children.length;n<r;n++){const a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(vi,t,ah),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(vi,oh,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,r=e.length;n<r;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,r=e.length;n<r;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,r=e.length;n<r;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(o=>({...o})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(t),r.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(t.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const u=l[c];s(t.shapes,u)}else s(t.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(t.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(s(t.materials,this.material[l]));r.material=o}else r.material=s(t.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];r.animations.push(s(t.animations,l))}}if(e){const o=a(t.geometries),l=a(t.materials),c=a(t.textures),h=a(t.images),u=a(t.shapes),d=a(t.skeletons),p=a(t.animations),g=a(t.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),p.length>0&&(n.animations=p),g.length>0&&(n.nodes=g)}return n.object=r,n;function a(o){const l=[];for(const c in o){const h=o[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const r=t.children[n];this.add(r.clone())}return this}}me.DEFAULT_UP=new P(0,1,0);me.DEFAULT_MATRIX_AUTO_UPDATE=!0;me.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Be=new P,tn=new P,Yr=new P,en=new P,Jn=new P,Zn=new P,Ka=new P,Jr=new P,Zr=new P,$r=new P,Kr=new ee,jr=new ee,Qr=new ee;class Ne{constructor(t=new P,e=new P,n=new P){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,r){r.subVectors(n,e),Be.subVectors(t,e),r.cross(Be);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(t,e,n,r,s){Be.subVectors(r,e),tn.subVectors(n,e),Yr.subVectors(t,e);const a=Be.dot(Be),o=Be.dot(tn),l=Be.dot(Yr),c=tn.dot(tn),h=tn.dot(Yr),u=a*c-o*o;if(u===0)return s.set(0,0,0),null;const d=1/u,p=(c*l-o*h)*d,g=(a*h-o*l)*d;return s.set(1-p-g,g,p)}static containsPoint(t,e,n,r){return this.getBarycoord(t,e,n,r,en)===null?!1:en.x>=0&&en.y>=0&&en.x+en.y<=1}static getInterpolation(t,e,n,r,s,a,o,l){return this.getBarycoord(t,e,n,r,en)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,en.x),l.addScaledVector(a,en.y),l.addScaledVector(o,en.z),l)}static getInterpolatedAttribute(t,e,n,r,s,a){return Kr.setScalar(0),jr.setScalar(0),Qr.setScalar(0),Kr.fromBufferAttribute(t,e),jr.fromBufferAttribute(t,n),Qr.fromBufferAttribute(t,r),a.setScalar(0),a.addScaledVector(Kr,s.x),a.addScaledVector(jr,s.y),a.addScaledVector(Qr,s.z),a}static isFrontFacing(t,e,n,r){return Be.subVectors(n,e),tn.subVectors(t,e),Be.cross(tn).dot(r)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,r){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[r]),this}setFromAttributeAndIndices(t,e,n,r){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,r),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Be.subVectors(this.c,this.b),tn.subVectors(this.a,this.b),Be.cross(tn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Ne.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return Ne.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,r,s){return Ne.getInterpolation(t,this.a,this.b,this.c,e,n,r,s)}containsPoint(t){return Ne.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Ne.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,r=this.b,s=this.c;let a,o;Jn.subVectors(r,n),Zn.subVectors(s,n),Jr.subVectors(t,n);const l=Jn.dot(Jr),c=Zn.dot(Jr);if(l<=0&&c<=0)return e.copy(n);Zr.subVectors(t,r);const h=Jn.dot(Zr),u=Zn.dot(Zr);if(h>=0&&u<=h)return e.copy(r);const d=l*u-h*c;if(d<=0&&l>=0&&h<=0)return a=l/(l-h),e.copy(n).addScaledVector(Jn,a);$r.subVectors(t,s);const p=Jn.dot($r),g=Zn.dot($r);if(g>=0&&p<=g)return e.copy(s);const x=p*c-l*g;if(x<=0&&c>=0&&g<=0)return o=c/(c-g),e.copy(n).addScaledVector(Zn,o);const m=h*g-p*u;if(m<=0&&u-h>=0&&p-g>=0)return Ka.subVectors(s,r),o=(u-h)/(u-h+(p-g)),e.copy(r).addScaledVector(Ka,o);const f=1/(m+x+d);return a=x*f,o=d*f,e.copy(n).addScaledVector(Jn,a).addScaledVector(Zn,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const sc={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},fn={h:0,s:0,l:0},ji={h:0,s:0,l:0};function ts(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}class Xt{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const r=t;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Ie){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,$t.colorSpaceToWorking(this,e),this}setRGB(t,e,n,r=$t.workingColorSpace){return this.r=t,this.g=e,this.b=n,$t.colorSpaceToWorking(this,r),this}setHSL(t,e,n,r=$t.workingColorSpace){if(t=_a(t,1),e=Gt(e,0,1),n=Gt(n,0,1),e===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+e):n+e-n*e,a=2*n-s;this.r=ts(a,s,t+1/3),this.g=ts(a,s,t),this.b=ts(a,s,t-1/3)}return $t.colorSpaceToWorking(this,r),this}setStyle(t,e=Ie){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(t)){let s;const a=r[1],o=r[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,e);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,e);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(t)){const s=r[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(s,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Ie){const n=sc[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=an(t.r),this.g=an(t.g),this.b=an(t.b),this}copyLinearToSRGB(t){return this.r=ai(t.r),this.g=ai(t.g),this.b=ai(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Ie){return $t.workingToColorSpace(xe.copy(this),t),Math.round(Gt(xe.r*255,0,255))*65536+Math.round(Gt(xe.g*255,0,255))*256+Math.round(Gt(xe.b*255,0,255))}getHexString(t=Ie){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=$t.workingColorSpace){$t.workingToColorSpace(xe.copy(this),e);const n=xe.r,r=xe.g,s=xe.b,a=Math.max(n,r,s),o=Math.min(n,r,s);let l,c;const h=(o+a)/2;if(o===a)l=0,c=0;else{const u=a-o;switch(c=h<=.5?u/(a+o):u/(2-a-o),a){case n:l=(r-s)/u+(r<s?6:0);break;case r:l=(s-n)/u+2;break;case s:l=(n-r)/u+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=$t.workingColorSpace){return $t.workingToColorSpace(xe.copy(this),e),t.r=xe.r,t.g=xe.g,t.b=xe.b,t}getStyle(t=Ie){$t.workingToColorSpace(xe.copy(this),t);const e=xe.r,n=xe.g,r=xe.b;return t!==Ie?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(r*255)})`}offsetHSL(t,e,n){return this.getHSL(fn),this.setHSL(fn.h+t,fn.s+e,fn.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(fn),t.getHSL(ji);const n=bi(fn.h,ji.h,e),r=bi(fn.s,ji.s,e),s=bi(fn.l,ji.l,e);return this.setHSL(n,r,s),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,r=this.b,s=t.elements;return this.r=s[0]*e+s[3]*n+s[6]*r,this.g=s[1]*e+s[4]*n+s[7]*r,this.b=s[2]*e+s[5]*n+s[8]*r,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const xe=new Xt;Xt.NAMES=sc;let lh=0;class vn extends Fn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:lh++}),this.uuid=On(),this.name="",this.type="Material",this.blending=ri,this.side=_n,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=xs,this.blendDst=Ms,this.blendEquation=Cn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Xt(0,0,0),this.blendAlpha=0,this.depthFunc=oi,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Fa,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Hn,this.stencilZFail=Hn,this.stencilZPass=Hn,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const r=this[e];if(r===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(n):r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==ri&&(n.blending=this.blending),this.side!==_n&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==xs&&(n.blendSrc=this.blendSrc),this.blendDst!==Ms&&(n.blendDst=this.blendDst),this.blendEquation!==Cn&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==oi&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Fa&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Hn&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Hn&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Hn&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(s){const a=[];for(const o in s){const l=s[o];delete l.metadata,a.push(l)}return a}if(e){const s=r(t.textures),a=r(t.images);s.length>0&&(n.textures=s),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const r=e.length;n=new Array(r);for(let s=0;s!==r;++s)n[s]=e[s].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class ac extends vn{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Xt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Je,this.combine=Xo,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const ue=new P,Qi=new ct;let hh=0;class Ve{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:hh++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Oa,this.updateRanges=[],this.gpuType=Xe,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[t+r]=e.array[n+r];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Qi.fromBufferAttribute(this,e),Qi.applyMatrix3(t),this.setXY(e,Qi.x,Qi.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)ue.fromBufferAttribute(this,e),ue.applyMatrix3(t),this.setXYZ(e,ue.x,ue.y,ue.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)ue.fromBufferAttribute(this,e),ue.applyMatrix4(t),this.setXYZ(e,ue.x,ue.y,ue.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)ue.fromBufferAttribute(this,e),ue.applyNormalMatrix(t),this.setXYZ(e,ue.x,ue.y,ue.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)ue.fromBufferAttribute(this,e),ue.transformDirection(t),this.setXYZ(e,ue.x,ue.y,ue.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=ni(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Se(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=ni(e,this.array)),e}setX(t,e){return this.normalized&&(e=Se(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=ni(e,this.array)),e}setY(t,e){return this.normalized&&(e=Se(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=ni(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Se(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=ni(e,this.array)),e}setW(t,e){return this.normalized&&(e=Se(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=Se(e,this.array),n=Se(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,r){return t*=this.itemSize,this.normalized&&(e=Se(e,this.array),n=Se(n,this.array),r=Se(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=r,this}setXYZW(t,e,n,r,s){return t*=this.itemSize,this.normalized&&(e=Se(e,this.array),n=Se(n,this.array),r=Se(r,this.array),s=Se(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=r,this.array[t+3]=s,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Oa&&(t.usage=this.usage),t}}class oc extends Ve{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class cc extends Ve{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class Jt extends Ve{constructor(t,e,n){super(new Float32Array(t),e,n)}}let uh=0;const De=new ie,es=new me,$n=new P,Re=new Bn,xi=new Bn,pe=new P;class _e extends Fn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:uh++}),this.uuid=On(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(ec(t)?cc:oc)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new Ht().getNormalMatrix(t);n.applyNormalMatrix(s),n.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(t),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return De.makeRotationFromQuaternion(t),this.applyMatrix4(De),this}rotateX(t){return De.makeRotationX(t),this.applyMatrix4(De),this}rotateY(t){return De.makeRotationY(t),this.applyMatrix4(De),this}rotateZ(t){return De.makeRotationZ(t),this.applyMatrix4(De),this}translate(t,e,n){return De.makeTranslation(t,e,n),this.applyMatrix4(De),this}scale(t,e,n){return De.makeScale(t,e,n),this.applyMatrix4(De),this}lookAt(t){return es.lookAt(t),es.updateMatrix(),this.applyMatrix4(es.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter($n).negate(),this.translate($n.x,$n.y,$n.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const n=[];for(let r=0,s=t.length;r<s;r++){const a=t[r];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new Jt(n,3))}else{const n=Math.min(t.length,e.count);for(let r=0;r<n;r++){const s=t[r];e.setXYZ(r,s.x,s.y,s.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Bn);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new P(-1/0,-1/0,-1/0),new P(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,r=e.length;n<r;n++){const s=e[n];Re.setFromBufferAttribute(s),this.morphTargetsRelative?(pe.addVectors(this.boundingBox.min,Re.min),this.boundingBox.expandByPoint(pe),pe.addVectors(this.boundingBox.max,Re.max),this.boundingBox.expandByPoint(pe)):(this.boundingBox.expandByPoint(Re.min),this.boundingBox.expandByPoint(Re.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new di);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new P,1/0);return}if(t){const n=this.boundingSphere.center;if(Re.setFromBufferAttribute(t),e)for(let s=0,a=e.length;s<a;s++){const o=e[s];xi.setFromBufferAttribute(o),this.morphTargetsRelative?(pe.addVectors(Re.min,xi.min),Re.expandByPoint(pe),pe.addVectors(Re.max,xi.max),Re.expandByPoint(pe)):(Re.expandByPoint(xi.min),Re.expandByPoint(xi.max))}Re.getCenter(n);let r=0;for(let s=0,a=t.count;s<a;s++)pe.fromBufferAttribute(t,s),r=Math.max(r,n.distanceToSquared(pe));if(e)for(let s=0,a=e.length;s<a;s++){const o=e[s],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)pe.fromBufferAttribute(o,c),l&&($n.fromBufferAttribute(t,c),pe.add($n)),r=Math.max(r,n.distanceToSquared(pe))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,r=e.normal,s=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ve(new Float32Array(4*n.count),4));const a=this.getAttribute("tangent"),o=[],l=[];for(let D=0;D<n.count;D++)o[D]=new P,l[D]=new P;const c=new P,h=new P,u=new P,d=new ct,p=new ct,g=new ct,x=new P,m=new P;function f(D,E,M){c.fromBufferAttribute(n,D),h.fromBufferAttribute(n,E),u.fromBufferAttribute(n,M),d.fromBufferAttribute(s,D),p.fromBufferAttribute(s,E),g.fromBufferAttribute(s,M),h.sub(c),u.sub(c),p.sub(d),g.sub(d);const L=1/(p.x*g.y-g.x*p.y);isFinite(L)&&(x.copy(h).multiplyScalar(g.y).addScaledVector(u,-p.y).multiplyScalar(L),m.copy(u).multiplyScalar(p.x).addScaledVector(h,-g.x).multiplyScalar(L),o[D].add(x),o[E].add(x),o[M].add(x),l[D].add(m),l[E].add(m),l[M].add(m))}let T=this.groups;T.length===0&&(T=[{start:0,count:t.count}]);for(let D=0,E=T.length;D<E;++D){const M=T[D],L=M.start,O=M.count;for(let H=L,W=L+O;H<W;H+=3)f(t.getX(H+0),t.getX(H+1),t.getX(H+2))}const y=new P,v=new P,R=new P,b=new P;function C(D){R.fromBufferAttribute(r,D),b.copy(R);const E=o[D];y.copy(E),y.sub(R.multiplyScalar(R.dot(E))).normalize(),v.crossVectors(b,E);const L=v.dot(l[D])<0?-1:1;a.setXYZW(D,y.x,y.y,y.z,L)}for(let D=0,E=T.length;D<E;++D){const M=T[D],L=M.start,O=M.count;for(let H=L,W=L+O;H<W;H+=3)C(t.getX(H+0)),C(t.getX(H+1)),C(t.getX(H+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Ve(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let d=0,p=n.count;d<p;d++)n.setXYZ(d,0,0,0);const r=new P,s=new P,a=new P,o=new P,l=new P,c=new P,h=new P,u=new P;if(t)for(let d=0,p=t.count;d<p;d+=3){const g=t.getX(d+0),x=t.getX(d+1),m=t.getX(d+2);r.fromBufferAttribute(e,g),s.fromBufferAttribute(e,x),a.fromBufferAttribute(e,m),h.subVectors(a,s),u.subVectors(r,s),h.cross(u),o.fromBufferAttribute(n,g),l.fromBufferAttribute(n,x),c.fromBufferAttribute(n,m),o.add(h),l.add(h),c.add(h),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(x,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let d=0,p=e.count;d<p;d+=3)r.fromBufferAttribute(e,d+0),s.fromBufferAttribute(e,d+1),a.fromBufferAttribute(e,d+2),h.subVectors(a,s),u.subVectors(r,s),h.cross(u),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)pe.fromBufferAttribute(t,e),pe.normalize(),t.setXYZ(e,pe.x,pe.y,pe.z)}toNonIndexed(){function t(o,l){const c=o.array,h=o.itemSize,u=o.normalized,d=new c.constructor(l.length*h);let p=0,g=0;for(let x=0,m=l.length;x<m;x++){o.isInterleavedBufferAttribute?p=l[x]*o.data.stride+o.offset:p=l[x]*h;for(let f=0;f<h;f++)d[g++]=c[p++]}return new Ve(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new _e,n=this.index.array,r=this.attributes;for(const o in r){const l=r[o],c=t(l,n);e.setAttribute(o,c)}const s=this.morphAttributes;for(const o in s){const l=[],c=s[o];for(let h=0,u=c.length;h<u;h++){const d=c[h],p=t(d,n);l.push(p)}e.morphAttributes[o]=l}e.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const l in n){const c=n[l];t.data.attributes[l]=c.toJSON(t.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let u=0,d=c.length;u<d;u++){const p=c[u];h.push(p.toJSON(t.data))}h.length>0&&(r[l]=h,s=!0)}s&&(t.data.morphAttributes=r,t.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(t.data.boundingSphere=o.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone());const r=t.attributes;for(const c in r){const h=r[c];this.setAttribute(c,h.clone(e))}const s=t.morphAttributes;for(const c in s){const h=[],u=s[c];for(let d=0,p=u.length;d<p;d++)h.push(u[d].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;const a=t.groups;for(let c=0,h=a.length;c<h;c++){const u=a[c];this.addGroup(u.start,u.count,u.materialIndex)}const o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const ja=new ie,En=new ic,tr=new di,Qa=new P,er=new P,nr=new P,ir=new P,ns=new P,rr=new P,to=new P,sr=new P;class He extends me{constructor(t=new _e,e=new ac){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const r=e[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(t,e){const n=this.geometry,r=n.attributes.position,s=n.morphAttributes.position,a=n.morphTargetsRelative;e.fromBufferAttribute(r,t);const o=this.morphTargetInfluences;if(s&&o){rr.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const h=o[l],u=s[l];h!==0&&(ns.fromBufferAttribute(u,t),a?rr.addScaledVector(ns,h):rr.addScaledVector(ns.sub(e),h))}e.add(rr)}return e}raycast(t,e){const n=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),tr.copy(n.boundingSphere),tr.applyMatrix4(s),En.copy(t.ray).recast(t.near),!(tr.containsPoint(En.origin)===!1&&(En.intersectSphere(tr,Qa)===null||En.origin.distanceToSquared(Qa)>(t.far-t.near)**2))&&(ja.copy(s).invert(),En.copy(t.ray).applyMatrix4(ja),!(n.boundingBox!==null&&En.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,En)))}_computeIntersections(t,e,n){let r;const s=this.geometry,a=this.material,o=s.index,l=s.attributes.position,c=s.attributes.uv,h=s.attributes.uv1,u=s.attributes.normal,d=s.groups,p=s.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,x=d.length;g<x;g++){const m=d[g],f=a[m.materialIndex],T=Math.max(m.start,p.start),y=Math.min(o.count,Math.min(m.start+m.count,p.start+p.count));for(let v=T,R=y;v<R;v+=3){const b=o.getX(v),C=o.getX(v+1),D=o.getX(v+2);r=ar(this,f,t,n,c,h,u,b,C,D),r&&(r.faceIndex=Math.floor(v/3),r.face.materialIndex=m.materialIndex,e.push(r))}}else{const g=Math.max(0,p.start),x=Math.min(o.count,p.start+p.count);for(let m=g,f=x;m<f;m+=3){const T=o.getX(m),y=o.getX(m+1),v=o.getX(m+2);r=ar(this,a,t,n,c,h,u,T,y,v),r&&(r.faceIndex=Math.floor(m/3),e.push(r))}}else if(l!==void 0)if(Array.isArray(a))for(let g=0,x=d.length;g<x;g++){const m=d[g],f=a[m.materialIndex],T=Math.max(m.start,p.start),y=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let v=T,R=y;v<R;v+=3){const b=v,C=v+1,D=v+2;r=ar(this,f,t,n,c,h,u,b,C,D),r&&(r.faceIndex=Math.floor(v/3),r.face.materialIndex=m.materialIndex,e.push(r))}}else{const g=Math.max(0,p.start),x=Math.min(l.count,p.start+p.count);for(let m=g,f=x;m<f;m+=3){const T=m,y=m+1,v=m+2;r=ar(this,a,t,n,c,h,u,T,y,v),r&&(r.faceIndex=Math.floor(m/3),e.push(r))}}}}function fh(i,t,e,n,r,s,a,o){let l;if(t.side===Te?l=n.intersectTriangle(a,s,r,!0,o):l=n.intersectTriangle(r,s,a,t.side===_n,o),l===null)return null;sr.copy(o),sr.applyMatrix4(i.matrixWorld);const c=e.ray.origin.distanceTo(sr);return c<e.near||c>e.far?null:{distance:c,point:sr.clone(),object:i}}function ar(i,t,e,n,r,s,a,o,l,c){i.getVertexPosition(o,er),i.getVertexPosition(l,nr),i.getVertexPosition(c,ir);const h=fh(i,t,e,n,er,nr,ir,to);if(h){const u=new P;Ne.getBarycoord(to,er,nr,ir,u),r&&(h.uv=Ne.getInterpolatedAttribute(r,o,l,c,u,new ct)),s&&(h.uv1=Ne.getInterpolatedAttribute(s,o,l,c,u,new ct)),a&&(h.normal=Ne.getInterpolatedAttribute(a,o,l,c,u,new P),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const d={a:o,b:l,c,normal:new P,materialIndex:0};Ne.getNormal(er,nr,ir,d.normal),h.face=d,h.barycoord=u}return h}class Vi extends _e{constructor(t=1,e=1,n=1,r=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:r,heightSegments:s,depthSegments:a};const o=this;r=Math.floor(r),s=Math.floor(s),a=Math.floor(a);const l=[],c=[],h=[],u=[];let d=0,p=0;g("z","y","x",-1,-1,n,e,t,a,s,0),g("z","y","x",1,-1,n,e,-t,a,s,1),g("x","z","y",1,1,t,n,e,r,a,2),g("x","z","y",1,-1,t,n,-e,r,a,3),g("x","y","z",1,-1,t,e,n,r,s,4),g("x","y","z",-1,-1,t,e,-n,r,s,5),this.setIndex(l),this.setAttribute("position",new Jt(c,3)),this.setAttribute("normal",new Jt(h,3)),this.setAttribute("uv",new Jt(u,2));function g(x,m,f,T,y,v,R,b,C,D,E){const M=v/C,L=R/D,O=v/2,H=R/2,W=b/2,q=C+1,k=D+1;let et=0,G=0;const ut=new P;for(let _t=0;_t<k;_t++){const Mt=_t*L-H;for(let Bt=0;Bt<q;Bt++){const qt=Bt*M-O;ut[x]=qt*T,ut[m]=Mt*y,ut[f]=W,c.push(ut.x,ut.y,ut.z),ut[x]=0,ut[m]=0,ut[f]=b>0?1:-1,h.push(ut.x,ut.y,ut.z),u.push(Bt/C),u.push(1-_t/D),et+=1}}for(let _t=0;_t<D;_t++)for(let Mt=0;Mt<C;Mt++){const Bt=d+Mt+q*_t,qt=d+Mt+q*(_t+1),jt=d+(Mt+1)+q*(_t+1),Yt=d+(Mt+1)+q*_t;l.push(Bt,qt,Yt),l.push(qt,jt,Yt),G+=6}o.addGroup(p,G,E),p+=G,d+=et}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Vi(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function ui(i){const t={};for(const e in i){t[e]={};for(const n in i[e]){const r=i[e][n];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=r.clone():Array.isArray(r)?t[e][n]=r.slice():t[e][n]=r}}return t}function ye(i){const t={};for(let e=0;e<i.length;e++){const n=ui(i[e]);for(const r in n)t[r]=n[r]}return t}function dh(i){const t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function lc(i){const t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:$t.workingColorSpace}const ph={clone:ui,merge:ye};var mh=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,gh=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class on extends vn{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=mh,this.fragmentShader=gh,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=ui(t.uniforms),this.uniformsGroups=dh(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const r in this.uniforms){const a=this.uniforms[r].value;a&&a.isTexture?e.uniforms[r]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[r]={type:"m4",value:a.toArray()}:e.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const r in this.extensions)this.extensions[r]===!0&&(n[r]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class hc extends me{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ie,this.projectionMatrix=new ie,this.projectionMatrixInverse=new ie,this.coordinateSystem=qe,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const dn=new P,eo=new ct,no=new ct;class Ue extends hc{constructor(t=50,e=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=Ii*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(si*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Ii*2*Math.atan(Math.tan(si*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){dn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(dn.x,dn.y).multiplyScalar(-t/dn.z),dn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(dn.x,dn.y).multiplyScalar(-t/dn.z)}getViewSize(t,e){return this.getViewBounds(t,eo,no),e.subVectors(no,eo)}setViewOffset(t,e,n,r,s,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(si*.5*this.fov)/this.zoom,n=2*e,r=this.aspect*n,s=-.5*r;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;s+=a.offsetX*r/l,e-=a.offsetY*n/c,r*=a.width/l,n*=a.height/c}const o=this.filmOffset;o!==0&&(s+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const Kn=-90,jn=1;class _h extends me{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new Ue(Kn,jn,t,e);r.layers=this.layers,this.add(r);const s=new Ue(Kn,jn,t,e);s.layers=this.layers,this.add(s);const a=new Ue(Kn,jn,t,e);a.layers=this.layers,this.add(a);const o=new Ue(Kn,jn,t,e);o.layers=this.layers,this.add(o);const l=new Ue(Kn,jn,t,e);l.layers=this.layers,this.add(l);const c=new Ue(Kn,jn,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,r,s,a,o,l]=e;for(const c of e)this.remove(c);if(t===qe)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===wr)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[s,a,o,l,c,h]=this.children,u=t.getRenderTarget(),d=t.getActiveCubeFace(),p=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;const x=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,r),t.render(e,s),t.setRenderTarget(n,1,r),t.render(e,a),t.setRenderTarget(n,2,r),t.render(e,o),t.setRenderTarget(n,3,r),t.render(e,l),t.setRenderTarget(n,4,r),t.render(e,c),n.texture.generateMipmaps=x,t.setRenderTarget(n,5,r),t.render(e,h),t.setRenderTarget(u,d,p),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class uc extends ge{constructor(t=[],e=ci,n,r,s,a,o,l,c,h){super(t,e,n,r,s,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class vh extends Un{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},r=[n,n,n,n,n,n];this.texture=new uc(r),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new Vi(5,5,5),s=new on({name:"CubemapFromEquirect",uniforms:ui(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Te,blending:mn});s.uniforms.tEquirect.value=e;const a=new He(r,s),o=e.minFilter;return e.minFilter===Dn&&(e.minFilter=We),new _h(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e=!0,n=!0,r=!0){const s=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,r);t.setRenderTarget(s)}}class or extends me{constructor(){super(),this.isGroup=!0,this.type="Group"}}const xh={type:"move"};class is{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new or,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new or,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new P,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new P),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new or,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new P,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new P),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let r=null,s=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){a=!0;for(const x of t.hand.values()){const m=e.getJointPose(x,n),f=this._getHandJoint(c,x);m!==null&&(f.matrix.fromArray(m.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=m.radius),f.visible=m!==null}const h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],d=h.position.distanceTo(u.position),p=.02,g=.005;c.inputState.pinching&&d>p+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&d<=p-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(s=e.getPose(t.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(r=e.getPose(t.targetRaySpace,n),r===null&&s!==null&&(r=s),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(xh)))}return o!==null&&(o.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new or;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}class tg extends me{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Je,this.environmentIntensity=1,this.environmentRotation=new Je,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class Mh extends ge{constructor(t=null,e=1,n=1,r,s,a,o,l,c=Ce,h=Ce,u,d){super(null,a,o,l,c,h,r,s,u,d),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class io extends Ve{constructor(t,e,n,r=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=r}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){const t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}const Qn=new ie,ro=new ie,cr=[],so=new Bn,Sh=new ie,Mi=new He,Si=new di;class eg extends He{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new io(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let r=0;r<n;r++)this.setMatrixAt(r,Sh)}computeBoundingBox(){const t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new Bn),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Qn),so.copy(t.boundingBox).applyMatrix4(Qn),this.boundingBox.union(so)}computeBoundingSphere(){const t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new di),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Qn),Si.copy(t.boundingSphere).applyMatrix4(Qn),this.boundingSphere.union(Si)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){const n=e.morphTargetInfluences,r=this.morphTexture.source.data.data,s=n.length+1,a=t*s+1;for(let o=0;o<n.length;o++)n[o]=r[a+o]}raycast(t,e){const n=this.matrixWorld,r=this.count;if(Mi.geometry=this.geometry,Mi.material=this.material,Mi.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Si.copy(this.boundingSphere),Si.applyMatrix4(n),t.ray.intersectsSphere(Si)!==!1))for(let s=0;s<r;s++){this.getMatrixAt(s,Qn),ro.multiplyMatrices(n,Qn),Mi.matrixWorld=ro,Mi.raycast(t,cr);for(let a=0,o=cr.length;a<o;a++){const l=cr[a];l.instanceId=s,l.object=this,e.push(l)}cr.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new io(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,e){const n=e.morphTargetInfluences,r=n.length+1;this.morphTexture===null&&(this.morphTexture=new Mh(new Float32Array(r*this.count),r,this.count,fa,Xe));const s=this.morphTexture.source.data.data;let a=0;for(let c=0;c<n.length;c++)a+=n[c];const o=this.geometry.morphTargetsRelative?1:1-a,l=r*t;s[l]=o,s.set(n,l+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const rs=new P,yh=new P,Eh=new Ht;class wn{constructor(t=new P(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,r){return this.normal.set(t,e,n),this.constant=r,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const r=rs.subVectors(n,e).cross(yh.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(r,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(rs),r=this.normal.dot(n);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const s=-(t.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:e.copy(t.start).addScaledVector(n,s)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||Eh.getNormalMatrix(t),r=this.coplanarPoint(rs).applyMatrix4(t),s=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(s),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Tn=new di,Th=new ct(.5,.5),lr=new P;class xa{constructor(t=new wn,e=new wn,n=new wn,r=new wn,s=new wn,a=new wn){this.planes=[t,e,n,r,s,a]}set(t,e,n,r,s,a){const o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(n),o[3].copy(r),o[4].copy(s),o[5].copy(a),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=qe,n=!1){const r=this.planes,s=t.elements,a=s[0],o=s[1],l=s[2],c=s[3],h=s[4],u=s[5],d=s[6],p=s[7],g=s[8],x=s[9],m=s[10],f=s[11],T=s[12],y=s[13],v=s[14],R=s[15];if(r[0].setComponents(c-a,p-h,f-g,R-T).normalize(),r[1].setComponents(c+a,p+h,f+g,R+T).normalize(),r[2].setComponents(c+o,p+u,f+x,R+y).normalize(),r[3].setComponents(c-o,p-u,f-x,R-y).normalize(),n)r[4].setComponents(l,d,m,v).normalize(),r[5].setComponents(c-l,p-d,f-m,R-v).normalize();else if(r[4].setComponents(c-l,p-d,f-m,R-v).normalize(),e===qe)r[5].setComponents(c+l,p+d,f+m,R+v).normalize();else if(e===wr)r[5].setComponents(l,d,m,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Tn.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Tn.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Tn)}intersectsSprite(t){Tn.center.set(0,0,0);const e=Th.distanceTo(t.center);return Tn.radius=.7071067811865476+e,Tn.applyMatrix4(t.matrixWorld),this.intersectsSphere(Tn)}intersectsSphere(t){const e=this.planes,n=t.center,r=-t.radius;for(let s=0;s<6;s++)if(e[s].distanceToPoint(n)<r)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const r=e[n];if(lr.x=r.normal.x>0?t.max.x:t.min.x,lr.y=r.normal.y>0?t.max.y:t.min.y,lr.z=r.normal.z>0?t.max.z:t.min.z,r.distanceToPoint(lr)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Ah extends vn{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Xt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const Rr=new P,Cr=new P,ao=new ie,yi=new ic,hr=new di,ss=new P,oo=new P;class bh extends me{constructor(t=new _e,e=new Ah){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[0];for(let r=1,s=e.count;r<s;r++)Rr.fromBufferAttribute(e,r-1),Cr.fromBufferAttribute(e,r),n[r]=n[r-1],n[r]+=Rr.distanceTo(Cr);t.setAttribute("lineDistance",new Jt(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){const n=this.geometry,r=this.matrixWorld,s=t.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),hr.copy(n.boundingSphere),hr.applyMatrix4(r),hr.radius+=s,t.ray.intersectsSphere(hr)===!1)return;ao.copy(r).invert(),yi.copy(t.ray).applyMatrix4(ao);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,h=n.index,d=n.attributes.position;if(h!==null){const p=Math.max(0,a.start),g=Math.min(h.count,a.start+a.count);for(let x=p,m=g-1;x<m;x+=c){const f=h.getX(x),T=h.getX(x+1),y=ur(this,t,yi,l,f,T,x);y&&e.push(y)}if(this.isLineLoop){const x=h.getX(g-1),m=h.getX(p),f=ur(this,t,yi,l,x,m,g-1);f&&e.push(f)}}else{const p=Math.max(0,a.start),g=Math.min(d.count,a.start+a.count);for(let x=p,m=g-1;x<m;x+=c){const f=ur(this,t,yi,l,x,x+1,x);f&&e.push(f)}if(this.isLineLoop){const x=ur(this,t,yi,l,g-1,p,g-1);x&&e.push(x)}}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const r=e[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}function ur(i,t,e,n,r,s,a){const o=i.geometry.attributes.position;if(Rr.fromBufferAttribute(o,r),Cr.fromBufferAttribute(o,s),e.distanceSqToSegment(Rr,Cr,ss,oo)>n)return;ss.applyMatrix4(i.matrixWorld);const c=t.ray.origin.distanceTo(ss);if(!(c<t.near||c>t.far))return{distance:c,point:oo.clone().applyMatrix4(i.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:i}}const co=new P,lo=new P;class ng extends bh{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[];for(let r=0,s=e.count;r<s;r+=2)co.fromBufferAttribute(e,r),lo.fromBufferAttribute(e,r+1),n[r]=r===0?0:n[r-1],n[r+1]=n[r]+co.distanceTo(lo);t.setAttribute("lineDistance",new Jt(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class ig extends ge{constructor(t,e,n,r,s,a,o,l,c){super(t,e,n,r,s,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class fc extends ge{constructor(t,e,n=In,r,s,a,o=Ce,l=Ce,c,h=Li,u=1){if(h!==Li&&h!==Di)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const d={width:t,height:e,depth:u};super(d,r,s,a,o,l,h,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new va(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}class dc extends ge{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}}class pc extends _e{constructor(t=1,e=32,n=0,r=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:r},e=Math.max(3,e);const s=[],a=[],o=[],l=[],c=new P,h=new ct;a.push(0,0,0),o.push(0,0,1),l.push(.5,.5);for(let u=0,d=3;u<=e;u++,d+=3){const p=n+u/e*r;c.x=t*Math.cos(p),c.y=t*Math.sin(p),a.push(c.x,c.y,c.z),o.push(0,0,1),h.x=(a[d]/t+1)/2,h.y=(a[d+1]/t+1)/2,l.push(h.x,h.y)}for(let u=1;u<=e;u++)s.push(u,u+1,0);this.setIndex(s),this.setAttribute("position",new Jt(a,3)),this.setAttribute("normal",new Jt(o,3)),this.setAttribute("uv",new Jt(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new pc(t.radius,t.segments,t.thetaStart,t.thetaLength)}}class mc extends _e{constructor(t=1,e=1,n=1,r=32,s=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:r,heightSegments:s,openEnded:a,thetaStart:o,thetaLength:l};const c=this;r=Math.floor(r),s=Math.floor(s);const h=[],u=[],d=[],p=[];let g=0;const x=[],m=n/2;let f=0;T(),a===!1&&(t>0&&y(!0),e>0&&y(!1)),this.setIndex(h),this.setAttribute("position",new Jt(u,3)),this.setAttribute("normal",new Jt(d,3)),this.setAttribute("uv",new Jt(p,2));function T(){const v=new P,R=new P;let b=0;const C=(e-t)/n;for(let D=0;D<=s;D++){const E=[],M=D/s,L=M*(e-t)+t;for(let O=0;O<=r;O++){const H=O/r,W=H*l+o,q=Math.sin(W),k=Math.cos(W);R.x=L*q,R.y=-M*n+m,R.z=L*k,u.push(R.x,R.y,R.z),v.set(q,C,k).normalize(),d.push(v.x,v.y,v.z),p.push(H,1-M),E.push(g++)}x.push(E)}for(let D=0;D<r;D++)for(let E=0;E<s;E++){const M=x[E][D],L=x[E+1][D],O=x[E+1][D+1],H=x[E][D+1];(t>0||E!==0)&&(h.push(M,L,H),b+=3),(e>0||E!==s-1)&&(h.push(L,O,H),b+=3)}c.addGroup(f,b,0),f+=b}function y(v){const R=g,b=new ct,C=new P;let D=0;const E=v===!0?t:e,M=v===!0?1:-1;for(let O=1;O<=r;O++)u.push(0,m*M,0),d.push(0,M,0),p.push(.5,.5),g++;const L=g;for(let O=0;O<=r;O++){const W=O/r*l+o,q=Math.cos(W),k=Math.sin(W);C.x=E*k,C.y=m*M,C.z=E*q,u.push(C.x,C.y,C.z),d.push(0,M,0),b.x=q*.5+.5,b.y=k*.5*M+.5,p.push(b.x,b.y),g++}for(let O=0;O<r;O++){const H=R+O,W=L+O;v===!0?h.push(W,W+1,H):h.push(W+1,W,H),D+=3}c.addGroup(f,D,v===!0?1:2),f+=D}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new mc(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Ma extends _e{constructor(t=[],e=[],n=1,r=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:r};const s=[],a=[];o(r),c(n),h(),this.setAttribute("position",new Jt(s,3)),this.setAttribute("normal",new Jt(s.slice(),3)),this.setAttribute("uv",new Jt(a,2)),r===0?this.computeVertexNormals():this.normalizeNormals();function o(T){const y=new P,v=new P,R=new P;for(let b=0;b<e.length;b+=3)p(e[b+0],y),p(e[b+1],v),p(e[b+2],R),l(y,v,R,T)}function l(T,y,v,R){const b=R+1,C=[];for(let D=0;D<=b;D++){C[D]=[];const E=T.clone().lerp(v,D/b),M=y.clone().lerp(v,D/b),L=b-D;for(let O=0;O<=L;O++)O===0&&D===b?C[D][O]=E:C[D][O]=E.clone().lerp(M,O/L)}for(let D=0;D<b;D++)for(let E=0;E<2*(b-D)-1;E++){const M=Math.floor(E/2);E%2===0?(d(C[D][M+1]),d(C[D+1][M]),d(C[D][M])):(d(C[D][M+1]),d(C[D+1][M+1]),d(C[D+1][M]))}}function c(T){const y=new P;for(let v=0;v<s.length;v+=3)y.x=s[v+0],y.y=s[v+1],y.z=s[v+2],y.normalize().multiplyScalar(T),s[v+0]=y.x,s[v+1]=y.y,s[v+2]=y.z}function h(){const T=new P;for(let y=0;y<s.length;y+=3){T.x=s[y+0],T.y=s[y+1],T.z=s[y+2];const v=m(T)/2/Math.PI+.5,R=f(T)/Math.PI+.5;a.push(v,1-R)}g(),u()}function u(){for(let T=0;T<a.length;T+=6){const y=a[T+0],v=a[T+2],R=a[T+4],b=Math.max(y,v,R),C=Math.min(y,v,R);b>.9&&C<.1&&(y<.2&&(a[T+0]+=1),v<.2&&(a[T+2]+=1),R<.2&&(a[T+4]+=1))}}function d(T){s.push(T.x,T.y,T.z)}function p(T,y){const v=T*3;y.x=t[v+0],y.y=t[v+1],y.z=t[v+2]}function g(){const T=new P,y=new P,v=new P,R=new P,b=new ct,C=new ct,D=new ct;for(let E=0,M=0;E<s.length;E+=9,M+=6){T.set(s[E+0],s[E+1],s[E+2]),y.set(s[E+3],s[E+4],s[E+5]),v.set(s[E+6],s[E+7],s[E+8]),b.set(a[M+0],a[M+1]),C.set(a[M+2],a[M+3]),D.set(a[M+4],a[M+5]),R.copy(T).add(y).add(v).divideScalar(3);const L=m(R);x(b,M+0,T,L),x(C,M+2,y,L),x(D,M+4,v,L)}}function x(T,y,v,R){R<0&&T.x===1&&(a[y]=T.x-1),v.x===0&&v.z===0&&(a[y]=R/2/Math.PI+.5)}function m(T){return Math.atan2(T.z,-T.x)}function f(T){return Math.atan2(-T.y,Math.sqrt(T.x*T.x+T.z*T.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ma(t.vertices,t.indices,t.radius,t.details)}}const fr=new P,dr=new P,as=new P,pr=new Ne;class rg extends _e{constructor(t=null,e=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:t,thresholdAngle:e},t!==null){const r=Math.pow(10,4),s=Math.cos(si*e),a=t.getIndex(),o=t.getAttribute("position"),l=a?a.count:o.count,c=[0,0,0],h=["a","b","c"],u=new Array(3),d={},p=[];for(let g=0;g<l;g+=3){a?(c[0]=a.getX(g),c[1]=a.getX(g+1),c[2]=a.getX(g+2)):(c[0]=g,c[1]=g+1,c[2]=g+2);const{a:x,b:m,c:f}=pr;if(x.fromBufferAttribute(o,c[0]),m.fromBufferAttribute(o,c[1]),f.fromBufferAttribute(o,c[2]),pr.getNormal(as),u[0]=`${Math.round(x.x*r)},${Math.round(x.y*r)},${Math.round(x.z*r)}`,u[1]=`${Math.round(m.x*r)},${Math.round(m.y*r)},${Math.round(m.z*r)}`,u[2]=`${Math.round(f.x*r)},${Math.round(f.y*r)},${Math.round(f.z*r)}`,!(u[0]===u[1]||u[1]===u[2]||u[2]===u[0]))for(let T=0;T<3;T++){const y=(T+1)%3,v=u[T],R=u[y],b=pr[h[T]],C=pr[h[y]],D=`${v}_${R}`,E=`${R}_${v}`;E in d&&d[E]?(as.dot(d[E].normal)<=s&&(p.push(b.x,b.y,b.z),p.push(C.x,C.y,C.z)),d[E]=null):D in d||(d[D]={index0:c[T],index1:c[y],normal:as.clone()})}}for(const g in d)if(d[g]){const{index0:x,index1:m}=d[g];fr.fromBufferAttribute(o,x),dr.fromBufferAttribute(o,m),p.push(fr.x,fr.y,fr.z),p.push(dr.x,dr.y,dr.z)}this.setAttribute("position",new Jt(p,3))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}}class Ze{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){console.warn("THREE.Curve: .getPoint() not implemented.")}getPointAt(t,e){const n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let n,r=this.getPoint(0),s=0;e.push(0);for(let a=1;a<=t;a++)n=this.getPoint(a/t),s+=n.distanceTo(r),e.push(s),r=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e=null){const n=this.getLengths();let r=0;const s=n.length;let a;e?a=e:a=t*n[s-1];let o=0,l=s-1,c;for(;o<=l;)if(r=Math.floor(o+(l-o)/2),c=n[r]-a,c<0)o=r+1;else if(c>0)l=r-1;else{l=r;break}if(r=l,n[r]===a)return r/(s-1);const h=n[r],d=n[r+1]-h,p=(a-h)/d;return(r+p)/(s-1)}getTangent(t,e){let r=t-1e-4,s=t+1e-4;r<0&&(r=0),s>1&&(s=1);const a=this.getPoint(r),o=this.getPoint(s),l=e||(a.isVector2?new ct:new P);return l.copy(o).sub(a).normalize(),l}getTangentAt(t,e){const n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e=!1){const n=new P,r=[],s=[],a=[],o=new P,l=new ie;for(let p=0;p<=t;p++){const g=p/t;r[p]=this.getTangentAt(g,new P)}s[0]=new P,a[0]=new P;let c=Number.MAX_VALUE;const h=Math.abs(r[0].x),u=Math.abs(r[0].y),d=Math.abs(r[0].z);h<=c&&(c=h,n.set(1,0,0)),u<=c&&(c=u,n.set(0,1,0)),d<=c&&n.set(0,0,1),o.crossVectors(r[0],n).normalize(),s[0].crossVectors(r[0],o),a[0].crossVectors(r[0],s[0]);for(let p=1;p<=t;p++){if(s[p]=s[p-1].clone(),a[p]=a[p-1].clone(),o.crossVectors(r[p-1],r[p]),o.length()>Number.EPSILON){o.normalize();const g=Math.acos(Gt(r[p-1].dot(r[p]),-1,1));s[p].applyMatrix4(l.makeRotationAxis(o,g))}a[p].crossVectors(r[p],s[p])}if(e===!0){let p=Math.acos(Gt(s[0].dot(s[t]),-1,1));p/=t,r[0].dot(o.crossVectors(s[0],s[t]))>0&&(p=-p);for(let g=1;g<=t;g++)s[g].applyMatrix4(l.makeRotationAxis(r[g],p*g)),a[g].crossVectors(r[g],s[g])}return{tangents:r,normals:s,binormals:a}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class Sa extends Ze{constructor(t=0,e=0,n=1,r=1,s=0,a=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=r,this.aStartAngle=s,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(t,e=new ct){const n=e,r=Math.PI*2;let s=this.aEndAngle-this.aStartAngle;const a=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=r;for(;s>r;)s-=r;s<Number.EPSILON&&(a?s=0:s=r),this.aClockwise===!0&&!a&&(s===r?s=-r:s=s-r);const o=this.aStartAngle+t*s;let l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){const h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),d=l-this.aX,p=c-this.aY;l=d*h-p*u+this.aX,c=d*u+p*h+this.aY}return n.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class wh extends Sa{constructor(t,e,n,r,s,a){super(t,e,n,n,r,s,a),this.isArcCurve=!0,this.type="ArcCurve"}}function ya(){let i=0,t=0,e=0,n=0;function r(s,a,o,l){i=s,t=o,e=-3*s+3*a-2*o-l,n=2*s-2*a+o+l}return{initCatmullRom:function(s,a,o,l,c){r(a,o,c*(o-s),c*(l-a))},initNonuniformCatmullRom:function(s,a,o,l,c,h,u){let d=(a-s)/c-(o-s)/(c+h)+(o-a)/h,p=(o-a)/h-(l-a)/(h+u)+(l-o)/u;d*=h,p*=h,r(a,o,d,p)},calc:function(s){const a=s*s,o=a*s;return i+t*s+e*a+n*o}}}const mr=new P,os=new ya,cs=new ya,ls=new ya;class Rh extends Ze{constructor(t=[],e=!1,n="centripetal",r=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=r}getPoint(t,e=new P){const n=e,r=this.points,s=r.length,a=(s-(this.closed?0:1))*t;let o=Math.floor(a),l=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/s)+1)*s:l===0&&o===s-1&&(o=s-2,l=1);let c,h;this.closed||o>0?c=r[(o-1)%s]:(mr.subVectors(r[0],r[1]).add(r[0]),c=mr);const u=r[o%s],d=r[(o+1)%s];if(this.closed||o+2<s?h=r[(o+2)%s]:(mr.subVectors(r[s-1],r[s-2]).add(r[s-1]),h=mr),this.curveType==="centripetal"||this.curveType==="chordal"){const p=this.curveType==="chordal"?.5:.25;let g=Math.pow(c.distanceToSquared(u),p),x=Math.pow(u.distanceToSquared(d),p),m=Math.pow(d.distanceToSquared(h),p);x<1e-4&&(x=1),g<1e-4&&(g=x),m<1e-4&&(m=x),os.initNonuniformCatmullRom(c.x,u.x,d.x,h.x,g,x,m),cs.initNonuniformCatmullRom(c.y,u.y,d.y,h.y,g,x,m),ls.initNonuniformCatmullRom(c.z,u.z,d.z,h.z,g,x,m)}else this.curveType==="catmullrom"&&(os.initCatmullRom(c.x,u.x,d.x,h.x,this.tension),cs.initCatmullRom(c.y,u.y,d.y,h.y,this.tension),ls.initCatmullRom(c.z,u.z,d.z,h.z,this.tension));return n.set(os.calc(l),cs.calc(l),ls.calc(l)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const r=t.points[e];this.points.push(r.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const r=this.points[e];t.points.push(r.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const r=t.points[e];this.points.push(new P().fromArray(r))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function ho(i,t,e,n,r){const s=(n-t)*.5,a=(r-e)*.5,o=i*i,l=i*o;return(2*e-2*n+s+a)*l+(-3*e+3*n-2*s-a)*o+s*i+e}function Ch(i,t){const e=1-i;return e*e*t}function Ph(i,t){return 2*(1-i)*i*t}function Lh(i,t){return i*i*t}function wi(i,t,e,n){return Ch(i,t)+Ph(i,e)+Lh(i,n)}function Dh(i,t){const e=1-i;return e*e*e*t}function Ih(i,t){const e=1-i;return 3*e*e*i*t}function Uh(i,t){return 3*(1-i)*i*i*t}function Nh(i,t){return i*i*i*t}function Ri(i,t,e,n,r){return Dh(i,t)+Ih(i,e)+Uh(i,n)+Nh(i,r)}class gc extends Ze{constructor(t=new ct,e=new ct,n=new ct,r=new ct){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=r}getPoint(t,e=new ct){const n=e,r=this.v0,s=this.v1,a=this.v2,o=this.v3;return n.set(Ri(t,r.x,s.x,a.x,o.x),Ri(t,r.y,s.y,a.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class Fh extends Ze{constructor(t=new P,e=new P,n=new P,r=new P){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=r}getPoint(t,e=new P){const n=e,r=this.v0,s=this.v1,a=this.v2,o=this.v3;return n.set(Ri(t,r.x,s.x,a.x,o.x),Ri(t,r.y,s.y,a.y,o.y),Ri(t,r.z,s.z,a.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class _c extends Ze{constructor(t=new ct,e=new ct){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new ct){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new ct){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Oh extends Ze{constructor(t=new P,e=new P){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new P){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new P){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class vc extends Ze{constructor(t=new ct,e=new ct,n=new ct){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new ct){const n=e,r=this.v0,s=this.v1,a=this.v2;return n.set(wi(t,r.x,s.x,a.x),wi(t,r.y,s.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class xc extends Ze{constructor(t=new P,e=new P,n=new P){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new P){const n=e,r=this.v0,s=this.v1,a=this.v2;return n.set(wi(t,r.x,s.x,a.x),wi(t,r.y,s.y,a.y),wi(t,r.z,s.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Mc extends Ze{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new ct){const n=e,r=this.points,s=(r.length-1)*t,a=Math.floor(s),o=s-a,l=r[a===0?a:a-1],c=r[a],h=r[a>r.length-2?r.length-1:a+1],u=r[a>r.length-3?r.length-1:a+2];return n.set(ho(o,l.x,c.x,h.x,u.x),ho(o,l.y,c.y,h.y,u.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const r=t.points[e];this.points.push(r.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const r=this.points[e];t.points.push(r.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const r=t.points[e];this.points.push(new ct().fromArray(r))}return this}}var Pr=Object.freeze({__proto__:null,ArcCurve:wh,CatmullRomCurve3:Rh,CubicBezierCurve:gc,CubicBezierCurve3:Fh,EllipseCurve:Sa,LineCurve:_c,LineCurve3:Oh,QuadraticBezierCurve:vc,QuadraticBezierCurve3:xc,SplineCurve:Mc});class Bh extends Ze{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){const t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){const n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Pr[n](e,t))}return this}getPoint(t,e){const n=t*this.getLength(),r=this.getCurveLengths();let s=0;for(;s<r.length;){if(r[s]>=n){const a=r[s]-n,o=this.curves[s],l=o.getLength(),c=l===0?0:1-a/l;return o.getPointAt(c,e)}s++}return null}getLength(){const t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const t=[];let e=0;for(let n=0,r=this.curves.length;n<r;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){const e=[];let n;for(let r=0,s=this.curves;r<s.length;r++){const a=s[r],o=a.isEllipseCurve?t*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?t*a.points.length:t,l=a.getPoints(o);for(let c=0;c<l.length;c++){const h=l[c];n&&n.equals(h)||(e.push(h),n=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const r=t.curves[e];this.curves.push(r.clone())}return this.autoClose=t.autoClose,this}toJSON(){const t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){const r=this.curves[e];t.curves.push(r.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const r=t.curves[e];this.curves.push(new Pr[r.type]().fromJSON(r))}return this}}class uo extends Bh{constructor(t){super(),this.type="Path",this.currentPoint=new ct,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){const n=new _c(this.currentPoint.clone(),new ct(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,r){const s=new vc(this.currentPoint.clone(),new ct(t,e),new ct(n,r));return this.curves.push(s),this.currentPoint.set(n,r),this}bezierCurveTo(t,e,n,r,s,a){const o=new gc(this.currentPoint.clone(),new ct(t,e),new ct(n,r),new ct(s,a));return this.curves.push(o),this.currentPoint.set(s,a),this}splineThru(t){const e=[this.currentPoint.clone()].concat(t),n=new Mc(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,r,s,a){const o=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+o,e+l,n,r,s,a),this}absarc(t,e,n,r,s,a){return this.absellipse(t,e,n,n,r,s,a),this}ellipse(t,e,n,r,s,a,o,l){const c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+c,e+h,n,r,s,a,o,l),this}absellipse(t,e,n,r,s,a,o,l){const c=new Sa(t,e,n,r,s,a,o,l);if(this.curves.length>0){const u=c.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(c);const h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){const t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}}class Sc extends uo{constructor(t){super(t),this.uuid=On(),this.type="Shape",this.holes=[]}getPointsHoles(t){const e=[];for(let n=0,r=this.holes.length;n<r;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const r=t.holes[e];this.holes.push(r.clone())}return this}toJSON(){const t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){const r=this.holes[e];t.holes.push(r.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const r=t.holes[e];this.holes.push(new uo().fromJSON(r))}return this}}function zh(i,t,e=2){const n=t&&t.length,r=n?t[0]*e:i.length;let s=yc(i,0,r,e,!0);const a=[];if(!s||s.next===s.prev)return a;let o,l,c;if(n&&(s=Wh(i,t,s,e)),i.length>80*e){o=1/0,l=1/0;let h=-1/0,u=-1/0;for(let d=e;d<r;d+=e){const p=i[d],g=i[d+1];p<o&&(o=p),g<l&&(l=g),p>h&&(h=p),g>u&&(u=g)}c=Math.max(h-o,u-l),c=c!==0?32767/c:0}return Fi(s,a,e,o,l,c,0),a}function yc(i,t,e,n,r){let s;if(r===eu(i,t,e,n)>0)for(let a=t;a<e;a+=n)s=fo(a/n|0,i[a],i[a+1],s);else for(let a=e-n;a>=t;a-=n)s=fo(a/n|0,i[a],i[a+1],s);return s&&fi(s,s.next)&&(Bi(s),s=s.next),s}function Nn(i,t){if(!i)return i;t||(t=i);let e=i,n;do if(n=!1,!e.steiner&&(fi(e,e.next)||le(e.prev,e,e.next)===0)){if(Bi(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function Fi(i,t,e,n,r,s,a){if(!i)return;!a&&s&&Zh(i,n,r,s);let o=i;for(;i.prev!==i.next;){const l=i.prev,c=i.next;if(s?Vh(i,n,r,s):Hh(i)){t.push(l.i,i.i,c.i),Bi(i),i=c.next,o=c.next;continue}if(i=c,i===o){a?a===1?(i=Gh(Nn(i),t),Fi(i,t,e,n,r,s,2)):a===2&&kh(i,t,e,n,r,s):Fi(Nn(i),t,e,n,r,s,1);break}}}function Hh(i){const t=i.prev,e=i,n=i.next;if(le(t,e,n)>=0)return!1;const r=t.x,s=e.x,a=n.x,o=t.y,l=e.y,c=n.y,h=Math.min(r,s,a),u=Math.min(o,l,c),d=Math.max(r,s,a),p=Math.max(o,l,c);let g=n.next;for(;g!==t;){if(g.x>=h&&g.x<=d&&g.y>=u&&g.y<=p&&Ti(r,o,s,l,a,c,g.x,g.y)&&le(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function Vh(i,t,e,n){const r=i.prev,s=i,a=i.next;if(le(r,s,a)>=0)return!1;const o=r.x,l=s.x,c=a.x,h=r.y,u=s.y,d=a.y,p=Math.min(o,l,c),g=Math.min(h,u,d),x=Math.max(o,l,c),m=Math.max(h,u,d),f=aa(p,g,t,e,n),T=aa(x,m,t,e,n);let y=i.prevZ,v=i.nextZ;for(;y&&y.z>=f&&v&&v.z<=T;){if(y.x>=p&&y.x<=x&&y.y>=g&&y.y<=m&&y!==r&&y!==a&&Ti(o,h,l,u,c,d,y.x,y.y)&&le(y.prev,y,y.next)>=0||(y=y.prevZ,v.x>=p&&v.x<=x&&v.y>=g&&v.y<=m&&v!==r&&v!==a&&Ti(o,h,l,u,c,d,v.x,v.y)&&le(v.prev,v,v.next)>=0))return!1;v=v.nextZ}for(;y&&y.z>=f;){if(y.x>=p&&y.x<=x&&y.y>=g&&y.y<=m&&y!==r&&y!==a&&Ti(o,h,l,u,c,d,y.x,y.y)&&le(y.prev,y,y.next)>=0)return!1;y=y.prevZ}for(;v&&v.z<=T;){if(v.x>=p&&v.x<=x&&v.y>=g&&v.y<=m&&v!==r&&v!==a&&Ti(o,h,l,u,c,d,v.x,v.y)&&le(v.prev,v,v.next)>=0)return!1;v=v.nextZ}return!0}function Gh(i,t){let e=i;do{const n=e.prev,r=e.next.next;!fi(n,r)&&Tc(n,e,e.next,r)&&Oi(n,r)&&Oi(r,n)&&(t.push(n.i,e.i,r.i),Bi(e),Bi(e.next),e=i=r),e=e.next}while(e!==i);return Nn(e)}function kh(i,t,e,n,r,s){let a=i;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&jh(a,o)){let l=Ac(a,o);a=Nn(a,a.next),l=Nn(l,l.next),Fi(a,t,e,n,r,s,0),Fi(l,t,e,n,r,s,0);return}o=o.next}a=a.next}while(a!==i)}function Wh(i,t,e,n){const r=[];for(let s=0,a=t.length;s<a;s++){const o=t[s]*n,l=s<a-1?t[s+1]*n:i.length,c=yc(i,o,l,n,!1);c===c.next&&(c.steiner=!0),r.push(Kh(c))}r.sort(Xh);for(let s=0;s<r.length;s++)e=qh(r[s],e);return e}function Xh(i,t){let e=i.x-t.x;if(e===0&&(e=i.y-t.y,e===0)){const n=(i.next.y-i.y)/(i.next.x-i.x),r=(t.next.y-t.y)/(t.next.x-t.x);e=n-r}return e}function qh(i,t){const e=Yh(i,t);if(!e)return t;const n=Ac(e,i);return Nn(n,n.next),Nn(e,e.next)}function Yh(i,t){let e=t;const n=i.x,r=i.y;let s=-1/0,a;if(fi(i,e))return e;do{if(fi(i,e.next))return e.next;if(r<=e.y&&r>=e.next.y&&e.next.y!==e.y){const u=e.x+(r-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(u<=n&&u>s&&(s=u,a=e.x<e.next.x?e:e.next,u===n))return a}e=e.next}while(e!==t);if(!a)return null;const o=a,l=a.x,c=a.y;let h=1/0;e=a;do{if(n>=e.x&&e.x>=l&&n!==e.x&&Ec(r<c?n:s,r,l,c,r<c?s:n,r,e.x,e.y)){const u=Math.abs(r-e.y)/(n-e.x);Oi(e,i)&&(u<h||u===h&&(e.x>a.x||e.x===a.x&&Jh(a,e)))&&(a=e,h=u)}e=e.next}while(e!==o);return a}function Jh(i,t){return le(i.prev,i,t.prev)<0&&le(t.next,i,i.next)<0}function Zh(i,t,e,n){let r=i;do r.z===0&&(r.z=aa(r.x,r.y,t,e,n)),r.prevZ=r.prev,r.nextZ=r.next,r=r.next;while(r!==i);r.prevZ.nextZ=null,r.prevZ=null,$h(r)}function $h(i){let t,e=1;do{let n=i,r;i=null;let s=null;for(t=0;n;){t++;let a=n,o=0;for(let c=0;c<e&&(o++,a=a.nextZ,!!a);c++);let l=e;for(;o>0||l>0&&a;)o!==0&&(l===0||!a||n.z<=a.z)?(r=n,n=n.nextZ,o--):(r=a,a=a.nextZ,l--),s?s.nextZ=r:i=r,r.prevZ=s,s=r;n=a}s.nextZ=null,e*=2}while(t>1);return i}function aa(i,t,e,n,r){return i=(i-e)*r|0,t=(t-n)*r|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,i|t<<1}function Kh(i){let t=i,e=i;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==i);return e}function Ec(i,t,e,n,r,s,a,o){return(r-a)*(t-o)>=(i-a)*(s-o)&&(i-a)*(n-o)>=(e-a)*(t-o)&&(e-a)*(s-o)>=(r-a)*(n-o)}function Ti(i,t,e,n,r,s,a,o){return!(i===a&&t===o)&&Ec(i,t,e,n,r,s,a,o)}function jh(i,t){return i.next.i!==t.i&&i.prev.i!==t.i&&!Qh(i,t)&&(Oi(i,t)&&Oi(t,i)&&tu(i,t)&&(le(i.prev,i,t.prev)||le(i,t.prev,t))||fi(i,t)&&le(i.prev,i,i.next)>0&&le(t.prev,t,t.next)>0)}function le(i,t,e){return(t.y-i.y)*(e.x-t.x)-(t.x-i.x)*(e.y-t.y)}function fi(i,t){return i.x===t.x&&i.y===t.y}function Tc(i,t,e,n){const r=_r(le(i,t,e)),s=_r(le(i,t,n)),a=_r(le(e,n,i)),o=_r(le(e,n,t));return!!(r!==s&&a!==o||r===0&&gr(i,e,t)||s===0&&gr(i,n,t)||a===0&&gr(e,i,n)||o===0&&gr(e,t,n))}function gr(i,t,e){return t.x<=Math.max(i.x,e.x)&&t.x>=Math.min(i.x,e.x)&&t.y<=Math.max(i.y,e.y)&&t.y>=Math.min(i.y,e.y)}function _r(i){return i>0?1:i<0?-1:0}function Qh(i,t){let e=i;do{if(e.i!==i.i&&e.next.i!==i.i&&e.i!==t.i&&e.next.i!==t.i&&Tc(e,e.next,i,t))return!0;e=e.next}while(e!==i);return!1}function Oi(i,t){return le(i.prev,i,i.next)<0?le(i,t,i.next)>=0&&le(i,i.prev,t)>=0:le(i,t,i.prev)<0||le(i,i.next,t)<0}function tu(i,t){let e=i,n=!1;const r=(i.x+t.x)/2,s=(i.y+t.y)/2;do e.y>s!=e.next.y>s&&e.next.y!==e.y&&r<(e.next.x-e.x)*(s-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==i);return n}function Ac(i,t){const e=oa(i.i,i.x,i.y),n=oa(t.i,t.x,t.y),r=i.next,s=t.prev;return i.next=t,t.prev=i,e.next=r,r.prev=e,n.next=e,e.prev=n,s.next=n,n.prev=s,n}function fo(i,t,e,n){const r=oa(i,t,e);return n?(r.next=n.next,r.prev=n,n.next.prev=r,n.next=r):(r.prev=r,r.next=r),r}function Bi(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function oa(i,t,e){return{i,x:t,y:e,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function eu(i,t,e,n){let r=0;for(let s=t,a=e-n;s<e;s+=n)r+=(i[a]-i[s])*(i[s+1]+i[a+1]),a=s;return r}class nu{static triangulate(t,e,n=2){return zh(t,e,n)}}class sn{static area(t){const e=t.length;let n=0;for(let r=e-1,s=0;s<e;r=s++)n+=t[r].x*t[s].y-t[s].x*t[r].y;return n*.5}static isClockWise(t){return sn.area(t)<0}static triangulateShape(t,e){const n=[],r=[],s=[];po(t),mo(n,t);let a=t.length;e.forEach(po);for(let l=0;l<e.length;l++)r.push(a),a+=e[l].length,mo(n,e[l]);const o=nu.triangulate(n,r);for(let l=0;l<o.length;l+=3)s.push(o.slice(l,l+3));return s}}function po(i){const t=i.length;t>2&&i[t-1].equals(i[0])&&i.pop()}function mo(i,t){for(let e=0;e<t.length;e++)i.push(t[e].x),i.push(t[e].y)}class bc extends _e{constructor(t=new Sc([new ct(.5,.5),new ct(-.5,.5),new ct(-.5,-.5),new ct(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];const n=this,r=[],s=[];for(let o=0,l=t.length;o<l;o++){const c=t[o];a(c)}this.setAttribute("position",new Jt(r,3)),this.setAttribute("uv",new Jt(s,2)),this.computeVertexNormals();function a(o){const l=[],c=e.curveSegments!==void 0?e.curveSegments:12,h=e.steps!==void 0?e.steps:1,u=e.depth!==void 0?e.depth:1;let d=e.bevelEnabled!==void 0?e.bevelEnabled:!0,p=e.bevelThickness!==void 0?e.bevelThickness:.2,g=e.bevelSize!==void 0?e.bevelSize:p-.1,x=e.bevelOffset!==void 0?e.bevelOffset:0,m=e.bevelSegments!==void 0?e.bevelSegments:3;const f=e.extrudePath,T=e.UVGenerator!==void 0?e.UVGenerator:iu;let y,v=!1,R,b,C,D;f&&(y=f.getSpacedPoints(h),v=!0,d=!1,R=f.computeFrenetFrames(h,!1),b=new P,C=new P,D=new P),d||(m=0,p=0,g=0,x=0);const E=o.extractPoints(c);let M=E.shape;const L=E.holes;if(!sn.isClockWise(M)){M=M.reverse();for(let Q=0,$=L.length;Q<$;Q++){const Z=L[Q];sn.isClockWise(Z)&&(L[Q]=Z.reverse())}}function H(Q){const Z=10000000000000001e-36;let J=Q[0];for(let lt=1;lt<=Q.length;lt++){const nt=lt%Q.length,ht=Q[nt],Ft=ht.x-J.x,Nt=ht.y-J.y,A=Ft*Ft+Nt*Nt,_=Math.max(Math.abs(ht.x),Math.abs(ht.y),Math.abs(J.x),Math.abs(J.y)),F=Z*_*_;if(A<=F){Q.splice(nt,1),lt--;continue}J=ht}}H(M),L.forEach(H);const W=L.length,q=M;for(let Q=0;Q<W;Q++){const $=L[Q];M=M.concat($)}function k(Q,$,Z){return $||console.error("THREE.ExtrudeGeometry: vec does not exist"),Q.clone().addScaledVector($,Z)}const et=M.length;function G(Q,$,Z){let J,lt,nt;const ht=Q.x-$.x,Ft=Q.y-$.y,Nt=Z.x-Q.x,A=Z.y-Q.y,_=ht*ht+Ft*Ft,F=ht*A-Ft*Nt;if(Math.abs(F)>Number.EPSILON){const V=Math.sqrt(_),j=Math.sqrt(Nt*Nt+A*A),X=$.x-Ft/V,wt=$.y+ht/V,ot=Z.x-A/j,Tt=Z.y+Nt/j,At=((ot-X)*A-(Tt-wt)*Nt)/(ht*A-Ft*Nt);J=X+ht*At-Q.x,lt=wt+Ft*At-Q.y;const it=J*J+lt*lt;if(it<=2)return new ct(J,lt);nt=Math.sqrt(it/2)}else{let V=!1;ht>Number.EPSILON?Nt>Number.EPSILON&&(V=!0):ht<-Number.EPSILON?Nt<-Number.EPSILON&&(V=!0):Math.sign(Ft)===Math.sign(A)&&(V=!0),V?(J=-Ft,lt=ht,nt=Math.sqrt(_)):(J=ht,lt=Ft,nt=Math.sqrt(_/2))}return new ct(J/nt,lt/nt)}const ut=[];for(let Q=0,$=q.length,Z=$-1,J=Q+1;Q<$;Q++,Z++,J++)Z===$&&(Z=0),J===$&&(J=0),ut[Q]=G(q[Q],q[Z],q[J]);const _t=[];let Mt,Bt=ut.concat();for(let Q=0,$=W;Q<$;Q++){const Z=L[Q];Mt=[];for(let J=0,lt=Z.length,nt=lt-1,ht=J+1;J<lt;J++,nt++,ht++)nt===lt&&(nt=0),ht===lt&&(ht=0),Mt[J]=G(Z[J],Z[nt],Z[ht]);_t.push(Mt),Bt=Bt.concat(Mt)}let qt;if(m===0)qt=sn.triangulateShape(q,L);else{const Q=[],$=[];for(let Z=0;Z<m;Z++){const J=Z/m,lt=p*Math.cos(J*Math.PI/2),nt=g*Math.sin(J*Math.PI/2)+x;for(let ht=0,Ft=q.length;ht<Ft;ht++){const Nt=k(q[ht],ut[ht],nt);Ct(Nt.x,Nt.y,-lt),J===0&&Q.push(Nt)}for(let ht=0,Ft=W;ht<Ft;ht++){const Nt=L[ht];Mt=_t[ht];const A=[];for(let _=0,F=Nt.length;_<F;_++){const V=k(Nt[_],Mt[_],nt);Ct(V.x,V.y,-lt),J===0&&A.push(V)}J===0&&$.push(A)}}qt=sn.triangulateShape(Q,$)}const jt=qt.length,Yt=g+x;for(let Q=0;Q<et;Q++){const $=d?k(M[Q],Bt[Q],Yt):M[Q];v?(C.copy(R.normals[0]).multiplyScalar($.x),b.copy(R.binormals[0]).multiplyScalar($.y),D.copy(y[0]).add(C).add(b),Ct(D.x,D.y,D.z)):Ct($.x,$.y,0)}for(let Q=1;Q<=h;Q++)for(let $=0;$<et;$++){const Z=d?k(M[$],Bt[$],Yt):M[$];v?(C.copy(R.normals[Q]).multiplyScalar(Z.x),b.copy(R.binormals[Q]).multiplyScalar(Z.y),D.copy(y[Q]).add(C).add(b),Ct(D.x,D.y,D.z)):Ct(Z.x,Z.y,u/h*Q)}for(let Q=m-1;Q>=0;Q--){const $=Q/m,Z=p*Math.cos($*Math.PI/2),J=g*Math.sin($*Math.PI/2)+x;for(let lt=0,nt=q.length;lt<nt;lt++){const ht=k(q[lt],ut[lt],J);Ct(ht.x,ht.y,u+Z)}for(let lt=0,nt=L.length;lt<nt;lt++){const ht=L[lt];Mt=_t[lt];for(let Ft=0,Nt=ht.length;Ft<Nt;Ft++){const A=k(ht[Ft],Mt[Ft],J);v?Ct(A.x,A.y+y[h-1].y,y[h-1].x+Z):Ct(A.x,A.y,u+Z)}}}Y(),tt();function Y(){const Q=r.length/3;if(d){let $=0,Z=et*$;for(let J=0;J<jt;J++){const lt=qt[J];Et(lt[2]+Z,lt[1]+Z,lt[0]+Z)}$=h+m*2,Z=et*$;for(let J=0;J<jt;J++){const lt=qt[J];Et(lt[0]+Z,lt[1]+Z,lt[2]+Z)}}else{for(let $=0;$<jt;$++){const Z=qt[$];Et(Z[2],Z[1],Z[0])}for(let $=0;$<jt;$++){const Z=qt[$];Et(Z[0]+et*h,Z[1]+et*h,Z[2]+et*h)}}n.addGroup(Q,r.length/3-Q,0)}function tt(){const Q=r.length/3;let $=0;xt(q,$),$+=q.length;for(let Z=0,J=L.length;Z<J;Z++){const lt=L[Z];xt(lt,$),$+=lt.length}n.addGroup(Q,r.length/3-Q,1)}function xt(Q,$){let Z=Q.length;for(;--Z>=0;){const J=Z;let lt=Z-1;lt<0&&(lt=Q.length-1);for(let nt=0,ht=h+m*2;nt<ht;nt++){const Ft=et*nt,Nt=et*(nt+1),A=$+J+Ft,_=$+lt+Ft,F=$+lt+Nt,V=$+J+Nt;kt(A,_,F,V)}}}function Ct(Q,$,Z){l.push(Q),l.push($),l.push(Z)}function Et(Q,$,Z){re(Q),re($),re(Z);const J=r.length/3,lt=T.generateTopUV(n,r,J-3,J-2,J-1);w(lt[0]),w(lt[1]),w(lt[2])}function kt(Q,$,Z,J){re(Q),re($),re(J),re($),re(Z),re(J);const lt=r.length/3,nt=T.generateSideWallUV(n,r,lt-6,lt-3,lt-2,lt-1);w(nt[0]),w(nt[1]),w(nt[3]),w(nt[1]),w(nt[2]),w(nt[3])}function re(Q){r.push(l[Q*3+0]),r.push(l[Q*3+1]),r.push(l[Q*3+2])}function w(Q){s.push(Q.x),s.push(Q.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON(),e=this.parameters.shapes,n=this.parameters.options;return ru(e,n,t)}static fromJSON(t,e){const n=[];for(let s=0,a=t.shapes.length;s<a;s++){const o=e[t.shapes[s]];n.push(o)}const r=t.options.extrudePath;return r!==void 0&&(t.options.extrudePath=new Pr[r.type]().fromJSON(r)),new bc(n,t.options)}}const iu={generateTopUV:function(i,t,e,n,r){const s=t[e*3],a=t[e*3+1],o=t[n*3],l=t[n*3+1],c=t[r*3],h=t[r*3+1];return[new ct(s,a),new ct(o,l),new ct(c,h)]},generateSideWallUV:function(i,t,e,n,r,s){const a=t[e*3],o=t[e*3+1],l=t[e*3+2],c=t[n*3],h=t[n*3+1],u=t[n*3+2],d=t[r*3],p=t[r*3+1],g=t[r*3+2],x=t[s*3],m=t[s*3+1],f=t[s*3+2];return Math.abs(o-h)<Math.abs(a-c)?[new ct(a,1-l),new ct(c,1-u),new ct(d,1-g),new ct(x,1-f)]:[new ct(o,1-l),new ct(h,1-u),new ct(p,1-g),new ct(m,1-f)]}};function ru(i,t,e){if(e.shapes=[],Array.isArray(i))for(let n=0,r=i.length;n<r;n++){const s=i[n];e.shapes.push(s.uuid)}else e.shapes.push(i.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}class wc extends Ma{constructor(t=1,e=0){const n=(1+Math.sqrt(5))/2,r=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],s=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(r,s,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new wc(t.radius,t.detail)}}class Dr extends _e{constructor(t=1,e=1,n=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:r};const s=t/2,a=e/2,o=Math.floor(n),l=Math.floor(r),c=o+1,h=l+1,u=t/o,d=e/l,p=[],g=[],x=[],m=[];for(let f=0;f<h;f++){const T=f*d-a;for(let y=0;y<c;y++){const v=y*u-s;g.push(v,-T,0),x.push(0,0,1),m.push(y/o),m.push(1-f/l)}}for(let f=0;f<l;f++)for(let T=0;T<o;T++){const y=T+c*f,v=T+c*(f+1),R=T+1+c*(f+1),b=T+1+c*f;p.push(y,v,b),p.push(v,R,b)}this.setIndex(p),this.setAttribute("position",new Jt(g,3)),this.setAttribute("normal",new Jt(x,3)),this.setAttribute("uv",new Jt(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Dr(t.width,t.height,t.widthSegments,t.heightSegments)}}class Rc extends _e{constructor(t=new Sc([new ct(0,.5),new ct(-.5,-.5),new ct(.5,-.5)]),e=12){super(),this.type="ShapeGeometry",this.parameters={shapes:t,curveSegments:e};const n=[],r=[],s=[],a=[];let o=0,l=0;if(Array.isArray(t)===!1)c(t);else for(let h=0;h<t.length;h++)c(t[h]),this.addGroup(o,l,h),o+=l,l=0;this.setIndex(n),this.setAttribute("position",new Jt(r,3)),this.setAttribute("normal",new Jt(s,3)),this.setAttribute("uv",new Jt(a,2));function c(h){const u=r.length/3,d=h.extractPoints(e);let p=d.shape;const g=d.holes;sn.isClockWise(p)===!1&&(p=p.reverse());for(let m=0,f=g.length;m<f;m++){const T=g[m];sn.isClockWise(T)===!0&&(g[m]=T.reverse())}const x=sn.triangulateShape(p,g);for(let m=0,f=g.length;m<f;m++){const T=g[m];p=p.concat(T)}for(let m=0,f=p.length;m<f;m++){const T=p[m];r.push(T.x,T.y,0),s.push(0,0,1),a.push(T.x,T.y)}for(let m=0,f=x.length;m<f;m++){const T=x[m],y=T[0]+u,v=T[1]+u,R=T[2]+u;n.push(y,v,R),l+=3}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON(),e=this.parameters.shapes;return su(e,t)}static fromJSON(t,e){const n=[];for(let r=0,s=t.shapes.length;r<s;r++){const a=e[t.shapes[r]];n.push(a)}return new Rc(n,t.curveSegments)}}function su(i,t){if(t.shapes=[],Array.isArray(i))for(let e=0,n=i.length;e<n;e++){const r=i[e];t.shapes.push(r.uuid)}else t.shapes.push(i.uuid);return t}class Cc extends _e{constructor(t=1,e=32,n=16,r=0,s=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:r,phiLength:s,thetaStart:a,thetaLength:o},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const l=Math.min(a+o,Math.PI);let c=0;const h=[],u=new P,d=new P,p=[],g=[],x=[],m=[];for(let f=0;f<=n;f++){const T=[],y=f/n;let v=0;f===0&&a===0?v=.5/e:f===n&&l===Math.PI&&(v=-.5/e);for(let R=0;R<=e;R++){const b=R/e;u.x=-t*Math.cos(r+b*s)*Math.sin(a+y*o),u.y=t*Math.cos(a+y*o),u.z=t*Math.sin(r+b*s)*Math.sin(a+y*o),g.push(u.x,u.y,u.z),d.copy(u).normalize(),x.push(d.x,d.y,d.z),m.push(b+v,1-y),T.push(c++)}h.push(T)}for(let f=0;f<n;f++)for(let T=0;T<e;T++){const y=h[f][T+1],v=h[f][T],R=h[f+1][T],b=h[f+1][T+1];(f!==0||a>0)&&p.push(y,v,b),(f!==n-1||l<Math.PI)&&p.push(v,R,b)}this.setIndex(p),this.setAttribute("position",new Jt(g,3)),this.setAttribute("normal",new Jt(x,3)),this.setAttribute("uv",new Jt(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Cc(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class Pc extends _e{constructor(t=1,e=.4,n=12,r=48,s=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:r,arc:s},n=Math.floor(n),r=Math.floor(r);const a=[],o=[],l=[],c=[],h=new P,u=new P,d=new P;for(let p=0;p<=n;p++)for(let g=0;g<=r;g++){const x=g/r*s,m=p/n*Math.PI*2;u.x=(t+e*Math.cos(m))*Math.cos(x),u.y=(t+e*Math.cos(m))*Math.sin(x),u.z=e*Math.sin(m),o.push(u.x,u.y,u.z),h.x=t*Math.cos(x),h.y=t*Math.sin(x),d.subVectors(u,h).normalize(),l.push(d.x,d.y,d.z),c.push(g/r),c.push(p/n)}for(let p=1;p<=n;p++)for(let g=1;g<=r;g++){const x=(r+1)*p+g-1,m=(r+1)*(p-1)+g-1,f=(r+1)*(p-1)+g,T=(r+1)*p+g;a.push(x,m,T),a.push(m,f,T)}this.setIndex(a),this.setAttribute("position",new Jt(o,3)),this.setAttribute("normal",new Jt(l,3)),this.setAttribute("uv",new Jt(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Pc(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}}class Lc extends _e{constructor(t=new xc(new P(-1,-1,0),new P(-1,1,0),new P(1,1,0)),e=64,n=1,r=8,s=!1){super(),this.type="TubeGeometry",this.parameters={path:t,tubularSegments:e,radius:n,radialSegments:r,closed:s};const a=t.computeFrenetFrames(e,s);this.tangents=a.tangents,this.normals=a.normals,this.binormals=a.binormals;const o=new P,l=new P,c=new ct;let h=new P;const u=[],d=[],p=[],g=[];x(),this.setIndex(g),this.setAttribute("position",new Jt(u,3)),this.setAttribute("normal",new Jt(d,3)),this.setAttribute("uv",new Jt(p,2));function x(){for(let y=0;y<e;y++)m(y);m(s===!1?e:0),T(),f()}function m(y){h=t.getPointAt(y/e,h);const v=a.normals[y],R=a.binormals[y];for(let b=0;b<=r;b++){const C=b/r*Math.PI*2,D=Math.sin(C),E=-Math.cos(C);l.x=E*v.x+D*R.x,l.y=E*v.y+D*R.y,l.z=E*v.z+D*R.z,l.normalize(),d.push(l.x,l.y,l.z),o.x=h.x+n*l.x,o.y=h.y+n*l.y,o.z=h.z+n*l.z,u.push(o.x,o.y,o.z)}}function f(){for(let y=1;y<=e;y++)for(let v=1;v<=r;v++){const R=(r+1)*(y-1)+(v-1),b=(r+1)*y+(v-1),C=(r+1)*y+v,D=(r+1)*(y-1)+v;g.push(R,b,D),g.push(b,C,D)}}function T(){for(let y=0;y<=e;y++)for(let v=0;v<=r;v++)c.x=y/e,c.y=v/r,p.push(c.x,c.y)}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON();return t.path=this.parameters.path.toJSON(),t}static fromJSON(t){return new Lc(new Pr[t.path.type]().fromJSON(t.path),t.tubularSegments,t.radius,t.radialSegments,t.closed)}}class sg extends vn{constructor(t){super(),this.isShadowMaterial=!0,this.type="ShadowMaterial",this.color=new Xt(0),this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.fog=t.fog,this}}class ag extends on{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class og extends vn{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Xt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Xt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ga,this.normalScale=new ct(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Je,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class cg extends vn{constructor(t){super(),this.isMeshToonMaterial=!0,this.defines={TOON:""},this.type="MeshToonMaterial",this.color=new Xt(16777215),this.map=null,this.gradientMap=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Xt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ga,this.normalScale=new ct(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.gradientMap=t.gradientMap,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.alphaMap=t.alphaMap,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}class au extends vn{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=yl,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class ou extends vn{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const hs={enabled:!1,files:{},add:function(i,t){this.enabled!==!1&&(this.files[i]=t)},get:function(i){if(this.enabled!==!1)return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};class cu{constructor(t,e,n){const r=this;let s=!1,a=0,o=0,l;const c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this.abortController=new AbortController,this.itemStart=function(h){o++,s===!1&&r.onStart!==void 0&&r.onStart(h,a,o),s=!0},this.itemEnd=function(h){a++,r.onProgress!==void 0&&r.onProgress(h,a,o),a===o&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(h){r.onError!==void 0&&r.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){const u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=c.length;u<d;u+=2){const p=c[u],g=c[u+1];if(p.global&&(p.lastIndex=0),p.test(h))return g}return null},this.abort=function(){return this.abortController.abort(),this.abortController=new AbortController,this}}}const lu=new cu;class Ea{constructor(t){this.manager=t!==void 0?t:lu,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){const n=this;return new Promise(function(r,s){n.load(t,r,e,s)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}abort(){return this}}Ea.DEFAULT_MATERIAL_NAME="__DEFAULT";const ti=new WeakMap;class hu extends Ea{constructor(t){super(t)}load(t,e,n,r){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const s=this,a=hs.get(`image:${t}`);if(a!==void 0){if(a.complete===!0)s.manager.itemStart(t),setTimeout(function(){e&&e(a),s.manager.itemEnd(t)},0);else{let u=ti.get(a);u===void 0&&(u=[],ti.set(a,u)),u.push({onLoad:e,onError:r})}return a}const o=Ui("img");function l(){h(),e&&e(this);const u=ti.get(this)||[];for(let d=0;d<u.length;d++){const p=u[d];p.onLoad&&p.onLoad(this)}ti.delete(this),s.manager.itemEnd(t)}function c(u){h(),r&&r(u),hs.remove(`image:${t}`);const d=ti.get(this)||[];for(let p=0;p<d.length;p++){const g=d[p];g.onError&&g.onError(u)}ti.delete(this),s.manager.itemError(t),s.manager.itemEnd(t)}function h(){o.removeEventListener("load",l,!1),o.removeEventListener("error",c,!1)}return o.addEventListener("load",l,!1),o.addEventListener("error",c,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),hs.add(`image:${t}`,o),s.manager.itemStart(t),o.src=t,o}}class lg extends Ea{constructor(t){super(t)}load(t,e,n,r){const s=new ge,a=new hu(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(t,function(o){s.image=o,s.needsUpdate=!0,e!==void 0&&e(s)},n,r),s}}class Ta extends me{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Xt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}class hg extends Ta{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(me.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Xt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}}const us=new ie,go=new P,_o=new P;class Dc{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ct(512,512),this.mapType=Ye,this.map=null,this.mapPass=null,this.matrix=new ie,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new xa,this._frameExtents=new ct(1,1),this._viewportCount=1,this._viewports=[new ee(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;go.setFromMatrixPosition(t.matrixWorld),e.position.copy(go),_o.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(_o),e.updateMatrixWorld(),us.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(us,e.coordinateSystem,e.reversedDepth),e.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(us)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const vo=new ie,Ei=new P,fs=new P;class uu extends Dc{constructor(){super(new Ue(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new ct(4,2),this._viewportCount=6,this._viewports=[new ee(2,1,1,1),new ee(0,1,1,1),new ee(3,1,1,1),new ee(1,1,1,1),new ee(3,0,1,1),new ee(1,0,1,1)],this._cubeDirections=[new P(1,0,0),new P(-1,0,0),new P(0,0,1),new P(0,0,-1),new P(0,1,0),new P(0,-1,0)],this._cubeUps=[new P(0,1,0),new P(0,1,0),new P(0,1,0),new P(0,1,0),new P(0,0,1),new P(0,0,-1)]}updateMatrices(t,e=0){const n=this.camera,r=this.matrix,s=t.distance||n.far;s!==n.far&&(n.far=s,n.updateProjectionMatrix()),Ei.setFromMatrixPosition(t.matrixWorld),n.position.copy(Ei),fs.copy(n.position),fs.add(this._cubeDirections[e]),n.up.copy(this._cubeUps[e]),n.lookAt(fs),n.updateMatrixWorld(),r.makeTranslation(-Ei.x,-Ei.y,-Ei.z),vo.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(vo,n.coordinateSystem,n.reversedDepth)}}class ug extends Ta{constructor(t,e,n=0,r=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=r,this.shadow=new uu}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}}class Ic extends hc{constructor(t=-1,e=1,n=1,r=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=r,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,r,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=n-t,a=n+t,o=r+e,l=r-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,a=s+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}class fu extends Dc{constructor(){super(new Ic(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class fg extends Ta{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(me.DEFAULT_UP),this.updateMatrix(),this.target=new me,this.shadow=new fu}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class du extends Ue{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}}class dg{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const e=performance.now();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}}class pg{constructor(t=1,e=0,n=0){this.radius=t,this.phi=e,this.theta=n}set(t,e,n){return this.radius=t,this.phi=e,this.theta=n,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=Gt(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,n){return this.radius=Math.sqrt(t*t+e*e+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,n),this.phi=Math.acos(Gt(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class mg extends Fn{constructor(t,e=null){super(),this.object=t,this.domElement=e,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(t){if(t===void 0){console.warn("THREE.Controls: connect() now requires an element.");return}this.domElement!==null&&this.disconnect(),this.domElement=t}disconnect(){}dispose(){}update(){}}function xo(i,t,e,n){const r=pu(n);switch(e){case Ko:return i*t;case fa:return i*t/r.components*r.byteLength;case da:return i*t/r.components*r.byteLength;case Qo:return i*t*2/r.components*r.byteLength;case pa:return i*t*2/r.components*r.byteLength;case jo:return i*t*3/r.components*r.byteLength;case ze:return i*t*4/r.components*r.byteLength;case ma:return i*t*4/r.components*r.byteLength;case Sr:case yr:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Er:case Tr:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Is:case Ns:return Math.max(i,16)*Math.max(t,8)/4;case Ds:case Us:return Math.max(i,8)*Math.max(t,8)/2;case Fs:case Os:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Bs:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case zs:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Hs:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case Vs:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case Gs:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case ks:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case Ws:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case Xs:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case qs:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case Ys:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case Js:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case Zs:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case $s:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case Ks:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case js:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case Qs:case ta:case ea:return Math.ceil(i/4)*Math.ceil(t/4)*16;case na:case ia:return Math.ceil(i/4)*Math.ceil(t/4)*8;case ra:case sa:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function pu(i){switch(i){case Ye:case Yo:return{byteLength:1,components:1};case Ci:case Jo:case zi:return{byteLength:2,components:1};case ha:case ua:return{byteLength:2,components:4};case In:case la:case Xe:return{byteLength:4,components:1};case Zo:case $o:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"180"}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="180");function Uc(){let i=null,t=!1,e=null,n=null;function r(s,a){e(s,a),n=i.requestAnimationFrame(r)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(r),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(s){e=s},setContext:function(s){i=s}}}function mu(i){const t=new WeakMap;function e(o,l){const c=o.array,h=o.usage,u=c.byteLength,d=i.createBuffer();i.bindBuffer(l,d),i.bufferData(l,c,h),o.onUploadCallback();let p;if(c instanceof Float32Array)p=i.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)p=i.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?p=i.HALF_FLOAT:p=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=i.SHORT;else if(c instanceof Uint32Array)p=i.UNSIGNED_INT;else if(c instanceof Int32Array)p=i.INT;else if(c instanceof Int8Array)p=i.BYTE;else if(c instanceof Uint8Array)p=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:u}}function n(o,l,c){const h=l.array,u=l.updateRanges;if(i.bindBuffer(c,o),u.length===0)i.bufferSubData(c,0,h);else{u.sort((p,g)=>p.start-g.start);let d=0;for(let p=1;p<u.length;p++){const g=u[d],x=u[p];x.start<=g.start+g.count+1?g.count=Math.max(g.count,x.start+x.count-g.start):(++d,u[d]=x)}u.length=d+1;for(let p=0,g=u.length;p<g;p++){const x=u[p];i.bufferSubData(c,x.start*h.BYTES_PER_ELEMENT,h,x.start,x.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=t.get(o);l&&(i.deleteBuffer(l.buffer),t.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const h=t.get(o);(!h||h.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=t.get(o);if(c===void 0)t.set(o,e(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:r,remove:s,update:a}}var gu=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,_u=`#ifdef USE_ALPHAHASH
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
#endif`,vu=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,xu=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Mu=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Su=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,yu=`#ifdef USE_AOMAP
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
#endif`,Eu=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Tu=`#ifdef USE_BATCHING
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
#endif`,Au=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,bu=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,wu=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Ru=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Cu=`#ifdef USE_IRIDESCENCE
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
#endif`,Pu=`#ifdef USE_BUMPMAP
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
#endif`,Lu=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Du=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Iu=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Uu=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Nu=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Fu=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Ou=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Bu=`#if defined( USE_COLOR_ALPHA )
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
#endif`,zu=`#define PI 3.141592653589793
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
} // validated`,Hu=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Vu=`vec3 transformedNormal = objectNormal;
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
#endif`,Gu=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,ku=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Wu=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Xu=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,qu="gl_FragColor = linearToOutputTexel( gl_FragColor );",Yu=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Ju=`#ifdef USE_ENVMAP
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
#endif`,Zu=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,$u=`#ifdef USE_ENVMAP
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
#endif`,Ku=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,ju=`#ifdef USE_ENVMAP
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
#endif`,Qu=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,tf=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,ef=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,nf=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,rf=`#ifdef USE_GRADIENTMAP
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
}`,sf=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,af=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,of=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,cf=`uniform bool receiveShadow;
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
#endif`,lf=`#ifdef USE_ENVMAP
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
#endif`,hf=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,uf=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,ff=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,df=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,pf=`PhysicalMaterial material;
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
#endif`,mf=`struct PhysicalMaterial {
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
}`,gf=`
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
#endif`,_f=`#if defined( RE_IndirectDiffuse )
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
#endif`,vf=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,xf=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Mf=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Sf=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,yf=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Ef=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Tf=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Af=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,bf=`#if defined( USE_POINTS_UV )
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
#endif`,wf=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Rf=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Cf=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Pf=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Lf=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Df=`#ifdef USE_MORPHTARGETS
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
#endif`,If=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Uf=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Nf=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Ff=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Of=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Bf=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,zf=`#ifdef USE_NORMALMAP
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
#endif`,Hf=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Vf=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Gf=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,kf=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Wf=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Xf=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,qf=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Yf=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Jf=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Zf=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,$f=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Kf=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,jf=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Qf=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,td=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,ed=`float getShadowMask() {
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
}`,nd=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,id=`#ifdef USE_SKINNING
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
#endif`,rd=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,sd=`#ifdef USE_SKINNING
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
#endif`,ad=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,od=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,cd=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,ld=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,hd=`#ifdef USE_TRANSMISSION
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
#endif`,ud=`#ifdef USE_TRANSMISSION
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
#endif`,fd=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,dd=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,pd=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,md=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const gd=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,_d=`uniform sampler2D t2D;
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
}`,vd=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,xd=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Md=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Sd=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,yd=`#include <common>
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
}`,Ed=`#if DEPTH_PACKING == 3200
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
}`,Td=`#define DISTANCE
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
}`,Ad=`#define DISTANCE
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
}`,bd=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,wd=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Rd=`uniform float scale;
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
}`,Cd=`uniform vec3 diffuse;
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
}`,Pd=`#include <common>
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
}`,Ld=`uniform vec3 diffuse;
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
}`,Dd=`#define LAMBERT
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
}`,Id=`#define LAMBERT
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
}`,Ud=`#define MATCAP
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
}`,Nd=`#define MATCAP
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
}`,Fd=`#define NORMAL
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
}`,Od=`#define NORMAL
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
}`,Bd=`#define PHONG
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
}`,zd=`#define PHONG
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
}`,Hd=`#define STANDARD
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
}`,Vd=`#define STANDARD
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
}`,Gd=`#define TOON
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
}`,kd=`#define TOON
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
}`,Wd=`uniform float size;
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
}`,Xd=`uniform vec3 diffuse;
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
}`,qd=`#include <common>
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
}`,Yd=`uniform vec3 color;
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
}`,Jd=`uniform float rotation;
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
}`,Zd=`uniform vec3 diffuse;
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
}`,Vt={alphahash_fragment:gu,alphahash_pars_fragment:_u,alphamap_fragment:vu,alphamap_pars_fragment:xu,alphatest_fragment:Mu,alphatest_pars_fragment:Su,aomap_fragment:yu,aomap_pars_fragment:Eu,batching_pars_vertex:Tu,batching_vertex:Au,begin_vertex:bu,beginnormal_vertex:wu,bsdfs:Ru,iridescence_fragment:Cu,bumpmap_pars_fragment:Pu,clipping_planes_fragment:Lu,clipping_planes_pars_fragment:Du,clipping_planes_pars_vertex:Iu,clipping_planes_vertex:Uu,color_fragment:Nu,color_pars_fragment:Fu,color_pars_vertex:Ou,color_vertex:Bu,common:zu,cube_uv_reflection_fragment:Hu,defaultnormal_vertex:Vu,displacementmap_pars_vertex:Gu,displacementmap_vertex:ku,emissivemap_fragment:Wu,emissivemap_pars_fragment:Xu,colorspace_fragment:qu,colorspace_pars_fragment:Yu,envmap_fragment:Ju,envmap_common_pars_fragment:Zu,envmap_pars_fragment:$u,envmap_pars_vertex:Ku,envmap_physical_pars_fragment:lf,envmap_vertex:ju,fog_vertex:Qu,fog_pars_vertex:tf,fog_fragment:ef,fog_pars_fragment:nf,gradientmap_pars_fragment:rf,lightmap_pars_fragment:sf,lights_lambert_fragment:af,lights_lambert_pars_fragment:of,lights_pars_begin:cf,lights_toon_fragment:hf,lights_toon_pars_fragment:uf,lights_phong_fragment:ff,lights_phong_pars_fragment:df,lights_physical_fragment:pf,lights_physical_pars_fragment:mf,lights_fragment_begin:gf,lights_fragment_maps:_f,lights_fragment_end:vf,logdepthbuf_fragment:xf,logdepthbuf_pars_fragment:Mf,logdepthbuf_pars_vertex:Sf,logdepthbuf_vertex:yf,map_fragment:Ef,map_pars_fragment:Tf,map_particle_fragment:Af,map_particle_pars_fragment:bf,metalnessmap_fragment:wf,metalnessmap_pars_fragment:Rf,morphinstance_vertex:Cf,morphcolor_vertex:Pf,morphnormal_vertex:Lf,morphtarget_pars_vertex:Df,morphtarget_vertex:If,normal_fragment_begin:Uf,normal_fragment_maps:Nf,normal_pars_fragment:Ff,normal_pars_vertex:Of,normal_vertex:Bf,normalmap_pars_fragment:zf,clearcoat_normal_fragment_begin:Hf,clearcoat_normal_fragment_maps:Vf,clearcoat_pars_fragment:Gf,iridescence_pars_fragment:kf,opaque_fragment:Wf,packing:Xf,premultiplied_alpha_fragment:qf,project_vertex:Yf,dithering_fragment:Jf,dithering_pars_fragment:Zf,roughnessmap_fragment:$f,roughnessmap_pars_fragment:Kf,shadowmap_pars_fragment:jf,shadowmap_pars_vertex:Qf,shadowmap_vertex:td,shadowmask_pars_fragment:ed,skinbase_vertex:nd,skinning_pars_vertex:id,skinning_vertex:rd,skinnormal_vertex:sd,specularmap_fragment:ad,specularmap_pars_fragment:od,tonemapping_fragment:cd,tonemapping_pars_fragment:ld,transmission_fragment:hd,transmission_pars_fragment:ud,uv_pars_fragment:fd,uv_pars_vertex:dd,uv_vertex:pd,worldpos_vertex:md,background_vert:gd,background_frag:_d,backgroundCube_vert:vd,backgroundCube_frag:xd,cube_vert:Md,cube_frag:Sd,depth_vert:yd,depth_frag:Ed,distanceRGBA_vert:Td,distanceRGBA_frag:Ad,equirect_vert:bd,equirect_frag:wd,linedashed_vert:Rd,linedashed_frag:Cd,meshbasic_vert:Pd,meshbasic_frag:Ld,meshlambert_vert:Dd,meshlambert_frag:Id,meshmatcap_vert:Ud,meshmatcap_frag:Nd,meshnormal_vert:Fd,meshnormal_frag:Od,meshphong_vert:Bd,meshphong_frag:zd,meshphysical_vert:Hd,meshphysical_frag:Vd,meshtoon_vert:Gd,meshtoon_frag:kd,points_vert:Wd,points_frag:Xd,shadow_vert:qd,shadow_frag:Yd,sprite_vert:Jd,sprite_frag:Zd},dt={common:{diffuse:{value:new Xt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ht},alphaMap:{value:null},alphaMapTransform:{value:new Ht},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ht}},envmap:{envMap:{value:null},envMapRotation:{value:new Ht},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ht}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ht}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ht},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ht},normalScale:{value:new ct(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ht},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ht}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ht}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ht}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Xt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Xt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ht},alphaTest:{value:0},uvTransform:{value:new Ht}},sprite:{diffuse:{value:new Xt(16777215)},opacity:{value:1},center:{value:new ct(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ht},alphaMap:{value:null},alphaMapTransform:{value:new Ht},alphaTest:{value:0}}},ke={basic:{uniforms:ye([dt.common,dt.specularmap,dt.envmap,dt.aomap,dt.lightmap,dt.fog]),vertexShader:Vt.meshbasic_vert,fragmentShader:Vt.meshbasic_frag},lambert:{uniforms:ye([dt.common,dt.specularmap,dt.envmap,dt.aomap,dt.lightmap,dt.emissivemap,dt.bumpmap,dt.normalmap,dt.displacementmap,dt.fog,dt.lights,{emissive:{value:new Xt(0)}}]),vertexShader:Vt.meshlambert_vert,fragmentShader:Vt.meshlambert_frag},phong:{uniforms:ye([dt.common,dt.specularmap,dt.envmap,dt.aomap,dt.lightmap,dt.emissivemap,dt.bumpmap,dt.normalmap,dt.displacementmap,dt.fog,dt.lights,{emissive:{value:new Xt(0)},specular:{value:new Xt(1118481)},shininess:{value:30}}]),vertexShader:Vt.meshphong_vert,fragmentShader:Vt.meshphong_frag},standard:{uniforms:ye([dt.common,dt.envmap,dt.aomap,dt.lightmap,dt.emissivemap,dt.bumpmap,dt.normalmap,dt.displacementmap,dt.roughnessmap,dt.metalnessmap,dt.fog,dt.lights,{emissive:{value:new Xt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Vt.meshphysical_vert,fragmentShader:Vt.meshphysical_frag},toon:{uniforms:ye([dt.common,dt.aomap,dt.lightmap,dt.emissivemap,dt.bumpmap,dt.normalmap,dt.displacementmap,dt.gradientmap,dt.fog,dt.lights,{emissive:{value:new Xt(0)}}]),vertexShader:Vt.meshtoon_vert,fragmentShader:Vt.meshtoon_frag},matcap:{uniforms:ye([dt.common,dt.bumpmap,dt.normalmap,dt.displacementmap,dt.fog,{matcap:{value:null}}]),vertexShader:Vt.meshmatcap_vert,fragmentShader:Vt.meshmatcap_frag},points:{uniforms:ye([dt.points,dt.fog]),vertexShader:Vt.points_vert,fragmentShader:Vt.points_frag},dashed:{uniforms:ye([dt.common,dt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Vt.linedashed_vert,fragmentShader:Vt.linedashed_frag},depth:{uniforms:ye([dt.common,dt.displacementmap]),vertexShader:Vt.depth_vert,fragmentShader:Vt.depth_frag},normal:{uniforms:ye([dt.common,dt.bumpmap,dt.normalmap,dt.displacementmap,{opacity:{value:1}}]),vertexShader:Vt.meshnormal_vert,fragmentShader:Vt.meshnormal_frag},sprite:{uniforms:ye([dt.sprite,dt.fog]),vertexShader:Vt.sprite_vert,fragmentShader:Vt.sprite_frag},background:{uniforms:{uvTransform:{value:new Ht},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Vt.background_vert,fragmentShader:Vt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ht}},vertexShader:Vt.backgroundCube_vert,fragmentShader:Vt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Vt.cube_vert,fragmentShader:Vt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Vt.equirect_vert,fragmentShader:Vt.equirect_frag},distanceRGBA:{uniforms:ye([dt.common,dt.displacementmap,{referencePosition:{value:new P},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Vt.distanceRGBA_vert,fragmentShader:Vt.distanceRGBA_frag},shadow:{uniforms:ye([dt.lights,dt.fog,{color:{value:new Xt(0)},opacity:{value:1}}]),vertexShader:Vt.shadow_vert,fragmentShader:Vt.shadow_frag}};ke.physical={uniforms:ye([ke.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ht},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ht},clearcoatNormalScale:{value:new ct(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ht},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ht},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ht},sheen:{value:0},sheenColor:{value:new Xt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ht},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ht},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ht},transmissionSamplerSize:{value:new ct},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ht},attenuationDistance:{value:0},attenuationColor:{value:new Xt(0)},specularColor:{value:new Xt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ht},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ht},anisotropyVector:{value:new ct},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ht}}]),vertexShader:Vt.meshphysical_vert,fragmentShader:Vt.meshphysical_frag};const vr={r:0,b:0,g:0},An=new Je,$d=new ie;function Kd(i,t,e,n,r,s,a){const o=new Xt(0);let l=s===!0?0:1,c,h,u=null,d=0,p=null;function g(y){let v=y.isScene===!0?y.background:null;return v&&v.isTexture&&(v=(y.backgroundBlurriness>0?e:t).get(v)),v}function x(y){let v=!1;const R=g(y);R===null?f(o,l):R&&R.isColor&&(f(R,1),v=!0);const b=i.xr.getEnvironmentBlendMode();b==="additive"?n.buffers.color.setClear(0,0,0,1,a):b==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(i.autoClear||v)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function m(y,v){const R=g(v);R&&(R.isCubeTexture||R.mapping===Lr)?(h===void 0&&(h=new He(new Vi(1,1,1),new on({name:"BackgroundCubeMaterial",uniforms:ui(ke.backgroundCube.uniforms),vertexShader:ke.backgroundCube.vertexShader,fragmentShader:ke.backgroundCube.fragmentShader,side:Te,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(b,C,D){this.matrixWorld.copyPosition(D.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(h)),An.copy(v.backgroundRotation),An.x*=-1,An.y*=-1,An.z*=-1,R.isCubeTexture&&R.isRenderTargetTexture===!1&&(An.y*=-1,An.z*=-1),h.material.uniforms.envMap.value=R,h.material.uniforms.flipEnvMap.value=R.isCubeTexture&&R.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=v.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4($d.makeRotationFromEuler(An)),h.material.toneMapped=$t.getTransfer(R.colorSpace)!==te,(u!==R||d!==R.version||p!==i.toneMapping)&&(h.material.needsUpdate=!0,u=R,d=R.version,p=i.toneMapping),h.layers.enableAll(),y.unshift(h,h.geometry,h.material,0,0,null)):R&&R.isTexture&&(c===void 0&&(c=new He(new Dr(2,2),new on({name:"BackgroundMaterial",uniforms:ui(ke.background.uniforms),vertexShader:ke.background.vertexShader,fragmentShader:ke.background.fragmentShader,side:_n,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=R,c.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,c.material.toneMapped=$t.getTransfer(R.colorSpace)!==te,R.matrixAutoUpdate===!0&&R.updateMatrix(),c.material.uniforms.uvTransform.value.copy(R.matrix),(u!==R||d!==R.version||p!==i.toneMapping)&&(c.material.needsUpdate=!0,u=R,d=R.version,p=i.toneMapping),c.layers.enableAll(),y.unshift(c,c.geometry,c.material,0,0,null))}function f(y,v){y.getRGB(vr,lc(i)),n.buffers.color.setClear(vr.r,vr.g,vr.b,v,a)}function T(){h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return o},setClearColor:function(y,v=1){o.set(y),l=v,f(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(y){l=y,f(o,l)},render:x,addToRenderList:m,dispose:T}}function jd(i,t){const e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},r=d(null);let s=r,a=!1;function o(M,L,O,H,W){let q=!1;const k=u(H,O,L);s!==k&&(s=k,c(s.object)),q=p(M,H,O,W),q&&g(M,H,O,W),W!==null&&t.update(W,i.ELEMENT_ARRAY_BUFFER),(q||a)&&(a=!1,v(M,L,O,H),W!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(W).buffer))}function l(){return i.createVertexArray()}function c(M){return i.bindVertexArray(M)}function h(M){return i.deleteVertexArray(M)}function u(M,L,O){const H=O.wireframe===!0;let W=n[M.id];W===void 0&&(W={},n[M.id]=W);let q=W[L.id];q===void 0&&(q={},W[L.id]=q);let k=q[H];return k===void 0&&(k=d(l()),q[H]=k),k}function d(M){const L=[],O=[],H=[];for(let W=0;W<e;W++)L[W]=0,O[W]=0,H[W]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:L,enabledAttributes:O,attributeDivisors:H,object:M,attributes:{},index:null}}function p(M,L,O,H){const W=s.attributes,q=L.attributes;let k=0;const et=O.getAttributes();for(const G in et)if(et[G].location>=0){const _t=W[G];let Mt=q[G];if(Mt===void 0&&(G==="instanceMatrix"&&M.instanceMatrix&&(Mt=M.instanceMatrix),G==="instanceColor"&&M.instanceColor&&(Mt=M.instanceColor)),_t===void 0||_t.attribute!==Mt||Mt&&_t.data!==Mt.data)return!0;k++}return s.attributesNum!==k||s.index!==H}function g(M,L,O,H){const W={},q=L.attributes;let k=0;const et=O.getAttributes();for(const G in et)if(et[G].location>=0){let _t=q[G];_t===void 0&&(G==="instanceMatrix"&&M.instanceMatrix&&(_t=M.instanceMatrix),G==="instanceColor"&&M.instanceColor&&(_t=M.instanceColor));const Mt={};Mt.attribute=_t,_t&&_t.data&&(Mt.data=_t.data),W[G]=Mt,k++}s.attributes=W,s.attributesNum=k,s.index=H}function x(){const M=s.newAttributes;for(let L=0,O=M.length;L<O;L++)M[L]=0}function m(M){f(M,0)}function f(M,L){const O=s.newAttributes,H=s.enabledAttributes,W=s.attributeDivisors;O[M]=1,H[M]===0&&(i.enableVertexAttribArray(M),H[M]=1),W[M]!==L&&(i.vertexAttribDivisor(M,L),W[M]=L)}function T(){const M=s.newAttributes,L=s.enabledAttributes;for(let O=0,H=L.length;O<H;O++)L[O]!==M[O]&&(i.disableVertexAttribArray(O),L[O]=0)}function y(M,L,O,H,W,q,k){k===!0?i.vertexAttribIPointer(M,L,O,W,q):i.vertexAttribPointer(M,L,O,H,W,q)}function v(M,L,O,H){x();const W=H.attributes,q=O.getAttributes(),k=L.defaultAttributeValues;for(const et in q){const G=q[et];if(G.location>=0){let ut=W[et];if(ut===void 0&&(et==="instanceMatrix"&&M.instanceMatrix&&(ut=M.instanceMatrix),et==="instanceColor"&&M.instanceColor&&(ut=M.instanceColor)),ut!==void 0){const _t=ut.normalized,Mt=ut.itemSize,Bt=t.get(ut);if(Bt===void 0)continue;const qt=Bt.buffer,jt=Bt.type,Yt=Bt.bytesPerElement,Y=jt===i.INT||jt===i.UNSIGNED_INT||ut.gpuType===la;if(ut.isInterleavedBufferAttribute){const tt=ut.data,xt=tt.stride,Ct=ut.offset;if(tt.isInstancedInterleavedBuffer){for(let Et=0;Et<G.locationSize;Et++)f(G.location+Et,tt.meshPerAttribute);M.isInstancedMesh!==!0&&H._maxInstanceCount===void 0&&(H._maxInstanceCount=tt.meshPerAttribute*tt.count)}else for(let Et=0;Et<G.locationSize;Et++)m(G.location+Et);i.bindBuffer(i.ARRAY_BUFFER,qt);for(let Et=0;Et<G.locationSize;Et++)y(G.location+Et,Mt/G.locationSize,jt,_t,xt*Yt,(Ct+Mt/G.locationSize*Et)*Yt,Y)}else{if(ut.isInstancedBufferAttribute){for(let tt=0;tt<G.locationSize;tt++)f(G.location+tt,ut.meshPerAttribute);M.isInstancedMesh!==!0&&H._maxInstanceCount===void 0&&(H._maxInstanceCount=ut.meshPerAttribute*ut.count)}else for(let tt=0;tt<G.locationSize;tt++)m(G.location+tt);i.bindBuffer(i.ARRAY_BUFFER,qt);for(let tt=0;tt<G.locationSize;tt++)y(G.location+tt,Mt/G.locationSize,jt,_t,Mt*Yt,Mt/G.locationSize*tt*Yt,Y)}}else if(k!==void 0){const _t=k[et];if(_t!==void 0)switch(_t.length){case 2:i.vertexAttrib2fv(G.location,_t);break;case 3:i.vertexAttrib3fv(G.location,_t);break;case 4:i.vertexAttrib4fv(G.location,_t);break;default:i.vertexAttrib1fv(G.location,_t)}}}}T()}function R(){D();for(const M in n){const L=n[M];for(const O in L){const H=L[O];for(const W in H)h(H[W].object),delete H[W];delete L[O]}delete n[M]}}function b(M){if(n[M.id]===void 0)return;const L=n[M.id];for(const O in L){const H=L[O];for(const W in H)h(H[W].object),delete H[W];delete L[O]}delete n[M.id]}function C(M){for(const L in n){const O=n[L];if(O[M.id]===void 0)continue;const H=O[M.id];for(const W in H)h(H[W].object),delete H[W];delete O[M.id]}}function D(){E(),a=!0,s!==r&&(s=r,c(s.object))}function E(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:o,reset:D,resetDefaultState:E,dispose:R,releaseStatesOfGeometry:b,releaseStatesOfProgram:C,initAttributes:x,enableAttribute:m,disableUnusedAttributes:T}}function Qd(i,t,e){let n;function r(c){n=c}function s(c,h){i.drawArrays(n,c,h),e.update(h,n,1)}function a(c,h,u){u!==0&&(i.drawArraysInstanced(n,c,h,u),e.update(h,n,u))}function o(c,h,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,h,0,u);let p=0;for(let g=0;g<u;g++)p+=h[g];e.update(p,n,1)}function l(c,h,u,d){if(u===0)return;const p=t.get("WEBGL_multi_draw");if(p===null)for(let g=0;g<c.length;g++)a(c[g],h[g],d[g]);else{p.multiDrawArraysInstancedWEBGL(n,c,0,h,0,d,0,u);let g=0;for(let x=0;x<u;x++)g+=h[x]*d[x];e.update(g,n,1)}}this.setMode=r,this.render=s,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function tp(i,t,e,n){let r;function s(){if(r!==void 0)return r;if(t.has("EXT_texture_filter_anisotropic")===!0){const C=t.get("EXT_texture_filter_anisotropic");r=i.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function a(C){return!(C!==ze&&n.convert(C)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(C){const D=C===zi&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(C!==Ye&&n.convert(C)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&C!==Xe&&!D)}function l(C){if(C==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";C="mediump"}return C==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp";const h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);const u=e.logarithmicDepthBuffer===!0,d=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),p=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),f=i.getParameter(i.MAX_VERTEX_ATTRIBS),T=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),y=i.getParameter(i.MAX_VARYING_VECTORS),v=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),R=g>0,b=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:u,reversedDepthBuffer:d,maxTextures:p,maxVertexTextures:g,maxTextureSize:x,maxCubemapSize:m,maxAttributes:f,maxVertexUniforms:T,maxVaryings:y,maxFragmentUniforms:v,vertexTextures:R,maxSamples:b}}function ep(i){const t=this;let e=null,n=0,r=!1,s=!1;const a=new wn,o=new Ht,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){const p=u.length!==0||d||n!==0||r;return r=d,n=u.length,p},this.beginShadows=function(){s=!0,h(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(u,d){e=h(u,d,0)},this.setState=function(u,d,p){const g=u.clippingPlanes,x=u.clipIntersection,m=u.clipShadows,f=i.get(u);if(!r||g===null||g.length===0||s&&!m)s?h(null):c();else{const T=s?0:n,y=T*4;let v=f.clippingState||null;l.value=v,v=h(g,d,y,p);for(let R=0;R!==y;++R)v[R]=e[R];f.clippingState=v,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=T}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(u,d,p,g){const x=u!==null?u.length:0;let m=null;if(x!==0){if(m=l.value,g!==!0||m===null){const f=p+x*4,T=d.matrixWorldInverse;o.getNormalMatrix(T),(m===null||m.length<f)&&(m=new Float32Array(f));for(let y=0,v=p;y!==x;++y,v+=4)a.copy(u[y]).applyMatrix4(T,o),a.normal.toArray(m,v),m[v+3]=a.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=x,t.numIntersection=0,m}}function np(i){let t=new WeakMap;function e(a,o){return o===Rs?a.mapping=ci:o===Cs&&(a.mapping=li),a}function n(a){if(a&&a.isTexture){const o=a.mapping;if(o===Rs||o===Cs)if(t.has(a)){const l=t.get(a).texture;return e(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const c=new vh(l.height);return c.fromEquirectangularTexture(i,a),t.set(a,c),a.addEventListener("dispose",r),e(c.texture,a.mapping)}else return null}}return a}function r(a){const o=a.target;o.removeEventListener("dispose",r);const l=t.get(o);l!==void 0&&(t.delete(o),l.dispose())}function s(){t=new WeakMap}return{get:n,dispose:s}}const ii=4,Mo=[.125,.215,.35,.446,.526,.582],Pn=20,ds=new Ic,So=new Xt;let ps=null,ms=0,gs=0,_s=!1;const Rn=(1+Math.sqrt(5))/2,ei=1/Rn,yo=[new P(-Rn,ei,0),new P(Rn,ei,0),new P(-ei,0,Rn),new P(ei,0,Rn),new P(0,Rn,-ei),new P(0,Rn,ei),new P(-1,1,-1),new P(1,1,-1),new P(-1,1,1),new P(1,1,1)],ip=new P;class Eo{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,r=100,s={}){const{size:a=256,position:o=ip}=s;ps=this._renderer.getRenderTarget(),ms=this._renderer.getActiveCubeFace(),gs=this._renderer.getActiveMipmapLevel(),_s=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(t,n,r,l,o),e>0&&this._blur(l,0,0,e),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=bo(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Ao(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(ps,ms,gs),this._renderer.xr.enabled=_s,t.scissorTest=!1,xr(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===ci||t.mapping===li?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),ps=this._renderer.getRenderTarget(),ms=this._renderer.getActiveCubeFace(),gs=this._renderer.getActiveMipmapLevel(),_s=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:We,minFilter:We,generateMipmaps:!1,type:zi,format:ze,colorSpace:hi,depthBuffer:!1},r=To(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=To(t,e,n);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=rp(s)),this._blurMaterial=sp(s,t,e)}return r}_compileMaterial(t){const e=new He(this._lodPlanes[0],t);this._renderer.compile(e,ds)}_sceneToCubeUV(t,e,n,r,s){const l=new Ue(90,1,e,n),c=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],u=this._renderer,d=u.autoClear,p=u.toneMapping;u.getClearColor(So),u.toneMapping=gn,u.autoClear=!1,u.state.buffers.depth.getReversed()&&(u.setRenderTarget(r),u.clearDepth(),u.setRenderTarget(null));const x=new ac({name:"PMREM.Background",side:Te,depthWrite:!1,depthTest:!1}),m=new He(new Vi,x);let f=!1;const T=t.background;T?T.isColor&&(x.color.copy(T),t.background=null,f=!0):(x.color.copy(So),f=!0);for(let y=0;y<6;y++){const v=y%3;v===0?(l.up.set(0,c[y],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x+h[y],s.y,s.z)):v===1?(l.up.set(0,0,c[y]),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y+h[y],s.z)):(l.up.set(0,c[y],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y,s.z+h[y]));const R=this._cubeSize;xr(r,v*R,y>2?R:0,R,R),u.setRenderTarget(r),f&&u.render(m,l),u.render(t,l)}m.geometry.dispose(),m.material.dispose(),u.toneMapping=p,u.autoClear=d,t.background=T}_textureToCubeUV(t,e){const n=this._renderer,r=t.mapping===ci||t.mapping===li;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=bo()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Ao());const s=r?this._cubemapMaterial:this._equirectMaterial,a=new He(this._lodPlanes[0],s),o=s.uniforms;o.envMap.value=t;const l=this._cubeSize;xr(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(a,ds)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const r=this._lodPlanes.length;for(let s=1;s<r;s++){const a=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),o=yo[(r-s-1)%yo.length];this._blur(t,s-1,s,a,o)}e.autoClear=n}_blur(t,e,n,r,s){const a=this._pingPongRenderTarget;this._halfBlur(t,a,e,n,r,"latitudinal",s),this._halfBlur(a,t,n,n,r,"longitudinal",s)}_halfBlur(t,e,n,r,s,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,u=new He(this._lodPlanes[r],c),d=c.uniforms,p=this._sizeLods[n]-1,g=isFinite(s)?Math.PI/(2*p):2*Math.PI/(2*Pn-1),x=s/g,m=isFinite(s)?1+Math.floor(h*x):Pn;m>Pn&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Pn}`);const f=[];let T=0;for(let C=0;C<Pn;++C){const D=C/x,E=Math.exp(-D*D/2);f.push(E),C===0?T+=E:C<m&&(T+=2*E)}for(let C=0;C<f.length;C++)f[C]=f[C]/T;d.envMap.value=t.texture,d.samples.value=m,d.weights.value=f,d.latitudinal.value=a==="latitudinal",o&&(d.poleAxis.value=o);const{_lodMax:y}=this;d.dTheta.value=g,d.mipInt.value=y-n;const v=this._sizeLods[r],R=3*v*(r>y-ii?r-y+ii:0),b=4*(this._cubeSize-v);xr(e,R,b,3*v,2*v),l.setRenderTarget(e),l.render(u,ds)}}function rp(i){const t=[],e=[],n=[];let r=i;const s=i-ii+1+Mo.length;for(let a=0;a<s;a++){const o=Math.pow(2,r);e.push(o);let l=1/o;a>i-ii?l=Mo[a-i+ii-1]:a===0&&(l=0),n.push(l);const c=1/(o-2),h=-c,u=1+c,d=[h,h,u,h,u,u,h,h,u,u,h,u],p=6,g=6,x=3,m=2,f=1,T=new Float32Array(x*g*p),y=new Float32Array(m*g*p),v=new Float32Array(f*g*p);for(let b=0;b<p;b++){const C=b%3*2/3-1,D=b>2?0:-1,E=[C,D,0,C+2/3,D,0,C+2/3,D+1,0,C,D,0,C+2/3,D+1,0,C,D+1,0];T.set(E,x*g*b),y.set(d,m*g*b);const M=[b,b,b,b,b,b];v.set(M,f*g*b)}const R=new _e;R.setAttribute("position",new Ve(T,x)),R.setAttribute("uv",new Ve(y,m)),R.setAttribute("faceIndex",new Ve(v,f)),t.push(R),r>ii&&r--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function To(i,t,e){const n=new Un(i,t,e);return n.texture.mapping=Lr,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function xr(i,t,e,n,r){i.viewport.set(t,e,n,r),i.scissor.set(t,e,n,r)}function sp(i,t,e){const n=new Float32Array(Pn),r=new P(0,1,0);return new on({name:"SphericalGaussianBlur",defines:{n:Pn,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Aa(),fragmentShader:`

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
		`,blending:mn,depthTest:!1,depthWrite:!1})}function Ao(){return new on({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Aa(),fragmentShader:`

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
		`,blending:mn,depthTest:!1,depthWrite:!1})}function bo(){return new on({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Aa(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:mn,depthTest:!1,depthWrite:!1})}function Aa(){return`

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
	`}function ap(i){let t=new WeakMap,e=null;function n(o){if(o&&o.isTexture){const l=o.mapping,c=l===Rs||l===Cs,h=l===ci||l===li;if(c||h){let u=t.get(o);const d=u!==void 0?u.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==d)return e===null&&(e=new Eo(i)),u=c?e.fromEquirectangular(o,u):e.fromCubemap(o,u),u.texture.pmremVersion=o.pmremVersion,t.set(o,u),u.texture;if(u!==void 0)return u.texture;{const p=o.image;return c&&p&&p.height>0||h&&p&&r(p)?(e===null&&(e=new Eo(i)),u=c?e.fromEquirectangular(o):e.fromCubemap(o),u.texture.pmremVersion=o.pmremVersion,t.set(o,u),o.addEventListener("dispose",s),u.texture):null}}}return o}function r(o){let l=0;const c=6;for(let h=0;h<c;h++)o[h]!==void 0&&l++;return l===c}function s(o){const l=o.target;l.removeEventListener("dispose",s);const c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function a(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:a}}function op(i){const t={};function e(n){if(t[n]!==void 0)return t[n];let r;switch(n){case"WEBGL_depth_texture":r=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=i.getExtension(n)}return t[n]=r,r}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const r=e(n);return r===null&&Ni("THREE.WebGLRenderer: "+n+" extension not supported."),r}}}function cp(i,t,e,n){const r={},s=new WeakMap;function a(u){const d=u.target;d.index!==null&&t.remove(d.index);for(const g in d.attributes)t.remove(d.attributes[g]);d.removeEventListener("dispose",a),delete r[d.id];const p=s.get(d);p&&(t.remove(p),s.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,e.memory.geometries--}function o(u,d){return r[d.id]===!0||(d.addEventListener("dispose",a),r[d.id]=!0,e.memory.geometries++),d}function l(u){const d=u.attributes;for(const p in d)t.update(d[p],i.ARRAY_BUFFER)}function c(u){const d=[],p=u.index,g=u.attributes.position;let x=0;if(p!==null){const T=p.array;x=p.version;for(let y=0,v=T.length;y<v;y+=3){const R=T[y+0],b=T[y+1],C=T[y+2];d.push(R,b,b,C,C,R)}}else if(g!==void 0){const T=g.array;x=g.version;for(let y=0,v=T.length/3-1;y<v;y+=3){const R=y+0,b=y+1,C=y+2;d.push(R,b,b,C,C,R)}}else return;const m=new(ec(d)?cc:oc)(d,1);m.version=x;const f=s.get(u);f&&t.remove(f),s.set(u,m)}function h(u){const d=s.get(u);if(d){const p=u.index;p!==null&&d.version<p.version&&c(u)}else c(u);return s.get(u)}return{get:o,update:l,getWireframeAttribute:h}}function lp(i,t,e){let n;function r(d){n=d}let s,a;function o(d){s=d.type,a=d.bytesPerElement}function l(d,p){i.drawElements(n,p,s,d*a),e.update(p,n,1)}function c(d,p,g){g!==0&&(i.drawElementsInstanced(n,p,s,d*a,g),e.update(p,n,g))}function h(d,p,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,p,0,s,d,0,g);let m=0;for(let f=0;f<g;f++)m+=p[f];e.update(m,n,1)}function u(d,p,g,x){if(g===0)return;const m=t.get("WEBGL_multi_draw");if(m===null)for(let f=0;f<d.length;f++)c(d[f]/a,p[f],x[f]);else{m.multiDrawElementsInstancedWEBGL(n,p,0,s,d,0,x,0,g);let f=0;for(let T=0;T<g;T++)f+=p[T]*x[T];e.update(f,n,1)}}this.setMode=r,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function hp(i){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,a,o){switch(e.calls++,a){case i.TRIANGLES:e.triangles+=o*(s/3);break;case i.LINES:e.lines+=o*(s/2);break;case i.LINE_STRIP:e.lines+=o*(s-1);break;case i.LINE_LOOP:e.lines+=o*s;break;case i.POINTS:e.points+=o*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function r(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:r,update:n}}function up(i,t,e){const n=new WeakMap,r=new ee;function s(a,o,l){const c=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=h!==void 0?h.length:0;let d=n.get(o);if(d===void 0||d.count!==u){let E=function(){C.dispose(),n.delete(o),o.removeEventListener("dispose",E)};d!==void 0&&d.texture.dispose();const p=o.morphAttributes.position!==void 0,g=o.morphAttributes.normal!==void 0,x=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],f=o.morphAttributes.normal||[],T=o.morphAttributes.color||[];let y=0;p===!0&&(y=1),g===!0&&(y=2),x===!0&&(y=3);let v=o.attributes.position.count*y,R=1;v>t.maxTextureSize&&(R=Math.ceil(v/t.maxTextureSize),v=t.maxTextureSize);const b=new Float32Array(v*R*4*u),C=new nc(b,v,R,u);C.type=Xe,C.needsUpdate=!0;const D=y*4;for(let M=0;M<u;M++){const L=m[M],O=f[M],H=T[M],W=v*R*4*M;for(let q=0;q<L.count;q++){const k=q*D;p===!0&&(r.fromBufferAttribute(L,q),b[W+k+0]=r.x,b[W+k+1]=r.y,b[W+k+2]=r.z,b[W+k+3]=0),g===!0&&(r.fromBufferAttribute(O,q),b[W+k+4]=r.x,b[W+k+5]=r.y,b[W+k+6]=r.z,b[W+k+7]=0),x===!0&&(r.fromBufferAttribute(H,q),b[W+k+8]=r.x,b[W+k+9]=r.y,b[W+k+10]=r.z,b[W+k+11]=H.itemSize===4?r.w:1)}}d={count:u,texture:C,size:new ct(v,R)},n.set(o,d),o.addEventListener("dispose",E)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",a.morphTexture,e);else{let p=0;for(let x=0;x<c.length;x++)p+=c[x];const g=o.morphTargetsRelative?1:1-p;l.getUniforms().setValue(i,"morphTargetBaseInfluence",g),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",d.texture,e),l.getUniforms().setValue(i,"morphTargetsTextureSize",d.size)}return{update:s}}function fp(i,t,e,n){let r=new WeakMap;function s(l){const c=n.render.frame,h=l.geometry,u=t.get(l,h);if(r.get(u)!==c&&(t.update(u),r.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),r.get(l)!==c&&(e.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,i.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){const d=l.skeleton;r.get(d)!==c&&(d.update(),r.set(d,c))}return u}function a(){r=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:s,dispose:a}}const Nc=new ge,wo=new fc(1,1),Fc=new nc,Oc=new eh,Bc=new uc,Ro=[],Co=[],Po=new Float32Array(16),Lo=new Float32Array(9),Do=new Float32Array(4);function pi(i,t,e){const n=i[0];if(n<=0||n>0)return i;const r=t*e;let s=Ro[r];if(s===void 0&&(s=new Float32Array(r),Ro[r]=s),t!==0){n.toArray(s,0);for(let a=1,o=0;a!==t;++a)o+=e,i[a].toArray(s,o)}return s}function fe(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function de(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function Ir(i,t){let e=Co[t];e===void 0&&(e=new Int32Array(t),Co[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function dp(i,t){const e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function pp(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(fe(e,t))return;i.uniform2fv(this.addr,t),de(e,t)}}function mp(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(fe(e,t))return;i.uniform3fv(this.addr,t),de(e,t)}}function gp(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(fe(e,t))return;i.uniform4fv(this.addr,t),de(e,t)}}function _p(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(fe(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),de(e,t)}else{if(fe(e,n))return;Do.set(n),i.uniformMatrix2fv(this.addr,!1,Do),de(e,n)}}function vp(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(fe(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),de(e,t)}else{if(fe(e,n))return;Lo.set(n),i.uniformMatrix3fv(this.addr,!1,Lo),de(e,n)}}function xp(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(fe(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),de(e,t)}else{if(fe(e,n))return;Po.set(n),i.uniformMatrix4fv(this.addr,!1,Po),de(e,n)}}function Mp(i,t){const e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function Sp(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(fe(e,t))return;i.uniform2iv(this.addr,t),de(e,t)}}function yp(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(fe(e,t))return;i.uniform3iv(this.addr,t),de(e,t)}}function Ep(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(fe(e,t))return;i.uniform4iv(this.addr,t),de(e,t)}}function Tp(i,t){const e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function Ap(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(fe(e,t))return;i.uniform2uiv(this.addr,t),de(e,t)}}function bp(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(fe(e,t))return;i.uniform3uiv(this.addr,t),de(e,t)}}function wp(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(fe(e,t))return;i.uniform4uiv(this.addr,t),de(e,t)}}function Rp(i,t,e){const n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r);let s;this.type===i.SAMPLER_2D_SHADOW?(wo.compareFunction=tc,s=wo):s=Nc,e.setTexture2D(t||s,r)}function Cp(i,t,e){const n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),e.setTexture3D(t||Oc,r)}function Pp(i,t,e){const n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),e.setTextureCube(t||Bc,r)}function Lp(i,t,e){const n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),e.setTexture2DArray(t||Fc,r)}function Dp(i){switch(i){case 5126:return dp;case 35664:return pp;case 35665:return mp;case 35666:return gp;case 35674:return _p;case 35675:return vp;case 35676:return xp;case 5124:case 35670:return Mp;case 35667:case 35671:return Sp;case 35668:case 35672:return yp;case 35669:case 35673:return Ep;case 5125:return Tp;case 36294:return Ap;case 36295:return bp;case 36296:return wp;case 35678:case 36198:case 36298:case 36306:case 35682:return Rp;case 35679:case 36299:case 36307:return Cp;case 35680:case 36300:case 36308:case 36293:return Pp;case 36289:case 36303:case 36311:case 36292:return Lp}}function Ip(i,t){i.uniform1fv(this.addr,t)}function Up(i,t){const e=pi(t,this.size,2);i.uniform2fv(this.addr,e)}function Np(i,t){const e=pi(t,this.size,3);i.uniform3fv(this.addr,e)}function Fp(i,t){const e=pi(t,this.size,4);i.uniform4fv(this.addr,e)}function Op(i,t){const e=pi(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function Bp(i,t){const e=pi(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function zp(i,t){const e=pi(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function Hp(i,t){i.uniform1iv(this.addr,t)}function Vp(i,t){i.uniform2iv(this.addr,t)}function Gp(i,t){i.uniform3iv(this.addr,t)}function kp(i,t){i.uniform4iv(this.addr,t)}function Wp(i,t){i.uniform1uiv(this.addr,t)}function Xp(i,t){i.uniform2uiv(this.addr,t)}function qp(i,t){i.uniform3uiv(this.addr,t)}function Yp(i,t){i.uniform4uiv(this.addr,t)}function Jp(i,t,e){const n=this.cache,r=t.length,s=Ir(e,r);fe(n,s)||(i.uniform1iv(this.addr,s),de(n,s));for(let a=0;a!==r;++a)e.setTexture2D(t[a]||Nc,s[a])}function Zp(i,t,e){const n=this.cache,r=t.length,s=Ir(e,r);fe(n,s)||(i.uniform1iv(this.addr,s),de(n,s));for(let a=0;a!==r;++a)e.setTexture3D(t[a]||Oc,s[a])}function $p(i,t,e){const n=this.cache,r=t.length,s=Ir(e,r);fe(n,s)||(i.uniform1iv(this.addr,s),de(n,s));for(let a=0;a!==r;++a)e.setTextureCube(t[a]||Bc,s[a])}function Kp(i,t,e){const n=this.cache,r=t.length,s=Ir(e,r);fe(n,s)||(i.uniform1iv(this.addr,s),de(n,s));for(let a=0;a!==r;++a)e.setTexture2DArray(t[a]||Fc,s[a])}function jp(i){switch(i){case 5126:return Ip;case 35664:return Up;case 35665:return Np;case 35666:return Fp;case 35674:return Op;case 35675:return Bp;case 35676:return zp;case 5124:case 35670:return Hp;case 35667:case 35671:return Vp;case 35668:case 35672:return Gp;case 35669:case 35673:return kp;case 5125:return Wp;case 36294:return Xp;case 36295:return qp;case 36296:return Yp;case 35678:case 36198:case 36298:case 36306:case 35682:return Jp;case 35679:case 36299:case 36307:return Zp;case 35680:case 36300:case 36308:case 36293:return $p;case 36289:case 36303:case 36311:case 36292:return Kp}}class Qp{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=Dp(e.type)}}class tm{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=jp(e.type)}}class em{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const r=this.seq;for(let s=0,a=r.length;s!==a;++s){const o=r[s];o.setValue(t,e[o.id],n)}}}const vs=/(\w+)(\])?(\[|\.)?/g;function Io(i,t){i.seq.push(t),i.map[t.id]=t}function nm(i,t,e){const n=i.name,r=n.length;for(vs.lastIndex=0;;){const s=vs.exec(n),a=vs.lastIndex;let o=s[1];const l=s[2]==="]",c=s[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===r){Io(e,c===void 0?new Qp(o,i,t):new tm(o,i,t));break}else{let u=e.map[o];u===void 0&&(u=new em(o),Io(e,u)),e=u}}}class Ar{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let r=0;r<n;++r){const s=t.getActiveUniform(e,r),a=t.getUniformLocation(e,s.name);nm(s,a,this)}}setValue(t,e,n,r){const s=this.map[e];s!==void 0&&s.setValue(t,n,r)}setOptional(t,e,n){const r=e[n];r!==void 0&&this.setValue(t,n,r)}static upload(t,e,n,r){for(let s=0,a=e.length;s!==a;++s){const o=e[s],l=n[o.id];l.needsUpdate!==!1&&o.setValue(t,l.value,r)}}static seqWithValue(t,e){const n=[];for(let r=0,s=t.length;r!==s;++r){const a=t[r];a.id in e&&n.push(a)}return n}}function Uo(i,t,e){const n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}const im=37297;let rm=0;function sm(i,t){const e=i.split(`
`),n=[],r=Math.max(t-6,0),s=Math.min(t+6,e.length);for(let a=r;a<s;a++){const o=a+1;n.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return n.join(`
`)}const No=new Ht;function am(i){$t._getMatrix(No,$t.workingColorSpace,i);const t=`mat3( ${No.elements.map(e=>e.toFixed(4))} )`;switch($t.getTransfer(i)){case br:return[t,"LinearTransferOETF"];case te:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function Fo(i,t,e){const n=i.getShaderParameter(t,i.COMPILE_STATUS),s=(i.getShaderInfoLog(t)||"").trim();if(n&&s==="")return"";const a=/ERROR: 0:(\d+)/.exec(s);if(a){const o=parseInt(a[1]);return e.toUpperCase()+`

`+s+`

`+sm(i.getShaderSource(t),o)}else return s}function om(i,t){const e=am(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function cm(i,t){let e;switch(t){case pl:e="Linear";break;case ml:e="Reinhard";break;case gl:e="Cineon";break;case _l:e="ACESFilmic";break;case xl:e="AgX";break;case Ml:e="Neutral";break;case vl:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const Mr=new P;function lm(){$t.getLuminanceCoefficients(Mr);const i=Mr.x.toFixed(4),t=Mr.y.toFixed(4),e=Mr.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function hm(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ai).join(`
`)}function um(i){const t=[];for(const e in i){const n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function fm(i,t){const e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let r=0;r<n;r++){const s=i.getActiveAttrib(t,r),a=s.name;let o=1;s.type===i.FLOAT_MAT2&&(o=2),s.type===i.FLOAT_MAT3&&(o=3),s.type===i.FLOAT_MAT4&&(o=4),e[a]={type:s.type,location:i.getAttribLocation(t,a),locationSize:o}}return e}function Ai(i){return i!==""}function Oo(i,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Bo(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const dm=/^[ \t]*#include +<([\w\d./]+)>/gm;function ca(i){return i.replace(dm,mm)}const pm=new Map;function mm(i,t){let e=Vt[t];if(e===void 0){const n=pm.get(t);if(n!==void 0)e=Vt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return ca(e)}const gm=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function zo(i){return i.replace(gm,_m)}function _m(i,t,e,n){let r="";for(let s=parseInt(t);s<parseInt(e);s++)r+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Ho(i){let t=`precision ${i.precision} float;
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
	`;return i.precision==="highp"?t+=`
#define HIGH_PRECISION`:i.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function vm(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Wo?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===Yc?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===nn&&(t="SHADOWMAP_TYPE_VSM"),t}function xm(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case ci:case li:t="ENVMAP_TYPE_CUBE";break;case Lr:t="ENVMAP_TYPE_CUBE_UV";break}return t}function Mm(i){let t="ENVMAP_MODE_REFLECTION";return i.envMap&&i.envMapMode===li&&(t="ENVMAP_MODE_REFRACTION"),t}function Sm(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case Xo:t="ENVMAP_BLENDING_MULTIPLY";break;case fl:t="ENVMAP_BLENDING_MIX";break;case dl:t="ENVMAP_BLENDING_ADD";break}return t}function ym(i){const t=i.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function Em(i,t,e,n){const r=i.getContext(),s=e.defines;let a=e.vertexShader,o=e.fragmentShader;const l=vm(e),c=xm(e),h=Mm(e),u=Sm(e),d=ym(e),p=hm(e),g=um(s),x=r.createProgram();let m,f,T=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Ai).join(`
`),m.length>0&&(m+=`
`),f=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Ai).join(`
`),f.length>0&&(f+=`
`)):(m=[Ho(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ai).join(`
`),f=[Ho(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==gn?"#define TONE_MAPPING":"",e.toneMapping!==gn?Vt.tonemapping_pars_fragment:"",e.toneMapping!==gn?cm("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Vt.colorspace_pars_fragment,om("linearToOutputTexel",e.outputColorSpace),lm(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Ai).join(`
`)),a=ca(a),a=Oo(a,e),a=Bo(a,e),o=ca(o),o=Oo(o,e),o=Bo(o,e),a=zo(a),o=zo(o),e.isRawShaderMaterial!==!0&&(T=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,f=["#define varying in",e.glslVersion===Ba?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Ba?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);const y=T+m+a,v=T+f+o,R=Uo(r,r.VERTEX_SHADER,y),b=Uo(r,r.FRAGMENT_SHADER,v);r.attachShader(x,R),r.attachShader(x,b),e.index0AttributeName!==void 0?r.bindAttribLocation(x,0,e.index0AttributeName):e.morphTargets===!0&&r.bindAttribLocation(x,0,"position"),r.linkProgram(x);function C(L){if(i.debug.checkShaderErrors){const O=r.getProgramInfoLog(x)||"",H=r.getShaderInfoLog(R)||"",W=r.getShaderInfoLog(b)||"",q=O.trim(),k=H.trim(),et=W.trim();let G=!0,ut=!0;if(r.getProgramParameter(x,r.LINK_STATUS)===!1)if(G=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(r,x,R,b);else{const _t=Fo(r,R,"vertex"),Mt=Fo(r,b,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(x,r.VALIDATE_STATUS)+`

Material Name: `+L.name+`
Material Type: `+L.type+`

Program Info Log: `+q+`
`+_t+`
`+Mt)}else q!==""?console.warn("THREE.WebGLProgram: Program Info Log:",q):(k===""||et==="")&&(ut=!1);ut&&(L.diagnostics={runnable:G,programLog:q,vertexShader:{log:k,prefix:m},fragmentShader:{log:et,prefix:f}})}r.deleteShader(R),r.deleteShader(b),D=new Ar(r,x),E=fm(r,x)}let D;this.getUniforms=function(){return D===void 0&&C(this),D};let E;this.getAttributes=function(){return E===void 0&&C(this),E};let M=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return M===!1&&(M=r.getProgramParameter(x,im)),M},this.destroy=function(){n.releaseStatesOfProgram(this),r.deleteProgram(x),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=rm++,this.cacheKey=t,this.usedTimes=1,this.program=x,this.vertexShader=R,this.fragmentShader=b,this}let Tm=0;class Am{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,r=this._getShaderStage(e),s=this._getShaderStage(n),a=this._getShaderCacheForMaterial(t);return a.has(r)===!1&&(a.add(r),r.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new bm(t),e.set(t,n)),n}}class bm{constructor(t){this.id=Tm++,this.code=t,this.usedTimes=0}}function wm(i,t,e,n,r,s,a){const o=new rc,l=new Am,c=new Set,h=[],u=r.logarithmicDepthBuffer,d=r.vertexTextures;let p=r.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(E){return c.add(E),E===0?"uv":`uv${E}`}function m(E,M,L,O,H){const W=O.fog,q=H.geometry,k=E.isMeshStandardMaterial?O.environment:null,et=(E.isMeshStandardMaterial?e:t).get(E.envMap||k),G=et&&et.mapping===Lr?et.image.height:null,ut=g[E.type];E.precision!==null&&(p=r.getMaxPrecision(E.precision),p!==E.precision&&console.warn("THREE.WebGLProgram.getParameters:",E.precision,"not supported, using",p,"instead."));const _t=q.morphAttributes.position||q.morphAttributes.normal||q.morphAttributes.color,Mt=_t!==void 0?_t.length:0;let Bt=0;q.morphAttributes.position!==void 0&&(Bt=1),q.morphAttributes.normal!==void 0&&(Bt=2),q.morphAttributes.color!==void 0&&(Bt=3);let qt,jt,Yt,Y;if(ut){const Kt=ke[ut];qt=Kt.vertexShader,jt=Kt.fragmentShader}else qt=E.vertexShader,jt=E.fragmentShader,l.update(E),Yt=l.getVertexShaderID(E),Y=l.getFragmentShaderID(E);const tt=i.getRenderTarget(),xt=i.state.buffers.depth.getReversed(),Ct=H.isInstancedMesh===!0,Et=H.isBatchedMesh===!0,kt=!!E.map,re=!!E.matcap,w=!!et,Q=!!E.aoMap,$=!!E.lightMap,Z=!!E.bumpMap,J=!!E.normalMap,lt=!!E.displacementMap,nt=!!E.emissiveMap,ht=!!E.metalnessMap,Ft=!!E.roughnessMap,Nt=E.anisotropy>0,A=E.clearcoat>0,_=E.dispersion>0,F=E.iridescence>0,V=E.sheen>0,j=E.transmission>0,X=Nt&&!!E.anisotropyMap,wt=A&&!!E.clearcoatMap,ot=A&&!!E.clearcoatNormalMap,Tt=A&&!!E.clearcoatRoughnessMap,At=F&&!!E.iridescenceMap,it=F&&!!E.iridescenceThicknessMap,gt=V&&!!E.sheenColorMap,It=V&&!!E.sheenRoughnessMap,Rt=!!E.specularMap,pt=!!E.specularColorMap,zt=!!E.specularIntensityMap,I=j&&!!E.transmissionMap,at=j&&!!E.thicknessMap,ft=!!E.gradientMap,St=!!E.alphaMap,rt=E.alphaTest>0,K=!!E.alphaHash,bt=!!E.extensions;let Ot=gn;E.toneMapped&&(tt===null||tt.isXRRenderTarget===!0)&&(Ot=i.toneMapping);const se={shaderID:ut,shaderType:E.type,shaderName:E.name,vertexShader:qt,fragmentShader:jt,defines:E.defines,customVertexShaderID:Yt,customFragmentShaderID:Y,isRawShaderMaterial:E.isRawShaderMaterial===!0,glslVersion:E.glslVersion,precision:p,batching:Et,batchingColor:Et&&H._colorsTexture!==null,instancing:Ct,instancingColor:Ct&&H.instanceColor!==null,instancingMorph:Ct&&H.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:tt===null?i.outputColorSpace:tt.isXRRenderTarget===!0?tt.texture.colorSpace:hi,alphaToCoverage:!!E.alphaToCoverage,map:kt,matcap:re,envMap:w,envMapMode:w&&et.mapping,envMapCubeUVHeight:G,aoMap:Q,lightMap:$,bumpMap:Z,normalMap:J,displacementMap:d&&lt,emissiveMap:nt,normalMapObjectSpace:J&&E.normalMapType===Tl,normalMapTangentSpace:J&&E.normalMapType===ga,metalnessMap:ht,roughnessMap:Ft,anisotropy:Nt,anisotropyMap:X,clearcoat:A,clearcoatMap:wt,clearcoatNormalMap:ot,clearcoatRoughnessMap:Tt,dispersion:_,iridescence:F,iridescenceMap:At,iridescenceThicknessMap:it,sheen:V,sheenColorMap:gt,sheenRoughnessMap:It,specularMap:Rt,specularColorMap:pt,specularIntensityMap:zt,transmission:j,transmissionMap:I,thicknessMap:at,gradientMap:ft,opaque:E.transparent===!1&&E.blending===ri&&E.alphaToCoverage===!1,alphaMap:St,alphaTest:rt,alphaHash:K,combine:E.combine,mapUv:kt&&x(E.map.channel),aoMapUv:Q&&x(E.aoMap.channel),lightMapUv:$&&x(E.lightMap.channel),bumpMapUv:Z&&x(E.bumpMap.channel),normalMapUv:J&&x(E.normalMap.channel),displacementMapUv:lt&&x(E.displacementMap.channel),emissiveMapUv:nt&&x(E.emissiveMap.channel),metalnessMapUv:ht&&x(E.metalnessMap.channel),roughnessMapUv:Ft&&x(E.roughnessMap.channel),anisotropyMapUv:X&&x(E.anisotropyMap.channel),clearcoatMapUv:wt&&x(E.clearcoatMap.channel),clearcoatNormalMapUv:ot&&x(E.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Tt&&x(E.clearcoatRoughnessMap.channel),iridescenceMapUv:At&&x(E.iridescenceMap.channel),iridescenceThicknessMapUv:it&&x(E.iridescenceThicknessMap.channel),sheenColorMapUv:gt&&x(E.sheenColorMap.channel),sheenRoughnessMapUv:It&&x(E.sheenRoughnessMap.channel),specularMapUv:Rt&&x(E.specularMap.channel),specularColorMapUv:pt&&x(E.specularColorMap.channel),specularIntensityMapUv:zt&&x(E.specularIntensityMap.channel),transmissionMapUv:I&&x(E.transmissionMap.channel),thicknessMapUv:at&&x(E.thicknessMap.channel),alphaMapUv:St&&x(E.alphaMap.channel),vertexTangents:!!q.attributes.tangent&&(J||Nt),vertexColors:E.vertexColors,vertexAlphas:E.vertexColors===!0&&!!q.attributes.color&&q.attributes.color.itemSize===4,pointsUvs:H.isPoints===!0&&!!q.attributes.uv&&(kt||St),fog:!!W,useFog:E.fog===!0,fogExp2:!!W&&W.isFogExp2,flatShading:E.flatShading===!0&&E.wireframe===!1,sizeAttenuation:E.sizeAttenuation===!0,logarithmicDepthBuffer:u,reversedDepthBuffer:xt,skinning:H.isSkinnedMesh===!0,morphTargets:q.morphAttributes.position!==void 0,morphNormals:q.morphAttributes.normal!==void 0,morphColors:q.morphAttributes.color!==void 0,morphTargetsCount:Mt,morphTextureStride:Bt,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:E.dithering,shadowMapEnabled:i.shadowMap.enabled&&L.length>0,shadowMapType:i.shadowMap.type,toneMapping:Ot,decodeVideoTexture:kt&&E.map.isVideoTexture===!0&&$t.getTransfer(E.map.colorSpace)===te,decodeVideoTextureEmissive:nt&&E.emissiveMap.isVideoTexture===!0&&$t.getTransfer(E.emissiveMap.colorSpace)===te,premultipliedAlpha:E.premultipliedAlpha,doubleSided:E.side===rn,flipSided:E.side===Te,useDepthPacking:E.depthPacking>=0,depthPacking:E.depthPacking||0,index0AttributeName:E.index0AttributeName,extensionClipCullDistance:bt&&E.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(bt&&E.extensions.multiDraw===!0||Et)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:E.customProgramCacheKey()};return se.vertexUv1s=c.has(1),se.vertexUv2s=c.has(2),se.vertexUv3s=c.has(3),c.clear(),se}function f(E){const M=[];if(E.shaderID?M.push(E.shaderID):(M.push(E.customVertexShaderID),M.push(E.customFragmentShaderID)),E.defines!==void 0)for(const L in E.defines)M.push(L),M.push(E.defines[L]);return E.isRawShaderMaterial===!1&&(T(M,E),y(M,E),M.push(i.outputColorSpace)),M.push(E.customProgramCacheKey),M.join()}function T(E,M){E.push(M.precision),E.push(M.outputColorSpace),E.push(M.envMapMode),E.push(M.envMapCubeUVHeight),E.push(M.mapUv),E.push(M.alphaMapUv),E.push(M.lightMapUv),E.push(M.aoMapUv),E.push(M.bumpMapUv),E.push(M.normalMapUv),E.push(M.displacementMapUv),E.push(M.emissiveMapUv),E.push(M.metalnessMapUv),E.push(M.roughnessMapUv),E.push(M.anisotropyMapUv),E.push(M.clearcoatMapUv),E.push(M.clearcoatNormalMapUv),E.push(M.clearcoatRoughnessMapUv),E.push(M.iridescenceMapUv),E.push(M.iridescenceThicknessMapUv),E.push(M.sheenColorMapUv),E.push(M.sheenRoughnessMapUv),E.push(M.specularMapUv),E.push(M.specularColorMapUv),E.push(M.specularIntensityMapUv),E.push(M.transmissionMapUv),E.push(M.thicknessMapUv),E.push(M.combine),E.push(M.fogExp2),E.push(M.sizeAttenuation),E.push(M.morphTargetsCount),E.push(M.morphAttributeCount),E.push(M.numDirLights),E.push(M.numPointLights),E.push(M.numSpotLights),E.push(M.numSpotLightMaps),E.push(M.numHemiLights),E.push(M.numRectAreaLights),E.push(M.numDirLightShadows),E.push(M.numPointLightShadows),E.push(M.numSpotLightShadows),E.push(M.numSpotLightShadowsWithMaps),E.push(M.numLightProbes),E.push(M.shadowMapType),E.push(M.toneMapping),E.push(M.numClippingPlanes),E.push(M.numClipIntersection),E.push(M.depthPacking)}function y(E,M){o.disableAll(),M.supportsVertexTextures&&o.enable(0),M.instancing&&o.enable(1),M.instancingColor&&o.enable(2),M.instancingMorph&&o.enable(3),M.matcap&&o.enable(4),M.envMap&&o.enable(5),M.normalMapObjectSpace&&o.enable(6),M.normalMapTangentSpace&&o.enable(7),M.clearcoat&&o.enable(8),M.iridescence&&o.enable(9),M.alphaTest&&o.enable(10),M.vertexColors&&o.enable(11),M.vertexAlphas&&o.enable(12),M.vertexUv1s&&o.enable(13),M.vertexUv2s&&o.enable(14),M.vertexUv3s&&o.enable(15),M.vertexTangents&&o.enable(16),M.anisotropy&&o.enable(17),M.alphaHash&&o.enable(18),M.batching&&o.enable(19),M.dispersion&&o.enable(20),M.batchingColor&&o.enable(21),M.gradientMap&&o.enable(22),E.push(o.mask),o.disableAll(),M.fog&&o.enable(0),M.useFog&&o.enable(1),M.flatShading&&o.enable(2),M.logarithmicDepthBuffer&&o.enable(3),M.reversedDepthBuffer&&o.enable(4),M.skinning&&o.enable(5),M.morphTargets&&o.enable(6),M.morphNormals&&o.enable(7),M.morphColors&&o.enable(8),M.premultipliedAlpha&&o.enable(9),M.shadowMapEnabled&&o.enable(10),M.doubleSided&&o.enable(11),M.flipSided&&o.enable(12),M.useDepthPacking&&o.enable(13),M.dithering&&o.enable(14),M.transmission&&o.enable(15),M.sheen&&o.enable(16),M.opaque&&o.enable(17),M.pointsUvs&&o.enable(18),M.decodeVideoTexture&&o.enable(19),M.decodeVideoTextureEmissive&&o.enable(20),M.alphaToCoverage&&o.enable(21),E.push(o.mask)}function v(E){const M=g[E.type];let L;if(M){const O=ke[M];L=ph.clone(O.uniforms)}else L=E.uniforms;return L}function R(E,M){let L;for(let O=0,H=h.length;O<H;O++){const W=h[O];if(W.cacheKey===M){L=W,++L.usedTimes;break}}return L===void 0&&(L=new Em(i,M,E,s),h.push(L)),L}function b(E){if(--E.usedTimes===0){const M=h.indexOf(E);h[M]=h[h.length-1],h.pop(),E.destroy()}}function C(E){l.remove(E)}function D(){l.dispose()}return{getParameters:m,getProgramCacheKey:f,getUniforms:v,acquireProgram:R,releaseProgram:b,releaseShaderCache:C,programs:h,dispose:D}}function Rm(){let i=new WeakMap;function t(a){return i.has(a)}function e(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function r(a,o,l){i.get(a)[o]=l}function s(){i=new WeakMap}return{has:t,get:e,remove:n,update:r,dispose:s}}function Cm(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function Vo(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function Go(){const i=[];let t=0;const e=[],n=[],r=[];function s(){t=0,e.length=0,n.length=0,r.length=0}function a(u,d,p,g,x,m){let f=i[t];return f===void 0?(f={id:u.id,object:u,geometry:d,material:p,groupOrder:g,renderOrder:u.renderOrder,z:x,group:m},i[t]=f):(f.id=u.id,f.object=u,f.geometry=d,f.material=p,f.groupOrder=g,f.renderOrder=u.renderOrder,f.z=x,f.group=m),t++,f}function o(u,d,p,g,x,m){const f=a(u,d,p,g,x,m);p.transmission>0?n.push(f):p.transparent===!0?r.push(f):e.push(f)}function l(u,d,p,g,x,m){const f=a(u,d,p,g,x,m);p.transmission>0?n.unshift(f):p.transparent===!0?r.unshift(f):e.unshift(f)}function c(u,d){e.length>1&&e.sort(u||Cm),n.length>1&&n.sort(d||Vo),r.length>1&&r.sort(d||Vo)}function h(){for(let u=t,d=i.length;u<d;u++){const p=i[u];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:e,transmissive:n,transparent:r,init:s,push:o,unshift:l,finish:h,sort:c}}function Pm(){let i=new WeakMap;function t(n,r){const s=i.get(n);let a;return s===void 0?(a=new Go,i.set(n,[a])):r>=s.length?(a=new Go,s.push(a)):a=s[r],a}function e(){i=new WeakMap}return{get:t,dispose:e}}function Lm(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new P,color:new Xt};break;case"SpotLight":e={position:new P,direction:new P,color:new Xt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new P,color:new Xt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new P,skyColor:new Xt,groundColor:new Xt};break;case"RectAreaLight":e={color:new Xt,position:new P,halfWidth:new P,halfHeight:new P};break}return i[t.id]=e,e}}}function Dm(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ct};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ct};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ct,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}let Im=0;function Um(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function Nm(i){const t=new Lm,e=Dm(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new P);const r=new P,s=new ie,a=new ie;function o(c){let h=0,u=0,d=0;for(let E=0;E<9;E++)n.probe[E].set(0,0,0);let p=0,g=0,x=0,m=0,f=0,T=0,y=0,v=0,R=0,b=0,C=0;c.sort(Um);for(let E=0,M=c.length;E<M;E++){const L=c[E],O=L.color,H=L.intensity,W=L.distance,q=L.shadow&&L.shadow.map?L.shadow.map.texture:null;if(L.isAmbientLight)h+=O.r*H,u+=O.g*H,d+=O.b*H;else if(L.isLightProbe){for(let k=0;k<9;k++)n.probe[k].addScaledVector(L.sh.coefficients[k],H);C++}else if(L.isDirectionalLight){const k=t.get(L);if(k.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){const et=L.shadow,G=e.get(L);G.shadowIntensity=et.intensity,G.shadowBias=et.bias,G.shadowNormalBias=et.normalBias,G.shadowRadius=et.radius,G.shadowMapSize=et.mapSize,n.directionalShadow[p]=G,n.directionalShadowMap[p]=q,n.directionalShadowMatrix[p]=L.shadow.matrix,T++}n.directional[p]=k,p++}else if(L.isSpotLight){const k=t.get(L);k.position.setFromMatrixPosition(L.matrixWorld),k.color.copy(O).multiplyScalar(H),k.distance=W,k.coneCos=Math.cos(L.angle),k.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),k.decay=L.decay,n.spot[x]=k;const et=L.shadow;if(L.map&&(n.spotLightMap[R]=L.map,R++,et.updateMatrices(L),L.castShadow&&b++),n.spotLightMatrix[x]=et.matrix,L.castShadow){const G=e.get(L);G.shadowIntensity=et.intensity,G.shadowBias=et.bias,G.shadowNormalBias=et.normalBias,G.shadowRadius=et.radius,G.shadowMapSize=et.mapSize,n.spotShadow[x]=G,n.spotShadowMap[x]=q,v++}x++}else if(L.isRectAreaLight){const k=t.get(L);k.color.copy(O).multiplyScalar(H),k.halfWidth.set(L.width*.5,0,0),k.halfHeight.set(0,L.height*.5,0),n.rectArea[m]=k,m++}else if(L.isPointLight){const k=t.get(L);if(k.color.copy(L.color).multiplyScalar(L.intensity),k.distance=L.distance,k.decay=L.decay,L.castShadow){const et=L.shadow,G=e.get(L);G.shadowIntensity=et.intensity,G.shadowBias=et.bias,G.shadowNormalBias=et.normalBias,G.shadowRadius=et.radius,G.shadowMapSize=et.mapSize,G.shadowCameraNear=et.camera.near,G.shadowCameraFar=et.camera.far,n.pointShadow[g]=G,n.pointShadowMap[g]=q,n.pointShadowMatrix[g]=L.shadow.matrix,y++}n.point[g]=k,g++}else if(L.isHemisphereLight){const k=t.get(L);k.skyColor.copy(L.color).multiplyScalar(H),k.groundColor.copy(L.groundColor).multiplyScalar(H),n.hemi[f]=k,f++}}m>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=dt.LTC_FLOAT_1,n.rectAreaLTC2=dt.LTC_FLOAT_2):(n.rectAreaLTC1=dt.LTC_HALF_1,n.rectAreaLTC2=dt.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=d;const D=n.hash;(D.directionalLength!==p||D.pointLength!==g||D.spotLength!==x||D.rectAreaLength!==m||D.hemiLength!==f||D.numDirectionalShadows!==T||D.numPointShadows!==y||D.numSpotShadows!==v||D.numSpotMaps!==R||D.numLightProbes!==C)&&(n.directional.length=p,n.spot.length=x,n.rectArea.length=m,n.point.length=g,n.hemi.length=f,n.directionalShadow.length=T,n.directionalShadowMap.length=T,n.pointShadow.length=y,n.pointShadowMap.length=y,n.spotShadow.length=v,n.spotShadowMap.length=v,n.directionalShadowMatrix.length=T,n.pointShadowMatrix.length=y,n.spotLightMatrix.length=v+R-b,n.spotLightMap.length=R,n.numSpotLightShadowsWithMaps=b,n.numLightProbes=C,D.directionalLength=p,D.pointLength=g,D.spotLength=x,D.rectAreaLength=m,D.hemiLength=f,D.numDirectionalShadows=T,D.numPointShadows=y,D.numSpotShadows=v,D.numSpotMaps=R,D.numLightProbes=C,n.version=Im++)}function l(c,h){let u=0,d=0,p=0,g=0,x=0;const m=h.matrixWorldInverse;for(let f=0,T=c.length;f<T;f++){const y=c[f];if(y.isDirectionalLight){const v=n.directional[u];v.direction.setFromMatrixPosition(y.matrixWorld),r.setFromMatrixPosition(y.target.matrixWorld),v.direction.sub(r),v.direction.transformDirection(m),u++}else if(y.isSpotLight){const v=n.spot[p];v.position.setFromMatrixPosition(y.matrixWorld),v.position.applyMatrix4(m),v.direction.setFromMatrixPosition(y.matrixWorld),r.setFromMatrixPosition(y.target.matrixWorld),v.direction.sub(r),v.direction.transformDirection(m),p++}else if(y.isRectAreaLight){const v=n.rectArea[g];v.position.setFromMatrixPosition(y.matrixWorld),v.position.applyMatrix4(m),a.identity(),s.copy(y.matrixWorld),s.premultiply(m),a.extractRotation(s),v.halfWidth.set(y.width*.5,0,0),v.halfHeight.set(0,y.height*.5,0),v.halfWidth.applyMatrix4(a),v.halfHeight.applyMatrix4(a),g++}else if(y.isPointLight){const v=n.point[d];v.position.setFromMatrixPosition(y.matrixWorld),v.position.applyMatrix4(m),d++}else if(y.isHemisphereLight){const v=n.hemi[x];v.direction.setFromMatrixPosition(y.matrixWorld),v.direction.transformDirection(m),x++}}}return{setup:o,setupView:l,state:n}}function ko(i){const t=new Nm(i),e=[],n=[];function r(h){c.camera=h,e.length=0,n.length=0}function s(h){e.push(h)}function a(h){n.push(h)}function o(){t.setup(e)}function l(h){t.setupView(e,h)}const c={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:r,state:c,setupLights:o,setupLightsView:l,pushLight:s,pushShadow:a}}function Fm(i){let t=new WeakMap;function e(r,s=0){const a=t.get(r);let o;return a===void 0?(o=new ko(i),t.set(r,[o])):s>=a.length?(o=new ko(i),a.push(o)):o=a[s],o}function n(){t=new WeakMap}return{get:e,dispose:n}}const Om=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Bm=`uniform sampler2D shadow_pass;
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
}`;function zm(i,t,e){let n=new xa;const r=new ct,s=new ct,a=new ee,o=new au({depthPacking:El}),l=new ou,c={},h=e.maxTextureSize,u={[_n]:Te,[Te]:_n,[rn]:rn},d=new on({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ct},radius:{value:4}},vertexShader:Om,fragmentShader:Bm}),p=d.clone();p.defines.HORIZONTAL_PASS=1;const g=new _e;g.setAttribute("position",new Ve(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const x=new He(g,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Wo;let f=this.type;this.render=function(b,C,D){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||b.length===0)return;const E=i.getRenderTarget(),M=i.getActiveCubeFace(),L=i.getActiveMipmapLevel(),O=i.state;O.setBlending(mn),O.buffers.depth.getReversed()===!0?O.buffers.color.setClear(0,0,0,0):O.buffers.color.setClear(1,1,1,1),O.buffers.depth.setTest(!0),O.setScissorTest(!1);const H=f!==nn&&this.type===nn,W=f===nn&&this.type!==nn;for(let q=0,k=b.length;q<k;q++){const et=b[q],G=et.shadow;if(G===void 0){console.warn("THREE.WebGLShadowMap:",et,"has no shadow.");continue}if(G.autoUpdate===!1&&G.needsUpdate===!1)continue;r.copy(G.mapSize);const ut=G.getFrameExtents();if(r.multiply(ut),s.copy(G.mapSize),(r.x>h||r.y>h)&&(r.x>h&&(s.x=Math.floor(h/ut.x),r.x=s.x*ut.x,G.mapSize.x=s.x),r.y>h&&(s.y=Math.floor(h/ut.y),r.y=s.y*ut.y,G.mapSize.y=s.y)),G.map===null||H===!0||W===!0){const Mt=this.type!==nn?{minFilter:Ce,magFilter:Ce}:{};G.map!==null&&G.map.dispose(),G.map=new Un(r.x,r.y,Mt),G.map.texture.name=et.name+".shadowMap",G.camera.updateProjectionMatrix()}i.setRenderTarget(G.map),i.clear();const _t=G.getViewportCount();for(let Mt=0;Mt<_t;Mt++){const Bt=G.getViewport(Mt);a.set(s.x*Bt.x,s.y*Bt.y,s.x*Bt.z,s.y*Bt.w),O.viewport(a),G.updateMatrices(et,Mt),n=G.getFrustum(),v(C,D,G.camera,et,this.type)}G.isPointLightShadow!==!0&&this.type===nn&&T(G,D),G.needsUpdate=!1}f=this.type,m.needsUpdate=!1,i.setRenderTarget(E,M,L)};function T(b,C){const D=t.update(x);d.defines.VSM_SAMPLES!==b.blurSamples&&(d.defines.VSM_SAMPLES=b.blurSamples,p.defines.VSM_SAMPLES=b.blurSamples,d.needsUpdate=!0,p.needsUpdate=!0),b.mapPass===null&&(b.mapPass=new Un(r.x,r.y)),d.uniforms.shadow_pass.value=b.map.texture,d.uniforms.resolution.value=b.mapSize,d.uniforms.radius.value=b.radius,i.setRenderTarget(b.mapPass),i.clear(),i.renderBufferDirect(C,null,D,d,x,null),p.uniforms.shadow_pass.value=b.mapPass.texture,p.uniforms.resolution.value=b.mapSize,p.uniforms.radius.value=b.radius,i.setRenderTarget(b.map),i.clear(),i.renderBufferDirect(C,null,D,p,x,null)}function y(b,C,D,E){let M=null;const L=D.isPointLight===!0?b.customDistanceMaterial:b.customDepthMaterial;if(L!==void 0)M=L;else if(M=D.isPointLight===!0?l:o,i.localClippingEnabled&&C.clipShadows===!0&&Array.isArray(C.clippingPlanes)&&C.clippingPlanes.length!==0||C.displacementMap&&C.displacementScale!==0||C.alphaMap&&C.alphaTest>0||C.map&&C.alphaTest>0||C.alphaToCoverage===!0){const O=M.uuid,H=C.uuid;let W=c[O];W===void 0&&(W={},c[O]=W);let q=W[H];q===void 0&&(q=M.clone(),W[H]=q,C.addEventListener("dispose",R)),M=q}if(M.visible=C.visible,M.wireframe=C.wireframe,E===nn?M.side=C.shadowSide!==null?C.shadowSide:C.side:M.side=C.shadowSide!==null?C.shadowSide:u[C.side],M.alphaMap=C.alphaMap,M.alphaTest=C.alphaToCoverage===!0?.5:C.alphaTest,M.map=C.map,M.clipShadows=C.clipShadows,M.clippingPlanes=C.clippingPlanes,M.clipIntersection=C.clipIntersection,M.displacementMap=C.displacementMap,M.displacementScale=C.displacementScale,M.displacementBias=C.displacementBias,M.wireframeLinewidth=C.wireframeLinewidth,M.linewidth=C.linewidth,D.isPointLight===!0&&M.isMeshDistanceMaterial===!0){const O=i.properties.get(M);O.light=D}return M}function v(b,C,D,E,M){if(b.visible===!1)return;if(b.layers.test(C.layers)&&(b.isMesh||b.isLine||b.isPoints)&&(b.castShadow||b.receiveShadow&&M===nn)&&(!b.frustumCulled||n.intersectsObject(b))){b.modelViewMatrix.multiplyMatrices(D.matrixWorldInverse,b.matrixWorld);const H=t.update(b),W=b.material;if(Array.isArray(W)){const q=H.groups;for(let k=0,et=q.length;k<et;k++){const G=q[k],ut=W[G.materialIndex];if(ut&&ut.visible){const _t=y(b,ut,E,M);b.onBeforeShadow(i,b,C,D,H,_t,G),i.renderBufferDirect(D,null,H,_t,b,G),b.onAfterShadow(i,b,C,D,H,_t,G)}}}else if(W.visible){const q=y(b,W,E,M);b.onBeforeShadow(i,b,C,D,H,q,null),i.renderBufferDirect(D,null,H,q,b,null),b.onAfterShadow(i,b,C,D,H,q,null)}}const O=b.children;for(let H=0,W=O.length;H<W;H++)v(O[H],C,D,E,M)}function R(b){b.target.removeEventListener("dispose",R);for(const D in c){const E=c[D],M=b.target.uuid;M in E&&(E[M].dispose(),delete E[M])}}}const Hm={[Ss]:ys,[Es]:bs,[Ts]:ws,[oi]:As,[ys]:Ss,[bs]:Es,[ws]:Ts,[As]:oi};function Vm(i,t){function e(){let I=!1;const at=new ee;let ft=null;const St=new ee(0,0,0,0);return{setMask:function(rt){ft!==rt&&!I&&(i.colorMask(rt,rt,rt,rt),ft=rt)},setLocked:function(rt){I=rt},setClear:function(rt,K,bt,Ot,se){se===!0&&(rt*=Ot,K*=Ot,bt*=Ot),at.set(rt,K,bt,Ot),St.equals(at)===!1&&(i.clearColor(rt,K,bt,Ot),St.copy(at))},reset:function(){I=!1,ft=null,St.set(-1,0,0,0)}}}function n(){let I=!1,at=!1,ft=null,St=null,rt=null;return{setReversed:function(K){if(at!==K){const bt=t.get("EXT_clip_control");K?bt.clipControlEXT(bt.LOWER_LEFT_EXT,bt.ZERO_TO_ONE_EXT):bt.clipControlEXT(bt.LOWER_LEFT_EXT,bt.NEGATIVE_ONE_TO_ONE_EXT),at=K;const Ot=rt;rt=null,this.setClear(Ot)}},getReversed:function(){return at},setTest:function(K){K?tt(i.DEPTH_TEST):xt(i.DEPTH_TEST)},setMask:function(K){ft!==K&&!I&&(i.depthMask(K),ft=K)},setFunc:function(K){if(at&&(K=Hm[K]),St!==K){switch(K){case Ss:i.depthFunc(i.NEVER);break;case ys:i.depthFunc(i.ALWAYS);break;case Es:i.depthFunc(i.LESS);break;case oi:i.depthFunc(i.LEQUAL);break;case Ts:i.depthFunc(i.EQUAL);break;case As:i.depthFunc(i.GEQUAL);break;case bs:i.depthFunc(i.GREATER);break;case ws:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}St=K}},setLocked:function(K){I=K},setClear:function(K){rt!==K&&(at&&(K=1-K),i.clearDepth(K),rt=K)},reset:function(){I=!1,ft=null,St=null,rt=null,at=!1}}}function r(){let I=!1,at=null,ft=null,St=null,rt=null,K=null,bt=null,Ot=null,se=null;return{setTest:function(Kt){I||(Kt?tt(i.STENCIL_TEST):xt(i.STENCIL_TEST))},setMask:function(Kt){at!==Kt&&!I&&(i.stencilMask(Kt),at=Kt)},setFunc:function(Kt,$e,Ge){(ft!==Kt||St!==$e||rt!==Ge)&&(i.stencilFunc(Kt,$e,Ge),ft=Kt,St=$e,rt=Ge)},setOp:function(Kt,$e,Ge){(K!==Kt||bt!==$e||Ot!==Ge)&&(i.stencilOp(Kt,$e,Ge),K=Kt,bt=$e,Ot=Ge)},setLocked:function(Kt){I=Kt},setClear:function(Kt){se!==Kt&&(i.clearStencil(Kt),se=Kt)},reset:function(){I=!1,at=null,ft=null,St=null,rt=null,K=null,bt=null,Ot=null,se=null}}}const s=new e,a=new n,o=new r,l=new WeakMap,c=new WeakMap;let h={},u={},d=new WeakMap,p=[],g=null,x=!1,m=null,f=null,T=null,y=null,v=null,R=null,b=null,C=new Xt(0,0,0),D=0,E=!1,M=null,L=null,O=null,H=null,W=null;const q=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let k=!1,et=0;const G=i.getParameter(i.VERSION);G.indexOf("WebGL")!==-1?(et=parseFloat(/^WebGL (\d)/.exec(G)[1]),k=et>=1):G.indexOf("OpenGL ES")!==-1&&(et=parseFloat(/^OpenGL ES (\d)/.exec(G)[1]),k=et>=2);let ut=null,_t={};const Mt=i.getParameter(i.SCISSOR_BOX),Bt=i.getParameter(i.VIEWPORT),qt=new ee().fromArray(Mt),jt=new ee().fromArray(Bt);function Yt(I,at,ft,St){const rt=new Uint8Array(4),K=i.createTexture();i.bindTexture(I,K),i.texParameteri(I,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(I,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let bt=0;bt<ft;bt++)I===i.TEXTURE_3D||I===i.TEXTURE_2D_ARRAY?i.texImage3D(at,0,i.RGBA,1,1,St,0,i.RGBA,i.UNSIGNED_BYTE,rt):i.texImage2D(at+bt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,rt);return K}const Y={};Y[i.TEXTURE_2D]=Yt(i.TEXTURE_2D,i.TEXTURE_2D,1),Y[i.TEXTURE_CUBE_MAP]=Yt(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),Y[i.TEXTURE_2D_ARRAY]=Yt(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),Y[i.TEXTURE_3D]=Yt(i.TEXTURE_3D,i.TEXTURE_3D,1,1),s.setClear(0,0,0,1),a.setClear(1),o.setClear(0),tt(i.DEPTH_TEST),a.setFunc(oi),Z(!1),J(Da),tt(i.CULL_FACE),Q(mn);function tt(I){h[I]!==!0&&(i.enable(I),h[I]=!0)}function xt(I){h[I]!==!1&&(i.disable(I),h[I]=!1)}function Ct(I,at){return u[I]!==at?(i.bindFramebuffer(I,at),u[I]=at,I===i.DRAW_FRAMEBUFFER&&(u[i.FRAMEBUFFER]=at),I===i.FRAMEBUFFER&&(u[i.DRAW_FRAMEBUFFER]=at),!0):!1}function Et(I,at){let ft=p,St=!1;if(I){ft=d.get(at),ft===void 0&&(ft=[],d.set(at,ft));const rt=I.textures;if(ft.length!==rt.length||ft[0]!==i.COLOR_ATTACHMENT0){for(let K=0,bt=rt.length;K<bt;K++)ft[K]=i.COLOR_ATTACHMENT0+K;ft.length=rt.length,St=!0}}else ft[0]!==i.BACK&&(ft[0]=i.BACK,St=!0);St&&i.drawBuffers(ft)}function kt(I){return g!==I?(i.useProgram(I),g=I,!0):!1}const re={[Cn]:i.FUNC_ADD,[Zc]:i.FUNC_SUBTRACT,[$c]:i.FUNC_REVERSE_SUBTRACT};re[Kc]=i.MIN,re[jc]=i.MAX;const w={[Qc]:i.ZERO,[tl]:i.ONE,[el]:i.SRC_COLOR,[xs]:i.SRC_ALPHA,[ol]:i.SRC_ALPHA_SATURATE,[sl]:i.DST_COLOR,[il]:i.DST_ALPHA,[nl]:i.ONE_MINUS_SRC_COLOR,[Ms]:i.ONE_MINUS_SRC_ALPHA,[al]:i.ONE_MINUS_DST_COLOR,[rl]:i.ONE_MINUS_DST_ALPHA,[cl]:i.CONSTANT_COLOR,[ll]:i.ONE_MINUS_CONSTANT_COLOR,[hl]:i.CONSTANT_ALPHA,[ul]:i.ONE_MINUS_CONSTANT_ALPHA};function Q(I,at,ft,St,rt,K,bt,Ot,se,Kt){if(I===mn){x===!0&&(xt(i.BLEND),x=!1);return}if(x===!1&&(tt(i.BLEND),x=!0),I!==Jc){if(I!==m||Kt!==E){if((f!==Cn||v!==Cn)&&(i.blendEquation(i.FUNC_ADD),f=Cn,v=Cn),Kt)switch(I){case ri:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Ia:i.blendFunc(i.ONE,i.ONE);break;case Ua:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Na:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}else switch(I){case ri:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Ia:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case Ua:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Na:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}T=null,y=null,R=null,b=null,C.set(0,0,0),D=0,m=I,E=Kt}return}rt=rt||at,K=K||ft,bt=bt||St,(at!==f||rt!==v)&&(i.blendEquationSeparate(re[at],re[rt]),f=at,v=rt),(ft!==T||St!==y||K!==R||bt!==b)&&(i.blendFuncSeparate(w[ft],w[St],w[K],w[bt]),T=ft,y=St,R=K,b=bt),(Ot.equals(C)===!1||se!==D)&&(i.blendColor(Ot.r,Ot.g,Ot.b,se),C.copy(Ot),D=se),m=I,E=!1}function $(I,at){I.side===rn?xt(i.CULL_FACE):tt(i.CULL_FACE);let ft=I.side===Te;at&&(ft=!ft),Z(ft),I.blending===ri&&I.transparent===!1?Q(mn):Q(I.blending,I.blendEquation,I.blendSrc,I.blendDst,I.blendEquationAlpha,I.blendSrcAlpha,I.blendDstAlpha,I.blendColor,I.blendAlpha,I.premultipliedAlpha),a.setFunc(I.depthFunc),a.setTest(I.depthTest),a.setMask(I.depthWrite),s.setMask(I.colorWrite);const St=I.stencilWrite;o.setTest(St),St&&(o.setMask(I.stencilWriteMask),o.setFunc(I.stencilFunc,I.stencilRef,I.stencilFuncMask),o.setOp(I.stencilFail,I.stencilZFail,I.stencilZPass)),nt(I.polygonOffset,I.polygonOffsetFactor,I.polygonOffsetUnits),I.alphaToCoverage===!0?tt(i.SAMPLE_ALPHA_TO_COVERAGE):xt(i.SAMPLE_ALPHA_TO_COVERAGE)}function Z(I){M!==I&&(I?i.frontFace(i.CW):i.frontFace(i.CCW),M=I)}function J(I){I!==Xc?(tt(i.CULL_FACE),I!==L&&(I===Da?i.cullFace(i.BACK):I===qc?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):xt(i.CULL_FACE),L=I}function lt(I){I!==O&&(k&&i.lineWidth(I),O=I)}function nt(I,at,ft){I?(tt(i.POLYGON_OFFSET_FILL),(H!==at||W!==ft)&&(i.polygonOffset(at,ft),H=at,W=ft)):xt(i.POLYGON_OFFSET_FILL)}function ht(I){I?tt(i.SCISSOR_TEST):xt(i.SCISSOR_TEST)}function Ft(I){I===void 0&&(I=i.TEXTURE0+q-1),ut!==I&&(i.activeTexture(I),ut=I)}function Nt(I,at,ft){ft===void 0&&(ut===null?ft=i.TEXTURE0+q-1:ft=ut);let St=_t[ft];St===void 0&&(St={type:void 0,texture:void 0},_t[ft]=St),(St.type!==I||St.texture!==at)&&(ut!==ft&&(i.activeTexture(ft),ut=ft),i.bindTexture(I,at||Y[I]),St.type=I,St.texture=at)}function A(){const I=_t[ut];I!==void 0&&I.type!==void 0&&(i.bindTexture(I.type,null),I.type=void 0,I.texture=void 0)}function _(){try{i.compressedTexImage2D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function F(){try{i.compressedTexImage3D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function V(){try{i.texSubImage2D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function j(){try{i.texSubImage3D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function X(){try{i.compressedTexSubImage2D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function wt(){try{i.compressedTexSubImage3D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function ot(){try{i.texStorage2D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Tt(){try{i.texStorage3D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function At(){try{i.texImage2D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function it(){try{i.texImage3D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function gt(I){qt.equals(I)===!1&&(i.scissor(I.x,I.y,I.z,I.w),qt.copy(I))}function It(I){jt.equals(I)===!1&&(i.viewport(I.x,I.y,I.z,I.w),jt.copy(I))}function Rt(I,at){let ft=c.get(at);ft===void 0&&(ft=new WeakMap,c.set(at,ft));let St=ft.get(I);St===void 0&&(St=i.getUniformBlockIndex(at,I.name),ft.set(I,St))}function pt(I,at){const St=c.get(at).get(I);l.get(at)!==St&&(i.uniformBlockBinding(at,St,I.__bindingPointIndex),l.set(at,St))}function zt(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),h={},ut=null,_t={},u={},d=new WeakMap,p=[],g=null,x=!1,m=null,f=null,T=null,y=null,v=null,R=null,b=null,C=new Xt(0,0,0),D=0,E=!1,M=null,L=null,O=null,H=null,W=null,qt.set(0,0,i.canvas.width,i.canvas.height),jt.set(0,0,i.canvas.width,i.canvas.height),s.reset(),a.reset(),o.reset()}return{buffers:{color:s,depth:a,stencil:o},enable:tt,disable:xt,bindFramebuffer:Ct,drawBuffers:Et,useProgram:kt,setBlending:Q,setMaterial:$,setFlipSided:Z,setCullFace:J,setLineWidth:lt,setPolygonOffset:nt,setScissorTest:ht,activeTexture:Ft,bindTexture:Nt,unbindTexture:A,compressedTexImage2D:_,compressedTexImage3D:F,texImage2D:At,texImage3D:it,updateUBOMapping:Rt,uniformBlockBinding:pt,texStorage2D:ot,texStorage3D:Tt,texSubImage2D:V,texSubImage3D:j,compressedTexSubImage2D:X,compressedTexSubImage3D:wt,scissor:gt,viewport:It,reset:zt}}function Gm(i,t,e,n,r,s,a){const o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new ct,h=new WeakMap;let u;const d=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(A,_){return p?new OffscreenCanvas(A,_):Ui("canvas")}function x(A,_,F){let V=1;const j=Nt(A);if((j.width>F||j.height>F)&&(V=F/Math.max(j.width,j.height)),V<1)if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap||typeof VideoFrame<"u"&&A instanceof VideoFrame){const X=Math.floor(V*j.width),wt=Math.floor(V*j.height);u===void 0&&(u=g(X,wt));const ot=_?g(X,wt):u;return ot.width=X,ot.height=wt,ot.getContext("2d").drawImage(A,0,0,X,wt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+j.width+"x"+j.height+") to ("+X+"x"+wt+")."),ot}else return"data"in A&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+j.width+"x"+j.height+")."),A;return A}function m(A){return A.generateMipmaps}function f(A){i.generateMipmap(A)}function T(A){return A.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:A.isWebGL3DRenderTarget?i.TEXTURE_3D:A.isWebGLArrayRenderTarget||A.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function y(A,_,F,V,j=!1){if(A!==null){if(i[A]!==void 0)return i[A];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let X=_;if(_===i.RED&&(F===i.FLOAT&&(X=i.R32F),F===i.HALF_FLOAT&&(X=i.R16F),F===i.UNSIGNED_BYTE&&(X=i.R8)),_===i.RED_INTEGER&&(F===i.UNSIGNED_BYTE&&(X=i.R8UI),F===i.UNSIGNED_SHORT&&(X=i.R16UI),F===i.UNSIGNED_INT&&(X=i.R32UI),F===i.BYTE&&(X=i.R8I),F===i.SHORT&&(X=i.R16I),F===i.INT&&(X=i.R32I)),_===i.RG&&(F===i.FLOAT&&(X=i.RG32F),F===i.HALF_FLOAT&&(X=i.RG16F),F===i.UNSIGNED_BYTE&&(X=i.RG8)),_===i.RG_INTEGER&&(F===i.UNSIGNED_BYTE&&(X=i.RG8UI),F===i.UNSIGNED_SHORT&&(X=i.RG16UI),F===i.UNSIGNED_INT&&(X=i.RG32UI),F===i.BYTE&&(X=i.RG8I),F===i.SHORT&&(X=i.RG16I),F===i.INT&&(X=i.RG32I)),_===i.RGB_INTEGER&&(F===i.UNSIGNED_BYTE&&(X=i.RGB8UI),F===i.UNSIGNED_SHORT&&(X=i.RGB16UI),F===i.UNSIGNED_INT&&(X=i.RGB32UI),F===i.BYTE&&(X=i.RGB8I),F===i.SHORT&&(X=i.RGB16I),F===i.INT&&(X=i.RGB32I)),_===i.RGBA_INTEGER&&(F===i.UNSIGNED_BYTE&&(X=i.RGBA8UI),F===i.UNSIGNED_SHORT&&(X=i.RGBA16UI),F===i.UNSIGNED_INT&&(X=i.RGBA32UI),F===i.BYTE&&(X=i.RGBA8I),F===i.SHORT&&(X=i.RGBA16I),F===i.INT&&(X=i.RGBA32I)),_===i.RGB&&(F===i.UNSIGNED_INT_5_9_9_9_REV&&(X=i.RGB9_E5),F===i.UNSIGNED_INT_10F_11F_11F_REV&&(X=i.R11F_G11F_B10F)),_===i.RGBA){const wt=j?br:$t.getTransfer(V);F===i.FLOAT&&(X=i.RGBA32F),F===i.HALF_FLOAT&&(X=i.RGBA16F),F===i.UNSIGNED_BYTE&&(X=wt===te?i.SRGB8_ALPHA8:i.RGBA8),F===i.UNSIGNED_SHORT_4_4_4_4&&(X=i.RGBA4),F===i.UNSIGNED_SHORT_5_5_5_1&&(X=i.RGB5_A1)}return(X===i.R16F||X===i.R32F||X===i.RG16F||X===i.RG32F||X===i.RGBA16F||X===i.RGBA32F)&&t.get("EXT_color_buffer_float"),X}function v(A,_){let F;return A?_===null||_===In||_===Pi?F=i.DEPTH24_STENCIL8:_===Xe?F=i.DEPTH32F_STENCIL8:_===Ci&&(F=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):_===null||_===In||_===Pi?F=i.DEPTH_COMPONENT24:_===Xe?F=i.DEPTH_COMPONENT32F:_===Ci&&(F=i.DEPTH_COMPONENT16),F}function R(A,_){return m(A)===!0||A.isFramebufferTexture&&A.minFilter!==Ce&&A.minFilter!==We?Math.log2(Math.max(_.width,_.height))+1:A.mipmaps!==void 0&&A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?_.mipmaps.length:1}function b(A){const _=A.target;_.removeEventListener("dispose",b),D(_),_.isVideoTexture&&h.delete(_)}function C(A){const _=A.target;_.removeEventListener("dispose",C),M(_)}function D(A){const _=n.get(A);if(_.__webglInit===void 0)return;const F=A.source,V=d.get(F);if(V){const j=V[_.__cacheKey];j.usedTimes--,j.usedTimes===0&&E(A),Object.keys(V).length===0&&d.delete(F)}n.remove(A)}function E(A){const _=n.get(A);i.deleteTexture(_.__webglTexture);const F=A.source,V=d.get(F);delete V[_.__cacheKey],a.memory.textures--}function M(A){const _=n.get(A);if(A.depthTexture&&(A.depthTexture.dispose(),n.remove(A.depthTexture)),A.isWebGLCubeRenderTarget)for(let V=0;V<6;V++){if(Array.isArray(_.__webglFramebuffer[V]))for(let j=0;j<_.__webglFramebuffer[V].length;j++)i.deleteFramebuffer(_.__webglFramebuffer[V][j]);else i.deleteFramebuffer(_.__webglFramebuffer[V]);_.__webglDepthbuffer&&i.deleteRenderbuffer(_.__webglDepthbuffer[V])}else{if(Array.isArray(_.__webglFramebuffer))for(let V=0;V<_.__webglFramebuffer.length;V++)i.deleteFramebuffer(_.__webglFramebuffer[V]);else i.deleteFramebuffer(_.__webglFramebuffer);if(_.__webglDepthbuffer&&i.deleteRenderbuffer(_.__webglDepthbuffer),_.__webglMultisampledFramebuffer&&i.deleteFramebuffer(_.__webglMultisampledFramebuffer),_.__webglColorRenderbuffer)for(let V=0;V<_.__webglColorRenderbuffer.length;V++)_.__webglColorRenderbuffer[V]&&i.deleteRenderbuffer(_.__webglColorRenderbuffer[V]);_.__webglDepthRenderbuffer&&i.deleteRenderbuffer(_.__webglDepthRenderbuffer)}const F=A.textures;for(let V=0,j=F.length;V<j;V++){const X=n.get(F[V]);X.__webglTexture&&(i.deleteTexture(X.__webglTexture),a.memory.textures--),n.remove(F[V])}n.remove(A)}let L=0;function O(){L=0}function H(){const A=L;return A>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+A+" texture units while this GPU supports only "+r.maxTextures),L+=1,A}function W(A){const _=[];return _.push(A.wrapS),_.push(A.wrapT),_.push(A.wrapR||0),_.push(A.magFilter),_.push(A.minFilter),_.push(A.anisotropy),_.push(A.internalFormat),_.push(A.format),_.push(A.type),_.push(A.generateMipmaps),_.push(A.premultiplyAlpha),_.push(A.flipY),_.push(A.unpackAlignment),_.push(A.colorSpace),_.join()}function q(A,_){const F=n.get(A);if(A.isVideoTexture&&ht(A),A.isRenderTargetTexture===!1&&A.isExternalTexture!==!0&&A.version>0&&F.__version!==A.version){const V=A.image;if(V===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(V.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Y(F,A,_);return}}else A.isExternalTexture&&(F.__webglTexture=A.sourceTexture?A.sourceTexture:null);e.bindTexture(i.TEXTURE_2D,F.__webglTexture,i.TEXTURE0+_)}function k(A,_){const F=n.get(A);if(A.isRenderTargetTexture===!1&&A.version>0&&F.__version!==A.version){Y(F,A,_);return}e.bindTexture(i.TEXTURE_2D_ARRAY,F.__webglTexture,i.TEXTURE0+_)}function et(A,_){const F=n.get(A);if(A.isRenderTargetTexture===!1&&A.version>0&&F.__version!==A.version){Y(F,A,_);return}e.bindTexture(i.TEXTURE_3D,F.__webglTexture,i.TEXTURE0+_)}function G(A,_){const F=n.get(A);if(A.version>0&&F.__version!==A.version){tt(F,A,_);return}e.bindTexture(i.TEXTURE_CUBE_MAP,F.__webglTexture,i.TEXTURE0+_)}const ut={[Ps]:i.REPEAT,[Ln]:i.CLAMP_TO_EDGE,[Ls]:i.MIRRORED_REPEAT},_t={[Ce]:i.NEAREST,[Sl]:i.NEAREST_MIPMAP_NEAREST,[Wi]:i.NEAREST_MIPMAP_LINEAR,[We]:i.LINEAR,[Fr]:i.LINEAR_MIPMAP_NEAREST,[Dn]:i.LINEAR_MIPMAP_LINEAR},Mt={[Al]:i.NEVER,[Ll]:i.ALWAYS,[bl]:i.LESS,[tc]:i.LEQUAL,[wl]:i.EQUAL,[Pl]:i.GEQUAL,[Rl]:i.GREATER,[Cl]:i.NOTEQUAL};function Bt(A,_){if(_.type===Xe&&t.has("OES_texture_float_linear")===!1&&(_.magFilter===We||_.magFilter===Fr||_.magFilter===Wi||_.magFilter===Dn||_.minFilter===We||_.minFilter===Fr||_.minFilter===Wi||_.minFilter===Dn)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(A,i.TEXTURE_WRAP_S,ut[_.wrapS]),i.texParameteri(A,i.TEXTURE_WRAP_T,ut[_.wrapT]),(A===i.TEXTURE_3D||A===i.TEXTURE_2D_ARRAY)&&i.texParameteri(A,i.TEXTURE_WRAP_R,ut[_.wrapR]),i.texParameteri(A,i.TEXTURE_MAG_FILTER,_t[_.magFilter]),i.texParameteri(A,i.TEXTURE_MIN_FILTER,_t[_.minFilter]),_.compareFunction&&(i.texParameteri(A,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(A,i.TEXTURE_COMPARE_FUNC,Mt[_.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(_.magFilter===Ce||_.minFilter!==Wi&&_.minFilter!==Dn||_.type===Xe&&t.has("OES_texture_float_linear")===!1)return;if(_.anisotropy>1||n.get(_).__currentAnisotropy){const F=t.get("EXT_texture_filter_anisotropic");i.texParameterf(A,F.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(_.anisotropy,r.getMaxAnisotropy())),n.get(_).__currentAnisotropy=_.anisotropy}}}function qt(A,_){let F=!1;A.__webglInit===void 0&&(A.__webglInit=!0,_.addEventListener("dispose",b));const V=_.source;let j=d.get(V);j===void 0&&(j={},d.set(V,j));const X=W(_);if(X!==A.__cacheKey){j[X]===void 0&&(j[X]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,F=!0),j[X].usedTimes++;const wt=j[A.__cacheKey];wt!==void 0&&(j[A.__cacheKey].usedTimes--,wt.usedTimes===0&&E(_)),A.__cacheKey=X,A.__webglTexture=j[X].texture}return F}function jt(A,_,F){return Math.floor(Math.floor(A/F)/_)}function Yt(A,_,F,V){const X=A.updateRanges;if(X.length===0)e.texSubImage2D(i.TEXTURE_2D,0,0,0,_.width,_.height,F,V,_.data);else{X.sort((it,gt)=>it.start-gt.start);let wt=0;for(let it=1;it<X.length;it++){const gt=X[wt],It=X[it],Rt=gt.start+gt.count,pt=jt(It.start,_.width,4),zt=jt(gt.start,_.width,4);It.start<=Rt+1&&pt===zt&&jt(It.start+It.count-1,_.width,4)===pt?gt.count=Math.max(gt.count,It.start+It.count-gt.start):(++wt,X[wt]=It)}X.length=wt+1;const ot=i.getParameter(i.UNPACK_ROW_LENGTH),Tt=i.getParameter(i.UNPACK_SKIP_PIXELS),At=i.getParameter(i.UNPACK_SKIP_ROWS);i.pixelStorei(i.UNPACK_ROW_LENGTH,_.width);for(let it=0,gt=X.length;it<gt;it++){const It=X[it],Rt=Math.floor(It.start/4),pt=Math.ceil(It.count/4),zt=Rt%_.width,I=Math.floor(Rt/_.width),at=pt,ft=1;i.pixelStorei(i.UNPACK_SKIP_PIXELS,zt),i.pixelStorei(i.UNPACK_SKIP_ROWS,I),e.texSubImage2D(i.TEXTURE_2D,0,zt,I,at,ft,F,V,_.data)}A.clearUpdateRanges(),i.pixelStorei(i.UNPACK_ROW_LENGTH,ot),i.pixelStorei(i.UNPACK_SKIP_PIXELS,Tt),i.pixelStorei(i.UNPACK_SKIP_ROWS,At)}}function Y(A,_,F){let V=i.TEXTURE_2D;(_.isDataArrayTexture||_.isCompressedArrayTexture)&&(V=i.TEXTURE_2D_ARRAY),_.isData3DTexture&&(V=i.TEXTURE_3D);const j=qt(A,_),X=_.source;e.bindTexture(V,A.__webglTexture,i.TEXTURE0+F);const wt=n.get(X);if(X.version!==wt.__version||j===!0){e.activeTexture(i.TEXTURE0+F);const ot=$t.getPrimaries($t.workingColorSpace),Tt=_.colorSpace===pn?null:$t.getPrimaries(_.colorSpace),At=_.colorSpace===pn||ot===Tt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,_.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,_.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,At);let it=x(_.image,!1,r.maxTextureSize);it=Ft(_,it);const gt=s.convert(_.format,_.colorSpace),It=s.convert(_.type);let Rt=y(_.internalFormat,gt,It,_.colorSpace,_.isVideoTexture);Bt(V,_);let pt;const zt=_.mipmaps,I=_.isVideoTexture!==!0,at=wt.__version===void 0||j===!0,ft=X.dataReady,St=R(_,it);if(_.isDepthTexture)Rt=v(_.format===Di,_.type),at&&(I?e.texStorage2D(i.TEXTURE_2D,1,Rt,it.width,it.height):e.texImage2D(i.TEXTURE_2D,0,Rt,it.width,it.height,0,gt,It,null));else if(_.isDataTexture)if(zt.length>0){I&&at&&e.texStorage2D(i.TEXTURE_2D,St,Rt,zt[0].width,zt[0].height);for(let rt=0,K=zt.length;rt<K;rt++)pt=zt[rt],I?ft&&e.texSubImage2D(i.TEXTURE_2D,rt,0,0,pt.width,pt.height,gt,It,pt.data):e.texImage2D(i.TEXTURE_2D,rt,Rt,pt.width,pt.height,0,gt,It,pt.data);_.generateMipmaps=!1}else I?(at&&e.texStorage2D(i.TEXTURE_2D,St,Rt,it.width,it.height),ft&&Yt(_,it,gt,It)):e.texImage2D(i.TEXTURE_2D,0,Rt,it.width,it.height,0,gt,It,it.data);else if(_.isCompressedTexture)if(_.isCompressedArrayTexture){I&&at&&e.texStorage3D(i.TEXTURE_2D_ARRAY,St,Rt,zt[0].width,zt[0].height,it.depth);for(let rt=0,K=zt.length;rt<K;rt++)if(pt=zt[rt],_.format!==ze)if(gt!==null)if(I){if(ft)if(_.layerUpdates.size>0){const bt=xo(pt.width,pt.height,_.format,_.type);for(const Ot of _.layerUpdates){const se=pt.data.subarray(Ot*bt/pt.data.BYTES_PER_ELEMENT,(Ot+1)*bt/pt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,rt,0,0,Ot,pt.width,pt.height,1,gt,se)}_.clearLayerUpdates()}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,rt,0,0,0,pt.width,pt.height,it.depth,gt,pt.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,rt,Rt,pt.width,pt.height,it.depth,0,pt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else I?ft&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,rt,0,0,0,pt.width,pt.height,it.depth,gt,It,pt.data):e.texImage3D(i.TEXTURE_2D_ARRAY,rt,Rt,pt.width,pt.height,it.depth,0,gt,It,pt.data)}else{I&&at&&e.texStorage2D(i.TEXTURE_2D,St,Rt,zt[0].width,zt[0].height);for(let rt=0,K=zt.length;rt<K;rt++)pt=zt[rt],_.format!==ze?gt!==null?I?ft&&e.compressedTexSubImage2D(i.TEXTURE_2D,rt,0,0,pt.width,pt.height,gt,pt.data):e.compressedTexImage2D(i.TEXTURE_2D,rt,Rt,pt.width,pt.height,0,pt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):I?ft&&e.texSubImage2D(i.TEXTURE_2D,rt,0,0,pt.width,pt.height,gt,It,pt.data):e.texImage2D(i.TEXTURE_2D,rt,Rt,pt.width,pt.height,0,gt,It,pt.data)}else if(_.isDataArrayTexture)if(I){if(at&&e.texStorage3D(i.TEXTURE_2D_ARRAY,St,Rt,it.width,it.height,it.depth),ft)if(_.layerUpdates.size>0){const rt=xo(it.width,it.height,_.format,_.type);for(const K of _.layerUpdates){const bt=it.data.subarray(K*rt/it.data.BYTES_PER_ELEMENT,(K+1)*rt/it.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,K,it.width,it.height,1,gt,It,bt)}_.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,it.width,it.height,it.depth,gt,It,it.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,Rt,it.width,it.height,it.depth,0,gt,It,it.data);else if(_.isData3DTexture)I?(at&&e.texStorage3D(i.TEXTURE_3D,St,Rt,it.width,it.height,it.depth),ft&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,it.width,it.height,it.depth,gt,It,it.data)):e.texImage3D(i.TEXTURE_3D,0,Rt,it.width,it.height,it.depth,0,gt,It,it.data);else if(_.isFramebufferTexture){if(at)if(I)e.texStorage2D(i.TEXTURE_2D,St,Rt,it.width,it.height);else{let rt=it.width,K=it.height;for(let bt=0;bt<St;bt++)e.texImage2D(i.TEXTURE_2D,bt,Rt,rt,K,0,gt,It,null),rt>>=1,K>>=1}}else if(zt.length>0){if(I&&at){const rt=Nt(zt[0]);e.texStorage2D(i.TEXTURE_2D,St,Rt,rt.width,rt.height)}for(let rt=0,K=zt.length;rt<K;rt++)pt=zt[rt],I?ft&&e.texSubImage2D(i.TEXTURE_2D,rt,0,0,gt,It,pt):e.texImage2D(i.TEXTURE_2D,rt,Rt,gt,It,pt);_.generateMipmaps=!1}else if(I){if(at){const rt=Nt(it);e.texStorage2D(i.TEXTURE_2D,St,Rt,rt.width,rt.height)}ft&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,gt,It,it)}else e.texImage2D(i.TEXTURE_2D,0,Rt,gt,It,it);m(_)&&f(V),wt.__version=X.version,_.onUpdate&&_.onUpdate(_)}A.__version=_.version}function tt(A,_,F){if(_.image.length!==6)return;const V=qt(A,_),j=_.source;e.bindTexture(i.TEXTURE_CUBE_MAP,A.__webglTexture,i.TEXTURE0+F);const X=n.get(j);if(j.version!==X.__version||V===!0){e.activeTexture(i.TEXTURE0+F);const wt=$t.getPrimaries($t.workingColorSpace),ot=_.colorSpace===pn?null:$t.getPrimaries(_.colorSpace),Tt=_.colorSpace===pn||wt===ot?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,_.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,_.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Tt);const At=_.isCompressedTexture||_.image[0].isCompressedTexture,it=_.image[0]&&_.image[0].isDataTexture,gt=[];for(let K=0;K<6;K++)!At&&!it?gt[K]=x(_.image[K],!0,r.maxCubemapSize):gt[K]=it?_.image[K].image:_.image[K],gt[K]=Ft(_,gt[K]);const It=gt[0],Rt=s.convert(_.format,_.colorSpace),pt=s.convert(_.type),zt=y(_.internalFormat,Rt,pt,_.colorSpace),I=_.isVideoTexture!==!0,at=X.__version===void 0||V===!0,ft=j.dataReady;let St=R(_,It);Bt(i.TEXTURE_CUBE_MAP,_);let rt;if(At){I&&at&&e.texStorage2D(i.TEXTURE_CUBE_MAP,St,zt,It.width,It.height);for(let K=0;K<6;K++){rt=gt[K].mipmaps;for(let bt=0;bt<rt.length;bt++){const Ot=rt[bt];_.format!==ze?Rt!==null?I?ft&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,bt,0,0,Ot.width,Ot.height,Rt,Ot.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,bt,zt,Ot.width,Ot.height,0,Ot.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):I?ft&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,bt,0,0,Ot.width,Ot.height,Rt,pt,Ot.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,bt,zt,Ot.width,Ot.height,0,Rt,pt,Ot.data)}}}else{if(rt=_.mipmaps,I&&at){rt.length>0&&St++;const K=Nt(gt[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,St,zt,K.width,K.height)}for(let K=0;K<6;K++)if(it){I?ft&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,0,0,gt[K].width,gt[K].height,Rt,pt,gt[K].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,zt,gt[K].width,gt[K].height,0,Rt,pt,gt[K].data);for(let bt=0;bt<rt.length;bt++){const se=rt[bt].image[K].image;I?ft&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,bt+1,0,0,se.width,se.height,Rt,pt,se.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,bt+1,zt,se.width,se.height,0,Rt,pt,se.data)}}else{I?ft&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,0,0,Rt,pt,gt[K]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,zt,Rt,pt,gt[K]);for(let bt=0;bt<rt.length;bt++){const Ot=rt[bt];I?ft&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,bt+1,0,0,Rt,pt,Ot.image[K]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,bt+1,zt,Rt,pt,Ot.image[K])}}}m(_)&&f(i.TEXTURE_CUBE_MAP),X.__version=j.version,_.onUpdate&&_.onUpdate(_)}A.__version=_.version}function xt(A,_,F,V,j,X){const wt=s.convert(F.format,F.colorSpace),ot=s.convert(F.type),Tt=y(F.internalFormat,wt,ot,F.colorSpace),At=n.get(_),it=n.get(F);if(it.__renderTarget=_,!At.__hasExternalTextures){const gt=Math.max(1,_.width>>X),It=Math.max(1,_.height>>X);j===i.TEXTURE_3D||j===i.TEXTURE_2D_ARRAY?e.texImage3D(j,X,Tt,gt,It,_.depth,0,wt,ot,null):e.texImage2D(j,X,Tt,gt,It,0,wt,ot,null)}e.bindFramebuffer(i.FRAMEBUFFER,A),nt(_)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,V,j,it.__webglTexture,0,lt(_)):(j===i.TEXTURE_2D||j>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&j<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,V,j,it.__webglTexture,X),e.bindFramebuffer(i.FRAMEBUFFER,null)}function Ct(A,_,F){if(i.bindRenderbuffer(i.RENDERBUFFER,A),_.depthBuffer){const V=_.depthTexture,j=V&&V.isDepthTexture?V.type:null,X=v(_.stencilBuffer,j),wt=_.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ot=lt(_);nt(_)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ot,X,_.width,_.height):F?i.renderbufferStorageMultisample(i.RENDERBUFFER,ot,X,_.width,_.height):i.renderbufferStorage(i.RENDERBUFFER,X,_.width,_.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,wt,i.RENDERBUFFER,A)}else{const V=_.textures;for(let j=0;j<V.length;j++){const X=V[j],wt=s.convert(X.format,X.colorSpace),ot=s.convert(X.type),Tt=y(X.internalFormat,wt,ot,X.colorSpace),At=lt(_);F&&nt(_)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,At,Tt,_.width,_.height):nt(_)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,At,Tt,_.width,_.height):i.renderbufferStorage(i.RENDERBUFFER,Tt,_.width,_.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Et(A,_){if(_&&_.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,A),!(_.depthTexture&&_.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const V=n.get(_.depthTexture);V.__renderTarget=_,(!V.__webglTexture||_.depthTexture.image.width!==_.width||_.depthTexture.image.height!==_.height)&&(_.depthTexture.image.width=_.width,_.depthTexture.image.height=_.height,_.depthTexture.needsUpdate=!0),q(_.depthTexture,0);const j=V.__webglTexture,X=lt(_);if(_.depthTexture.format===Li)nt(_)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,j,0,X):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,j,0);else if(_.depthTexture.format===Di)nt(_)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,j,0,X):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,j,0);else throw new Error("Unknown depthTexture format")}function kt(A){const _=n.get(A),F=A.isWebGLCubeRenderTarget===!0;if(_.__boundDepthTexture!==A.depthTexture){const V=A.depthTexture;if(_.__depthDisposeCallback&&_.__depthDisposeCallback(),V){const j=()=>{delete _.__boundDepthTexture,delete _.__depthDisposeCallback,V.removeEventListener("dispose",j)};V.addEventListener("dispose",j),_.__depthDisposeCallback=j}_.__boundDepthTexture=V}if(A.depthTexture&&!_.__autoAllocateDepthBuffer){if(F)throw new Error("target.depthTexture not supported in Cube render targets");const V=A.texture.mipmaps;V&&V.length>0?Et(_.__webglFramebuffer[0],A):Et(_.__webglFramebuffer,A)}else if(F){_.__webglDepthbuffer=[];for(let V=0;V<6;V++)if(e.bindFramebuffer(i.FRAMEBUFFER,_.__webglFramebuffer[V]),_.__webglDepthbuffer[V]===void 0)_.__webglDepthbuffer[V]=i.createRenderbuffer(),Ct(_.__webglDepthbuffer[V],A,!1);else{const j=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,X=_.__webglDepthbuffer[V];i.bindRenderbuffer(i.RENDERBUFFER,X),i.framebufferRenderbuffer(i.FRAMEBUFFER,j,i.RENDERBUFFER,X)}}else{const V=A.texture.mipmaps;if(V&&V.length>0?e.bindFramebuffer(i.FRAMEBUFFER,_.__webglFramebuffer[0]):e.bindFramebuffer(i.FRAMEBUFFER,_.__webglFramebuffer),_.__webglDepthbuffer===void 0)_.__webglDepthbuffer=i.createRenderbuffer(),Ct(_.__webglDepthbuffer,A,!1);else{const j=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,X=_.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,X),i.framebufferRenderbuffer(i.FRAMEBUFFER,j,i.RENDERBUFFER,X)}}e.bindFramebuffer(i.FRAMEBUFFER,null)}function re(A,_,F){const V=n.get(A);_!==void 0&&xt(V.__webglFramebuffer,A,A.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),F!==void 0&&kt(A)}function w(A){const _=A.texture,F=n.get(A),V=n.get(_);A.addEventListener("dispose",C);const j=A.textures,X=A.isWebGLCubeRenderTarget===!0,wt=j.length>1;if(wt||(V.__webglTexture===void 0&&(V.__webglTexture=i.createTexture()),V.__version=_.version,a.memory.textures++),X){F.__webglFramebuffer=[];for(let ot=0;ot<6;ot++)if(_.mipmaps&&_.mipmaps.length>0){F.__webglFramebuffer[ot]=[];for(let Tt=0;Tt<_.mipmaps.length;Tt++)F.__webglFramebuffer[ot][Tt]=i.createFramebuffer()}else F.__webglFramebuffer[ot]=i.createFramebuffer()}else{if(_.mipmaps&&_.mipmaps.length>0){F.__webglFramebuffer=[];for(let ot=0;ot<_.mipmaps.length;ot++)F.__webglFramebuffer[ot]=i.createFramebuffer()}else F.__webglFramebuffer=i.createFramebuffer();if(wt)for(let ot=0,Tt=j.length;ot<Tt;ot++){const At=n.get(j[ot]);At.__webglTexture===void 0&&(At.__webglTexture=i.createTexture(),a.memory.textures++)}if(A.samples>0&&nt(A)===!1){F.__webglMultisampledFramebuffer=i.createFramebuffer(),F.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,F.__webglMultisampledFramebuffer);for(let ot=0;ot<j.length;ot++){const Tt=j[ot];F.__webglColorRenderbuffer[ot]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,F.__webglColorRenderbuffer[ot]);const At=s.convert(Tt.format,Tt.colorSpace),it=s.convert(Tt.type),gt=y(Tt.internalFormat,At,it,Tt.colorSpace,A.isXRRenderTarget===!0),It=lt(A);i.renderbufferStorageMultisample(i.RENDERBUFFER,It,gt,A.width,A.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ot,i.RENDERBUFFER,F.__webglColorRenderbuffer[ot])}i.bindRenderbuffer(i.RENDERBUFFER,null),A.depthBuffer&&(F.__webglDepthRenderbuffer=i.createRenderbuffer(),Ct(F.__webglDepthRenderbuffer,A,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(X){e.bindTexture(i.TEXTURE_CUBE_MAP,V.__webglTexture),Bt(i.TEXTURE_CUBE_MAP,_);for(let ot=0;ot<6;ot++)if(_.mipmaps&&_.mipmaps.length>0)for(let Tt=0;Tt<_.mipmaps.length;Tt++)xt(F.__webglFramebuffer[ot][Tt],A,_,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ot,Tt);else xt(F.__webglFramebuffer[ot],A,_,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ot,0);m(_)&&f(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(wt){for(let ot=0,Tt=j.length;ot<Tt;ot++){const At=j[ot],it=n.get(At);let gt=i.TEXTURE_2D;(A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(gt=A.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(gt,it.__webglTexture),Bt(gt,At),xt(F.__webglFramebuffer,A,At,i.COLOR_ATTACHMENT0+ot,gt,0),m(At)&&f(gt)}e.unbindTexture()}else{let ot=i.TEXTURE_2D;if((A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(ot=A.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(ot,V.__webglTexture),Bt(ot,_),_.mipmaps&&_.mipmaps.length>0)for(let Tt=0;Tt<_.mipmaps.length;Tt++)xt(F.__webglFramebuffer[Tt],A,_,i.COLOR_ATTACHMENT0,ot,Tt);else xt(F.__webglFramebuffer,A,_,i.COLOR_ATTACHMENT0,ot,0);m(_)&&f(ot),e.unbindTexture()}A.depthBuffer&&kt(A)}function Q(A){const _=A.textures;for(let F=0,V=_.length;F<V;F++){const j=_[F];if(m(j)){const X=T(A),wt=n.get(j).__webglTexture;e.bindTexture(X,wt),f(X),e.unbindTexture()}}}const $=[],Z=[];function J(A){if(A.samples>0){if(nt(A)===!1){const _=A.textures,F=A.width,V=A.height;let j=i.COLOR_BUFFER_BIT;const X=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,wt=n.get(A),ot=_.length>1;if(ot)for(let At=0;At<_.length;At++)e.bindFramebuffer(i.FRAMEBUFFER,wt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+At,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,wt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+At,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,wt.__webglMultisampledFramebuffer);const Tt=A.texture.mipmaps;Tt&&Tt.length>0?e.bindFramebuffer(i.DRAW_FRAMEBUFFER,wt.__webglFramebuffer[0]):e.bindFramebuffer(i.DRAW_FRAMEBUFFER,wt.__webglFramebuffer);for(let At=0;At<_.length;At++){if(A.resolveDepthBuffer&&(A.depthBuffer&&(j|=i.DEPTH_BUFFER_BIT),A.stencilBuffer&&A.resolveStencilBuffer&&(j|=i.STENCIL_BUFFER_BIT)),ot){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,wt.__webglColorRenderbuffer[At]);const it=n.get(_[At]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,it,0)}i.blitFramebuffer(0,0,F,V,0,0,F,V,j,i.NEAREST),l===!0&&($.length=0,Z.length=0,$.push(i.COLOR_ATTACHMENT0+At),A.depthBuffer&&A.resolveDepthBuffer===!1&&($.push(X),Z.push(X),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,Z)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,$))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),ot)for(let At=0;At<_.length;At++){e.bindFramebuffer(i.FRAMEBUFFER,wt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+At,i.RENDERBUFFER,wt.__webglColorRenderbuffer[At]);const it=n.get(_[At]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,wt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+At,i.TEXTURE_2D,it,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,wt.__webglMultisampledFramebuffer)}else if(A.depthBuffer&&A.resolveDepthBuffer===!1&&l){const _=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[_])}}}function lt(A){return Math.min(r.maxSamples,A.samples)}function nt(A){const _=n.get(A);return A.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&_.__useRenderToTexture!==!1}function ht(A){const _=a.render.frame;h.get(A)!==_&&(h.set(A,_),A.update())}function Ft(A,_){const F=A.colorSpace,V=A.format,j=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||F!==hi&&F!==pn&&($t.getTransfer(F)===te?(V!==ze||j!==Ye)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",F)),_}function Nt(A){return typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement?(c.width=A.naturalWidth||A.width,c.height=A.naturalHeight||A.height):typeof VideoFrame<"u"&&A instanceof VideoFrame?(c.width=A.displayWidth,c.height=A.displayHeight):(c.width=A.width,c.height=A.height),c}this.allocateTextureUnit=H,this.resetTextureUnits=O,this.setTexture2D=q,this.setTexture2DArray=k,this.setTexture3D=et,this.setTextureCube=G,this.rebindTextures=re,this.setupRenderTarget=w,this.updateRenderTargetMipmap=Q,this.updateMultisampleRenderTarget=J,this.setupDepthRenderbuffer=kt,this.setupFrameBufferTexture=xt,this.useMultisampledRTT=nt}function km(i,t){function e(n,r=pn){let s;const a=$t.getTransfer(r);if(n===Ye)return i.UNSIGNED_BYTE;if(n===ha)return i.UNSIGNED_SHORT_4_4_4_4;if(n===ua)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Zo)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===$o)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===Yo)return i.BYTE;if(n===Jo)return i.SHORT;if(n===Ci)return i.UNSIGNED_SHORT;if(n===la)return i.INT;if(n===In)return i.UNSIGNED_INT;if(n===Xe)return i.FLOAT;if(n===zi)return i.HALF_FLOAT;if(n===Ko)return i.ALPHA;if(n===jo)return i.RGB;if(n===ze)return i.RGBA;if(n===Li)return i.DEPTH_COMPONENT;if(n===Di)return i.DEPTH_STENCIL;if(n===fa)return i.RED;if(n===da)return i.RED_INTEGER;if(n===Qo)return i.RG;if(n===pa)return i.RG_INTEGER;if(n===ma)return i.RGBA_INTEGER;if(n===Sr||n===yr||n===Er||n===Tr)if(a===te)if(s=t.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===Sr)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===yr)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Er)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Tr)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=t.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===Sr)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===yr)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Er)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Tr)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Ds||n===Is||n===Us||n===Ns)if(s=t.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===Ds)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Is)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Us)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Ns)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Fs||n===Os||n===Bs)if(s=t.get("WEBGL_compressed_texture_etc"),s!==null){if(n===Fs||n===Os)return a===te?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===Bs)return a===te?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===zs||n===Hs||n===Vs||n===Gs||n===ks||n===Ws||n===Xs||n===qs||n===Ys||n===Js||n===Zs||n===$s||n===Ks||n===js)if(s=t.get("WEBGL_compressed_texture_astc"),s!==null){if(n===zs)return a===te?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Hs)return a===te?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Vs)return a===te?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Gs)return a===te?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===ks)return a===te?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Ws)return a===te?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Xs)return a===te?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===qs)return a===te?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Ys)return a===te?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Js)return a===te?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Zs)return a===te?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===$s)return a===te?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Ks)return a===te?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===js)return a===te?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Qs||n===ta||n===ea)if(s=t.get("EXT_texture_compression_bptc"),s!==null){if(n===Qs)return a===te?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===ta)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===ea)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===na||n===ia||n===ra||n===sa)if(s=t.get("EXT_texture_compression_rgtc"),s!==null){if(n===na)return s.COMPRESSED_RED_RGTC1_EXT;if(n===ia)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===ra)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===sa)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Pi?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}const Wm=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Xm=`
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

}`;class qm{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){const n=new dc(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new on({vertexShader:Wm,fragmentShader:Xm,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new He(new Dr(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Ym extends Fn{constructor(t,e){super();const n=this;let r=null,s=1,a=null,o="local-floor",l=1,c=null,h=null,u=null,d=null,p=null,g=null;const x=typeof XRWebGLBinding<"u",m=new qm,f={},T=e.getContextAttributes();let y=null,v=null;const R=[],b=[],C=new ct;let D=null;const E=new Ue;E.viewport=new ee;const M=new Ue;M.viewport=new ee;const L=[E,M],O=new du;let H=null,W=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Y){let tt=R[Y];return tt===void 0&&(tt=new is,R[Y]=tt),tt.getTargetRaySpace()},this.getControllerGrip=function(Y){let tt=R[Y];return tt===void 0&&(tt=new is,R[Y]=tt),tt.getGripSpace()},this.getHand=function(Y){let tt=R[Y];return tt===void 0&&(tt=new is,R[Y]=tt),tt.getHandSpace()};function q(Y){const tt=b.indexOf(Y.inputSource);if(tt===-1)return;const xt=R[tt];xt!==void 0&&(xt.update(Y.inputSource,Y.frame,c||a),xt.dispatchEvent({type:Y.type,data:Y.inputSource}))}function k(){r.removeEventListener("select",q),r.removeEventListener("selectstart",q),r.removeEventListener("selectend",q),r.removeEventListener("squeeze",q),r.removeEventListener("squeezestart",q),r.removeEventListener("squeezeend",q),r.removeEventListener("end",k),r.removeEventListener("inputsourceschange",et);for(let Y=0;Y<R.length;Y++){const tt=b[Y];tt!==null&&(b[Y]=null,R[Y].disconnect(tt))}H=null,W=null,m.reset();for(const Y in f)delete f[Y];t.setRenderTarget(y),p=null,d=null,u=null,r=null,v=null,Yt.stop(),n.isPresenting=!1,t.setPixelRatio(D),t.setSize(C.width,C.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Y){s=Y,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Y){o=Y,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(Y){c=Y},this.getBaseLayer=function(){return d!==null?d:p},this.getBinding=function(){return u===null&&x&&(u=new XRWebGLBinding(r,e)),u},this.getFrame=function(){return g},this.getSession=function(){return r},this.setSession=async function(Y){if(r=Y,r!==null){if(y=t.getRenderTarget(),r.addEventListener("select",q),r.addEventListener("selectstart",q),r.addEventListener("selectend",q),r.addEventListener("squeeze",q),r.addEventListener("squeezestart",q),r.addEventListener("squeezeend",q),r.addEventListener("end",k),r.addEventListener("inputsourceschange",et),T.xrCompatible!==!0&&await e.makeXRCompatible(),D=t.getPixelRatio(),t.getSize(C),x&&"createProjectionLayer"in XRWebGLBinding.prototype){let xt=null,Ct=null,Et=null;T.depth&&(Et=T.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,xt=T.stencil?Di:Li,Ct=T.stencil?Pi:In);const kt={colorFormat:e.RGBA8,depthFormat:Et,scaleFactor:s};u=this.getBinding(),d=u.createProjectionLayer(kt),r.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),v=new Un(d.textureWidth,d.textureHeight,{format:ze,type:Ye,depthTexture:new fc(d.textureWidth,d.textureHeight,Ct,void 0,void 0,void 0,void 0,void 0,void 0,xt),stencilBuffer:T.stencil,colorSpace:t.outputColorSpace,samples:T.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}else{const xt={antialias:T.antialias,alpha:!0,depth:T.depth,stencil:T.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(r,e,xt),r.updateRenderState({baseLayer:p}),t.setPixelRatio(1),t.setSize(p.framebufferWidth,p.framebufferHeight,!1),v=new Un(p.framebufferWidth,p.framebufferHeight,{format:ze,type:Ye,colorSpace:t.outputColorSpace,stencilBuffer:T.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1})}v.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await r.requestReferenceSpace(o),Yt.setContext(r),Yt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function et(Y){for(let tt=0;tt<Y.removed.length;tt++){const xt=Y.removed[tt],Ct=b.indexOf(xt);Ct>=0&&(b[Ct]=null,R[Ct].disconnect(xt))}for(let tt=0;tt<Y.added.length;tt++){const xt=Y.added[tt];let Ct=b.indexOf(xt);if(Ct===-1){for(let kt=0;kt<R.length;kt++)if(kt>=b.length){b.push(xt),Ct=kt;break}else if(b[kt]===null){b[kt]=xt,Ct=kt;break}if(Ct===-1)break}const Et=R[Ct];Et&&Et.connect(xt)}}const G=new P,ut=new P;function _t(Y,tt,xt){G.setFromMatrixPosition(tt.matrixWorld),ut.setFromMatrixPosition(xt.matrixWorld);const Ct=G.distanceTo(ut),Et=tt.projectionMatrix.elements,kt=xt.projectionMatrix.elements,re=Et[14]/(Et[10]-1),w=Et[14]/(Et[10]+1),Q=(Et[9]+1)/Et[5],$=(Et[9]-1)/Et[5],Z=(Et[8]-1)/Et[0],J=(kt[8]+1)/kt[0],lt=re*Z,nt=re*J,ht=Ct/(-Z+J),Ft=ht*-Z;if(tt.matrixWorld.decompose(Y.position,Y.quaternion,Y.scale),Y.translateX(Ft),Y.translateZ(ht),Y.matrixWorld.compose(Y.position,Y.quaternion,Y.scale),Y.matrixWorldInverse.copy(Y.matrixWorld).invert(),Et[10]===-1)Y.projectionMatrix.copy(tt.projectionMatrix),Y.projectionMatrixInverse.copy(tt.projectionMatrixInverse);else{const Nt=re+ht,A=w+ht,_=lt-Ft,F=nt+(Ct-Ft),V=Q*w/A*Nt,j=$*w/A*Nt;Y.projectionMatrix.makePerspective(_,F,V,j,Nt,A),Y.projectionMatrixInverse.copy(Y.projectionMatrix).invert()}}function Mt(Y,tt){tt===null?Y.matrixWorld.copy(Y.matrix):Y.matrixWorld.multiplyMatrices(tt.matrixWorld,Y.matrix),Y.matrixWorldInverse.copy(Y.matrixWorld).invert()}this.updateCamera=function(Y){if(r===null)return;let tt=Y.near,xt=Y.far;m.texture!==null&&(m.depthNear>0&&(tt=m.depthNear),m.depthFar>0&&(xt=m.depthFar)),O.near=M.near=E.near=tt,O.far=M.far=E.far=xt,(H!==O.near||W!==O.far)&&(r.updateRenderState({depthNear:O.near,depthFar:O.far}),H=O.near,W=O.far),O.layers.mask=Y.layers.mask|6,E.layers.mask=O.layers.mask&3,M.layers.mask=O.layers.mask&5;const Ct=Y.parent,Et=O.cameras;Mt(O,Ct);for(let kt=0;kt<Et.length;kt++)Mt(Et[kt],Ct);Et.length===2?_t(O,E,M):O.projectionMatrix.copy(E.projectionMatrix),Bt(Y,O,Ct)};function Bt(Y,tt,xt){xt===null?Y.matrix.copy(tt.matrixWorld):(Y.matrix.copy(xt.matrixWorld),Y.matrix.invert(),Y.matrix.multiply(tt.matrixWorld)),Y.matrix.decompose(Y.position,Y.quaternion,Y.scale),Y.updateMatrixWorld(!0),Y.projectionMatrix.copy(tt.projectionMatrix),Y.projectionMatrixInverse.copy(tt.projectionMatrixInverse),Y.isPerspectiveCamera&&(Y.fov=Ii*2*Math.atan(1/Y.projectionMatrix.elements[5]),Y.zoom=1)}this.getCamera=function(){return O},this.getFoveation=function(){if(!(d===null&&p===null))return l},this.setFoveation=function(Y){l=Y,d!==null&&(d.fixedFoveation=Y),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=Y)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(O)},this.getCameraTexture=function(Y){return f[Y]};let qt=null;function jt(Y,tt){if(h=tt.getViewerPose(c||a),g=tt,h!==null){const xt=h.views;p!==null&&(t.setRenderTargetFramebuffer(v,p.framebuffer),t.setRenderTarget(v));let Ct=!1;xt.length!==O.cameras.length&&(O.cameras.length=0,Ct=!0);for(let w=0;w<xt.length;w++){const Q=xt[w];let $=null;if(p!==null)$=p.getViewport(Q);else{const J=u.getViewSubImage(d,Q);$=J.viewport,w===0&&(t.setRenderTargetTextures(v,J.colorTexture,J.depthStencilTexture),t.setRenderTarget(v))}let Z=L[w];Z===void 0&&(Z=new Ue,Z.layers.enable(w),Z.viewport=new ee,L[w]=Z),Z.matrix.fromArray(Q.transform.matrix),Z.matrix.decompose(Z.position,Z.quaternion,Z.scale),Z.projectionMatrix.fromArray(Q.projectionMatrix),Z.projectionMatrixInverse.copy(Z.projectionMatrix).invert(),Z.viewport.set($.x,$.y,$.width,$.height),w===0&&(O.matrix.copy(Z.matrix),O.matrix.decompose(O.position,O.quaternion,O.scale)),Ct===!0&&O.cameras.push(Z)}const Et=r.enabledFeatures;if(Et&&Et.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&x){u=n.getBinding();const w=u.getDepthInformation(xt[0]);w&&w.isValid&&w.texture&&m.init(w,r.renderState)}if(Et&&Et.includes("camera-access")&&x){t.state.unbindTexture(),u=n.getBinding();for(let w=0;w<xt.length;w++){const Q=xt[w].camera;if(Q){let $=f[Q];$||($=new dc,f[Q]=$);const Z=u.getCameraImage(Q);$.sourceTexture=Z}}}}for(let xt=0;xt<R.length;xt++){const Ct=b[xt],Et=R[xt];Ct!==null&&Et!==void 0&&Et.update(Ct,tt,c||a)}qt&&qt(Y,tt),tt.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:tt}),g=null}const Yt=new Uc;Yt.setAnimationLoop(jt),this.setAnimationLoop=function(Y){qt=Y},this.dispose=function(){}}}const bn=new Je,Jm=new ie;function Zm(i,t){function e(m,f){m.matrixAutoUpdate===!0&&m.updateMatrix(),f.value.copy(m.matrix)}function n(m,f){f.color.getRGB(m.fogColor.value,lc(i)),f.isFog?(m.fogNear.value=f.near,m.fogFar.value=f.far):f.isFogExp2&&(m.fogDensity.value=f.density)}function r(m,f,T,y,v){f.isMeshBasicMaterial||f.isMeshLambertMaterial?s(m,f):f.isMeshToonMaterial?(s(m,f),u(m,f)):f.isMeshPhongMaterial?(s(m,f),h(m,f)):f.isMeshStandardMaterial?(s(m,f),d(m,f),f.isMeshPhysicalMaterial&&p(m,f,v)):f.isMeshMatcapMaterial?(s(m,f),g(m,f)):f.isMeshDepthMaterial?s(m,f):f.isMeshDistanceMaterial?(s(m,f),x(m,f)):f.isMeshNormalMaterial?s(m,f):f.isLineBasicMaterial?(a(m,f),f.isLineDashedMaterial&&o(m,f)):f.isPointsMaterial?l(m,f,T,y):f.isSpriteMaterial?c(m,f):f.isShadowMaterial?(m.color.value.copy(f.color),m.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function s(m,f){m.opacity.value=f.opacity,f.color&&m.diffuse.value.copy(f.color),f.emissive&&m.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(m.map.value=f.map,e(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,e(f.alphaMap,m.alphaMapTransform)),f.bumpMap&&(m.bumpMap.value=f.bumpMap,e(f.bumpMap,m.bumpMapTransform),m.bumpScale.value=f.bumpScale,f.side===Te&&(m.bumpScale.value*=-1)),f.normalMap&&(m.normalMap.value=f.normalMap,e(f.normalMap,m.normalMapTransform),m.normalScale.value.copy(f.normalScale),f.side===Te&&m.normalScale.value.negate()),f.displacementMap&&(m.displacementMap.value=f.displacementMap,e(f.displacementMap,m.displacementMapTransform),m.displacementScale.value=f.displacementScale,m.displacementBias.value=f.displacementBias),f.emissiveMap&&(m.emissiveMap.value=f.emissiveMap,e(f.emissiveMap,m.emissiveMapTransform)),f.specularMap&&(m.specularMap.value=f.specularMap,e(f.specularMap,m.specularMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest);const T=t.get(f),y=T.envMap,v=T.envMapRotation;y&&(m.envMap.value=y,bn.copy(v),bn.x*=-1,bn.y*=-1,bn.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(bn.y*=-1,bn.z*=-1),m.envMapRotation.value.setFromMatrix4(Jm.makeRotationFromEuler(bn)),m.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=f.reflectivity,m.ior.value=f.ior,m.refractionRatio.value=f.refractionRatio),f.lightMap&&(m.lightMap.value=f.lightMap,m.lightMapIntensity.value=f.lightMapIntensity,e(f.lightMap,m.lightMapTransform)),f.aoMap&&(m.aoMap.value=f.aoMap,m.aoMapIntensity.value=f.aoMapIntensity,e(f.aoMap,m.aoMapTransform))}function a(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,f.map&&(m.map.value=f.map,e(f.map,m.mapTransform))}function o(m,f){m.dashSize.value=f.dashSize,m.totalSize.value=f.dashSize+f.gapSize,m.scale.value=f.scale}function l(m,f,T,y){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.size.value=f.size*T,m.scale.value=y*.5,f.map&&(m.map.value=f.map,e(f.map,m.uvTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,e(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function c(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.rotation.value=f.rotation,f.map&&(m.map.value=f.map,e(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,e(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function h(m,f){m.specular.value.copy(f.specular),m.shininess.value=Math.max(f.shininess,1e-4)}function u(m,f){f.gradientMap&&(m.gradientMap.value=f.gradientMap)}function d(m,f){m.metalness.value=f.metalness,f.metalnessMap&&(m.metalnessMap.value=f.metalnessMap,e(f.metalnessMap,m.metalnessMapTransform)),m.roughness.value=f.roughness,f.roughnessMap&&(m.roughnessMap.value=f.roughnessMap,e(f.roughnessMap,m.roughnessMapTransform)),f.envMap&&(m.envMapIntensity.value=f.envMapIntensity)}function p(m,f,T){m.ior.value=f.ior,f.sheen>0&&(m.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),m.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(m.sheenColorMap.value=f.sheenColorMap,e(f.sheenColorMap,m.sheenColorMapTransform)),f.sheenRoughnessMap&&(m.sheenRoughnessMap.value=f.sheenRoughnessMap,e(f.sheenRoughnessMap,m.sheenRoughnessMapTransform))),f.clearcoat>0&&(m.clearcoat.value=f.clearcoat,m.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(m.clearcoatMap.value=f.clearcoatMap,e(f.clearcoatMap,m.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,e(f.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(m.clearcoatNormalMap.value=f.clearcoatNormalMap,e(f.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===Te&&m.clearcoatNormalScale.value.negate())),f.dispersion>0&&(m.dispersion.value=f.dispersion),f.iridescence>0&&(m.iridescence.value=f.iridescence,m.iridescenceIOR.value=f.iridescenceIOR,m.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(m.iridescenceMap.value=f.iridescenceMap,e(f.iridescenceMap,m.iridescenceMapTransform)),f.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=f.iridescenceThicknessMap,e(f.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),f.transmission>0&&(m.transmission.value=f.transmission,m.transmissionSamplerMap.value=T.texture,m.transmissionSamplerSize.value.set(T.width,T.height),f.transmissionMap&&(m.transmissionMap.value=f.transmissionMap,e(f.transmissionMap,m.transmissionMapTransform)),m.thickness.value=f.thickness,f.thicknessMap&&(m.thicknessMap.value=f.thicknessMap,e(f.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=f.attenuationDistance,m.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(m.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(m.anisotropyMap.value=f.anisotropyMap,e(f.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=f.specularIntensity,m.specularColor.value.copy(f.specularColor),f.specularColorMap&&(m.specularColorMap.value=f.specularColorMap,e(f.specularColorMap,m.specularColorMapTransform)),f.specularIntensityMap&&(m.specularIntensityMap.value=f.specularIntensityMap,e(f.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,f){f.matcap&&(m.matcap.value=f.matcap)}function x(m,f){const T=t.get(f).light;m.referencePosition.value.setFromMatrixPosition(T.matrixWorld),m.nearDistance.value=T.shadow.camera.near,m.farDistance.value=T.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:r}}function $m(i,t,e,n){let r={},s={},a=[];const o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(T,y){const v=y.program;n.uniformBlockBinding(T,v)}function c(T,y){let v=r[T.id];v===void 0&&(g(T),v=h(T),r[T.id]=v,T.addEventListener("dispose",m));const R=y.program;n.updateUBOMapping(T,R);const b=t.render.frame;s[T.id]!==b&&(d(T),s[T.id]=b)}function h(T){const y=u();T.__bindingPointIndex=y;const v=i.createBuffer(),R=T.__size,b=T.usage;return i.bindBuffer(i.UNIFORM_BUFFER,v),i.bufferData(i.UNIFORM_BUFFER,R,b),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,y,v),v}function u(){for(let T=0;T<o;T++)if(a.indexOf(T)===-1)return a.push(T),T;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(T){const y=r[T.id],v=T.uniforms,R=T.__cache;i.bindBuffer(i.UNIFORM_BUFFER,y);for(let b=0,C=v.length;b<C;b++){const D=Array.isArray(v[b])?v[b]:[v[b]];for(let E=0,M=D.length;E<M;E++){const L=D[E];if(p(L,b,E,R)===!0){const O=L.__offset,H=Array.isArray(L.value)?L.value:[L.value];let W=0;for(let q=0;q<H.length;q++){const k=H[q],et=x(k);typeof k=="number"||typeof k=="boolean"?(L.__data[0]=k,i.bufferSubData(i.UNIFORM_BUFFER,O+W,L.__data)):k.isMatrix3?(L.__data[0]=k.elements[0],L.__data[1]=k.elements[1],L.__data[2]=k.elements[2],L.__data[3]=0,L.__data[4]=k.elements[3],L.__data[5]=k.elements[4],L.__data[6]=k.elements[5],L.__data[7]=0,L.__data[8]=k.elements[6],L.__data[9]=k.elements[7],L.__data[10]=k.elements[8],L.__data[11]=0):(k.toArray(L.__data,W),W+=et.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,O,L.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function p(T,y,v,R){const b=T.value,C=y+"_"+v;if(R[C]===void 0)return typeof b=="number"||typeof b=="boolean"?R[C]=b:R[C]=b.clone(),!0;{const D=R[C];if(typeof b=="number"||typeof b=="boolean"){if(D!==b)return R[C]=b,!0}else if(D.equals(b)===!1)return D.copy(b),!0}return!1}function g(T){const y=T.uniforms;let v=0;const R=16;for(let C=0,D=y.length;C<D;C++){const E=Array.isArray(y[C])?y[C]:[y[C]];for(let M=0,L=E.length;M<L;M++){const O=E[M],H=Array.isArray(O.value)?O.value:[O.value];for(let W=0,q=H.length;W<q;W++){const k=H[W],et=x(k),G=v%R,ut=G%et.boundary,_t=G+ut;v+=ut,_t!==0&&R-_t<et.storage&&(v+=R-_t),O.__data=new Float32Array(et.storage/Float32Array.BYTES_PER_ELEMENT),O.__offset=v,v+=et.storage}}}const b=v%R;return b>0&&(v+=R-b),T.__size=v,T.__cache={},this}function x(T){const y={boundary:0,storage:0};return typeof T=="number"||typeof T=="boolean"?(y.boundary=4,y.storage=4):T.isVector2?(y.boundary=8,y.storage=8):T.isVector3||T.isColor?(y.boundary=16,y.storage=12):T.isVector4?(y.boundary=16,y.storage=16):T.isMatrix3?(y.boundary=48,y.storage=48):T.isMatrix4?(y.boundary=64,y.storage=64):T.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",T),y}function m(T){const y=T.target;y.removeEventListener("dispose",m);const v=a.indexOf(y.__bindingPointIndex);a.splice(v,1),i.deleteBuffer(r[y.id]),delete r[y.id],delete s[y.id]}function f(){for(const T in r)i.deleteBuffer(r[T]);a=[],r={},s={}}return{bind:l,update:c,dispose:f}}class gg{constructor(t={}){const{canvas:e=Jl(),context:n=null,depth:r=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:d=!1}=t;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=n.getContextAttributes().alpha}else p=a;const g=new Uint32Array(4),x=new Int32Array(4);let m=null,f=null;const T=[],y=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=gn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const v=this;let R=!1;this._outputColorSpace=Ie;let b=0,C=0,D=null,E=-1,M=null;const L=new ee,O=new ee;let H=null;const W=new Xt(0);let q=0,k=e.width,et=e.height,G=1,ut=null,_t=null;const Mt=new ee(0,0,k,et),Bt=new ee(0,0,k,et);let qt=!1;const jt=new xa;let Yt=!1,Y=!1;const tt=new ie,xt=new P,Ct=new ee,Et={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let kt=!1;function re(){return D===null?G:1}let w=n;function Q(S,U){return e.getContext(S,U)}try{const S={alpha:!0,depth:r,stencil:s,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine","three.js r180"),e.addEventListener("webglcontextlost",ft,!1),e.addEventListener("webglcontextrestored",St,!1),e.addEventListener("webglcontextcreationerror",rt,!1),w===null){const U="webgl2";if(w=Q(U,S),w===null)throw Q(U)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(S){throw console.error("THREE.WebGLRenderer: "+S.message),S}let $,Z,J,lt,nt,ht,Ft,Nt,A,_,F,V,j,X,wt,ot,Tt,At,it,gt,It,Rt,pt,zt;function I(){$=new op(w),$.init(),Rt=new km(w,$),Z=new tp(w,$,t,Rt),J=new Vm(w,$),Z.reversedDepthBuffer&&d&&J.buffers.depth.setReversed(!0),lt=new hp(w),nt=new Rm,ht=new Gm(w,$,J,nt,Z,Rt,lt),Ft=new np(v),Nt=new ap(v),A=new mu(w),pt=new jd(w,A),_=new cp(w,A,lt,pt),F=new fp(w,_,A,lt),it=new up(w,Z,ht),ot=new ep(nt),V=new wm(v,Ft,Nt,$,Z,pt,ot),j=new Zm(v,nt),X=new Pm,wt=new Fm($),At=new Kd(v,Ft,Nt,J,F,p,l),Tt=new zm(v,F,Z),zt=new $m(w,lt,Z,J),gt=new Qd(w,$,lt),It=new lp(w,$,lt),lt.programs=V.programs,v.capabilities=Z,v.extensions=$,v.properties=nt,v.renderLists=X,v.shadowMap=Tt,v.state=J,v.info=lt}I();const at=new Ym(v,w);this.xr=at,this.getContext=function(){return w},this.getContextAttributes=function(){return w.getContextAttributes()},this.forceContextLoss=function(){const S=$.get("WEBGL_lose_context");S&&S.loseContext()},this.forceContextRestore=function(){const S=$.get("WEBGL_lose_context");S&&S.restoreContext()},this.getPixelRatio=function(){return G},this.setPixelRatio=function(S){S!==void 0&&(G=S,this.setSize(k,et,!1))},this.getSize=function(S){return S.set(k,et)},this.setSize=function(S,U,B=!0){if(at.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}k=S,et=U,e.width=Math.floor(S*G),e.height=Math.floor(U*G),B===!0&&(e.style.width=S+"px",e.style.height=U+"px"),this.setViewport(0,0,S,U)},this.getDrawingBufferSize=function(S){return S.set(k*G,et*G).floor()},this.setDrawingBufferSize=function(S,U,B){k=S,et=U,G=B,e.width=Math.floor(S*B),e.height=Math.floor(U*B),this.setViewport(0,0,S,U)},this.getCurrentViewport=function(S){return S.copy(L)},this.getViewport=function(S){return S.copy(Mt)},this.setViewport=function(S,U,B,z){S.isVector4?Mt.set(S.x,S.y,S.z,S.w):Mt.set(S,U,B,z),J.viewport(L.copy(Mt).multiplyScalar(G).round())},this.getScissor=function(S){return S.copy(Bt)},this.setScissor=function(S,U,B,z){S.isVector4?Bt.set(S.x,S.y,S.z,S.w):Bt.set(S,U,B,z),J.scissor(O.copy(Bt).multiplyScalar(G).round())},this.getScissorTest=function(){return qt},this.setScissorTest=function(S){J.setScissorTest(qt=S)},this.setOpaqueSort=function(S){ut=S},this.setTransparentSort=function(S){_t=S},this.getClearColor=function(S){return S.copy(At.getClearColor())},this.setClearColor=function(){At.setClearColor(...arguments)},this.getClearAlpha=function(){return At.getClearAlpha()},this.setClearAlpha=function(){At.setClearAlpha(...arguments)},this.clear=function(S=!0,U=!0,B=!0){let z=0;if(S){let N=!1;if(D!==null){const st=D.texture.format;N=st===ma||st===pa||st===da}if(N){const st=D.texture.type,mt=st===Ye||st===In||st===Ci||st===Pi||st===ha||st===ua,yt=At.getClearColor(),vt=At.getClearAlpha(),Dt=yt.r,Ut=yt.g,Pt=yt.b;mt?(g[0]=Dt,g[1]=Ut,g[2]=Pt,g[3]=vt,w.clearBufferuiv(w.COLOR,0,g)):(x[0]=Dt,x[1]=Ut,x[2]=Pt,x[3]=vt,w.clearBufferiv(w.COLOR,0,x))}else z|=w.COLOR_BUFFER_BIT}U&&(z|=w.DEPTH_BUFFER_BIT),B&&(z|=w.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),w.clear(z)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",ft,!1),e.removeEventListener("webglcontextrestored",St,!1),e.removeEventListener("webglcontextcreationerror",rt,!1),At.dispose(),X.dispose(),wt.dispose(),nt.dispose(),Ft.dispose(),Nt.dispose(),F.dispose(),pt.dispose(),zt.dispose(),V.dispose(),at.dispose(),at.removeEventListener("sessionstart",Ge),at.removeEventListener("sessionend",ba),xn.stop()};function ft(S){S.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),R=!0}function St(){console.log("THREE.WebGLRenderer: Context Restored."),R=!1;const S=lt.autoReset,U=Tt.enabled,B=Tt.autoUpdate,z=Tt.needsUpdate,N=Tt.type;I(),lt.autoReset=S,Tt.enabled=U,Tt.autoUpdate=B,Tt.needsUpdate=z,Tt.type=N}function rt(S){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",S.statusMessage)}function K(S){const U=S.target;U.removeEventListener("dispose",K),bt(U)}function bt(S){Ot(S),nt.remove(S)}function Ot(S){const U=nt.get(S).programs;U!==void 0&&(U.forEach(function(B){V.releaseProgram(B)}),S.isShaderMaterial&&V.releaseShaderCache(S))}this.renderBufferDirect=function(S,U,B,z,N,st){U===null&&(U=Et);const mt=N.isMesh&&N.matrixWorld.determinant()<0,yt=zc(S,U,B,z,N);J.setMaterial(z,mt);let vt=B.index,Dt=1;if(z.wireframe===!0){if(vt=_.getWireframeAttribute(B),vt===void 0)return;Dt=2}const Ut=B.drawRange,Pt=B.attributes.position;let Wt=Ut.start*Dt,Qt=(Ut.start+Ut.count)*Dt;st!==null&&(Wt=Math.max(Wt,st.start*Dt),Qt=Math.min(Qt,(st.start+st.count)*Dt)),vt!==null?(Wt=Math.max(Wt,0),Qt=Math.min(Qt,vt.count)):Pt!=null&&(Wt=Math.max(Wt,0),Qt=Math.min(Qt,Pt.count));const he=Qt-Wt;if(he<0||he===1/0)return;pt.setup(N,z,yt,B,vt);let ae,ne=gt;if(vt!==null&&(ae=A.get(vt),ne=It,ne.setIndex(ae)),N.isMesh)z.wireframe===!0?(J.setLineWidth(z.wireframeLinewidth*re()),ne.setMode(w.LINES)):ne.setMode(w.TRIANGLES);else if(N.isLine){let Lt=z.linewidth;Lt===void 0&&(Lt=1),J.setLineWidth(Lt*re()),N.isLineSegments?ne.setMode(w.LINES):N.isLineLoop?ne.setMode(w.LINE_LOOP):ne.setMode(w.LINE_STRIP)}else N.isPoints?ne.setMode(w.POINTS):N.isSprite&&ne.setMode(w.TRIANGLES);if(N.isBatchedMesh)if(N._multiDrawInstances!==null)Ni("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),ne.renderMultiDrawInstances(N._multiDrawStarts,N._multiDrawCounts,N._multiDrawCount,N._multiDrawInstances);else if($.get("WEBGL_multi_draw"))ne.renderMultiDraw(N._multiDrawStarts,N._multiDrawCounts,N._multiDrawCount);else{const Lt=N._multiDrawStarts,oe=N._multiDrawCounts,Zt=N._multiDrawCount,Ae=vt?A.get(vt).bytesPerElement:1,zn=nt.get(z).currentProgram.getUniforms();for(let be=0;be<Zt;be++)zn.setValue(w,"_gl_DrawID",be),ne.render(Lt[be]/Ae,oe[be])}else if(N.isInstancedMesh)ne.renderInstances(Wt,he,N.count);else if(B.isInstancedBufferGeometry){const Lt=B._maxInstanceCount!==void 0?B._maxInstanceCount:1/0,oe=Math.min(B.instanceCount,Lt);ne.renderInstances(Wt,he,oe)}else ne.render(Wt,he)};function se(S,U,B){S.transparent===!0&&S.side===rn&&S.forceSinglePass===!1?(S.side=Te,S.needsUpdate=!0,ki(S,U,B),S.side=_n,S.needsUpdate=!0,ki(S,U,B),S.side=rn):ki(S,U,B)}this.compile=function(S,U,B=null){B===null&&(B=S),f=wt.get(B),f.init(U),y.push(f),B.traverseVisible(function(N){N.isLight&&N.layers.test(U.layers)&&(f.pushLight(N),N.castShadow&&f.pushShadow(N))}),S!==B&&S.traverseVisible(function(N){N.isLight&&N.layers.test(U.layers)&&(f.pushLight(N),N.castShadow&&f.pushShadow(N))}),f.setupLights();const z=new Set;return S.traverse(function(N){if(!(N.isMesh||N.isPoints||N.isLine||N.isSprite))return;const st=N.material;if(st)if(Array.isArray(st))for(let mt=0;mt<st.length;mt++){const yt=st[mt];se(yt,B,N),z.add(yt)}else se(st,B,N),z.add(st)}),f=y.pop(),z},this.compileAsync=function(S,U,B=null){const z=this.compile(S,U,B);return new Promise(N=>{function st(){if(z.forEach(function(mt){nt.get(mt).currentProgram.isReady()&&z.delete(mt)}),z.size===0){N(S);return}setTimeout(st,10)}$.get("KHR_parallel_shader_compile")!==null?st():setTimeout(st,10)})};let Kt=null;function $e(S){Kt&&Kt(S)}function Ge(){xn.stop()}function ba(){xn.start()}const xn=new Uc;xn.setAnimationLoop($e),typeof self<"u"&&xn.setContext(self),this.setAnimationLoop=function(S){Kt=S,at.setAnimationLoop(S),S===null?xn.stop():xn.start()},at.addEventListener("sessionstart",Ge),at.addEventListener("sessionend",ba),this.render=function(S,U){if(U!==void 0&&U.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(R===!0)return;if(S.matrixWorldAutoUpdate===!0&&S.updateMatrixWorld(),U.parent===null&&U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),at.enabled===!0&&at.isPresenting===!0&&(at.cameraAutoUpdate===!0&&at.updateCamera(U),U=at.getCamera()),S.isScene===!0&&S.onBeforeRender(v,S,U,D),f=wt.get(S,y.length),f.init(U),y.push(f),tt.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),jt.setFromProjectionMatrix(tt,qe,U.reversedDepth),Y=this.localClippingEnabled,Yt=ot.init(this.clippingPlanes,Y),m=X.get(S,T.length),m.init(),T.push(m),at.enabled===!0&&at.isPresenting===!0){const st=v.xr.getDepthSensingMesh();st!==null&&Ur(st,U,-1/0,v.sortObjects)}Ur(S,U,0,v.sortObjects),m.finish(),v.sortObjects===!0&&m.sort(ut,_t),kt=at.enabled===!1||at.isPresenting===!1||at.hasDepthSensing()===!1,kt&&At.addToRenderList(m,S),this.info.render.frame++,Yt===!0&&ot.beginShadows();const B=f.state.shadowsArray;Tt.render(B,S,U),Yt===!0&&ot.endShadows(),this.info.autoReset===!0&&this.info.reset();const z=m.opaque,N=m.transmissive;if(f.setupLights(),U.isArrayCamera){const st=U.cameras;if(N.length>0)for(let mt=0,yt=st.length;mt<yt;mt++){const vt=st[mt];Ra(z,N,S,vt)}kt&&At.render(S);for(let mt=0,yt=st.length;mt<yt;mt++){const vt=st[mt];wa(m,S,vt,vt.viewport)}}else N.length>0&&Ra(z,N,S,U),kt&&At.render(S),wa(m,S,U);D!==null&&C===0&&(ht.updateMultisampleRenderTarget(D),ht.updateRenderTargetMipmap(D)),S.isScene===!0&&S.onAfterRender(v,S,U),pt.resetDefaultState(),E=-1,M=null,y.pop(),y.length>0?(f=y[y.length-1],Yt===!0&&ot.setGlobalState(v.clippingPlanes,f.state.camera)):f=null,T.pop(),T.length>0?m=T[T.length-1]:m=null};function Ur(S,U,B,z){if(S.visible===!1)return;if(S.layers.test(U.layers)){if(S.isGroup)B=S.renderOrder;else if(S.isLOD)S.autoUpdate===!0&&S.update(U);else if(S.isLight)f.pushLight(S),S.castShadow&&f.pushShadow(S);else if(S.isSprite){if(!S.frustumCulled||jt.intersectsSprite(S)){z&&Ct.setFromMatrixPosition(S.matrixWorld).applyMatrix4(tt);const mt=F.update(S),yt=S.material;yt.visible&&m.push(S,mt,yt,B,Ct.z,null)}}else if((S.isMesh||S.isLine||S.isPoints)&&(!S.frustumCulled||jt.intersectsObject(S))){const mt=F.update(S),yt=S.material;if(z&&(S.boundingSphere!==void 0?(S.boundingSphere===null&&S.computeBoundingSphere(),Ct.copy(S.boundingSphere.center)):(mt.boundingSphere===null&&mt.computeBoundingSphere(),Ct.copy(mt.boundingSphere.center)),Ct.applyMatrix4(S.matrixWorld).applyMatrix4(tt)),Array.isArray(yt)){const vt=mt.groups;for(let Dt=0,Ut=vt.length;Dt<Ut;Dt++){const Pt=vt[Dt],Wt=yt[Pt.materialIndex];Wt&&Wt.visible&&m.push(S,mt,Wt,B,Ct.z,Pt)}}else yt.visible&&m.push(S,mt,yt,B,Ct.z,null)}}const st=S.children;for(let mt=0,yt=st.length;mt<yt;mt++)Ur(st[mt],U,B,z)}function wa(S,U,B,z){const N=S.opaque,st=S.transmissive,mt=S.transparent;f.setupLightsView(B),Yt===!0&&ot.setGlobalState(v.clippingPlanes,B),z&&J.viewport(L.copy(z)),N.length>0&&Gi(N,U,B),st.length>0&&Gi(st,U,B),mt.length>0&&Gi(mt,U,B),J.buffers.depth.setTest(!0),J.buffers.depth.setMask(!0),J.buffers.color.setMask(!0),J.setPolygonOffset(!1)}function Ra(S,U,B,z){if((B.isScene===!0?B.overrideMaterial:null)!==null)return;f.state.transmissionRenderTarget[z.id]===void 0&&(f.state.transmissionRenderTarget[z.id]=new Un(1,1,{generateMipmaps:!0,type:$.has("EXT_color_buffer_half_float")||$.has("EXT_color_buffer_float")?zi:Ye,minFilter:Dn,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:$t.workingColorSpace}));const st=f.state.transmissionRenderTarget[z.id],mt=z.viewport||L;st.setSize(mt.z*v.transmissionResolutionScale,mt.w*v.transmissionResolutionScale);const yt=v.getRenderTarget(),vt=v.getActiveCubeFace(),Dt=v.getActiveMipmapLevel();v.setRenderTarget(st),v.getClearColor(W),q=v.getClearAlpha(),q<1&&v.setClearColor(16777215,.5),v.clear(),kt&&At.render(B);const Ut=v.toneMapping;v.toneMapping=gn;const Pt=z.viewport;if(z.viewport!==void 0&&(z.viewport=void 0),f.setupLightsView(z),Yt===!0&&ot.setGlobalState(v.clippingPlanes,z),Gi(S,B,z),ht.updateMultisampleRenderTarget(st),ht.updateRenderTargetMipmap(st),$.has("WEBGL_multisampled_render_to_texture")===!1){let Wt=!1;for(let Qt=0,he=U.length;Qt<he;Qt++){const ae=U[Qt],ne=ae.object,Lt=ae.geometry,oe=ae.material,Zt=ae.group;if(oe.side===rn&&ne.layers.test(z.layers)){const Ae=oe.side;oe.side=Te,oe.needsUpdate=!0,Ca(ne,B,z,Lt,oe,Zt),oe.side=Ae,oe.needsUpdate=!0,Wt=!0}}Wt===!0&&(ht.updateMultisampleRenderTarget(st),ht.updateRenderTargetMipmap(st))}v.setRenderTarget(yt,vt,Dt),v.setClearColor(W,q),Pt!==void 0&&(z.viewport=Pt),v.toneMapping=Ut}function Gi(S,U,B){const z=U.isScene===!0?U.overrideMaterial:null;for(let N=0,st=S.length;N<st;N++){const mt=S[N],yt=mt.object,vt=mt.geometry,Dt=mt.group;let Ut=mt.material;Ut.allowOverride===!0&&z!==null&&(Ut=z),yt.layers.test(B.layers)&&Ca(yt,U,B,vt,Ut,Dt)}}function Ca(S,U,B,z,N,st){S.onBeforeRender(v,U,B,z,N,st),S.modelViewMatrix.multiplyMatrices(B.matrixWorldInverse,S.matrixWorld),S.normalMatrix.getNormalMatrix(S.modelViewMatrix),N.onBeforeRender(v,U,B,z,S,st),N.transparent===!0&&N.side===rn&&N.forceSinglePass===!1?(N.side=Te,N.needsUpdate=!0,v.renderBufferDirect(B,U,z,N,S,st),N.side=_n,N.needsUpdate=!0,v.renderBufferDirect(B,U,z,N,S,st),N.side=rn):v.renderBufferDirect(B,U,z,N,S,st),S.onAfterRender(v,U,B,z,N,st)}function ki(S,U,B){U.isScene!==!0&&(U=Et);const z=nt.get(S),N=f.state.lights,st=f.state.shadowsArray,mt=N.state.version,yt=V.getParameters(S,N.state,st,U,B),vt=V.getProgramCacheKey(yt);let Dt=z.programs;z.environment=S.isMeshStandardMaterial?U.environment:null,z.fog=U.fog,z.envMap=(S.isMeshStandardMaterial?Nt:Ft).get(S.envMap||z.environment),z.envMapRotation=z.environment!==null&&S.envMap===null?U.environmentRotation:S.envMapRotation,Dt===void 0&&(S.addEventListener("dispose",K),Dt=new Map,z.programs=Dt);let Ut=Dt.get(vt);if(Ut!==void 0){if(z.currentProgram===Ut&&z.lightsStateVersion===mt)return La(S,yt),Ut}else yt.uniforms=V.getUniforms(S),S.onBeforeCompile(yt,v),Ut=V.acquireProgram(yt,vt),Dt.set(vt,Ut),z.uniforms=yt.uniforms;const Pt=z.uniforms;return(!S.isShaderMaterial&&!S.isRawShaderMaterial||S.clipping===!0)&&(Pt.clippingPlanes=ot.uniform),La(S,yt),z.needsLights=Vc(S),z.lightsStateVersion=mt,z.needsLights&&(Pt.ambientLightColor.value=N.state.ambient,Pt.lightProbe.value=N.state.probe,Pt.directionalLights.value=N.state.directional,Pt.directionalLightShadows.value=N.state.directionalShadow,Pt.spotLights.value=N.state.spot,Pt.spotLightShadows.value=N.state.spotShadow,Pt.rectAreaLights.value=N.state.rectArea,Pt.ltc_1.value=N.state.rectAreaLTC1,Pt.ltc_2.value=N.state.rectAreaLTC2,Pt.pointLights.value=N.state.point,Pt.pointLightShadows.value=N.state.pointShadow,Pt.hemisphereLights.value=N.state.hemi,Pt.directionalShadowMap.value=N.state.directionalShadowMap,Pt.directionalShadowMatrix.value=N.state.directionalShadowMatrix,Pt.spotShadowMap.value=N.state.spotShadowMap,Pt.spotLightMatrix.value=N.state.spotLightMatrix,Pt.spotLightMap.value=N.state.spotLightMap,Pt.pointShadowMap.value=N.state.pointShadowMap,Pt.pointShadowMatrix.value=N.state.pointShadowMatrix),z.currentProgram=Ut,z.uniformsList=null,Ut}function Pa(S){if(S.uniformsList===null){const U=S.currentProgram.getUniforms();S.uniformsList=Ar.seqWithValue(U.seq,S.uniforms)}return S.uniformsList}function La(S,U){const B=nt.get(S);B.outputColorSpace=U.outputColorSpace,B.batching=U.batching,B.batchingColor=U.batchingColor,B.instancing=U.instancing,B.instancingColor=U.instancingColor,B.instancingMorph=U.instancingMorph,B.skinning=U.skinning,B.morphTargets=U.morphTargets,B.morphNormals=U.morphNormals,B.morphColors=U.morphColors,B.morphTargetsCount=U.morphTargetsCount,B.numClippingPlanes=U.numClippingPlanes,B.numIntersection=U.numClipIntersection,B.vertexAlphas=U.vertexAlphas,B.vertexTangents=U.vertexTangents,B.toneMapping=U.toneMapping}function zc(S,U,B,z,N){U.isScene!==!0&&(U=Et),ht.resetTextureUnits();const st=U.fog,mt=z.isMeshStandardMaterial?U.environment:null,yt=D===null?v.outputColorSpace:D.isXRRenderTarget===!0?D.texture.colorSpace:hi,vt=(z.isMeshStandardMaterial?Nt:Ft).get(z.envMap||mt),Dt=z.vertexColors===!0&&!!B.attributes.color&&B.attributes.color.itemSize===4,Ut=!!B.attributes.tangent&&(!!z.normalMap||z.anisotropy>0),Pt=!!B.morphAttributes.position,Wt=!!B.morphAttributes.normal,Qt=!!B.morphAttributes.color;let he=gn;z.toneMapped&&(D===null||D.isXRRenderTarget===!0)&&(he=v.toneMapping);const ae=B.morphAttributes.position||B.morphAttributes.normal||B.morphAttributes.color,ne=ae!==void 0?ae.length:0,Lt=nt.get(z),oe=f.state.lights;if(Yt===!0&&(Y===!0||S!==M)){const Me=S===M&&z.id===E;ot.setState(z,S,Me)}let Zt=!1;z.version===Lt.__version?(Lt.needsLights&&Lt.lightsStateVersion!==oe.state.version||Lt.outputColorSpace!==yt||N.isBatchedMesh&&Lt.batching===!1||!N.isBatchedMesh&&Lt.batching===!0||N.isBatchedMesh&&Lt.batchingColor===!0&&N.colorTexture===null||N.isBatchedMesh&&Lt.batchingColor===!1&&N.colorTexture!==null||N.isInstancedMesh&&Lt.instancing===!1||!N.isInstancedMesh&&Lt.instancing===!0||N.isSkinnedMesh&&Lt.skinning===!1||!N.isSkinnedMesh&&Lt.skinning===!0||N.isInstancedMesh&&Lt.instancingColor===!0&&N.instanceColor===null||N.isInstancedMesh&&Lt.instancingColor===!1&&N.instanceColor!==null||N.isInstancedMesh&&Lt.instancingMorph===!0&&N.morphTexture===null||N.isInstancedMesh&&Lt.instancingMorph===!1&&N.morphTexture!==null||Lt.envMap!==vt||z.fog===!0&&Lt.fog!==st||Lt.numClippingPlanes!==void 0&&(Lt.numClippingPlanes!==ot.numPlanes||Lt.numIntersection!==ot.numIntersection)||Lt.vertexAlphas!==Dt||Lt.vertexTangents!==Ut||Lt.morphTargets!==Pt||Lt.morphNormals!==Wt||Lt.morphColors!==Qt||Lt.toneMapping!==he||Lt.morphTargetsCount!==ne)&&(Zt=!0):(Zt=!0,Lt.__version=z.version);let Ae=Lt.currentProgram;Zt===!0&&(Ae=ki(z,U,N));let zn=!1,be=!1,mi=!1;const ce=Ae.getUniforms(),Pe=Lt.uniforms;if(J.useProgram(Ae.program)&&(zn=!0,be=!0,mi=!0),z.id!==E&&(E=z.id,be=!0),zn||M!==S){J.buffers.depth.getReversed()&&S.reversedDepth!==!0&&(S._reversedDepth=!0,S.updateProjectionMatrix()),ce.setValue(w,"projectionMatrix",S.projectionMatrix),ce.setValue(w,"viewMatrix",S.matrixWorldInverse);const Ee=ce.map.cameraPosition;Ee!==void 0&&Ee.setValue(w,xt.setFromMatrixPosition(S.matrixWorld)),Z.logarithmicDepthBuffer&&ce.setValue(w,"logDepthBufFC",2/(Math.log(S.far+1)/Math.LN2)),(z.isMeshPhongMaterial||z.isMeshToonMaterial||z.isMeshLambertMaterial||z.isMeshBasicMaterial||z.isMeshStandardMaterial||z.isShaderMaterial)&&ce.setValue(w,"isOrthographic",S.isOrthographicCamera===!0),M!==S&&(M=S,be=!0,mi=!0)}if(N.isSkinnedMesh){ce.setOptional(w,N,"bindMatrix"),ce.setOptional(w,N,"bindMatrixInverse");const Me=N.skeleton;Me&&(Me.boneTexture===null&&Me.computeBoneTexture(),ce.setValue(w,"boneTexture",Me.boneTexture,ht))}N.isBatchedMesh&&(ce.setOptional(w,N,"batchingTexture"),ce.setValue(w,"batchingTexture",N._matricesTexture,ht),ce.setOptional(w,N,"batchingIdTexture"),ce.setValue(w,"batchingIdTexture",N._indirectTexture,ht),ce.setOptional(w,N,"batchingColorTexture"),N._colorsTexture!==null&&ce.setValue(w,"batchingColorTexture",N._colorsTexture,ht));const Le=B.morphAttributes;if((Le.position!==void 0||Le.normal!==void 0||Le.color!==void 0)&&it.update(N,B,Ae),(be||Lt.receiveShadow!==N.receiveShadow)&&(Lt.receiveShadow=N.receiveShadow,ce.setValue(w,"receiveShadow",N.receiveShadow)),z.isMeshGouraudMaterial&&z.envMap!==null&&(Pe.envMap.value=vt,Pe.flipEnvMap.value=vt.isCubeTexture&&vt.isRenderTargetTexture===!1?-1:1),z.isMeshStandardMaterial&&z.envMap===null&&U.environment!==null&&(Pe.envMapIntensity.value=U.environmentIntensity),be&&(ce.setValue(w,"toneMappingExposure",v.toneMappingExposure),Lt.needsLights&&Hc(Pe,mi),st&&z.fog===!0&&j.refreshFogUniforms(Pe,st),j.refreshMaterialUniforms(Pe,z,G,et,f.state.transmissionRenderTarget[S.id]),Ar.upload(w,Pa(Lt),Pe,ht)),z.isShaderMaterial&&z.uniformsNeedUpdate===!0&&(Ar.upload(w,Pa(Lt),Pe,ht),z.uniformsNeedUpdate=!1),z.isSpriteMaterial&&ce.setValue(w,"center",N.center),ce.setValue(w,"modelViewMatrix",N.modelViewMatrix),ce.setValue(w,"normalMatrix",N.normalMatrix),ce.setValue(w,"modelMatrix",N.matrixWorld),z.isShaderMaterial||z.isRawShaderMaterial){const Me=z.uniformsGroups;for(let Ee=0,Nr=Me.length;Ee<Nr;Ee++){const Mn=Me[Ee];zt.update(Mn,Ae),zt.bind(Mn,Ae)}}return Ae}function Hc(S,U){S.ambientLightColor.needsUpdate=U,S.lightProbe.needsUpdate=U,S.directionalLights.needsUpdate=U,S.directionalLightShadows.needsUpdate=U,S.pointLights.needsUpdate=U,S.pointLightShadows.needsUpdate=U,S.spotLights.needsUpdate=U,S.spotLightShadows.needsUpdate=U,S.rectAreaLights.needsUpdate=U,S.hemisphereLights.needsUpdate=U}function Vc(S){return S.isMeshLambertMaterial||S.isMeshToonMaterial||S.isMeshPhongMaterial||S.isMeshStandardMaterial||S.isShadowMaterial||S.isShaderMaterial&&S.lights===!0}this.getActiveCubeFace=function(){return b},this.getActiveMipmapLevel=function(){return C},this.getRenderTarget=function(){return D},this.setRenderTargetTextures=function(S,U,B){const z=nt.get(S);z.__autoAllocateDepthBuffer=S.resolveDepthBuffer===!1,z.__autoAllocateDepthBuffer===!1&&(z.__useRenderToTexture=!1),nt.get(S.texture).__webglTexture=U,nt.get(S.depthTexture).__webglTexture=z.__autoAllocateDepthBuffer?void 0:B,z.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(S,U){const B=nt.get(S);B.__webglFramebuffer=U,B.__useDefaultFramebuffer=U===void 0};const Gc=w.createFramebuffer();this.setRenderTarget=function(S,U=0,B=0){D=S,b=U,C=B;let z=!0,N=null,st=!1,mt=!1;if(S){const vt=nt.get(S);if(vt.__useDefaultFramebuffer!==void 0)J.bindFramebuffer(w.FRAMEBUFFER,null),z=!1;else if(vt.__webglFramebuffer===void 0)ht.setupRenderTarget(S);else if(vt.__hasExternalTextures)ht.rebindTextures(S,nt.get(S.texture).__webglTexture,nt.get(S.depthTexture).__webglTexture);else if(S.depthBuffer){const Pt=S.depthTexture;if(vt.__boundDepthTexture!==Pt){if(Pt!==null&&nt.has(Pt)&&(S.width!==Pt.image.width||S.height!==Pt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");ht.setupDepthRenderbuffer(S)}}const Dt=S.texture;(Dt.isData3DTexture||Dt.isDataArrayTexture||Dt.isCompressedArrayTexture)&&(mt=!0);const Ut=nt.get(S).__webglFramebuffer;S.isWebGLCubeRenderTarget?(Array.isArray(Ut[U])?N=Ut[U][B]:N=Ut[U],st=!0):S.samples>0&&ht.useMultisampledRTT(S)===!1?N=nt.get(S).__webglMultisampledFramebuffer:Array.isArray(Ut)?N=Ut[B]:N=Ut,L.copy(S.viewport),O.copy(S.scissor),H=S.scissorTest}else L.copy(Mt).multiplyScalar(G).floor(),O.copy(Bt).multiplyScalar(G).floor(),H=qt;if(B!==0&&(N=Gc),J.bindFramebuffer(w.FRAMEBUFFER,N)&&z&&J.drawBuffers(S,N),J.viewport(L),J.scissor(O),J.setScissorTest(H),st){const vt=nt.get(S.texture);w.framebufferTexture2D(w.FRAMEBUFFER,w.COLOR_ATTACHMENT0,w.TEXTURE_CUBE_MAP_POSITIVE_X+U,vt.__webglTexture,B)}else if(mt){const vt=U;for(let Dt=0;Dt<S.textures.length;Dt++){const Ut=nt.get(S.textures[Dt]);w.framebufferTextureLayer(w.FRAMEBUFFER,w.COLOR_ATTACHMENT0+Dt,Ut.__webglTexture,B,vt)}}else if(S!==null&&B!==0){const vt=nt.get(S.texture);w.framebufferTexture2D(w.FRAMEBUFFER,w.COLOR_ATTACHMENT0,w.TEXTURE_2D,vt.__webglTexture,B)}E=-1},this.readRenderTargetPixels=function(S,U,B,z,N,st,mt,yt=0){if(!(S&&S.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let vt=nt.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&mt!==void 0&&(vt=vt[mt]),vt){J.bindFramebuffer(w.FRAMEBUFFER,vt);try{const Dt=S.textures[yt],Ut=Dt.format,Pt=Dt.type;if(!Z.textureFormatReadable(Ut)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Z.textureTypeReadable(Pt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}U>=0&&U<=S.width-z&&B>=0&&B<=S.height-N&&(S.textures.length>1&&w.readBuffer(w.COLOR_ATTACHMENT0+yt),w.readPixels(U,B,z,N,Rt.convert(Ut),Rt.convert(Pt),st))}finally{const Dt=D!==null?nt.get(D).__webglFramebuffer:null;J.bindFramebuffer(w.FRAMEBUFFER,Dt)}}},this.readRenderTargetPixelsAsync=async function(S,U,B,z,N,st,mt,yt=0){if(!(S&&S.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let vt=nt.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&mt!==void 0&&(vt=vt[mt]),vt)if(U>=0&&U<=S.width-z&&B>=0&&B<=S.height-N){J.bindFramebuffer(w.FRAMEBUFFER,vt);const Dt=S.textures[yt],Ut=Dt.format,Pt=Dt.type;if(!Z.textureFormatReadable(Ut))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Z.textureTypeReadable(Pt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Wt=w.createBuffer();w.bindBuffer(w.PIXEL_PACK_BUFFER,Wt),w.bufferData(w.PIXEL_PACK_BUFFER,st.byteLength,w.STREAM_READ),S.textures.length>1&&w.readBuffer(w.COLOR_ATTACHMENT0+yt),w.readPixels(U,B,z,N,Rt.convert(Ut),Rt.convert(Pt),0);const Qt=D!==null?nt.get(D).__webglFramebuffer:null;J.bindFramebuffer(w.FRAMEBUFFER,Qt);const he=w.fenceSync(w.SYNC_GPU_COMMANDS_COMPLETE,0);return w.flush(),await Zl(w,he,4),w.bindBuffer(w.PIXEL_PACK_BUFFER,Wt),w.getBufferSubData(w.PIXEL_PACK_BUFFER,0,st),w.deleteBuffer(Wt),w.deleteSync(he),st}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(S,U=null,B=0){const z=Math.pow(2,-B),N=Math.floor(S.image.width*z),st=Math.floor(S.image.height*z),mt=U!==null?U.x:0,yt=U!==null?U.y:0;ht.setTexture2D(S,0),w.copyTexSubImage2D(w.TEXTURE_2D,B,0,0,mt,yt,N,st),J.unbindTexture()};const kc=w.createFramebuffer(),Wc=w.createFramebuffer();this.copyTextureToTexture=function(S,U,B=null,z=null,N=0,st=null){st===null&&(N!==0?(Ni("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),st=N,N=0):st=0);let mt,yt,vt,Dt,Ut,Pt,Wt,Qt,he;const ae=S.isCompressedTexture?S.mipmaps[st]:S.image;if(B!==null)mt=B.max.x-B.min.x,yt=B.max.y-B.min.y,vt=B.isBox3?B.max.z-B.min.z:1,Dt=B.min.x,Ut=B.min.y,Pt=B.isBox3?B.min.z:0;else{const Le=Math.pow(2,-N);mt=Math.floor(ae.width*Le),yt=Math.floor(ae.height*Le),S.isDataArrayTexture?vt=ae.depth:S.isData3DTexture?vt=Math.floor(ae.depth*Le):vt=1,Dt=0,Ut=0,Pt=0}z!==null?(Wt=z.x,Qt=z.y,he=z.z):(Wt=0,Qt=0,he=0);const ne=Rt.convert(U.format),Lt=Rt.convert(U.type);let oe;U.isData3DTexture?(ht.setTexture3D(U,0),oe=w.TEXTURE_3D):U.isDataArrayTexture||U.isCompressedArrayTexture?(ht.setTexture2DArray(U,0),oe=w.TEXTURE_2D_ARRAY):(ht.setTexture2D(U,0),oe=w.TEXTURE_2D),w.pixelStorei(w.UNPACK_FLIP_Y_WEBGL,U.flipY),w.pixelStorei(w.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),w.pixelStorei(w.UNPACK_ALIGNMENT,U.unpackAlignment);const Zt=w.getParameter(w.UNPACK_ROW_LENGTH),Ae=w.getParameter(w.UNPACK_IMAGE_HEIGHT),zn=w.getParameter(w.UNPACK_SKIP_PIXELS),be=w.getParameter(w.UNPACK_SKIP_ROWS),mi=w.getParameter(w.UNPACK_SKIP_IMAGES);w.pixelStorei(w.UNPACK_ROW_LENGTH,ae.width),w.pixelStorei(w.UNPACK_IMAGE_HEIGHT,ae.height),w.pixelStorei(w.UNPACK_SKIP_PIXELS,Dt),w.pixelStorei(w.UNPACK_SKIP_ROWS,Ut),w.pixelStorei(w.UNPACK_SKIP_IMAGES,Pt);const ce=S.isDataArrayTexture||S.isData3DTexture,Pe=U.isDataArrayTexture||U.isData3DTexture;if(S.isDepthTexture){const Le=nt.get(S),Me=nt.get(U),Ee=nt.get(Le.__renderTarget),Nr=nt.get(Me.__renderTarget);J.bindFramebuffer(w.READ_FRAMEBUFFER,Ee.__webglFramebuffer),J.bindFramebuffer(w.DRAW_FRAMEBUFFER,Nr.__webglFramebuffer);for(let Mn=0;Mn<vt;Mn++)ce&&(w.framebufferTextureLayer(w.READ_FRAMEBUFFER,w.COLOR_ATTACHMENT0,nt.get(S).__webglTexture,N,Pt+Mn),w.framebufferTextureLayer(w.DRAW_FRAMEBUFFER,w.COLOR_ATTACHMENT0,nt.get(U).__webglTexture,st,he+Mn)),w.blitFramebuffer(Dt,Ut,mt,yt,Wt,Qt,mt,yt,w.DEPTH_BUFFER_BIT,w.NEAREST);J.bindFramebuffer(w.READ_FRAMEBUFFER,null),J.bindFramebuffer(w.DRAW_FRAMEBUFFER,null)}else if(N!==0||S.isRenderTargetTexture||nt.has(S)){const Le=nt.get(S),Me=nt.get(U);J.bindFramebuffer(w.READ_FRAMEBUFFER,kc),J.bindFramebuffer(w.DRAW_FRAMEBUFFER,Wc);for(let Ee=0;Ee<vt;Ee++)ce?w.framebufferTextureLayer(w.READ_FRAMEBUFFER,w.COLOR_ATTACHMENT0,Le.__webglTexture,N,Pt+Ee):w.framebufferTexture2D(w.READ_FRAMEBUFFER,w.COLOR_ATTACHMENT0,w.TEXTURE_2D,Le.__webglTexture,N),Pe?w.framebufferTextureLayer(w.DRAW_FRAMEBUFFER,w.COLOR_ATTACHMENT0,Me.__webglTexture,st,he+Ee):w.framebufferTexture2D(w.DRAW_FRAMEBUFFER,w.COLOR_ATTACHMENT0,w.TEXTURE_2D,Me.__webglTexture,st),N!==0?w.blitFramebuffer(Dt,Ut,mt,yt,Wt,Qt,mt,yt,w.COLOR_BUFFER_BIT,w.NEAREST):Pe?w.copyTexSubImage3D(oe,st,Wt,Qt,he+Ee,Dt,Ut,mt,yt):w.copyTexSubImage2D(oe,st,Wt,Qt,Dt,Ut,mt,yt);J.bindFramebuffer(w.READ_FRAMEBUFFER,null),J.bindFramebuffer(w.DRAW_FRAMEBUFFER,null)}else Pe?S.isDataTexture||S.isData3DTexture?w.texSubImage3D(oe,st,Wt,Qt,he,mt,yt,vt,ne,Lt,ae.data):U.isCompressedArrayTexture?w.compressedTexSubImage3D(oe,st,Wt,Qt,he,mt,yt,vt,ne,ae.data):w.texSubImage3D(oe,st,Wt,Qt,he,mt,yt,vt,ne,Lt,ae):S.isDataTexture?w.texSubImage2D(w.TEXTURE_2D,st,Wt,Qt,mt,yt,ne,Lt,ae.data):S.isCompressedTexture?w.compressedTexSubImage2D(w.TEXTURE_2D,st,Wt,Qt,ae.width,ae.height,ne,ae.data):w.texSubImage2D(w.TEXTURE_2D,st,Wt,Qt,mt,yt,ne,Lt,ae);w.pixelStorei(w.UNPACK_ROW_LENGTH,Zt),w.pixelStorei(w.UNPACK_IMAGE_HEIGHT,Ae),w.pixelStorei(w.UNPACK_SKIP_PIXELS,zn),w.pixelStorei(w.UNPACK_SKIP_ROWS,be),w.pixelStorei(w.UNPACK_SKIP_IMAGES,mi),st===0&&U.generateMipmaps&&w.generateMipmap(oe),J.unbindTexture()},this.initRenderTarget=function(S){nt.get(S).__webglFramebuffer===void 0&&ht.setupRenderTarget(S)},this.initTexture=function(S){S.isCubeTexture?ht.setTextureCube(S,0):S.isData3DTexture?ht.setTexture3D(S,0):S.isDataArrayTexture||S.isCompressedArrayTexture?ht.setTexture2DArray(S,0):ht.setTexture2D(S,0),J.unbindTexture()},this.resetState=function(){b=0,C=0,D=null,J.reset(),pt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return qe}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=$t._getDrawingBufferColorSpace(t),e.unpackColorSpace=$t._getUnpackColorSpace()}}
window.__THREE_EXPORTS__ = {
  "$": ug,
  "A": _l,
  "B": _e,
  "C": mg,
  "D": Mh,
  "E": rg,
  "F": Jt,
  "G": or,
  "H": zi,
  "I": wc,
  "J": Rh,
  "K": Lc,
  "L": pl,
  "M": Km,
  "N": mn,
  "O": Ic,
  "P": wn,
  "Q": Hi,
  "R": ic,
  "S": pg,
  "T": jm,
  "U": ph,
  "V": P,
  "W": Un,
  "X": Sc,
  "Y": Rc,
  "Z": Cc,
  "_": Pc,
  "a": ct,
  "a0": bc,
  "a1": me,
  "a2": eg,
  "a3": ac,
  "a4": Ve,
  "a5": ie,
  "a6": lg,
  "a7": au,
  "a8": El,
  "a9": ou,
  "aa": pc,
  "ab": gg,
  "ac": Yc,
  "ad": tg,
  "ae": hg,
  "af": fg,
  "ag": sg,
  "b": Qm,
  "c": He,
  "d": on,
  "e": dg,
  "f": Xt,
  "g": ag,
  "h": $t,
  "i": te,
  "j": ml,
  "k": gl,
  "l": xl,
  "m": Ml,
  "n": vl,
  "o": fa,
  "p": Ce,
  "q": og,
  "r": Vi,
  "s": Ah,
  "t": cg,
  "u": ng,
  "v": rn,
  "w": mc,
  "x": ig,
  "y": Ie,
  "z": Dr
};
})();
requestAnimationFrame(() => setTimeout(() => {
const {
  "C": Kt,
  "V": k,
  "M": ue,
  "T": de,
  "Q": it,
  "S": at,
  "a": B,
  "R": Zt,
  "P": Xt,
  "b": ne,
  "c": $,
  "O": pt,
  "B": Re,
  "F": Ce,
  "d": Ae,
  "U": mt,
  "W": Wt,
  "H": Vt,
  "N": qt,
  "e": Qt,
  "f": ae,
  "g": $t,
  "h": Jt,
  "i": eo,
  "L": to,
  "j": oo,
  "k": so,
  "A": gt,
  "l": io,
  "m": ao,
  "n": no,
  "D": ro,
  "o": lo,
  "p": qe,
  "q": ho,
  "r": bt,
  "I": _t,
  "s": co,
  "E": fo,
  "t": uo,
  "u": wt,
  "v": K,
  "w": yt,
  "G": le,
  "x": xt,
  "y": xe,
  "z": he,
  "J": po,
  "K": mo,
  "X": ye,
  "Y": St,
  "Z": Ye,
  "_": Oe,
  "$": Mt,
  "a0": Ke,
  "a1": go,
  "a2": Ne,
  "a3": bo,
  "a4": _o,
  "a5": wo,
  "a6": vt,
  "a7": Dt,
  "a8": Et,
  "a9": Pt,
  "aa": yo,
  "ab": xo,
  "ac": So,
  "ad": Mo,
  "ae": vo,
  "af": Tt,
  "ag": Do
} = window.__THREE_EXPORTS__;
(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))i(a);new MutationObserver(a=>{for(const o of a)if(o.type==="childList")for(const h of o.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&i(h)}).observe(document,{childList:!0,subtree:!0});function t(a){const o={};return a.integrity&&(o.integrity=a.integrity),a.referrerPolicy&&(o.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?o.credentials="include":a.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(a){if(a.ep)return;a.ep=!0;const o=t(a);fetch(a.href,o)}})();const nt={type:"change"},Qe={type:"start"},Lt={type:"end"},Me=new Zt,rt=new Xt,Eo=Math.cos(70*ne.DEG2RAD),O=new k,H=2*Math.PI,T={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},je=1e-6;class Po extends Kt{constructor(e,t=null){super(e,t),this.state=T.NONE,this.target=new k,this.cursor=new k,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:ue.ROTATE,MIDDLE:ue.DOLLY,RIGHT:ue.PAN},this.touches={ONE:de.ROTATE,TWO:de.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new k,this._lastQuaternion=new it,this._lastTargetPosition=new k,this._quat=new it().setFromUnitVectors(e.up,new k(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new at,this._sphericalDelta=new at,this._scale=1,this._panOffset=new k,this._rotateStart=new B,this._rotateEnd=new B,this._rotateDelta=new B,this._panStart=new B,this._panEnd=new B,this._panDelta=new B,this._dollyStart=new B,this._dollyEnd=new B,this._dollyDelta=new B,this._dollyDirection=new k,this._mouse=new B,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=Lo.bind(this),this._onPointerDown=To.bind(this),this._onPointerUp=Co.bind(this),this._onContextMenu=No.bind(this),this._onMouseWheel=zo.bind(this),this._onKeyDown=Ro.bind(this),this._onTouchStart=Oo.bind(this),this._onTouchMove=Io.bind(this),this._onMouseDown=Ao.bind(this),this._onMouseMove=ko.bind(this),this._interceptControlDown=jo.bind(this),this._interceptControlUp=Uo.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}connect(e){super.connect(e),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(nt),this.update(),this.state=T.NONE}update(e=null){const t=this.object.position;O.copy(t).sub(this.target),O.applyQuaternion(this._quat),this._spherical.setFromVector3(O),this.autoRotate&&this.state===T.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let i=this.minAzimuthAngle,a=this.maxAzimuthAngle;isFinite(i)&&isFinite(a)&&(i<-Math.PI?i+=H:i>Math.PI&&(i-=H),a<-Math.PI?a+=H:a>Math.PI&&(a-=H),i<=a?this._spherical.theta=Math.max(i,Math.min(a,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(i+a)/2?Math.max(i,this._spherical.theta):Math.min(a,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let o=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const h=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),o=h!=this._spherical.radius}if(O.setFromSpherical(this._spherical),O.applyQuaternion(this._quatInverse),t.copy(this.target).add(O),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let h=null;if(this.object.isPerspectiveCamera){const s=O.length();h=this._clampDistance(s*this._scale);const l=s-h;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),o=!!l}else if(this.object.isOrthographicCamera){const s=new k(this._mouse.x,this._mouse.y,0);s.unproject(this.object);const l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),o=l!==this.object.zoom;const c=new k(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(s),this.object.updateMatrixWorld(),h=O.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;h!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(h).add(this.object.position):(Me.origin.copy(this.object.position),Me.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(Me.direction))<Eo?this.object.lookAt(this.target):(rt.setFromNormalAndCoplanarPoint(this.object.up,this.target),Me.intersectPlane(rt,this.target))))}else if(this.object.isOrthographicCamera){const h=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),h!==this.object.zoom&&(this.object.updateProjectionMatrix(),o=!0)}return this._scale=1,this._performCursorZoom=!1,o||this._lastPosition.distanceToSquared(this.object.position)>je||8*(1-this._lastQuaternion.dot(this.object.quaternion))>je||this._lastTargetPosition.distanceToSquared(this.target)>je?(this.dispatchEvent(nt),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?H/60*this.autoRotateSpeed*e:H/60/60*this.autoRotateSpeed}_getZoomScale(e){const t=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*t)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,t){O.setFromMatrixColumn(t,0),O.multiplyScalar(-e),this._panOffset.add(O)}_panUp(e,t){this.screenSpacePanning===!0?O.setFromMatrixColumn(t,1):(O.setFromMatrixColumn(t,0),O.crossVectors(this.object.up,O)),O.multiplyScalar(e),this._panOffset.add(O)}_pan(e,t){const i=this.domElement;if(this.object.isPerspectiveCamera){const a=this.object.position;O.copy(a).sub(this.target);let o=O.length();o*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*o/i.clientHeight,this.object.matrix),this._panUp(2*t*o/i.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/i.clientWidth,this.object.matrix),this._panUp(t*(this.object.top-this.object.bottom)/this.object.zoom/i.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,t){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const i=this.domElement.getBoundingClientRect(),a=e-i.left,o=t-i.top,h=i.width,s=i.height;this._mouse.x=a/h*2-1,this._mouse.y=-(o/s)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(H*this._rotateDelta.x/t.clientHeight),this._rotateUp(H*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let t=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(H*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),t=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(-H*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),t=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(H*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),t=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(-H*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),t=!0;break}t&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),a=.5*(e.pageY+t.y);this._rotateStart.set(i,a)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),a=.5*(e.pageY+t.y);this._panStart.set(i,a)}}_handleTouchStartDolly(e){const t=this._getSecondPointerPosition(e),i=e.pageX-t.x,a=e.pageY-t.y,o=Math.sqrt(i*i+a*a);this._dollyStart.set(0,o)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{const i=this._getSecondPointerPosition(e),a=.5*(e.pageX+i.x),o=.5*(e.pageY+i.y);this._rotateEnd.set(a,o)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(H*this._rotateDelta.x/t.clientHeight),this._rotateUp(H*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),a=.5*(e.pageY+t.y);this._panEnd.set(i,a)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){const t=this._getSecondPointerPosition(e),i=e.pageX-t.x,a=e.pageY-t.y,o=Math.sqrt(i*i+a*a);this._dollyEnd.set(0,o),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const h=(e.pageX+t.x)*.5,s=(e.pageY+t.y)*.5;this._updateZoomParameters(h,s)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId){this._pointers.splice(t,1);return}}_isTrackingPointer(e){for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId)return!0;return!1}_trackPointer(e){let t=this._pointerPositions[e.pointerId];t===void 0&&(t=new B,this._pointerPositions[e.pointerId]=t),t.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){const t=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[t]}_customWheelEvent(e){const t=e.deltaMode,i={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(t){case 1:i.deltaY*=16;break;case 2:i.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(i.deltaY*=10),i}}function To(n){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(n.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(n)&&(this._addPointer(n),n.pointerType==="touch"?this._onTouchStart(n):this._onMouseDown(n)))}function Lo(n){this.enabled!==!1&&(n.pointerType==="touch"?this._onTouchMove(n):this._onMouseMove(n))}function Co(n){switch(this._removePointer(n),this._pointers.length){case 0:this.domElement.releasePointerCapture(n.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(Lt),this.state=T.NONE;break;case 1:const e=this._pointers[0],t=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:t.x,pageY:t.y});break}}function Ao(n){let e;switch(n.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case ue.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(n),this.state=T.DOLLY;break;case ue.ROTATE:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=T.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=T.ROTATE}break;case ue.PAN:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=T.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=T.PAN}break;default:this.state=T.NONE}this.state!==T.NONE&&this.dispatchEvent(Qe)}function ko(n){switch(this.state){case T.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(n);break;case T.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(n);break;case T.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(n);break}}function zo(n){this.enabled===!1||this.enableZoom===!1||this.state!==T.NONE||(n.preventDefault(),this.dispatchEvent(Qe),this._handleMouseWheel(this._customWheelEvent(n)),this.dispatchEvent(Lt))}function Ro(n){this.enabled!==!1&&this._handleKeyDown(n)}function Oo(n){switch(this._trackPointer(n),this._pointers.length){case 1:switch(this.touches.ONE){case de.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(n),this.state=T.TOUCH_ROTATE;break;case de.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(n),this.state=T.TOUCH_PAN;break;default:this.state=T.NONE}break;case 2:switch(this.touches.TWO){case de.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(n),this.state=T.TOUCH_DOLLY_PAN;break;case de.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(n),this.state=T.TOUCH_DOLLY_ROTATE;break;default:this.state=T.NONE}break;default:this.state=T.NONE}this.state!==T.NONE&&this.dispatchEvent(Qe)}function Io(n){switch(this._trackPointer(n),this.state){case T.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(n),this.update();break;case T.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(n),this.update();break;case T.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(n),this.update();break;case T.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(n),this.update();break;default:this.state=T.NONE}}function No(n){this.enabled!==!1&&n.preventDefault()}function jo(n){n.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function Uo(n){n.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}const Go={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};class Se{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const Fo=new pt(-1,1,1,-1,0,1);class Bo extends Re{constructor(){super(),this.setAttribute("position",new Ce([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new Ce([0,2,0,0,2,0],2))}}const Ho=new Bo;class Ct{constructor(e){this._mesh=new $(Ho,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,Fo)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}}class $e extends Se{constructor(e,t="tDiffuse"){super(),this.textureID=t,this.uniforms=null,this.material=null,e instanceof Ae?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=mt.clone(e.uniforms),this.material=new Ae({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this._fsQuad=new Ct(this.material)}render(e,t,i){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=i.texture),this._fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}}class lt extends Se{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,i){const a=e.getContext(),o=e.state;o.buffers.color.setMask(!1),o.buffers.depth.setMask(!1),o.buffers.color.setLocked(!0),o.buffers.depth.setLocked(!0);let h,s;this.inverse?(h=0,s=1):(h=1,s=0),o.buffers.stencil.setTest(!0),o.buffers.stencil.setOp(a.REPLACE,a.REPLACE,a.REPLACE),o.buffers.stencil.setFunc(a.ALWAYS,h,4294967295),o.buffers.stencil.setClear(s),o.buffers.stencil.setLocked(!0),e.setRenderTarget(i),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),o.buffers.color.setLocked(!1),o.buffers.depth.setLocked(!1),o.buffers.color.setMask(!0),o.buffers.depth.setMask(!0),o.buffers.stencil.setLocked(!1),o.buffers.stencil.setFunc(a.EQUAL,1,4294967295),o.buffers.stencil.setOp(a.KEEP,a.KEEP,a.KEEP),o.buffers.stencil.setLocked(!0)}}class Yo extends Se{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}}class Ko{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){const i=e.getSize(new B);this._width=i.width,this._height=i.height,t=new Wt(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:Vt}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new $e(Go),this.copyPass.material.blending=qt,this.clock=new Qt}swapBuffers(){const e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){const t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){e===void 0&&(e=this.clock.getDelta());const t=this.renderer.getRenderTarget();let i=!1;for(let a=0,o=this.passes.length;a<o;a++){const h=this.passes[a];if(h.enabled!==!1){if(h.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(a),h.render(this.renderer,this.writeBuffer,this.readBuffer,e,i),h.needsSwap){if(i){const s=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(s.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),l.setFunc(s.EQUAL,1,4294967295)}this.swapBuffers()}lt!==void 0&&(h instanceof lt?i=!0:h instanceof Yo&&(i=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){const t=this.renderer.getSize(new B);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;const i=this._width*this._pixelRatio,a=this._height*this._pixelRatio;this.renderTarget1.setSize(i,a),this.renderTarget2.setSize(i,a);for(let o=0;o<this.passes.length;o++)this.passes[o].setSize(i,a)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class Zo extends Se{constructor(e,t,i=null,a=null,o=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=i,this.clearColor=a,this.clearAlpha=o,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new ae}render(e,t,i){const a=e.autoClear;e.autoClear=!1;let o,h;this.overrideMaterial!==null&&(h=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),this.clearAlpha!==null&&(o=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:i),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(o),this.overrideMaterial!==null&&(this.scene.overrideMaterial=h),e.autoClear=a}}const ve={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
		precision highp float;

		uniform mat4 modelViewMatrix;
		uniform mat4 projectionMatrix;

		attribute vec3 position;
		attribute vec2 uv;

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		precision highp float;

		uniform sampler2D tDiffuse;

		#include <tonemapping_pars_fragment>
		#include <colorspace_pars_fragment>

		varying vec2 vUv;

		void main() {

			gl_FragColor = texture2D( tDiffuse, vUv );

			// tone mapping

			#ifdef LINEAR_TONE_MAPPING

				gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );

			#elif defined( REINHARD_TONE_MAPPING )

				gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );

			#elif defined( CINEON_TONE_MAPPING )

				gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );

			#elif defined( ACES_FILMIC_TONE_MAPPING )

				gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );

			#elif defined( AGX_TONE_MAPPING )

				gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );

			#elif defined( NEUTRAL_TONE_MAPPING )

				gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );

			#elif defined( CUSTOM_TONE_MAPPING )

				gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );

			#endif

			// color space

			#ifdef SRGB_TRANSFER

				gl_FragColor = sRGBTransferOETF( gl_FragColor );

			#endif

		}`};class Xo extends Se{constructor(){super(),this.uniforms=mt.clone(ve.uniforms),this.material=new $t({name:ve.name,uniforms:this.uniforms,vertexShader:ve.vertexShader,fragmentShader:ve.fragmentShader}),this._fsQuad=new Ct(this.material),this._outputColorSpace=null,this._toneMapping=null}render(e,t,i){this.uniforms.tDiffuse.value=i.texture,this.uniforms.toneMappingExposure.value=e.toneMappingExposure,(this._outputColorSpace!==e.outputColorSpace||this._toneMapping!==e.toneMapping)&&(this._outputColorSpace=e.outputColorSpace,this._toneMapping=e.toneMapping,this.material.defines={},Jt.getTransfer(this._outputColorSpace)===eo&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===to?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===oo?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===so?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===gt?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===io?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===ao?this.material.defines.NEUTRAL_TONE_MAPPING="":this._toneMapping===no&&(this.material.defines.CUSTOM_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}}const Wo={name:"FXAAShader",uniforms:{tDiffuse:{value:null},resolution:{value:new B(1/1024,1/512)}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform vec2 resolution;
		varying vec2 vUv;

		#define EDGE_STEP_COUNT 6
		#define EDGE_GUESS 8.0
		#define EDGE_STEPS 1.0, 1.5, 2.0, 2.0, 2.0, 4.0
		const float edgeSteps[EDGE_STEP_COUNT] = float[EDGE_STEP_COUNT]( EDGE_STEPS );

		float _ContrastThreshold = 0.0312;
		float _RelativeThreshold = 0.063;
		float _SubpixelBlending = 1.0;

		vec4 Sample( sampler2D  tex2D, vec2 uv ) {

			return texture( tex2D, uv );

		}

		float SampleLuminance( sampler2D tex2D, vec2 uv ) {

			return dot( Sample( tex2D, uv ).rgb, vec3( 0.3, 0.59, 0.11 ) );

		}

		float SampleLuminance( sampler2D tex2D, vec2 texSize, vec2 uv, float uOffset, float vOffset ) {

			uv += texSize * vec2(uOffset, vOffset);
			return SampleLuminance(tex2D, uv);

		}

		struct LuminanceData {

			float m, n, e, s, w;
			float ne, nw, se, sw;
			float highest, lowest, contrast;

		};

		LuminanceData SampleLuminanceNeighborhood( sampler2D tex2D, vec2 texSize, vec2 uv ) {

			LuminanceData l;
			l.m = SampleLuminance( tex2D, uv );
			l.n = SampleLuminance( tex2D, texSize, uv,  0.0,  1.0 );
			l.e = SampleLuminance( tex2D, texSize, uv,  1.0,  0.0 );
			l.s = SampleLuminance( tex2D, texSize, uv,  0.0, -1.0 );
			l.w = SampleLuminance( tex2D, texSize, uv, -1.0,  0.0 );

			l.ne = SampleLuminance( tex2D, texSize, uv,  1.0,  1.0 );
			l.nw = SampleLuminance( tex2D, texSize, uv, -1.0,  1.0 );
			l.se = SampleLuminance( tex2D, texSize, uv,  1.0, -1.0 );
			l.sw = SampleLuminance( tex2D, texSize, uv, -1.0, -1.0 );

			l.highest = max( max( max( max( l.n, l.e ), l.s ), l.w ), l.m );
			l.lowest = min( min( min( min( l.n, l.e ), l.s ), l.w ), l.m );
			l.contrast = l.highest - l.lowest;
			return l;

		}

		bool ShouldSkipPixel( LuminanceData l ) {

			float threshold = max( _ContrastThreshold, _RelativeThreshold * l.highest );
			return l.contrast < threshold;

		}

		float DeterminePixelBlendFactor( LuminanceData l ) {

			float f = 2.0 * ( l.n + l.e + l.s + l.w );
			f += l.ne + l.nw + l.se + l.sw;
			f *= 1.0 / 12.0;
			f = abs( f - l.m );
			f = clamp( f / l.contrast, 0.0, 1.0 );

			float blendFactor = smoothstep( 0.0, 1.0, f );
			return blendFactor * blendFactor * _SubpixelBlending;

		}

		struct EdgeData {

			bool isHorizontal;
			float pixelStep;
			float oppositeLuminance, gradient;

		};

		EdgeData DetermineEdge( vec2 texSize, LuminanceData l ) {

			EdgeData e;
			float horizontal =
				abs( l.n + l.s - 2.0 * l.m ) * 2.0 +
				abs( l.ne + l.se - 2.0 * l.e ) +
				abs( l.nw + l.sw - 2.0 * l.w );
			float vertical =
				abs( l.e + l.w - 2.0 * l.m ) * 2.0 +
				abs( l.ne + l.nw - 2.0 * l.n ) +
				abs( l.se + l.sw - 2.0 * l.s );
			e.isHorizontal = horizontal >= vertical;

			float pLuminance = e.isHorizontal ? l.n : l.e;
			float nLuminance = e.isHorizontal ? l.s : l.w;
			float pGradient = abs( pLuminance - l.m );
			float nGradient = abs( nLuminance - l.m );

			e.pixelStep = e.isHorizontal ? texSize.y : texSize.x;

			if (pGradient < nGradient) {

				e.pixelStep = -e.pixelStep;
				e.oppositeLuminance = nLuminance;
				e.gradient = nGradient;

			} else {

				e.oppositeLuminance = pLuminance;
				e.gradient = pGradient;

			}

			return e;

		}

		float DetermineEdgeBlendFactor( sampler2D  tex2D, vec2 texSize, LuminanceData l, EdgeData e, vec2 uv ) {

			vec2 uvEdge = uv;
			vec2 edgeStep;
			if (e.isHorizontal) {

				uvEdge.y += e.pixelStep * 0.5;
				edgeStep = vec2( texSize.x, 0.0 );

			} else {

				uvEdge.x += e.pixelStep * 0.5;
				edgeStep = vec2( 0.0, texSize.y );

			}

			float edgeLuminance = ( l.m + e.oppositeLuminance ) * 0.5;
			float gradientThreshold = e.gradient * 0.25;

			vec2 puv = uvEdge + edgeStep * edgeSteps[0];
			float pLuminanceDelta = SampleLuminance( tex2D, puv ) - edgeLuminance;
			bool pAtEnd = abs( pLuminanceDelta ) >= gradientThreshold;

			for ( int i = 1; i < EDGE_STEP_COUNT && !pAtEnd; i++ ) {

				puv += edgeStep * edgeSteps[i];
				pLuminanceDelta = SampleLuminance( tex2D, puv ) - edgeLuminance;
				pAtEnd = abs( pLuminanceDelta ) >= gradientThreshold;

			}

			if ( !pAtEnd ) {

				puv += edgeStep * EDGE_GUESS;

			}

			vec2 nuv = uvEdge - edgeStep * edgeSteps[0];
			float nLuminanceDelta = SampleLuminance( tex2D, nuv ) - edgeLuminance;
			bool nAtEnd = abs( nLuminanceDelta ) >= gradientThreshold;

			for ( int i = 1; i < EDGE_STEP_COUNT && !nAtEnd; i++ ) {

				nuv -= edgeStep * edgeSteps[i];
				nLuminanceDelta = SampleLuminance( tex2D, nuv ) - edgeLuminance;
				nAtEnd = abs( nLuminanceDelta ) >= gradientThreshold;

			}

			if ( !nAtEnd ) {

				nuv -= edgeStep * EDGE_GUESS;

			}

			float pDistance, nDistance;
			if ( e.isHorizontal ) {

				pDistance = puv.x - uv.x;
				nDistance = uv.x - nuv.x;

			} else {

				pDistance = puv.y - uv.y;
				nDistance = uv.y - nuv.y;

			}

			float shortestDistance;
			bool deltaSign;
			if ( pDistance <= nDistance ) {

				shortestDistance = pDistance;
				deltaSign = pLuminanceDelta >= 0.0;

			} else {

				shortestDistance = nDistance;
				deltaSign = nLuminanceDelta >= 0.0;

			}

			if ( deltaSign == ( l.m - edgeLuminance >= 0.0 ) ) {

				return 0.0;

			}

			return 0.5 - shortestDistance / ( pDistance + nDistance );

		}

		vec4 ApplyFXAA( sampler2D  tex2D, vec2 texSize, vec2 uv ) {

			LuminanceData luminance = SampleLuminanceNeighborhood( tex2D, texSize, uv );
			if ( ShouldSkipPixel( luminance ) ) {

				return Sample( tex2D, uv );

			}

			float pixelBlend = DeterminePixelBlendFactor( luminance );
			EdgeData edge = DetermineEdge( texSize, luminance );
			float edgeBlend = DetermineEdgeBlendFactor( tex2D, texSize, luminance, edge, uv );
			float finalBlend = max( pixelBlend, edgeBlend );

			if (edge.isHorizontal) {

				uv.y += edge.pixelStep * finalBlend;

			} else {

				uv.x += edge.pixelStep * finalBlend;

			}

			return Sample( tex2D, uv );

		}

		void main() {

			gl_FragColor = ApplyFXAA( tDiffuse, resolution.xy, vUv );

		}`};let Ue=24317;function _(n=0,e=1){return Ue=Math.imul(Ue,1664525)+1013904223>>>0,n+Ue/4294967296*(e-n)}const ke=new ro(new Uint8Array([116,167,208,242]),4,1,lo);ke.minFilter=ke.magFilter=qe;ke.needsUpdate=!0;function S(n,e={}){return new uo({color:n,gradientMap:ke,...e})}const r={red:S("#b34536"),redLight:S("#ca5642"),redDark:S("#79372f"),plaster:S("#dcc9a8"),paper:S("#e7d5b1"),white:S("#f4ead8",{side:K}),wood:S("#72513d"),woodLight:S("#976b46"),woodDark:S("#45332d"),roof:S("#37454b"),tile:S("#4c5b5e"),roofEdge:S("#2b373e"),brass:S("#b49552"),rope:S("#b99c6c"),stone:S("#8f9790"),stoneLight:S("#a5aa9f"),stoneDark:S("#68736c"),soil:S("#685744"),earth:S("#9e9075"),grass:S("#788b59"),moss:S("#5e784c"),leaf:S("#65834c"),leafLight:S("#8caa68"),leafDark:S("#435f45"),pink:S("#d89796"),pinkLight:S("#e7b8ac"),pinkDark:S("#b77680"),amber:S("#bf8b49"),amberLight:S("#d9ad65"),glow:S("#ffdc9e",{emissive:"#ffb85b",emissiveIntensity:.55}),water:new ho({color:"#659597",roughness:.2,metalness:.25})},W=[],At=[],kt=S("#e7d5b1",{emissive:"#ffad52",emissiveIntensity:0});let _wSeed=81923;function _w(n=0,e=1){return _wSeed=Math.imul(_wSeed,1664525)+1013904223>>>0,n+_wSeed/4294967296*(e-n)}function zt(n,e,t,i){const a=new Mt("#ffbc70",0,i,2);a.position.y=e,n.add(a);const ph=_w(0,62.8),gMat=S("#ffdc9e",{emissive:"#ffb85b",emissiveIntensity:.55});gMat.onBeforeCompile=sh=>{sh.fragmentShader=sh.fragmentShader.replace("#include <emissivemap_fragment>","#include <emissivemap_fragment>\nfloat cFres=pow(clamp(dot(normalize(vNormal),normalize(vViewPosition)),0.0,1.0),2.0);totalEmissiveRadiance*=vec3(1.0)+vec3(0.22,0.14,0.04)*cFres;")};const entry={light:a,power:t,baseY:e,phase:ph,glowMat:gMat};At.push(entry);return entry}const Rt=new bt(1,1,1),Vo=new _t(1,1),qo=new co({color:"#403a39",transparent:!0,opacity:.22}),Qo=new fo(Rt);function I(n,e,t,i=0,a=0,o=0){const h=new $(e,t);return h.position.set(i,a,o),h.castShadow=!0,h.receiveShadow=!0,n.add(h),h}function z(n,e=0,t=0,i=0){const a=new le;return a.position.set(e,t,i),n.add(a),a}function p(n,e,t,i,a,o,h,s=r.wood,l=!0){const c=I(n,Rt,s,a,o,h);return c.scale.set(e,t,i),l&&c.add(new wt(Qo,qo)),c}function A(n,e,t,i,a,o,h,s=r.wood,l=10){return I(n,new yt(e,t,i,l),s,a,o,h)}function Q(n,e,t,i,a,o,h,s){const l=I(n,Vo,s,e,t,i);return l.scale.set(a,o,h),l.rotation.set(_(-.2,.2),_(0,6),_(-.2,.2)),l}function j(n,e,t,i,a=r.wood,o=i){const h=new k(...e),s=new k(...t),l=A(n,o,i,h.distanceTo(s),0,0,0,a,8);return l.position.copy(h).add(s).multiplyScalar(.5),l.quaternion.setFromUnitVectors(new k(0,1,0),s.sub(h).normalize()),l}function ce(n,e,t,i,a=48){const o=new po(e.map(h=>new k(...h)));return I(n,new mo(o,a,t,5,!1),i)}function fe(n,e,t,i,a,o,h,s={}){const l=document.createElement("canvas");l.width=512,l.height=256;const c=l.getContext("2d");c.fillStyle=s.bg||"#e8d5ae",c.fillRect(0,0,512,256),c.strokeStyle=s.border||"#a48258",c.lineWidth=10,c.strokeRect(12,12,488,232),c.fillStyle=s.color||"#534435",c.textAlign="center",c.textBaseline="middle",c.font=`${s.fontSize||76}px "Yu Mincho", "Noto Serif CJK JP", "SimSun", serif`,c.fillText(e,256,136);const f=new xt(l);f.colorSpace=xe;const m=S("#ffffff",{map:f,...(s.matOpts||{})});return I(n,new he(t,i),m,a,o,h)}function me(n,e,t,i,a,o,h,s=!1){const l=z(n,a,o,h),c=e/2,__e=(me.E||(me.E=[])).push([l,c,t,s]),f=m=>i*Math.pow(1-m,1.5)+.2*Math.pow(m,8);for(const m of[-1,1]){const u=[],d=[];for(let g=0;g<=1;g++)for(let w=0;w<=24;w++){const x=w/24;u.push(m*c*x,f(x),(g-.5)*t)}for(let g=0;g<24;g++){const w=g,x=g+1,P=g+25,R=g+26;m===1?d.push(w,P,x,x,P,R):d.push(w,x,P,x,R,P)}const y=new Re;y.setAttribute("position",new Ce(u,3)),y.setIndex(d),y.computeVertexNormals(),I(l,y,r.roof);const b=Math.ceil(t/(s?.3:.24));for(let g=0;g<=b;g++){const w=-t/2+g*t/b,x=Array.from({length:13},(P,R)=>[m*c*R/12,f(R/12)+.024,w]);ce(l,x,s?.024:.033,g%4===0?r.roofEdge:r.tile,20)}for(let g=1;g<9;g++){const w=g/9;p(l,.034,.018,t,m*c*w,f(w)+.013,0,r.roofEdge,!1)}for(const g of[-t/2-.018,t/2+.018]){const w=Array.from({length:20},(x,P)=>[m*c*P/19,f(P/19)-.045,g]);ce(l,w,.105,r.roofEdge,28),ce(l,w.map(x=>[x[0],x[1]-.05,x[2]+Math.sign(g)*.068]),.032,r.woodLight,28)}p(l,.14,.17,t+.1,m*c,.12,0,r.roofEdge);{const rn=Math.max(3,Math.round(t/(s?.17:.2)));for(let g=0;g<rn;g++){const rf=p(l,s?.22:.32,s?.04:.055,s?.04:.055,m*(c-(s?.08:.12)),-.01,-t/2+(g+.5)*t/rn,r.woodLight,!1);rf.rotation.z=m*.2}}for(let g=0;g<b;g++){const w=A(l,.052,.052,.055,m*c,.19,-t/2+(g+.5)*t/b,r.tile,8);w.rotation.z=Math.PI/2}}p(l,.25,.17,t+.35,0,i+.055,0,r.roofEdge),p(l,.17,.09,t+.48,0,i+.17,0,r.tile);for(const m of[-1,1]){q(l,s?.34:.5,s?.26:.36,.07,0,i+.18,m*(t/2+.13),r.roofEdge,.03);const u=A(l,.13,.13,.11,0,i+.18,m*(t/2+.16),r.brass,10);u.rotation.x=Math.PI/2}return l}function Ot(n,e,t,i,a=1){const o=z(n,e,t,i);o.scale.setScalar(a);const h=new ye;return[[0,0],[.16,-.03],[.16,-.23],[.29,-.23],[.27,-.48],[.13,-.48],[.13,-.69],[-.04,-.64],[-.04,-.39],[.09,-.39],[.09,-.18],[-.02,-.18]].forEach(([s,l],c)=>c?h.lineTo(s,l):h.moveTo(s,l)),h.closePath(),I(o,new St(h),r.white),W.push({obj:o,type:"sway",phase:_(0,6),amount:.22,depth:.1}),o}function It(n,e,t,i,a=1){const o=z(n,e,t,i);o.scale.setScalar(a);const lt=zt(o,0,8,5);j(o,[0,.32,0],[0,.65,0],.024,r.woodDark);const h=I(o,new Ye(.26,12,10),lt.glowMat);h.scale.y=1.35;for(let s=0;s<9;s++){const l=-.27+s*.068,c=Math.sqrt(Math.max(0,1-(l/.36)**2))*.261,f=I(o,new Oe(c,.008,4,24),r.woodLight,0,l,0);f.rotation.x=Math.PI/2}A(o,.12,.12,.08,0,.34,0,r.woodDark),A(o,.12,.12,.07,0,-.34,0,r.woodDark),fe(o,"奉 納",.26,.22,0,0,.255,{bg:"#ffdaa0",fontSize:85,border:"#ffdaa0"}),W.push({obj:o,type:"sway",isLantern:!0,phase:_(0,6),amount:.048,depth:.03});return o}function ht(n,e,t,i,a=1){const o=z(n,e,t,i);o.scale.setScalar(a);const lt=zt(o,1.58,5,4);p(o,.87,.15,.87,0,.075,0,r.stoneDark),p(o,.68,.18,.68,0,.24,0,r.stone),A(o,.16,.24,.86,0,.72,0,r.stone,6),A(o,.43,.23,.18,0,1.22,0,r.stone,4).rotation.y=Math.PI/4,p(o,.62,.09,.62,0,1.36,0,r.stoneLight),p(o,.39,.39,.39,0,1.58,0,lt.glowMat,!1);for(const h of[-.25,.25])for(const s of[-.25,.25])p(o,.1,.48,.1,h,1.6,s,r.stone);return A(o,.15,.61,.31,0,1.98,0,r.stoneDark,4).rotation.y=Math.PI/4,(()=>{for(const a of[-1,1])for(const b of[-1,1]){const w=q(o,.07,.13,.07,a*.42,1.88,b*.42,r.stoneDark,.02);w.rotation.set(-b*.45,0,a*.45)}})(),p(o,.89,.09,.89,0,1.83,0,r.stone),A(o,.1,.16,.13,0,2.18,0,r.stone),Q(o,0,2.29,0,.13,.17,.13,r.stoneLight),(_(),_(),_()),o}function pe(n,e,t,i,a,o){const h=z(n,i,a,o);p(h,e,t,.09,0,0,0,kt);for(let s=0;s<=5;s++)p(h,.045,t,.04,-e/2+s*e/5,0,.069,r.woodDark,!1);for(let s=0;s<=6;s++)p(h,e,.035,.04,0,-t/2+s*t/6,.069,r.woodDark,!1);return p(h,e,.1,.13,0,t/2+.02,0,r.wood),p(h,e,.1,.13,0,-t/2-.02,0,r.wood),h}function $o(n){const e=z(n,0,.68,-3.55);p(e,7.75,.33,6.25,0,.17,0,r.stoneDark);for(const s of[-3.3,-1.7,0,1.7,3.3])for(const l of[-2.5,0,2.5])p(e,.46,.38,.48,s,.51,l,r.stone),p(e,.23,.6,.23,s,.75,l,r.woodDark);p(e,7.7,.25,6.5,0,.91,.18,r.woodDark);for(let s=0;s<35;s++)p(e,.212,.09,6.38,-3.72+s*.219,1.085,.18,s%4===0?r.wood:r.woodLight,!1);p(e,6.25,2.85,4.35,0,2.59,-.46,r.plaster);for(const s of[-1,1]){for(let c=0;c<21;c++)p(e,.1,.87,.19,s*3.16,1.59,-2.5+c*.204,c%3?r.wood:r.woodLight,!1);for(const c of[-2.61,-.5,1.69])p(e,.22,3.13,.22,s*3.16,2.64,c,r.red);const l=pe(e,1.42,1.2,s*3.23,2.85,-.55);l.rotation.y=s*Math.PI/2,p(e,.14,.14,4.6,s*3.17,2.12,-.48,r.redDark),p(e,.23,.2,4.7,s*3.18,4.03,-.45,r.red)}for(let s=0;s<30;s++)p(e,.2,1.03,.08,-3+s*.207,1.69,-2.68,s%3?r.wood:r.woodLight,!1);for(const s of[-3.15,-1.57,0,1.57,3.15])p(e,.2,3,.2,s,2.66,-2.65,r.red);pe(e,2.1,1.07,0,2.85,-2.72).rotation.y=Math.PI;for(const s of[-3.16,-1.12,1.12,3.16])p(e,.22,3.14,.24,s,2.64,1.75,r.red);for(const s of[-2.17,2.17])pe(e,1.61,2.22,s,2.49,1.77);p(e,2.03,2.34,.17,0,2.39,1.8,r.woodDark);for(const s of[-.53,.53]){p(e,.98,2.24,.1,s,2.42,1.91,r.wood);for(let l=0;l<6;l++)p(e,.044,1.95,.06,s-.4+l*.16,2.48,1.99,r.woodLight,!1);for(const l of[1.52,2.04,3.28])p(e,.92,.085,.08,s,l,2.02,r.woodDark);A(e,.065,.065,.04,s*.32,2.27,2.075,r.brass).rotation.x=Math.PI/2}p(e,6.57,.26,.32,0,3.83,1.79,r.red),p(e,6.95,.24,4.98,0,4.13,-.45,r.woodDark);const t=new ye;t.moveTo(-3.45,0),t.lineTo(0,2.17),t.lineTo(3.45,0),t.closePath();for(const s of[-2.9,2.05]){const l=I(e,new St(t),r.plaster,0,4.19,s);s<0&&(l.rotation.y=Math.PI),p(e,.18,2.02,.19,0,5.17,s+.05,r.red),p(e,5.7,.16,.19,0,4.61,s+.06,r.red),j(e,[-3.3,4.21,s+.08],[0,6.28,s+.08],.09,r.red),j(e,[3.3,4.21,s+.08],[0,6.28,s+.08],.09,r.red);for(const c of[-1.5,1.5])p(e,.13,.95,.18,c,4.69,s+.08,r.red)}for(const s of[-1,1])for(let l=0;l<15;l++){const c=-3.15+l*.42;p(e,.72,.12,.12,s*3.48,4.1,c,r.woodLight),p(e,.36,.15,.16,s*3.25,3.98,c,r.red)}me(e,8.85,6.9,2.5,0,4.18,-.43);for(const s of[-1.7,1.7])p(e,.28,3.04,.28,s,2.61,3.08,r.red),p(e,.39,.2,.38,s,1.26,3.08,r.woodDark),p(e,.56,.17,.4,s,3.86,3.08,r.redDark),p(e,.78,.15,.45,s,4,3.08,r.red),j(e,[s,3.32,3.07],[s*.65,3.95,3.07],.075,r.redLight);p(e,4.04,.21,.3,0,3.97,3.08,r.red),me(e,4.7,2.33,1.12,0,4.09,2.73,!0),fe(e,"博 麗 神 社",1.42,.48,0,4.59,3.925,{bg:"#344343",color:"#e7c784",border:"#bc9e62"});for(const s of[-1,1]){for(let l=0;l<6;l++){const c=-2.75+l*1.16;p(e,.14,.89,.14,s*3.68,1.55,c,r.red),A(e,.07,.13,.16,s*3.68,2.05,c,r.brass)}for(const l of[1.46,1.94])p(e,.12,.13,5.93,s*3.68,l,.13,r.red);for(const l of[1.46,1.94])p(e,1.65,.13,.14,s*2.92,l,3.07,r.red);p(e,.14,.93,.14,s*2.14,1.57,3.07,r.red),A(e,.07,.12,.15,s*2.14,2.08,3.07,r.brass)}for(let s=0;s<5;s++){const l=(5-s)*.198,c=3.3+s*.31;p(e,3.7,l,.37,0,l/2,c,r.wood),p(e,3.83,.06,.38,0,l+.016,c,r.woodLight)}const i=Array.from({length:25},(s,l)=>{const c=-1.82+l*3.64/24;return[c,3.83-.25*(1-(c/1.82)**2),3.28]});ce(e,i,.075,r.rope);for(let s=0;s<66;s++){const l=-1.8+s*3.6/65,c=3.83-.25*(1-(l/1.82)**2),f=I(e,new Oe(.077,.013,4,7),r.woodLight,l,c,3.28);f.rotation.y=Math.PI/2+.3}for(const s of[-1.36,-.66,.62,1.28])Ot(e,s,3.64,3.32,.64);const a=z(e,0,3.34,3.34);A(a,.14,.25,.28,0,0,0,r.brass,16),Q(a,0,.16,0,.14,.13,.14,r.brass),A(a,.265,.265,.05,0,-.15,0,r.woodDark,16);const o=z(e,0,3.15,3.36);for(let s=0;s<3;s++){const l=Array.from({length:90},(c,f)=>{const m=f/89,u=m*Math.PI*16+s*Math.PI*2/3;return[Math.cos(u)*.035,-m*1.61,Math.sin(u)*.035]});ce(o,l,.027,s===0?r.redLight:r.rope,90)}p(o,.29,.11,.12,0,-1.53,0,r.woodLight),A(o,.07,.12,.2,0,-1.72,0,r.rope),W.push({obj:o,type:"sway",phase:1.2,amount:.08,depth:.025});const h=z(e,0,1.12,2.69);p(h,1.61,.69,.8,0,.37,0,r.wood);for(const s of[.12,.66])p(h,1.73,.1,.88,0,s,0,r.woodDark);for(let s=0;s<9;s++)p(h,.115,.055,.89,-.73+s*.183,.77,0,r.woodLight);fe(h,"奉 納",.7,.37,0,.4,.406,{bg:"#9d7853",color:"#ead4a3",border:"#9d7853"});for(const s of[-2.61,2.61])It(e,s,3.28,2.56,1.1);p(e,.72,.54,.61,3.01,1.4,-1.82,r.wood),p(e,.8,.09,.68,3.01,1.71,-1.82,r.woodLight);for(const s of[-1.95,-1.68])p(e,.05,.53,.66,3.1,1.4,s,r.woodDark);return e}function Jo(n){const e=z(n,0,.04,7.1);for(const o of[-1,1]){const h=o*2.35;p(e,.85,.16,.83,h,.12,0,r.stoneDark),A(e,.37,.4,.38,h,.36,0,r.roofEdge,12);const s=A(e,.22,.3,4.35,h-o*.1,2.64,0,r.red,14);s.rotation.z=o*.043,A(e,.29,.32,.15,h,.6,0,r.redDark,12),p(e,.52,.13,.6,o*2.16,4.63,0,r.redDark)}p(e,5.75,.28,.33,0,3.74,0,r.red),p(e,.19,.71,.27,0,4.21,0,r.red);for(const o of[-1,1])p(e,.1,.39,.49,o*2.47,3.74,0,r.woodDark);const t=Array.from({length:25},(o,h)=>{const s=-3.24+h*6.48/24;return[s,4.65+.21*(Math.abs(s)/3.24)**4,0]}),i=new ye;t.forEach(([o,h],s)=>s?i.lineTo(o,h):i.moveTo(o,h)),[...t].reverse().forEach(([o,h])=>i.lineTo(o,h-.25)),i.closePath(),I(e,new Ke(i,{depth:.57,bevelEnabled:!1}),r.red,0,0,-.285);const a=new ye;t.forEach(([o,h],s)=>s?a.lineTo(o*1.035,h+.14):a.moveTo(o*1.035,h+.14)),[...t].reverse().forEach(([o,h])=>a.lineTo(o*1.035,h+.005)),a.closePath(),I(e,new Ke(a,{depth:.7,bevelEnabled:!1}),r.roofEdge,0,0,-.35),fe(e,"博麗神社",.73,.44,0,4.2,.17,{bg:"#394444",color:"#e8c87e",border:"#ae925b"}),ce(e,[[-2.16,3.53,.13],[-1.1,3.25,.13],[0,3.18,.13],[1.1,3.25,.13],[2.16,3.53,.13]],.045,r.rope);for(const o of[-1.4,-.48,.44,1.32])Ot(e,o,3.24+Math.abs(o)*.09,.16,.58)}function es(n){const e=z(n,-6.05,.06,2.67);p(e,3.36,.2,2.87,0,.1,0,r.stoneDark);for(let t=-1;t<=1;t++)for(let i=-1;i<=1;i++)p(e,.98,.045,.84,t*1.035,.22,i*.88,r.stone);for(const t of[-1.3,1.3])for(const i of[-.98,.98])p(e,.4,.25,.4,t,.35,i,r.stone),p(e,.16,2.38,.16,t,1.58,i,r.wood),j(e,[t,2.15,i],[t*.6,2.67,i],.06,r.woodLight);for(const t of[-1.04,1.04])p(e,2.9,.16,.21,0,2.7,t,r.woodDark);me(e,3.5,3.05,1.02,0,2.71,0,!0),p(e,1.82,.43,1.02,0,.68,0,r.stoneDark);for(const t of[-.9,.9])p(e,.19,.25,1.05,t,.98,0,r.stone);for(const t of[-.47,.47])p(e,1.81,.25,.15,0,.98,t,r.stoneLight);wUni={uTime:{value:0},uDaylight:{value:1},uRipple:{value:0},uRain:{value:0},uSunDir:{value:new k(0,26,19).normalize()},uSunCol:{value:new ae("#ffe0ac")},tSky:{value:null},tRefl:{value:null}};
const wMat=new Ae({uniforms:wUni});wMesh=I(e,new he(1.62,.80,48,28),wMat,0,1.055,0);wMesh.rotation.x=-Math.PI/2;wMesh.castShadow=!1;W.push({obj:wMesh,type:"water",u:wUni});
const sMat=new Ae({uniforms:wUni,transparent:!0,depthWrite:!1,vertexShader:`
varying vec2 vUv;
void main(){vUv=uv;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.0);}
`,fragmentShader:`
uniform float uTime;
uniform float uDaylight;
varying vec2 vUv;
void main(){
  float flow=sin(vUv.y*22.0+uTime*16.0)*0.5+0.5;
  float streak=sin(vUv.x*18.8+sin(vUv.y*10.0+uTime*12.0))*0.5+0.5;
  vec3 base=mix(vec3(0.35,0.58,0.66),vec3(0.72,0.90,0.95),0.35+0.65*uDaylight);
  vec3 col=mix(base,vec3(0.96,0.99,1.0),flow*streak*0.65);
  float alpha=0.68+0.22*flow;
  gl_FragColor=vec4(col,alpha);
}`});
for(const t of[-.32,.29])j(e,[-1.05,1.13,t],[1.05,1.13,t],.042,r.rope);
for(const t of[-.53,.22])j(e,[t,1.17,-.35],[t+.18,1.18,.54],.026,r.woodLight),A(e,.105,.09,.12,t,1.21,-.29,r.woodLight,12),A(e,.072,.072,.005,t,1.275,-.29,r.woodDark,12);
j(e,[-.85,.24,-.36],[-.85,1.56,-.36],.064,r.moss),
j(e,[-.85,1.51,-.36],[-.4,1.35,0],.046,r.moss);
const sMesh=A(e,.013,.019,.31,-.4,1.20,0,sMat,12);sMesh.castShadow=!1;}function ts(n){const e=z(n,6.55,.67,-4);p(e,3.04,.27,3.88,0,.15,0,r.stoneDark),p(e,2.74,2.28,3.35,0,1.45,0,r.plaster);for(const i of[-1.38,1.38]){for(let a=0;a<17;a++)p(e,.06,.79,.18,i,.68,-1.57+a*.195,r.wood,!1);for(const a of[-1.7,0,1.7])p(e,.14,2.5,.14,i,1.5,a,r.woodDark);pe(e,1.29,1.06,i*1.01,1.82,.16).rotation.y=i>0?Math.PI/2:-Math.PI/2}for(let i=0;i<14;i++)p(e,.18,.78,.07,-1.29+i*.2,.69,-1.7,r.wood,!1);pe(e,1.08,1.76,-.61,1.29,1.71),pe(e,1.12,1.21,.66,1.71,1.71),p(e,2.75,.15,.2,0,2.59,1.74,r.woodDark),me(e,3.67,4.39,1.29,0,2.65,0,!0),p(e,2.78,.18,.92,0,.36,2.04,r.wood),p(e,1.46,.14,.38,-.52,.18,2.65,r.stone),fe(e,"社 務 所",.87,.27,.62,2.45,1.86),It(e,1.05,2.05,2.19,.68),p(e,1.16,.11,.48,.55,.72,2.23,r.woodLight);for(const i of[.08,1.03])p(e,.1,.32,.35,i,.54,2.23,r.woodDark);A(e,.16,.16,.025,.51,.793,2.23,r.redDark,18),A(e,.06,.045,.1,.48,.85,2.22,r.paper,10),ct(e,1.79,.15,.97,.72),ct(e,1.8,.15,.05,.86);const t=z(e,-1.54,.1,1.83);t.rotation.z=-.18,j(t,[0,.2,0],[0,1.84,0],.028,r.woodLight);for(let i=0;i<15;i++)j(t,[0,.41,0],[(i-7)*.027,.02,_(-.05,.05)],.012,r.rope);p(t,.22,.046,.11,0,.33,0,r.redDark)}function ct(n,e,t,i,a=1){const o=z(n,e,t,i);o.scale.setScalar(a),A(o,.31,.29,.69,0,.35,0,r.woodLight,14);for(let h=0;h<14;h++){const s=h*Math.PI*2/14;j(o,[Math.cos(s)*.303,.03,Math.sin(s)*.303],[Math.cos(s)*.314,.68,Math.sin(s)*.314],.01,r.woodDark)}for(const h of[.15,.57]){const s=I(o,new Oe(.311,.025,4,16),r.woodDark,0,h,0);s.rotation.x=Math.PI/2}A(o,.285,.285,.028,0,.707,0,r.wood,14)}function os(n){const e=z(n,5.9,.05,2.55);e.rotation.y=-.17;for(const h of[-1.23,1.23])p(e,.16,2.4,.17,h,1.2,0,r.wood),p(e,.42,.12,.62,h,.08,0,r.stone);me(e,2.98,.96,.55,0,2.43,0,!0);for(const h of[1.25,2.02])p(e,2.68,.09,.13,0,h,0,r.woodDark);const t=new ye;t.moveTo(-.17,-.37),t.lineTo(.17,-.37),t.lineTo(.17,-.13),t.lineTo(0,0),t.lineTo(-.17,-.13),t.closePath();const i=new Ke(t,{depth:.045,bevelEnabled:!1});for(let h=0;h<2;h++)for(let s=0;s<6;s++){const l=z(e,-.98+s*.39,1.17+h*.77,.095+_(0,.05));if(ce(l,[[-.035,0,0],[0,.14,0],[.035,0,0]],.008,r.rope,8),I(l,i,s%3===0?r.woodLight:r.rope),s%2===0)fe(l,["願","福","縁"][s/2],.17,.18,0,-.24,.048,{bg:"#cbb080",border:"#cbb080",fontSize:135});else{p(l,.16,.019,.01,0,-.18,.052,r.redDark,!1);for(let c=0;c<3;c++)p(l,.015,.1,.01,-.05+c*.05,-.27,.052,r.wood,!1)}W.push({obj:l,type:"sway",amount:.17,depth:.18,phase:_(0,6)})}const a=z(n,6.9,.04,5.11);for(const h of[-1.1,1.1])p(a,.13,1.87,.13,h,.94,0,r.red),p(a,.36,.14,.39,h,.1,0,r.stone);for(const h of[.8,1.24,1.71]){j(a,[-1.1,h,0],[1.1,h,0],.018,r.woodDark);for(let s=0;s<10;s++){const l=z(a,-.93+s*.205+_(-.03,.03),h,0),c=p(l,.045,.21,.032,0,-.025,0,r.white,!1);c.rotation.z=_(-.6,.6),p(l,.1,.045,.045,0,0,0,r.white,!1),W.push({obj:l,type:"sway",amount:.24,depth:.12,phase:_(0,6)})}}const o=z(n,-4,.04,5.55);o.rotation.y=.16;for(const h of[-.55,.55])p(o,.13,1.95,.13,h,.98,0,r.woodDark);p(o,1.55,1.03,.12,0,1.44,0,r.wood),fe(o,"境 内 案 内",1.35,.34,0,1.72,.071);for(let h=0;h<3;h++){p(o,.31,.51,.01,-.45+h*.44,1.25,.071,r.paper,!1);for(let s=0;s<5;s++)p(o,_(.15,.24),.016,.005,-.45+h*.44,1.4-s*.064,.079,r.woodLight,!1)}me(o,1.84,.65,.29,0,2.05,0,!0)}const be=new k;function X(n,e,t,i,a,o){const h=2*Math.PI*a/4,s=Math.max(o-2*a,0),l=Math.PI/4;be.copy(e),be[i]=0,be.normalize();const c=.5*h/(h+s),f=1-be.angleTo(n)/l;return Math.sign(be[t])===1?f*c:s/(h+s)+c+c*(1-f)}class Je extends bt{constructor(e=1,t=1,i=1,a=2,o=.1){const h=a*2+1;if(o=Math.min(e/2,t/2,i/2,o),super(1,1,1,h,h,h),this.type="RoundedBoxGeometry",this.parameters={width:e,height:t,depth:i,segments:a,radius:o},h===1)return;const s=this.toNonIndexed();this.index=null,this.attributes.position=s.attributes.position,this.attributes.normal=s.attributes.normal,this.attributes.uv=s.attributes.uv;const l=new k,c=new k,f=new k(e,t,i).divideScalar(2).subScalar(o),m=this.attributes.position.array,u=this.attributes.normal.array,d=this.attributes.uv.array,y=m.length/6,b=new k,g=.5/h;for(let w=0,x=0;w<m.length;w+=3,x+=2)switch(l.fromArray(m,w),c.copy(l),c.x-=Math.sign(c.x)*g,c.y-=Math.sign(c.y)*g,c.z-=Math.sign(c.z)*g,c.normalize(),m[w+0]=f.x*Math.sign(l.x)+c.x*o,m[w+1]=f.y*Math.sign(l.y)+c.y*o,m[w+2]=f.z*Math.sign(l.z)+c.z*o,u[w+0]=c.x,u[w+1]=c.y,u[w+2]=c.z,Math.floor(w/y)){case 0:b.set(1,0,0),d[x+0]=X(b,c,"z","y",o,i),d[x+1]=1-X(b,c,"y","z",o,t);break;case 1:b.set(-1,0,0),d[x+0]=1-X(b,c,"z","y",o,i),d[x+1]=1-X(b,c,"y","z",o,t);break;case 2:b.set(0,1,0),d[x+0]=1-X(b,c,"x","z",o,e),d[x+1]=X(b,c,"z","x",o,i);break;case 3:b.set(0,-1,0),d[x+0]=1-X(b,c,"x","z",o,e),d[x+1]=1-X(b,c,"z","x",o,i);break;case 4:b.set(0,0,1),d[x+0]=1-X(b,c,"x","y",o,e),d[x+1]=1-X(b,c,"y","x",o,t);break;case 5:b.set(0,0,-1),d[x+0]=X(b,c,"x","y",o,e),d[x+1]=1-X(b,c,"y","x",o,t);break}}static fromJSON(e){return new Je(e.width,e.height,e.depth,e.segments,e.radius)}}function q(n,e,t,i,a,o,h,s,l=.12){return I(n,new Je(e,t,i,1,l),s,a,o,h)}function ss(n){q(n,21.8,.44,21.8,0,-1.1,0,r.woodDark,.15),q(n,21.65,.14,21.65,0,-.82,0,r.woodLight,.05),q(n,21.45,.72,21.45,0,-.44,0,r.soil,.14),q(n,21.48,.18,21.48,0,-.04,0,r.earth,.11),q(n,20.92,.65,11.45,0,.34,-4.7,r.earth,.17);for(let t=0;t<2;t++)for(let i=0;i<22;i++){const a=-10+i*.94+t%2*.19;Math.abs(a)<2.15||a>10.15||q(n,_(.82,.9),.28,.34,a,.19+t*.3,1.02,i%3?r.stone:r.stoneDark,.04)}for(const t of[-1,1])for(let i=0;i<2;i++)for(let a=0;a<11;a++)q(n,.27,.28,.95,t*10.4,.18+i*.3,-9.6+a,a%3?r.stone:r.stoneDark,.05);for(const t of[-1,1])for(let i=0;i<25;i++)q(n,.79,.42,.18,-10.1+i*.842,-.42,t*10.68,i%4?r.stoneDark:r.stone,.055),q(n,.18,.42,.79,t*10.68,-.42,-10.1+i*.842,i%3?r.stoneDark:r.stone,.055);for(let t=0;t<4;t++)p(n,4.06,.17,.48,0,.1+t*.155,2.07-t*.43,r.stone),p(n,4.15,.04,.47,0,.2+t*.155,2.07-t*.43,r.stoneLight);for(let t=0;t<11;t++)for(let i=0;i<3;i++){const a=2.7+t*.72,o=(i-1)*.93,h=q(n,.87,.105,.65,o+_(-.016,.016),.105,a,[r.stoneLight,r.stone,r.stoneLight][Math.floor(_(0,3))],.035);h.rotation.y=_(-.02,.02),(t+i)%4===0&&(p(n,.2,.003,.012,o+.2,.162,a+.12,r.stoneDark,!1).rotation.y=.7)}for(let t=0;t<3;t++)for(let i=0;i<4;i++)q(n,.87,.07,.55,(i-1.5)*.92,.71,.5-t*.61,r.stoneLight,.03);for(let t=0;t<13;t++){const i=-1.65+t*.68,a=4.7+Math.sin(t*.34)*.48;if(t===4){_(),_(),_();continue}A(n,_(.26,.38),_(.3,.4),.08,a,i<1.15?.72:.11,i,r.stone,6).rotation.y=_(0,6)}for(const t of[-3.07,3.07])ht(n,t,.07,4.73,1.05),ht(n,t*1.12,.68,.39,.84);const e=(t,i,a,o,h)=>{const s=z(n,t,h,i);s.rotation.y=o;q(s,a+.3,.12,.26,0,.06,0,r.stone,.03);q(s,a+.22,.035,.2,0,.135,0,r.stoneLight,.012);for(let l=0;l<=a;l++){const x=l-a/2;q(s,.14,.86,.14,x,.58,0,r.red,.018);p(s,.17,.05,.17,x,.97,0,r.brass,!1);const c=A(s,0,.13,.13,x,1.06,0,r.roofEdge,4);c.rotation.y=Math.PI/4;p(s,.18,.06,.18,x,.2,0,r.roofEdge,!1)}p(s,a+.26,.07,.19,0,.94,0,r.roofEdge,!1);p(s,a+.12,.07,.1,0,.86,0,r.red,!1);p(s,a+.08,.06,.1,0,.27,0,r.redDark,!1);p(s,a+.08,.045,.08,0,.7,0,r.red,!1);for(let l=0;l<a;l++)for(let k=1;k<6;k++)p(s,.04,.42,.045,l-a/2+k/6,.48,0,r.redDark,!1)};e(0,-9.88,20,0,.65);for(const t of[-1,1])e(t*9.89,-4.88,10,Math.PI/2,.65),e(t*9.89,5.22,9,Math.PI/2,.06),e(t*6.02,9.9,7,0,.06)}function _e(n,e,t,i,a,o="cherry"){const h=z(n,e,t,i);h.scale.setScalar(a);const s=S(o==="pine"?"#68624a":"#6f5146"),l=[[0,0,0],[.12,1.2,-.07],[-.1,2.2,.1],[.28,3.25,0]];for(let u=0;u<l.length-1;u++)j(h,l[u],l[u+1],.2-u*.045,s,.15-u*.045);for(let u=0;u<6;u++){const d=u*Math.PI/3;j(h,[0,.26,0],[Math.cos(d)*.62,.035,Math.sin(d)*.52],.09,s,.025)}const c=z(h),m=[];for(let u=0;u<8;u++){const d=u*2.4,y=_(.9,1.85),b=_(2.45,3.55),g=[Math.cos(d)*y,b,Math.sin(d)*y];j(h,[.02,1.6+u*.12,0],[g[0]*.6,b-.3,g[2]*.6],.095,s,.05),j(h,[g[0]*.6,b-.3,g[2]*.6],g,.05,s,.018),m.push(g)}m.push([.2,3.85,0]);for(let q=0;q<684;q++)_();FOLtree(c,m,o,a);W.push({obj:c,type:"sway",amount:.03,depth:.013,phase:_(0,6)});if(o==="cherry")for(let q=0;q<420;q++)_()}let rainMesh=null,wMesh=null,wUni=null;// === Foliage (anime style): fluffy scalloped canopy clumps, cel shading with cool shadows + rim light, soft tufted grass ===
let FOL_ATLAS=null,FOL_MATS=null,FOL_GRASS_U=null;
const FOL_MOB=(window.matchMedia&&matchMedia("(pointer: coarse)").matches)||Math.min(screen.width,screen.height)<820;
function folRng(seed){let s=seed>>>0;return(a=0,b=1)=>{s=s+0x6D2B79F5|0;let t=Math.imul(s^s>>>15,1|s);t=t+Math.imul(t^t>>>7,61|t)^t;return a+((t^t>>>14)>>>0)/4294967296*(b-a)}}
// Anime cel look on top of the toon ramp: ambient (sky) light is tinted cool, direct light warm, and lit silhouettes get a rim
function folAnime(m,cool,warm,rim,key){
  const prev=m.onBeforeCompile,prevKey=m.customProgramCacheKey;
  m.onBeforeCompile=(sh,rd)=>{prev&&prev.call(m,sh,rd);
    sh.fragmentShader=sh.fragmentShader.replace("#include <lights_fragment_end>",`#include <lights_fragment_end>
  {
    float aLd=dot(reflectedLight.directDiffuse,vec3(0.3,0.59,0.11));
    reflectedLight.indirectDiffuse*=vec3(${cool});
    reflectedLight.directDiffuse*=vec3(${warm});
    vec3 aV=isOrthographic?vec3(0.0,0.0,1.0):normalize(vViewPosition);
    float aRim=pow(1.0-clamp(dot(normalize(normal),aV),0.0,1.0),3.0);
    reflectedLight.directDiffuse+=diffuseColor.rgb*aRim*smoothstep(0.02,0.25,aLd)*${rim.toFixed(3)};
  }`)};
  m.customProgramCacheKey=()=>(prevKey?prevKey.call(m):"")+"|anime-"+key;
  m.needsUpdate=!0;return m;
}
// 4x4 atlas of scalloped clump silhouettes: row 0 leafy, row 1 sakura, row 2 pine pads, row 3 maple.
// Interiors are flat white so the cel shading, not the texture, carries the form.
function folAtlas(){
  if(FOL_ATLAS)return FOL_ATLAS;
  const S0=1024,C=S0/4,cv=document.createElement("canvas");cv.width=cv.height=S0;
  const x=cv.getContext("2d"),rn=folRng(7741);
  const g=v=>{const c=Math.round(255*v);return`rgb(${c},${c},${c})`};
  const disc=(cx,cy,r,v)=>{x.fillStyle=g(v);x.beginPath();x.arc(cx,cy,r,0,7);x.fill()};
  function lobe(cx,cy,a,len,wid,v){x.save();x.translate(cx,cy);x.rotate(a);x.fillStyle=g(v);x.beginPath();x.moveTo(-wid,0);x.quadraticCurveTo(-wid,len*.75,0,len);x.quadraticCurveTo(wid,len*.75,wid,0);x.closePath();x.fill();x.restore()}
  function petal5(cx,cy,R,rot,v){x.save();x.translate(cx,cy);x.rotate(rot);x.fillStyle=g(v);for(let k=0;k<5;k++){x.rotate(Math.PI*2/5);x.beginPath();x.moveTo(0,0);x.bezierCurveTo(R*.55,-R*.25,R*.5,-R*1.0,R*.12,-R*1.0);x.lineTo(0,-R*.86);x.lineTo(-R*.12,-R*1.0);x.bezierCurveTo(-R*.5,-R*1.0,-R*.55,-R*.25,0,0);x.fill()}x.restore()}
  function star(cx,cy,R,rot,v){x.save();x.translate(cx,cy);x.rotate(rot);x.fillStyle=g(v);x.beginPath();for(let k=0;k<=10;k++){const a=-Math.PI/2+k*Math.PI/5,rr=k%2?R*.48:R;k?x.lineTo(Math.cos(a)*rr,Math.sin(a)*rr):x.moveTo(Math.cos(a)*rr,Math.sin(a)*rr)}x.fill();x.restore()}
  for(let col=0;col<4;col++){
    const ox=col*C,R=C*.36;
    // leafy blob: round body ringed with rounded leaf lobes
    {const cx=ox+C/2,cy=C/2;disc(cx,cy,R*.72,1);const n=11+col;for(let k=0;k<n;k++){const a=k/n*Math.PI*2+rn(-.12,.12);lobe(cx+Math.cos(a)*R*.55,cy+Math.sin(a)*R*.55,a-Math.PI/2,R*rn(.42,.55),R*rn(.16,.22),1)}
}
    // sakura blob: body edged with five-petal blossoms, a few blossoms inside in a softer tone
    {const cx=ox+C/2,cy=C+C/2;disc(cx,cy,R*.7,1);const n=10+col;for(let k=0;k<n;k++){const a=k/n*Math.PI*2+rn(-.15,.15);petal5(cx+Math.cos(a)*R*.66,cy+Math.sin(a)*R*.66,R*rn(.24,.3),rn(0,6.28),1)}
}
    // pine pad: flat cloud pad with a short needle fringe
    {const cx=ox+C/2,cy=2*C+C/2;x.fillStyle=g(1);x.beginPath();x.ellipse(cx,cy,R*.78,R*.5,0,0,7);x.fill();x.strokeStyle=g(1);x.lineCap="round";
      for(let k=0;k<70;k++){const a=k/70*Math.PI*2,ex=Math.cos(a)*R*.74,ey=Math.sin(a)*R*.46,l=R*rn(.16,.26);x.lineWidth=R*.05;x.beginPath();x.moveTo(cx+ex*.9,cy+ey*.9);x.lineTo(cx+ex+Math.cos(a)*l,cy+ey+Math.sin(a)*l*.7);x.stroke()}}
    // maple blob: body edged with star leaves
    {const cx=ox+C/2,cy=3*C+C/2;disc(cx,cy,R*.68,1);const n=9+col;for(let k=0;k<n;k++){const a=k/n*Math.PI*2+rn(-.15,.15);star(cx+Math.cos(a)*R*.62,cy+Math.sin(a)*R*.62,R*rn(.3,.36),a+rn(-.3,.3),1)}
}
  }
  const mips=[cv];let src=cv,lv=0;
  while(src.width>1){
    const w=Math.max(1,src.width>>1),c2=document.createElement("canvas");c2.width=c2.height=w;
    const c=c2.getContext("2d");c.drawImage(src,0,0,w,w);lv++;
    if(w>=2){const im=c.getImageData(0,0,w,w),d=im.data,k=1+.25*lv;for(let i=3;i<d.length;i+=4)d[i]=Math.min(255,d[i]*k);c.putImageData(im,0,0)}
    mips.push(c2);src=c2;
  }
  const t=new xt(cv);t.mipmaps=mips;t.generateMipmaps=!1;t.minFilter=1008;t.magFilter=1006;t.colorSpace=xe;t.anisotropy=4;t.needsUpdate=!0;
  return FOL_ATLAS=t;
}
const FOL_COOL="0.80,0.90,1.16",FOL_WARM="1.07,1.02,0.92";
function folMats(){
  if(FOL_MATS)return FOL_MATS;
  const u={value:0};W.push({type:"wind",uniform:u});
  const mk=amp=>{const m=S("#ffffff",{map:folAtlas(),alphaTest:.5,side:K,vertexColors:!0});
    m.onBeforeCompile=sh=>{sh.uniforms.uLeafT=u;sh.vertexShader="uniform float uLeafT;\n"+sh.vertexShader.replace("#include <begin_vertex>",`#include <begin_vertex>
  vec3 lw=(modelMatrix*vec4(position,1.0)).xyz;
  transformed+=vec3(sin(uLeafT*1.4+lw.x*0.9+lw.y*1.3),0.35*sin(uLeafT*1.9+lw.z*1.2),cos(uLeafT*1.2+lw.z*0.8+lw.y*1.1))*${amp.toFixed(3)};`)};
    m.customProgramCacheKey=()=>"fol-anime-leaf-"+amp;return folAnime(m,FOL_COOL,FOL_WARM,.55,"leaf"+amp)};
  return FOL_MATS={canopy:mk(.022),bush:mk(.012),core:{}};
}
function folCore(colorHex){const M=folMats();return M.core[colorHex]||(M.core[colorHex]=folAnime(S(colorHex),FOL_COOL,FOL_WARM,.35,"core"))}
// Cards sit on the shell of each clump and face outward; every card in a clump shares the clump's sphere normal
// field, so the toon ramp paints each clump as one clean volume with a scalloped silhouette.
function folCards(clumps,o){
  const rn=folRng(o.seed),P=[],N=[],U=[],Cc=[],I_=[];let v=0;
  const pal=o.palette.map(h=>new ae(h)),tmp=new ae;
  const up=new k(0,1,0),a1=new k,a2=new k,dir=new k,nn=new k,pos=new k,tc=o.center||new k;
  let y0=1e9,y1=-1e9;for(const cl of clumps){y0=Math.min(y0,cl.y-cl.r);y1=Math.max(y1,cl.y+cl.r)}
  clumps.forEach((cl,ci)=>{
    const base=cl.color?new ae(cl.color):pal[ci%pal.length];
    const n=Math.max(o.minCards||0,Math.round(cl.r*cl.r*o.density));
    for(let i=0;i<n;i++){
      dir.set(rn(-1,1),rn(-1,1),rn(-1,1));if(dir.lengthSq()>1||dir.lengthSq()<.04){i--;continue}dir.normalize();
      if(dir.y<-.55&&rn()<.6){i--;continue}          // fewer cards on the hidden underside
      const d=cl.r*rn(.8,.97);
      pos.set(cl.x+dir.x*d,cl.y+dir.y*d*o.squash,cl.z+dir.z*d);
      nn.copy(dir).add(a1.set(rn(-.25,.25),rn(-.25,.25)+o.upBias*.35,rn(-.25,.25))).normalize();
      a1.crossVectors(nn,Math.abs(nn.y)>.9?a2.set(1,0,0):up).normalize();a2.crossVectors(nn,a1).normalize();
      const tw=rn(0,6.28),c0=Math.cos(tw),s0=Math.sin(tw);
      const t1=new k().copy(a1).multiplyScalar(c0).addScaledVector(a2,s0),t2=new k().copy(a2).multiplyScalar(c0).addScaledVector(a1,-s0);
      const sz=o.size*cl.r*rn(.85,1.15),h=sz/2;
      const sn=new k(dir.x,dir.y/Math.max(o.squash,.3),dir.z).normalize();
      const hy=(pos.y-y0)/Math.max(1e-3,y1-y0);
      tmp.copy(base);
      const cell=o.row*4+Math.floor(rn(0,4)),cu=(cell%4)/4,cvv=1-(Math.floor(cell/4)+1)/4;
      for(const[sa,sb,uu,vv]of[[-1,-1,0,0],[1,-1,1,0],[1,1,1,1],[-1,1,0,1]]){
        P.push(pos.x+t1.x*h*sa+t2.x*h*sb,pos.y+t1.y*h*sa+t2.y*h*sb,pos.z+t1.z*h*sa+t2.z*h*sb);
        N.push(sn.x,sn.y,sn.z);U.push(cu+uu*.25,cvv+vv*.25);Cc.push(tmp.r,tmp.g,tmp.b);
      }
      I_.push(v,v+1,v+2,v,v+2,v+3);v+=4;
    }
  });
  const geo=new Re;geo.setAttribute("position",new Ce(P,3));geo.setAttribute("normal",new Ce(N,3));geo.setAttribute("uv",new Ce(U,2));geo.setAttribute("color",new Ce(Cc,3));geo.setIndex(I_);geo.computeBoundingSphere();
  return geo;
}
const FOL_KIND={
  cherry:{row:1,palette:["#f6bccb","#f1aabf","#f9d0db","#f4b6c7"],core:"#e9a0b4",squash:.8,upBias:.1,size:1.0,density:34},
  amber:{row:3,palette:["#f2a33e","#ea8434","#f5b955"],core:"#d77a2c",squash:.8,upBias:.1,size:.95,density:32},
  pine:{row:2,palette:["#4a8a52","#3f7d4a","#56965a"],core:"#376b42",squash:.42,upBias:.9,size:1.05,density:30},
  bush:{row:0,palette:["#6aa64f","#5f9c4a","#76ae57"],core:"#538c42",squash:.75,upBias:.2,size:.95,density:46}
};
function FOLtree(c,m,kind,scale){
  const K_=FOL_KIND[kind]||FOL_KIND.cherry,M=folMats();
  const clumps=m.map(([x,y,z],i)=>({x,y:y+.12,z,r:i===m.length-1?1.05:.98+.1*Math.sin(i*1.7)}));
  // filler clumps join the branch tips into one cohesive crown
  clumps.push({x:.05,y:2.85,z:0,r:1.15},{x:.15,y:3.45,z:.05,r:1.0});
  clumps.forEach((cl,i)=>cl.color=K_.palette[i%K_.palette.length]);
  const geo=folCards(clumps,{...K_,seed:Math.round((m[0][0]+7)*1e3+(m[0][2]+9)*31),center:new k(0,3.0,0)});
  const mesh=new $(geo,M.canopy);mesh.castShadow=!0;mesh.receiveShadow=!0;c.add(mesh);
  for(const cl of clumps){const s=I(c,new Ye(1,20,14),folCore(cl.color),cl.x,cl.y,cl.z);s.scale.set(cl.r*.86,cl.r*.86*K_.squash,cl.r*.86);s.castShadow=!0}
}
// The originals each drew three rotation values from the scene's seeded RNG; keep consuming them so later placements do not shift.
function FOLbush(n,x,y,z,V){
  _();_();_();
  const K_=FOL_KIND.bush,M=folMats();
  const bc=K_.palette[Math.abs(Math.round(x*7+z*13))%K_.palette.length];
  const geo=folCards([{x:0,y:0,z:0,r:V*.95,color:bc}],{...K_,minCards:12,seed:Math.round(x*977+z*131+V*1e4),center:new k(0,-.2,0)});
  const g=z_(n,x,y,z);
  const mesh=new $(geo,M.bush);mesh.castShadow=!0;mesh.receiveShadow=!0;g.add(mesh);
  const s=I(g,new Ye(1,16,12),folCore(bc),0,0,0);s.scale.set(V*.95*.86,V*.95*.86*K_.squash,V*.95*.86);
}
function z_(n,x,y,zz){const g=new le;g.position.set(x,y,zz);n.add(g);return g}
// Turf patch: a soft low dome with a wobbly outline, shaded in the same cel style as the grass
let FOL_TURF=null;
function FOLpatch(n,x,y,z,rx,rz){
  _();_();_();
  if(!FOL_TURF)FOL_TURF=folAnime(r.moss,FOL_COOL,FOL_WARM,.25,"turf"),r.moss.color.set("#6b9e4c");
  const rn=folRng(Math.round(x*311+z*733)),geo=new Ye(1,48,12),p=geo.attributes.position;
  const ph=[rn(0,6.28),rn(0,6.28),rn(0,6.28)];
  for(let i=0;i<p.count;i++){const px=p.getX(i),py=p.getY(i),pz=p.getZ(i),a=Math.atan2(pz,px);
    const w=1+.08*Math.sin(a*3+ph[0])+.05*Math.sin(a*5+ph[1])+.03*Math.sin(a*11+ph[2]);
    p.setXYZ(i,px*w,py>0?py*(.7+.2*Math.cos(a*4+ph[1])):py,pz*w)}
  geo.computeVertexNormals();
  const s=I(n,geo,r.moss,x,y,z);s.scale.set(rx,.15,rz);s.castShadow=!1;
}
// Grass: soft, slightly wide blades gathered in rounded tufts; colour flows smoothly across each lawn
function FOLgrass(n,zones,tm){
  for(let i=0;i<4e3;i++)_();
  const segs=3,P=[],Cc=[],Nn=[],Ix=[];
  for(let sgi=0;sgi<=segs;sgi++){const t=sgi/segs,w=.07*Math.pow(1-t,.8),bz=.16*t*t;
    if(sgi<segs){P.push(-w,t,bz,w,t,bz)}else P.push(0,t,bz);
    const c=.62+.5*t;for(let q=0;q<(sgi<segs?2:1);q++){Cc.push(c,c,c);Nn.push(0,1,0)}}
  for(let sgi=0;sgi<segs-1;sgi++){const b=sgi*2;Ix.push(b,b+1,b+2,b+1,b+3,b+2)}
  const bt=(segs-1)*2;Ix.push(bt,bt+1,bt+2);
  const geo=new Re;geo.setAttribute("position",new Ce(P,3));geo.setAttribute("color",new Ce(Cc,3));geo.setAttribute("normal",new Ce(Nn,3));geo.setIndex(Ix);
  const u={value:0};W.push({type:"wind",uniform:u});FOL_GRASS_U=u;
  const mat=folAnime(S("#ffffff",{side:K,vertexColors:!0}),FOL_COOL,FOL_WARM,0,"grass");
  const prevG=mat.onBeforeCompile;
  mat.onBeforeCompile=(sh,rd)=>{sh.uniforms.uGT=u;sh.vertexShader="uniform float uGT;\n"+sh.vertexShader.replace("#include <begin_vertex>",`#include <begin_vertex>
  vec3 iw=instanceMatrix[3].xyz;
  float gust=sin(uGT*1.1+iw.x*0.45+iw.z*0.3)*0.5+0.5;
  float bend=position.y*position.y*(0.13*gust+0.04*sin(uGT*2.8+iw.x*2.1+iw.z*1.7));
  transformed.z+=bend;transformed.x+=bend*0.3;transformed.y-=bend*bend*0.5;`);prevG.call(mat,sh,rd)};
  const rn=folRng(90210),total=FOL_MOB?5000:11000;
  const area=zones.reduce((s,[,,a,b])=>s+a*b,0);
  const mesh=new Ne(geo,mat,total),col=new ae;let idx=0;
  const gA=new ae("#64a049"),gB=new ae("#8cc05c");
  for(const[zx,zz,hx,hz]of zones){
    const base=zz<1.1?.72:.12;
    let made=0;const want=Math.round(total*(hx*hz/area));
    while(made<want&&idx<total){
      let ux,uz;do{ux=rn(-1,1);uz=rn(-1,1)}while(ux*ux+uz*uz>1);
      const fall=1-(ux*ux+uz*uz);if(rn()>.15+.85*fall*fall)continue;
      const tx=Math.max(-9.6,Math.min(9.6,zx+ux*hx*1.02)),tz=Math.max(-9.6,Math.min(9.6,zz+uz*hz*1.02));
      const nb=Math.round(rn(4,7)),th=rn(.75,1)*(.55+.5*fall);
      const lawn=.5+.5*Math.sin(tx*.9+Math.cos(tz*.7))*Math.cos(tz*.8-tx*.3);
      for(let b=0;b<nb&&made<want&&idx<total;b++,made++){
        const a=b/nb*6.28+rn(-.3,.3),d=rn(.01,.07);
        tm.position.set(tx+Math.cos(a)*d,base-.01,tz+Math.sin(a)*d);
        tm.rotation.set(Math.sin(a)*.35,a+Math.PI/2+rn(-.4,.4),-Math.cos(a)*.35);
        const hs=rn(.08,.12)*th;tm.scale.set(rn(.85,1.15),hs,hs);tm.updateMatrix();mesh.setMatrixAt(idx,tm.matrix);
        col.copy(gA).lerp(gB,lawn*.7+fall*.3).multiplyScalar(rn(.96,1.04));mesh.setColorAt(idx,col);idx++;
      }
    }
  }
  mesh.count=idx;mesh.castShadow=!1;mesh.receiveShadow=!0;mesh.frustumCulled=!1;n.add(mesh);
  // small white and yellow flowers dotted through the lawns
  const fg=new Ye(1,8,4),fm=folAnime(S("#ffffff"),FOL_COOL,FOL_WARM,0,"flower"),fl=new Ne(fg,fm,FOL_MOB?90:180),fc=["#fbf8ef","#fbf8ef","#f7e07a","#f6c6d2"].map(h=>new ae(h));let fi=0;
  for(;fi<fl.count;fi++){const zn=zones[fi%zones.length];let ux,uz;do{ux=rn(-1,1);uz=rn(-1,1)}while(ux*ux+uz*uz>.75);
    tm.position.set(zn[0]+ux*zn[2],(zn[1]<1.1?.72:.12)+rn(.1,.15),zn[1]+uz*zn[3]);tm.rotation.set(0,rn(0,6.28),0);const fs=rn(.028,.04);tm.scale.set(fs,fs*.4,fs);tm.updateMatrix();fl.setMatrixAt(fi,tm.matrix);fl.setColorAt(fi,fc[Math.floor(rn(0,fc.length))])}
  fl.castShadow=!1;n.add(fl);
}

function is(n){const e=[[-7.1,-6,2.6,2.65],[-7.8,-1.9,1.9,1.45],[7.1,-7.6,2.1,1.55],[-6.5,7.55,2.3,1.5],[6.65,7.5,2.3,1.65],[-3.8,-8.2,1.2,.9],[3.2,-8.35,1.05,.8],[-8.9,4.2,.5,2],[8.9,0,.7,2.1]];for(const[d,y,b,g]of e){const w=y<1.1?.7:.12;FOLpatch(n,d,w-.07,y,b,g);for(let x=0;x<10;x++){const P=d+_(-b*.8,b*.8),R=y+_(-g*.8,g*.8);if(Math.abs(P)>9.55||Math.abs(R)>9.55)continue;const V=_(.2,.53);FOLbush(n,P,w+V*.35,R,V)}}_e(n,-8.6,.7,-6.2,1.12,"cherry"),_e(n,8.8,.7,-9.6,.88,"amber"),_e(n,-7.3,.1,7.25,.84,"pine"),_e(n,7.45,.08,7.4,.9,"cherry"),_e(n,-9.2,.7,-1.9,.68,"pine");for(const[d,y,b]of[[-5.1,-6.8,.7],[-8.5,-3,.72],[-5.75,7.7,.48],[5.8,8,.63],[8.4,5.9,.41],[-3.65,1.55,.39],[3.8,1.8,.46],[8.7,-8.5,.6]]){const g=y<1.1?.7:.1;Q(n,d,g+b*.3,y,b,b*.68,b*.8,r.stoneDark),(_(),_(),_());for(let w=0;w<3;w++)Q(n,d+_(-.7,.7),g+.08,y+_(-.7,.7),.15,.1,.12,r.stone)}const t=new go,i=new Ne(new _t(1,0),r.stoneLight,1e3);for(let d=0;d<1e3;d++){let y=_(-10.2,10.2),b=_(-9.8,9.8);Math.abs(y)<1.5&&b>2.25&&(y+=2.1),t.position.set(y,b<1.05?.711:.1,b),t.scale.set(_(.012,.045),_(.007,.018),_(.016,.05)),t.rotation.set(0,_(0,6),0),t.updateMatrix(),i.setMatrixAt(d,t.matrix)}i.receiveShadow=!0,n.add(i);FOLgrass(n,e,t);const l=new Ye(1,5,3),c=new Ne(l,r.pinkLight,220);for(let d=0;d<220;d++){const y=d%3===0,b=(y?6.8:-8.0)+_(-2.2,2.2),g=(y?7.5:-5.8)+_(-2.0,2.0);t.position.set(b,g<1.05?.73:.15,g),t.scale.set(_(.035,.07),.01,_(.02,.045)),t.rotation.set(0,_(0,6),0),t.updateMatrix(),c.setMatrixAt(d,t.matrix)}n.add(c);const f=S("#efa3b1",{side:K}),m=S("#ffd5d9",{side:K});for(let d=0;d<44;d++){const y=I(n,l,d%3?f:m),b=_(.085,.135);y.scale.set(b,b*.26,b*.62);const g=d%2===0;W.push({obj:y,type:"petal",phase:_(0,1),speed:_(.042,.07),size:b,x:g?_(-9.8,-7.4):_(6.4,8.4),z:g?_(-7.4,-5.0):_(6.2,8.2),height:g?_(4.8,6.0):_(3.2,4.2),driftX:g?_(1.6,2.7):_(1.3,2.3),driftZ:g?_(1.2,2.2):_(.9,1.8)})}const u=new bo({color:"#fff3c4",transparent:!0,opacity:.6});for(let d=0;d<16;d++){const y=I(n,new Ye(.018,5,4),u,_(-8,8),_(.4,2.5),_(-5,8));y.castShadow=!1,W.push({obj:y,type:"mote",base:y.position.clone(),phase:_(0,6)})}const ffMat=new uo({color:"#d8ff66",emissive:"#bfff38",emissiveIntensity:.9,transparent:!0,opacity:.9}),ffGeo=new Ye(.04,5,4);for(let d=0;d<20;d++){const y=I(n,ffGeo,ffMat);y.castShadow=!1,y.receiveShadow=!1;let bx,bz,by;if(d<7){bx=_(4.8,7.6),bz=_(3.2,6.2),by=_(.35,1.1)}else if(d<14){bx=_(-7.2,-3.5),bz=_(-4.2,1.2),by=_(.7,1.8)}else{bx=_(-2.5,2.5),bz=_(1.5,5.5),by=_(.3,1.4)}y.position.set(bx,by,bz),W.push({obj:y,type:"firefly",base:new k(bx,by,bz),phase:_(0,6.28),speed:_(.6,1.2),range:_(.22,.45)})}const rCnt=850,rPos=new Float32Array(rCnt*12),rOff=new Float32Array(rCnt*12),rIdx=[];for(let d=0;d<rCnt;d++){const rx=_w(-10.2,10.2),ry=_w(0,14.5),rz=_w(-10.0,10.2),sd=_w(0,100),vi=d*12,ii=d*4;rPos.set([-.5,0,sd,.5,0,sd,-.5,1,sd,.5,1,sd],vi);rOff.set([rx,ry,rz,rx,ry,rz,rx,ry,rz,rx,ry,rz],vi);rIdx.push(ii,ii+1,ii+2,ii+2,ii+1,ii+3)}const rainGeo=new Re;rainGeo.setAttribute("position",new Ce(rPos,3)),rainGeo.setAttribute("aOffset",new Ce(rOff,3)),rainGeo.setIndex(rIdx);const rainUni={uTime:{value:0},uRain:{value:0},uDaylight:{value:1}},rainMat=new Ae({uniforms:rainUni,transparent:!0,depthWrite:!1,side:K,vertexShader:`attribute vec3 aOffset;uniform float uTime;uniform float uRain;varying vec2 vUv;varying float vSeed;void main(){vUv=vec2(position.x+0.5,position.y);float seed=position.z;vSeed=seed;float spd=16.5+fract(seed*0.3183)*5.5;float cyc=mod(aOffset.y+uTime*spd,14.5);float yTop=14.2-cyc;float slant=0.52+0.15*sin(uTime*0.8+seed);vec3 ctr=vec3(aOffset.x-cyc*0.045*slant,yTop,aOffset.z+cyc*0.02);vec3 toCam=normalize(vec3(cameraPosition.x-ctr.x,0.0,cameraPosition.z-ctr.z));vec3 rgt=normalize(cross(vec3(0.0,1.0,0.0),toCam));float len=(0.82+fract(seed*0.71)*0.38)*uRain;vec3 wp=ctr+rgt*(position.x*0.017)+vec3(-0.045*slant,-1.0,0.02)*((1.0-position.y)*len);gl_Position=projectionMatrix*viewMatrix*vec4(wp,1.0);}`,fragmentShader:`uniform float uRain;uniform float uDaylight;varying vec2 vUv;varying float vSeed;void main(){if(uRain<=0.01)discard;float ex=1.0-abs(vUv.x*2.0-1.0),ey=sin(vUv.y*3.14159265);float strk=pow(ex,1.5)*pow(ey,1.2);vec3 dCol=vec3(0.80,0.89,0.97),nCol=mix(vec3(0.54,0.68,0.84),vec3(0.98,0.80,0.52),fract(vSeed*0.43)*0.48);vec3 col=mix(nCol,dCol,uDaylight);gl_FragColor=vec4(col,strk*uRain*(0.30+0.14*fract(vSeed*0.89)));}`}),rainMesh=new $(rainGeo,rainMat);rainMesh.frustumCulled=!1,rainMesh.castShadow=!1,rainMesh.receiveShadow=!1,rainMesh.visible=!1,n.add(rainMesh),W.push({obj:rainMesh,type:"rain",u:rainUni});}function as(n,e=!1){const t=n[0].index!==null,i=new Set(Object.keys(n[0].attributes)),a=new Set(Object.keys(n[0].morphAttributes)),o={},h={},s=n[0].morphTargetsRelative,l=new Re;let c=0;for(let f=0;f<n.length;++f){const m=n[f];let u=0;if(t!==(m.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+f+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(const d in m.attributes){if(!i.has(d))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+f+'. All geometries must have compatible attributes; make sure "'+d+'" attribute exists among all geometries, or in none of them.'),null;o[d]===void 0&&(o[d]=[]),o[d].push(m.attributes[d]),u++}if(u!==i.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+f+". Make sure all geometries have the same number of attributes."),null;if(s!==m.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+f+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(const d in m.morphAttributes){if(!a.has(d))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+f+".  .morphAttributes must be consistent throughout all geometries."),null;h[d]===void 0&&(h[d]=[]),h[d].push(m.morphAttributes[d])}if(e){let d;if(t)d=m.index.count;else if(m.attributes.position!==void 0)d=m.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+f+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,d,f),c+=d}}if(t){let f=0;const m=[];for(let u=0;u<n.length;++u){const d=n[u].index;for(let y=0;y<d.count;++y)m.push(d.getX(y)+f);f+=n[u].attributes.position.count}l.setIndex(m)}for(const f in o){const m=ft(o[f]);if(!m)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+f+" attribute."),null;l.setAttribute(f,m)}for(const f in h){const m=h[f][0].length;if(m===0)break;l.morphAttributes=l.morphAttributes||{},l.morphAttributes[f]=[];for(let u=0;u<m;++u){const d=[];for(let b=0;b<h[f].length;++b)d.push(h[f][b][u]);const y=ft(d);if(!y)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+f+" morphAttribute."),null;l.morphAttributes[f].push(y)}}return l}function ft(n){let e,t,i,a=-1,o=0;for(let c=0;c<n.length;++c){const f=n[c];if(e===void 0&&(e=f.array.constructor),e!==f.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(t===void 0&&(t=f.itemSize),t!==f.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(i===void 0&&(i=f.normalized),i!==f.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(a===-1&&(a=f.gpuType),a!==f.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;o+=f.count*t}const h=new e(o),s=new _o(h,t,i);let l=0;for(let c=0;c<n.length;++c){const f=n[c];if(f.isInterleavedBufferAttribute){const m=l/t;for(let u=0,d=f.count;u<d;u++)for(let y=0;y<t;y++){const b=f.getComponent(u,y);s.setComponent(u+m,y,b)}}else h.set(f.array,l);l+=f.count*t}return a!==void 0&&(s.gpuType=a),s}function ns(n,e){const t=new Set(e.filter(a=>a.obj?.isGroup).map(a=>a.obj)),i=new Set(e.filter(a=>a.obj).map(a=>a.obj));n.updateMatrixWorld(!0);for(const a of[n,...t]){const o=new Map,h=a.matrixWorld.clone().invert(),s=c=>{if(!(c!==a&&i.has(c))){if((c.isMesh&&!c.isInstancedMesh||c.isLineSegments)&&!Array.isArray(c.material)){const f=Object.keys(c.geometry.attributes).sort().join(","),m=`${c.type}:${c.material.uuid}:${f}:${c.castShadow}:${c.receiveShadow}`;o.has(m)||o.set(m,[]),o.get(m).push(c)}for(const f of c.children)s(f)}};s(a);const l=[];for(const c of o.values()){if(c.length<2)continue;const f=c.map(y=>{const b=y.geometry.clone();return b.applyMatrix4(new wo().multiplyMatrices(h,y.matrixWorld)),b.index?b.toNonIndexed():b}),m=as(f);for(const y of f)y.dispose();if(!m)continue;const u=c[0],d=u.isLineSegments?new wt(m,u.material):new $(m,u.material);d.castShadow=u.castShadow,d.receiveShadow=u.receiveShadow,d.name=`batched-${u.material.type}`,l.push({objects:c,replacement:d})}for(const{objects:c}of l)for(const f of c){for(const m of[...f.children])a.attach(m);f.removeFromParent()}for(const{replacement:c}of l)a.add(c)}}const ee=[[.2,8.45],[.65,8],[.3,6.95],[-.55,7.15],[-.6,8.15]],Ze=[.3,.16,.16,.26,.16,.18,.3,.22],Xe=Ze.reduce((n,e)=>n+e,0),Ee=.42,Pe=.18,Te=.5,Nt=.24,Le=ee.map((n,e)=>(e%2?2:3)*Xe+Ee+Pe+Te+Nt),De=Le.reduce((n,e)=>n+e,0);function rs(n,e=1){let t=(n%De+De)%De,i=0;for(;i<Le.length-1&&t>=Le[i];)t-=Le[i++];const a=ee[i],o=ee[(i+1)%ee.length],h=(i%2?2:3)*Xe,s=Math.floor(Math.max(0,n)/De)*ee.length+i,l={phase:"sweeping",stop:i,x:a[0],z:a[1],height:0,stretch:1,hopLean:0,sweepTime:t,frame:0,facingSign:s%2?-1:1,directionX:o[0]-a[0],directionZ:o[1]-a[1]};if(t<h){let c=t%Xe;for(;l.frame<7&&c>=Ze[l.frame];)c-=Ze[l.frame++];return l}if(t-=h,t>=Ee/2&&(l.facingSign*=-1),t<Ee)return l.phase="resting",l.frame=7,l;if(t-=Ee,t<Pe)return l.phase="preparing",l.frame=6,l.stretch=1-.075*Math.sin(t/Pe*Math.PI/2)*e,l;if(t-=Pe,t<Te){const c=t/Te,f=c*c*(3-2*c);return l.phase="hopping",l.frame=7,l.x+=(o[0]-a[0])*f,l.z+=(o[1]-a[1])*f,l.height=4*.34*c*(1-c)*e,l.stretch=1+(-.075*Math.exp(-c*15)+.045*Math.sin(Math.PI*c))*e,l.hopLean=Math.sin(c*Math.PI)*.055*e,l}return t-=Te,l.phase="landing",l.frame=0,l.x=o[0],l.z=o[1],l.stretch=1-.065*Math.sin(Math.min(1,t/Nt)*Math.PI)*e,l}const ls="data:image/webp;base64,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",we=(n,e)=>Math.abs(n)<1.45&&e>2.35&&e<10.3?.166:.065;function Ge(n){return n.onBeforeCompile=e=>{e.fragmentShader=e.fragmentShader.replace("#include <map_fragment>",`
      #include <map_fragment>
      float keyGreen = diffuseColor.g - max(diffuseColor.r, diffuseColor.b);
      if (keyGreen > 0.025 && diffuseColor.g > 0.045) discard;
    `)},n.customProgramCacheKey=()=>"reimu-pixel-chroma-v1",n}const REIMU_ANCHORS=[{u0:0,v0:.499436,uRep:.250282,vRep:.500564,aspect:1,fx:-.097973,fy:.405405},{u0:.250282,v0:.499436,uRep:.249718,vRep:.500564,aspect:.997748,fx:-.086907,fy:.405405},{u0:.5,v0:.499436,uRep:.249718,vRep:.500564,aspect:.997748,fx:-.085779,fy:.405405},{u0:.749718,v0:.499436,uRep:.250282,vRep:.500564,aspect:1,fx:-.086712,fy:.405405},{u0:0,v0:0,uRep:.250282,vRep:.499436,aspect:1.002257,fx:-.095721,fy:.378104},{u0:.250282,v0:0,uRep:.249718,vRep:.499436,aspect:1,fx:-.090293,fy:.378104},{u0:.5,v0:0,uRep:.249718,vRep:.499436,aspect:1,fx:-.090293,fy:.378104},{u0:.749718,v0:0,uRep:.250282,vRep:.499436,aspect:1.002257,fx:-.086712,fy:.375847}];function cs(n,e){const t=new le;t.name="Reimu sweeping in the courtyard",t.position.set(ee[0][0],we(...ee[0])+.012,ee[0][1]),n.add(t);const i=new le;t.add(i);const a=new le;i.add(a);const o={ready:!1,frame:-1,phase:"sweeping",sweepCount:0,framesVisited:new Set,anchors:REIMU_ANCHORS,root:t,facing:i,portrait:a,error:null},h=2.92,s=new vt().load(ls,()=>{o.ready=!0},void 0,v=>{o.error="Reimu sprite atlas could not be loaded",console.error(o.error,v)});s.colorSpace=xe,s.magFilter=s.minFilter=qe,s.generateMipmaps=!1;const l=Ge(S("#eee4d7",{map:s,alphaTest:.5,side:K})),c=l.onBeforeCompile;l.onBeforeCompile=v=>{c(v),v.fragmentShader=v.fragmentShader.replace("#include <color_fragment>",`
      float pigmentValue = dot(diffuseColor.rgb, vec3(0.299, 0.587, 0.114));
      diffuseColor.rgb = mix(diffuseColor.rgb, vec3(pigmentValue) * vec3(1.03, 1.0, 0.97), 0.08);
      diffuseColor.rgb = diffuseColor.rgb * 0.97 + vec3(0.008, 0.006, 0.005);
      #include <color_fragment>
    `)},l.customProgramCacheKey=()=>"reimu-pixel-chroma-palette-v2";const f=new $(new he(1,1),l);f.name="Eight-frame lit pixel Reimu",f.visible=!1,f.castShadow=f.receiveShadow=!0,f.customDepthMaterial=Ge(new Dt({map:s,alphaTest:.5,depthPacking:Et,side:K})),f.customDistanceMaterial=Ge(new Pt({map:s,alphaTest:.5,side:K})),a.add(f),o.figure=f,o.atlas=s;const m=new Ae({transparent:!0,depthWrite:!1,uniforms:{opacity:{value:.24}},vertexShader:"varying vec2 vUv; void main(){vUv=uv;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}",fragmentShader:"varying vec2 vUv; uniform float opacity; void main(){float r=length((vUv-.5)*2.);gl_FragColor=vec4(.20,.17,.20,(1.-smoothstep(.15,1.,r))*opacity);}"}),u=new $(new he(.95,.51),m);u.rotation.x=-Math.PI/2,u.position.y=-.005,i.add(u);const d=new $(new he(.54,.28),m);d.rotation.x=-Math.PI/2,d.position.set(-.94,-.004,.08),i.add(d),o.footShadow=u,o.broomShadow=d;const y=new yo(.055,5),b=[S("#c69b62",{side:K}),S("#e3b3a2",{side:K}),S("#ba8760",{side:K})],g=[];let w=97;const x=()=>(w=Math.imul(w,1664525)+1013904223>>>0,w/4294967296);for(let v=0;v<45;v++){const E=new $(y,b[v%3]);E.scale.set(.7+x()*.5,.45+x()*.3,1),E.rotation.set(-Math.PI/2,0,x()*Math.PI);const N=ee[v%ee.length],M=v%2?-1:1,D=N[0]+M*(-1.04+x()*.7),L=N[1]+M*(.36+x()*.6);E.position.set(D,we(D,L)+.015,L),E.castShadow=E.receiveShadow=!0,n.add(E),g.push({mesh:E,age:5,start:E.position.clone(),velocity:new k,phase:x()*6})}o.leaves=g;let P=-1,R=0;const V=()=>{i.updateWorldMatrix(!0,!1);const v=o.motion.facingSign,E=i.localToWorld(new k(-1.26*v,0,.08)),N=new k(-v,0,0).applyQuaternion(i.quaternion);o.lastSweepDirection=N.clone();const M=g.filter(D=>D.age>.4&&D.mesh.position.distanceToSquared(E)<.8**2);for(const D of M.slice(0,5))D.start.copy(D.mesh.position),D.start.y=we(D.start.x,D.start.z)+.015,D.velocity.copy(N).multiplyScalar(.35+x()*.4),D.velocity.y=.35+x()*.27,D.age=0;o.sweepCount++};function F(v,E=1){const N=Math.min(Math.max(v-R,0),.25);R=v;const M=rs(v,E);o.phase=M.phase,o.stop=M.stop,o.motion=M,t.position.x=M.x,t.position.z=M.z,t.position.y=we(M.x,M.z)+.012;const D=e.position.clone().sub(t.position);i.rotation.y=Math.atan2(D.x,D.z),a.rotation.x=-Math.min(.68,Math.atan2(D.y,Math.hypot(D.x,D.z))*.6);const L=Math.sin(v*2.15)*.01*E,U=(Math.sin(v*1.35)+Math.sin(v*2.7)*.2)*.011*E,oe=M.directionX*Math.cos(i.rotation.y)-M.directionZ*Math.sin(i.rotation.y);if(a.position.y=M.height,a.rotation.z=U-Math.sign(oe)*M.hopLean,a.scale.set(M.facingSign*(1-L*.35+(1-M.stretch)*.32),M.stretch+L,1),u.scale.setScalar(1+M.height*.65),m.uniforms.opacity.value=.24/(1+M.height*2.5),d.visible=M.phase!=="hopping",!o.ready)return;const Z=M.frame;if(Z!==P){o.frame=Z,o.framesVisited.add(Z);const C=o.anchors[Z];s.repeat.set(C.uRep,C.vRep),s.offset.set(C.u0,C.v0),f.scale.set(h*C.aspect,h,1),f.position.set(C.fx*f.scale.x,C.fy*h,0),f.visible=!0,M.phase==="sweeping"&&(Z===2||Z===3&&P<2)&&V(),P=Z}const Ht=[-.99,-1.18,-1.34,-1.4,-.89,-.73,-.72,-1.02][Z];d.position.x=Ht*M.facingSign;for(const C of g){if(C.age>=1.25)continue;C.age+=N;const re=C.age,Yt=(1-Math.exp(-re*4))*.5;C.mesh.position.copy(C.start).addScaledVector(C.velocity,Yt*E),C.mesh.position.y=we(C.mesh.position.x,C.mesh.position.z)+.015+Math.max(0,C.velocity.y*re-1.6*re*re)*E,C.mesh.rotation.x=-Math.PI/2+Math.sin(re*14+C.phase)*Math.max(0,.5-re)*E,C.mesh.rotation.z+=Math.max(0,1-re)*N*2}}return o.update=F,o}function Fe(n){return n.onBeforeCompile=e=>{e.fragmentShader=e.fragmentShader.replace("#include <map_fragment>",`
      #include <map_fragment>
      if (diffuseColor.g - max(diffuseColor.r, diffuseColor.b) > 0.025 && diffuseColor.g > 0.045) discard;
    `)},n.customProgramCacheKey=()=>"suika-chroma-v2",n}const We=[.8,.16,.12,.12,.12,.12,.12,.16,.18,.32,.24,.14,.12,.12,.16,.55],Be=We.reduce((n,e)=>n+e,0),SUIKA_ANCHORS=[{u0:0,v0:.749601,uRep:.250399,vRep:.250399,bottom:.990446,center:.550955},{u0:.250399,v0:.749601,uRep:.249601,vRep:.250399,bottom:.990446,center:.515974},{u0:.5,v0:.749601,uRep:.249601,vRep:.250399,bottom:.987261,center:.469649},{u0:.749601,v0:.749601,uRep:.250399,vRep:.250399,bottom:.987261,center:.436306},{u0:0,v0:.5,uRep:.250399,vRep:.249601,bottom:.961661,center:.522293},{u0:.250399,v0:.5,uRep:.249601,vRep:.249601,bottom:.961661,center:.484026},{u0:.5,v0:.5,uRep:.249601,vRep:.249601,bottom:.958466,center:.442492},{u0:.749601,v0:.5,uRep:.250399,vRep:.249601,bottom:.961661,center:.41242},{u0:0,v0:.250399,uRep:.250399,vRep:.249601,bottom:.932907,center:.507962},{u0:.250399,v0:.250399,uRep:.249601,vRep:.249601,bottom:.932907,center:.480831},{u0:.5,v0:.250399,uRep:.249601,vRep:.249601,bottom:.932907,center:.440895},{u0:.749601,v0:.250399,uRep:.250399,vRep:.249601,bottom:.932907,center:.415605},{u0:0,v0:0,uRep:.250399,vRep:.250399,bottom:.904459,center:.492038},{u0:.250399,v0:0,uRep:.249601,vRep:.250399,bottom:.904459,center:.455272},{u0:.5,v0:0,uRep:.249601,vRep:.250399,bottom:.904459,center:.41853},{u0:.749601,v0:0,uRep:.250399,vRep:.250399,bottom:.904459,center:.39172}];function fs(n,e){const t=new le;t.name="Suika drinking on the office veranda",t.position.set(5.97,1.13,-1.74),t.visible=!1,n.add(t);const i=new le;t.add(i);const a={root:t,facing:i,ready:!1,loading:!1,frame:-1,framesVisited:new Set,anchors:SUIKA_ANCHORS,error:null},o=new vt().load("data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7");function loadSuika(){if(a.loading||a.ready)return;a.loading=!0;new vt().load("./assets/suika/suika-drinking-v2-atlas-1f6e846f.webp",m=>{o.image=m.image,o.needsUpdate=!0,a.ready=!0},void 0,m=>{a.error="翠香图集加载失败",console.error(a.error,m)})}setTimeout(loadSuika,1600);o.colorSpace=xe,o.magFilter=o.minFilter=qe,o.generateMipmaps=!1,o.repeat.set(.25,.25);const h=Fe(S("#e9d6bf",{map:o,alphaTest:.5,side:K})),s=new $(new he(1.72,1.72),h);s.castShadow=s.receiveShadow=!0,s.customDepthMaterial=Fe(new Dt({map:o,alphaTest:.5,depthPacking:Et,side:K})),s.customDistanceMaterial=Fe(new Pt({map:o,alphaTest:.5,side:K})),s.visible=!1,i.add(s);const l=new $(new yt(.49,.49,.07,24),S("#786078"));l.scale.z=.67,l.position.y=-.035,t.add(l);const c=new Ae({transparent:!0,depthWrite:!1,uniforms:{opacity:{value:.38}},vertexShader:"varying vec2 vUv; void main(){vUv=uv;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}",fragmentShader:"varying vec2 vUv; uniform float opacity; void main(){vec2 p=(vUv-.5)*2.; float ellipse=length(vec2(p.x*0.92,p.y*1.7)); float edge=1.-smoothstep(.18,1.,ellipse); gl_FragColor=vec4(.12,.09,.14,edge*opacity);}"}),f=new $(new he(1.72,.82),c);return f.name="Suika seated contact shadow",f.rotation.x=-Math.PI/2,f.position.set(0,-.085,.02),f.renderOrder=1,t.add(f),a.contactShadow=f,a.figure=s,a.update=(m,u=1)=>{if(t.visible&&!a.ready)loadSuika();if(!a.ready||!t.visible)return;const d=e.position.clone().sub(t.position),y=Math.atan2(d.x,d.z);i.rotation.y=ne.clamp(y,-Math.PI/6,Math.PI/6),i.rotation.x=-.2;let b=(m%Be+Be)%Be,g=0;for(;g<15&&b>=We[g];)b-=We[g++];a.frame=g,a.framesVisited.add(g);const w=a.anchors[g];o.repeat.set(w.uRep,w.vRep),o.offset.set(w.u0,w.v0),s.position.set((.5-w.center)*1.72,(w.bottom-.5)*1.72,0),f.scale.x=1+Math.sin(m*1.4)*.012*u,s.visible=!0},a}function ds({scene:n,sun:e,hemisphere:t,fill:i,warmLight:a,renderer:o,reimu:h,suika:s}){const l=document.createElement("div");l.className="time-controls",l.setAttribute("aria-label","场景时段"),l.innerHTML='<span class="time-caption">博丽神社 · 昼</span><div class="hud-row"><div class="hud-seg" role="group" aria-label="时段模式"><button type="button" class="hud-btn" data-mode="auto">昼夜流转</button><button type="button" class="hud-btn" data-mode="day">白昼</button><button type="button" class="hud-btn" data-mode="night">夜晚</button></div><button type="button" class="hud-btn hud-weather" aria-label="切换晴雨" aria-pressed="false">☀ 晴</button></div>',document.body.append(l);const c=l.querySelector(".time-caption");let autoPhase=0,wTimer=_w(360,900),wPhase=_w(0,6.28);const f={mode:"auto",daylight:1,night:!1,raining:!1,rain:0,wet:0,cycleSeconds:180};function setMode(m){f.mode=m;if(m==="day"){if(Math.cos(autoPhase)<=.28){autoPhase=0;}console.log("⛩️ 时段模式已切换为: 白昼 (day)");}else if(m==="night"){if(Math.cos(autoPhase)>=-.28){autoPhase=Math.PI;}console.log("⛩️ 时段模式已切换为: 夜晚 (night)");}else if(m==="auto"){console.log("⛩️ 时段模式已切换为: 昼夜流转 (auto)");}}window.setMode=setMode;window.setDay=()=>setMode("day");window.setNight=()=>setMode("night");window.setAuto=()=>setMode("auto");window.toggleRain=()=>{wTimer=0;console.log("⛩️ 天气触发切换 (toggleRain)");};window.__toggleRain=window.toggleRain;window.setRain=(s)=>{if(s){if(!f.raining){f.raining=!0;wTimer=_w(72,153);}console.log("⛩️ 天气已设为: 雨天");}else{if(f.raining){f.raining=!1;wTimer=_w(450,1170);}console.log("⛩️ 天气已设为: 晴天");}window.__shrineIsRaining=f.raining;if(window.__updateRainAudio)window.__updateRainAudio();};console.log("⛩️ 博丽神社环境控制指令:\n- setDay(): 切换至白昼\n- setNight(): 切换至夜晚\n- setAuto(): 开启昼夜流转\n- toggleRain(): 切换晴/雨\n- setRain(true/false): 设定下雨");const hudModeBtns=[...l.querySelectorAll("[data-mode]")],hudWx=l.querySelector(".hud-weather");let hudMode="",hudRain=null;function syncHud(){if(f.mode!==hudMode){hudMode=f.mode;for(const b of hudModeBtns)b.setAttribute("aria-pressed",String(b.dataset.mode===hudMode));}if(f.raining!==hudRain){hudRain=f.raining;hudWx.setAttribute("aria-pressed",String(hudRain));hudWx.textContent=hudRain?"☂ 雨":"☀ 晴";}}for(const b of hudModeBtns)b.addEventListener("click",()=>{setMode(b.dataset.mode);syncHud();});hudWx.addEventListener("click",()=>{window.setRain(!f.raining);syncHud();});syncHud();let g=-1,gRain=-1;const m=document.createElement("canvas");function Ut_bg(){const asp=Math.max(0.2,Math.min(5,(window.innerWidth||1920)/(window.innerHeight||1080))),H=(window.matchMedia&&matchMedia("(pointer: coarse)").matches)?540:720,W=Math.round(H*asp);if(m.width!==W||m.height!==H){m.width=W;m.height=H;g=-1;}}Ut_bg();window.addEventListener("resize",()=>{Ut_bg();w(f.daylight,!0);});const St_stars=[];let ss_=7391741;function rnd_(){ss_=(ss_*16807+1013904223)%2147483647;return(ss_&0x7fffffff)/2147483647;}for(let L=0;L<230;L++){const nx=rnd_(),ny=0.02+Math.pow(rnd_(),1.35)*0.5,d_=rnd_(),sz=d_>.94?1.8+rnd_()*.6:d_>.78?1.1+rnd_()*.5:.55+rnd_()*.45,cols=["#ffffff","#ffffff","#eef5ff","#fffaf0","#ffe8cb","#d8e8ff"];St_stars.push({x:nx,y:ny,r:sz,c:cols[Math.floor(rnd_()*cols.length)],a:.35+rnd_()*.65,gw:d_>.94,gt:d_>.94&&rnd_()>.4})}const u=m.getContext("2d"),d=new xt(m);d.colorSpace=xe,n.background=d;const y=new ae,y2=new ae,b=(F,v,E)=>y.set(F).lerp(y2.set(v),E).getStyle();let lastSkyMs=0;function w(F,force=!1,animT=0){const nowMs=performance.now();const v=Math.round(F*120),rn=f.rain||0,rKey=Math.round(rn*40);if(!force&&v===g&&rKey===gRain&&nowMs-lastSkyMs<75)return;g=v;gRain=rKey;lastSkyMs=nowMs;
const E=Math.max(0,Math.min(1,F)),N=m.width,M=m.height,kS=M/1024;
const tw=Math.pow(Math.sin(Math.max(0,Math.min(1,(E-.12)/.70))*Math.PI),1.35)*.82*(1-rn*.55);
// --- sky: anime-style deep zenith to luminous horizon
const D=u.createLinearGradient(0,0,0,M);
const s0=b(b("#080f24","#1f63c9",E),"#3b2b59",tw*.82),s1=b(b("#101b35","#3f8fe3",E),"#7c4a72",tw*.88),s2=b(b("#16253f","#86c2f2",E),"#d9767a",tw*.95),s3=b(b("#1a2b45","#c4e5fb",E),"#f29a62",tw),s4=b(b("#0e1a2e","#eef8ff",E),"#fbcf8a",tw);
D.addColorStop(0,b(s0,b("#0c1320","#4e6278",E),rn*.72));D.addColorStop(.22,b(s1,b("#111b2b","#5f7590",E),rn*.72));D.addColorStop(.46,b(s2,b("#141e2e","#7a8fa6",E),rn*.72));D.addColorStop(.66,b(s3,b("#1b2638","#97aabd",E),rn*.72));D.addColorStop(1,b(s4,b("#151f2e","#b8c7d6",E),rn*.72));
u.fillStyle=D;u.fillRect(0,0,N,M);
const dayAlpha=Math.min(1,E*1.35);
if(dayAlpha>.01){
  u.save();
  // soft sun bloom in the upper right and a glowing horizon
  const sg=u.createRadialGradient(N*.86,M*.06,0,N*.86,M*.06,M*.75);
  sg.addColorStop(0,"rgba(255,252,240,"+(.55*dayAlpha*(1-rn*.9))+")");sg.addColorStop(.25,"rgba(255,246,225,"+(.18*dayAlpha*(1-rn*.9))+")");sg.addColorStop(1,"rgba(255,240,220,0)");
  u.fillStyle=sg;u.fillRect(0,0,N,M);
  const cLit=b(b("#ffffff","#ffe3cc",tw*.85),"#c6cfd9",rn*.72),cMid=b(b("#f1f7ff","#f7c0ad",tw*.85),"#a8b4c1",rn*.72),cSh=b(b("#b3c8e8","#b4728d",tw*.8),"#7d8d9e",rn*.74),cDeep=b(b("#93acd6","#8f5577",tw*.8),"#66778a",rn*.74),cHi=b(b("#ffffff","#fff3df",tw*.7),"#dde3e9",rn*.7);
  // cloud shapes are generated once: a flat base row, a body, and a towering crown
  const AC=w.AC||(w.AC=[[.78,.34,1.3,5.2,11],[.40,.2,.9,3.8,23],[.08,.3,.7,4.5,37],[.93,.15,.62,3.1,41],[.6,.4,.5,2.4,53]].map(([bx,by,sc,sp,seed])=>{let s=seed*2654435761>>>0;const r=()=>(s=Math.imul(s,1664525)+1013904223>>>0)/4294967296;const P=[];
    for(let i=0;i<7;i++)P.push([-120+i*40+r()*14,r()*4,22+r()*12]);
    for(let i=0;i<5;i++)P.push([-85+i*42+r()*16,-24-r()*16,30+r()*14]);
    for(let i=0;i<3;i++)P.push([-42+i*40+r()*18,-58-r()*26,30+r()*16]);
    P.push([r()*30-15,-96-r()*18,26+r()*10]);
    return{bx,by,sc,sp,P}}));
  const span=N*1.5,wrapX=(br,sp)=>((br*span+animT*sp*kS)%span)-N*.25;
  const arcs=(P,cx,cy,s_,dx,dyk,rk,filter)=>{u.beginPath();for(const p of P){if(filter&&!filter(p))continue;const X=cx+p[0]*s_+dx*p[2]*s_,Y=cy+p[1]*s_+dyk*p[2]*s_,R=p[2]*s_*rk;u.moveTo(X+R,Y);u.arc(X,Y,R,0,Math.PI*2)}u.fill()};
  // thin far stratus streaks just above the mist
  u.globalAlpha=dayAlpha*.3;u.fillStyle=cMid;
  for(let i=0;i<6;i++){const ww=N*(.1+.05*Math.sin(i*2.3)),xx=((i*.21*span+animT*1.6*kS)%span)-N*.25,yy=M*(.37+.012*i),hh=M*.006*(1+i%3);u.beginPath();u.ellipse(xx,yy,ww/2,hh,0,0,Math.PI*2);u.fill()}
  for(const c of AC){
    const s_=c.sc*kS,cx=wrapX(c.bx,c.sp),cy=M*c.by,base=cy+12*s_;
    u.save();u.globalAlpha=dayAlpha*.96;
    u.beginPath();u.rect(cx-220*s_,cy-170*s_,440*s_,base-(cy-170*s_));u.clip();
    u.fillStyle=cDeep;arcs(c.P,cx,cy+5*s_,s_,0,0,1.0);                          // under-shadow
    u.fillStyle=cSh;arcs(c.P,cx,cy,s_,0,-.08,1.0);                              // shadow body
    const lg=u.createLinearGradient(0,cy-150*s_,0,base);lg.addColorStop(0,cLit);lg.addColorStop(.75,cMid);lg.addColorStop(1,cSh);
    u.fillStyle=lg;arcs(c.P,cx,cy,s_,-.05,-.26,.86);                            // lit body (cel step)
    u.fillStyle=cHi;u.globalAlpha=dayAlpha*.9;arcs(c.P,cx,cy,s_,-.22,-.44,.48,p=>p[1]<-18);  // crown highlights
    u.restore();
    // crisp flat base line
    u.globalAlpha=dayAlpha*.35;u.fillStyle=cDeep;u.fillRect(cx-130*s_,base-1.2*s_,260*s_,1.6*s_);
  }
  u.globalAlpha=dayAlpha;
  y.set("#e4f2ff").lerp(y2.set("#f7cba4"),tw*.7);
  const mistRgba="rgba("+Math.round(y.r*255)+","+Math.round(y.g*255)+","+Math.round(y.b*255)+","+(0.42+rn*0.22)+")";
  const mistGrad=u.createLinearGradient(0,M*.4,0,M*.62);mistGrad.addColorStop(0,"rgba(225,240,255,0)");mistGrad.addColorStop(.5,mistRgba);mistGrad.addColorStop(1,"rgba(220,238,255,0)");u.fillStyle=mistGrad;u.fillRect(0,M*.4,N,M*.22);
  u.restore();
}
const nightAlpha=(1-E)**2*(1-rn*.58);if(nightAlpha>0.005){u.save();const mwGrad=u.createLinearGradient(N*.05,0,N*.9,M*.55);mwGrad.addColorStop(0,"rgba(130,165,220,0)"),mwGrad.addColorStop(.3,"rgba(150,185,235,"+(0.06*nightAlpha)+")"),mwGrad.addColorStop(.5,"rgba(175,205,250,"+(0.09*nightAlpha)+")"),mwGrad.addColorStop(.7,"rgba(150,185,235,"+(0.05*nightAlpha)+")"),mwGrad.addColorStop(1,"rgba(130,165,220,0)"),u.fillStyle=mwGrad,u.fillRect(0,0,N,M*.6);for(let L=0;L<St_stars.length;L++){const s=St_stars[L],sx=s.x*N,sy=s.y*M,sr=s.r*kS,twk=.72+.28*Math.sin(animT*2.2+L*1.73);u.globalAlpha=nightAlpha*s.a*twk;if(s.gw){const gl=u.createRadialGradient(sx,sy,0,sx,sy,sr*3.8);gl.addColorStop(0,s.c),gl.addColorStop(1,"rgba(255,255,255,0)"),u.fillStyle=gl,u.beginPath(),u.arc(sx,sy,sr*3.8,0,Math.PI*2),u.fill()}u.fillStyle=s.c,u.beginPath(),u.arc(sx,sy,sr,0,Math.PI*2),u.fill();if(s.gt){u.strokeStyle=s.c,u.lineWidth=.6*kS,u.beginPath(),u.moveTo(sx-sr*2.8*twk,sy),u.lineTo(sx+sr*2.8*twk,sy),u.moveTo(sx,sy-sr*2.8*twk),u.lineTo(sx,sy+sr*2.8*twk),u.stroke()}}const moonX=N*.81,moonY=M*.16,moonR=25*kS;u.globalAlpha=nightAlpha;const halo=u.createRadialGradient(moonX,moonY,moonR*.8,moonX,moonY,moonR*3.2);halo.addColorStop(0,"rgba(240,246,255,0.38)"),halo.addColorStop(.35,"rgba(210,228,255,0.16)"),halo.addColorStop(.75,"rgba(175,205,245,0.05)"),halo.addColorStop(1,"rgba(175,205,245,0)"),u.fillStyle=halo,u.beginPath(),u.arc(moonX,moonY,moonR*3.2,0,Math.PI*2),u.fill();const mGrad=u.createRadialGradient(moonX-moonR*.3,moonY-moonR*.3,moonR*.1,moonX,moonY,moonR);mGrad.addColorStop(0,"#ffffff"),mGrad.addColorStop(.7,"#f7f6f0"),mGrad.addColorStop(1,"#e6e3da"),u.fillStyle=mGrad,u.beginPath(),u.arc(moonX,moonY,moonR,0,Math.PI*2),u.fill();u.save(),u.beginPath(),u.arc(moonX,moonY,moonR,0,Math.PI*2),u.clip(),u.fillStyle="rgba(145,155,170,0.15)",u.beginPath(),u.arc(moonX-moonR*.28,moonY-moonR*.12,moonR*.42,0,Math.PI*2),u.fill(),u.beginPath(),u.arc(moonX+moonR*.22,moonY+moonR*.16,moonR*.32,0,Math.PI*2),u.fill(),u.beginPath(),u.arc(moonX-moonR*.06,moonY+moonR*.32,moonR*.36,0,Math.PI*2),u.fill(),u.restore(),u.restore()}
// --- layered ranges: pale and hazy far away, deep green with a forest edge up close
const ridge=(L,X)=>{const x1=X/kS;return M*(.43+L*.13)+(Math.sin(x1/(170-L*24)+L*2)*44+Math.cos(x1/83+L)*18+Math.sin(x1/29+L*5.1)*5*(1+L*.6)+Math.sin(x1/11.3+L)*1.6*L)*kS};
for(let L=0;L<3;L++){
  const mBase=b(b(["#1b2d40","#172b36","#142831"][L],["#6f95b0","#4b7d76","#2f5e4f"][L],E),["#7a5874","#583f58","#3b2d42"][L],tw*.58),
    mTop=b(mBase,b(b("#24364d","#cfe4f2",E),"#e0a6a2",tw*.6),[.42,.26,.12][L]),
    mRim=b(mBase,b(b("#3a5370","#ffffff",E),"#ffd2b0",tw*.7),[.45,.22,.12][L]);
  const pts=[];for(let U=0;U<=N+6;U+=4)pts.push([U,ridge(L,U)]);
  let minY=M;for(const p of pts)minY=Math.min(minY,p[1]);
  const gr=u.createLinearGradient(0,minY,0,M);gr.addColorStop(0,mTop);gr.addColorStop(.35,mBase);gr.addColorStop(1,b(mBase,"#000000",.25));
  u.fillStyle=gr;u.beginPath();u.moveTo(0,M);for(const p of pts)u.lineTo(p[0],p[1]);u.lineTo(N,M);u.closePath();u.fill();
  if(L===2){ // rounded tree crowns along the nearest ridge
    u.beginPath();for(let U=0;U<=N;U+=9*kS+3){const Y=ridge(L,U),R=(5+4*Math.abs(Math.sin(U*.37)))*kS*1.6;u.moveTo(U+R,Y);u.arc(U,Y-R*.35,R,0,Math.PI*2)}u.fill();
  }
  u.strokeStyle=mRim;u.globalAlpha=[.55,.35,.25][L]*(E*.85+.15);u.lineWidth=Math.max(1,1.4*kS*2);u.beginPath();for(let i=0;i<pts.length;i++)i?u.lineTo(pts[i][0],pts[i][1]):u.moveTo(pts[i][0],pts[i][1]);u.stroke();u.globalAlpha=1;
  if(L<2){ // valley mist settling in front of each range
    const my=M*(.43+(L+1)*.13),hz=b(b("#1a2a40","#dcecf8",E),"#f0bfae",tw*.6);y.set(hz);
    const mg=u.createLinearGradient(0,my-M*.09,0,my+M*.03);mg.addColorStop(0,"rgba("+Math.round(y.r*255)+","+Math.round(y.g*255)+","+Math.round(y.b*255)+",0)");mg.addColorStop(.7,"rgba("+Math.round(y.r*255)+","+Math.round(y.g*255)+","+Math.round(y.b*255)+","+(.34*(E*.8+.2))+")");mg.addColorStop(1,"rgba("+Math.round(y.r*255)+","+Math.round(y.g*255)+","+Math.round(y.b*255)+",0)");
    u.fillStyle=mg;u.fillRect(0,my-M*.09,N,M*.12);
  }
}
if(rn>.02){const rMist=u.createLinearGradient(0,M*.32,0,M);rMist.addColorStop(0,"rgba(160,180,200,0)"),rMist.addColorStop(.45,"rgba(155,175,195,"+(rn*(0.12+0.16*E))+")"),rMist.addColorStop(1,"rgba(130,150,170,"+(rn*(0.18+0.15*E))+")"),u.fillStyle=rMist,u.fillRect(0,M*.32,N,M*.68)}
d.needsUpdate=!0}const x=new ae("#8eaee0"),P=new ae("#ffe0ac"),twSun=new ae("#ff9248"),rainSun=new ae("#9cb4cc"),R=new ae("#6c87be"),V=new ae("#d8e5f6");return f.update=(F,v,E)=>{if(f.mode==="auto"){autoPhase=(autoPhase+v*(Math.PI*2/f.cycleSeconds))%(Math.PI*2);}wTimer-=v;if(wTimer<=0){f.raining=!f.raining;wTimer=f.raining?_w(72,153):_w(450,1170);wPhase=_w(0,6.28);}const rainTarget=f.raining?(.72+.28*Math.sin(F*.28+wPhase)):0;const N=Math.cos(autoPhase);const autoTarget=ne.smoothstep(N,-0.28,0.28);const M=f.mode==="night"?0:f.mode==="day"?1:autoTarget;f.daylight=ne.damp(f.daylight,M,2.5,v);f.rain=ne.damp(f.rain,rainTarget,f.raining?.85:3.5,v);f.wet=ne.damp(f.wet,f.raining?1:0,f.raining?.28:.08,v);window.__shrineDaylight=f.daylight;window.__shrineNight=f.night;window.__shrineRain=f.rain;window.__shrineIsRaining=f.raining;const D=f.daylight,L=1-D,rn=f.rain,wt=f.wet,isDry=!f.raining&&rn<=.06;f.night=D<.45,h.root.visible=!f.night&&isDry,s.root.visible=f.night&&isDry;const isRising=(f.mode==="day")||(f.mode==="auto"&&autoPhase>Math.PI)||(M>D);c.textContent=`博丽神社 · ${f.night?"夜":D<.8?(isRising?"晓":"暮"):"昼"}${rn>.18?" · 雨":wt>.22?" · 初霁":""}`;syncHud();const U=1+Math.sin(F*1.2)*.035+Math.sin(F*2.1)*.015,wWind=1+rn*.45;if(D>.04){e.castShadow=!0;e.shadow.autoUpdate=!0;const sx=-26*Math.sin(autoPhase),sy=Math.max(3.8,26*Math.cos(autoPhase)+4.0),sz=13+6*Math.cos(autoPhase*.5);e.position.set(sx,sy,sz);e.intensity=D*3.15*(1-rn*.48);const twL=Math.pow(Math.sin(Math.max(0,Math.min(1,(D-.12)/.70))*Math.PI),1.35)*.75*(1-rn*.55);e.color.copy(x).lerp(P,D).lerp(twSun,twL).lerp(rainSun,rn*.6);if(e.shadow&&e.shadow.camera)e.shadow.camera.updateProjectionMatrix();}else{e.shadow.autoUpdate=!1;e.intensity=0;}a.castShadow=!0;a.shadow.autoUpdate=L>.02;a.intensity=L*10*U;t.color.copy(R).lerp(V,D*(1-rn*.35)),t.intensity=.45+D*1.55*(1-rn*.22),i.intensity=.15+D*.50*(1+rn*.15),o.toneMappingExposure=.94+.22*D*(1-rn*.12);r.glow.emissiveIntensity=.12+L*1.65*U,kt.emissiveIntensity=L*.72*U,At.forEach(lt=>{const ph=lt.phase||0,flk=1+Math.sin(F*1.25+ph)*.045+Math.sin(F*2.6+ph*1.7)*.025+Math.cos(F*4.1+ph*2.3)*.012;lt.light.intensity=lt.power*L*flk;lt.light.position.x=Math.sin(F*1.7+ph)*.006*wWind;lt.light.position.z=Math.cos(F*1.4+ph*1.3)*.006*wWind;lt.light.position.y=(lt.baseY||0)+Math.sin(F*2.1+ph)*.005;if(lt.glowMat)lt.glowMat.emissiveIntensity=.12+L*1.65*flk}),w(D,!1,F)},f}const et=document.querySelector("#scene"),G=new xo({canvas:et,antialias:!0,alpha:!1,powerPreference:"high-performance"});G.setPixelRatio(Math.min(window.devicePixelRatio,1.75));G.setSize(window.innerWidth,window.innerHeight);G.info.autoReset=!1;G.shadowMap.enabled=!0;G.shadowMap.type=So;G.outputColorSpace=xe;G.toneMapping=gt;G.toneMappingExposure=1.16;const J=new Mo;J.background=new ae("#e2ded5");const dt=window.innerWidth/window.innerHeight,te=new pt(-17*dt,17*dt,17,-17,.1,160);te.position.set(28,23,34);const Y=new Po(te,et);Y.target.set(0,2.05,0);const reflCam=te.clone(),reflTarget=new Wt(512,512,{type:Vt,generateMipmaps:!0,minFilter:1008,magFilter:1006}),reflClipPlanes=[new Xt(new k(0,1,0),-0.055)];Y.enableDamping=!0;Y.dampingFactor=.065;Y.rotateSpeed=.7;Y.panSpeed=.72;Y.zoomSpeed=.8;Y.minZoom=.65;Y.maxZoom=3.4;Y.minPolarAngle=.12;Y.maxPolarAngle=Math.PI/2-.045;Y.screenSpacePanning=!0;Y.enablePan=!0;Y.update();const jt=new vo("#d8e5f6","#a99a7f",2);J.add(jt);const se=new Tt("#ffe0ac",3.15);se.position.set(0,26,19);se.castShadow=!0;se.shadow.mapSize.set(2048,2048);Object.assign(se.shadow.camera,{left:-16,right:16,top:16,bottom:-16,near:1,far:65});se.shadow.bias=-25e-5;se.shadow.normalBias=.035;se.shadow.radius=2.5;se.target.position.set(0,1.2,0);J.add(se.target);J.add(se);const tt=new Tt("#c2d1ea",.65);tt.position.set(12,8,-13);J.add(tt);const ie=new le;J.add(ie);ss(ie);$o(ie);Jo(ie);es(ie);ts(ie);os(ie);is(ie);
// === Hakurei details: yin-yang 水引幕, gable 懸魚 ===
(()=>{
  // 水引幕: purple shrine curtain with white yin-yang crests, hung under the porch beam behind the shimenawa
  const cv=document.createElement("canvas");cv.width=1024;cv.height=128;
  const x=cv.getContext("2d");
  x.fillStyle="#3f2453";x.fillRect(0,0,1024,128);
  for(let i=0;i<64;i++){x.fillStyle=i%2?"rgba(0,0,0,0.16)":"rgba(255,255,255,0.05)";x.fillRect(i*16,0,8,128)}
  x.fillStyle="#2c1838";x.fillRect(0,0,1024,14);
  x.clearRect(0,118,1024,10);
  for(let i=0;i<=32;i++){x.beginPath();x.fillStyle="#3f2453";x.arc(i*32,112,16,0,Math.PI);x.fill()}
  const orb=(cx,cy,R)=>{x.save();x.translate(cx,cy);
    x.fillStyle="#f3eee4";x.beginPath();x.arc(0,0,R,0,7);x.fill();
    x.fillStyle="#bd3b33";x.beginPath();x.arc(0,0,R,-Math.PI/2,Math.PI/2);x.arc(0,R/2,R/2,Math.PI/2,-Math.PI/2,!0);x.arc(0,-R/2,R/2,Math.PI/2,-Math.PI/2);x.fill();
    x.fillStyle="#f3eee4";x.beginPath();x.arc(0,R/2,R*.17,0,7);x.fill();
    x.fillStyle="#bd3b33";x.beginPath();x.arc(0,-R/2,R*.17,0,7);x.fill();
    x.strokeStyle="#f3eee4";x.lineWidth=3;x.beginPath();x.arc(0,0,R+5,0,7);x.stroke();x.restore()};
  [192,512,832].forEach(cx=>orb(cx,62,34));
  const tex=new xt(cv);tex.colorSpace=xe;tex.anisotropy=4;
  const cg=new he(3.12,.34,64,1),cp=cg.attributes.position;
  for(let i=0;i<cp.count;i++){const px=cp.getX(i),py=cp.getY(i);cp.setZ(i,Math.sin(px*31)*.014*(.4+(.17-py)*3))}
  cg.computeVertexNormals();
  const cm=S("#ffffff",{map:tex,alphaTest:.5,side:K});
  const cur=I(ie,cg,cm,0,.68+3.69,-3.55+3.12);cur.castShadow=!1;

  // 懸魚: ornamental board hanging under the front gable of the main hall
  const gs=new ye;
  gs.moveTo(0,0);gs.bezierCurveTo(.2,0,.3,-.12,.26,-.26);gs.bezierCurveTo(.22,-.4,.08,-.46,0,-.58);
  gs.bezierCurveTo(-.08,-.46,-.22,-.4,-.26,-.26);gs.bezierCurveTo(-.3,-.12,-.2,0,0,0);
  for(const s of[-1,1]){const hh=new ye;hh.moveTo(s*.11,-.2);hh.bezierCurveTo(s*.17,-.17,s*.18,-.27,s*.11,-.34);hh.bezierCurveTo(s*.05,-.28,s*.05,-.22,s*.11,-.2);gs.holes.push(hh)}
  const gy=I(ie,new Ke(gs,{depth:.05,bevelEnabled:!1,curveSegments:10}),r.woodLight,0,.68+6.12,-3.55+2.18);
  gy.castShadow=!1;
  const ro6=A(ie,.07,.07,.03,0,.68+6.07,-3.55+2.24,r.brass,12);ro6.rotation.x=Math.PI/2;
})();

// === Eave drip lines: one per tile channel lip. Water leaves each lip with a little outward speed, so trace its
// ballistic path to find where it lands; skip lips sheltered by a higher roof. Bigger roofs feed more water per channel.
(()=>{
  const E=me.E||[];me.D=[];ie.updateMatrixWorld(!0);
  const skip=new Set();W.forEach(w=>w.obj&&w.obj.traverse&&w.obj.traverse(o=>skip.add(o)));
  const solid=[],roofs=[],v=new k,od=new k;
  ie.traverse(o=>{
    if(!o.isMesh||o.isInstancedMesh||skip.has(o))return;
    const m=o.material;if(!m||Array.isArray(m)||m.transparent||m.isShaderMaterial||m.alphaTest>0)return;
    const g=o.geometry;if(!g.boundingBox)g.computeBoundingBox();const bb=g.boundingBox;
    let x0=1e9,y0=1e9,z0=1e9,x1=-1e9,y1=-1e9,z1=-1e9;
    for(let i=0;i<8;i++){v.set(i&1?bb.max.x:bb.min.x,i&2?bb.max.y:bb.min.y,i&4?bb.max.z:bb.min.z).applyMatrix4(o.matrixWorld);
      x0=Math.min(x0,v.x);y0=Math.min(y0,v.y);z0=Math.min(z0,v.z);x1=Math.max(x1,v.x);y1=Math.max(y1,v.y);z1=Math.max(z1,v.z)}
    const q=[x0,y0,z0,x1,y1,z1];solid.push(q);if(m===r.roof||m===r.tile||m===r.roofEdge)roofs.push(q);
  });
  const rnd=(a,b)=>((Math.sin(a*12.9898+b*78.233)*43758.5453)%1+1)%1;
  for(const[l,c,t,sm]of E){
    const nb=Math.ceil(t/(sm?.3:.24));
    for(const side of[-1,1])for(let gi=0;gi<nb;gi++){
      if(FOL_MOB&&gi%2)continue;
      // Start at the tile mouth, with a small, stable offset inside each channel.
      v.set(side*(c+.075),.18,-t/2+(gi+.5)*t/nb+(rnd(gi,c)-.5)*.045);l.localToWorld(v);
      const x=v.x,y=v.y,zz=v.z;
      if(roofs.some(q=>x>q[0]&&x<q[3]&&zz>q[2]&&zz<q[5]&&q[1]>y+.05))continue;
      od.set(side,0,0).transformDirection(l.matrixWorld);const ol=Math.hypot(od.x,od.z)||1,ox=od.x/ol,oz=od.z/ol;
      const v0=.12+.16*rnd(x,zz);
      let ly=null;
      for(let a=.02;a<3&&ly===null;a+=.01){
        const px=x+ox*v0*a,pz=zz+oz*v0*a,py=y-4.9*a*a;let top=-1e9;
        for(const q of solid)if(px>q[0]&&px<q[3]&&pz>q[2]&&pz<q[5]&&q[4]<y-.08&&q[4]>=py&&q[1]<=py+.02&&q[4]>top&&(q[3]-q[0]>.25||q[5]-q[2]>.25))top=q[4];
        if(top>-50)ly=top;
      }
      if(ly===null||y-ly<.25)continue;
      me.D.push([x,y,zz,ly,ox,oz,v0,Math.sqrt(2*(y-ly)/9.8),Math.min(1.15,Math.max(.35,c/3.6))*(.75+.5*rnd(zz,x))]);
    }
  }
})();

ns(ie,W);
// === Rain Wet Surfaces: planar reflections, paving water film, puddles from a baked noise map ===
const WET=(()=>{
const CLIP={uClipOn:{value:0},uClipY:{value:0}};
const MOB=(window.matchMedia&&matchMedia("(pointer: coarse)").matches)||Math.min(screen.width,screen.height)<820;
const u={uWet:{value:0},uRainI:{value:0},uWetTime:{value:0},uReflOn:{value:0},uHiOn:{value:MOB?0:1},uReflLoY:{value:.05},uReflHiY:{value:.665},uWetSky:{value:new ae("#8fa3b3")},uWetProj:{value:new wo},tReflLo:{value:ke},tReflHi:{value:ke},uReflTexel:{value:new B(1/512,1/512)},tWetNoise:{value:ke},uNoiseOn:{value:0}};
const PARS=`
uniform float uWet;
uniform float uRainI;
uniform float uWetTime;
uniform float uReflOn;
uniform float uHiOn;
uniform float uReflLoY;
uniform float uReflHiY;
uniform vec3 uWetSky;
uniform mat4 uWetProj;
uniform sampler2D tReflLo;
uniform sampler2D tReflHi;
uniform vec2 uReflTexel;
uniform sampler2D tWetNoise;
uniform float uNoiseOn;
// Integer hash: exact on every GPU, so low-precision mobile shaders do not turn it into static
float wHash(vec2 p,int s){
  uvec2 q=uvec2(ivec2(floor(p))+ivec2(40000));
  uint h=q.x*1664525u^(q.y*1013904223u)^(uint(s)*2654435761u);
  h^=h>>16;h*=0x7feb352du;h^=h>>15;h*=0x846ca68bu;h^=h>>16;
  return float(h)*(1.0/4294967295.0);
}
float wNoise(vec2 p){vec2 i=floor(p),f=fract(p),s=f*f*(3.0-2.0*f);return mix(mix(wHash(i,0),wHash(i+vec2(1.0,0.0),0),s.x),mix(wHash(i+vec2(0.0,1.0),0),wHash(i+vec2(1.0,1.0),0),s.x),s.y);}
float wBox(vec2 p,vec4 b,float k){vec2 d=max(b.xy-p,p-b.zw);return 1.0-smoothstep(-k,k,max(d.x,d.y));}
// Roof footprints (xmin,zmin,xmax,zmax) below their eaves stay dry
float wShelter(vec3 p){
  float s=0.0;
  if(p.y<5.0)s=max(s,wBox(p.xz,vec4(-4.43,-7.43,4.43,-0.53),0.2));
  if(p.y<4.9)s=max(s,wBox(p.xz,vec4(-2.35,-1.99,2.35,0.35),0.2));
  if(p.y<3.45)s=max(s,wBox(p.xz,vec4(4.72,-6.2,8.38,-1.8),0.16));
  if(p.y<2.9)s=max(s,wBox(p.xz,vec4(-7.8,1.15,-4.3,4.2),0.16));
  return s;
}
// Puddle "basin depth": soft zones + baked domain-warped fbm; water fills where basin > level
float wPuddleBasin(vec3 p,float n){
  vec4 Z[7]=vec4[7](vec4(-2.85,4.65,2.1,2.3),vec4(2.95,5.25,2.15,2.35),vec4(-3.2,8.15,2.0,1.8),vec4(3.3,8.25,1.95,1.75),vec4(0.0,5.85,1.5,3.2),vec4(-5.15,-1.55,1.95,2.1),vec4(4.35,-1.15,1.7,1.9));
  float Y[7]=float[7](0.05,0.05,0.05,0.05,0.1575,0.665,0.665);
  float z=0.0;
  for(int i=0;i<7;i++){if(abs(p.y-Y[i])<0.025){float e=length((p.xz-Z[i].xy)/Z[i].zw);z=max(z,1.0-smoothstep(0.25,1.0,e));}}
  if(uNoiseOn<0.5)return -1.0;
  // Keep the field continuous outside each basin. A -1 sentinel at z=0
  // inflates fwidth into a false puddle/bright dashed ellipse at its boundary.
  // With z=0 the score is at most 0.5, safely below the 0.8 puddle threshold.
  return z*0.62+n*0.7-0.2;
}
// Paved areas that collect a reflective water film: approach path, stone steps, hall platform
float wPave(vec3 p){
  float a=(1.0-step(0.02,abs(p.y-0.1575)))*wBox(p.xz,vec4(-1.42,2.3,1.42,10.3),0.03);
  float b=(1.0-step(0.02,abs(p.y-0.745)))*wBox(p.xz,vec4(-1.88,-1.05,1.88,0.82),0.03);
  float sd=abs(fract((p.y-0.22)/0.155+0.5)-0.5)*0.155;
  float c=(1.0-step(0.018,sd))*step(p.y,0.7)*wBox(p.xz,vec4(-2.1,0.5,2.1,2.35),0.03);
  return max(a,max(b,c));
}
// Raindrop impact on standing water: each cell receives one drop per cycle at a random spot, and only some
// cycles fire, so the pattern never repeats. A drop leaves a bright splash, then a leading ring and a weaker
// trailing ring that expand and fade. Ring width never drops below ~1.3px; when it is widened for distant views
// the amplitude is scaled down so the rings stay legible without turning into grain.
// returns: xy = surface slope, z = crest strength, w = splash
vec4 wDrop(vec2 p,float t,float fp,int sd,float dens,float Rm,float w0){
  vec2 c=floor(p),f=fract(p);
  float h=wHash(c,sd);
  float tt=t*(0.8+0.45*h)+h*11.3,cyc=floor(tt),ph=fract(tt);
  if(wHash(c+vec2(cyc*13.0,cyc*7.0),sd+5)>dens)return vec4(0.0);
  vec2 o=0.36+0.28*vec2(wHash(c+cyc,sd+1),wHash(c+cyc,sd+2));
  vec2 dv=f-o;float d=length(dv)+1e-4;
  float w=max(w0,fp*1.3),amp=sqrt(w0/w);
  float R=Rm*sqrt(ph);                          // fast at impact, slowing as it spreads
  float env=(1.0-ph)*(1.0-ph)*smoothstep(0.0,0.04,ph)*amp;
  float x1=(d-R)/w,x2=(d-R*0.62)/(w*0.8);
  float s1=-x1*exp(-x1*x1),s2=-x2*exp(-x2*x2)*0.45;
  vec2 dir=dv/d;
  float slope=(s1+s2)*env;
  float crest=(exp(-x1*x1)+0.4*exp(-x2*x2))*env;
  float sw=max(0.03,fp*1.2);
  float splash=(1.0-smoothstep(0.0,sw,d))*(1.0-smoothstep(0.0,0.1,ph))*min(1.0,sqrt(0.03/sw));
  if(ph<0.2&&fp<0.03){
    float ca=atan(dv.y,dv.x)*6.0/6.2831853,cr=0.05+ph*0.35;
    float cd=length(vec2((fract(ca+h*3.0)-0.5)*cr*1.05,d-cr));
    splash+=(1.0-smoothstep(0.006,0.013,cd))*(1.0-ph/0.2)*0.8;
  }
  return vec4(dir*slope,crest,splash);
}
// standing puddle: wide rings that travel far before fading
vec4 wRipples(vec2 p,float t,float fp,float rain){
  float dens=0.12+0.78*rain;
  vec4 a=wDrop(p,t,fp,1,dens,0.32,0.028);
  vec4 b=wDrop(p*1.37+vec2(0.43,0.71),t*1.09+0.37,fp*1.37,11,dens,0.32,0.028);
  vec4 c=wDrop(p*0.81+vec2(0.17,0.29),t*0.93+0.71,fp*0.81,23,dens,0.32,0.028);
  return a+b*0.85+c;
}
// thin film on stone: the water is too shallow for rings to travel, so a drop is mostly a splash
// with a small, quick ring; many more drops land per area
vec4 wFilmDrops(vec2 p,float t,float fp,float rain){
  float dens=0.2+0.75*rain;
  vec4 a=wDrop(p,t*1.7,fp,31,dens,0.15,0.04);
  vec4 b=wDrop(p*1.29+vec2(0.61,0.13),t*1.83+0.29,fp*1.29,41,dens,0.15,0.04);
  vec4 c=wDrop(p*0.77+vec2(0.27,0.83),t*1.61+0.53,fp*0.77,53,dens,0.15,0.04);
  vec4 o=a+b+c;o.xy*=0.6;o.z*=0.7;o.w*=1.25;
  return o;
}
vec3 wFetch(vec2 uv,float lod,float hiSel){return hiSel>0.5?textureLod(tReflHi,uv,lod).rgb:textureLod(tReflLo,uv,lod).rgb;}
// Planar reflection for a surface at its own height. Orthographic camera: mirroring about
// height h equals mirroring about h0 plus a constant screen offset, so one pass serves all heights.
vec3 wReflect(vec3 wp,vec3 vp,vec3 Nw,float rough){
  if(uReflOn<0.5)return uWetSky;
  float hiSel=step(0.45,wp.y);
  if(hiSel>0.5&&uHiOn<0.5)return uWetSky;
  float h0=mix(uReflLoY,uReflHiY,hiSel);
  float band=1.0-smoothstep(0.16,0.34,abs(wp.y-h0));
  if(band<=0.0)return uWetSky;
  vec4 c=uWetProj*vec4(vp,1.0);
  vec2 uv=c.xy/c.w*0.5+0.5;
  uv-=(uWetProj*(viewMatrix*vec4(0.0,2.0*(wp.y-h0),0.0,0.0))).xy*0.5;
  uv+=(uWetProj*(viewMatrix*vec4(Nw.x,0.0,Nw.z,0.0))).xy*0.35;
  uv.x=1.0-uv.x;
  float lod=rough*6.0;
  vec2 st=vec2(0.0,uReflTexel.y)*(0.6+rough*18.0)*(3.0/float(WET_TAPS));
  vec3 acc=vec3(0.0);float ws=0.0;
  for(int i=-WET_TAPS;i<=WET_TAPS;i++){float fi=float(i)*3.0/float(WET_TAPS);float w=exp(-fi*fi*0.25);acc+=wFetch(uv+st*float(i),lod,hiSel)*w;ws+=w;}
  vec3 col=acc/ws;
  float edge=smoothstep(0.0,0.04,uv.x)*smoothstep(1.0,0.96,uv.x)*smoothstep(0.0,0.04,uv.y)*smoothstep(1.0,0.96,uv.y);
  return mix(uWetSky,col,edge*band);
}
vec3 wSpec(vec3 vp,vec3 N,vec3 V,float sh){
  vec3 s=vec3(0.0);float nrm=(sh+8.0)/25.1327;
  #if NUM_DIR_LIGHTS>0
  vec3 Vp=isOrthographic?normalize(vec3(0.0,0.0,28.0)-vp):V;
  for(int i=0;i<NUM_DIR_LIGHTS;i++){vec3 H=normalize(directionalLights[i].direction+Vp);s+=directionalLights[i].color*pow(max(dot(N,H),0.0),sh*2.0)*nrm*0.05*(1.0-0.9*uRainI);}
  #endif
  #if NUM_POINT_LIGHTS>0
  for(int i=0;i<NUM_POINT_LIGHTS;i++){vec3 lv=pointLights[i].position-vp;float d=length(lv);vec3 L=lv/max(d,1e-3);float at=getDistanceAttenuation(d,pointLights[i].distance,pointLights[i].decay);vec3 plc=2.6*tanh(pointLights[i].color*at/2.6);vec3 H=normalize(L+V);s+=plc*pow(max(dot(N,H),0.0),sh*0.5)*nrm*0.5*max(dot(N,L),0.0);}
  #endif
  return min(s,vec3(1.2));
}
`;
const MAIN=`
{
  vec3 wVp=-vViewPosition;
  vec3 wWp=(wVp-viewMatrix[3].xyz)*mat3(viewMatrix);
  vec3 wNrm=normalize(normal*mat3(viewMatrix));
  float wUp=smoothstep(0.55,0.92,wNrm.y);
  // Everything that needs screen derivatives runs here, in uniform control flow
  float wFp=max(length(fwidth(wWp.xz)),1e-4);
  vec4 wNz=uNoiseOn>0.5?texture2D(tWetNoise,(wWp.xz+11.0)/22.0):vec4(0.5);
  #if WET_KIND<2
  float wB=wPuddleBasin(wWp,wNz.r);
  float wAA=max(fwidth(wB)*1.2,0.003);
  #endif
  // Detail that is smaller than a pixel fades out instead of aliasing into grain
  float wLodM=1.0-smoothstep(0.04,0.1,wFp);
  float wLodD=1.0-smoothstep(0.018,0.045,wFp);
  #if WET_KIND==0
  // Moss grows on stone where it faces the sky and near the soil; patches follow world-space noise
  // so neighbouring stones share one continuous growth pattern. Paving and the outer curb stay clean.
  {
    float mG=wWp.y<0.5?0.05:0.665,mH=wWp.y-mG;
    float mN=wNoise(wWp.xz*2.1+vec2(wWp.y*0.9,3.0))*0.56+wNoise(wWp.xz*5.3+vec2(-wWp.y*1.7,11.0))*0.3+wNoise(wWp.xz*12.7+vec2(5.0,wWp.y*2.3))*0.14*wLodM;
    float mAA=max(fwidth(mN)*1.4,0.008);
    float mAllow=(1.0-wPave(wWp))*(1.0-smoothstep(9.15,9.5,max(abs(wWp.x),abs(wWp.z))))*(1.0-0.75*wShelter(wWp));
    float mUp=smoothstep(0.3,0.8,wNrm.y);
    float mLow=1.0-smoothstep(0.04,0.85,mH);
    float mCov=mUp*mix(0.25,1.0,mLow*mLow)+(1.0-mUp)*(1.0-smoothstep(0.0,0.1,mH))*0.8;
    float mThr=1.0-mCov*0.36;
    float mM=smoothstep(mThr-mAA,mThr+mAA,mN)*mAllow*step(0.02,mCov);
    if(mM>0.001){
      vec3 mL=outgoingLight/max(diffuseColor.rgb,vec3(0.02));
      float mHi=smoothstep(mThr+0.07,mThr+0.07+mAA*2.0,mN)*mUp;
      float mRim=1.0-smoothstep(mThr+mAA,mThr+mAA*3.5,mN);
      vec3 mC=mix(vec3(0.15,0.22,0.09),vec3(0.24,0.33,0.13),mHi);
      mC=mix(mC,vec3(0.11,0.15,0.07),mRim*0.5);
      outgoingLight=mix(outgoingLight,mC*mL,mM*0.85);
    }
  }
  #endif
  float wW=uWet*(1.0-wShelter(wWp));
  if(wW>0.002){
    vec3 wV=isOrthographic?vec3(0.0,0.0,1.0):normalize(vViewPosition);
    float wSide=1.0-wUp;
    float wOn=smoothstep(0.0,0.5,wW*1.35-wNz.g*0.35);
    float wStreak=mix(0.5,smoothstep(0.3,0.85,wNoise(vec2((wWp.x+wWp.z)*9.0,wWp.y*1.2))),1.0-smoothstep(0.03,0.07,wFp));
    float wAmt=wOn*(wUp+wSide*(0.45+0.55*wStreak))*step(-0.2,wNrm.y);
    vec3 wBase=outgoingLight*mix(1.0,mix(WET_SIDE,WET_TOP,wUp),wAmt);
    #if WET_KIND==0
    {
      // riser faces of the stone steps: water sheets over each nose, threads down the face and beads off the edge
      float wRiser=(1.0-wUp)*step(wWp.y,0.72)*wBox(wWp.xz,vec4(-2.1,0.5,2.1,2.4),0.03)*smoothstep(0.5,0.9,wNrm.z);
      if(wRiser>0.01&&uRainI>0.01){
        float sf=(wWp.y-0.22)/0.155,stp=floor(sf),dn=(1.0-fract(sf))*0.155;   // which step, depth below its nose
        float lod=1.0-smoothstep(0.012,0.03,wFp);
        // the nose: a bright meniscus line that thickens where water pools along the edge
        float pool=wNoise(vec2(wWp.x*3.1+stp*7.7,stp*1.3));
        float nw=max(0.005,wFp*1.1)*(0.8+0.9*pool);
        float nose=(1.0-smoothstep(nw*0.5,nw*1.6,dn))*(0.7+0.3*wNoise(vec2(wWp.x*30.0-uWetTime*0.6,stp)));
        // threads gather where the edge dips: low-frequency clustering per step, varied width and wander
        float clus=smoothstep(0.38,0.72,wNoise(vec2(wWp.x*2.4+stp*3.3,stp*5.1+0.5)));
        float lu=wWp.x/0.038+stp*0.37,lane=floor(lu),lf=fract(lu);
        float lh=wHash(vec2(lane,stp+7.0),61),lw=wHash(vec2(lane,stp+3.0),71);
        float cx=0.5+(lh-0.5)*0.55+0.1*sin(dn*31.0*(0.7+lw)+lh*6.3)+0.04*sin(dn*97.0+lw*4.0);
        float rw0=(0.0025+0.0035*lw)/0.038,rw=max(rw0,wFp*0.8/0.038);
        float on=step(0.62-0.4*clus,lh);
        float thread=(1.0-smoothstep(rw*0.45,rw*1.4,abs(lf-cx)))*on*min(1.0,rw0/rw*1.5+0.2);
        float pu=fract(dn*(4.5+3.0*lw)-uWetTime*(1.3+1.1*lh)+lh*5.0);
        float flow=thread*(0.35+0.65*smoothstep(0.0,0.12,pu)*(1.0-smoothstep(0.12,0.55,pu)))*(1.0-0.5*smoothstep(0.09,0.15,dn))*lod;
        // a faint wet sheet spreads around each cluster, fading with depth
        float sheet=clus*(0.25+0.75*exp(-dn*18.0))*wNoise(vec2(wWp.x*14.0+stp*9.0,dn*6.0-uWetTime*0.9));
        // drops gather on the nose, swell, then let go along the threads
        float bh=wHash(vec2(lane,stp+11.0),67),bt=fract(uWetTime*(0.3+0.35*bh)+bh*9.0);
        float by=bt<0.72?0.004+0.007*bt/0.72:0.011+pow((bt-0.72)/0.28,1.6)*0.155;
        float br=max(0.005,wFp*0.75)*(bt<0.72?0.7+0.5*bt:1.0);
        float bead=(1.0-smoothstep(br*0.55,br*1.4,length(vec2((lf-cx)*0.038,dn-by))))*step(0.7-0.35*clus,bh)*lod;
        vec3 wc=mix(uWetSky,vec3(0.92,0.96,1.0)*clamp(dot(outgoingLight,vec3(0.333))*2.2,0.08,1.0),0.45);
        wBase*=1.0-0.12*sheet*wRiser*uRainI*wW;
        wBase+=wc*wRiser*uRainI*wW*(sheet*0.05+nose*0.3+flow*0.2+bead*0.38+(1.0-lod)*0.035);
      }
    }
    #endif
    #if WET_KIND<2
    float wThr=mix(1.12,0.8,smoothstep(0.12,1.0,wW));
    float wPud=wB<0.0?0.0:smoothstep(wThr-wAA,wThr+wAA,wB)*wUp;
    float wDeep=wB<0.0?0.0:smoothstep(wThr,wThr+0.16,wB);
    float wRim=wB<0.0?0.0:smoothstep(wThr-0.2,wThr,wB)*wUp;
    float wLine=wB<0.0?0.0:smoothstep(wThr-wAA*2.5,wThr,wB)*(1.0-smoothstep(wThr,wThr+wAA*2.5,wB))*wUp;
    wBase*=mix(1.0,0.74,wRim*wOn);
    float wPv=WET_FILM>0.0?wPave(wWp):0.0;
    float wPatch=wNz.b;
    float wFilm=WET_FILM*wUp*smoothstep(0.15,0.8,wW)*mix(0.22*smoothstep(0.45,0.7,wPatch),smoothstep(0.05,0.4,wPatch*0.7+wW*0.45),wPv);
    float wWater=max(wFilm,wPud);
    if(wWater>0.003){
      vec4 wRp=vec4(0.0);
      if(uRainI>0.01){
        if(wPud>0.01){
          wRp+=wRipples(wWp.xz*2.2,uWetTime,wFp*2.2,uRainI)*wPud;
          vec2 cq=wWp.xz*9.0;float ct=uWetTime*3.1;
          vec2 ch=vec2(wNoise(cq+vec2(ct,0.0))-wNoise(cq+vec2(-ct*0.7,5.3)),wNoise(cq+vec2(2.1,ct*0.8))-wNoise(cq+vec2(7.7,-ct)));
          wRp.xy+=ch*0.05*uRainI*wPud*wLodM;
        }
        if(wPud<0.99)wRp+=wFilmDrops(wWp.xz*4.2,uWetTime,wFp*4.2,uRainI)*(1.0-wPud);
      }
      vec2 g=wRp.xy*mix(0.24,0.6,wPud);
      g+=(vec2(wNoise(wWp.xz*4.0+vec2(0.0,uWetTime*0.1)),wNoise(wWp.xz*4.0+vec2(4.1,7.3)))-0.5)*0.05*(1.0-wPud)*wLodM;
      vec3 wNw=normalize(vec3(-g.x,1.0,-g.y));
      vec3 wNv=normalize(mat3(viewMatrix)*wNw);
      float wNoV=clamp(dot(wNv,wV),0.0,1.0);
      float wF=0.02+0.98*pow(1.0-wNoV,5.0);
      float wRough=mix(mix(0.5,0.07+0.12*(1.0-wPatch),wPv),0.03,wPud);
      vec3 wRefl=wReflect(wWp,wVp,wNw,wRough);
      vec3 wSp=wSpec(wVp,wNv,wV,mix(mix(90.0,260.0,wPv),700.0,wPud));
      float wGr=1.0-wNoV;
      // Floor of sky reflection so water still reads as water from straight above
      float wKf=mix(0.1,mix(0.42,0.85,wPv),pow(wGr,1.6))*mix(0.55,1.0,wPv);
      float wKp=min(0.85,0.14+0.72*pow(wGr,2.2)*(0.55+0.45*wDeep));
      float wK=wWater*mix(wKf,wKp,wPud);
      // Puddle body: clear, slightly cool water over the wet bed
      float wDebris=smoothstep(0.78,0.86,wNz.a)*(1.0-wDeep*0.5)*wLodD;
      float wPetal=smoothstep(0.9,0.94,wNoise(wWp.xz*7.1+vec2(9.0,4.0)))*wLodD;
      vec3 wMud=wBase*mix(0.88,0.62,wDeep)*vec3(0.92,0.93,0.95);
      wMud=mix(wMud,wBase*0.62,wDebris*0.5);
      vec3 wBed=mix(wBase*mix(1.0,0.82,wPv*wFilm),wMud,wPud);
      wRefl*=mix(vec3(1.0),vec3(0.84,0.88,0.9),wPud);
      wBase=mix(wBed,wRefl,wK)+wSp*wWater*0.5;
      wBase+=uWetSky*wLine*0.22*wW;
      // ripple crests catch the sky and nearby lanterns; impact points flash briefly
      vec3 wRc=max(wRefl,uWetSky)*0.55+wSp*0.6;
      wBase+=wRc*wRp.z*0.55*wWater*mix(0.5,1.0,wPud);
      wBase+=mix(uWetSky,vec3(1.0),0.55)*wRp.w*0.45*wWater*max(0.25,dot(wRc,vec3(0.33))*1.6);
      wBase=mix(wBase,vec3(0.85,0.52,0.56)*max(dot(outgoingLight,vec3(0.33)),0.08)*1.6,wPetal*wPud*0.85);
    }
    #endif
    outgoingLight=wBase;
  }
}
`;
function patch(m,kind,top,side,film){
  const prev=m.onBeforeCompile,prevKey=m.customProgramCacheKey;
  m.onBeforeCompile=(sh,rd)=>{
    prev&&prev.call(m,sh,rd);
    Object.assign(sh.uniforms,u);
    sh.fragmentShader=`#define WET_KIND ${kind}\n#define WET_TOP ${top.toFixed(3)}\n#define WET_SIDE ${side.toFixed(3)}\n#define WET_FILM ${film.toFixed(3)}\n#define WET_TAPS ${MOB?1:3}\n`+sh.fragmentShader.replace("#include <clipping_planes_pars_fragment>","#include <clipping_planes_pars_fragment>\n"+PARS).replace("#include <opaque_fragment>",MAIN+"\n#include <opaque_fragment>");
  };
  m.customProgramCacheKey=()=>(prevKey?prevKey.call(m):"")+`|wet-v5-${kind}-${top}-${side}-${film}`;
  m.needsUpdate=!0;
}
[r.stone,r.stoneLight,r.stoneDark].forEach(m=>patch(m,0,.6,.78,1));
patch(r.earth,1,.5,.78,0);
patch(r.soil,2,.62,.74,0);
[r.grass,r.moss].forEach(m=>patch(m,2,.74,.82,0));
[r.wood,r.woodLight,r.woodDark].forEach(m=>patch(m,2,.78,.86,0));
// Bake the puddle / wetness noise once (time-sliced) into a mipmapped texture covering x,z in [-11,11]
(()=>{
  const N=512,buf=new Uint8Array(N*N*4);
  const hs=(x,y,s)=>{let h=Math.imul(x|0,1664525)^Math.imul(y|0,1013904223)^Math.imul(s,668265261);h^=h>>>16;h=Math.imul(h,0x7feb352d);h^=h>>>15;h=Math.imul(h,0x846ca68b);h^=h>>>16;return(h>>>0)/4294967295};
  const vn=(x,y,s)=>{const ix=Math.floor(x),iy=Math.floor(y),fx=x-ix,fy=y-iy,ux=fx*fx*(3-2*fx),uy=fy*fy*(3-2*fy);const a=hs(ix,iy,s),b=hs(ix+1,iy,s),c=hs(ix,iy+1,s),d=hs(ix+1,iy+1,s);return a+(b-a)*ux+(c-a)*uy+(a-b-c+d)*ux*uy};
  const fbm=(x,y,s)=>{let a=.5,t=0;for(let i=0;i<4;i++){t+=a*vn(x,y,s+i);const nx=1.6*x-1.2*y+3.1,ny=1.2*x+1.6*y+1.7;x=nx;y=ny;a*=.5}return t/.9375};
  let row=0;
  function step(){
    const end=Math.min(N,row+(MOB?12:32));
    for(;row<end;row++){const z=-11+(row+.5)*22/N;for(let c=0;c<N;c++){const x=-11+(c+.5)*22/N,i=(row*N+c)*4;
      const qx=x*.85,qz=z*.85,wx=fbm(qx*.6+3.1,qz*.6+7.7,10)-.5,wz=fbm(qx*.6+9.2,qz*.6+1.3,20)-.5;
      buf[i]=255*Math.min(1,fbm(qx+wx*1.8,qz+wz*1.8,30));
      buf[i+1]=255*Math.min(1,fbm(x*1.3+11,z*1.3+5,40));
      buf[i+2]=255*Math.min(1,fbm(x*.7+2,z*.7+9,50));
      buf[i+3]=255*vn(x*5.3+3,z*5.3+1,60);}}
    if(row<N){setTimeout(step,0);return}
    const t=new ro(buf,N,N);t.generateMipmaps=!0;t.minFilter=1008;t.magFilter=1006;t.anisotropy=4;t.needsUpdate=!0;
    u.tWetNoise.value=t;u.uNoiseOn.value=1;
  }
  setTimeout(step,1200);
})();
const lo=reflTarget,hi=new Wt(512,512,{type:Vt,generateMipmaps:!0,minFilter:1008,magFilter:1006});
const cLo=.052,cHi=.667;
const cam=te.clone(),sz=new B;
const skyD=new ae("#6f95bd"),skyDR=new ae("#71828f"),skyN=new ae("#101b2a"),skyNR=new ae("#141c26"),sky=new ae,tmpC=new ae;
const RS=MOB?.35:.5;
function resize(){G.getDrawingBufferSize(sz);const w=Math.max(192,Math.round(sz.x*RS)),h=Math.max(192,Math.round(sz.y*RS));lo.setSize(w,h);hi.setSize(w,h);u.uReflTexel.value.set(1/w,1/h)}
resize();window.addEventListener("resize",resize);
function pass(rt,y0,clipY){cam.copy(te);cam.position.y=2*y0-te.position.y;cam.up.set(0,-1,0);cam.lookAt(Y.target.x,2*y0-Y.target.y,Y.target.z);cam.updateMatrixWorld(!0);cam.updateProjectionMatrix();G.setRenderTarget(rt);CLIP.uClipOn.value=1;CLIP.uClipY.value=clipY;G.render(J,cam)}
const pre=[],extra=[];
function render(t,wt,rn,day,hide){
  pre.forEach(f=>f(t,wt,rn,day));
  u.uWet.value=wt;u.uRainI.value=rn;u.uWetTime.value=t;u.uWetProj.value.copy(te.projectionMatrix);
  sky.copy(skyN).lerp(skyD,day);tmpC.copy(skyNR).lerp(skyDR,day);sky.lerp(tmpC,Math.min(1,rn*1.4));u.uWetSky.value.copy(sky);
  const bg=J.background;J.background=sky;
  u.uReflOn.value=0;u.tReflLo.value=ke;u.tReflHi.value=ke;
  const vis=hide.map(o=>!!(o&&o.visible));hide.forEach(o=>{if(o)o.visible=!1});
  const au=G.shadowMap.autoUpdate;G.shadowMap.autoUpdate=!1;
  pass(lo,.05,cLo);
  if(wt>.01&&!MOB)pass(hi,.665,cHi);
  extra.forEach(f=>f(cam,pass));
  G.shadowMap.autoUpdate=au;CLIP.uClipOn.value=0;G.setRenderTarget(null);
  hide.forEach((o,i)=>{if(o)o.visible=vis[i]});J.background=bg;
  u.tReflLo.value=lo.texture;u.tReflHi.value=hi.texture;u.uReflOn.value=wt>.01?1:0;
}
return{u,render,pre,extra,cam,clip:CLIP,mobile:MOB};
})();
// === Night Lanterns: warm paper glow, carved fire-box windows, soft-capped light falloff, halos ===
(()=>{
const CAP=`
#if NUM_POINT_LIGHTS>0
void getPointLightInfoCap(const in PointLight pl,const in vec3 gp,out IncidentLight light,const in vec3 gn){
  getPointLightInfo(pl,gp,light);
  float nl=dot(gn,light.direction);
  light.color*=smoothstep(-0.05,0.4,nl);
  light.color=2.2*tanh(light.color/2.2);
}
#define getPointLightInfo(a,b,c) getPointLightInfoCap(a,b,c,geometryNormal)
#endif
`;
const seen=new Set();
J.traverse(o=>{const ms=Array.isArray(o.material)?o.material:[o.material];ms.forEach(m=>{
  if(!m||!m.isMeshToonMaterial||seen.has(m))return;seen.add(m);
  const prev=m.onBeforeCompile,prevKey=m.customProgramCacheKey;
  // reflection passes clip in the shader (uniform) instead of renderer.clippingPlanes, so they reuse the same programs
  m.onBeforeCompile=(sh,rd)=>{prev&&prev.call(m,sh,rd);Object.assign(sh.uniforms,WET.clip);
    sh.fragmentShader=sh.fragmentShader.replace("#include <lights_pars_begin>","#include <lights_pars_begin>\n"+CAP)
      .replace("#include <clipping_planes_pars_fragment>","#include <clipping_planes_pars_fragment>\nuniform float uClipOn;uniform float uClipY;")
      .replace("#include <clipping_planes_fragment>","#include <clipping_planes_fragment>\nif(uClipOn>0.5&&((-vViewPosition-viewMatrix[3].xyz)*mat3(viewMatrix)).y<uClipY)discard;")};
  m.customProgramCacheKey=()=>(prevKey?prevKey.call(m):"")+"|plcap-v4";
  m.needsUpdate=!0;
})});
const VS=`varying vec3 vP;varying vec3 vN;varying vec3 vVN;
void main(){vP=position;vN=normal;vVN=normalize(normalMatrix*normal);gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.0);}`;
const COMMON=`uniform float uGlow;uniform float uDay;uniform float uTime;uniform float uPhase;varying vec3 vP;varying vec3 vN;varying vec3 vVN;
float flick(){return 1.0+0.05*sin(uTime*7.3+uPhase)+0.03*sin(uTime*13.1+uPhase*2.1)+0.02*sin(uTime*23.7+uPhase*3.7);}
vec3 amb(){return mix(vec3(0.035,0.04,0.055),vec3(0.62,0.6,0.56),uDay);}
`;
// Stone lantern fire box: rectangular kumiko window front/back, sun (circle) and moon (crescent) openings on the sides
const FS_BOX=COMMON+`
void main(){
  vec3 an=abs(vN);
  vec3 stone=vec3(0.26,0.29,0.27);
  if(an.y>0.5){gl_FragColor=vec4(stone*amb()*(vN.y>0.0?1.0:0.6),1.0);return;}
  vec2 f;float side;
  if(an.x>0.5){f=vec2(vP.z,vP.y);side=sign(vN.x);}else{f=vec2(vP.x,vP.y);side=2.0*sign(vN.z);}
  float aa=0.012,win,edge;
  if(abs(side)>1.5){vec2 d=abs(f)-vec2(0.33,0.35);edge=max(d.x,d.y);win=1.0-smoothstep(-aa,aa,edge);}
  else if(side>0.0){edge=length(f)-0.3;win=1.0-smoothstep(-aa,aa,edge);}
  else{float c2=length(f-vec2(0.12,0.07));edge=max(length(f)-0.3,0.24-c2);win=1.0-smoothstep(-aa,aa,edge);}
  float gx=abs(fract(f.x*3.0+0.5)-0.5)/3.0,gy=abs(fract(f.y*4.0+0.5)-0.5)/4.0;
  float bar=1.0-smoothstep(0.009,0.016,min(gx,gy));
  if(abs(side)<1.5)bar=1.0-smoothstep(0.009,0.016,min(abs(f.x),abs(f.y)));
  vec2 fc=f-vec2(0.0,-0.06);
  float core=exp(-dot(fc,fc)*9.0);
  float fl=flick();
  vec3 paperDay=vec3(0.82,0.76,0.62)*amb();
  vec3 glow=vec3(1.0,0.42,0.11)*(0.55+1.5*core)*uGlow*fl;
  vec3 paper=paperDay*(1.0-uGlow*0.8)+glow;
  paper=mix(paper,paper*0.12+vec3(0.12,0.05,0.02)*uGlow,bar);
  // warm light grazing the stone rim around the opening
  float spill=exp(-max(edge,0.0)*38.0)*uGlow*0.35*fl;
  vec3 st=stone*amb()+vec3(1.0,0.5,0.18)*spill*0.6;
  gl_FragColor=vec4(mix(st,paper,win),1.0);
}`;
// Paper chochin: hot centre where the flame shows through, dimmer orange limb, darker near the caps
const FS_BALL=COMMON+`
void main(){
  float face=clamp(abs(vVN.z),0.0,1.0);
  float core=pow(face,2.6);
  float y=vP.y/0.26;
  float band=1.0-smoothstep(0.55,1.0,abs(y));
  float fl=flick();
  vec3 paperDay=vec3(0.9,0.84,0.7)*amb()*(0.75+0.25*face);
  vec3 glow=mix(vec3(0.8,0.26,0.06),vec3(1.0,0.56,0.2),core)*(0.45+1.25*core)*band*uGlow*fl;
  gl_FragColor=vec4(paperDay*(1.0-uGlow*0.75)+glow,1.0);
}`;
const HALO_VS=`uniform float uSize;varying vec2 vUv;
void main(){vUv=uv;vec4 mv=modelViewMatrix*vec4(0.0,0.0,0.0,1.0);mv.xy+=position.xy*uSize;mv.z+=uSize*0.6;gl_Position=projectionMatrix*mv;}`;
const HALO_FS=`uniform float uI;varying vec2 vUv;
void main(){float d=length(vUv-0.5)*2.0;float a=exp(-d*d*5.0)*(1.0-smoothstep(0.75,1.0,d));gl_FragColor=vec4(vec3(1.0,0.55,0.22)*uI,a);}`;
const haloGeo=new he(1,1);
const lamps=[];
kt.emissive.set("#e07a32");
J.traverse(o=>{
  if(!o.isMesh)return;
  const lt=At.find(l=>l.glowMat===o.material);
  if(!lt)return;
  const ball=!!o.geometry.parameters&&o.geometry.parameters.radius!==void 0;
  const u={uGlow:{value:0},uDay:{value:1},uTime:{value:0},uPhase:{value:lt.phase||0}};
  o.material=new Ae({uniforms:u,vertexShader:VS,fragmentShader:ball?FS_BALL:FS_BOX});
  o.castShadow=!1;
  lt.power=ball?4.6:3.8;
  lt.light.distance=ball?7:6.5;
  lt.light.color.set(ball?"#ff9e52":"#ff9442");
  const hu={uSize:{value:ball?1.2:.95},uI:{value:0}};
  const halo=new $(haloGeo,new Ae({uniforms:hu,vertexShader:HALO_VS,fragmentShader:HALO_FS,transparent:!0,depthWrite:!1,blending:2}));
  halo.position.copy(o.position);halo.frustumCulled=!1;halo.renderOrder=3;halo.castShadow=halo.receiveShadow=!1;
  o.parent.add(halo);
  lamps.push({lt,u,hu,ball});
});
WET.pre.push((t,wt,rn,day)=>{
  for(const l of lamps){
    const g=l.lt.power>0?Math.min(1.2,l.lt.light.intensity/l.lt.power):0;
    l.u.uGlow.value=g;l.u.uDay.value=day;l.u.uTime.value=t;
    l.hu.uI.value=g*(.28+.42*rn);l.hu.uSize.value=(l.ball?1.2:.95)*(1+.55*rn);
  }
});
})();

// === Chozuya Water: cropped planar reflection + analytic refraction (floor/walls), absorption, caustics, ripples ===
(()=>{
if(!wMesh||!wUni)return;
const wp=new k;wMesh.updateMatrixWorld(!0);wMesh.getWorldPosition(wp);
const WY=wp.y,CX=wp.x,CZ=wp.z;
const rt=new Wt(256,256,{type:Vt,generateMipmaps:!1,minFilter:1006,magFilter:1006});
const clipY=WY-.004;
Object.assign(wUni,{uLPos:{value:Array.from({length:8},()=>new k(0,-50,0))},uLCol:{value:Array.from({length:8},()=>new k)},tReflW:{value:ke},uReflRect:{value:new k(0,0,1)},uReflRectH:{value:1},uWProj:{value:new wo},uReflWOn:{value:0}});
const VS=`
uniform float uTime;
varying vec2 vLocal;varying vec3 vWorldPos;varying vec3 vViewPos;
void main(){
  vLocal=vec2(position.x,-position.y);
  vec4 w=modelMatrix*vec4(position,1.0);
  vWorldPos=w.xyz;
  vec4 mv=viewMatrix*w;vViewPos=mv.xyz;
  gl_Position=projectionMatrix*mv;
}`;
const FS=`
uniform float uTime;uniform float uDaylight;uniform float uRipple;uniform float uRain;
uniform vec3 uSunDir;uniform vec3 uSunCol;
uniform vec3 uLPos[8];uniform vec3 uLCol[8];
uniform sampler2D tReflW;uniform vec3 uReflRect;uniform float uReflRectH;uniform mat4 uWProj;uniform float uReflWOn;
varying vec2 vLocal;varying vec3 vWorldPos;varying vec3 vViewPos;
const vec2 HALF=vec2(0.805,0.395);
const vec2 SPOUT=vec2(-0.40,0.0);
const float DEPTH=0.16;
float h1(vec2 p){p=fract(p*vec2(127.1,311.7));p+=dot(p,p+19.19);return fract(p.x*p.y);}
float vn(vec2 p){vec2 i=floor(p),f=fract(p),s=f*f*(3.0-2.0*f);return mix(mix(h1(i),h1(i+vec2(1,0)),s.x),mix(h1(i+vec2(0,1)),h1(i+vec2(1,1)),s.x),s.y);}
float ring(vec2 p,vec2 c,float k,float sp,float dec){float d=length(p-c);return sin(d*k-uTime*sp)*exp(-d*dec)/(1.0+d*5.0);}
float drop(vec2 p,float seed,float rate){
  float ph=uTime*rate+seed;float id=floor(ph);ph=fract(ph);
  vec2 c=(vec2(h1(vec2(id,seed)),h1(vec2(seed,id+3.7)))-0.5)*HALF*1.7;
  float d=length(p-c),r=ph*0.45;
  return sin((d-r)*70.0)*(1.0-smoothstep(0.0,0.06,abs(d-r)))*(1.0-ph)*(1.0-ph);
}
float waveH(vec2 p){
  vec2 s=SPOUT;
  float a=ring(p,s,64.0,9.5,2.4)*0.0105;
  // image sources: the spout's rings bouncing back off the basin walls
  a+=ring(p,vec2(-2.0*HALF.x-s.x,s.y),64.0,9.5,2.4)*0.0045;
  a+=ring(p,vec2(2.0*HALF.x-s.x,s.y),64.0,9.5,2.4)*0.0025;
  a+=ring(p,vec2(s.x,2.0*HALF.y-s.y),64.0,9.5,2.4)*0.0045;
  a+=ring(p,vec2(s.x,-2.0*HALF.y-s.y),64.0,9.5,2.4)*0.0045;
  a+=ring(p,vec2(0.2,0.04),42.0,7.0,1.5)*0.022*uRipple;
  a+=(sin(p.x*9.0+uTime*1.3)+sin(p.y*13.0-uTime*1.1+p.x*3.0))*0.0011;
  a+=(drop(p,0.37,0.21)+drop(p,5.1,0.17))*0.0035;
  a+=(drop(p,2.3,0.9)+drop(p,7.9,1.1))*0.004*uRain;
  return a;
}
void main(){
  vec2 p=vLocal;
  float e=0.006;
  float h0=waveH(p);
  float hx=waveH(p+vec2(e,0.0))-h0,hz=waveH(p+vec2(0.0,e))-h0;
  vec3 N=normalize(vec3(-hx/e*1.6,1.0,-hz/e*1.6));
  vec3 V=isOrthographic?normalize(vec3(viewMatrix[0][2],viewMatrix[1][2],viewMatrix[2][2])):normalize(cameraPosition-vWorldPos);
  float NoV=clamp(dot(N,V),0.0,1.0);
  // light level inside the sheltered basin
  vec3 amb=mix(vec3(0.03,0.035,0.05),vec3(0.55,0.56,0.54),uDaylight)*(1.0-0.25*uRain);
  // --- refraction: trace into the basin and shade what the ray hits
  vec3 T=refract(-V,N,0.75);
  vec3 o=vec3(p.x,0.0,p.y);
  float tF=DEPTH/max(-T.y,1e-3);
  float tX=((T.x>0.0?HALF.x:-HALF.x)-o.x)/(abs(T.x)>1e-4?T.x:1e-4);
  float tZ=((T.z>0.0?HALF.y:-HALF.y)-o.z)/(abs(T.z)>1e-4?T.z:1e-4);
  float tH=min(tF,min(tX,tZ));
  vec3 q=o+T*tH;
  vec3 bed;
  if(tH==tF){
    vec2 b=q.xz;
    float slab=vn(b*6.0)*0.5+vn(b*17.0)*0.3+vn(b*41.0)*0.2;
    bed=vec3(0.15,0.18,0.16)*(0.78+0.4*slab);
    // a few sunk pebbles and petals
    vec2 g=b*11.0,gi=floor(g),gf=fract(g)-0.5;
    float hh=h1(gi);
    vec2 po=(vec2(h1(gi+1.3),h1(gi+7.1))-0.5)*0.5;
    float pr=0.16+0.18*h1(gi+3.3),pd=length(gf-po);
    float peb=step(0.78,hh)*(1.0-smoothstep(pr-0.05,pr,pd));
    vec3 pebC=mix(vec3(0.21,0.21,0.2),vec3(0.3,0.26,0.21),h1(gi+9.0))*(0.85+0.3*(1.0-pd/pr));
    bed=mix(bed,pebC,peb*0.8);
    float pet=step(0.93,h1(gi+21.0))*(1.0-smoothstep(0.12,0.16,length((gf-po*0.6)*vec2(1.0,1.8))));
    bed=mix(bed,vec3(0.62,0.3,0.32),pet*0.85);
    float wd=min(HALF.x-abs(b.x),HALF.y-abs(b.y));
    bed*=0.5+0.5*smoothstep(0.0,0.14,wd);
    // caustics: light focused by the surface curvature above this point
    float ce=0.02;
    float lap=(waveH(b+vec2(ce,0.0))+waveH(b-vec2(ce,0.0))+waveH(b+vec2(0.0,ce))+waveH(b-vec2(0.0,ce))-4.0*waveH(b))/(ce*ce);
    vec2 c1=b*9.0+vec2(uTime*0.35,-uTime*0.27),c2=b*12.5-vec2(uTime*0.3,uTime*0.4);
    float cpat=pow(clamp(0.5+0.5*sin(c1.x+sin(c1.y))*cos(c2.y+sin(c2.x)),0.0,1.0),4.0);
    float caust=clamp(-lap*0.06,0.0,2.0)+cpat*0.7;
    bed=bed*amb*(1.0+caust*0.9*uDaylight*(1.0-0.6*uRain))+uSunCol*bed*caust*0.25*uDaylight*(1.0-0.6*uRain);
  }else{
    float dy=-q.y/DEPTH;
    vec3 wall=vec3(0.26,0.3,0.27)*(1.0-0.45*dy);
    wall=mix(wall,vec3(0.16,0.24,0.14),(1.0-smoothstep(0.0,0.25,dy))*0.55);
    bed=wall*amb;
  }
  // clear water: gentle absorption, faint aqua in-scatter
  vec3 trans=exp(-vec3(1.1,0.32,0.24)*tH*2.2);
  vec3 refr=bed*trans+vec3(0.02,0.07,0.075)*amb*(1.0-trans.g)*3.0;
  // --- reflection from the cropped planar pass
  vec4 cp=uWProj*vec4(vViewPos,1.0);
  vec2 suv=cp.xy/cp.w*0.5+0.5;
  suv+=(uWProj*(viewMatrix*vec4(N.x,0.0,N.z,0.0))).xy*0.5*0.22;
  vec2 ruv=vec2(1.0-suv.x,suv.y);
  vec2 cuv=(ruv-uReflRect.xy)/vec2(uReflRect.z,uReflRectH);
  vec3 refl=uReflWOn>0.5?texture2D(tReflW,clamp(cuv,0.002,0.998)).rgb:amb*0.6;
  float F=0.02+0.98*pow(1.0-NoV,5.0);
  F=clamp(F*1.35+0.03,0.0,1.0);
  vec3 col=mix(refr,refl,F);
  // sun glint where it reaches under the roof
  vec3 H=normalize(normalize(uSunDir)+V);
  col+=uSunCol*pow(max(dot(N,H),0.0),420.0)*uDaylight*0.6*(1.0-uRain);
  // warm glints of nearby lanterns on the moving surface
  for(int i=0;i<8;i++){vec3 lv=uLPos[i]-vWorldPos;float d=length(lv);vec3 L=lv/d;vec3 Hl=normalize(L+V);
    col+=uLCol[i]*pow(max(dot(N,Hl),0.0),260.0)*2.5/(1.0+d*d*0.6);}
  // aerated water and bubbles under the spout
  float ds=length(p-SPOUT);
  float foam=(1.0-smoothstep(0.015,0.07,ds))*(0.55+0.45*vn(p*70.0+vec2(uTime*6.0,-uTime*5.0)));
  vec2 bg=(p-SPOUT)*vec2(26.0,26.0);
  float bub=(1.0-smoothstep(0.05,0.11,length(fract(bg+vec2(uTime*0.7,uTime*0.4))-0.5)))*step(0.82,h1(floor(bg+vec2(uTime*0.7,uTime*0.4))))*(1.0-smoothstep(0.06,0.2,ds));
  col=mix(col,vec3(0.9,0.95,0.97)*amb*1.4,clamp(foam*0.75+bub*0.5,0.0,0.85));
  // meniscus where water meets stone
  float wd2=min(HALF.x-abs(p.x),HALF.y-abs(p.y));
  col=mix(col*0.82,col,smoothstep(0.0,0.012,wd2))+refl*0.18*(1.0-smoothstep(0.0,0.008,wd2));
  gl_FragColor=vec4(col,1.0);
}`;
wMesh.material=new Ae({uniforms:wUni,vertexShader:VS,fragmentShader:FS});
// falling spout water: lit by ambient instead of glowing at night
J.traverse(o=>{const m=o.material;if(o.isMesh&&m&&m.fragmentShader&&m.fragmentShader.includes("float flow=sin(vUv.y*22.0")){
  m.fragmentShader=`uniform float uTime;uniform float uDaylight;varying vec2 vUv;
void main(){
  float flow=sin(vUv.y*22.0+uTime*16.0)*0.5+0.5;
  float streak=sin(vUv.x*18.8+sin(vUv.y*10.0+uTime*12.0))*0.5+0.5;
  vec3 amb=mix(vec3(0.05,0.06,0.08),vec3(0.62,0.7,0.74),uDaylight);
  vec3 col=mix(amb*vec3(0.75,0.92,1.0),amb*1.5,flow*streak*0.6);
  gl_FragColor=vec4(col,0.45+0.25*flow*streak);
}`;m.needsUpdate=!0;}});
const lw=new k;
WET.pre.push(()=>{let i=0;
  for(const lt of At){if(i>=8)break;lt.light.getWorldPosition(lw);if(lw.distanceTo(wp)>7)continue;
    wUni.uLPos.value[i].copy(lw);wUni.uLCol.value[i].set(lt.light.color.r,lt.light.color.g,lt.light.color.b).multiplyScalar(lt.light.intensity*.12);i++;}
  for(;i<8;i++)wUni.uLCol.value[i].set(0,0,0);
});
const sz=new B,v=new k;
WET.extra.push((cam)=>{
  let x0=1,x1=0,y0=1,y1=0;
  for(const sx of[-.86,.86])for(const sz_ of[-.46,.46]){v.set(CX+sx,WY,CZ+sz_).project(te);const ux=v.x*.5+.5,uy=v.y*.5+.5;x0=Math.min(x0,ux);x1=Math.max(x1,ux);y0=Math.min(y0,uy);y1=Math.max(y1,uy)}
  const m=.03;x0=Math.max(0,x0-m);x1=Math.min(1,x1+m);y0=Math.max(0,y0-m);y1=Math.min(1,y1+m);
  if(x1<=x0||y1<=y0){wUni.uReflWOn.value=0;return}
  const rx0=1-x1,rw=x1-x0,rh=y1-y0;
  G.getDrawingBufferSize(sz);
  const cap=WET.mobile?384:1024,pw=Math.max(64,Math.min(cap,Math.round(rw*sz.x))),ph=Math.max(64,Math.min(cap,Math.round(rh*sz.y)));
  if(Math.abs(rt.width-pw)>8||Math.abs(rt.height-ph)>8)rt.setSize(pw,ph);
  cam.copy(te);cam.position.y=2*WY-te.position.y;cam.up.set(0,-1,0);cam.lookAt(Y.target.x,2*WY-Y.target.y,Y.target.z);
  cam.setViewOffset(1,1,rx0,1-y1,rw,rh);cam.updateMatrixWorld(!0);
  G.setRenderTarget(rt);WET.clip.uClipOn.value=1;WET.clip.uClipY.value=clipY;G.render(J,cam);WET.clip.uClipOn.value=0;
  cam.clearViewOffset();
  wUni.tReflW.value=rt.texture;wUni.uReflRect.value.set(rx0,y0,rw);wUni.uReflRectH.value=rh;wUni.uWProj.value.copy(te.projectionMatrix);wUni.uReflWOn.value=1;
});
})();

// === Rain off the eaves =========================================================================================
// Each tile channel pours its water off the lip. How much depends on the rain and on how much roof feeds the channel,
// and it pulses as the sheet of water on the tiles surges. Enough water makes a continuous thread that leaves the lip
// with a little outward speed, falls on a ballistic arc, sways with the wind, and breaks up into drops partway down
// (Plateau–Rayleigh: necks grow until the thread pinches into beads). A trickle instead swells into single drops that
// let go at an irregular rhythm. Every feature is tied to the moment its water left the lip, so it rides down at the
// correct, accelerating speed. Where water lands it throws up spray and churns rings.
// Water is shaded as a clear thread: the body lets the background through, the rim reflects the surroundings
// (darker than open sky, lighter than a shaded wall), and a fine highlight runs down the lit side. At night only
// nearby lantern light makes it visible.
(()=>{
const D=me.D||[];
const U={uT:{value:0},uWeatherSeed:{value:Math.random()*512},uRate:{value:0},uDay:{value:1},uPx:{value:.03},uSky:WET.u.uWetSky,uLP:{value:Array.from({length:8},()=>new k(0,-50,0))},uLC:{value:Array.from({length:8},()=>new k)}};
const COMMON=`uniform float uT;uniform float uWeatherSeed;uniform float uRate;uniform float uDay;uniform float uPx;uniform vec3 uSky;uniform vec3 uLP[8];uniform vec3 uLC[8];
float h1(float n){return fract(sin(n)*43758.5453);}
float h2(float a,float b){return fract(sin(a*127.1+b*311.7)*43758.5453);}
float vn1(float x){float i=floor(x),f=fract(x);f=f*f*(3.0-2.0*f);return mix(h1(i),h1(i+1.0),f);}
// No lip has a permanent drip/stream identity. Slow accumulation, local surges and
// courtyard-wide weather modulate each other, with a fresh weather history per visit.
// Evaluate at RELEASE time so a change propagates downwards with the falling water.
float flowAt(float tau,float sd,float fl){
  float t=tau+uWeatherSeed;
  float weather=vn1(t*0.073+17.0);
  float wander=vn1(t*0.047+sd*61.0);
  float sheet=vn1(t*0.31+sd*83.0+wander*2.4);
  float flutter=vn1(t*1.13+sd*137.0);
  float catchment=mix(0.85,1.15,clamp(fl/1.15,0.0,1.0));
  return uRate*catchment*(0.06+1.85*pow(sheet,1.7))*(0.72+0.6*weather)*(0.85+0.3*flutter);
}
float streamK(float q){return smoothstep(0.65,1.05,q);}
// Aperiodic gusts are shared across the courtyard, with a small spatial delay.
vec2 gustAt(float tau,vec3 p){float t=tau+uWeatherSeed;float g=vn1(t*0.27+p.x*0.035+p.z*0.027);return vec2(vn1(t*0.19+12.0)-0.5,vn1(t*0.23+38.0)-0.5)*(0.4+1.2*g);}
// drip mode: per-lip rhythm (busy lips often, quiet lips rarely), jittered so neighbours never march in step
// Keep release times stable as rain ramps up/down; vary the active drops instead.
float dInt(float sd,float rate){return mix(0.22,0.85,h1(sd*7.13));}
float dRel(float kk,float sd,float P){return kk*P+(h2(kk,sd)-0.5)*0.7*P;}
float dripFlow(float kk,float sd,float fl){return flowAt(dRel(kk,sd,dInt(sd,uRate))-sd*23.0,sd,fl);}
float dripAmount(float kk,float sd,float fl){float q=dripFlow(kk,sd,fl);return step(h2(kk+19.0,sd),clamp(q*1.5,0.0,0.95))*(1.0-streamK(q));}
vec3 glowAt(vec3 p){vec3 g=vec3(0.0);for(int i=0;i<8;i++){vec3 d=uLP[i]-p;g+=uLC[i]/(1.0+dot(d,d)*1.8);}return g/(1.0+0.8*max(max(g.r,g.g),g.b));}
vec4 waterCol(float cov,float rim,float hi,vec3 p){
  vec3 g=glowAt(p);float gl=dot(g,vec3(0.3,0.59,0.11));
  vec3 refD=mix(uSky,vec3(0.24,0.25,0.27),0.42),hiD=vec3(0.93,0.96,1.0);
  vec3 refN=vec3(0.025,0.035,0.055)+g*0.35,hiN=vec3(0.07,0.09,0.13)+g*0.9;
  vec3 ref=mix(refN,refD,uDay),hc=mix(hiN,hiD,uDay);
  float aR=cov*(0.1+0.32*rim)*mix(0.7,1.0,uDay);
  float aH=hi*mix(0.16+min(0.55,gl*2.2),0.62,uDay);
  float a=clamp(aR+aH,0.0,0.8);
  return vec4(mix(ref,hc,aH/max(a,1e-4)),a);
}`;
const PATH=`attribute vec3 aLip;attribute vec2 aOut;attribute float aV0;attribute float aTf;attribute float aSeed;attribute float aFlow;
// A breeze sampled at release travels with the water, rather than moving the whole column at once.
vec3 pathAt(float a){vec2 w=gustAt(uT-a,aLip)*0.06*a*a;return aLip+vec3(aOut.x,0.0,aOut.y)*aV0*a+vec3(w.x,-4.9*a*a,w.y);}
vec3 camBack(vec3 p){return isOrthographic?normalize(vec3(viewMatrix[0][2],viewMatrix[1][2],viewMatrix[2][2])):normalize(cameraPosition-p);}`;
if(D.length){
  const n=D.length,NS=48,VS=2*(NS+1);
  const mk=(nv)=>({pos:new Float32Array(n*nv*3),lip:new Float32Array(n*nv*3),out:new Float32Array(n*nv*2),v0:new Float32Array(n*nv),tf:new Float32Array(n*nv),sd:new Float32Array(n*nv),fl:new Float32Array(n*nv)});
  const S=mk(VS),B=mk(4),Gd=mk(4),Is=[],Iq=[];
  D.forEach(([x,y,zz,ly,ox,oz,v0,tf,fl],i)=>{
    const sd=((Math.sin(i*12.9898+x*78.233+zz*37.719)*43758.5453)%1+1)%1;
    const put=(A,vi,px,py)=>{A.pos.set([px,py,0],vi*3);A.lip.set([x,y,zz],vi*3);A.out.set([ox,oz],vi*2);A.v0[vi]=v0;A.tf[vi]=tf;A.sd[vi]=sd;A.fl[vi]=fl};
    for(let s=0;s<=NS;s++){put(S,i*VS+s*2,-1,s/NS);put(S,i*VS+s*2+1,1,s/NS);if(s<NS){const b=i*VS+s*2;Is.push(b,b+1,b+2,b+2,b+1,b+3)}}
    [[-1,0],[1,0],[-1,1],[1,1]].forEach(([u,w],q)=>put(B,i*4+q,u,w));
    [[-1,-1],[1,-1],[-1,1],[1,1]].forEach(([u,w],q)=>put(Gd,i*4+q,u,w));
    Iq.push(i*4,i*4+1,i*4+2,i*4+2,i*4+1,i*4+3);
  });
  const geo=(A,I)=>{const g=new Re;g.setAttribute("position",new Ce(A.pos,3));g.setAttribute("aLip",new Ce(A.lip,3));g.setAttribute("aOut",new Ce(A.out,2));
    g.setAttribute("aV0",new Ce(A.v0,1));g.setAttribute("aTf",new Ce(A.tf,1));g.setAttribute("aSeed",new Ce(A.sd,1));g.setAttribute("aFlow",new Ce(A.fl,1));g.setIndex(I);return g};
  const mat=(vs,fs,extra)=>new Ae({uniforms:U,transparent:!0,depthWrite:!1,side:K,vertexShader:COMMON+"\n"+PATH+"\n"+vs,fragmentShader:COMMON+"\n"+fs,...(extra||{})});
  const add=(g,m)=>{const o=new $(g,m);o.frustumCulled=!1;o.castShadow=o.receiveShadow=!1;o.renderOrder=2;o.visible=!1;J.add(o);return o};

  // --- the falling water: a camera-facing ribbon along each lip's ballistic path
  const stream=add(geo(S,Is),mat(`varying float vA;varying float vX;varying float vSeed;varying float vFlow;varying float vTf;varying vec3 vWp;
void main(){
  float a=position.y*aTf;vA=a;vSeed=aSeed;vFlow=aFlow;vTf=aTf;
  vec3 p=pathAt(a),T=normalize(pathAt(a+0.01)-p),V=camBack(p),Sd=cross(T,V);float sl=length(Sd);Sd=sl>1e-4?Sd/sl:vec3(1.0,0.0,0.0);
  vX=position.x*max(0.03,uPx*4.0);vWp=p+Sd*vX;
  gl_Position=projectionMatrix*viewMatrix*vec4(vWp,1.0);}`,
`varying float vA;varying float vX;varying float vSeed;varying float vFlow;varying float vTf;varying vec3 vWp;
void main(){
  if(uRate<=0.002)discard;
  float a=vA,dx=vX,aa=max(fwidth(vX)*0.65,0.0005),tau=uT-a;
  float Q=flowAt(tau,vSeed,vFlow),cf=streamK(Q),cov=0.0,rim=0.0,hi=0.0;
  if(cf>0.001){
    float r0=0.0032+0.0062*sqrt(min(Q,1.4)),r=r0*pow(1.0+a*7.0,-0.32);
    // the thread stays whole for a while, wobbling slightly, then pinches into drops of uneven size and spacing,
    // with the odd small satellite droplet between them
    float ab=0.055+0.13*min(Q,1.2)*(0.6+0.8*h1(vSeed*9.1));
    float sep=smoothstep(ab,ab+0.07,a);
    float cT=0.045+0.045*h1(vSeed*3.3);
    float ph=tau/cT+h1(vSeed*5.7)*7.0,ci=floor(ph),fb=fract(ph);
    float sz=0.55+0.9*h2(ci,vSeed+1.0),c0=0.5+(h2(ci,vSeed)-0.5)*0.45,hl=0.16*sz;
    float drop=(1.0-smoothstep(hl*0.65,hl,abs(fb-c0)))*step(0.12,h2(ci,vSeed+3.0));
    float sat=step(0.62,h2(ci,vSeed+2.0))*(1.0-smoothstep(0.02,0.045,abs(fb-fract(c0+0.5))));
    float neck=1.0+0.18*sin(tau*90.0+vSeed*20.0)*smoothstep(ab-0.06,ab,a)*(1.0-sep);
    float prof=mix(neck,max(drop*1.3*sqrt(sz),sat*0.5),sep);
    float rr=r*prof;
    float off=0.0035*sin(tau*26.0+vSeed*13.0)*smoothstep(0.0,0.08,a)+(h2(ci,vSeed+4.0)-0.5)*0.04*max(0.0,a-ab);
    float d=abs(dx-off),rp=max(rr,uPx*0.5),ink=rr/rp;
    float c=(1.0-smoothstep(rp-aa,rp+aa,d))*ink*cf*step(0.02,prof);
    float thin=1.0-smoothstep(1.2,2.5,rp/uPx);
    float gl=0.4+0.6*vn1(tau*48.0+vSeed*31.0);
    float xn=clamp(d/rp,0.0,1.0);
    cov+=c;rim+=c*mix(smoothstep(0.35,1.0,xn),0.55,thin);
    hi+=c*mix((1.0-smoothstep(0.1,0.28,abs((dx-off)/rp+0.35)))*gl,0.35*gl,thin);
    if(a<0.05){float lr=max(r0*1.5,uPx*0.6),lc=(1.0-smoothstep(lr-aa,lr+aa,abs(dx)))*(1.0-a/0.05)*cf;cov+=lc*0.5;hi+=lc*0.25;}
  }
  {
    float s=4.9*a*a,Pi=dInt(vSeed,uRate),tt=uT+vSeed*23.0,k0=floor(tt/Pi)+1.0;
    for(int j=0;j<10;j++){
      float kk=k0-float(j),af=tt-dRel(kk,vSeed,Pi);
      if(af<0.0||af>vTf+0.02)continue;
      float y=4.9*af*af,Ls=0.008+min(0.06,9.8*af*0.014),ds=s-y;
      float rd=0.008+0.005*h2(kk,vSeed+8.0),re=max(rd,uPx*0.55),ink=rd/re;
      // Reject distant fragments before sampling the release-time weather history.
      if(ds>re*2.0+aa*2.0||ds<-Ls-re*2.0-aa*2.0)continue;
      float w=dripAmount(kk,vSeed,vFlow);if(w<0.001)continue;
      // Signed distance on BOTH sides: clamping ds to zero painted a line all the way back to the roof.
      float head=1.0-smoothstep(re*0.6,re+aa,length(vec2(dx,ds*0.85)));
      float tp=clamp(-ds/Ls,0.0,1.0),tw=mix(re*0.8,re*0.3,tp);
      float tail=step(ds,0.0)*step(-Ls,ds)*(1.0-smoothstep(tw*0.5,tw+aa,abs(dx)))*(1.0-tp)*0.3;
      float c=max(head,tail)*ink*w;
      cov+=c;rim+=c*0.6;
      hi+=(1.0-smoothstep(re*0.22,re*0.22+aa,length(vec2(dx+re*0.3,ds-re*0.3))))*ink*w*0.9*step(1.2,re/uPx)+c*0.25*step(re/uPx,1.2);
    }
    float kn=k0;if(dRel(kn,vSeed,Pi)<tt)kn+=1.0;                     // the next drop swelling at the lip
    float w=dripAmount(kn,vSeed,vFlow);
    if(w>0.001){
      float gr=1.0-clamp((dRel(kn,vSeed,Pi)-tt)/(0.6*Pi),0.0,1.0);
      if(gr>0.0){float br=0.003+0.0075*gr*gr,bre=max(br,uPx*0.5);
        float c=(1.0-smoothstep(bre*0.6,bre+aa,length(vec2(dx,(s-br)*0.85))))*min(1.0,br/bre*1.5+0.3)*0.9*w;
        cov+=c;rim+=c*0.6;hi+=(1.0-smoothstep(bre*0.2,bre*0.2+aa,length(vec2(dx+bre*0.3,s-br*0.7))))*0.8*w*step(1.0,bre/uPx);}
    }
  }
  cov=clamp(cov,0.0,1.0);if(cov<0.01)discard;
  gl_FragColor=waterCol(cov,clamp(rim/cov,0.0,1.0),clamp(hi,0.0,1.0),vWp);
}`));

  // --- spray thrown up where a thread hits: a camera-facing card standing on the landing point
  const spray=add(geo(B,Iq),mat(`varying vec2 vQ;varying float vSeed;varying float vFlow;varying float vTf;varying vec3 vWp;
void main(){
  vSeed=aSeed;vFlow=aFlow;vTf=aTf;vec3 c=pathAt(aTf),V=camBack(c),R=normalize(cross(vec3(0.0,1.0,0.0),V)+vec3(1e-5,0.0,0.0));
  vQ=vec2(position.x*0.22,position.y*0.24);vWp=c+R*vQ.x+vec3(0.0,vQ.y,0.0);
  gl_Position=projectionMatrix*viewMatrix*vec4(vWp,1.0);}`,
`varying vec2 vQ;varying float vSeed;varying float vFlow;varying float vTf;varying vec3 vWp;
void main(){
  if(uRate<=0.002)discard;
  float Q=flowAt(uT-vTf,vSeed,vFlow),cf=streamK(Q),Sp=cf*smoothstep(0.25,0.9,Q),aa=uPx*0.6,cov=0.0,hi=0.0;
  float Pi=dInt(vSeed,uRate),tt=uT+vSeed*23.0,kb=floor((tt-vTf)/Pi)+1.0;
  for(int j=0;j<4;j++){
    float kk=kb-float(j),age=tt-vTf-dRel(kk,vSeed,Pi);
    if(age>=0.0&&age<0.16)Sp+=dripAmount(kk,vSeed,vFlow)*0.6*pow(1.0-age/0.16,2.0);
  }
  if(Sp<0.01)discard;
  float P=0.012,e0=floor(uT/P);
  for(int j=0;j<18;j++){
    float e=e0-float(j),age=uT-e*P-h2(e,vSeed)*P;
    if(age<0.0||age>0.22)continue;
    if(h2(e,vSeed+7.0)>Sp*0.85)continue;
    float vy=0.35+1.1*h2(e,vSeed+5.0)*h2(e,vSeed+8.0),vx=(h2(e,vSeed+6.0)-0.5)*1.5;
    vec2 dp=vec2(vx*age,vy*age-4.9*age*age);
    if(dp.y<-0.004)continue;
    float rd=0.0028+0.003*h2(e,vSeed+9.0),re=max(rd,uPx*0.5);
    float c=(1.0-smoothstep(re-aa,re+aa,length(vQ-dp)))*(rd/re)*(1.0-age/0.22);
    cov+=c;hi+=c*0.5;
  }
  cov+=(1.0-smoothstep(0.0,1.0,length(vQ/vec2(0.13,0.07))))*0.12*Sp;   // fine mist hanging over the impact
  cov=clamp(cov,0.0,1.0);if(cov<0.01)discard;
  gl_FragColor=waterCol(cov,0.7,clamp(hi,0.0,1.0),vWp);
}`));

  // --- the landing surface: churned rings under a thread, a ring and a small crown for each separate drop
  const ground=add(geo(Gd,Iq),mat(`varying vec2 vQ;varying float vSeed;varying float vFlow;varying float vTf;varying vec3 vWp;
void main(){
  vSeed=aSeed;vFlow=aFlow;vTf=aTf;vQ=position.xy*0.32;vWp=pathAt(aTf)+vec3(vQ.x,0.012,vQ.y);
  gl_Position=projectionMatrix*viewMatrix*vec4(vWp,1.0);}`,
`varying vec2 vQ;varying float vSeed;varying float vFlow;varying float vTf;varying vec3 vWp;
void main(){
  if(uRate<=0.002)discard;
  float d=length(vQ),aa=uPx,cov=0.0,hi=0.0;
  float Q=flowAt(uT-vTf,vSeed,vFlow),cf=streamK(Q);
  if(cf>0.01){
    float RP=0.11,e0=floor(uT/RP);
    for(int j=0;j<4;j++){
      float e=e0-float(j),age=uT-e*RP-h2(e,vSeed+2.0)*RP*0.6;
      if(age<0.0||age>0.4)continue;
      vec2 o=(vec2(h2(e,vSeed+3.0),h2(e,vSeed+4.0))-0.5)*0.03;
      float R=0.02+0.13*sqrt(age/0.4),wd=max(0.007,aa),f=(1.0-age/0.4)*(1.0-age/0.4);
      cov+=(1.0-smoothstep(0.0,wd,abs(length(vQ-o)-R)))*f*0.7*cf;
    }
    float boil=(1.0-smoothstep(0.012,0.035,d))*(0.55+0.45*vn1(uT*24.0+vSeed*9.0));
    cov+=boil*cf*0.6;hi+=boil*cf*0.3;
  }
  {
    float Pi=dInt(vSeed,uRate),tt=uT+vSeed*23.0,kb=floor((tt-vTf)/Pi)+1.0;
    for(int j=0;j<4;j++){
      float kk=kb-float(j),tau=tt-vTf-dRel(kk,vSeed,Pi);
      if(tau<0.0||tau>0.6)continue;
      float w=dripAmount(kk,vSeed,vFlow);if(w<0.001)continue;
      vec2 off=vec2(0.0); // Same ballistic landing point as the visible drop.
      vec2 q=vQ-off;float dq=length(q);
      float R=0.012+0.2*sqrt(tau/0.6),wd=max(0.008,aa*1.1),f=(1.0-tau/0.6)*(1.0-tau/0.6)*sqrt(0.008/wd);
      cov+=(1.0-smoothstep(0.0,wd,abs(dq-R)))*f*0.85*w;
      if(tau<0.09){float ang=atan(q.y,q.x),rr=0.015+tau*0.7,re=max(0.006,aa*0.7);
        float cd=length(vec2((fract(ang*6.0/6.2831853+h2(kk,vSeed+4.0))-0.5)*rr*1.05,dq-rr));
        float cr=(1.0-smoothstep(re,re+aa,cd))*(1.0-tau/0.09)*w;cov+=cr;hi+=cr*0.6;}
    }
  }
  cov=clamp(cov,0.0,1.0);if(cov<0.01)discard;
  gl_FragColor=waterCol(cov,0.6,clamp(hi,0.0,1.0),vWp);
}`,{polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-2}));

  WET.pre.push((t,wt,rn,day)=>{
    // Roof storage fills gradually and drains after rain, independently of slow courtyard drying.
    const dt=U.uT.value?Math.min(.1,Math.max(0,t-U.uT.value)):0;
    const target=Math.min(1,rn*1.15);
    const rate=ne.damp(U.uRate.value,target,target>U.uRate.value?.65:.3,dt);
    U.uRate.value=rate;U.uT.value=t;U.uDay.value=day;
    let li=0;const lv=new k,addL=(L,s)=>{if(li>=8||!L||L.intensity<=0)return;L.getWorldPosition(lv);U.uLP.value[li].copy(lv);U.uLC.value[li].set(L.color.r,L.color.g,L.color.b).multiplyScalar(L.intensity*s);li++};
    At.forEach(lt=>addL(lt.light,.17));addL(ot,.05);
    for(;li<8;li++)U.uLC.value[li].set(0,0,0);
    U.uPx.value=(te.right-te.left)/te.zoom/Math.max(1,G.domElement.width);
    stream.visible=spray.visible=ground.visible=rate>.005;
  });
}
// tiles: darken and turn glossy when wet; while it rains, water sheens down a few tile channels — low-contrast,
// tinted by the sky, never white ticks
const RU={uRoofWet:WET.u.uWet,uRoofRain:WET.u.uRainI,uRoofT:WET.u.uWetTime,uRoofSky:WET.u.uWetSky};
const ROOF=`{
  vec3 rWp=(-vViewPosition-viewMatrix[3].xyz)*mat3(viewMatrix);
  vec3 rN=normalize(normal*mat3(viewMatrix));
  float rFw=length(fwidth(rWp));
  if(uRoofWet>0.002&&rN.y>0.15){
    float slope=smoothstep(0.15,0.35,rN.y)*(1.0-smoothstep(0.93,0.99,rN.y));
    outgoingLight*=mix(1.0,0.82,uRoofWet*smoothstep(0.1,0.3,rN.y));
    vec3 dn=normalize(vec3(0.0,-1.0,0.0)+rN*rN.y),ax=normalize(cross(rN,dn));
    float u=dot(rWp,ax)/0.24,v=dot(rWp,dn),lane=floor(u),lf=fract(u);
    float lh=fract(sin(lane*12.9898)*43758.5453),lw=fract(sin(lane*78.233)*43758.5453);
    float th=(1.0-smoothstep(0.04,0.14,abs(lf-0.5-(lh-0.5)*0.25)))*step(0.6,lh);
    float pu=fract(v*(0.35+0.3*lw)-uRoofT*(0.5+0.5*lh)+lh*7.0);
    float seg=smoothstep(0.0,0.12,pu)*(1.0-smoothstep(0.12,0.75,pu));
    float lod=1.0-smoothstep(0.012,0.03,rFw);
    float flow=th*seg*slope*uRoofRain*lod;
    outgoingLight+=uRoofSky*(flow*0.16+uRoofRain*slope*0.03);
  }
}`;
[r.roof,r.tile].forEach(m=>{const prev=m.onBeforeCompile,pk=m.customProgramCacheKey;
  m.onBeforeCompile=(sh,rd)=>{prev&&prev.call(m,sh,rd);Object.assign(sh.uniforms,RU);
    sh.fragmentShader=sh.fragmentShader.replace("#include <clipping_planes_pars_fragment>","#include <clipping_planes_pars_fragment>\nuniform float uRoofWet;uniform float uRoofRain;uniform float uRoofT;uniform vec3 uRoofSky;").replace("#include <opaque_fragment>",ROOF+"\n#include <opaque_fragment>")};
  m.customProgramCacheKey=()=>(pk?pk.call(m):"")+"|roofflow-v2";m.needsUpdate=!0;});
})();

const Ve=cs(J,te),Ut=fs(J,te);const ot=new Mt("#ffc57b",2.4,5.5,2);ot.position.set(0,3.35,-.78);ot.castShadow=!0;ot.shadow.mapSize.set(1024,1024);ot.shadow.bias=-.002;ot.shadow.normalBias=.04;ot.shadow.radius=2.5;J.add(ot);const us=ds({scene:J,sun:se,hemisphere:jt,fill:tt,warmLight:ot,renderer:G,reimu:Ve,suika:Ut}),ge=new Ko(G);ge.addPass(new Zo(J,te));const Gt=new $e({uniforms:{tDiffuse:{value:null},resolution:{value:new B(window.innerWidth,window.innerHeight)},uBloom:{value:.24}},vertexShader:"varying vec2 vUv; void main(){vUv=uv; gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.0);}",fragmentShader:`uniform sampler2D tDiffuse; uniform vec2 resolution; uniform float uBloom; varying vec2 vUv;
  float luma(vec3 c){return dot(c,vec3(0.299,0.587,0.114));}
  vec3 eTap(vec2 uv){
    vec3 s=min(texture2D(tDiffuse,uv).rgb,vec3(1.65));
    float lum=luma(s);
    float warm=max(0.0,s.r-s.b*0.80)*0.40;
    float w=smoothstep(0.95,1.60,lum+warm);
    return s*w;
  }
  void main(){vec2 p=1.0/resolution; vec4 c=texture2D(tDiffuse,vUv);
    if(uBloom>0.005){
      vec2 r1=p*2.6, r2=p*6.0, r3=p*11.5;
      vec3 b1=eTap(vUv+vec2(r1.x,r1.y))+eTap(vUv+vec2(-r1.x,r1.y))+eTap(vUv+vec2(r1.x,-r1.y))+eTap(vUv+vec2(-r1.x,-r1.y));
      vec3 b2=eTap(vUv+vec2(r2.x,0.))+eTap(vUv+vec2(-r2.x,0.))+eTap(vUv+vec2(0.,r2.y))+eTap(vUv+vec2(0.,-r2.y));
      vec3 b3=eTap(vUv+vec2(r3.x,r3.y)*0.7)+eTap(vUv+vec2(-r3.x,r3.y)*0.7)+eTap(vUv+vec2(r3.x,-r3.y)*0.7)+eTap(vUv+vec2(-r3.x,-r3.y)*0.7);
      vec3 bloom=(b1*0.09+b2*0.065+b3*0.035)*vec3(1.02,0.82,0.52);
      c.rgb+=bloom*uBloom;
    }
    float a=luma(texture2D(tDiffuse,vUv+vec2(p.x,0.)).rgb);
    float b=luma(texture2D(tDiffuse,vUv-vec2(p.x,0.)).rgb);
    float d=luma(texture2D(tDiffuse,vUv+vec2(0.,p.y)).rgb);
    float e=luma(texture2D(tDiffuse,vUv-vec2(0.,p.y)).rgb);
    float edge=smoothstep(0.12,0.48,abs(a-b)+abs(d-e));
    c.rgb=mix(c.rgb,c.rgb*vec3(0.70,0.69,0.72),edge*0.34);
    float grain=fract(sin(dot(gl_FragCoord.xy,vec2(12.9898,78.233)))*43758.5453)-0.5;
    c.rgb+=grain*0.004;gl_FragColor=c;}`});ge.addPass(Gt);ge.addPass(new Xo);const Ft=new $e(Wo);ge.addPass(Ft);function Bt(){const n=window.innerWidth,e=window.innerHeight,t=n/e,i=Math.max(14.4,16.5/t);te.left=-i*t,te.right=i*t,te.top=i,te.bottom=-i,te.updateProjectionMatrix(),G.setSize(n,e),ge.setSize(n,e);const a=G.getPixelRatio();Gt.uniforms.resolution.value.set(n*a,e*a),Ft.uniforms.resolution.value.set(1/(n*a),1/(e*a));const asp=n/e,maxRt=1024;let rw,rh;asp>=1?(rw=Math.min(n,maxRt),rh=Math.round(rw/asp)):(rh=Math.min(e,maxRt),rw=Math.round(rh*asp));reflTarget.setSize(rw,rh);}window.addEventListener("resize",Bt);Bt();const He=window.matchMedia("(prefers-reduced-motion: reduce)");let ut=0,ze=performance.now();function st(n){const e=Math.min((n-ze)/1e3,.25);ze=n,ut+=e*(He.matches?.45:1);const t=ut,i=He.matches?.4:1,rn=us.rain||0,wt=us.wet||0,a=(.8+.2*Math.sin(t*.43))*(1+rn*.35);Gt.uniforms.uBloom.value=(1-us.daylight)*.24;window.__bellBoost=Math.max(0,(window.__bellBoost||0)-e*.65);window.__emaBoost=Math.max(0,(window.__emaBoost||0)-e*.75);window.__rippleBoost=Math.max(0,(window.__rippleBoost||0)-e*.75);if(window.__camAnim){const ca=window.__camAnim;Y.target.lerp(ca.target,Math.min(1,e*4.2));te.position.lerp(ca.pos,Math.min(1,e*4.2));te.zoom=ne.damp(te.zoom,ca.zoom,4.2,e);te.updateProjectionMatrix();if(Y.target.distanceToSquared(ca.target)<.002&& Math.abs(te.zoom-ca.zoom)<.005)window.__camAnim=null;}for(const o of W)if(o.type==="sway"){let bz=0,bx=0;if(o.amount===.08&&window.__bellBoost>0){bz=Math.sin(t*12.5)*.26*window.__bellBoost;bx=Math.cos(t*10)*.14*window.__bellBoost;}else if((o.amount===.17||o.amount===.24)&&window.__emaBoost>0){bz=Math.sin(t*11+o.phase*2)*.32*window.__emaBoost;bx=Math.cos(t*9+o.phase)*.22*window.__emaBoost;}if(o.isLantern){const wL=1+rn*1.35,gust=Math.sin(t*.72+o.phase)*.38+Math.sin(t*1.95+o.phase*1.7)*.24;o.obj.rotation.z=(Math.sin(t*1.35+o.phase)+.28*Math.sin(t*2.65+o.phase*1.3)+gust)*o.amount*a*i*wL+bz;o.obj.rotation.x=(Math.cos(t*1.12+o.phase+.6)+.22*Math.sin(t*2.3+o.phase))*(o.depth||.05)*a*i*wL+bx;o.obj.rotation.y=Math.sin(t*.95+o.phase*2.1)*.14*a*i*wL;}else{o.obj.rotation.z=(Math.sin(t*1.1+o.phase)+.18*Math.sin(t*2.05+o.phase))*o.amount*a*i+bz,o.obj.rotation.x=Math.sin(t*.87+o.phase+.7)*(o.depth||0)*a*i+bx;}}else if(o.type==="wind")o.uniform.value=t;else if(o.type==="petal"){const h=(t*o.speed+o.phase)%1,s=o.z+h*o.driftZ+Math.cos(t*1.2+o.phase*6)*.26*i,l=s<1.05?.76:.18;o.obj.position.set(o.x+h*o.driftX+Math.sin(t*1.5+o.phase*8)*.32*i,l+(o.height-l)*(1-h)+Math.sin(t*2.3+o.phase*7)*.06*i,s),o.obj.rotation.set(Math.sin(t*1.8+o.phase*7)*.7+.25,t*.6+o.phase*4,Math.cos(t*1.5+o.phase*9)*.6);const c=ne.smoothstep(h,0,.08)*(1-ne.smoothstep(h,.88,1));o.obj.scale.set(o.size*c,o.size*.26*c,o.size*.62*c)}else if(o.type==="mote"){o.obj.position.y=o.base.y+Math.sin(t*.38+o.phase)*.18,o.obj.position.x=o.base.x+Math.sin(t*.15+o.phase)*.12,o.obj.scale.setScalar((.6+(Math.sin(t*.63+o.phase)+1)*.28)*(1-rn*.5))}else if(o.type==="water"){o.u.uTime.value=t,o.u.uDaylight.value=us.daylight,o.u.uRipple.value=window.__rippleBoost||0,o.u.uRain.value=rn,o.u.uSunDir.value.copy(se.position).normalize(),o.u.uSunCol.value.copy(se.color)}else if(o.type==="rain"){o.obj.visible=rn>.01;if(o.obj.visible){o.u.uTime.value=t;o.u.uRain.value=rn;o.u.uDaylight.value=us.daylight}}else if(o.type==="puddle"){o.obj.visible=wt>.01;if(o.obj.visible){o.u.uTime.value=t;o.u.uRain.value=wt;o.u.uSplash.value=rn;o.u.uDaylight.value=us.daylight}}else o.type==="firefly"&&(function(ff){const nf=us.night&&!us.raining&&rn<=.01?Math.max(0,1-us.daylight*1.55):0;if(nf<=.01){ff.obj.visible=!1}else{ff.obj.visible=!0;const p=(Math.sin(t*3.2+ff.phase*4)*.4+.6)*nf;ff.obj.scale.setScalar(p);ff.obj.position.set(ff.base.x+Math.sin(t*.75*ff.speed+ff.phase)*ff.range,ff.base.y+Math.sin(t*1.3*ff.speed+ff.phase*1.4)*(ff.range*.55),ff.base.z+Math.cos(t*.8*ff.speed+ff.phase*2)*ff.range)}})(o);us.update(t,e,He.matches),Y.update(),Ve.root.visible&&Ve.update(t,i),Ut.update(t,i),G.info.reset();WET.render(t,wt,rn,us.daylight,[wMesh,rainMesh]);ge.render();if(!window.__SHRINE_LOADED&&(Ve.ready||t>.8)){window.__SHRINE_LOADED=!0;const elapsed=performance.now()-(window.__LOADING_START_MS||0),waitMs=Math.max(0,1200-elapsed);setTimeout(()=>{const ls=document.getElementById("loading-screen");ls&&(ls.classList.add("loaded"),setTimeout(()=>ls.remove(),650))},waitMs)}}let __booted=!1;const __boot=()=>{if(__booted)return;__booted=!0;ze=performance.now();G.setAnimationLoop(st)};G.setRenderTarget(reflTarget);const __cp=G.compileAsync(J,te);G.setRenderTarget(null);Promise.race([__cp,new Promise(r=>setTimeout(r,2e4))]).catch(()=>{}).then(__boot);document.addEventListener("visibilitychange",()=>{if(!__booted)return;ze=performance.now(),G.setAnimationLoop(document.hidden?null:st)});et.addEventListener("contextmenu",n=>n.preventDefault());window.addEventListener("pagehide",()=>G.setAnimationLoop(null));window.addEventListener("pageshow",()=>{ze=performance.now(),document.hidden||G.setAnimationLoop(st)});


// === Enhanced Interactive Features ===
(() => {
  // 1. Toast Notification Helper
  function showToast(msg, duration = 3800) {
    let toast = document.querySelector('.shrine-toast');
    if (!toast) {
      toast = document.createElement('div');
      toast.className = 'shrine-toast';
      document.body.appendChild(toast);
    }
    toast.innerHTML = msg.replace(/\n/g, '<br/>');
    toast.classList.add('show');
    clearTimeout(toast._timer);
    toast._timer = setTimeout(() => toast.classList.remove('show'), duration);
  }
  window.showShrineToast = showToast;

  // 2. High-Fidelity Spatial Audio Engine
  let audioCtx = null;
  let reverbNode = null;
  let masterGain = null;
  let isSfxMuted = false;
  let isBgmMuted = false; // BGM is ON by default!

  function getAudioContext() {
    if (!audioCtx) {
      audioCtx = new (window.AudioContext || window.webkitAudioContext)();
      masterGain = audioCtx.createGain();
      masterGain.gain.setValueAtTime(0.85, audioCtx.currentTime);
      masterGain.connect(audioCtx.destination);

      // Courtyard Convolver Impulse Response
      try {
        reverbNode = audioCtx.createConvolver();
        const rate = audioCtx.sampleRate;
        const duration = 2.4;
        const decay = 2.4;
        const len = Math.floor(rate * duration);
        const buffer = audioCtx.createBuffer(2, len, rate);
        const left = buffer.getChannelData(0);
        const right = buffer.getChannelData(1);

        let lastL = 0, lastR = 0;
        for (let i = 0; i < len; i++) {
          const t = i / rate;
          const env = Math.exp(-t * decay);
          const rawL = (Math.random() * 2 - 1) * env;
          const rawR = (Math.random() * 2 - 1) * env;
          lastL = lastL * 0.45 + rawL * 0.55;
          lastR = lastR * 0.45 + rawR * 0.55;
          left[i] = lastL;
          right[i] = lastR;
        }
        reverbNode.buffer = buffer;

        const wetGain = audioCtx.createGain();
        wetGain.gain.setValueAtTime(0.40, audioCtx.currentTime);
        reverbNode.connect(wetGain);
        wetGain.connect(masterGain);
      } catch(e) {}
    }
    if (audioCtx.state === 'suspended') {
      audioCtx.resume();
    }
    return audioCtx;
  }

  function connectSpatial(sourceNode, dryVol = 0.75, wetVol = 0.45) {
    if (isSfxMuted) return;
    const ctx = getAudioContext();
    const dry = ctx.createGain();
    dry.gain.setValueAtTime(dryVol, ctx.currentTime);
    sourceNode.connect(dry);
    dry.connect(masterGain);

    if (reverbNode) {
      const wet = ctx.createGain();
      wet.gain.setValueAtTime(wetVol, ctx.currentTime);
      sourceNode.connect(wet);
      wet.connect(reverbNode);
    }
  }

  // === Realistic Recorded Foley SFX (Water, Bell, Saisen) ===
  window.__AUDIO_PACK_URL__ = "./assets/audio-pack-a8c0bdf1.js";
  const REAL_SFX = {};
  const sfxBuffers = {};
  let activeFgBuses = [];
  let activeFgNodes = [];
  let fgToken = 0;
  let voiceDelayTimer = null;
  let lastFgHit = null;
  let lastFgTime = 0;

  function stopForegroundAudio() {
    fgToken++;
    if (voiceDelayTimer) {
      clearTimeout(voiceDelayTimer);
      voiceDelayTimer = null;
    }
    if (typeof stopCurrentVoice === 'function') stopCurrentVoice();
    if (!audioCtx || activeFgBuses.length === 0) return;

    const oldBuses = activeFgBuses;
    const oldNodes = activeFgNodes;
    activeFgBuses = [];
    activeFgNodes = [];

    try {
      const now = audioCtx.currentTime;
      oldBuses.forEach(bus => {
        try {
          bus.gain.cancelScheduledValues(now);
          bus.gain.setValueAtTime(Math.max(0.0001, bus.gain.value), now);
          bus.gain.linearRampToValueAtTime(0.0001, now + 0.055);
        } catch(e) {}
      });
      setTimeout(() => {
        oldNodes.forEach(n => {
          try { n.stop(); } catch(e) {}
          try { n.disconnect(); } catch(e) {}
        });
        oldBuses.forEach(b => {
          try { b.disconnect(); } catch(e) {}
        });
      }, 65);
    } catch(e) {}
  }

  function createFgBus(dryVol = 0.75, wetVol = 0.45) {
    const ctx = getAudioContext();
    const bus = ctx.createGain();
    bus.gain.setValueAtTime(1.0, ctx.currentTime);
    connectSpatial(bus, dryVol, wetVol);
    activeFgBuses.push(bus);
    return bus;
  }

  function preloadRealSfx() {
    if (!audioCtx) return;
    Object.keys(REAL_SFX).forEach(key => {
      if (sfxBuffers[key]) return;
      try {
        const b64 = REAL_SFX[key];
        const byteStr = atob(b64);
        const ab = new ArrayBuffer(byteStr.length);
        const ia = new Uint8Array(ab);
        for (let i = 0; i < byteStr.length; i++) ia[i] = byteStr.charCodeAt(i);
        audioCtx.decodeAudioData(ab, buf => { sfxBuffers[key] = buf; });
      } catch(e) {}
    });
  }

  function playRealSfx(key, vol = 0.85, wet = 0.4, rate = 1.0) {
    if (isSfxMuted) return;
    stopForegroundAudio();
    const myToken = fgToken;
    const ctx = getAudioContext();
    preloadRealSfx();
    const b64 = REAL_SFX[key];
    if (!b64) {
      if (typeof ensureAudioPack === 'function') {
        ensureAudioPack().then(() => {
          if (myToken === fgToken && REAL_SFX[key]) playRealSfx(key, vol, wet, rate);
        });
      }
      return;
    }

    if (sfxBuffers[key]) {
      const src = ctx.createBufferSource();
      src.buffer = sfxBuffers[key];
      src.playbackRate.setValueAtTime(rate, ctx.currentTime);
      const bus = createFgBus(vol, wet);
      src.connect(bus);
      activeFgNodes.push(src);
      src.start();
      return;
    }

    try {
      const byteStr = atob(b64);
      const ab = new ArrayBuffer(byteStr.length);
      const ia = new Uint8Array(ab);
      for (let i = 0; i < byteStr.length; i++) ia[i] = byteStr.charCodeAt(i);
      ctx.decodeAudioData(ab, (buf) => {
        sfxBuffers[key] = buf;
        if (myToken !== fgToken) return;
        const src = ctx.createBufferSource();
        src.buffer = buf;
        src.playbackRate.setValueAtTime(rate, ctx.currentTime);
        const bus = createFgBus(vol, wet);
        src.connect(bus);
        activeFgNodes.push(src);
        src.start();
      });
    } catch(e) {}
  }

  // === Japanese Character Voices (Single-Instance / No Overlap) ===
  const TOUHOU_VOICES = {};
  const voiceBuffers = {};
  let activeVoiceSource = null;
  let activeVoiceAudio = null;
  let lastVoiceClickTime = 0;
  let audioPackPromise = null;

  function ensureAudioPack() {
    if (Object.keys(REAL_SFX).length > 0 && Object.keys(TOUHOU_VOICES).length > 0) {
      return Promise.resolve();
    }
    if (!audioPackPromise && window.__AUDIO_PACK_URL__) {
      audioPackPromise = fetch(window.__AUDIO_PACK_URL__)
        .then(r => r.json())
        .then(data => {
          if (data && data.sfx) Object.assign(REAL_SFX, data.sfx);
          if (data && data.voices) Object.assign(TOUHOU_VOICES, data.voices);
          preloadRealSfx();
        })
        .catch(() => { audioPackPromise = null; });
    }
    return audioPackPromise || Promise.resolve();
  }
  if (window.__AUDIO_PACK_URL__) {
    setTimeout(() => ensureAudioPack(), 1500);
  }

  function stopCurrentVoice() {
    if (activeVoiceSource) {
      activeVoiceSource = null;
    }
    if (activeVoiceAudio) {
      try {
        activeVoiceAudio.pause();
        activeVoiceAudio.currentTime = 0;
      } catch(e) {}
      activeVoiceAudio = null;
    }
  }

  function playVoice(voiceKey, speed = 1.0, expectedToken = fgToken) {
    if (isSfxMuted || expectedToken !== fgToken) return;
    stopCurrentVoice();
    const ctx = getAudioContext();
    const vData = TOUHOU_VOICES[voiceKey];
    if (!vData) {
      if (window.__AUDIO_PACK_URL__) {
        ensureAudioPack().then(() => {
          if (expectedToken === fgToken && TOUHOU_VOICES[voiceKey]) playVoice(voiceKey, speed, expectedToken);
        });
      }
      return;
    }

    if (voiceBuffers[voiceKey]) {
      const src = ctx.createBufferSource();
      src.buffer = voiceBuffers[voiceKey];
      src.playbackRate.setValueAtTime(speed, ctx.currentTime);
      const bus = createFgBus(1.0, 0.35);
      src.connect(bus);
      activeFgNodes.push(src);
      src.onended = () => { if (activeVoiceSource === src) activeVoiceSource = null; };
      activeVoiceSource = src;
      src.start();
      return;
    }

    try {
      const byteStr = atob(vData.base64);
      const ab = new ArrayBuffer(byteStr.length);
      const ia = new Uint8Array(ab);
      for (let i = 0; i < byteStr.length; i++) ia[i] = byteStr.charCodeAt(i);
      ctx.decodeAudioData(ab, (buf) => {
        voiceBuffers[voiceKey] = buf;
        if (expectedToken !== fgToken) return;
        stopCurrentVoice();
        const src = ctx.createBufferSource();
        src.buffer = buf;
        src.playbackRate.setValueAtTime(speed, ctx.currentTime);
        const bus = createFgBus(1.0, 0.35);
        src.connect(bus);
        activeFgNodes.push(src);
        src.onended = () => { if (activeVoiceSource === src) activeVoiceSource = null; };
        activeVoiceSource = src;
        src.start();
      });
    } catch(err) {
      try {
        if (expectedToken !== fgToken) return;
        stopCurrentVoice();
        const a = new Audio('data:audio/mp3;base64,' + vData.base64);
        a.playbackRate = speed;
        a.volume = isSfxMuted ? 0 : 0.9;
        activeVoiceAudio = a;
        a.onended = () => { if (activeVoiceAudio === a) activeVoiceAudio = null; };
        a.play();
      } catch(e) {}
    }
  }

  // Pure Wind Chime & Kagura Bell
  function playFurinChime(isForeground = false) {
    if (isSfxMuted) return;
    try {
      if (isForeground) stopForegroundAudio();
      const ctx = getAudioContext(), now = ctx.currentTime;
      // Well-balanced volume: clear and resonant, comfortable alongside shrine garden ambiance
      const bus = isForeground ? createFgBus(0.82, 0.48) : null;
      const scale = [1318.5, 1480, 1760, 1975.5, 2349.3];
      const f0 = scale[Math.floor(Math.random() * scale.length)];
      const strikes = isForeground ? [0, 0.075] : [0];
      strikes.forEach((strikeDelay, sIdx) => {
        const sGainMul = (sIdx === 0) ? (isForeground ? 1.0 : 0.65) : 0.45;
        [1.0, 2.76, 5.4].forEach((r, idx) => {
          const osc = ctx.createOscillator(), gain = ctx.createGain();
          osc.type = 'sine';
          const tStart = now + strikeDelay;
          osc.frequency.setValueAtTime(f0 * r, tStart);
          const a = [0.32, 0.10, 0.035][idx] * sGainMul;
          gain.gain.setValueAtTime(0.0001, tStart);
          gain.gain.linearRampToValueAtTime(a, tStart + 0.003);
          gain.gain.exponentialRampToValueAtTime(0.0001, tStart + (2.2 / (idx + 1)));
          osc.connect(gain);
          if (bus) {
            gain.connect(bus);
            activeFgNodes.push(osc);
          } else {
            connectSpatial(gain, 0.48, 0.72);
          }
          osc.start(tStart);
          osc.stop(tStart + 2.3);
        });
      });
    } catch(e) {}
  }

  function playKaguraBell() {
    if (isSfxMuted) return;
    try {
      const ctx = getAudioContext(), now = ctx.currentTime;
      const bus = createFgBus(0.5, 0.7);
      [2380, 2790, 3340, 4120].forEach((f, idx) => {
        const osc = ctx.createOscillator(), gain = ctx.createGain();
        osc.type = 'sine';
        osc.frequency.setValueAtTime(f, now);
        gain.gain.setValueAtTime(0.10 / (idx + 1), now);
        gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.8);
        osc.connect(gain);
        gain.connect(bus);
        activeFgNodes.push(osc);
        osc.start(now);
        osc.stop(now + 0.85);
      });
    } catch(e) {}
  }

  function playSakeClink() {
    if (isSfxMuted) return;
    try {
      const ctx = getAudioContext(), now = ctx.currentTime;
      const bus = createFgBus(0.6, 0.6);
      [2150, 4820].forEach((f, idx) => {
        const osc = ctx.createOscillator(), gain = ctx.createGain();
        osc.type = 'sine';
        osc.frequency.setValueAtTime(f, now);
        gain.gain.setValueAtTime(idx === 0 ? 0.18 : 0.06, now);
        gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.35);
        osc.connect(gain);
        gain.connect(bus);
        activeFgNodes.push(osc);
        osc.start(now);
        osc.stop(now + 0.36);
      });
    } catch(e) {}
  }

  function playOmikujiShake() {
    if (isSfxMuted) return;
    try {
      stopForegroundAudio();
      const ctx = getAudioContext(), now = ctx.currentTime;
      // Volume matched with water scoop (0.95 dry, 0.42 wet):
      const bus = createFgBus(0.95, 0.42);
      
      // 1. Bamboo cylinder hollow body resonance thuds (low-mid body, 310-390Hz)
      [0, 0.08, 0.16, 0.24].forEach((delay, idx) => {
        const osc = ctx.createOscillator(), gain = ctx.createGain();
        osc.type = 'sine';
        const t = now + delay;
        const f = 320 + (idx % 2) * 50 + Math.random() * 30;
        osc.frequency.setValueAtTime(f, t);
        osc.frequency.exponentialRampToValueAtTime(f * 0.68, t + 0.06);
        gain.gain.setValueAtTime(0.0001, t);
        gain.gain.linearRampToValueAtTime(0.38, t + 0.004);
        gain.gain.exponentialRampToValueAtTime(0.0001, t + 0.065);
        osc.connect(gain);
        gain.connect(bus);
        activeFgNodes.push(osc);
        osc.start(t);
        osc.stop(t + 0.07);
      });

      // 2. Crisp bamboo stick impacts & clatter (triangle + resonant wood frequencies 950-1650Hz)
      [0.01, 0.05, 0.09, 0.14, 0.18, 0.23, 0.27].forEach((delay, idx) => {
        const osc = ctx.createOscillator(), gain = ctx.createGain();
        osc.type = 'triangle';
        const t = now + delay;
        const f = 980 + (idx % 4) * 210 + Math.random() * 90;
        osc.frequency.setValueAtTime(f, t);
        const amp = 0.42 + Math.random() * 0.12;
        gain.gain.setValueAtTime(0.0001, t);
        gain.gain.linearRampToValueAtTime(amp, t + 0.002);
        gain.gain.exponentialRampToValueAtTime(0.0001, t + 0.048);
        osc.connect(gain);
        gain.connect(bus);
        activeFgNodes.push(osc);
        osc.start(t);
        osc.stop(t + 0.05);
      });
    } catch(e) {}
  }

  setInterval(() => {
    if (!isSfxMuted && activeFgBuses.length === 0 && Math.random() < (window.__shrineRain > 0.3 ? 0.45 : 0.25)) playFurinChime(false);
  }, 18000);

  // Real rainfall field recording (ezwa / PDSounds, public domain).
  // Preserve its natural impacts and dynamics; only blend the loop seam.
  let rainNode = null, rainGain = null, rainLoading = false, rainRetryAt = 0;
  async function loadRainRecording(ctx) {
    rainLoading = true;
    try {
      const response = await fetch('./assets/rain-field-a2b2e834.mp3');
      if (!response.ok) throw new Error(`Rain audio HTTP ${response.status}`);
      const buffer = await ctx.decodeAudioData(await response.arrayBuffer());
      const overlap = Math.min(1.5, buffer.duration / 4);
      const count = Math.floor(overlap * buffer.sampleRate);
      for (let ch = 0; ch < buffer.numberOfChannels; ch++) {
        const data = buffer.getChannelData(ch), tailStart = data.length - count;
        for (let i = 0; i < count; i++) {
          const phase = i / (count - 1) * Math.PI / 2;
          data[tailStart + i] = data[tailStart + i] * Math.cos(phase) + data[i] * Math.sin(phase);
        }
      }
      rainGain = ctx.createGain();
      rainGain.gain.value = 0;
      rainGain.connect(masterGain);
      rainNode = ctx.createBufferSource();
      rainNode.buffer = buffer;
      rainNode.loop = true;
      rainNode.loopStart = count / buffer.sampleRate;
      rainNode.loopEnd = buffer.duration;
      rainNode.connect(rainGain);
      rainNode.start(0, rainNode.loopStart);
      updateRainAudio();
    } catch (error) {
      rainRetryAt = performance.now() + 15000;
      console.warn('Rain recording could not load; will retry.', error);
    } finally {
      rainLoading = false;
    }
  }
  function updateRainAudio() {
    const isRaining = !!window.__shrineIsRaining;
    const rn = Math.min(1, Math.max(0, window.__shrineRain || 0));
    const ctx = audioCtx;
    if (ctx && isRaining && !isSfxMuted && !rainNode && !rainLoading && performance.now() >= rainRetryAt) {
      loadRainRecording(ctx);
    }
    if (ctx) {
      if (rainGain) {
        const amount = isSfxMuted ? 0 : rn;
        rainGain.gain.setTargetAtTime(amount > 0.001 ? 0.85 * Math.sqrt(amount) : 0, ctx.currentTime, isSfxMuted ? 0.03 : 0.7);
      }
      if (bgmMasterGain) {
        const targetBgm = (isBgmMuted || isRaining) ? 0.0001 : 0.85;
        bgmMasterGain.gain.setTargetAtTime(targetBgm, ctx.currentTime, isRaining ? 0.9 : 1.5);
      }
    }
  }
  window.__updateRainAudio = updateRainAudio;
  setInterval(updateRainAudio, 300);

  // === Dynamic Touhou Shrine BGM Synthesizer ===
  const BGM_SCORES = {"day":{"dur":45,"mel":[[0,1.31,69,0.75],[1.41,0.47,71,0.7],[1.88,0.84,72,0.75],[2.81,0.84,74,0.75],[3.75,1.69,76,0.8],[5.63,0.84,74,0.75],[6.56,0.84,72,0.75],[7.5,1.69,71,0.75],[9.38,0.84,67,0.7],[10.31,0.84,71,0.75],[11.25,2.63,69,0.8],[15,1.13,76,0.85],[16.41,0.47,74,0.75],[16.88,0.84,72,0.8],[17.81,0.84,71,0.75],[18.75,1.13,69,0.8],[20.16,0.47,71,0.75],[20.63,0.84,72,0.8],[21.56,0.84,74,0.8],[22.5,1.69,76,0.85],[24.38,0.84,72,0.8],[25.31,0.84,69,0.75],[26.25,2.63,71,0.8],[30,1.13,76,0.85],[31.41,0.47,74,0.75],[31.88,0.84,72,0.8],[32.81,0.84,71,0.75],[33.75,1.13,69,0.8],[35.16,0.47,71,0.75],[35.63,0.84,72,0.8],[36.56,0.84,76,0.8],[37.5,1.13,74,0.85],[38.91,0.47,72,0.75],[39.38,0.84,71,0.75],[40.31,0.84,72,0.8],[41.25,3,69,0.85]],"bass":[[0,3,45,0.65],[3.75,3,48,0.6],[7.5,3,40,0.6],[11.25,3,45,0.65],[15,3,45,0.65],[18.75,3,41,0.6],[22.5,3,48,0.6],[26.25,3,40,0.6],[30,3,45,0.65],[33.75,3,50,0.6],[37.5,3,40,0.6],[41.25,3.28,45,0.65]]},"night":{"dur":40.65,"mel":[[0,1.16,67,0.75],[1.45,0.48,70,0.7],[1.94,0.87,72,0.75],[2.9,0.87,75,0.8],[3.87,1.74,77,0.85],[5.81,0.87,75,0.8],[6.77,0.87,77,0.8],[7.74,2.71,79,0.85],[11.61,0.87,75,0.8],[12.58,0.87,72,0.75],[13.55,0.87,70,0.75],[14.52,0.87,67,0.7],[15.48,0.87,75,0.8],[16.45,0.87,77,0.8],[17.42,2.71,72,0.85],[21.29,0.87,72,0.75],[22.26,0.87,75,0.8],[23.23,1.74,77,0.85],[25.16,0.87,75,0.8],[26.13,0.87,77,0.8],[27.1,2.42,79,0.85],[30,0.87,82,0.8],[30.97,1.16,84,0.85],[32.42,0.48,87,0.75],[32.9,0.87,86,0.8],[33.87,0.87,84,0.8],[34.84,1.35,82,0.75],[36.77,3.39,79,0.85]],"bass":[[0,3.1,48,0.65],[3.87,3.1,44,0.6],[7.74,3.1,51,0.6],[11.61,3.1,41,0.6],[15.48,1.74,43,0.6],[17.42,3.1,48,0.65],[21.29,1.74,48,0.65],[23.23,3.1,44,0.6],[27.1,3.1,51,0.6],[30.97,3.1,46,0.6],[34.84,4.35,48,0.65]]}};
  let bgmMasterGain = null;
  let bgmTimer = null;
  let bgmLoopStart = 0;
  let currentBgmTheme = null;

  function getBgmGain() {
    const ctx = getAudioContext();
    if (!bgmMasterGain) {
      bgmMasterGain = ctx.createGain();
      bgmMasterGain.gain.setValueAtTime(0, ctx.currentTime);

      // Warm musical low-pass filter (2400Hz gives bell clarity without harshness)
      const bgmFilter = ctx.createBiquadFilter();
      bgmFilter.type = 'lowpass';
      bgmFilter.frequency.setValueAtTime(2400, ctx.currentTime);
      bgmFilter.Q.setValueAtTime(0.8, ctx.currentTime);

      bgmMasterGain.connect(bgmFilter);
      bgmFilter.connect(masterGain);

      if (reverbNode) {
        const revWet = ctx.createGain();
        revWet.gain.setValueAtTime(0.35, ctx.currentTime);
        bgmFilter.connect(revWet);
        revWet.connect(reverbNode);
      }
    }
    return bgmMasterGain;
  }

  function hz(midi) {
    return 440 * Math.pow(2, (midi - 69) / 12);
  }

  function scheduleBgmNote(scoreType, noteData, startTime) {
    const ctx = getAudioContext();
    const [relTime, dur, midi, vel] = noteData;
    const playAt = startTime + relTime;
    if (playAt < ctx.currentTime - 0.05) return;

    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    const freq = hz(midi);

    if (scoreType === 'bass') {
      // Gentle warm acoustic bass
      osc.type = 'sine';
      osc.frequency.setValueAtTime(freq, playAt);
      const amp = 0.22 * (vel || 0.7);
      gain.gain.setValueAtTime(0.0001, playAt);
      gain.gain.linearRampToValueAtTime(amp, playAt + 0.025);
      gain.gain.exponentialRampToValueAtTime(0.0001, playAt + Math.max(1.3, dur));
      osc.connect(gain);
      gain.connect(getBgmGain());
      osc.start(playAt);
      osc.stop(playAt + Math.max(1.4, dur) + 0.05);
    } else {
      // Ethereal Zen Music-Box / Soft Celesta
      osc.type = 'sine';
      osc.frequency.setValueAtTime(freq, playAt);
      const amp = 0.22 * (vel || 0.75);
      gain.gain.setValueAtTime(0.0001, playAt);
      gain.gain.linearRampToValueAtTime(amp, playAt + 0.012);
      gain.gain.exponentialRampToValueAtTime(0.0001, playAt + Math.max(1.6, dur + 0.8));
      osc.connect(gain);
      gain.connect(getBgmGain());
      osc.start(playAt);
      osc.stop(playAt + Math.max(1.7, dur + 0.8) + 0.05);

      // Subtle celestial sparkle (soft octave overtone)
      const overtone = ctx.createOscillator();
      const oGain = ctx.createGain();
      overtone.type = 'sine';
      overtone.frequency.setValueAtTime(freq * 2.0, playAt);
      oGain.gain.setValueAtTime(0.0001, playAt);
      oGain.gain.linearRampToValueAtTime(amp * 0.24, playAt + 0.012);
      oGain.gain.exponentialRampToValueAtTime(0.0001, playAt + 0.65);
      overtone.connect(oGain);
      oGain.connect(getBgmGain());
      overtone.start(playAt);
      overtone.stop(playAt + 0.7);
    }
  }

  function startBgm(theme) {
    if (isBgmMuted) return;
    const ctx = getAudioContext();
    const score = BGM_SCORES[theme];
    if (!score) return;

    currentBgmTheme = theme;
    const now = ctx.currentTime;
    bgmLoopStart = now + 0.1;

    // Comfortable, clearly audible volume level
    const bGain = getBgmGain();
    bGain.gain.cancelScheduledValues(now);
    bGain.gain.setValueAtTime(bGain.gain.value, now);
    const targetBgmVol = (window.__shrineIsRaining) ? 0.0001 : 0.85;
    bGain.gain.linearRampToValueAtTime(targetBgmVol, now + 1.2);

    function scheduleChunk(startTime) {
      if (isBgmMuted || currentBgmTheme !== theme) return;
      if (score.mel) score.mel.forEach(n => scheduleBgmNote('mel', n, startTime));
      if (score.bass) score.bass.forEach(n => scheduleBgmNote('bass', n, startTime));

      bgmTimer = setTimeout(() => {
        if (!isBgmMuted && currentBgmTheme === theme) {
          scheduleChunk(startTime + score.dur);
        }
      }, (score.dur - 0.5) * 1000);
    }

    scheduleChunk(bgmLoopStart);
  }

  function stopBgm(fadeOutSec = 1.0) {
    if (bgmTimer) clearTimeout(bgmTimer);
    if (bgmMasterGain && audioCtx) {
      const now = audioCtx.currentTime;
      bgmMasterGain.gain.cancelScheduledValues(now);
      bgmMasterGain.gain.setValueAtTime(bgmMasterGain.gain.value, now);
      bgmMasterGain.gain.linearRampToValueAtTime(0.0001, now + fadeOutSec);
    }
    currentBgmTheme = null;
  }
  // Cross-fade BGM if day/night transitions while BGM is active
  setInterval(() => {
    if (isBgmMuted) return;
    const isNight = !!window.__shrineNight;
    const neededTheme = isNight ? 'night' : 'day';
    if (currentBgmTheme && currentBgmTheme !== neededTheme) {
      stopBgm(1.5);
      setTimeout(() => {
        if (!isBgmMuted) startBgm(neededTheme);
      }, 1600);
    }
  }, 2000);

  // Auto-Start BGM immediately & on first user gesture
  function tryAutoStartBgm() {
    if (!isBgmMuted && !currentBgmTheme) {
      const isNight = !!window.__shrineNight;
      startBgm(isNight ? 'night' : 'day');
    }
  }

  setTimeout(tryAutoStartBgm, 500);

  const unlockAudio = () => {
    if (audioCtx && audioCtx.state === 'suspended') {
      audioCtx.resume();
    }
    tryAutoStartBgm();
    window.removeEventListener('pointerdown', unlockAudio);
    window.removeEventListener('keydown', unlockAudio);
    window.removeEventListener('touchstart', unlockAudio);
  };
  window.addEventListener('pointerdown', unlockAudio);
  window.addEventListener('keydown', unlockAudio);
  window.addEventListener('touchstart', unlockAudio);

  // 3. Omikuji Fortune System (Triggered by clicking the 3D Ema / Omikuji Rack in the courtyard)
  const OMIKUJI_DATA = [
    { rank: '大吉', title: '结界安泰 · 香火鼎盛', desc: '今日博丽大结界固若金汤。更难得的是，神社的赛钱箱今天破天荒收到了超过十日元的奉纳！灵梦今天心情格外愉悦，万事顺遂。' },
    { rank: '大吉', title: '弹幕退散 · 无想转生', desc: '心境澄明，犹如灵梦的极意。遇到任何难题皆能游刃有余，迎风化解。宜大步向前，诸事大通。' },
    { rank: '中吉', title: '碎月当空 · 廊下清酌', desc: '今晚暮色极佳。不妨学伊吹萃香，坐在社务所的木廊边饮一杯清冽甘醇的好酒。虽有微波，终归安宁。' },
    { rank: '中吉', title: '秋水浮樱 · 偶拾闲趣', desc: '庭院风清，落樱随风而舞。适合在参道石阶上静坐片刻，静听夏蝉与暮钟。心静自然凉，运势稳中向好。' },
    { rank: '小吉', title: '魔使借物 · 雾林迷途', desc: '路过魔法之森时请留神，某位黑白魔法使或许会顺手"借"走你喜欢的小物件。不过也因此结下了奇妙的善缘。' },
    { rank: '吉', title: '扫除清宁 · 静候良缘', desc: '如灵梦日复一日扫去落叶般，扫除心中的杂念与阴霾。平凡日子亦藏深福，踏实前行必有回响。' },
    { rank: '末吉', title: '雾湖骤寒 · 谨防笨蛋', desc: '雾之湖的某位冰之妖精可能会突然冒出来朝你扔雪球。莫要争执，一笑置之便能化险为夷。' },
    { rank: '凶', title: '幽幽垂涎 · 便当不保', desc: '白玉楼的亡灵大小姐正嗅着香气向你走来！请务必护好随身的美食便当，或者快请魂魄妖梦前来相助！' }
  ];

  const omikujiModal = document.getElementById('omikuji-modal');
  const omikujiRankEl = document.getElementById('omikuji-rank');
  const omikujiTitleEl = document.getElementById('omikuji-title');
  const omikujiDescEl = document.getElementById('omikuji-desc');
  const drawAgainBtn = document.getElementById('draw-again-btn');

  let drawAgainTimer = null;
  function drawOmikuji(playSound = true) {
    window.__emaBoost = 1.0;
    if (playSound) playOmikujiShake();
    const item = OMIKUJI_DATA[Math.floor(Math.random() * OMIKUJI_DATA.length)];
    if (omikujiRankEl) omikujiRankEl.textContent = item.rank;
    if (omikujiTitleEl) omikujiTitleEl.textContent = item.title;
    if (omikujiDescEl) omikujiDescEl.textContent = item.desc;
  }

  function openOmikujiModal() {
    if (!omikujiModal) return;
    drawOmikuji(true);
    omikujiModal.classList.add('open');
  }

  if (omikujiModal && drawAgainBtn) {
    drawAgainBtn.addEventListener('click', () => {
      const now = Date.now();
      if (lastFgHit === 'omikuji_btn' && now - lastFgTime < 220) return;
      lastFgHit = 'omikuji_btn';
      lastFgTime = now;
      omikujiModal.querySelector('.omikuji-card').style.transform = 'scale(0.85)';
      window.__emaBoost = 1.0;
      playOmikujiShake();
      clearTimeout(drawAgainTimer);
      drawAgainTimer = setTimeout(() => {
        drawOmikuji(false);
        omikujiModal.querySelector('.omikuji-card').style.transform = '';
      }, 150);
    });
  }

  document.querySelectorAll('.modal-overlay').forEach(modal => {
    modal.addEventListener('click', (e) => {
      const isCloseBtn = !!e.target.closest('.close-modal');
      if (e.target === modal || isCloseBtn) {
        modal.classList.remove('open');
        if (isCloseBtn) {
          playFurinChime(true);
          window.__emaBoost = 1.0;
          showToast('🎐 纳签祈福 · 签文已结于结签架，风铃清响，大结界护佑安泰。');
        }
      }
    });
  });

  // 4. Curated Camera Viewpoints (Triggered by clicking the "境内案内" wooden signboard)
  const CAMERA_PRESETS = [
    { name: '博丽神社 · 庭院全貌', pos: new k(28, 23, 34), target: new k(0, 2.05, 0), zoom: 1.0 },
    { name: '拜殿前 · 赛钱箱与铃绪', pos: new k(5, 11.5, 22), target: new k(0, 2.35, -1.0), zoom: 1.9 },
    { name: '手水舍 · 灵峰甘泉', pos: new k(-21, 12, 20), target: new k(-6.05, 1.15, 2.67), zoom: 2.15 },
    { name: '社务所 · 缘侧茶席与酒樽', pos: new k(24, 12.5, 16), target: new k(6.1, 1.45, -2.3), zoom: 2.0 },
    { name: '绘马挂与结签架 · 点击木架可求签', pos: new k(22, 11.5, 22), target: new k(6.3, 1.3, 3.8), zoom: 2.1 }
  ];
  let currentPresetIdx = 0;

  // Cancel automatic camera glide if user manually interacts
  et.addEventListener('wheel', () => { window.__camAnim = null; }, { passive: true });

  // 5. Accurate 3D Projection Hit-Testing & Hover Cursor
  const REIMU_INTERACTIONS = [
    { voice: 'reimu_1', text: '博丽灵梦：「博麗神社の巫女、博麗霊夢よ。ゆっくりしていってね！」' },
    { voice: 'reimu_2', text: '博丽灵梦：「今日も平和ね。お賽銭、よろしくね！」' },
    { voice: 'reimu_3', text: '博丽灵梦：「参拝に来たの？掃き掃除の邪魔しないでね。」' },
    { voice: 'reimu_4', text: '博丽灵梦：「お茶でも飲んで、のんびりしていきなさいよ。」' }
  ];

  const SUIKA_INTERACTIONS = [
    { voice: 'suika_1', text: '伊吹萃香：「伊吹萃香だよ！一緒に一杯どうだい？」' },
    { voice: 'suika_2', text: '伊吹萃香：「酒だ酒だー！今夜は宴会だよ！」' },
    { voice: 'suika_3', text: '伊吹萃香：「萃香は酔ってないぞ！まだまだ飲めるんだから。」' },
    { voice: 'suika_4', text: '伊吹萃香：「霊夢ー、いいお酒が入ったから乾杯しようよ！」' }
  ];

  const tmpVec = new k();
  function distTo3D(ndcX, ndcY, x, y, z) {
    tmpVec.set(x, y, z).project(te);
    return Math.hypot(ndcX - tmpVec.x, ndcY - tmpVec.y);
  }

  function getHitTarget(clientX, clientY) {
    const ndcX = (clientX / window.innerWidth) * 2 - 1;
    const ndcY = -(clientY / window.innerHeight) * 2 + 1;
    const zScale = Math.min(1.6, Math.max(0.85, te.zoom * 0.9));

    // 1. Reimu (Live dynamic position in courtyard during Day/Dusk)
    if (Ve.root.visible) {
      const rx = Ve.root.position.x, ry = Ve.root.position.y, rz = Ve.root.position.z;
      const dHead = distTo3D(ndcX, ndcY, rx, ry + 1.55, rz);
      const dBody = distTo3D(ndcX, ndcY, rx, ry + 0.85, rz);
      if (Math.min(dHead, dBody) < 0.095 * zScale) return 'reimu';
    }

    // 2. Suika (Seated on the office veranda at Night)
    if (Ut.root.visible) {
      const sx = Ut.root.position.x, sy = Ut.root.position.y, sz = Ut.root.position.z;
      const dSuika = Math.min(
        distTo3D(ndcX, ndcY, sx, sy + 0.55, sz),
        distTo3D(ndcX, ndcY, sx, sy + 0.15, sz)
      );
      if (dSuika < 0.095 * zScale) return 'suika';
    }

    // 3. Saisenbako & Shrine Bell Rope
    const dSaisen = Math.min(
      distTo3D(ndcX, ndcY, 0, 1.85, -0.86),
      distTo3D(ndcX, ndcY, 0, 2.85, -0.20)
    );
    if (dSaisen < 0.105 * zScale) return 'saisen';

    // 4. Ema Rack & Omikuji Tying Stand (Draws Omikuji Fortune!)
    const dOmikuji = Math.min(
      distTo3D(ndcX, ndcY, 5.9, 1.35, 2.55),
      distTo3D(ndcX, ndcY, 6.9, 1.15, 5.11)
    );
    if (dOmikuji < 0.115 * zScale) return 'omikuji';

    // 5. Keinai Annai Signboard ("境内案内" Camera Viewpoint Tour)
    if (distTo3D(ndcX, ndcY, -4.0, 1.35, 5.55) < 0.095 * zScale) return 'annai';

    // 6. Chozuya Water Pavilion
    if (distTo3D(ndcX, ndcY, -6.05, 1.15, 2.67) < 0.115 * zScale) return 'chozuya';

    // 7. Great Torii Gate (Top beam + Left/Right pillars so it doesn't block Reimu in the center)
    const dTorii = Math.min(
      distTo3D(ndcX, ndcY, 0, 4.15, 7.1),
      distTo3D(ndcX, ndcY, -2.35, 2.3, 7.1),
      distTo3D(ndcX, ndcY, 2.35, 2.3, 7.1)
    );
    if (dTorii < 0.115 * zScale) return 'torii';

    return null;
  }

  let downX = 0, downY = 0, isPointerDown = false;
  et.addEventListener('pointerdown', (e) => {
    downX = e.clientX;
    downY = e.clientY;
    isPointerDown = true;
    window.__camAnim = null;
  });

  et.addEventListener('pointermove', (e) => {
    if (isPointerDown) return;
    const hit = getHitTarget(e.clientX, e.clientY);
    et.style.cursor = hit ? 'pointer' : '';
  });

  et.addEventListener('pointerup', (e) => {
    isPointerDown = false;
    const moved = Math.hypot(e.clientX - downX, e.clientY - downY);
    if (moved > 8) {
      if (moved > 80 && activeFgBuses.length === 0 && Math.random() < 0.25) playFurinChime(false);
      return;
    }

    const hit = getHitTarget(e.clientX, e.clientY);
    if (!hit) return;

    const now = Date.now();
    if (hit === lastFgHit && now - lastFgTime < 220) return;
    lastFgHit = hit;
    lastFgTime = now;

    if (hit === 'saisen') {
      window.__bellBoost = 1.0;
      playRealSfx('saisen', 0.9, 0.45, 0.97 + Math.random() * 0.06);
      showToast('🪙 赛钱奉纳 +100円 · 博丽灵梦：「ありがとね！」');
      return;
    }

    if (hit === 'reimu') {
      stopForegroundAudio();
      const myToken = fgToken;
      playKaguraBell();
      const item = REIMU_INTERACTIONS[Math.floor(Math.random() * REIMU_INTERACTIONS.length)];
      voiceDelayTimer = setTimeout(() => playVoice(item.voice, 1.0, myToken), 120);
      showToast(item.text);
      return;
    }

    if (hit === 'suika') {
      stopForegroundAudio();
      const myToken = fgToken;
      playSakeClink();
      const item = SUIKA_INTERACTIONS[Math.floor(Math.random() * SUIKA_INTERACTIONS.length)];
      voiceDelayTimer = setTimeout(() => playVoice(item.voice, 1.06, myToken), 120);
      showToast(item.text);
      return;
    }

    if (hit === 'omikuji') {
      openOmikujiModal();
      return;
    }

    if (hit === 'annai') {
      currentPresetIdx = (currentPresetIdx + 1) % CAMERA_PRESETS.length;
      const preset = CAMERA_PRESETS[currentPresetIdx];
      window.__camAnim = {
        pos: preset.pos.clone(),
        target: preset.target.clone(),
        zoom: preset.zoom
      };
      playFurinChime(true);
      showToast('🪧 境内案内 · 视角切换至「' + preset.name + '」');
      return;
    }

    if (hit === 'chozuya') {
      window.__rippleBoost = 1.0;
      playRealSfx('water', 0.96, 0.42, 0.94 + Math.random() * 0.12);
      showToast('💧 手水舍 · 掬一捧灵峰甘泉，净手涤心，诚敬参拜。');
      return;
    }

    if (hit === 'torii') {
      playRealSfx('bell', 0.92, 0.55, 0.97 + Math.random() * 0.06);
      showToast('⛩️ 博丽大结界 · 现世与幻想乡的永恒境界，守护着一切不可思议。');
      return;
    }
  });
})();


}, 0));
