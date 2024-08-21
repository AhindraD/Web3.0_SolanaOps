

fn main() {
    // Variables - Strings, Integers, Floats, Boolean
    let _if_valid: bool = true;
    let _signed_int: i32 = -555; // can be both positive and negative - SIGNed
    let mut _unsigned_int: u32 = 999; // to make it mutable  -  Only POSITIVE
    let _float_one: f32 = 3.1415;
    let sent_1 = String::from("hello world to the world of rust");

    //Loops
    for i in 0..10 {
        if i % 2 == 1 {
            println!("{} - {}", sent_1, i);
        }
    }

    //GET Char At Index
    let nth_char = sent_1.chars().nth(300);
    // println!("{}", nth_char.unwrap());  //FORECED - ciuld lear to runtime error

    //IDEAL - pattern matching
    match nth_char {
        Some(x) => println!("{}", x),
        None => println!("No char found at that index"),
    }

    //Function Call
    let first_word = get_first_word(sent_1);
    println!("first word: {}", first_word)
}

fn get_first_word(sentence: String) -> String {
    let mut res = String::new();
    for char in sentence.chars() {
        if char == ' ' {
            break;
        } else {
            res.push_str(char.to_string().as_str());
        }
    }
    return res;
}
