use std::fs;

fn main() {
    let content = fs::read_to_string("demo.txt");
    match content {
        Ok(content) => println!("{}", content),
        Err(e) => println!("error handling file: {}", e),
    }
}
