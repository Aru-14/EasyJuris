const Document = require("../Models/Document");

async function SaveDocument(fileId, fileName, extractedText, summary) {
  const doc = new Document({
    fileId,
    fileName,
    extractedText,
    summary,
  });
  await doc.save();
  return doc._id; // this is the MongoDB document ID
}

module.exports = { SaveDocument };