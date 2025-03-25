<template>
  <article class="container">
    <section class="bio">
      <div class="left">
        <div>谢某</div>
        <p>男 | 1997 | 内蒙古巴彦淖尔</p>
        <p>天津农学院（2015-2019） 动物科学与动物医学</p>
        <p>QQ：1416849251 | WeChat：xty1416849251</p>
      </div>
      <div class="right">
        <img src="./images/photo.jpg" alt="" width="100" />
      </div>
    </section>
    <section class="skills">
      <h3>个人简介</h3>
      <div class="wrapper">
        <p>
          我是一名从业4年的前端开发。擅长使用vue3+ts+less进行开发，精于flex，能将设计稿完美还原。
        </p>
        <p>
          从不重复自己。因自己封装过组件库和参与公司低代码平台的建设的原因，更擅长将重复逻辑抽出和封装。
        </p>
        <p>
          乐于并主动帮助同事解决问题，归功于此，比起开发能力，debug能力更加突出。
        </p>
      </div>
    </section>
    <section class="skills">
      <h3>主要技能</h3>
      <div class="wrapper">
        <ul>
          <li>
            1.
            <strong
              :style="mainTheme === 'bright' ? 'color:royalblue' : 'color:#f80'"
              >HTML \ CSS \ JavaScript</strong
            >，以及<strong
              :style="mainTheme === 'bright' ? 'color:royalblue' : 'color:#f80'"
              >ES6</strong
            >、<strong
              :style="mainTheme === 'bright' ? 'color:royalblue' : 'color:#f80'"
              >TypeScript</strong
            >
            的了解和应用。
          </li>
          <li>
            2.
            <strong
              :style="mainTheme === 'bright' ? 'color:royalblue' : 'color:#f80'"
              >Vue全家桶</strong
            >的应用以及组件化开发思路。善于封装组件。
          </li>

          <li>
            3. 有
            <strong
              :style="mainTheme === 'bright' ? 'color:royalblue' : 'color:#f80'"
              >Uniapp</strong
            >
            开发经验，参与过完整的移动端APP开发、发布流程。
          </li>

          <li>
            4. 有
            <strong
              :style="mainTheme === 'bright' ? 'color:royalblue' : 'color:#f80'"
              >Nightly</strong
            >
            开发经验，参与过完整的微信小程序开发、发布流程。
          </li>

          <li>
            5. 熟悉
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
            等用于数据分析和数据展示的工具库，有大屏数据可视化开发经验。以及封装各类图表组件。
          </li>
          <li>
            6. 使用过
            <strong
              :style="mainTheme === 'bright' ? 'color:royalblue' : 'color:#f80'"
              >Three.js</strong
            >
            ， 对工具库使用和基础三维建模的知识具有一定了解。
          </li>
          <li>
            7. 对
            <strong
              :style="mainTheme === 'bright' ? 'color:royalblue' : 'color:#f80'"
              >bpmn.js</strong
            >/<strong
              :style="mainTheme === 'bright' ? 'color:royalblue' : 'color:#f80'"
              >logicFlow</strong
            >等基于 bpmn 协议的流程图工具有使用和实践经验。
          </li>
          <li>
            8. 对<strong
              :style="mainTheme === 'bright' ? 'color:royalblue' : 'color:#f80'"
            >
              AI </strong
            >在项目中的应用有一定实践经验，开发过智能图表并集成到公司项目。
          </li>
        </ul>
      </div>
    </section>
    <section class="projects">
      <h3>企业项目</h3>
      <ol>
        <li>
          <header>
            <h4>
              smes机加工综合管理平台
              <span style="font-size: 12px; font-weight: bold; color: #aaa">
                (2021-02 至 2022-01)
              </span>
            </h4>
          </header>
          <p></p>
          <p>
            基于
            <strong
              :style="mainTheme === 'bright' ? 'color:royalblue' : 'color:#f80'"
              >Vue2</strong
            >
            开发的机加工管理平台项目，服务于制造企业，同时基于
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
          <p>主要开发功能/项目:</p>
          <ul>
            <li>
              1.
              <strong
                :style="
                  mainTheme === 'bright' ? 'color:royalblue' : 'color:#f80'
                "
                >仪表板</strong
              >：使用Echarts开发的首页看板，用于展示单据数量，工序进度等。早期使用轮询更新数据，后更新为通过websocket实时更新。
            </li>

            <li>
              2.
              <strong
                :style="
                  mainTheme === 'bright' ? 'color:royalblue' : 'color:#f80'
                "
                >工艺路线全流程</strong
              >：使用canvas创建画布，绘制完整工艺流程图并提供一些交互和动效，参与了流程展示和交互效果的设计和开发。
            </li>
            <li>
              3.
              <strong
                :style="
                  mainTheme === 'bright' ? 'color:royalblue' : 'color:#f80'
                "
                >smes移动端</strong
              >：使用uniapp开发移动端APP，参与从立项到发布的全部过程。
            </li>
          </ul>
        </li>

        <li>
          <header>
            <h4>
              才匠云平台
              <span style="font-size: 12px; font-weight: bold; color: #aaa">
                (2022-04 至今)
              </span>
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
            开发，属公司自研PaaS产品。持续研发，至今仍在更新维护。同样服务于制造企业。集成低代码平台和元数据、使客户能够快速构建完整的页面应用和各类看板报表。
          </p>
          <p>
            同时通过接入AI辅助处理、统计数据，能够将用户自然语言问题转换为图表进行展示。为制造企业降本增效。
          </p>

          <p>主要开发功能/项目:</p>
          <ul>
            <li>
              1.
              <strong
                :style="
                  mainTheme === 'bright' ? 'color:royalblue' : 'color:#f80'
                "
                >低代码开发平台</strong
              >：通过拖拽，组件配置，自定义脚本生成页面schema，再通过page和render组件渲染整个页面。参与组件配置渲染方法的讨论和实现，参与大多数组件的封装和后续维护。
            </li>
            <li>
              2.
              <strong
                :style="
                  mainTheme === 'bright' ? 'color:royalblue' : 'color:#f80'
                "
                >CRM小程序</strong
              >：使用Nightly独立开发微信小程序的前端部分。参与从立项、需求方案、开发方案讨论、项目开发到发布的全部流程。
            </li>
            <li>
              3.
              <strong
                :style="
                  mainTheme === 'bright' ? 'color:royalblue' : 'color:#f80'
                "
                >智能图表</strong
              >：使用Dify工作流，借助deepSeek实现将自然语言转换为SQL并自动转换为图表展示的功能，参与方案讨论和前端部分全部内容的开发。
            </li>
            <li>
              4.
              <strong
                :style="
                  mainTheme === 'bright' ? 'color:royalblue' : 'color:#f80'
                "
                >元数据建模</strong
              >：通过对数据库字段进行描述解释并创建实体。支持在低代码平台中通过引入实体快速构建整个页面与增删改查功能。参与早期讨论和部分前端功能实现。
            </li>
          </ul>
        </li>
      </ol>
    </section>

    <section class="openSource">
      <h3>个人项目</h3>
      <ul>
        <li>
          <header>
            <h4>
              Canvas画板
              <span style="font-size: 12px; font-weight: bold; color: #aaa">
                (2023)
              </span>
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
            开发的canvas画板，支持绘制擦除和通过配置区域修改笔刷参数，以及撤销前进等基础功能、支持画布导出
          </p>
        </li>
        <li>
          <header>
            <h4>
              Mo-UI组件库
              <span style="font-size: 12px; font-weight: bold; color: #aaa">
                (2020)
              </span>
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
            组件库，从零实现包含button、collapse、popover、toast等基础前端ui组件。
          </p>
        </li>
        <li>
          <header>
            <h4>
              咸鱼记账
              <span style="font-size: 12px; font-weight: bold; color: #aaa">
                (2020)
              </span>
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
            开发的移动端单页面记账应用，没有后台，账单保存至本地存储。
          </p>
        </li>

        <li>
          <header>
            <h4>
              任意门
              <span style="font-size: 12px; font-weight: bold; color: #aaa">
                (2019)
              </span>
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
          <p>
            早期学习过程中制作的一个简单的导航页面，使用基本的HTML/CSS/JS，支持增删快捷链接，并保存记录至本地存储。
          </p>
        </li>
      </ul>
    </section>
  </article>
</template>
<script lang="ts" setup>
import { mainTheme } from "../hooks/useTheme";
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
  height: 150px;
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
