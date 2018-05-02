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
	response.headerAccept("application/json");
	response.headerAcceptCharset("utf8");
	response.headerAcceptEncoding("utf8");
	response.headerAcceptLanguage("*");
	response.headerAcceptDatetime("*");
	response.headerAccessControlRequestMethod("*");
	response.headerAccessControlRequestHeaders("*");
	response.headerAuthorization("Basic blablabla");
	response.headerCacheControl("no-cache");
	response.headerConnection("*");
	response.headerCookie("*");
	response.headerContentLength("*");
	response.headerContentMD5("*");
	response.headerContentType("application/json");
	response.headerDate("*");
	response.headerExpect("*");
	response.headerForwarded("*");
	response.headerFrom("*");
	response.headerHost("*");
	response.headerIfMatch("*");
	response.headerIfModifiedSince("*");
	response.headerIfNoneMatch("*");
	response.headerIfRange("*");
	response.headerIfUnmodifiedSince("*");
	response.headerMaxForwards("*");
	response.headerOrigin("*");
	response.headerPragma("*");
	response.headerProxyAuthorization("*");
	response.headerRange("*");
	response.headerReferer ("*");
	response.headerTE("*");
	response.headerUserAgent("*");
	response.headerUpgrade("*");
	response.headerVia("*");
	response.headerWarning("*");
	response.headerUpgradeInsecureRequests("*");
	response.headerXRequestedWith("*");
	response.headerDNT("*");
	response.headerXForwardedFor("*");
	response.headerXForwardedHost("*");
	response.headerXForwardedProto("*");
	response.headerFrontEndHttps("*");
	response.headerXHttpMethodOverride("*");
	response.headerXATTDeviceId("*");
	response.headerXWapProfile("*");
	response.headerProxyConnection("*");
	response.headerXUIDH("*");
	response.headerXCsrfToken("*");
	response.headerXRequestID("*");
	response.headerXCorrelationID("*");
	response.headerAccessControlAllowOrigin("*");
	response.headerAccessControlAllowCredentials("*");
	response.headerAccessControlExposeHeaders("*");
	response.headerAccessControlMaxAge("*");
	response.headerAccessControlAllowMethods("*");
	response.headerAccessControlAllowHeaders("*");
	response.headerAcceptPatch("*");
	response.headerAcceptRanges("*");
	response.headerAge("*");
	response.headerAllow("*");
	response.headerAltSvc("*");
	response.headerCacheControl("*");
	response.headerConnection("*");
	response.headerContentDisposition("*");
	response.headerContentEncoding("utf8");
	response.headerContentLanguage("*");
	response.headerContentLength("*");
	response.headerContentLocation("*");
	response.headerContentMD5("*");
	response.headerContentRange("*");
	response.headerContentType("application/json");
	response.headerDate("*");
	response.headerETag("*");
	response.headerExpires("*");
	response.headerLastModified("*");
	response.headerLink("*");
	response.headerLocation("*");
	response.headerP3P("*");
	response.headerPragma("*");
	response.headerProxyAuthenticate("*");
	response.headerPublicKeyPins("*");
	response.headerRetryAfter("*");
	response.headerServer("*");
	response.headerSetCookie("*");
	response.headerStrictTransportSecurity("*");
	response.headerTrailer("*");
	response.headerTransferEncoding("*");
	response.headerTk("*");
	response.headerUpgrade("*");
	response.headerVary("*");
	response.headerVia("*");
	response.headerWarning("*");
	response.headerWWWAuthenticate("*");
	response.headerXFrameOptions("*");
	response.send("{}");
});
```


## 4. Conclusion

Following the same programmatic API that express brings by itself, where we can find the **HTTP methods** available as properties of the `{Express Application}` object, I wanted to expand the same idea to the **HTTP status codes** and the **HTTP headers** too, but in this case, in the `{Express Response}` object.

## 5. More


About: [HTTP status codes](https://en.wikipedia.org/wiki/List_of_HTTP_status_codes)

About: [HTTP headers](https://en.wikipedia.org/wiki/List_of_HTTP_header_fields).