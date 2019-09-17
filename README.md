# HTML5 ドラッグ＆ドロップでファイルをアップロードするサンプル

HTML の特定の要素の上にファイルがドラッグされたら、
サーバ上にファイルを保存するサンプルです。

1. JavaScript のドラッグ＆ドロップ API でファイルを取得
2. JavaScript から Ajax で PHP へファイルを送信
3. PHP がファイルをサーバ上に保存

という流れで動きます。
PHP からファイルを書き込むためにパーミッションを設定する必要があります。


上記オリジナルを改変してjQueryプラグインにしました。
あと複数ファイルをアップロードできるように。

## Usage

'''
$('selector').dndupload(target, filepath, callback);
'''

### target
_String_
PHPなどサーバに保存するプログラムへのパス

### filepath
_String_
ファイルの保存先

### callback
_Function_
アップロード後に実行される関数
