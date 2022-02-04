window.BENCHMARK_DATA = {
  "lastUpdate": 1643991321438,
  "repoUrl": "https://github.com/aws-observability/aws-otel-collector",
  "entries": {
    "Benchmark": [
      {
        "commit": {
          "author": {
            "name": "sethAmazon",
            "username": "sethAmazon",
            "email": "81644108+sethAmazon@users.noreply.github.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "f57ae1bc811622cc0ec86ae0dd096fcf9e7e1b4b",
          "message": "Remove version filter and trigger performance tests on all passing runs (#842)",
          "timestamp": "2022-01-03T20:56:28Z",
          "url": "https://github.com/aws-observability/aws-otel-collector/commit/f57ae1bc811622cc0ec86ae0dd096fcf9e7e1b4b"
        },
        "date": 1641326707403,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "logzio_exporter_trace_mock",
            "value": "3.70",
            "unit": "%",
            "extra": "Trace (TPS: 100) - Average CPU Usage"
          },
          {
            "name": "logzio_exporter_trace_mock",
            "value": "89.18",
            "unit": "MB",
            "extra": "Trace (TPS: 100) - Average Memory Usage"
          },
          {
            "name": "datadog_exporter_trace_mock",
            "value": "6.29",
            "unit": "%",
            "extra": "Trace (TPS: 100) - Average CPU Usage"
          },
          {
            "name": "datadog_exporter_trace_mock",
            "value": "72.07",
            "unit": "MB",
            "extra": "Trace (TPS: 100) - Average Memory Usage"
          },
          {
            "name": "otlp_mock",
            "value": "3.88",
            "unit": "%",
            "extra": "Trace (TPS: 100) - Average CPU Usage"
          },
          {
            "name": "otlp_mock",
            "value": "71.02",
            "unit": "MB",
            "extra": "Trace (TPS: 100) - Average Memory Usage"
          },
          {
            "name": "otlp_trace",
            "value": "4.06",
            "unit": "%",
            "extra": "Trace (TPS: 100) - Average CPU Usage"
          },
          {
            "name": "otlp_trace",
            "value": "71.80",
            "unit": "MB",
            "extra": "Trace (TPS: 100) - Average Memory Usage"
          },
          {
            "name": "otlp_http_exporter_trace_mock",
            "value": "3.18",
            "unit": "%",
            "extra": "Trace (TPS: 100) - Average CPU Usage"
          },
          {
            "name": "otlp_http_exporter_trace_mock",
            "value": "69.51",
            "unit": "MB",
            "extra": "Trace (TPS: 100) - Average Memory Usage"
          },
          {
            "name": "xrayreceiver",
            "value": "4.71",
            "unit": "%",
            "extra": "Trace (TPS: 100) - Average CPU Usage"
          },
          {
            "name": "xrayreceiver",
            "value": "141.62",
            "unit": "MB",
            "extra": "Trace (TPS: 100) - Average Memory Usage"
          },
          {
            "name": "otlp_grpc_exporter_trace_mock",
            "value": "3.77",
            "unit": "%",
            "extra": "Trace (TPS: 100) - Average CPU Usage"
          },
          {
            "name": "otlp_grpc_exporter_trace_mock",
            "value": "129.18",
            "unit": "MB",
            "extra": "Trace (TPS: 100) - Average Memory Usage"
          },
          {
            "name": "jaeger_mock",
            "value": "2.36",
            "unit": "%",
            "extra": "Trace (TPS: 100) - Average CPU Usage"
          },
          {
            "name": "jaeger_mock",
            "value": "75.18",
            "unit": "MB",
            "extra": "Trace (TPS: 100) - Average Memory Usage"
          },
          {
            "name": "zipkin_mock",
            "value": "5.57",
            "unit": "%",
            "extra": "Trace (TPS: 100) - Average CPU Usage"
          },
          {
            "name": "zipkin_mock",
            "value": "77.92",
            "unit": "MB",
            "extra": "Trace (TPS: 100) - Average Memory Usage"
          },
          {
            "name": "sapm_exporter_trace_mock",
            "value": "3.61",
            "unit": "%",
            "extra": "Trace (TPS: 100) - Average CPU Usage"
          },
          {
            "name": "sapm_exporter_trace_mock",
            "value": "84.03",
            "unit": "MB",
            "extra": "Trace (TPS: 100) - Average Memory Usage"
          },
          {
            "name": "sapm_exporter_trace_mock",
            "value": "25.33",
            "unit": "%",
            "extra": "Trace (TPS: 1000) - Average CPU Usage"
          },
          {
            "name": "sapm_exporter_trace_mock",
            "value": "85.90",
            "unit": "MB",
            "extra": "Trace (TPS: 1000) - Average Memory Usage"
          },
          {
            "name": "zipkin_mock",
            "value": "28.93",
            "unit": "%",
            "extra": "Trace (TPS: 1000) - Average CPU Usage"
          },
          {
            "name": "zipkin_mock",
            "value": "458.96",
            "unit": "MB",
            "extra": "Trace (TPS: 1000) - Average Memory Usage"
          },
          {
            "name": "datadog_exporter_trace_mock",
            "value": "33.18",
            "unit": "%",
            "extra": "Trace (TPS: 1000) - Average CPU Usage"
          },
          {
            "name": "datadog_exporter_trace_mock",
            "value": "74.23",
            "unit": "MB",
            "extra": "Trace (TPS: 1000) - Average Memory Usage"
          },
          {
            "name": "xrayreceiver",
            "value": "34.16",
            "unit": "%",
            "extra": "Trace (TPS: 1000) - Average CPU Usage"
          },
          {
            "name": "xrayreceiver",
            "value": "579.24",
            "unit": "MB",
            "extra": "Trace (TPS: 1000) - Average Memory Usage"
          },
          {
            "name": "otlp_grpc_exporter_trace_mock",
            "value": "28.50",
            "unit": "%",
            "extra": "Trace (TPS: 1000) - Average CPU Usage"
          },
          {
            "name": "otlp_grpc_exporter_trace_mock",
            "value": "661.41",
            "unit": "MB",
            "extra": "Trace (TPS: 1000) - Average Memory Usage"
          },
          {
            "name": "otlp_trace",
            "value": "35.86",
            "unit": "%",
            "extra": "Trace (TPS: 1000) - Average CPU Usage"
          },
          {
            "name": "otlp_trace",
            "value": "77.83",
            "unit": "MB",
            "extra": "Trace (TPS: 1000) - Average Memory Usage"
          },
          {
            "name": "logzio_exporter_trace_mock",
            "value": "28.39",
            "unit": "%",
            "extra": "Trace (TPS: 1000) - Average CPU Usage"
          },
          {
            "name": "logzio_exporter_trace_mock",
            "value": "101.91",
            "unit": "MB",
            "extra": "Trace (TPS: 1000) - Average Memory Usage"
          },
          {
            "name": "otlp_mock",
            "value": "32.76",
            "unit": "%",
            "extra": "Trace (TPS: 1000) - Average CPU Usage"
          },
          {
            "name": "otlp_mock",
            "value": "76.31",
            "unit": "MB",
            "extra": "Trace (TPS: 1000) - Average Memory Usage"
          },
          {
            "name": "otlp_http_exporter_trace_mock",
            "value": "27.65",
            "unit": "%",
            "extra": "Trace (TPS: 1000) - Average CPU Usage"
          },
          {
            "name": "otlp_http_exporter_trace_mock",
            "value": "71.60",
            "unit": "MB",
            "extra": "Trace (TPS: 1000) - Average Memory Usage"
          },
          {
            "name": "jaeger_mock",
            "value": "16.82",
            "unit": "%",
            "extra": "Trace (TPS: 1000) - Average CPU Usage"
          },
          {
            "name": "jaeger_mock",
            "value": "152.34",
            "unit": "MB",
            "extra": "Trace (TPS: 1000) - Average Memory Usage"
          },
          {
            "name": "zipkin_mock",
            "value": "28.55",
            "unit": "%",
            "extra": "Trace (TPS: 5000) - Average CPU Usage"
          },
          {
            "name": "zipkin_mock",
            "value": "495.05",
            "unit": "MB",
            "extra": "Trace (TPS: 5000) - Average Memory Usage"
          },
          {
            "name": "otlp_trace",
            "value": "167.07",
            "unit": "%",
            "extra": "Trace (TPS: 5000) - Average CPU Usage"
          },
          {
            "name": "otlp_trace",
            "value": "12132.93",
            "unit": "MB",
            "extra": "Trace (TPS: 5000) - Average Memory Usage"
          },
          {
            "name": "logzio_exporter_trace_mock",
            "value": "105.16",
            "unit": "%",
            "extra": "Trace (TPS: 5000) - Average CPU Usage"
          },
          {
            "name": "logzio_exporter_trace_mock",
            "value": "123.67",
            "unit": "MB",
            "extra": "Trace (TPS: 5000) - Average Memory Usage"
          },
          {
            "name": "jaeger_mock",
            "value": "16.97",
            "unit": "%",
            "extra": "Trace (TPS: 5000) - Average CPU Usage"
          },
          {
            "name": "jaeger_mock",
            "value": "169.14",
            "unit": "MB",
            "extra": "Trace (TPS: 5000) - Average Memory Usage"
          },
          {
            "name": "xrayreceiver",
            "value": "54.02",
            "unit": "%",
            "extra": "Trace (TPS: 5000) - Average CPU Usage"
          },
          {
            "name": "xrayreceiver",
            "value": "1044.25",
            "unit": "MB",
            "extra": "Trace (TPS: 5000) - Average Memory Usage"
          },
          {
            "name": "otlp_grpc_exporter_trace_mock",
            "value": "124.05",
            "unit": "%",
            "extra": "Trace (TPS: 5000) - Average CPU Usage"
          },
          {
            "name": "otlp_grpc_exporter_trace_mock",
            "value": "3032.34",
            "unit": "MB",
            "extra": "Trace (TPS: 5000) - Average Memory Usage"
          },
          {
            "name": "sapm_exporter_trace_mock",
            "value": "104.55",
            "unit": "%",
            "extra": "Trace (TPS: 5000) - Average CPU Usage"
          },
          {
            "name": "sapm_exporter_trace_mock",
            "value": "91.97",
            "unit": "MB",
            "extra": "Trace (TPS: 5000) - Average Memory Usage"
          },
          {
            "name": "otlp_http_exporter_trace_mock",
            "value": "121.70",
            "unit": "%",
            "extra": "Trace (TPS: 5000) - Average CPU Usage"
          },
          {
            "name": "otlp_http_exporter_trace_mock",
            "value": "76.69",
            "unit": "MB",
            "extra": "Trace (TPS: 5000) - Average Memory Usage"
          },
          {
            "name": "otlp_mock",
            "value": "140.71",
            "unit": "%",
            "extra": "Trace (TPS: 5000) - Average CPU Usage"
          },
          {
            "name": "otlp_mock",
            "value": "13436.02",
            "unit": "MB",
            "extra": "Trace (TPS: 5000) - Average Memory Usage"
          },
          {
            "name": "datadog_exporter_trace_mock",
            "value": "131.67",
            "unit": "%",
            "extra": "Trace (TPS: 5000) - Average CPU Usage"
          },
          {
            "name": "datadog_exporter_trace_mock",
            "value": "82.44",
            "unit": "MB",
            "extra": "Trace (TPS: 5000) - Average Memory Usage"
          },
          {
            "name": "prometheus_mock",
            "value": "7.87",
            "unit": "%",
            "extra": "Metric (TPS: 5000) - Average CPU Usage"
          },
          {
            "name": "prometheus_mock",
            "value": "256.43",
            "unit": "MB",
            "extra": "Metric (TPS: 5000) - Average Memory Usage"
          },
          {
            "name": "statsd_mock",
            "value": "0.02",
            "unit": "%",
            "extra": "Metric (TPS: 5000) - Average CPU Usage"
          },
          {
            "name": "statsd_mock",
            "value": "59.30",
            "unit": "MB",
            "extra": "Metric (TPS: 5000) - Average Memory Usage"
          },
          {
            "name": "datadog_exporter_metric_mock",
            "value": "0.04",
            "unit": "%",
            "extra": "Metric (TPS: 5000) - Average CPU Usage"
          },
          {
            "name": "datadog_exporter_metric_mock",
            "value": "59.78",
            "unit": "MB",
            "extra": "Metric (TPS: 5000) - Average Memory Usage"
          },
          {
            "name": "statsd",
            "value": "25.83",
            "unit": "%",
            "extra": "Metric (TPS: 5000) - Average CPU Usage"
          },
          {
            "name": "statsd",
            "value": "68.83",
            "unit": "MB",
            "extra": "Metric (TPS: 5000) - Average Memory Usage"
          },
          {
            "name": "dynatrace_exporter_metric_mock",
            "value": "0.04",
            "unit": "%",
            "extra": "Metric (TPS: 5000) - Average CPU Usage"
          },
          {
            "name": "dynatrace_exporter_metric_mock",
            "value": "59.82",
            "unit": "MB",
            "extra": "Metric (TPS: 5000) - Average Memory Usage"
          },
          {
            "name": "prometheus_static",
            "value": "8.08",
            "unit": "%",
            "extra": "Metric (TPS: 5000) - Average CPU Usage"
          },
          {
            "name": "prometheus_static",
            "value": "258.53",
            "unit": "MB",
            "extra": "Metric (TPS: 5000) - Average Memory Usage"
          },
          {
            "name": "otlp_metric",
            "value": "0.05",
            "unit": "%",
            "extra": "Metric (TPS: 5000) - Average CPU Usage"
          },
          {
            "name": "otlp_metric",
            "value": "58.81",
            "unit": "MB",
            "extra": "Metric (TPS: 5000) - Average Memory Usage"
          },
          {
            "name": "otlp_http_exporter_metric_mock",
            "value": "0.05",
            "unit": "%",
            "extra": "Metric (TPS: 5000) - Average CPU Usage"
          },
          {
            "name": "otlp_http_exporter_metric_mock",
            "value": "60.19",
            "unit": "MB",
            "extra": "Metric (TPS: 5000) - Average Memory Usage"
          },
          {
            "name": "otlp_grpc_exporter_metric_mock",
            "value": "0.04",
            "unit": "%",
            "extra": "Metric (TPS: 5000) - Average CPU Usage"
          },
          {
            "name": "otlp_grpc_exporter_metric_mock",
            "value": "60.01",
            "unit": "MB",
            "extra": "Metric (TPS: 5000) - Average Memory Usage"
          },
          {
            "name": "signalfx_exporter_metric_mock",
            "value": "0.05",
            "unit": "%",
            "extra": "Metric (TPS: 5000) - Average CPU Usage"
          },
          {
            "name": "signalfx_exporter_metric_mock",
            "value": "60.27",
            "unit": "MB",
            "extra": "Metric (TPS: 5000) - Average Memory Usage"
          },
          {
            "name": "prometheus_static",
            "value": "0.13",
            "unit": "%",
            "extra": "Metric (TPS: 100) - Average CPU Usage"
          },
          {
            "name": "prometheus_static",
            "value": "72.42",
            "unit": "MB",
            "extra": "Metric (TPS: 100) - Average Memory Usage"
          },
          {
            "name": "prometheus_mock",
            "value": "0.13",
            "unit": "%",
            "extra": "Metric (TPS: 100) - Average CPU Usage"
          },
          {
            "name": "prometheus_mock",
            "value": "72.59",
            "unit": "MB",
            "extra": "Metric (TPS: 100) - Average Memory Usage"
          },
          {
            "name": "dynatrace_exporter_metric_mock",
            "value": "0.04",
            "unit": "%",
            "extra": "Metric (TPS: 100) - Average CPU Usage"
          },
          {
            "name": "dynatrace_exporter_metric_mock",
            "value": "60.79",
            "unit": "MB",
            "extra": "Metric (TPS: 100) - Average Memory Usage"
          },
          {
            "name": "datadog_exporter_metric_mock",
            "value": "0.04",
            "unit": "%",
            "extra": "Metric (TPS: 100) - Average CPU Usage"
          },
          {
            "name": "datadog_exporter_metric_mock",
            "value": "59.62",
            "unit": "MB",
            "extra": "Metric (TPS: 100) - Average Memory Usage"
          },
          {
            "name": "otlp_grpc_exporter_metric_mock",
            "value": "0.05",
            "unit": "%",
            "extra": "Metric (TPS: 100) - Average CPU Usage"
          },
          {
            "name": "otlp_grpc_exporter_metric_mock",
            "value": "61.09",
            "unit": "MB",
            "extra": "Metric (TPS: 100) - Average Memory Usage"
          },
          {
            "name": "signalfx_exporter_metric_mock",
            "value": "0.04",
            "unit": "%",
            "extra": "Metric (TPS: 100) - Average CPU Usage"
          },
          {
            "name": "signalfx_exporter_metric_mock",
            "value": "59.95",
            "unit": "MB",
            "extra": "Metric (TPS: 100) - Average Memory Usage"
          },
          {
            "name": "statsd_mock",
            "value": "0.01",
            "unit": "%",
            "extra": "Metric (TPS: 100) - Average CPU Usage"
          },
          {
            "name": "statsd_mock",
            "value": "59.91",
            "unit": "MB",
            "extra": "Metric (TPS: 100) - Average Memory Usage"
          },
          {
            "name": "otlp_http_exporter_metric_mock",
            "value": "0.04",
            "unit": "%",
            "extra": "Metric (TPS: 100) - Average CPU Usage"
          },
          {
            "name": "otlp_http_exporter_metric_mock",
            "value": "58.32",
            "unit": "MB",
            "extra": "Metric (TPS: 100) - Average Memory Usage"
          },
          {
            "name": "statsd",
            "value": "0.56",
            "unit": "%",
            "extra": "Metric (TPS: 100) - Average CPU Usage"
          },
          {
            "name": "statsd",
            "value": "67.37",
            "unit": "MB",
            "extra": "Metric (TPS: 100) - Average Memory Usage"
          },
          {
            "name": "otlp_metric",
            "value": "0.04",
            "unit": "%",
            "extra": "Metric (TPS: 100) - Average CPU Usage"
          },
          {
            "name": "otlp_metric",
            "value": "58.77",
            "unit": "MB",
            "extra": "Metric (TPS: 100) - Average Memory Usage"
          },
          {
            "name": "signalfx_exporter_metric_mock",
            "value": "0.04",
            "unit": "%",
            "extra": "Metric (TPS: 1000) - Average CPU Usage"
          },
          {
            "name": "signalfx_exporter_metric_mock",
            "value": "60.00",
            "unit": "MB",
            "extra": "Metric (TPS: 1000) - Average Memory Usage"
          },
          {
            "name": "statsd_mock",
            "value": "0.02",
            "unit": "%",
            "extra": "Metric (TPS: 1000) - Average CPU Usage"
          },
          {
            "name": "statsd_mock",
            "value": "58.89",
            "unit": "MB",
            "extra": "Metric (TPS: 1000) - Average Memory Usage"
          },
          {
            "name": "otlp_grpc_exporter_metric_mock",
            "value": "0.04",
            "unit": "%",
            "extra": "Metric (TPS: 1000) - Average CPU Usage"
          },
          {
            "name": "otlp_grpc_exporter_metric_mock",
            "value": "60.98",
            "unit": "MB",
            "extra": "Metric (TPS: 1000) - Average Memory Usage"
          },
          {
            "name": "dynatrace_exporter_metric_mock",
            "value": "0.04",
            "unit": "%",
            "extra": "Metric (TPS: 1000) - Average CPU Usage"
          },
          {
            "name": "dynatrace_exporter_metric_mock",
            "value": "58.67",
            "unit": "MB",
            "extra": "Metric (TPS: 1000) - Average Memory Usage"
          },
          {
            "name": "datadog_exporter_metric_mock",
            "value": "0.05",
            "unit": "%",
            "extra": "Metric (TPS: 1000) - Average CPU Usage"
          },
          {
            "name": "datadog_exporter_metric_mock",
            "value": "62.48",
            "unit": "MB",
            "extra": "Metric (TPS: 1000) - Average Memory Usage"
          },
          {
            "name": "prometheus_static",
            "value": "1.30",
            "unit": "%",
            "extra": "Metric (TPS: 1000) - Average CPU Usage"
          },
          {
            "name": "prometheus_static",
            "value": "116.67",
            "unit": "MB",
            "extra": "Metric (TPS: 1000) - Average Memory Usage"
          },
          {
            "name": "otlp_metric",
            "value": "0.08",
            "unit": "%",
            "extra": "Metric (TPS: 1000) - Average CPU Usage"
          },
          {
            "name": "otlp_metric",
            "value": "59.66",
            "unit": "MB",
            "extra": "Metric (TPS: 1000) - Average Memory Usage"
          },
          {
            "name": "statsd",
            "value": "5.17",
            "unit": "%",
            "extra": "Metric (TPS: 1000) - Average CPU Usage"
          },
          {
            "name": "statsd",
            "value": "68.96",
            "unit": "MB",
            "extra": "Metric (TPS: 1000) - Average Memory Usage"
          },
          {
            "name": "otlp_http_exporter_metric_mock",
            "value": "0.04",
            "unit": "%",
            "extra": "Metric (TPS: 1000) - Average CPU Usage"
          },
          {
            "name": "otlp_http_exporter_metric_mock",
            "value": "59.89",
            "unit": "MB",
            "extra": "Metric (TPS: 1000) - Average Memory Usage"
          },
          {
            "name": "prometheus_mock",
            "value": "1.31",
            "unit": "%",
            "extra": "Metric (TPS: 1000) - Average CPU Usage"
          },
          {
            "name": "prometheus_mock",
            "value": "115.16",
            "unit": "MB",
            "extra": "Metric (TPS: 1000) - Average Memory Usage"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Khanh Nguyen",
            "username": "khanhntd",
            "email": "91758108+khanhntd@users.noreply.github.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "94d47a077e16882a635d15d9a7e296ac4e0e374d",
          "message": "Add all dev branches to CI (#861)",
          "timestamp": "2022-01-06T22:19:19Z",
          "url": "https://github.com/aws-observability/aws-otel-collector/commit/94d47a077e16882a635d15d9a7e296ac4e0e374d"
        },
        "date": 1641530286489,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "logzio_exporter_trace_mock",
            "value": "3.82",
            "unit": "%",
            "extra": "Trace (TPS: 100) - Average CPU Usage"
          },
          {
            "name": "logzio_exporter_trace_mock",
            "value": "90.59",
            "unit": "MB",
            "extra": "Trace (TPS: 100) - Average Memory Usage"
          },
          {
            "name": "datadog_exporter_trace_mock",
            "value": "5.01",
            "unit": "%",
            "extra": "Trace (TPS: 100) - Average CPU Usage"
          },
          {
            "name": "datadog_exporter_trace_mock",
            "value": "72.55",
            "unit": "MB",
            "extra": "Trace (TPS: 100) - Average Memory Usage"
          },
          {
            "name": "otlp_mock",
            "value": "4.22",
            "unit": "%",
            "extra": "Trace (TPS: 100) - Average CPU Usage"
          },
          {
            "name": "otlp_mock",
            "value": "70.48",
            "unit": "MB",
            "extra": "Trace (TPS: 100) - Average Memory Usage"
          },
          {
            "name": "otlp_trace",
            "value": "4.84",
            "unit": "%",
            "extra": "Trace (TPS: 100) - Average CPU Usage"
          },
          {
            "name": "otlp_trace",
            "value": "72.42",
            "unit": "MB",
            "extra": "Trace (TPS: 100) - Average Memory Usage"
          },
          {
            "name": "otlp_http_exporter_trace_mock",
            "value": "3.71",
            "unit": "%",
            "extra": "Trace (TPS: 100) - Average CPU Usage"
          },
          {
            "name": "otlp_http_exporter_trace_mock",
            "value": "69.68",
            "unit": "MB",
            "extra": "Trace (TPS: 100) - Average Memory Usage"
          },
          {
            "name": "xrayreceiver",
            "value": "4.93",
            "unit": "%",
            "extra": "Trace (TPS: 100) - Average CPU Usage"
          },
          {
            "name": "xrayreceiver",
            "value": "140.78",
            "unit": "MB",
            "extra": "Trace (TPS: 100) - Average Memory Usage"
          },
          {
            "name": "otlp_grpc_exporter_trace_mock",
            "value": "3.13",
            "unit": "%",
            "extra": "Trace (TPS: 100) - Average CPU Usage"
          },
          {
            "name": "otlp_grpc_exporter_trace_mock",
            "value": "131.69",
            "unit": "MB",
            "extra": "Trace (TPS: 100) - Average Memory Usage"
          },
          {
            "name": "jaeger_mock",
            "value": "2.34",
            "unit": "%",
            "extra": "Trace (TPS: 100) - Average CPU Usage"
          },
          {
            "name": "jaeger_mock",
            "value": "74.11",
            "unit": "MB",
            "extra": "Trace (TPS: 100) - Average Memory Usage"
          },
          {
            "name": "zipkin_mock",
            "value": "5.56",
            "unit": "%",
            "extra": "Trace (TPS: 100) - Average CPU Usage"
          },
          {
            "name": "zipkin_mock",
            "value": "77.71",
            "unit": "MB",
            "extra": "Trace (TPS: 100) - Average Memory Usage"
          },
          {
            "name": "sapm_exporter_trace_mock",
            "value": "2.96",
            "unit": "%",
            "extra": "Trace (TPS: 100) - Average CPU Usage"
          },
          {
            "name": "sapm_exporter_trace_mock",
            "value": "83.71",
            "unit": "MB",
            "extra": "Trace (TPS: 100) - Average Memory Usage"
          },
          {
            "name": "sapm_exporter_trace_mock",
            "value": "28.25",
            "unit": "%",
            "extra": "Trace (TPS: 1000) - Average CPU Usage"
          },
          {
            "name": "sapm_exporter_trace_mock",
            "value": "86.10",
            "unit": "MB",
            "extra": "Trace (TPS: 1000) - Average Memory Usage"
          },
          {
            "name": "zipkin_mock",
            "value": "30.22",
            "unit": "%",
            "extra": "Trace (TPS: 1000) - Average CPU Usage"
          },
          {
            "name": "zipkin_mock",
            "value": "467.75",
            "unit": "MB",
            "extra": "Trace (TPS: 1000) - Average Memory Usage"
          },
          {
            "name": "datadog_exporter_trace_mock",
            "value": "33.14",
            "unit": "%",
            "extra": "Trace (TPS: 1000) - Average CPU Usage"
          },
          {
            "name": "datadog_exporter_trace_mock",
            "value": "73.77",
            "unit": "MB",
            "extra": "Trace (TPS: 1000) - Average Memory Usage"
          },
          {
            "name": "xrayreceiver",
            "value": "33.61",
            "unit": "%",
            "extra": "Trace (TPS: 1000) - Average CPU Usage"
          },
          {
            "name": "xrayreceiver",
            "value": "606.89",
            "unit": "MB",
            "extra": "Trace (TPS: 1000) - Average Memory Usage"
          },
          {
            "name": "otlp_grpc_exporter_trace_mock",
            "value": "27.67",
            "unit": "%",
            "extra": "Trace (TPS: 1000) - Average CPU Usage"
          },
          {
            "name": "otlp_grpc_exporter_trace_mock",
            "value": "656.84",
            "unit": "MB",
            "extra": "Trace (TPS: 1000) - Average Memory Usage"
          },
          {
            "name": "otlp_trace",
            "value": "35.84",
            "unit": "%",
            "extra": "Trace (TPS: 1000) - Average CPU Usage"
          },
          {
            "name": "otlp_trace",
            "value": "78.32",
            "unit": "MB",
            "extra": "Trace (TPS: 1000) - Average Memory Usage"
          },
          {
            "name": "logzio_exporter_trace_mock",
            "value": "30.05",
            "unit": "%",
            "extra": "Trace (TPS: 1000) - Average CPU Usage"
          },
          {
            "name": "logzio_exporter_trace_mock",
            "value": "101.30",
            "unit": "MB",
            "extra": "Trace (TPS: 1000) - Average Memory Usage"
          },
          {
            "name": "otlp_mock",
            "value": "34.01",
            "unit": "%",
            "extra": "Trace (TPS: 1000) - Average CPU Usage"
          },
          {
            "name": "otlp_mock",
            "value": "75.17",
            "unit": "MB",
            "extra": "Trace (TPS: 1000) - Average Memory Usage"
          },
          {
            "name": "otlp_http_exporter_trace_mock",
            "value": "26.90",
            "unit": "%",
            "extra": "Trace (TPS: 1000) - Average CPU Usage"
          },
          {
            "name": "otlp_http_exporter_trace_mock",
            "value": "72.32",
            "unit": "MB",
            "extra": "Trace (TPS: 1000) - Average Memory Usage"
          },
          {
            "name": "jaeger_mock",
            "value": "15.88",
            "unit": "%",
            "extra": "Trace (TPS: 1000) - Average CPU Usage"
          },
          {
            "name": "jaeger_mock",
            "value": "150.54",
            "unit": "MB",
            "extra": "Trace (TPS: 1000) - Average Memory Usage"
          },
          {
            "name": "zipkin_mock",
            "value": "28.44",
            "unit": "%",
            "extra": "Trace (TPS: 5000) - Average CPU Usage"
          },
          {
            "name": "zipkin_mock",
            "value": "503.91",
            "unit": "MB",
            "extra": "Trace (TPS: 5000) - Average Memory Usage"
          },
          {
            "name": "otlp_trace",
            "value": "174.77",
            "unit": "%",
            "extra": "Trace (TPS: 5000) - Average CPU Usage"
          },
          {
            "name": "otlp_trace",
            "value": "12741.63",
            "unit": "MB",
            "extra": "Trace (TPS: 5000) - Average Memory Usage"
          },
          {
            "name": "logzio_exporter_trace_mock",
            "value": "116.64",
            "unit": "%",
            "extra": "Trace (TPS: 5000) - Average CPU Usage"
          },
          {
            "name": "logzio_exporter_trace_mock",
            "value": "123.15",
            "unit": "MB",
            "extra": "Trace (TPS: 5000) - Average Memory Usage"
          },
          {
            "name": "jaeger_mock",
            "value": "16.19",
            "unit": "%",
            "extra": "Trace (TPS: 5000) - Average CPU Usage"
          },
          {
            "name": "jaeger_mock",
            "value": "165.45",
            "unit": "MB",
            "extra": "Trace (TPS: 5000) - Average Memory Usage"
          },
          {
            "name": "xrayreceiver",
            "value": "54.14",
            "unit": "%",
            "extra": "Trace (TPS: 5000) - Average CPU Usage"
          },
          {
            "name": "xrayreceiver",
            "value": "974.94",
            "unit": "MB",
            "extra": "Trace (TPS: 5000) - Average Memory Usage"
          },
          {
            "name": "otlp_grpc_exporter_trace_mock",
            "value": "113.63",
            "unit": "%",
            "extra": "Trace (TPS: 5000) - Average CPU Usage"
          },
          {
            "name": "otlp_grpc_exporter_trace_mock",
            "value": "3205.97",
            "unit": "MB",
            "extra": "Trace (TPS: 5000) - Average Memory Usage"
          },
          {
            "name": "sapm_exporter_trace_mock",
            "value": "118.33",
            "unit": "%",
            "extra": "Trace (TPS: 5000) - Average CPU Usage"
          },
          {
            "name": "sapm_exporter_trace_mock",
            "value": "91.98",
            "unit": "MB",
            "extra": "Trace (TPS: 5000) - Average Memory Usage"
          },
          {
            "name": "otlp_http_exporter_trace_mock",
            "value": "119.30",
            "unit": "%",
            "extra": "Trace (TPS: 5000) - Average CPU Usage"
          },
          {
            "name": "otlp_http_exporter_trace_mock",
            "value": "77.31",
            "unit": "MB",
            "extra": "Trace (TPS: 5000) - Average Memory Usage"
          },
          {
            "name": "otlp_mock",
            "value": "140.25",
            "unit": "%",
            "extra": "Trace (TPS: 5000) - Average CPU Usage"
          },
          {
            "name": "otlp_mock",
            "value": "14075.07",
            "unit": "MB",
            "extra": "Trace (TPS: 5000) - Average Memory Usage"
          },
          {
            "name": "datadog_exporter_trace_mock",
            "value": "128.56",
            "unit": "%",
            "extra": "Trace (TPS: 5000) - Average CPU Usage"
          },
          {
            "name": "datadog_exporter_trace_mock",
            "value": "82.28",
            "unit": "MB",
            "extra": "Trace (TPS: 5000) - Average Memory Usage"
          },
          {
            "name": "prometheus_mock",
            "value": "8.26",
            "unit": "%",
            "extra": "Metric (TPS: 5000) - Average CPU Usage"
          },
          {
            "name": "prometheus_mock",
            "value": "259.11",
            "unit": "MB",
            "extra": "Metric (TPS: 5000) - Average Memory Usage"
          },
          {
            "name": "statsd_mock",
            "value": "0.01",
            "unit": "%",
            "extra": "Metric (TPS: 5000) - Average CPU Usage"
          },
          {
            "name": "statsd_mock",
            "value": "58.11",
            "unit": "MB",
            "extra": "Metric (TPS: 5000) - Average Memory Usage"
          },
          {
            "name": "datadog_exporter_metric_mock",
            "value": "0.04",
            "unit": "%",
            "extra": "Metric (TPS: 5000) - Average CPU Usage"
          },
          {
            "name": "datadog_exporter_metric_mock",
            "value": "58.16",
            "unit": "MB",
            "extra": "Metric (TPS: 5000) - Average Memory Usage"
          },
          {
            "name": "statsd",
            "value": "26.77",
            "unit": "%",
            "extra": "Metric (TPS: 5000) - Average CPU Usage"
          },
          {
            "name": "statsd",
            "value": "68.71",
            "unit": "MB",
            "extra": "Metric (TPS: 5000) - Average Memory Usage"
          },
          {
            "name": "dynatrace_exporter_metric_mock",
            "value": "0.04",
            "unit": "%",
            "extra": "Metric (TPS: 5000) - Average CPU Usage"
          },
          {
            "name": "dynatrace_exporter_metric_mock",
            "value": "58.73",
            "unit": "MB",
            "extra": "Metric (TPS: 5000) - Average Memory Usage"
          },
          {
            "name": "prometheus_static",
            "value": "7.76",
            "unit": "%",
            "extra": "Metric (TPS: 5000) - Average CPU Usage"
          },
          {
            "name": "prometheus_static",
            "value": "263.53",
            "unit": "MB",
            "extra": "Metric (TPS: 5000) - Average Memory Usage"
          },
          {
            "name": "otlp_metric",
            "value": "0.05",
            "unit": "%",
            "extra": "Metric (TPS: 5000) - Average CPU Usage"
          },
          {
            "name": "otlp_metric",
            "value": "59.37",
            "unit": "MB",
            "extra": "Metric (TPS: 5000) - Average Memory Usage"
          },
          {
            "name": "otlp_http_exporter_metric_mock",
            "value": "0.04",
            "unit": "%",
            "extra": "Metric (TPS: 5000) - Average CPU Usage"
          },
          {
            "name": "otlp_http_exporter_metric_mock",
            "value": "59.03",
            "unit": "MB",
            "extra": "Metric (TPS: 5000) - Average Memory Usage"
          },
          {
            "name": "otlp_grpc_exporter_metric_mock",
            "value": "0.04",
            "unit": "%",
            "extra": "Metric (TPS: 5000) - Average CPU Usage"
          },
          {
            "name": "otlp_grpc_exporter_metric_mock",
            "value": "59.22",
            "unit": "MB",
            "extra": "Metric (TPS: 5000) - Average Memory Usage"
          },
          {
            "name": "signalfx_exporter_metric_mock",
            "value": "0.04",
            "unit": "%",
            "extra": "Metric (TPS: 5000) - Average CPU Usage"
          },
          {
            "name": "signalfx_exporter_metric_mock",
            "value": "60.50",
            "unit": "MB",
            "extra": "Metric (TPS: 5000) - Average Memory Usage"
          },
          {
            "name": "prometheus_static",
            "value": "0.13",
            "unit": "%",
            "extra": "Metric (TPS: 100) - Average CPU Usage"
          },
          {
            "name": "prometheus_static",
            "value": "72.68",
            "unit": "MB",
            "extra": "Metric (TPS: 100) - Average Memory Usage"
          },
          {
            "name": "prometheus_mock",
            "value": "0.13",
            "unit": "%",
            "extra": "Metric (TPS: 100) - Average CPU Usage"
          },
          {
            "name": "prometheus_mock",
            "value": "73.12",
            "unit": "MB",
            "extra": "Metric (TPS: 100) - Average Memory Usage"
          },
          {
            "name": "dynatrace_exporter_metric_mock",
            "value": "0.04",
            "unit": "%",
            "extra": "Metric (TPS: 100) - Average CPU Usage"
          },
          {
            "name": "dynatrace_exporter_metric_mock",
            "value": "58.03",
            "unit": "MB",
            "extra": "Metric (TPS: 100) - Average Memory Usage"
          },
          {
            "name": "datadog_exporter_metric_mock",
            "value": "0.05",
            "unit": "%",
            "extra": "Metric (TPS: 100) - Average CPU Usage"
          },
          {
            "name": "datadog_exporter_metric_mock",
            "value": "62.72",
            "unit": "MB",
            "extra": "Metric (TPS: 100) - Average Memory Usage"
          },
          {
            "name": "otlp_grpc_exporter_metric_mock",
            "value": "0.05",
            "unit": "%",
            "extra": "Metric (TPS: 100) - Average CPU Usage"
          },
          {
            "name": "otlp_grpc_exporter_metric_mock",
            "value": "58.43",
            "unit": "MB",
            "extra": "Metric (TPS: 100) - Average Memory Usage"
          },
          {
            "name": "signalfx_exporter_metric_mock",
            "value": "0.04",
            "unit": "%",
            "extra": "Metric (TPS: 100) - Average CPU Usage"
          },
          {
            "name": "signalfx_exporter_metric_mock",
            "value": "60.05",
            "unit": "MB",
            "extra": "Metric (TPS: 100) - Average Memory Usage"
          },
          {
            "name": "statsd_mock",
            "value": "0.01",
            "unit": "%",
            "extra": "Metric (TPS: 100) - Average CPU Usage"
          },
          {
            "name": "statsd_mock",
            "value": "58.83",
            "unit": "MB",
            "extra": "Metric (TPS: 100) - Average Memory Usage"
          },
          {
            "name": "otlp_http_exporter_metric_mock",
            "value": "0.04",
            "unit": "%",
            "extra": "Metric (TPS: 100) - Average CPU Usage"
          },
          {
            "name": "otlp_http_exporter_metric_mock",
            "value": "58.28",
            "unit": "MB",
            "extra": "Metric (TPS: 100) - Average Memory Usage"
          },
          {
            "name": "statsd",
            "value": "0.73",
            "unit": "%",
            "extra": "Metric (TPS: 100) - Average CPU Usage"
          },
          {
            "name": "statsd",
            "value": "68.70",
            "unit": "MB",
            "extra": "Metric (TPS: 100) - Average Memory Usage"
          },
          {
            "name": "otlp_metric",
            "value": "0.04",
            "unit": "%",
            "extra": "Metric (TPS: 100) - Average CPU Usage"
          },
          {
            "name": "otlp_metric",
            "value": "58.35",
            "unit": "MB",
            "extra": "Metric (TPS: 100) - Average Memory Usage"
          },
          {
            "name": "signalfx_exporter_metric_mock",
            "value": "0.04",
            "unit": "%",
            "extra": "Metric (TPS: 1000) - Average CPU Usage"
          },
          {
            "name": "signalfx_exporter_metric_mock",
            "value": "60.48",
            "unit": "MB",
            "extra": "Metric (TPS: 1000) - Average Memory Usage"
          },
          {
            "name": "statsd_mock",
            "value": "0.02",
            "unit": "%",
            "extra": "Metric (TPS: 1000) - Average CPU Usage"
          },
          {
            "name": "statsd_mock",
            "value": "60.34",
            "unit": "MB",
            "extra": "Metric (TPS: 1000) - Average Memory Usage"
          },
          {
            "name": "otlp_grpc_exporter_metric_mock",
            "value": "0.04",
            "unit": "%",
            "extra": "Metric (TPS: 1000) - Average CPU Usage"
          },
          {
            "name": "otlp_grpc_exporter_metric_mock",
            "value": "58.54",
            "unit": "MB",
            "extra": "Metric (TPS: 1000) - Average Memory Usage"
          },
          {
            "name": "dynatrace_exporter_metric_mock",
            "value": "0.04",
            "unit": "%",
            "extra": "Metric (TPS: 1000) - Average CPU Usage"
          },
          {
            "name": "dynatrace_exporter_metric_mock",
            "value": "59.90",
            "unit": "MB",
            "extra": "Metric (TPS: 1000) - Average Memory Usage"
          },
          {
            "name": "datadog_exporter_metric_mock",
            "value": "0.05",
            "unit": "%",
            "extra": "Metric (TPS: 1000) - Average CPU Usage"
          },
          {
            "name": "datadog_exporter_metric_mock",
            "value": "59.80",
            "unit": "MB",
            "extra": "Metric (TPS: 1000) - Average Memory Usage"
          },
          {
            "name": "prometheus_static",
            "value": "1.29",
            "unit": "%",
            "extra": "Metric (TPS: 1000) - Average CPU Usage"
          },
          {
            "name": "prometheus_static",
            "value": "116.69",
            "unit": "MB",
            "extra": "Metric (TPS: 1000) - Average Memory Usage"
          },
          {
            "name": "otlp_metric",
            "value": "0.04",
            "unit": "%",
            "extra": "Metric (TPS: 1000) - Average CPU Usage"
          },
          {
            "name": "otlp_metric",
            "value": "58.46",
            "unit": "MB",
            "extra": "Metric (TPS: 1000) - Average Memory Usage"
          },
          {
            "name": "statsd",
            "value": "5.27",
            "unit": "%",
            "extra": "Metric (TPS: 1000) - Average CPU Usage"
          },
          {
            "name": "statsd",
            "value": "68.27",
            "unit": "MB",
            "extra": "Metric (TPS: 1000) - Average Memory Usage"
          },
          {
            "name": "otlp_http_exporter_metric_mock",
            "value": "0.04",
            "unit": "%",
            "extra": "Metric (TPS: 1000) - Average CPU Usage"
          },
          {
            "name": "otlp_http_exporter_metric_mock",
            "value": "59.96",
            "unit": "MB",
            "extra": "Metric (TPS: 1000) - Average Memory Usage"
          },
          {
            "name": "prometheus_mock",
            "value": "1.34",
            "unit": "%",
            "extra": "Metric (TPS: 1000) - Average CPU Usage"
          },
          {
            "name": "prometheus_mock",
            "value": "115.50",
            "unit": "MB",
            "extra": "Metric (TPS: 1000) - Average Memory Usage"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Khanh Nguyen",
            "username": "khanhntd",
            "email": "91758108+khanhntd@users.noreply.github.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "e5751cddec558235ab0eeda1f53e99d6c99d7b66",
          "message": "Add buildtool kit for ADOT collector image (#860)",
          "timestamp": "2022-01-11T17:30:51Z",
          "url": "https://github.com/aws-observability/aws-otel-collector/commit/e5751cddec558235ab0eeda1f53e99d6c99d7b66"
        },
        "date": 1641934409898,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "logzio_exporter_trace_mock",
            "value": "3.30",
            "unit": "%",
            "extra": "Trace (TPS: 100) - Average CPU Usage"
          },
          {
            "name": "logzio_exporter_trace_mock",
            "value": "90.05",
            "unit": "MB",
            "extra": "Trace (TPS: 100) - Average Memory Usage"
          },
          {
            "name": "datadog_exporter_trace_mock",
            "value": "5.39",
            "unit": "%",
            "extra": "Trace (TPS: 100) - Average CPU Usage"
          },
          {
            "name": "datadog_exporter_trace_mock",
            "value": "72.49",
            "unit": "MB",
            "extra": "Trace (TPS: 100) - Average Memory Usage"
          },
          {
            "name": "otlp_mock",
            "value": "4.73",
            "unit": "%",
            "extra": "Trace (TPS: 100) - Average CPU Usage"
          },
          {
            "name": "otlp_mock",
            "value": "71.88",
            "unit": "MB",
            "extra": "Trace (TPS: 100) - Average Memory Usage"
          },
          {
            "name": "otlp_http_exporter_trace_mock",
            "value": "3.11",
            "unit": "%",
            "extra": "Trace (TPS: 100) - Average CPU Usage"
          },
          {
            "name": "otlp_http_exporter_trace_mock",
            "value": "70.26",
            "unit": "MB",
            "extra": "Trace (TPS: 100) - Average Memory Usage"
          },
          {
            "name": "otlp_grpc_exporter_trace_mock",
            "value": "3.89",
            "unit": "%",
            "extra": "Trace (TPS: 100) - Average CPU Usage"
          },
          {
            "name": "otlp_grpc_exporter_trace_mock",
            "value": "129.95",
            "unit": "MB",
            "extra": "Trace (TPS: 100) - Average Memory Usage"
          },
          {
            "name": "jaeger_mock",
            "value": "2.49",
            "unit": "%",
            "extra": "Trace (TPS: 100) - Average CPU Usage"
          },
          {
            "name": "jaeger_mock",
            "value": "75.90",
            "unit": "MB",
            "extra": "Trace (TPS: 100) - Average Memory Usage"
          },
          {
            "name": "zipkin_mock",
            "value": "5.75",
            "unit": "%",
            "extra": "Trace (TPS: 100) - Average CPU Usage"
          },
          {
            "name": "zipkin_mock",
            "value": "78.45",
            "unit": "MB",
            "extra": "Trace (TPS: 100) - Average Memory Usage"
          },
          {
            "name": "sapm_exporter_trace_mock",
            "value": "3.21",
            "unit": "%",
            "extra": "Trace (TPS: 100) - Average CPU Usage"
          },
          {
            "name": "sapm_exporter_trace_mock",
            "value": "84.36",
            "unit": "MB",
            "extra": "Trace (TPS: 100) - Average Memory Usage"
          },
          {
            "name": "xrayreceiver_mock",
            "value": "4.55",
            "unit": "%",
            "extra": "Trace (TPS: 100) - Average CPU Usage"
          },
          {
            "name": "xrayreceiver_mock",
            "value": "142.17",
            "unit": "MB",
            "extra": "Trace (TPS: 100) - Average Memory Usage"
          },
          {
            "name": "sapm_exporter_trace_mock",
            "value": "25.79",
            "unit": "%",
            "extra": "Trace (TPS: 1000) - Average CPU Usage"
          },
          {
            "name": "sapm_exporter_trace_mock",
            "value": "86.72",
            "unit": "MB",
            "extra": "Trace (TPS: 1000) - Average Memory Usage"
          },
          {
            "name": "zipkin_mock",
            "value": "29.63",
            "unit": "%",
            "extra": "Trace (TPS: 1000) - Average CPU Usage"
          },
          {
            "name": "zipkin_mock",
            "value": "486.71",
            "unit": "MB",
            "extra": "Trace (TPS: 1000) - Average Memory Usage"
          },
          {
            "name": "datadog_exporter_trace_mock",
            "value": "32.76",
            "unit": "%",
            "extra": "Trace (TPS: 1000) - Average CPU Usage"
          },
          {
            "name": "datadog_exporter_trace_mock",
            "value": "75.01",
            "unit": "MB",
            "extra": "Trace (TPS: 1000) - Average Memory Usage"
          },
          {
            "name": "xrayreceiver_mock",
            "value": "25.83",
            "unit": "%",
            "extra": "Trace (TPS: 1000) - Average CPU Usage"
          },
          {
            "name": "xrayreceiver_mock",
            "value": "529.63",
            "unit": "MB",
            "extra": "Trace (TPS: 1000) - Average Memory Usage"
          },
          {
            "name": "otlp_grpc_exporter_trace_mock",
            "value": "30.14",
            "unit": "%",
            "extra": "Trace (TPS: 1000) - Average CPU Usage"
          },
          {
            "name": "otlp_grpc_exporter_trace_mock",
            "value": "698.77",
            "unit": "MB",
            "extra": "Trace (TPS: 1000) - Average Memory Usage"
          },
          {
            "name": "logzio_exporter_trace_mock",
            "value": "28.61",
            "unit": "%",
            "extra": "Trace (TPS: 1000) - Average CPU Usage"
          },
          {
            "name": "logzio_exporter_trace_mock",
            "value": "101.94",
            "unit": "MB",
            "extra": "Trace (TPS: 1000) - Average Memory Usage"
          },
          {
            "name": "otlp_mock",
            "value": "36.44",
            "unit": "%",
            "extra": "Trace (TPS: 1000) - Average CPU Usage"
          },
          {
            "name": "otlp_mock",
            "value": "76.65",
            "unit": "MB",
            "extra": "Trace (TPS: 1000) - Average Memory Usage"
          },
          {
            "name": "otlp_http_exporter_trace_mock",
            "value": "26.67",
            "unit": "%",
            "extra": "Trace (TPS: 1000) - Average CPU Usage"
          },
          {
            "name": "otlp_http_exporter_trace_mock",
            "value": "72.05",
            "unit": "MB",
            "extra": "Trace (TPS: 1000) - Average Memory Usage"
          },
          {
            "name": "jaeger_mock",
            "value": "17.63",
            "unit": "%",
            "extra": "Trace (TPS: 1000) - Average CPU Usage"
          },
          {
            "name": "jaeger_mock",
            "value": "148.34",
            "unit": "MB",
            "extra": "Trace (TPS: 1000) - Average Memory Usage"
          },
          {
            "name": "zipkin_mock",
            "value": "30.92",
            "unit": "%",
            "extra": "Trace (TPS: 5000) - Average CPU Usage"
          },
          {
            "name": "zipkin_mock",
            "value": "517.57",
            "unit": "MB",
            "extra": "Trace (TPS: 5000) - Average Memory Usage"
          },
          {
            "name": "logzio_exporter_trace_mock",
            "value": "120.74",
            "unit": "%",
            "extra": "Trace (TPS: 5000) - Average CPU Usage"
          },
          {
            "name": "logzio_exporter_trace_mock",
            "value": "125.26",
            "unit": "MB",
            "extra": "Trace (TPS: 5000) - Average Memory Usage"
          },
          {
            "name": "jaeger_mock",
            "value": "17.31",
            "unit": "%",
            "extra": "Trace (TPS: 5000) - Average CPU Usage"
          },
          {
            "name": "jaeger_mock",
            "value": "171.06",
            "unit": "MB",
            "extra": "Trace (TPS: 5000) - Average Memory Usage"
          },
          {
            "name": "xrayreceiver_mock",
            "value": "38.39",
            "unit": "%",
            "extra": "Trace (TPS: 5000) - Average CPU Usage"
          },
          {
            "name": "xrayreceiver_mock",
            "value": "700.72",
            "unit": "MB",
            "extra": "Trace (TPS: 5000) - Average Memory Usage"
          },
          {
            "name": "otlp_grpc_exporter_trace_mock",
            "value": "126.56",
            "unit": "%",
            "extra": "Trace (TPS: 5000) - Average CPU Usage"
          },
          {
            "name": "otlp_grpc_exporter_trace_mock",
            "value": "3137.77",
            "unit": "MB",
            "extra": "Trace (TPS: 5000) - Average Memory Usage"
          },
          {
            "name": "sapm_exporter_trace_mock",
            "value": "101.48",
            "unit": "%",
            "extra": "Trace (TPS: 5000) - Average CPU Usage"
          },
          {
            "name": "sapm_exporter_trace_mock",
            "value": "90.46",
            "unit": "MB",
            "extra": "Trace (TPS: 5000) - Average Memory Usage"
          },
          {
            "name": "otlp_http_exporter_trace_mock",
            "value": "117.80",
            "unit": "%",
            "extra": "Trace (TPS: 5000) - Average CPU Usage"
          },
          {
            "name": "otlp_http_exporter_trace_mock",
            "value": "76.41",
            "unit": "MB",
            "extra": "Trace (TPS: 5000) - Average Memory Usage"
          },
          {
            "name": "otlp_mock",
            "value": "143.72",
            "unit": "%",
            "extra": "Trace (TPS: 5000) - Average CPU Usage"
          },
          {
            "name": "otlp_mock",
            "value": "15403.34",
            "unit": "MB",
            "extra": "Trace (TPS: 5000) - Average Memory Usage"
          },
          {
            "name": "datadog_exporter_trace_mock",
            "value": "127.10",
            "unit": "%",
            "extra": "Trace (TPS: 5000) - Average CPU Usage"
          },
          {
            "name": "datadog_exporter_trace_mock",
            "value": "82.51",
            "unit": "MB",
            "extra": "Trace (TPS: 5000) - Average Memory Usage"
          },
          {
            "name": "prometheus_mock",
            "value": "7.56",
            "unit": "%",
            "extra": "Metric (TPS: 5000) - Average CPU Usage"
          },
          {
            "name": "prometheus_mock",
            "value": "259.73",
            "unit": "MB",
            "extra": "Metric (TPS: 5000) - Average Memory Usage"
          },
          {
            "name": "statsd_mock",
            "value": "0.02",
            "unit": "%",
            "extra": "Metric (TPS: 5000) - Average CPU Usage"
          },
          {
            "name": "statsd_mock",
            "value": "58.64",
            "unit": "MB",
            "extra": "Metric (TPS: 5000) - Average Memory Usage"
          },
          {
            "name": "otlp_metric_mock",
            "value": "0.04",
            "unit": "%",
            "extra": "Metric (TPS: 5000) - Average CPU Usage"
          },
          {
            "name": "otlp_metric_mock",
            "value": "59.35",
            "unit": "MB",
            "extra": "Metric (TPS: 5000) - Average Memory Usage"
          },
          {
            "name": "datadog_exporter_metric_mock",
            "value": "0.05",
            "unit": "%",
            "extra": "Metric (TPS: 5000) - Average CPU Usage"
          },
          {
            "name": "datadog_exporter_metric_mock",
            "value": "63.66",
            "unit": "MB",
            "extra": "Metric (TPS: 5000) - Average Memory Usage"
          },
          {
            "name": "dynatrace_exporter_metric_mock",
            "value": "0.04",
            "unit": "%",
            "extra": "Metric (TPS: 5000) - Average CPU Usage"
          },
          {
            "name": "dynatrace_exporter_metric_mock",
            "value": "58.79",
            "unit": "MB",
            "extra": "Metric (TPS: 5000) - Average Memory Usage"
          },
          {
            "name": "otlp_http_exporter_metric_mock",
            "value": "0.04",
            "unit": "%",
            "extra": "Metric (TPS: 5000) - Average CPU Usage"
          },
          {
            "name": "otlp_http_exporter_metric_mock",
            "value": "59.72",
            "unit": "MB",
            "extra": "Metric (TPS: 5000) - Average Memory Usage"
          },
          {
            "name": "otlp_grpc_exporter_metric_mock",
            "value": "0.04",
            "unit": "%",
            "extra": "Metric (TPS: 5000) - Average CPU Usage"
          },
          {
            "name": "otlp_grpc_exporter_metric_mock",
            "value": "59.81",
            "unit": "MB",
            "extra": "Metric (TPS: 5000) - Average Memory Usage"
          },
          {
            "name": "signalfx_exporter_metric_mock",
            "value": "0.05",
            "unit": "%",
            "extra": "Metric (TPS: 5000) - Average CPU Usage"
          },
          {
            "name": "signalfx_exporter_metric_mock",
            "value": "61.28",
            "unit": "MB",
            "extra": "Metric (TPS: 5000) - Average Memory Usage"
          },
          {
            "name": "signalfx_exporter_metric_mock",
            "value": "0.05",
            "unit": "%",
            "extra": "Metric (TPS: 1000) - Average CPU Usage"
          },
          {
            "name": "signalfx_exporter_metric_mock",
            "value": "61.72",
            "unit": "MB",
            "extra": "Metric (TPS: 1000) - Average Memory Usage"
          },
          {
            "name": "statsd_mock",
            "value": "0.02",
            "unit": "%",
            "extra": "Metric (TPS: 1000) - Average CPU Usage"
          },
          {
            "name": "statsd_mock",
            "value": "59.92",
            "unit": "MB",
            "extra": "Metric (TPS: 1000) - Average Memory Usage"
          },
          {
            "name": "otlp_grpc_exporter_metric_mock",
            "value": "0.03",
            "unit": "%",
            "extra": "Metric (TPS: 1000) - Average CPU Usage"
          },
          {
            "name": "otlp_grpc_exporter_metric_mock",
            "value": "59.00",
            "unit": "MB",
            "extra": "Metric (TPS: 1000) - Average Memory Usage"
          },
          {
            "name": "dynatrace_exporter_metric_mock",
            "value": "0.04",
            "unit": "%",
            "extra": "Metric (TPS: 1000) - Average CPU Usage"
          },
          {
            "name": "dynatrace_exporter_metric_mock",
            "value": "57.51",
            "unit": "MB",
            "extra": "Metric (TPS: 1000) - Average Memory Usage"
          },
          {
            "name": "datadog_exporter_metric_mock",
            "value": "0.05",
            "unit": "%",
            "extra": "Metric (TPS: 1000) - Average CPU Usage"
          },
          {
            "name": "datadog_exporter_metric_mock",
            "value": "61.63",
            "unit": "MB",
            "extra": "Metric (TPS: 1000) - Average Memory Usage"
          },
          {
            "name": "otlp_http_exporter_metric_mock",
            "value": "0.04",
            "unit": "%",
            "extra": "Metric (TPS: 1000) - Average CPU Usage"
          },
          {
            "name": "otlp_http_exporter_metric_mock",
            "value": "59.42",
            "unit": "MB",
            "extra": "Metric (TPS: 1000) - Average Memory Usage"
          },
          {
            "name": "prometheus_mock",
            "value": "1.41",
            "unit": "%",
            "extra": "Metric (TPS: 1000) - Average CPU Usage"
          },
          {
            "name": "prometheus_mock",
            "value": "106.34",
            "unit": "MB",
            "extra": "Metric (TPS: 1000) - Average Memory Usage"
          },
          {
            "name": "otlp_metric_mock",
            "value": "0.04",
            "unit": "%",
            "extra": "Metric (TPS: 1000) - Average CPU Usage"
          },
          {
            "name": "otlp_metric_mock",
            "value": "58.92",
            "unit": "MB",
            "extra": "Metric (TPS: 1000) - Average Memory Usage"
          },
          {
            "name": "prometheus_mock",
            "value": "0.13",
            "unit": "%",
            "extra": "Metric (TPS: 100) - Average CPU Usage"
          },
          {
            "name": "prometheus_mock",
            "value": "72.42",
            "unit": "MB",
            "extra": "Metric (TPS: 100) - Average Memory Usage"
          },
          {
            "name": "dynatrace_exporter_metric_mock",
            "value": "0.05",
            "unit": "%",
            "extra": "Metric (TPS: 100) - Average CPU Usage"
          },
          {
            "name": "dynatrace_exporter_metric_mock",
            "value": "59.00",
            "unit": "MB",
            "extra": "Metric (TPS: 100) - Average Memory Usage"
          },
          {
            "name": "datadog_exporter_metric_mock",
            "value": "0.05",
            "unit": "%",
            "extra": "Metric (TPS: 100) - Average CPU Usage"
          },
          {
            "name": "datadog_exporter_metric_mock",
            "value": "61.49",
            "unit": "MB",
            "extra": "Metric (TPS: 100) - Average Memory Usage"
          },
          {
            "name": "otlp_grpc_exporter_metric_mock",
            "value": "0.04",
            "unit": "%",
            "extra": "Metric (TPS: 100) - Average CPU Usage"
          },
          {
            "name": "otlp_grpc_exporter_metric_mock",
            "value": "58.89",
            "unit": "MB",
            "extra": "Metric (TPS: 100) - Average Memory Usage"
          },
          {
            "name": "otlp_metric_mock",
            "value": "0.04",
            "unit": "%",
            "extra": "Metric (TPS: 100) - Average CPU Usage"
          },
          {
            "name": "otlp_metric_mock",
            "value": "58.91",
            "unit": "MB",
            "extra": "Metric (TPS: 100) - Average Memory Usage"
          },
          {
            "name": "signalfx_exporter_metric_mock",
            "value": "0.06",
            "unit": "%",
            "extra": "Metric (TPS: 100) - Average CPU Usage"
          },
          {
            "name": "signalfx_exporter_metric_mock",
            "value": "61.30",
            "unit": "MB",
            "extra": "Metric (TPS: 100) - Average Memory Usage"
          },
          {
            "name": "statsd_mock",
            "value": "0.01",
            "unit": "%",
            "extra": "Metric (TPS: 100) - Average CPU Usage"
          },
          {
            "name": "statsd_mock",
            "value": "58.25",
            "unit": "MB",
            "extra": "Metric (TPS: 100) - Average Memory Usage"
          },
          {
            "name": "otlp_http_exporter_metric_mock",
            "value": "0.04",
            "unit": "%",
            "extra": "Metric (TPS: 100) - Average CPU Usage"
          },
          {
            "name": "otlp_http_exporter_metric_mock",
            "value": "58.66",
            "unit": "MB",
            "extra": "Metric (TPS: 100) - Average Memory Usage"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Khanh Nguyen",
            "username": "khanhntd",
            "email": "91758108+khanhntd@users.noreply.github.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "543db00eb9f7f469d512df6f9ab643a4697df1c4",
          "message": "Fix condition for ssm (#874)\n\n* fix condition for ssm package\r\n\r\n* fix output dir in ssm manifest file\r\n\r\n* change name to clean-ssm-package",
          "timestamp": "2022-01-11T19:32:01Z",
          "url": "https://github.com/aws-observability/aws-otel-collector/commit/543db00eb9f7f469d512df6f9ab643a4697df1c4"
        },
        "date": 1642097435043,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "otlp_http_exporter_trace_mock",
            "value": "118.25",
            "unit": "%",
            "extra": "Trace (TPS: 5000) - Average CPU Usage"
          },
          {
            "name": "otlp_http_exporter_trace_mock",
            "value": "76.46",
            "unit": "MB",
            "extra": "Trace (TPS: 5000) - Average Memory Usage"
          },
          {
            "name": "otlp_grpc_exporter_trace_mock",
            "value": "123.33",
            "unit": "%",
            "extra": "Trace (TPS: 5000) - Average CPU Usage"
          },
          {
            "name": "otlp_grpc_exporter_trace_mock",
            "value": "3143.67",
            "unit": "MB",
            "extra": "Trace (TPS: 5000) - Average Memory Usage"
          },
          {
            "name": "zipkin_mock",
            "value": "30.55",
            "unit": "%",
            "extra": "Trace (TPS: 5000) - Average CPU Usage"
          },
          {
            "name": "zipkin_mock",
            "value": "507.55",
            "unit": "MB",
            "extra": "Trace (TPS: 5000) - Average Memory Usage"
          },
          {
            "name": "logzio_exporter_trace_mock",
            "value": "109.82",
            "unit": "%",
            "extra": "Trace (TPS: 5000) - Average CPU Usage"
          },
          {
            "name": "logzio_exporter_trace_mock",
            "value": "124.79",
            "unit": "MB",
            "extra": "Trace (TPS: 5000) - Average Memory Usage"
          },
          {
            "name": "otlp_mock",
            "value": "149.18",
            "unit": "%",
            "extra": "Trace (TPS: 5000) - Average CPU Usage"
          },
          {
            "name": "otlp_mock",
            "value": "16972.31",
            "unit": "MB",
            "extra": "Trace (TPS: 5000) - Average Memory Usage"
          },
          {
            "name": "jaeger_mock",
            "value": "18.26",
            "unit": "%",
            "extra": "Trace (TPS: 5000) - Average CPU Usage"
          },
          {
            "name": "jaeger_mock",
            "value": "169.45",
            "unit": "MB",
            "extra": "Trace (TPS: 5000) - Average Memory Usage"
          },
          {
            "name": "sapm_exporter_trace_mock",
            "value": "111.98",
            "unit": "%",
            "extra": "Trace (TPS: 5000) - Average CPU Usage"
          },
          {
            "name": "sapm_exporter_trace_mock",
            "value": "91.29",
            "unit": "MB",
            "extra": "Trace (TPS: 5000) - Average Memory Usage"
          },
          {
            "name": "datadog_exporter_trace_mock",
            "value": "119.58",
            "unit": "%",
            "extra": "Trace (TPS: 5000) - Average CPU Usage"
          },
          {
            "name": "datadog_exporter_trace_mock",
            "value": "82.81",
            "unit": "MB",
            "extra": "Trace (TPS: 5000) - Average Memory Usage"
          },
          {
            "name": "xrayreceiver_mock",
            "value": "37.15",
            "unit": "%",
            "extra": "Trace (TPS: 5000) - Average CPU Usage"
          },
          {
            "name": "xrayreceiver_mock",
            "value": "785.78",
            "unit": "MB",
            "extra": "Trace (TPS: 5000) - Average Memory Usage"
          },
          {
            "name": "otlp_http_exporter_trace_mock",
            "value": "3.32",
            "unit": "%",
            "extra": "Trace (TPS: 100) - Average CPU Usage"
          },
          {
            "name": "otlp_http_exporter_trace_mock",
            "value": "70.36",
            "unit": "MB",
            "extra": "Trace (TPS: 100) - Average Memory Usage"
          },
          {
            "name": "otlp_mock",
            "value": "4.78",
            "unit": "%",
            "extra": "Trace (TPS: 100) - Average CPU Usage"
          },
          {
            "name": "otlp_mock",
            "value": "71.65",
            "unit": "MB",
            "extra": "Trace (TPS: 100) - Average Memory Usage"
          },
          {
            "name": "logzio_exporter_trace_mock",
            "value": "3.01",
            "unit": "%",
            "extra": "Trace (TPS: 100) - Average CPU Usage"
          },
          {
            "name": "logzio_exporter_trace_mock",
            "value": "91.62",
            "unit": "MB",
            "extra": "Trace (TPS: 100) - Average Memory Usage"
          },
          {
            "name": "sapm_exporter_trace_mock",
            "value": "4.08",
            "unit": "%",
            "extra": "Trace (TPS: 100) - Average CPU Usage"
          },
          {
            "name": "sapm_exporter_trace_mock",
            "value": "85.45",
            "unit": "MB",
            "extra": "Trace (TPS: 100) - Average Memory Usage"
          },
          {
            "name": "otlp_grpc_exporter_trace_mock",
            "value": "2.97",
            "unit": "%",
            "extra": "Trace (TPS: 100) - Average CPU Usage"
          },
          {
            "name": "otlp_grpc_exporter_trace_mock",
            "value": "134.46",
            "unit": "MB",
            "extra": "Trace (TPS: 100) - Average Memory Usage"
          },
          {
            "name": "datadog_exporter_trace_mock",
            "value": "4.84",
            "unit": "%",
            "extra": "Trace (TPS: 100) - Average CPU Usage"
          },
          {
            "name": "datadog_exporter_trace_mock",
            "value": "72.20",
            "unit": "MB",
            "extra": "Trace (TPS: 100) - Average Memory Usage"
          },
          {
            "name": "jaeger_mock",
            "value": "2.34",
            "unit": "%",
            "extra": "Trace (TPS: 100) - Average CPU Usage"
          },
          {
            "name": "jaeger_mock",
            "value": "76.31",
            "unit": "MB",
            "extra": "Trace (TPS: 100) - Average Memory Usage"
          },
          {
            "name": "xrayreceiver_mock",
            "value": "5.22",
            "unit": "%",
            "extra": "Trace (TPS: 100) - Average CPU Usage"
          },
          {
            "name": "xrayreceiver_mock",
            "value": "155.48",
            "unit": "MB",
            "extra": "Trace (TPS: 100) - Average Memory Usage"
          },
          {
            "name": "zipkin_mock",
            "value": "5.68",
            "unit": "%",
            "extra": "Trace (TPS: 100) - Average CPU Usage"
          },
          {
            "name": "zipkin_mock",
            "value": "79.54",
            "unit": "MB",
            "extra": "Trace (TPS: 100) - Average Memory Usage"
          },
          {
            "name": "logzio_exporter_trace_mock",
            "value": "27.66",
            "unit": "%",
            "extra": "Trace (TPS: 1000) - Average CPU Usage"
          },
          {
            "name": "logzio_exporter_trace_mock",
            "value": "104.16",
            "unit": "MB",
            "extra": "Trace (TPS: 1000) - Average Memory Usage"
          },
          {
            "name": "xrayreceiver_mock",
            "value": "25.71",
            "unit": "%",
            "extra": "Trace (TPS: 1000) - Average CPU Usage"
          },
          {
            "name": "xrayreceiver_mock",
            "value": "546.60",
            "unit": "MB",
            "extra": "Trace (TPS: 1000) - Average Memory Usage"
          },
          {
            "name": "otlp_mock",
            "value": "32.97",
            "unit": "%",
            "extra": "Trace (TPS: 1000) - Average CPU Usage"
          },
          {
            "name": "otlp_mock",
            "value": "76.52",
            "unit": "MB",
            "extra": "Trace (TPS: 1000) - Average Memory Usage"
          },
          {
            "name": "otlp_http_exporter_trace_mock",
            "value": "27.74",
            "unit": "%",
            "extra": "Trace (TPS: 1000) - Average CPU Usage"
          },
          {
            "name": "otlp_http_exporter_trace_mock",
            "value": "71.05",
            "unit": "MB",
            "extra": "Trace (TPS: 1000) - Average Memory Usage"
          },
          {
            "name": "sapm_exporter_trace_mock",
            "value": "26.96",
            "unit": "%",
            "extra": "Trace (TPS: 1000) - Average CPU Usage"
          },
          {
            "name": "sapm_exporter_trace_mock",
            "value": "86.26",
            "unit": "MB",
            "extra": "Trace (TPS: 1000) - Average Memory Usage"
          },
          {
            "name": "jaeger_mock",
            "value": "16.58",
            "unit": "%",
            "extra": "Trace (TPS: 1000) - Average CPU Usage"
          },
          {
            "name": "jaeger_mock",
            "value": "151.25",
            "unit": "MB",
            "extra": "Trace (TPS: 1000) - Average Memory Usage"
          },
          {
            "name": "otlp_grpc_exporter_trace_mock",
            "value": "28.45",
            "unit": "%",
            "extra": "Trace (TPS: 1000) - Average CPU Usage"
          },
          {
            "name": "otlp_grpc_exporter_trace_mock",
            "value": "714.09",
            "unit": "MB",
            "extra": "Trace (TPS: 1000) - Average Memory Usage"
          },
          {
            "name": "zipkin_mock",
            "value": "29.97",
            "unit": "%",
            "extra": "Trace (TPS: 1000) - Average CPU Usage"
          },
          {
            "name": "zipkin_mock",
            "value": "495.85",
            "unit": "MB",
            "extra": "Trace (TPS: 1000) - Average Memory Usage"
          },
          {
            "name": "datadog_exporter_trace_mock",
            "value": "31.76",
            "unit": "%",
            "extra": "Trace (TPS: 1000) - Average CPU Usage"
          },
          {
            "name": "datadog_exporter_trace_mock",
            "value": "74.76",
            "unit": "MB",
            "extra": "Trace (TPS: 1000) - Average Memory Usage"
          },
          {
            "name": "otlp_metric_mock",
            "value": "0.04",
            "unit": "%",
            "extra": "Metric (TPS: 100) - Average CPU Usage"
          },
          {
            "name": "otlp_metric_mock",
            "value": "59.25",
            "unit": "MB",
            "extra": "Metric (TPS: 100) - Average Memory Usage"
          },
          {
            "name": "statsd_mock",
            "value": "0.02",
            "unit": "%",
            "extra": "Metric (TPS: 100) - Average CPU Usage"
          },
          {
            "name": "statsd_mock",
            "value": "58.96",
            "unit": "MB",
            "extra": "Metric (TPS: 100) - Average Memory Usage"
          },
          {
            "name": "otlp_grpc_exporter_metric_mock",
            "value": "0.05",
            "unit": "%",
            "extra": "Metric (TPS: 100) - Average CPU Usage"
          },
          {
            "name": "otlp_grpc_exporter_metric_mock",
            "value": "60.25",
            "unit": "MB",
            "extra": "Metric (TPS: 100) - Average Memory Usage"
          },
          {
            "name": "prometheus_mock",
            "value": "0.14",
            "unit": "%",
            "extra": "Metric (TPS: 100) - Average CPU Usage"
          },
          {
            "name": "prometheus_mock",
            "value": "72.03",
            "unit": "MB",
            "extra": "Metric (TPS: 100) - Average Memory Usage"
          },
          {
            "name": "otlp_http_exporter_metric_mock",
            "value": "0.05",
            "unit": "%",
            "extra": "Metric (TPS: 100) - Average CPU Usage"
          },
          {
            "name": "otlp_http_exporter_metric_mock",
            "value": "58.88",
            "unit": "MB",
            "extra": "Metric (TPS: 100) - Average Memory Usage"
          },
          {
            "name": "dynatrace_exporter_metric_mock",
            "value": "0.04",
            "unit": "%",
            "extra": "Metric (TPS: 100) - Average CPU Usage"
          },
          {
            "name": "dynatrace_exporter_metric_mock",
            "value": "60.16",
            "unit": "MB",
            "extra": "Metric (TPS: 100) - Average Memory Usage"
          },
          {
            "name": "signalfx_exporter_metric_mock",
            "value": "0.04",
            "unit": "%",
            "extra": "Metric (TPS: 100) - Average CPU Usage"
          },
          {
            "name": "signalfx_exporter_metric_mock",
            "value": "62.55",
            "unit": "MB",
            "extra": "Metric (TPS: 100) - Average Memory Usage"
          },
          {
            "name": "datadog_exporter_metric_mock",
            "value": "0.04",
            "unit": "%",
            "extra": "Metric (TPS: 100) - Average CPU Usage"
          },
          {
            "name": "datadog_exporter_metric_mock",
            "value": "62.01",
            "unit": "MB",
            "extra": "Metric (TPS: 100) - Average Memory Usage"
          },
          {
            "name": "signalfx_exporter_metric_mock",
            "value": "0.05",
            "unit": "%",
            "extra": "Metric (TPS: 5000) - Average CPU Usage"
          },
          {
            "name": "signalfx_exporter_metric_mock",
            "value": "61.44",
            "unit": "MB",
            "extra": "Metric (TPS: 5000) - Average Memory Usage"
          },
          {
            "name": "prometheus_mock",
            "value": "7.57",
            "unit": "%",
            "extra": "Metric (TPS: 5000) - Average CPU Usage"
          },
          {
            "name": "prometheus_mock",
            "value": "259.22",
            "unit": "MB",
            "extra": "Metric (TPS: 5000) - Average Memory Usage"
          },
          {
            "name": "dynatrace_exporter_metric_mock",
            "value": "0.04",
            "unit": "%",
            "extra": "Metric (TPS: 5000) - Average CPU Usage"
          },
          {
            "name": "dynatrace_exporter_metric_mock",
            "value": "58.44",
            "unit": "MB",
            "extra": "Metric (TPS: 5000) - Average Memory Usage"
          },
          {
            "name": "otlp_grpc_exporter_metric_mock",
            "value": "0.04",
            "unit": "%",
            "extra": "Metric (TPS: 5000) - Average CPU Usage"
          },
          {
            "name": "otlp_grpc_exporter_metric_mock",
            "value": "60.32",
            "unit": "MB",
            "extra": "Metric (TPS: 5000) - Average Memory Usage"
          },
          {
            "name": "otlp_metric_mock",
            "value": "0.04",
            "unit": "%",
            "extra": "Metric (TPS: 5000) - Average CPU Usage"
          },
          {
            "name": "otlp_metric_mock",
            "value": "59.29",
            "unit": "MB",
            "extra": "Metric (TPS: 5000) - Average Memory Usage"
          },
          {
            "name": "datadog_exporter_metric_mock",
            "value": "0.05",
            "unit": "%",
            "extra": "Metric (TPS: 5000) - Average CPU Usage"
          },
          {
            "name": "datadog_exporter_metric_mock",
            "value": "61.45",
            "unit": "MB",
            "extra": "Metric (TPS: 5000) - Average Memory Usage"
          },
          {
            "name": "statsd_mock",
            "value": "0.01",
            "unit": "%",
            "extra": "Metric (TPS: 5000) - Average CPU Usage"
          },
          {
            "name": "statsd_mock",
            "value": "58.50",
            "unit": "MB",
            "extra": "Metric (TPS: 5000) - Average Memory Usage"
          },
          {
            "name": "otlp_http_exporter_metric_mock",
            "value": "0.04",
            "unit": "%",
            "extra": "Metric (TPS: 5000) - Average CPU Usage"
          },
          {
            "name": "otlp_http_exporter_metric_mock",
            "value": "58.92",
            "unit": "MB",
            "extra": "Metric (TPS: 5000) - Average Memory Usage"
          },
          {
            "name": "statsd_mock",
            "value": "0.01",
            "unit": "%",
            "extra": "Metric (TPS: 1000) - Average CPU Usage"
          },
          {
            "name": "statsd_mock",
            "value": "57.97",
            "unit": "MB",
            "extra": "Metric (TPS: 1000) - Average Memory Usage"
          },
          {
            "name": "dynatrace_exporter_metric_mock",
            "value": "0.04",
            "unit": "%",
            "extra": "Metric (TPS: 1000) - Average CPU Usage"
          },
          {
            "name": "dynatrace_exporter_metric_mock",
            "value": "59.00",
            "unit": "MB",
            "extra": "Metric (TPS: 1000) - Average Memory Usage"
          },
          {
            "name": "otlp_grpc_exporter_metric_mock",
            "value": "0.05",
            "unit": "%",
            "extra": "Metric (TPS: 1000) - Average CPU Usage"
          },
          {
            "name": "otlp_grpc_exporter_metric_mock",
            "value": "60.88",
            "unit": "MB",
            "extra": "Metric (TPS: 1000) - Average Memory Usage"
          },
          {
            "name": "signalfx_exporter_metric_mock",
            "value": "0.04",
            "unit": "%",
            "extra": "Metric (TPS: 1000) - Average CPU Usage"
          },
          {
            "name": "signalfx_exporter_metric_mock",
            "value": "60.32",
            "unit": "MB",
            "extra": "Metric (TPS: 1000) - Average Memory Usage"
          },
          {
            "name": "prometheus_mock",
            "value": "1.48",
            "unit": "%",
            "extra": "Metric (TPS: 1000) - Average CPU Usage"
          },
          {
            "name": "prometheus_mock",
            "value": "105.92",
            "unit": "MB",
            "extra": "Metric (TPS: 1000) - Average Memory Usage"
          },
          {
            "name": "otlp_http_exporter_metric_mock",
            "value": "0.04",
            "unit": "%",
            "extra": "Metric (TPS: 1000) - Average CPU Usage"
          },
          {
            "name": "otlp_http_exporter_metric_mock",
            "value": "60.45",
            "unit": "MB",
            "extra": "Metric (TPS: 1000) - Average Memory Usage"
          },
          {
            "name": "otlp_metric_mock",
            "value": "0.04",
            "unit": "%",
            "extra": "Metric (TPS: 1000) - Average CPU Usage"
          },
          {
            "name": "otlp_metric_mock",
            "value": "60.38",
            "unit": "MB",
            "extra": "Metric (TPS: 1000) - Average Memory Usage"
          },
          {
            "name": "datadog_exporter_metric_mock",
            "value": "0.04",
            "unit": "%",
            "extra": "Metric (TPS: 1000) - Average CPU Usage"
          },
          {
            "name": "datadog_exporter_metric_mock",
            "value": "61.86",
            "unit": "MB",
            "extra": "Metric (TPS: 1000) - Average Memory Usage"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Jeffrey Chien",
            "username": "jefchien",
            "email": "chienjef@amazon.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "9c14b6379ce508e44a7834cb21bc0ec5a8d52e35",
          "message": "Fix bad substitution in clean-terraform-resources.sh. (#883)",
          "timestamp": "2022-01-13T17:37:52Z",
          "url": "https://github.com/aws-observability/aws-otel-collector/commit/9c14b6379ce508e44a7834cb21bc0ec5a8d52e35"
        },
        "date": 1642108556685,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "otlp_http_exporter_trace_mock",
            "value": "105.91",
            "unit": "%",
            "extra": "Trace (TPS: 5000) - Average CPU Usage"
          },
          {
            "name": "otlp_http_exporter_trace_mock",
            "value": "76.75",
            "unit": "MB",
            "extra": "Trace (TPS: 5000) - Average Memory Usage"
          },
          {
            "name": "otlp_grpc_exporter_trace_mock",
            "value": "124.67",
            "unit": "%",
            "extra": "Trace (TPS: 5000) - Average CPU Usage"
          },
          {
            "name": "otlp_grpc_exporter_trace_mock",
            "value": "3486.23",
            "unit": "MB",
            "extra": "Trace (TPS: 5000) - Average Memory Usage"
          },
          {
            "name": "zipkin_mock",
            "value": "30.38",
            "unit": "%",
            "extra": "Trace (TPS: 5000) - Average CPU Usage"
          },
          {
            "name": "zipkin_mock",
            "value": "514.51",
            "unit": "MB",
            "extra": "Trace (TPS: 5000) - Average Memory Usage"
          },
          {
            "name": "logzio_exporter_trace_mock",
            "value": "109.35",
            "unit": "%",
            "extra": "Trace (TPS: 5000) - Average CPU Usage"
          },
          {
            "name": "logzio_exporter_trace_mock",
            "value": "124.31",
            "unit": "MB",
            "extra": "Trace (TPS: 5000) - Average Memory Usage"
          },
          {
            "name": "otlp_mock",
            "value": "140.91",
            "unit": "%",
            "extra": "Trace (TPS: 5000) - Average CPU Usage"
          },
          {
            "name": "otlp_mock",
            "value": "14960.26",
            "unit": "MB",
            "extra": "Trace (TPS: 5000) - Average Memory Usage"
          },
          {
            "name": "jaeger_mock",
            "value": "16.85",
            "unit": "%",
            "extra": "Trace (TPS: 5000) - Average CPU Usage"
          },
          {
            "name": "jaeger_mock",
            "value": "167.51",
            "unit": "MB",
            "extra": "Trace (TPS: 5000) - Average Memory Usage"
          },
          {
            "name": "sapm_exporter_trace_mock",
            "value": "118.27",
            "unit": "%",
            "extra": "Trace (TPS: 5000) - Average CPU Usage"
          },
          {
            "name": "sapm_exporter_trace_mock",
            "value": "90.55",
            "unit": "MB",
            "extra": "Trace (TPS: 5000) - Average Memory Usage"
          },
          {
            "name": "datadog_exporter_trace_mock",
            "value": "130.00",
            "unit": "%",
            "extra": "Trace (TPS: 5000) - Average CPU Usage"
          },
          {
            "name": "datadog_exporter_trace_mock",
            "value": "82.26",
            "unit": "MB",
            "extra": "Trace (TPS: 5000) - Average Memory Usage"
          },
          {
            "name": "xrayreceiver_mock",
            "value": "36.67",
            "unit": "%",
            "extra": "Trace (TPS: 5000) - Average CPU Usage"
          },
          {
            "name": "xrayreceiver_mock",
            "value": "762.63",
            "unit": "MB",
            "extra": "Trace (TPS: 5000) - Average Memory Usage"
          },
          {
            "name": "otlp_http_exporter_trace_mock",
            "value": "3.00",
            "unit": "%",
            "extra": "Trace (TPS: 100) - Average CPU Usage"
          },
          {
            "name": "otlp_http_exporter_trace_mock",
            "value": "69.53",
            "unit": "MB",
            "extra": "Trace (TPS: 100) - Average Memory Usage"
          },
          {
            "name": "otlp_mock",
            "value": "3.84",
            "unit": "%",
            "extra": "Trace (TPS: 100) - Average CPU Usage"
          },
          {
            "name": "otlp_mock",
            "value": "70.51",
            "unit": "MB",
            "extra": "Trace (TPS: 100) - Average Memory Usage"
          },
          {
            "name": "logzio_exporter_trace_mock",
            "value": "3.47",
            "unit": "%",
            "extra": "Trace (TPS: 100) - Average CPU Usage"
          },
          {
            "name": "logzio_exporter_trace_mock",
            "value": "91.23",
            "unit": "MB",
            "extra": "Trace (TPS: 100) - Average Memory Usage"
          },
          {
            "name": "sapm_exporter_trace_mock",
            "value": "3.09",
            "unit": "%",
            "extra": "Trace (TPS: 100) - Average CPU Usage"
          },
          {
            "name": "sapm_exporter_trace_mock",
            "value": "84.69",
            "unit": "MB",
            "extra": "Trace (TPS: 100) - Average Memory Usage"
          },
          {
            "name": "otlp_grpc_exporter_trace_mock",
            "value": "3.82",
            "unit": "%",
            "extra": "Trace (TPS: 100) - Average CPU Usage"
          },
          {
            "name": "otlp_grpc_exporter_trace_mock",
            "value": "137.55",
            "unit": "MB",
            "extra": "Trace (TPS: 100) - Average Memory Usage"
          },
          {
            "name": "datadog_exporter_trace_mock",
            "value": "5.50",
            "unit": "%",
            "extra": "Trace (TPS: 100) - Average CPU Usage"
          },
          {
            "name": "datadog_exporter_trace_mock",
            "value": "72.44",
            "unit": "MB",
            "extra": "Trace (TPS: 100) - Average Memory Usage"
          },
          {
            "name": "jaeger_mock",
            "value": "2.35",
            "unit": "%",
            "extra": "Trace (TPS: 100) - Average CPU Usage"
          },
          {
            "name": "jaeger_mock",
            "value": "76.12",
            "unit": "MB",
            "extra": "Trace (TPS: 100) - Average Memory Usage"
          },
          {
            "name": "xrayreceiver_mock",
            "value": "4.68",
            "unit": "%",
            "extra": "Trace (TPS: 100) - Average CPU Usage"
          },
          {
            "name": "xrayreceiver_mock",
            "value": "143.88",
            "unit": "MB",
            "extra": "Trace (TPS: 100) - Average Memory Usage"
          },
          {
            "name": "zipkin_mock",
            "value": "5.68",
            "unit": "%",
            "extra": "Trace (TPS: 100) - Average CPU Usage"
          },
          {
            "name": "zipkin_mock",
            "value": "78.48",
            "unit": "MB",
            "extra": "Trace (TPS: 100) - Average Memory Usage"
          },
          {
            "name": "logzio_exporter_trace_mock",
            "value": "29.24",
            "unit": "%",
            "extra": "Trace (TPS: 1000) - Average CPU Usage"
          },
          {
            "name": "logzio_exporter_trace_mock",
            "value": "102.54",
            "unit": "MB",
            "extra": "Trace (TPS: 1000) - Average Memory Usage"
          },
          {
            "name": "xrayreceiver_mock",
            "value": "25.57",
            "unit": "%",
            "extra": "Trace (TPS: 1000) - Average CPU Usage"
          },
          {
            "name": "xrayreceiver_mock",
            "value": "533.53",
            "unit": "MB",
            "extra": "Trace (TPS: 1000) - Average Memory Usage"
          },
          {
            "name": "otlp_mock",
            "value": "33.39",
            "unit": "%",
            "extra": "Trace (TPS: 1000) - Average CPU Usage"
          },
          {
            "name": "otlp_mock",
            "value": "75.79",
            "unit": "MB",
            "extra": "Trace (TPS: 1000) - Average Memory Usage"
          },
          {
            "name": "otlp_http_exporter_trace_mock",
            "value": "28.43",
            "unit": "%",
            "extra": "Trace (TPS: 1000) - Average CPU Usage"
          },
          {
            "name": "otlp_http_exporter_trace_mock",
            "value": "72.45",
            "unit": "MB",
            "extra": "Trace (TPS: 1000) - Average Memory Usage"
          },
          {
            "name": "sapm_exporter_trace_mock",
            "value": "27.65",
            "unit": "%",
            "extra": "Trace (TPS: 1000) - Average CPU Usage"
          },
          {
            "name": "sapm_exporter_trace_mock",
            "value": "86.45",
            "unit": "MB",
            "extra": "Trace (TPS: 1000) - Average Memory Usage"
          },
          {
            "name": "jaeger_mock",
            "value": "17.39",
            "unit": "%",
            "extra": "Trace (TPS: 1000) - Average CPU Usage"
          },
          {
            "name": "jaeger_mock",
            "value": "151.66",
            "unit": "MB",
            "extra": "Trace (TPS: 1000) - Average Memory Usage"
          },
          {
            "name": "otlp_grpc_exporter_trace_mock",
            "value": "31.62",
            "unit": "%",
            "extra": "Trace (TPS: 1000) - Average CPU Usage"
          },
          {
            "name": "otlp_grpc_exporter_trace_mock",
            "value": "742.84",
            "unit": "MB",
            "extra": "Trace (TPS: 1000) - Average Memory Usage"
          },
          {
            "name": "zipkin_mock",
            "value": "31.02",
            "unit": "%",
            "extra": "Trace (TPS: 1000) - Average CPU Usage"
          },
          {
            "name": "zipkin_mock",
            "value": "459.11",
            "unit": "MB",
            "extra": "Trace (TPS: 1000) - Average Memory Usage"
          },
          {
            "name": "datadog_exporter_trace_mock",
            "value": "33.32",
            "unit": "%",
            "extra": "Trace (TPS: 1000) - Average CPU Usage"
          },
          {
            "name": "datadog_exporter_trace_mock",
            "value": "75.21",
            "unit": "MB",
            "extra": "Trace (TPS: 1000) - Average Memory Usage"
          },
          {
            "name": "otlp_metric_mock",
            "value": "0.04",
            "unit": "%",
            "extra": "Metric (TPS: 100) - Average CPU Usage"
          },
          {
            "name": "otlp_metric_mock",
            "value": "58.94",
            "unit": "MB",
            "extra": "Metric (TPS: 100) - Average Memory Usage"
          },
          {
            "name": "statsd_mock",
            "value": "0.02",
            "unit": "%",
            "extra": "Metric (TPS: 100) - Average CPU Usage"
          },
          {
            "name": "statsd_mock",
            "value": "59.24",
            "unit": "MB",
            "extra": "Metric (TPS: 100) - Average Memory Usage"
          },
          {
            "name": "otlp_grpc_exporter_metric_mock",
            "value": "0.04",
            "unit": "%",
            "extra": "Metric (TPS: 100) - Average CPU Usage"
          },
          {
            "name": "otlp_grpc_exporter_metric_mock",
            "value": "58.73",
            "unit": "MB",
            "extra": "Metric (TPS: 100) - Average Memory Usage"
          },
          {
            "name": "prometheus_mock",
            "value": "0.13",
            "unit": "%",
            "extra": "Metric (TPS: 100) - Average CPU Usage"
          },
          {
            "name": "prometheus_mock",
            "value": "72.11",
            "unit": "MB",
            "extra": "Metric (TPS: 100) - Average Memory Usage"
          },
          {
            "name": "otlp_http_exporter_metric_mock",
            "value": "0.04",
            "unit": "%",
            "extra": "Metric (TPS: 100) - Average CPU Usage"
          },
          {
            "name": "otlp_http_exporter_metric_mock",
            "value": "60.60",
            "unit": "MB",
            "extra": "Metric (TPS: 100) - Average Memory Usage"
          },
          {
            "name": "dynatrace_exporter_metric_mock",
            "value": "0.03",
            "unit": "%",
            "extra": "Metric (TPS: 100) - Average CPU Usage"
          },
          {
            "name": "dynatrace_exporter_metric_mock",
            "value": "59.04",
            "unit": "MB",
            "extra": "Metric (TPS: 100) - Average Memory Usage"
          },
          {
            "name": "signalfx_exporter_metric_mock",
            "value": "0.04",
            "unit": "%",
            "extra": "Metric (TPS: 100) - Average CPU Usage"
          },
          {
            "name": "signalfx_exporter_metric_mock",
            "value": "62.26",
            "unit": "MB",
            "extra": "Metric (TPS: 100) - Average Memory Usage"
          },
          {
            "name": "datadog_exporter_metric_mock",
            "value": "0.05",
            "unit": "%",
            "extra": "Metric (TPS: 100) - Average CPU Usage"
          },
          {
            "name": "datadog_exporter_metric_mock",
            "value": "62.87",
            "unit": "MB",
            "extra": "Metric (TPS: 100) - Average Memory Usage"
          },
          {
            "name": "signalfx_exporter_metric_mock",
            "value": "0.04",
            "unit": "%",
            "extra": "Metric (TPS: 5000) - Average CPU Usage"
          },
          {
            "name": "signalfx_exporter_metric_mock",
            "value": "61.29",
            "unit": "MB",
            "extra": "Metric (TPS: 5000) - Average Memory Usage"
          },
          {
            "name": "prometheus_mock",
            "value": "7.66",
            "unit": "%",
            "extra": "Metric (TPS: 5000) - Average CPU Usage"
          },
          {
            "name": "prometheus_mock",
            "value": "257.48",
            "unit": "MB",
            "extra": "Metric (TPS: 5000) - Average Memory Usage"
          },
          {
            "name": "dynatrace_exporter_metric_mock",
            "value": "0.04",
            "unit": "%",
            "extra": "Metric (TPS: 5000) - Average CPU Usage"
          },
          {
            "name": "dynatrace_exporter_metric_mock",
            "value": "60.29",
            "unit": "MB",
            "extra": "Metric (TPS: 5000) - Average Memory Usage"
          },
          {
            "name": "otlp_grpc_exporter_metric_mock",
            "value": "0.04",
            "unit": "%",
            "extra": "Metric (TPS: 5000) - Average CPU Usage"
          },
          {
            "name": "otlp_grpc_exporter_metric_mock",
            "value": "58.70",
            "unit": "MB",
            "extra": "Metric (TPS: 5000) - Average Memory Usage"
          },
          {
            "name": "otlp_metric_mock",
            "value": "0.04",
            "unit": "%",
            "extra": "Metric (TPS: 5000) - Average CPU Usage"
          },
          {
            "name": "otlp_metric_mock",
            "value": "59.63",
            "unit": "MB",
            "extra": "Metric (TPS: 5000) - Average Memory Usage"
          },
          {
            "name": "datadog_exporter_metric_mock",
            "value": "0.04",
            "unit": "%",
            "extra": "Metric (TPS: 5000) - Average CPU Usage"
          },
          {
            "name": "datadog_exporter_metric_mock",
            "value": "60.38",
            "unit": "MB",
            "extra": "Metric (TPS: 5000) - Average Memory Usage"
          },
          {
            "name": "statsd_mock",
            "value": "0.02",
            "unit": "%",
            "extra": "Metric (TPS: 5000) - Average CPU Usage"
          },
          {
            "name": "statsd_mock",
            "value": "59.63",
            "unit": "MB",
            "extra": "Metric (TPS: 5000) - Average Memory Usage"
          },
          {
            "name": "otlp_http_exporter_metric_mock",
            "value": "0.04",
            "unit": "%",
            "extra": "Metric (TPS: 5000) - Average CPU Usage"
          },
          {
            "name": "otlp_http_exporter_metric_mock",
            "value": "59.30",
            "unit": "MB",
            "extra": "Metric (TPS: 5000) - Average Memory Usage"
          },
          {
            "name": "statsd_mock",
            "value": "0.01",
            "unit": "%",
            "extra": "Metric (TPS: 1000) - Average CPU Usage"
          },
          {
            "name": "statsd_mock",
            "value": "58.82",
            "unit": "MB",
            "extra": "Metric (TPS: 1000) - Average Memory Usage"
          },
          {
            "name": "dynatrace_exporter_metric_mock",
            "value": "0.05",
            "unit": "%",
            "extra": "Metric (TPS: 1000) - Average CPU Usage"
          },
          {
            "name": "dynatrace_exporter_metric_mock",
            "value": "59.76",
            "unit": "MB",
            "extra": "Metric (TPS: 1000) - Average Memory Usage"
          },
          {
            "name": "otlp_grpc_exporter_metric_mock",
            "value": "0.04",
            "unit": "%",
            "extra": "Metric (TPS: 1000) - Average CPU Usage"
          },
          {
            "name": "otlp_grpc_exporter_metric_mock",
            "value": "59.63",
            "unit": "MB",
            "extra": "Metric (TPS: 1000) - Average Memory Usage"
          },
          {
            "name": "signalfx_exporter_metric_mock",
            "value": "0.05",
            "unit": "%",
            "extra": "Metric (TPS: 1000) - Average CPU Usage"
          },
          {
            "name": "signalfx_exporter_metric_mock",
            "value": "61.59",
            "unit": "MB",
            "extra": "Metric (TPS: 1000) - Average Memory Usage"
          },
          {
            "name": "prometheus_mock",
            "value": "1.51",
            "unit": "%",
            "extra": "Metric (TPS: 1000) - Average CPU Usage"
          },
          {
            "name": "prometheus_mock",
            "value": "105.93",
            "unit": "MB",
            "extra": "Metric (TPS: 1000) - Average Memory Usage"
          },
          {
            "name": "otlp_http_exporter_metric_mock",
            "value": "0.04",
            "unit": "%",
            "extra": "Metric (TPS: 1000) - Average CPU Usage"
          },
          {
            "name": "otlp_http_exporter_metric_mock",
            "value": "59.25",
            "unit": "MB",
            "extra": "Metric (TPS: 1000) - Average Memory Usage"
          },
          {
            "name": "otlp_metric_mock",
            "value": "0.04",
            "unit": "%",
            "extra": "Metric (TPS: 1000) - Average CPU Usage"
          },
          {
            "name": "otlp_metric_mock",
            "value": "59.64",
            "unit": "MB",
            "extra": "Metric (TPS: 1000) - Average Memory Usage"
          },
          {
            "name": "datadog_exporter_metric_mock",
            "value": "0.04",
            "unit": "%",
            "extra": "Metric (TPS: 1000) - Average CPU Usage"
          },
          {
            "name": "datadog_exporter_metric_mock",
            "value": "61.64",
            "unit": "MB",
            "extra": "Metric (TPS: 1000) - Average Memory Usage"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Jeffrey Chien",
            "username": "jefchien",
            "email": "chienjef@amazon.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "634e4d9453e7a6525dbb4061c6390fa802e16660",
          "message": "Require PR build to run for release/dev/test branches. (#862)",
          "timestamp": "2022-01-14T17:35:02Z",
          "url": "https://github.com/aws-observability/aws-otel-collector/commit/634e4d9453e7a6525dbb4061c6390fa802e16660"
        },
        "date": 1642194758782,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "otlp_http_exporter_trace_mock",
            "value": "122.16",
            "unit": "%",
            "extra": "Trace (TPS: 5000) - Average CPU Usage"
          },
          {
            "name": "otlp_http_exporter_trace_mock",
            "value": "77.38",
            "unit": "MB",
            "extra": "Trace (TPS: 5000) - Average Memory Usage"
          },
          {
            "name": "otlp_grpc_exporter_trace_mock",
            "value": "132.25",
            "unit": "%",
            "extra": "Trace (TPS: 5000) - Average CPU Usage"
          },
          {
            "name": "otlp_grpc_exporter_trace_mock",
            "value": "3474.73",
            "unit": "MB",
            "extra": "Trace (TPS: 5000) - Average Memory Usage"
          },
          {
            "name": "zipkin_mock",
            "value": "28.49",
            "unit": "%",
            "extra": "Trace (TPS: 5000) - Average CPU Usage"
          },
          {
            "name": "zipkin_mock",
            "value": "507.33",
            "unit": "MB",
            "extra": "Trace (TPS: 5000) - Average Memory Usage"
          },
          {
            "name": "logzio_exporter_trace_mock",
            "value": "121.78",
            "unit": "%",
            "extra": "Trace (TPS: 5000) - Average CPU Usage"
          },
          {
            "name": "logzio_exporter_trace_mock",
            "value": "124.17",
            "unit": "MB",
            "extra": "Trace (TPS: 5000) - Average Memory Usage"
          },
          {
            "name": "otlp_mock",
            "value": "138.73",
            "unit": "%",
            "extra": "Trace (TPS: 5000) - Average CPU Usage"
          },
          {
            "name": "otlp_mock",
            "value": "16279.07",
            "unit": "MB",
            "extra": "Trace (TPS: 5000) - Average Memory Usage"
          },
          {
            "name": "jaeger_mock",
            "value": "16.79",
            "unit": "%",
            "extra": "Trace (TPS: 5000) - Average CPU Usage"
          },
          {
            "name": "jaeger_mock",
            "value": "170.67",
            "unit": "MB",
            "extra": "Trace (TPS: 5000) - Average Memory Usage"
          },
          {
            "name": "sapm_exporter_trace_mock",
            "value": "116.12",
            "unit": "%",
            "extra": "Trace (TPS: 5000) - Average CPU Usage"
          },
          {
            "name": "sapm_exporter_trace_mock",
            "value": "91.76",
            "unit": "MB",
            "extra": "Trace (TPS: 5000) - Average Memory Usage"
          },
          {
            "name": "datadog_exporter_trace_mock",
            "value": "111.31",
            "unit": "%",
            "extra": "Trace (TPS: 5000) - Average CPU Usage"
          },
          {
            "name": "datadog_exporter_trace_mock",
            "value": "82.88",
            "unit": "MB",
            "extra": "Trace (TPS: 5000) - Average Memory Usage"
          },
          {
            "name": "xrayreceiver_mock",
            "value": "37.94",
            "unit": "%",
            "extra": "Trace (TPS: 5000) - Average CPU Usage"
          },
          {
            "name": "xrayreceiver_mock",
            "value": "752.23",
            "unit": "MB",
            "extra": "Trace (TPS: 5000) - Average Memory Usage"
          },
          {
            "name": "otlp_http_exporter_trace_mock",
            "value": "3.63",
            "unit": "%",
            "extra": "Trace (TPS: 100) - Average CPU Usage"
          },
          {
            "name": "otlp_http_exporter_trace_mock",
            "value": "69.85",
            "unit": "MB",
            "extra": "Trace (TPS: 100) - Average Memory Usage"
          },
          {
            "name": "otlp_mock",
            "value": "4.03",
            "unit": "%",
            "extra": "Trace (TPS: 100) - Average CPU Usage"
          },
          {
            "name": "otlp_mock",
            "value": "71.40",
            "unit": "MB",
            "extra": "Trace (TPS: 100) - Average Memory Usage"
          },
          {
            "name": "logzio_exporter_trace_mock",
            "value": "2.89",
            "unit": "%",
            "extra": "Trace (TPS: 100) - Average CPU Usage"
          },
          {
            "name": "logzio_exporter_trace_mock",
            "value": "90.15",
            "unit": "MB",
            "extra": "Trace (TPS: 100) - Average Memory Usage"
          },
          {
            "name": "sapm_exporter_trace_mock",
            "value": "3.04",
            "unit": "%",
            "extra": "Trace (TPS: 100) - Average CPU Usage"
          },
          {
            "name": "sapm_exporter_trace_mock",
            "value": "83.98",
            "unit": "MB",
            "extra": "Trace (TPS: 100) - Average Memory Usage"
          },
          {
            "name": "otlp_grpc_exporter_trace_mock",
            "value": "3.46",
            "unit": "%",
            "extra": "Trace (TPS: 100) - Average CPU Usage"
          },
          {
            "name": "otlp_grpc_exporter_trace_mock",
            "value": "129.40",
            "unit": "MB",
            "extra": "Trace (TPS: 100) - Average Memory Usage"
          },
          {
            "name": "datadog_exporter_trace_mock",
            "value": "5.49",
            "unit": "%",
            "extra": "Trace (TPS: 100) - Average CPU Usage"
          },
          {
            "name": "datadog_exporter_trace_mock",
            "value": "72.67",
            "unit": "MB",
            "extra": "Trace (TPS: 100) - Average Memory Usage"
          },
          {
            "name": "jaeger_mock",
            "value": "2.44",
            "unit": "%",
            "extra": "Trace (TPS: 100) - Average CPU Usage"
          },
          {
            "name": "jaeger_mock",
            "value": "75.85",
            "unit": "MB",
            "extra": "Trace (TPS: 100) - Average Memory Usage"
          },
          {
            "name": "xrayreceiver_mock",
            "value": "4.85",
            "unit": "%",
            "extra": "Trace (TPS: 100) - Average CPU Usage"
          },
          {
            "name": "xrayreceiver_mock",
            "value": "143.30",
            "unit": "MB",
            "extra": "Trace (TPS: 100) - Average Memory Usage"
          },
          {
            "name": "zipkin_mock",
            "value": "5.58",
            "unit": "%",
            "extra": "Trace (TPS: 100) - Average CPU Usage"
          },
          {
            "name": "zipkin_mock",
            "value": "78.56",
            "unit": "MB",
            "extra": "Trace (TPS: 100) - Average Memory Usage"
          },
          {
            "name": "logzio_exporter_trace_mock",
            "value": "26.79",
            "unit": "%",
            "extra": "Trace (TPS: 1000) - Average CPU Usage"
          },
          {
            "name": "logzio_exporter_trace_mock",
            "value": "102.89",
            "unit": "MB",
            "extra": "Trace (TPS: 1000) - Average Memory Usage"
          },
          {
            "name": "xrayreceiver_mock",
            "value": "25.76",
            "unit": "%",
            "extra": "Trace (TPS: 1000) - Average CPU Usage"
          },
          {
            "name": "xrayreceiver_mock",
            "value": "484.94",
            "unit": "MB",
            "extra": "Trace (TPS: 1000) - Average Memory Usage"
          },
          {
            "name": "otlp_mock",
            "value": "33.47",
            "unit": "%",
            "extra": "Trace (TPS: 1000) - Average CPU Usage"
          },
          {
            "name": "otlp_mock",
            "value": "75.20",
            "unit": "MB",
            "extra": "Trace (TPS: 1000) - Average Memory Usage"
          },
          {
            "name": "otlp_http_exporter_trace_mock",
            "value": "26.30",
            "unit": "%",
            "extra": "Trace (TPS: 1000) - Average CPU Usage"
          },
          {
            "name": "otlp_http_exporter_trace_mock",
            "value": "72.18",
            "unit": "MB",
            "extra": "Trace (TPS: 1000) - Average Memory Usage"
          },
          {
            "name": "sapm_exporter_trace_mock",
            "value": "26.53",
            "unit": "%",
            "extra": "Trace (TPS: 1000) - Average CPU Usage"
          },
          {
            "name": "sapm_exporter_trace_mock",
            "value": "86.64",
            "unit": "MB",
            "extra": "Trace (TPS: 1000) - Average Memory Usage"
          },
          {
            "name": "jaeger_mock",
            "value": "16.97",
            "unit": "%",
            "extra": "Trace (TPS: 1000) - Average CPU Usage"
          },
          {
            "name": "jaeger_mock",
            "value": "148.62",
            "unit": "MB",
            "extra": "Trace (TPS: 1000) - Average Memory Usage"
          },
          {
            "name": "otlp_grpc_exporter_trace_mock",
            "value": "29.25",
            "unit": "%",
            "extra": "Trace (TPS: 1000) - Average CPU Usage"
          },
          {
            "name": "otlp_grpc_exporter_trace_mock",
            "value": "673.14",
            "unit": "MB",
            "extra": "Trace (TPS: 1000) - Average Memory Usage"
          },
          {
            "name": "zipkin_mock",
            "value": "29.84",
            "unit": "%",
            "extra": "Trace (TPS: 1000) - Average CPU Usage"
          },
          {
            "name": "zipkin_mock",
            "value": "479.91",
            "unit": "MB",
            "extra": "Trace (TPS: 1000) - Average Memory Usage"
          },
          {
            "name": "datadog_exporter_trace_mock",
            "value": "31.76",
            "unit": "%",
            "extra": "Trace (TPS: 1000) - Average CPU Usage"
          },
          {
            "name": "datadog_exporter_trace_mock",
            "value": "75.02",
            "unit": "MB",
            "extra": "Trace (TPS: 1000) - Average Memory Usage"
          },
          {
            "name": "otlp_metric_mock",
            "value": "0.04",
            "unit": "%",
            "extra": "Metric (TPS: 100) - Average CPU Usage"
          },
          {
            "name": "otlp_metric_mock",
            "value": "60.44",
            "unit": "MB",
            "extra": "Metric (TPS: 100) - Average Memory Usage"
          },
          {
            "name": "statsd_mock",
            "value": "0.02",
            "unit": "%",
            "extra": "Metric (TPS: 100) - Average CPU Usage"
          },
          {
            "name": "statsd_mock",
            "value": "59.27",
            "unit": "MB",
            "extra": "Metric (TPS: 100) - Average Memory Usage"
          },
          {
            "name": "otlp_grpc_exporter_metric_mock",
            "value": "0.05",
            "unit": "%",
            "extra": "Metric (TPS: 100) - Average CPU Usage"
          },
          {
            "name": "otlp_grpc_exporter_metric_mock",
            "value": "60.08",
            "unit": "MB",
            "extra": "Metric (TPS: 100) - Average Memory Usage"
          },
          {
            "name": "prometheus_mock",
            "value": "0.13",
            "unit": "%",
            "extra": "Metric (TPS: 100) - Average CPU Usage"
          },
          {
            "name": "prometheus_mock",
            "value": "73.22",
            "unit": "MB",
            "extra": "Metric (TPS: 100) - Average Memory Usage"
          },
          {
            "name": "otlp_http_exporter_metric_mock",
            "value": "0.04",
            "unit": "%",
            "extra": "Metric (TPS: 100) - Average CPU Usage"
          },
          {
            "name": "otlp_http_exporter_metric_mock",
            "value": "59.24",
            "unit": "MB",
            "extra": "Metric (TPS: 100) - Average Memory Usage"
          },
          {
            "name": "dynatrace_exporter_metric_mock",
            "value": "0.05",
            "unit": "%",
            "extra": "Metric (TPS: 100) - Average CPU Usage"
          },
          {
            "name": "dynatrace_exporter_metric_mock",
            "value": "58.74",
            "unit": "MB",
            "extra": "Metric (TPS: 100) - Average Memory Usage"
          },
          {
            "name": "signalfx_exporter_metric_mock",
            "value": "0.04",
            "unit": "%",
            "extra": "Metric (TPS: 100) - Average CPU Usage"
          },
          {
            "name": "signalfx_exporter_metric_mock",
            "value": "60.58",
            "unit": "MB",
            "extra": "Metric (TPS: 100) - Average Memory Usage"
          },
          {
            "name": "datadog_exporter_metric_mock",
            "value": "0.05",
            "unit": "%",
            "extra": "Metric (TPS: 100) - Average CPU Usage"
          },
          {
            "name": "datadog_exporter_metric_mock",
            "value": "61.73",
            "unit": "MB",
            "extra": "Metric (TPS: 100) - Average Memory Usage"
          },
          {
            "name": "signalfx_exporter_metric_mock",
            "value": "0.04",
            "unit": "%",
            "extra": "Metric (TPS: 5000) - Average CPU Usage"
          },
          {
            "name": "signalfx_exporter_metric_mock",
            "value": "59.97",
            "unit": "MB",
            "extra": "Metric (TPS: 5000) - Average Memory Usage"
          },
          {
            "name": "prometheus_mock",
            "value": "7.71",
            "unit": "%",
            "extra": "Metric (TPS: 5000) - Average CPU Usage"
          },
          {
            "name": "prometheus_mock",
            "value": "260.15",
            "unit": "MB",
            "extra": "Metric (TPS: 5000) - Average Memory Usage"
          },
          {
            "name": "dynatrace_exporter_metric_mock",
            "value": "0.04",
            "unit": "%",
            "extra": "Metric (TPS: 5000) - Average CPU Usage"
          },
          {
            "name": "dynatrace_exporter_metric_mock",
            "value": "59.04",
            "unit": "MB",
            "extra": "Metric (TPS: 5000) - Average Memory Usage"
          },
          {
            "name": "otlp_grpc_exporter_metric_mock",
            "value": "0.04",
            "unit": "%",
            "extra": "Metric (TPS: 5000) - Average CPU Usage"
          },
          {
            "name": "otlp_grpc_exporter_metric_mock",
            "value": "60.14",
            "unit": "MB",
            "extra": "Metric (TPS: 5000) - Average Memory Usage"
          },
          {
            "name": "otlp_metric_mock",
            "value": "0.04",
            "unit": "%",
            "extra": "Metric (TPS: 5000) - Average CPU Usage"
          },
          {
            "name": "otlp_metric_mock",
            "value": "59.03",
            "unit": "MB",
            "extra": "Metric (TPS: 5000) - Average Memory Usage"
          },
          {
            "name": "datadog_exporter_metric_mock",
            "value": "0.04",
            "unit": "%",
            "extra": "Metric (TPS: 5000) - Average CPU Usage"
          },
          {
            "name": "datadog_exporter_metric_mock",
            "value": "59.26",
            "unit": "MB",
            "extra": "Metric (TPS: 5000) - Average Memory Usage"
          },
          {
            "name": "statsd_mock",
            "value": "0.02",
            "unit": "%",
            "extra": "Metric (TPS: 5000) - Average CPU Usage"
          },
          {
            "name": "statsd_mock",
            "value": "59.88",
            "unit": "MB",
            "extra": "Metric (TPS: 5000) - Average Memory Usage"
          },
          {
            "name": "otlp_http_exporter_metric_mock",
            "value": "0.04",
            "unit": "%",
            "extra": "Metric (TPS: 5000) - Average CPU Usage"
          },
          {
            "name": "otlp_http_exporter_metric_mock",
            "value": "58.30",
            "unit": "MB",
            "extra": "Metric (TPS: 5000) - Average Memory Usage"
          },
          {
            "name": "statsd_mock",
            "value": "0.02",
            "unit": "%",
            "extra": "Metric (TPS: 1000) - Average CPU Usage"
          },
          {
            "name": "statsd_mock",
            "value": "59.90",
            "unit": "MB",
            "extra": "Metric (TPS: 1000) - Average Memory Usage"
          },
          {
            "name": "dynatrace_exporter_metric_mock",
            "value": "0.04",
            "unit": "%",
            "extra": "Metric (TPS: 1000) - Average CPU Usage"
          },
          {
            "name": "dynatrace_exporter_metric_mock",
            "value": "60.77",
            "unit": "MB",
            "extra": "Metric (TPS: 1000) - Average Memory Usage"
          },
          {
            "name": "otlp_grpc_exporter_metric_mock",
            "value": "0.05",
            "unit": "%",
            "extra": "Metric (TPS: 1000) - Average CPU Usage"
          },
          {
            "name": "otlp_grpc_exporter_metric_mock",
            "value": "60.09",
            "unit": "MB",
            "extra": "Metric (TPS: 1000) - Average Memory Usage"
          },
          {
            "name": "signalfx_exporter_metric_mock",
            "value": "0.05",
            "unit": "%",
            "extra": "Metric (TPS: 1000) - Average CPU Usage"
          },
          {
            "name": "signalfx_exporter_metric_mock",
            "value": "61.78",
            "unit": "MB",
            "extra": "Metric (TPS: 1000) - Average Memory Usage"
          },
          {
            "name": "prometheus_mock",
            "value": "1.30",
            "unit": "%",
            "extra": "Metric (TPS: 1000) - Average CPU Usage"
          },
          {
            "name": "prometheus_mock",
            "value": "105.75",
            "unit": "MB",
            "extra": "Metric (TPS: 1000) - Average Memory Usage"
          },
          {
            "name": "otlp_http_exporter_metric_mock",
            "value": "0.04",
            "unit": "%",
            "extra": "Metric (TPS: 1000) - Average CPU Usage"
          },
          {
            "name": "otlp_http_exporter_metric_mock",
            "value": "59.57",
            "unit": "MB",
            "extra": "Metric (TPS: 1000) - Average Memory Usage"
          },
          {
            "name": "otlp_metric_mock",
            "value": "0.04",
            "unit": "%",
            "extra": "Metric (TPS: 1000) - Average CPU Usage"
          },
          {
            "name": "otlp_metric_mock",
            "value": "58.85",
            "unit": "MB",
            "extra": "Metric (TPS: 1000) - Average Memory Usage"
          },
          {
            "name": "datadog_exporter_metric_mock",
            "value": "0.05",
            "unit": "%",
            "extra": "Metric (TPS: 1000) - Average CPU Usage"
          },
          {
            "name": "datadog_exporter_metric_mock",
            "value": "62.72",
            "unit": "MB",
            "extra": "Metric (TPS: 1000) - Average Memory Usage"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Jeffrey Chien",
            "username": "jefchien",
            "email": "chienjef@amazon.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "39615d39fd8172af08ba2bbbdc4f5077621f240b",
          "message": "Fix performance model version. (#897)\n\nClean up release-notes scripts.",
          "timestamp": "2022-01-19T18:33:10Z",
          "url": "https://github.com/aws-observability/aws-otel-collector/commit/39615d39fd8172af08ba2bbbdc4f5077621f240b"
        },
        "date": 1642647757904,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "otlp_http_exporter_trace_mock",
            "value": "122.04",
            "unit": "%",
            "extra": "Trace (TPS: 5000) - Average CPU Usage"
          },
          {
            "name": "otlp_http_exporter_trace_mock",
            "value": "77.01",
            "unit": "MB",
            "extra": "Trace (TPS: 5000) - Average Memory Usage"
          },
          {
            "name": "otlp_grpc_exporter_trace_mock",
            "value": "125.43",
            "unit": "%",
            "extra": "Trace (TPS: 5000) - Average CPU Usage"
          },
          {
            "name": "otlp_grpc_exporter_trace_mock",
            "value": "3454.43",
            "unit": "MB",
            "extra": "Trace (TPS: 5000) - Average Memory Usage"
          },
          {
            "name": "zipkin_mock",
            "value": "29.82",
            "unit": "%",
            "extra": "Trace (TPS: 5000) - Average CPU Usage"
          },
          {
            "name": "zipkin_mock",
            "value": "502.54",
            "unit": "MB",
            "extra": "Trace (TPS: 5000) - Average Memory Usage"
          },
          {
            "name": "logzio_exporter_trace_mock",
            "value": "121.09",
            "unit": "%",
            "extra": "Trace (TPS: 5000) - Average CPU Usage"
          },
          {
            "name": "logzio_exporter_trace_mock",
            "value": "124.75",
            "unit": "MB",
            "extra": "Trace (TPS: 5000) - Average Memory Usage"
          },
          {
            "name": "otlp_mock",
            "value": "138.01",
            "unit": "%",
            "extra": "Trace (TPS: 5000) - Average CPU Usage"
          },
          {
            "name": "otlp_mock",
            "value": "14071.62",
            "unit": "MB",
            "extra": "Trace (TPS: 5000) - Average Memory Usage"
          },
          {
            "name": "jaeger_mock",
            "value": "17.36",
            "unit": "%",
            "extra": "Trace (TPS: 5000) - Average CPU Usage"
          },
          {
            "name": "jaeger_mock",
            "value": "163.82",
            "unit": "MB",
            "extra": "Trace (TPS: 5000) - Average Memory Usage"
          },
          {
            "name": "sapm_exporter_trace_mock",
            "value": "110.45",
            "unit": "%",
            "extra": "Trace (TPS: 5000) - Average CPU Usage"
          },
          {
            "name": "sapm_exporter_trace_mock",
            "value": "91.93",
            "unit": "MB",
            "extra": "Trace (TPS: 5000) - Average Memory Usage"
          },
          {
            "name": "datadog_exporter_trace_mock",
            "value": "127.49",
            "unit": "%",
            "extra": "Trace (TPS: 5000) - Average CPU Usage"
          },
          {
            "name": "datadog_exporter_trace_mock",
            "value": "82.41",
            "unit": "MB",
            "extra": "Trace (TPS: 5000) - Average Memory Usage"
          },
          {
            "name": "xrayreceiver_mock",
            "value": "37.03",
            "unit": "%",
            "extra": "Trace (TPS: 5000) - Average CPU Usage"
          },
          {
            "name": "xrayreceiver_mock",
            "value": "734.70",
            "unit": "MB",
            "extra": "Trace (TPS: 5000) - Average Memory Usage"
          },
          {
            "name": "otlp_http_exporter_trace_mock",
            "value": "2.98",
            "unit": "%",
            "extra": "Trace (TPS: 100) - Average CPU Usage"
          },
          {
            "name": "otlp_http_exporter_trace_mock",
            "value": "69.79",
            "unit": "MB",
            "extra": "Trace (TPS: 100) - Average Memory Usage"
          },
          {
            "name": "otlp_mock",
            "value": "4.33",
            "unit": "%",
            "extra": "Trace (TPS: 100) - Average CPU Usage"
          },
          {
            "name": "otlp_mock",
            "value": "71.45",
            "unit": "MB",
            "extra": "Trace (TPS: 100) - Average Memory Usage"
          },
          {
            "name": "logzio_exporter_trace_mock",
            "value": "3.08",
            "unit": "%",
            "extra": "Trace (TPS: 100) - Average CPU Usage"
          },
          {
            "name": "logzio_exporter_trace_mock",
            "value": "90.58",
            "unit": "MB",
            "extra": "Trace (TPS: 100) - Average Memory Usage"
          },
          {
            "name": "sapm_exporter_trace_mock",
            "value": "3.32",
            "unit": "%",
            "extra": "Trace (TPS: 100) - Average CPU Usage"
          },
          {
            "name": "sapm_exporter_trace_mock",
            "value": "84.49",
            "unit": "MB",
            "extra": "Trace (TPS: 100) - Average Memory Usage"
          },
          {
            "name": "otlp_grpc_exporter_trace_mock",
            "value": "2.95",
            "unit": "%",
            "extra": "Trace (TPS: 100) - Average CPU Usage"
          },
          {
            "name": "otlp_grpc_exporter_trace_mock",
            "value": "132.93",
            "unit": "MB",
            "extra": "Trace (TPS: 100) - Average Memory Usage"
          },
          {
            "name": "datadog_exporter_trace_mock",
            "value": "5.25",
            "unit": "%",
            "extra": "Trace (TPS: 100) - Average CPU Usage"
          },
          {
            "name": "datadog_exporter_trace_mock",
            "value": "72.49",
            "unit": "MB",
            "extra": "Trace (TPS: 100) - Average Memory Usage"
          },
          {
            "name": "jaeger_mock",
            "value": "2.51",
            "unit": "%",
            "extra": "Trace (TPS: 100) - Average CPU Usage"
          },
          {
            "name": "jaeger_mock",
            "value": "76.04",
            "unit": "MB",
            "extra": "Trace (TPS: 100) - Average Memory Usage"
          },
          {
            "name": "xrayreceiver_mock",
            "value": "4.84",
            "unit": "%",
            "extra": "Trace (TPS: 100) - Average CPU Usage"
          },
          {
            "name": "xrayreceiver_mock",
            "value": "141.01",
            "unit": "MB",
            "extra": "Trace (TPS: 100) - Average Memory Usage"
          },
          {
            "name": "zipkin_mock",
            "value": "5.73",
            "unit": "%",
            "extra": "Trace (TPS: 100) - Average CPU Usage"
          },
          {
            "name": "zipkin_mock",
            "value": "78.72",
            "unit": "MB",
            "extra": "Trace (TPS: 100) - Average Memory Usage"
          },
          {
            "name": "logzio_exporter_trace_mock",
            "value": "28.24",
            "unit": "%",
            "extra": "Trace (TPS: 1000) - Average CPU Usage"
          },
          {
            "name": "logzio_exporter_trace_mock",
            "value": "102.78",
            "unit": "MB",
            "extra": "Trace (TPS: 1000) - Average Memory Usage"
          },
          {
            "name": "xrayreceiver_mock",
            "value": "27.01",
            "unit": "%",
            "extra": "Trace (TPS: 1000) - Average CPU Usage"
          },
          {
            "name": "xrayreceiver_mock",
            "value": "512.60",
            "unit": "MB",
            "extra": "Trace (TPS: 1000) - Average Memory Usage"
          },
          {
            "name": "otlp_mock",
            "value": "33.84",
            "unit": "%",
            "extra": "Trace (TPS: 1000) - Average CPU Usage"
          },
          {
            "name": "otlp_mock",
            "value": "76.14",
            "unit": "MB",
            "extra": "Trace (TPS: 1000) - Average Memory Usage"
          },
          {
            "name": "otlp_http_exporter_trace_mock",
            "value": "24.82",
            "unit": "%",
            "extra": "Trace (TPS: 1000) - Average CPU Usage"
          },
          {
            "name": "otlp_http_exporter_trace_mock",
            "value": "72.24",
            "unit": "MB",
            "extra": "Trace (TPS: 1000) - Average Memory Usage"
          },
          {
            "name": "sapm_exporter_trace_mock",
            "value": "25.30",
            "unit": "%",
            "extra": "Trace (TPS: 1000) - Average CPU Usage"
          },
          {
            "name": "sapm_exporter_trace_mock",
            "value": "86.59",
            "unit": "MB",
            "extra": "Trace (TPS: 1000) - Average Memory Usage"
          },
          {
            "name": "jaeger_mock",
            "value": "16.40",
            "unit": "%",
            "extra": "Trace (TPS: 1000) - Average CPU Usage"
          },
          {
            "name": "jaeger_mock",
            "value": "151.55",
            "unit": "MB",
            "extra": "Trace (TPS: 1000) - Average Memory Usage"
          },
          {
            "name": "otlp_grpc_exporter_trace_mock",
            "value": "28.86",
            "unit": "%",
            "extra": "Trace (TPS: 1000) - Average CPU Usage"
          },
          {
            "name": "otlp_grpc_exporter_trace_mock",
            "value": "725.37",
            "unit": "MB",
            "extra": "Trace (TPS: 1000) - Average Memory Usage"
          },
          {
            "name": "zipkin_mock",
            "value": "29.92",
            "unit": "%",
            "extra": "Trace (TPS: 1000) - Average CPU Usage"
          },
          {
            "name": "zipkin_mock",
            "value": "453.32",
            "unit": "MB",
            "extra": "Trace (TPS: 1000) - Average Memory Usage"
          },
          {
            "name": "datadog_exporter_trace_mock",
            "value": "30.97",
            "unit": "%",
            "extra": "Trace (TPS: 1000) - Average CPU Usage"
          },
          {
            "name": "datadog_exporter_trace_mock",
            "value": "75.36",
            "unit": "MB",
            "extra": "Trace (TPS: 1000) - Average Memory Usage"
          },
          {
            "name": "otlp_metric_mock",
            "value": "0.04",
            "unit": "%",
            "extra": "Metric (TPS: 100) - Average CPU Usage"
          },
          {
            "name": "otlp_metric_mock",
            "value": "60.31",
            "unit": "MB",
            "extra": "Metric (TPS: 100) - Average Memory Usage"
          },
          {
            "name": "statsd_mock",
            "value": "0.02",
            "unit": "%",
            "extra": "Metric (TPS: 100) - Average CPU Usage"
          },
          {
            "name": "statsd_mock",
            "value": "59.08",
            "unit": "MB",
            "extra": "Metric (TPS: 100) - Average Memory Usage"
          },
          {
            "name": "otlp_grpc_exporter_metric_mock",
            "value": "0.04",
            "unit": "%",
            "extra": "Metric (TPS: 100) - Average CPU Usage"
          },
          {
            "name": "otlp_grpc_exporter_metric_mock",
            "value": "59.36",
            "unit": "MB",
            "extra": "Metric (TPS: 100) - Average Memory Usage"
          },
          {
            "name": "prometheus_mock",
            "value": "0.13",
            "unit": "%",
            "extra": "Metric (TPS: 100) - Average CPU Usage"
          },
          {
            "name": "prometheus_mock",
            "value": "72.64",
            "unit": "MB",
            "extra": "Metric (TPS: 100) - Average Memory Usage"
          },
          {
            "name": "otlp_http_exporter_metric_mock",
            "value": "0.05",
            "unit": "%",
            "extra": "Metric (TPS: 100) - Average CPU Usage"
          },
          {
            "name": "otlp_http_exporter_metric_mock",
            "value": "58.97",
            "unit": "MB",
            "extra": "Metric (TPS: 100) - Average Memory Usage"
          },
          {
            "name": "dynatrace_exporter_metric_mock",
            "value": "0.04",
            "unit": "%",
            "extra": "Metric (TPS: 100) - Average CPU Usage"
          },
          {
            "name": "dynatrace_exporter_metric_mock",
            "value": "60.26",
            "unit": "MB",
            "extra": "Metric (TPS: 100) - Average Memory Usage"
          },
          {
            "name": "signalfx_exporter_metric_mock",
            "value": "0.03",
            "unit": "%",
            "extra": "Metric (TPS: 100) - Average CPU Usage"
          },
          {
            "name": "signalfx_exporter_metric_mock",
            "value": "60.41",
            "unit": "MB",
            "extra": "Metric (TPS: 100) - Average Memory Usage"
          },
          {
            "name": "datadog_exporter_metric_mock",
            "value": "0.04",
            "unit": "%",
            "extra": "Metric (TPS: 100) - Average CPU Usage"
          },
          {
            "name": "datadog_exporter_metric_mock",
            "value": "62.55",
            "unit": "MB",
            "extra": "Metric (TPS: 100) - Average Memory Usage"
          },
          {
            "name": "signalfx_exporter_metric_mock",
            "value": "0.04",
            "unit": "%",
            "extra": "Metric (TPS: 5000) - Average CPU Usage"
          },
          {
            "name": "signalfx_exporter_metric_mock",
            "value": "60.41",
            "unit": "MB",
            "extra": "Metric (TPS: 5000) - Average Memory Usage"
          },
          {
            "name": "prometheus_mock",
            "value": "7.71",
            "unit": "%",
            "extra": "Metric (TPS: 5000) - Average CPU Usage"
          },
          {
            "name": "prometheus_mock",
            "value": "257.92",
            "unit": "MB",
            "extra": "Metric (TPS: 5000) - Average Memory Usage"
          },
          {
            "name": "dynatrace_exporter_metric_mock",
            "value": "0.04",
            "unit": "%",
            "extra": "Metric (TPS: 5000) - Average CPU Usage"
          },
          {
            "name": "dynatrace_exporter_metric_mock",
            "value": "59.70",
            "unit": "MB",
            "extra": "Metric (TPS: 5000) - Average Memory Usage"
          },
          {
            "name": "otlp_grpc_exporter_metric_mock",
            "value": "0.04",
            "unit": "%",
            "extra": "Metric (TPS: 5000) - Average CPU Usage"
          },
          {
            "name": "otlp_grpc_exporter_metric_mock",
            "value": "58.83",
            "unit": "MB",
            "extra": "Metric (TPS: 5000) - Average Memory Usage"
          },
          {
            "name": "otlp_metric_mock",
            "value": "0.05",
            "unit": "%",
            "extra": "Metric (TPS: 5000) - Average CPU Usage"
          },
          {
            "name": "otlp_metric_mock",
            "value": "58.20",
            "unit": "MB",
            "extra": "Metric (TPS: 5000) - Average Memory Usage"
          },
          {
            "name": "datadog_exporter_metric_mock",
            "value": "0.04",
            "unit": "%",
            "extra": "Metric (TPS: 5000) - Average CPU Usage"
          },
          {
            "name": "datadog_exporter_metric_mock",
            "value": "63.09",
            "unit": "MB",
            "extra": "Metric (TPS: 5000) - Average Memory Usage"
          },
          {
            "name": "statsd_mock",
            "value": "0.02",
            "unit": "%",
            "extra": "Metric (TPS: 5000) - Average CPU Usage"
          },
          {
            "name": "statsd_mock",
            "value": "60.92",
            "unit": "MB",
            "extra": "Metric (TPS: 5000) - Average Memory Usage"
          },
          {
            "name": "otlp_http_exporter_metric_mock",
            "value": "0.04",
            "unit": "%",
            "extra": "Metric (TPS: 5000) - Average CPU Usage"
          },
          {
            "name": "otlp_http_exporter_metric_mock",
            "value": "59.96",
            "unit": "MB",
            "extra": "Metric (TPS: 5000) - Average Memory Usage"
          },
          {
            "name": "statsd_mock",
            "value": "0.02",
            "unit": "%",
            "extra": "Metric (TPS: 1000) - Average CPU Usage"
          },
          {
            "name": "statsd_mock",
            "value": "58.53",
            "unit": "MB",
            "extra": "Metric (TPS: 1000) - Average Memory Usage"
          },
          {
            "name": "dynatrace_exporter_metric_mock",
            "value": "0.05",
            "unit": "%",
            "extra": "Metric (TPS: 1000) - Average CPU Usage"
          },
          {
            "name": "dynatrace_exporter_metric_mock",
            "value": "58.72",
            "unit": "MB",
            "extra": "Metric (TPS: 1000) - Average Memory Usage"
          },
          {
            "name": "otlp_grpc_exporter_metric_mock",
            "value": "0.04",
            "unit": "%",
            "extra": "Metric (TPS: 1000) - Average CPU Usage"
          },
          {
            "name": "otlp_grpc_exporter_metric_mock",
            "value": "58.57",
            "unit": "MB",
            "extra": "Metric (TPS: 1000) - Average Memory Usage"
          },
          {
            "name": "signalfx_exporter_metric_mock",
            "value": "0.05",
            "unit": "%",
            "extra": "Metric (TPS: 1000) - Average CPU Usage"
          },
          {
            "name": "signalfx_exporter_metric_mock",
            "value": "61.23",
            "unit": "MB",
            "extra": "Metric (TPS: 1000) - Average Memory Usage"
          },
          {
            "name": "prometheus_mock",
            "value": "1.54",
            "unit": "%",
            "extra": "Metric (TPS: 1000) - Average CPU Usage"
          },
          {
            "name": "prometheus_mock",
            "value": "108.44",
            "unit": "MB",
            "extra": "Metric (TPS: 1000) - Average Memory Usage"
          },
          {
            "name": "otlp_http_exporter_metric_mock",
            "value": "0.04",
            "unit": "%",
            "extra": "Metric (TPS: 1000) - Average CPU Usage"
          },
          {
            "name": "otlp_http_exporter_metric_mock",
            "value": "60.17",
            "unit": "MB",
            "extra": "Metric (TPS: 1000) - Average Memory Usage"
          },
          {
            "name": "otlp_metric_mock",
            "value": "0.04",
            "unit": "%",
            "extra": "Metric (TPS: 1000) - Average CPU Usage"
          },
          {
            "name": "otlp_metric_mock",
            "value": "59.51",
            "unit": "MB",
            "extra": "Metric (TPS: 1000) - Average Memory Usage"
          },
          {
            "name": "datadog_exporter_metric_mock",
            "value": "0.05",
            "unit": "%",
            "extra": "Metric (TPS: 1000) - Average CPU Usage"
          },
          {
            "name": "datadog_exporter_metric_mock",
            "value": "63.22",
            "unit": "MB",
            "extra": "Metric (TPS: 1000) - Average Memory Usage"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "sethAmazon",
            "username": "sethAmazon",
            "email": "81644108+sethAmazon@users.noreply.github.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "3a1152dabc44d66a4b0b7ff0f4edc59b617986d4",
          "message": "EKS ARM64 Test Case Matrix Creation (#903)",
          "timestamp": "2022-01-20T16:26:13Z",
          "url": "https://github.com/aws-observability/aws-otel-collector/commit/3a1152dabc44d66a4b0b7ff0f4edc59b617986d4"
        },
        "date": 1642727366565,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "statsd_mock",
            "value": "0.03",
            "unit": "%",
            "extra": "Metric (TPS: 1000) - Average CPU Usage"
          },
          {
            "name": "statsd_mock",
            "value": "59.50",
            "unit": "MB",
            "extra": "Metric (TPS: 1000) - Average Memory Usage"
          },
          {
            "name": "dynatrace_exporter_metric_mock",
            "value": "0.04",
            "unit": "%",
            "extra": "Metric (TPS: 1000) - Average CPU Usage"
          },
          {
            "name": "dynatrace_exporter_metric_mock",
            "value": "60.49",
            "unit": "MB",
            "extra": "Metric (TPS: 1000) - Average Memory Usage"
          },
          {
            "name": "otlp_metric_mock",
            "value": "0.05",
            "unit": "%",
            "extra": "Metric (TPS: 1000) - Average CPU Usage"
          },
          {
            "name": "otlp_metric_mock",
            "value": "59.11",
            "unit": "MB",
            "extra": "Metric (TPS: 1000) - Average Memory Usage"
          },
          {
            "name": "datadog_exporter_metric_mock",
            "value": "0.04",
            "unit": "%",
            "extra": "Metric (TPS: 1000) - Average CPU Usage"
          },
          {
            "name": "datadog_exporter_metric_mock",
            "value": "59.06",
            "unit": "MB",
            "extra": "Metric (TPS: 1000) - Average Memory Usage"
          },
          {
            "name": "signalfx_exporter_metric_mock",
            "value": "0.05",
            "unit": "%",
            "extra": "Metric (TPS: 1000) - Average CPU Usage"
          },
          {
            "name": "signalfx_exporter_metric_mock",
            "value": "60.76",
            "unit": "MB",
            "extra": "Metric (TPS: 1000) - Average Memory Usage"
          },
          {
            "name": "otlp_http_exporter_metric_mock",
            "value": "0.04",
            "unit": "%",
            "extra": "Metric (TPS: 1000) - Average CPU Usage"
          },
          {
            "name": "otlp_http_exporter_metric_mock",
            "value": "59.99",
            "unit": "MB",
            "extra": "Metric (TPS: 1000) - Average Memory Usage"
          },
          {
            "name": "prometheus_mock",
            "value": "1.44",
            "unit": "%",
            "extra": "Metric (TPS: 1000) - Average CPU Usage"
          },
          {
            "name": "prometheus_mock",
            "value": "108.19",
            "unit": "MB",
            "extra": "Metric (TPS: 1000) - Average Memory Usage"
          },
          {
            "name": "otlp_grpc_exporter_metric_mock",
            "value": "0.04",
            "unit": "%",
            "extra": "Metric (TPS: 1000) - Average CPU Usage"
          },
          {
            "name": "otlp_grpc_exporter_metric_mock",
            "value": "61.17",
            "unit": "MB",
            "extra": "Metric (TPS: 1000) - Average Memory Usage"
          },
          {
            "name": "datadog_exporter_metric_mock",
            "value": "0.04",
            "unit": "%",
            "extra": "Metric (TPS: 5000) - Average CPU Usage"
          },
          {
            "name": "datadog_exporter_metric_mock",
            "value": "58.41",
            "unit": "MB",
            "extra": "Metric (TPS: 5000) - Average Memory Usage"
          },
          {
            "name": "dynatrace_exporter_metric_mock",
            "value": "0.05",
            "unit": "%",
            "extra": "Metric (TPS: 5000) - Average CPU Usage"
          },
          {
            "name": "dynatrace_exporter_metric_mock",
            "value": "58.84",
            "unit": "MB",
            "extra": "Metric (TPS: 5000) - Average Memory Usage"
          },
          {
            "name": "statsd_mock",
            "value": "0.02",
            "unit": "%",
            "extra": "Metric (TPS: 5000) - Average CPU Usage"
          },
          {
            "name": "statsd_mock",
            "value": "59.91",
            "unit": "MB",
            "extra": "Metric (TPS: 5000) - Average Memory Usage"
          },
          {
            "name": "otlp_metric_mock",
            "value": "0.05",
            "unit": "%",
            "extra": "Metric (TPS: 5000) - Average CPU Usage"
          },
          {
            "name": "otlp_metric_mock",
            "value": "58.98",
            "unit": "MB",
            "extra": "Metric (TPS: 5000) - Average Memory Usage"
          },
          {
            "name": "otlp_grpc_exporter_metric_mock",
            "value": "0.04",
            "unit": "%",
            "extra": "Metric (TPS: 5000) - Average CPU Usage"
          },
          {
            "name": "otlp_grpc_exporter_metric_mock",
            "value": "59.66",
            "unit": "MB",
            "extra": "Metric (TPS: 5000) - Average Memory Usage"
          },
          {
            "name": "prometheus_mock",
            "value": "7.37",
            "unit": "%",
            "extra": "Metric (TPS: 5000) - Average CPU Usage"
          },
          {
            "name": "prometheus_mock",
            "value": "259.07",
            "unit": "MB",
            "extra": "Metric (TPS: 5000) - Average Memory Usage"
          },
          {
            "name": "otlp_http_exporter_metric_mock",
            "value": "0.04",
            "unit": "%",
            "extra": "Metric (TPS: 5000) - Average CPU Usage"
          },
          {
            "name": "otlp_http_exporter_metric_mock",
            "value": "58.99",
            "unit": "MB",
            "extra": "Metric (TPS: 5000) - Average Memory Usage"
          },
          {
            "name": "signalfx_exporter_metric_mock",
            "value": "0.04",
            "unit": "%",
            "extra": "Metric (TPS: 5000) - Average CPU Usage"
          },
          {
            "name": "signalfx_exporter_metric_mock",
            "value": "61.09",
            "unit": "MB",
            "extra": "Metric (TPS: 5000) - Average Memory Usage"
          },
          {
            "name": "prometheus_mock",
            "value": "0.15",
            "unit": "%",
            "extra": "Metric (TPS: 100) - Average CPU Usage"
          },
          {
            "name": "prometheus_mock",
            "value": "72.53",
            "unit": "MB",
            "extra": "Metric (TPS: 100) - Average Memory Usage"
          },
          {
            "name": "otlp_metric_mock",
            "value": "0.05",
            "unit": "%",
            "extra": "Metric (TPS: 100) - Average CPU Usage"
          },
          {
            "name": "otlp_metric_mock",
            "value": "59.06",
            "unit": "MB",
            "extra": "Metric (TPS: 100) - Average Memory Usage"
          },
          {
            "name": "otlp_grpc_exporter_metric_mock",
            "value": "0.04",
            "unit": "%",
            "extra": "Metric (TPS: 100) - Average CPU Usage"
          },
          {
            "name": "otlp_grpc_exporter_metric_mock",
            "value": "59.66",
            "unit": "MB",
            "extra": "Metric (TPS: 100) - Average Memory Usage"
          },
          {
            "name": "signalfx_exporter_metric_mock",
            "value": "0.04",
            "unit": "%",
            "extra": "Metric (TPS: 100) - Average CPU Usage"
          },
          {
            "name": "signalfx_exporter_metric_mock",
            "value": "61.57",
            "unit": "MB",
            "extra": "Metric (TPS: 100) - Average Memory Usage"
          },
          {
            "name": "statsd_mock",
            "value": "0.02",
            "unit": "%",
            "extra": "Metric (TPS: 100) - Average CPU Usage"
          },
          {
            "name": "statsd_mock",
            "value": "59.54",
            "unit": "MB",
            "extra": "Metric (TPS: 100) - Average Memory Usage"
          },
          {
            "name": "datadog_exporter_metric_mock",
            "value": "0.05",
            "unit": "%",
            "extra": "Metric (TPS: 100) - Average CPU Usage"
          },
          {
            "name": "datadog_exporter_metric_mock",
            "value": "59.68",
            "unit": "MB",
            "extra": "Metric (TPS: 100) - Average Memory Usage"
          },
          {
            "name": "otlp_http_exporter_metric_mock",
            "value": "0.04",
            "unit": "%",
            "extra": "Metric (TPS: 100) - Average CPU Usage"
          },
          {
            "name": "otlp_http_exporter_metric_mock",
            "value": "58.63",
            "unit": "MB",
            "extra": "Metric (TPS: 100) - Average Memory Usage"
          },
          {
            "name": "dynatrace_exporter_metric_mock",
            "value": "0.04",
            "unit": "%",
            "extra": "Metric (TPS: 100) - Average CPU Usage"
          },
          {
            "name": "dynatrace_exporter_metric_mock",
            "value": "59.68",
            "unit": "MB",
            "extra": "Metric (TPS: 100) - Average Memory Usage"
          },
          {
            "name": "sapm_exporter_trace_mock",
            "value": "109.30",
            "unit": "%",
            "extra": "Trace (TPS: 5000) - Average CPU Usage"
          },
          {
            "name": "sapm_exporter_trace_mock",
            "value": "91.67",
            "unit": "MB",
            "extra": "Trace (TPS: 5000) - Average Memory Usage"
          },
          {
            "name": "logzio_exporter_trace_mock",
            "value": "121.68",
            "unit": "%",
            "extra": "Trace (TPS: 5000) - Average CPU Usage"
          },
          {
            "name": "logzio_exporter_trace_mock",
            "value": "124.15",
            "unit": "MB",
            "extra": "Trace (TPS: 5000) - Average Memory Usage"
          },
          {
            "name": "otlp_grpc_exporter_trace_mock",
            "value": "116.72",
            "unit": "%",
            "extra": "Trace (TPS: 5000) - Average CPU Usage"
          },
          {
            "name": "otlp_grpc_exporter_trace_mock",
            "value": "3261.50",
            "unit": "MB",
            "extra": "Trace (TPS: 5000) - Average Memory Usage"
          },
          {
            "name": "zipkin_mock",
            "value": "28.74",
            "unit": "%",
            "extra": "Trace (TPS: 5000) - Average CPU Usage"
          },
          {
            "name": "zipkin_mock",
            "value": "511.96",
            "unit": "MB",
            "extra": "Trace (TPS: 5000) - Average Memory Usage"
          },
          {
            "name": "jaeger_mock",
            "value": "18.23",
            "unit": "%",
            "extra": "Trace (TPS: 5000) - Average CPU Usage"
          },
          {
            "name": "jaeger_mock",
            "value": "167.53",
            "unit": "MB",
            "extra": "Trace (TPS: 5000) - Average Memory Usage"
          },
          {
            "name": "datadog_exporter_trace_mock",
            "value": "126.91",
            "unit": "%",
            "extra": "Trace (TPS: 5000) - Average CPU Usage"
          },
          {
            "name": "datadog_exporter_trace_mock",
            "value": "82.54",
            "unit": "MB",
            "extra": "Trace (TPS: 5000) - Average Memory Usage"
          },
          {
            "name": "xrayreceiver_mock",
            "value": "37.84",
            "unit": "%",
            "extra": "Trace (TPS: 5000) - Average CPU Usage"
          },
          {
            "name": "xrayreceiver_mock",
            "value": "659.71",
            "unit": "MB",
            "extra": "Trace (TPS: 5000) - Average Memory Usage"
          },
          {
            "name": "otlp_mock",
            "value": "151.55",
            "unit": "%",
            "extra": "Trace (TPS: 5000) - Average CPU Usage"
          },
          {
            "name": "otlp_mock",
            "value": "15544.45",
            "unit": "MB",
            "extra": "Trace (TPS: 5000) - Average Memory Usage"
          },
          {
            "name": "otlp_http_exporter_trace_mock",
            "value": "114.52",
            "unit": "%",
            "extra": "Trace (TPS: 5000) - Average CPU Usage"
          },
          {
            "name": "otlp_http_exporter_trace_mock",
            "value": "77.41",
            "unit": "MB",
            "extra": "Trace (TPS: 5000) - Average Memory Usage"
          },
          {
            "name": "datadog_exporter_trace_mock",
            "value": "5.19",
            "unit": "%",
            "extra": "Trace (TPS: 100) - Average CPU Usage"
          },
          {
            "name": "datadog_exporter_trace_mock",
            "value": "73.09",
            "unit": "MB",
            "extra": "Trace (TPS: 100) - Average Memory Usage"
          },
          {
            "name": "logzio_exporter_trace_mock",
            "value": "3.12",
            "unit": "%",
            "extra": "Trace (TPS: 100) - Average CPU Usage"
          },
          {
            "name": "logzio_exporter_trace_mock",
            "value": "90.06",
            "unit": "MB",
            "extra": "Trace (TPS: 100) - Average Memory Usage"
          },
          {
            "name": "jaeger_mock",
            "value": "2.33",
            "unit": "%",
            "extra": "Trace (TPS: 100) - Average CPU Usage"
          },
          {
            "name": "jaeger_mock",
            "value": "75.74",
            "unit": "MB",
            "extra": "Trace (TPS: 100) - Average Memory Usage"
          },
          {
            "name": "sapm_exporter_trace_mock",
            "value": "3.54",
            "unit": "%",
            "extra": "Trace (TPS: 100) - Average CPU Usage"
          },
          {
            "name": "sapm_exporter_trace_mock",
            "value": "82.93",
            "unit": "MB",
            "extra": "Trace (TPS: 100) - Average Memory Usage"
          },
          {
            "name": "xrayreceiver_mock",
            "value": "5.21",
            "unit": "%",
            "extra": "Trace (TPS: 100) - Average CPU Usage"
          },
          {
            "name": "xrayreceiver_mock",
            "value": "145.37",
            "unit": "MB",
            "extra": "Trace (TPS: 100) - Average Memory Usage"
          },
          {
            "name": "otlp_grpc_exporter_trace_mock",
            "value": "3.13",
            "unit": "%",
            "extra": "Trace (TPS: 100) - Average CPU Usage"
          },
          {
            "name": "otlp_grpc_exporter_trace_mock",
            "value": "131.17",
            "unit": "MB",
            "extra": "Trace (TPS: 100) - Average Memory Usage"
          },
          {
            "name": "zipkin_mock",
            "value": "5.76",
            "unit": "%",
            "extra": "Trace (TPS: 100) - Average CPU Usage"
          },
          {
            "name": "zipkin_mock",
            "value": "79.05",
            "unit": "MB",
            "extra": "Trace (TPS: 100) - Average Memory Usage"
          },
          {
            "name": "otlp_http_exporter_trace_mock",
            "value": "3.47",
            "unit": "%",
            "extra": "Trace (TPS: 100) - Average CPU Usage"
          },
          {
            "name": "otlp_http_exporter_trace_mock",
            "value": "69.67",
            "unit": "MB",
            "extra": "Trace (TPS: 100) - Average Memory Usage"
          },
          {
            "name": "otlp_mock",
            "value": "3.93",
            "unit": "%",
            "extra": "Trace (TPS: 100) - Average CPU Usage"
          },
          {
            "name": "otlp_mock",
            "value": "71.11",
            "unit": "MB",
            "extra": "Trace (TPS: 100) - Average Memory Usage"
          },
          {
            "name": "logzio_exporter_trace_mock",
            "value": "27.46",
            "unit": "%",
            "extra": "Trace (TPS: 1000) - Average CPU Usage"
          },
          {
            "name": "logzio_exporter_trace_mock",
            "value": "102.49",
            "unit": "MB",
            "extra": "Trace (TPS: 1000) - Average Memory Usage"
          },
          {
            "name": "otlp_http_exporter_trace_mock",
            "value": "25.84",
            "unit": "%",
            "extra": "Trace (TPS: 1000) - Average CPU Usage"
          },
          {
            "name": "otlp_http_exporter_trace_mock",
            "value": "71.91",
            "unit": "MB",
            "extra": "Trace (TPS: 1000) - Average Memory Usage"
          },
          {
            "name": "zipkin_mock",
            "value": "29.96",
            "unit": "%",
            "extra": "Trace (TPS: 1000) - Average CPU Usage"
          },
          {
            "name": "zipkin_mock",
            "value": "457.52",
            "unit": "MB",
            "extra": "Trace (TPS: 1000) - Average Memory Usage"
          },
          {
            "name": "sapm_exporter_trace_mock",
            "value": "26.00",
            "unit": "%",
            "extra": "Trace (TPS: 1000) - Average CPU Usage"
          },
          {
            "name": "sapm_exporter_trace_mock",
            "value": "86.46",
            "unit": "MB",
            "extra": "Trace (TPS: 1000) - Average Memory Usage"
          },
          {
            "name": "xrayreceiver_mock",
            "value": "27.61",
            "unit": "%",
            "extra": "Trace (TPS: 1000) - Average CPU Usage"
          },
          {
            "name": "xrayreceiver_mock",
            "value": "496.23",
            "unit": "MB",
            "extra": "Trace (TPS: 1000) - Average Memory Usage"
          },
          {
            "name": "jaeger_mock",
            "value": "16.51",
            "unit": "%",
            "extra": "Trace (TPS: 1000) - Average CPU Usage"
          },
          {
            "name": "jaeger_mock",
            "value": "152.48",
            "unit": "MB",
            "extra": "Trace (TPS: 1000) - Average Memory Usage"
          },
          {
            "name": "datadog_exporter_trace_mock",
            "value": "31.03",
            "unit": "%",
            "extra": "Trace (TPS: 1000) - Average CPU Usage"
          },
          {
            "name": "datadog_exporter_trace_mock",
            "value": "75.41",
            "unit": "MB",
            "extra": "Trace (TPS: 1000) - Average Memory Usage"
          },
          {
            "name": "otlp_mock",
            "value": "35.27",
            "unit": "%",
            "extra": "Trace (TPS: 1000) - Average CPU Usage"
          },
          {
            "name": "otlp_mock",
            "value": "76.96",
            "unit": "MB",
            "extra": "Trace (TPS: 1000) - Average Memory Usage"
          },
          {
            "name": "otlp_grpc_exporter_trace_mock",
            "value": "28.74",
            "unit": "%",
            "extra": "Trace (TPS: 1000) - Average CPU Usage"
          },
          {
            "name": "otlp_grpc_exporter_trace_mock",
            "value": "678.37",
            "unit": "MB",
            "extra": "Trace (TPS: 1000) - Average Memory Usage"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Seth L",
            "username": "sethAmazon",
            "email": "81644108+sethAmazon@users.noreply.github.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "f6dddb4ad9bb61d34cb8c94d50f542dec8cd4b8c",
          "message": "Fix cfn-lint for aws-otel-fargate-sidecar-deployment-cfn.yaml (#909)",
          "timestamp": "2022-01-24T16:30:00Z",
          "url": "https://github.com/aws-observability/aws-otel-collector/commit/f6dddb4ad9bb61d34cb8c94d50f542dec8cd4b8c"
        },
        "date": 1643233789779,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "statsd_mock",
            "value": "0.02",
            "unit": "%",
            "extra": "Metric (TPS: 1000) - Average CPU Usage"
          },
          {
            "name": "statsd_mock",
            "value": "60.58",
            "unit": "MB",
            "extra": "Metric (TPS: 1000) - Average Memory Usage"
          },
          {
            "name": "dynatrace_exporter_metric_mock",
            "value": "0.04",
            "unit": "%",
            "extra": "Metric (TPS: 1000) - Average CPU Usage"
          },
          {
            "name": "dynatrace_exporter_metric_mock",
            "value": "58.19",
            "unit": "MB",
            "extra": "Metric (TPS: 1000) - Average Memory Usage"
          },
          {
            "name": "otlp_metric_mock",
            "value": "0.04",
            "unit": "%",
            "extra": "Metric (TPS: 1000) - Average CPU Usage"
          },
          {
            "name": "otlp_metric_mock",
            "value": "59.06",
            "unit": "MB",
            "extra": "Metric (TPS: 1000) - Average Memory Usage"
          },
          {
            "name": "datadog_exporter_metric_mock",
            "value": "0.04",
            "unit": "%",
            "extra": "Metric (TPS: 1000) - Average CPU Usage"
          },
          {
            "name": "datadog_exporter_metric_mock",
            "value": "59.21",
            "unit": "MB",
            "extra": "Metric (TPS: 1000) - Average Memory Usage"
          },
          {
            "name": "signalfx_exporter_metric_mock",
            "value": "0.04",
            "unit": "%",
            "extra": "Metric (TPS: 1000) - Average CPU Usage"
          },
          {
            "name": "signalfx_exporter_metric_mock",
            "value": "61.17",
            "unit": "MB",
            "extra": "Metric (TPS: 1000) - Average Memory Usage"
          },
          {
            "name": "otlp_http_exporter_metric_mock",
            "value": "0.04",
            "unit": "%",
            "extra": "Metric (TPS: 1000) - Average CPU Usage"
          },
          {
            "name": "otlp_http_exporter_metric_mock",
            "value": "59.40",
            "unit": "MB",
            "extra": "Metric (TPS: 1000) - Average Memory Usage"
          },
          {
            "name": "prometheus_mock",
            "value": "1.44",
            "unit": "%",
            "extra": "Metric (TPS: 1000) - Average CPU Usage"
          },
          {
            "name": "prometheus_mock",
            "value": "105.93",
            "unit": "MB",
            "extra": "Metric (TPS: 1000) - Average Memory Usage"
          },
          {
            "name": "otlp_grpc_exporter_metric_mock",
            "value": "0.04",
            "unit": "%",
            "extra": "Metric (TPS: 1000) - Average CPU Usage"
          },
          {
            "name": "otlp_grpc_exporter_metric_mock",
            "value": "58.80",
            "unit": "MB",
            "extra": "Metric (TPS: 1000) - Average Memory Usage"
          },
          {
            "name": "datadog_exporter_metric_mock",
            "value": "0.05",
            "unit": "%",
            "extra": "Metric (TPS: 5000) - Average CPU Usage"
          },
          {
            "name": "datadog_exporter_metric_mock",
            "value": "62.98",
            "unit": "MB",
            "extra": "Metric (TPS: 5000) - Average Memory Usage"
          },
          {
            "name": "dynatrace_exporter_metric_mock",
            "value": "0.04",
            "unit": "%",
            "extra": "Metric (TPS: 5000) - Average CPU Usage"
          },
          {
            "name": "dynatrace_exporter_metric_mock",
            "value": "60.57",
            "unit": "MB",
            "extra": "Metric (TPS: 5000) - Average Memory Usage"
          },
          {
            "name": "statsd_mock",
            "value": "0.01",
            "unit": "%",
            "extra": "Metric (TPS: 5000) - Average CPU Usage"
          },
          {
            "name": "statsd_mock",
            "value": "60.14",
            "unit": "MB",
            "extra": "Metric (TPS: 5000) - Average Memory Usage"
          },
          {
            "name": "otlp_metric_mock",
            "value": "0.04",
            "unit": "%",
            "extra": "Metric (TPS: 5000) - Average CPU Usage"
          },
          {
            "name": "otlp_metric_mock",
            "value": "59.56",
            "unit": "MB",
            "extra": "Metric (TPS: 5000) - Average Memory Usage"
          },
          {
            "name": "otlp_grpc_exporter_metric_mock",
            "value": "0.05",
            "unit": "%",
            "extra": "Metric (TPS: 5000) - Average CPU Usage"
          },
          {
            "name": "otlp_grpc_exporter_metric_mock",
            "value": "60.81",
            "unit": "MB",
            "extra": "Metric (TPS: 5000) - Average Memory Usage"
          },
          {
            "name": "prometheus_mock",
            "value": "7.45",
            "unit": "%",
            "extra": "Metric (TPS: 5000) - Average CPU Usage"
          },
          {
            "name": "prometheus_mock",
            "value": "256.06",
            "unit": "MB",
            "extra": "Metric (TPS: 5000) - Average Memory Usage"
          },
          {
            "name": "otlp_http_exporter_metric_mock",
            "value": "0.04",
            "unit": "%",
            "extra": "Metric (TPS: 5000) - Average CPU Usage"
          },
          {
            "name": "otlp_http_exporter_metric_mock",
            "value": "59.36",
            "unit": "MB",
            "extra": "Metric (TPS: 5000) - Average Memory Usage"
          },
          {
            "name": "signalfx_exporter_metric_mock",
            "value": "0.05",
            "unit": "%",
            "extra": "Metric (TPS: 5000) - Average CPU Usage"
          },
          {
            "name": "signalfx_exporter_metric_mock",
            "value": "61.01",
            "unit": "MB",
            "extra": "Metric (TPS: 5000) - Average Memory Usage"
          },
          {
            "name": "prometheus_mock",
            "value": "0.13",
            "unit": "%",
            "extra": "Metric (TPS: 100) - Average CPU Usage"
          },
          {
            "name": "prometheus_mock",
            "value": "73.20",
            "unit": "MB",
            "extra": "Metric (TPS: 100) - Average Memory Usage"
          },
          {
            "name": "otlp_metric_mock",
            "value": "0.04",
            "unit": "%",
            "extra": "Metric (TPS: 100) - Average CPU Usage"
          },
          {
            "name": "otlp_metric_mock",
            "value": "59.32",
            "unit": "MB",
            "extra": "Metric (TPS: 100) - Average Memory Usage"
          },
          {
            "name": "otlp_grpc_exporter_metric_mock",
            "value": "0.05",
            "unit": "%",
            "extra": "Metric (TPS: 100) - Average CPU Usage"
          },
          {
            "name": "otlp_grpc_exporter_metric_mock",
            "value": "59.80",
            "unit": "MB",
            "extra": "Metric (TPS: 100) - Average Memory Usage"
          },
          {
            "name": "signalfx_exporter_metric_mock",
            "value": "0.04",
            "unit": "%",
            "extra": "Metric (TPS: 100) - Average CPU Usage"
          },
          {
            "name": "signalfx_exporter_metric_mock",
            "value": "60.52",
            "unit": "MB",
            "extra": "Metric (TPS: 100) - Average Memory Usage"
          },
          {
            "name": "statsd_mock",
            "value": "0.01",
            "unit": "%",
            "extra": "Metric (TPS: 100) - Average CPU Usage"
          },
          {
            "name": "statsd_mock",
            "value": "58.53",
            "unit": "MB",
            "extra": "Metric (TPS: 100) - Average Memory Usage"
          },
          {
            "name": "datadog_exporter_metric_mock",
            "value": "0.05",
            "unit": "%",
            "extra": "Metric (TPS: 100) - Average CPU Usage"
          },
          {
            "name": "datadog_exporter_metric_mock",
            "value": "61.24",
            "unit": "MB",
            "extra": "Metric (TPS: 100) - Average Memory Usage"
          },
          {
            "name": "otlp_http_exporter_metric_mock",
            "value": "0.05",
            "unit": "%",
            "extra": "Metric (TPS: 100) - Average CPU Usage"
          },
          {
            "name": "otlp_http_exporter_metric_mock",
            "value": "59.00",
            "unit": "MB",
            "extra": "Metric (TPS: 100) - Average Memory Usage"
          },
          {
            "name": "dynatrace_exporter_metric_mock",
            "value": "0.04",
            "unit": "%",
            "extra": "Metric (TPS: 100) - Average CPU Usage"
          },
          {
            "name": "dynatrace_exporter_metric_mock",
            "value": "59.08",
            "unit": "MB",
            "extra": "Metric (TPS: 100) - Average Memory Usage"
          },
          {
            "name": "sapm_exporter_trace_mock",
            "value": "115.57",
            "unit": "%",
            "extra": "Trace (TPS: 5000) - Average CPU Usage"
          },
          {
            "name": "sapm_exporter_trace_mock",
            "value": "92.39",
            "unit": "MB",
            "extra": "Trace (TPS: 5000) - Average Memory Usage"
          },
          {
            "name": "logzio_exporter_trace_mock",
            "value": "104.00",
            "unit": "%",
            "extra": "Trace (TPS: 5000) - Average CPU Usage"
          },
          {
            "name": "logzio_exporter_trace_mock",
            "value": "123.80",
            "unit": "MB",
            "extra": "Trace (TPS: 5000) - Average Memory Usage"
          },
          {
            "name": "otlp_grpc_exporter_trace_mock",
            "value": "120.29",
            "unit": "%",
            "extra": "Trace (TPS: 5000) - Average CPU Usage"
          },
          {
            "name": "otlp_grpc_exporter_trace_mock",
            "value": "3591.28",
            "unit": "MB",
            "extra": "Trace (TPS: 5000) - Average Memory Usage"
          },
          {
            "name": "zipkin_mock",
            "value": "29.78",
            "unit": "%",
            "extra": "Trace (TPS: 5000) - Average CPU Usage"
          },
          {
            "name": "zipkin_mock",
            "value": "499.46",
            "unit": "MB",
            "extra": "Trace (TPS: 5000) - Average Memory Usage"
          },
          {
            "name": "jaeger_mock",
            "value": "17.71",
            "unit": "%",
            "extra": "Trace (TPS: 5000) - Average CPU Usage"
          },
          {
            "name": "jaeger_mock",
            "value": "166.39",
            "unit": "MB",
            "extra": "Trace (TPS: 5000) - Average Memory Usage"
          },
          {
            "name": "datadog_exporter_trace_mock",
            "value": "132.53",
            "unit": "%",
            "extra": "Trace (TPS: 5000) - Average CPU Usage"
          },
          {
            "name": "datadog_exporter_trace_mock",
            "value": "82.58",
            "unit": "MB",
            "extra": "Trace (TPS: 5000) - Average Memory Usage"
          },
          {
            "name": "xrayreceiver_mock",
            "value": "37.07",
            "unit": "%",
            "extra": "Trace (TPS: 5000) - Average CPU Usage"
          },
          {
            "name": "xrayreceiver_mock",
            "value": "789.99",
            "unit": "MB",
            "extra": "Trace (TPS: 5000) - Average Memory Usage"
          },
          {
            "name": "otlp_mock",
            "value": "144.17",
            "unit": "%",
            "extra": "Trace (TPS: 5000) - Average CPU Usage"
          },
          {
            "name": "otlp_mock",
            "value": "13896.77",
            "unit": "MB",
            "extra": "Trace (TPS: 5000) - Average Memory Usage"
          },
          {
            "name": "otlp_http_exporter_trace_mock",
            "value": "115.00",
            "unit": "%",
            "extra": "Trace (TPS: 5000) - Average CPU Usage"
          },
          {
            "name": "otlp_http_exporter_trace_mock",
            "value": "76.91",
            "unit": "MB",
            "extra": "Trace (TPS: 5000) - Average Memory Usage"
          },
          {
            "name": "datadog_exporter_trace_mock",
            "value": "6.15",
            "unit": "%",
            "extra": "Trace (TPS: 100) - Average CPU Usage"
          },
          {
            "name": "datadog_exporter_trace_mock",
            "value": "73.91",
            "unit": "MB",
            "extra": "Trace (TPS: 100) - Average Memory Usage"
          },
          {
            "name": "logzio_exporter_trace_mock",
            "value": "3.22",
            "unit": "%",
            "extra": "Trace (TPS: 100) - Average CPU Usage"
          },
          {
            "name": "logzio_exporter_trace_mock",
            "value": "90.79",
            "unit": "MB",
            "extra": "Trace (TPS: 100) - Average Memory Usage"
          },
          {
            "name": "jaeger_mock",
            "value": "2.44",
            "unit": "%",
            "extra": "Trace (TPS: 100) - Average CPU Usage"
          },
          {
            "name": "jaeger_mock",
            "value": "75.84",
            "unit": "MB",
            "extra": "Trace (TPS: 100) - Average Memory Usage"
          },
          {
            "name": "sapm_exporter_trace_mock",
            "value": "3.71",
            "unit": "%",
            "extra": "Trace (TPS: 100) - Average CPU Usage"
          },
          {
            "name": "sapm_exporter_trace_mock",
            "value": "84.60",
            "unit": "MB",
            "extra": "Trace (TPS: 100) - Average Memory Usage"
          },
          {
            "name": "xrayreceiver_mock",
            "value": "4.76",
            "unit": "%",
            "extra": "Trace (TPS: 100) - Average CPU Usage"
          },
          {
            "name": "xrayreceiver_mock",
            "value": "152.05",
            "unit": "MB",
            "extra": "Trace (TPS: 100) - Average Memory Usage"
          },
          {
            "name": "otlp_grpc_exporter_trace_mock",
            "value": "3.12",
            "unit": "%",
            "extra": "Trace (TPS: 100) - Average CPU Usage"
          },
          {
            "name": "otlp_grpc_exporter_trace_mock",
            "value": "127.31",
            "unit": "MB",
            "extra": "Trace (TPS: 100) - Average Memory Usage"
          },
          {
            "name": "zipkin_mock",
            "value": "5.68",
            "unit": "%",
            "extra": "Trace (TPS: 100) - Average CPU Usage"
          },
          {
            "name": "zipkin_mock",
            "value": "78.26",
            "unit": "MB",
            "extra": "Trace (TPS: 100) - Average Memory Usage"
          },
          {
            "name": "otlp_http_exporter_trace_mock",
            "value": "4.19",
            "unit": "%",
            "extra": "Trace (TPS: 100) - Average CPU Usage"
          },
          {
            "name": "otlp_http_exporter_trace_mock",
            "value": "69.96",
            "unit": "MB",
            "extra": "Trace (TPS: 100) - Average Memory Usage"
          },
          {
            "name": "otlp_mock",
            "value": "4.76",
            "unit": "%",
            "extra": "Trace (TPS: 100) - Average CPU Usage"
          },
          {
            "name": "otlp_mock",
            "value": "72.25",
            "unit": "MB",
            "extra": "Trace (TPS: 100) - Average Memory Usage"
          },
          {
            "name": "logzio_exporter_trace_mock",
            "value": "26.43",
            "unit": "%",
            "extra": "Trace (TPS: 1000) - Average CPU Usage"
          },
          {
            "name": "logzio_exporter_trace_mock",
            "value": "101.91",
            "unit": "MB",
            "extra": "Trace (TPS: 1000) - Average Memory Usage"
          },
          {
            "name": "otlp_http_exporter_trace_mock",
            "value": "28.13",
            "unit": "%",
            "extra": "Trace (TPS: 1000) - Average CPU Usage"
          },
          {
            "name": "otlp_http_exporter_trace_mock",
            "value": "71.14",
            "unit": "MB",
            "extra": "Trace (TPS: 1000) - Average Memory Usage"
          },
          {
            "name": "zipkin_mock",
            "value": "31.60",
            "unit": "%",
            "extra": "Trace (TPS: 1000) - Average CPU Usage"
          },
          {
            "name": "zipkin_mock",
            "value": "486.96",
            "unit": "MB",
            "extra": "Trace (TPS: 1000) - Average Memory Usage"
          },
          {
            "name": "sapm_exporter_trace_mock",
            "value": "26.60",
            "unit": "%",
            "extra": "Trace (TPS: 1000) - Average CPU Usage"
          },
          {
            "name": "sapm_exporter_trace_mock",
            "value": "86.64",
            "unit": "MB",
            "extra": "Trace (TPS: 1000) - Average Memory Usage"
          },
          {
            "name": "xrayreceiver_mock",
            "value": "25.89",
            "unit": "%",
            "extra": "Trace (TPS: 1000) - Average CPU Usage"
          },
          {
            "name": "xrayreceiver_mock",
            "value": "478.55",
            "unit": "MB",
            "extra": "Trace (TPS: 1000) - Average Memory Usage"
          },
          {
            "name": "jaeger_mock",
            "value": "16.55",
            "unit": "%",
            "extra": "Trace (TPS: 1000) - Average CPU Usage"
          },
          {
            "name": "jaeger_mock",
            "value": "148.47",
            "unit": "MB",
            "extra": "Trace (TPS: 1000) - Average Memory Usage"
          },
          {
            "name": "datadog_exporter_trace_mock",
            "value": "31.49",
            "unit": "%",
            "extra": "Trace (TPS: 1000) - Average CPU Usage"
          },
          {
            "name": "datadog_exporter_trace_mock",
            "value": "74.58",
            "unit": "MB",
            "extra": "Trace (TPS: 1000) - Average Memory Usage"
          },
          {
            "name": "otlp_mock",
            "value": "33.73",
            "unit": "%",
            "extra": "Trace (TPS: 1000) - Average CPU Usage"
          },
          {
            "name": "otlp_mock",
            "value": "75.10",
            "unit": "MB",
            "extra": "Trace (TPS: 1000) - Average Memory Usage"
          },
          {
            "name": "otlp_grpc_exporter_trace_mock",
            "value": "29.86",
            "unit": "%",
            "extra": "Trace (TPS: 1000) - Average CPU Usage"
          },
          {
            "name": "otlp_grpc_exporter_trace_mock",
            "value": "658.72",
            "unit": "MB",
            "extra": "Trace (TPS: 1000) - Average Memory Usage"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Jeffrey Chien",
            "username": "jefchien",
            "email": "chienjef@amazon.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "5f4a11c4bce4678adda475f24cd1f64bada1aa72",
          "message": "Add IAM role clean to cleaner. (#923)",
          "timestamp": "2022-01-27T00:32:55Z",
          "url": "https://github.com/aws-observability/aws-otel-collector/commit/5f4a11c4bce4678adda475f24cd1f64bada1aa72"
        },
        "date": 1643329543881,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "statsd_mock",
            "value": "0.01",
            "unit": "%",
            "extra": "Metric (TPS: 1000) - Average CPU Usage"
          },
          {
            "name": "statsd_mock",
            "value": "58.12",
            "unit": "MB",
            "extra": "Metric (TPS: 1000) - Average Memory Usage"
          },
          {
            "name": "dynatrace_exporter_metric_mock",
            "value": "0.04",
            "unit": "%",
            "extra": "Metric (TPS: 1000) - Average CPU Usage"
          },
          {
            "name": "dynatrace_exporter_metric_mock",
            "value": "60.59",
            "unit": "MB",
            "extra": "Metric (TPS: 1000) - Average Memory Usage"
          },
          {
            "name": "otlp_metric_mock",
            "value": "0.04",
            "unit": "%",
            "extra": "Metric (TPS: 1000) - Average CPU Usage"
          },
          {
            "name": "otlp_metric_mock",
            "value": "58.98",
            "unit": "MB",
            "extra": "Metric (TPS: 1000) - Average Memory Usage"
          },
          {
            "name": "datadog_exporter_metric_mock",
            "value": "0.05",
            "unit": "%",
            "extra": "Metric (TPS: 1000) - Average CPU Usage"
          },
          {
            "name": "datadog_exporter_metric_mock",
            "value": "60.92",
            "unit": "MB",
            "extra": "Metric (TPS: 1000) - Average Memory Usage"
          },
          {
            "name": "signalfx_exporter_metric_mock",
            "value": "0.04",
            "unit": "%",
            "extra": "Metric (TPS: 1000) - Average CPU Usage"
          },
          {
            "name": "signalfx_exporter_metric_mock",
            "value": "61.74",
            "unit": "MB",
            "extra": "Metric (TPS: 1000) - Average Memory Usage"
          },
          {
            "name": "otlp_http_exporter_metric_mock",
            "value": "0.04",
            "unit": "%",
            "extra": "Metric (TPS: 1000) - Average CPU Usage"
          },
          {
            "name": "otlp_http_exporter_metric_mock",
            "value": "59.76",
            "unit": "MB",
            "extra": "Metric (TPS: 1000) - Average Memory Usage"
          },
          {
            "name": "prometheus_mock",
            "value": "1.51",
            "unit": "%",
            "extra": "Metric (TPS: 1000) - Average CPU Usage"
          },
          {
            "name": "prometheus_mock",
            "value": "108.64",
            "unit": "MB",
            "extra": "Metric (TPS: 1000) - Average Memory Usage"
          },
          {
            "name": "otlp_grpc_exporter_metric_mock",
            "value": "0.05",
            "unit": "%",
            "extra": "Metric (TPS: 1000) - Average CPU Usage"
          },
          {
            "name": "otlp_grpc_exporter_metric_mock",
            "value": "58.75",
            "unit": "MB",
            "extra": "Metric (TPS: 1000) - Average Memory Usage"
          },
          {
            "name": "datadog_exporter_metric_mock",
            "value": "0.04",
            "unit": "%",
            "extra": "Metric (TPS: 5000) - Average CPU Usage"
          },
          {
            "name": "datadog_exporter_metric_mock",
            "value": "62.51",
            "unit": "MB",
            "extra": "Metric (TPS: 5000) - Average Memory Usage"
          },
          {
            "name": "dynatrace_exporter_metric_mock",
            "value": "0.04",
            "unit": "%",
            "extra": "Metric (TPS: 5000) - Average CPU Usage"
          },
          {
            "name": "dynatrace_exporter_metric_mock",
            "value": "59.35",
            "unit": "MB",
            "extra": "Metric (TPS: 5000) - Average Memory Usage"
          },
          {
            "name": "statsd_mock",
            "value": "0.01",
            "unit": "%",
            "extra": "Metric (TPS: 5000) - Average CPU Usage"
          },
          {
            "name": "statsd_mock",
            "value": "59.85",
            "unit": "MB",
            "extra": "Metric (TPS: 5000) - Average Memory Usage"
          },
          {
            "name": "otlp_metric_mock",
            "value": "0.04",
            "unit": "%",
            "extra": "Metric (TPS: 5000) - Average CPU Usage"
          },
          {
            "name": "otlp_metric_mock",
            "value": "60.03",
            "unit": "MB",
            "extra": "Metric (TPS: 5000) - Average Memory Usage"
          },
          {
            "name": "otlp_grpc_exporter_metric_mock",
            "value": "0.03",
            "unit": "%",
            "extra": "Metric (TPS: 5000) - Average CPU Usage"
          },
          {
            "name": "otlp_grpc_exporter_metric_mock",
            "value": "59.75",
            "unit": "MB",
            "extra": "Metric (TPS: 5000) - Average Memory Usage"
          },
          {
            "name": "prometheus_mock",
            "value": "7.11",
            "unit": "%",
            "extra": "Metric (TPS: 5000) - Average CPU Usage"
          },
          {
            "name": "prometheus_mock",
            "value": "257.53",
            "unit": "MB",
            "extra": "Metric (TPS: 5000) - Average Memory Usage"
          },
          {
            "name": "otlp_http_exporter_metric_mock",
            "value": "0.04",
            "unit": "%",
            "extra": "Metric (TPS: 5000) - Average CPU Usage"
          },
          {
            "name": "otlp_http_exporter_metric_mock",
            "value": "58.66",
            "unit": "MB",
            "extra": "Metric (TPS: 5000) - Average Memory Usage"
          },
          {
            "name": "signalfx_exporter_metric_mock",
            "value": "0.04",
            "unit": "%",
            "extra": "Metric (TPS: 5000) - Average CPU Usage"
          },
          {
            "name": "signalfx_exporter_metric_mock",
            "value": "59.51",
            "unit": "MB",
            "extra": "Metric (TPS: 5000) - Average Memory Usage"
          },
          {
            "name": "prometheus_mock",
            "value": "0.14",
            "unit": "%",
            "extra": "Metric (TPS: 100) - Average CPU Usage"
          },
          {
            "name": "prometheus_mock",
            "value": "72.77",
            "unit": "MB",
            "extra": "Metric (TPS: 100) - Average Memory Usage"
          },
          {
            "name": "otlp_metric_mock",
            "value": "0.04",
            "unit": "%",
            "extra": "Metric (TPS: 100) - Average CPU Usage"
          },
          {
            "name": "otlp_metric_mock",
            "value": "58.68",
            "unit": "MB",
            "extra": "Metric (TPS: 100) - Average Memory Usage"
          },
          {
            "name": "otlp_grpc_exporter_metric_mock",
            "value": "0.04",
            "unit": "%",
            "extra": "Metric (TPS: 100) - Average CPU Usage"
          },
          {
            "name": "otlp_grpc_exporter_metric_mock",
            "value": "59.12",
            "unit": "MB",
            "extra": "Metric (TPS: 100) - Average Memory Usage"
          },
          {
            "name": "signalfx_exporter_metric_mock",
            "value": "0.04",
            "unit": "%",
            "extra": "Metric (TPS: 100) - Average CPU Usage"
          },
          {
            "name": "signalfx_exporter_metric_mock",
            "value": "62.09",
            "unit": "MB",
            "extra": "Metric (TPS: 100) - Average Memory Usage"
          },
          {
            "name": "statsd_mock",
            "value": "0.02",
            "unit": "%",
            "extra": "Metric (TPS: 100) - Average CPU Usage"
          },
          {
            "name": "statsd_mock",
            "value": "59.28",
            "unit": "MB",
            "extra": "Metric (TPS: 100) - Average Memory Usage"
          },
          {
            "name": "datadog_exporter_metric_mock",
            "value": "0.05",
            "unit": "%",
            "extra": "Metric (TPS: 100) - Average CPU Usage"
          },
          {
            "name": "datadog_exporter_metric_mock",
            "value": "61.22",
            "unit": "MB",
            "extra": "Metric (TPS: 100) - Average Memory Usage"
          },
          {
            "name": "otlp_http_exporter_metric_mock",
            "value": "0.04",
            "unit": "%",
            "extra": "Metric (TPS: 100) - Average CPU Usage"
          },
          {
            "name": "otlp_http_exporter_metric_mock",
            "value": "59.29",
            "unit": "MB",
            "extra": "Metric (TPS: 100) - Average Memory Usage"
          },
          {
            "name": "dynatrace_exporter_metric_mock",
            "value": "0.03",
            "unit": "%",
            "extra": "Metric (TPS: 100) - Average CPU Usage"
          },
          {
            "name": "dynatrace_exporter_metric_mock",
            "value": "60.21",
            "unit": "MB",
            "extra": "Metric (TPS: 100) - Average Memory Usage"
          },
          {
            "name": "sapm_exporter_trace_mock",
            "value": "119.36",
            "unit": "%",
            "extra": "Trace (TPS: 5000) - Average CPU Usage"
          },
          {
            "name": "sapm_exporter_trace_mock",
            "value": "92.38",
            "unit": "MB",
            "extra": "Trace (TPS: 5000) - Average Memory Usage"
          },
          {
            "name": "logzio_exporter_trace_mock",
            "value": "111.56",
            "unit": "%",
            "extra": "Trace (TPS: 5000) - Average CPU Usage"
          },
          {
            "name": "logzio_exporter_trace_mock",
            "value": "125.00",
            "unit": "MB",
            "extra": "Trace (TPS: 5000) - Average Memory Usage"
          },
          {
            "name": "otlp_grpc_exporter_trace_mock",
            "value": "113.72",
            "unit": "%",
            "extra": "Trace (TPS: 5000) - Average CPU Usage"
          },
          {
            "name": "otlp_grpc_exporter_trace_mock",
            "value": "3557.10",
            "unit": "MB",
            "extra": "Trace (TPS: 5000) - Average Memory Usage"
          },
          {
            "name": "zipkin_mock",
            "value": "30.19",
            "unit": "%",
            "extra": "Trace (TPS: 5000) - Average CPU Usage"
          },
          {
            "name": "zipkin_mock",
            "value": "513.66",
            "unit": "MB",
            "extra": "Trace (TPS: 5000) - Average Memory Usage"
          },
          {
            "name": "jaeger_mock",
            "value": "17.89",
            "unit": "%",
            "extra": "Trace (TPS: 5000) - Average CPU Usage"
          },
          {
            "name": "jaeger_mock",
            "value": "166.86",
            "unit": "MB",
            "extra": "Trace (TPS: 5000) - Average Memory Usage"
          },
          {
            "name": "datadog_exporter_trace_mock",
            "value": "132.81",
            "unit": "%",
            "extra": "Trace (TPS: 5000) - Average CPU Usage"
          },
          {
            "name": "datadog_exporter_trace_mock",
            "value": "82.84",
            "unit": "MB",
            "extra": "Trace (TPS: 5000) - Average Memory Usage"
          },
          {
            "name": "xrayreceiver_mock",
            "value": "37.92",
            "unit": "%",
            "extra": "Trace (TPS: 5000) - Average CPU Usage"
          },
          {
            "name": "xrayreceiver_mock",
            "value": "719.00",
            "unit": "MB",
            "extra": "Trace (TPS: 5000) - Average Memory Usage"
          },
          {
            "name": "otlp_mock",
            "value": "141.14",
            "unit": "%",
            "extra": "Trace (TPS: 5000) - Average CPU Usage"
          },
          {
            "name": "otlp_mock",
            "value": "14957.96",
            "unit": "MB",
            "extra": "Trace (TPS: 5000) - Average Memory Usage"
          },
          {
            "name": "otlp_http_exporter_trace_mock",
            "value": "117.26",
            "unit": "%",
            "extra": "Trace (TPS: 5000) - Average CPU Usage"
          },
          {
            "name": "otlp_http_exporter_trace_mock",
            "value": "77.32",
            "unit": "MB",
            "extra": "Trace (TPS: 5000) - Average Memory Usage"
          },
          {
            "name": "datadog_exporter_trace_mock",
            "value": "5.15",
            "unit": "%",
            "extra": "Trace (TPS: 100) - Average CPU Usage"
          },
          {
            "name": "datadog_exporter_trace_mock",
            "value": "72.91",
            "unit": "MB",
            "extra": "Trace (TPS: 100) - Average Memory Usage"
          },
          {
            "name": "logzio_exporter_trace_mock",
            "value": "3.29",
            "unit": "%",
            "extra": "Trace (TPS: 100) - Average CPU Usage"
          },
          {
            "name": "logzio_exporter_trace_mock",
            "value": "90.03",
            "unit": "MB",
            "extra": "Trace (TPS: 100) - Average Memory Usage"
          },
          {
            "name": "jaeger_mock",
            "value": "2.61",
            "unit": "%",
            "extra": "Trace (TPS: 100) - Average CPU Usage"
          },
          {
            "name": "jaeger_mock",
            "value": "76.79",
            "unit": "MB",
            "extra": "Trace (TPS: 100) - Average Memory Usage"
          },
          {
            "name": "sapm_exporter_trace_mock",
            "value": "3.21",
            "unit": "%",
            "extra": "Trace (TPS: 100) - Average CPU Usage"
          },
          {
            "name": "sapm_exporter_trace_mock",
            "value": "84.31",
            "unit": "MB",
            "extra": "Trace (TPS: 100) - Average Memory Usage"
          },
          {
            "name": "xrayreceiver_mock",
            "value": "4.64",
            "unit": "%",
            "extra": "Trace (TPS: 100) - Average CPU Usage"
          },
          {
            "name": "xrayreceiver_mock",
            "value": "140.91",
            "unit": "MB",
            "extra": "Trace (TPS: 100) - Average Memory Usage"
          },
          {
            "name": "otlp_grpc_exporter_trace_mock",
            "value": "3.44",
            "unit": "%",
            "extra": "Trace (TPS: 100) - Average CPU Usage"
          },
          {
            "name": "otlp_grpc_exporter_trace_mock",
            "value": "134.34",
            "unit": "MB",
            "extra": "Trace (TPS: 100) - Average Memory Usage"
          },
          {
            "name": "zipkin_mock",
            "value": "5.62",
            "unit": "%",
            "extra": "Trace (TPS: 100) - Average CPU Usage"
          },
          {
            "name": "zipkin_mock",
            "value": "78.49",
            "unit": "MB",
            "extra": "Trace (TPS: 100) - Average Memory Usage"
          },
          {
            "name": "otlp_http_exporter_trace_mock",
            "value": "3.48",
            "unit": "%",
            "extra": "Trace (TPS: 100) - Average CPU Usage"
          },
          {
            "name": "otlp_http_exporter_trace_mock",
            "value": "70.87",
            "unit": "MB",
            "extra": "Trace (TPS: 100) - Average Memory Usage"
          },
          {
            "name": "otlp_mock",
            "value": "3.91",
            "unit": "%",
            "extra": "Trace (TPS: 100) - Average CPU Usage"
          },
          {
            "name": "otlp_mock",
            "value": "71.16",
            "unit": "MB",
            "extra": "Trace (TPS: 100) - Average Memory Usage"
          },
          {
            "name": "logzio_exporter_trace_mock",
            "value": "26.83",
            "unit": "%",
            "extra": "Trace (TPS: 1000) - Average CPU Usage"
          },
          {
            "name": "logzio_exporter_trace_mock",
            "value": "103.10",
            "unit": "MB",
            "extra": "Trace (TPS: 1000) - Average Memory Usage"
          },
          {
            "name": "otlp_http_exporter_trace_mock",
            "value": "26.69",
            "unit": "%",
            "extra": "Trace (TPS: 1000) - Average CPU Usage"
          },
          {
            "name": "otlp_http_exporter_trace_mock",
            "value": "72.35",
            "unit": "MB",
            "extra": "Trace (TPS: 1000) - Average Memory Usage"
          },
          {
            "name": "zipkin_mock",
            "value": "29.89",
            "unit": "%",
            "extra": "Trace (TPS: 1000) - Average CPU Usage"
          },
          {
            "name": "zipkin_mock",
            "value": "471.40",
            "unit": "MB",
            "extra": "Trace (TPS: 1000) - Average Memory Usage"
          },
          {
            "name": "sapm_exporter_trace_mock",
            "value": "26.56",
            "unit": "%",
            "extra": "Trace (TPS: 1000) - Average CPU Usage"
          },
          {
            "name": "sapm_exporter_trace_mock",
            "value": "86.27",
            "unit": "MB",
            "extra": "Trace (TPS: 1000) - Average Memory Usage"
          },
          {
            "name": "xrayreceiver_mock",
            "value": "26.46",
            "unit": "%",
            "extra": "Trace (TPS: 1000) - Average CPU Usage"
          },
          {
            "name": "xrayreceiver_mock",
            "value": "510.37",
            "unit": "MB",
            "extra": "Trace (TPS: 1000) - Average Memory Usage"
          },
          {
            "name": "jaeger_mock",
            "value": "16.29",
            "unit": "%",
            "extra": "Trace (TPS: 1000) - Average CPU Usage"
          },
          {
            "name": "jaeger_mock",
            "value": "145.54",
            "unit": "MB",
            "extra": "Trace (TPS: 1000) - Average Memory Usage"
          },
          {
            "name": "datadog_exporter_trace_mock",
            "value": "33.43",
            "unit": "%",
            "extra": "Trace (TPS: 1000) - Average CPU Usage"
          },
          {
            "name": "datadog_exporter_trace_mock",
            "value": "75.11",
            "unit": "MB",
            "extra": "Trace (TPS: 1000) - Average Memory Usage"
          },
          {
            "name": "otlp_mock",
            "value": "32.89",
            "unit": "%",
            "extra": "Trace (TPS: 1000) - Average CPU Usage"
          },
          {
            "name": "otlp_mock",
            "value": "75.82",
            "unit": "MB",
            "extra": "Trace (TPS: 1000) - Average Memory Usage"
          },
          {
            "name": "otlp_grpc_exporter_trace_mock",
            "value": "27.63",
            "unit": "%",
            "extra": "Trace (TPS: 1000) - Average CPU Usage"
          },
          {
            "name": "otlp_grpc_exporter_trace_mock",
            "value": "743.68",
            "unit": "MB",
            "extra": "Trace (TPS: 1000) - Average Memory Usage"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "bryan-aguilar",
            "username": "bryan-aguilar",
            "email": "46550959+bryan-aguilar@users.noreply.github.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "cfe4461de4990be4e0291af87340887f126ab1f4",
          "message": "bump version to v0.16.0 (#931)",
          "timestamp": "2022-01-27T22:54:48Z",
          "url": "https://github.com/aws-observability/aws-otel-collector/commit/cfe4461de4990be4e0291af87340887f126ab1f4"
        },
        "date": 1643348523856,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "statsd_mock",
            "value": "0.02",
            "unit": "%",
            "extra": "Metric (TPS: 1000) - Average CPU Usage"
          },
          {
            "name": "statsd_mock",
            "value": "61.56",
            "unit": "MB",
            "extra": "Metric (TPS: 1000) - Average Memory Usage"
          },
          {
            "name": "dynatrace_exporter_metric_mock",
            "value": "0.05",
            "unit": "%",
            "extra": "Metric (TPS: 1000) - Average CPU Usage"
          },
          {
            "name": "dynatrace_exporter_metric_mock",
            "value": "62.14",
            "unit": "MB",
            "extra": "Metric (TPS: 1000) - Average Memory Usage"
          },
          {
            "name": "otlp_metric_mock",
            "value": "0.05",
            "unit": "%",
            "extra": "Metric (TPS: 1000) - Average CPU Usage"
          },
          {
            "name": "otlp_metric_mock",
            "value": "62.63",
            "unit": "MB",
            "extra": "Metric (TPS: 1000) - Average Memory Usage"
          },
          {
            "name": "datadog_exporter_metric_mock",
            "value": "0.04",
            "unit": "%",
            "extra": "Metric (TPS: 1000) - Average CPU Usage"
          },
          {
            "name": "datadog_exporter_metric_mock",
            "value": "65.92",
            "unit": "MB",
            "extra": "Metric (TPS: 1000) - Average Memory Usage"
          },
          {
            "name": "signalfx_exporter_metric_mock",
            "value": "0.04",
            "unit": "%",
            "extra": "Metric (TPS: 1000) - Average CPU Usage"
          },
          {
            "name": "signalfx_exporter_metric_mock",
            "value": "62.61",
            "unit": "MB",
            "extra": "Metric (TPS: 1000) - Average Memory Usage"
          },
          {
            "name": "otlp_http_exporter_metric_mock",
            "value": "0.04",
            "unit": "%",
            "extra": "Metric (TPS: 1000) - Average CPU Usage"
          },
          {
            "name": "otlp_http_exporter_metric_mock",
            "value": "62.83",
            "unit": "MB",
            "extra": "Metric (TPS: 1000) - Average Memory Usage"
          },
          {
            "name": "prometheus_mock",
            "value": "1.29",
            "unit": "%",
            "extra": "Metric (TPS: 1000) - Average CPU Usage"
          },
          {
            "name": "prometheus_mock",
            "value": "113.40",
            "unit": "MB",
            "extra": "Metric (TPS: 1000) - Average Memory Usage"
          },
          {
            "name": "otlp_grpc_exporter_metric_mock",
            "value": "0.04",
            "unit": "%",
            "extra": "Metric (TPS: 1000) - Average CPU Usage"
          },
          {
            "name": "otlp_grpc_exporter_metric_mock",
            "value": "62.52",
            "unit": "MB",
            "extra": "Metric (TPS: 1000) - Average Memory Usage"
          },
          {
            "name": "datadog_exporter_metric_mock",
            "value": "0.05",
            "unit": "%",
            "extra": "Metric (TPS: 5000) - Average CPU Usage"
          },
          {
            "name": "datadog_exporter_metric_mock",
            "value": "64.87",
            "unit": "MB",
            "extra": "Metric (TPS: 5000) - Average Memory Usage"
          },
          {
            "name": "dynatrace_exporter_metric_mock",
            "value": "0.04",
            "unit": "%",
            "extra": "Metric (TPS: 5000) - Average CPU Usage"
          },
          {
            "name": "dynatrace_exporter_metric_mock",
            "value": "62.25",
            "unit": "MB",
            "extra": "Metric (TPS: 5000) - Average Memory Usage"
          },
          {
            "name": "statsd_mock",
            "value": "0.01",
            "unit": "%",
            "extra": "Metric (TPS: 5000) - Average CPU Usage"
          },
          {
            "name": "statsd_mock",
            "value": "61.54",
            "unit": "MB",
            "extra": "Metric (TPS: 5000) - Average Memory Usage"
          },
          {
            "name": "otlp_metric_mock",
            "value": "0.05",
            "unit": "%",
            "extra": "Metric (TPS: 5000) - Average CPU Usage"
          },
          {
            "name": "otlp_metric_mock",
            "value": "61.28",
            "unit": "MB",
            "extra": "Metric (TPS: 5000) - Average Memory Usage"
          },
          {
            "name": "otlp_grpc_exporter_metric_mock",
            "value": "0.04",
            "unit": "%",
            "extra": "Metric (TPS: 5000) - Average CPU Usage"
          },
          {
            "name": "otlp_grpc_exporter_metric_mock",
            "value": "63.38",
            "unit": "MB",
            "extra": "Metric (TPS: 5000) - Average Memory Usage"
          },
          {
            "name": "prometheus_mock",
            "value": "7.41",
            "unit": "%",
            "extra": "Metric (TPS: 5000) - Average CPU Usage"
          },
          {
            "name": "prometheus_mock",
            "value": "267.78",
            "unit": "MB",
            "extra": "Metric (TPS: 5000) - Average Memory Usage"
          },
          {
            "name": "otlp_http_exporter_metric_mock",
            "value": "0.05",
            "unit": "%",
            "extra": "Metric (TPS: 5000) - Average CPU Usage"
          },
          {
            "name": "otlp_http_exporter_metric_mock",
            "value": "62.50",
            "unit": "MB",
            "extra": "Metric (TPS: 5000) - Average Memory Usage"
          },
          {
            "name": "signalfx_exporter_metric_mock",
            "value": "0.04",
            "unit": "%",
            "extra": "Metric (TPS: 5000) - Average CPU Usage"
          },
          {
            "name": "signalfx_exporter_metric_mock",
            "value": "63.88",
            "unit": "MB",
            "extra": "Metric (TPS: 5000) - Average Memory Usage"
          },
          {
            "name": "prometheus_mock",
            "value": "0.12",
            "unit": "%",
            "extra": "Metric (TPS: 100) - Average CPU Usage"
          },
          {
            "name": "prometheus_mock",
            "value": "75.62",
            "unit": "MB",
            "extra": "Metric (TPS: 100) - Average Memory Usage"
          },
          {
            "name": "otlp_metric_mock",
            "value": "0.04",
            "unit": "%",
            "extra": "Metric (TPS: 100) - Average CPU Usage"
          },
          {
            "name": "otlp_metric_mock",
            "value": "63.26",
            "unit": "MB",
            "extra": "Metric (TPS: 100) - Average Memory Usage"
          },
          {
            "name": "otlp_grpc_exporter_metric_mock",
            "value": "0.05",
            "unit": "%",
            "extra": "Metric (TPS: 100) - Average CPU Usage"
          },
          {
            "name": "otlp_grpc_exporter_metric_mock",
            "value": "62.18",
            "unit": "MB",
            "extra": "Metric (TPS: 100) - Average Memory Usage"
          },
          {
            "name": "signalfx_exporter_metric_mock",
            "value": "0.05",
            "unit": "%",
            "extra": "Metric (TPS: 100) - Average CPU Usage"
          },
          {
            "name": "signalfx_exporter_metric_mock",
            "value": "63.31",
            "unit": "MB",
            "extra": "Metric (TPS: 100) - Average Memory Usage"
          },
          {
            "name": "statsd_mock",
            "value": "0.02",
            "unit": "%",
            "extra": "Metric (TPS: 100) - Average CPU Usage"
          },
          {
            "name": "statsd_mock",
            "value": "61.20",
            "unit": "MB",
            "extra": "Metric (TPS: 100) - Average Memory Usage"
          },
          {
            "name": "datadog_exporter_metric_mock",
            "value": "0.05",
            "unit": "%",
            "extra": "Metric (TPS: 100) - Average CPU Usage"
          },
          {
            "name": "datadog_exporter_metric_mock",
            "value": "64.98",
            "unit": "MB",
            "extra": "Metric (TPS: 100) - Average Memory Usage"
          },
          {
            "name": "otlp_http_exporter_metric_mock",
            "value": "0.05",
            "unit": "%",
            "extra": "Metric (TPS: 100) - Average CPU Usage"
          },
          {
            "name": "otlp_http_exporter_metric_mock",
            "value": "62.48",
            "unit": "MB",
            "extra": "Metric (TPS: 100) - Average Memory Usage"
          },
          {
            "name": "dynatrace_exporter_metric_mock",
            "value": "0.04",
            "unit": "%",
            "extra": "Metric (TPS: 100) - Average CPU Usage"
          },
          {
            "name": "dynatrace_exporter_metric_mock",
            "value": "63.09",
            "unit": "MB",
            "extra": "Metric (TPS: 100) - Average Memory Usage"
          },
          {
            "name": "sapm_exporter_trace_mock",
            "value": "120.08",
            "unit": "%",
            "extra": "Trace (TPS: 5000) - Average CPU Usage"
          },
          {
            "name": "sapm_exporter_trace_mock",
            "value": "95.66",
            "unit": "MB",
            "extra": "Trace (TPS: 5000) - Average Memory Usage"
          },
          {
            "name": "logzio_exporter_trace_mock",
            "value": "120.50",
            "unit": "%",
            "extra": "Trace (TPS: 5000) - Average CPU Usage"
          },
          {
            "name": "logzio_exporter_trace_mock",
            "value": "126.09",
            "unit": "MB",
            "extra": "Trace (TPS: 5000) - Average Memory Usage"
          },
          {
            "name": "otlp_grpc_exporter_trace_mock",
            "value": "132.89",
            "unit": "%",
            "extra": "Trace (TPS: 5000) - Average CPU Usage"
          },
          {
            "name": "otlp_grpc_exporter_trace_mock",
            "value": "3218.09",
            "unit": "MB",
            "extra": "Trace (TPS: 5000) - Average Memory Usage"
          },
          {
            "name": "zipkin_mock",
            "value": "28.49",
            "unit": "%",
            "extra": "Trace (TPS: 5000) - Average CPU Usage"
          },
          {
            "name": "zipkin_mock",
            "value": "511.49",
            "unit": "MB",
            "extra": "Trace (TPS: 5000) - Average Memory Usage"
          },
          {
            "name": "jaeger_mock",
            "value": "17.25",
            "unit": "%",
            "extra": "Trace (TPS: 5000) - Average CPU Usage"
          },
          {
            "name": "jaeger_mock",
            "value": "170.69",
            "unit": "MB",
            "extra": "Trace (TPS: 5000) - Average Memory Usage"
          },
          {
            "name": "datadog_exporter_trace_mock",
            "value": "115.05",
            "unit": "%",
            "extra": "Trace (TPS: 5000) - Average CPU Usage"
          },
          {
            "name": "datadog_exporter_trace_mock",
            "value": "86.37",
            "unit": "MB",
            "extra": "Trace (TPS: 5000) - Average Memory Usage"
          },
          {
            "name": "xrayreceiver_mock",
            "value": "38.10",
            "unit": "%",
            "extra": "Trace (TPS: 5000) - Average CPU Usage"
          },
          {
            "name": "xrayreceiver_mock",
            "value": "777.23",
            "unit": "MB",
            "extra": "Trace (TPS: 5000) - Average Memory Usage"
          },
          {
            "name": "otlp_mock",
            "value": "148.61",
            "unit": "%",
            "extra": "Trace (TPS: 5000) - Average CPU Usage"
          },
          {
            "name": "otlp_mock",
            "value": "14980.12",
            "unit": "MB",
            "extra": "Trace (TPS: 5000) - Average Memory Usage"
          },
          {
            "name": "otlp_http_exporter_trace_mock",
            "value": "108.33",
            "unit": "%",
            "extra": "Trace (TPS: 5000) - Average CPU Usage"
          },
          {
            "name": "otlp_http_exporter_trace_mock",
            "value": "80.28",
            "unit": "MB",
            "extra": "Trace (TPS: 5000) - Average Memory Usage"
          },
          {
            "name": "datadog_exporter_trace_mock",
            "value": "4.99",
            "unit": "%",
            "extra": "Trace (TPS: 100) - Average CPU Usage"
          },
          {
            "name": "datadog_exporter_trace_mock",
            "value": "78.61",
            "unit": "MB",
            "extra": "Trace (TPS: 100) - Average Memory Usage"
          },
          {
            "name": "logzio_exporter_trace_mock",
            "value": "3.10",
            "unit": "%",
            "extra": "Trace (TPS: 100) - Average CPU Usage"
          },
          {
            "name": "logzio_exporter_trace_mock",
            "value": "94.94",
            "unit": "MB",
            "extra": "Trace (TPS: 100) - Average Memory Usage"
          },
          {
            "name": "jaeger_mock",
            "value": "2.33",
            "unit": "%",
            "extra": "Trace (TPS: 100) - Average CPU Usage"
          },
          {
            "name": "jaeger_mock",
            "value": "79.18",
            "unit": "MB",
            "extra": "Trace (TPS: 100) - Average Memory Usage"
          },
          {
            "name": "sapm_exporter_trace_mock",
            "value": "3.27",
            "unit": "%",
            "extra": "Trace (TPS: 100) - Average CPU Usage"
          },
          {
            "name": "sapm_exporter_trace_mock",
            "value": "87.50",
            "unit": "MB",
            "extra": "Trace (TPS: 100) - Average Memory Usage"
          },
          {
            "name": "xrayreceiver_mock",
            "value": "4.67",
            "unit": "%",
            "extra": "Trace (TPS: 100) - Average CPU Usage"
          },
          {
            "name": "xrayreceiver_mock",
            "value": "145.49",
            "unit": "MB",
            "extra": "Trace (TPS: 100) - Average Memory Usage"
          },
          {
            "name": "otlp_grpc_exporter_trace_mock",
            "value": "3.03",
            "unit": "%",
            "extra": "Trace (TPS: 100) - Average CPU Usage"
          },
          {
            "name": "otlp_grpc_exporter_trace_mock",
            "value": "133.82",
            "unit": "MB",
            "extra": "Trace (TPS: 100) - Average Memory Usage"
          },
          {
            "name": "zipkin_mock",
            "value": "5.88",
            "unit": "%",
            "extra": "Trace (TPS: 100) - Average CPU Usage"
          },
          {
            "name": "zipkin_mock",
            "value": "81.32",
            "unit": "MB",
            "extra": "Trace (TPS: 100) - Average Memory Usage"
          },
          {
            "name": "otlp_http_exporter_trace_mock",
            "value": "3.44",
            "unit": "%",
            "extra": "Trace (TPS: 100) - Average CPU Usage"
          },
          {
            "name": "otlp_http_exporter_trace_mock",
            "value": "73.69",
            "unit": "MB",
            "extra": "Trace (TPS: 100) - Average Memory Usage"
          },
          {
            "name": "otlp_mock",
            "value": "4.41",
            "unit": "%",
            "extra": "Trace (TPS: 100) - Average CPU Usage"
          },
          {
            "name": "otlp_mock",
            "value": "75.28",
            "unit": "MB",
            "extra": "Trace (TPS: 100) - Average Memory Usage"
          },
          {
            "name": "logzio_exporter_trace_mock",
            "value": "27.42",
            "unit": "%",
            "extra": "Trace (TPS: 1000) - Average CPU Usage"
          },
          {
            "name": "logzio_exporter_trace_mock",
            "value": "105.44",
            "unit": "MB",
            "extra": "Trace (TPS: 1000) - Average Memory Usage"
          },
          {
            "name": "otlp_http_exporter_trace_mock",
            "value": "26.42",
            "unit": "%",
            "extra": "Trace (TPS: 1000) - Average CPU Usage"
          },
          {
            "name": "otlp_http_exporter_trace_mock",
            "value": "75.14",
            "unit": "MB",
            "extra": "Trace (TPS: 1000) - Average Memory Usage"
          },
          {
            "name": "zipkin_mock",
            "value": "29.86",
            "unit": "%",
            "extra": "Trace (TPS: 1000) - Average CPU Usage"
          },
          {
            "name": "zipkin_mock",
            "value": "453.52",
            "unit": "MB",
            "extra": "Trace (TPS: 1000) - Average Memory Usage"
          },
          {
            "name": "sapm_exporter_trace_mock",
            "value": "27.69",
            "unit": "%",
            "extra": "Trace (TPS: 1000) - Average CPU Usage"
          },
          {
            "name": "sapm_exporter_trace_mock",
            "value": "88.46",
            "unit": "MB",
            "extra": "Trace (TPS: 1000) - Average Memory Usage"
          },
          {
            "name": "xrayreceiver_mock",
            "value": "26.58",
            "unit": "%",
            "extra": "Trace (TPS: 1000) - Average CPU Usage"
          },
          {
            "name": "xrayreceiver_mock",
            "value": "506.75",
            "unit": "MB",
            "extra": "Trace (TPS: 1000) - Average Memory Usage"
          },
          {
            "name": "jaeger_mock",
            "value": "16.43",
            "unit": "%",
            "extra": "Trace (TPS: 1000) - Average CPU Usage"
          },
          {
            "name": "jaeger_mock",
            "value": "153.28",
            "unit": "MB",
            "extra": "Trace (TPS: 1000) - Average Memory Usage"
          },
          {
            "name": "datadog_exporter_trace_mock",
            "value": "31.39",
            "unit": "%",
            "extra": "Trace (TPS: 1000) - Average CPU Usage"
          },
          {
            "name": "datadog_exporter_trace_mock",
            "value": "79.55",
            "unit": "MB",
            "extra": "Trace (TPS: 1000) - Average Memory Usage"
          },
          {
            "name": "otlp_mock",
            "value": "34.33",
            "unit": "%",
            "extra": "Trace (TPS: 1000) - Average CPU Usage"
          },
          {
            "name": "otlp_mock",
            "value": "79.65",
            "unit": "MB",
            "extra": "Trace (TPS: 1000) - Average Memory Usage"
          },
          {
            "name": "otlp_grpc_exporter_trace_mock",
            "value": "28.64",
            "unit": "%",
            "extra": "Trace (TPS: 1000) - Average CPU Usage"
          },
          {
            "name": "otlp_grpc_exporter_trace_mock",
            "value": "683.41",
            "unit": "MB",
            "extra": "Trace (TPS: 1000) - Average Memory Usage"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Jeffrey Chien",
            "username": "jefchien",
            "email": "chienjef@amazon.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "2c6847f8175e08f1700fea50d3caf5607c5b7b6d",
          "message": "Add same version flag to docker-version-compare. (#945)\n\n* Add same version flag to docker-version-compare.\r\n\r\nThis is to account for reruns of the CD.\r\n\r\n* Fix fmt-sh.",
          "timestamp": "2022-01-31T18:40:41Z",
          "url": "https://github.com/aws-observability/aws-otel-collector/commit/2c6847f8175e08f1700fea50d3caf5607c5b7b6d"
        },
        "date": 1643744990858,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "statsd_mock",
            "value": "0.02",
            "unit": "%",
            "extra": "Metric (TPS: 1000) - Average CPU Usage"
          },
          {
            "name": "statsd_mock",
            "value": "61.92",
            "unit": "MB",
            "extra": "Metric (TPS: 1000) - Average Memory Usage"
          },
          {
            "name": "dynatrace_exporter_metric_mock",
            "value": "0.05",
            "unit": "%",
            "extra": "Metric (TPS: 1000) - Average CPU Usage"
          },
          {
            "name": "dynatrace_exporter_metric_mock",
            "value": "63.64",
            "unit": "MB",
            "extra": "Metric (TPS: 1000) - Average Memory Usage"
          },
          {
            "name": "otlp_metric_mock",
            "value": "0.04",
            "unit": "%",
            "extra": "Metric (TPS: 1000) - Average CPU Usage"
          },
          {
            "name": "otlp_metric_mock",
            "value": "62.37",
            "unit": "MB",
            "extra": "Metric (TPS: 1000) - Average Memory Usage"
          },
          {
            "name": "datadog_exporter_metric_mock",
            "value": "0.05",
            "unit": "%",
            "extra": "Metric (TPS: 1000) - Average CPU Usage"
          },
          {
            "name": "datadog_exporter_metric_mock",
            "value": "65.17",
            "unit": "MB",
            "extra": "Metric (TPS: 1000) - Average Memory Usage"
          },
          {
            "name": "signalfx_exporter_metric_mock",
            "value": "0.04",
            "unit": "%",
            "extra": "Metric (TPS: 1000) - Average CPU Usage"
          },
          {
            "name": "signalfx_exporter_metric_mock",
            "value": "63.96",
            "unit": "MB",
            "extra": "Metric (TPS: 1000) - Average Memory Usage"
          },
          {
            "name": "otlp_http_exporter_metric_mock",
            "value": "0.05",
            "unit": "%",
            "extra": "Metric (TPS: 1000) - Average CPU Usage"
          },
          {
            "name": "otlp_http_exporter_metric_mock",
            "value": "61.90",
            "unit": "MB",
            "extra": "Metric (TPS: 1000) - Average Memory Usage"
          },
          {
            "name": "prometheus_mock",
            "value": "1.29",
            "unit": "%",
            "extra": "Metric (TPS: 1000) - Average CPU Usage"
          },
          {
            "name": "prometheus_mock",
            "value": "115.19",
            "unit": "MB",
            "extra": "Metric (TPS: 1000) - Average Memory Usage"
          },
          {
            "name": "otlp_grpc_exporter_metric_mock",
            "value": "0.04",
            "unit": "%",
            "extra": "Metric (TPS: 1000) - Average CPU Usage"
          },
          {
            "name": "otlp_grpc_exporter_metric_mock",
            "value": "62.09",
            "unit": "MB",
            "extra": "Metric (TPS: 1000) - Average Memory Usage"
          },
          {
            "name": "datadog_exporter_metric_mock",
            "value": "0.05",
            "unit": "%",
            "extra": "Metric (TPS: 5000) - Average CPU Usage"
          },
          {
            "name": "datadog_exporter_metric_mock",
            "value": "65.17",
            "unit": "MB",
            "extra": "Metric (TPS: 5000) - Average Memory Usage"
          },
          {
            "name": "dynatrace_exporter_metric_mock",
            "value": "0.04",
            "unit": "%",
            "extra": "Metric (TPS: 5000) - Average CPU Usage"
          },
          {
            "name": "dynatrace_exporter_metric_mock",
            "value": "63.42",
            "unit": "MB",
            "extra": "Metric (TPS: 5000) - Average Memory Usage"
          },
          {
            "name": "statsd_mock",
            "value": "0.01",
            "unit": "%",
            "extra": "Metric (TPS: 5000) - Average CPU Usage"
          },
          {
            "name": "statsd_mock",
            "value": "61.46",
            "unit": "MB",
            "extra": "Metric (TPS: 5000) - Average Memory Usage"
          },
          {
            "name": "otlp_metric_mock",
            "value": "0.05",
            "unit": "%",
            "extra": "Metric (TPS: 5000) - Average CPU Usage"
          },
          {
            "name": "otlp_metric_mock",
            "value": "63.10",
            "unit": "MB",
            "extra": "Metric (TPS: 5000) - Average Memory Usage"
          },
          {
            "name": "otlp_grpc_exporter_metric_mock",
            "value": "0.05",
            "unit": "%",
            "extra": "Metric (TPS: 5000) - Average CPU Usage"
          },
          {
            "name": "otlp_grpc_exporter_metric_mock",
            "value": "62.52",
            "unit": "MB",
            "extra": "Metric (TPS: 5000) - Average Memory Usage"
          },
          {
            "name": "prometheus_mock",
            "value": "7.24",
            "unit": "%",
            "extra": "Metric (TPS: 5000) - Average CPU Usage"
          },
          {
            "name": "prometheus_mock",
            "value": "270.92",
            "unit": "MB",
            "extra": "Metric (TPS: 5000) - Average Memory Usage"
          },
          {
            "name": "otlp_http_exporter_metric_mock",
            "value": "0.04",
            "unit": "%",
            "extra": "Metric (TPS: 5000) - Average CPU Usage"
          },
          {
            "name": "otlp_http_exporter_metric_mock",
            "value": "60.94",
            "unit": "MB",
            "extra": "Metric (TPS: 5000) - Average Memory Usage"
          },
          {
            "name": "signalfx_exporter_metric_mock",
            "value": "0.04",
            "unit": "%",
            "extra": "Metric (TPS: 5000) - Average CPU Usage"
          },
          {
            "name": "signalfx_exporter_metric_mock",
            "value": "63.09",
            "unit": "MB",
            "extra": "Metric (TPS: 5000) - Average Memory Usage"
          },
          {
            "name": "prometheus_mock",
            "value": "0.12",
            "unit": "%",
            "extra": "Metric (TPS: 100) - Average CPU Usage"
          },
          {
            "name": "prometheus_mock",
            "value": "75.19",
            "unit": "MB",
            "extra": "Metric (TPS: 100) - Average Memory Usage"
          },
          {
            "name": "otlp_metric_mock",
            "value": "0.04",
            "unit": "%",
            "extra": "Metric (TPS: 100) - Average CPU Usage"
          },
          {
            "name": "otlp_metric_mock",
            "value": "62.72",
            "unit": "MB",
            "extra": "Metric (TPS: 100) - Average Memory Usage"
          },
          {
            "name": "otlp_grpc_exporter_metric_mock",
            "value": "0.04",
            "unit": "%",
            "extra": "Metric (TPS: 100) - Average CPU Usage"
          },
          {
            "name": "otlp_grpc_exporter_metric_mock",
            "value": "61.13",
            "unit": "MB",
            "extra": "Metric (TPS: 100) - Average Memory Usage"
          },
          {
            "name": "signalfx_exporter_metric_mock",
            "value": "0.04",
            "unit": "%",
            "extra": "Metric (TPS: 100) - Average CPU Usage"
          },
          {
            "name": "signalfx_exporter_metric_mock",
            "value": "63.06",
            "unit": "MB",
            "extra": "Metric (TPS: 100) - Average Memory Usage"
          },
          {
            "name": "statsd_mock",
            "value": "0.01",
            "unit": "%",
            "extra": "Metric (TPS: 100) - Average CPU Usage"
          },
          {
            "name": "statsd_mock",
            "value": "62.63",
            "unit": "MB",
            "extra": "Metric (TPS: 100) - Average Memory Usage"
          },
          {
            "name": "datadog_exporter_metric_mock",
            "value": "0.05",
            "unit": "%",
            "extra": "Metric (TPS: 100) - Average CPU Usage"
          },
          {
            "name": "datadog_exporter_metric_mock",
            "value": "65.97",
            "unit": "MB",
            "extra": "Metric (TPS: 100) - Average Memory Usage"
          },
          {
            "name": "otlp_http_exporter_metric_mock",
            "value": "0.03",
            "unit": "%",
            "extra": "Metric (TPS: 100) - Average CPU Usage"
          },
          {
            "name": "otlp_http_exporter_metric_mock",
            "value": "60.86",
            "unit": "MB",
            "extra": "Metric (TPS: 100) - Average Memory Usage"
          },
          {
            "name": "dynatrace_exporter_metric_mock",
            "value": "0.05",
            "unit": "%",
            "extra": "Metric (TPS: 100) - Average CPU Usage"
          },
          {
            "name": "dynatrace_exporter_metric_mock",
            "value": "61.26",
            "unit": "MB",
            "extra": "Metric (TPS: 100) - Average Memory Usage"
          },
          {
            "name": "sapm_exporter_trace_mock",
            "value": "102.43",
            "unit": "%",
            "extra": "Trace (TPS: 5000) - Average CPU Usage"
          },
          {
            "name": "sapm_exporter_trace_mock",
            "value": "96.17",
            "unit": "MB",
            "extra": "Trace (TPS: 5000) - Average Memory Usage"
          },
          {
            "name": "logzio_exporter_trace_mock",
            "value": "117.16",
            "unit": "%",
            "extra": "Trace (TPS: 5000) - Average CPU Usage"
          },
          {
            "name": "logzio_exporter_trace_mock",
            "value": "127.27",
            "unit": "MB",
            "extra": "Trace (TPS: 5000) - Average Memory Usage"
          },
          {
            "name": "otlp_grpc_exporter_trace_mock",
            "value": "129.98",
            "unit": "%",
            "extra": "Trace (TPS: 5000) - Average CPU Usage"
          },
          {
            "name": "otlp_grpc_exporter_trace_mock",
            "value": "3660.10",
            "unit": "MB",
            "extra": "Trace (TPS: 5000) - Average Memory Usage"
          },
          {
            "name": "zipkin_mock",
            "value": "28.51",
            "unit": "%",
            "extra": "Trace (TPS: 5000) - Average CPU Usage"
          },
          {
            "name": "zipkin_mock",
            "value": "509.96",
            "unit": "MB",
            "extra": "Trace (TPS: 5000) - Average Memory Usage"
          },
          {
            "name": "jaeger_mock",
            "value": "16.77",
            "unit": "%",
            "extra": "Trace (TPS: 5000) - Average CPU Usage"
          },
          {
            "name": "jaeger_mock",
            "value": "169.88",
            "unit": "MB",
            "extra": "Trace (TPS: 5000) - Average Memory Usage"
          },
          {
            "name": "datadog_exporter_trace_mock",
            "value": "134.52",
            "unit": "%",
            "extra": "Trace (TPS: 5000) - Average CPU Usage"
          },
          {
            "name": "datadog_exporter_trace_mock",
            "value": "85.98",
            "unit": "MB",
            "extra": "Trace (TPS: 5000) - Average Memory Usage"
          },
          {
            "name": "xrayreceiver_mock",
            "value": "39.61",
            "unit": "%",
            "extra": "Trace (TPS: 5000) - Average CPU Usage"
          },
          {
            "name": "xrayreceiver_mock",
            "value": "666.31",
            "unit": "MB",
            "extra": "Trace (TPS: 5000) - Average Memory Usage"
          },
          {
            "name": "otlp_mock",
            "value": "151.21",
            "unit": "%",
            "extra": "Trace (TPS: 5000) - Average CPU Usage"
          },
          {
            "name": "otlp_mock",
            "value": "16196.41",
            "unit": "MB",
            "extra": "Trace (TPS: 5000) - Average Memory Usage"
          },
          {
            "name": "otlp_http_exporter_trace_mock",
            "value": "111.45",
            "unit": "%",
            "extra": "Trace (TPS: 5000) - Average CPU Usage"
          },
          {
            "name": "otlp_http_exporter_trace_mock",
            "value": "80.75",
            "unit": "MB",
            "extra": "Trace (TPS: 5000) - Average Memory Usage"
          },
          {
            "name": "datadog_exporter_trace_mock",
            "value": "4.36",
            "unit": "%",
            "extra": "Trace (TPS: 100) - Average CPU Usage"
          },
          {
            "name": "datadog_exporter_trace_mock",
            "value": "78.36",
            "unit": "MB",
            "extra": "Trace (TPS: 100) - Average Memory Usage"
          },
          {
            "name": "logzio_exporter_trace_mock",
            "value": "3.27",
            "unit": "%",
            "extra": "Trace (TPS: 100) - Average CPU Usage"
          },
          {
            "name": "logzio_exporter_trace_mock",
            "value": "95.83",
            "unit": "MB",
            "extra": "Trace (TPS: 100) - Average Memory Usage"
          },
          {
            "name": "jaeger_mock",
            "value": "2.32",
            "unit": "%",
            "extra": "Trace (TPS: 100) - Average CPU Usage"
          },
          {
            "name": "jaeger_mock",
            "value": "79.31",
            "unit": "MB",
            "extra": "Trace (TPS: 100) - Average Memory Usage"
          },
          {
            "name": "sapm_exporter_trace_mock",
            "value": "3.39",
            "unit": "%",
            "extra": "Trace (TPS: 100) - Average CPU Usage"
          },
          {
            "name": "sapm_exporter_trace_mock",
            "value": "88.20",
            "unit": "MB",
            "extra": "Trace (TPS: 100) - Average Memory Usage"
          },
          {
            "name": "xrayreceiver_mock",
            "value": "4.59",
            "unit": "%",
            "extra": "Trace (TPS: 100) - Average CPU Usage"
          },
          {
            "name": "xrayreceiver_mock",
            "value": "142.49",
            "unit": "MB",
            "extra": "Trace (TPS: 100) - Average Memory Usage"
          },
          {
            "name": "otlp_grpc_exporter_trace_mock",
            "value": "3.17",
            "unit": "%",
            "extra": "Trace (TPS: 100) - Average CPU Usage"
          },
          {
            "name": "otlp_grpc_exporter_trace_mock",
            "value": "139.72",
            "unit": "MB",
            "extra": "Trace (TPS: 100) - Average Memory Usage"
          },
          {
            "name": "zipkin_mock",
            "value": "5.79",
            "unit": "%",
            "extra": "Trace (TPS: 100) - Average CPU Usage"
          },
          {
            "name": "zipkin_mock",
            "value": "81.59",
            "unit": "MB",
            "extra": "Trace (TPS: 100) - Average Memory Usage"
          },
          {
            "name": "otlp_http_exporter_trace_mock",
            "value": "3.53",
            "unit": "%",
            "extra": "Trace (TPS: 100) - Average CPU Usage"
          },
          {
            "name": "otlp_http_exporter_trace_mock",
            "value": "73.76",
            "unit": "MB",
            "extra": "Trace (TPS: 100) - Average Memory Usage"
          },
          {
            "name": "otlp_mock",
            "value": "4.13",
            "unit": "%",
            "extra": "Trace (TPS: 100) - Average CPU Usage"
          },
          {
            "name": "otlp_mock",
            "value": "74.52",
            "unit": "MB",
            "extra": "Trace (TPS: 100) - Average Memory Usage"
          },
          {
            "name": "logzio_exporter_trace_mock",
            "value": "27.48",
            "unit": "%",
            "extra": "Trace (TPS: 1000) - Average CPU Usage"
          },
          {
            "name": "logzio_exporter_trace_mock",
            "value": "105.64",
            "unit": "MB",
            "extra": "Trace (TPS: 1000) - Average Memory Usage"
          },
          {
            "name": "otlp_http_exporter_trace_mock",
            "value": "25.81",
            "unit": "%",
            "extra": "Trace (TPS: 1000) - Average CPU Usage"
          },
          {
            "name": "otlp_http_exporter_trace_mock",
            "value": "74.56",
            "unit": "MB",
            "extra": "Trace (TPS: 1000) - Average Memory Usage"
          },
          {
            "name": "zipkin_mock",
            "value": "30.83",
            "unit": "%",
            "extra": "Trace (TPS: 1000) - Average CPU Usage"
          },
          {
            "name": "zipkin_mock",
            "value": "459.18",
            "unit": "MB",
            "extra": "Trace (TPS: 1000) - Average Memory Usage"
          },
          {
            "name": "sapm_exporter_trace_mock",
            "value": "26.07",
            "unit": "%",
            "extra": "Trace (TPS: 1000) - Average CPU Usage"
          },
          {
            "name": "sapm_exporter_trace_mock",
            "value": "90.75",
            "unit": "MB",
            "extra": "Trace (TPS: 1000) - Average Memory Usage"
          },
          {
            "name": "xrayreceiver_mock",
            "value": "25.93",
            "unit": "%",
            "extra": "Trace (TPS: 1000) - Average CPU Usage"
          },
          {
            "name": "xrayreceiver_mock",
            "value": "479.30",
            "unit": "MB",
            "extra": "Trace (TPS: 1000) - Average Memory Usage"
          },
          {
            "name": "jaeger_mock",
            "value": "16.93",
            "unit": "%",
            "extra": "Trace (TPS: 1000) - Average CPU Usage"
          },
          {
            "name": "jaeger_mock",
            "value": "154.36",
            "unit": "MB",
            "extra": "Trace (TPS: 1000) - Average Memory Usage"
          },
          {
            "name": "datadog_exporter_trace_mock",
            "value": "30.72",
            "unit": "%",
            "extra": "Trace (TPS: 1000) - Average CPU Usage"
          },
          {
            "name": "datadog_exporter_trace_mock",
            "value": "79.22",
            "unit": "MB",
            "extra": "Trace (TPS: 1000) - Average Memory Usage"
          },
          {
            "name": "otlp_mock",
            "value": "34.07",
            "unit": "%",
            "extra": "Trace (TPS: 1000) - Average CPU Usage"
          },
          {
            "name": "otlp_mock",
            "value": "79.07",
            "unit": "MB",
            "extra": "Trace (TPS: 1000) - Average Memory Usage"
          },
          {
            "name": "otlp_grpc_exporter_trace_mock",
            "value": "28.09",
            "unit": "%",
            "extra": "Trace (TPS: 1000) - Average CPU Usage"
          },
          {
            "name": "otlp_grpc_exporter_trace_mock",
            "value": "761.83",
            "unit": "MB",
            "extra": "Trace (TPS: 1000) - Average Memory Usage"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Khanh Nguyen",
            "username": "khanhntd",
            "email": "91758108+khanhntd@users.noreply.github.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "373e6d60ccf0b8122fdc800efad59b5a464b5384",
          "message": "Fix roll back when releasing latest binaries to s3 and change condition when triggering delete-image-binaries in CD workflow (#947)",
          "timestamp": "2022-01-31T20:35:58Z",
          "url": "https://github.com/aws-observability/aws-otel-collector/commit/373e6d60ccf0b8122fdc800efad59b5a464b5384"
        },
        "date": 1643746940079,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "statsd_mock",
            "value": "0.02",
            "unit": "%",
            "extra": "Metric (TPS: 1000) - Average CPU Usage"
          },
          {
            "name": "statsd_mock",
            "value": "61.27",
            "unit": "MB",
            "extra": "Metric (TPS: 1000) - Average Memory Usage"
          },
          {
            "name": "dynatrace_exporter_metric_mock",
            "value": "0.04",
            "unit": "%",
            "extra": "Metric (TPS: 1000) - Average CPU Usage"
          },
          {
            "name": "dynatrace_exporter_metric_mock",
            "value": "62.32",
            "unit": "MB",
            "extra": "Metric (TPS: 1000) - Average Memory Usage"
          },
          {
            "name": "otlp_metric_mock",
            "value": "0.04",
            "unit": "%",
            "extra": "Metric (TPS: 1000) - Average CPU Usage"
          },
          {
            "name": "otlp_metric_mock",
            "value": "61.89",
            "unit": "MB",
            "extra": "Metric (TPS: 1000) - Average Memory Usage"
          },
          {
            "name": "datadog_exporter_metric_mock",
            "value": "0.05",
            "unit": "%",
            "extra": "Metric (TPS: 1000) - Average CPU Usage"
          },
          {
            "name": "datadog_exporter_metric_mock",
            "value": "65.25",
            "unit": "MB",
            "extra": "Metric (TPS: 1000) - Average Memory Usage"
          },
          {
            "name": "signalfx_exporter_metric_mock",
            "value": "0.04",
            "unit": "%",
            "extra": "Metric (TPS: 1000) - Average CPU Usage"
          },
          {
            "name": "signalfx_exporter_metric_mock",
            "value": "63.04",
            "unit": "MB",
            "extra": "Metric (TPS: 1000) - Average Memory Usage"
          },
          {
            "name": "otlp_http_exporter_metric_mock",
            "value": "0.04",
            "unit": "%",
            "extra": "Metric (TPS: 1000) - Average CPU Usage"
          },
          {
            "name": "otlp_http_exporter_metric_mock",
            "value": "63.50",
            "unit": "MB",
            "extra": "Metric (TPS: 1000) - Average Memory Usage"
          },
          {
            "name": "prometheus_mock",
            "value": "1.23",
            "unit": "%",
            "extra": "Metric (TPS: 1000) - Average CPU Usage"
          },
          {
            "name": "prometheus_mock",
            "value": "114.74",
            "unit": "MB",
            "extra": "Metric (TPS: 1000) - Average Memory Usage"
          },
          {
            "name": "otlp_grpc_exporter_metric_mock",
            "value": "0.04",
            "unit": "%",
            "extra": "Metric (TPS: 1000) - Average CPU Usage"
          },
          {
            "name": "otlp_grpc_exporter_metric_mock",
            "value": "63.11",
            "unit": "MB",
            "extra": "Metric (TPS: 1000) - Average Memory Usage"
          },
          {
            "name": "datadog_exporter_metric_mock",
            "value": "0.05",
            "unit": "%",
            "extra": "Metric (TPS: 5000) - Average CPU Usage"
          },
          {
            "name": "datadog_exporter_metric_mock",
            "value": "64.93",
            "unit": "MB",
            "extra": "Metric (TPS: 5000) - Average Memory Usage"
          },
          {
            "name": "dynatrace_exporter_metric_mock",
            "value": "0.04",
            "unit": "%",
            "extra": "Metric (TPS: 5000) - Average CPU Usage"
          },
          {
            "name": "dynatrace_exporter_metric_mock",
            "value": "62.28",
            "unit": "MB",
            "extra": "Metric (TPS: 5000) - Average Memory Usage"
          },
          {
            "name": "statsd_mock",
            "value": "0.02",
            "unit": "%",
            "extra": "Metric (TPS: 5000) - Average CPU Usage"
          },
          {
            "name": "statsd_mock",
            "value": "60.98",
            "unit": "MB",
            "extra": "Metric (TPS: 5000) - Average Memory Usage"
          },
          {
            "name": "otlp_metric_mock",
            "value": "0.04",
            "unit": "%",
            "extra": "Metric (TPS: 5000) - Average CPU Usage"
          },
          {
            "name": "otlp_metric_mock",
            "value": "61.70",
            "unit": "MB",
            "extra": "Metric (TPS: 5000) - Average Memory Usage"
          },
          {
            "name": "otlp_grpc_exporter_metric_mock",
            "value": "0.04",
            "unit": "%",
            "extra": "Metric (TPS: 5000) - Average CPU Usage"
          },
          {
            "name": "otlp_grpc_exporter_metric_mock",
            "value": "61.53",
            "unit": "MB",
            "extra": "Metric (TPS: 5000) - Average Memory Usage"
          },
          {
            "name": "prometheus_mock",
            "value": "7.13",
            "unit": "%",
            "extra": "Metric (TPS: 5000) - Average CPU Usage"
          },
          {
            "name": "prometheus_mock",
            "value": "272.54",
            "unit": "MB",
            "extra": "Metric (TPS: 5000) - Average Memory Usage"
          },
          {
            "name": "otlp_http_exporter_metric_mock",
            "value": "0.05",
            "unit": "%",
            "extra": "Metric (TPS: 5000) - Average CPU Usage"
          },
          {
            "name": "otlp_http_exporter_metric_mock",
            "value": "61.86",
            "unit": "MB",
            "extra": "Metric (TPS: 5000) - Average Memory Usage"
          },
          {
            "name": "signalfx_exporter_metric_mock",
            "value": "0.04",
            "unit": "%",
            "extra": "Metric (TPS: 5000) - Average CPU Usage"
          },
          {
            "name": "signalfx_exporter_metric_mock",
            "value": "62.48",
            "unit": "MB",
            "extra": "Metric (TPS: 5000) - Average Memory Usage"
          },
          {
            "name": "prometheus_mock",
            "value": "0.13",
            "unit": "%",
            "extra": "Metric (TPS: 100) - Average CPU Usage"
          },
          {
            "name": "prometheus_mock",
            "value": "74.86",
            "unit": "MB",
            "extra": "Metric (TPS: 100) - Average Memory Usage"
          },
          {
            "name": "otlp_metric_mock",
            "value": "0.04",
            "unit": "%",
            "extra": "Metric (TPS: 100) - Average CPU Usage"
          },
          {
            "name": "otlp_metric_mock",
            "value": "61.46",
            "unit": "MB",
            "extra": "Metric (TPS: 100) - Average Memory Usage"
          },
          {
            "name": "otlp_grpc_exporter_metric_mock",
            "value": "0.04",
            "unit": "%",
            "extra": "Metric (TPS: 100) - Average CPU Usage"
          },
          {
            "name": "otlp_grpc_exporter_metric_mock",
            "value": "61.61",
            "unit": "MB",
            "extra": "Metric (TPS: 100) - Average Memory Usage"
          },
          {
            "name": "signalfx_exporter_metric_mock",
            "value": "0.04",
            "unit": "%",
            "extra": "Metric (TPS: 100) - Average CPU Usage"
          },
          {
            "name": "signalfx_exporter_metric_mock",
            "value": "63.76",
            "unit": "MB",
            "extra": "Metric (TPS: 100) - Average Memory Usage"
          },
          {
            "name": "statsd_mock",
            "value": "0.02",
            "unit": "%",
            "extra": "Metric (TPS: 100) - Average CPU Usage"
          },
          {
            "name": "statsd_mock",
            "value": "62.49",
            "unit": "MB",
            "extra": "Metric (TPS: 100) - Average Memory Usage"
          },
          {
            "name": "datadog_exporter_metric_mock",
            "value": "0.05",
            "unit": "%",
            "extra": "Metric (TPS: 100) - Average CPU Usage"
          },
          {
            "name": "datadog_exporter_metric_mock",
            "value": "65.54",
            "unit": "MB",
            "extra": "Metric (TPS: 100) - Average Memory Usage"
          },
          {
            "name": "otlp_http_exporter_metric_mock",
            "value": "0.04",
            "unit": "%",
            "extra": "Metric (TPS: 100) - Average CPU Usage"
          },
          {
            "name": "otlp_http_exporter_metric_mock",
            "value": "61.37",
            "unit": "MB",
            "extra": "Metric (TPS: 100) - Average Memory Usage"
          },
          {
            "name": "dynatrace_exporter_metric_mock",
            "value": "0.05",
            "unit": "%",
            "extra": "Metric (TPS: 100) - Average CPU Usage"
          },
          {
            "name": "dynatrace_exporter_metric_mock",
            "value": "62.44",
            "unit": "MB",
            "extra": "Metric (TPS: 100) - Average Memory Usage"
          },
          {
            "name": "sapm_exporter_trace_mock",
            "value": "109.74",
            "unit": "%",
            "extra": "Trace (TPS: 5000) - Average CPU Usage"
          },
          {
            "name": "sapm_exporter_trace_mock",
            "value": "96.32",
            "unit": "MB",
            "extra": "Trace (TPS: 5000) - Average Memory Usage"
          },
          {
            "name": "logzio_exporter_trace_mock",
            "value": "123.16",
            "unit": "%",
            "extra": "Trace (TPS: 5000) - Average CPU Usage"
          },
          {
            "name": "logzio_exporter_trace_mock",
            "value": "127.14",
            "unit": "MB",
            "extra": "Trace (TPS: 5000) - Average Memory Usage"
          },
          {
            "name": "otlp_grpc_exporter_trace_mock",
            "value": "129.65",
            "unit": "%",
            "extra": "Trace (TPS: 5000) - Average CPU Usage"
          },
          {
            "name": "otlp_grpc_exporter_trace_mock",
            "value": "3285.97",
            "unit": "MB",
            "extra": "Trace (TPS: 5000) - Average Memory Usage"
          },
          {
            "name": "zipkin_mock",
            "value": "30.09",
            "unit": "%",
            "extra": "Trace (TPS: 5000) - Average CPU Usage"
          },
          {
            "name": "zipkin_mock",
            "value": "501.32",
            "unit": "MB",
            "extra": "Trace (TPS: 5000) - Average Memory Usage"
          },
          {
            "name": "jaeger_mock",
            "value": "17.26",
            "unit": "%",
            "extra": "Trace (TPS: 5000) - Average CPU Usage"
          },
          {
            "name": "jaeger_mock",
            "value": "172.25",
            "unit": "MB",
            "extra": "Trace (TPS: 5000) - Average Memory Usage"
          },
          {
            "name": "datadog_exporter_trace_mock",
            "value": "116.84",
            "unit": "%",
            "extra": "Trace (TPS: 5000) - Average CPU Usage"
          },
          {
            "name": "datadog_exporter_trace_mock",
            "value": "86.20",
            "unit": "MB",
            "extra": "Trace (TPS: 5000) - Average Memory Usage"
          },
          {
            "name": "xrayreceiver_mock",
            "value": "36.90",
            "unit": "%",
            "extra": "Trace (TPS: 5000) - Average CPU Usage"
          },
          {
            "name": "xrayreceiver_mock",
            "value": "726.96",
            "unit": "MB",
            "extra": "Trace (TPS: 5000) - Average Memory Usage"
          },
          {
            "name": "otlp_mock",
            "value": "139.93",
            "unit": "%",
            "extra": "Trace (TPS: 5000) - Average CPU Usage"
          },
          {
            "name": "otlp_mock",
            "value": "15812.21",
            "unit": "MB",
            "extra": "Trace (TPS: 5000) - Average Memory Usage"
          },
          {
            "name": "otlp_http_exporter_trace_mock",
            "value": "108.53",
            "unit": "%",
            "extra": "Trace (TPS: 5000) - Average CPU Usage"
          },
          {
            "name": "otlp_http_exporter_trace_mock",
            "value": "79.67",
            "unit": "MB",
            "extra": "Trace (TPS: 5000) - Average Memory Usage"
          },
          {
            "name": "datadog_exporter_trace_mock",
            "value": "4.62",
            "unit": "%",
            "extra": "Trace (TPS: 100) - Average CPU Usage"
          },
          {
            "name": "datadog_exporter_trace_mock",
            "value": "78.04",
            "unit": "MB",
            "extra": "Trace (TPS: 100) - Average Memory Usage"
          },
          {
            "name": "logzio_exporter_trace_mock",
            "value": "3.25",
            "unit": "%",
            "extra": "Trace (TPS: 100) - Average CPU Usage"
          },
          {
            "name": "logzio_exporter_trace_mock",
            "value": "93.83",
            "unit": "MB",
            "extra": "Trace (TPS: 100) - Average Memory Usage"
          },
          {
            "name": "jaeger_mock",
            "value": "2.30",
            "unit": "%",
            "extra": "Trace (TPS: 100) - Average CPU Usage"
          },
          {
            "name": "jaeger_mock",
            "value": "79.00",
            "unit": "MB",
            "extra": "Trace (TPS: 100) - Average Memory Usage"
          },
          {
            "name": "sapm_exporter_trace_mock",
            "value": "3.15",
            "unit": "%",
            "extra": "Trace (TPS: 100) - Average CPU Usage"
          },
          {
            "name": "sapm_exporter_trace_mock",
            "value": "87.97",
            "unit": "MB",
            "extra": "Trace (TPS: 100) - Average Memory Usage"
          },
          {
            "name": "xrayreceiver_mock",
            "value": "4.72",
            "unit": "%",
            "extra": "Trace (TPS: 100) - Average CPU Usage"
          },
          {
            "name": "xrayreceiver_mock",
            "value": "151.05",
            "unit": "MB",
            "extra": "Trace (TPS: 100) - Average Memory Usage"
          },
          {
            "name": "otlp_grpc_exporter_trace_mock",
            "value": "3.27",
            "unit": "%",
            "extra": "Trace (TPS: 100) - Average CPU Usage"
          },
          {
            "name": "otlp_grpc_exporter_trace_mock",
            "value": "135.01",
            "unit": "MB",
            "extra": "Trace (TPS: 100) - Average Memory Usage"
          },
          {
            "name": "zipkin_mock",
            "value": "5.80",
            "unit": "%",
            "extra": "Trace (TPS: 100) - Average CPU Usage"
          },
          {
            "name": "zipkin_mock",
            "value": "82.70",
            "unit": "MB",
            "extra": "Trace (TPS: 100) - Average Memory Usage"
          },
          {
            "name": "otlp_http_exporter_trace_mock",
            "value": "3.38",
            "unit": "%",
            "extra": "Trace (TPS: 100) - Average CPU Usage"
          },
          {
            "name": "otlp_http_exporter_trace_mock",
            "value": "72.76",
            "unit": "MB",
            "extra": "Trace (TPS: 100) - Average Memory Usage"
          },
          {
            "name": "otlp_mock",
            "value": "4.40",
            "unit": "%",
            "extra": "Trace (TPS: 100) - Average CPU Usage"
          },
          {
            "name": "otlp_mock",
            "value": "76.19",
            "unit": "MB",
            "extra": "Trace (TPS: 100) - Average Memory Usage"
          },
          {
            "name": "logzio_exporter_trace_mock",
            "value": "28.10",
            "unit": "%",
            "extra": "Trace (TPS: 1000) - Average CPU Usage"
          },
          {
            "name": "logzio_exporter_trace_mock",
            "value": "106.04",
            "unit": "MB",
            "extra": "Trace (TPS: 1000) - Average Memory Usage"
          },
          {
            "name": "otlp_http_exporter_trace_mock",
            "value": "27.33",
            "unit": "%",
            "extra": "Trace (TPS: 1000) - Average CPU Usage"
          },
          {
            "name": "otlp_http_exporter_trace_mock",
            "value": "75.02",
            "unit": "MB",
            "extra": "Trace (TPS: 1000) - Average Memory Usage"
          },
          {
            "name": "zipkin_mock",
            "value": "31.15",
            "unit": "%",
            "extra": "Trace (TPS: 1000) - Average CPU Usage"
          },
          {
            "name": "zipkin_mock",
            "value": "468.49",
            "unit": "MB",
            "extra": "Trace (TPS: 1000) - Average Memory Usage"
          },
          {
            "name": "sapm_exporter_trace_mock",
            "value": "26.38",
            "unit": "%",
            "extra": "Trace (TPS: 1000) - Average CPU Usage"
          },
          {
            "name": "sapm_exporter_trace_mock",
            "value": "89.84",
            "unit": "MB",
            "extra": "Trace (TPS: 1000) - Average Memory Usage"
          },
          {
            "name": "xrayreceiver_mock",
            "value": "26.02",
            "unit": "%",
            "extra": "Trace (TPS: 1000) - Average CPU Usage"
          },
          {
            "name": "xrayreceiver_mock",
            "value": "547.35",
            "unit": "MB",
            "extra": "Trace (TPS: 1000) - Average Memory Usage"
          },
          {
            "name": "jaeger_mock",
            "value": "16.16",
            "unit": "%",
            "extra": "Trace (TPS: 1000) - Average CPU Usage"
          },
          {
            "name": "jaeger_mock",
            "value": "155.28",
            "unit": "MB",
            "extra": "Trace (TPS: 1000) - Average Memory Usage"
          },
          {
            "name": "datadog_exporter_trace_mock",
            "value": "31.31",
            "unit": "%",
            "extra": "Trace (TPS: 1000) - Average CPU Usage"
          },
          {
            "name": "datadog_exporter_trace_mock",
            "value": "79.16",
            "unit": "MB",
            "extra": "Trace (TPS: 1000) - Average Memory Usage"
          },
          {
            "name": "otlp_mock",
            "value": "32.96",
            "unit": "%",
            "extra": "Trace (TPS: 1000) - Average CPU Usage"
          },
          {
            "name": "otlp_mock",
            "value": "79.11",
            "unit": "MB",
            "extra": "Trace (TPS: 1000) - Average Memory Usage"
          },
          {
            "name": "otlp_grpc_exporter_trace_mock",
            "value": "30.19",
            "unit": "%",
            "extra": "Trace (TPS: 1000) - Average CPU Usage"
          },
          {
            "name": "otlp_grpc_exporter_trace_mock",
            "value": "687.39",
            "unit": "MB",
            "extra": "Trace (TPS: 1000) - Average Memory Usage"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Jeffrey Chien",
            "username": "jefchien",
            "email": "chienjef@amazon.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "83c500e00a8c464d7a0ed91fd1071584b6e52755",
          "message": "Add OTEL_METRICS_EXPORTER environment variable to example configurations. (#935)",
          "timestamp": "2022-01-31T18:12:29Z",
          "url": "https://github.com/aws-observability/aws-otel-collector/commit/83c500e00a8c464d7a0ed91fd1071584b6e52755"
        },
        "date": 1643761192277,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "statsd_mock",
            "value": "0.02",
            "unit": "%",
            "extra": "Metric (TPS: 1000) - Average CPU Usage"
          },
          {
            "name": "statsd_mock",
            "value": "62.17",
            "unit": "MB",
            "extra": "Metric (TPS: 1000) - Average Memory Usage"
          },
          {
            "name": "dynatrace_exporter_metric_mock",
            "value": "0.04",
            "unit": "%",
            "extra": "Metric (TPS: 1000) - Average CPU Usage"
          },
          {
            "name": "dynatrace_exporter_metric_mock",
            "value": "62.25",
            "unit": "MB",
            "extra": "Metric (TPS: 1000) - Average Memory Usage"
          },
          {
            "name": "otlp_metric_mock",
            "value": "0.05",
            "unit": "%",
            "extra": "Metric (TPS: 1000) - Average CPU Usage"
          },
          {
            "name": "otlp_metric_mock",
            "value": "61.89",
            "unit": "MB",
            "extra": "Metric (TPS: 1000) - Average Memory Usage"
          },
          {
            "name": "datadog_exporter_metric_mock",
            "value": "0.04",
            "unit": "%",
            "extra": "Metric (TPS: 1000) - Average CPU Usage"
          },
          {
            "name": "datadog_exporter_metric_mock",
            "value": "65.27",
            "unit": "MB",
            "extra": "Metric (TPS: 1000) - Average Memory Usage"
          },
          {
            "name": "signalfx_exporter_metric_mock",
            "value": "0.04",
            "unit": "%",
            "extra": "Metric (TPS: 1000) - Average CPU Usage"
          },
          {
            "name": "signalfx_exporter_metric_mock",
            "value": "62.66",
            "unit": "MB",
            "extra": "Metric (TPS: 1000) - Average Memory Usage"
          },
          {
            "name": "otlp_http_exporter_metric_mock",
            "value": "0.05",
            "unit": "%",
            "extra": "Metric (TPS: 1000) - Average CPU Usage"
          },
          {
            "name": "otlp_http_exporter_metric_mock",
            "value": "62.14",
            "unit": "MB",
            "extra": "Metric (TPS: 1000) - Average Memory Usage"
          },
          {
            "name": "prometheus_mock",
            "value": "1.28",
            "unit": "%",
            "extra": "Metric (TPS: 1000) - Average CPU Usage"
          },
          {
            "name": "prometheus_mock",
            "value": "110.85",
            "unit": "MB",
            "extra": "Metric (TPS: 1000) - Average Memory Usage"
          },
          {
            "name": "otlp_grpc_exporter_metric_mock",
            "value": "0.05",
            "unit": "%",
            "extra": "Metric (TPS: 1000) - Average CPU Usage"
          },
          {
            "name": "otlp_grpc_exporter_metric_mock",
            "value": "62.80",
            "unit": "MB",
            "extra": "Metric (TPS: 1000) - Average Memory Usage"
          },
          {
            "name": "datadog_exporter_metric_mock",
            "value": "0.04",
            "unit": "%",
            "extra": "Metric (TPS: 5000) - Average CPU Usage"
          },
          {
            "name": "datadog_exporter_metric_mock",
            "value": "65.04",
            "unit": "MB",
            "extra": "Metric (TPS: 5000) - Average Memory Usage"
          },
          {
            "name": "dynatrace_exporter_metric_mock",
            "value": "0.05",
            "unit": "%",
            "extra": "Metric (TPS: 5000) - Average CPU Usage"
          },
          {
            "name": "dynatrace_exporter_metric_mock",
            "value": "62.87",
            "unit": "MB",
            "extra": "Metric (TPS: 5000) - Average Memory Usage"
          },
          {
            "name": "statsd_mock",
            "value": "0.02",
            "unit": "%",
            "extra": "Metric (TPS: 5000) - Average CPU Usage"
          },
          {
            "name": "statsd_mock",
            "value": "62.49",
            "unit": "MB",
            "extra": "Metric (TPS: 5000) - Average Memory Usage"
          },
          {
            "name": "otlp_metric_mock",
            "value": "0.04",
            "unit": "%",
            "extra": "Metric (TPS: 5000) - Average CPU Usage"
          },
          {
            "name": "otlp_metric_mock",
            "value": "61.36",
            "unit": "MB",
            "extra": "Metric (TPS: 5000) - Average Memory Usage"
          },
          {
            "name": "otlp_grpc_exporter_metric_mock",
            "value": "0.04",
            "unit": "%",
            "extra": "Metric (TPS: 5000) - Average CPU Usage"
          },
          {
            "name": "otlp_grpc_exporter_metric_mock",
            "value": "61.58",
            "unit": "MB",
            "extra": "Metric (TPS: 5000) - Average Memory Usage"
          },
          {
            "name": "prometheus_mock",
            "value": "7.60",
            "unit": "%",
            "extra": "Metric (TPS: 5000) - Average CPU Usage"
          },
          {
            "name": "prometheus_mock",
            "value": "270.49",
            "unit": "MB",
            "extra": "Metric (TPS: 5000) - Average Memory Usage"
          },
          {
            "name": "otlp_http_exporter_metric_mock",
            "value": "0.04",
            "unit": "%",
            "extra": "Metric (TPS: 5000) - Average CPU Usage"
          },
          {
            "name": "otlp_http_exporter_metric_mock",
            "value": "62.29",
            "unit": "MB",
            "extra": "Metric (TPS: 5000) - Average Memory Usage"
          },
          {
            "name": "signalfx_exporter_metric_mock",
            "value": "0.04",
            "unit": "%",
            "extra": "Metric (TPS: 5000) - Average CPU Usage"
          },
          {
            "name": "signalfx_exporter_metric_mock",
            "value": "63.36",
            "unit": "MB",
            "extra": "Metric (TPS: 5000) - Average Memory Usage"
          },
          {
            "name": "prometheus_mock",
            "value": "0.11",
            "unit": "%",
            "extra": "Metric (TPS: 100) - Average CPU Usage"
          },
          {
            "name": "prometheus_mock",
            "value": "75.93",
            "unit": "MB",
            "extra": "Metric (TPS: 100) - Average Memory Usage"
          },
          {
            "name": "otlp_metric_mock",
            "value": "0.04",
            "unit": "%",
            "extra": "Metric (TPS: 100) - Average CPU Usage"
          },
          {
            "name": "otlp_metric_mock",
            "value": "62.43",
            "unit": "MB",
            "extra": "Metric (TPS: 100) - Average Memory Usage"
          },
          {
            "name": "otlp_grpc_exporter_metric_mock",
            "value": "0.04",
            "unit": "%",
            "extra": "Metric (TPS: 100) - Average CPU Usage"
          },
          {
            "name": "otlp_grpc_exporter_metric_mock",
            "value": "62.82",
            "unit": "MB",
            "extra": "Metric (TPS: 100) - Average Memory Usage"
          },
          {
            "name": "signalfx_exporter_metric_mock",
            "value": "0.04",
            "unit": "%",
            "extra": "Metric (TPS: 100) - Average CPU Usage"
          },
          {
            "name": "signalfx_exporter_metric_mock",
            "value": "62.66",
            "unit": "MB",
            "extra": "Metric (TPS: 100) - Average Memory Usage"
          },
          {
            "name": "statsd_mock",
            "value": "0.02",
            "unit": "%",
            "extra": "Metric (TPS: 100) - Average CPU Usage"
          },
          {
            "name": "statsd_mock",
            "value": "60.85",
            "unit": "MB",
            "extra": "Metric (TPS: 100) - Average Memory Usage"
          },
          {
            "name": "datadog_exporter_metric_mock",
            "value": "0.04",
            "unit": "%",
            "extra": "Metric (TPS: 100) - Average CPU Usage"
          },
          {
            "name": "datadog_exporter_metric_mock",
            "value": "62.15",
            "unit": "MB",
            "extra": "Metric (TPS: 100) - Average Memory Usage"
          },
          {
            "name": "otlp_http_exporter_metric_mock",
            "value": "0.04",
            "unit": "%",
            "extra": "Metric (TPS: 100) - Average CPU Usage"
          },
          {
            "name": "otlp_http_exporter_metric_mock",
            "value": "62.03",
            "unit": "MB",
            "extra": "Metric (TPS: 100) - Average Memory Usage"
          },
          {
            "name": "dynatrace_exporter_metric_mock",
            "value": "0.04",
            "unit": "%",
            "extra": "Metric (TPS: 100) - Average CPU Usage"
          },
          {
            "name": "dynatrace_exporter_metric_mock",
            "value": "62.11",
            "unit": "MB",
            "extra": "Metric (TPS: 100) - Average Memory Usage"
          },
          {
            "name": "sapm_exporter_trace_mock",
            "value": "115.78",
            "unit": "%",
            "extra": "Trace (TPS: 5000) - Average CPU Usage"
          },
          {
            "name": "sapm_exporter_trace_mock",
            "value": "96.29",
            "unit": "MB",
            "extra": "Trace (TPS: 5000) - Average Memory Usage"
          },
          {
            "name": "logzio_exporter_trace_mock",
            "value": "125.33",
            "unit": "%",
            "extra": "Trace (TPS: 5000) - Average CPU Usage"
          },
          {
            "name": "logzio_exporter_trace_mock",
            "value": "126.78",
            "unit": "MB",
            "extra": "Trace (TPS: 5000) - Average Memory Usage"
          },
          {
            "name": "otlp_grpc_exporter_trace_mock",
            "value": "130.56",
            "unit": "%",
            "extra": "Trace (TPS: 5000) - Average CPU Usage"
          },
          {
            "name": "otlp_grpc_exporter_trace_mock",
            "value": "3743.60",
            "unit": "MB",
            "extra": "Trace (TPS: 5000) - Average Memory Usage"
          },
          {
            "name": "zipkin_mock",
            "value": "28.42",
            "unit": "%",
            "extra": "Trace (TPS: 5000) - Average CPU Usage"
          },
          {
            "name": "zipkin_mock",
            "value": "504.24",
            "unit": "MB",
            "extra": "Trace (TPS: 5000) - Average Memory Usage"
          },
          {
            "name": "jaeger_mock",
            "value": "16.86",
            "unit": "%",
            "extra": "Trace (TPS: 5000) - Average CPU Usage"
          },
          {
            "name": "jaeger_mock",
            "value": "173.93",
            "unit": "MB",
            "extra": "Trace (TPS: 5000) - Average Memory Usage"
          },
          {
            "name": "datadog_exporter_trace_mock",
            "value": "133.99",
            "unit": "%",
            "extra": "Trace (TPS: 5000) - Average CPU Usage"
          },
          {
            "name": "datadog_exporter_trace_mock",
            "value": "85.02",
            "unit": "MB",
            "extra": "Trace (TPS: 5000) - Average Memory Usage"
          },
          {
            "name": "xrayreceiver_mock",
            "value": "37.38",
            "unit": "%",
            "extra": "Trace (TPS: 5000) - Average CPU Usage"
          },
          {
            "name": "xrayreceiver_mock",
            "value": "702.71",
            "unit": "MB",
            "extra": "Trace (TPS: 5000) - Average Memory Usage"
          },
          {
            "name": "otlp_mock",
            "value": "161.71",
            "unit": "%",
            "extra": "Trace (TPS: 5000) - Average CPU Usage"
          },
          {
            "name": "otlp_mock",
            "value": "15832.42",
            "unit": "MB",
            "extra": "Trace (TPS: 5000) - Average Memory Usage"
          },
          {
            "name": "otlp_http_exporter_trace_mock",
            "value": "104.00",
            "unit": "%",
            "extra": "Trace (TPS: 5000) - Average CPU Usage"
          },
          {
            "name": "otlp_http_exporter_trace_mock",
            "value": "79.77",
            "unit": "MB",
            "extra": "Trace (TPS: 5000) - Average Memory Usage"
          },
          {
            "name": "datadog_exporter_trace_mock",
            "value": "4.28",
            "unit": "%",
            "extra": "Trace (TPS: 100) - Average CPU Usage"
          },
          {
            "name": "datadog_exporter_trace_mock",
            "value": "78.50",
            "unit": "MB",
            "extra": "Trace (TPS: 100) - Average Memory Usage"
          },
          {
            "name": "logzio_exporter_trace_mock",
            "value": "3.11",
            "unit": "%",
            "extra": "Trace (TPS: 100) - Average CPU Usage"
          },
          {
            "name": "logzio_exporter_trace_mock",
            "value": "93.87",
            "unit": "MB",
            "extra": "Trace (TPS: 100) - Average Memory Usage"
          },
          {
            "name": "jaeger_mock",
            "value": "2.31",
            "unit": "%",
            "extra": "Trace (TPS: 100) - Average CPU Usage"
          },
          {
            "name": "jaeger_mock",
            "value": "81.06",
            "unit": "MB",
            "extra": "Trace (TPS: 100) - Average Memory Usage"
          },
          {
            "name": "sapm_exporter_trace_mock",
            "value": "2.97",
            "unit": "%",
            "extra": "Trace (TPS: 100) - Average CPU Usage"
          },
          {
            "name": "sapm_exporter_trace_mock",
            "value": "88.23",
            "unit": "MB",
            "extra": "Trace (TPS: 100) - Average Memory Usage"
          },
          {
            "name": "xrayreceiver_mock",
            "value": "4.75",
            "unit": "%",
            "extra": "Trace (TPS: 100) - Average CPU Usage"
          },
          {
            "name": "xrayreceiver_mock",
            "value": "146.92",
            "unit": "MB",
            "extra": "Trace (TPS: 100) - Average Memory Usage"
          },
          {
            "name": "otlp_grpc_exporter_trace_mock",
            "value": "3.25",
            "unit": "%",
            "extra": "Trace (TPS: 100) - Average CPU Usage"
          },
          {
            "name": "otlp_grpc_exporter_trace_mock",
            "value": "133.33",
            "unit": "MB",
            "extra": "Trace (TPS: 100) - Average Memory Usage"
          },
          {
            "name": "zipkin_mock",
            "value": "5.76",
            "unit": "%",
            "extra": "Trace (TPS: 100) - Average CPU Usage"
          },
          {
            "name": "zipkin_mock",
            "value": "82.53",
            "unit": "MB",
            "extra": "Trace (TPS: 100) - Average Memory Usage"
          },
          {
            "name": "otlp_http_exporter_trace_mock",
            "value": "3.29",
            "unit": "%",
            "extra": "Trace (TPS: 100) - Average CPU Usage"
          },
          {
            "name": "otlp_http_exporter_trace_mock",
            "value": "73.61",
            "unit": "MB",
            "extra": "Trace (TPS: 100) - Average Memory Usage"
          },
          {
            "name": "otlp_mock",
            "value": "4.17",
            "unit": "%",
            "extra": "Trace (TPS: 100) - Average CPU Usage"
          },
          {
            "name": "otlp_mock",
            "value": "74.74",
            "unit": "MB",
            "extra": "Trace (TPS: 100) - Average Memory Usage"
          },
          {
            "name": "logzio_exporter_trace_mock",
            "value": "28.14",
            "unit": "%",
            "extra": "Trace (TPS: 1000) - Average CPU Usage"
          },
          {
            "name": "logzio_exporter_trace_mock",
            "value": "106.85",
            "unit": "MB",
            "extra": "Trace (TPS: 1000) - Average Memory Usage"
          },
          {
            "name": "otlp_http_exporter_trace_mock",
            "value": "26.32",
            "unit": "%",
            "extra": "Trace (TPS: 1000) - Average CPU Usage"
          },
          {
            "name": "otlp_http_exporter_trace_mock",
            "value": "75.08",
            "unit": "MB",
            "extra": "Trace (TPS: 1000) - Average Memory Usage"
          },
          {
            "name": "zipkin_mock",
            "value": "31.09",
            "unit": "%",
            "extra": "Trace (TPS: 1000) - Average CPU Usage"
          },
          {
            "name": "zipkin_mock",
            "value": "466.50",
            "unit": "MB",
            "extra": "Trace (TPS: 1000) - Average Memory Usage"
          },
          {
            "name": "sapm_exporter_trace_mock",
            "value": "28.42",
            "unit": "%",
            "extra": "Trace (TPS: 1000) - Average CPU Usage"
          },
          {
            "name": "sapm_exporter_trace_mock",
            "value": "90.26",
            "unit": "MB",
            "extra": "Trace (TPS: 1000) - Average Memory Usage"
          },
          {
            "name": "xrayreceiver_mock",
            "value": "26.23",
            "unit": "%",
            "extra": "Trace (TPS: 1000) - Average CPU Usage"
          },
          {
            "name": "xrayreceiver_mock",
            "value": "498.46",
            "unit": "MB",
            "extra": "Trace (TPS: 1000) - Average Memory Usage"
          },
          {
            "name": "jaeger_mock",
            "value": "16.99",
            "unit": "%",
            "extra": "Trace (TPS: 1000) - Average CPU Usage"
          },
          {
            "name": "jaeger_mock",
            "value": "153.54",
            "unit": "MB",
            "extra": "Trace (TPS: 1000) - Average Memory Usage"
          },
          {
            "name": "datadog_exporter_trace_mock",
            "value": "31.29",
            "unit": "%",
            "extra": "Trace (TPS: 1000) - Average CPU Usage"
          },
          {
            "name": "datadog_exporter_trace_mock",
            "value": "79.20",
            "unit": "MB",
            "extra": "Trace (TPS: 1000) - Average Memory Usage"
          },
          {
            "name": "otlp_mock",
            "value": "33.71",
            "unit": "%",
            "extra": "Trace (TPS: 1000) - Average CPU Usage"
          },
          {
            "name": "otlp_mock",
            "value": "79.21",
            "unit": "MB",
            "extra": "Trace (TPS: 1000) - Average Memory Usage"
          },
          {
            "name": "otlp_grpc_exporter_trace_mock",
            "value": "27.29",
            "unit": "%",
            "extra": "Trace (TPS: 1000) - Average CPU Usage"
          },
          {
            "name": "otlp_grpc_exporter_trace_mock",
            "value": "695.40",
            "unit": "MB",
            "extra": "Trace (TPS: 1000) - Average Memory Usage"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "bryan-aguilar",
            "username": "bryan-aguilar",
            "email": "46550959+bryan-aguilar@users.noreply.github.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "59dd6a742424ab2df4fc6e10b362364ab1f54737",
          "message": "Update flags.go to be in sync with upstream (#955)\n\nCo-authored-by: Anthony Mirabella <a9@aneurysm9.com>",
          "timestamp": "2022-02-01T23:16:08Z",
          "url": "https://github.com/aws-observability/aws-otel-collector/commit/59dd6a742424ab2df4fc6e10b362364ab1f54737"
        },
        "date": 1643808128842,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "jaeger_mock",
            "value": "16.43",
            "unit": "%",
            "extra": "Trace (TPS: 5000) - Average CPU Usage"
          },
          {
            "name": "jaeger_mock",
            "value": "176.67",
            "unit": "MB",
            "extra": "Trace (TPS: 5000) - Average Memory Usage"
          },
          {
            "name": "otlp_mock",
            "value": "142.71",
            "unit": "%",
            "extra": "Trace (TPS: 5000) - Average CPU Usage"
          },
          {
            "name": "otlp_mock",
            "value": "15371.60",
            "unit": "MB",
            "extra": "Trace (TPS: 5000) - Average Memory Usage"
          },
          {
            "name": "datadog_exporter_trace_mock",
            "value": "117.52",
            "unit": "%",
            "extra": "Trace (TPS: 5000) - Average CPU Usage"
          },
          {
            "name": "datadog_exporter_trace_mock",
            "value": "85.14",
            "unit": "MB",
            "extra": "Trace (TPS: 5000) - Average Memory Usage"
          },
          {
            "name": "otlp_http_exporter_trace_mock",
            "value": "104.73",
            "unit": "%",
            "extra": "Trace (TPS: 5000) - Average CPU Usage"
          },
          {
            "name": "otlp_http_exporter_trace_mock",
            "value": "80.97",
            "unit": "MB",
            "extra": "Trace (TPS: 5000) - Average Memory Usage"
          },
          {
            "name": "otlp_grpc_exporter_trace_mock",
            "value": "128.35",
            "unit": "%",
            "extra": "Trace (TPS: 5000) - Average CPU Usage"
          },
          {
            "name": "otlp_grpc_exporter_trace_mock",
            "value": "3126.78",
            "unit": "MB",
            "extra": "Trace (TPS: 5000) - Average Memory Usage"
          },
          {
            "name": "logzio_exporter_trace_mock",
            "value": "109.72",
            "unit": "%",
            "extra": "Trace (TPS: 5000) - Average CPU Usage"
          },
          {
            "name": "logzio_exporter_trace_mock",
            "value": "128.03",
            "unit": "MB",
            "extra": "Trace (TPS: 5000) - Average Memory Usage"
          },
          {
            "name": "xrayreceiver_mock",
            "value": "38.39",
            "unit": "%",
            "extra": "Trace (TPS: 5000) - Average CPU Usage"
          },
          {
            "name": "xrayreceiver_mock",
            "value": "798.97",
            "unit": "MB",
            "extra": "Trace (TPS: 5000) - Average Memory Usage"
          },
          {
            "name": "zipkin_mock",
            "value": "28.84",
            "unit": "%",
            "extra": "Trace (TPS: 5000) - Average CPU Usage"
          },
          {
            "name": "zipkin_mock",
            "value": "498.89",
            "unit": "MB",
            "extra": "Trace (TPS: 5000) - Average Memory Usage"
          },
          {
            "name": "sapm_exporter_trace_mock",
            "value": "120.80",
            "unit": "%",
            "extra": "Trace (TPS: 5000) - Average CPU Usage"
          },
          {
            "name": "sapm_exporter_trace_mock",
            "value": "95.57",
            "unit": "MB",
            "extra": "Trace (TPS: 5000) - Average Memory Usage"
          },
          {
            "name": "logzio_exporter_trace_mock",
            "value": "27.53",
            "unit": "%",
            "extra": "Trace (TPS: 1000) - Average CPU Usage"
          },
          {
            "name": "logzio_exporter_trace_mock",
            "value": "106.23",
            "unit": "MB",
            "extra": "Trace (TPS: 1000) - Average Memory Usage"
          },
          {
            "name": "datadog_exporter_trace_mock",
            "value": "31.15",
            "unit": "%",
            "extra": "Trace (TPS: 1000) - Average CPU Usage"
          },
          {
            "name": "datadog_exporter_trace_mock",
            "value": "79.44",
            "unit": "MB",
            "extra": "Trace (TPS: 1000) - Average Memory Usage"
          },
          {
            "name": "jaeger_mock",
            "value": "16.58",
            "unit": "%",
            "extra": "Trace (TPS: 1000) - Average CPU Usage"
          },
          {
            "name": "jaeger_mock",
            "value": "150.72",
            "unit": "MB",
            "extra": "Trace (TPS: 1000) - Average Memory Usage"
          },
          {
            "name": "sapm_exporter_trace_mock",
            "value": "28.23",
            "unit": "%",
            "extra": "Trace (TPS: 1000) - Average CPU Usage"
          },
          {
            "name": "sapm_exporter_trace_mock",
            "value": "89.27",
            "unit": "MB",
            "extra": "Trace (TPS: 1000) - Average Memory Usage"
          },
          {
            "name": "otlp_mock",
            "value": "33.65",
            "unit": "%",
            "extra": "Trace (TPS: 1000) - Average CPU Usage"
          },
          {
            "name": "otlp_mock",
            "value": "79.64",
            "unit": "MB",
            "extra": "Trace (TPS: 1000) - Average Memory Usage"
          },
          {
            "name": "otlp_http_exporter_trace_mock",
            "value": "27.26",
            "unit": "%",
            "extra": "Trace (TPS: 1000) - Average CPU Usage"
          },
          {
            "name": "otlp_http_exporter_trace_mock",
            "value": "76.35",
            "unit": "MB",
            "extra": "Trace (TPS: 1000) - Average Memory Usage"
          },
          {
            "name": "xrayreceiver_mock",
            "value": "24.97",
            "unit": "%",
            "extra": "Trace (TPS: 1000) - Average CPU Usage"
          },
          {
            "name": "xrayreceiver_mock",
            "value": "562.83",
            "unit": "MB",
            "extra": "Trace (TPS: 1000) - Average Memory Usage"
          },
          {
            "name": "zipkin_mock",
            "value": "30.12",
            "unit": "%",
            "extra": "Trace (TPS: 1000) - Average CPU Usage"
          },
          {
            "name": "zipkin_mock",
            "value": "469.21",
            "unit": "MB",
            "extra": "Trace (TPS: 1000) - Average Memory Usage"
          },
          {
            "name": "otlp_grpc_exporter_trace_mock",
            "value": "29.06",
            "unit": "%",
            "extra": "Trace (TPS: 1000) - Average CPU Usage"
          },
          {
            "name": "otlp_grpc_exporter_trace_mock",
            "value": "769.98",
            "unit": "MB",
            "extra": "Trace (TPS: 1000) - Average Memory Usage"
          },
          {
            "name": "jaeger_mock",
            "value": "2.33",
            "unit": "%",
            "extra": "Trace (TPS: 100) - Average CPU Usage"
          },
          {
            "name": "jaeger_mock",
            "value": "78.88",
            "unit": "MB",
            "extra": "Trace (TPS: 100) - Average Memory Usage"
          },
          {
            "name": "xrayreceiver_mock",
            "value": "4.68",
            "unit": "%",
            "extra": "Trace (TPS: 100) - Average CPU Usage"
          },
          {
            "name": "xrayreceiver_mock",
            "value": "146.63",
            "unit": "MB",
            "extra": "Trace (TPS: 100) - Average Memory Usage"
          },
          {
            "name": "sapm_exporter_trace_mock",
            "value": "3.57",
            "unit": "%",
            "extra": "Trace (TPS: 100) - Average CPU Usage"
          },
          {
            "name": "sapm_exporter_trace_mock",
            "value": "87.99",
            "unit": "MB",
            "extra": "Trace (TPS: 100) - Average Memory Usage"
          },
          {
            "name": "zipkin_mock",
            "value": "6.05",
            "unit": "%",
            "extra": "Trace (TPS: 100) - Average CPU Usage"
          },
          {
            "name": "zipkin_mock",
            "value": "81.35",
            "unit": "MB",
            "extra": "Trace (TPS: 100) - Average Memory Usage"
          },
          {
            "name": "logzio_exporter_trace_mock",
            "value": "3.00",
            "unit": "%",
            "extra": "Trace (TPS: 100) - Average CPU Usage"
          },
          {
            "name": "logzio_exporter_trace_mock",
            "value": "94.54",
            "unit": "MB",
            "extra": "Trace (TPS: 100) - Average Memory Usage"
          },
          {
            "name": "otlp_grpc_exporter_trace_mock",
            "value": "3.09",
            "unit": "%",
            "extra": "Trace (TPS: 100) - Average CPU Usage"
          },
          {
            "name": "otlp_grpc_exporter_trace_mock",
            "value": "144.78",
            "unit": "MB",
            "extra": "Trace (TPS: 100) - Average Memory Usage"
          },
          {
            "name": "otlp_http_exporter_trace_mock",
            "value": "3.41",
            "unit": "%",
            "extra": "Trace (TPS: 100) - Average CPU Usage"
          },
          {
            "name": "otlp_http_exporter_trace_mock",
            "value": "73.77",
            "unit": "MB",
            "extra": "Trace (TPS: 100) - Average Memory Usage"
          },
          {
            "name": "otlp_mock",
            "value": "3.89",
            "unit": "%",
            "extra": "Trace (TPS: 100) - Average CPU Usage"
          },
          {
            "name": "otlp_mock",
            "value": "74.30",
            "unit": "MB",
            "extra": "Trace (TPS: 100) - Average Memory Usage"
          },
          {
            "name": "datadog_exporter_trace_mock",
            "value": "4.70",
            "unit": "%",
            "extra": "Trace (TPS: 100) - Average CPU Usage"
          },
          {
            "name": "datadog_exporter_trace_mock",
            "value": "77.84",
            "unit": "MB",
            "extra": "Trace (TPS: 100) - Average Memory Usage"
          },
          {
            "name": "dynatrace_exporter_metric_mock",
            "value": "0.04",
            "unit": "%",
            "extra": "Metric (TPS: 5000) - Average CPU Usage"
          },
          {
            "name": "dynatrace_exporter_metric_mock",
            "value": "62.76",
            "unit": "MB",
            "extra": "Metric (TPS: 5000) - Average Memory Usage"
          },
          {
            "name": "signalfx_exporter_metric_mock",
            "value": "0.04",
            "unit": "%",
            "extra": "Metric (TPS: 5000) - Average CPU Usage"
          },
          {
            "name": "signalfx_exporter_metric_mock",
            "value": "63.89",
            "unit": "MB",
            "extra": "Metric (TPS: 5000) - Average Memory Usage"
          },
          {
            "name": "datadog_exporter_metric_mock",
            "value": "0.05",
            "unit": "%",
            "extra": "Metric (TPS: 5000) - Average CPU Usage"
          },
          {
            "name": "datadog_exporter_metric_mock",
            "value": "63.21",
            "unit": "MB",
            "extra": "Metric (TPS: 5000) - Average Memory Usage"
          },
          {
            "name": "otlp_http_exporter_metric_mock",
            "value": "0.04",
            "unit": "%",
            "extra": "Metric (TPS: 5000) - Average CPU Usage"
          },
          {
            "name": "otlp_http_exporter_metric_mock",
            "value": "61.59",
            "unit": "MB",
            "extra": "Metric (TPS: 5000) - Average Memory Usage"
          },
          {
            "name": "statsd_mock",
            "value": "0.02",
            "unit": "%",
            "extra": "Metric (TPS: 5000) - Average CPU Usage"
          },
          {
            "name": "statsd_mock",
            "value": "62.80",
            "unit": "MB",
            "extra": "Metric (TPS: 5000) - Average Memory Usage"
          },
          {
            "name": "otlp_grpc_exporter_metric_mock",
            "value": "0.05",
            "unit": "%",
            "extra": "Metric (TPS: 5000) - Average CPU Usage"
          },
          {
            "name": "otlp_grpc_exporter_metric_mock",
            "value": "62.43",
            "unit": "MB",
            "extra": "Metric (TPS: 5000) - Average Memory Usage"
          },
          {
            "name": "prometheus_mock",
            "value": "7.17",
            "unit": "%",
            "extra": "Metric (TPS: 5000) - Average CPU Usage"
          },
          {
            "name": "prometheus_mock",
            "value": "271.49",
            "unit": "MB",
            "extra": "Metric (TPS: 5000) - Average Memory Usage"
          },
          {
            "name": "otlp_metric_mock",
            "value": "0.04",
            "unit": "%",
            "extra": "Metric (TPS: 5000) - Average CPU Usage"
          },
          {
            "name": "otlp_metric_mock",
            "value": "61.76",
            "unit": "MB",
            "extra": "Metric (TPS: 5000) - Average Memory Usage"
          },
          {
            "name": "signalfx_exporter_metric_mock",
            "value": "0.04",
            "unit": "%",
            "extra": "Metric (TPS: 100) - Average CPU Usage"
          },
          {
            "name": "signalfx_exporter_metric_mock",
            "value": "63.56",
            "unit": "MB",
            "extra": "Metric (TPS: 100) - Average Memory Usage"
          },
          {
            "name": "datadog_exporter_metric_mock",
            "value": "0.05",
            "unit": "%",
            "extra": "Metric (TPS: 100) - Average CPU Usage"
          },
          {
            "name": "datadog_exporter_metric_mock",
            "value": "64.84",
            "unit": "MB",
            "extra": "Metric (TPS: 100) - Average Memory Usage"
          },
          {
            "name": "prometheus_mock",
            "value": "0.12",
            "unit": "%",
            "extra": "Metric (TPS: 100) - Average CPU Usage"
          },
          {
            "name": "prometheus_mock",
            "value": "75.48",
            "unit": "MB",
            "extra": "Metric (TPS: 100) - Average Memory Usage"
          },
          {
            "name": "otlp_metric_mock",
            "value": "0.04",
            "unit": "%",
            "extra": "Metric (TPS: 100) - Average CPU Usage"
          },
          {
            "name": "otlp_metric_mock",
            "value": "60.91",
            "unit": "MB",
            "extra": "Metric (TPS: 100) - Average Memory Usage"
          },
          {
            "name": "statsd_mock",
            "value": "0.02",
            "unit": "%",
            "extra": "Metric (TPS: 100) - Average CPU Usage"
          },
          {
            "name": "statsd_mock",
            "value": "62.25",
            "unit": "MB",
            "extra": "Metric (TPS: 100) - Average Memory Usage"
          },
          {
            "name": "dynatrace_exporter_metric_mock",
            "value": "0.04",
            "unit": "%",
            "extra": "Metric (TPS: 100) - Average CPU Usage"
          },
          {
            "name": "dynatrace_exporter_metric_mock",
            "value": "62.52",
            "unit": "MB",
            "extra": "Metric (TPS: 100) - Average Memory Usage"
          },
          {
            "name": "otlp_grpc_exporter_metric_mock",
            "value": "0.04",
            "unit": "%",
            "extra": "Metric (TPS: 100) - Average CPU Usage"
          },
          {
            "name": "otlp_grpc_exporter_metric_mock",
            "value": "62.22",
            "unit": "MB",
            "extra": "Metric (TPS: 100) - Average Memory Usage"
          },
          {
            "name": "otlp_http_exporter_metric_mock",
            "value": "0.04",
            "unit": "%",
            "extra": "Metric (TPS: 100) - Average CPU Usage"
          },
          {
            "name": "otlp_http_exporter_metric_mock",
            "value": "62.71",
            "unit": "MB",
            "extra": "Metric (TPS: 100) - Average Memory Usage"
          },
          {
            "name": "dynatrace_exporter_metric_mock",
            "value": "0.04",
            "unit": "%",
            "extra": "Metric (TPS: 1000) - Average CPU Usage"
          },
          {
            "name": "dynatrace_exporter_metric_mock",
            "value": "63.47",
            "unit": "MB",
            "extra": "Metric (TPS: 1000) - Average Memory Usage"
          },
          {
            "name": "datadog_exporter_metric_mock",
            "value": "0.04",
            "unit": "%",
            "extra": "Metric (TPS: 1000) - Average CPU Usage"
          },
          {
            "name": "datadog_exporter_metric_mock",
            "value": "63.55",
            "unit": "MB",
            "extra": "Metric (TPS: 1000) - Average Memory Usage"
          },
          {
            "name": "otlp_http_exporter_metric_mock",
            "value": "0.04",
            "unit": "%",
            "extra": "Metric (TPS: 1000) - Average CPU Usage"
          },
          {
            "name": "otlp_http_exporter_metric_mock",
            "value": "61.88",
            "unit": "MB",
            "extra": "Metric (TPS: 1000) - Average Memory Usage"
          },
          {
            "name": "signalfx_exporter_metric_mock",
            "value": "0.05",
            "unit": "%",
            "extra": "Metric (TPS: 1000) - Average CPU Usage"
          },
          {
            "name": "signalfx_exporter_metric_mock",
            "value": "62.72",
            "unit": "MB",
            "extra": "Metric (TPS: 1000) - Average Memory Usage"
          },
          {
            "name": "otlp_metric_mock",
            "value": "0.04",
            "unit": "%",
            "extra": "Metric (TPS: 1000) - Average CPU Usage"
          },
          {
            "name": "otlp_metric_mock",
            "value": "60.94",
            "unit": "MB",
            "extra": "Metric (TPS: 1000) - Average Memory Usage"
          },
          {
            "name": "otlp_grpc_exporter_metric_mock",
            "value": "0.04",
            "unit": "%",
            "extra": "Metric (TPS: 1000) - Average CPU Usage"
          },
          {
            "name": "otlp_grpc_exporter_metric_mock",
            "value": "61.86",
            "unit": "MB",
            "extra": "Metric (TPS: 1000) - Average Memory Usage"
          },
          {
            "name": "prometheus_mock",
            "value": "1.25",
            "unit": "%",
            "extra": "Metric (TPS: 1000) - Average CPU Usage"
          },
          {
            "name": "prometheus_mock",
            "value": "114.01",
            "unit": "MB",
            "extra": "Metric (TPS: 1000) - Average Memory Usage"
          },
          {
            "name": "statsd_mock",
            "value": "0.02",
            "unit": "%",
            "extra": "Metric (TPS: 1000) - Average CPU Usage"
          },
          {
            "name": "statsd_mock",
            "value": "61.50",
            "unit": "MB",
            "extra": "Metric (TPS: 1000) - Average Memory Usage"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Jeffrey Chien",
            "username": "jefchien",
            "email": "chienjef@amazon.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "56cf8ba0f6d766d2ea1407c48231f8957972e18b",
          "message": "Refactor resource cleaners. (#927)\n\nSeparated the cleaners into packages based on type.",
          "timestamp": "2022-01-31T15:25:11Z",
          "url": "https://github.com/aws-observability/aws-otel-collector/commit/56cf8ba0f6d766d2ea1407c48231f8957972e18b"
        },
        "date": 1643906473221,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "jaeger_mock",
            "value": "17.02",
            "unit": "%",
            "extra": "Trace (TPS: 5000) - Average CPU Usage"
          },
          {
            "name": "jaeger_mock",
            "value": "170.97",
            "unit": "MB",
            "extra": "Trace (TPS: 5000) - Average Memory Usage"
          },
          {
            "name": "otlp_mock",
            "value": "152.30",
            "unit": "%",
            "extra": "Trace (TPS: 5000) - Average CPU Usage"
          },
          {
            "name": "otlp_mock",
            "value": "15587.01",
            "unit": "MB",
            "extra": "Trace (TPS: 5000) - Average Memory Usage"
          },
          {
            "name": "datadog_exporter_trace_mock",
            "value": "124.16",
            "unit": "%",
            "extra": "Trace (TPS: 5000) - Average CPU Usage"
          },
          {
            "name": "datadog_exporter_trace_mock",
            "value": "85.00",
            "unit": "MB",
            "extra": "Trace (TPS: 5000) - Average Memory Usage"
          },
          {
            "name": "otlp_http_exporter_trace_mock",
            "value": "106.59",
            "unit": "%",
            "extra": "Trace (TPS: 5000) - Average CPU Usage"
          },
          {
            "name": "otlp_http_exporter_trace_mock",
            "value": "81.83",
            "unit": "MB",
            "extra": "Trace (TPS: 5000) - Average Memory Usage"
          },
          {
            "name": "otlp_grpc_exporter_trace_mock",
            "value": "115.23",
            "unit": "%",
            "extra": "Trace (TPS: 5000) - Average CPU Usage"
          },
          {
            "name": "otlp_grpc_exporter_trace_mock",
            "value": "3537.62",
            "unit": "MB",
            "extra": "Trace (TPS: 5000) - Average Memory Usage"
          },
          {
            "name": "logzio_exporter_trace_mock",
            "value": "107.94",
            "unit": "%",
            "extra": "Trace (TPS: 5000) - Average CPU Usage"
          },
          {
            "name": "logzio_exporter_trace_mock",
            "value": "126.79",
            "unit": "MB",
            "extra": "Trace (TPS: 5000) - Average Memory Usage"
          },
          {
            "name": "xrayreceiver_mock",
            "value": "37.55",
            "unit": "%",
            "extra": "Trace (TPS: 5000) - Average CPU Usage"
          },
          {
            "name": "xrayreceiver_mock",
            "value": "758.51",
            "unit": "MB",
            "extra": "Trace (TPS: 5000) - Average Memory Usage"
          },
          {
            "name": "zipkin_mock",
            "value": "29.65",
            "unit": "%",
            "extra": "Trace (TPS: 5000) - Average CPU Usage"
          },
          {
            "name": "zipkin_mock",
            "value": "507.94",
            "unit": "MB",
            "extra": "Trace (TPS: 5000) - Average Memory Usage"
          },
          {
            "name": "sapm_exporter_trace_mock",
            "value": "120.24",
            "unit": "%",
            "extra": "Trace (TPS: 5000) - Average CPU Usage"
          },
          {
            "name": "sapm_exporter_trace_mock",
            "value": "95.36",
            "unit": "MB",
            "extra": "Trace (TPS: 5000) - Average Memory Usage"
          },
          {
            "name": "logzio_exporter_trace_mock",
            "value": "29.31",
            "unit": "%",
            "extra": "Trace (TPS: 1000) - Average CPU Usage"
          },
          {
            "name": "logzio_exporter_trace_mock",
            "value": "105.43",
            "unit": "MB",
            "extra": "Trace (TPS: 1000) - Average Memory Usage"
          },
          {
            "name": "datadog_exporter_trace_mock",
            "value": "33.26",
            "unit": "%",
            "extra": "Trace (TPS: 1000) - Average CPU Usage"
          },
          {
            "name": "datadog_exporter_trace_mock",
            "value": "78.73",
            "unit": "MB",
            "extra": "Trace (TPS: 1000) - Average Memory Usage"
          },
          {
            "name": "jaeger_mock",
            "value": "17.69",
            "unit": "%",
            "extra": "Trace (TPS: 1000) - Average CPU Usage"
          },
          {
            "name": "jaeger_mock",
            "value": "154.85",
            "unit": "MB",
            "extra": "Trace (TPS: 1000) - Average Memory Usage"
          },
          {
            "name": "sapm_exporter_trace_mock",
            "value": "25.72",
            "unit": "%",
            "extra": "Trace (TPS: 1000) - Average CPU Usage"
          },
          {
            "name": "sapm_exporter_trace_mock",
            "value": "89.43",
            "unit": "MB",
            "extra": "Trace (TPS: 1000) - Average Memory Usage"
          },
          {
            "name": "otlp_mock",
            "value": "33.33",
            "unit": "%",
            "extra": "Trace (TPS: 1000) - Average CPU Usage"
          },
          {
            "name": "otlp_mock",
            "value": "79.23",
            "unit": "MB",
            "extra": "Trace (TPS: 1000) - Average Memory Usage"
          },
          {
            "name": "otlp_http_exporter_trace_mock",
            "value": "26.24",
            "unit": "%",
            "extra": "Trace (TPS: 1000) - Average CPU Usage"
          },
          {
            "name": "otlp_http_exporter_trace_mock",
            "value": "75.80",
            "unit": "MB",
            "extra": "Trace (TPS: 1000) - Average Memory Usage"
          },
          {
            "name": "xrayreceiver_mock",
            "value": "26.07",
            "unit": "%",
            "extra": "Trace (TPS: 1000) - Average CPU Usage"
          },
          {
            "name": "xrayreceiver_mock",
            "value": "496.48",
            "unit": "MB",
            "extra": "Trace (TPS: 1000) - Average Memory Usage"
          },
          {
            "name": "zipkin_mock",
            "value": "29.97",
            "unit": "%",
            "extra": "Trace (TPS: 1000) - Average CPU Usage"
          },
          {
            "name": "zipkin_mock",
            "value": "476.30",
            "unit": "MB",
            "extra": "Trace (TPS: 1000) - Average Memory Usage"
          },
          {
            "name": "otlp_grpc_exporter_trace_mock",
            "value": "27.22",
            "unit": "%",
            "extra": "Trace (TPS: 1000) - Average CPU Usage"
          },
          {
            "name": "otlp_grpc_exporter_trace_mock",
            "value": "749.27",
            "unit": "MB",
            "extra": "Trace (TPS: 1000) - Average Memory Usage"
          },
          {
            "name": "jaeger_mock",
            "value": "2.29",
            "unit": "%",
            "extra": "Trace (TPS: 100) - Average CPU Usage"
          },
          {
            "name": "jaeger_mock",
            "value": "80.49",
            "unit": "MB",
            "extra": "Trace (TPS: 100) - Average Memory Usage"
          },
          {
            "name": "xrayreceiver_mock",
            "value": "4.98",
            "unit": "%",
            "extra": "Trace (TPS: 100) - Average CPU Usage"
          },
          {
            "name": "xrayreceiver_mock",
            "value": "147.53",
            "unit": "MB",
            "extra": "Trace (TPS: 100) - Average Memory Usage"
          },
          {
            "name": "sapm_exporter_trace_mock",
            "value": "3.53",
            "unit": "%",
            "extra": "Trace (TPS: 100) - Average CPU Usage"
          },
          {
            "name": "sapm_exporter_trace_mock",
            "value": "88.68",
            "unit": "MB",
            "extra": "Trace (TPS: 100) - Average Memory Usage"
          },
          {
            "name": "zipkin_mock",
            "value": "5.88",
            "unit": "%",
            "extra": "Trace (TPS: 100) - Average CPU Usage"
          },
          {
            "name": "zipkin_mock",
            "value": "81.80",
            "unit": "MB",
            "extra": "Trace (TPS: 100) - Average Memory Usage"
          },
          {
            "name": "logzio_exporter_trace_mock",
            "value": "3.26",
            "unit": "%",
            "extra": "Trace (TPS: 100) - Average CPU Usage"
          },
          {
            "name": "logzio_exporter_trace_mock",
            "value": "95.76",
            "unit": "MB",
            "extra": "Trace (TPS: 100) - Average Memory Usage"
          },
          {
            "name": "otlp_grpc_exporter_trace_mock",
            "value": "3.12",
            "unit": "%",
            "extra": "Trace (TPS: 100) - Average CPU Usage"
          },
          {
            "name": "otlp_grpc_exporter_trace_mock",
            "value": "140.64",
            "unit": "MB",
            "extra": "Trace (TPS: 100) - Average Memory Usage"
          },
          {
            "name": "otlp_http_exporter_trace_mock",
            "value": "3.26",
            "unit": "%",
            "extra": "Trace (TPS: 100) - Average CPU Usage"
          },
          {
            "name": "otlp_http_exporter_trace_mock",
            "value": "74.32",
            "unit": "MB",
            "extra": "Trace (TPS: 100) - Average Memory Usage"
          },
          {
            "name": "otlp_mock",
            "value": "3.82",
            "unit": "%",
            "extra": "Trace (TPS: 100) - Average CPU Usage"
          },
          {
            "name": "otlp_mock",
            "value": "75.72",
            "unit": "MB",
            "extra": "Trace (TPS: 100) - Average Memory Usage"
          },
          {
            "name": "datadog_exporter_trace_mock",
            "value": "4.29",
            "unit": "%",
            "extra": "Trace (TPS: 100) - Average CPU Usage"
          },
          {
            "name": "datadog_exporter_trace_mock",
            "value": "77.56",
            "unit": "MB",
            "extra": "Trace (TPS: 100) - Average Memory Usage"
          },
          {
            "name": "dynatrace_exporter_metric_mock",
            "value": "0.04",
            "unit": "%",
            "extra": "Metric (TPS: 5000) - Average CPU Usage"
          },
          {
            "name": "dynatrace_exporter_metric_mock",
            "value": "60.97",
            "unit": "MB",
            "extra": "Metric (TPS: 5000) - Average Memory Usage"
          },
          {
            "name": "signalfx_exporter_metric_mock",
            "value": "0.04",
            "unit": "%",
            "extra": "Metric (TPS: 5000) - Average CPU Usage"
          },
          {
            "name": "signalfx_exporter_metric_mock",
            "value": "63.52",
            "unit": "MB",
            "extra": "Metric (TPS: 5000) - Average Memory Usage"
          },
          {
            "name": "datadog_exporter_metric_mock",
            "value": "0.05",
            "unit": "%",
            "extra": "Metric (TPS: 5000) - Average CPU Usage"
          },
          {
            "name": "datadog_exporter_metric_mock",
            "value": "63.31",
            "unit": "MB",
            "extra": "Metric (TPS: 5000) - Average Memory Usage"
          },
          {
            "name": "otlp_http_exporter_metric_mock",
            "value": "0.04",
            "unit": "%",
            "extra": "Metric (TPS: 5000) - Average CPU Usage"
          },
          {
            "name": "otlp_http_exporter_metric_mock",
            "value": "62.45",
            "unit": "MB",
            "extra": "Metric (TPS: 5000) - Average Memory Usage"
          },
          {
            "name": "statsd_mock",
            "value": "0.01",
            "unit": "%",
            "extra": "Metric (TPS: 5000) - Average CPU Usage"
          },
          {
            "name": "statsd_mock",
            "value": "62.62",
            "unit": "MB",
            "extra": "Metric (TPS: 5000) - Average Memory Usage"
          },
          {
            "name": "otlp_grpc_exporter_metric_mock",
            "value": "0.04",
            "unit": "%",
            "extra": "Metric (TPS: 5000) - Average CPU Usage"
          },
          {
            "name": "otlp_grpc_exporter_metric_mock",
            "value": "63.06",
            "unit": "MB",
            "extra": "Metric (TPS: 5000) - Average Memory Usage"
          },
          {
            "name": "prometheus_mock",
            "value": "8.10",
            "unit": "%",
            "extra": "Metric (TPS: 5000) - Average CPU Usage"
          },
          {
            "name": "prometheus_mock",
            "value": "267.73",
            "unit": "MB",
            "extra": "Metric (TPS: 5000) - Average Memory Usage"
          },
          {
            "name": "otlp_metric_mock",
            "value": "0.05",
            "unit": "%",
            "extra": "Metric (TPS: 5000) - Average CPU Usage"
          },
          {
            "name": "otlp_metric_mock",
            "value": "61.53",
            "unit": "MB",
            "extra": "Metric (TPS: 5000) - Average Memory Usage"
          },
          {
            "name": "signalfx_exporter_metric_mock",
            "value": "0.04",
            "unit": "%",
            "extra": "Metric (TPS: 100) - Average CPU Usage"
          },
          {
            "name": "signalfx_exporter_metric_mock",
            "value": "63.00",
            "unit": "MB",
            "extra": "Metric (TPS: 100) - Average Memory Usage"
          },
          {
            "name": "datadog_exporter_metric_mock",
            "value": "0.05",
            "unit": "%",
            "extra": "Metric (TPS: 100) - Average CPU Usage"
          },
          {
            "name": "datadog_exporter_metric_mock",
            "value": "65.44",
            "unit": "MB",
            "extra": "Metric (TPS: 100) - Average Memory Usage"
          },
          {
            "name": "prometheus_mock",
            "value": "0.13",
            "unit": "%",
            "extra": "Metric (TPS: 100) - Average CPU Usage"
          },
          {
            "name": "prometheus_mock",
            "value": "75.53",
            "unit": "MB",
            "extra": "Metric (TPS: 100) - Average Memory Usage"
          },
          {
            "name": "otlp_metric_mock",
            "value": "0.04",
            "unit": "%",
            "extra": "Metric (TPS: 100) - Average CPU Usage"
          },
          {
            "name": "otlp_metric_mock",
            "value": "62.44",
            "unit": "MB",
            "extra": "Metric (TPS: 100) - Average Memory Usage"
          },
          {
            "name": "statsd_mock",
            "value": "0.02",
            "unit": "%",
            "extra": "Metric (TPS: 100) - Average CPU Usage"
          },
          {
            "name": "statsd_mock",
            "value": "61.05",
            "unit": "MB",
            "extra": "Metric (TPS: 100) - Average Memory Usage"
          },
          {
            "name": "dynatrace_exporter_metric_mock",
            "value": "0.04",
            "unit": "%",
            "extra": "Metric (TPS: 100) - Average CPU Usage"
          },
          {
            "name": "dynatrace_exporter_metric_mock",
            "value": "62.94",
            "unit": "MB",
            "extra": "Metric (TPS: 100) - Average Memory Usage"
          },
          {
            "name": "otlp_grpc_exporter_metric_mock",
            "value": "0.04",
            "unit": "%",
            "extra": "Metric (TPS: 100) - Average CPU Usage"
          },
          {
            "name": "otlp_grpc_exporter_metric_mock",
            "value": "62.64",
            "unit": "MB",
            "extra": "Metric (TPS: 100) - Average Memory Usage"
          },
          {
            "name": "otlp_http_exporter_metric_mock",
            "value": "0.04",
            "unit": "%",
            "extra": "Metric (TPS: 100) - Average CPU Usage"
          },
          {
            "name": "otlp_http_exporter_metric_mock",
            "value": "62.66",
            "unit": "MB",
            "extra": "Metric (TPS: 100) - Average Memory Usage"
          },
          {
            "name": "dynatrace_exporter_metric_mock",
            "value": "0.04",
            "unit": "%",
            "extra": "Metric (TPS: 1000) - Average CPU Usage"
          },
          {
            "name": "dynatrace_exporter_metric_mock",
            "value": "63.10",
            "unit": "MB",
            "extra": "Metric (TPS: 1000) - Average Memory Usage"
          },
          {
            "name": "datadog_exporter_metric_mock",
            "value": "0.04",
            "unit": "%",
            "extra": "Metric (TPS: 1000) - Average CPU Usage"
          },
          {
            "name": "datadog_exporter_metric_mock",
            "value": "65.50",
            "unit": "MB",
            "extra": "Metric (TPS: 1000) - Average Memory Usage"
          },
          {
            "name": "otlp_http_exporter_metric_mock",
            "value": "0.04",
            "unit": "%",
            "extra": "Metric (TPS: 1000) - Average CPU Usage"
          },
          {
            "name": "otlp_http_exporter_metric_mock",
            "value": "62.67",
            "unit": "MB",
            "extra": "Metric (TPS: 1000) - Average Memory Usage"
          },
          {
            "name": "signalfx_exporter_metric_mock",
            "value": "0.05",
            "unit": "%",
            "extra": "Metric (TPS: 1000) - Average CPU Usage"
          },
          {
            "name": "signalfx_exporter_metric_mock",
            "value": "64.01",
            "unit": "MB",
            "extra": "Metric (TPS: 1000) - Average Memory Usage"
          },
          {
            "name": "otlp_metric_mock",
            "value": "0.04",
            "unit": "%",
            "extra": "Metric (TPS: 1000) - Average CPU Usage"
          },
          {
            "name": "otlp_metric_mock",
            "value": "62.46",
            "unit": "MB",
            "extra": "Metric (TPS: 1000) - Average Memory Usage"
          },
          {
            "name": "otlp_grpc_exporter_metric_mock",
            "value": "0.04",
            "unit": "%",
            "extra": "Metric (TPS: 1000) - Average CPU Usage"
          },
          {
            "name": "otlp_grpc_exporter_metric_mock",
            "value": "62.61",
            "unit": "MB",
            "extra": "Metric (TPS: 1000) - Average Memory Usage"
          },
          {
            "name": "prometheus_mock",
            "value": "1.40",
            "unit": "%",
            "extra": "Metric (TPS: 1000) - Average CPU Usage"
          },
          {
            "name": "prometheus_mock",
            "value": "113.52",
            "unit": "MB",
            "extra": "Metric (TPS: 1000) - Average Memory Usage"
          },
          {
            "name": "statsd_mock",
            "value": "0.01",
            "unit": "%",
            "extra": "Metric (TPS: 1000) - Average CPU Usage"
          },
          {
            "name": "statsd_mock",
            "value": "61.14",
            "unit": "MB",
            "extra": "Metric (TPS: 1000) - Average Memory Usage"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Khanh Nguyen",
            "username": "khanhntd",
            "email": "91758108+khanhntd@users.noreply.github.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "da7e524c4779eb0377cb81f695979425ae83f987",
          "message": "Delete some needs for release to GitHub and delete SSM strategy for cleaning (#937)\n\n* delete needs for release to github and delete ssm strategy for cleaning\r\n\r\n* change needs for clean ssm package\r\n\r\n* change to skip instead of error exit\r\n\r\n* change release condition\r\n\r\n* change to function for deleting\r\n\r\n* fix format\r\n\r\n* change env variables in cd\r\n\r\n* change to s3 latest url\r\n\r\n* Change format for s3 release",
          "timestamp": "2022-01-31T14:56:09Z",
          "url": "https://github.com/aws-observability/aws-otel-collector/commit/da7e524c4779eb0377cb81f695979425ae83f987"
        },
        "date": 1643925311699,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "jaeger_mock",
            "value": "18.47",
            "unit": "%",
            "extra": "Trace (TPS: 5000) - Average CPU Usage"
          },
          {
            "name": "jaeger_mock",
            "value": "169.83",
            "unit": "MB",
            "extra": "Trace (TPS: 5000) - Average Memory Usage"
          },
          {
            "name": "otlp_mock",
            "value": "149.28",
            "unit": "%",
            "extra": "Trace (TPS: 5000) - Average CPU Usage"
          },
          {
            "name": "otlp_mock",
            "value": "13856.74",
            "unit": "MB",
            "extra": "Trace (TPS: 5000) - Average Memory Usage"
          },
          {
            "name": "datadog_exporter_trace_mock",
            "value": "119.06",
            "unit": "%",
            "extra": "Trace (TPS: 5000) - Average CPU Usage"
          },
          {
            "name": "datadog_exporter_trace_mock",
            "value": "85.67",
            "unit": "MB",
            "extra": "Trace (TPS: 5000) - Average Memory Usage"
          },
          {
            "name": "otlp_http_exporter_trace_mock",
            "value": "101.36",
            "unit": "%",
            "extra": "Trace (TPS: 5000) - Average CPU Usage"
          },
          {
            "name": "otlp_http_exporter_trace_mock",
            "value": "80.84",
            "unit": "MB",
            "extra": "Trace (TPS: 5000) - Average Memory Usage"
          },
          {
            "name": "otlp_grpc_exporter_trace_mock",
            "value": "126.76",
            "unit": "%",
            "extra": "Trace (TPS: 5000) - Average CPU Usage"
          },
          {
            "name": "otlp_grpc_exporter_trace_mock",
            "value": "3406.77",
            "unit": "MB",
            "extra": "Trace (TPS: 5000) - Average Memory Usage"
          },
          {
            "name": "logzio_exporter_trace_mock",
            "value": "123.28",
            "unit": "%",
            "extra": "Trace (TPS: 5000) - Average CPU Usage"
          },
          {
            "name": "logzio_exporter_trace_mock",
            "value": "127.78",
            "unit": "MB",
            "extra": "Trace (TPS: 5000) - Average Memory Usage"
          },
          {
            "name": "xrayreceiver_mock",
            "value": "38.73",
            "unit": "%",
            "extra": "Trace (TPS: 5000) - Average CPU Usage"
          },
          {
            "name": "xrayreceiver_mock",
            "value": "708.78",
            "unit": "MB",
            "extra": "Trace (TPS: 5000) - Average Memory Usage"
          },
          {
            "name": "zipkin_mock",
            "value": "29.48",
            "unit": "%",
            "extra": "Trace (TPS: 5000) - Average CPU Usage"
          },
          {
            "name": "zipkin_mock",
            "value": "504.23",
            "unit": "MB",
            "extra": "Trace (TPS: 5000) - Average Memory Usage"
          },
          {
            "name": "sapm_exporter_trace_mock",
            "value": "106.85",
            "unit": "%",
            "extra": "Trace (TPS: 5000) - Average CPU Usage"
          },
          {
            "name": "sapm_exporter_trace_mock",
            "value": "95.48",
            "unit": "MB",
            "extra": "Trace (TPS: 5000) - Average Memory Usage"
          },
          {
            "name": "logzio_exporter_trace_mock",
            "value": "27.53",
            "unit": "%",
            "extra": "Trace (TPS: 1000) - Average CPU Usage"
          },
          {
            "name": "logzio_exporter_trace_mock",
            "value": "106.17",
            "unit": "MB",
            "extra": "Trace (TPS: 1000) - Average Memory Usage"
          },
          {
            "name": "datadog_exporter_trace_mock",
            "value": "30.99",
            "unit": "%",
            "extra": "Trace (TPS: 1000) - Average CPU Usage"
          },
          {
            "name": "datadog_exporter_trace_mock",
            "value": "78.41",
            "unit": "MB",
            "extra": "Trace (TPS: 1000) - Average Memory Usage"
          },
          {
            "name": "jaeger_mock",
            "value": "17.27",
            "unit": "%",
            "extra": "Trace (TPS: 1000) - Average CPU Usage"
          },
          {
            "name": "jaeger_mock",
            "value": "154.64",
            "unit": "MB",
            "extra": "Trace (TPS: 1000) - Average Memory Usage"
          },
          {
            "name": "sapm_exporter_trace_mock",
            "value": "27.63",
            "unit": "%",
            "extra": "Trace (TPS: 1000) - Average CPU Usage"
          },
          {
            "name": "sapm_exporter_trace_mock",
            "value": "89.73",
            "unit": "MB",
            "extra": "Trace (TPS: 1000) - Average Memory Usage"
          },
          {
            "name": "otlp_mock",
            "value": "33.35",
            "unit": "%",
            "extra": "Trace (TPS: 1000) - Average CPU Usage"
          },
          {
            "name": "otlp_mock",
            "value": "78.84",
            "unit": "MB",
            "extra": "Trace (TPS: 1000) - Average Memory Usage"
          },
          {
            "name": "otlp_http_exporter_trace_mock",
            "value": "26.06",
            "unit": "%",
            "extra": "Trace (TPS: 1000) - Average CPU Usage"
          },
          {
            "name": "otlp_http_exporter_trace_mock",
            "value": "75.28",
            "unit": "MB",
            "extra": "Trace (TPS: 1000) - Average Memory Usage"
          },
          {
            "name": "xrayreceiver_mock",
            "value": "26.00",
            "unit": "%",
            "extra": "Trace (TPS: 1000) - Average CPU Usage"
          },
          {
            "name": "xrayreceiver_mock",
            "value": "502.01",
            "unit": "MB",
            "extra": "Trace (TPS: 1000) - Average Memory Usage"
          },
          {
            "name": "zipkin_mock",
            "value": "29.48",
            "unit": "%",
            "extra": "Trace (TPS: 1000) - Average CPU Usage"
          },
          {
            "name": "zipkin_mock",
            "value": "504.81",
            "unit": "MB",
            "extra": "Trace (TPS: 1000) - Average Memory Usage"
          },
          {
            "name": "otlp_grpc_exporter_trace_mock",
            "value": "28.49",
            "unit": "%",
            "extra": "Trace (TPS: 1000) - Average CPU Usage"
          },
          {
            "name": "otlp_grpc_exporter_trace_mock",
            "value": "732.16",
            "unit": "MB",
            "extra": "Trace (TPS: 1000) - Average Memory Usage"
          },
          {
            "name": "jaeger_mock",
            "value": "2.34",
            "unit": "%",
            "extra": "Trace (TPS: 100) - Average CPU Usage"
          },
          {
            "name": "jaeger_mock",
            "value": "79.56",
            "unit": "MB",
            "extra": "Trace (TPS: 100) - Average Memory Usage"
          },
          {
            "name": "xrayreceiver_mock",
            "value": "5.12",
            "unit": "%",
            "extra": "Trace (TPS: 100) - Average CPU Usage"
          },
          {
            "name": "xrayreceiver_mock",
            "value": "147.06",
            "unit": "MB",
            "extra": "Trace (TPS: 100) - Average Memory Usage"
          },
          {
            "name": "sapm_exporter_trace_mock",
            "value": "3.41",
            "unit": "%",
            "extra": "Trace (TPS: 100) - Average CPU Usage"
          },
          {
            "name": "sapm_exporter_trace_mock",
            "value": "86.26",
            "unit": "MB",
            "extra": "Trace (TPS: 100) - Average Memory Usage"
          },
          {
            "name": "zipkin_mock",
            "value": "5.74",
            "unit": "%",
            "extra": "Trace (TPS: 100) - Average CPU Usage"
          },
          {
            "name": "zipkin_mock",
            "value": "82.25",
            "unit": "MB",
            "extra": "Trace (TPS: 100) - Average Memory Usage"
          },
          {
            "name": "logzio_exporter_trace_mock",
            "value": "3.36",
            "unit": "%",
            "extra": "Trace (TPS: 100) - Average CPU Usage"
          },
          {
            "name": "logzio_exporter_trace_mock",
            "value": "94.05",
            "unit": "MB",
            "extra": "Trace (TPS: 100) - Average Memory Usage"
          },
          {
            "name": "otlp_grpc_exporter_trace_mock",
            "value": "3.50",
            "unit": "%",
            "extra": "Trace (TPS: 100) - Average CPU Usage"
          },
          {
            "name": "otlp_grpc_exporter_trace_mock",
            "value": "132.80",
            "unit": "MB",
            "extra": "Trace (TPS: 100) - Average Memory Usage"
          },
          {
            "name": "otlp_http_exporter_trace_mock",
            "value": "3.99",
            "unit": "%",
            "extra": "Trace (TPS: 100) - Average CPU Usage"
          },
          {
            "name": "otlp_http_exporter_trace_mock",
            "value": "75.12",
            "unit": "MB",
            "extra": "Trace (TPS: 100) - Average Memory Usage"
          },
          {
            "name": "otlp_mock",
            "value": "4.12",
            "unit": "%",
            "extra": "Trace (TPS: 100) - Average CPU Usage"
          },
          {
            "name": "otlp_mock",
            "value": "75.00",
            "unit": "MB",
            "extra": "Trace (TPS: 100) - Average Memory Usage"
          },
          {
            "name": "datadog_exporter_trace_mock",
            "value": "4.47",
            "unit": "%",
            "extra": "Trace (TPS: 100) - Average CPU Usage"
          },
          {
            "name": "datadog_exporter_trace_mock",
            "value": "77.61",
            "unit": "MB",
            "extra": "Trace (TPS: 100) - Average Memory Usage"
          },
          {
            "name": "dynatrace_exporter_metric_mock",
            "value": "0.04",
            "unit": "%",
            "extra": "Metric (TPS: 5000) - Average CPU Usage"
          },
          {
            "name": "dynatrace_exporter_metric_mock",
            "value": "62.09",
            "unit": "MB",
            "extra": "Metric (TPS: 5000) - Average Memory Usage"
          },
          {
            "name": "signalfx_exporter_metric_mock",
            "value": "0.05",
            "unit": "%",
            "extra": "Metric (TPS: 5000) - Average CPU Usage"
          },
          {
            "name": "signalfx_exporter_metric_mock",
            "value": "63.08",
            "unit": "MB",
            "extra": "Metric (TPS: 5000) - Average Memory Usage"
          },
          {
            "name": "datadog_exporter_metric_mock",
            "value": "0.05",
            "unit": "%",
            "extra": "Metric (TPS: 5000) - Average CPU Usage"
          },
          {
            "name": "datadog_exporter_metric_mock",
            "value": "64.69",
            "unit": "MB",
            "extra": "Metric (TPS: 5000) - Average Memory Usage"
          },
          {
            "name": "otlp_http_exporter_metric_mock",
            "value": "0.05",
            "unit": "%",
            "extra": "Metric (TPS: 5000) - Average CPU Usage"
          },
          {
            "name": "otlp_http_exporter_metric_mock",
            "value": "63.02",
            "unit": "MB",
            "extra": "Metric (TPS: 5000) - Average Memory Usage"
          },
          {
            "name": "statsd_mock",
            "value": "0.02",
            "unit": "%",
            "extra": "Metric (TPS: 5000) - Average CPU Usage"
          },
          {
            "name": "statsd_mock",
            "value": "61.91",
            "unit": "MB",
            "extra": "Metric (TPS: 5000) - Average Memory Usage"
          },
          {
            "name": "otlp_grpc_exporter_metric_mock",
            "value": "0.04",
            "unit": "%",
            "extra": "Metric (TPS: 5000) - Average CPU Usage"
          },
          {
            "name": "otlp_grpc_exporter_metric_mock",
            "value": "62.14",
            "unit": "MB",
            "extra": "Metric (TPS: 5000) - Average Memory Usage"
          },
          {
            "name": "prometheus_mock",
            "value": "6.77",
            "unit": "%",
            "extra": "Metric (TPS: 5000) - Average CPU Usage"
          },
          {
            "name": "prometheus_mock",
            "value": "264.06",
            "unit": "MB",
            "extra": "Metric (TPS: 5000) - Average Memory Usage"
          },
          {
            "name": "otlp_metric_mock",
            "value": "0.04",
            "unit": "%",
            "extra": "Metric (TPS: 5000) - Average CPU Usage"
          },
          {
            "name": "otlp_metric_mock",
            "value": "62.22",
            "unit": "MB",
            "extra": "Metric (TPS: 5000) - Average Memory Usage"
          },
          {
            "name": "signalfx_exporter_metric_mock",
            "value": "0.05",
            "unit": "%",
            "extra": "Metric (TPS: 100) - Average CPU Usage"
          },
          {
            "name": "signalfx_exporter_metric_mock",
            "value": "64.19",
            "unit": "MB",
            "extra": "Metric (TPS: 100) - Average Memory Usage"
          },
          {
            "name": "datadog_exporter_metric_mock",
            "value": "0.05",
            "unit": "%",
            "extra": "Metric (TPS: 100) - Average CPU Usage"
          },
          {
            "name": "datadog_exporter_metric_mock",
            "value": "66.10",
            "unit": "MB",
            "extra": "Metric (TPS: 100) - Average Memory Usage"
          },
          {
            "name": "prometheus_mock",
            "value": "0.13",
            "unit": "%",
            "extra": "Metric (TPS: 100) - Average CPU Usage"
          },
          {
            "name": "prometheus_mock",
            "value": "76.11",
            "unit": "MB",
            "extra": "Metric (TPS: 100) - Average Memory Usage"
          },
          {
            "name": "otlp_metric_mock",
            "value": "0.04",
            "unit": "%",
            "extra": "Metric (TPS: 100) - Average CPU Usage"
          },
          {
            "name": "otlp_metric_mock",
            "value": "62.03",
            "unit": "MB",
            "extra": "Metric (TPS: 100) - Average Memory Usage"
          },
          {
            "name": "statsd_mock",
            "value": "0.01",
            "unit": "%",
            "extra": "Metric (TPS: 100) - Average CPU Usage"
          },
          {
            "name": "statsd_mock",
            "value": "61.97",
            "unit": "MB",
            "extra": "Metric (TPS: 100) - Average Memory Usage"
          },
          {
            "name": "dynatrace_exporter_metric_mock",
            "value": "0.04",
            "unit": "%",
            "extra": "Metric (TPS: 100) - Average CPU Usage"
          },
          {
            "name": "dynatrace_exporter_metric_mock",
            "value": "62.48",
            "unit": "MB",
            "extra": "Metric (TPS: 100) - Average Memory Usage"
          },
          {
            "name": "otlp_grpc_exporter_metric_mock",
            "value": "0.05",
            "unit": "%",
            "extra": "Metric (TPS: 100) - Average CPU Usage"
          },
          {
            "name": "otlp_grpc_exporter_metric_mock",
            "value": "63.23",
            "unit": "MB",
            "extra": "Metric (TPS: 100) - Average Memory Usage"
          },
          {
            "name": "otlp_http_exporter_metric_mock",
            "value": "0.04",
            "unit": "%",
            "extra": "Metric (TPS: 100) - Average CPU Usage"
          },
          {
            "name": "otlp_http_exporter_metric_mock",
            "value": "61.69",
            "unit": "MB",
            "extra": "Metric (TPS: 100) - Average Memory Usage"
          },
          {
            "name": "dynatrace_exporter_metric_mock",
            "value": "0.04",
            "unit": "%",
            "extra": "Metric (TPS: 1000) - Average CPU Usage"
          },
          {
            "name": "dynatrace_exporter_metric_mock",
            "value": "62.83",
            "unit": "MB",
            "extra": "Metric (TPS: 1000) - Average Memory Usage"
          },
          {
            "name": "datadog_exporter_metric_mock",
            "value": "0.05",
            "unit": "%",
            "extra": "Metric (TPS: 1000) - Average CPU Usage"
          },
          {
            "name": "datadog_exporter_metric_mock",
            "value": "62.74",
            "unit": "MB",
            "extra": "Metric (TPS: 1000) - Average Memory Usage"
          },
          {
            "name": "otlp_http_exporter_metric_mock",
            "value": "0.04",
            "unit": "%",
            "extra": "Metric (TPS: 1000) - Average CPU Usage"
          },
          {
            "name": "otlp_http_exporter_metric_mock",
            "value": "62.88",
            "unit": "MB",
            "extra": "Metric (TPS: 1000) - Average Memory Usage"
          },
          {
            "name": "signalfx_exporter_metric_mock",
            "value": "0.05",
            "unit": "%",
            "extra": "Metric (TPS: 1000) - Average CPU Usage"
          },
          {
            "name": "signalfx_exporter_metric_mock",
            "value": "63.19",
            "unit": "MB",
            "extra": "Metric (TPS: 1000) - Average Memory Usage"
          },
          {
            "name": "otlp_metric_mock",
            "value": "0.05",
            "unit": "%",
            "extra": "Metric (TPS: 1000) - Average CPU Usage"
          },
          {
            "name": "otlp_metric_mock",
            "value": "62.00",
            "unit": "MB",
            "extra": "Metric (TPS: 1000) - Average Memory Usage"
          },
          {
            "name": "otlp_grpc_exporter_metric_mock",
            "value": "0.05",
            "unit": "%",
            "extra": "Metric (TPS: 1000) - Average CPU Usage"
          },
          {
            "name": "otlp_grpc_exporter_metric_mock",
            "value": "62.97",
            "unit": "MB",
            "extra": "Metric (TPS: 1000) - Average Memory Usage"
          },
          {
            "name": "prometheus_mock",
            "value": "1.24",
            "unit": "%",
            "extra": "Metric (TPS: 1000) - Average CPU Usage"
          },
          {
            "name": "prometheus_mock",
            "value": "114.33",
            "unit": "MB",
            "extra": "Metric (TPS: 1000) - Average Memory Usage"
          },
          {
            "name": "statsd_mock",
            "value": "0.02",
            "unit": "%",
            "extra": "Metric (TPS: 1000) - Average CPU Usage"
          },
          {
            "name": "statsd_mock",
            "value": "61.92",
            "unit": "MB",
            "extra": "Metric (TPS: 1000) - Average Memory Usage"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Seth L",
            "username": "sethAmazon",
            "email": "81644108+sethAmazon@users.noreply.github.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "c24acacb322cde52d015881dec5086831d9ed5ab",
          "message": "Add clean EFS (#921)",
          "timestamp": "2022-01-27T16:13:29Z",
          "url": "https://github.com/aws-observability/aws-otel-collector/commit/c24acacb322cde52d015881dec5086831d9ed5ab"
        },
        "date": 1643991320857,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "jaeger_mock",
            "value": "17.12",
            "unit": "%",
            "extra": "Trace (TPS: 5000) - Average CPU Usage"
          },
          {
            "name": "jaeger_mock",
            "value": "167.10",
            "unit": "MB",
            "extra": "Trace (TPS: 5000) - Average Memory Usage"
          },
          {
            "name": "otlp_mock",
            "value": "144.85",
            "unit": "%",
            "extra": "Trace (TPS: 5000) - Average CPU Usage"
          },
          {
            "name": "otlp_mock",
            "value": "16136.62",
            "unit": "MB",
            "extra": "Trace (TPS: 5000) - Average Memory Usage"
          },
          {
            "name": "datadog_exporter_trace_mock",
            "value": "126.59",
            "unit": "%",
            "extra": "Trace (TPS: 5000) - Average CPU Usage"
          },
          {
            "name": "datadog_exporter_trace_mock",
            "value": "81.83",
            "unit": "MB",
            "extra": "Trace (TPS: 5000) - Average Memory Usage"
          },
          {
            "name": "otlp_http_exporter_trace_mock",
            "value": "118.30",
            "unit": "%",
            "extra": "Trace (TPS: 5000) - Average CPU Usage"
          },
          {
            "name": "otlp_http_exporter_trace_mock",
            "value": "76.88",
            "unit": "MB",
            "extra": "Trace (TPS: 5000) - Average Memory Usage"
          },
          {
            "name": "otlp_grpc_exporter_trace_mock",
            "value": "121.32",
            "unit": "%",
            "extra": "Trace (TPS: 5000) - Average CPU Usage"
          },
          {
            "name": "otlp_grpc_exporter_trace_mock",
            "value": "3153.14",
            "unit": "MB",
            "extra": "Trace (TPS: 5000) - Average Memory Usage"
          },
          {
            "name": "logzio_exporter_trace_mock",
            "value": "114.44",
            "unit": "%",
            "extra": "Trace (TPS: 5000) - Average CPU Usage"
          },
          {
            "name": "logzio_exporter_trace_mock",
            "value": "124.58",
            "unit": "MB",
            "extra": "Trace (TPS: 5000) - Average Memory Usage"
          },
          {
            "name": "xrayreceiver_mock",
            "value": "36.80",
            "unit": "%",
            "extra": "Trace (TPS: 5000) - Average CPU Usage"
          },
          {
            "name": "xrayreceiver_mock",
            "value": "703.24",
            "unit": "MB",
            "extra": "Trace (TPS: 5000) - Average Memory Usage"
          },
          {
            "name": "zipkin_mock",
            "value": "30.38",
            "unit": "%",
            "extra": "Trace (TPS: 5000) - Average CPU Usage"
          },
          {
            "name": "zipkin_mock",
            "value": "507.57",
            "unit": "MB",
            "extra": "Trace (TPS: 5000) - Average Memory Usage"
          },
          {
            "name": "sapm_exporter_trace_mock",
            "value": "107.65",
            "unit": "%",
            "extra": "Trace (TPS: 5000) - Average CPU Usage"
          },
          {
            "name": "sapm_exporter_trace_mock",
            "value": "91.01",
            "unit": "MB",
            "extra": "Trace (TPS: 5000) - Average Memory Usage"
          },
          {
            "name": "logzio_exporter_trace_mock",
            "value": "26.69",
            "unit": "%",
            "extra": "Trace (TPS: 1000) - Average CPU Usage"
          },
          {
            "name": "logzio_exporter_trace_mock",
            "value": "102.51",
            "unit": "MB",
            "extra": "Trace (TPS: 1000) - Average Memory Usage"
          },
          {
            "name": "datadog_exporter_trace_mock",
            "value": "31.88",
            "unit": "%",
            "extra": "Trace (TPS: 1000) - Average CPU Usage"
          },
          {
            "name": "datadog_exporter_trace_mock",
            "value": "75.37",
            "unit": "MB",
            "extra": "Trace (TPS: 1000) - Average Memory Usage"
          },
          {
            "name": "jaeger_mock",
            "value": "16.78",
            "unit": "%",
            "extra": "Trace (TPS: 1000) - Average CPU Usage"
          },
          {
            "name": "jaeger_mock",
            "value": "150.03",
            "unit": "MB",
            "extra": "Trace (TPS: 1000) - Average Memory Usage"
          },
          {
            "name": "sapm_exporter_trace_mock",
            "value": "27.93",
            "unit": "%",
            "extra": "Trace (TPS: 1000) - Average CPU Usage"
          },
          {
            "name": "sapm_exporter_trace_mock",
            "value": "87.40",
            "unit": "MB",
            "extra": "Trace (TPS: 1000) - Average Memory Usage"
          },
          {
            "name": "otlp_mock",
            "value": "33.69",
            "unit": "%",
            "extra": "Trace (TPS: 1000) - Average CPU Usage"
          },
          {
            "name": "otlp_mock",
            "value": "76.88",
            "unit": "MB",
            "extra": "Trace (TPS: 1000) - Average Memory Usage"
          },
          {
            "name": "otlp_http_exporter_trace_mock",
            "value": "26.24",
            "unit": "%",
            "extra": "Trace (TPS: 1000) - Average CPU Usage"
          },
          {
            "name": "otlp_http_exporter_trace_mock",
            "value": "71.88",
            "unit": "MB",
            "extra": "Trace (TPS: 1000) - Average Memory Usage"
          },
          {
            "name": "xrayreceiver_mock",
            "value": "25.57",
            "unit": "%",
            "extra": "Trace (TPS: 1000) - Average CPU Usage"
          },
          {
            "name": "xrayreceiver_mock",
            "value": "494.13",
            "unit": "MB",
            "extra": "Trace (TPS: 1000) - Average Memory Usage"
          },
          {
            "name": "zipkin_mock",
            "value": "29.97",
            "unit": "%",
            "extra": "Trace (TPS: 1000) - Average CPU Usage"
          },
          {
            "name": "zipkin_mock",
            "value": "465.68",
            "unit": "MB",
            "extra": "Trace (TPS: 1000) - Average Memory Usage"
          },
          {
            "name": "otlp_grpc_exporter_trace_mock",
            "value": "28.41",
            "unit": "%",
            "extra": "Trace (TPS: 1000) - Average CPU Usage"
          },
          {
            "name": "otlp_grpc_exporter_trace_mock",
            "value": "665.55",
            "unit": "MB",
            "extra": "Trace (TPS: 1000) - Average Memory Usage"
          },
          {
            "name": "jaeger_mock",
            "value": "2.46",
            "unit": "%",
            "extra": "Trace (TPS: 100) - Average CPU Usage"
          },
          {
            "name": "jaeger_mock",
            "value": "75.09",
            "unit": "MB",
            "extra": "Trace (TPS: 100) - Average Memory Usage"
          },
          {
            "name": "xrayreceiver_mock",
            "value": "4.58",
            "unit": "%",
            "extra": "Trace (TPS: 100) - Average CPU Usage"
          },
          {
            "name": "xrayreceiver_mock",
            "value": "154.90",
            "unit": "MB",
            "extra": "Trace (TPS: 100) - Average Memory Usage"
          },
          {
            "name": "sapm_exporter_trace_mock",
            "value": "3.28",
            "unit": "%",
            "extra": "Trace (TPS: 100) - Average CPU Usage"
          },
          {
            "name": "sapm_exporter_trace_mock",
            "value": "85.12",
            "unit": "MB",
            "extra": "Trace (TPS: 100) - Average Memory Usage"
          },
          {
            "name": "zipkin_mock",
            "value": "5.54",
            "unit": "%",
            "extra": "Trace (TPS: 100) - Average CPU Usage"
          },
          {
            "name": "zipkin_mock",
            "value": "79.38",
            "unit": "MB",
            "extra": "Trace (TPS: 100) - Average Memory Usage"
          },
          {
            "name": "logzio_exporter_trace_mock",
            "value": "3.42",
            "unit": "%",
            "extra": "Trace (TPS: 100) - Average CPU Usage"
          },
          {
            "name": "logzio_exporter_trace_mock",
            "value": "90.38",
            "unit": "MB",
            "extra": "Trace (TPS: 100) - Average Memory Usage"
          },
          {
            "name": "otlp_grpc_exporter_trace_mock",
            "value": "3.57",
            "unit": "%",
            "extra": "Trace (TPS: 100) - Average CPU Usage"
          },
          {
            "name": "otlp_grpc_exporter_trace_mock",
            "value": "132.35",
            "unit": "MB",
            "extra": "Trace (TPS: 100) - Average Memory Usage"
          },
          {
            "name": "otlp_http_exporter_trace_mock",
            "value": "2.99",
            "unit": "%",
            "extra": "Trace (TPS: 100) - Average CPU Usage"
          },
          {
            "name": "otlp_http_exporter_trace_mock",
            "value": "70.36",
            "unit": "MB",
            "extra": "Trace (TPS: 100) - Average Memory Usage"
          },
          {
            "name": "otlp_mock",
            "value": "4.03",
            "unit": "%",
            "extra": "Trace (TPS: 100) - Average CPU Usage"
          },
          {
            "name": "otlp_mock",
            "value": "71.59",
            "unit": "MB",
            "extra": "Trace (TPS: 100) - Average Memory Usage"
          },
          {
            "name": "datadog_exporter_trace_mock",
            "value": "5.10",
            "unit": "%",
            "extra": "Trace (TPS: 100) - Average CPU Usage"
          },
          {
            "name": "datadog_exporter_trace_mock",
            "value": "72.71",
            "unit": "MB",
            "extra": "Trace (TPS: 100) - Average Memory Usage"
          },
          {
            "name": "dynatrace_exporter_metric_mock",
            "value": "0.04",
            "unit": "%",
            "extra": "Metric (TPS: 5000) - Average CPU Usage"
          },
          {
            "name": "dynatrace_exporter_metric_mock",
            "value": "59.13",
            "unit": "MB",
            "extra": "Metric (TPS: 5000) - Average Memory Usage"
          },
          {
            "name": "signalfx_exporter_metric_mock",
            "value": "0.04",
            "unit": "%",
            "extra": "Metric (TPS: 5000) - Average CPU Usage"
          },
          {
            "name": "signalfx_exporter_metric_mock",
            "value": "61.59",
            "unit": "MB",
            "extra": "Metric (TPS: 5000) - Average Memory Usage"
          },
          {
            "name": "datadog_exporter_metric_mock",
            "value": "0.05",
            "unit": "%",
            "extra": "Metric (TPS: 5000) - Average CPU Usage"
          },
          {
            "name": "datadog_exporter_metric_mock",
            "value": "62.17",
            "unit": "MB",
            "extra": "Metric (TPS: 5000) - Average Memory Usage"
          },
          {
            "name": "otlp_http_exporter_metric_mock",
            "value": "0.04",
            "unit": "%",
            "extra": "Metric (TPS: 5000) - Average CPU Usage"
          },
          {
            "name": "otlp_http_exporter_metric_mock",
            "value": "58.78",
            "unit": "MB",
            "extra": "Metric (TPS: 5000) - Average Memory Usage"
          },
          {
            "name": "statsd_mock",
            "value": "0.02",
            "unit": "%",
            "extra": "Metric (TPS: 5000) - Average CPU Usage"
          },
          {
            "name": "statsd_mock",
            "value": "59.22",
            "unit": "MB",
            "extra": "Metric (TPS: 5000) - Average Memory Usage"
          },
          {
            "name": "otlp_grpc_exporter_metric_mock",
            "value": "0.04",
            "unit": "%",
            "extra": "Metric (TPS: 5000) - Average CPU Usage"
          },
          {
            "name": "otlp_grpc_exporter_metric_mock",
            "value": "60.03",
            "unit": "MB",
            "extra": "Metric (TPS: 5000) - Average Memory Usage"
          },
          {
            "name": "prometheus_mock",
            "value": "7.76",
            "unit": "%",
            "extra": "Metric (TPS: 5000) - Average CPU Usage"
          },
          {
            "name": "prometheus_mock",
            "value": "255.06",
            "unit": "MB",
            "extra": "Metric (TPS: 5000) - Average Memory Usage"
          },
          {
            "name": "otlp_metric_mock",
            "value": "0.04",
            "unit": "%",
            "extra": "Metric (TPS: 5000) - Average CPU Usage"
          },
          {
            "name": "otlp_metric_mock",
            "value": "58.30",
            "unit": "MB",
            "extra": "Metric (TPS: 5000) - Average Memory Usage"
          },
          {
            "name": "signalfx_exporter_metric_mock",
            "value": "0.04",
            "unit": "%",
            "extra": "Metric (TPS: 100) - Average CPU Usage"
          },
          {
            "name": "signalfx_exporter_metric_mock",
            "value": "59.85",
            "unit": "MB",
            "extra": "Metric (TPS: 100) - Average Memory Usage"
          },
          {
            "name": "datadog_exporter_metric_mock",
            "value": "0.04",
            "unit": "%",
            "extra": "Metric (TPS: 100) - Average CPU Usage"
          },
          {
            "name": "datadog_exporter_metric_mock",
            "value": "61.84",
            "unit": "MB",
            "extra": "Metric (TPS: 100) - Average Memory Usage"
          },
          {
            "name": "prometheus_mock",
            "value": "0.14",
            "unit": "%",
            "extra": "Metric (TPS: 100) - Average CPU Usage"
          },
          {
            "name": "prometheus_mock",
            "value": "72.99",
            "unit": "MB",
            "extra": "Metric (TPS: 100) - Average Memory Usage"
          },
          {
            "name": "otlp_metric_mock",
            "value": "0.04",
            "unit": "%",
            "extra": "Metric (TPS: 100) - Average CPU Usage"
          },
          {
            "name": "otlp_metric_mock",
            "value": "59.97",
            "unit": "MB",
            "extra": "Metric (TPS: 100) - Average Memory Usage"
          },
          {
            "name": "statsd_mock",
            "value": "0.02",
            "unit": "%",
            "extra": "Metric (TPS: 100) - Average CPU Usage"
          },
          {
            "name": "statsd_mock",
            "value": "60.42",
            "unit": "MB",
            "extra": "Metric (TPS: 100) - Average Memory Usage"
          },
          {
            "name": "dynatrace_exporter_metric_mock",
            "value": "0.04",
            "unit": "%",
            "extra": "Metric (TPS: 100) - Average CPU Usage"
          },
          {
            "name": "dynatrace_exporter_metric_mock",
            "value": "58.60",
            "unit": "MB",
            "extra": "Metric (TPS: 100) - Average Memory Usage"
          },
          {
            "name": "otlp_grpc_exporter_metric_mock",
            "value": "0.04",
            "unit": "%",
            "extra": "Metric (TPS: 100) - Average CPU Usage"
          },
          {
            "name": "otlp_grpc_exporter_metric_mock",
            "value": "57.87",
            "unit": "MB",
            "extra": "Metric (TPS: 100) - Average Memory Usage"
          },
          {
            "name": "otlp_http_exporter_metric_mock",
            "value": "0.04",
            "unit": "%",
            "extra": "Metric (TPS: 100) - Average CPU Usage"
          },
          {
            "name": "otlp_http_exporter_metric_mock",
            "value": "58.51",
            "unit": "MB",
            "extra": "Metric (TPS: 100) - Average Memory Usage"
          },
          {
            "name": "dynatrace_exporter_metric_mock",
            "value": "0.04",
            "unit": "%",
            "extra": "Metric (TPS: 1000) - Average CPU Usage"
          },
          {
            "name": "dynatrace_exporter_metric_mock",
            "value": "59.59",
            "unit": "MB",
            "extra": "Metric (TPS: 1000) - Average Memory Usage"
          },
          {
            "name": "datadog_exporter_metric_mock",
            "value": "0.04",
            "unit": "%",
            "extra": "Metric (TPS: 1000) - Average CPU Usage"
          },
          {
            "name": "datadog_exporter_metric_mock",
            "value": "62.00",
            "unit": "MB",
            "extra": "Metric (TPS: 1000) - Average Memory Usage"
          },
          {
            "name": "otlp_http_exporter_metric_mock",
            "value": "0.05",
            "unit": "%",
            "extra": "Metric (TPS: 1000) - Average CPU Usage"
          },
          {
            "name": "otlp_http_exporter_metric_mock",
            "value": "59.26",
            "unit": "MB",
            "extra": "Metric (TPS: 1000) - Average Memory Usage"
          },
          {
            "name": "signalfx_exporter_metric_mock",
            "value": "0.04",
            "unit": "%",
            "extra": "Metric (TPS: 1000) - Average CPU Usage"
          },
          {
            "name": "signalfx_exporter_metric_mock",
            "value": "60.73",
            "unit": "MB",
            "extra": "Metric (TPS: 1000) - Average Memory Usage"
          },
          {
            "name": "otlp_metric_mock",
            "value": "0.05",
            "unit": "%",
            "extra": "Metric (TPS: 1000) - Average CPU Usage"
          },
          {
            "name": "otlp_metric_mock",
            "value": "60.30",
            "unit": "MB",
            "extra": "Metric (TPS: 1000) - Average Memory Usage"
          },
          {
            "name": "otlp_grpc_exporter_metric_mock",
            "value": "0.04",
            "unit": "%",
            "extra": "Metric (TPS: 1000) - Average CPU Usage"
          },
          {
            "name": "otlp_grpc_exporter_metric_mock",
            "value": "60.17",
            "unit": "MB",
            "extra": "Metric (TPS: 1000) - Average Memory Usage"
          },
          {
            "name": "prometheus_mock",
            "value": "1.47",
            "unit": "%",
            "extra": "Metric (TPS: 1000) - Average CPU Usage"
          },
          {
            "name": "prometheus_mock",
            "value": "108.47",
            "unit": "MB",
            "extra": "Metric (TPS: 1000) - Average Memory Usage"
          },
          {
            "name": "statsd_mock",
            "value": "0.01",
            "unit": "%",
            "extra": "Metric (TPS: 1000) - Average CPU Usage"
          },
          {
            "name": "statsd_mock",
            "value": "59.57",
            "unit": "MB",
            "extra": "Metric (TPS: 1000) - Average Memory Usage"
          }
        ]
      }
    ]
  }
}