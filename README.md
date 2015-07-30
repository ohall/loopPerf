# loopPerf
A quick and dirty iteration comparison in Node



### Times for 1,000,000 iterations.
#### [Native forEach](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach): 39ms
#### [Native map](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map): 34ms
#### [lodash each](https://lodash.com/): 12ms
#### [lodash map](https://lodash.com/): 108ms



### Run it yourself

```sh
git clone git@github.com:ohall/loopPerf.git
cd loopPerf
node perf
```