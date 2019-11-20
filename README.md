[![Build status](https://github.com/CS-Tao/onessr-subscribe/workflows/schedule/badge.svg)](https://github.com/CS-Tao/onessr-subscribe/actions?query=workflow%3Aschedule)
# onessr-subscribe

> I love China

```javascript
/** 网站声明
 * @method statement
 * @param {Person} you 你
 * @return {boolean} 是否希望你使用
*/
function statement (you) {
  if (!you.knownHowToUse) {
    if (you.isLoveChina) {
      switch (you.getPurpose()) {
        case '使用墙外社交软件':
        case '抵制墙外瞎报道的媒体':
        case '做任何爱国举动':
          return true
        default:
          throw Error('请勿使用')
      }
    } else {
      throw Error('戈乌嗯')
    }
  } else {
    return false
  }
}

statement(window.getCurrentGuest())
```
