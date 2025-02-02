/*! smooth-scroll v10.2.1 | (c) 2016 Chris Ferdinandi | MIT License | http://github.com/cferdinandi/smooth-scroll */ !(function(e, t) { "function" == typeof define && define.amd ? define([], t(e)) : "object" == typeof exports ? module.exports = t(e) : e.smoothScroll = t(e) })("undefined" != typeof global ? global : this.window || this.global, (function(e) { "use strict";
	var t, n, o, r, a, c, l, i = {},
		u = "querySelector" in document && "addEventListener" in e,
		s = { selector: "[data-scroll]", selectorHeader: null, speed: 500, easing: "easeInOutCubic", offset: 0, callback: function() {} },
		d = function() {
			var e = {},
				t = !1,
				n = 0,
				o = arguments.length; "[object Boolean]" === Object.prototype.toString.call(arguments[0]) && (t = arguments[0], n++);
			for (var r = function(n) {
					for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (t && "[object Object]" === Object.prototype.toString.call(n[o]) ? e[o] = d(!0, e[o], n[o]) : e[o] = n[o]) }; n < o; n++) {
				var a = arguments[n];
				r(a) }
			return e },
		f = function(e) {
			return Math.max(e.scrollHeight, e.offsetHeight, e.clientHeight) },
		h = function(e, t) {
			for (Element.prototype.matches || (Element.prototype.matches = Element.prototype.matchesSelector || Element.prototype.mozMatchesSelector || Element.prototype.msMatchesSelector || Element.prototype.oMatchesSelector || Element.prototype.webkitMatchesSelector || function(e) {
					for (var t = (this.document || this.ownerDocument).querySelectorAll(e), n = t.length; --n >= 0 && t.item(n) !== this;);
					return n > -1 }); e && e !== document; e = e.parentNode)
				if (e.matches(t)) return e;
			return null },
		m = function(e) { "#" === e.charAt(0) && (e = e.substr(1));
			for (var t, n = String(e), o = n.length, r = -1, a = "", c = n.charCodeAt(0); ++r < o;) {
				if (t = n.charCodeAt(r), 0 === t) throw new InvalidCharacterError("Invalid character: the input contains U+0000.");
				a += t >= 1 && t <= 31 || 127 == t || 0 === r && t >= 48 && t <= 57 || 1 === r && t >= 48 && t <= 57 && 45 === c ? "\\" + t.toString(16) + " " : t >= 128 || 45 === t || 95 === t || t >= 48 && t <= 57 || t >= 65 && t <= 90 || t >= 97 && t <= 122 ? n.charAt(r) : "\\" + n.charAt(r) }
			return "#" + a },
		p = function(e, t) {
			var n;
			return "easeInQuad" === e && (n = t * t), "easeOutQuad" === e && (n = t * (2 - t)), "easeInOutQuad" === e && (n = t < .5 ? 2 * t * t : -1 + (4 - 2 * t) * t), "easeInCubic" === e && (n = t * t * t), "easeOutCubic" === e && (n = --t * t * t + 1), "easeInOutCubic" === e && (n = t < .5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1), "easeInQuart" === e && (n = t * t * t * t), "easeOutQuart" === e && (n = 1 - --t * t * t * t), "easeInOutQuart" === e && (n = t < .5 ? 8 * t * t * t * t : 1 - 8 * --t * t * t * t), "easeInQuint" === e && (n = t * t * t * t * t), "easeOutQuint" === e && (n = 1 + --t * t * t * t * t), "easeInOutQuint" === e && (n = t < .5 ? 16 * t * t * t * t * t : 1 + 16 * --t * t * t * t * t), n || t },
		g = function(e, t, n) {
			var o = 0;
			if (e.offsetParent)
				do o += e.offsetTop, e = e.offsetParent; while (e);
			return o = Math.max(o - t - n, 0), Math.min(o, v() - b()) },
		b = function() {
			return Math.max(document.documentElement.clientHeight, e.innerHeight || 0) },
		v = function() {
			return Math.max(document.body.scrollHeight, document.documentElement.scrollHeight, document.body.offsetHeight, document.documentElement.offsetHeight, document.body.clientHeight, document.documentElement.clientHeight) },
		y = function(e) {
			return e && "object" == typeof JSON && "function" == typeof JSON.parse ? JSON.parse(e) : {} },
		O = function(e) {
			return e ? f(e) + e.offsetTop : 0 },
		S = function(t, n, o) { o || (t.focus(), document.activeElement.id !== t.id && (t.setAttribute("tabindex", "-1"), t.focus(), t.style.outline = "none"), e.scrollTo(0, n)) };
	i.animateScroll = function(n, o, c) {
		var i = y(o ? o.getAttribute("data-options") : null),
			u = d(t || s, c || {}, i),
			f = "[object Number]" === Object.prototype.toString.call(n),
			h = f || !n.tagName ? null : n;
		if (f || h) {
			var m = e.pageYOffset;
			u.selectorHeader && !r && (r = document.querySelector(u.selectorHeader)), a || (a = O(r));
			var b, E, I = f ? n : g(h, a, parseInt(u.offset, 10)),
				H = I - m,
				A = v(),
				j = 0,
				C = function(t, r, a) {
					var c = e.pageYOffset;
					(t == r || c == r || e.innerHeight + c >= A) && (clearInterval(a), S(n, r, f), u.callback(n, o)) },
				M = function() { j += 16, b = j / parseInt(u.speed, 10), b = b > 1 ? 1 : b, E = m + H * p(u.easing, b), e.scrollTo(0, Math.floor(E)), C(E, I, l) },
				w = function() { clearInterval(l), l = setInterval(M, 16) };
			0 === e.pageYOffset && e.scrollTo(0, 0), w() } };
	var E = function(t) {
			var r;
			try { r = m(decodeURIComponent(e.location.hash)) } catch (t) { r = m(e.location.hash) }
			n && (n.id = n.getAttribute("data-scroll-id"), i.animateScroll(n, o), n = null, o = null) },
		I = function(r) {
			if (0 === r.button && !r.metaKey && !r.ctrlKey && (o = h(r.target, t.selector), o && "a" === o.tagName.toLowerCase() && o.hostname === e.location.hostname && o.pathname === e.location.pathname && /#/.test(o.href))) {
				var a;
				try { a = m(decodeURIComponent(o.hash)) } catch (e) { a = m(o.hash) }
				if ("#" === a) { r.preventDefault(), n = document.body;
					var c = n.id ? n.id : "smooth-scroll-top";
					return n.setAttribute("data-scroll-id", c), n.id = "", void(e.location.hash.substring(1) === c ? E() : e.location.hash = c) }
				n = document.querySelector(a), n && (n.setAttribute("data-scroll-id", n.id), n.id = "", o.hash === e.location.hash && (r.preventDefault(), E())) } },
		H = function(e) { c || (c = setTimeout((function() { c = null, a = O(r) }), 66)) };
	return i.destroy = function() { t && (document.removeEventListener("click", I, !1), e.removeEventListener("resize", H, !1), t = null, n = null, o = null, r = null, a = null, c = null, l = null) }, i.init = function(n) { u && (i.destroy(), t = d(s, n || {}), r = t.selectorHeader ? document.querySelector(t.selectorHeader) : null, a = O(r), document.addEventListener("click", I, !1), e.addEventListener("hashchange", E, !1), r && e.addEventListener("resize", H, !1)) }, i }));
