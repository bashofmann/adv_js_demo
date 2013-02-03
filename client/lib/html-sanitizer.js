(function () {
    var l = null, p = {e : {NONE : 0, URI : 1, URI_FRAGMENT : 11, SCRIPT : 2, STYLE : 3, HTML : 12, ID : 4, IDREF : 5, IDREFS : 6, GLOBAL_NAME : 7, LOCAL_NAME : 8, CLASSES : 9, FRAME_TARGET : 10, MEDIA_QUERY : 13}};
    p.atype = p.e;
    p.l = {"*::class" : 9, "*::dir" : 0, "*::draggable" : 0, "*::hidden" : 0, "*::id" : 4, "*::inert" : 0, "*::itemprop" : 0, "*::itemref" : 6, "*::itemscope" : 0, "*::lang" : 0, "*::onblur" : 2, "*::onchange" : 2, "*::onclick" : 2, "*::ondblclick" : 2, "*::onfocus" : 2, "*::onkeydown" : 2, "*::onkeypress" : 2, "*::onkeyup" : 2, "*::onload" : 2, "*::onmousedown" : 2, "*::onmousemove" : 2, "*::onmouseout" : 2, "*::onmouseover" : 2, "*::onmouseup" : 2, "*::onreset" : 2, "*::onscroll" : 2, "*::onselect" : 2, "*::onsubmit" : 2, "*::onunload" : 2, "*::spellcheck" : 0, "*::style" : 3, "*::title" : 0, "*::translate" : 0,
        "a::accesskey" : 0, "a::coords" : 0, "a::href" : 1, "a::hreflang" : 0, "a::name" : 7, "a::onblur" : 2, "a::onfocus" : 2, "a::shape" : 0, "a::tabindex" : 0, "a::target" : 10, "a::type" : 0, "area::accesskey" : 0, "area::alt" : 0, "area::coords" : 0, "area::href" : 1, "area::nohref" : 0, "area::onblur" : 2, "area::onfocus" : 2, "area::shape" : 0, "area::tabindex" : 0, "area::target" : 10, "audio::controls" : 0, "audio::loop" : 0, "audio::mediagroup" : 5, "audio::muted" : 0, "audio::preload" : 0, "bdo::dir" : 0, "blockquote::cite" : 1, "br::clear" : 0, "button::accesskey" : 0, "button::disabled" : 0,
        "button::name" : 8, "button::onblur" : 2, "button::onfocus" : 2, "button::tabindex" : 0, "button::type" : 0, "button::value" : 0, "canvas::height" : 0, "canvas::width" : 0, "caption::align" : 0, "col::align" : 0, "col::char" : 0, "col::charoff" : 0, "col::span" : 0, "col::valign" : 0, "col::width" : 0, "colgroup::align" : 0, "colgroup::char" : 0, "colgroup::charoff" : 0, "colgroup::span" : 0, "colgroup::valign" : 0, "colgroup::width" : 0, "command::checked" : 0, "command::command" : 5, "command::disabled" : 0, "command::icon" : 1, "command::label" : 0, "command::radiogroup" : 0,
        "command::type" : 0, "data::value" : 0, "del::cite" : 1, "del::datetime" : 0, "details::open" : 0, "dir::compact" : 0, "div::align" : 0, "dl::compact" : 0, "fieldset::disabled" : 0, "font::color" : 0, "font::face" : 0, "font::size" : 0, "form::accept" : 0, "form::action" : 1, "form::autocomplete" : 0, "form::enctype" : 0, "form::method" : 0, "form::name" : 7, "form::novalidate" : 0, "form::onreset" : 2, "form::onsubmit" : 2, "form::target" : 10, "h1::align" : 0, "h2::align" : 0, "h3::align" : 0, "h4::align" : 0, "h5::align" : 0, "h6::align" : 0, "hr::align" : 0, "hr::noshade" : 0, "hr::size" : 0,
        "hr::width" : 0, "iframe::align" : 0, "iframe::frameborder" : 0, "iframe::height" : 0, "iframe::marginheight" : 0, "iframe::marginwidth" : 0, "iframe::width" : 0, "img::align" : 0, "img::alt" : 0, "img::border" : 0, "img::height" : 0, "img::hspace" : 0, "img::ismap" : 0, "img::name" : 7, "iframe::src" : 1, "img::src" : 1, "img::usemap" : 11, "img::vspace" : 0, "img::width" : 0, "input::accept" : 0, "input::accesskey" : 0, "input::align" : 0, "input::alt" : 0, "input::autocomplete" : 0, "input::checked" : 0, "input::disabled" : 0, "input::inputmode" : 0, "input::ismap" : 0, "input::list" : 5, "input::max" : 0,
        "input::maxlength" : 0, "input::min" : 0, "input::multiple" : 0, "input::name" : 8, "input::onblur" : 2, "input::onchange" : 2, "input::onfocus" : 2, "input::onselect" : 2, "input::placeholder" : 0, "input::readonly" : 0, "input::required" : 0, "input::size" : 0, "input::src" : 1, "input::step" : 0, "input::tabindex" : 0, "input::type" : 0, "input::usemap" : 11, "input::value" : 0, "ins::cite" : 1, "ins::datetime" : 0, "label::accesskey" : 0, "label::for" : 5, "label::onblur" : 2, "label::onfocus" : 2, "legend::accesskey" : 0, "legend::align" : 0, "li::type" : 0, "li::value" : 0,
        "map::name" : 7, "menu::compact" : 0, "menu::label" : 0, "menu::type" : 0, "meter::high" : 0, "meter::low" : 0, "meter::max" : 0, "meter::min" : 0, "meter::value" : 0, "ol::compact" : 0, "ol::reversed" : 0, "ol::start" : 0, "ol::type" : 0, "optgroup::disabled" : 0, "optgroup::label" : 0, "option::disabled" : 0, "option::label" : 0, "option::selected" : 0, "option::value" : 0, "output::for" : 6, "output::name" : 8, "p::align" : 0, "pre::width" : 0, "progress::max" : 0, "progress::min" : 0, "progress::value" : 0, "q::cite" : 1, "select::autocomplete" : 0, "select::disabled" : 0, "select::multiple" : 0,
        "select::name" : 8, "select::onblur" : 2, "select::onchange" : 2, "select::onfocus" : 2, "select::required" : 0, "select::size" : 0, "select::tabindex" : 0, "source::type" : 0, "table::align" : 0, "table::bgcolor" : 0, "table::border" : 0, "table::cellpadding" : 0, "table::cellspacing" : 0, "table::frame" : 0, "table::rules" : 0, "table::summary" : 0, "table::width" : 0, "tbody::align" : 0, "tbody::char" : 0, "tbody::charoff" : 0, "tbody::valign" : 0, "td::abbr" : 0, "td::align" : 0, "td::axis" : 0, "td::bgcolor" : 0, "td::char" : 0, "td::charoff" : 0, "td::colspan" : 0, "td::headers" : 6,
        "td::height" : 0, "td::nowrap" : 0, "td::rowspan" : 0, "td::scope" : 0, "td::valign" : 0, "td::width" : 0, "textarea::accesskey" : 0, "textarea::autocomplete" : 0, "textarea::cols" : 0, "textarea::disabled" : 0, "textarea::inputmode" : 0, "textarea::name" : 8, "textarea::onblur" : 2, "textarea::onchange" : 2, "textarea::onfocus" : 2, "textarea::onselect" : 2, "textarea::placeholder" : 0, "textarea::readonly" : 0, "textarea::required" : 0, "textarea::rows" : 0, "textarea::tabindex" : 0, "textarea::wrap" : 0, "tfoot::align" : 0, "tfoot::char" : 0, "tfoot::charoff" : 0, "tfoot::valign" : 0,
        "th::abbr" : 0, "th::align" : 0, "th::axis" : 0, "th::bgcolor" : 0, "th::char" : 0, "th::charoff" : 0, "th::colspan" : 0, "th::headers" : 6, "th::height" : 0, "th::nowrap" : 0, "th::rowspan" : 0, "th::scope" : 0, "th::valign" : 0, "th::width" : 0, "thead::align" : 0, "thead::char" : 0, "thead::charoff" : 0, "thead::valign" : 0, "tr::align" : 0, "tr::bgcolor" : 0, "tr::char" : 0, "tr::charoff" : 0, "tr::valign" : 0, "track::default" : 0, "track::kind" : 0, "track::label" : 0, "track::srclang" : 0, "ul::compact" : 0, "ul::type" : 0, "video::controls" : 0, "video::height" : 0, "video::loop" : 0,
        "video::mediagroup" : 5, "video::muted" : 0, "video::poster" : 1, "video::preload" : 0, "video::width" : 0};
    p.ATTRIBS = p.l;
    p.c = {OPTIONAL_ENDTAG : 1, EMPTY : 2, CDATA : 4, RCDATA : 8, UNSAFE : 16, FOLDABLE : 32, SCRIPT : 64, STYLE : 128, VIRTUALIZED : 256};
    p.eflags = p.c;
    p.f = {a : 0, abbr : 0, acronym : 0, address : 0, applet : 272, area : 2, article : 0, aside : 0, audio : 0, b : 0, base : 274, basefont : 274, bdi : 0, bdo : 0, big : 0, blockquote : 0, body : 305, br : 2, button : 0, canvas : 0, caption : 0, center : 0, cite : 0, code : 0, col : 2, colgroup : 1, command : 2, data : 0, datalist : 0, dd : 1, del : 0, details : 0, dfn : 0, dialog : 272, dir : 0, div : 0, dl : 0, dt : 1, em : 0, fieldset : 0, figcaption : 0, figure : 0, font : 0, footer : 0, form : 0, frame : 274, frameset : 272, h1 : 0, h2 : 0, h3 : 0, h4 : 0, h5 : 0, h6 : 0, head : 305, header : 0, hgroup : 0, hr : 2, html : 305, i : 0, iframe : 4, img : 2, input : 2, ins : 0, isindex : 274,
        kbd : 0, keygen : 274, label : 0, legend : 0, li : 1, link : 274, map : 0, mark : 0, menu : 0, meta : 274, meter : 0, nav : 0, nobr : 0, noembed : 276, noframes : 276, noscript : 276, object : 272, ol : 0, optgroup : 0, option : 1, output : 0, p : 1, param : 274, pre : 0, progress : 0, q : 0, s : 0, samp : 0, script : 84, section : 0, select : 0, small : 0, source : 2, span : 0, strike : 0, strong : 0, style : 148, sub : 0, summary : 0, sup : 0, table : 0, tbody : 1, td : 1, textarea : 8, tfoot : 1, th : 1, thead : 1, time : 0, title : 280, tr : 1, track : 2, tt : 0, u : 0, ul : 0, "var" : 0, video : 0, wbr : 2};
    p.ELEMENTS = p.f;
    p.D = {a : "HTMLAnchorElement", abbr : "HTMLElement", acronym : "HTMLElement", address : "HTMLElement", applet : "HTMLAppletElement", area : "HTMLAreaElement", article : "HTMLElement", aside : "HTMLElement", audio : "HTMLAudioElement", b : "HTMLElement", base : "HTMLBaseElement", basefont : "HTMLBaseFontElement", bdi : "HTMLElement", bdo : "HTMLElement", big : "HTMLElement", blockquote : "HTMLQuoteElement", body : "HTMLBodyElement", br : "HTMLBRElement", button : "HTMLButtonElement", canvas : "HTMLCanvasElement", caption : "HTMLTableCaptionElement", center : "HTMLElement",
        cite : "HTMLElement", code : "HTMLElement", col : "HTMLTableColElement", colgroup : "HTMLTableColElement", command : "HTMLCommandElement", data : "HTMLElement", datalist : "HTMLDataListElement", dd : "HTMLElement", del : "HTMLModElement", details : "HTMLDetailsElement", dfn : "HTMLElement", dialog : "HTMLDialogElement", dir : "HTMLDirectoryElement", div : "HTMLDivElement", dl : "HTMLDListElement", dt : "HTMLElement", em : "HTMLElement", fieldset : "HTMLFieldSetElement", figcaption : "HTMLElement", figure : "HTMLElement", font : "HTMLFontElement", footer : "HTMLElement",
        form : "HTMLFormElement", frame : "HTMLFrameElement", frameset : "HTMLFrameSetElement", h1 : "HTMLHeadingElement", h2 : "HTMLHeadingElement", h3 : "HTMLHeadingElement", h4 : "HTMLHeadingElement", h5 : "HTMLHeadingElement", h6 : "HTMLHeadingElement", head : "HTMLHeadElement", header : "HTMLElement", hgroup : "HTMLElement", hr : "HTMLHRElement", html : "HTMLHtmlElement", i : "HTMLElement", iframe : "HTMLIFrameElement", img : "HTMLImageElement", input : "HTMLInputElement", ins : "HTMLModElement", isindex : "HTMLUnknownElement", kbd : "HTMLElement", keygen : "HTMLKeygenElement",
        label : "HTMLLabelElement", legend : "HTMLLegendElement", li : "HTMLLIElement", link : "HTMLLinkElement", map : "HTMLMapElement", mark : "HTMLElement", menu : "HTMLMenuElement", meta : "HTMLMetaElement", meter : "HTMLMeterElement", nav : "HTMLElement", nobr : "HTMLElement", noembed : "HTMLElement", noframes : "HTMLElement", noscript : "HTMLElement", object : "HTMLObjectElement", ol : "HTMLOListElement", optgroup : "HTMLOptGroupElement", option : "HTMLOptionElement", output : "HTMLOutputElement", p : "HTMLParagraphElement", param : "HTMLParamElement", pre : "HTMLPreElement",
        progress : "HTMLProgressElement", q : "HTMLQuoteElement", s : "HTMLElement", samp : "HTMLElement", script : "HTMLScriptElement", section : "HTMLElement", select : "HTMLSelectElement", small : "HTMLElement", source : "HTMLSourceElement", span : "HTMLSpanElement", strike : "HTMLElement", strong : "HTMLElement", style : "HTMLStyleElement", sub : "HTMLElement", summary : "HTMLElement", sup : "HTMLElement", table : "HTMLTableElement", tbody : "HTMLTableSectionElement", td : "HTMLTableDataCellElement", textarea : "HTMLTextAreaElement", tfoot : "HTMLTableSectionElement",
        th : "HTMLTableHeaderCellElement", thead : "HTMLTableSectionElement", time : "HTMLTimeElement", title : "HTMLTitleElement", tr : "HTMLTableRowElement", track : "HTMLTrackElement", tt : "HTMLElement", u : "HTMLElement", ul : "HTMLUListElement", "var" : "HTMLElement", video : "HTMLVideoElement", wbr : "HTMLElement"};
    p.ELEMENT_DOM_INTERFACES = p.D;
    p.C = {NOT_LOADED : 0, SAME_DOCUMENT : 1, NEW_DOCUMENT : 2};
    p.ueffects = p.C;
    p.A = {"a::href" : 2, "area::href" : 2, "blockquote::cite" : 0, "command::icon" : 1, "del::cite" : 0, "form::action" : 2, "iframe::src" : 1, "img::src" : 1, "input::src" : 1, "ins::cite" : 0, "q::cite" : 0, "video::poster" : 1};
    p.URIEFFECTS = p.A;
    p.B = {UNSANDBOXED : 2, SANDBOXED : 1, DATA : 0};
    p.ltypes = p.B;
    p.z = {"a::href" : 2, "area::href" : 2, "blockquote::cite" : 2, "command::icon" : 1, "del::cite" : 2, "form::action" : 2, "iframe::src" : 1, "img::src" : 1, "input::src" : 1, "ins::cite" : 2, "q::cite" : 2, "video::poster" : 1};
    p.LOADERTYPES = p.z;
    "undefined" !== typeof window && (window.html4 = p);
    var S = function (h) {
        function T(a) {
            if (y.hasOwnProperty(a))return y[a];
            var d = a.match(U);
            return d ? String.fromCharCode(parseInt(d[1], 10)) : (d = a.match(V)) ? String.fromCharCode(parseInt(d[1], 16)) : r && W.test(a) ? (r.innerHTML = "&" + a + ";", d = r.textContent, y[a] = d) : "&" + a + ";"
        }

        function X(a, d) {
            return T(d)
        }

        function z(a) {
            return a.replace(Y, X)
        }

        function B(a) {
            return("" + a).replace(Z, "&amp;").replace(C, "&lt;").replace(D, "&gt;").replace($, "&#34;")
        }

        function E(a) {
            return a.replace(aa, "&amp;$1").replace(C, "&lt;").replace(D, "&gt;")
        }

        function F(a) {
            var d = {m : a.m || a.cdata, n : a.n || a.comment, o : a.o || a.endDoc, h : a.h || a.endTag, d : a.d || a.pcdata, v : a.v || a.rcdata, w : a.w || a.startDoc, k : a.k || a.startTag};
            return function (a, f) {
                var c;
                var n = /(<\/|<\!--|<[!?]|[&<>])/g;
                c = a + "";
                if (ba)c = c.split(n); else {
                    for (var e = [], g = 0, h; (h = n.exec(c)) !== l;)e.push(c.substring(g, h.index)), e.push(h[0]), g = h.index + h[0].length;
                    e.push(c.substring(g));
                    c = e
                }
                G(d, c, 0, {g : !1, r : !1}, f)
            }
        }

        function o(a, d, b, f, c) {
            return function () {
                G(a, d, b, f, c)
            }
        }

        function G(a, d, b, f, c) {
            try {
                a.w && 0 == b && a.w(c);
                for (var n,
                         e, g, k = d.length; b < k;) {
                    var j = d[b++], s = d[b];
                    switch (j) {
                        case "&":
                            ca.test(s) ? (a.d && a.d("&" + s, c, m, o(a, d, b, f, c)), b++) : a.d && a.d("&amp;", c, m, o(a, d, b, f, c));
                            break;
                        case "</":
                            if (n = /^([-\w:]+)[^\'\"]*/.exec(s))if (n[0].length === s.length && ">" === d[b + 1])b += 2, g = n[1].toLowerCase(), a.h && a.h(g, c, m, o(a, d, b, f, c)); else {
                                var i = d, t = b, u = a, q = c, A = m, y = f, r = H(i, t);
                                r ? (u.h && u.h(r.name, q, A, o(u, i, t, y, q)), b = r.next) : b = i.length
                            } else a.d && a.d("&lt;/", c, m, o(a, d, b, f, c));
                            break;
                        case "<":
                            if (n = /^([-\w:]+)\s*\/?/.exec(s))if (n[0].length === s.length &&
                                ">" === d[b + 1]) {
                                b += 2;
                                g = n[1].toLowerCase();
                                a.k && a.k(g, [], c, m, o(a, d, b, f, c));
                                var w = h.f[g];
                                w & I && (b = J(d, {name : g, next : b, c : w}, a, c, m, f))
                            } else {
                                var i = d, t = a, u = c, q = m, A = f, v = H(i, b);
                                v ? (t.k && t.k(v.name, v.F, u, q, o(t, i, v.next, A, u)), b = v.c & I ? J(i, v, t, u, q, A) : v.next) : b = i.length
                            } else a.d && a.d("&lt;", c, m, o(a, d, b, f, c));
                            break;
                        case "<\!--":
                            if (!f.r) {
                                for (e = b + 1; e < k && !(">" === d[e] && /--$/.test(d[e - 1])); e++);
                                if (e < k) {
                                    if (a.n) {
                                        var x = d.slice(b, e).join("");
                                        a.n(x.substr(0, x.length - 2), c, m, o(a, d, e + 1, f, c))
                                    }
                                    b = e + 1
                                } else f.r = !0
                            }
                            f.r && a.d && a.d("&lt;!--",
                                c, m, o(a, d, b, f, c));
                            break;
                        case "<!":
                            if (/^\w/.test(s)) {
                                if (!f.g) {
                                    for (e = b + 1; e < k && ">" !== d[e]; e++);
                                    e < k ? b = e + 1 : f.g = !0
                                }
                                f.g && a.d && a.d("&lt;!", c, m, o(a, d, b, f, c))
                            } else a.d && a.d("&lt;!", c, m, o(a, d, b, f, c));
                            break;
                        case "<?":
                            if (!f.g) {
                                for (e = b + 1; e < k && ">" !== d[e]; e++);
                                e < k ? b = e + 1 : f.g = !0
                            }
                            f.g && a.d && a.d("&lt;?", c, m, o(a, d, b, f, c));
                            break;
                        case ">":
                            a.d && a.d("&gt;", c, m, o(a, d, b, f, c));
                            break;
                        case "":
                            break;
                        default:
                            a.d && a.d(j, c, m, o(a, d, b, f, c))
                    }
                }
                a.o && a.o(c)
            } catch (z) {
                if (z !== m)throw z;
            }
        }

        function J(a, d, b, f, c, n) {
            var e = a.length;
            w.hasOwnProperty(d.name) ||
            (w[d.name] = RegExp("^" + d.name + "(?:[\\s\\/]|$)", "i"));
            for (var g = w[d.name], k = d.next, j = d.next + 1; j < e && !("</" === a[j - 1] && g.test(a[j])); j++);
            j < e && (j -= 1);
            e = a.slice(k, j).join("");
            if (d.c & h.c.CDATA)b.m && b.m(e, f, c, o(b, a, j, n, f)); else if (d.c & h.c.RCDATA)b.v && b.v(E(e), f, c, o(b, a, j, n, f)); else throw Error("bug");
            return j
        }

        function H(a, d) {
            var b = /^([-\w:]+)/.exec(a[d]), f = {};
            f.name = b[1].toLowerCase();
            f.c = h.f[f.name];
            for (var c = a[d].substr(b[0].length), n = d + 1, e = a.length; n < e && ">" !== a[n]; n++)c += a[n];
            if (!(e <= n)) {
                for (var g = []; "" !==
                    c;)if (b = da.exec(c))if (b[4] && !b[5] || b[6] && !b[7]) {
                    for (var b = b[4] || b[6], k = !1, c = [c, a[n++]]; n < e; n++) {
                        if (k) {
                            if (">" === a[n])break
                        } else 0 <= a[n].indexOf(b) && (k = !0);
                        c.push(a[n])
                    }
                    if (e <= n)break;
                    c = c.join("")
                } else {
                    var k = b[1].toLowerCase(), j;
                    if (b[2]) {
                        j = b[3];
                        var i = j.charCodeAt(0);
                        if (34 === i || 39 === i)j = j.substr(1, j.length - 2);
                        j = z(j.replace(ea, ""))
                    } else j = "";
                    g.push(k, j);
                    c = c.substr(b[0].length)
                } else c = c.replace(/^[\s\S][^a-z\s]*/, "");
                f.F = g;
                f.next = n + 1;
                return f
            }
        }

        function K(a) {
            function d(a, b) {
                f || b.push(a)
            }

            var b, f;
            return F({startDoc : function () {
                b =
                    [];
                f = !1
            }, startTag : function (c, d, e) {
                if (!f && h.f.hasOwnProperty(c)) {
                    var g = h.f[c];
                    if (!(g & h.c.FOLDABLE)) {
                        var k = a(c, d);
                        if (k) {
                            if ("object" !== typeof k)throw Error("tagPolicy did not return object (old API?)");
                            if ("attribs"in k)d = k.attribs; else throw Error("tagPolicy gave no attribs");
                            var j;
                            "tagName"in k ? (j = k.tagName, k = h.f[j]) : (j = c, k = g);
                            if (g & h.c.OPTIONAL_ENDTAG) {
                                var i = b[b.length - 1];
                                i && i.t === c && (i.j !== j || c !== j) && e.push("</", i.j, ">")
                            }
                            g & h.c.EMPTY || b.push({t : c, j : j});
                            e.push("<", j);
                            c = 0;
                            for (i = d.length; c < i; c += 2) {
                                var o =
                                    d[c], m = d[c + 1];
                                m !== l && void 0 !== m && e.push(" ", o, '="', B(m), '"')
                            }
                            e.push(">");
                            g & h.c.EMPTY && !(k & h.c.EMPTY) && e.push("</", j, ">")
                        } else f = !(g & h.c.EMPTY)
                    }
                }
            }, endTag : function (a, d) {
                if (f)f = !1; else if (h.f.hasOwnProperty(a)) {
                    var e = h.f[a];
                    if (!(e & (h.c.EMPTY | h.c.FOLDABLE))) {
                        if (e & h.c.OPTIONAL_ENDTAG)for (e = b.length; 0 <= --e;) {
                            var g = b[e].t;
                            if (g === a)break;
                            if (!(h.f[g] & h.c.OPTIONAL_ENDTAG))return
                        } else for (e = b.length; 0 <= --e && b[e].t !== a;);
                        if (!(0 > e)) {
                            for (g = b.length; --g > e;) {
                                var i = b[g].j;
                                h.f[i] & h.c.OPTIONAL_ENDTAG || d.push("</", i,
                                    ">")
                            }
                            e < b.length && (a = b[e].j);
                            b.length = e;
                            d.push("</", a, ">")
                        }
                    }
                }
            }, pcdata : d, rcdata : d, cdata : d, endDoc : function (a) {
                for (; b.length; b.length--)a.push("</", b[b.length - 1].j, ">")
            }})
        }

        function L(a, d, b, f, c) {
            if (!c)return l;
            var h = ("" + a).match(fa);
            return h && (!h[1] || ga.test(h[1])) ? c(a, d, b, f) : l
        }

        function q(a, d, b, f, c) {
            b || a(d + " removed", {G : "removed", tagName : d});
            if (f !== c) {
                var h = "changed";
                f && !c ? h = "removed" : !f && c && (h = "added");
                a(d + "." + b + " " + h, {G : h, tagName : d, J : b, oldValue : f, newValue : c})
            }
        }

        function M(a, d, b) {
            d = d + "::" + b;
            if (a.hasOwnProperty(d))return a[d];
            d = "*::" + b;
            if (a.hasOwnProperty(d))return a[d]
        }

        function N(a, d, b, f, c) {
            for (var i = 0; i < d.length; i += 2) {
                var e = d[i], g = d[i + 1], k = g, j = l, m;
                if ((m = a + "::" + e, h.l.hasOwnProperty(m)) || (m = "*::" + e, h.l.hasOwnProperty(m)))j = h.l[m];
                if (j !== l)switch (j) {
                    case h.e.NONE:
                        break;
                    case h.e.SCRIPT:
                        g = l;
                        c && q(c, a, e, k, g);
                        break;
                    case h.e.STYLE:
                        if ("undefined" === typeof x) {
                            g = l;
                            c && q(c, a, e, k, g);
                            break
                        }
                        var o = [];
                        x(g, {K : function (a, c) {
                            var d = a.toLowerCase(), e = O[d];
                            if (e) {
                                P(d, e, c, b ? function (a) {
                                    return L(a, h.C.H, h.B.I, {TYPE : "CSS", CSS_PROP : d}, b)
                                } : l);
                                o.push(a +
                                    ": " + c.join(" "))
                            }
                        }});
                        g = 0 < o.length ? o.join(" ; ") : l;
                        c && q(c, a, e, k, g);
                        break;
                    case h.e.ID:
                    case h.e.IDREF:
                    case h.e.IDREFS:
                    case h.e.GLOBAL_NAME:
                    case h.e.LOCAL_NAME:
                    case h.e.CLASSES:
                        g = f ? f(g) : g;
                        c && q(c, a, e, k, g);
                        break;
                    case h.e.URI:
                        g = L(g, M(h.A, a, e), M(h.z, a, e), {TYPE : "MARKUP", XML_ATTR : e, XML_TAG : a}, b);
                        c && q(c, a, e, k, g);
                        break;
                    case h.e.URI_FRAGMENT:
                        g && "#" === g.charAt(0) ? (g = g.substring(1), g = f ? f(g) : g, g !== l && void 0 !== g && (g = "#" + g)) : g = l;
                        c && q(c, a, e, k, g);
                        break;
                    default:
                        g = l, c && q(c, a, e, k, g)
                } else g = l, c && q(c, a, e, k, g);
                d[i + 1] = g
            }
            return d
        }

        function Q(a, d, b) {
            return function (f, c) {
                if (h.f[f] & h.c.UNSAFE)b && q(b, f, void 0, void 0, void 0); else return{attribs : N(f, c, a, d, b)}
            }
        }

        function R(a, d) {
            var b = [];
            K(d)(a, b);
            return b.join("")
        }

        var x, P, O;
        "undefined" !== typeof window && (x = window.parseCssDeclarations, P = window.sanitizeCssProperty, O = window.cssSchema);
        var y = {lt : "<", LT : "<", gt : ">", GT : ">", amp : "&", AMP : "&", quot : '"', apos : "'", nbsp : "\u00a0"}, U = /^#(\d+)$/, V = /^#x([0-9A-Fa-f]+)$/, W = /^[A-Za-z][A-za-z0-9]+$/, r = "undefined" !== typeof window && window.document ? window.document.createElement("textarea") :
            l, ea = /\0/g, Y = /&(#[0-9]+|#[xX][0-9A-Fa-f]+|\w+);/g, ca = /^(#[0-9]+|#[xX][0-9A-Fa-f]+|\w+);/, Z = /&/g, aa = /&([^a-z#]|#(?:[^0-9x]|x(?:[^0-9a-f]|$)|$)|$)/gi, C = /[<]/g, D = />/g, $ = /\"/g, da = /^\s*([-.:\w]+)(?:\s*(=)\s*((")[^"]*("|$)|(')[^']*('|$)|(?=[a-z][-\w]*\s*=)|[^"'\s]*))?/i, ba = 3 === "a,b".split(/(,)/).length, I = h.c.CDATA | h.c.RCDATA, m = {}, w = {}, fa = /^(?:([^:/?# ]+):)?/, ga = /^(?:https?|mailto)$/i, i = {};
        i.L = i.escapeAttrib = B;
        i.M = i.makeHtmlSanitizer = K;
        i.N = i.makeSaxParser = F;
        i.O = i.makeTagPolicy = Q;
        i.P = i.normalizeRCData = E;
        i.Q = i.sanitize = function (a, d, b, f) {
            return R(a, Q(d, b, f))
        };
        i.R = i.sanitizeAttribs = N;
        i.S = i.sanitizeWithPolicy = R;
        i.T = i.unescapeEntities = z;
        return i
    }(p), ha = S.sanitize;
    "undefined" !== typeof window && (window.html = S, window.html_sanitize = ha);
})();
