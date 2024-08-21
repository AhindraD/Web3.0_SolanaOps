fn main() {
    let _signed_int: i32 = -555;
    let _unsigned_int: u32 = 999;
    let _float_one: f32 = 3.1415;
    let sent_1 = String::from("hello world to the world of rust");
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




    // let first_word = get_first_word(sentence);
    // println!("{}", first_word)
}

// fn get_first_word(sentence: String) -> String {

// }
