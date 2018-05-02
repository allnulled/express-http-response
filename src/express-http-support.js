module.exports = {

	headers: {

		middleware: function(req, res, next) {

			/**
			 * @name {ExpressResponse}.header
			 * @type {Function}
			 * @param value {String} Value for the HTTP header
			 * @header Accept
			 * @return {ExpressResponse}
			 */
			res.headerAccept = function(value) {
				res.header("Accept", value);
				return res;
			};

			/**
			 * @name {ExpressResponse}.headerAcceptCharset
			 * @type {Function}
			 * @param value {String} Value for the HTTP header
			 * @header Accept-Charset
			 * @return {ExpressResponse}
			 */
			res.headerAcceptCharset = function(value) {
				res.header("Accept-Charset", value);
				return res;
			};

			/**
			 * @name {ExpressResponse}.headerAcceptEncoding
			 * @type {Function}
			 * @param value {String} Value for the HTTP header
			 * @header Accept-Encoding
			 * @return {ExpressResponse}
			 */
			res.headerAcceptEncoding = function(value) {
				res.header("Accept-Encoding", value);
				return res;
			};

			/**
			 * @name {ExpressResponse}.headerAcceptLanguage
			 * @type {Function}
			 * @param value {String} Value for the HTTP header
			 * @header Accept-Language
			 * @return {ExpressResponse}
			 */
			res.headerAcceptLanguage = function(value) {
				res.header("Accept-Language", value);
				return res;
			};

			/**
			 * @name {ExpressResponse}.headerAcceptDatetime
			 * @type {Function}
			 * @param value {String} Value for the HTTP header
			 * @header Accept-Datetime
			 * @return {ExpressResponse}
			 */
			res.headerAcceptDatetime = function(value) {
				res.header("Accept-Datetime", value);
				return res;
			};

			/**
			 * @name {ExpressResponse}.headerAccessControlRequestMethod
			 * @type {Function}
			 * @param value {String} Value for the HTTP header
			 * @header Access-Control-Request-Method
			 * @return {ExpressResponse}
			 */
			res.headerAccessControlRequestMethod = function(value) {
				res.header("Access-Control-Request-Method", value);
				return res;
			};

			/**
			 * @name {ExpressResponse}.headerAccessControlRequestHeaders
			 * @type {Function}
			 * @param value {String} Value for the HTTP header
			 * @header Access-Control-Request-Headers
			 * @return {ExpressResponse}
			 */
			res.headerAccessControlRequestHeaders = function(value) {
				res.header("Access-Control-Request-Headers", value);
				return res;
			};

			/**
			 * @name {ExpressResponse}.headerAuthorization
			 * @type {Function}
			 * @param value {String} Value for the HTTP header
			 * @header Authorization
			 * @return {ExpressResponse}
			 */
			res.headerAuthorization = function(value) {
				res.header("Authorization", value);
				return res;
			};

			/**
			 * @name {ExpressResponse}.headerCacheControl
			 * @type {Function}
			 * @param value {String} Value for the HTTP header
			 * @header Cache-Control
			 * @return {ExpressResponse}
			 */
			res.headerCacheControl = function(value) {
				res.header("Cache-Control", value);
				return res;
			};

			/**
			 * @name {ExpressResponse}.headerConnection
			 * @type {Function}
			 * @param value {String} Value for the HTTP header
			 * @header Connection
			 * @return {ExpressResponse}
			 */
			res.headerConnection = function(value) {
				res.header("Connection", value);
				return res;
			};

			/**
			 * @name {ExpressResponse}.headerCookie
			 * @type {Function}
			 * @param value {String} Value for the HTTP header
			 * @header Cookie
			 * @return {ExpressResponse}
			 */
			res.headerCookie = function(value) {
				res.header("Cookie", value);
				return res;
			};

			/**
			 * @name {ExpressResponse}.headerContentLength
			 * @type {Function}
			 * @param value {String} Value for the HTTP header
			 * @header Content-Length
			 * @return {ExpressResponse}
			 */
			res.headerContentLength = function(value) {
				res.header("Content-Length", value);
				return res;
			};

			/**
			 * @name {ExpressResponse}.headerContentMD5
			 * @type {Function}
			 * @param value {String} Value for the HTTP header
			 * @header Content-MD5
			 * @return {ExpressResponse}
			 */
			res.headerContentMD5 = function(value) {
				res.header("Content-MD5", value);
				return res;
			};

			/**
			 * @name {ExpressResponse}.headerContentType
			 * @type {Function}
			 * @param value {String} Value for the HTTP header
			 * @header Content-Type
			 * @return {ExpressResponse}
			 */
			res.headerContentType = function(value) {
				res.header("Content-Type", value);
				return res;
			};

			/**
			 * @name {ExpressResponse}.headerDate
			 * @type {Function}
			 * @param value {String} Value for the HTTP header
			 * @header Date
			 * @return {ExpressResponse}
			 */
			res.headerDate = function(value) {
				res.header("Date", value);
				return res;
			};

			/**
			 * @name {ExpressResponse}.headerExpect
			 * @type {Function}
			 * @param value {String} Value for the HTTP header
			 * @header Expect
			 * @return {ExpressResponse}
			 */
			res.headerExpect = function(value) {
				res.header("Expect", value);
				return res;
			};

			/**
			 * @name {ExpressResponse}.headerForwarded
			 * @type {Function}
			 * @param value {String} Value for the HTTP header
			 * @header Forwarded
			 * @return {ExpressResponse}
			 */
			res.headerForwarded = function(value) {
				res.header("Forwarded", value);
				return res;
			};

			/**
			 * @name {ExpressResponse}.headerFrom
			 * @type {Function}
			 * @param value {String} Value for the HTTP header
			 * @header From
			 * @return {ExpressResponse}
			 */
			res.headerFrom = function(value) {
				res.header("From", value);
				return res;
			};

			/**
			 * @name {ExpressResponse}.headerHost
			 * @type {Function}
			 * @param value {String} Value for the HTTP header
			 * @header Host
			 * @return {ExpressResponse}
			 */
			res.headerHost = function(value) {
				res.header("Host", value);
				return res;
			};

			/**
			 * @name {ExpressResponse}.headerIfMatch
			 * @type {Function}
			 * @param value {String} Value for the HTTP header
			 * @header If-Match
			 * @return {ExpressResponse}
			 */
			res.headerIfMatch = function(value) {
				res.header("If-Match", value);
				return res;
			};

			/**
			 * @name {ExpressResponse}.headerIfModifiedSince
			 * @type {Function}
			 * @param value {String} Value for the HTTP header
			 * @header If-Modified-Since
			 * @return {ExpressResponse}
			 */
			res.headerIfModifiedSince = function(value) {
				res.header("If-Modified-Since", value);
				return res;
			};

			/**
			 * @name {ExpressResponse}.headerIfNoneMatch
			 * @type {Function}
			 * @param value {String} Value for the HTTP header
			 * @header If-None-Match
			 * @return {ExpressResponse}
			 */
			res.headerIfNoneMatch = function(value) {
				res.header("If-None-Match", value);
				return res;
			};

			/**
			 * @name {ExpressResponse}.headerIfRange
			 * @type {Function}
			 * @param value {String} Value for the HTTP header
			 * @header If-Range
			 * @return {ExpressResponse}
			 */
			res.headerIfRange = function(value) {
				res.header("If-Range", value);
				return res;
			};

			/**
			 * @name {ExpressResponse}.headerIfUnmodifiedSince
			 * @type {Function}
			 * @param value {String} Value for the HTTP header
			 * @header If-Unmodified-Since
			 * @return {ExpressResponse}
			 */
			res.headerIfUnmodifiedSince = function(value) {
				res.header("If-Unmodified-Since", value);
				return res;
			};

			/**
			 * @name {ExpressResponse}.headerMaxForwards
			 * @type {Function}
			 * @param value {String} Value for the HTTP header
			 * @header Max-Forwards
			 * @return {ExpressResponse}
			 */
			res.headerMaxForwards = function(value) {
				res.header("Max-Forwards", value);
				return res;
			};

			/**
			 * @name {ExpressResponse}.headerOrigin
			 * @type {Function}
			 * @param value {String} Value for the HTTP header
			 * @header Origin
			 * @return {ExpressResponse}
			 */
			res.headerOrigin = function(value) {
				res.header("Origin", value);
				return res;
			};

			/**
			 * @name {ExpressResponse}.headerPragma
			 * @type {Function}
			 * @param value {String} Value for the HTTP header
			 * @header Pragma
			 * @return {ExpressResponse}
			 */
			res.headerPragma = function(value) {
				res.header("Pragma", value);
				return res;
			};

			/**
			 * @name {ExpressResponse}.headerProxyAuthorization
			 * @type {Function}
			 * @param value {String} Value for the HTTP header
			 * @header Proxy-Authorization
			 * @return {ExpressResponse}
			 */
			res.headerProxyAuthorization = function(value) {
				res.header("Proxy-Authorization", value);
				return res;
			};

			/**
			 * @name {ExpressResponse}.headerRange
			 * @type {Function}
			 * @param value {String} Value for the HTTP header
			 * @header Range
			 * @return {ExpressResponse}
			 */
			res.headerRange = function(value) {
				res.header("Range", value);
				return res;
			};

			/**
			 * @name {ExpressResponse}.headerReferer 
			 * @type {Function}
			 * @param value {String} Value for the HTTP header
			 * @header Referer 
			 * @return {ExpressResponse}
			 */
			res.headerReferer  = function(value) {
				res.header("Referer ", value);
				return res;
			};

			/**
			 * @name {ExpressResponse}.headerTE
			 * @type {Function}
			 * @param value {String} Value for the HTTP header
			 * @header TE
			 * @return {ExpressResponse}
			 */
			res.headerTE = function(value) {
				res.header("TE", value);
				return res;
			};

			/**
			 * @name {ExpressResponse}.headerUserAgent
			 * @type {Function}
			 * @param value {String} Value for the HTTP header
			 * @header User-Agent
			 * @return {ExpressResponse}
			 */
			res.headerUserAgent = function(value) {
				res.header("User-Agent", value);
				return res;
			};

			/**
			 * @name {ExpressResponse}.headerUpgrade
			 * @type {Function}
			 * @param value {String} Value for the HTTP header
			 * @header Upgrade
			 * @return {ExpressResponse}
			 */
			res.headerUpgrade = function(value) {
				res.header("Upgrade", value);
				return res;
			};

			/**
			 * @name {ExpressResponse}.headerVia
			 * @type {Function}
			 * @param value {String} Value for the HTTP header
			 * @header Via
			 * @return {ExpressResponse}
			 */
			res.headerVia = function(value) {
				res.header("Via", value);
				return res;
			};

			/**
			 * @name {ExpressResponse}.headerWarning
			 * @type {Function}
			 * @param value {String} Value for the HTTP header
			 * @header Warning
			 * @return {ExpressResponse}
			 */
			res.headerWarning = function(value) {
				res.header("Warning", value);
				return res;
			};

			/**
			 * @name {ExpressResponse}.headerUpgradeInsecureRequests
			 * @type {Function}
			 * @param value {String} Value for the HTTP header
			 * @header Upgrade-Insecure-Requests
			 * @return {ExpressResponse}
			 */
			res.headerUpgradeInsecureRequests = function(value) {
				res.header("Upgrade-Insecure-Requests", value);
				return res;
			};

			/**
			 * @name {ExpressResponse}.headerXRequestedWith
			 * @type {Function}
			 * @param value {String} Value for the HTTP header
			 * @header X-Requested-With
			 * @return {ExpressResponse}
			 */
			res.headerXRequestedWith = function(value) {
				res.header("X-Requested-With", value);
				return res;
			};

			/**
			 * @name {ExpressResponse}.headerDNT
			 * @type {Function}
			 * @param value {String} Value for the HTTP header
			 * @header DNT
			 * @return {ExpressResponse}
			 */
			res.headerDNT = function(value) {
				res.header("DNT", value);
				return res;
			};

			/**
			 * @name {ExpressResponse}.headerXForwardedFor
			 * @type {Function}
			 * @param value {String} Value for the HTTP header
			 * @header X-Forwarded-For
			 * @return {ExpressResponse}
			 */
			res.headerXForwardedFor = function(value) {
				res.header("X-Forwarded-For", value);
				return res;
			};

			/**
			 * @name {ExpressResponse}.headerXForwardedHost
			 * @type {Function}
			 * @param value {String} Value for the HTTP header
			 * @header X-Forwarded-Host
			 * @return {ExpressResponse}
			 */
			res.headerXForwardedHost = function(value) {
				res.header("X-Forwarded-Host", value);
				return res;
			};

			/**
			 * @name {ExpressResponse}.headerXForwardedProto
			 * @type {Function}
			 * @param value {String} Value for the HTTP header
			 * @header X-Forwarded-Proto
			 * @return {ExpressResponse}
			 */
			res.headerXForwardedProto = function(value) {
				res.header("X-Forwarded-Proto", value);
				return res;
			};

			/**
			 * @name {ExpressResponse}.headerFrontEndHttps
			 * @type {Function}
			 * @param value {String} Value for the HTTP header
			 * @header Front-End-Https
			 * @return {ExpressResponse}
			 */
			res.headerFrontEndHttps = function(value) {
				res.header("Front-End-Https", value);
				return res;
			};

			/**
			 * @name {ExpressResponse}.headerXHttpMethodOverride
			 * @type {Function}
			 * @param value {String} Value for the HTTP header
			 * @header X-Http-Method-Override
			 * @return {ExpressResponse}
			 */
			res.headerXHttpMethodOverride = function(value) {
				res.header("X-Http-Method-Override", value);
				return res;
			};

			/**
			 * @name {ExpressResponse}.headerXATTDeviceId
			 * @type {Function}
			 * @param value {String} Value for the HTTP header
			 * @header X-ATT-DeviceId
			 * @return {ExpressResponse}
			 */
			res.headerXATTDeviceId = function(value) {
				res.header("X-ATT-DeviceId", value);
				return res;
			};

			/**
			 * @name {ExpressResponse}.headerXWapProfile
			 * @type {Function}
			 * @param value {String} Value for the HTTP header
			 * @header X-Wap-Profile
			 * @return {ExpressResponse}
			 */
			res.headerXWapProfile = function(value) {
				res.header("X-Wap-Profile", value);
				return res;
			};

			/**
			 * @name {ExpressResponse}.headerProxyConnection
			 * @type {Function}
			 * @param value {String} Value for the HTTP header
			 * @header Proxy-Connection
			 * @return {ExpressResponse}
			 */
			res.headerProxyConnection = function(value) {
				res.header("Proxy-Connection", value);
				return res;
			};

			/**
			 * @name {ExpressResponse}.headerXUIDH
			 * @type {Function}
			 * @param value {String} Value for the HTTP header
			 * @header X-UIDH
			 * @return {ExpressResponse}
			 */
			res.headerXUIDH = function(value) {
				res.header("X-UIDH", value);
				return res;
			};

			/**
			 * @name {ExpressResponse}.headerXCsrfToken
			 * @type {Function}
			 * @param value {String} Value for the HTTP header
			 * @header X-Csrf-Token
			 * @return {ExpressResponse}
			 */
			res.headerXCsrfToken = function(value) {
				res.header("X-Csrf-Token", value);
				return res;
			};

			/**
			 * @name {ExpressResponse}.headerXRequestID
			 * @type {Function}
			 * @param value {String} Value for the HTTP header
			 * @header X-Request-ID
			 * @return {ExpressResponse}
			 */
			res.headerXRequestID = function(value) {
				res.header("X-Request-ID", value);
				return res;
			};

			/**
			 * @name {ExpressResponse}.headerXCorrelationID
			 * @type {Function}
			 * @param value {String} Value for the HTTP header
			 * @header X-Correlation-ID
			 * @return {ExpressResponse}
			 */
			res.headerXCorrelationID = function(value) {
				res.header("X-Correlation-ID", value);
				return res;
			};

			/**
			 * @name {ExpressResponse}.res
			 * @type {Function}
			 * @param value {String} Value for the HTTP header
			 * @header Response fields
			 * @return {ExpressResponse}
			 */
			Response res.headerfields = function(value) {
				res.header("Response fields", value);
				return res;
			};

			/**
			 * @name {ExpressResponse}.response
			 * @type {Function}
			 * @param value {String} Value for the HTTP header
			 * @header Standard response fields
			 * @return {ExpressResponse}
			 */
			Standard response res.headerfields = function(value) {
				res.header("Standard response fields", value);
				return res;
			};

			/**
			 * @name {ExpressResponse}.res
			 * @type {Function}
			 * @param value {String} Value for the HTTP header
			 * @header Field name
			 * @return {ExpressResponse}
			 */
			Field res.headername = function(value) {
				res.header("Field name", value);
				return res;
			};

			/**
			 * @name {ExpressResponse}.headerAccessControlAllowOrigin
			 * @type {Function}
			 * @param value {String} Value for the HTTP header
			 * @header Access-Control-Allow-Origin
			 * @return {ExpressResponse}
			 */
			res.headerAccessControlAllowOrigin = function(value) {
				res.header("Access-Control-Allow-Origin", value);
				return res;
			};

			/**
			 * @name {ExpressResponse}.headerAccessControlAllowCredentials
			 * @type {Function}
			 * @param value {String} Value for the HTTP header
			 * @header Access-Control-Allow-Credentials
			 * @return {ExpressResponse}
			 */
			res.headerAccessControlAllowCredentials = function(value) {
				res.header("Access-Control-Allow-Credentials", value);
				return res;
			};

			/**
			 * @name {ExpressResponse}.headerAccessControlExposeHeaders
			 * @type {Function}
			 * @param value {String} Value for the HTTP header
			 * @header Access-Control-Expose-Headers
			 * @return {ExpressResponse}
			 */
			res.headerAccessControlExposeHeaders = function(value) {
				res.header("Access-Control-Expose-Headers", value);
				return res;
			};

			/**
			 * @name {ExpressResponse}.headerAccessControlMaxAge
			 * @type {Function}
			 * @param value {String} Value for the HTTP header
			 * @header Access-Control-Max-Age
			 * @return {ExpressResponse}
			 */
			res.headerAccessControlMaxAge = function(value) {
				res.header("Access-Control-Max-Age", value);
				return res;
			};

			/**
			 * @name {ExpressResponse}.headerAccessControlAllowMethods
			 * @type {Function}
			 * @param value {String} Value for the HTTP header
			 * @header Access-Control-Allow-Methods
			 * @return {ExpressResponse}
			 */
			res.headerAccessControlAllowMethods = function(value) {
				res.header("Access-Control-Allow-Methods", value);
				return res;
			};

			/**
			 * @name {ExpressResponse}.headerAccessControlAllowHeaders
			 * @type {Function}
			 * @param value {String} Value for the HTTP header
			 * @header Access-Control-Allow-Headers
			 * @return {ExpressResponse}
			 */
			res.headerAccessControlAllowHeaders = function(value) {
				res.header("Access-Control-Allow-Headers", value);
				return res;
			};

			/**
			 * @name {ExpressResponse}.headerAcceptPatch
			 * @type {Function}
			 * @param value {String} Value for the HTTP header
			 * @header Accept-Patch
			 * @return {ExpressResponse}
			 */
			res.headerAcceptPatch = function(value) {
				res.header("Accept-Patch", value);
				return res;
			};

			/**
			 * @name {ExpressResponse}.headerAcceptRanges
			 * @type {Function}
			 * @param value {String} Value for the HTTP header
			 * @header Accept-Ranges
			 * @return {ExpressResponse}
			 */
			res.headerAcceptRanges = function(value) {
				res.header("Accept-Ranges", value);
				return res;
			};

			/**
			 * @name {ExpressResponse}.headerAge
			 * @type {Function}
			 * @param value {String} Value for the HTTP header
			 * @header Age
			 * @return {ExpressResponse}
			 */
			res.headerAge = function(value) {
				res.header("Age", value);
				return res;
			};

			/**
			 * @name {ExpressResponse}.headerAllow
			 * @type {Function}
			 * @param value {String} Value for the HTTP header
			 * @header Allow
			 * @return {ExpressResponse}
			 */
			res.headerAllow = function(value) {
				res.header("Allow", value);
				return res;
			};

			/**
			 * @name {ExpressResponse}.headerAltSvc
			 * @type {Function}
			 * @param value {String} Value for the HTTP header
			 * @header Alt-Svc
			 * @return {ExpressResponse}
			 */
			res.headerAltSvc = function(value) {
				res.header("Alt-Svc", value);
				return res;
			};

			/**
			 * @name {ExpressResponse}.headerCacheControl
			 * @type {Function}
			 * @param value {String} Value for the HTTP header
			 * @header Cache-Control
			 * @return {ExpressResponse}
			 */
			res.headerCacheControl = function(value) {
				res.header("Cache-Control", value);
				return res;
			};

			/**
			 * @name {ExpressResponse}.headerConnection
			 * @type {Function}
			 * @param value {String} Value for the HTTP header
			 * @header Connection
			 * @return {ExpressResponse}
			 */
			res.headerConnection = function(value) {
				res.header("Connection", value);
				return res;
			};

			/**
			 * @name {ExpressResponse}.headerContentDisposition
			 * @type {Function}
			 * @param value {String} Value for the HTTP header
			 * @header Content-Disposition
			 * @return {ExpressResponse}
			 */
			res.headerContentDisposition = function(value) {
				res.header("Content-Disposition", value);
				return res;
			};

			/**
			 * @name {ExpressResponse}.headerContentEncoding
			 * @type {Function}
			 * @param value {String} Value for the HTTP header
			 * @header Content-Encoding
			 * @return {ExpressResponse}
			 */
			res.headerContentEncoding = function(value) {
				res.header("Content-Encoding", value);
				return res;
			};

			/**
			 * @name {ExpressResponse}.headerContentLanguage
			 * @type {Function}
			 * @param value {String} Value for the HTTP header
			 * @header Content-Language
			 * @return {ExpressResponse}
			 */
			res.headerContentLanguage = function(value) {
				res.header("Content-Language", value);
				return res;
			};

			/**
			 * @name {ExpressResponse}.headerContentLength
			 * @type {Function}
			 * @param value {String} Value for the HTTP header
			 * @header Content-Length
			 * @return {ExpressResponse}
			 */
			res.headerContentLength = function(value) {
				res.header("Content-Length", value);
				return res;
			};

			/**
			 * @name {ExpressResponse}.headerContentLocation
			 * @type {Function}
			 * @param value {String} Value for the HTTP header
			 * @header Content-Location
			 * @return {ExpressResponse}
			 */
			res.headerContentLocation = function(value) {
				res.header("Content-Location", value);
				return res;
			};

			/**
			 * @name {ExpressResponse}.headerContentMD5
			 * @type {Function}
			 * @param value {String} Value for the HTTP header
			 * @header Content-MD5
			 * @return {ExpressResponse}
			 */
			res.headerContentMD5 = function(value) {
				res.header("Content-MD5", value);
				return res;
			};

			/**
			 * @name {ExpressResponse}.headerContentRange
			 * @type {Function}
			 * @param value {String} Value for the HTTP header
			 * @header Content-Range
			 * @return {ExpressResponse}
			 */
			res.headerContentRange = function(value) {
				res.header("Content-Range", value);
				return res;
			};

			/**
			 * @name {ExpressResponse}.headerContentType
			 * @type {Function}
			 * @param value {String} Value for the HTTP header
			 * @header Content-Type
			 * @return {ExpressResponse}
			 */
			res.headerContentType = function(value) {
				res.header("Content-Type", value);
				return res;
			};

			/**
			 * @name {ExpressResponse}.headerDate
			 * @type {Function}
			 * @param value {String} Value for the HTTP header
			 * @header Date
			 * @return {ExpressResponse}
			 */
			res.headerDate = function(value) {
				res.header("Date", value);
				return res;
			};

			/**
			 * @name {ExpressResponse}.headerETag
			 * @type {Function}
			 * @param value {String} Value for the HTTP header
			 * @header ETag
			 * @return {ExpressResponse}
			 */
			res.headerETag = function(value) {
				res.header("ETag", value);
				return res;
			};

			/**
			 * @name {ExpressResponse}.headerExpires
			 * @type {Function}
			 * @param value {String} Value for the HTTP header
			 * @header Expires
			 * @return {ExpressResponse}
			 */
			res.headerExpires = function(value) {
				res.header("Expires", value);
				return res;
			};

			/**
			 * @name {ExpressResponse}.headerLastModified
			 * @type {Function}
			 * @param value {String} Value for the HTTP header
			 * @header Last-Modified
			 * @return {ExpressResponse}
			 */
			res.headerLastModified = function(value) {
				res.header("Last-Modified", value);
				return res;
			};

			/**
			 * @name {ExpressResponse}.headerLink
			 * @type {Function}
			 * @param value {String} Value for the HTTP header
			 * @header Link
			 * @return {ExpressResponse}
			 */
			res.headerLink = function(value) {
				res.header("Link", value);
				return res;
			};

			/**
			 * @name {ExpressResponse}.headerLocation
			 * @type {Function}
			 * @param value {String} Value for the HTTP header
			 * @header Location
			 * @return {ExpressResponse}
			 */
			res.headerLocation = function(value) {
				res.header("Location", value);
				return res;
			};

			/**
			 * @name {ExpressResponse}.headerP3P
			 * @type {Function}
			 * @param value {String} Value for the HTTP header
			 * @header P3P
			 * @return {ExpressResponse}
			 */
			res.headerP3P = function(value) {
				res.header("P3P", value);
				return res;
			};

			/**
			 * @name {ExpressResponse}.headerPragma
			 * @type {Function}
			 * @param value {String} Value for the HTTP header
			 * @header Pragma
			 * @return {ExpressResponse}
			 */
			res.headerPragma = function(value) {
				res.header("Pragma", value);
				return res;
			};

			/**
			 * @name {ExpressResponse}.headerProxyAuthenticate
			 * @type {Function}
			 * @param value {String} Value for the HTTP header
			 * @header Proxy-Authenticate
			 * @return {ExpressResponse}
			 */
			res.headerProxyAuthenticate = function(value) {
				res.header("Proxy-Authenticate", value);
				return res;
			};

			/**
			 * @name {ExpressResponse}.headerPublicKeyPins
			 * @type {Function}
			 * @param value {String} Value for the HTTP header
			 * @header Public-Key-Pins
			 * @return {ExpressResponse}
			 */
			res.headerPublicKeyPins = function(value) {
				res.header("Public-Key-Pins", value);
				return res;
			};

			/**
			 * @name {ExpressResponse}.headerRetryAfter
			 * @type {Function}
			 * @param value {String} Value for the HTTP header
			 * @header Retry-After
			 * @return {ExpressResponse}
			 */
			res.headerRetryAfter = function(value) {
				res.header("Retry-After", value);
				return res;
			};

			/**
			 * @name {ExpressResponse}.headerServer
			 * @type {Function}
			 * @param value {String} Value for the HTTP header
			 * @header Server
			 * @return {ExpressResponse}
			 */
			res.headerServer = function(value) {
				res.header("Server", value);
				return res;
			};

			/**
			 * @name {ExpressResponse}.headerSetCookie
			 * @type {Function}
			 * @param value {String} Value for the HTTP header
			 * @header Set-Cookie
			 * @return {ExpressResponse}
			 */
			res.headerSetCookie = function(value) {
				res.header("Set-Cookie", value);
				return res;
			};

			/**
			 * @name {ExpressResponse}.headerStrictTransportSecurity
			 * @type {Function}
			 * @param value {String} Value for the HTTP header
			 * @header Strict-Transport-Security
			 * @return {ExpressResponse}
			 */
			res.headerStrictTransportSecurity = function(value) {
				res.header("Strict-Transport-Security", value);
				return res;
			};

			/**
			 * @name {ExpressResponse}.headerTrailer
			 * @type {Function}
			 * @param value {String} Value for the HTTP header
			 * @header Trailer
			 * @return {ExpressResponse}
			 */
			res.headerTrailer = function(value) {
				res.header("Trailer", value);
				return res;
			};

			/**
			 * @name {ExpressResponse}.headerTransferEncoding
			 * @type {Function}
			 * @param value {String} Value for the HTTP header
			 * @header Transfer-Encoding
			 * @return {ExpressResponse}
			 */
			res.headerTransferEncoding = function(value) {
				res.header("Transfer-Encoding", value);
				return res;
			};

			/**
			 * @name {ExpressResponse}.headerTk
			 * @type {Function}
			 * @param value {String} Value for the HTTP header
			 * @header Tk
			 * @return {ExpressResponse}
			 */
			res.headerTk = function(value) {
				res.header("Tk", value);
				return res;
			};

			/**
			 * @name {ExpressResponse}.headerUpgrade
			 * @type {Function}
			 * @param value {String} Value for the HTTP header
			 * @header Upgrade
			 * @return {ExpressResponse}
			 */
			res.headerUpgrade = function(value) {
				res.header("Upgrade", value);
				return res;
			};

			/**
			 * @name {ExpressResponse}.headerVary
			 * @type {Function}
			 * @param value {String} Value for the HTTP header
			 * @header Vary
			 * @return {ExpressResponse}
			 */
			res.headerVary = function(value) {
				res.header("Vary", value);
				return res;
			};

			/**
			 * @name {ExpressResponse}.headerVia
			 * @type {Function}
			 * @param value {String} Value for the HTTP header
			 * @header Via
			 * @return {ExpressResponse}
			 */
			res.headerVia = function(value) {
				res.header("Via", value);
				return res;
			};

			/**
			 * @name {ExpressResponse}.headerWarning
			 * @type {Function}
			 * @param value {String} Value for the HTTP header
			 * @header Warning
			 * @return {ExpressResponse}
			 */
			res.headerWarning = function(value) {
				res.header("Warning", value);
				return res;
			};

			/**
			 * @name {ExpressResponse}.headerWWWAuthenticate
			 * @type {Function}
			 * @param value {String} Value for the HTTP header
			 * @header WWW-Authenticate
			 * @return {ExpressResponse}
			 */
			res.headerWWWAuthenticate = function(value) {
				res.header("WWW-Authenticate", value);
				return res;
			};

			/**
			 * @name {ExpressResponse}.headerXFrameOptions
			 * @type {Function}
			 * @param value {String} Value for the HTTP header
			 * @header X-Frame-Options
			 * @return {ExpressResponse}
			 */
			res.headerXFrameOptions = function(value) {
				res.header("X-Frame-Options", value);
				return res;
			};

			next();

		}
	},
	status: {
		middleware: function(req, res, next) {

			/**
			 * @name {ExpressResponse}.statusContinue
			 * @type {Function}
			 * @code 100
			 * @status Continue
			 * @return {ExpressResponse}
			 */
			res.statusContinue = function() {
				res.status(100); // 
				return res;
			};

			/**
			 * @name {ExpressResponse}.statusSwitchingProtocols
			 * @type {Function}
			 * @code 101
			 * @status SwitchingProtocols
			 * @return {ExpressResponse}
			 */
			res.statusSwitchingProtocols = function() {
				res.status(101); // 
				return res;
			};

			/**
			 * @name {ExpressResponse}.statusProcessing
			 * @type {Function}
			 * @code 102
			 * @status Processing
			 * @return {ExpressResponse}
			 */
			res.statusProcessing = function() {
				res.status(102); // 
				return res;
			};

			/**
			 * @name {ExpressResponse}.statusEarlyHints
			 * @type {Function}
			 * @code 103
			 * @status EarlyHints
			 * @return {ExpressResponse}
			 */
			res.statusEarlyHints = function() {
				res.status(103); // 
				return res;
			};

			/**
			 * @name {ExpressResponse}.statusUnassigned
			 * @type {Function}
			 * @code 104
			 * @status Unassigned
			 * @return {ExpressResponse}
			 */
			res.statusUnassigned = function() {
				res.status(104); // -199
				return res;
			};

			/**
			 * @name {ExpressResponse}.statusOK
			 * @type {Function}
			 * @code 200
			 * @status OK
			 * @return {ExpressResponse}
			 */
			res.statusOK = function() {
				res.status(200); // 
				return res;
			};

			/**
			 * @name {ExpressResponse}.statusCreated
			 * @type {Function}
			 * @code 201
			 * @status Created
			 * @return {ExpressResponse}
			 */
			res.statusCreated = function() {
				res.status(201); // 
				return res;
			};

			/**
			 * @name {ExpressResponse}.statusAccepted
			 * @type {Function}
			 * @code 202
			 * @status Accepted
			 * @return {ExpressResponse}
			 */
			res.statusAccepted = function() {
				res.status(202); // 
				return res;
			};

			/**
			 * @name {ExpressResponse}.statusNonAuthoritativeInformation
			 * @type {Function}
			 * @code 203
			 * @status NonAuthoritativeInformation
			 * @return {ExpressResponse}
			 */
			res.statusNonAuthoritativeInformation = function() {
				res.status(203); // 
				return res;
			};

			/**
			 * @name {ExpressResponse}.statusNoContent
			 * @type {Function}
			 * @code 204
			 * @status NoContent
			 * @return {ExpressResponse}
			 */
			res.statusNoContent = function() {
				res.status(204); // 
				return res;
			};

			/**
			 * @name {ExpressResponse}.statusResetContent
			 * @type {Function}
			 * @code 205
			 * @status ResetContent
			 * @return {ExpressResponse}
			 */
			res.statusResetContent = function() {
				res.status(205); // 
				return res;
			};

			/**
			 * @name {ExpressResponse}.statusPartialContent
			 * @type {Function}
			 * @code 206
			 * @status PartialContent
			 * @return {ExpressResponse}
			 */
			res.statusPartialContent = function() {
				res.status(206); // 
				return res;
			};

			/**
			 * @name {ExpressResponse}.statusMultiStatus
			 * @type {Function}
			 * @code 207
			 * @status MultiStatus
			 * @return {ExpressResponse}
			 */
			res.statusMultiStatus = function() {
				res.status(207); // 
				return res;
			};

			/**
			 * @name {ExpressResponse}.statusAlreadyReported
			 * @type {Function}
			 * @code 208
			 * @status AlreadyReported
			 * @return {ExpressResponse}
			 */
			res.statusAlreadyReported = function() {
				res.status(208); // 
				return res;
			};

			/**
			 * @name {ExpressResponse}.statusUnassigned
			 * @type {Function}
			 * @code 209
			 * @status Unassigned
			 * @return {ExpressResponse}
			 */
			res.statusUnassigned = function() {
				res.status(209); // -225
				return res;
			};

			/**
			 * @name {ExpressResponse}.statusIMUsed
			 * @type {Function}
			 * @code 226
			 * @status IMUsed
			 * @return {ExpressResponse}
			 */
			res.statusIMUsed = function() {
				res.status(226); // 
				return res;
			};

			/**
			 * @name {ExpressResponse}.statusUnassigned
			 * @type {Function}
			 * @code 227
			 * @status Unassigned
			 * @return {ExpressResponse}
			 */
			res.statusUnassigned = function() {
				res.status(227); // -299
				return res;
			};

			/**
			 * @name {ExpressResponse}.statusMultipleChoices
			 * @type {Function}
			 * @code 300
			 * @status MultipleChoices
			 * @return {ExpressResponse}
			 */
			res.statusMultipleChoices = function() {
				res.status(300); // 
				return res;
			};

			/**
			 * @name {ExpressResponse}.statusMovedPermanently
			 * @type {Function}
			 * @code 301
			 * @status MovedPermanently
			 * @return {ExpressResponse}
			 */
			res.statusMovedPermanently = function() {
				res.status(301); // 
				return res;
			};

			/**
			 * @name {ExpressResponse}.statusFound
			 * @type {Function}
			 * @code 302
			 * @status Found
			 * @return {ExpressResponse}
			 */
			res.statusFound = function() {
				res.status(302); // 
				return res;
			};

			/**
			 * @name {ExpressResponse}.statusSeeOther
			 * @type {Function}
			 * @code 303
			 * @status SeeOther
			 * @return {ExpressResponse}
			 */
			res.statusSeeOther = function() {
				res.status(303); // 
				return res;
			};

			/**
			 * @name {ExpressResponse}.statusNotModified
			 * @type {Function}
			 * @code 304
			 * @status NotModified
			 * @return {ExpressResponse}
			 */
			res.statusNotModified = function() {
				res.status(304); // 
				return res;
			};

			/**
			 * @name {ExpressResponse}.statusUseProxy
			 * @type {Function}
			 * @code 305
			 * @status UseProxy
			 * @return {ExpressResponse}
			 */
			res.statusUseProxy = function() {
				res.status(305); // 
				return res;
			};

			/**
			 * @name {ExpressResponse}.statusUnused
			 * @type {Function}
			 * @code 306
			 * @status Unused
			 * @return {ExpressResponse}
			 */
			res.statusUnused = function() {
				res.status(306); // 
				return res;
			};

			/**
			 * @name {ExpressResponse}.statusTemporaryRedirect
			 * @type {Function}
			 * @code 307
			 * @status TemporaryRedirect
			 * @return {ExpressResponse}
			 */
			res.statusTemporaryRedirect = function() {
				res.status(307); // 
				return res;
			};

			/**
			 * @name {ExpressResponse}.statusPermanentRedirect
			 * @type {Function}
			 * @code 308
			 * @status PermanentRedirect
			 * @return {ExpressResponse}
			 */
			res.statusPermanentRedirect = function() {
				res.status(308); // 
				return res;
			};

			/**
			 * @name {ExpressResponse}.statusUnassigned
			 * @type {Function}
			 * @code 309
			 * @status Unassigned
			 * @return {ExpressResponse}
			 */
			res.statusUnassigned = function() {
				res.status(309); // -399
				return res;
			};

			/**
			 * @name {ExpressResponse}.statusBadRequest
			 * @type {Function}
			 * @code 400
			 * @status BadRequest
			 * @return {ExpressResponse}
			 */
			res.statusBadRequest = function() {
				res.status(400); // 
				return res;
			};

			/**
			 * @name {ExpressResponse}.statusUnauthorized
			 * @type {Function}
			 * @code 401
			 * @status Unauthorized
			 * @return {ExpressResponse}
			 */
			res.statusUnauthorized = function() {
				res.status(401); // 
				return res;
			};

			/**
			 * @name {ExpressResponse}.statusPaymentRequired
			 * @type {Function}
			 * @code 402
			 * @status PaymentRequired
			 * @return {ExpressResponse}
			 */
			res.statusPaymentRequired = function() {
				res.status(402); // 
				return res;
			};

			/**
			 * @name {ExpressResponse}.statusForbidden
			 * @type {Function}
			 * @code 403
			 * @status Forbidden
			 * @return {ExpressResponse}
			 */
			res.statusForbidden = function() {
				res.status(403); // 
				return res;
			};

			/**
			 * @name {ExpressResponse}.statusNotFound
			 * @type {Function}
			 * @code 404
			 * @status NotFound
			 * @return {ExpressResponse}
			 */
			res.statusNotFound = function() {
				res.status(404); // 
				return res;
			};

			/**
			 * @name {ExpressResponse}.statusMethodNotAllowed
			 * @type {Function}
			 * @code 405
			 * @status MethodNotAllowed
			 * @return {ExpressResponse}
			 */
			res.statusMethodNotAllowed = function() {
				res.status(405); // 
				return res;
			};

			/**
			 * @name {ExpressResponse}.statusNotAcceptable
			 * @type {Function}
			 * @code 406
			 * @status NotAcceptable
			 * @return {ExpressResponse}
			 */
			res.statusNotAcceptable = function() {
				res.status(406); // 
				return res;
			};

			/**
			 * @name {ExpressResponse}.statusProxyAuthenticationRequired
			 * @type {Function}
			 * @code 407
			 * @status ProxyAuthenticationRequired
			 * @return {ExpressResponse}
			 */
			res.statusProxyAuthenticationRequired = function() {
				res.status(407); // 
				return res;
			};

			/**
			 * @name {ExpressResponse}.statusRequestTimeout
			 * @type {Function}
			 * @code 408
			 * @status RequestTimeout
			 * @return {ExpressResponse}
			 */
			res.statusRequestTimeout = function() {
				res.status(408); // 
				return res;
			};

			/**
			 * @name {ExpressResponse}.statusConflict
			 * @type {Function}
			 * @code 409
			 * @status Conflict
			 * @return {ExpressResponse}
			 */
			res.statusConflict = function() {
				res.status(409); // 
				return res;
			};

			/**
			 * @name {ExpressResponse}.statusGone
			 * @type {Function}
			 * @code 410
			 * @status Gone
			 * @return {ExpressResponse}
			 */
			res.statusGone = function() {
				res.status(410); // 
				return res;
			};

			/**
			 * @name {ExpressResponse}.statusLengthRequired
			 * @type {Function}
			 * @code 411
			 * @status LengthRequired
			 * @return {ExpressResponse}
			 */
			res.statusLengthRequired = function() {
				res.status(411); // 
				return res;
			};

			/**
			 * @name {ExpressResponse}.statusPreconditionFailed
			 * @type {Function}
			 * @code 412
			 * @status PreconditionFailed
			 * @return {ExpressResponse}
			 */
			res.statusPreconditionFailed = function() {
				res.status(412); // 
				return res;
			};

			/**
			 * @name {ExpressResponse}.statusPayloadTooLarge
			 * @type {Function}
			 * @code 413
			 * @status PayloadTooLarge
			 * @return {ExpressResponse}
			 */
			res.statusPayloadTooLarge = function() {
				res.status(413); // 
				return res;
			};

			/**
			 * @name {ExpressResponse}.statusURITooLong
			 * @type {Function}
			 * @code 414
			 * @status URITooLong
			 * @return {ExpressResponse}
			 */
			res.statusURITooLong = function() {
				res.status(414); // 
				return res;
			};

			/**
			 * @name {ExpressResponse}.statusUnsupportedMediaType
			 * @type {Function}
			 * @code 415
			 * @status UnsupportedMediaType
			 * @return {ExpressResponse}
			 */
			res.statusUnsupportedMediaType = function() {
				res.status(415); // 
				return res;
			};

			/**
			 * @name {ExpressResponse}.statusRangeNotSatisfiable
			 * @type {Function}
			 * @code 416
			 * @status RangeNotSatisfiable
			 * @return {ExpressResponse}
			 */
			res.statusRangeNotSatisfiable = function() {
				res.status(416); // 
				return res;
			};

			/**
			 * @name {ExpressResponse}.statusExpectationFailed
			 * @type {Function}
			 * @code 417
			 * @status ExpectationFailed
			 * @return {ExpressResponse}
			 */
			res.statusExpectationFailed = function() {
				res.status(417); // 
				return res;
			};

			/**
			 * @name {ExpressResponse}.statusUnassigned
			 * @type {Function}
			 * @code 418
			 * @status Unassigned
			 * @return {ExpressResponse}
			 */
			res.statusUnassigned = function() {
				res.status(418); // -420
				return res;
			};

			/**
			 * @name {ExpressResponse}.statusMisdirectedRequest
			 * @type {Function}
			 * @code 421
			 * @status MisdirectedRequest
			 * @return {ExpressResponse}
			 */
			res.statusMisdirectedRequest = function() {
				res.status(421); // 
				return res;
			};

			/**
			 * @name {ExpressResponse}.statusUnprocessableEntity
			 * @type {Function}
			 * @code 422
			 * @status UnprocessableEntity
			 * @return {ExpressResponse}
			 */
			res.statusUnprocessableEntity = function() {
				res.status(422); // 
				return res;
			};

			/**
			 * @name {ExpressResponse}.statusLocked
			 * @type {Function}
			 * @code 423
			 * @status Locked
			 * @return {ExpressResponse}
			 */
			res.statusLocked = function() {
				res.status(423); // 
				return res;
			};

			/**
			 * @name {ExpressResponse}.statusFailedDependency
			 * @type {Function}
			 * @code 424
			 * @status FailedDependency
			 * @return {ExpressResponse}
			 */
			res.statusFailedDependency = function() {
				res.status(424); // 
				return res;
			};

			/**
			 * @name {ExpressResponse}.statusUnassigned
			 * @type {Function}
			 * @code 425
			 * @status Unassigned
			 * @return {ExpressResponse}
			 */
			res.statusUnassigned = function() {
				res.status(425); // 
				return res;
			};

			/**
			 * @name {ExpressResponse}.statusUpgradeRequired
			 * @type {Function}
			 * @code 426
			 * @status UpgradeRequired
			 * @return {ExpressResponse}
			 */
			res.statusUpgradeRequired = function() {
				res.status(426); // 
				return res;
			};

			/**
			 * @name {ExpressResponse}.statusUnassigned
			 * @type {Function}
			 * @code 427
			 * @status Unassigned
			 * @return {ExpressResponse}
			 */
			res.statusUnassigned = function() {
				res.status(427); // 
				return res;
			};

			/**
			 * @name {ExpressResponse}.statusPreconditionRequired
			 * @type {Function}
			 * @code 428
			 * @status PreconditionRequired
			 * @return {ExpressResponse}
			 */
			res.statusPreconditionRequired = function() {
				res.status(428); // 
				return res;
			};

			/**
			 * @name {ExpressResponse}.statusTooManyRequests
			 * @type {Function}
			 * @code 429
			 * @status TooManyRequests
			 * @return {ExpressResponse}
			 */
			res.statusTooManyRequests = function() {
				res.status(429); // 
				return res;
			};

			/**
			 * @name {ExpressResponse}.statusUnassigned
			 * @type {Function}
			 * @code 430
			 * @status Unassigned
			 * @return {ExpressResponse}
			 */
			res.statusUnassigned = function() {
				res.status(430); // 
				return res;
			};

			/**
			 * @name {ExpressResponse}.statusRequestHeaderFieldsTooLarge
			 * @type {Function}
			 * @code 431
			 * @status RequestHeaderFieldsTooLarge
			 * @return {ExpressResponse}
			 */
			res.statusRequestHeaderFieldsTooLarge = function() {
				res.status(431); // 
				return res;
			};

			/**
			 * @name {ExpressResponse}.statusUnassigned
			 * @type {Function}
			 * @code 432
			 * @status Unassigned
			 * @return {ExpressResponse}
			 */
			res.statusUnassigned = function() {
				res.status(432); // -450
				return res;
			};

			/**
			 * @name {ExpressResponse}.statusUnavailableForLegalReasons
			 * @type {Function}
			 * @code 451
			 * @status UnavailableForLegalReasons
			 * @return {ExpressResponse}
			 */
			res.statusUnavailableForLegalReasons = function() {
				res.status(451); // 
				return res;
			};

			/**
			 * @name {ExpressResponse}.statusUnassigned
			 * @type {Function}
			 * @code 452
			 * @status Unassigned
			 * @return {ExpressResponse}
			 */
			res.statusUnassigned = function() {
				res.status(452); // -499
				return res;
			};

			/**
			 * @name {ExpressResponse}.statusInternalServerError
			 * @type {Function}
			 * @code 500
			 * @status InternalServerError
			 * @return {ExpressResponse}
			 */
			res.statusInternalServerError = function() {
				res.status(500); // 
				return res;
			};

			/**
			 * @name {ExpressResponse}.statusNotImplemented
			 * @type {Function}
			 * @code 501
			 * @status NotImplemented
			 * @return {ExpressResponse}
			 */
			res.statusNotImplemented = function() {
				res.status(501); // 
				return res;
			};

			/**
			 * @name {ExpressResponse}.statusBadGateway
			 * @type {Function}
			 * @code 502
			 * @status BadGateway
			 * @return {ExpressResponse}
			 */
			res.statusBadGateway = function() {
				res.status(502); // 
				return res;
			};

			/**
			 * @name {ExpressResponse}.statusServiceUnavailable
			 * @type {Function}
			 * @code 503
			 * @status ServiceUnavailable
			 * @return {ExpressResponse}
			 */
			res.statusServiceUnavailable = function() {
				res.status(503); // 
				return res;
			};

			/**
			 * @name {ExpressResponse}.statusGatewayTimeout
			 * @type {Function}
			 * @code 504
			 * @status GatewayTimeout
			 * @return {ExpressResponse}
			 */
			res.statusGatewayTimeout = function() {
				res.status(504); // 
				return res;
			};

			/**
			 * @name {ExpressResponse}.statusHTTPVersionNotSupported
			 * @type {Function}
			 * @code 505
			 * @status HTTPVersionNotSupported
			 * @return {ExpressResponse}
			 */
			res.statusHTTPVersionNotSupported = function() {
				res.status(505); // 
				return res;
			};

			/**
			 * @name {ExpressResponse}.statusVariantAlsoNegotiates
			 * @type {Function}
			 * @code 506
			 * @status VariantAlsoNegotiates
			 * @return {ExpressResponse}
			 */
			res.statusVariantAlsoNegotiates = function() {
				res.status(506); // 
				return res;
			};

			/**
			 * @name {ExpressResponse}.statusInsufficientStorage
			 * @type {Function}
			 * @code 507
			 * @status InsufficientStorage
			 * @return {ExpressResponse}
			 */
			res.statusInsufficientStorage = function() {
				res.status(507); // 
				return res;
			};

			/**
			 * @name {ExpressResponse}.statusLoopDetected
			 * @type {Function}
			 * @code 508
			 * @status LoopDetected
			 * @return {ExpressResponse}
			 */
			res.statusLoopDetected = function() {
				res.status(508); // 
				return res;
			};

			/**
			 * @name {ExpressResponse}.statusUnassigned
			 * @type {Function}
			 * @code 509
			 * @status Unassigned
			 * @return {ExpressResponse}
			 */
			res.statusUnassigned = function() {
				res.status(509); // 
				return res;
			};

			/**
			 * @name {ExpressResponse}.statusNotExtended
			 * @type {Function}
			 * @code 510
			 * @status NotExtended
			 * @return {ExpressResponse}
			 */
			res.statusNotExtended = function() {
				res.status(510); // 
				return res;
			};

			/**
			 * @name {ExpressResponse}.statusNetworkAuthenticationRequired
			 * @type {Function}
			 * @code 511
			 * @status NetworkAuthenticationRequired
			 * @return {ExpressResponse}
			 */
			res.statusNetworkAuthenticationRequired = function() {
				res.status(511); // 
				return res;
			};

			/**
			 * @name {ExpressResponse}.statusUnassigned
			 * @type {Function}
			 * @code 512
			 * @status Unassigned
			 * @return {ExpressResponse}
			 */
			res.statusUnassigned = function() {
				res.status(512); // -599
				return res;
			};

			next();

		}
	}
};