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

1. `shimaMatz/notes` の open issue を確認する
2. タイトルが `質問:` で始まるもの、または `article-request` ラベルが付いたものを処理する
3. ノート、画像、`index.html` を更新する
4. commit して `main` に push する
5. 公開 URL を Issue にコメントする
6. 処理済み Issue を close する

## AIによるテーマ選定

テーマ指定がない場合は、`EDITORIAL_POLICY.md` に従って一次情報を調査し、社会問題から記事テーマを選びます。
介護とITは、明示的な依頼がない限り候補から除外します。事件・事故だけでなく、日本の優れた技術や産業が縮小し、
継承が難しくなっている問題も対象です。選定理由と参照した一次情報は、同ファイルの選定ログに残します。
