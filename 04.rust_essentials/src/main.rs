fn main() {
    let s1 = String::from("dynamic, so stpred in heap");
    println!("String length: {}", get_str_len(&s1))
}

fn get_str_len(s: &str) -> usize {
    return s.chars().count();
}
