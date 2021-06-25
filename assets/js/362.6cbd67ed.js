(window.webpackJsonp=window.webpackJsonp||[]).push([[362],{1684:function(t,s,e){"use strict";e.r(s);var a=e(19),n=Object(a.a)({},(function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h3",{attrs:{id:"zip命令"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#zip命令"}},[t._v("#")]),t._v(" zip命令")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",{staticStyle:{"text-align":"center"}},[t._v("-q")]),t._v(" "),e("th",[t._v("表示不显示压缩进度状态")])])]),t._v(" "),e("tbody",[e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("-r")]),t._v(" "),e("td",[t._v("表示子目录子文件全部压缩为zip；这部分比较重要，不然的话只有something这个文件夹被压缩，里面的没有被压缩进去")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("-e")]),t._v(" "),e("td",[t._v("表示你的压缩文件需要加密，终端会提示你输入密码的；还有种加密方法，这种是直接在命令行里做的，比如zip -r -P Password01! modudu.zip SomeDir, 就直接用Password01!来加密modudu.zip了")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("-m")]),t._v(" "),e("td",[t._v("表示压缩完删除原文件")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("-o")]),t._v(" "),e("td",[t._v("表示设置所有被压缩文件的最后修改时间为当前压缩时间")])])])]),t._v(" "),e("p",[t._v("当前目录操作："),e("code",[t._v("zip -qremo dist.zip dist")])]),t._v(" "),e("p",[t._v("当跨目录操作："),e("code",[t._v("zip -q -r -e -m -o '\\user\\samy\\someDir\\someFile.zip' '\\users\\someDir'")])]),t._v(" "),e("div",{staticClass:"language-sh line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[t._v("zip")]),t._v(" -r dist.zip dist/\n"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("zip")]),t._v(" -r bower_components.zip bower_components/\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br"),e("span",{staticClass:"line-number"},[t._v("2")]),e("br")])]),e("h3",{attrs:{id:"unzip命令"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#unzip命令"}},[t._v("#")]),t._v(" unzip命令")]),t._v(" "),e("p",[t._v("​    语法："),e("code",[t._v("unzip [选项] 压缩文件名.zip")])]),t._v(" "),e("p",[t._v("​    各选项的含义分别为：")]),t._v(" "),e("ul",[e("li",[e("p",[t._v("-x 文件列表 解压缩文件，但不包括指定的file文件。")])]),t._v(" "),e("li",[e("p",[t._v("-v 查看压缩文件目录，但不解压。")])]),t._v(" "),e("li",[e("p",[t._v("-t 测试文件有无损坏，但不解压。")])]),t._v(" "),e("li",[e("p",[t._v("-d 目录 把压缩文件解到指定目录下。")])]),t._v(" "),e("li",[e("p",[t._v("-z 只显示压缩文件的注解。")])]),t._v(" "),e("li",[e("p",[t._v("-n 不覆盖已经存在的文件。")])]),t._v(" "),e("li",[e("p",[t._v("-o 覆盖已存在的文件且不要求用户确认。")])]),t._v(" "),e("li",[e("p",[t._v("-j 不重建文档的目录结构，把所有文件解压到同一目录下。 123456789101112131415")])])]),t._v(" "),e("p",[t._v("​    "),e("strong",[t._v("1、将压缩文件text.zip在当前目录下解压缩。")])]),t._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[t._v("$ "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("unzip")]),t._v(" text.zip \n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br")])]),e("p",[t._v("​    "),e("strong",[t._v("2、将压缩文件text.zip在指定目录"),e("code",[t._v("/tmp")]),t._v("下解压缩，如果已有相同的文件存在，要求unzip命令不覆盖原先的文件。")])]),t._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[t._v("$ "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("unzip")]),t._v(" -n text.zip -d /tmp \n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br")])]),e("p",[t._v("​    "),e("strong",[t._v("3、查看压缩文件目录，但不解压。")])]),t._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[t._v("$ "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("unzip")]),t._v(" -v text.zip \n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br")])])])}),[],!1,null,null,null);s.default=n.exports}}]);