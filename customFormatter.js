module.exports = function (results) {
  let output = '';
  results.forEach((result) => {
    const { filePath, messages, source } = result;

    if (messages.length > 0) {
      const fileContent = source ? source.split('\n') : [];
      output += `\n${filePath}\n`;

      messages.forEach((message) => {
        const { line, column, ruleId, message: msg, severity } = message;
        const errorWarning = severity === 1 ? 'warning' : 'error';
        output += `  ${line}:${column}\t${errorWarning}\t${msg}\t(${ruleId})\n`;

        // Display the source code line with the error
        const sourceLine = fileContent[line - 1];
        //output += `Source is ${sourceLine}\n`;
        if (sourceLine) {
          const pointer = ' '.repeat(column - 1) + '^';
          output += `  ${sourceLine}\n  ${pointer}\n`;
        }
      });
    }
  });

  return output;
};

