/*!
 * VERSION: 1.14.1
 * DATE: 2014-10-16
 * UPDATES AND DOCS AT: http://www.greensock.com
 * 
 * Includes all of the following: TweenLite, TweenMax, TimelineLite, TimelineMax, EasePack, CSSPlugin, RoundPropsPlugin, BezierPlugin, AttrPlugin, DirectionalRotationPlugin
 *
 * @license Copyright (c) 2008-2014, GreenSock. All rights reserved.
 * This work is subject to the terms at http://www.greensock.com/terms_of_use.html or for
 * Club GreenSock members, the software agreement that was issued with your membership.
 * 
 * @author: Jack Doyle, jack@greensock.com
 **/
var _gsScope="undefined"!=typeof module&&module.exports&&"undefined"!=typeof global?global:this||window;(_gsScope._gsQueue||(_gsScope._gsQueue=[])).push(function(){"use strict";_gsScope._gsDefine("TweenMax",["core.Animation","core.SimpleTimeline","TweenLite"],function(t,e,i){var s=function(t){var e,i=[],s=t.length;for(e=0;e!==s;i.push(t[e++]));return i},r=function(t,e,s){i.call(this,t,e,s),this._cycle=0,this._yoyo=this.vars.yoyo===!0,this._repeat=this.vars.repeat||0,this._repeatDelay=this.vars.repeatDelay||0,this._dirty=!0,this.render=r.prototype.render},n=1e-10,a=i._internals,o=a.isSelector,h=a.isArray,l=r.prototype=i.to({},.1,{}),_=[];r.version="1.14.1",l.constructor=r,l.kill()._gc=!1,r.killTweensOf=r.killDelayedCallsTo=i.killTweensOf,r.getTweensOf=i.getTweensOf,r.lagSmoothing=i.lagSmoothing,r.ticker=i.ticker,r.render=i.render,l.invalidate=function(){return this._yoyo=this.vars.yoyo===!0,this._repeat=this.vars.repeat||0,this._repeatDelay=this.vars.repeatDelay||0,this._uncache(!0),i.prototype.invalidate.call(this)},l.updateTo=function(t,e){var s,r=this.ratio;e&&this._startTime<this._timeline._time&&(this._startTime=this._timeline._time,this._uncache(!1),this._gc?this._enabled(!0,!1):this._timeline.insert(this,this._startTime-this._delay));for(s in t)this.vars[s]=t[s];if(this._initted)if(e)this._initted=!1;else if(this._gc&&this._enabled(!0,!1),this._notifyPluginsOfEnabled&&this._firstPT&&i._onPluginEvent("_onDisable",this),this._time/this._duration>.998){var n=this._time;this.render(0,!0,!1),this._initted=!1,this.render(n,!0,!1)}else if(this._time>0){this._initted=!1,this._init();for(var a,o=1/(1-r),h=this._firstPT;h;)a=h.s+h.c,h.c*=o,h.s=a-h.c,h=h._next}return this},l.render=function(t,e,i){this._initted||0===this._duration&&this.vars.repeat&&this.invalidate();var s,r,o,h,l,u,p,c,f=this._dirty?this.totalDuration():this._totalDuration,m=this._time,d=this._totalTime,g=this._cycle,v=this._duration,y=this._rawPrevTime;if(t>=f?(this._totalTime=f,this._cycle=this._repeat,this._yoyo&&0!==(1&this._cycle)?(this._time=0,this.ratio=this._ease._calcEnd?this._ease.getRatio(0):0):(this._time=v,this.ratio=this._ease._calcEnd?this._ease.getRatio(1):1),this._reversed||(s=!0,r="onComplete"),0===v&&(this._initted||!this.vars.lazy||i)&&(this._startTime===this._timeline._duration&&(t=0),(0===t||0>y||y===n)&&y!==t&&(i=!0,y>n&&(r="onReverseComplete")),this._rawPrevTime=c=!e||t||y===t?t:n)):1e-7>t?(this._totalTime=this._time=this._cycle=0,this.ratio=this._ease._calcEnd?this._ease.getRatio(0):0,(0!==d||0===v&&y>0&&y!==n)&&(r="onReverseComplete",s=this._reversed),0>t&&(this._active=!1,0===v&&(this._initted||!this.vars.lazy||i)&&(y>=0&&(i=!0),this._rawPrevTime=c=!e||t||y===t?t:n)),this._initted||(i=!0)):(this._totalTime=this._time=t,0!==this._repeat&&(h=v+this._repeatDelay,this._cycle=this._totalTime/h>>0,0!==this._cycle&&this._cycle===this._totalTime/h&&this._cycle--,this._time=this._totalTime-this._cycle*h,this._yoyo&&0!==(1&this._cycle)&&(this._time=v-this._time),this._time>v?this._time=v:0>this._time&&(this._time=0)),this._easeType?(l=this._time/v,u=this._easeType,p=this._easePower,(1===u||3===u&&l>=.5)&&(l=1-l),3===u&&(l*=2),1===p?l*=l:2===p?l*=l*l:3===p?l*=l*l*l:4===p&&(l*=l*l*l*l),this.ratio=1===u?1-l:2===u?l:.5>this._time/v?l/2:1-l/2):this.ratio=this._ease.getRatio(this._time/v)),m===this._time&&!i&&g===this._cycle)return d!==this._totalTime&&this._onUpdate&&(e||this._onUpdate.apply(this.vars.onUpdateScope||this,this.vars.onUpdateParams||_)),void 0;if(!this._initted){if(this._init(),!this._initted||this._gc)return;if(!i&&this._firstPT&&(this.vars.lazy!==!1&&this._duration||this.vars.lazy&&!this._duration))return this._time=m,this._totalTime=d,this._rawPrevTime=y,this._cycle=g,a.lazyTweens.push(this),this._lazy=[t,e],void 0;this._time&&!s?this.ratio=this._ease.getRatio(this._time/v):s&&this._ease._calcEnd&&(this.ratio=this._ease.getRatio(0===this._time?0:1))}for(this._lazy!==!1&&(this._lazy=!1),this._active||!this._paused&&this._time!==m&&t>=0&&(this._active=!0),0===d&&(2===this._initted&&t>0&&this._init(),this._startAt&&(t>=0?this._startAt.render(t,e,i):r||(r="_dummyGS")),this.vars.onStart&&(0!==this._totalTime||0===v)&&(e||this.vars.onStart.apply(this.vars.onStartScope||this,this.vars.onStartParams||_))),o=this._firstPT;o;)o.f?o.t[o.p](o.c*this.ratio+o.s):o.t[o.p]=o.c*this.ratio+o.s,o=o._next;this._onUpdate&&(0>t&&this._startAt&&this._startTime&&this._startAt.render(t,e,i),e||(this._totalTime!==d||s)&&this._onUpdate.apply(this.vars.onUpdateScope||this,this.vars.onUpdateParams||_)),this._cycle!==g&&(e||this._gc||this.vars.onRepeat&&this.vars.onRepeat.apply(this.vars.onRepeatScope||this,this.vars.onRepeatParams||_)),r&&(!this._gc||i)&&(0>t&&this._startAt&&!this._onUpdate&&this._startTime&&this._startAt.render(t,e,i),s&&(this._timeline.autoRemoveChildren&&this._enabled(!1,!1),this._active=!1),!e&&this.vars[r]&&this.vars[r].apply(this.vars[r+"Scope"]||this,this.vars[r+"Params"]||_),0===v&&this._rawPrevTime===n&&c!==n&&(this._rawPrevTime=0))},r.to=function(t,e,i){return new r(t,e,i)},r.from=function(t,e,i){return i.runBackwards=!0,i.immediateRender=0!=i.immediateRender,new r(t,e,i)},r.fromTo=function(t,e,i,s){return s.startAt=i,s.immediateRender=0!=s.immediateRender&&0!=i.immediateRender,new r(t,e,s)},r.staggerTo=r.allTo=function(t,e,n,a,l,u,p){a=a||0;var c,f,m,d,g=n.delay||0,v=[],y=function(){n.onComplete&&n.onComplete.apply(n.onCompleteScope||this,arguments),l.apply(p||this,u||_)};for(h(t)||("string"==typeof t&&(t=i.selector(t)||t),o(t)&&(t=s(t))),t=t||[],0>a&&(t=s(t),t.reverse(),a*=-1),c=t.length-1,m=0;c>=m;m++){f={};for(d in n)f[d]=n[d];f.delay=g,m===c&&l&&(f.onComplete=y),v[m]=new r(t[m],e,f),g+=a}return v},r.staggerFrom=r.allFrom=function(t,e,i,s,n,a,o){return i.runBackwards=!0,i.immediateRender=0!=i.immediateRender,r.staggerTo(t,e,i,s,n,a,o)},r.staggerFromTo=r.allFromTo=function(t,e,i,s,n,a,o,h){return s.startAt=i,s.immediateRender=0!=s.immediateRender&&0!=i.immediateRender,r.staggerTo(t,e,s,n,a,o,h)},r.delayedCall=function(t,e,i,s,n){return new r(e,0,{delay:t,onComplete:e,onCompleteParams:i,onCompleteScope:s,onReverseComplete:e,onReverseCompleteParams:i,onReverseCompleteScope:s,immediateRender:!1,useFrames:n,overwrite:0})},r.set=function(t,e){return new r(t,0,e)},r.isTweening=function(t){return i.getTweensOf(t,!0).length>0};var u=function(t,e){for(var s=[],r=0,n=t._first;n;)n instanceof i?s[r++]=n:(e&&(s[r++]=n),s=s.concat(u(n,e)),r=s.length),n=n._next;return s},p=r.getAllTweens=function(e){return u(t._rootTimeline,e).concat(u(t._rootFramesTimeline,e))};r.killAll=function(t,i,s,r){null==i&&(i=!0),null==s&&(s=!0);var n,a,o,h=p(0!=r),l=h.length,_=i&&s&&r;for(o=0;l>o;o++)a=h[o],(_||a instanceof e||(n=a.target===a.vars.onComplete)&&s||i&&!n)&&(t?a.totalTime(a._reversed?0:a.totalDuration()):a._enabled(!1,!1))},r.killChildTweensOf=function(t,e){if(null!=t){var n,l,_,u,p,c=a.tweenLookup;if("string"==typeof t&&(t=i.selector(t)||t),o(t)&&(t=s(t)),h(t))for(u=t.length;--u>-1;)r.killChildTweensOf(t[u],e);else{n=[];for(_ in c)for(l=c[_].target.parentNode;l;)l===t&&(n=n.concat(c[_].tweens)),l=l.parentNode;for(p=n.length,u=0;p>u;u++)e&&n[u].totalTime(n[u].totalDuration()),n[u]._enabled(!1,!1)}}};var c=function(t,i,s,r){i=i!==!1,s=s!==!1,r=r!==!1;for(var n,a,o=p(r),h=i&&s&&r,l=o.length;--l>-1;)a=o[l],(h||a instanceof e||(n=a.target===a.vars.onComplete)&&s||i&&!n)&&a.paused(t)};return r.pauseAll=function(t,e,i){c(!0,t,e,i)},r.resumeAll=function(t,e,i){c(!1,t,e,i)},r.globalTimeScale=function(e){var s=t._rootTimeline,r=i.ticker.time;return arguments.length?(e=e||n,s._startTime=r-(r-s._startTime)*s._timeScale/e,s=t._rootFramesTimeline,r=i.ticker.frame,s._startTime=r-(r-s._startTime)*s._timeScale/e,s._timeScale=t._rootTimeline._timeScale=e,e):s._timeScale},l.progress=function(t){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&0!==(1&this._cycle)?1-t:t)+this._cycle*(this._duration+this._repeatDelay),!1):this._time/this.duration()},l.totalProgress=function(t){return arguments.length?this.totalTime(this.totalDuration()*t,!1):this._totalTime/this.totalDuration()},l.time=function(t,e){return arguments.length?(this._dirty&&this.totalDuration(),t>this._duration&&(t=this._duration),this._yoyo&&0!==(1&this._cycle)?t=this._duration-t+this._cycle*(this._duration+this._repeatDelay):0!==this._repeat&&(t+=this._cycle*(this._duration+this._repeatDelay)),this.totalTime(t,e)):this._time},l.duration=function(e){return arguments.length?t.prototype.duration.call(this,e):this._duration},l.totalDuration=function(t){return arguments.length?-1===this._repeat?this:this.duration((t-this._repeat*this._repeatDelay)/(this._repeat+1)):(this._dirty&&(this._totalDuration=-1===this._repeat?999999999999:this._duration*(this._repeat+1)+this._repeatDelay*this._repeat,this._dirty=!1),this._totalDuration)},l.repeat=function(t){return arguments.length?(this._repeat=t,this._uncache(!0)):this._repeat},l.repeatDelay=function(t){return arguments.length?(this._repeatDelay=t,this._uncache(!0)):this._repeatDelay},l.yoyo=function(t){return arguments.length?(this._yoyo=t,this):this._yoyo},r},!0),_gsScope._gsDefine("TimelineLite",["core.Animation","core.SimpleTimeline","TweenLite"],function(t,e,i){var s=function(t){e.call(this,t),this._labels={},this.autoRemoveChildren=this.vars.autoRemoveChildren===!0,this.smoothChildTiming=this.vars.smoothChildTiming===!0,this._sortChildren=!0,this._onUpdate=this.vars.onUpdate;var i,s,r=this.vars;for(s in r)i=r[s],o(i)&&-1!==i.join("").indexOf("{self}")&&(r[s]=this._swapSelfInParams(i));o(r.tweens)&&this.add(r.tweens,0,r.align,r.stagger)},r=1e-10,n=i._internals,a=n.isSelector,o=n.isArray,h=n.lazyTweens,l=n.lazyRender,_=[],u=_gsScope._gsDefine.globals,p=function(t){var e,i={};for(e in t)i[e]=t[e];return i},c=function(t,e,i,s){var r=t._timeline._totalTime;(e||!this._forcingPlayhead)&&(t._timeline.pause(t._startTime),e&&e.apply(s||t._timeline,i||_),this._forcingPlayhead&&t._timeline.seek(r))},f=function(t){var e,i=[],s=t.length;for(e=0;e!==s;i.push(t[e++]));return i},m=s.prototype=new e;return s.version="1.14.1",m.constructor=s,m.kill()._gc=m._forcingPlayhead=!1,m.to=function(t,e,s,r){var n=s.repeat&&u.TweenMax||i;return e?this.add(new n(t,e,s),r):this.set(t,s,r)},m.from=function(t,e,s,r){return this.add((s.repeat&&u.TweenMax||i).from(t,e,s),r)},m.fromTo=function(t,e,s,r,n){var a=r.repeat&&u.TweenMax||i;return e?this.add(a.fromTo(t,e,s,r),n):this.set(t,r,n)},m.staggerTo=function(t,e,r,n,o,h,l,_){var u,c=new s({onComplete:h,onCompleteParams:l,onCompleteScope:_,smoothChildTiming:this.smoothChildTiming});for("string"==typeof t&&(t=i.selector(t)||t),t=t||[],a(t)&&(t=f(t)),n=n||0,0>n&&(t=f(t),t.reverse(),n*=-1),u=0;t.length>u;u++)r.startAt&&(r.startAt=p(r.startAt)),c.to(t[u],e,p(r),u*n);return this.add(c,o)},m.staggerFrom=function(t,e,i,s,r,n,a,o){return i.immediateRender=0!=i.immediateRender,i.runBackwards=!0,this.staggerTo(t,e,i,s,r,n,a,o)},m.staggerFromTo=function(t,e,i,s,r,n,a,o,h){return s.startAt=i,s.immediateRender=0!=s.immediateRender&&0!=i.immediateRender,this.staggerTo(t,e,s,r,n,a,o,h)},m.call=function(t,e,s,r){return this.add(i.delayedCall(0,t,e,s),r)},m.set=function(t,e,s){return s=this._parseTimeOrLabel(s,0,!0),null==e.immediateRender&&(e.immediateRender=s===this._time&&!this._paused),this.add(new i(t,0,e),s)},s.exportRoot=function(t,e){t=t||{},null==t.smoothChildTiming&&(t.smoothChildTiming=!0);var r,n,a=new s(t),o=a._timeline;for(null==e&&(e=!0),o._remove(a,!0),a._startTime=0,a._rawPrevTime=a._time=a._totalTime=o._time,r=o._first;r;)n=r._next,e&&r instanceof i&&r.target===r.vars.onComplete||a.add(r,r._startTime-r._delay),r=n;return o.add(a,0),a},m.add=function(r,n,a,h){var l,_,u,p,c,f;if("number"!=typeof n&&(n=this._parseTimeOrLabel(n,0,!0,r)),!(r instanceof t)){if(r instanceof Array||r&&r.push&&o(r)){for(a=a||"normal",h=h||0,l=n,_=r.length,u=0;_>u;u++)o(p=r[u])&&(p=new s({tweens:p})),this.add(p,l),"string"!=typeof p&&"function"!=typeof p&&("sequence"===a?l=p._startTime+p.totalDuration()/p._timeScale:"start"===a&&(p._startTime-=p.delay())),l+=h;return this._uncache(!0)}if("string"==typeof r)return this.addLabel(r,n);if("function"!=typeof r)throw"Cannot add "+r+" into the timeline; it is not a tween, timeline, function, or string.";r=i.delayedCall(0,r)}if(e.prototype.add.call(this,r,n),(this._gc||this._time===this._duration)&&!this._paused&&this._duration<this.duration())for(c=this,f=c.rawTime()>r._startTime;c._timeline;)f&&c._timeline.smoothChildTiming?c.totalTime(c._totalTime,!0):c._gc&&c._enabled(!0,!1),c=c._timeline;return this},m.remove=function(e){if(e instanceof t)return this._remove(e,!1);if(e instanceof Array||e&&e.push&&o(e)){for(var i=e.length;--i>-1;)this.remove(e[i]);return this}return"string"==typeof e?this.removeLabel(e):this.kill(null,e)},m._remove=function(t,i){e.prototype._remove.call(this,t,i);var s=this._last;return s?this._time>s._startTime+s._totalDuration/s._timeScale&&(this._time=this.duration(),this._totalTime=this._totalDuration):this._time=this._totalTime=this._duration=this._totalDuration=0,this},m.append=function(t,e){return this.add(t,this._parseTimeOrLabel(null,e,!0,t))},m.insert=m.insertMultiple=function(t,e,i,s){return this.add(t,e||0,i,s)},m.appendMultiple=function(t,e,i,s){return this.add(t,this._parseTimeOrLabel(null,e,!0,t),i,s)},m.addLabel=function(t,e){return this._labels[t]=this._parseTimeOrLabel(e),this},m.addPause=function(t,e,i,s){return this.call(c,["{self}",e,i,s],this,t)},m.removeLabel=function(t){return delete this._labels[t],this},m.getLabelTime=function(t){return null!=this._labels[t]?this._labels[t]:-1},m._parseTimeOrLabel=function(e,i,s,r){var n;if(r instanceof t&&r.timeline===this)this.remove(r);else if(r&&(r instanceof Array||r.push&&o(r)))for(n=r.length;--n>-1;)r[n]instanceof t&&r[n].timeline===this&&this.remove(r[n]);if("string"==typeof i)return this._parseTimeOrLabel(i,s&&"number"==typeof e&&null==this._labels[i]?e-this.duration():0,s);if(i=i||0,"string"!=typeof e||!isNaN(e)&&null==this._labels[e])null==e&&(e=this.duration());else{if(n=e.indexOf("="),-1===n)return null==this._labels[e]?s?this._labels[e]=this.duration()+i:i:this._labels[e]+i;i=parseInt(e.charAt(n-1)+"1",10)*Number(e.substr(n+1)),e=n>1?this._parseTimeOrLabel(e.substr(0,n-1),0,s):this.duration()}return Number(e)+i},m.seek=function(t,e){return this.totalTime("number"==typeof t?t:this._parseTimeOrLabel(t),e!==!1)},m.stop=function(){return this.paused(!0)},m.gotoAndPlay=function(t,e){return this.play(t,e)},m.gotoAndStop=function(t,e){return this.pause(t,e)},m.render=function(t,e,i){this._gc&&this._enabled(!0,!1);var s,n,a,o,u,p=this._dirty?this.totalDuration():this._totalDuration,c=this._time,f=this._startTime,m=this._timeScale,d=this._paused;if(t>=p?(this._totalTime=this._time=p,this._reversed||this._hasPausedChild()||(n=!0,o="onComplete",0===this._duration&&(0===t||0>this._rawPrevTime||this._rawPrevTime===r)&&this._rawPrevTime!==t&&this._first&&(u=!0,this._rawPrevTime>r&&(o="onReverseComplete"))),this._rawPrevTime=this._duration||!e||t||this._rawPrevTime===t?t:r,t=p+1e-4):1e-7>t?(this._totalTime=this._time=0,(0!==c||0===this._duration&&this._rawPrevTime!==r&&(this._rawPrevTime>0||0>t&&this._rawPrevTime>=0))&&(o="onReverseComplete",n=this._reversed),0>t?(this._active=!1,this._rawPrevTime>=0&&this._first&&(u=!0),this._rawPrevTime=t):(this._rawPrevTime=this._duration||!e||t||this._rawPrevTime===t?t:r,t=0,this._initted||(u=!0))):this._totalTime=this._time=this._rawPrevTime=t,this._time!==c&&this._first||i||u){if(this._initted||(this._initted=!0),this._active||!this._paused&&this._time!==c&&t>0&&(this._active=!0),0===c&&this.vars.onStart&&0!==this._time&&(e||this.vars.onStart.apply(this.vars.onStartScope||this,this.vars.onStartParams||_)),this._time>=c)for(s=this._first;s&&(a=s._next,!this._paused||d);)(s._active||s._startTime<=this._time&&!s._paused&&!s._gc)&&(s._reversed?s.render((s._dirty?s.totalDuration():s._totalDuration)-(t-s._startTime)*s._timeScale,e,i):s.render((t-s._startTime)*s._timeScale,e,i)),s=a;else for(s=this._last;s&&(a=s._prev,!this._paused||d);)(s._active||c>=s._startTime&&!s._paused&&!s._gc)&&(s._reversed?s.render((s._dirty?s.totalDuration():s._totalDuration)-(t-s._startTime)*s._timeScale,e,i):s.render((t-s._startTime)*s._timeScale,e,i)),s=a;this._onUpdate&&(e||(h.length&&l(),this._onUpdate.apply(this.vars.onUpdateScope||this,this.vars.onUpdateParams||_))),o&&(this._gc||(f===this._startTime||m!==this._timeScale)&&(0===this._time||p>=this.totalDuration())&&(n&&(h.length&&l(),this._timeline.autoRemoveChildren&&this._enabled(!1,!1),this._active=!1),!e&&this.vars[o]&&this.vars[o].apply(this.vars[o+"Scope"]||this,this.vars[o+"Params"]||_)))}},m._hasPausedChild=function(){for(var t=this._first;t;){if(t._paused||t instanceof s&&t._hasPausedChild())return!0;t=t._next}return!1},m.getChildren=function(t,e,s,r){r=r||-9999999999;for(var n=[],a=this._first,o=0;a;)r>a._startTime||(a instanceof i?e!==!1&&(n[o++]=a):(s!==!1&&(n[o++]=a),t!==!1&&(n=n.concat(a.getChildren(!0,e,s)),o=n.length))),a=a._next;return n},m.getTweensOf=function(t,e){var s,r,n=this._gc,a=[],o=0;for(n&&this._enabled(!0,!0),s=i.getTweensOf(t),r=s.length;--r>-1;)(s[r].timeline===this||e&&this._contains(s[r]))&&(a[o++]=s[r]);return n&&this._enabled(!1,!0),a},m.recent=function(){return this._recent},m._contains=function(t){for(var e=t.timeline;e;){if(e===this)return!0;e=e.timeline}return!1},m.shiftChildren=function(t,e,i){i=i||0;for(var s,r=this._first,n=this._labels;r;)r._startTime>=i&&(r._startTime+=t),r=r._next;if(e)for(s in n)n[s]>=i&&(n[s]+=t);return this._uncache(!0)},m._kill=function(t,e){if(!t&&!e)return this._enabled(!1,!1);for(var i=e?this.getTweensOf(e):this.getChildren(!0,!0,!1),s=i.length,r=!1;--s>-1;)i[s]._kill(t,e)&&(r=!0);return r},m.clear=function(t){var e=this.getChildren(!1,!0,!0),i=e.length;for(this._time=this._totalTime=0;--i>-1;)e[i]._enabled(!1,!1);return t!==!1&&(this._labels={}),this._uncache(!0)},m.invalidate=function(){for(var e=this._first;e;)e.invalidate(),e=e._next;return t.prototype.invalidate.call(this)},m._enabled=function(t,i){if(t===this._gc)for(var s=this._first;s;)s._enabled(t,!0),s=s._next;return e.prototype._enabled.call(this,t,i)},m.totalTime=function(){this._forcingPlayhead=!0;var e=t.prototype.totalTime.apply(this,arguments);return this._forcingPlayhead=!1,e},m.duration=function(t){return arguments.length?(0!==this.duration()&&0!==t&&this.timeScale(this._duration/t),this):(this._dirty&&this.totalDuration(),this._duration)},m.totalDuration=function(t){if(!arguments.length){if(this._dirty){for(var e,i,s=0,r=this._last,n=999999999999;r;)e=r._prev,r._dirty&&r.totalDuration(),r._startTime>n&&this._sortChildren&&!r._paused?this.add(r,r._startTime-r._delay):n=r._startTime,0>r._startTime&&!r._paused&&(s-=r._startTime,this._timeline.smoothChildTiming&&(this._startTime+=r._startTime/this._timeScale),this.shiftChildren(-r._startTime,!1,-9999999999),n=0),i=r._startTime+r._totalDuration/r._timeScale,i>s&&(s=i),r=e;this._duration=this._totalDuration=s,this._dirty=!1}return this._totalDuration}return 0!==this.totalDuration()&&0!==t&&this.timeScale(this._totalDuration/t),this},m.usesFrames=function(){for(var e=this._timeline;e._timeline;)e=e._timeline;return e===t._rootFramesTimeline},m.rawTime=function(){return this._paused?this._totalTime:(this._timeline.rawTime()-this._startTime)*this._timeScale},s},!0),_gsScope._gsDefine("TimelineMax",["TimelineLite","TweenLite","easing.Ease"],function(t,e,i){var s=function(e){t.call(this,e),this._repeat=this.vars.repeat||0,this._repeatDelay=this.vars.repeatDelay||0,this._cycle=0,this._yoyo=this.vars.yoyo===!0,this._dirty=!0},r=1e-10,n=[],a=e._internals,o=a.lazyTweens,h=a.lazyRender,l=new i(null,null,1,0),_=s.prototype=new t;return _.constructor=s,_.kill()._gc=!1,s.version="1.14.1",_.invalidate=function(){return this._yoyo=this.vars.yoyo===!0,this._repeat=this.vars.repeat||0,this._repeatDelay=this.vars.repeatDelay||0,this._uncache(!0),t.prototype.invalidate.call(this)},_.addCallback=function(t,i,s,r){return this.add(e.delayedCall(0,t,s,r),i)},_.removeCallback=function(t,e){if(t)if(null==e)this._kill(null,t);else for(var i=this.getTweensOf(t,!1),s=i.length,r=this._parseTimeOrLabel(e);--s>-1;)i[s]._startTime===r&&i[s]._enabled(!1,!1);return this},_.tweenTo=function(t,i){i=i||{};var s,r,a,o={ease:l,overwrite:i.delay?2:1,useFrames:this.usesFrames(),immediateRender:!1};for(r in i)o[r]=i[r];return o.time=this._parseTimeOrLabel(t),s=Math.abs(Number(o.time)-this._time)/this._timeScale||.001,a=new e(this,s,o),o.onStart=function(){a.target.paused(!0),a.vars.time!==a.target.time()&&s===a.duration()&&a.duration(Math.abs(a.vars.time-a.target.time())/a.target._timeScale),i.onStart&&i.onStart.apply(i.onStartScope||a,i.onStartParams||n)},a},_.tweenFromTo=function(t,e,i){i=i||{},t=this._parseTimeOrLabel(t),i.startAt={onComplete:this.seek,onCompleteParams:[t],onCompleteScope:this},i.immediateRender=i.immediateRender!==!1;var s=this.tweenTo(e,i);return s.duration(Math.abs(s.vars.time-t)/this._timeScale||.001)},_.render=function(t,e,i){this._gc&&this._enabled(!0,!1);var s,a,l,_,u,p,c=this._dirty?this.totalDuration():this._totalDuration,f=this._duration,m=this._time,d=this._totalTime,g=this._startTime,v=this._timeScale,y=this._rawPrevTime,T=this._paused,w=this._cycle;if(t>=c?(this._locked||(this._totalTime=c,this._cycle=this._repeat),this._reversed||this._hasPausedChild()||(a=!0,_="onComplete",0===this._duration&&(0===t||0>y||y===r)&&y!==t&&this._first&&(u=!0,y>r&&(_="onReverseComplete"))),this._rawPrevTime=this._duration||!e||t||this._rawPrevTime===t?t:r,this._yoyo&&0!==(1&this._cycle)?this._time=t=0:(this._time=f,t=f+1e-4)):1e-7>t?(this._locked||(this._totalTime=this._cycle=0),this._time=0,(0!==m||0===f&&y!==r&&(y>0||0>t&&y>=0)&&!this._locked)&&(_="onReverseComplete",a=this._reversed),0>t?(this._active=!1,y>=0&&this._first&&(u=!0),this._rawPrevTime=t):(this._rawPrevTime=f||!e||t||this._rawPrevTime===t?t:r,t=0,this._initted||(u=!0))):(0===f&&0>y&&(u=!0),this._time=this._rawPrevTime=t,this._locked||(this._totalTime=t,0!==this._repeat&&(p=f+this._repeatDelay,this._cycle=this._totalTime/p>>0,0!==this._cycle&&this._cycle===this._totalTime/p&&this._cycle--,this._time=this._totalTime-this._cycle*p,this._yoyo&&0!==(1&this._cycle)&&(this._time=f-this._time),this._time>f?(this._time=f,t=f+1e-4):0>this._time?this._time=t=0:t=this._time))),this._cycle!==w&&!this._locked){var x=this._yoyo&&0!==(1&w),b=x===(this._yoyo&&0!==(1&this._cycle)),P=this._totalTime,S=this._cycle,k=this._rawPrevTime,R=this._time;if(this._totalTime=w*f,w>this._cycle?x=!x:this._totalTime+=f,this._time=m,this._rawPrevTime=0===f?y-1e-4:y,this._cycle=w,this._locked=!0,m=x?0:f,this.render(m,e,0===f),e||this._gc||this.vars.onRepeat&&this.vars.onRepeat.apply(this.vars.onRepeatScope||this,this.vars.onRepeatParams||n),b&&(m=x?f+1e-4:-1e-4,this.render(m,!0,!1)),this._locked=!1,this._paused&&!T)return;this._time=R,this._totalTime=P,this._cycle=S,this._rawPrevTime=k}if(!(this._time!==m&&this._first||i||u))return d!==this._totalTime&&this._onUpdate&&(e||this._onUpdate.apply(this.vars.onUpdateScope||this,this.vars.onUpdateParams||n)),void 0;if(this._initted||(this._initted=!0),this._active||!this._paused&&this._totalTime!==d&&t>0&&(this._active=!0),0===d&&this.vars.onStart&&0!==this._totalTime&&(e||this.vars.onStart.apply(this.vars.onStartScope||this,this.vars.onStartParams||n)),this._time>=m)for(s=this._first;s&&(l=s._next,!this._paused||T);)(s._active||s._startTime<=this._time&&!s._paused&&!s._gc)&&(s._reversed?s.render((s._dirty?s.totalDuration():s._totalDuration)-(t-s._startTime)*s._timeScale,e,i):s.render((t-s._startTime)*s._timeScale,e,i)),s=l;else for(s=this._last;s&&(l=s._prev,!this._paused||T);)(s._active||m>=s._startTime&&!s._paused&&!s._gc)&&(s._reversed?s.render((s._dirty?s.totalDuration():s._totalDuration)-(t-s._startTime)*s._timeScale,e,i):s.render((t-s._startTime)*s._timeScale,e,i)),s=l;this._onUpdate&&(e||(o.length&&h(),this._onUpdate.apply(this.vars.onUpdateScope||this,this.vars.onUpdateParams||n))),_&&(this._locked||this._gc||(g===this._startTime||v!==this._timeScale)&&(0===this._time||c>=this.totalDuration())&&(a&&(o.length&&h(),this._timeline.autoRemoveChildren&&this._enabled(!1,!1),this._active=!1),!e&&this.vars[_]&&this.vars[_].apply(this.vars[_+"Scope"]||this,this.vars[_+"Params"]||n)))},_.getActive=function(t,e,i){null==t&&(t=!0),null==e&&(e=!0),null==i&&(i=!1);var s,r,n=[],a=this.getChildren(t,e,i),o=0,h=a.length;for(s=0;h>s;s++)r=a[s],r.isActive()&&(n[o++]=r);return n},_.getLabelAfter=function(t){t||0!==t&&(t=this._time);var e,i=this.getLabelsArray(),s=i.length;for(e=0;s>e;e++)if(i[e].time>t)return i[e].name;return null},_.getLabelBefore=function(t){null==t&&(t=this._time);for(var e=this.getLabelsArray(),i=e.length;--i>-1;)if(t>e[i].time)return e[i].name;return null},_.getLabelsArray=function(){var t,e=[],i=0;for(t in this._labels)e[i++]={time:this._labels[t],name:t};return e.sort(function(t,e){return t.time-e.time}),e},_.progress=function(t,e){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&0!==(1&this._cycle)?1-t:t)+this._cycle*(this._duration+this._repeatDelay),e):this._time/this.duration()},_.totalProgress=function(t,e){return arguments.length?this.totalTime(this.totalDuration()*t,e):this._totalTime/this.totalDuration()},_.totalDuration=function(e){return arguments.length?-1===this._repeat?this:this.duration((e-this._repeat*this._repeatDelay)/(this._repeat+1)):(this._dirty&&(t.prototype.totalDuration.call(this),this._totalDuration=-1===this._repeat?999999999999:this._duration*(this._repeat+1)+this._repeatDelay*this._repeat),this._totalDuration)},_.time=function(t,e){return arguments.length?(this._dirty&&this.totalDuration(),t>this._duration&&(t=this._duration),this._yoyo&&0!==(1&this._cycle)?t=this._duration-t+this._cycle*(this._duration+this._repeatDelay):0!==this._repeat&&(t+=this._cycle*(this._duration+this._repeatDelay)),this.totalTime(t,e)):this._time},_.repeat=function(t){return arguments.length?(this._repeat=t,this._uncache(!0)):this._repeat},_.repeatDelay=function(t){return arguments.length?(this._repeatDelay=t,this._uncache(!0)):this._repeatDelay},_.yoyo=function(t){return arguments.length?(this._yoyo=t,this):this._yoyo},_.currentLabel=function(t){return arguments.length?this.seek(t,!0):this.getLabelBefore(this._time+1e-8)},s},!0),function(){var t=180/Math.PI,e=[],i=[],s=[],r={},n=function(t,e,i,s){this.a=t,this.b=e,this.c=i,this.d=s,this.da=s-t,this.ca=i-t,this.ba=e-t},a=",x,y,z,left,top,right,bottom,marginTop,marginLeft,marginRight,marginBottom,paddingLeft,paddingTop,paddingRight,paddingBottom,backgroundPosition,backgroundPosition_y,",o=function(t,e,i,s){var r={a:t},n={},a={},o={c:s},h=(t+e)/2,l=(e+i)/2,_=(i+s)/2,u=(h+l)/2,p=(l+_)/2,c=(p-u)/8;return r.b=h+(t-h)/4,n.b=u+c,r.c=n.a=(r.b+n.b)/2,n.c=a.a=(u+p)/2,a.b=p-c,o.b=_+(s-_)/4,a.c=o.a=(a.b+o.b)/2,[r,n,a,o]},h=function(t,r,n,a,h){var l,_,u,p,c,f,m,d,g,v,y,T,w,x=t.length-1,b=0,P=t[0].a;for(l=0;x>l;l++)c=t[b],_=c.a,u=c.d,p=t[b+1].d,h?(y=e[l],T=i[l],w=.25*(T+y)*r/(a?.5:s[l]||.5),f=u-(u-_)*(a?.5*r:0!==y?w/y:0),m=u+(p-u)*(a?.5*r:0!==T?w/T:0),d=u-(f+((m-f)*(3*y/(y+T)+.5)/4||0))):(f=u-.5*(u-_)*r,m=u+.5*(p-u)*r,d=u-(f+m)/2),f+=d,m+=d,c.c=g=f,c.b=0!==l?P:P=c.a+.6*(c.c-c.a),c.da=u-_,c.ca=g-_,c.ba=P-_,n?(v=o(_,P,g,u),t.splice(b,1,v[0],v[1],v[2],v[3]),b+=4):b++,P=m;c=t[b],c.b=P,c.c=P+.4*(c.d-P),c.da=c.d-c.a,c.ca=c.c-c.a,c.ba=P-c.a,n&&(v=o(c.a,P,c.c,c.d),t.splice(b,1,v[0],v[1],v[2],v[3]))},l=function(t,s,r,a){var o,h,l,_,u,p,c=[];if(a)for(t=[a].concat(t),h=t.length;--h>-1;)"string"==typeof(p=t[h][s])&&"="===p.charAt(1)&&(t[h][s]=a[s]+Number(p.charAt(0)+p.substr(2)));if(o=t.length-2,0>o)return c[0]=new n(t[0][s],0,0,t[-1>o?0:1][s]),c;for(h=0;o>h;h++)l=t[h][s],_=t[h+1][s],c[h]=new n(l,0,0,_),r&&(u=t[h+2][s],e[h]=(e[h]||0)+(_-l)*(_-l),i[h]=(i[h]||0)+(u-_)*(u-_));return c[h]=new n(t[h][s],0,0,t[h+1][s]),c},_=function(t,n,o,_,u,p){var c,f,m,d,g,v,y,T,w={},x=[],b=p||t[0];u="string"==typeof u?","+u+",":a,null==n&&(n=1);for(f in t[0])x.push(f);if(t.length>1){for(T=t[t.length-1],y=!0,c=x.length;--c>-1;)if(f=x[c],Math.abs(b[f]-T[f])>.05){y=!1;break}y&&(t=t.concat(),p&&t.unshift(p),t.push(t[1]),p=t[t.length-3])}for(e.length=i.length=s.length=0,c=x.length;--c>-1;)f=x[c],r[f]=-1!==u.indexOf(","+f+","),w[f]=l(t,f,r[f],p);for(c=e.length;--c>-1;)e[c]=Math.sqrt(e[c]),i[c]=Math.sqrt(i[c]);if(!_){for(c=x.length;--c>-1;)if(r[f])for(m=w[x[c]],v=m.length-1,d=0;v>d;d++)g=m[d+1].da/i[d]+m[d].da/e[d],s[d]=(s[d]||0)+g*g;for(c=s.length;--c>-1;)s[c]=Math.sqrt(s[c])}for(c=x.length,d=o?4:1;--c>-1;)f=x[c],m=w[f],h(m,n,o,_,r[f]),y&&(m.splice(0,d),m.splice(m.length-d,d));return w},u=function(t,e,i){e=e||"soft";var s,r,a,o,h,l,_,u,p,c,f,m={},d="cubic"===e?3:2,g="soft"===e,v=[];if(g&&i&&(t=[i].concat(t)),null==t||d+1>t.length)throw"invalid Bezier data";for(p in t[0])v.push(p);for(l=v.length;--l>-1;){for(p=v[l],m[p]=h=[],c=0,u=t.length,_=0;u>_;_++)s=null==i?t[_][p]:"string"==typeof(f=t[_][p])&&"="===f.charAt(1)?i[p]+Number(f.charAt(0)+f.substr(2)):Number(f),g&&_>1&&u-1>_&&(h[c++]=(s+h[c-2])/2),h[c++]=s;for(u=c-d+1,c=0,_=0;u>_;_+=d)s=h[_],r=h[_+1],a=h[_+2],o=2===d?0:h[_+3],h[c++]=f=3===d?new n(s,r,a,o):new n(s,(2*r+s)/3,(2*r+a)/3,a);h.length=c}return m},p=function(t,e,i){for(var s,r,n,a,o,h,l,_,u,p,c,f=1/i,m=t.length;--m>-1;)for(p=t[m],n=p.a,a=p.d-n,o=p.c-n,h=p.b-n,s=r=0,_=1;i>=_;_++)l=f*_,u=1-l,s=r-(r=(l*l*a+3*u*(l*o+u*h))*l),c=m*i+_-1,e[c]=(e[c]||0)+s*s},c=function(t,e){e=e>>0||6;var i,s,r,n,a=[],o=[],h=0,l=0,_=e-1,u=[],c=[];for(i in t)p(t[i],a,e);for(r=a.length,s=0;r>s;s++)h+=Math.sqrt(a[s]),n=s%e,c[n]=h,n===_&&(l+=h,n=s/e>>0,u[n]=c,o[n]=l,h=0,c=[]);return{length:l,lengths:o,segments:u}},f=_gsScope._gsDefine.plugin({propName:"bezier",priority:-1,version:"1.3.3",API:2,global:!0,init:function(t,e,i){this._target=t,e instanceof Array&&(e={values:e}),this._func={},this._round={},this._props=[],this._timeRes=null==e.timeResolution?6:parseInt(e.timeResolution,10);var s,r,n,a,o,h=e.values||[],l={},p=h[0],f=e.autoRotate||i.vars.orientToBezier;this._autoRotate=f?f instanceof Array?f:[["x","y","rotation",f===!0?0:Number(f)||0]]:null;for(s in p)this._props.push(s);for(n=this._props.length;--n>-1;)s=this._props[n],this._overwriteProps.push(s),r=this._func[s]="function"==typeof t[s],l[s]=r?t[s.indexOf("set")||"function"!=typeof t["get"+s.substr(3)]?s:"get"+s.substr(3)]():parseFloat(t[s]),o||l[s]!==h[0][s]&&(o=l);if(this._beziers="cubic"!==e.type&&"quadratic"!==e.type&&"soft"!==e.type?_(h,isNaN(e.curviness)?1:e.curviness,!1,"thruBasic"===e.type,e.correlate,o):u(h,e.type,l),this._segCount=this._beziers[s].length,this._timeRes){var m=c(this._beziers,this._timeRes);this._length=m.length,this._lengths=m.lengths,this._segments=m.segments,this._l1=this._li=this._s1=this._si=0,this._l2=this._lengths[0],this._curSeg=this._segments[0],this._s2=this._curSeg[0],this._prec=1/this._curSeg.length}if(f=this._autoRotate)for(this._initialRotations=[],f[0]instanceof Array||(this._autoRotate=f=[f]),n=f.length;--n>-1;){for(a=0;3>a;a++)s=f[n][a],this._func[s]="function"==typeof t[s]?t[s.indexOf("set")||"function"!=typeof t["get"+s.substr(3)]?s:"get"+s.substr(3)]:!1;s=f[n][2],this._initialRotations[n]=this._func[s]?this._func[s].call(this._target):this._target[s]}return this._startRatio=i.vars.runBackwards?1:0,!0},set:function(e){var i,s,r,n,a,o,h,l,_,u,p=this._segCount,c=this._func,f=this._target,m=e!==this._startRatio;if(this._timeRes){if(_=this._lengths,u=this._curSeg,e*=this._length,r=this._li,e>this._l2&&p-1>r){for(l=p-1;l>r&&e>=(this._l2=_[++r]););this._l1=_[r-1],this._li=r,this._curSeg=u=this._segments[r],this._s2=u[this._s1=this._si=0]}else if(this._l1>e&&r>0){for(;r>0&&(this._l1=_[--r])>=e;);0===r&&this._l1>e?this._l1=0:r++,this._l2=_[r],this._li=r,this._curSeg=u=this._segments[r],this._s1=u[(this._si=u.length-1)-1]||0,this._s2=u[this._si]}if(i=r,e-=this._l1,r=this._si,e>this._s2&&u.length-1>r){for(l=u.length-1;l>r&&e>=(this._s2=u[++r]););this._s1=u[r-1],this._si=r}else if(this._s1>e&&r>0){for(;r>0&&(this._s1=u[--r])>=e;);0===r&&this._s1>e?this._s1=0:r++,this._s2=u[r],this._si=r
}o=(r+(e-this._s1)/(this._s2-this._s1))*this._prec}else i=0>e?0:e>=1?p-1:p*e>>0,o=(e-i*(1/p))*p;for(s=1-o,r=this._props.length;--r>-1;)n=this._props[r],a=this._beziers[n][i],h=(o*o*a.da+3*s*(o*a.ca+s*a.ba))*o+a.a,this._round[n]&&(h=Math.round(h)),c[n]?f[n](h):f[n]=h;if(this._autoRotate){var d,g,v,y,T,w,x,b=this._autoRotate;for(r=b.length;--r>-1;)n=b[r][2],w=b[r][3]||0,x=b[r][4]===!0?1:t,a=this._beziers[b[r][0]],d=this._beziers[b[r][1]],a&&d&&(a=a[i],d=d[i],g=a.a+(a.b-a.a)*o,y=a.b+(a.c-a.b)*o,g+=(y-g)*o,y+=(a.c+(a.d-a.c)*o-y)*o,v=d.a+(d.b-d.a)*o,T=d.b+(d.c-d.b)*o,v+=(T-v)*o,T+=(d.c+(d.d-d.c)*o-T)*o,h=m?Math.atan2(T-v,y-g)*x+w:this._initialRotations[r],c[n]?f[n](h):f[n]=h)}}}),m=f.prototype;f.bezierThrough=_,f.cubicToQuadratic=o,f._autoCSS=!0,f.quadraticToCubic=function(t,e,i){return new n(t,(2*e+t)/3,(2*e+i)/3,i)},f._cssRegister=function(){var t=_gsScope._gsDefine.globals.CSSPlugin;if(t){var e=t._internals,i=e._parseToProxy,s=e._setPluginRatio,r=e.CSSPropTween;e._registerComplexSpecialProp("bezier",{parser:function(t,e,n,a,o,h){e instanceof Array&&(e={values:e}),h=new f;var l,_,u,p=e.values,c=p.length-1,m=[],d={};if(0>c)return o;for(l=0;c>=l;l++)u=i(t,p[l],a,o,h,c!==l),m[l]=u.end;for(_ in e)d[_]=e[_];return d.values=m,o=new r(t,"bezier",0,0,u.pt,2),o.data=u,o.plugin=h,o.setRatio=s,0===d.autoRotate&&(d.autoRotate=!0),!d.autoRotate||d.autoRotate instanceof Array||(l=d.autoRotate===!0?0:Number(d.autoRotate),d.autoRotate=null!=u.end.left?[["left","top","rotation",l,!1]]:null!=u.end.x?[["x","y","rotation",l,!1]]:!1),d.autoRotate&&(a._transform||a._enableTransforms(!1),u.autoRotate=a._target._gsTransform),h._onInitTween(u.proxy,d,a._tween),o}})}},m._roundProps=function(t,e){for(var i=this._overwriteProps,s=i.length;--s>-1;)(t[i[s]]||t.bezier||t.bezierThrough)&&(this._round[i[s]]=e)},m._kill=function(t){var e,i,s=this._props;for(e in this._beziers)if(e in t)for(delete this._beziers[e],delete this._func[e],i=s.length;--i>-1;)s[i]===e&&s.splice(i,1);return this._super._kill.call(this,t)}}(),_gsScope._gsDefine("plugins.CSSPlugin",["plugins.TweenPlugin","TweenLite"],function(t,e){var i,s,r,n,a=function(){t.call(this,"css"),this._overwriteProps.length=0,this.setRatio=a.prototype.setRatio},o={},h=a.prototype=new t("css");h.constructor=a,a.version="1.14.1",a.API=2,a.defaultTransformPerspective=0,a.defaultSkewType="compensated",h="px",a.suffixMap={top:h,right:h,bottom:h,left:h,width:h,height:h,fontSize:h,padding:h,margin:h,perspective:h,lineHeight:""};var l,_,u,p,c,f,m=/(?:\d|\-\d|\.\d|\-\.\d)+/g,d=/(?:\d|\-\d|\.\d|\-\.\d|\+=\d|\-=\d|\+=.\d|\-=\.\d)+/g,g=/(?:\+=|\-=|\-|\b)[\d\-\.]+[a-zA-Z0-9]*(?:%|\b)/gi,v=/[^\d\-\.]/g,y=/(?:\d|\-|\+|=|#|\.)*/g,T=/opacity *= *([^)]*)/i,w=/opacity:([^;]*)/i,x=/alpha\(opacity *=.+?\)/i,b=/^(rgb|hsl)/,P=/([A-Z])/g,S=/-([a-z])/gi,k=/(^(?:url\(\"|url\())|(?:(\"\))$|\)$)/gi,R=function(t,e){return e.toUpperCase()},A=/(?:Left|Right|Width)/i,O=/(M11|M12|M21|M22)=[\d\-\.e]+/gi,C=/progid\:DXImageTransform\.Microsoft\.Matrix\(.+?\)/i,D=/,(?=[^\)]*(?:\(|$))/gi,M=Math.PI/180,z=180/Math.PI,I={},E=document,F=(E.documentElement,E.createElement("div")),L=E.createElement("img"),N=a._internals={_specialProps:o},X=navigator.userAgent,U=function(){var t,e=X.indexOf("Android"),i=E.createElement("div");return u=-1!==X.indexOf("Safari")&&-1===X.indexOf("Chrome")&&(-1===e||Number(X.substr(e+8,1))>3),c=u&&6>Number(X.substr(X.indexOf("Version/")+8,1)),p=-1!==X.indexOf("Firefox"),(/MSIE ([0-9]{1,}[\.0-9]{0,})/.exec(X)||/Trident\/.*rv:([0-9]{1,}[\.0-9]{0,})/.exec(X))&&(f=parseFloat(RegExp.$1)),i.innerHTML="<a style='top:1px;opacity:.55;'>a</a>",t=i.getElementsByTagName("a")[0],t?/^0.55/.test(t.style.opacity):!1}(),Y=function(t){return T.test("string"==typeof t?t:(t.currentStyle?t.currentStyle.filter:t.style.filter)||"")?parseFloat(RegExp.$1)/100:1},j=function(t){window.console&&console.log(t)},B="",q="",V=function(t,e){e=e||F;var i,s,r=e.style;if(void 0!==r[t])return t;for(t=t.charAt(0).toUpperCase()+t.substr(1),i=["O","Moz","ms","Ms","Webkit"],s=5;--s>-1&&void 0===r[i[s]+t];);return s>=0?(q=3===s?"ms":i[s],B="-"+q.toLowerCase()+"-",q+t):null},G=E.defaultView?E.defaultView.getComputedStyle:function(){},W=a.getStyle=function(t,e,i,s,r){var n;return U||"opacity"!==e?(!s&&t.style[e]?n=t.style[e]:(i=i||G(t))?n=i[e]||i.getPropertyValue(e)||i.getPropertyValue(e.replace(P,"-$1").toLowerCase()):t.currentStyle&&(n=t.currentStyle[e]),null==r||n&&"none"!==n&&"auto"!==n&&"auto auto"!==n?n:r):Y(t)},Q=N.convertToPixels=function(t,i,s,r,n){if("px"===r||!r)return s;if("auto"===r||!s)return 0;var o,h,l,_=A.test(i),u=t,p=F.style,c=0>s;if(c&&(s=-s),"%"===r&&-1!==i.indexOf("border"))o=s/100*(_?t.clientWidth:t.clientHeight);else{if(p.cssText="border:0 solid red;position:"+W(t,"position")+";line-height:0;","%"!==r&&u.appendChild)p[_?"borderLeftWidth":"borderTopWidth"]=s+r;else{if(u=t.parentNode||E.body,h=u._gsCache,l=e.ticker.frame,h&&_&&h.time===l)return h.width*s/100;p[_?"width":"height"]=s+r}u.appendChild(F),o=parseFloat(F[_?"offsetWidth":"offsetHeight"]),u.removeChild(F),_&&"%"===r&&a.cacheWidths!==!1&&(h=u._gsCache=u._gsCache||{},h.time=l,h.width=100*(o/s)),0!==o||n||(o=Q(t,i,s,r,!0))}return c?-o:o},Z=N.calculateOffset=function(t,e,i){if("absolute"!==W(t,"position",i))return 0;var s="left"===e?"Left":"Top",r=W(t,"margin"+s,i);return t["offset"+s]-(Q(t,e,parseFloat(r),r.replace(y,""))||0)},$=function(t,e){var i,s,r={};if(e=e||G(t,null))if(i=e.length)for(;--i>-1;)r[e[i].replace(S,R)]=e.getPropertyValue(e[i]);else for(i in e)r[i]=e[i];else if(e=t.currentStyle||t.style)for(i in e)"string"==typeof i&&void 0===r[i]&&(r[i.replace(S,R)]=e[i]);return U||(r.opacity=Y(t)),s=Re(t,e,!1),r.rotation=s.rotation,r.skewX=s.skewX,r.scaleX=s.scaleX,r.scaleY=s.scaleY,r.x=s.x,r.y=s.y,xe&&(r.z=s.z,r.rotationX=s.rotationX,r.rotationY=s.rotationY,r.scaleZ=s.scaleZ),r.filters&&delete r.filters,r},H=function(t,e,i,s,r){var n,a,o,h={},l=t.style;for(a in i)"cssText"!==a&&"length"!==a&&isNaN(a)&&(e[a]!==(n=i[a])||r&&r[a])&&-1===a.indexOf("Origin")&&("number"==typeof n||"string"==typeof n)&&(h[a]="auto"!==n||"left"!==a&&"top"!==a?""!==n&&"auto"!==n&&"none"!==n||"string"!=typeof e[a]||""===e[a].replace(v,"")?n:0:Z(t,a),void 0!==l[a]&&(o=new ue(l,a,l[a],o)));if(s)for(a in s)"className"!==a&&(h[a]=s[a]);return{difs:h,firstMPT:o}},K={width:["Left","Right"],height:["Top","Bottom"]},J=["marginLeft","marginRight","marginTop","marginBottom"],te=function(t,e,i){var s=parseFloat("width"===e?t.offsetWidth:t.offsetHeight),r=K[e],n=r.length;for(i=i||G(t,null);--n>-1;)s-=parseFloat(W(t,"padding"+r[n],i,!0))||0,s-=parseFloat(W(t,"border"+r[n]+"Width",i,!0))||0;return s},ee=function(t,e){(null==t||""===t||"auto"===t||"auto auto"===t)&&(t="0 0");var i=t.split(" "),s=-1!==t.indexOf("left")?"0%":-1!==t.indexOf("right")?"100%":i[0],r=-1!==t.indexOf("top")?"0%":-1!==t.indexOf("bottom")?"100%":i[1];return null==r?r="0":"center"===r&&(r="50%"),("center"===s||isNaN(parseFloat(s))&&-1===(s+"").indexOf("="))&&(s="50%"),e&&(e.oxp=-1!==s.indexOf("%"),e.oyp=-1!==r.indexOf("%"),e.oxr="="===s.charAt(1),e.oyr="="===r.charAt(1),e.ox=parseFloat(s.replace(v,"")),e.oy=parseFloat(r.replace(v,""))),s+" "+r+(i.length>2?" "+i[2]:"")},ie=function(t,e){return"string"==typeof t&&"="===t.charAt(1)?parseInt(t.charAt(0)+"1",10)*parseFloat(t.substr(2)):parseFloat(t)-parseFloat(e)},se=function(t,e){return null==t?e:"string"==typeof t&&"="===t.charAt(1)?parseInt(t.charAt(0)+"1",10)*parseFloat(t.substr(2))+e:parseFloat(t)},re=function(t,e,i,s){var r,n,a,o,h=1e-6;return null==t?o=e:"number"==typeof t?o=t:(r=360,n=t.split("_"),a=Number(n[0].replace(v,""))*(-1===t.indexOf("rad")?1:z)-("="===t.charAt(1)?0:e),n.length&&(s&&(s[i]=e+a),-1!==t.indexOf("short")&&(a%=r,a!==a%(r/2)&&(a=0>a?a+r:a-r)),-1!==t.indexOf("_cw")&&0>a?a=(a+9999999999*r)%r-(0|a/r)*r:-1!==t.indexOf("ccw")&&a>0&&(a=(a-9999999999*r)%r-(0|a/r)*r)),o=e+a),h>o&&o>-h&&(o=0),o},ne={aqua:[0,255,255],lime:[0,255,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,255],navy:[0,0,128],white:[255,255,255],fuchsia:[255,0,255],olive:[128,128,0],yellow:[255,255,0],orange:[255,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[255,0,0],pink:[255,192,203],cyan:[0,255,255],transparent:[255,255,255,0]},ae=function(t,e,i){return t=0>t?t+1:t>1?t-1:t,0|255*(1>6*t?e+6*(i-e)*t:.5>t?i:2>3*t?e+6*(i-e)*(2/3-t):e)+.5},oe=function(t){var e,i,s,r,n,a;return t&&""!==t?"number"==typeof t?[t>>16,255&t>>8,255&t]:(","===t.charAt(t.length-1)&&(t=t.substr(0,t.length-1)),ne[t]?ne[t]:"#"===t.charAt(0)?(4===t.length&&(e=t.charAt(1),i=t.charAt(2),s=t.charAt(3),t="#"+e+e+i+i+s+s),t=parseInt(t.substr(1),16),[t>>16,255&t>>8,255&t]):"hsl"===t.substr(0,3)?(t=t.match(m),r=Number(t[0])%360/360,n=Number(t[1])/100,a=Number(t[2])/100,i=.5>=a?a*(n+1):a+n-a*n,e=2*a-i,t.length>3&&(t[3]=Number(t[3])),t[0]=ae(r+1/3,e,i),t[1]=ae(r,e,i),t[2]=ae(r-1/3,e,i),t):(t=t.match(m)||ne.transparent,t[0]=Number(t[0]),t[1]=Number(t[1]),t[2]=Number(t[2]),t.length>3&&(t[3]=Number(t[3])),t)):ne.black},he="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#.+?\\b";for(h in ne)he+="|"+h+"\\b";he=RegExp(he+")","gi");var le=function(t,e,i,s){if(null==t)return function(t){return t};var r,n=e?(t.match(he)||[""])[0]:"",a=t.split(n).join("").match(g)||[],o=t.substr(0,t.indexOf(a[0])),h=")"===t.charAt(t.length-1)?")":"",l=-1!==t.indexOf(" ")?" ":",",_=a.length,u=_>0?a[0].replace(m,""):"";return _?r=e?function(t){var e,p,c,f;if("number"==typeof t)t+=u;else if(s&&D.test(t)){for(f=t.replace(D,"|").split("|"),c=0;f.length>c;c++)f[c]=r(f[c]);return f.join(",")}if(e=(t.match(he)||[n])[0],p=t.split(e).join("").match(g)||[],c=p.length,_>c--)for(;_>++c;)p[c]=i?p[0|(c-1)/2]:a[c];return o+p.join(l)+l+e+h+(-1!==t.indexOf("inset")?" inset":"")}:function(t){var e,n,p;if("number"==typeof t)t+=u;else if(s&&D.test(t)){for(n=t.replace(D,"|").split("|"),p=0;n.length>p;p++)n[p]=r(n[p]);return n.join(",")}if(e=t.match(g)||[],p=e.length,_>p--)for(;_>++p;)e[p]=i?e[0|(p-1)/2]:a[p];return o+e.join(l)+h}:function(t){return t}},_e=function(t){return t=t.split(","),function(e,i,s,r,n,a,o){var h,l=(i+"").split(" ");for(o={},h=0;4>h;h++)o[t[h]]=l[h]=l[h]||l[(h-1)/2>>0];return r.parse(e,o,n,a)}},ue=(N._setPluginRatio=function(t){this.plugin.setRatio(t);for(var e,i,s,r,n=this.data,a=n.proxy,o=n.firstMPT,h=1e-6;o;)e=a[o.v],o.r?e=Math.round(e):h>e&&e>-h&&(e=0),o.t[o.p]=e,o=o._next;if(n.autoRotate&&(n.autoRotate.rotation=a.rotation),1===t)for(o=n.firstMPT;o;){if(i=o.t,i.type){if(1===i.type){for(r=i.xs0+i.s+i.xs1,s=1;i.l>s;s++)r+=i["xn"+s]+i["xs"+(s+1)];i.e=r}}else i.e=i.s+i.xs0;o=o._next}},function(t,e,i,s,r){this.t=t,this.p=e,this.v=i,this.r=r,s&&(s._prev=this,this._next=s)}),pe=(N._parseToProxy=function(t,e,i,s,r,n){var a,o,h,l,_,u=s,p={},c={},f=i._transform,m=I;for(i._transform=null,I=e,s=_=i.parse(t,e,s,r),I=m,n&&(i._transform=f,u&&(u._prev=null,u._prev&&(u._prev._next=null)));s&&s!==u;){if(1>=s.type&&(o=s.p,c[o]=s.s+s.c,p[o]=s.s,n||(l=new ue(s,"s",o,l,s.r),s.c=0),1===s.type))for(a=s.l;--a>0;)h="xn"+a,o=s.p+"_"+h,c[o]=s.data[h],p[o]=s[h],n||(l=new ue(s,h,o,l,s.rxp[h]));s=s._next}return{proxy:p,end:c,firstMPT:l,pt:_}},N.CSSPropTween=function(t,e,s,r,a,o,h,l,_,u,p){this.t=t,this.p=e,this.s=s,this.c=r,this.n=h||e,t instanceof pe||n.push(this.n),this.r=l,this.type=o||0,_&&(this.pr=_,i=!0),this.b=void 0===u?s:u,this.e=void 0===p?s+r:p,a&&(this._next=a,a._prev=this)}),ce=a.parseComplex=function(t,e,i,s,r,n,a,o,h,_){i=i||n||"",a=new pe(t,e,0,0,a,_?2:1,null,!1,o,i,s),s+="";var u,p,c,f,g,v,y,T,w,x,P,S,k=i.split(", ").join(",").split(" "),R=s.split(", ").join(",").split(" "),A=k.length,O=l!==!1;for((-1!==s.indexOf(",")||-1!==i.indexOf(","))&&(k=k.join(" ").replace(D,", ").split(" "),R=R.join(" ").replace(D,", ").split(" "),A=k.length),A!==R.length&&(k=(n||"").split(" "),A=k.length),a.plugin=h,a.setRatio=_,u=0;A>u;u++)if(f=k[u],g=R[u],T=parseFloat(f),T||0===T)a.appendXtra("",T,ie(g,T),g.replace(d,""),O&&-1!==g.indexOf("px"),!0);else if(r&&("#"===f.charAt(0)||ne[f]||b.test(f)))S=","===g.charAt(g.length-1)?"),":")",f=oe(f),g=oe(g),w=f.length+g.length>6,w&&!U&&0===g[3]?(a["xs"+a.l]+=a.l?" transparent":"transparent",a.e=a.e.split(R[u]).join("transparent")):(U||(w=!1),a.appendXtra(w?"rgba(":"rgb(",f[0],g[0]-f[0],",",!0,!0).appendXtra("",f[1],g[1]-f[1],",",!0).appendXtra("",f[2],g[2]-f[2],w?",":S,!0),w&&(f=4>f.length?1:f[3],a.appendXtra("",f,(4>g.length?1:g[3])-f,S,!1)));else if(v=f.match(m)){if(y=g.match(d),!y||y.length!==v.length)return a;for(c=0,p=0;v.length>p;p++)P=v[p],x=f.indexOf(P,c),a.appendXtra(f.substr(c,x-c),Number(P),ie(y[p],P),"",O&&"px"===f.substr(x+P.length,2),0===p),c=x+P.length;a["xs"+a.l]+=f.substr(c)}else a["xs"+a.l]+=a.l?" "+f:f;if(-1!==s.indexOf("=")&&a.data){for(S=a.xs0+a.data.s,u=1;a.l>u;u++)S+=a["xs"+u]+a.data["xn"+u];a.e=S+a["xs"+u]}return a.l||(a.type=-1,a.xs0=a.e),a.xfirst||a},fe=9;for(h=pe.prototype,h.l=h.pr=0;--fe>0;)h["xn"+fe]=0,h["xs"+fe]="";h.xs0="",h._next=h._prev=h.xfirst=h.data=h.plugin=h.setRatio=h.rxp=null,h.appendXtra=function(t,e,i,s,r,n){var a=this,o=a.l;return a["xs"+o]+=n&&o?" "+t:t||"",i||0===o||a.plugin?(a.l++,a.type=a.setRatio?2:1,a["xs"+a.l]=s||"",o>0?(a.data["xn"+o]=e+i,a.rxp["xn"+o]=r,a["xn"+o]=e,a.plugin||(a.xfirst=new pe(a,"xn"+o,e,i,a.xfirst||a,0,a.n,r,a.pr),a.xfirst.xs0=0),a):(a.data={s:e+i},a.rxp={},a.s=e,a.c=i,a.r=r,a)):(a["xs"+o]+=e+(s||""),a)};var me=function(t,e){e=e||{},this.p=e.prefix?V(t)||t:t,o[t]=o[this.p]=this,this.format=e.formatter||le(e.defaultValue,e.color,e.collapsible,e.multi),e.parser&&(this.parse=e.parser),this.clrs=e.color,this.multi=e.multi,this.keyword=e.keyword,this.dflt=e.defaultValue,this.pr=e.priority||0},de=N._registerComplexSpecialProp=function(t,e,i){"object"!=typeof e&&(e={parser:i});var s,r,n=t.split(","),a=e.defaultValue;for(i=i||[a],s=0;n.length>s;s++)e.prefix=0===s&&e.prefix,e.defaultValue=i[s]||a,r=new me(n[s],e)},ge=function(t){if(!o[t]){var e=t.charAt(0).toUpperCase()+t.substr(1)+"Plugin";de(t,{parser:function(t,i,s,r,n,a,h){var l=(_gsScope.GreenSockGlobals||_gsScope).com.greensock.plugins[e];return l?(l._cssRegister(),o[s].parse(t,i,s,r,n,a,h)):(j("Error: "+e+" js file not loaded."),n)}})}};h=me.prototype,h.parseComplex=function(t,e,i,s,r,n){var a,o,h,l,_,u,p=this.keyword;if(this.multi&&(D.test(i)||D.test(e)?(o=e.replace(D,"|").split("|"),h=i.replace(D,"|").split("|")):p&&(o=[e],h=[i])),h){for(l=h.length>o.length?h.length:o.length,a=0;l>a;a++)e=o[a]=o[a]||this.dflt,i=h[a]=h[a]||this.dflt,p&&(_=e.indexOf(p),u=i.indexOf(p),_!==u&&(i=-1===u?h:o,i[a]+=" "+p));e=o.join(", "),i=h.join(", ")}return ce(t,this.p,e,i,this.clrs,this.dflt,s,this.pr,r,n)},h.parse=function(t,e,i,s,n,a){return this.parseComplex(t.style,this.format(W(t,this.p,r,!1,this.dflt)),this.format(e),n,a)},a.registerSpecialProp=function(t,e,i){de(t,{parser:function(t,s,r,n,a,o){var h=new pe(t,r,0,0,a,2,r,!1,i);return h.plugin=o,h.setRatio=e(t,s,n._tween,r),h},priority:i})};var ve="scaleX,scaleY,scaleZ,x,y,z,skewX,skewY,rotation,rotationX,rotationY,perspective,xPercent,yPercent".split(","),ye=V("transform"),Te=B+"transform",we=V("transformOrigin"),xe=null!==V("perspective"),be=N.Transform=function(){this.skewY=0},Pe=window.SVGElement,Se=Pe&&(f||/Android/i.test(X)&&!window.chrome),ke=function(t,e,i){var s=t.getBBox();e=ee(e).split(" "),i.xOrigin=(-1!==e[0].indexOf("%")?parseFloat(e[0])/100*s.width:parseFloat(e[0]))+s.x,i.yOrigin=(-1!==e[1].indexOf("%")?parseFloat(e[1])/100*s.height:parseFloat(e[1]))+s.y},Re=N.getTransform=function(t,e,i,s){if(t._gsTransform&&i&&!s)return t._gsTransform;var n,o,h,l,_,u,p,c,f,m,d,g,v,y=i?t._gsTransform||new be:new be,T=0>y.scaleX,w=2e-5,x=1e5,b=179.99,P=b*M,S=xe?parseFloat(W(t,we,e,!1,"0 0 0").split(" ")[2])||y.zOrigin||0:0,k=parseFloat(a.defaultTransformPerspective)||0;if(ye?n=W(t,Te,e,!0):t.currentStyle&&(n=t.currentStyle.filter.match(O),n=n&&4===n.length?[n[0].substr(4),Number(n[2].substr(4)),Number(n[1].substr(4)),n[3].substr(4),y.x||0,y.y||0].join(","):""),n&&"none"!==n&&"matrix(1, 0, 0, 1, 0, 0)"!==n){for(o=(n||"").match(/(?:\-|\b)[\d\-\.e]+\b/gi)||[],h=o.length;--h>-1;)l=Number(o[h]),o[h]=(_=l-(l|=0))?(0|_*x+(0>_?-.5:.5))/x+l:l;if(16===o.length){var R=o[8],A=o[9],C=o[10],D=o[12],I=o[13],E=o[14];if(y.zOrigin&&(E=-y.zOrigin,D=R*E-o[12],I=A*E-o[13],E=C*E+y.zOrigin-o[14]),!i||s||null==y.rotationX){var F,L,N,X,U,Y,j,B=o[0],q=o[1],V=o[2],G=o[3],Q=o[4],Z=o[5],$=o[6],H=o[7],K=o[11],J=Math.atan2($,C),te=-P>J||J>P;y.rotationX=J*z,J&&(X=Math.cos(-J),U=Math.sin(-J),F=Q*X+R*U,L=Z*X+A*U,N=$*X+C*U,R=Q*-U+R*X,A=Z*-U+A*X,C=$*-U+C*X,K=H*-U+K*X,Q=F,Z=L,$=N),J=Math.atan2(R,B),y.rotationY=J*z,J&&(Y=-P>J||J>P,X=Math.cos(-J),U=Math.sin(-J),F=B*X-R*U,L=q*X-A*U,N=V*X-C*U,A=q*U+A*X,C=V*U+C*X,K=G*U+K*X,B=F,q=L,V=N),J=Math.atan2(q,Z),y.rotation=J*z,J&&(j=-P>J||J>P,X=Math.cos(-J),U=Math.sin(-J),B=B*X+Q*U,L=q*X+Z*U,Z=q*-U+Z*X,$=V*-U+$*X,q=L),j&&te?y.rotation=y.rotationX=0:j&&Y?y.rotation=y.rotationY=0:Y&&te&&(y.rotationY=y.rotationX=0),y.scaleX=(0|Math.sqrt(B*B+q*q)*x+.5)/x,y.scaleY=(0|Math.sqrt(Z*Z+A*A)*x+.5)/x,y.scaleZ=(0|Math.sqrt($*$+C*C)*x+.5)/x,y.skewX=0,y.perspective=K?1/(0>K?-K:K):0,y.x=D,y.y=I,y.z=E}}else if(!(xe&&!s&&o.length&&y.x===o[4]&&y.y===o[5]&&(y.rotationX||y.rotationY)||void 0!==y.x&&"none"===W(t,"display",e))){var ee=o.length>=6,ie=ee?o[0]:1,se=o[1]||0,re=o[2]||0,ne=ee?o[3]:1;y.x=o[4]||0,y.y=o[5]||0,u=Math.sqrt(ie*ie+se*se),p=Math.sqrt(ne*ne+re*re),c=ie||se?Math.atan2(se,ie)*z:y.rotation||0,f=re||ne?Math.atan2(re,ne)*z+c:y.skewX||0,m=u-Math.abs(y.scaleX||0),d=p-Math.abs(y.scaleY||0),Math.abs(f)>90&&270>Math.abs(f)&&(T?(u*=-1,f+=0>=c?180:-180,c+=0>=c?180:-180):(p*=-1,f+=0>=f?180:-180)),g=(c-y.rotation)%180,v=(f-y.skewX)%180,(void 0===y.skewX||m>w||-w>m||d>w||-w>d||g>-b&&b>g&&false|g*x||v>-b&&b>v&&false|v*x)&&(y.scaleX=u,y.scaleY=p,y.rotation=c,y.skewX=f),xe&&(y.rotationX=y.rotationY=y.z=0,y.perspective=k,y.scaleZ=1)}y.zOrigin=S;for(h in y)w>y[h]&&y[h]>-w&&(y[h]=0)}else y={x:0,y:0,z:0,scaleX:1,scaleY:1,scaleZ:1,skewX:0,skewY:0,perspective:k,rotation:0,rotationX:0,rotationY:0,zOrigin:0};return i&&(t._gsTransform=y),y.svg=Pe&&t instanceof Pe,y.svg&&ke(t,W(t,we,r,!1,"50% 50%")+"",y),y.xPercent=y.yPercent=0,y},Ae=function(t){var e,i,s=this.data,r=-s.rotation*M,n=r+s.skewX*M,a=1e5,o=(0|Math.cos(r)*s.scaleX*a)/a,h=(0|Math.sin(r)*s.scaleX*a)/a,l=(0|Math.sin(n)*-s.scaleY*a)/a,_=(0|Math.cos(n)*s.scaleY*a)/a,u=this.t.style,p=this.t.currentStyle;if(p){i=h,h=-l,l=-i,e=p.filter,u.filter="";var c,m,d=this.t.offsetWidth,g=this.t.offsetHeight,v="absolute"!==p.position,w="progid:DXImageTransform.Microsoft.Matrix(M11="+o+", M12="+h+", M21="+l+", M22="+_,x=s.x+d*s.xPercent/100,b=s.y+g*s.yPercent/100;if(null!=s.ox&&(c=(s.oxp?.01*d*s.ox:s.ox)-d/2,m=(s.oyp?.01*g*s.oy:s.oy)-g/2,x+=c-(c*o+m*h),b+=m-(c*l+m*_)),v?(c=d/2,m=g/2,w+=", Dx="+(c-(c*o+m*h)+x)+", Dy="+(m-(c*l+m*_)+b)+")"):w+=", sizingMethod='auto expand')",u.filter=-1!==e.indexOf("DXImageTransform.Microsoft.Matrix(")?e.replace(C,w):w+" "+e,(0===t||1===t)&&1===o&&0===h&&0===l&&1===_&&(v&&-1===w.indexOf("Dx=0, Dy=0")||T.test(e)&&100!==parseFloat(RegExp.$1)||-1===e.indexOf("gradient("&&e.indexOf("Alpha"))&&u.removeAttribute("filter")),!v){var P,S,k,R=8>f?1:-1;for(c=s.ieOffsetX||0,m=s.ieOffsetY||0,s.ieOffsetX=Math.round((d-((0>o?-o:o)*d+(0>h?-h:h)*g))/2+x),s.ieOffsetY=Math.round((g-((0>_?-_:_)*g+(0>l?-l:l)*d))/2+b),fe=0;4>fe;fe++)S=J[fe],P=p[S],i=-1!==P.indexOf("px")?parseFloat(P):Q(this.t,S,parseFloat(P),P.replace(y,""))||0,k=i!==s[S]?2>fe?-s.ieOffsetX:-s.ieOffsetY:2>fe?c-s.ieOffsetX:m-s.ieOffsetY,u[S]=(s[S]=Math.round(i-k*(0===fe||2===fe?1:R)))+"px"}}},Oe=N.set3DTransformRatio=function(t){var e,i,s,r,n,a,o,h,l,_,u,c,f,m,d,g,v,y,T,w,x,b,P,S=this.data,k=this.t.style,R=S.rotation*M,A=S.scaleX,O=S.scaleY,C=S.scaleZ,D=S.x,z=S.y,I=S.z,E=S.perspective;if(!(1!==t&&0!==t||"auto"!==S.force3D||S.rotationY||S.rotationX||1!==C||E||I))return Ce.call(this,t),void 0;if(p){var F=1e-4;F>A&&A>-F&&(A=C=2e-5),F>O&&O>-F&&(O=C=2e-5),!E||S.z||S.rotationX||S.rotationY||(E=0)}if(R||S.skewX)y=Math.cos(R),T=Math.sin(R),e=y,n=T,S.skewX&&(R-=S.skewX*M,y=Math.cos(R),T=Math.sin(R),"simple"===S.skewType&&(w=Math.tan(S.skewX*M),w=Math.sqrt(1+w*w),y*=w,T*=w)),i=-T,a=y;else{if(!(S.rotationY||S.rotationX||1!==C||E||S.svg))return k[ye]=(S.xPercent||S.yPercent?"translate("+S.xPercent+"%,"+S.yPercent+"%) translate3d(":"translate3d(")+D+"px,"+z+"px,"+I+"px)"+(1!==A||1!==O?" scale("+A+","+O+")":""),void 0;e=a=1,i=n=0}u=1,s=r=o=h=l=_=c=f=m=0,d=E?-1/E:0,g=S.zOrigin,v=1e5,R=S.rotationY*M,R&&(y=Math.cos(R),T=Math.sin(R),l=u*-T,f=d*-T,s=e*T,o=n*T,u*=y,d*=y,e*=y,n*=y),R=S.rotationX*M,R&&(y=Math.cos(R),T=Math.sin(R),w=i*y+s*T,x=a*y+o*T,b=_*y+u*T,P=m*y+d*T,s=i*-T+s*y,o=a*-T+o*y,u=_*-T+u*y,d=m*-T+d*y,i=w,a=x,_=b,m=P),1!==C&&(s*=C,o*=C,u*=C,d*=C),1!==O&&(i*=O,a*=O,_*=O,m*=O),1!==A&&(e*=A,n*=A,l*=A,f*=A),g&&(c-=g,r=s*c,h=o*c,c=u*c+g),S.svg&&(r+=S.xOrigin-(S.xOrigin*e+S.yOrigin*i),h+=S.yOrigin-(S.xOrigin*n+S.yOrigin*a)),r=(w=(r+=D)-(r|=0))?(0|w*v+(0>w?-.5:.5))/v+r:r,h=(w=(h+=z)-(h|=0))?(0|w*v+(0>w?-.5:.5))/v+h:h,c=(w=(c+=I)-(c|=0))?(0|w*v+(0>w?-.5:.5))/v+c:c,k[ye]=(S.xPercent||S.yPercent?"translate("+S.xPercent+"%,"+S.yPercent+"%) matrix3d(":"matrix3d(")+[(0|e*v)/v,(0|n*v)/v,(0|l*v)/v,(0|f*v)/v,(0|i*v)/v,(0|a*v)/v,(0|_*v)/v,(0|m*v)/v,(0|s*v)/v,(0|o*v)/v,(0|u*v)/v,(0|d*v)/v,r,h,c,E?1+-c/E:1].join(",")+")"},Ce=N.set2DTransformRatio=function(t){var e,i,s,r,n,a,o,h,l,_,u,p=this.data,c=this.t,f=c.style,m=p.x,d=p.y;return!(p.rotationX||p.rotationY||p.z||p.force3D===!0||"auto"===p.force3D&&1!==t&&0!==t)||p.svg&&Se||!xe?(r=p.scaleX,n=p.scaleY,p.rotation||p.skewX||p.svg?(e=p.rotation*M,i=e-p.skewX*M,s=1e5,a=Math.cos(e)*r,o=Math.sin(e)*r,h=Math.sin(i)*-n,l=Math.cos(i)*n,p.svg&&(m+=p.xOrigin-(p.xOrigin*a+p.yOrigin*h),d+=p.yOrigin-(p.xOrigin*o+p.yOrigin*l),u=1e-6,u>m&&m>-u&&(m=0),u>d&&d>-u&&(d=0)),_=(0|a*s)/s+","+(0|o*s)/s+","+(0|h*s)/s+","+(0|l*s)/s+","+m+","+d+")",p.svg&&Se?c.setAttribute("transform","matrix("+_):f[ye]=(p.xPercent||p.yPercent?"translate("+p.xPercent+"%,"+p.yPercent+"%) matrix(":"matrix(")+_):f[ye]=(p.xPercent||p.yPercent?"translate("+p.xPercent+"%,"+p.yPercent+"%) matrix(":"matrix(")+r+",0,0,"+n+","+m+","+d+")",void 0):(this.setRatio=Oe,Oe.call(this,t),void 0)};de("transform,scale,scaleX,scaleY,scaleZ,x,y,z,rotation,rotationX,rotationY,rotationZ,skewX,skewY,shortRotation,shortRotationX,shortRotationY,shortRotationZ,transformOrigin,transformPerspective,directionalRotation,parseTransform,force3D,skewType,xPercent,yPercent",{parser:function(t,e,i,s,n,o,h){if(s._transform)return n;var l,_,u,p,c,f,m,d=s._transform=Re(t,r,!0,h.parseTransform),g=t.style,v=1e-6,y=ve.length,T=h,w={};if("string"==typeof T.transform&&ye)u=F.style,u[ye]=T.transform,u.display="block",u.position="absolute",E.body.appendChild(F),l=Re(F,null,!1),E.body.removeChild(F);else if("object"==typeof T){if(l={scaleX:se(null!=T.scaleX?T.scaleX:T.scale,d.scaleX),scaleY:se(null!=T.scaleY?T.scaleY:T.scale,d.scaleY),scaleZ:se(T.scaleZ,d.scaleZ),x:se(T.x,d.x),y:se(T.y,d.y),z:se(T.z,d.z),xPercent:se(T.xPercent,d.xPercent),yPercent:se(T.yPercent,d.yPercent),perspective:se(T.transformPerspective,d.perspective)},m=T.directionalRotation,null!=m)if("object"==typeof m)for(u in m)T[u]=m[u];else T.rotation=m;"string"==typeof T.x&&-1!==T.x.indexOf("%")&&(l.x=0,l.xPercent=se(T.x,d.xPercent)),"string"==typeof T.y&&-1!==T.y.indexOf("%")&&(l.y=0,l.yPercent=se(T.y,d.yPercent)),l.rotation=re("rotation"in T?T.rotation:"shortRotation"in T?T.shortRotation+"_short":"rotationZ"in T?T.rotationZ:d.rotation,d.rotation,"rotation",w),xe&&(l.rotationX=re("rotationX"in T?T.rotationX:"shortRotationX"in T?T.shortRotationX+"_short":d.rotationX||0,d.rotationX,"rotationX",w),l.rotationY=re("rotationY"in T?T.rotationY:"shortRotationY"in T?T.shortRotationY+"_short":d.rotationY||0,d.rotationY,"rotationY",w)),l.skewX=null==T.skewX?d.skewX:re(T.skewX,d.skewX),l.skewY=null==T.skewY?d.skewY:re(T.skewY,d.skewY),(_=l.skewY-d.skewY)&&(l.skewX+=_,l.rotation+=_)}for(xe&&null!=T.force3D&&(d.force3D=T.force3D,f=!0),d.skewType=T.skewType||d.skewType||a.defaultSkewType,c=d.force3D||d.z||d.rotationX||d.rotationY||l.z||l.rotationX||l.rotationY||l.perspective,c||null==T.scale||(l.scaleZ=1);--y>-1;)i=ve[y],p=l[i]-d[i],(p>v||-v>p||null!=T[i]||null!=I[i])&&(f=!0,n=new pe(d,i,d[i],p,n),i in w&&(n.e=w[i]),n.xs0=0,n.plugin=o,s._overwriteProps.push(n.n));return p=T.transformOrigin,p&&d.svg?(ke(t,p,l),n=new pe(d,"xOrigin",d.xOrigin,l.xOrigin-d.xOrigin,n,-1,"transformOrigin"),n.b=d.xOrigin,n.e=n.xs0=l.xOrigin,n=new pe(d,"yOrigin",d.yOrigin,l.yOrigin-d.yOrigin,n,-1,"transformOrigin"),n.b=d.yOrigin,n.e=n.xs0=l.yOrigin,Me(g,we)):(p||xe&&c&&d.zOrigin)&&(ye?(f=!0,i=we,p=(p||W(t,i,r,!1,"50% 50%"))+"",n=new pe(g,i,0,0,n,-1,"transformOrigin"),n.b=g[i],n.plugin=o,xe?(u=d.zOrigin,p=p.split(" "),d.zOrigin=(p.length>2&&(0===u||"0px"!==p[2])?parseFloat(p[2]):u)||0,n.xs0=n.e=p[0]+" "+(p[1]||"50%")+" 0px",n=new pe(d,"zOrigin",0,0,n,-1,n.n),n.b=u,n.xs0=n.e=d.zOrigin):n.xs0=n.e=p):ee(p+"",d)),f&&(s._transformType=d.svg&&Se||!c&&3!==this._transformType?2:3),n},prefix:!0}),de("boxShadow",{defaultValue:"0px 0px 0px 0px #999",prefix:!0,color:!0,multi:!0,keyword:"inset"}),de("borderRadius",{defaultValue:"0px",parser:function(t,e,i,n,a){e=this.format(e);var o,h,l,_,u,p,c,f,m,d,g,v,y,T,w,x,b=["borderTopLeftRadius","borderTopRightRadius","borderBottomRightRadius","borderBottomLeftRadius"],P=t.style;for(m=parseFloat(t.offsetWidth),d=parseFloat(t.offsetHeight),o=e.split(" "),h=0;b.length>h;h++)this.p.indexOf("border")&&(b[h]=V(b[h])),u=_=W(t,b[h],r,!1,"0px"),-1!==u.indexOf(" ")&&(_=u.split(" "),u=_[0],_=_[1]),p=l=o[h],c=parseFloat(u),v=u.substr((c+"").length),y="="===p.charAt(1),y?(f=parseInt(p.charAt(0)+"1",10),p=p.substr(2),f*=parseFloat(p),g=p.substr((f+"").length-(0>f?1:0))||""):(f=parseFloat(p),g=p.substr((f+"").length)),""===g&&(g=s[i]||v),g!==v&&(T=Q(t,"borderLeft",c,v),w=Q(t,"borderTop",c,v),"%"===g?(u=100*(T/m)+"%",_=100*(w/d)+"%"):"em"===g?(x=Q(t,"borderLeft",1,"em"),u=T/x+"em",_=w/x+"em"):(u=T+"px",_=w+"px"),y&&(p=parseFloat(u)+f+g,l=parseFloat(_)+f+g)),a=ce(P,b[h],u+" "+_,p+" "+l,!1,"0px",a);return a},prefix:!0,formatter:le("0px 0px 0px 0px",!1,!0)}),de("backgroundPosition",{defaultValue:"0 0",parser:function(t,e,i,s,n,a){var o,h,l,_,u,p,c="background-position",m=r||G(t,null),d=this.format((m?f?m.getPropertyValue(c+"-x")+" "+m.getPropertyValue(c+"-y"):m.getPropertyValue(c):t.currentStyle.backgroundPositionX+" "+t.currentStyle.backgroundPositionY)||"0 0"),g=this.format(e);if(-1!==d.indexOf("%")!=(-1!==g.indexOf("%"))&&(p=W(t,"backgroundImage").replace(k,""),p&&"none"!==p)){for(o=d.split(" "),h=g.split(" "),L.setAttribute("src",p),l=2;--l>-1;)d=o[l],_=-1!==d.indexOf("%"),_!==(-1!==h[l].indexOf("%"))&&(u=0===l?t.offsetWidth-L.width:t.offsetHeight-L.height,o[l]=_?parseFloat(d)/100*u+"px":100*(parseFloat(d)/u)+"%");d=o.join(" ")}return this.parseComplex(t.style,d,g,n,a)},formatter:ee}),de("backgroundSize",{defaultValue:"0 0",formatter:ee}),de("perspective",{defaultValue:"0px",prefix:!0}),de("perspectiveOrigin",{defaultValue:"50% 50%",prefix:!0}),de("transformStyle",{prefix:!0}),de("backfaceVisibility",{prefix:!0}),de("userSelect",{prefix:!0}),de("margin",{parser:_e("marginTop,marginRight,marginBottom,marginLeft")}),de("padding",{parser:_e("paddingTop,paddingRight,paddingBottom,paddingLeft")}),de("clip",{defaultValue:"rect(0px,0px,0px,0px)",parser:function(t,e,i,s,n,a){var o,h,l;return 9>f?(h=t.currentStyle,l=8>f?" ":",",o="rect("+h.clipTop+l+h.clipRight+l+h.clipBottom+l+h.clipLeft+")",e=this.format(e).split(",").join(l)):(o=this.format(W(t,this.p,r,!1,this.dflt)),e=this.format(e)),this.parseComplex(t.style,o,e,n,a)}}),de("textShadow",{defaultValue:"0px 0px 0px #999",color:!0,multi:!0}),de("autoRound,strictUnits",{parser:function(t,e,i,s,r){return r}}),de("border",{defaultValue:"0px solid #000",parser:function(t,e,i,s,n,a){return this.parseComplex(t.style,this.format(W(t,"borderTopWidth",r,!1,"0px")+" "+W(t,"borderTopStyle",r,!1,"solid")+" "+W(t,"borderTopColor",r,!1,"#000")),this.format(e),n,a)},color:!0,formatter:function(t){var e=t.split(" ");return e[0]+" "+(e[1]||"solid")+" "+(t.match(he)||["#000"])[0]}}),de("borderWidth",{parser:_e("borderTopWidth,borderRightWidth,borderBottomWidth,borderLeftWidth")}),de("float,cssFloat,styleFloat",{parser:function(t,e,i,s,r){var n=t.style,a="cssFloat"in n?"cssFloat":"styleFloat";return new pe(n,a,0,0,r,-1,i,!1,0,n[a],e)}});var De=function(t){var e,i=this.t,s=i.filter||W(this.data,"filter")||"",r=0|this.s+this.c*t;100===r&&(-1===s.indexOf("atrix(")&&-1===s.indexOf("radient(")&&-1===s.indexOf("oader(")?(i.removeAttribute("filter"),e=!W(this.data,"filter")):(i.filter=s.replace(x,""),e=!0)),e||(this.xn1&&(i.filter=s=s||"alpha(opacity="+r+")"),-1===s.indexOf("pacity")?0===r&&this.xn1||(i.filter=s+" alpha(opacity="+r+")"):i.filter=s.replace(T,"opacity="+r))};de("opacity,alpha,autoAlpha",{defaultValue:"1",parser:function(t,e,i,s,n,a){var o=parseFloat(W(t,"opacity",r,!1,"1")),h=t.style,l="autoAlpha"===i;return"string"==typeof e&&"="===e.charAt(1)&&(e=("-"===e.charAt(0)?-1:1)*parseFloat(e.substr(2))+o),l&&1===o&&"hidden"===W(t,"visibility",r)&&0!==e&&(o=0),U?n=new pe(h,"opacity",o,e-o,n):(n=new pe(h,"opacity",100*o,100*(e-o),n),n.xn1=l?1:0,h.zoom=1,n.type=2,n.b="alpha(opacity="+n.s+")",n.e="alpha(opacity="+(n.s+n.c)+")",n.data=t,n.plugin=a,n.setRatio=De),l&&(n=new pe(h,"visibility",0,0,n,-1,null,!1,0,0!==o?"inherit":"hidden",0===e?"hidden":"inherit"),n.xs0="inherit",s._overwriteProps.push(n.n),s._overwriteProps.push(i)),n}});var Me=function(t,e){e&&(t.removeProperty?("ms"===e.substr(0,2)&&(e="M"+e.substr(1)),t.removeProperty(e.replace(P,"-$1").toLowerCase())):t.removeAttribute(e))},ze=function(t){if(this.t._gsClassPT=this,1===t||0===t){this.t.setAttribute("class",0===t?this.b:this.e);for(var e=this.data,i=this.t.style;e;)e.v?i[e.p]=e.v:Me(i,e.p),e=e._next;1===t&&this.t._gsClassPT===this&&(this.t._gsClassPT=null)}else this.t.getAttribute("class")!==this.e&&this.t.setAttribute("class",this.e)};de("className",{parser:function(t,e,s,n,a,o,h){var l,_,u,p,c,f=t.getAttribute("class")||"",m=t.style.cssText;if(a=n._classNamePT=new pe(t,s,0,0,a,2),a.setRatio=ze,a.pr=-11,i=!0,a.b=f,_=$(t,r),u=t._gsClassPT){for(p={},c=u.data;c;)p[c.p]=1,c=c._next;u.setRatio(1)}return t._gsClassPT=a,a.e="="!==e.charAt(1)?e:f.replace(RegExp("\\s*\\b"+e.substr(2)+"\\b"),"")+("+"===e.charAt(0)?" "+e.substr(2):""),n._tween._duration&&(t.setAttribute("class",a.e),l=H(t,_,$(t),h,p),t.setAttribute("class",f),a.data=l.firstMPT,t.style.cssText=m,a=a.xfirst=n.parse(t,l.difs,a,o)),a}});var Ie=function(t){if((1===t||0===t)&&this.data._totalTime===this.data._totalDuration&&"isFromStart"!==this.data.data){var e,i,s,r,n=this.t.style,a=o.transform.parse;if("all"===this.e)n.cssText="",r=!0;else for(e=this.e.split(" ").join("").split(","),s=e.length;--s>-1;)i=e[s],o[i]&&(o[i].parse===a?r=!0:i="transformOrigin"===i?we:o[i].p),Me(n,i);r&&(Me(n,ye),this.t._gsTransform&&delete this.t._gsTransform)}};for(de("clearProps",{parser:function(t,e,s,r,n){return n=new pe(t,s,0,0,n,2),n.setRatio=Ie,n.e=e,n.pr=-10,n.data=r._tween,i=!0,n}}),h="bezier,throwProps,physicsProps,physics2D".split(","),fe=h.length;fe--;)ge(h[fe]);h=a.prototype,h._firstPT=null,h._onInitTween=function(t,e,o){if(!t.nodeType)return!1;this._target=t,this._tween=o,this._vars=e,l=e.autoRound,i=!1,s=e.suffixMap||a.suffixMap,r=G(t,""),n=this._overwriteProps;var h,p,f,m,d,g,v,y,T,x=t.style;if(_&&""===x.zIndex&&(h=W(t,"zIndex",r),("auto"===h||""===h)&&this._addLazySet(x,"zIndex",0)),"string"==typeof e&&(m=x.cssText,h=$(t,r),x.cssText=m+";"+e,h=H(t,h,$(t)).difs,!U&&w.test(e)&&(h.opacity=parseFloat(RegExp.$1)),e=h,x.cssText=m),this._firstPT=p=this.parse(t,e,null),this._transformType){for(T=3===this._transformType,ye?u&&(_=!0,""===x.zIndex&&(v=W(t,"zIndex",r),("auto"===v||""===v)&&this._addLazySet(x,"zIndex",0)),c&&this._addLazySet(x,"WebkitBackfaceVisibility",this._vars.WebkitBackfaceVisibility||(T?"visible":"hidden"))):x.zoom=1,f=p;f&&f._next;)f=f._next;y=new pe(t,"transform",0,0,null,2),this._linkCSSP(y,null,f),y.setRatio=T&&xe?Oe:ye?Ce:Ae,y.data=this._transform||Re(t,r,!0),n.pop()
}if(i){for(;p;){for(g=p._next,f=m;f&&f.pr>p.pr;)f=f._next;(p._prev=f?f._prev:d)?p._prev._next=p:m=p,(p._next=f)?f._prev=p:d=p,p=g}this._firstPT=m}return!0},h.parse=function(t,e,i,n){var a,h,_,u,p,c,f,m,d,g,v=t.style;for(a in e)c=e[a],h=o[a],h?i=h.parse(t,c,a,this,i,n,e):(p=W(t,a,r)+"",d="string"==typeof c,"color"===a||"fill"===a||"stroke"===a||-1!==a.indexOf("Color")||d&&b.test(c)?(d||(c=oe(c),c=(c.length>3?"rgba(":"rgb(")+c.join(",")+")"),i=ce(v,a,p,c,!0,"transparent",i,0,n)):!d||-1===c.indexOf(" ")&&-1===c.indexOf(",")?(_=parseFloat(p),f=_||0===_?p.substr((_+"").length):"",(""===p||"auto"===p)&&("width"===a||"height"===a?(_=te(t,a,r),f="px"):"left"===a||"top"===a?(_=Z(t,a,r),f="px"):(_="opacity"!==a?0:1,f="")),g=d&&"="===c.charAt(1),g?(u=parseInt(c.charAt(0)+"1",10),c=c.substr(2),u*=parseFloat(c),m=c.replace(y,"")):(u=parseFloat(c),m=d?c.substr((u+"").length)||"":""),""===m&&(m=a in s?s[a]:f),c=u||0===u?(g?u+_:u)+m:e[a],f!==m&&""!==m&&(u||0===u)&&_&&(_=Q(t,a,_,f),"%"===m?(_/=Q(t,a,100,"%")/100,e.strictUnits!==!0&&(p=_+"%")):"em"===m?_/=Q(t,a,1,"em"):"px"!==m&&(u=Q(t,a,u,m),m="px"),g&&(u||0===u)&&(c=u+_+m)),g&&(u+=_),!_&&0!==_||!u&&0!==u?void 0!==v[a]&&(c||"NaN"!=c+""&&null!=c)?(i=new pe(v,a,u||_||0,0,i,-1,a,!1,0,p,c),i.xs0="none"!==c||"display"!==a&&-1===a.indexOf("Style")?c:p):j("invalid "+a+" tween value: "+e[a]):(i=new pe(v,a,_,u-_,i,0,a,l!==!1&&("px"===m||"zIndex"===a),0,p,c),i.xs0=m)):i=ce(v,a,p,c,!0,null,i,0,n)),n&&i&&!i.plugin&&(i.plugin=n);return i},h.setRatio=function(t){var e,i,s,r=this._firstPT,n=1e-6;if(1!==t||this._tween._time!==this._tween._duration&&0!==this._tween._time)if(t||this._tween._time!==this._tween._duration&&0!==this._tween._time||this._tween._rawPrevTime===-1e-6)for(;r;){if(e=r.c*t+r.s,r.r?e=Math.round(e):n>e&&e>-n&&(e=0),r.type)if(1===r.type)if(s=r.l,2===s)r.t[r.p]=r.xs0+e+r.xs1+r.xn1+r.xs2;else if(3===s)r.t[r.p]=r.xs0+e+r.xs1+r.xn1+r.xs2+r.xn2+r.xs3;else if(4===s)r.t[r.p]=r.xs0+e+r.xs1+r.xn1+r.xs2+r.xn2+r.xs3+r.xn3+r.xs4;else if(5===s)r.t[r.p]=r.xs0+e+r.xs1+r.xn1+r.xs2+r.xn2+r.xs3+r.xn3+r.xs4+r.xn4+r.xs5;else{for(i=r.xs0+e+r.xs1,s=1;r.l>s;s++)i+=r["xn"+s]+r["xs"+(s+1)];r.t[r.p]=i}else-1===r.type?r.t[r.p]=r.xs0:r.setRatio&&r.setRatio(t);else r.t[r.p]=e+r.xs0;r=r._next}else for(;r;)2!==r.type?r.t[r.p]=r.b:r.setRatio(t),r=r._next;else for(;r;)2!==r.type?r.t[r.p]=r.e:r.setRatio(t),r=r._next},h._enableTransforms=function(t){this._transform=this._transform||Re(this._target,r,!0),this._transformType=this._transform.svg&&Se||!t&&3!==this._transformType?2:3};var Ee=function(){this.t[this.p]=this.e,this.data._linkCSSP(this,this._next,null,!0)};h._addLazySet=function(t,e,i){var s=this._firstPT=new pe(t,e,0,0,this._firstPT,2);s.e=i,s.setRatio=Ee,s.data=this},h._linkCSSP=function(t,e,i,s){return t&&(e&&(e._prev=t),t._next&&(t._next._prev=t._prev),t._prev?t._prev._next=t._next:this._firstPT===t&&(this._firstPT=t._next,s=!0),i?i._next=t:s||null!==this._firstPT||(this._firstPT=t),t._next=e,t._prev=i),t},h._kill=function(e){var i,s,r,n=e;if(e.autoAlpha||e.alpha){n={};for(s in e)n[s]=e[s];n.opacity=1,n.autoAlpha&&(n.visibility=1)}return e.className&&(i=this._classNamePT)&&(r=i.xfirst,r&&r._prev?this._linkCSSP(r._prev,i._next,r._prev._prev):r===this._firstPT&&(this._firstPT=i._next),i._next&&this._linkCSSP(i._next,i._next._next,r._prev),this._classNamePT=null),t.prototype._kill.call(this,n)};var Fe=function(t,e,i){var s,r,n,a;if(t.slice)for(r=t.length;--r>-1;)Fe(t[r],e,i);else for(s=t.childNodes,r=s.length;--r>-1;)n=s[r],a=n.type,n.style&&(e.push($(n)),i&&i.push(n)),1!==a&&9!==a&&11!==a||!n.childNodes.length||Fe(n,e,i)};return a.cascadeTo=function(t,i,s){var r,n,a,o=e.to(t,i,s),h=[o],l=[],_=[],u=[],p=e._internals.reservedProps;for(t=o._targets||o.target,Fe(t,l,u),o.render(i,!0),Fe(t,_),o.render(0,!0),o._enabled(!0),r=u.length;--r>-1;)if(n=H(u[r],l[r],_[r]),n.firstMPT){n=n.difs;for(a in s)p[a]&&(n[a]=s[a]);h.push(e.to(u[r],i,n))}return h},t.activate([a]),a},!0),function(){var t=_gsScope._gsDefine.plugin({propName:"roundProps",priority:-1,API:2,init:function(t,e,i){return this._tween=i,!0}}),e=t.prototype;e._onInitAllProps=function(){for(var t,e,i,s=this._tween,r=s.vars.roundProps instanceof Array?s.vars.roundProps:s.vars.roundProps.split(","),n=r.length,a={},o=s._propLookup.roundProps;--n>-1;)a[r[n]]=1;for(n=r.length;--n>-1;)for(t=r[n],e=s._firstPT;e;)i=e._next,e.pg?e.t._roundProps(a,!0):e.n===t&&(this._add(e.t,t,e.s,e.c),i&&(i._prev=e._prev),e._prev?e._prev._next=i:s._firstPT===e&&(s._firstPT=i),e._next=e._prev=null,s._propLookup[t]=o),e=i;return!1},e._add=function(t,e,i,s){this._addTween(t,e,i,i+s,e,!0),this._overwriteProps.push(e)}}(),_gsScope._gsDefine.plugin({propName:"attr",API:2,version:"0.3.3",init:function(t,e){var i,s,r;if("function"!=typeof t.setAttribute)return!1;this._target=t,this._proxy={},this._start={},this._end={};for(i in e)this._start[i]=this._proxy[i]=s=t.getAttribute(i),r=this._addTween(this._proxy,i,parseFloat(s),e[i],i),this._end[i]=r?r.s+r.c:e[i],this._overwriteProps.push(i);return!0},set:function(t){this._super.setRatio.call(this,t);for(var e,i=this._overwriteProps,s=i.length,r=1===t?this._end:t?this._proxy:this._start;--s>-1;)e=i[s],this._target.setAttribute(e,r[e]+"")}}),_gsScope._gsDefine.plugin({propName:"directionalRotation",version:"0.2.1",API:2,init:function(t,e){"object"!=typeof e&&(e={rotation:e}),this.finals={};var i,s,r,n,a,o,h=e.useRadians===!0?2*Math.PI:360,l=1e-6;for(i in e)"useRadians"!==i&&(o=(e[i]+"").split("_"),s=o[0],r=parseFloat("function"!=typeof t[i]?t[i]:t[i.indexOf("set")||"function"!=typeof t["get"+i.substr(3)]?i:"get"+i.substr(3)]()),n=this.finals[i]="string"==typeof s&&"="===s.charAt(1)?r+parseInt(s.charAt(0)+"1",10)*Number(s.substr(2)):Number(s)||0,a=n-r,o.length&&(s=o.join("_"),-1!==s.indexOf("short")&&(a%=h,a!==a%(h/2)&&(a=0>a?a+h:a-h)),-1!==s.indexOf("_cw")&&0>a?a=(a+9999999999*h)%h-(0|a/h)*h:-1!==s.indexOf("ccw")&&a>0&&(a=(a-9999999999*h)%h-(0|a/h)*h)),(a>l||-l>a)&&(this._addTween(t,i,r,r+a,i),this._overwriteProps.push(i)));return!0},set:function(t){var e;if(1!==t)this._super.setRatio.call(this,t);else for(e=this._firstPT;e;)e.f?e.t[e.p](this.finals[e.p]):e.t[e.p]=this.finals[e.p],e=e._next}})._autoCSS=!0,_gsScope._gsDefine("easing.Back",["easing.Ease"],function(t){var e,i,s,r=_gsScope.GreenSockGlobals||_gsScope,n=r.com.greensock,a=2*Math.PI,o=Math.PI/2,h=n._class,l=function(e,i){var s=h("easing."+e,function(){},!0),r=s.prototype=new t;return r.constructor=s,r.getRatio=i,s},_=t.register||function(){},u=function(t,e,i,s){var r=h("easing."+t,{easeOut:new e,easeIn:new i,easeInOut:new s},!0);return _(r,t),r},p=function(t,e,i){this.t=t,this.v=e,i&&(this.next=i,i.prev=this,this.c=i.v-e,this.gap=i.t-t)},c=function(e,i){var s=h("easing."+e,function(t){this._p1=t||0===t?t:1.70158,this._p2=1.525*this._p1},!0),r=s.prototype=new t;return r.constructor=s,r.getRatio=i,r.config=function(t){return new s(t)},s},f=u("Back",c("BackOut",function(t){return(t-=1)*t*((this._p1+1)*t+this._p1)+1}),c("BackIn",function(t){return t*t*((this._p1+1)*t-this._p1)}),c("BackInOut",function(t){return 1>(t*=2)?.5*t*t*((this._p2+1)*t-this._p2):.5*((t-=2)*t*((this._p2+1)*t+this._p2)+2)})),m=h("easing.SlowMo",function(t,e,i){e=e||0===e?e:.7,null==t?t=.7:t>1&&(t=1),this._p=1!==t?e:0,this._p1=(1-t)/2,this._p2=t,this._p3=this._p1+this._p2,this._calcEnd=i===!0},!0),d=m.prototype=new t;return d.constructor=m,d.getRatio=function(t){var e=t+(.5-t)*this._p;return this._p1>t?this._calcEnd?1-(t=1-t/this._p1)*t:e-(t=1-t/this._p1)*t*t*t*e:t>this._p3?this._calcEnd?1-(t=(t-this._p3)/this._p1)*t:e+(t-e)*(t=(t-this._p3)/this._p1)*t*t*t:this._calcEnd?1:e},m.ease=new m(.7,.7),d.config=m.config=function(t,e,i){return new m(t,e,i)},e=h("easing.SteppedEase",function(t){t=t||1,this._p1=1/t,this._p2=t+1},!0),d=e.prototype=new t,d.constructor=e,d.getRatio=function(t){return 0>t?t=0:t>=1&&(t=.999999999),(this._p2*t>>0)*this._p1},d.config=e.config=function(t){return new e(t)},i=h("easing.RoughEase",function(e){e=e||{};for(var i,s,r,n,a,o,h=e.taper||"none",l=[],_=0,u=0|(e.points||20),c=u,f=e.randomize!==!1,m=e.clamp===!0,d=e.template instanceof t?e.template:null,g="number"==typeof e.strength?.4*e.strength:.4;--c>-1;)i=f?Math.random():1/u*c,s=d?d.getRatio(i):i,"none"===h?r=g:"out"===h?(n=1-i,r=n*n*g):"in"===h?r=i*i*g:.5>i?(n=2*i,r=.5*n*n*g):(n=2*(1-i),r=.5*n*n*g),f?s+=Math.random()*r-.5*r:c%2?s+=.5*r:s-=.5*r,m&&(s>1?s=1:0>s&&(s=0)),l[_++]={x:i,y:s};for(l.sort(function(t,e){return t.x-e.x}),o=new p(1,1,null),c=u;--c>-1;)a=l[c],o=new p(a.x,a.y,o);this._prev=new p(0,0,0!==o.t?o:o.next)},!0),d=i.prototype=new t,d.constructor=i,d.getRatio=function(t){var e=this._prev;if(t>e.t){for(;e.next&&t>=e.t;)e=e.next;e=e.prev}else for(;e.prev&&e.t>=t;)e=e.prev;return this._prev=e,e.v+(t-e.t)/e.gap*e.c},d.config=function(t){return new i(t)},i.ease=new i,u("Bounce",l("BounceOut",function(t){return 1/2.75>t?7.5625*t*t:2/2.75>t?7.5625*(t-=1.5/2.75)*t+.75:2.5/2.75>t?7.5625*(t-=2.25/2.75)*t+.9375:7.5625*(t-=2.625/2.75)*t+.984375}),l("BounceIn",function(t){return 1/2.75>(t=1-t)?1-7.5625*t*t:2/2.75>t?1-(7.5625*(t-=1.5/2.75)*t+.75):2.5/2.75>t?1-(7.5625*(t-=2.25/2.75)*t+.9375):1-(7.5625*(t-=2.625/2.75)*t+.984375)}),l("BounceInOut",function(t){var e=.5>t;return t=e?1-2*t:2*t-1,t=1/2.75>t?7.5625*t*t:2/2.75>t?7.5625*(t-=1.5/2.75)*t+.75:2.5/2.75>t?7.5625*(t-=2.25/2.75)*t+.9375:7.5625*(t-=2.625/2.75)*t+.984375,e?.5*(1-t):.5*t+.5})),u("Circ",l("CircOut",function(t){return Math.sqrt(1-(t-=1)*t)}),l("CircIn",function(t){return-(Math.sqrt(1-t*t)-1)}),l("CircInOut",function(t){return 1>(t*=2)?-.5*(Math.sqrt(1-t*t)-1):.5*(Math.sqrt(1-(t-=2)*t)+1)})),s=function(e,i,s){var r=h("easing."+e,function(t,e){this._p1=t||1,this._p2=e||s,this._p3=this._p2/a*(Math.asin(1/this._p1)||0)},!0),n=r.prototype=new t;return n.constructor=r,n.getRatio=i,n.config=function(t,e){return new r(t,e)},r},u("Elastic",s("ElasticOut",function(t){return this._p1*Math.pow(2,-10*t)*Math.sin((t-this._p3)*a/this._p2)+1},.3),s("ElasticIn",function(t){return-(this._p1*Math.pow(2,10*(t-=1))*Math.sin((t-this._p3)*a/this._p2))},.3),s("ElasticInOut",function(t){return 1>(t*=2)?-.5*this._p1*Math.pow(2,10*(t-=1))*Math.sin((t-this._p3)*a/this._p2):.5*this._p1*Math.pow(2,-10*(t-=1))*Math.sin((t-this._p3)*a/this._p2)+1},.45)),u("Expo",l("ExpoOut",function(t){return 1-Math.pow(2,-10*t)}),l("ExpoIn",function(t){return Math.pow(2,10*(t-1))-.001}),l("ExpoInOut",function(t){return 1>(t*=2)?.5*Math.pow(2,10*(t-1)):.5*(2-Math.pow(2,-10*(t-1)))})),u("Sine",l("SineOut",function(t){return Math.sin(t*o)}),l("SineIn",function(t){return-Math.cos(t*o)+1}),l("SineInOut",function(t){return-.5*(Math.cos(Math.PI*t)-1)})),h("easing.EaseLookup",{find:function(e){return t.map[e]}},!0),_(r.SlowMo,"SlowMo","ease,"),_(i,"RoughEase","ease,"),_(e,"SteppedEase","ease,"),f},!0)}),_gsScope._gsDefine&&_gsScope._gsQueue.pop()(),function(t,e){"use strict";var i=t.GreenSockGlobals=t.GreenSockGlobals||t;if(!i.TweenLite){var s,r,n,a,o,h=function(t){var e,s=t.split("."),r=i;for(e=0;s.length>e;e++)r[s[e]]=r=r[s[e]]||{};return r},l=h("com.greensock"),_=1e-10,u=function(t){var e,i=[],s=t.length;for(e=0;e!==s;i.push(t[e++]));return i},p=function(){},c=function(){var t=Object.prototype.toString,e=t.call([]);return function(i){return null!=i&&(i instanceof Array||"object"==typeof i&&!!i.push&&t.call(i)===e)}}(),f={},m=function(s,r,n,a){this.sc=f[s]?f[s].sc:[],f[s]=this,this.gsClass=null,this.func=n;var o=[];this.check=function(l){for(var _,u,p,c,d=r.length,g=d;--d>-1;)(_=f[r[d]]||new m(r[d],[])).gsClass?(o[d]=_.gsClass,g--):l&&_.sc.push(this);if(0===g&&n)for(u=("com.greensock."+s).split("."),p=u.pop(),c=h(u.join("."))[p]=this.gsClass=n.apply(n,o),a&&(i[p]=c,"function"==typeof define&&define.amd?define((t.GreenSockAMDPath?t.GreenSockAMDPath+"/":"")+s.split(".").pop(),[],function(){return c}):s===e&&"undefined"!=typeof module&&module.exports&&(module.exports=c)),d=0;this.sc.length>d;d++)this.sc[d].check()},this.check(!0)},d=t._gsDefine=function(t,e,i,s){return new m(t,e,i,s)},g=l._class=function(t,e,i){return e=e||function(){},d(t,[],function(){return e},i),e};d.globals=i;var v=[0,0,1,1],y=[],T=g("easing.Ease",function(t,e,i,s){this._func=t,this._type=i||0,this._power=s||0,this._params=e?v.concat(e):v},!0),w=T.map={},x=T.register=function(t,e,i,s){for(var r,n,a,o,h=e.split(","),_=h.length,u=(i||"easeIn,easeOut,easeInOut").split(",");--_>-1;)for(n=h[_],r=s?g("easing."+n,null,!0):l.easing[n]||{},a=u.length;--a>-1;)o=u[a],w[n+"."+o]=w[o+n]=r[o]=t.getRatio?t:t[o]||new t};for(n=T.prototype,n._calcEnd=!1,n.getRatio=function(t){if(this._func)return this._params[0]=t,this._func.apply(null,this._params);var e=this._type,i=this._power,s=1===e?1-t:2===e?t:.5>t?2*t:2*(1-t);return 1===i?s*=s:2===i?s*=s*s:3===i?s*=s*s*s:4===i&&(s*=s*s*s*s),1===e?1-s:2===e?s:.5>t?s/2:1-s/2},s=["Linear","Quad","Cubic","Quart","Quint,Strong"],r=s.length;--r>-1;)n=s[r]+",Power"+r,x(new T(null,null,1,r),n,"easeOut",!0),x(new T(null,null,2,r),n,"easeIn"+(0===r?",easeNone":"")),x(new T(null,null,3,r),n,"easeInOut");w.linear=l.easing.Linear.easeIn,w.swing=l.easing.Quad.easeInOut;var b=g("events.EventDispatcher",function(t){this._listeners={},this._eventTarget=t||this});n=b.prototype,n.addEventListener=function(t,e,i,s,r){r=r||0;var n,h,l=this._listeners[t],_=0;for(null==l&&(this._listeners[t]=l=[]),h=l.length;--h>-1;)n=l[h],n.c===e&&n.s===i?l.splice(h,1):0===_&&r>n.pr&&(_=h+1);l.splice(_,0,{c:e,s:i,up:s,pr:r}),this!==a||o||a.wake()},n.removeEventListener=function(t,e){var i,s=this._listeners[t];if(s)for(i=s.length;--i>-1;)if(s[i].c===e)return s.splice(i,1),void 0},n.dispatchEvent=function(t){var e,i,s,r=this._listeners[t];if(r)for(e=r.length,i=this._eventTarget;--e>-1;)s=r[e],s&&(s.up?s.c.call(s.s||i,{type:t,target:i}):s.c.call(s.s||i))};var P=t.requestAnimationFrame,S=t.cancelAnimationFrame,k=Date.now||function(){return(new Date).getTime()},R=k();for(s=["ms","moz","webkit","o"],r=s.length;--r>-1&&!P;)P=t[s[r]+"RequestAnimationFrame"],S=t[s[r]+"CancelAnimationFrame"]||t[s[r]+"CancelRequestAnimationFrame"];g("Ticker",function(t,e){var i,s,r,n,h,l=this,u=k(),c=e!==!1&&P,f=500,m=33,d=function(t){var e,a,o=k()-R;o>f&&(u+=o-m),R+=o,l.time=(R-u)/1e3,e=l.time-h,(!i||e>0||t===!0)&&(l.frame++,h+=e+(e>=n?.004:n-e),a=!0),t!==!0&&(r=s(d)),a&&l.dispatchEvent("tick")};b.call(l),l.time=l.frame=0,l.tick=function(){d(!0)},l.lagSmoothing=function(t,e){f=t||1/_,m=Math.min(e,f,0)},l.sleep=function(){null!=r&&(c&&S?S(r):clearTimeout(r),s=p,r=null,l===a&&(o=!1))},l.wake=function(){null!==r?l.sleep():l.frame>10&&(R=k()-f+5),s=0===i?p:c&&P?P:function(t){return setTimeout(t,0|1e3*(h-l.time)+1)},l===a&&(o=!0),d(2)},l.fps=function(t){return arguments.length?(i=t,n=1/(i||60),h=this.time+n,l.wake(),void 0):i},l.useRAF=function(t){return arguments.length?(l.sleep(),c=t,l.fps(i),void 0):c},l.fps(t),setTimeout(function(){c&&(!r||5>l.frame)&&l.useRAF(!1)},1500)}),n=l.Ticker.prototype=new l.events.EventDispatcher,n.constructor=l.Ticker;var A=g("core.Animation",function(t,e){if(this.vars=e=e||{},this._duration=this._totalDuration=t||0,this._delay=Number(e.delay)||0,this._timeScale=1,this._active=e.immediateRender===!0,this.data=e.data,this._reversed=e.reversed===!0,B){o||a.wake();var i=this.vars.useFrames?j:B;i.add(this,i._time),this.vars.paused&&this.paused(!0)}});a=A.ticker=new l.Ticker,n=A.prototype,n._dirty=n._gc=n._initted=n._paused=!1,n._totalTime=n._time=0,n._rawPrevTime=-1,n._next=n._last=n._onUpdate=n._timeline=n.timeline=null,n._paused=!1;var O=function(){o&&k()-R>2e3&&a.wake(),setTimeout(O,2e3)};O(),n.play=function(t,e){return null!=t&&this.seek(t,e),this.reversed(!1).paused(!1)},n.pause=function(t,e){return null!=t&&this.seek(t,e),this.paused(!0)},n.resume=function(t,e){return null!=t&&this.seek(t,e),this.paused(!1)},n.seek=function(t,e){return this.totalTime(Number(t),e!==!1)},n.restart=function(t,e){return this.reversed(!1).paused(!1).totalTime(t?-this._delay:0,e!==!1,!0)},n.reverse=function(t,e){return null!=t&&this.seek(t||this.totalDuration(),e),this.reversed(!0).paused(!1)},n.render=function(){},n.invalidate=function(){return this._time=this._totalTime=0,this._initted=this._gc=!1,this._rawPrevTime=-1,(this._gc||!this.timeline)&&this._enabled(!0),this},n.isActive=function(){var t,e=this._timeline,i=this._startTime;return!e||!this._gc&&!this._paused&&e.isActive()&&(t=e.rawTime())>=i&&i+this.totalDuration()/this._timeScale>t},n._enabled=function(t,e){return o||a.wake(),this._gc=!t,this._active=this.isActive(),e!==!0&&(t&&!this.timeline?this._timeline.add(this,this._startTime-this._delay):!t&&this.timeline&&this._timeline._remove(this,!0)),!1},n._kill=function(){return this._enabled(!1,!1)},n.kill=function(t,e){return this._kill(t,e),this},n._uncache=function(t){for(var e=t?this:this.timeline;e;)e._dirty=!0,e=e.timeline;return this},n._swapSelfInParams=function(t){for(var e=t.length,i=t.concat();--e>-1;)"{self}"===t[e]&&(i[e]=this);return i},n.eventCallback=function(t,e,i,s){if("on"===(t||"").substr(0,2)){var r=this.vars;if(1===arguments.length)return r[t];null==e?delete r[t]:(r[t]=e,r[t+"Params"]=c(i)&&-1!==i.join("").indexOf("{self}")?this._swapSelfInParams(i):i,r[t+"Scope"]=s),"onUpdate"===t&&(this._onUpdate=e)}return this},n.delay=function(t){return arguments.length?(this._timeline.smoothChildTiming&&this.startTime(this._startTime+t-this._delay),this._delay=t,this):this._delay},n.duration=function(t){return arguments.length?(this._duration=this._totalDuration=t,this._uncache(!0),this._timeline.smoothChildTiming&&this._time>0&&this._time<this._duration&&0!==t&&this.totalTime(this._totalTime*(t/this._duration),!0),this):(this._dirty=!1,this._duration)},n.totalDuration=function(t){return this._dirty=!1,arguments.length?this.duration(t):this._totalDuration},n.time=function(t,e){return arguments.length?(this._dirty&&this.totalDuration(),this.totalTime(t>this._duration?this._duration:t,e)):this._time},n.totalTime=function(t,e,i){if(o||a.wake(),!arguments.length)return this._totalTime;if(this._timeline){if(0>t&&!i&&(t+=this.totalDuration()),this._timeline.smoothChildTiming){this._dirty&&this.totalDuration();var s=this._totalDuration,r=this._timeline;if(t>s&&!i&&(t=s),this._startTime=(this._paused?this._pauseTime:r._time)-(this._reversed?s-t:t)/this._timeScale,r._dirty||this._uncache(!1),r._timeline)for(;r._timeline;)r._timeline._time!==(r._startTime+r._totalTime)/r._timeScale&&r.totalTime(r._totalTime,!0),r=r._timeline}this._gc&&this._enabled(!0,!1),(this._totalTime!==t||0===this._duration)&&(this.render(t,e,!1),I.length&&q())}return this},n.progress=n.totalProgress=function(t,e){return arguments.length?this.totalTime(this.duration()*t,e):this._time/this.duration()},n.startTime=function(t){return arguments.length?(t!==this._startTime&&(this._startTime=t,this.timeline&&this.timeline._sortChildren&&this.timeline.add(this,t-this._delay)),this):this._startTime},n.endTime=function(t){return this._startTime+(0!=t?this.totalDuration():this.duration())/this._timeScale},n.timeScale=function(t){if(!arguments.length)return this._timeScale;if(t=t||_,this._timeline&&this._timeline.smoothChildTiming){var e=this._pauseTime,i=e||0===e?e:this._timeline.totalTime();this._startTime=i-(i-this._startTime)*this._timeScale/t}return this._timeScale=t,this._uncache(!1)},n.reversed=function(t){return arguments.length?(t!=this._reversed&&(this._reversed=t,this.totalTime(this._timeline&&!this._timeline.smoothChildTiming?this.totalDuration()-this._totalTime:this._totalTime,!0)),this):this._reversed},n.paused=function(t){if(!arguments.length)return this._paused;if(t!=this._paused&&this._timeline){o||t||a.wake();var e=this._timeline,i=e.rawTime(),s=i-this._pauseTime;!t&&e.smoothChildTiming&&(this._startTime+=s,this._uncache(!1)),this._pauseTime=t?i:null,this._paused=t,this._active=this.isActive(),!t&&0!==s&&this._initted&&this.duration()&&this.render(e.smoothChildTiming?this._totalTime:(i-this._startTime)/this._timeScale,!0,!0)}return this._gc&&!t&&this._enabled(!0,!1),this};var C=g("core.SimpleTimeline",function(t){A.call(this,0,t),this.autoRemoveChildren=this.smoothChildTiming=!0});n=C.prototype=new A,n.constructor=C,n.kill()._gc=!1,n._first=n._last=n._recent=null,n._sortChildren=!1,n.add=n.insert=function(t,e){var i,s;if(t._startTime=Number(e||0)+t._delay,t._paused&&this!==t._timeline&&(t._pauseTime=t._startTime+(this.rawTime()-t._startTime)/t._timeScale),t.timeline&&t.timeline._remove(t,!0),t.timeline=t._timeline=this,t._gc&&t._enabled(!0,!0),i=this._last,this._sortChildren)for(s=t._startTime;i&&i._startTime>s;)i=i._prev;return i?(t._next=i._next,i._next=t):(t._next=this._first,this._first=t),t._next?t._next._prev=t:this._last=t,t._prev=i,this._recent=t,this._timeline&&this._uncache(!0),this},n._remove=function(t,e){return t.timeline===this&&(e||t._enabled(!1,!0),t._prev?t._prev._next=t._next:this._first===t&&(this._first=t._next),t._next?t._next._prev=t._prev:this._last===t&&(this._last=t._prev),t._next=t._prev=t.timeline=null,t===this._recent&&(this._recent=this._last),this._timeline&&this._uncache(!0)),this},n.render=function(t,e,i){var s,r=this._first;for(this._totalTime=this._time=this._rawPrevTime=t;r;)s=r._next,(r._active||t>=r._startTime&&!r._paused)&&(r._reversed?r.render((r._dirty?r.totalDuration():r._totalDuration)-(t-r._startTime)*r._timeScale,e,i):r.render((t-r._startTime)*r._timeScale,e,i)),r=s},n.rawTime=function(){return o||a.wake(),this._totalTime};var D=g("TweenLite",function(e,i,s){if(A.call(this,i,s),this.render=D.prototype.render,null==e)throw"Cannot tween a null target.";this.target=e="string"!=typeof e?e:D.selector(e)||e;var r,n,a,o=e.jquery||e.length&&e!==t&&e[0]&&(e[0]===t||e[0].nodeType&&e[0].style&&!e.nodeType),h=this.vars.overwrite;if(this._overwrite=h=null==h?Y[D.defaultOverwrite]:"number"==typeof h?h>>0:Y[h],(o||e instanceof Array||e.push&&c(e))&&"number"!=typeof e[0])for(this._targets=a=u(e),this._propLookup=[],this._siblings=[],r=0;a.length>r;r++)n=a[r],n?"string"!=typeof n?n.length&&n!==t&&n[0]&&(n[0]===t||n[0].nodeType&&n[0].style&&!n.nodeType)?(a.splice(r--,1),this._targets=a=a.concat(u(n))):(this._siblings[r]=V(n,this,!1),1===h&&this._siblings[r].length>1&&W(n,this,null,1,this._siblings[r])):(n=a[r--]=D.selector(n),"string"==typeof n&&a.splice(r+1,1)):a.splice(r--,1);else this._propLookup={},this._siblings=V(e,this,!1),1===h&&this._siblings.length>1&&W(e,this,null,1,this._siblings);(this.vars.immediateRender||0===i&&0===this._delay&&this.vars.immediateRender!==!1)&&(this._time=-_,this.render(-this._delay))},!0),M=function(e){return e&&e.length&&e!==t&&e[0]&&(e[0]===t||e[0].nodeType&&e[0].style&&!e.nodeType)},z=function(t,e){var i,s={};for(i in t)U[i]||i in e&&"transform"!==i&&"x"!==i&&"y"!==i&&"width"!==i&&"height"!==i&&"className"!==i&&"border"!==i||!(!L[i]||L[i]&&L[i]._autoCSS)||(s[i]=t[i],delete t[i]);t.css=s};n=D.prototype=new A,n.constructor=D,n.kill()._gc=!1,n.ratio=0,n._firstPT=n._targets=n._overwrittenProps=n._startAt=null,n._notifyPluginsOfEnabled=n._lazy=!1,D.version="1.14.1",D.defaultEase=n._ease=new T(null,null,1,1),D.defaultOverwrite="auto",D.ticker=a,D.autoSleep=!0,D.lagSmoothing=function(t,e){a.lagSmoothing(t,e)},D.selector=t.$||t.jQuery||function(e){var i=t.$||t.jQuery;return i?(D.selector=i,i(e)):"undefined"==typeof document?e:document.querySelectorAll?document.querySelectorAll(e):document.getElementById("#"===e.charAt(0)?e.substr(1):e)};var I=[],E={},F=D._internals={isArray:c,isSelector:M,lazyTweens:I},L=D._plugins={},N=F.tweenLookup={},X=0,U=F.reservedProps={ease:1,delay:1,overwrite:1,onComplete:1,onCompleteParams:1,onCompleteScope:1,useFrames:1,runBackwards:1,startAt:1,onUpdate:1,onUpdateParams:1,onUpdateScope:1,onStart:1,onStartParams:1,onStartScope:1,onReverseComplete:1,onReverseCompleteParams:1,onReverseCompleteScope:1,onRepeat:1,onRepeatParams:1,onRepeatScope:1,easeParams:1,yoyo:1,immediateRender:1,repeat:1,repeatDelay:1,data:1,paused:1,reversed:1,autoCSS:1,lazy:1,onOverwrite:1},Y={none:0,all:1,auto:2,concurrent:3,allOnStart:4,preexisting:5,"true":1,"false":0},j=A._rootFramesTimeline=new C,B=A._rootTimeline=new C,q=F.lazyRender=function(){var t,e=I.length;for(E={};--e>-1;)t=I[e],t&&t._lazy!==!1&&(t.render(t._lazy[0],t._lazy[1],!0),t._lazy=!1);I.length=0};B._startTime=a.time,j._startTime=a.frame,B._active=j._active=!0,setTimeout(q,1),A._updateRoot=D.render=function(){var t,e,i;if(I.length&&q(),B.render((a.time-B._startTime)*B._timeScale,!1,!1),j.render((a.frame-j._startTime)*j._timeScale,!1,!1),I.length&&q(),!(a.frame%120)){for(i in N){for(e=N[i].tweens,t=e.length;--t>-1;)e[t]._gc&&e.splice(t,1);0===e.length&&delete N[i]}if(i=B._first,(!i||i._paused)&&D.autoSleep&&!j._first&&1===a._listeners.tick.length){for(;i&&i._paused;)i=i._next;i||a.sleep()}}},a.addEventListener("tick",A._updateRoot);var V=function(t,e,i){var s,r,n=t._gsTweenID;if(N[n||(t._gsTweenID=n="t"+X++)]||(N[n]={target:t,tweens:[]}),e&&(s=N[n].tweens,s[r=s.length]=e,i))for(;--r>-1;)s[r]===e&&s.splice(r,1);return N[n].tweens},G=function(t,e,i,s){var r=t.vars.onOverwrite;r&&r(t,e,i,s),r=D.onOverwrite,r&&r(t,e,i,s)},W=function(t,e,i,s,r){var n,a,o,h;if(1===s||s>=4){for(h=r.length,n=0;h>n;n++)if((o=r[n])!==e)o._gc||(o._enabled(!1,!1)&&(a=!0),G(o,e));else if(5===s)break;return a}var l,u=e._startTime+_,p=[],c=0,f=0===e._duration;for(n=r.length;--n>-1;)(o=r[n])===e||o._gc||o._paused||(o._timeline!==e._timeline?(l=l||Q(e,0,f),0===Q(o,l,f)&&(p[c++]=o)):u>=o._startTime&&o._startTime+o.totalDuration()/o._timeScale>u&&((f||!o._initted)&&2e-10>=u-o._startTime||(p[c++]=o)));for(n=c;--n>-1;)o=p[n],2===s&&o._kill(i,t,e)&&(a=!0),(2!==s||!o._firstPT&&o._initted)&&(o._enabled(!1,!1)&&(a=!0),2!==s&&G(o,e));return a},Q=function(t,e,i){for(var s=t._timeline,r=s._timeScale,n=t._startTime;s._timeline;){if(n+=s._startTime,r*=s._timeScale,s._paused)return-100;s=s._timeline}return n/=r,n>e?n-e:i&&n===e||!t._initted&&2*_>n-e?_:(n+=t.totalDuration()/t._timeScale/r)>e+_?0:n-e-_};n._init=function(){var t,e,i,s,r,n=this.vars,a=this._overwrittenProps,o=this._duration,h=!!n.immediateRender,l=n.ease;if(n.startAt){this._startAt&&(this._startAt.render(-1,!0),this._startAt.kill()),r={};for(s in n.startAt)r[s]=n.startAt[s];if(r.overwrite=!1,r.immediateRender=!0,r.lazy=h&&n.lazy!==!1,r.startAt=r.delay=null,this._startAt=D.to(this.target,0,r),h)if(this._time>0)this._startAt=null;else if(0!==o)return}else if(n.runBackwards&&0!==o)if(this._startAt)this._startAt.render(-1,!0),this._startAt.kill(),this._startAt=null;else{0!==this._time&&(h=!1),i={};for(s in n)U[s]&&"autoCSS"!==s||(i[s]=n[s]);if(i.overwrite=0,i.data="isFromStart",i.lazy=h&&n.lazy!==!1,i.immediateRender=h,this._startAt=D.to(this.target,0,i),h){if(0===this._time)return}else this._startAt._init(),this._startAt._enabled(!1),this.vars.immediateRender&&(this._startAt=null)}if(this._ease=l=l?l instanceof T?l:"function"==typeof l?new T(l,n.easeParams):w[l]||D.defaultEase:D.defaultEase,n.easeParams instanceof Array&&l.config&&(this._ease=l.config.apply(l,n.easeParams)),this._easeType=this._ease._type,this._easePower=this._ease._power,this._firstPT=null,this._targets)for(t=this._targets.length;--t>-1;)this._initProps(this._targets[t],this._propLookup[t]={},this._siblings[t],a?a[t]:null)&&(e=!0);else e=this._initProps(this.target,this._propLookup,this._siblings,a);if(e&&D._onPluginEvent("_onInitAllProps",this),a&&(this._firstPT||"function"!=typeof this.target&&this._enabled(!1,!1)),n.runBackwards)for(i=this._firstPT;i;)i.s+=i.c,i.c=-i.c,i=i._next;this._onUpdate=n.onUpdate,this._initted=!0},n._initProps=function(e,i,s,r){var n,a,o,h,l,_;if(null==e)return!1;E[e._gsTweenID]&&q(),this.vars.css||e.style&&e!==t&&e.nodeType&&L.css&&this.vars.autoCSS!==!1&&z(this.vars,e);for(n in this.vars){if(_=this.vars[n],U[n])_&&(_ instanceof Array||_.push&&c(_))&&-1!==_.join("").indexOf("{self}")&&(this.vars[n]=_=this._swapSelfInParams(_,this));else if(L[n]&&(h=new L[n])._onInitTween(e,this.vars[n],this)){for(this._firstPT=l={_next:this._firstPT,t:h,p:"setRatio",s:0,c:1,f:!0,n:n,pg:!0,pr:h._priority},a=h._overwriteProps.length;--a>-1;)i[h._overwriteProps[a]]=this._firstPT;(h._priority||h._onInitAllProps)&&(o=!0),(h._onDisable||h._onEnable)&&(this._notifyPluginsOfEnabled=!0)}else this._firstPT=i[n]=l={_next:this._firstPT,t:e,p:n,f:"function"==typeof e[n],n:n,pg:!1,pr:0},l.s=l.f?e[n.indexOf("set")||"function"!=typeof e["get"+n.substr(3)]?n:"get"+n.substr(3)]():parseFloat(e[n]),l.c="string"==typeof _&&"="===_.charAt(1)?parseInt(_.charAt(0)+"1",10)*Number(_.substr(2)):Number(_)-l.s||0;l&&l._next&&(l._next._prev=l)}return r&&this._kill(r,e)?this._initProps(e,i,s,r):this._overwrite>1&&this._firstPT&&s.length>1&&W(e,this,i,this._overwrite,s)?(this._kill(i,e),this._initProps(e,i,s,r)):(this._firstPT&&(this.vars.lazy!==!1&&this._duration||this.vars.lazy&&!this._duration)&&(E[e._gsTweenID]=!0),o)},n.render=function(t,e,i){var s,r,n,a,o=this._time,h=this._duration,l=this._rawPrevTime;if(t>=h)this._totalTime=this._time=h,this.ratio=this._ease._calcEnd?this._ease.getRatio(1):1,this._reversed||(s=!0,r="onComplete"),0===h&&(this._initted||!this.vars.lazy||i)&&(this._startTime===this._timeline._duration&&(t=0),(0===t||0>l||l===_)&&l!==t&&(i=!0,l>_&&(r="onReverseComplete")),this._rawPrevTime=a=!e||t||l===t?t:_);else if(1e-7>t)this._totalTime=this._time=0,this.ratio=this._ease._calcEnd?this._ease.getRatio(0):0,(0!==o||0===h&&l>0&&l!==_)&&(r="onReverseComplete",s=this._reversed),0>t&&(this._active=!1,0===h&&(this._initted||!this.vars.lazy||i)&&(l>=0&&(i=!0),this._rawPrevTime=a=!e||t||l===t?t:_)),this._initted||(i=!0);else if(this._totalTime=this._time=t,this._easeType){var u=t/h,p=this._easeType,c=this._easePower;(1===p||3===p&&u>=.5)&&(u=1-u),3===p&&(u*=2),1===c?u*=u:2===c?u*=u*u:3===c?u*=u*u*u:4===c&&(u*=u*u*u*u),this.ratio=1===p?1-u:2===p?u:.5>t/h?u/2:1-u/2}else this.ratio=this._ease.getRatio(t/h);if(this._time!==o||i){if(!this._initted){if(this._init(),!this._initted||this._gc)return;if(!i&&this._firstPT&&(this.vars.lazy!==!1&&this._duration||this.vars.lazy&&!this._duration))return this._time=this._totalTime=o,this._rawPrevTime=l,I.push(this),this._lazy=[t,e],void 0;this._time&&!s?this.ratio=this._ease.getRatio(this._time/h):s&&this._ease._calcEnd&&(this.ratio=this._ease.getRatio(0===this._time?0:1))}for(this._lazy!==!1&&(this._lazy=!1),this._active||!this._paused&&this._time!==o&&t>=0&&(this._active=!0),0===o&&(this._startAt&&(t>=0?this._startAt.render(t,e,i):r||(r="_dummyGS")),this.vars.onStart&&(0!==this._time||0===h)&&(e||this.vars.onStart.apply(this.vars.onStartScope||this,this.vars.onStartParams||y))),n=this._firstPT;n;)n.f?n.t[n.p](n.c*this.ratio+n.s):n.t[n.p]=n.c*this.ratio+n.s,n=n._next;this._onUpdate&&(0>t&&this._startAt&&t!==-1e-4&&this._startAt.render(t,e,i),e||(this._time!==o||s)&&this._onUpdate.apply(this.vars.onUpdateScope||this,this.vars.onUpdateParams||y)),r&&(!this._gc||i)&&(0>t&&this._startAt&&!this._onUpdate&&t!==-1e-4&&this._startAt.render(t,e,i),s&&(this._timeline.autoRemoveChildren&&this._enabled(!1,!1),this._active=!1),!e&&this.vars[r]&&this.vars[r].apply(this.vars[r+"Scope"]||this,this.vars[r+"Params"]||y),0===h&&this._rawPrevTime===_&&a!==_&&(this._rawPrevTime=0))}},n._kill=function(t,e,i){if("all"===t&&(t=null),null==t&&(null==e||e===this.target))return this._lazy=!1,this._enabled(!1,!1);e="string"!=typeof e?e||this._targets||this.target:D.selector(e)||e;var s,r,n,a,o,h,l,_,u;if((c(e)||M(e))&&"number"!=typeof e[0])for(s=e.length;--s>-1;)this._kill(t,e[s])&&(h=!0);else{if(this._targets){for(s=this._targets.length;--s>-1;)if(e===this._targets[s]){o=this._propLookup[s]||{},this._overwrittenProps=this._overwrittenProps||[],r=this._overwrittenProps[s]=t?this._overwrittenProps[s]||{}:"all";break}}else{if(e!==this.target)return!1;o=this._propLookup,r=this._overwrittenProps=t?this._overwrittenProps||{}:"all"}if(o){l=t||o,_=t!==r&&"all"!==r&&t!==o&&("object"!=typeof t||!t._tempKill);for(n in l)(a=o[n])&&(u||(u=[]),u.push(n),a.pg&&a.t._kill(l)&&(h=!0),a.pg&&0!==a.t._overwriteProps.length||(a._prev?a._prev._next=a._next:a===this._firstPT&&(this._firstPT=a._next),a._next&&(a._next._prev=a._prev),a._next=a._prev=null),delete o[n]),_&&(r[n]=1);
!this._firstPT&&this._initted&&this._enabled(!1,!1),u&&i&&G(this,i,e,u)}}return h},n.invalidate=function(){return this._notifyPluginsOfEnabled&&D._onPluginEvent("_onDisable",this),this._firstPT=this._overwrittenProps=this._startAt=this._onUpdate=null,this._notifyPluginsOfEnabled=this._active=this._lazy=!1,this._propLookup=this._targets?{}:[],A.prototype.invalidate.call(this),this.vars.immediateRender&&(this._time=-_,this.render(-this._delay)),this},n._enabled=function(t,e){if(o||a.wake(),t&&this._gc){var i,s=this._targets;if(s)for(i=s.length;--i>-1;)this._siblings[i]=V(s[i],this,!0);else this._siblings=V(this.target,this,!0)}return A.prototype._enabled.call(this,t,e),this._notifyPluginsOfEnabled&&this._firstPT?D._onPluginEvent(t?"_onEnable":"_onDisable",this):!1},D.to=function(t,e,i){return new D(t,e,i)},D.from=function(t,e,i){return i.runBackwards=!0,i.immediateRender=0!=i.immediateRender,new D(t,e,i)},D.fromTo=function(t,e,i,s){return s.startAt=i,s.immediateRender=0!=s.immediateRender&&0!=i.immediateRender,new D(t,e,s)},D.delayedCall=function(t,e,i,s,r){return new D(e,0,{delay:t,onComplete:e,onCompleteParams:i,onCompleteScope:s,onReverseComplete:e,onReverseCompleteParams:i,onReverseCompleteScope:s,immediateRender:!1,useFrames:r,overwrite:0})},D.set=function(t,e){return new D(t,0,e)},D.getTweensOf=function(t,e){if(null==t)return[];t="string"!=typeof t?t:D.selector(t)||t;var i,s,r,n;if((c(t)||M(t))&&"number"!=typeof t[0]){for(i=t.length,s=[];--i>-1;)s=s.concat(D.getTweensOf(t[i],e));for(i=s.length;--i>-1;)for(n=s[i],r=i;--r>-1;)n===s[r]&&s.splice(i,1)}else for(s=V(t).concat(),i=s.length;--i>-1;)(s[i]._gc||e&&!s[i].isActive())&&s.splice(i,1);return s},D.killTweensOf=D.killDelayedCallsTo=function(t,e,i){"object"==typeof e&&(i=e,e=!1);for(var s=D.getTweensOf(t,e),r=s.length;--r>-1;)s[r]._kill(i,t)};var Z=g("plugins.TweenPlugin",function(t,e){this._overwriteProps=(t||"").split(","),this._propName=this._overwriteProps[0],this._priority=e||0,this._super=Z.prototype},!0);if(n=Z.prototype,Z.version="1.10.1",Z.API=2,n._firstPT=null,n._addTween=function(t,e,i,s,r,n){var a,o;return null!=s&&(a="number"==typeof s||"="!==s.charAt(1)?Number(s)-i:parseInt(s.charAt(0)+"1",10)*Number(s.substr(2)))?(this._firstPT=o={_next:this._firstPT,t:t,p:e,s:i,c:a,f:"function"==typeof t[e],n:r||e,r:n},o._next&&(o._next._prev=o),o):void 0},n.setRatio=function(t){for(var e,i=this._firstPT,s=1e-6;i;)e=i.c*t+i.s,i.r?e=Math.round(e):s>e&&e>-s&&(e=0),i.f?i.t[i.p](e):i.t[i.p]=e,i=i._next},n._kill=function(t){var e,i=this._overwriteProps,s=this._firstPT;if(null!=t[this._propName])this._overwriteProps=[];else for(e=i.length;--e>-1;)null!=t[i[e]]&&i.splice(e,1);for(;s;)null!=t[s.n]&&(s._next&&(s._next._prev=s._prev),s._prev?(s._prev._next=s._next,s._prev=null):this._firstPT===s&&(this._firstPT=s._next)),s=s._next;return!1},n._roundProps=function(t,e){for(var i=this._firstPT;i;)(t[this._propName]||null!=i.n&&t[i.n.split(this._propName+"_").join("")])&&(i.r=e),i=i._next},D._onPluginEvent=function(t,e){var i,s,r,n,a,o=e._firstPT;if("_onInitAllProps"===t){for(;o;){for(a=o._next,s=r;s&&s.pr>o.pr;)s=s._next;(o._prev=s?s._prev:n)?o._prev._next=o:r=o,(o._next=s)?s._prev=o:n=o,o=a}o=e._firstPT=r}for(;o;)o.pg&&"function"==typeof o.t[t]&&o.t[t]()&&(i=!0),o=o._next;return i},Z.activate=function(t){for(var e=t.length;--e>-1;)t[e].API===Z.API&&(L[(new t[e])._propName]=t[e]);return!0},d.plugin=function(t){if(!(t&&t.propName&&t.init&&t.API))throw"illegal plugin definition.";var e,i=t.propName,s=t.priority||0,r=t.overwriteProps,n={init:"_onInitTween",set:"setRatio",kill:"_kill",round:"_roundProps",initAll:"_onInitAllProps"},a=g("plugins."+i.charAt(0).toUpperCase()+i.substr(1)+"Plugin",function(){Z.call(this,i,s),this._overwriteProps=r||[]},t.global===!0),o=a.prototype=new Z(i);o.constructor=a,a.API=t.API;for(e in n)"function"==typeof t[e]&&(o[n[e]]=t[e]);return a.version=t.version,Z.activate([a]),a},s=t._gsQueue){for(r=0;s.length>r;r++)s[r]();for(n in f)f[n].func||t.console.log("GSAP encountered missing dependency: com.greensock."+n)}o=!1}}("undefined"!=typeof module&&module.exports&&"undefined"!=typeof global?global:this||window,"TweenMax");

/*!
 * VERSION: 1.7.4
 * DATE: 2014-07-17
 * UPDATES AND DOCS AT: http://www.greensock.com
 *
 * @license Copyright (c) 2008-2014, GreenSock. All rights reserved.
 * This work is subject to the terms at http://www.greensock.com/terms_of_use.html or for
 * Club GreenSock members, the software agreement that was issued with your membership.
 * 
 * @author: Jack Doyle, jack@greensock.com
 **/
var _gsScope="undefined"!=typeof module&&module.exports&&"undefined"!=typeof global?global:this||window;(_gsScope._gsQueue||(_gsScope._gsQueue=[])).push(function(){"use strict";var t=document.documentElement,e=window,i=function(i,r){var s="x"===r?"Width":"Height",n="scroll"+s,o="client"+s,a=document.body;return i===e||i===t||i===a?Math.max(t[n],a[n])-(e["inner"+s]||Math.max(t[o],a[o])):i[n]-i["offset"+s]},r=_gsScope._gsDefine.plugin({propName:"scrollTo",API:2,version:"1.7.4",init:function(t,r,s){return this._wdw=t===e,this._target=t,this._tween=s,"object"!=typeof r&&(r={y:r}),this.vars=r,this._autoKill=r.autoKill!==!1,this.x=this.xPrev=this.getX(),this.y=this.yPrev=this.getY(),null!=r.x?(this._addTween(this,"x",this.x,"max"===r.x?i(t,"x"):r.x,"scrollTo_x",!0),this._overwriteProps.push("scrollTo_x")):this.skipX=!0,null!=r.y?(this._addTween(this,"y",this.y,"max"===r.y?i(t,"y"):r.y,"scrollTo_y",!0),this._overwriteProps.push("scrollTo_y")):this.skipY=!0,!0},set:function(t){this._super.setRatio.call(this,t);var r=this._wdw||!this.skipX?this.getX():this.xPrev,s=this._wdw||!this.skipY?this.getY():this.yPrev,n=s-this.yPrev,o=r-this.xPrev;this._autoKill&&(!this.skipX&&(o>7||-7>o)&&i(this._target,"x")>r&&(this.skipX=!0),!this.skipY&&(n>7||-7>n)&&i(this._target,"y")>s&&(this.skipY=!0),this.skipX&&this.skipY&&(this._tween.kill(),this.vars.onAutoKill&&this.vars.onAutoKill.apply(this.vars.onAutoKillScope||this._tween,this.vars.onAutoKillParams||[]))),this._wdw?e.scrollTo(this.skipX?r:this.x,this.skipY?s:this.y):(this.skipY||(this._target.scrollTop=this.y),this.skipX||(this._target.scrollLeft=this.x)),this.xPrev=this.x,this.yPrev=this.y}}),s=r.prototype;r.max=i,s.getX=function(){return this._wdw?null!=e.pageXOffset?e.pageXOffset:null!=t.scrollLeft?t.scrollLeft:document.body.scrollLeft:this._target.scrollLeft},s.getY=function(){return this._wdw?null!=e.pageYOffset?e.pageYOffset:null!=t.scrollTop?t.scrollTop:document.body.scrollTop:this._target.scrollTop},s._kill=function(t){return t.scrollTo_x&&(this.skipX=!0),t.scrollTo_y&&(this.skipY=!0),this._super._kill.call(this,t)}}),_gsScope._gsDefine&&_gsScope._gsQueue.pop()();


/*
ScrollMagic v1.2.3
The jQuery plugin for doing magical scroll interactions.
(c) 2014 Jan Paepke (@janpaepke)
License & Info: http://janpaepke.github.io/ScrollMagic
  
Inspired by and partially based on SUPERSCROLLORAMA by John Polacek (@johnpolacek)
http://johnpolacek.github.com/superscrollorama/

Powered by the Greensock Tweening Platform (GSAP): http://www.greensock.com/js
Greensock License info at http://www.greensock.com/licensing/
*/
/**
@overview ##Info
@version  1.2.3
@license  Dual licensed under MIT license and GPL.
@author   Jan Paepke - e-mail@janpaepke.de

@todo: enhancement: remove dependencies and move to plugins -> 2.0
@todo: bug: when cascading pins (pinning one element multiple times) and later removing them without reset, positioning errors occur.
@todo: bug: having multiple scroll directions with cascaded pins doesn't work (one scroll vertical, one horizontal)
@todo: feature: optimize performance on debug plugin (huge drawbacks, when using many scenes)
*/
(function(root) {
  
  "use strict";

  var define = root.define, ScrollMagic, ScrollScene;
  ScrollScene = ScrollMagic = function () {};
  if (typeof define !== 'function' || !define.amd) {
    // No AMD loader -> Provide custom method to to register browser globals instead
    define = function (moduleName, dependencies, factory) {
      for (var x = 0, dependency; x<dependencies.length; x++) {
        dependency = dependencies[x];
        if (dependency === 'jquery') { // lowercase with require, but camel case as global
          dependency = 'jQuery';
        }
        dependencies[x] = root[dependency];
      }
      root[moduleName] = factory.apply(root, dependencies);
    };
  }

define('ScrollMagic', ['jquery', 'TweenMax', 'TimelineMax'], function ($, TweenMax, TimelineMax) {
  /**
   * The main class that is needed once per scroll container.
   *
   * @class
   * @global
   *
   * @example
   * // basic initialization
   * var controller = new ScrollMagic();
   *
   * // passing options
   * var controller = new ScrollMagic({container: "#myContainer", loglevel: 3});
   *
   * @param {object} [options] - An object containing one or more options for the controller.
   * @param {(string|object)} [options.container=window] - A selector, DOM object or a jQuery object that references the main container for scrolling.
   * @param {boolean} [options.vertical=true] - Sets the scroll mode to vertical (`true`) or horizontal (`false`) scrolling.
   * @param {object} [options.globalSceneOptions={}] - These options will be passed to every Scene that is added to the controller using the addScene method. For more information on Scene options see {@link ScrollScene}.
   * @param {number} [options.loglevel=2] Loglevel for debugging. Note that logging is disabled in the minified version of ScrollMagic.
                       ** `0` => silent
                       ** `1` => errors
                       ** `2` => errors, warnings
                       ** `3` => errors, warnings, debuginfo
   * @param {boolean} [options.refreshInterval=100] - Some changes don't call events by default, like changing the container size or moving a scene trigger element.  
                                                       This interval polls these parameters to fire the necessary events.  
                                                       If you don't use custom containers, trigger elements or have static layouts, where the positions of the trigger elements don't change, you can set this to 0 disable interval checking and improve performance.
   *
   */
  ScrollMagic = function(options) {

    /*
     * ----------------------------------------------------------------
     * settings
     * ----------------------------------------------------------------
     */
    var
      NAMESPACE = "ScrollMagic",
      DEFAULT_OPTIONS = {
        container: window,
        vertical: true,
        globalSceneOptions: {},
        loglevel: 2,
        refreshInterval: 100
      };

    /*
     * ----------------------------------------------------------------
     * private vars
     * ----------------------------------------------------------------
     */

    var
      ScrollMagic = this,
      _options = $.extend({}, DEFAULT_OPTIONS, options),
      _sceneObjects = [],
      _updateScenesOnNextCycle = false,   // can be boolean (true => all scenes) or an array of scenes to be updated
      _scrollPos = 0,
      _scrollDirection = "PAUSED",
      _isDocument = true,
      _viewPortSize = 0,
      _enabled = true,
      _updateCycle,
      _refreshInterval;

    /*
     * ----------------------------------------------------------------
     * private functions
     * ----------------------------------------------------------------
     */

    /**
     * Internal constructor function of ScrollMagic
     * @private
     */
    var construct = function () {
      ScrollMagic.version = ScrollMagic.constructor.version;
      $.each(_options, function (key, value) {
        if (!DEFAULT_OPTIONS.hasOwnProperty(key)) {
          log(2, "WARNING: Unknown option \"" + key + "\"");
          delete _options[key];
        }
      });
      _options.container = $(_options.container).first();
      // check ScrollContainer
      if (_options.container.length === 0) {
        log(1, "ERROR creating object " + NAMESPACE + ": No valid scroll container supplied");
        throw NAMESPACE + " init failed."; // cancel
      }
      _isDocument = !$.contains(document, _options.container.get(0));
      // prevent bubbling of fake resize event to window
      if (!_isDocument) {
        _options.container.on('resize', function ( e ) {
          e.stopPropagation();
        });
      }
      // update container size immediately
      _viewPortSize = _options.vertical ? _options.container.height() : _options.container.width();
      // set event handlers
      _options.container.on("scroll resize", onChange);

      _options.refreshInterval = parseInt(_options.refreshInterval);
      if (_options.refreshInterval > 0) {
        _refreshInterval = window.setInterval(refresh, _options.refreshInterval);
      }

      // start checking for changes
      _updateCycle = animationFrameCallback(updateScenes);
      log(3, "added new " + NAMESPACE + " controller (v" + ScrollMagic.version + ")");
    };

    /**
    * Default function to get scroll pos - overwriteable using `ScrollMagic.scrollPos(newFunction)`
    * @private
    */
    var getScrollPos = function () {
      return _options.vertical ? _options.container.scrollTop() : _options.container.scrollLeft();
    };
    /**
    * Default function to set scroll pos - overwriteable using `ScrollMagic.scrollTo(newFunction)`
    * @private
    */
    var setScrollPos = function (pos) {
      if (_options.vertical) {
        _options.container.scrollTop(pos);
      } else {
        _options.container.scrollLeft(pos);
      }
    };

    /**
    * Handle updates in cycles instead of on scroll (performance)
    * @private
    */
    var updateScenes = function () {
      _updateCycle = animationFrameCallback(updateScenes);
      if (_enabled && _updateScenesOnNextCycle) {
        var
          scenesToUpdate = $.isArray(_updateScenesOnNextCycle) ? _updateScenesOnNextCycle : _sceneObjects.slice(0),
          oldScrollPos = _scrollPos;
        // update scroll pos & direction
        _scrollPos = ScrollMagic.scrollPos();
        var deltaScroll = _scrollPos - oldScrollPos;
        _scrollDirection = (deltaScroll === 0) ? "PAUSED" : (deltaScroll > 0) ? "FORWARD" : "REVERSE";
        if (deltaScroll < 0) { // reverse order if scrolling reverse
          scenesToUpdate.reverse();
        }
        // update scenes
        $.each(scenesToUpdate, function (index, scene) {
          log(3, "updating Scene " + (index + 1) + "/" + scenesToUpdate.length + " (" + _sceneObjects.length + " total)");
          scene.update(true);
        });
        if (scenesToUpdate.length === 0 && _options.loglevel >= 3) {
          log(3, "updating 0 Scenes (nothing added to controller)");
        }
        _updateScenesOnNextCycle = false;
      }
    };
    
    /**
    * Handles Container changes
    * @private
    */
    var onChange = function (e) {
      if (e.type == "resize") {
        _viewPortSize = _options.vertical ? _options.container.height() : _options.container.width();
      }
      _updateScenesOnNextCycle = true;
    };

    var refresh = function () {
      if (!_isDocument) {
        // simulate resize event. Only works for viewport relevant param
        if (_viewPortSize != (_options.vertical ? _options.container.height() : _options.container.width())) {
          _options.container.trigger("resize");
        }
      }
      $.each(_sceneObjects, function (index, scene) {// refresh all scenes
        scene.refresh();
      });
    };

    /**
     * Send a debug message to the console.
     * @private
     *
     * @param {number} loglevel - The loglevel required to initiate output for the message.
     * @param {...mixed} output - One or more variables that should be passed to the console.
     */
    var log = function (loglevel, output) {
      if (_options.loglevel >= loglevel) {
        var
          prefix = "(" + NAMESPACE + ") ->",
          args = Array.prototype.splice.call(arguments, 1);
        args.unshift(loglevel, prefix);
        debug.apply(window, args);
      }
    };

    /**
     * Sort scenes in ascending order of their start offset.
     * @private
     *
     * @param {array} ScrollScenesArray - an array of ScrollScenes that should be sorted
     * @return {array} The sorted array of ScrollScenes.
     */
    var sortScenes = function (ScrollScenesArray) {
      if (ScrollScenesArray.length <= 1) {
        return ScrollScenesArray;
      } else {
        var scenes = ScrollScenesArray.slice(0);
        scenes.sort(function(a, b) {
          return a.scrollOffset() > b.scrollOffset() ? 1 : -1;
        });
        return scenes;
      }
    };

    /*
     * ----------------------------------------------------------------
     * public functions
     * ----------------------------------------------------------------
     */

    /**
     * Add one ore more scene(s) to the controller.  
     * This is the equivalent to `ScrollScene.addTo(controller)`.
     * @public
     * @example
     * // with a previously defined scene
     * controller.addScene(scene);
     *
     * // with a newly created scene.
     * controller.addScene(new ScrollScene({duration : 0}));
     *
     * // adding multiple scenes
     * controller.addScene([scene, scene2, new ScrollScene({duration : 0})]);
     *
     * @param {(ScrollScene|array)} ScrollScene - ScrollScene or Array of ScrollScenes to be added to the controller.
     * @return {ScrollMagic} Parent object for chaining.
     */
    this.addScene = function (newScene) {
      if ($.isArray(newScene)) {
        $.each(newScene, function (index, scene) {
          ScrollMagic.addScene(scene);
        });
      } else if (newScene instanceof ScrollScene) {
        if (newScene.parent() != ScrollMagic) {
          newScene.addTo(ScrollMagic);
        } else if ($.inArray(newScene, _sceneObjects) < 0){
          // new scene
          _sceneObjects.push(newScene); // add to array
          _sceneObjects = sortScenes(_sceneObjects); // sort
          newScene.on("shift." + NAMESPACE + "_sort", function() { // resort whenever scene moves
            _sceneObjects = sortScenes(_sceneObjects);
          });
          // insert Global defaults.
          $.each(_options.globalSceneOptions, function (key, value) {
            if (newScene[key]) {
              newScene[key].call(newScene, value);
            }
          });
          log(3, "added Scene (" + _sceneObjects.length + " total)");
        }
      } else {
        log(1, "ERROR: invalid argument supplied for '.addScene()'");
      }
      return ScrollMagic;
    };

    /**
     * Remove one ore more scene(s) from the controller.  
     * This is the equivalent to `ScrollScene.remove()`.
     * @public
     * @example
     * // remove a scene from the controller
     * controller.removeScene(scene);
     *
     * // remove multiple scenes from the controller
     * controller.removeScene([scene, scene2, scene3]);
     *
     * @param {(ScrollScene|array)} ScrollScene - ScrollScene or Array of ScrollScenes to be removed from the controller.
     * @returns {ScrollMagic} Parent object for chaining.
     */
    this.removeScene = function (ScrollScene) {
      if ($.isArray(ScrollScene)) {
        $.each(ScrollScene, function (index, scene) {
          ScrollMagic.removeScene(scene);
        });
      } else {
        var index = $.inArray(ScrollScene, _sceneObjects);
        if (index > -1) {
          ScrollScene.off("shift." + NAMESPACE + "_sort");
          _sceneObjects.splice(index, 1);
          ScrollScene.remove();
          log(3, "removed Scene (" + _sceneObjects.length + " total)");
        }
      }
      return ScrollMagic;
    };

    /**
     * Update one ore more scene(s) according to the scroll position of the container.  
     * This is the equivalent to `ScrollScene.update()`.  
     * The update method calculates the scene's start and end position (based on the trigger element, trigger hook, duration and offset) and checks it against the current scroll position of the container.  
     * It then updates the current scene state accordingly (or does nothing, if the state is already correct) – Pins will be set to their correct position and tweens will be updated to their correct progress.  
     * _**Note:** This method gets called constantly whenever ScrollMagic detects a change. The only application for you is if you change something outside of the realm of ScrollMagic, like moving the trigger or changing tween parameters._
     * @public
     * @example
     * // update a specific scene on next cycle
     * controller.updateScene(scene);
     *
     * // update a specific scene immediately
     * controller.updateScene(scene, true);
     *
     * // update multiple scenes scene on next cycle
     * controller.updateScene([scene1, scene2, scene3]);
     *
     * @param {ScrollScene} ScrollScene - ScrollScene or Array of ScrollScenes that is/are supposed to be updated.
     * @param {boolean} [immediately=false] - If `true` the update will be instant, if `false` it will wait until next update cycle.  
                          This is useful when changing multiple properties of the scene - this way it will only be updated once all new properties are set (updateScenes).
     * @return {ScrollMagic} Parent object for chaining.
     */
    this.updateScene = function (ScrollScene, immediately) {
      if ($.isArray(ScrollScene)) {
        $.each(ScrollScene, function (index, scene) {
          ScrollMagic.updateScene(scene, immediately);
        });
      } else {
        if (immediately) {
          ScrollScene.update(true);
        } else {
          // prep array for next update cycle
          if (!$.isArray(_updateScenesOnNextCycle)) {
            _updateScenesOnNextCycle = [];
          }
          if ($.inArray(ScrollScene, _updateScenesOnNextCycle) == -1) {
            _updateScenesOnNextCycle.push(ScrollScene); 
          }
          _updateScenesOnNextCycle = sortScenes(_updateScenesOnNextCycle); // sort
        }
      }
      return ScrollMagic;
    };

    /**
     * Updates the controller params and calls updateScene on every scene, that is attached to the controller.  
     * See `ScrollMagic.updateScene()` for more information about what this means.  
     * In most cases you will not need this function, as it is called constantly, whenever ScrollMagic detects a state change event, like resize or scroll.  
     * The only application for this method is when ScrollMagic fails to detect these events.  
     * One application is with some external scroll libraries (like iScroll) that move an internal container to a negative offset instead of actually scrolling. In this case the update on the controller needs to be called whenever the child container's position changes.
     * For this case there will also be the need to provide a custom function to calculate the correct scroll position. See `ScrollMagic.scrollPos()` for details.
     * @public
     * @example
     * // update the controller on next cycle (saves performance due to elimination of redundant updates)
     * controller.update();
     *
     * // update the controller immediately
     * controller.update(true);
     *
     * @param {boolean} [immediately=false] - If `true` the update will be instant, if `false` it will wait until next update cycle (better performance)
     * @return {ScrollMagic} Parent object for chaining.
     */
    this.update = function (immediately) {
      onChange({type: "resize"}); // will update size and set _updateScenesOnNextCycle to true
      if (immediately) {
        updateScenes();
      }
      return ScrollMagic;
    };

    /**
     * Scroll to a numeric scroll offset, a DOM element, the start of a scene or provide an alternate method for scrolling.  
     * For vertical controllers it will change the top scroll offset and for horizontal applications it will change the left offset.
     * @public
     *
     * @since 1.1.0
     * @example
     * // scroll to an offset of 100
     * controller.scrollTo(100);
     *
     * // scroll to a DOM element
     * controller.scrollTo("#anchor");
     *
     * // scroll to the beginning of a scene
     * var scene = new ScrollScene({offset: 200});
     * controller.scrollTo(scene);
     *
     * // define a new scroll position modification function (animate instead of jump)
     * controller.scrollTo(function (newScrollPos) {
     *  $("body").animate({scrollTop: newScrollPos});
     * });
     *
     * @param {mixed} [scrollTarget] - The supplied argument can be one of these types:
     * 1. `number` -> The container will scroll to this new scroll offset.
     * 2. `string` or `object` -> Can be a selector, a DOM object or a jQuery element.  
     *  The container will scroll to the position of this element.
     * 3. `ScrollScene` -> The container will scroll to the start of this scene.
     * 4. `function` -> This function will be used as a callback for future scroll position modifications.  
     *  This provides a way for you to change the behaviour of scrolling and adding new behaviour like animation. The callback receives the new scroll position as a parameter and a reference to the container element using `this`.  
     *  _**NOTE:** All other options will still work as expected, using the new function to scroll._
     * @returns {ScrollMagic} Parent object for chaining.
     */
    this.scrollTo = function (scrollTarget) {
      if (scrollTarget instanceof ScrollScene) {
        if (scrollTarget.parent() === ScrollMagic) { // check if this controller is the parent
          ScrollMagic.scrollTo(scrollTarget.scrollOffset());
        } else {
          log (2, "scrollTo(): The supplied scene does not belong to this controller. Scroll cancelled.", scrollTarget);
        }
      } else if ($.type(scrollTarget) === "string" || isDomElement(scrollTarget) || scrollTarget instanceof $) {
        var $elm = $(scrollTarget).first();
        if ($elm[0]) {
          var
            param = _options.vertical ? "top" : "left", // which param is of interest ?
            containerOffset = getOffset(_options.container), // container position is needed because element offset is returned in relation to document, not in relation to container.
            elementOffset = getOffset($elm);

          if (!_isDocument) { // container is not the document root, so substract scroll Position to get correct trigger element position relative to scrollcontent
            containerOffset[param] -= ScrollMagic.scrollPos();
          }

          ScrollMagic.scrollTo(elementOffset[param] - containerOffset[param]);
        } else {
          log (2, "scrollTo(): The supplied element could not be found. Scroll cancelled.", scrollTarget);
        }
      } else if ($.isFunction(scrollTarget)) {
        setScrollPos = scrollTarget;
      } else {
        setScrollPos.call(_options.container[0], scrollTarget);
      }
      return ScrollMagic;
    };

    /**
     * **Get** the current scrollPosition or **Set** a new method to calculate it.  
     * -> **GET**:
     * When used as a getter this function will return the current scroll position.  
     * To get a cached value use ScrollMagic.info("scrollPos"), which will be updated in the update cycle.  
     * For vertical controllers it will return the top scroll offset and for horizontal applications it will return the left offset.
     *
     * -> **SET**:
     * When used as a setter this method prodes a way to permanently overwrite the controller's scroll position calculation.  
     * A typical usecase is when the scroll position is not reflected by the containers scrollTop or scrollLeft values, but for example by the inner offset of a child container.  
     * Moving a child container inside a parent is a commonly used method for several scrolling frameworks, including iScroll.  
     * By providing an alternate calculation function you can make sure ScrollMagic receives the correct scroll position.  
     * Please also bear in mind that your function should return y values for vertical scrolls an x for horizontals.
     *
     * To change the current scroll position please use `ScrollMagic.scrollTo()`.
     * @public
     *
     * @example
     * // get the current scroll Position
     * var scrollPos = controller.scrollPos();
     *
     * // set a new scroll position calculation method
     * controller.scrollPos(function () {
     *  return this.info("vertical") ? -$mychildcontainer.y : -$mychildcontainer.x
     * });
     *
     * @param {function} [scrollPosMethod] - The function to be used for the scroll position calculation of the container.
     * @returns {(number|ScrollMagic)} Current scroll position or parent object for chaining.
     */
    this.scrollPos = function (scrollPosMethod) {
      if (!arguments.length) { // get
        return getScrollPos.call(ScrollMagic);
      } else { // set
        if ($.isFunction(scrollPosMethod)) {
          getScrollPos = scrollPosMethod;
        } else {
          log(2, "Provided value for method 'scrollPos' is not a function. To change the current scroll position use 'scrollTo()'.");
        }
      }
      return ScrollMagic;
    };

    /**
     * **Get** all infos or one in particular about the controller.
     * @public
     * @example
     * // returns the current scroll position (number)
     * var scrollPos = controller.info("scrollPos");
     *
     * // returns all infos as an object
     * var infos = controller.info();
     *
     * @param {string} [about] - If passed only this info will be returned instead of an object containing all.  
                   Valid options are:
                   ** `"size"` => the current viewport size of the container
                   ** `"vertical"` => true if vertical scrolling, otherwise false
                   ** `"scrollPos"` => the current scroll position
                   ** `"scrollDirection"` => the last known direction of the scroll
                   ** `"container"` => the container element
                   ** `"isDocument"` => true if container element is the document.
     * @returns {(mixed|object)} The requested info(s).
     */
    this.info = function (about) {
      var values = {
        size: _viewPortSize, // contains height or width (in regard to orientation);
        vertical: _options.vertical,
        scrollPos: _scrollPos,
        scrollDirection: _scrollDirection,
        container: _options.container,
        isDocument: _isDocument
      };
      if (!arguments.length) { // get all as an object
        return values;
      } else if (values[about] !== undefined) {
        return values[about];
      } else {
        log(1, "ERROR: option \"" + about + "\" is not available");
        return;
      }
    };

    /**
     * **Get** or **Set** the current loglevel option value.
     * @public
     *
     * @example
     * // get the current value
     * var loglevel = controller.loglevel();
     *
     * // set a new value
     * controller.loglevel(3);
     *
     * @param {number} [newLoglevel] - The new loglevel setting of the ScrollMagic controller. `[0-3]`
     * @returns {(number|ScrollMagic)} Current loglevel or parent object for chaining.
     */
    this.loglevel = function (newLoglevel) {
      if (!arguments.length) { // get
        return _options.loglevel;
      } else if (_options.loglevel != newLoglevel) { // set
        _options.loglevel = newLoglevel;
      }
      return ScrollMagic;
    };

    /**
     * **Get** or **Set** the current enabled state of the controller.  
     * This can be used to disable all Scenes connected to the controller without destroying or removing them.
     * @public
     *
     * @example
     * // get the current value
     * var enabled = controller.enabled();
     *
     * // disable the controller
     * controller.enabled(false);
     *
     * @param {boolean} [newState] - The new enabled state of the controller `true` or `false`.
     * @returns {(boolean|ScrollMagic)} Current enabled state or parent object for chaining.
     */
    this.enabled = function (newState) {
      if (!arguments.length) { // get
        return _enabled;
      } else if (_enabled != newState) { // set
        _enabled = !!newState;
        ScrollMagic.updateScene(_sceneObjects, true);
      }
      return ScrollMagic;
    };
    
    /**
     * Destroy the Controller, all Scenes and everything.
     * @public
     *
     * @example
     * // without resetting the scenes
     * controller = controller.destroy();
     *
     * // with scene reset
     * controller = controller.destroy(true);
     *
     * @param {boolean} [resetScenes=false] - If `true` the pins and tweens (if existent) of all scenes will be reset.
     * @returns {null} Null to unset handler variables.
     */
    this.destroy = function (resetScenes) {
      window.clearTimeout(_refreshInterval);
      var i = _sceneObjects.length;
      while (i--) {
        _sceneObjects[i].destroy(resetScenes);
      }
      _options.container.off("scroll resize", onChange);
      animationFrameCancelCallback(_updateCycle);
      log(3, "destroyed " + NAMESPACE + " (reset: " + (resetScenes ? "true" : "false") + ")");
      return null;
    };

    // INIT
    construct();
    return ScrollMagic;
  };
  ScrollMagic.version = "1.2.3"; // version number for browser global
  return ScrollMagic;
});

define('ScrollScene', ['jquery', 'TweenMax', 'TimelineMax'], function ($, TweenMax, TimelineMax) {
  /**
   * A ScrollScene defines where the controller should react and how.
   *
   * @class
   * @global
   *
   * @example
   * // create a standard scene and add it to a controller
   * new ScrollScene()
   *    .addTo(controller);
   *
   * // create a scene with custom options and assign a handler to it.
   * var scene = new ScrollScene({
   *    duration: 100,
   *    offset: 200,
   *    triggerHook: "onEnter",
   *    reverse: false
   * });
   *
   * @param {object} [options] - Options for the Scene. The options can be updated at any time.  
                   Instead of setting the options for each scene individually you can also set them globally in the controller as the controllers `globalSceneOptions` option. The object accepts the same properties as the ones below.  
                   When a scene is added to the controller the options defined using the ScrollScene constructor will be overwritten by those set in `globalSceneOptions`.
   * @param {(number|function)} [options.duration=0] - The duration of the scene. 
                        If `0` tweens will auto-play when reaching the scene start point, pins will be pinned indefinetly starting at the start position.  
                        A function retuning the duration value is also supported. Please see `ScrollScene.duration()` for details.
   * @param {number} [options.offset=0] - Offset Value for the Trigger Position. If no triggerElement is defined this will be the scroll distance from the start of the page, after which the scene will start.
   * @param {(string|object)} [options.triggerElement=null] - Selector, DOM object or jQuery Object that defines the start of the scene. If undefined the scene will start right at the start of the page (unless an offset is set).
   * @param {(number|string)} [options.triggerHook="onCenter"] - Can be a number between 0 and 1 defining the position of the trigger Hook in relation to the viewport.  
                                  Can also be defined using a string:
                                  ** `"onEnter"` => `1`
                                  ** `"onCenter"` => `0.5`
                                  ** `"onLeave"` => `0`
   * @param {boolean} [options.reverse=true] - Should the scene reverse, when scrolling up?
   * @param {boolean} [options.tweenChanges=false] - Tweens Animation to the progress target instead of setting it.  
                             Does not affect animations where duration is `0`.
   * @param {number} [options.loglevel=2] - Loglevel for debugging. Note that logging is disabled in the minified version of ScrollMagic.
                        ** `0` => silent
                        ** `1` => errors
                        ** `2` => errors, warnings
                        ** `3` => errors, warnings, debuginfo
   * 
   */
  ScrollScene = function (options) {

    /*
     * ----------------------------------------------------------------
     * settings
     * ----------------------------------------------------------------
     */

    var
      TRIGGER_HOOK_VALUES = {"onCenter" : 0.5, "onEnter" : 1, "onLeave" : 0},
      NAMESPACE = "ScrollScene",
      DEFAULT_OPTIONS = {
        duration: 0,
        offset: 0,
        triggerElement: null,
        triggerHook: "onCenter",
        reverse: true,
        tweenChanges: false,
        loglevel: 2
      };

    /*
     * ----------------------------------------------------------------
     * private vars
     * ----------------------------------------------------------------
     */

    var
      ScrollScene = this,
      _options = $.extend({}, DEFAULT_OPTIONS, options),
      _state = 'BEFORE',
      _progress = 0,
      _scrollOffset = {start: 0, end: 0}, // reflects the parent's scroll position for the start and end of the scene respectively
      _triggerPos = 0,
      _enabled = true,
      _durationUpdateMethod,
      _parent,
      _tween,
      _pin,
      _pinOptions,
      _cssClasses,
      _cssClassElm;

    // object containing validator functions for various options
    var _validate = {
      "unknownOptionSupplied" : function () {
          $.each(_options, function (key, value) {
          if (!DEFAULT_OPTIONS.hasOwnProperty(key)) {
            log(2, "WARNING: Unknown option \"" + key + "\"");
            delete _options[key];
          }
        });
      },
      "duration" : function () {
        if ($.isFunction(_options.duration)) {
          _durationUpdateMethod = _options.duration;
          try {
            _options.duration = parseFloat(_durationUpdateMethod());
          } catch (e) {
            log(1, "ERROR: Invalid return value of supplied function for option \"duration\":", _options.duration);
            _durationUpdateMethod = undefined;
            _options.duration = DEFAULT_OPTIONS.duration;
          }
        } else {
          _options.duration = parseFloat(_options.duration);
          if (!$.isNumeric(_options.duration) || _options.duration < 0) {
            log(1, "ERROR: Invalid value for option \"duration\":", _options.duration);
            _options.duration = DEFAULT_OPTIONS.duration;
          }
        }
      },
      "offset" : function () {
        _options.offset = parseFloat(_options.offset);
        if (!$.isNumeric(_options.offset)) {
          log(1, "ERROR: Invalid value for option \"offset\":", _options.offset);
          _options.offset = DEFAULT_OPTIONS.offset;
        }
      },
      "triggerElement" : function () {
        if (_options.triggerElement !== null && $(_options.triggerElement).length === 0) {
          log(1, "ERROR: Element defined in option \"triggerElement\" was not found:", _options.triggerElement);
          _options.triggerElement = DEFAULT_OPTIONS.triggerElement;
        }
      },
      "triggerHook" : function () {
        if (!(_options.triggerHook in TRIGGER_HOOK_VALUES)) {
          if ($.isNumeric(_options.triggerHook)) {
            _options.triggerHook = Math.max(0, Math.min(parseFloat(_options.triggerHook), 1)); //  make sure its betweeen 0 and 1
          } else {
            log(1, "ERROR: Invalid value for option \"triggerHook\": ", _options.triggerHook);
            _options.triggerHook = DEFAULT_OPTIONS.triggerHook;
          }
        }
      },
      "reverse" : function () {
        _options.reverse = !!_options.reverse; // force boolean
      },
      "tweenChanges" : function () {
        _options.tweenChanges = !!_options.tweenChanges; // force boolean
      },
      "loglevel" : function () {
        _options.loglevel = parseInt(_options.loglevel);
        if (!$.isNumeric(_options.loglevel) || _options.loglevel < 0 || _options.loglevel > 3) {
          var wrongval = _options.loglevel;
          _options.loglevel = DEFAULT_OPTIONS.loglevel;
          log(1, "ERROR: Invalid value for option \"loglevel\":", wrongval);
        }
      },
    };

    /*
     * ----------------------------------------------------------------
     * private functions
     * ----------------------------------------------------------------
     */

    /**
     * Internal constructor function of ScrollMagic
     * @private
     */
    var construct = function () {
      validateOption();

      // event listeners
      ScrollScene
        .on("change.internal", function (e) {
          if (e.what !== "loglevel" && e.what !== "tweenChanges") { // no need for a scene update scene with these options...
            if (e.what === "triggerElement") {
              updateTriggerElementPosition();
            } else if (e.what === "reverse") { // the only property left that may have an impact on the current scene state. Everything else is handled by the shift event.
              ScrollScene.update();
            }
          }
        })
        .on("shift.internal", function (e) {
          updateScrollOffset();
          ScrollScene.update(); // update scene to reflect new position
          if ((_state === "AFTER" && e.reason === "duration") || (_state === 'DURING' && _options.duration === 0)) {
            // if [duration changed after a scene (inside scene progress updates pin position)] or [duration is 0, we are in pin phase and some other value changed].
            updatePinState();
          }
        })
        .on("progress.internal", function (e) {
          updateTweenProgress();
          updatePinState();
        })
        .on("destroy", function (e) {
          e.preventDefault(); // otherwise jQuery would call target.destroy() by default.
        });
    };
    
    /**
     * Send a debug message to the console.
     * @private
     *
     * @param {number} loglevel - The loglevel required to initiate output for the message.
     * @param {...mixed} output - One or more variables that should be passed to the console.
     */
    var log = function (loglevel, output) {
      if (_options.loglevel >= loglevel) {
        var
          prefix = "(" + NAMESPACE + ") ->",
          args = Array.prototype.splice.call(arguments, 1);
        args.unshift(loglevel, prefix);
        debug.apply(window, args);
      }
    };

    /**
     * Checks the validity of a specific or all options and reset to default if neccessary.
     * @private
     */
    var validateOption = function (check) {
      if (!arguments.length) {
        check = [];
        for (var key in _validate){
          check.push(key);
        }
      } else if (!$.isArray(check)) {
        check = [check];
      }
      $.each(check, function (key, value) {
        if (_validate[value]) {
          _validate[value]();
        }
      });
    };

    /**
     * Helper used by the setter/getters for scene options
     * @private
     */
    var changeOption = function(varname, newval) {
      var
        changed = false,
        oldval = _options[varname];
      if (_options[varname] != newval) {
        _options[varname] = newval;
        validateOption(varname); // resets to default if necessary
        changed = oldval != _options[varname];
      }
      return changed;
    };

    /**
     * Update the start and end scrollOffset of the container.
     * The positions reflect what the parent's scroll position will be at the start and end respectively.
     * Is called, when:
     *   - ScrollScene event "change" is called with: offset, triggerHook, duration 
     *   - scroll container event "resize" is called
     *   - the position of the triggerElement changes
     *   - the parent changes -> addTo()
     * @private
     */
    var updateScrollOffset = function () {
      _scrollOffset = {start: _triggerPos + _options.offset};
      if (_parent && _options.triggerElement) {
        // take away triggerHook portion to get relative to top
        _scrollOffset.start -= _parent.info("size") * ScrollScene.triggerHook();
      }
      _scrollOffset.end = _scrollOffset.start + _options.duration;
    };

    /**
     * Updates the duration if set to a dynamic function.
     * This method is called when the scene is added to a controller and in regular intervals from the controller through scene.refresh().
     * 
     * @fires {@link ScrollScene.change}, if the duration changed
     * @fires {@link ScrollScene.shift}, if the duration changed
     *
     * @param {boolean} [suppressEvents=false] - If true the shift event will be suppressed.
     * @private
     */
    var updateDuration = function (suppressEvents) {
      // update duration
      if (_durationUpdateMethod) {
        var varname = "duration";
        if (changeOption(varname, _durationUpdateMethod.call(ScrollScene)) && !suppressEvents) { // set
          ScrollScene.trigger("change", {what: varname, newval: _options[varname]});
          ScrollScene.trigger("shift", {reason: varname});
        }
      }
    };

    /**
     * Updates the position of the triggerElement, if present.
     * This method is called ...
     *  - ... when the triggerElement is changed
     *  - ... when the scene is added to a (new) controller
     *  - ... in regular intervals from the controller through scene.refresh().
     * 
     * @fires {@link ScrollScene.shift}, if the position changed
     *
     * @param {boolean} [suppressEvents=false] - If true the shift event will be suppressed.
     * @private
     */
    var updateTriggerElementPosition = function (suppressEvents) {
      var elementPos = 0;
      if (_parent && _options.triggerElement) {
        var
          element = $(_options.triggerElement).first(),
          controllerInfo = _parent.info(),
          containerOffset = getOffset(controllerInfo.container), // container position is needed because element offset is returned in relation to document, not in relation to container.
          param = controllerInfo.vertical ? "top" : "left"; // which param is of interest ?
          
        // if parent is spacer, use spacer position instead so correct start position is returned for pinned elements.
        while (element.parent().data("ScrollMagicPinSpacer")) {
          element = element.parent();
        }

        var elementOffset = getOffset(element);

        if (!controllerInfo.isDocument) { // container is not the document root, so substract scroll Position to get correct trigger element position relative to scrollcontent
          containerOffset[param] -= _parent.scrollPos();
        }

        elementPos = elementOffset[param] - containerOffset[param];
      }
      var changed = elementPos != _triggerPos;
      _triggerPos = elementPos;
      if (changed && !suppressEvents) {
        ScrollScene.trigger("shift", {reason: "triggerElementPosition"});
      }
    };

    /**
     * Update the tween progress.
     * @private
     *
     * @param {number} [to] - If not set the scene Progress will be used. (most cases)
     * @return {boolean} true if the Tween was updated. 
     */
    var updateTweenProgress = function (to) {
      if (_tween) {
        var progress = (to >= 0 && to <= 1) ? to : _progress;
        if (_tween.repeat() === -1) {
          // infinite loop, so not in relation to progress
          if (_state === "DURING" && _tween.paused()) {
            _tween.play();
          } else if (_state !== "DURING" && !_tween.paused()) {
            _tween.pause();
          } else {
            return false;
          }
        } else if (progress != _tween.progress()) { // do we even need to update the progress?
          // no infinite loop - so should we just play or go to a specific point in time?
          if (_options.duration === 0) {
            // play the animation
            if (_state === "DURING") { // play from 0 to 1
              _tween.play();
            } else { // play from 1 to 0
              _tween.reverse();
            }
          } else {
            // go to a specific point in time
            if (_options.tweenChanges) {
              // go smooth
              _tween.tweenTo(progress * _tween.duration());
            } else {
              // just hard set it
              _tween.progress(progress).pause();
            }
          }
        } else {
          return false;
        }
        return true;
      } else {
        return false;
      }
    };

    /**
     * Update the pin state.
     * @private
     */
    var updatePinState = function (forceUnpin) {
      if (_pin && _parent) {
        var 
          containerInfo = _parent.info();

        if (!forceUnpin && _state === "DURING") { // during scene or if duration is 0 and we are past the trigger
          // pinned state
          if (_pin.css("position") != "fixed") {
            // change state before updating pin spacer (position changes due to fixed collapsing might occur.)
            _pin.css("position", "fixed");
            // update pin spacer
            updatePinSpacerSize();
            // add pinned class
            _pin.addClass(_pinOptions.pinnedClass);
          }

          var
            fixedPos = getOffset(_pinOptions.spacer, true), // get viewport position of spacer
            scrollDistance = _options.reverse || _options.duration === 0 ?
                       containerInfo.scrollPos - _scrollOffset.start // quicker
                     : Math.round(_progress * _options.duration * 10)/10; // if no reverse and during pin the position needs to be recalculated using the progress
          
          // remove spacer margin to get real position (in case marginCollapse mode)
          fixedPos.top -= parseFloat(_pinOptions.spacer.css("margin-top"));

          // add scrollDistance
          fixedPos[containerInfo.vertical ? "top" : "left"] += scrollDistance;

          // set new values
          _pin.css({
            top: fixedPos.top,
            left: fixedPos.left
          });
        } else {
          // unpinned state
          var
            newCSS = {
              position: _pinOptions.inFlow ? "relative" : "absolute",
              top:  0,
              left: 0
            },
            change = _pin.css("position") != newCSS.position;
          
          if (!_pinOptions.pushFollowers) {
            newCSS[containerInfo.vertical ? "top" : "left"] = _options.duration * _progress;
          } else if (_options.duration > 0) { // only concerns scenes with duration
            if (_state === "AFTER" && parseFloat(_pinOptions.spacer.css("padding-top")) === 0) {
              change = true; // if in after state but havent updated spacer yet (jumped past pin)
            } else if (_state === "BEFORE" && parseFloat(_pinOptions.spacer.css("padding-bottom")) === 0) { // before
              change = true; // jumped past fixed state upward direction
            }
          }
          // set new values
          _pin.css(newCSS);
          if (change) {
            // remove pinned class
            _pin.removeClass(_pinOptions.pinnedClass);
            // update pin spacer if state changed
            updatePinSpacerSize();
          }
        }
      }
    };

    /**
     * Update the pin spacer size.
     * The size of the spacer needs to be updated whenever the duration of the scene changes, if it is to push down following elements.
     * @private
     */
    var updatePinSpacerSize = function () {
      if (_pin && _parent && _pinOptions.inFlow) { // no spacerresize, if original position is absolute
        var
          after = (_state === "AFTER"),
          before = (_state === "BEFORE"),
          during = (_state === "DURING"),
          pinned = (_pin.css("position") == "fixed"),
          vertical = _parent.info("vertical"),
          $spacercontent = _pinOptions.spacer.children().first(), // usually the pined element but can also be another spacer (cascaded pins)
          marginCollapse = isMarginCollapseType(_pinOptions.spacer.css("display")),
          css = {};

        if (marginCollapse) {
          css["margin-top"] = before || (during && pinned) ? _pin.css("margin-top") : "auto";
          css["margin-bottom"] = after || (during && pinned) ? _pin.css("margin-bottom") : "auto";
        } else {
          css["margin-top"] = css["margin-bottom"] = "auto";
        }

        // set new size
        // if relsize: spacer -> pin | else: pin -> spacer
        if (_pinOptions.relSize.width || _pinOptions.relSize.autoFullWidth) {
          if (pinned) {
            if ($(window).width() == _pinOptions.spacer.parent().width()) {
              // relative to body
              _pin.css("width", _pinOptions.relSize.autoFullWidth ? "100%" : "inherit");
            } else {
              // not relative to body -> need to calculate
              _pin.css("width", _pinOptions.spacer.width());
            }
          } else {
            _pin.css("width", "100%");
          }
        } else {
          // minwidth is needed for cascading pins.
          // margin is only included if it's a cascaded pin to resolve an IE9 bug
          css["min-width"] = $spacercontent.outerWidth(!$spacercontent.is(_pin));
          css.width = pinned ? css["min-width"] : "auto";
        }
        if (_pinOptions.relSize.height) {
          if (pinned) {
            if ($(window).height() == _pinOptions.spacer.parent().height()) {
              // relative to body
              _pin.css("height", "inherit");
            } else {
              // not relative to body -> need to calculate
              _pin.css("height", _pinOptions.spacer.height());
            }
          } else {
            _pin.css("height", "100%");
          }
        } else {
          css["min-height"] = $spacercontent.outerHeight(!marginCollapse); // needed for cascading pins
          css.height = pinned ? css["min-height"] : "auto";
        }

        // add space for duration if pushFollowers is true
        if (_pinOptions.pushFollowers) {
          css["padding" + (vertical ? "Top" : "Left")] = _options.duration * _progress;
          css["padding" + (vertical ? "Bottom" : "Right")] = _options.duration * (1 - _progress);
        }
        _pinOptions.spacer.css(css);
      }
    };

    /**
     * Updates the Pin state (in certain scenarios)
     * If the controller container is not the document and we are mid-pin-phase scrolling or resizing the main document can result to wrong pin positions.
     * So this function is called on resize and scroll of the document.
     * @private
     */
    var updatePinInContainer = function () {
      if (_parent && _pin && _state === "DURING" && !_parent.info("isDocument")) {
        updatePinState();
      }
    };

    /**
     * Updates the Pin spacer size state (in certain scenarios)
     * If container is resized during pin and relatively sized the size of the pin might need to be updated...
     * So this function is called on resize of the container.
     * @private
     */
    var updateRelativePinSpacer = function () {
      if ( _parent && _pin && // well, duh
          _state === "DURING" && // element in pinned state?
          ( // is width or height relatively sized, but not in relation to body? then we need to recalc.
            ((_pinOptions.relSize.width || _pinOptions.relSize.autoFullWidth) && $(window).width() != _pinOptions.spacer.parent().width()) ||
            (_pinOptions.relSize.height && $(window).height() != _pinOptions.spacer.parent().height())
          )
      ) {
        updatePinSpacerSize();
      }
    };

    /**
     * Is called, when the mousewhel is used while over a pinned element inside a div container.
     * If the scene is in fixed state scroll events would be counted towards the body. This forwards the event to the scroll container.
     * @private
     */
    var onMousewheelOverPin = function (e) {
      if (_parent && _pin && _state === "DURING" && !_parent.info("isDocument")) { // in pin state
        e.preventDefault();
        _parent.scrollTo(_parent.info("scrollPos") - (e.originalEvent.wheelDelta/3 || -e.originalEvent.detail*30));
      }
    };


    /*
     * ----------------------------------------------------------------
     * public functions (getters/setters)
     * ----------------------------------------------------------------
     */

    /**
     * **Get** the parent controller.
     * @public
     * @example
     * // get the parent controller of a scene
     * var controller = scene.parent();
     *
     * @returns {ScrollMagic} Parent controller or `undefined`
     */
    this.parent = function () {
      return _parent;
    };


    /**
     * **Get** or **Set** the duration option value.
     * As a setter it also accepts a function returning a numeric value.  
     * This is particularly useful for responsive setups.
     *
     * The duration is updated using the supplied function every time `ScrollScene.refresh()` is called, which happens periodically from the controller (see ScrollMagic option `refreshInterval`).  
     * _**NOTE:** Be aware that it's an easy way to kill performance, if you supply a function that has high CPU demand.  
     * Even for size and position calculations it is recommended to use a variable to cache the value. (see example)  
     * This counts double if you use the same function for multiple scenes._
     *
     * @public
     * @example
     * // get the current duration value
     * var duration = scene.duration();
     *
     * // set a new duration
     * scene.duration(300);
     *
     * // use a function to automatically adjust the duration to the window height.
     * var durationValueCache;
     * function getDuration () {
     *   return durationValueCache;
     * }
     * function updateDuration (e) {
     *   durationValueCache = $(window).innerHeight();
     * }
     * $(window).on("resize", updateDuration); // update the duration when the window size changes
     * $(window).triggerHandler("resize"); // set to initial value
     * scene.duration(getDuration); // supply duration method
     *
     * @fires {@link ScrollScene.change}, when used as setter
     * @fires {@link ScrollScene.shift}, when used as setter
     * @param {(number|function)} [newDuration] - The new duration of the scene.
     * @returns {number} `get` -  Current scene duration.
     * @returns {ScrollScene} `set` -  Parent object for chaining.
     */
    this.duration = function (newDuration) {
      var varname = "duration";
      if (!arguments.length) { // get
        return _options[varname];
      } else {
        if (!$.isFunction(newDuration)) {
          _durationUpdateMethod = undefined;
        }
        if (changeOption(varname, newDuration)) { // set
          ScrollScene.trigger("change", {what: varname, newval: _options[varname]});
          ScrollScene.trigger("shift", {reason: varname});
        }
      }
      return ScrollScene;
    };

    /**
     * **Get** or **Set** the offset option value.
     * @public
     * @example
     * // get the current offset
     * var offset = scene.offset();
     *
     * // set a new offset
     * scene.offset(100);
     *
     * @fires {@link ScrollScene.change}, when used as setter
     * @fires {@link ScrollScene.shift}, when used as setter
     * @param {number} [newOffset] - The new offset of the scene.
     * @returns {number} `get` -  Current scene offset.
     * @returns {ScrollScene} `set` -  Parent object for chaining.
     */
    this.offset = function (newOffset) {
      var varname = "offset";
      if (!arguments.length) { // get
        return _options[varname];
      } else if (changeOption(varname, newOffset)) { // set
        ScrollScene.trigger("change", {what: varname, newval: _options[varname]});
        ScrollScene.trigger("shift", {reason: varname});
      }
      return ScrollScene;
    };

    /**
     * **Get** or **Set** the triggerElement option value.
     * Does **not** fire `ScrollScene.shift`, because changing the trigger Element doesn't necessarily mean the start position changes. This will be determined in `ScrollScene.refresh()`, which is automatically triggered.
     * @public
     * @example
     * // get the current triggerElement
     * var triggerElement = scene.triggerElement();
     *
     * // set a new triggerElement using a selector
     * scene.triggerElement("#trigger");
     * // set a new triggerElement using a jQuery Object
     * scene.triggerElement($("#trigger"));
     * // set a new triggerElement using a DOM object
     * scene.triggerElement(document.getElementById("trigger"));
     *
     * @fires {@link ScrollScene.change}, when used as setter
     * @param {(string|object)} [newTriggerElement] - The new trigger element for the scene.
     * @returns {(string|object)} `get` -  Current triggerElement.
     * @returns {ScrollScene} `set` -  Parent object for chaining.
     */
    this.triggerElement = function (newTriggerElement) {
      var varname = "triggerElement";
      if (!arguments.length) { // get
        return _options[varname];
      } else if (changeOption(varname, newTriggerElement)) { // set
        ScrollScene.trigger("change", {what: varname, newval: _options[varname]});
      }
      return ScrollScene;
    };

    /**
     * **Get** or **Set** the triggerHook option value.
     * @public
     * @example
     * // get the current triggerHook value
     * var triggerHook = scene.triggerHook();
     *
     * // set a new triggerHook using a string
     * scene.triggerHook("onLeave");
     * // set a new triggerHook using a number
     * scene.triggerHook(0.7);
     *
     * @fires {@link ScrollScene.change}, when used as setter
     * @fires {@link ScrollScene.shift}, when used as setter
     * @param {(number|string)} [newTriggerHook] - The new triggerHook of the scene. See {@link ScrollScene} parameter description for value options.
     * @returns {number} `get` -  Current triggerHook (ALWAYS numerical).
     * @returns {ScrollScene} `set` -  Parent object for chaining.
     */
    this.triggerHook = function (newTriggerHook) {
      var varname = "triggerHook";
      if (!arguments.length) { // get
        return $.isNumeric(_options[varname]) ? _options[varname] : TRIGGER_HOOK_VALUES[_options[varname]];
      } else if (changeOption(varname, newTriggerHook)) { // set
        ScrollScene.trigger("change", {what: varname, newval: _options[varname]});
        ScrollScene.trigger("shift", {reason: varname});
      }
      return ScrollScene;
    };

    /**
     * **Get** or **Set** the reverse option value.
     * @public
     * @example
     * // get the current reverse option
     * var reverse = scene.reverse();
     *
     * // set new reverse option
     * scene.reverse(false);
     *
     * @fires {@link ScrollScene.change}, when used as setter
     * @param {boolean} [newReverse] - The new reverse setting of the scene.
     * @returns {boolean} `get` -  Current reverse option value.
     * @returns {ScrollScene} `set` -  Parent object for chaining.
     */
    this.reverse = function (newReverse) {
      var varname = "reverse";
      if (!arguments.length) { // get
        return _options[varname];
      } else if (changeOption(varname, newReverse)) { // set
        ScrollScene.trigger("change", {what: varname, newval: _options[varname]});
      }
      return ScrollScene;
    };

    /**
     * **Get** or **Set** the tweenChanges option value.
     * @public
     * @example
     * // get the current tweenChanges option
     * var tweenChanges = scene.tweenChanges();
     *
     * // set new tweenChanges option
     * scene.tweenChanges(true);
     *
     * @fires {@link ScrollScene.change}, when used as setter
     * @param {boolean} [newTweenChanges] - The new tweenChanges setting of the scene.
     * @returns {boolean} `get` -  Current tweenChanges option value.
     * @returns {ScrollScene} `set` -  Parent object for chaining.
     */
    this.tweenChanges = function (newTweenChanges) {
      var varname = "tweenChanges";
      if (!arguments.length) { // get
        return _options[varname];
      } else if (changeOption(varname, newTweenChanges)) { // set
        ScrollScene.trigger("change", {what: varname, newval: _options[varname]});
      }
      return ScrollScene;
    };

    /**
     * **Get** or **Set** the loglevel option value.
     * @public
     * @example
     * // get the current loglevel
     * var loglevel = scene.loglevel();
     *
     * // set new loglevel
     * scene.loglevel(3);
     *
     * @fires {@link ScrollScene.change}, when used as setter
     * @param {number} [newLoglevel] - The new loglevel setting of the scene. `[0-3]`
     * @returns {number} `get` -  Current loglevel.
     * @returns {ScrollScene} `set` -  Parent object for chaining.
     */
    this.loglevel = function (newLoglevel) {
      var varname = "loglevel";
      if (!arguments.length) { // get
        return _options[varname];
      } else if (changeOption(varname, newLoglevel)) { // set
        ScrollScene.trigger("change", {what: varname, newval: _options[varname]});
      }
      return ScrollScene;
    };
    
    /**
     * **Get** the current state.
     * @public
     * @example
     * // get the current state
     * var state = scene.state();
     *
     * @returns {string} `"BEFORE"`, `"DURING"` or `"AFTER"`
     */
    this.state = function () {
      return _state;
    };

    /**
     * **Get** the trigger position of the scene (including the value of the `offset` option).  
     * @public
     * @example
     * // get the scene's trigger position
     * var triggerPosition = scene.triggerPosition();
     *
     * @returns {number} Start position of the scene. Top position value for vertical and left position value for horizontal scrolls.
     */
    this.triggerPosition = function () {
      var pos = _options.offset; // the offset is the basis
      if (_parent) {
        // get the trigger position
        if (_options.triggerElement) {
          // Element as trigger
          pos += _triggerPos;
        } else {
          // return the height of the triggerHook to start at the beginning
          pos += _parent.info("size") * ScrollScene.triggerHook();
        }
      }
      return pos;
    };

    /**
     * **Get** the trigger offset of the scene (including the value of the `offset` option).  
     * @public
     * @deprecated Method is deprecated since 1.1.0. You should now use {@link ScrollScene.triggerPosition}
     */
    this.triggerOffset = function () {
      return ScrollScene.triggerPosition();
    };

    /**
     * **Get** the current scroll offset for the start of the scene.  
     * Mind, that the scrollOffset is related to the size of the container, if `triggerHook` is bigger than `0` (or `"onLeave"`).  
     * This means, that resizing the container or changing the `triggerHook` will influence the scene's start offset.
     * @public
     * @example
     * // get the current scroll offset for the start and end of the scene.
     * var start = scene.scrollOffset();
     * var end = scene.scrollOffset() + scene.duration();
     * console.log("the scene starts at", start, "and ends at", end);
     *
     * @returns {number} The scroll offset (of the container) at which the scene will trigger. Y value for vertical and X value for horizontal scrolls.
     */
    this.scrollOffset = function () {
      return _scrollOffset.start;
    };

    /*
     * ----------------------------------------------------------------
     * public functions (scene modification)
     * ----------------------------------------------------------------
     */

    /**
     * Updates the Scene in the parent Controller to reflect the current state.  
     * This is the equivalent to `ScrollMagic.updateScene(scene, immediately)`.  
     * The update method calculates the scene's start and end position (based on the trigger element, trigger hook, duration and offset) and checks it against the current scroll position of the container.  
     * It then updates the current scene state accordingly (or does nothing, if the state is already correct) – Pins will be set to their correct position and tweens will be updated to their correct progress.
     * This means an update doesn't necessarily result in a progress change. The `progress` event will be fired if the progress has indeed changed between this update and the last.  
     * _**NOTE:** This method gets called constantly whenever ScrollMagic detects a change. The only application for you is if you change something outside of the realm of ScrollMagic, like moving the trigger or changing tween parameters._
     * @public
     * @example
     * // update the scene on next tick
     * scene.update();
     *
     * // update the scene immediately
     * scene.update(true);
     *
     * @fires ScrollScene.update
     *
     * @param {boolean} [immediately=false] - If `true` the update will be instant, if `false` it will wait until next update cycle (better performance).
     * @returns {ScrollScene} Parent object for chaining.
     */
    this.update = function (immediately) {
      if (_parent) {
        if (immediately) {
          if (_parent.enabled() && _enabled) {
            var
              scrollPos = _parent.info("scrollPos"),
              newProgress;

            if (_options.duration > 0) {
              newProgress = (scrollPos - _scrollOffset.start)/(_scrollOffset.end - _scrollOffset.start);
            } else {
              newProgress = scrollPos >= _scrollOffset.start ? 1 : 0;
            }

            ScrollScene.trigger("update", {startPos: _scrollOffset.start, endPos: _scrollOffset.end, scrollPos: scrollPos});

            ScrollScene.progress(newProgress);
          } else if (_pin && _state === "DURING") {
            updatePinState(true); // unpin in position
          }
        } else {
          _parent.updateScene(ScrollScene, false);
        }
      }
      return ScrollScene;
    };

    /**
     * Updates dynamic scene variables like the trigger element position or the duration.
     * This method is automatically called in regular intervals from the controller. See {@link ScrollMagic} option `refreshInterval`.
     * 
     * You can call it to minimize lag, for example when you intentionally change the position of the triggerElement.
     * If you don't it will simply be updated in the next refresh interval of the container, which is usually sufficient.
     *
     * @public
     * @since 1.1.0
     * @example
     * scene = new ScrollScene({triggerElement: "#trigger"});
     * 
     * // change the position of the trigger
     * $("#trigger").css("top", 500);
     * // immediately let the scene know of this change
     * scene.refresh();
     *
     * @fires {@link ScrollScene.shift}, if the trigger element position or the duration changed
     * @fires {@link ScrollScene.change}, if the duration changed
     *
     * @returns {ScrollScene} Parent object for chaining.
     */
    this.refresh = function () {
      updateDuration();
      updateTriggerElementPosition();
      // update trigger element position
      return ScrollScene;
    };

    /**
     * **Get** or **Set** the scene's progress.  
     * Usually it shouldn't be necessary to use this as a setter, as it is set automatically by scene.update().  
     * The order in which the events are fired depends on the duration of the scene:
     *  1. Scenes with `duration == 0`:  
     *  Scenes that have no duration by definition have no ending. Thus the `end` event will never be fired.  
     *  When the trigger position of the scene is passed the events are always fired in this order:  
     *  `enter`, `start`, `progress` when scrolling forward  
     *  and  
     *  `progress`, `start`, `leave` when scrolling in reverse
     *  2. Scenes with `duration > 0`:  
     *  Scenes with a set duration have a defined start and end point.  
     *  When scrolling past the start position of the scene it will fire these events in this order:  
     *  `enter`, `start`, `progress`  
     *  When continuing to scroll and passing the end point it will fire these events:  
     *  `progress`, `end`, `leave`  
     *  When reversing through the end point these events are fired:  
     *  `enter`, `end`, `progress`  
     *  And when continuing to scroll past the start position in reverse it will fire:  
     *  `progress`, `start`, `leave`  
     *  In between start and end the `progress` event will be called constantly, whenever the progress changes.
     * 
     * In short:  
     * `enter` events will always trigger **before** the progress update and `leave` envents will trigger **after** the progress update.  
     * `start` and `end` will always trigger at their respective position.
     * 
     * Please review the event descriptions for details on the events and the event object that is passed to the callback.
     * 
     * @public
     * @example
     * // get the current scene progress
     * var progress = scene.progress();
     *
     * // set new scene progress
     * scene.progress(0.3);
     *
     * @fires {@link ScrollScene.enter}, when used as setter
     * @fires {@link ScrollScene.start}, when used as setter
     * @fires {@link ScrollScene.progress}, when used as setter
     * @fires {@link ScrollScene.end}, when used as setter
     * @fires {@link ScrollScene.leave}, when used as setter
     *
     * @param {number} [progress] - The new progress value of the scene `[0-1]`.
     * @returns {number} `get` -  Current scene progress.
     * @returns {ScrollScene} `set` -  Parent object for chaining.
     */
    this.progress = function (progress) {
      if (!arguments.length) { // get
        return _progress;
      } else { // set
        var
          doUpdate = false,
          oldState = _state,
          scrollDirection = _parent ? _parent.info("scrollDirection") : 'PAUSED',
          reverseOrForward = _options.reverse || progress >= _progress;
        if (_options.duration === 0) {
          // zero duration scenes
          doUpdate = _progress != progress;
          _progress = progress < 1 && reverseOrForward ? 0 : 1;
          _state = _progress === 0 ? 'BEFORE' : 'DURING';
        } else {
          // scenes with start and end
          if (progress <= 0 && _state !== 'BEFORE' && reverseOrForward) {
            // go back to initial state
            _progress = 0;
            _state = 'BEFORE';
            doUpdate = true;
          } else if (progress > 0 && progress < 1 && reverseOrForward) {
            _progress = progress;
            _state = 'DURING';
            doUpdate = true;
          } else if (progress >= 1 && _state !== 'AFTER') {
            _progress = 1;
            _state = 'AFTER';
            doUpdate = true;
          } else if (_state === 'DURING' && !reverseOrForward) {
            updatePinState(); // in case we scrolled backwards mid-scene and reverse is disabled => update the pin position, so it doesn't move back as well.
          }
        }
        if (doUpdate) {
          // fire events
          var
            eventVars = {progress: _progress, state: _state, scrollDirection: scrollDirection},
            stateChanged = _state != oldState;

          var trigger = function (eventName) { // tmp helper to simplify code
            ScrollScene.trigger(eventName, eventVars);
          };

          if (stateChanged) { // enter events
            if (oldState !== 'DURING') {
              trigger("enter");
              trigger(oldState === 'BEFORE' ? "start" : "end");
            }
          }
          trigger("progress");
          if (stateChanged) { // leave events
            if (_state !== 'DURING') {
              trigger(_state === 'BEFORE' ? "start" : "end");
              trigger("leave");
            }
          }
        }

        return ScrollScene;
      }
    };

    /**
     * Add a tween to the scene.  
     * If you want to add multiple tweens, wrap them into one TimelineMax object and add it.  
     * The duration of the tween is streched to the scroll duration of the scene, unless the scene has a duration of `0`.
     * @public
     * @example
     * // add a single tween
     * scene.setTween(TweenMax.to("obj"), 1, {x: 100});
     *
     * // add multiple tweens, wrapped in a timeline.
     * var timeline = new TimelineMax();
     * var tween1 = TweenMax.from("obj1", 1, {x: 100});
     * var tween2 = TweenMax.to("obj2", 1, {y: 100});
     * timeline
     *    .add(tween1)
     *    .add(tween2);
     * scene.addTween(timeline);
     *
     * @param {object} TweenObject - A TweenMax, TweenLite, TimelineMax or TimelineLite object that should be animated in the scene.
     * @returns {ScrollScene} Parent object for chaining.
     */
    this.setTween = function (TweenObject) {
      if (!TimelineMax) {
        log(1, "ERROR: TimelineMax wasn't found. Please make sure GSAP is loaded before ScrollMagic or use asynchronous loading.");
        return ScrollScene;
      }
      if (_tween) { // kill old tween?
        ScrollScene.removeTween();
      }
      try {
        // wrap Tween into a TimelineMax Object to include delay and repeats in the duration and standardize methods.
        _tween = new TimelineMax({smoothChildTiming: true})
          .add(TweenObject)
          .pause();
      } catch (e) {
        log(1, "ERROR calling method 'setTween()': Supplied argument is not a valid TweenObject");
      } finally {
        // some properties need to be transferred it to the wrapper, otherwise they would get lost.
        if (TweenObject.repeat && TweenObject.repeat() === -1) {// TweenMax or TimelineMax Object?
          _tween.repeat(-1);
          _tween.yoyo(TweenObject.yoyo());
        }
      }
      // Some tween validations and debugging helpers

      // check if there are position tweens defined for the trigger and warn about it :)
      if (_tween && _parent  && _options.triggerElement && _options.loglevel >= 2) {// parent is needed to know scroll direction.
        var
          triggerTweens = _tween.getTweensOf($(_options.triggerElement)),
          vertical = _parent.info("vertical");
        $.each(triggerTweens, function (index, value) {
          var
            tweenvars = value.vars.css || value.vars,
            condition = vertical ? (tweenvars.top !== undefined || tweenvars.bottom !== undefined) : (tweenvars.left !== undefined || tweenvars.right !== undefined);
          if (condition) {
            log(2, "WARNING: Tweening the position of the trigger element affects the scene timing and should be avoided!");
            return false;
          }
        });
      }

      // warn about tween overwrites, when an element is tweened multiple times
      if (parseFloat(TweenLite.version) >= 1.14) { // onOverwrite only present since GSAP v1.14.0
        var
          list = _tween.getChildren(true, true, false), // get all nested tween objects
          newCallback = function () {
            log(2, "WARNING: tween was overwritten by another. To learn how to avoid this issue see here: https://github.com/janpaepke/ScrollMagic/wiki/WARNING:-tween-was-overwritten-by-another");
          };
        for (var i=0, thisTween, oldCallback; i<list.length; i++) {
          /*jshint loopfunc: true */
          thisTween = list[i];
          if (oldCallback !== newCallback) { // if tweens is added more than once
            oldCallback = thisTween.vars.onOverwrite;
            thisTween.vars.onOverwrite = function () {
              if (oldCallback) {
                oldCallback.apply(this, arguments);
              }
              newCallback.apply(this, arguments);
            };
          }
        }
      }
      log(3, "added tween");
      updateTweenProgress();
      return ScrollScene;
    };

    /**
     * Remove the tween from the scene.
     * @public
     * @example
     * // remove the tween from the scene without resetting it
     * scene.removeTween();
     *
     * // remove the tween from the scene and reset it to initial position
     * scene.removeTween(true);
     *
     * @param {boolean} [reset=false] - If `true` the tween will be reset to its initial values.
     * @returns {ScrollScene} Parent object for chaining.
     */
    this.removeTween = function (reset) {
      if (_tween) {
        if (reset) {
          updateTweenProgress(0);
        }
        _tween.kill();
        _tween = undefined;
        log(3, "removed tween (reset: " + (reset ? "true" : "false") + ")");
      }
      return ScrollScene;
    };

    /**
     * Pin an element for the duration of the tween.  
     * If the scene duration is 0 the element will only be unpinned, if the user scrolls back past the start position.  
     * _**NOTE:** The option `pushFollowers` has no effect, when the scene duration is 0._
     * @public
     * @example
     * // pin element and push all following elements down by the amount of the pin duration.
     * scene.setPin("#pin");
     *
     * // pin element and keeping all following elements in their place. The pinned element will move past them.
     * scene.setPin("#pin", {pushFollowers: false});
     *
     * @param {(string|object)} element - A Selector targeting an element, a DOM object or a jQuery object that is supposed to be pinned.
     * @param {object} [settings] - settings for the pin
     * @param {boolean} [settings.pushFollowers=true] - If `true` following elements will be "pushed" down for the duration of the pin, if `false` the pinned element will just scroll past them.  
                               Ignored, when duration is `0`.
     * @param {string} [settings.spacerClass="scrollmagic-pin-spacer"] - Classname of the pin spacer element, which is used to replace the element.  
     * @param {string} [settings.pinnedClass=""] - Classname that should be added to the pinned element during pin phase (and removed after).
     *
     * @returns {ScrollScene} Parent object for chaining.
     */
    this.setPin = function (element, settings) {
      var
        defaultSettings = {
          pushFollowers: true,
          spacerClass: "scrollmagic-pin-spacer",
          pinnedClass: ""
        };
      settings = $.extend({}, defaultSettings, settings);

      // validate Element
      element = $(element).first();
      if (element.length === 0) {
        log(1, "ERROR calling method 'setPin()': Invalid pin element supplied.");
        return ScrollScene; // cancel
      } else if (element.css("position") == "fixed") {
        log(1, "ERROR calling method 'setPin()': Pin does not work with elements that are positioned 'fixed'.");
        return ScrollScene; // cancel
      }

      if (_pin) { // preexisting pin?
        if (_pin === element) {
          // same pin we already have -> do nothing
          return ScrollScene; // cancel
        } else {
          // kill old pin
          ScrollScene.removePin();
        }
        
      }
      _pin = element;
      
      _pin.parent().hide(); // hack start to force jQuery css to return stylesheet values instead of calculated px values.
      var
        inFlow = _pin.css("position") != "absolute",
        pinCSS = _pin.css(["display", "top", "left", "bottom", "right"]),
        sizeCSS = _pin.css(["width", "height"]);
      _pin.parent().show(); // hack end.

      if (sizeCSS.width === "0px" &&  inFlow && isMarginCollapseType(pinCSS.display)) {
        // log (2, "WARNING: Your pinned element probably needs a defined width or it might collapse during pin.");
      }
      if (!inFlow && settings.pushFollowers) {
        log(2, "WARNING: If the pinned element is positioned absolutely pushFollowers is disabled.");
        settings.pushFollowers = false;
      }

      // create spacer
      var spacer = $("<div></div>")
          .addClass(settings.spacerClass)
          .css(pinCSS)
          .data("ScrollMagicPinSpacer", true)
          .css({
            position: inFlow ? "relative" : "absolute",
            "margin-left": "auto",
            "margin-right": "auto",
            "box-sizing": "content-box"
          });

      // set the pin Options
      var pinInlineCSS = _pin[0].style;
      _pinOptions = {
        spacer: spacer,
        relSize: { // save if size is defined using % values. if so, handle spacer resize differently...
          width: sizeCSS.width.slice(-1) === "%",
          height: sizeCSS.height.slice(-1) === "%",
          autoFullWidth: sizeCSS.width === "0px" &&  inFlow && isMarginCollapseType(pinCSS.display)
        },
        pushFollowers: settings.pushFollowers,
        inFlow: inFlow, // stores if the element takes up space in the document flow
        origStyle: {
          width: pinInlineCSS.width || "",
          position: pinInlineCSS.position || "",
          top: pinInlineCSS.top || "",
          left: pinInlineCSS.left || "",
          bottom: pinInlineCSS.bottom || "",
          right: pinInlineCSS.right || "",
          "box-sizing": pinInlineCSS["box-sizing"] || "",
          "-moz-box-sizing": pinInlineCSS["-moz-box-sizing"] || "",
          "-webkit-box-sizing": pinInlineCSS["-webkit-box-sizing"] || ""
        }, // save old styles (for reset)
        pinnedClass: settings.pinnedClass // the class that should be added to the element when pinned
      };

      // if relative size, transfer it to spacer and make pin calculate it...
      if (_pinOptions.relSize.width) {
        spacer.css("width", sizeCSS.width);
      }
      if (_pinOptions.relSize.height) {
        spacer.css("height", sizeCSS.height);
      }

      // now place the pin element inside the spacer  
      _pin.before(spacer)
          .appendTo(spacer)
          // and set new css
          .css({
            position: inFlow ? "relative" : "absolute",
            top: "auto",
            left: "auto",
            bottom: "auto",
            right: "auto"
          });
      
      if (_pinOptions.relSize.width || _pinOptions.relSize.autoFullWidth) {
        _pin.css("box-sizing", "border-box");
      }

      // add listener to document to update pin position in case controller is not the document.
      $(window).on("scroll." + NAMESPACE + "_pin resize." + NAMESPACE + "_pin", updatePinInContainer);
      // add mousewheel listener to catch scrolls over fixed elements
      _pin.on("mousewheel DOMMouseScroll", onMousewheelOverPin);

      log(3, "added pin");

      // finally update the pin to init
      updatePinState();

      return ScrollScene;
    };

    /**
     * Remove the pin from the scene.
     * @public
     * @example
     * // remove the pin from the scene without resetting it (the spacer is not removed)
     * scene.removePin();
     *
     * // remove the pin from the scene and reset the pin element to its initial position (spacer is removed)
     * scene.removePin(true);
     *
     * @param {boolean} [reset=false] - If `false` the spacer will not be removed and the element's position will not be reset.
     * @returns {ScrollScene} Parent object for chaining.
     */
    this.removePin = function (reset) {
      if (_pin) {
        if (reset || !_parent) { // if there's no parent no progress was made anyway...
          _pin.insertBefore(_pinOptions.spacer)
            .css(_pinOptions.origStyle);
          _pinOptions.spacer.remove();
        } else {
          if (_state === "DURING") {
            updatePinState(true); // force unpin at position
          }
        }
        $(window).off("scroll." + NAMESPACE + "_pin resize." + NAMESPACE + "_pin");
        _pin.off("mousewheel DOMMouseScroll", onMousewheelOverPin);
        _pin = undefined;
        log(3, "removed pin (reset: " + (reset ? "true" : "false") + ")");
      }
      return ScrollScene;
    };

    /**
     * Define a css class modification while the scene is active.  
     * When the scene triggers the classes will be added to the supplied element and removed, when the scene is over.
     * If the scene duration is 0 the classes will only be removed if the user scrolls back past the start position.
     * @public
     * @example
     * // add the class 'myclass' to the element with the id 'my-elem' for the duration of the scene
     * scene.setClassToggle("#my-elem", "myclass");
     *
     * // add multiple classes to multiple elements defined by the selector '.classChange'
     * scene.setClassToggle(".classChange", "class1 class2 class3");
     *
     * @param {(string|object)} element - A Selector targeting one or more elements, a DOM object or a jQuery object that is supposed to be modified.
     * @param {string} classes - One or more Classnames (separated by space) that should be added to the element during the scene.
     *
     * @returns {ScrollScene} Parent object for chaining.
     */
    this.setClassToggle = function (element, classes) {
      var $elm = $(element);
      if ($elm.length === 0 || $.type(classes) !== "string") {
        log(1, "ERROR calling method 'setClassToggle()': Invalid " + ($elm.length === 0 ? "element" : "classes") + " supplied.");
        return ScrollScene;
      }
      _cssClasses = classes;
      _cssClassElm = $elm;
      ScrollScene.on("enter.internal_class leave.internal_class", function (e) {
        _cssClassElm.toggleClass(_cssClasses, e.type === "enter");
      });
      return ScrollScene;
    };

    /**
     * Remove the class binding from the scene.
     * @public
     * @example
     * // remove class binding from the scene without reset
     * scene.removeClassToggle();
     *
     * // remove class binding and remove the changes it caused
     * scene.removeClassToggle(true);
     *
     * @param {boolean} [reset=false] - If `false` and the classes are currently active, they will remain on the element. If `true` they will be removed.
     * @returns {ScrollScene} Parent object for chaining.
     */
    this.removeClassToggle = function (reset) {
      if (_cssClassElm && reset) {
        _cssClassElm.removeClass(_cssClasses);
      }
      ScrollScene.off("start.internal_class end.internal_class");
      _cssClasses = undefined;
      _cssClassElm = undefined;
      return ScrollScene;
    };

    /**
     * Add the scene to a controller.  
     * This is the equivalent to `ScrollMagic.addScene(scene)`.
     * @public
     * @example
     * // add a scene to a ScrollMagic controller
     * scene.addTo(controller);
     *
     * @param {ScrollMagic} controller - The controller to which the scene should be added.
     * @returns {ScrollScene} Parent object for chaining.
     */
    this.addTo = function (controller) {
      if (!(controller instanceof ScrollMagic)) {
        log(1, "ERROR: supplied argument of 'addTo()' is not a valid ScrollMagic controller");
      } else if (_parent != controller) {
        // new parent
        if (_parent) { // I had a parent before, so remove it...
          _parent.removeScene(ScrollScene);
        }
        _parent = controller;
        validateOption();
        updateDuration(true);
        updateTriggerElementPosition(true);
        updateScrollOffset();
        updatePinSpacerSize();
        _parent.info("container").on("resize." + NAMESPACE, function () {
          updateRelativePinSpacer();
          if (ScrollScene.triggerHook() > 0) {
            ScrollScene.trigger("shift", {reason: "containerSize"});
          }
        });
        log(3, "added " + NAMESPACE + " to controller");
        controller.addScene(ScrollScene);
        ScrollScene.update();
      }
      return ScrollScene;
    };

    /**
     * **Get** or **Set** the current enabled state of the scene.  
     * This can be used to disable this scene without removing or destroying it.
     * @public
     *
     * @example
     * // get the current value
     * var enabled = scene.enabled();
     *
     * // disable the scene
     * scene.enabled(false);
     *
     * @param {boolean} [newState] - The new enabled state of the scene `true` or `false`.
     * @returns {(boolean|ScrollScene)} Current enabled state or parent object for chaining.
     */
    this.enabled = function (newState) {
      if (!arguments.length) { // get
        return _enabled;
      } else if (_enabled != newState) { // set
        _enabled = !!newState;
        ScrollScene.update(true);
      }
      return ScrollScene;
    };
    
    /**
     * Remove the scene from its parent controller.  
     * This is the equivalent to `ScrollMagic.removeScene(scene)`.
     * The scene will not be updated anymore until you readd it to a controller.
     * To remove the pin or the tween you need to call removeTween() or removePin() respectively.
     * @public
     * @example
     * // remove the scene from its parent controller
     * scene.remove();
     *
     * @returns {ScrollScene} Parent object for chaining.
     */
    this.remove = function () {
      if (_parent) {
        _parent.info("container").off("resize." + NAMESPACE);
        var tmpParent = _parent;
        _parent = undefined;
        log(3, "removed " + NAMESPACE + " from controller");
        tmpParent.removeScene(ScrollScene);
      }
      return ScrollScene;
    };

    /**
     * Destroy the scene and everything.
     * @public
     * @example
     * // destroy the scene without resetting the pin and tween to their initial positions
     * scene = scene.destroy();
     *
     * // destroy the scene and reset the pin and tween
     * scene = scene.destroy(true);
     *
     * @param {boolean} [reset=false] - If `true` the pin and tween (if existent) will be reset.
     * @returns {null} Null to unset handler variables.
     */
    this.destroy = function (reset) {
      ScrollScene.removeTween(reset);
      ScrollScene.removePin(reset);
      ScrollScene.removeClassToggle(reset);
      ScrollScene.trigger("destroy", {reset: reset});
      ScrollScene.remove();
      ScrollScene.off("start end enter leave progress change update shift destroy shift.internal change.internal progress.internal");
      log(3, "destroyed " + NAMESPACE + " (reset: " + (reset ? "true" : "false") + ")");
      return null;
    };

    /*
     * ----------------------------------------------------------------
     * EVENTS
     * ----------------------------------------------------------------
     */
    
    /**
     * Scene start event.  
     * Fires whenever the scroll position its the starting point of the scene.  
     * It will also fire when scrolling back up going over the start position of the scene. If you want something to happen only when scrolling down/right, use the scrollDirection parameter passed to the callback.
     *
     * For details on this event and the order in which it is fired, please review the {@link ScrollScene.progress} method.
     *
     * @event ScrollScene.start
     *
     * @example
     * scene.on("start", function (event) {
     *    alert("Hit start point of scene.");
     * });
     *
     * @property {object} event - The event Object passed to each callback
     * @property {string} event.type - The name of the event
     * @property {ScrollScene} event.target - The ScrollScene object that triggered this event
     * @property {number} event.progress - Reflects the current progress of the scene
     * @property {string} event.state - The current state of the scene `"BEFORE"`, `"DURING"` or `"AFTER"`
     * @property {string} event.scrollDirection - Indicates which way we are scrolling `"PAUSED"`, `"FORWARD"` or `"REVERSE"`
     */
    /**
     * Scene end event.  
     * Fires whenever the scroll position its the ending point of the scene.  
     * It will also fire when scrolling back up from after the scene and going over its end position. If you want something to happen only when scrolling down/right, use the scrollDirection parameter passed to the callback.
     *
     * For details on this event and the order in which it is fired, please review the {@link ScrollScene.progress} method.
     *
     * @event ScrollScene.end
     *
     * @example
     * scene.on("end", function (event) {
     *    alert("Hit end point of scene.");
     * });
     *
     * @property {object} event - The event Object passed to each callback
     * @property {string} event.type - The name of the event
     * @property {ScrollScene} event.target - The ScrollScene object that triggered this event
     * @property {number} event.progress - Reflects the current progress of the scene
     * @property {string} event.state - The current state of the scene `"BEFORE"`, `"DURING"` or `"AFTER"`
     * @property {string} event.scrollDirection - Indicates which way we are scrolling `"PAUSED"`, `"FORWARD"` or `"REVERSE"`
     */
    /**
     * Scene enter event.  
     * Fires whenever the scene enters the "DURING" state.  
     * Keep in mind that it doesn't matter if the scene plays forward or backward: This event always fires when the scene enters its active scroll timeframe, regardless of the scroll-direction.
     *
     * For details on this event and the order in which it is fired, please review the {@link ScrollScene.progress} method.
     *
     * @event ScrollScene.enter
     *
     * @example
     * scene.on("enter", function (event) {
     *    alert("Entered a scene.");
     * });
     *
     * @property {object} event - The event Object passed to each callback
     * @property {string} event.type - The name of the event
     * @property {ScrollScene} event.target - The ScrollScene object that triggered this event
     * @property {number} event.progress - Reflects the current progress of the scene
     * @property {string} event.state - The current state of the scene `"BEFORE"`, `"DURING"` or `"AFTER"`
     * @property {string} event.scrollDirection - Indicates which way we are scrolling `"PAUSED"`, `"FORWARD"` or `"REVERSE"`
     */
    /**
     * Scene leave event.  
     * Fires whenever the scene's state goes from "DURING" to either "BEFORE" or "AFTER".  
     * Keep in mind that it doesn't matter if the scene plays forward or backward: This event always fires when the scene leaves its active scroll timeframe, regardless of the scroll-direction.
     *
     * For details on this event and the order in which it is fired, please review the {@link ScrollScene.progress} method.
     *
     * @event ScrollScene.leave
     *
     * @example
     * scene.on("leave", function (event) {
     *    alert("Left a scene.");
     * });
     *
     * @property {object} event - The event Object passed to each callback
     * @property {string} event.type - The name of the event
     * @property {ScrollScene} event.target - The ScrollScene object that triggered this event
     * @property {number} event.progress - Reflects the current progress of the scene
     * @property {string} event.state - The current state of the scene `"BEFORE"`, `"DURING"` or `"AFTER"`
     * @property {string} event.scrollDirection - Indicates which way we are scrolling `"PAUSED"`, `"FORWARD"` or `"REVERSE"`
     */
    /**
     * Scene update event.  
     * Fires whenever the scene is updated (but not necessarily changes the progress).
     *
     * @event ScrollScene.update
     *
     * @example
     * scene.on("update", function (event) {
     *    console.log("Scene updated.");
     * });
     *
     * @property {object} event - The event Object passed to each callback
     * @property {string} event.type - The name of the event
     * @property {ScrollScene} event.target - The ScrollScene object that triggered this event
     * @property {number} event.startPos - The starting position of the scene (in relation to the conainer)
     * @property {number} event.endPos - The ending position of the scene (in relation to the conainer)
     * @property {number} event.scrollPos - The current scroll position of the container
     */
    /**
     * Scene progress event.  
     * Fires whenever the progress of the scene changes.
     *
     * For details on this event and the order in which it is fired, please review the {@link ScrollScene.progress} method.
     *
     * @event ScrollScene.progress
     *
     * @example
     * scene.on("progress", function (event) {
     *    console.log("Scene progress changed.");
     * });
     *
     * @property {object} event - The event Object passed to each callback
     * @property {string} event.type - The name of the event
     * @property {ScrollScene} event.target - The ScrollScene object that triggered this event
     * @property {number} event.progress - Reflects the current progress of the scene
     * @property {string} event.state - The current state of the scene `"BEFORE"`, `"DURING"` or `"AFTER"`
     * @property {string} event.scrollDirection - Indicates which way we are scrolling `"PAUSED"`, `"FORWARD"` or `"REVERSE"`
     */
    /**
     * Scene change event.  
     * Fires whenvever a property of the scene is changed.
     *
     * @event ScrollScene.change
     *
     * @example
     * scene.on("change", function (event) {
     *    console.log("Scene Property \"" + event.what + "\" changed to " + event.newval);
     * });
     *
     * @property {object} event - The event Object passed to each callback
     * @property {string} event.type - The name of the event
     * @property {ScrollScene} event.target - The ScrollScene object that triggered this event
     * @property {string} event.what - Indicates what value has been changed
     * @property {mixed} event.newval - The new value of the changed property
     */
    /**
     * Scene shift event.  
     * Fires whenvever the start or end **scroll offset** of the scene change.
     * This happens explicitely, when one of these values change: `offset`, `duration` or `triggerHook`.
     * It will fire implicitly when the `triggerElement` changes, if the new element has a different position (most cases).
     * It will also fire implicitly when the size of the container changes and the triggerHook is anything other than `onLeave`.
     *
     * @event ScrollScene.shift
     * @since 1.1.0
     *
     * @example
     * scene.on("shift", function (event) {
     *    console.log("Scene moved, because the " + event.reason + " has changed.)");
     * });
     *
     * @property {object} event - The event Object passed to each callback
     * @property {string} event.type - The name of the event
     * @property {ScrollScene} event.target - The ScrollScene object that triggered this event
     * @property {string} event.reason - Indicates why the scene has shifted
     */
    /**
     * Scene destroy event.  
     * Fires whenvever the scene is destroyed.
     * This can be used to tidy up custom behaviour used in events.
     *
     * @event ScrollScene.destroy
     * @since 1.1.0
     *
     * @example
     * scene.on("enter", function (event) {
     *        // add custom action
     *        $("#my-elem").left("200");
     *      })
     *      .on("destroy", function (event) {
     *        // reset my element to start position
     *        if (event.reset) {
     *          $("#my-elem").left("0");
     *        }
     *      });
     *
     * @property {object} event - The event Object passed to each callback
     * @property {string} event.type - The name of the event
     * @property {ScrollScene} event.target - The ScrollScene object that triggered this event
     * @property {boolean} event.reset - Indicates if the destroy method was called with reset `true` or `false`.
     */
     
     /**
     * Add one ore more event listener.  
     * The callback function will be fired at the respective event, and an object containing relevant data will be passed to the callback.
     * @public
     *
     * @example
     * function callback (event) {
     *    console.log("Event fired! (" + event.type + ")");
     * }
     * // add listeners
     * scene.on("change update progress start end enter leave", callback);
     *
     * @param {string} name - The name or names of the event the callback should be attached to.
     * @param {function} callback - A function that should be executed, when the event is dispatched. An event object will be passed to the callback.
     * @returns {ScrollScene} Parent object for chaining.
     */
     this.on = function (name, callback) {
      if ($.isFunction(callback)) {
        var names = $.trim(name).toLowerCase()
              .replace(/(\w+)\.(\w+)/g, '$1.' + NAMESPACE + '_$2') // add custom namespace, if one is defined
              .replace(/( |^)(\w+)(?= |$)/g, '$1$2.' + NAMESPACE ); // add namespace to regulars.
        $(ScrollScene).on(names, callback);
      } else {
        log(1, "ERROR calling method 'on()': Supplied argument is not a valid callback!");
      }
      return ScrollScene;
     };

     /**
     * Remove one or more event listener.
     * @public
     *
     * @example
     * function callback (event) {
     *    console.log("Event fired! (" + event.type + ")");
     * }
     * // add listeners
     * scene.on("change update", callback);
     * // remove listeners
     * scene.off("change update", callback);
     *
     * @param {string} name - The name or names of the event that should be removed.
     * @param {function} [callback] - A specific callback function that should be removed. If none is passed all callbacks to the event listener will be removed.
     * @returns {ScrollScene} Parent object for chaining.
     */
     this.off = function (name, callback) {
      var names = $.trim(name).toLowerCase()
            .replace(/(\w+)\.(\w+)/g, '$1.' + NAMESPACE + '_$2') // add custom namespace, if one is defined
            .replace(/( |^)(\w+)(?= |$)/g, '$1$2.' + NAMESPACE + '$3'); // add namespace to regulars.
      $(ScrollScene).off(names, callback);
      return ScrollScene;
     };

     /**
     * Trigger an event.
     * @public
     *
     * @example
     * this.trigger("change");
     *
     * @param {string} name - The name of the event that should be triggered.
     * @param {object} [vars] - An object containing info that should be passed to the callback.
     * @returns {ScrollScene} Parent object for chaining.
     */
     this.trigger = function (name, vars) {
      log(3, 'event fired:', name, "->", vars);
      var event = $.Event($.trim(name).toLowerCase(), vars);
      $(ScrollScene).trigger(event);
      return ScrollScene;
     };

    // INIT
    construct();
    return ScrollScene;
  };
  return ScrollScene;
});

  /*
   * ----------------------------------------------------------------
   * global logging functions and making sure no console errors occur
   * ----------------------------------------------------------------
   */

  var debug = (function (console) {
    var loglevels = ["error", "warn", "log"];
    if (!console.log) {
      console.log = function(){}; // no console log, well - do nothing then...
    }
    for(var i = 0, method; i<loglevels.length; i++) { // make sure methods for all levels exist.
      method = loglevels[i];
      if (!console[method]) {
        console[method] = console.log; // prefer .log over nothing
      }
    }
    // debugging function
    return function (loglevel) {
      if (loglevel > loglevels.length || loglevel <= 0) loglevel = loglevels.length;
      var now = new Date(),
        time = ("0"+now.getHours()).slice(-2) + ":" + ("0"+now.getMinutes()).slice(-2) + ":" + ("0"+now.getSeconds()).slice(-2) + ":" + ("00"+now.getMilliseconds()).slice(-3),
        method = loglevels[loglevel-1],
        args = Array.prototype.splice.call(arguments, 1),
        func = Function.prototype.bind.call(console[method], console);

      args.unshift(time);
      func.apply(console, args);
    };
  }(window.console = window.console || {}));
  // a helper function that should generally be faster than jQuery.offset() and can also return position in relation to viewport.
  var getOffset = function (elem, relativeToViewport) {
    var offset = {top: 0, left: 0};
    elem = elem[0]; // tmp workaround until jQuery dependency is removed.
    if (elem && elem.getBoundingClientRect) { // check if available
      var rect = elem.getBoundingClientRect();
      offset.top = rect.top;
      offset.left = rect.left;
      if (!relativeToViewport) { // clientRect is by default relative to viewport...
        offset.top += (window.pageYOffset || document.scrollTop  || 0) - (document.clientTop  || 0);
        offset.left += (window.pageXOffset || document.scrollLeft  || 0) - (document.clientLeft || 0);
      }
    }
    return offset;
  };
  var isDomElement = function (o){
    return (
      typeof HTMLElement === "object" ? o instanceof HTMLElement : //DOM2
      o && typeof o === "object" && o !== null && o.nodeType === 1 && typeof o.nodeName==="string"
    );
  };
  var isMarginCollapseType = function (str) {
    return ["block", "flex", "list-item", "table", "-webkit-box"].indexOf(str) > -1;
  };
  // implementation of requestAnimationFrame
  var animationFrameCallback = window.requestAnimationFrame;
  var animationFrameCancelCallback = window.cancelAnimationFrame;

  // polyfill -> based on https://gist.github.com/paulirish/1579671
  (function (window) {
    var
      lastTime = 0,
      vendors = ['ms', 'moz', 'webkit', 'o'],
      i;

    // try vendor prefixes if the above doesn't work
    for (i = 0; !animationFrameCallback && i < vendors.length; ++i) {
      animationFrameCallback = window[vendors[i] + 'RequestAnimationFrame'];
      animationFrameCancelCallback = window[vendors[i] + 'CancelAnimationFrame'] || window[vendors[i] + 'CancelRequestAnimationFrame'];
    }

    // fallbacks
    if (!animationFrameCallback) {
      animationFrameCallback = function (callback) {
        var
          currTime = new Date().getTime(),
          timeToCall = Math.max(0, 16 - (currTime - lastTime)),
          id = window.setTimeout(function () { callback(currTime + timeToCall); }, timeToCall);
        lastTime = currTime + timeToCall;
        return id;
      };
    }
    if (!animationFrameCancelCallback) {
      animationFrameCancelCallback = function (id) {
        window.clearTimeout(id);
      };
    }
  }(window));

})(this || window);