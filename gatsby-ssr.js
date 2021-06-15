/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/ssr-apis/
 */
import React from 'react'
export const onRenderBody = (
  { setBodyAttributes, setPostBodyComponents },
  pluginOptions
) => {
  let useExternalLibrary = pluginOptions.useExternalLibrary || true
  setBodyAttributes({ style: { position: 'relative' } })
  setPostBodyComponents([
    useExternalLibrary === 'true' && (
      <script
        key="ecoindex"
        src="https://cdn.jsdelivr.net/gh/simonvdfr/ecoindex-light-js@main/ecoindex.min.js"
      ></script>
    ),
    <script
      key="ecoindex_message"
      dangerouslySetInnerHTML={{
        __html: `
        console.log("l'Écoindex, c'est quoi ? http://www.ecoindex.fr/quest-ce-que-ecoindex/")
      `,
      }}
    />,
  ])
}
