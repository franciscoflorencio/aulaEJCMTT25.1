function fatorialIterativo(n){
  fatorial = 1;
  for(i = n; i > 1; i--){
    fatorial *= i;
  }

  return fatorial;
}

function fatorialRecursivo(n){
  if (n == 0){
    return 1;
  }

  return n * fatorialRecursivo(n-1);
}

console.log(fatorialRecursivo(4));
