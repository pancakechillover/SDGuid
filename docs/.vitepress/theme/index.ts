import DefaultTheme from 'vitepress/theme'
import { h } from 'vue'
import './style.css'

export default {
  extends: DefaultTheme,
  Layout() {
    return h(DefaultTheme.Layout, null, {
      'doc-after': () => h('footer', { class: 'custom-doc-footer-container' }, [
        h('div', { class: 'custom-doc-footer-inner' }, [
          h('span', null, "Scholar's Dungeon："),
          h('a', {
            href: 'https://scholars-dungeon.karakan.top/',
            target: '_blank',
            rel: 'noopener noreferrer'
          }, 'https://scholars-dungeon.karakan.top/')
        ])
      ])
    })
  }
}
