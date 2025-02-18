<template>
  <article :style="style">
    <section class="bio">
      <div>谢某</div>
      <img src="../assets/photo.jpg" alt="" width="100" />
      <p>男 | 1997 | 内蒙古巴彦淖尔</p>
      <p>手机：15164826005</p>
      <p>微信：xty1416849251 | 邮箱：1416849251@qq.com</p>
    </section>
    <section class="projects">
      <h3>企业项目</h3>
      <ol>
        <li>
          <header>
            <h4>
              smes机加工综合管理平台
              <p style="font-size: 12px; font-weight: bold; color: #aaa">
                2021-02 ~ 2022-01
              </p>
            </h4>
          </header>
          <p></p>
          <p>
            基于
            <strong
              :style="mainTheme === 'bright' ? 'color:royalblue' : 'color:#f80'"
              >Vue2</strong
            >
            开发的机加工管理平台项目,服务于生产制造行业，包含订单导入、创建、工艺制定、订单排产、监控生产进度、授权服务、数据可视化、消息分发、待办推送等
          </p>
          <p>
            同时基于
            <strong
              :style="mainTheme === 'bright' ? 'color:royalblue' : 'color:#f80'"
            >
              Vue2
            </strong>
            /
            <strong
              :style="mainTheme === 'bright' ? 'color:royalblue' : 'color:#f80'"
            >
              Uniapp
            </strong>
            开发了<strong
              :style="mainTheme === 'bright' ? 'color:royalblue' : 'color:#f80'"
            >
              移动端
            </strong>
            ， 支持PC端大多数功能以及基于
            <strong
              :style="mainTheme === 'bright' ? 'color:royalblue' : 'color:#f80'"
            >
              ECharts
            </strong>
            的数据看板
          </p>
        </li>

        <li>
          <header>
            <h4>
              才匠云平台
              <p style="font-size: 12px; font-weight: bold; color: #aaa">
                2022-04 至今
              </p>
            </h4>
          </header>
          <p>
            基于
            <strong
              :style="mainTheme === 'bright' ? 'color:royalblue' : 'color:#f80'"
              >Vue3</strong
            >
            /
            <strong
              :style="mainTheme === 'bright' ? 'color:royalblue' : 'color:#f80'"
              >TypeScript</strong
            >
            开发的PaaS产品。含质量管理、设备管理、生产制造、智能仓储等功能模块，集成低代码开发平台及开放接口平台等，支持用户自定义功能
          </p>
        </li>
      </ol>
    </section>

    <section class="skills">
      <h3>主要技能</h3>
      <div class="wrapper">
        <ul>
          <li>
            * 能将UI设计稿<strong
              :style="mainTheme === 'bright' ? 'color:royalblue' : 'color:#f80'"
              >完美还原</strong
            >
          </li>
          <li>
            * 三大件<strong
              :style="mainTheme === 'bright' ? 'color:royalblue' : 'color:#f80'"
              >HTML \ CSS \ JavaScript</strong
            >，以及<strong
              :style="mainTheme === 'bright' ? 'color:royalblue' : 'color:#f80'"
              >ES6</strong
            >、<strong
              :style="mainTheme === 'bright' ? 'color:royalblue' : 'color:#f80'"
              >TypeScript</strong
            >
            的了解和应用
          </li>
          <li>
            *
            <strong
              :style="mainTheme === 'bright' ? 'color:royalblue' : 'color:#f80'"
              >Vue全家桶</strong
            >的应用
          </li>

          <li>
            *
            <strong
              :style="mainTheme === 'bright' ? 'color:royalblue' : 'color:#f80'"
              >Uniapp</strong
            >
            、<strong
              :style="mainTheme === 'bright' ? 'color:royalblue' : 'color:#f80'"
              >Nightly</strong
            >，有移动端和微信小程序开发经验
          </li>
          <li>
            *
            <strong
              :style="mainTheme === 'bright' ? 'color:royalblue' : 'color:#f80'"
              >echarts</strong
            >、<strong
              :style="mainTheme === 'bright' ? 'color:royalblue' : 'color:#f80'"
              >antd S2</strong
            >、<strong
              :style="mainTheme === 'bright' ? 'color:royalblue' : 'color:#f80'"
              >antd X6</strong
            >
            等数据展示工具库
          </li>
          <li>
            * 简单使用过<strong
              :style="mainTheme === 'bright' ? 'color:royalblue' : 'color:#f80'"
              >Three.js</strong
            >， 对工具库使用和基础三维建模的知识具有一定了解
          </li>
          <li>
            * 对基于 bpmn 协议的流程图工具有一定了解，如
            <strong
              :style="mainTheme === 'bright' ? 'color:royalblue' : 'color:#f80'"
              >bpmn.js</strong
            >/<strong
              :style="mainTheme === 'bright' ? 'color:royalblue' : 'color:#f80'"
              >logicFlow</strong
            >
          </li>
        </ul>
      </div>
    </section>
    <section class="openSource">
      <h3>个人项目</h3>
      <ul>
        <li>
          <header>
            <h4>摸UI</h4>
            <span>
              <a
                :style="
                  mainTheme === 'bright' ? 'color:royalblue' : 'color:#f80'
                "
                href="https://github.com/XXXXXie1997/Mo-UI-Demo1"
                target="_blank"
                >源码链接</a
              >
            </span>
          </header>
          <p>
            基于
            <strong
              :style="mainTheme === 'bright' ? 'color:royalblue' : 'color:#f80'"
              >Vue2</strong
            >
            制作的的 UI
            库，包含常用组件button、collapse、popover、toast等，使用该库结合vuePress开发在线文档。
          </p>
        </li>
        <li>
          <header>
            <h4>画板一张</h4>
            <span>
              <a
                :style="
                  mainTheme === 'bright' ? 'color:royalblue' : 'color:#f80'
                "
                href="https://github.com/XXXXXie1997/canvasDrawingBoard-vite"
                target="_blank"
                >源码链接</a
              >
            </span>
          </header>
          <p>
            基于
            <strong
              :style="mainTheme === 'bright' ? 'color:royalblue' : 'color:#f80'"
              >Vue3</strong
            >
            /
            <strong
              :style="mainTheme === 'bright' ? 'color:royalblue' : 'color:#f80'"
              >TypeScript</strong
            >
            开发的canvas画板，支持绘制擦除、撤销前进等基础功能、支持画布导出。
          </p>
        </li>
        <li>
          <header>
            <h4>咸鱼记账</h4>
            <span>
              <a
                :style="
                  mainTheme === 'bright' ? 'color:royalblue' : 'color:#f80'
                "
                href="https://github.com/XXXXXie1997/XianYu-1"
                target="_blank"
              >
                源码链接
              </a>
            </span>
          </header>
          <p>
            一个基于
            <strong
              :style="mainTheme === 'bright' ? 'color:royalblue' : 'color:#f80'"
              >Vue2</strong
            >
            /
            <strong
              :style="mainTheme === 'bright' ? 'color:royalblue' : 'color:#f80'"
              >TypeScript</strong
            >
            的移动端单页面记账应用，因为没有服务器，只能将记录保存至本地。
          </p>
        </li>

        <li>
          <header>
            <h4>咸鱼任意门</h4>
            <span>
              <a
                :style="
                  mainTheme === 'bright' ? 'color:royalblue' : 'color:#f80'
                "
                href="https://github.com/XXXXXie1997/guide-demo"
                target="_blank"
                >源码链接</a
              >
            </span>
          </header>
          <p>早期学习过程中制作的一个简单的导航页面，支持增删快捷链接。</p>
        </li>
      </ul>
    </section>
  </article>
</template>
<script lang="ts" setup>
import { style, mainTheme } from "../hooks/useTheme";
</script>
<style scoped>
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  font-size: 14px;
}
h1,
h2,
h3,
h4,
h5 {
  padding: 4px 0;
}

h1,
h2,
h3 {
  font-size: 18px;
  padding: 4px 0;
}

h4,
h5 {
  font-size: 16px;
  padding: 4px 0;
}

article {
  width: 900px;
  margin: 0 auto;
  overflow: auto;
  padding: 40px;
}

p {
  margin: 4px 0;
  font-size: 14px;
}

h2 {
  font-size: 25px;
  margin-top: 0;
}

ol,
ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

strong {
  font-weight: normal;
}

h4 {
  margin: 0;
}

.bio {
  position: relative;
}

.bio img {
  position: absolute;
  top: 0;
  right: 0;
}

.projects > ol {
  margin-top: 0;
  list-style-position: inside;
  padding: 0;
}

.projects > ol > li > header {
  display: flex;
  justify-content: space-between;
}

.projects > ol > li h4 {
  display: inline-block;
}

.openSource header img {
  position: absolute;
  top: 0;
  right: 0;
}

.openSource header {
  position: relative;
  display: flex;
  justify-content: space-between;
}

@media (max-width: 500px) {
  body {
    margin: 0;
  }

  article {
    width: auto;
    height: auto;
  }

  .bio img {
    display: none;
  }

  .skills .wrapper {
    flex-direction: column;
  }

  #skills {
    width: auto;
  }
  .jobs header {
    flex-direction: column;
  }
  .jobs header > h4,
  .jobs header > span {
    margin: 0;
  }
}
</style>
