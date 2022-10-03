# gatsby-plugin-sitecore-cdp
This plugin is a clone of the **gatsby-plugin-google-gtag** for Sitecore CDP.

The plugin will track all your view events without any need for other configuration.

Refer to the Sitecore CDP Javascript documentation for the details on the configuration: https://doc.sitecore.com/cdp/en/developers/sitecore-customer-data-platform--data-model-2-1/integrating-sitecore-cdp-using-javascript.html

## Install

    npm install gatsby-plugin-sitecore-cdp
## How to use

    // In your gatsby-config.js
    module.exports = {
      plugins: [
        {
          resolve: `gatsby-plugin-sitecore-cdp`,
          options: {
	        clientKey: "<replace-with-your-client-key>",
	        cookieDomain: "<replace-with-your-site-domain>",
	        // Change to the api endpoint for your region
	        apiEndpoint: "https://api.boxever.com/v1.2", 
	        pointOfSale: "<replace-with-your-configured-point-of-sale>",
	        // The below options are optional
	        // The Javascript SDK Client version, defaults to 1.4.8
	        clientVersion: "1.4.8",
	        // The webflow CDN to be used for Sitecore Personalize, the below value will be the default
	        webFlowTarget: "https://d35vb5cccm4xzp.cloudfront.net",
	        // The Boxever Script CDN for the JS file, the below value will be the default
	        boxeverCdnTarget: "https://d1mj578wat5n4o.cloudfront.net",
	        // Set value to false, if you want the script to be in the body tag instead of head
	        head: true,
	        // The async value for the boxever script, false by default
	        async: false,
	        // The defer value for the boxever script, false by default
	        defer: false,
	        // DevOptions will be used for local dev configuration
	        devOptions: {
	        // Use this to log events to the console
	          trackDev: true
	        },
	        // Exclude the paths that you do not want to track
	        exclude: ["/hello-world/"]
	      }
        },
      ],
    }
