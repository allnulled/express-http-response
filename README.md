# express-http-support

![](https://img.shields.io/badge/express--http--support-1.0-green.svg?longCache=true) ![](https://img.shields.io/badge/build-passing-green.svg?longCache=true) ![](https://img.shields.io/badge/coverage-87.5%25-green.svg?longCache=true) ![](https://img.shields.io/badge/documented-100%25-green.svg?longCache=true)

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
app.get("/", function(request, response, next) {
	response.statusContinue();
	response.statusSwitchingProtocols();
	response.statusProcessing();
	response.statusEarlyHints();
	response.statusUnassigned();
	response.statusOK();
	response.statusCreated();
	response.statusAccepted();
	response.statusNonAuthoritativeInformation();
	response.statusNoContent();
	response.statusResetContent();
	response.statusPartialContent();
	response.statusMultiStatus();
	response.statusAlreadyReported();
	response.statusUnassigned();
	response.statusIMUsed();
	response.statusUnassigned();
	response.statusMultipleChoices();
	response.statusMovedPermanently();
	response.statusFound();
	response.statusSeeOther();
	response.statusNotModified();
	response.statusUseProxy();
	response.statusUnused();
	response.statusTemporaryRedirect();
	response.statusPermanentRedirect();
	response.statusUnassigned();
	response.statusBadRequest();
	response.statusUnauthorized();
	response.statusPaymentRequired();
	response.statusForbidden();
	response.statusNotFound();
	response.statusMethodNotAllowed();
	response.statusNotAcceptable();
	response.statusProxyAuthenticationRequired();
	response.statusRequestTimeout();
	response.statusConflict();
	response.statusGone();
	response.statusLengthRequired();
	response.statusPreconditionFailed();
	response.statusPayloadTooLarge();
	response.statusURITooLong();
	response.statusUnsupportedMediaType();
	response.statusRangeNotSatisfiable();
	response.statusExpectationFailed();
	response.statusUnassigned();
	response.statusMisdirectedRequest();
	response.statusUnprocessableEntity();
	response.statusLocked();
	response.statusFailedDependency();
	response.statusUnassigned();
	response.statusUpgradeRequired();
	response.statusUnassigned();
	response.statusPreconditionRequired();
	response.statusTooManyRequests();
	response.statusUnassigned();
	response.statusRequestHeaderFieldsTooLarge();
	response.statusUnassigned();
	response.statusUnavailableForLegalReasons();
	response.statusUnassigned();
	response.statusInternalServerError();
	response.statusNotImplemented();
	response.statusBadGateway();
	response.statusServiceUnavailable();
	response.statusGatewayTimeout();
	response.statusHTTPVersionNotSupported();
	response.statusVariantAlsoNegotiates();
	response.statusInsufficientStorage();
	response.statusLoopDetected();
	response.statusUnassigned();
	response.statusNotExtended();
	response.statusNetworkAuthenticationRequired();
	response.statusUnassigned();
	response.send("");
});
```

----

#### Available HTTP header methods:

```js
app.get("/", function(request, response, next) {
	res.headerAccept("application/json");
	res.headerAcceptCharset("utf8");
	res.headerAcceptEncoding("utf8");
	res.headerAcceptLanguage("*");
	res.headerAcceptDatetime("*");
	res.headerAccessControlRequestMethod("*");
	res.headerAccessControlRequestHeaders("*");
	res.headerAuthorization("Basic blablabla");
	res.headerCacheControl("no-cache");
	res.headerConnection("*");
	res.headerCookie("*");
	res.headerContentLength("*");
	res.headerContentMD5("*");
	res.headerContentType("application/json");
	res.headerDate("*");
	res.headerExpect("*");
	res.headerForwarded("*");
	res.headerFrom("*");
	res.headerHost("*");
	res.headerIfMatch("*");
	res.headerIfModifiedSince("*");
	res.headerIfNoneMatch("*");
	res.headerIfRange("*");
	res.headerIfUnmodifiedSince("*");
	res.headerMaxForwards("*");
	res.headerOrigin("*");
	res.headerPragma("*");
	res.headerProxyAuthorization("*");
	res.headerRange("*");
	res.headerReferer ("*");
	res.headerTE("*");
	res.headerUserAgent("*");
	res.headerUpgrade("*");
	res.headerVia("*");
	res.headerWarning("*");
	res.headerUpgradeInsecureRequests("*");
	res.headerXRequestedWith("*");
	res.headerDNT("*");
	res.headerXForwardedFor("*");
	res.headerXForwardedHost("*");
	res.headerXForwardedProto("*");
	res.headerFrontEndHttps("*");
	res.headerXHttpMethodOverride("*");
	res.headerXATTDeviceId("*");
	res.headerXWapProfile("*");
	res.headerProxyConnection("*");
	res.headerXUIDH("*");
	res.headerXCsrfToken("*");
	res.headerXRequestID("*");
	res.headerXCorrelationID("*");
	res.headerAccessControlAllowOrigin("*");
	res.headerAccessControlAllowCredentials("*");
	res.headerAccessControlExposeHeaders("*");
	res.headerAccessControlMaxAge("*");
	res.headerAccessControlAllowMethods("*");
	res.headerAccessControlAllowHeaders("*");
	res.headerAcceptPatch("*");
	res.headerAcceptRanges("*");
	res.headerAge("*");
	res.headerAllow("*");
	res.headerAltSvc("*");
	res.headerCacheControl("*");
	res.headerConnection("*");
	res.headerContentDisposition("*");
	res.headerContentEncoding("utf8");
	res.headerContentLanguage("*");
	res.headerContentLength("*");
	res.headerContentLocation("*");
	res.headerContentMD5("*");
	res.headerContentRange("*");
	res.headerContentType("application/json");
	res.headerDate("*");
	res.headerETag("*");
	res.headerExpires("*");
	res.headerLastModified("*");
	res.headerLink("*");
	res.headerLocation("*");
	res.headerP3P("*");
	res.headerPragma("*");
	res.headerProxyAuthenticate("*");
	res.headerPublicKeyPins("*");
	res.headerRetryAfter("*");
	res.headerServer("*");
	res.headerSetCookie("*");
	res.headerStrictTransportSecurity("*");
	res.headerTrailer("*");
	res.headerTransferEncoding("*");
	res.headerTk("*");
	res.headerUpgrade("*");
	res.headerVary("*");
	res.headerVia("*");
	res.headerWarning("*");
	res.headerWWWAuthenticate("*");
	res.headerXFrameOptions("*");
	response.send("");
});
```


## 4. Conclusion

Following the same programmatic API that express brings by itself, where we can find the **HTTP methods** available as properties of the `{Express Application}` object, I wanted to expand the same idea to the **HTTP status codes** and the **HTTP headers** too, but in this case, in the `{Express Response}` object.# Read this file
