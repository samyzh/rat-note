(window.webpackJsonp=window.webpackJsonp||[]).push([[337],{1579:function(s,a,t){"use strict";t.r(a);var n=t(19),e=Object(n.a)({},(function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h2",{attrs:{id:"简介语法"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#简介语法"}},[s._v("#")]),s._v(" 简介语法")]),s._v(" "),t("p",[s._v("使用sed命令替换匹配行； 替换文件中部分字段重写；")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("sed [-hnV][-e<script>][-f<script文件>][文本文件]\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[t("strong",[s._v("参数说明")]),s._v("：")]),s._v(" "),t("ul",[t("li",[s._v("-e"),t("code",[s._v("<script>")]),s._v("或--expression="),t("code",[s._v("<script>")]),s._v(" 以选项中指定的script来处理输入的文本文件。")]),s._v(" "),t("li",[s._v("-f<script文件>或--file=<script文件> 以选项中指定的script文件来处理输入的文本文件。")]),s._v(" "),t("li",[s._v("-h或--help 显示帮助。")]),s._v(" "),t("li",[s._v("-n或--quiet或--silent 仅显示script处理后的结果。")]),s._v(" "),t("li",[s._v("-V或--version 显示版本信息。")])]),s._v(" "),t("p",[t("strong",[s._v("动作说明")]),s._v("：")]),s._v(" "),t("ul",[t("li",[s._v("a ：新增， a 的后面可以接字串，而这些字串会在新的一行出现(目前的下一行)～")]),s._v(" "),t("li",[s._v("c ：取代， c 的后面可以接字串，这些字串可以取代 n1,n2 之间的行！")]),s._v(" "),t("li",[s._v("d ：删除，因为是删除啊，所以 d 后面通常不接任何咚咚；")]),s._v(" "),t("li",[s._v("i ：插入， i 的后面可以接字串，而这些字串会在新的一行出现(目前的上一行)；")]),s._v(" "),t("li",[s._v("p ：打印，亦即将某个选择的数据印出。通常 p 会与参数 sed -n 一起运行～")]),s._v(" "),t("li",[s._v("s ：取代，可以直接进行取代的工作哩！通常这个 s 的动作可以搭配正规表示法！例如 1,20s/old/new/g 就是啦！")])]),s._v(" "),t("h2",{attrs:{id:"说明"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#说明"}},[s._v("#")]),s._v(" 说明")]),s._v(" "),t("blockquote",[t("h4",{attrs:{id:"将test-txt文件内的以1开头的行-替换为-aa-bb"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#将test-txt文件内的以1开头的行-替换为-aa-bb"}},[s._v("#")]),s._v(" 将"),t("code",[s._v("test.txt")]),s._v("文件内的以"),t("code",[s._v("1")]),s._v('开头的行，替换为"aa/bb"')])]),s._v(" "),t("p",[t("code",[s._v('sed -i ".bak" "s/1.*/aa\\/bb/" test.txt')])]),s._v(" "),t("ul",[t("li",[t("p",[t("code",[s._v('-i ".bak"')]),s._v('是直接操作文件并添加.bak作为备份文件名称，如果不需要备份文件，则使用-i "";')])]),s._v(" "),t("li",[t("p",[t("code",[s._v("/s")]),s._v("代表’“substitue”,即替换;")])]),s._v(" "),t("li",[t("p",[t("code",[s._v("1.*")]),s._v(" 代表以1开头的所有字符串，."),t("em",[s._v("在正则表达式中表示所有字符;")])])]),s._v(" "),t("li",[t("p",[t("code",[s._v("aa\\/bb")]),s._v("使用了转义字符表示aa/bb;")])]),s._v(" "),t("li",[t("p",[s._v("注意最后还需要一个分界符/，否则会提示unterminated substitute in regular expression;")])]),s._v(" "),t("li",[t("p",[s._v("分界符/也可使用|，那么特殊符号就不需要转义字符了，命令就变成：\n"),t("code",[s._v('sed -i ".bak" "s|1.*|aa/bb|" test.txt')])])]),s._v(" "),t("li",[t("p",[s._v("如果需要在文件中替换多个相同的字符串，需要添加global参数g，即:")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sed")]),s._v(" -i "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('".bak"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"s/1.*/aa\\/bb/g"')]),s._v(" test.txt\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#或者")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sed")]),s._v(" -i "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('".bak"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"s|1.*|aa/bb|g"')]),s._v(" test.txt\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br")])])])]),s._v(" "),t("blockquote",[t("h4",{attrs:{id:"以hello字符串为主-包含大写类型-一行多个hello等情况"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#以hello字符串为主-包含大写类型-一行多个hello等情况"}},[s._v("#")]),s._v(" 以hello字符串为主，包含大写类型，一行多个hello等情况")])]),s._v(" "),t("ul",[t("li",[t("p",[t("code",[s._v("sed (-l) 's/old_text/new_text/(g)' [file]")]),s._v(": 输出文件[file]中每行第1个old_text替换成new_text的结果，最后加g表示替换所有匹配；")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("➜  "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sed")]),s._v(" -l "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'s/hello/hi/'")]),s._v(" hello.txt\nhi world\nhi boys\nshe is saying hi\nhi hello\nHELLO everyone\n➜  "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sed")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'s/hello/hi/'")]),s._v(" hello.txt\nhi world\nhi boys\nshe is saying hi\nhi hello\nHELLO everyone\n➜  "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sed")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'s/hello/hi/g'")]),s._v(" hello.txt\nhi world\nhi boys\nshe is saying hi\nhi hi\nHELLO everyone\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br"),t("span",{staticClass:"line-number"},[s._v("18")]),t("br")])])]),s._v(" "),t("li",[t("p",[t("code",[s._v("sed -i \"\" 's/old_text/new_text/' [file]")]),s._v("： 替换字符串并写入文件；")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("➜  "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sed")]),s._v(" -i "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('""')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'s/hello/hi/'")]),s._v(" hello.txt\n➜  "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("cat")]),s._v(" hello.txt\nhi world\nhi boys\nshe is saying hi\nhi hello    --"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("由于未加g参数，所以第二个hello未替换\nHELLO everyone\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br")])])]),s._v(" "),t("li",[t("p",[t("code",[s._v("sed -e 's/old_text1/new_text1/' -e 's/old_text2/new_text2/' [file]")]),s._v(": 对文件[file]内容将old_text1替换成new_text1或将old_text2替换成new_text2；")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("➜  "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sed")]),s._v(" -e "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'s/boys/men/'")]),s._v(" -e "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'s/she/he/'")]),s._v(" hello.txt\nhi world\nhi men\nhe is saying hi\nhi hello\nHELLO everyone\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br")])])]),s._v(" "),t("li",[t("p",[t("code",[s._v("sed -n 'line_num,/^$/p' [file]")]),s._v(": 打印从行号line_num到下一个空行之间的内容，/p表示打印；")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("➜  "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sed")]),s._v(" -n "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'1,/^$/p'")]),s._v(" hello.txt\nhi world\nhi boys\n \n➜  "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("head")]),s._v(" -4 hello.txt\nhi world\nhi boys\n \nshe is saying hi\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br")])])]),s._v(" "),t("li",[t("p",[t("code",[s._v("sed -i \"\" '1,100d' 404.log")]),s._v("：删除文件的前100行，注意mac上要加个空字符串")])]),s._v(" "),t("li",[t("p",[t("code",[s._v("sed -n '5,8p' 1156_success.txt")]),s._v("：查看文件若干行；输出文件的5-8行")])]),s._v(" "),t("li",[t("p",[t("code",[s._v("sed -n '5,8p' 1156_success.txt >11.txt")]),s._v("：输出文件的5-8行至11.txt")])]),s._v(" "),t("li",[t("p",[t("code",[s._v("cat 503.log |grep NewHomeActivity >503Home.log")]),s._v("：从一个文件过滤出包含字符串的行到另一个文件")])]),s._v(" "),t("li",[t("p",[t("code",[s._v('find "$tmp" -type f -exec sed -i "s/${targetsubstring}/${newsubstring}/g" {} \\;')])])]),s._v(" "),t("li",[t("p",[s._v("For support on both OSX and Linux, I use a simple if check to see if the bash script is running on OSX or Linux, and adjust the command's "),t("code",[s._v("-i")]),s._v(" argument based on that.")]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"'),t("span",{pre:!0,attrs:{class:"token environment constant"}},[s._v("$OSTYPE")]),s._v('"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"darwin"')]),s._v("* "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("then")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sed")]),s._v(" -i "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("''")]),s._v(" -e "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'s|"),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$iconPath")]),s._v("|images-theme-dark/"),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$iconfile")]),s._v("|g'")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"{}"')]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("else")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sed")]),s._v(" -i -e "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'s|"),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$iconPath")]),s._v("|images-theme-dark/"),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$iconfile")]),s._v("|g'")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"{}"')]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("fi")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br")])])])]),s._v(" "),t("h2",{attrs:{id:"案例"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#案例"}},[s._v("#")]),s._v(" 案例")]),s._v(" "),t("blockquote",[t("p",[s._v("替换配置文件中baseApi地址：")])]),s._v(" "),t("p",[s._v("获取当前脚本的路径："),t("code",[s._v('curDir=$(cd "$(dirname "$0")"; pwd)')])]),s._v(" "),t("p",[s._v("以上面获取的路径，做绝对路径操作处理；")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token shebang important"}},[s._v("#!/bin/bash")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("###")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# @Author: samy")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# @email: yessz#foxmail.com")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# @time: 2021-03-11 15:59:05")]),s._v("\n "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# @modAuthor: samy")]),s._v("\n "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# @modTime: 2021-03-12 16:18:04")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# @desc: 构建部署脚本")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Copyright © 2015~2021 BDP FE")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("###")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("curDir")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token variable"}},[t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$(")]),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"'),t("span",{pre:!0,attrs:{class:"token variable"}},[t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$(")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("dirname")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"'),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$0")]),s._v('"')]),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v(")")])]),s._v('"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("pwd")]),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v(")")])]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("distWebDir")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("dist/web\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("distAdmDir")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("dist/admin\n\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"====wdp-web项目===环境依赖==node版本====="')]),s._v("\nnode -v\n\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"====wdp-web项目===环境依赖===="')]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" i -g bower --registry"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("https://registry.npm.taobao.org\n\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("rm")]),s._v(" -rf "),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${curDir}")]),s._v("/dist\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("mkdir")]),s._v(" -p "),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${curDir}")]),s._v("/"),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${distWebDir}")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${curDir}")]),s._v("/"),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${distAdmDir}")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${curDir}")]),s._v("/ambari-web\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"'),t("span",{pre:!0,attrs:{class:"token environment constant"}},[s._v("$OSTYPE")]),s._v('"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"darwin"')]),s._v("* "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("then")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sed")]),s._v(" -i "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('""')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("\"s#^App.apiPrefix.*#App.apiPrefix = '/api/v1'; #g\"")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${curDir}")]),s._v("/ambari-web/app/config.js\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("else")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sed")]),s._v(" -i "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("\"s#^App.apiPrefix.*#App.apiPrefix = '/api/v1'; #g\"")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${curDir}")]),s._v("/ambari-web/app/config.js\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("fi")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"==wdp-web==web项目==config中的apiPrefix===替换成功===="')]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" i --registry"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("https://registry.npm.taobao.org\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" run build\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"==wdp-web==web项目===构建成功===="')]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("cp")]),s._v(" -R public/* "),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${curDir}")]),s._v("/"),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${distWebDir}")]),s._v("/\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"==wdp-web==web项目===拷贝成功===="')]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${curDir}")]),s._v("/ambari-admin/main/resources/ui/admin-web/\nbower "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 这一步下载估计会很慢")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" i --registry"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("https://registry.npm.taobao.org\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" run build\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"==wdp-web==admin项目===构建成功===="')]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("cp")]),s._v(" -R dist/* "),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${curDir}")]),s._v("/"),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${distAdmDir}")]),s._v("/\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"==wdp-web==admin项目===拷贝成功===="')]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br"),t("span",{staticClass:"line-number"},[s._v("18")]),t("br"),t("span",{staticClass:"line-number"},[s._v("19")]),t("br"),t("span",{staticClass:"line-number"},[s._v("20")]),t("br"),t("span",{staticClass:"line-number"},[s._v("21")]),t("br"),t("span",{staticClass:"line-number"},[s._v("22")]),t("br"),t("span",{staticClass:"line-number"},[s._v("23")]),t("br"),t("span",{staticClass:"line-number"},[s._v("24")]),t("br"),t("span",{staticClass:"line-number"},[s._v("25")]),t("br"),t("span",{staticClass:"line-number"},[s._v("26")]),t("br"),t("span",{staticClass:"line-number"},[s._v("27")]),t("br"),t("span",{staticClass:"line-number"},[s._v("28")]),t("br"),t("span",{staticClass:"line-number"},[s._v("29")]),t("br"),t("span",{staticClass:"line-number"},[s._v("30")]),t("br"),t("span",{staticClass:"line-number"},[s._v("31")]),t("br"),t("span",{staticClass:"line-number"},[s._v("32")]),t("br"),t("span",{staticClass:"line-number"},[s._v("33")]),t("br"),t("span",{staticClass:"line-number"},[s._v("34")]),t("br"),t("span",{staticClass:"line-number"},[s._v("35")]),t("br"),t("span",{staticClass:"line-number"},[s._v("36")]),t("br"),t("span",{staticClass:"line-number"},[s._v("37")]),t("br"),t("span",{staticClass:"line-number"},[s._v("38")]),t("br"),t("span",{staticClass:"line-number"},[s._v("39")]),t("br"),t("span",{staticClass:"line-number"},[s._v("40")]),t("br"),t("span",{staticClass:"line-number"},[s._v("41")]),t("br"),t("span",{staticClass:"line-number"},[s._v("42")]),t("br"),t("span",{staticClass:"line-number"},[s._v("43")]),t("br")])]),t("h2",{attrs:{id:"相关链接"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#相关链接"}},[s._v("#")]),s._v(" 相关链接")]),s._v(" "),t("p",[s._v("https://www.runoob.com/linux/linux-comm-sed.html")])])}),[],!1,null,null,null);a.default=e.exports}}]);