<template>
  <div class="darkmode-switch">
    <template v-if="darkmodeConfig === 'auto-switch'">
      <div class="item day" :class="{ active: darkmode === 'off' }" @click="setDarkmode('off')">
        <LightIcon />
      </div>
      <div class="item auto" :class="{ active: darkmode === 'auto' }" @click="setDarkmode('auto')">
        <AutoIcon />
      </div>
      <div class="item night" :class="{ active: darkmode === 'on' }" @click="setDarkmode('on')">
        <DarkIcon />
      </div>
    </template>
    <div v-else-if="darkmodeConfig==='switch'" class="switch">
      <input
        id="switch"
        class="switch-input"
        type="checkbox"
        :checked="darkmode !== 'on'"
        @click="setDarkmode(darkmode === 'on'?'off':'on')"
      />
      <label class="label" for="switch">
        <span class="label-content" />
      </label>
    </div>
  </div>
</template>

<script lang='ts'>
import { Component, Prop, Vue } from "vue-property-decorator";
import AutoIcon from "@mr-hope/vuepress-shared-utils/icons/AutoIcon.vue";
import DarkIcon from "@mr-hope/vuepress-shared-utils/icons/DarkIcon.vue";
import LightIcon from "@mr-hope/vuepress-shared-utils/icons/LightIcon.vue";
import { dom } from "@mr-hope/vuepress-shared-utils";

const changeClass = (domClass: DOMTokenList, insert: string[], remove: string[]) => {
  domClass.remove(...remove);
  const oldClasses = Array.from(domClass);
  domClass.value = "";
  domClass.add(...insert, ...oldClasses);
};

@Component({ components: { AutoIcon, DarkIcon, LightIcon } })
export default class DarkmodeSwitch extends Vue {
  private darkmode: "auto" | "on" | "off" = "auto";

  /** darkmode status */
  private get darkmodeConfig() {
    return this.$themeConfig.darkmode || "auto-switch";
  }

  private mounted() {
    /** 获得类列表 */
    const classes = document.body.classList;
    /** 深色模式 */
    this.darkmode =
      (localStorage.getItem("darkmode") as "auto" | "on" | "off" | null) ||
      "auto";

    if (this.darkmodeConfig === "auto-switch")
      if (this.darkmode === "auto") this.setDarkmode("auto");
      else this.setDarkmode(this.darkmode);
    // 自动模式
    else if (this.darkmodeConfig === "auto") this.setDarkmode("auto");
    // 切换模式
    else if (this.darkmodeConfig === "switch") this.setDarkmode(this.darkmode);
    // 被禁用
    else this.setDarkmode("off");
  }

  /** 设置夜间模式 */
  setDarkmode(status: "on" | "off" | "auto") {
    if (status === "on") this.toggleDarkmode(true);
    else if (status === "off") this.toggleDarkmode(false);
    else {
      const isDarkMode = window.matchMedia("(prefers-color-scheme: dark)")
        .matches;
      const isLightMode = window.matchMedia("(prefers-color-scheme: light)")
        .matches;

      window.matchMedia("(prefers-color-scheme: dark)").addListener((event) => {
        if (event.matches) this.toggleDarkmode(true);
      });

      window
        .matchMedia("(prefers-color-scheme: light)")
        .addListener((event) => {
          if (event.matches) this.toggleDarkmode(false);
        });

      if (isDarkMode) this.toggleDarkmode(true);
      else if (isLightMode) this.toggleDarkmode(false);
      else {
        const timeHour = new Date().getHours();

        this.toggleDarkmode(timeHour < 6 || timeHour >= 18);
      }
    }

    this.darkmode = status;
    localStorage.setItem("darkmode", status);
  }

  /** 切换深色模式 */
  private toggleDarkmode(isDarkmode: boolean) {
    const classes = document.body.classList;

    if (isDarkmode) changeClass(classes, ["theme-dark"], ["theme-light"]);
    else changeClass(classes, ["theme-light"], ["theme-dark"]);
  }
}
</script>

<style lang="stylus" scoped>
.darkmode-switch
  display flex
  height 22px

  &:hover
    cursor pointer

  .item
    padding 2px
    border 1px solid $accentColor
    border-left none
    line-height 1

    &:first-child
      border-left 1px solid $accentColor

    &.day
      border-top-left-radius 4px
      border-bottom-left-radius 4px

    &.night
      border-top-right-radius 4px
      border-bottom-right-radius 4px

    .icon
      width 16px
      height 16px
      color $accentColor

    &.active
      background-color $accentColor

      &:hover
        cursor default

      .icon
        color var(--white)

@keyframes starry_star
  50%
    background-color rgba(255, 255, 255, 0.1)
    box-shadow #fff 7.5px -0.75px 0 0, #fff 3px 2.5px 0 -0.25px, rgba(255, 255, 255, 0.1) 9.5px 4.5px 0 0.25px, #fff 8px 8.5px 0 0, rgba(255, 255, 255, 0.1) 5px 6px 0 -0.375px, #fff 1.25px 9.5px 0 0.25px

@keyframes bounceIn
  0%
    opacity 0
    transform scale(0.3)

  50%
    opacity 100
    transform scale(1.1)

  55%
    transform scale(1.1)

  75%
    transform scale(0.9)

  100%
    opacity 100
    transform scale(1)

.switch
  display block
  text-align center
  user-select none

  .label
    display block
    margin 0 auto
    font-size 1.4em
    transition all 350ms ease-in
    position relative
    height 17.5px
    width 31.25px
    border-radius 17.5px
    border 1px solid #1c1c1c
    background-color #3c4145
    transition all 250ms ease-in

    &:hover
      cursor pointer

    &:before
      content ''
      display block
      position absolute
      top 0.5px
      left 1px
      width 14px
      height 14px
      border-radius 50%
      background-color #fff
      border 1.25px solid #e3e3c7
      transition all 250ms ease-in

    &:after
      content ''
      display block
      position absolute
      top 62%
      left 9.75px
      z-index 10
      width 2.8px
      height 2.8px
      opacity 0
      background-color #fff
      border-radius 50%
      box-shadow #fff 0 0, #fff 0.75px 0, #fff 1.5px 0, #fff 2.25px 0, #fff 2.75px 0, #fff 3.5px 0, #fff 4px 0, #fff 5.25px -0.25px 0 0.25px, #fff 4px -1.75px 0 -0.5px, #fff 1.75px -1.75px 0 0.25px, #d3d3d3 0 0 0 1px, #d3d3d3 1.5px 0 0 1px, #d3d3d3 2.75px 0 0 1px, #d3d3d3 4px 0 0 1px, #d3d3d3 5.25px -0.25px 0 1.25px, #d3d3d3 4px -1.75px 0 0.25px, #d3d3d3 1.75px -1.75px 0 1.25px
      transition opacity 100ms ease-in

    .label-content
      display block
      position absolute
      top 2.25px
      left 52.5%
      z-index 20
      width 1px
      height 1px
      border-radius 50%
      background-color #fff
      box-shadow rgba(255, 255, 255, 0.1) 7.5px -0.75px 0 0, rgba(255, 255, 255, 0.1) 3px 2.5px 0 -0.25px, #fff 9.5px 4.5px 0 0.25px, rgba(255, 255, 255, 0.1) 8px 8.5px 0 0, #fff 5px 6px 0 0.375px, rgba(255, 255, 255, 0.1) 1.25px 9.5px 0 0.25px
      animation starry_star 5s ease-in-out infinite
      transition all 250ms ease-in

      &:before
        content ''
        display block
        position absolute
        top -0.5px
        left -6.25px
        width 4.5px
        height 4.5px
        background-color #fff
        border-radius 50%
        border 1.25px solid #e3e3c7
        box-shadow #e3e3c7 -7px 0 0 -0.75px, #e3e3c7 -2px 6px 0 -0.5px
        transform-origin -1.5px 130%
        transition all 250ms ease-in

  .switch-input
    display none
    transition all 250ms ease-in

    &:checked + .label
      background-color #9ee3fb
      border 1px solid #86c3d7

      &:before
        left 13.75px
        background-color #ffdf6d
        border 1.25px solid #e1c348

      &:after
        opacity 100
        animation bounceIn 0.6s ease-in-out 0.1s
        animation-fill-mode backwards

      & > .label-content
        opacity 0
        box-shadow rgba(255, 255, 255, 0.1) 7.5px -0.75px 0 -1px, rgba(255, 255, 255, 0.1) 3px 2.5px 0 -1.25px, #fff 9.5px 4.5px 0 -0.75px, rgba(255, 255, 255, 0.1) 8px 8.5px 0 -1px, #fff 5px 6px 0 -1.375px, rgba(255, 255, 255, 0.1) 1.25px 9.5px 0 -0.75px
        animation none

        &:before
          left 6.25px
          transform rotate(70deg)
</style>