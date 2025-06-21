# Instagram Clone App

## 概要
Instagram風のソーシャルメディアWebアプリケーションです。React、Firebase、Material-UIを使用して構築された最新のウェブアプリケーションで、写真共有とソーシャル機能を提供します。

## セットアップ手順

1. リポジトリのクローン:
    ```
    git clone https://github.com/yourusername/instagram-clone.git
    cd instagram-clone
    ```

2. 依存関係のインストール:
    ```
    npm install
    ```

3. 環境変数の設定:
    - .env.localファイルを作成
    - 必要な環境変数を設定:
        ```
        REACT_APP_FIREBASE_API_KEY=your_api_key
        REACT_APP_FIREBASE_AUTH_DOMAIN=your_auth_domain
        REACT_APP_FIREBASE_PROJECT_ID=your_project_id
        REACT_APP_FIREBASE_STORAGE_BUCKET=your_storage_bucket
        REACT_APP_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
        REACT_APP_FIREBASE_APP_ID=your_app_id
        ```

4. アプリケーションの起動:
    ```
    npm start
    ```

## 使用方法

1. アカウント作成またはログイン
2. プロフィールの設定
3. 写真の投稿
4. 他のユーザーのフォローとインタラクション

## 主な機能

### 認証機能
- Eメール/パスワードによるサインアップ
- ソーシャルメディア認証（Google, Facebook）
- パスワードリセット
- プロフィール管理

### 投稿機能
- 画像アップロード
- キャプション追加
- 位置情報タグ付け
- ハッシュタグ機能

### インタラクション機能
- いいね！
- コメント
- 投稿の保存
- ユーザーフォロー

### UI/UX
- レスポンシブデザイン
- ダークモード
- 無限スクロール
- プログレッシブローディング

## 開発ガイド

### プロジェクト構造
```
src/
  ├── components/
  ├── contexts/
  ├── hooks/
  ├── pages/
  ├── services/
  ├── utils/
  └── App.js
```

### コーディング規約
- ESLintとPrettierを使用
- コンポーネントはFunction Componentsで作成
- スタイリングはstyled-componentsを使用

### テスト
```
npm run test
```

### ビルド
```
npm run build
```

## 貢献方法
1. Forkを作成
2. 新しいブランチを作成 (git checkout -b feature/amazing-feature)
3. 変更をコミット (git commit -m 'Add amazing feature')
4. ブランチにプッシュ (git push origin feature/amazing-feature)
5. Pull Requestを作成

## ライセンス
MIT License - 詳細は[LICENSE](LICENSE)ファイルを参照してください。

## 作者
Your Name - [@yourusername](https://github.com/yourusername)