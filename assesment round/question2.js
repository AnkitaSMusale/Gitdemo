const result = (a) => {
    let rate = 0 ;
    let willGet = 0 ;
    let remAmount = 0 ;
    if(a>=1 && a<=400)
    {
      rate = 5;
      willGet = (a*rate)/100;
      remAmount = a-willGet;
    }
    else if(a>=401 && a<=800)
    {
      rate = 4;
      willGet = (a*rate)/100;
      remAmount = a-willGet;
    }
    else if(a>=801 && a<=1200)
    {
      rate = 3;
      willGet = (a*rate)/100;
      remAmount = a-willGet;
    }
    else if(a>=1201 && a<=9000)
    {
      rate = 2;
      willGet = (a*rate)/100;
      remAmount = a-willGet;
    }
    else if(a>=9001 && a<15000)
    {
      rate = 1;
      willGet = (a*rate)/100;
      remAmount = a-willGet;
    }
    console.log(`your commision rate is ${rate}%, you will get $${willGet} and remaining amount is $${remAmount}`)
}
  result(12452);