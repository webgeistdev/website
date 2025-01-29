---
layout: post
title: "There is a CLI app for speedtest"
category: linux
---

Found out by chance, while trying to figure out why my WiFi signal is so unreliable, that there is a CLI app for running speed tests (by https://speedtest.net).

Here it is: https://www.speedtest.net/apps/cli

Since I am using Linux mint, and their bash script adding apt-get repositories is not working for me, here are the packages to download: https://packagecloud.io/ookla/speedtest-cli. Which can then be installed via `dpkg -i`.

```bash
$ speedtest

   Speedtest by Ookla

      Server: XXX - XXX (id: XXX)
         ISP: XXX
Idle Latency:     5.01 ms   (jitter: 0.37ms, low: 4.88ms, high: 5.58ms)
    Download:    33.91 Mbps (data used: 52.7 MB)                                                   
                138.85 ms   (jitter: 53.80ms, low: 7.52ms, high: 787.10ms)
      Upload:    15.14 Mbps (data used: 24.2 MB)                                                   
                118.68 ms   (jitter: 41.07ms, low: 17.78ms, high: 335.60ms)
 Packet Loss:     0.0%
  Result URL: https://www.speedtest.net/result/c/XXXX
```
