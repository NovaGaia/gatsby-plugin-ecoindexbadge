/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/ssr-apis/
 */
import React from 'react'

function buildScriptLoader(pluginOptions) {
  let modeOfUse = pluginOptions.mode || 'external'
  if (modeOfUse === 'external') {
    return (
      <script
        key="ecoindex"
        src="https://cdn.jsdelivr.net/gh/simonvdfr/ecoindex-light-js@main/ecoindex.min.js"
      ></script>
    )
  }
  return null
}

function buildInformationMessage() {
  return (
    <script
      key="ecoindex_message"
      dangerouslySetInnerHTML={{
        __html: `
        console.log("l'Écoindex, c'est quoi ? http://www.ecoindex.fr/quest-ce-que-ecoindex/")
      `,
      }}
    />
  )
}
export const onRenderBody = ({
  setBodyAttributes,
  setPostBodyComponents,
  setHeadComponents,
}) => {
  const preconnectEcoIndex =
    ((
      <link
        rel="preconnect"
        key="preconnect-ecoindex"
        href="https://cdn.jsdelivr.net/gh/simonvdfr/ecoindex-light-js@main/ecoindex.min.js"
      />
    ),
    (
      <link
        rel="dns-prefetch"
        key="dns-prefetch-ecoindex"
        href="https://cdn.jsdelivr.net/gh/simonvdfr/ecoindex-light-js@main/ecoindex.min.js"
      />
    ))
  setHeadComponents([preconnectEcoIndex])
  setBodyAttributes({ style: { position: 'relative' } })
  setPostBodyComponents([buildInformationMessage()])
}
