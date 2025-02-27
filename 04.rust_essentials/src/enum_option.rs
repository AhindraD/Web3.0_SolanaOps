fn main() {
    let s = String::from("Ahindra");
    let x = 'x';
    let ans = find_first_x(s, x);
    match ans {
        Some(i) => println!("Char: {} present at index : {}", x, i),
        None => println!("Not found..."),
    }
}

fn find_first_x(str: String, x: char) -> Option<u8> {
    let mut index = 0;
    for char in str.chars() {
        if char == x {
            return Some(index);
        }
        index += 1;
    }

    None
}
