# 映像クリエイター ポートフォリオサイト

ダークブルー基調のレスポンシブな映像クリエイター向けポートフォリオサイトです。

## 特徴

- **レスポンシブデザイン**: モバイル・タブレット・デスクトップに対応
- **背景動画**: 映像クリエイターらしい動的な背景
- **YouTube動画埋め込み**: 作品を直接表示
- **サムネイルギャラリー**: モーダル表示機能付き
- **ダークブルーテーマ**: プロフェッショナルなデザイン
- **スムーススクロール**: ナビゲーション連動

## ファイル構成

```
portfolio/
├── index.html          # メインHTML
├── styles.css          # スタイルシート
├── script.js           # JavaScript機能
├── assets/             # メディアファイル
│   ├── bg-video-1.mp4  # 背景動画1
│   ├── bg-video-2.mp4  # 背景動画2（オプション）
│   ├── bg-video-3.mp4  # 背景動画3（オプション）
│   ├── thumbnail-1.jpg # サムネイル作品1
│   └── thumbnail-2.jpg # サムネイル作品2
└── README.md           # このファイル
```

## セットアップ手順

### 1. ファイルの準備
- 上記のファイル構成に従ってファイルを配置
- `assets/` フォルダ内にメディアファイルを追加

### 2. コンテンツのカスタマイズ

#### YouTube動画の設定
`index.html` の以下の部分を編集：
```html
<iframe src="https://www.youtube.com/embed/VIDEO_ID_1" frameborder="0" allowfullscreen></iframe>
```
`VIDEO_ID_1` を実際のYouTube動画IDに変更

#### サムネイル画像の設定
`assets/` フォルダに以下のファイルを配置：
- `thumbnail-1.jpg`
- `thumbnail-2.jpg`

#### 背景動画の設定
`assets/` フォルダに以下のファイルを配置：
- `bg-video-1.mp4` (必須)
- `bg-video-2.mp4` (オプション)
- `bg-video-3.mp4` (オプション)

### 3. プロフィール情報の更新
`index.html` の以下のセクションを編集：
- About セクションのプロフィール文
- Contact セクションのメールアドレス・SNS情報
- ナビゲーションのロゴ名

### 4. ローカルでのテスト
1. ブラウザで `index.html` を開く
2. レスポンシブ表示を確認
3. 各セクションの動作確認

## カスタマイズ可能な項目

### 色調の変更
`styles.css` の CSS変数を編集：
```css
:root {
    --primary-blue: #1a237e;     /* メインブルー */
    --secondary-blue: #283593;   /* セカンダリーブルー */
    --accent-blue: #3f51b5;      /* アクセントブルー */
    --light-blue: #5c6bc0;       /* ライトブルー */
}
```

### セクションの追加・削除
1. `index.html` でセクションを追加
2. `styles.css` でスタイルを定義
3. ナビゲーションメニューに項目追加

## 技術仕様

- **HTML5**: セマンティックマークアップ
- **CSS3**: Flexbox、Grid、CSS変数使用
- **JavaScript**: バニラJS（ライブラリ不要）
- **レスポンシブ**: Mobile First設計

## ブラウザ対応

- Chrome (推奨)
- Firefox
- Safari
- Edge

## デプロイ

以下のサービスで簡単にデプロイ可能：
- GitHub Pages
- Netlify
- Vercel
- Firebase Hosting

## ライセンス

MIT License