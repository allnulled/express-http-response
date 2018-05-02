# express-http-support

![](https://img.shields.io/badge/express--http--support-1.0-green.svg?longCache=true) ![](https://img.shields.io/badge/build-passing-green.svg?longCache=true) ![](https://img.shields.io/badge/coverage-100%25-green.svg?longCache=true) ![](https://img.shields.io/badge/documented-100%25-green.svg?longCache=true)

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
{ExpressResponse}.statusSwitchingProtocols()
{ExpressResponse}.statusProcessing()
{ExpressResponse}.statusEarlyHints()
{ExpressResponse}.statusUnassigned()
{ExpressResponse}.statusOK()
{ExpressResponse}.statusCreated()
{ExpressResponse}.statusAccepted()
{ExpressResponse}.statusNonAuthoritativeInformation()
{ExpressResponse}.statusNoContent()
{ExpressResponse}.statusResetContent()
{ExpressResponse}.statusPartialContent()
{ExpressResponse}.statusMultiStatus()
{ExpressResponse}.statusAlreadyReported()
{ExpressResponse}.statusUnassigned()
{ExpressResponse}.statusIMUsed()
{ExpressResponse}.statusUnassigned()
{ExpressResponse}.statusMultipleChoices()
{ExpressResponse}.statusMovedPermanently()
{ExpressResponse}.statusFound()
{ExpressResponse}.statusSeeOther()
{ExpressResponse}.statusNotModified()
{ExpressResponse}.statusUseProxy()
{ExpressResponse}.statusUnused()
{ExpressResponse}.statusTemporaryRedirect()
{ExpressResponse}.statusPermanentRedirect()
{ExpressResponse}.statusUnassigned()
{ExpressResponse}.statusBadRequest()
{ExpressResponse}.statusUnauthorized()
{ExpressResponse}.statusPaymentRequired()
{ExpressResponse}.statusForbidden()
{ExpressResponse}.statusNotFound()
{ExpressResponse}.statusMethodNotAllowed()
{ExpressResponse}.statusNotAcceptable()
{ExpressResponse}.statusProxyAuthenticationRequired()
{ExpressResponse}.statusRequestTimeout()
{ExpressResponse}.statusConflict()
{ExpressResponse}.statusGone()
{ExpressResponse}.statusLengthRequired()
{ExpressResponse}.statusPreconditionFailed()
{ExpressResponse}.statusPayloadTooLarge()
{ExpressResponse}.statusURITooLong()
{ExpressResponse}.statusUnsupportedMediaType()
{ExpressResponse}.statusRangeNotSatisfiable()
{ExpressResponse}.statusExpectationFailed()
{ExpressResponse}.statusUnassigned()
{ExpressResponse}.statusMisdirectedRequest()
{ExpressResponse}.statusUnprocessableEntity()
{ExpressResponse}.statusLocked()
{ExpressResponse}.statusFailedDependency()
{ExpressResponse}.statusUnassigned()
{ExpressResponse}.statusUpgradeRequired()
{ExpressResponse}.statusUnassigned()
{ExpressResponse}.statusPreconditionRequired()
{ExpressResponse}.statusTooManyRequests()
{ExpressResponse}.statusUnassigned()
{ExpressResponse}.statusRequestHeaderFieldsTooLarge()
{ExpressResponse}.statusUnassigned()
{ExpressResponse}.statusUnavailableForLegalReasons()
{ExpressResponse}.statusUnassigned()
{ExpressResponse}.statusInternalServerError()
{ExpressResponse}.statusNotImplemented()
{ExpressResponse}.statusBadGateway()
{ExpressResponse}.statusServiceUnavailable()
{ExpressResponse}.statusGatewayTimeout()
{ExpressResponse}.statusHTTPVersionNotSupported()
{ExpressResponse}.statusVariantAlsoNegotiates()
{ExpressResponse}.statusInsufficientStorage()
{ExpressResponse}.statusLoopDetected()
{ExpressResponse}.statusUnassigned()
{ExpressResponse}.statusNotExtended()
{ExpressResponse}.statusNetworkAuthenticationRequired()
{ExpressResponse}.statusUnassigned()
```

----

#### Available HTTP header methods:

```js
{ExpressResponse}.headerAccept(String:value)
{ExpressResponse}.headerAcceptCharset(String:value)
{ExpressResponse}.headerAcceptEncoding(String:value)
{ExpressResponse}.headerAcceptLanguage(String:value)
{ExpressResponse}.headerAcceptDatetime(String:value)
{ExpressResponse}.headerAccessControlRequestMethod(String:value)
{ExpressResponse}.headerAccessControlRequestHeaders(String:value)
{ExpressResponse}.headerAuthorization(String:value)
{ExpressResponse}.headerCacheControl(String:value)
{ExpressResponse}.headerConnection(String:value)
{ExpressResponse}.headerCookie(String:value)
{ExpressResponse}.headerContentLength(String:value)
{ExpressResponse}.headerContentMD5(String:value)
{ExpressResponse}.headerContentType(String:value)
{ExpressResponse}.headerDate(String:value)
{ExpressResponse}.headerExpect(String:value)
{ExpressResponse}.headerForwarded(String:value)
{ExpressResponse}.headerFrom(String:value)
{ExpressResponse}.headerHost(String:value)
{ExpressResponse}.headerIfMatch(String:value)
{ExpressResponse}.headerIfModifiedSince(String:value)
{ExpressResponse}.headerIfNoneMatch(String:value)
{ExpressResponse}.headerIfRange(String:value)
{ExpressResponse}.headerIfUnmodifiedSince(String:value)
{ExpressResponse}.headerMaxForwards(String:value)
{ExpressResponse}.headerOrigin(String:value)
{ExpressResponse}.headerPragma(String:value)
{ExpressResponse}.headerProxyAuthorization(String:value)
{ExpressResponse}.headerRange(String:value)
{ExpressResponse}.headerReferer (String:value)
{ExpressResponse}.headerTE(String:value)
{ExpressResponse}.headerUserAgent(String:value)
{ExpressResponse}.headerUpgrade(String:value)
{ExpressResponse}.headerVia(String:value)
{ExpressResponse}.headerWarning(String:value)
{ExpressResponse}.headerUpgradeInsecureRequests(String:value)
{ExpressResponse}.headerXRequestedWith(String:value)
{ExpressResponse}.headerDNT(String:value)
{ExpressResponse}.headerXForwardedFor(String:value)
{ExpressResponse}.headerXForwardedHost(String:value)
{ExpressResponse}.headerXForwardedProto(String:value)
{ExpressResponse}.headerFrontEndHttps(String:value)
{ExpressResponse}.headerXHttpMethodOverride(String:value)
{ExpressResponse}.headerXATTDeviceId(String:value)
{ExpressResponse}.headerXWapProfile(String:value)
{ExpressResponse}.headerProxyConnection(String:value)
{ExpressResponse}.headerXUIDH(String:value)
{ExpressResponse}.headerXCsrfToken(String:value)
{ExpressResponse}.headerXRequestID(String:value)
{ExpressResponse}.headerXCorrelationID(String:value)
{ExpressResponse}.headerAccessControlAllowOrigin(String:value)
{ExpressResponse}.headerAccessControlAllowCredentials(String:value)
{ExpressResponse}.headerAccessControlExposeHeaders(String:value)
{ExpressResponse}.headerAccessControlMaxAge(String:value)
{ExpressResponse}.headerAccessControlAllowMethods(String:value)
{ExpressResponse}.headerAccessControlAllowHeaders(String:value)
{ExpressResponse}.headerAcceptPatch(String:value)
{ExpressResponse}.headerAcceptRanges(String:value)
{ExpressResponse}.headerAge(String:value)
{ExpressResponse}.headerAllow(String:value)
{ExpressResponse}.headerAltSvc(String:value)
{ExpressResponse}.headerCacheControl(String:value)
{ExpressResponse}.headerConnection(String:value)
{ExpressResponse}.headerContentDisposition(String:value)
{ExpressResponse}.headerContentEncoding(String:value)
{ExpressResponse}.headerContentLanguage(String:value)
{ExpressResponse}.headerContentLength(String:value)
{ExpressResponse}.headerContentLocation(String:value)
{ExpressResponse}.headerContentMD5(String:value)
{ExpressResponse}.headerContentRange(String:value)
{ExpressResponse}.headerContentType(String:value)
{ExpressResponse}.headerDate(String:value)
{ExpressResponse}.headerETag(String:value)
{ExpressResponse}.headerExpires(String:value)
{ExpressResponse}.headerLastModified(String:value)
{ExpressResponse}.headerLink(String:value)
{ExpressResponse}.headerLocation(String:value)
{ExpressResponse}.headerP3P(String:value)
{ExpressResponse}.headerPragma(String:value)
{ExpressResponse}.headerProxyAuthenticate(String:value)
{ExpressResponse}.headerPublicKeyPins(String:value)
{ExpressResponse}.headerRetryAfter(String:value)
{ExpressResponse}.headerServer(String:value)
{ExpressResponse}.headerSetCookie(String:value)
{ExpressResponse}.headerStrictTransportSecurity(String:value)
{ExpressResponse}.headerTrailer(String:value)
{ExpressResponse}.headerTransferEncoding(String:value)
{ExpressResponse}.headerTk(String:value)
{ExpressResponse}.headerUpgrade(String:value)
{ExpressResponse}.headerVary(String:value)
{ExpressResponse}.headerVia(String:value)
{ExpressResponse}.headerWarning(String:value)
{ExpressResponse}.headerWWWAuthenticate(String:value)
{ExpressResponse}.headerXFrameOptions(String:value)
```


## 4. Conclusion

Following the same programmatic API that express brings by itself, where we can find the **HTTP methods** available as properties of the `{Express Application}` object, I wanted to expand the same idea to the **HTTP status codes** and the **HTTP headers** too, but in this case, in the `{Express Response}` object.# Read this file
