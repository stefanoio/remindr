/*!
 * remindr
 *
 * Stefano Peloso - https://github.com/stefanoio/remindr
 *
 * Free to use under terms of WTFPL version 2 license
 */

(function() {
	"use strict";

	var
		key = "_remindr_" + location.href,
		lastPageXOffset = localStorage.getItem("X" + key),
		lastPageYOffset = localStorage.getItem("Y" + key),
		remindrIsScrolling = false,

		ready = function() {
			load();
			if((lastPageXOffset != pageXOffset) || (lastPageYOffset != pageYOffset)) { // no strict comparison here: localstorage stores and returns numeric values as strings
				window.addEventListener("load", load, false);
			}
		},

		load = function() {
			remindrIsScrolling = true;
			scrollTo(lastPageXOffset, lastPageYOffset);
		},

		scroll = function() {
			if(remindrIsScrolling) {
				remindrIsScrolling = false;
			} else {
				document.removeEventListener("DOMContentLoaded", ready, false);
				window.removeEventListener("load", load, false);
				window.removeEventListener("scroll", scroll, false);
			}
		},

		unload = function() {
			localStorage.setItem("X" + key, pageXOffset);
			localStorage.setItem("Y" + key, pageYOffset);
		},

		init = function() {
			if("addEventListener" in window) {
				window.addEventListener("scroll", scroll, false);
				window.addEventListener("beforeunload", unload, false);
				if(lastPageXOffset !== null) {
					if(document.readyState === "loading") {
						document.addEventListener("DOMContentLoaded", ready, false);
					} else {
						ready();
					}
				}
			} else {
				console.error("remindr: unsupported browser");
			}
		};

	init();

})();
