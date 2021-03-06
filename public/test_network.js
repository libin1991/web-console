window.$network = (function() {
  var baseURL = "http://localhost:8090";
  var nodeApi = "https://nodejs.org/dist/latest-v8.x/docs/api/index.json";

  function testXMLHttpRequest() {}

  function testFetch() {
    if (typeof window.fetch !== "function") {
      console.warn("current browser version don't support fetch api");
      return;
    }

    var url = baseURL + "/get_status/" + 200;

    // 不带选项
    var options = {
      method: "GET",
      headers: {
        "Content-Type": "text/plain"
      }
    };
    fetch(url);
    fetch(url, options);

    fetch(new Request(url));
    fetch(new Request(url, options));

    fetch(new Request(url, options), {
      headers: {
        "Content-Type": "text/html"
      }
    });
  }

  // 测试 HTTP 状态码
  function testHTTPStatus() {
    request({ url: nodeApi });
    [100, 200, 300, 400, 500].forEach(function(status) {
      request({ url: baseURL + "/get_status/" + status });
    });
  }

  /**
   * 测试请求参数
   */
  function testRequestParams(type = "get") {
    var email = "xx@yy.com";
    var password = "zz";

    switch (type) {
      case "get":
        // GET
        request({ url: baseURL + "/get?email=" + email + "&password=" + password + "&a=&b" });
        break;
      case "post:raw":
        request({
          url: baseURL + "/post",
          method: "POST",
          data: "hello"
        });
        break;
      case "post:raw:text":
        request({
          url: baseURL + "/post",
          method: "POST",
          requestHeaders: {
            "Content-Type": "text/plain"
          },
          data: "hello"
        });
        break;
      case "post:raw:json":
        request({
          url: baseURL + "/post",
          method: "POST",
          requestHeaders: {
            "Content-Type": "application/json;charset=UTF-8"
          },
          data: '{"email": aa}'
        });
        break;
      case "post:x-www-form-urlencoded":
        request({
          url: baseURL + "/post",
          method: "POST",
          requestHeaders: {
            "Content-Type": "application/x-www-form-urlencoded"
          },
          data: "email=" + encodeURIComponent(email) + "&password=" + encodeURIComponent(password)
        });
        break;
      case "post:form-data":
        var formData = new FormData();
        formData.append("email", email);
        formData.append("password", password);

        request({
          url: baseURL + "/post",
          method: "POST",
          data: formData
        });
        break;
    }
  }

  // 测试响应数据类型
  // 参考 http://devdocs.io/http/basics_of_http/mime_types
  function testResponseData() {
    const mimeTypeList = [
      "application/json",
      "application/javascript",
      "text/css",
      "text/plain",
      "text/html",
      "image/jpeg",
      "image/png",
      "image/gif",
      "image/svg+xml"
    ];

    mimeTypeList.forEach(mimeType => {
      request({ url: baseURL + "/get_data/?mime_type=" + encodeURIComponent(mimeType) });
    });
  }

  return {
    testHTTPStatus: testHTTPStatus,
    testResponseData: testResponseData,
    testRequestParams: testRequestParams,
    testFetch: testFetch,
    testXMLHttpRequest: testXMLHttpRequest
  };
})();

function request(options) {
  options = options || {};
  var url = options.url;
  var method = options.method || "GET";
  var data = options.data || null;
  var requestHeaders = options.requestHeaders || {};

  /* XMLHttpRequest */
  var xhr = new window.XMLHttpRequest();
  xhr.onreadystatechange = function() {
    // console.log("readyState:", this.readyState);
    if (this.readyState === XMLHttpRequest.DONE) {
      // console.log(this.getResponseHeader("content-type"));
      // console.log(this.response);
    }
  };
  xhr.open(method, url);
  Object.keys(requestHeaders).forEach(key => {
    xhr.setRequestHeader(key, requestHeaders[key]);
  });
  xhr.send(data);

  /* fetch */
  if (typeof window.fetch === "function") {
    fetch(url, {
      method: method,
      body: data,
      headers: requestHeaders
    });
  } else {
    console.warn('current brwoser don\'t support "fetch"');
  }
}
