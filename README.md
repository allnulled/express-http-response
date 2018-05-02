# express-http-support

![](https://img.shields.io/badge/express--http--support-1.0-green.svg?longCache=true)

![](https://img.shields.io/badge/build-passing-green.svg?longCache=true)

![](https://img.shields.io/badge/coverage-100%25-green.svg?longCache=true)

This is an [Express](https://github.com/expressjs/express) middleware to make the Express response object hold all the (most widely known) [HTTP status codes](https://en.wikipedia.org/wiki/List_of_HTTP_status_codes) and [HTTP headers](https://en.wikipedia.org/wiki/List_of_HTTP_header_fields), as methods.

## 1. Installation

~$ `npm install -s express-http-support`

## 2. Usage

##### 1. Import the module and add the 2 middlewares (for the HTTP status codes and for the headers):

```js
var express = require("express");

// 0) Instantiate an Express application:
var app = express();

// 1) Get the module:
var httpSupport = require("express-http-support");

// 2) Add all the HTTP status codes:
app.use(httpSupport.status.middleware);

// 3) Add all the HTTP headers:
app.use(httpSupport.headers.middleware); 
```

##### 2. Access the HTTP status codes or headers from any middleware or controller directly:

**` Example of HTTP status code modification 1:`**

```js
app.get("/", function(req, res, next) {
  res.statusOK().send("Normal response");
});
```

**` Example of HTTP status code modification 2:`**

```js
app.get("/nocontent", function(req, res, next) {
  res.statusNoContent().send();
});
```

**` Example of HTTP header modification 1:`**

```js
app.get("/referrer", function(req, res, next) {
  res.headerContentType("application/json").send("Content type altered");
});
```

**` Example of HTTP header modification 2:`**

```js
app.get("/nocontent", function(req, res, next) {
  res.statusNoContent().send();
});
```

## 3. API Reference

#### Available HTTP status code methods:

```js
{ExpressResponse}.statusContinue()
```

```js
{ExpressResponse}.statusSwitchingProtocols()
```

```js
{ExpressResponse}.statusProcessing()
```

```js
{ExpressResponse}.statusEarlyHints()
```

```js
{ExpressResponse}.statusUnassigned()
```

```js
{ExpressResponse}.statusOK()
```

```js
{ExpressResponse}.statusCreated()
```

```js
{ExpressResponse}.statusAccepted()
```

```js
{ExpressResponse}.statusNonAuthoritativeInformation()
```

```js
{ExpressResponse}.statusNoContent()
```

```js
{ExpressResponse}.statusResetContent()
```

```js
{ExpressResponse}.statusPartialContent()
```

```js
{ExpressResponse}.statusMultiStatus()
```

```js
{ExpressResponse}.statusAlreadyReported()
```

```js
{ExpressResponse}.statusUnassigned()
```

```js
{ExpressResponse}.statusIMUsed()
```

```js
{ExpressResponse}.statusUnassigned()
```

```js
{ExpressResponse}.statusMultipleChoices()
```

```js
{ExpressResponse}.statusMovedPermanently()
```

```js
{ExpressResponse}.statusFound()
```

```js
{ExpressResponse}.statusSeeOther()
```

```js
{ExpressResponse}.statusNotModified()
```

```js
{ExpressResponse}.statusUseProxy()
```

```js
{ExpressResponse}.statusUnused()
```

```js
{ExpressResponse}.statusTemporaryRedirect()
```

```js
{ExpressResponse}.statusPermanentRedirect()
```

```js
{ExpressResponse}.statusUnassigned()
```

```js
{ExpressResponse}.statusBadRequest()
```

```js
{ExpressResponse}.statusUnauthorized()
```

```js
{ExpressResponse}.statusPaymentRequired()
```

```js
{ExpressResponse}.statusForbidden()
```

```js
{ExpressResponse}.statusNotFound()
```

```js
{ExpressResponse}.statusMethodNotAllowed()
```

```js
{ExpressResponse}.statusNotAcceptable()
```

```js
{ExpressResponse}.statusProxyAuthenticationRequired()
```

```js
{ExpressResponse}.statusRequestTimeout()
```

```js
{ExpressResponse}.statusConflict()
```

```js
{ExpressResponse}.statusGone()
```

```js
{ExpressResponse}.statusLengthRequired()
```

```js
{ExpressResponse}.statusPreconditionFailed()
```

```js
{ExpressResponse}.statusPayloadTooLarge()
```

```js
{ExpressResponse}.statusURITooLong()
```

```js
{ExpressResponse}.statusUnsupportedMediaType()
```

```js
{ExpressResponse}.statusRangeNotSatisfiable()
```

```js
{ExpressResponse}.statusExpectationFailed()
```

```js
{ExpressResponse}.statusUnassigned()
```

```js
{ExpressResponse}.statusMisdirectedRequest()
```

```js
{ExpressResponse}.statusUnprocessableEntity()
```

```js
{ExpressResponse}.statusLocked()
```

```js
{ExpressResponse}.statusFailedDependency()
```

```js
{ExpressResponse}.statusUnassigned()
```

```js
{ExpressResponse}.statusUpgradeRequired()
```

```js
{ExpressResponse}.statusUnassigned()
```

```js
{ExpressResponse}.statusPreconditionRequired()
```

```js
{ExpressResponse}.statusTooManyRequests()
```

```js
{ExpressResponse}.statusUnassigned()
```

```js
{ExpressResponse}.statusRequestHeaderFieldsTooLarge()
```

```js
{ExpressResponse}.statusUnassigned()
```

```js
{ExpressResponse}.statusUnavailableForLegalReasons()
```

```js
{ExpressResponse}.statusUnassigned()
```

```js
{ExpressResponse}.statusInternalServerError()
```

```js
{ExpressResponse}.statusNotImplemented()
```

```js
{ExpressResponse}.statusBadGateway()
```

```js
{ExpressResponse}.statusServiceUnavailable()
```

```js
{ExpressResponse}.statusGatewayTimeout()
```

```js
{ExpressResponse}.statusHTTPVersionNotSupported()
```

```js
{ExpressResponse}.statusVariantAlsoNegotiates()
```

```js
{ExpressResponse}.statusInsufficientStorage()
```

```js
{ExpressResponse}.statusLoopDetected()
```

```js
{ExpressResponse}.statusUnassigned()
```

```js
{ExpressResponse}.statusNotExtended()
```

```js
{ExpressResponse}.statusNetworkAuthenticationRequired()
```

```js
{ExpressResponse}.statusUnassigned()
```

----

#### Available HTTP header methods:

```js
{ExpressResponse}.headerAccept(String:value)
```

```js
{ExpressResponse}.headerAcceptCharset(String:value)
```

```js
{ExpressResponse}.headerAcceptEncoding(String:value)
```

```js
{ExpressResponse}.headerAcceptLanguage(String:value)
```

```js
{ExpressResponse}.headerAcceptDatetime(String:value)
```

```js
{ExpressResponse}.headerAccessControlRequestMethod(String:value)
```

```js
{ExpressResponse}.headerAccessControlRequestHeaders(String:value)
```

```js
{ExpressResponse}.headerAuthorization(String:value)
```

```js
{ExpressResponse}.headerCacheControl(String:value)
```

```js
{ExpressResponse}.headerConnection(String:value)
```

```js
{ExpressResponse}.headerCookie(String:value)
```

```js
{ExpressResponse}.headerContentLength(String:value)
```

```js
{ExpressResponse}.headerContentMD5(String:value)
```

```js
{ExpressResponse}.headerContentType(String:value)
```

```js
{ExpressResponse}.headerDate(String:value)
```

```js
{ExpressResponse}.headerExpect(String:value)
```

```js
{ExpressResponse}.headerForwarded(String:value)
```

```js
{ExpressResponse}.headerFrom(String:value)
```

```js
{ExpressResponse}.headerHost(String:value)
```

```js
{ExpressResponse}.headerIfMatch(String:value)
```

```js
{ExpressResponse}.headerIfModifiedSince(String:value)
```

```js
{ExpressResponse}.headerIfNoneMatch(String:value)
```

```js
{ExpressResponse}.headerIfRange(String:value)
```

```js
{ExpressResponse}.headerIfUnmodifiedSince(String:value)
```

```js
{ExpressResponse}.headerMaxForwards(String:value)
```

```js
{ExpressResponse}.headerOrigin(String:value)
```

```js
{ExpressResponse}.headerPragma(String:value)
```

```js
{ExpressResponse}.headerProxyAuthorization(String:value)
```

```js
{ExpressResponse}.headerRange(String:value)
```

```js
{ExpressResponse}.headerReferer (String:value)
```

```js
{ExpressResponse}.headerTE(String:value)
```

```js
{ExpressResponse}.headerUserAgent(String:value)
```

```js
{ExpressResponse}.headerUpgrade(String:value)
```

```js
{ExpressResponse}.headerVia(String:value)
```

```js
{ExpressResponse}.headerWarning(String:value)
```

```js
{ExpressResponse}.headerUpgradeInsecureRequests(String:value)
```

```js
{ExpressResponse}.headerXRequestedWith(String:value)
```

```js
{ExpressResponse}.headerDNT(String:value)
```

```js
{ExpressResponse}.headerXForwardedFor(String:value)
```

```js
{ExpressResponse}.headerXForwardedHost(String:value)
```

```js
{ExpressResponse}.headerXForwardedProto(String:value)
```

```js
{ExpressResponse}.headerFrontEndHttps(String:value)
```

```js
{ExpressResponse}.headerXHttpMethodOverride(String:value)
```

```js
{ExpressResponse}.headerXATTDeviceId(String:value)
```

```js
{ExpressResponse}.headerXWapProfile(String:value)
```

```js
{ExpressResponse}.headerProxyConnection(String:value)
```

```js
{ExpressResponse}.headerXUIDH(String:value)
```

```js
{ExpressResponse}.headerXCsrfToken(String:value)
```

```js
{ExpressResponse}.headerXRequestID(String:value)
```

```js
{ExpressResponse}.headerXCorrelationID(String:value)
```

```js
{ExpressResponse}.headerAccessControlAllowOrigin(String:value)
```

```js
{ExpressResponse}.headerAccessControlAllowCredentials(String:value)
```

```js
{ExpressResponse}.headerAccessControlExposeHeaders(String:value)
```

```js
{ExpressResponse}.headerAccessControlMaxAge(String:value)
```

```js
{ExpressResponse}.headerAccessControlAllowMethods(String:value)
```

```js
{ExpressResponse}.headerAccessControlAllowHeaders(String:value)
```

```js
{ExpressResponse}.headerAcceptPatch(String:value)
```

```js
{ExpressResponse}.headerAcceptRanges(String:value)
```

```js
{ExpressResponse}.headerAge(String:value)
```

```js
{ExpressResponse}.headerAllow(String:value)
```

```js
{ExpressResponse}.headerAltSvc(String:value)
```

```js
{ExpressResponse}.headerCacheControl(String:value)
```

```js
{ExpressResponse}.headerConnection(String:value)
```

```js
{ExpressResponse}.headerContentDisposition(String:value)
```

```js
{ExpressResponse}.headerContentEncoding(String:value)
```

```js
{ExpressResponse}.headerContentLanguage(String:value)
```

```js
{ExpressResponse}.headerContentLength(String:value)
```

```js
{ExpressResponse}.headerContentLocation(String:value)
```

```js
{ExpressResponse}.headerContentMD5(String:value)
```

```js
{ExpressResponse}.headerContentRange(String:value)
```

```js
{ExpressResponse}.headerContentType(String:value)
```

```js
{ExpressResponse}.headerDate(String:value)
```

```js
{ExpressResponse}.headerETag(String:value)
```

```js
{ExpressResponse}.headerExpires(String:value)
```

```js
{ExpressResponse}.headerLastModified(String:value)
```

```js
{ExpressResponse}.headerLink(String:value)
```

```js
{ExpressResponse}.headerLocation(String:value)
```

```js
{ExpressResponse}.headerP3P(String:value)
```

```js
{ExpressResponse}.headerPragma(String:value)
```

```js
{ExpressResponse}.headerProxyAuthenticate(String:value)
```

```js
{ExpressResponse}.headerPublicKeyPins(String:value)
```

```js
{ExpressResponse}.headerRetryAfter(String:value)
```

```js
{ExpressResponse}.headerServer(String:value)
```

```js
{ExpressResponse}.headerSetCookie(String:value)
```

```js
{ExpressResponse}.headerStrictTransportSecurity(String:value)
```

```js
{ExpressResponse}.headerTrailer(String:value)
```

```js
{ExpressResponse}.headerTransferEncoding(String:value)
```

```js
{ExpressResponse}.headerTk(String:value)
```

```js
{ExpressResponse}.headerUpgrade(String:value)
```

```js
{ExpressResponse}.headerVary(String:value)
```

```js
{ExpressResponse}.headerVia(String:value)
```

```js
{ExpressResponse}.headerWarning(String:value)
```

```js
{ExpressResponse}.headerWWWAuthenticate(String:value)
```

```js
{ExpressResponse}.headerXFrameOptions(String:value)
```

## 4. Conclusion

Following the same programmatic API that express brings by itself, where we can find the **HTTP methods** available as properties of the `{Express Application}` object, I wanted to expand the same idea to the **HTTP status codes** and the **HTTP headers** too, but in this case, in the `{Express Response}` object.# Read this file
