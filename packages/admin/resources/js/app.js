import '../css/app.css'

import Alpine from 'alpinejs'
import Chart from 'chart.js/auto'

import Collapse from '@alpinejs/collapse'
import FormsAlpinePlugin from '../../../forms/dist/module.esm'
import Focus from '@alpinejs/focus'
import Persist from '@alpinejs/persist'
import Tooltip from '@ryangjchandler/alpine-tooltip'

Alpine.plugin(Collapse)
Alpine.plugin(FormsAlpinePlugin)
Alpine.plugin(Focus)
Alpine.plugin(Persist)
Alpine.plugin(Tooltip)

Alpine.store('sidebar', {
    isOpen: Alpine.$persist(false).as('isOpen'),

    collapsedGroups: Alpine.$persist([]).as('collapsedGroups'),

    groupIsCollapsed(group) {
        return this.collapsedGroups.includes(group)
    },

    groupIsCollapsedForCollapsibleSidebar(group) {
        return this.collapsedGroups.includes(group) && this.isOpen
    },

    toggleCollapsedGroup(group) {
        this.collapsedGroups = this.collapsedGroups.includes(group) ?
            this.collapsedGroups.filter(g => g !== group) :
            this.collapsedGroups.concat(group)
    },

    close() {
        this.isOpen = false
    },

    open() {
        this.isOpen = true
    },
})

Alpine.store(
    'theme',
    window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light',
)


window.addEventListener('dark-mode-toggled', (event) => {
    Alpine.store('theme', event.detail)
})

window
    .matchMedia('(prefers-color-scheme: dark)')
    .addEventListener('change', (event) => {
        Alpine.store('theme', event.matches ? 'dark' : 'light')
    })

Chart.defaults.font.family = `'DM Sans', sans-serif`
Chart.defaults.color = '#6b7280'

window.Alpine = Alpine
window.Chart = Chart

Alpine.start()
