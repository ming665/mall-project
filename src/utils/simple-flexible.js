export default function() {
	const docEl = document.documentElement
	const resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize'
	const onResize = function() {
		const w = docEl.clientWidth;
		w && (docEl.style.fontSize = w >= 750 ? "100px" : w / 750 * 100 + "px")
	}
	window.addEventListener(resizeEvt, onResize, !1)
	document.addEventListener("DOMContentLoaded", onResize, !1)
}