// https://redux.js.org/recipes/server-rendering#inject-initial-component-html-and-state

///TODO: link canonical
///TODO: resolver como mostrar o css
export default function renderFullPage(html, metaHeader, styleTags, preloadedState) {
  return `
    <!DOCTYPE html>
    <html ${metaHeader.htmlAttributes.toString()} prefix="og: http://ogp.me/ns#" lang="pt-BR" itemScope itemType="http://schema.org/WebSite">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        
        ${metaHeader.title.toString()}
        ${metaHeader.base.toString()}
        ${metaHeader.meta.toString()}
        ${metaHeader.link.toString()}
        ${metaHeader.script.toString()}
        ${metaHeader.style.toString()}
    
        <!-- fix styled-components white screen -->
        ${styleTags.toString()}
        <link rel="stylesheet" type="text/css" href="/dist/main.style.css" />

        <script async src="https://code.jquery.com/jquery-3.3.1.min.js"></script>
    
        <!-- Google Tag Manager -->
          <script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({"gtm.start":
          new Date().getTime(),event:"gtm.js"});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!="dataLayer"?"&l="+l:"";j.async=true;j.src="https://www.googletagmanager.com/gtm.js?id="+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,"script","dataLayer","GTM-K89BB78");</script>
        <!-- End Google Tag Manager -->
      </head>
    
      <body>
    
        <!-- Google Tag Manager -->
        <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-K89BB78" height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
        <!-- End Google Tag Manager -->
    
        <div id="root">${html}</div>
    
        <script type="text/javascript" charset="utf-8">
          window.__PRELOADED_STATE__ = ${JSON.stringify(preloadedState).replace(/</g, '\\u003c')}
        </script>
    
        <!-- other scripts (bundle, etc) -->
        <script src="/dist/main.bundle.js"></script>
      </body>
    </html>
    `;
}
