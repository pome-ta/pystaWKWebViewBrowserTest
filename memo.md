# browser test

WKWebView の挙動確認

📝 2020/01/26

# `KeyboardEvent` 挙動

``` js
window.addEventListener("keyup", function(e) {
  let str = "key='" + e.key + "' | code='" + e.code + "'";
  rsltUp.textContent = str;
}, true);
```

## `up` と`down`
`[shift]` キーの挙動で変わる

### `'` : Quote
iPhone だと、

- ソフトキー上の[123]で
	- up:key=''' | code='Quote'
	- dn:key=''' | code='Quote'

- ソフトキー上の[#+=]で
	- up:key='Shift' | code='ShiftLeft'
	- dn:key=''' | code='Quote'
	- `[shift]` キーの認識か！

### `[shift]` の代わりってことか
ついでに

- `[shift]` キーダブルタップ
	- up:key='Shift' | code='ShiftLeft'
	- dn:key='CapsLock' | code='CapsLock'

## `[?]` キーの謎

- up:key='?' | code='Slash'
- dn:key='?' | code='Slash'


- up:key='/' | code='Slash'
- dn:key='/' | code='Slash'


なぜだ？🤔


# 文字選択

- `<textarea>`
	- ソフトキー出現で選択可能
	- 他要素選択不可

- その他
	- ソフトキーが出ていると選択不可
	- ソフトキー呼ばれてないと選択できる
