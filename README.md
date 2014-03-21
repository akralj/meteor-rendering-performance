meteor-rendering-performance
============================

Example app for comparing [v0.6.6.2](http://renderingPerformanceTest.meteor.com/) vs [template-engine-preview-0](http://renderingperformancetestnewmeteorui.meteor.com/) vs [ractive.js](http://renderingPerformanceTest.meteor.com/ractive/index.html)


I tried to keep it simple and packed 10000 records into a data var and use a simple sort function, instead of using minimongo. Here is the main part of the code (full code on github):

To have a baseline for seeing what is realistic in browser performance I put an [reactive.js app](http://renderingPerformanceTest.meteor.com/ractive/index.html) under public. Ractive tries to solve many of the same problems you are working on at the moment & has a nice syntax for two-way-bindings, animations... and it does the same kind of surgical dom manipulation, so I think it is a good baseline.

Here are some very unscientific benchmarks, measuring three rounds on each device:

data size by record number is: 1000(~52kb), 3000(~150kb), 10000(~520kb)

Desktop machine is the latest macmini with 16gb ram & 2.6GHz quad core

                             ipad3(ios6)    iphone4(ios5)    chrome30(osx)    safari6(osx)
     1000 records (v0.66):       ~2s        ~7s               <100ms             ~300ms
     1000 records (preview-0):   ~8s        ~28s              ~2s                ~2s
     1000 records (ractive.js):  ~300ms     ~2s               <100ms             <100ms
     3000 records (v0.66):       ~7s        ~15s              ~1s                ~2s
     3000 records (preview-0):   ~60s      (too slow)         ~8s                ~12s
     3000 records (ractive.js):  ~2s        ~6s              <100ms              ~300ms

The main takeaway is that even spark, the current meteor rendering engine is not fast enough on slower devices at the moment, which will hopefully change once Meteor reaches 1.0.



