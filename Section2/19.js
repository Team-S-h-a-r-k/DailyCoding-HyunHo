function decryptCaesarCipher(str, secret) {
  const alp = 'abcdefghijklmnopqrstuvwxyz';

  return [...str]
    .map(ele =>
      ele === ' '
        ? ele
        : alp.indexOf(ele) - secret < 0
        ? alp[alp.length + (alp.indexOf(ele) - secret)]
        : alp[alp.indexOf(ele) - secret],
    )
    .join('');
}
