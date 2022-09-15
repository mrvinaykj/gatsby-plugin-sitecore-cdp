import React from "react"
const { onRenderBody } = require(`../gatsby-ssr`)

it(`does not crash when no devOptions is provided`, () => {
  const mocks = {
    setHeadComponents: () => null,
    setPostBodyComponents: () => null,
  }

  const options = {
    clientKey: "abcd",
    cookieDomain: "localhost",
    apiEndpoint: "https://api.boxever.com/v1.2",
    pointOfSale: "cdp-test",
  }
  onRenderBody(mocks, options)
})

it(`adds a preconnect link for Sitecore CDP Webflow target`, () => {
  const mocks = {
    setHeadComponents: jest.fn(),
    setPostBodyComponents: jest.fn(),
  }
  const options = {
    clientKey: "abcd",
    cookieDomain: "localhost",
    apiEndpoint: "https://api.boxever.com/v1.2",
    pointOfSale: "cdp-test",
  }

  onRenderBody(mocks, options)
  const [link] = mocks.setHeadComponents.mock.calls[0][0]

  expect(link).toEqual(
    <link
      rel="preconnect"
      key="preconnect-boxever-cdp"
      href="https://d1mj578wat5n4o.cloudfront.net"
    />,
    <link
      rel="dns-prefetch"
      key="dns-prefetch-boxever"
      href="https://d1mj578wat5n4o.cloudfront.net"
    />
  )
})
