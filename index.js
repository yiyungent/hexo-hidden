var hexoLog = require("hexo-log");
var log =
  typeof hexoLog["default"] === "function"
    ? hexoLog["default"]({
        debug: false,
        silent: false,
      })
    : hexoLog({
        debug: false,
        silent: false,
      });

/**
 * md文件返回 true
 * @param {*} data
 */
function ignore(data) {
  // TODO: 好奇怪，试了一下, md返回true, 但却需要忽略 取反!
  var source = data.source;
  var ext = source.substring(source.lastIndexOf(".")).toLowerCase();
  return ["md"].indexOf(ext) > -1;
}

function action(data) {
  // <!-- hidden:start -->([\\s\\S]*?)<!-- hidden:end -->  -->  空
  var regExp = RegExp(
    "<!-- hidden:start -->([\\s\\S]*?)<!-- hidden:end -->",
    "g"
  );
  // hexo g
  data.content = data.content.replace(regExp, "", "g");

  // log.info(`hexo-hidden`);

  return data;
}

hexo.extend.filter.register(
  "before_post_render",
  (data) => {
    if (!ignore(data)) {
      action(data);
    }
  },
  0
);
