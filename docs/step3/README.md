## Step 3: import 構文の解説

```ts
import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import { ListToolsRequestSchema } from "@modelcontextprotocol/sdk/types.js";
import { z } from "zod";
```

### 3.1. 使用するモジュールの解説

1. `import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";`  
   - **McpServer** クラスを読み込み  
   - MCP サーバーのコア機能を提供するエントリーポイント。サーバーの初期化、ツール登録、リクエスト処理などを担う。

2. `import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";`  
   - **StdioServerTransport** クラスを読み込み  
   - 標準入力/出力（stdin/stdout）を通じて MCP メッセージを送受信するクラス。CLI ツールやデスクトップなど、シンプルな接続方式で使われる。

3. `import { ListToolsRequestSchema } from "@modelcontextprotocol/sdk/types.js";`  
   - **ListToolsRequestSchema** を読み込み  
   - 使用可能なツール一覧をクライアントに提供するためのスキーマ定義。リクエストバリデーションに用いる。

4. `import { z } from "zod";`  
   - **zod** ライブラリを読み込み  
   - TypeScript と相性のいいスキーマ定義＆バリデーションツール。ツールの入力パラメータを厳格にチェックする際に使用。

---

これらのインポート文によって、MCPサーバーを立ち上げるために必要なクラス・型定義・バリデーション機能が使えるようになりました。  
次のステップでは、いよいよ MCP サーバーの機能を実装して、Claude Desktop などのクライアントから読み取れる状態にしていきます。
