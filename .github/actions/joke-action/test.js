const request = require("request-promise");

const options = {
  method: "POST",
  uri: "https://heimdall.devex.elco.cloud/api/form",
  headers: {
    Accept: "application/json",
    "User-Agent": "Writing JavaScript action GitHub Skills course.",
  },
  body: {
    jira: "DEVEX-1234",
    prNumber: "262",
    customSpec:
      "Y29uc3QgeyBzcGVjSW5pdCB9ID0gcmVxdWlyZSgnLi4vLi4vLi4vdG9vbHMvc3BlY0luaXQnKTsKCmNvbnN0IEJSQU5EX05BTUUgPSAnb3JpZ2lucyc7Cgpjb250ZXh0KCdBc3NlcnRpb25zJywgKCkgPT4gewogIGNvbnN0IGFyZ3MgPSBDeXByZXNzLmVudigpOwogIGNvbnN0IGluaXREYXRhID0gc3BlY0luaXQoYXJncywgQlJBTkRfTkFNRSk7CiAgY29uc3QgeyB1cmwsIGJyYW5kS2V5LCBkYXRhIH0gPSBpbml0RGF0YTsKCiAgICBkZXNjcmliZShgT3JpZ2lucyBTYW5pdHk6ICR7dXJsfWAsICgpID0+IHsKICAgICAgaXQoJ1Zpc2l0cyBhbGwgbXBwcycsICgpID0+IHsKICAgICAgICBkYXRhLnVybHMubXBwcy5mb3JFYWNoKChtcHBVcmwpID0+IHsKICAgICAgICAgIGN5LmJhc2ljQXV0aEJyYW5kRW52KHsgYmFzZVVybDogdXJsLCBwYXRoOiBtcHBVcmwsIGJyYW5kQ29va2llczogZGF0YS5jb29raWVzLCBicmFuZEtleSwgY2FjaGVkOiBhcmdzLmNhY2hlZCB9KTsKICAgICAgICAgIGN5LmdldChkYXRhLmVsZW0ubXBwSXRlbSkuc2hvdWxkKCdoYXZlLmxlbmd0aC5ndGUnLCBkYXRhLm9wdGlvbnMubXBwVGVzdEl0ZW1Db3VudCkKICAgICAgICB9KQogICAgICB9KTsKICAgIH0pCn0pCg==",
    brands: "origins",
    env: "feature",
    domains: "us",
    testType: "1",
    url: "https://pr-636.dev.origins-com.devex.elco.cloud",
    platform: "pc",
    cached: true,
    waf: true,
    testTransaction: false,
    customCookies: "",
    imageTag: "latest",
    video: false,
    dashboard: false,
  },
  json: true,
};

async function startTests() {
  const res = await request(options);
  return res.testResults;
}

module.exports = startTests;
