fn main() {
    let _signed_int: i32 = -555;
    let _unsigned_int: u32 = 999;
    let _float_one: f32 = 3.1415;
    let sent_1 = String::from("hello world");
    for i in 0..100 {
        if i % 2 == 1 {
            println!("{} - {}", sent_1, i);
        }
    }
}
