function showCopiedSummaryUrlNotification() {
  let e = document.querySelector(".copied");
  (e.innerText = "Ссылка на пункт скопирована в буфер обмена"),
    e.classList.remove("hidden"),
    e.classList.add("visible"),
    setTimeout(function () {
      e.classList.remove("visible"), e.classList.add("hidden");
    }, 2500);
}
async function getLastCommitDate() {
  var e = window.location.pathname,
    e =
      "https://api.github.com/repos/aechat/links/commits?path=" +
      (e.startsWith("/") ? e.substring(1) : e);
  try {
    var t = await fetch(e);
    if (!t.ok) throw new Error("" + t.status);
    var i,
      n = await t.json();
    0 === n.length
      ? (document.getElementById("commit_info").textContent =
          "Дата изменения\nвременно недоступна")
      : ((i = new Date(n[0].commit.author.date)),
        (document.getElementById("commit_info").textContent =
          "Обновлено:\n" +
          i.toLocaleString() +
          "\n\nЧто нового: " +
          n[0].commit.message));
  } catch (e) {
    document.getElementById("commit_info").textContent = "Ошибка получения даты.\n" + e;
  }
}
function showCopiedUrlNotification() {
  var e = document.querySelector(".copied");
  (e.innerText = "Ссылка на этот сайт скопирована в буфер обмена"),
    e.classList.remove("hidden"),
    e.classList.add("visible"),
    setTimeout(function () {
      e.classList.remove("visible"), e.classList.add("hidden");
    }, 2500);
}
function copyURL() {
  var e = document.createElement("textarea");
  (e.value = window.location.href),
    document.body.appendChild(e),
    e.select(),
    document.execCommand("copy"),
    document.body.removeChild(e),
    showCopiedUrlNotification();
}
document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll(".content").forEach((e, n) => {
    [...e.querySelectorAll("summary")].forEach((i, e) => {
      "SUMMARY" !== i.tagName ||
        i.parentElement.closest("details > summary") ||
        (i.id = n + 1 + "." + (e + 1)),
        (i.textContent = n + 1 + `.${e + 1}. ` + i.textContent);
      var t,
        e = i.closest("details");
      e &&
        ((t = document.createElement("button")).classList.add("copy_button"),
        (t.textContent = "Скопировать ссылку"),
        t.addEventListener("click", function () {
          var e = i.id,
            e = window.location.href.split("#")[0] + "#" + e,
            t = document.createElement("textarea");
          (t.value = e),
            document.body.appendChild(t),
            t.select(),
            document.execCommand("copy"),
            document.body.removeChild(t),
            showCopiedSummaryUrlNotification();
        }),
        e.insertBefore(t, e.firstChild));
    });
  });
}),
  getLastCommitDate(),
  document.addEventListener("DOMContentLoaded", function () {
    var e = document.querySelector(".logo");
    e && e.addEventListener("click", copyURL);
  });
let detailsElements = document.querySelectorAll("details");
function expandAllDetails() {
  detailsElements.forEach((e) => {
    e.open = !0;
  });
}
function extractTextFromHTML(e) {
  var t = document.createElement("div"),
    e = ((t.innerHTML = e), t.innerText);
  return e;
}
function showCopiedNotification() {
  let e = document.querySelector(".copied");
  (e.innerText = "Текст скопирован в буфер обмена"),
    e.classList.remove("hidden"),
    e.classList.add("visible"),
    setTimeout(function () {
      e.classList.remove("visible"), e.classList.add("hidden");
    }, 2500);
}
function copyTextToClipboard(e) {
  if (navigator.clipboard)
    navigator.clipboard.writeText(e).then(
      function () {
        showCopiedNotification();
      },
      function (e) {
        alert("Ошибка при копировании текста: " + e);
      }
    );
  else {
    var t = document.createElement("textarea");
    (t.value = e), document.body.appendChild(t), t.select();
    try {
      document.execCommand("copy")
        ? showCopiedNotification()
        : alert("Не удалось скопировать текст :(");
    } catch (e) {
      alert("Ошибка при копировании текста: " + e);
    }
    document.body.removeChild(t);
  }
}
function createRipple(e) {
  let t = document.createElement("span");
  t.className = "ripple";
  var i = e.currentTarget.getBoundingClientRect(),
    n = e.clientX - i.left,
    o = e.clientY - i.top,
    i = 2 * Math.max(i.width, i.height);
  (t.style.width = t.style.height = i + "px"),
    (t.style.left = n - i / 2 + "px"),
    (t.style.top = o - i / 2 + "px"),
    e.currentTarget.appendChild(t),
    setTimeout(() => {
      (t.style.transform = "scale(2)"),
        setTimeout(() => {
          t.remove();
        }, 600);
    }, 10);
}
document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll("mark, code").forEach(function (e) {
    e.addEventListener("click", function () {
      copyTextToClipboard(e.innerText);
    });
  });
}),
  ((e, t, i, n, o, s) => {
    (e.ym =
      e.ym ||
      function () {
        (e.ym.a = e.ym.a || []).push(arguments);
      }),
      (e.ym.l = +new Date());
    for (var d = 0; d < document.scripts.length; d++)
      if (document.scripts[d].src === n) return;
    (o = t.createElement(i)),
      (s = t.getElementsByTagName(i)[0]),
      (o.async = 1),
      (o.src = n),
      s.parentNode.insertBefore(o, s);
  })(window, document, "script", "https://mc.yandex.ru/metrika/tag.js"),
  ym(96346999, "init", {
    clickmap: !0,
    trackLinks: !0,
    accurateTrackBounce: !0,
    webvisor: !0,
  }),
  document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll("img").forEach((e) => {
      e.addEventListener("click", function () {
        this.style.transform.includes("scale(1.5)")
          ? ((this.style.transform = "scale(1)"),
            (this.style.filter = "drop-shadow(0px 0px 0px transparent)"),
            (this.style.cursor = "zoom-in"))
          : ((this.style.transform = "scale(1.5)"),
            (this.style.filter = "drop-shadow(0px 0px 20px var(--shadow))"),
            (this.style.cursor = "zoom-out"));
      });
    });
  }),
  document.querySelectorAll('a[href^="#"]').forEach((e) => {
    e.addEventListener("click", function (e) {
      e.preventDefault();
      (e = this.getAttribute("href").substring(1)), (e = document.getElementById(e));
      e && window.scrollTo({top: e.offsetTop - 80, behavior: "smooth"});
    });
  });
let isToggling = !1;
function toggleSidemenu(e) {
  var t;
  isToggling ||
    ((isToggling = !0),
    (e = document.querySelector(e)).classList.contains("hidden")
      ? (800 <= window.innerWidth ||
          !document.querySelector(".visible") ||
          ((t = document.querySelector(".visible")).classList.remove("visible"),
          t.classList.add("hidden")),
        e.classList.remove("hidden"),
        e.classList.add("visible"))
      : (e.classList.remove("visible"), e.classList.add("hidden")),
    setTimeout(() => {
      isToggling = !1;
    }, 5));
}
function preventScroll(e) {
  e.preventDefault();
}
let header = document.querySelector("header"),
  leftSidemenu = document.querySelector(".left_sidemenu"),
  rightSidemenu = document.querySelector(".right_sidemenu");
function toggleTheme(e) {
  var t = document.body;
  "light" === e
    ? (t.classList.remove("dark"), t.classList.add("light"))
    : "dark" === e
      ? (t.classList.remove("light"), t.classList.add("dark"))
      : "system" === e && applySystemTheme(),
    localStorage.setItem("theme", e),
    document
      .querySelectorAll(".right_sidemenu button")
      .forEach((e) => e.classList.remove("selected")),
    document.querySelector(`[data-theme="${e}"]`).classList.add("selected");
}
function applySystemTheme() {
  var e = darkModeMediaQuery.matches ? "dark" : "light",
    t = document.body;
  "dark" == e
    ? (t.classList.remove("light"), t.classList.add("dark"))
    : (t.classList.remove("dark"), t.classList.add("light"));
}
function setSystemTheme() {
  localStorage.setItem("theme", "system"),
    applySystemTheme(),
    document
      .querySelectorAll(".right_sidemenu button")
      .forEach((e) => e.classList.remove("selected")),
    document.querySelector('[data-theme="system"]').classList.add("selected");
}
header.addEventListener("touchmove", preventScroll, {passive: !1}),
  leftSidemenu.addEventListener("touchmove", preventScroll, {passive: !1}),
  rightSidemenu.addEventListener("touchmove", preventScroll, {passive: !1}),
  document.addEventListener("click", function (e) {
    var t, i;
    isToggling ||
      ((t = leftSidemenu.classList.contains("visible")),
      (i = rightSidemenu.classList.contains("visible")),
      !t && !i) ||
      leftSidemenu.contains(e.target) ||
      rightSidemenu.contains(e.target) ||
      (t && i
        ? (toggleSidemenu(".left_sidemenu"), toggleSidemenu(".right_sidemenu"))
        : (t && toggleSidemenu(".left_sidemenu"),
          i && toggleSidemenu(".right_sidemenu")));
  }),
  leftSidemenu.addEventListener("click", function (e) {
    e.stopPropagation();
  }),
  rightSidemenu.addEventListener("click", function (e) {
    e.stopPropagation();
  }),
  document.addEventListener("keydown", function (e) {
    "Escape" === e.key &&
      (leftSidemenu.classList.contains("visible") && toggleSidemenu(".left_sidemenu"),
      rightSidemenu.classList.contains("visible")) &&
      toggleSidemenu(".right_sidemenu");
  }),
  window.addEventListener("resize", function () {
    window.innerWidth < 800 &&
      (leftSidemenu.classList.remove("visible"),
      leftSidemenu.classList.add("hidden"),
      rightSidemenu.classList.remove("visible"),
      rightSidemenu.classList.add("hidden"),
      leftSidemenu.classList.contains("visible") && toggleSidemenu(".left_sidemenu"),
      rightSidemenu.classList.contains("visible")) &&
      toggleSidemenu(".right_sidemenu");
  }),
  document.addEventListener("DOMContentLoaded", () => {
    var e = localStorage.getItem("theme");
    "light" === e || "dark" === e
      ? toggleTheme(e)
      : ("system" !== e && null !== e) || setSystemTheme();
  });
let darkModeMediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
darkModeMediaQuery.addEventListener("change", () => {
  "system" === localStorage.getItem("theme") && applySystemTheme();
});
