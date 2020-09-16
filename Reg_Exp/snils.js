// Изучи тесты `spec/SNILS_spec.js`
// Чтобы понимать как должны работать твои методы.
// Определи, есть ли во входной строке номер СНИЛС.
function hasSNILS(string) {
  const regExp = /\d{3}(-)\d{3}(-)\d{3}\s\d{2}/gm;
  return regExp.test(string);
}
// console.log(hasSNILS('The number is 111-600-142 22'));

// Найди и верни номер СНИЛС из строки.
function grabSNILS(string) {
  const regExp = /\d{3}(-)\d{3}(-)\d{3}\s\d{2}/gm;
  return (string.match(regExp)[0]);
}
// console.log(grabSNILS('The numbers are 350-802-074 94, 234-600-142 22, and 013-605-876 94'));
// Найди и верни все номера СНИЛС, что есть в строке.
function grabAllSNILS(string) {
  const regExp = /\d{3}(-)\d{3}(-)\d{3}\s\d{2}/gm;
  return (string.match(regExp));
}

// console.log(grabAllSNILS('The numbers are 350-802-074 94, 234-600-142 22, and 013-605-876 94'));

// Зашифруй номера СНИЛС. Example: XXX-XXX-XXX 30.
function hideAllSNILS(string) {
  const regExp = /\d{3}(-)\d{3}(-)\d{3}/gm;
  return (string.replace(regExp, 'XXX-XXX-XXX'));
};
// console.log(hideAllSNILS('The numbers are 350-802-074 94, 234-600-142 22, and 013-605-876 94'));

// Отформатируй все номера СНИЛС, чтобы использовались правильные разделители:
// '48001443027', '480.014.430.27', и '480--014--430 27' должны превратиться в '480-014-430 27'.
function formatSNILS(string) {
  const regExp = /(\d{3})[\D]*(\d{3})[\D]*(\d{3})[\D]*(\d{2})/gm;
  return (string.replace(regExp, '$1-$2-$3 $4'));
}
// console.log(formatSNILS('The numbers are 35080207494, 234.600.142.22, and 013--605--876 94'));
// console.log(formatSNILS('The number is XXX-XXX-XXX 22'));
