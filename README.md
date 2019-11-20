[![Build status](https://github.com/CS-Tao/onessr-subscribe/workflows/schedule/badge.svg)](https://github.com/CS-Tao/onessr-subscribe/actions?query=workflow%3Aschedule)
# onessr-subscribe

> 曲线爱国第一步

```javascript
/** 网站声明
 * @method statement
 * @param {Person} you 你
 * @return {boolean} 是否希望你使用
*/
function statement (you) {
  if (you.isLoveChina) {
    if (you.knownHowToUse) {
      switch (you.getPurpose()) {
        case '使用墙外社交软件':
        case '抵制墙外瞎报道的媒体':
        case '做任何爱国举动':
          return true
        default:
          throw Error('请勿使用')
      }
    } else {
      return false
    }
  } else {
    throw Error('戈乌嗯')
  }
}

statement(window.getCurrentGuest())
```
