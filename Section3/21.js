const largestProductOfThree = function (arr) {
  /*
    1. arr를 오름차순으로 정렬
    2. arr이 양수 또는 음수로만 이루어져있을 경우
    -> 큰 수 3개를 곱해준다.
    3. arr이 양수와 음수로 이루어져있을 경우가 문제!!
    -> 가장 큰 양수 1개와 가장 작은 음수 2개를 곱해봐야 한다.
    
    위 2가지 값을 비교해서 큰 값을 리턴한다.
    */

  arr.sort((a, b) => a - b);

  let case1 = arr.slice(-3).reduce((acc, cur) => acc * cur);
  let case2 = arr[0] * arr[1] * arr[arr.length - 1];

  return case1 >= case2 ? case1 : case2;
};
