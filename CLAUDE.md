# CLAUDE.md

このファイルは、このリポジトリでコードを扱う際にClaude Code (claude.ai/code) にガイダンスを提供します。

## プロジェクト概要

**naotani-works** - 経歴、技術スキル、実績、連絡先情報を紹介するデザイン性の高いポートフォリオサイト

## 開発コマンド

- `npm run dev` - Turbopackで開発サーバーを起動（http://localhost:3000で開きます）
- `npm run build` - 本番用にビルド
- `npm run start` - 本番サーバーを起動
- `npm run lint` - ESLintを実行

## アーキテクチャ

TypeScriptとTailwind CSSを使用したApp RouterアーキテクチャベースのNext.js 15ポートフォリオアプリケーションです。

**デザインシステム:**
- Atomic Design手法を採用
- 再利用性の高いコンポーネント設計に重点を置く
- コンポーネント構造:
  ```
  src/components/
  ├── atoms/
  ├── molecules/
  ├── organisms/
  └── templates/
  ```

**主要構造:**
- `src/app/` - App Routerのページとレイアウト
- `src/app/layout.tsx` - Geistフォント設定を含むルートレイアウト
- `src/app/page.tsx` - ホームページコンポーネント
- `src/app/globals.css` - グローバルスタイル
- `src/components/` - Atomic Designで整理された再利用可能なUIコンポーネント

**技術スタック:**
- Next.js 15 with App Router
- React 19
- TypeScript（strict mode）
- Tailwind CSS v4
- ESLint with Next.js config
- Geistフォント（SansとMono）

**インポートエイリアス:**
- `@/*` は `./src/*` にマップされます