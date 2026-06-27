# Editorial Diagram Generation Prompt

Use this prompt after drafting an article. The article must contain exactly three placeholders:

- `[図解1]`
- `[図解2]`
- `[図解3]`

Workflow:

1. Draft the article text first.
2. Insert `[図解1]`, `[図解2]`, and `[図解3]` at the exact positions where diagrams should appear.
3. Replace `test` in the prompt below with the full article text, including those placeholders.
4. Run the prompt in a separate image-generation chat.
5. The image-generation chat can usually return only one image at a time, so ask it to continue with the next image until all three are obtained.
6. Save the images in the article directory, normally as `diagram-1.png`, `diagram-2.png`, and `diagram-3.png`.
7. Replace each placeholder in the article HTML with the corresponding `<figure>`.
8. Set `<meta property="og:image" content="diagram-1.png" />` so the top page can use the first diagram as the thumbnail.

Do not ask for a separate generic thumbnail. The first diagram is also the listing thumbnail when the article has no dedicated cover image.

For technical notes, keep the final article body to exactly three generated editorial diagrams:

- Do not leave old `editorial-diagram-*.svg` figures in the article.
- Do not leave old conceptual SVGs such as `diagram.svg`, `summary.svg`, `*-flow.svg`, `*-diagram.svg`, `*-overview.svg`, or `*-detail.svg` unless the article is explicitly a business-plan note and the SVG is one of the required app wireframes.
- Prefer predictable PNG filenames: `<slug>-figure-1.png`, `<slug>-figure-2.png`, and `<slug>-figure-3.png`.
- Verify that the generated catalog/listing uses the same first PNG that appears in the article body.

```text
あなたはプロの編集デザイナーです。
note記事内に挿入する図解画像を、3枚作ります。全3枚で世界観を統一しつつ、画像生成を3回に分けて1枚ずつ独立した画像として順番に生成してください。

【出力形式】
- 画像比率: 16:9 横長（note記事の本文中に挿入する図解）
- 枚数: 3枚（独立した画像3枚として、それぞれ別ファイルで生成）
- 画像生成の呼び出し回数: 3回（1回の画像生成 = 1枚の図解。3枚分の内容を1枚の画像に並べた一覧/グリッド/サムネ集にしてはいけない）
- 1枚目から順に画像生成し、各画像はそれぞれ単独で完結した図解であること

【コンセプト】note記事本文中に挿入する図解画像として、本文の流れを邪魔しない編集的トーン。記事のテーマ・ターゲット・伝えたいことは末尾の【参考：記事本文】から読み取ってください。

【ビジュアルスタイル】幾何学図形・抽象的な構成・大きな余白で知性を感じさせるミニマルなビジュアル、円・線・矩形のシンプルな造形と限定的な配色・戦略コンサルや分析レポートにふさわしい硬質で洗練されたトーン

【情報密度】情報密度は高め（1メッセージ原則は保つ）。雑誌記事のように複数の要素を整理した編集的レイアウトで、読み込ませる構成

【共通ルール】

[デザインルール]
- 世界観統一: 全3枚は「同じ1人のデザイナーが連続して作った」ように見えること。配色・書体だけでなく、装飾の豊かさ（イラスト密度・図解の細かさ・要素の質感）まで全枚で揃え、装飾密度のバラつきは絶対に避ける
- 本文との馴染み: noteは本文中心の読み物。図解は本文の流れを止めず『理解を補助する挿絵』として機能すること。派手すぎる装飾やページを支配する強いビジュアルは避け、編集者の手付きを感じる静かなトーンを保つ
- 余白設計: 文字・図版・装飾などのコンテンツ要素は、画面四辺それぞれ画面短辺の7〜8%相当の安全余白の内側に収める。画面全体の余白率（要素のない空間）を30%以上保つ。※外周の枠線や背景の塗りはこの安全余白の対象外で、画像の縁まで使ってよい
- タイポグラフィ: 見出し（大きなタイトル文字）を入れる画像では、主役見出しの直上に、その見出しの内容を象徴する1〜2単語の欧文キャッチフレーズ（例：『仕組みの全体像』→『OVERVIEW / SYSTEM』、『3つの落とし穴』→『PITFALLS / 03』）をテキストのみで控えめに配置し、見出しのテーマを欧文で予告する。見出しを入れず欧文サブコピーのみの画像では、その欧文サブコピー（1〜2語の小さなキャッチ）をページ上部の中央に単独で控えめに置き、大きなタイトル文字は作らない。見出しもサブコピーも入れない画像では、これらの欧文・タイトル文字を一切置かない
- 情報密度: 1枚の画像で伝えるメッセージは1つに絞り、複数の要点を1枚に詰め込まない。箇条書きは最大3項目まで、各項目は短い1行に収める
- 下部キャプション: 各図解の下部に、その図の要点を一言で補う短いキャプションを添える。キャプションは必ず左右中央揃え（センタリング）にする。文言はシンプルで分かりやすい言葉にし、ひと目で意味が伝わる短い一文にする。区切り線や罫線は引かず、図版との間に十分な余白を取ることでゾーニングし、図解と一体のまとまりとして自然に収めること
- 枠線: 画像のいちばん外側の縁（4辺すべて）にぴったり沿わせ、画像全体をひと続きで囲む境界線（ボーダー）を引く。線と画像の端の間に余白（パディング）を空けて内側に額縁状の飾り枠を作るのは禁止。Web/CSSのborderのように、画像の外周そのものを縁取る細くくっきりした矩形の境界線にし、四隅は画像の角にぴったり沿わせる。全枚で線の太さ・色を統一する
- 構図のバリエーション: 全枚で同じ構図の繰り返しは避け、内容に応じて主役要素（メインビジュアル／巨大な数字／印象的な短文／箇条書き／チャート 等）を切り替える。世界観の中で『カメラの位置』『主役』を変えながら、読み進めるリズムを作る

[禁止事項]
- 1画像に複数枚を並べる出力の禁止（最重要）: 3枚分を1枚の画像に並べた一覧/グリッド/サムネ集/コラージュ/カルーセルプレビューとして出力するのは絶対禁止。必ず1枚の画像 = 1枚の図解として、画像生成を 3 回に分けて独立した 3 枚の画像を順番に出力すること
- AIテンプレ禁止（カード横並び）: ChatGPTがデフォルトで多用する『横並びに3〜4枚の白い角丸カード（淡色の丸いアイコン背景＋見出し＋1行説明を均等に並べる）』テンプレ構成は禁止。雑誌・編集デザイン寄りの非対称で自由なレイアウトを優先
- AIテンプレ禁止（ステップフロー図）: 『①②③の番号バッジ＋アイコン＋ラベルを矢印で繋ぐ』AIテンプレ的なステップフロー図は避け、手順表現は文字組み・タイポグラフィ・図解で工夫する
- 本文転載禁止: 後述の【参考：記事本文】はあくまで文脈共有のためのもの。記事本文の文章をそのまま画像内に転載しないこと。要点・骨子だけを抽出して図解化する

【画像の構成】（3枚）
※ 各画像の役割の指針：
- 図解・挿絵＝本文中の挿絵。本文の流れを邪魔せず、理解を補助する静かな図解。雑誌の記事誌面に添えられた図版のような位置づけ

1. 図解・挿絵：本文中の［図解1］の位置に挿入し、前後の文脈から内容を推察／欧文サブコピーのみ
2. 図解・挿絵：本文中の［図解2］の位置に挿入し、前後の文脈から内容を推察／欧文サブコピーのみ
3. 図解・挿絵：本文中の［図解3］の位置に挿入し、前後の文脈から内容を推察／欧文サブコピーのみ

【参考：記事本文】
以下の記事本文を文脈として読み込み、要点を抜き出して3枚の画像に図解化してください。本文をそのまま転載するのではなく、骨子を整理して図解・キャッチで伝えること。
---
test
---
```
