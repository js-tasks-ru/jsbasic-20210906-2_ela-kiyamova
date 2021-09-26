
function truncate(str, maxlength) {
  return (str.length > maxlength) ?
    str.slice(0, maxlength - 1) + '…' : str;
}

function truncate(str, maxlength) {
  let strLength = str.length;
  let exceedsMaxlength = strLength > maxlength;

  if (exceedsMaxlength) {
    let shortenStr = str.slice(0, maxlength - 1);

    return `${shortenStr}…`;
  }

  return str;
}
