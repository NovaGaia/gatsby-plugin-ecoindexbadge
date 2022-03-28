/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-browser/
 */
import React from 'react'

exports.onRouteUpdate = pluginOptions => {
  let modeOfUse = pluginOptions.mode || 'external'
  if (modeOfUse === 'external') {
    function load_js() {
      const head = document.getElementsByTagName('head')[0]
      const script = document.createElement('script')
      script.key = 'ecoindex'
      script.src =
        'https://cdn.jsdelivr.net/gh/simonvdfr/ecoindex-light-js@main/ecoindex.min.js'
      head.appendChild(script)
    }
    load_js()
    function calculateECOIndex() {
      setTimeout(function () {
        try {
          const e = document.getElementsByTagName('*').length,
            n = window.performance.getEntriesByType('resource')
          n.push({
            name: 'Page HTML',
            transferSize:
              window.performance.getEntriesByType('navigation')[0].transferSize,
          }),
            ecoindex(e, n)
        } catch (error) {
          // console.log(error);
        }
      }, 1e3)
    }
    calculateECOIndex()
  }
  return null
}
