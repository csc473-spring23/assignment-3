const webpack = require("webpack");
const express = require("express");
const devMiddleware = require("webpack-dev-middleware");
const webpackConfig = require("../webpack.config");

const compiler = webpack(webpackConfig);

const app = express();
const response = {
  result: {
    input: {
      address: { address: "4600 Silver Hill Rd, Washington, DC 20233" },
      benchmark: {
        isDefault: false,
        benchmarkDescription: "Public Address Ranges - Census 2020 Benchmark",
        id: "2020",
        benchmarkName: "Public_AR_Census2020",
      },
    },
    addressMatches: [
      {
        tigerLine: { side: "L", tigerLineId: "76355984" },
        coordinates: { x: -76.92743610939091, y: 38.84598652130676 },
        addressComponents: {
          zip: "20233",
          streetName: "SILVER HILL",
          preType: "",
          city: "WASHINGTON",
          preDirection: "",
          suffixDirection: "",
          fromAddress: "4600",
          state: "DC",
          suffixType: "RD",
          toAddress: "4700",
          suffixQualifier: "",
          preQualifier: "",
        },
        matchedAddress: "4600 SILVER HILL RD, WASHINGTON, DC, 20233",
      },
    ],
  },
};

app.use(devMiddleware(compiler));

app.get(/address/, (req, res) => {
  res.send(response);
});

app.get(/weather/, (req, res) => {
  res.send({});
});

app.listen(3000, () => console.log("Express listening on port 3000"));
