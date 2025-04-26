## Step 2: Node.js モジュールの説明とインストール

### 2.1 Node.js モジュール・ライブラリとは？
- **モジュール**  
  Node.js で再利用可能な機能単位。ファイルやフォルダとして配布され、`import`/`export`（ESM）や `require()`（CommonJS）で読み込む。  
- **ライブラリ**  
  ある目的に特化した複数のモジュールをまとめたパッケージ。例: データバリデーション（Zod）、Model Context Protocol SDK など。  
- **npm（Node Package Manager）**  
  Node.js 公式のパッケージ管理ツール。依存関係の解決、バージョン管理、公開・インストールを担当。  
- **ES Modules**  
  `type: "module"` を有効にすると、ファイル拡張子 `.js`/`.ts` で ES Modules が使える。`import`/`export` 構文を推奨。

---

### 2.2 package.json の内容解説  
以下は本プロジェクトの実際の `package.json` です。

```json
{
  "name": "pokemon-flavor-text",
  "version": "0.1.0",
  "description": "A Model Context Protocol server",
  "private": true,
  "type": "module",
  "bin": {
    "pokemon-flavor-text": "./build/index.js"
  },
  "files": [
    "build"
  ],
  "scripts": {
    "build": "tsc && node -e \"require('fs').chmodSync('build/index.js', '755')\"",
    "build": "tsc && shx chmod +x build/index.js",
    "watch": "tsc --watch",
    "inspector": "npx @modelcontextprotocol/inspector build/index.js"
  },
  "devDependencies": {
    "@types/node": "^22.14.1",
    "shx": "^0.4.0",
    "typescript": "^5.8.3"
  },
  "dependencies": {
    "@modelcontextprotocol/sdk": "^1.10.1",
    "zod": "^3.24.3"
  }
}
```

| フィールド               | 説明                                                                                 |
|--------------------------|--------------------------------------------------------------------------------------|
| `name`                   | パッケージ名。npm公開時の識別子になります。                                          |
| `version`                | バージョン番号。SemVer（MAJOR.MINOR.PATCH）準拠。                                    |
| `private: true`          | `true` にすると npm への公開を防ぎます。                                             |
| `type: "module"`         | ES Modules を有効化。`import`/`export` が使えるようになります。                      |
| `bin`                    | CLI コマンド名と実行ファイルへのパス。`npm link` などでグローバル実行可能になります。|
| `files`                  | npm パッケージに含めるファイル/フォルダリスト。ここでは `build` フォルダのみを公開。 |
| `scripts`                | コマンドを簡単に実行できるようにするためのショートカットです。                       |
| `scripts.build`          | ビルドと実行ビット（chmod）の付与を同時に行うコマンド。                              |
| `scripts.watch`          | `tsc --watch` によるソース監視+再ビルド。                                            |
| `scripts.inspector`      | Model Context Protocol サーバーのデバッグツールを起動。                              |
| `dependencies`           | 本番環境で必要なパッケージ群                                                         |
| `devDependencies`        | 開発時のみ必要なパッケージ群                                                         |

---

### 2.3 ハンズオンに必要なモジュールをインストールする
1. **依存パッケージのインストール**  
   Visual Studio Code の**ターミナル**を開いて以下を実行します。
   ```bash
   npm install
   ```
2. **ビルドの実行確認**  
   ```bash
   npm run build
   ```
   - `build/index.js` が生成されることを確認。  
4. **開発モードでの監視起動**  
   ```bash
   npm run watch
   ```
   - TypeScript ソースを変更すると自動的に再ビルドされます。  
5. **Inspector ツールの動作確認**  
   ```bash
   npm run inspector
   ```
   - MCP サーバーのデバッグツールが起動します。

---

## 補足  
- **Zod**  
  スキーマ定義とバリデーションを型安全に行うライブラリ。  
- **@modelcontextprotocol/sdk**  
  MCP サーバー・クライアントの基本 API を提供する公式 SDK。  
