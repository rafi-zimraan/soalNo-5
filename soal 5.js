let codeUnik =[12,78,42,40,36,2,8,96,66,20,91,85,41,69,38,77,97,60,15,57];

let hasilCode = codeUnik.reduce((akumulasi , jumlahCode) => {
    return akumulasi + jumlahCode / 20
}
)
console.log(hasilCode);
