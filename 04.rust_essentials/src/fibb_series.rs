fn main() {
    let nth: u32 = 9;
    println!("n-th fib: {}", fib_nth(nth))
}

fn fib_nth(n: u32) -> u32 {
    let mut first: u32 = 0;
    let mut second: u32 = 1;
    let mut vec: Vec<u32> = Vec::new();

    if n == 0 {
        return first;
    } else if n == 1 {
        return second;
    }
    vec.push(first);
    vec.push(second);

    for _i in 1..n {
        let temp = first;
        first = second;
        second += temp;
        vec.push(second);
    }
    println!("{:?}", vec);
    return second;
}