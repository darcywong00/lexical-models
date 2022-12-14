const source: LexicalModelSource = {
  format: 'trie-1.0',
  wordBreaker: 'default',
  sources: ['saanich.tsv'],
  searchTermToKey: function (wordform: string): string {
    var CEDILLA = '¸';
    var COMBINING_ACUTE_ACCENT = '\u0301'; // ÍÁŚḰĆ
    var COMBINING_LONG_SOLIDUS_OVERLAY = '\u0338'; // ȾȺȻ
    var COMBINING_MACRON_BELOW = '\u0331'; // W̱ṮḴX̱Ṉ
    var KIP_SIGN = "\u20AD" // ₭
    var LATIN_CAPITAL_LETTER_A_WITH_STROKE = '\u023A' // Ⱥ
    var LATIN_CAPITAL_LETTER_C_WITH_STROKE = '\u023B'; // Ȼ
    var LATIN_CAPITAL_LETTER_L_WITH_BAR = "\u023D"; // Ƚ
    var LATIN_CAPITAL_LETTER_T_WITH_DIAGONAL_STROKE = '\u023E'; // Ⱦ
    var LATIN_CAPITAL_LETTER_T_WITH_STROKE = '\u0166'; // Ŧ

    return wordform.normalize('NFD')
      .toUpperCase()
      .replace(CEDILLA, '')
      .replace(COMBINING_ACUTE_ACCENT, '')
      .replace(COMBINING_LONG_SOLIDUS_OVERLAY, '')
      .replace(COMBINING_MACRON_BELOW, '')
      .replace(KIP_SIGN, 'K')
      .replace(LATIN_CAPITAL_LETTER_A_WITH_STROKE, 'A')
      .replace(LATIN_CAPITAL_LETTER_C_WITH_STROKE, 'C')
      .replace(LATIN_CAPITAL_LETTER_L_WITH_BAR, 'L')
      .replace(LATIN_CAPITAL_LETTER_T_WITH_DIAGONAL_STROKE, 'T')
      .replace(LATIN_CAPITAL_LETTER_T_WITH_STROKE, 'T')
      .normalize('NFC');
  }
};

export default source;
