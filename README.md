# spread-sheet-scraping-gas

## メモ

- GAS でスプレッドシート操作の機能
  - https://developers.google.com/apps-script/reference/spreadsheet/sheet?hl=ja

## 開発環境

clasp を使って GAS の開発します。ソースコードは git で管理し、clasp によりスクリプトをデプロイします。

- https://github.com/google/clasp/?tab=readme-ov-file

```shell
npm install -g @google/clasp
npm install @types/google-apps-script
clasp login
```

- appsscript.json の timeZone を日本に変更しておく。

```json
{
  "timeZone": "Asia/Tokyo",
  "dependencies": {},
  "exceptionLogging": "STACKDRIVER",
  "runtimeVersion": "V8"
}
```

- デプロイ

```shell
clasp push
```
