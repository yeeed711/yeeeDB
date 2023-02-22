import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# 마크다운 기능

## 메타데이터

- 마크다운 파일에 메타데이터를 추가하기 위해 사용.
- 기본 메타데이터를 강화하기 위해 사용.

```md
---
title: My Doc Title
more_data:
  - Can be provided
  - as: objects
    or: arrays
---
```

## 제목

```md
# 제목1

## 제목2

### 제목3

#### 제목4

##### 제목5

###### 제목6
```

`제목1` 같은 경우 사이드바 이름과 동일, 문서 내 한 번만 사용 가능

## 이미지

- 이미지 설명과 URL경로를 설정.

```md
![img alt](url)
```

## 링크

```md
[link](url)
```

## 인용

```md
> 공자가 말했다.
>
> '예지는 역시 예지.'
```

> 공자가 말했다.
>
> '예지는 역시 예지'

## 토글

- 마크다운은 HTML 요소와 `details` HTML 요소에 스타일을 적용할 수 있음.

```md
### Details element example

<details>
  <summary>눌러보시지!</summary>
  <div>
    <div>무야호</div>
    <br/>
    <details>
      <summary>
       또 눌러보시지!
      </summary>
      <div>
        😲😲😲😲😲
      </div>
    </details>
  </div>
</details>
```

<details>
  <summary>눌러보시지!</summary>
  <div>
    <div>무야호</div>
    <br/>
    <details>
      <summary>
       또 눌러보시지!
      </summary>
      <div>
        😲😲😲😲😲
      </div>
    </details>
  </div>
</details>

## 탭

```jsx
<Tabs
  defaultValue='apple'
  values={[
    { label: 'Apple', value: 'apple' },
    { label: 'Orange', value: 'orange' },
    { label: 'Banana', value: 'banana' },
  ]}>
  <TabItem value='apple'>나는 사과 🍎</TabItem>
  <TabItem value='orange'>나는 오렌지 🍊</TabItem>
  <TabItem value='banana'>나는 바나나 🍌</TabItem>
</Tabs>
```

<Tabs
defaultValue="apple"
values={[
{label: 'Apple', value: 'apple'},
{label: 'Orange', value: 'orange'},
{label: 'Banana', value: 'banana'},
]}>
<TabItem value="apple">나는 사과 🍎</TabItem>
<TabItem value="orange">나는 오렌지 🍊</TabItem>
<TabItem value="banana">나는 바나나 🍌</TabItem>
</Tabs>

## 코드블록

### 코드 제목

- 프로그래밍 언어 설정 뒤에 `title`항목을 입력하면 코드 블록 내에 제목 추가 가능

```jsx title='/src/components/Button.js'
const Button = () => {
  return <button>나는 버튼이지롱</button>
}
```

### 코드 구문 강조

- `highlight-next-line`, `highlight-start`, `highlight-end`과 같은 주석 항목을 추가해 강조.

```jsx
function HighlightSomeText(highlight) {
  if (highlight) {
    // highlight-next-line
    return 'This text is highlighted!'
  }

  return 'Nothing highlighted'
}

function HighlightMoreText(highlight) {
  // highlight-start
  if (highlight) {
    return 'This range is highlighted!'
  }
  // highlight-end
  return 'Nothing highlighted'
}
```

### 라인 표시

- `showLineNumbers` 를 사용해 코드 라인을 표시할 수 있음.
- 강조구문 또한 가능.

````md
```jsx {1,4-6,11} showLineNumbers
import React from 'react'

function MyComponent(props) {
  if (props.isBar) {
    return <div>Bar</div>
  }

  return <div>Foo</div>
}

export default MyComponent
```
````

```jsx {1,4-6,11} showLineNumbers
import React from 'react'

function MyComponent(props) {
  if (props.isBar) {
    return <div>Bar</div>
  }

  return <div>Foo</div>
}

export default MyComponent
```

## 준수 사항

```md
:::note

Some **content** with _Markdown_ `syntax`. Check [this `api`](#).

:::

:::tip

Some **content** with _Markdown_ `syntax`. Check [this `api`](#).

:::

:::info

Some **content** with _Markdown_ `syntax`. Check [this `api`](#).

:::

:::caution

Some **content** with _Markdown_ `syntax`. Check [this `api`](#).

:::

:::danger

Some **content** with _Markdown_ `syntax`. Check [this `api`](#).

:::
```

:::note

Some **content** with _Markdown_ `syntax`. Check [this `api`](#).

:::

:::tip

Some **content** with _Markdown_ `syntax`. Check [this `api`](#).

:::

:::info

Some **content** with _Markdown_ `syntax`. Check [this `api`](#).

:::

:::caution

Some **content** with _Markdown_ `syntax`. Check [this `api`](#).

:::

:::danger

Some **content** with _Markdown_ `syntax`. Check [this `api`](#).

:::
