// triangle at the lower left corner
const triangleLL = scale_independent(3,1,beside_frac(2/3, sail, blank));
// triangle at the lower right corner
const triangleLR = quarter_turn_left(triangleLL);
// triangle at the upper left corner
const triangleUL = quarter_turn_right(triangleLL);
// triangle at the upper right corner
const triangleUR = turn_upside_down(triangleLL);

// rune_matrix is a list( list(), list() ... )
// The element of the matrix is rune
// return one rune created by merge the matrix
function rune_matrix2rune(rune_matrix) {
    // rune_list is a list of runes, 
    // return beside(list(runes...))
    function rune_list2rune_beside(rune_list) {
        const len = length(rune_list);
        return len === 1
            ?  head(rune_list)
            :  beside_frac(1 / len, 
                        head(rune_list), 
                        rune_list2rune_beside(tail(rune_list)));
    }
    // rune_list is a list of runes, 
    // return stack(list(runes...))
    function rune_list2rune_stack(rune_list) {
        const len = length(rune_list);
        return len === 1
            ?  head(rune_list)
            :  stack_frac(1 / len, 
                        head(rune_list), 
                        rune_list2rune_stack(tail(rune_list)));
    }
    // 
    function func(rune_list) {
        return rune_list2rune_beside(rune_list);
    }
    return rune_list2rune_stack(map(func, rune_matrix));
}


// number_matrix is list( list(), list(), ...)
// The element of the matrix is a number, 
// return one rune corresponding to the number_matrix.
function number_matrix2rune(number_matrix) {
    function func(number_list) {
        return map(number2rune, number_list);
    }
    const rune_matrix = map(func, number_matrix);
    return rune_matrix2rune(rune_matrix);
}


// number = -6 - 0 - +6
// return blank, square, cirlce
// triangleLL, triangleLR, triangleUL, triangleUR
// negative means red, positive mean blanck
function number2rune(number) {
    return number === 0
        ?  blank
        :  number === 1
        ?  square
        :  number === 2
        ?  circle
        :  number === 3
        ?  triangleLL
        :  number === 4
        ?  triangleLR
        :  number === 5
        ?  triangleUL
        :  number === 6
        ?  triangleUR
        :  number === -1
        ?  red(square)
        :  number === -2
        ?  red(circle)
        :  number === -3
        ?  red(triangleLL)
        :  number === -4
        ?  red(triangleLR)
        :  number === -5
        ?  red(triangleUL)
        :  number === -6
        ?  red(triangleUR)
        :  error("number2rune");
}


function single(rune){
    return beside_frac(1/6,blank,beside_frac(4/5,rune,blank));
}

const zero1=number_matrix2rune(list(
    list(0,0,0,0,0,0,0,0,0,0,0,0,0,0),
    list(0,0,0,4,1,1,1,1,1,1,3,0,0,0),
    list(0,0,4,1,1,1,1,1,1,1,1,3,0,0),
    list(0,0,1,1,5,0,0,0,0,6,1,1,0,0),
    list(0,0,1,1,0,0,0,0,0,0,1,1,0,0),
    list(0,0,1,1,0,0,0,0,0,0,1,1,0,0),
    list(0,0,1,1,0,0,0,0,0,0,1,1,0,0),
    list(0,0,1,1,0,0,0,0,0,0,1,1,0,0),
    list(0,0,1,1,0,0,0,0,0,0,1,1,0,0),
    list(0,0,1,1,0,0,0,0,0,0,1,1,0,0),
    list(0,0,1,1,0,0,0,0,0,0,1,1,0,0),
    list(0,0,1,1,0,0,0,0,0,0,1,1,0,0),
    list(0,0,1,1,0,0,0,0,0,0,1,1,0,0),
    list(0,0,1,1,0,0,0,0,0,0,1,1,0,0),
    list(0,0,1,1,0,0,0,0,0,0,1,1,0,0),
    list(0,0,1,1,0,0,0,0,0,0,1,1,0,0),
    list(0,0,1,1,3,0,0,0,0,4,1,1,0,0),
    list(0,0,6,1,1,1,1,1,1,1,1,5,0,0),
    list(0,0,0,6,1,1,1,1,1,1,5,0,0,0),
    list(0,0,0,0,0,0,0,0,0,0,0,0,0,0)
    ));
    
const one1=number_matrix2rune(list(
    list(0,0,0,0,0,0,0,0,0,0,0,0,0,0),
    list(0,0,0,0,0,0,4,1,0,0,0,0,0,0),
    list(0,0,0,0,0,4,1,1,0,0,0,0,0,0),
    list(0,0,0,0,4,1,1,1,0,0,0,0,0,0),
    list(0,0,0,4,1,1,1,1,0,0,0,0,0,0),
    list(0,0,4,1,1,5,1,1,0,0,0,0,0,0),
    list(0,0,0,0,0,0,1,1,0,0,0,0,0,0),
    list(0,0,0,0,0,0,1,1,0,0,0,0,0,0),
    list(0,0,0,0,0,0,1,1,0,0,0,0,0,0),
    list(0,0,0,0,0,0,1,1,0,0,0,0,0,0),
    list(0,0,0,0,0,0,1,1,0,0,0,0,0,0),
    list(0,0,0,0,0,0,1,1,0,0,0,0,0,0),
    list(0,0,0,0,0,0,1,1,0,0,0,0,0,0),
    list(0,0,0,0,0,0,1,1,0,0,0,0,0,0),
    list(0,0,0,0,0,0,1,1,0,0,0,0,0,0),
    list(0,0,0,0,0,0,1,1,0,0,0,0,0,0),
    list(0,0,0,0,0,0,1,1,0,0,0,0,0,0),
    list(0,0,0,1,1,1,1,1,1,1,1,0,0,0),
    list(0,0,0,1,1,1,1,1,1,1,1,0,0,0),
    list(0,0,0,0,0,0,0,0,0,0,0,0,0,0)
));


const two1=number_matrix2rune(list(
    list(0,0,0,0,0,0,0,0,0,0,0,0,0,0),
    list(0,0,0,4,1,1,1,1,1,3,0,0,0,0),
    list(0,0,4,1,1,1,1,1,1,1,3,0,0,0),
    list(0,4,1,1,5,0,0,0,6,1,1,3,0,0),
    list(0,1,1,5,0,0,0,0,0,6,1,1,0,0),
    list(0,1,1,0,0,0,0,0,0,0,1,1,0,0),
    list(0,0,0,0,0,0,0,0,0,0,1,1,0,0),
    list(0,0,0,0,0,0,0,0,0,4,1,1,0,0),
    list(0,0,0,0,0,0,0,0,4,1,1,5,0,0),
    list(0,0,0,0,0,0,0,4,1,1,5,0,0,0),
    list(0,0,0,0,0,0,4,1,1,5,0,0,0,0),
    list(0,0,0,0,0,4,1,1,5,0,0,0,0,0),
    list(0,0,0,0,4,1,1,5,0,0,0,0,0,0),
    list(0,0,0,4,1,1,5,0,0,0,0,0,0,0),
    list(0,0,4,1,1,5,0,0,0,0,0,0,0,0),
    list(0,0,1,1,5,0,0,0,0,0,0,0,0,0),
    list(0,0,1,1,0,0,0,0,0,0,0,1,0,0),
    list(0,0,1,1,1,1,1,1,1,1,1,1,0,0),
    list(0,0,1,1,1,1,1,1,1,1,1,1,0,0),
    list(0,0,0,0,0,0,0,0,0,0,0,0,0,0)
    ));


const three1=number_matrix2rune(list(
    list(0,0,0,0,0,0,0,0,0,0,0,0,0,0),
    list(0,1,1,1,1,1,1,1,1,1,1,1,0,0),
    list(0,1,1,1,1,1,1,1,1,1,1,1,0,0),
    list(0,1,0,0,0,0,0,0,4,1,1,5,0,0),
    list(0,0,0,0,0,0,0,4,1,1,5,0,0,0),
    list(0,0,0,0,0,0,4,1,1,5,0,0,0,0),
    list(0,0,0,0,0,4,1,1,5,0,0,0,0,0),
    list(0,0,0,0,4,1,1,5,0,0,0,0,0,0),
    list(0,0,0,4,1,1,1,1,1,3,0,0,0,0),
    list(0,0,4,1,1,1,1,1,1,1,3,0,0,0),
    list(0,0,0,0,0,0,0,0,6,1,1,3,0,0),
    list(0,0,0,0,0,0,0,0,0,6,1,1,0,0),
    list(0,0,0,0,0,0,0,0,0,0,1,1,0,0),
    list(0,0,0,0,0,0,0,0,0,0,1,1,0,0),
    list(0,0,0,0,0,0,0,0,0,0,1,1,0,0),
    list(0,1,3,0,0,0,0,0,0,4,1,1,0,0),
    list(0,1,1,3,0,0,0,0,4,1,1,5,0,0),
    list(0,6,1,1,1,1,1,1,1,1,5,0,0,0),
    list(0,0,6,1,1,1,1,1,1,5,0,0,0,0),
    list(0,0,0,0,0,0,0,0,0,0,0,0,0,0)
    ));


const four1=number_matrix2rune(list(
    
    list(0,0,0,0,0,0,0,0,0,0,0,0,0,0),
    list(0,0,0,0,0,0,0,0,0,4,0,0,0,0),
    list(0,0,0,0,0,0,0,0,4,1,0,0,0,0),
    list(0,0,0,0,0,0,0,4,1,1,0,0,0,0),
    list(0,0,0,0,0,0,4,1,1,1,0,0,0,0),
    list(0,0,0,0,0,4,1,1,1,1,0,0,0,0),
    list(0,0,0,0,4,1,1,5,1,1,0,0,0,0),
    list(0,0,0,4,1,1,5,0,1,1,0,0,0,0),
    list(0,0,4,1,1,5,0,0,1,1,0,0,0,0),
    list(0,4,1,1,5,0,0,0,1,1,0,0,0,0),
    list(0,1,1,5,0,0,0,0,1,1,0,0,0,0),
    list(0,1,1,0,0,0,0,0,1,1,0,0,0,0),
    list(0,1,1,1,1,1,1,1,1,1,1,1,0,0),
    list(0,1,1,1,1,1,1,1,1,1,1,1,0,0),
    list(0,0,0,0,0,0,0,0,1,1,0,0,0,0),
    list(0,0,0,0,0,0,0,0,1,1,0,0,0,0),
    list(0,0,0,0,0,0,0,0,1,1,0,0,0,0),
    list(0,0,0,0,0,0,0,0,1,1,0,0,0,0),
    list(0,0,0,0,0,0,0,1,1,1,1,0,0,0),
    list(0,0,0,0,0,0,0,0,0,0,0,0,0,0)
));

const five1=number_matrix2rune(list(
    list(0,0,0,0,0,0,0,0,0,0,0,0,0,0),
    list(0,0,1,1,1,1,1,1,1,1,1,1,0,0),
    list(0,0,1,1,1,1,1,1,1,1,1,1,0,0),
    list(0,0,1,1,0,0,0,0,0,0,0,0,0,0),
    list(0,0,1,1,0,0,0,0,0,0,0,0,0,0),
    list(0,0,1,1,0,0,0,0,0,0,0,0,0,0),
    list(0,0,1,1,0,0,0,0,0,0,0,0,0,0),
    list(0,0,1,1,0,0,0,0,0,0,0,0,0,0),
    list(0,0,1,1,1,1,1,1,1,1,3,0,0,0),
    list(0,0,6,1,1,1,1,1,1,1,1,3,0,0),
    list(0,0,0,0,0,0,0,0,0,6,1,1,0,0),
    list(0,0,0,0,0,0,0,0,0,0,1,1,0,0),
    list(0,0,0,0,0,0,0,0,0,0,1,1,0,0),
    list(0,0,0,0,0,0,0,0,0,0,1,1,0,0),
    list(0,0,0,0,0,0,0,0,0,0,1,1,0,0),
    list(0,0,1,1,0,0,0,0,0,0,1,1,0,0),
    list(0,0,1,1,3,0,0,0,0,4,1,1,0,0),
    list(0,0,6,1,1,1,1,1,1,1,1,5,0,0),
    list(0,0,0,6,1,1,1,1,1,1,5,0,0,0),
    list(0,0,0,0,0,0,0,0,0,0,0,0,0,0)
    ));

const seven1=number_matrix2rune(list(
    list(0,0,0,0,0,0,0,0,0,0,0,0,0,0),
    list(0,0,1,1,1,1,1,1,1,1,1,1,0,0),
    list(0,0,1,1,1,1,1,1,1,1,1,1,0,0),
    list(0,0,1,0,0,0,0,0,0,0,1,1,0,0),
    list(0,0,0,0,0,0,0,0,0,0,1,1,0,0),
    list(0,0,0,0,0,0,0,0,0,1,1,0,0,0),
    list(0,0,0,0,0,0,0,0,0,1,1,0,0,0),
    list(0,0,0,0,0,0,0,0,1,1,0,0,0,0),
    list(0,0,0,0,0,0,0,0,1,1,0,0,0,0),
    list(0,0,0,0,0,0,0,1,1,0,0,0,0,0),
    list(0,0,0,0,0,0,0,1,1,0,0,0,0,0),
    list(0,0,0,0,0,0,1,1,0,0,0,0,0,0),
    list(0,0,0,0,0,0,1,1,0,0,0,0,0,0),
    list(0,0,0,0,0,1,1,0,0,0,0,0,0,0),
    list(0,0,0,0,0,1,1,0,0,0,0,0,0,0),
    list(0,0,0,0,0,1,1,0,0,0,0,0,0,0),
    list(0,0,0,0,1,1,0,0,0,0,0,0,0,0),
    list(0,0,0,0,1,1,0,0,0,0,0,0,0,0),
    list(0,0,0,0,1,1,0,0,0,0,0,0,0,0),
    list(0,0,0,0,0,0,0,0,0,0,0,0,0,0)
    ));
    
const eight1=number_matrix2rune(list(
    list(0,0,0,0,0,0,0,0,0,0,0,0,0,0),
    list(0,0,0,4,1,1,1,1,1,1,3,0,0,0),
    list(0,0,4,1,1,1,1,1,1,1,1,3,0,0),
    list(0,0,1,1,5,0,0,0,0,6,1,1,0,0),
    list(0,0,1,1,0,0,0,0,0,0,1,1,0,0),
    list(0,0,1,1,0,0,0,0,0,0,1,1,0,0),
    list(0,0,1,1,0,0,0,0,0,0,1,1,0,0),
    list(0,0,1,1,3,0,0,0,0,4,1,1,0,0),
    list(0,0,6,1,1,1,1,1,1,1,1,5,0,0),
    list(0,0,4,1,1,1,1,1,1,1,1,3,0,0),
    list(0,0,1,1,5,0,0,0,0,6,1,1,0,0),
    list(0,0,1,1,0,0,0,0,0,0,1,1,0,0),
    list(0,0,1,1,0,0,0,0,0,0,1,1,0,0),
    list(0,0,1,1,0,0,0,0,0,0,1,1,0,0),
    list(0,0,1,1,0,0,0,0,0,0,1,1,0,0),
    list(0,0,1,1,0,0,0,0,0,0,1,1,0,0),
    list(0,0,1,1,3,0,0,0,0,4,1,1,0,0),
    list(0,0,6,1,1,1,1,1,1,1,1,5,0,0),
    list(0,0,0,6,1,1,1,1,1,1,5,0,0,0),
    list(0,0,0,0,0,0,0,0,0,0,0,0,0,0)
    ));
    
const nine1=number_matrix2rune(list(
    list(0,0,0,0,0,0,0,0,0,0,0,0,0,0),
    list(0,0,0,4,1,1,1,1,1,1,3,0,0,0),
    list(0,0,4,1,1,1,1,1,1,1,1,3,0,0),
    list(0,0,1,1,5,0,0,0,0,6,1,1,0,0),
    list(0,0,1,1,0,0,0,0,0,0,1,1,0,0),
    list(0,0,1,1,0,0,0,0,0,0,1,1,0,0),
    list(0,0,1,1,0,0,0,0,0,0,1,1,0,0),
    list(0,0,1,1,0,0,0,0,0,0,1,1,0,0),
    list(0,0,1,1,0,0,0,0,0,0,1,1,0,0),
    list(0,0,1,1,3,0,0,0,0,4,1,1,0,0),
    list(0,0,6,1,1,1,1,1,1,1,1,1,0,0),
    list(0,0,0,6,1,1,1,1,1,5,1,1,0,0),
    list(0,0,0,0,0,0,0,0,0,0,1,1,0,0),
    list(0,0,0,0,0,0,0,0,0,0,1,1,0,0),
    list(0,0,0,0,0,0,0,0,0,0,1,1,0,0),
    list(0,0,0,0,0,0,0,0,0,0,1,1,0,0),
    list(0,0,1,1,3,0,0,0,0,4,1,1,0,0),
    list(0,0,6,1,1,1,1,1,1,1,1,5,0,0),
    list(0,0,0,6,1,1,1,1,1,1,5,0,0,0),
    list(0,0,0,0,0,0,0,0,0,0,0,0,0,0)
    ));

const six1=turn_upside_down(nine1);
const zero=single(zero1);
const one=single(one1);
const two=single(two1);
const three=single(three1);
const four=single(four1);
const five=single(five1);
const six=single(six1);
const seven=single(seven1);
const eight=single(eight1);
const nine=single(nine1);

function dual(rune1,rune2){
    return beside(rune1,rune2);
}

const ten=dual(one1,zero1);
const eleven=dual(one1,one1);
const twelve=dual(one1,two1);
const thirteen=dual(one1,three1);
const fourteen=dual(one1,four1);
const fifteen=dual(one1,five1);
const sixteen=dual(one1,six1);
const seventeen=dual(one1,seven1);
const eighteen=dual(one1,eight1);
const nineteen=dual(one1,nine1);
const nums=[
    null,
    beside_frac(1.5/8.5,blank,beside_frac(1-1.5/7,one,blank)),
    beside_frac(1.5/8.5,blank,beside_frac(1-1.5/7,two,blank)),
    beside_frac(1.5/8.5,blank,beside_frac(1-1.5/7,three,blank)),
    beside_frac(1.5/8.5,blank,beside_frac(1-1.5/7,four,blank)),
    beside_frac(1.5/8.5,blank,beside_frac(1-1.5/7,five,blank)),
    beside_frac(1.5/8.5,blank,beside_frac(1-1.5/7,six,blank)),
    beside_frac(1.5/8.5,blank,beside_frac(1-1.5/7,seven,blank)),
    beside_frac(1.5/8.5,blank,beside_frac(1-1.5/7,eight,blank)),
    beside_frac(1.5/8.5,blank,beside_frac(1-1.5/7,nine,blank)),
    beside_frac(1.5/8.5,blank,beside_frac(1-1.5/7,ten,blank)),
    beside_frac(1.5/8.5,blank,beside_frac(1-1.5/7,eleven,blank)),
    beside_frac(1.5/8.5,blank,beside_frac(1-1.5/7,twelve,blank)),
    beside_frac(1.5/8.5,blank,beside_frac(1-1.5/7,thirteen,blank)),
    beside_frac(1.5/8.5,blank,beside_frac(1-1.5/7,fourteen,blank)),
    beside_frac(1.5/8.5,blank,beside_frac(1-1.5/7,fifteen,blank)),
    beside_frac(1.5/8.5,blank,beside_frac(1-1.5/7,sixteen,blank)),
    beside_frac(1.5/8.5,blank,beside_frac(1-1.5/7,seventeen,blank)),
    beside_frac(1.5/8.5,blank,beside_frac(1-1.5/7,eighteen,blank)),
    beside_frac(1.5/8.5,blank,beside_frac(1-1.5/7,nineteen,blank))
];

let chess=[
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
];

function single_box()
{
    const one_dir=beside_frac(1/20,square,blank);
    return make_cross(beside_frac(1/20,square,quarter_turn_left(one_dir)));
}
function make_one_line(num)
{
    const box=single_box();
    return num===1?box:beside_frac(1/num,box,make_one_line(num-1));
}
function chessboard(n)
{
    function ori_chessboard(m,n)
    {
        return m===1?make_one_line(n):stack_frac(1/m,make_one_line(n),ori_chessboard(m-1,n));
    }
    const frac=1/(2*n);
    return stack_frac(frac,blank,quarter_turn_left(stack_frac(frac,blank,quarter_turn_left(stack_frac(frac,blank,beside_frac(frac,blank,ori_chessboard(n-1,n-1)))))));
}
function single_chessman()
{
    const frac=1/7;
    return stack_frac(frac,blank,quarter_turn_left(stack_frac(frac,blank,quarter_turn_left(stack_frac(frac,blank,quarter_turn_left(stack_frac(frac,blank,circle)))))));
}
const piece=single_chessman();
function chessmen(game_state,n)
{
    function single_line(i,j)
    {
        return j===n?game_state[i][j]===0?blank:
                     game_state[i][j]===1?black(piece):
                                          white(piece)
                :beside_frac(1/(n-j+1),
                            game_state[i][j]===0?blank:
                            game_state[i][j]===1?black(piece):
                                                 white(piece),
                            single_line(i,j+1));
    }
    function complete(i)
    {
        return i===n?single_line(i,1):
                     stack_frac(1/(n-i+1),
                                single_line(i,1),
                                complete(i+1));
    }
    return complete(1);
}
const board=orange(square);

function row_nums(n)
{
    function helper(i)
    {
        return i===n?nums[i]:beside_frac(1/(n-i+1),nums[i],helper(i+1));
    }
    return helper(1);
}
function col_nums(n)
{
    const frac=1/(n+1);
    function helper(i)
    {
        return i===n?nums[i]:stack_frac(1/(n-i+1),nums[i],helper(i+1));
    }
    return stack_frac(frac,blank,helper(1));
}
function paint(game_state,n)
{
    const frac=1/(n+1);
    return overlay_frac(1/3,beside_frac(frac,col_nums(n),stack_frac(frac,row_nums(n),chessmen(game_state,n))),overlay_frac(1/2,beside_frac(frac,blank,stack_frac(frac,blank,chessboard(n))),beside_frac(frac,blank,stack_frac(frac,blank,board))));
}

let times=0;
let size=15;
let mode=-1;
let steps=null;
let chess_backup=null;
let times_backup=0;
let steps_backup=null;
let in_progress=false;
function play(x,y)
{
    function copy(ori)
    {
        let res=[
            [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
        ];
        for(let i=1;i<=size;i=i+1)
        {
            for(let j=1;j<=size;j=j+1)
            {
                res[i][j]=ori[i][j];
            }
        }
        return res;
    }
    const filter1a=[
        [1,0,0,0,0],
        [0,1,0,0,0],
        [0,0,1,0,0],
        [0,0,0,1,0],
        [0,0,0,0,1]
    ];
    const filter2a=[
        [0,0,0,0,1],
        [0,0,0,1,0],
        [0,0,1,0,0],
        [0,1,0,0,0],
        [1,0,0,0,0]
    ];
    const filter3a=[
        [0,0,0,0,0],
        [0,0,0,0,0],
        [1,1,1,1,1],
        [0,0,0,0,0],
        [0,0,0,0,0]
    ];
    const filter4a=[
        [0,0,1,0,0],
        [0,0,1,0,0],
        [0,0,1,0,0],
        [0,0,1,0,0],
        [0,0,1,0,0]
    ];
    const filter1b=[
        [1,0,0,0],
        [0,1,0,0],
        [0,0,1,0],
        [0,0,0,1]
    ];
    const filter2b=[
        [0,0,0,1],
        [0,0,1,0],
        [0,1,0,0],
        [1,0,0,0]
    ];
    const filter3b=[
        [0,0,0,0],
        [0,0,0,0],
        [1,1,1,1],
        [0,0,0,0]
    ];
    const filter4b=[
        [0,0,1,0],
        [0,0,1,0],
        [0,0,1,0],
        [0,0,1,0]
    ];
    const filter1c=[
        [1,0,0],
        [0,1,0],
        [0,0,1]
    ];
    const filter2c=[
        [0,0,1],
        [0,1,0],
        [1,0,0]
    ];
    const filter3c=[
        [0,0,0],
        [1,1,1],
        [0,0,0]
    ];
    const filter4c=[
        [0,1,0],
        [0,1,0],
        [0,1,0]
    ];
    const filter1d=[
        [1,0],
        [0,1]
    ];
    const filter2d=[
        [0,1],
        [1,0]
    ];
    const filter3d=[
        [0,0],
        [1,1]
    ];
    const filter4d=[
        [0,1],
        [0,1]
    ];
    const filter_p1=[
        [1,0,0,0],
        [0,1,0,0],
        [0,0,-0x3f3f3f3f,0],
        [0,0,0,1]
    ];
    const filter_p2=[
        [1,0,0,0],
        [0,-0x3f3f3f3f,0,0],
        [0,0,1,0],
        [0,0,0,1]
    ];
    const filter_p3=[
        [0,0,0,1],
        [0,0,1,0],
        [0,-0x3f3f3f3f,0,0],
        [1,0,0,0]
    ];
    const filter_p4=[
        [0,0,0,1],
        [0,0,-0x3f3f3f3f,0],
        [0,1,0,0],
        [1,0,0,0]
    ];
    const filter_p5=[
        [0,0,0,0],
        [0,0,0,0],
        [1,1,-0x3f3f3f3f,1],
        [0,0,0,0]
    ];
    const filter_p6=[
        [0,0,0,0],
        [0,0,0,0],
        [1,-0x3f3f3f3f,1,1],
        [0,0,0,0]
    ];
    const filter_p7=[
        [0,0,1,0],
        [0,0,1,0],
        [0,0,-0x3f3f3f3f,0],
        [0,0,1,0]
    ];
    const filter_p8=[
        [0,0,1,0],
        [0,0,-0x3f3f3f3f,0],
        [0,0,1,0],
        [0,0,1,0]
    ];
    /*
    const filter_e1=[
        [-0x3f3f3f3f,0,0,0,0,0],
        [0,1,0,0,0,0],
        [0,0,1,0,0,0],
        [0,0,0,1,0,0],
        [0,0,0,0,1,0],
        [0,0,0,0,0,-0x3f3f3f3f]
    ];
    const filter_e2=[
        [0,0,0,0,0,-0x3f3f3f3f],
        [0,0,0,0,1,0],
        [0,0,0,1,0,0],
        [0,0,1,0,0,0],
        [0,1,0,0,0,0],
        [-0x3f3f3f3f,0,0,0,0,0]
    ];
    const filter_e3=[
        [0,0,0,-0x3f3f3f3f,0,0],
        [0,0,0,1,0,0],
        [0,0,0,1,0,0],
        [0,0,0,1,0,0],
        [0,0,0,1,0,0],
        [0,0,0,-0x3f3f3f3f,0,0]
    ];
    const filter_e4=[
        [0,0,0,0,0,0],
        [0,0,0,0,0,0],
        [0,0,0,0,0,0],
        [-0x3f3f3f3f,1,1,1,1,-0x3f3f3f3f],
        [0,0,0,0,0,0],
        [0,0,0,0,0,0]
    ];*/
    function convolution_2D(next,filter,n)
    {
        let o=[
            [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
        ];
        let s=[
            [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
        ];
        for(let i=1;i<=size;i=i+1)
        {
            for(let j=1;j<=size;j=j+1)
            {
                s[i+2][j+2]=next[i][j];
            }
        }
        for(let i=1;i<=size;i=i+1)
        {
            for(let j=1;j<=size;j=j+1)
            {
                let sum=0;
                for(let a=0;a<n;a=a+1)
                {
                    for(let b=0;b<n;b=b+1)
                    {
                        sum=sum+s[j+a][i+b]*filter[a][b];
                    }
                }
                o[i][j]=sum;
            }
        }
        return o;
    }
    let value=[
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
    ];
    function compute_board(black_or_white)
    {
        let res=[
            [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
        ];
        for(let i=1;i<=size;i=i+1)
        {
            for(let j=1;j<=size;j=j+1)
            {
                res[i][j]=chess[i][j]===0?0:
                          chess[i][j]===1?black_or_white?1:-1:
                                          black_or_white?-1:1;
            }
        }
        return res;
    }
    const dir=[
        [0,1],
        [0,-1],
        [1,0],
        [-1,0],
        [1,1],
        [-1,-1],
        [1,-1],
        [-1,1],
        [0,2],
        [0,-2],
        [2,0],
        [-2,0],
        [2,2],
        [-2,-2],
        [2,-2],
        [-2,2]
    ];
    function check_neibour(x,y)
    {
        for(let i=0;i<16;i=i+1)
        {
            if(x+dir[i][0]>=1&&x+dir[i][0]<=size&&y+dir[i][1]>=1&&y+dir[i][1]<=size&&chess[x+dir[i][0]][y+dir[i][1]]!==0)
            {
                return true;
            }
            else
            {
                
            }
        }
        return false;
    }
    function compute_value(black_or_white)
    {
        const current_board_ai=compute_board(black_or_white);
        const current_board=compute_board(!black_or_white);
        let have=false;
        for(let i=1;i<=size;i=i+1)
        {
            for(let j=1;j<=size;j=j+1)
            {
                if(chess[i][j]!==0||!check_neibour(i,j))
                {
                    value[i][j]=-(0x3f3f3f3f);
                }
                else
                {
                    have=true;
                    let value_a=evaluate(current_board_ai,i,j);
                    let value_b=evaluate(current_board,i,j);
                    value[i][j]=(value_a+value_b)/2+2/((size/2-i)*(size/2-i)+(size/2-j)*(size/2-j));
                }
            }
        }
        if(!have)
        {
            for(let i=1;i<=size;i=i+1)
            {
                for(let j=1;j<=size;j=j+1)
                {
                    value[i][j]=2/((size/2-i)*(size/2-i)+(size/2-j)*(size/2-j));
                }
            }
        }
        else
        {
            
        }
        return null;
    }
    function count(value_map,n)
    {
        let res=0;
        for(let i=1;i<=size;i=i+1)
        {
            for(let j=1;j<=size;j=j+1)
            {
                if(value_map[i][j]===n)
                {
                    res=res+1;
                }
                else
                {
                    
                }
            }
        }
        return res;
    }
    let next=[
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
    ];
    function evaluate(b,x,y)
    {
        if(b[x][y]!==0)
        {
            return -1;
        }
        else
        {
            for(let i=1;i<=size;i=i+1)
            {
                for(let j=1;j<=size;j=j+1)
                {
                    next[i][j]=b[i][j];
                }
            }
            next[x][y]=1;
            let v=0;
            v=v+99999*count(convolution_2D(next,filter1a,5),5);
            v=v+99999*count(convolution_2D(next,filter2a,5),5);
            v=v+99999*count(convolution_2D(next,filter3a,5),5);
            v=v+99999*count(convolution_2D(next,filter4a,5),5);
            v=v+5000*count(convolution_2D(next,filter1b,4),4);
            v=v+5000*count(convolution_2D(next,filter2b,4),4);
            v=v+5000*count(convolution_2D(next,filter3b,4),4);
            v=v+5000*count(convolution_2D(next,filter4b,4),4);
            
            v=v+1000*count(convolution_2D(next,filter_p1,4),3);
            v=v+1000*count(convolution_2D(next,filter_p2,4),3);
            v=v+1000*count(convolution_2D(next,filter_p3,4),3);
            v=v+1000*count(convolution_2D(next,filter_p4,4),3);
            v=v+1000*count(convolution_2D(next,filter_p5,4),3);
            v=v+1000*count(convolution_2D(next,filter_p6,4),3);
            v=v+1000*count(convolution_2D(next,filter_p7,4),3);
            v=v+1000*count(convolution_2D(next,filter_p8,4),3);
            
            v=v+1000*count(convolution_2D(next,filter1c,3),3);
            v=v+1000*count(convolution_2D(next,filter2c,3),3);
            v=v+1000*count(convolution_2D(next,filter3c,3),3);
            v=v+1000*count(convolution_2D(next,filter4c,3),3);
            v=v+10*count(convolution_2D(next,filter1d,2),2);
            v=v+10*count(convolution_2D(next,filter2d,2),2);
            v=v+10*count(convolution_2D(next,filter3d,2),2);
            v=v+10*count(convolution_2D(next,filter4d,2),2);
            return v;
        }
    }
    function generate_legal_moves(black_or_white)
	{
	    let max_value=-0x3f3f3f3f;
	    compute_value(black_or_white);
		for(let i=1;i<=size;i=i+1)
		{
		    for(let j=1;j<=size;j=j+1)
		    {
		        max_value=math_max(max_value,value[i][j]);
		    }
		}
		let legal_moves=null;
		for(let i=1;i<=size;i=i+1)
		{
		    for(let j=1;j<=size;j=j+1)
		    {
		        if(max_value===value[i][j])
		        {
		            legal_moves=pair(pair(i,j),legal_moves);
		        }
		        else
		        {
		            
		        }
		    }
		}
		return legal_moves;
	}
	/*
	const live_3=[
	    [1,0],
	    [0,1],
	    [1,1],
	    [1,-1]
	];
	function check_live_3(b)
	{
	    for(let x=1;x<=size;x=x+1)
	    {
	        for(let y=1;y<=size;y=y+1)
	        {
	            for(let i=0;i<4;i=i+1)
	            {
	                let ok=true;
	                if(b[x][y]!==0)
	                {
	                    ok=false;
	                    break;
	                }
	                else
	                {
	                    
	                }
	                for(let j=1;j<=3;j=j+1)
	                {
	                    if(!(x+j*live_3[i][0]>=1&&x+j*live_3[i][0]<=size&&y+j*live_3[i][1]>=1&&y+j*live_3[i][1]<=size&&b[x+j*live_3[i][0]][y+j*live_3[i][1]]===1))
	                    {
	                        ok=false;
	                        break;
	                    }
	                    else
	                    {
	                        
	                    }
	                }
	                if(ok&&!(x+4*live_3[i][0]>=1&&x+4*live_3[i][0]<=size&&y+4*live_3[i][1]>=1&&y+4*live_3[i][1]<=size&&b[x+4*live_3[i][0]][y+4*live_3[i][1]]===0))
	                {
	                    ok=false;
	                }
	                else
	                {
	                    
	                }
	                if(ok)
	                {
	                    return pair(x,y);
	                }
	                else
	                {
	                    
	                }
	            }
	        }
	    }
	    return null;
	}*/
    function decide(black_or_white)
    {
        /*
		function make_move(next,black_or_white)
		{
			chess[head(next)][tail(next)]=black_or_white?1:2;
		}
		function delete_move(next)
		{
			chess[head(next)][tail(next)]=0;
		}
        function alpha_beta(black_or_white,depth,alpha,beta,current_step)
        {
            
        }*/
        function random_find(list_to_go)
        {
            return is_null(tail(list_to_go))||math_random()<0.5?head(list_to_go)
                                                               :random_find(tail(list_to_go));
        }
        /*
        let live_3_step=check_live_3(compute_board(black_or_white));
        if(!is_null(live_3_step))
        {
            return live_3_step;
        }
        else
        {
            
        }*/
        const dici=random_find(generate_legal_moves(black_or_white));
        
        return dici;
        /*
        nx=math_floor(math_random()*size+1);
        while(nx>size)
        {
            nx=math_floor(math_random()*size+1);
        }
        ny=math_floor(math_random()*size+1);
        while(ny>size)
        {
            ny=math_floor(math_random()*size+1);
        }
        while(chess[nx][ny]!==0)
        {
            nx=math_floor(math_random()*size+1);
            while(nx>size)
            {
                nx=math_floor(math_random()*size+1);
            }
            ny=math_floor(math_random()*size+1);
            while(ny>size)
            {
                ny=math_floor(math_random()*size+1);
            }
        }
        return pair(nx,ny);*/
    }
    function check_full()
    {
        let is_full=true;
        for(let i=1;i<=size;i=i+1)
        {
            for(let j=1;j<=size;j=j+1)
            {
                if(chess[i][j]===0)
                {
                    is_full=false;
                    break;
                }
                else
                {
                    
                }
            }
            if(!is_full)
            {
                break;
            }
            else
            {
                
            }
        }
        return is_full;
    }
    function check_end(x,y,n){
    if(
    ((x-4)>0&&chess[x-4][y]===1&&chess[x-3][y]===1&&chess[x-2][y]===1&&chess[x-1][y]===1&&chess[x][y]===1)||
    ((x-3)>0&&(x+1)<=n&&chess[x-3][y]===1&&chess[x-2][y]===1&&chess[x-1][y]===1&&chess[x][y]===1&&chess[x+1][y]===1)||
    ((x-2)>0&&(x+2)<=n&&chess[x-2][y]===1&&chess[x-1][y]===1&&chess[x][y]===1&&chess[x+1][y]===1&&chess[x+2][y]===1)||
    ((x-1)>0&&(x+3)<=n&&chess[x-1][y]===1&&chess[x][y]===1&&chess[x+1][y]===1&&chess[x+2][y]===1&&chess[x+3][y]===1)||
    ((x+4)<=n&&chess[x][y]===1&&chess[x+1][y]===1&&chess[x+2][y]===1&&chess[x+3][y]===1&&chess[x+4][y]===1)||
    
    ((y-4)>0&&chess[x][y-4]===1&&chess[x][y-3]===1&&chess[x][y-2]===1&&chess[x][y-1]===1&&chess[x][y]===1)||
    ((y-3)>0&&(y+1)<=n&&chess[x][y-3]===1&&chess[x][y-2]===1&&chess[x][y-1]===1&&chess[x][y]===1&&chess[x][y+1]===1)||
    ((y-2)>0&&(y+2)<=n&&chess[x][y-2]===1&&chess[x][y-1]===1&&chess[x][y]===1&&chess[x][y+1]===1&&chess[x][y+2]===1)||
    ((y-1)>0&&(y+3)<=n&&chess[x][y-1]===1&&chess[x][y]===1&&chess[x][y+1]===1&&chess[x][y+2]===1&&chess[x][y+3]===1)||
    ((y+4)<=n&&chess[x][y]===1&&chess[x][y+1]===1&&chess[x][y+2]===1&&chess[x][y+3]===1&&chess[x][y+4]===1)||
    
    ((x-4)>0&&(y-4)>0&&chess[x-4][y-4]===1&&chess[x-3][y-3]===1&&chess[x-2][y-2]===1&&chess[x-1][y-1]===1&&chess[x][y]===1)||
    ((x-3)>0&&(y-3)>0&&(x+1)<=n&&(y+1)<=n&&chess[x-3][y-3]===1&&chess[x-2][y-2]===1&&chess[x-1][y-1]===1&&chess[x][y]===1&&chess[x+1][y+1]===1)||
    ((x-2)>0&&(y-2)>0&&(x+2)<=n&&(y+2)<=n&&chess[x-2][y-2]===1&&chess[x-1][y-1]===1&&chess[x][y]===1&&chess[x+1][y+1]===1&&chess[x+2][y+2]===1)||
    ((x-1)>0&&(y-1)>0&&(x+3)<=n&&(y+3)<=n&&chess[x-1][y-1]===1&&chess[x][y]===1&&chess[x+1][y+1]===1&&chess[x+2][y+2]===1&&chess[x+3][y+3]===1)||
    ((x+4)<=n&&(y+4)<=n&&chess[x][y]===1&&chess[x+1][y+1]===1&&chess[x+2][y+2]===1&&chess[x+3][y+3]===1&&chess[x+4][y+4]===1)||
    
    ((x-4)>0&&(y+4)>0&&chess[x-4][y+4]===1&&chess[x-3][y+3]===1&&chess[x-2][y+2]===1&&chess[x-1][y+1]===1&&chess[x][y]===1)||
    ((x-3)>0&&(y+3)>0&&(x+1)<=n&&(y-1)<=n&&chess[x-3][y+3]===1&&chess[x-2][y+2]===1&&chess[x-1][y+1]===1&&chess[x][y]===1&&chess[x+1][y-1]===1)||
    ((x-2)>0&&(y+2)>0&&(x+2)<=n&&(y-2)<=n&&chess[x-2][y+2]===1&&chess[x-1][y+1]===1&&chess[x][y]===1&&chess[x+1][y-1]===1&&chess[x+2][y-2]===1)||
    ((x-1)>0&&(y+1)>0&&(x+3)<=n&&(y-3)<=n&&chess[x-1][y+1]===1&&chess[x][y]===1&&chess[x+1][y-1]===1&&chess[x+2][y-2]===1&&chess[x+3][y-3]===1)||
    ((x+4)<=n&&(y-4)<=n&&chess[x][y]===1&&chess[x+1][y-1]===1&&chess[x+2][y-2]===1&&chess[x+3][y-3]===1&&chess[x+4][y-4]===1))
    {return 1;}
    else if(
    ((x-4)>0&&chess[x-4][y]===2&&chess[x-3][y]===2&&chess[x-2][y]===2&&chess[x-1][y]===2&&chess[x][y]===2)||
    ((x-3)>0&&(x+1)<=n&&chess[x-3][y]===2&&chess[x-2][y]===2&&chess[x-1][y]===2&&chess[x][y]===2&&chess[x+1][y]===2)||
    ((x-2)>0&&(x+2)<=n&&chess[x-2][y]===2&&chess[x-1][y]===2&&chess[x][y]===2&&chess[x+1][y]===2&&chess[x+2][y]===2)||
    ((x-1)>0&&(x+3)<=n&&chess[x-1][y]===2&&chess[x][y]===2&&chess[x+1][y]===2&&chess[x+2][y]===2&&chess[x+3][y]===2)||
    ((x+4)<=n&&chess[x][y]===2&&chess[x+1][y]===2&&chess[x+2][y]===2&&chess[x+3][y]===2&&chess[x+4][y]===2)||
    
    ((y-4)>0&&chess[x][y-4]===2&&chess[x][y-3]===2&&chess[x][y-2]===2&&chess[x][y-1]===2&&chess[x][y]===2)||
    ((y-3)>0&&(y+1)<=n&&chess[x][y-3]===2&&chess[x][y-2]===2&&chess[x][y-1]===2&&chess[x][y]===2&&chess[x][y+1]===2)||
    ((y-2)>0&&(y+2)<=n&&chess[x][y-2]===2&&chess[x][y-1]===2&&chess[x][y]===2&&chess[x][y+1]===2&&chess[x][y+2]===2)||
    ((y-1)>0&&(y+3)<=n&&chess[x][y-1]===2&&chess[x][y]===2&&chess[x][y+1]===2&&chess[x][y+2]===2&&chess[x][y+3]===2)||
    ((y+4)<=n&&chess[x][y]===2&&chess[x][y+1]===2&&chess[x][y+2]===2&&chess[x][y+3]===2&&chess[x][y+4]===2)||
    
    ((x-4)>0&&(y-4)>0&&chess[x-4][y-4]===2&&chess[x-3][y-3]===2&&chess[x-2][y-2]===2&&chess[x-1][y-1]===2&&chess[x][y]===2)||
    ((x-3)>0&&(y-3)>0&&(x+1)<=n&&(y+1)<=n&&chess[x-3][y-3]===2&&chess[x-2][y-2]===2&&chess[x-1][y-1]===2&&chess[x][y]===2&&chess[x+1][y+1]===2)||
    ((x-2)>0&&(y-2)>0&&(x+2)<=n&&(y+2)<=n&&chess[x-2][y-2]===2&&chess[x-1][y-1]===2&&chess[x][y]===2&&chess[x+1][y+1]===2&&chess[x+2][y+2]===2)||
    ((x-1)>0&&(y-1)>0&&(x+3)<=n&&(y+3)<=n&&chess[x-1][y-1]===2&&chess[x][y]===2&&chess[x+1][y+1]===2&&chess[x+2][y+2]===2&&chess[x+3][y+3]===2)||
    ((x+4)<=n&&(y+4)<=n&&chess[x][y]===2&&chess[x+1][y+1]===2&&chess[x+2][y+2]===2&&chess[x+3][y+3]===2&&chess[x+4][y+4]===2)||
    
    ((x-4)>0&&(y+4)>0&&chess[x-4][y+4]===2&&chess[x-3][y+3]===2&&chess[x-2][y+2]===2&&chess[x-1][y+1]===2&&chess[x][y]===2)||
    ((x-3)>0&&(y+3)>0&&(x+1)<=n&&(y-1)<=n&&chess[x-3][y+3]===2&&chess[x-2][y+2]===2&&chess[x-1][y+1]===2&&chess[x][y]===2&&chess[x+1][y-1]===2)||
    ((x-2)>0&&(y+2)>0&&(x+2)<=n&&(y-2)<=n&&chess[x-2][y+2]===2&&chess[x-1][y+1]===2&&chess[x][y]===2&&chess[x+1][y-1]===2&&chess[x+2][y-2]===2)||
    ((x-1)>0&&(y+1)>0&&(x+3)<=n&&(y-3)<=n&&chess[x-1][y+1]===2&&chess[x][y]===2&&chess[x+1][y-1]===2&&chess[x+2][y-2]===2&&chess[x+3][y-3]===2)||
    ((x+4)<=n&&(y-4)<=n&&chess[x][y]===2&&chess[x+1][y-1]===2&&chess[x+2][y-2]===2&&chess[x+3][y-3]===2&&chess[x+4][y-4]===2))
    {return 2;}
    else {return 0;}
}
    
    if(in_progress)
    {
        chess=copy(chess_backup);
        times=times_backup;
        steps=steps_backup;
    }
    else
    {
        in_progress=true;
        chess_backup=copy(chess);
        times_backup=times;
        steps_backup=steps;
    }
    if(times===0)
    {
        if(x<2||x>19||(y!==0&&y!==1&&y!==2))
        {
            return "Invalid input. The size of chessboard must be in the range [2,19], and the mode can only be 0(human vs human), 1(human vs machine, human first), 2(human vs machine, machine first)";
        }
        else
        {
            
        }
        for(let i=1;i<=size;i=i+1)
        {
            for(let j=1;j<=size;j=j+1)
            {
                chess[i][j]=0;
            }
        }
        size=x;
        mode=y;
        steps=null;
        display("Game starts now! The chessboard in this round is a "+stringify(size)+"*"+stringify(size)+" square. The black plays first.");
        if(mode===2)
        {
            const next=decide(true);
            steps=pair(next,steps);
            chess[head(next)][tail(next)]=1;
            times=times+1;
        }
        else
        {
            
        }
    }
    else
    {
        if(x===0&&y===0)
        {
            if(is_null(steps))
            {
                return "There is no step which you can regret.";
            }
            else
            {
                if(mode!==0)
                {
                    if(!is_null(tail(steps)))
                    {
                        chess[head(head(steps))][tail(head(steps))]=0;
                        chess[head(head(tail(steps)))][tail(head(tail(steps)))]=0;
                        steps=tail(tail(steps));
                        times=times+1;
                        display("The "+(times%2===0?"black":"white")+" successfully regreted a step.");
                    }
                    else
                    {
                        return "There is no step which you can regret.";
                    }
                }
                else
                {
                    const last=head(steps);
                    chess[head(last)][tail(last)]=0;
                    steps=tail(steps);
                    display("The "+(times%2===0?"black":"white")+" successfully regreted a step.");
                }
            }
            times=times-2;
        }
        else if(x===-1&&y===-1)
        {
            times=-1;
            display("The game is stopped by players.");
        }
        else
        {
            if(x<1||x>size||y<1||y>size)
            {
                return "The coordinates must be in the range [1,"+stringify(size)+"].";
            }
            else if(chess[x][y]!==0)
            {
                return "The position is already occupied.";
            }
            else
            {
                
            }
            steps=pair(pair(x,y),steps);
            chess[x][y]=times%2===0?2:1;
            let is_end=check_end(x,y,size);
            let is_full=check_full();
            if(is_end!==0||is_full)
            {
                if(is_end===1)
                {
                    display("Black wins!");
                }
                else if(is_end===2)
                {
                    display("White wins!");
                }
                else
                {
                    display("Draw. No winner!");
                }
                times=-1;
            }
            else
            {
                display("Playing.");
            }
            if(mode!==0&&is_end===0&&!is_full)
            {
                if(times===-1)
                {
                    display("Game over.");
                }
                else
                {
                    display("This is the "+(times%2===0?"black":"white")+" turn.");
                }
                const next=decide(mode===2?true:false);
                steps=pair(next,steps);
                chess[head(next)][tail(next)]=mode===1?2:1;
                is_end=check_end(head(next),tail(next),size);
                is_full=check_full();
                if(is_end!==0||is_full)
                {
                    if(is_end===1)
                    {
                        display("Black wins!");
                    }
                    else if(is_end===2)
                    {
                        display("White wins!");
                    }
                    else
                    {
                        display("Draw. No winner!");
                    }
                    times=-1;
                }
                else
                {
                    display("Playing.");
                    times=times+1;
                }
            }
            else
            {
                
            }
        }
    }
    if(times===-1)
    {
        display("Game over.");
    }
    else
    {
        display("This is the "+(times%2===0?"black":"white")+" turn.");
    }
    times=times+1;
    in_progress=false;
    return show(paint(chess,size));
}

display("Welcome to our game - Five in a Line(五目並べ or 五子棋)!");
display("Instructions:");
display("Initialization: play(chessboard_size, mode)");
display("    The size of chessboard size should be a integer in the range [2,19], and the mode can only be 0(human vs human), 1(human vs machine, human first), 2(human vs machine, machine first)");
display("Move:           play(x,y)");
display("    The x and y coordinates should be integers in the range [1,size].");
display("Regret:         play(0,0)");
display("    Regret a step in human vs human mode or two steps in human vs machine mode.");
display("Stop:           play(-1,-1)");
display("    Stop the game.");
show(red(heart));
/*
let inprogress = false;
let state_backup = undefined;
function tt(){
    display(bb);
    if(inprogress) {
        state = copy(state_backup);
    } else {
        inprogress = true;
        state_backup = copy(state);
    }

    expensive_operations();
    
    inprogress = false;
}*/