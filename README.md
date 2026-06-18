# notes

個人用の技術ノートを、静的 HTML ページとして蓄積していくためのリポジトリです。

## 公開ページ

GitHub Pages:
https://shimamatz.github.io/notes/

## 構成

- `index.html`: ノート一覧のトップページ
- `questions/<slug>/index.html`: 1トピックごとの個別ノート
- `questions/<slug>/...`: 記事ごとの画像や図版
- `styles/site.css`: 共通スタイル
- `.github/workflows/static.yml`: GitHub Pages デプロイ設定
- `AGENTS.md`: 記事作成ルールと安全上の注意
- `EDITORIAL_POLICY.md`: テーマ選定基準、調査手順、AI選定テーマの記録

## ローカル確認

`index.html` をブラウザで直接開くか、次を実行します。

```sh
python3 -m http.server 8000
```

その後、`http://localhost:8000` を開きます。

## GitHub Pages 運用

1. このリポジトリを GitHub に push する
2. リポジトリ設定で GitHub Pages の配信元を GitHub Actions にする
3. `main` に push すると公開内容が更新される

## 使い方

### 1. チャットから記事を追加する

`質問:` で始まるメッセージを送ると、エージェントは次を行います。

1. `questions/<slug>/index.html` にノートを作成または更新する
2. 記事に関連する画像や図版を少なくとも1つ入れる
3. `index.html` にリンクを追加する
4. 変更を commit する
5. `origin/main` に push する

### 2. GitHub Issue から記事を追加する

タイトルが `質問:` で始まる Issue を作成し、本文に記事化したい内容を書きます。

定期実行の自動化は次を行います。

1. 毎日3時、9時、14時（Asia/Tokyo）に `shimaMatz/notes` の open issue を確認する
2. タイトルが `質問:` で始まるもの、または `article-request` ラベルが付いたものを処理する
3. 対象Issueが0件の場合だけ、過去記事とも相互にも重複しない社会問題を4件選び、ITによる小規模事業計画を4記事作成する
4. 各記事に画像または図版を追加し、`index.html` と `EDITORIAL_POLICY.md` の選定ログを更新する
5. commit して `main` に push する
6. Issue起点の場合は、公開 URL をコメントして処理済み Issue を close する

## AIによるテーマ選定

テーマ指定がない場合は、`EDITORIAL_POLICY.md` に従って一次情報を調査し、社会問題から記事テーマを選びます。
介護とIT業界内部の課題は、明示的な依頼がない限り候補から除外します。事件・事故だけでなく、日本の優れた技術や産業が縮小し、
継承が難しくなっている問題も対象です。選んだ非ITの社会問題には、具体的なITサービスによる解決策と初年度売上約100万円の
事業仮説を付けます。選定理由と参照した一次情報は、同ファイルの選定ログに残します。
