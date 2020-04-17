- 변수 선언 방식

  - var로 변수를 한번 더 선언해도 오류가 발생하지 않는다. ES6 이후로 let, const가 추가됐다.
  - let은 변수에 재할당이 가능하지만 const는 변수 재선언, 재할당 모두 불가능하다.
  - 기본적으로는 const를 선언하고 필요한 경우 let을 선언해준다.

- Array, Object

  - const data = [ "value" ];
  - const data = { key:"value", };

- DOM

  - Document Object Model
  - [MDN - DOM 소개](https://developer.mozilla.org/ko/docs/Web/API/Document_Object_Model/%EC%86%8C%EA%B0%9C)
  - [MDN - Document.querySelector()](https://developer.mozilla.org/ko/docs/Web/API/Document/querySelector)

- 비교연산자

  - [MDN - 비교연산자](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Operators/Comparison_Operators)

- 이벤트 참조

  - [MDN - 이벤트 참조](https://developer.mozilla.org/en-US/docs/Web/API/Window/online_event)

- Element.classList

  - [MDN - Element.classList](https://developer.mozilla.org/ko/docs/Web/API/Element/classList)
  - ```javascript
    // className으로 버튼 클릭 구현 -> 이전의 class 명이 사라지기 때문에 classList를 활용
    function handleClick() {
      // const currentClass = title.className;
      const hasClass = title.classList.contains(CLICKED_CLASS);
      if (!hasClass) {
        // title.className = CLICKED_CLASS;
        title.classList.add(CLICKED_CLASS);
      } else {
        // title.className = "";
        title.classList.remove(CLICKED_CLASS);
      }
    }

    // classList.toggle로 add, remove, contains 기능이 한번에 구현 가능
    function handleClick() {
      title.classList.toggle(CLICKED_CLASS);
    }
    ```

- Clock
  - [MDN - Date](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Date)
  - [MDN - 삼항 조건 연산자](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Operators/Conditional_Operator)
  - [W3Schools - setInterval()](https://www.w3schools.com/jsref/met_win_setinterval.asp)
  - [stackoverflow - function in setInterval](https://stackoverflow.com/questions/20885236/javascript-function-in-setinterval)
