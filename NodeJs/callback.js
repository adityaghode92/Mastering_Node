const A = (callBack) => {
    callBack();
    console.log("Aditya");
};

const B = () => {
  console.log("rahul");
};

A(B);
