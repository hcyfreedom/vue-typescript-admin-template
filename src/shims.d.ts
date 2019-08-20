// 类型定义文件 以 .d.ts 结尾 用来定义类型信息以及接口规范
// 分布到npm中，配合编辑器，就能够检测到JS库中的静态类型
// 如果没有类型定义文件， 你在编码的过程中，编辑器不会给你方法的提示，你想找API的时候也没有对应的文档。
// declare 创建变量 作用域在最外层
declare module '*.vue' {
  import Vue from 'vue'
  export default Vue
}

declare module 'element-ui/lib/locale/lang/*' {
  export const elementLocale: any
}

declare module '*.gif' {
  export const gif: any
}

// TODO: remove this part after vue-count-to has its typescript file
declare module 'vue-count-to'

// TODO: remove this part after vuedraggable has its typescript file
declare module 'vuedraggable'

// TODO: remove this part after vue2-dropzone has its typescript file
declare module 'vue2-dropzone'

// TODO: remove this part after vue-image-crop-upload has its typescript file
declare module 'vue-image-crop-upload'

// TODO: remove this part after vue-splitpane has its typescript file
declare module 'vue-splitpane'
