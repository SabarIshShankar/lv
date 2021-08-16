var Gridify = {
  gridify: document.querySelectorAll("[data-gridify]"),
  columns: [],
  init: function () {
    Array.prototype.forEach.call(this.gridify, function (e, t) {
      var r = e.getAttribute("data-gridify"),
        i = r.substr(0, r.indexOf("-columns"));
      if (
        e.querySelectorAll(":scope > div").length != i ||
        e.querySelectorAll(":scope > div")[0].getAttribute("class") !=
          "column size-1of" + i
      ) {
        for (var o = [], n = 1; n <= i; n++) {
          var c = document.createElement("div");
          c.setAttribute("class", "column size-1of" + i),
            Gridify.columns.push(c);
        }
        Array.prototype.forEach.call(
          e.querySelectorAll(":scope > div"),
          function (e, t) {
            var r = document.createElement("div");
            (r.innerHTML = e.outerHTML.trim()), (r = r.firstChild), o.push(r);
          }
        ),
          (e.innerHTML = ""),
          Array.prototype.forEach.call(Gridify.columns, function (t, r) {
            e.appendChild(t);
          }),
          Gridify.appendItems(o);
      }
    });
  },
  destroy: function () {
    Array.prototype.forEach.call(Gridify.gridify, function (e, t) {
      if (0 != Gridify.columns.length) {
        var r = document.createElement("div");
        r.setAttribute("data-items", ""), e.appendChild(r);
        var i = [];
        Array.prototype.forEach.call(
          e.querySelectorAll(":scope > div"),
          function (e, t) {
            Array.prototype.forEach.call(
              e.querySelectorAll(":scope > div"),
              function (e, t) {
                i.push({
                  index: parseInt(e.getAttribute("data-index")),
                  item: e
                });
              }
            );
          }
        ),
          i.sort(function (e, t) {
            return e.index < t.index ? -1 : e.index > t.index ? 1 : 0;
          }),
          Array.prototype.forEach.call(i, function (e, t) {
            e.item.removeAttribute("data-index"), r.appendChild(e.item);
          }),
          (Gridify.columns = []),
          (e.innerHTML = r.innerHTML);
      }
    });
  },
  reInit: function () {
    Gridify.destroy(), Gridify.init();
  },
  appendItems: function (e) {
    Array.prototype.forEach.call(e, function (e, t) {
      Gridify.appendItem(e, t);
    });
  },
  appendItem: function (e, t) {
    var r = 0;
    Array.prototype.forEach.call(
      Gridify.columns[0].querySelectorAll(":scope > div"),
      function (e, t) {
        r += e.offsetHeight;
      }
    );
    for (
      var i = { height: r, column: 0 }, o = 1;
      o < Gridify.columns.length;
      o++
    ) {
      r = 0;
      Array.prototype.forEach.call(
        Gridify.columns[o].querySelectorAll(":scope > div"),
        function (e, t) {
          r += e.offsetHeight;
        }
      ),
        r < i.height && (i = { height: r, column: o });
    }
    e.setAttribute("data-index", t), Gridify.columns[i.column].appendChild(e);
  }
};
let gridify = Gridify;
