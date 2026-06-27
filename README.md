# notes

個人用の技術ノートを蓄積し、Astroで静的サイトとして公開するリポジトリです。

## 公開ページ

GitHub Pages:
https://shimamatz.github.io/notes/

## 構成

- `src/pages/index.astro`: ノート一覧のトップページ
- `src/components/NoteArchive.astro`: TypeScriptで動く検索・カテゴリ絞り込み
- `src/lib/notes.ts`: 既存記事から一覧データを生成
- `questions/<slug>/index.html`: 1トピックごとの個別ノート
- `questions/<slug>/...`: 記事ごとの画像や図版
- `styles/site.css`: 共通スタイル
- `templates/editorial-image-generation-prompt.md`: 記事中の `[図解1]` `[図解2]` `[図解3]` の位置に合わせて3枚の編集図解を作る追加プロンプト
- `.github/workflows/static.yml`: GitHub Pages デプロイ設定
- `scripts/copy-legacy-content.mjs`: 既存記事とアセットをビルド成果物へ統合
- `AGENTS.md`: 記事作成ルールと安全上の注意
- `EDITORIAL_POLICY.md`: テーマ選定基準、調査手順、AI選定テーマの記録

## ローカル確認

Node.js 24以降を用意し、次を実行します。

```sh
npm install
npm run dev
```

その後、ターミナルに表示される `/notes/` のURLを開きます。公開用ビルドは `npm run build`、ビルド結果の確認は `npm run preview` です。

## GitHub Pages 運用

1. このリポジトリを GitHub に push する
2. リポジトリ設定で GitHub Pages の配信元を GitHub Actions にする
3. `main` に push すると公開内容が更新される

## 使い方

### 1. チャットから記事を追加する

`質問:` で始まるメッセージを送ると、エージェントは次を行います。

1. `questions/<slug>/index.html` にノートを作成または更新する
2. 記事本文に `[図解1]` `[図解2]` `[図解3]` を入れ、その本文を追加プロンプトに差し込んで3枚のローカル図解画像を入れる
3. Astroが記事ディレクトリを読み取り、トップページへ自動掲載する
4. 変更を commit する
5. `origin/main` に push する

### 2. GitHub Issue から記事を追加する

タイトルが `質問:` で始まる Issue を作成し、本文に記事化したい内容を書きます。

定期実行の自動化は次を行います。

1. 毎日3時、9時、14時（Asia/Tokyo）に `shimaMatz/notes` の open issue を確認する
2. タイトルが `質問:` で始まるもの、または `article-request` ラベルが付いたものを処理する
3. 対象Issueが0件の場合だけ、過去記事とも相互にも重複しないアプリ機会を4件選ぶ。社会問題解決型と日常を楽しくする体験型の両方を候補にできる
4. 各記事に `[図解1]` `[図解2]` `[図解3]` の文脈から生成した3枚の編集図解を追加する。事業案では、さらにアプリの「主要一覧画面」と「詳細・操作画面」のSVGワイヤーフレームを2枚追加し、`EDITORIAL_POLICY.md` の選定ログを更新する。トップページの一覧はビルド時に自動生成される
5. commit して `main` に push する
6. Issue起点の場合は、公開 URL をコメントして処理済み Issue を close する

## AIによるテーマ選定

テーマ指定がない場合は、`EDITORIAL_POLICY.md` に従って、社会問題をITで解く案と、日常を楽しくする小さな体験型アプリの両方を候補にします。
体験型では社会問題を無理に設定せず、中心となる楽しさ、利用する瞬間、継続ループ、端末上の見せ方を説明します。介護テーマは明示的な依頼がない限り除外します。
どちらも初年度売上約100万円の事業仮説、AWS構成、ワイヤーフレーム2枚を付け、選定理由と参照情報を選定ログに残します。
