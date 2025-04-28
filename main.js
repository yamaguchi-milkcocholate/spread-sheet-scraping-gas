function scrapeSheetData() {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  const sheet = ss.getSheetByName("sheet1");

  const data = sheet.getDataRange().getValues();
  const header = data[0];
  const rows = data.slice(1);

  const urlIndex = header.indexOf("url");
  const outputIndex = header.indexOf("output");

  console.log(header);

  // ヘッダーを除いたデータを行ごとに処理
  rows.forEach((row, index) => {
    const url = row[urlIndex];
    console.log(`URL ${url}:`);

    try {
      const response = UrlFetchApp.fetch(url);

      const content = response.getContentText();
      const textContent = content
        .replace(/<[^>]*>/g, "")
        .replace(/\s+/g, " ")
        .trim(); // タグを除去
      console.log(textContent);

      // スプレッドシートに書き込む
      const richTextValue = SpreadsheetApp.newRichTextValue()
        .setText(textContent)
        .build();
      sheet
        .getRange(index + 2, outputIndex + 1)
        .setRichTextValue(richTextValue);
    } catch (error) {
      console.error(`Error fetching URL ${url}:`, error);
      sheet
        .getRange(index + 2, outputIndex + 1)
        .setValue("Error fetching content");
    }
  });
}

// メイン関数
function main() {
  console.log("Hello GAS!");

  scrapeSheetData();
}
