const sheetUrl =
  "https://docs.google.com/spreadsheets/d/1DsXheNvW8WityMJDbRs_5mQ17p1BS1j2-kQLKfCnO7Y/";

const sheet = SpreadsheetApp.openByUrl(sheetUrl).getSheetByName("main");

function doGet() {
  const data = sheet.getDataRange().getValues();
  data.shift();
  return ContentService.createTextOutput(JSON.stringify(data));
}

function test() {
  const data = doGet();
  console.log(data);
}
