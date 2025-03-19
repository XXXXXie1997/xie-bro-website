<template>
  <article class="container">
    <section class="bio">
      <div class="left">
        <div>谢某</div>
        <p>男 | 1997 | 内蒙古巴彦淖尔</p>
        <p>QQ：1416849251 | 邮箱：1416849251@qq.com</p>
        <p>微信：xty1416849251</p>
      </div>
      <div class="right">
        <img src="../assets/photo.jpg" alt="" width="100" />
      </div>
    </section>
    <section class="skills">
      <h3>主要技能</h3>
      <div class="wrapper">
        <ul>
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
            * 有一定的
            <strong
              :style="mainTheme === 'bright' ? 'color:royalblue' : 'color:#f80'"
              >Uniapp</strong
            >
            、<strong
              :style="mainTheme === 'bright' ? 'color:royalblue' : 'color:#f80'"
              >Nightly</strong
            >等开发工具的使用经验，并参与过完整的移动端APP和微信小程序开发流程
          </li>
          <li>
            * 熟悉
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
            等用于数据分析和数据展示的工具库，独立进行如交叉分析表格、ER关系图展示等组件封装
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
            >，独立进行如审批流、业务流的流程设计画板的前端部分
          </li>
          <li>
            * 对AI工作流有一定的了解（如
            <strong
              :style="mainTheme === 'bright' ? 'color:royalblue' : 'color:#f80'"
              >Dify</strong
            >），对AI在项目中的应用有一些经验
          </li>
        </ul>
      </div>
    </section>
    <section class="projects">
      <h2>项目经历</h2>
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
            开发的机加工管理平台项目，服务于制造企业，具体内容不便多说
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
            ， 同时提供多种基于
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
                2022-04 至 2025-03
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
            开发，属公司自研PaaS产品。服务于制造企业，具体内容不便多说
          </p>
          <p>涉及AI应用，低代码开发平台，移动端，小程序等多个部分</p>
        </li>
      </ol>
    </section>

    <section class="openSource">
      <h3>个人项目</h3>
      <ul>
        <li>
          <header>
            <h4>
              画板一张
              <p style="font-size: 12px; font-weight: bold; color: #aaa">
                2023
              </p>
            </h4>
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
            开发的canvas画板，支持绘制擦除、撤销前进等基础功能、支持画布导出
          </p>
        </li>
        <li>
          <header>
            <h4>
              摸UI
              <p style="font-size: 12px; font-weight: bold; color: #aaa">
                2020
              </p>
            </h4>
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
            开发的 UI
            组件库，包含常用组件button、collapse、popover、toast等，使用该库结合vuePress开发在线文档
          </p>
        </li>
        <li>
          <header>
            <h4>
              咸鱼记账
              <p style="font-size: 12px; font-weight: bold; color: #aaa">
                2020
              </p>
            </h4>
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
            开发的移动端单页面记账应用，不过因为没有服务器，只能将记录保存至本地
          </p>
        </li>

        <li>
          <header>
            <h4>
              咸鱼任意门
              <p style="font-size: 12px; font-weight: bold; color: #aaa">
                2019
              </p>
            </h4>
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
          <p>早期学习过程中制作的一个简单的导航页面，支持增删快捷链接</p>
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
  line-height: 1.5em;
}
.container {
  width: 100%;
  max-width: 960px;
  position: relative;
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
  padding: 0 40px;
}
section {
  border-bottom: 1px solid #ddd;
  padding-bottom: 8px;
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
ul > li {
  padding: 2px 0;
}

strong {
  padding: 0 2px;
  font-weight: normal;
}

h4 {
  margin: 0;
}

.bio {
  display: flex;
  height: 130px;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #ddd;
}

.bio img {
  top: 0;
  right: 0;
  border-radius: 50%;
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

.openSource {
  margin-bottom: 80px;
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

  .jobs header {
    flex-direction: column;
  }
  .jobs header > h4,
  .jobs header > span {
    margin: 0;
  }
}
</style>
